import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 16V19M17 16V19',
  d2: 'M20.9996 9.26828C20.043 8.716 18.8198 9.04375 18.2675 10.0003L17.2581 12.3892C17.0078 12.9815 16.9799 13 16.3369 13H7.66304C7.02008 13 6.99218 12.9815 6.74191 12.3893L5.73238 10.0003C5.1801 9.04375 3.95692 8.716 3.00033 9.26828C2.04375 9.82057 1.716 11.0437 2.26828 12.0003C2.69932 12.7469 3.89493 12.6838 4.08847 13.2646C4.5284 14.5848 4.74836 15.2449 5.27216 15.6224C5.79596 16 6.49175 16 7.88331 16H16.1166C17.5082 16 18.204 16 18.7278 15.6224C19.2516 15.2448 19.4716 14.5847 19.9115 13.2645C20.105 12.6838 21.3007 12.7468 21.7316 12.0003C22.2839 11.0437 21.9562 9.82057 20.9996 9.26828Z',
  d3: 'M4.5 9L4.54003 8.89326C5.24623 7.01005 5.59933 6.06845 6.37022 5.53422C7.1411 5 8.14674 5 10.158 5H13.842C15.8533 5 16.8589 5 17.6298 5.53422C18.4007 6.06845 18.7538 7.01005 19.46 8.89326L19.5 9',
  d4: 'M5.73335 10.0003L6.74287 12.3893C6.99315 12.9815 7.02104 13 7.664 13H16.3379C16.9809 13 17.0088 12.9815 17.259 12.3892L18.2685 10.0003C18.5518 9.50965 19.0116 9.18442 19.5215 9.05856L19.501 9L19.4609 8.89326C18.7547 7.01005 18.4016 6.06845 17.6307 5.53422C16.8599 5 15.8542 5 13.843 5H10.159C8.1477 5 7.14206 5 6.37118 5.53422C5.60029 6.06845 5.24719 7.01005 4.54099 8.89326L4.50096 9L4.48047 9.05858C4.99026 9.18445 5.45006 9.50967 5.73335 10.0003Z',
  d5: 'M7 15C7.55228 15 8 15.4477 8 16V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V16C6 15.4477 6.44772 15 7 15ZM17 15C17.5523 15 18 15.4477 18 16V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V16C16 15.4477 16.4477 15 17 15Z',
  d6: 'M2.62546 8.61877C3.94076 7.85938 5.62264 8.31003 6.38203 9.62534C6.39751 9.65214 6.41131 9.67988 6.42336 9.7084L7.43288 12.0973C7.45849 12.1579 7.47952 12.2071 7.4981 12.249C7.54385 12.2498 7.59737 12.25 7.66316 12.25H16.3371C16.4029 12.25 16.4564 12.2498 16.5021 12.249C16.5207 12.2071 16.5417 12.1579 16.5674 12.0973L17.5768 9.70841C17.5889 9.67989 17.6027 9.65215 17.6181 9.62534C18.3775 8.31003 20.0594 7.85938 21.3747 8.61877C22.69 9.37816 23.1407 11.06 22.3813 12.3753C22.0278 12.9876 21.3908 13.2403 21.0433 13.3782L21.0101 13.3914C20.7981 13.4758 20.6843 13.5214 20.6022 13.5705L20.5997 13.572C20.3955 14.185 20.2217 14.7038 20.0313 15.1132C19.8255 15.5557 19.5704 15.9397 19.1665 16.2308C18.7626 16.522 18.3177 16.6426 17.8328 16.698C17.3767 16.75 16.8187 16.75 16.1584 16.75H7.84182C7.18152 16.75 6.62351 16.75 6.16737 16.698C5.68251 16.6426 5.23762 16.522 4.83373 16.2308C4.42983 15.9397 4.17475 15.5558 3.96895 15.1133C3.77852 14.7039 3.60476 14.185 3.40051 13.5721L3.39794 13.5705C3.31591 13.5214 3.20211 13.4758 2.99006 13.3914L2.95693 13.3782C2.60939 13.2404 1.97241 12.9876 1.61889 12.3753C0.859498 11.06 1.31015 9.37816 2.62546 8.61877Z',
  d7: 'M10.1024 4H13.8962C14.8551 3.99997 15.6563 3.99995 16.3111 4.07293C17.0033 4.15008 17.6278 4.31671 18.1987 4.7123C18.7695 5.10789 19.1448 5.63414 19.4601 6.2552C19.7584 6.84272 20.0397 7.5929 20.3763 8.49075L20.3956 8.54214C20.5895 9.05926 20.3275 9.63567 19.8104 9.82959C19.2933 10.0235 18.7169 9.7615 18.5229 9.24438C18.162 8.28182 17.9186 7.63702 17.6768 7.16055C17.4462 6.70645 17.2595 6.49479 17.0595 6.35615C16.8594 6.21752 16.5957 6.11703 16.0896 6.06063C15.5585 6.00144 14.8693 6 13.8413 6H10.1573C9.12929 6 8.4401 6.00144 7.90903 6.06063C7.4029 6.11703 7.13917 6.21751 6.93912 6.35615C6.73907 6.49479 6.55238 6.70645 6.32185 7.16055C6.07996 7.63702 5.83662 8.28182 5.47566 9.24438C5.28174 9.7615 4.70533 10.0235 4.18821 9.82959C3.67109 9.63567 3.40908 9.05926 3.603 8.54214L3.62228 8.49073C3.95894 7.59289 4.24024 6.84271 4.5385 6.2552C4.85379 5.63414 5.22909 5.10789 5.79993 4.7123C6.37076 4.31671 6.99528 4.15008 7.68751 4.07293C8.34234 3.99995 9.14352 3.99997 10.1024 4Z',
  d8: 'M6 16.6758C6.05525 16.6841 6.11104 16.6915 6.16737 16.6979C6.62351 16.75 7.18152 16.7499 7.84182 16.7499H8V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V16.6758Z',
  d9: 'M18 16.6758V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V16.7499H16.1584C16.8187 16.7499 17.3767 16.75 17.8328 16.6979C17.8891 16.6915 17.9448 16.6842 18 16.6758Z',
  d10: 'M18.3543 8.79529C18.9093 8.38171 19.6041 8.19189 20.2918 8.26517C19.9919 7.46664 19.7332 6.79281 19.4602 6.2552C19.1449 5.63414 18.7696 5.10789 18.1988 4.7123C17.628 4.31671 17.0034 4.15008 16.3112 4.07293C15.6564 3.99995 14.8552 3.99997 13.8963 4H10.1025C9.14363 3.99997 8.34245 3.99995 7.68762 4.07293C6.99539 4.15008 6.37087 4.31671 5.80004 4.7123C5.2292 5.10789 4.8539 5.63414 4.53861 6.2552C4.26568 6.7928 4.00696 7.46661 3.70703 8.26513C4.39474 8.19195 5.08949 8.38186 5.64449 8.79552C5.91656 8.07473 6.11976 7.55883 6.32196 7.16055C6.55249 6.70645 6.73918 6.49479 6.93923 6.35615C7.13928 6.21751 7.40301 6.11703 7.90914 6.06063C8.44021 6.00144 9.1294 6 10.1574 6H13.8414C14.8694 6 15.5586 6.00144 16.0897 6.06063C16.5958 6.11703 16.8596 6.21752 17.0596 6.35615C17.2597 6.49479 17.4463 6.70645 17.6769 7.16055C17.879 7.55879 18.0822 8.07462 18.3543 8.79529Z',
  d11: 'M6.99316 16V19M16.9932 16V19',
  d12: 'M4.49316 8.99999L5.5065 6.29776C5.79923 5.51715 6.54547 5 7.37916 5H16.6072C17.4409 5 18.1871 5.51715 18.4799 6.29776L19.4932 8.99999',
  d13: 'M5.99107 10.0087L5.99115 10.0257M12.0657 15.9983H18.431C18.4686 15.9983 18.503 15.9772 18.52 15.9438L20.0068 13.0339C20.8232 13.0339 21.9 12.4906 21.995 10.9809C22.0641 9.88403 21.0209 8.99414 19.9175 8.99414C19.2696 8.99414 18.3747 9.54157 18.0823 10.3752L16.605 12.9958L12.0657 12.9862L7.39524 12.9958L5.91793 10.3752C5.62555 9.54157 4.73065 8.99414 4.08279 8.99414C2.97933 8.99414 1.93615 9.88403 2.0052 10.9809C2.10024 12.4906 3.17702 13.0339 3.99346 13.0339L5.4802 15.9438C5.49729 15.9772 5.53169 15.9983 5.56925 15.9983H12.0939M18.0092 10.0087L18.0091 10.0257',
  d14: 'M5.99902 19.25V16.5H7.99902V19.25H5.99902ZM15.999 19.25V16.5H17.999V19.25H15.999Z',
  d15: 'M20.75 13.5C21.8546 13.5 22.75 12.6046 22.75 11.5C22.75 10.3954 21.8546 9.5 20.75 9.5C20.0097 9.5 19.3634 9.9022 19.0176 10.5L17.3538 13.5H6.64618L4.98244 10.5C4.63663 9.9022 3.99028 9.5 3.25 9.5C2.14543 9.5 1.25 10.3954 1.25 11.5C1.25 12.6046 2.14543 13.5 3.25 13.5L4.75 16.5H19.25L20.75 13.5Z',
  d16: 'M4.03564 8.60384C4.80901 8.81308 5.45783 9.32371 5.84863 9.99927L5.85316 10.0071L7.23567 12.5H16.7655L18.148 10.0071L18.1525 9.99927C18.5433 9.32371 19.1922 8.81308 19.9655 8.60384L19.1895 6.53441C18.787 5.46107 17.7609 4.75 16.6146 4.75H7.38659C6.24027 4.75 5.21418 5.46107 4.81168 6.53441L4.03564 8.60384Z',
};

export const IconSofa03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-stroke-rounded IconSofa03StrokeRounded"
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

export const IconSofa03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-duotone-rounded IconSofa03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-twotone-rounded IconSofa03TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-solid-rounded IconSofa03SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-bulk-rounded IconSofa03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconSofa03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-stroke-sharp IconSofa03StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSofa03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sofa-03-solid-sharp IconSofa03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSofa03: TheIconSelfPack = {
  name: 'Sofa03',
  StrokeRounded: IconSofa03StrokeRounded,
  DuotoneRounded: IconSofa03DuotoneRounded,
  TwotoneRounded: IconSofa03TwotoneRounded,
  SolidRounded: IconSofa03SolidRounded,
  BulkRounded: IconSofa03BulkRounded,
  StrokeSharp: IconSofa03StrokeSharp,
  SolidSharp: IconSofa03SolidSharp,
};