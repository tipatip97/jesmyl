import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 13V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V13C7 14.8692 7 15.8038 7.40192 16.5C7.66523 16.9561 8.04394 17.3348 8.5 17.5981C9.19615 18 10.1308 18 12 18C13.8692 18 14.8038 18 15.5 17.5981C15.9561 17.3348 16.3348 16.9561 16.5981 16.5C17 15.8038 17 14.8692 17 13Z',
  d2: 'M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21',
  d3: 'M2 21C2 19.8954 2.89543 19 4 19C5.10457 19 6 19.8954 6 21',
  d4: 'M13.992 7.5H14.001',
  d5: 'M10 7.5H10.009',
  d6: 'M20 19V15C20 13.1144 20 12.1716 19.4142 11.5858C18.8284 11 17.8856 11 16 11H8C6.11438 11 5.17157 11 4.58579 11.5858C4 12.1716 4 13.1144 4 15V19',
  d7: 'M17 12.999V7.99902C17 5.2376 14.7614 2.99902 12 2.99902C9.23858 2.99902 7 5.2376 7 7.99902V12.999C7 14.8682 7 15.8028 7.40192 16.499C7.66523 16.9551 8.04394 17.3338 8.5 17.5971C9.19615 17.999 10.1308 17.999 12 17.999C13.8692 17.999 14.8038 17.999 15.5 17.5971C15.9561 17.3338 16.3348 16.9551 16.5981 16.499C17 15.8028 17 14.8682 17 12.999Z',
  d8: 'M13.9922 7.49902H14.0012',
  d9: 'M10 7.49902H10.009',
  d10: 'M7 10.999H17',
  d11: 'M18 21.001C18 19.8964 18.8954 19.001 20 19.001M20 19.001C21.1046 19.001 22 19.8964 22 21.001M20 19.001V15.001C20 13.1154 20 12.1726 19.4142 11.5868C18.8284 11.001 18.9261 11.001 17.0405 11.001M2 21.001C2 19.8964 2.89543 19.001 4 19.001M4 19.001C5.10457 19.001 6 19.8964 6 21.001M4 19.001V15.001C4 13.1154 4 12.1726 4.58579 11.5868C5.17157 11.001 5.14808 11.001 7.0337 11.001',
  d12: 'M6.25 10.2793C6.05611 10.2909 5.87458 10.3072 5.70552 10.3299C5.07773 10.4143 4.51093 10.6 4.05546 11.0555C3.59999 11.5109 3.41432 12.0777 3.32991 12.7055C3.24995 13.3003 3.24997 14.0495 3.25 14.948L3.25 18.3535C2.09575 18.68 1.25 19.7412 1.25 21C1.25 21.4142 1.58579 21.75 2 21.75C2.41421 21.75 2.75 21.4142 2.75 21C2.75 20.3097 3.30964 19.75 4 19.75C4.69036 19.75 5.25 20.3097 5.25 21C5.25 21.4142 5.58579 21.75 6 21.75C6.41421 21.75 6.75 21.4142 6.75 21C6.75 19.7412 5.90425 18.68 4.75 18.3535V15C4.75 14.036 4.75159 13.3885 4.81654 12.9054C4.87858 12.444 4.9858 12.2465 5.11612 12.1161C5.24643 11.9858 5.44393 11.8786 5.90539 11.8166C6.01175 11.8023 6.12607 11.791 6.25 11.7822V10.2793Z',
  d13: 'M17.75 11.7822C17.8739 11.791 17.9883 11.8023 18.0946 11.8166C18.5561 11.8786 18.7536 11.9858 18.8839 12.1161C19.0142 12.2465 19.1214 12.444 19.1835 12.9054C19.2484 13.3885 19.25 14.036 19.25 15V18.3535C18.0957 18.68 17.25 19.7412 17.25 21C17.25 21.4142 17.5858 21.75 18 21.75C18.4142 21.75 18.75 21.4142 18.75 21C18.75 20.3097 19.3096 19.75 20 19.75C20.6904 19.75 21.25 20.3097 21.25 21C21.25 21.4142 21.5858 21.75 22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 19.7412 21.9043 18.68 20.75 18.3535V14.948C20.75 14.0495 20.7501 13.3003 20.6701 12.7055C20.5857 12.0777 20.4 11.5109 19.9445 11.0555C19.4891 10.6 18.9223 10.4143 18.2945 10.3299C18.1254 10.3072 17.9439 10.2909 17.75 10.2793V11.7822Z',
  d14: 'M6.25 8C6.25 4.82436 8.82436 2.25 12 2.25C15.1756 2.25 17.75 4.82436 17.75 8V10.2793C17.2618 10.25 16.6951 10.25 16.0521 10.25H16.0521H16.0521H16.052H16.052H16.052H7.948H7.94799H7.94799H7.94798H7.94797H7.94796C7.30488 10.25 6.73826 10.25 6.25 10.2793V8ZM17.75 13.0358C17.75 13.94 17.75 14.6693 17.6967 15.2576C17.6417 15.8639 17.5254 16.3937 17.2476 16.875C16.9185 17.4451 16.4451 17.9185 15.875 18.2476C15.3938 18.5254 14.8639 18.6417 14.2576 18.6967C13.6693 18.75 12.94 18.75 12.0358 18.75H11.9642C11.06 18.75 10.3307 18.75 9.7424 18.6967C9.13605 18.6417 8.60625 18.5254 8.125 18.2476C7.55493 17.9185 7.08154 17.4451 6.75241 16.875C6.47456 16.3937 6.35826 15.8639 6.3033 15.2576C6.24998 14.6693 6.24999 13.9401 6.25 13.0358V13.0358V13.0358V11.7822C6.68892 11.751 7.24824 11.75 8 11.75H16C16.7518 11.75 17.3111 11.751 17.75 11.7822V13.0358V13.0358ZM12.9922 7.5C12.9922 6.94772 13.4399 6.5 13.9922 6.5H14.0012C14.5535 6.5 15.0012 6.94772 15.0012 7.5C15.0012 8.05228 14.5535 8.5 14.0012 8.5H13.9922C13.4399 8.5 12.9922 8.05228 12.9922 7.5ZM10 6.5C9.44772 6.5 9 6.94772 9 7.5C9 8.05228 9.44772 8.5 10 8.5H10.009C10.5613 8.5 11.009 8.05228 11.009 7.5C11.009 6.94772 10.5613 6.5 10.009 6.5H10Z',
  d15: 'M7.948 10.25H16.052C16.9505 10.25 17.6997 10.2499 18.2945 10.3299C18.9223 10.4143 19.4891 10.6 19.9445 11.0555C20.4 11.5109 20.5857 12.0777 20.6701 12.7055C20.7501 13.3003 20.75 14.0495 20.75 14.948V18.3535C21.9043 18.68 22.75 19.7412 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75C21.5858 21.75 21.25 21.4142 21.25 21C21.25 20.3096 20.6904 19.75 20 19.75C19.3096 19.75 18.75 20.3096 18.75 21C18.75 21.4142 18.4142 21.75 18 21.75C17.5858 21.75 17.25 21.4142 17.25 21C17.25 19.7412 18.0957 18.68 19.25 18.3535V15C19.25 14.036 19.2484 13.3884 19.1835 12.9054C19.1214 12.4439 19.0142 12.2464 18.8839 12.1161C18.7536 11.9858 18.5561 11.8786 18.0946 11.8165C17.6116 11.7516 16.964 11.75 16 11.75H8C7.03599 11.75 6.38843 11.7516 5.90539 11.8165C5.44393 11.8786 5.24643 11.9858 5.11612 12.1161C4.9858 12.2464 4.87858 12.4439 4.81654 12.9054C4.75159 13.3884 4.75 14.036 4.75 15V18.3535C5.90425 18.68 6.75 19.7412 6.75 21C6.75 21.4142 6.41421 21.75 6 21.75C5.58579 21.75 5.25 21.4142 5.25 21C5.25 20.3096 4.69036 19.75 4 19.75C3.30964 19.75 2.75 20.3096 2.75 21C2.75 21.4142 2.41421 21.75 2 21.75C1.58579 21.75 1.25 21.4142 1.25 21C1.25 19.7412 2.09575 18.68 3.25 18.3535L3.25 14.948C3.24997 14.0495 3.24995 13.3003 3.32991 12.7055C3.41432 12.0777 3.59999 11.5109 4.05546 11.0555C4.51093 10.6 5.07773 10.4143 5.70552 10.3299C6.3003 10.2499 7.04952 10.25 7.948 10.25Z',
  d16: 'M6.25 8C6.25 4.82436 8.82436 2.25 12 2.25C15.1756 2.25 17.75 4.82436 17.75 8V10.2793C17.2617 10.25 16.6951 10.25 16.052 10.25H16.052H7.948H7.94799C7.30489 10.25 6.73826 10.25 6.25 10.2793V8Z',
  d17: 'M17.75 13.0358C17.75 13.94 17.75 14.6693 17.6967 15.2576C17.6417 15.8639 17.5254 16.3937 17.2476 16.875C16.9185 17.4451 16.4451 17.9185 15.875 18.2476C15.3938 18.5254 14.8639 18.6417 14.2576 18.6967C13.6693 18.75 12.94 18.75 12.0358 18.75H11.9642C11.06 18.75 10.3307 18.75 9.7424 18.6967C9.13605 18.6417 8.60625 18.5254 8.125 18.2476C7.55493 17.9185 7.08154 17.4451 6.75241 16.875C6.47456 16.3937 6.35826 15.8639 6.3033 15.2576C6.24998 14.6693 6.24999 13.94 6.25 13.0358V13.0358V11.7822C6.68892 11.751 7.24824 11.75 8 11.75H16C16.7518 11.75 17.3111 11.751 17.75 11.7822V13.0358V13.0358Z',
  d18: 'M12.9922 7.5C12.9922 6.94772 13.4399 6.5 13.9922 6.5H14.0012C14.5535 6.5 15.0012 6.94772 15.0012 7.5C15.0012 8.05228 14.5535 8.5 14.0012 8.5H13.9922C13.4399 8.5 12.9922 8.05228 12.9922 7.5Z',
  d19: 'M9 7.5C9 6.94772 9.44772 6.5 10 6.5H10.009C10.5613 6.5 11.009 6.94772 11.009 7.5C11.009 8.05228 10.5613 8.5 10.009 8.5H10C9.44772 8.5 9 8.05228 9 7.5Z',
  d20: 'M17 18V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V18H17Z',
  d21: 'M20 19V11H4V19',
  d22: 'M6.25 8C6.25 4.82436 8.82436 2.25 12 2.25C15.1756 2.25 17.75 4.82436 17.75 8V11H6.25V8ZM17.75 18C17.75 18.4142 17.4142 18.75 17 18.75H7C6.58579 18.75 6.25 18.4142 6.25 18V12.5H17.75V18ZM12.9922 7.5C12.9922 6.94772 13.4399 6.5 13.9922 6.5H14.0012C14.5535 6.5 15.0012 6.94772 15.0012 7.5C15.0012 8.05228 14.5535 8.5 14.0012 8.5H13.9922C13.4399 8.5 12.9922 8.05228 12.9922 7.5ZM10 6.5C9.44772 6.5 9 6.94772 9 7.5C9 8.05228 9.44772 8.5 10 8.5H10.009C10.5613 8.5 11.009 8.05228 11.009 7.5C11.009 6.94772 10.5613 6.5 10.009 6.5H10Z',
  d23: 'M3.25 11.75C3.25 11.3358 3.58579 11 4 11H6.25V12.5H4.75V19.1035C5.90425 19.43 6.75 20.4912 6.75 21.75H5.25C5.25 21.0596 4.69036 20.5 4 20.5C3.30964 20.5 2.75 21.0596 2.75 21.75H1.25C1.25 20.4912 2.09575 19.43 3.25 19.1035V11.75Z',
  d24: 'M20 11C20.4142 11 20.75 11.3358 20.75 11.75V19.1035C21.9043 19.43 22.75 20.4912 22.75 21.75H21.25C21.25 21.0596 20.6904 20.5 20 20.5C19.3096 20.5 18.75 21.0596 18.75 21.75H17.25C17.25 20.4912 18.0957 19.43 19.25 19.1035V12.5H17.75V11H20Z',
};

export const IconMachineRobotStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-stroke-rounded IconMachineRobotStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMachineRobotDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-duotone-rounded IconMachineRobotDuotoneRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMachineRobotTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-twotone-rounded IconMachineRobotTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMachineRobotSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-solid-rounded IconMachineRobotSolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMachineRobotBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-bulk-rounded IconMachineRobotBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconMachineRobotStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-stroke-sharp IconMachineRobotStrokeSharp"
    >
      <path 
        d={d.d20} 
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
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMachineRobotSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="machine-robot-solid-sharp IconMachineRobotSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMachineRobot: TheIconSelfPack = {
  name: 'MachineRobot',
  StrokeRounded: IconMachineRobotStrokeRounded,
  DuotoneRounded: IconMachineRobotDuotoneRounded,
  TwotoneRounded: IconMachineRobotTwotoneRounded,
  SolidRounded: IconMachineRobotSolidRounded,
  BulkRounded: IconMachineRobotBulkRounded,
  StrokeSharp: IconMachineRobotStrokeSharp,
  SolidSharp: IconMachineRobotSolidSharp,
};