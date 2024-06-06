import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.02344 14H18.0234',
  d2: 'M8.52344 9H14.7587C15.2218 9 15.4533 9 15.5109 9.1605C15.6967 9.67818 13.7549 11.4137 13.4567 11.7577C12.9682 12.3213 12.724 12.6031 12.5954 12.9615C12.4667 13.3198 12.4667 13.7184 12.4667 14.5154V18.075C12.4667 19.7377 11.5142 21 9.93177 21',
  d3: 'M5.0157 7.99997C4.9404 7.25983 5.06511 5.86347 7.00907 5.99998H17.4743C18.1117 6.03692 19.1963 6.46024 18.9693 7.99997M10.9958 3C11.5968 3.31337 12.67 4.51459 12.9892 6',
  d4: 'M13 6H7C6.53501 6 6.30252 6 6.11177 6.05111C5.59413 6.18981 5.18981 6.59413 5.05111 7.11177C5 7.30252 5 7.53501 5 8H19C19 7.53501 19 7.30252 18.9489 7.11177C18.8102 6.59413 18.4059 6.18981 17.8882 6.05111C17.6975 6 17.465 6 17 6H13Z',
  d5: 'M14.7353 9H8.5L9.90833 21C11.4908 21 12.4433 19.7377 12.4433 18.075V14.5154C12.4433 13.7184 12.4433 13.3198 12.572 12.9615C12.7006 12.6031 12.9448 12.3213 13.4333 11.7577C13.7315 11.4137 15.6733 9.67818 15.4875 9.1605C15.4299 9 15.1984 9 14.7353 9Z',
  d6: 'M7 14H18',
  d7: 'M8.5 9H14.7353C15.1984 9 15.4299 9 15.4875 9.1605C15.6733 9.67818 13.7315 11.4137 13.4333 11.7577C12.9448 12.3213 12.7006 12.6031 12.572 12.9615C12.4433 13.3198 12.4433 13.7184 12.4433 14.5154V18.075C12.4433 19.7377 11.4908 21 9.90833 21',
  d8: 'M7 13.9893H18',
  d9: 'M8.5 8.98242H14.7353C15.1984 8.98242 15.4299 8.98242 15.4875 9.14314C15.6733 9.66152 13.7315 11.3994 13.4333 11.7439C12.9448 12.3082 12.7006 12.5904 12.572 12.9493C12.4433 13.3081 12.4433 13.7072 12.4433 14.5053V18.0697C12.4433 19.7347 11.4908 20.9987 9.90833 20.9987',
  d10: 'M5.0157 7.98567C4.9404 7.24452 5.06511 5.84627 7.00907 5.98297H17.4743C18.1117 6.01996 19.1963 6.44386 18.9693 7.98567',
  d11: 'M11.0059 3.00098C11.6069 3.31477 12.6749 4.46506 12.994 5.95249',
  d12: 'M11.5146 2.14266C11.0411 1.85851 10.4268 2.01208 10.1427 2.48566C9.85851 2.95924 10.0121 3.5735 10.4857 3.85764C10.8925 4.10176 11.2608 4.50346 11.5466 5.00014L6.90713 5.00004C6.53841 4.99943 6.176 4.99883 5.85316 5.08533C4.99043 5.3165 4.31656 5.99037 4.08539 6.8531C3.99889 7.17594 3.99959 7.63142 4.00021 8.00014C4.00021 8.55243 4.44792 9.00014 5.00021 9.00014C5.55249 9.00014 6.00021 8.55243 6.00021 8.00014C6.00021 7.75859 6.01213 7.48276 6.01724 7.37074C6.06348 7.19819 6.19825 7.06342 6.3708 7.01718C6.3708 7.01718 6.75865 7.00014 7.00021 7.00014H17.0002C17.2418 7.00014 17.5176 7.01207 17.6296 7.01718C17.8022 7.06342 17.9369 7.19819 17.9832 7.37074C17.9832 7.37074 18.0002 7.75859 18.0002 8.00014C18.0002 8.55243 18.4479 9.00014 19.0002 9.00014C19.5525 9.00014 20.0002 8.55243 20.0002 8.00014C20.0008 7.63142 20.0015 7.17594 19.915 6.8531C19.6839 5.99037 19.01 5.3165 18.1473 5.08533C17.8244 4.99883 17.462 4.99943 17.0933 5.00004L13.7433 5.00014C13.3239 3.85433 12.5722 2.77718 11.5146 2.14266Z',
  d13: 'M13.7628 10.0001C13.5724 10.2006 12.7723 11.0219 12.5973 11.1953C12.1873 11.6671 11.8242 12.085 11.6308 12.6237C11.5866 12.7467 11.5528 12.8719 11.527 13.0001L7 13.0001C6.44772 13.0001 6 13.4478 6 14.0001C6 14.5523 6.44772 15.0001 7 15.0001L11.4432 15.0001L11.4433 18.0751C11.4433 18.7232 11.2577 19.2128 11.0009 19.5211C10.7593 19.8111 10.4097 20.0001 9.90833 20.0001C9.35604 20.0001 8.90833 20.4478 8.90833 21.0001C8.90833 21.5524 9.35604 22.0001 9.90833 22.0001C10.9895 22.0001 11.9073 21.5579 12.5377 20.8011C13.1527 20.0626 13.4433 19.0897 13.4433 18.0751V15.0001L18 15.0001C18.5523 15.0001 19 14.5523 19 14.0001C19 13.4478 18.5523 13.0001 18 13.0001L13.6957 13.0001C13.793 12.8745 13.9445 12.6949 14.189 12.4127C14.4116 12.192 15.1111 11.4905 15.377 11.2023C15.6369 10.9205 15.9141 10.5984 16.1189 10.2911C16.22 10.1395 16.3291 9.95385 16.4034 9.75165C16.4678 9.57661 16.5707 9.21838 16.4287 8.82271C16.2102 8.21409 15.655 8.07081 15.4245 8.03319C15.218 7.99951 14.9685 7.99981 14.7794 8.00004L8.5 8.00008C7.94772 8.00008 7.5 8.44779 7.5 9.00008C7.5 9.55236 7.94772 10.0001 8.5 10.0001H13.7628Z',
  d14: 'M7.0293 13.9912H17.9896',
  d15: 'M4.99805 7.96527V6.02586H13.0431M19.002 7.9653V6.02586H13.0431M13.0431 6.02586C12.8619 5.27095 12.1504 3.61901 11.0157 3',
  d16: 'M8.50977 8.99805H15.4691C15.478 8.99805 15.4824 9.00888 15.4761 9.01516L12.4745 11.9841V17.5799C12.5163 18.7196 12.2358 20.922 9.92471 20.9992',
  d17: 'M11.5465 4.878H4V7.89953H6V6.89235H18V7.89953H20V4.878H13.7431C13.3238 3.72396 12.572 2.63908 11.5145 2L10.4855 3.72729C10.8924 3.97316 11.2607 4.37775 11.5465 4.878Z',
  d18: 'M8.5 9.91377L13.0535 9.91378L11.4433 11.5054V12.9353L7 12.9353V14.9496L11.4433 14.9497V18.0467C11.4433 18.6995 11.2577 19.1926 11.0009 19.5031C10.7593 19.7952 10.4097 19.9855 9.90833 19.9855V21.9999C10.9895 21.9999 11.9073 21.5545 12.5377 20.7923C13.1527 20.0485 13.4433 19.0686 13.4433 18.0467V14.9497L18 14.9497V12.9353L13.4433 12.9353V12.3508L16.2005 9.62542C16.4903 9.33888 16.5793 8.90421 16.4257 8.52554C16.272 8.14687 15.9062 7.89943 15.5 7.89943L8.5 7.89941L8.5 9.91377Z',
};

export const IconAlphabetChineseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-stroke-rounded IconAlphabetChineseStrokeRounded"
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

export const IconAlphabetChineseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-duotone-rounded IconAlphabetChineseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetChineseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-twotone-rounded IconAlphabetChineseTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetChineseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-solid-rounded IconAlphabetChineseSolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetChineseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-bulk-rounded IconAlphabetChineseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetChineseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-stroke-sharp IconAlphabetChineseStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetChineseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-chinese-solid-sharp IconAlphabetChineseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlphabetChinese: TheIconSelfPack = {
  name: 'AlphabetChinese',
  StrokeRounded: IconAlphabetChineseStrokeRounded,
  DuotoneRounded: IconAlphabetChineseDuotoneRounded,
  TwotoneRounded: IconAlphabetChineseTwotoneRounded,
  SolidRounded: IconAlphabetChineseSolidRounded,
  BulkRounded: IconAlphabetChineseBulkRounded,
  StrokeSharp: IconAlphabetChineseStrokeSharp,
  SolidSharp: IconAlphabetChineseSolidSharp,
};