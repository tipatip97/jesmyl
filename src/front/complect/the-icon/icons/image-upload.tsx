import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C20.9472 19.2703 20.998 17.147 20.9999 13',
  d2: 'M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22',
  d3: 'M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18',
  d4: 'M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10',
  d5: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 13.2369 2 13.9132 2.0062 14.5351H2.49966C2.83742 14.5127 3.17624 14.5019 3.51535 14.5027C6.37129 14.4466 9.15727 15.2729 11.3762 16.8342L12.5312 17.6229C13.9969 16.5163 15.5568 15.9504 17.1313 15.9571C18.2708 15.9558 19.4039 16.2579 20.4995 16.8533C20.8991 15.9359 20.9997 13.5688 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d6: 'M12.4255 2L12.5 2C13.0523 2 13.5 2.44772 13.5 3C13.5 3.55229 13.0523 4 12.5 4C10.2326 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 15.7674 20 13.5V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V13.5744C22 15.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 10.2496 1.99998 12.4255 2Z',
  d7: 'M3.81591 13.1511C6.62892 13.0936 9.37864 13.9705 11.5752 15.6348C13.6036 17.1718 15.0414 19.291 15.6665 21.6692C15.7243 21.8891 15.6792 22.1234 15.5439 22.3061C15.4086 22.4889 15.1977 22.6004 14.9705 22.6093C13.972 22.6484 12.8093 22.6484 11.4638 22.6484H11.394C9.20328 22.6484 7.48261 22.6485 6.13919 22.4678C4.76254 22.2828 3.67028 21.8957 2.81208 21.0375C2.06622 20.2917 1.67291 19.3767 1.46104 18.2413C1.25354 17.1293 1.21086 15.7508 1.20118 14.0381C1.19907 13.6639 1.47307 13.3454 1.84337 13.2917C2.49583 13.1969 3.15534 13.1499 3.81591 13.1511ZM14.5198 16.3566C14.2905 16.0888 14.3803 15.6684 14.716 15.5606C15.5732 15.2854 16.451 15.1452 17.339 15.1485C18.6551 15.1474 19.9539 15.4654 21.1972 16.0789C21.4714 16.2142 21.636 16.5024 21.6132 16.8073C21.4779 18.6211 21.1275 20.0008 20.0908 21.0375C19.3085 21.8198 18.3318 22.2106 17.1224 22.4138C17.2152 22.0486 17.2159 21.6613 17.1177 21.2879C16.6392 19.4672 15.7456 17.7877 14.5198 16.3566Z',
  d8: 'M20.7559 10C20.7559 10.5523 20.3081 11 19.7559 11C19.2036 11 18.7559 10.5523 18.7559 10L18.7559 5.5L18.1616 5.50002C17.986 5.50014 17.7703 5.5003 17.5939 5.47823L17.5905 5.47781C17.4641 5.46204 16.888 5.39021 16.6137 4.82461C16.3387 4.25779 16.6407 3.75765 16.706 3.64944L17.0451 3.18095C17.3397 2.80513 17.7454 2.29067 18.1259 1.89966C18.3157 1.70455 18.533 1.50331 18.7639 1.34447C18.9691 1.20326 19.3193 1 19.75 1C20.1807 1 20.5309 1.20326 20.7361 1.34447C20.967 1.50331 21.1843 1.70455 21.3741 1.89966C21.7546 2.29067 22.1602 2.80512 22.4549 3.18095L22.794 3.64944C22.8593 3.75765 23.1613 4.25779 22.8863 4.82461C22.612 5.39021 22.0359 5.46204 21.9095 5.47781L21.9061 5.47823C21.7297 5.5003 21.514 5.50014 21.3384 5.50002L20.7559 5.5L20.7559 10Z',
  d9: 'M21 11V22H3V4H11',
  d10: 'M15 22C14.4281 19.7749 13.0934 17.7821 11.1937 16.3342C9.14549 14.7729 6.57381 13.9466 3.93756 14.0027C3.62454 14.0019 3.31177 14.0127 3 14.0351',
  d11: 'M13 19C14.6014 17.6733 16.3266 16.9928 18.0694 17.0001C19.0576 16.999 20.0412 17.2216 21 17.6617',
  d12: 'M17 10L17 2.5M20 5L17 2L14 5',
  d13: 'M2 3.50024C2 2.94796 2.44772 2.50024 3 2.50024H12V4.50024H4V12.7517C6.77422 12.71 9.4821 13.5867 11.6484 15.238C13.4445 16.607 14.7743 18.4373 15.4826 20.5002H17.0587C16.6174 19.0158 15.899 17.632 14.9492 16.4093C15.959 15.9724 17.0064 15.7461 18.0719 15.7503C18.7212 15.7498 19.3657 15.8359 20 16.0049V10.5002H22V21.5002C22 22.0525 21.5523 22.5002 21 22.5002H3C2.44772 22.5002 2 22.0525 2 21.5002V3.50024Z',
  d14: 'M17.293 1.49976L21.0002 5.20686L19.5859 6.62108L18.293 5.32818V10.914H16.293V5.32818L15.0002 6.62108L13.5859 5.20686L17.293 1.49976Z',
} as const;

export const IconImageUploadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-stroke-rounded IconImageUploadStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-duotone-rounded IconImageUploadDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-twotone-rounded IconImageUploadTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-solid-rounded IconImageUploadSolidRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-bulk-rounded IconImageUploadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-stroke-sharp IconImageUploadStrokeSharp"
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUploadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-solid-sharp IconImageUploadSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImageUpload: TheIconSelfPack = {
  name: 'ImageUpload',
  StrokeRounded: IconImageUploadStrokeRounded,
  DuotoneRounded: IconImageUploadDuotoneRounded,
  TwotoneRounded: IconImageUploadTwotoneRounded,
  SolidRounded: IconImageUploadSolidRounded,
  BulkRounded: IconImageUploadBulkRounded,
  StrokeSharp: IconImageUploadStrokeSharp,
  SolidSharp: IconImageUploadSolidSharp,
};