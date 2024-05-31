import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.3091 18.9975C12.7049 19.6658 12.4029 20 12 20C11.5971 20 11.2951 19.6658 10.6909 18.9975L9.20516 17.3537C8.40172 16.4649 8 16.0205 8 15.5C8 14.9795 8.40172 14.5351 9.20515 13.6463L10.6909 12.0025C11.2951 11.3342 11.5971 11 12 11C12.4029 11 12.7049 11.3342 13.3091 12.0025L14.7948 13.6463C15.5983 14.5351 16 14.9795 16 15.5C16 16.0205 15.5983 16.4649 14.7948 17.3537L13.3091 18.9975Z',
  d2: 'M12 8V4M21 4L3 4',
  d3: 'M10.7824 10.481C11.0792 10.2348 11.4755 10 12 10C12.5245 10 12.9208 10.2348 13.2176 10.481C13.4754 10.6949 13.7442 10.9925 14.0133 11.2904L14.0509 11.332L15.5367 12.9757L15.5741 13.0171C15.9436 13.4258 16.2811 13.799 16.5183 14.1383C16.7774 14.5089 17 14.9514 17 15.5C17 16.0486 16.7774 16.4911 16.5183 16.8617C16.2811 17.201 15.9436 17.5742 15.5741 17.9829L15.5367 18.0243L14.0509 19.668L14.0133 19.7097C13.7442 20.0075 13.4754 20.3051 13.2176 20.519C12.9208 20.7652 12.5245 21 12 21C11.4755 21 11.0792 20.7652 10.7824 20.519C10.5246 20.3051 10.2558 20.0075 9.98669 19.7096L9.94909 19.668L8.4633 18.0243L8.42593 17.983L8.42591 17.9829C8.05636 17.5742 7.71893 17.201 7.48175 16.8617C7.22257 16.4911 7 16.0486 7 15.5C7 14.9514 7.22256 14.5089 7.48175 14.1383C7.71893 13.799 8.05635 13.4258 8.42591 13.0171L8.42591 13.0171L8.4633 12.9757L9.94909 11.332L9.98669 11.2904L9.98669 11.2904C10.2558 10.9925 10.5246 10.6949 10.7824 10.481Z',
  d4: 'M2 4C2 3.44772 2.44772 3 3 3L21 3C21.5523 3 22 3.44772 22 4C22 4.55229 21.5523 5 21 5L13 5V8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8V5L3 5C2.44772 5 2 4.55228 2 4Z',
  d5: 'M8 15.5L12 20L16 15.5L12 11L8 15.5Z',
  d6: 'M12 8V4M12 4L21 4M12 4L3 4',
  d7: 'M11.9996 9.74219L17.003 15.3711L11.9996 21L6.99609 15.3711L11.9996 9.74219Z',
  d8: 'M3 3L21 3V5L13 5V8H11V5L3 5V3Z',
} as const;

export const IconKeyframeTopStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-stroke-rounded IconKeyframeTopStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeTopDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-duotone-rounded IconKeyframeTopDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeTopTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-twotone-rounded IconKeyframeTopTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconKeyframeTopSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-solid-rounded IconKeyframeTopSolidRounded"
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

export const IconKeyframeTopBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-bulk-rounded IconKeyframeTopBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconKeyframeTopStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-stroke-sharp IconKeyframeTopStrokeSharp"
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

export const IconKeyframeTopSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-top-solid-sharp IconKeyframeTopSolidSharp"
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

export const iconPackOfKeyframeTop: TheIconSelfPack = {
  name: 'KeyframeTop',
  StrokeRounded: IconKeyframeTopStrokeRounded,
  DuotoneRounded: IconKeyframeTopDuotoneRounded,
  TwotoneRounded: IconKeyframeTopTwotoneRounded,
  SolidRounded: IconKeyframeTopSolidRounded,
  BulkRounded: IconKeyframeTopBulkRounded,
  StrokeSharp: IconKeyframeTopStrokeSharp,
  SolidSharp: IconKeyframeTopSolidSharp,
};