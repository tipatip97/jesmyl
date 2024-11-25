import { mylib } from 'front/utils';
import { useEffect, useState } from 'react';
import { atom, useAtom } from '../../../../complect/atoms';
import Modal from '../../../../complect/modal/Modal/Modal';
import { useActualRef } from '../../../../complect/useActualRef';
import { IndexAdvertisingReminderModalContent } from './ReminderModal';

const lastRemindTsAtom = atom(0, 'index', 'lastRemindTs');
const remindIntervalTs = mylib.howMs.inDay * 12;

export const IndexAdvertisingReminder = () => {
  const [lastRemindTs, setLastRemindTs] = useAtom(lastRemindTsAtom);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const lastRemindTsActualRef = useActualRef(lastRemindTs);

  useEffect(() => {
    setTimeout(() => {
      if (lastRemindTsActualRef.current) {
        if (Date.now() - lastRemindTsActualRef.current > remindIntervalTs) {
          setLastRemindTs(Date.now());
          setIsOpenModal(true);
        }
      } else setLastRemindTs(Date.now());
    }, 1000);
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
