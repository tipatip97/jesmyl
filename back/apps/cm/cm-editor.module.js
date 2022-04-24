;'use strict';

(function CmEditorModule(moduleName) {

    const g = applicanter.scope('cm');
    const mylib = g.mylib;
    
    g.eeStorage = mylib.typ({}, window.json.cm_e_e_rules);
    const simpleChord = '([ACDFG]#?|[EH])';
    
    g.additionalControlPanelButtons = () => g.nav.phase === g.Phase.Editor || !g.isAccessed('canRedact') || g.streamManager.isSub
      ? null
      : ce('button',
        {
          key: 'redact-button',
          className: 'mbtn m-no msm redact-button',
          onClick: async event => {
            event.stopPropagation();
            g.ss({ phase: g.Phase.Editor });
          },
        },
        svg('edit-outline', 'R')
      );
    
    class IEditableCols {
      
      addCat() {
        const now = g.momentNow();
        
        const cat = new g.ICat({
          n: '',
          w: now,
          m: now,
          s: []
        });
        this.cats.push(cat);
        
        mylib.setExecs({
          action: 'catAdd',
          args: {
            catw: now
          }
        });
        
        return now;
      }
      
      addCom() {
        const now = g.momentNow();
        
        const com = new g.ICom({
          n: '',
          w: now,
          m: now
        }, false, g.eeStorage);
        this.coms.push(com);
        
        mylib.setExecs({
          action: 'comAdd',
          args: {
            comw: now
          }
        });
        
        return now;
      }
      
    }
    
    g.IEditableCols = IEditableCols;
    
    class ICorrectsBox {
      constructor(errors, warnings, unknowns) {
        this.errors = Array.isArray(errors) && errors.length ? errors : null;
        this.warnings = Array.isArray(warnings) && warnings.length ? warnings : null;
        this.unknowns = Array.isArray(unknowns) && unknowns.length ? unknowns : null;
      }
      
      setIncorrectType(message) {
        this.incorrectType = message || true;
        return this;
      }
      
      collect() {
        this.collection = [];
        
        Array.from(arguments).forEach(arg => {
          if (['errors', 'warnings', 'unknowns'].indexOf(arg) > -1 && Array.isArray(this[arg])) {
            this.collection = this.collection.concat(this[arg]);
          }
        });
        
        if (!this.collection.length) this.collection = null;
        
        return this;
      }
      
      map(cb) {
        if (!Array.isArray(this.collection)) return this;
        this.collection = this.collection.map(cb);
        
        return this;
      }
      
      filter(cb = e => e) {
        if (!Array.isArray(this.collection)) return this;
        this.collection = this.collection.filter(cb);
        
        return this;
      }
      
      merge() {
        const args = Array.from(arguments);
        const merge = (arg, name) => {
          const target = this[name];
          const source = arg[name];
          
          if (Array.isArray(target)) {
            if (Array.isArray(source))
              source.forEach(src => target.push(src));
          } else if (Array.isArray(source))
            this[name] = [].concat(source);
        };
        
        args.forEach(arg => {
          if (arg == null) return;
          merge(arg, 'errors');
          merge(arg, 'warnings');
          merge(arg, 'unknowns');
        });
        
        return this;
      }
    }
    
    class IEditableCol extends g.IBased {
      constructor(top, eeStorage) {
        super(top);
        this.eeStorage = eeStorage;
      }
      
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
    
    
    class IEditableCat extends IEditableCol {
      constructor(top, eeStorage) {
        super(top, eeStorage);
      }
      
      exec(bag) {
        mylib.setExecs(mylib.overlap({}, bag, {
          scope: `${this.wid}.${bag.action}`,
          args: mylib.overlap({}, bag.args, {
            catw: this.wid,
            name: this.name
          }),
          generalId: this.wid
        }));
      }
      
      removeStack() {
        this.exec({
          action: 'delStack',
        });
      }
      
      resetComs() {
        this._coms = null;
        this._wraps = null;
      }
      
      searchErrors(term) {
        if (term === 'ERRORS') {
          const pushErrors = () => {
            const errors = [];
            return [
              errors,
              text => text && errors.push(text),
            ];
          };
          const prepErrors = (comw, errors) => {
            return errors.map((text, texti) => {
              return ce('div',
                {
                  key: `error for com ${comw} errror #${texti}`,
                  className: 'white-space-pre',
                },
                text
              );
            });
          };
          
          const wraps = this.coms
            .map(com => {
              const [errors, pushError] = pushErrors();
              
              pushError(com.nameCorrects().errors);
              com.texts.forEach((text, texti) => pushError(com.blockCorrects(text, 't', texti).errors));
              com.chords.forEach((text, texti) => pushError(com.blockCorrects(text, 'c', texti).errors));
              pushError();
              
              return errors.length ? { com, errors: prepErrors(com.wid, errors) } : null;
            })
            .filter(s => s);
          
          return wraps.length ? wraps : null;
        }
      }
      
      setField(fieldn, value, defVal, actions, internalError) {
        super.setField(fieldn, value, defVal, actions, internalError);
      }
      
      setTrack(strack = '[]') {
        try {
          const prev = mylib.clone(this.track);
          const track = this.track = JSON.parse(strack);
          this.exec({
            action: 'catSetTrack',
            method: 'set',
            prev,
            value: track,
            argValue: 'track',
            args: { }
          });
          
          return true;
        } catch (error) {
          return false;
        }
      }
      
      rename(name) {
        const bag = this.nameCorrects(name);
        
        mylib.dconsl(bag);
        
        this.exec({
          action: 'catRename',
          method: 'set',
          prev: mylib.def(this.name, name),
          value: name,
          internalError: bag.collect('errors').map(({ message }) => ce('p', {}, message)).collection,
          internalWarning: bag.collect('warnings', 'unknowns').map(({ message }) => ce('p', {}, message)).collection,
          args: {
            newName: name,
          }
        });
        this.name = name;
        this.incorrectName = !!bag.errors;
        
        return this;
      }
      
      remove() {
        this.removed = true;
        this.exec({ action: 'catDel' });
      }
      
      toggleCom(com) {
        const index = this.stack.indexOf(com.wid);
        let action, method, value;
        
        if (!~index) {
          this.stack.push(com.wid);
          action = 'comBind';
        } else {
          this.stack.splice(index, 1);
          action = 'comUnbind';
        }
        
        this.exec({
          action,
          args: {
            comn: com.name,
            comw: com.wid,
          }
        });
      }
      
      nameCorrects(name) {
        return super.nameCorrects(name, 'cat');
      }
    }
    
    g.IEditableCat = IEditableCat;
    
    class IEditableCom extends IEditableCol {
      constructor(top, eeStorage) {
        super(top, eeStorage);
      }
      
      setField(fieldn, value, defVal, actions, internalError) {
        super.setField(fieldn, value, defVal, mylib.typ({
          b: 'comSetDefaultBemolType',
          l: 'comSetLangi',
         }, actions), internalError);
      }
      
      exec(bag) {
        mylib.setExecs(mylib.overlap({}, bag, {
          scope: this.scope(bag.action, bag.uniq),
          args: mylib.overlap({}, bag.args, {
            comw: this.wid,
            name: this.name
          }),
          generalId: this.wid
        }));
      }
      
      scope(action, uniq) {
        return [this.wid, '.', mylib.typ('[action]', action), ':', [].concat(mylib.def(uniq, ['[uniq]'])).join(',')].join('');
      }
      
      rename(newName) {
        const bag = this.nameCorrects(newName);
        
        this.exec({
          action: 'comRename',
          method: 'set',
          prev: mylib.def(this.name, newName),
          value: newName,
          internalError: bag.collect('errors').map(({ message }) => ce('p', {}, message)).collection,
          internalWarning: bag.collect('warnings', 'unknowns').map(({ message }) => ce('p', {}, message)).collection,
          args: {
            newName
          }
        });
        this.name = newName;
        this.incorrectName = !!bag.errors;
        
        return this;
      }
      
      remove() {
        this.removed = true;
        this.exec({ action: 'comDel' });
      }
      
      setAudio(value) {
        this.exec({
          action: 'comSetAudio',
          method: 'set',
          prev: this.a || '\n',
          value,
          args: {
            value
          }
        });
        this.a = value;
      }
      
      correctRename(name) {
        return mylib.isStr(name) ? this.rename(name.replace(this.getIncorrectNameReg(), '')) : name;
      }
      
      nameCorrects(name) {
        return super.nameCorrects(name, 'com');
      }
      
      getOrdersOnBlockDeletion(coln, coli) {
        const indexes = [];
        const containers = this.orders.filter((ord, ordi) => {
          const isContains = ord[coln] === coli;
          if (isContains) indexes.push({ordi, ord});
          return isContains;
        });
        let anchors = [];
        
        if (coln === 't') {
          anchors = this.orders.filter((ord, ordi) => {
            return containers.some(contOrd => {
              const isAnch = ord.a != null && contOrd.u === ord.a;
              if (isAnch) indexes.push({ordi, ord});
              return isAnch;
            });
          });
        }
        
        return { containers, anchors, indexes: indexes.sort((a, b) => b.ordi - a.ordi) };
      }
      
      removeBlock(coln, coli) {
        const {containers, anchors, indexes} = this.getOrdersOnBlockDeletion(coln, coli);
        
        if (coln === 't') {
          
          indexes.forEach(({ord, ordi}) => {
            this.removeOrderBlock(ord);
          });
        }
        
        this.updateOrderSticks(coln, coli, -1, coln === 'c');
        
        this.exec({
          action: 'removeBlock',
          args: {
            coli,
            coln
          }
        });
        this[coln].splice(coli, 1);
        
        if (coln === 'c') this.resetChordLabels();
      }
      
      insertBlocks(coln = 't' || 'c', coli, value = '', prev = '...') {
        if (coli === this[coln].length - 1) {
          this.add(coln, '');
        } else {
          this[coln]
            .concat(value)
            .forEach((ccol, ccoli, ccola) => {
              if (ccoli <= coli) return;
              const val = ccoli - 1 === coli
                ? value
                : ccoli === coli
                  ? prev
                  : '' + ccola[ccoli - 1];
              
              this.changeBlock(coln, ccoli, val);
            });
          
          this.updateOrderSticks(coln, coli, 1);
        }
        
        if (coln === 'c') this.resetChordLabels();
      }
      
      updateOrderSticks(coln, coli, delta, isReset) {
        this.ords.forEach((ord, ordi) => {
          if (isReset ? ord[coln] >= coli : ord[coln] > coli) {
            const value = isReset && ord[coln] === coli
              ? -1
              : ord[coln] - -delta;
                
            this.exec({
              uniq: [ordi, coln],
              prev: 0 - -ord[coln],
              value,
              method: 'set',
              action: 'updateOrderStick',
              args: {
                coln,
                value,
                ordi,
                wid: ord.w
              }
            });
            ord[coln] = value;
          }
        });
        this.afterOrderChange();
      }
      
      prepareCorrectTextLine(line) {
        return line
          .replace(/(\s*)[«„]\s*/g, (all, pre) => `${pre ? ' ' : ''}"`)
          .replace(/\s*[»“](\s*)/g, (all, post) => `"${post ? ' ' : ''}`)
          .replace(/(\s*)[—–](\s*)/g, (all, pre, post) => `${pre && post ? ' ' : ''}-${pre && post ? ' ' : ''}`)
          .replace(/\s*([,.;!?:])\s*([^"])/g, '$1 $2');
      }
      
      parseBlocks(blocks) {
        const chords = [];
        const orders = [];
        const trombs = [];
        const texts = [];
        const cclen = this.chords.length;
        const ctlen = this.texts.length;
        let isMoved = true;
        
        const [firstLeveled, firstAltLeveled] = g.setts.styles.filter(style => style.l === 1).map(style => style.name);
        const [secondLeveled] = g.setts.styles.filter(style => style.l === 2).map(style => style.name);
        const [thirdLeveled] = g.setts.styles.filter(style => style.l === 3).map(style => style.name);
        const [inherited] = g.setts.styles.filter(style => style.isInherit).map(style => style.name);
        
        blocks.forEach((block, blocki) => {
          const ctromb = { arr: [] };
          trombs.push(ctromb);
          
          let schords = '';
          let stexts = '';
          
          block.split(/\n/).forEach((line) => {
            const trimmedLine = line.trim().replace(/\s+/g, ' ');
            
            if (trimmedLine.match(/^([A-H][^A-H]*)+$/)) {
              schords += (schords ? '\n' : '') + trimmedLine;
            } else {
              const lowerTrimmedLine = trimmedLine.toLowerCase();
              const taggedStyle = stexts ? null : g.setts.styles.find(style => (style.tg || []).some(tag => lowerTrimmedLine.replace(/[^а-я]/g, '') === tag.toLowerCase().trim()));
              
              if (taggedStyle) ctromb.s = taggedStyle.name;
              else {
                !this.n && this.correctRename(trimmedLine);
                stexts += (stexts ? '\n' : '') + this.prepareCorrectTextLine(trimmedLine);
                const letters = trimmedLine.match(/[аеёиоуэыяюaeouiіїє]/gi);
                ctromb.arr.push(letters ? letters.length : 0);
              }
            }
          });
          
          ctromb.str = JSON.stringify(ctromb.arr);
          ctromb.len = ctromb.arr.length;
          
          if (schords) {
            const index = chords.findIndex(c => c === schords);
            ctromb.c = index < 0 ? chords.length : index;
            if (index < 0) chords.push(schords);
          }
          if (stexts) texts.push(stexts);
        });
        let prevS;
        
        const isSingleBlockStyle = (name => {
          trombs.some((tromb) => {
            const styleName = (tromb.s || '').trim();
            if (!styleName) return false;
            
            if (!name) {
              name = styleName;
              return false;
            }
            
            if (name !== styleName) {
              name = '';
              return true;
            }
          });
          return name;
        })('');
        
        texts.forEach((text, texti) => {
          const ctromb = trombs[texti];
          let t = ctlen + texti, c, s = ctromb.s, m = ctromb.m || 0;
          
          if (chords.length) {
            if (ctromb.c != null) {
              c = ctromb.c;
            } else if (chords.length === 1) {
              c = cclen;
            } else if (chords.length === texts.length) {
              c = cclen + texti;
            } else {
              const sibling = trombs.find(tromb => tromb != ctromb && tromb.s && ctromb.s && tromb.s.trim() === ctromb.s.trim());
              c = sibling ? sibling.c : 0;
            }
          }
          if (isSingleBlockStyle && chords.length === 1) {
            s = s || (!(t % 2) ? firstLeveled : firstAltLeveled);
          } else if (chords.length === texts.length) {
            s = s || (c === 0 ? firstLeveled : c === 1 ? secondLeveled : thirdLeveled);
          } else {
            if (c === 0) isMoved = !isMoved;
            else isMoved = true;
            
            s = s || (c === 0 ? isMoved ? firstAltLeveled : firstLeveled : c === 1 ? secondLeveled : thirdLeveled);
          }
          if (!ctromb.s) {
            const prev = s;
            if (prevS === s) s = inherited;
            prevS = prev;
          }
          
          orders.push({ t, c, s, p: [] });
        });
        
        this.add('c', chords);
        this.add('t', texts);
        this.addOrders(orders);
        
        g.ss();
      }
      
      parseBlocksFromClipboard(clipboardEvent, cb) {
        const blocks = (clipboardEvent.clipboardData || window.clipboardData)
          .getData('text')
          .trim()
          .split(/\n\s*\n/);
        
        if ((cb && cb(blocks)) !== false) this.parseBlocks(blocks);
      }
      
      blockCorrects(value, coln, blocki) {
        const blockNum = blocki == null ? '' : `. (${blocki - -1}-й блок)`;
        const ret = err => new ICorrectsBox(err ? [{ message: err, code: 0 }] : null);
        
        if (coln === 'c') {
          const errors = [];
          const text = value
            .trim()
            .split(/([\n\s ]+)/)
            .map((chord, chordi) => {
              if (!(chordi % 2) && !g.textedChord.exec(chord)) {
                errors.push(chord);
                return `[${chord}]`;
              }
              return chord;
            })
            .join(' ');
          const few = errors.length > 1;
          
          return ret(errors.length ? `Аккорд${few ? 'ы' : ''} "${errors.join('; ')}" не верно написан${few ? 'ы' : ''}${blockNum}:\n\n${text}\n\n` : null);
        } else {
          let isThereErrors;
          let mistakes = '';
          const text = (value || '').replace(/[^-ієїа-яё().,":;!?\s']+/gi, all => {
            isThereErrors = true;
            mistakes += all;
            return `[${all}]`;
          });
          if (isThereErrors) return ret(`Присутствуют недопустимые символы${blockNum}: ${mistakes}\n\n${text}\n\n`);
          
          const { level } = this.bracketsTransformed(value);
          if (level) {
            const pre = level < 0 ? 'открывающ' : 'закрывающ';
            const text = mylib.declension(
              Math.abs(level),
              `${pre}уюся кавычку`,
              `${pre}ихся кавычки`,
              `${pre}ихся кавычек`
            );
            return ret(`В тексте присутствует непарное количество ковычек.\nНеобходимо добавить ${Math.abs(level)} ${text}${blockNum}\n\n`);
          }
          return this.textCorrects(value);
        }
        
        return ret();
      }
      
      changeBlock(coln, coli, val) {
        const value = coln === 't' ? val : this.transBlock(val, 12 - this.transPosition);
        const bag = this.blockCorrects(value, coln);
        
        this.exec({
          uniq: [coln, coli],
          prev: this[coln][coli],
          value,
          method: 'set',
          action: 'changeBlocks',
          internalError: bag.collect('errors').map(({ message }) => ce('p', {}, message)).collection,
          internalWarning: bag.collect('warnings', 'unknowns').map(({ message }) => ce('p', {}, message)).collection,
          args: {
            text: value,
            coln,
            index: coli
          }
        });
        
        this[coln][coli] = value;
        
        if (coln === 'c') this.resetChordLabels();
      }
      
      letSeparateCol(coli, ccoln) {
        const splits = this.texts[coli].split(/\n{2,}/);
        const owns = [];
        const oths = [];
        const ocoln = ccoln === 't' ? 'c' : 't';
        
        this.ords.forEach((ord) => {
          if (owns.indexOf(ord) < 0 && ord[ccoln] === coli) owns.push(ord);
        });
        
        this.ords.forEach((ord) => {
          if (oths.indexOf(ord) < 0 && owns.some(o => ord[ocoln] === o[ocoln])) oths.push(ord);
        });
        
        this.ords.forEach((ord) => {
          if (owns.indexOf(ord) < 0 && oths.some(o => ord[ccoln] === o[ccoln])) owns.push(ord);
        });
        
        mylib.modal({
          title: 'Разделение текста',
        });
      }
      
      replaceBtoEquiv(coli, equiv) {
        this.changeBlock('c', coli, (this.chords[coli] || '').replace(/B/g, equiv));
      }
      
      setNativeNumber(cat, number) {
        let refs = this.refs;
                                  
        if (refs == null || mylib.isArr(refs)) {
          refs = this.refs = {};
        }
        const prevRefs = mylib.clone(this.refs);
        
        refs[cat.wid] = number;
        this.refs = refs;
        
        this.exec({
          prev: prevRefs,
          value: refs,
          method: 'set',
          action: 'setNativeNum',
          args: {
            catn: cat.name,
            number,
            refs
          }
        });                       
      }
      
      removeNativeNumber(cat, number) {
        let refs = this.refs;
        if (refs == null || mylib.isArr(refs)) {
          refs = this.refs = {};
        }
        const nNum = refs[cat.wid];
        const prevRefs = mylib.clone(this.refs);
        
        delete refs[cat.wid];
        this.refs = refs;
        
        this.exec({
          action: 'removeNativeNum',
          args: {
            catn: cat.name,
            catw: cat.wid,
            nNum
          }
        });
                                  
      }
      
      setChordsTon(chords) {
        this.exec({
          prev: mylib.clone(this.chords),
          value: chords,
          method: 'set',
          action: 'changeTon',
          args: {
            chords,
            ton: ((chords[0] || '').match(g.chordLike) || [])[0]
          },
          onSet: exec => {
            exec.args.init = ((exec.args.prev[0] || '').match(g.chordLike) || [])[0];
          }
        });
        delete this.ton;
        delete this.tonc;
        this.chords = chords;
      }
      
      setTransPosition(value) {
        this.exec({
          prev: this.transPosition,
          value,
          method: 'set',
          action: 'comSetTransPosition',
          args: {
            value,
          },
          onSet: () => delete this.initial.pos,
          onLoad: () => delete this.initial.p,
        });
        
        this.transPosition = value;
        
        this.resetChordLabels();
      }
      
      add(fieldn, value) {
      
        if (fieldn === 'c' || fieldn === 't') {
          if (!mylib.isArr(value)) value = [value];
          const emptyIndex = mylib.findLastIndex(this[fieldn], ch => ch) - -1;
          
          (mylib.isArr(value) ? value : [value]).forEach((block, blocki) => {
            this.changeBlock(fieldn, emptyIndex + blocki, block);
          });
        }
        
        if (fieldn === 'c') this.resetChordLabels();
        
        return this;
      }
      
      addOrder({ t, s, c }, refresh = true) {
        const w = this.getNextOrdWid();
        
        this.exec({
          action: 'comAddOrderBlock',
          args: {
            wid: w,
            texti: t,
            type: s,
            chordsi: c,
            //min: m
          }
        });
        this.ords.push({ w, t, s, p: [], c }); // m
        if (refresh) this.afterOrderChange();
      }
      
      cutChordPositions() {
        let needReload = false;
        this.orders
          .forEach(ord => {
            (this.texts[ord.texti] || '')
              .split(/\n/)
              .forEach((line, linei) => {
                const letters = this.getVowelPositions(line);
                
                (ord.p[linei] || [])
                  .reduceRight(async (stub, pos) => {
                    if (pos > letters.length - 1) {
                      needReload = true;
                      await ord.setChordPosition(linei, pos);
                      return stub + 1;
                    }
                    
                    return stub;
                  }, 0);
              });
          });
        
        if (needReload) g.ss();
      }
      
      addOrders(orderDicts = []) {
        orderDicts.forEach(dict => this.addOrder(dict, false));
        this.afterOrderChange();
      }
      
      getNextOrdWid() {
        return this.ords.reduce((w, ord) => (ord.w == null || ord.w < w) ? w : ord.w, -1) - -1;
      }
      
      isCantMigrateOrder(ord, ordi) {
        return (ordi === 1 && ord.top.isInherit || !ordi && ord.top.isNextInherit || ord.top.isPrevTargetOrd || (ord.top.isNextAnchorOrd && !ordi))
          || (index => !(index < 0 || index === mylib.execs.length - 1))
          (mylib.execs.findIndex(exec => mylib.isEq(exec.scope, this.scope(this.migrateAction()))));
      }
      
      migrateAction() {
        return 'comMigrateOrders';
      }
      
      migrateOrder(topOrd) {
        const { top: { source: { w: to } = 0 } = 0 } = topOrd.top.prev || topOrd.top.next || 0;
        
        if (to == null) {
          mylib.dconsl('migrate error', topOrd).config({ type: 0 });
          return;
        }
        
        const prev = {};
        const value = {};
        const from = topOrd.top.w;
        const min = Math.min(from, to);
        const max = Math.max(from, to);
        
        this.ords.forEach(ord => {
          if (ord.w > min && ord.w <= max) {
            prev[ord.w] = ord.w - 1;
            prev[ord.w - 1] = ord.w;
          }
        });
        
        this.orders.forEach(ord => {
          if (prev[ord.wid] != null && !ord.top.isAnchorInherit)
            ord.top.source.w = prev[ord.wid];
        });
        
        this.orders.forEach(ord => {
          if (ord.top.source.w !== ord.top.source.originWid)
            value[ord.top.source.originWid] = ord.top.source.w;
        });
        
        this.exec({
          value,
          method: 'migrate',
          action: this.migrateAction(),
          args: {
            value
          },
        });
        
        this.afterOrderChange();
      }
      
      addOrderAnchor(ord) {
        if (ord.isAnchor) {
          mylib.dcconsl('Не возможно ссылаться на ссылку');
          return;
        }
        
        const anchor = ord.takeUniq();
        const wid = this.getNextOrdWid();
        
        this.exec({
          action: 'comAddOrderAnchorBlock',
          args: {
            wid,
            anchor,
            blockn: ord.top.header(),
          }
        });
        
        this.ords.push({ a: anchor, w: wid });
        this.afterOrderChange();
      }
      
      removeOrderBlock({ wid, isAnchor, top }) {
        this.exec({
          action: 'removeOrderBlock',
          uniq: wid,
          args: {
            wid,
            isAnchor: +isAnchor,
            blockn: top.header()
          }
        });
        const index = this.ords.findIndex(o => o.w === wid);
        
        this.ords.splice(index, 1);
        this.afterOrderChange();
        
        this.resetChordLabels();
      }
      
      setLangi(langi) {
        this.setField('l', langi);
      }
      
      afterOrderChange() {
        this.setOrders();
        this.resetChordLabels();
      }
      
      getRegionNextLetter() {
        const chars = this.orders
          .map(ord => Object.keys(ord.repeats || {}).map(key => (key.match(/[a-z]/i) || [])[0]))
          .flat().filter(s => s)
          .map(letter => letter.charCodeAt(0));
        
        const next = '.'.repeat(26).split('').map((c, ci) => 97 + ci).find(num => chars.indexOf(num) < 0);
        
        return String.fromCharCode(next);
      }
      
      setTranslationPushKind(value) {
        this.exec({
          action: 'comSetTranslationPushKind',
          method: 'set',
          prev: this.translationPushKind,
          value,
          args: {
            value
          }
        });
        
        this.translationPushKind = value;
        this._translationMap = null;
        this.translationMap();
        g.ss();
      }
    }
    
    g.IEditableCom = IEditableCom;
    
    g.cm_actions = window.json.actions || [];
    
    setTimeout(() => {
      g.chordLikeStr = '([ACDFG]#?|[EH])([+]*|11|((m|min|sus|maj|dim|add)?(\\d(\\/\\d)?)?))';
      g.chordLike = new RegExp(g.chordLikeStr);
      g.textedChordStr = `\\.*-?${g.chordLikeStr}`;
      g.textedChord = new RegExp(`^(${g.textedChordStr}(/${g.chordLikeStr})?)+$`);
      
      g.cleanChords = ['A', 'C', 'D', 'E', 'F', 'G', 'H'];
    });
    class IEditableOrder extends g.IBased {
      
      setField(fieldn, value, args = {}, refresh = true, onSet) {
        const setExec = (action, onSet, additionalArgs) => {
          this.exec({
            prev: this.top.inhFields && this.top.inhFields.indexOf(fieldn) < 0
              ? this.top.source[fieldn] != null ? this.top.source[fieldn] : args.def
              : null,
            value,
            uniq: this.top.viewIndex,
            method: 'set',
            action,
            onSet,
            args: mylib.overlap({ fieldn }, args, additionalArgs)
          });
        };
        
        if (this.top.isAnchorInherit) {
          const action = this.top.leadOrd.top.source.inh == null
            ? 'setAnchorInheritValueWithoutInh'
            : this.top.leadOrd.top.source.inh[fieldn] == null
              ? 'setAnchorInheritValueWithoutBox'
              : null;
          
          const wid = this.top.leadOrd.wid;
          
          action && setExec(action, null, { wid, isAnchor: this.top.leadOrd.isAnchor });
          setExec('setAnchorInheritValue', onSet, { inhIndex: this.top.anchorInheritIndex, wid, value });
        } else {
          const action = ({
            m: 'comSetOrderMinimal',
            s: 'comSetOrderType',
            c: 'comSetOrderStringBlock',
            t: 'comSetOrderStringBlock',
            o: 'comSetOrderOpenedBlock',
            r: 'comSetOrderRepeatBlock',
            v: 'comSetOrderVisibleSign',
            e: 'comSetOrderEmptiedVal',
          })[fieldn];
          
          setExec(action, onSet, { value });
        }
        
        
        if (fieldn === 'r') this.repeats = value;
        else this.top.source[fieldn] = value;
        
        if (refresh) {
          this.com.afterOrderChange();
          g.ss();
        }
      }
      
      setFieldValue(fieldn, value) {
        const action = 'comSetOrderFieldValue';
        
        this.exec({
          prev: this.fieldValues[fieldn],
          value,
          method: 'set',
          action,
          createByPath: 1,
          args: {
            value,
            fieldn,
          }
        });
        
        this.fieldValues[fieldn] = value;
      }
      
      delChordsi() {
        delete this.c;
      }
      
      scope(action, uniq, wid) {
        return [this.top.com.scope(), '->', mylib.def(wid, this.wid), '.', mylib.typ('[action]', action), ':', [].concat(mylib.def(uniq, ['[uniq]'])).join(',')].join('');
      }
      
      exec(bag) {
        const { scope, args: { wid = null } = {} } = bag;
        
        mylib.setExecs(mylib.overlap({}, bag, {
          scope: this.scope(bag.action, bag.uniq, wid),
          args: mylib.overlap({
            wid: mylib.def(wid, this.wid),
            comw: this.top.com.wid,
            name: this.top.com.name,
            blockn: this.top.header({}, true),
            isAnchor: this.isAnchor
          }, bag.args),
          generalId: this.top.com.wid
        }, scope ? { scope } : null));
      }
      
      async setChordPosition(linei, pos) {
        const com = this.com;
        const prev = JSON.parse(JSON.stringify(this.positions[linei] || [])).sort((a, b) => a - b);
        const line = this.positions[linei] || [];
        const posi = line.indexOf(pos);
        const textLines = (com.texts[this.texti] || '').split('\n');
        const textLine = textLines[linei];
        const lineSplitted = textLine.split('');
        const vowels = com.getVowelPositions(textLine);
        
        posi < 0
          ? line.push(pos)
          : line.splice(posi, 1);
        
        const positions = this.positions[linei] = line.sort((a, b) => a - b);
        //this.top.source.positions[linei] = positions;
        
        positions.forEach(pos => {
          const vowel = lineSplitted[vowels[pos]];
          
          if (vowel && vowel.length === 1)
            lineSplitted[vowels[pos]] = `[${vowel}]`;
        });
        
        this.exec({
          uniq: linei,
          prev,
          value: line,
          method: 'set',
          action: 'comSetOrderChordPositionLine',
          args: {
            linei,
            line,
            wid: this.getLeadFirst('w'),
          },
          onSet: exec => {
            const lineSplitted = textLine.split('');
            
            exec.args.prev
              .concat(positions)
              .forEach(pos => {
                const vowel = lineSplitted[vowels[pos]];
                if (!vowel || vowel.length !== 1) return;
                
                const inPos = positions.indexOf(pos) > -1;
                const inPrev = exec.args.prev.indexOf(pos) > -1;
                const [lbr, rbr] = inPos && inPrev
                  ? ['[', ']']
                  : !inPrev && inPos
                    ? ['{', '}']
                    : ['(', ')'];
                
                lineSplitted[vowels[pos]] = lbr + vowel + rbr;
              });
            
            const preInPos = line.indexOf(-1) > -1;
            const preInPrev = exec.args.prev.indexOf(-1) > -1;
            const postInPos = line.indexOf(-2) > -1;
            const postInPrev = exec.args.prev.indexOf(-2) > -1;
            const preLabel = preInPos && preInPrev ? ['●'] : preInPos && !preInPrev ? ['★'] : !preInPos && preInPrev ? ['☆'] : [];
            const postLabel = postInPos && postInPrev ? ['●'] : postInPos && !postInPrev ? ['★'] : !postInPos && postInPrev ? ['☆'] : [];
            
            exec.args.lineTitle = preLabel
              .concat(lineSplitted)
              .concat(postLabel)
              .join('');
          }
        });
      }
      
      takeUniq() {
        if (this.unique != null) return this.unique;
        const value = this.top.com.ords.reduce((max, ord) => ord.u != null && ord.u > max ? ord.u : max, -1) - -1;
        
        this.exec({
          method: 'set',
          action: 'addOrderUnitUniq',
          value,
          args: {
            value
          }
        });
        
        this.unique = value;
        
        return value;
      }
    }
    
    g.IEditableOrder = IEditableOrder;
    
    class CRegionsEditor extends React.Component {
      constructor() {
        super();
        this.state = {
          start: null,
          flashCount: 2,
        };
      }
      
      reset() {
        this.setState({
          start: null,
          flashCount: 2,
          chordBlock: false,
        });
      }
      
      setField(fieldn, ord, repeateds, prevs) {
        const reps = mylib.isNum(prevs) ? { '.': prevs } : (prevs || {});
        const repeats = mylib.overlap({}, reps, repeateds);
        const keys = Object.keys(repeats);
        if (repeats['.'] === 0) delete repeats['.'];
        ord.setField(fieldn, keys.length ? keys.length === 1 && keys[0] === '.' ? repeats['.'] : repeats : 0);
      }
      
      render() {
        const ccom = g.nav.ccom;
        const coln = this.props.coln;
        const colnGetter = this.props.colnGetter;
        const [startFlash, finishFlash, flashDivider] = this.props.flashes || [];
        let isInRegion = false;
        let isOutOfClosedRegion = false;
        let isRegionEnds = false;
        let startedFlashes = 0;
        let beforeFlashes = 0;
        const { linei: startLinei, lines: startLines, wordi: startWordi, words: startWords, ord: startOrd } = this.state.start || {};
        
        return ce('div',
          {
            key: `region-editor-${coln}`,
            className: 'region-editor',
          },
          ccom.ordersComponent({
            key: `region-editor.${coln}`,
            setChorded: () => false,
            setHideAnchor: () => false,
            setClassName: () => `region-edition ${this.state.start == null ? '' : 'active'}`,
           // setWordClass: ({ ord, linei, wordi }) => ``,
            onChordBlockClick: (props) => {
              //this.setField(coln, ord, this.state.flashCount, ord[colnGetter]);
              
              if (this.state.start == null || !this.state.chordBlock) {
                this.setState({
                  start: props,
                  x: event.target.offsetLeft,
                  y: event.target.offsetTop,
                  chordBlock: true,
                });
              } else {
                mylib.dconsl(this.state.flashCount);
                props.ord.setField(coln, this.state.flashCount);
                
                this.reset();
              }
            },
            asOrdComponent: props => {
              if (!this.state.start) return ccom.orderComponent(props);
              const currInit = mylib.get(startOrd, 'top.init');
              
              return ce('div',
                {
                  className: 'region-editor-block',
                },
                ccom.orderComponent(props),
                (() => {
                  
                  const { orderUnit: ord } = props;
                  const { ord: startOrd, linei, wordi } = this.state.start;
                  
                  const flashes = (ord.regions || []).filter(([sl, sw, fl, fw]) => sl === linei && sw === wordi);
                  
                  return ce('div',
                    {
                      className: `float-button-panel${this.state.start && props.orderUnit == this.state.start.ord ? '' : ' hidden'}`,
                      style: {
                        '--x': this.state.x,
                        '--y': this.state.y,
                      },
                      
                    },
                    ce('div',
                      {
                        className: 'button close',
                        onClick: event => {
                          event.stopPropagation();
                          this.reset();
                        }
                      },
                      svg('close-outline')
                    ),
                    !flashes.length
                      ? null
                      : ce('div',
                        {
                          className: 'button remove',
                          onClick: async event => {
                            event.stopPropagation();
                            
                            if (this.state.chordBlock) {
                              if (await mylib.confirm(`Сбросить повторения блока "${startOrd.top.header()}"?`, 'Сброс')) {
                                startOrd.setField(coln, 0);
                                this.reset();
                              }
                              return;
                            }
                            
                            let rems;
                            const inputs = ord.regions.filter(([sl, sw]) => linei === sl && wordi === sw).map((flash) => {
                              const [sl, sw, fl, fw, sord, ford, ol, ow, key, fkey, count] = flash;
                              const fill = (ord, l, w, isBeg, fl, fw) => {
                                const lines = (ord && ord.text || '').split(/\n+/);
                                return (isBeg ? lines.slice(l, fl == null ? fl : fl + 1) : lines.slice(0, l + 1)).map(line => (isBeg ? (line || '').split(/ +/).slice(w, fw == null ? fw : fw + 1) : (line || '').split(/ +/).slice(0, w + 1)).join(' ')).join('\n');
                              };
                              
                              const text = startFlash.repeat(count) + flashDivider + ((key || '').startsWith('~')
                                ? fill(sord, sl, sw, 1, sl, sw)
                                : sord === ford
                                  ? fill(sord, sl, sw, 1, fl, fw)
                                  : `${fill(sord, sl, sw, 1)}\n...\n${fill(ford, ol, ow, 0)}`) + flashDivider + finishFlash.repeat(count);
                              
                              return {
                                title: ce('pre', { dangerouslySetInnerHTML: { __html: text } }),
                                value: 'Очистить границы',
                                type: 'button',
                                closable: true,
                                onClick: () => {
                                  const [sline, sword, fline, fword, sord, ford, oline, oword, skey, fkey] = flash;
                                  const srepeats = mylib.overlap({}, sord[colnGetter]);
                                  
                                  const skeys = Object.keys(srepeats);
                                  delete srepeats[skey];
                                  this.setField(coln, sord, srepeats);
                                  sord.resetRegions();
                                  
                                  if (sord !== ford && ford) {
                                    const frepeats = mylib.overlap({}, ford[colnGetter]);
                                    
                                    const fkeys = Object.keys(frepeats);
                                    delete frepeats[fkey];
                                    this.setField(coln, ford, frepeats);
                                    ford.resetRegions();
                                  }
                                  
                                  this.reset();
                                },
                              };
                            });
                            
                            mylib.modal({
                              title: 'Сброс границ',
                              inputs,
                              buttons: [
                                {
                                  title: 'Отмена',
                                },
                                {
                                  title: 'Сброс',
                                  onClick: () => this.reset(),
                                },
                              ]
                            });
                          },
                        },
                        svg('trash-2-outline')
                      ),
                      [2, 3, 4, 5].map(flashCount => {
                        return ce('div',
                          {
                            className: `button numeric${this.state.flashCount === flashCount ? ' active' : ''}`,
                            onClick: () => this.setState({ flashCount }),
                          },
                          flashCount
                        );
                      }),
                      this.state.chordBlock
                        ? null
                        : ce('div',
                          {
                            className: 'button flag',
                            onClick: () => {
                              this.setField(coln, startOrd, { [`~${startLinei}:${startWordi}`]: this.state.flashCount - 1 }, startOrd[colnGetter]);
                              this.reset();
                            }
                          },
                          svg('flag-outline')
                        )
                  );
                })(),
              );
            },
            asLineComponent: (props) => {
              const customs = {
                key: 'region.line',
                onWordClick: (props, event) => {
                  const { linei, lines, wordi, words, ord } = props;
                  
                  if (this.state.start == null || this.state.chordBlock) {
                    
                    this.setState({
                      start: props,
                      x: event.target.offsetLeft,
                      y: event.target.offsetTop,
                      chordBlock: false,
                    });
                  } else {
                    const nextLetter = ccom.getRegionNextLetter();
                    const [startDiap, finishDiap] = startOrd === ord
                      ? startLinei === 0 && startWordi === 0 && linei === lines - 1 && wordi === words - 1
                        ? ['.']
                        : [`${startLinei}${startWordi ? `:${startWordi}` : ''}${startLinei === linei && !startWordi && words - 1 === wordi ? '' : `-${linei}${words - 1 === wordi ? '' : `:${wordi}`}`}`]
                      : [`${nextLetter}${startLinei}:${startWordi}`, `${linei}:${wordi}${nextLetter}`];
                    
                    this.setField(coln, startOrd, { [startDiap]: this.state.flashCount }, startOrd[colnGetter]);
                    
                    if (startOrd !== ord) {
                      this.setField(coln, ord, { [finishDiap]: this.state.flashCount }, ord[colnGetter]);
                      ord.resetRegions();
                    }
                    
                    startOrd.resetRegions();
                    
                    this.reset();
                  }
                },
                setWordClass: (props) => {
                  if (!this.state.start) return '';
                  const { word, wordi, words, linei, ord } = props;
                  const prevBefores = beforeFlashes;
                  
                  const openers = mylib.typ([], ord.regions).reduce((count, [sl, sw, fl, fw, so, fo, ol, ow, k]) => count + +(linei == sl && wordi == sw && !(k || '').startsWith('~')), 0);
                  if (openers) {
                    if (!isInRegion) beforeFlashes++;
                    startedFlashes += isInRegion ? openers : 1;
                  }
                  
                  const prevStarteds = startedFlashes;
                  const prevEnds = isRegionEnds;
                  
                  const closers = mylib.typ([], ord.regions).reduce((count, [sl, sw, fl, fw = words - 1]) => count + +(linei == fl && wordi == fw), 0);
                  if (closers) {
                    if (isInRegion) {
                      if (startedFlashes && startedFlashes == beforeFlashes) isRegionEnds = true;
                    } else beforeFlashes--;
                    startedFlashes -= closers;
                  }
                  
                  const isLastInRange = ord === startOrd && linei === startLinei && wordi === startWordi && (startedFlashes + 1 === prevStarteds);
                  if (isLastInRange) isRegionEnds = true;
                  if (!isInRegion && ord === startOrd && linei === startLinei && wordi === startWordi) isInRegion = true;
                  
                  return isLastInRange || (isInRegion && (isLastInRange ? prevStarteds : startedFlashes) <= beforeFlashes && !prevEnds) ? '' : 'inactive';
                },
              };
              return ccom.lineComponent(mylib.overlap({}, props, customs));
            },
          })
        );
      }
    }
    
    class CEditor extends React.Component {
      constructor() {
        super();
        g.context.editor = this;
        
        this.state = {
          currentEPhase: 'a'
        };
        
        this.ePhases = [
          ['a', svg('umbrella-outline', 'Аппликатура'), () => ce(ComApplicationsEditor)],
          ['t', svg('text-outline', 'Текст'), ({ coln }) => ce(g.ComEditor, { coln })],
          ['c', svg('music-outline', 'Аккорды'), ({ coln }) => ce(g.ComEditor, { coln })],
          ['o', svg('list-outline', 'Порядок'), () => ce(g.ComOrder)],
          ['s', svg('recording-outline', 'Прокрутка'), () => ce(g.ComRecords)],
          ['r', '//' || 'Повторения', ({ coln }) => ce(CRegionsEditor, { coln: 'r', colnGetter: 'repeats', flashes: ['/', '\\', '&nbsp;'] })],
          ['tr', svg('monitor-outline', 'Настройка трансляции'), ({ coln }) => ce(CTranslationSetting)],
        ].concat(
          g.isAccessed('canWatch')
            ? [
              //['b', '«»' || 'Ковычки', ({ coln }) => ce(CRegionsEditor, { coln: 'br' })],
            ]
            : []
        );
      }
      
      fu() {
        this.forceUpdate();
      }
      
      getEPhase() {
        const coln = this.state.currentEPhase;
        const [,, content] = this.ePhases.find(([ephasen]) => coln === ephasen) || [];
        return mylib.func(content).call({ coln });
      }
      
      render() {
        const ccat = g.nav.ccat;
        const ccom = g.nav.ccom;
        const coms = g.cols.coms;
        const cats = g.cols.cats;
        const comIndex = ccom == null ? -1 : coms.findIndex(c => c.wid === ccom.wid);
        const isCantBindCom = !g.isAccessed('comBind');
        
        return ccom == null ?
          ce(
            'h1',
            {
              key: `song-not-fnd`,
              style: {
                color: 'red'
              }
            },
            'Песня не найдена'
          )
          : [
            ce(`div`, { key: `song-editor-wwrraappeerr` },
              [
                ce('input',
                  {
                    key: 'com-header',
                    style: {
                      backgroundColor: ccom.removed ? 'red' : null,
                      borderColor: ccom.incorrectName ? 'red' : null,
                    },
                    className: `composition-title col-title ${ccat.removed || !g.isAccessed('catRename') ? 'inactive' : ''}`,
                    onInput: event => {
                      const target = event.target;
                      ccom.rename(target.value);
                      g.ss();
                    },
                    value: ccom.name,
                    placeholder: 'Песня без названия'
                  }
                ),
                ce(
                  'div',
                  {
                    key: 'binds-list-wrapper',
                    className: 'binds-list-wrapper',
                  },
                  ce(
                    'div',
                    {
                      key: 'binds-list mgroup',
                      className: 'binds-list mgroup scrollable-x no-scroll'
                    },
                    g.isAccessed('comDel') && ce(`button`,
                      {
                        key: `rem-song`,
                        className: `mbtn m-ko msm`,
                        onClick: async event => {
                          
                          if (await mylib.confirm(`Удалить Песню "${ccom.name}"?`)) {
                            ccom.remove();
                            g.ss();
                          }
                        }
                      },
                      svg('trash-2-outline', 'Удалить')
                    ),
                    cats.map(cat => {
                      return !cat.wid || (cat.track && cat.track[0] !== '>wid')? null :
                        ce(
                          `button`,
                          {
                            key: `cat-for-bind-${cat.wid}`,
                            className: `mbtn msm m-ok${~cat.stack.indexOf(ccom.wid) ? ` mactive` : ``}${isCantBindCom ? ' disabled' : ''}${ccom.refs && ccom.refs[cat.wid] === 0 ? ' m-no' : ''}`,
                            onClick: async ev => {
                              if (isCantBindCom) return;
                              const incorrectNumberReg = /^0|\D|^$/;
                              
                              if (cat.track != null) {
                                const is = await mylib.modal((resolve) => ({
                                  title: `Номер в сборнике`,
                                  description: !ccom.refs || ccom.refs[cat.wid] == null ? `Добавь, пожалуйста, нативный номер для песни "${ccom.name}", соответственно сборнику "${cat.name}"` : `Изменение нативного номера песни "${ccom.name}" по сборнику "${cat.name}"`,
                                  inputs: [
                                    {
                                      value: (ccom.refs && ccom.refs[cat.wid] || '').toString(),
                                      type: 'number',
                                      onInput: ({input, setError}) => {
                                        if (input.value.match(incorrectNumberReg)) {
                                          setError('Некорректное значение. Принимаются только целые цифры больше нуля, не начинающиеся на ноль!');
                                          return false;
                                        } else {
                                          setError('');
                                        }
                                      },
                                    }
                                  ],
                                  buttons: [
                                    {
                                      title: ({inputs}) => `Запомнить${inputs[0].value.match(incorrectNumberReg) ? '' : inputs[0].value ? ` №${inputs[0].value}` : ''}`,
                                      onClick: ({inputs}) => {
                                        ccom.setNativeNumber(cat, parseInt(inputs[0].value));
                                        
                                        resolve();
                                      },
                                      disabled: ({inputs}) => !!inputs[0].value.match(incorrectNumberReg),
                                      hidden: ({inputs}) => ccom.refs && ccom.refs[cat.wid],
                                    },
                                    {
                                      title: ({inputs}) => 'Забыть нативный номер',
                                      onClick: () => {
                                        ccom.removeNativeNumber(cat);
                                        
                                        resolve();
                                      },
                                      hidden: ({inputs}) => !ccom.refs || !ccom.refs[cat.wid],
                                    },
                                  ]
                                }));
                              } else cat.toggleCom(ccom);
                              
                              this.fu();
                              g.ss();
                            }
                          }, `${cat.name} ${ccom.refs && ccom.refs[cat.wid] ? `№${ccom.refs[cat.wid]}` : ''}`);
                    })
                  )
                )
              
              ].filter((part, parti) => ccom.removed ? parti === 0 : true)
            ),
            ccom.texts.length === 0
              ? [
                  ce('textarea',
                    {
                      key: 'textarea-on-empty-texets-line',
                      className: 'text-heap-textarea',
                      onPaste: event => {
                        ccom.parseBlocksFromClipboard(event);
                        g.ss();
                      },
                      onInput: event => {
                        const value = event.target.value;
                        const isEnLetter = /[a-z]/i.test(value);
                        
                        ccom.add('c', isEnLetter ? value : '');
                        ccom.add('t', isEnLetter ? '' : value);
                        
                        g.ss();
                        this.setState({ currentEPhase: isEnLetter ? 'c' : '' });
                      },
                      placeholder: 'Для начала можно вставить текст песни в это поле. Текст должен быть разделён двумя переносами строк между блоками (припевом, куплетом, и т.д.). Он может содержать названия типа блоков (например: Куплет 1. или Припев, и т.д.).'
                    },
                    null
                  ),
                  (text => text ? ce('button',
                    {
                      className: 'mbtn m-no',
                      onClick: () => ccom.parseBlocks(text.split(/\n\s*\n/)),
                    },
                    'Вставить скопированный текст'
                  ) : null)(window.clipboardData && mylib.func(window.clipboardData.getData).call('text')),
                ]
              : [
                ce(
                  'div',
                  {
                    key: 'com-editor-wrapper',
                    className: 'com-editor-wrapper',
                  },
                  this.getEPhase(),
                  ((ccat.wraps || [])[0] || {}).errors
                    && ce('div',
                      {
                        className: 'white-space-pre error-text',
                      },
                      ((ccat.wraps.find(({ com }) => com.wid === ccom.wid) || {}).errors || [])
                        .map((text, texti) => ce('div',
                          {
                            key: `errors in com ${texti}`,
                          },
                          text
                        ))
                    )
                ),
                ce(
                  'div',
                  {
                    key: `ephases-group`,
                    className: 'mgroup scrollable-x no-scroll'
                  },
                  this.ePhases.map(([ephasen, ephase]) => {
                    return ce(
                      'button',
                      {
                        key: `edit-phase-${ephasen}`,
                        id: `edit-phase-${ephasen}`,
                        className: `mbtn m-ok ${this.state.currentEPhase === ephasen ? 'mactive' : ''} msm`,
                        onClick: e => this.setState({ currentEPhase: ephasen })
                      },
                      ephase
                    );
                  })
                )
              ]
          ];
      }
    }
    
    class ComApplicationsEditor extends React.Component {
      render() {
        const ccom = g.nav.ccom;
        
        return ce('div',
          {
            key: 'Com-Applications-Editor',
            className: 'fade-in',
          },
          ce(g.ComCtrlPannel, { ccom }),
          ccom.ordersComponent(
            {
              key: 'Com-Applications-Editor',
              isAnchorInheritHide: !g.playerShown,
              asLineComponent: props => {
                const { textLine, textLinei, orderUnit, orderUniti, chordedOrd } = props;
                const chordsLabels = (ccom.chordLabels[orderUniti] || [])[textLinei] || [];
                const linePoss = (orderUnit.positions || [])[textLinei] || [];
                const maxCountChordeds = chordsLabels.filter(label => label).length;
                const setPos = indexi => orderUnit.setChordPosition(textLinei, indexi).then(g.ss);
                
                return !chordedOrd
                  ? ccom.lineComponent(props)
                  : [
                    ce('span',
                      {
                        key: `chord_${orderUniti}.${textLinei}.-1`,
                        id: `chord_${orderUniti}.${textLinei}.-1`,
                        className: 'pre-post-chords-binder pre-chord-takt',
                        onClick: () => setPos(-1),
                      }
                    ),
                    ccom.lineComponent(mylib.overlap(
                      {
                        isJoinLetters: false,
                        onLetterClick: setPos,
                        setChorded: indexi => linePoss.indexOf(indexi) > -1,
                        setLineClassName: chorded => {
                          return chorded
                            ? orderUnit.top.isAnchorInherit || orderUnit.top.isAnchor
                              ? ' mark-driven-letter'
                              : ' mark-origin-letter'
                            : ''
                        }
                      },
                      props
                    )),
                    ce('span',
                      {
                        key: `chord_${orderUniti}.${textLinei}.-2`,
                        id: `chord_${orderUniti}.${textLinei}.-2`,
                        className: `pre-post-chords-binder post-chord-takt shown`,
                        //chord: postLineChord ? chordsLabels[chordsLabels.length - 1] : '',
                        onClick: () => setPos(-2),
                      }
                    ),
                    linePoss.length !== maxCountChordeds
                      ? ce('span',
                        {
                          key: `song-${orderUniti}`,
                          className: linePoss.length > maxCountChordeds ? 'errorText' : '',
                          onClick: () => ccom.cutChordPositions(),
                        },
                        ` [${linePoss.length}/${maxCountChordeds}]`
                      )
                      : maxCountChordeds === 0
                        ? ce('span',
                          {
                            key: `no-more-chords_${orderUniti}`,
                            className: 'errorText'
                          },
                          '?'
                        )
                        : null
                  ];
              }
            }
          )
        );
      }
    }
    
    class CComRecords extends React.Component {
      constructor() {
        super();
        
        this.recs = [];
      }
      
      fu() {
        this.forceUpdate();
      }
      
      render() {
        const ccom = g.nav.ccom;
        const audios = (ccom.a ? ccom.a.split('\n\n') : ['']).map(apart => mylib.explode('\n', apart, 2));
        
        return ce('div',
          {
            key: 'Com-Records',
          },
          audios.map((ablock, ablocki) => {
            return ablock.map((apart, aparti) => {
              return ce(
                'div',
                {},
                ce(
                  ['input', 'textarea'][aparti],
                  {
                    onInput: (event) => {
                      const block = audios[ablocki] || (audios[ablocki] = []);
                      block[aparti] = event.target.value;
                      
                      const audio = audios.map(block => `${block.join('\n')}${block.length < 2 ? '\n' : ''}`).join('\n\n');
                      
                      ccom.setAudio(audio);
                      g.ss();
                      this.fu();
                    },
                    value: apart
                  }
                )
              );
            });
          })
        );
      }
    }
    
    g.ComRecords = CComRecords;
    
    setTimeout(() => mylib.func(window.insertStyle).call('Com-Records', `
      .com-ord-list {
        .fade {
          opacity: .3;
        }
      }
    `));
    
    class CatRenameInput extends React.Component {
      render() {
        const ccat = g.nav.ccat;
        
        return ce('input',
          {
            key: 'cat-header-renamer',
            style: {
              backgroundColor: ccat.removed ? 'red' : null,
              borderColor: ccat.incorrectName ? 'red' : null,
            },
            className: `category-title col-title ${ccat.removed || !g.isAccessed('catRename') ? 'inactive' : ''}`,
            onInput: event => {
              ccat.rename(event.target.value);
              g.ss();
              this.forceUpdate();
            },
            value: ccat.name,
            placeholder: 'Карегория без названия',
            onChange: e => e,
          });
      }
    }
    
    g.CatRenameInput = CatRenameInput;
    
    
    class CatActionsButton extends React.Component {
      render() {
        const ccat = g.nav.ccat;
        const showActions = g.isAccessed('catDel') || g.isAccessed('catSetTrack');
        
        return ce('div',
            {
              key: 'newer-cat',
              className: 'mgroup mblock'
            },
            !showActions ? null : ce('button',
              {
                key: `cat-remover-${ccat.wid}`,
                className: 'mbtn m-ko msm',
                onClick: () => {
                  mylib.dconsl(ccat);
                  mylib.modal({
                    title: `Действия с "${ccat.name}"`,
                    inputs: [
                      g.isAccessed('catDel')
                        ? {
                            value: 'Удалить',
                            type: 'button',
                            confirm: `Удалить "${ccat.name}"${ccat.stack.length > 0 ? '. К ней относятся некоторые Композиции!' : ''}`,
                            onClick: () => {
                              ccat.remove();
                              g.ss();
                            }
                          }
                        : null,
                      g.isAccessed('catSetTrack') 
                        ? {
                            title: 'Трек',
                            value: ccat.track == null ? '' : JSON.stringify(ccat.track),
                            onInput: ({setError, event, regOnClose}) => {
                              const ok = ccat.setTrack(event.target.value);
                              if (ok) {
                                setError('');
                                regOnClose(() => {
                                  ccat.resetComs();
                                  g.ss();
                                }, 'on-track-change');
                              } else {
                                setError('Не корректный трек');
                                mylib.dconsl('incorrect cat track', event.target.value);
                                regOnClose(null, 'on-track-change');
                              }
                            }
                          }
                        : null
                    ]
                  });
                }
              },
              svg('settings-2-outline', `Действия с "${ccat.name}"`)
            )
          );
      }
    }
    
    g.CatActionsButton = CatActionsButton;
    
    g.CatHeads = [
      ce(g.CatRenameInput, { key: 'comp-search-cat' }),
      ce(g.CatActionsButton, { key: 'comp-del-cat' }),
    ];
    
    class ColAdditionButtons extends React.Component {
      render() {
        const ccat = g.nav.ccat;
        
        return g.isAccessed('canRedact') && [
          g.isAccessed('catAdd') && ce('button',
            {
              key: 'new-cat-button',
              id: 'new-cat-button',
              className: 'mbtn msm m-ok',
              onClick: event => {
                const catw = g.cols.addCat();
                g.nav.setPhase(g.Phase.Cat, { [g.Phase.Cat]: catw });
              }
            },
            svg('folder-add-outline', 'Новая категория')
          ),
          g.isAccessed('comAdd') && ce('button',
            {
              key: 'com-new-button',
              id: 'com-new-button',
              className: 'mbtn m-no msm',
              onClick: event => {
                const comw = g.cols.addCom();
                g.nav.setCom(comw, g.Phase.Editor);
              }
            },
            svg('file-add-outline', 'Новая песня')
          )
        ];
      }
    }
    
    g.ColAdditionButtons = ColAdditionButtons;
    
    class CComEditor extends React.Component {
      constructor() {
        super();
        
        this.prev = null;
      }
      
      render() {
        const ccom = g.nav.ccom;
        const ccoln = this.props.coln;
        const istcoln = ccoln === 't';
        const ccols = ccom[ccoln];
        
        return ce(
          'div',
          {
            className: `com-editor fade-in`
          },
          ((ccols || '').length ? ccols : ['']).map((col, coli) => {
            return ce('div',
              {
                key: `textarea-col-wrapper-${ccoln}.${coli}`,
                className: 'textarea-col-wrapper',
              },
              ce('div',
                {},
                ce('span',
                  {},
                  ce('b',
                    {}, coli - -1),
                  ce('span',
                    {
                      className: 'btn-panel',
                    },
                    ce('b',
                      {
                        key: `textarea-col-remover-${ccoln}.${coli}`,
                        className: 'clear-btn error-text',
                        onClick: () => {
                          const {containers, anchors} = ccom.getOrdersOnBlockDeletion(ccoln, coli);
                          
                          const delMsg = istcoln
                            ? containers.length > 1
                              ? 'Они будут удалены.'
                              : 'Она будет удалена.'
                            : containers.length > 1
                              ? 'Пометки в них будут сняты.'
                              : 'Пометка на него будет снята в ней.';
                              
                          const contMsg = containers.length === 0
                            ? ''
                            : ` Он упоминается в ${containers.length} ${mylib.declension(containers.length, 'порядковой единице', 'порядковых единицах', 'порядковых единицах')}. ${delMsg}`;
                          
                          const anchMsg = anchors.length === 0
                            ? ''
                            : ` В свою очередь на ${containers.length > 1 ? 'эти блоки' : 'этот блок'} есть ${anchors.length > 1 ? 'ссылки, которые тоже будут удалены' : 'ссылка, которая также будет удалена'}.`;
                          
                          const message = `Удалить ${coli + 1}-й ${istcoln ? 'Текстовый блок' : 'блок Акордов'}?${contMsg}${anchMsg}`;
                          
                          mylib.modal((resolve) => {
                            return {
                              title: 'Удаление блока',
                              description: message,
                              withoutCloseButton: true,
                              buttons: [
                                {
                                  title: 'Удалить',
                                  onClick: ({closeModal}) => {
                                    ccom.removeBlock(ccoln, coli);
                                    g.ss();
                                  }
                                },
                                {
                                  title: 'Отмена'
                                }
                              ]
                            };
                          });
                        },
                      },
                      '×'
                    ),
                    istcoln && col && col.split(/\n{2}/).length > 1 ? ce('span',
                      {
                        onClick: () => ccom.letSeparateCol(coli, ccoln),
                      },
                      svg('scissors-outline')
                    ) : null,
                    ccoln === 'c' && /B/.test(col)
                      ? ce('span',
                        {
                          className: 'mbtn m-no msm',
                          onClick: () => {
                            ccom.replaceBtoEquiv(coli, 'A#');
                            g.ss();
                          }
                        },
                        'B => A#'
                      )
                      : null
                  )
                )
              ),
              ce(
                'textarea',
                {
                  key: `com-editor-textarea.${ccoln}.${coli}`,
                  className: `cleared-input com-editor-textarea ${col.trim() === '' ? 'empty' : ''}`,
                  value: istcoln ? col : ccom.transBlock(col),
                  ref: el => el && coli - 1 === this.newBlocki && (el.focus() || (this.newBlocki = null)),
                  rows: col.split('\n').length,
                  onKeyDown: e => this.prev = e.target.value,
                  onInput: async event => {
                    const target = event.target;
                    if (!istcoln && ccom.ton) {
                      const firstChord = (ccom.chords && ccom.chords[0] && ccom.chords[0].match(RegExp(simpleChord)) || [])[0];
                      mylib.modal((resolve) => {
                        return {
                          title: 'Изменена тональность',
                          description: 'Вне режима редактора была изменена тональность. Для продолжения редактирования Аккордов необходимо перейти в изначальную или сохранить переход на текущую. Что будем делать?',
                          withoutCloseButton: true,
                          buttons: [
                            {
                              title: `Перейти на изначальную: ${ccom.ton.replace(/A#/g, `B`)}`,
                              onClick: ({closeModal}) => {
                                ccom.setChordsInitialTon();
                                resolve(true);
                                closeModal();
                                this.forceUpdate();
                              }
                            },
                            {
                              title: `Сохранить текущую: ${(firstChord || '?').replace(/A#/g, `B`)}`,
                              onClick: ({closeModal}) => {
                                ccom.setChordsCurrentTon();
                              g.ss();
                              g.context.editor.setState({c: chords});
                                resolve(true);
                                closeModal();
                              }
                            },
                            {
                              title: 'Отмена',
                              onClick: ({closeModal}) => {
                                resolve(false);
                                closeModal();
                              }
                            }
                          ]
                        };
                      });
                      
                      return;
                    }
                    const prev = this.prev;
                    const curr = target.value;
                    
                    if (prev !== curr) {
                      const valnum = curr.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
                      const diffnum = prev.split('').reduce((p, c) => p + c.charCodeAt(0), 0);
                      const letter = String.fromCharCode(valnum - diffnum);
                      const isNewBlock = letter === '\n' && prev[prev.length - 1] === '\n';
                      
                      if (isNewBlock) {
                        
                        const txt = istcoln ? 'Текстовый блок' : 'блок Аккордов';
                        if (!await mylib.confirm(`Добавить новый ${txt}?`)) return;
                        
                        ccom.insertBlocks(ccoln, coli, '');
                        this.newBlocki = coli;
                      }
                      ccom.changeBlock(ccoln, coli, isNewBlock ? curr.replace(/\n+$/, '') : curr);
                      
                      g.ss();
                    }
                  },
                  onPaste: event => {
                    ccom.parseBlocksFromClipboard(event, blocks => {
                      if (blocks.length > 1) {
                        event.preventDefault();
                        
                        if (col !== '') {
                          mylib.alert('Вставлять многоблочный текст возможно только в пустые блоки.');
                          return false;
                        }
                      } else return false;
                    }, ccoln, coli);
                    g.ss();
                  }
                }
              ),
              (ords => ce(
                'div',
                {
                  style: {
                    color: ords.length ? 'grey' : 'red',
                  }
                },
                ords.length
                  ? mylib.unique(ords.map(o => `${o.top.header()}${o.top.style.isInherit ? ` ${o.top.style.name}` : ''}`)).join(', ')
                  : 'Нет упоминаний этого блока'
              ))(ccom.orders.filter(ord => ord[ccoln] === coli))
            );
          })
        );
      }
    }
    
    g.ComEditor = CComEditor;
    
    class CComOrder extends React.Component {
      constructor(props) {
        super();
        
        this.state = {};
      }
      
      modalSetRepeats(ord, blockHeader, isAnc = 0) {
        let repeats = mylib.isNum(ord.repeats) ? {'.': ord.repeats} : mylib.def(ord.repeats, {'.': 2});
        
        mylib.modal({
          title: 'Повторения',
          description: `Установить количество повторений в блоке ${blockHeader}`,
          inputs: [
            {
              value: JSON.stringify(repeats),
              onInput: ({input, setError}) => {
                try {
                  repeats = JSON.parse(input.value);
                  
                  if (Object.values(mylib.isNum(repeats) ? {repeats} : repeats).some(val => val > 10 && val < 1)) {
                    setError('Значение выходит за пределы диапазона');
                    return;
                  }
                  setError('');
                } catch (error) {
                  setError('Не корректное значение');
                }
              }
            }
          ],
          buttons: [
            {
              title: 'Установить',
              onClick: () => {
                repeats = mylib.isNum(repeats)
                  ? repeats
                  : mylib.isEq(repeats, {'.': repeats['.']})
                    ? repeats['.']
                    : repeats;
                
                ord.setField('r', repeats, {
                  def: null,
                  b: blockHeader,
                  val: mylib.isNum(repeats) ? repeats : repeats['.'],
                  isAnc
                });
                
                g.ss();
              }
            },
            ord.repeats
              ? {
                title: () => 'Сбросить значение',
                onClick: () => {
                  ord.setField('r', null, {
                    def: null,
                    b: blockHeader,
                    val: null,
                    isAnc
                  });
                  
                  g.ss();
                }
              }
            : null
          ]
        });
      }
      
      render() {
        const ccom = g.nav.ccom;
        const ccat = g.nav.ccat;
        const headerBlocks = {};
        
        return ccom.texts.filter(t => t.trim()).length === 0 ?
          ce(
            'h3',
            {
              className: `fade-in`
            },
            'нет данных для отображения'
          ) :
          ce(
            'div',
            {
              key: `com-order-panel`,
              className: `com-order-panel fade-in`
            },
            ccom.texts.map((text, texti) => {
              return ce(
                'div',
                {
                  key: `com-order-panel-i-${texti}`,
                  className: `mbtn msm m-ok add-order-button ${ccom.orders.some(o => o && o.texti === texti) ? 'mactive' : ''}`,
                  onClick: async e => {
                    ccom.addOrder({t: texti, s: 'one'});
                    g.ss();
                  }
                },
                `${texti + 1}.${text.split('\n')[0]}`
              );
            }),
            ce('div',
              {
                key: `add-anchor-block`,
                className: 'add-anchor-block mlink',
                onClick: async e => {
                  const headers = {};
                    
                  const anchorIndex = await mylib.modal((resolve, reject) => {
                    return {
                      title: 'Ссылка',
                      description: 'Выбери блок для ссылки',
                      inputs: ccom.orders.map((ord, ordi) => {
                        if (ord.a != null || ord.top.isInherit) return;
                        const header = `${ord.top.header({ isEdit: true, r: ord.repeatsTitle }, true)} ${ord.top.isInherit ? ord.type : ''}`;
                        const strikes = ord.isEmptyHeader ? ['<s>', '</s>'] : ['', ''];
                        
                        return {
                          titleHtml: `<h3>${strikes[0]}${header}${strikes[1]}</h3><pre>${ord.texti == null ? ccom.chords[ord.chordsi] : ccom.texts[ord.texti]}</pre>`,
                          type: 'button',
                          value: `Добавить ссылку на ${header}`,
                          onClick: ({closeModal}) => {
                            resolve(ordi);
                            ccom.addOrderAnchor(ord);
                            g.ss();
                            closeModal();
                          }
                        };
                      })
                    }
                  });
                }
              },
              'Ссылка на блок'
            ),
            ce('div',
              {
                key: `add-chorded-block`,
                className: 'add-anchor-block mlink',
                onClick: async e => {
                  mylib.modal({
                    title: 'Аккордный блок',
                    description: 'Выбери блок Аккордов для вставки',
                    inputs: ccom.chords.map((chords, chordsi) => {
                      return {
                        titleHtml: `<pre>${chords}</pre>`,
                        type: 'button',
                        value: `Добавить этот блок`,
                        onClick: ({closeModal}) => {
                          ccom.addOrder({c: chordsi, s: 'enter'});
                          g.ss();
                          closeModal();
                        }
                      };
                    })
                  });
                }
              },
              'Аккордный блок'
            ),
            ce('div',
              {
                key: 'com-headers-lang',
                className: 'add-anchor-block mlink',
                onClick: async e => {
                  mylib.modal({
                    title: 'Язык заголовков песни',
                    inputs: g.ICom.langs.map((lang, langi) => {
                      return {
                        type: 'button',
                        value: lang,
                        disabled: langi === ccom.langi,
                        closable: true,
                        onClick: ({closeModal}) => {
                          ccom.setLangi(langi);
                          g.ss();
                          //closeModal();
                        }
                      };
                    })
                  });
                },
              },
              `Язык песни: ${ccom.langn}`
            ),
            ce('div',
              {
                key: 'com-headers-lang',
                className: 'add-anchor-block mlink',
                onClick: async e => {
                  const dotts = '.'.repeat(12).split('').map((_, i) => i).reverse();
                  const first = ccom.transPosition;
                  let pos = ccom.transPosition;
                  const init = ccom.initialTransPosition;
                  
                  mylib.modal({
                    title: 'Тональность песни',
                    description: () => ccom.ordersComponent(),
                    inputs: dotts.map((position) => {
                      return {
                        type: 'button',
                        value: `${position === init ? '* ' : ''}На ${position} ${mylib.declension(position, 'полутон', 'полутона', 'полутонов')} от базовой`,
                        disabled: () => position === first,
                        style: () => ({
                          fontWeight: position === pos ? 'bold' : null,
                        }),
                        onClick: () => ccom.setTransPosition(pos = position),
                      };
                    }),
                    buttons: [
                      {
                        title: 'Применить',
                        onClick: ({closeModal}) => {
                          g.ss();
                          closeModal();
                        },
                      },
                      {
                        title: 'Отменить',
                        onClick: ({closeModal}) => {
                          ccom.setTransPosition(pos);
                          closeModal();
                        }
                      }
                    ]
                  });
                },
              },
              `Изменить тональность`
            ),
            ce('div',
              {
                key: 'bemoles-setter',
                className: `${!ccom.isBemoled ? 'm-no' : 'm-br'} mbtn msm`,
                onClick: () => {
                  ccom.setField('b', ccom.isBemoled === 1 ? 0 : 1, 0);
                  g.ss();
                }
              },
              !ccom.isBemoled ? '#' : 'b'
            ),
            ce('hr'),
            ce(
              'div',
              {
                key: 'com-order-organize-box',
                className: 'scrollable-x no-scroll',
              },
              ccom.orders.map((ord, ordi) => {
                if (ord.top.isAnchorInherit) return null;
                const targetOrd = ord.top.targetOrd;
                const leadHeader = ord.top.header({isEdit: true, isTexted: ord.top.isInherit, r: ord.repeatsTitle}, true);
                const blockHeader = ord.top.isInherit ? `${leadHeader} ${ord.type}` : leadHeader;
                const blockHeaderHtml = ord.isEmptyHeader ? `<s>${blockHeader}</s>` : blockHeader;
                
                const chordIndex = targetOrd && (ord.chordsi == null || ord.chordsi === -1)
                  ? targetOrd.chordsi
                  : ord.chordsi;
                
                return ce(
                  'div',
                  {
                    key: `com-order-panel-i-${ordi}`,
                    className: `mgroup mblock msm${ord.isVisible ? '' : ' disabled'}`
                  },
                  ord.a == null
                    ? [
                      ce(
                        'div',
                        {
                          key: `com-order-panel-i-${ordi}.rem`,
                          className: `mbtn ${ord.texti == null ? 'm-ok' : 'm-no'} rem-order-button`,
                          onClick: async () => {
                            
                            mylib.modal({
                              titleHtml: `${blockHeaderHtml} Конфигурация`,
                              description: '',
                              inputs: [
                                {
                                  value: 'Удалить',
                                  type: 'button',
                                  onClick: async () => {
                                    if (!await mylib.confirm(`Удалить ${blockHeader}?${(ord.positions || []).length ? ' Данное действие повлечёт за собой уничтожение аппликатуры в данном блоке.' : ''}`)) return true;
                                    ccom.removeOrderBlock(ord);
                                    g.ss();
                                  }
                                }, ord.texti == null ? null : {
                                  title: 'изменить прикреплённый Текстовый блок',
                                  value: 'Задать текст',
                                  type: 'button',
                                  onClick: async () => {
                                    const inputs = ccom.texts.map((text, texti) => {
                                      return !text ? null : {
                                        titleHtml: `<b>${texti - -1}</b><pre>${text}</pre>`,
                                        type: 'button',
                                        value: `Установить ${texti - -1}-й`,
                                        closable: true,
                                        onClick: () => {
                                          ord.setField('t', texti, {
                                            def: ord.texti - 0,
                                            i: ordi - -1,
                                            ist: 1
                                          });
                                        }
                                      };
                                    });
                                    mylib.modal({
                                      title: 'Установка текстов',
                                      descriptionHtml: `Установи Текстовый блок для блока ${blockHeaderHtml}`,
                                      inputs,
                                      buttons: [{title: 'Отмена'}],
                                    });
                                  }
                                }, {
                                  type: 'button',
                                  value: `${ord.isVisible ? 'Скрыть' : 'Показать'} блок`,
                                  closable: true,
                                  onClick: () => {
                                    ord.setField('v', ord.antiVis, {
                                      b: blockHeader,
                                      def: 1
                                    });
                                  },
                                }, {
                                  type: 'button',
                                  value: `${ord.isEmptyHeader ? 'Вернуть' : 'Убрать'} название блока`,
                                  closable: true,
                                  onClick: () => {
                                    ord.setField('e', ord.isEmptyHeader ? 0 : 1, {
                                      def: 0
                                    });
                                  },
                                }, {
                                  type: 'button',
                                  value: 'Установить повторения',
                                  onClick: () => this.modalSetRepeats(ord, blockHeader),
                                }
                              ],
                              buttons: [{title: 'Отмена'}]
                            });
                            
                          }
                        },
                        ord.texti == null ? `${ord.chordsi - -1}. ${(ccom.chords[ord.chordsi] || '?').trim().slice(0, 7)}` : `${ord.texti + 1}.${ccom.texts[ord.texti] ? ccom.texts[ord.texti].split('\n')[0] : '?'}`
                      ),
                      ce(
                        'div',
                        {
                          key: `com-order-panel-i-${ordi}-s`,
                          className: `mbtn m--br`,
                          onClick: () => {
                            const inputs = g.setts.styles.map(styleBlock => {
                              if ((ordi === 0 || ord.top.isTarget) && styleBlock.isInherit) return null;
                              
                              const newBlockn = mylib.stringTemplater(styleBlock.header, {
                                isModal: true,
                                isEdit: true,
                                translate: function() {return arguments[ccom.l || 0];}
                              });
                              return {
                                type: 'button',
                                title: styleBlock.name,
                                value: newBlockn,
                                disabled: () => styleBlock.name === ord.type,
                                onClick: ({closeModal}) => {
                                  ord.setField('s', styleBlock.name, {newBlockn});
                                  
                                  closeModal(); 
                                }
                              };
                            });
                            mylib.modal({
                              title: 'Тип блока',
                              descriptionHtml: `<pre><b>Устанавливаем тип для блока:</b>\n\n${ord.texti == null ? ccom.chords[ord.chordsi] : ccom.texts[ord.texti]}</pre>`,
                              inputs,
                            });
                          },
                          dangerouslySetInnerHTML: {__html: blockHeaderHtml}
                        }
                      ),
                      !(ord.top.style || '').isModulation
                        ? null
                        : ce('button',
                          {
                            className: 'mbtn m-br',
                            onClick: () => {
                              mylib.modal({
                                title: 'Установка значения модуляции',
                                inputs: '.'.repeat(11).split('').map((_, i) => i + 1).reverse().map(position => {
                                  return {
                                    value: `На ${position} ${mylib.declension(position, 'полутон', 'полутона', 'полутонов')} от предыдущего блока`,
                                    type: 'button',
                                    closable: true,
                                    style: () => ({
                                      fontWeight: ord.fieldValues.md === position ? 'bold' : null,
                                    }),
                                    onClick: () => {
                                      ord.setFieldValue('md', position);
                                      ccom.resetChordLabels();
                                      g.ss();
                                    },
                                  };
                                }),
                                buttons: [ 'Отмена' ]
                              });
                            }
                          },
                          ord.fieldValues.md || svg('bulb-outline')
                        )
                    ]
                  : ce('div',
                      {
                        key: `com-order-panel-i-${ordi}.a`,
                        className: `mbtn m-br`,
                        onClick: async () => {
                          mylib.modal({
                            titleHtml: `Конфигурация ссылки на ${blockHeaderHtml}`,
                            inputs: [
                              {
                                type: 'button',
                                value: 'удалить',
                                onClick: async ({closeModal}) => {
                                  if (!await mylib.confirm(`Удалить ссылку на ${blockHeader}`)) return;
                                  ccom.removeOrderBlock(ord);
                                  g.ss();
                                  closeModal();
                                }
                              }, {
                                title: `${ord.o ? 'скрывать' : 'сделать открытым'} в свёрнутом режиме`,
                                type: 'button',
                                value: ord.o ? 'скрыть' : 'сделать открытым',
                                onClick: ({closeModal}) => {
                                  const val = ord.o ? 0 : 1;
                                  
                                  ord.setField('o', val, {
                                    def: 0
                                  });
                                  g.ss();
                                  closeModal();
                                }
                              }, {
                                type: 'button',
                                value: `${ord.isEmptyHeader ? 'Вернуть' : 'Убрать'} название блока`,
                                closable: true,
                                onClick: () => {
                                  ord.setField('e', ord.isEmptyHeader ? 0 : 1, {
                                    b: blockHeader,
                                    def: 0
                                  });
                                },
                              }, {
                                  type: 'button',
                                  value: `${ord.isVisible ? 'Скрыть' : 'Показать'} ссылку`,
                                  closable: true,
                                  onClick: () => {
                                    ord.setField('v', ord.antiVis, {
                                      b: blockHeader,
                                      def: 1,
                                      isAnc: 1
                                    });
                                  },
                              }, {
                                type: 'button',
                                value: 'Установить повторения',
                                onClick: () => this.modalSetRepeats(ord, blockHeader, 1),
                              }, 
                            ],
                            buttons: [{title: 'Отмена'}]
                          });
                          
                        },
                        dangerouslySetInnerHTML: { __html: blockHeaderHtml }
                      }
                      
                    ),
                    ord.a != null && !ord.o
                      ? null
                      : ce('div',
                          {
                            key: `com-order-panel-i-${ordi}.chb`,
                            className: `mbtn m--ko chord-bind-button${ord.a != null ? ord.chordi != null && ord.chordsi != -1 ? ' mactive' : ' disabled' : ''}`,
                            onClick: () => {
                              const inputs = ccom.chords.map((chordsBlock, chordsBlocki) => {
                                return {
                                  type: 'button',
                                  titleHtml: `<pre><b>${chordsBlocki + 1}</b></br>${chordsBlock}</pre>`,
                                  value: chordsBlocki === chordIndex ? 'этот является текущим' : 'выбрать этот блок',
                                  disabled: chordsBlocki === chordIndex,
                                  onClick: ({closeModal}) => {
                                    const isDefChord = targetOrd && chordsBlocki === targetOrd.chordsi;
                                    
                                    ord.setField('c', isDefChord ? null : chordsBlocki, {
                                      i: chordsBlocki - -1,
                                      def: -1,
                                      ist: 0,
                                      isa: ord.a != null ? 1 : 0
                                    });
                                    if (isDefChord) ord.delChordsi();
                                    closeModal();
                                  }
                                };
                              });
                              mylib.modal({
                                title: 'Блок аккордов',
                                descriptionHtml: `<pre style="white-space: normal;"><b>Устанавливаем блок Аккордов для ${ord.a == null && ord.texti != null ? `текста:</b>\n\n${ccom.texts[ord.texti]}` : `ссылки на блок ${blockHeaderHtml}`}</pre>`,
                                inputs,
                              });
                            }
                          },
                          chordIndex < 0 || chordIndex == null ? '?' : `${chordIndex + 1}.${ccom.chords[chordIndex] ? ccom.chords[chordIndex].slice(0, 7) : '?'}`
                        ),
                  ccom.ords.length < 2 ? null : ce(
                    'button',
                    {
                      key: `com-order-panel-i-${ordi}.replace`,
                      className: `mbtn m-no`,
                      disabled: ccom.isCantMigrateOrder(ord, ordi),
                      onClick: () => {
                        ccom.migrateOrder(ord);
                        g.ss();
                      }
                    },
                    ordi ? '↑' : '↓'
                  )
                );
              })
            ),
            ce('hr'),
            ce(ComApplicationsEditor)
          );
      }
    }
    
    g.ComOrder = CComOrder;
    
    class CChanges extends React.Component {
      constructor() {
        super();
        this.state = {};
        
        g.changesContext = this;
        
        mylib.setLocalExecs && mylib.setLocalExecs();
      }
      
      fu() {
        this.forceUpdate();
      }
      
      render() {
        const execs = mylib.execs || [];
        const isSomeRejected = execs.some(ex => ex.errors);
        const isSomeIncorrect = execs.some(ex => ex.internalError);
        const isSomeWarning = execs.some(ex => ex.internalWarning);
        const isSomeDelRejected = execs.some(ex => ex.errors && ex.del);
        
        return g.playMode || g.streamManager.isSub ? null : [
          ce('div',
            {
              key: `send-execs-buttons`,
              className: `send-execs-buttons mgroup msm`,
              onContextMenu: () => {
                if (mylib.getLocalExecs() && mylib.confirm('Удалить сохранённые изменения?')) {
                  mylib.removeLocalExecs();
                  g.ss();
                }
              }
            },
            ce(`button`,
              {
                key: 'send-execs',
                className: `mbtn ${isSomeWarning ? 'm-ko' : ''}`,
                disabled: isSomeIncorrect || this.state.sendDisabled || !execs.some(ex => !ex.del),
                onClick: async event => {
                  if (!execs.some(ex => !ex.del)) return;
                  if (!await mylib.confirm(`Отправить отмеченные изменения?`)) return;
                  const target = event.target;
                  this.setState({sendDisabled: true});
                  
                  mylib.loadExecs((resp) => {
                    this.fu();
                    setTimeout(async () => {
                      if (mylib.execs.some(ex => ex.del) && await mylib.confirm(`Сбросить неотмеченные изменения?`))
                        mylib.execs = [];
                      mylib.removeLocalExecs();
                    }, 10);
                  }, null, () => this.setState({sendDisabled: false}));
                }
              },
              svg('paper-plane-outline', 'Отправить отмеченные')
            ),
            isSomeRejected ? ce('button',
              {
                key: `save-local-rejected`,
                className: `save-local-rejected mbtn m-no`,
                onClick: async event => {
                  if (isSomeDelRejected && !await mylib.confirm('Сбросить все отклонённые изменения?')) return;
                  
                  if (isSomeDelRejected) {
                    mylib.removeLocalExecs();
                    mylib.showToast('Отклонённые изменения удалены.');
                    mylib.execs = [];
                  } else {
                    mylib.saveExecsLocally();
                    mylib.showToast('Отклонённые изменения сохранены.');
                  }
                  g.ss();
                }
              }, 
              isSomeDelRejected ? svg('trash-2-outline', 'Сбросить отклонённые') : svg('save-outline', 'Сохранить отклонённые')
            ) : null
          ),
          execs.map((exec, execi) => {
            const isNotInRights = !exec.errors && (rights => rights && !rights.some(right => right && exec && right.action === exec.action))(g.cm_actions);
            
            return ce(`div`,
              {
                key: `exec-item-${execi}`,
                onClick: () => {
                  
                  exec.del = !exec.del;
                  this.fu();
                },
                style: {
                  border: exec.errors || exec.internalError ? 'red solid 1px' : isNotInRights || exec.internalWarning ? 'orange solid 1px' : null
                }
              },
              ce('input', {
                key: `reason-checkbox-${exec.id}`,
                type: 'checkbox',
                checked: !exec.del
              }),
              ce(
                'label',
                {
                  key: `reason=label-${exec.id}`,
                  dangerouslySetInnerHTML: {__html: mylib.stringTemplater((g.cm_actions.find(({action}) => exec && action === exec.action) || {title: '???'}).title, mylib.overlap(g.totalArgs, exec.args || {}))}
                }
              ),
              isNotInRights
                ? ce('div',
                  {
                    key: `warning-message-${exec.strack}`,
                    style: {
                      color: 'orange'
                    }
                  },
                  'Неизвестное действие'
                )
                : null,
              exec.errors || exec.internalError || exec.internalWarning
                ? ce('div',
                    {
                      key: `reason=label-error-${exec.strack}`,
                      style: {
                        color: 'red',
                        whiteSpace: 'pre-wrap',
                      },
                      onClick: () => mylib.dconsl(exec),
                    },
                    ce('p', {}, exec.internalError || ''),
                    ce('p', {}, `${exec.errors || ''}${exec.reason ? `:${exec.reason[0]}` : ''}`),
                    ce('p', { style: { color: 'orange' } }, exec.internalWarning || '')
                  )
                : null
            );
          })
        ];
      }
    }
    
    class CChordCardEditor extends React.Component {
      constructor() {
        super();
        this.currentFchord = g.cleanChords[0];
        this.newChords = [];
      }
      
      fu() {
        this.forceUpdate();
      }
      
      render() {
        const chordNames = Object.keys(window.json.chords).sort();
        
        return [
          g.isAccessed('setChord') && ce(`button`, {
            key: `new-chord-button`,
            className: `mbtn m-no msm`,
            onClick: async ev => {
              const chordName = await mylib.prompt(`Введите название аккорда`);
              if (chordName == null || !g.chordLike.exec(chordName)) {
                mylib.alert('Неправильное название аккорда!');
                return;
              }
              
              let upTm;
              const update = () => {
                clearTimeout(upTm);
                upTm = setTimeout(() => this.fu(), 100);
              };
              
              const chordi = this.newChords.push(chordName) - 1;
              window.json.chords[chordName] = window.json.chords[chordName] || [0];
              const chord = window.json.chords[chordName];
              
              mylib.setExecs({
                scope: `chord.set:${chordName}`,
                value: chord,
                method: 'set',
                action: 'setChord',
                onLoad: exec => {
                  this.newChords[chordi] = null;
                  update();
                },
                args: {
                  chordn: chordName,
                  chord
                }
              });
              
              g.ss();
            }
          }, `Новый, ${chordNames.length + 1}-й аккорд`),
          ce(`div`,
            {
              key: 'chord-ed-wr',
            },
            [
              ce(`div`, {key: `chords-group`, className: `mbtn mgroup`},
                g.cleanChords.map(chord => ce(`button`, {
                  key: `clean=ch..${chord}`,
                  className: `mbtn msm m-${this.currentFchord === chord ? `ok` : `br`}`,
                  onClick: async ev => {
                    
                    this.currentFchord = chord;
                    this.fu();
                  }
                }, chord))),
              chordNames.filter(chordName => chordName[0] === this.currentFchord).map(chordName =>
                ce(`div`,
                  {
                    key: `ch-imagine..${chordName}`,
                    id: chordName,
                    className: 'chord-application',
                    style: {
                      backgroundColor: ['green', 'yellow', 'brown', 'aqua', 'blue', 'violet', 'grey', 'rose'][this.newChords.indexOf(chordName)] || 'rgba(0, 0, 0, 0)'
                    }
                  },
                  ce(ChordCard, {
                    isRedaction: true,
                    chordName
                  })
                )
              )
            ]
          )
        ];
      }
    }
    
    class CEditableChordCard extends React.Component {
      
      fu(prev) {
        let track = this.track.slice(0);
        while (track.length > 1 && !track[track.length - 1]) {
          track.length--;
        }

        mylib.setExecs({
          scope: `chord.set:${this.chordName}`,
          prev,
          value: track,
          argValue: 'chord',
          method: 'set',
          action: 'setChord',
          args: {
            chordn: this.chordName,
          }
        });
        this.forceUpdate();
        g.ss();
      }
      
      get onLabelClick() {
        return !this.props.isRedaction ? null : async () => {
          const prev = this.track.slice(0);
          const lad = await mylib.prompt('Стартовый лад:', this.track[0] + 1);
          if (lad == null) return;
          this.track[0] = (Math.abs(parseInt(lad)) || 1) - 1;
          this.fu(prev);
        }
      }
      
      onPointClick(poss, i, pos) {
        return !this.props.isRedaction ? null : () => {
          const prev = this.track.slice(0);
          if (mylib.isNum(poss)) {
            this.track[i] = 0;
          } else {
            this.track[i].splice(this.track[i].indexOf(pos), 1);
            if (this.track[i].length === 0) this.track[i] = 0;
            else if (this.track[i].length === 1) this.track[i] = this.track[i][0];
          }
          this.fu(prev);
        };
      }
      
      get buttons() {
        const ladHeight = this.stringsCount * this.betweenStr;
        
        return !this.props.isRedaction 
          ? null
          : [
            this.lads.map((lad) => {
              const x1 = lad * this.betweenLad - this.betweenLad / 2;
              const y1 = ladHeight;
              const wt = this.betweenLad / 5;
              const x2 = x1 - wt / 2;
              const y2 = y1 + wt;
              const x3 = x1 + wt / 2;
              const isBare = !~this.track[lad];
              const color = isBare ? 'white' : 'red';
  
              return ce('polygon', {
                key: `chord-bare-adder-${lad}:${this.chordName}`,
                className: 'chord-bare-adder',
                points: `${x1},${y1} ${x2},${y2} ${x3},${y2}`,
                style: {
                  fill: color,
                  stroke: color
                },
                onClick: event => {
                  const prev = this.track.slice(0);
                  this.track[lad] = isBare ? 0 : -1;
                  this.fu(prev);
                }
              });
            }),
            this.strings.map((strNum, strNumi, strNuma) => {
              return this.lads.map(ladNum => {
                const lad = this.track[ladNum];
  
                if (lad == null || !~lad || mylib.isNum(lad) ? lad === strNum : ~lad.indexOf(strNum)) return null;
                const x = ladNum * this.betweenLad - this.betweenLad / 2;
                const y = strNum * this.betweenStr - this.betweenStr / 2;
  
                return ce('polyline', {
                  key: `chord-shadow-point-${ladNum}-${strNumi}:${this.chordName}`,
                  className: 'chord-point shadow',
                  points: `${x},${y} ${x},${y}`,
                  onClick: async ev => {
                    const prev = this.track.slice(0);
                    
                    if (this.track[ladNum + 1] == null) {
                      this.track[ladNum + 1] = 0;
                    }
                    
                    if (lad == null || lad < 1) this.track[ladNum] = strNum;
                    else if (mylib.isNum(lad)) this.track[ladNum] = lad === 0 ? strNum : [this.track[ladNum], strNum];
                    else {
                      lad.push(strNum);
                      lad.sort((a, b) => a - b);
                    }
                    this.fu(prev);
                  }
                });
              });
            })
          ];
      }
    }
    
    g.CEditableChordCard = CEditableChordCard;
    
    class CTranslationSetting extends React.Component {
      constructor() {
        super();
      }
      
      render() {
        return [
          ce('div',
            {
              className: 'mgroup',
            },
            g.translationPushKinds.map(({ title }, kindi) =>
              ce('button',
                {
                  className: 'mbtn m-no mxs',
                  disabled: g.nav.ccom.translationPushKind === kindi,
                  onClick: () => g.nav.ccom.setTranslationPushKind(kindi),
                },
                title
              )
            )
          ),
          g.nav.ccom.getOrderedBlocks().map(lines => {
            return ce('p',
              {
                style: {
                  whiteSpace: 'pre-wrap'
                }
              },
              lines.map(text =>
                ce('div',
                  {dangerouslySetInnerHTML: { __html: text }}
                )
              ),
            );
          })
        ];
      }
    }
    
    if (window.applicanter && window.applicanter.$listen) {
      let refreshMoment = Date.now();
      
      applicanter.$listen('App.beforeApplicationRefresh', 'cm-main-listener', async event => {
        if (mylib.execs && mylib.execs.length) {
          
          if (Date.now() - refreshMoment > 500) {
            refreshMoment = Date.now();
            event.returnValue = false;
            mylib.showToast('Сначала отправь изменения');
          } else mylib.showToast('Обновление..');
        }
      });
    }
    
    mylib.overlap(g.Comps, {
      11: CEditor,
      12: CChanges,
      13: CChordCardEditor,
    });
    
    mylib.overlap(g.Phase, {
      Editor: 11,
      Changes: 12,
      ChordCardEditor: 13
    });
    
    mylib.overlap(g.PhaseJumps, {
      [g.Phase.Editor]: g.Phase.Com,
      [g.Phase.Changes]: g.Phase.Cats,
      [g.Phase.ChordCardEditor]: g.Phase.Com,
    });
    
    g.comFooters = phasen => [
      ce('div',
        {
          key: `changes-list.${phasen}`,
          className: 'changes-list',
        },
        ce(CChanges, { key: `changes-list-inner.${phasen}` })
      ),
    ];
    
    g.usedChordsButtons = [
      ce('button',
        {
          key: 'redact-chord',
          className: 'mbtn m-no',
          onClick: () => g.ss({ phase: g.Phase.ChordCardEditor }),
        },
        svg('edit-outline', 'R')
      ),
    ];
    
    
    if (1) {
      const operation = async ({value: com = g.nav.ccom} = {}) => {
        mylib.dconsl('current:', com);
        
        g.ss();
      }
      
      applicanter.$listen('Cm.onComChange',  'cm-editor-m', operation);
      setTimeout(operation);
    }


})('');

