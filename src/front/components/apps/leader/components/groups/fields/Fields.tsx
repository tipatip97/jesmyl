import { useState } from 'react';
import KeyboardInput from '../../../../../../complect/keyboard/KeyboardInput';
import SendButton from '../../../../../../complect/sends/send-button/SendButton';
import useIsRedactArea from '../../../../../../complect/useIsRedactArea';
import { leaderExer } from '../../../leaderExer';
import { LeaderCleans } from '../../LeaderCleans';
import { useLeaderCcontext } from '../../contexts/useContexts';
import useLeaderGroups from '../useGroups';

export default function LeaderGroupFields() {
  const ccontext = useLeaderCcontext();
  const { cgroup } = useLeaderGroups();
  const [redactFields, updateRedactFields] = useState<Record<string, string | und>>({});
  const { editIcon, isRedact, setIsSelfRedact } = useIsRedactArea(true, null, true);
  const fields = LeaderCleans.getContextFieldValues(ccontext, cgroup?.fields) || {};

  return (
    <>
      <h2 className="flex flex-gap">
        Специальные поля
        {editIcon}
      </h2>
      {ccontext?.blanks?.map(({ name, key, value }, blanki) => {
        if (value || !isRedact)
          return (
            <div
              key={blanki}
              className="flex flex-gap"
            >
              <div className="nowrap">{name}:</div>
              <div className="color--3 pre-line">{fields[key] || '-'}</div>
            </div>
          );

        return (
          <div
            key={blanki}
            className="flex flex-gap margin-gap"
          >
            <div className="nowrap">{name}</div>
            <KeyboardInput
              value={fields[key]}
              multiline
              onChange={value => {
                let val: und | string = value;

                if (fields[key] === value) val = undefined;
                updateRedactFields({ ...redactFields, [key]: val });
              }}
            />
          </div>
        );
      })}
      <div className="flex center margin-big-gap">
        {Object.entries(redactFields).some(([key, val]) => fields[key] !== val) && (
          <SendButton
            title="Отправить значения"
            onSuccess={() => {
              updateRedactFields({});
              setIsSelfRedact(false);
            }}
            onSend={() => {
              if (cgroup && ccontext)
                return leaderExer.send({
                  action: 'setContextGroupFields',
                  method: 'set_all',
                  args: {
                    value: redactFields,
                    groupw: cgroup.w,
                    contextw: ccontext.w,
                  },
                });
            }}
          />
        )}
      </div>
    </>
  );
}
