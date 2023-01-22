import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import QRCode from "../../../complect/qr-code/QRCode";
import * as versionNum from '../../../version.json';

const version = { ...versionNum };

export default function IndexAbout() {

  return (
    <div className="full-container flex center">
      <div
        className="flex custom-align-items column"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="padding-giant-gap">
          <QRCode text="https://t.me/jesmyl_space" />
          <div className="flex center">
            <EvaIcon name="telegram" />
            <a href="https://t.me/jesmyl_space">@jesmyl_space</a>
          </div>
        </div>
        <div className="padding-giant-gap">
          <QRCode text="https://t.me/danikpon" />
          <div className="flex center">
            <EvaIcon name="telegram" />
            <a href="https://t.me/danikpon">дизайн (3</a>
          </div>
        </div>
      </div>
      <div className="absolute pos-bottom padding-giant-gap">
        v{version.num}
      </div>
    </div>
  );
}
