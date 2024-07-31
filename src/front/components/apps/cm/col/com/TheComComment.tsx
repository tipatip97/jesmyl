import { useState } from 'react';
import { useAtom } from '../../../../../complect/atoms';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconEdit01StrokeRounded } from '../../../../../complect/the-icon/icons/edit-01';
import { cmMolecule } from '../../molecules';
import './Com.scss';

const comCommentsAtom = cmMolecule.select(s => s.comComments);

export default function TheComComment({ comw }: { comw: number }) {
  const [comments, setComments] = useAtom(comCommentsAtom);
  const [isRedact, setIsRedact] = useState(false);

  return (
    <>
      <IconButton
        Icon={isRedact ? IconCheckmarkCircle02StrokeRounded : IconEdit01StrokeRounded}
        className="flex full-width between color--7 margin-gap-v"
        prefix="Заметки"
        onClick={() => setIsRedact(!isRedact)}
      />
      {isRedact ? (
        <KeyboardInput
          multiline
          className="full-width bgcolor--2"
          value={comments[comw] ?? ''}
          onChange={comment => setComments(prev => ({ ...prev, [comw]: comment }))}
        />
      ) : (
        <div className="white-pre-line padding-big-gap-b">{comments[comw]}</div>
      )}
    </>
  );
}
