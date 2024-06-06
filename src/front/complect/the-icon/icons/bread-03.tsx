import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 11C15 8.23858 13.1011 6 10.7588 6C9.1261 6 7.5 7 7 8',
  d2: 'M19 11C19 8.79086 17.4818 7 15.609 7C15.0267 7 14.4787 7.1731 14 7.47806',
  d3: 'M22 12C22 15.3137 17.5228 18 12 18C6.47715 18 2 15.3137 2 12',
  d4: 'M8.88973 11C8.5012 9.27477 7.13086 8 5.5 8C3.567 8 2 9.79086 2 12C2 13.6569 6.47715 15 12 15C17.5228 15 22 13.6569 22 12C22 11.0054 20.4499 9.02165 18.5314 9.00018',
  d5: 'M5.5 7.99726C3.567 7.99726 2 9.78812 2 11.9973C2 13.6541 6.47715 14.9973 12 14.9973C17.5228 14.9973 22 13.6541 22 11.9973C22 11.0027 20.4499 9.01892 18.5314 8.99744C17.3565 6.59539 15.0209 6.99647 14 7.49726C10.4 4.69726 7.62711 6.82221 6.69067 8.23468C6.319 8.08103 5.91806 7.99726 5.5 7.99726Z',
  d6: 'M6.3865 7.09542C6.10185 7.03299 5.80567 7 5.5 7C2.89347 7 1 9.36818 1 12C1 12.899 1.60301 13.5548 2.20732 13.9834C2.8376 14.4304 3.68476 14.7921 4.64158 15.0791C6.56796 15.6571 9.16929 16 12 16C14.8307 16 17.432 15.6571 19.3584 15.0791C20.3152 14.7921 21.1624 14.4304 21.7927 13.9834C22.397 13.5548 23 12.899 23 12C23 11.5212 22.8242 11.0424 22.6087 10.6413C22.3835 10.2222 22.0686 9.80178 21.6898 9.42559C21.0656 8.80581 20.1907 8.2339 19.1579 8.05643C18.384 6.83629 17.1282 6 15.609 6C15.0574 6 14.5319 6.11568 14.0505 6.32301C13.17 5.50411 12.0391 5 10.7588 5C9.74639 5 8.76568 5.30699 7.96795 5.75142C7.35353 6.09373 6.78213 6.55496 6.3865 7.09542ZM8.22701 8.01974C9.03889 8.71033 9.62037 9.69274 9.8653 10.7803C9.98664 11.3191 9.64823 11.8542 9.10944 11.9756C8.57065 12.0969 8.03551 11.7585 7.91417 11.2197C7.6062 9.85225 6.56928 9 5.5 9C4.24387 9 3.00656 10.2071 3.00003 11.9859C3.00852 12.0107 3.06422 12.1392 3.36438 12.3521C3.74615 12.6229 4.36346 12.9076 5.21628 13.1635C6.90919 13.6714 9.30786 14 12 14C14.6921 14 17.0908 13.6714 18.7837 13.1635C19.6365 12.9076 20.2538 12.6229 20.6356 12.3521C20.926 12.1461 20.9876 12.0191 20.999 11.9886C20.997 11.9719 20.9912 11.9366 20.9741 11.8813C20.9501 11.8034 20.9093 11.704 20.847 11.5881C20.7216 11.3548 20.529 11.0915 20.2805 10.8448C20.1857 10.7506 20.0867 10.6625 19.9843 10.5815C19.9947 10.7202 20 10.8598 20 11C20 11.5523 19.5523 12 19 12C18.4477 12 18 11.5523 18 11C18 10.4699 17.8964 9.99382 17.7205 9.58539C17.6561 9.49637 17.6061 9.39636 17.5737 9.28879C17.1156 8.47611 16.3529 8 15.609 8C15.5073 8 15.4068 8.00803 15.3078 8.02383C15.7522 8.91727 16 9.94138 16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11C14 8.63023 12.4009 7 10.7588 7C10.1385 7 9.4898 7.19301 8.94132 7.49858C8.6435 7.6645 8.40506 7.84644 8.22701 8.01974Z',
  d7: 'M2 11C2.54743 11 2.99213 11.4399 2.9999 11.9855C3.00795 12.0093 3.06266 12.1381 3.36438 12.3521C3.74615 12.6229 4.36346 12.9076 5.21628 13.1635C6.90919 13.6714 9.30786 14 12 14C14.6921 14 17.0908 13.6714 18.7837 13.1635C19.6365 12.9076 20.2538 12.6229 20.6356 12.3521C20.9374 12.1381 20.9921 12.0093 21.0001 11.9855C21.0079 11.4399 21.4526 11 22 11C22.5523 11 23 11.4477 23 12C23 14.1461 21.5554 15.9182 19.5856 17.1001C17.5958 18.294 14.9115 19 12 19C9.0885 19 6.40421 18.294 4.41444 17.1001C2.44457 15.9182 1 14.1461 1 12C1 11.4477 1.44772 11 2 11Z',
  d8: 'M5.3148 15.5995C6.98935 16.6043 9.35114 17.25 12 17.25C14.6489 17.25 17.0106 16.6043 18.6852 15.5995C19.1997 15.2908 19.6387 14.956 20.0005 14.603C19.7722 14.6867 19.5337 14.7656 19.2866 14.8397C17.3894 15.4088 14.8134 15.75 12 15.75C9.18661 15.75 6.61061 15.4088 4.71342 14.8397C4.46631 14.7656 4.22779 14.6867 3.99955 14.603C4.36131 14.956 4.80031 15.2908 5.3148 15.5995ZM1.25 12H2.75C2.75 12.0506 2.78743 12.2494 3.21975 12.556C3.63259 12.8488 4.27862 13.1432 5.14444 13.403C6.86654 13.9196 9.29054 14.25 12 14.25C14.7095 14.25 17.1335 13.9196 18.8556 13.403C19.7214 13.1432 20.3674 12.8488 20.7803 12.556C21.2126 12.2494 21.25 12.0506 21.25 12H22.75C22.75 14.0238 21.3867 15.7279 19.4569 16.8858C17.5122 18.0526 14.874 18.75 12 18.75C9.12602 18.75 6.4878 18.0526 4.54306 16.8858C2.61325 15.7279 1.25 14.0238 1.25 12Z',
  d9: 'M5.5 7.25C5.84494 7.25 6.17769 7.29497 6.49472 7.37927C6.86159 6.81932 7.44387 6.33007 8.09052 5.96982C8.85709 5.54274 9.7963 5.25 10.7597 5.25C12.0238 5.25 13.1433 5.77367 14.0001 6.62104C14.492 6.38357 15.0361 6.25 15.6096 6.25C17.0643 6.25 18.2778 7.07686 19.0075 8.28594C20.0225 8.4297 20.8918 8.98555 21.5136 9.60299C21.8762 9.963 22.1757 10.3638 22.3885 10.7597C22.594 11.142 22.75 11.5787 22.75 12C22.75 15.7279 17.9371 18.75 12 18.75C6.06294 18.75 1.25 15.7279 1.25 12C1.25 9.47385 3.06185 7.25 5.5 7.25ZM9.62141 10.8352C9.36679 9.70464 8.73541 8.70332 7.86221 8.04826C8.07066 7.79275 8.39507 7.51722 8.82055 7.28018C9.40018 6.95726 10.0904 6.75 10.7597 6.75C12.5768 6.75 14.2509 8.53232 14.2509 11H15.7509C15.7509 9.86202 15.4563 8.77404 14.9383 7.85669C15.1539 7.7866 15.3788 7.75 15.6096 7.75C16.9568 7.75 18.2506 9.08417 18.2506 11H19.7506C19.7506 10.6856 19.7231 10.3752 19.6702 10.0727C19.9538 10.2282 20.2199 10.4322 20.4567 10.6674C20.7215 10.9303 20.9293 11.2133 21.0672 11.4698C21.2123 11.7397 21.25 11.924 21.25 12C21.25 12.0506 21.2126 12.2494 20.7803 12.556C20.3674 12.8488 19.7214 13.1432 18.8556 13.403C17.1335 13.9196 14.7095 14.25 12 14.25C9.29054 14.25 6.86654 13.9196 5.14444 13.403C4.27862 13.1432 3.63259 12.8488 3.21975 12.556C2.78743 12.2494 2.75 12.0506 2.75 12C2.75 10.1079 4.07216 8.75 5.5 8.75C6.70967 8.75 7.82995 9.70788 8.15806 11.1648L9.62141 10.8352Z',
};

export const IconBread03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-stroke-rounded IconBread03StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBread03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-duotone-rounded IconBread03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconBread03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-twotone-rounded IconBread03TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBread03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-solid-rounded IconBread03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBread03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-bulk-rounded IconBread03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconBread03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-stroke-sharp IconBread03StrokeSharp"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBread03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bread-03-solid-sharp IconBread03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBread03: TheIconSelfPack = {
  name: 'Bread03',
  StrokeRounded: IconBread03StrokeRounded,
  DuotoneRounded: IconBread03DuotoneRounded,
  TwotoneRounded: IconBread03TwotoneRounded,
  SolidRounded: IconBread03SolidRounded,
  BulkRounded: IconBread03BulkRounded,
  StrokeSharp: IconBread03StrokeSharp,
  SolidSharp: IconBread03SolidSharp,
};