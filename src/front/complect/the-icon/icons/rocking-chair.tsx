import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 8V14M15 8V14',
  d2: 'M7 14L18 14',
  d3: 'M16 14L18 20',
  d4: 'M4 2L8 14L6 20',
  d5: 'M6 8H16.5C17.3284 8 18 8.67157 18 9.5',
  d6: 'M4 18C5.72574 20.412 8.66464 22 12 22C15.3354 22 18.2743 20.412 20 18',
  d7: 'M15 14V8H6L8 14H15Z',
  d8: 'M7 14H8M18 14L15 14M18 9.5C18 8.67157 17.3284 8 16.5 8H15M15 8H6L8 14M15 8V14M15 14L8 14',
  d9: 'M6 8L8 14M18 14L16.0234 14H15H8.03516M7 14H8M8 14L4 2M8 14L6 20L5.98239 20.0222M8 14H8.03516M4 18C4.54742 18.7651 5.2169 19.4473 5.98239 20.0222M20 18C19.452 18.7659 18.7816 19.4488 18.0151 20.0241M18.0151 20.0241C16.3678 21.2604 14.2762 22 12 22C9.72264 22 7.63011 21.2597 5.98239 20.0222M18.0151 20.0241L18 20L16 14H8.03516',
  d10: 'M11 7C11.5523 7 12 7.44772 12 8V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V8C10 7.44772 10.4477 7 11 7ZM15 7C15.5523 7 16 7.44772 16 8V14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14V8C14 7.44772 14.4477 7 15 7Z',
  d11: 'M5.18877 7.41529C5.37672 7.15452 5.67856 7 6.00001 7H16.5C17.8807 7 19 8.11929 19 9.5C19 10.0523 18.5523 10.5 18 10.5C17.4477 10.5 17 10.0523 17 9.5C17 9.22386 16.7761 9 16.5 9H16V13L18 13C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15L7.00001 15C6.44772 15 6.00001 14.5523 6.00001 14C6.00001 13.5764 6.26344 13.2142 6.63543 13.0685L5.05132 8.31623C4.94967 8.01128 5.00081 7.67606 5.18877 7.41529ZM8.72077 13L14 13V9H7.38743L8.72077 13Z',
  d12: 'M3.68404 1.05159C4.20799 0.87694 4.77431 1.1601 4.94895 1.68404L8.72103 13.0003L18.0003 13.0003C18.5526 13.0003 19.0003 13.448 19.0003 14.0003C19.0003 14.5526 18.5526 15.0003 18.0003 15.0003H17.3877L18.4796 18.2759C18.7357 18.0052 18.9721 17.7187 19.187 17.4184C19.5084 16.9692 20.133 16.8656 20.5822 17.187C21.0313 17.5084 21.1349 18.133 20.8135 18.5822C20.2047 19.4331 19.462 20.1889 18.6156 20.8241C16.7966 22.1893 14.4948 23.0003 12.0003 23.0003C9.50447 23.0003 7.20157 22.1885 5.38214 20.8221C4.53694 20.1873 3.79517 19.4322 3.187 18.5822C2.86563 18.133 2.96923 17.5084 3.41839 17.187C3.86754 16.8656 4.49218 16.9692 4.81354 17.4184C5.02843 17.7187 5.26487 18.0052 5.52097 18.2759L6.63569 14.9317C6.2637 14.786 6.00027 14.4239 6.00027 14.0003C6.00027 13.5766 6.2637 13.2145 6.63569 13.0688L3.05159 2.3165C2.87694 1.79256 3.1601 1.22624 3.68404 1.05159ZM8.72103 15.0003L7.17733 19.6314C8.55027 20.4936 10.2083 21.0003 12.0003 21.0003C13.7922 21.0003 15.4503 20.4936 16.8232 19.6314L15.2795 15.0003H8.72103Z',
  d13: 'M6.00001 7C5.67856 7 5.37672 7.15452 5.18877 7.41529C5.00081 7.67606 4.94967 8.01128 5.05132 8.31623L6.63543 13.0685C6.26344 13.2142 6.00001 13.5764 6.00001 14C6.00001 14.5523 6.44772 15 7.00001 15H18C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13L16 13L16 9H16.5C16.7761 9 17 9.22386 17 9.5C17 10.0523 17.4477 10.5 18 10.5C18.5523 10.5 19 10.0523 19 9.5C19 8.11929 17.8807 7 16.5 7H6.00001ZM14 9V13H12V9H14ZM10 9V13H8.72077L7.38743 9H10Z',
  d14: 'M8 14L18 14',
  d15: 'M6 8H18V10',
  d16: 'M5.49159 18.0377C5.1883 17.7287 4.91046 17.3985 4.661 17.0498L3 18.2382C4.95634 20.9725 8.26845 22.75 12 22.75C15.7316 22.75 19.0437 20.9725 21 18.2382L19.339 17.0498C19.0923 17.3945 18.8179 17.7213 18.5186 18.0273L17.3868 14.6318H18V12.6318H16V8.63184H17V9.63184H19V7.63184C19 7.07955 18.5523 6.63184 18 6.63184H6.71085L4.89737 1.25L3 1.88246L6.96023 13.6318L5.49159 18.0377ZM7.15849 19.3615L8.73505 14.6318H15.2786L16.8528 19.3546C15.4656 20.2074 13.7994 20.7076 12 20.7076C10.2055 20.7076 8.54346 20.2101 7.15849 19.3615ZM10 8.63184H7.38477L8.73262 12.6318H10V8.63184ZM14 8.63184H12V12.6318H14V8.63184Z',
};

export const IconRockingChairStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-stroke-rounded IconRockingChairStrokeRounded"
    >
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

export const IconRockingChairDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-duotone-rounded IconRockingChairDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRockingChairTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-twotone-rounded IconRockingChairTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRockingChairSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-solid-rounded IconRockingChairSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRockingChairBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-bulk-rounded IconRockingChairBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRockingChairStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-stroke-sharp IconRockingChairStrokeSharp"
    >
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
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const IconRockingChairSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rocking-chair-solid-sharp IconRockingChairSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRockingChair: TheIconSelfPack = {
  name: 'RockingChair',
  StrokeRounded: IconRockingChairStrokeRounded,
  DuotoneRounded: IconRockingChairDuotoneRounded,
  TwotoneRounded: IconRockingChairTwotoneRounded,
  SolidRounded: IconRockingChairSolidRounded,
  BulkRounded: IconRockingChairBulkRounded,
  StrokeSharp: IconRockingChairStrokeSharp,
  SolidSharp: IconRockingChairSolidSharp,
};