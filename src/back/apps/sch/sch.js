;'use strict';  


(function SchModule() {
  
  const g = applicanter.scope('sch', {});
  let mylib = g.mylib = applicanter.initMyLib('sch');
  
  class App extends React.Component {
    constructor() {
      super();
    }
    render() {
      return ce('div',
        {
          onClick: () => applicanter.load('index'),
        },
        'BACK',
        g.SchAdmin && ce(g.SchAdmin)
      );
    }
  }
  
  window.applicanter.register('sch', ce(App));




})('sch')











