import { MyLib } from 'front/utils';
import { useEffect, useState } from 'react';
import { CmMp3Rule } from 'shared/api';
import { makeRegExp } from 'shared/utils';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import IconButton from '../../../../../../../../complect/the-icon/IconButton';
import { IconGoogleStrokeRounded } from '../../../../../../../../complect/the-icon/icons/google';
import { IconHelpCircleStrokeRounded } from '../../../../../../../../complect/the-icon/icons/help-circle';
import { IconPlusSignCircleStrokeRounded } from '../../../../../../../../complect/the-icon/icons/plus-sign-circle';
import ComPlayer from '../../../../../col/com/player/ComPlayer';
import { EditableCom } from '../../com/EditableCom';
import { useEditableCcom } from '../../useEditableCcom';
import ObserveUrlResource from './ObserveUrlResource';

export default function ComAudio({
  topHTML,
  topCom,
  topMp3Rule,
}: {
  topHTML?: string;
  topCom?: EditableCom;
  topMp3Rule?: CmMp3Rule;
}) {
  const cEditableCom = useEditableCcom();
  const ccom = topCom ?? cEditableCom;

  const [innerHTML, setInnerHTML] = useState(topHTML);
  const [mp3Rule, setMp3Rule] = useState<CmMp3Rule | und>(topMp3Rule);
  const exec = useExerExec();
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
    if (innerHTML && mp3Rule) {
      setOpenAddBlock(true);
      const div = document.createElement('div');
      div.innerHTML = innerHTML;
      const { attr, query, url } = mp3Rule;
      updateHrefs(
        Array.from(div.querySelectorAll(query))
          .map(e => {
            let attrUrl: URL | und;
            let serverUrl: URL | und;
            const attribute = e.getAttribute(attr);
            if (url)
              try {
                serverUrl = new URL(url);
              } catch (e) {}

            if (attribute)
              try {
                attrUrl = new URL(attribute);
              } catch (e) {
                try {
                  attrUrl = new URL(url);
                  const [path, ...search] = attribute.split('?');
                  attrUrl.pathname = path;
                  if (search.length) attrUrl.search = search.join('?');
                } catch (e) {}
              }

            if (attrUrl && serverUrl) {
              serverUrl.pathname = attrUrl.pathname;
              serverUrl.search = attrUrl.search;

              return serverUrl.toString();
            }

            return '';
          })
          .filter(src => src),
      );
      div.remove();
    }
  }, [innerHTML, mp3Rule]);

  if (!ccom) return null;

  return (
    <>
      <h2>Прикреплённые аудио</h2>
      {audio ? (
        audio.split('\n').map((src, srci, srca) => {
          if (!src) return null;
          return (
            <div
              key={src}
              className="flex flex-gap margin-gap-v full-width"
            >
              <ComPlayer src={src} />
              <IconButton
                className="error-message"
                Icon={IconHelpCircleStrokeRounded}
                onClick={() => {
                  setAudioExec(srca.map((s, si) => (si !== srci ? s : '')).join('\n'));
                  const newRemoveds = { ...removedSrcs };
                  newRemoveds[srci] = src;
                  updateRemovedSrcs(newRemoveds);
                }}
              />
            </div>
          );
        })
      ) : (
        <div>Нет треков</div>
      )}
      {MyLib.entries(removedSrcs).length ? (
        <>
          <h2>Удалённые аудио</h2>
          {MyLib.entries(removedSrcs).map(([index, src]) => {
            if (!src) return null;
            return (
              <div
                key={src}
                className="flex flex-gap margin-gap-v full-width"
              >
                <ComPlayer src={src} />
                <IconPlusSignCircleStrokeRounded
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
            );
          })}
        </>
      ) : null}
      {openAddBlock ? (
        <>
          <h2>Добавить аудио</h2>
          {!topHTML && (
            <>
              <div>
                <span
                  className="children-middle pointer"
                  onClick={() => {
                    let max = 0;
                    ccom.texts?.forEach(text => (text.length > max ? (max = text.length) : 0));
                    const text = ccom.texts?.find(text => text.length === max);
                    if (text) {
                      const url = new URL('https://google.com/search');
                      url.searchParams.set('q', `${ccom.name} ${text.replace(makeRegExp('/\\n+/g'), ' ')}`);
                      window.open(url.toString());
                    }
                  }}
                >
                  Найти песню в гугл <IconGoogleStrokeRounded />
                </span>
              </div>
              <ObserveUrlResource
                onSuccess={({ html, rule }) => {
                  setInnerHTML(html);
                  setMp3Rule(rule);
                }}
              />
            </>
          )}
          {hrefs.map(src => {
            if (src && uniqs.indexOf(src) < 0) {
              uniqs.push(src);

              return (
                <div
                  key={src}
                  className="flex flex-gap margin-gap-v full-width"
                >
                  <ComPlayer src={src} />
                  <IconPlusSignCircleStrokeRounded
                    onClick={() => {
                      updateHrefs(hrefs.filter(href => href !== src));
                      setAudioExec(`${audio}\n${src}`);
                    }}
                  />
                </div>
              );
            }

            return null;
          })}
        </>
      ) : (
        <IconPlusSignCircleStrokeRounded
          className="color--ok margin-big-gap"
          onClick={() => setOpenAddBlock(true)}
        />
      )}
    </>
  );
}
