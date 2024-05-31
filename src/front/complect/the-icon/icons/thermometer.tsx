import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.8801 15.9369L20.6738 8.17267C21.4217 7.31791 21.7956 6.89053 21.9252 6.41326C22.0376 5.99901 22.023 5.56052 21.8833 5.15466C21.7223 4.68707 21.3207 4.28551 20.5176 3.4824C19.7145 2.67928 19.3129 2.27773 18.8453 2.11672C18.4395 1.97696 18.001 1.96236 17.5867 2.07481C17.1095 2.20436 16.6821 2.57832 15.8273 3.32623L8.06312 10.1199C7.10741 10.9562 6.62955 11.3743 6.34846 11.9258C6.06738 12.4774 6.00989 13.1098 5.89492 14.3745L5.87152 14.6319C5.81078 15.3 5.78041 15.6341 5.65293 15.9386C5.52546 16.2431 5.30877 16.4992 4.8754 17.0114L2.27543 20.0841C1.88438 20.5462 1.91286 21.231 2.34094 21.6591C2.76903 22.0871 3.45379 22.1156 3.91594 21.7246L6.98863 19.1246C7.5008 18.6912 7.75689 18.4745 8.06139 18.3471C8.36589 18.2196 8.69998 18.1892 9.36814 18.1285L9.62553 18.1051C10.8902 17.9901 11.5226 17.9326 12.0741 17.6515C12.6257 17.3704 13.0438 16.8926 13.8801 15.9369Z',
  d2: 'M7.78906 9.89453L9.36983 10.843C9.74255 11.0666 9.86341 11.5501 9.63978 11.9228L9.34781 12.4094C8.96198 13.0524 9.06331 13.8755 9.59357 14.4058C10.1238 14.9361 10.9469 15.0374 11.59 14.6516L12.0766 14.3596C12.4493 14.136 12.9328 14.2568 13.1564 14.6296L14.1049 16.2103',
  d3: 'M17.2634 6.7373L14.1055 9.8952',
  d4: 'M20.6736 8.17267L13.88 15.9369L12.4999 13.9992C9.49988 16.502 8.49988 13.002 9.62541 10.9992L8.06299 10.1199L15.8272 3.32623C16.682 2.57832 17.1093 2.20436 17.5866 2.07481C18.0009 1.96236 18.4393 1.97696 18.8452 2.11672C19.3128 2.27773 19.7144 2.67928 20.5175 3.48239C21.3206 4.2855 21.7221 4.68707 21.8832 5.15466C22.0229 5.56052 22.0375 5.99901 21.9251 6.41326C21.7955 6.89053 21.4216 7.31791 20.6736 8.17267Z',
  d5: 'M7.78906 9.89844L9.36983 10.8469C9.74255 11.0705 9.86341 11.554 9.63978 11.9267L9.34781 12.4133C8.96198 13.0564 9.06331 13.8795 9.59357 14.4097C10.1238 14.94 10.9469 15.0413 11.59 14.6555L12.0766 14.3635C12.4493 14.1399 12.9328 14.2607 13.1564 14.6335L14.1049 16.2142',
  d6: 'M17.2634 6.73438L14.1055 9.89227',
  d7: 'M17.2634 6.73633L14.1055 9.89422',
  d8: 'M17.3903 1.351C17.9496 1.19918 18.5416 1.2189 19.0895 1.40758C19.4481 1.53105 19.7478 1.73713 20.0421 1.98793C20.1488 2.09459 20.3298 2.27242 20.5408 2.47966L20.5409 2.47972C21.0888 3.01784 21.8385 3.75421 22.0121 3.9579C22.2629 4.2522 22.469 4.55192 22.5924 4.91048C22.7811 5.45843 22.8008 6.05044 22.649 6.60974C22.5497 6.97571 22.364 7.28847 22.1333 7.59881C21.9122 7.89632 21.6151 8.23581 21.2578 8.64414L15.4073 15.3305C15.1666 15.6056 15.0462 15.7431 14.8969 15.7321C14.7477 15.7211 14.6488 15.5674 14.4511 15.26L13.7926 14.2361C13.3528 13.5173 12.4148 13.2861 11.6908 13.7205L11.2042 14.0125C10.8563 14.2212 10.4109 14.1664 10.124 13.8795C9.83708 13.5926 9.78226 13.1472 9.99102 12.7993L10.283 12.3127C10.7174 11.5887 10.4862 10.6508 9.76749 10.211L8.73935 9.54929C8.43206 9.35153 8.27841 9.25265 8.26742 9.1034C8.25643 8.95414 8.39394 8.83383 8.66895 8.5932L15.3558 2.7422L15.3559 2.74218C15.7642 2.38489 16.1037 2.08782 16.4012 1.8667C16.7115 1.63603 17.0243 1.45034 17.3903 1.351ZM13.7748 17.1017C13.7852 16.9976 13.7248 16.9037 13.604 16.7159L12.5257 15.0392L12.5198 15.0299L12.5134 15.0194C12.5028 15.0019 12.4801 14.9962 12.4626 15.0067L11.9759 15.2987C11.0378 15.8616 9.83695 15.7138 9.06333 14.9401C8.28972 14.1665 8.14189 12.9657 8.70478 12.0275L8.99675 11.5409C9.00727 11.5234 9.00159 11.5006 8.98405 11.4901C8.97731 11.4861 8.97064 11.4819 8.96404 11.4777L7.28394 10.3964C7.09607 10.2755 7.00214 10.2151 6.89805 10.2254C6.79395 10.2358 6.71652 10.3109 6.56166 10.4611C6.17905 10.8323 5.88787 11.1779 5.68024 11.5853C5.33254 12.2676 5.26288 13.0374 5.16073 14.1661L4.98395 15.4793L4.98394 15.4794C4.9726 15.5636 4.96693 15.6058 4.95014 15.6442C4.93335 15.6826 4.9063 15.7154 4.85221 15.781L4.8522 15.7811L1.7029 19.5996C1.05988 20.3595 1.10671 21.4855 1.81062 22.1894C2.51452 22.8933 3.64048 22.9401 4.4004 22.2971L8.21895 19.1478L8.21896 19.1478C8.28455 19.0937 8.31735 19.0666 8.3558 19.0499C8.39425 19.0331 8.43639 19.0274 8.52066 19.0161L9.83385 18.8393C10.9626 18.7371 11.7324 18.6675 12.4147 18.3198C12.8223 18.1121 13.1679 17.8208 13.5392 17.438C13.6894 17.2832 13.7645 17.2058 13.7748 17.1017ZM17.9705 7.44148C18.361 7.05096 18.361 6.41779 17.9705 6.02727C17.5799 5.63674 16.9468 5.63674 16.5563 6.02727L13.3984 9.18516C13.0078 9.57569 13.0078 10.2089 13.3984 10.5994C13.7889 10.9899 14.4221 10.9899 14.8126 10.5994L17.9705 7.44148Z',
  d9: 'M13.604 16.7181C13.7248 16.906 13.7852 16.9999 13.7748 17.104C13.7645 17.208 13.6894 17.2854 13.5392 17.4403C13.1679 17.823 12.8223 18.1143 12.4147 18.322C11.7324 18.6697 10.9626 18.7394 9.83385 18.8415L8.52066 19.0183C8.43639 19.0297 8.39425 19.0353 8.3558 19.0521C8.31735 19.0689 8.28455 19.096 8.21895 19.1501L4.4004 22.2994C3.64048 22.9424 2.51452 22.8956 1.81062 22.1917C1.10671 21.4877 1.05988 20.3618 1.7029 19.6019L4.8522 15.7833C4.9063 15.7177 4.93335 15.6849 4.95014 15.6465C4.96693 15.608 4.9726 15.5659 4.98395 15.4816L5.16073 14.1684C5.26288 13.0397 5.33254 12.2698 5.68024 11.5876C5.88788 11.1801 6.17905 10.8346 6.56167 10.4634C6.71652 10.3132 6.79395 10.2381 6.89805 10.2277C7.00214 10.2173 7.09607 10.2778 7.28394 10.3987L8.96404 11.4799C8.97065 11.4842 8.97732 11.4883 8.98405 11.4924C9.00159 11.5029 9.00727 11.5256 8.99675 11.5432L8.70478 12.0298C8.14189 12.9679 8.28972 14.1688 9.06334 14.9424C9.83695 15.716 11.0378 15.8638 11.9759 15.301L12.4626 15.009C12.4801 14.9985 12.5028 15.0042 12.5134 15.0217C12.5155 15.0252 12.5176 15.0287 12.5198 15.0322C12.5217 15.0353 12.5237 15.0384 12.5257 15.0415L13.604 16.7181Z',
  d10: 'M19.0903 1.40758C18.5423 1.2189 17.9503 1.19918 17.391 1.351C17.0251 1.45034 16.7123 1.63603 16.402 1.8667C16.1044 2.08783 15.7649 2.3849 15.3566 2.7422L8.66972 8.5932C8.3947 8.83383 8.2572 8.95414 8.26819 9.1034C8.27918 9.25265 8.43282 9.35153 8.74011 9.54929L9.76825 10.211C10.487 10.6508 10.7182 11.5887 10.2838 12.3127L9.99178 12.7993C9.78302 13.1472 9.83785 13.5926 10.1248 13.8795C10.4117 14.1664 10.857 14.2212 11.205 14.0125L11.6916 13.7205C12.4156 13.2861 13.3536 13.5173 13.7933 14.2361L14.4519 15.26C14.6496 15.5674 14.7484 15.7211 14.8977 15.7321C15.047 15.7431 15.1673 15.6056 15.408 15.3305L21.2586 8.64414C21.6159 8.23581 21.9129 7.89632 22.1341 7.59881C22.3647 7.28847 22.5504 6.97571 22.6498 6.60974C22.8016 6.05044 22.7819 5.45843 22.5932 4.91048C22.4697 4.55192 22.2636 4.2522 22.0128 3.9579C21.8393 3.75421 21.0895 3.01784 20.5417 2.47972C20.3306 2.27246 20.1496 2.0946 20.0429 1.98793C19.7486 1.73713 19.4488 1.53105 19.0903 1.40758Z',
  d11: 'M17.9705 6.02727C18.361 6.41779 18.361 7.05096 17.9705 7.44148L14.8126 10.5994C14.4221 10.9899 13.7889 10.9899 13.3984 10.5994C13.0078 10.2089 13.0078 9.57569 13.3984 9.18516L16.5563 6.02727C16.9468 5.63674 17.5799 5.63674 17.9705 6.02727Z',
  d12: 'M13.8801 15.9369L20.6738 8.17267C21.4217 7.31791 21.7956 6.89053 21.9252 6.41326C22.0376 5.99901 22.023 5.56052 21.8833 5.15466C21.7223 4.68707 21.3207 4.28551 20.5176 3.4824C19.7145 2.67929 19.3129 2.27773 18.8453 2.11672C18.4395 1.97696 18.001 1.96236 17.5867 2.07481C17.1095 2.20436 16.6821 2.57832 15.8273 3.32623L8.06312 10.1199C7.10741 10.9562 6.62955 11.3743 6.34846 11.9258C6.06738 12.4774 6.00989 13.1098 5.89492 14.3745V16L2.27543 20.0841C1.88438 20.5462 1.91286 21.231 2.34094 21.6591C2.76903 22.0871 3.45379 22.1156 3.91594 21.7246L8 18.1051H9.62553C10.8902 17.9901 11.5226 17.9326 12.0742 17.6515C12.6257 17.3704 13.0438 16.8926 13.8801 15.9369Z',
  d13: 'M8 10L10 11.5L9.34781 12.4094C8.96198 13.0524 9.06331 13.8755 9.59357 14.4058C10.1238 14.9361 10.9469 15.0374 11.59 14.6516L12.5 14L14 16',
  d14: 'M17.5002 6.50098L14.001 10.0002',
  d15: 'M12.4147 18.3198C12.9794 18.032 13.4252 17.5837 13.9851 16.954L12.3697 15.0155L12.0016 15.2791L11.9755 15.2947C11.0374 15.8576 9.83653 15.7097 9.06291 14.9361C8.2893 14.1625 8.14147 12.9617 8.70435 12.0235L8.72013 11.9972L8.98374 11.6297L7.04601 10.0149C6.41627 10.5748 5.96802 11.0206 5.68024 11.5853C5.33254 12.2676 5.26288 13.0374 5.16073 14.1662L5.14492 14.3404V15.7155L1.70845 19.593L1.7029 19.5996C1.05988 20.3595 1.10671 21.4855 1.81062 22.1894C2.51452 22.8933 3.64048 22.9401 4.4004 22.2971L4.40696 22.2916L8.28452 18.8551H9.65956L9.83387 18.8393C10.9626 18.7371 11.7324 18.6675 12.4147 18.3198Z',
  d16: 'M17.3903 1.351C17.9496 1.19918 18.5416 1.2189 19.0895 1.40758C19.4481 1.53105 19.7478 1.73713 20.0421 1.98793C20.3243 2.22837 20.6433 2.54738 21.0269 2.93106L21.069 2.97318C21.4527 3.35681 21.7717 3.67577 22.0121 3.9579C22.2629 4.25221 22.469 4.55192 22.5924 4.91048C22.7811 5.45843 22.8008 6.05044 22.649 6.60974C22.5497 6.97571 22.364 7.28847 22.1333 7.59881C21.9122 7.89632 21.6151 8.23583 21.2578 8.64416L14.9859 15.812L12.6297 12.9845L11.1815 14.0214C10.837 14.2148 10.4044 14.1563 10.1236 13.8755C9.84282 13.5947 9.7843 13.1622 9.97753 12.8178L11.0156 11.3703L8.18805 9.01403L15.3559 2.74219C15.7641 2.38496 16.1037 2.0878 16.4012 1.8667C16.7115 1.63603 17.0243 1.45034 17.3903 1.351ZM17.3039 5.28223L13.8047 8.78146L15.2189 10.1957L18.7181 6.69644L17.3039 5.28223Z',
} as const;

export const IconThermometerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-stroke-rounded IconThermometerStrokeRounded"
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

export const IconThermometerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-duotone-rounded IconThermometerDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-twotone-rounded IconThermometerTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-solid-rounded IconThermometerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-bulk-rounded IconThermometerBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-stroke-sharp IconThermometerStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-solid-sharp IconThermometerSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThermometer: TheIconSelfPack = {
  name: 'Thermometer',
  StrokeRounded: IconThermometerStrokeRounded,
  DuotoneRounded: IconThermometerDuotoneRounded,
  TwotoneRounded: IconThermometerTwotoneRounded,
  SolidRounded: IconThermometerSolidRounded,
  BulkRounded: IconThermometerBulkRounded,
  StrokeSharp: IconThermometerStrokeSharp,
  SolidSharp: IconThermometerSolidSharp,
};