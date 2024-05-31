import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 22L6 15L3 22H9Z',
  d2: 'M18.1917 13.3352C19.4847 14.6282 20.1312 15.2747 19.9778 16.2732C19.9707 16.3193 19.9548 16.3994 19.9437 16.4447C19.7033 17.4259 19.0448 17.6987 17.7276 18.2443C16.5231 18.7432 15.2321 19 13.9283 19C12.6245 19 11.3334 18.7432 10.1289 18.2443C8.92433 17.7453 7.82984 17.014 6.90792 16.0921C5.986 15.1702 5.25468 14.0757 4.75574 12.8711C4.2568 11.6666 4 10.3755 4 9.07173C4 7.76794 4.2568 6.4769 4.75575 5.27235C5.30131 3.95524 5.5741 3.29668 6.55528 3.05633C6.60061 3.04523 6.68071 3.0293 6.72683 3.02221C7.72531 2.86878 8.3718 3.51527 9.66479 4.80826L18.1917 13.3352Z',
  d3: 'M12.5 7.13288L17.7134 5.5293L15.8766 10.5293',
  d4: 'M18.2348 13.3177C19.5317 14.6146 20.1801 15.2631 20.0262 16.2646C20.0191 16.3108 20.0031 16.3912 19.992 16.4367C19.7509 17.4208 19.0904 17.6944 17.7693 18.2417C16.5611 18.7421 15.2661 18.9997 13.9584 18.9997C12.6506 18.9997 11.3557 18.7421 10.1475 18.2417C8.93926 17.7412 7.84146 17.0077 6.91674 16.0829C5.99202 15.1582 5.25849 14.0604 4.75803 12.8522C4.25758 11.644 4 10.3491 4 9.04132C4 7.73356 4.25758 6.43862 4.75804 5.23041C5.30526 3.9093 5.57887 3.24875 6.56303 3.00768C6.60849 2.99654 6.68884 2.98056 6.7351 2.97345C7.7366 2.81955 8.38506 3.468 9.68197 4.76491L18.2348 13.3177Z',
  d5: 'M17.7134 5.53125L12.5 7.13484L15.8766 10.5312L17.7134 5.53125Z',
  d6: 'M12.5 7.13264L17.7134 5.52905L15.8766 10.5291M21 4C21 5.10457 20.1046 6 19 6C17.8954 6 17 5.10457 17 4C17 2.89543 17.8954 2 19 2C20.1046 2 21 2.89543 21 4Z',
  d7: 'M19.2509 1.25C17.8701 1.25 16.7509 2.36929 16.7509 3.75C16.7509 4.0937 16.8202 4.4212 16.9457 4.71926C15.3574 5.20782 13.7352 5.63766 12.168 6.1897L13.7676 7.78929L16.08 7.07803L15.2676 9.28934L16.8259 10.8476L18.5513 6.15079C18.7733 6.21537 19.008 6.25 19.2509 6.25C20.6316 6.25 21.7509 5.13071 21.7509 3.75C21.7509 2.36929 20.6316 1.25 19.2509 1.25Z',
  d8: 'M18.8126 12.8369L18.8126 12.8369L10.1648 4.18905C9.55714 3.58132 9.02785 3.05194 8.51891 2.70655C7.94989 2.32039 7.3492 2.12229 6.62119 2.23416C5.92414 2.34128 5.30273 2.70257 4.8883 3.27745C3.74606 4.86187 3.25 7.13919 3.25 9.04333C3.25 11.8635 4.39224 14.6211 6.38641 16.6153C8.38057 18.6095 11.1382 19.7517 13.9584 19.7517C15.8597 19.7517 18.142 19.2541 19.7242 18.1134C20.2991 17.699 20.6604 17.0776 20.7675 16.3805C20.8794 15.6525 20.6813 15.0518 20.2951 14.4828C19.9498 13.9739 19.4204 13.4446 18.8126 12.8369Z',
  d9: 'M9.68936 21.7062C9.78867 21.9379 9.76492 22.204 9.62613 22.4145C9.48735 22.6249 9.25211 22.7516 9 22.7516H3C2.7479 22.7516 2.51265 22.6249 2.37387 22.4145C2.23509 22.204 2.21133 21.9379 2.31064 21.7062L4.06106 17.6219C4.23413 17.218 4.32067 17.0161 4.47974 16.9875C4.63881 16.959 4.79609 17.1244 5.11065 17.4553C5.18138 17.5296 5.25308 17.6032 5.32575 17.6758C6.3438 18.6939 7.53297 19.5229 8.83761 20.1257C8.94656 20.1761 9.00104 20.2013 9.0398 20.2411C9.07857 20.281 9.10142 20.3343 9.14713 20.441L9.68936 21.7062Z',
  d10: 'M4 9C4 14.5228 8.47715 19 14 19C16.7255 19 19.1962 17.9097 21 16.1414L6.85857 2C5.09032 3.80375 4 6.27455 4 9Z',
  d11: 'M21.7496 16.4627L21.2086 16.993C19.2704 18.8931 16.6132 20.066 13.6836 20.066C7.74653 20.066 2.93359 15.253 2.93359 9.31596C2.93359 6.38635 4.10647 3.72919 6.00659 1.79092L6.53686 1.25L21.7496 16.4627Z',
  d12: 'M16.25 4C16.25 2.48122 17.4812 1.25 19 1.25C20.5188 1.25 21.75 2.48122 21.75 4C21.75 5.51878 20.5188 6.75 19 6.75C17.4812 6.75 16.25 5.51878 16.25 4Z',
  d13: 'M18.258 5.0134C18.454 5.22028 18.5159 5.5204 18.4176 5.78794L16.5808 10.7879C16.438 11.1767 16.007 11.3762 15.6182 11.2333C15.2294 11.0905 15.03 10.6595 15.1728 10.2707L16.4879 6.69103L12.7207 7.84976C12.3248 7.97154 11.9051 7.74931 11.7833 7.3534C11.6616 6.9575 11.8838 6.53783 12.2797 6.41605L17.4931 4.81246C17.7655 4.72867 18.0619 4.80653 18.258 5.0134Z',
  d14: 'M4.3745 16.8887L2.31064 21.7043C2.21133 21.936 2.23509 22.2022 2.37387 22.4126C2.51265 22.6231 2.7479 22.7498 3 22.7498H9C9.25211 22.7498 9.48735 22.6231 9.62613 22.4126C9.76492 22.2022 9.78867 21.936 9.68936 21.7043L9.14166 20.4264C7.26901 19.66 5.63319 18.4341 4.3745 16.8887Z',
} as const;

export const IconSatelliteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-stroke-rounded IconSatelliteStrokeRounded"
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
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatelliteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-duotone-rounded IconSatelliteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatelliteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-twotone-rounded IconSatelliteTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatelliteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-solid-rounded IconSatelliteSolidRounded"
    >
      <path 
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

export const IconSatelliteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-bulk-rounded IconSatelliteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSatelliteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-stroke-sharp IconSatelliteStrokeSharp"
    >
      <path 
        d={d.d1} 
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
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatelliteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-solid-sharp IconSatelliteSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfSatellite: TheIconSelfPack = {
  name: 'Satellite',
  StrokeRounded: IconSatelliteStrokeRounded,
  DuotoneRounded: IconSatelliteDuotoneRounded,
  TwotoneRounded: IconSatelliteTwotoneRounded,
  SolidRounded: IconSatelliteSolidRounded,
  BulkRounded: IconSatelliteBulkRounded,
  StrokeSharp: IconSatelliteStrokeSharp,
  SolidSharp: IconSatelliteSolidSharp,
};