import mylib from "../../../../../complect/my-lib/MyLib";
import QRCode from "../../../../../complect/qr-code/QRCode";

const text = `Привет, $name{{$name}{????????}}! Рады видеть тебя в рядах наших друзей!...
Для обеспечения комфортного путешествия тебе необходимо пройти все пункты контроля чтобы получить допуск к
 путешествию с нами. Пройдя QR-квест, тебе необходимо прийти $switch{{$notes}{м1}{к рукомойникам}{м2}{под мост}{м3}{в столовую}{???????????????????}}`;

export default function AdaptationPage({ bag }: { bag: any }) {
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
    </div>
  );
}
