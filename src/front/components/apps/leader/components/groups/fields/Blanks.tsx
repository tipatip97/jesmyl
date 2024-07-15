import { useMemo, useState } from 'react';
import { ClientExecutionDict } from '../../../../../../complect/exer/Exer.model';
import mylib, { MyLib } from '../../../../../../complect/my-lib/MyLib';
import SendButton from '../../../../../../complect/sends/send-button/SendButton';
import { IconPlusSignStrokeRounded } from '../../../../../../complect/the-icon/icons/plus-sign';
import { leaderExer } from '../../../leaderExer';
import { useLeaderCcontext } from '../../contexts/useContexts';
import { ContextFieldBlankExportable } from './Blanks.model';
import ContextFieldBlank from './FieldBlank';

export default function GroupFieldBlanks() {
  const ccontext = useLeaderCcontext();
  const [addList, updateAddList] = useState<ContextFieldBlankExportable[]>([]);
  const [redactList, updateRedactList] = useState<ContextFieldBlankExportable[]>([]);
  const [keysOnRedact, updateKeysOnRedact] = useState<string[]>([]);
  const { isCanAddNew, isCanPublicate, inclusiveKeys, isEmptyExists } = useMemo(() => {
    let isEmptyExists = addList.some(({ key, name }) => !key || !name);
    const keys: string[] = [];
    const inclusiveKeys = addList
      .filter(({ key }) => {
        if (keys.indexOf(key) < 0) {
          keys.push(key);
          return false;
        } else return true;
      })
      .map(({ key }) => key);

    return {
      isCanAddNew: !isEmptyExists && !inclusiveKeys.length,
      isCanPublicate: (!isEmptyExists && !inclusiveKeys.length && !!addList.length) || !!redactList.length,
      inclusiveKeys,
      isEmptyExists,
    };
  }, [addList, redactList, keysOnRedact]);

  return (
    <>
      <h2 className="flex flex-gap">
        Бланки специальных полей
        {isCanAddNew && (
          <IconPlusSignStrokeRounded
            className="pointer"
            onClick={() => {
              updateAddList([
                ...addList,
                {
                  name: '',
                  key: '',
                  type: 'string',
                },
              ]);
            }}
          />
        )}
      </h2>
      {ccontext?.blanks?.map((blank, blanki) => {
        return (
          <ContextFieldBlank
            key={blanki}
            blank={blank}
            redact={keysOnRedact.indexOf(blank.key) > -1}
            onEditStart={isSelfRedact => isSelfRedact && updateKeysOnRedact([...keysOnRedact, blank.key])}
            onRedact={blank => {
              const redactBlanks = [...redactList];
              const redactBlanki = redactBlanks.findIndex(({ key }) => blank.key === key);

              const realBlank = (ccontext.blanks || []).find(({ key }) => blank.key === key);

              if (realBlank) {
                if (mylib.isEq(realBlank, blank)) redactBlanks.splice(redactBlanki, 1);
                else if (redactBlanki < 0) redactBlanks.push(blank);
                else redactBlanks[redactBlanki] = blank;
              }

              updateRedactList(redactBlanks);
            }}
            onDelete={() => {
              updateAddList(addList.filter((_, index) => index !== blanki));
            }}
          />
        );
      })}
      {!addList.length || <h3>Новые бланки:</h3>}
      {addList.map((blank, blanki) => {
        return (
          <ContextFieldBlank
            key={blanki}
            redact
            addition
            blank={blank}
            onRedact={blank => {
              const blanks = [...addList];
              blanks[blanki] = blank;
              updateAddList(blanks);
            }}
            onDelete={() => {
              updateAddList(addList.filter((_, index) => index !== blanki));
            }}
          />
        );
      })}
      <div className="flex center margin-big-gap">
        {!inclusiveKeys.length || (
          <div className="error-message">Присутствуют одинаковые ключи ({inclusiveKeys.join(', ')})</div>
        )}
        {isEmptyExists && <div className="error-message">Значения "Ключ" и "Название" не должны быть пустыми!</div>}
        {isCanPublicate && (
          <SendButton
            title="Отправить бланки"
            onSuccess={() => {
              updateAddList([]);
              updateRedactList([]);
              updateKeysOnRedact([]);
            }}
            confirm
            onSend={() => {
              if (ccontext)
                return new Promise((res, rej) => {
                  const execs: ClientExecutionDict[] = [];
                  const generals = {
                    contextw: ccontext.w,
                  };

                  redactList.forEach(redactBlank => {
                    const blank = (ccontext.blanks || []).find(blank => blank.key === redactBlank.key);

                    if (blank) {
                      MyLib.entries(redactBlank).forEach(([fieldn, value]) => {
                        if (fieldn !== 'key' && (blank[fieldn as never] ?? null) !== (value ?? null)) {
                          execs.push({
                            action: 'setContextGroupFieldBlankField',
                            method: 'set',
                            args: {
                              ...generals,
                              key: blank.key,
                              fieldn,
                              value,
                            },
                          });
                        }
                      });
                    }
                  });

                  if (addList.length) {
                    execs.push({
                      action: 'addContextGroupFieldBlanks',
                      method: 'concat',
                      args: {
                        ...generals,
                        list: addList,
                      },
                    });
                  }

                  if (execs.length) {
                    leaderExer.send(execs).then(res).catch(rej);
                  }
                });
            }}
          />
        )}
      </div>
    </>
  );
}
