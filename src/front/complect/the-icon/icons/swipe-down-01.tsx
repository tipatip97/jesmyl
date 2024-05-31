import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5',
  d2: 'M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22',
  d3: 'M17.9985 17.6892C18.7056 16.2125 19.6732 13.3226 18.3211 11.9618C16.1895 9.81667 13.2082 9.42404 11.5 9.5V3.75C11.5 2.7835 10.7165 2 9.75 2C8.7835 2 8 2.7835 8 3.75V14L5.78341 11.6713C5.05938 11.0311 3.96519 11.1372 3.36948 11.9053C2.87385 12.5444 2.87719 13.4534 3.3775 14.0886L6.65864 18.4236C7.23025 19.1788 7.51608 19.5565 7.6732 19.9973C7.68714 20.0364 7.70028 20.0758 7.71263 20.1155C7.85181 20.5628 7.85181 21.0418 7.85181 22H16.8919V20.382C16.8919 19.4564 17.6159 18.488 17.9985 17.6892Z',
  d4: 'M7.8348 22V21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937V3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057V9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22',
  d5: 'M7.25 3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75V8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.5556 18.2264 18.0742 19.1202 17.9725 19.3235C17.7561 19.7563 17.6419 20.1001 17.6419 20.382V20.382C17.6419 20.6473 17.6419 20.918 17.6248 21.1214C17.6063 21.3409 17.564 21.5809 17.4397 21.8165C17.2752 22.1284 17.0203 22.3833 16.7084 22.5479C16.4727 22.6721 16.2328 22.7145 16.0133 22.7329C15.8098 22.75 15.5662 22.75 15.3009 22.75H9.71641H9.7164C9.40868 22.75 9.12519 22.7501 8.88933 22.7266C8.63272 22.7012 8.16962 22.6003 7.9075 22.3382C7.6375 22.1107 7.48834 21.7789 7.3824 21.5062C7.26927 21.2149 7.14929 20.8294 7.00495 20.3655L7.00494 20.3655C6.89549 20.0584 6.6596 19.6676 6.06062 18.8763L2.78347 14.5465C2.0748 13.641 2.07179 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L7.25 12.1242V3.75Z',
  d6: 'M19.5059 2.25C19.5059 1.69772 19.0581 1.25 18.5059 1.25C17.9536 1.25 17.5059 1.69772 17.5059 2.25L17.5059 4.75004L16.9116 4.75002C16.736 4.74989 16.5203 4.74974 16.3439 4.77181L16.3405 4.77223C16.2141 4.788 15.638 4.85983 15.3637 5.42543C15.0887 5.99225 15.3907 6.49239 15.456 6.6006L15.7951 7.06908C16.0897 7.44491 16.4954 7.95937 16.8759 8.35038C17.0657 8.54549 17.283 8.74672 17.5139 8.90557C17.7191 9.04677 18.0693 9.25004 18.5 9.25004C18.9307 9.25004 19.2809 9.04677 19.4861 8.90557C19.717 8.74672 19.9343 8.54549 20.1241 8.35038C20.5046 7.95937 20.9102 7.44492 21.2049 7.06909L21.544 6.60059C21.6093 6.49239 21.9113 5.99225 21.6363 5.42543C21.362 4.85983 20.7859 4.78799 20.6595 4.77223L20.6561 4.77181C20.4797 4.74974 20.264 4.74989 20.0884 4.75002L19.5059 4.75004L19.5059 2.25Z',
  d7: 'M18.5 2V7.20972M16 5.5L18.5 8L21 5.5',
  d8: 'M11.5062 9.52066V3.76942C11.5062 2.7922 10.7167 2 9.74284 2C8.76897 2 7.97949 2.7922 7.97949 3.76942V12.4367M11.5062 9.52066C12.9874 9.46863 14.1152 9.60377 15.6929 10.2551C16.9012 10.7538 18.1795 11.3967 18.717 12.5916C19.26 13.7986 18.9776 15.2365 18.2441 17.0933L16.8568 20.0417V21.9995M11.5062 9.52066V10.2618M7.87531 22V20.0664L3.40208 14.0638C3.06649 13.6135 2.88711 13.0277 3.07789 12.4989C3.09407 12.4541 3.11166 12.4096 3.13096 12.3653C3.36777 11.8221 3.84758 11.357 4.43158 11.2667C4.5783 11.244 4.72836 11.2451 4.88822 11.2672C5.3546 11.3315 5.74602 11.6338 6.06753 11.9789L7.98332 14.035V11.6955',
  d9: 'M7.10181 20.2492L2.7835 14.5466C2.0748 13.641 2.07178 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L6.30439 11.1308L7.25 12.1242L7.25 3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75L12.25 8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.4835 18.4127 18.2068 18.9899 17.978 19.4671L17.6419 20.1679V22.75L7.10181 22.75V20.2492Z',
  d10: 'M18.543 8.66434L21.7502 5.45723L20.3359 4.04302L19.543 4.83591L19.543 1.25012H17.543L17.543 4.83591L16.7502 4.04302L15.3359 5.45723L18.543 8.66434Z',
} as const;

export const IconSwipeDown01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-stroke-rounded IconSwipeDown01StrokeRounded"
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

export const IconSwipeDown01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-duotone-rounded IconSwipeDown01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-twotone-rounded IconSwipeDown01TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-solid-rounded IconSwipeDown01SolidRounded"
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

export const IconSwipeDown01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-bulk-rounded IconSwipeDown01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeDown01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-stroke-sharp IconSwipeDown01StrokeSharp"
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

export const IconSwipeDown01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-01-solid-sharp IconSwipeDown01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeDown01: TheIconSelfPack = {
  name: 'SwipeDown01',
  StrokeRounded: IconSwipeDown01StrokeRounded,
  DuotoneRounded: IconSwipeDown01DuotoneRounded,
  TwotoneRounded: IconSwipeDown01TwotoneRounded,
  SolidRounded: IconSwipeDown01SolidRounded,
  BulkRounded: IconSwipeDown01BulkRounded,
  StrokeSharp: IconSwipeDown01StrokeSharp,
  SolidSharp: IconSwipeDown01SolidSharp,
};