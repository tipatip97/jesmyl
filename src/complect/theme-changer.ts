import { indexStorage } from "../store/jstorages";
import mylib from "./my-lib/MyLib";

const minTouches = 3;
const maxTouches = 3;
let timeout: any = null;
const lsName = 'theme';
const bodyClass = indexStorage.get(lsName);
const classList = document.body.classList;
if (bodyClass) classList.add(bodyClass);

const listenThemeChanges = () => {
    document.body.addEventListener('touchstart', (event) => {
        const touches = event.touches.length;

        if (touches === 4) {
            mylib.conslBox({ toggle: true });

        } else if (touches >= minTouches && touches <= maxTouches) {
            timeout = setTimeout(() => {
                const className = 'light-theme';
                classList.toggle(className);
                if (!classList.contains(className))
                    indexStorage.rem(lsName);
                else
                    indexStorage.set(lsName, className);
            }, 500);
        } else {
            clearTimeout(timeout);
        }
    });
    document.body.addEventListener('touchend', (event) => {
        const touches = event.touches.length;

        if (touches < minTouches || touches > maxTouches)
            clearTimeout(timeout);
    });
};

export default listenThemeChanges;