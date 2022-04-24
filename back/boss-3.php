<?

$down = $_GET['down'];

if (isset($down)) {
  $dict = ['ok' => true];
  $token = $_GET['token'] ? base64_decode($_GET['token']) : '';
  
  if ($token !== 'zerou') {
    $dict['ok'] = false;
    $dict['error'] = $token ? "permission denied!" : "no token";
  } elseif (is_file($down)) {
    $b64 = base64_encode(file_get_contents($down));
    $mime = mime_content_type($down);
    $dict['base64'] = "data:$mime;base64,$b64";
  } else {
    $dict['ok'] = false;
    $dict['error'] = "file '$down' not exists";
  }
  
  echo json_encode($dict, JSON_UNESCAPED_UNICODE);
} elseif ($_GET['x'] === "fupload") {
  if (0 && $_GET['auth'] !== 'zerou') {
    echo '{"ok":false, "msg":"unauthorized"}';
  } else {
    $error = false;
    $files = [];
    $path = $_GET['path'];
    $roots = 0755;
    
    $uploaddir = trim($path);
    if (!is_dir($uploaddir)) mkdir($uploaddir, $roots);
    
    forEach ($_FILES as $file) {
      $filepath = $uploaddir . basename($file['name']);
      if (move_uploaded_file($file['tmp_name'], $filepath)) {
        chmod($filepath, $roots);
        $files[] = $filepath;
      } else {
        $error = true;
        break;
      }
    }
   
    echo json_encode([
      'ok' => !$error,
      'count' => count($_FILES),
      'files_count' => sizeof($files),
      'files' => $files,
    ], JSON_UNESCAPED_UNICODE);
 
  }
 
} else {

function printJson() {
return 1 ? '' : 'localStorage[this.lsName] = JSON.stringify(

[
 {
  "ts": 1621333563442,
  "path": "./",
  "lms": {
   "J.apk": 1616134161610,
   "sw.js": 1621313721590,
   "boss-2.php": 1621325629780,
   "boss-3.php": 1621333559820
  }
 },
 {
  "ts": 1621576288937,
  "path": "./S/",
  "lms": {
   "execute-tracks.php": 1620325603290,
   "users-listo.php": 1617863719161,
   "64.php": 1603524758560,
   "s-auth.php": 1605611590340,
   "auth-me.php": 1606235377920,
   "board.js": 1619102140340,
   "rights.json": 1620804746810,
   "index.js": 1621504521360,
   "my-lib.js": 1621180617120,
   "requirements.json": 1621576283810,
   "servant.js": 1611835508280,
   "servant.php": 1620810195610,
   "authorizator.php": 1619155496650,
   "code.php": 1601900543150,
   "eval.php": 1605593019120,
   "apps.json": 1621576266650,
   "main.css": 1621503663440,
   "requirements.php": 1621235461520,
   "coder.php": 1603092597300,
   "help-me.php": 1617863719134,
   "themes.css": 1611579393840,
   "manifest.webmanifest": 1615821621650,
   "apps-servant.php": 1619117355560,
   "tools.json": 1617870193520,
   "rrd.js": 1617863719148
  }
 },
 {
  "ts": 1621244831706,
  "path": "./S/jesmyl/",
  "lms": {
   "script.js": 1621244828410
  }
 },
 {
  "ts": 1621501942378,
  "path": "./S/json/",
  "lms": {
   "eva-icons.json": 1621501903690
  }
 },
 {
  "ts": 1616144122596,
  "path": "./apps/adm/",
  "lms": {
   "adm.js": 1616144104230,
   "adm.css": 1609310135000
  }
 },
 {
  "ts": 1617532548318,
  "path": "./apps/bible/",
  "lms": {
   "bible.css": 1567765332000,
   "bible.js": 1617531310710,
   "bible.json": 1551110584000
  }
 },
 {
  "ts": 1621505761872,
  "path": "./apps/cm/",
  "lms": {
   "cm.js": 1621505758440,
   "cm-rights.json": 1618830381290,
   "cm.css": 1616237678430,
   "cm-action-descriptions.json": 1618989963250,
   "cm-translations.module.js": 1621191107840,
   "cm.module.js": 1610177968270,
   "cm-editor.module.js": 1621504580810,
   "cm-servant.module.js": 1616397784710,
   "cm-meetings.module.js": 1621174154390,
   "cm-streams.module.js": 1621174894060,
   "cm-settings.module.js": 1618992674440
  }
 },
 {
  "ts": 1610196097155,
  "path": "./apps/exb/",
  "lms": {
   "exb.css": 1610196071100,
   "exb.js": 1609768106120
  }
 },
 {
  "ts": 1611485227872,
  "path": "./apps/im/",
  "lms": {
   "im.css": 1611252811990,
   "im.js": 1611485037610
  }
 },
 {
  "ts": 1621318036254,
  "path": "./apps/sch/",
  "lms": {
   "sch.js": 1621317784590
  }
 },
 {
  "ts": 1621576294186,
  "path": "./release/S/",
  "lms": {
   "execute-tracks.php": 1620325603290,
   "users-listo.php": 1605906240520,
   "s-auth.php": 1605611590340,
   "auth-me.php": 1606235377920,
   "board.js": 1619102140340,
   "rights.json": 1620804746810,
   "index.js": 1621504521360,
   "my-lib.js": 1621180617120,
   "requirements.json": 1621576283810,
   "servant.js": 1611835508280,
   "servant.php": 1620810195610,
   "authorizator.php": 1619155496650,
   "apps.json": 1621576266650,
   "main.css": 1621503663440,
   "requirements.php": 1621235461520,
   "coder.php": 1603092597300,
   "help-me.php": 1605968821870,
   "themes.css": 1611579393840,
   "apps-servant.php": 1619117355560
  }
 },
 {
  "ts": 1621506029807,
  "path": "./release/apps/cm/",
  "lms": {
   "cm.js": 1621505758440,
   "cm.css": 1616237678430,
   "cm-translations.module.js": 1621191107840,
   "cm-settings.module.js": 1618992674440,
   "cm-editor.module.js": 1621504580810,
   "cm-servant.module.js": 1616397784710,
   "cm-action-descriptions.json": 1618989963250,
   "cm-meetings.module.js": 1621174154390,
   "cm-streams.module.js": 1621174894060
  }
 },
 {
  "ts": 1611495586340,
  "path": "./release/apps/im/",
  "lms": {
   "im.css": 1611252811990,
   "im.js": 1611485037610
  }
 }
]

)';
}

 ?>
