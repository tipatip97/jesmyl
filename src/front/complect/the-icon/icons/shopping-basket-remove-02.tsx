import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 15L17.5 18.5M17.5 18.5L21 22M17.5 18.5L14 22M17.5 18.5L21 15',
  d2: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d3: 'M20.3926 12.5L20.8221 9.93557C21.0113 8.8063 21.1059 8.24167 20.8146 7.87083C20.5234 7.5 19.9853 7.5 18.9092 7.5H5.09079C4.01468 7.5 3.47662 7.5 3.18537 7.87083C2.89411 8.24167 2.98869 8.8063 3.17786 9.93557L4.34085 16.8781C4.75097 19.3264 4.95603 20.5505 5.76809 21.2752C6.58014 22 7.74664 22 10.0796 22H11',
  d4: 'M4.5 17.5H11',
  d5: 'M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.6167 17.1313 19.5765 17.3714 19.5376 17.5993H4.46242C4.42349 17.3714 4.38327 17.1313 4.34085 16.8781Z',
  d6: 'M11.875 3.125C9.66586 3.125 7.875 4.91586 7.875 7.125V7.625C7.875 8.17728 7.42728 8.625 6.875 8.625C6.32272 8.625 5.875 8.17728 5.875 7.625V7.125C5.875 3.81129 8.56129 1.125 11.875 1.125C15.1887 1.125 17.875 3.81129 17.875 7.125V7.625C17.875 8.17728 17.4273 8.625 16.875 8.625C16.3227 8.625 15.875 8.17728 15.875 7.625V7.125C15.875 4.91586 14.0841 3.125 11.875 3.125Z',
  d7: 'M21.5821 14.1679C21.9726 14.5584 21.9726 15.1916 21.5821 15.5821L18.7892 18.375L21.5821 21.1679C21.9726 21.5584 21.9726 22.1916 21.5821 22.5821C21.1916 22.9726 20.5584 22.9726 20.1679 22.5821L17.375 19.7892L14.5821 22.5821C14.1916 22.9726 13.5584 22.9726 13.1679 22.5821C12.7774 22.1916 12.7774 21.5584 13.1679 21.1679L15.9608 18.375L13.1679 15.5821C12.7774 15.1916 12.7774 14.5584 13.1679 14.1679C13.5584 13.7774 14.1916 13.7774 14.5821 14.1679L17.375 16.9608L20.1679 14.1679C20.5584 13.7774 21.1916 13.7774 21.5821 14.1679Z',
  d8: 'M3.60622 6.67985C3.96847 6.62488 4.42069 6.62494 4.91418 6.625H18.8358C19.3293 6.62494 19.7815 6.62488 20.1438 6.67985C20.5459 6.74089 20.9689 6.88713 21.2795 7.28259C21.5825 7.66848 21.6366 8.1121 21.6231 8.51862C21.6106 8.89781 21.5326 9.36325 21.4447 9.88736L21.1164 11.8472C21.0768 12.0835 21.0571 12.2016 20.9881 12.2698C20.9191 12.338 20.7757 12.3602 20.489 12.4048C19.9832 12.4834 19.4969 12.7176 19.1072 13.1072L17.7993 14.4152C17.5993 14.6152 17.4993 14.7152 17.375 14.7152C17.2507 14.7152 17.1507 14.6152 16.9507 14.4152L15.6428 13.1072C14.6665 12.1309 13.0835 12.1309 12.1072 13.1072C11.5157 13.6988 11.2825 14.5131 11.4079 15.2801C11.5041 15.8691 11.5522 16.1636 11.4623 16.2693C11.3725 16.375 11.1393 16.375 10.6729 16.375H3.89991C3.65734 16.375 3.53606 16.375 3.45216 16.304C3.36826 16.233 3.34823 16.1134 3.30815 15.8741L2.30527 9.88734C2.21742 9.36322 2.13942 8.89782 2.12686 8.51862C2.1134 8.1121 2.16745 7.66848 2.47054 7.28259C2.78113 6.88713 3.20406 6.74089 3.60622 6.67985Z',
  d9: 'M12.8152 19.3993C13.2511 18.9633 13.4691 18.7454 13.3924 18.5602C13.3157 18.375 13.0074 18.375 12.3909 18.375H4.45718C4.11991 18.375 3.95127 18.375 3.86121 18.4869C3.77114 18.5989 3.8065 18.7602 3.8772 19.0829C3.93428 19.3433 3.99386 19.5846 4.05849 19.8071C4.28233 20.578 4.5905 21.2161 5.14368 21.7098C5.70196 22.2081 6.36025 22.4261 7.13014 22.5279C7.86418 22.6251 8.78041 22.625 9.90298 22.625H10.6727C11.0154 22.625 11.1868 22.625 11.2742 22.5395C11.3617 22.4539 11.3663 22.2425 11.3756 21.8197C11.3893 21.1985 11.6331 20.5813 12.1072 20.1072L12.8152 19.3993Z',
  d10: 'M12.8154 19.3993C13.2513 18.9633 13.4693 18.7454 13.3926 18.5602C13.3159 18.375 13.0076 18.375 12.3911 18.375H4.45738C4.1201 18.375 3.95147 18.375 3.8614 18.4869C3.77134 18.5989 3.80669 18.7602 3.8774 19.0829C3.93447 19.3433 3.99406 19.5846 4.05869 19.8071C4.28253 20.578 4.59069 21.2161 5.14388 21.7098C5.70216 22.2081 6.36045 22.4261 7.13033 22.5279C7.86438 22.6251 8.78061 22.625 9.90318 22.625H10.6729C11.0156 22.625 11.187 22.625 11.2744 22.5395C11.3619 22.4539 11.3665 22.2425 11.3758 21.8197C11.3895 21.1985 11.6333 20.5813 12.1074 20.1072L12.8154 19.3993Z',
  d11: 'M2.5 7.5V6.75C2.2788 6.75 2.06889 6.84764 1.92638 7.01682C1.78388 7.186 1.72332 7.40945 1.7609 7.62743L2.5 7.5ZM5 22L4.2609 22.1274L4.36824 22.75H5V22ZM21.5 7.5L22.2391 7.62743C22.2767 7.40945 22.2161 7.186 22.0736 7.01682C21.9311 6.84764 21.7212 6.75 21.5 6.75V7.5ZM1.7609 7.62743L4.2609 22.1274L5.73909 21.8726L3.2391 7.37257L1.7609 7.62743ZM5 22.75H11V21.25H5V22.75ZM2.5 8.25H21.5V6.75H2.5V8.25ZM20.7609 7.37257L19.8126 12.8726L21.2908 13.1274L22.2391 7.62743L20.7609 7.37257Z',
  d12: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d13: 'M13.5 15L17 18.5M17 18.5L20.5 22M17 18.5L13.5 22M17 18.5L20.5 15',
  d14: 'M17.1288 18.543L14.3359 21.3359L15.7502 22.7502L18.543 19.9573L21.3359 22.7502L22.7502 21.3359L19.9573 18.543L22.7502 15.7502L21.3359 14.3359L18.543 17.1288L15.7502 14.3359L14.3359 15.7502L17.1288 18.543Z',
  d15: 'M11.5 1.25C8.25021 1.25 5.55745 3.63491 5.07645 6.75H2.00001C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L2.79066 16.5H12.965L12.2148 15.7499L15.7504 12.2144L18.5433 15.0072L20.8674 12.6831L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H17.9236C17.4425 3.63491 14.7498 1.25 11.5 1.25ZM11.5 3.25C9.35841 3.25 7.56624 4.74601 7.11151 6.75H15.8885C15.4338 4.74601 13.6416 3.25 11.5 3.25Z',
  d16: 'M14.965 18.5H3.13549L3.86825 22.75H13.6292L12.2148 21.3357L15.0077 18.5428L14.965 18.5Z',
} as const;

export const IconShoppingBasketRemove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-stroke-rounded IconShoppingBasketRemove02StrokeRounded"
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

export const IconShoppingBasketRemove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-duotone-rounded IconShoppingBasketRemove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
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

export const IconShoppingBasketRemove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-twotone-rounded IconShoppingBasketRemove02TwotoneRounded"
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

export const IconShoppingBasketRemove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-solid-rounded IconShoppingBasketRemove02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-bulk-rounded IconShoppingBasketRemove02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-stroke-sharp IconShoppingBasketRemove02StrokeSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-02-solid-sharp IconShoppingBasketRemove02SolidSharp"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketRemove02: TheIconSelfPack = {
  name: 'ShoppingBasketRemove02',
  StrokeRounded: IconShoppingBasketRemove02StrokeRounded,
  DuotoneRounded: IconShoppingBasketRemove02DuotoneRounded,
  TwotoneRounded: IconShoppingBasketRemove02TwotoneRounded,
  SolidRounded: IconShoppingBasketRemove02SolidRounded,
  BulkRounded: IconShoppingBasketRemove02BulkRounded,
  StrokeSharp: IconShoppingBasketRemove02StrokeSharp,
  SolidSharp: IconShoppingBasketRemove02SolidSharp,
};