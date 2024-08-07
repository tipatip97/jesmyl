import { useState } from 'react';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { CmComBindAttach } from '../../../../../models';
import { ChordVisibleVariant } from '../../Cm.model';
import { useCcat } from '../../col/cat/useCcat';
import { Com } from '../../col/com/Com';
import { ComFace } from '../../col/com/face/ComFace';
import { useMeetings } from '../../lists/meetings/useMeetings';
import CmExternalComListAttRedactList from './RedactList';
import CmExternalComListAttRedactListOrder from './RedactListOrder';
import TheComForFullScreen from './TheComForFullScreen';

const itIt = (it: unknown) => it;

interface Props {
  value: CmComBindAttach;
  scope: string;
  isRedact?: boolean;
  switchIsRedact: (is?: boolean) => void;
}

export default function CmExternalComListAtt({ value, scope, isRedact, switchIsRedact }: Props) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isOpenComposition, setIsOpenComposition] = useState(false);

  const [ccom, setCcom] = useState<Com | und>();
  const cat = useCcat(true);
  const { meetings } = useMeetings();
  const currentEvent = value.eventw == null ? null : meetings?.stack?.find(event => event.w === value.eventw!);

  return (
    <>
      {!currentEvent && !value.comws?.length && <div>Песен нет</div>}
      {cat &&
        (currentEvent ? (value.comws ? [...currentEvent.s, ...value.comws] : currentEvent.s) : value.comws)?.map(
          (comw, comwi) => {
            const com = cat.coms.find(com => com.wid === comw);
            if (com === undefined) return null;

            return (
              <ComFace
                key={comw}
                com={com}
                comi={comwi}
                importantOnClick={() => {
                  setCcom(com);
                  setIsOpenComposition(true);
                }}
              />
            );
          },
        )}

      {isRedact && (
        <FullContent onClose={switchIsRedact}>
          <CmExternalComListAttRedactList
            scope={scope}
            value={value}
            setCcom={setCcom}
            setIsOrderOpen={setIsOrderOpen}
            setIsOpenComposition={setIsOpenComposition}
          />
        </FullContent>
      )}
      {isOrderOpen && (
        <FullContent onClose={setIsOrderOpen}>
          <CmExternalComListAttRedactListOrder
            scope={scope}
            value={value}
            setCcom={setCcom}
          />
        </FullContent>
      )}

      {isOpenComposition && (
        <FullContent onClose={setIsOpenComposition}>
          <TheComForFullScreen
            com={ccom}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            comList={(cat && value.comws?.map(comw => cat.coms.find(com => com.wid === comw)!).filter(itIt)) ?? []}
            onComSet={setCcom}
          />
        </FullContent>
      )}
    </>
  );
}
