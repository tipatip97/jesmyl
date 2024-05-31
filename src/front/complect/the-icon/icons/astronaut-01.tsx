import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.6573 18C19.6963 16.35 21 13.8273 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11V20',
  d2: 'M18.4998 17.5L14.1211 13.1213M17.9998 5L14.1211 8.87868',
  d3: 'M18 18H5C4.05719 18 3.58579 18 3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H20C20.5523 22 21 21.5523 21 21C21 19.3431 19.6569 18 18 18Z',
  d4: 'M3 11C3 6.02944 7.02944 2 12 2C14.4353 2 16.6447 2.96724 18.2649 4.53851L14.0433 8.68045L12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C12.86 14 13.6354 13.6382 14.1824 13.0584L18.4807 17.245C18.2222 17.5132 17.9472 17.7654 17.6573 18H3V11Z',
  d5: 'M17.6573 18C19.6963 16.35 21 13.8273 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11V20M14.1213 8.87868L18 5M14.1213 13.1213L18.5 17.5',
  d6: 'M12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z',
  d7: 'M4.2 11C4.2 6.69218 7.69218 3.2 12 3.2C13.8838 3.2 15.6116 3.86778 16.9596 4.97954L13.5908 8.34835C13.4468 8.49229 13.3676 8.68857 13.3712 8.8921C13.3749 9.09564 13.4611 9.28895 13.6101 9.42765C13.9722 9.76471 14.3747 10.326 14.4852 10.8946C14.5375 11.1637 14.5228 11.4218 14.4217 11.6698C14.3205 11.9183 14.1109 12.2097 13.6878 12.5092C13.5074 12.6368 13.3925 12.8376 13.3738 13.0579L13.1818 14.0606L16.5506 17.4295L16.758 18.4383C17.0967 18.8569 17.7106 18.9217 18.1292 18.5829C20.3362 16.7971 21.75 14.0633 21.75 11C21.75 5.61522 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.61522 2.25 11V19.775C2.25 20.3135 2.68652 20.75 3.225 20.75C3.76348 20.75 4.2 20.3135 4.2 19.775V11Z',
  d8: 'M4.95526 17.25L18 17.25C20.0711 17.25 21.75 18.9289 21.75 21C21.75 21.9665 20.9665 22.75 20 22.75L4.95526 22.75H4.95525C4.52244 22.7501 4.12561 22.7501 3.8028 22.7067C3.44732 22.6589 3.07159 22.5465 2.76257 22.2374C2.45355 21.9284 2.3411 21.5527 2.29331 21.1972C2.24991 20.8744 2.24995 20.3881 2.25 19.9553C2.24995 19.5224 2.24991 19.1256 2.29331 18.8028C2.3411 18.4473 2.45355 18.0716 2.76257 17.7626C3.07159 17.4535 3.44732 17.3411 3.8028 17.2933C4.12561 17.2499 4.52244 17.25 4.95526 17.25Z',
  d9: 'M4.2 11C4.2 6.69218 7.69218 3.2 12 3.2C13.8838 3.2 15.6116 3.86778 16.9596 4.97954L14.2481 7.69103C15.3055 8.41086 16 9.62433 16 11C16 12.5898 15.0725 13.963 13.7291 14.608L16.3711 17.25H18C18.4525 17.25 18.8862 17.3301 19.2878 17.477C20.8186 15.7555 21.75 13.4863 21.75 11C21.75 5.61522 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.61522 2.25 11V19.775C2.25 19.7792 2.25003 19.7834 2.25008 19.7877C2.25068 19.4201 2.25557 19.0835 2.29331 18.8028C2.3411 18.4473 2.45355 18.0716 2.76257 17.7626C3.07159 17.4535 3.44732 17.3411 3.8028 17.2933C3.92524 17.2768 4.05833 17.2666 4.2 17.2603V11Z',
  d10: 'M17 18H3V22H21C21 21.07 21 20.605 20.8978 20.2235C20.6204 19.1883 19.8117 18.3796 18.7765 18.1022C18.395 18 17.93 18 17 18Z',
  d11: 'M4.2 11C4.2 6.69218 7.69218 3.2 12 3.2C13.8838 3.2 15.6116 3.86779 16.9596 4.97956L13.5908 8.34841C13.4451 8.49407 13.3658 8.69322 13.3714 8.89914C13.377 9.10506 13.467 9.29961 13.6204 9.43713C13.9375 9.72145 14.3042 10.2265 14.4061 10.7801C14.4959 11.2676 14.4021 11.8854 13.6299 12.5546C13.4726 12.6909 13.379 12.8865 13.3716 13.0946C13.3641 13.3027 13.4435 13.5045 13.5908 13.6517L16.9596 17.0205C16.9406 17.0361 16.9217 17.0516 16.9026 17.0671L18.1292 18.5829C20.3362 16.7971 21.75 14.0633 21.75 11C21.75 5.61522 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.61522 2.25 11V19.775C2.25 20.3135 2.68652 20.75 3.225 20.75C3.76348 20.75 4.2 20.3135 4.2 19.775V11Z',
  d12: 'M17.1158 17.25C17.9338 17.2498 18.4919 17.2496 18.9706 17.3778C20.2647 17.7246 21.2755 18.7354 21.6222 20.0295C21.7505 20.5081 21.7503 21.1821 21.75 22C21.75 22.4143 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4143 2.25 22V18C2.25 17.5858 2.58579 17.25 3 17.25L17.1158 17.25Z',
} as const;

export const IconAstronaut01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-stroke-rounded IconAstronaut01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="11" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconAstronaut01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-duotone-rounded IconAstronaut01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="11" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconAstronaut01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-twotone-rounded IconAstronaut01TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="11" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconAstronaut01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-solid-rounded IconAstronaut01SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAstronaut01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-bulk-rounded IconAstronaut01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAstronaut01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-stroke-sharp IconAstronaut01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="11" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAstronaut01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="astronaut-01-solid-sharp IconAstronaut01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAstronaut01: TheIconSelfPack = {
  name: 'Astronaut01',
  StrokeRounded: IconAstronaut01StrokeRounded,
  DuotoneRounded: IconAstronaut01DuotoneRounded,
  TwotoneRounded: IconAstronaut01TwotoneRounded,
  SolidRounded: IconAstronaut01SolidRounded,
  BulkRounded: IconAstronaut01BulkRounded,
  StrokeSharp: IconAstronaut01StrokeSharp,
  SolidSharp: IconAstronaut01SolidSharp,
};