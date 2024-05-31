import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 2.5C7.02166 2.5 4.78249 2.5 3.39124 3.89124C2 5.28249 2 7.52166 2 12C2 16.4783 2 18.7175 3.39124 20.1088C4.78249 21.5 7.02166 21.5 11.5 21.5C15.9783 21.5 18.2175 21.5 19.6088 20.1088C21 18.7175 21 16.4783 21 12C21 11.6715 21 11.355 20.9995 11.05',
  d2: 'M2 13.6354C2.61902 13.5455 3.24484 13.5011 3.87171 13.5027C6.52365 13.4466 9.11064 14.2729 11.1711 15.8342C13.082 17.2821 14.4247 19.2749 15 21.5',
  d3: 'M21 16.3962C19.8246 15.8009 18.6088 15.4988 17.3862 15.5001C15.5345 15.4928 13.7015 16.1733 12 17.5',
  d4: 'M22 5.5H14',
  d5: 'M3.39124 3.89124C2 5.28249 2 7.52166 2 12C2 12.7369 2 13.4132 2.0062 14.0351H2.49966C2.83742 14.0127 3.17624 14.0019 3.51535 14.0027C6.37129 13.9466 9.15727 14.7729 11.3762 16.3342L12.5312 17.1229C13.9969 16.0163 15.5568 15.4504 17.1313 15.4571C18.2708 15.4558 19.4039 15.7579 20.4995 16.3533C20.8991 15.4359 20.9997 13.0688 21 12C21 7.52166 21 5.28249 19.6088 3.89124C18.2175 2.5 15.9783 2.5 11.5 2.5C7.02166 2.5 4.78249 2.5 3.39124 3.89124Z',
  d6: 'M11.4255 1.5L11.5 1.5C12.0523 1.5 12.5 1.94772 12.5 2.5C12.5 3.05229 12.0523 3.5 11.5 3.5C9.23256 3.5 7.63258 3.50212 6.42121 3.66499C5.2386 3.82399 4.5772 4.1195 4.09835 4.59835C3.6195 5.0772 3.32399 5.7386 3.16499 6.92121C3.00212 8.13258 3 9.73256 3 12C3 14.2674 3.00212 15.8674 3.16499 17.0788C3.32399 18.2614 3.6195 18.9228 4.09835 19.4017C4.5772 19.8805 5.2386 20.176 6.42121 20.335C7.63258 20.4979 9.23256 20.5 11.5 20.5C13.7674 20.5 15.3674 20.4979 16.5788 20.335C17.7614 20.176 18.4228 19.8805 18.9017 19.4017C19.3805 18.9228 19.676 18.2614 19.835 17.0788C19.9979 15.8674 20 14.2674 20 12C20 11.6713 20 11.3557 19.9995 11.0518C19.9985 10.4995 20.4454 10.051 20.9977 10.05C21.5499 10.049 21.9985 10.4959 21.9995 11.0482C22 11.3542 22 11.6717 22 12V12.0744C22 14.2504 22 15.9851 21.8172 17.3453C21.6284 18.7497 21.2283 19.9035 20.3159 20.8159C19.4035 21.7283 18.2497 22.1284 16.8453 22.3172C15.4851 22.5 13.7504 22.5 11.5744 22.5H11.4256C9.24959 22.5 7.51485 22.5 6.15471 22.3172C4.75033 22.1284 3.59653 21.7283 2.68414 20.8159C1.77175 19.9035 1.37164 18.7497 1.18282 17.3453C0.999958 15.9852 0.999977 14.2504 1 12.0745V11.9255C0.999977 9.74957 0.999958 8.01485 1.18282 6.65471C1.37164 5.25033 1.77175 4.09653 2.68414 3.18414C3.59653 2.27175 4.75033 1.87164 6.15471 1.68282C7.51485 1.49996 9.24957 1.49998 11.4255 1.5Z',
  d7: 'M3.81591 13.0027C6.62892 12.9452 9.37864 13.822 11.5752 15.4864C13.6036 17.0234 15.0414 19.1425 15.6665 21.5208C15.7243 21.7407 15.6792 21.9749 15.5439 22.1577C15.4086 22.3404 15.1977 22.4519 14.9705 22.4608C13.972 22.5 12.8093 22.5 11.4638 22.5H11.394C9.20328 22.5 7.48261 22.5 6.13919 22.3194C4.76254 22.1343 3.67028 21.7473 2.81208 20.8891C2.06622 20.1432 1.67291 19.2283 1.46104 18.0928C1.25354 16.9809 1.21086 15.6023 1.20118 13.8897C1.19907 13.5155 1.47307 13.197 1.84337 13.1432C2.49583 13.0485 3.15534 13.0014 3.81591 13.0027ZM14.5198 16.2082C14.2905 15.9404 14.3803 15.52 14.716 15.4122C15.5732 15.137 16.451 14.9968 17.339 15.0001C18.6551 14.999 19.9539 15.3169 21.1972 15.9305C21.4714 16.0658 21.636 16.3539 21.6132 16.6588C21.4779 18.4726 21.1275 19.8524 20.0908 20.8891C19.3085 21.6714 18.3318 22.0622 17.1224 22.2654C17.2152 21.9002 17.2159 21.5129 17.1177 21.1394C16.6392 19.3187 15.7456 17.6393 14.5198 16.2082Z',
  d8: 'M13 5.5C13 4.94772 13.4477 4.5 14 4.5H22C22.5523 4.5 23 4.94772 23 5.5C23 6.05228 22.5523 6.5 22 6.5H14C13.4477 6.5 13 6.05228 13 5.5Z',
  d9: 'M20 9V21H2V3H11',
  d10: 'M14 21C13.4281 18.7749 12.0934 16.7821 10.1937 15.3342C8.14549 13.7729 5.57381 12.9466 2.93756 13.0027C2.62454 13.0019 2.31177 13.0127 2 13.0351',
  d11: 'M12 18C13.6014 16.6733 15.3266 15.9928 17.0694 16.0001C18.0576 15.999 19.0412 16.2216 20 16.6617',
  d12: 'M22 5H14',
  d13: 'M2 3C2 2.44772 2.44772 2 3 2H12V4H4V12.2514C6.77422 12.2097 9.4821 13.0865 11.6484 14.7377C13.4445 16.1068 14.7743 17.937 15.4826 20H17.0587C16.6174 18.5155 15.899 17.1317 14.9492 15.9091C15.959 15.4721 17.0064 15.2459 18.0719 15.2501C18.7212 15.2495 19.3657 15.3356 20 15.5047V9H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z',
  d14: 'M14 5H22V7H14V5Z',
} as const;

export const IconImageRemove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-stroke-rounded IconImageRemove02StrokeRounded"
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

export const IconImageRemove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-duotone-rounded IconImageRemove02DuotoneRounded"
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

export const IconImageRemove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-twotone-rounded IconImageRemove02TwotoneRounded"
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

export const IconImageRemove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-solid-rounded IconImageRemove02SolidRounded"
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

export const IconImageRemove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-bulk-rounded IconImageRemove02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageRemove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-stroke-sharp IconImageRemove02StrokeSharp"
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

export const IconImageRemove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-remove-02-solid-sharp IconImageRemove02SolidSharp"
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

export const iconPackOfImageRemove02: TheIconSelfPack = {
  name: 'ImageRemove02',
  StrokeRounded: IconImageRemove02StrokeRounded,
  DuotoneRounded: IconImageRemove02DuotoneRounded,
  TwotoneRounded: IconImageRemove02TwotoneRounded,
  SolidRounded: IconImageRemove02SolidRounded,
  BulkRounded: IconImageRemove02BulkRounded,
  StrokeSharp: IconImageRemove02StrokeSharp,
  SolidSharp: IconImageRemove02SolidSharp,
};