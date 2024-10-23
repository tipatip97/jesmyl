import { useRef } from 'react';
import { FaceItem } from '../../../../../../../complect/FaceItem';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { Com } from '../../Com';
import { ListComFaceForSelectionsProps } from '../ComFace.model';
import { ComListControlledContainer } from './ComListControlledContainer';
import { IComFaceList } from './model';
import { useComListShownLimitsController } from './useComListShownLimitsController';

export interface ComFaceListProps extends IComFaceList, ListComFaceForSelectionsProps {
  list: Com[];
  titles?: Record<number, string>;
  className?: string;
}

export const currentComwIdPrefix = 'com_face_wid_';
export const faceItemDescriptionClassName = 'face-item-description';

export const ComFaceListComList = (props: ComFaceListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  const limits = useComListShownLimitsController(listRef, props);

  const isSetWids = !(props.titles && mylib.keys(props.titles).length);
  const setComDescription = props.comDescription
    ? (com: Com, comi: number) => <div className={faceItemDescriptionClassName}>{props.comDescription!(com, comi)}</div>
    : () => null;

  return (
    <ComListControlledContainer
      {...props}
      listRef={listRef}
    >
      {props.list.map((com, comi) => {
        if (limits.start > comi || limits.finish < comi) return null;

        return (
          <FaceItem
            key={isSetWids ? com.wid : comi}
            id={`${currentComwIdPrefix}${com.wid}`}
            className={`flex between pointer ${comi}-comi`}
          >
            <div className="face-logo">{com.number}</div>
            <span className="face-title ellipsis">{com.name}</span>
            {setComDescription(com, comi)}
          </FaceItem>
        );
      })}
    </ComListControlledContainer>
  );
};
