import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5126 10.7306L15.1758 18.009C13.7137 20.003 12.9827 21 12 21C11.0173 21 10.2863 20.003 8.82421 18.009L3.48742 10.7306C2.40801 9.25847 1.86831 8.52241 2.02741 7.57659C2.18651 6.63078 2.81754 6.2161 4.07962 5.38675C6.38289 3.87318 9.0958 3 12 3C14.9042 3 17.6171 3.87318 19.9204 5.38675C21.1825 6.2161 21.8135 6.63078 21.9726 7.57659C22.1317 8.52241 21.592 9.25847 20.5126 10.7306Z',
  d2: 'M19 14C14.6871 11.3333 9.31293 11.3333 5 14',
  d3: 'M21 11C15.4548 7 8.54519 7 3 11',
  d4: 'M16 17C13.465 15.6667 10.535 15.6667 8 17',
  d5: 'M19.9204 5.38675C17.6171 3.87318 14.9042 3 12 3C9.0958 3 6.38289 3.87318 4.07962 5.38675C2.81754 6.2161 2.18651 6.63078 2.02741 7.57659C1.86831 8.52241 2.40801 9.25847 3.48742 10.7306L8 17C10.535 15.6667 13.465 15.6667 16 17L20.5126 10.7306C21.592 9.25847 22.1317 8.52241 21.9726 7.57659C21.8135 6.63078 21.1825 6.2161 19.9204 5.38675Z',
  d6: 'M11.9999 17.5C13.3197 17.5 14.5873 17.6774 15.5904 17.9983C15.7398 18.0461 15.8146 18.07 15.8533 18.1263C15.8745 18.1571 15.8875 18.1972 15.8885 18.2346C15.8902 18.3029 15.8419 18.3689 15.7451 18.5008C15.0442 19.4567 14.4699 20.2401 13.9438 20.7771C13.3987 21.3335 12.7878 21.75 11.9999 21.75C11.212 21.75 10.6011 21.3335 10.0561 20.7771C9.52999 20.2401 8.95559 19.4567 8.25468 18.5007C8.15798 18.3688 8.10963 18.3029 8.11135 18.2346C8.1123 18.1972 8.12532 18.1571 8.14658 18.1262C8.18531 18.07 8.26001 18.0461 8.4094 17.9983L8.4094 17.9983C9.41245 17.6774 10.6801 17.5 11.9999 17.5Z',
  d7: 'M18.191 14.4101C14.5022 12.53 9.49886 12.53 5.81003 14.4101C5.62588 14.5039 5.53381 14.5509 5.51243 14.6408C5.49104 14.7308 5.55372 14.8162 5.67906 14.9872L6.58674 16.2251C6.6792 16.3512 6.72542 16.4142 6.7923 16.4328C6.85918 16.4513 6.93402 16.4198 7.08369 16.3569C8.48837 15.7667 10.2812 15.5 12.0005 15.5C13.7198 15.5 15.5127 15.7667 16.9174 16.357C17.0671 16.4199 17.1419 16.4513 17.2088 16.4328C17.2757 16.4143 17.3219 16.3512 17.4143 16.2251L18.322 14.9872C18.4474 14.8163 18.51 14.7308 18.4886 14.6409C18.4673 14.5509 18.3752 14.504 18.191 14.4101Z',
  d8: 'M4.0088 12.709L3.50176 12.0175C3.38727 11.8613 3.33003 11.7833 3.34528 11.6988C3.36053 11.6142 3.43993 11.5621 3.59874 11.4578C8.58898 8.18071 15.4125 8.18073 20.4027 11.4579C20.5615 11.5621 20.6409 11.6143 20.6562 11.6988C20.6714 11.7833 20.6142 11.8614 20.4997 12.0175L19.9927 12.709C19.8918 12.8466 19.8414 12.9154 19.7678 12.9317C19.6943 12.9479 19.6179 12.9059 19.4652 12.822C15.0472 10.3927 8.95431 10.3927 4.53627 12.8219C4.38356 12.9059 4.3072 12.9479 4.23365 12.9316C4.1601 12.9153 4.10967 12.8466 4.0088 12.709Z',
  d9: 'M12.0001 2.25C8.94247 2.25 6.0874 3.16996 3.66779 4.75997L3.52149 4.85593C2.4043 5.58798 1.50199 6.17924 1.28786 7.45218C1.17434 8.127 1.3245 8.71261 1.626 9.29912C1.69672 9.43667 1.77765 9.57769 1.86747 9.723C1.96589 9.88223 2.0151 9.96184 2.09792 9.97995C2.18074 9.99806 2.26249 9.94374 2.42597 9.83509C8.11391 6.05496 15.8862 6.05497 21.5741 9.83514C21.7376 9.94379 21.8193 9.99812 21.9022 9.98001C21.985 9.9619 22.0342 9.88228 22.1326 9.72306C22.2224 9.57772 22.3034 9.43669 22.3741 9.29912C22.6756 8.71261 22.8258 8.127 22.7123 7.45218C22.4981 6.17924 21.5958 5.58798 20.4786 4.85593L20.3323 4.75997C17.9127 3.16996 15.0576 2.25 12.0001 2.25Z',
  d10: 'M12 21L11.3927 21.4401C11.5338 21.6348 11.7596 21.75 12 21.75C12.2404 21.75 12.4662 21.6348 12.6073 21.4401L12 21ZM22 7.20203L22.6073 7.64216C22.8219 7.34604 22.7916 6.93831 22.5357 6.67711L22 7.20203ZM2 7.20203L1.46432 6.67711C1.20836 6.93831 1.17811 7.34604 1.39272 7.64216L2 7.20203ZM12 3.75C15.7077 3.75 19.0585 5.27188 21.4643 7.72696L22.5357 6.67711C19.8594 3.94598 16.1271 2.25 12 2.25V3.75ZM2.53568 7.72696C4.94146 5.27188 8.29233 3.75 12 3.75V2.25C7.87292 2.25 4.14061 3.94598 1.46432 6.67711L2.53568 7.72696ZM1.39272 7.64216L11.3927 21.4401L12.6073 20.5599L2.60728 6.76191L1.39272 7.64216ZM12.6073 21.4401L22.6073 7.64216L21.3927 6.76191L11.3927 20.5599L12.6073 21.4401Z',
  d11: 'M9.10412 17.3145C10.9776 16.5618 13.0224 16.5618 14.8959 17.3145L15.455 15.9226C13.2227 15.0258 10.7773 15.0258 8.54498 15.9226L9.10412 17.3145ZM6.70194 13.9308C10.0694 12.3564 13.9307 12.3564 17.2981 13.9308L17.9334 12.572C14.1633 10.8093 9.83666 10.8093 6.06662 12.572L6.70194 13.9308ZM4.57185 10.8605C9.25471 8.0465 14.7453 8.0465 19.4282 10.8605L20.2008 9.57478C15.0425 6.47507 8.95755 6.47507 3.79924 9.57478L4.57185 10.8605Z',
  d12: 'M12 2.25C7.87293 2.25 4.14061 3.94598 1.46433 6.67711C1.20837 6.93831 1.17812 7.34604 1.39273 7.64216L2.74807 9.51226C5.27806 7.47217 8.49705 6.25 12.0005 6.25C15.5037 6.25 18.7224 7.47196 21.2523 9.51173L22.6073 7.64216C22.8219 7.34604 22.7916 6.93831 22.5357 6.67711C19.8594 3.94598 16.1271 2.25 12 2.25Z',
  d13: 'M20.3708 10.728C18.0886 8.86589 15.1754 7.75 12.0005 7.75C8.82539 7.75 5.91193 8.8661 3.62959 10.7286L5.20663 12.9046C7.23996 11.8476 9.55069 11.25 12.0005 11.25C14.4501 11.25 16.7605 11.8475 18.7937 12.9042L20.3708 10.728Z',
  d14: 'M17.9026 14.1337C16.1254 13.2479 14.1213 12.75 12.0005 12.75C9.87942 12.75 7.87509 13.2481 6.09768 14.134L8.02426 16.7923C9.2893 16.439 10.6229 16.25 12.0005 16.25C13.3778 16.25 14.7111 16.4389 15.9759 16.7921L17.9026 14.1337Z',
  d15: 'M15.0297 18.0977C14.0569 17.8703 13.0428 17.75 12.0005 17.75C10.9579 17.75 9.94356 17.8703 8.97049 18.0979L11.3927 21.4401C11.5338 21.6348 11.7596 21.75 12 21.75C12.2404 21.75 12.4662 21.6348 12.6073 21.4401L15.0297 18.0977Z',
};

export const IconWifiFullSignalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-stroke-rounded IconWifiFullSignalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiFullSignalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-duotone-rounded IconWifiFullSignalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiFullSignalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-twotone-rounded IconWifiFullSignalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiFullSignalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-solid-rounded IconWifiFullSignalSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiFullSignalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-bulk-rounded IconWifiFullSignalBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWifiFullSignalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-stroke-sharp IconWifiFullSignalStrokeSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiFullSignalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-full-signal-solid-sharp IconWifiFullSignalSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfWifiFullSignal: TheIconSelfPack = {
  name: 'WifiFullSignal',
  StrokeRounded: IconWifiFullSignalStrokeRounded,
  DuotoneRounded: IconWifiFullSignalDuotoneRounded,
  TwotoneRounded: IconWifiFullSignalTwotoneRounded,
  SolidRounded: IconWifiFullSignalSolidRounded,
  BulkRounded: IconWifiFullSignalBulkRounded,
  StrokeSharp: IconWifiFullSignalStrokeSharp,
  SolidSharp: IconWifiFullSignalSolidSharp,
};