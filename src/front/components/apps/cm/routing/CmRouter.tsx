import { Route, Routes } from 'react-router-dom';
import TheCat from '../col/cat/TheCat';
import Editor from '../editor/Editor';
import Lists from '../lists/Lists';
import { CmFooter } from './CmFooter';

export const CmRouter = ({ mainNode }: { mainNode: React.ReactNode }) => {
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
          element={<Editor />}
        />
        {mainNode}
      </Routes>

      <CmFooter />
    </>
  );
};
