import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z',
  d2: 'M22 22H2',
  d3: 'M14 9H10',
  d4: 'M14 15H10',
  d5: 'M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z',
  d6: 'M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219',
  d7: 'M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922',
  d8: 'M1 21.75C1 21.1977 1.44772 20.75 2 20.75H22C22.5523 20.75 23 21.1977 23 21.75C23 22.3023 22.5523 22.75 22 22.75H2C1.44772 22.75 1 22.3023 1 21.75Z',
  d9: 'M9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9Z',
  d10: 'M9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15Z',
  d11: 'M19.3353 3.37303L19.3353 3.37301L17.9638 2.55224L17.9638 2.5522C17.2072 2.09935 16.5714 1.71884 16.0469 1.49646C15.5096 1.26865 14.8965 1.12086 14.2914 1.41158C13.6573 1.7162 13.4299 2.30651 13.337 2.87085C13.2499 3.39982 13.2499 4.09721 13.25 4.9028L13.25 22.0005C13.25 22.4147 13.5858 22.7505 14 22.7505H21C21.4142 22.7505 21.75 22.4147 21.75 22.0005L21.75 7.44945C21.75 6.93134 21.75 6.48659 21.7115 6.11531C21.6701 5.71666 21.5801 5.3476 21.3681 4.99194C21.1585 4.6403 20.8748 4.37799 20.542 4.13596C20.2258 3.90594 19.8199 3.66305 19.3353 3.37303ZM17.4955 7.00024C16.9457 7.00024 16.5 7.44796 16.5 8.00024C16.5 8.55252 16.9457 9.00024 17.4955 9.00024H17.5045C18.0543 9.00024 18.5 8.55253 18.5 8.00024C18.5 7.44796 18.0543 7.00024 17.5045 7.00024H17.4955ZM17.4955 11.0002C16.9457 11.0002 16.5 11.448 16.5 12.0002C16.5 12.5525 16.9457 13.0002 17.4955 13.0002H17.5045C18.0543 13.0002 18.5 12.5525 18.5 12.0002C18.5 11.448 18.0543 11.0002 17.5045 11.0002H17.4955ZM17.4955 15.0002C16.9457 15.0002 16.5 15.448 16.5 16.0002C16.5 16.5525 16.9457 17.0002 17.4955 17.0002H17.5045C18.0543 17.0002 18.5 16.5525 18.5 16.0002C18.5 15.448 18.0543 15.0002 17.5045 15.0002H17.4955Z',
  d12: 'M4.66469 3.37303L4.66473 3.37301L6.03618 2.55224L6.03623 2.5522C6.79285 2.09935 7.4286 1.71884 7.9531 1.49646C8.49042 1.26865 9.1035 1.12086 9.70862 1.41158C10.3427 1.7162 10.5701 2.30651 10.663 2.87085C10.7501 3.39982 10.7501 4.09721 10.75 4.9028L10.75 22.0005C10.75 22.4147 10.4142 22.7505 9.99999 22.7505H2.99999C2.58578 22.7505 2.24999 22.4147 2.24999 22.0005L2.24999 7.44945C2.24997 6.93134 2.24996 6.48659 2.28852 6.11531C2.32993 5.71666 2.41985 5.3476 2.63188 4.99194C2.84152 4.6403 3.12522 4.37799 3.45796 4.13596C3.77418 3.90594 4.18006 3.66305 4.66469 3.37303ZM6.50447 7.00024C7.05429 7.00024 7.5 7.44796 7.5 8.00024C7.5 8.55252 7.05429 9.00024 6.50447 9.00024H6.49553C5.94571 9.00024 5.5 8.55253 5.5 8.00024C5.5 7.44796 5.94571 7.00024 6.49553 7.00024H6.50447ZM6.50447 11.0002C7.05429 11.0002 7.5 11.448 7.5 12.0002C7.5 12.5525 7.05429 13.0002 6.50447 13.0002H6.49553C5.94571 13.0002 5.5 12.5525 5.5 12.0002C5.5 11.448 5.94571 11.0002 6.49553 11.0002H6.50447ZM6.50447 15.0002C7.05429 15.0002 7.5 15.448 7.5 16.0002C7.5 16.5525 7.05429 17.0002 6.50447 17.0002H6.49553C5.94571 17.0002 5.5 16.5525 5.5 16.0002C5.5 15.448 5.94571 15.0002 6.49553 15.0002H6.50447Z',
  d13: 'M19.3353 3.37277C19.8199 3.6628 20.2258 3.9057 20.542 4.13572C20.8748 4.37775 21.1585 4.64006 21.3681 4.9917C21.5801 5.34735 21.6701 5.71642 21.7115 6.11507C21.75 6.48635 21.75 6.9311 21.75 7.44921L21.75 22.0002C21.75 22.4145 21.4142 22.7502 21 22.7502H14C13.5858 22.7502 13.25 22.4145 13.25 22.0002L13.25 4.90256C13.2499 4.09697 13.2499 3.39958 13.337 2.87061C13.4299 2.30627 13.6573 1.71596 14.2914 1.41134C14.8965 1.12062 15.5096 1.26841 16.0469 1.49622C16.5714 1.7186 17.2072 2.09913 17.9638 2.552L19.3353 3.37277Z',
  d14: 'M4.66473 3.37277C4.18008 3.6628 3.77419 3.9057 3.45796 4.13572C3.12522 4.37775 2.84152 4.64006 2.63188 4.9917C2.41985 5.34735 2.32993 5.71642 2.28852 6.11507C2.24996 6.48635 2.24997 6.9311 2.24999 7.44921L2.24999 22.0002C2.24999 22.4145 2.58578 22.7502 2.99999 22.7502H9.99999C10.4142 22.7502 10.75 22.4145 10.75 22.0002L10.75 4.90256C10.7501 4.09697 10.7501 3.39958 10.663 2.87061C10.5701 2.30627 10.3427 1.71596 9.70862 1.41134C9.1035 1.12062 8.49042 1.26841 7.9531 1.49622C7.42859 1.7186 6.79281 2.09913 6.03618 2.552L4.66473 3.37277Z',
  d15: 'M10.75 8H13.25L13.25 10H10.75L10.75 8ZM10.75 14H13.25L13.25 16H10.75L10.75 14Z',
  d16: 'M16.5 8C16.5 7.44772 16.9457 7 17.4955 7H17.5045C18.0543 7 18.5 7.44772 18.5 8C18.5 8.55228 18.0543 9 17.5045 9H17.4955C16.9457 9 16.5 8.55228 16.5 8ZM16.5 12C16.5 11.4477 16.9457 11 17.4955 11H17.5045C18.0543 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0543 13 17.5045 13H17.4955C16.9457 13 16.5 12.5523 16.5 12ZM16.5 16C16.5 15.4477 16.9457 15 17.4955 15H17.5045C18.0543 15 18.5 15.4477 18.5 16C18.5 16.5523 18.0543 17 17.5045 17H17.4955C16.9457 17 16.5 16.5523 16.5 16Z',
  d17: 'M7.5 8C7.5 7.44772 7.05429 7 6.50447 7H6.49553C5.94571 7 5.5 7.44772 5.5 8C5.5 8.55228 5.94571 9 6.49553 9H6.50447C7.05429 9 7.5 8.55228 7.5 8ZM7.5 12C7.5 11.4477 7.05429 11 6.50447 11H6.49553C5.94571 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94571 13 6.49553 13H6.50447C7.05429 13 7.5 12.5523 7.5 12ZM7.5 16C7.5 15.4477 7.05429 15 6.50447 15H6.49553C5.94571 15 5.5 15.4477 5.5 16C5.5 16.5523 5.94571 17 6.49553 17H6.50447C7.05429 17 7.5 16.5523 7.5 16Z',
  d18: 'M23 21.9785H1',
  d19: 'M14 9.06738H10',
  d20: 'M14 15.0264H10',
  d21: 'M6.50117 8.07373H6.49219M6.50117 12.0466H6.49219M6.50117 16.0194H6.49219',
  d22: 'M17.5012 8.07373H17.4922M17.5012 12.0466H17.4922M17.5012 16.0194H17.4922',
  d23: 'M3.00488 5.02432V22.001H10.0002V2.00897C10.0002 2.00181 9.99285 1.997 9.98625 1.99986L3.00488 5.02432Z',
  d24: 'M20.9897 5.01727V21.9544H13.9944V2.00894C13.9944 2.0018 14.0018 1.99701 14.0084 1.99986L20.9897 5.01727Z',
  d25: 'M1 20.75H23V22.75H1V20.75Z',
  d26: 'M9 8H15V10H9V8ZM9 14H15V16H9V14Z',
  d27: 'M10.75 2C10.75 1.74789 10.6233 1.51265 10.4129 1.37387C10.2024 1.23509 9.93628 1.21133 9.70456 1.31064L2.25 4.50545L2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H10C10.4142 22.75 10.75 22.4142 10.75 22L10.75 2ZM7.50117 7H5.49219L5.49219 9H7.50117L7.50117 7ZM7.50117 11H5.49219V13H7.50117L7.50117 11ZM7.50117 15H5.49219V17H7.50117V15Z',
  d28: 'M14.2954 1.31064C14.0637 1.21133 13.7976 1.23508 13.5871 1.37387C13.3767 1.51265 13.25 1.74789 13.25 2L13.25 22C13.25 22.4142 13.5858 22.75 14 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V4.50545L14.2954 1.31064ZM18.5012 6.99999H16.4922L16.4922 8.99999H18.5012L18.5012 6.99999ZM18.5012 11H16.4922V13H18.5012V11ZM18.5012 15H16.4922V17H18.5012V15Z',
} as const;

export const IconRealEstate01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-stroke-rounded IconRealEstate01StrokeRounded"
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

export const IconRealEstate01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-duotone-rounded IconRealEstate01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconRealEstate01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-twotone-rounded IconRealEstate01TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-solid-rounded IconRealEstate01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-bulk-rounded IconRealEstate01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-stroke-sharp IconRealEstate01StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-01-solid-sharp IconRealEstate01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRealEstate01: TheIconSelfPack = {
  name: 'RealEstate01',
  StrokeRounded: IconRealEstate01StrokeRounded,
  DuotoneRounded: IconRealEstate01DuotoneRounded,
  TwotoneRounded: IconRealEstate01TwotoneRounded,
  SolidRounded: IconRealEstate01SolidRounded,
  BulkRounded: IconRealEstate01BulkRounded,
  StrokeSharp: IconRealEstate01StrokeSharp,
  SolidSharp: IconRealEstate01SolidSharp,
};