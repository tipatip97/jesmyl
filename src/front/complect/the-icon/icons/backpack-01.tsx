import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16.3333C19 17.8847 19 18.6604 18.7877 19.2858C18.388 20.4633 17.4633 21.388 16.2858 21.7877C15.6604 22 14.8847 22 13.3333 22H10.6667C9.11529 22 8.3396 22 7.71424 21.7877C6.53668 21.388 5.61201 20.4633 5.21228 19.2858C5 18.6604 5 17.8847 5 16.3333V12Z',
  d2: 'M5 17C6.64996 15.17 9.17273 14 12 14C14.8273 14 17.35 15.17 19 17',
  d3: 'M11 10H13',
  d4: 'M9 6V5C9 4.06812 9 3.60218 9.15224 3.23463C9.35523 2.74458 9.74458 2.35523 10.2346 2.15224C10.6022 2 11.0681 2 12 2C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5V6',
  d5: 'M5 19H3.71429C2.76751 19 2 18.2325 2 17.2857L2 16C2 14.3431 3.34315 13 5 13',
  d6: 'M19 19H20.2857C21.2325 19 22 18.2325 22 17.2857L22 16C22 14.3431 20.6569 13 19 13',
  d7: 'M19 16.3333V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V16.3333C5 16.498 5 16.6539 5.00025 16.8019C7 14.5 13.3995 11.4433 18.9997 16.8019C19 16.6539 19 16.498 19 16.3333Z',
  d8: 'M19.4983 19.5268C19.0237 20.9252 17.9256 22.0232 16.5272 22.4979C15.7829 22.7506 14.8911 22.7504 13.4927 22.75H10.5081C9.10976 22.7504 8.21792 22.7506 7.47358 22.4979C6.07522 22.0232 4.97717 20.9252 4.50249 19.5268C4.41426 19.2669 4.35687 18.989 4.31955 18.6778C4.26381 18.2131 4.23594 17.9807 4.35322 17.7247C4.47049 17.4687 4.68353 17.3254 5.10962 17.0387C7.09229 15.7047 9.19448 14.75 12.0004 14.75C14.4464 14.75 17.2494 15.724 19.0718 17.0999C19.3884 17.3389 19.5467 17.4584 19.6515 17.6981C19.7564 17.9378 19.7361 18.1408 19.6956 18.5469C19.6592 18.9119 19.5988 19.231 19.4983 19.5268Z',
  d9: 'M11.9747 1.25H12.0252H12.0253H12.0253C12.4697 1.24999 12.8408 1.24999 13.1454 1.27077C13.4625 1.29241 13.762 1.33905 14.0524 1.45933C14.7262 1.73844 15.2616 2.27379 15.5407 2.94762C15.6609 3.23801 15.7076 3.53754 15.7292 3.85464C15.75 4.15924 15.75 4.53026 15.75 4.9747V4.97472V4.97474V5.21603C18.1352 6.53735 19.75 9.0801 19.75 12L19.75 14.8896C19.75 15.2356 19.75 15.4086 19.6459 15.4654C19.5418 15.5223 19.392 15.4261 19.0924 15.2337C17.1487 13.9853 14.6735 13.25 12 13.25C9.32653 13.25 6.85128 13.9853 4.90764 15.2336C4.60804 15.426 4.45825 15.5222 4.35412 15.4654C4.25 15.4085 4.25 15.2355 4.25 14.8896V14.8896V14.8896L4.25002 12C4.25002 9.08012 5.86477 6.53738 8.25 5.21606V4.97475C8.24999 4.53029 8.24998 4.15925 8.27077 3.85464C8.2924 3.53754 8.33904 3.23801 8.45933 2.94762C8.73844 2.27379 9.27379 1.73844 9.94762 1.45933C10.238 1.33905 10.5375 1.29241 10.8546 1.27077C11.1592 1.24999 11.5303 1.24999 11.9747 1.25H11.9747H11.9747ZM14.2327 3.95674C14.2441 4.12357 14.248 4.32318 14.2493 4.58145C13.5374 4.3659 12.7823 4.25 12 4.25C11.2178 4.25 10.4626 4.3659 9.75068 4.58146C9.75201 4.32318 9.7559 4.12357 9.76729 3.95674C9.78371 3.71602 9.81319 3.5988 9.84515 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0433 2.76729C13.284 2.78372 13.4012 2.81319 13.4784 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1868 3.5988 14.2163 3.71602 14.2327 3.95674ZM11 9.25C10.5858 9.25 10.25 9.58579 10.25 10C10.25 10.4142 10.5858 10.75 11 10.75H13C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58579 13.4142 9.25 13 9.25H11Z',
  d10: 'M2.99993 16.655L3.00002 13.5511C3.00003 13.2247 3.00004 13.0615 2.87927 13.0094C2.75849 12.9573 2.64815 13.0614 2.42746 13.2695C1.7025 13.9533 1.25 14.9228 1.25 15.998V17.2837C1.25 18.2584 1.81589 19.1009 2.63705 19.5007C2.87242 19.6153 2.9901 19.6726 3.08757 19.6005C3.18504 19.5284 3.16111 19.3762 3.11327 19.072C2.99869 18.3433 2.99928 17.541 2.99993 16.655Z',
  d11: 'M21.0005 16.6551C21.0012 17.541 21.0018 18.3433 20.8872 19.0719C20.8394 19.3762 20.8154 19.5284 20.9129 19.6004C21.0104 19.6725 21.1281 19.6152 21.3635 19.5006C22.1844 19.1008 22.7502 18.2584 22.7502 17.2838V15.9981C22.7502 14.923 22.2978 13.9536 21.573 13.2698C21.3523 13.0617 21.242 12.9576 21.1212 13.0097C21.0004 13.0618 21.0004 13.225 21.0004 13.5514L21.0005 16.6551Z',
  d12: 'M4.25002 12C4.25002 7.71979 7.71981 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12L19.75 14.8896C19.75 15.2356 19.75 15.4086 19.6459 15.4654C19.5418 15.5223 19.392 15.4261 19.0924 15.2337C17.1487 13.9853 14.6735 13.25 12 13.25C9.32653 13.25 6.85128 13.9853 4.90764 15.2336C4.60804 15.426 4.45825 15.5222 4.35412 15.4654C4.25 15.4085 4.25 15.2355 4.25 14.8896L4.25002 12Z',
  d13: 'M12.0253 1.25H11.9747H11.9747C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94762 1.45933C9.27379 1.73844 8.73844 2.27379 8.45933 2.94762C8.33905 3.23801 8.29241 3.53754 8.27077 3.85464C8.24999 4.15925 8.24999 4.53029 8.25 4.97475V4.97475V5.21605C8.72221 4.95446 9.22463 4.74075 9.75069 4.58146C9.75201 4.32318 9.75591 4.12357 9.76729 3.95674C9.78372 3.71602 9.81319 3.5988 9.84515 3.52165C9.97202 3.21536 10.2154 2.97202 10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0433 2.76729C13.284 2.78372 13.4012 2.81319 13.4784 2.84515C13.7846 2.97202 14.028 3.21536 14.1549 3.52165C14.1868 3.5988 14.2163 3.71602 14.2327 3.95674C14.2441 4.12357 14.248 4.32318 14.2493 4.58145C14.7754 4.74074 15.2778 4.95445 15.75 5.21603V4.97474C15.75 4.53028 15.75 4.15925 15.7292 3.85464C15.7076 3.53754 15.661 3.23801 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8408 1.24999 12.4697 1.24999 12.0253 1.25H12.0253Z',
  d14: 'M10.25 10C10.25 9.58579 10.5858 9.25 11 9.25H13C13.4142 9.25 13.75 9.58579 13.75 10C13.75 10.4142 13.4142 10.75 13 10.75H11C10.5858 10.75 10.25 10.4142 10.25 10Z',
  d15: 'M19 20V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20Z',
  d16: 'M10 10H14',
  d17: 'M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6',
  d18: 'M5 19H2V16C2 14.3431 3.34315 13 5 13',
  d19: 'M19 19H22L22 16C22 14.3431 20.6569 13 19 13',
  d20: 'M4.25 12C4.25 7.71979 7.71979 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12V15.3871C17.6588 14.0448 14.9427 13.25 12.0014 13.25C9.05877 13.25 6.34161 14.0455 4.25 15.3889V12ZM12.0014 14.75C15.1118 14.75 17.8688 15.7257 19.75 17.23V20C19.75 21.5188 18.5188 22.75 17 22.75H7C5.48122 22.75 4.25 21.5188 4.25 20V17.2322C6.13125 15.7266 8.88946 14.75 12.0014 14.75ZM10 9.25V10.75H14V9.25H10Z',
  d21: 'M12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V6H8.25V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6H14.25V5C14.25 3.75736 13.2426 2.75 12 2.75Z',
  d22: 'M2 19.7499C1.58579 19.7499 1.25 19.4141 1.25 18.9999V15.9999C1.25 14.6641 1.94842 13.4914 3 12.8271V19.7499H2Z',
  d23: 'M22 19.7499C22.4142 19.7499 22.75 19.4141 22.75 18.9999V15.9999C22.75 14.6641 22.0516 13.4914 21 12.8271V19.7499H22Z',
};

export const IconBackpack01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-stroke-rounded IconBackpack01StrokeRounded"
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
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-duotone-rounded IconBackpack01DuotoneRounded"
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
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-twotone-rounded IconBackpack01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-solid-rounded IconBackpack01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBackpack01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-bulk-rounded IconBackpack01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBackpack01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-stroke-sharp IconBackpack01StrokeSharp"
    >
      <path 
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const IconBackpack01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-01-solid-sharp IconBackpack01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfBackpack01: TheIconSelfPack = {
  name: 'Backpack01',
  StrokeRounded: IconBackpack01StrokeRounded,
  DuotoneRounded: IconBackpack01DuotoneRounded,
  TwotoneRounded: IconBackpack01TwotoneRounded,
  SolidRounded: IconBackpack01SolidRounded,
  BulkRounded: IconBackpack01BulkRounded,
  StrokeSharp: IconBackpack01StrokeSharp,
  SolidSharp: IconBackpack01SolidSharp,
};