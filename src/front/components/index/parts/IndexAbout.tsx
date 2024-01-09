import EvaIcon from '../../../complect/eva-icon/EvaIcon';
import QRCode from '../../../complect/qr-code/QRCode';
import * as versionNum from '../../../../back/+version.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/store';

const version = { ...versionNum };
const appVersionSelector = (state: RootState) => state.index.appVersion;

export default function IndexAbout() {
  const appVersion = useSelector(appVersionSelector);

  return (
    <div className="flex center">
      <div
        className="flex custom-align-items column"
        onClick={event => event.stopPropagation()}
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
      <div
        className={`absolute pos-bottom padding-giant-gap ${
          appVersion ? (version.num !== appVersion ? 'color--ko' : 'color--7') : ''
        }`}
      >
        v{version.num} {appVersion ? (version.num === appVersion ? '- Актуальная' : `(Новая - v${appVersion})`) : ''}
      </div>
    </div>
  );
}
