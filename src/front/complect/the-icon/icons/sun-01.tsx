import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z',
  d2: 'M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898',
  d3: 'M6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12Z',
  d4: 'M10.7455 3C10.7455 2.30964 11.3052 1.75 11.9955 1.75H12.0045C12.6948 1.75 13.2545 2.30964 13.2545 3C13.2545 3.69036 12.6948 4.25 12.0045 4.25H11.9955C11.3052 4.25 10.7455 3.69036 10.7455 3ZM17.1088 5.63599C17.1088 4.94563 17.6684 4.38599 18.3588 4.38599H18.3678C19.0581 4.38599 19.6178 4.94563 19.6178 5.63599C19.6178 6.32634 19.0581 6.88599 18.3678 6.88599H18.3588C17.6684 6.88599 17.1088 6.32634 17.1088 5.63599ZM4.38409 5.63647C4.38409 4.94612 4.94373 4.38647 5.63409 4.38647H5.64307C6.33342 4.38647 6.89307 4.94612 6.89307 5.63647C6.89307 6.32683 6.33342 6.88647 5.64307 6.88647H5.63409C4.94373 6.88647 4.38409 6.32683 4.38409 5.63647ZM1.75 12.0006C1.75 11.3102 2.30964 10.7506 3 10.7506H3.00898C3.69933 10.7506 4.25898 11.3102 4.25898 12.0006C4.25898 12.6909 3.69933 13.2506 3.00898 13.2506H3C2.30964 13.2506 1.75 12.6909 1.75 12.0006ZM19.741 12.0006C19.741 11.3102 20.3007 10.7506 20.991 10.7506H21C21.6904 10.7506 22.25 11.3102 22.25 12.0006C22.25 12.6909 21.6904 13.2506 21 13.2506H20.991C20.3007 13.2506 19.741 12.6909 19.741 12.0006ZM4.38409 18.364C4.38409 17.6737 4.94373 17.114 5.63409 17.114H5.64307C6.33342 17.114 6.89307 17.6737 6.89307 18.364C6.89307 19.0544 6.33342 19.614 5.64307 19.614H5.63409C4.94373 19.614 4.38409 19.0544 4.38409 18.364ZM17.1082 18.3645C17.1082 17.6741 17.6679 17.1145 18.3582 17.1145H18.3672C19.0575 17.1145 19.6172 17.6741 19.6172 18.3645C19.6172 19.0549 19.0575 19.6145 18.3672 19.6145H18.3582C17.6679 19.6145 17.1082 19.0549 17.1082 18.3645ZM10.7461 21C10.7461 20.3096 11.3057 19.75 11.9961 19.75H12.0051C12.6954 19.75 13.2551 20.3096 13.2551 21C13.2551 21.6904 12.6954 22.25 12.0051 22.25H11.9961C11.3057 22.25 10.7461 21.6904 10.7461 21Z',
  d5: 'M6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12Z',
  d6: 'M10.9955 2H13.0045V4H10.9955V2ZM17.3588 4.63599H19.3678V6.63599H17.3588V4.63599ZM4.63409 4.63647H6.64307V6.63647H4.63409V4.63647ZM2 11.0006H4.00898V13.0006H2V11.0006ZM19.991 11.0006H22V13.0006H19.991V11.0006ZM4.63409 17.364H6.64307V19.364H4.63409V17.364ZM17.3582 17.3645H19.3672V19.3645H17.3582V17.3645ZM10.9961 20H13.0051V22H10.9961V20Z',
} as const;

export const IconSun01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-stroke-rounded IconSun01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSun01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-duotone-rounded IconSun01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSun01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-twotone-rounded IconSun01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSun01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-solid-rounded IconSun01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSun01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-bulk-rounded IconSun01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSun01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-stroke-sharp IconSun01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSun01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-01-solid-sharp IconSun01SolidSharp"
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

export const iconPackOfSun01: TheIconSelfPack = {
  name: 'Sun01',
  StrokeRounded: IconSun01StrokeRounded,
  DuotoneRounded: IconSun01DuotoneRounded,
  TwotoneRounded: IconSun01TwotoneRounded,
  SolidRounded: IconSun01SolidRounded,
  BulkRounded: IconSun01BulkRounded,
  StrokeSharp: IconSun01StrokeSharp,
  SolidSharp: IconSun01SolidSharp,
};