import { FC } from 'react';
import useAbsoluteFloatPopup from '../../../../../../../complect/absolute-popup/useAbsoluteFloatPopup';
import useSelectedComs from '../../../../base/useSelectedComs';
import { Com } from '../../Com';
import { useCcomw } from '../../useCcom';
import { FreeComFaceProps } from '../ComFace.model';
import { ComFaceListComList } from './_ComList';
import { ComFaceListWidList } from './_WidList';
import { IComFaceList } from './model';

interface Props extends IComFaceList {
  list: number[] | Com[] | nil;
  titles?: Record<number, string>;
  className?: string;
}

export const ComFaceList = (props: Props) => {
  return (
    props.list && (
      <ComFaceListWrapper
        Component={props.list[0] instanceof Com ? ComFaceListComList : ComFaceListWidList}
        {...(props as any)}
      />
    )
  );
};

interface WrapperProps extends IComFaceList {
  Component: FC<IComFaceList & FreeComFaceProps>;
  ccom: Com | und;
  className?: string;
}

const ComFaceListWrapper = ({ Component, ...props }: WrapperProps) => {
  const ccomw = useCcomw();
  const { openAbsoluteFloatPopup, closeAbsoluteFloatPopup } = useAbsoluteFloatPopup();
  const { selectedComPosition, toggleSelectedCom } = useSelectedComs();

  return (
    <Component
      {...props}
      ccomw={ccomw}
      closeAbsoluteFloatPopup={closeAbsoluteFloatPopup}
      openAbsoluteFloatPopup={openAbsoluteFloatPopup}
      selectedComPosition={selectedComPosition}
      toggleSelectedCom={toggleSelectedCom}
    />
  );
};
