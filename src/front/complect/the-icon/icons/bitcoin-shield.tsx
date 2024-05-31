import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z',
  d2: 'M10.125 14.5L10.125 8.5M12 8.5V7M12 16V14.5M10.125 11.5H13.875M13.875 11.5C14.4963 11.5 15 12.0037 15 12.625V13.375C15 13.9963 14.4963 14.5 13.875 14.5H9M13.875 11.5C14.4963 11.5 15 10.9963 15 10.375V9.625C15 9.00368 14.4963 8.5 13.875 8.5H9',
  d3: 'M11.9985 1.25C10.3867 1.25 9.07948 1.82495 7.94845 2.44345C7.60356 2.63206 7.28455 2.81782 6.98063 2.99479C6.24184 3.42498 5.59226 3.80324 4.87699 4.04413C4.45481 4.18631 4.07585 4.31393 3.80771 4.42484C3.55387 4.52984 3.24849 4.67545 3.03312 4.92811C2.84288 5.15129 2.74669 5.3994 2.6831 5.63457C2.62487 5.84993 2.57513 6.14122 2.52688 6.42385C1.35899 13.2609 3.90365 19.7706 10.1942 22.3128C10.8076 22.5608 11.2755 22.75 12.0016 22.75C12.7277 22.75 13.1957 22.5608 13.809 22.3128C20.0994 19.7705 22.6415 13.2606 21.4733 6.4238C21.425 6.14115 21.3752 5.84978 21.317 5.63441C21.2534 5.39922 21.1572 5.15108 20.9669 4.92789C20.7515 4.67524 20.4461 4.52967 20.1922 4.4247C19.9241 4.31383 19.5452 4.18628 19.123 4.04418C18.4073 3.80327 17.7572 3.42491 17.0178 2.99465L17.0178 2.99462L17.0178 2.9946C16.7137 2.81768 16.3946 2.63197 16.0497 2.44344C14.9181 1.82495 13.6104 1.25 11.9985 1.25ZM12.7505 7C12.7505 6.58579 12.4147 6.25 12.0005 6.25C11.5863 6.25 11.2505 6.58579 11.2505 7V7.75H9.00049C8.58627 7.75 8.25049 8.08579 8.25049 8.5C8.25049 8.91421 8.58627 9.25 9.00049 9.25H9.37549V13.75H9.00049C8.58627 13.75 8.25049 14.0858 8.25049 14.5C8.25049 14.9142 8.58627 15.25 9.00049 15.25H11.2505V16C11.2505 16.4142 11.5863 16.75 12.0005 16.75C12.4147 16.75 12.7505 16.4142 12.7505 16V15.25H13.8755C14.911 15.25 15.7505 14.4105 15.7505 13.375V12.625C15.7505 12.2029 15.611 11.8134 15.3756 11.5C15.611 11.1866 15.7505 10.7971 15.7505 10.375V9.625C15.7505 8.58947 14.911 7.75 13.8755 7.75H12.7505V7ZM10.8755 10.75V9.25H13.8755C14.0826 9.25 14.2505 9.41789 14.2505 9.625V10.375C14.2505 10.5821 14.0826 10.75 13.8755 10.75H10.8755ZM10.8755 12.25H13.8755C14.0826 12.25 14.2505 12.4179 14.2505 12.625V13.375C14.2505 13.5821 14.0826 13.75 13.8755 13.75H10.8755V12.25Z',
  d4: 'M7.94845 2.44345C9.07948 1.82495 10.3867 1.25 11.9985 1.25C13.6104 1.25 14.9181 1.82495 16.0497 2.44344C16.3947 2.63198 16.7138 2.81769 17.0178 2.99462L17.0178 2.99465C17.7572 3.42491 18.4073 3.80327 19.123 4.04418C19.5452 4.18628 19.9241 4.31383 20.1922 4.4247C20.4461 4.52967 20.7515 4.67524 20.9669 4.92789C21.1572 5.15108 21.2534 5.39922 21.317 5.63441C21.3752 5.84978 21.425 6.14115 21.4733 6.4238C22.6415 13.2606 20.0994 19.7705 13.809 22.3128C13.1957 22.5608 12.7277 22.75 12.0016 22.75C11.2755 22.75 10.8076 22.5608 10.1942 22.3128C3.90365 19.7706 1.35899 13.2609 2.52688 6.42385C2.57513 6.14122 2.62487 5.84993 2.6831 5.63457C2.74669 5.3994 2.84288 5.15129 3.03312 4.92811C3.24849 4.67545 3.55387 4.52984 3.80771 4.42484C4.07585 4.31393 4.45481 4.18631 4.87699 4.04413C5.59226 3.80324 6.24184 3.42498 6.98063 2.99479C7.28455 2.81782 7.60356 2.63206 7.94845 2.44345Z',
  d5: 'M12.0005 6.25C12.4147 6.25 12.7505 6.58579 12.7505 7V7.75H13.8755C14.911 7.75 15.7505 8.58947 15.7505 9.625V10.375C15.7505 10.7971 15.611 11.1866 15.3756 11.5C15.611 11.8134 15.7505 12.2029 15.7505 12.625V13.375C15.7505 14.4105 14.911 15.25 13.8755 15.25H12.7505V16C12.7505 16.4142 12.4147 16.75 12.0005 16.75C11.5863 16.75 11.2505 16.4142 11.2505 16V15.25H9.00049C8.58627 15.25 8.25049 14.9142 8.25049 14.5C8.25049 14.0858 8.58627 13.75 9.00049 13.75H9.37549L9.37549 9.25H9.00049C8.58627 9.25 8.25049 8.91421 8.25049 8.5C8.25049 8.08579 8.58627 7.75 9.00049 7.75H11.2505V7C11.2505 6.58579 11.5863 6.25 12.0005 6.25ZM10.8755 9.25V10.75H13.8755C14.0826 10.75 14.2505 10.5821 14.2505 10.375V9.625C14.2505 9.41789 14.0826 9.25 13.8755 9.25H10.8755ZM13.8755 12.25H10.8755L10.8755 13.75H13.8755C14.0826 13.75 14.2505 13.5821 14.2505 13.375V12.625C14.2505 12.4179 14.0826 12.25 13.8755 12.25Z',
  d6: 'M10.125 14.5V8.5M12 8.5V7M12 16V14.5M10.125 11.5H13.875M13.875 11.5C14.4963 11.5 15 12.0037 15 12.625V13.375C15 13.9963 14.4963 14.5 13.875 14.5H9M13.875 11.5C14.4963 11.5 15 10.9963 15 10.375V9.625C15 9.00368 14.4963 8.5 13.875 8.5H9',
  d7: 'M3.43067 4.93449C6.56932 5.16032 8.59312 2.00109 12.0266 2.00109C15.4086 1.93401 17.0635 4.97669 20.5307 4.97669C22.3893 14.3837 18.5226 20.2928 12.0549 22C6.0595 20.583 1.5547 14.6133 3.43067 4.93449Z',
  d8: 'M12 1.25C10.1398 1.25 8.68541 2.08773 7.41811 2.81769C6.09468 3.57975 4.90769 4.24733 3.4847 4.24733H2.88309L2.75241 4.83389C0.799699 13.5983 4.68782 21.0956 11.8342 22.7125L12 22.75L12.1657 22.7125C19.3121 21.0956 23.2003 13.5983 21.2476 4.83389L21.1169 4.24733H20.5153C19.0945 4.24733 17.9162 3.58301 16.5935 2.82069C15.3252 2.08955 13.8689 1.25 12 1.25ZM12.7502 7.74378V6.24512H11.2498V7.74378H8.24902V9.24245H9.37433V13.7385H8.24902V15.2371H11.2498V16.7358H12.7502V15.2371H13.8755C14.9113 15.2371 15.751 14.3984 15.751 13.3638V12.6145C15.751 12.1927 15.6115 11.8035 15.3761 11.4905C15.6115 11.1774 15.751 10.7882 15.751 10.3665V9.61712C15.751 8.5825 14.9113 7.74378 13.8755 7.74378H12.7502ZM10.8747 10.7411V9.24245H13.8755C14.0827 9.24245 14.2506 9.4102 14.2506 9.61712V10.3665C14.2506 10.5734 14.0827 10.7411 13.8755 10.7411H10.8747ZM10.8747 12.2398H13.8755C14.0827 12.2398 14.2506 12.4075 14.2506 12.6145V13.3638C14.2506 13.5707 14.0827 13.7385 13.8755 13.7385H10.8747V12.2398Z',
} as const;

export const IconBitcoinShieldStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-stroke-rounded IconBitcoinShieldStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinShieldDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-duotone-rounded IconBitcoinShieldDuotoneRounded"
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

export const IconBitcoinShieldTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-twotone-rounded IconBitcoinShieldTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShieldSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-solid-rounded IconBitcoinShieldSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShieldBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-bulk-rounded IconBitcoinShieldBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShieldStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-stroke-sharp IconBitcoinShieldStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShieldSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shield-solid-sharp IconBitcoinShieldSolidSharp"
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

export const iconPackOfBitcoinShield: TheIconSelfPack = {
  name: 'BitcoinShield',
  StrokeRounded: IconBitcoinShieldStrokeRounded,
  DuotoneRounded: IconBitcoinShieldDuotoneRounded,
  TwotoneRounded: IconBitcoinShieldTwotoneRounded,
  SolidRounded: IconBitcoinShieldSolidRounded,
  BulkRounded: IconBitcoinShieldBulkRounded,
  StrokeSharp: IconBitcoinShieldStrokeSharp,
  SolidSharp: IconBitcoinShieldSolidSharp,
};