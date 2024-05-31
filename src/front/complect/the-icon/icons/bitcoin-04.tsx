import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.9448 18.1667V12.8333M15.5073 12.8333V11.5M15.5073 19.5V18.1667M13.9448 15.5H17.0698M17.0698 15.5C17.5876 15.5 18.0073 15.9477 18.0073 16.5V17.1667C18.0073 17.719 17.5876 18.1667 17.0698 18.1667H13.0073M17.0698 15.5C17.5876 15.5 18.0073 15.0523 18.0073 14.5V13.8333C18.0073 13.281 17.5876 12.8333 17.0698 12.8333H13.0073',
  d2: 'M15.5025 9C11.914 9 9.00488 11.9101 9.00488 15.5C9.00488 19.0898 11.914 22 15.5025 22C19.091 22 22.0002 19.0899 22.0002 15.5C22.0002 11.9101 19.091 9 15.5025 9Z',
  d3: 'M8.00516 6C11.3177 6 14.003 5.10457 14.003 4C14.003 2.89543 11.3177 2 8.00516 2C4.69264 2 2.00732 2.89543 2.00732 4C2.00732 5.10457 4.69264 6 8.00516 6Z',
  d4: 'M2 4V8.02171V12.0434C2 12.7473 3.17905 13.6328 6.1323 14M2.10733 8.54768C3.3124 9.60965 5.4609 10.0602 7.75706 10.0602M13.9957 4.12134V6.13597',
  d5: 'M8 5.55664C11.3137 5.55664 14 4.66121 14 3.55664C14 2.45207 11.3137 1.55664 8 1.55664C4.68629 1.55664 2 2.45207 2 3.55664C2 4.66121 4.68629 5.55664 8 5.55664Z',
  d6: 'M15.5 8.55664C11.9102 8.55664 9 11.4667 9 15.0566C9 18.6464 11.9102 21.5566 15.5 21.5566C19.0898 21.5566 22 18.6465 22 15.0566C22 11.4667 19.0898 8.55664 15.5 8.55664Z',
  d7: 'M2 3.55664V7.57835V11.6C2 12.3039 3.17905 13.1894 6.1323 13.5566M2.10733 8.10432C3.3124 9.16629 5.4609 9.61684 7.75706 9.61684M13.9957 3.67798V5.69261',
  d8: 'M13.9375 17.7233V12.3899M15.5 12.3899V11.0566M15.5 19.0566V17.7233M13.9375 15.0566H17.0625M17.0625 15.0566C17.5803 15.0566 18 15.5043 18 16.0566V16.7233C18 17.2756 17.5803 17.7233 17.0625 17.7233H13M17.0625 15.0566C17.5803 15.0566 18 14.6089 18 14.0566V13.3899C18 12.8376 17.5803 12.3899 17.0625 12.3899H13',
  d9: 'M8.00378 6C11.3169 6 14.0027 5.10457 14.0027 4C14.0027 2.89543 11.3169 2 8.00378 2C4.69068 2 2.00488 2.89543 2.00488 4C2.00488 5.10457 4.69068 6 8.00378 6Z',
  d10: 'M15.5027 9C11.9136 9 9.00391 11.9101 9.00391 15.5C9.00391 19.0898 11.9136 22 15.5027 22C19.0919 22 22.0015 19.0899 22.0015 15.5C22.0015 11.9101 19.0919 9 15.5027 9Z',
  d11: 'M13.9403 18.1667V12.8333M15.5025 12.8333V11.5M15.5025 19.5V18.1667M13.9403 15.5H17.0647M17.0647 15.5C17.5824 15.5 18.002 15.9477 18.002 16.5V17.1667C18.002 17.719 17.5824 18.1667 17.0647 18.1667H13.0029M17.0647 15.5C17.5824 15.5 18.002 15.0523 18.002 14.5V13.8333C18.002 13.281 17.5824 12.8333 17.0647 12.8333H13.0029',
  d12: 'M1.99805 4V8.02171V12.0434C1.99805 12.7473 3.187 13.5448 6.13971 13.912M2.18371 8.53937C3.38856 9.60133 5.48458 9.99502 7.78032 9.99502M13.9915 4.12134V6.13597',
  d13: 'M3.52019 1.87427C4.70117 1.48061 6.28497 1.25 8 1.25C9.71503 1.25 11.2988 1.48061 12.4798 1.87427C13.0664 2.0698 13.5952 2.31915 13.9927 2.63245C14.3818 2.93909 14.75 3.39556 14.75 4C14.75 4.60444 14.3818 5.06091 13.9927 5.36755C13.5952 5.68085 13.0664 5.9302 12.4798 6.12573C11.2988 6.51939 9.71503 6.75 8 6.75C6.28497 6.75 4.70117 6.51939 3.52019 6.12573C2.93362 5.9302 2.40483 5.68085 2.00728 5.36755C1.61818 5.06091 1.25 4.60444 1.25 4C1.25 3.39556 1.61818 2.93909 2.00728 2.63245C2.40483 2.31915 2.93362 2.0698 3.52019 1.87427Z',
  d14: 'M3.17857 11.7291C3.1826 11.7335 3.18721 11.7383 3.19246 11.7436C3.27415 11.8261 3.44305 11.9487 3.73691 12.0834C4.32023 12.3507 5.20834 12.5807 6.30504 12.7018C6.83446 12.7603 7.21688 13.2425 7.15918 13.7788C7.10148 14.3152 6.62553 14.7026 6.0961 14.6442C4.87844 14.5097 3.7734 14.2445 2.94218 13.8636C2.52876 13.6742 2.13503 13.4345 1.83091 13.1274C1.52361 12.817 1.25 12.3742 1.25 11.8155V4H3.17857V7.82199C3.1941 7.83872 3.21818 7.862 3.25432 7.89166C3.41348 8.02227 3.70283 8.18373 4.14708 8.33956C5.02607 8.64786 6.30577 8.86314 7.77599 8.88314C8.30851 8.89039 8.7344 9.33361 8.72725 9.8731C8.7201 10.4126 8.28261 10.8441 7.7501 10.8368C6.13483 10.8149 4.64015 10.5802 3.51613 10.1859C3.40178 10.1458 3.28902 10.1033 3.17857 10.0582V11.7291ZM14.75 4V6.0689C14.75 6.60844 14.3183 7.04583 13.7857 7.04583C13.2532 7.04583 12.8214 6.60844 12.8214 6.0689V4H14.75Z',
  d15: 'M15.5 22.75C19.5041 22.75 22.75 19.5041 22.75 15.5C22.75 11.4959 19.5041 8.25 15.5 8.25C11.4959 8.25 8.25 11.4959 8.25 15.5C8.25 19.5041 11.4959 22.75 15.5 22.75ZM16.25 11.5C16.25 11.0858 15.9142 10.75 15.5 10.75C15.0858 10.75 14.75 11.0858 14.75 11.5V12.0833H13C12.5858 12.0833 12.25 12.4191 12.25 12.8333C12.25 13.2475 12.5858 13.5833 13 13.5833H13.1875L13.1875 17.4167H13C12.5858 17.4167 12.25 17.7525 12.25 18.1667C12.25 18.5809 12.5858 18.9167 13 18.9167H14.75V19.5C14.75 19.9142 15.0858 20.25 15.5 20.25C15.9142 20.25 16.25 19.9142 16.25 19.5V18.9167H17.0625C18.0393 18.9167 18.75 18.0868 18.75 17.1667V16.5C18.75 16.1376 18.6398 15.7892 18.4465 15.5C18.6398 15.2108 18.75 14.8624 18.75 14.5V13.8333C18.75 12.9132 18.0393 12.0833 17.0625 12.0833H16.25V11.5ZM14.6875 14.75V13.5833H17.0625C17.1212 13.5833 17.25 13.6489 17.25 13.8333V14.5C17.25 14.6844 17.1212 14.75 17.0625 14.75H14.6875ZM14.6875 16.25H17.0625C17.1212 16.25 17.25 16.3156 17.25 16.5V17.1667C17.25 17.3511 17.1212 17.4167 17.0625 17.4167H14.6875L14.6875 16.25Z',
  d16: 'M22.75 15.5C22.75 19.5041 19.5041 22.75 15.5 22.75C11.4959 22.75 8.25 19.5041 8.25 15.5C8.25 11.4959 11.4959 8.25 15.5 8.25C19.5041 8.25 22.75 11.4959 22.75 15.5Z',
  d17: 'M15.5 10.75C15.9142 10.75 16.25 11.0858 16.25 11.5V12.0833H17.0625C18.0393 12.0833 18.75 12.9132 18.75 13.8333V14.5C18.75 14.8624 18.6398 15.2108 18.4465 15.5C18.6398 15.7892 18.75 16.1376 18.75 16.5V17.1667C18.75 18.0868 18.0393 18.9167 17.0625 18.9167H16.25V19.5C16.25 19.9142 15.9142 20.25 15.5 20.25C15.0858 20.25 14.75 19.9142 14.75 19.5V18.9167H13C12.5858 18.9167 12.25 18.5809 12.25 18.1667C12.25 17.7525 12.5858 17.4167 13 17.4167H13.1875L13.1875 13.5833H13C12.5858 13.5833 12.25 13.2475 12.25 12.8333C12.25 12.4191 12.5858 12.0833 13 12.0833H14.75V11.5C14.75 11.0858 15.0858 10.75 15.5 10.75ZM14.6875 13.5833V14.75H17.0625C17.1212 14.75 17.25 14.6844 17.25 14.5V13.8333C17.25 13.6489 17.1212 13.5833 17.0625 13.5833H14.6875ZM17.0625 16.25H14.6875L14.6875 17.4167H17.0625C17.1212 17.4167 17.25 17.3511 17.25 17.1667V16.5C17.25 16.3156 17.1212 16.25 17.0625 16.25Z',
  d18: 'M7.99792 6C11.3105 6 13.9958 5.10457 13.9958 4C13.9958 2.89543 11.3105 2 7.99792 2C4.68536 2 2 2.89543 2 4C2 5.10457 4.68536 6 7.99792 6Z',
  d19: 'M15.4958 9C11.9072 9 8.99805 11.9101 8.99805 15.5C8.99805 19.0898 11.9072 22 15.4958 22C19.0844 22 21.9935 19.0899 21.9935 15.5C21.9935 11.9101 19.0844 9 15.4958 9Z',
  d20: 'M13.9338 18.1667V12.8333M15.4957 12.8333V11.5M15.4957 19.5V18.1667M13.9338 15.5H17.0577M17.0577 15.5C17.5753 15.5 17.9949 15.9477 17.9949 16.5V17.1667C17.9949 17.719 17.5753 18.1667 17.0577 18.1667H12.9966M17.0577 15.5C17.5753 15.5 17.9949 15.0523 17.9949 14.5V13.8333C17.9949 13.281 17.5753 12.8333 17.0577 12.8333H12.9966',
  d21: 'M7.76614 10.0219C4.45142 10.0219 1.99219 9.09411 1.99219 8.10024M13.9958 8.10024V3.90137M1.99219 3.90137V12.0328C1.99219 12.8389 3.75325 13.6775 6.18999 13.9065',
  d22: 'M3.17857 11.7291C3.26026 11.8116 3.44305 11.9487 3.73691 12.0834C4.28273 12.3335 5.09539 12.551 6.0961 12.6771V14.6442C4.87844 14.5097 3.77341 14.2445 2.94218 13.8636C2.52876 13.6742 2.13503 13.4345 1.83091 13.1274C1.52361 12.817 1.25 12.3742 1.25 11.8155V4H3.17857V7.82199C3.39486 8.01581 3.70283 8.18373 4.14708 8.33956C5.02607 8.64786 6.30577 8.86314 7.77599 8.88314L7.7501 10.8368C6.13483 10.8149 4.64015 10.5802 3.51613 10.1859C3.40178 10.1458 3.28902 10.1033 3.17857 10.0582V11.7291Z',
  d23: 'M14.75 4V7.0689H12.8214V4H14.75Z',
  d24: 'M15.5 22.75C19.5041 22.75 22.75 19.5041 22.75 15.5C22.75 11.4959 19.5041 8.25 15.5 8.25C11.4959 8.25 8.25 11.4959 8.25 15.5C8.25 19.5041 11.4959 22.75 15.5 22.75ZM16.25 12.0833V10.75H14.75V12.0833H12.25V13.5833H13.1875L13.1875 17.4167H12.25V18.9167H14.75V20.25H16.25V18.9167H17.0625C18.0393 18.9167 18.75 18.0868 18.75 17.1667V16.5C18.75 16.1376 18.6398 15.7892 18.4465 15.5C18.6398 15.2108 18.75 14.8624 18.75 14.5V13.8333C18.75 12.9132 18.0393 12.0833 17.0625 12.0833H16.25ZM14.6875 14.75V13.5833H17.0625C17.1212 13.5833 17.25 13.6489 17.25 13.8333V14.5C17.25 14.6844 17.1212 14.75 17.0625 14.75H14.6875ZM14.6875 16.25H17.0625C17.1212 16.25 17.25 16.3156 17.25 16.5V17.1667C17.25 17.3511 17.1212 17.4167 17.0625 17.4167H14.6875L14.6875 16.25Z',
} as const;

export const IconBitcoin04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-stroke-rounded IconBitcoin04StrokeRounded"
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

export const IconBitcoin04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-duotone-rounded IconBitcoin04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBitcoin04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-twotone-rounded IconBitcoin04TwotoneRounded"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-solid-rounded IconBitcoin04SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-bulk-rounded IconBitcoin04BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-stroke-sharp IconBitcoin04StrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-04-solid-sharp IconBitcoin04SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoin04: TheIconSelfPack = {
  name: 'Bitcoin04',
  StrokeRounded: IconBitcoin04StrokeRounded,
  DuotoneRounded: IconBitcoin04DuotoneRounded,
  TwotoneRounded: IconBitcoin04TwotoneRounded,
  SolidRounded: IconBitcoin04SolidRounded,
  BulkRounded: IconBitcoin04BulkRounded,
  StrokeSharp: IconBitcoin04StrokeSharp,
  SolidSharp: IconBitcoin04SolidSharp,
};