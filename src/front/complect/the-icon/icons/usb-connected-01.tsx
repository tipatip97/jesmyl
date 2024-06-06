import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.9838 16.5H9.01625C7.99228 16.5 7.03617 15.9979 6.46881 15.1622L5.86803 14.2773C4.89885 12.8498 4.32041 11.2019 4.18827 9.49197L4.00446 7.11331C3.93719 6.24273 4.63957 5.5 5.53014 5.5H14.4699C15.3604 5.5 16.0628 6.24273 15.9955 7.11331L15.927 8',
  d2: 'M13.5 6V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V6',
  d3: 'M10 17V22',
  d4: 'M9 8.5H11',
  d5: 'M12 13.5C12 13.5 13 13.5 14 15.5C14 15.5 17.1765 10.5 20 9.5',
  d6: 'M4.00446 7.11331C3.93719 6.24273 4.63957 5.5 5.53014 5.5H14.4699C15.3604 5.5 16.0628 6.24273 15.9955 7.11331L15.8117 9.49197C15.6796 11.2019 15.1011 12.8498 14.132 14.2773L13.5312 15.1622C12.9638 15.9979 12.0077 16.5 10.9838 16.5H9.01625C7.99228 16.5 7.03617 15.9979 6.46881 15.1622L5.86803 14.2773C4.89885 12.8498 4.32041 11.2019 4.18827 9.49197L4.00446 7.11331Z',
  d7: 'M20.6926 9.41643C20.877 9.93702 20.6044 10.5085 20.0838 10.6929C19.5502 10.8819 18.9337 11.2888 18.2807 11.8615C17.638 12.4251 17.0128 13.1021 16.4591 13.7659C15.9072 14.4274 15.4385 15.0611 15.1074 15.5301C14.9422 15.7641 14.8122 15.9558 14.7243 16.0879L14.5941 16.2865C14.4008 16.5906 14.0587 16.7674 13.6989 16.749C13.3389 16.7305 13.0168 16.5198 12.8556 16.1975C12.4149 15.3161 12.0196 14.9652 11.8203 14.8323C11.736 14.7761 11.679 14.7536 11.6564 14.7459C11.148 14.6987 10.75 14.271 10.75 13.7503C10.75 13.198 11.1977 12.7503 11.75 12.7503C11.8324 12.7511 12.0371 12.7661 12.1966 12.82C12.4045 12.8794 12.6553 12.9853 12.9297 13.1682C13.204 13.3511 13.4916 13.6038 13.7804 13.9497C14.0956 13.5189 14.484 13.0113 14.9233 12.4847C15.5166 11.7735 16.215 11.0129 16.962 10.3578C17.6986 9.71179 18.538 9.11865 19.4162 8.80765C19.9368 8.62327 20.5082 8.89583 20.6926 9.41643Z',
  d8: 'M10.0489 1.25H9.95169H9.95165C9.29098 1.24998 8.7211 1.24996 8.25597 1.29727C7.76273 1.34745 7.27746 1.45898 6.83354 1.7556C6.50597 1.97447 6.22471 2.25573 6.00584 2.5833C5.70922 3.02722 5.59769 3.51249 5.54751 4.00573C5.54208 4.0591 5.53728 4.11385 5.53302 4.16996C5.51325 4.43067 5.50337 4.56103 5.44237 4.63458C5.38138 4.70813 5.23182 4.74819 4.9327 4.82832C3.91239 5.10165 3.17073 6.05738 3.25679 7.1711L3.4406 9.54975C3.58286 11.3907 4.20558 13.1637 5.24763 14.6986L5.84841 15.5835C6.44224 16.4582 7.37329 17.0364 8.40506 17.2015C8.70605 17.2496 8.85654 17.2737 8.92827 17.3578C9 17.4419 9 17.5771 9 17.8474V21.75C9 22.3023 9.44772 22.75 10 22.75C10.5523 22.75 11 22.3023 11 21.75V17.5597L11.0001 17.53C11.0044 17.3715 11.109 17.2577 11.2665 17.2401L11.27 17.2397L11.3106 17.2362L11.3109 17.2362L11.3157 17.2358C11.3025 17.2369 11.2588 17.2405 11.2627 17.2401C11.4477 17.2174 11.579 16.9598 11.4887 16.7969C11.4883 16.7961 11.4891 16.7974 11.4906 16.7999C11.3885 16.6331 11.2739 16.4606 11.1793 16.3232C11.1257 16.2453 11.0989 16.2064 11.0629 16.1782C11.027 16.15 10.9722 16.1292 10.8626 16.0875L10.8625 16.0875L10.8625 16.0875C9.91967 15.7293 9.25024 14.8184 9.25024 13.75C9.25024 12.3693 10.3695 11.25 11.7502 11.25L11.7648 11.2501C11.9137 11.2515 12.2769 11.2709 12.6385 11.3861C12.7866 11.4297 12.9409 11.4854 13.0997 11.5553L13.0997 11.5553C13.3386 11.6603 13.458 11.7128 13.5545 11.691C13.651 11.6692 13.7284 11.5793 13.8833 11.3996L13.8833 11.3996C14.4889 10.697 15.2824 9.83562 15.9732 9.22981C16.1145 9.10585 16.2624 8.9809 16.4162 8.85697C16.5211 8.77248 16.5736 8.73023 16.6025 8.67535C16.6314 8.62047 16.6364 8.55551 16.6465 8.42561V8.42559L16.7434 7.1711C16.8295 6.05745 16.0879 5.10178 15.0677 4.82838C14.7686 4.74823 14.6191 4.70815 14.5581 4.63461C14.4971 4.56106 14.4872 4.43072 14.4675 4.17004C14.4632 4.1139 14.4584 4.05912 14.453 4.00573C14.4028 3.51249 14.2913 3.02722 13.9947 2.5833C13.7758 2.25573 13.4945 1.97447 13.167 1.7556C12.723 1.45898 12.2378 1.34745 11.7445 1.29727C11.2794 1.24996 10.7096 1.24998 10.0489 1.25H10.0489ZM11.9509 4.75C12.1745 4.75 12.2862 4.75 12.366 4.69066C12.3961 4.66823 12.4251 4.63609 12.4444 4.60384C12.4954 4.51851 12.4848 4.41505 12.4638 4.20813C12.4297 3.87303 12.3727 3.75496 12.3322 3.69443C12.2593 3.58524 12.1655 3.49149 12.0563 3.41853C11.9958 3.37809 11.8778 3.32109 11.5427 3.287C11.1908 3.25121 10.7238 3.25 10.0008 3.25C9.27774 3.25 8.81072 3.25121 8.45891 3.287C8.12381 3.32109 8.00574 3.37809 7.94521 3.41853C7.83602 3.49149 7.74227 3.58524 7.66931 3.69443C7.62887 3.75496 7.57187 3.87303 7.53778 4.20813C7.51673 4.41505 7.5062 4.51852 7.55717 4.60384C7.57643 4.63609 7.60547 4.66823 7.6356 4.69065C7.71533 4.75 7.8271 4.75 8.05064 4.75H11.9509ZM9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9Z',
  d9: 'M9.95169 1.25H10.0489H10.0489C10.7096 1.24998 11.2794 1.24996 11.7445 1.29727C12.2378 1.34745 12.723 1.45898 13.167 1.7556C13.4945 1.97447 13.7758 2.25573 13.9947 2.5833C14.2913 3.02722 14.4028 3.51249 14.453 4.00573C14.4584 4.05912 14.4632 4.1139 14.4675 4.17004C14.4872 4.43072 14.4971 4.56106 14.5581 4.63461C14.6191 4.70815 14.7686 4.74823 15.0677 4.82838C16.0879 5.10178 16.8295 6.05745 16.7434 7.1711L16.6465 8.42559V8.42561C16.6364 8.55551 16.6314 8.62047 16.6025 8.67535C16.5736 8.73023 16.5211 8.77248 16.4162 8.85697C16.2624 8.9809 16.1145 9.10585 15.9732 9.22981C15.2824 9.83562 14.4889 10.697 13.8833 11.3996L13.8833 11.3996C13.7284 11.5793 13.651 11.6692 13.5545 11.691C13.458 11.7128 13.3386 11.6603 13.0997 11.5553L13.0997 11.5553C12.9409 11.4854 12.7866 11.4297 12.6385 11.3861C12.2769 11.2709 11.9137 11.2515 11.7648 11.2501L11.7502 11.25C10.3695 11.25 9.25024 12.3693 9.25024 13.75C9.25024 14.8184 9.91967 15.7293 10.8625 16.0875L10.8625 16.0875C10.9722 16.1292 11.027 16.15 11.0629 16.1782C11.0989 16.2064 11.1257 16.2453 11.1793 16.3232C11.2737 16.4603 11.388 16.6322 11.4899 16.7987C11.4888 16.797 11.4883 16.7962 11.4887 16.7969C11.579 16.9598 11.4477 17.2174 11.2627 17.2401C11.2588 17.2405 11.3025 17.2369 11.3157 17.2358C11.3211 17.2353 11.3214 17.2353 11.3109 17.2362L11.3106 17.2362C11.2839 17.2385 11.2706 17.2396 11.2665 17.2401C11.109 17.2577 11.0044 17.3715 11.0001 17.53L11 17.5597V21.75C11 22.3023 10.5523 22.75 10 22.75C9.44772 22.75 9 22.3023 9 21.75V17.8474C9 17.5771 9 17.4419 8.92827 17.3578C8.85654 17.2737 8.70605 17.2496 8.40506 17.2015C7.37329 17.0364 6.44224 16.4582 5.84841 15.5835L5.24763 14.6986C4.20558 13.1637 3.58286 11.3907 3.4406 9.54975L3.25679 7.1711C3.17073 6.05738 3.91239 5.10165 4.9327 4.82832C5.23182 4.74819 5.38138 4.70813 5.44237 4.63458C5.50337 4.56103 5.51325 4.43067 5.53302 4.16996C5.53728 4.11385 5.54208 4.0591 5.54751 4.00573C5.59769 3.51249 5.70922 3.02722 6.00584 2.5833C6.22471 2.25573 6.50597 1.97447 6.83354 1.7556C7.27746 1.45898 7.76273 1.34745 8.25597 1.29727C8.7211 1.24996 9.29098 1.24998 9.95165 1.25H9.95169ZM11.5147 16.8396C11.5111 16.8335 11.5021 16.8188 11.4957 16.8082C11.5013 16.8173 11.5068 16.8264 11.5122 16.8354C11.5172 16.8437 11.5172 16.8437 11.5147 16.8396ZM12.0289 4.74988C12.0045 4.75 11.9786 4.75 11.9509 4.75C11.9507 4.75 11.9504 4.75 11.9502 4.75H8.04991C8.02619 4.75 8.00374 4.75 7.98245 4.74993C7.80302 4.74933 7.70614 4.7437 7.63487 4.69066C7.60474 4.66823 7.5757 4.63609 7.55644 4.60384C7.50547 4.51852 7.516 4.41505 7.53705 4.20813C7.57113 3.87303 7.62813 3.75496 7.66858 3.69443C7.74154 3.58524 7.83529 3.49149 7.94448 3.41853C8.005 3.37809 8.12307 3.32109 8.45818 3.287C8.72204 3.26016 9.0507 3.25277 9.50357 3.25075C9.65453 3.25008 9.81929 3.25 10 3.25C10.0003 3.25 10.0005 3.25 10.0008 3.25C10.0457 3.25 10.0897 3.25001 10.1327 3.25002C10.2407 3.25007 10.3427 3.25019 10.4393 3.25052C10.9223 3.25218 11.2677 3.25902 11.5427 3.287C11.8778 3.32109 11.9958 3.37809 12.0563 3.41853C12.1655 3.49149 12.2593 3.58524 12.3322 3.69443C12.3727 3.75496 12.4297 3.87303 12.4638 4.20813C12.4848 4.41505 12.4954 4.51851 12.4444 4.60384C12.4251 4.63609 12.3961 4.66823 12.366 4.69066C12.2961 4.74265 12.2016 4.74909 12.0289 4.74988ZM9.00004 7C8.44776 7 8.00004 7.44771 8.00004 8C8.00004 8.55228 8.44776 9 9.00004 9H11C11.5523 9 12 8.55228 12 8C12 7.44771 11.5523 7 11 7H9.00004Z',
  d10: 'M8 8C8 7.44772 8.44772 7 9 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9C8.44772 9 8 8.55228 8 8Z',
  d11: 'M13.5 5.5V2H6.5V5.5',
  d12: 'M10 16.5V22',
  d13: 'M8.5 8.5H11.5',
  d14: 'M11.5 13L14 15.5L20 9.5',
  d15: 'M15.9995 9.03893V5.59957C15.9995 5.54458 15.9546 5.5 15.8992 5.5H4.10127C4.04588 5.5 4.00098 5.54458 4.00098 5.59957V11.4907L7.01974 16.5004H11.4955',
  d16: 'M9 22.75V17.25H11V22.75H9Z',
  d17: 'M14.25 1.25H5.75V5.25H4C3.58579 5.25 3.25 5.58579 3.25 6V12.2077L6.57536 17.75H12.1093L9.06641 14.7071L12.2484 11.5251L14.0413 13.318L16.7494 10.6099V6C16.7494 5.58579 16.4137 5.25 15.9994 5.25H14.25V1.25ZM12.3611 5.25V3.02778H7.63889V5.25H12.3611ZM8.5 10H11.5V8H8.5V10Z',
  d18: 'M20.7502 11.2072L14.043 17.9143L10.8359 14.7072L12.2502 13.293L14.043 15.0859L19.3359 9.79297L20.7502 11.2072Z',
};

export const IconUsbConnected01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-stroke-rounded IconUsbConnected01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconUsbConnected01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-duotone-rounded IconUsbConnected01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconUsbConnected01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-twotone-rounded IconUsbConnected01TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-solid-rounded IconUsbConnected01SolidRounded"
    >
      <path 
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

export const IconUsbConnected01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-bulk-rounded IconUsbConnected01BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-stroke-sharp IconUsbConnected01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUsbConnected01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="usb-connected-01-solid-sharp IconUsbConnected01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfUsbConnected01: TheIconSelfPack = {
  name: 'UsbConnected01',
  StrokeRounded: IconUsbConnected01StrokeRounded,
  DuotoneRounded: IconUsbConnected01DuotoneRounded,
  TwotoneRounded: IconUsbConnected01TwotoneRounded,
  SolidRounded: IconUsbConnected01SolidRounded,
  BulkRounded: IconUsbConnected01BulkRounded,
  StrokeSharp: IconUsbConnected01StrokeSharp,
  SolidSharp: IconUsbConnected01SolidSharp,
};