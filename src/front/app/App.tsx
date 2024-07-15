import React from 'react';
import { ScheduleWidgetTgDayViewOr } from '../complect/schedule-widget/general/TgDayViewOr';
import './App.scss';

const Child = React.lazy(() => import('./AppComponent'));

function App() {
  return (
    <ScheduleWidgetTgDayViewOr>
      <Child />
    </ScheduleWidgetTgDayViewOr>
  );
}
export default App;
