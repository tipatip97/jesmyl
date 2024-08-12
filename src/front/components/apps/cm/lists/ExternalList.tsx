import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CmComWid } from '../../../../../back/apps/cm/Cm.enums';
import mylib from '../../../../complect/my-lib/MyLib';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { IconCancel01SolidRounded } from '../../../../complect/the-icon/icons/cancel-01';
import { CmTranslationComListContext } from '../base/translations/context';
import { ComFaceList } from '../col/com/face/list/ComFaceList';
import TheComposition from '../col/com/TheComposition';
import { useCols } from '../cols/useCols';
import './Lists.scss';

const itNUnd = (it: unknown) => it !== undefined;

export default function ExternalList() {
  const params = useParams();
  const [comws, setComws] = useState<CmComWid[] | null>(null);
  const cols = useCols();

  const contextValue = useMemo(() => {
    if (cols == null || comws === null) return null;
    return { list: comws.map(comw => cols.coms.find(com => com.wid === comw)!).filter(itNUnd) };
  }, [cols, comws]);

  useEffect(() => {
    const comwsStr = params['comws'];
    if (comwsStr === undefined) return;

    try {
      const comws: number[] = JSON.parse(comwsStr);
      if (!mylib.isArr(comws) || comws.some(comw => !mylib.isNum(comw))) return;

      setComws(comws);
    } catch (error) {}
  }, [params]);

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="ext-list-container"
            BackButtonIcon={IconCancel01SolidRounded}
            headTitle="Внешний список"
            content={<ComFaceList list={comws} />}
          />
        }
      />
      <Route
        path=":comw/*"
        element={
          contextValue && (
            <CmTranslationComListContext.Provider value={contextValue}>
              <TheComposition />
            </CmTranslationComListContext.Provider>
          )
        }
      />
    </Routes>
  );
}
