import { useState } from 'react';
import styled from 'styled-components';
import { BottomPopupItem } from '../../../../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { useExerExec } from '../../../../../../../../../complect/exer/hooks/useExer';
import Modal from '../../../../../../../../../complect/modal/Modal/Modal';
import { ModalBody } from '../../../../../../../../../complect/modal/Modal/ModalBody';
import { ModalHeader } from '../../../../../../../../../complect/modal/Modal/ModalHeader';
import { IconOptionStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/option';
import { IconTextStrokeRounded } from '../../../../../../../../../complect/the-icon/icons/text';
import { EditableCom } from '../../../com/EditableCom';

export const OrdersRedactorAdditions = ({ com, onClose }: { com: EditableCom | und; onClose: (is: false) => void }) => {
  const exec = useExerExec();
  const [isNewTextBlockModalOpen, setIsNewTextBlockModalOpen] = useState<unknown>(false);
  const [isNewChordBlockModalOpen, setIsNewChordBlockModalOpen] = useState<unknown>(false);

  return (
    <>
      <BottomPopupItem
        Icon={IconTextStrokeRounded}
        title="Текстовый блок"
        onClick={setIsNewTextBlockModalOpen}
      />
      <BottomPopupItem
        Icon={IconOptionStrokeRounded}
        title="Аккордный блок"
        onClick={setIsNewChordBlockModalOpen}
      />
      {isNewTextBlockModalOpen && (
        <Modal onClose={setIsNewTextBlockModalOpen}>
          <ModalHeader>Новый текст</ModalHeader>
          <ModalBody>
            {com?.texts?.map((text, texti) => {
              return (
                <StyledBlockItem
                  key={texti}
                  className="pointer"
                  onClick={() => {
                    onClose(false);
                    exec(com.addOrder({ t: texti, s: 'one' }));
                  }}
                >
                  <pre>
                    {texti + 1}.{text}
                  </pre>
                </StyledBlockItem>
              );
            })}
          </ModalBody>
        </Modal>
      )}
      {isNewChordBlockModalOpen && (
        <Modal onClose={setIsNewChordBlockModalOpen}>
          <ModalHeader>Новый аккордный блок</ModalHeader>
          <ModalBody>
            {com?.chords?.map((chords, chordsi) => {
              return (
                <StyledBlockItem
                  key={chordsi}
                  className="pointer"
                  onClick={() => {
                    onClose(false);
                    exec(com.addOrder({ c: chordsi, s: 'enter' }));
                  }}
                >
                  <pre>
                    {chordsi + 1}.{com.transBlock(chords)}
                  </pre>
                </StyledBlockItem>
              );
            })}
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

const StyledBlockItem = styled.div``;
