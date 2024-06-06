import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z',
  d2: 'M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6',
  d3: 'M10.5 9H13.5',
  d4: 'M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22',
  d5: 'M9.40754 1.25L14.5925 1.25H14.5925H14.5926C15.26 1.24998 15.829 1.24997 16.2976 1.29274C16.7948 1.33813 17.2654 1.43733 17.7097 1.68596C18.1614 1.93878 18.4684 2.2801 18.725 2.67155C18.9595 3.02925 19.1836 3.48085 19.4369 3.99115L19.4369 3.99118L20.158 5.44411C20.2343 5.59777 20.2615 5.76125 20.2457 5.91879C20.2485 5.94539 20.25 5.9724 20.25 5.99976V10.3201C20.25 11.8608 20.25 13.0924 20.1214 14.0589C19.9885 15.0577 19.7061 15.8851 19.0567 16.5411C18.4063 17.1982 17.5841 17.4849 16.5918 17.6196C15.6336 17.7498 14.4131 17.7498 12.8893 17.7498H11.1107C9.58689 17.7498 8.36637 17.7498 7.40816 17.6196C6.41588 17.4849 5.59372 17.1982 4.9433 16.5411C4.29392 15.8851 4.01152 15.0577 3.8786 14.0589C3.74997 13.0924 3.74998 11.8608 3.75 10.3201V10.3201V10.3201V10.3201L3.75 5.99976C3.75 5.9724 3.75147 5.94539 3.75432 5.91879C3.73851 5.76124 3.76572 5.59776 3.84199 5.44411L4.54191 4.0339L4.56311 3.99119L4.56311 3.99119C4.81635 3.48088 5.04046 3.02926 5.27496 2.67155C5.53158 2.2801 5.83857 1.93878 6.29031 1.68596C6.73456 1.43733 7.20516 1.33813 7.70236 1.29274C8.17096 1.24997 8.73996 1.24998 9.40744 1.25H9.40751H9.40754ZM17.7005 4.812L17.9178 5.24976L6.08225 5.24976L6.29952 4.812C6.58037 4.24615 6.75744 3.89275 6.92537 3.63659C7.0777 3.40422 7.18149 3.31817 7.2799 3.2631C7.38579 3.20383 7.5431 3.14908 7.88911 3.1175C8.25326 3.08426 8.7278 3.08326 9.45228 3.08326L14.5477 3.08326C15.2722 3.08326 15.7467 3.08426 16.1109 3.1175C16.4569 3.14908 16.6142 3.20383 16.7201 3.2631C16.8185 3.31817 16.9223 3.40422 17.0746 3.63659C17.2426 3.89275 17.4196 4.24615 17.7005 4.812ZM13.2498 7.99988H10.75C10.1977 7.99988 9.75 8.44759 9.75 8.99988C9.75 9.55216 10.1977 9.99988 10.75 9.99988L13.2498 9.99988C13.8021 9.99988 14.2498 9.55216 14.2498 8.99988C14.2498 8.44759 13.8021 7.99988 13.2498 7.99988Z',
  d6: 'M22.75 21.9998C22.75 20.2048 21.2949 18.7498 19.5 18.7498L4.5 18.7498C2.70507 18.7498 1.25 20.2048 1.25 21.9998C1.25 22.414 1.58579 22.7498 2 22.7498C2.41421 22.7498 2.75 22.414 2.75 21.9998C2.75 21.0333 3.5335 20.2498 4.5 20.2498H6.25V21.9998C6.25 22.414 6.58579 22.7498 7 22.7498C7.41421 22.7498 7.75 22.414 7.75 21.9998V20.2498H11.25V21.9998C11.25 22.414 11.5858 22.7498 12 22.7498C12.4142 22.7498 12.75 22.414 12.75 21.9998V20.2498H16.25V21.9998C16.25 22.414 16.5858 22.7498 17 22.7498C17.4142 22.7498 17.75 22.414 17.75 21.9998V20.2498H19.5C20.4665 20.2498 21.25 21.0333 21.25 21.9998C21.25 22.414 21.5858 22.7498 22 22.7498C22.4142 22.7498 22.75 22.414 22.75 21.9998Z',
  d7: 'M3.75 6C3.75 5.58579 4.08579 5.25 4.5 5.25H19.5C19.9142 5.25 20.25 5.58579 20.25 6V10.3203C20.25 11.861 20.25 13.0927 20.1214 14.0591C19.9885 15.0579 19.7061 15.8854 19.0567 16.5414C18.4063 17.1984 17.5841 17.4851 16.5918 17.6199C15.6336 17.75 14.4131 17.75 12.8893 17.75H11.1107C9.58689 17.75 8.36637 17.75 7.40816 17.6199C6.41588 17.4851 5.59372 17.1984 4.9433 16.5414C4.29392 15.8854 4.01152 15.0579 3.8786 14.0591C3.74997 13.0927 3.74998 11.861 3.75 10.3204V10.3204V6Z',
  d8: 'M10.75 8.00024H13.2498C13.8021 8.00024 14.2498 8.44796 14.2498 9.00024C14.2498 9.55253 13.8021 10.0002 13.2498 10.0002H10.75C10.1977 10.0002 9.75 9.55253 9.75 9.00024C9.75 8.44796 10.1977 8.00024 10.75 8.00024Z',
  d9: 'M22.75 22C22.75 20.2051 21.2949 18.75 19.5 18.75L4.5 18.75C2.70507 18.75 1.25 20.2051 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75C2.41421 22.75 2.75 22.4142 2.75 22C2.75 21.0335 3.5335 20.25 4.5 20.25H6.25V22C6.25 22.4142 6.58579 22.75 7 22.75C7.41421 22.75 7.75 22.4142 7.75 22V20.25H11.25V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V20.25H16.25V22C16.25 22.4142 16.5858 22.75 17 22.75C17.4142 22.75 17.75 22.4142 17.75 22V20.25H19.5C20.4665 20.25 21.25 21.0335 21.25 22C21.25 22.4142 21.5858 22.75 22 22.75C22.4142 22.75 22.75 22.4142 22.75 22Z',
  d10: 'M14.5925 1.25024H9.40754C8.74004 1.25023 8.17097 1.25021 7.70236 1.29299C7.20516 1.33837 6.73456 1.43757 6.29031 1.6862C5.83857 1.93903 5.53158 2.28035 5.27496 2.67179C5.04046 3.0295 4.81635 3.48112 4.56311 3.99144L3.84199 5.44435C3.76572 5.59801 3.73851 5.76149 3.75432 5.91903C3.7947 5.5429 4.11314 5.25 4.5 5.25H6.08225L6.29952 4.81225C6.58037 4.2464 6.75744 3.893 6.92537 3.63684C7.0777 3.40446 7.18149 3.31842 7.2799 3.26334C7.38579 3.20408 7.5431 3.14933 7.88911 3.11774C8.25326 3.0845 8.7278 3.08351 9.45228 3.08351H14.5477C15.2722 3.08351 15.7467 3.0845 16.1109 3.11774C16.4569 3.14933 16.6142 3.20408 16.7201 3.26334C16.8185 3.31842 16.9223 3.40446 17.0746 3.63684C17.2426 3.893 17.4196 4.2464 17.7005 4.81225L17.9178 5.25H19.5C19.8869 5.25 20.2053 5.5429 20.2457 5.91904C20.2615 5.76149 20.2343 5.59801 20.158 5.44435L19.4369 3.99143C19.1837 3.48112 18.9595 3.02949 18.725 2.67179C18.4684 2.28035 18.1614 1.93903 17.7097 1.6862C17.2654 1.43757 16.7948 1.33837 16.2976 1.29299C15.829 1.25021 15.26 1.25023 14.5925 1.25024Z',
  d11: 'M4.5 17V6H19.5V17H4.5Z',
  d12: 'M4.5 6L6.5 2.00001L17.5 2L19.5 6',
  d13: 'M10 9H14',
  d14: 'M12.0004 19.5V22M12.0004 19.5L7.00037 19.5M12.0004 19.5H17.0004M7.00037 19.5H2.00037V22M7.00037 19.5V22M17.0004 19.5H22.001L22.0004 22M17.0004 19.5V22',
  d15: 'M20.2549 17.2794C20.2549 17.8155 19.8203 18.25 19.2843 18.25L4.72547 18.25C4.18943 18.25 3.75488 17.8155 3.75488 17.2794L3.75488 6.37381L6.06679 1.75L17.943 1.75L20.2549 6.37381L20.2549 17.2794ZM7.26844 3.69116L6.29785 5.63234L17.7158 5.63234L16.7452 3.69116L7.26844 3.69116ZM10.0049 10.5L14.0049 10.5L14.0049 8.5H10.0049V10.5Z',
  d16: 'M22.5314 19.2197C22.3907 19.079 22.1999 19 22.001 19L2.00037 19C1.58615 19 1.25037 19.3358 1.25037 19.75V22.25H2.75037V20.5H6.25037V22.25L7.75037 22.25V20.5H11.2504V22.25H12.7504V20.5H16.2504V22.25H17.7504V20.5H21.2508L21.2504 22.2498L22.7504 22.2502L22.751 19.7502C22.751 19.5512 22.672 19.3604 22.5314 19.2197Z',
};

export const IconProductLoadingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-stroke-rounded IconProductLoadingStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProductLoadingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-duotone-rounded IconProductLoadingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProductLoadingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-twotone-rounded IconProductLoadingTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProductLoadingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-solid-rounded IconProductLoadingSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconProductLoadingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-bulk-rounded IconProductLoadingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProductLoadingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-stroke-sharp IconProductLoadingStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconProductLoadingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="product-loading-solid-sharp IconProductLoadingSolidSharp"
    >
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

export const iconPackOfProductLoading: TheIconSelfPack = {
  name: 'ProductLoading',
  StrokeRounded: IconProductLoadingStrokeRounded,
  DuotoneRounded: IconProductLoadingDuotoneRounded,
  TwotoneRounded: IconProductLoadingTwotoneRounded,
  SolidRounded: IconProductLoadingSolidRounded,
  BulkRounded: IconProductLoadingBulkRounded,
  StrokeSharp: IconProductLoadingStrokeSharp,
  SolidSharp: IconProductLoadingSolidSharp,
};