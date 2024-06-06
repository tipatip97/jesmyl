import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.2774 13.6499L18.0693 15.2468C18.1773 15.4691 18.4653 15.6823 18.7083 15.7231L20.1436 15.9636C21.0615 16.1178 21.2775 16.7893 20.6161 17.4516L19.5002 18.5767C19.3112 18.7673 19.2077 19.1347 19.2662 19.3979L19.5857 20.7906C19.8377 21.893 19.2572 22.3195 18.2898 21.7433L16.9445 20.9403C16.7015 20.7952 16.301 20.7952 16.0536 20.9403L14.7082 21.7433C13.7453 22.3195 13.1604 21.8885 13.4124 20.7906L13.7318 19.3979C13.7903 19.1347 13.6868 18.7673 13.4979 18.5767L12.382 17.4516C11.725 16.7893 11.9365 16.1178 12.8544 15.9636L14.2898 15.7231C14.5282 15.6823 14.8162 15.4691 14.9242 15.2468L15.7161 13.6499C16.1481 12.7834 16.85 12.7834 17.2774 13.6499Z',
  d2: 'M20 11.0026V7.81989C20 6.12616 20 5.27928 19.732 4.60291C19.3012 3.51554 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848V14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22H10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22L13.9333 21.9989C13.4624 21.9869 13.2388 21.547 13.4124 20.7906L13.7318 19.3979C13.7903 19.1347 13.6868 18.7673 13.4979 18.5767L12.382 17.4516C11.725 16.7893 11.9365 16.1178 12.8544 15.9636L14.2898 15.7231C14.5282 15.6823 14.8162 15.4691 14.9242 15.2468L15.7161 13.6499C16.1481 12.7834 16.85 12.7834 17.2774 13.6499L18.0693 15.2468C18.1773 15.4691 18.4653 15.6823 18.7083 15.7231L20 15.9395V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M16.4999 12.25C17.2032 12.25 17.6846 12.7774 17.9511 13.3172L18.7398 14.9077C18.7507 14.9295 18.787 14.9756 18.8449 14.9853L20.2694 15.224C20.8606 15.3233 21.4798 15.6358 21.6881 16.2893C21.8961 16.9417 21.5736 17.5552 21.1492 17.9806L21.1482 17.9816L20.0411 19.0979C20.0208 19.1153 19.9845 19.1684 20.0014 19.2419L20.3183 20.6235C20.4583 21.2362 20.4613 22.0446 19.8407 22.5008C19.217 22.9592 18.4459 22.7083 17.9069 22.3873L16.5705 21.5897C16.5485 21.575 16.4891 21.5547 16.4282 21.591L15.0944 22.3872C14.554 22.7104 13.7847 22.9571 13.1617 22.4989C12.5425 22.0433 12.5419 21.2373 12.6828 20.6229L12.9996 19.2419C13.0182 19.161 12.9809 19.1122 12.9599 19.0979L11.8509 17.9798C11.4292 17.5545 11.1079 16.9419 11.3141 16.2906C11.5213 15.6365 12.14 15.3234 12.732 15.2239L14.1524 14.986C14.1759 14.9826 14.2296 14.9623 14.2566 14.9078L15.0464 13.3153C15.315 12.7763 15.7976 12.25 16.4999 12.25Z',
  d6: 'M6.93654 22.6472C7.91879 22.75 8.48161 22.75 10.0227 22.75C10.5625 22.75 11 22.3124 11 21.7727C11 21.233 10.5625 20.7954 10.0227 20.7954C8.41409 20.7954 8.00785 20.7941 7.1384 20.7032C6.28448 20.6138 5.80055 20.4471 5.44272 20.194C5.20127 20.0233 4.98889 19.8222 4.8111 19.5978C4.55553 19.2753 4.38609 18.8425 4.29386 18.0558C4.19893 17.246 4.19735 16.1887 4.19735 14.6652L4.19727 11.765C4.19725 11.498 4.19742 10.8595 4.47804 10.3873C4.65097 10.0963 4.87239 9.8532 5.09984 9.72938C5.46635 9.52986 5.88654 9.4165 6.33321 9.4165L7.37358 9.45299C7.75367 9.46088 8.19721 9.44887 8.62536 9.33415C9.45933 9.11069 10.1107 8.45928 10.3342 7.62531C10.4489 7.19716 10.4609 6.75362 10.453 6.37353L10.4165 5.33316C10.4165 4.86547 10.5409 4.45834 10.7583 4.07993C10.885 3.85934 11.1057 3.65745 11.4105 3.48014C11.8726 3.21123 12.426 3.20874 12.7642 3.20722C13.1023 3.20569 13.4591 3.20452 13.7572 3.20452C15.5913 3.20452 16.2584 3.21847 16.7618 3.39582C17.6344 3.70328 18.3001 4.34492 18.6102 5.13029C18.6878 5.32693 18.7427 5.58535 18.7721 6.0333C18.8021 6.48997 18.8026 7.07292 18.8026 7.91318V11.0263C18.8026 11.564 19.2386 12 19.7763 12C20.3141 12 20.75 11.564 20.75 11.0263V7.88C20.75 7.08084 20.75 6.43328 20.7153 5.9047C20.6795 5.36007 20.6039 4.8744 20.4206 4.41024C19.8918 3.07093 18.7834 2.03666 17.4068 1.55166C16.548 1.24907 15.0759 1.24946 13.5209 1.25C10.6813 1.24964 8.99465 1.24943 7.61221 1.73651C5.39221 2.51869 3.61848 4.18143 2.77509 6.31749C2.49397 7.02945 2.36944 7.79416 2.30919 8.711C2.25 9.61171 2.25 10.7243 2.25 12.1426V12.1426V14.7261C2.24998 16.1742 2.24996 17.3469 2.35985 18.2842C2.47396 19.2576 2.71721 20.0955 3.28704 20.8145C3.58222 21.187 3.93077 21.5158 4.32114 21.7919C5.0659 22.3185 5.92712 22.5416 6.93654 22.6472Z',
  d7: 'M9.99284 21.989L2.99829 21.999C2.99276 21.999 2.98828 21.9945 2.98828 21.989V9.00093L9.99284 2.00195H19.9893C19.9949 2.00195 19.9994 2.00643 19.9994 2.01195V10.9727M9.99284 2.61183V9.00093H3.57916',
  d8: 'M16.4268 13.5929C16.4665 13.5354 16.525 13.5355 16.5649 13.5929L18.1811 15.9195L20.9611 16.7356C21.0306 16.7546 20.933 16.858 20.888 16.9143L19.2046 19.0523L19.2965 21.9429C19.3009 22.0151 19.1906 21.9678 19.1229 21.9429L16.4983 21.022L13.8736 21.9429C13.8062 21.9679 13.7065 22.0148 13.7102 21.9429L13.807 19.0648L12.0552 16.8208C12.0103 16.7646 11.9856 16.74 12.0549 16.7209L14.8234 15.9195L16.4268 13.5929Z',
  d9: 'M16.5 12.75C16.7465 12.75 16.9773 12.8711 17.1173 13.074L18.6348 15.2729L21.2107 16.0269C21.4488 16.0966 21.637 16.2795 21.7135 16.5155C21.79 16.7515 21.7448 17.01 21.5929 17.2061L19.9571 19.3172L20.0309 21.9792C20.0377 22.2262 19.9225 22.4608 19.7227 22.6062C19.523 22.7517 19.2644 22.7895 19.0314 22.7072L16.5 21.8133L13.9686 22.7072C13.7356 22.7895 13.477 22.7517 13.2773 22.6062C13.0776 22.4608 12.9623 22.2262 12.9691 21.9792L13.0429 19.3172L11.4071 17.2061C11.2552 17.01 11.2101 16.7515 11.2865 16.5155C11.363 16.2795 11.5512 16.0966 11.7893 16.0269L14.3652 15.2729L15.8827 13.074C16.0228 12.8711 16.2535 12.75 16.5 12.75Z',
  d10: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H10.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V11H20.75V2.22727Z',
} as const;

export const IconFileStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-stroke-rounded IconFileStarStrokeRounded"
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

export const IconFileStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-duotone-rounded IconFileStarDuotoneRounded"
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

export const IconFileStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-twotone-rounded IconFileStarTwotoneRounded"
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

export const IconFileStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-solid-rounded IconFileStarSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-bulk-rounded IconFileStarBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-stroke-sharp IconFileStarStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-star-solid-sharp IconFileStarSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileStar: TheIconSelfPack = {
  name: 'FileStar',
  StrokeRounded: IconFileStarStrokeRounded,
  DuotoneRounded: IconFileStarDuotoneRounded,
  TwotoneRounded: IconFileStarTwotoneRounded,
  SolidRounded: IconFileStarSolidRounded,
  BulkRounded: IconFileStarBulkRounded,
  StrokeSharp: IconFileStarStrokeSharp,
  SolidSharp: IconFileStarSolidSharp,
};