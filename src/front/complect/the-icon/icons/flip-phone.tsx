import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 4H5.5V15.5C5.5 19.0899 8.41015 22 12 22C15.5899 22 18.5 19.0899 18.5 15.5V8C18.5 6.11438 18.5 5.17157 17.9142 4.58579C17.3284 4 16.3856 4 14.5 4Z',
  d2: 'M11 18H13',
  d3: 'M8.5 8.42857C8.5 8.02959 8.5 7.83009 8.55612 7.66972C8.65663 7.38247 8.88247 7.15663 9.16972 7.05612C9.33009 7 9.52959 7 9.92857 7H14.0714C14.4704 7 14.6699 7 14.8303 7.05612C15.1175 7.15663 15.3434 7.38247 15.4439 7.66972C15.5 7.83009 15.5 8.02959 15.5 8.42857V9C15.5 9.4645 15.5 9.69675 15.4692 9.89109C15.2998 10.9608 14.4608 11.7998 13.3911 11.9692C13.1968 12 12.4645 12 12 12C11.5355 12 10.8032 12 10.6089 11.9692C9.53918 11.7998 8.70021 10.9608 8.53078 9.89109C8.5 9.69675 8.5 9.4645 8.5 9V8.42857Z',
  d4: 'M5.5 4L5.5 2',
  d5: 'M5.5 4H14.5C16.3856 4 17.3284 4 17.9142 4.58579C18.5 5.17157 18.5 6.11438 18.5 8V15.5C18.5 19.0899 15.5899 22 12 22C8.41015 22 5.5 19.0899 5.5 15.5V4ZM8.55612 7.66972C8.5 7.83009 8.5 8.02959 8.5 8.42857V9C8.5 9.4645 8.5 9.69675 8.53078 9.89109C8.70021 10.9608 9.53918 11.7998 10.6089 11.9692C10.8032 12 11.5355 12 12 12C12.4645 12 13.1968 12 13.3911 11.9692C14.4608 11.7998 15.2998 10.9608 15.4692 9.89109C15.5 9.69675 15.5 9.4645 15.5 9V8.42857C15.5 8.02959 15.5 7.83009 15.4439 7.66972C15.3434 7.38247 15.1175 7.15663 14.8303 7.05612C14.6699 7 14.4704 7 14.0714 7H9.92857C9.52959 7 9.33009 7 9.16972 7.05612C8.88247 7.15663 8.65663 7.38247 8.55612 7.66972Z',
  d6: 'M6.75 2.25C6.75 1.69772 6.30228 1.25 5.75 1.25C5.19772 1.25 4.75 1.69772 4.75 2.25V15.5C4.75 19.5041 7.99594 22.75 12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5L19.25 8.94801C19.25 8.04954 19.2501 7.3003 19.1701 6.70552C19.0857 6.07773 18.9 5.51093 18.4445 5.05546C17.9891 4.59999 17.4223 4.41432 16.7945 4.32991C16.1997 4.24995 15.4505 4.24997 14.552 4.25L7.35 4.25C7.06716 4.25 6.92574 4.25 6.83787 4.16213C6.75 4.07427 6.75 3.93284 6.75 3.65L6.75 2.25ZM7.57215 7.66972C7.5 7.83009 7.5 8.02959 7.5 8.42857V9C7.5 9.4645 7.5 9.69675 7.53957 9.89109C7.75741 10.9608 8.83609 11.7998 10.2115 11.9692C10.4613 12 11.4028 12 12 12C12.5972 12 13.5387 12 13.7885 11.9692C15.1639 11.7998 16.2426 10.9608 16.4604 9.89109C16.5 9.69675 16.5 9.4645 16.5 9V8.42857C16.5 8.02959 16.5 7.83009 16.4278 7.66972C16.2986 7.38247 16.0082 7.15663 15.6389 7.05612C15.4327 7 15.1762 7 14.6633 7H9.33673C8.82375 7 8.56726 7 8.36107 7.05612C7.99175 7.15663 7.70138 7.38247 7.57215 7.66972ZM11 17.25C10.5858 17.25 10.25 17.5858 10.25 18C10.25 18.4142 10.5858 18.75 11 18.75H13C13.4142 18.75 13.75 18.4142 13.75 18C13.75 17.5858 13.4142 17.25 13 17.25H11Z',
  d7: 'M6.75 2.25C6.75 1.69772 6.30228 1.25 5.75 1.25C5.19772 1.25 4.75 1.69772 4.75 2.25V15.5C4.75 19.5041 7.99594 22.75 12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5L19.25 8.94801C19.25 8.04954 19.2501 7.3003 19.1701 6.70552C19.0857 6.07773 18.9 5.51093 18.4445 5.05546C17.9891 4.59999 17.4223 4.41432 16.7945 4.32991C16.1997 4.24995 15.4505 4.24997 14.552 4.25L7.35 4.25C7.06716 4.25 6.92574 4.25 6.83787 4.16213C6.75 4.07427 6.75 3.93284 6.75 3.65L6.75 2.25Z',
  d8: 'M7.57215 7.66972C7.5 7.83009 7.5 8.02959 7.5 8.42857V9C7.5 9.4645 7.5 9.69675 7.53957 9.89109C7.75741 10.9608 8.83609 11.7998 10.2115 11.9692C10.4613 12 11.4028 12 12 12C12.5972 12 13.5387 12 13.7885 11.9692C15.1639 11.7998 16.2426 10.9608 16.4604 9.89109C16.5 9.69675 16.5 9.4645 16.5 9V8.42857C16.5 8.02959 16.5 7.83009 16.4278 7.66972C16.2986 7.38247 16.0082 7.15663 15.6389 7.05612C15.4327 7 15.1762 7 14.6633 7H9.33673C8.82375 7 8.56726 7 8.36107 7.05612C7.99175 7.15663 7.70138 7.38247 7.57215 7.66972Z',
  d9: 'M10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H13C13.4142 17.25 13.75 17.5858 13.75 18C13.75 18.4142 13.4142 18.75 13 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18Z',
  d10: 'M18.5 5H5.5V15.5C5.5 19.0899 8.41015 22 12 22C15.5899 22 18.5 19.0899 18.5 15.5V5Z',
  d11: 'M15 8.5H9V12.5H15V8.5Z',
  d12: 'M10.5 18H13.5',
  d13: 'M5.5 5L5.5 2',
  d14: 'M6.75 3.75L6.75 1.75H4.75V15C4.75 19.0041 7.99594 22.25 12 22.25C16.0041 22.25 19.25 19.0041 19.25 15V4.5C19.25 4.08579 18.9142 3.75 18.5 3.75H6.75ZM16 7H8V12H16V7ZM10.5 16.75V18.25H13.5V16.75H10.5Z',
} as const;

export const IconFlipPhoneStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-stroke-rounded IconFlipPhoneStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
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

export const IconFlipPhoneDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-duotone-rounded IconFlipPhoneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
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

export const IconFlipPhoneTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-twotone-rounded IconFlipPhoneTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconFlipPhoneSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-solid-rounded IconFlipPhoneSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipPhoneBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-bulk-rounded IconFlipPhoneBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconFlipPhoneStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-stroke-sharp IconFlipPhoneStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipPhoneSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-phone-solid-sharp IconFlipPhoneSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlipPhone: TheIconSelfPack = {
  name: 'FlipPhone',
  StrokeRounded: IconFlipPhoneStrokeRounded,
  DuotoneRounded: IconFlipPhoneDuotoneRounded,
  TwotoneRounded: IconFlipPhoneTwotoneRounded,
  SolidRounded: IconFlipPhoneSolidRounded,
  BulkRounded: IconFlipPhoneBulkRounded,
  StrokeSharp: IconFlipPhoneStrokeSharp,
  SolidSharp: IconFlipPhoneSolidSharp,
};