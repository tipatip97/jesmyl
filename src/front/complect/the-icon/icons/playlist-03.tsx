import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 3L20 3',
  d2: 'M2 10L15 10',
  d3: 'M2 17L9 17',
  d4: 'M18.25 19C18.25 20.6569 16.8509 22 15.125 22C13.3991 22 12 20.6569 12 19C12 17.3431 13.3991 16 15.125 16C16.8509 16 18.25 17.3431 18.25 19ZM18.25 19V10C18.6667 10.6 19 13.12 22 13.6',
  d5: 'M18.25 19C18.25 20.6569 16.8509 22 15.125 22C13.3991 22 12 20.6569 12 19C12 17.3431 13.3991 16 15.125 16C16.8509 16 18.25 17.3431 18.25 19Z',
  d6: 'M1.125 2.625C1.125 2.07272 1.57272 1.625 2.125 1.625L20.125 1.625C20.6773 1.625 21.125 2.07272 21.125 2.625C21.125 3.17728 20.6773 3.625 20.125 3.625L2.125 3.625C1.57272 3.625 1.125 3.17728 1.125 2.625Z',
  d7: 'M1.125 9.625C1.125 9.07272 1.57272 8.625 2.125 8.625L14.125 8.625C14.6773 8.625 15.125 9.07272 15.125 9.625C15.125 10.1773 14.6773 10.625 14.125 10.625L2.125 10.625C1.57272 10.625 1.125 10.1773 1.125 9.625Z',
  d8: 'M1.125 16.625C1.125 16.0727 1.57272 15.625 2.125 15.625L9.125 15.625C9.67728 15.625 10.125 16.0727 10.125 16.625C10.125 17.1773 9.67728 17.625 9.125 17.625L2.125 17.625C1.57272 17.625 1.125 17.1773 1.125 16.625Z',
  d9: 'M15.25 14.875C13.139 14.875 11.375 16.5254 11.375 18.625C11.375 20.7246 13.139 22.375 15.25 22.375C17.361 22.375 19.125 20.7246 19.125 18.625V13.0709C19.7514 13.6019 20.5888 14.032 21.717 14.2125C22.2624 14.2998 22.7752 13.9284 22.8624 13.3831C22.9497 12.8377 22.5783 12.3249 22.033 12.2376C20.8463 12.0478 20.2418 11.4827 19.8631 10.9151C19.6617 10.6132 19.5165 10.2972 19.3879 9.98858C19.3667 9.93776 19.3427 9.87891 19.318 9.81848C19.2778 9.71989 19.2357 9.61682 19.2011 9.53654C19.1443 9.40485 19.0604 9.21889 18.9464 9.05468C18.697 8.69561 18.2433 8.54013 17.8261 8.67078C17.409 8.80142 17.125 9.18791 17.125 9.62507V15.3434C16.5666 15.0443 15.9261 14.875 15.25 14.875Z',
  d10: 'M1.125 2.625C1.125 2.07272 1.57272 1.625 2.125 1.625H20.125C20.6773 1.625 21.125 2.07272 21.125 2.625C21.125 3.17728 20.6773 3.625 20.125 3.625H2.125C1.57272 3.625 1.125 3.17728 1.125 2.625ZM1.125 9.625C1.125 9.07272 1.57272 8.625 2.125 8.625H14.125C14.6773 8.625 15.125 9.07272 15.125 9.625C15.125 10.1773 14.6773 10.625 14.125 10.625H2.125C1.57272 10.625 1.125 10.1773 1.125 9.625ZM2.125 15.625C1.57272 15.625 1.125 16.0727 1.125 16.625C1.125 17.1773 1.57272 17.625 2.125 17.625H9.125C9.67728 17.625 10.125 17.1773 10.125 16.625C10.125 16.0727 9.67728 15.625 9.125 15.625H2.125Z',
  d11: 'M18.25 18C18.25 19.6569 16.8509 21 15.125 21C13.3991 21 12 19.6569 12 18C12 16.3431 13.3991 15 15.125 15C16.8509 15 18.25 16.3431 18.25 18ZM18.25 18V9C18.25 9 19 12.6 22 12.6',
  d12: 'M20 4L2 4L2 2L20 2V4Z',
  d13: 'M15 11L2 11L2 9L15 9V11Z',
  d14: 'M9 18L2 18L2 16L9 16V18Z',
  d15: 'M11.25 18.2501C11.25 16.1504 13.014 14.5001 15.125 14.5001C15.8011 14.5001 16.4416 14.6694 17 14.9685V9.25006C17 8.73747 17.3876 8.30788 17.8975 8.25533C18.4063 8.20289 18.8724 8.54278 18.9783 9.04279L18.9785 9.04387L18.9824 9.0607C18.9865 9.07798 18.9936 9.10698 19.004 9.14601C19.025 9.22428 19.0591 9.34153 19.1087 9.48455C19.2092 9.77395 19.3674 10.1511 19.598 10.5201C20.0609 11.2608 20.977 11.8501 22 11.8501V13.8501C20.8294 13.8501 19.678 13.4255 19 12.8593V18.2501C19 20.3497 17.236 22.0001 15.125 22.0001C13.014 22.0001 11.25 20.3497 11.25 18.2501Z',
} as const;

export const IconPlaylist03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-stroke-rounded IconPlaylist03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPlaylist03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-duotone-rounded IconPlaylist03DuotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconPlaylist03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-twotone-rounded IconPlaylist03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconPlaylist03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-solid-rounded IconPlaylist03SolidRounded"
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

export const IconPlaylist03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-bulk-rounded IconPlaylist03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaylist03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-stroke-sharp IconPlaylist03StrokeSharp"
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaylist03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="playlist-03-solid-sharp IconPlaylist03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlaylist03: TheIconSelfPack = {
  name: 'Playlist03',
  StrokeRounded: IconPlaylist03StrokeRounded,
  DuotoneRounded: IconPlaylist03DuotoneRounded,
  TwotoneRounded: IconPlaylist03TwotoneRounded,
  SolidRounded: IconPlaylist03SolidRounded,
  BulkRounded: IconPlaylist03BulkRounded,
  StrokeSharp: IconPlaylist03StrokeSharp,
  SolidSharp: IconPlaylist03SolidSharp,
};