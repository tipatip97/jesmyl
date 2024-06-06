import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 19.0987C17.5 18.0987 18.4 17.7124 18.4 17C18.4 15.5643 16.375 15.4112 16.375 16.7612M22 17.5C22 19.9853 19.9853 22 17.5 22C15.0147 22 13 19.9853 13 17.5C13 15.0147 15.0147 13 17.5 13C19.9853 13 22 15.0147 22 17.5Z',
  d2: 'M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z',
  d3: 'M17.5 12.25C14.6005 12.25 12.25 14.6005 12.25 17.5C12.25 20.3995 14.6005 22.75 17.5 22.75C20.3995 22.75 22.75 20.3995 22.75 17.5C22.75 14.6005 20.3995 12.25 17.5 12.25ZM17.125 16.7623C17.125 16.6884 17.1385 16.6502 17.1452 16.6356C17.1514 16.6218 17.1571 16.6161 17.1621 16.6121C17.175 16.6017 17.2241 16.5748 17.3153 16.5836C17.404 16.5922 17.4883 16.6319 17.546 16.6913C17.5947 16.7414 17.65 16.8304 17.65 17.0011C17.65 17.0578 17.6288 17.1076 17.3426 17.5027C17.1028 17.8337 16.75 18.3471 16.75 19.0998C16.75 19.5141 17.0858 19.8498 17.5 19.8498C17.9142 19.8498 18.25 19.5141 18.25 19.0998C18.25 18.8526 18.3472 18.6729 18.5574 18.3826C18.5736 18.3603 18.5923 18.3353 18.613 18.3077C18.8017 18.0563 19.15 17.5921 19.15 17.0011C19.15 15.8515 18.3033 15.1722 17.4597 15.0906C17.0446 15.0504 16.5875 15.1486 16.2207 15.4444C15.8367 15.7539 15.625 16.2215 15.625 16.7623C15.625 17.1766 15.9608 17.5123 16.375 17.5123C16.7892 17.5123 17.125 17.1766 17.125 16.7623Z',
  d4: 'M18.4425 6.27536C18.5886 6.46652 18.7522 6.75077 18.75 7.1004C18.7443 7.97857 18.1458 8.58792 17.54 8.98418C16.9196 9.38997 16.1174 9.69253 15.3293 9.92753C14.5313 10.1655 13.6933 10.3496 12.9758 10.4983C12.4741 10.6005 11.5838 10.7826 11.3249 10.8552C10.9012 10.9741 10.7913 11.0567 10.7425 11.1093C10.6902 11.1657 10.6114 11.2923 10.5124 11.7426L10.5104 11.7517C10.0481 13.8541 9.68698 15.4964 9.30157 16.613C9.10919 17.1705 8.88921 17.6642 8.60512 18.0329C8.30691 18.42 7.89112 18.7245 7.33719 18.7489C6.98111 18.7647 6.69083 18.6021 6.50071 18.4609C6.2991 18.3112 6.11291 18.113 5.94368 17.9016C5.60325 17.4763 5.24878 16.8921 4.89868 16.2231C4.19444 14.8772 3.45027 13.076 2.8212 11.2251C2.19243 9.3752 1.66737 7.44262 1.4141 5.83323C1.28785 5.03098 1.22444 4.28056 1.25964 3.64796C1.29271 3.05346 1.4196 2.39857 1.83126 1.95526C2.25571 1.49817 2.91058 1.33595 3.5071 1.27845C4.13915 1.21753 4.89107 1.25834 5.69427 1.36369C7.30601 1.57509 9.24899 2.06371 11.1123 2.66349C12.977 3.26372 14.7968 3.98654 16.1621 4.68051C16.841 5.02559 17.435 5.37727 17.8699 5.71803C18.0863 5.88759 18.2884 6.07373 18.4425 6.27536Z',
  d5: 'M18 7.33333L2 2L7.33333 18L10 10L18 7.33333Z',
  d6: 'M16.9844 17.9883C16.9844 17.4141 17.3596 16.8075 17.5393 16.575C18.1211 15.9634 18.3134 15.557 18.1211 14.9123C17.636 13.6171 15.6973 13.9767 15.6973 15.3377M16.9844 19V20',
  d7: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM16.4492 15.5325C16.4492 15.2779 16.6621 15.0518 16.9492 15.0518C17.2364 15.0518 17.4492 15.2779 17.4492 15.5325C17.4492 15.6268 17.4218 15.7133 17.3733 15.7873C17.322 15.8658 17.25 15.9536 17.1318 16.0962C17.0238 16.2265 16.8854 16.3936 16.7559 16.585C16.4869 16.9824 16.2413 17.5056 16.2413 18.1982H17.7413C17.7413 17.8909 17.8417 17.6569 17.9982 17.4257C18.0814 17.3026 18.1756 17.1875 18.2868 17.0533L18.305 17.0314C18.4034 16.9127 18.5277 16.7629 18.629 16.6079C18.8313 16.2984 18.9492 15.9283 18.9492 15.5325C18.9492 14.4277 18.0428 13.5518 16.9492 13.5518C15.8557 13.5518 14.9492 14.4277 14.9492 15.5325H16.4492ZM17.001 18.9482C16.5868 18.9482 16.251 19.284 16.251 19.6982C16.251 20.1125 16.5868 20.4482 17.001 20.4482H17.01C17.4242 20.4482 17.76 20.1125 17.76 19.6982C17.76 19.284 17.4242 18.9482 17.01 18.9482H17.001Z',
  d8: 'M1.46969 1.46969C1.67056 1.26882 1.96769 1.19867 2.23719 1.28851L18.2372 6.62184C18.5434 6.72393 18.75 7.01053 18.75 7.33335C18.75 7.65618 18.5434 7.94278 18.2372 8.04487L10.5929 10.5929L8.04487 18.2372C7.94278 18.5434 7.65618 18.75 7.33335 18.75C7.01053 18.75 6.72393 18.5434 6.62184 18.2372L1.28851 2.23719C1.19867 1.96769 1.26882 1.67056 1.46969 1.46969Z',
} as const;

export const IconCursorInfo02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-stroke-rounded IconCursorInfo02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorInfo02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-duotone-rounded IconCursorInfo02DuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorInfo02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-twotone-rounded IconCursorInfo02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorInfo02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-solid-rounded IconCursorInfo02SolidRounded"
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

export const IconCursorInfo02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-bulk-rounded IconCursorInfo02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorInfo02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-stroke-sharp IconCursorInfo02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="17" 
        cy="17" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCursorInfo02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-info-02-solid-sharp IconCursorInfo02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCursorInfo02: TheIconSelfPack = {
  name: 'CursorInfo02',
  StrokeRounded: IconCursorInfo02StrokeRounded,
  DuotoneRounded: IconCursorInfo02DuotoneRounded,
  TwotoneRounded: IconCursorInfo02TwotoneRounded,
  SolidRounded: IconCursorInfo02SolidRounded,
  BulkRounded: IconCursorInfo02BulkRounded,
  StrokeSharp: IconCursorInfo02StrokeSharp,
  SolidSharp: IconCursorInfo02SolidSharp,
};