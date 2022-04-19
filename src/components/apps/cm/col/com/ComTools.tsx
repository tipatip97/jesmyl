import { useDispatch, useSelector } from "react-redux";
import useAbsolutePopup from "../../../../../complect/absolute-popup/useAbsolutePopup";
import EvaIcon from "../../../../../complect/eva-icon";
import { RootState } from "../../../../../shared/store";
import {
  riseUpComUpdate,
  setComFontSize,
  switchAnchorsVisible,
} from "../../Cm.store";
import useTranslation from "../../translation/useTranslation";
import { useCcom } from "../useCcol";

export default function ComTools() {
  const dispatch = useDispatch();
  const [ccom] = useCcom();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );
  const { openTranslations, isShowFullscreen } = useTranslation();
  const { closeAbsolutePopup } = useAbsolutePopup();

  if (!ccom) return null;
  return (
    <>
      <div className="abs-item">
        <EvaIcon name="music-outline" className="abs-icon" />
        <div className="title">Тональность</div>
        <div className="abs-action flex around pointer">
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
              ccom.transpose(1);
              dispatch(riseUpComUpdate());
            }}
          />
        </div>
      </div>
      <div className="abs-item">
        <EvaIcon name="format-text-variant-outline" className="abs-icon" />
        <div className="title">Размер шрифта</div>
        <div className="abs-action flex around pointer">
          <EvaIcon
            name="minus-outline"
            onClick={() => dispatch(setComFontSize(fontSize - 1))}
          />
          <div>{fontSize}</div>
          <EvaIcon
            name="plus-outline"
            onClick={() => dispatch(setComFontSize(fontSize + 1))}
          />
        </div>
      </div>
      <div
        className="abs-item abs-full"
        onClick={() => {
          openTranslations();
          closeAbsolutePopup();
        }}
      >
        <EvaIcon
          name={isShowFullscreen ? "play-outline" : "monitor-outline"}
          className="abs-icon"
        />
        <div className="title">Слайды</div>
        <div className="abs-action" />
      </div>
      <div
        className="abs-item abs-full"
        onClick={() => dispatch(switchAnchorsVisible())}
      >
        <EvaIcon name={isAnchorsVisible ? 'collapse' : 'expand'} className="abs-icon" />
        <div className="title">
          {isAnchorsVisible ? "Свернуть текст" : "Развернуть текст"}
        </div>
        <div className="abs-action" />
      </div>
    </>
  );
}
