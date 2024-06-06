import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 11.9999L12 11.9999M22 11.9999C22 12.5619 21.5619 12.9891 20.6857 13.8436L19.0294 15.5M22 11.9999C22 11.4378 21.5619 11.0106 20.6857 10.1561L19.0296 8.5',
  d2: 'M1.25 12.0312C1.25 9.82211 3.04086 8.03125 5.25 8.03125C7.45914 8.03125 9.25 9.82211 9.25 12.0312C9.25 14.2404 7.45914 16.0312 5.25 16.0312C3.04086 16.0312 1.25 14.2404 1.25 12.0312Z',
  d3: 'M10.75 11.9981C10.75 11.4458 11.1977 10.9981 11.75 10.9981L17.75 10.9981L17.75 9.66797C17.7498 9.52243 17.7495 9.31039 17.7754 9.1299C17.8038 8.93271 17.9119 8.41537 18.4273 8.15257C18.939 7.89172 19.3882 8.11758 19.5564 8.2184C19.7069 8.30862 19.864 8.44005 19.9705 8.52916L19.9971 8.55139C20.4458 8.9256 21.0713 9.46884 21.5923 10.0057C21.8506 10.272 22.1074 10.5612 22.3067 10.845C22.4064 10.9871 22.5074 11.1497 22.5868 11.3252C22.6614 11.4901 22.75 11.7378 22.75 12.0312C22.75 12.3246 22.6614 12.5724 22.5868 12.7373C22.5074 12.9128 22.4065 13.0754 22.3067 13.2174C22.1074 13.5013 21.8506 13.7905 21.5923 14.0567C21.0714 14.5936 20.4458 15.1369 19.9971 15.5111L19.9705 15.5333C19.864 15.6224 19.7069 15.7539 19.5564 15.8441C19.3882 15.9449 18.939 16.1708 18.4274 15.9099C17.9119 15.6471 17.8038 15.1298 17.7754 14.9326C17.7495 14.7521 17.7498 14.5401 17.75 14.3945L17.75 12.9981H11.75C11.1977 12.9981 10.75 12.5504 10.75 11.9981Z',
  d4: 'M12 11.9999L21.5823 11.9999M19.0294 15.5L22 11.9999L19.0296 8.5',
  d5: 'M1.25 12C1.25 9.92893 2.92893 8.25 5 8.25C7.07107 8.25 8.75 9.92893 8.75 12C8.75 14.0711 7.07107 15.75 5 15.75C2.92893 15.75 1.25 14.0711 1.25 12Z',
  d6: 'M10.7666 10.9999L19.2781 10.9999L17.3527 8.79421L18.8775 7.50004L22.7501 11.9999L18.8775 16.4999L17.3527 15.2058L19.2782 12.9999L10.7666 12.9999L10.7666 10.9999Z',
};

export const IconMoveRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-stroke-rounded IconMoveRightStrokeRounded"
    >
      <circle 
        cx="5" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-duotone-rounded IconMoveRightDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="12" 
        r="3" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="5" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-twotone-rounded IconMoveRightTwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-solid-rounded IconMoveRightSolidRounded"
    >
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-bulk-rounded IconMoveRightBulkRounded"
    >
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-stroke-sharp IconMoveRightStrokeSharp"
    >
      <circle 
        cx="5" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="move-right-solid-sharp IconMoveRightSolidSharp"
    >
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

export const iconPackOfMoveRight: TheIconSelfPack = {
  name: 'MoveRight',
  StrokeRounded: IconMoveRightStrokeRounded,
  DuotoneRounded: IconMoveRightDuotoneRounded,
  TwotoneRounded: IconMoveRightTwotoneRounded,
  SolidRounded: IconMoveRightSolidRounded,
  BulkRounded: IconMoveRightBulkRounded,
  StrokeSharp: IconMoveRightStrokeSharp,
  SolidSharp: IconMoveRightSolidSharp,
};