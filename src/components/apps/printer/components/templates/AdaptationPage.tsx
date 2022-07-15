import mylib from "../../../../../complect/my-lib/MyLib";
import QRCode from "../../../../../complect/qr-code/QRCode";

const name = "$name{{$name}{????????}}";
const place =
  "$switch{{$notes}{м1}{к рукомойникам}{м2}{под мост}{м3}{в столовую}{д1}{в общий зал}{???????????????????}}";

const text = `Привет, ${name}! Мы рады тебя приветствовать на нашем корабле.
Для обеспечения комфортного пребывания в круизе тебе необходимо пройти все пункты контроля.
Когда ты получишь допуск к путешествию, подходи на ${place} - там ты встретишь свою команду! 
Приятного путешествия!`;

export default function AdaptationPage({ bag }: { bag: any }) {
  const date = new Date();

  return (
    <div className="adaptation-page print-template-page full-container flex column ">
      <div>
        <div className="tpl-title">Допуск к путешествию</div>
        <div className="margin-big-gap-v white-pre-line">
          {mylib.stringTemplater(text, bag)}
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
      <div className="text-bold">
        Время начала - {date.getHours().toString().padStart(2, "0")}:
        {date.getMinutes().toString().padStart(2, "0")}:
        {date.getSeconds().toString().padStart(2, "0")}
      </div>
      <div className="text-bold">
        Время завершения/Подпись важатого - _______________ /
        ______________________
      </div>
    </div>
  );
}
