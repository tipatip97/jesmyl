
(function ServantModule() {
try {
  
  const g = applicanter.scope('index', {});
  const reportErrorMessage = error => mylib.func(window.reportErrorMessage, mylib && mylib.consl, e => alert(e.message)).call(error);
  g.reportErrorMessage = reportErrorMessage;
  
  (() => {
    const minTouches = 3;
    const maxTouches = 3;
    let timeout = null;
    const lsName = 'body-class-name';
    const bodyClass = localStorage.getItem(lsName);
    const classList = document.body.classList;
    if (bodyClass) classList.add(bodyClass);
    
    document.body.addEventListener('touchstart', (event) => {
      const touches = event.touches.length;
      
      if (touches === 4) {
        mylib.conslBox({toggle: true});
        
      } else if (touches >= minTouches && touches <= maxTouches) {
        timeout = setTimeout(() => {
          const className = 'light-theme';
          classList.toggle(className);
          if (!classList.contains(className))
            localStorage.removeItem(lsName);
          else
            localStorage.setItem(lsName, className);
        }, 500);
      } else {
        clearTimeout(timeout);
      }
    });
    document.body.addEventListener('touchend', (event) => {
      const touches = event.touches.length;
      
      if (touches < minTouches || touches > maxTouches)
        clearTimeout(timeout);
    });
  })(); // theme switcher
  

setTimeout(() => mylib.conslBox({show: false}));





} catch(error) {alert(error.stack);}






})();



