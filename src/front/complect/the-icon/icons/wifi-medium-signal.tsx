import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5126 10.7306L15.1758 18.009C13.7137 20.003 12.9827 21 12 21C11.0173 21 10.2863 20.003 8.82421 18.009L3.48742 10.7306C2.40801 9.25847 1.86831 8.52241 2.02741 7.57659C2.18651 6.63078 2.81754 6.2161 4.07962 5.38675C6.38289 3.87318 9.0958 3 12 3C14.9042 3 17.6171 3.87318 19.9204 5.38675C21.1825 6.2161 21.8135 6.63078 21.9726 7.57659C22.1317 8.52241 21.592 9.25847 20.5126 10.7306Z',
  d2: 'M19 14C14.6871 11.3333 9.31293 11.3333 5 14',
  d3: 'M16 17C13.465 15.6667 10.535 15.6667 8 17',
  d4: 'M19.9204 5.38675C17.6171 3.87318 14.9042 3 12 3C9.0958 3 6.38289 3.87318 4.07962 5.38675C2.81754 6.2161 2.18651 6.63078 2.02741 7.57659C1.86831 8.52241 2.40801 9.25847 3.48742 10.7306L5.69105 13.6003C9.64383 11.4666 14.3562 11.4666 18.309 13.6003L20.5126 10.7306C21.592 9.25847 22.1317 8.52241 21.9726 7.57659C21.8135 6.63078 21.1825 6.2161 19.9204 5.38675Z',
  d5: 'M18 14C14.3032 11.3333 9.69679 11.3333 6 14',
  d6: 'M3.66779 4.75997C6.0874 3.16996 8.94247 2.25 12.0001 2.25C15.0576 2.25 17.9127 3.16996 20.3323 4.75997L20.4786 4.85593C21.5958 5.58798 22.4981 6.17924 22.7123 7.45218C22.8258 8.127 22.6756 8.71261 22.3741 9.29912C22.0968 9.83861 21.6622 10.4313 21.1513 11.128L20.3511 12.2192L20.3511 12.2193C20.0915 12.5733 19.9617 12.7504 19.7816 12.7924C19.6016 12.8345 19.3908 12.7251 18.9694 12.5064C16.9888 11.4782 14.4542 11 12 11C9.54587 11 7.01127 11.4782 5.03069 12.5063C4.60924 12.7251 4.39851 12.8345 4.21845 12.7924C4.03839 12.7503 3.90859 12.5733 3.64897 12.2192L2.84887 11.128C2.33798 10.4313 1.90334 9.83862 1.626 9.29912C1.3245 8.71261 1.17434 8.127 1.28786 7.45218C1.50199 6.17924 2.4043 5.58798 3.52149 4.85593L3.66779 4.75997ZM11.9991 13C14.1357 13 16.2002 13.4017 17.7702 14.1444C18.0912 14.2962 18.2517 14.3721 18.3282 14.5336C18.354 14.5882 18.3723 14.6605 18.3756 14.7207C18.3852 14.8992 18.2706 15.0555 18.0413 15.3682C17.8664 15.6067 17.779 15.726 17.6656 15.7802C17.6205 15.8017 17.5826 15.8137 17.5333 15.8221C17.4094 15.843 17.2558 15.7912 16.9485 15.6877L16.9485 15.6877C15.533 15.2109 13.7218 15 11.9991 15C10.2765 15 8.46531 15.2109 7.0498 15.6877L7.04979 15.6877L7.04977 15.6877C6.74253 15.7912 6.58891 15.843 6.46506 15.822C6.41578 15.8137 6.37782 15.8017 6.33273 15.7801C6.2194 15.726 6.13193 15.6067 5.957 15.3681C5.72775 15.0555 5.61313 14.8991 5.62276 14.7207C5.62601 14.6604 5.64433 14.5881 5.67017 14.5336C5.74668 14.372 5.90717 14.2961 6.22815 14.1443L6.22816 14.1443L6.22817 14.1443C7.79816 13.4017 9.86257 13 11.9991 13ZM8.25506 18.5007C8.95596 19.4567 9.53037 20.2401 10.0564 20.7771C10.6015 21.3335 11.2124 21.75 12.0003 21.75C12.7882 21.75 13.3991 21.3335 13.9442 20.7771C14.4702 20.2401 15.0446 19.4567 15.7455 18.5008C15.9675 18.198 16.0785 18.0467 16.0784 17.8828C16.0783 17.7684 16.0279 17.6362 15.9519 17.5508C15.843 17.4284 15.6738 17.3923 15.3355 17.3201C14.3701 17.1141 13.2094 17 12.0002 17C10.7911 17 9.63045 17.1141 8.66505 17.3201C8.32679 17.3923 8.15767 17.4283 8.04874 17.5507C7.97269 17.6362 7.92231 17.7684 7.92224 17.8828C7.92214 18.0467 8.03311 18.198 8.25506 18.5007Z',
  d7: 'M3.66779 4.75997C6.0874 3.16996 8.94247 2.25 12.0001 2.25C15.0576 2.25 17.9127 3.16996 20.3323 4.75997L20.4786 4.85593C21.5958 5.58798 22.4981 6.17924 22.7123 7.45218C22.8258 8.127 22.6756 8.71261 22.3741 9.29912C22.0968 9.83861 21.6622 10.4313 21.1513 11.128L20.3511 12.2192C20.0915 12.5733 19.9617 12.7504 19.7816 12.7924C19.6016 12.8345 19.3908 12.7251 18.9694 12.5064C16.9888 11.4782 14.4542 11 12 11C9.54587 11 7.01127 11.4782 5.03069 12.5063C4.60924 12.7251 4.39851 12.8345 4.21845 12.7924C4.03839 12.7503 3.90859 12.5733 3.64897 12.2192L2.84887 11.128C2.33798 10.4313 1.90334 9.83862 1.626 9.29912C1.3245 8.71261 1.17434 8.127 1.28786 7.45218C1.50199 6.17924 2.4043 5.58798 3.52149 4.85593L3.66779 4.75997Z',
  d8: 'M11.9991 13C14.1357 13 16.2002 13.4017 17.7702 14.1444C18.0912 14.2962 18.2517 14.3721 18.3282 14.5336C18.354 14.5881 18.3723 14.6605 18.3756 14.7207C18.3852 14.8992 18.2706 15.0555 18.0413 15.3682C17.8664 15.6067 17.779 15.726 17.6656 15.7802C17.6205 15.8017 17.5826 15.8137 17.5333 15.8221C17.4094 15.843 17.2558 15.7912 16.9485 15.6877C15.533 15.2109 13.7218 15 11.9991 15C10.2765 15 8.46531 15.2109 7.0498 15.6877C6.74254 15.7912 6.58891 15.843 6.46506 15.822C6.41578 15.8137 6.37782 15.8017 6.33273 15.7801C6.2194 15.726 6.13193 15.6067 5.957 15.3681C5.72775 15.0555 5.61313 14.8991 5.62276 14.7207C5.62601 14.6604 5.64433 14.5881 5.67017 14.5336C5.74668 14.372 5.90718 14.2961 6.22817 14.1443C7.79816 13.4017 9.86257 13 11.9991 13Z',
  d9: 'M10.0564 20.7771C9.53037 20.2401 8.95596 19.4567 8.25506 18.5007C8.03311 18.198 7.92214 18.0467 7.92224 17.8828C7.92231 17.7684 7.97269 17.6362 8.04874 17.5507C8.15767 17.4283 8.32679 17.3923 8.66505 17.3201C9.63045 17.1141 10.7911 17 12.0002 17C13.2094 17 14.3701 17.1141 15.3355 17.3201C15.6738 17.3923 15.843 17.4284 15.9519 17.5508C16.0279 17.6362 16.0783 17.7684 16.0784 17.8828C16.0785 18.0467 15.9675 18.198 15.7455 18.5008L15.7455 18.5008C15.0446 19.4567 14.4702 20.2401 13.9442 20.7771C13.3991 21.3335 12.7882 21.75 12.0003 21.75C11.2124 21.75 10.6015 21.3335 10.0564 20.7771Z',
  d10: 'M12 21L11.3927 21.4401C11.5338 21.6348 11.7596 21.75 12 21.75C12.2404 21.75 12.4662 21.6348 12.6073 21.4401L12 21ZM22 7.20203L22.6073 7.64216C22.8219 7.34604 22.7916 6.93831 22.5357 6.67711L22 7.20203ZM2 7.20203L1.46432 6.67711C1.20836 6.93831 1.17811 7.34604 1.39272 7.64216L2 7.20203ZM12 3.75C15.7077 3.75 19.0585 5.27188 21.4643 7.72696L22.5357 6.67711C19.8594 3.94598 16.1271 2.25 12 2.25V3.75ZM2.53568 7.72696C4.94146 5.27188 8.29233 3.75 12 3.75V2.25C7.87292 2.25 4.14061 3.94598 1.46432 6.67711L2.53568 7.72696ZM1.39272 7.64216L11.3927 21.4401L12.6073 20.5599L2.60728 6.76191L1.39272 7.64216ZM12.6073 21.4401L22.6073 7.64216L21.3927 6.76191L11.3927 20.5599L12.6073 21.4401Z',
  d11: 'M9.1046 17.3145C10.9781 16.5618 13.0228 16.5618 14.8964 17.3145L15.4555 15.9226C13.2232 15.0258 10.7778 15.0258 8.54547 15.9226L9.1046 17.3145ZM6.70243 13.9308C10.0698 12.3564 13.9311 12.3564 17.2986 13.9308L17.9339 12.572C14.1638 10.8093 9.83715 10.8093 6.0671 12.572L6.70243 13.9308Z',
  d12: 'M12 2.25C7.87293 2.25 4.14061 3.94598 1.46433 6.67711C1.20837 6.93831 1.17812 7.34604 1.39273 7.64216L5.20663 12.9046C7.23996 11.8476 9.55069 11.25 12.0005 11.25C14.4501 11.25 16.7605 11.8475 18.7937 12.9042L22.6073 7.64216C22.8219 7.34604 22.7916 6.93831 22.5357 6.67711C19.8594 3.94598 16.1271 2.25 12 2.25Z',
  d13: 'M12.0005 12.75C14.1213 12.75 16.1254 13.2479 17.9026 14.1337L15.9759 16.7921C14.7111 16.4389 13.3778 16.25 12.0005 16.25C10.6229 16.25 9.2893 16.439 8.02426 16.7923L6.09768 14.134C7.87509 13.2481 9.87942 12.75 12.0005 12.75Z',
  d14: 'M12.0005 17.75C13.0428 17.75 14.0569 17.8703 15.0297 18.0977L12.6073 21.4401C12.4662 21.6348 12.2404 21.75 12 21.75C11.7596 21.75 11.5338 21.6348 11.3927 21.4401L8.97049 18.0979C9.94356 17.8703 10.9579 17.75 12.0005 17.75Z',
};

export const IconWifiMediumSignalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-stroke-rounded IconWifiMediumSignalStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWifiMediumSignalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-duotone-rounded IconWifiMediumSignalDuotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiMediumSignalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-twotone-rounded IconWifiMediumSignalTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWifiMediumSignalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-solid-rounded IconWifiMediumSignalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiMediumSignalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-bulk-rounded IconWifiMediumSignalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiMediumSignalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-stroke-sharp IconWifiMediumSignalStrokeSharp"
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

export const IconWifiMediumSignalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-medium-signal-solid-sharp IconWifiMediumSignalSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfWifiMediumSignal: TheIconSelfPack = {
  name: 'WifiMediumSignal',
  StrokeRounded: IconWifiMediumSignalStrokeRounded,
  DuotoneRounded: IconWifiMediumSignalDuotoneRounded,
  TwotoneRounded: IconWifiMediumSignalTwotoneRounded,
  SolidRounded: IconWifiMediumSignalSolidRounded,
  BulkRounded: IconWifiMediumSignalBulkRounded,
  StrokeSharp: IconWifiMediumSignalStrokeSharp,
  SolidSharp: IconWifiMediumSignalSolidSharp,
};