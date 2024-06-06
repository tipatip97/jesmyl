import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.002 4.5C14.3775 4.16667 14.6982 4 15.068 4C15.7661 4 16.2896 4.59409 17.3365 5.78228L19.9113 8.70448C21.3036 10.2847 21.9998 11.0747 21.9998 12C21.9998 12.9253 21.3036 13.7153 19.9113 15.2955L17.3365 18.2177C16.2896 19.4059 15.7661 20 15.068 20C14.6982 20 14.3775 19.8333 14.002 19.5',
  d2: 'M7 5.4398C7.86196 4.47993 8.35392 4 8.98862 4C9.69478 4 10.2243 4.59409 11.2832 5.78228L13.8875 8.70448C15.2959 10.2847 16 11.0747 16 12C16 12.9253 15.2959 13.7153 13.8876 15.2955L11.2832 18.2177C10.2243 19.4059 9.69478 20 8.98862 20C8.35392 20 7.86196 19.5201 7 18.5602',
  d3: 'M2 12H9',
  d4: 'M13.8875 8.70448L11.2832 5.78228C10.2243 4.59409 9.69478 4 8.98862 4C8.35392 4 7.86196 4.47993 7 5.4398V18.5602C7.86196 19.5201 8.35392 20 8.98862 20C9.69478 20 10.2243 19.4059 11.2832 18.2177L13.8876 15.2955C15.2959 13.7153 16 12.9253 16 12C16 11.0747 15.2958 10.2847 13.8875 8.70448Z',
  d5: 'M14.9704 5.02627C14.9103 5.05517 14.814 5.1163 14.6658 5.24785C14.2528 5.6145 13.6208 5.57689 13.2541 5.16386C12.8875 4.75083 12.9251 4.11879 13.3381 3.75215C13.7958 3.34589 14.3459 3 15.068 3C15.7485 3 16.2772 3.30746 16.7196 3.68406C17.1241 4.02827 17.5572 4.51995 18.0423 5.07058C18.0571 5.08739 18.0719 5.10426 18.0869 5.12119L20.703 8.09035C21.3639 8.84034 21.9206 9.47217 22.304 10.0346C22.7096 10.6297 22.9998 11.2563 22.9998 12C22.9998 12.7437 22.7096 13.3703 22.304 13.9654C21.9206 14.5278 21.3639 15.1597 20.703 15.9096L18.0423 18.9294C17.5572 19.4801 17.1241 19.9717 16.7196 20.3159C16.2772 20.6925 15.7485 21 15.068 21C14.3459 21 13.7958 20.6541 13.3381 20.2479C12.9251 19.8812 12.8875 19.2492 13.2541 18.8361C13.6208 18.4231 14.2528 18.3855 14.6658 18.7521C14.814 18.8837 14.9103 18.9448 14.9704 18.9737C15.0193 18.9972 15.0446 19 15.068 19C15.0687 19 15.0695 19 15.0703 19C15.0921 19.0005 15.1775 19.0021 15.4233 18.7929C15.7046 18.5535 16.0425 18.1737 16.5863 17.5566L19.161 14.6344C19.8743 13.8249 20.3465 13.2862 20.6514 12.839C20.9419 12.4126 20.9998 12.1815 20.9998 12C20.9998 11.8185 20.9419 11.5874 20.6514 11.161C20.3465 10.7138 19.8743 10.1751 19.161 9.36558L16.5863 6.44338C16.0425 5.82626 15.7046 5.44645 15.4233 5.20708C15.1775 4.99786 15.0921 4.99954 15.0703 4.99997C15.0695 4.99998 15.0687 5 15.068 5C15.0446 5 15.0193 5.00275 14.9704 5.02627Z',
  d6: 'M1 12C1 11.4477 1.44772 11 2 11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H2C1.44772 13 1 12.5523 1 12Z',
  d7: 'M7.3345 3.68584C7.77626 3.30775 8.30295 3 8.98785 3C9.66858 3 10.1993 3.30397 10.6467 3.68042C11.0554 4.0243 11.4933 4.51574 11.9842 5.06665L14.6752 8.08616C15.3437 8.83612 15.9067 9.46783 16.2944 10.0302C16.7044 10.6249 16.9992 11.253 16.9992 12C16.9992 12.747 16.7044 13.3751 16.2944 13.9698C15.9067 14.5322 15.3436 15.1639 14.6752 15.9139L11.9842 18.9334C11.4933 19.4843 11.0554 19.9757 10.6467 20.3196C10.1993 20.696 9.66858 21 8.98785 21C8.30295 21 7.77625 20.6922 7.3345 20.3142C6.95535 19.9896 6.5463 19.53 6.09007 19.0174L3.32427 15.9139C3.18198 15.7542 3.04445 15.5999 2.91239 15.4505C2.56052 15.0525 2.38459 14.8535 2.46424 14.6767C2.5439 14.5 2.8131 14.5 3.3515 14.5H8.99957C10.3803 14.5 11.4996 13.3807 11.4996 12C11.4996 10.6193 10.3803 9.5 8.99957 9.5H3.35151C2.8131 9.5 2.5439 9.5 2.46425 9.32327C2.38459 9.14655 2.56053 8.94752 2.9124 8.54946C3.04445 8.40007 3.18199 8.24576 3.32426 8.08613L6.09008 4.98263C6.54634 4.46994 6.95533 4.01037 7.3345 3.68584Z',
  d8: 'M7 6.28585L9.00017 4L16.0002 12L9.00017 20L7 17.7142',
  d9: 'M13.5 5.71443L15.0002 4L22.0002 12L15.0002 20L13.5 18.2856',
  d10: 'M12.8066 19.2569L14.4198 21L22.7486 12L14.4198 3L12.8067 4.74313L14.1087 6.20791L14.4198 5.8717L20.091 12L14.4198 18.1283L14.1086 17.7921L12.8066 19.2569Z',
  d11: 'M8.25 13H1.25V11H8.25V13Z',
  d12: 'M17.2504 12L9.2505 3L3.47266 9.5H9.75085V14.5H3.47266L9.2505 21L17.2504 12Z',
};

export const IconKeyframesDoubleRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-stroke-rounded IconKeyframesDoubleRemoveStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-duotone-rounded IconKeyframesDoubleRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-twotone-rounded IconKeyframesDoubleRemoveTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-solid-rounded IconKeyframesDoubleRemoveSolidRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-bulk-rounded IconKeyframesDoubleRemoveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-stroke-sharp IconKeyframesDoubleRemoveStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeyframesDoubleRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keyframes-double-remove-solid-sharp IconKeyframesDoubleRemoveSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKeyframesDoubleRemove: TheIconSelfPack = {
  name: 'KeyframesDoubleRemove',
  StrokeRounded: IconKeyframesDoubleRemoveStrokeRounded,
  DuotoneRounded: IconKeyframesDoubleRemoveDuotoneRounded,
  TwotoneRounded: IconKeyframesDoubleRemoveTwotoneRounded,
  SolidRounded: IconKeyframesDoubleRemoveSolidRounded,
  BulkRounded: IconKeyframesDoubleRemoveBulkRounded,
  StrokeSharp: IconKeyframesDoubleRemoveStrokeSharp,
  SolidSharp: IconKeyframesDoubleRemoveSolidSharp,
};