<title>FUPLOAD</title>
<meta charset="utf-8" />

<body>
  <div id=application ></div>
</body>

<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

<style>
  [type="button"], button {
    border-radius: 5px;
    border: none;
    outline: 0;
    background: #ccc;
  }
  
  :disabled {
    opacity: .5;
  }
</style>

<script>
;'use strict';

const ce = React.createElement;

window.onerror = (msg, src, line) => alert(`${src}:${line}\n${msg}`);

class App extends React.Component {
  constructor() {
    super();
    
    this.defPath = './';
    this.newPathValue = this.defPath;
    this.downPathValue = this.defPath;
    this.currentPt = {path: this.defPath};
    this.files = null;
    this.textareaPhase = 'inactive';
    
    <?echo printJson();?>
    
    this.upPts();
  }
  
  fu(cb) {
    cb && cb();
    this.forceUpdate();
  }
  
  get lsName() {
    return '#save[dp]aths#';
  }
  
  get local() {
    return localStorage[this.lsName] || '[]';
  }
  
  set local(value) {
    localStorage[this.lsName] = value;
  }
  
  get pts() {
    return JSON.parse(localStorage[this.lsName] || '[]');
  }
  
  set pts(value) {
    if (Array.isArray(value))
      localStorage[this.lsName] = JSON.stringify(value, null, ' ');
  }
  
  sortPts(value) {
    this.pts = (Array.isArray(value) ? value : this.pts).sort((a, b) => a.path > b.path ? 1 : a.path < b.path ? -1 : 0);
  }
  
