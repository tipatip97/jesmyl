import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12V22M20 12V22',
  d2: 'M6 8V12M18 8V12',
  d3: 'M3 12L21 12',
  d4: 'M5 8H19',
  d5: 'M3 22L21 22',
  d6: 'M12 3V2',
  d7: 'M15 22V21.1056C15 19.6764 15 18.9618 14.776 18.321C14.6392 17.9296 14.4424 17.5619 14.1927 17.231C13.7837 16.6891 13.1891 16.2927 12 15.5C10.8109 16.2927 10.2163 16.6891 9.80733 17.231C9.55758 17.5619 9.36078 17.9296 9.224 18.321C9 18.9618 9 19.6764 9 21.1056V22',
  d8: 'M9.02481 8C5.93952 5.5 10.6777 4.25 11.9998 3C13.3221 4.25 18.0602 5.5 14.9748 8H9.02481Z',
  d9: 'M9.02497 8C5.93968 5.5 10.6778 4.25 12 3C13.3222 4.25 18.0603 5.5 14.975 8H9.02497Z',
  d10: 'M4 12V22H9V21.1056C9 19.6764 9 18.9618 9.224 18.321C9.36078 17.9296 9.55758 17.5619 9.80733 17.231C10.2163 16.6891 10.8109 16.2927 12 15.5C13.1891 16.2927 13.7837 16.6891 14.1927 17.231C14.4424 17.5619 14.6392 17.9296 14.776 18.321C15 18.9618 15 19.6764 15 21.1056V22H20V12H4Z',
  d11: 'M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12V22C20.75 22.4142 20.4142 22.75 20 22.75L15 22.75H9.00004H4C3.58579 22.75 3.25 22.4142 3.25 22L3.25 12ZM9.00004 22.75C8.58583 22.75 8.25004 22.4142 8.25004 22V21.1056C8.25004 21.0589 8.25003 21.0128 8.25002 20.9672C8.2497 19.6713 8.24949 18.8361 8.51604 18.0735C8.67847 17.6088 8.91217 17.1721 9.20875 16.7792C9.69544 16.1344 10.3905 15.6713 11.4689 14.9527L11.584 14.876C11.8359 14.708 12.1641 14.708 12.4161 14.876L12.5312 14.9527C13.6096 15.6713 14.3047 16.1344 14.7913 16.7792C15.0879 17.1721 15.3216 17.6088 15.484 18.0735C15.7506 18.8361 15.7504 19.6713 15.7501 20.9672C15.7501 21.0128 15.75 21.0589 15.75 21.1056V22C15.75 22.4142 15.4143 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V21.1056C14.25 19.6228 14.2401 19.0608 14.068 18.5684C13.9569 18.2504 13.797 17.9517 13.5941 17.6828C13.3809 17.4003 13.0996 17.1622 12.5552 16.7813C12.2902 16.5958 12.1576 16.503 12 16.503C11.8425 16.503 11.7099 16.5958 11.4449 16.7813C10.9005 17.1622 10.6192 17.4003 10.406 17.6828C10.2031 17.9517 10.0432 18.2504 9.93204 18.5684C9.75996 19.0608 9.75004 19.6228 9.75004 21.1056V22C9.75004 22.4142 9.41426 22.75 9.00004 22.75Z',
  d12: 'M6 7C6.55228 7 7 7.44772 7 8V12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7ZM18 7C18.5523 7 19 7.44772 19 8V12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12V8C17 7.44772 17.4477 7 18 7Z',
  d13: 'M2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12Z',
  d14: 'M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z',
  d15: 'M2 22C2 21.4477 2.44772 21 3 21L21 21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23L3 23C2.44772 23 2 22.5523 2 22Z',
  d16: 'M12 1C12.5523 1 13 1.44772 13 2V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V2C11 1.44772 11.4477 1 12 1Z',
  d17: 'M12.5153 2.45498C12.2262 2.18166 11.7739 2.18167 11.4848 2.45501C11.2347 2.69148 10.7843 2.95616 10.1719 3.30561L10.1176 3.33656C9.56249 3.65318 8.90971 4.02548 8.38761 4.44854C7.86714 4.87028 7.30571 5.47589 7.25389 6.29234C7.19993 7.14254 7.71056 7.90016 8.55291 8.58271C8.68648 8.69094 8.85317 8.75 9.02508 8.75H14.9751C15.147 8.75 15.3137 8.69094 15.4473 8.58272C16.2896 7.90017 16.8003 7.14255 16.7463 6.29235C16.6945 5.47589 16.1331 4.87028 15.6126 4.44854C15.0905 4.02547 14.4377 3.65315 13.8825 3.33652L13.8283 3.30561C13.2158 2.95615 12.7655 2.69147 12.5153 2.45498Z',
  d18: 'M11.584 14.876C11.8359 14.708 12.1641 14.708 12.4161 14.876C12.4549 14.9019 12.4933 14.9274 12.5312 14.9527C13.6096 15.6713 14.3047 16.1344 14.7913 16.7792C15.0879 17.1721 15.3216 17.6088 15.484 18.0735C15.76 18.8629 15.75 19.73 15.75 21.1056V22C15.75 22.4142 15.4143 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V21.1056C14.25 19.6228 14.2401 19.0608 14.068 18.5684C13.9569 18.2504 13.797 17.9517 13.5941 17.6828C13.3809 17.4003 13.0996 17.1622 12.5552 16.7813C12.2902 16.5958 12.1576 16.503 12 16.503C11.8425 16.503 11.7099 16.5958 11.4449 16.7813C10.9005 17.1622 10.6192 17.4003 10.406 17.6828C10.2031 17.9517 10.0432 18.2504 9.93204 18.5684C9.75996 19.0608 9.75004 19.6228 9.75004 21.1056V22C9.75004 22.4142 9.41426 22.75 9.00004 22.75C8.58583 22.75 8.25004 22.4142 8.25004 22V21.1056C8.25004 19.7301 8.24013 18.8629 8.51604 18.0735C8.67847 17.6088 8.91217 17.1721 9.20875 16.7792C9.69544 16.1344 10.3905 15.6713 11.4689 14.9527C11.5068 14.9274 11.5452 14.9019 11.584 14.876Z',
  d19: 'M20.75 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H3.25L3.25 22C3.25 22.4142 3.58579 22.75 4 22.75L20 22.75C20.4142 22.75 20.75 22.4142 20.75 22V13Z',
  d20: 'M5 11V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V11H5ZM17 11V8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V11H17Z',
  d21: 'M11.4848 2.45525C11.7739 2.18192 12.2262 2.18191 12.5153 2.45523C12.6335 2.56697 12.7964 2.68501 13 2.81531V2.00024C13 1.44796 12.5523 1.00024 12 1.00024C11.4477 1.00024 11 1.44796 11 2.00024V2.81543C11.2037 2.68509 11.3666 2.56702 11.4848 2.45525Z',
  d22: 'M4 12.5V22.5M20 12.5V22.5',
  d23: 'M6 8.5V12.5M18 8.5V12.5',
  d24: 'M2 12.5L22 12.5',
  d25: 'M4 8.5H20',
  d26: 'M2 22.5L22 22.5',
  d27: 'M12 3.5V1.5',
  d28: 'M15 22.5V21.6056C15 20.1764 15 19.4618 14.776 18.821C14.6392 18.4296 14.4424 18.0619 14.1927 17.731C13.7837 17.1891 13.1891 16.7927 12 16C10.8109 16.7927 10.2163 17.1891 9.80733 17.731C9.55758 18.0619 9.36078 18.4296 9.224 18.821C9 19.4618 9 20.1764 9 21.6056V22.5',
  d29: 'M9.02497 8.5C5.93968 6 10.6778 4.75 12 3.5C13.3222 4.75 18.0603 6 14.975 8.5H9.02497Z',
  d30: 'M5.25 8.75H4V7.25L20 7.25L20 8.75H18.75V11.25H22V12.75H20.75V22C20.75 22.4142 20.4142 22.75 20 22.75L4 22.75C3.58579 22.75 3.25 22.4142 3.25 22L3.25 12.75H2V11.25H5.25V8.75ZM6.75 8.75V11.25L17.25 11.25V8.75L6.75 8.75ZM12.4161 14.876C12.1641 14.708 11.8359 14.708 11.584 14.876L11.4689 14.9527C10.3904 15.6713 9.69544 16.1344 9.20875 16.7792C8.91217 17.1721 8.67847 17.6088 8.51604 18.0735C8.24949 18.8361 8.2497 19.6713 8.25002 20.9672L8.25004 21.1056V22H9.75004V21.1056C9.75004 19.6228 9.75996 19.0608 9.93204 18.5684C10.0432 18.2504 10.2031 17.9517 10.406 17.6828C10.6821 17.317 11.0724 17.0256 12 16.4022C12.9277 17.0256 13.318 17.317 13.5941 17.6828C13.797 17.9517 13.9569 18.2504 14.068 18.5684C14.2401 19.0608 14.25 19.6228 14.25 21.1056V22H15.75V21.1056L15.7501 20.9672C15.7504 19.6713 15.7506 18.8361 15.484 18.0735C15.3216 17.6088 15.0879 17.1721 14.7913 16.7792C14.3047 16.1344 13.6096 15.6713 12.5312 14.9527L12.4161 14.876Z',
  d31: 'M22 22.75L2 22.75L2 21.25L22 21.25V22.75Z',
  d32: 'M13.8283 3.30561C13.3749 3.04689 13.0103 2.83464 12.75 2.64589V1.25H11.25V2.64602C10.9898 2.83473 10.6252 3.04695 10.1719 3.30561L10.1176 3.33656L10.1176 3.33656C9.56249 3.65318 8.90971 4.02548 8.38761 4.44854C7.86714 4.87028 7.30571 5.47589 7.25389 6.29234C7.19993 7.14254 7.71056 7.90016 8.55291 8.58271C8.68648 8.69094 8.85317 8.75 9.02508 8.75H14.9751C15.147 8.75 15.3137 8.69094 15.4473 8.58272C16.2896 7.90017 16.8003 7.14255 16.7463 6.29235C16.6945 5.47589 16.1331 4.87028 15.6126 4.44854C15.0905 4.02546 14.4377 3.65315 13.8825 3.33652L13.8283 3.30561Z',
};

export const IconMosque03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-stroke-rounded IconMosque03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-duotone-rounded IconMosque03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-twotone-rounded IconMosque03TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-solid-rounded IconMosque03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-bulk-rounded IconMosque03BulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
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
        opacity="var(--icon-opacity)" 
        d={d.d17} 
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

export const IconMosque03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-stroke-sharp IconMosque03StrokeSharp"
    >
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
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-03-solid-sharp IconMosque03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMosque03: TheIconSelfPack = {
  name: 'Mosque03',
  StrokeRounded: IconMosque03StrokeRounded,
  DuotoneRounded: IconMosque03DuotoneRounded,
  TwotoneRounded: IconMosque03TwotoneRounded,
  SolidRounded: IconMosque03SolidRounded,
  BulkRounded: IconMosque03BulkRounded,
  StrokeSharp: IconMosque03StrokeSharp,
  SolidSharp: IconMosque03SolidSharp,
};