import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 11.5004L8 12.5004C8 13.605 8.89543 14.5004 10 14.5004M10 14.5004L11 14.5004M10 14.5004C9.44772 14.5004 9 14.9481 9 15.5004C9 16.605 9.89543 17.5004 11 17.5004M11 17.5004L12 17.5004M11 17.5004C10.4765 17.5004 10.0783 17.9705 10.1644 18.4868L10.2215 18.8292C10.3822 19.7936 11.2166 20.5004 12.1943 20.5004L13.6668 20.5C15.8402 20.5 16.9269 20.5 17.792 20.1689C18.2939 19.9769 18.9339 19.4703 19.3964 19.0652C19.7964 18.7148 20.3038 18.5 20.8356 18.5L22.0002 18.5M10 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9',
  d2: 'M8 12.5004L8 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9L22.0002 18.5L20.8356 18.5C20.3038 18.5 19.7964 18.7148 19.3964 19.0652C18.9339 19.4703 18.2939 19.9769 17.792 20.1689C16.9269 20.5 15.8402 20.5 13.6668 20.5L12.1943 20.5004C11.2166 20.5004 10.3822 19.7936 10.2215 18.8292L10.1644 18.4868C10.0783 17.9705 10.4765 17.5004 11 17.5004C9.89543 17.5004 9 16.605 9 15.5004C9 14.9481 9.44772 14.5004 10 14.5004C8.89543 14.5004 8 13.605 8 12.5004Z',
  d3: 'M8 11.5004L8 12.5004C8 13.605 8.89543 14.5004 10 14.5004L11 14.5004M10 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9',
  d4: 'M2.5358 8.14194H13.6336C13.8031 8.14194 13.9559 8.03738 14.0207 7.87707C14.0854 7.71677 14.0494 7.53233 13.9293 7.40987L12.1139 5.55815C11.4947 4.9265 11.551 3.88646 12.2351 3.32817C12.4905 3.1198 12.7975 3.01015 13.1073 3C13.2538 3.00439 13.4 3.02191 13.5441 3.05258C13.654 3.08328 13.7612 3.12725 13.8633 3.18452L19.1094 7.09541C19.4192 7.33787 19.8241 7.54612 20.2805 7.70238L20.3098 7.7124C20.8148 7.88532 21.2341 8.02889 21.5482 8.16329C21.842 8.28895 22.199 8.46618 22.424 8.7811C22.6321 9.07226 22.6958 9.40172 22.7235 9.69193C22.7502 9.9723 22.7502 10.3204 22.7502 10.7149L22.7502 17.116C22.7503 17.2357 22.7504 17.3601 22.7356 17.4745C22.6332 18.262 22.0133 18.8819 21.2257 18.9843C21.1114 18.9992 20.9553 18.999 20.8356 18.9989C20.5078 18.9989 20.1715 19.1321 19.8905 19.3782C19.4361 19.7763 18.7036 20.372 18.06 20.6183C17.5271 20.8222 16.9544 20.9124 16.2675 20.956C15.5923 20.9989 14.7575 20.9989 13.6928 20.9989L12.1943 20.9993C10.8499 20.9993 9.70267 20.0274 9.48167 18.7014C9.4578 18.5582 9.56823 18.4279 9.7134 18.4279H12.0003C12.2316 18.4279 12.4191 18.236 12.4191 17.9993C12.4191 17.7626 12.2316 17.5707 12.0003 17.5707H9.66985C9.57967 17.5707 9.53458 17.5707 9.49092 17.5571C9.44726 17.5435 9.41241 17.5194 9.34272 17.4712C8.7756 17.0788 8.3934 16.6518 8.29363 15.5993C8.26812 15.3302 8.25537 15.1956 8.34464 15.0975C8.4339 14.9994 8.5785 14.9994 8.86771 14.9994H10.8834C11.1147 14.9994 11.3022 14.8075 11.3022 14.5708C11.3022 14.3341 11.1147 14.1423 10.8834 14.1423H8.26291C8.13208 14.1423 8.06666 14.1423 8.00458 14.1121C7.94249 14.0819 7.90723 14.0371 7.83671 13.9473C7.4692 13.4798 7.25 12.8902 7.25 12.2493C7.2556 12.1335 7.29455 11.9551 7.37584 11.7899C7.41803 11.7042 7.43912 11.6613 7.51192 11.616C7.58471 11.5707 7.65197 11.5707 7.7865 11.5707H9.76651C9.99782 11.5707 10.1853 11.3788 10.1853 11.1421C10.1853 10.9054 9.99782 10.7135 9.76651 10.7135L2.5358 10.7135C1.82567 10.7135 1.25 10.1379 1.25 9.42774C1.25 8.71762 1.82567 8.14194 2.5358 8.14194Z',
  d5: 'M22 8.04676L19.9954 8.04674L14.1228 3.6439C14.0889 3.6199 14.0556 3.59486 14.0225 3.56932C13.6095 3.25 13.112 2.99353 12.5934 3.05307C11.7935 3.1449 11.1346 3.73771 11.0227 4.50569C10.957 4.95605 11.0883 5.56758 11.4674 5.98015L13.5922 8.07773L11.8688 8.04674H3.56571C2.70153 8.04674 2.00098 8.72118 2.00098 9.55314C2.00098 10.3851 2.70153 11.0595 3.56572 11.0595L11.9855 11.0595M8.48855 11.639L8.5354 12.7492C8.66033 13.5765 9.23423 13.9864 9.94867 14.0254L12.5097 14.045M9.50361 14.3962V15.4971C9.47238 16.3481 10.1985 17.0663 11.0418 17.039H13.0173M11.0189 17.6451L11.0418 18.6404C11.0602 19.4412 11.7271 20.0184 12.5591 20.0184L14.9693 20.0408C15.6509 20.0089 16.7765 20.0314 17.5807 19.7899C17.75 19.739 17.9057 19.6531 18.0543 19.5574L18.3645 19.3576L18.9358 18.9205L20.0016 18.0451H21.9989',
  d6: 'M11.2758 18.64H13.1139V17.8455H10.8859C10.1784 17.8455 9.60485 17.2611 9.60485 16.5402V15.1782C10.0748 15.235 10.6647 15.235 11.3913 15.235H12.5569V14.4405H11.42C10.6213 14.4405 10.0615 14.4396 9.63846 14.3817C9.22666 14.3253 9.00338 14.2214 8.84318 14.0582C8.683 13.895 8.58103 13.6675 8.52567 13.2479C8.47853 12.8906 8.46989 12.4377 8.46832 11.8298H11.9999V11.0353L2.53108 11.0353C1.82356 11.0353 1.25 10.4509 1.25 9.73C1.25 9.00913 1.82356 8.42475 2.53107 8.42475L14.5965 8.42501L11.6407 5.34039C11.0798 4.66421 11.1763 3.64914 11.8566 3.09522C12.4253 2.63213 13.2344 2.63525 13.7996 3.10271L13.8116 3.11262L20.7821 8.42499H22.7498L22.75 18.98H20.7821C20.512 19.2012 19.0935 20.3791 18.8449 20.5609C18.5829 20.7524 18.3983 20.8671 18.3127 20.9005C17.883 21.068 17.3835 21.1581 16.6762 21.2038C15.9657 21.2498 15.0722 21.25 13.8567 21.25C13.2394 21.25 12.8068 21.2495 12.4736 21.2137C12.1473 21.1786 11.9615 21.1134 11.822 21.0139C11.6997 20.9266 11.5932 20.8182 11.5076 20.6935C11.4099 20.5514 11.3459 20.3621 11.3115 20.0296C11.2767 19.6937 11.2758 19.2586 11.2758 18.64Z',
};

export const IconHandPointingLeft03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-stroke-rounded IconHandPointingLeft03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-duotone-rounded IconHandPointingLeft03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-twotone-rounded IconHandPointingLeft03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-solid-rounded IconHandPointingLeft03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-bulk-rounded IconHandPointingLeft03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-stroke-sharp IconHandPointingLeft03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingLeft03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-left-03-solid-sharp IconHandPointingLeft03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingLeft03: TheIconSelfPack = {
  name: 'HandPointingLeft03',
  StrokeRounded: IconHandPointingLeft03StrokeRounded,
  DuotoneRounded: IconHandPointingLeft03DuotoneRounded,
  TwotoneRounded: IconHandPointingLeft03TwotoneRounded,
  SolidRounded: IconHandPointingLeft03SolidRounded,
  BulkRounded: IconHandPointingLeft03BulkRounded,
  StrokeSharp: IconHandPointingLeft03StrokeSharp,
  SolidSharp: IconHandPointingLeft03SolidSharp,
};