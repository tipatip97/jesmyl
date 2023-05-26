import indexStorage from "../components/index/indexStorage";

const minTouches = 3;
const maxTouches = 3;
let timeout: any = null;
const lsName = 'theme';
const bodyClass = indexStorage.get(lsName);
const classList = document.body.classList;
if (bodyClass) classList.add(bodyClass);

const toggleTheme = () => {
    const className = 'light-theme';
    classList.toggle(className);
    if (!classList.contains(className))
        indexStorage.rem(lsName);
    else
        indexStorage.set(lsName, className);
};

const listenThemeChanges = () => {
    document.body.addEventListener('touchstart', (event) => {
        const touches = event.touches.length;

        if (touches === 4) {

        } else if (touches >= minTouches && touches <= maxTouches) {
            timeout = setTimeout(toggleTheme, 500);
        } else {
            clearTimeout(timeout);
        }
    });
    document.body.addEventListener('touchend', (event) => {
        const touches = event.touches.length;

        if (touches < minTouches || touches > maxTouches)
            clearTimeout(timeout);
    });
    document.body.addEventListener('keyup', (event) => {
        if (event.code === 'Space' && event.ctrlKey && event.altKey && event.shiftKey)
            toggleTheme();
    });
};

export default listenThemeChanges;