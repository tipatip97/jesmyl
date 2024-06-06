import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.0029 2H10.0062C6.72443 2 5.08355 2 3.92039 2.81382C3.49006 3.1149 3.11577 3.48891 2.81445 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81445 16.0811C3.11577 16.5111 3.49006 16.8851 3.92039 17.1862C5.08355 18 6.72443 18 10.0062 18H14.0093C17.2911 18 18.932 18 20.0951 17.1862C20.5254 16.8851 20.8997 16.5111 21.2011 16.0811C21.8156 15.2042 21.9663 14.0941 22 13',
  d2: 'M18 9.71428V11M18 9.71428C16.8432 9.71428 15.8241 9.14608 15.2263 8.28331M18 9.71428C19.1568 9.71428 20.1759 9.14608 20.7737 8.28331M18 3.28571C19.1569 3.28571 20.1761 3.854 20.7738 4.71688M18 3.28571C16.8431 3.28571 15.8239 3.854 15.2262 4.71688M18 3.28571V2M22 3.92857L20.7738 4.71688M14.0004 9.07143L15.2263 8.28331M14 3.92857L15.2262 4.71688M21.9996 9.07143L20.7737 8.28331M20.7738 4.71688C21.1273 5.22711 21.3333 5.84035 21.3333 6.5C21.3333 7.15973 21.1272 7.77304 20.7737 8.28331M15.2262 4.71688C14.8727 5.22711 14.6667 5.84035 14.6667 6.5C14.6667 7.15973 14.8728 7.77304 15.2263 8.28331',
  d3: 'M11 15H13',
  d4: 'M12 18V22',
  d5: 'M8 22H16',
  d6: 'M10 2H14C17.2792 2 18.9188 2 20.0811 2.81382C20.5111 3.1149 20.8851 3.48891 21.1862 3.91891C22 5.08116 22 6.72077 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2ZM17.9993 3.28516C19.1562 3.28516 20.1754 3.85345 20.7732 4.71632C21.1266 5.22655 21.3327 5.83979 21.3327 6.49944C21.3327 7.15917 21.1266 7.77248 20.773 8.28275C20.1753 9.14552 19.1561 9.71373 17.9993 9.71373C16.8426 9.71373 15.8234 9.14552 15.2257 8.28275C14.8721 7.77248 14.666 7.15917 14.666 6.49944C14.666 5.83979 14.8721 5.22655 15.2255 4.71632C15.8233 3.85345 16.8425 3.28516 17.9993 3.28516Z',
  d7: 'M18.0001 1C18.5524 1 19.0001 1.44772 19.0001 2V2.39864C19.7405 2.56884 20.4099 2.92409 20.9513 3.41399L21.4593 3.08741C21.9239 2.78874 22.5426 2.92323 22.8413 3.38779C23.14 3.85236 23.0055 4.47107 22.5409 4.76974L22.0767 5.06817C22.2426 5.51495 22.3335 5.99727 22.3335 6.5C22.3335 7.00281 22.2426 7.48521 22.0766 7.93205L22.5405 8.23026C23.005 8.52893 23.1395 9.14764 22.8409 9.61221C22.5422 10.0768 21.9235 10.2113 21.4589 9.91259L20.9512 9.58617C20.4097 10.076 19.7404 10.4312 19.0001 10.6014V11C19.0001 11.5523 18.5524 12 18.0001 12C17.4478 12 17.0001 11.5523 17.0001 11V10.6014C16.2598 10.4312 15.5905 10.076 15.0491 9.58617L14.5413 9.91259C14.0768 10.2113 13.458 10.0768 13.1594 9.61221C12.8607 9.14764 12.9952 8.52893 13.4598 8.23026L13.9236 7.93205C13.7577 7.48521 13.6668 7.00281 13.6668 6.5C13.6668 5.99727 13.7576 5.51495 13.9236 5.06817L13.4593 4.76974C12.9948 4.47107 12.8603 3.85236 13.159 3.38779C13.4576 2.92323 14.0763 2.78874 14.5409 3.08741L15.0489 3.41399C15.5904 2.92409 16.2597 2.56884 17.0001 2.39864V2C17.0001 1.44772 17.4478 1 18.0001 1ZM18.0001 4.28571C17.1753 4.28571 16.4615 4.68984 16.0483 5.28631C15.8057 5.63659 15.6668 6.05259 15.6668 6.5C15.6668 6.94747 15.8057 7.36351 16.0484 7.71382C16.4616 8.31022 17.1753 8.71428 18.0001 8.71428C18.8249 8.71428 19.5386 8.31022 19.9518 7.71382C20.1945 7.36351 20.3335 6.94747 20.3335 6.5C20.3335 6.05259 20.1945 5.6366 19.9519 5.28631C19.5387 4.68984 18.825 4.28571 18.0001 4.28571Z',
  d8: 'M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z',
  d9: 'M9.94952 1L11.0029 1C11.5552 1 12.0029 1.44772 12.0029 2C12.0029 2.55229 11.5552 3 11.0029 3H10.0062C8.34371 3 7.17486 3.0013 6.27356 3.09623C5.39003 3.18929 4.87947 3.36325 4.49367 3.63318C4.15889 3.86741 3.86775 4.15834 3.63339 4.49278C3.36341 4.87806 3.18939 5.38789 3.09629 6.27049C3.0013 7.17094 3 8.33875 3 10C3 11.6613 3.0013 12.8291 3.09629 13.7295C3.18939 14.6121 3.36341 15.1219 3.63339 15.5072C3.86775 15.8417 4.15889 16.1326 4.49367 16.3668C4.87947 16.6368 5.39003 16.8107 6.27356 16.9038C7.17486 16.9987 8.34371 17 10.0062 17H14.0093C15.6718 17 16.8407 16.9987 17.7419 16.9038C18.6255 16.8107 19.136 16.6368 19.5218 16.3668C19.8566 16.1326 20.1478 15.8417 20.3821 15.5072C20.8194 14.8832 20.9679 14.0273 21.0005 12.9692C21.0175 12.4172 21.4787 11.9835 22.0308 12.0005C22.5828 12.0175 23.0165 12.4787 22.9995 13.0308C22.9647 14.1609 22.8117 15.5252 22.02 16.655C21.6517 17.1805 21.1943 17.6376 20.6684 18.0055C19.891 18.5494 18.9996 18.7824 17.9514 18.8928C16.9331 19 15.6588 19 14.066 19H13.4C13.0229 19 13 19.0229 13 19.4V20C13 20.8273 13.1727 21 14 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H10C10.8273 21 11 20.8273 11 20V19.4C11 19.0229 10.9771 19 10.6 19H9.9495C8.35672 19 7.08239 19 6.06407 18.8928C5.01593 18.7824 4.12447 18.5494 3.34712 18.0055C2.82123 17.6376 2.36379 17.1805 1.9955 16.655C1.45104 15.878 1.21783 14.9869 1.10732 13.9393C0.999973 12.9217 0.999985 11.6482 1 10.0568V9.94324C0.999985 8.35178 0.999973 7.07834 1.10732 6.06068C1.21783 5.01311 1.45104 4.12201 1.9955 3.34503C2.36379 2.81948 2.82123 2.3624 3.34712 1.99446C4.12447 1.45057 5.01593 1.21762 6.06407 1.10723C7.0824 0.999973 8.35673 0.999985 9.94952 1Z',
  d10: 'M22 13V18H2V3H11',
  d11: 'M17.5 10.2143V12M17.5 10.2143C16.3432 10.2143 15.3241 9.64608 14.7263 8.78331M17.5 10.2143C18.6568 10.2143 19.6759 9.64608 20.2737 8.78331M14.7263 8.78331L13 10M14.7263 8.78331C14.3728 8.27304 14.1667 7.65973 14.1667 7C14.1667 6.34035 14.3727 5.72711 14.7262 5.21688M20.2737 8.78331L22 10M20.2737 8.78331C20.6272 8.27304 20.8333 7.65973 20.8333 7C20.8333 6.34035 20.6273 5.72711 20.2738 5.21688M17.5 3.78571C18.6569 3.78571 19.6761 4.354 20.2738 5.21688M17.5 3.78571C16.3431 3.78571 15.3239 4.354 14.7262 5.21688M17.5 3.78571V2M20.2738 5.21688L22 4M14.7262 5.21688L13 4',
  d12: 'M10.5 15H13.5',
  d13: 'M12 18.001V21.9996M12 21.9996H8M12 21.9996H16',
  d14: 'M17.0643 2.1037C16.3836 2.26257 15.767 2.59114 15.2651 3.044L14.3283 2.37354L13.25 3.92646L14.1982 4.6051C14.0348 5.03922 13.9451 5.50938 13.9451 6C13.9451 6.49067 14.0348 6.96087 14.1983 7.39502L13.2501 8.07348L14.3282 9.62652L15.2652 8.95609C15.7671 9.4089 16.3836 9.73744 17.0643 9.89629V10.75H18.9357V9.89629C19.6164 9.73744 20.2329 9.4089 20.7348 8.95609L21.6718 9.62652L22.7499 8.07348L21.8017 7.39502C21.9652 6.96087 22.0549 6.49067 22.0549 6C22.0549 5.50938 21.9652 5.03922 21.8018 4.6051L22.75 3.92646L21.6717 2.37354L20.7349 3.044C20.233 2.59114 19.6164 2.26257 18.9357 2.1037V1.25H17.0643V2.1037ZM18 3.89643C17.2281 3.89643 16.5603 4.28035 16.1736 4.847C15.9466 5.17977 15.8166 5.57496 15.8166 6C15.8166 6.42509 15.9466 6.82033 16.1737 7.15312C16.5604 7.71971 17.2282 8.10357 18 8.10357C18.7718 8.10357 19.4396 7.71971 19.8263 7.15312C20.0534 6.82033 20.1834 6.42509 20.1834 6C20.1834 5.57496 20.0534 5.17977 19.8264 4.847C19.4397 4.28035 18.7719 3.89643 18 3.89643Z',
  d15: 'M13.5 15.25H10.5V13.25H13.5V15.25Z',
  d16: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H21.7727C22.3125 18.75 22.75 18.3147 22.75 17.7778V13L20.7955 13V16.8056H3.20455V3.19444H11L11 1.25H2.22727Z',
};

export const IconComputerSettingsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-stroke-rounded IconComputerSettingsStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconComputerSettingsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-duotone-rounded IconComputerSettingsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconComputerSettingsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-twotone-rounded IconComputerSettingsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconComputerSettingsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-solid-rounded IconComputerSettingsSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerSettingsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-bulk-rounded IconComputerSettingsBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerSettingsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-stroke-sharp IconComputerSettingsStrokeSharp"
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

export const IconComputerSettingsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-settings-solid-sharp IconComputerSettingsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfComputerSettings: TheIconSelfPack = {
  name: 'ComputerSettings',
  StrokeRounded: IconComputerSettingsStrokeRounded,
  DuotoneRounded: IconComputerSettingsDuotoneRounded,
  TwotoneRounded: IconComputerSettingsTwotoneRounded,
  SolidRounded: IconComputerSettingsSolidRounded,
  BulkRounded: IconComputerSettingsBulkRounded,
  StrokeSharp: IconComputerSettingsStrokeSharp,
  SolidSharp: IconComputerSettingsSolidSharp,
};