import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 17H15M13.5 7H14.4429C15.7533 7 16.4086 7 16.9641 7.31452C17.5196 7.62904 17.89 8.20972 18.6308 9.37107C19.1502 10.1854 19.6955 10.7765 20.4622 11.3024C21.2341 11.8318 21.6012 12.0906 21.8049 12.506C22 12.9038 22 13.375 22 14.3173C22 15.5596 22 16.1808 21.651 16.5755C21.636 16.5925 21.6207 16.609 21.6049 16.625C21.2375 17 20.6594 17 19.503 17H19',
  d2: 'M13 7L13.9942 9.48556C14.4813 10.7034 14.7249 11.3123 15.2328 11.6561C15.7407 12 16.3965 12 17.7081 12H21',
  d3: 'M4.86957 17C3.51684 17 2.84048 17 2.42024 16.5607C2 16.1213 2 15.4142 2 14V7C2 5.58579 2 4.87868 2.42024 4.43934C2.84048 4 3.51684 4 4.86957 4H10.1304C11.4832 4 12.1595 4 12.5798 4.43934C13 4.87868 13 5.58579 13 7V17H8.69565',
  d4: 'M13 9.67703V7C13 5.58579 13 4.87868 12.5798 4.43934C12.1595 4 11.4832 4 10.1304 4H4.86957C3.51684 4 2.84048 4 2.42024 4.43934C2 4.87868 2 5.58579 2 7V14C2 15.4142 2 16.1213 2.42024 16.5607C2.84048 17 3.51684 17 4.86957 17H5.26756C5.61337 16.4022 6.25972 16 7 16C7.74028 16 8.38663 16.4022 8.73244 17H15.2676C15.6134 16.4022 16.2597 16 17 16C17.7403 16 18.3866 16.4022 18.7324 17H19.503C20.6594 17 21.2375 17 21.6049 16.625C21.6207 16.609 21.636 16.5925 21.651 16.5755C22 16.1808 22 15.5596 22 14.3173C22 13.375 22 12.9038 21.8049 12.506C21.713 12.3185 21.5878 12.1629 21.4071 12H17.7081C16.3965 12 15.7407 12 15.2328 11.6561C14.7249 11.3123 14.4813 10.7034 13.9942 9.48556C13.7834 8.95851 13 9.10938 13 9.67703Z',
  d5: 'M10.181 3.2513C10.814 3.25126 11.3659 3.25122 11.8091 3.31349C13.2775 3.51979 13.6845 4.68933 13.7404 6.00147L14.488 6.00147C15.1048 6.00144 15.6384 6.00142 16.0851 6.04565C16.5658 6.09325 17.0175 6.19706 17.4568 6.44578C17.8927 6.69261 18.2197 7.02742 18.5193 7.41539C18.8017 7.78097 19.1001 8.24874 19.4509 8.79878C19.8723 9.45943 20.3789 10.0341 21.0278 10.4792C21.9334 11.1003 22.6273 12.0226 22.7229 13.1406L22.75 14.358C22.75 14.9411 22.7501 15.4452 22.7009 15.8504C22.5937 16.7347 22.102 17.3294 21.3442 17.5901C21.1091 17.671 20.9915 17.7115 20.8753 17.648C20.7591 17.5845 20.7205 17.4262 20.6431 17.1094C20.2427 15.4693 18.7635 14.252 17 14.252C15.2075 14.252 13.7088 15.5095 13.338 17.1905C13.2759 17.4722 13.2448 17.613 13.1625 17.6791C13.0802 17.7453 12.9527 17.7453 12.6978 17.7453H11.3022C11.0473 17.7453 10.9198 17.7453 10.8375 17.6791C10.7552 17.613 10.7241 17.4722 10.662 17.1905C10.2912 15.5095 8.79246 14.252 7 14.252C5.17594 14.252 3.65606 15.5543 3.31946 17.2799C3.27894 17.4876 3.25868 17.5915 3.18636 17.6376C3.11404 17.6838 3.02695 17.6622 2.85275 17.6191C2.49372 17.5303 2.16245 17.3715 1.87838 17.0747C1.51166 16.6915 1.37115 16.2231 1.30867 15.7375C1.24995 15.2811 1.24997 14.7104 1.25 14.0444V6.95214C1.24997 6.2862 1.24995 5.71547 1.30867 5.25906C1.37115 4.77345 1.51166 4.30511 1.87838 3.9219C2.24954 3.53404 2.71081 3.38093 3.19088 3.31349C3.74503 3.23563 4.31148 3.25128 4.86957 3.2513L10.181 3.2513ZM14.3374 8.08765C14.3965 7.99987 14.5308 7.99924 14.7995 7.99799C15.1632 7.9963 15.5272 8.00018 15.8881 8.03592C16.3644 8.08308 16.645 8.26056 16.9366 8.638C17.1573 8.92379 17.4077 9.3146 17.7877 9.91032C17.9255 10.1264 18.0663 10.3302 18.2128 10.5236C18.4663 10.8583 18.5931 11.0256 18.5379 11.1366C18.4828 11.2476 18.282 11.2476 17.8805 11.2476H17.7081C17.0358 11.2476 16.592 11.2466 16.2509 11.2091C15.7677 11.1561 15.4963 10.9726 15.2675 10.5437C15.106 10.2411 14.9402 9.82961 14.6905 9.20567L14.4282 8.55008C14.3282 8.30032 14.2783 8.17542 14.3374 8.08765Z',
  d6: 'M10.181 3.2513C10.814 3.25126 11.3659 3.25122 11.8091 3.31349C13.2775 3.51979 13.6845 4.68933 13.7404 6.00147L14.488 6.00147C15.1048 6.00144 15.6384 6.00142 16.0851 6.04565C16.5658 6.09325 17.0175 6.19706 17.4568 6.44578C17.8927 6.69261 18.2197 7.02742 18.5193 7.41539C18.8017 7.78097 19.1001 8.24874 19.4509 8.79878C19.8723 9.45943 20.3789 10.0341 21.0278 10.4792C21.9334 11.1003 22.6273 12.0226 22.7229 13.1406L22.75 14.358C22.75 14.9411 22.7501 15.4452 22.7009 15.8504C22.5937 16.7347 22.102 17.3294 21.3442 17.5901C21.1091 17.671 20.9915 17.7115 20.8753 17.648C20.7591 17.5845 20.7205 17.4262 20.6431 17.1095L20.6431 17.1094C20.2427 15.4693 18.7635 14.252 17 14.252C15.2075 14.252 13.7088 15.5095 13.338 17.1905C13.2759 17.4722 13.2448 17.613 13.1625 17.6791C13.0802 17.7453 12.9527 17.7453 12.6978 17.7453H11.3022C11.0473 17.7453 10.9198 17.7453 10.8375 17.6791C10.7552 17.613 10.7241 17.4722 10.662 17.1905C10.2912 15.5095 8.79246 14.252 7 14.252C5.17594 14.252 3.65606 15.5543 3.31946 17.2799C3.27894 17.4876 3.25868 17.5915 3.18636 17.6376C3.11405 17.6838 3.02695 17.6622 2.85276 17.6191L2.85275 17.6191C2.49372 17.5303 2.16245 17.3715 1.87838 17.0747C1.51166 16.6915 1.37115 16.2231 1.30867 15.7375C1.24995 15.2811 1.24997 14.7104 1.25 14.0445V14.0444V6.95214V6.9521C1.24997 6.28618 1.24995 5.71546 1.30867 5.25906C1.37115 4.77345 1.51166 4.30511 1.87838 3.9219C2.24954 3.53404 2.71081 3.38093 3.19088 3.31349C3.74503 3.23563 4.31148 3.25128 4.86957 3.2513L10.181 3.2513Z',
  d7: 'M14.3379 8.08998C14.397 8.0022 14.5313 8.00157 14.8 8.00032C15.1637 7.99863 15.5276 8.00251 15.8885 8.03824C16.3649 8.08541 16.6455 8.26289 16.937 8.64033C17.1578 8.92612 17.4082 9.31693 17.7882 9.91264C17.926 10.1287 18.0668 10.3325 18.2133 10.5259C18.4668 10.8606 18.5936 11.028 18.5384 11.1389C18.4832 11.2499 18.2825 11.2499 17.881 11.2499H17.7086C17.0363 11.2499 16.5925 11.2489 16.2514 11.2114C15.7681 11.1584 15.4968 10.9749 15.2679 10.546C15.1065 10.2434 14.9407 9.83194 14.691 9.208L14.4287 8.55241C14.3287 8.30265 14.2787 8.17775 14.3379 8.08998Z',
  d8: 'M9 18C9 19.1046 8.10457 20 7 20C5.89543 20 5 19.1046 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18Z',
  d9: 'M13 18H15M13 7H18L22 12V18H19',
  d10: 'M16 7V12H22',
  d11: 'M8.69565 18H13V4H2V18H5',
  d12: 'M19.5 18.25C19.5 19.6307 18.3807 20.75 17 20.75C15.6193 20.75 14.5 19.6307 14.5 18.25C14.5 16.8693 15.6193 15.75 17 15.75C18.3807 15.75 19.5 16.8693 19.5 18.25Z',
  d13: 'M9.5 18.25C9.5 19.6307 8.38071 20.75 7 20.75C5.61929 20.75 4.5 19.6307 4.5 18.25C4.5 16.8693 5.61929 15.75 7 15.75C8.38071 15.75 9.5 16.8693 9.5 18.25Z',
  d14: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H13C13.4142 3.25 13.75 3.58579 13.75 4V6.25H17.9773C18.2672 6.25 18.5415 6.38278 18.7226 6.61087L22.5408 11.4186C22.6762 11.5891 22.75 11.8009 22.75 12.0192V17.7885C22.75 18.3195 22.3226 18.75 21.7955 18.75H20.717C20.7388 18.5864 20.75 18.4195 20.75 18.25C20.75 16.1789 19.0711 14.5 17 14.5C14.9289 14.5 13.25 16.1789 13.25 18.25C13.25 18.4195 13.2612 18.5864 13.283 18.75H13.2045C13.1679 18.75 13.1318 18.7479 13.0963 18.7439C13.0647 18.7479 13.0326 18.75 13 18.75H10.717C10.7388 18.5864 10.75 18.4195 10.75 18.25C10.75 16.1789 9.07107 14.5 7 14.5C4.92893 14.5 3.25 16.1789 3.25 18.25C3.25 18.4195 3.26125 18.5864 3.28304 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V4ZM17.5185 8.17285L20.8409 12.3563H16V8.17285H17.5185Z',
};

export const IconTruckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-stroke-rounded IconTruckStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconTruckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-duotone-rounded IconTruckDuotoneRounded"
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
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconTruckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-twotone-rounded IconTruckTwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-solid-rounded IconTruckSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconTruckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-bulk-rounded IconTruckBulkRounded"
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
      <circle 
        cx="17" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconTruckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-stroke-sharp IconTruckStrokeSharp"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTruckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="truck-solid-sharp IconTruckSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTruck: TheIconSelfPack = {
  name: 'Truck',
  StrokeRounded: IconTruckStrokeRounded,
  DuotoneRounded: IconTruckDuotoneRounded,
  TwotoneRounded: IconTruckTwotoneRounded,
  SolidRounded: IconTruckSolidRounded,
  BulkRounded: IconTruckBulkRounded,
  StrokeSharp: IconTruckStrokeSharp,
  SolidSharp: IconTruckSolidSharp,
};