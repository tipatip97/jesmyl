import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 13.0004L8 14.0004C8 15.105 8.89543 16.0004 10 16.0004M10 16.0004L11 16.0004M10 16.0004C9.44771 16.0004 9 16.4481 9 17.0004C9 18.105 9.89543 19.0004 11 19.0004M11 19.0004L12 19.0004M11 19.0004C10.4765 19.0004 10.0783 19.4705 10.1644 19.9868L10.2215 20.3292C10.3822 21.2936 11.2166 22.0004 12.1943 22.0004L13.6668 22C15.8402 22 16.9269 22 17.792 21.6689C18.2939 21.4769 18.9339 20.9703 19.3964 20.5652C19.7964 20.2148 20.3038 20 20.8356 20L22.0002 20M10 13.0002L3.5 13.0002C2.67157 13.0002 2 12.3286 2 11.5002C2 10.6718 2.67157 10.0002 3.5 10.0002L13.4624 10L11.837 8.3797C11.1239 7.66877 11.1889 6.49772 11.9765 5.86965C12.5791 5.38907 13.4315 5.3758 14.0489 5.83738L18.6471 9.43707C19.5269 10.1258 20.8829 10.5 22.0002 10.5',
  d2: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7',
  d3: 'M8 14.0004L8 13.0002L3.5 13.0002C2.67157 13.0002 2 12.3286 2 11.5002C2 10.6718 2.67157 10.0002 3.5 10.0002L13.4624 10L11.837 8.3797C11.1239 7.66877 11.1889 6.49772 11.9765 5.86965C12.5791 5.38907 13.4315 5.3758 14.0489 5.83738L18.6471 9.43707C19.5269 10.1258 20.8829 10.5 22.0002 10.5L22.0002 20L20.8356 20C20.3038 20 19.7964 20.2148 19.3964 20.5652C18.9339 20.9703 18.2939 21.4769 17.792 21.6689C16.9269 22 15.8402 22 13.6668 22L12.1943 22.0004C11.2166 22.0004 10.3822 21.2936 10.2215 20.3292L10.1644 19.9868C10.0783 19.4705 10.4765 19.0004 11 19.0004C9.89543 19.0004 9 18.105 9 17.0004C9 16.4481 9.44771 16.0004 10 16.0004C8.89543 16.0004 8 15.105 8 14.0004Z',
  d4: 'M2.5358 9.89194L13.6336 9.89194C13.8031 9.89194 13.9559 9.78738 14.0207 9.62707C14.0854 9.46677 14.0494 9.28233 13.9293 9.15987L12.1139 7.30815C11.4947 6.6765 11.551 5.63646 12.2351 5.07817C12.4905 4.8698 12.7975 4.76015 13.1073 4.75C13.2538 4.75439 13.4 4.77191 13.5441 4.80258C13.654 4.83328 13.7612 4.87725 13.8633 4.93452L19.1094 8.84541C19.4192 9.08787 19.8241 9.29612 20.2805 9.45238L20.3098 9.4624C20.8148 9.63532 21.2341 9.77889 21.5482 9.91329C21.842 10.039 22.199 10.2162 22.424 10.5311C22.6321 10.8223 22.6958 11.1517 22.7235 11.4419C22.7502 11.7223 22.7502 12.0704 22.7502 12.4649L22.7502 18.866C22.7503 18.9857 22.7504 19.1101 22.7356 19.2245C22.6332 20.012 22.0133 20.6319 21.2257 20.7343C21.1114 20.7492 20.9553 20.749 20.8356 20.7489C20.5078 20.7489 20.1715 20.8821 19.8905 21.1282C19.4361 21.5263 18.7036 22.122 18.06 22.3683C17.5271 22.5722 16.9544 22.6624 16.2675 22.706C15.5923 22.7489 14.7575 22.7489 13.6928 22.7489L12.1943 22.7493C10.8499 22.7493 9.70267 21.7774 9.48167 20.4514C9.4578 20.3082 9.56823 20.1779 9.7134 20.1779H12.0003C12.2316 20.1779 12.4191 19.986 12.4191 19.7493C12.4191 19.5126 12.2316 19.3207 12.0003 19.3207H9.66985C9.57967 19.3207 9.53458 19.3207 9.49092 19.3071C9.44726 19.2935 9.41241 19.2694 9.34272 19.2212C8.7756 18.8288 8.39339 18.4018 8.29363 17.3493C8.26812 17.0802 8.25537 16.9456 8.34464 16.8475C8.4339 16.7494 8.5785 16.7494 8.86771 16.7494H10.8834C11.1147 16.7494 11.3022 16.5575 11.3022 16.3208C11.3022 16.0841 11.1147 15.8923 10.8834 15.8923H8.26291C8.13208 15.8923 8.06666 15.8923 8.00458 15.8621C7.94249 15.8319 7.90723 15.7871 7.83671 15.6973C7.4692 15.2298 7.25 14.6402 7.25 13.9993C7.2556 13.8835 7.29455 13.7051 7.37584 13.5399C7.41803 13.4542 7.43912 13.4113 7.51192 13.366C7.58471 13.3207 7.65197 13.3207 7.7865 13.3207H9.76651C9.99782 13.3207 10.1853 13.1288 10.1853 12.8921C10.1853 12.6554 9.99782 12.4635 9.76651 12.4635H2.5358C1.82567 12.4635 1.25 11.8879 1.25 11.1777C1.25 10.4676 1.82567 9.89194 2.5358 9.89194Z',
  d5: 'M8.25004 5.50586C8.80232 5.50586 9.25004 5.05814 9.25004 4.50586C9.25004 3.95358 8.80232 3.50586 8.25004 3.50586L5.75 3.50586L5.75002 2.9116C5.75014 2.73596 5.7503 2.52031 5.72823 2.34387L5.72781 2.34053C5.71204 2.21408 5.64021 1.63804 5.07461 1.36368C4.50779 1.08872 4.00765 1.39065 3.89944 1.45597L3.43095 1.79511C3.05513 2.08975 2.54067 2.49545 2.14966 2.87588C1.95455 3.06571 1.75331 3.28297 1.59447 3.51388C1.45326 3.71914 1.25 4.06933 1.25 4.5C1.25 4.93067 1.45326 5.28086 1.59447 5.48612C1.75331 5.71703 1.95455 5.93429 2.14966 6.12412C2.54067 6.50455 3.05512 6.91025 3.43095 7.20488L3.89944 7.54403C4.00765 7.60935 4.50779 7.91128 5.07461 7.63632C5.64021 7.36196 5.71204 6.78592 5.72781 6.65947L5.72823 6.65613C5.7503 6.47969 5.75014 6.26403 5.75002 6.0884L5.75 5.50586L8.25004 5.50586Z',
  d6: 'M8 4.60938H2.63046M4.5 2.10938L2 4.60938L4.5 7.10938',
  d7: 'M22 10.1137L19.9954 10.1136L14.1228 5.71079C14.0889 5.6868 14.0556 5.66176 14.0225 5.63621C13.6095 5.31689 13.112 5.06042 12.5934 5.11997C11.7935 5.2118 11.1346 5.8046 11.0227 6.57258C10.957 7.02294 11.0883 7.63447 11.4674 8.04704L13.5922 10.1446L11.8688 10.1136H3.56571C2.70153 10.1136 2.00098 10.7881 2.00098 11.62C2.00098 12.452 2.70153 13.1264 3.56572 13.1264L11.9855 13.1264M8.48855 13.7058L8.5354 14.8161C8.66033 15.6434 9.23423 16.0533 9.94867 16.0923L12.5097 16.1119M9.50361 16.4631V17.564C9.47238 18.415 10.1985 19.1332 11.0418 19.1059H13.0173M11.0189 19.712L11.0418 20.7072C11.0602 21.5081 11.7271 22.0853 12.5591 22.0853L14.9693 22.1077C15.6509 22.0758 16.7765 22.0983 17.5807 21.8568C17.75 21.8059 17.9057 21.72 18.0543 21.6243L18.3645 21.4245L18.9358 20.9874L20.0016 20.112H21.9989',
  d8: 'M11.2758 20.14H13.1139V19.3455H10.8859C10.1784 19.3455 9.60485 18.7611 9.60485 18.0402V16.6782C10.0748 16.735 10.6647 16.735 11.3913 16.735H12.5569V15.9405H11.42C10.6213 15.9405 10.0615 15.9396 9.63846 15.8817C9.22666 15.8253 9.00338 15.7214 8.84318 15.5582C8.683 15.395 8.58103 15.1675 8.52567 14.7479C8.47853 14.3906 8.46989 13.9377 8.46832 13.3298H11.9999V12.5353L2.53108 12.5353C1.82356 12.5353 1.25 11.9509 1.25 11.23C1.25 10.5091 1.82356 9.92475 2.53107 9.92475L14.5965 9.92501L11.6407 6.84039C11.0798 6.16421 11.1763 5.14914 11.8566 4.59522C12.4253 4.13213 13.2344 4.13525 13.7996 4.60271L13.8116 4.61262L20.7821 9.92499H22.7498L22.75 20.48H20.7821C20.512 20.7012 19.0935 21.8791 18.8449 22.0609C18.5829 22.2524 18.3983 22.3671 18.3127 22.4005C17.883 22.568 17.3835 22.6581 16.6762 22.7038C15.9657 22.7498 15.0722 22.75 13.8567 22.75C13.2394 22.75 12.8068 22.7495 12.4736 22.7137C12.1473 22.6786 11.9615 22.6134 11.822 22.5139C11.6997 22.4266 11.5932 22.3182 11.5076 22.1935C11.4099 22.0514 11.3459 21.8621 11.3115 21.5296C11.2767 21.1937 11.2758 20.7586 11.2758 20.14Z',
  d9: 'M5.07843 5.45711L5.87132 6.25L4.45711 7.66421L1.25 4.45711L4.45711 1.25L5.87132 2.66421L5.07843 3.45711L8.66421 3.45711V5.45711L5.07843 5.45711Z',
};

export const IconPointingLeft05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-stroke-rounded IconPointingLeft05StrokeRounded"
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

export const IconPointingLeft05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-duotone-rounded IconPointingLeft05DuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-twotone-rounded IconPointingLeft05TwotoneRounded"
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

export const IconPointingLeft05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-solid-rounded IconPointingLeft05SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-bulk-rounded IconPointingLeft05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-stroke-sharp IconPointingLeft05StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingLeft05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-left-05-solid-sharp IconPointingLeft05SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPointingLeft05: TheIconSelfPack = {
  name: 'PointingLeft05',
  StrokeRounded: IconPointingLeft05StrokeRounded,
  DuotoneRounded: IconPointingLeft05DuotoneRounded,
  TwotoneRounded: IconPointingLeft05TwotoneRounded,
  SolidRounded: IconPointingLeft05SolidRounded,
  BulkRounded: IconPointingLeft05BulkRounded,
  StrokeSharp: IconPointingLeft05StrokeSharp,
  SolidSharp: IconPointingLeft05SolidSharp,
};