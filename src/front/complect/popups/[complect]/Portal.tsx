import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const containerInitState = () => {
  const div = document.createElement('div');

  div.classList.add('full-size', 'absolute');
  return div;
};

export default function Portal({ children }: { children: ReactNode }) {
  const [container] = useState(containerInitState);

  useEffect(() => {
    const parentContainer = document.querySelector('#root');
    if (parentContainer === null) return;
    parentContainer.appendChild(container);

    return () => {
      parentContainer.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
}
