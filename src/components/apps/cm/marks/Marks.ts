

  class IMarks {
    constructor() {
      const marks = mylib.getLS(this.ls()) || { s: [] };

      this.stack = marks.s.filter(comw => g.cols.coms.some(com => com.wid === comw));
      this.setComs();
    }
    
    listenOnEmpty(cb) {
      this.onEmptyListener = cb;
    }
    
    setComs() {
      const prevLen = (this.coms || '').length;
      this.coms = this.stack.map((comw) => g.cols.coms.find(com => com.wid === comw)).filter(c => c);
      const len = this.coms.length;
      
      if (prevLen !== len) mylib.func(this.onEmptyListener).call(len < 1);
    }

    goto(comw) {
      if (comw) {
        g.nav.setCom(comw);
      } else {
        this.stack.splice(this.stack.indexOf(comw), 1);
      }

      this.save();
    }

    bumerang(comw) {
      if (this.stack.length < 2) return;
      const comwi = this.stack.indexOf(comw);
      const find = dir => this.stack.indexOf(this.stack[dir > 0 ? 'reduce' : 'reduceRight']((curr, cw, cwi, cwa) => curr == null ? cw === comw ? cwi : null : curr > cwa.length ? curr : cw, null));

      const index = find(comwi ? -1 : 1);

      [this.stack[index], this.stack[comwi]] =
        [this.stack[comwi], this.stack[index]];
      
      this.setComs();
      g.ss();
      this.save();
    }

    toggle(comw) {
      const index = this.stack.indexOf(comw);

      if (index < 0) this.stack = this.stack.slice(0).concat(comw);
      else this.stack = this.stack.slice(0).filter(ccomw => ccomw !== comw);

      this.save();
      this.setComs();
      g.ss();
    }

    replace(marks) {
      this.stack = marks.slice(0);
      this.setComs();
      this.save();
    }

    append(marks, isRepInclusive) {
      const olds = isRepInclusive
        ? this.stack.filter(comw => marks.indexOf(comw) < 0)
        : this.stack;
      const news = !isRepInclusive
        ? marks.filter(comw => this.stack.indexOf(comw) < 0)
        : marks;
      this.replace(olds.concat(news));
    }

    insertMarks(marks, description) {
      if (this.stack.length === 0 && !description) {
        this.replace(marks);
        g.ss();
        return new Promise(resolve => resolve(true));
      } else {
        return mylib.modal((cb) => {
          return {
            title: 'Добавить в закладки',
            description,
            inputs: [
              {
                type: 'button',
                value: 'Заменить список',
                closable: true,
                onClick: () => {
                  this.replace(marks);
                  cb(true);
                  g.ss();
                }
              }
            ].concat(this.stack.some(comw => ~marks.indexOf(comw))
              ? [
                {
                  title: 'Добавить в конец:',
                  type: 'button',
                  value: 'Добавить с новыми',
                  closable: true,
                  onClick: () => {
                    this.append(marks, true);
                    cb(true);
                    g.ss();
                  }
                }, {
                  type: 'button',
                  value: 'Добавить со старыми',
                  closable: true,
                  onClick: () => {
                    this.append(marks);
                    cb(true);
                    g.ss();
                  }
                }
              ]
              : {
                type: 'button',
                value: 'Добавить в конец',
                closable: true,
                onClick: () => {
                  this.append(marks);
                  cb(true);
                  g.ss();
                }
              })
          };
        });
      }
    }

    isMarked(comw) {
      return this.stack.indexOf(comw) > -1;
    }

    save() {
      mylib.setLS(this.ls(), { s: this.stack });
    }

    ls() {
      return 'cm_marks';
    }
    
    getNextComw() {
      const index = this.stack.indexOf(g.nav.ccom.wid);
      if (index < 0) return;
      const next = index >= this.stack.length - 1 ? 0 : index - -1;
      return this.stack[next];
    }
    
    next(isEmitBeforeComChange = false, phase = null) {
      g.nav.setCom(this.getNextComw(), phase, isEmitBeforeComChange);
    }
    
    getPrevComw() {
      const index = this.stack.indexOf(g.nav.ccom.wid);
      if (index < 0) return;
      const prev = index <= 0 ? this.stack.length - 1 : index - 1;
      return this.stack[prev];
    }
    
    prev(isEmitBeforeComChange = false, phase = null) {
      g.nav.setCom(this.getPrevComw(), phase, isEmitBeforeComChange);
    }
  }