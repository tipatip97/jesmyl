import mylib from "../../../../../complect/my-lib/MyLib";
import RandomTwiceName from "../RandomTwiseName";

const points = [
  "Ведёрко",
  "Фруктолов",
  "Паутина",
  "Стрелок",
  "Арнольд",
  "Канц товарищ",
  "Золушка",
  "Поплавочек",
  "Мемори",
  "Сантехник",
];

const pointsNet = mylib.netFromLine(points, 2, (item) => item);

export default function FortBayardPassport() {
  return (
    <div className="fort-passport print-template-page full-container flex column">
      <div>
        <div className="tpl-title">Форт Баярд</div>
        <div className="tpl-subtitle margin-gap">
          Паспорт команды "<RandomTwiceName canChange />"
        </div>
        <div className="table-wrapper">
          <div className="table">
            {pointsNet.map((row, rowi) => {
              return (
                <div key={`rowi-${rowi}`} className="row">
                  {row.map((cell, celli) => {
                    return (
                      <div key={`celli-${celli}`} className="cell">
                        {cell}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
