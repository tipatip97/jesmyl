import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children }: { children: ReactNode }) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    const parentContainer = document.querySelector('.application-container');
    parentContainer?.appendChild(container);

    return () => {
      parentContainer?.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
}
