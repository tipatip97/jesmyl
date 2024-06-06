import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.8932 21.9882C17.8415 20.075 17.9704 19.8446 18.1071 19.419C18.2438 18.9934 19.2001 17.4585 19.5385 16.3619C20.6332 12.814 19.6129 12.0594 18.2526 11.0533C16.7441 9.93752 13.8988 9.37245 12.4877 9.49478V3.74357C12.4877 2.78062 11.7067 2 10.7434 2C9.78009 2 8.99916 2.78062 8.99916 3.74357V14.0031L6.93899 11.8237C6.29937 11.1302 5.27146 11.0599 4.56992 11.6907C3.90511 12.2885 3.80809 13.2952 4.34652 14.0089L5.63886 15.7218M8.8698 22L8.85027 20.9496C8.89321 19.7183 7.99722 18.9149 6.82864 17.3087C6.74445 17.193 6.66252 17.0811 6.58275 16.9729M6.58275 16.9729C6.22869 16.4924 5.91716 16.0831 5.63886 15.7218M6.58275 16.9729L7.75217 18.5229M6.58275 16.9729L5.63886 15.7218M5.63886 15.7218C5.06749 14.9801 4.63617 14.441 4.26433 13.9055',
  d2: 'M18.9975 17.6892C19.7046 16.2125 20.6722 13.3226 19.3201 11.9618C17.1885 9.81667 14.2072 9.42404 12.499 9.5V3.75C12.499 2.7835 11.7155 2 10.749 2C9.78252 2 8.99902 2.7835 8.99902 3.75V14L6.78243 11.6713C6.0584 11.0311 4.96421 11.1372 4.3685 11.9053C3.87287 12.5444 3.87621 13.4534 4.37652 14.0886L7.65766 18.4236C8.22927 19.1788 8.5151 19.5565 8.67222 19.9973C8.68616 20.0364 8.6993 20.0758 8.71165 20.1155C8.85083 20.5628 8.85083 21.0418 8.85083 22H17.8909V20.382C17.8909 19.4564 18.6149 18.488 18.9975 17.6892Z',
  d3: 'M17.8932 21.9882C17.8415 20.075 17.9704 19.8446 18.1071 19.419C18.2438 18.9934 19.2001 17.4585 19.5385 16.3619C20.6332 12.814 19.6129 12.0594 18.2526 11.0533C16.7441 9.93752 13.8988 9.37245 12.4877 9.49478V3.74357C12.4877 2.78062 11.7067 2 10.7434 2C9.78009 2 8.99916 2.78062 8.99916 3.74357V14.0031L6.93899 11.8237C6.29937 11.1302 5.27146 11.0599 4.56992 11.6907C3.90511 12.2885 3.80809 13.2952 4.34652 14.0089L5.63886 15.7218M5.63886 15.7218C5.91716 16.0831 6.22869 16.4924 6.58275 16.9729M5.63886 15.7218L6.58275 16.9729M5.63886 15.7218C5.06749 14.9801 4.63617 14.441 4.26433 13.9055M8.8698 22L8.85027 20.9496C8.89321 19.7183 7.99722 18.9149 6.82864 17.3087C6.74445 17.193 6.66252 17.0811 6.58275 16.9729M6.58275 16.9729L7.75217 18.5229',
  d4: 'M17.9321 21.9941C17.8804 20.0809 18.0093 19.8505 18.146 19.4249C18.2827 18.9993 19.239 17.4644 19.5774 16.3678C20.6721 12.8199 19.6518 12.0653 18.2915 11.0592C16.783 9.94338 13.9377 9.37831 12.5266 9.50064V3.74943C12.5266 2.78648 11.7456 2.00586 10.7823 2.00586C9.81902 2.00586 9.03809 2.78648 9.03809 3.74943',
  d5: 'M17.9323 21.9941C17.8806 20.0809 18.0095 19.8505 18.1462 19.4249C18.2829 18.9993 19.2392 17.4644 19.5776 16.3678C20.6723 12.8199 19.652 12.0653 18.2917 11.0592C16.7832 9.94338 13.9379 9.37831 12.5268 9.50064V3.74943C12.5268 2.78648 11.7458 2.00586 10.7825 2.00586C9.81915 2.00586 9.03822 2.78648 9.03822 3.74943V14.009L6.97805 11.8296C6.33843 11.1361 5.31052 11.0658 4.60898 11.6966C3.94417 12.2944 3.84715 13.3011 4.38558 14.0148L5.67792 15.7277M5.67792 15.7277C5.95622 16.089 6.26775 16.4983 6.62181 16.9788M5.67792 15.7277L6.62181 16.9788M5.67792 15.7277C5.10655 14.986 4.67523 14.4469 4.30339 13.9114M8.90886 22.0059L8.88933 20.9555C8.93227 19.7242 8.03628 18.9208 6.8677 17.3146C6.78351 17.1989 6.70158 17.087 6.62181 16.9788M6.62181 16.9788L7.79123 18.5288',
  d6: 'M8.25 3.75C8.25 2.36929 9.36929 1.25 10.75 1.25C12.1307 1.25 13.25 2.36929 13.25 3.75V8.74751C15.1139 8.81064 17.819 9.38616 19.8531 11.4332C20.789 12.3751 20.8445 13.7529 20.6737 14.8931C20.4975 16.0699 20.0471 17.2359 19.6749 18.0131C19.5556 18.2264 19.0742 19.1202 18.9725 19.3235C18.7561 19.7563 18.6419 20.1001 18.6419 20.382V20.382C18.6419 20.6473 18.6419 20.918 18.6248 21.1214C18.6063 21.3409 18.564 21.5809 18.4397 21.8165C18.2752 22.1284 18.0203 22.3833 17.7084 22.5479C17.4727 22.6721 17.2328 22.7145 17.0133 22.7329C16.8098 22.75 16.5662 22.75 16.3009 22.75H10.7164H10.7164C10.4087 22.75 10.1252 22.7501 9.88933 22.7266C9.63272 22.7012 9.16962 22.6003 8.9075 22.3382C8.6375 22.1107 8.48834 21.7789 8.3824 21.5062C8.26927 21.2149 8.14929 20.8294 8.00495 20.3655L8.00494 20.3655C7.89549 20.0584 7.6596 19.6676 7.06062 18.8763L3.78347 14.5465C3.0748 13.641 3.07179 12.3548 3.77682 11.4457C4.63524 10.3388 6.22827 10.1793 7.2802 11.1094L8.25 12.1242V3.75Z',
  d7: 'M12.5062 9.52066V3.76942C12.5062 2.7922 11.7167 2 10.7428 2C9.76897 2 8.97949 2.7922 8.97949 3.76942V12.4367M12.5062 9.52066C13.9874 9.46863 15.1152 9.60377 16.6929 10.2551C17.9012 10.7538 19.1795 11.3967 19.717 12.5916C20.26 13.7986 19.9776 15.2365 19.2441 17.0933L17.8568 20.0417V21.9995M12.5062 9.52066V10.2618M8.87531 22V20.0664L4.40208 14.0638C4.06649 13.6135 3.88711 13.0277 4.07789 12.4989C4.09407 12.4541 4.11166 12.4096 4.13096 12.3653C4.36777 11.8221 4.84758 11.357 5.43158 11.2667C5.5783 11.244 5.72836 11.2451 5.88822 11.2672C6.3546 11.3315 6.74602 11.6338 7.06753 11.9789L8.98332 14.035V11.6955',
  d8: 'M8.25 3.75C8.25 2.36929 9.36929 1.25 10.75 1.25C12.1307 1.25 13.25 2.36929 13.25 3.75V8.74751C15.1139 8.81064 17.819 9.38616 19.8531 11.4332C20.789 12.3751 20.8445 13.7529 20.6737 14.8931C20.4975 16.0699 20.0471 17.2359 19.6749 18.0131L18.6419 20.1678V22.75H8.10181V20.2492L3.78352 14.5466C3.0748 13.6411 3.07177 12.3548 3.77682 11.4457C4.63524 10.3388 6.22827 10.1793 7.2802 11.1094L7.30439 11.1308L8.25 12.1242V3.75Z',
};

export const IconTouch01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-stroke-rounded IconTouch01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-duotone-rounded IconTouch01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconTouch01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-twotone-rounded IconTouch01TwotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconTouch01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-solid-rounded IconTouch01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-bulk-rounded IconTouch01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-stroke-sharp IconTouch01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-01-solid-sharp IconTouch01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch01: TheIconSelfPack = {
  name: 'Touch01',
  StrokeRounded: IconTouch01StrokeRounded,
  DuotoneRounded: IconTouch01DuotoneRounded,
  TwotoneRounded: IconTouch01TwotoneRounded,
  SolidRounded: IconTouch01SolidRounded,
  BulkRounded: IconTouch01BulkRounded,
  StrokeSharp: IconTouch01StrokeSharp,
  SolidSharp: IconTouch01SolidSharp,
};