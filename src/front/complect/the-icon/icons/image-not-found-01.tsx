import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 14.1354C2.66663 14.0455 3.3406 14.0011 4.01569 14.0027C6.87163 13.9466 9.65761 14.7729 11.8765 16.3342C13.9345 17.7821 15.3805 19.7749 16 22',
  d2: 'M13.5 17.5C14.5 16.5 15.1772 16.2768 16 16',
  d3: 'M20 20.2132C18.6012 21.5001 16.3635 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001C2.5 7.63653 2.5 5.39882 3.78701 4',
  d4: 'M20.0002 16C20.5427 16 21.048 16.2945 21.3967 16.5638C21.5 15.3693 21.5 13.8825 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C9.59086 2.5 7.82972 2.5 6.5 2.71659',
  d5: 'M2 2L22 22',
  d6: 'M3.89124 20.1081C5.28249 21.4994 7.52166 21.4994 12 21.4994C16.4783 21.4994 18.7175 21.4994 20.1088 20.1081L3.89124 3.89062C2.5 5.28187 2.5 7.52104 2.5 11.9994C2.5 16.4777 2.5 18.7169 3.89124 20.1081Z',
  d7: 'M14.5687 16.4596C14.3393 16.1918 14.4291 15.7714 14.7648 15.6636C15.3351 15.4805 15.9145 15.3572 16.5 15.2961L21.2252 20.0213C20.9993 20.4975 20.7039 20.9292 20.3159 21.3173C19.4035 22.2297 18.2497 22.6298 16.8453 22.8186C15.4851 23.0015 13.7504 23.0015 11.5744 23.0014H11.4256C9.24959 23.0015 7.51485 23.0015 6.15471 22.8186C4.75033 22.6298 3.59653 22.2297 2.68414 21.3173C1.77175 20.4049 1.37164 19.2511 1.18282 17.8467C0.999958 16.4866 0.999977 14.7519 1 12.5759V12.5759V12.427C0.999977 10.251 0.999958 8.51627 1.18282 7.15614C1.37164 5.75176 1.77175 4.59795 2.68414 3.68556C3.11554 3.25416 3.60091 2.93729 4.14123 2.70312L5.72663 4.28853C4.96234 4.46112 4.47413 4.72399 4.09835 5.09978C3.6195 5.57863 3.32399 6.24003 3.16499 7.42263C3.00212 8.634 3 10.234 3 12.5014C3 14.7689 3.00212 16.3689 3.16499 17.5802C3.32399 18.7628 3.6195 19.4242 4.09835 19.9031C4.5772 20.3819 5.2386 20.6774 6.42121 20.8364C7.63258 20.9993 9.23256 21.0014 11.5 21.0014C13.7674 21.0014 15.3674 20.9993 16.5788 20.8364C16.7221 20.8172 16.8578 20.7959 16.9864 20.7725C16.4795 19.1897 15.6544 17.7272 14.5687 16.4596Z',
  d8: 'M21.5076 17.9476C21.6104 18.0504 21.6618 18.1018 21.7129 18.093C21.723 18.0913 21.7331 18.0878 21.7422 18.0831C21.7881 18.0592 21.7977 17.988 21.8168 17.8457C21.9997 16.4856 21.9996 14.7509 21.9996 12.5749V12.426C21.9996 10.25 21.9997 8.5153 21.8168 7.15516C21.628 5.75078 21.2279 4.59697 20.3155 3.68458C19.4031 2.77219 18.2493 2.37208 16.8449 2.18327C15.4848 2.0004 13.7501 2.00042 11.5741 2.00045C10.3426 2.00045 9.10987 1.96956 7.87916 2.02724C7.00341 2.06828 6.6577 3.09767 7.27763 3.7176C7.4944 3.93438 7.79308 4.04769 8.09944 4.03622C9.03532 4.0012 10.1491 4.00045 11.4996 4.00045C13.7671 4.00045 15.367 4.00257 16.5784 4.16543C17.761 4.32443 18.4224 4.61994 18.9013 5.09879C19.3801 5.57765 19.6756 6.23905 19.8346 7.42165C19.9975 8.63302 19.9996 10.233 19.9996 12.5004C19.9996 13.7382 19.999 14.7771 19.9719 15.6625C19.8478 15.6224 19.7233 15.5852 19.5984 15.551C19.3439 15.4811 19.2167 15.4462 19.178 15.5128C19.1393 15.5793 19.2343 15.6743 19.4243 15.8642L21.5076 17.9476Z',
  d9: 'M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z',
  d10: 'M11.624 15.7364C9.42747 14.072 6.67775 13.1952 3.86474 13.2527C3.20417 13.2514 2.54466 13.2985 1.8922 13.3932C1.5219 13.447 1.2479 13.7655 1.25001 14.1397C1.25969 15.8523 1.30237 17.2309 1.50986 18.3428C1.72174 19.4783 2.11505 20.3932 2.86091 21.1391C3.71911 21.9973 4.81137 22.3843 6.18802 22.5694C7.53143 22.75 9.2521 22.75 11.4428 22.75H11.5126C12.8581 22.75 14.0208 22.75 15.0193 22.7108C15.2465 22.7019 15.4574 22.5904 15.5927 22.4077C15.728 22.2249 15.7731 21.9907 15.7153 21.7708C15.0902 19.3925 13.6525 17.2734 11.624 15.7364Z',
  d11: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d12: 'M15 21C14.6917 19.8005 14.1618 18.6686 13.4412 17.6532M13.4412 17.6532C12.825 16.7848 12.0694 16.0016 11.1937 15.3342C9.14549 13.7729 6.57381 12.9466 3.93756 13.0027C3.62454 13.0019 3.31177 13.0127 3 13.0351M13.4412 17.6532C14.3464 16.9792 15.2871 16.5074 16.2449 16.2449',
  d13: 'M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z',
  d14: 'M3 3V21H21M6.2058 3H21V17.8394',
  d15: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d16: 'M21 1.99976C21.5523 1.99976 22 2.44747 22 2.99976V18.4642L18.8237 15.288C19.2188 15.3284 19.6113 15.4008 20 15.5045V3.99976H7.53553L5.53553 1.99976H21Z',
  d17: 'M21 21.9998H3C2.44772 21.9998 2 21.552 2 20.9998V2.99976C2 2.72361 2.11193 2.47361 2.29289 2.29265L4 3.99976V12.2512C6.77422 12.2095 9.48209 13.0862 11.6484 14.7375C13.4445 16.1065 14.7743 17.9368 15.4826 19.9998H17.0587C16.6174 18.5153 15.899 17.1315 14.9492 15.9089C15.1789 15.8095 15.4105 15.721 15.6439 15.6436L21.7071 21.7069C21.5261 21.8878 21.2761 21.9998 21 21.9998Z',
} as const;

export const IconImageNotFound01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-stroke-rounded IconImageNotFound01StrokeRounded"
    >
      <circle 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconImageNotFound01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-duotone-rounded IconImageNotFound01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconImageNotFound01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-twotone-rounded IconImageNotFound01TwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconImageNotFound01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-solid-rounded IconImageNotFound01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageNotFound01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-bulk-rounded IconImageNotFound01BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageNotFound01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-stroke-sharp IconImageNotFound01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageNotFound01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-not-found-01-solid-sharp IconImageNotFound01SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="16" 
        cy="8" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
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

export const iconPackOfImageNotFound01: TheIconSelfPack = {
  name: 'ImageNotFound01',
  StrokeRounded: IconImageNotFound01StrokeRounded,
  DuotoneRounded: IconImageNotFound01DuotoneRounded,
  TwotoneRounded: IconImageNotFound01TwotoneRounded,
  SolidRounded: IconImageNotFound01SolidRounded,
  BulkRounded: IconImageNotFound01BulkRounded,
  StrokeSharp: IconImageNotFound01StrokeSharp,
  SolidSharp: IconImageNotFound01SolidSharp,
};