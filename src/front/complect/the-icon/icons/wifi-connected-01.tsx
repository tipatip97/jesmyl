import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 20.5C11.0173 20.5 10.2863 19.503 8.82421 17.509L3.48742 9.73059C2.40801 8.25847 1.86831 7.52241 2.02741 6.57659C2.18651 5.63078 2.81754 5.2161 4.07962 4.38675C6.38289 2.87318 9.0958 2 12 2C14.9042 2 17.6171 2.87318 19.9204 4.38675C21.1825 5.2161 21.8135 5.63078 21.9726 6.57659C22.1317 7.52241 21.592 8.25847 20.5126 9.73059L16 16',
  d2: 'M19 13C14.6871 10.3333 9.31293 10.3333 5 13',
  d3: 'M21 10C15.4548 6 8.54519 6 3 10',
  d4: 'M16 16C13.465 14.6667 10.535 14.6667 8 16',
  d5: 'M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15',
  d6: 'M19.9204 4.38675C17.6171 2.87318 14.9042 2 12 2C9.0958 2 6.38289 2.87318 4.07962 4.38675C2.81754 5.2161 2.18651 5.63078 2.02741 6.57659C1.86831 7.52241 2.40801 8.25847 3.48742 9.73059L8 16C10.535 14.6667 13.465 14.6667 16 16L20.5126 9.73059C21.592 8.25847 22.1317 7.52241 21.9726 6.57659C21.8135 5.63078 21.1825 5.2161 19.9204 4.38675Z',
  d7: 'M12 2C9.16448 2 6.51398 2.866 4.26436 4.3669L4.21659 4.39877C3.67053 4.76299 3.18224 5.08868 2.82154 5.44415C2.41393 5.84585 2.14107 6.309 2.03638 6.94082C1.92688 7.60173 2.07339 8.17275 2.3575 8.73388C2.40029 8.81839 2.42169 8.86065 2.45526 8.90207C2.58621 9.06362 2.82902 9.12854 3.02311 9.05392C3.07288 9.03478 3.12513 9.00059 3.22962 8.9322C8.69369 5.35594 15.3063 5.35594 20.7704 8.9322C20.8749 9.00059 20.9271 9.03479 20.9769 9.05392C21.171 9.12854 21.4138 9.06362 21.5447 8.90208C21.5783 8.86066 21.5997 8.8184 21.6425 8.73388C21.9266 8.17275 22.0731 7.60173 21.9636 6.94082C21.8589 6.309 21.5861 5.84585 21.1785 5.44415C20.8178 5.08868 20.3295 4.76299 19.7834 4.39878L19.7356 4.3669C17.486 2.866 14.8355 2 12 2Z',
  d8: 'M4.13538 11.3496L4.24991 11.5081C4.5008 11.8555 4.62625 12.0292 4.80652 12.0725C4.98678 12.1157 5.18736 12.0126 5.58852 11.8063C9.62533 9.73122 14.3737 9.73122 18.4105 11.8063C18.8117 12.0126 19.0122 12.1157 19.1925 12.0725C19.3728 12.0292 19.4982 11.8555 19.7491 11.5081L19.8636 11.3496C20.1451 10.9599 20.2858 10.765 20.2436 10.5516C20.2014 10.3382 20.0054 10.2168 19.6134 9.97388C14.8287 7.00871 9.17035 7.00871 4.38558 9.97388C3.99363 10.2168 3.79765 10.3382 3.75544 10.5516C3.71323 10.765 3.85395 10.9599 4.13538 11.3496Z',
  d9: 'M16.3498 15.3362C13.5963 13.8879 10.4052 13.8879 7.65159 15.3362L7.65159 15.3362C7.5793 15.3742 7.54315 15.3933 7.50944 15.4052C7.32474 15.4708 7.11875 15.4225 6.98254 15.2815C6.95768 15.2558 6.93377 15.2227 6.88594 15.1565L6.31489 14.3658C6.00908 13.9423 5.85617 13.7306 5.9145 13.5035C5.97283 13.2765 6.19658 13.1705 6.64406 12.9584C10.0449 11.3472 13.9566 11.3472 17.3574 12.9584C17.8049 13.1705 18.0286 13.2765 18.0869 13.5035C18.1453 13.7306 17.9924 13.9423 17.6865 14.3658L17.1155 15.1565L17.1155 15.1565C17.0677 15.2227 17.0438 15.2558 17.0189 15.2815C16.8827 15.4225 16.6767 15.4708 16.492 15.4052C16.4583 15.3932 16.4221 15.3742 16.3498 15.3362Z',
  d10: 'M15.4746 17.4263L15.742 17.056C15.837 16.9245 15.7935 16.7393 15.6499 16.6638C13.3335 15.4454 10.6647 15.4454 8.34819 16.6638C8.20459 16.7393 8.16112 16.9245 8.25611 17.056L8.52758 17.4319C9.17879 18.3337 9.71432 19.0752 10.205 19.5837C10.7169 20.1143 11.2811 20.5 11.9991 20.5C12.2052 20.5 12.3987 20.4682 12.5819 20.4103C12.2222 20.0487 12 19.5503 12 19C12 17.8954 12.8954 17 14 17L14.0664 17.0011C14.0898 17.0018 14.1144 17.003 14.1402 17.0046C14.1919 17.008 14.2484 17.0133 14.3092 17.0215C14.4311 17.0377 14.5696 17.0648 14.7213 17.1082C14.9534 17.1745 15.2078 17.2762 15.4746 17.4263Z',
  d11: 'M22.9426 14.6664C23.127 15.187 22.8544 15.7585 22.3338 15.9429C21.8002 16.1319 21.1837 16.5388 20.5307 17.1115C19.888 17.6751 19.2628 18.3521 18.7091 19.0159C18.1572 19.6774 17.6885 20.3111 17.3574 20.7801C17.1922 21.0141 17.0622 21.2058 16.9743 21.3379C16.9307 21.4032 16.8877 21.4689 16.8451 21.535C16.6525 21.8367 16.307 22.0173 15.9489 21.999C15.5889 21.9805 15.2668 21.7698 15.1056 21.4475L15.1052 21.4467C14.8634 20.9631 14.476 20.1883 13.9064 19.9959C13.398 19.9487 13 19.521 13 19.0003C13 18.448 13.4477 18.0003 14 18.0003C14.1349 18.0007 14.2642 18.0179 14.4466 18.07C14.6545 18.1294 14.9053 18.2353 15.1797 18.4182C15.454 18.6011 15.7416 18.8538 16.0304 19.1997C16.3456 18.7689 16.734 18.2613 17.1733 17.7347C17.7666 17.0235 18.465 16.2629 19.212 15.6078C19.9486 14.9618 20.788 14.3686 21.6662 14.0576C22.1868 13.8733 22.7582 14.1458 22.9426 14.6664Z',
  d12: 'M15.1754 15.6185L14.8958 16.3145L15.4391 16.5327L15.7827 16.0586L15.1754 15.6185ZM22 6.20203L22.6073 6.64216C22.8219 6.34604 22.7916 5.93831 22.5357 5.67711L22 6.20203ZM2 6.20203L1.46432 5.67711C1.20836 5.93831 1.17811 6.34604 1.39272 6.64216L2 6.20203ZM4.57178 9.8605C9.25464 7.0465 14.7452 7.0465 19.4281 9.8605L20.2007 8.57478C15.0424 5.47507 8.95748 5.47507 3.79918 8.57478L4.57178 9.8605ZM9.10405 16.3145C10.9776 15.5618 13.0223 15.5618 14.8958 16.3145L15.455 14.9226C13.2226 14.0258 10.7773 14.0258 8.54491 14.9226L9.10405 16.3145ZM6.70187 12.9308C10.0693 11.3564 13.9306 11.3564 17.298 12.9308L17.9333 11.572C14.1633 9.80932 9.83659 9.80932 6.06655 11.572L6.70187 12.9308ZM12 2.75C15.7077 2.75 19.0585 4.27188 21.4643 6.72696L22.5357 5.67711C19.8594 2.94598 16.1271 1.25 12 1.25V2.75ZM2.53568 6.72696C4.94146 4.27188 8.29233 2.75 12 2.75V1.25C7.87292 1.25 4.14061 2.94598 1.46432 5.67711L2.53568 6.72696ZM1.39272 6.64216L11.3927 20.4401L12.6073 19.5599L2.60728 5.76191L1.39272 6.64216ZM15.7827 16.0586L22.6073 6.64216L21.3927 5.76191L14.5681 15.1784L15.7827 16.0586Z',
  d13: 'M14 19L16 21L22 15',
  d14: 'M22.7502 15.5431L16.043 22.2502L13.3359 19.5431L14.7502 18.1289L16.043 19.4218L21.3359 14.1289L22.7502 15.5431Z',
  d15: 'M1.46433 6.17711C4.14061 3.44598 7.87293 1.75 12 1.75C16.1271 1.75 19.8594 3.44598 22.5357 6.17711C22.7916 6.43831 22.8219 6.84604 22.6073 7.14216L21.2523 9.01173C18.7224 6.97196 15.5037 5.75 12.0005 5.75C8.49705 5.75 5.27806 6.97217 2.74807 9.01226L1.39273 7.14216C1.17812 6.84604 1.20837 6.43831 1.46433 6.17711Z',
  d16: 'M12.0005 7.25C15.1754 7.25 18.0886 8.36589 20.3708 10.228L18.7937 12.4042C16.7605 11.3475 14.4501 10.75 12.0005 10.75C9.55069 10.75 7.23996 11.3476 5.20663 12.4046L3.62959 10.2286C5.91193 8.3661 8.82539 7.25 12.0005 7.25Z',
  d17: 'M17.9026 13.6337C16.1254 12.7479 14.1213 12.25 12.0005 12.25C9.87942 12.25 7.87509 12.7481 6.09768 13.634L8.02426 16.2923C9.2893 15.939 10.6229 15.75 12.0005 15.75C13.3778 15.75 14.7111 15.9389 15.9759 16.2921L17.9026 13.6337Z',
  d18: 'M13.4318 17.3264C12.9617 17.2759 12.4841 17.25 12.0005 17.25C10.9579 17.25 9.94356 17.3703 8.97049 17.5979L11.3927 20.9401C11.5338 21.1348 11.7596 21.25 12 21.25C12.2404 21.25 12.4662 21.1348 12.6073 20.9401L12.6091 20.9376L11.2148 19.5433L13.4318 17.3264Z',
};

export const IconWifiConnected01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-stroke-rounded IconWifiConnected01StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-duotone-rounded IconWifiConnected01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-twotone-rounded IconWifiConnected01TwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-solid-rounded IconWifiConnected01SolidRounded"
    >
      <path 
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

export const IconWifiConnected01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-bulk-rounded IconWifiConnected01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWifiConnected01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-stroke-sharp IconWifiConnected01StrokeSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiConnected01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-connected-01-solid-sharp IconWifiConnected01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiConnected01: TheIconSelfPack = {
  name: 'WifiConnected01',
  StrokeRounded: IconWifiConnected01StrokeRounded,
  DuotoneRounded: IconWifiConnected01DuotoneRounded,
  TwotoneRounded: IconWifiConnected01TwotoneRounded,
  SolidRounded: IconWifiConnected01SolidRounded,
  BulkRounded: IconWifiConnected01BulkRounded,
  StrokeSharp: IconWifiConnected01StrokeSharp,
  SolidSharp: IconWifiConnected01SolidSharp,
};