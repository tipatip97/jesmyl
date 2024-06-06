import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 7C6.47715 7 2 7.89543 2 9C2 9.80571 4.38215 10.5001 7.81468 10.8169C8.43288 10.874 8.85702 11.4721 8.92296 12.0894C9.09436 13.6942 10.384 15 12 15C13.616 15 14.9056 13.6942 15.077 12.0894C15.143 11.4721 15.5671 10.874 16.1853 10.8169C19.6179 10.5001 22 9.80571 22 9C22 7.89543 17.5228 7 12 7Z',
  d2: 'M11.9998 12H12.0088',
  d3: 'M4 3H6M8 3H6M6 3V7',
  d4: 'M16 3H18M20 3H18M18 3V7',
  d5: 'M5 21V19.5C5 16.7386 7.23858 14.5 10 14.5M19 21V19.5C19 16.7386 16.7614 14.5 14 14.5',
  d6: 'M12 6.25C9.2046 6.25 6.653 6.47612 4.78185 6.85035C3.85245 7.03623 3.05171 7.26618 2.46525 7.54349C2.17391 7.68124 1.8952 7.8492 1.67894 8.06057C1.46143 8.27316 1.25 8.58918 1.25 9C1.25 9.59561 1.68136 9.98585 2.01183 10.2046C2.37568 10.4455 2.85898 10.643 3.40043 10.8089C4.49395 11.1439 6.00421 11.403 7.74575 11.5638C7.81843 11.5705 7.9061 11.6089 7.99574 11.7184C8.08904 11.8323 8.15875 11.9964 8.1772 12.1691C8.38412 14.1064 9.95354 15.75 12 15.75C14.0465 15.75 15.6159 14.1064 15.8228 12.1691C15.8412 11.9964 15.911 11.8323 16.0043 11.7184C16.0939 11.6089 16.1816 11.5705 16.2542 11.5638C17.9958 11.403 19.506 11.1439 20.5996 10.8089C21.141 10.643 21.6243 10.4455 21.9882 10.2046C22.3186 9.98585 22.75 9.59561 22.75 9C22.75 8.58918 22.5386 8.27316 22.3211 8.06057C22.1048 7.8492 21.8261 7.68124 21.5348 7.54349C20.9483 7.26618 20.1476 7.03623 19.2182 6.85035C17.347 6.47612 14.7954 6.25 12 6.25ZM11.9955 11C11.4457 11 11 11.4477 11 12C11 12.5523 11.4457 13 11.9955 13H12.0045C12.5543 13 13 12.5523 13 12C13 11.4477 12.5543 11 12.0045 11H11.9955Z',
  d7: 'M3 3C3 2.44772 3.44772 2 4 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7V7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7V4H4C3.44772 4 3 3.55228 3 3Z',
  d8: 'M15 3C15 2.44772 15.4477 2 16 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H19V7C19 7.55228 18.5523 8 18 8C17.4477 8 17 7.55228 17 7V4H16C15.4477 4 15 3.55228 15 3Z',
  d9: 'M7.69945 16.2283C8.1059 15.942 8.23344 15.3069 7.94087 14.905C7.62408 14.4698 7.04374 14.2509 6.60045 14.5563C5.02968 15.6382 4 17.4493 4 19.5009V21.0009C4 21.5532 4.44772 22.0009 5 22.0009C5.55228 22.0009 6 21.5532 6 21.0009V19.5009C6 18.1481 6.67154 16.9522 7.69945 16.2283Z',
  d10: 'M17.4 14.5566C16.9568 14.2512 16.3764 14.47 16.0595 14.9052C15.767 15.3071 15.8945 15.9422 16.3009 16.2285C17.3286 16.9524 18 18.1483 18 19.5009V21.0009C18 21.5532 18.4477 22.0009 19 22.0009C19.5523 22.0009 20 21.5532 20 21.0009V19.5009C20 17.4495 18.9705 15.6386 17.4 14.5566Z',
  d11: 'M4.78185 6.85035C6.653 6.47612 9.2046 6.25 12 6.25C14.7954 6.25 17.347 6.47612 19.2182 6.85035C20.1476 7.03623 20.9483 7.26618 21.5348 7.54349C21.8261 7.68124 22.1048 7.8492 22.3211 8.06057C22.5386 8.27316 22.75 8.58918 22.75 9C22.75 9.59561 22.3186 9.98585 21.9882 10.2046C21.6243 10.4455 21.141 10.643 20.5996 10.8089C19.506 11.1439 17.9958 11.403 16.2542 11.5638C16.1816 11.5705 16.0939 11.6089 16.0043 11.7184C15.911 11.8323 15.8412 11.9964 15.8228 12.1691C15.6159 14.1064 14.0465 15.75 12 15.75C9.95354 15.75 8.38412 14.1064 8.1772 12.1691C8.15875 11.9964 8.08904 11.8323 7.99574 11.7184C7.9061 11.6089 7.81843 11.5705 7.74575 11.5638C6.00421 11.403 4.49395 11.1439 3.40043 10.8089C2.85898 10.643 2.37568 10.4455 2.01183 10.2046C1.68136 9.98585 1.25 9.59561 1.25 9C1.25 8.58918 1.46143 8.27316 1.67894 8.06057C1.8952 7.8492 2.17391 7.68124 2.46525 7.54349C3.05171 7.26618 3.85245 7.03623 4.78185 6.85035Z',
  d12: 'M11 12C11 11.4477 11.4457 11 11.9955 11H12.0045C12.5543 11 13 11.4477 13 12C13 12.5523 12.5543 13 12.0045 13H11.9955C11.4457 13 11 12.5523 11 12Z',
  d13: 'M3 3C3 2.44772 3.44772 2 4 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7V6.51268C6.27662 6.5945 5.60541 6.69375 5 6.80797V4H4C3.44772 4 3 3.55228 3 3ZM19 6.80797V4H20C20.5523 4 21 3.55228 21 3C21 2.44772 20.5523 2 20 2H16C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4H17V6.51268C17.7234 6.5945 18.3946 6.69375 19 6.80797Z',
  d14: 'M12 7C6.47715 7 2 7.89543 2 9C2 9.89553 4.94289 10.6536 9 10.9084V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V10.9084C19.0571 10.6536 22 9.89553 22 9C22 7.89543 17.5228 7 12 7Z',
  d15: 'M3 3H6M9 3H6M6 3V7',
  d16: 'M15 3H18M21 3H18M18 3V7',
  d17: 'M5 21V19.5C5 16.7386 7.73858 14.5 10.5 14.5M19 21V19.5C19 16.7386 16.2614 14.5 13.5 14.5',
  d18: 'M12 6.75C9.2046 6.75 6.653 6.97612 4.78185 7.35035C3.85245 7.53623 3.05171 7.76618 2.46525 8.04349C2.17391 8.18124 1.8952 8.3492 1.67894 8.56057C1.46143 8.77316 1.25 9.08918 1.25 9.5C1.25 10.1566 1.76984 10.5656 2.14097 10.7854C2.56571 11.037 3.1357 11.2449 3.78431 11.4189C4.94177 11.7293 6.48652 11.9669 8.25 12.107V12.5C8.25 14.5711 9.92893 16.25 12 16.25C14.0711 16.25 15.75 14.5711 15.75 12.5V12.107C17.5135 11.9669 19.0582 11.7293 20.2157 11.4189C20.8643 11.2449 21.4343 11.037 21.859 10.7854C22.2302 10.5656 22.75 10.1566 22.75 9.5C22.75 9.08918 22.5386 8.77316 22.3211 8.56057C22.1048 8.3492 21.8261 8.18124 21.5348 8.04349C20.9483 7.76618 20.1476 7.53623 19.2182 7.35035C17.347 6.97612 14.7954 6.75 12 6.75ZM11.9955 11.5C11.4457 11.5 11 11.9477 11 12.5C11 13.0523 11.4457 13.5 11.9955 13.5H12.0045C12.5543 13.5 13 13.0523 13 12.5C13 11.9477 12.5543 11.5 12.0045 11.5H11.9955Z',
  d19: 'M5 4.5H3V2.5H9V4.5H7V7.5H5V4.5Z',
  d20: 'M17 4.5H15V2.5H21V4.5H19V7.5H17V4.5Z',
  d21: 'M7.29985 14.8418C6.85182 15.0876 6.43278 15.381 6.05442 15.7134C4.85412 16.768 4 18.2762 4 20.0002V21.5002H6V20.0002C6 18.9627 6.51517 17.9709 7.37451 17.2159C7.72447 16.9084 8.12102 16.6502 8.54356 16.4519C8.03127 16.0035 7.60695 15.457 7.29985 14.8418Z',
  d22: 'M15.4564 16.4519C15.879 16.6502 16.2755 16.9084 16.6255 17.2159C17.4848 17.9709 18 18.9627 18 20.0002V21.5002H20V20.0002C20 18.2762 19.1459 16.768 17.9456 15.7134C17.5672 15.381 17.1482 15.0876 16.7001 14.8418C16.3931 15.457 15.9687 16.0035 15.4564 16.4519Z',
};

export const IconDroneStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-stroke-rounded IconDroneStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDroneDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-duotone-rounded IconDroneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDroneTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-twotone-rounded IconDroneTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconDroneSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-solid-rounded IconDroneSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDroneBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-bulk-rounded IconDroneBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconDroneStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-stroke-sharp IconDroneStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDroneSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drone-solid-sharp IconDroneSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDrone: TheIconSelfPack = {
  name: 'Drone',
  StrokeRounded: IconDroneStrokeRounded,
  DuotoneRounded: IconDroneDuotoneRounded,
  TwotoneRounded: IconDroneTwotoneRounded,
  SolidRounded: IconDroneSolidRounded,
  BulkRounded: IconDroneBulkRounded,
  StrokeSharp: IconDroneStrokeSharp,
  SolidSharp: IconDroneSolidSharp,
};