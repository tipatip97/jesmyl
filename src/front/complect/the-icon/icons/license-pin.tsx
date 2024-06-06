import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.9971 9C19.988 5.8857 19.8895 4.23467 18.8264 3.17157C17.6549 2 15.7692 2 11.998 2H9.99805C6.22681 2 4.3412 2 3.16962 3.17157C1.99805 4.34315 1.99805 6.22876 1.99805 10V14C1.99805 17.7712 1.99805 19.6569 3.16962 20.8284C4.3412 22 6.22681 22 9.99805 22H11.998C12.7335 22 13.3973 22 13.998 21.9913',
  d2: 'M6.99805 7H14.998',
  d3: 'M6.99805 12H13.998',
  d4: 'M6.99805 17H11.998',
  d5: 'M19.0049 19V22M16.0101 17.5C16.1527 18.3145 17.1894 18.6556 18.4061 18.8923C18.5171 18.9138 19.4355 18.867 19.5468 18.8477C20.4341 18.6937 22.0586 18.3917 21.9997 17.5C21.9303 16.4501 21.1525 16.0966 20.4447 15.4615C20.1547 15.2013 20.1147 14.7766 20.2888 14.4277L20.6914 13.6211C20.8778 13.2477 20.8234 12.785 20.5035 12.5173C20.0319 12.1224 19.6296 11.9995 19.0049 12C18.293 12.0691 17.8772 12.2142 17.4889 12.5268C17.1712 12.7825 17.1278 13.2392 17.31 13.6043L17.6962 14.378C17.8828 14.7519 17.819 15.2051 17.506 15.4816C16.6943 16.1985 15.8733 16.7183 16.0101 17.5Z',
  d6: 'M18.7605 3.17157C17.52 2 15.5235 2 11.5304 2H10.4716C6.4785 2 4.48196 2 3.24147 3.17157C2.00098 4.34315 2.00098 6.22876 2.00098 10V14C2.00098 17.7712 2.00098 19.6569 3.24147 20.8284C4.48196 22 6.47849 22 10.4716 22H11.5304C15.5235 22 17.52 22 18.7605 20.8284C19.2928 20.3258 19.5966 19.6916 19.7701 18.8335C18.632 18.996 17.4031 18.7937 16.491 18.2268C16.2665 18.0873 16.1543 18.0175 16.066 17.8117C15.7936 17.1763 16.4371 16.3343 16.8855 15.9638C17.4558 15.4925 17.7409 15.2569 17.8035 15.0608C17.9106 14.7251 17.7441 14.268 17.6008 13.8746C17.5531 13.7439 17.5081 13.6202 17.4765 13.5104C17.359 13.102 17.3002 12.8977 17.4119 12.6639C17.5236 12.4301 17.6665 12.364 17.9521 12.2318C18.6041 11.9302 19.3447 11.9229 20.001 12.2101V10C20.001 6.22876 20.001 4.34315 18.7605 3.17157Z',
  d7: 'M20.0001 9C19.991 5.8857 19.8925 4.23467 18.8294 3.17157C17.6579 2 15.7722 2 12.001 2H10.001C6.22974 2 4.34413 2 3.17255 3.17157C2.00098 4.34315 2.00098 6.22876 2.00098 10V14C2.00098 17.7712 2.00098 19.6569 3.17255 20.8284C4.34413 22 6.22974 22 10.001 22H12.001C12.7365 22 13.4003 22 14.001 21.9913',
  d8: 'M19.0079 19V22M16.0131 17.5C16.1557 18.3145 17.1924 18.6556 18.4091 18.8923C18.5201 18.9138 19.4385 18.867 19.5498 18.8477C20.4371 18.6937 22.0616 18.3917 22.0027 17.5C21.9333 16.4501 21.1555 16.0966 20.4477 15.4615C20.1577 15.2013 20.1177 14.7766 20.2918 14.4277L20.6944 13.6211C20.8808 13.2477 20.8264 12.785 20.5065 12.5173C20.0349 12.1224 19.6326 11.9995 19.0079 12C18.296 12.0691 17.8802 12.2142 17.4919 12.5268C17.1742 12.7825 17.1308 13.2392 17.313 13.6043L17.6992 14.378C17.8858 14.7519 17.822 15.2051 17.509 15.4816C16.6973 16.1985 15.8763 16.7183 16.0131 17.5Z',
  d9: 'M7.00098 7H15.001',
  d10: 'M7.00098 12H14.001',
  d11: 'M7.00098 17H12.001',
  d12: 'M22.7294 18.081C22.6331 18.3054 22.5018 18.4964 22.3189 18.6615C22.1825 18.7845 22.0058 18.8938 21.9132 18.9511C21.3003 19.332 20.5958 19.5717 19.8755 19.685L19.8755 21.875C19.8755 22.4273 19.4278 22.875 18.8755 22.875C18.3232 22.875 17.8755 22.4273 17.8755 21.875L17.8755 19.6851C17.1552 19.5717 16.4507 19.332 15.8378 18.9511C15.7453 18.8939 15.5685 18.7845 15.4322 18.6614C15.2491 18.4963 15.1179 18.3052 15.0217 18.0808C14.7042 17.3401 14.9666 16.6179 15.2017 16.1856C15.4535 15.7228 15.814 15.3234 16.1232 15.0679C16.3984 14.8406 16.5751 14.6939 16.6951 14.5832L16.3674 13.5849C16.2714 13.2647 16.1018 12.6994 16.3844 12.1079C16.5063 11.8525 16.6732 11.6439 16.9023 11.4768C17.0709 11.3539 17.2894 11.2533 17.407 11.1993C18.3414 10.7669 19.4096 10.7669 20.3441 11.1993C20.4616 11.2533 20.6802 11.3539 20.8488 11.4768C21.0778 11.6439 21.2447 11.8525 21.3667 12.1079C21.6493 12.6994 21.4797 13.2647 21.3836 13.5849L21.0526 14.5936C21.1695 14.6995 21.341 14.8396 21.6081 15.0568C21.9212 15.3114 22.2872 15.7107 22.5431 16.175C22.7826 16.6093 23.0495 17.3349 22.7294 18.081Z',
  d13: 'M11.4583 1.125C13.4092 1.12499 14.9456 1.12498 16.1462 1.27742C17.3751 1.43347 18.3654 1.76075 19.1495 2.50131C19.9397 3.24759 20.2944 4.19968 20.4625 5.38021C20.5947 6.30905 20.6194 7.44693 20.624 8.82672C20.6252 9.20565 20.6258 9.39512 20.5174 9.48546C20.4089 9.57581 20.2034 9.5373 19.7924 9.46027C18.7823 9.27097 17.7296 9.39686 16.7763 9.83795C16.6605 9.89092 16.3114 10.0507 16.0176 10.2649C15.5728 10.5893 15.2512 10.9985 15.0301 11.4613C14.6027 12.356 14.6466 13.1231 14.8122 13.6978C14.8732 13.9095 14.9037 14.0154 14.8856 14.092C14.8675 14.1685 14.7972 14.2448 14.6565 14.3973C14.3766 14.7008 14.1035 15.0639 13.8832 15.469C13.5728 16.0398 13.0512 17.2932 13.6423 18.6718C13.8166 19.0784 14.0694 19.4528 14.4263 19.775C14.9311 20.2306 15.5186 20.5211 15.9738 20.7044C16.1726 20.7844 16.272 20.8245 16.3234 20.9006C16.3747 20.9766 16.3747 21.0781 16.3747 21.2811V21.9125C16.3747 22.1657 16.3747 22.2924 16.2961 22.3783C16.2175 22.4643 16.0949 22.4753 15.8495 22.4973C14.6862 22.6016 13.1414 22.625 11.4583 22.625H10.2917C8.34086 22.625 6.80441 22.625 5.60385 22.4726C4.37487 22.3165 3.38465 21.9892 2.60052 21.2487C1.81034 20.5024 1.4556 19.5503 1.28755 18.3698C1.12497 17.2277 1.12498 15.7696 1.125 13.9343V13.9343V9.81567V9.81566C1.12498 7.9804 1.12497 6.52229 1.28755 5.38021C1.4556 4.19968 1.81034 3.24759 2.60052 2.50131C3.38465 1.76075 4.37487 1.43347 5.60385 1.27742C6.8044 1.12498 8.34084 1.12499 10.2917 1.125H10.2917H11.4583ZM6.875 5.875C6.32272 5.875 5.875 6.32272 5.875 6.875C5.875 7.42728 6.32272 7.875 6.875 7.875H14.875C15.4273 7.875 15.875 7.42728 15.875 6.875C15.875 6.32272 15.4273 5.875 14.875 5.875H6.875ZM6.875 10.875C6.32272 10.875 5.875 11.3227 5.875 11.875C5.875 12.4273 6.32272 12.875 6.875 12.875H11.875C12.4273 12.875 12.875 12.4273 12.875 11.875C12.875 11.3227 12.4273 10.875 11.875 10.875H6.875ZM6.875 15.875C6.32272 15.875 5.875 16.3227 5.875 16.875C5.875 17.4273 6.32272 17.875 6.875 17.875H9.875C10.4273 17.875 10.875 17.4273 10.875 16.875C10.875 16.3227 10.4273 15.875 9.875 15.875H6.875Z',
  d14: 'M16.1462 1.27742C14.9456 1.12498 13.4092 1.12499 11.4583 1.125H10.2917C8.34085 1.12499 6.80441 1.12498 5.60385 1.27742C4.37487 1.43347 3.38465 1.76075 2.60052 2.50131C1.81034 3.24759 1.4556 4.19968 1.28755 5.38021C1.12497 6.52229 1.12498 7.9804 1.125 9.81567V13.9343C1.12498 15.7696 1.12497 17.2277 1.28755 18.3698C1.4556 19.5503 1.81034 20.5024 2.60052 21.2487C3.38465 21.9892 4.37487 22.3165 5.60385 22.4726C6.80441 22.625 8.34086 22.625 10.2917 22.625H11.4583C13.1414 22.625 14.6862 22.6016 15.8495 22.4973C16.0949 22.4753 16.2175 22.4643 16.2961 22.3783C16.3747 22.2924 16.3747 22.1657 16.3747 21.9125V21.2811C16.3747 21.0781 16.3747 20.9766 16.3234 20.9006C16.272 20.8245 16.1726 20.7844 15.9738 20.7044C15.5186 20.5211 14.9311 20.2306 14.4263 19.775C14.0694 19.4528 13.8166 19.0784 13.6423 18.6718C13.0512 17.2932 13.5728 16.0398 13.8832 15.469C14.1035 15.0639 14.3766 14.7008 14.6565 14.3973C14.7972 14.2448 14.8675 14.1685 14.8856 14.092C14.9037 14.0154 14.8732 13.9095 14.8122 13.6978C14.6466 13.1231 14.6027 12.356 15.0301 11.4613C15.2512 10.9985 15.5728 10.5893 16.0176 10.2649C16.3114 10.0507 16.6605 9.89092 16.7763 9.83795C17.7296 9.39686 18.7823 9.27097 19.7924 9.46027C20.2034 9.5373 20.4089 9.57581 20.5174 9.48546C20.6258 9.39512 20.6252 9.20565 20.624 8.82672C20.6194 7.44693 20.5947 6.30905 20.4625 5.38021C20.2944 4.19968 19.9397 3.24759 19.1495 2.50131C18.3654 1.76075 17.3751 1.43347 16.1462 1.27742Z',
  d15: 'M5.875 6.875C5.875 6.32272 6.32272 5.875 6.875 5.875H14.875C15.4273 5.875 15.875 6.32272 15.875 6.875C15.875 7.42728 15.4273 7.875 14.875 7.875H6.875C6.32272 7.875 5.875 7.42728 5.875 6.875ZM5.875 11.875C5.875 11.3227 6.32272 10.875 6.875 10.875H11.875C12.4273 10.875 12.875 11.3227 12.875 11.875C12.875 12.4273 12.4273 12.875 11.875 12.875H6.875C6.32272 12.875 5.875 12.4273 5.875 11.875ZM5.875 16.875C5.875 16.3227 6.32272 15.875 6.875 15.875H9.875C10.4273 15.875 10.875 16.3227 10.875 16.875C10.875 17.4273 10.4273 17.875 9.875 17.875H6.875C6.32272 17.875 5.875 17.4273 5.875 16.875Z',
  d16: 'M13.0575 22H2L2.00017 2H20.0941V9.08315M7.02613 7.05939H15.0679M7.02613 12.1188H12.0523M7.02613 17.1782H12.0523',
  d17: 'M18.08 18.1972H21.9018C21.9831 18.1972 22.0308 18.1049 21.9841 18.0379L19.6129 14.6339C19.5932 14.6056 19.5892 14.5691 19.6023 14.5372L20.5564 12.2121C20.5837 12.1455 20.5351 12.0723 20.4635 12.0723H15.761C15.6902 12.0723 15.6416 12.144 15.6674 12.2104L16.5724 14.5378C16.5847 14.5694 16.5804 14.6052 16.561 14.633L14.1767 18.0377C14.1298 18.1047 14.1774 18.1972 14.2589 18.1972H18.08ZM18.08 18.1972V21.9999',
  d18: 'M15.4643 12.75H21.0357L20.25 15.25L22.75 18.75H19.25V22.75H17.25V18.75H13.75L16.25 15.25L15.4643 12.75Z',
  d19: 'M1.25017 1.99999C1.25018 1.58578 1.58596 1.25 2.00017 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V11.25H13.4212L14.5956 14.9865L10.8359 20.25H15.7507V22.75H2C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22L1.25017 1.99999ZM7 8H15V6H7V8ZM7 13H11V11H7V13Z',
};

export const IconLicensePinStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-stroke-rounded IconLicensePinStrokeRounded"
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

export const IconLicensePinDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-duotone-rounded IconLicensePinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicensePinTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-twotone-rounded IconLicensePinTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLicensePinSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-solid-rounded IconLicensePinSolidRounded"
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

export const IconLicensePinBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-bulk-rounded IconLicensePinBulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLicensePinStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-stroke-sharp IconLicensePinStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconLicensePinSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-pin-solid-sharp IconLicensePinSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLicensePin: TheIconSelfPack = {
  name: 'LicensePin',
  StrokeRounded: IconLicensePinStrokeRounded,
  DuotoneRounded: IconLicensePinDuotoneRounded,
  TwotoneRounded: IconLicensePinTwotoneRounded,
  SolidRounded: IconLicensePinSolidRounded,
  BulkRounded: IconLicensePinBulkRounded,
  StrokeSharp: IconLicensePinStrokeSharp,
  SolidSharp: IconLicensePinSolidSharp,
};