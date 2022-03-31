
  class ISetts extends g.IEditableSetts {
    constructor(obj = {}) {
      super();
      this.navigation = mylib.typ({}, obj.navigation);
      this.styles = mylib.typ([], obj.styles).map(st => new IStyleProp(st));
    }

    query(name, type, sep, add) {
      return `${name === add ? '' : `${sep || ''}style-box-${mylib.normQuery(name)}${type ? `-${type}` : ''}`}${add ? `${sep || ' '}inherit-style${sep || ' '}${mylib.normQuery(add)}` : ''}`;
    }
  }
  