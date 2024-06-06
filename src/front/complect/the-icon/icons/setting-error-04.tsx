import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 15V17M17.009 19H17M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d2: 'M15.0287 9.24471C14.4228 8.20147 13.2933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.0657 8.97625 13.0201 9.72753 13.662',
  d3: 'M21.984 10.74C21.96 10.2 21.5969 9.5418 20.7906 8.15201L18.8669 4.83622C18.0638 3.45197 17.6623 2.75984 17.0019 2.37992C16.3416 2 15.5402 2 13.9373 2H10.0627C8.45982 2 7.6584 2 6.99807 2.37992C6.33774 2.75984 5.93619 3.45196 5.13311 4.83621L3.20942 8.152C2.40314 9.5418 2 10.2366 2 11C2 11.7634 2.40314 12.4582 3.20942 13.848L5.13311 17.1638C5.93619 18.548 6.33774 19.2402 6.99807 19.6201C7.62 19.92 7.99712 20 9.6 20',
  d4: 'M21.0416 8.15494C21.8479 9.54469 22.251 10.2395 22.251 11.0029C22.251 11.7543 21.8604 12.4394 21.0791 13.7862C20.1619 12.6958 18.7874 12.0029 17.251 12.0029C16.633 12.0029 16.0411 12.115 15.4947 12.3201C15.66 11.9135 15.751 11.4688 15.751 11.0029C15.751 9.06993 14.184 7.50293 12.251 7.50293C10.318 7.50293 8.75098 9.06993 8.75098 11.0029C8.75098 12.9359 10.318 14.5029 12.251 14.5029C12.4948 14.5029 12.7328 14.478 12.9626 14.4305C12.5108 15.1821 12.251 16.0621 12.251 17.0029C12.251 18.1285 12.6229 19.1672 13.2506 20.0029H10.3137C8.7108 20.0029 7.90938 20.0029 7.24905 19.623C6.58872 19.2431 6.18717 18.5509 5.38409 17.1667L3.4604 13.8509C2.65412 12.4611 2.25098 11.7663 2.25098 11.0029C2.25098 10.2395 2.65412 9.54469 3.4604 8.15493L5.38409 4.83914C6.18717 3.45489 6.58872 2.76277 7.24905 2.38285C7.90938 2.00293 8.7108 2.00293 10.3137 2.00293H14.1883C15.7912 2.00293 16.5926 2.00293 17.2529 2.38285C17.9133 2.76277 18.3148 3.4549 19.1179 4.83915L21.0416 8.15494Z',
  d5: 'M17.251 15.0029V17.0029M17.26 19.0029H17.251M22.251 17.0029C22.251 19.7643 20.0124 22.0029 17.251 22.0029C14.4896 22.0029 12.251 19.7643 12.251 17.0029C12.251 14.2415 14.4896 12.0029 17.251 12.0029C20.0124 12.0029 22.251 14.2415 22.251 17.0029Z',
  d6: 'M15.2797 9.24764C14.6738 8.2044 13.5443 7.50293 12.251 7.50293C10.318 7.50293 8.75098 9.06993 8.75098 11.0029C8.75098 12.0686 9.22723 13.023 9.97851 13.6649',
  d7: 'M22.2428 10.7429C22.2188 10.2029 21.8557 9.54473 21.0494 8.15494L19.1257 4.83915C18.3226 3.4549 17.9211 2.76277 17.2607 2.38285C16.6004 2.00293 15.799 2.00293 14.1961 2.00293H10.3215C8.71861 2.00293 7.91719 2.00293 7.25686 2.38285C6.59653 2.76277 6.19498 3.45489 5.3919 4.83914L3.46821 8.15493C2.66193 9.54473 2.25879 10.2395 2.25879 11.0029C2.25879 11.7663 2.66193 12.4611 3.46821 13.8509L5.3919 17.1667C6.19498 18.5509 6.59653 19.2431 7.25686 19.623C7.87879 19.9229 8.25591 20.0029 9.85879 20.0029',
  d8: 'M21.9996 10.74C21.9756 10.2 21.6125 9.5418 20.8062 8.15201L18.8825 4.83622C18.0794 3.45197 17.6779 2.75984 17.0175 2.37992C16.3572 2 15.5558 2 13.9529 2H10.0783C8.47545 2 7.67402 2 7.01369 2.37992C6.35336 2.75984 5.95182 3.45196 5.14874 4.83621L3.22504 8.152C2.41876 9.5418 2.01562 10.2366 2.01562 11C2.01562 11.7634 2.41876 12.4582 3.22504 13.848L5.14874 17.1638C5.95182 18.548 6.35336 19.2402 7.01369 19.6201C7.63562 19.92 8.01275 20 9.61563 20',
  d9: 'M13.9741 1.25C14.7443 1.24999 15.3764 1.24998 15.8964 1.30109C16.4411 1.35461 16.9214 1.46829 17.376 1.72984C17.8306 1.99144 18.1701 2.34942 18.4896 2.79326C18.7946 3.21694 19.1113 3.76293 19.4972 4.42801L21.4579 7.80767C21.8453 8.47535 22.1633 9.02347 22.3803 9.50021C22.6076 9.9996 22.75 10.4737 22.75 11C22.75 11.4407 22.6501 11.8448 22.4842 12.2578C21.1548 10.7218 19.1909 9.75 17 9.75C16.6885 9.75 16.3816 9.76964 16.0805 9.80776C15.5651 8.04089 13.9333 6.75 12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 12.6605 8.70227 14.0986 10.0905 14.7979C9.86934 15.4924 9.75 16.2322 9.75 17C9.75 18.3725 10.1314 19.6559 10.7939 20.75H10.026C9.25573 20.75 8.62366 20.75 8.10357 20.6989C7.55891 20.6454 7.07864 20.5317 6.62404 20.2702C6.16937 20.0086 5.82995 19.6506 5.51044 19.2067C5.20543 18.7831 4.88867 18.237 4.50282 17.5719L2.54214 14.1924C2.15475 13.5247 1.83673 12.9766 1.61974 12.4998C1.39243 12.0004 1.25 11.5263 1.25 11C1.25 10.4737 1.39243 9.9996 1.61974 9.5002C1.83673 9.02345 2.15475 8.47532 2.54214 7.80762L4.50285 4.42801C4.88869 3.76293 5.20544 3.21694 5.51044 2.79326C5.82995 2.34942 6.16937 1.99144 6.62404 1.72984C7.07864 1.46829 7.55891 1.35461 8.10357 1.30109C8.62365 1.24998 9.25572 1.24999 10.0259 1.25H13.9741Z',
  d10: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM17.75 15C17.75 14.5858 17.4142 14.25 17 14.25C16.5858 14.25 16.25 14.5858 16.25 15V17C16.25 17.4142 16.5858 17.75 17 17.75C17.4142 17.75 17.75 17.4142 17.75 17V15ZM17 18.25C16.5858 18.25 16.25 18.5858 16.25 19C16.25 19.4142 16.5858 19.75 17 19.75H17.009C17.4232 19.75 17.759 19.4142 17.759 19C17.759 18.5858 17.4232 18.25 17.009 18.25H17Z',
  d11: 'M10.1962 14C9.17979 13.3876 8.5 12.2732 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.3962 7.5 14.6015 8.31753 15.1632 9.5',
  d12: 'M22 11L17 2H6.99807L2 11L7 20H10',
  d13: 'M16.918 14.0071V17M16.918 18.2563V19.745M11.918 17C11.918 19.7614 14.1565 22 16.918 22C19.6794 22 21.918 19.7614 21.918 17C21.918 14.2386 19.6794 12 16.918 12C14.1565 12 11.918 14.2386 11.918 17Z',
  d14: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM16.25 14V17H17.75V14H16.25ZM17.759 18.25H16.25V19.75H17.759V18.25Z',
  d15: 'M6.34239 1.63588C6.47465 1.39772 6.72565 1.25 6.99807 1.25L17 1.25C17.2724 1.25 17.5233 1.39767 17.6556 1.63577L22.6556 10.6358C22.7814 10.8622 22.7815 11.1376 22.6557 11.3641L22.2831 12.035C20.9607 10.6284 19.0829 9.75 17 9.75C16.6885 9.75 16.3816 9.76964 16.0805 9.80776C15.5651 8.04089 13.9333 6.75 12 6.75C9.65279 6.75 7.75 8.65279 7.75 11C7.75 12.6605 8.70227 14.0986 10.0905 14.7979C9.86934 15.4924 9.75 16.2322 9.75 17C9.75 18.3725 10.1314 19.6559 10.7939 20.75L7 20.75C6.72762 20.75 6.47666 20.6023 6.34438 20.3642L1.34438 11.3642C1.21856 11.1378 1.21854 10.8624 1.34432 10.6359L6.34239 1.63588Z',
} as const;

export const IconSettingError04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-stroke-rounded IconSettingError04StrokeRounded"
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

export const IconSettingError04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-duotone-rounded IconSettingError04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingError04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-twotone-rounded IconSettingError04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconSettingError04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-solid-rounded IconSettingError04SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingError04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-bulk-rounded IconSettingError04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingError04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-stroke-sharp IconSettingError04StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSettingError04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="setting-error-04-solid-sharp IconSettingError04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSettingError04: TheIconSelfPack = {
  name: 'SettingError04',
  StrokeRounded: IconSettingError04StrokeRounded,
  DuotoneRounded: IconSettingError04DuotoneRounded,
  TwotoneRounded: IconSettingError04TwotoneRounded,
  SolidRounded: IconSettingError04SolidRounded,
  BulkRounded: IconSettingError04BulkRounded,
  StrokeSharp: IconSettingError04StrokeSharp,
  SolidSharp: IconSettingError04SolidSharp,
};