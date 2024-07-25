// let isFirst = true;

// const en = '&JESMYL';
// const ru = '&JE5MYL';
// const hash = window.location.hash;

// if (hash.endsWith(en)) window.location.hash = hash.replace(en, ru);
// else if (hash.endsWith(ru)) window.location.hash = hash.replace(ru, en);
// else window.location.hash += ru;

// window.addEventListener('load', () => window.history.pushState({}, ''));

// window.addEventListener('popstate', () => {
//   window.history.pushState({}, '');
//   if (isFirst) isFirst = false;
//   else next();
// });

// const listeners: (() => void)[] = [];
// const next = () => Object.values(listeners).forEach(listener => listener());

// const onBackButton = {
//   listen: (listener: () => void) => {
//     listeners.push(listener);
//     return () => onBackButton.mute(listener);
//   },
//   mute: (listener: () => void) => {
//     listeners.splice(listeners.indexOf(listener), 1);
//   },
// };

// export default onBackButton;
