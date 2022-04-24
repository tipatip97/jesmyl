try{
'use strict';

const ce = React.createElement;
const text = {
 title: 'Добрый наш Отец-Господь',
 created: 'создал нам',
 img: {
  format: 'jpg',
  style: 'classic',
  path: index => `./img/animals/${text.img.style}/${(text.animals[index] || text.animals[0]).name}.${text.img.format}`,
 },
 eyes: {
  classic: {
   s: 12500,
   x: .515,
   y: .13,
  },
 },
 animals: [
	 {
	  o: 1,
	  who: 'Курочка',
	  created: 'Курочку',
	  voice: 'по зёрнышкам: "Кудах-тах-тах"',
	  name: 'chicken',
	 },
	 {
	  o: 2,
	  who: 'Уточка',
	  created: 'Уточку',
	  voice: 'Да-да-да-да',
	  name: 'duck',
	 },
	 {
	  o: 3,
	  who: 'Индюшонок',
	  created: 'Индюшонка',
	  voice: 'Фалды-фалды',
	  name: 'ind',
	 },
	 {
	  o: 4,
	  who: 'Кисонька',
	  created: 'Кисоньку',
	  voice: 'Мяу-мяу',
	  name: 'cat',
	 },
	 {
	  o: 5,
	  who: 'Собачёнок',
	  created: 'Собачёнка',
	  voice: 'Вау-вау',
	  name: 'dog',
	 },
	 {
	  o: 6,
	  who: 'Поросёнок',
	  created: 'Поросёнка',
	  voice: 'Хрюки-хрюки',
	  name: 'pig',
	 },
	 {
	  o: 7,
	  who: 'Коровёнок',
	  created: 'Коровёнка',
	  voice: 'Муки-муки',
	  name: 'cow',
	 },
	 {
	  o: 8,
	  who: 'Жеребёнок',
	  created: 'Жеребёнка',
	  voice: 'Пруки-пруки',
	  name: 'horse',
	 },
	 {
	  o: 9,
	  who: 'Лягушонок',
	  created: 'Лягушонка',
	  voice: 'Кваки-кваки',
	  name: 'frog',
	 },
 ]
};



class App extends React.Component {
 constructor() {
  super();
  
  this.state = {
   focused: false,
   current: -1,
   line: null,
  };
 }
 
 focus() {
  this.hiddenInput.focus();
  this.setState({focused: true});
 }
 
 render() {
  const currentAnimal = text.animals[this.state.current];
  
  return ce(
   'div',
   {
    key: 'app.container',
    className: `app-container${this.state.focused ? ' focused' : ''} ${this.state.current === -1 ? ' app-title' : ''}${this.state.line != null ? ' line-mode' : ''}`,
    onClick: e => this.focus(),
   },
   ce(
    'input',
    {
     key: 'hidden.input',
     className: 'hidden-input',
     ref: el => el && (this.hiddenInput = el),
     onKeyDown: e => {
      
      const code = e.keyCode;
      const current = this.state.current;
      // document.title = `${code} ${current}`;
	  
	  const isPreventDef = false;
      
      if (code > 47 && code < 58) {
      
       this.setState({
        current: code - 49
       });
	   
	   isPreventDef = true;
       
      } else if (code === 13) { // enter
       
       if (this.state.line) {
        if (current === 0) {
	        if (this.state.line.length < text.animals.length) {
	         this.setState({
	          line: this.state.line.concat(1),
	          current: this.state.line.length,
	         });
	        } else if (this.state.line.length === text.animals.length) {
				
			 
			 const {s, x, y} = text.eyes[text.img.style];
			 
			 const w = window.innerWidth;
			 const h = window.innerHeight;
			 
	         this.setState({
	          chickenEye: {
               width: s,
			   height: s,
			   top: window.innerHeight / 2 - s * y,
			   left: window.innerWidth / 2 - s * x,
			  },
	         });
	         
	         setTimeout(() => this.setState({chickenEye: null, line: null, current: -1}), 1000);
	        }
        } else {
         this.setState({
          current: current - 1
         });
        }
       } else if (current < 0) {
        this.setState({
         line: [0],
         current: 0,
        });
       } else {
	       const newLine = [];
	       
	       for (let i = 0; i <= current; i++)
	        newLine.push(i);
	       
	       this.setState({
	        line: newLine,
	       });
       }
	   
	   isPreventDef = true;
      } else if (code === 27) { // esc
      
       this.setState({
        line: null,
       });
       
	   isPreventDef = true;
      } else if (code === 37 && current > -1) { // left
       
       if (current > 0)
        this.setState({
         current: current - 1
        });
       
	   isPreventDef = true;
      } else if (code === 39 && current < text.animals.length - 1) { // right
       
       if (!this.state.line || this.state.line.length - 1 > current)
        this.setState({
         current: current + 1
        });
       
	   isPreventDef = true;
      }
	  
	  if (isPreventDef) e.preventDefault();
     },
     onBlur: e => this.setState({focused: false}),
    }
   ),
   
   this.state.line && this.state.line.length - 1 > this.state.current? null : ce(
    'div',
    {
     key: 'title.text',
     className: 'title-text main-text',
    },
    ce(
     'div',
     {},
     text.title
    ),
    currentAnimal == null ? null : ce(
     'div',
     {},
     `${text.created} ${currentAnimal.created}.`
    )
   ),
   text.animals.map((animal, animali) => {
    const current = this.state.current;
    const position =
     current < 0 ? 'right hidden' :
     current - 1 === animali ? 'left' : 
     current === animali ? 'center' : 
     current + 1 === animali ?
      this.state.line && this.state.line.length > current + 1 ? 'right used' : 'right' :
     current > animali ? 'left hidden' :
     current < animali ? 'right hidden' :
      'hidden';
    
    const style = {
     backgroundImage: `url("${text.img.path(animali)}")`,
    };
    
    if (animali === 0 && this.state.chickenEye)
     for (const s in this.state.chickenEye)
      style[s] = this.state.chickenEye[s];
    
    return ce(
	    'div',
	    {
	     style,
	     className: `animal-img ${position}`,
	    }
    );
   }),
   currentAnimal == null ? null : ce(
    'div',
    {
     className: 'main-text voice-text',
    },
    currentAnimal.name === 'chicken' ? `${currentAnimal.who} ${currentAnimal.voice}` : `${currentAnimal.who}: "${currentAnimal.voice}"`
   )
  );
 }
}



function nam(total, current, id) {
 return [total, current, id].filter(t => t != null).join('.');
}


ReactDOM.render(ce(App), document.querySelector('div'));

}catch(e){alert(e.stack);}









