import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 4V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7071C21 21.4142 21 20.9428 21 20V4',
  d2: 'M10.5 8V9.5M10.5 11V9.5M13.5 8V9.5M13.5 11V9.5M10.5 9.5H13.5',
  d3: 'M14 22.0001L14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22.0001',
  d4: 'M2 4H8C8.6399 2.82727 10.1897 2 12 2C13.8103 2 15.3601 2.82727 16 4H22',
  d5: 'M6 8H7M6 12H7M6 16H7',
  d6: 'M17 8H18M17 12H18M17 16H18',
  d7: 'M8 4C8.6399 2.82727 10.1897 2 12 2C13.8103 2 15.3601 2.82727 16 4H21V21C21 21.5523 20.5523 22 20 22H14V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22H4C3.44772 22 3 21.5523 3 21V4H8Z',
  d8: 'M12 1.25C10.2063 1.25 8.50572 1.9584 7.52358 3.17279C7.48456 3.22104 7.42628 3.25 7.36423 3.25H2C1.44772 3.25 1 3.69772 1 4.25C1 4.80228 1.44772 5.25 2 5.25H2.05001C2.16046 5.25 2.25001 5.33954 2.25001 5.45L2.25 20.0447C2.24995 20.4776 2.24991 20.8744 2.29331 21.1972C2.3411 21.5527 2.45355 21.9284 2.76257 22.2374C3.07159 22.5465 3.44732 22.6589 3.8028 22.7067C4.12561 22.7501 4.52245 22.7501 4.95526 22.75H8.8C8.91046 22.75 9 22.6605 9 22.55V18.75C9 17.0931 10.3431 15.75 12 15.75C13.6569 15.75 15 17.0931 15 18.75V22.55C15 22.6605 15.0895 22.75 15.2 22.75H19.0448C19.4776 22.7501 19.8744 22.7501 20.1972 22.7067C20.5527 22.6589 20.9284 22.5465 21.2374 22.2374C21.5465 21.9284 21.6589 21.5527 21.7067 21.1972C21.7501 20.8744 21.7501 20.4776 21.75 20.0447L21.75 5.45C21.75 5.33954 21.8396 5.25 21.95 5.25H22C22.5523 5.25 23 4.80228 23 4.25C23 3.69772 22.5523 3.25 22 3.25H16.6358C16.5737 3.25 16.5154 3.22104 16.4764 3.17279C15.4943 1.9584 13.7937 1.25 12 1.25ZM10.5 7.25C10.9142 7.25 11.25 7.58579 11.25 8V8.55C11.25 8.66046 11.3395 8.75 11.45 8.75H12.55C12.6605 8.75 12.75 8.66046 12.75 8.55V8C12.75 7.58579 13.0858 7.25 13.5 7.25C13.9142 7.25 14.25 7.58579 14.25 8V11C14.25 11.4142 13.9142 11.75 13.5 11.75C13.0858 11.75 12.75 11.4142 12.75 11V10.45C12.75 10.3395 12.6605 10.25 12.55 10.25H11.45C11.3395 10.25 11.25 10.3395 11.25 10.45V11C11.25 11.4142 10.9142 11.75 10.5 11.75C10.0858 11.75 9.75 11.4142 9.75 11V8C9.75 7.58579 10.0858 7.25 10.5 7.25ZM5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.41421 7.41421 8.75 7 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8ZM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7C7.41421 11.25 7.75 11.5858 7.75 12C7.75 12.4142 7.41421 12.75 7 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16ZM17 7.25C16.5858 7.25 16.25 7.58579 16.25 8C16.25 8.41421 16.5858 8.75 17 8.75H18C18.4142 8.75 18.75 8.41421 18.75 8C18.75 7.58579 18.4142 7.25 18 7.25H17ZM17 11.25C16.5858 11.25 16.25 11.5858 16.25 12C16.25 12.4142 16.5858 12.75 17 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H17ZM17 15.25C16.5858 15.25 16.25 15.5858 16.25 16C16.25 16.4142 16.5858 16.75 17 16.75H18C18.4142 16.75 18.75 16.4142 18.75 16C18.75 15.5858 18.4142 15.25 18 15.25H17Z',
  d9: 'M12.8 22.75C12.9105 22.75 13 22.6605 13 22.55V18.75C13 18.1977 12.5523 17.75 12 17.75C11.4477 17.75 11 18.1977 11 18.75V22.55C11 22.6605 11.0895 22.75 11.2 22.75H12.8Z',
  d10: 'M12 1.25C10.1686 1.25 8.43431 1.98848 7.46263 3.25H2C1.44772 3.25 1 3.69772 1 4.25C1 4.80228 1.44772 5.25 2 5.25H2.25001L2.25 20.0447C2.24995 20.4776 2.24991 20.8744 2.29331 21.1972C2.3411 21.5527 2.45355 21.9284 2.76257 22.2374C3.07159 22.5465 3.44732 22.6589 3.8028 22.7067C4.12561 22.7501 4.52245 22.7501 4.95526 22.75H19.0448C19.4776 22.7501 19.8744 22.7501 20.1972 22.7067C20.5527 22.6589 20.9284 22.5465 21.2374 22.2374C21.5465 21.9284 21.6589 21.5527 21.7067 21.1972C21.7501 20.8744 21.7501 20.4776 21.75 20.0447L21.75 5.25H22C22.5523 5.25 23 4.80228 23 4.25C23 3.69772 22.5523 3.25 22 3.25H16.5374C15.5657 1.98848 13.8314 1.25 12 1.25Z',
  d11: 'M12 3.25C10.4503 3.25 9.29721 3.96038 8.87782 4.72898C8.70257 5.05017 8.36589 5.25 8 5.25H2C1.44772 5.25 1 4.80228 1 4.25C1 3.69772 1.44772 3.25 2 3.25H7.46263C8.43431 1.98848 10.1686 1.25 12 1.25C13.8314 1.25 15.5657 1.98848 16.5374 3.25H22C22.5523 3.25 23 3.69772 23 4.25C23 4.80228 22.5523 5.25 22 5.25H16C15.6341 5.25 15.2974 5.05017 15.1222 4.72898C14.7028 3.96038 13.5497 3.25 12 3.25Z',
  d12: 'M10.5 7.25C10.9142 7.25 11.25 7.58579 11.25 8V8.75H12.75V8C12.75 7.58579 13.0858 7.25 13.5 7.25C13.9142 7.25 14.25 7.58579 14.25 8V11C14.25 11.4142 13.9142 11.75 13.5 11.75C13.0858 11.75 12.75 11.4142 12.75 11V10.25H11.25V11C11.25 11.4142 10.9142 11.75 10.5 11.75C10.0858 11.75 9.75 11.4142 9.75 11V8C9.75 7.58579 10.0858 7.25 10.5 7.25Z',
  d13: 'M12 17.75C11.4477 17.75 11 18.1977 11 18.75V22.7501H9V18.75C9 17.0931 10.3431 15.75 12 15.75C13.6569 15.75 15 17.0931 15 18.75L15 22.7501H13L13 18.75C13 18.1977 12.5523 17.75 12 17.75Z',
  d14: 'M5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.41421 7.41421 8.75 7 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8ZM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7C7.41421 11.25 7.75 11.5858 7.75 12C7.75 12.4142 7.41421 12.75 7 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d15: 'M16.25 8C16.25 7.58579 16.5858 7.25 17 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H17C16.5858 8.75 16.25 8.41421 16.25 8ZM16.25 12C16.25 11.5858 16.5858 11.25 17 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H17C16.5858 12.75 16.25 12.4142 16.25 12ZM16.25 16C16.25 15.5858 16.5858 15.25 17 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H17C16.5858 16.75 16.25 16.4142 16.25 16Z',
  d16: 'M3.00818 4.00049V22.0005H21.0191V4.00049',
  d17: 'M10.5126 7.00049V9.50049M10.5126 9.50049V12.0005M10.5126 9.50049H13.5144M13.5144 7.00049V9.50049M13.5144 9.50049V12.0005',
  d18: 'M14.015 22.0006V16.0005H10.0126V22.0006',
  d19: 'M5.50964 8.00049H7.51085M5.50964 12.0005H7.51085M5.50964 16.0005H7.51085',
  d20: 'M16.5165 8.00049H18.5177M16.5165 12.0005H18.5177M16.5165 16.0005H18.5177',
  d21: 'M1.50037 3.99106H8.04487C8.73494 2.27965 13.5502 0.532162 15.9629 3.99041L22.4996 3.99106',
  d22: 'M2.25 22.75V5.25H1V3.25H7.58818C8.48632 2.00516 10.1778 1.25 12 1.25C13.8222 1.25 15.5137 2.00516 16.4118 3.25H23V5.25H21.75V22.75H14.75V16C14.75 15.5858 14.4142 15.25 14 15.25L10 15.25C9.80109 15.25 9.61032 15.329 9.46967 15.4697C9.32902 15.6103 9.25 15.8011 9.25 16V22.75H2.25ZM11.25 7H9.75V12H11.25V10.25H12.75V12H14.25V7H12.75V8.75H11.25V7ZM5.5 8.75H7.5V7.25H5.5V8.75ZM5.5 12.75H7.5V11.25H5.5V12.75ZM5.5 16.75H7.5V15.25H5.5V16.75ZM18.5 8.75H16.5V7.25H18.5V8.75ZM18.5 12.75H16.5V11.25H18.5V12.75ZM18.5 16.75H16.5V15.25H18.5V16.75Z',
  d23: 'M13.25 16.75V22.75H10.75V16.75L13.25 16.75Z',
} as const;

export const IconHotel01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-stroke-rounded IconHotel01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHotel01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-duotone-rounded IconHotel01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconHotel01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-twotone-rounded IconHotel01TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconHotel01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-solid-rounded IconHotel01SolidRounded"
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

export const IconHotel01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-bulk-rounded IconHotel01BulkRounded"
    >
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconHotel01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-stroke-sharp IconHotel01StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotel01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotel-01-solid-sharp IconHotel01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHotel01: TheIconSelfPack = {
  name: 'Hotel01',
  StrokeRounded: IconHotel01StrokeRounded,
  DuotoneRounded: IconHotel01DuotoneRounded,
  TwotoneRounded: IconHotel01TwotoneRounded,
  SolidRounded: IconHotel01SolidRounded,
  BulkRounded: IconHotel01BulkRounded,
  StrokeSharp: IconHotel01StrokeSharp,
  SolidSharp: IconHotel01SolidSharp,
};