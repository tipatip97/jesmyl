import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9',
  d2: 'M15.307 12H8.69298C7.37533 12 6.7165 12 6.20627 12.3439C5.69603 12.6877 5.45135 13.2966 4.96198 14.5144L4.1583 16.5144C3.15957 18.9998 2.66021 20.2425 3.25788 21.1213C3.85556 22 5.20014 22 7.8893 22H16.1107C18.7999 22 20.1444 22 20.7421 21.1213C21.3398 20.2425 20.8404 18.9998 19.8417 16.5144L19.038 14.5144C18.5487 13.2966 18.304 12.6877 17.7937 12.3439C17.2835 12 16.6247 12 15.307 12Z',
  d3: 'M12 12V22',
  d4: 'M20 17H4',
  d5: 'M12 3V2',
  d6: 'M18 9H19',
  d7: 'M5 9H6',
  d8: 'M16.2422 4.7574L16.9493 4.05029',
  d9: 'M7.0498 4.05029L7.75691 4.7574',
  d10: 'M4.00391 17L4.96589 14.5144C5.45526 13.2966 5.69994 12.6877 6.21018 12.3439C6.72041 12 7.37924 12 8.69689 12H12.0039V17H20.0404C20.9066 19.1656 21.3034 20.3017 20.746 21.1213C20.1483 22 18.8038 22 16.1146 22H12.0039V17H4.00391Z',
  d11: 'M15.308 12H8.69396C7.37631 12 6.71748 12 6.20725 12.3439C5.69701 12.6877 5.45233 13.2966 4.96296 14.5144L4.15928 16.5144C3.16055 18.9998 2.66119 20.2425 3.25886 21.1213C3.85654 22 5.20112 22 7.89028 22H16.1117C18.8009 22 20.1454 22 20.7431 21.1213C21.3408 20.2425 20.8414 18.9998 19.8427 16.5144L19.039 14.5144C18.5497 13.2966 18.305 12.6877 17.7947 12.3439C17.2845 12 16.6257 12 15.308 12Z',
  d12: 'M12.0039 6C10.347 6 9.00391 7.34315 9.00391 9H15.0039C15.0039 7.34315 13.6608 6 12.0039 6Z',
  d13: 'M9.00391 9C9.00391 7.34315 10.347 6 12.0039 6C13.6608 6 15.0039 7.34315 15.0039 9',
  d14: 'M12.0039 12V22',
  d15: 'M20.0039 17H4.00391',
  d16: 'M12.0039 3V2',
  d17: 'M18.0039 9H19.0039',
  d18: 'M5.00391 9H6.00391',
  d19: 'M16.2461 4.7574L16.9532 4.05029',
  d20: 'M7.05371 4.05029L7.76082 4.7574',
  d21: 'M12 12V22M20 17H4',
  d22: 'M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H9C8.58579 9.75 8.25 9.41421 8.25 9Z',
  d23: 'M11.25 11.25H8.65328H8.65325H8.65322C8.02813 11.25 7.49935 11.25 7.06518 11.2974C6.60364 11.3479 6.17917 11.4576 5.78696 11.7219C5.39449 11.9864 5.13397 12.3386 4.91502 12.7473C4.70928 13.1313 4.51276 13.6204 4.28073 14.1979L4.28073 14.1979L4.28072 14.1979L3.45611 16.25H11.25V11.25ZM2.86435 17.75C2.65289 18.3108 2.48471 18.8077 2.37987 19.2458C2.18524 20.0591 2.16379 20.8465 2.63757 21.5431C3.11067 22.2386 3.85088 22.5103 4.68001 22.6322C5.48165 22.7501 6.53523 22.75 7.82681 22.75H7.82684H11.25V17.75H2.86435ZM12.75 22.75H16.1728H16.1729C17.4644 22.75 18.518 22.7501 19.3197 22.6322C20.1488 22.5103 20.889 22.2386 21.3621 21.5431C21.8359 20.8465 21.8144 20.0591 21.6198 19.2458C21.515 18.8077 21.3468 18.3108 21.1353 17.75H12.75V22.75ZM20.5436 16.25L19.7189 14.1979L19.7189 14.1978L19.7189 14.1977C19.4869 13.6203 19.2904 13.1313 19.0847 12.7473C18.8657 12.3386 18.6052 11.9864 18.2127 11.7219C17.8205 11.4576 17.396 11.3479 16.9345 11.2974C16.5003 11.25 15.9716 11.25 15.3465 11.25H15.3464H15.3464H12.75V16.25H20.5436Z',
  d24: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d25: 'M17.25 9C17.25 8.58579 17.5858 8.25 18 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H18C17.5858 9.75 17.25 9.41421 17.25 9Z',
  d26: 'M4.25 9C4.25 8.58579 4.58579 8.25 5 8.25H6C6.41421 8.25 6.75 8.58579 6.75 9C6.75 9.41421 6.41421 9.75 6 9.75H5C4.58579 9.75 4.25 9.41421 4.25 9Z',
  d27: 'M17.4796 3.51996C17.7725 3.81286 17.7725 4.28773 17.4796 4.58062L16.7725 5.28773C16.4796 5.58062 16.0048 5.58062 15.7119 5.28773C15.419 4.99484 15.419 4.51996 15.7119 4.22707L16.419 3.51996C16.7119 3.22707 17.1867 3.22707 17.4796 3.51996Z',
  d28: 'M6.51947 3.51996C6.81237 3.22707 7.28724 3.22707 7.58013 3.51996L8.28724 4.22707C8.58013 4.51996 8.58013 4.99484 8.28724 5.28773C7.99435 5.58062 7.51947 5.58062 7.22658 5.28773L6.51947 4.58062C6.22658 4.28773 6.22658 3.81286 6.51947 3.51996Z',
  d29: 'M15.3464 11.25C15.9715 11.25 16.5003 11.25 16.9345 11.2974C17.396 11.3479 17.8205 11.4576 18.2127 11.7219C18.6052 11.9864 18.8657 12.3386 19.0847 12.7473C19.2904 13.1313 19.4869 13.6204 19.7189 14.1978L19.7189 14.1979L20.5609 16.293C21.0403 17.4862 21.4319 18.4604 21.6198 19.2458C21.8144 20.0591 21.8359 20.8465 21.3621 21.5431C20.889 22.2386 20.1488 22.5103 19.3197 22.6322C18.518 22.7501 17.4644 22.75 16.1729 22.75H16.1728H7.82684H7.82681C6.53523 22.75 5.48165 22.7501 4.68001 22.6322C3.85088 22.5103 3.11067 22.2386 2.63757 21.5431C2.16379 20.8465 2.18524 20.0591 2.37987 19.2458C2.56781 18.4604 2.95934 17.4862 3.43883 16.293L4.28072 14.1979L4.28073 14.1979C4.51276 13.6204 4.70928 13.1313 4.91502 12.7473C5.13397 12.3386 5.39449 11.9864 5.78696 11.7219C6.17917 11.4576 6.60364 11.3479 7.06518 11.2974C7.49936 11.25 8.02814 11.25 8.65325 11.25H8.65328H15.3464H15.3464Z',
  d30: 'M3.45602 16.25H11.2499V11.25H12.7499V16.25H20.5435L20.5608 16.293C20.7728 16.8206 20.9676 17.3054 21.1352 17.75H12.7499V22.75H11.2499V17.75H2.86426C3.03189 17.3054 3.22671 16.8206 3.43874 16.293L3.45602 16.25Z',
  d31: 'M17.9996 12H5.99956L3 22H20.9996L17.9996 12Z',
  d32: 'M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9V9.75H8.25V9Z',
  d33: 'M11.25 11.25V16.25H3.94174L5.28119 11.7845C5.37635 11.4673 5.66835 11.25 5.99957 11.25H11.25Z',
  d34: 'M12.75 11.25V16.25H20.0576L18.7179 11.7845C18.6228 11.4673 18.3308 11.25 17.9996 11.25H12.75Z',
  d35: 'M20.5076 17.75H12.75V22.75H20.9996C21.2367 22.75 21.4598 22.6379 21.6013 22.4477C21.7428 22.2575 21.7861 22.0116 21.7179 21.7845L20.5076 17.75Z',
  d36: 'M11.25 22.75V17.75H3.49181L2.28163 21.7845C2.21351 22.0116 2.25677 22.2575 2.3983 22.4477C2.53982 22.6379 2.76293 22.75 3.00001 22.75H11.25Z',
  d37: 'M12.75 1.25V3.75H11.25V1.25H12.75Z',
  d38: 'M17.25 8.25H19.75V9.75H17.25V8.25Z',
  d39: 'M4.25 8.25H6.75V9.75H4.25V8.25Z',
  d40: 'M18.0101 4.05041L16.2423 5.81817L15.1816 4.75751L16.9494 2.98975L18.0101 4.05041Z',
  d41: 'M7.04992 2.98962L8.81768 4.75739L7.75702 5.81805L5.98926 4.05028L7.04992 2.98962Z',
} as const;

export const IconSolarPanel03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-stroke-rounded IconSolarPanel03StrokeRounded"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-duotone-rounded IconSolarPanel03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-twotone-rounded IconSolarPanel03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d21} 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-solid-rounded IconSolarPanel03SolidRounded"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
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

export const IconSolarPanel03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-bulk-rounded IconSolarPanel03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
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

export const IconSolarPanel03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-stroke-sharp IconSolarPanel03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-03-solid-sharp IconSolarPanel03SolidSharp"
    >
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d40} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d41} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPanel03: TheIconSelfPack = {
  name: 'SolarPanel03',
  StrokeRounded: IconSolarPanel03StrokeRounded,
  DuotoneRounded: IconSolarPanel03DuotoneRounded,
  TwotoneRounded: IconSolarPanel03TwotoneRounded,
  SolidRounded: IconSolarPanel03SolidRounded,
  BulkRounded: IconSolarPanel03BulkRounded,
  StrokeSharp: IconSolarPanel03StrokeSharp,
  SolidSharp: IconSolarPanel03SolidSharp,
};