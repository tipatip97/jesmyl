import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3',
  d2: 'M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22',
  d3: 'M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18',
  d4: 'M22 9L18.5 5.5M18.5 5.5L15 2M18.5 5.5L22 2M18.5 5.5L15 9',
  d5: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 13.2369 2 13.9132 2.0062 14.5351H2.49966C2.83742 14.5127 3.17624 14.5019 3.51535 14.5027C6.37129 14.4466 9.15727 15.2729 11.3762 16.8342L12.5312 17.6229C13.9969 16.5163 15.5568 15.9504 17.1313 15.9571C18.2708 15.9558 19.4039 16.2579 20.4995 16.8533C20.8991 15.9359 20.9997 13.5688 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d6: 'M11.4255 2L11.5 2C12.0523 2 12.5 2.44772 12.5 3C12.5 3.55229 12.0523 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 14.7674 20 12.5C20 11.9477 20.4477 11.5 21 11.5C21.5523 11.5 22 11.9477 22 12.5V12.5744C22 14.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2Z',
  d7: 'M14.2929 1.29289C14.6834 0.902369 15.3166 0.902369 15.7071 1.29289L18.5 4.08579L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L19.9142 5.5L22.7071 8.29289C23.0976 8.68342 23.0976 9.31658 22.7071 9.70711C22.3166 10.0976 21.6834 10.0976 21.2929 9.70711L18.5 6.91421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L17.0858 5.5L14.2929 2.70711C13.9024 2.31658 13.9024 1.68342 14.2929 1.29289Z',
  d8: 'M3.81591 13.1511C6.62892 13.0936 9.37864 13.9705 11.5752 15.6348C13.6036 17.1718 15.0414 19.291 15.6665 21.6692C15.7243 21.8891 15.6792 22.1234 15.5439 22.3061C15.4086 22.4889 15.1977 22.6004 14.9705 22.6093C13.972 22.6484 12.8093 22.6484 11.4638 22.6484H11.394C9.20328 22.6484 7.48261 22.6485 6.13919 22.4678C4.76254 22.2828 3.67028 21.8957 2.81208 21.0375C2.06622 20.2917 1.67291 19.3767 1.46104 18.2413C1.25354 17.1293 1.21086 15.7508 1.20118 14.0381C1.19907 13.6639 1.47307 13.3454 1.84337 13.2917C2.49583 13.1969 3.15534 13.1499 3.81591 13.1511ZM14.5198 16.3566C14.2905 16.0888 14.3803 15.6684 14.716 15.5606C15.5732 15.2854 16.451 15.1452 17.339 15.1485C18.6551 15.1474 19.9539 15.4654 21.1972 16.0789C21.4714 16.2142 21.636 16.5024 21.6132 16.8073C21.4779 18.6211 21.1275 20.0008 20.0908 21.0375C19.3085 21.8198 18.3318 22.2106 17.1224 22.4138C17.2152 22.0486 17.2159 21.6613 17.1177 21.2879C16.6392 19.4672 15.7456 17.7877 14.5198 16.3566Z',
  d9: 'M20 12V22H2V4H12',
  d10: 'M14 22C13.4281 19.7749 12.0934 17.7821 10.1937 16.3342C8.14549 14.7729 5.57381 13.9466 2.93756 14.0027C2.62454 14.0019 2.31177 14.0127 2 14.0351',
  d11: 'M12 19C13.6014 17.6733 15.3266 16.9928 17.0694 17.0001C18.0576 16.999 19.0412 17.2216 20 17.6617',
  d12: 'M2 4.00024C2 3.44796 2.44772 3.00024 3 3.00024H12V5.00024H4V13.2517C6.77422 13.21 9.4821 14.0867 11.6484 15.738C13.4445 17.107 14.7743 18.9373 15.4826 21.0002H17.0587C16.6174 19.5158 15.899 18.132 14.9492 16.9093C15.959 16.4724 17.0064 16.2461 18.0719 16.2503C18.7212 16.2498 19.3657 16.3359 20 16.5049V11.0002H22V22.0002C22 22.5525 21.5523 23.0002 21 23.0002H3C2.44772 23.0002 2 22.5525 2 22.0002V4.00024Z',
  d13: 'M17.793 6.62132L20.5859 9.41421L22.0002 8L19.2073 5.20711L22.0002 2.41421L20.5859 1L17.793 3.79289L15.0002 1L13.5859 2.41421L16.3788 5.20711L13.5859 8L15.0002 9.41421L17.793 6.62132Z',
} as const;

export const IconImageDelete02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-stroke-rounded IconImageDelete02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconImageDelete02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-duotone-rounded IconImageDelete02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconImageDelete02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-twotone-rounded IconImageDelete02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDelete02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-solid-rounded IconImageDelete02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDelete02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-bulk-rounded IconImageDelete02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconImageDelete02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-stroke-sharp IconImageDelete02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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

export const IconImageDelete02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-delete-02-solid-sharp IconImageDelete02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImageDelete02: TheIconSelfPack = {
  name: 'ImageDelete02',
  StrokeRounded: IconImageDelete02StrokeRounded,
  DuotoneRounded: IconImageDelete02DuotoneRounded,
  TwotoneRounded: IconImageDelete02TwotoneRounded,
  SolidRounded: IconImageDelete02SolidRounded,
  BulkRounded: IconImageDelete02BulkRounded,
  StrokeSharp: IconImageDelete02StrokeSharp,
  SolidSharp: IconImageDelete02SolidSharp,
};