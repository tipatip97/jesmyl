import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.52344 14.4367L14.4365 9.52368',
  d2: 'M21.0152 16.0088H19.0115M16.0059 21.0192V19.015',
  d3: 'M2.98242 7.99208H4.98615M7.99175 2.98169V4.98584',
  d4: 'M15.1066 12.5687C16.2466 13.3084 17.4153 13.111 18.2696 12.2566L21.264 9.26159C22.2421 8.28325 22.2421 6.69705 21.264 5.71871L18.2787 2.73278C17.3005 1.75444 15.7147 1.75444 14.7365 2.73278L11.7422 5.72779C11.0404 6.42968 10.6352 7.76371 11.4651 8.91009',
  d5: 'M12.5685 15.1085C13.308 16.2488 13.1106 17.4178 12.2564 18.2722L9.262 21.2672C8.28387 22.2456 6.69801 22.2456 5.71987 21.2672L2.73458 18.2813C1.75644 17.303 1.75644 15.7168 2.73458 14.7384L5.72895 11.7434C6.4307 11.0415 7.76444 10.6362 8.91058 11.4663',
  d6: 'M2.03177 16.9036C2.16293 17.7317 2.84714 18.4159 4.21556 19.7843C5.58398 21.1527 6.26819 21.8369 7.09632 21.9681C7.36377 22.0105 7.63623 22.0105 7.90368 21.9681C8.73181 21.8369 9.41602 21.1527 10.7844 19.7843C12.1529 18.4159 12.8371 17.7317 12.9682 16.9036C13.0106 16.6361 13.0106 16.3637 12.9682 16.0962C12.9156 15.7637 12.7738 15.4545 12.5344 15.1149L8.88502 11.4655C8.54538 11.2261 8.23613 11.0843 7.90368 11.0316C7.63623 10.9893 7.36377 10.9893 7.09632 11.0316C6.26819 11.1628 5.58398 11.847 4.21556 13.2154C2.84714 14.5839 2.16293 15.2681 2.03177 16.0962C1.98941 16.3637 1.98941 16.6361 2.03177 16.9036Z',
  d7: 'M9.54297 14.4558L14.456 9.54285',
  d8: 'M21 15.9999H19M16 20.9999V18.9999',
  d9: 'M3 7.99988H5M8 2.99988V4.99988',
  d10: 'M12.5685 15.1087C13.3082 16.2491 13.1108 17.4181 12.2563 18.2726L9.26109 21.2679C8.28269 22.2463 6.69638 22.2463 5.71798 21.2679L2.73185 18.2817C1.75345 17.3033 1.75345 15.717 2.73185 14.7386L5.72706 11.7434C6.429 11.0414 7.76312 10.6361 8.90958 11.4663M15.1083 12.5689C16.2487 13.3086 17.4177 13.1112 18.2722 12.2567L21.2674 9.2615C22.2458 8.28309 22.2458 6.69678 21.2674 5.71837L18.2813 2.73222C17.3029 1.75381 15.7166 1.75381 14.7382 2.73222L11.743 5.72745C11.041 6.42939 10.6357 7.76352 11.4659 8.90998',
  d11: 'M9.54395 14.4565L14.457 9.54346',
  d12: 'M21.001 16.0005H19.001M16.001 21.0005V19.0005',
  d13: 'M3.00098 8.00049H5.00098M8.00098 3.00049V5.00049',
  d14: 'M15.1076 12.5687C16.2476 13.3084 17.4163 13.111 18.2706 12.2566L21.265 9.26159C22.2431 8.28325 22.2431 6.69705 21.265 5.71871L18.2797 2.73278C17.3015 1.75444 15.7157 1.75444 14.7375 2.73278L11.7432 5.72779C11.0414 6.42968 10.6362 7.76371 11.4661 8.91009',
  d15: 'M12.5695 15.1084C13.309 16.2487 13.1116 17.4177 12.2574 18.2721L9.26298 21.2671C8.28485 22.2455 6.69899 22.2455 5.72085 21.2671L2.73556 18.2812C1.75742 17.3029 1.75742 15.7167 2.73556 14.7383L5.72993 11.7433C6.43168 11.0414 7.76542 10.6361 8.91156 11.4662',
  d16: 'M15.1631 8.83574C15.5536 9.22626 15.5536 9.85943 15.1631 10.25L10.2501 15.163C9.85955 15.5535 9.22639 15.5535 8.83586 15.163C8.44534 14.7724 8.44534 14.1393 8.83586 13.7487L13.7489 8.83574C14.1394 8.44522 14.7726 8.44522 15.1631 8.83574Z',
  d17: 'M6.93989 10.044C7.31098 9.98518 7.68902 9.98518 8.06011 10.044C8.37795 10.0943 8.67232 10.196 8.95339 10.339C9.44565 10.5894 9.64171 11.1914 9.39131 11.6837C9.14091 12.1759 8.53887 12.372 8.04661 12.1216C7.80169 11.997 7.52198 11.9767 7.25276 12.0193C7.08149 12.0465 6.86432 12.1339 6.48538 12.4387C6.09177 12.7554 5.62263 13.2226 4.92267 13.9225C4.22271 14.6225 3.75551 15.0916 3.43885 15.4853C3.1301 15.869 2.94086 16.2509 3.01946 16.7471C3.04658 16.9184 3.134 17.1356 3.43885 17.5145C3.75551 17.9081 4.22271 18.3773 4.92267 19.0772C5.62263 19.7772 6.09177 20.2444 6.48538 20.561C6.86916 20.8698 7.251 21.059 7.74724 20.9804C7.91851 20.9533 8.13568 20.8659 8.51462 20.561C8.90823 20.2444 9.37737 19.7772 10.0773 19.0772C10.7773 18.3773 11.2445 17.9081 11.5611 17.5145C11.866 17.1356 11.9534 16.9184 11.9805 16.7471C12.0232 16.4779 12.0029 16.1982 11.8783 15.9533C11.6279 15.461 11.824 14.859 12.3162 14.6086C12.8085 14.3582 13.4105 14.5542 13.6609 15.0465C13.8039 15.3276 13.9056 15.6219 13.9559 15.9398C14.0147 16.3109 14.0147 16.6889 13.9559 17.06C13.8519 17.7169 13.5316 18.2559 13.1195 18.7682C12.7268 19.2562 12.1815 19.8015 11.5301 20.4529L11.53 20.453C10.9596 21.0234 10.3978 21.6129 9.76828 22.1193C9.25598 22.5315 8.71698 22.8518 8.06011 22.9558C7.68901 23.0146 7.31098 23.0146 6.93989 22.9558C6.28302 22.8518 5.74402 22.5315 5.23172 22.1193C4.74366 21.7267 4.19833 21.1813 3.54691 20.5299C2.97651 19.9595 2.38699 19.3977 1.88054 18.7682C1.46839 18.2559 1.14812 17.7169 1.04408 17.06C0.985306 16.6889 0.985306 16.3109 1.04408 15.9398C1.14812 15.2829 1.46839 14.7439 1.88054 14.2316C2.27318 13.7435 2.81853 13.1982 3.46998 12.5468C4.0404 11.9764 4.60217 11.3869 5.23172 10.8804C5.74402 10.4683 6.28302 10.148 6.93989 10.044Z',
  d18: 'M15.9399 1.04396C16.311 0.985183 16.689 0.985185 17.0601 1.04396C17.717 1.148 18.256 1.46827 18.7683 1.88042C19.2563 2.27306 19.8017 2.81841 20.4531 3.46986C21.0235 4.04027 21.613 4.60206 22.1195 5.2316C22.5316 5.7439 22.8519 6.2829 22.9559 6.93976C23.0147 7.31085 23.0147 7.68889 22.9559 8.05999C22.8519 8.71686 22.5316 9.25586 22.1195 9.76816C21.7268 10.2562 21.1814 10.8016 20.53 11.453C19.9596 12.0234 19.3978 12.6129 18.7683 13.1193C18.256 13.5315 17.717 13.8518 17.0601 13.9558C16.689 14.0146 16.311 14.0146 15.9399 13.9558C15.6221 13.9055 15.3277 13.8038 15.0466 13.6608C14.5544 13.4104 14.3583 12.8084 14.6087 12.3161C14.8591 11.8238 15.4611 11.6278 15.9534 11.8782C16.1983 12.0028 16.478 12.0231 16.7472 11.9804C16.9185 11.9533 17.1357 11.8659 17.5146 11.561C17.9082 11.2444 18.3774 10.7772 19.0773 10.0772C19.7773 9.37725 20.2445 8.90811 20.5611 8.5145C20.8699 8.13071 21.0591 7.74888 20.9805 7.25263C20.9534 7.08137 20.866 6.86419 20.5611 6.48526C20.2445 6.09165 19.7773 5.62251 19.0773 4.92255C18.3774 4.22259 17.9082 3.75539 17.5146 3.43873C17.1357 3.13388 16.9185 3.04646 16.7472 3.01934C16.251 2.94074 15.8692 3.12998 15.4854 3.43873C15.0918 3.75539 14.6226 4.22259 13.9227 4.92255C13.2227 5.62251 12.7555 6.09165 12.4389 6.48525C12.134 6.86419 12.0466 7.08137 12.0195 7.25263C11.9768 7.52186 11.9971 7.80156 12.1217 8.04649C12.3721 8.53875 12.176 9.14079 11.6838 9.39119C11.1915 9.64159 10.5895 9.44553 10.3391 8.95327C10.1961 8.67219 10.0944 8.37783 10.0441 8.05999C9.98531 7.6889 9.98531 7.31086 10.0441 6.93976C10.1481 6.2829 10.4684 5.7439 10.8805 5.2316C11.2732 4.74354 11.8185 4.19822 12.47 3.5468C13.0404 2.97641 13.6022 2.38688 14.2317 1.88042C14.744 1.46827 15.283 1.148 15.9399 1.04396Z',
  d19: 'M18 16C18 15.4477 18.4477 15 19 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C18.4477 17 18 16.5523 18 16ZM16 18C16.5523 18 17 18.4477 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V19C15 18.4477 15.4477 18 16 18Z',
  d20: 'M8 2C8.55228 2 9 2.44772 9 3V5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5V3C7 2.44772 7.44772 2 8 2ZM2 8C2 7.44772 2.44772 7 3 7H5C5.55228 7 6 7.44772 6 8C6 8.55228 5.55228 9 5 9H3C2.44772 9 2 8.55228 2 8Z',
  d21: 'M8 15.9993L15.9985 7.99939',
  d22: 'M15.125 11.6249L16.5 12.9999L22 7.49988L16.5 1.99988L11 7.49988L12.375 8.87488',
  d23: 'M11.625 15.1249L13 16.4999L7.5 21.9999L2 16.4999L7.5 10.9999L8.875 12.3749',
  d24: 'M21 16H18M16 21V18',
  d25: 'M3 8H6M8 3V6',
  d26: 'M16.7058 8.70645L8.70731 16.7064L7.29297 15.2923L15.2915 7.29236L16.7058 8.70645Z',
  d27: 'M15.7929 1.29277C16.1834 0.902247 16.8166 0.902247 17.2071 1.29277L22.7071 6.79277C23.0976 7.1833 23.0976 7.81646 22.7071 8.20698L17.2071 13.707C16.8166 14.0975 16.1834 14.0975 15.7929 13.707L14.4179 12.332L15.8321 10.9178L16.5 11.5857L20.5858 7.49988L16.5 3.41409L12.4142 7.49988L13.0821 8.16777L11.6679 9.58198L10.2929 8.20698C9.90237 7.81646 9.90237 7.1833 10.2929 6.79277L15.7929 1.29277Z',
  d28: 'M6.79289 10.2928C7.18342 9.90225 7.81658 9.90225 8.20711 10.2928L9.58211 11.6678L8.16789 13.082L7.5 12.4141L3.41421 16.4999L7.5 20.5857L11.5858 16.4999L10.9179 15.832L12.3321 14.4178L13.7071 15.7928C14.0976 16.1833 14.0976 16.8165 13.7071 17.207L8.20711 22.707C7.81658 23.0975 7.18342 23.0975 6.79289 22.707L1.29289 17.207C0.902369 16.8165 0.902369 16.1833 1.29289 15.7928L6.79289 10.2928Z',
  d29: 'M18 15H21V17H18V15ZM17 18V21H15V18H17Z',
  d30: 'M7 6V3H9V6H7ZM6 9H3V7H6V9Z',
};

export const IconUnlink03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-stroke-rounded IconUnlink03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-duotone-rounded IconUnlink03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconUnlink03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-twotone-rounded IconUnlink03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-solid-rounded IconUnlink03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-bulk-rounded IconUnlink03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-stroke-sharp IconUnlink03StrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-03-solid-sharp IconUnlink03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUnlink03: TheIconSelfPack = {
  name: 'Unlink03',
  StrokeRounded: IconUnlink03StrokeRounded,
  DuotoneRounded: IconUnlink03DuotoneRounded,
  TwotoneRounded: IconUnlink03TwotoneRounded,
  SolidRounded: IconUnlink03SolidRounded,
  BulkRounded: IconUnlink03BulkRounded,
  StrokeSharp: IconUnlink03StrokeSharp,
  SolidSharp: IconUnlink03SolidSharp,
};