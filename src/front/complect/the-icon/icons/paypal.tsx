import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2H9.62312C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z',
  d2: 'M8.24315 19.4998L8.01451 20.8325C7.90978 21.4429 8.38532 21.9998 9.01128 21.9998H11.0018C11.4961 21.9998 11.9179 21.6464 11.9991 21.1642L12.7285 16.8354C12.8098 16.3533 13.2316 15.9998 13.7258 15.9998H15.5289C18.11 15.9998 20.3448 14.2267 20.9047 11.7345C21.2967 9.99004 20.4437 8.30993 19 7.50098',
  d3: 'M8.24315 19.4989L8.01451 20.8316C7.90978 21.442 8.38532 21.9989 9.01128 21.9989H11.0018C11.4961 21.9989 11.9179 21.6455 11.9991 21.1633L12.7285 16.8345C12.8098 16.3523 13.2316 15.9989 13.7258 15.9989H15.5289C18.11 15.9989 20.3448 14.2257 20.9047 11.7335C21.2967 9.98906 20.4437 8.30895 19 7.5',
  d4: 'M11.9156 14.9999C15.6577 14.9999 18.9461 12.5064 20.1153 9.00432C20.2395 8.63222 20.3016 8.44617 20.4362 8.43781C20.5708 8.42945 20.6476 8.58988 20.8011 8.91075C21.2273 9.80152 21.3738 10.8393 21.1358 11.899C20.4978 14.7388 17.9548 16.75 15.0282 16.75H13.225C13.091 16.75 12.9868 16.8448 12.9674 16.9602L12.2379 21.289C12.0949 22.138 11.3555 22.75 10.5011 22.75H8.51054C7.96887 22.75 7.48773 22.5075 7.16574 22.1298C7.10873 22.063 7.15499 21.9644 7.24216 21.9534C7.69411 21.896 8.30556 21.7449 8.85849 21.2629C9.41025 20.7819 9.64358 20.198 9.7629 19.7605C9.8606 19.4023 9.91934 18.9879 9.96785 18.6458L10.447 15.2747C10.4473 15.1831 10.5091 14.9999 10.7535 14.9999H11.9156ZM18.3496 7.97925C19.128 4.53682 16.5253 1.25 13.001 1.25H9.091H9.09098C8.56142 1.24999 8.11583 1.24998 7.74945 1.28224C7.36397 1.31619 7.00322 1.38975 6.65982 1.5736C6.31433 1.75858 6.01257 2.01561 5.77466 2.3272C5.53846 2.63654 5.4074 2.98093 5.31095 3.35664C5.21917 3.71412 5.14599 4.15548 5.05889 4.68085L2.91715 17.5971C2.83441 18.0958 2.75976 18.5457 2.75092 18.9135C2.7413 19.3139 2.8034 19.7531 3.12078 20.1297C3.4388 20.507 3.86153 20.6417 4.25801 20.6983C4.58564 20.745 4.98742 20.7496 5.43168 20.75C5.7611 20.7496 6.06641 20.7461 6.32329 20.7135C6.64349 20.6728 6.98078 20.5779 7.27568 20.3208C7.57014 20.0641 7.71061 19.7431 7.79551 19.4318C7.87222 19.1505 7.92153 18.8033 7.97476 18.4285L7.97476 18.4285L8.44798 15.0989C8.48774 14.8192 8.50007 14.741 8.5156 14.6816C8.6462 14.1817 9.06732 13.5668 9.57278 13.5082C9.63275 13.5012 9.71066 13.5 9.9921 13.5L11.1541 13.5C14.6021 13.5 17.587 11.3522 18.3496 7.97925ZM5.43168 20.75L5.37872 20.75H5.49373L5.43168 20.75Z',
  d5: 'M13.001 1.25C16.5253 1.25 19.128 4.53682 18.3496 7.97925C17.587 11.3522 14.6021 13.5 11.1541 13.5H9.9921C9.71066 13.5 9.63275 13.5012 9.57278 13.5082C9.06732 13.5668 8.6462 14.1817 8.5156 14.6816C8.50007 14.741 8.48774 14.8192 8.44798 15.0989L7.97476 18.4285L7.97476 18.4285C7.92153 18.8033 7.87222 19.1505 7.79551 19.4318C7.71061 19.7431 7.57014 20.0641 7.27568 20.3208C6.98078 20.5779 6.64349 20.6728 6.32329 20.7135C6.06641 20.7461 5.7611 20.7496 5.43168 20.75C5.45227 20.75 5.47296 20.75 5.49373 20.75H5.37872C5.35552 20.75 5.33221 20.75 5.30879 20.75H5.37872C5.39644 20.75 5.4141 20.75 5.43168 20.75C4.98742 20.7496 4.58564 20.745 4.25801 20.6983C3.86153 20.6417 3.4388 20.507 3.12078 20.1297C2.8034 19.7531 2.7413 19.3139 2.75092 18.9135C2.75976 18.5457 2.83441 18.0958 2.91715 17.5971L5.05889 4.68085C5.14599 4.15548 5.21917 3.71411 5.31095 3.35664C5.4074 2.98093 5.53846 2.63654 5.77466 2.3272C6.01257 2.01561 6.31433 1.75857 6.65982 1.5736C7.00322 1.38975 7.36397 1.31619 7.74945 1.28224C8.11583 1.24998 8.56142 1.24999 9.09098 1.25H9.091H13.001Z',
  d6: 'M5.30879 20.75C5.33221 20.75 5.35552 20.75 5.37872 20.75H5.30879Z',
  d7: 'M20.1153 9.00432C18.9461 12.5064 15.6577 14.9999 11.9156 14.9999H10.7535C10.5091 14.9999 10.4473 15.1831 10.447 15.2747L9.96785 18.6458C9.91934 18.9879 9.8606 19.4023 9.7629 19.7605C9.64358 20.198 9.41025 20.7819 8.85849 21.2629C8.30556 21.7449 7.69411 21.896 7.24216 21.9534C7.15499 21.9644 7.10873 22.063 7.16574 22.1298C7.48773 22.5075 7.96887 22.75 8.51054 22.75H10.5011C11.3555 22.75 12.0949 22.138 12.2379 21.289L12.9674 16.9602C12.9868 16.8448 13.091 16.75 13.225 16.75H15.0282C17.9548 16.75 20.4978 14.7388 21.1358 11.899C21.3738 10.8393 21.2273 9.80152 20.8011 8.91075C20.6476 8.58988 20.5708 8.42945 20.4362 8.43781C20.3016 8.44617 20.2395 8.63222 20.1153 9.00432Z',
  d8: 'M7.99861 20.0129L9.52032 12.9834H12.8537C13.5041 12.9834 14.1585 12.8938 14.7515 12.628C17.8857 11.223 18.7226 8.73261 19.0477 7.39587M7.99861 20.0129H3.00183L7.02203 1.99805L14.2513 2.13173C14.8434 2.14268 15.4399 2.19251 15.9973 2.39182C17.9438 3.08787 19.465 4.68627 19.0477 7.39587M7.99861 20.0129L7.49889 22.002H11.5645L13.0459 16.0073C21.9458 17.0709 22.4597 9.25724 19.0477 7.39587',
  d9: 'M6.40856 1.83727C6.48403 1.49413 6.78518 1.25 7.13299 1.25H14.3197C17.8069 1.25 20.3823 4.53682 19.6121 7.97925C18.8574 11.3522 15.904 13.75 12.4923 13.75H10.2057L8.72151 20.7501H2.24902L6.40856 1.83727Z',
  d10: 'M11.1161 14.9998H12.4165C16.4528 14.9998 19.9406 12.1933 20.8312 8.25478C20.8383 8.22323 20.8452 8.19169 20.8519 8.16016C21.6076 9.18779 21.9455 10.525 21.6368 11.899C20.9988 14.7387 18.4558 16.7499 15.5292 16.7499H13.5858L12.0847 22.7499H9.46582L11.1161 14.9998Z',
};

export const IconPaypalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-stroke-rounded IconPaypalStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPaypalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-duotone-rounded IconPaypalDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaypalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-twotone-rounded IconPaypalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaypalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-solid-rounded IconPaypalSolidRounded"
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

export const IconPaypalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-bulk-rounded IconPaypalBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaypalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-stroke-sharp IconPaypalStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaypalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paypal-solid-sharp IconPaypalSolidSharp"
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

export const iconPackOfPaypal: TheIconSelfPack = {
  name: 'Paypal',
  StrokeRounded: IconPaypalStrokeRounded,
  DuotoneRounded: IconPaypalDuotoneRounded,
  TwotoneRounded: IconPaypalTwotoneRounded,
  SolidRounded: IconPaypalSolidRounded,
  BulkRounded: IconPaypalBulkRounded,
  StrokeSharp: IconPaypalStrokeSharp,
  SolidSharp: IconPaypalSolidSharp,
};