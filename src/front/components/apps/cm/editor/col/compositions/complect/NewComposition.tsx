import { useMemo, useState } from 'react';
import { CmMp3Rule } from '../../../../../../../models';
import EvaButton from '../../../../../../../complect/eva-icon/EvaButton';
import useExer from '../../../../../../../complect/exer/useExer';
import KeyboardInput from '../../../../../../../complect/keyboard/KeyboardInput';
import { RoutePhase } from '../../../../../../router/Router.model';
import { cmExer } from '../../../../Cm.store';
import useCmNav from '../../../../base/useCmNav';
import EditContainerCorrectsInformer from '../../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { useEditableCols } from '../../useEditableCols';
import { EditableCom } from '../EditableCom';
import ComAudio from './audio/ComAudio';
import ObserveUrlResource from './audio/ObserveUrlResource';

export default function NewComposition({ close }: { close: () => void }) {
  const { goTo } = useCmNav();
  const cols = useEditableCols();
  const { exec } = useExer(cmExer);
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [isTakeName, setIsTakeName] = useState(true);
  const [innerHTML, setInnerHTML] = useState('');
  const [mp3Rule, setMp3Rule] = useState<CmMp3Rule | und>();

  const com = useMemo(
    () => new EditableCom({ n: '', w: Date.now(), t: [], c: [], o: [] }, cols?.coms.length || -1).create(),
    [cols],
  );

  const setTextAsValue = (value: string) => {
    setValue(value);
    if (isTakeName) {
      const name = com.takeCorrectName(value);
      com.rename(name);
      setName(name);
    }
  };

  const goToRoute = (phase = 'texts', isRejectSave = true) => {
    goTo({ place: ['com', phase], data: { ccomw: com.wid } }, null, isRejectSave);
    close();
  };

  const publicate = (phase?: RoutePhase) => {
    if (cols?.addCom(com)) {
      com.publicate(() => goToRoute(phase, false));
      exec();
    }
  };

  return (
    <>
      <div className="full-container new-composition">
        <div className="title">Новая песня</div>

        <EditContainerCorrectsInformer className="full-width" corrects={com.col.corrects.name}>
          <div className="flex full-width">
            <span className="margin-gap-h">Название </span>
            <div className="full-width">
              <KeyboardInput
                className="full-width"
                value={name}
                onInput={() => setIsTakeName(false)}
                onChange={(value) => {
                  setName(com.correctName(value));
                  exec(com.rename(value, (correctName) => exec(correctName && setName(correctName))));
                }}
              />
            </div>
          </div>
        </EditContainerCorrectsInformer>
        <ObserveUrlResource
          availableWithTextQuery
          onSuccess={({ html, rule }) => {
            const div = document.createElement('div');
            div.innerHTML = html;
            setInnerHTML(html);
            setMp3Rule(rule);
            if (rule.textQuery) {
              const pre: HTMLPreElement | null = div.querySelector(rule.textQuery);
              if (pre) {
                if (rule.isHTML) setTextAsValue(pre.innerHTML.replace(/<(\/ ?)?br( ?\/)?>/g, '\n'));
                else setTextAsValue(pre.innerText);
              }
            }
          }}
        />
        <KeyboardInput
          value={value}
          className="text-heap-textarea full-width"
          multiline
          withoutCloseButton
          placeholder="Начни писать или вставь текст для создания песни"
          onChange={setTextAsValue}
        />
        {innerHTML && <ComAudio topCom={com} topHTML={innerHTML} topMp3Rule={mp3Rule} />}
        <EvaButton
          name="done-all-outline"
          className="parse-com-data-button pointer margin-big-gap"
          onClick={() => {
            publicate();
            com.parseBlocks(value);
            goToRoute();
          }}
        />
      </div>
    </>
  );
}
