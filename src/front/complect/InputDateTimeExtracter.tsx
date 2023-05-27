import { useEffect, useState } from "react";
import KeyboardInput from "./keyboard/KeyboardInput";
import mylib from "./my-lib/MyLib";

type TakeDateComponent = 'NO' | 'year' | 'month' | 'day';
type TakeTimeComponent = 'hour' | 'min' | 'sec' | 'ms';
type TakeTimeDiapason = 'NO' | `${TakeTimeComponent}-${TakeTimeComponent}`;
const itIt = <It,>(it: It) => it;
const howMs = mylib.getMilliseconds();

const takeInPeriod = (num: string | null, finish: string, start?: number) => {
    if (num === null) return '';
    const numFinish = +num.slice(0, finish.length);

    return numFinish > +finish
        ? ` ${finish.padStart(finish.length, '0')}`
        : start !== undefined && numFinish < start
            ? ` ${('' + start).padStart(finish.length, '0')}`
            : ` ${('' + numFinish).padStart(finish.length, '0')}`;
};

export default function InputDateTimeExtracter({
    value,
    takeDate,
    takeTime,
    onComponentsChange,
}: {
    value: string,
    takeDate: TakeDateComponent,
    takeTime: TakeTimeDiapason,
    onComponentsChange?: (timeDelta: number, timeString: string, dateString: string) => void,
}) {
    const [inputValue, setInputValue] = useState(value);
    const [newTimeImagine, setNewTimeImagine] = useState('');

    useEffect(() => {
        const digits = inputValue.split(/\D+/).reverse().filter(itIt);

        let dateString = '';
        let timeString = '';
        let timeDelta = 0;

        let pointer = -1;
        const takeNextDigit = () => {
            const r = digits[++pointer] ? digits[pointer] : null;
            console.log(r);
            return r;
        }

        if (takeTime !== 'NO') {
            const tkHours = takeTime.indexOf('hour');
            const tkMin = takeTime.indexOf('min');
            const tkSec = takeTime.indexOf('sec');
            const tkMs = takeTime.indexOf('ms');

            if ((tkHours === 0 || tkMin === 0 || tkSec === 0 || tkMs > -1)
                && tkMs > -1) {
                const txt = takeInPeriod(takeNextDigit(), '999');
                timeDelta += +txt.trim();
                timeString = txt + timeString;
            }

            if ((tkHours === 0 || tkMin === 0 || tkSec > -1)
                && (tkMs > 0 || tkSec > -1)) {
                const txt = takeInPeriod(takeNextDigit(), '60');
                timeDelta += +txt.trim() * howMs.inSec;
                timeString = txt + timeString;
            }

            if ((tkHours === 0 || tkMin > -1)
                && (tkMs > 0 || tkSec > 0 || tkMin > -1)) {
                const txt = takeInPeriod(takeNextDigit(), '60');
                timeDelta += +txt.trim() * howMs.inMin;
                timeString = txt + timeString;
            }

            if (tkHours > -1
                && (tkMs > 0 || tkSec > 0 || tkMin > 0 || tkHours > -1)) {
                const txt = takeInPeriod(takeNextDigit(), '24');
                timeDelta += +txt.trim() * howMs.inHour;
                timeString = txt + timeString;
            }
            timeString = timeString.trim().replace(/ (\d{3})/, '.$1').replace(/ /g, ':');
        }

        if (takeDate !== 'NO') {
            const isTakeMonth = takeDate === 'month';
            const isTakeDay = takeDate === 'day';

            dateString = (takeInPeriod(takeNextDigit(), '4000', 1970)) + dateString;
            if (isTakeDay || isTakeMonth)
                dateString = (takeInPeriod(takeNextDigit(), '12')) + dateString;
            if (isTakeDay)
                dateString = (takeInPeriod(takeNextDigit(), '31')) + dateString;
            dateString = dateString.trim().replace(/ /g, '.')
        }

        setNewTimeImagine(`${dateString} -- ${timeString}`);

        onComponentsChange?.(timeDelta, timeString, dateString);
    }, [inputValue, takeDate, takeTime]);

    return <>
        {newTimeImagine}
        <KeyboardInput
            className="team-rating-manual-redact-input"
            placeholder="Нецифра - разделитель"
            value={inputValue}
            onChange={setInputValue}
        />
    </>;
}
