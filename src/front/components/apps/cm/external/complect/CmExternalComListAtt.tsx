import { useState } from 'react';
import DebouncedSearchInput from '../../../../../complect/DebouncedSearchInput';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import StrongEvaButton from '../../../../../complect/strong-control/StrongEvaButton';
import { ChordVisibleVariant } from '../../Cm.model';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import ComFace from '../../col/com/face/ComFace';
import { CmComBindAttach } from '../cmExternalAttach';
import TheComForFullScreen from './TheComForFullScreen';

const itIt = (it: unknown) => it;

export default function CmExternalComListAtt({
  value,
  scope,
  isRedact,
  switchIsRedact,
}: {
  value: CmComBindAttach;
  scope: string;
  isRedact: boolean;
  switchIsRedact: (is?: boolean) => void;
}) {
  const [removedComws, setRemovedComws] = useState<number[]>([]);
  const [ccom, setCcom] = useState<Com | und>();
  const cat = useCcat(true);
  const [term, setTerm] = useState(cat?.term || '');

  const [comOrderNode, openComOrder] = useFullContent(() => {
    const comws = value.comws;
    const uniqRemovedComws = comws === undefined ? removedComws : removedComws.filter((comw) => !comws.includes(comw));

    return (
      <div className="margin-giant-gap-t">
        {comws?.map((comw, comwi) => {
          const com = cat?.coms.find((com) => com.wid === comw);

          if (com === undefined) return null;

          return (
            <ComFace
              key={comw}
              com={com}
              importantOnClick={() => {
                setCcom(com);
                showComposition();
              }}
              description={
                <div className="flex flex-gap">
                  {!comwi || (
                    <StrongEvaButton
                      scope={scope}
                      fieldName="listKey move"
                      fieldKey="comws"
                      fieldValue={{
                        find: ['.', '===', comw],
                        beforei: comwi - 1,
                      }}
                      cud="U"
                      name="swap"
                      className="color--3 margin-giant-gap-b rotate-90"
                    />
                  )}
                  <StrongEvaButton
                    scope={scope}
                    fieldName="listKey"
                    fieldKey="comws"
                    fieldValue={['.', '===', comw]}
                    cud="D"
                    name="trash-2-outline"
                    onSuccess={
                      removedComws.includes(comw) ? undefined : () => setRemovedComws((comws) => [...comws, comw])
                    }
                    className="color--ko"
                  />
                </div>
              }
            />
          );
        })}
        {!uniqRemovedComws.length || (
          <>
            <h2>Удалённые песни</h2>
            {uniqRemovedComws.map((comw) => {
              const com = cat?.coms.find((com) => com.wid === comw);

              return (
                com && (
                  <ComFace
                    key={com.wid}
                    com={com}
                    importantOnClick={() => {
                      setCcom(com);
                      showComposition();
                    }}
                    description={
                      <StrongEvaButton
                        scope={scope}
                        fieldName="listKey"
                        fieldKey="comws"
                        fieldValue={comw}
                        cud="C"
                        name="undo-outline"
                        className="color--ok"
                        onSuccess={
                          removedComws.includes(comw) ? undefined : () => setRemovedComws((comws) => [...comws, comw])
                        }
                      />
                    }
                  />
                )
              );
            })}
          </>
        )}
      </div>
    );
  });
  const [selectorNode] = useFullContent(
    () => {
      return (
        <div className="flex column full-height">
          <EvaButton
            name="sync"
            className="margin-big-gap-v"
            postfix="Порядок песен"
            disabled={!value.comws || value.comws.length < 2}
            onClick={() => openComOrder()}
          />
          {cat && (
            <>
              <DebouncedSearchInput
                placeholder="Поиск песен"
                className="debounced-searcher round-styled margin-gap-v"
                initialTerm={term}
                onSearch={(term) => cat.search(term)}
                debounce={500}
                onTermChange={(term) => setTerm(term)}
              />
              <div className="margin-gap-t full-height full-width over-y-auto">
                {cat.wraps.map((wrap) => {
                  const isIncludes = value.comws?.includes(wrap.com.wid);

                  return (
                    <ComFace
                      key={wrap.com.wid}
                      {...wrap}
                      importantOnClick={() => {
                        setCcom(wrap.com);
                        showComposition();
                      }}
                      description={
                        isIncludes ? (
                          <StrongEvaButton
                            scope={scope}
                            fieldName="listKey"
                            fieldKey="comws"
                            fieldValue={['.', '===', wrap.com.wid]}
                            cud="D"
                            name="minus-square-outline"
                            className="color--ko"
                          />
                        ) : (
                          <StrongEvaButton
                            scope={scope}
                            fieldName="listKey"
                            fieldKey="comws"
                            fieldValue={wrap.com.wid}
                            cud="C"
                            name="plus-circle-outline"
                          />
                        )
                      }
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      );
    },
    isRedact ? 'open' : null,
    switchIsRedact,
  );

  const [compositionNode, showComposition] = useFullContent(() => {
    return (
      <TheComForFullScreen
        com={ccom}
        chordVisibleVariant={ChordVisibleVariant.Maximal}
        comList={[
          ...((cat && value.comws?.map((comw) => cat.coms.find((com) => com.wid === comw)!).filter(itIt)) ?? []),
        ]}
        onComSet={setCcom}
      />
    );
  });

  return (
    <>
      {comOrderNode}
      {selectorNode}
      {compositionNode}
      {!value.comws?.length && <div>Песен нет</div>}
      {value.comws?.map((comw) => {
        const com = cat?.coms.find((com) => com.wid === comw);
        if (com === undefined) return null;

        return (
          <ComFace
            key={comw}
            com={com}
            importantOnClick={() => {
              setCcom(com);
              showComposition();
            }}
          />
        );
      })}
    </>
  );
}
