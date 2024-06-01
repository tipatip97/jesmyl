import { ReactNode } from 'react';
import useModal from '../../modal/useModal';
import IconButton from '../../the-icon/IconButton';
import { theIconFromPack } from '../../the-icon/TheIcon';
import { IconHelpSquareStrokeRounded } from '../../../complect/the-icon/icons/help-square';
import { TheIconName } from '../../the-icon/model';

// const icons = evaPackNames.filter(name => name.endsWith('-outline'));

export default function ScheduleWidgetIconChange(props: {
  scope: string;
  icon: TheIconName;
  header: ReactNode;
  used?: (TheIconName | und)[];
}) {
  const [modalNode, screen] = useModal(({ header, body }, closeModal) => {
    return (
      <>
        {header(props.header)}
        {body(
          null,
          // icons.map(icon => {
          //   return (
          //     <StrongEvaButton
          //       key={icon}
          //       scope={props.scope}
          //       fieldName="field"
          //       fieldKey="icon"
          //       fieldValue={icon}
          //       name={icon}
          //       cud="U"
          //       className={'padding-big-gap' + (false ? ' color--7' : props.used?.includes(icon) ? ' fade-05' : '')}
          //       onSuccess={closeModal}
          //     />
          //   );
          // }),
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={theIconFromPack(props.icon) ?? IconHelpSquareStrokeRounded}
        postfix="Изменить иконку"
        onClick={screen}
        className="flex-max margin-gap-v"
      />
    </>
  );
}
