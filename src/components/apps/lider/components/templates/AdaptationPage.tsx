import mylib from "../../../../../complect/my-lib/MyLib";
import QRCode from "../../../../../complect/qr-code/QRCode";
import Human from "../people/Human";

const name = "$name{{$name}{????????}}";
const place = "$isMan?{{к рукомойникам}{под мост}}";

const text = `Привет, ${name}! Мы рады тебя приветствовать на нашем корабле. \
Для обеспечения комфортного пребывания в круизе тебе необходимо пройти все пункты контроля. \
Когда ты получишь допуск к путешествию, подходи ${place} - там ты встретишь свою команду!
Приятного путешествия!`;

export default function AdaptationPage({ human }: { human: Human }) {
  return (
    <div className="adaptation-page print-template-page full-container flex column for-print break-inside-avoid">
      <div>
        <div className="tpl-title">Допуск к путешествию</div>
        <div className="margin-big-gap-v white-pre-line">
          {mylib.stringTemplater(text, human?.top)}
        </div>
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
      <div className="margin-big-gap">
        <QRCode text="беги к рукомойникам - там задание" />
      </div>
    </div>
  );
}
