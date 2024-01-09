import { useExerExec } from '../../../../../../../complect/exer/hooks/useExer';
import { translationPushKinds } from '../../../../col/com/Com.complect';
import { useEditableCcom } from '../useEditableCcom';

export default function ComOnTranslations() {
  const ccom = useEditableCcom();
  const exec = useExerExec();

  if (!ccom) return null;

  return (
    <>
      <div>
        {translationPushKinds.map(({ title }, kindi) => (
          <button
            key={`kind-${kindi}`}
            disabled={ccom.translationPushKind === kindi}
            onClick={() => exec(ccom.setTranslationPushKind(kindi))}
          >
            {title}
          </button>
        ))}
      </div>
      {ccom.getOrderedBlocks().map((lines, linesi) => {
        return (
          <div
            key={`lines-${linesi}`}
            className="margin-big-gap-v"
            style={{
              whiteSpace: 'pre-wrap',
            }}
          >
            {lines?.map((text, texti) => (
              <div
                key={`text-${texti}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}
