import { useExerExec } from '../../../../../../../complect/exer/hooks/useExer';
import KeyboardInput from '../../../../../../../complect/keyboard/KeyboardInput';
import EditContainerCorrectsInformer from '../../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { useEditableCols } from '../../useEditableCols';
import { useEditableCcom } from '../useEditableCcom';

export default function CategoryBinds() {
  const cols = useEditableCols();
  const ccom = useEditableCcom();
  const exec = useExerExec();

  if (!ccom) return null;

  return (
    <>
      <div className="cat-list-title">Сборники</div>
      {cols?.cats.map(cat => {
        return cat.kind !== 'dict' ? null : (
          <EditContainerCorrectsInformer
            key={cat.wid}
            corrects={ccom?.corrects[`setCatNativeNum:${cat.wid}`]}
          >
            <span>{cat.name} </span>
            <KeyboardInput
              value={`${cat.dict?.[ccom.wid] || ''}`}
              type="number"
              onChange={value => {
                if (!+value) {
                  if (cat.dict?.[ccom.wid]) exec(cat.removeNativeNumber(ccom, exec));
                  return;
                }
                if (value.match(/\D/)) return;
                exec(cat.setNativeNumber(ccom, value));
              }}
            />
            {cat.dict?.[ccom.wid] != null ? (
              <span
                className="pointer color--ko"
                onClick={() => exec(cat.removeNativeNumber(ccom, exec))}
              >
                {isNaN(cat.dict?.[ccom.wid]!) ? 'Корректно очистить' : 'Удалить'}
              </span>
            ) : null}
          </EditContainerCorrectsInformer>
        );
      })}
      <div className="cat-list-title">Списки</div>
      {cols?.cats.map(cat => {
        return cat.kind !== 'list' ? null : (
          <EditContainerCorrectsInformer
            key={cat.wid}
            corrects={ccom?.corrects[`setCatNativeNum:${cat.wid}`]}
          >
            <span>{cat.name} </span>
            <input
              type="checkbox"
              checked={cat.stack.some(comw => ccom.wid === comw)}
              onChange={() => exec(cat?.toggleComExistence(ccom, exec))}
            />
          </EditContainerCorrectsInformer>
        );
      })}
    </>
  );
}
