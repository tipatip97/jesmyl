import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 5L10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19L21 19',
  d2: 'M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z',
  d3: 'M13 12L21 12',
  d4: 'M10 5H21V19L10 19C6.13401 19 3 15.866 3 12C3 8.13401 6.13401 5 10 5ZM10.5 14.5C11.8807 14.5 13 13.3807 13 12C13 10.6193 11.8807 9.5 10.5 9.5C9.11929 9.5 8 10.6193 8 12C8 13.3807 9.11929 14.5 10.5 14.5Z',
  d5: 'M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12ZM13 12H21',
  d6: 'M10.75 8.5C12.1777 8.5 13.4057 9.35478 13.9502 10.5805C14.0457 10.7955 14.0935 10.9031 14.168 10.9515C14.2426 11 14.3459 11 14.5525 11H21.15C21.4328 11 21.5743 11 21.6621 11.0879C21.75 11.1757 21.75 11.3172 21.75 11.6V12.4C21.75 12.6828 21.75 12.8243 21.6621 12.9121C21.5743 13 21.4328 13 21.15 13H14.5525C14.3459 13 14.2426 13 14.168 13.0485C14.0935 13.0969 14.0457 13.2045 13.9502 13.4195C13.4057 14.6452 12.1777 15.5 10.75 15.5C8.817 15.5 7.25 13.933 7.25 12C7.25 10.067 8.817 8.5 10.75 8.5ZM10.75 10.5C9.92157 10.5 9.25 11.1716 9.25 12C9.25 12.8284 9.92157 13.5 10.75 13.5C11.5784 13.5 12.25 12.8284 12.25 12C12.25 11.1716 11.5784 10.5 10.75 10.5Z',
  d7: 'M18.4047 4.36653C19.3055 4.48754 20.0639 4.74644 20.6663 5.34835C21.2687 5.95027 21.5278 6.70814 21.6489 7.60825C21.7002 7.9896 21.7289 8.41648 21.745 8.89144C21.7546 9.17516 21.7594 9.31703 21.6709 9.40851C21.5824 9.5 21.4383 9.5 21.15 9.5H15.4375C15.2727 9.5 15.1904 9.5 15.1243 9.4649C15.0582 9.4298 15.008 9.35541 14.9075 9.20664C14.0096 7.87705 12.4871 7 10.7572 7C7.99366 7 5.7534 9.23858 5.7534 12C5.7534 14.7614 7.99366 17 10.7572 17C12.4871 17 14.0096 16.1229 14.9075 14.7934C15.008 14.6446 15.0582 14.5702 15.1243 14.5351C15.1904 14.5 15.2727 14.5 15.4375 14.5H21.15C21.4383 14.5 21.5824 14.5 21.6709 14.5915C21.7594 14.683 21.7546 14.8248 21.745 15.1086C21.7289 15.5835 21.7002 16.0104 21.6489 16.3918C21.5278 17.2919 21.2687 18.0497 20.6663 18.6517C20.0639 19.2536 19.3055 19.5125 18.4047 19.6335C17.5371 19.75 16.4339 19.75 15.0653 19.75H10.0058C5.72241 19.75 2.25 16.2802 2.25 12C2.25 7.71979 5.72241 4.25 10.0058 4.25H15.0653C16.4339 4.24998 17.5371 4.24997 18.4047 4.36653Z',
  d8: 'M11.25 10.25C10.2835 10.25 9.5 11.0335 9.5 12C9.5 12.9665 10.2835 13.75 11.25 13.75C12.2165 13.75 13 12.9665 13 12C13 11.0335 12.2165 10.25 11.25 10.25ZM8 12C8 10.2051 9.45507 8.75 11.25 8.75C12.7868 8.75 14.0745 9.81665 14.413 11.25H21.75V12.75H14.413C14.0745 14.1834 12.7868 15.25 11.25 15.25C9.45507 15.25 8 13.7949 8 12Z',
  d9: 'M10 4.25C5.71979 4.25 2.25 7.71979 2.25 12C2.25 16.2802 5.71979 19.75 10 19.75L21.75 19.75V14.25H15.4339C14.6321 15.7381 13.0604 16.75 11.25 16.75C8.62665 16.75 6.5 14.6234 6.5 12C6.5 9.37665 8.62665 7.25 11.25 7.25C13.0604 7.25 14.6321 8.26186 15.4339 9.75H21.75V4.25H10Z',
} as const;

export const IconCapRoundStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-stroke-rounded IconCapRoundStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapRoundDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-duotone-rounded IconCapRoundDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapRoundTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-twotone-rounded IconCapRoundTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapRoundSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-solid-rounded IconCapRoundSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCapRoundBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-bulk-rounded IconCapRoundBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCapRoundStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-stroke-sharp IconCapRoundStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapRoundSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-round-solid-sharp IconCapRoundSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCapRound: TheIconSelfPack = {
  name: 'CapRound',
  StrokeRounded: IconCapRoundStrokeRounded,
  DuotoneRounded: IconCapRoundDuotoneRounded,
  TwotoneRounded: IconCapRoundTwotoneRounded,
  SolidRounded: IconCapRoundSolidRounded,
  BulkRounded: IconCapRoundBulkRounded,
  StrokeSharp: IconCapRoundStrokeSharp,
  SolidSharp: IconCapRoundSolidSharp,
};