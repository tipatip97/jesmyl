import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 7.31544C13.6569 7.31544 15 5.20251 15 2C16.1024 2.42616 17.4582 2.40398 17.4054 3.76407C17.353 5.11247 17.7915 6.82713 19.1673 8.11699C19.789 8.6999 20 8.96542 20 9.79955V16.4966C20 18.7746 20 19.9135 19.2678 20.6212C17.1917 22.6276 6.45239 22.2836 4.73223 20.6212C4 19.9135 4 18.7746 4 16.4966V9.79955C4 8.96542 4.211 8.6999 4.83274 8.11699C6.20853 6.82713 6.647 5.11247 6.59461 3.76407C6.54178 2.40398 7.89761 2.42616 9 2C9 5.20251 10.3431 7.31544 12 7.31544Z',
  d2: 'M15 2C14.2005 2.62236 13.1502 3 12 3C10.8498 3 9.79952 2.62236 9 2',
  d3: 'M8.99933 1.25C9.1543 1.24975 9.31045 1.29731 9.44413 1.39564C9.45054 1.40035 9.45686 1.40515 9.46309 1.41004C10.1283 1.92697 11.0148 2.25003 12 2.25003C12.9834 2.25003 13.8685 1.92818 14.5332 1.41294C14.547 1.40197 14.5613 1.39145 14.5759 1.38141C14.7028 1.29446 14.8512 1.24987 15.0007 1.25C15.0933 1.25015 15.1855 1.26737 15.2722 1.30103L16.9511 1.85125C17.2541 1.99157 17.5814 2.2013 17.8216 2.54487C18.0692 2.89911 18.1731 3.32189 18.1548 3.79319C18.109 4.97196 18.4948 6.4585 19.6802 7.56985C19.9827 7.85348 20.2812 8.14282 20.4779 8.50987C20.6899 8.90566 20.75 9.31978 20.75 9.79955V16.5516C20.75 17.6438 20.7501 18.5414 20.6513 19.2511C20.5476 19.997 20.3221 20.6452 19.789 21.1605C19.4207 21.5165 18.9135 21.7751 18.3729 21.9707C17.8218 22.1701 17.1785 22.3242 16.4876 22.4409C15.1053 22.6744 13.4672 22.7688 11.8563 22.7469C10.2448 22.725 8.63326 22.5863 7.30203 22.3424C6.63711 22.2206 6.02646 22.0698 5.514 21.8874C5.01907 21.7112 4.542 21.4804 4.21103 21.1605C3.67788 20.6452 3.45245 19.997 3.34868 19.2511C3.24995 18.5414 3.24997 17.6438 3.25 16.5517V16.5516V9.79955C3.25 9.31978 3.31007 8.90566 3.52212 8.50987C3.71878 8.14282 4.01725 7.85347 4.31977 7.56985C5.50516 6.4585 5.89097 4.97196 5.84518 3.79319C5.82687 3.32189 5.93081 2.89911 6.17845 2.54487C6.41862 2.2013 6.74594 1.99157 7.04892 1.85125L8.72824 1.30089C8.7526 1.29145 8.77739 1.2833 8.80251 1.27647C8.86717 1.25881 8.93336 1.25005 8.99933 1.25ZM9.84051 3.33725C9.96599 4.22127 10.2131 4.94477 10.5261 5.48011C10.9869 6.26825 11.5277 6.56544 12 6.56544C12.4723 6.56544 13.0131 6.26825 13.4739 5.48011C13.7869 4.94477 14.034 4.22128 14.1595 3.33728C13.4976 3.60346 12.766 3.75003 12 3.75003C11.2341 3.75003 10.5025 3.60345 9.84051 3.33725Z',
  d4: 'M9.42408 1.38141C9.62807 1.52125 9.75 1.75268 9.75 2C9.75 3.5063 10.0673 4.69536 10.5261 5.48011C10.9869 6.26825 11.5277 6.56544 12 6.56544C12.4723 6.56544 13.0131 6.26825 13.4739 5.48011C13.9327 4.69536 14.25 3.5063 14.25 2C14.25 1.75268 14.3719 1.52125 14.5759 1.38141C14.7799 1.24156 15.0397 1.21128 15.2704 1.30046L16.9511 1.85125C17.2541 1.99157 17.5814 2.2013 17.8216 2.54487C18.0692 2.89911 18.1731 3.32189 18.1548 3.79319C18.109 4.97196 18.4948 6.4585 19.6802 7.56985C19.9827 7.85348 20.2812 8.14282 20.4779 8.50987C20.6899 8.90566 20.75 9.31978 20.75 9.79955V16.5516C20.75 17.6438 20.7501 18.5414 20.6513 19.2511C20.5476 19.997 20.3221 20.6452 19.789 21.1605C19.4207 21.5165 18.9135 21.7751 18.3729 21.9707C17.8218 22.1701 17.1785 22.3242 16.4876 22.4409C15.1053 22.6744 13.4672 22.7688 11.8563 22.7469C10.2448 22.725 8.63326 22.5863 7.30203 22.3424C6.63711 22.2206 6.02646 22.0698 5.514 21.8874C5.01907 21.7112 4.542 21.4804 4.21103 21.1605C3.67788 20.6452 3.45245 19.997 3.34868 19.2511C3.24995 18.5414 3.24997 17.6438 3.25 16.5517V16.5516V9.79955C3.25 9.31978 3.31007 8.90566 3.52212 8.50987C3.71878 8.14282 4.01725 7.85347 4.31977 7.56985C5.50516 6.4585 5.89097 4.97196 5.84518 3.79319C5.82687 3.32189 5.93081 2.89911 6.17845 2.54487C6.41862 2.2013 6.74594 1.99157 7.04892 1.85125L8.72957 1.30046C8.96026 1.21128 9.22008 1.24156 9.42408 1.38141Z',
  d5: 'M9.44333 1.39521C9.43693 1.39052 9.43044 1.38592 9.42386 1.38141C9.29737 1.29469 9.14941 1.2501 9.00024 1.25C9.15461 1.24998 9.3101 1.29741 9.44333 1.39521Z',
  d6: 'M9.46289 1.41005C9.64331 1.55165 9.74979 1.76888 9.74979 2C9.74979 2.47873 9.78184 2.92541 9.84029 3.33725C10.5022 3.60345 11.2339 3.75004 11.9998 3.75004C12.7657 3.75004 13.4973 3.60346 14.1593 3.33728C14.2177 2.92543 14.2498 2.47874 14.2498 2C14.2498 1.77046 14.3548 1.5546 14.533 1.41295C13.8682 1.92819 12.9832 2.25003 11.9998 2.25003C11.0146 2.25003 10.1281 1.92698 9.46289 1.41005Z',
  d7: 'M14.5921 1.37051C14.7152 1.29074 14.8573 1.24987 15.0005 1.25C15.0915 1.25008 15.183 1.26672 15.2702 1.30046L15.272 1.30103C15.1853 1.26737 15.0931 1.25015 15.0005 1.25C14.8594 1.24977 14.7173 1.2892 14.5921 1.37051Z',
  d8: 'M8.72803 1.30089L8.72936 1.30046C8.75329 1.2912 8.77755 1.28323 8.80202 1.27654C8.777 1.28336 8.7523 1.29148 8.72803 1.30089Z',
  d9: 'M9.05882 2.10723C9.10269 6.48478 11.0709 7.33056 12.002 7.33056C12.9331 7.33056 14.8972 6.48478 14.9411 2.10723C14.9418 2.03609 15.0139 1.98525 15.0796 2.01223L17.4758 2.99561C17.3938 4.36716 17.7333 7.74329 19.9999 8.9778V22H12.0005H4V8.9778C6.26655 7.74329 6.60604 4.36716 6.5241 2.99561L8.92025 2.01223C8.986 1.98525 9.0581 2.03609 9.05882 2.10723Z',
  d10: 'M14.9955 2.01564C14.1967 2.63844 13.1493 3.02515 12.0001 3.02515C10.8508 3.02515 9.78372 2.62281 8.98486 2',
  d11: 'M9.42047 1.37895C9.43842 1.39111 9.45574 1.40396 9.47241 1.41748C10.1365 1.93007 11.0193 2.25003 11.9998 2.25003C12.9861 2.25003 13.8737 1.92631 14.5391 1.4083C14.5522 1.39811 14.5657 1.38832 14.5795 1.37895C14.7856 1.23943 15.0475 1.21122 15.2785 1.30365L18.25 2.49223V3C18.25 5.36991 18.8403 6.71107 19.3603 7.43907C19.6229 7.80674 19.8775 8.03222 20.0529 8.16082C20.1409 8.22539 20.2097 8.26605 20.2504 8.28813C20.2698 8.29866 20.2828 8.30494 20.2883 8.30756L20.75 8.49223V22.75H3.25V8.49223L3.71166 8.30756C3.71723 8.30495 3.7302 8.29866 3.7496 8.28813C3.79027 8.26605 3.85906 8.22539 3.9471 8.16082C4.12248 8.03222 4.37708 7.80674 4.6397 7.43907C5.1597 6.71107 5.75 5.36991 5.75 3V2.49223L8.72146 1.30365C8.95253 1.21122 9.21439 1.23943 9.42047 1.37895ZM10.5255 5.48011C10.2125 4.94479 9.96533 4.22133 9.83984 3.33737C10.5017 3.6035 11.2332 3.75004 11.9991 3.75004C12.7651 3.75004 13.4968 3.60341 14.1588 3.33716C14.0333 4.22121 13.7862 4.94475 13.4732 5.48011C13.0124 6.26825 12.4716 6.56544 11.9993 6.56544C11.527 6.56544 10.9863 6.26825 10.5255 5.48011Z',
};

export const IconSleevelessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-stroke-rounded IconSleevelessStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSleevelessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-duotone-rounded IconSleevelessDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSleevelessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-twotone-rounded IconSleevelessTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSleevelessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-solid-rounded IconSleevelessSolidRounded"
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

export const IconSleevelessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-bulk-rounded IconSleevelessBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSleevelessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-stroke-sharp IconSleevelessStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSleevelessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeveless-solid-sharp IconSleevelessSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSleeveless: TheIconSelfPack = {
  name: 'Sleeveless',
  StrokeRounded: IconSleevelessStrokeRounded,
  DuotoneRounded: IconSleevelessDuotoneRounded,
  TwotoneRounded: IconSleevelessTwotoneRounded,
  SolidRounded: IconSleevelessSolidRounded,
  BulkRounded: IconSleevelessBulkRounded,
  StrokeSharp: IconSleevelessStrokeSharp,
  SolidSharp: IconSleevelessSolidSharp,
};