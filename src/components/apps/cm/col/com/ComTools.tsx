import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../store";
import {
  riseUpComUpdate,
  setComFontSize,
  switchAnchorsVisible,
} from "../../Cm.store";
import useAbsolutePopup from "../../complect/absolute-popup/useAbsolutePopup";
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
    <div className="com-tools-popup flex column between">
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
        className="item full flex between"
        onClick={() => dispatch(switchAnchorsVisible())}
      >
        <EvaIcon name="format-text-variant-outline" className="icon" />
        <div className="title">
          {isAnchorsVisible ? "Свернуть текст" : "Развернуть текст"}
        </div>
        <div className="action" />
      </div>
      <div
        className="item full flex between"
        onClick={() => {
          openTranslations();
          closeAbsolutePopup();
        }}
      >
        <EvaIcon
          name={isShowFullscreen ? "play-outline" : "monitor-outline"}
          className="icon"
        />
        <div className="title">Слайды</div>
        <div className="action" />
      </div>
    </div>
  );
}
