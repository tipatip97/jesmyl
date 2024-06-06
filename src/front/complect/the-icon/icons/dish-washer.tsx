import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 6C2 2.69067 2.69067 2 6 2H18C21.3093 2 22 2.69067 22 6V18C22 21.3093 21.3093 22 18 22H6C2.69067 22 2 21.3093 2 18V6Z',
  d2: 'M2 8H22',
  d3: 'M5 5H9',
  d4: 'M19 5.00895V5',
  d5: 'M9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18Z',
  d6: 'M15.0029 17.9979V15.5535M15.0029 15.5535V11.9937C15.6727 12.0769 16.4389 12.3946 16.7877 12.7372C17.1365 13.0798 17.1462 13.5189 17.2682 14.0652C17.3941 14.6294 17.5152 15.1606 17.494 15.2482C17.4679 15.8382 15.0948 15.5575 15.0029 15.5535Z',
  d7: 'M2 8V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V8H2ZM12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15ZM17.0982 13.2736L17.4871 15.0836C17.6 15.6095 16.96 15.6131 16.0817 15.6149C15.4933 15.6161 15.1991 15.6167 15 15.6667V12C16.1462 12.2139 16.9617 12.6378 17.0982 13.2736Z',
  d8: 'M15.0029 18.0003V15.5559M15.0029 15.5559V11.9961C15.6727 12.0793 16.4389 12.397 16.7877 12.7396C17.1365 13.0822 17.1462 13.5213 17.2682 14.0676C17.3941 14.6318 17.5152 15.163 17.494 15.2506C17.4679 15.8406 15.0948 15.5599 15.0029 15.5559Z',
  d9: 'M15.0029 18.0042V15.5598M15.0029 15.5598V12C15.6727 12.0832 16.4389 12.4009 16.7877 12.7435C17.1365 13.0861 17.1462 13.5252 17.2682 14.0715C17.3941 14.6357 17.5152 15.1669 17.494 15.2545C17.4679 15.8445 15.0948 15.5638 15.0029 15.5598Z',
  d10: 'M6 1.25C5.15644 1.25 4.42823 1.29303 3.81795 1.42709C3.19918 1.56303 2.65477 1.80257 2.22867 2.22867C1.80257 2.65476 1.56303 3.19918 1.42709 3.81795C1.29303 4.42823 1.25 5.15644 1.25 6V6.65C1.25 6.93284 1.25 7.07426 1.33787 7.16213C1.42574 7.25 1.56716 7.25 1.85 7.25H22.15C22.4328 7.25 22.5743 7.25 22.6621 7.16213C22.75 7.07426 22.75 6.93284 22.75 6.65V6C22.75 5.15644 22.707 4.42823 22.5729 3.81795C22.437 3.19918 22.1974 2.65477 21.7713 2.22867C21.3452 1.80257 20.8008 1.56303 20.182 1.42709C19.5718 1.29303 18.8436 1.25 18 1.25H6ZM22.75 9.35C22.75 9.06716 22.75 8.92574 22.6621 8.83787C22.5743 8.75 22.4328 8.75 22.15 8.75H1.85C1.56716 8.75 1.42574 8.75 1.33787 8.83787C1.25 8.92574 1.25 9.06716 1.25 9.35V18C1.25 18.8436 1.29303 19.5718 1.42709 20.182C1.56303 20.8008 1.80257 21.3452 2.22867 21.7713C2.65477 22.1974 3.19918 22.437 3.81795 22.5729C4.42823 22.707 5.15644 22.75 6 22.75H18C18.8436 22.75 19.5718 22.707 20.182 22.5729C20.8008 22.437 21.3452 22.1974 21.7713 21.7713C22.1974 21.3452 22.437 20.8008 22.5729 20.182C22.707 19.5718 22.75 18.8436 22.75 18V9.35ZM4.125 4.24609C4.125 3.83188 4.46079 3.49609 4.875 3.49609H8.875C9.28921 3.49609 9.625 3.83188 9.625 4.24609C9.625 4.66031 9.28921 4.99609 8.875 4.99609H4.875C4.46079 4.99609 4.125 4.66031 4.125 4.24609ZM19.875 4.24609C19.875 3.69381 19.4273 3.24609 18.875 3.24609C18.3227 3.24609 17.875 3.69381 17.875 4.24609V4.25504C17.875 4.80733 18.3227 5.25504 18.875 5.25504C19.4273 5.25504 19.875 4.80733 19.875 4.25504V4.24609ZM9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15C11.25 13.7574 10.2426 12.75 9 12.75ZM5.25 15C5.25 12.9289 6.92893 11.25 9 11.25C11.0711 11.25 12.75 12.9289 12.75 15C12.75 17.0711 11.0711 18.75 9 18.75C6.92893 18.75 5.25 17.0711 5.25 15ZM15.1378 11.2627C14.9185 11.2218 14.6925 11.2806 14.521 11.4231C14.3494 11.5656 14.2502 11.777 14.2502 12V15.6498C14.2499 15.6607 14.2499 15.6715 14.2502 15.6824V18C14.2502 18.4142 14.586 18.75 15.0002 18.75C15.4144 18.75 15.7502 18.4142 15.7502 18V16.366C15.8465 16.3654 15.9564 16.3651 16.0834 16.3649L16.1423 16.3648C16.5277 16.3642 16.9934 16.3636 17.346 16.2714C17.5391 16.2209 17.8247 16.1136 18.0307 15.8489C18.2626 15.5509 18.2806 15.2059 18.2205 14.9261L17.8317 13.1161C17.7022 12.5133 17.2683 12.1002 16.8054 11.8306C16.3394 11.5591 15.7571 11.3783 15.1378 11.2627Z',
  d11: 'M9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15C11.25 13.7574 10.2426 12.75 9 12.75Z',
  d12: 'M22.75 9.35C22.75 9.06716 22.75 8.92574 22.6621 8.83787C22.5743 8.75 22.4328 8.75 22.15 8.75H1.85C1.56716 8.75 1.42574 8.75 1.33787 8.83787C1.25 8.92574 1.25 9.06716 1.25 9.35V18C1.25 18.8436 1.29303 19.5718 1.42709 20.182C1.56303 20.8008 1.80257 21.3452 2.22867 21.7713C2.65477 22.1974 3.19918 22.437 3.81795 22.5729C4.42823 22.707 5.15644 22.75 6 22.75H18C18.8436 22.75 19.5718 22.707 20.182 22.5729C20.8008 22.437 21.3452 22.1974 21.7713 21.7713C22.1974 21.3452 22.437 20.8008 22.5729 20.182C22.707 19.5718 22.75 18.8436 22.75 18V9.35ZM5.25 15C5.25 12.9289 6.92893 11.25 9 11.25C11.0711 11.25 12.75 12.9289 12.75 15C12.75 17.0711 11.0711 18.75 9 18.75C6.92893 18.75 5.25 17.0711 5.25 15ZM15.1378 11.2627C14.9185 11.2218 14.6925 11.2806 14.521 11.4231C14.3494 11.5656 14.2502 11.777 14.2502 12V15.6498C14.2499 15.6607 14.2499 15.6715 14.2502 15.6824V18C14.2502 18.4142 14.586 18.75 15.0002 18.75C15.4144 18.75 15.7502 18.4142 15.7502 18V16.366C15.8465 16.3654 15.9564 16.3651 16.0834 16.3649L16.1423 16.3648C16.5277 16.3642 16.9934 16.3636 17.346 16.2714C17.5391 16.2209 17.8247 16.1136 18.0307 15.8489C18.2626 15.5509 18.2806 15.2059 18.2205 14.9261L17.8317 13.1161C17.7022 12.5133 17.2683 12.1002 16.8054 11.8306C16.3394 11.5591 15.7571 11.3783 15.1378 11.2627Z',
  d13: 'M15.1378 11.2627C14.9185 11.2218 14.6925 11.2806 14.521 11.4231C14.3494 11.5656 14.2502 11.777 14.2502 12V15.6498C14.2499 15.6607 14.2499 15.6715 14.2502 15.6824V18C14.2502 18.4142 14.586 18.75 15.0002 18.75C15.4144 18.75 15.7502 18.4142 15.7502 18V16.366C15.8465 16.3654 15.9564 16.3651 16.0834 16.3649L16.1423 16.3648C16.5277 16.3642 16.9934 16.3636 17.346 16.2714C17.5391 16.2209 17.8247 16.1136 18.0307 15.8489C18.2626 15.5509 18.2806 15.2059 18.2205 14.9261L17.8317 13.1161C17.7022 12.5133 17.2683 12.1002 16.8054 11.8306C16.3394 11.5591 15.7571 11.3783 15.1378 11.2627Z',
  d14: 'M9 11.25C6.92893 11.25 5.25 12.9289 5.25 15C5.25 17.0711 6.92893 18.75 9 18.75C11.0711 18.75 12.75 17.0711 12.75 15C12.75 12.9289 11.0711 11.25 9 11.25ZM9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15C11.25 13.7574 10.2426 12.75 9 12.75Z',
  d15: 'M6 1.25C5.15644 1.25 4.42823 1.29303 3.81795 1.42709C3.19918 1.56303 2.65477 1.80257 2.22867 2.22867C1.80257 2.65476 1.56303 3.19918 1.42709 3.81795C1.29303 4.42823 1.25 5.15644 1.25 6V6.65C1.25 6.93284 1.25 7.07426 1.33787 7.16213C1.42574 7.25 1.56716 7.25 1.85 7.25H22.15C22.4328 7.25 22.5743 7.25 22.6621 7.16213C22.75 7.07426 22.75 6.93284 22.75 6.65V6C22.75 5.15644 22.707 4.42823 22.5729 3.81795C22.437 3.19918 22.1974 2.65477 21.7713 2.22867C21.3452 1.80257 20.8008 1.56303 20.182 1.42709C19.5718 1.29303 18.8436 1.25 18 1.25H6ZM4.125 4.24561C4.125 3.83139 4.46079 3.49561 4.875 3.49561H8.875C9.28921 3.49561 9.625 3.83139 9.625 4.24561C9.625 4.65982 9.28921 4.99561 8.875 4.99561H4.875C4.46079 4.99561 4.125 4.65982 4.125 4.24561ZM19.875 4.24561C19.875 3.69332 19.4273 3.24561 18.875 3.24561C18.3227 3.24561 17.875 3.69332 17.875 4.24561V4.25455C17.875 4.80684 18.3227 5.25455 18.875 5.25455C19.4273 5.25455 19.875 4.80684 19.875 4.25455V4.24561Z',
  d16: 'M21 3H3V21H21V3Z',
  d17: 'M3 9H21',
  d18: 'M6 6H10',
  d19: 'M17 6.00883V5.99988',
  d20: 'M15.0088 18.7565L15.0094 15.5M15.0094 15.5V12.0997C15.0094 12.0386 15.0632 11.9917 15.1233 12.0025C15.5481 12.079 16.3451 12.291 16.8497 12.8032C17.0257 12.9819 17.1067 13.2274 17.1504 13.4743L17.4885 15.3825C17.4993 15.4438 17.4522 15.5 17.39 15.5H15.0094Z',
  d21: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM10 5.99561H6V4.49561H10V5.99561ZM17.75 6.00455V4.49561H16.25V6.00455H17.75Z',
  d22: 'M21.75 9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V9.75ZM9.25 13.5C8.00736 13.5 7 14.5074 7 15.75C7 16.9926 8.00736 18 9.25 18C10.4926 18 11.5 16.9926 11.5 15.75C11.5 14.5074 10.4926 13.5 9.25 13.5ZM5.5 15.75C5.5 13.6789 7.17893 12 9.25 12C11.3211 12 13 13.6789 13 15.75C13 17.8211 11.3211 19.5 9.25 19.5C7.17893 19.5 5.5 17.8211 5.5 15.75ZM15.3876 12.0127C15.1684 11.9718 14.9423 12.0306 14.7708 12.1731C14.5992 12.3156 14.5 12.527 14.5 12.75V19.5H16L16 17H17.75C17.9722 17 18.183 16.9015 18.3255 16.7309C18.468 16.5604 18.5275 16.3355 18.4881 16.1168L18.0863 13.8904C18.0848 13.8823 18.0832 13.8742 18.0815 13.8661C17.952 13.2633 17.5181 12.8502 17.0553 12.5806C16.5893 12.3091 16.0069 12.1283 15.3876 12.0127Z',
};

export const IconDishWasherStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-stroke-rounded IconDishWasherStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconDishWasherDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-duotone-rounded IconDishWasherDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDishWasherTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-twotone-rounded IconDishWasherTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDishWasherSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-solid-rounded IconDishWasherSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDishWasherBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-bulk-rounded IconDishWasherBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconDishWasherStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-stroke-sharp IconDishWasherStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDishWasherSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-washer-solid-sharp IconDishWasherSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDishWasher: TheIconSelfPack = {
  name: 'DishWasher',
  StrokeRounded: IconDishWasherStrokeRounded,
  DuotoneRounded: IconDishWasherDuotoneRounded,
  TwotoneRounded: IconDishWasherTwotoneRounded,
  SolidRounded: IconDishWasherSolidRounded,
  BulkRounded: IconDishWasherBulkRounded,
  StrokeSharp: IconDishWasherStrokeSharp,
  SolidSharp: IconDishWasherSolidSharp,
};