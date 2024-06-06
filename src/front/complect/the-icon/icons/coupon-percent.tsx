import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.46433 9.34375C2.21579 9.34375 1.98899 9.14229 2.00041 8.87895C2.06733 7.33687 2.25481 6.33298 2.78008 5.53884C3.08228 5.08196 3.45765 4.68459 3.88923 4.36468C5.05575 3.5 6.70139 3.5 9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C6.70139 20.5 5.05575 20.5 3.88923 19.6353C3.45765 19.3154 3.08228 18.918 2.78008 18.4612C2.25481 17.667 2.06733 16.6631 2.00041 15.1211C1.98899 14.8577 2.21579 14.6562 2.46433 14.6562C3.85012 14.6562 4.97352 13.467 4.97352 12C4.97352 10.533 3.85012 9.34375 2.46433 9.34375Z',
  d2: 'M9.5 14.5L14.5 9.5',
  d3: 'M9.5 9.5H9.51122M14.4888 14.5H14.5',
  d4: 'M14.0532 2.75C15.66 2.74999 16.9287 2.74998 17.939 2.86271C18.9747 2.97828 19.8255 3.21963 20.5574 3.76216C21.0605 4.13512 21.496 4.5968 21.8454 5.12508C22.4906 6.10053 22.681 7.28307 22.7488 8.8459C22.7812 9.59249 22.1523 10.0938 21.5351 10.0938C20.6032 10.0938 19.7759 10.9064 19.7759 12C19.7759 13.0936 20.6032 13.9062 21.5351 13.9062C22.1523 13.9062 22.7812 14.4075 22.7488 15.1541C22.681 16.7169 22.4906 17.8995 21.8454 18.8749C21.496 19.4032 21.0605 19.8649 20.5574 20.2378C19.8255 20.7804 18.9747 21.0217 17.939 21.1373C16.9287 21.25 15.66 21.25 14.0533 21.25H14.0532H9.94674H9.94666C8.33996 21.25 7.0712 21.25 6.06095 21.1373C5.02524 21.0217 4.17449 20.7804 3.44257 20.2378C2.93942 19.8649 2.50392 19.4032 2.1545 18.8749C1.50923 17.8994 1.3189 16.7167 1.25108 15.1536C1.2187 14.4074 1.84726 13.9062 2.46429 13.9062C3.39619 13.9062 4.22347 13.0936 4.22347 12C4.22347 10.9064 3.39619 10.0938 2.46429 10.0938C1.84726 10.0938 1.2187 9.5926 1.25108 8.84643C1.3189 7.28333 1.50923 6.10064 2.1545 5.12508C2.50392 4.5968 2.93942 4.13512 3.44257 3.76216C4.17449 3.21963 5.02524 2.97828 6.06095 2.86271C7.0712 2.74998 8.33998 2.74999 9.9467 2.75H9.94671H14.0532H14.0532ZM13.793 8.79289C14.1835 8.40237 14.8167 8.40237 15.2072 8.79289C15.5978 9.18342 15.5978 9.81658 15.2072 10.2071L10.2072 15.2071C9.8167 15.5976 9.18354 15.5976 8.79302 15.2071C8.40249 14.8166 8.40249 14.1834 8.79302 13.7929L13.793 8.79289ZM9.51135 8.5H9.50012C8.94784 8.5 8.50012 8.94772 8.50012 9.5C8.50012 10.0523 8.94784 10.5 9.50012 10.5H9.51135C10.0636 10.5 10.5113 10.0523 10.5113 9.5C10.5113 8.94772 10.0636 8.5 9.51135 8.5ZM14.4889 13.5C13.9366 13.5 13.4889 13.9477 13.4889 14.5C13.4889 15.0523 13.9366 15.5 14.4889 15.5H14.5001C15.0524 15.5 15.5001 15.0523 15.5001 14.5C15.5001 13.9477 15.0524 13.5 14.5001 13.5H14.4889Z',
  d5: 'M14.0534 2.75C15.6601 2.74999 16.9289 2.74998 17.9391 2.86271C18.9748 2.97828 19.8256 3.21963 20.5575 3.76216C21.0606 4.13512 21.4961 4.5968 21.8456 5.12508C22.4908 6.10053 22.6811 7.28307 22.749 8.8459C22.7814 9.59249 22.1524 10.0938 21.5352 10.0938C20.6033 10.0938 19.776 10.9064 19.776 12C19.776 13.0936 20.6033 13.9062 21.5352 13.9062C22.1524 13.9062 22.7814 14.4075 22.749 15.1541C22.6811 16.7169 22.4908 17.8995 21.8456 18.8749C21.4961 19.4032 21.0606 19.8649 20.5575 20.2378C19.8256 20.7804 18.9748 21.0217 17.9391 21.1373C16.9289 21.25 15.6601 21.25 14.0534 21.25H14.0533H9.94687H9.94678C8.34009 21.25 7.07132 21.25 6.06107 21.1373C5.02537 21.0217 4.17461 20.7804 3.44269 20.2378C2.93955 19.8649 2.50404 19.4032 2.15462 18.8749C1.50935 17.8994 1.31903 16.7167 1.2512 15.1536C1.21882 14.4074 1.84739 13.9062 2.46441 13.9062C3.39631 13.9062 4.2236 13.0936 4.2236 12C4.2236 10.9064 3.39631 10.0938 2.46441 10.0938C1.84739 10.0938 1.21882 9.5926 1.2512 8.84643C1.31903 7.28333 1.50935 6.10064 2.15462 5.12508C2.50404 4.5968 2.93954 4.13512 3.44269 3.76216C4.17461 3.21963 5.02537 2.97828 6.06107 2.86271C7.07132 2.74998 8.3401 2.74999 9.94682 2.75H9.94683H14.0534H14.0534Z',
  d6: 'M15.2071 8.79289C15.5976 9.18342 15.5976 9.81658 15.2071 10.2071L10.2071 15.2071C9.81658 15.5976 9.18342 15.5976 8.79289 15.2071C8.40237 14.8166 8.40237 14.1834 8.79289 13.7929L13.7929 8.79289C14.1834 8.40237 14.8166 8.40237 15.2071 8.79289Z',
  d7: 'M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H9.51122C10.0635 8.5 10.5112 8.94772 10.5112 9.5C10.5112 10.0523 10.0635 10.5 9.51122 10.5H9.5C8.94772 10.5 8.5 10.0523 8.5 9.5ZM13.4888 14.5C13.4888 13.9477 13.9365 13.5 14.4888 13.5H14.5C15.0523 13.5 15.5 13.9477 15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H14.4888C13.9365 15.5 13.4888 15.0523 13.4888 14.5Z',
  d8: 'M9.5 14.458L14.5 9.45801',
  d9: 'M9.5 9.45801H9.51122M14.4888 14.458H14.5',
  d10: 'M21.8999 3.50012L2.1 3.5C2.04477 3.5 2 3.54477 2 3.6V9.53325C3.31502 9.49089 4.2253 9.88088 4.79231 11.1473C5.02891 11.6757 5.06222 12.2836 4.85782 12.8253C4.34869 14.1746 3.28252 14.6001 2 14.5822V20.5H22V14.5738C20.631 14.529 19.8418 14.2329 19.3522 13.3265C18.9156 12.5183 18.9313 11.4952 19.399 10.7045C19.8771 9.89599 20.6213 9.58107 21.9999 9.5585V3.60012C21.9999 3.54489 21.9552 3.50012 21.8999 3.50012Z',
  d11: 'M2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5V10.25H2.4731C3.4396 10.25 4.2231 11.0335 4.2231 12C4.2231 12.9665 3.4396 13.75 2.4731 13.75H1.25V20.5C1.25 20.9142 1.58579 21.25 2 21.25H21.9992C22.4133 21.25 22.7491 20.9143 22.7492 20.5001L22.7501 13.75H21.5255C20.559 13.75 19.7755 12.9665 19.7755 12C19.7755 11.0335 20.559 10.25 21.5255 10.25H22.7501L22.7492 3.4999C22.7491 3.08572 22.4133 2.75 21.9992 2.75H2ZM9.91421 15.5002L15.5006 9.91421L14.0864 8.5L8.5 14.0859L9.91421 15.5002ZM10.5117 8.5H8.50049V10.5H10.5117V8.5ZM15.5005 13.5H13.4893V15.5H15.5005V13.5Z',
};

export const IconCouponPercentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-stroke-rounded IconCouponPercentStrokeRounded"
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

export const IconCouponPercentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-duotone-rounded IconCouponPercentDuotoneRounded"
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

export const IconCouponPercentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-twotone-rounded IconCouponPercentTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCouponPercentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-solid-rounded IconCouponPercentSolidRounded"
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

export const IconCouponPercentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-bulk-rounded IconCouponPercentBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCouponPercentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-stroke-sharp IconCouponPercentStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconCouponPercentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coupon-percent-solid-sharp IconCouponPercentSolidSharp"
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

export const iconPackOfCouponPercent: TheIconSelfPack = {
  name: 'CouponPercent',
  StrokeRounded: IconCouponPercentStrokeRounded,
  DuotoneRounded: IconCouponPercentDuotoneRounded,
  TwotoneRounded: IconCouponPercentTwotoneRounded,
  SolidRounded: IconCouponPercentSolidRounded,
  BulkRounded: IconCouponPercentBulkRounded,
  StrokeSharp: IconCouponPercentStrokeSharp,
  SolidSharp: IconCouponPercentSolidSharp,
};