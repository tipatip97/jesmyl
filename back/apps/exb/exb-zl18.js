try{
const ce = React.createElement;
mylib.loadAuth();
const g = {
 context: {}
};

const px = n => `${n}px`;
const em = n => `${n}em`;
const per = n => `${n}%`;
const _auto = `auto`;
const _zauto = `0 auto`;

const _black = `#4a575c`;
const _red = `#933a3a`;
const _pink = `#f47d73`;
const _bgrey = `#e9e7eb`;
const _grey = `#666666`;
const _lgrey = `#f5f3f8`;

const _texts = px(21);

const jo = (all = [], by = ` `) => all.join(by);

const rgba = (r, g, b, a = 1) => `rgba(${r},${g},${b},${a})`;

const mborder = 15;
const wlw = 700;
const lw = wlw - mborder * 2;
const mmheight = 1000;

const srcpath = n => /****:999:`https://jesmyl.space/src/hmzl-19/${n}`****/`../../src/hmzl-19/${n}`/****:999;****/;
const srcimgpath = n => srcpath(`img/${n}`);

const sli = (slis = []) =>
 slis.reduce((prev, curr) => {
  for (const i in curr) prev[i] = curr[i];
  return prev;
 }, {});
 
const pos = {
 abs: (top, left, right, bottom) => ({position: `absolute`, top, left, right, bottom}),
 rel: (top, left, right, bottom) => ({position: `relative`, top, left, right, bottom})
};
const bgc = (backgroundColor) => ({backgroundColor});

const und = undefined;

class Ball extends React.Component {
 constructor(props) {
  super(props);
  g.context.Body = this;
  this.state = {};
 }
 render() {
  return ce(
        `div`,
        {
         style: sli([
          pos.abs(und, this.props.l ? px(this.props.l) : und, this.props.r ? px(this.props.r) : und),
          {
           height: px(this.props.y),
           borderLeft: jo([`solid`, _black, px(1)])
          }
         ])
        },
        ce(
         `img`,
         {
          src: srcimgpath(`bauble${this.props.n}.png`),
          style: sli([
           pos.abs(und, px(-this.props.w / 2 -.5), und),
           {
            bottom: px(-this.props.w),
            width: px(this.props.w),
           }
          ])
         }
        )
       );
 }
}


class Body extends React.Component {
 constructor(props) {
  super(props);
  g.context.Body = this;
  this.state = {};
 }
 render() {
  
  return [
   ce(
    `div`,
    {
     ref: el => {
      if (this.box == null) {
       this.forceUpdate();
       this.box = el;
      }
     },
     style: {
      
     }
    },
    [
     ce(
      `style`,
      {},
      `a{color:${_red};text-decoration:none;}`
     ),
     ce(
      `div`,
      {
       key: `main`,
       style: sli([
        pos.rel(),
        bgc(_lgrey),
        {
         fontFamily: `monospace`,
         width: px(lw),
         margin: _auto,
         border: jo([px(mborder), _pink, `solid`]),
         minHeight: px(mmheight)
        }
       ])
      },
      [
       /*ce(Ball,
        {
         l: 70,
         y: 90,
         w: 50,
         n: ``
        }
       ),
       
       ce(Ball,
        {
         l: 130,
         y: 140,
         w: 70,
         n: `_1`
        }
       ),
       
       ce(Ball,
        {
         r: 140,
         y: 70,
         w: 90,
         n: `_2`
        }
       ),
       
       ce(Ball,
        {
         r: 60,
         y: 140,
         w: 60,
         n: `_3`
        }
       ),
       
       
       ce(
        `img`,
        {
         src: srcimgpath(`венок.jpg`),
         style: sli([
          {
           display: `block`,
           margin: _zauto,
           width: per(50),
          }
         ])
        }
       ),
     
       ce(
        `b`,
        {
         style: sli([
          {
           display: `block`,
           margin: jo([px(40), _auto, px(20), _auto]),
           whiteSpace: `nowrap`,
           textAlign: `center`,
           fontSize: _texts,
           color: _black,
          }
         ])
        },
        `2 - 5 ЯНВАРЯ`
       ),*/
       ce(
        `img`,
        {
         src: srcimgpath(`_cwc.png`),
         style: sli([
          {
           display: `block`,
           margin: _zauto,
           width: per(50),
          }
         ])
        }
       ),
     
       ce(
        `b`,
        {
         style: sli([
          {
           display: `block`,
           margin: jo([px(25), _auto]),
           textAlign: `center`,
           fontSize: px(33),
           color: _red,
         
          }
         ])
        },
        `"ЕВАНГЕЛИЕ БЛАГОДАТИ БОЖЬЕЙ"`
       ),
     
       ce(
        `div`,
        {
         src: srcimgpath(`christmas-ring.jpg`),
         style: sli([
          {
           display: `block`,
           margin: jo([0, _auto, px(35), _auto]),
           textAlign: `center`,
           fontSize: px(14.4),
           color: rgba(90, 90, 90),
           lineHeight: em(1.2),
           width: per(83)
          }
         ])
        },
        [
         `"Но я ни на что не взираю и не дорожу своею жизнью, только бы с радостью совершить поприще мое и служение, которое я принял от Господа Иисуса, проповедать Евангелие благодати Божией."`,
         ce(`div`, {}, `Деян 20:24`)
        ]
       ),
     ce(
      Info,
      {
       img: srcimgpath(`treskin.jpg`),
       content: [
        ce(
         `div`,
         {
          style: {
           color: _black,
           fontSize: _texts
          }
         },
         `ПРОПОВЕДНИК:`
        ),
        ce(
         `div`,
         {
          style: {
           // paddingTop: jo([px(7)]),
           display: `inline-block`,
           lineHeight: em(1.2),
           color: `black`,
           fontSize: px(28),
           borderBottom: jo([`solid black`, px(2)])
          }
         },
         `Владислав Трескин`
        ),
        ce(
         `div`,
         {
          style: {
           paddingTop: px(12),
           // lineHeight: em(3.3),
           color: _black,
           fontSize: px(12.2),
          }
         },
         `Пастор Новомосковской Библейской Церкви`
        ),
       ]
      }
     ),
     ce(
      Info,
      {
       icon: srcimgpath(`calendar.png`),
       content: ce(
        `div`,
        {
         style: {
          fontSize: _texts,
          color: _black,
         }
        },
        `2-5 января`
       )
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`vk.png`),
       content: [
        ce(`div`, {
         style: {
          display: `inline-block`,
          fontSize: _texts,
          color: _black,
          lineHeight: em(1.2),
         }
        }, `Наша страница`),
        ce(
        `a`,
        {
         target: `_blank`,
         href: `https://vk.com/zimniylager`,
         style: {
          color: _red,
          display: `inline-block`,
          fontSize: _texts,
          lineHeight: em(1.2),
         }
        },
        `vk.com/zimniylager`//.toUpperCase()
       )
       ]
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`edit.png`),
       content: ce(
        `a`,
        {
         target: `_blank`,
         href: `https://docs.google.com/forms/d/e/1FAIpQLSe-fCnZf7p1tZFyTgg7kk6r8Yf8Cmvh6qZOx_3JEHevgBX64w/viewform`,
         style: {
          color: _red,
          display: `inline-block`,
          fontSize: _texts,
          // marginTop: px(40),
          lineHeight: em(1.2),
         }
        },
        `Регистрация`
       )
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`map-location.png`),
       content: ce(
        `div`,
        {
         style: {
          fontSize: _texts,
         }
        },
        `Симферополь, Русская 38в`
       )
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`contact.png`),
       content: ce(
        `div`,
        {
         style: {
          fontSize: _texts,
         }
        },
        [
         ce(`div`, {}, `Слободской Егор:`),
         ce(`div`, {},
          [
           `+79781040256, `,
           ce(
            `a`,
            {
             target: `_blank`,
             style: {
              color: _red,
             },
             href: `https://vk.com/egoreast`
            },
            `VK`
           ),
          ]
         ),
         
        ]
       )
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`ruble.png`),
       content: ce(
        `div`,
        {
         style: {
          fontSize: px(17),
         }
        },
        [
         ce(`div`, {}, `1500р. - до 1 января`),
         ce(`div`, {}, `1700р. - с 1 января`),
         
         // ce(`div`, {}, `1500р. - до 25 декабря`),
         // ce(`div`, {}, `1700р. - с 26 декабря`),
         
         // ce(`div`, {}, `500р. - на один день (заранее)`),
         // ce(`div`, {}, `600р. - по факту`),
         // ce(`div`, {}, `200р. - без питания (заранее)`),
         // ce(`div`, {}, `250р. - по факту`),
         ce(`div`, {}, `Каток - отдельно`),
        ]
       )
      }
     ),
     
     ce(
      Info,
      {
       icon: srcimgpath(`list.png`),
       content: ce(
        `div`,
        {
         style: {
          fontSize: px(20),
         }
        },
        [
         order.split(`\n`)
         .map((line, linei)=> {
          const isHead = /\d\d\.\d\d/.test(line);
          
          return ce(`div`, {
           style: sli([
            {
             fontSize: px(15)
            },
            isHead ? {
             fontWeight: `bold`,
             marginTop: linei ? px(10) : und,
             fontSize: px(17)
            } : und,
           ])
          }, line);
         })
        ]
       )
      }
     ),
    ]
   ),/****:50:****/
   ce(
    `div`,
    {
     style: sli([
      //bgc(_red),
      {
       width: lw,
       margin: _auto,
       padding: mborder,
      }
     ])
    },
    `! Данное письмо не пригодно
     для пересылки другим пользователям.
     Если вы желаете поделиться данной
     информацией с другими, то, пожалуйста,
     отправьте мне ответное письмо
     со списком e-mail адресов получателей.`
   )/****:50;****/
   ]),/****:50:****/
   this.box ?
    [
     ce(
      `input`,
      {
       value: this.box.outerHTML,
       ref: el => el && el.select(),
       onFocus: event => event.target.select()
      }
     ),
     ce(
      `button`,
      {
       onClick: ev => this.forceUpdate()
      },
      `обновить`
     )
    ] : null/****:50;****/
  ];
 }
}



