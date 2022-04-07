import EvaIcon from "../../../../complect/Eva";
import modalService from "../../../../complect/modal/Modal.service";
import ModalButton from "../../../../complect/modal/ModalButton";
import TheModalInput from "../../../../complect/modal/ModalInput";
import { useCols } from "../cols/useCols";
import { useMarks } from "../marks/useMarks";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, createMeeting } = useMeetings();
  const [cols] = useCols();
  const { setMarks, addMarks } = useMarks();

  return (
    <button
      key="meetings-button"
      className="meetings-button mbtn m-no mxs"
      onClick={() => {
        modalService.open({
          title: "События",
          theInputs: meetings.map((meeting, meetingi) => {
            return (
              <TheModalInput
                key={`meeting-modal-input${meetingi}`}
                config={[
                  {
                    title: meeting.getTitle(),
                    type: "button",
                    value: "Просмотреть",
                    onClick: () => {
                      modalService.open({
                        title: `Действия с событием ${meeting.name}`,
                        description:
                          meeting.stack.length < 1
                            ? "Закладок нет"
                            : meeting.stack.map((comw) => {
                                const com = cols.getCom(comw);

                                return com == null ? (
                                  "Не существующая песня"
                                ) : (
                                  <div key={`meeting modal com ${com?.wid}`}>
                                    {`${!com.index ? "?" : com.index - -1}. ${
                                      com.name
                                    }`}
                                  </div>
                                );
                              }),
                        inputs:
                          meeting.stack.length === 0
                            ? null
                            : [
                                {
                                  value: "Добавить в мои закладки",
                                  type: "button",
                                  onClick: () => addMarks(meeting.stack),
                                },
                                {
                                  value: "Заменить мои закладки",
                                  type: "button",
                                  onClick: () => setMarks(meeting.stack),
                                },
                              ],
                      });
                    },
                  },
                  meetingi,
                ]}
              />
            );
          }),
          theButtons: true
            ? [
                <ModalButton
                  key={`meeting-modal-button`}
                  config={[
                    {
                      title: "Новое событие",
                      onClick: () => createMeeting(),
                    },
                  ]}
                />,
              ]
            : null,
        });
      }}
    >
      <EvaIcon name="calendar-outline" />
    </button>
  );
}
