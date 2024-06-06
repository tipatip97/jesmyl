import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5958 2.52275C11.3962 2.29775 13.2718 1.82275 13.7721 2.07275M13.7721 2.07275C14.2973 2.39775 14.3973 4.14775 14.5475 4.87275M13.7721 2.07275L3.81773 18.1728C3.81773 18.1728 3.29249 19.0228 3.59264 19.4978C3.81774 20.0228 5.11831 19.9978 5.11831 19.9978H20.5M20.5 19.9978C20.5 19.3977 18.6992 18.1978 18.5241 17.9978M20.5 19.9978C20.5 20.5978 19.0494 21.4478 18.5241 21.9978',
  d2: 'M7.49414 12.498C9.36996 12.823 10.8049 13.723 11.6553 15.048C12.6057 16.398 12.7214 18.273 12.1462 19.798',
  d3: 'M3.58798 19.4874C3.87089 20.0021 4.6614 20.0021 6.24237 20.0021L12.1586 19.9999C12.3797 19.3678 12.5 18.6876 12.5 17.979C12.5 14.9748 10.3377 12.981 7.5 12.4999L7.3344 12.4746L4.56222 16.9453C3.72413 18.2969 3.30508 18.9727 3.58798 19.4874Z',
  d4: 'M7.5 12.5C10.3377 12.9811 12.5 14.9749 12.5 17.979C12.5 18.6877 12.3797 19.3679 12.1586 20',
  d5: 'M17.7688 18.8027H13.2022C13.2345 18.5325 13.2511 18.2576 13.2511 17.979C13.2511 14.9905 11.3665 12.9086 8.83706 12.0625L13.2366 4.95946L14.1458 5.49809C14.3169 5.60973 14.5328 5.65146 14.7459 5.59561C15.1466 5.49065 15.3864 5.08073 15.2814 4.68003C15.2446 4.4314 15.0975 3.52272 15.0432 3.2338C14.9851 2.92475 14.9089 2.58853 14.8018 2.29785C14.748 2.152 14.6786 1.99571 14.5862 1.8522C14.4969 1.71348 14.3575 1.54172 14.1458 1.4238C13.9543 1.31709 13.7502 1.27966 13.5992 1.2636C13.4372 1.24638 13.2671 1.24728 13.1042 1.25653C12.7783 1.27504 12.4127 1.33138 12.0682 1.39744C11.3756 1.53024 10.6817 1.7195 10.3945 1.79801C9.99491 1.90721 9.75953 2.31964 9.86873 2.7192C9.92033 2.90797 10.0396 3.0601 10.1932 3.15655L11.5604 3.96645L3.89335 16.3447C3.51755 16.9512 3.17958 17.4967 2.9812 17.9554C2.77433 18.4337 2.59696 19.0905 2.95645 19.7453C3.31761 20.4031 3.969 20.6017 4.48412 20.6788C4.97601 20.7524 5.61464 20.7523 6.32246 20.7522H6.32248L17.7688 20.7522V21.9958C17.7678 22.1866 17.8391 22.3779 17.9832 22.5249C18.2731 22.8208 18.7479 22.8256 19.0438 22.5357C19.2354 22.384 19.9298 21.8195 20.147 21.6339C20.3794 21.4354 20.626 21.2088 20.82 20.9792C20.9173 20.864 21.0164 20.7306 21.0941 20.5842C21.1687 20.4436 21.2503 20.2415 21.2503 20.0022C21.2503 19.7629 21.1687 19.5608 21.0941 19.4202C21.0164 19.2738 20.9173 19.1404 20.82 19.0252C20.626 18.7956 20.3794 18.569 20.147 18.3705C19.9298 18.1849 19.2354 17.6204 19.0438 17.4687C18.7479 17.1788 18.2731 17.1836 17.9832 17.4795C17.8412 17.6243 17.7699 17.8121 17.7688 18V18.8027Z',
  d6: 'M16.9661 18.8027H6.45342C5.65874 18.8027 5.2614 18.8027 5.11844 18.5459C4.97548 18.2892 5.18479 17.9514 5.60342 17.2759L12.7203 5.79262C12.9641 5.3992 13.086 5.20249 13.2843 5.15384C13.4826 5.10519 13.6817 5.22314 14.0799 5.45905L14.1458 5.49809C14.3169 5.60973 14.5328 5.65146 14.7459 5.59561C15.1466 5.49065 15.3864 5.08073 15.2814 4.68003C15.2446 4.4314 15.0975 3.52272 15.0432 3.2338C14.9851 2.92475 14.9089 2.58853 14.8018 2.29785C14.748 2.152 14.6786 1.99571 14.5862 1.8522C14.4969 1.71348 14.3575 1.54172 14.1458 1.4238C13.9543 1.31709 13.7502 1.27966 13.5992 1.2636C13.4372 1.24638 13.2671 1.24728 13.1042 1.25653C12.7783 1.27504 12.4127 1.33138 12.0682 1.39744C11.3756 1.53024 10.6817 1.7195 10.3945 1.79801C9.99491 1.90721 9.75953 2.31964 9.86873 2.7192C9.92033 2.90797 10.0396 3.0601 10.1932 3.15655L10.6829 3.44661C11.0958 3.69125 11.3023 3.81357 11.3524 4.01752C11.4024 4.22147 11.276 4.42549 11.0233 4.83354L3.89335 16.3447C3.51755 16.9512 3.17958 17.4967 2.9812 17.9554C2.77433 18.4337 2.59696 19.0905 2.95645 19.7453C3.31761 20.4031 3.969 20.6017 4.48412 20.6788C4.97601 20.7524 5.61466 20.7523 6.32248 20.7522L16.7688 20.7522C17.2402 20.7522 17.476 20.7522 17.6224 20.8987C17.7688 21.0451 17.7688 21.2808 17.7688 21.7522V21.9958C17.7678 22.1866 17.8391 22.3779 17.9832 22.5249C18.2731 22.8208 18.7479 22.8256 19.0438 22.5357C19.2354 22.384 19.9298 21.8195 20.147 21.6339C20.3794 21.4354 20.626 21.2088 20.82 20.9792C20.9173 20.864 21.0164 20.7306 21.0941 20.5842C21.1687 20.4436 21.2503 20.2415 21.2503 20.0022C21.2503 19.7629 21.1687 19.5608 21.0941 19.4202C21.0164 19.2738 20.9173 19.1404 20.82 19.0252C20.626 18.7956 20.3794 18.569 20.147 18.3705C19.9298 18.1849 19.2354 17.6204 19.0438 17.4687C18.7479 17.1788 18.2731 17.1836 17.9832 17.4795C17.8412 17.6243 17.7699 17.8121 17.7688 18C17.7688 18.2826 17.7688 18.4239 17.7134 18.5317C17.6657 18.6242 17.5903 18.6996 17.4978 18.7473C17.39 18.8027 17.2487 18.8027 16.9661 18.8027Z',
  d7: 'M13.2517 17.9791C13.2517 18.2577 13.2351 18.5326 13.2028 18.8028H6.45398C5.65931 18.8028 5.26197 18.8028 5.11901 18.546C4.97605 18.2892 5.18536 17.9515 5.60399 17.276L8.83762 12.0625C11.367 12.9086 13.2517 14.9906 13.2517 17.9791Z',
  d8: 'M7.48047 12.5059C10.3168 12.9871 12.4781 14.9815 12.4781 17.9866C12.4781 18.6955 12.3578 19.3759 12.1368 20.0082',
  d9: 'M10.4678 2.50576L13.9745 2L14.9702 5.00425M18.9965 22L21 20.0084L18.9965 18.0185M13.666 2.50576L3.00148 19.9932C2.99741 19.9999 3.00221 20.0084 3.01001 20.0084H20.2427',
  d10: 'M15.5136 5.04183L14.25 1.25L9.92348 1.86803L10.2063 3.84793L11.6049 3.64815L1.8967 19.5288C1.70808 19.8374 1.70087 20.2239 1.87785 20.5394C2.05482 20.8549 2.38839 21.0502 2.75014 21.0502L18.441 21.048L18.1501 21.3413L19.5701 22.7497L22.25 20.0477L19.5701 17.3457L18.1501 18.7541L18.4416 19.048L12.9249 19.0488C12.9746 18.7153 13.0004 18.374 13.0004 18.0271C13.0004 15.1004 11.1929 13.0432 8.74248 12.1646L13.2966 4.71525L13.6162 5.67413L15.5136 5.04183Z',
};

export const IconAcuteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-stroke-rounded IconAcuteStrokeRounded"
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

export const IconAcuteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-duotone-rounded IconAcuteDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAcuteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-twotone-rounded IconAcuteTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAcuteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-solid-rounded IconAcuteSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAcuteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-bulk-rounded IconAcuteBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAcuteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-stroke-sharp IconAcuteStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAcuteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="acute-solid-sharp IconAcuteSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAcute: TheIconSelfPack = {
  name: 'Acute',
  StrokeRounded: IconAcuteStrokeRounded,
  DuotoneRounded: IconAcuteDuotoneRounded,
  TwotoneRounded: IconAcuteTwotoneRounded,
  SolidRounded: IconAcuteSolidRounded,
  BulkRounded: IconAcuteBulkRounded,
  StrokeSharp: IconAcuteStrokeSharp,
  SolidSharp: IconAcuteSolidSharp,
};