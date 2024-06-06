import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.5 11.9999C4.5 9.51223 4.5 8.2684 5.17206 7.38465C5.24545 7.28814 5.32409 7.19589 5.40762 7.10833C6.17248 6.30646 7.38276 6.13056 9.8033 5.77875L12.1623 5.43589C15.5764 4.93968 17.2834 4.69157 18.3917 5.6695C19.5 6.64743 19.5 8.4018 19.5 11.9106V12.0892C19.5 15.598 19.5 17.3523 18.3917 18.3303C17.2834 19.3082 15.5764 19.0601 12.1623 18.5639L9.80329 18.221C7.38275 17.8692 6.17248 17.6933 5.40762 16.8914C5.32409 16.8039 5.24545 16.7116 5.17206 16.6151C4.5 15.7314 4.5 14.4875 4.5 11.9999Z',
  d2: 'M12 22L12 2M2 12H22',
  d3: 'M5.40762 16.8916C6.17248 17.6934 7.38275 17.8693 9.80329 18.2211L12 18.5404V12L4.5 12C4.5 14.4877 4.5 15.7315 5.17206 16.6152C5.24545 16.7117 5.32409 16.804 5.40762 16.8916Z',
  d4: 'M18.3917 5.66962C17.2834 4.69169 15.5764 4.9398 12.1623 5.43601L12 5.4596L12 12H19.5V11.9107C19.5 8.40192 19.5 6.64755 18.3917 5.66962Z',
  d5: 'M12 1C12.5523 1 13 1.44772 13 2V4.55719C12.7159 4.59753 12.4208 4.64043 12.1144 4.68498L11 4.84694V2C11 1.44772 11.4477 1 12 1Z',
  d6: 'M13 4.55719C14.251 4.37955 15.288 4.25145 16.1403 4.24989C17.2214 4.24792 18.1392 4.4465 18.8879 5.10713C19.6342 5.76562 19.9543 6.65562 20.1043 7.73799C20.2249 8.60754 20.2457 9.68758 20.2492 11H13L13 4.55719Z',
  d7: 'M20.25 11.8518C20.25 11.5576 20.25 11.2737 20.2492 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.2493C20.25 12.7262 20.25 12.4423 20.25 12.148V11.8518Z',
  d8: 'M13 19.4426C12.7159 19.4022 12.4208 19.3593 12.1143 19.3148L11 19.1528V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V19.4426Z',
  d9: 'M13 19.4426L13 13H20.2493C20.2457 14.3123 20.2249 15.3923 20.1043 16.2618C19.9543 17.3441 19.6342 18.2341 18.8879 18.8926C18.1392 19.5533 17.2214 19.7518 16.1403 19.7499C15.288 19.7483 14.251 19.6202 13 19.4426Z',
  d10: 'M3.75 12.0458C3.75 12.382 3.74999 12.6997 3.75192 13H11L11 19.1528L9.64879 18.9564C8.47808 18.7863 7.5338 18.6491 6.79003 18.4493C6.01787 18.242 5.37818 17.9472 4.86489 17.4091C4.76206 17.3013 4.6653 17.1878 4.57505 17.0691C4.12567 16.4782 3.93089 15.7967 3.83887 14.9944C3.77476 14.4355 3.7569 13.7761 3.75192 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H3.75189C3.75687 10.2238 3.77475 9.5643 3.83887 9.00533C3.93089 8.20307 4.12567 7.52158 4.57505 6.93066C4.6653 6.81198 4.76206 6.69846 4.86489 6.59066C5.37818 6.05254 6.01787 5.7578 6.79003 5.55043C7.53381 5.35069 8.47811 5.21346 9.64884 5.04332L11 4.84694L11 11H3.75189C3.74997 11.3002 3.75 11.618 3.75 11.954V12.0458Z',
  d11: 'M13 4.55732C12.7159 4.59766 12.4208 4.64055 12.1144 4.6851L11 4.84706L9.64884 5.04344C8.47811 5.21358 7.53381 5.35081 6.79003 5.55055C6.01787 5.75792 5.37818 6.05266 4.86489 6.59079C4.76206 6.69859 4.6653 6.8121 4.57505 6.93078C4.12567 7.5217 3.93089 8.20319 3.83887 9.00545C3.77475 9.56443 3.75687 10.224 3.75189 11.0001C3.74999 11.2962 3.75 11.6093 3.75 11.9402V11.9542V12.046V12.0462C3.75 12.3823 3.74999 12.6999 3.75192 13.0001C3.7569 13.7762 3.77476 14.4356 3.83887 14.9945C3.93089 15.7968 4.12567 16.4783 4.57505 17.0692C4.6653 17.1879 4.76206 17.3014 4.86489 17.4092C5.37818 17.9473 6.01787 18.2421 6.79003 18.4494C7.5338 18.6492 8.47808 18.7864 9.64879 18.9566L11 19.1529L12.1143 19.3149C12.4208 19.3594 12.7159 19.4023 13 19.4427C14.251 19.6203 15.288 19.7484 16.1403 19.75C17.2214 19.752 18.1392 19.5534 18.8879 18.8927C19.6342 18.2343 19.9543 17.3443 20.1043 16.2619C20.2249 15.3924 20.2457 14.3124 20.2493 13.0001C20.25 12.7263 20.25 12.4424 20.25 12.1481V11.8519C20.25 11.5577 20.25 11.2739 20.2492 11.0001C20.2457 9.68771 20.2249 8.60767 20.1043 7.73811C19.9543 6.65575 19.6342 5.76575 18.8879 5.10725C18.1392 4.44662 17.2214 4.24804 16.1403 4.25001C15.288 4.25157 14.251 4.37967 13 4.55732Z',
  d12: 'M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z',
  d13: 'M19.5002 5L4.49902 7L4.49902 17L19.5002 19V5Z',
  d14: 'M13 18.8899V13H20.2512V19C20.2512 19.2162 20.1579 19.4219 19.9953 19.5643C19.8326 19.7067 19.6164 19.772 19.4021 19.7434L13 18.8899Z',
  d15: 'M11 18.6232L4.40089 17.7434C4.02828 17.6937 3.75 17.3759 3.75 17V13H11V18.6232Z',
  d16: 'M3.75 11H11V5.37677L4.40089 6.25658C4.02828 6.30626 3.75 6.6241 3.75 7V11Z',
  d17: 'M13 5.11013V11H20.2512V5C20.2512 4.78381 20.1579 4.57813 19.9953 4.43572C19.8326 4.29331 19.6164 4.22801 19.4021 4.25658L13 5.11013Z',
  d18: 'M13 18.8899L11 18.6232V22H13V18.8899Z',
  d19: 'M20.2512 13V11H22V13H20.2512Z',
  d20: 'M13 5.11013V2H11V5.37677L13 5.11013Z',
  d21: 'M3.75 11H2V13H3.75V11Z',
};

export const IconPerspectiveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-stroke-rounded IconPerspectiveStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPerspectiveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-duotone-rounded IconPerspectiveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconPerspectiveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-twotone-rounded IconPerspectiveTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPerspectiveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-solid-rounded IconPerspectiveSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPerspectiveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-bulk-rounded IconPerspectiveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPerspectiveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-stroke-sharp IconPerspectiveStrokeSharp"
    >
      <path 
        d={d.d13} 
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
    </TheIconWrapper>
  );
};

export const IconPerspectiveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="perspective-solid-sharp IconPerspectiveSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfPerspective: TheIconSelfPack = {
  name: 'Perspective',
  StrokeRounded: IconPerspectiveStrokeRounded,
  DuotoneRounded: IconPerspectiveDuotoneRounded,
  TwotoneRounded: IconPerspectiveTwotoneRounded,
  SolidRounded: IconPerspectiveSolidRounded,
  BulkRounded: IconPerspectiveBulkRounded,
  StrokeSharp: IconPerspectiveStrokeSharp,
  SolidSharp: IconPerspectiveSolidSharp,
};