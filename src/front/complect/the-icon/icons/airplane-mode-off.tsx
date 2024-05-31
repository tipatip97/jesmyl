import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.1795 13.8261L12.9201 16.1149C12.8261 16.9448 12.779 17.3598 12.915 17.7398C13.2335 18.63 14.3149 19.3591 14.9753 20.0066C15.3403 20.3644 15.7386 21.3934 15.3224 21.8613C15.0655 22.1503 14.6481 21.9157 14.3609 21.803L11.5952 20.7184C11.2645 20.5887 11.0991 20.5239 10.9255 20.5239C10.7519 20.5239 10.5865 20.5887 10.2558 20.7184L7.49016 21.803C7.20291 21.9157 6.78553 22.1503 6.52858 21.8613C6.11239 21.3934 6.51073 20.3644 6.87572 20.0066C7.53614 19.3591 8.61751 18.63 8.936 17.7398C9.07199 17.3598 9.02496 16.9448 8.93091 16.1149L8.67153 13.8261L2.89514 15.1587C2.29655 15.2968 1.99982 15.1155 2 14.4391C2.00033 13.1971 2.39739 12.537 3.40543 11.9183L6.6995 9.89656C7.25228 9.55783 7.52868 9.38846 7.71947 9.15616C7.99925 8.81552 8 8 8 8',
  d2: 'M8.5 4C8.97199 3.18656 9.71851 2.43508 10.4363 2.11845C10.7943 1.96052 11.205 1.96052 11.5631 2.11845C12.7263 2.63158 13.8803 4.28671 14.0089 5.49686C14.133 6.66595 13.3998 8.15082 14.2324 9.15616C14.4248 9.38846 14.7035 9.55783 15.2609 9.89656L18.5826 11.9182C19.5993 12.5369 19.9997 13.1973 19.9997 14.4395C19.9997 14.9429 19.5 15.5 19.5 15.5',
  d3: 'M2 2L22 22',
  d4: 'M3.40543 11.9183L6.6995 9.89656C7.25228 9.55783 7.52868 9.38846 7.71947 9.15616C7.99925 8.81552 8 8 8 8L13.1795 13.8261L12.9201 16.1149C12.8261 16.9448 12.779 17.3598 12.915 17.7398C13.2335 18.63 14.3149 19.3591 14.9753 20.0066C15.3403 20.3644 15.7386 21.3934 15.3224 21.8613C15.0655 22.1503 14.6481 21.9157 14.3609 21.803L11.5952 20.7184L11.5952 20.7184C11.2645 20.5887 11.0991 20.5239 10.9255 20.5239C10.7519 20.5239 10.5865 20.5887 10.2559 20.7184L10.2558 20.7184L7.49016 21.803C7.20291 21.9157 6.78553 22.1503 6.52858 21.8613C6.11239 21.3934 6.51073 20.3644 6.87572 20.0066C7.53614 19.3591 8.61751 18.63 8.936 17.7398C9.07199 17.3598 9.02496 16.9448 8.93092 16.1149L8.93091 16.1149L8.67153 13.8261L2.89514 15.1587C2.29655 15.2968 1.99982 15.1155 2 14.4391C2.00033 13.1971 2.39739 12.537 3.40543 11.9183Z',
  d5: 'M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z',
  d6: 'M3.78523 11.9122L7.38354 9.7388C7.98737 9.37467 8.2893 9.19259 8.49771 8.94287C8.60087 8.81927 8.79246 8.79247 8.9063 8.90631L14.308 14.308C14.3728 14.3728 14.4044 14.4635 14.3939 14.5545L14.1787 16.4235C14.0759 17.3157 14.0246 17.7617 14.1731 18.1703C14.521 19.1273 15.7023 19.911 16.4237 20.6071C16.8224 20.9918 17.2575 22.0979 16.8029 22.6009C16.5222 22.9115 16.0663 22.6594 15.7525 22.5383L12.7314 21.3723C12.3702 21.2329 12.1895 21.1632 11.9999 21.1632C11.8102 21.1632 11.6296 21.2329 11.2683 21.3723L8.24723 22.5383C7.93344 22.6594 7.47752 22.9115 7.19683 22.6009C6.7422 22.0979 7.17734 20.9918 7.57603 20.6071C8.29746 19.911 9.47869 19.1273 9.8266 18.1703C9.97515 17.7617 9.92378 17.3156 9.82105 16.4235L9.57597 14.2954C9.55554 14.118 9.38565 13.9976 9.21152 14.0371L3.22781 15.3956C2.57394 15.544 2.2498 15.3491 2.25 14.622C2.25037 13.2869 2.6841 12.5773 3.78523 11.9122Z',
  d7: 'M20.2148 11.9121L16.6162 9.7388C16.0124 9.37467 15.7104 9.19259 15.502 8.94287C14.6 7.86213 15.3943 6.26589 15.2598 5.00912C15.1206 3.70822 13.8704 1.92895 12.6102 1.37733C12.2223 1.20756 11.7774 1.20756 11.3895 1.37733C10.1293 1.92895 8.8791 3.70822 8.73988 5.00912C8.73807 5.02603 8.73643 5.043 8.73495 5.06003C8.7277 5.14348 8.76038 5.22485 8.81961 5.28408L18.3292 14.7937C18.3692 14.8337 18.4198 14.8616 18.4749 14.8741L20.7723 15.3957C21.4259 15.5441 21.75 15.3492 21.75 14.6224C21.75 13.2871 21.3162 12.5772 20.2148 11.9121Z',
  d8: 'M3.78523 11.9102L7.38354 9.73686C7.98737 9.37272 8.2893 9.19065 8.49771 8.94093C8.60087 8.81732 8.79246 8.79052 8.9063 8.90436L14.308 14.3061C14.3728 14.3708 14.4044 14.4616 14.3939 14.5525L14.1787 16.4216C14.0759 17.3137 14.0246 17.7598 14.1731 18.1684C14.521 19.1253 15.7023 19.9091 16.4237 20.6051C16.8224 20.9898 17.2575 22.096 16.8029 22.599C16.5222 22.9096 16.0663 22.6574 15.7525 22.5363L12.7314 21.3704C12.3702 21.2309 12.1895 21.1612 11.9999 21.1612C11.8102 21.1612 11.6296 21.2309 11.2683 21.3704L8.24723 22.5363C7.93344 22.6574 7.47752 22.9096 7.19683 22.599C6.7422 22.096 7.17734 20.9898 7.57603 20.6051C8.29746 19.9091 9.47869 19.1253 9.8266 18.1684C9.97515 17.7598 9.92378 17.3137 9.82105 16.4216L9.57597 14.2934C9.55554 14.116 9.38565 13.9957 9.21152 14.0352L3.22781 15.3936C2.57394 15.5421 2.2498 15.3472 2.25 14.6201C2.25037 13.2849 2.6841 12.5753 3.78523 11.9102Z',
  d9: 'M20.2152 11.9121L16.6166 9.7388C16.0128 9.37467 15.7108 9.19259 15.5024 8.94287C14.6005 7.86213 15.3948 6.26589 15.2603 5.00912C15.121 3.70822 13.8708 1.92895 12.6106 1.37733C12.2227 1.20756 11.7778 1.20756 11.39 1.37733C10.1297 1.92895 8.87952 3.70822 8.7403 5.00912C8.73849 5.02603 8.73685 5.043 8.73537 5.06003C8.72812 5.14348 8.7608 5.22485 8.82003 5.28408L18.3296 14.7937C18.3697 14.8337 18.4202 14.8616 18.4754 14.8741L20.7728 15.3957C21.4263 15.5441 21.7504 15.3492 21.7504 14.6224C21.7504 13.2871 21.3166 12.5772 20.2152 11.9121Z',
  d10: 'M2 2.02344L22 22.0001',
  d11: 'M8.202 5.03918C8.54905 3.76458 9.33867 2.86469 11.0113 2.00098C13.9186 3.43654 14.1273 5.11998 14.0242 9.0533L19.9602 12.5198L20.0009 15.4684C20.0045 15.5356 19.796 15.4852 19.7307 15.4684L18.224 15.0713M7.98834 7.98983C7.98749 8.34507 7.98327 8.65047 7.98834 9.0533L2.00693 12.5189V15.382C2.00333 15.4493 1.98013 15.529 2.04542 15.5122L8.73673 13.8347L9.00609 17.5105L6.04032 19.9547C6.00504 19.9836 6.02081 20.009 6.04032 20.0503L6.98014 21.9399L6.98267 21.9453C7.00227 21.9869 7.00363 21.9898 7.05023 21.9725L10.9947 20.4873L14.9083 21.9489C14.9568 21.9669 15.0031 21.9957 15.0252 21.9489L15.9489 20.0577L15.9502 20.055C15.969 20.0151 15.9833 19.9849 15.9489 19.9566L12.9967 17.5105L13.2721 13.8346L14.0124 14.0194',
  d12: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d13: 'M20 12.5L14.0089 9.00002L14 6.5C14.0089 3 11 2 11 2C11 2 9.03749 2.65223 8.28235 4.74682L18.7162 15.1806L19.9998 15.5L20 12.5Z',
  d14: 'M13 17.5L13.2725 13.8262L14.0095 14.0095L7.99108 7.99108V9.00002L2 12.5L2.00024 15.5L8.72752 13.8262L9 17.5L6 20L7 22L11 20.5L15 22L16 20L13 17.5Z',
} as const;

export const IconAirplaneModeOffStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-stroke-rounded IconAirplaneModeOffStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-duotone-rounded IconAirplaneModeOffDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-twotone-rounded IconAirplaneModeOffTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-solid-rounded IconAirplaneModeOffSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-bulk-rounded IconAirplaneModeOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-stroke-sharp IconAirplaneModeOffStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeOffSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-off-solid-sharp IconAirplaneModeOffSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfAirplaneModeOff: TheIconSelfPack = {
  name: 'AirplaneModeOff',
  StrokeRounded: IconAirplaneModeOffStrokeRounded,
  DuotoneRounded: IconAirplaneModeOffDuotoneRounded,
  TwotoneRounded: IconAirplaneModeOffTwotoneRounded,
  SolidRounded: IconAirplaneModeOffSolidRounded,
  BulkRounded: IconAirplaneModeOffBulkRounded,
  StrokeSharp: IconAirplaneModeOffStrokeSharp,
  SolidSharp: IconAirplaneModeOffSolidSharp,
};