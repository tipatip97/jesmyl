import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../store";
import useParanja from "../../base/useParanja";
import {
  riseUpComUpdate,
  setComFontSize,
  switchAnchorsVisible,
} from "../../Cm.store";
import useTranslation from "../../translation/useTranslation";
import { useCcol } from "../useCcol";

export default function ComTools() {
  const dispatch = useDispatch();
  const [ccom] = useCcol("com");
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );
  const { openTranslations } = useTranslation();
  const { closeParanja } = useParanja();

  if (!ccom) return null;
  return (
    <>
      <div className="item flex between">
        <EvaIcon name="music-outline" className="icon" />
        <div className="title">Тональность</div>
        <div className="action flex around pointer">
          <EvaIcon
            name="minus"
            onClick={() => {
              ccom.transpose(-1);
              dispatch(riseUpComUpdate());
            }}
          />
          <div
            onClick={() => {
              ccom.setChordsInitialTon();
              dispatch(riseUpComUpdate());
            }}
          >
            {ccom.firstChord}
          </div>
          <EvaIcon
            name="plus"
            onClick={() => {
              ccom.transpose(-1);
              dispatch(riseUpComUpdate());
            }}
          />
        </div>
      </div>
      <div className="item flex between">
        <EvaIcon name="text-outline" className="icon" />
        <div className="title">Размер шрифта</div>
        <div className="action flex around pointer">
          <EvaIcon
            name="minimize-outline"
            onClick={() => dispatch(setComFontSize(fontSize - 1))}
          />
          <div>{fontSize}</div>
          <EvaIcon
            name="maximize-outline"
            onClick={() => dispatch(setComFontSize(fontSize + 1))}
          />
        </div>
      </div>
      <div className="item flex between">
        <EvaIcon name="menu-outline" className="icon" />
        <div className="title">Cсылки</div>
        <div className="action flex around pointer">
          <div
            className="full"
            onClick={() => dispatch(switchAnchorsVisible())}
          >
            {!isAnchorsVisible ? "Показать" : "Скрыть"}
          </div>
        </div>
      </div>
      <div className="item flex between">
        <EvaIcon name="monitor-outline" className="icon" />
        <div className="title">Слайды</div>
        <div className="action flex around pointer">
          <div
            className="full"
            onClick={() => {
              openTranslations();
              closeParanja();
            }}
          >
            Транслировать
          </div>
        </div>
      </div>
    </>
  );
}