class Info extends React.Component {
 constructor(props) {
  super(props);
  g.context.Index = this;
  this.state = {};
 }
 render() {
  return ce(
   `div`,
   {
    style: {
     margin: jo([px(20), _auto]),
     width: per(70),
    }
   },
   [
    ce(
     `div`,
     {
      style: sli([
       bgc(_bgrey),
       {
        display: `flex`
       }
      ])
     },
     [
      ce(
       `div`,
       {
        style: sli([
         {
          padding: px(10),
          borderRight: jo([`solid`, _grey, px(1.5)])
         }
        ])
       },
       ce(
        `div`,
        {
         style: {
          display: `flex`,
          border: jo([`solid`, px(2), _grey]),
          borderRadius: per(50),
          overflow: `hidden`,
          width: px(100),
          height: px(100),
         }
        },
        ce(
         `img`,
         {
          src: this.props.img || this.props.icon,
          style: {
           alignSelf: `center`,
           display: `block`,
           margin: _auto,
           width: this.props.img ? px(100) : px(55),
          }
         }
        ),
       )
      ),
      ce(
       `div`,
       {
        style: {
         display: `flex`,
         padding: px(7),
         color: _black,
        }
       },
       ce(
        `div`,
        {
         style: {
          alignSelf: `center`,
         }
        },
        this.props.content
       )
      ),
     ]
    )
   ]
  );
 }
}

