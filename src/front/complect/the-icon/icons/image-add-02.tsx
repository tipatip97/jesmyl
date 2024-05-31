import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 6.75C22.4142 6.75 22.75 6.41421 22.75 6C22.75 5.58579 22.4142 5.25 22 5.25V6.75ZM14 5.25C13.5858 5.25 13.25 5.58579 13.25 6C13.25 6.41421 13.5858 6.75 14 6.75V5.25ZM18.75 2C18.75 1.58579 18.4142 1.25 18 1.25C17.5858 1.25 17.25 1.58579 17.25 2H18.75ZM17.25 10C17.25 10.4142 17.5858 10.75 18 10.75C18.4142 10.75 18.75 10.4142 18.75 10H17.25ZM22 5.25H18V6.75H22V5.25ZM18 5.25H14V6.75H18V5.25ZM17.25 2V6H18.75V2H17.25ZM17.25 6V10H18.75V6H17.25Z',
  d2: 'M11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V12',
  d3: 'M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22',
  d4: 'M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18',
  d5: 'M3.39085 4.39319C2 5.78444 2 8.02361 2 12.502C2 13.2389 2 13.9152 2.0062 14.5371H2.49952C2.83719 14.5147 3.17591 14.5039 3.51493 14.5047C6.37007 14.4486 9.15527 15.2749 11.3736 16.8362L13.0281 17.9072C14.4934 16.7389 16.0529 16.1415 17.6269 16.1485C18.7313 16.1473 19.8297 16.4469 20.8938 17.038C20.9947 15.8482 20.9947 14.3699 20.9947 12.502C20.9947 8.02361 20.9947 5.78444 19.6039 4.39319C18.213 3.00195 15.9744 3.00195 11.4973 3.00195C7.02026 3.00195 4.78171 3.00195 3.39085 4.39319Z',
  d6: 'M11.4973 3.00195C7.02026 3.00195 4.78171 3.00195 3.39085 4.39319C2 5.78444 2 8.02361 2 12.502C2 16.9803 2 19.2195 3.39085 20.6108C4.78171 22.002 7.02026 22.002 11.4973 22.002C15.9744 22.002 18.213 22.002 19.6039 20.6108C20.9947 19.2195 20.9947 16.9803 20.9947 12.502V12.002',
  d7: 'M2 14.1373C2.61885 14.0474 3.24449 14.003 3.87119 14.0046C6.52239 13.9485 9.10865 14.7748 11.1685 16.3361C13.0789 17.784 14.4212 19.7768 14.9964 22.0019',
  d8: 'M20.9946 16.8981C19.8195 16.3028 18.604 16.0007 17.3818 16.002C15.5306 15.9947 13.6981 16.6752 11.9971 18.0019',
  d9: 'M17.9957 1.99805V10.0062M22.0002 5.97704L13.9912 5.99193',
  d10: 'M11.497 3C7.02007 3 4.78161 3 3.3908 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.3908 20.6088C4.78161 22 7.02007 22 11.497 22C15.9739 22 18.2124 22 19.6032 20.6088C20.994 19.2175 20.994 16.9783 20.994 12.5V12',
  d11: 'M2 14.1354C2.61882 14.0455 3.24445 14.0011 3.87112 14.0027C6.52222 13.9466 9.10839 14.7729 11.1682 16.3342C13.0785 17.7821 14.4208 19.7749 14.9959 22',
  d12: 'M20.9942 16.8962C19.8192 16.3009 18.6038 15.9988 17.3816 16.0001C15.5305 15.9928 13.698 16.6733 11.9971 18',
  d13: 'M17.9955 1.99609V10.0042M21.9999 5.97508L13.9912 5.98997',
  d14: 'M18 1C18.5523 1 19 1.44772 19 2V5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H19V10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10V7H14C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5H17V2C17 1.44772 17.4477 1 18 1Z',
  d15: 'M11.4255 2L11.5 2C12.0523 2 12.5 2.44772 12.5 3C12.5 3.55229 12.0523 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 14.7674 20 12.5V12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12V12.5744C22 14.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2Z',
  d16: 'M3.81591 13.1511C6.62892 13.0936 9.37864 13.9705 11.5752 15.6348C13.6036 17.1718 15.0414 19.291 15.6665 21.6692C15.7243 21.8891 15.6792 22.1234 15.5439 22.3061C15.4086 22.4889 15.1977 22.6004 14.9705 22.6093C13.972 22.6484 12.8093 22.6484 11.4638 22.6484H11.394C9.20328 22.6484 7.48261 22.6485 6.13919 22.4678C4.76254 22.2828 3.67028 21.8957 2.81208 21.0375C2.06622 20.2917 1.67291 19.3767 1.46104 18.2413C1.25354 17.1293 1.21086 15.7508 1.20118 14.0381C1.19907 13.6639 1.47307 13.3454 1.84337 13.2917C2.49583 13.1969 3.15534 13.1499 3.81591 13.1511ZM14.5198 16.3566C14.2905 16.0888 14.3803 15.6684 14.716 15.5606C15.5732 15.2854 16.451 15.1452 17.339 15.1485C18.6551 15.1474 19.9539 15.4654 21.1972 16.0789C21.4714 16.2142 21.636 16.5024 21.6132 16.8073C21.4779 18.6211 21.1275 20.0008 20.0908 21.0375C19.3085 21.8198 18.3318 22.2106 17.1224 22.4138C17.2152 22.0486 17.2159 21.6613 17.1177 21.2879C16.6392 19.4672 15.7456 17.7877 14.5198 16.3566Z',
  d17: 'M12 4H2V22H20V12',
  d18: 'M14 22C13.4281 19.7749 12.0934 17.7821 10.1937 16.3342C8.14549 14.7729 5.57381 13.9466 2.93756 14.0027C2.62454 14.0019 2.31177 14.0127 2 14.0351',
  d19: 'M12 19C13.6014 17.6733 15.3266 16.9928 17.0694 17.0001C18.0576 16.999 19.0412 17.2216 20 17.6617',
  d20: 'M22 6H18M18 6H14M18 6V2M18 6V10',
  d21: 'M1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H12.5V4.5H3.5V12.7514C6.27422 12.7097 8.9821 13.5865 11.1484 15.2377C12.9445 16.6068 14.2743 18.437 14.9826 20.5H16.5587C16.1174 19.0155 15.399 17.6317 14.4492 16.4091C15.459 15.9721 16.5064 15.7459 17.5719 15.7501C18.2212 15.7495 18.8657 15.8356 19.5 16.0047V11.5H21.5V21.5C21.5 22.0523 21.0523 22.5 20.5 22.5H2.5C1.94772 22.5 1.5 22.0523 1.5 21.5V3.5Z',
  d22: 'M17.5 4.49988V1.49988H19.5V4.49988H22.5V6.49988H19.5V9.49988H17.5V6.49988H14.5V4.49988H17.5Z',
} as const;

export const IconImageAdd02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-stroke-rounded IconImageAdd02StrokeRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageAdd02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-duotone-rounded IconImageAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconImageAdd02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-twotone-rounded IconImageAdd02TwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconImageAdd02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-solid-rounded IconImageAdd02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageAdd02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-bulk-rounded IconImageAdd02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
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
    </TheIconWrapper>
  );
};

export const IconImageAdd02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-stroke-sharp IconImageAdd02StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageAdd02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-add-02-solid-sharp IconImageAdd02SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImageAdd02: TheIconSelfPack = {
  name: 'ImageAdd02',
  StrokeRounded: IconImageAdd02StrokeRounded,
  DuotoneRounded: IconImageAdd02DuotoneRounded,
  TwotoneRounded: IconImageAdd02TwotoneRounded,
  SolidRounded: IconImageAdd02SolidRounded,
  BulkRounded: IconImageAdd02BulkRounded,
  StrokeSharp: IconImageAdd02StrokeSharp,
  SolidSharp: IconImageAdd02SolidSharp,
};