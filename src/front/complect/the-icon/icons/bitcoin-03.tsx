import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.7453 13C20.5362 11.8662 21 10.4872 21 9C21 5.13401 17.866 2 14 2C10.134 2 7 5.134 7 9C7 10.0736 7.24169 11.0907 7.67363 12',
  d2: 'M12.4375 11.6667L12.4375 6.33333M14 6.33333V5M14 13V11.6667M12.4375 9H15.5625M15.5625 9C16.0803 9 16.5 9.44772 16.5 10V10.6667C16.5 11.219 16.0803 11.6667 15.5625 11.6667H11.5M15.5625 9C16.0803 9 16.5 8.55228 16.5 8V7.33333C16.5 6.78105 16.0803 6.33333 15.5625 6.33333H11.5',
  d3: 'M3 14H5.39482C5.68897 14 5.97908 14.0663 6.24217 14.1936L8.28415 15.1816C8.54724 15.3089 8.83735 15.3751 9.1315 15.3751H10.1741C11.1825 15.3751 12 16.1662 12 17.142C12 17.1814 11.973 17.2161 11.9338 17.2269L9.39287 17.9295C8.93707 18.0555 8.449 18.0116 8.025 17.8064L5.84211 16.7503M12 16.5L16.5928 15.0889C17.407 14.8352 18.2871 15.136 18.7971 15.8423C19.1659 16.3529 19.0157 17.0842 18.4785 17.3942L10.9629 21.7305C10.4849 22.0063 9.92094 22.0736 9.39516 21.9176L3 20.0199',
  d4: 'M14 2C10.134 2 7 5.13401 7 9C7 12.866 10.134 16 14 16C17.866 16 21 12.866 21 9C21 5.13401 17.866 2 14 2Z',
  d5: 'M4.95526 13.25C4.52244 13.25 4.12561 13.2499 3.8028 13.2933C3.44732 13.3411 3.07159 13.4535 2.76257 13.7626C2.45355 14.0716 2.3411 14.4473 2.29331 14.8028C2.24991 15.1256 2.24995 15.5224 2.25 15.9553L2.25 18.5635C2.24996 18.8917 2.24993 19.1992 2.27988 19.4561C2.31321 19.7421 2.39038 20.0427 2.59756 20.3203C2.80474 20.5979 3.07102 20.7574 3.33569 20.8707C3.57351 20.9725 3.8683 21.06 4.18291 21.1533L9.18181 22.6366C9.90626 22.8516 10.6827 22.7581 11.3377 22.3802L18.8533 18.0438C19.7865 17.5054 20.0266 16.2638 19.4051 15.4032C18.7123 14.4437 17.5017 14.0209 16.3712 14.3724L16.3697 14.3729L14.2442 15.0259C13.9956 15.1023 13.8712 15.1405 13.8322 15.2122C13.7933 15.2839 13.8398 15.4474 13.9328 15.7743C14.0037 16.0236 14.0121 16.2627 14 16.3973C14 17.3786 13.331 18.171 12.4667 18.4099L9.9258 19.1124C9.00412 19.3673 8.01687 19.2796 7.15388 18.8621L5.5336 18.0781C5.22288 17.9278 5.09286 17.554 5.2432 17.2433C5.39354 16.9326 5.7673 16.8026 6.07802 16.9529L7.69831 17.7369C8.28692 18.0217 8.96218 18.082 9.5927 17.9076L12.1336 17.2051C12.4837 17.1083 12.75 16.7884 12.75 16.3973C12.75 14.9842 11.5733 14.6252 10.1741 14.6252L9.1315 14.6251C8.94974 14.6251 8.77138 14.5841 8.61081 14.5064L6.56883 13.5184C6.20322 13.3415 5.80136 13.25 5.39483 13.25L4.95526 13.25Z',
  d6: 'M7.22217 12.1682C7.1028 12.1104 6.98104 12.0585 6.85733 12.0126C6.46624 11.0865 6.25 10.0685 6.25 8.99996C6.25 4.71975 9.71979 1.24996 14 1.24996C18.2802 1.24996 21.75 4.71975 21.75 8.99996C21.75 10.8425 21.107 12.5349 20.0332 13.8649C18.9463 12.8717 17.399 12.4823 15.9265 12.9398L15.9236 12.9407L13.0685 13.9004C12.9583 13.8175 12.8441 13.7432 12.7275 13.677C11.9123 13.2141 10.9465 13.1252 10.1741 13.1252L9.19999 13.1251L7.22217 12.1682ZM14.75 3.99996C14.75 3.58574 14.4142 3.24996 14 3.24996C13.5858 3.24996 13.25 3.58574 13.25 3.99996V4.58329H11.5C11.0858 4.58329 10.75 4.91908 10.75 5.33329C10.75 5.7475 11.0858 6.08329 11.5 6.08329H11.6875L11.6875 9.91662H11.5C11.0858 9.91662 10.75 10.2524 10.75 10.6666C10.75 11.0808 11.0858 11.4166 11.5 11.4166H13.25V12C13.25 12.4142 13.5858 12.75 14 12.75C14.4142 12.75 14.75 12.4142 14.75 12V11.4166L15.5625 11.4166C16.5393 11.4166 17.25 10.5868 17.25 9.66662V8.99996C17.25 8.63755 17.1398 8.28916 16.9465 7.99996C17.1398 7.71075 17.25 7.36236 17.25 6.99996V6.33329C17.25 5.41312 16.5393 4.58329 15.5625 4.58329H14.75V3.99996ZM13.1875 7.24996V6.08329H15.5625C15.6212 6.08329 15.75 6.14889 15.75 6.33329L15.75 6.99996C15.75 7.18436 15.6212 7.24996 15.5625 7.24996H13.1875ZM13.1875 8.74996H15.5625C15.6212 8.74996 15.75 8.81555 15.75 8.99996V9.66662C15.75 9.85103 15.6212 9.91662 15.5625 9.91662L13.1875 9.91662L13.1875 8.74996Z',
  d7: 'M6.85733 12.0126C6.98104 12.0586 7.1028 12.1105 7.22217 12.1682L9.19999 13.1252L10.1741 13.1253C10.9465 13.1253 11.9123 13.2141 12.7275 13.6771C12.8441 13.7433 12.9583 13.8175 13.0685 13.9004L15.9236 12.9408L15.9265 12.9399C17.399 12.4823 18.9463 12.8717 20.0332 13.8649C21.107 12.5349 21.75 10.8425 21.75 9C21.75 4.71979 18.2802 1.25 14 1.25C9.71979 1.25 6.25 4.71979 6.25 9C6.25 10.0685 6.46624 11.0865 6.85733 12.0126Z',
  d8: 'M14 3.25C14.4142 3.25 14.75 3.58579 14.75 4V4.58333H15.5625C16.5393 4.58333 17.25 5.41317 17.25 6.33333V7C17.25 7.3624 17.1398 7.7108 16.9465 8C17.1398 8.2892 17.25 8.6376 17.25 9V9.66667C17.25 10.5868 16.5393 11.4167 15.5625 11.4167H14.75V12C14.75 12.4142 14.4142 12.75 14 12.75C13.5858 12.75 13.25 12.4142 13.25 12V11.4167H11.5C11.0858 11.4167 10.75 11.0809 10.75 10.6667C10.75 10.2525 11.0858 9.91667 11.5 9.91667H11.6875L11.6875 6.08333H11.5C11.0858 6.08333 10.75 5.74755 10.75 5.33333C10.75 4.91912 11.0858 4.58333 11.5 4.58333H13.25V4C13.25 3.58579 13.5858 3.25 14 3.25ZM13.1875 6.08333V7.25H15.5625C15.6212 7.25 15.75 7.1844 15.75 7V6.33333C15.75 6.14893 15.6212 6.08333 15.5625 6.08333H13.1875ZM15.5625 8.75H13.1875L13.1875 9.91667H15.5625C15.6212 9.91667 15.75 9.85107 15.75 9.66667V9C15.75 8.8156 15.6212 8.75 15.5625 8.75Z',
  d9: 'M3 14H6L8.5 15.3751H9.5C11 15.3751 12 16.524 12 17.4998L9 18.4998L6 17.4998M11.9993 17L16.2103 15.5963C17.2149 15.2615 18.3064 15.7677 18.6997 16.7509L18.9993 17.5L9.99931 22L3 20.0199',
  d10: 'M2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H6C6.12639 13.25 6.25072 13.2819 6.36146 13.3429L8.69266 14.6251H9.5C10.7384 14.6251 11.7644 15.2585 12.3145 16.1044L9 17.7093L6.23717 16.7883L5.76283 18.2113L8.76283 19.2113C8.91678 19.2627 9.08322 19.2627 9.23717 19.2113L13.7965 16.9797V15.6104L15.9731 14.8848C17.3544 14.4244 18.8553 15.1205 19.396 16.4724L19.6957 17.2215C19.8405 17.5836 19.6836 17.9964 19.3347 18.1708L10.3347 22.6708C10.1675 22.7544 9.97506 22.7726 9.79515 22.7217L2.79584 20.7416C2.47293 20.6503 2.25 20.3555 2.25 20.0199V14Z',
  d11: 'M9.07797 13.1251L6.83257 11.9533C6.45712 11.0431 6.25 10.0457 6.25 8.99996C6.25 4.71976 9.71979 1.24996 14 1.24996C18.2802 1.24997 21.75 4.71976 21.75 8.99997C21.75 11.0515 20.9529 12.9168 19.6514 14.3032C18.5497 13.3347 16.9798 12.9681 15.4988 13.4618L12.7825 14.3672C11.9391 13.6106 10.8242 13.1251 9.07797 13.1251ZM14.75 4.5833V3.24996L13.25 3.24996L13.25 4.5833H10.75V6.0833H11.6875L11.6875 9.91663H10.75V11.4166H13.25V12.75L14.75 12.75V11.4166L15.5625 11.4166C16.5393 11.4166 17.25 10.5868 17.25 9.66663V8.99996C17.25 8.63756 17.1398 8.28917 16.9465 7.99996C17.1398 7.71076 17.25 7.36237 17.25 6.99996V6.3333C17.25 5.41313 16.5393 4.5833 15.5625 4.5833H14.75ZM13.1875 7.24996V6.0833L15.5625 6.0833C15.6212 6.0833 15.75 6.1489 15.75 6.3333V6.99996C15.75 7.18437 15.6212 7.24996 15.5625 7.24996H13.1875ZM13.1875 8.74996H15.5625C15.6212 8.74996 15.75 8.81556 15.75 8.99996V9.66663C15.75 9.85103 15.6212 9.91663 15.5625 9.91663H13.1875L13.1875 8.74996Z',
} as const;

export const IconBitcoin03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-stroke-rounded IconBitcoin03StrokeRounded"
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

export const IconBitcoin03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-duotone-rounded IconBitcoin03DuotoneRounded"
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

export const IconBitcoin03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-twotone-rounded IconBitcoin03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-solid-rounded IconBitcoin03SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoin03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-bulk-rounded IconBitcoin03BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoin03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-stroke-sharp IconBitcoin03StrokeSharp"
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
        strokeLinecap="square" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-03-solid-sharp IconBitcoin03SolidSharp"
    >
      <path 
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

export const iconPackOfBitcoin03: TheIconSelfPack = {
  name: 'Bitcoin03',
  StrokeRounded: IconBitcoin03StrokeRounded,
  DuotoneRounded: IconBitcoin03DuotoneRounded,
  TwotoneRounded: IconBitcoin03TwotoneRounded,
  SolidRounded: IconBitcoin03SolidRounded,
  BulkRounded: IconBitcoin03BulkRounded,
  StrokeSharp: IconBitcoin03StrokeSharp,
  SolidSharp: IconBitcoin03SolidSharp,
};