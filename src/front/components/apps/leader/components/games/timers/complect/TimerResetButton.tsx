import modalService from "../../../../../../../complect/modal/Modal.service";

export default function TimerResetButton(
  {
    onTimerReset,
    isCanReset,
  }: {
    onTimerReset: () => void,
    isCanReset: boolean,
  }) {

  return <div className="flex around flex-gap margin-big-gap">
    {isCanReset && (
      <span
        className="pointer error-message"
        onClick={() => {
          modalService
            .confirm('Сброс?')
            .then((reset) => reset && onTimerReset());
        }}
      >
        Сброс
      </span>
    )}
  </div>;
}
