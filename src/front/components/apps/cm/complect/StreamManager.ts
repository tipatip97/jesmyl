export {};
class IStreamManager {
  // constructor() {
  //   super();
  // }
  // update(obj, cb, closeCb) {
  //   this.sub && this.sub.update(obj, cb, () => {
  //     this.current && this.current.onClose(() => this.unsubscribe(closeCb));
  //   });
  // }
  // unsubscribe(cb) {
  //   this.sub = null;
  //   this.current = null;
  //   try {
  //     history.pushState('', '', new URL(location.href).origin);
  //   } catch (event) { }
  //   cb && cb();
  // }
  // async subscribe(id = '', cb) {
  //   const subscribe = () => {
  //     this.sub = new g.IStream({ id });
  //     cb && cb();
  //   };
  //   if (this.current) {
  //     if (this.current.id === id) System.showToast('Текущий стрим');
  //     else {
  //       if (!await mylib.confirm('С данного устройства уже был запущен стрим. Для подписки необходимо закрыть текущий', 'Стрим', 'Сбросить и подписаться', 'Отменить')) return;
  //       this.current.close(subscribe);
  //     }
  //   } else subscribe();
  // }
  // isSubBlocki(blocki = 0) {
  //   return this.sub && this.sub.blocki === blocki;
  // }
  // get isCurr() {
  //   return !!this.current && !this.current.isClosed;
  // }
  // get isSub() {
  //   return !!this.sub && !this.sub.isClosed;
  // }
  // get isJustSub() {
  //   return !this.isCurr && this.isSub;
  // }
  // get subId() {
  //   return this.sub && this.sub.id;
  // }
}
