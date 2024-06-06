import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13H20C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15V17C22 17.9428 22 18.4142 21.7071 18.7071C21.4142 19 20.9428 19 20 19H4C3.05719 19 2.58579 19 2.29289 18.7071C2 18.4142 2 17.9428 2 17V15Z',
  d2: 'M11 16L13 16',
  d3: 'M19.5 19C18.7 20.6 19.5 21.6667 20 22M4.5 19C5.3 20.6 4.5 21.6667 4 22',
  d4: 'M4 13V2',
  d5: 'M20 13V2',
  d6: 'M4 3.50005L8.08579 3.50003C8.28215 3.50003 8.38034 3.50003 8.4645 3.4688C8.54867 3.43757 8.63373 3.36436 8.80385 3.21795C10.6907 1.59404 13.3093 1.59403 15.1961 3.21791C15.3663 3.36432 15.4513 3.43753 15.5355 3.46876C15.6197 3.49999 15.7178 3.49999 15.9142 3.49999H20',
  d7: 'M9 7L10 6',
  d8: 'M10 9.5L12 7.5',
  d9: 'M21.001 13H3.00098C2.44869 13 2.00098 13.4477 2.00098 14V18C2.00098 18.5523 2.44869 19 3.00098 19H21.001C21.5533 19 22.001 18.5523 22.001 18V14C22.001 13.4477 21.5533 13 21.001 13Z',
  d10: 'M2.00098 15C2.00098 14.0572 2.00098 13.5858 2.29387 13.2929C2.58677 13 3.05817 13 4.00098 13H20.001C20.9438 13 21.4152 13 21.7081 13.2929C22.001 13.5858 22.001 14.0572 22.001 15V17C22.001 17.9428 22.001 18.4142 21.7081 18.7071C21.4152 19 20.9438 19 20.001 19H4.00098C3.05817 19 2.58677 19 2.29387 18.7071C2.00098 18.4142 2.00098 17.9428 2.00098 17V15Z',
  d11: 'M11.001 16H13.001',
  d12: 'M19.501 19C18.701 20.6 19.501 21.6667 20.001 22M4.50098 19C5.30098 20.6 4.50098 21.6667 4.00098 22',
  d13: 'M4.00098 13V2',
  d14: 'M20.001 13V2',
  d15: 'M4.00098 3.50004L8.08677 3.50002C8.28313 3.50002 8.38132 3.50002 8.46548 3.46879C8.54965 3.43756 8.63471 3.36435 8.80483 3.21794C10.6917 1.59403 13.3103 1.59402 15.1971 3.2179C15.3673 3.36431 15.4523 3.43752 15.5365 3.46875C15.6207 3.49998 15.7188 3.49998 15.9152 3.49998H20.001',
  d16: 'M9.00098 7L10.001 6',
  d17: 'M10.001 9.5L12.001 7.5',
  d18: 'M4.00001 12.75L3.95526 12.75C3.52244 12.7499 3.12561 12.7499 2.8028 12.7933C2.44732 12.8411 2.07159 12.9535 1.76257 13.2626C1.45355 13.5716 1.3411 13.9473 1.29331 14.3028C1.24991 14.6256 1.24995 15.0224 1.25 15.4552L1.25001 15.5L1.25001 17.5L1.25 17.5447C1.24995 17.9776 1.24991 18.3744 1.29331 18.6972C1.3411 19.0527 1.45355 19.4284 1.76257 19.7374C2.07159 20.0465 2.44732 20.1589 2.8028 20.2067C3.12561 20.2501 3.52244 20.25 3.95525 20.25H3.95526L4.00001 20.25L20.0448 20.25C20.4776 20.25 20.8744 20.2501 21.1972 20.2067C21.5527 20.1589 21.9284 20.0465 22.2374 19.7374C22.5465 19.4284 22.6589 19.0527 22.7067 18.6972C22.7501 18.3744 22.7501 17.9776 22.75 17.5447V15.4552C22.7501 15.0224 22.7501 14.6256 22.7067 14.3028C22.6589 13.9473 22.5465 13.5716 22.2374 13.2626C21.9284 12.9535 21.5527 12.8411 21.1972 12.7933C20.8744 12.7499 20.4776 12.7499 20.0448 12.75L4.00001 12.75ZM11 15.75C10.5858 15.75 10.25 16.0858 10.25 16.5C10.25 16.9142 10.5858 17.25 11 17.25L13 17.25C13.4142 17.25 13.75 16.9142 13.75 16.5C13.75 16.0858 13.4142 15.75 13 15.75L11 15.75Z',
  d19: 'M4.05289 18.6058C4.54687 18.3588 5.14754 18.559 5.39453 19.053C5.90303 20.07 5.93749 21.0059 5.69012 21.7797C5.45364 22.5195 4.97927 23.0493 4.55481 23.3323C4.09528 23.6386 3.47441 23.5144 3.16806 23.0549C2.8617 22.5954 2.98588 21.9745 3.44541 21.6682C3.52095 21.6178 3.69658 21.4476 3.78509 21.1707C3.86272 20.9279 3.89718 20.5304 3.60568 19.9474C3.35869 19.4535 3.55891 18.8528 4.05289 18.6058ZM19.9473 18.6058C20.4413 18.8528 20.6415 19.4535 20.3945 19.9474C20.103 20.5304 20.1375 20.9279 20.2151 21.1707C20.3036 21.4476 20.4793 21.6178 20.5548 21.6682C21.0143 21.9745 21.1385 22.5954 20.8322 23.0549C20.5258 23.5144 19.9049 23.6386 19.4454 23.3323C19.0209 23.0493 18.5466 22.5195 18.3101 21.7797C18.0627 21.0059 18.0972 20.07 18.6057 19.053C18.8527 18.559 19.4533 18.3588 19.9473 18.6058Z',
  d20: 'M4 1.5C4.55228 1.5 5 1.94772 5 2.5V3.00005L8.105 3.00002C8.11907 2.98794 8.13445 2.97471 8.15154 2.96C10.4134 1.01336 13.5866 1.01334 15.8485 2.95996C15.8655 2.97466 15.8809 2.9879 15.895 2.99997L19 2.99999V2.5C19 1.94772 19.4477 1.5 20 1.5C20.5523 1.5 21 1.94772 21 2.5V13.5C21 14.0523 20.5523 14.5 20 14.5C19.4477 14.5 19 14.0523 19 13.5V4.99999H15.9142C15.9032 4.99999 15.8904 5.00013 15.8759 5.00028C15.7383 5.00174 15.453 5.00478 15.1876 4.9063C15.01 4.8404 14.8762 4.74622 14.7912 4.68134C14.7142 4.62255 14.6303 4.55031 14.5573 4.48746L14.5438 4.47587C13.032 3.17471 10.9681 3.17472 9.45616 4.4759C9.45172 4.47972 9.44724 4.48358 9.44271 4.48748C9.36971 4.55034 9.28581 4.62258 9.20881 4.68137C9.12383 4.74626 8.98998 4.84044 8.81239 4.90634C8.54699 5.00482 8.26173 5.00179 8.12406 5.00032C8.10961 5.00017 8.09679 5.00003 8.08579 5.00003L5 5.00005V13.5C5 14.0523 4.55228 14.5 4 14.5C3.44772 14.5 3 14.0523 3 13.5V2.5C3 1.94772 3.44772 1.5 4 1.5Z',
  d21: 'M10.5303 5.96967C10.8232 6.26256 10.8232 6.73744 10.5303 7.03033L9.53033 8.03033C9.23744 8.32322 8.76256 8.32322 8.46967 8.03033C8.17678 7.73744 8.17678 7.26256 8.46967 6.96967L9.46967 5.96967C9.76256 5.67678 10.2374 5.67678 10.5303 5.96967Z',
  d22: 'M12.5303 7.46967C12.8232 7.76256 12.8232 8.23744 12.5303 8.53033L10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303C9.17678 10.2374 9.17678 9.76256 9.46967 9.46967L11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967Z',
  d23: 'M3.95526 12.75L4.00001 12.75L20.0448 12.75C20.4776 12.75 20.8744 12.7499 21.1972 12.7933C21.5527 12.8411 21.9284 12.9535 22.2374 13.2626C22.5465 13.5716 22.6589 13.9473 22.7067 14.3028C22.7501 14.6256 22.7501 15.0224 22.75 15.4553V17.5448C22.7501 17.9776 22.7501 18.3744 22.7067 18.6972C22.6589 19.0527 22.5465 19.4284 22.2374 19.7374C21.9284 20.0465 21.5527 20.1589 21.1972 20.2067C20.8744 20.2501 20.4776 20.2501 20.0448 20.25L4.00001 20.25L3.95526 20.25H3.95525C3.52244 20.2501 3.12561 20.2501 2.8028 20.2067C2.44732 20.1589 2.07159 20.0465 1.76257 19.7374C1.45355 19.4284 1.3411 19.0527 1.29331 18.6972C1.24991 18.3744 1.24995 17.9776 1.25 17.5448L1.25001 17.5V15.5L1.25 15.4553C1.24995 15.0224 1.24991 14.6256 1.29331 14.3028C1.3411 13.9473 1.45355 13.5716 1.76257 13.2626C2.07159 12.9535 2.44732 12.8411 2.8028 12.7933C3.12561 12.7499 3.52244 12.75 3.95526 12.75Z',
  d24: 'M10.25 16.5C10.25 16.0858 10.5858 15.75 11 15.75L13 15.75C13.4142 15.75 13.75 16.0858 13.75 16.5C13.75 16.9142 13.4142 17.25 13 17.25L11 17.25C10.5858 17.25 10.25 16.9142 10.25 16.5Z',
  d25: 'M12.5303 8.53033C12.8232 8.23744 12.8232 7.76256 12.5303 7.46967C12.2374 7.17678 11.7626 7.17678 11.4697 7.46967L9.46967 9.46967C9.17678 9.76256 9.17678 10.2374 9.46967 10.5303C9.76256 10.8232 10.2374 10.8232 10.5303 10.5303L12.5303 8.53033ZM10.5303 7.03033C10.8232 6.73744 10.8232 6.26256 10.5303 5.96967C10.2374 5.67678 9.76256 5.67678 9.46967 5.96967L8.46967 6.96967C8.17678 7.26256 8.17678 7.73744 8.46967 8.03033C8.76256 8.32322 9.23744 8.32322 9.53033 8.03033L10.5303 7.03033Z',
  d26: 'M3.73505 20.25C3.80726 20.2502 3.88072 20.2502 3.95525 20.2502L5.793 20.2502C5.88432 20.8057 5.8367 21.3211 5.69012 21.7797C5.45364 22.5194 4.97927 23.0492 4.55481 23.3322C4.09528 23.6386 3.47441 23.5144 3.16806 23.0549C2.8617 22.5953 2.98588 21.9745 3.44541 21.6681C3.52095 21.6177 3.69658 21.4476 3.78509 21.1707C3.84847 20.9724 3.88307 20.6711 3.73505 20.25Z',
  d27: 'M20.2652 20.25C20.1171 20.6711 20.1517 20.9724 20.2151 21.1707C20.3036 21.4476 20.4793 21.6177 20.5548 21.6681C21.0143 21.9745 21.1385 22.5953 20.8322 23.0549C20.5258 23.5144 19.9049 23.6386 19.4454 23.3322C19.0209 23.0492 18.5466 22.5194 18.3101 21.7797C18.1635 21.3211 18.1159 20.8057 18.2072 20.2502L20.0448 20.2502C20.1194 20.2502 20.1929 20.2502 20.2652 20.25Z',
  d28: 'M3.95526 12.75C3.60692 12.75 3.28189 12.7499 3 12.7725V2.5C3 1.94771 3.44772 1.5 4 1.5C4.55228 1.5 5 1.94771 5 2.5V3.00005L8.105 3.00002L8.15154 2.96C10.4134 1.01336 13.5866 1.01334 15.8485 2.95996L15.895 2.99997L19 2.99999V2.5C19 1.94771 19.4477 1.5 20 1.5C20.5523 1.5 21 1.94771 21 2.5V12.7725C20.7181 12.7499 20.3931 12.75 20.0448 12.75H19V4.99999H15.9142L15.8759 5.00028C15.7383 5.00174 15.453 5.00478 15.1876 4.9063C15.01 4.8404 14.8762 4.74622 14.7912 4.68134C14.7142 4.62255 14.6303 4.55031 14.5573 4.48746L14.5438 4.47587C13.032 3.17471 10.9681 3.17472 9.45616 4.4759L9.44271 4.48748C9.36971 4.55034 9.28581 4.62258 9.20881 4.68137C9.12383 4.74626 8.98998 4.84044 8.81239 4.90634C8.54699 5.00482 8.26173 5.00179 8.12406 5.00032L8.08579 5.00003L5 5.00005V12.75L3.95526 12.75Z',
  d29: 'M22 13H2V19H22V13Z',
  d30: 'M18.5 19L20 22M5.5 19L4 22',
  d31: 'M4 3.50005L8.5 3.50003C10.5 1.50002 13.5 1.5 15.5 3.49999H20',
  d32: 'M8.5 7.5L10.5 5.5',
  d33: 'M9 10.5L13 6.5',
  d34: 'M2 12.5C1.58579 12.5 1.25 12.8358 1.25 13.25L1.25 19.25C1.25 19.6642 1.58579 20 2 20L22 20C22.4142 20 22.75 19.6642 22.75 19.25V13.25C22.75 12.8358 22.4142 12.5 22 12.5L2 12.5ZM11 17L13 17V15.5L11 15.5V17Z',
  d35: 'M3.10596 21.8557L4.60596 18.8557L6.39481 19.7501L4.89481 22.7501L3.10596 21.8557ZM19.106 22.7501L17.606 19.7501L19.3948 18.8557L20.8948 21.8557L19.106 22.7501Z',
  d36: 'M5 2.24988V13.2499H3V2.24988H5Z',
  d37: 'M21 2.24988V13.2499H19V2.24988H21Z',
  d38: 'M14.7929 4.45697C13.1834 2.84751 10.8166 2.84751 9.20711 4.457L8.91422 4.7499L4.00001 4.74992L4 2.74992L8.10543 2.7499C10.3848 0.749888 13.6152 0.749866 15.8946 2.74986H20V4.74986H15.0858L14.7929 4.45697Z',
  d39: 'M11.0304 6.28026L9.03039 8.28026L7.96973 7.2196L9.96973 5.2196L11.0304 6.28026Z',
  d40: 'M13.5304 7.28026L9.53039 11.2803L8.46973 10.2196L12.4697 6.2196L13.5304 7.28026Z',
};

export const IconDressingTable03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-stroke-rounded IconDressingTable03StrokeRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconDressingTable03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-duotone-rounded IconDressingTable03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDressingTable03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-twotone-rounded IconDressingTable03TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDressingTable03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-solid-rounded IconDressingTable03SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDressingTable03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-bulk-rounded IconDressingTable03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDressingTable03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-stroke-sharp IconDressingTable03StrokeSharp"
    >
      <path 
        d={d.d29} 
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
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDressingTable03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dressing-table-03-solid-sharp IconDressingTable03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d40} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDressingTable03: TheIconSelfPack = {
  name: 'DressingTable03',
  StrokeRounded: IconDressingTable03StrokeRounded,
  DuotoneRounded: IconDressingTable03DuotoneRounded,
  TwotoneRounded: IconDressingTable03TwotoneRounded,
  SolidRounded: IconDressingTable03SolidRounded,
  BulkRounded: IconDressingTable03BulkRounded,
  StrokeSharp: IconDressingTable03StrokeSharp,
  SolidSharp: IconDressingTable03SolidSharp,
};