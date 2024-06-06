import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 11L6 15.5C6 17.9853 8.01472 20 10.5 20C12.9853 20 15 17.9853 15 15.5V4',
  d2: 'M18 6.99998C18 6.99998 15.7905 4.00001 15 4C14.2094 3.99999 12 7 12 7',
  d3: 'M12.0598 6.96775C12.6498 6.36689 14.2261 3.99199 15.0579 4.00002C15.8896 4.00805 17.4207 6.41368 17.9988 7.02549M15.0474 4.48962L14.927 15.2857C14.9432 16.0706 14.8688 17.7112 13.1983 19.0159C12.0093 19.9875 9.06507 21.0188 6.75571 17.9681C6.43413 17.5556 5.87124 16.513 6.02941 14.3002L6.06774 10.9122',
  d4: 'M6 10C5.44771 10 5 10.4477 5 11L5 15.5C5 18.5376 7.46243 21 10.5 21C13.5376 21 16 18.5376 16 15.5L16 7.99999L18 8C18.3772 8 18.7223 7.78775 18.8925 7.45111C19.0626 7.11447 19.0289 6.71072 18.8052 6.40699L18.7972 6.39618L18.7768 6.36875C18.7592 6.34517 18.7338 6.31123 18.7015 6.26839C18.6368 6.18278 18.5442 6.06137 18.4308 5.91603C18.2048 5.6264 17.8923 5.23686 17.5516 4.84439C17.2151 4.45689 16.8314 4.04362 16.4644 3.71937C16.2821 3.55825 16.0803 3.39794 15.8722 3.27249C15.6915 3.16359 15.3773 3 15 3C14.6227 3 14.3085 3.16359 14.1279 3.27249C13.9198 3.39794 13.718 3.55825 13.5356 3.71936C13.1686 4.04361 12.7849 4.45688 12.4485 4.84438C12.1077 5.23684 11.7953 5.62637 11.5692 5.916C11.4558 6.06134 11.3632 6.18275 11.2985 6.26836C11.2662 6.31119 11.2408 6.34513 11.2232 6.36871L11.2028 6.39614L11.1972 6.40369L11.1949 6.40679C10.9712 6.71051 10.9374 7.11443 11.1075 7.45107C11.2777 7.78772 11.6228 7.99998 12 7.99998L14 7.99998L14 15.5C14 17.433 12.433 19 10.5 19C8.567 19 7 17.433 7 15.5L7 11C7 10.4477 6.55228 10 6 10Z',
  d5: 'M6 10C5.44772 10 5 10.4477 5 11L5 15.5C5 18.5376 7.46243 21 10.5 21C13.5376 21 16 18.5376 16 15.5L16 8.00001L14 8L14 15.5C14 17.433 12.433 19 10.5 19C8.567 19 7 17.433 7 15.5L7 11C7 10.4477 6.55228 10 6 10Z',
  d6: 'M11.1075 7.45107C11.2776 7.78772 11.6227 7.99998 12 7.99998L16 7.99999L18 8C18.3772 8 18.7223 7.78775 18.8924 7.45111C19.0626 7.11447 19.0288 6.71072 18.8052 6.40699L18.7972 6.39618L18.7768 6.36875C18.7592 6.34517 18.7338 6.31123 18.7014 6.26839C18.6368 6.18278 18.5442 6.06137 18.4307 5.91603C18.2047 5.6264 17.8923 5.23686 17.5515 4.84439C17.2151 4.45689 16.8314 4.04362 16.4644 3.71937C16.282 3.55825 16.0802 3.39794 15.8721 3.27249C15.6915 3.16359 15.3773 3 15 3C14.6227 3 14.3085 3.16359 14.1278 3.27249C13.9197 3.39794 13.7179 3.55825 13.5356 3.71936C13.1686 4.04361 12.7849 4.45688 12.4484 4.84438C12.1077 5.23684 11.7952 5.62637 11.5692 5.916C11.4558 6.06134 11.3631 6.18274 11.2985 6.26836C11.2661 6.31119 11.2407 6.34513 11.2232 6.36871L11.2028 6.39614L11.1972 6.40369L11.1949 6.40679C10.9712 6.71051 10.9373 7.11443 11.1075 7.45107Z',
  d7: 'M10.0449 8.22347L14.0341 4.2612L17.998 8.21827M14.0215 4L14.0215 16.057C14.0215 18.2347 12.2263 20 10.0117 20C7.79719 20 6.00195 18.2347 6.00195 16.057L6.00195 11.185',
  d8: 'M6.5 15.5001L6.5 11.0001H4.5L4.5 15.5001C4.5 18.5377 6.96243 21.0001 10 21.0001C13.0376 21.0001 15.5 18.5377 15.5 15.5001L15.5 8.4142H19.5L14.5 3L9.49997 8.4142H13.5L13.5 15.5001C13.5 17.4331 11.933 19.0001 10 19.0001C8.067 19.0001 6.5 17.4331 6.5 15.5001Z',
};

export const IconArrowTurnUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-stroke-rounded IconArrowTurnUpStrokeRounded"
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

export const IconArrowTurnUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-duotone-rounded IconArrowTurnUpDuotoneRounded"
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

export const IconArrowTurnUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-twotone-rounded IconArrowTurnUpTwotoneRounded"
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

export const IconArrowTurnUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-solid-rounded IconArrowTurnUpSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-bulk-rounded IconArrowTurnUpBulkRounded"
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

export const IconArrowTurnUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-stroke-sharp IconArrowTurnUpStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-up-solid-sharp IconArrowTurnUpSolidSharp"
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

export const iconPackOfArrowTurnUp: TheIconSelfPack = {
  name: 'ArrowTurnUp',
  StrokeRounded: IconArrowTurnUpStrokeRounded,
  DuotoneRounded: IconArrowTurnUpDuotoneRounded,
  TwotoneRounded: IconArrowTurnUpTwotoneRounded,
  SolidRounded: IconArrowTurnUpSolidRounded,
  BulkRounded: IconArrowTurnUpBulkRounded,
  StrokeSharp: IconArrowTurnUpStrokeSharp,
  SolidSharp: IconArrowTurnUpSolidSharp,
};