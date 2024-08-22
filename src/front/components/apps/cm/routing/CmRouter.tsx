import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TheCat from '../col/cat/TheCat';
import { useTakeActualComw } from '../col/com/useCcom';
import Lists from '../lists/Lists';
import { CmFooter } from './CmFooter';

const Editor = React.lazy(() => import('../editor/Editor'));

export default function CmRouter({ mainNode }: { mainNode: React.ReactNode }) {
  useTakeActualComw();

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
