import { useState } from 'react';
import StrongEvaButton from '../../../../../complect/strong-control/StrongEvaButton';
import { IconArrowDataTransferVerticalStrokeRounded } from '../../../../../complect/the-icon/icons/arrow-data-transfer-vertical';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import { IconLinkBackwardStrokeRounded } from '../../../../../complect/the-icon/icons/link-backward';
import { CmComBindAttach } from '../../../../../models';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import { ComFace } from '../../col/com/face/ComFace';

interface Props {
  value: CmComBindAttach;
  scope: string;
  setCcom: (com: Com) => void;
}

const emptyFunc = () => {};

export default function CmExternalComListAttRedactListOrder({ value, scope, setCcom }: Props) {
  const [removedComws, setRemovedComws] = useState<number[]>([]);
  const cat = useCcat(true);

  const comws = value.comws;
  const uniqRemovedComws = comws === undefined ? removedComws : removedComws.filter(comw => !comws.includes(comw));

  return (
    <div className="margin-giant-gap-t">
      {cat &&
        comws?.map((comw, comwi) => {
          const com = cat.coms.find(com => com.wid === comw);

          if (com === undefined) return null;

          return (
            <ComFace
              key={comw}
              com={com}
              comi={comwi}
              importantOnClick={emptyFunc}
              description={() => (
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
                      Icon={IconArrowDataTransferVerticalStrokeRounded}
                      className="color--3 margin-giant-gap-b"
                    />
                  )}
                  <StrongEvaButton
                    scope={scope}
                    fieldName="listKey"
                    fieldKey="comws"
                    fieldValue={['.', '===', comw]}
                    cud="D"
                    Icon={IconDelete01StrokeRounded}
                    onSuccess={
                      removedComws.includes(comw) ? undefined : () => setRemovedComws(comws => [...comws, comw])
                    }
                    className="color--ko"
                  />
                </div>
              )}
            />
          );
        })}
      {!uniqRemovedComws.length || (
        <>
          <h2>Удалённые песни</h2>
          {cat &&
            uniqRemovedComws.map((comw, comwi) => {
              const com = cat.coms.find(com => com.wid === comw);

              return (
                com && (
                  <ComFace
                    key={com.wid}
                    com={com}
                    comi={comwi}
                    importantOnClick={() => {
                      setCcom(com);
                      // showComposition();
                    }}
                    description={() => (
                      <StrongEvaButton
                        scope={scope}
                        fieldName="listKey"
                        fieldKey="comws"
                        fieldValue={comw}
                        cud="C"
                        Icon={IconLinkBackwardStrokeRounded}
                        className="color--ok"
                        onSuccess={
                          removedComws.includes(comw) ? undefined : () => setRemovedComws(comws => [...comws, comw])
                        }
                      />
                    )}
                  />
                )
              );
            })}
        </>
      )}
    </div>
  );
}
