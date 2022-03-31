import { Base } from "../base/Base";


export class EditableCol<T> extends Base<T> {
  // constructor(top: IEditableCol) {
  //   super(top);
  // //   this.eeStorage = eeStorage;
  // }

  setField(fieldn, value, defVal, actions, internalError) {
    this.exec({
      prev: mylib.def(this[fieldn], defVal),
      value,
      method: 'set',
      action: actions[fieldn],
      internalError,
      args: {
        n: this.name,
        value
      }
    });

    this[fieldn] = value;

    return this;
  }

  getIncorrectNameReg() {
    return /([^а-яёіґїє !?]+\s*)+$/i;
  }

  nameCorrects(name = this.name, coln) {
    const cols = g.cols[`${coln}s`];
    let incorrects;
    const minLen = 3;
    const msg = msg => msg && `"${name}" - не корректное имя для ${coln === 'cat' ? 'категории' : 'песни'}. ${msg}`;
    const errors = [];
    const ret = err => this.textCorrects(name).merge({ errors: err ? [{ message: err }] : null });

    if (!mylib.isStr(name)) return ret(msg('Не верный формат'));
    if (name === '?' && coln === 'com') return ret('');
    if (name === '') return ret(msg('Пустое имя'));
    if (incorrects = name.match(this.getIncorrectNameReg())) return ret(msg(`Недопустимые символы${incorrects[0] === name ? '' : ' в конце'} (${incorrects[0]})`));
    if (name.length < minLen) return ret(msg(`Минимальное количество символов - ${minLen}`));
    if (cols.find(col => col.name === name && this.wid !== col.wid)) return ret(`именем "${name}" уже названа одна из ${coln === 'cat' ? 'категорий' : 'песен'}`);

    return ret('');
  }

  prepareName(name) {
    return mylib.isStr(name) ? name.replace(this.getIncorrectNameReg(), '') : name;
  }

  textCorrects(text) {
    if (!mylib.isStr(text)) return new ICorrectsBox().setIncorrectType('[got not string]');
    const errors = [];
    const warnings = [];
    const unknowns = [];

    text.split(/[^а-яёіґїє]/i).filter(realWord => {
      if (!realWord.match(/[её]/i) || realWord.match(/[іґїє]/i)) return false;
      const lower = realWord.toLowerCase();
      const word = lower.replace(/ё/g, 'е');
      const parts = lower.split(/[а-дж-я]*([её])/).filter(p => p);

      if (this.eeStorage[word] == null) unknowns.push({ message: `Слово '${realWord}' ещё не встречалось среди существующих песен. Проверь, пожалуйста, правильность написания букв ё/е, встречающихся в нём`, word: realWord, code: 2, });

      [].concat(this.eeStorage[word]).forEach((type, typei, typea) => {
        const isE = parts[typei] === 'е';
        const info = code => ({ code, message: `${['Не верно', 'Возможно не верно'][code]} указана ${typea.length > 1 ? `${typei + 1}-я из букв ё/е` : `буква ${parts[typei]}`} в слове '${realWord}'`, word: realWord, letter: parts[typei], pos: typei, alt: isE ? 'ё' : 'е' });

        if (type === 0) {
          if (isE) warnings.push(info(1));
        } else {
          if (isE) {
            if (type === 2) errors.push(info(0));
          } else if (type === 1) errors.push(info(0));
        }
      });
    });

    return new ICorrectsBox(errors, warnings, unknowns);
  }
}

