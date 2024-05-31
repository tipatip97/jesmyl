import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.6801 12.9866C7.01748 9.62725 6.68617 7.9476 7.40306 6.58098C8.11994 5.21437 9.66067 4.58848 12.7421 3.3367L13.37 3.08163C15.698 2.13592 16.862 1.66307 17.5646 2.27374C18.2671 2.88442 18.0196 4.15398 17.5247 6.69309L15.3206 18H8.66899L7.6801 12.9866Z',
  d2: 'M6 21C6 19.5858 6 18.8787 6.43934 18.4393C6.87868 18 7.58579 18 9 18H15C16.4142 18 17.1213 18 17.5607 18.4393C18 18.8787 18 19.5858 18 21V22H6V21Z',
  d3: 'M4 22L20 22',
  d4: 'M6 21C6 19.5858 6 18.8787 6.43934 18.4393C6.87868 18 7.58579 18 9 18H15C16.4142 18 17.1213 18 17.5607 18.4393C18 18.8787 18 19.5858 18 21V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V21Z',
  d5: 'M15.9025 1.36423C16.6463 1.18647 17.4257 1.1589 18.0566 1.70734C18.677 2.24665 18.7819 3.02219 18.7427 3.79773C18.7041 4.56251 18.5101 5.55749 18.2727 6.77508L18.2727 6.77511L16.0568 18.1431C15.9881 18.4954 15.6795 18.7496 15.3206 18.7496H8.66899C8.31073 18.7496 8.0025 18.4963 7.93317 18.1448L6.93472 13.0829C6.6115 11.4443 6.3558 10.1481 6.27637 9.09242C6.19471 8.00712 6.29026 7.08744 6.73889 6.23222C7.18892 5.37432 7.88701 4.78556 8.81816 4.26175C9.71974 3.75457 10.9119 3.27031 12.412 2.66092L12.412 2.66092L13.1487 2.36164C14.2608 1.90984 15.177 1.53764 15.9025 1.36423Z',
  d6: 'M8.9384 17C8.28428 16.9999 7.69656 16.9999 7.22085 17.0638C6.70149 17.1337 6.16868 17.2958 5.73224 17.7322C5.2958 18.1687 5.13367 18.7015 5.06384 19.2209C5.00609 19.6504 5.00053 20.1713 5.00004 20.75H4.44444C3.92284 20.75 3.5 21.1977 3.5 21.75C3.5 22.3023 3.92284 22.75 4.44444 22.75L19.5556 22.75C20.0772 22.75 20.5 22.3023 20.5 21.75C20.5 21.1977 20.0772 20.75 19.5556 20.75H19C18.9995 20.1713 18.9939 19.6504 18.9362 19.2209C18.8663 18.7015 18.7042 18.1687 18.2678 17.7322C17.8313 17.2958 17.2985 17.1337 16.7792 17.0638C16.3035 16.9999 15.7157 16.9999 15.0616 17H8.9384ZM16.9999 20.75C16.9989 20.1594 16.9927 19.775 16.954 19.4873C16.9154 19.2005 16.8606 19.1526 16.8541 19.1469L16.8531 19.1459C16.8474 19.1394 16.7995 19.0846 16.5127 19.046C16.1863 19.0021 15.7354 19 15 19H9.00001C8.26463 19 7.8137 19.0021 7.48735 19.046C7.2005 19.0846 7.15261 19.1394 7.14692 19.1459L7.14593 19.1469C7.13942 19.1526 7.08457 19.2005 7.04601 19.4873C7.00734 19.775 7.0011 20.1594 7.00016 20.75L16.9999 20.75Z',
  d7: 'M18 22V18H6V22',
  d8: 'M4 22H20',
  d9: 'M18.3713 2.00417L6.5 5.48426L8.60879 17.9167C8.61695 17.9648 8.65874 18 8.70768 18H15.2851C15.3331 18 15.3743 17.9662 15.3835 17.9193L18.4981 2.11933C18.5126 2.04571 18.4436 1.983 18.3713 2.00417Z',
  d10: 'M6.5 16.75C5.94772 16.75 5.5 17.1977 5.5 17.75V20.75H4V22.75L20 22.75V20.75H18.5V17.75C18.5 17.1977 18.0523 16.75 17.5 16.75H6.5ZM16.5 20.75V18.75H7.5V20.75L16.5 20.75Z',
  d11: 'M19.0066 1.44697C19.1999 1.62402 19.2867 1.88913 19.2356 2.14622L16.0556 18.1462C15.9859 18.4972 15.6779 18.75 15.32 18.75H8.66837C8.30361 18.75 7.99175 18.4876 7.9294 18.1282L5.64648 4.96771L18.29 1.28001C18.5417 1.20662 18.8133 1.26992 19.0066 1.44697Z',
} as const;

export const IconAward03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-stroke-rounded IconAward03StrokeRounded"
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

export const IconAward03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-duotone-rounded IconAward03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        d={d.d4} 
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

export const IconAward03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-twotone-rounded IconAward03TwotoneRounded"
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
        d={d.d4} 
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

export const IconAward03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-solid-rounded IconAward03SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-bulk-rounded IconAward03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-stroke-sharp IconAward03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-03-solid-sharp IconAward03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAward03: TheIconSelfPack = {
  name: 'Award03',
  StrokeRounded: IconAward03StrokeRounded,
  DuotoneRounded: IconAward03DuotoneRounded,
  TwotoneRounded: IconAward03TwotoneRounded,
  SolidRounded: IconAward03SolidRounded,
  BulkRounded: IconAward03BulkRounded,
  StrokeSharp: IconAward03StrokeSharp,
  SolidSharp: IconAward03SolidSharp,
};