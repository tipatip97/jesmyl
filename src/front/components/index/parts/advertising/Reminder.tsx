import { useEffect, useState } from 'react';
import { atom, useAtom } from '../../../../complect/atoms';
import Modal from '../../../../complect/modal/Modal/Modal';
import { useActualRef } from '../../../../complect/useActualRef';
import { IndexAdvertisingReminderModalContent } from './ReminderModal';
import mylib from '../../../../complect/my-lib/MyLib';

const lastRemindTsAtom = atom(0, 'index', 'lastRemindTs');
const remindIntervalTs = mylib.howMs.inDay * 12;

export const IndexAdvertisingReminder = () => {
  const [lastRemindTs, setLastRemindTs] = useAtom(lastRemindTsAtom);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const lastRemindTsActualRef = useActualRef(lastRemindTs);

  useEffect(() => {
    setTimeout(() => {
      if (lastRemindTsActualRef.current === 0 || Date.now() - lastRemindTsActualRef.current > remindIntervalTs) {
        setLastRemindTs(Date.now());
        setIsOpenModal(true);
      }
    }, 100);
  }, [lastRemindTsActualRef, setLastRemindTs]);

  return (
    <>
      {isOpenModal && (
        <Modal onClose={setIsOpenModal}>
          <IndexAdvertisingReminderModalContent onClose={setIsOpenModal} />
        </Modal>
      )}
    </>
  );
};
