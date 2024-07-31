import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import AppComponent from './AppComponent';
import { lastVisitedRouteLsName } from './AppFooter';

function App() {
  const [isNeedFirstNavigate, setIsNeedFirstNavigate] = useState(true);

  return (
    <>
      {isNeedFirstNavigate && <FirstNaver onSet={setIsNeedFirstNavigate} />}
      <AppComponent />
    </>
  );
}

const FirstNaver = ({ onSet }: { onSet: (is: false) => void }) => {
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    onSet(false);
    if (loc.pathname.length > 1) return;
    navigate(localStorage.getItem(lastVisitedRouteLsName) || '/cm/i');
  }, [loc.pathname.length, navigate, onSet]);

  return <></>;
};

export default App;
