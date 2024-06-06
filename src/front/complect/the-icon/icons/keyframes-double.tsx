import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.002 4.5C14.3775 4.16667 14.6982 4 15.068 4C15.7661 4 16.2896 4.59409 17.3365 5.78228L19.9113 8.70448C21.3036 10.2847 21.9998 11.0747 21.9998 12C21.9998 12.9253 21.3036 13.7153 19.9113 15.2955L17.3365 18.2177C16.2896 19.4059 15.7661 20 15.068 20C14.6982 20 14.3775 19.8333 14.002 19.5',
  d2: 'M6.70914 5.78228C7.76637 4.59409 8.29499 4 9 4C9.70501 4 10.2336 4.59409 11.2909 5.78228L13.891 8.70448C15.297 10.2847 16 11.0747 16 12C16 12.9253 15.297 13.7153 13.891 15.2955L11.2909 18.2177C10.2336 19.4059 9.70501 20 9 20C8.29499 20 7.76637 19.4059 6.70914 18.2177L4.10902 15.2955C2.70301 13.7153 2 12.9253 2 12C2 11.0747 2.70301 10.2847 4.10902 8.70448L6.70914 5.78228Z',
  d3: 'M14.9704 5.02627C14.9103 5.05517 14.814 5.1163 14.6658 5.24785C14.2528 5.6145 13.6208 5.57689 13.2541 5.16386C12.8875 4.75083 12.9251 4.11879 13.3381 3.75215C13.7958 3.34589 14.3459 3 15.068 3C15.7485 3 16.2772 3.30746 16.7196 3.68406C17.1241 4.02827 17.5572 4.51995 18.0423 5.07058C18.0571 5.08739 18.0719 5.10426 18.0869 5.12119L20.703 8.09035C21.3639 8.84034 21.9206 9.47217 22.304 10.0346C22.7096 10.6297 22.9998 11.2563 22.9998 12C22.9998 12.7437 22.7096 13.3703 22.304 13.9654C21.9206 14.5278 21.3639 15.1597 20.703 15.9096L18.0423 18.9294C17.5572 19.4801 17.1241 19.9717 16.7196 20.3159C16.2772 20.6925 15.7485 21 15.068 21C14.3459 21 13.7958 20.6541 13.3381 20.2479C12.9251 19.8812 12.8875 19.2492 13.2541 18.8361C13.6208 18.4231 14.2528 18.3855 14.6658 18.7521C14.814 18.8837 14.9103 18.9448 14.9704 18.9737C15.0193 18.9972 15.0446 19 15.068 19C15.0687 19 15.0695 19 15.0703 19C15.0921 19.0005 15.1775 19.0021 15.4233 18.7929C15.7046 18.5535 16.0425 18.1737 16.5863 17.5566L19.161 14.6344C19.8743 13.8249 20.3465 13.2862 20.6514 12.839C20.9419 12.4126 20.9998 12.1815 20.9998 12C20.9998 11.8185 20.9419 11.5874 20.6514 11.161C20.3465 10.7138 19.8743 10.1751 19.161 9.36558L16.5863 6.44338C16.0425 5.82626 15.7046 5.44645 15.4233 5.20708C15.1775 4.99786 15.0921 4.99954 15.0703 4.99997C15.0695 4.99998 15.0687 5 15.068 5C15.0446 5 15.0193 5.00275 14.9704 5.02627Z',
  d4: 'M7.34219 3.68094C7.78886 3.30447 8.31931 3 9 3C9.68069 3 10.2111 3.30447 10.6578 3.68094C11.0659 4.02486 11.5031 4.51633 11.9931 5.06718L11.9931 5.0672L14.6799 8.08672C15.3472 8.8367 15.9094 9.46844 16.2965 10.0309C16.7058 10.6256 17 11.2535 17 12C17 12.7465 16.7058 13.3744 16.2965 13.9691C15.9094 14.5316 15.3472 15.1633 14.6799 15.9133L14.6799 15.9133L11.9932 18.9328C11.5031 19.4837 11.0659 19.9751 10.6578 20.3191C10.2111 20.6955 9.68069 21 9 21C8.31931 21 7.78886 20.6955 7.34219 20.3191C6.93413 19.9751 6.49691 19.4837 6.00685 18.9328L3.32014 15.9133L3.32012 15.9133C2.65276 15.1633 2.09062 14.5316 1.70351 13.9691C1.29419 13.3744 1 12.7465 1 12C1 11.2535 1.29419 10.6256 1.70351 10.0309C2.09062 9.46844 2.65276 8.83672 3.32012 8.08674L3.32013 8.08673L6.00686 5.0672L6.00686 5.06719C6.49692 4.51633 6.93413 4.02486 7.34219 3.68094Z',
  d5: 'M13.499 5.71443L14.9992 4L21.9992 12L14.9992 20L13.499 18.2856',
  d6: 'M15.9992 12L8.99919 4L1.99902 12L8.99919 20L15.9992 12Z',
  d7: 'M9.25107 3L17.251 12L9.25107 21L1.25098 12L9.25107 3Z',
  d8: 'M12.8076 19.2569L14.4208 21L22.7496 12L14.4208 3L12.8076 4.74313L14.1096 6.20791L14.4208 5.8717L20.092 12L14.4208 18.1283L14.1096 17.7921L12.8076 19.2569Z',
};

export const IconKeyframesDoubleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-stroke-rounded IconKeyframesDoubleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-duotone-rounded IconKeyframesDoubleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-twotone-rounded IconKeyframesDoubleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-solid-rounded IconKeyframesDoubleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconKeyframesDoubleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-bulk-rounded IconKeyframesDoubleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconKeyframesDoubleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-stroke-sharp IconKeyframesDoubleStrokeSharp"
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

export const IconKeyframesDoubleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-solid-sharp IconKeyframesDoubleSolidSharp"
    >
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

export const iconPackOfKeyframesDouble: TheIconSelfPack = {
  name: 'KeyframesDouble',
  StrokeRounded: IconKeyframesDoubleStrokeRounded,
  DuotoneRounded: IconKeyframesDoubleDuotoneRounded,
  TwotoneRounded: IconKeyframesDoubleTwotoneRounded,
  SolidRounded: IconKeyframesDoubleSolidRounded,
  BulkRounded: IconKeyframesDoubleBulkRounded,
  StrokeSharp: IconKeyframesDoubleStrokeSharp,
  SolidSharp: IconKeyframesDoubleSolidSharp,
};