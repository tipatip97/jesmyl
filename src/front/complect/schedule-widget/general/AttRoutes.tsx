import { Routes } from 'react-router-dom';
import { MyLib, mylib } from 'front/utils';
import { makeAttStorage } from '../useScheduleWidget';
import React from 'react';

export const ScheduleWidgetAttRoutes = () => {
  const [atts] = makeAttStorage();

  return (
    <Routes>
      {MyLib.keys(atts).map(key => (
        <React.Fragment key={key}>{atts[key].routes}</React.Fragment>
      ))}
    </Routes>
  );
};
