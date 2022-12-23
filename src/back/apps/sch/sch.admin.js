;'use strict';  


(function SchAdminModule() {
  const g = applicanter.scope('sch', {});
  let mylib = g.mylib;

  class SchAdmin extends React.Component {
    constructor() {
      super();
    }
    render() {
      return ce('div',
        {},
        'Admin'
      );
    }
  }
  
  g.SchAdmin = SchAdmin;


})('sch')











