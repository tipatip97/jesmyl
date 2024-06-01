import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconEdit01StrokeRounded } from '../../../../../complect/the-icon/icons/edit-01';
import { RootState } from '../../../../../shared/store';
import cmStoreActions from '../../Cm.store';
import './Com.scss';

const comCommentsSelector = (state: RootState) => state.cm.comComments;

export default function TheComComment({ comw }: { comw: number }) {
  const dispatch = useDispatch();
  const comments = useSelector(comCommentsSelector);
  const [isRedact, setIsRedact] = useState(false);

  return (
    <>
      <IconButton
        Icon={isRedact ? IconCheckmarkCircle02StrokeRounded : IconEdit01StrokeRounded}
        className="flex full-width between color--7 margin-gap-v"
        prefix="Комментарии"
        onClick={() => setIsRedact(!isRedact)}
      />
      {isRedact ? (
        <KeyboardInput
          multiline
          className="full-width bgcolor--2"
          value={comments[comw] ?? ''}
          onChange={comment => dispatch(cmStoreActions.setComComment({ comw, comment }))}
        />
      ) : (
        <div className="white-pre-line padding-big-gap-b">{comments[comw]}</div>
      )}
    </>
  );
}
