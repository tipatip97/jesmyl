import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 3C4.86377 3 5.79565 3 6.53073 3.30448C7.51085 3.71046 8.28954 4.48915 8.69552 5.46927C9 6.20435 9 7.13623 9 9C7.13623 9 6.20435 9 5.46927 8.69552C4.48915 8.28954 3.71046 7.51085 3.30448 6.53073C3 5.79565 3 4.86377 3 3Z',
  d2: 'M13 5C11.7575 5 11.1362 5 10.6462 5.20299C9.99277 5.47364 9.47364 5.99277 9.20299 6.64618C9 7.13623 9 7.75749 9 9C10.2425 9 10.8638 9 11.3538 8.79701C12.0072 8.52636 12.5264 8.00723 12.797 7.35382C13 6.86377 13 6.24251 13 5Z',
  d3: 'M9 9V14',
  d4: 'M13 14L3 14',
  d5: 'M13 17L3 17',
  d6: 'M13 20L3 20',
  d7: 'M19 21C20.6569 21 22 19.6569 22 18C22 17.3038 21.7629 16.663 21.365 16.154C20.861 15.5093 20.609 15.1869 20.5545 15.0286C20.5 14.8704 20.5 14.6628 20.5 14.2478V10.5C20.5 9.67157 19.8284 9 19 9C18.1716 9 17.5 9.67157 17.5 10.5V14.2478C17.5 14.6628 17.5 14.8704 17.4455 15.0286C17.391 15.1869 17.139 15.5093 16.635 16.154C16.2371 16.663 16 17.3038 16 18C16 19.6569 17.3431 21 19 21Z',
  d8: 'M6.81775 2.11157C7.96665 2.58746 8.88248 3.49464 9.36959 4.63743C9.65816 4.37534 9.99213 4.16211 10.3592 4.01008C10.7108 3.86442 11.0798 3.80509 11.4899 3.77711C11.8874 3.74999 12.3748 3.74999 12.9737 3.75H12.9737L13 3.75C13.4142 3.75 13.75 4.08579 13.75 4.5V4.52628V4.52629C13.75 5.12524 13.75 5.6126 13.7229 6.01014C13.6949 6.42021 13.6356 6.78919 13.4899 7.14084C13.1432 7.97801 12.478 8.64315 11.6408 8.98992C11.2892 9.13558 10.9202 9.19491 10.5101 9.22289C10.1126 9.25001 9.62524 9.25001 9.02629 9.25H9.02628H8.97262H8.97259C8.06391 9.25 7.34375 9.25001 6.76032 9.2102C6.16431 9.16953 5.65641 9.08483 5.18225 8.88843C4.01837 8.40633 3.09367 7.48163 2.61157 6.31775C2.41517 5.84359 2.33047 5.33569 2.2898 4.73968C2.24999 4.15625 2.25 3.43607 2.25 2.52738V2.5C2.25 2.08579 2.58579 1.75 3 1.75H3.02738C3.93607 1.75 4.65625 1.74999 5.23968 1.7898C5.83569 1.83047 6.34359 1.91517 6.81775 2.11157Z',
  d9: 'M9 7.5C9.55228 7.5 10 7.94772 10 8.5V12.5H13C13.5523 12.5 14 12.9477 14 13.5C14 14.0523 13.5523 14.5 13 14.5H9.00062C9.00042 14.5 9.00021 14.5 9 14.5C8.99979 14.5 8.99958 14.5 8.99938 14.5L3 14.5C2.44772 14.5 2 14.0523 2 13.5C2 12.9477 2.44772 12.5 3 12.5L8 12.5V8.5C8 7.94772 8.44772 7.5 9 7.5ZM2 16.5C2 15.9477 2.44772 15.5 3 15.5L13 15.5C13.5523 15.5 14 15.9477 14 16.5C14 17.0523 13.5523 17.5 13 17.5L3 17.5C2.44772 17.5 2 17.0523 2 16.5ZM2 19.5C2 18.9477 2.44772 18.5 3 18.5H13C13.5523 18.5 14 18.9477 14 19.5C14 20.0523 13.5523 20.5 13 20.5H3C2.44772 20.5 2 20.0523 2 19.5Z',
  d10: 'M19 22.25C20.6569 22.25 22 20.9069 22 19.25C22 18.5538 21.7629 17.913 21.365 17.404C20.861 16.7593 20.609 16.4369 20.5545 16.2786C20.5 16.1204 20.5 15.9128 20.5 15.4978V10.75C20.5 9.92157 19.8284 9.25 19 9.25C18.1716 9.25 17.5 9.92157 17.5 10.75V15.4978C17.5 15.9128 17.5 16.1204 17.4455 16.2786C17.391 16.4369 17.139 16.7593 16.635 17.404C16.2371 17.913 16 18.5538 16 19.25C16 20.9069 17.3431 22.25 19 22.25Z',
  d11: 'M8 9.24598V12.4983L3 12.4983C2.44772 12.4983 2 12.946 2 13.4983C2 14.0506 2.44772 14.4983 3 14.4983L13 14.4983C13.5523 14.4983 14 14.0506 14 13.4983C14 12.946 13.5523 12.4983 13 12.4983H10V9.24219C9.71343 9.24828 9.39049 9.24828 9.0263 9.24828H8.97262C8.62123 9.24828 8.298 9.24828 8 9.24598Z',
  d12: 'M3 15.4983C2.44772 15.4983 2 15.946 2 16.4983C2 17.0506 2.44772 17.4983 3 17.4983L13 17.4983C13.5523 17.4983 14 17.0506 14 16.4983C14 15.946 13.5523 15.4983 13 15.4983L3 15.4983Z',
  d13: 'M3 18.4983C2.44772 18.4983 2 18.946 2 19.4983C2 20.0506 2.44772 20.4983 3 20.4983H13C13.5523 20.4983 14 20.0506 14 19.4983C14 18.946 13.5523 18.4983 13 18.4983H3Z',
  d14: 'M19 21C20.6569 21 22 19.6569 22 18C22 16.8896 21.3967 15.9201 20.5 15.4013V9H17.5V15.4013C16.6033 15.9201 16 16.8896 16 18C16 19.6569 17.3431 21 19 21Z',
  d15: 'M6.81775 2.61157C7.96665 3.08746 8.88248 3.99464 9.36959 5.13743C9.65816 4.87534 9.99213 4.66211 10.3592 4.51008C10.7108 4.36442 11.0798 4.30509 11.4899 4.27711C11.8874 4.24999 12.3748 4.24999 12.9737 4.25H12.9737L13.75 4.25V5.02628V5.02629C13.75 5.62524 13.75 6.1126 13.7229 6.51014C13.6949 6.92021 13.6356 7.28919 13.4899 7.64084C13.1432 8.47801 12.478 9.14315 11.6408 9.48992C11.2892 9.63558 10.9202 9.69491 10.5101 9.72289C9.60145 9.72289 7.34375 9.75001 6.76032 9.7102C6.16431 9.66953 5.65641 9.58483 5.18225 9.38843C4.01837 8.90633 3.09367 7.98163 2.61157 6.81775C2.41517 6.34359 2.33047 5.83569 2.2898 5.23968C2.24999 4.65625 2.25 3.93607 2.25 3.02738V2.25H3.02738C3.93607 2.25 4.65625 2.24999 5.23968 2.2898C5.83569 2.33047 6.34359 2.41517 6.81775 2.61157Z',
  d16: 'M8 14V9H10V14H8Z',
  d17: 'M3 13L13 13L13 15L3 15L3 13Z',
  d18: 'M3 16L13 16L13 18L3 18L3 16Z',
  d19: 'M3 19L13 19L13 21L3 21L3 19Z',
  d20: 'M18.75 21.75C20.4069 21.75 21.75 20.4069 21.75 18.75C21.75 17.6396 21.1467 16.6701 20.25 16.1513V9.75H17.25V16.1513C16.3533 16.6701 15.75 17.6396 15.75 18.75C15.75 20.4069 17.0931 21.75 18.75 21.75Z',
};

export const IconSoilTemperatureFieldStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-stroke-rounded IconSoilTemperatureFieldStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-duotone-rounded IconSoilTemperatureFieldDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-twotone-rounded IconSoilTemperatureFieldTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-solid-rounded IconSoilTemperatureFieldSolidRounded"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-bulk-rounded IconSoilTemperatureFieldBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-stroke-sharp IconSoilTemperatureFieldStrokeSharp"
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
      />
      <path 
        d={d.d3} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilTemperatureFieldSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-temperature-field-solid-sharp IconSoilTemperatureFieldSolidSharp"
    >
      <path 
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSoilTemperatureField: TheIconSelfPack = {
  name: 'SoilTemperatureField',
  StrokeRounded: IconSoilTemperatureFieldStrokeRounded,
  DuotoneRounded: IconSoilTemperatureFieldDuotoneRounded,
  TwotoneRounded: IconSoilTemperatureFieldTwotoneRounded,
  SolidRounded: IconSoilTemperatureFieldSolidRounded,
  BulkRounded: IconSoilTemperatureFieldBulkRounded,
  StrokeSharp: IconSoilTemperatureFieldStrokeSharp,
  SolidSharp: IconSoilTemperatureFieldSolidSharp,
};