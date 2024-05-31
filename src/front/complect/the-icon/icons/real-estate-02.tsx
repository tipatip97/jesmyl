import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 22V7.4849C21 6.38738 21 5.83862 20.6845 5.37551C20.3689 4.9124 19.7876 4.608 18.6251 3.99921L17.1459 3.22461C15.3209 2.26893 14.4084 1.7911 13.7042 2.08712C13 2.38315 13 3.24459 13 4.96746V9',
  d2: 'M22 22H2',
  d3: 'M21 8H19M21 11H19M21 14H19',
  d4: 'M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z',
  d5: 'M11.5 13H12.5M11.5 16H12.5',
  d6: 'M3.5 16V22',
  d7: 'M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9V9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z',
  d8: 'M22 21.998H2',
  d9: 'M7.99316 12.9927C7.99316 11.1241 7.99316 10.1898 8.57832 9.60931C9.16347 9.02881 10.1053 9.02881 11.9889 9.02881C13.8724 9.02881 14.8142 9.02881 15.3994 9.60931C15.9845 10.1898 15.9845 11.1241 15.9845 12.9927V21.9115H7.99316V12.9927Z',
  d10: 'M11.4902 13.0405H12.4884M11.4902 16.0264H12.4884',
  d11: 'M3.49838 15.9659C4.32592 15.9659 4.99677 15.0785 4.99677 13.9839C4.99677 12.8893 4.32592 12.002 3.49838 12.002C2.67085 12.002 2 12.8893 2 13.9839C2 15.0785 2.67085 15.9659 3.49838 15.9659Z',
  d12: 'M3.49805 15.9658V21.9117',
  d13: 'M13.026 8.76589C13.026 6.45001 12.9479 5.12516 13.1153 2.89544C13.1661 2.21969 13.8826 1.81167 14.5045 2.09199L16.9281 3.18445L19.6901 4.60463C20.4708 5.00604 20.9707 5.78383 20.981 6.65609C20.9951 7.84485 21.0013 9.95262 20.9657 13.5659C21.0416 16.9232 20.9489 21.8833 20.9489 21.8833M18.9768 8.03341H20.9908M18.9416 11.0259H20.9857M18.9401 13.9965H20.9744',
  d14: 'M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z',
  d15: 'M12.3332 8.41441C12.25 8.32743 12.25 8.18914 12.25 7.91255L12.25 4.89583C12.2499 4.0961 12.2498 3.39101 12.351 2.85361C12.4642 2.25205 12.7398 1.67906 13.4136 1.39583C14.0322 1.13577 14.6638 1.26014 15.2656 1.48341C15.855 1.70206 16.5743 2.07878 17.4468 2.53571L19.0016 3.34985C19.5586 3.64153 20.0181 3.88217 20.3751 4.10937C20.7458 4.3453 21.0652 4.60236 21.3043 4.95331C21.5501 5.31412 21.6566 5.69354 21.7053 6.104C21.7252 6.27155 21.7363 6.4535 21.7424 6.64918C21.7511 6.92811 21.7555 7.06757 21.6671 7.15879C21.5787 7.25 21.4355 7.25 21.1491 7.25H20C19.5858 7.25 19.25 7.58579 19.25 8C19.25 8.41421 19.5858 8.75 20 8.75H21.15C21.4329 8.75 21.5743 8.75 21.6621 8.83787C21.75 8.92573 21.75 9.06716 21.75 9.35V9.65C21.75 9.93284 21.75 10.0743 21.6621 10.1621C21.5743 10.25 21.4329 10.25 21.15 10.25H20C19.5858 10.25 19.25 10.5858 19.25 11C19.25 11.4142 19.5858 11.75 20 11.75H21.15C21.4329 11.75 21.5743 11.75 21.6621 11.8379C21.75 11.9257 21.75 12.0672 21.75 12.35V12.65C21.75 12.9328 21.75 13.0743 21.6621 13.1621C21.5743 13.25 21.4329 13.25 21.15 13.25H20C19.5858 13.25 19.25 13.5858 19.25 14C19.25 14.4142 19.5858 14.75 20 14.75H21.15C21.4329 14.75 21.5743 14.75 21.6621 14.8379C21.75 14.9257 21.75 15.0672 21.75 15.35L21.75 22.0001C21.75 22.4143 21.4142 22.7501 21 22.7501L17.1 22.75C16.8172 22.75 16.6757 22.75 16.5879 22.6621C16.5 22.5743 16.5 22.4329 16.5 22.15L16.5 13.6717C16.5001 12.7961 16.5002 12.0175 16.4156 11.3889C16.3238 10.7057 16.112 10.0158 15.5481 9.45191C14.9843 8.88806 14.2944 8.67624 13.6111 8.58438C13.3748 8.5526 13.1172 8.53278 12.8413 8.52043C12.558 8.50774 12.4164 8.50139 12.3332 8.41441Z',
  d16: 'M7.83579 10.3358C7.25 10.9216 7.25 11.8644 7.25 13.75L7.25 22.75H15.25L15.25 13.75C15.25 11.8644 15.25 10.9216 14.6642 10.3358C14.0784 9.75 13.1356 9.75 11.25 9.75C9.36438 9.75 8.42157 9.75 7.83579 10.3358ZM10.75 12.25C10.3358 12.25 10 12.5858 10 13C10 13.4142 10.3358 13.75 10.75 13.75H11.75C12.1642 13.75 12.5 13.4142 12.5 13C12.5 12.5858 12.1642 12.25 11.75 12.25H10.75ZM10.75 15.25C10.3358 15.25 10 15.5858 10 16C10 16.4142 10.3358 16.75 10.75 16.75H11.75C12.1642 16.75 12.5 16.4142 12.5 16C12.5 15.5858 12.1642 15.25 11.75 15.25H10.75Z',
  d17: 'M1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.92761 16.1749 4.61799 16.4392 4.25 16.5962V22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V16.5962C2.38201 16.4392 2.07239 16.1749 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358Z',
  d18: 'M3.5 15.25C3.91421 15.25 4.25 15.5858 4.25 16V22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V16C2.75 15.5858 3.08579 15.25 3.5 15.25Z',
  d19: 'M1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.78266 16.3682 4.20321 16.75 3.5 16.75C2.79679 16.75 2.21734 16.3682 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358Z',
  d20: 'M7.25 13.75C7.25 11.8644 7.25 10.9216 7.83579 10.3358C8.42157 9.75 9.36438 9.75 11.25 9.75C13.1356 9.75 14.0784 9.75 14.6642 10.3358C15.25 10.9216 15.25 11.8644 15.25 13.75V22.75H7.25V13.75Z',
  d21: 'M10 13C10 12.5858 10.3358 12.25 10.75 12.25H11.75C12.1642 12.25 12.5 12.5858 12.5 13C12.5 13.4142 12.1642 13.75 11.75 13.75H10.75C10.3358 13.75 10 13.4142 10 13ZM10 16C10 15.5858 10.3358 15.25 10.75 15.25H11.75C12.1642 15.25 12.5 15.5858 12.5 16C12.5 16.4142 12.1642 16.75 11.75 16.75H10.75C10.3358 16.75 10 16.4142 10 16Z',
  d22: 'M23 22H1',
  d23: 'M21 7.95215H18M21 10.915H18M21 13.8778H18',
  d24: 'M8 8.93994H16V21.7788H8V8.93994Z',
  d25: 'M10.5 12.8901H13.5M10.5 15.853H13.5',
  d26: 'M3.5 15.8533C4.32843 15.8533 5 14.9689 5 13.878C5 12.7872 4.32843 11.9028 3.5 11.9028C2.67157 11.9028 2 12.7872 2 13.878C2 14.9689 2.67157 15.8533 3.5 15.8533Z',
  d27: 'M3.5 15.853V21.7787',
  d28: 'M13.0264 8.62528V2.01442C13.0264 2.00744 13.0333 2.00261 13.0399 2.00505L20.974 4.97345V21.2767',
  d29: 'M1 21.25H23V22.75H1V21.25Z',
  d30: 'M12.25 7.25H16.75V22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V14.75H20V13.25H21.75V11.75H20V10.25H21.75V8.75H20V7.25H21.75V4.48025L13.2633 1.29776C13.033 1.21139 12.775 1.24345 12.5728 1.38356C12.3706 1.52367 12.25 1.75402 12.25 2V7.25Z',
  d31: 'M8 8.25C7.58579 8.25 7.25 8.58579 7.25 9L7.25 22C7.25 22.4142 7.58579 22.75 8 22.75H15C15.4142 22.75 15.75 22.4142 15.75 22L15.75 9C15.75 8.58579 15.4142 8.25 15 8.25L8 8.25ZM10 13.75H13V12.25H10L10 13.75ZM10 16.75H13V15.25H10V16.75Z',
  d32: 'M2.75 16.5962V22H4.25V16.5962C4.61799 16.4392 4.92761 16.1749 5.16066 15.8642C5.53849 15.3604 5.75 14.6989 5.75 14C5.75 13.3011 5.53849 12.6396 5.16066 12.1358C4.78266 11.6318 4.20321 11.25 3.5 11.25C2.79679 11.25 2.21734 11.6318 1.83934 12.1358C1.46151 12.6396 1.25 13.3011 1.25 14C1.25 14.6989 1.46151 15.3604 1.83934 15.8642C2.07239 16.1749 2.38201 16.4392 2.75 16.5962Z',
} as const;

export const IconRealEstate02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-stroke-rounded IconRealEstate02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <ellipse 
        cx="3.5" 
        cy="14" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-duotone-rounded IconRealEstate02DuotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <ellipse 
        cx="3.5" 
        cy="14" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-twotone-rounded IconRealEstate02TwotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-solid-rounded IconRealEstate02SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconRealEstate02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-bulk-rounded IconRealEstate02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-stroke-sharp IconRealEstate02StrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRealEstate02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="real-estate-02-solid-sharp IconRealEstate02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRealEstate02: TheIconSelfPack = {
  name: 'RealEstate02',
  StrokeRounded: IconRealEstate02StrokeRounded,
  DuotoneRounded: IconRealEstate02DuotoneRounded,
  TwotoneRounded: IconRealEstate02TwotoneRounded,
  SolidRounded: IconRealEstate02SolidRounded,
  BulkRounded: IconRealEstate02BulkRounded,
  StrokeSharp: IconRealEstate02StrokeSharp,
  SolidSharp: IconRealEstate02SolidSharp,
};