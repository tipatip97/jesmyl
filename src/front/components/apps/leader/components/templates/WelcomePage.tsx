import { MyLib, mylib } from 'front/utils';
import PrintableTemplate from './PrintableTemplate';

const name = '$name{{$name}{????????}}';
const place = '$initQrPointTarget?{{$initQrPointTarget}{?????????????????}}';

const text = `Привет, ${name}! Мы рады тебя приветствовать на нашем корабле. \
Для обеспечения комфортного пребывания в круизе тебе необходимо пройти все пункты контроля. \
Когда ты получишь допуск к путешествию (соберёшь все подписи), подходи ${place} - там найди задание!
Приятного путешествия!`;

export default function WelcomePage({ bag }: { bag: Record<string, unknown> }) {
  return (
    <PrintableTemplate
      noder={
        <div className="full-width full-height padding-giant-gap">
          <div className="tpl-title">Допуск к путешествию</div>
          <div className="margin-big-gap-v white-pre-line">{mylib.stringTemplater(text, bag)}</div>
          <div className="table-wrapper">
            <div className="table">
              <div className="row">
                <div className="cell">Регистрация</div>
                <div className="cell">Таможня</div>
              </div>
              <div className="row">
                <div className="cell">Фейс контроль</div>
                <div className="cell">Мед. осмотр</div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
