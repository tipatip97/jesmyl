import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 10L7 4M7 4L12.4142 9.41421C12.7032 9.70324 12.8478 9.84776 13.0315 9.92388C13.2153 10 13.4197 10 13.8284 10H22L18.1994 5.43926C17.6096 4.73152 17.3147 4.37764 16.9116 4.18882C16.5084 4 16.0478 4 15.1265 4H7Z',
  d2: 'M11 8V20H3V8.85714',
  d3: 'M11 20H21V9',
  d4: 'M4 7.5V4',
  d5: 'M7.00801 12L6.99902 12',
  d6: 'M7 20V16',
  d7: 'M15 14L17 14',
  d8: 'M21 20H11V8.5L13 10H21V20Z',
  d9: 'M12.4142 9.41421L7 4H15.1265C16.0478 4 16.5084 4 16.9116 4.18882C17.3147 4.37764 17.6096 4.73152 18.1994 5.43926L22 10H13.8284C13.4197 10 13.2153 10 13.0315 9.92388C12.8478 9.84776 12.7032 9.70324 12.4142 9.41421Z',
  d10: 'M3.99988 2.75C4.55216 2.75 4.99988 3.19772 4.99988 3.75V7.84836C4.99988 8.40064 4.55216 8.84836 3.99988 8.84836C3.44759 8.84836 2.99988 8.40064 2.99988 7.84836L2.99988 3.75C2.99988 3.19772 3.44759 2.75 3.99988 2.75Z',
  d11: 'M7.99976 17.4998C7.99976 16.9476 7.55204 16.4998 6.99976 16.4998C6.44747 16.4998 5.99976 16.9476 5.99976 17.4998V20.65C5.99976 20.9328 5.99976 21.0743 5.91189 21.1621C5.82402 21.25 5.6826 21.25 5.39976 21.25H2.99976C2.58554 21.25 2.24976 20.9142 2.24976 20.5V12.8856C2.24976 12.7117 2.24976 12.6248 2.29425 12.5698C2.33874 12.5148 2.43689 12.4938 2.6332 12.4518C3.09619 12.3528 3.53039 12.1023 3.85555 11.7083L6.97753 7.92594C7.10847 7.7673 7.17394 7.68798 7.26233 7.68377C7.35072 7.67955 7.42344 7.75228 7.56888 7.89773L11.0869 11.4162C11.199 11.5296 11.3648 11.6971 11.5796 11.8644C11.6659 11.9317 11.7091 11.9653 11.7294 12.0069C11.7498 12.0484 11.7498 12.0989 11.7498 12.1998L11.7498 20.5C11.7498 20.9142 11.414 21.25 10.9998 21.25H8.59976C8.31691 21.25 8.17549 21.25 8.08762 21.1621C7.99976 21.0743 7.99976 20.9328 7.99976 20.65V17.4998ZM8.00757 12.4998C8.00757 13.0521 7.56185 13.4998 7.01204 13.4998H7.0031C6.45328 13.4998 6.00757 13.0521 6.00757 12.4998C6.00757 11.9476 6.45328 11.4998 7.0031 11.4998H7.01204C7.56186 11.4998 8.00757 11.9476 8.00757 12.4998Z',
  d12: 'M13.06 12.5493C13.1203 12.4905 13.2322 12.4933 13.4559 12.4989C13.5508 12.5012 13.6347 12.5008 13.7042 12.5004L21.351 12.5C21.5382 12.5 21.6319 12.5 21.6904 12.5585C21.749 12.617 21.7491 12.7102 21.7494 12.8967C21.7496 12.9995 21.7495 13.1045 21.7495 13.2117L21.7495 20.5C21.7495 20.9142 21.4138 21.25 20.9995 21.25H13.4477C13.1975 21.25 13.0723 21.25 13.0129 21.1852C12.9534 21.1203 12.9663 20.9719 12.992 20.675C12.997 20.6174 12.9996 20.559 12.9996 20.5V12.9217C12.9996 12.7127 12.9996 12.6082 13.06 12.5493ZM17.9998 16.25C18.414 16.25 18.7498 15.9142 18.7498 15.5C18.7498 15.0858 18.414 14.75 17.9998 14.75L15.9998 14.75C15.5855 14.75 15.2498 15.0858 15.2498 15.5C15.2498 15.9142 15.5855 16.25 15.9998 16.25L17.9998 16.25Z',
  d13: 'M17.2296 4.00982C16.6718 3.74859 16.0492 3.74925 15.2632 3.75009L6.9999 3.75019C6.99308 3.75019 6.98628 3.75028 6.97949 3.75047C6.93368 3.75171 6.91077 3.75233 6.90639 3.75232C6.90201 3.75231 6.88493 3.75177 6.85079 3.7507C6.57502 3.74204 6.29827 3.85701 6.10795 4.08759L1.46512 9.71256C1.13682 10.1103 1.19004 10.7015 1.58401 11.0329C1.97798 11.3644 2.5635 11.3107 2.89181 10.9129L6.7492 6.23952C6.9456 6.00157 7.0438 5.88259 7.17638 5.87627C7.30896 5.86994 7.41804 5.97903 7.6362 6.1972L11.9403 10.5015C12.1699 10.7324 12.4177 10.9817 12.7444 11.117C13.0711 11.2523 13.4226 11.2513 13.7483 11.2503L21.9999 11.2502C22.2909 11.2502 22.5557 11.0818 22.6791 10.8183C22.8025 10.5548 22.7624 10.2436 22.5761 10.0201L18.688 5.35419C18.1854 4.74979 17.7873 4.27105 17.2296 4.00982Z',
  d14: 'M4 2.75C4.55228 2.75 5 3.19772 5 3.75V7.84836C5 8.40064 4.55228 8.84836 4 8.84836C3.44772 8.84836 3 8.40064 3 7.84836L3 3.75C3 3.19772 3.44772 2.75 4 2.75Z',
  d15: 'M2.24988 20.5C2.24988 20.9142 2.58566 21.25 2.99988 21.25H10.9999C11.4141 21.25 11.7499 20.9142 11.7499 20.5L11.7499 12.1998C11.7499 12.0989 11.7499 12.0484 11.7296 12.0069C11.7093 11.9653 11.6661 11.9317 11.5797 11.8644C11.3649 11.6971 11.1992 11.5296 11.0871 11.4162L7.569 7.89773C7.42356 7.75228 7.35084 7.67955 7.26245 7.68377C7.17406 7.68798 7.10859 7.7673 6.97765 7.92594L3.85567 11.7083C3.53051 12.1023 3.09632 12.3528 2.63332 12.4518C2.43702 12.4938 2.33886 12.5148 2.29437 12.5698C2.24988 12.6248 2.24988 12.7117 2.24988 12.8856V20.5Z',
  d16: 'M8 17.5C8 16.9477 7.55228 16.5 7 16.5C6.44772 16.5 6 16.9477 6 17.5V21.25H8V17.5Z',
  d17: 'M7.01228 13.5C7.5621 13.5 8.00781 13.0523 8.00781 12.5C8.00781 11.9477 7.5621 11.5 7.01228 11.5H7.00334C6.45353 11.5 6.00781 11.9477 6.00781 12.5C6.00781 13.0523 6.45353 13.5 7.00334 13.5H7.01228Z',
  d18: 'M13.0601 12.5493C13.1204 12.4905 13.2323 12.4933 13.4561 12.4989C13.551 12.5012 13.6349 12.5008 13.7043 12.5004L21.3511 12.5C21.5384 12.5 21.632 12.5 21.6906 12.5585C21.7491 12.617 21.7493 12.7102 21.7495 12.8967C21.7497 12.9995 21.7497 13.1045 21.7497 13.2117L21.7497 20.5C21.7497 20.9142 21.4139 21.25 20.9997 21.25H13.4478C13.1976 21.25 13.0725 21.25 13.013 21.1852C12.9536 21.1203 12.9664 20.9719 12.9922 20.675C12.9972 20.6174 12.9997 20.559 12.9997 20.5V12.9217C12.9997 12.7127 12.9997 12.6082 13.0601 12.5493ZM17.9999 16.25C18.4141 16.25 18.7499 15.9142 18.7499 15.5C18.7499 15.0858 18.4141 14.75 17.9999 14.75L15.9999 14.75C15.5857 14.75 15.2499 15.0858 15.2499 15.5C15.2499 15.9142 15.5857 16.25 15.9999 16.25L17.9999 16.25Z',
  d19: 'M18 16.25C18.4142 16.25 18.75 15.9142 18.75 15.5C18.75 15.0858 18.4142 14.75 18 14.75L16 14.75C15.5858 14.75 15.25 15.0858 15.25 15.5C15.25 15.9142 15.5858 16.25 16 16.25L18 16.25Z',
  d20: 'M17.2297 4.00982C16.672 3.74859 16.0493 3.74925 15.2633 3.75009L7.00002 3.75019C6.9932 3.75019 6.9864 3.75028 6.97961 3.75047C6.9338 3.75171 6.9109 3.75233 6.90651 3.75232C6.90213 3.75231 6.88506 3.75177 6.85091 3.7507C6.57514 3.74204 6.29839 3.85701 6.10807 4.08759L1.46524 9.71256C1.13694 10.1103 1.19017 10.7015 1.58414 11.0329C1.9781 11.3644 2.56362 11.3107 2.89193 10.9129L6.74932 6.23952C6.94572 6.00157 7.04392 5.88259 7.1765 5.87627C7.30908 5.86994 7.41816 5.97903 7.63633 6.1972L11.9404 10.5015C12.17 10.7324 12.4178 10.9817 12.7445 11.117C13.0712 11.2523 13.4227 11.2513 13.7484 11.2503L22 11.2502C22.291 11.2502 22.5558 11.0818 22.6792 10.8183C22.8026 10.5548 22.7625 10.2436 22.5762 10.0201L18.6881 5.35419C18.1855 4.74979 17.7874 4.27105 17.2297 4.00982Z',
  d21: 'M11.5 7.99979V19.9998H3.5V7.85693',
  d22: 'M11.5 20H21.5V9',
  d23: 'M1.5 10L7.5 4M7.5 4L13.5 10H22.5L17.5 4H7.5Z',
  d24: 'M4.5 7V4',
  d25: 'M7.50801 12H7.49902',
  d26: 'M7.5 20V16',
  d27: 'M15.5 14H17.5',
  d28: 'M22.8283 9.51986C23.0123 9.74342 23.052 10.0546 22.9301 10.3181C22.8082 10.5817 22.5468 10.75 22.2594 10.75H13.0659L7.44816 5.06066L2.04731 10.5303L1 9.46967L3.74535 6.68934V3.25H5.22647V5.18934L7.14141 3.25H17.6692L22.8283 9.51986Z',
  d29: 'M8 16V20.75H11.75L11.75 11.1975L7.44703 6.83968L2.25 12.1029L2.25 20.75H6V16H8ZM5.99883 13L8.00781 13L8.00781 11H5.99883L5.99883 13Z',
  d30: 'M13.0645 12C13.0423 12 13.0201 11.9994 12.998 11.9982L12.998 20.75H21.748V12L13.0645 12ZM15.873 15.7501H18.873V14.2501H15.873V15.7501Z',
} as const;

export const IconHouse03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-stroke-rounded IconHouse03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHouse03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-duotone-rounded IconHouse03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconHouse03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-twotone-rounded IconHouse03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHouse03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-solid-rounded IconHouse03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-bulk-rounded IconHouse03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-stroke-sharp IconHouse03StrokeSharp"
    >
      <path 
        d={d.d21} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
    </TheIconWrapper>
  );
};

export const IconHouse03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-03-solid-sharp IconHouse03SolidSharp"
    >
      <path 
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

export const iconPackOfHouse03: TheIconSelfPack = {
  name: 'House03',
  StrokeRounded: IconHouse03StrokeRounded,
  DuotoneRounded: IconHouse03DuotoneRounded,
  TwotoneRounded: IconHouse03TwotoneRounded,
  SolidRounded: IconHouse03SolidRounded,
  BulkRounded: IconHouse03BulkRounded,
  StrokeSharp: IconHouse03StrokeSharp,
  SolidSharp: IconHouse03SolidSharp,
};