  upPts(value, check = false) {
    const up = () => {
      let isError = false;
      
      try {
        this.sortPts((value) ? JSON.parse(value) : null);
        //this.local = JSON.stringify(this.pts, null, ' ');
      } catch (error) {
        isError = true;
      }
      
      if (check) {
        this.textareaPhase = isError ? 'error' : 'success';
        this.fu();
      }
    };
    
    if (check) {
      clearTimeout(this.typeTimeout);
      this.typeTimeout = setTimeout(up, 500);
    } else up();
  }
  
  changePt(ptScalar) {
    let pt = ptScalar;
    if (typeof ptScalar === 'string') pt = this.pts.find(pt => pt.path === ptScalar);
    if (pt == null) {
      alert(`no pt: ${ptScalar}`);
      return;
    }
    this.downPathValue = pt.path;
    this.currentPt = pt;
    
    this.fu();
  }
  
  render() {
    return ce('div',
      {
        key: 'main',
      },
      ce('div',
        {
          key: 'file-paths'
        },
        this.pts.map(pt => {
          const {path, lms, ts} = pt;
          return ce('label',
            {
              key: `path:${path}`,
              className: 'block',
              style: {
                color: this.currentPt.path === path ? 'black' : 'grey'
              }
            },
            ce('input', {
              key: `path-radio:${path}`,
              type: 'radio',
              name: 'path',
              checked: this.currentPt.path === path,
              onChange: () => setTimeout(() => this.changePt(pt)),
              onClick: event =>
                this.currentPt.path === path
                && confirm(`Удалить путь "${path}"?`)
                && this.fu(() => {
                  this.sortPts(this.pts.filter(pt => pt.path !== path));
                  this.changePt(this.defPath);
                  if (this.newPathValue === path) this.newPathValue = './';
                }),
            }),
            ce('b',
              {
                key: `path-name:${path}`
              },
              path
            ),
            ce('span',
              {
                key: `path-ts:${path}`
              },
              ` ${ts}`
            ),
          );
        }),
        ce('div',
          {
            key: 'pathss'
          },
          ce('input',
            {
              key: `pt-inp:new`,
              type: 'text',
              value: this.newPathValue,
              onInput: event => this.fu(() => this.newPathValue = event.target.value),
            },
          ),
          ce('input',
            {
              key: `pt-btn:add`,
              type: 'button',
              value: 'Новый path',
              style: {
                background: !this.newPathValue || !this.newPathValue.endsWith('/') ? 'red' : 'none'
              },
              disabled: !this.newPathValue || this.pts.some(pt => pt.path === this.newPathValue),
              onClick: () => this.fu(() => {
                const newPt = {path: this.newPathValue, lms: {}, ts: 0}
                this.sortPts(this.pts.concat(newPt));
                this.changePt(newPt);
              }),
            },
          ),
        ),
        ce('div',
          {
            key: 'down'
          },
          ce('input',
            {
              key: 'down-inp',
              ref: 'downloadInput',
              onInput: event => this.fu(() => this.downPathValue = event.target.value),
              value: this.downPathValue,
            },
          ),
          ce('input',
            {
              key: 'down-btn',
              type: 'button',
              value: 'Скачать',
            },
          ),
        ),
        ce('div',
          {
            key: 'upl',
          },
          ce('input',
            {
              type: 'file',
              ref: 'fileInput',
              multiple: true,
              style: {display: 'none'},
              onChange: event => this.fu(() => this.files = event.target.files),
            }
          ),
          !this.files
            ? ce('input',
                {
                  key: 'choose-inp',
                  type: 'button',
                  value: 'Выбрать файлы',
                  style: {
                    background: 'yellow',
                    color: 'black',
                  },
                  onClick: event => event.target.previousSibling.click(),
                },
              )
            : ce('input',
                {
                  key: 'down-btn',
                  type: 'button',
                  value: 'Загрузить',
                  style: {
                    background: 'green',
                    color: 'white',
                  },
                },
              ),
          ce('input',
            {
              key: 'down-btn',
              type: 'checkbox',
            },
          ),
        ),
        ce('div',
          {
            key: 'readies' 
          },
        )
      ),
      Array.from(this.files || []).map(({name}) => {
        return ce('div',
          {
            key: `file:${name}`,
          },
          ce('span',
            {
              key: `file:${name}-pre`,
              style: {
                color: 'grey',
              }
            },
            this.currentPt.path
          ),
          ce('b',
            {
              key: `file:${name}-name`,
            },
            name
          ),
        );
      }),
      ce('textarea',
        {
          key: 'saved-text',
          onInput: event => {
            this.textareaPhase = 'wait';
            this.unsavedLocal = event.target.value;
            this.fu();
            this.upPts(event.target.value, true);
          },
          onFocus: () => this.fu(() => this.textareaPhase = 'focused'),
          onBlur: () => {
            this.textareaPhase = 'inactive';
            this.unsavedLocal = null;
            this.fu();
          },
          style: {
            outline: 0,
            transition: 'height .3s, width .5s, border-color .3s',
            border: 'solid white 5px',
            width: this.textareaPhase === 'inactive'
              ? '50vw'
              : '90vw',
            height: this.textareaPhase === 'inactive'
              ? '4em'
              : '70vh',
            borderColor: this.textareaPhase === 'error'
              ? 'red'
              : this.textareaPhase === 'wait'
                ? 'orange'
                : this.textareaPhase === 'success'
                  ? 'green'
                  : 'grey',
          },
          value: this.unsavedLocal || this.local
        }
      ),
    );
  }
}

