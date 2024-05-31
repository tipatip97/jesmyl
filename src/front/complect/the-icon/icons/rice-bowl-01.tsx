import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.91145 12H18.0886C19.6914 12 20.2786 12.3707 19.8787 13.9821C19.1733 16.8246 17.1759 17.5306 15.3304 19.3859C14.8819 19.8369 15.5798 20.5032 15.5802 20.9992C15.5809 21.933 14.6928 22 13.9854 22H8.0146C7.30717 22 6.41908 21.933 6.41982 20.9992C6.4202 20.5137 7.0972 19.8159 6.66957 19.3859C4.82407 17.5306 2.82674 16.8246 2.12128 13.9821C1.72136 12.3707 2.30857 12 3.91145 12Z',
  d2: 'M18.5 12C18.5 10.2089 16.6001 8.98823 15 9.69218M3.5 12C3.5 10.7067 4.46855 9.64127 5.7151 9.49889C4.90104 7.65834 6.62631 5.59405 8.53891 6.01716M16.292 9.48272C17.0733 7.68217 15.4185 5.58415 13.4611 6.01716C12.9848 3.32761 9.01516 3.32761 8.53891 6.01716M8.53891 6.01716C9.13252 6.14848 9.64708 6.49221 10 6.96519',
  d3: 'M17 9L22 3',
  d4: 'M16 6L18 2',
  d5: 'M2.61384 11.4755C2.96532 11.3987 3.36466 11.3751 3.78615 11.3751H17.9633C18.3847 11.3751 18.7841 11.3987 19.1356 11.4755C19.4871 11.5524 19.8503 11.6951 20.137 11.9788C20.7466 12.5822 20.6866 13.461 20.4813 14.2879C20.0852 15.8839 19.314 16.8917 18.4186 17.7276C18.0467 18.0747 17.6464 18.3982 17.2587 18.7115L17.2586 18.7116C16.8365 19.0541 16.2318 19.5533 15.829 19.9485L16.0441 20.4361C16.1096 20.5919 16.2047 20.8424 16.2049 21.1237C16.2052 21.4801 16.1189 21.8142 15.9243 22.0984C15.7316 22.3799 15.4716 22.5554 15.2194 22.6639C14.7499 22.8658 14.2048 22.8751 13.8601 22.8751H7.8893C7.54459 22.8751 6.99953 22.8658 6.53005 22.6639C6.2778 22.5554 6.01782 22.3799 5.82506 22.0984C5.63047 21.8142 5.54424 21.4801 5.54452 21.1237C5.54474 20.849 5.63621 20.6007 5.69864 20.4465L5.91255 19.9408C5.51225 19.5488 4.91013 19.0519 4.49078 18.7116C4.10305 18.3982 3.70276 18.0747 3.33085 17.7276C2.4354 16.8917 1.66419 15.8839 1.26807 14.2879C1.06285 13.461 1.00279 12.5822 1.61244 11.9788C1.8991 11.6951 2.26226 11.5524 2.61384 11.4755Z',
  d6: 'M7.69631 5.09169C5.76972 5.21163 4.22799 7.00663 4.39345 8.93741C3.19854 9.49903 2.375 10.7176 2.375 12.1249C2.375 12.6772 2.82272 13.1249 3.375 13.1249C3.92728 13.1249 4.375 12.6772 4.375 12.1249C4.375 11.3404 4.96177 10.702 5.70359 10.6173C6.01962 10.5812 6.29962 10.3969 6.45776 10.1209C6.6159 9.84493 6.63331 9.51017 6.50464 9.21927C6.02326 8.1309 7.08305 6.8718 8.19791 7.11843C8.54994 7.19631 8.85949 7.40125 9.07353 7.6881C9.40381 8.13074 10.0304 8.22183 10.473 7.89155C10.9157 7.56126 11.0068 6.93468 10.6765 6.49204C10.4178 6.14541 10.0962 5.84763 9.72789 5.61631C10.4676 4.77855 12.1204 5.01191 12.3514 6.3164C12.3989 6.58481 12.554 6.82218 12.7806 6.97359C13.0073 7.12499 13.2859 7.17731 13.5521 7.11843C14.4874 6.91151 15.3605 7.74106 15.3652 8.64667C15.0656 8.68898 14.7658 8.77262 14.4723 8.90172C13.9668 9.12412 13.7373 9.71422 13.9597 10.2197C14.1821 10.7253 14.7722 10.9548 15.2777 10.7324C16.2155 10.3198 17.375 11.0543 17.375 12.1249C17.375 12.6772 17.8227 13.1249 18.375 13.1249C18.9273 13.1249 19.375 12.6772 19.375 12.1249C19.375 10.6895 18.5126 9.51687 17.3512 8.96136C17.5224 7.04366 16.023 5.19604 14.0519 5.08767C12.8662 2.46927 8.87911 2.47061 7.69631 5.09169Z',
  d7: 'M22.5152 2.35668C22.9395 2.71025 22.9968 3.34081 22.6432 3.76509L17.6432 9.76509C17.2897 10.1894 16.6591 10.2467 16.2348 9.89312C15.8106 9.53956 15.7532 8.909 16.1068 8.48472L21.1068 2.48472C21.4604 2.06044 22.0909 2.00312 22.5152 2.35668Z',
  d8: 'M18.3224 1.23067C18.8164 1.47766 19.0166 2.07833 18.7696 2.57231L16.7696 6.57231C16.5227 7.06629 15.922 7.26651 15.428 7.01952C14.934 6.77253 14.7338 6.17186 14.9808 5.67788L16.9808 1.67788C17.2278 1.1839 17.8285 0.983681 18.3224 1.23067Z',
  d9: 'M4.3936 8.93741C4.22815 7.00663 5.76987 5.21163 7.69646 5.09169C8.87926 2.47061 12.8664 2.46927 14.052 5.08767C16.0232 5.19604 17.5225 7.04366 17.3513 8.96136C18.3457 9.43696 19.1208 10.3649 19.3233 11.5228C19.2607 11.5046 19.198 11.4889 19.1357 11.4753C18.7842 11.3985 18.3849 11.3749 17.9634 11.3749H17.1659C16.7895 10.7508 15.9728 10.4267 15.2778 10.7324C14.7723 10.9548 14.1822 10.7253 13.9598 10.2197C13.7374 9.71422 13.9669 9.12412 14.4725 8.90172C14.7659 8.77262 15.0657 8.68898 15.3653 8.64667C15.3606 7.74106 14.4876 6.91151 13.5522 7.11843C13.2861 7.17731 13.0074 7.12499 12.7808 6.97359C12.5541 6.82218 12.3991 6.58481 12.3516 6.3164C12.1206 5.01191 10.4677 4.77855 9.72804 5.61631C10.0964 5.84763 10.418 6.14541 10.6766 6.49204C11.0069 6.93468 10.9158 7.56126 10.4732 7.89155C10.0305 8.22183 9.40396 8.13074 9.07368 7.6881C8.85964 7.40125 8.55009 7.19631 8.19806 7.11843C7.0832 6.8718 6.02341 8.1309 6.50479 9.21927C6.63346 9.51017 6.61605 9.84493 6.45791 10.1209C6.29977 10.3969 6.01977 10.5812 5.70374 10.6173C5.22056 10.6725 4.80316 10.9625 4.57084 11.3749H3.7863C3.36481 11.3749 2.96547 11.3985 2.61399 11.4753C2.55162 11.4889 2.48888 11.5046 2.42627 11.5228C2.62319 10.3762 3.37291 9.41715 4.3936 8.93741Z',
  d10: 'M18.5 12.0015C18.5 10.2104 16.6001 8.9897 15 9.69365M3.5 12.0015C3.5 10.7082 4.46855 9.64274 5.7151 9.50036C4.90104 7.65981 6.62631 5.59552 8.53891 6.01863M8.53891 6.01863C9.01516 3.32908 12.9848 3.32908 13.4611 6.01863C15.4185 5.58562 17.0733 7.68364 16.292 9.48419M8.53891 6.01863C9.13252 6.14995 9.64708 6.49368 10 6.96666',
  d11: 'M17 9.00146L22 3.00146',
  d12: 'M15.5 6.00146L18 2.00146',
  d13: 'M2 12.0044H20C19.9376 16.4839 16.3358 18.5861 14.955 19.1596L15.9201 21.8198C15.944 21.8851 15.9893 21.9972 15.9201 21.9972H6.11669C6.04743 21.9972 5.99429 22.012 6.01822 21.9467L6.99731 19.1669C5.61651 18.5934 2.06238 16.4839 2 12.0044Z',
  d14: 'M20.9477 11V11.75C20.9477 15.0023 18.987 17.7972 16.1412 19.301L16.9157 21.5002C16.9966 21.7298 16.9613 21.9844 16.8211 22.1831C16.6809 22.3819 16.4532 22.5 16.2104 22.5H6.23726C5.99449 22.5 5.76681 22.3819 5.62661 22.1831C5.48641 21.9844 5.45112 21.7298 5.53197 21.5002L6.30655 19.301C3.46067 17.7972 1.5 15.0023 1.5 11.75V11H20.9477Z',
  d15: 'M16.4735 5.93911L18.7251 2.295L17.4565 1.5L15.2141 5.12931C14.9033 5.02074 14.571 4.96033 14.2247 4.95831C13.1883 2.34636 9.25665 2.34723 8.22226 4.96091C6.31067 4.98447 4.75561 6.80816 5.02878 8.7175C3.83507 9.20118 2.99609 10.3787 2.99609 11.75H4.49207C4.49207 10.8383 5.17246 10.0932 6.03813 9.99404L7.04877 9.87829L6.63731 8.94552C6.07427 7.6691 7.29715 6.20871 8.60791 6.49946C9.01924 6.5907 9.37907 6.83033 9.62716 7.16372L10.8261 6.26667C10.5333 5.87317 10.1536 5.54765 9.71456 5.31972C10.4522 4.05959 12.6513 4.25233 12.9419 5.89793L13.078 6.66849L13.84 6.49946C15.0205 6.23761 16.0885 7.3612 15.9369 8.49789C15.5938 8.52385 15.2483 8.60734 14.912 8.75568L15.5145 10.1287C16.6149 9.64326 17.9559 10.4993 17.9559 11.75H19.4519C19.4519 10.578 18.8331 9.59458 17.9521 9.02345L22.4997 3.5L21.3504 2.53972L17.3288 7.42432C17.1745 6.86577 16.8756 6.3517 16.4735 5.93911Z',
} as const;

export const IconRiceBowl01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-stroke-rounded IconRiceBowl01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRiceBowl01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-duotone-rounded IconRiceBowl01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-twotone-rounded IconRiceBowl01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-solid-rounded IconRiceBowl01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-bulk-rounded IconRiceBowl01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRiceBowl01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-stroke-sharp IconRiceBowl01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRiceBowl01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rice-bowl-01-solid-sharp IconRiceBowl01SolidSharp"
    >
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

export const iconPackOfRiceBowl01: TheIconSelfPack = {
  name: 'RiceBowl01',
  StrokeRounded: IconRiceBowl01StrokeRounded,
  DuotoneRounded: IconRiceBowl01DuotoneRounded,
  TwotoneRounded: IconRiceBowl01TwotoneRounded,
  SolidRounded: IconRiceBowl01SolidRounded,
  BulkRounded: IconRiceBowl01BulkRounded,
  StrokeSharp: IconRiceBowl01StrokeSharp,
  SolidSharp: IconRiceBowl01SolidSharp,
};