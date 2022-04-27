;'use strict';

(function CmFeaturesAccessesModule(moduleName) {

  const g = applicanter.scope('cm');
  const mylib = g.mylib;
  
  g.isAccessToDo = (name) => {
    switch (name) {
      case 'flexibleMainFontSize':
        return true;//mylib.isDebug();
    }
  };

})('');
