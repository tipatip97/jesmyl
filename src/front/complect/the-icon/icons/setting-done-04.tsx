import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5',
  d2: 'M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d3: 'M15.0287 9.24471C14.4228 8.20147 13.2933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.0657 8.97625 13.0201 9.72753 13.662',
  d4: 'M21.984 10.74C21.96 10.2 21.5969 9.5418 20.7906 8.15201L18.8669 4.83622C18.0638 3.45197 17.6623 2.75984 17.0019 2.37992C16.3416 2 15.5402 2 13.9373 2H10.0627C8.45982 2 7.6584 2 6.99807 2.37992C6.33774 2.75984 5.93619 3.45196 5.13311 4.83621L3.20942 8.152C2.40314 9.5418 2 10.2366 2 11C2 11.7634 2.40314 12.4582 3.20942 13.848L5.13311 17.1638C5.93619 18.548 6.33774 19.2402 6.99807 19.6201C7.62 19.92 7.99712 20 9.6 20',
  d5: 'M21.0416 7.90494C21.8479 9.29469 22.251 9.98953 22.251 10.7529C22.251 11.5043 21.8604 12.1894 21.0791 13.5362C20.1619 12.4458 18.7874 11.7529 17.251 11.7529C16.633 11.7529 16.0411 11.865 15.4947 12.0701C15.66 11.6635 15.751 11.2188 15.751 10.7529C15.751 8.81993 14.184 7.25293 12.251 7.25293C10.318 7.25293 8.75098 8.81993 8.75098 10.7529C8.75098 12.6859 10.318 14.2529 12.251 14.2529C12.4948 14.2529 12.7328 14.228 12.9626 14.1805C12.5108 14.9321 12.251 15.8121 12.251 16.7529C12.251 17.8785 12.6229 18.9172 13.2506 19.7529H10.3137C8.7108 19.7529 7.90938 19.7529 7.24905 19.373C6.58872 18.9931 6.18717 18.3009 5.38409 16.9167L3.4604 13.6009C2.65412 12.2111 2.25098 11.5163 2.25098 10.7529C2.25098 9.98953 2.65412 9.29469 3.4604 7.90493L5.38409 4.58914C6.18717 3.20489 6.58872 2.51277 7.24905 2.13285C7.90938 1.75293 8.7108 1.75293 10.3137 1.75293H14.1883C15.7912 1.75293 16.5926 1.75293 17.2529 2.13285C17.9133 2.51277 18.3148 3.2049 19.1179 4.58915L21.0416 7.90494Z',
  d6: 'M15.251 17.2529C15.251 17.2529 15.751 17.2529 16.251 18.2529C16.251 18.2529 17.8392 15.7529 19.251 15.2529',
  d7: 'M22.251 16.7529C22.251 19.5143 20.0124 21.7529 17.251 21.7529C14.4896 21.7529 12.251 19.5143 12.251 16.7529C12.251 13.9915 14.4896 11.7529 17.251 11.7529C20.0124 11.7529 22.251 13.9915 22.251 16.7529Z',
  d8: 'M15.2797 8.99764C14.6738 7.9544 13.5443 7.25293 12.251 7.25293C10.318 7.25293 8.75098 8.81993 8.75098 10.7529C8.75098 11.8186 9.22723 12.773 9.97851 13.4149',
  d9: 'M22.2516 10.4929C22.2276 9.95293 21.8645 9.29473 21.0582 7.90494L19.1345 4.58915C18.3314 3.2049 17.9299 2.51277 17.2695 2.13285C16.6092 1.75293 15.8078 1.75293 14.2049 1.75293H10.3303C8.7274 1.75293 7.92598 1.75293 7.26565 2.13285C6.60532 2.51277 6.20377 3.20489 5.40069 4.58914L3.477 7.90493C2.67072 9.29473 2.26758 9.98953 2.26758 10.7529C2.26758 11.5163 2.67072 12.2111 3.477 13.6009L5.40069 16.9167C6.20377 18.3009 6.60532 18.9931 7.26565 19.373C7.88758 19.6729 8.2647 19.7529 9.86758 19.7529',
  d10: 'M21.9996 10.74C21.9756 10.2 21.6125 9.5418 20.8062 8.15201L18.8825 4.83622C18.0794 3.45197 17.6779 2.75984 17.0175 2.37992C16.3572 2 15.5558 2 13.9529 2H10.0783C8.47545 2 7.67402 2 7.01369 2.37992C6.35336 2.75984 5.95182 3.45196 5.14874 4.83621L3.22504 8.152C2.41876 9.5418 2.01562 10.2366 2.01562 11C2.01562 11.7634 2.41876 12.4582 3.22504 13.848L5.14874 17.1638C5.95182 18.548 6.35336 19.2402 7.01369 19.6201C7.63562 19.92 8.01275 20 9.61563 20',
  d11: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM19.2504 16.2072C19.6408 16.0689 19.8453 15.6403 19.707 15.2498C19.5687 14.8594 19.1401 14.6549 18.7496 14.7932C18.2675 14.964 17.8199 15.2838 17.4411 15.616C17.0546 15.955 16.6963 16.3457 16.3947 16.7073C16.2485 16.8825 16.1135 17.0534 15.9928 17.2119C15.9046 17.1294 15.8162 17.0596 15.7285 17.0012C15.5696 16.8952 15.3438 16.7502 15 16.7502C14.5858 16.7502 14.25 17.086 14.25 17.5002C14.25 17.8749 14.5248 18.1855 14.8839 18.2413C14.9396 18.2784 15.1237 18.4246 15.3292 18.8356C15.4501 19.0774 15.6917 19.2354 15.9616 19.2492C16.2315 19.263 16.4882 19.1302 16.6332 18.9021C16.796 18.6715 17.276 17.9924 17.5465 17.6681C17.8184 17.3422 18.1219 17.0142 18.4302 16.7438C18.7463 16.4666 19.0266 16.2864 19.2504 16.2072Z',
  d12: 'M13.9741 1.25C14.7443 1.24999 15.3764 1.24998 15.8964 1.30109C16.4411 1.35461 16.9214 1.46829 17.376 1.72984C17.8306 1.99144 18.1701 2.34942 18.4896 2.79326C18.7946 3.21694 19.1113 3.76293 19.4972 4.42801L21.4579 7.80767C21.8453 8.47535 22.1633 9.02347 22.3803 9.50021C22.6076 9.9996 22.75 10.4737 22.75 11C22.75 11.4407 22.6501 11.8448 22.4842 12.2578C21.1548 10.7218 19.1909 9.75 17 9.75C16.6885 9.75 16.3816 9.76964 16.0805 9.80776C15.5651 8.04089 13.9333 6.75 12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 12.6605 8.70227 14.0986 10.0905 14.7979C9.86934 15.4924 9.75 16.2322 9.75 17C9.75 18.3725 10.1314 19.6559 10.7939 20.75H10.026C9.25573 20.75 8.62366 20.75 8.10357 20.6989C7.55891 20.6454 7.07864 20.5317 6.62404 20.2702C6.16937 20.0086 5.82995 19.6506 5.51044 19.2067C5.20543 18.7831 4.88867 18.237 4.50282 17.5719L2.54214 14.1924C2.15475 13.5247 1.83673 12.9766 1.61974 12.4998C1.39243 12.0004 1.25 11.5263 1.25 11C1.25 10.4737 1.39243 9.9996 1.61974 9.5002C1.83673 9.02345 2.15475 8.47532 2.54214 7.80762L4.50285 4.42801C4.88869 3.76293 5.20544 3.21694 5.51044 2.79326C5.82995 2.34942 6.16937 1.99144 6.62404 1.72984C7.07864 1.46829 7.55891 1.35461 8.10357 1.30109C8.62365 1.24998 9.25572 1.24999 10.0259 1.25H13.9741Z',
  d13: 'M10.1962 14C9.17979 13.3876 8.5 12.2732 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.3962 7.5 14.6015 8.31753 15.1632 9.5',
  d14: 'M22 11L17 2H6.99807L2 11L7 20H10',
  d15: 'M14.7516 17L16.2257 18.4963L19.2504 15.5099M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d16: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM16.2501 19.5607L19.7804 16.0304L18.7197 14.9697L16.2501 17.4394L15.2804 16.4697L14.2197 17.5304L16.2501 19.5607Z',
  d17: 'M6.34239 1.63588C6.47465 1.39772 6.72565 1.25 6.99807 1.25L17 1.25C17.2724 1.25 17.5233 1.39767 17.6556 1.63577L22.6556 10.6358C22.7814 10.8622 22.7815 11.1376 22.6557 11.3641L22.2831 12.035C20.9607 10.6284 19.0829 9.75 17 9.75C16.6885 9.75 16.3816 9.76964 16.0805 9.80776C15.5651 8.04089 13.9333 6.75 12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 12.6605 8.70227 14.0986 10.0905 14.7979C9.86934 15.4924 9.75 16.2322 9.75 17C9.75 18.3725 10.1314 19.6559 10.7939 20.75L7 20.75C6.72762 20.75 6.47666 20.6023 6.34438 20.3642L1.34438 11.3642C1.21856 11.1378 1.21854 10.8624 1.34432 10.6359L6.34239 1.63588Z',
};

export const IconSettingDone04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-stroke-rounded IconSettingDone04StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-duotone-rounded IconSettingDone04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-twotone-rounded IconSettingDone04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-solid-rounded IconSettingDone04SolidRounded"
    >
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

export const IconSettingDone04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-bulk-rounded IconSettingDone04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingDone04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-stroke-sharp IconSettingDone04StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSettingDone04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-done-04-solid-sharp IconSettingDone04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSettingDone04: TheIconSelfPack = {
  name: 'SettingDone04',
  StrokeRounded: IconSettingDone04StrokeRounded,
  DuotoneRounded: IconSettingDone04DuotoneRounded,
  TwotoneRounded: IconSettingDone04TwotoneRounded,
  SolidRounded: IconSettingDone04SolidRounded,
  BulkRounded: IconSettingDone04BulkRounded,
  StrokeSharp: IconSettingDone04StrokeSharp,
  SolidSharp: IconSettingDone04SolidSharp,
};