import RandomTwiceName from "../RandomTwiseName";

export default function FortBayardPassport() {
  return (
    <div className="fort-passport print-template-page full-container flex column">
      <div>
        <div className="tpl-title">Форт Баярд</div>
        <div className="tpl-subtitle margin-gap">
          Паспорт команды "<RandomTwiceName />"
        </div>
        <div className="table-wrapper">
          <div className="table">
            <div className="row">
              <div className="cell">Ведёрко</div>
              <div className="cell">Фруктолов</div>
            </div>
            <div className="row">
              <div className="cell">Паутина</div>
              <div className="cell">Стрелок</div>
            </div>
            <div className="row">
              <div className="cell">Арнольд</div>
              <div className="cell">Канц товарищ</div>
            </div>
            <div className="row">
              <div className="cell">Золушка</div>
              <div className="cell">Поплавочек</div>
            </div>
            <div className="row">
              <div className="cell">Мемори</div>
              <div className="cell">Сантехник</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
