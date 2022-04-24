;'use strict';

(function CmMeetingsModule(moduleName) {

  try {
    
    const g = applicanter.scope('cm');
    const mylib = g.mylib;
    
    class IEditableMeeting extends g.IBased {
      constructor(top) {
        super(top);
        this.isEditable = true;
      }
      
      track(track) {
        return ['meetings', ['w', '===', this.wid]].concat(track || []);
      }
      
      args(args) {
        return mylib.overlap({
          n: this.name + '',
          b: this.begin - 0,
          e: this.end - 0
        }, args);
      }
      
      clearStack() {
        this.setStack([]);
      }
      
      exec(bag) {
        mylib.setExecs(mylib.overlap({}, bag, {
          args: mylib.overlap({}, bag.args, {
            name: this.name,
            id: this.wid,
          })
        }));
      }
      
      setStack(value) {
        this.exec({
          scope: this.scope('set.meet'),
          prev: this.stack,
          value,
          method: 'set',
          action: 'setMeetingStack',
          args: {
            value
          }
        });
        
        this.stack = value.slice(0);
      }
      
      rename(name = '') {
        this.exec({
          scope: this.scope('rename'),
          prev: this.name,
          value: name,
          method: 'set',
          action: 'renameMeeting',
          args: {
            name
          },
          onSet: (exec) => exec.args.name = exec.value
        });
        
        this.name = name;
      }
      
      scope() {
        return (['meeting', this.wid].concat(Array.from(arguments))).join('.');
      }
      
      removeEnd() {
        this.exec({
          action: 'setMeetingRegular'
        });
        
        this.end = 0;
      }
      
      appendMarks(value = []) {
        this.setStack(this.stack.filter(comw => value.indexOf(comw) < 0).concat(value));
      }
      
      remove() {
        this.exec({
          action: 'remMeeting'
        });
        
        g.meetings.remove(this);
      }
      
      editableDetails() {
        return {
          inputs: [
            {
              title: 'Переименовать',
              value: this.name,
              type: 'text',
              onInput: ({event}) => {
                this.rename(event.target.value);
                g.ss();
              }
            },
            this.stack.length == 0
              ? null
              : {
                value: 'Открепить закладки',
                type: 'button',
                confirm: `Открепить все закладки из события ${this.getTitle()}`,
                closable: true,
                onClick: () => {
                  this.clearStack();
                  g.ss();
                }
              },
            g.selectedComs.length < 1
              ? null
              : {
                value: 'Записать выбранные',
                type: 'button',
                closable: true,
                onClick: () => {
                  const isThereMarks = this.stack.length > 0;
                  if (!isThereMarks) {
                    this.setStack(g.selectedComs);
                    g.selectedComs = [];
                    g.ss();
                  }
                  
                  return isThereMarks;
                },
                modal: {
                  title: 'Записать выбранные',
                  inputs: [
                    {
                      value: 'Перезаписать',
                      type: 'button',
                      closable: true,
                      onClick: () => {
                        this.setStack(g.selectedComs);
                        g.selectedComs = [];
                        g.ss();
                      }
                    }, {
                      value: 'Добавить',
                      type: 'button',
                      closable: true,
                      onClick: () => {
                        this.appendMarks(g.selectedComs);
                        g.selectedComs = [];
                        g.ss();
                      }
                    }
                  ]
                }
              },
            !this.end
              ? null
              : {
                type: 'button',
                value: 'Сделать регулярным',
                confirm: `Сделать регулярным событие "${this.n}"`,
                onClick: () => {
                  this.removeEnd();
                  g.ss();
                }
              },
            {
              type: 'button',
              value: 'Удалить',
              className: 'm-ko',
              confirm: `Удалить событие "${this.n}"`,
              onClick: () => {
                this.remove();
                g.ss();
              }
            },
          ]
        };
      }
    }
    
    g.IEditableMeeting = IEditableMeeting;
    
    class IEditableMeetings {
      constructor() {
        this.isEditable = true;
      }
      
      track(track) {
        return ['meetings'].concat(track || []);
      }
      
      add({ n, b, e, w }) {
        mylib.setExecs({
          action: 'addMeeting',
          args: {
            name: n,
            begin: b,
            end: e,
            id: w
          }
        });
      }
      
      remove(mee) {
        const index = this.stack.indexOf(mee);
        if (index >= 0) {
          this.stack.splice(index, 1);
        }
      }
      
      create() {
        let n;
        let b = Date.now();
        let e = Date.now() + 1000 * 60 * 60 * 24;
        const w = Date.now();
        let bs = new Date(b).toISOString().split('T')[0];
        let es = new Date(e).toISOString().split('T')[0];
        let isOneDay = true;
        
        mylib.modal({
          title: 'Новое событие',
          inputs: [
            {
              title: 'Название',
              placeholder: 'Название',
              type: 'text',
              onInput: ({input}) => n = input.value
            }, {
              title: 'Дата начала',
              type: 'date',
              min: bs,
              value: bs,
              onInput: ({input, inputs}) => {
                b = new Date(input.value).getTime();
                bs = new Date(b + 1000 * 60 * 60 * 24).toISOString().split('T')[0];
                
                if (b > e) {
                  e = 0 + b;
                  es = new Date(e).toISOString().split('T')[0];
                }
              },
            }, {
              title: 'Один день',
              type: 'checkbox',
              checked: () => isOneDay,
              onInput: ({input}) => isOneDay = !isOneDay,
            }, {
              title: 'Дата окончания',
              type: 'date',
              min: () => bs,
              value: es,
              onInput: ({input}) => e = new Date(input.value).getTime(),
              hidden: () => isOneDay
            }
          ],
          buttons: [
            {
              title: 'Создать',
              disabled: ({inputs}) => !n,
              onClick: () => {
                this.add({n, b, e, w, s: []});
                g.ss();
              },
            }, {
              title: 'Отмена'
            }
          ]
        });
      }
      
      insertMarksToMeeting(marks) {
        mylib.modal({
          title: 'Добавить закладки',
          inputs: this.stack.reduce((list, meeting) => {
            const buttons = [];
            const isNoMarks = meeting.stack.length < 1;
            
            buttons.push({
              titleHtml: meeting.getTitle(),
              value: isNoMarks ? 'Добавить сюда' : 'Перезаписать',
              type: 'button',
              closable: true,
              onClick: () => {
                meeting.setStack(marks);
                g.ss();
              },
            });
            
            if (!isNoMarks)
              buttons.push({
                value: 'Дополнить',
                type: 'button',
                closable: true,
                onClick: () => {
                  meeting.appendMarks(marks);
                  g.ss();
                },
              });
            
            return list.concat(buttons);
          }, []),
        });
      }
      
      streamIn() {
        mylib.modal({
          title: 'Добавить закладки',
          inputs: this.stack.reduce((list, meeting) => {
            const buttons = [];
            const isNoMarks = meeting.stack.length < 1;
            
            buttons.push({
              titleHtml: meeting.getTitle(),
              value: isNoMarks ? 'Добавить сюда' : 'Перезаписать',
              type: 'button',
              closable: true,
              onClick: () => {
                meeting.setStack(marks);
                g.ss();
              },
            });
            
            if (!isNoMarks)
              buttons.push({
                value: 'Дополнить',
                type: 'button',
                closable: true,
                onClick: () => {
                  meeting.appendMarks(marks);
                  g.ss();
                },
              });
            
            return list.concat(buttons);
          }, []),
        });
      }
    }
    
    g.IEditableMeetings = IEditableMeetings;
    
  } catch (error) {
    mylib.dconsl(error.stack);
    throw error;
  }


})('');




