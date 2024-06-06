import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z',
  d2: 'M9.79993 11.9741C9.37332 11.2302 9.16733 10.6228 9.04313 10.007C8.85943 9.09641 9.27981 8.20686 9.97622 7.63926C10.2706 7.39937 10.608 7.48133 10.782 7.79358L11.1749 8.49851C11.4864 9.05725 11.6421 9.33663 11.6112 9.63282C11.5803 9.929 11.3703 10.1702 10.9503 10.6527L9.79993 11.9741ZM9.79993 11.9741C10.6634 13.4797 12.0185 14.8356 13.5259 15.7001M13.5259 15.7001C14.2698 16.1267 14.8772 16.3327 15.493 16.4569C16.4036 16.6406 17.2931 16.2202 17.8607 15.5238C18.1006 15.2294 18.0187 14.892 17.7064 14.718L17.0015 14.3251C16.4427 14.0136 16.1634 13.8579 15.8672 13.8888C15.571 13.9197 15.3298 14.1297 14.8473 14.5497L13.5259 15.7001Z',
  d3: 'M5 6L2.5 6M5 12L2.5 12M5 18H2.5',
  d4: 'M13.6814 1.25H13.6814H13.6814C15.5192 1.24999 16.9748 1.24997 18.114 1.40314C19.2864 1.56076 20.2354 1.89288 20.9838 2.64124C21.7321 3.38961 22.0642 4.33856 22.2219 5.51098C22.375 6.65018 22.375 8.10581 22.375 9.94354V9.94359V14.0564V14.0565C22.375 15.8942 22.375 17.3498 22.2219 18.489C22.0642 19.6614 21.7321 20.6104 20.9838 21.3588C20.2354 22.1071 19.2864 22.4392 18.114 22.5969C16.9748 22.75 15.5192 22.75 13.6815 22.75H13.6814H12.0686H12.0685C10.2308 22.75 8.77518 22.75 7.63598 22.5969C6.46356 22.4392 5.51461 22.1071 4.76624 21.3588C4.12977 20.7223 3.79438 19.9407 3.61135 19H2.625C2.07272 19 1.625 18.5523 1.625 18C1.625 17.4477 2.07272 17 2.625 17H3.40942C3.37498 16.1503 3.37499 15.174 3.375 14.0564V14.0564V14.0564V13H2.625C2.07272 13 1.625 12.5523 1.625 12C1.625 11.4477 2.07272 11 2.625 11H3.375V9.94358V9.94357V9.94356C3.37499 8.82599 3.37498 7.84972 3.40942 7H2.625C2.07272 7 1.625 6.55228 1.625 6C1.625 5.44772 2.07272 5 2.625 5H3.61135C3.79438 4.05927 4.12977 3.27771 4.76624 2.64124C5.51461 1.89288 6.46356 1.56076 7.63598 1.40314C8.77519 1.24997 10.2308 1.24999 12.0686 1.25H12.0686H12.0686H12.0686H13.6814H13.6814ZM10.6996 6.77512C11.0916 6.85614 11.3867 7.11643 11.5607 7.42865L11.9701 8.16322L11.9701 8.16323C12.1116 8.41695 12.2463 8.65852 12.3368 8.87464C12.4382 9.11668 12.5139 9.39247 12.4807 9.71083C12.4475 10.0292 12.3165 10.2834 12.1674 10.4993C12.0342 10.6921 11.8526 10.9007 11.6618 11.1198L10.8511 12.051C11.5503 13.1128 12.51 14.0729 13.5728 14.7727L14.504 13.962L14.504 13.9619L14.5041 13.9619C14.7231 13.7712 14.9317 13.5896 15.1245 13.4564C15.3404 13.3073 15.5946 13.1763 15.913 13.1431C16.2313 13.1099 16.5071 13.1856 16.7492 13.287C16.9653 13.3775 17.2068 13.5122 17.4606 13.6537L17.4606 13.6537L18.1952 14.0631C18.5074 14.2372 18.7677 14.5322 18.8487 14.9242C18.9309 15.3221 18.8046 15.7047 18.5657 15.9978C17.8605 16.863 16.7064 17.4421 15.4682 17.1923C14.7755 17.0526 14.0919 16.8186 13.2764 16.3509C11.6534 15.4201 10.2026 13.9685 9.27291 12.3474C8.8052 11.5319 8.57125 10.8483 8.43151 10.1556C8.18174 8.91735 8.76077 7.7633 9.62597 7.05813C9.91913 6.81918 10.3017 6.69287 10.6996 6.77512Z',
  d5: 'M13.6814 1.25C15.5192 1.24998 16.9748 1.24997 18.114 1.40314C19.2864 1.56076 20.2354 1.89288 20.9838 2.64124C21.7321 3.38961 22.0642 4.33856 22.2219 5.51098C22.375 6.65018 22.375 8.1058 22.375 9.94354V9.94359V14.0564V14.0565C22.375 15.8942 22.375 17.3498 22.2219 18.489C22.0642 19.6614 21.7321 20.6104 20.9838 21.3588C20.2354 22.1071 19.2864 22.4392 18.114 22.5969C16.9748 22.75 15.5192 22.75 13.6815 22.75H13.6814H12.0686H12.0685C10.2308 22.75 8.77518 22.75 7.63598 22.5969C6.46356 22.4392 5.51461 22.1071 4.76624 21.3588C4.01788 20.6104 3.68576 19.6614 3.52814 18.489C3.37497 17.3498 3.37498 15.8942 3.375 14.0564V14.0564V9.94358V9.94357C3.37498 8.10582 3.37497 6.65019 3.52814 5.51098C3.68576 4.33856 4.01788 3.38961 4.76624 2.64124C5.51461 1.89288 6.46356 1.56076 7.63598 1.40314C8.77519 1.24997 10.2308 1.24998 12.0686 1.25H12.0686H13.6814H13.6814Z',
  d6: 'M10.7016 6.77512C11.0936 6.85614 11.3886 7.11643 11.5626 7.42865L11.9556 8.13357L11.9721 8.16322L11.9721 8.16323C12.1136 8.41696 12.2483 8.65852 12.3388 8.87464C12.4401 9.11668 12.5159 9.39247 12.4827 9.71083C12.4495 10.0292 12.3185 10.2834 12.1693 10.4993C12.0362 10.6921 11.8546 10.9007 11.6638 11.1198L11.6415 11.1454L10.853 12.051C11.5522 13.1128 12.512 14.0729 13.5747 14.7727L14.4804 13.9843L14.506 13.962C14.725 13.7712 14.9336 13.5896 15.1264 13.4564C15.3423 13.3073 15.5966 13.1763 15.9149 13.1431C16.2333 13.1099 16.5091 13.1856 16.7511 13.287C16.9672 13.3775 17.2088 13.5122 17.4625 13.6537L18.1971 14.0631C18.5093 14.2372 18.7696 14.5322 18.8506 14.9242C18.9329 15.3221 18.8066 15.7047 18.5676 15.9978C17.8625 16.863 16.7084 17.4421 15.4702 17.1923C14.7775 17.0526 14.0939 16.8186 13.2783 16.3509C11.6554 15.4201 10.2045 13.9685 9.27486 12.3474C8.80715 11.5319 8.5732 10.8483 8.43347 10.1556C8.18369 8.91735 8.76272 7.7633 9.62792 7.05813C9.92108 6.81918 10.3036 6.69287 10.7016 6.77512Z',
  d7: 'M1.625 6C1.625 5.44772 2.07272 5 2.625 5L5.125 5C5.67729 5 6.125 5.44772 6.125 6C6.125 6.55229 5.67728 7 5.125 7L2.625 7C2.07272 7 1.625 6.55228 1.625 6ZM1.625 12C1.625 11.4477 2.07272 11 2.625 11L5.125 11C5.67729 11 6.125 11.4477 6.125 12C6.125 12.5523 5.67728 13 5.125 13H2.625C2.07272 13 1.625 12.5523 1.625 12ZM1.625 18C1.625 17.4477 2.07272 17 2.625 17H5.125C5.67728 17 6.125 17.4477 6.125 18C6.125 18.5523 5.67728 19 5.125 19H2.625C2.07272 19 1.625 18.5523 1.625 18Z',
  d8: 'M4 2H22V22H4V2Z',
  d9: 'M6 6H2M6 12H2M6 18H2',
  d10: 'M13.5612 16.1177L15.4999 13.9864L18.4962 15.4814C18.502 15.4843 18.5034 15.492 18.4992 15.497C17.3926 16.8046 16.76 17.0698 15.8844 16.9531C14.7375 16.8002 13.024 16.0605 11.3888 14.5094C10.7166 13.9201 10.0635 13.0973 9.34662 11.9693M9.34662 11.9693C8.79037 10.7034 7.96011 9.32745 8.93516 8.09369C9.14843 7.82384 9.55543 7.26609 9.98449 7.00679C9.98946 7.00379 9.99586 7.00572 9.99846 7.01092L11.4967 10.0074L9.34662 11.9693Z',
  d11: 'M3.24939 2C3.24939 1.58579 3.58518 1.25 3.99939 1.25H21.4994C21.9136 1.25 22.2494 1.58579 22.2494 2V22C22.2494 22.4142 21.9136 22.75 21.4994 22.75H3.99939C3.58518 22.75 3.24939 22.4142 3.24939 22V19H1.74939V17H3.24939V13H1.74939V11H3.24939V7H1.74939V5H3.24939V2ZM11.0353 13.9904C10.517 13.4725 10.0521 12.9053 9.6612 12.3118L11.7376 10.3764L9.56306 6.03845L8.83799 6.62917C8.09992 7.23048 6.76718 8.37184 7.12431 10.1446C7.27791 10.9058 7.53487 11.6569 8.05019 12.555C8.56572 13.4536 9.22441 14.3014 9.97486 15.0513C10.7248 15.8017 11.5724 16.4604 12.471 16.976C13.3692 17.4913 14.1206 17.7483 14.8817 17.9019C16.6545 18.259 17.7956 16.9263 18.397 16.1882L18.9877 15.4631L14.6497 13.2886L12.7142 15.365C12.1208 14.9741 11.5533 14.5088 11.0353 13.9904Z',
};

export const IconContact02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-stroke-rounded IconContact02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconContact02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-duotone-rounded IconContact02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconContact02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-twotone-rounded IconContact02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconContact02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-solid-rounded IconContact02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContact02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-bulk-rounded IconContact02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconContact02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-stroke-sharp IconContact02StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconContact02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contact-02-solid-sharp IconContact02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfContact02: TheIconSelfPack = {
  name: 'Contact02',
  StrokeRounded: IconContact02StrokeRounded,
  DuotoneRounded: IconContact02DuotoneRounded,
  TwotoneRounded: IconContact02TwotoneRounded,
  SolidRounded: IconContact02SolidRounded,
  BulkRounded: IconContact02BulkRounded,
  StrokeSharp: IconContact02StrokeSharp,
  SolidSharp: IconContact02SolidSharp,
};