import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.41712 11.9183L7.73859 9.89656C8.29597 9.55783 8.57467 9.38846 8.76705 9.15616C9.59962 8.15082 8.86644 6.66595 8.99059 5.49686C9.1191 4.28671 10.2731 2.63158 11.4364 2.11845C11.7944 1.96052 12.2051 1.96052 12.5631 2.11845C13.7264 2.63158 14.8804 4.28671 15.0089 5.49686C15.1331 6.66595 14.3999 8.15082 15.2325 9.15616C15.4248 9.38846 15.7035 9.55783 16.2609 9.89656L19.5827 11.9182C20.5993 12.5369 20.9998 13.1973 20.9998 14.4395C20.9998 15.1156 20.7006 15.2968 20.0973 15.1588L14.2725 13.8261L14.0109 16.1149C13.9161 16.9448 13.8687 17.3598 14.0058 17.7398C14.327 18.63 15.4173 19.3591 16.0832 20.0066C16.4513 20.3644 16.8529 21.3934 16.4333 21.8613C16.1742 22.1503 15.7533 21.9157 15.4637 21.803L12.675 20.7184C12.3416 20.5887 12.1748 20.5239 11.9998 20.5239C11.8247 20.5239 11.6579 20.5887 11.3245 20.7184L8.53584 21.803C8.24619 21.9157 7.82534 22.1503 7.56625 21.8613C7.1466 21.3934 7.54825 20.3644 7.91628 20.0066C8.5822 19.3591 9.67255 18.63 9.9937 17.7398C10.1308 17.3598 10.0834 16.9448 9.98857 16.1149L9.72703 13.8261L3.90259 15.1587C3.29902 15.2968 2.99982 15.1155 3.00001 14.4391C3.00034 13.1971 3.4007 12.537 4.41712 11.9183Z',
  d2: 'M11.9997 20.5239C11.8247 20.5239 11.6579 20.5887 11.3245 20.7184L8.53583 21.803C8.24618 21.9157 7.82533 22.1503 7.56625 21.8613C7.14659 21.3934 7.54825 20.3644 7.91627 20.0066C8.58219 19.3591 9.67255 18.63 9.99369 17.7398C10.1308 17.3598 10.0834 16.9448 9.98856 16.1149L9.72702 13.8261L3.90259 15.1587C3.29902 15.2968 2.99982 15.1155 3 14.4391C3.00034 13.1971 3.4007 12.537 4.41712 11.9183L7.73859 9.89656C8.29596 9.55783 8.57466 9.38846 8.76704 9.15616C9.59962 8.15082 8.86643 6.66595 8.99058 5.49686C9.11909 4.28671 10.2731 2.63158 11.4364 2.11845C11.6155 2.03945 11.8077 1.99997 12 2',
  d3: 'M3.78524 11.9122L7.38354 9.7388C7.98738 9.37467 8.2893 9.19259 8.49772 8.94287C9.39969 7.86213 8.60539 6.26589 8.73989 5.00912C8.87911 3.70822 10.1293 1.92895 11.3895 1.37733C11.7774 1.20756 12.2223 1.20756 12.6102 1.37733C13.8704 1.92895 15.1206 3.70822 15.2598 5.00912C15.3943 6.26589 14.6 7.86213 15.502 8.94287C15.7104 9.19259 16.0124 9.37467 16.6162 9.7388L20.2148 11.9121C21.3162 12.5772 21.75 13.2871 21.75 14.6224C21.75 15.3492 21.4259 15.5441 20.7723 15.3957L14.462 13.9631L14.1787 16.4235C14.0759 17.3157 14.0246 17.7617 14.1731 18.1703C14.521 19.1273 15.7023 19.911 16.4237 20.6071C16.8224 20.9918 17.2575 22.0979 16.8029 22.6009C16.5222 22.9115 16.0663 22.6594 15.7525 22.5383L12.7314 21.3723C12.3702 21.2329 12.1895 21.1632 11.9999 21.1632C11.8102 21.1632 11.6296 21.2329 11.2683 21.3723L8.24724 22.5383C7.93345 22.6594 7.47752 22.9115 7.19684 22.6009C6.74221 22.0979 7.17734 20.9918 7.57604 20.6071C8.29746 19.911 9.4787 19.1273 9.82661 18.1703C9.97516 17.7617 9.92379 17.3157 9.82105 16.4235L9.53771 13.9631L3.22782 15.3956C2.57395 15.544 2.24981 15.3491 2.25001 14.622C2.25037 13.2869 2.6841 12.5773 3.78524 11.9122Z',
  d4: 'M3.78523 11.9122L7.38354 9.7388C7.98737 9.37467 8.2893 9.19259 8.49771 8.94287C9.39968 7.86213 8.60539 6.26589 8.73989 5.00912C8.87911 3.70822 10.1293 1.92895 11.3895 1.37733C11.5835 1.29244 11.7917 1.25 11.9999 1.25V21.1632C11.8102 21.1632 11.6296 21.2329 11.2683 21.3723L8.24723 22.5383C7.93344 22.6594 7.47752 22.9115 7.19684 22.6009C6.7422 22.0979 7.17734 20.9918 7.57603 20.6071C8.29746 19.911 9.47869 19.1273 9.8266 18.1703C9.97515 17.7617 9.92378 17.3157 9.82105 16.4235L9.82105 16.4235L9.53771 13.9631L3.22781 15.3956C2.57394 15.544 2.2498 15.3491 2.25 14.622C2.25037 13.2869 2.6841 12.5773 3.78523 11.9122Z',
  d5: 'M8.95854 9.05814C8.90866 5.08888 9.00515 3.55169 12.0113 1.99756C14.8656 3.59946 15.1273 5.12021 15.0242 9.05814L20.9602 12.5287L21.0009 15.4808C21.0045 15.5481 20.796 15.4976 20.7307 15.4808L14.2461 13.8452L13.9967 17.5252L16.9489 19.9742C16.9833 20.0025 16.969 20.0328 16.9502 20.0727L16.9489 20.0755L16.0252 21.9689C16.0031 22.0156 15.9568 21.9868 15.9083 21.9689L11.9947 20.5055L8.05023 21.9925C8.00363 22.0098 8.00227 22.0069 7.98267 21.9652L7.98014 21.9598L7.04032 20.068C7.02081 20.0267 7.00504 20.0013 7.04032 19.9723L10.0061 17.5252L9.73673 13.8452L3.04542 15.5246C2.98013 15.5415 3.00333 15.4616 3.00693 15.3943V12.5277L8.95854 9.05814Z',
  d6: 'M21 12.5L15.0089 9.00002L15 6.5C15.0089 3 12 2 12 2C12 2 8.99108 3 8.99108 6.5V9.00002L3 12.5L3.00024 15.5L9.72752 13.8262L10 17.5L7 20L8 22L12 20.5L16 22L17 20L14 17.5L14.2725 13.8262L20.9998 15.5L21 12.5Z',
} as const;

export const IconAirplaneModeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-stroke-rounded IconAirplaneModeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-duotone-rounded IconAirplaneModeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-twotone-rounded IconAirplaneModeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAirplaneModeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-solid-rounded IconAirplaneModeSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-bulk-rounded IconAirplaneModeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-stroke-sharp IconAirplaneModeStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneModeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-mode-solid-sharp IconAirplaneModeSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAirplaneMode: TheIconSelfPack = {
  name: 'AirplaneMode',
  StrokeRounded: IconAirplaneModeStrokeRounded,
  DuotoneRounded: IconAirplaneModeDuotoneRounded,
  TwotoneRounded: IconAirplaneModeTwotoneRounded,
  SolidRounded: IconAirplaneModeSolidRounded,
  BulkRounded: IconAirplaneModeBulkRounded,
  StrokeSharp: IconAirplaneModeStrokeSharp,
  SolidSharp: IconAirplaneModeSolidSharp,
};