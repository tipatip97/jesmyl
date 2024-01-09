import { useConfirm } from '../../../../../../../complect/modal/confirm/useConfirm';

export default function TimerResetButton({
  onTimerReset,
  isCanReset,
}: {
  onTimerReset: () => void;
  isCanReset: boolean;
}) {
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <div className="flex around flex-gap margin-big-gap">
        {isCanReset && (
          <span
            className="pointer error-message"
            onClick={() => {
              confirm('Сброс?').then(reset => reset && onTimerReset());
            }}
          >
            Сброс
          </span>
        )}
      </div>
    </>
  );
}
