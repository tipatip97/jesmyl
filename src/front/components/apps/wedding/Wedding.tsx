import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { MyLib, mylib } from 'front/utils';

const WeddingAdmin = React.lazy(() => import('./admin/Admin'));
const WeddingProposition = React.lazy(() => import('./proposition/Proposition'));

export default function Wedding() {
  const weddn = useParams().weddn;
  const path = mylib.md5('admin/' + weddn);
  console.info(path);

  return (
    <Routes>
      <Route
        path=":personStr"
        element={<WeddingProposition />}
      />
      <Route
        path={path}
        element={<WeddingAdmin />}
      />
    </Routes>
  );
}
