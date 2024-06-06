import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V9',
  d2: 'M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22',
  d3: 'M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18',
  d4: 'M14 6C14 6 15 6 16 8C16 8 19.1765 3 22 2',
  d5: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 13.2369 2 13.9132 2.0062 14.5351H2.49966C2.83742 14.5127 3.17624 14.5019 3.51535 14.5027C6.37129 14.4466 9.15727 15.2729 11.3762 16.8342L12.5312 17.6229C13.9969 16.5163 15.5568 15.9504 17.1313 15.9571C18.2708 15.9558 19.4039 16.2579 20.4995 16.8533C20.8991 15.9359 20.9997 13.5688 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d6: 'M11.4255 2L11.5 2C12.0523 2 12.5 2.44772 12.5 3C12.5 3.55229 12.0523 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 11.7674 20 9.5V9C20 8.44772 20.4477 8 21 8C21.5523 8 22 8.44772 22 9V9.57442C22 11.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2Z',
  d7: 'M3.81591 13.1511C6.62892 13.0936 9.37864 13.9705 11.5752 15.6348C13.6036 17.1718 15.0414 19.291 15.6665 21.6692C15.7243 21.8891 15.6792 22.1234 15.5439 22.3061C15.4086 22.4889 15.1977 22.6004 14.9705 22.6093C13.972 22.6484 12.8093 22.6484 11.4638 22.6484H11.394C9.20328 22.6484 7.48261 22.6485 6.13919 22.4678C4.76254 22.2828 3.67028 21.8957 2.81208 21.0375C2.06622 20.2917 1.67291 19.3767 1.46104 18.2413C1.25354 17.1293 1.21086 15.7508 1.20118 14.0381C1.19907 13.6639 1.47307 13.3454 1.84337 13.2917C2.49583 13.1969 3.15534 13.1499 3.81591 13.1511ZM14.5198 16.3566C14.2905 16.0888 14.3803 15.6684 14.716 15.5606C15.5732 15.2854 16.451 15.1452 17.339 15.1485C18.6551 15.1474 19.9539 15.4654 21.1972 16.0789C21.4714 16.2142 21.636 16.5024 21.6132 16.8073C21.4779 18.6211 21.1275 20.0008 20.0908 21.0375C19.3085 21.8198 18.3318 22.2106 17.1224 22.4138C17.2152 22.0486 17.2159 21.6613 17.1177 21.2879C16.6392 19.4672 15.7456 17.7877 14.5198 16.3566Z',
  d8: 'M22.9426 1.66643C23.127 2.18702 22.8544 2.75852 22.3338 2.9429C21.8002 3.1319 21.1837 3.53876 20.5307 4.11148C19.888 4.67513 19.2628 5.35205 18.7091 6.01586C18.1572 6.67736 17.6885 7.31109 17.3574 7.78008C17.1922 8.01407 17.0622 8.20579 16.9743 8.33786C16.9303 8.40386 16.8969 8.45488 16.8749 8.48874L16.8506 8.52634L16.8451 8.53496L16.8441 8.53651C16.6508 8.84059 16.3087 9.01739 15.9489 8.99896C15.5889 8.98053 15.2668 8.76985 15.1056 8.44749C14.6649 7.56612 14.2696 7.21517 14.0703 7.08232C13.986 7.02611 13.929 7.00359 13.9064 6.99595C13.398 6.94874 13 6.52099 13 6.00027C13 5.44799 13.4477 5.00027 14 5.00027L14.0759 5.00284C14.1055 5.00475 14.1393 5.00792 14.1771 5.01295C14.2527 5.02303 14.3434 5.04051 14.4466 5.07C14.6545 5.12939 14.9053 5.23529 15.1797 5.41822C15.454 5.60107 15.7416 5.85384 16.0304 6.1997C16.3456 5.76895 16.734 5.26128 17.1733 4.73468C17.7666 4.02349 18.465 3.26292 19.212 2.60781C19.9486 1.96179 20.788 1.36865 21.6662 1.05765C22.1868 0.873267 22.7582 1.14583 22.9426 1.66643Z',
  d9: 'M20 10V22H2V4H11',
  d10: 'M14 22C13.4281 19.7749 12.0934 17.7821 10.1937 16.3342C8.14549 14.7729 5.57381 13.9466 2.93756 14.0027C2.62454 14.0019 2.31177 14.0127 2 14.0351',
  d11: 'M12 19C13.6014 17.6733 15.3266 16.9928 17.0694 17.0001C18.0576 16.999 19.0412 17.2216 20 17.6617',
  d12: 'M14 6L16 8L22 2',
  d13: 'M22.5002 2.91409L15.793 9.6212L13.0859 6.91409L14.5002 5.49988L15.793 6.79277L21.0859 1.49988L22.5002 2.91409Z',
  d14: 'M1.5 3.50012C1.5 2.94784 1.94772 2.50012 2.5 2.50012H11.5V4.50012H3.5V12.7515C6.27422 12.7098 8.9821 13.5866 11.1484 15.2378C12.9445 16.6069 14.2743 18.4372 14.9826 20.5001H16.5587C16.1174 19.0157 15.399 17.6318 14.4492 16.4092C15.459 15.9722 16.5064 15.746 17.5719 15.7502C18.2212 15.7496 18.8657 15.8357 19.5 16.0048V10.5001H21.5V21.5001C21.5 22.0524 21.0523 22.5001 20.5 22.5001H2.5C1.94772 22.5001 1.5 22.0524 1.5 21.5001V3.50012Z',
};

export const IconImageDone02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-stroke-rounded IconImageDone02StrokeRounded"
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

export const IconImageDone02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-duotone-rounded IconImageDone02DuotoneRounded"
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

export const IconImageDone02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-twotone-rounded IconImageDone02TwotoneRounded"
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

export const IconImageDone02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-solid-rounded IconImageDone02SolidRounded"
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

export const IconImageDone02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-bulk-rounded IconImageDone02BulkRounded"
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

export const IconImageDone02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-stroke-sharp IconImageDone02StrokeSharp"
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

export const IconImageDone02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-02-solid-sharp IconImageDone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfImageDone02: TheIconSelfPack = {
  name: 'ImageDone02',
  StrokeRounded: IconImageDone02StrokeRounded,
  DuotoneRounded: IconImageDone02DuotoneRounded,
  TwotoneRounded: IconImageDone02TwotoneRounded,
  SolidRounded: IconImageDone02SolidRounded,
  BulkRounded: IconImageDone02BulkRounded,
  StrokeSharp: IconImageDone02StrokeSharp,
  SolidSharp: IconImageDone02SolidSharp,
};