import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 22V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V22',
  d2: 'M9 22V20C9 18.3431 10.3431 17 12 17C13.6569 17 15 18.3431 15 20V22',
  d3: 'M8 13V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12V13',
  d4: 'M9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9',
  d5: 'M12 4V2',
  d6: 'M12 12V11',
  d7: 'M12 8V7',
  d8: 'M12 17V15',
  d9: 'M8 19H9M15 19H16',
  d10: 'M9 7V9L12 8L15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7Z',
  d11: 'M5 22V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V22H15V20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20V22H5Z',
  d12: 'M9 22V20C9 18.3431 10.3431 17 12 17M15 22V20C15 18.3431 13.6569 17 12 17M12 17V15M8 19H9M15 19H16',
  d13: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.32501C14.4617 3.67247 15.75 5.18578 15.75 7V8.61234C15.8529 8.69689 15.9525 8.78441 16.0487 8.8746C17.0713 9.83394 17.75 11.1465 17.75 12.5V15C17.75 15.4142 17.4142 15.75 17 15.75C16.5858 15.75 16.25 15.4142 16.25 15V12.5C16.25 11.6443 15.8094 10.7069 15.0224 9.96855C14.9146 9.86741 14.8012 9.77096 14.6828 9.67983C14.5968 9.63964 14.5197 9.5836 14.4552 9.51549C13.7563 9.04263 12.9082 8.75 12 8.75C11.0918 8.75 10.2437 9.04263 9.54477 9.51549C9.48029 9.5836 9.40318 9.63964 9.31718 9.67983C9.19877 9.77096 9.08542 9.86741 8.97761 9.96855C8.19056 10.7069 7.75 11.6443 7.75 12.5V15C7.75 15.4142 7.41421 15.75 7 15.75C6.58579 15.75 6.25 15.4142 6.25 15V12.5C6.25 11.1465 6.92873 9.83394 7.95132 8.8746C8.04746 8.78441 8.14708 8.69689 8.25 8.61234V7C8.25 5.18578 9.53832 3.67247 11.25 3.32501V2C11.25 1.58579 11.5858 1.25 12 1.25ZM9.75 7.70657C10.22 7.50911 10.7232 7.36854 11.25 7.29916V7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V7.29916C13.2768 7.36854 13.78 7.50911 14.25 7.70657V7C14.25 5.75736 13.2426 4.75 12 4.75C10.7574 4.75 9.75 5.75736 9.75 7V7.70657Z',
  d14: 'M12 10.25C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.0154 12.75 11.0231 12.7502 11.0283C12.7553 11.1746 12.8556 11.2892 13 11.3137C13.0051 11.3145 13.0148 11.3158 13.0342 11.3184C16.8255 11.824 19.75 15.0705 19.75 19V22C19.75 22.4142 19.4142 22.75 19 22.75H16.35C16.0672 22.75 15.9257 22.75 15.8379 22.6621C15.75 22.5743 15.75 22.4328 15.75 22.15V20C15.75 19.8646 15.8565 19.75 15.992 19.75H16C16.4142 19.75 16.75 19.4142 16.75 19C16.75 18.5858 16.4142 18.25 16 18.25H15.679C15.5092 18.25 15.4243 18.25 15.3576 18.2141C15.291 18.1783 15.2385 18.0985 15.1334 17.939C14.682 17.2541 14.0121 16.726 13.2229 16.4539C12.9819 16.3708 12.8615 16.3293 12.8057 16.2511C12.75 16.173 12.75 16.0602 12.75 15.8346V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V15.8346C11.25 16.0602 11.25 16.173 11.1943 16.2511C11.1385 16.3293 11.0181 16.3708 10.7771 16.4539C9.98794 16.726 9.31803 17.2541 8.86663 17.939C8.76151 18.0985 8.70895 18.1783 8.64235 18.2141C8.57575 18.25 8.49084 18.25 8.32102 18.25H8C7.58579 18.25 7.25 18.5858 7.25 19C7.25 19.4142 7.58579 19.75 8 19.75H8.00802C8.14345 19.75 8.25 19.8646 8.25 20V22.15C8.25 22.4328 8.25 22.5743 8.16213 22.6621C8.07426 22.75 7.93284 22.75 7.65 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V19C4.25 15.0705 7.17453 11.824 10.9658 11.3184C10.9852 11.3158 10.9949 11.3145 11 11.3137C11.1444 11.2892 11.2447 11.1746 11.2498 11.0283C11.25 11.0231 11.25 11.0154 11.25 11C11.25 10.5858 11.5858 10.25 12 10.25Z',
  d15: 'M14.25 20C14.25 18.7574 13.2426 17.75 12 17.75C10.7574 17.75 9.75 18.7574 9.75 20V22.15C9.75 22.4328 9.75 22.5743 9.83787 22.6621C9.92574 22.75 10.0672 22.75 10.35 22.75H13.65C13.9328 22.75 14.0743 22.75 14.1621 22.6621C14.25 22.5743 14.25 22.4328 14.25 22.15V20Z',
  d16: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.32501C14.4617 3.67247 15.75 5.18578 15.75 7V8.61234C15.35 8.24411 14.5833 7.85506 14.25 7.70657V7C14.25 5.75736 13.2426 4.75 12 4.75C10.7574 4.75 9.75 5.75736 9.75 7V7.70657C9.19707 7.89963 8.51961 8.39086 8.25 8.61234V7C8.25 5.18578 9.53832 3.67247 11.25 3.32501V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d17: 'M6.25 13.8038C6.69249 13.3144 7.19656 12.8818 7.75 12.5182V12.5C7.75 11.6443 8.19056 10.7069 8.97761 9.96855C9.08542 9.86741 9.19877 9.77096 9.31718 9.67983C9.40318 9.63964 9.48029 9.5836 9.54477 9.51549C10.2437 9.04263 11.0918 8.75 12 8.75C12.9082 8.75 13.7563 9.04263 14.4552 9.51549C14.5197 9.5836 14.5968 9.63964 14.6828 9.67983C14.8012 9.77096 14.9146 9.86741 15.0224 9.96855C15.8094 10.7069 16.25 11.6443 16.25 12.5V12.5182C16.8034 12.8818 17.3075 13.3144 17.75 13.8038V12.5C17.75 11.1465 17.0713 9.83394 16.0487 8.8746C15.9525 8.78441 15.8529 8.69689 15.75 8.61234C15.35 8.24411 14.5833 7.85506 14.25 7.70657C13.78 7.50911 13.2768 7.36854 12.75 7.29916V7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V7.29916C10.7232 7.36854 10.22 7.50911 9.75 7.70657C9.19707 7.89963 8.51961 8.39086 8.25 8.61234C8.14708 8.69689 8.04746 8.78441 7.95132 8.8746C6.92873 9.83394 6.25 11.1465 6.25 12.5V13.8038Z',
  d18: 'M8 13.5V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12V13.5',
  d19: 'M9 9.5V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9.5',
  d20: 'M12 12V10',
  d21: 'M12 8V6',
  d22: 'M7 19H9M15 19H17',
  d23: 'M12 8.5C10.2051 8.5 8.75 9.95507 8.75 11.75V13.25H7.25V11.75C7.25 9.12665 9.37665 7 12 7C14.6234 7 16.75 9.12665 16.75 11.75V13.25H15.25V11.75C15.25 9.95507 13.7949 8.5 12 8.5Z',
  d24: 'M12 4.5C10.7574 4.5 9.75 5.50736 9.75 6.75V9.25H8.25V6.75C8.25 4.67893 9.92893 3 12 3C14.0711 3 15.75 4.67893 15.75 6.75V9.25H14.25V6.75C14.25 5.50736 13.2426 4.5 12 4.5Z',
  d25: 'M12.75 1.75V3.75H11.25V1.75H12.75Z',
  d26: 'M12.75 9.75V11.75H11.25V9.75H12.75Z',
  d27: 'M12.75 5.75V7.75H11.25V5.75H12.75Z',
  d28: 'M8.68252 17.75C9.19905 16.7729 10.1346 16.0514 11.25 15.825V14.5H12.75V15.825C13.8654 16.0514 14.801 16.7729 15.3175 17.75H17V19.25H15.7418C15.7472 19.3326 15.75 19.416 15.75 19.5V22.25H19.75V18.5C19.75 14.2198 16.2802 10.75 12 10.75C7.71979 10.75 4.25 14.2198 4.25 18.5V22.25H8.25V19.5C8.25 19.416 8.25276 19.3326 8.2582 19.25H7V17.75H8.68252Z',
  d29: 'M14.25 22.25H9.75V19.5C9.75 18.2574 10.7574 17.25 12 17.25C13.2426 17.25 14.25 18.2574 14.25 19.5V22.25Z',
};

export const IconChryslerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-stroke-rounded IconChryslerStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-duotone-rounded IconChryslerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-twotone-rounded IconChryslerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-solid-rounded IconChryslerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-bulk-rounded IconChryslerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-stroke-sharp IconChryslerStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChryslerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chrysler-solid-sharp IconChryslerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChrysler: TheIconSelfPack = {
  name: 'Chrysler',
  StrokeRounded: IconChryslerStrokeRounded,
  DuotoneRounded: IconChryslerDuotoneRounded,
  TwotoneRounded: IconChryslerTwotoneRounded,
  SolidRounded: IconChryslerSolidRounded,
  BulkRounded: IconChryslerBulkRounded,
  StrokeSharp: IconChryslerStrokeSharp,
  SolidSharp: IconChryslerSolidSharp,
};