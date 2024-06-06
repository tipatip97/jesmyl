import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.832 18.0001C13.1442 17.2857 13.5374 16.6148 14 15.999',
  d2: 'M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18',
  d3: 'M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18',
  d4: 'M19 22C20.6569 22 22 20.6569 22 19C22 18.3038 21.7629 17.663 21.365 17.154C20.861 16.5093 20.609 16.1869 20.5545 16.0286C20.5 15.8704 20.5 15.6628 20.5 15.2478V12.5C20.5 11.6716 19.8284 11 19 11C18.1716 11 17.5 11.6716 17.5 12.5V15.2478C17.5 15.6628 17.5 15.8704 17.4455 16.0286C17.391 16.1869 17.139 16.5093 16.635 17.154C16.2371 17.663 16 18.3038 16 19C16 20.6569 17.3431 22 19 22Z',
  d5: 'M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258',
  d6: 'M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772',
  d7: 'M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534',
  d8: 'M12.832 18.001C13.1442 17.2866 13.5374 16.6157 14 16',
  d9: 'M19 22.25C20.6569 22.25 22 20.9069 22 19.25C22 18.5538 21.7629 17.913 21.365 17.404C20.861 16.7593 20.609 16.4369 20.5545 16.2786C20.5 16.1204 20.5 15.9128 20.5 15.4978V12.75C20.5 11.9216 19.8284 11.25 19 11.25C18.1716 11.25 17.5 11.9216 17.5 12.75V15.4978C17.5 15.9128 17.5 16.1204 17.4455 16.2786C17.391 16.4369 17.139 16.7593 16.635 17.404C16.2371 17.913 16 18.5538 16 19.25C16 20.9069 17.3431 22.25 19 22.25Z',
  d10: 'M1.25 2.7222C1.25 2.18527 1.68755 1.75 2.2273 1.75C5.50131 1.75 8.58015 2.59375 11.253 4.07531C11.7245 4.33666 11.8938 4.92875 11.6311 5.39779C11.3684 5.86682 10.7732 6.03519 10.3017 5.77384C7.91217 4.44937 5.15984 3.69441 2.2273 3.69441C1.68755 3.69441 1.25 3.25914 1.25 2.7222ZM21.7727 5.63882C13.8671 5.63882 7.24904 11.1326 5.5702 18.4926C5.45076 19.0162 4.92723 19.3444 4.40086 19.2256C3.87449 19.1068 3.5446 18.586 3.66404 18.0623C5.54047 9.83609 12.9344 3.69441 21.7727 3.69441C22.3124 3.69441 22.75 4.12968 22.75 4.66661C22.75 5.20355 22.3124 5.63882 21.7727 5.63882ZM1.25 6.61102C1.25 6.07409 1.68755 5.63882 2.2273 5.63882C4.17947 5.63882 6.04482 6.01893 7.75084 6.70971C8.25077 6.91214 8.49108 7.47939 8.28759 7.9767C8.08411 8.47402 7.51388 8.71307 7.01396 8.51065C5.53792 7.91299 3.92254 7.58323 2.2273 7.58323C1.68755 7.58323 1.25 7.14796 1.25 6.61102ZM21.7718 9.52764C16.0179 9.52764 11.1549 13.3335 9.59284 18.5548C9.43887 19.0694 8.89469 19.3625 8.37736 19.2093C7.86004 19.0561 7.56547 18.5148 7.71944 18.0002C9.52141 11.977 15.1295 7.58323 21.7718 7.58323C22.3116 7.58323 22.7491 8.0185 22.7491 8.55543C22.7491 9.09237 22.3116 9.52764 21.7718 9.52764ZM1.25 10.4998C1.25 9.96291 1.68755 9.52764 2.2273 9.52764C3.16983 9.52764 4.08542 9.64853 4.95864 9.8761C5.48077 10.0122 5.79316 10.5435 5.65637 11.0629C5.51958 11.5824 4.98543 11.8931 4.4633 11.757C3.75039 11.5712 3.00122 11.472 2.2273 11.472C1.68755 11.472 1.25 11.0368 1.25 10.4998ZM14.542 15.5549C14.9735 15.8774 15.0605 16.4868 14.7363 16.9161C14.3292 17.4551 13.9834 18.0421 13.7091 18.6668C13.493 19.1588 12.9168 19.3834 12.4222 19.1684C11.9276 18.9535 11.7018 18.3803 11.9179 17.8883C12.2537 17.1239 12.6765 16.4064 13.1736 15.7481C13.4978 15.3189 14.1105 15.2323 14.542 15.5549Z',
  d11: 'M1.25 2.7222C1.25 2.18527 1.68755 1.75 2.2273 1.75C5.50131 1.75 8.58015 2.59375 11.253 4.07531C11.7245 4.33666 11.8938 4.92875 11.6311 5.39779C11.3684 5.86682 10.7732 6.03519 10.3017 5.77384C7.91217 4.44937 5.15984 3.69441 2.2273 3.69441C1.68755 3.69441 1.25 3.25914 1.25 2.7222ZM21.7718 9.52764C16.0179 9.52764 11.1549 13.3335 9.59284 18.5548C9.43888 19.0694 8.89469 19.3624 8.37736 19.2093C7.86004 19.0561 7.56547 18.5148 7.71944 18.0002C9.52141 11.977 15.1295 7.58323 21.7718 7.58323C22.3116 7.58323 22.7491 8.0185 22.7491 8.55543C22.7491 9.09237 22.3116 9.52764 21.7718 9.52764ZM1.25 10.4998C1.25 9.96291 1.68755 9.52764 2.2273 9.52764C3.16983 9.52764 4.08542 9.64853 4.95864 9.8761C5.48077 10.0122 5.79315 10.5435 5.65637 11.0629C5.51958 11.5824 4.98543 11.8931 4.4633 11.757C3.75039 11.5712 3.00122 11.472 2.2273 11.472C1.68755 11.472 1.25 11.0368 1.25 10.4998Z',
  d12: 'M21.7727 5.63972C13.8671 5.63972 7.24904 11.1335 5.5702 18.4935C5.45076 19.0171 4.92723 19.3453 4.40086 19.2265C3.87449 19.1077 3.5446 18.5869 3.66404 18.0632C5.54047 9.837 12.9344 3.69531 21.7727 3.69531C22.3124 3.69531 22.75 4.13058 22.75 4.66752C22.75 5.20445 22.3124 5.63972 21.7727 5.63972ZM1.25 6.61193C1.25 6.07499 1.68755 5.63972 2.2273 5.63972C4.17947 5.63972 6.04482 6.01983 7.75084 6.71062C8.25077 6.91304 8.49108 7.48029 8.28759 7.9776C8.08411 8.47492 7.51388 8.71398 7.01396 8.51155C5.53792 7.9139 3.92254 7.58413 2.2273 7.58413C1.68755 7.58413 1.25 7.14886 1.25 6.61193ZM14.542 15.5558C14.9735 15.8783 15.0605 16.4877 14.7363 16.917C14.3292 17.456 13.9834 18.043 13.7091 18.6677C13.493 19.1597 12.9168 19.3843 12.4222 19.1693C11.9276 18.9544 11.7018 18.3812 11.9179 17.8892C12.2537 17.1248 12.6765 16.4073 13.1736 15.749C13.4978 15.3198 14.1105 15.2332 14.542 15.5558Z',
  d13: 'M19 22C20.6569 22 22 20.6569 22 19C22 17.8896 21.3967 16.9201 20.5 16.4013V12H17.5V16.4013C16.6033 16.9201 16 17.8896 16 19C16 20.6569 17.3431 22 19 22Z',
  d14: 'M14.7979 17.0998C14.3813 17.6542 14.0275 18.258 13.7468 18.9005L11.9141 18.0998C12.2576 17.3135 12.6902 16.5755 13.1989 15.8984L14.7979 17.0998Z',
  d15: 'M21.9998 9.5C16.1122 9.5 11.1364 13.4146 9.538 18.7852L7.62109 18.2148C9.46492 12.0194 15.2033 7.5 21.9998 7.5V9.5Z',
  d16: 'M21.9979 5.5C13.9087 5.5 7.137 11.1508 5.41917 18.7213L3.46875 18.2787C5.38875 9.81728 12.9544 3.5 21.9979 3.5V5.5Z',
  d17: 'M19 22.5C20.6569 22.5 22 21.1569 22 19.5C22 18.3896 21.3967 17.4201 20.5 16.9013V12.5H17.5V16.9013C16.6033 17.4201 16 18.3896 16 19.5C16 21.1569 17.3431 22.5 19 22.5Z',
  d18: 'M4.28792 11.7931C3.55845 11.602 2.79189 11.5 2 11.5V9.5C2.96441 9.5 3.90127 9.62435 4.79476 9.85842L4.28792 11.7931Z',
  d19: 'M6.89781 8.45394C5.3875 7.83919 3.7346 7.5 2 7.5V5.5C3.9975 5.5 5.90616 5.89098 7.65181 6.60151L6.89781 8.45394Z',
  d20: 'M10.2619 5.63889C7.81688 4.27655 5.00063 3.5 2 3.5V1.5C5.35003 1.5 8.50037 2.36787 11.2353 3.89179L10.2619 5.63889Z',
};

export const IconSoilTemperatureGlobalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-stroke-rounded IconSoilTemperatureGlobalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureGlobalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-duotone-rounded IconSoilTemperatureGlobalDuotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureGlobalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-twotone-rounded IconSoilTemperatureGlobalTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureGlobalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-solid-rounded IconSoilTemperatureGlobalSolidRounded"
    >
      <path 
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

export const IconSoilTemperatureGlobalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-bulk-rounded IconSoilTemperatureGlobalBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureGlobalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-stroke-sharp IconSoilTemperatureGlobalStrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureGlobalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-global-solid-sharp IconSoilTemperatureGlobalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfSoilTemperatureGlobal: TheIconSelfPack = {
  name: 'SoilTemperatureGlobal',
  StrokeRounded: IconSoilTemperatureGlobalStrokeRounded,
  DuotoneRounded: IconSoilTemperatureGlobalDuotoneRounded,
  TwotoneRounded: IconSoilTemperatureGlobalTwotoneRounded,
  SolidRounded: IconSoilTemperatureGlobalSolidRounded,
  BulkRounded: IconSoilTemperatureGlobalBulkRounded,
  StrokeSharp: IconSoilTemperatureGlobalStrokeSharp,
  SolidSharp: IconSoilTemperatureGlobalSolidSharp,
};