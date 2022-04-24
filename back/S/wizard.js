;'use strict';

(function WizardModule(moduleName) {
  
  const mylib = applicanter.initMyLib('index');
  
  class FileSystemTree extends React.Component {
    constructor() {
      super();
      
      const fileSystem = this.parseDir();
      this.fileLmsName = 'file_lms.json';
      this.fileLms = mylib.parse(System.readExtStorage(this.fileLmsName), {});
      
      const computed = this.computed = this.computeUpdates(fileSystem, this.fileLms.debugLm);
      this.filesCount = computed.filesCount;
      
      /*this.fileLms.debugLm = computed.maxLm;
      System.writeExtStorage(this.fileLmsName, JSON.stringify(this.fileLms));
      */
      
      this.state = {
        fileSystem,
        computed,
        collapsedDirs: []
      };
      
      mylib.dconsl(fileSystem, this.fileLms, json, applicanter.components, computed);
    }
    
    withFileLms(cb) {
      const fileLms = mylib.deepClone(this.fileLms);
      cb && cb(this.fileLms);
      if (mylib.isEq(fileLms, this.fileLms)) return;
      
      this.saveFileLms();
    }
    
    parseDir() {
      return mylib.parse(System.scanExtDir(localStorage.workRoot || '/'), {});
    }
    
    setFileLm(path, name, lm) {
      this.fileLms[`${path}/${name}`] = lm;
      this.saveFileLms();
    }
    
    saveFileLms() {
      clearTimeout(this.saveFileLmsTimeout);
      this.saveFileLmsTimeout = setTimeout(() => System.writeExtStorage(this.fileLmsName, JSON.stringify(this.fileLms)), 50);
    }
    
    setUndefinedLms(topDir) {
      if (!topDir || !topDir.list) return;
      
      topDir.list.forEach((file = {}) => {
        const {type, name, path, list, lm} = file;
        
        if (type === 'file') {
          if (this.fileLms[`${path}/${name}`] == null) this.setFileLm(path, name, lm);
        } else this.setUndefinedLms(file);
      });
    }
    
    normId(path, name) {
      return mylib.normQuery(`${path}/${path}`);
    }
    
    printSysTree(dir) {
      return dir && dir.type === 'dir' && dir.list
        ? ce('div',
            {
              key: 'sys-tree-dir'
            },
            dir.list.map(sys => {
              return ce('div',
                {
                  key: `sys/${sys.path}/${sys.name}`,
                  style: {
                    marginLeft: `1rem`
                  }
                },
                ce('div',
                  {
                    key: `sys/${sys.path}/${sys.name}/name`,
                    style: {
                      textDecoration: sys.type === 'dir' ? 'underline' : 'none'
                    },
                    onClick: sys.type === 'file'
                      ? null
                      : event => {
                        event.stopPropagation();
                        this.setState({
                          collapsedDirs: this.state.collapsedDirs.indexOf(sys.file) < 0
                            ? this.state.collapsedDirs.concat(sys.file)
                            : this.state.collapsedDirs.filter(file => file !== sys.file)
                        });
                      }
                  },
                  `${sys.name}${this.state.computed.modifiedPaths.indexOf(sys.file) < 0 ? '' : ' *'}`
                ),
                sys.type === 'dir'
                  ? ce('div',
                      {
                        key: `sys/${sys.path}/${sys.name}/list`,
                        id: this.normId(sys.path, sys.name),
                        hidden: this.state.collapsedDirs.indexOf(sys.file) < 0
                      },
                      this.printSysTree(sys)
                    )
                  : null
              );
            })
          )
        : null;
    }
    
    setDebugLms(lm = Date.now()) {
      this.withFileLms(obj => {
        obj.debugLm = lm;
      });
    }
    
    computeUpdates(system, topLm = 0) {
      let maxLm = 0;
      let filesCount = 0;
      const modifiedPaths = [];
      const modifiedFiles = [];
      
      const compute = (dir, paths = []) => {
        if (!dir || !dir.list) return;
        
        dir.list.forEach(sys => {
          paths = paths.concat(dir.file);
          
          if (sys.type === 'file') {
            filesCount++;
            if (sys.lm > maxLm) maxLm = sys.lm;
            if (sys.lm > topLm) {
              paths.forEach(path => {
                if (modifiedPaths.indexOf(path) < 0) modifiedPaths.push(path);
              });
              modifiedPaths.push(`${dir.path}/${sys.name}`);
              modifiedFiles.push(sys);
            }
          } else compute(sys, paths);
        });
      };
      
      compute(system);
      
      return {
        maxLm, filesCount, modifiedPaths, modifiedFiles
      };
    }
    
    render() {
      
      return ce('div',
        {
          key: 'file/tree'
        },
        ce('div',
          {
            key: 'files/count'
          },
          `Количество файлов: ${this.filesCount}`
        ),
        ce('div',
          {
            key: 'files/send',
            onClick: async () => {
              const descriptionHtml = this.computed.modifiedFiles.map(sys => `<div><code>${sys.name};</code></div>`).join('');
              const word = await mylib.prompt('Секретное слово', '', 'Обновление времени модификаций');
              
              if (mylib.md5(word) === 'dbd2f9f2ccd2c687c3e2cf63fc662a78') {
                this.setDebugLms();
              }
              /*
                buttons: [
                  {
                    title: 'Комит в дев',
                    onClick: () => {
                      mylib.sendExecs({
                        track: 'commitTextFiles',
                        prev: null,
                        value: this.computed.modifiedFiles.map(sys => {
                          return {
                            path: sys.path,
                            name: sys.name,
                            file: sys.file,
                            content: System.readExtStorage(sys.name, sys.path),
                          };
                        }),
                        method: 'func',
                        action: 'commitTextFiles',
                      });
                      
                      mylib.dconsl(mylib.execs);
                    }
                  }, 'Отмена'
                ]
              });*/
            }
          },
          'Обновить время модификаций'
        ),
        this.printSysTree(this.state.fileSystem)
      );
    }
  }
  
  class WizardClient extends React.Component {
    constructor() {
      super();
    }
    
    render() {
      
      return ce('div',
        {
          key: 'wizard-window',
          id: 'wizard-window'
        },
        ce('div',
          {
            key: 'send-files',
            onClick: () => {
              mylib.modal({
                title: 'Файлы',
                description: ce(FileSystemTree),
              });
            }
          },
          svg('paper-plane-outline')
        )
      );
    }
  }
  
  window.WizardClient = WizardClient;
  
  setTimeout(() => {
    const abs = window.useElement('div', 'abs-line-wrapper');
    
    window.insertStyle('abs-line-style', `
      #wizard-window {
        --svg-color: white;
        
        position: absolute;
        display: flex;
        align-items: center;
        left: 0;
        top: 0;
        border-left: 1px solid yellow;
        height: 100vh;
        width: 5px;
        padding-left: 5px;
        background: rgba(0, 0, 0, 0);
        transition: background .3s, width .3s;
        z-index: 1000;
        overflow: hidden;
        box-sizing: border-box;
        
        &:hover {
          border-left-color: green;
          animation: fadein-abs-line 2s;
        }
      }
      
      @keyframes fadein-abs-line {
        0% {
          padding-left: 50px;
          color: white;
        }
        30% {
          width: 50px;
          background: black;
          padding-left: 5px;
        }
        70% {
          width: 50px;
          background: black;
          padding-left: 5px;
          color: white;
        }
      }
    `);
    
    
    ReactDOM.render(ce(WizardClient), abs);
  });
  
})();