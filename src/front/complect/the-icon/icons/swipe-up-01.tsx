import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5005 2.00391V8.00156M18.5005 2.00391C17.8003 2.00391 16.492 3.99743 16.0005 4.50293M18.5005 2.00391C19.2007 2.00391 20.509 3.99743 21.0005 4.50293',
  d2: 'M16.8937 21.9882C16.842 20.075 16.9709 19.8446 17.1076 19.419C17.2443 18.9934 18.2006 17.4585 18.539 16.3619C19.6337 12.814 18.6134 12.0594 17.2531 11.0533C15.7446 9.93752 12.8993 9.37245 11.4881 9.49478V3.74357C11.4881 2.78062 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78062 7.99965 3.74357V14.0031L5.93948 11.8237C5.29986 11.1302 4.27194 11.0599 3.57041 11.6907C2.9056 12.2885 2.80858 13.2952 3.347 14.0089L4.63935 15.7218M7.87029 22L7.85076 20.9496C7.8937 19.7183 6.99771 18.9149 5.82913 17.3087C5.74494 17.193 5.66301 17.0811 5.58324 16.9729M5.58324 16.9729C5.22918 16.4924 4.91765 16.0831 4.63935 15.7218M5.58324 16.9729L6.75266 18.5229M5.58324 16.9729L4.63935 15.7218M4.63935 15.7218C4.06798 14.9801 3.63666 14.441 3.26482 13.9055',
  d3: 'M17.9985 17.6892C18.7056 16.2125 19.6732 13.3226 18.3211 11.9618C16.1895 9.81667 13.2082 9.42404 11.5 9.5V3.75C11.5 2.7835 10.7165 2 9.75 2C8.7835 2 8 2.7835 8 3.75V14L5.78341 11.6713C5.05938 11.0311 3.96519 11.1372 3.36948 11.9053C2.87385 12.5444 2.87719 13.4534 3.3775 14.0886L6.65864 18.4236C7.23025 19.1788 7.51608 19.5565 7.6732 19.9973C7.68714 20.0364 7.70028 20.0758 7.71263 20.1155C7.85181 20.5628 7.85181 21.0418 7.85181 22H16.8919V20.382C16.8919 19.4564 17.6159 18.488 17.9985 17.6892Z',
  d4: 'M18.5 2V8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5',
  d5: 'M16.8942 21.9882C16.8425 20.075 16.9714 19.8446 17.1081 19.419C17.2448 18.9934 18.2011 17.4585 18.5395 16.3619C19.6342 12.814 18.6139 12.0594 17.2536 11.0533C15.7451 9.93752 12.8998 9.37245 11.4886 9.49478V3.74357C11.4886 2.78062 10.7077 2 9.74439 2C8.78106 2 8.00014 2.78062 8.00014 3.74357V14.0031L5.93997 11.8237C5.30035 11.1302 4.27243 11.0599 3.5709 11.6907C2.90609 12.2885 2.80907 13.2952 3.34749 14.0089L4.63984 15.7218M4.63984 15.7218C4.91814 16.0831 5.22967 16.4924 5.58373 16.9729M4.63984 15.7218L5.58373 16.9729M4.63984 15.7218C4.06847 14.9801 3.63715 14.441 3.26531 13.9055M7.87078 22L7.85125 20.9496C7.89419 19.7183 6.9982 18.9149 5.82962 17.3087C5.74543 17.193 5.6635 17.0811 5.58373 16.9729M5.58373 16.9729L6.75315 18.5229',
  d6: 'M18.5005 2V8M18.5005 2C17.8003 2 16.492 3.9943 16.0005 4.5M18.5005 2C19.2007 2 20.509 3.9943 21.0005 4.5',
  d7: 'M16.8937 21.9882C16.842 20.075 16.9709 19.8446 17.1076 19.419C17.2443 18.9934 18.2006 17.4585 18.539 16.3619C19.6337 12.814 18.6134 12.0594 17.2531 11.0533C15.7446 9.93752 12.8993 9.37245 11.4881 9.49478V3.74357C11.4881 2.78062 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78062 7.99965 3.74357V14.0031L5.93948 11.8237C5.29986 11.1302 4.27194 11.0599 3.57041 11.6907C2.9056 12.2885 2.80858 13.2952 3.347 14.0089L4.63935 15.7218M4.63935 15.7218C4.91765 16.0831 5.22918 16.4924 5.58324 16.9729M4.63935 15.7218L5.58324 16.9729M4.63935 15.7218C4.06798 14.9801 3.63666 14.441 3.26482 13.9055M7.87029 22L7.85076 20.9496C7.8937 19.7183 6.99771 18.9149 5.82913 17.3087C5.74494 17.193 5.66301 17.0811 5.58324 16.9729M5.58324 16.9729L6.75266 18.5229',
  d8: 'M7.25 3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75V8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.5556 18.2264 18.0742 19.1202 17.9725 19.3235C17.7561 19.7563 17.6419 20.1001 17.6419 20.382V20.382C17.6419 20.6473 17.6419 20.918 17.6248 21.1214C17.6063 21.3409 17.564 21.5809 17.4397 21.8165C17.2752 22.1284 17.0203 22.3833 16.7084 22.5479C16.4727 22.6721 16.2328 22.7145 16.0133 22.7329C15.8098 22.75 15.5662 22.75 15.3009 22.75H9.71641H9.7164C9.40868 22.75 9.12519 22.7501 8.88933 22.7266C8.63272 22.7012 8.16962 22.6003 7.9075 22.3382C7.6375 22.1107 7.48834 21.7789 7.3824 21.5062C7.26927 21.2149 7.14929 20.8294 7.00495 20.3655L7.00494 20.3655C6.89549 20.0584 6.6596 19.6676 6.06062 18.8763L2.78347 14.5465C2.0748 13.641 2.07179 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L7.25 12.1242V3.75Z',
  d9: 'M19.5059 8.25C19.5059 8.80228 19.0581 9.25 18.5059 9.25C17.9536 9.25 17.5059 8.80228 17.5059 8.25L17.5059 5.74996L16.9116 5.74998C16.736 5.75011 16.5203 5.75026 16.3439 5.72819L16.3405 5.72777C16.2141 5.712 15.638 5.64017 15.3637 5.07457C15.0887 4.50775 15.3907 4.00761 15.456 3.8994L15.7951 3.43092C16.0897 3.05509 16.4954 2.54063 16.8759 2.14962C17.0657 1.95451 17.283 1.75328 17.5139 1.59443C17.7191 1.45323 18.0693 1.24996 18.5 1.24996C18.9307 1.24996 19.2809 1.45323 19.4861 1.59443C19.717 1.75328 19.9343 1.95451 20.1241 2.14962C20.5046 2.54063 20.9102 3.05508 21.2049 3.43091L21.544 3.89941C21.6093 4.00761 21.9113 4.50775 21.6363 5.07457C21.362 5.64017 20.7859 5.71201 20.6595 5.72777L20.6561 5.72819C20.4797 5.75026 20.264 5.75011 20.0884 5.74998L19.5059 5.74996L19.5059 8.25Z',
  d10: 'M11.5062 9.52066V3.76942C11.5062 2.7922 10.7167 2 9.74284 2C8.76897 2 7.97949 2.7922 7.97949 3.76942V12.4367M11.5062 9.52066C12.9874 9.46863 14.1152 9.60377 15.6929 10.2551C16.9012 10.7538 18.1795 11.3967 18.717 12.5916C19.26 13.7986 18.9776 15.2365 18.2441 17.0933L16.8568 20.0417V21.9995M11.5062 9.52066V10.2618M7.87531 22V20.0664L3.40208 14.0638C3.06649 13.6135 2.88711 13.0277 3.07789 12.4989C3.09407 12.4541 3.11166 12.4096 3.13096 12.3653C3.36777 11.8221 3.84758 11.357 4.43158 11.2667C4.5783 11.244 4.72836 11.2451 4.88822 11.2672C5.3546 11.3315 5.74602 11.6338 6.06753 11.9789L7.98332 14.035V11.6955',
  d11: 'M18.5 8V3.0066M16 4.5L18.5 2L21 4.5',
  d12: 'M7.10181 20.2492L2.7835 14.5466C2.0748 13.641 2.07178 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L6.30439 11.1308L7.25 12.1242L7.25 3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75L12.25 8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.4835 18.4127 18.2068 18.9899 17.978 19.4671L17.6419 20.1679V22.75L7.10181 22.75V20.2492Z',
  d13: 'M18.543 1.25L21.7502 4.45711L20.3359 5.87132L19.543 5.07843L19.543 8.66421H17.543L17.543 5.07843L16.7502 5.87132L15.3359 4.45711L18.543 1.25Z',
};

export const IconSwipeUp01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-stroke-rounded IconSwipeUp01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeUp01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-duotone-rounded IconSwipeUp01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-twotone-rounded IconSwipeUp01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-solid-rounded IconSwipeUp01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-bulk-rounded IconSwipeUp01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-stroke-sharp IconSwipeUp01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-01-solid-sharp IconSwipeUp01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeUp01: TheIconSelfPack = {
  name: 'SwipeUp01',
  StrokeRounded: IconSwipeUp01StrokeRounded,
  DuotoneRounded: IconSwipeUp01DuotoneRounded,
  TwotoneRounded: IconSwipeUp01TwotoneRounded,
  SolidRounded: IconSwipeUp01SolidRounded,
  BulkRounded: IconSwipeUp01BulkRounded,
  StrokeSharp: IconSwipeUp01StrokeSharp,
  SolidSharp: IconSwipeUp01SolidSharp,
};