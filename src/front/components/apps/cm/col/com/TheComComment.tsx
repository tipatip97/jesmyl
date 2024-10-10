import { CmComWid } from '../../../../../../back/apps/cm/Cm.enums';
import { useAtom } from '../../../../../complect/atoms';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconEdit01StrokeRounded } from '../../../../../complect/the-icon/icons/edit-01';
import { IconNote03StrokeRounded } from '../../../../../complect/the-icon/icons/note-03';
import { cmMolecule } from '../../molecules';
import './Com.scss';

interface Props {
  comw: CmComWid;
  isRedact: boolean;
  setIsRedact: (isRedact: boolean) => void;
}

const comCommentsAtom = cmMolecule.select(s => s.comComments);
const isShowConHashCommentsAtom = cmMolecule.select(s => s.isShowComHashComments);

export default function TheComComment({ comw, isRedact, setIsRedact }: Props) {
  const [comments, setComments] = useAtom(comCommentsAtom);
  const [isShowConHashComments, setIsShowConHashComments] = useAtom(isShowConHashCommentsAtom);

  return (
    <>
      <div className="flex full-width between">
        <span>Заметки</span>
        <div className="flex flex-gap">
          <IconButton
            Icon={IconNote03StrokeRounded}
            className={`flex full-width between color--7 margin-gap-v${isShowConHashComments ? '' : ' fade-05'}`}
            onClick={() => setIsShowConHashComments(!isShowConHashComments)}
          />
          <IconButton
            Icon={isRedact ? IconCheckmarkCircle02StrokeRounded : IconEdit01StrokeRounded}
            className="flex full-width between color--7 margin-gap-v"
            onClick={() => setIsRedact(!isRedact)}
          />
        </div>
      </div>
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
