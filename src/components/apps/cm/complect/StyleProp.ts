
  class IStyleProp extends g.IEditableStyleProp {
    constructor(props) {
      super(props);
      if (!props.n) {
        throw mylib.consl('there is no StyleProp name');
      }
      
      this.headerProps = props.c;
      this.textProps = props.t;
    }
    
    getOrBase(o, t) {
      return mylib.func(super.getOrBase && (() => super.getOrBase(o, t))).call();
    }
    
    get name() { return this.getOrBase('', 'n'); }
    //set name(val) { this.n = mylib.typ('', val); }
    
    get header() { return this.getOrBase('', 'h'); }
    //set header(val) { this.h = mylib.typ('', val); }
    
    get isInherit() { return this.getOrBase(0, 'i'); }
    //set isInherit(val) { this.i = mylib.typ(0, val); }
    
    get headerProps() { return this.c; }
    set headerProps(val) { this.c = mylib.typ({}, val); }
    
    get textProps() { return this.t; }
    set textProps(val) { this.t = mylib.typ({}, val); }
    
    get isModulation() { return this.getOrBase(0, 'md'); }
    //set isModulation(val) { this.md = mylib.typ(0, val); }
    
  }
  