import { CustomAttUseTaleId } from '../../../../../models';
import EvaButton from '../../../../eva-icon/EvaButton';
import useModal from '../../../../modal/useModal';
import StrongDiv from '../../../../strong-control/StrongDiv';
import { IScheduleWidgetListUnit, IScheduleWidgetRole, IScheduleWidgetUser } from '../../../ScheduleWidget.model';
import KeyValueListAttNumberMember from './KeyValueListAttNumberMember';

export default function ScheduleKeyValueListAttArrayItemKeyChange(props: {
  scope: string;
  users: IScheduleWidgetUser[];
  lists: IScheduleWidgetListUnit[] | und;
  roles: IScheduleWidgetRole[] | und;
  theKey: number;
}) {
  const [modalNode, openModal] = useModal(({ header, body }, closeModal) => {
    const map = (id: number) => {
      return (
        <StrongDiv
          key={id}
          scope={props.scope}
          fieldName="key"
          fieldValue={id}
          cud="U"
          onSuccess={closeModal}
          className="margin-gap-v"
        >
          <KeyValueListAttNumberMember value={id} />
        </StrongDiv>
      );
    };
    return (
      <>
        {header(<KeyValueListAttNumberMember value={props.theKey} />)}
        {body(
          <>
            {props.lists?.map((item) => item.mi + CustomAttUseTaleId.Lists).map(map)}
            {props.roles?.map((item) => item.mi + CustomAttUseTaleId.Roles).map(map)}
            {props.users?.map((item) => item.mi + CustomAttUseTaleId.Users).map(map)}
          </>,
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <EvaButton name="sync" onClick={openModal} />
    </>
  );
}
