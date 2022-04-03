import { cmStorage } from "../../../../store/jstorages";
import { ChordVisibleVariant, CmPhase } from "../Cm.model";

export class Nav {

  loadPhase() {
    return cmStorage.getOr('phase', 'cats');
  }

  setPhase(phase: CmPhase) {
    cmStorage.set('phase', phase);
    return phase;
  }

  loadChordVisibleVariant() {
    return cmStorage.getOr('chordVisibleVariant', 0);
  }

  setChordVisibleVariant(variant: ChordVisibleVariant) {
    cmStorage.set('chordVisibleVariant', variant);
    return variant;
  }

  // constructor(prev = {}) {
  //   // const obj = this.getLocal() || {};

  //   // this.fields.forEach(({ name, def }) => this[name] = mylib[def == null ? 'def' : 'typ'](def, prev[name], obj[name]));
  //   // this.context = prev.context;
  // }

  // get fields() {
  //   return [
  //     {
  //       name: 'phase',
  //       def: 1,
  //     }, {
  //       name: 'v',
  //       def: 0,
  //     }, {
  //       name: 'plShown',
  //       def: 0,
  //     }, {
  //       name: 'prevPhase',
  //       def: 1,
  //     }, {
  //       name: 'cat',
  //       def: 0,
  //     }, {
  //       name: 'com',
  //       def: null,
  //     }
  //   ];
  // }

  // ls() {
  //   return 'cm_navigation';
  // }

  // // getLocal() {
  // //   return mylib.getLS(this.ls());
  // // }

  // // save() {
  // //   const nav = {};
  // //   this.fields.forEach(({ name, def }) => nav[name] = mylib.def(this[name], def));
  // //   mylib.setLS(this.ls(), nav);
  // // }

  // // setState() {
  // //   Object.assign.apply(null, [this].concat(Array.from(arguments)));
  // // }

  // async setPhase(phase, state, cb) {
  //   const ret = phase === this.phase
  //     ? true
  //     : await applicanter.$emit('Cm.beforePhaseChange', [phase, state]);

  //   if (ret !== false) {
  //     if (phase !== this.phase) {
  //       // applicanter.$emit('Cm.onPhaseChange', [phase, state, this.prevPhase]);
  //       this.prevPhase = this.phase;
  //     }
  //     this.ss(Object.assign({}, { phase }, state), cb);
  //   }
  // }

  // goBack() {
  //   if (g.rollMode) {
  //     g.rollModeMarks = false;
  //     g.rollMode = null;
  //     this.ss();
  //   } else this.setPhase((g.PhaseJumps[this.phase] === null ? (this.prevPhase === this.phase ? 1 : this.prevPhase) || this.phase - 1 : g.PhaseJumps[this.phase] || this.phase - 1) || 1);
  // }

  // isCanGoBack(phase) {
  //   return g.PhaseJumps[this.phase] !== null || g.PhaseJumps[phase] !== null;
  // }

  // isPhase() {
  //   for (let i = 0; i < arguments.length; i++)
  //     if (arguments[i] === this.phase) return true;
  //   return false;
  // }

  // updateCcols() {
  //   this.updateCcol('Com');
  //   this.updateCcol('Cat');
  // }

  // updateCcol(coln) {
  //   const ccol = this.current(coln);

  //   if (coln === 'Com') this.ccom = ccol;
  //   else this.ccat = ccol;
  // }

  // current(coln = 'Com') {
  //   return g.cols[coln.toLowerCase() + 's'].find(col => col.wid === this[g.Phase[coln]]);
  // }

  // async setCom(comw, phase = g.Phase.Com, isEmitBeforeEvent = true) {
  //   clearTimeout(this.setComTimeout);

  //   return new Promise((resolve) => {
  //     this.setComTimeout = setTimeout(async () => {
  //       const com = g.cols.getCom(comw);
  //       const ret = !isEmitBeforeEvent || await applicanter.$emit('Cm.beforeComChange', [com, comw, phase]);

  //       if (ret !== false) {
  //         g.actions.com.onComChange();
  //         this.setPhase(phase == null ? this.phase : phase, { [g.Phase.Com]: comw }, () => this.updateCcol('Com'));

  //         applicanter.$emit('Cm.onComChange', [com, comw]);
  //         g.updateFlexFontSize();
  //       }

  //       resolve(ret);
  //     }, 100);
  //   });
  // }

  // setCat(catw) {
  //   this.setPhase(g.Phase.Cat, { [g.Phase.Cat]: catw }, () => this.updateCcol('Cat'));
  // }

  // setContext(context) {
  //   this.context = context;
  // }

  // ss(newState, cb) {
  //   if (this.context == null) {
  //     setTimeout(() => {
  //       throw ('there is not nav context!');
  //     });
  //     return null;
  //   }

  //   if (mylib.isObj(newState)) {
  //     this.setState(newState);
  //     this.save();
  //     mylib.func(cb).call();
  //     this.context.setState(newState);

  //   } else {
  //     mylib.func(cb).call();
  //     this.context.forceUpdate();
  //   }
  //   return newState;
  // }
}

export const nav = new Nav();
