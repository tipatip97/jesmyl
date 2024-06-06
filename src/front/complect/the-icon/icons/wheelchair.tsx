import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 16C12 18.7614 9.76142 21 7 21C4.23858 21 2 18.7614 2 16C2 13.2386 4.23858 11 7 11C9.76142 11 12 13.2386 12 16Z',
  d2: 'M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z',
  d3: 'M7.00801 16L6.99902 16',
  d4: 'M6 11L5.3721 5.97683C5.2273 4.81842 5.1549 4.23921 4.85048 3.82169C4.67889 3.58637 4.45799 3.39136 4.2032 3.25029C3.75115 3 3.16743 3 2 3',
  d5: 'M6 7H11.5C13.857 7 15.0355 7 15.7678 7.73223C16.5 8.46447 16.5 9.64298 16.5 12V18',
  d6: 'M12 14H16.0241C16.909 14 17.3515 14 17.7374 14.1887C17.8297 14.2339 17.9188 14.2867 18.0039 14.3468C18.3597 14.5978 18.6052 15.0057 19.096 15.8214C19.489 16.4745 19.6855 16.8011 19.9799 16.9279C20.0491 16.9578 20.1212 16.9789 20.1947 16.9911C20.5071 17.0428 20.8239 16.8673 21.4576 16.5163L22 16.2158',
  d7: 'M6 7H11.5C13.857 7 15.0355 7 15.7678 7.73223C16.5 8.46447 16.5 11.143 16.5 13.5H11.3311C10.4666 12.0055 8.85071 11 7 11C6.68304 11 6.37296 11.0295 6.07237 11.0859C6 10.4276 6 9.58976 6 8.5V7Z',
  d8: 'M7.00898 16L7 16',
  d9: 'M16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z',
  d10: 'M8.5 16C8.5 16.8284 7.83043 17.5 7.00448 17.5L6.99552 17.5C6.16957 17.5 5.5 16.8284 5.5 16C5.5 15.1716 6.16957 14.5 6.99552 14.5L7.00448 14.5C7.83043 14.5 8.5 15.1716 8.5 16Z',
  d11: 'M7 12C4.79086 12 3 13.7909 3 16C3 18.2091 4.79086 20 7 20C9.20914 20 11 18.2091 11 16C11 13.7909 9.20914 12 7 12ZM1 16C1 12.6863 3.68629 10 7 10C10.3137 10 13 12.6863 13 16C13 19.3137 10.3137 22 7 22C3.68629 22 1 19.3137 1 16Z',
  d12: 'M3.28042 4.02728C2.98712 4.00094 2.60177 4 2 4C1.44772 4 1 3.55229 1 3C1 2.44772 1.44772 2 2 2C2.54807 1.99998 3.06584 1.99996 3.45932 2.0353C3.87823 2.07292 4.29157 2.15617 4.68758 2.37543C5.06977 2.58704 5.40112 2.87955 5.6585 3.23254C5.92519 3.5983 6.05906 3.99812 6.14835 4.40913C6.23222 4.79518 6.31526 5.45617 6.38322 6L11.5686 6C12.6886 5.99996 13.6287 5.99992 14.3764 6.10045C15.1681 6.20689 15.892 6.44224 16.4749 7.02513C17.0578 7.60801 17.2931 8.3319 17.3996 9.12358C17.5001 9.87124 17.5 10.8114 17.5 11.9313V11.9314L17.5 13.074C17.7343 13.1169 17.96 13.1845 18.1767 13.2904C18.3175 13.3593 18.4524 13.4394 18.5804 13.5297C19.1131 13.9055 19.4638 14.4903 19.8684 15.1652C20.0717 15.503 20.2723 15.8342 20.3673 15.9618C20.495 15.9048 21.2125 15.5088 21.5154 15.341C21.9985 15.0734 22.6071 15.2481 22.8748 15.7312C23.1424 16.2143 22.9677 16.8229 22.4846 17.0905C22.2016 17.2474 21.3383 17.7257 21.0864 17.8294C20.8027 17.9462 20.4452 18.0461 20.0315 17.9777C19.877 17.9521 19.7269 17.9078 19.5842 17.8463C19.2092 17.6847 18.9595 17.4168 18.7764 17.174C18.6094 16.9524 18.4386 16.6685 18.2611 16.3734L18.2611 16.3734C17.8117 15.6266 17.6247 15.3435 17.5 15.2238V18C17.5 18.5523 17.0523 19 16.5 19C15.9477 19 15.5 18.5523 15.5 18V15H10.9296L10.6676 14.4004C10.0494 12.9856 8.6387 12 7 12C6.08948 12 5.05607 11.3875 4.91057 10.2501L4.37982 6.10087C4.30518 5.50375 4.25646 5.12149 4.19394 4.83372C4.13473 4.56115 4.08019 4.4626 4.04246 4.41085C3.95667 4.29319 3.84621 4.19568 3.71882 4.12515C3.66278 4.09412 3.55823 4.05223 3.28042 4.02728Z',
  d13: 'M6 11L4.5 3.00009L2 3',
  d14: 'M5 7L16.5 7V18',
  d15: 'M12 14H18.0039L20 17L22 16.2158',
  d16: 'M8.50684 16C8.50684 16.8284 7.83827 17.5 7.01354 17.5H7.00013C6.17541 17.5 5.50684 16.8284 5.50684 16C5.50684 15.1716 6.17541 14.5 7.00013 14.5L7.01354 14.5C7.83827 14.5 8.50684 15.1716 8.50684 16Z',
  d17: 'M17.5 15L18.1031 15L20.2492 18.2254L23 17.1468L22.2699 15.2848L21.0208 15.7746L19.1747 13L17.5 13.0001V6H6.07995L5.32997 2.00012L2.00007 2L2 4L3.67011 4.00006L5.01716 11.1843C6.79767 10.8872 10.6869 11.2346 12 15.0005L15.5 15.0002V18H17.5V15Z',
};

export const IconWheelchairStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-stroke-rounded IconWheelchairStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWheelchairDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-duotone-rounded IconWheelchairDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWheelchairTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-twotone-rounded IconWheelchairTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWheelchairSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-solid-rounded IconWheelchairSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWheelchairBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-bulk-rounded IconWheelchairBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWheelchairStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-stroke-sharp IconWheelchairStrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWheelchairSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wheelchair-solid-sharp IconWheelchairSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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

export const iconPackOfWheelchair: TheIconSelfPack = {
  name: 'Wheelchair',
  StrokeRounded: IconWheelchairStrokeRounded,
  DuotoneRounded: IconWheelchairDuotoneRounded,
  TwotoneRounded: IconWheelchairTwotoneRounded,
  SolidRounded: IconWheelchairSolidRounded,
  BulkRounded: IconWheelchairBulkRounded,
  StrokeSharp: IconWheelchairStrokeSharp,
  SolidSharp: IconWheelchairSolidSharp,
};