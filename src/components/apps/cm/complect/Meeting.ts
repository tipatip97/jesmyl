export {};

  export class IMeeting {
    // get name() { return this.getOrBase('noname', 'n'); }
    // set name(value) { this.n = value; }

    // get wid() { return this.getOrBase(0, 'w'); }
    // set wid(value) { this.w = value; }

    // get begin() { return this.getOrBase(0, 'b'); }
    // set begin(value) { this.b = value; }

    // get end() { return this.getOrBase(0, 'e'); }
    // set end(value) { this.e = value; }

    // get stack() { return this.getOrBase([], 's'); }
    // set stack(value) { this.s = value; }


    // writeMarks(stack, isAppend = false) {

    // }

    showDetails() {
      // const edits = this.isEditable
      //   ? this.editableDetails() || {}
      //   : {};

      // mylib.modal({
      //   title: `Действия с событием ${this.name}`,
      //   descriptionHtml: this.stack.length < 1
      //     ? 'Закладок нет'
      //     : this.stack.map(comw => {
      //       const com = g.cols.getCom(comw);

      //       return `<div>${com == null ? 'Не существующая песня' : `${!com.index ? '?' : com.index - -1}. ${com.name}`}</div>`;
      //     }).join(''),
      //   inputs: [
      //     this.stack.length === 0
      //       ? null
      //       : {
      //         value: 'Добавить в мои закладки',
      //         type: 'button',
      //         onClick: () => {
      //           g.marks.insertMarks(this.stack);
      //           g.ss();
      //         },
      //       }
      //   ].concat(edits.inputs || [])
      // });
    }

    getTitle() {
      // return `${this.name}${this.end ? `, ${this.getDate()}` : ''}`;
    }

    getDate() {
      // if (!this.end) return '';

      // const date = new Date(this.begin).toLocaleDateString();
      // const interval = this.begin === this.end ? '' : ` (${mylib.intervalToString(this.begin, this.end, 'day', 'year')})`;

      // return `${date}${interval}`;
    }
  }