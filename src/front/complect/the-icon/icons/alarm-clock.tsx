import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 19L3 21M19 19L21 21',
  d2: 'M19 3.5697L19.5955 3.27195C20.4408 2.84932 20.7583 2.89769 21.4303 3.5697C22.1023 4.2417 22.1507 4.55924 21.728 5.4045L21.4303 6M5 3.5697L4.4045 3.27195C3.55924 2.84932 3.2417 2.89769 2.5697 3.5697C1.89769 4.2417 1.84932 4.55924 2.27195 5.4045L2.5697 6',
  d3: 'M12 9.5V13.5L14 15.5',
  d4: 'M12 3.5V2',
  d5: 'M10 2H14',
  d6: 'M5.70711 18.4179C6.09763 18.8084 6.09763 19.4416 5.70711 19.8321L3.70711 21.8321C3.31658 22.2226 2.68342 22.2226 2.29289 21.8321C1.90237 21.4416 1.90237 20.8084 2.29289 20.4179L4.29289 18.4179C4.68342 18.0274 5.31658 18.0274 5.70711 18.4179ZM18.2929 18.4179C18.6834 18.0274 19.3166 18.0274 19.7071 18.4179L21.7071 20.4179C22.0976 20.8084 22.0976 21.4416 21.7071 21.8321C21.3166 22.2226 20.6834 22.2226 20.2929 21.8321L18.2929 19.8321C17.9024 19.4416 17.9024 18.8084 18.2929 18.4179Z',
  d7: 'M3.2632 2.14786C3.87364 2.0497 4.41956 2.28636 4.85156 2.50236L5.44705 2.80011C5.94103 3.0471 6.14126 3.64777 5.89427 4.14175C5.64728 4.63573 5.0466 4.83595 4.55263 4.58897L3.95713 4.29122C3.76703 4.19617 3.65505 4.15276 3.58683 4.13373L3.58245 4.13253L3.57882 4.13495C3.5202 4.17437 3.42732 4.25097 3.27664 4.40164C3.12597 4.55232 3.04937 4.64519 3.00995 4.70382L3.00753 4.70745L3.00873 4.71183C3.02776 4.78005 3.07117 4.89204 3.16622 5.08213L3.46396 5.67762C3.71095 6.1716 3.51073 6.77228 3.01675 7.01927C2.52277 7.26626 1.9221 7.06603 1.67511 6.57205L1.37736 5.97656C1.16136 5.54456 0.924695 4.99864 1.02286 4.3882C1.12115 3.77699 1.51765 3.33221 1.86243 2.98743C2.20721 2.64265 2.65199 2.24615 3.2632 2.14786Z',
  d8: 'M20.4128 4.13373C20.3446 4.15276 20.2326 4.19617 20.0425 4.29122L19.4471 4.58897C18.9531 4.83595 18.3524 4.63573 18.1054 4.14175C17.8584 3.64777 18.0586 3.0471 18.5526 2.80011L19.1481 2.50236C19.5801 2.28636 20.126 2.0497 20.7365 2.14786C21.3477 2.24615 21.7925 2.64265 22.1372 2.98743C22.482 3.33221 22.8785 3.77699 22.9768 4.3882C23.075 4.99864 22.8383 5.54456 22.6223 5.97656L22.3246 6.57205C22.0776 7.06603 21.4769 7.26626 20.9829 7.01927C20.4889 6.77228 20.2887 6.17161 20.5357 5.67763L20.8335 5.08213C20.9285 4.89204 20.9719 4.78005 20.9909 4.71183L20.9921 4.70745L20.9897 4.70382C20.9503 4.64519 20.8737 4.55232 20.723 4.40164C20.5724 4.25097 20.4795 4.17437 20.4209 4.13495L20.4172 4.13253L20.4128 4.13373Z',
  d9: 'M12 3.375C6.61522 3.375 2.25 7.74022 2.25 13.125C2.25 18.5098 6.61522 22.875 12 22.875C17.3848 22.875 21.75 18.5098 21.75 13.125C21.75 7.74022 17.3848 3.375 12 3.375ZM13 9.625C13 9.07272 12.5523 8.625 12 8.625C11.4477 8.625 11 9.07272 11 9.625V13.625C11 13.8902 11.1054 14.1446 11.2929 14.3321L13.2929 16.3321C13.6834 16.7226 14.3166 16.7226 14.7071 16.3321C15.0976 15.9416 15.0976 15.3084 14.7071 14.9179L13 13.2108V9.625Z',
  d10: 'M9 2.125C9 1.57272 9.44772 1.125 10 1.125H14C14.5523 1.125 15 1.57272 15 2.125C15 2.67728 14.5523 3.125 14 3.125H13V3.625C13 4.17728 12.5523 4.625 12 4.625C11.4477 4.625 11 4.17728 11 3.625V3.125H10C9.44772 3.125 9 2.67728 9 2.125Z',
  d11: 'M2.25 13.125C2.25 7.74022 6.61522 3.375 12 3.375C17.3848 3.375 21.75 7.74022 21.75 13.125C21.75 18.5098 17.3848 22.875 12 22.875C6.61522 22.875 2.25 18.5098 2.25 13.125Z',
  d12: 'M9 2.125C9 1.57272 9.44772 1.125 10 1.125H14C14.5523 1.125 15 1.57272 15 2.125C15 2.67728 14.5523 3.125 14 3.125H13V3.42566C12.6712 3.39216 12.3376 3.375 12 3.375C11.6624 3.375 11.3288 3.39216 11 3.42566V3.125H10C9.44772 3.125 9 2.67728 9 2.125ZM4.00449 18.7063L2.29289 20.4179C1.90237 20.8084 1.90237 21.4416 2.29289 21.8321C2.68342 22.2226 3.31658 22.2226 3.70711 21.8321L5.31591 20.2233C4.82887 19.7645 4.38904 19.2562 4.00449 18.7063ZM18.6841 20.2233L20.2929 21.8321C20.6834 22.2226 21.3166 22.2226 21.7071 21.8321C22.0976 21.4416 22.0976 20.8084 21.7071 20.4179L19.9955 18.7063C19.611 19.2562 19.1711 19.7645 18.6841 20.2233Z',
  d13: 'M12 8.625C12.5523 8.625 13 9.07272 13 9.625V13.2108L14.7071 14.9179C15.0976 15.3084 15.0976 15.9416 14.7071 16.3321C14.3166 16.7226 13.6834 16.7226 13.2929 16.3321L11.2929 14.3321C11.1054 14.1446 11 13.8902 11 13.625V9.625C11 9.07272 11.4477 8.625 12 8.625Z',
  d14: 'M19 3.06983L22 6.00013M5 3.06982L2 6.00012',
  d15: 'M12 8.5V13.5L14.5 16',
  d16: 'M12 3.5V2M9 2H15',
  d17: 'M2.29297 21.0856L5.00018 18.3784L6.4144 19.7926L3.70718 22.4998L2.29297 21.0856ZM20.293 22.4998L17.5858 19.7926L19 18.3784L21.7072 21.0856L20.293 22.4998Z',
  d18: 'M1.25 5.78479L4.26437 2.85449L5.66856 4.28523L2.65419 7.21553L1.25 5.78479ZM21.3458 7.21554L18.3314 4.28524L19.7356 2.8545L22.75 5.7848L21.3458 7.21554Z',
  d19: 'M12 22.5C16.9706 22.5 21 18.4706 21 13.5C21 8.52944 16.9706 4.5 12 4.5C7.02944 4.5 3 8.52944 3 13.5C3 18.4706 7.02944 22.5 12 22.5ZM12.75 13.6893V9H11.25V14.3107L13.9697 17.0303L15.0303 15.9697L12.75 13.6893Z',
  d20: 'M11 3.5H9V1.5H15V3.5H13V5H11V3.5Z',
};

export const IconAlarmClockStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-stroke-rounded IconAlarmClockStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const IconAlarmClockDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-duotone-rounded IconAlarmClockDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="13" 
        r="9" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const IconAlarmClockTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-twotone-rounded IconAlarmClockTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAlarmClockSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-solid-rounded IconAlarmClockSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlarmClockBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-bulk-rounded IconAlarmClockBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAlarmClockStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-stroke-sharp IconAlarmClockStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlarmClockSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alarm-clock-solid-sharp IconAlarmClockSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfAlarmClock: TheIconSelfPack = {
  name: 'AlarmClock',
  StrokeRounded: IconAlarmClockStrokeRounded,
  DuotoneRounded: IconAlarmClockDuotoneRounded,
  TwotoneRounded: IconAlarmClockTwotoneRounded,
  SolidRounded: IconAlarmClockSolidRounded,
  BulkRounded: IconAlarmClockBulkRounded,
  StrokeSharp: IconAlarmClockStrokeSharp,
  SolidSharp: IconAlarmClockSolidSharp,
};