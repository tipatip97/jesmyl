import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.625 14C9.375 16.9167 7.5 19.8333 5 21H16.875C16.875 21 18.75 21 20 19.8333',
  d2: 'M15 14H4',
  d3: 'M18 8.5C18 5.46243 15.5376 3 12.5 3C9.46243 3 7 5.46243 7 8.5C7 11.5376 9.46243 14 12.5 14',
  d4: 'M12.5 4C10.0147 4 8 6.01472 8 8.5C8 10.9853 10.0147 13 12.5 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H11.2755C10.4614 16.7762 9.38502 18.5945 8.0201 20H16.8713L16.8729 20L16.8761 19.9999C16.8831 19.9998 16.8964 19.9994 16.9156 19.9986C16.954 19.997 17.0152 19.9935 17.0946 19.9861C17.2542 19.9712 17.4817 19.941 17.7415 19.8803C18.2752 19.7558 18.869 19.521 19.3177 19.1023C19.7214 18.7254 20.3542 18.7473 20.7311 19.151C21.1079 19.5548 21.0861 20.1876 20.6823 20.5644C19.881 21.3123 18.9123 21.6609 18.196 21.828C17.8308 21.9132 17.5114 21.9559 17.2804 21.9774C17.1437 21.992 16.9532 21.9986 16.875 22H5C4.53117 22 4.12528 21.6743 4.02374 21.2166C3.92219 20.7589 4.15227 20.2921 4.57711 20.0938C6.36872 19.2577 7.88557 17.2986 9.05495 15H4C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13H7.80957C6.6888 11.8321 6 10.2465 6 8.5C6 4.91015 8.91015 2 12.5 2C16.0899 2 19 4.91015 19 8.5C19 9.05228 18.5523 9.5 18 9.5C17.4477 9.5 17 9.05228 17 8.5C17 6.01472 14.9853 4 12.5 4Z',
  d5: 'M11.019 13.0811C11.5266 13.2987 11.7618 13.8865 11.5442 14.3942C10.7035 16.3559 9.54096 18.4343 8.0202 20.0003L16.874 20.0003L16.8714 20.0003L16.8762 20.0002C16.8832 20 16.8965 19.9997 16.9157 19.9989C16.9541 19.9972 17.0153 19.9938 17.0947 19.9864C17.2543 19.9715 17.4818 19.9412 17.7416 19.8806C18.2753 19.7561 18.8691 19.5213 19.3178 19.1025C19.7215 18.7257 20.3543 18.7475 20.7312 19.1513C21.108 19.555 21.0862 20.1878 20.6824 20.5646C19.8811 21.3126 18.9124 21.6611 18.1961 21.8283C17.8309 21.9135 17.5115 21.9561 17.2805 21.9777C17.1645 21.9885 17.0695 21.9942 17.0005 21.9971C16.966 21.9985 16.9378 21.9993 16.9167 21.9998L16.8904 22.0002L16.8814 22.0002L16.8779 22.0003L16.8764 22.0003C16.8761 22.0003 16.8751 22.0003 16.8751 21.0094V22.0003H5.0001C4.53127 22.0003 4.12538 21.6745 4.02384 21.2168C3.92229 20.7591 4.15237 20.2923 4.57721 20.0941C6.72224 19.0931 8.47342 16.4823 9.70595 13.6063C9.92351 13.0987 10.5114 12.8636 11.019 13.0811Z',
  d6: 'M3 14C3 13.4477 3.44772 13 4 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H4C3.44772 15 3 14.5523 3 14Z',
  d7: 'M12.5 4C10.0147 4 8 6.01472 8 8.5C8 10.9853 10.0147 13 12.5 13C13.0523 13 13.5 13.4477 13.5 14C13.5 14.5523 13.0523 15 12.5 15C8.91015 15 6 12.0899 6 8.5C6 4.91015 8.91015 2 12.5 2C16.0899 2 19 4.91015 19 8.5C19 9.05228 18.5523 9.5 18 9.5C17.4477 9.5 17 9.05228 17 8.5C17 6.01472 14.9853 4 12.5 4Z',
  d8: 'M7.5 8.5C7.5 6.01472 9.51472 4 12 4C14.4853 4 16.5 6.01472 16.5 8.5H18.5C18.5 4.91015 15.5899 2 12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 10.2465 6.1888 11.8321 7.30957 13H3.5V15H8.55505C7.38567 17.2986 5.86882 19.2577 4.07721 20.0938C3.65237 20.2921 3.42229 20.7589 3.52384 21.2166C3.62538 21.6743 4.03127 22 4.5001 22H16.6927L16.7228 21.9972C16.9813 21.9732 17.6632 21.9098 18.0137 21.828C18.73 21.6609 19.6986 21.3123 20.5 20.5644L19.1354 19.1023C18.6867 19.521 18.0929 19.7558 17.5592 19.8803C17.2994 19.941 17.0719 19.9712 16.9123 19.9861C16.8329 19.9935 16.73 19.9984 16.6915 20L7.5202 20C8.88512 18.5945 9.96148 16.7762 10.7756 15H14.5V13H12C9.51472 13 7.5 10.9853 7.5 8.5Z',
} as const;

export const IconPoundStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-stroke-rounded IconPoundStrokeRounded"
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

export const IconPoundDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-duotone-rounded IconPoundDuotoneRounded"
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

export const IconPoundTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-twotone-rounded IconPoundTwotoneRounded"
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

export const IconPoundSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-solid-rounded IconPoundSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-bulk-rounded IconPoundBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-stroke-sharp IconPoundStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-solid-sharp IconPoundSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPound: TheIconSelfPack = {
  name: 'Pound',
  StrokeRounded: IconPoundStrokeRounded,
  DuotoneRounded: IconPoundDuotoneRounded,
  TwotoneRounded: IconPoundTwotoneRounded,
  SolidRounded: IconPoundSolidRounded,
  BulkRounded: IconPoundBulkRounded,
  StrokeSharp: IconPoundStrokeSharp,
  SolidSharp: IconPoundSolidSharp,
};