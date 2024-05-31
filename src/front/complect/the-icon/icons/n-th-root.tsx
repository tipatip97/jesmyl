import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 7H13.6138C12.3798 7 11.965 7.1398 11.659 8.36394L9.33913 17.6416C8.78948 19.8398 8.51466 20.9389 7.78481 20.9976C7.05496 21.0564 6.55032 20.02 5.54104 17.9472L4.97014 16.7748C4.53541 15.882 4.31804 15.4356 3.87855 15.3147C3.21709 15.1327 2.5084 15.6703 2 16',
  d2: 'M3 9V5.57143M3 5.57143C3 4.15127 4.11929 3 5.5 3C6.88071 3 8 4.15127 8 5.57143V9M3 5.57143V3',
  d3: 'M12.8286 8.06537C12.8044 8.0953 12.726 8.2194 12.6292 8.60652L10.2894 17.964L10.2894 17.964C10.0317 18.9949 9.8112 19.8771 9.55473 20.5017C9.3091 21.1 8.84915 21.9152 7.86514 21.9944C6.90399 22.0718 6.30228 21.3714 5.93803 20.8298C5.55523 20.2606 5.15176 19.4319 4.67686 18.4565L4.07118 17.2126C3.84002 16.7378 3.71332 16.4836 3.60185 16.3213C3.59036 16.3045 3.58051 16.291 3.57227 16.2802C3.52794 16.2857 3.44518 16.3053 3.30934 16.3695C3.12063 16.4587 2.94899 16.5722 2.73894 16.7111L2.73893 16.7111L2.73891 16.7112C2.67774 16.7516 2.6133 16.7942 2.54424 16.839C2.08087 17.1395 1.46162 17.0075 1.16111 16.5441C0.860602 16.0808 0.992625 15.4615 1.45599 15.161C1.49096 15.1383 1.53164 15.1113 1.57709 15.081L1.57718 15.081C1.7946 14.9363 2.12127 14.7189 2.45465 14.5614C2.86383 14.368 3.47373 14.1661 4.14393 14.3505C4.67439 14.4964 5.01216 14.8419 5.25065 15.1893C5.45723 15.4901 5.64876 15.8837 5.84335 16.2836L5.86934 16.337L6.44023 17.5094C6.95948 18.5758 7.30264 19.275 7.59764 19.7137C7.62443 19.7535 7.64911 19.7886 7.67171 19.8194C7.68216 19.7958 7.69313 19.77 7.7046 19.7421C7.89882 19.2691 8.08581 18.532 8.36912 17.399L10.6889 8.12137C10.8539 7.46155 11.1123 6.78497 11.7527 6.37858C12.3305 6.01195 13.0383 6 13.6139 6H22.0001C22.5524 6 23.0001 6.44772 23.0001 7C23.0001 7.55228 22.5524 8 22.0001 8H13.6139C13.3138 8 13.1181 8.00931 12.9777 8.03014C12.8852 8.04387 12.8428 8.05919 12.8286 8.06537Z',
  d4: 'M3.82448 2.43394C3.64419 2.17185 3.34216 2 3 2C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10C3.55228 10 4 9.55228 4 9V5.57143C4 4.67681 4.69794 4 5.5 4C6.30206 4 7 4.67681 7 5.57143V9C7 9.55228 7.44772 10 8 10C8.55228 10 9 9.55228 9 9V5.57143C9 3.62573 7.45936 2 5.5 2C4.88954 2 4.31972 2.15781 3.82448 2.43394Z',
  d5: 'M22 7.06266L12 7.0625L7.5 21.2477L4 15.1683L2 17.195',
  d6: 'M3.00391 9.08966V5.26754M3.00391 5.26754V2.25M3.00391 5.26754C3.23236 3.86443 4.38205 2.99552 5.51514 2.99552C6.82454 2.99552 8.00341 4.21018 8.00341 5.51791V9.08649',
  d7: 'M11.7551 6.69399C11.888 6.28043 12.2728 5.99999 12.7072 6L22.0001 6.00016L22.0001 8.00016L13.4361 8.00001L9.15916 21.306C9.03838 21.6818 8.70785 21.9514 8.31546 21.9941C7.92307 22.0369 7.54224 21.8448 7.34336 21.5039L4.49701 16.6244L3.41427 17.7072L2 16.2931L4 14.2929C4.21927 14.0736 4.52787 13.9685 4.83542 14.0083C5.14297 14.048 5.41466 14.2283 5.57091 14.4961L7.9412 18.5595L11.7551 6.69399Z',
  d8: 'M4 2.34258V2H2V9H4V5.57143C4 4.67681 4.69794 4 5.5 4C6.30206 4 7 4.67681 7 5.57143V9H9V5.57143C9 3.62573 7.45936 2 5.5 2C4.96044 2 4.45263 2.12328 4 2.34258Z',
} as const;

export const IconNThRootStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-stroke-rounded IconNThRootStrokeRounded"
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

export const IconNThRootDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-duotone-rounded IconNThRootDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-twotone-rounded IconNThRootTwotoneRounded"
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

export const IconNThRootSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-solid-rounded IconNThRootSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-bulk-rounded IconNThRootBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-stroke-sharp IconNThRootStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-solid-sharp IconNThRootSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfNThRoot: TheIconSelfPack = {
  name: 'NThRoot',
  StrokeRounded: IconNThRootStrokeRounded,
  DuotoneRounded: IconNThRootDuotoneRounded,
  TwotoneRounded: IconNThRootTwotoneRounded,
  SolidRounded: IconNThRootSolidRounded,
  BulkRounded: IconNThRootBulkRounded,
  StrokeSharp: IconNThRootStrokeSharp,
  SolidSharp: IconNThRootSolidSharp,
};