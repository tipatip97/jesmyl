import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z',
  d2: 'M12 16C12.1396 16 12.2694 15.9364 12.5289 15.8092L14.6152 14.7868C15.5384 14.3344 16 14.1082 16 13.75V9.25M12 16C11.8604 16 11.7306 15.9364 11.4711 15.8092L9.38478 14.7868C8.4616 14.3344 8 14.1082 8 13.75V9.25M12 16V11.5M16 9.25C16 8.89179 15.5384 8.66558 14.6152 8.21317L12.5289 7.19079C12.2694 7.0636 12.1396 7 12 7C11.8604 7 11.7306 7.0636 11.4711 7.19079L9.38478 8.21317C8.46159 8.66558 8 8.89179 8 9.25M16 9.25C16 9.60821 15.5384 9.83442 14.6152 10.2868L12.5289 11.3092C12.2694 11.4364 12.1396 11.5 12 11.5M8 9.25C8 9.60821 8.46159 9.83442 9.38478 10.2868L11.4711 11.3092C11.7306 11.4364 11.8604 11.5 12 11.5',
  d3: 'M7.42301 3.60618C8.77227 2.8206 10.1817 2 11.9983 2C13.8149 2 15.2252 2.8206 16.5752 3.60618C17.3429 4.05288 18.0911 4.48825 18.8835 4.75499C19.7719 5.05404 20.2161 5.20358 20.3959 5.41449C20.5758 5.62539 20.6284 5.93363 20.7338 6.5501C21.8608 13.1459 19.4005 19.2439 13.5277 21.6175C12.8967 21.8725 12.5812 22 12.0014 22C11.4216 22 11.106 21.8725 10.475 21.6175C4.6019 19.244 2.13925 13.146 3.26595 6.55013C3.37124 5.93375 3.42388 5.62556 3.60366 5.41465C3.78345 5.20374 4.22768 5.05413 5.11614 4.75491C5.90817 4.48816 6.65587 4.05283 7.42301 3.60618ZM14.6152 14.7868L12.5289 15.8092C12.2694 15.9364 12.1396 16 12 16C11.8604 16 11.7306 15.9364 11.4711 15.8092L9.38478 14.7868C8.4616 14.3344 8 14.1082 8 13.75V9.25C8 8.89179 8.46159 8.66558 9.38478 8.21318L11.4711 7.19079C11.7306 7.0636 11.8604 7 12 7C12.1396 7 12.2694 7.0636 12.5289 7.19079L14.6152 8.21317C15.5384 8.66558 16 8.89179 16 9.25V13.75C16 14.1082 15.5384 14.3344 14.6152 14.7868Z',
  d4: 'M11.9985 1.25C10.3867 1.25 9.07948 1.82495 7.94845 2.44345C7.60356 2.63206 7.28455 2.81782 6.98063 2.99479C6.24184 3.42498 5.59226 3.80324 4.87699 4.04413C4.45481 4.18631 4.07585 4.31393 3.80771 4.42484C3.55387 4.52984 3.24849 4.67545 3.03312 4.92811C2.84288 5.15129 2.74669 5.3994 2.6831 5.63457C2.62487 5.84993 2.57513 6.14122 2.52688 6.42385C1.35899 13.2609 3.90365 19.7706 10.1942 22.3128C10.8076 22.5608 11.2755 22.75 12.0016 22.75C12.7277 22.75 13.1957 22.5608 13.809 22.3128C20.0994 19.7705 22.6415 13.2606 21.4733 6.4238C21.425 6.14115 21.3752 5.84978 21.317 5.63441C21.2534 5.39922 21.1572 5.15108 20.9669 4.92789C20.7515 4.67524 20.4461 4.52967 20.1922 4.4247C19.9241 4.31383 19.5452 4.18628 19.123 4.04418C18.4073 3.80327 17.7572 3.42491 17.0178 2.99465L17.0178 2.99462L17.0178 2.9946C16.7137 2.81768 16.3946 2.63197 16.0497 2.44344C14.9181 1.82495 13.6104 1.25 11.9985 1.25ZM16.7505 9.25V13.75C16.7505 14.3196 16.3565 14.6614 16.0777 14.8521C15.8014 15.0411 15.4137 15.2311 14.9931 15.4371L12.805 16.5097C12.6101 16.6069 12.3232 16.75 12.0005 16.75C11.6778 16.75 11.3909 16.6069 11.1959 16.5097L9.00788 15.4371C8.58724 15.231 8.19954 15.0411 7.92324 14.8521C7.64445 14.6614 7.25049 14.3196 7.25049 13.75V9.25C7.25049 8.6804 7.64445 8.33859 7.92323 8.14789C8.19954 7.95888 8.58723 7.76896 9.00787 7.5629L11.196 6.49031C11.3909 6.39307 11.6778 6.25 12.0005 6.25C12.3232 6.25 12.6101 6.39307 12.805 6.49031L14.9931 7.56291C15.4138 7.76897 15.8014 7.95888 16.0777 8.14789C16.3565 8.33859 16.7505 8.6804 16.7505 9.25ZM11.9076 7.81408L12.0005 7.76855L12.094 7.81438L12.0941 7.81443C12.6482 8.08585 14.845 9.16203 15.0047 9.24968C14.845 9.33733 12.6476 10.4138 12.0936 10.6852L12.0935 10.6852L12.0005 10.7308L11.9075 10.6852C11.3545 10.4143 9.15605 9.33736 8.99629 9.24968C9.15606 9.16199 11.3547 8.08493 11.9076 7.81408ZM12.7505 12.0365L15.2505 10.8102V13.6001L12.7505 14.8653V12.0365ZM8.75049 13.6001L11.2505 14.8653V12.0365L8.75049 10.8102V13.6001Z',
  d5: 'M7.94845 2.44345C9.07948 1.82495 10.3867 1.25 11.9985 1.25C13.6104 1.25 14.9181 1.82495 16.0497 2.44344C16.3947 2.63198 16.7138 2.81769 17.0178 2.99462L17.0178 2.99465C17.7572 3.42491 18.4073 3.80327 19.123 4.04418C19.5452 4.18628 19.9241 4.31383 20.1922 4.4247C20.4461 4.52967 20.7515 4.67524 20.9669 4.92789C21.1572 5.15108 21.2534 5.39922 21.317 5.63441C21.3752 5.84978 21.425 6.14115 21.4733 6.4238C22.6415 13.2606 20.0994 19.7705 13.809 22.3128C13.1957 22.5608 12.7277 22.75 12.0016 22.75C11.2755 22.75 10.8076 22.5608 10.1942 22.3128C3.90365 19.7706 1.35899 13.2609 2.52688 6.42385C2.57513 6.14122 2.62487 5.84993 2.6831 5.63457C2.74669 5.3994 2.84288 5.15129 3.03312 4.92811C3.24849 4.67545 3.55387 4.52984 3.80771 4.42484C4.07585 4.31393 4.45481 4.18631 4.87699 4.04413C5.59226 3.80324 6.24184 3.42498 6.98063 2.99479C7.28455 2.81782 7.60356 2.63206 7.94845 2.44345Z',
  d6: 'M16.751 9.25V13.75C16.751 14.3196 16.357 14.6614 16.0782 14.8521C15.8019 15.0411 15.4142 15.2311 14.9936 15.4371L12.8055 16.5097C12.6106 16.6069 12.3237 16.75 12.001 16.75C11.6783 16.75 11.3914 16.6069 11.1964 16.5097L9.00836 15.4371C8.58773 15.231 8.20003 15.0411 7.92372 14.8521C7.64494 14.6614 7.25098 14.3196 7.25098 13.75V9.25C7.25098 8.6804 7.64494 8.33859 7.92372 8.14789C8.20002 7.95888 8.58772 7.76896 9.00835 7.5629L11.1964 6.49031C11.3914 6.39307 11.6783 6.25 12.001 6.25C12.3237 6.25 12.6106 6.39308 12.8055 6.49031L14.9936 7.56292C15.4143 7.76897 15.8019 7.95888 16.0782 8.14789C16.357 8.33859 16.751 8.6804 16.751 9.25ZM12.751 12.0368L15.251 10.8105V13.6004L12.751 14.8657V12.0368ZM8.75098 13.6005L11.251 14.8657V12.0368L8.75098 10.8105V13.6005Z',
  d7: 'M12.001 11.5L8.2049 9.36471M12.001 11.5L15.7971 9.36471M12.001 11.5V15.7013M16.001 9.25L12.001 7L8.00098 9.25V13.75L12.001 16L16.001 13.75V9.25Z',
  d8: 'M3.43165 4.93449C6.5703 5.16032 8.5941 2.00109 12.0276 2.00109C15.4096 1.93401 17.0644 4.97669 20.5317 4.97669C22.3903 14.3837 18.5235 20.2928 12.0559 22C6.06048 20.583 1.55568 14.6133 3.43165 4.93449Z',
  d9: 'M12 1.25C10.1398 1.25 8.63137 2.11885 7.36407 2.84882C6.04064 3.61088 4.90769 4.24733 3.4847 4.24733H2.88309L2.75241 4.83389C0.799699 13.5983 4.68782 21.0956 11.8342 22.7125L12 22.75L12.1657 22.7125C19.3121 21.0956 23.2003 13.5983 21.2476 4.83389L21.1169 4.24733H20.5153C19.0945 4.24733 17.9652 3.61129 16.6425 2.84897C15.3743 2.11782 13.8689 1.25 12 1.25ZM12.3677 6.34632C12.1394 6.21789 11.8606 6.21789 11.6323 6.34632L7.6323 8.59632C7.39615 8.72916 7.25 8.97904 7.25 9.25V13.75C7.25 14.021 7.39615 14.2708 7.6323 14.4037L11.6323 16.6537C11.8606 16.7821 12.1394 16.7821 12.3677 16.6537L16.3677 14.4037C16.6039 14.2708 16.75 14.021 16.75 13.75V9.25C16.75 8.97904 16.6039 8.72916 16.3677 8.59632L12.3677 6.34632ZM11.25 11.9386L8.75 10.5324V13.3114L11.25 14.7176V11.9386ZM15.25 13.3114L12.75 14.7176V11.9386L15.25 10.5324V13.3114ZM14.4702 9.25L12 10.6395L9.5298 9.25L12 7.86051L14.4702 9.25Z',
};

export const IconShieldBlockchainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-stroke-rounded IconShieldBlockchainStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShieldBlockchainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-duotone-rounded IconShieldBlockchainDuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShieldBlockchainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-twotone-rounded IconShieldBlockchainTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconShieldBlockchainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-solid-rounded IconShieldBlockchainSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShieldBlockchainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-bulk-rounded IconShieldBlockchainBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShieldBlockchainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-stroke-sharp IconShieldBlockchainStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShieldBlockchainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shield-blockchain-solid-sharp IconShieldBlockchainSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShieldBlockchain: TheIconSelfPack = {
  name: 'ShieldBlockchain',
  StrokeRounded: IconShieldBlockchainStrokeRounded,
  DuotoneRounded: IconShieldBlockchainDuotoneRounded,
  TwotoneRounded: IconShieldBlockchainTwotoneRounded,
  SolidRounded: IconShieldBlockchainSolidRounded,
  BulkRounded: IconShieldBlockchainBulkRounded,
  StrokeSharp: IconShieldBlockchainStrokeSharp,
  SolidSharp: IconShieldBlockchainSolidSharp,
};