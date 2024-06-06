import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.17157 6.82843L7 5L8.82843 6.82843C9.40649 7.40649 9.69552 7.69552 9.84776 8.06306C10 8.4306 10 8.83935 10 9.65685V22H8C6.11438 22 5.17157 22 4.58579 21.4142C4 20.8284 4 19.8856 4 18V9.65685C4 8.83935 4 8.4306 4.15224 8.06306C4.30448 7.69552 4.59351 7.40649 5.17157 6.82843Z',
  d2: 'M7 5.00379V4.60429C7 3.38019 7 2.76814 7.38076 2.38786C7.76152 2.00758 8.37435 2.00758 9.6 2.00758H15.1535C15.8599 2.00758 16.7765 1.89489 17.2487 2.53866C17.7502 3.22243 17.3216 4.1621 17.5388 4.91785C17.6049 5.14763 17.7681 5.32509 17.9184 5.50519L20 8',
  d3: 'M10 8H20V18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H10',
  d4: 'M10 13C10.4762 13.5 11.7434 13.4761 12.4869 13.2789C13.0054 13.1415 13.564 13.3027 13.9154 13.7639L14.6025 14.6658C14.9978 15.1846 15.5969 15.4309 16.1871 15.3173L17.0567 15.1499C17.5352 15.0578 18.011 15.2904 18.3367 15.7055C19.3522 17 20 17 20 17',
  d5: 'M10 22H16C17.8856 22 18.8284 22 19.4142 21.4142C20 20.8284 20 19.8856 20 18V16.5L17 15H15L13 13H10V22Z',
  d6: 'M8.82843 6.82843L7 5C7 3.7776 7.00039 2.76774 7.38076 2.38786C7.76152 2.00758 8.37435 2.00758 9.6 2.00758H15.1535C15.8599 2.00758 16.7765 1.89489 17.2487 2.53866C17.7502 3.22243 17.3216 4.1621 17.5388 4.91785C17.6049 5.14763 17.7681 5.32509 17.9184 5.50519L20 8H10H9.81994C9.66112 7.66112 9.37305 7.37305 8.82843 6.82843L8.82843 6.82843Z',
  d7: 'M7 4.60429V5.00379L10 8H20L17.9184 5.50519C17.7681 5.32509 17.6049 5.14763 17.5388 4.91785C17.3216 4.16211 17.7502 3.22243 17.2487 2.53866C16.7765 1.89489 15.8599 2.00758 15.1535 2.00758H9.6C8.37435 2.00758 7.76152 2.00758 7.38076 2.38786C7 2.76814 7 3.38019 7 4.60429Z',
  d8: 'M10.5431 12.4828C10.3316 12.2607 10.0062 12.1898 9.72146 12.3037C9.43671 12.4176 9.25 12.6933 9.25 13V22C9.25 22.4142 9.58579 22.75 10 22.75L16.052 22.75C16.9505 22.7501 17.6997 22.7501 18.2945 22.6701C18.9223 22.5857 19.4891 22.4 19.9445 21.9446C20.4 21.4891 20.5857 20.9223 20.6701 20.2945C20.7501 19.6997 20.75 18.9505 20.75 18.0521L20.75 17C20.75 16.6091 20.4509 16.288 20.069 16.2532C20.0499 16.2476 19.9979 16.2299 19.9157 16.1839C19.7314 16.0807 19.3877 15.8302 18.9268 15.2426C18.4765 14.6687 17.7393 14.2548 16.915 14.4135L16.0453 14.5809C15.7635 14.6351 15.4402 14.5277 15.1991 14.2113L14.5119 13.3094C13.9652 12.5918 13.088 12.3437 12.2947 12.554C12.0021 12.6316 11.5815 12.679 11.194 12.6526C10.763 12.6234 10.5765 12.5179 10.5431 12.4828Z',
  d9: 'M15.1535 3.00755H9.60001C8.95895 3.00755 8.57863 3.00967 8.30664 3.04619C8.09554 3.07454 8.06703 3.10229 8.03867 3.31303C7.98247 3.73048 7.98882 4.15726 7.99551 4.58117L9.53581 6.12147L9.63405 6.21951L9.63405 6.21951C9.90111 6.48575 10.1515 6.73535 10.3608 7.00002C10.3734 7 10.3865 7 10.4 7H17.8633L17.1505 6.14582C17.1415 6.13493 17.1299 6.12157 17.1163 6.10589C16.9928 5.96305 16.7022 5.62703 16.5778 5.19415C16.4356 4.69954 16.4714 4.14001 16.4925 3.81026C16.4962 3.75241 16.4995 3.70164 16.5012 3.65952L16.5023 3.63557C16.5168 3.29127 16.526 3.07422 16.1514 3.02217C15.9738 2.9975 15.7322 3.0009 15.466 3.00465C15.3647 3.00608 15.2598 3.00755 15.1535 3.00755ZM20.7673 7.35864L18.6862 4.8645C18.4491 4.58037 18.4695 4.24941 18.4904 3.90952C18.4938 3.85418 18.4972 3.7986 18.4995 3.74296C18.5176 3.30902 18.5258 2.58895 18.0551 1.94719C17.5953 1.32032 16.9405 1.11259 16.4266 1.04119C16.0571 0.989869 15.6354 0.998638 15.3494 1.00459C15.2733 1.00617 15.2069 1.00755 15.1535 1.00755H9.60001L9.54083 1.00755C8.97907 1.00748 8.46175 1.00741 8.04047 1.06398C7.57581 1.12638 7.08131 1.27359 6.67411 1.68028C6.26674 2.08714 6.1191 2.58152 6.05654 3.0462C5.99987 3.4672 5.99994 3.9841 6 4.54501L6.00001 4.58621L4.46475 6.12147L4.36648 6.21954C3.88576 6.69879 3.45911 7.12412 3.22864 7.68053C2.99817 8.23693 2.9991 8.83938 3.00014 9.51818C3.00307 11.4282 3.00214 13.3381 3.0012 15.2481C3.00074 16.1874 3.00028 17.1267 3.00028 18.066C3.00023 18.9525 3.00019 19.7163 3.08242 20.3279C3.17055 20.9835 3.3693 21.6118 3.87896 22.1215C4.38862 22.6311 5.01697 22.8299 5.67249 22.918C6.28415 23.0002 7.04798 23.0002 7.93447 23.0002L11.0003 23.0002C11.0003 23.0001 11.0003 23 11.0003 23L16.0658 23C16.9523 23.0001 17.7161 23.0001 18.3278 22.9179C18.9833 22.8297 19.6117 22.631 20.1213 22.1213C20.631 21.6117 20.8297 20.9833 20.9179 20.3278C21.0001 19.7161 21.0001 18.9523 21 18.0658L21 8.00772V8C21 7.93793 20.9944 7.87718 20.9835 7.81823M10.9999 21H16C16.9711 21 17.5988 20.9979 18.0613 20.9357C18.495 20.8774 18.631 20.7832 18.7071 20.7071C18.7832 20.631 18.8774 20.495 18.9357 20.0613C18.9979 19.5988 19 18.9711 19 18V9.4C19 9.21144 19 9.11716 18.9414 9.05858C18.8828 9 18.7886 9 18.6 9H10.9971C11.001 9.16785 11.0007 9.3404 11.0004 9.51818C10.9958 12.5245 10.9973 15.5309 10.9988 18.5372C10.9992 19.3581 10.9996 20.1791 10.9999 21ZM7.42454 6.83863C7.22454 6.63863 7.12454 6.53863 7.00028 6.53863C6.87602 6.53863 6.77602 6.63863 6.57602 6.83863L5.87896 7.53568C5.2432 8.17144 5.13482 8.30486 5.0764 8.44589C5.01798 8.58693 5.00028 8.75791 5.00028 9.65701V18.0002C5.00028 18.9712 5.0024 19.5989 5.06459 20.0614C5.1229 20.4952 5.21705 20.6311 5.29317 20.7073C5.3693 20.7834 5.50524 20.8775 5.93898 20.9358C6.40149 20.998 7.0292 21.0002 8.00028 21.0002H9.00028V9.65701C9.00028 8.75791 8.98258 8.58693 8.92416 8.4459C8.86574 8.30486 8.75736 8.17144 8.1216 7.53568L7.42454 6.83863Z',
  d10: 'M7 5.00402V2H17.5V5.00402L20 8V22.0002H10M10 8.00024V22.0002M10 8.00024L7 5.00024L4 8.00024V22.0002H10M10 8.00024L19.4659 8.00001',
  d11: 'M10 13L20 17',
  d12: 'M7.00045 1.25C6.58624 1.25 6.25045 1.58579 6.25045 2V3.19077L10.3097 7.25005L20.3513 7.24985L18.2505 4.73221V2C18.2505 1.58579 17.9147 1.25 17.5005 1.25H7.00045Z',
  d13: 'M20.7505 8.74985L10.7491 8.75004V12.4459L20.7505 15.5232V8.74985Z',
  d14: 'M20.7505 17.0926L10.7491 14.0153V22.7502H20.0005C20.4147 22.7502 20.7505 22.4144 20.7505 22.0002V17.0926Z',
  d15: 'M9.24908 22.7502V8.31072L5.9392 5.00083L3.47012 7.46991C3.32948 7.61055 3.25046 7.80131 3.25045 8.00021L3.25 22.0002C3.24999 22.1991 3.32901 22.3899 3.46966 22.5306C3.61031 22.6712 3.80108 22.7502 4 22.7502H9.24908Z',
};

export const IconMilkCartonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-stroke-rounded IconMilkCartonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-duotone-rounded IconMilkCartonDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-twotone-rounded IconMilkCartonTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-solid-rounded IconMilkCartonSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-bulk-rounded IconMilkCartonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-stroke-sharp IconMilkCartonStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMilkCartonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="milk-carton-solid-sharp IconMilkCartonSolidSharp"
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
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMilkCarton: TheIconSelfPack = {
  name: 'MilkCarton',
  StrokeRounded: IconMilkCartonStrokeRounded,
  DuotoneRounded: IconMilkCartonDuotoneRounded,
  TwotoneRounded: IconMilkCartonTwotoneRounded,
  SolidRounded: IconMilkCartonSolidRounded,
  BulkRounded: IconMilkCartonBulkRounded,
  StrokeSharp: IconMilkCartonStrokeSharp,
  SolidSharp: IconMilkCartonSolidSharp,
};