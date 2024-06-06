import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501',
  d2: 'M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5',
  d3: 'M3 11.1627V12.8373C3 14.0944 3 14.723 3.10956 15.2815C3.70555 18.3203 6.18961 19.6768 9.05112 20.484C10.2401 20.8194 10.8346 20.987 11.3156 20.9988C13.3831 21.0494 14.9264 19.4769 15 17.625V6.37501C14.9264 4.52307 13.3831 2.95061 11.3156 3.00119C10.8346 3.01295 10.2401 3.18064 9.05112 3.51603C6.18961 4.32316 3.70555 5.67965 3.10956 8.71846C3 9.27705 3 9.90561 3 11.1627Z',
  d4: 'M11.5412 2.0015C14.1631 1.93735 16.1543 3.94579 16.2492 6.3353C16.2712 6.88715 15.8416 7.35229 15.2897 7.37423C14.7379 7.39616 14.2727 6.96658 14.2508 6.41473C14.1986 5.10037 13.1031 3.96388 11.5901 4.0009C11.2681 4.00878 10.8273 4.12457 9.57262 4.47848C6.79407 5.26221 4.82159 6.4599 4.34088 8.91093C4.25456 9.35105 4.25002 9.86248 4.25002 11.1628V12.8373C4.25002 14.1375 4.25456 14.649 4.34088 15.0891C4.82159 17.5401 6.79407 18.7378 9.57261 19.5215C10.8273 19.8754 11.2681 19.9912 11.5901 19.9991C13.1031 20.0361 14.1986 18.8996 14.2508 17.5853C14.2727 17.0334 14.7379 16.6038 15.2897 16.6258C15.8416 16.6477 16.2712 17.1129 16.2492 17.6647C16.1543 20.0542 14.1631 22.0627 11.5412 21.9985C10.9317 21.9836 10.224 21.7837 9.18755 21.491C9.13575 21.4764 9.08313 21.4615 9.02967 21.4464C6.08519 20.6159 3.08955 19.1006 2.37827 15.474C2.24978 14.8189 2.24987 14.0995 2.25001 12.9538C2.25001 12.9154 2.25002 12.8766 2.25002 12.8373L2.25002 11.1628C2.25002 11.1234 2.25001 11.0846 2.25001 11.0463C2.24987 9.90053 2.24978 9.18113 2.37827 8.526C3.08955 4.89942 6.0852 3.38413 9.02967 2.55359C9.08314 2.53851 9.13576 2.52365 9.18756 2.50902C10.224 2.21629 10.9317 2.01641 11.5412 2.0015Z',
  d5: 'M9.75 13.0059C9.19772 13.0059 8.75 12.5581 8.75 12.0059C8.75 11.4536 9.19772 11.0059 9.75 11.0059L17.25 11.0059L17.25 10.4116C17.2499 10.236 17.2497 10.0203 17.2718 9.84387L17.2722 9.84053C17.288 9.71408 17.3598 9.13804 17.9254 8.86368C18.4923 8.58872 18.9924 8.89065 19.1006 8.95597L19.5691 9.29511C19.9449 9.58975 20.4594 9.99545 20.8504 10.3759C21.0455 10.5657 21.2467 10.783 21.4056 11.0139C21.5468 11.2191 21.75 11.5693 21.75 12C21.75 12.4307 21.5468 12.7809 21.4056 12.9861C21.2467 13.217 21.0455 13.4343 20.8504 13.6241C20.4594 14.0046 19.9449 14.4102 19.5691 14.7049L19.1006 15.044C18.9924 15.1093 18.4922 15.4113 17.9254 15.1363C17.3598 14.862 17.288 14.2859 17.2722 14.1595L17.2718 14.1561C17.2497 13.9797 17.2499 13.764 17.25 13.5884L17.25 13.0059L9.75 13.0059Z',
  d6: 'M15 17.9987L13 21.9974L3 17.9987L3 5.99868L13 2L15 5.99868',
  d7: 'M10 11.9961H20.3106M17.9998 8.99609L21 11.9961L17.9998 14.9961',
  d8: 'M13.1287 1.07313C13.6115 0.880066 14.1617 1.08925 14.3943 1.55431L16.3944 5.553L14.6056 6.44767L13.0171 3.27172L4.5 6.67745L4.5 17.3232L13.0171 20.7289L14.6056 17.553L16.3944 18.4477L14.3943 22.4464C14.1617 22.9114 13.6115 23.1206 13.1287 22.9275L3.12872 18.9289C2.749 18.777 2.5 18.4093 2.5 18.0003L2.5 6.00033C2.5 5.59139 2.749 5.22365 3.12871 5.07181L13.1287 1.07313Z',
  d9: 'M17.6696 12.9977L16.3767 14.2905L17.7909 15.7048L21.4982 11.9977L17.7909 8.29053L16.3767 9.70479L17.6696 10.9977H9.08398V12.9977H17.6696Z',
};

export const IconLogout03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-stroke-rounded IconLogout03StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-duotone-rounded IconLogout03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-twotone-rounded IconLogout03TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-solid-rounded IconLogout03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-bulk-rounded IconLogout03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogout03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-stroke-sharp IconLogout03StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLogout03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-03-solid-sharp IconLogout03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLogout03: TheIconSelfPack = {
  name: 'Logout03',
  StrokeRounded: IconLogout03StrokeRounded,
  DuotoneRounded: IconLogout03DuotoneRounded,
  TwotoneRounded: IconLogout03TwotoneRounded,
  SolidRounded: IconLogout03SolidRounded,
  BulkRounded: IconLogout03BulkRounded,
  StrokeSharp: IconLogout03StrokeSharp,
  SolidSharp: IconLogout03SolidSharp,
};