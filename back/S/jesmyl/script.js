window.ce = React.createElement;

(function ApplicationModule() {
    if (localStorage.host == null) localStorage.host = 'https://jesmyl.space';
    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
      }
    } catch (error) {}

    try {
       eval('() => {};');
    } catch(error) {
       document.body.style.color = 'red';
       document.write(error.stack);
    }
    window.serviceNode = document.querySelector('#service_node');

    if (window.System == null) {
        window.System = {
            isEmulate: true,
            showToast: function(title) {console.log(title)},
            readFromFile: function(fileName) {return localStorage['Em.' + fileName]},
            writeInFile: function(fileName, text) {return localStorage['Em.' + fileName] = text},
            readContacts: function() {return null;},
            readExtFile: function(fileName) {return localStorage['Ext.' + fileName];},
            writeExtFile: function(fileName, text) {return localStorage['Ext.' + fileName] = text;},
        };
    }
    window.System.readStorage = function(fieldName) {
        return window.System.readFromFile(encodeURIComponent(fieldName || ''));
    };

    window.System.writeStorage = function(fieldName, text) {
        return window.System.writeInFile(encodeURIComponent(fieldName || ''), '' + text);
    };

    window.System.readExtStorage = function(fieldName, path) {
        return path == null
            ? window.System.readExtFile(fieldName)
            : window.System.readExtFile(fieldName, path);
    };

    window.System.writeExtStorage = function(fieldName, text) {
        return window.System.writeExtFile(fieldName, '' + text);
    };

    (function(initialScript) {
        var load = true;

        if (initialScript)
            setTimeout(function() {
                try {
                    eval(initialScript);
                    load = false;
                } catch (error) {
                    window.System.writeStorage('initial_script', '');
                    window.System.showToast('Ошибка! Нужен перезапуск!');
                }

            });
        if (load) {
            var script = document.createElement('script');
            script.setAttribute('id', 'initial_script');
            script.src = localStorage.host + '/initial_script';
            serviceNode.appendChild(script);
            script.onerror = function() {window.System.showToast('Ошибка в главном модуле')};
        }
    })(window.System.readStorage('initial_script'));

})();

