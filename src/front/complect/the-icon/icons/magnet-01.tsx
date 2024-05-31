import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 12V11C16 10.0572 16 9.58579 16.2929 9.29289C16.5858 9 17.0572 9 18 9C18.9428 9 19.4142 9 19.7071 9.29289C20 9.58579 20 10.0572 20 11V12M16 12V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V12M16 12H20M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12M8 12V11C8 10.0572 8 9.58579 7.70711 9.29289C7.41421 9 6.94281 9 6 9C5.05719 9 4.58579 9 4.29289 9.29289C4 9.58579 4 10.0572 4 11V12M8 12L4 12',
  d2: 'M18 2V6M20 4H16',
  d3: 'M8 4H4',
  d4: 'M12 18C14.2091 18 16 16.2091 16 14V12H20V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12H8V14C8 16.2091 9.79086 18 12 18Z',
  d5: 'M7.19721 8.29331C6.8744 8.24991 6.47757 8.24995 6.04476 8.25C5.61194 8.24995 5.12561 8.24991 4.8028 8.29331C4.44732 8.3411 4.07159 8.45355 3.76257 8.76257C3.45355 9.07159 3.3411 9.44732 3.29331 9.8028C3.24991 10.1256 3.24995 10.5224 3.25 10.9553L3.25 11.25L8.75001 11.25L8.75001 10.9553V10.9553C8.75006 10.5224 8.75011 10.1256 8.70671 9.8028C8.65891 9.44732 8.54647 9.07159 8.23744 8.76257C7.92842 8.45355 7.55269 8.3411 7.19721 8.29331ZM8.75001 12.75L3.25001 12.75L3.25001 14C3.25001 18.8325 7.16752 22.75 12 22.75C16.8325 22.75 20.75 18.8325 20.75 14L20.75 12.75H15.25L15.25 14C15.25 15.7949 13.7949 17.25 12 17.25C10.2051 17.25 8.75001 15.7949 8.75001 14L8.75001 12.75ZM15.25 11.25H20.75V10.9553C20.7501 10.5224 20.7501 10.1256 20.7067 9.8028C20.6589 9.44732 20.5465 9.07159 20.2374 8.76257C19.9284 8.45355 19.5527 8.3411 19.1972 8.29331C18.8744 8.24991 18.4776 8.24995 18.0448 8.25C17.6119 8.24995 17.1256 8.24991 16.8028 8.29331C16.4473 8.3411 16.0716 8.45355 15.7626 8.76257C15.4535 9.07159 15.3411 9.44732 15.2933 9.8028C15.2499 10.1256 15.25 10.5224 15.25 10.9552V10.9553V10.9553V11.25Z',
  d6: 'M18 1.25C18.4142 1.25 18.75 1.58579 18.75 2V3.25H20C20.4142 3.25 20.75 3.58579 20.75 4C20.75 4.41421 20.4142 4.75 20 4.75H18.75V6C18.75 6.41421 18.4142 6.75 18 6.75C17.5858 6.75 17.25 6.41421 17.25 6V4.75H16C15.5858 4.75 15.25 4.41421 15.25 4C15.25 3.58579 15.5858 3.25 16 3.25H17.25V2C17.25 1.58579 17.5858 1.25 18 1.25Z',
  d7: 'M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H8C8.41421 3.25 8.75 3.58579 8.75 4C8.75 4.41421 8.41421 4.75 8 4.75H4C3.58579 4.75 3.25 4.41421 3.25 4Z',
  d8: 'M7.19721 8.29331C6.8744 8.24991 6.47757 8.24995 6.04476 8.25C5.61194 8.24995 5.12561 8.24991 4.8028 8.29331C4.44732 8.3411 4.07159 8.45355 3.76257 8.76257C3.45355 9.07159 3.3411 9.44732 3.29331 9.8028C3.24991 10.1256 3.24995 10.5224 3.25 10.9553L3.25 11.25L8.75001 11.25L8.75001 10.9553C8.75006 10.5224 8.75011 10.1256 8.70671 9.8028C8.65891 9.44732 8.54647 9.07159 8.23744 8.76257C7.92842 8.45355 7.55269 8.3411 7.19721 8.29331Z',
  d9: 'M15.25 11.25H20.75V10.9553C20.7501 10.5224 20.7501 10.1256 20.7067 9.8028C20.6589 9.44732 20.5465 9.07159 20.2374 8.76257C19.9284 8.45355 19.5527 8.3411 19.1972 8.29331C18.8744 8.24991 18.4776 8.24995 18.0448 8.25C17.6119 8.24995 17.1256 8.24991 16.8028 8.29331C16.4473 8.3411 16.0716 8.45355 15.7626 8.76257C15.4535 9.07159 15.3411 9.44732 15.2933 9.8028C15.2499 10.1256 15.25 10.5224 15.25 10.9552V11.25Z',
  d10: 'M8.75 12.75L3.25 12.75L3.25 14C3.25 18.8325 7.16751 22.75 12 22.75C16.8325 22.75 20.75 18.8325 20.75 14L20.75 12.75H15.25L15.25 14C15.25 15.7949 13.7949 17.25 12 17.25C10.2051 17.25 8.75 15.7949 8.75 14L8.75 12.75Z',
  d11: 'M16 12V9H20V12M16 12V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V12M16 12H20M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12M8 12V9H4L4 12M8 12L4 12',
  d12: 'M4 8.25C3.80109 8.25 3.61032 8.32902 3.46967 8.46967C3.32902 8.61032 3.25 8.80109 3.25 9V11.25L8.75 11.25L8.75 9C8.75 8.80109 8.67098 8.61032 8.53033 8.46967C8.38968 8.32902 8.19891 8.25 8 8.25H4Z',
  d13: 'M8.75 12.75H3.25V14C3.25 18.8325 7.16751 22.75 12 22.75C16.8325 22.75 20.75 18.8325 20.75 14V12.75H15.25V14C15.25 15.7949 13.7949 17.25 12 17.25C10.2051 17.25 8.75 15.7949 8.75 14L8.75 12.75Z',
  d14: 'M15.25 11.25H20.75V9.00003C20.75 8.58581 20.4142 8.25003 20 8.25003L16 8.25003C15.5858 8.25003 15.25 8.58581 15.25 9.00003V11.25Z',
  d15: 'M18.75 1.25V3.25H20.75V4.75H18.75V6.75H17.25V4.75H15.25V3.25H17.25V1.25H18.75Z',
  d16: 'M3.25 3.25H8.75V4.75H3.25V3.25Z',
} as const;

export const IconMagnet01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-stroke-rounded IconMagnet01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMagnet01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-duotone-rounded IconMagnet01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMagnet01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-twotone-rounded IconMagnet01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMagnet01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-solid-rounded IconMagnet01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconMagnet01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-bulk-rounded IconMagnet01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMagnet01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-stroke-sharp IconMagnet01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagnet01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magnet-01-solid-sharp IconMagnet01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
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
    </TheIconWrapper>
  );
};

export const iconPackOfMagnet01: TheIconSelfPack = {
  name: 'Magnet01',
  StrokeRounded: IconMagnet01StrokeRounded,
  DuotoneRounded: IconMagnet01DuotoneRounded,
  TwotoneRounded: IconMagnet01TwotoneRounded,
  SolidRounded: IconMagnet01SolidRounded,
  BulkRounded: IconMagnet01BulkRounded,
  StrokeSharp: IconMagnet01StrokeSharp,
  SolidSharp: IconMagnet01SolidSharp,
};