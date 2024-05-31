import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9981 6.5H11.0019C8.13196 6.5 6.19701 9.56909 7.32753 12.328C7.48501 12.7124 7.84633 12.9615 8.24612 12.9615H8.9491C9.18605 12.9615 9.39259 13.1302 9.45006 13.3706L10.3551 17.1567C10.5438 17.9462 11.222 18.5 12 18.5C12.778 18.5 13.4562 17.9462 13.6449 17.1567L14.5499 13.3706C14.6074 13.1302 14.814 12.9615 15.0509 12.9615H15.7539C16.1537 12.9615 16.515 12.7124 16.6725 12.328C17.803 9.56909 15.868 6.5 12.9981 6.5Z',
  d2: 'M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z',
  d3: 'M7 16.5L6 16.5',
  d4: 'M12 21.5L12 22.5',
  d5: 'M18 16.5L17 16.5',
  d6: 'M12 0.75C10.3431 0.75 9 2.09315 9 3.75C9 4.82282 9.56313 5.76411 10.4099 6.29442C7.47495 6.71056 5.69103 9.97478 6.86508 12.8582C7.12056 13.4857 7.71969 13.9167 8.40809 13.9167H8.9002L9.72805 17.4022C9.98103 18.4673 10.9033 19.25 12 19.25C13.0967 19.25 14.019 18.4673 14.272 17.4022L15.0998 13.9167H15.5919C16.2803 13.9167 16.8794 13.4857 17.1349 12.8582C18.309 9.97478 16.525 6.71056 13.5901 6.29442C14.4369 5.76411 15 4.82282 15 3.75C15 2.09315 13.6569 0.75 12 0.75Z',
  d7: 'M6 15.25L7 15.25C7.55228 15.25 8 15.6977 8 16.25C8 16.8023 7.55228 17.25 7 17.25H6C5.44772 17.25 5 16.8023 5 16.25C5 15.6977 5.44772 15.25 6 15.25ZM16 16.25C16 15.6977 16.4477 15.25 17 15.25L18 15.25C18.5523 15.25 19 15.6977 19 16.25C19 16.8023 18.5523 17.25 18 17.25H17C16.4477 17.25 16 16.8023 16 16.25ZM12 20.25C12.5523 20.25 13 20.6977 13 21.25V22.25C13 22.8023 12.5523 23.25 12 23.25C11.4477 23.25 11 22.8023 11 22.25V21.25C11 20.6977 11.4477 20.25 12 20.25Z',
  d8: 'M7 16.8467H5.5',
  d9: 'M12 21.4502V23.4964',
  d10: 'M18.5 16.8467H17',
  d11: 'M11.988 6.69907C15.0256 6.69907 17.1376 9.23843 16.9872 12.2669V13.6619H14.9195L13.6792 18.8932H10.2957L9.07351 13.6619H7.00586V11.8202C7.11904 8.85378 9.07351 6.83017 11.988 6.69907ZM11.988 6.69907C13.5068 6.69907 14.4973 5.40528 14.4973 3.97915C14.4973 2.74581 13.4531 1.5 11.988 1.5C10.523 1.5 9.49268 2.69789 9.49268 4.06356C9.49268 5.42923 10.4693 6.69907 11.988 6.69907Z',
  d12: 'M15.25 4.55C15.25 5.44011 14.9009 6.25343 14.3306 6.84994C16.3499 7.76165 17.75 9.82127 17.75 12.2V13.9C17.75 14.3142 17.4142 14.65 17 14.65H15.505L14.3951 19.1785C14.3129 19.5141 14.0121 19.75 13.6667 19.75H10.3333C9.98789 19.75 9.68713 19.5141 9.60489 19.1785L8.49496 14.65H7C6.58579 14.65 6.25 14.3142 6.25 13.9V12.2C6.25 9.82127 7.6501 7.76165 9.66936 6.84994C9.09911 6.25343 8.75 5.44011 8.75 4.55C8.75 2.74153 10.1911 1.25 12 1.25C13.8089 1.25 15.25 2.74153 15.25 4.55Z',
  d13: 'M5 16.25H7V18.25H5L5 16.25Z',
  d14: 'M11 22.75L11 20.75H13V22.75L11 22.75Z',
  d15: 'M17 16.25L19 16.25V18.25L17 18.25V16.25Z',
} as const;

export const IconUserRoadsideStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-stroke-rounded IconUserRoadsideStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserRoadsideDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-duotone-rounded IconUserRoadsideDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserRoadsideTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-twotone-rounded IconUserRoadsideTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserRoadsideSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-solid-rounded IconUserRoadsideSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserRoadsideBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-bulk-rounded IconUserRoadsideBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserRoadsideStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-stroke-sharp IconUserRoadsideStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserRoadsideSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-roadside-solid-sharp IconUserRoadsideSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfUserRoadside: TheIconSelfPack = {
  name: 'UserRoadside',
  StrokeRounded: IconUserRoadsideStrokeRounded,
  DuotoneRounded: IconUserRoadsideDuotoneRounded,
  TwotoneRounded: IconUserRoadsideTwotoneRounded,
  SolidRounded: IconUserRoadsideSolidRounded,
  BulkRounded: IconUserRoadsideBulkRounded,
  StrokeSharp: IconUserRoadsideStrokeSharp,
  SolidSharp: IconUserRoadsideSolidSharp,
};