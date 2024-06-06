import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 19L8.76762 6.62668C8.88311 5.81824 8.94085 5.41402 9.10135 5.04395C9.26184 4.67389 9.51749 4.35549 10.0288 3.71871L10.5858 3.02497C11.2524 2.34166 11.5858 2 12 2C12.4142 2 12.7475 2.34166 13.4142 3.02497L13.9712 3.71871C14.4825 4.35549 14.7382 4.67389 14.8987 5.04395C15.0591 5.41402 15.1169 5.81825 15.2324 6.62668L17 19',
  d2: 'M3 22H21',
  d3: 'M20 22L19.7812 21.6718C18.9093 20.3639 18.4733 19.71 17.81 19.355C17.1467 19 16.3608 19 14.7889 19H9.2111C7.63921 19 6.85326 19 6.18998 19.355C5.5267 19.71 5.09073 20.3639 4.2188 21.6718L4 22',
  d4: 'M9 6H15',
  d5: 'M12 19L12 13',
  d6: 'M7.32612 16.7172L8.85714 6H15.1429L16.6739 16.7172C16.8256 17.7793 16.9015 18.3104 16.6024 18.6552C16.3034 19 15.7669 19 14.694 19H9.30602C8.23307 19 7.6966 19 7.39756 18.6552C7.09851 18.3104 7.17438 17.7793 7.32612 16.7172Z',
  d7: 'M7 19L8.76762 6.62668C8.88311 5.81824 8.94085 5.41402 9.10135 5.04395C9.26184 4.67389 9.51749 4.35549 10.0288 3.71871L10.5858 3.02497C11.2525 2.34166 11.5858 2 12 2C12.4142 2 12.7475 2.34166 13.4142 3.02497L13.9712 3.71871C14.4825 4.35549 14.7382 4.67389 14.8987 5.04395C15.0591 5.41402 15.1169 5.81824 15.2324 6.62668L17 19',
  d8: 'M14.8304 18.75H9.17025C8.41218 18.75 7.79188 18.75 7.2799 18.7923C6.74458 18.8366 6.27367 18.9303 5.82253 19.1444C5.37139 19.3585 5.02228 19.6541 4.68381 20.0245C4.53972 20.1822 4.04831 21.013 3.62061 21.726C3.33271 22.2059 3.18876 22.4458 3.27515 22.5979C3.36154 22.7499 3.63781 22.7499 4.19037 22.7499H19.8101C20.3627 22.7499 20.6389 22.7499 20.7253 22.5979C20.8117 22.4458 20.6678 22.2059 20.3799 21.7259C19.9523 21.013 19.4609 20.1822 19.3168 20.0245C18.9784 19.6541 18.6292 19.3585 18.1781 19.1444C17.727 18.9303 17.2561 18.8366 16.7207 18.7923C16.2087 18.75 15.5885 18.75 14.8304 18.75Z',
  d9: 'M12.0011 13C12.5534 13 13.0011 13.4477 13.0011 14V16.65C13.0011 16.9328 13.0011 17.0743 13.089 17.1621C13.1769 17.25 13.3183 17.25 13.6011 17.25H16.8167C17.1386 17.25 17.2996 17.25 17.3893 17.1466C17.479 17.0431 17.4562 16.8838 17.4107 16.5651L16.0576 7.09343C16.0342 6.92969 16.0225 6.84782 15.9661 6.79891C15.9097 6.75 15.827 6.75 15.6616 6.75H8.34023C8.17482 6.75 8.09212 6.75 8.03573 6.79891C7.97934 6.84782 7.96764 6.92969 7.94425 7.09343L6.59115 16.5651C6.54562 16.8838 6.52286 17.0431 6.61258 17.1466C6.70229 17.25 6.86323 17.25 7.18512 17.25H10.4011C10.684 17.25 10.8254 17.25 10.9133 17.1621C11.0011 17.0743 11.0011 16.9328 11.0011 16.65L11.0011 14C11.0011 13.4477 11.4488 13 12.0011 13Z',
  d10: 'M8.68713 5.25C8.45428 5.25 8.33786 5.25 8.27821 5.16385C8.21856 5.07769 8.25467 4.98168 8.32687 4.78965C8.33573 4.76607 8.34511 4.74289 8.35508 4.7199C8.46207 4.47319 8.6325 4.26093 8.97336 3.83641L10.0246 2.52716C10.3307 2.21336 10.6678 1.86776 10.9265 1.66545C11.2105 1.4433 11.5581 1.25 12.0009 1.25C12.4437 1.25 12.7913 1.4433 13.0754 1.66545C13.3341 1.86776 13.6712 2.21336 13.9773 2.52716L15.0285 3.83645C15.3694 4.26094 15.5398 4.4732 15.6468 4.7199C15.6567 4.74289 15.6661 4.76607 15.675 4.78965C15.7472 4.98168 15.7833 5.07769 15.7236 5.16385C15.664 5.25 15.5476 5.25 15.3147 5.25H8.68713Z',
  d11: 'M14.8303 18.75H9.17013C8.41206 18.75 7.79176 18.75 7.27978 18.7923C6.74446 18.8366 6.27355 18.9303 5.82241 19.1444C5.37127 19.3585 5.02216 19.6541 4.68369 20.0245C4.5396 20.1822 4.04819 21.013 3.62049 21.726C3.33259 22.2059 3.18863 22.4458 3.27502 22.5979C3.36142 22.7499 3.63769 22.7499 4.19024 22.7499H19.81C20.3625 22.7499 20.6388 22.7499 20.7252 22.5979C20.8116 22.4458 20.6677 22.2059 20.3798 21.7259C19.9521 21.013 19.4608 20.1822 19.3167 20.0245C18.9782 19.6541 18.6291 19.3585 18.178 19.1444C17.7268 18.9303 17.2559 18.8366 16.7206 18.7923C16.2086 18.75 15.5883 18.75 14.8303 18.75Z',
  d12: 'M8.76321 5.25C8.58791 5.25 8.50025 5.25 8.42914 5.20747C8.36011 5.16618 8.29605 5.06858 8.28564 4.98883C8.27492 4.90666 8.30192 4.84441 8.35591 4.7199C8.46291 4.47319 8.63334 4.26093 8.9742 3.83641L10.0254 2.52716C10.3315 2.21336 10.6686 1.86776 10.9273 1.66545C11.2114 1.4433 11.559 1.25 12.0018 1.25C12.4445 1.25 12.7922 1.4433 13.0762 1.66545C13.3349 1.86776 13.672 2.21336 13.9781 2.52716L15.0294 3.83645C15.3702 4.26094 15.5406 4.4732 15.6476 4.7199C15.7016 4.84441 15.7286 4.90666 15.7179 4.98883C15.7075 5.06858 15.6434 5.16618 15.5744 5.20747C15.5033 5.25 15.4156 5.25 15.2403 5.25H8.76321Z',
  d13: 'M12.0009 13C12.5532 13 13.0009 13.4477 13.0009 14V16.65C13.0009 16.9328 13.0009 17.0743 13.0887 17.1621C13.1766 17.25 13.318 17.25 13.6009 17.25H16.8165C17.1384 17.25 17.2993 17.25 17.389 17.1466C17.4787 17.0431 17.456 16.8838 17.4105 16.5651L16.0819 7.26515C16.0468 7.01953 16.0293 6.89673 15.9447 6.82336C15.8601 6.75 15.736 6.75 15.4879 6.75H8.51344C8.26534 6.75 8.14128 6.75 8.05669 6.82336C7.9721 6.89673 7.95456 7.01953 7.91947 7.26515L6.5909 16.5651C6.54538 16.8838 6.52262 17.0431 6.61233 17.1466C6.70205 17.25 6.86299 17.25 7.18487 17.25H10.4009C10.6837 17.25 10.8251 17.25 10.913 17.1621C11.0009 17.0743 11.0009 16.9328 11.0009 16.65L11.0009 14C11.0009 13.4477 11.4486 13 12.0009 13Z',
  d14: 'M2 21.999H22',
  d15: 'M20 21.9989L19 19.0015H5L4 21.9989',
  d16: 'M9 6.01221H15',
  d17: 'M12 19.0012V13.0063',
  d18: 'M7.08496 18.7058L9.01127 5.41596L11.9266 2.00448C11.9305 1.99991 11.9376 1.99979 11.9416 2.00424L15.0491 5.41596L16.9867 18.7058',
  d19: 'M2 22.75H22V21.25H20.5411L19.5411 18.25H4.46001L3.46 21.25H2V22.75Z',
  d20: 'M8.05758 6.75L6.53906 17H11.0009L11.0009 13H13.0009L13.0009 17H17.4628L15.9443 6.75H8.05758Z',
  d21: 'M8.2798 5.25L8.29075 5.17613L11.4315 1.51191C11.574 1.34567 11.782 1.25 12.001 1.25C12.2199 1.25 12.4279 1.34567 12.5704 1.51191L15.7112 5.17613L15.7221 5.25H8.2798Z',
};

export const IconWashingtonMonumentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-stroke-rounded IconWashingtonMonumentStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWashingtonMonumentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-duotone-rounded IconWashingtonMonumentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconWashingtonMonumentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-twotone-rounded IconWashingtonMonumentTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWashingtonMonumentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-solid-rounded IconWashingtonMonumentSolidRounded"
    >
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

export const IconWashingtonMonumentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-bulk-rounded IconWashingtonMonumentBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWashingtonMonumentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-stroke-sharp IconWashingtonMonumentStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWashingtonMonumentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="washington-monument-solid-sharp IconWashingtonMonumentSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfWashingtonMonument: TheIconSelfPack = {
  name: 'WashingtonMonument',
  StrokeRounded: IconWashingtonMonumentStrokeRounded,
  DuotoneRounded: IconWashingtonMonumentDuotoneRounded,
  TwotoneRounded: IconWashingtonMonumentTwotoneRounded,
  SolidRounded: IconWashingtonMonumentSolidRounded,
  BulkRounded: IconWashingtonMonumentBulkRounded,
  StrokeSharp: IconWashingtonMonumentStrokeSharp,
  SolidSharp: IconWashingtonMonumentSolidSharp,
};