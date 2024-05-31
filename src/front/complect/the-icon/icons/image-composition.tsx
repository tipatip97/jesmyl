import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.07523 3.88403C10.2874 4.8348 13.7126 4.8348 16.9248 3.88403C19.517 3.11677 20.813 2.73313 21.4065 3.20921C22 3.68529 22 4.90772 22 7.35256V16.6474C22 19.0923 22 20.3147 21.4065 20.7908C20.813 21.2669 19.5169 20.8832 16.9248 20.116C13.7126 19.1652 10.2874 19.1652 7.07523 20.116C4.48305 20.8832 3.18696 21.2669 2.59348 20.7908C2 20.3147 2 19.0923 2 16.6474V7.35256C2 4.90772 2 3.68529 2.59348 3.20921C3.18696 2.73313 4.48305 3.11677 7.07523 3.88403Z',
  d2: 'M7 20C10.9469 15.8426 15.3824 10.3291 22 14.4643',
  d3: 'M9 8.5C9 9.32843 8.32843 10 7.5 10C6.67157 10 6 9.32843 6 8.5C6 7.67157 6.67157 7 7.5 7C8.32843 7 9 7.67157 9 8.5Z',
  d4: 'M7.07523 3.88403C10.2874 4.8348 13.7126 4.8348 16.9248 3.88403C19.517 3.11677 20.813 2.73313 21.4065 3.20921C22 3.68529 22 4.90772 22 7.35256V14.4679C15.8958 10.6543 11.7124 15.1451 8.00234 19.1277C7.69056 19.4623 7.38213 19.7934 7.07619 20.1157L7.07521 20.116C4.48304 20.8832 3.18696 21.2669 2.59348 20.7908C2 20.3147 2 19.0923 2 16.6474V7.35256C2 4.90772 2 3.68529 2.59348 3.20921C3.18696 2.73313 4.48305 3.11677 7.07523 3.88403ZM7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10Z',
  d5: 'M7 20C10.9469 15.8425 15.3824 10.329 22 14.4642',
  d6: 'M20.0954 4.0643C19.4386 4.18461 18.5286 4.4525 17.2086 4.84321C13.8112 5.84881 10.1888 5.84881 6.79141 4.84321C5.4714 4.4525 4.56137 4.18461 3.90465 4.0643C3.46497 3.98376 3.2745 3.99892 3.21195 4.00797C3.18205 4.06521 3.1145 4.23353 3.06813 4.65284C3.00149 5.25527 3 6.10523 3 7.35287V16.6477C3 17.8954 3.00149 18.7453 3.06813 19.3478C3.1145 19.7671 3.18205 19.9354 3.21195 19.9926C3.27451 20.0017 3.46498 20.0168 3.90465 19.9363C4.56137 19.816 5.4714 19.5481 6.79141 19.1574C10.1888 18.1518 13.8112 18.1518 17.2086 19.1574C18.5286 19.5481 19.4386 19.816 20.0953 19.9363C20.535 20.0168 20.7255 20.0017 20.7881 19.9926C20.818 19.9354 20.8855 19.7671 20.9319 19.3478C20.9985 18.7453 21 17.8954 21 16.6477V7.35287C21 6.10523 20.9985 5.25527 20.9319 4.65284C20.8855 4.23353 20.8179 4.06521 20.788 4.00797C20.7255 3.99892 20.535 3.98376 20.0954 4.0643ZM19.735 2.09704C20.4528 1.96554 21.3516 1.88347 22.0323 2.42948C22.6657 2.93763 22.8422 3.73199 22.9198 4.43297C23 5.15893 23 6.12099 23 7.28963V16.711C23 17.8796 23 18.8417 22.9198 19.5676C22.8422 20.2686 22.6657 21.063 22.0323 21.5711C21.3516 22.1171 20.4528 22.0351 19.735 21.9036C18.9599 21.7616 17.9462 21.4615 16.702 21.0932L16.641 21.0751C13.6141 20.1792 10.3859 20.1792 7.35905 21.0751L7.29791 21.0932C6.05371 21.4615 5.04012 21.7616 4.26504 21.9036C3.54722 22.0351 2.6484 22.1171 1.96775 21.5711C1.33429 21.063 1.15778 20.2686 1.08025 19.5676C0.999954 18.8417 0.999975 17.8796 1 16.711V7.28961C0.999975 6.12097 0.999954 5.15893 1.08025 4.43297C1.15778 3.73199 1.33429 2.93763 1.96775 2.42948C2.6484 1.88347 3.54721 1.96554 4.26504 2.09704C5.04012 2.23903 6.05371 2.53906 7.2979 2.90736L7.35905 2.92546C10.3859 3.8214 13.6141 3.8214 16.641 2.92546L16.7021 2.90736C17.9463 2.53907 18.9599 2.23903 19.735 2.09704Z',
  d7: 'M22.5307 13.6178C20.7432 12.5008 19.0458 12.0068 17.424 12.0198C15.8065 12.0327 14.3475 12.5492 13.0319 13.3188C10.8569 14.5911 8.94021 16.6516 7.24815 18.4707C6.94173 18.8001 6.64266 19.1216 6.35078 19.429C6.05889 19.7365 3.5 21.5015 3.5 21.5015L7.35983 21.0764C10.3867 20.1805 13.6148 20.1805 16.6417 21.0764L16.7028 21.0945C17.947 21.4628 18.9607 21.7629 19.7357 21.9048C20.4536 22.0363 21.3524 22.1184 22.033 21.5724C22.6665 21.0643 22.843 20.2699 22.9205 19.5689C23.0008 18.843 23.0008 17.8809 23.0008 16.7123V13.9115L22.5307 13.6178Z',
  d8: 'M5.5 9C5.5 7.89543 6.39543 7 7.5 7C8.60457 7 9.5 7.89543 9.5 9C9.5 10.1046 8.60457 11 7.5 11C6.39543 11 5.5 10.1046 5.5 9Z',
  d9: 'M22.5307 13.6178C20.7432 12.5008 19.0458 12.0068 17.424 12.0198C15.8065 12.0327 14.3475 12.5492 13.0319 13.3188C10.8569 14.5911 8.94021 16.6516 7.24815 18.4707C6.13188 19.6707 4.85306 20.5682 3.5 21.5015L7.35983 21.0764C10.3867 20.1805 13.6148 20.1805 16.6417 21.0764L16.7028 21.0945C17.947 21.4628 18.9607 21.7629 19.7357 21.9048C20.4536 22.0363 21.3524 22.1184 22.033 21.5724C22.6665 21.0643 22.843 20.2699 22.9205 19.5689C23.0008 18.843 23.0008 17.8809 23.0008 16.7123V13.9115L22.5307 13.6178Z',
  d10: 'M2 3C8.52241 5.66667 15.4776 5.66667 22 3V21C15.4776 18.3333 8.52241 18.3333 2 21V3Z',
  d11: 'M6.5 19.5L16.5 11L22 14.5',
  d12: 'M9 10C9 10.8284 8.32843 11.5 7.5 11.5C6.67157 11.5 6 10.8284 6 10C6 9.17157 6.67157 8.5 7.5 8.5C8.32843 8.5 9 9.17157 9 10Z',
  d13: 'M2.81578 2.57066C2.52141 2.45088 2.18643 2.48487 1.92241 2.66132C1.65839 2.83777 1.5 3.13349 1.5 3.45V20.55C1.5 20.8665 1.65839 21.1622 1.92241 21.3387C2.18643 21.5151 2.52141 21.5491 2.81578 21.4293C8.8102 18.9902 15.1898 18.9902 21.1842 21.4293C21.4786 21.5491 21.8136 21.5151 22.0776 21.3387C22.3416 21.1622 22.5 20.8665 22.5 20.55V3.45C22.5 3.13349 22.3416 2.83777 22.0776 2.66132C21.8136 2.48487 21.4786 2.45088 21.1842 2.57066C15.1898 5.00978 8.8102 5.00978 2.81578 2.57066ZM3.40909 19.1737V4.82634C9.0413 6.79122 14.9587 6.79122 20.5909 4.82634V12.9252L16.2355 10.1668L6.66575 18.2624C5.57243 18.4944 4.48555 18.7981 3.40909 19.1737Z',
  d14: 'M9 9.5C9 10.6046 8.10457 11.5 7 11.5C5.89543 11.5 5 10.6046 5 9.5C5 8.39543 5.89543 7.5 7 7.5C8.10457 7.5 9 8.39543 9 9.5Z',
} as const;

export const IconImageCompositionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-stroke-rounded IconImageCompositionStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconImageCompositionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-duotone-rounded IconImageCompositionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconImageCompositionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-twotone-rounded IconImageCompositionTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageCompositionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-solid-rounded IconImageCompositionSolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageCompositionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-bulk-rounded IconImageCompositionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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

export const IconImageCompositionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-stroke-sharp IconImageCompositionStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageCompositionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-composition-solid-sharp IconImageCompositionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImageComposition: TheIconSelfPack = {
  name: 'ImageComposition',
  StrokeRounded: IconImageCompositionStrokeRounded,
  DuotoneRounded: IconImageCompositionDuotoneRounded,
  TwotoneRounded: IconImageCompositionTwotoneRounded,
  SolidRounded: IconImageCompositionSolidRounded,
  BulkRounded: IconImageCompositionBulkRounded,
  StrokeSharp: IconImageCompositionStrokeSharp,
  SolidSharp: IconImageCompositionSolidSharp,
};