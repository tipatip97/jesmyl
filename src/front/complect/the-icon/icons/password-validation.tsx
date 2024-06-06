import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.4082 16.6682C13.4082 16.6682 14.0332 16.6682 14.6582 18.0015C14.6582 18.0015 16.6435 14.6682 18.4082 14.0015',
  d2: 'M16.9434 7.00146H16.9524',
  d3: 'M11.9434 7.00146H11.9524',
  d4: 'M6.94336 7.00146H6.95234',
  d5: 'M7.89193 11.9685H5.00845C3.34693 11.9685 2 10.6254 2 8.96851V4.99854C2 3.34168 3.34693 1.99854 5.00845 1.99854H18.9916C20.6531 1.99854 22 3.34168 22 4.99854V9.12944',
  d6: 'M21.9996 16.0015C21.9996 12.6878 19.3057 10.0015 15.9827 10.0015C12.6597 10.0015 9.96582 12.6878 9.96582 16.0015C9.96582 19.3152 12.6597 22.0015 15.9827 22.0015C19.3057 22.0015 21.9996 19.3152 21.9996 16.0015Z',
  d7: 'M22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16Z',
  d8: 'M14 16.6667C14 16.6667 14.625 16.6667 15.25 18C15.25 18 17.2353 14.6667 19 14',
  d9: 'M7.88998 11.968H5.0065C3.34498 11.968 1.99805 10.6249 1.99805 8.96802V4.99805C1.99805 3.34119 3.34498 1.99805 5.0065 1.99805H18.9896C20.6511 1.99805 21.998 3.34119 21.998 4.99805V9.12895',
  d10: 'M17 7H17.009',
  d11: 'M12 7H12.009',
  d12: 'M7 7H7.00898',
  d13: 'M22 15.9906C22 12.6721 19.3137 9.98193 16 9.98193C12.6863 9.98193 10 12.6721 10 15.9906C10 19.309 12.6863 21.9992 16 21.9992C19.3137 21.9992 22 19.309 22 15.9906Z',
  d14: 'M14 16.6583C14 16.6583 14.625 16.6583 15.25 17.9936C15.25 17.9936 17.2353 14.6555 19 13.9878',
  d15: 'M17 6.97754H17.009',
  d16: 'M12 6.97754H12.009',
  d17: 'M7 6.97754H7.00898',
  d18: 'M8.03867 11.9848H5.00845C3.34693 11.9848 2 10.6397 2 8.98049V5.00481C2 3.34557 3.34693 2.00049 5.00845 2.00049H18.9916C20.6531 2.00049 22 3.34557 22 5.00481V9.26732',
  d19: 'M9.25 16C9.25 19.7279 12.2721 22.75 16 22.75C19.7279 22.75 22.75 19.7279 22.75 16C22.75 12.2721 19.7279 9.25 16 9.25C12.2721 9.25 9.25 12.2721 9.25 16ZM19.2016 13.7352C19.348 14.1226 19.1525 14.5554 18.7651 14.7018C18.4574 14.818 18.0868 15.0755 17.6819 15.4542C17.2857 15.8248 16.8985 16.2717 16.554 16.7122C16.211 17.1509 15.9193 17.5714 15.7132 17.8829C15.5567 18.1147 15.4354 18.3135 15.3944 18.384C15.2523 18.6224 14.9901 18.763 14.713 18.7493C14.4357 18.7356 14.1887 18.5699 14.0709 18.3185C13.7982 17.7368 13.5595 17.5183 13.456 17.4448C13.4304 17.4265 13.4113 17.4159 13.3998 17.4102C13.033 17.3613 12.75 17.0471 12.75 16.6669C12.75 16.2527 13.0858 15.9169 13.5 15.9169C13.5624 15.918 13.715 15.9303 13.8261 15.9703C13.9721 16.0148 14.1427 16.0925 14.3253 16.2223C14.4677 16.3236 14.6134 16.4536 14.7589 16.619C14.9359 16.3658 15.1431 16.0814 15.3725 15.7882C15.7448 15.312 16.1849 14.8006 16.6572 14.3587C17.1209 13.9249 17.6602 13.5157 18.2349 13.2986C18.6224 13.1522 19.0552 13.3477 19.2016 13.7352Z',
  d20: 'M16.9314 1.25C17.8065 1.24999 18.5287 1.24997 19.1147 1.30206C19.7242 1.35623 20.2818 1.47274 20.7955 1.76357C21.3897 2.10002 21.8832 2.58393 22.2263 3.16667C22.5229 3.67041 22.6417 4.21714 22.6969 4.81484C22.75 5.38955 22.75 6.09774 22.75 6.9559V7.01153V7.01178C22.75 7.5623 22.75 8.04617 22.7376 8.4653C22.7219 8.99435 22.2719 9.41078 21.7324 9.39543C21.1929 9.38008 20.7682 8.93875 20.7839 8.4097C20.7954 8.02131 20.7955 7.56434 20.7955 7C20.7955 6.08669 20.7945 5.46578 20.7503 4.98784C20.7074 4.52308 20.6298 4.2884 20.5336 4.125C20.362 3.83363 20.1153 3.59167 19.8182 3.42345C19.6515 3.32911 19.4122 3.25303 18.9383 3.2109C18.4509 3.16759 17.8177 3.16667 16.8864 3.16667H7.11364C6.18228 3.16667 5.5491 3.16759 5.06171 3.2109C4.58777 3.25303 4.34845 3.32911 4.18182 3.42345C3.88469 3.59167 3.63795 3.83363 3.46641 4.125C3.3702 4.28841 3.29261 4.52308 3.24966 4.98784C3.20548 5.46578 3.20455 6.08669 3.20455 7C3.20455 7.91331 3.20548 8.53422 3.24966 9.01216C3.29261 9.47692 3.3702 9.71159 3.46641 9.875C3.63795 10.1664 3.88469 10.4083 4.18182 10.5765C4.34845 10.6709 4.58777 10.747 5.06171 10.7891C5.5491 10.8324 6.18228 10.8333 7.11364 10.8333H7.60227C8.14201 10.8333 8.57955 11.2624 8.57955 11.7917C8.57955 12.3209 8.14201 12.75 7.60227 12.75H7.06863H7.06859C6.1935 12.75 5.47134 12.75 4.88529 12.6979C4.27578 12.6438 3.71824 12.5273 3.20455 12.2364C2.61029 11.9 2.11681 11.4161 1.77372 10.8333C1.47714 10.3296 1.35833 9.78286 1.30309 9.18516C1.24997 8.61046 1.24999 7.90229 1.25 7.04414V7.04412V6.95588V6.95586C1.24999 6.09771 1.24997 5.38954 1.30309 4.81484C1.35833 4.21714 1.47714 3.67041 1.77372 3.16667C2.11681 2.58393 2.61029 2.10002 3.20455 1.76357C3.71824 1.47274 4.27578 1.35623 4.88529 1.30206C5.47135 1.24997 6.19352 1.24999 7.06862 1.25H7.06864H16.9314H16.9314Z',
  d21: 'M6.00024 7C6.00024 6.44772 6.44796 6 7.00024 6H7.00923C7.56151 6 8.00923 6.44772 8.00923 7C8.00923 7.55228 7.56151 8 7.00923 8H7.00024C6.44796 8 6.00024 7.55228 6.00024 7ZM11.0002 7C11.0002 6.44772 11.448 6 12.0002 6H12.0092C12.5615 6 13.0092 6.44772 13.0092 7C13.0092 7.55228 12.5615 8 12.0092 8H12.0002C11.448 8 11.0002 7.55228 11.0002 7ZM16.0002 7C16.0002 6.44772 16.448 6 17.0002 6H17.0092C17.5615 6 18.0092 6.44772 18.0092 7C18.0092 7.55228 17.5615 8 17.0092 8H17.0002C16.448 8 16.0002 7.55228 16.0002 7Z',
  d22: 'M13.5 16L15.25 18L19 14',
  d23: 'M7.93552 12H2L2 2H22V9',
  d24: 'M17 7H17.009M12 7H12.009M7 7H7.00898',
  d25: 'M16 22.75C12.2721 22.75 9.25 19.7279 9.25 16C9.25 12.2721 12.2721 9.25 16 9.25C19.7279 9.25 22.75 12.2721 22.75 16C22.75 19.7279 19.7279 22.75 16 22.75ZM15.2328 19.1173L19.5491 14.5132L18.4548 13.4873L15.2711 16.8832L14.0664 15.5064L12.9375 16.4941L15.2328 19.1173Z',
  d26: 'M1.53624 1.53069C1.71951 1.35097 1.96808 1.25 2.22727 1.25H21.7727C22.3125 1.25 22.75 1.67906 22.75 2.20833V8.91667H20.7955V3.16667H3.20455V10.8333H8.02789V12.75H2.22727C1.68754 12.75 1.25 12.3209 1.25 11.7917V2.20833C1.25 1.95417 1.35296 1.71041 1.53624 1.53069Z',
  d27: 'M6 6H8.00748V8H6V6ZM10.9963 6H13.0037V8H10.9963V6ZM15.9925 6H18V8H15.9925V6Z',
};

export const IconPasswordValidationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-stroke-rounded IconPasswordValidationStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-duotone-rounded IconPasswordValidationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-twotone-rounded IconPasswordValidationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-solid-rounded IconPasswordValidationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-bulk-rounded IconPasswordValidationBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-stroke-sharp IconPasswordValidationStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPasswordValidationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="password-validation-solid-sharp IconPasswordValidationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfPasswordValidation: TheIconSelfPack = {
  name: 'PasswordValidation',
  StrokeRounded: IconPasswordValidationStrokeRounded,
  DuotoneRounded: IconPasswordValidationDuotoneRounded,
  TwotoneRounded: IconPasswordValidationTwotoneRounded,
  SolidRounded: IconPasswordValidationSolidRounded,
  BulkRounded: IconPasswordValidationBulkRounded,
  StrokeSharp: IconPasswordValidationStrokeSharp,
  SolidSharp: IconPasswordValidationSolidSharp,
};