ReactDOM.render(ce(App), application);


</script>


<!-- div id=filepathsInput></div>
<input type="radio" name=paths path="###" onchange="updateForPathStamps()" checked/>
<input id=pathInput type="text" value=./ />
<br>
<div>
  <input id="downloadPath" />
  <input id="downloadButton" type="button" value="Скачать" />
  <a id=downloadAnchor download="file.file" style="display:none;" ></a>
  <div id=downloadError style=color:red ></div>
</div>
<input id=fileInput type="file" multiple style="display: none;"/>
<input type="button" value="Выбрать файлы" onclick="emitFilechange()"/>
<input type="button" onclick=onSendInputClick() value="Выгрузить" />
<input id=forceInput type="checkbox" />
<div id=preparesBlock></div>
<hr/>
<div id=sentBlock></div>
<hr/>
<input type="button" onclick=onSendInputClick() value="Выгрузить" />
<div id=responseBlock></div>
<textarea id=jsonArea rows=2 style=width:90vw ></textarea>
<pre id=jsonBlock ></pre>

<script>
try {

const lsname = 'savedpaths';
let savedPaths;

jsonArea.style.transition = 'height .5s, border-color .3s';
jsonArea.style.border = 'solid grey 5px';

jsonArea.onfocus = () => {
  jsonArea.style.height = '70vh';
  jsonArea.value = JSON.stringify(JSON.parse(localStorage[lsname] || '[]'), null, ' ');
};
jsonArea.onblur = () => {
  jsonArea.style.height = '4em';
  upSavedPaths();
  jsonArea.style.borderColor = 'grey';
};

jsonArea.oninput = (() => {
  let timeout;
  jsonArea.style.outline = '0';
  
  return () => {
    jsonArea.style.borderColor = 'yellow';
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      try {
        savedPaths = JSON.stringify(JSON.parse(jsonArea.value || '[]'));
        localStorage[lsname] = savedPaths;
        jsonArea.style.borderColor = 'green';
      } catch (error) {
        jsonArea.style.borderColor = 'red';
      }
    }, 500);
  };
})();

function upSavedPaths() {
 savedPaths = JSON.parse(localStorage[lsname] || '[]');
 jsonArea.value = JSON.stringify(savedPaths, null, ' ');
}

<?echo printJson();?>

upSavedPaths();

