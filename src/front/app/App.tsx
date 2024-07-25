import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScheduleWidgetTgDayViewOr } from '../complect/schedule-widget/general/TgDayViewOr';
import './App.scss';
import { lastVisitedRouteLsName } from './AppFooter';

const Child = React.lazy(() => import('./AppComponent'));

function App() {
  const [isNeedFirstNavigate, setIsNeedFirstNavigate] = useState(true);

  return (
    <>
      {isNeedFirstNavigate && <FirstNaver onSet={setIsNeedFirstNavigate} />}
      <ScheduleWidgetTgDayViewOr>
        <Child />
      </ScheduleWidgetTgDayViewOr>
    </>
  );
}

const FirstNaver = ({ onSet }: { onSet: (is: false) => void }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onSet(false);
    navigate(localStorage.getItem(lastVisitedRouteLsName) || '/cm/i');
  }, [navigate, onSet]);

  return <></>;
};

export default App;
