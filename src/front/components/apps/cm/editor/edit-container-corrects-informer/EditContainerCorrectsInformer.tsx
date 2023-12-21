import { DetailedHTMLProps, PropsWithChildren } from 'react';
import useAuth from '../../../../index/useAuth';
import { cmExer } from '../../Cm.store';
import { CorrectsBox } from '../corrects-box/CorrectsBox';
import { ICorrect } from '../corrects-box/CorrectsBox.model';
import './EditContainerCorrectsInformer.scss';

export default function EditContainerCorrectsInformer(
  props: PropsWithChildren<{
    corrects?: CorrectsBox | nil;
    access?: string;
  }> &
    DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const auth = useAuth();
  const { corrects, children, access } = props;
  const errors = corrects?.errors || [];
  const warnings = corrects?.warnings || [];
  const unknowns = corrects?.unknowns || [];

  return (
    cmExer.actionAccessedOrNull(access, auth, true) && (
      <div
        {...props}
        className={`edit-container-corrects-informer ${props.className || ''}`}
      >
        {children}
        <div className="corrects-container">
          {(
            [
              ['error', errors],
              ['warning', warnings],
              ['unknown', unknowns],
            ] as [string, ICorrect[]][]
          ).map(([correct, line]) => {
            return line.map(({ message, onFix, fixLabel }, correcti) => {
              return (
                <div
                  key={`${correct}-corrects-for action : ${correcti}`}
                  className={`${correct} correct-box`}
                >
                  {message}
                  {onFix && (
                    <div
                      className="fix-button"
                      onClick={() => onFix()}
                    >
                      {fixLabel || 'Исправить'}
                    </div>
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>
    )
  );
}
