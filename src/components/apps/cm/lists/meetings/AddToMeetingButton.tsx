import modalService from "../../../../../complect/modal/Modal.service";
import TheModalInput from "../../../../../complect/modal/ModalInput";
import { useMeetings } from "./useMeetings";


export default function AddToMeetingButton() {
    const { meetings } = useMeetings();
    
    return <TheModalInput config={{
        type: 'button',
        value: 'Добавить в событие',
        onClick: () => {
            modalService.open({
                title: 'Закладки',
                inputs: meetings?.map(meeting => {
                    return {
                        type: 'button',
                        title: meeting.getTitle(),
                        value: 'Перезаписать здесь',
                        onClick: () => {},
                    };
                })
            });
        }
    }} />
}