function renderPaths(prevPath = getPath()) {
 upSavedPaths();
 filepathsInput.innerHTML = savedPaths.reduce((html, pth) => html += `<label class="block"><input type="radio" onchange="updateForPathStamps()" name="paths" path="${pth.path}" onmousedown="onRadioDelete(event)" id="${pth.path}" ${prevPath != null && pth.path === prevPath ? `checked` : ``}/><span><b>${pth.path}</b> (${pth.ts})</span></label>`, ``);
 updateForPathStamps();
}

function getPath() {
 const attrPath = document.querySelector('[name="paths"]:checked').getAttribute('path');
 return attrPath === '###' ? pathInput.value : attrPath;
}

pathInput.onblur = () => updateForPathStamps();

function updateForPathStamps() {
 try {
  highlightModifiedFiles();
  const pathStamps = document.querySelectorAll(`.path-stamp`);
  const attrPath = getPath();
  document.title = `${attrPath}%`;
  pathStamps && pathStamps.forEach(element => element.innerText = attrPath);
  downloadPath.value = attrPath;
 } catch (e) {alert(e.stack)}
}

function upload(body, files, cb = f=>f) {
 const path = getPath();
 responseBlock.innerHTML = '';
 
 if (/\/release\//.test(path) && !confirm('Действительно ли это готово к релизу?')) return;
 if (/[^/]$/.test(path) && !confirm(`Путь заканчивается не на слеш. В случае отправки в данном виде все файлы будут начинаться на ${path.replace(/([^/]+)$/, `$1`)}`)) return;
 fetch(`boss-2.php?x=fupload&path=${path}&auth=${localStorage.auth}`, {
  method: `POST`,
  body
 })
  .then(response => response.json())
  .then(resp => {
   upSavedPaths();
   const pth = savedPaths.find(sav => sav.path === path);
   
   if (pth) {
    files.forEach(file => pth.lms[file.name] = file.lastModified);
    pth.ts = Date.now();
   } else {
    savedPaths.push({
     ts: Date.now(),
     path, lms: files.reduce((lms, file) => {
      lms[file.name] = file.lastModified;
      return lms;
     }, {})
    });
   }
   
   savedPaths = savedPaths.sort((a, b) => a.path > b.path ? 1 : a.path < b.path ? -1 : 0);
   
   localStorage[lsname] = JSON.stringify(savedPaths);
   responseBlock.innerHTML = (resp.ok)
     ? `<b style="color:green">OK : ${resp.files_count}</b>`  //${resp.files && resp.files.map(filen => `<div>${filen}</div>`)}`
     : `<b style="color:red">${resp.msg}</b>`;
   cb();
  })
  .catch(alert);
};

function emitFilechange(event) {
 try {
  (fileInput.files.length
   && confirm(`Были выбраны файлы. Изменить выбор?`)
   && fileInput.click())
    || (!fileInput.files.length && fileInput.click());
  } catch (e) {alert(e.stack)}
};

function onRadioDelete(event) {
 try {
  upSavedPaths();
  event.target.checked
   && confirm(`Удалить путь ${event.target.id} из списка?`)
   && (savedPaths.splice(savedPaths.findIndex(pth => pth.path === event.target.id), 1))
   && (localStorage[lsname] = JSON.stringify(savedPaths));
 } catch (e) {alert(e.stack)}
}

function sendFiles(fileNames, cb = f=>f) {
 const form = new FormData();
 const asPost = {};
 try {
 const loadedFiles = [];
 const files = [];
 
 renderPaths();
 const checkedFiles = [];
 
 for (let i = 0, j = 0; i < fileInput.files.length; i++) {
  const file = fileInput.files[i];
  
  if (fileNames && fileNames.indexOf(file.name) < 0) continue;
  files.push(file);
  form.append(j++, file);
 }
 
 upload(form, files, cb);
 } catch (e) {alert(e.stack);}
};

let gfiles = [];
let gfilests = [];

function uploadModified() {
  try {
    const path = getPath();
    const currPt = savedPaths.find(pt => pt.path === path);
    const files = fileInput.files;
    const upfiles = gfiles.filter(gfile => currPt.lms[gfile.name] != null && currPt.lms[gfile.name] !== gfile.lastModified);
    const fileNames = upfiles.map(f => f.name);
    
    if (fileNames.length)
      sendFiles(fileNames, () => {
       
        upfiles.forEach(upfile => currPt.lms[upfile.name] = gfiles.find(gfile => gfile.name === upfile.name).lastModified);
        sentBlock.innerHTML = '<h4>По изменениям:</h4>' + upfiles.reduce((html, {name, lastModified}) => {
         const lm = new Date(lastModified);
         return `${html}<div>${path}<b>${name}</b> ${lm.getHours()}:${lm.getMinutes()}:${lm.getSeconds()}</div>`
        }, '');
       
        updateForPathStamps();
      });
    else setTimeout(() => sentBlock.innerHTML = `<b style="color:orange;">Изменений не было</b>`);
  } catch (e) {alert(e.stack);}
};

window.onfocus = updateForPathStamps;

function onChangeFileInput() {
  try{
    upSavedPaths();
    const files = fileInput.files;
    let path = '';
   
    gfiles = [];
    gfilests = [];
   
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const {name, lastModified, size} = file;
      
      if (!size) continue;
      
      gfilests.push({name, lastModified});
      gfiles.push(file);
      
      !path && (path = (savedPaths.find(pth => pth.lms[name] != null) || {}).path);
    }
   
    if (path != null) document.getElementById(path).checked = true;
    else alert(`Нет соответствий с ранее выгруженными файлами. Проверь правильность пути для загрузки.`);
    
    updateForPathStamps();
    //uploadModified();
  }catch(e){alert(e.stack);}
}

