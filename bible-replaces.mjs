import file_system from 'fs';

const dir = 'b-books';

file_system.readdir(dir, (err, files) => {
  // const bibleBooks = JSON.parse(file_system.readFileSync('src/back/apps/bible/bible.json', 'utf8')).books;
  const apos = JSON.parse(file_system.readFileSync('src/back/apps/bible/bible-apo.json', 'utf8')).map(apo => apo.i);

  const chapters = [];
  if (files.length === 0) throw Error('b-books is empty');

  files.forEach((bookFileName, bookFileNamei) => {
    if (apos.includes(bookFileNamei)) return;
    const filePath = dir + '/' + bookFileName;

    const fileContent = file_system.readFileSync(filePath);
    const text = ('' + fileContent).replace(/\ufeff/g, '').replace(/\r\n/g, '\n');

    const chptrs = text
      .replace(/\s*=== Примечания ===.*$/s, '')
      .replace(/\s*=== Предисловие ===\n\n.*/, '')
      .replace(/^\n== .+? ==/, '')
      .trim()
      .replace(/\[\d+?\]/g, '')
      .replace(/ +/g, ' ')
      .replace(/--/g, '—')
      .split(/\s*=== \d+ ===\s*/)
      .filter(it => it)
      .map(chapt => chapt && chapt.split(/\n*\d+ */).filter(it => it))
      .map((chapt, chapti) => {
        let close = false;

        return chapti === 150
          ? ''
          : chapt
              .map(verse => {
                if (verse.includes('[_МОЛИТВА МАНАССИИ, ЦАРЯ ИУДЕЙСКОГО, ')) {
                  verse = verse.slice(0, verse.search(/\s*\[_МОЛИТВА МАНАССИИ, ЦАРЯ ИУДЕЙСКОГО, /));
                } else if (
                  verse === 'И скажет человек: [подлинно есть плод праведнику! итак есть Бог, судящий на земле!]'
                ) {
                  verse = verse.replace(/\[/, '«').replace(/\]/, '»');
                } else {
                  if (verse.search(/^\[[^[\]]+\]$/) > -1) return '';

                  if (close && verse.search(/\]/) > -1) {
                    if (close === true) {
                      close = false;
                      return '';
                    }
                    verse = verse.replace(/\]/, close);
                    close = false;
                  }

                  if (close === true) return '';

                  if (verse.search(/\[[^\]]+$/) > -1) {
                    if (verse.search(/^\[/) > -1) {
                      close = true;
                      return '';
                    }

                    if (verse.search(/\[него,_/) > -1) {
                      verse = verse.replace(/\[/, '');
                    } else if (verse.search(/: \[/) > -1) {
                      close = '»';
                      verse = verse.replace(/\[/, '«');
                    } else if (verse.search(/ \[/) > -1) {
                      close = ')';
                      verse = verse.replace(/\[/, '(');
                    }
                  }
                }

                return verse
                  .replace(/_ _/g, ' ')
                  .replace(
                    /((?<insBefore>^| )|(?<before>"|\(|\[))_(?<text>[^_]+)_((?<insAfter> |$)|(?<after>"|\)|,|\.|\?|\]|:))/g,
                    (...args) => {
                      const arg = args[args.length - 1];
                      // console.log(arg);
                      return (
                        (arg.before || '') +
                        '<insertedtext>' +
                        (arg.insBefore || '') +
                        arg.text +
                        (arg.insBefore ? '' : arg.insAfter || '') +
                        '</insertedtext>' +
                        (arg.insBefore ? arg.insAfter || '' : '') +
                        (arg.after || '')
                      );
                    },
                  )
                  .replace(/( )?\[/g, '<textinbrackets> [')
                  .replace(/\]/g, ']</textinbrackets>')
                  .replace(/(^| )"/g, '$1«')
                  .replace(/"/g, '»');
              })
              .filter(it => it);
      })
      .filter(it => it);

    chapters.push(chptrs);
  });

  file_system.writeFile('src/back/apps/bible/rst.json', JSON.stringify({ chapters }, null, 2), () => {});

  console.log(chapters.length);
});

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// const names = `Бытие, Быт
// Исход, Исх
// Левит, Лев
// Числа, Чис
// Второзаконие, Втор
// Иисус Навин, Нав
// Судьи, Суд
// Руфь, Руф
// 1-я Царств, 1Цар
// 2-я Царств, 2Цар
// 3-я Царств, 3Цар
// 4-я Царств, 4Цар
// 1-я Паралипоменон, 1Пар
// 2-я Паралипоменон, 2Пар
// Ездра, Ездр
// Неемия, Неем
// Есфирь, Есф
// Иов, Иов
// Псалтирь, Пс
// Притчи, Прит
// Екклесиаст, Еккл
// Песня песней, Песн
// Исаия, Ис
// Иеремия, Иер
// Плач Иеремии, Плач
// Иезекииль, Иез
// Даниил, Дан
// Осия, Ос
// Иоиль, Иоил
// Амос, Ам
// Авдий, Авд
// Иона, Ион
// Михей, Мих
// Наум, Наум
// Аввакум, Авв
// Софония, Соф
// Аггей, Агг
// Захария, Зах
// Малахия, Мал
// От Матфея, Мат
// От Марка, Мар
// От Луки, Лук
// От Иоанна, Ин
// Деяния, Деян
// Иакова, Иак
// 1-е Петра, 1Пет
// 2-е Петра, 2Пет
// 1-е Иоанна, 1Ин
// 2-е Иоанна, 2Ин
// 3-е Иоанна, 3Ин
// Иуды, Иуд
// К Римлянам, Рим
// 1-е Коринфянам, 1Кор
// 2-е Коринфянам, 2Кор
// К Галатам, Гал
// К Ефесянам, Еф
// К Филиппийцам, Флп
// К Колоссянам, Кол
// 1-е Фессалоникийцам, 1Фес
// 2-е Фессалоникийцам, 2Фес
// 1-е Тимофею, 1Тим
// 2-е Тимофею, 2Тим
// К Титу, Тит
// К Филимону, Флм
// К Евреям, Евр
// Откровение, Откр`
//   .split(/\s*\n\s*/)
//   .map(line => line.split(', '));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// import file_system from 'fs';

// file_system.readFile('src/back/apps/bible/bible.json', 'utf8', (err, text) => {
//   let books = JSON.parse('' + text.replace(/^\ufeff/g, '')).books;

//   // const chapters = [];

//   books.forEach((book, booki) => {
//     // delete book.s;
//     // book.titles = [book.title, ...book.shortTitles];
//     // delete book.title;
//     // delete book.shortTitles;
//     // chapters.push(book.chapters);
//     // delete book.chapters;
//     // delete book.titles1;
//     // book.titles = names[booki];
//   });

//   // file_system.writeFile('src/back/apps/bible/bible.json', JSON.stringify({ books }, null, 2), () => {});
// });

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// import file_system from 'fs';

// file_system.readFile('b.txt', 'utf8', (err, text) => {
//   // let books = JSON.parse('' + text.replace(/^\ufeff/g, '')).books;

//   const bibleBooks = JSON.parse(file_system.readFileSync('src/back/apps/bible/bible.json', 'utf8')).books;
//   const apos = JSON.parse(file_system.readFileSync('src/back/apps/bible/bible-apo.json', 'utf8')).map(apo =>
//     apo.n.replace(/\*/, '').trim().toLowerCase(),
//   );
//   // console.log(apos.map(apo => apo.n));

//   const texts = text
//     .replace(/\ufeff/g, '')
//     .replace(/\r\n/g, '\n')
//     .split(/(== [а-яё *()]+ ==)/gi);
//   // .filter(txt => txt.length < 100);

//   const chapters = [];

//   for (let texti = 1; texti < texts.length; texti += 2) {
//     const title = texts[texti].toLowerCase();

//     if (apos.some(apo => title.includes(apo))) {
//       console.log(title);
//       continue;
//     }
//     const chptrs = texts[texti + 1]
//       .split(/\s*=== \d+ ===\s*/)
//       .filter(it => it)
//       .map(chapt => chapt && chapt.split(/\n*\d+ */).filter(it => it));

//     chapters.push(chptrs);

//     // books.push({
//     //   title: title + `[${bibleBooks[books.length].titles[0]}]`,
//     //   chptrs,
//     // });
//   }

//   console.log(apos, chapters.map(book => book.title).length);

//   // const chapters = [];

//   // books.forEach((book, booki) => {
//   //   // delete book.s;
//   //   // book.titles = [book.title, ...book.shortTitles];
//   //   // delete book.title;
//   //   // delete book.shortTitles;
//   //   // chapters.push(book.chapters);
//   //   // delete book.chapters;
//   //   // delete book.titles1;
//   //   // book.titles = names[booki];
//   // });

//   file_system.writeFile('r.json', JSON.stringify({ chapters }, null, 2), () => {});
// });
