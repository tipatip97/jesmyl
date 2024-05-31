import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z',
  d2: 'M10 18L8.5 16.5M8.5 16.5L7 15M8.5 16.5L7 18M8.5 16.5L10 15',
  d3: 'M16.9912 15H17.0002M15 18H15.009',
  d4: 'M3 12H21',
  d5: 'M3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12H3Z',
  d6: 'M13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V12H21V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2Z',
  d7: 'M13.0732 1H10.9268H10.9268C9.10338 0.999974 7.63362 0.999953 6.47767 1.15537C5.27752 1.31672 4.26702 1.66191 3.46447 2.46447C2.66191 3.26702 2.31672 4.27752 2.15537 5.47767C1.99995 6.63361 1.99997 8.10336 2 9.9268V9.92682V14.0732V14.0732C1.99997 15.8966 1.99995 17.3664 2.15537 18.5223C2.31672 19.7225 2.66191 20.733 3.46447 21.5355C4.26702 22.3381 5.27752 22.6833 6.47767 22.8446C7.63363 23.0001 9.1034 23 10.9269 23H13.0731C14.8966 23 16.3664 23.0001 17.5223 22.8446C18.7225 22.6833 19.733 22.3381 20.5355 21.5355C21.3381 20.733 21.6833 19.7225 21.8446 18.5223C22.0001 17.3664 22 15.8966 22 14.0731V9.92686C22 8.1034 22.0001 6.63363 21.8446 5.47767C21.6833 4.27752 21.3381 3.26702 20.5355 2.46447C19.733 1.66191 18.7225 1.31672 17.5223 1.15537C16.3664 0.999953 14.8966 0.999974 13.0732 1H13.0732ZM4.87868 3.87868C5.2477 3.50966 5.7658 3.26907 6.74416 3.13753C7.7513 3.00213 9.08611 3 11 3H13C14.9139 3 16.2487 3.00213 17.2558 3.13753C18.2342 3.26907 18.7523 3.50966 19.1213 3.87868C19.4903 4.2477 19.7309 4.7658 19.8625 5.74416C19.9979 6.7513 20 8.08611 20 10V10.25C20 10.7214 20 10.9571 19.8536 11.1036C19.7071 11.25 19.4714 11.25 19 11.25H5C4.5286 11.25 4.2929 11.25 4.14645 11.1036C4 10.9571 4 10.7214 4 10.25V10C4 8.08611 4.00213 6.7513 4.13753 5.74416C4.26907 4.7658 4.50966 4.2477 4.87868 3.87868ZM10.7071 14.2929C11.0976 14.6834 11.0976 15.3166 10.7071 15.7071L9.91421 16.5L10.7071 17.2929C11.0976 17.6834 11.0976 18.3166 10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071L8.5 17.9142L7.70711 18.7071C7.31658 19.0976 6.68342 19.0976 6.29289 18.7071C5.90237 18.3166 5.90237 17.6834 6.29289 17.2929L7.08579 16.5L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L8.5 15.0858L9.29289 14.2929C9.68342 13.9024 10.3166 13.9024 10.7071 14.2929ZM16.9912 14C16.4389 14 15.9912 14.4477 15.9912 15C15.9912 15.5523 16.4389 16 16.9912 16H17.0002C17.5525 16 18.0002 15.5523 18.0002 15C18.0002 14.4477 17.5525 14 17.0002 14H16.9912ZM15.009 17H15C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19H15.009C15.5613 19 16.009 18.5523 16.009 18C16.009 17.4477 15.5613 17 15.009 17Z',
  d8: 'M13.0732 1H10.9268H10.9268C9.10338 0.999974 7.63362 0.999953 6.47767 1.15537C5.27752 1.31672 4.26702 1.66191 3.46447 2.46447C2.66191 3.26702 2.31672 4.27752 2.15537 5.47767C1.99995 6.63361 1.99997 8.10336 2 9.9268V9.92682V14.0732V14.0732C1.99997 15.8966 1.99995 17.3664 2.15537 18.5223C2.31672 19.7225 2.66191 20.733 3.46447 21.5355C4.26702 22.3381 5.27752 22.6833 6.47767 22.8446C7.63363 23.0001 9.1034 23 10.9269 23H13.0731C14.8966 23 16.3664 23.0001 17.5223 22.8446C18.7225 22.6833 19.733 22.3381 20.5355 21.5355C21.3381 20.733 21.6833 19.7225 21.8446 18.5223C22.0001 17.3664 22 15.8966 22 14.0731V9.92686C22 8.1034 22.0001 6.63363 21.8446 5.47767C21.6833 4.27752 21.3381 3.26702 20.5355 2.46447C19.733 1.66191 18.7225 1.31672 17.5223 1.15537C16.3664 0.999953 14.8966 0.999974 13.0732 1H13.0732Z',
  d9: 'M4.87868 3.87868C5.2477 3.50966 5.76579 3.26907 6.74416 3.13753C7.75129 3.00212 9.08611 3 11 3H13C14.9139 3 16.2487 3.00212 17.2558 3.13753C18.2342 3.26907 18.7523 3.50966 19.1213 3.87868C19.4903 4.2477 19.7309 4.76579 19.8625 5.74416C19.9979 6.75129 20 8.08611 20 10V10.25C20 10.7214 20 10.9571 19.8536 11.1036C19.7071 11.25 19.4714 11.25 19 11.25H5C4.5286 11.25 4.29289 11.25 4.14645 11.1036C4 10.9571 4 10.7214 4 10.25V10C4 8.08611 4.00212 6.75129 4.13753 5.74416C4.26907 4.76579 4.50966 4.2477 4.87868 3.87868Z',
  d10: 'M10.7071 14.2929C11.0976 14.6834 11.0976 15.3166 10.7071 15.7071L9.91421 16.5L10.7071 17.2929C11.0976 17.6834 11.0976 18.3166 10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071L8.5 17.9142L7.70711 18.7071C7.31658 19.0976 6.68342 19.0976 6.29289 18.7071C5.90237 18.3166 5.90237 17.6834 6.29289 17.2929L7.08579 16.5L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L8.5 15.0858L9.29289 14.2929C9.68342 13.9024 10.3166 13.9024 10.7071 14.2929Z',
  d11: 'M15.9912 15C15.9912 14.4477 16.4389 14 16.9912 14H17.0002C17.5525 14 18.0002 14.4477 18.0002 15C18.0002 15.5523 17.5525 16 17.0002 16H16.9912C16.4389 16 15.9912 15.5523 15.9912 15ZM14 18C14 17.4477 14.4477 17 15 17H15.009C15.5613 17 16.009 17.4477 16.009 18C16.009 18.5523 15.5613 19 15.009 19H15C14.4477 19 14 18.5523 14 18Z',
  d12: 'M21 2H3V22H21V2Z',
  d13: 'M11 19L9 17M9 17L7 15M9 17L7 19M9 17L11 15',
  d14: 'M16.9912 15.5H17.0002M15 18.5H15.009',
  d15: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V2ZM3.75 2.75V11.25H20.25V2.75H3.75ZM7.93842 17.0001L6.46875 18.4697L7.52941 19.5304L8.99908 18.0607L10.4688 19.5304L11.5294 18.4697L10.0597 17.0001L11.5294 15.5304L10.4688 14.4697L8.99908 15.9394L7.52941 14.4697L6.46875 15.5304L7.93842 17.0001ZM16.9912 14.5C16.4389 14.5 15.9912 14.9477 15.9912 15.5C15.9912 16.0523 16.4389 16.5 16.9912 16.5H17.0002C17.5525 16.5 18.0002 16.0523 18.0002 15.5C18.0002 14.9477 17.5525 14.5 17.0002 14.5H16.9912ZM15 17.5C14.4477 17.5 14 17.9477 14 18.5C14 19.0523 14.4477 19.5 15 19.5H15.009C15.5613 19.5 16.009 19.0523 16.009 18.5C16.009 17.9477 15.5613 17.5 15.009 17.5H15Z',
} as const;

export const IconVideoConsoleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-stroke-rounded IconVideoConsoleStrokeRounded"
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

export const IconVideoConsoleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-duotone-rounded IconVideoConsoleDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconVideoConsoleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-twotone-rounded IconVideoConsoleTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVideoConsoleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-solid-rounded IconVideoConsoleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVideoConsoleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-bulk-rounded IconVideoConsoleBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVideoConsoleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-stroke-sharp IconVideoConsoleStrokeSharp"
    >
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVideoConsoleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="video-console-solid-sharp IconVideoConsoleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVideoConsole: TheIconSelfPack = {
  name: 'VideoConsole',
  StrokeRounded: IconVideoConsoleStrokeRounded,
  DuotoneRounded: IconVideoConsoleDuotoneRounded,
  TwotoneRounded: IconVideoConsoleTwotoneRounded,
  SolidRounded: IconVideoConsoleSolidRounded,
  BulkRounded: IconVideoConsoleBulkRounded,
  StrokeSharp: IconVideoConsoleStrokeSharp,
  SolidSharp: IconVideoConsoleSolidSharp,
};