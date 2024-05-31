import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5483 18C20.7476 16.9645 21.5819 15.6272 22 14.1756C19.5473 14.4746 17.0369 13.3432 15.7234 11.1113C14.4099 8.87928 14.6664 6.1807 16.1567 4.2463C14.1701 3.75234 11.9929 3.98823 10.0779 5.07295C7.30713 6.64236 5.83056 9.56635 6.0155 12.5',
  d2: 'M2 15.3739C3.13649 16.1865 4.59053 16.1865 5.72702 15.3739C6.41225 14.8754 7.31476 14.8754 7.99999 15.3739C9.13648 16.1865 10.6072 16.2049 11.727 15.3924M17 19.6352C15.8635 18.8226 14.4095 18.8226 13.273 19.6352C12.5877 20.1338 11.6685 20.1153 10.9833 19.6167C9.8468 18.8042 8.39277 18.8042 7.27299 19.6167C6.57104 20.1153 5.68524 20.1153 5 19.6167',
  d3: 'M16.1892 4.2463C14.6941 6.1807 14.4368 8.87928 15.7546 11.1113C17.0631 13.3278 19.5558 14.4589 22 14.1816C21.0321 17.5396 17.8856 20 14.1534 20C9.65042 20 6 16.4183 6 12C6 7.58172 9.65042 4 14.1534 4C14.8152 4 15.5731 4.10029 16.1892 4.2463Z',
  d4: 'M7.66171 15.9325C7.32721 15.6892 6.89996 15.6892 6.56545 15.9325L6.55871 15.9375L6.55869 15.9374C5.07435 16.9986 3.15283 16.9986 1.66849 15.9374C1.21921 15.6162 1.11539 14.9916 1.4366 14.5424C1.7578 14.0931 2.3824 13.9893 2.83167 14.3105C3.61939 14.8736 4.60455 14.8743 5.39274 14.3124C6.42692 13.5625 7.80027 13.5625 8.83445 14.3125C9.63481 14.883 10.6331 14.8821 11.3898 14.333C11.8368 14.0087 12.4621 14.1081 12.7865 14.5551C13.1108 15.0021 13.0114 15.6274 12.5644 15.9518C11.0824 17.0271 9.14063 16.9899 7.66848 15.9374L7.66169 15.9326L7.66171 15.9325ZM6.94075 18.5537C8.41273 17.4888 10.3349 17.4951 11.815 18.5532L11.8217 18.5581L11.8217 18.5581C12.1717 18.8127 12.6154 18.8089 12.9347 18.5766L12.9414 18.5716L12.9415 18.5717C14.4258 17.5105 16.3473 17.5105 17.8317 18.5717C18.2809 18.8929 18.3848 19.5175 18.0636 19.9667C17.7424 20.416 17.1178 20.5198 16.6685 20.1986C15.8808 19.6355 14.8956 19.6348 14.1074 20.1966C13.0581 20.9575 11.6679 20.917 10.649 20.1782C9.85825 19.6145 8.8764 19.6202 8.11036 20.1761L8.10218 20.182L8.10215 20.182C7.05768 20.9238 5.70184 20.9321 4.66172 20.1753C4.21514 19.8504 4.11654 19.2249 4.44148 18.7783C4.76642 18.3318 5.39186 18.2332 5.83843 18.5581C6.1678 18.7977 6.58206 18.8067 6.94075 18.5537Z',
  d5: 'M14.1218 3.25C9.23276 3.25 5.25 7.15687 5.25 12C5.25 12.1884 5.25 12.2825 5.28331 12.3472C5.32705 12.4321 5.39868 12.4859 5.49242 12.5042C5.5638 12.5182 5.67112 12.487 5.88574 12.4247C7.16829 12.0523 8.57616 12.2752 9.70867 13.0934C10.0027 13.3013 10.294 13.2749 10.509 13.119C11.6265 12.3081 13.1898 12.5567 14.0006 13.6742C14.3099 14.1004 14.4651 14.5914 14.4767 15.0809C14.4926 15.752 14.5006 16.0876 14.5855 16.1725C14.6705 16.2575 14.9529 16.2641 15.5176 16.2773C16.631 16.3033 17.739 16.6614 18.7042 17.3515C18.9488 17.5264 19.1525 17.7373 19.3132 17.9718C19.588 18.373 19.7254 18.5736 19.8639 18.5876C20.0025 18.6016 20.1362 18.4724 20.4036 18.214C21.4853 17.1683 22.2978 15.8552 22.7208 14.3827C22.79 14.1422 22.7345 13.883 22.573 13.6917C22.4115 13.5005 22.1653 13.4024 21.9165 13.4303C19.7533 13.6725 17.5101 12.6685 16.3698 10.7309C15.2186 8.77472 15.4397 6.40996 16.7469 4.70907C16.9007 4.50896 16.9436 4.24491 16.8609 4.00645C16.7783 3.76798 16.5812 3.58707 16.3366 3.52504C15.6278 3.34535 14.8855 3.25 14.1218 3.25Z',
  d6: 'M7.49323 15.6825C7.15872 15.4392 6.73147 15.4392 6.39697 15.6825L6.39022 15.6875C4.90588 16.7487 2.98434 16.7486 1.5 15.6874L2.66318 14.0605C3.4509 14.6236 4.43607 14.6243 5.22425 14.0624C6.25843 13.3125 7.63178 13.3125 8.66596 14.0625C9.46633 14.633 10.4646 14.6321 11.2213 14.083L12.3959 15.7018C10.9139 16.7771 8.97214 16.7399 7.49999 15.6874L7.49323 15.6825Z',
  d7: 'M6.77227 18.3037C8.24425 17.2388 10.1664 17.2451 11.6465 18.3032L11.6533 18.3081C12.0032 18.5627 12.4469 18.5589 12.7662 18.3266L12.773 18.3216C14.2573 17.2604 16.1788 17.2605 17.6632 18.3217L16.5 19.9486C15.7123 19.3855 14.7271 19.3848 13.939 19.9466C12.8896 20.7075 11.4994 20.667 10.4805 19.9282C9.68977 19.3645 8.70792 19.3702 7.94187 19.9261L7.93369 19.932C6.88923 20.6739 5.53335 20.6821 4.49323 19.9253L5.66995 18.3081C5.99932 18.5477 6.41357 18.5567 6.77227 18.3037Z',
  d8: 'M16.2254 10.6113C14.9119 8.37928 15.1683 5.6807 16.6586 3.7463C14.672 3.25234 12.4949 3.48823 10.5798 4.57295C7.80908 6.14236 6.33252 9.06635 6.51746 12C6.51789 12.0069 6.51833 12.0138 6.51878 12.0207C7.56596 11.9186 8.64045 12.1928 9.54088 12.8434C9.83492 13.0512 10.1263 13.0248 10.3412 12.8689L11.5552 11.9879L14.4942 16.0727C15.8853 15.8914 17.3235 16.2343 18.5364 17.1014L19.5789 17.8467C19.7536 17.7358 19.9114 17.6199 20.0503 17.5C21.2496 16.4645 22.0839 15.1272 22.502 13.6756C20.0492 13.9746 17.5389 12.8432 16.2254 10.6113Z',
} as const;

export const IconMoonSlowWindStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-stroke-rounded IconMoonSlowWindStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-duotone-rounded IconMoonSlowWindDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-twotone-rounded IconMoonSlowWindTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-solid-rounded IconMoonSlowWindSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-bulk-rounded IconMoonSlowWindBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-stroke-sharp IconMoonSlowWindStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconMoonSlowWindSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-slow-wind-solid-sharp IconMoonSlowWindSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfMoonSlowWind: TheIconSelfPack = {
  name: 'MoonSlowWind',
  StrokeRounded: IconMoonSlowWindStrokeRounded,
  DuotoneRounded: IconMoonSlowWindDuotoneRounded,
  TwotoneRounded: IconMoonSlowWindTwotoneRounded,
  SolidRounded: IconMoonSlowWindSolidRounded,
  BulkRounded: IconMoonSlowWindBulkRounded,
  StrokeSharp: IconMoonSlowWindStrokeSharp,
  SolidSharp: IconMoonSlowWindSolidSharp,
};