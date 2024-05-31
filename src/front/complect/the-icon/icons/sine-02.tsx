import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 9.011C21 12.0001 20.0868 21 16.1774 21C14.1321 21 12.8338 17.3802 11.9999 12.0001C11.1661 6.61994 9.86786 3 7.82263 3C3.91318 3 3 12.0001 3 14.989',
  d2: 'M2 12H5',
  d3: 'M8 12H10',
  d4: 'M14 12H16',
  d5: 'M19 12H22',
  d6: 'M4.60577 3.87213C5.34619 2.83446 6.40217 2 7.82263 2C8.66253 2 9.36864 2.38177 9.92892 2.94348C10.4745 3.49051 10.9152 4.23685 11.2829 5.08446C12.0191 6.78121 12.5674 9.13258 12.9881 11.8469C13.4013 14.5127 13.919 16.6613 14.5517 18.1196C14.8684 18.8494 15.188 19.3443 15.4871 19.6441C15.7715 19.9293 15.9946 20 16.1774 20C16.7116 20 17.2359 19.7094 17.7662 18.9662C18.3025 18.2146 18.7449 17.126 19.0901 15.8628C19.7777 13.3467 20 10.4421 20 9.011C20 8.45871 20.4477 8.011 21 8.011C21.5523 8.011 22 8.45871 22 9.011C22 10.569 21.7657 13.6589 21.0194 16.39C20.6476 17.7504 20.1287 19.0986 19.3942 20.1279C18.6538 21.1656 17.5978 22 16.1774 22C15.3375 22 14.6314 21.6183 14.0711 21.0566C13.5254 20.5096 13.0848 19.7633 12.717 18.9157C11.9808 17.219 11.4324 14.8676 11.0117 12.1533C10.5986 9.48745 10.0809 7.33878 9.44817 5.88051C9.13149 5.15062 8.81196 4.65572 8.51289 4.35588C8.22847 4.07073 8.00534 4 7.82263 4C7.28836 4 6.76415 4.29055 6.23381 5.0338C5.69752 5.78539 5.25511 6.87405 4.9099 8.13727C4.22231 10.6534 4 13.558 4 14.989C4 15.5413 3.55228 15.989 3 15.989C2.44772 15.989 2 15.5413 2 14.989C2 13.4311 2.23428 10.3412 2.98064 7.61005C3.35241 6.24963 3.87131 4.90146 4.60577 3.87213Z',
  d7: 'M1 12C1 11.4477 1.44772 11 2 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H2C1.44772 13 1 12.5523 1 12ZM7 12.0001C7 11.4478 7.44772 11.0001 8 11.0001H9.5C10.0523 11.0001 10.5 11.4478 10.5 12.0001C10.5 12.5524 10.0523 13.0001 9.5 13.0001H8C7.44772 13.0001 7 12.5524 7 12.0001ZM13.5 12.0001C13.5 11.4478 13.9477 11.0001 14.5 11.0001H16C16.5523 11.0001 17 11.4478 17 12.0001C17 12.5524 16.5523 13.0001 16 13.0001H14.5C13.9477 13.0001 13.5 12.5524 13.5 12.0001ZM18 12.0001C18 11.4478 18.4477 11.0001 19 11.0001H22C22.5523 11.0001 23 11.4478 23 12.0001C23 12.5524 22.5523 13.0001 22 13.0001H19C18.4477 13.0001 18 12.5524 18 12.0001Z',
  d8: 'M20 9.011C20 12.0001 19.1883 21 15.7132 21C13.8952 21 12.7411 17.3802 11.9999 12.0001C11.2587 6.61994 10.1048 3 8.28678 3C4.81171 3 4 12.0001 4 14.989',
  d9: 'M2 12H6',
  d10: 'M18 12H22',
  d11: 'M5.30646 3.91736C5.95163 2.90016 6.9196 2 8.28678 2C9.11401 2 9.77901 2.42352 10.2779 2.98627C10.766 3.5367 11.1559 4.2818 11.4802 5.12266C12.1311 6.8104 12.6171 9.15274 12.9906 11.8636C13.3583 14.5329 13.8199 16.6905 14.3858 18.1577C14.6699 18.8944 14.9557 19.3905 15.2185 19.6869C15.4704 19.971 15.6314 20 15.7132 20C16.0836 20 16.5202 19.7751 17.0046 19.0114C17.4837 18.2562 17.8795 17.1604 18.188 15.8904C18.8017 13.3639 19 10.4495 19 9.011H21C21 10.5616 20.7924 13.6417 20.1315 16.3625C19.8027 17.7161 19.344 19.0571 18.6935 20.0827C18.0484 21.0999 17.0804 22 15.7132 22C14.886 22 14.221 21.5765 13.7221 21.0138C13.234 20.4634 12.8441 19.7183 12.5198 18.8775C11.8688 17.1898 11.3828 14.8475 11.0093 12.1366C10.6416 9.4673 10.18 7.30959 9.61413 5.84232C9.33003 5.10567 9.04426 4.60953 8.78143 4.31309C8.52953 4.02897 8.36854 4 8.28678 4C7.91643 4 7.47979 4.22485 6.99539 4.98857C6.51634 5.74387 6.12048 6.83969 5.81198 8.10971C5.19827 10.6362 5 13.5506 5 14.989H3C3 13.4385 3.20758 10.3584 3.8685 7.63761C4.19731 6.28399 4.65595 4.94298 5.30646 3.91736Z',
  d12: 'M6 13L1 13L1 11L6 11L6 13Z',
  d13: 'M10 13H8V11H10V13Z',
  d14: 'M16 13H14V11H16V13Z',
  d15: 'M23 13L18 13V11L23 11V13Z',
} as const;

export const IconSine02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-stroke-rounded IconSine02StrokeRounded"
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

export const IconSine02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-duotone-rounded IconSine02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSine02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-twotone-rounded IconSine02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSine02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-solid-rounded IconSine02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconSine02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-bulk-rounded IconSine02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSine02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-stroke-sharp IconSine02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSine02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-02-solid-sharp IconSine02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfSine02: TheIconSelfPack = {
  name: 'Sine02',
  StrokeRounded: IconSine02StrokeRounded,
  DuotoneRounded: IconSine02DuotoneRounded,
  TwotoneRounded: IconSine02TwotoneRounded,
  SolidRounded: IconSine02SolidRounded,
  BulkRounded: IconSine02BulkRounded,
  StrokeSharp: IconSine02StrokeSharp,
  SolidSharp: IconSine02SolidSharp,
};