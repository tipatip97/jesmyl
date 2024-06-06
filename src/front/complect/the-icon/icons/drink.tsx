import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.20538 15.3582L4.51713 11.0812C2.62475 8.88671 1.67856 7.78948 2.09833 6.89474C2.5181 6 3.97907 6 6.90099 6H11.099C14.0209 6 15.4819 6 15.9017 6.89474C16.3214 7.78948 15.3753 8.88671 13.4829 11.0812L9.79462 15.3582C9.42563 15.7861 9.24114 16 9 16C8.75886 16 8.57437 15.7861 8.20538 15.3582Z',
  d2: 'M8.5 6L8.09898 3.59389C8.03809 3.22852 7.78022 2.92674 7.42882 2.80961L5 2',
  d3: 'M9 16V22M7.5 22H10.5',
  d4: 'M15.8601 8.83333C16.5043 9.54937 17.4403 10 18.4822 10C20.425 10 22 8.433 22 6.5C22 4.567 20.425 3 18.4822 3C16.71 3 15.2438 4.30385 15 6',
  d5: 'M4.05159 1.68404C4.22624 1.1601 4.79256 0.87694 5.3165 1.05159L7.74531 1.86119C8.44812 2.09546 8.96386 2.69902 9.08565 3.42976L9.48667 5.83587C9.57746 6.38064 9.20944 6.89587 8.66467 6.98667C8.1199 7.07746 7.60467 6.70944 7.51388 6.16467L7.14255 3.93673C7.12428 3.82712 7.04692 3.73658 6.9415 3.70144L4.68404 2.94895C4.1601 2.77431 3.87694 2.20799 4.05159 1.68404Z',
  d6: 'M9 15C9.55228 15 10 15.4477 10 16V21H10.5C11.0523 21 11.5 21.4477 11.5 22C11.5 22.5523 11.0523 23 10.5 23H7.5C6.94772 23 6.5 22.5523 6.5 22C6.5 21.4477 6.94772 21 7.5 21H8V16C8 15.4477 8.44772 15 9 15Z',
  d7: 'M15.1178 4.54547C15.0256 4.53558 14.9796 4.53063 14.9427 4.50922C14.8756 4.47016 14.8331 4.37948 14.8461 4.30285C14.8532 4.26086 14.8772 4.22487 14.9252 4.15287C15.6899 3.00517 16.999 2.25 18.4836 2.25C20.8371 2.25 22.7514 4.1492 22.7514 6.5C22.7514 8.8508 20.8371 10.75 18.4836 10.75C17.9229 10.75 17.3871 10.6421 16.8963 10.4462C16.7082 10.371 16.6141 10.3335 16.5864 10.2409C16.5586 10.1483 16.6211 10.0588 16.7461 9.87961C16.8399 9.7452 16.9263 9.61756 17.0014 9.49951C17.0413 9.43684 17.0842 9.37119 17.129 9.30267C17.6387 8.52231 18.3911 7.37049 17.7592 6.02375C17.169 4.76569 16.0096 4.64122 15.1178 4.54547Z',
  d8: 'M11.1648 5.25C12.5709 5.24997 13.7097 5.24995 14.5458 5.36938C15.3775 5.48819 16.2 5.7626 16.5817 6.57619C16.9658 7.39483 16.6418 8.19882 16.193 8.90344C15.743 9.61001 15.0047 10.4662 14.0949 11.5211L10.3637 15.848L10.3382 15.8776L10.3382 15.8776C10.1763 16.0654 10.0072 16.2616 9.84401 16.4042C9.65581 16.5687 9.37921 16.75 9.00108 16.75C8.62294 16.75 8.34634 16.5687 8.15814 16.4042C7.99492 16.2616 7.82588 16.0654 7.66398 15.8775L7.66397 15.8775L7.63848 15.848L3.90725 11.5211L3.90724 11.5211C2.99751 10.4662 2.25914 9.61001 1.80915 8.90344C1.36039 8.19881 1.03635 7.39483 1.42042 6.57619C1.80212 5.7626 2.62468 5.48819 3.45637 5.36938C4.29244 5.24995 5.4313 5.24997 6.83738 5.25H6.8374H11.1648H11.1648Z',
  d9: 'M17 6H3L10 16L17 6Z',
  d10: 'M9.5 6L9 3L6 2',
  d11: 'M10 16V22M8 22H12',
  d12: 'M15.5 8.37266C16.0669 8.76809 16.7564 9 17.5 9C19.433 9 21 7.433 21 5.5C21 3.567 19.433 2 17.5 2C15.567 2 14 3.567 14 5.5C14 5.66976 14.0121 5.8367 14.0354 6',
  d13: 'M2.33477 5.65364C2.46392 5.40559 2.72035 5.25 3 5.25H17C17.2797 5.25 17.5361 5.40559 17.6652 5.65364C17.7944 5.90169 17.7748 6.20099 17.6144 6.4301L10.6144 16.4301C10.4741 16.6306 10.2447 16.75 10 16.75C9.75527 16.75 9.52593 16.6306 9.38558 16.4301L2.38558 6.4301C2.22521 6.20099 2.20562 5.90169 2.33477 5.65364Z',
  d14: 'M6.23704 1.28857L9.23704 2.28857C9.50059 2.37642 9.69399 2.60276 9.73966 2.87679L10.2397 5.87679L8.76007 6.12339L8.33431 3.5688L5.7627 2.7116L6.23704 1.28857Z',
  d15: 'M9.25 21.25V16H10.75V21.25H12V22.75H8V21.25H9.25Z',
  d16: 'M13.5225 4H17.0002C17.7459 4 18.4298 4.41491 18.7741 5.07638C19.1185 5.73784 19.0663 6.53598 18.6387 7.14692L16.8511 9.70064C17.0628 9.73314 17.2796 9.75 17.5002 9.75C19.8474 9.75 21.7502 7.84721 21.7502 5.5C21.7502 3.15279 19.8474 1.25 17.5002 1.25C15.681 1.25 14.1288 2.39299 13.5225 4Z',
};

export const IconDrinkStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-stroke-rounded IconDrinkStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDrinkDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-duotone-rounded IconDrinkDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconDrinkTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-twotone-rounded IconDrinkTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrinkSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-solid-rounded IconDrinkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconDrinkBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-bulk-rounded IconDrinkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDrinkStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-stroke-sharp IconDrinkStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconDrinkSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drink-solid-sharp IconDrinkSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDrink: TheIconSelfPack = {
  name: 'Drink',
  StrokeRounded: IconDrinkStrokeRounded,
  DuotoneRounded: IconDrinkDuotoneRounded,
  TwotoneRounded: IconDrinkTwotoneRounded,
  SolidRounded: IconDrinkSolidRounded,
  BulkRounded: IconDrinkBulkRounded,
  StrokeSharp: IconDrinkStrokeSharp,
  SolidSharp: IconDrinkSolidSharp,
};