import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 3C3.86377 3 4.79565 3 5.53073 3.30448C6.51085 3.71046 7.28954 4.48915 7.69552 5.46927C8 6.20435 8 7.13623 8 9C6.13623 9 5.20435 9 4.46927 8.69552C3.48915 8.28954 2.71046 7.51085 2.30448 6.53073C2 5.79565 2 4.86377 2 3Z',
  d2: 'M12 5C10.7575 5 10.1362 5 9.64618 5.20299C8.99277 5.47364 8.47364 5.99277 8.20299 6.64618C8 7.13623 8 7.75749 8 9C9.24251 9 9.86377 9 10.3538 8.79701C11.0072 8.52636 11.5264 8.00723 11.797 7.35382C12 6.86377 12 6.24251 12 5Z',
  d3: 'M8 9V14',
  d4: 'M12 14L2 14',
  d5: 'M12 17L2 17',
  d6: 'M12 20L2 20',
  d7: 'M16 18.5034C16 17.2482 17.0532 16.0077 17.7924 15.2917C18.1939 14.9028 18.8061 14.9028 19.2076 15.2917C19.9468 16.0077 21 17.2482 21 18.5034C21 19.7341 20.0533 21 18.5 21C16.9467 21 16 19.7341 16 18.5034Z',
  d8: 'M15 17.6712C15 15.9975 16.4744 14.3436 17.5093 13.3889C18.0714 12.8704 18.9286 12.8704 19.4907 13.3889C20.5256 14.3436 22 15.9975 22 17.6712C22 19.3122 20.6746 21 18.5 21C16.3254 21 15 19.3122 15 17.6712Z',
  d9: 'M6.56775 2.61157C7.71665 3.08746 8.63248 3.99464 9.11959 5.13743C9.40816 4.87534 9.74213 4.66211 10.1092 4.51008C10.4608 4.36442 10.8298 4.30509 11.2399 4.27711C11.6374 4.24999 12.1248 4.24999 12.7237 4.25H12.7237L12.75 4.25C13.1642 4.25 13.5 4.58579 13.5 5V5.02628V5.02629C13.5 5.62524 13.5 6.1126 13.4729 6.51014C13.4449 6.92021 13.3856 7.28919 13.2399 7.64084C12.8932 8.47801 12.228 9.14315 11.3908 9.48992C11.0392 9.63558 10.6702 9.69491 10.2601 9.72289C9.8626 9.75001 9.37524 9.75001 8.77629 9.75H8.77628H8.72262H8.72259C7.81391 9.75 7.09375 9.75001 6.51032 9.7102C5.91431 9.66953 5.40641 9.58483 4.93225 9.38843C3.76837 8.90633 2.84367 7.98163 2.36157 6.81775C2.16517 6.34359 2.08047 5.83569 2.0398 5.23968C1.99999 4.65625 2 3.93607 2 3.02738V3C2 2.58579 2.33579 2.25 2.75 2.25H2.77738C3.68607 2.25 4.40625 2.24999 4.98968 2.2898C5.58569 2.33047 6.09359 2.41517 6.56775 2.61157Z',
  d10: 'M8.75 8C9.30228 8 9.75 8.44772 9.75 9V13H12.75C13.3023 13 13.75 13.4477 13.75 14C13.75 14.5523 13.3023 15 12.75 15H8.75062C8.75042 15 8.75021 15 8.75 15C8.74979 15 8.74958 15 8.74938 15L2.75 15C2.19772 15 1.75 14.5523 1.75 14C1.75 13.4477 2.19772 13 2.75 13L7.75 13V9C7.75 8.44772 8.19772 8 8.75 8ZM1.75 17C1.75 16.4477 2.19772 16 2.75 16L12.75 16C13.3023 16 13.75 16.4477 13.75 17C13.75 17.5523 13.3023 18 12.75 18L2.75 18C2.19772 18 1.75 17.5523 1.75 17ZM1.75 20C1.75 19.4477 2.19772 19 2.75 19H12.75C13.3023 19 13.75 19.4477 13.75 20C13.75 20.5523 13.3023 21 12.75 21H2.75C2.19772 21 1.75 20.5523 1.75 20Z',
  d11: 'M17.7706 14.753C18.4629 14.0823 19.5371 14.0823 20.2294 14.753C20.6223 15.1335 21.1145 15.668 21.513 16.2914C21.9062 16.9066 22.25 17.6736 22.25 18.5034C22.25 20.0851 21.028 21.75 19 21.75C16.972 21.75 15.75 20.0851 15.75 18.5034C15.75 17.6736 16.0938 16.9066 16.487 16.2914C16.8855 15.668 17.3777 15.1335 17.7706 14.753Z',
  d12: 'M7.75 9.74598V12.9983L2.75 12.9983C2.19772 12.9983 1.75 13.446 1.75 13.9983C1.75 14.5506 2.19772 14.9983 2.75 14.9983L12.75 14.9983C13.3023 14.9983 13.75 14.5506 13.75 13.9983C13.75 13.446 13.3023 12.9983 12.75 12.9983H9.75V9.74219C9.46343 9.74828 9.14049 9.74828 8.7763 9.74828H8.72262C8.37123 9.74828 8.048 9.74828 7.75 9.74598Z',
  d13: 'M2.75 15.9983C2.19772 15.9983 1.75 16.446 1.75 16.9983C1.75 17.5506 2.19772 17.9983 2.75 17.9983L12.75 17.9983C13.3023 17.9983 13.75 17.5506 13.75 16.9983C13.75 16.446 13.3023 15.9983 12.75 15.9983L2.75 15.9983Z',
  d14: 'M2.75 18.9983C2.19772 18.9983 1.75 19.446 1.75 19.9983C1.75 20.5506 2.19772 20.9983 2.75 20.9983H12.75C13.3023 20.9983 13.75 20.5506 13.75 19.9983C13.75 19.446 13.3023 18.9983 12.75 18.9983H2.75Z',
  d15: 'M18.5 15C18.5 15 16 17 16 18.5034C16 19.7341 16.9467 21 18.5 21C20.0533 21 21 19.7341 21 18.5034C21 17 18.5 15 18.5 15Z',
  d16: 'M6.81775 2.61157C6.34359 2.41517 5.83569 2.33047 5.23968 2.2898C4.65625 2.24999 3.93607 2.25 3.02738 2.25H3.02738H2.25V3.02738V3.02738C2.25 3.93607 2.24999 4.65625 2.2898 5.23968C2.33047 5.83569 2.41517 6.34359 2.61157 6.81775C3.09367 7.98163 4.01837 8.90633 5.18225 9.38843C5.65641 9.58483 6.16431 9.66953 6.76032 9.7102C7.17979 9.73882 7.66993 9.74686 8.25 9.74912L10.5101 9.72289C10.9202 9.69491 11.2892 9.63558 11.6408 9.48992C12.478 9.14315 13.1432 8.47801 13.4899 7.64084C13.6356 7.28919 13.6949 6.92021 13.7229 6.51014C13.75 6.1126 13.75 5.62524 13.75 5.02629V5.02628V4.25H12.9737C12.3748 4.24999 11.8874 4.24999 11.4899 4.27711C11.0798 4.30509 10.7108 4.36442 10.3592 4.51008C9.99213 4.66211 9.65816 4.87534 9.36959 5.13743C8.88248 3.99464 7.96665 3.08746 6.81775 2.61157Z',
  d17: 'M8 14V9H10V14H8Z',
  d18: 'M3 13L13 13L13 15L3 15L3 13Z',
  d19: 'M3 16L13 16L13 18L3 18L3 16Z',
  d20: 'M3 19L13 19L13 21L3 21L3 19Z',
  d21: 'M21.256 16.9414C21.5193 17.3894 21.75 17.9335 21.75 18.503C21.75 20.0846 20.528 21.7495 18.5 21.7495C16.472 21.7495 15.25 20.0846 15.25 18.5029C15.25 17.9335 15.4807 17.3894 15.744 16.9414C16.0141 16.4816 16.3632 16.0482 16.6949 15.6831C17.029 15.3154 17.3606 15.0004 17.6076 14.7781C17.7316 14.6665 18.4262 14.1013 18.5 14.0391C18.5738 14.1013 19.2684 14.6665 19.3924 14.7781C19.6394 15.0004 19.971 15.3154 20.3051 15.6831C20.6368 16.0482 20.9859 16.4816 21.256 16.9414Z',
};

export const IconSoilMoistureFieldStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-stroke-rounded IconSoilMoistureFieldStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-duotone-rounded IconSoilMoistureFieldDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-twotone-rounded IconSoilMoistureFieldTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-solid-rounded IconSoilMoistureFieldSolidRounded"
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-bulk-rounded IconSoilMoistureFieldBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-stroke-sharp IconSoilMoistureFieldStrokeSharp"
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSoilMoistureFieldSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="soil-moisture-field-solid-sharp IconSoilMoistureFieldSolidSharp"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSoilMoistureField: TheIconSelfPack = {
  name: 'SoilMoistureField',
  StrokeRounded: IconSoilMoistureFieldStrokeRounded,
  DuotoneRounded: IconSoilMoistureFieldDuotoneRounded,
  TwotoneRounded: IconSoilMoistureFieldTwotoneRounded,
  SolidRounded: IconSoilMoistureFieldSolidRounded,
  BulkRounded: IconSoilMoistureFieldBulkRounded,
  StrokeSharp: IconSoilMoistureFieldStrokeSharp,
  SolidSharp: IconSoilMoistureFieldSolidSharp,
};