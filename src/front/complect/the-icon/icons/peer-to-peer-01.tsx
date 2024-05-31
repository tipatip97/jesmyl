import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 8H7C8.41421 8 9.12132 8 9.56066 7.56066C10 7.12132 10 6.41421 10 5C10 3.58579 10 2.87868 9.56066 2.43934C9.12132 2 8.41421 2 7 2H5C3.58579 2 2.87868 2 2.43934 2.43934C2 2.87868 2 3.58579 2 5C2 6.41421 2 7.12132 2.43934 7.56066C2.87868 8 3.58579 8 5 8H6ZM6 8V10.5M6 10.5H7.5M6 10.5H4.5',
  d2: 'M13 5C15.8284 5 17.2426 5 18.1213 5.87868C19 6.75736 19 8.17157 19 11L17 10',
  d3: 'M11 19C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L7 14',
  d4: 'M18 19.5H19C20.4142 19.5 21.1213 19.5 21.5607 19.0607C22 18.6213 22 17.9142 22 16.5C22 15.0858 22 14.3787 21.5607 13.9393C21.1213 13.5 20.4142 13.5 19 13.5H17C15.5858 13.5 14.8787 13.5 14.4393 13.9393C14 14.3787 14 15.0858 14 16.5C14 17.9142 14 18.6213 14.4393 19.0607C14.8787 19.5 15.5858 19.5 17 19.5H18ZM18 19.5V22M18 22H19.5M18 22H16.5',
  d5: 'M19 13.5H17C15.5858 13.5 14.8787 13.5 14.4393 13.9393C14 14.3787 14 15.0858 14 16.5C14 17.9142 14 18.6213 14.4393 19.0607C14.8787 19.5 15.5858 19.5 17 19.5H18H19C20.4142 19.5 21.1213 19.5 21.5607 19.0607C22 18.6213 22 17.9142 22 16.5C22 15.0858 22 14.3787 21.5607 13.9393C21.1213 13.5 20.4142 13.5 19 13.5Z',
  d6: 'M7 2H5C3.58579 2 2.87868 2 2.43934 2.43934C2 2.87868 2 3.58579 2 5C2 6.41421 2 7.12132 2.43934 7.56066C2.87868 8 3.58579 8 5 8H6H7C8.41421 8 9.12132 8 9.56066 7.56066C10 7.12132 10 6.41421 10 5C10 3.58579 10 2.87868 9.56066 2.43934C9.12132 2 8.41421 2 7 2Z',
  d7: 'M7.04943 1.25C7.71427 1.24996 8.28711 1.24993 8.74585 1.31161C9.23748 1.37771 9.70875 1.52677 10.091 1.90901C10.4732 2.29126 10.6223 2.76252 10.6884 3.25416C10.7501 3.71291 10.75 4.3845 10.75 5.04937V5.04938C10.75 5.71425 10.7501 6.2871 10.6884 6.74585C10.6223 7.23748 10.4732 7.70875 10.091 8.09099C9.70875 8.47324 9.23748 8.6223 8.74585 8.6884C8.2871 8.75007 7.71424 8.75004 7.04937 8.75001L6.75 8.75V9.75H7.5C7.91422 9.75 8.25 10.0858 8.25 10.5C8.25 10.9142 7.91422 11.25 7.5 11.25H4.5C4.08579 11.25 3.75 10.9142 3.75 10.5C3.75 10.0858 4.08579 9.75 4.5 9.75H5.25V8.75L4.95064 8.75001C4.28577 8.75004 3.71291 8.75007 3.25416 8.6884C2.76252 8.6223 2.29126 8.47324 1.90901 8.09099C1.52677 7.70875 1.37771 7.23748 1.31161 6.74585C1.24993 6.28711 1.24996 5.71427 1.25 5.04943V5.04938C1.24996 4.38451 1.24993 3.71291 1.31161 3.25416C1.37771 2.76252 1.52677 2.29126 1.90901 1.90901C2.29126 1.52677 2.76252 1.37771 3.25416 1.31161C3.71289 1.24993 4.28574 1.24996 4.95058 1.25H4.95063H7.04938H7.04943Z',
  d8: 'M16.1919 5.85315C15.4365 5.75159 14.4354 5.75 13 5.75C12.5858 5.75 12.25 5.41421 12.25 5C12.25 4.58579 12.5858 4.25 13 4.25C13.0183 4.25 13.0366 4.25 13.0549 4.25C14.4225 4.24998 15.5248 4.24996 16.3918 4.36652C17.2919 4.48754 18.0497 4.74643 18.6517 5.34835C19.2536 5.95027 19.5125 6.70814 19.6335 7.60825C19.75 8.47522 19.75 9.57754 19.75 10.9451L19.75 11C19.75 11.2599 19.6154 11.5013 19.3943 11.638C19.1732 11.7746 18.8971 11.7871 18.6646 11.6708L16.6646 10.6708C16.2941 10.4856 16.1439 10.0351 16.3292 9.66459C16.5144 9.29411 16.9649 9.14394 17.3354 9.32918L18.2466 9.78478C18.2394 8.96758 18.2169 8.32934 18.1469 7.80812C18.0482 7.07435 17.8678 6.68577 17.591 6.40901C17.3142 6.13225 16.9257 5.9518 16.1919 5.85315Z',
  d9: 'M4.6057 12.362C4.82682 12.2254 5.10292 12.2129 5.33541 12.3292L7.33541 13.3292C7.7059 13.5144 7.85606 13.9649 7.67082 14.3354C7.48558 14.7059 7.03507 14.8561 6.66459 14.6708L5.75339 14.2152C5.76059 15.0324 5.78307 15.6707 5.85315 16.1919C5.9518 16.9257 6.13225 17.3142 6.40901 17.591C6.68577 17.8678 7.07435 18.0482 7.80812 18.1469C8.56347 18.2484 9.56458 18.25 11 18.25C11.4142 18.25 11.75 18.5858 11.75 19C11.75 19.4142 11.4142 19.75 11 19.75L10.9451 19.75C9.57754 19.75 8.47522 19.75 7.60825 19.6335C6.70814 19.5125 5.95027 19.2536 5.34835 18.6517C4.74643 18.0497 4.48754 17.2919 4.36652 16.3918C4.24996 15.5248 4.24998 14.4225 4.25 13.0549C4.25 13.0366 4.25 13.0183 4.25 13C4.25 12.7401 4.38459 12.4987 4.6057 12.362Z',
  d10: 'M19.0494 12.75C19.7143 12.75 20.2871 12.7499 20.7458 12.8116C21.2375 12.8777 21.7087 13.0268 22.091 13.409C22.4732 13.7913 22.6223 14.2625 22.6884 14.7542C22.7501 15.2129 22.75 15.8845 22.75 16.5494V16.5494C22.75 17.2142 22.7501 17.7871 22.6884 18.2458C22.6223 18.7375 22.4732 19.2087 22.091 19.591C21.7087 19.9732 21.2375 20.1223 20.7458 20.1884C20.2871 20.2501 19.7142 20.25 19.0494 20.25L18.75 20.25V21.25H19.5C19.9142 21.25 20.25 21.5858 20.25 22C20.25 22.4142 19.9142 22.75 19.5 22.75H16.5C16.0858 22.75 15.75 22.4142 15.75 22C15.75 21.5858 16.0858 21.25 16.5 21.25H17.25V20.25L16.9506 20.25C16.2858 20.25 15.7129 20.2501 15.2542 20.1884C14.7625 20.1223 14.2913 19.9732 13.909 19.591C13.5268 19.2087 13.3777 18.7375 13.3116 18.2458C13.2499 17.7871 13.25 17.2143 13.25 16.5494V16.5494C13.25 15.8845 13.2499 15.2129 13.3116 14.7542C13.3777 14.2625 13.5268 13.7913 13.909 13.409C14.2913 13.0268 14.7625 12.8777 15.2542 12.8116C15.7129 12.7499 16.2857 12.75 16.9506 12.75H16.9506H19.0494H19.0494Z',
  d11: 'M13 5.00005L19 5V10.0001H18.5L16.5 8.5',
  d12: 'M11 19L5 19.0001L5 14L5.5 14L7.5 15.5001',
  d13: 'M18 19.5H22V13.5H14V19.5H18ZM18 19.5V22M18 22H20M18 22H16',
  d14: 'M6 8H10V2H2V8H6ZM6 8V10.5M6 10.5H8M6 10.5H4',
  d15: 'M19.75 4.25V10.7501H18.25L16.05 9.1L16.95 7.90001L18.25 8.87504V5.75001L13 5.75006L13 4.25006L19.75 4.25Z',
  d16: 'M4.25 13.25L5.75001 13.25L7.95001 14.9001L7.04999 16.1L5.75 15.125L5.75 18.25L11 18.25L11 19.75L4.25 19.7501L4.25 13.25Z',
  d17: 'M18.75 20.25V21.25H20V22.75H16V21.25H17.25V20.25H13.25V12.75H22.75V20.25H18.75Z',
  d18: 'M6.75 8.75V9.75H8V11.25H4V9.75H5.25V8.75H1.25V1.25H10.75V8.75H6.75Z',
} as const;

export const IconPeerToPeer01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-stroke-rounded IconPeerToPeer01StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconPeerToPeer01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-duotone-rounded IconPeerToPeer01DuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconPeerToPeer01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-twotone-rounded IconPeerToPeer01TwotoneRounded"
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-solid-rounded IconPeerToPeer01SolidRounded"
    >
      <path 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-bulk-rounded IconPeerToPeer01BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-stroke-sharp IconPeerToPeer01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-01-solid-sharp IconPeerToPeer01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPeerToPeer01: TheIconSelfPack = {
  name: 'PeerToPeer01',
  StrokeRounded: IconPeerToPeer01StrokeRounded,
  DuotoneRounded: IconPeerToPeer01DuotoneRounded,
  TwotoneRounded: IconPeerToPeer01TwotoneRounded,
  SolidRounded: IconPeerToPeer01SolidRounded,
  BulkRounded: IconPeerToPeer01BulkRounded,
  StrokeSharp: IconPeerToPeer01StrokeSharp,
  SolidSharp: IconPeerToPeer01SolidSharp,
};