import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5002 11.4996C18.2252 10.4746 16.9752 8.99609 15.0752 9.09963C15.0752 9.09963 13.1434 8.99609 11.1909 8.99609C9.23839 8.99609 8.25019 9.02463 6.72519 9.09963C5.70019 9.09963 4.07519 9.67463 3.45019 11.4246C2.87446 13.1751 2.89974 16.7991 3.2502 18.6496C3.32529 19.5999 3.84822 20.9494 5.4002 21.6496C6.1502 22.0996 10.8502 21.9496 11.5002 21.9996',
  d2: 'M6.51635 8.19624C6.46629 5.82059 6.36616 3.94508 9.11967 2.39466C10.0458 2.01956 11.4226 1.69447 13.1248 2.49469C14.902 3.56998 15.1234 4.70796 15.2775 4.99537C15.7031 6.12068 15.4778 7.72111 15.5278 8.37129',
  d3: 'M15.6702 18.444C15.9702 18.588 16.3422 18.96 16.5222 19.26C16.5822 19.68 16.8822 18.06 18.3462 17.1M21.0002 18C21.0002 20.2091 19.2094 22 17.0002 22C14.7911 22 13.0002 20.2091 13.0002 18C13.0002 15.7909 14.7911 14 17.0002 14C19.2094 14 21.0002 15.7909 21.0002 18Z',
  d4: 'M6.81064 21.4038C5.12711 21.3264 3.74367 20.0179 3.51879 18.3476C3.37202 17.2576 3.25098 16.1405 3.25098 15.0029C3.25098 13.8653 3.37202 12.7482 3.51879 11.6582C3.74367 9.98793 5.12711 8.67942 6.81064 8.60202C8.22725 8.5369 9.66628 8.50293 11.251 8.50293C12.8357 8.50293 14.2747 8.5369 15.6913 8.60202C17.3749 8.67942 18.7583 9.98793 18.9832 11.6582C19.0875 12.4332 19.1789 13.2219 19.223 14.022C18.641 13.6916 17.968 13.5029 17.251 13.5029C15.0419 13.5029 13.251 15.2938 13.251 17.5029C13.251 19.3317 14.4783 20.8739 16.1542 21.3507C16.003 21.3786 15.8485 21.3966 15.6913 21.4038C14.2747 21.4689 12.8357 21.5029 11.251 21.5029C9.66628 21.5029 8.22725 21.4689 6.81064 21.4038Z',
  d5: 'M11.751 21.5018C11.5859 21.5025 11.4193 21.5029 11.251 21.5029C9.66628 21.5029 8.22725 21.4689 6.81064 21.4038C5.12711 21.3264 3.74367 20.0179 3.51879 18.3476C3.37203 17.2576 3.25098 16.1405 3.25098 15.0029C3.25098 13.8653 3.37203 12.7482 3.51879 11.6582C3.74367 9.98793 5.12711 8.67942 6.81064 8.60202C8.22725 8.5369 9.66628 8.50293 11.251 8.50293C12.8357 8.50293 14.2747 8.5369 15.6913 8.60202C17.1473 8.66896 18.2992 9.65673 18.751 11.0029',
  d6: 'M6.75098 8.50293V6.00293C6.75098 3.51765 8.7657 1.50293 11.251 1.50293C13.7363 1.50293 15.751 3.51765 15.751 6.00293V8.50293',
  d7: 'M15.921 17.9469C16.221 18.0909 16.593 18.4629 16.773 18.7629C16.833 19.1829 17.133 17.5629 18.597 16.6029M21.251 17.5029C21.251 19.712 19.4602 21.5029 17.251 21.5029C15.0419 21.5029 13.251 19.712 13.251 17.5029C13.251 15.2938 15.0419 13.5029 17.251 13.5029C19.4602 13.5029 21.251 15.2938 21.251 17.5029Z',
  d8: 'M11.5 21.9989C11.3349 21.9996 11.1683 22 11 22C9.4153 22 7.97627 21.966 6.55966 21.9009C4.87613 21.8235 3.49269 20.515 3.26781 18.8447C3.12105 17.7547 3 16.6376 3 15.5C3 14.3624 3.12105 13.2453 3.26781 12.1553C3.49269 10.485 4.87613 9.17649 6.55966 9.09909C7.97627 9.03397 9.4153 9 11 9C12.5847 9 14.0237 9.03397 15.4403 9.09909C16.8963 9.16603 18.0482 10.1538 18.5 11.5',
  d9: 'M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9',
  d10: 'M15.67 18.444C15.97 18.588 16.342 18.96 16.522 19.26C16.582 19.68 16.882 18.06 18.346 17.1M21 18C21 20.2091 19.2092 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2092 14 21 15.7909 21 18Z',
  d11: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25C7.5 9.80228 7.05228 10.25 6.5 10.25C5.94772 10.25 5.5 9.80228 5.5 9.25V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25C16.5 9.80228 16.0523 10.25 15.5 10.25C14.9477 10.25 14.5 9.80228 14.5 9.25V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d12: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM18.6903 17.7699C19.055 17.5736 19.1915 17.1187 18.9952 16.754C18.7989 16.3893 18.344 16.2528 17.9793 16.4491C17.3214 16.8033 16.7583 17.5496 16.4274 18.0505C16.3177 17.9627 16.1345 17.8343 15.9911 17.7659C15.6172 17.5876 15.1696 17.7461 14.9912 18.1199C14.8145 18.4903 14.9685 18.9332 15.3349 19.1148C15.3349 19.1148 15.4387 19.1799 15.4977 19.2277C15.6161 19.3235 15.7739 19.48 15.9109 19.7125C16.0515 19.9512 16.3123 20.0929 16.5892 20.0811C16.8658 20.0692 17.1137 19.9053 17.2335 19.6557C17.2547 19.6138 17.3162 19.4933 17.3581 19.4164C17.4423 19.2619 17.5636 19.0516 17.7112 18.8281C18.0289 18.3472 18.3869 17.9333 18.6903 17.7699Z',
  d13: 'M6.52522 8.34988C7.95364 8.28422 9.40416 8.25 11 8.25C12.5958 8.25 14.0464 8.28422 15.4748 8.34989C17.5328 8.4445 19.2039 10.0382 19.4755 12.0552C19.4883 12.1504 19.3918 12.2232 19.3025 12.1878C18.5899 11.9053 17.8131 11.75 17 11.75C13.5482 11.75 10.75 14.5482 10.75 18C10.75 19.3277 11.164 20.5588 11.87 21.571C12.2667 22.1399 12.4651 22.4243 12.3813 22.5854C12.2976 22.7464 11.9816 22.7474 11.3495 22.7494C11.2337 22.7498 11.1173 22.75 11 22.75C9.40416 22.75 7.95364 22.7158 6.52522 22.6501C4.46716 22.5555 2.79609 20.9618 2.52452 18.9448C2.37636 17.8444 2.25 16.6882 2.25 15.5C2.25 14.3118 2.37636 13.1556 2.52452 12.0552C2.79609 10.0382 4.46716 8.4445 6.52522 8.34988Z',
  d14: 'M7.5 6.75C7.5 4.817 9.067 3.25 11 3.25C12.933 3.25 14.5 4.817 14.5 6.75V8.31016C14.827 8.32177 15.1515 8.33502 15.4748 8.34988C15.8298 8.3662 16.1732 8.42712 16.5 8.52712V6.75C16.5 3.71243 14.0376 1.25 11 1.25C7.96243 1.25 5.5 3.71243 5.5 6.75V8.52712C5.82676 8.42712 6.17023 8.3662 6.52522 8.34988C6.84854 8.33502 7.17299 8.32177 7.5 8.31016V6.75Z',
  d15: 'M18.9919 12.0017V9.02039H15.4899M11.0003 21.9893H3.0014V9.02039H6.4714M15.4899 9.02039V6.32112C15.3125 3.22401 12.8239 2.09871 11.2065 2.00751C9.33241 1.90183 6.60265 3.30237 6.51259 6.30086L6.4714 9.02039M15.4899 9.02039H6.4714',
  d16: 'M15.2145 17.728L16.5069 19.0209L18.823 16.67M20.9986 17.9987C20.9986 20.2076 19.2088 21.9983 17.001 21.9983C14.7931 21.9983 13.0034 20.2076 13.0034 17.9987C13.0034 15.7897 14.7931 13.999 17.001 13.999C19.2088 13.999 20.9986 15.7897 20.9986 17.9987Z',
  d17: 'M11 3.25C9.067 3.25 7.5 4.817 7.5 6.75V9.25H5.5V6.75C5.5 3.71243 7.96243 1.25 11 1.25C14.0376 1.25 16.5 3.71243 16.5 6.75V9.25H14.5V6.75C14.5 4.817 12.933 3.25 11 3.25Z',
  d18: 'M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM16.501 20.0611L19.3559 17.2062L18.2952 16.1455L16.501 17.9398L15.7599 17.1987L14.6992 18.2593L16.501 20.0611Z',
  d19: 'M19.75 8.25H2.25V22.75H12.9378C11.5987 21.6037 10.75 19.901 10.75 18C10.75 14.5482 13.5482 11.75 17 11.75C17.9868 11.75 18.9201 11.9787 19.75 12.3859V8.25Z',
} as const;

export const IconSquareLockCheck02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-stroke-rounded IconSquareLockCheck02StrokeRounded"
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

export const IconSquareLockCheck02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-duotone-rounded IconSquareLockCheck02DuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconSquareLockCheck02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-twotone-rounded IconSquareLockCheck02TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-solid-rounded IconSquareLockCheck02SolidRounded"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-bulk-rounded IconSquareLockCheck02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-stroke-sharp IconSquareLockCheck02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-02-solid-sharp IconSquareLockCheck02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareLockCheck02: TheIconSelfPack = {
  name: 'SquareLockCheck02',
  StrokeRounded: IconSquareLockCheck02StrokeRounded,
  DuotoneRounded: IconSquareLockCheck02DuotoneRounded,
  TwotoneRounded: IconSquareLockCheck02TwotoneRounded,
  SolidRounded: IconSquareLockCheck02SolidRounded,
  BulkRounded: IconSquareLockCheck02BulkRounded,
  StrokeSharp: IconSquareLockCheck02StrokeSharp,
  SolidSharp: IconSquareLockCheck02SolidSharp,
};