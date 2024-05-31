import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12L12 20',
  d2: 'M11.5 7.06301C11.6598 7.02188 11.8274 7 12 7C13.1046 7 14 7.89543 14 9C14 9.17265 13.9781 9.34019 13.937 9.5',
  d3: 'M2 2L22 22',
  d4: 'M16.9588 6C17.6186 6.86961 18 7.89801 18 9C18 10.102 17.6186 11.1304 16.9588 12M7.04117 12C6.38143 11.1304 6 10.102 6 9C6 8.29588 6.15572 7.62181 6.44027 7',
  d5: 'M20.3159 4C21.3796 5.43008 22 7.14984 22 9C22 10.8502 21.3796 12.5699 20.3159 14M3.68409 4C2.62036 5.43008 2 7.14984 2 9C2 10.8502 2.62036 12.5699 3.68409 14',
  d6: 'M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M9.34964 8.26385C9.2847 8.49815 9.25 8.74502 9.25 9C9.25 10.166 9.97566 11.1625 11 11.5625L11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20L13 11.9142L9.34964 8.26385Z',
  d9: 'M13.9884 10.0742C14.1577 10.2435 14.2423 10.3281 14.3487 10.3054C14.4551 10.2826 14.4937 10.1811 14.571 9.97812C14.6867 9.67422 14.75 9.34451 14.75 9C14.75 7.48122 13.5188 6.25 12 6.25C11.6555 6.25 11.3258 6.31335 11.0219 6.42903C10.8189 6.5063 10.7174 6.54494 10.6946 6.6513C10.6719 6.75766 10.7565 6.84231 10.9258 7.01159L13.9884 10.0742Z',
  d10: 'M16.3544 5.20338C16.7944 4.86957 17.4217 4.95565 17.7555 5.39565C18.5342 6.422 19 7.65922 19 9.00005C19 10.3409 18.5342 11.5781 17.7555 12.6045C17.4217 13.0445 16.7944 13.1305 16.3544 12.7967C15.9144 12.4629 15.8283 11.8356 16.1622 11.3956C16.703 10.6828 17 9.86321 17 9.00005C17 8.1369 16.703 7.31733 16.1622 6.60446C15.8283 6.16447 15.9144 5.53719 16.3544 5.20338ZM6.85638 6.09074C7.35858 6.32056 7.57939 6.91397 7.34958 7.41617C7.12209 7.9133 7 8.4459 7 9.00005C7 9.86321 7.29702 10.6828 7.83785 11.3956C8.17165 11.8356 8.08557 12.4629 7.64558 12.7967C7.20559 13.1305 6.57831 13.0445 6.2445 12.6045C5.46584 11.5781 5 10.3409 5 9.00005C5 8.14597 5.18936 7.33042 5.53096 6.58394C5.76077 6.08174 6.35418 5.86093 6.85638 6.09074Z',
  d11: 'M4.28091 3.19769C4.72405 3.52731 4.81607 4.15375 4.48646 4.59689C3.54203 5.86658 3 7.37957 3 9.00006C3 10.6206 3.54203 12.1335 4.48646 13.4032C4.81607 13.8464 4.72405 14.4728 4.28091 14.8024C3.83777 15.1321 3.21133 15.04 2.88171 14.5969C1.69869 13.0064 1 11.0799 1 9.00006C1 6.92024 1.69869 4.99371 2.88171 3.40324C3.21133 2.9601 3.83777 2.86807 4.28091 3.19769ZM19.7191 3.19769C20.1622 2.86807 20.7887 2.9601 21.1183 3.40324C22.3013 4.99371 23 6.92024 23 9.00006C23 11.0799 22.3013 13.0064 21.1183 14.5969C20.7887 15.04 20.1622 15.1321 19.7191 14.8024C19.276 14.4728 19.1839 13.8464 19.5135 13.4032C20.458 12.1335 21 10.6206 21 9.00006C21 7.37957 20.458 5.86658 19.5135 4.59689C19.1839 4.15375 19.276 3.52731 19.7191 3.19769Z',
  d12: 'M9.34964 8.26562C9.2847 8.49993 9.25 8.7468 9.25 9.00177C9.25 10.1678 9.97566 11.1643 11 11.5643L11 20.0018C11 20.5541 11.4477 21.0018 12 21.0018C12.5523 21.0018 13 20.5541 13 20.0018L13 11.916L9.34964 8.26562Z',
  d13: 'M6.85638 6.09075C7.35858 6.32056 7.57939 6.91398 7.34958 7.41618C7.12209 7.91331 7 8.44591 7 9.00006C7 9.86322 7.29702 10.6828 7.83785 11.3957C8.17165 11.8356 8.08557 12.4629 7.64558 12.7967C7.20559 13.1305 6.57831 13.0445 6.2445 12.6045C5.46584 11.5781 5 10.3409 5 9.00006C5 8.14598 5.18936 7.33043 5.53096 6.58395C5.76077 6.08175 6.35418 5.86094 6.85638 6.09075Z',
  d14: 'M4.28091 3.19769C4.72405 3.52731 4.81607 4.15375 4.48646 4.59689C3.54203 5.86658 3 7.37957 3 9.00006C3 10.6206 3.54203 12.1335 4.48646 13.4032C4.81607 13.8464 4.72405 14.4728 4.28091 14.8024C3.83777 15.1321 3.21133 15.04 2.88171 14.5969C1.69869 13.0064 1 11.0799 1 9.00006C1 6.92024 1.69869 4.99371 2.88171 3.40324C3.21133 2.9601 3.83777 2.86807 4.28091 3.19769Z',
  d15: 'M13.9888 10.0742C14.1581 10.2435 14.2427 10.3281 14.3491 10.3054C14.4555 10.2826 14.4941 10.1811 14.5714 9.97812C14.6871 9.67422 14.7504 9.34451 14.7504 9C14.7504 7.48122 13.5192 6.25 12.0004 6.25C11.6559 6.25 11.3262 6.31335 11.0223 6.42903C10.8193 6.5063 10.7178 6.54494 10.6951 6.6513C10.6723 6.75766 10.7569 6.84231 10.9262 7.01159L13.9888 10.0742Z',
  d16: 'M16.3548 5.20338C16.7948 4.86957 17.4221 4.95565 17.7559 5.39565C18.5346 6.422 19.0004 7.65922 19.0004 9.00005C19.0004 10.3409 18.5346 11.5781 17.7559 12.6045C17.4221 13.0445 16.7948 13.1305 16.3548 12.7967C15.9148 12.4629 15.8288 11.8356 16.1626 11.3956C16.7034 10.6828 17.0004 9.86321 17.0004 9.00005C17.0004 8.1369 16.7034 7.31733 16.1626 6.60446C15.8288 6.16447 15.9148 5.53719 16.3548 5.20338Z',
  d17: 'M19.7195 3.19769C20.1626 2.86807 20.7891 2.9601 21.1187 3.40324C22.3017 4.99371 23.0004 6.92024 23.0004 9.00006C23.0004 11.0799 22.3017 13.0064 21.1187 14.5969C20.7891 15.04 20.1626 15.1321 19.7195 14.8024C19.2764 14.4728 19.1843 13.8464 19.514 13.4032C20.4584 12.1335 21.0004 10.6206 21.0004 9.00006C21.0004 7.37957 20.4584 5.86658 19.514 4.59689C19.1843 4.15375 19.2764 3.52731 19.7195 3.19769Z',
  d18: 'M12 12.5L12 20',
  d19: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d20: 'M3 9.34682C3 7.72633 3.54203 6.21334 4.48646 4.94365L2.88171 3.75C1.69869 5.34047 1 7.267 1 9.34682C1 11.4266 1.69869 13.3532 2.88171 14.9436L4.48646 13.75C3.54203 12.4803 3 10.9673 3 9.34682Z',
  d21: 'M19.5135 4.94365C20.458 6.21334 21 7.72633 21 9.34682C21 10.9673 20.458 12.4803 19.5135 13.75L21.1183 14.9436C22.3013 13.3532 23 11.4266 23 9.34682C23 7.267 22.3013 5.34047 21.1183 3.75L19.5135 4.94365Z',
  d22: 'M17 9.3466C17 8.48344 16.703 7.66387 16.1622 6.95101L17.7555 5.74219C18.5342 6.76854 19 8.00576 19 9.3466C19 10.6874 18.5342 11.9247 17.7555 12.951L16.1622 11.7422C16.703 11.0293 17 10.2098 17 9.3466Z',
  d23: 'M7.83785 6.951C7.29702 7.66387 7 8.48344 7 9.3466C7 10.2098 7.29702 11.0293 7.83785 11.7422L6.2445 12.951C5.46584 11.9247 5 10.6874 5 9.3466C5 8.00576 5.46584 6.76854 6.2445 5.74219L7.83785 6.951Z',
  d24: 'M11 10.9808V20.25H13V13L11 10.9808Z',
  d25: 'M15 9.34668C15 7.68983 13.6569 6.34668 12 6.34668C11.3973 6.34668 10.836 6.52443 10.3659 6.83037L14.5163 10.9808C14.8223 10.5106 15 9.94942 15 9.34668Z',
} as const;

export const IconCellularNetworkOfflineStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-stroke-rounded IconCellularNetworkOfflineStrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconCellularNetworkOfflineDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-duotone-rounded IconCellularNetworkOfflineDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconCellularNetworkOfflineTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-twotone-rounded IconCellularNetworkOfflineTwotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconCellularNetworkOfflineSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-solid-rounded IconCellularNetworkOfflineSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCellularNetworkOfflineBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-bulk-rounded IconCellularNetworkOfflineBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconCellularNetworkOfflineStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-stroke-sharp IconCellularNetworkOfflineStrokeSharp"
    >
      <path 
        d={d.d18} 
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
    </TheIconWrapper>
  );
};

export const IconCellularNetworkOfflineSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cellular-network-offline-solid-sharp IconCellularNetworkOfflineSolidSharp"
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
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCellularNetworkOffline: TheIconSelfPack = {
  name: 'CellularNetworkOffline',
  StrokeRounded: IconCellularNetworkOfflineStrokeRounded,
  DuotoneRounded: IconCellularNetworkOfflineDuotoneRounded,
  TwotoneRounded: IconCellularNetworkOfflineTwotoneRounded,
  SolidRounded: IconCellularNetworkOfflineSolidRounded,
  BulkRounded: IconCellularNetworkOfflineBulkRounded,
  StrokeSharp: IconCellularNetworkOfflineStrokeSharp,
  SolidSharp: IconCellularNetworkOfflineSolidSharp,
};