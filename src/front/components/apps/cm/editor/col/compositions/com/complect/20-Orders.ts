import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { cmExer } from '../../../../../CmExer';
import { IExportableOrderTop, INewExportableOrder } from '../../../../../col/com/order/Order.model';
import { EditableOrder } from '../../complect/orders/EditableOrder';
import { EditableComCorrects } from './10-Corrects';

const keysIExportableOrderTop: (keyof IExportableOrderTop)[] = ['t', 's', 'a', 'u', 'c'];

export class EditableComOrders extends EditableComCorrects {
  protected _o?: EditableOrder[];

  get ords(): IExportableOrderTop[] {
    if (this._ords == null) this._ords = mylib.clone(this.getBasic('o')) ?? [];

    return this._ords as IExportableOrderTop[];
  }

  get orders(): EditableOrder[] | null {
    return this._o || (this.setOrders() as EditableOrder[]);
  }

  afterOrderChange() {
    this.setOrders();
    this.resetChordLabels();
  }

  addOrders(orderDicts: INewExportableOrder[] = []) {
    orderDicts.forEach(dict => this.addOrder(dict, false));
    this.afterOrderChange();
  }

  addOrder(topOrd: INewExportableOrder, refresh = true) {
    const w = this.getNextOrdWid();

    this.exec({
      action: 'comAddOrderBlock',
      method: 'push',
      args: {
        ordw: w,
        texti: topOrd.t,
        type: topOrd.s,
        chordsi: topOrd.c,
        anchor: topOrd.a,
        uniq: topOrd.u,
      },
    });

    const ord: IExportableOrderTop = { w, header: () => '' };

    keysIExportableOrderTop.forEach(key => {
      if (topOrd[key as never] != null) ord[key] = topOrd[key as never];
    });

    this.ords.push(ord);
    if (refresh) this.afterOrderChange();
  }

  isOrdWithHead(ord: EditableOrder) {
    return !ord.top.isInherit && !ord.top.isAnchorInheritPlus && !ord.isEmptyHeader;
  }

  getOrdersOnBlockDeletion(coln: 'texts' | 'chords', coli: number) {
    if (!this.orders) return {};
    const indexes: { ordi: number; ord: EditableOrder }[] = [];
    const containers = this.orders.filter((ord, ordi) => {
      const isContains = (coln === 'texts' ? ord.texti : ord.chordsi) === coli;
      if (isContains) indexes.push({ ordi, ord });
      return isContains;
    });
    let anchors: EditableOrder[] = [];

    if (coln === 'texts') {
      anchors = this.orders.filter((ord, ordi) => {
        return containers.some(contOrd => {
          const isAnch = ord.isAnchor && contOrd.top.u === ord.top.a;
          if (isAnch) indexes.push({ ordi, ord });
          return isAnch;
        });
      });
    }

    return {
      containers,
      anchors,
      indexes: indexes.sort((a, b) => b.ordi - a.ordi),
    };
  }

  isImpossibleToMigrateOrder(ord: EditableOrder, ordi: number, ords: EditableOrder[]) {
    let isSelfOrd = false;

    return (
      ord.top.isAnchorInherit ||
      ordi === ords.length - 1 ||
      !ords.some(currOrd => {
        if (currOrd === ord) {
          isSelfOrd = true;
          return false;
        }
        if (!isSelfOrd) return false;
        return !currOrd.top.isAnchorInherit;
      })
    );
  }

  isCantMigrateOrder(ord: EditableOrder, ordi: number) {
    return (
      (!ordi && ord.top.isNextInherit) ||
      ord.top.isNextAnchorOrd ||
      (ord.top.isNextAnchorOrd && !ordi) ||
      (index => !(index < 0 || index === cmExer.execs.length - 1))(
        cmExer.execs.findIndex(exec => exec.action === 'comMigrateOrders' && exec.args?.comw === this.wid),
      )
    );
  }

  migrateOrder(topOrd: EditableOrder) {
    if (!this.orders) return;
    const { top: { source: { w: to = null } = {} } = {} } = topOrd.top.next || topOrd.top.prev || {};

    if (to == null) {
      return;
    }

    const prev: Record<number, number> = {};
    const value: Record<number, number> = {};
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
      if (ord.top.source && prev[ord.wid] != null && !ord.top.isAnchorInherit) ord.top.source.w = prev[ord.wid];
    });

    this.orders.forEach(ord => {
      const originWid = ord.originWid;
      if (originWid != null && ord.top.source && ord.top.source.w !== originWid) value[originWid] = ord.top.source.w;
    });

    this.exec({
      value,
      method: 'migrate',
      action: 'comMigrateOrders',
      args: {
        value,
      },
    });

    this.afterOrderChange();
  }

  removeOrderBlock({ wid, isAnchor, top }: EditableOrder) {
    this.exec({
      action: 'removeOrderBlock',
      uniq: wid,
      method: 'remove',
      args: {
        ordw: wid,
        isAnchor: +isAnchor,
        blockn: top.header?.(),
      },
      anti: ({ action, args, args: { comw } = {} }) => {
        if (action === 'comAddOrderBlock' && comw === this.wid && wid === args?.wid)
          return strategy => strategy.RememberNew;
      },
    });
    const index = this.ords.findIndex(o => o.w === wid);

    this.ords.splice(index, 1);
    this.afterOrderChange();

    this.resetChordLabels();
  }

  getNextOrdWid() {
    return (this.ords?.reduce((w, ord) => (ord.w == null || ord.w < w ? w : ord.w), -1) ?? -1) - -1;
  }

  addOrderAnchor(ord: EditableOrder) {
    if (ord.isAnchor) {
      console.error('Не возможно ссылаться на ссылку');
      return;
    }

    const anchor = ord.takeUniq();
    const wid = this.getNextOrdWid();

    this.ords.push({ a: anchor, w: wid, header: () => '' });
    this.afterOrderChange();

    return this.exec({
      action: 'comAddOrderAnchorBlock',
      method: 'push',
      args: {
        ordw: wid,
        anchor,
        blockn: ord.top.header?.(),
      },
    });
  }

  updateOrderSticks(coln: 'texts' | 'chords', coli: number, delta: number, isReset?: boolean) {
    const ccoln = coln === 'texts' ? 't' : 'c';
    this.ords.forEach((ord, ordi) => {
      const colIndex = ord[ccoln] || 0;
      if (isReset ? colIndex >= coli : colIndex > coli) {
        const value = isReset && ord[ccoln] === coli ? -1 : colIndex - -delta;

        this.exec({
          uniq: [ordi, coln],
          prev: 0 - -colIndex,
          value,
          method: 'set',
          action: 'updateOrderStick',
          args: {
            coln: coln === 'texts' ? 't' : 'c',
            value,
            ordi,
            ordw: ord.w,
          },
        });
        ord[ccoln] = value;
      }
    });
    this.afterOrderChange();
  }
}
