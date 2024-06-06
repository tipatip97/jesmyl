import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.7185 10.7151C18.5258 10.8979 18.2682 11 18.0001 11C17.732 11 17.4744 10.8979 17.2817 10.7151C15.5167 9.03169 13.1515 7.15111 14.305 4.42085C14.9286 2.94462 16.4257 2 18.0001 2C19.5745 2 21.0715 2.94462 21.6952 4.42085C22.8472 7.14767 20.4878 9.03749 18.7185 10.7151Z',
  d2: 'M18 6H18.009',
  d3: 'M11 7H9.5C7.567 7 6 8.34315 6 10C6 11.6569 7.567 13 9.5 13H12.5C14.433 13 16 14.3431 16 16C16 17.6569 14.433 19 12.5 19H11',
  d4: 'M18.0005 1.25C16.1373 1.25 14.3603 2.36363 13.6145 4.12898C12.9165 5.78117 13.305 7.19785 14.0715 8.37081C14.6855 9.31037 15.5816 10.1488 16.3489 10.8667C16.4929 11.0014 16.6323 11.1318 16.7644 11.2578L16.7661 11.2594C17.0996 11.5756 17.5424 11.75 18.0005 11.75C18.4586 11.75 18.9014 11.5756 19.235 11.2594C19.3604 11.1404 19.4922 11.0176 19.6281 10.8909C20.403 10.1685 21.3107 9.32241 21.931 8.37106C22.6965 7.19704 23.0836 5.77916 22.3865 4.12898C21.6407 2.36363 19.8637 1.25 18.0005 1.25ZM17.9922 4.25C17.03 4.25 16.25 5.0335 16.25 6C16.25 6.9665 17.03 7.75 17.9922 7.75H18.0078C18.97 7.75 19.75 6.9665 19.75 6C19.75 5.0335 18.97 4.25 18.0078 4.25H17.9922Z',
  d5: 'M1.25 19C1.25 16.9289 2.92893 15.25 5 15.25C7.07107 15.25 8.75 16.9289 8.75 19C8.75 21.0711 7.07107 22.75 5 22.75C2.92893 22.75 1.25 21.0711 1.25 19Z',
  d6: 'M5 10C5 7.65179 7.16489 6 9.5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H9.5C7.96911 8 7 9.0345 7 10C7 10.9655 7.96911 12 9.5 12H12.5C14.8351 12 17 13.6518 17 16C17 18.3482 14.8351 20 12.5 20H11C10.4477 20 10 19.5523 10 19C10 18.4477 10.4477 18 11 18H12.5C14.0309 18 15 16.9655 15 16C15 15.0345 14.0309 14 12.5 14H9.5C7.16489 14 5 12.3482 5 10Z',
  d7: 'M22 6.05C22 9.2 18 11 18 11C18 11 14 9.2 14 6.05C14 3.81325 15.7909 2 18 2C20.2091 2 22 3.81325 22 6.05Z',
  d8: 'M16.9981 11.249C17.1996 11.3653 17.3687 11.4542 17.4894 11.5148L18 11.75L18.5106 11.5148C18.6313 11.4542 18.8004 11.3653 19.0019 11.249C19.4032 11.0173 19.9416 10.6718 20.4837 10.2176C21.5439 9.32915 22.75 7.91086 22.75 6.01711C22.75 3.39306 20.6321 1.25 18 1.25C15.3679 1.25 13.25 3.39306 13.25 6.01711C13.25 7.91086 14.4561 9.32915 15.5163 10.2176C16.0584 10.6718 16.5968 11.0173 16.9981 11.249ZM17.9922 4.25C17.03 4.25 16.25 5.0335 16.25 6C16.25 6.9665 17.03 7.75 17.9922 7.75H18.0078C18.97 7.75 19.75 6.9665 19.75 6C19.75 5.0335 18.97 4.25 18.0078 4.25H17.9922Z',
  d9: 'M5 10C5 7.65179 7.16489 6 9.5 6H11V8H9.5C7.96911 8 7 9.0345 7 10C7 10.9655 7.96911 12 9.5 12H12.5C14.8351 12 17 13.6518 17 16C17 18.3482 14.8351 20 12.5 20H11V18H12.5C14.0309 18 15 16.9655 15 16C15 15.0345 14.0309 14 12.5 14H9.5C7.16489 14 5 12.3482 5 10Z',
};

export const IconRoute02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-stroke-rounded IconRoute02StrokeRounded"
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
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-duotone-rounded IconRoute02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="19" 
        r="3" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-twotone-rounded IconRoute02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-solid-rounded IconRoute02SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-bulk-rounded IconRoute02BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-stroke-sharp IconRoute02StrokeSharp"
    >
      <path 
        d={d.d7} 
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
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoute02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="route-02-solid-sharp IconRoute02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const iconPackOfRoute02: TheIconSelfPack = {
  name: 'Route02',
  StrokeRounded: IconRoute02StrokeRounded,
  DuotoneRounded: IconRoute02DuotoneRounded,
  TwotoneRounded: IconRoute02TwotoneRounded,
  SolidRounded: IconRoute02SolidRounded,
  BulkRounded: IconRoute02BulkRounded,
  StrokeSharp: IconRoute02StrokeSharp,
  SolidSharp: IconRoute02SolidSharp,
};