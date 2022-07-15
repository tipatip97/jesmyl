import QRCode from "../../../../../complect/qr-code/QRCode";

const qrsList = [
  "на туалете лист. оставь там смайлик",
  "намочи ногу в речке",
  "найди дерево с QR",
  "на сцене сфоткайся с двоими",
  "найди домик с заданием",
  "скриви самую смешную рожицу",
  "сфоткай отражение в зеркале",
  "отожмись 5 раз на волейбольном поле",
  "видео на качеле",
  "селфи с поваром",
  "видео на качеле",
  "селфи с поваром",
  "видео на качеле",
  "селфи с поваром",
  "видео на качеле",
  "селфи с поваром",
];

const qrs: string[][] = [];

for (let i = 0; i < qrsList.length; ) {
  const qrBox: string[] = [];
  qrs.push(qrBox);

  for (let j = 0; j < 3; j++, i++) {
    qrBox.push(qrsList[i]);
  }
}

export default function AdaptationQRs() {
  const countRowsOnPage = 4;
  
  return (
    <div className="print-template-page full-container flex column">
      <div className="full-width">
        {qrs.map((row, rowi) => {
          return (
            <div
              key={`row-${rowi}`}
              className={`flex around full-width ${
                !((rowi % countRowsOnPage) - countRowsOnPage + 1)
                  ? "page-break-after-always"
                  : ""
              }`}
            >
              {row.map((text, texti) => {
                return text ? (
                  <QRCode
                    key={`text-${texti}`}
                    className="simple-border full-width"
                    text={text}
                  />
                ) : (
                  <div key={`text-${texti}`} className="full-width" />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
