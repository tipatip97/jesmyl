import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 18.5C14 15.8333 15.9 10 21.5 10M10 18.5C10 15.8333 8.1 10 2.5 10',
  d2: 'M10.5 8H13.5',
  d3: 'M2 8V9.56091C2 9.86218 2.0252 10.134 2.10806 10.4238C2.93715 13.3235 5.92032 17.6665 9.52749 18.8626C9.85085 18.9698 10.1521 19 10.4924 19H13.5076C13.8479 19 14.1492 18.9698 14.4725 18.8626C18.0797 17.6665 21.0629 13.3235 21.8919 10.4238C21.9748 10.134 22 9.86218 22 9.56091V8C22 6.58579 22 5.87868 21.5607 5.43934C21.1213 5 20.4142 5 19 5H5C3.58579 5 2.87868 5 2.43934 5.43934C2 5.87868 2 6.58579 2 8Z',
  d4: 'M2 8V9.56091C2 9.85366 2.0238 10.1186 2.10117 10.3992C1.9937 9.95436 2.40663 9.58238 2.86382 9.66995C5.51769 10.1783 9.64126 12.5065 9.99991 18.971C10.1594 18.9923 13.8286 18.9698 14 18.9698C14 11.3467 19.3178 9.81284 21.9766 9.99883L22 8C22 6.58579 22 5.87868 21.5607 5.43934C21.1213 5 20.4142 5 19 5H5C3.58579 5 2.87868 5 2.43934 5.43934C2 5.87868 2 6.58579 2 8Z',
  d5: 'M4.95063 4.25L5.00001 4.25001L19.0494 4.25H19.0494H19.0495C19.7143 4.24997 20.2871 4.24994 20.7458 4.31161C21.2375 4.37771 21.7087 4.52677 22.091 4.90902C22.4732 5.29126 22.6223 5.76252 22.6884 6.25416C22.7501 6.71291 22.75 7.28577 22.75 7.95064V8.65C22.75 8.93284 22.75 9.07426 22.6621 9.16213C22.5743 9.25 22.4328 9.25 22.15 9.25H21.5009C18.3917 9.25 16.3033 10.8876 15.0238 12.8387C13.7632 14.7609 13.2509 17.0308 13.2509 18.5V19.15C13.2509 19.4328 13.2509 19.5743 13.1631 19.6621C13.0752 19.75 12.9338 19.75 12.6509 19.75H11.3509C11.0681 19.75 10.9267 19.75 10.8388 19.6621C10.7509 19.5743 10.7509 19.4328 10.7509 19.15V18.5C10.7509 17.0308 10.2387 14.7609 8.9781 12.8387C7.69857 10.8876 5.61014 9.25 2.50094 9.25H1.85001C1.56716 9.25 1.42574 9.25 1.33787 9.16213C1.25001 9.07426 1.25001 8.93284 1.25001 8.65V8.00001L1.25 7.95063V7.95058V7.95053C1.24997 7.28571 1.24994 6.71288 1.31161 6.25416C1.37771 5.76252 1.52677 5.29126 1.90901 4.90901C2.29126 4.52677 2.76252 4.37771 3.25416 4.31161C3.71288 4.24994 4.28571 4.24997 4.95053 4.25H4.95058H4.95063ZM21.5009 10.75H21.7707C22.1436 10.75 22.33 10.75 22.4194 10.8803C22.5088 11.0107 22.4442 11.178 22.3149 11.5127C21.7883 12.8762 20.9129 14.3951 19.8057 15.7555C18.644 17.1829 17.1805 18.4929 15.5275 19.251C15.1938 19.404 15.0269 19.4805 14.8889 19.392C14.7509 19.3034 14.7509 19.1103 14.7509 18.724V18.5C14.7509 17.3025 15.1887 15.3224 16.2781 13.6613C17.3486 12.029 19.0101 10.75 21.5009 10.75ZM9.25094 18.5V18.7249C9.25094 19.1111 9.25094 19.3042 9.11296 19.3927C8.97499 19.4813 8.80817 19.4048 8.47454 19.2519C6.82071 18.494 5.35649 17.1834 4.1943 15.7555C3.08715 14.3951 2.21167 12.8762 1.68511 11.5127C1.55584 11.178 1.49121 11.0107 1.58059 10.8803C1.66997 10.75 1.8564 10.75 2.22927 10.75H2.50094C4.99173 10.75 6.65331 12.029 7.72377 13.6613C8.81318 15.3224 9.25094 17.3025 9.25094 18.5ZM10.5 7.25C10.0858 7.25 9.75 7.58579 9.75 8C9.75 8.41422 10.0858 8.75 10.5 8.75H13.5C13.9142 8.75 14.25 8.41422 14.25 8C14.25 7.58579 13.9142 7.25 13.5 7.25H10.5Z',
  d6: 'M4.95063 4.25L5 4.25L19.0494 4.25H19.0494C19.7143 4.24996 20.2871 4.24993 20.7458 4.31161C21.2375 4.37771 21.7087 4.52677 22.091 4.90901C22.4732 5.29126 22.6223 5.76252 22.6884 6.25416C22.7501 6.71291 22.75 7.28577 22.75 7.95064V9.56091C22.75 9.90758 22.7208 10.2531 22.613 10.63C22.1661 12.193 21.159 14.0927 19.8057 15.7554C18.4555 17.4144 16.6977 18.9149 14.7086 19.5745C14.2841 19.7152 13.8967 19.75 13.5076 19.75H10.4924C10.1033 19.75 9.71588 19.7152 9.29144 19.5745C7.30228 18.9149 5.54446 17.4144 4.1943 15.7554C2.84104 14.0927 1.83388 12.193 1.38696 10.63C1.27923 10.2531 1.25 9.90758 1.25 9.56091V8L1.25 7.95063V7.95058C1.24996 7.28574 1.24993 6.71289 1.31161 6.25416C1.37771 5.76252 1.52677 5.29126 1.90901 4.90901C2.29126 4.52677 2.76252 4.37771 3.25416 4.31161C3.71289 4.24993 4.28574 4.24996 4.95058 4.25H4.95063Z',
  d7: 'M1.42219 10.75C1.41008 10.7098 1.39834 10.6698 1.38696 10.63C1.27922 10.2531 1.25 9.90758 1.25 9.56091V9.25H2.49898C5.60819 9.25 7.69661 10.8876 8.97614 12.8387C10.2367 14.7609 10.749 17.0308 10.749 18.5V19.75H10.4924C10.1033 19.75 9.71588 19.7152 9.29144 19.5745C9.27728 19.5698 9.26312 19.565 9.24898 19.5602V18.5C9.24898 17.3025 8.81122 15.3224 7.72182 13.6613C6.65135 12.029 4.98978 10.75 2.49898 10.75H1.42219ZM14.749 19.5609C14.7355 19.5655 14.722 19.57 14.7086 19.5745C14.2841 19.7152 13.8967 19.75 13.5076 19.75H13.249V18.5C13.249 17.0308 13.7612 14.7609 15.0218 12.8387C16.3014 10.8876 18.3898 9.25 21.499 9.25H22.75V9.56091C22.75 9.90758 22.7208 10.2531 22.613 10.63C22.6017 10.6698 22.5899 10.7098 22.5778 10.75H21.499C19.0082 10.75 17.3466 12.029 16.2761 13.6613C15.1867 15.3224 14.749 17.3025 14.749 18.5V19.5609Z',
  d8: 'M9.75 8C9.75 7.58579 10.0858 7.25 10.5 7.25H13.5C13.9142 7.25 14.25 7.58579 14.25 8C14.25 8.41421 13.9142 8.75 13.5 8.75H10.5C10.0858 8.75 9.75 8.41421 9.75 8Z',
  d9: 'M13.9985 19.002C13.9985 19.002 13.9985 10.002 21.4985 10.002M9.99854 19.002C9.99854 19.002 9.99854 10.002 2.49854 10.002',
  d10: 'M9.99854 8.00195H13.9985',
  d11: 'M1.99756 4.99892L22.0024 4.99805L22.0025 9.99276C22.0025 9.99498 22.0018 9.99714 22.0004 9.9989L14.9984 18.9942C14.9965 18.9966 14.9936 18.998 14.9905 18.998H8.99646C8.99337 18.998 8.99046 18.9966 8.98856 18.9942L1.99966 10.002C1.9983 10.0003 1.99756 9.99809 1.99756 9.99587V4.99892Z',
  d12: 'M22.75 9.25H21.5C19.4623 9.25 17.889 9.86583 16.6955 10.8206C15.5138 11.766 14.746 13.0096 14.2452 14.2115C13.25 16.6 13.25 18.9695 13.25 19V19.75H10.7491V19C10.7491 18.9695 10.7491 16.6 9.75395 14.2115C9.25315 13.0096 8.48531 11.766 7.3036 10.8206C6.11013 9.86583 4.53687 9.25 2.49914 9.25H1.25V4.25H22.75V9.25ZM22.3668 10.75H21.5C19.7877 10.75 18.5485 11.2592 17.6326 11.9919C16.7049 12.734 16.0665 13.7404 15.6298 14.7885C14.7624 16.8701 14.7502 18.9703 14.75 19V19.75H15C15.2314 19.75 15.4499 19.6431 15.592 19.4605L22.3668 10.75ZM9.24914 19V19.75H9C8.76856 19.75 8.55008 19.6431 8.40799 19.4605L1.63319 10.75H2.49914C4.21141 10.75 5.45065 11.2592 6.36656 11.9919C7.29423 12.734 7.93263 13.7404 8.36933 14.7885C9.2367 16.8701 9.24897 18.9703 9.24914 19ZM9.99609 8.75H13.9961V7.25H9.99609V8.75Z',
} as const;

export const IconUnderpants03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-stroke-rounded IconUnderpants03StrokeRounded"
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

export const IconUnderpants03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-duotone-rounded IconUnderpants03DuotoneRounded"
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

export const IconUnderpants03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-twotone-rounded IconUnderpants03TwotoneRounded"
    >
      <path 
        opacity="0.5" 
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

export const IconUnderpants03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-solid-rounded IconUnderpants03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnderpants03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-bulk-rounded IconUnderpants03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconUnderpants03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-stroke-sharp IconUnderpants03StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnderpants03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="underpants-03-solid-sharp IconUnderpants03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUnderpants03: TheIconSelfPack = {
  name: 'Underpants03',
  StrokeRounded: IconUnderpants03StrokeRounded,
  DuotoneRounded: IconUnderpants03DuotoneRounded,
  TwotoneRounded: IconUnderpants03TwotoneRounded,
  SolidRounded: IconUnderpants03SolidRounded,
  BulkRounded: IconUnderpants03BulkRounded,
  StrokeSharp: IconUnderpants03StrokeSharp,
  SolidSharp: IconUnderpants03SolidSharp,
};