import { ReactNode } from "react";
import { ModalConfigInput } from "../../../../complect/modal/Modal.model";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { cmStorage } from "../../../../store/jstorages";
import { Com } from "../col/com/Com";
import { cols } from "../cols/Cols";
import { MarksOnEmptyCallback } from "./Marks.model";


class IMarks {
  coms: Com[] = [];
  stack: number[] = [];
  onEmptyListener?: MarksOnEmptyCallback;

  save() {
    cmStorage.set('marks', this.stack);
  }

  load() {
    return this.setStack(cmStorage.getOr('marks', []));
  }

  setStack(stack: number[]) {
    this.stack = stack;
    this.setComs();
    return stack;
  }

  listenOnEmpty(cb: MarksOnEmptyCallback) {
    this.onEmptyListener = cb;
  }

  setComs() {
    const prevLen = (this.coms || '').length;
    this.coms = this.stack.map((comw) => cols.coms.find(com => com.wid === comw)).filter(c => c) as Com[];
    const len = this.coms.length;

    if (prevLen !== len) mylib.func(this.onEmptyListener).call(len < 1);
  }

  goto(comw: number) {
    if (comw) {
      g.nav.setCom(comw);
    } else {
      this.stack.splice(this.stack.indexOf(comw), 1);
    }

    this.save();
  }

  add(adds: number | number[]) {
    this.stack = this.stack.concat(adds);
    this.save();
    return this.stack;
  }

  remove(comw: number) {
    this.stack = this.stack.filter(ccomw => ccomw !== comw);
    this.save();
    return this.stack;
  }

  bumerang(comw: number) {
    if (this.stack.length < 2) return;
    const comwi = this.stack.indexOf(comw);
    const find = (dir: number) => this.stack.indexOf(this.stack[dir > 0 ? 'reduce' : 'reduceRight']((curr, cw, cwi, cwa) => curr == null ? cw === comw ? cwi : null : curr > cwa.length ? curr : cw, null));

    const index = find(comwi ? -1 : 1);

    [this.stack[index], this.stack[comwi]] =
      [this.stack[comwi], this.stack[index]];

    this.setComs();
    // g.ss();
    this.save();
  }

  toggle(comw: number) {
    const index = this.stack.indexOf(comw);

    if (index < 0) this.stack = this.stack.slice(0).concat(comw);
    else this.stack = this.stack.slice(0).filter(ccomw => ccomw !== comw);

    this.save();
    this.setComs();
    // g.ss();
  }

  replace(marks: number[]) {
    this.stack = marks.slice(0);
    this.setComs();
    this.save();
  }

  append(marks: number[], isRepInclusive: boolean) {
    const olds = isRepInclusive
      ? this.stack.filter(comw => marks.indexOf(comw) < 0)
      : this.stack;
    const news = !isRepInclusive
      ? marks.filter(comw => this.stack.indexOf(comw) < 0)
      : marks;
    this.replace(olds.concat(news));
  }

  insertMarks(marks: number[], description: ReactNode) {
    if (this.stack.length === 0 && !description) {
      this.replace(marks);
      g.ss();
      return new Promise(resolve => resolve(true));
    } else {

      return modalService.open((cb) => {
        const inputs: Partial<ModalConfigInput>[] = [
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
        ];
  
        if (this.stack.some(comw => ~marks.indexOf(comw))) {
          inputs.push({
            title: 'Добавить в конец:',
            type: 'button',
            value: 'Добавить с новыми',
            closable: true,
            onClick: () => {
              this.append(marks, true);
              cb(true);
              // g.ss();
            }
          });
          inputs.push({
            type: 'button',
            value: 'Добавить со старыми',
            closable: true,
            onClick: () => {
              this.append(marks, false);
              cb(true);
              // g.ss();
            }
          });
        } else inputs.push({
          type: 'button',
          value: 'Добавить в конец',
          closable: true,
          onClick: () => {
            this.append(marks, false);
            cb(true);
            // g.ss();
          }
        });
        return {
          title: 'Добавить в закладки',
          description,
          inputs,
        };
      });
    }
  }

  isMarked(comw: number) {
    return this.stack.indexOf(comw) > -1;
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

export const marks = new IMarks();