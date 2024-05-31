import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 18C21.8011 18.6891 21.4991 19.2323 21.0408 19.682C19.6974 21 17.5354 21 13.2113 21H11.1729C6.84873 21 4.68667 21 3.34333 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34333 4.31802C4.68667 3 6.84873 3 11.1729 3H13.2113C17.5354 3 19.6974 3 21.0408 4.31802C21.4991 4.76771 21.8011 5.31092 22 5.99999',
  d2: 'M16.9918 16H17M22 11.1144C20.7204 9.80801 18.9526 9 17 9C15.0474 9 13.2796 9.80801 12 11.1144M14.5 13.6667C15.1398 13.0135 16.0237 12.6095 17 12.6095C17.9763 12.6095 18.8602 13.0135 19.5 13.6667',
  d3: 'M6.5 3.5V20.5',
  d4: 'M13 3H11C9.12274 3 7.6608 3 6.5 3.11418V20.8858C7.6608 21 9.12274 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z',
  d5: 'M11.0356 10.4146C12.4933 8.92642 14.5146 8 16.75 8C18.9854 8 21.0067 8.92642 22.4644 10.4146C22.8508 10.8092 22.8443 11.4423 22.4498 11.8288C22.0552 12.2152 21.4221 12.2087 21.0356 11.8141C19.9341 10.6896 18.4199 10 16.75 10C15.0801 10 13.5659 10.6896 12.4644 11.8141C12.0779 12.2087 11.4448 12.2152 11.0502 11.8288C10.6557 11.4423 10.6492 10.8092 11.0356 10.4146ZM13.5356 12.9669C14.3535 12.1319 15.4909 11.6095 16.75 11.6095C18.0091 11.6095 19.1465 12.1319 19.9644 12.9669C20.3508 13.3615 20.3443 13.9946 19.9498 14.3811C19.5552 14.7675 18.9221 14.761 18.5356 14.3664C18.0739 13.8951 17.4436 13.6095 16.75 13.6095C16.0564 13.6095 15.4261 13.8951 14.9644 14.3664C14.5779 14.761 13.9448 14.7675 13.5502 14.3811C13.1557 13.9946 13.1492 13.3615 13.5356 12.9669ZM15.7418 16C15.7418 15.4477 16.1896 15 16.7418 15H16.75C17.3023 15 17.75 15.4477 17.75 16C17.75 16.5523 17.3023 17 16.75 17H16.7418C16.1896 17 15.7418 16.5523 15.7418 16Z',
  d6: 'M13.2549 2.25H11.1202C9.06787 2.24998 7.43009 2.24996 6.14561 2.41901C4.82004 2.59346 3.72454 2.96355 2.85563 3.81412C1.98413 4.66721 1.60257 5.74704 1.42315 7.05336C1.24996 8.31434 1.24998 9.92064 1.25 11.9266V12.0734C1.24998 14.0793 1.24996 15.6857 1.42315 16.9466C1.60257 18.253 1.98413 19.3328 2.85563 20.1859C3.72454 21.0364 4.82004 21.4065 6.14561 21.581C7.43009 21.75 9.06784 21.75 11.1202 21.75H13.2549C15.3073 21.75 16.945 21.75 18.2295 21.581C19.5551 21.4065 20.6506 21.0364 21.5195 20.1859C22.1081 19.6097 22.479 18.9235 22.7114 18.1204C22.8611 17.6031 22.5621 17.0626 22.0435 16.9133C21.525 16.7639 20.9833 17.0622 20.8336 17.5796C20.6771 18.1202 20.4578 18.4933 20.1507 18.794C19.7068 19.2285 19.0894 19.5009 17.9739 19.6477C16.8321 19.798 15.3236 19.8 13.1836 19.8H11.1915C10.0116 19.8 9.02367 19.7994 8.18332 19.7737C7.74921 19.7604 7.53216 19.7537 7.39108 19.6083C7.25 19.4628 7.25 19.2403 7.25 18.7952V5.20483C7.25 4.75975 7.25 4.5372 7.39108 4.39174C7.53216 4.24628 7.74921 4.23963 8.18331 4.22634C9.02366 4.20061 10.0116 4.2 11.1915 4.2H13.1836C15.3236 4.2 16.8321 4.202 17.9739 4.35226C19.0894 4.49907 19.7068 4.77152 20.1507 5.20603C20.4578 5.50673 20.6771 5.87983 20.8336 6.42043C20.9833 6.93778 21.525 7.2361 22.0435 7.08674C22.5621 6.93738 22.8611 6.39691 22.7114 5.87956C22.479 5.07647 22.1081 4.39032 21.5195 3.81412C20.6506 2.96355 19.5551 2.59346 18.2295 2.41901C16.945 2.24996 15.3073 2.24998 13.2549 2.25Z',
  d7: 'M22 7.5V3L2 3L2 21L22 21V16.5',
  d8: 'M6.5 3V21',
  d9: 'M16.9922 16H17.0004',
  d10: 'M22 11.1144C20.7204 9.80801 18.9526 9 17 9C15.0474 9 13.2796 9.80801 12 11.1144M14.5 13.6667C15.1398 13.0135 16.0237 12.6095 17 12.6095C17.9763 12.6095 18.8602 13.0135 19.5 13.6667',
  d11: 'M2.22727 2.25H21.7727C22.0319 2.25 22.2805 2.35272 22.4638 2.53557C22.647 2.71842 22.75 2.96641 22.75 3.225V7H20.7955V4.19995H8V19.8L20.7955 19.7999V17H22.75V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75L2.22727 21.75C1.96808 21.75 1.71951 21.6473 1.53624 21.4644C1.35296 21.2816 1.25 21.0336 1.25 20.775V3.225C1.25 2.68652 1.68754 2.25 2.22727 2.25Z',
  d12: 'M16.0273 16C16.0273 15.4477 16.4751 15 17.0273 15H17.0355C17.5878 15 18.0355 15.4477 18.0355 16C18.0355 16.5523 17.5878 17 17.0355 17H17.0273C16.4751 17 16.0273 16.5523 16.0273 16Z',
  d13: 'M11.3203 10.4146C12.778 8.92642 14.7993 8 17.0347 8C19.2701 8 21.2914 8.92642 22.7491 10.4146L21.3203 11.8141C20.2188 10.6896 18.7046 10 17.0347 10C15.3648 10 13.8506 10.6896 12.7491 11.8141L11.3203 10.4146ZM13.8203 12.9669C14.6382 12.1319 15.7756 11.6095 17.0347 11.6095C18.2938 11.6095 19.4312 12.1319 20.2491 12.9669L18.8203 14.3664C18.3586 13.8951 17.7283 13.6095 17.0347 13.6095C16.3411 13.6095 15.7108 13.8951 15.2491 14.3664L13.8203 12.9669Z',
} as const;

export const IconTabletConnectedWifiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-stroke-rounded IconTabletConnectedWifiStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedWifiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-duotone-rounded IconTabletConnectedWifiDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedWifiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-twotone-rounded IconTabletConnectedWifiTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedWifiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-solid-rounded IconTabletConnectedWifiSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTabletConnectedWifiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-bulk-rounded IconTabletConnectedWifiBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedWifiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-stroke-sharp IconTabletConnectedWifiStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedWifiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-wifi-solid-sharp IconTabletConnectedWifiSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTabletConnectedWifi: TheIconSelfPack = {
  name: 'TabletConnectedWifi',
  StrokeRounded: IconTabletConnectedWifiStrokeRounded,
  DuotoneRounded: IconTabletConnectedWifiDuotoneRounded,
  TwotoneRounded: IconTabletConnectedWifiTwotoneRounded,
  SolidRounded: IconTabletConnectedWifiSolidRounded,
  BulkRounded: IconTabletConnectedWifiBulkRounded,
  StrokeSharp: IconTabletConnectedWifiStrokeSharp,
  SolidSharp: IconTabletConnectedWifiSolidSharp,
};