const highlightModifiedFiles = () => {
  upSavedPaths();
  const files = fileInput.files;
  let newInnerHtml = '';
  const pathName = getPath();
  const {lms = {}, ts = 0, path = ''} = (savedPaths || []).find(pth => pth.path === pathName) || {};
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const {name, lastModified: lm, size, type} = file;
    
    const color = lms[name] == null
      ? 'red'
      : lms[name] < lm && size
        ? 'green'
        : 'grey';
    
    newInnerHtml += `<label class="block" style="color:${color}${size ? '' : ';text-decoration:line-through'}"><span class="path-stamp"></span><b>${name}</b></label>`;
  }
  
  preparesBlock.innerHTML = newInnerHtml;
}


fileInput.addEventListener('change', onChangeFileInput, false);
function onSendInputClick() {
  sentBlock.innerHTML = '';
  responseBlock.innerHTML = '';
  
  if (!forceInput.checked)
    uploadModified();
  else
    sendFiles();
};



downloadButton.onclick = () => {
  const href = downloadPath.value;
  const filename = (href.match(/([^\/]+?)$/) || [])[0];
  
  downloadAnchor.setAttribute('href', href);
  
  downloadAnchor.setAttribute('download', filename);
  alert(filename);
  //downloadAnchor.click();
  
  const url = new URL(location.href);
  url.searchParams.set('down', downloadPath.value);
  url.searchParams.set('token', btoa(prompt('token!', `${(Date.now() / 1000).toFixed(0)}:`)));
  
  downloadError.innerText = '';
  
  fetch(url.toString())
    .then(resp => resp.json())
    .then(resp => {
      if (resp.ok) {
        downloadAnchor.setAttribute('download', filename);
        downloadAnchor.setAttribute('href', resp.base64);
        downloadAnchor.click();
      } else {
        downloadError.innerText = resp.error;
        downloadError.onclick = () => {
          const auth = prompt('auth:', localStorage.auth || '');
          if (auth) localStorage.auth = auth;
        };
      }
    })
    .catch(error => downloadError.innerText = error.toString());
};

renderPaths();
}catch(e){alert(e);}
</script-->

<style>
body {
 font-size: 30px;
}

.block {
 display: block;
}

input[type="button"] {
 width: 45%;
 padding: 10px;
 margin: 15px 0;
}

input[type="radio"], input[type="checkbox"] {
 height: 2em;
 width: 3em;
}
</style>
</html>
<? } ?>

