import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.35588 7.05145L8.12475 8.96165C8.7073 9.36354 8.99857 9.56449 8.99999 9.83111C9.00142 10.0977 8.7123 10.3009 8.13407 10.7072L7.55758 11.1123C6.6051 11.7815 6.12886 12.1162 5.74237 11.9635C5.35588 11.8109 5.35588 11.2882 5.35588 10.2427V7.05145ZM5.35588 7.05145L5.2813 7M5.35588 7.05145V6.94855M5.2813 7L2 4.73627M5.2813 7L5.35588 6.94855M5.2813 7L2 9.26373M5.35588 6.94855L8.12475 5.03835C8.7073 4.63646 8.99857 4.43551 8.99999 4.16889C9.00142 3.90227 8.7123 3.69912 8.13407 3.29281L7.55758 2.88774C6.6051 2.21847 6.12886 1.88383 5.74237 2.03647C5.35588 2.18911 5.35588 2.71182 5.35588 3.75726V6.94855Z',
  d2: 'M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859',
  d3: 'M6.78486 21.8151L6 22.002L6.18687 21.2171C6.52927 19.779 6.70047 19.06 7.05637 18.4231C7.41226 17.7862 7.93493 17.2635 8.98023 16.2182L17.2141 7.98438L20.0176 10.7879L11.7837 19.0218C10.7384 20.0671 10.2158 20.5897 9.57889 20.9456C8.94199 21.3015 8.22295 21.4727 6.78486 21.8151Z',
  d4: 'M8.33169 2.28417C8.34868 2.29611 8.3657 2.30808 8.38277 2.32007L8.95926 2.72515C8.97329 2.73501 8.98739 2.74491 9.00155 2.75484C9.2531 2.93146 9.52079 3.11939 9.71739 3.30309C9.93117 3.50284 10.2532 3.87059 10.2502 4.42477C10.2473 4.97833 9.92197 5.34267 9.70666 5.54024C9.50834 5.72221 9.2389 5.90794 8.98536 6.08272C8.97114 6.09252 8.95697 6.10228 8.94287 6.11201L7.29256 7.25054L8.94287 8.38907C8.95698 8.3988 8.97115 8.40857 8.98537 8.41837C9.23891 8.59314 9.50834 8.77887 9.70666 8.96084C9.92197 9.15841 10.2473 9.52275 10.2502 10.0763C10.2532 10.6305 9.93117 10.9982 9.71739 11.198C9.52079 11.3817 9.25312 11.5696 9.00156 11.7462C8.98741 11.7562 8.9733 11.7661 8.95926 11.7759L8.38277 12.181C8.36571 12.193 8.34868 12.205 8.3317 12.2169C7.89981 12.5205 7.49515 12.8049 7.14762 12.9848C6.79109 13.1693 6.23501 13.385 5.62531 13.1442C4.95179 12.8782 4.74112 12.277 4.66897 11.8582C4.60579 11.4915 4.60596 11.0243 4.60613 10.5642C4.60613 10.5405 4.60614 10.5169 4.60614 10.4933V9.10386L2.81813 10.3374C2.36353 10.651 1.74076 10.5367 1.42714 10.0821C1.11352 9.62753 1.2278 9.00476 1.6824 8.69114L3.77058 7.25054L1.6824 5.80994C1.2278 5.49632 1.11352 4.87355 1.42714 4.41895C1.74076 3.96435 2.36353 3.85007 2.81813 4.16369L4.60614 5.39722V4.0078C4.60614 3.98419 4.60613 3.96055 4.60613 3.9369C4.60596 3.47681 4.60579 3.0096 4.66897 2.64283C4.74112 2.22404 4.95179 1.62291 5.62531 1.35692C6.23501 1.11613 6.79109 1.3318 7.14762 1.51632C7.49514 1.69617 7.8998 1.9806 8.33169 2.28417ZM6.60614 9.20676L7.80715 10.0353C7.83346 10.0535 7.85874 10.0709 7.88308 10.0877C7.85945 10.1044 7.83492 10.1216 7.80941 10.1395L7.23292 10.5446C6.97498 10.7258 6.77259 10.8673 6.60806 10.9769C6.60619 10.8368 6.60614 10.6781 6.60614 10.4933V9.20676ZM6.60614 5.29432V4.0078C6.60614 3.82299 6.60619 3.66424 6.60806 3.52417C6.7726 3.63375 6.97498 3.77523 7.23292 3.95649L7.80941 4.36156C7.83492 4.37948 7.85945 4.39672 7.88308 4.41335C7.85874 4.43017 7.83346 4.44761 7.80715 4.46576L6.60614 5.29432Z',
  d5: 'M21.9497 6.0503C20.8827 4.98323 19.1526 4.98323 18.0855 6.0503L16.9212 7.21463C16.5879 7.54797 16.4212 7.71463 16.4212 7.92174C16.4212 8.12885 16.5879 8.29551 16.9212 8.62885L19.3712 11.0788C19.7045 11.4122 19.8712 11.5788 20.0783 11.5788C20.2854 11.5788 20.452 11.4122 20.7854 11.0788L21.9497 9.91448C23.0168 8.84742 23.0168 7.11736 21.9497 6.0503Z',
  d6: 'M18.3105 13.5537C18.6438 13.2204 18.8105 13.0537 18.8105 12.8466C18.8105 12.6395 18.6438 12.4728 18.3105 12.1395L15.8605 9.68951C15.5272 9.35617 15.3605 9.18951 15.1534 9.18951C14.9463 9.18951 14.7797 9.35617 14.4463 9.68951L8.36945 15.7664C7.40084 16.7347 6.80884 17.3266 6.40167 18.0553C5.9945 18.7839 5.80071 19.5983 5.48363 20.9307L5.27041 21.8263C5.21009 22.0796 5.28552 22.3462 5.46969 22.5303C5.65385 22.7145 5.92037 22.7899 6.17373 22.7296L7.06931 22.5164C8.40175 22.1993 9.2161 22.0055 9.94476 21.5983C10.6734 21.1912 11.2653 20.5992 12.2337 19.6306L18.3105 13.5537Z',
  d7: 'M2 9.93932L8.99761 4.05833L5.49961 2V11.9977L8.99761 9.93932L2 4.05833',
  d8: 'M15.9165 9.04126L6.01273 18.9917L6.0127 22.0029H8.99279L19.0436 11.9951M15.9165 9.04126L18.9721 6.03843C19.0116 5.99963 19.0751 6.0003 19.1138 6.03993L21.9717 8.97005C22.0102 9.00944 22.0095 9.07246 21.9703 9.11108L19.0436 11.9951M15.9165 9.04126L19.0436 11.9951',
  d9: 'M4.86099 1.34894C5.09455 1.21538 5.38176 1.21715 5.61365 1.35359L9.11284 3.41239C9.32272 3.53588 9.45958 3.75358 9.47989 3.99624C9.50021 4.2389 9.40144 4.47633 9.21502 4.63299L6.39829 6.99999L9.21502 9.36699C9.40144 9.52366 9.50021 9.76108 9.47989 10.0037C9.45958 10.2464 9.32272 10.4641 9.11284 10.5876L5.61365 12.6464C5.38176 12.7829 5.09455 12.7846 4.861 12.6511C4.62744 12.5175 4.48332 12.2691 4.48332 12V8.60922L2.21502 10.5154L1.25 9.36699L4.06672 6.99999L1.25 4.63299L2.21502 3.48462L4.48332 5.39077V2C4.48332 1.73095 4.62744 1.48251 4.86099 1.34894ZM5.98332 8.61058L7.43775 9.83279L5.98332 10.6885V8.61058ZM5.98332 5.3894V3.31146L7.43774 4.1672L5.98332 5.3894Z',
  d10: 'M19.5323 5.46967C19.2394 5.17678 18.7645 5.17678 18.4716 5.46967L16.0036 7.93772L20.0637 11.999L22.5323 9.53033C22.8252 9.23744 22.8252 8.76256 22.5323 8.46967L19.5323 5.46967Z',
  d11: 'M19.003 13.0596L14.9429 8.99838L5.25195 18.6893V22.75H9.31261L19.003 13.0596Z',
};

export const IconPenConnectBluetoothStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-stroke-rounded IconPenConnectBluetoothStrokeRounded"
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

export const IconPenConnectBluetoothDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-duotone-rounded IconPenConnectBluetoothDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconPenConnectBluetoothTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-twotone-rounded IconPenConnectBluetoothTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPenConnectBluetoothSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-solid-rounded IconPenConnectBluetoothSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconPenConnectBluetoothBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-bulk-rounded IconPenConnectBluetoothBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconPenConnectBluetoothStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-stroke-sharp IconPenConnectBluetoothStrokeSharp"
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

export const IconPenConnectBluetoothSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-bluetooth-solid-sharp IconPenConnectBluetoothSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfPenConnectBluetooth: TheIconSelfPack = {
  name: 'PenConnectBluetooth',
  StrokeRounded: IconPenConnectBluetoothStrokeRounded,
  DuotoneRounded: IconPenConnectBluetoothDuotoneRounded,
  TwotoneRounded: IconPenConnectBluetoothTwotoneRounded,
  SolidRounded: IconPenConnectBluetoothSolidRounded,
  BulkRounded: IconPenConnectBluetoothBulkRounded,
  StrokeSharp: IconPenConnectBluetoothStrokeSharp,
  SolidSharp: IconPenConnectBluetoothSolidSharp,
};