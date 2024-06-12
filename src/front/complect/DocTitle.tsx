import { useEffect, useMemo } from 'react';

const containerInitState = () => document.createElement('title');

const initTitle = document.title;
const findTitle = () => document.querySelector('head title');
const emptyArr: [] = [];

export const DocTitle = ({ title }: { title: string }) => {
  const container = useMemo(containerInitState, emptyArr);
  const firstTitle = useMemo(findTitle, emptyArr);

  useEffect(() => {
    if (firstTitle !== null) document.head.insertBefore(container, firstTitle);
    else document.head.appendChild(container);

    return () => {
      document.head.removeChild(container);
    };
  }, [container, firstTitle]);

  useEffect(() => {
    container.innerHTML = `${title} &times; ${initTitle}`;
  }, [title, container]);

  return <></>;
};
