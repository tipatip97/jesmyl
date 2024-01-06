import { useReducer } from 'react';
import PhaseIndexContainer from '../../../complect/PhaseIndexContainer';
import { MyFilesTypeBox } from './complect/MyFilesTypeBox';
import { myFileTypes } from './utils/associate-file';
import { useAddMyFileOnDrop } from './hooks/on-add-file';

const onDragOver: CallbackPreventer = event => event.preventDefault();
const forceUpdater = (it: number) => it + 1;

export default function IndexMyFiles() {
  const [updates, forceUpdate] = useReducer(forceUpdater, 0);
  const onDrop = useAddMyFileOnDrop(forceUpdate);

  return (
    <PhaseIndexContainer
      className=""
      headTitle="Мои файлы"
      content={
        <div
          className="full-height full-width"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          {!updates}
          {myFileTypes.map(type => (
            <MyFilesTypeBox
              key={type}
              type={type}
            />
          ))}
        </div>
      }
    />
  );
}
