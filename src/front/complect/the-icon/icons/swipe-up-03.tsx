import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z',
  d2: 'M18.5 2L18.5 8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5',
  d3: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.36036L14.6078 9.73641L14.6306 9.73982C15.5726 9.88112 16.3158 9.9926 16.9068 10.121C17.5075 10.2515 18.0095 10.4108 18.4506 10.6751C19.7281 11.4404 20.75 12.6633 20.75 14.4736C20.75 15.5606 20.4875 16.3446 19.9726 17.8824C19.6188 18.9448 19.2216 20.1359 18.8418 20.6888C18.218 21.5973 17.2978 22.2605 16.2388 22.565C15.5941 22.7504 14.8759 22.7503 13.7561 22.75L12.4266 22.75H12.4265C10.9341 22.7505 9.97018 22.7507 9.09879 22.3915C8.94285 22.3273 8.79043 22.2547 8.6422 22.1742C7.81393 21.7244 7.20629 20.9761 6.26549 19.8175L2.80732 15.5613C2.06869 14.6522 2.06376 13.3511 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d4: 'M19.5059 8.25004C19.5059 8.80232 19.0581 9.25004 18.5059 9.25004C17.9536 9.25004 17.5059 8.80232 17.5059 8.25004L17.5059 5.75L16.9116 5.75002C16.736 5.75014 16.5203 5.7503 16.3439 5.72823L16.3405 5.72781C16.2141 5.71204 15.638 5.64021 15.3637 5.07461C15.0887 4.50779 15.3907 4.00765 15.456 3.89944L15.7951 3.43095C16.0897 3.05513 16.4954 2.54067 16.8759 2.14966C17.0657 1.95455 17.283 1.75331 17.5139 1.59447C17.7191 1.45326 18.0693 1.25 18.5 1.25C18.9307 1.25 19.2809 1.45326 19.4861 1.59447C19.717 1.75331 19.9343 1.95455 20.1241 2.14966C20.5046 2.54067 20.9102 3.05512 21.2049 3.43095L21.544 3.89944C21.6093 4.00765 21.9113 4.50779 21.6363 5.07461C21.362 5.64021 20.7859 5.71204 20.6595 5.72781L20.6561 5.72823C20.4797 5.7503 20.264 5.75014 20.0884 5.75002L19.5059 5.75L19.5059 8.25004Z',
  d5: 'M5.90009 12.6645L8.08793 14.5333V4.61348C8.08793 3.68676 8.91986 2.98926 9.86833 2.98926C10.8163 2.98926 11.5111 3.73962 11.5119 4.66577V10.4974H16.1589C17.7391 10.4974 19.141 12.028 19.0239 13.6118V19.2025C19.0239 20.7463 17.7428 21.9979 16.1625 21.9979H8.0794L3.39375 15.0831C2.87255 14.4475 2.86907 13.5381 3.38539 12.8986C4.00596 12.1302 5.14583 12.024 5.90009 12.6645Z',
  d6: 'M18.5033 7.99696V2.64183M16.0073 4.49987L18.5033 2.00195L20.9992 4.49987',
  d7: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.72757H16C18.0711 9.72757 19.75 11.4065 19.75 13.4776V19C19.75 21.0711 18.0711 22.75 16 22.75H8C7.74931 22.75 7.5152 22.6247 7.37608 22.4162L2.78334 15.5313C2.06867 14.6238 2.07177 13.3411 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d8: 'M18.543 1.25L21.7502 4.45711L20.3359 5.87132L19.543 5.07843L19.543 8.66421H17.543L17.543 5.07843L16.7502 5.87132L15.3359 4.45711L18.543 1.25Z',
} as const;

export const IconSwipeUp03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-stroke-rounded IconSwipeUp03StrokeRounded"
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

export const IconSwipeUp03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-duotone-rounded IconSwipeUp03DuotoneRounded"
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

export const IconSwipeUp03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-twotone-rounded IconSwipeUp03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconSwipeUp03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-solid-rounded IconSwipeUp03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-bulk-rounded IconSwipeUp03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-stroke-sharp IconSwipeUp03StrokeSharp"
    >
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

export const IconSwipeUp03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-03-solid-sharp IconSwipeUp03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeUp03: TheIconSelfPack = {
  name: 'SwipeUp03',
  StrokeRounded: IconSwipeUp03StrokeRounded,
  DuotoneRounded: IconSwipeUp03DuotoneRounded,
  TwotoneRounded: IconSwipeUp03TwotoneRounded,
  SolidRounded: IconSwipeUp03SolidRounded,
  BulkRounded: IconSwipeUp03BulkRounded,
  StrokeSharp: IconSwipeUp03StrokeSharp,
  SolidSharp: IconSwipeUp03SolidSharp,
};