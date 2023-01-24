import { useEffect, useState } from "react";
import EvaButton from "../../../../../../../complect/eva-icon/EvaButton";
import useExer from "../../../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../../../complect/keyboard/useKeyboard";
import { MyLib } from "../../../../../../../complect/my-lib/MyLib";
import { cmExer } from "../../../../Cm.store";
import { EditableCom } from "../EditableCom";
import { useEditableCcom } from "../useEditableCcom";

export default function ComAudio({ topHTML, topCom }: { topHTML?: string, topCom?: EditableCom }) {
  const cEditableCom = useEditableCcom();
  const audioInput = useKeyboard()('audio-add Input', {
    placeholder: 'и вставь сюда',
    onPaste: (value) => setInnerHTML(value),
  });
  const ccom = topCom ?? cEditableCom;

  const [innerHTML, setInnerHTML] = useState(topHTML);
  const { exec } = useExer(cmExer);
  const [hrefs, updateHrefs] = useState<(string | null)[]>([]);
  const [audio, setAudio] = useState(ccom?.audio || '');
  const [openAddBlock, setOpenAddBlock] = useState(false);
  const uniqs: (string | null)[] = [];
  const [removedSrcs, updateRemovedSrcs] = useState<Record<string, string>>({});
  const setAudioExec = (audio: string) => {
    setAudio(audio);
    ccom?.setAudio(audio);
    exec();
  };

  useEffect(() => {
    if (innerHTML) {
      setOpenAddBlock(true);
      const div = document.createElement('div');
      div.innerHTML = innerHTML;
      const attributeName = 'data-audio-file';
      updateHrefs(Array.from(div.querySelectorAll(`[${attributeName}]`)).map((e) => {
        return `https://holychords.pro${e.getAttribute(attributeName)}`;
      }));
      div.remove();
    }
  }, [innerHTML]);

  if (!ccom) return null;

  return (
    <>
      <h2>Прикреплённые аудио</h2>
      {audio
        ? audio.split('\n').map((src, srci, srca) => {
          if (!src) return null;
          return <div key={src} className="flex flex-gap">
            <audio controls src={src} />
            <EvaButton
              className="error-message"
              name="close-circle-outline"
              onClick={() => {
                setAudioExec(srca.map((s, si) => si !== srci ? s : '').join('\n'));
                const newRemoveds = { ...removedSrcs };
                newRemoveds[srci] = src;
                updateRemovedSrcs(newRemoveds);
              }}
            />
          </div>
        })
        : <div>Нет треков</div>}
      {MyLib.entries(removedSrcs).length ? <>
        <h2>Удалённые аудио</h2>
        {MyLib.entries(removedSrcs).map(([index, src]) => {
          if (!src) return null;
          return <div key={src} className="flex flex-gap">
            <audio controls src={src} />
            <EvaButton
              name="plus-circle"
              onClick={() => {
                const srcs = audio.split('\n');
                srcs[+index] = src;
                setAudioExec(srcs.join('\n'));
                const newRemoveds = { ...removedSrcs };
                delete newRemoveds[index];
                updateRemovedSrcs(newRemoveds);
              }}
            />
          </div>
        })}</> : null}
      {
        openAddBlock
          ? <>
            <h2>Добавить аудио</h2>
            {!topHTML && <>
              Зайди на необходимую страницу, открой HTML-код страницы (CTRL + U), скопируй всё,
              <div className="half-width">{audioInput.node}</div>
            </>}
            {hrefs.map((src) => {
              if (src && uniqs.indexOf(src) < 0) {
                uniqs.push(src);

                return <div key={src} className="flex flex-gap">
                  <audio controls src={src} />
                  <EvaButton
                    name="plus-circle"
                    onClick={() => {
                      updateHrefs(hrefs.filter((href) => href !== src));
                      setAudioExec(`${audio}\n${src}`);
                    }}
                  />
                </div>
              }

              return null;
            })}
          </>
          : <EvaButton
            name="plus-circle"
            className="--color--ok margin-big-gap"
            onClick={() => setOpenAddBlock(true)}
          />
      }
    </>
  );
}
