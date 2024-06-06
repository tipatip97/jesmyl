import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 20.5V22',
  d2: 'M7 20.5V22',
  d3: 'M4 6.78186C4 6.14251 4 5.82283 4.17387 5.43355C4.34773 5.04428 4.52427 4.88606 4.87736 4.56964C6.03437 3.53277 8.36029 2 12 2C15.6397 2 17.9656 3.53277 19.1226 4.56964C19.4757 4.88606 19.6523 5.04428 19.8261 5.43355C20 5.82283 20 6.14251 20 6.78186V14C20 16.8284 20 18.2426 19.1213 19.1213C18.2426 20 16.8284 20 14 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V6.78186Z',
  d4: 'M4 14C4 14 7.73333 15 12 15C16.2667 15 20 14 20 14',
  d5: 'M4.5 17.5H6',
  d6: 'M18 17.5H19.5',
  d7: 'M11 17.5L13 17.5',
  d8: 'M4 6H20',
  d9: 'M2 9L2 10',
  d10: 'M22 9L22 10',
  d11: 'M16.0586 14.9256C13.4038 15.2442 10.5849 15.0959 8.21203 14.7905C6.51685 14.5722 5.66926 14.4631 4.96671 13.8155C4.82643 13.6862 4.66292 13.5003 4.55259 13.3446C4 12.5651 4 11.6133 4 9.70972C4 8.10469 4 7.30218 4.4341 6.75583C4.52876 6.6367 4.6367 6.52876 4.75583 6.4341C5.30218 6 6.10469 6 7.70972 6H16.0598C17.8873 6 18.801 6 19.3806 6.55297C19.4033 6.57458 19.4254 6.59673 19.447 6.61938C20 7.19895 20 8.1127 20 9.9402C20 11.9088 20 12.893 19.2868 13.733C19.2635 13.7604 19.2249 13.8039 19.2004 13.8303C18.4514 14.6385 17.6538 14.7342 16.0586 14.9256Z',
  d12: 'M17 19.375C17.5523 19.375 18 19.8227 18 20.375V21.875C18 22.4273 17.5523 22.875 17 22.875C16.4477 22.875 16 22.4273 16 21.875V20.375C16 19.8227 16.4477 19.375 17 19.375Z',
  d13: 'M7 19.375C7.55228 19.375 8 19.8227 8 20.375V21.875C8 22.4273 7.55228 22.875 7 22.875C6.44772 22.875 6 22.4273 6 21.875V20.375C6 19.8227 6.44772 19.375 7 19.375Z',
  d14: 'M4.42453 3.8793C5.67932 2.75158 8.16215 1.125 11.998 1.125C15.8339 1.125 18.3168 2.75158 19.5716 3.8793L19.5967 3.90191C19.9368 4.20737 20.2405 4.48012 20.4944 5.0501C20.7492 5.62236 20.7486 6.12699 20.748 6.67827L20.7479 13.8688C20.748 15.1891 20.748 16.2778 20.6325 17.1394C20.5112 18.0441 20.2468 18.843 19.6089 19.4827C18.971 20.1224 18.1744 20.3876 17.2723 20.5092C16.4131 20.6251 15.3275 20.625 14.011 20.625H9.98505C8.66855 20.625 7.58296 20.6251 6.72376 20.5092C5.82172 20.3876 5.02506 20.1224 4.38719 19.4827C3.74932 18.843 3.48491 18.0441 3.36363 17.1394C3.24811 16.2778 3.24814 15.1891 3.24818 13.8688L3.24811 6.67827C3.24746 6.12699 3.24687 5.62235 3.50173 5.0501C3.75557 4.48012 4.05925 4.20737 4.39936 3.90191L4.42453 3.8793ZM5.19163 7.22498C5.19164 6.94214 5.19165 6.80073 5.27951 6.71286C5.36738 6.625 5.5088 6.625 5.79163 6.625H18.2021C18.4849 6.625 18.6263 6.625 18.7142 6.71286C18.8021 6.80073 18.8021 6.94214 18.8021 7.22498L18.8023 12.8958C18.8023 13.1297 18.8023 13.2466 18.7339 13.3297C18.6655 13.4128 18.5522 13.435 18.3255 13.4793C18.0684 13.5296 17.7828 13.5825 17.4727 13.6353C16.0327 13.8808 14.077 14.1247 11.9987 14.1247C9.92049 14.1247 7.96474 13.8808 6.52476 13.6353C6.21311 13.5822 5.92621 13.5291 5.66812 13.4786C5.44149 13.4342 5.32817 13.412 5.25979 13.3289C5.19141 13.2458 5.19142 13.1289 5.19142 12.8951L5.19163 7.22498ZM11 18.125H13C13.4142 18.125 13.75 17.7892 13.75 17.375C13.75 16.9608 13.4142 16.625 13 16.625H11C10.5858 16.625 10.25 16.9608 10.25 17.375C10.25 17.7892 10.5858 18.125 11 18.125ZM6 16.625C5.58579 16.625 5.25 16.9608 5.25 17.375C5.25 17.7892 5.58579 18.125 6 18.125H6.5C6.91421 18.125 7.25 17.7892 7.25 17.375C7.25 16.9608 6.91421 16.625 6.5 16.625H6ZM17.5 16.625C17.0858 16.625 16.75 16.9608 16.75 17.375C16.75 17.7892 17.0858 18.125 17.5 18.125H18C18.4142 18.125 18.75 17.7892 18.75 17.375C18.75 16.9608 18.4142 16.625 18 16.625H17.5Z',
  d15: 'M1.5 7.875C2.05228 7.875 2.5 8.32272 2.5 8.875V9.875C2.5 10.4273 2.05228 10.875 1.5 10.875C0.947715 10.875 0.5 10.4273 0.5 9.875L0.5 8.875C0.5 8.32272 0.947715 7.875 1.5 7.875Z',
  d16: 'M22.5 7.875C23.0523 7.875 23.5 8.32272 23.5 8.875V9.875C23.5 10.4273 23.0523 10.875 22.5 10.875C21.9477 10.875 21.5 10.4273 21.5 9.875V8.875C21.5 8.32272 21.9477 7.875 22.5 7.875Z',
  d17: 'M6.00001 20.3702C6 20.3717 6 20.3733 6 20.3748V21.8748C6 22.4271 6.44772 22.8748 7 22.8748C7.55228 22.8748 8 22.4271 8 21.8748V20.6049C7.52985 20.589 7.10457 20.5604 6.72376 20.5091C6.47406 20.4754 6.23243 20.4307 6.00001 20.3702ZM16 20.6048V21.8748C16 22.4271 16.4477 22.8748 17 22.8748C17.5523 22.8748 18 22.4271 18 21.8748V20.3748C18 20.3729 18 20.371 18 20.3691C17.7664 20.4302 17.5234 20.4752 17.2723 20.5091C16.8926 20.5603 16.4686 20.5888 16 20.6048Z',
  d18: 'M4.42453 3.8793C5.67932 2.75158 8.16215 1.125 11.998 1.125C15.8339 1.125 18.3168 2.75158 19.5716 3.8793L19.5967 3.90191C19.9368 4.20737 20.2405 4.48012 20.4944 5.0501C20.7492 5.62236 20.7486 6.12699 20.748 6.67827L20.7479 13.8688C20.748 15.1891 20.748 16.2778 20.6325 17.1394C20.5112 18.0441 20.2468 18.843 19.6089 19.4827C18.971 20.1224 18.1744 20.3876 17.2723 20.5092C16.4131 20.6251 15.3275 20.625 14.011 20.625H9.98505C8.66855 20.625 7.58296 20.6251 6.72376 20.5092C5.82172 20.3876 5.02506 20.1224 4.38719 19.4827C3.74932 18.843 3.48491 18.0441 3.36363 17.1394C3.24811 16.2778 3.24814 15.1891 3.24818 13.8688L3.24811 6.67827C3.24746 6.12699 3.24687 5.62235 3.50173 5.0501C3.75557 4.48012 4.05925 4.20737 4.39936 3.90191L4.42453 3.8793Z',
  d19: 'M5.79357 6.625H18.204C18.4869 6.625 18.6283 6.625 18.7161 6.71286C18.804 6.80073 18.804 6.94214 18.804 7.22498L18.8042 12.8958C18.8042 13.1297 18.8042 13.2466 18.7359 13.3297C18.6675 13.4128 18.5541 13.435 18.3275 13.4793C18.0704 13.5296 17.7848 13.5825 17.4747 13.6353C16.0347 13.8808 14.0789 14.1247 12.0007 14.1247C9.92242 14.1247 7.96667 13.8808 6.5267 13.6353C6.21504 13.5822 5.92814 13.5291 5.67005 13.4786C5.44342 13.4342 5.33011 13.412 5.26173 13.3289C5.19335 13.2458 5.19335 13.1289 5.19336 12.8951L5.19357 7.22498C5.19358 6.94214 5.19358 6.80073 5.28145 6.71286C5.36932 6.625 5.51073 6.625 5.79357 6.625Z',
  d20: 'M13 18.125L11 18.125C10.5858 18.125 10.25 17.7892 10.25 17.375C10.25 16.9608 10.5858 16.625 11 16.625L13 16.625C13.4142 16.625 13.75 16.9608 13.75 17.375C13.75 17.7892 13.4142 18.125 13 18.125ZM5.25 17.375C5.25 16.9608 5.58579 16.625 6 16.625H6.5C6.91421 16.625 7.25 16.9608 7.25 17.375C7.25 17.7892 6.91421 18.125 6.5 18.125H6C5.58579 18.125 5.25 17.7892 5.25 17.375ZM16.75 17.375C16.75 16.9608 17.0858 16.625 17.5 16.625H18C18.4142 16.625 18.75 16.9608 18.75 17.375C18.75 17.7892 18.4142 18.125 18 18.125H17.5C17.0858 18.125 16.75 17.7892 16.75 17.375Z',
  d21: 'M17 18.5V21.5',
  d22: 'M7 18.5V21.5',
  d23: 'M19.5 18.5V2.5H4.5V18.5H19.5Z',
  d24: 'M4.5 15.5H6.5',
  d25: 'M17.5 15.5H19.5',
  d26: 'M10 15.5L14 15.5',
  d27: 'M4.5 12.5H19',
  d28: 'M2 7.5L2 10.5M22 7.5V10.5',
  d29: 'M6 18.75V21.75H8V18.75H6Z',
  d30: 'M16 18.75V21.75H18V18.75H16Z',
  d31: 'M4.72059 2.25C4.18455 2.25 3.75 2.68777 3.75 3.22778L3.75129 18.7722C3.75129 19.3122 4.18583 19.75 4.72187 19.75H19.2807C19.8167 19.75 20.2513 19.3122 20.2513 18.7722L20.25 3.22778C20.25 2.68777 19.8155 2.25 19.2794 2.25H4.72059ZM5.69141 12.2495V4.20508H18.3091V12.2495H5.69141ZM7.5 16.751H5.5V15.251H7.5V16.751ZM16.5 16.751H18.5V15.251H16.5V16.751ZM14 16.751H10V15.251H14V16.751Z',
  d32: 'M2 8.00098L2 11.001M22 8.00098V11.001',
};

export const IconBus01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-stroke-rounded IconBus01StrokeRounded"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBus01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-duotone-rounded IconBus01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBus01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-twotone-rounded IconBus01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBus01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-solid-rounded IconBus01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBus01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-bulk-rounded IconBus01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBus01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-stroke-sharp IconBus01StrokeSharp"
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
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBus01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bus-01-solid-sharp IconBus01SolidSharp"
    >
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBus01: TheIconSelfPack = {
  name: 'Bus01',
  StrokeRounded: IconBus01StrokeRounded,
  DuotoneRounded: IconBus01DuotoneRounded,
  TwotoneRounded: IconBus01TwotoneRounded,
  SolidRounded: IconBus01SolidRounded,
  BulkRounded: IconBus01BulkRounded,
  StrokeSharp: IconBus01StrokeSharp,
  SolidSharp: IconBus01SolidSharp,
};