try{

/*let bible = bibleText.replace(/Предисловие[\w\W]+?(?:Глава 1|Псалом 1)/g, '').split(/Глава 1(?!\d)|Псалом 1(?!\d)/);
let theBible = bible.map((bookText, bookTexti, bookTexta)=>{
 if(bookTexti === 0) return {
  n: '0',
  c: [],
  i: 0
 };
 const book = {};
 book.n = bookTexta[bookTexti - 1].trim().replace(/\[1 -.+/, ' *').match(/\n(.+)$/)[1];
 const bookname = bookTexta[bookTexti].trim().replace(/\[1 -.+/, ' *').match(/\n(.+)$/)[1];
 const pbookname = RegExp(`${(bookname || '').replace(/\* /, '\\*')}`);
 
 book.c = bookText.split(/Глава \d+|Псалом \d+/)
  .map(
   chapter =>
    chapter
     .trim()
     .replace(pbookname, '')
     .split(/\d+/)
     .map(bit => bit.trim())
     .slice(1)
  );
 book.i = bookTexti;
 return book;
}).slice(1);

mylib.setFDB({
 as: 'const',
 //parent: 'window',
 to: 'eval-scripts',
 value: theBible,
 name: 'theBible'
});*/


const theBible = @#["bible"];;

const ce = React.createElement;
const RC = React.Component;

const g = {
 lsNavName: `bible-nav-state__${location.href}`,
 state: {},
 bibleContext: {},
 textStock: {},
 some(arr){return arr.some((e, i, a)=> i ? a[0] === e : false);},
 getCurrentBooks(){
  return theBible.filter((book, booki) => this.state.nav.showApocriphs || !(/\*/.test(book.n)));
 },
 href: decodeURIComponent((location.href.match(/\/([^\/]*)\.\w*?(\?get)?$/) || [])[1] || ``)
};

g.state.nav = mylib.getLS(g.lsNavName) || {
 booki: 0,
 searchTerm: ``,
 chapteri: 0,
 showApocriphs: false,
 ctrlKey: false,
 fullScreen: false,
 style: {
  fontSize: '16px'
 }
}


class SearchPane extends RC {
 constructor() {
  super();
  g.searchContext = this;
  this.state = {
   searchTerm: (g.state.nav && g.state.nav.searchTerm) || ``
  };
 }
 render() {
  return ce(`input`, {
   value: this.state.searchTerm,
   style: {
    position: `absolute`,
    top: `7px`,
    right: `7px`
   },
   onInput: event => {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
   },
   onKeyUp: event => {
    if (event.keyCode === 13)
     g.bibleContext.changeState({searchTerm: event.target.value});
   }
  });
 }
}

class Bible extends RC {
 constructor(){
  super();
  g.bibleContext = this;
  this.state = g.state.nav;
 }
 changeState(state){
  this.setState(state, () => {
   mylib.setLS(g.lsNavName, this.state);
  });
  return state;
 }
 render() {
  const {chapteri, booki, searchTerm = ``} = this.state;
  let books = (g.getCurrentBooks() || []);
  let term;
  
  if (searchTerm) {
   term = RegExp(`(${searchTerm.replace(/([^a-zа-яё ])/ig, `\\$1?`).replace(/[её]/g, `[её]`).replace(/ /g, `[^a-zа-яё]+`)})`, `gi`);
   books = books.map((book, booki, booka) => {
    const bk = {};
    const chapters = book.c.map(chapter => {
     const bits = chapter.map(bit => {
      return term.test(bit) ? bit : null;
     });
     return bits.filter(bit => bit !== null).length ? bits : null;
    });
    bk.n = book.n;
    bk.c = chapters;
    return chapters.filter(chapter => chapter !== null).length ? bk : null;
   });
  }
  
  const currentBook = books[booki] || {};
  const chapters = currentBook.c || [];
  const currentChapter = chapters[chapteri] || 0;
  const bits = chapters.length ? currentChapter || [] : [];
  
  return ce(`div`, 
   {
    className: `bible-box`,
    onKeyUp: event => onBibleBoxKeyUp(event),
    onKeyDown: event => onBibleBoxKeyDown(event),
    style: {
     backgroundColor: `white`,
     padding: `10px 0`
    }
   },
   [
	  ce(`h2`, {},
	   `${currentBook.n}, ${this.state.chapteri + 1}`
	  ),
   ce(`div`,
	   {
	    className: `bible`
	   },
	   ce(`div`,
	    {
	     className: `books stock`
	    },
	    books.map((book, booki) =>
	     book === null ? null : ce(`div`,
	      {
	       id: `book-title-${booki}`,
	       className: `book-button button ${currentBook.n === book.n ? 'active' : ''}`,
	       onClick: event=> this.changeState({booki})
	      },
	      `${booki + 1} ${book.n}`
	     )
	    )
	   ),
	   ce(`div`,
	    {
	     className: `chapters stock`
	    },
	    chapters.map((chapter, chapteri)=>
	     chapter === null ? null : ce(`a`,
	      {
	       id: `chapter-title-${chapteri}`,
	       className: `chapter-button button ${this.state.chapteri === chapteri ? ' active' : ''}`,
	       onClick: event=> {
	        this.changeState({chapteri});
	        g.textStock.focus();
	       }
	      },
	      chapteri + 1
	     )
	    )
	   ),
	   ce(`div`,
	    {
	     className: `text stock`,
	     ref: ref => {
	      g.textStock = ref;
	      //ref && ref.scrollTo(0, this.state.scroll || 0);
	     },
	     style: this.state.style
	    },
	    ce(`div`, {},
	     bits.map((bit, biti) =>
	      bit === null ? null :
	       ce(`p`, {
	        onClick: event => g.searchContext.setState(this.changeState({searchTerm: ``, booki, chapteri})),
	        dangerouslySetInnerHTML: {__html: `${biti + 1}. ${searchTerm ? bit.replace(term, `<b style="background-color:yellow">$1</b>`) : bit}`}
	       }))
	    )
	   )
	  ),
	  ce(`h3`,
	   {
	    style: {
	     border: `green 1px solid`,
	     margin: `15px`,
	     padding: `5px`
	    }
	   },
	   `(${g.href}) ${currentBook.n}, ${this.state.chapteri + 1}. В книге глав: ${chapters.length}. В главе стихов: ${currentChapter.length}.`
	  )
 	])
 }
}


applicanter.register('bible', ce(`div`, {}, ce(SearchPane), ce(Bible)));
//ReactDOM.render(, document.querySelector('.application'));

const onBibleBoxKeyDown = event => {
 const {keyCode, ctrlKey, altKey, shiftKey} = event;
 const fullScreen = g.bibleContext.state.fullScreen;
 let state = {};
 
 if(ctrlKey && altKey) state = {ctrlKey};
 switch(keyCode){
  case 27: // esc
   if(fullScreen) state = consl({fullScreen: !fullScreen});
  break;
 }
 g.bibleContext.changeState(state);
}


const onBibleBoxKeyUp = event => {
 ([event.key, event.keyCode]);
 let state = {};
 const {keyCode, ctrlKey, altKey, shiftKey} = event;
 
 const books = g.getCurrentBooks();
 const lastBooki = books.length-1;
 const fullScreen = g.bibleContext.state.fullScreen;
 
 let booki = g.bibleContext.state.booki;
 let chapteri = g.bibleContext.state.chapteri;
 let book = g.getCurrentBooks()[booki];
 
 switch(keyCode) {
  case 32: // backspace
   if(book.c.length <= chapteri || ctrlKey) g.bibleContext.changeState({chapteri: 0});
  break;
  case 13: // enter
   const requestArea = ctrlKey ? document.body : g.textStock;
   if(fullScreen){
    document[mylib.takePref('CancelFullScreen')]();
   }else{
    requestArea[mylib.takePref('CancelFullScreen')]();
    
   }
   state = {fullScreen: !fullScreen};
  break;
  case 17: // ctrl key
   if(!altKey) g.bibleContext.changeState({ctrlKey: false});
  break;
  case 18: // alt key
   if(!ctrlKey) g.bibleContext.changeState({ctrlKey: false});
  break;
  case 107:case 109:
   const style = g.bibleContext.state.style;
   let fontSize = parseInt(style.fontSize) || 10;
   if(keyCode === 107) fontSize++;
   else if(keyCode === 109) fontSize--;
   style.fontSize = `${fontSize}px`;
   state = {style};
  break;
 
  case 38: // arr up
  case 40: // arr dw
   g.textStock.scrollBy(0, (ctrlKey ? 100 : 20) * (keyCode === 38 ? -1 : 1));
   break;
  case 37: // arr lf
  case 39: // arr rg
   const k = keyCode === 37 ? 1 : -1;
   if(ctrlKey){
    booki -= 
     booki === 0 && k === 1 ?
      -lastBooki :
      lastBooki === booki && k === -1 ?
       lastBooki : k;
    
    state = {booki};
   }else{
    chapteri = (chapteri || (k+1? 1 : 0)) - k;
    state = {chapteri}
   }
   
  break;
  case 35: // end
  case 36: // home
  
  break;
  case 34: // pgDw
  case 33: // pgUp
  break;
 }
 g.bibleContext.changeState(state);
}

} catch(e) {alert(e.stack);}