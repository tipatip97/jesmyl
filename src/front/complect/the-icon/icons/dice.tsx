import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.341 13.159C9.68198 12.5 8.62132 12.5 6.5 12.5C4.37868 12.5 3.31802 12.5 2.65901 13.159M10.341 13.159C11 13.818 11 14.8787 11 17C11 19.1213 11 20.182 10.341 20.841M10.341 13.159V13.159ZM2.65901 13.159C2 13.818 2 14.8787 2 17C2 19.1213 2 20.182 2.65901 20.841M2.65901 13.159V13.159ZM2.65901 20.841C3.31802 21.5 4.37868 21.5 6.5 21.5C8.62132 21.5 9.68198 21.5 10.341 20.841M2.65901 20.841V20.841ZM10.341 20.841V20.841Z',
  d2: 'M15.2218 4.77817C16.7406 6.29696 17.5 7.05635 17.5 8C17.5 8.94365 16.7406 9.70304 15.2218 11.2218C13.703 12.7406 12.9436 13.5 12 13.5C11.0563 13.5 10.297 12.7406 8.77817 11.2218C7.25939 9.70304 6.5 8.94365 6.5 8C6.5 7.05635 7.25939 6.29696 8.77817 4.77817C10.297 3.25939 11.0563 2.5 12 2.5C12.9437 2.5 13.703 3.25939 15.2218 4.77817Z',
  d3: 'M21.341 13.159C20.682 12.5 19.6213 12.5 17.5 12.5C15.3787 12.5 14.318 12.5 13.659 13.159M21.341 13.159C22 13.818 22 14.8787 22 17C22 19.1213 22 20.182 21.341 20.841M21.341 13.159V13.159ZM13.659 13.159C13 13.818 13 14.8787 13 17C13 19.1213 13 20.182 13.659 20.841M13.659 13.159V13.159ZM13.659 20.841C14.318 21.5 15.3787 21.5 17.5 21.5C19.6213 21.5 20.682 21.5 21.341 20.841M13.659 20.841V20.841ZM21.341 20.841V20.841Z',
  d4: 'M12.0082 8L11.9993 8',
  d5: 'M11 17C11 19.1213 11 20.182 10.341 20.841C9.68198 21.5 8.62132 21.5 6.5 21.5C4.37868 21.5 3.31802 21.5 2.65901 20.841C2 20.182 2 19.1213 2 17C2 14.8787 2 13.818 2.65901 13.159C3.31802 12.5 4.37868 12.5 6.5 12.5C8.62132 12.5 9.68198 12.5 10.341 13.159C11 13.818 11 14.8787 11 17Z',
  d6: 'M22 17C22 19.1213 22 20.182 21.341 20.841C20.682 21.5 19.6213 21.5 17.5 21.5C15.3787 21.5 14.318 21.5 13.659 20.841C13 20.182 13 19.1213 13 17C13 14.8787 13 13.818 13.659 13.159C14.318 12.5 15.3787 12.5 17.5 12.5C19.6213 12.5 20.682 12.5 21.341 13.159C22 13.818 22 14.8787 22 17Z',
  d7: 'M6.30044 12.125C7.26765 12.125 8.06523 12.125 8.69647 12.2098C9.35921 12.2989 9.94451 12.4932 10.4132 12.9618C10.8818 13.4305 11.0761 14.0158 11.1652 14.6785C11.25 15.3098 11.25 16.1074 11.25 17.0746V17.0746V17.1754V17.1754C11.25 18.1426 11.25 18.9402 11.1652 19.5715C11.0761 20.2342 10.8818 20.8195 10.4132 21.2882C9.94451 21.7568 9.35921 21.9511 8.69647 22.0402C8.06523 22.125 7.26766 22.125 6.30046 22.125H6.30043H6.1996H6.19957C5.23235 22.125 4.43478 22.125 3.80353 22.0402C3.14079 21.9511 2.55549 21.7568 2.08684 21.2882C1.61819 20.8195 1.42393 20.2342 1.33482 19.5715C1.24996 18.9402 1.24998 18.1426 1.25 17.1754V17.1754V17.0746V17.0746C1.24998 16.1073 1.24996 15.3098 1.33483 14.6785C1.42393 14.0158 1.61819 13.4305 2.08684 12.9618C2.55549 12.4932 3.14079 12.2989 3.80353 12.2098C4.43478 12.125 5.23235 12.125 6.19957 12.125H6.1996H6.30041H6.30044Z',
  d8: 'M17.8004 12.125C18.7677 12.125 19.5652 12.125 20.1965 12.2098C20.8592 12.2989 21.4445 12.4932 21.9132 12.9618C22.3818 13.4305 22.5761 14.0158 22.6652 14.6785C22.75 15.3098 22.75 16.1074 22.75 17.0746V17.0746V17.1754V17.1754C22.75 18.1426 22.75 18.9402 22.6652 19.5715C22.5761 20.2342 22.3818 20.8195 21.9132 21.2882C21.4445 21.7568 20.8592 21.9511 20.1965 22.0402C19.5652 22.125 18.7677 22.125 17.8005 22.125H17.8004H17.6996H17.6996C16.7324 22.125 15.9348 22.125 15.3035 22.0402C14.6408 21.9511 14.0555 21.7568 13.5868 21.2882C13.1182 20.8195 12.9239 20.2342 12.8348 19.5715C12.75 18.9402 12.75 18.1426 12.75 17.1754V17.1754V17.0746V17.0746C12.75 16.1073 12.75 15.3098 12.8348 14.6785C12.9239 14.0158 13.1182 13.4305 13.5868 12.9618C14.0555 12.4932 14.6408 12.2989 15.3035 12.2098C15.9348 12.125 16.7324 12.125 17.6996 12.125H17.6996H17.8004H17.8004Z',
  d9: 'M15.6394 4.30834L15.6394 4.30831L15.5667 4.23565C14.8697 3.53865 14.295 2.96388 13.779 2.57015C13.2372 2.15679 12.6754 1.875 12 1.875C11.3246 1.875 10.7628 2.15679 10.221 2.57015C9.705 2.96387 9.13028 3.53862 8.43331 4.23562L8.43331 4.23562L8.36065 4.30829L8.36064 4.3083C7.66364 5.00526 7.08887 5.58 6.69515 6.09604C6.28179 6.63782 6 7.19958 6 7.875C6 8.55042 6.28179 9.11218 6.69515 9.65396C7.08887 10.17 7.66363 10.7447 8.36063 11.4417L8.43331 11.5144C9.13027 12.2114 9.705 12.7861 10.221 13.1798C10.7628 13.5932 11.3246 13.875 12 13.875C12.6754 13.875 13.2372 13.5932 13.779 13.1799C14.295 12.7861 14.8697 12.2114 15.5667 11.5144L15.6393 11.4417C16.3364 10.7447 16.9111 10.17 17.3048 9.65396C17.7182 9.11218 18 8.55042 18 7.875C18 7.19958 17.7182 6.63782 17.3049 6.09604C16.9111 5.58001 16.3364 5.00529 15.6394 4.30834ZM12.0045 9.375C12.8304 9.375 13.5 8.70343 13.5 7.875C13.5 7.04657 12.8304 6.375 12.0045 6.375H11.9955C11.1696 6.375 10.5 7.04657 10.5 7.875C10.5 8.70343 11.1696 9.375 11.9955 9.375H12.0045Z',
  d10: 'M22 13H14V21H22V13Z',
  d11: 'M18 9L12 3L6 9L12 15L18 9Z',
  d12: 'M10 13H2V21H10V13Z',
  d13: 'M12.0001 9.00317L12.0065 8.99682',
  d14: 'M13.25 13C13.25 12.5858 13.5858 12.25 14 12.25H22C22.4142 12.25 22.75 12.5858 22.75 13V21C22.75 21.4142 22.4142 21.75 22 21.75H14C13.5858 21.75 13.25 21.4142 13.25 21V13Z',
  d15: 'M1.25 13C1.25 12.5858 1.58579 12.25 2 12.25H10C10.4142 12.25 10.75 12.5858 10.75 13V21C10.75 21.4142 10.4142 21.75 10 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V13Z',
  d16: 'M12.5303 2.46967C12.2374 2.17678 11.7626 2.17678 11.4697 2.46967L5.46967 8.46967C5.17678 8.76256 5.17678 9.23744 5.46967 9.53033L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L18.5303 9.53033C18.8232 9.23744 18.8232 8.76256 18.5303 8.46967L12.5303 2.46967ZM12.003 7L10 9.00299L11.997 11L14 8.99701L12.003 7Z',
};

export const IconDiceStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-stroke-rounded IconDiceStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiceDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-duotone-rounded IconDiceDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiceTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-twotone-rounded IconDiceTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiceSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-solid-rounded IconDiceSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDiceBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-bulk-rounded IconDiceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDiceStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-stroke-sharp IconDiceStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiceSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dice-solid-sharp IconDiceSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDice: TheIconSelfPack = {
  name: 'Dice',
  StrokeRounded: IconDiceStrokeRounded,
  DuotoneRounded: IconDiceDuotoneRounded,
  TwotoneRounded: IconDiceTwotoneRounded,
  SolidRounded: IconDiceSolidRounded,
  BulkRounded: IconDiceBulkRounded,
  StrokeSharp: IconDiceStrokeSharp,
  SolidSharp: IconDiceSolidSharp,
};