const order = `02.01
16:00 Регистрация
17:00 Ужин
18:00 Сессия 1
20:00 Малая группа / Снек
21:30 Расселение

03.01
09:00 Завтрак
09:30 Выезд на каток
10:30 Каток
11:30 Парк, прогулка и фото
14:00 Обед
15:00 Сессия 2
16:30 Перерыв
17:00 Сессия 3
18:00 Ужин
19:00 Сессия 4
20:00 Малая группа / Снек
21:30 Разъезд

04.01
09:00 Завтрак
10:00 Сессия 5
11:30 Перерыв 
12:00 Сессия 6
13:00 Обед
14:00 Выезд. Спорт или Посещения
18:00 Ужин
19:00 Малая группа / Снек
21:00 Разъезд

05.01
09:00 Завтрак
10:00 Вопросы-ответы
11:00 Перерыв
11:30 Вопросы-ответы
12:30 Молитва / Совместное Фото
13:00 Обед
14:00 Разъезд`;

`Сегодня на областном совете:
- разбирали текст, где говорится, что надо быть слугой другому и перед Богом ни у кого нет никаких особенных привелегий
- есть предложение провести летний лагерь совместно с "тем" объединением
- предложили провести совместную весеннюю конференцию в январе
- зимний лагерь, возможно, будет не совместный:
* Будет, скорее всего, Влад Трескин
* Братья хотят подарить каждому, кто будет зарегистрирован в лагере подарить три книги.
* Даты: 2 (с вечера)-5 (до обеда) января
* Цена: 1500₽- до 1 января, 1700₽- после 1 января. За спорт- отдельно. Если на один день- 500₽ (если заранее), по 600₽- если как приехал и хочет на один день. Если без питания- 200₽ (заранее), 250₽ (сегодня пришёл)
* Спорт: футбол, волейбол (залы отдельно)
* Обязанности:
Кофе зона (платная)- организация и кухня- Виталик (Повар- Картушина И.А.)
Столовая- Макс
Кофе брейк- Рома Фирсов
Расселение- Лёша
Украшения- Паша Слободской
За спорт
(Футбол (Миша Старчков), волейбол (Руслан)- 3 января.
Каток- 4 января- Лёша
Досуг, после катка- Руслан)
Регистрация- Егор
Сделать Форму для регистрации- Сергей
Музыка- Паша Каракуц
Физ. ответственный (расстановка)- Даник Толмачёв
Атрибутика- Дима
Организовать браслеты с талонами- Егор
Папка с набором (Наклейки с темой лагеря, Расписание, Блокнот с ручкой)- Егор
Малые группы- Саша Кузин
Ведущие: 
2.01- Сергей
3.01- Артём Джамолов
4.01- Руслан
5.01- Дима Дегтярёв (Денис Ружицкий)
Медиа- Даник Пономаренко (новости-не надо. Просто фото, видео)
Бланк-разрешение для несовершеннолетних- Как ссылка в форме- Сергей Кузин
Подготовить Партенитское выступление- Илья`

ReactDOM.render(ce(Body), document.querySelector(`.application`));
}catch(e){alert(e.stack);}
