import { useState } from 'react';
import { useSelector } from 'react-redux';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconHelpCircleStrokeRounded } from '@icons/help-circle';
import { CmMp3Rule } from '../../../../../models';
import { RootState } from '../../../../../shared/store';
import { cmExer } from '../../Cm.store';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import Mp3RuleEditor from './Mp3RuleEditor';
import { IconPlusSignCircleStrokeRounded } from '@icons/plus-sign-circle';

const mp3RulesSelector = (state: RootState) => state.cm.mp3Rules;

export default function Mp3RulesRedactor() {
  const mp3Rules = useSelector(mp3RulesSelector);
  const [newRules, updateNewRules] = useState<CmMp3Rule[]>([]);
  const [redactRules, updateRedactRules] = useState<CmMp3Rule[]>(mp3Rules || []);
  const [isOpenNewRule, setIsOpenNewRule] = useState(false);

  return (
    <PhaseCmEditorContainer
      className="mp3-rules-redactor"
      headTitle="Редактор MP3 правил"
      content={
        <>
          {redactRules.map(rule => {
            return (
              <Mp3RuleEditor
                key={rule.w}
                {...rule}
                onComplete={newRule => {
                  const index = redactRules.findIndex(({ w }) => rule.w === w);
                  if (index > -1) {
                    const newRedacts = [...redactRules];
                    newRedacts.splice(index, 1, newRule);
                    updateRedactRules(newRedacts);
                    cmExer.set({
                      action: 'updateMp3Rule',
                      method: 'set',
                      prev: rule,
                      value: newRule,
                      args: {
                        mp3w: rule.w,
                        value: newRule,
                      },
                    });
                  }
                }}
              />
            );
          })}
          {newRules.map(({ w, ...rule }) => {
            return (
              <Mp3RuleEditor
                key={w}
                {...rule}
                button={
                  <IconButton
                    Icon={IconHelpCircleStrokeRounded}
                    className="color--ko"
                    confirm="Удалить новое правило?"
                    onClick={() => {
                      cmExer.set({
                        action: 'addMp3Rule',
                        method: 'push',
                        anti: ({ args, action }) => {
                          if (action === 'addMp3Rule' && args && args.value.w === w) return action => action.RemoveNew;
                        },
                      });
                      updateNewRules(newRules.filter(rule => rule.w !== w));
                    }}
                  />
                }
              />
            );
          })}
          <h2 className="flex flex-gap">
            Новое правило
            {!isOpenNewRule && <IconPlusSignCircleStrokeRounded onClick={() => setIsOpenNewRule(true)} />}
          </h2>
          {isOpenNewRule && (
            <Mp3RuleEditor
              redact
              newRule
              onComplete={rule => {
                updateNewRules([...newRules, rule]);
                setIsOpenNewRule(false);
                cmExer.set({
                  action: 'addMp3Rule',
                  method: 'push',
                  args: {
                    value: rule,
                  },
                });
              }}
            />
          )}
        </>
      }
    />
  );
}
