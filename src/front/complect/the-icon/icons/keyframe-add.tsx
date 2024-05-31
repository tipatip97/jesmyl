import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.70914 7.78228C7.76637 6.59409 8.29499 6 9 6C9.70501 6 10.2336 6.59409 11.2909 7.78228L13.891 10.7045C15.297 12.2847 16 13.0747 16 14C16 14.9253 15.297 15.7153 13.891 17.2955L11.2909 20.2177C10.2336 21.4059 9.70501 22 9 22C8.29499 22 7.76637 21.4059 6.70914 20.2177L4.10902 17.2955C2.70301 15.7153 2 14.9253 2 14C2 13.0747 2.70301 12.2847 4.10902 10.7045L6.70914 7.78228Z',
  d2: 'M18.5 9L18.5 2M15 5.5H22',
  d3: 'M7.34219 5.68094C7.78886 5.30447 8.31931 5 9 5C9.68069 5 10.2111 5.30447 10.6578 5.68094C11.0659 6.02486 11.5031 6.51633 11.9931 7.06718L11.9931 7.0672L12.0379 7.11755L14.6799 10.0867C15.3472 10.8367 15.9094 11.4684 16.2965 12.0309C16.7058 12.6256 17 13.2535 17 14C17 14.7465 16.7058 15.3744 16.2965 15.9691C15.9094 16.5316 15.3472 17.1633 14.6799 17.9133L14.6799 17.9133L11.9932 20.9328C11.5031 21.4837 11.0659 21.9751 10.6578 22.3191C10.2111 22.6955 9.68069 23 9 23C8.31931 23 7.78886 22.6955 7.34219 22.3191C6.93413 21.9751 6.49691 21.4837 6.00685 20.9328L3.32014 17.9133L3.32012 17.9133C2.65276 17.1633 2.09062 16.5316 1.70351 15.9691C1.29419 15.3744 1 14.7465 1 14C1 13.2535 1.29419 12.6256 1.70351 12.0309C2.09062 11.4684 2.65276 10.8367 3.32012 10.0867L3.32013 10.0867L3.36194 10.0397L5.96206 7.11755L6.00686 7.0672L6.00686 7.06719C6.49692 6.51633 6.93413 6.02486 7.34219 5.68094Z',
  d4: 'M18.5 1C19.0523 1 19.5 1.44772 19.5 2V4.5H22C22.5523 4.5 23 4.94772 23 5.5C23 6.05228 22.5523 6.5 22 6.5H19.5V9C19.5 9.55228 19.0523 10 18.5 10C17.9477 10 17.5 9.55228 17.5 9L17.5 6.5H15C14.4477 6.5 14 6.05228 14 5.5C14 4.94772 14.4477 4.5 15 4.5H17.5L17.5 2C17.5 1.44772 17.9477 1 18.5 1Z',
  d5: 'M16.0002 14L9.00017 6L2 14L9.00017 22L16.0002 14Z',
  d6: 'M9.75 4.25L17.75 13.25L9.75 22.25L1.75 13.25L9.75 4.25Z',
  d7: 'M19.75 6.25V8.75H17.75L17.75 6.25H15.25V4.25H17.75L17.75 1.75H19.75V4.25H22.25V6.25H19.75Z',
} as const;

export const IconKeyframeAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-stroke-rounded IconKeyframeAddStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-duotone-rounded IconKeyframeAddDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-twotone-rounded IconKeyframeAddTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframeAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-solid-rounded IconKeyframeAddSolidRounded"
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

export const IconKeyframeAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-bulk-rounded IconKeyframeAddBulkRounded"
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

export const IconKeyframeAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-stroke-sharp IconKeyframeAddStrokeSharp"
    >
      <path 
        d={d.d5} 
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

export const IconKeyframeAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframe-add-solid-sharp IconKeyframeAddSolidSharp"
    >
      <path 
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

export const iconPackOfKeyframeAdd: TheIconSelfPack = {
  name: 'KeyframeAdd',
  StrokeRounded: IconKeyframeAddStrokeRounded,
  DuotoneRounded: IconKeyframeAddDuotoneRounded,
  TwotoneRounded: IconKeyframeAddTwotoneRounded,
  SolidRounded: IconKeyframeAddSolidRounded,
  BulkRounded: IconKeyframeAddBulkRounded,
  StrokeSharp: IconKeyframeAddStrokeSharp,
  SolidSharp: IconKeyframeAddSolidSharp,
};