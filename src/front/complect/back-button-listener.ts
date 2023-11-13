let isFirst = true;
if (window.location.hash === '#Jesmyl') window.location.hash = 'Jеsmyl';
else window.location.hash = 'Jesmyl';

window.addEventListener('load', () => window.history.pushState({}, ''));

window.addEventListener('popstate', () => {
    window.history.pushState({}, '');
    if (isFirst) isFirst = false;
    else next();
});

const listeners: (() => void)[] = [];
const next = () => Object.values(listeners).forEach(listener => listener());

const onBackButton = {
    listen: (listener: () => void) => {
        listeners.push(listener);
        return () => onBackButton.mute(listener);
    },
    mute: (listener: () => void) => { listeners.splice(listeners.indexOf(listener), 1) },
};

export default onBackButton;