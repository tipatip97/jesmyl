import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.091 10.9999V11.9999M17.091 10.9999C17.091 9.89537 16.2227 8.99994 15.1516 8.99994C14.6161 8.99994 14.182 9.44765 14.182 9.99993L14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2727 4.17155 10.6215 3.49999 9.81824 3.49999C9.01493 3.49999 8.36373 4.17155 8.36373 4.99998L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993',
  d2: 'M14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99955C11.2725 4.17132 10.6214 3.49999 9.81824 3.49999C9.01493 3.49999 8.36373 4.17156 8.36373 4.99998L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22H18.0603V20.8354C18.0603 20.3037 18.2685 19.7963 18.6083 19.3962C19.0011 18.9337 19.4924 18.2937 19.6786 17.7919C19.9996 16.9267 19.9996 15.84 19.9996 13.6667L20 12.1942C20 11.2165 19.3146 10.3821 18.3795 10.2214L18.0475 10.1643C17.5468 10.0783 17.091 10.4765 17.091 10.9999C17.091 9.89537 16.2227 8.99994 15.1516 8.99994C14.6161 8.99994 14.182 9.44765 14.182 9.99993L14.1816 10.9999Z',
  d3: 'M8.25648 3.98882V13.6332C8.25647 13.8039 8.15004 13.9575 7.98745 14.0215C7.82485 14.0855 7.63864 14.047 7.51675 13.9243L5.71377 12.1089C5.10627 11.4973 4.11016 11.5507 3.57057 12.2298C3.36759 12.4853 3.26045 12.7931 3.25 13.104C3.25428 13.256 3.27239 13.4078 3.30437 13.5572C3.35201 13.7274 3.43052 13.8909 3.54004 14.0389L7.2193 19.1004C7.45405 19.4096 7.65626 19.8147 7.80823 20.2718L7.81811 20.3015C7.98551 20.8051 8.12479 21.2241 8.25651 21.5386C8.38021 21.834 8.55531 22.1917 8.87061 22.4192C9.16271 22.6299 9.49374 22.6948 9.78577 22.7229C10.0675 22.75 10.4171 22.75 10.813 22.7499L16.9264 22.75C17.0461 22.7501 17.1705 22.7502 17.2848 22.7353C18.0724 22.633 18.6923 22.0131 18.7947 21.2255C18.8095 21.1112 18.8094 20.9551 18.8093 20.8354C18.8093 20.5007 18.9412 20.1616 19.1789 19.8817C19.5656 19.4264 20.1427 18.6944 20.3807 18.0527C20.5777 17.522 20.6648 16.9515 20.7071 16.2659C20.7486 15.5913 20.7486 14.7572 20.7486 13.6918L20.749 12.1941C20.749 11.1034 19.9602 10.0977 18.9507 9.64954C18.6799 9.52933 18.5445 9.46922 18.4081 9.55795C18.2716 9.64668 18.2716 9.81575 18.2716 10.1539V11.9998C18.2716 12.2312 18.0789 12.4187 17.8413 12.4187C17.6036 12.4187 17.4109 12.2312 17.4109 11.9998V9.49313C17.4109 9.48855 17.4064 9.48534 17.4021 9.48684C17.3992 9.48785 17.396 9.48675 17.3943 9.48417C17.0151 8.89849 16.2864 8.47471 15.529 8.3239C15.278 8.27391 15.1524 8.24892 15.0427 8.33893C14.933 8.42894 14.933 8.57381 14.933 8.86355L14.9329 10.883C14.9328 11.1143 14.7401 11.3019 14.5025 11.3018C14.2649 11.3018 14.0723 11.1143 14.0723 10.883L14.0727 2.48894C14.0727 1.8047 13.518 1.25 12.8338 1.25C12.1496 1.25 11.5949 1.80466 11.5949 2.48888V9.7661C11.5949 9.99741 11.4023 10.1849 11.1646 10.1849C10.9269 10.1849 10.7343 9.99741 10.7343 9.7661V3.98882C10.7343 3.3046 10.1796 2.74993 9.49538 2.74993C8.81115 2.74993 8.25648 3.3046 8.25648 3.98882Z',
  d4: 'M17.091 10.5V12.5M17.091 10.5C17.091 9.67157 16.4194 9 15.591 9H14.1816M17.091 10.5H18.4996C19.328 10.5 19.9996 11.1716 19.9996 12V13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 18.0603 19.5 18.0603 19.5V22M11.2727 4.99955C11.2725 4.17132 10.6214 3.49999 9.81824 3.49999C9.01493 3.49999 8.36373 4.17156 8.36373 4.99998L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L8.36373 19.5V22M11.2727 4.99955V10.5M11.2727 4.99955L11.2725 3.49999C11.2725 2.67157 11.9237 2 12.7271 2C13.5304 2 14.1816 2.67157 14.1816 3.49999V9M14.1816 9V11.5',
  d5: 'M11.5687 10.329H10.768V4.20168C10.7678 3.48298 10.1907 2.92097 9.50469 2.92097C8.81848 2.92097 8.24133 3.48312 8.24133 4.20204L8.24107 14.5934L5.75579 12.0894C5.13806 11.467 4.12478 11.5215 3.57635 12.2122C3.15258 12.7459 3.14021 13.5043 3.54685 14.052L3.54798 14.0535L8.24133 20.2263V22.75H18.5317V20.1736C18.686 20.0411 19.2881 19.5295 19.5012 19.3312C19.7152 19.1321 19.9303 18.9208 20.1026 18.7287C20.287 18.5231 20.3829 18.382 20.4078 18.3165C20.572 17.8856 20.6601 17.3849 20.7049 16.6769C20.7498 15.966 20.75 15.0721 20.75 13.8567V12C20.75 11.2925 20.1611 10.7189 19.4346 10.7189H18.2237V12.557H17.4231V10.329C17.4231 9.62149 16.8341 9.04793 16.1077 9.04793H14.8959V11.443H14.0952V2.53107C14.0952 1.81215 13.5181 1.25 12.8318 1.25C12.1457 1.25 11.5685 1.81218 11.5685 2.53107L11.5687 10.329Z',
} as const;

export const IconTwoFinger01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-stroke-rounded IconTwoFinger01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-duotone-rounded IconTwoFinger01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-twotone-rounded IconTwoFinger01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-solid-rounded IconTwoFinger01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-bulk-rounded IconTwoFinger01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-stroke-sharp IconTwoFinger01StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTwoFinger01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="two-finger-01-solid-sharp IconTwoFinger01SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTwoFinger01: TheIconSelfPack = {
  name: 'TwoFinger01',
  StrokeRounded: IconTwoFinger01StrokeRounded,
  DuotoneRounded: IconTwoFinger01DuotoneRounded,
  TwotoneRounded: IconTwoFinger01TwotoneRounded,
  SolidRounded: IconTwoFinger01SolidRounded,
  BulkRounded: IconTwoFinger01BulkRounded,
  StrokeSharp: IconTwoFinger01StrokeSharp,
  SolidSharp: IconTwoFinger01SolidSharp,
};