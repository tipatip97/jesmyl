import { MyLib } from 'front/utils';
import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAtom } from '../../../../complect/atoms';
import TheCat from '../col/cat/TheCat';
import { useTakeActualComw } from '../col/com/useCcom';
import Lists from '../lists/Lists';
import { cmMolecule, comCommentFractionalStore } from '../molecules';
import { CmFooter } from './CmFooter';

const Editor = React.lazy(() => import('../editor/Editor'));

const commentsAtom = cmMolecule.select(s => s.comComments);

export default function CmRouter({ mainNode }: { mainNode: React.ReactNode }) {
  useTakeActualComw();

  // todo remove it
  //////////////////////////
  const [comments, setComments] = useAtom(commentsAtom);
  useEffect(() => {
    let isUpdate = false;
    MyLib.entries(comments).forEach(([key, val]) => {
      isUpdate = true;
      if (!val || comCommentFractionalStore.get(key)) return;

      comCommentFractionalStore.set(key, val);
    });

    if (isUpdate) setComments({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //////////////////////////

  return (
    <>
      <Routes>
        <Route
          path="i/*"
          element={<TheCat all />}
        />
        <Route
          path="li/*"
          element={<Lists />}
        />
        <Route
          path="edit/*"
          element={
            <Suspense>
              <Editor />
            </Suspense>
          }
        />
        {mainNode}
      </Routes>

      <CmFooter />
    </>
  );
}
