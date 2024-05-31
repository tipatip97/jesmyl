import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12',
  d2: 'M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5',
  d3: 'M16.5 9L13.5607 11.9393M13.5607 11.9393C13.2892 11.6679 12.9142 11.5 12.5 11.5C11.6716 11.5 11 12.1716 11 13C11 13.8284 11.6716 14.5 12.5 14.5C13.3284 14.5 14 13.8284 14 13C14 12.5858 13.8321 12.2108 13.5607 11.9393Z',
  d4: 'M12.5 3.5V2',
  d5: 'M10.5 2H14.5',
  d6: 'M2 15H5',
  d7: 'M2 19H7',
  d8: 'M13 22C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22ZM13.5607 11.9393C13.8321 12.2108 14 12.5858 14 13C14 13.8284 13.3284 14.5 12.5 14.5C11.6716 14.5 11 13.8284 11 13C11 12.1716 11.6716 11.5 12.5 11.5C12.9142 11.5 13.2892 11.6679 13.5607 11.9393Z',
  d9: 'M4.79289 3.91789C5.18342 3.52737 5.81658 3.52737 6.20711 3.91789L7.20711 4.91789C7.59763 5.30842 7.59763 5.94158 7.20711 6.33211C6.81658 6.72263 6.18342 6.72263 5.79289 6.33211L4.79289 5.33211C4.40237 4.94158 4.40237 4.30842 4.79289 3.91789ZM20.2071 3.91789C20.5976 4.30842 20.5976 4.94158 20.2071 5.33211L19.2071 6.33211C18.8166 6.72263 18.1834 6.72263 17.7929 6.33211C17.4024 5.94158 17.4024 5.30842 17.7929 4.91789L18.7929 3.91789C19.1834 3.52737 19.8166 3.52737 20.2071 3.91789Z',
  d10: 'M17.2071 8.41789C17.5976 8.80842 17.5976 9.44158 17.2071 9.83211L14.8276 12.2116C14.9388 12.4946 15 12.8029 15 13.125C15 14.5057 13.8807 15.625 12.5 15.625C11.1193 15.625 10 14.5057 10 13.125C10 11.7443 11.1193 10.625 12.5 10.625C12.8221 10.625 13.1304 10.6862 13.4134 10.7974L15.7929 8.41789C16.1834 8.02737 16.8166 8.02737 17.2071 8.41789Z',
  d11: 'M9.5 2.125C9.5 1.57272 9.94772 1.125 10.5 1.125H14.5C15.0523 1.125 15.5 1.57272 15.5 2.125C15.5 2.67728 15.0523 3.125 14.5 3.125H13.5V3.625C13.5 4.17728 13.0523 4.625 12.5 4.625C11.9477 4.625 11.5 4.17728 11.5 3.625V3.125H10.5C9.94772 3.125 9.5 2.67728 9.5 2.125Z',
  d12: 'M12.9773 5.325C8.94624 5.325 5.58436 8.36561 5.15317 12.2571C5.09387 12.7923 4.61091 13.1783 4.07444 13.1191C3.53798 13.0599 3.15116 12.5781 3.21046 12.0429C3.75155 7.15949 7.95376 3.375 12.9773 3.375C18.3746 3.375 22.75 7.74022 22.75 13.125C22.75 18.5098 18.3746 22.875 12.9773 22.875H2.22727C1.68754 22.875 1.25 22.4385 1.25 21.9C1.25 21.3615 1.68754 20.925 2.22727 20.925H12.9773C17.2951 20.925 20.7955 17.4328 20.7955 13.125C20.7955 8.81718 17.2951 5.325 12.9773 5.325ZM1.25 15.075C1.25 14.5365 1.68754 14.1 2.22727 14.1H5.15909C5.69882 14.1 6.13636 14.5365 6.13636 15.075C6.13636 15.6135 5.69882 16.05 5.15909 16.05H2.22727C1.68754 16.05 1.25 15.6135 1.25 15.075ZM1.25 18.4875C1.25 17.949 1.68754 17.5125 2.22727 17.5125H7.11364C7.65337 17.5125 8.09091 17.949 8.09091 18.4875C8.09091 19.026 7.65337 19.4625 7.11364 19.4625H2.22727C1.68754 19.4625 1.25 19.026 1.25 18.4875Z',
  d13: 'M12.9773 5.325C8.94624 5.325 5.58436 8.3656 5.15317 12.2571C5.09387 12.7923 4.61091 13.1783 4.07444 13.1191C3.53798 13.0599 3.15116 12.5781 3.21046 12.0429C3.75155 7.15949 7.95376 3.375 12.9773 3.375C18.3746 3.375 22.75 7.74022 22.75 13.125C22.75 18.5098 18.3746 22.875 12.9773 22.875H2.22727C1.68754 22.875 1.25 22.4385 1.25 21.9C1.25 21.3615 1.68754 20.925 2.22727 20.925H12.9773C17.2951 20.925 20.7955 17.4328 20.7955 13.125C20.7955 8.81718 17.2951 5.325 12.9773 5.325Z',
  d14: 'M1.25 15.0766C1.25 14.5381 1.68754 14.1016 2.22727 14.1016H5.15909C5.69882 14.1016 6.13636 14.5381 6.13636 15.0766C6.13636 15.615 5.69882 16.0516 5.15909 16.0516H2.22727C1.68754 16.0516 1.25 15.615 1.25 15.0766ZM1.25 18.4891C1.25 17.9506 1.68754 17.5141 2.22727 17.5141H7.11364C7.65337 17.5141 8.09091 17.9506 8.09091 18.4891C8.09091 19.0275 7.65337 19.4641 7.11364 19.4641H2.22727C1.68754 19.4641 1.25 19.0275 1.25 18.4891Z',
  d15: 'M18.5 5.5L20 4M6 4L7.5 5.5',
  d16: 'M12.5 3.5V2M9.5 2H15.5',
  d17: 'M2 18.5H7',
  d18: 'M9.14453 2.91304H11.0493V3.97634C9.79301 4.16568 8.61318 4.60061 7.56233 5.23113L6.48554 4.14966L5.13867 5.50238L6.01609 6.38361C4.35 7.9062 3.22039 10.0083 2.9601 12.3732L4.85333 12.5834C5.27354 8.76559 8.54979 5.78261 12.4781 5.78261C16.686 5.78261 20.0972 9.2086 20.0972 13.4348C20.0972 17.661 16.686 21.087 12.4781 21.087H2.00195V23H12.4781C17.738 23 22.002 18.7175 22.002 13.4348C22.002 10.651 20.8179 8.14502 18.9281 6.39703L19.8189 5.50238L18.472 4.14966L17.3889 5.2375C16.0823 4.44627 14.5712 3.96123 12.9541 3.8813V2.91304H14.8588V1H9.14453V2.91304ZM12.002 11.0435C12.3087 11.0435 12.6023 11.1021 12.8719 11.2084L15.138 8.93237L16.4849 10.2851L14.2187 12.5611C14.3246 12.8319 14.3829 13.1267 14.3829 13.4348C14.3829 14.7555 13.3169 15.8261 12.002 15.8261C10.687 15.8261 9.621 14.7555 9.621 13.4348C9.621 12.1141 10.687 11.0435 12.002 11.0435ZM4.8591 16.3043H2.00195V14.3913H4.8591V16.3043ZM2.00195 19.6522H6.76386V17.7391H2.00195V19.6522Z',
} as const;

export const IconTimer02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-stroke-rounded IconTimer02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-duotone-rounded IconTimer02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-twotone-rounded IconTimer02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-solid-rounded IconTimer02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-bulk-rounded IconTimer02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-stroke-sharp IconTimer02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimer02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="timer-02-solid-sharp IconTimer02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTimer02: TheIconSelfPack = {
  name: 'Timer02',
  StrokeRounded: IconTimer02StrokeRounded,
  DuotoneRounded: IconTimer02DuotoneRounded,
  TwotoneRounded: IconTimer02TwotoneRounded,
  SolidRounded: IconTimer02SolidRounded,
  BulkRounded: IconTimer02BulkRounded,
  StrokeSharp: IconTimer02StrokeSharp,
  SolidSharp: IconTimer02SolidSharp,
};