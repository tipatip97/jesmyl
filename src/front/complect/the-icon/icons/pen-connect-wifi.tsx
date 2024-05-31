import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859',
  d2: 'M7.49103 10H7.50001M13 4.41644C11.5924 2.92344 9.64788 2 7.5 2C5.35212 2 3.40757 2.92344 2 4.41644M4.75 7.33333C5.45379 6.58683 6.42606 6.12512 7.5 6.12512C8.57394 6.12512 9.54621 6.58683 10.25 7.33333',
  d3: 'M6.78486 21.8132L6 22L6.18687 21.2152C6.52927 19.7771 6.70047 19.058 7.05637 18.4211C7.41226 17.7842 7.93493 17.2616 8.98023 16.2163L17.2141 7.98242L20.0176 10.7859L11.7837 19.0198C10.7384 20.0651 10.2158 20.5878 9.57889 20.9437C8.94199 21.2996 8.22295 21.4708 6.78486 21.8132Z',
  d4: 'M21.9497 6.0503C20.8827 4.98323 19.1526 4.98323 18.0855 6.0503L16.9212 7.21463C16.5879 7.54797 16.4212 7.71463 16.4212 7.92174C16.4212 8.12885 16.5879 8.29551 16.9212 8.62885L19.3712 11.0788C19.7045 11.4122 19.8712 11.5788 20.0783 11.5788C20.2854 11.5788 20.452 11.4122 20.7854 11.0788L21.9497 9.91448C23.0168 8.84742 23.0168 7.11736 21.9497 6.0503Z',
  d5: 'M18.3105 13.5537C18.6438 13.2204 18.8105 13.0537 18.8105 12.8466C18.8105 12.6395 18.6438 12.4728 18.3105 12.1395L15.8605 9.68951C15.5272 9.35617 15.3605 9.18951 15.1534 9.18951C14.9463 9.18951 14.7797 9.35617 14.4463 9.68951L8.36945 15.7664C7.40084 16.7347 6.80884 17.3266 6.40167 18.0553C5.9945 18.7839 5.80071 19.5983 5.48363 20.9307L5.27041 21.8263C5.21009 22.0796 5.28552 22.3462 5.46969 22.5303C5.65385 22.7145 5.92037 22.7899 6.17373 22.7296L7.06931 22.5164C8.40175 22.1993 9.2161 22.0055 9.94476 21.5983C10.6734 21.1912 11.2653 20.5992 12.2337 19.6306L18.3105 13.5537Z',
  d6: 'M1.52239 3.98045C3.10442 2.3024 5.30627 1.25 7.75 1.25C10.1937 1.25 12.3956 2.3024 13.9776 3.98045C14.3565 4.3823 14.3378 5.01519 13.936 5.39405C13.5341 5.77291 12.9012 5.75427 12.5224 5.35242C11.2893 4.04448 9.60203 3.25 7.75 3.25C5.89797 3.25 4.21073 4.04448 2.97762 5.35242C2.59876 5.75427 1.96587 5.77291 1.56402 5.39405C1.16217 5.01519 1.14353 4.3823 1.52239 3.98045ZM4.27239 6.89735C5.15064 5.9658 6.38021 5.37512 7.75 5.37512C9.1198 5.37512 10.3494 5.9658 11.2276 6.89735C11.6065 7.2992 11.5878 7.93209 11.186 8.31095C10.7841 8.68981 10.1512 8.67117 9.77239 8.26932C9.24306 7.70787 8.52809 7.37512 7.75 7.37512C6.97191 7.37512 6.25694 7.70787 5.72762 8.26932C5.34876 8.67117 4.71587 8.68981 4.31402 8.31095C3.91217 7.93209 3.89353 7.2992 4.27239 6.89735ZM6.74103 10.25C6.74103 9.69772 7.18875 9.25 7.74103 9.25H7.75002C8.3023 9.25 8.75002 9.69772 8.75002 10.25C8.75002 10.8023 8.3023 11.25 7.75002 11.25H7.74103C7.18875 11.25 6.74103 10.8023 6.74103 10.25Z',
  d7: 'M7.49219 10H7.50118',
  d8: 'M13.0033 4.41644C11.5953 2.92344 9.65016 2 7.50164 2C5.35312 2 3.40799 2.92344 2 4.41644M4.75082 7.33333C5.45482 6.58683 6.42738 6.12512 7.50164 6.12512C8.5759 6.12512 9.54846 6.58683 10.2525 7.33333',
  d9: 'M15.9145 9.03282L6.00785 18.9876L6.00781 22.0001H8.98879L19.0426 11.9879M15.9145 9.03282L18.9711 6.02868C19.0106 5.98986 19.0741 5.99053 19.1128 6.03018L21.9716 8.96158C22.01 9.00098 22.0094 9.06404 21.9702 9.10267L19.0426 11.9879M15.9145 9.03282L19.0426 11.9879',
  d10: 'M19.5284 5.46967C19.2355 5.17678 18.7606 5.17678 18.4677 5.46967L15.9997 7.93772L20.0598 11.999L22.5284 9.53033C22.8213 9.23744 22.8213 8.76256 22.5284 8.46967L19.5284 5.46967Z',
  d11: 'M18.9991 13.0596L14.939 8.99838L5.24805 18.6893V22.75H9.30871L18.9991 13.0596Z',
  d12: 'M6.49219 10C6.49219 9.44772 6.9399 9 7.49219 9H7.50117C8.05345 9 8.50117 9.44772 8.50117 10C8.50117 10.5523 8.05345 11 7.50117 11H7.49219C6.9399 11 6.49219 10.5523 6.49219 10Z',
  d13: 'M1.25 3.98045C2.83204 2.3024 5.03388 1.25 7.47762 1.25C9.92135 1.25 12.1232 2.3024 13.7052 3.98045L12.25 5.35242C11.0169 4.04448 9.32965 3.25 7.47762 3.25C5.62558 3.25 3.93834 4.04448 2.70523 5.35242L1.25 3.98045ZM4 6.89735C4.87825 5.9658 6.10782 5.37512 7.47762 5.37512C8.84741 5.37512 10.077 5.9658 10.9552 6.89735L9.5 8.26932C8.97068 7.70787 8.25571 7.37512 7.47762 7.37512C6.69953 7.37512 5.98455 7.70787 5.45523 8.26932L4 6.89735Z',
} as const;

export const IconPenConnectWifiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-stroke-rounded IconPenConnectWifiStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-duotone-rounded IconPenConnectWifiDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-twotone-rounded IconPenConnectWifiTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-solid-rounded IconPenConnectWifiSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-bulk-rounded IconPenConnectWifiBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-stroke-sharp IconPenConnectWifiStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectWifiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-wifi-solid-sharp IconPenConnectWifiSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfPenConnectWifi: TheIconSelfPack = {
  name: 'PenConnectWifi',
  StrokeRounded: IconPenConnectWifiStrokeRounded,
  DuotoneRounded: IconPenConnectWifiDuotoneRounded,
  TwotoneRounded: IconPenConnectWifiTwotoneRounded,
  SolidRounded: IconPenConnectWifiSolidRounded,
  BulkRounded: IconPenConnectWifiBulkRounded,
  StrokeSharp: IconPenConnectWifiStrokeSharp,
  SolidSharp: IconPenConnectWifiSolidSharp,
};