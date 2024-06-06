import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.46433 9.34375C2.21579 9.34375 1.98899 9.14229 2.00041 8.87895C2.06733 7.33687 2.25481 6.33298 2.78008 5.53884C3.08228 5.08196 3.45765 4.68459 3.88923 4.36468C5.05575 3.5 6.70139 3.5 9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C6.70139 20.5 5.05575 20.5 3.88923 19.6353C3.45765 19.3154 3.08228 18.918 2.78008 18.4612C2.25481 17.667 2.06733 16.6631 2.00041 15.1211C1.98899 14.8577 2.21579 14.6562 2.46433 14.6562C3.85012 14.6562 4.97352 13.467 4.97352 12C4.97352 10.533 3.85012 9.34375 2.46433 9.34375Z',
  d2: 'M19.0259 12C19.0259 10.533 20.1493 9.34375 21.5351 9.34375C21.7839 9.34375 22.011 9.14208 21.9996 8.87843C21.9327 7.33665 21.7452 6.33289 21.2199 5.53884C20.9177 5.08196 20.5424 4.68459 20.1108 4.36468C18.9443 3.5 17.2986 3.5 14.0074 3.5H9.99266C6.70139 3.5 5.05575 3.5 3.88923 4.36468C3.45765 4.68459 3.08228 5.08196 2.78008 5.53884C2.25481 6.33298 2.06733 7.33687 2.00041 8.87895C1.98899 9.14229 2.21579 9.34375 2.46433 9.34375C3.85012 9.34375 4.97352 10.533 4.97352 12',
  d3: 'M14.0534 2.75C15.6601 2.74999 16.9289 2.74998 17.9391 2.86271C18.9748 2.97828 19.8256 3.21963 20.5575 3.76216C21.0606 4.13512 21.4961 4.5968 21.8456 5.12508C22.4908 6.10053 22.6811 7.28307 22.749 8.8459C22.7814 9.59249 22.1524 10.0938 21.5352 10.0938C20.6033 10.0938 19.776 10.9064 19.776 12C19.776 13.0936 20.6033 13.9062 21.5352 13.9062C22.1524 13.9062 22.7814 14.4075 22.749 15.1541C22.6811 16.7169 22.4908 17.8995 21.8456 18.8749C21.4961 19.4032 21.0606 19.8649 20.5575 20.2378C19.8256 20.7804 18.9748 21.0217 17.9391 21.1373C16.9289 21.25 15.6601 21.25 14.0534 21.25H14.0533H9.94687H9.94678C8.34009 21.25 7.07132 21.25 6.06107 21.1373C5.02537 21.0217 4.17461 20.7804 3.44269 20.2378C2.93955 19.8649 2.50404 19.4032 2.15462 18.8749C1.50935 17.8994 1.31903 16.7167 1.2512 15.1536C1.21882 14.4074 1.84739 13.9062 2.46441 13.9062C3.39631 13.9062 4.2236 13.0936 4.2236 12C4.2236 10.9064 3.39631 10.0938 2.46441 10.0938C1.84739 10.0938 1.21882 9.5926 1.2512 8.84643C1.31903 7.28333 1.50935 6.10064 2.15462 5.12508C2.50404 4.5968 2.93954 4.13512 3.44269 3.76216C4.17461 3.21963 5.02537 2.97828 6.06107 2.86271C7.07132 2.74998 8.3401 2.74999 9.94682 2.75H9.94683H14.0534H14.0534Z',
  d4: 'M21.8999 3.50012L2.1 3.5C2.04477 3.5 2 3.54477 2 3.6V9.43814C3.31502 9.39579 4.20186 9.77408 4.76887 11.0404C5.00547 11.5689 5.04819 12.2888 4.84378 12.8305C4.19363 14.2185 3.19316 14.5252 2 14.4829V20.4C2 20.4552 2.04477 20.5 2.1 20.5H21.9C21.9552 20.5 22 20.4552 22 20.4L21.9999 14.4772C20.6309 14.4325 19.8886 14.1705 19.399 13.2641C18.8678 12.5411 18.8103 11.5202 19.399 10.6174C19.8771 9.80882 20.6213 9.46358 21.9999 9.44101V3.60012C21.9999 3.54489 21.9552 3.50012 21.8999 3.50012Z',
  d5: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H21.9992C22.4133 2.75 22.7491 3.08572 22.7492 3.4999L22.7501 10.25H21.5255C20.559 10.25 19.7755 11.0335 19.7755 12C19.7755 12.9665 20.559 13.75 21.5255 13.75H22.7501L22.7492 20.5001C22.7491 20.9143 22.4133 21.25 21.9992 21.25H2C1.58579 21.25 1.25 20.9142 1.25 20.5V13.75H2.4731C3.4396 13.75 4.2231 12.9665 4.2231 12C4.2231 11.0335 3.4396 10.25 2.4731 10.25H1.25V3.5Z',
};

export const IconCoupon03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-stroke-rounded IconCoupon03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoupon03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-duotone-rounded IconCoupon03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoupon03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-twotone-rounded IconCoupon03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCoupon03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-solid-rounded IconCoupon03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoupon03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-bulk-rounded IconCoupon03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoupon03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-stroke-sharp IconCoupon03StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoupon03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-03-solid-sharp IconCoupon03SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoupon03: TheIconSelfPack = {
  name: 'Coupon03',
  StrokeRounded: IconCoupon03StrokeRounded,
  DuotoneRounded: IconCoupon03DuotoneRounded,
  TwotoneRounded: IconCoupon03TwotoneRounded,
  SolidRounded: IconCoupon03SolidRounded,
  BulkRounded: IconCoupon03BulkRounded,
  StrokeSharp: IconCoupon03StrokeSharp,
  SolidSharp: IconCoupon03SolidSharp,
};