import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z',
  d2: 'M12 5C8.13401 5 5 8.134 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z',
  d3: 'M12 2V5',
  d4: 'M12 19V22',
  d5: 'M3.33984 7L5.93792 8.5',
  d6: 'M18.0625 15.5L20.6606 17',
  d7: 'M20.6602 7L18.0621 8.5',
  d8: 'M5.9375 15.5L3.33942 17',
  d9: 'M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5',
  d10: 'M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z',
  d11: 'M11.9999 5C8.13394 5 4.99993 8.134 4.99993 12C4.99993 15.866 8.13394 19 11.9999 19M11.9999 5C15.8659 5 18.9999 8.134 18.9999 12C18.9999 15.866 15.8659 19 11.9999 19M11.9999 5L11.9999 2M11.9999 19L11.9999 22M3.33968 7L5.93775 8.5M18.0624 15.5L20.6605 17M20.6602 7L18.0621 8.5M5.93743 15.5L3.33936 17',
  d12: 'M11.2499 1.25008C7.85174 1.48501 4.88802 3.30301 3.08743 5.97367L5.69461 7.48254C6.96363 5.70584 8.9614 4.48776 11.2499 4.26736V1.25008Z',
  d13: 'M2.33626 7.27515C1.64081 8.70178 1.25049 10.3052 1.25049 12C1.25049 13.6948 1.64081 15.2982 2.33626 16.7248L4.94348 15.216C4.49831 14.236 4.25031 13.147 4.25031 12C4.25031 10.853 4.49831 9.764 4.94348 8.78403L2.33626 7.27515Z',
  d14: 'M3.08742 18.0263C4.88801 20.697 7.85174 22.515 11.2499 22.7499V19.7326C8.9614 19.5122 6.96363 18.2942 5.69461 16.5175L3.08742 18.0263Z',
  d15: 'M12.7499 22.75C16.1485 22.5154 19.1127 20.6973 20.9135 18.0264L18.306 16.5174C17.0369 18.2943 15.0388 19.5125 12.7499 19.7327V22.75Z',
  d16: 'M21.6647 16.725C22.3601 15.2983 22.7505 13.6948 22.7505 12C22.7505 10.3052 22.3601 8.70169 21.6647 7.27503L19.0572 8.78407C19.5023 9.76403 19.7503 10.853 19.7503 12C19.7503 13.147 19.5023 14.236 19.0572 15.2159L21.6647 16.725Z',
  d17: 'M20.9135 5.97356C19.1127 3.30266 16.1485 1.4846 12.7499 1.25V4.26728C15.0388 4.48749 17.0369 5.70565 18.306 7.48257L20.9135 5.97356Z',
  d18: 'M18.2505 12C18.2505 15.4518 15.4523 18.25 12.0005 18.25C8.54871 18.25 5.75049 15.4518 5.75049 12C5.75049 8.54822 8.54871 5.75 12.0005 5.75C15.4523 5.75 18.2505 8.54822 18.2505 12ZM12.7505 8C12.7505 7.58579 12.4147 7.25 12.0005 7.25C11.5863 7.25 11.2505 7.58579 11.2505 8V8.58333H9.50049C9.08627 8.58333 8.75049 8.91912 8.75049 9.33333C8.75049 9.74755 9.08627 10.0833 9.50049 10.0833H9.68799L9.68799 13.9167H9.50049C9.08627 13.9167 8.75049 14.2525 8.75049 14.6667C8.75049 15.0809 9.08627 15.4167 9.50049 15.4167H11.2505V16C11.2505 16.4142 11.5863 16.75 12.0005 16.75C12.4147 16.75 12.7505 16.4142 12.7505 16V15.4167H13.563C14.5398 15.4167 15.2505 14.5868 15.2505 13.6667V13C15.2505 12.6376 15.1403 12.2892 14.9469 12C15.1403 11.7108 15.2505 11.3624 15.2505 11V10.3333C15.2505 9.41317 14.5398 8.58333 13.563 8.58333H12.7505V8ZM11.188 11.25V10.0833H13.563C13.6217 10.0833 13.7505 10.1489 13.7505 10.3333V11C13.7505 11.1844 13.6217 11.25 13.563 11.25H11.188ZM11.188 12.75H13.563C13.6217 12.75 13.7505 12.8156 13.7505 13V13.6667C13.7505 13.8511 13.6217 13.9167 13.563 13.9167H11.188V12.75Z',
  d19: 'M11.2499 1.25C7.85173 1.48493 4.888 3.30293 3.08741 5.97359L5.6946 7.48246C6.96362 5.70576 8.96138 4.48768 11.2499 4.26728V1.25Z',
  d20: 'M3.0874 18.0262C4.88799 20.6969 7.85172 22.5149 11.2499 22.7498V19.7326C8.96138 19.5121 6.96361 18.2941 5.69459 16.5174L3.0874 18.0262Z',
  d21: 'M21.6646 16.7249C22.3601 15.2982 22.7505 13.6948 22.7505 11.9999C22.7505 10.3051 22.3601 8.70161 21.6646 7.27495L19.0571 8.78399C19.5023 9.76395 19.7503 10.8529 19.7503 11.9999C19.7503 13.1469 19.5023 14.2359 19.0571 15.2158L21.6646 16.7249Z',
  d22: 'M12.0005 18.25C15.4523 18.25 18.2505 15.4518 18.2505 12C18.2505 8.54822 15.4523 5.75 12.0005 5.75C8.54871 5.75 5.75049 8.54822 5.75049 12C5.75049 15.4518 8.54871 18.25 12.0005 18.25Z',
  d23: 'M12.0005 7.25C12.4147 7.25 12.7505 7.58579 12.7505 8V8.58333H13.563C14.5398 8.58333 15.2505 9.41317 15.2505 10.3333V11C15.2505 11.3624 15.1403 11.7108 14.9469 12C15.1403 12.2892 15.2505 12.6376 15.2505 13V13.6667C15.2505 14.5868 14.5398 15.4167 13.563 15.4167H12.7505V16C12.7505 16.4142 12.4147 16.75 12.0005 16.75C11.5863 16.75 11.2505 16.4142 11.2505 16V15.4167H9.50049C9.08627 15.4167 8.75049 15.0809 8.75049 14.6667C8.75049 14.2525 9.08627 13.9167 9.50049 13.9167H9.68799L9.68799 10.0833H9.50049C9.08627 10.0833 8.75049 9.74755 8.75049 9.33333C8.75049 8.91912 9.08627 8.58333 9.50049 8.58333H11.2505V8C11.2505 7.58579 11.5863 7.25 12.0005 7.25ZM11.188 10.0833V11.25H13.563C13.6217 11.25 13.7505 11.1844 13.7505 11V10.3333C13.7505 10.1489 13.6217 10.0833 13.563 10.0833H11.188ZM13.563 12.75H11.188L11.188 13.9167H13.563C13.6217 13.9167 13.7505 13.8511 13.7505 13.6667V13C13.7505 12.8156 13.6217 12.75 13.563 12.75Z',
  d24: 'M11.2499 1.24959C7.85174 1.48452 4.88802 3.30252 3.08743 5.97318L5.69461 7.48205C6.96363 5.70535 8.9614 4.48728 11.2499 4.26687V1.24959Z',
  d25: 'M2.33626 7.27466C1.64081 8.70129 1.25049 10.3047 1.25049 11.9995C1.25049 13.6943 1.64081 15.2977 2.33626 16.7244L4.94348 15.2155C4.49831 14.2355 4.25031 13.1465 4.25031 11.9995C4.25031 10.8525 4.49831 9.76351 4.94348 8.78354L2.33626 7.27466Z',
  d26: 'M3.08742 18.0258C4.88801 20.6965 7.85174 22.5145 11.2499 22.7494V19.7321C8.9614 19.5117 6.96363 18.2937 5.69461 16.517L3.08742 18.0258Z',
  d27: 'M12.7499 22.7495C16.1485 22.5149 19.1127 20.6968 20.9135 18.0259L18.306 16.5169C17.0369 18.2939 15.0388 19.512 12.7499 19.7322V22.7495Z',
  d28: 'M21.6647 16.7245C22.3601 15.2978 22.7505 13.6944 22.7505 11.9995C22.7505 10.3047 22.3601 8.7012 21.6647 7.27454L19.0572 8.78359C19.5023 9.76354 19.7503 10.8525 19.7503 11.9995C19.7503 13.1465 19.5023 14.2355 19.0572 15.2154L21.6647 16.7245Z',
  d29: 'M20.9135 5.97307C19.1127 3.30217 16.1485 1.48411 12.7499 1.24951V4.26679C15.0388 4.487 17.0369 5.70516 18.306 7.48208L20.9135 5.97307Z',
  d30: 'M18.2505 11.9995C18.2505 15.4513 15.4523 18.2495 12.0005 18.2495C8.54871 18.2495 5.75049 15.4513 5.75049 11.9995C5.75049 8.54773 8.54871 5.74951 12.0005 5.74951C15.4523 5.74951 18.2505 8.54773 18.2505 11.9995ZM12.7505 8.58285V7.24951H11.2505V8.58285H8.75049V10.0828H9.68799L9.68799 13.9162H8.75049V15.4162H11.2505V16.7495H12.7505V15.4162H13.563C14.5398 15.4162 15.2505 14.5863 15.2505 13.6662V12.9995C15.2505 12.6371 15.1403 12.2887 14.9469 11.9995C15.1403 11.7103 15.2505 11.3619 15.2505 10.9995V10.3328C15.2505 9.41268 14.5398 8.58285 13.563 8.58285H12.7505ZM11.188 11.2495V10.0828H13.563C13.6217 10.0828 13.7505 10.1484 13.7505 10.3328V10.9995C13.7505 11.1839 13.6217 11.2495 13.563 11.2495H11.188ZM11.188 12.7495H13.563C13.6217 12.7495 13.7505 12.8151 13.7505 12.9995V13.6662C13.7505 13.8506 13.6217 13.9162 13.563 13.9162H11.188L11.188 12.7495Z',
};

export const IconBitcoin01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-stroke-rounded IconBitcoin01StrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-duotone-rounded IconBitcoin01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-twotone-rounded IconBitcoin01TwotoneRounded"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-solid-rounded IconBitcoin01SolidRounded"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-bulk-rounded IconBitcoin01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-stroke-sharp IconBitcoin01StrokeSharp"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-01-solid-sharp IconBitcoin01SolidSharp"
    >
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoin01: TheIconSelfPack = {
  name: 'Bitcoin01',
  StrokeRounded: IconBitcoin01StrokeRounded,
  DuotoneRounded: IconBitcoin01DuotoneRounded,
  TwotoneRounded: IconBitcoin01TwotoneRounded,
  SolidRounded: IconBitcoin01SolidRounded,
  BulkRounded: IconBitcoin01BulkRounded,
  StrokeSharp: IconBitcoin01StrokeSharp,
  SolidSharp: IconBitcoin01SolidSharp,
};