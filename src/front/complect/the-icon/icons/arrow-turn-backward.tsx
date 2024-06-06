import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 6H15.5C17.9853 6 20 8.01472 20 10.5C20 12.9853 17.9853 15 15.5 15H4',
  d2: 'M6.99998 12C6.99998 12 4.00001 14.2095 4 15C3.99999 15.7906 7 18 7 18',
  d3: 'M6.98052 12.0022C6.3749 12.5901 3.98987 14.1521 3.98828 14.9907C3.98669 15.8292 6.36649 17.4002 6.96956 17.9899M4.47634 14.9857L15.2371 14.9875C16.0193 15.0127 17.6551 14.9564 18.9747 13.2873C19.9566 12.0998 21.0184 9.14348 18.0047 6.78065C17.5973 6.45176 16.5648 5.87243 14.3577 6.00664L10.9807 6.00664',
  d4: 'M10 6C10 5.44772 10.4477 5 11 5H15.5C18.5376 5 21 7.46243 21 10.5C21 13.5376 18.5376 16 15.5 16L7.99999 16L8 18C8 18.3772 7.78775 18.7223 7.45111 18.8925C7.11447 19.0626 6.71072 19.0289 6.40699 18.8052L6.39618 18.7972L6.36875 18.7768C6.34517 18.7592 6.31123 18.7338 6.26839 18.7015C6.18278 18.6368 6.06137 18.5442 5.91603 18.4308C5.6264 18.2048 5.23686 17.8923 4.84439 17.5516C4.45689 17.2151 4.04362 16.8314 3.71937 16.4644C3.55825 16.2821 3.39794 16.0803 3.27249 15.8722C3.16359 15.6915 3 15.3773 3 15C3 14.6227 3.16359 14.3085 3.27249 14.1279C3.39794 13.9198 3.55825 13.718 3.71936 13.5356C4.04361 13.1686 4.45688 12.7849 4.84438 12.4485C5.23684 12.1077 5.62637 11.7953 5.916 11.5692C6.06134 11.4558 6.18274 11.3632 6.26836 11.2985C6.31119 11.2662 6.34513 11.2408 6.36871 11.2232L6.39614 11.2028L6.40369 11.1972L6.40679 11.1949C6.71051 10.9712 7.11443 10.9374 7.45107 11.1075C7.78772 11.2777 7.99998 11.6228 7.99998 12L7.99998 14H15.5C17.433 14 19 12.433 19 10.5C19 8.567 17.433 7 15.5 7H11C10.4477 7 10 6.55228 10 6Z',
  d5: 'M10 6C10 5.44772 10.4477 5 11 5H15.5C18.5376 5 21 7.46243 21 10.5C21 13.5376 18.5376 16 15.5 16L8.00001 16L8 14H15.5C17.433 14 19 12.433 19 10.5C19 8.567 17.433 7 15.5 7H11C10.4477 7 10 6.55228 10 6Z',
  d6: 'M7.45107 11.1075C7.78772 11.2776 7.99998 11.6227 7.99998 12L8 18C8 18.3772 7.78775 18.7223 7.45111 18.8924C7.11447 19.0626 6.71072 19.0288 6.40699 18.8052L6.39618 18.7972L6.36875 18.7768C6.34517 18.7592 6.31123 18.7338 6.26839 18.7014C6.18278 18.6368 6.06137 18.5442 5.91603 18.4307C5.6264 18.2047 5.23686 17.8923 4.84439 17.5515C4.45689 17.2151 4.04362 16.8314 3.71937 16.4644C3.55825 16.282 3.39794 16.0802 3.27249 15.8721C3.16359 15.6915 3 15.3773 3 15C3 14.6227 3.16359 14.3085 3.27249 14.1278C3.39794 13.9197 3.55825 13.7179 3.71936 13.5356C4.04361 13.1686 4.45688 12.7849 4.84438 12.4484C5.23684 12.1077 5.62637 11.7952 5.916 11.5692C6.06134 11.4558 6.18274 11.3631 6.26836 11.2985C6.31119 11.2661 6.34513 11.2407 6.36871 11.2232L6.39614 11.2028L6.40369 11.1972L6.40679 11.1949C6.71051 10.9712 7.11443 10.9373 7.45107 11.1075Z',
  d7: 'M8.223 10.0451L4.26073 14.0343L8.21781 17.9982M4 14.0215H16.057C18.2347 14.0215 20 12.2263 20 10.0117C20 7.79719 18.2347 6.00195 16.057 6.00195H11.185',
  d8: 'M15.5001 6.5H11.0001V4.5H15.5001C18.5377 4.5 21.0001 6.96243 21.0001 10C21.0001 13.0376 18.5377 15.5 15.5001 15.5L8.4142 15.5V19.5L3 14.5L8.4142 9.49997V13.5L15.5001 13.5C17.4331 13.5 19.0001 11.933 19.0001 10C19.0001 8.067 17.4331 6.5 15.5001 6.5Z',
};

export const IconArrowTurnBackwardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-stroke-rounded IconArrowTurnBackwardStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-duotone-rounded IconArrowTurnBackwardDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-twotone-rounded IconArrowTurnBackwardTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-solid-rounded IconArrowTurnBackwardSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-bulk-rounded IconArrowTurnBackwardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-stroke-sharp IconArrowTurnBackwardStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnBackwardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-backward-solid-sharp IconArrowTurnBackwardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowTurnBackward: TheIconSelfPack = {
  name: 'ArrowTurnBackward',
  StrokeRounded: IconArrowTurnBackwardStrokeRounded,
  DuotoneRounded: IconArrowTurnBackwardDuotoneRounded,
  TwotoneRounded: IconArrowTurnBackwardTwotoneRounded,
  SolidRounded: IconArrowTurnBackwardSolidRounded,
  BulkRounded: IconArrowTurnBackwardBulkRounded,
  StrokeSharp: IconArrowTurnBackwardStrokeSharp,
  SolidSharp: IconArrowTurnBackwardSolidSharp,
};