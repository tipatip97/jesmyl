;'use strict';

(function CmStreamsModule(moduleName) {

  try {
    
    const g = applicanter.scope('cm');
    const mylib = g.mylib;
    
    class IEditableStreamManager {
      constructor() {
      }
      
      toggle(cb) {
        if (this.current) this.close(cb);
        else this.init(cb);
      }
      
      init(cb) {
        const streamName = (Date.now() + Math.random()).toString();
        let isSharable = false;
        
        mylib.modal({
          title: 'Начать стрим',
          inputs: [
            {
              title: 'По ссылке',
              type: 'checkbox',
              onClick: () => isSharable = !isSharable
            }, {
              title: 'Ссылка на стрим',
              value: applicanter.prepareStarterHref('sharable_stream', {
                appAction: {
                  app: 'cm',
                  type: 'joinStream',
                  val: streamName
                }
              }),
              hidden: () => !isSharable,
              onFocus: event => event.target.select()
            }
          ],
          buttons: [
            {
              title: 'Начать стрим',
              onClick: () => this.create(streamName, isSharable, cb)
            },
            'Отмена'
          ]
        });
      }
      
      create(streamName, isSharable, cb) {
        const stream = new g.IStream({
          w: streamName,
          f: applicanter.localAuth.fio,
          c: g.nav[g.Phase.Com],
          b: -1,
          s: isSharable ? 1 : 0
        });
        
        stream.create(
          resp => {
            this.current = stream;
            this.sub = stream;
            stream.printLocal();
            cb && cb(stream);
          },
          () => mylib.alert('Что-то пошло не так...', 'Упс!')
        );
        
      }
      
      resetCurrentStream() {
        this.current.resetLocal();
        this.current = null;
        this.sub = null;
      }
      
      async close(cb) {
        if (await mylib.confirm('Закончить текущий стрим?', 'Стрим')) {
          this.current.close(resp => {
            this.resetCurrentStream();
            
            cb && cb();
          }, () => mylib.alert('Что-то пошло не так...', 'Упс!'));
        }
      }
      
      setComw(value, cb) {
        this.current && this.current.setComw(value, cb);
      }
      
      isOtherComw(comw) {
        return this.current && this.current.comw !== comw;
      }
      
      get currentId() {
        return this.current && this.current.id;
      }
      
      wakeUp(cb, errCb) {
        new g.IStream()
          .wakeUp(
            stream => {
              this.current = stream;
              this.sub = stream;
              cb && cb(stream);
            },
            stream => {
              stream.resetLocal();
              errCb && errCb(this);
            }
          );
      }
      
      setBlocki(blocki = 0) {
        this.current && this.current.setBlocki(blocki);
      }
      
    }
    
    g.IEditableStreamManager = IEditableStreamManager;
    
    class IEditableStream {
      
      setBlocki(blocki, cb) {
        if (blocki == null || blocki === this.blocki) return;
        
        this.send({
          action: 'changeStreamBlocki',
          args: { blocki, comw: this.comw }
        }, resp => {
          this.printLocal();
          cb && cb();
        }, () => mylib.alert('Что-то пошло не так...', 'Упс!'));
      }
      
      setComw(comw, cb) {
        if (comw == null || comw === this.comw) return;
        
        this.send({
          action: 'changeStreamComw',
          args: { comw }
        }, resp => {
          this.comw = comw;
          this.printLocal();
          cb && cb();
        }, () => mylib.alert('Что-то пошло не так...', 'Упс!'));
      }
      
      send(bag, cb, errCb) {
        mylib.sendExecs(mylib.overlap({}, bag, {
          args: mylib.overlap({}, bag.args, {
            id: this.id,
          })
        }), cb, errCb);
      }
      
      scope() {
        return (['stream', this.id].concat(Array.from(arguments))).join('.');
      }
      
      close(cb, errCb) {
        this.send({
          action: 'closeStream',
        }, () => cb(), errCb);
      }
      
      create(cb, errCb) {
        const {comw, isSharable, fio} = this;
        this.send({
          action: 'createStream',
          args: {comw, isSharable, fio}
        }, cb, errCb);
      }
      
      getData() {
        return [this.comw, this.blocki, this.id];
      }
      
      parseDataFrom(data, cb, errCb) {
        if (data == null) {
          errCb && errCb(this);
          return;
        }
        
        const [comw, blocki, id] = data;
        
        this.id = id;
        this.comw = comw;
        this.blocki = blocki;
        
        cb && cb(this);
      }
      
      printLocal(cb) {
        mylib.setLS(this.lsName, this.getData());
        cb && cb();
      }
      
      resetLocal(cb) {
        mylib.remLS(this.lsName);
        cb && cb();
      }
      
      onClose(cb) {
        this.resetLocal(cb);
      }
      
      pullLocal(cb, errCb) {
        this.parseDataFrom(mylib.getLS(this.lsName, null), cb, errCb);
      }
      
      wakeUp(cb, errCb) {
        this.pullLocal(cb, errCb);
        
        return this;
      }
      
      update(cb) {
        this.printLocal(cb);
      }
    }
    
    g.IEditableStream = IEditableStream;
    
    class CCollapsePane extends React.Component {
      constructor() {
        super();
      }
      
      render() {
        return !g.streamManager.isCurr && g.streamManager.isSub
          ? null
          : ce('span',
            {
              key: 'stream-button',
              style: {
                '--svg-color': g.streamManager.current
                  ? 'red'
                  : 'blue'
              },
              onClick: () => g.streamManager.toggle((stream) => {
                if (stream) g.subscribeStream(stream);
                else g.ss();
                this.forceUpdate();
              })
            },
            g.streamManager.isCurr
              ? svg('video-off-outline', ' Закончить стрим')
              : svg('video-outline', ' Начать стрим')
          );
      }
    }
    
    g.CollapsePane = CCollapsePane;
    
    if (window.applicanter && window.applicanter.$listen) {
      applicanter.$listen('Cm.beforeComChange', 'stream-managr', async event => {
        const [com, comw, phase] = event.values || [];

        if (g.streamManager.isOtherComw(comw))
          if (!await mylib.confirm('Проходит стрим другой песни. При переключении у всех подписчиков произойдёт смена песни', 'Стрим', 'Изменить песню', 'Не переходить'))
            return false;
      });

      applicanter.$listen('Cm.onComChange', 'onComChange for streamManager', async event => {
        const [com, comw] = event.values || [];
        if (com) {
          g.streamManager.setComw(comw, () => g.ss());
        }
      });
    }
  
  } catch (error) {
    mylib.consl(error.stack).config({type: 0});
    throw error;
  }


})('');
