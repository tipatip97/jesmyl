import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 22L14 13L9 22',
  d2: 'M15.9196 4L7.02715 9.2559C6.04492 9.83645 5.70838 11.1222 6.27548 12.1278L7.30228 13.9485C7.86937 14.954 9.12535 15.2985 10.1076 14.718L19 9.46209',
  d3: 'M16.2195 4.45572C15.7677 3.67278 16.0358 2.67162 16.8184 2.21959C17.601 1.76755 18.6017 2.03581 19.0535 2.81876L21.7805 7.54428C22.2323 8.32723 21.9642 9.32838 21.1816 9.78042C20.399 10.2325 19.3983 9.96419 18.9465 9.18124L16.2195 4.45572Z',
  d4: 'M2 14.2645L2.73817 15.6322M2.73817 15.6322L3.47634 17M2.73817 15.6322L6.5 13.5',
  d5: 'M15.9196 4L7.02715 9.2559C6.04492 9.83645 5.70838 11.1222 6.27548 12.1278L7.30228 13.9485C7.86937 14.954 9.12535 15.2985 10.1076 14.718L19 9.46209L15.9196 4Z',
  d6: 'M16.4434 1.57027C17.5849 0.910918 19.0444 1.30235 19.7032 2.44402L22.4302 7.16954C23.089 8.311 22.6982 9.77075 21.5569 10.43C20.4154 11.0893 18.9559 10.6979 18.297 9.55624L15.57 4.83073C14.9113 3.68926 15.3021 2.22951 16.4434 1.57027Z',
  d7: 'M13.7502 11.75C14.1133 11.75 14.448 11.9469 14.6243 12.2644L19.6243 21.2644C19.8926 21.7471 19.7186 22.3559 19.2358 22.6242C18.753 22.8924 18.1442 22.7184 17.876 22.2356L13.7502 14.8091L9.62434 22.2356C9.35613 22.7184 8.74732 22.8924 8.26454 22.6242C7.78176 22.3559 7.60781 21.7471 7.87602 21.2644L12.876 12.2644C13.0524 11.9469 13.387 11.75 13.7502 11.75Z',
  d8: 'M6.7113 14.4207C7.50793 15.704 9.17333 16.1403 10.4894 15.3625L17.4071 11.2738C17.6101 11.1538 17.7116 11.0938 17.7283 11.0047C17.745 10.9155 17.6656 10.8144 17.5067 10.6121C17.4007 10.477 17.3029 10.3328 17.2145 10.1797L14.4875 5.45423C14.365 5.24196 14.2663 5.02247 14.1907 4.79885C14.1009 4.53366 14.056 4.40107 13.9667 4.36792C13.8774 4.33478 13.7671 4.39996 13.5465 4.53033L6.6457 8.60909C5.30509 9.40146 4.85868 11.1409 5.62237 12.495L5.72661 12.6799L3.38348 14.008L3.13021 13.5387C2.86791 13.0527 2.26127 12.8713 1.77525 13.1336C1.28923 13.396 1.10787 14.0026 1.37018 14.4886L2.84652 17.2241C3.10882 17.7101 3.71546 17.8915 4.20148 17.6292C4.6875 17.3669 4.86885 16.7603 4.60655 16.2742L4.33356 15.7684L6.7113 14.4207Z',
  d9: 'M10.4891 15.3641C9.13777 16.1628 7.41815 15.6814 6.64887 14.3174L5.62206 12.4967C4.85838 11.1426 5.30479 9.40311 6.6454 8.61074L13.7974 4.3835C13.9184 4.312 14.0739 4.38432 14.1081 4.52063C14.1884 4.84099 14.314 5.15566 14.4872 5.45588L17.2142 10.1814C17.3483 10.4137 17.5042 10.6257 17.6777 10.8162C17.7673 10.9144 17.7495 11.0728 17.6351 11.1405L10.4891 15.3641Z',
  d10: 'M5.72638 12.6797L3.38348 14.0077L3.13021 13.5384C2.86791 13.0524 2.26127 12.871 1.77525 13.1333C1.28923 13.3956 1.10787 14.0023 1.37018 14.4883L2.84652 17.2238C3.10882 17.7098 3.71546 17.8912 4.20148 17.6289C4.6875 17.3666 4.86885 16.7599 4.60655 16.2739L4.33356 15.7681L6.71108 14.4205C6.68971 14.3861 6.66897 14.351 6.64887 14.3154L5.72638 12.6797Z',
  d11: 'M11.4796 14.7784L7.87602 21.2648C7.60781 21.7476 7.78176 22.3564 8.26454 22.6246C8.74732 22.8928 9.35613 22.7189 9.62434 22.2361L13.7502 14.8096L17.876 22.2361C18.1442 22.7189 18.753 22.8928 19.2358 22.6246C19.7186 22.3564 19.8926 21.7476 19.6243 21.2648L14.8982 12.7578L11.4796 14.7784Z',
  d12: 'M16.002 4L5.00195 10.5L8.00195 16L19.002 9.5',
  d13: 'M14.2511 12.0146C14.6143 12.0146 14.9489 12.2115 15.1253 12.529L20.1253 21.529L18.377 22.5002L14.2511 15.0737L10.1253 22.5002L8.37695 21.529L13.377 12.529C13.5533 12.2115 13.8879 12.0146 14.2511 12.0146Z',
  d14: 'M16.6953 1.82027C17.8368 1.16092 19.2963 1.55235 19.9552 2.69402L22.6822 7.41954C23.3409 8.561 22.9501 10.0208 21.8088 10.68C20.6673 11.3393 19.2078 10.9479 18.549 9.80624L15.822 5.08073C15.1632 3.93926 15.554 2.47951 16.6953 1.82027Z',
  d15: 'M3.96339 16.2691L6.87313 14.6198L5.88691 12.8799L3.0133 14.5087L2.76004 14.0394L1 14.9893L2.47634 17.7248L4.23638 16.7749L3.96339 16.2691Z',
  d16: 'M14.3456 4.50537L4.24609 10.4732L7.9648 17.2909L18.1104 11.2957L14.3456 4.50537Z',
} as const;

export const IconTelescope02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-stroke-rounded IconTelescope02StrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTelescope02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-duotone-rounded IconTelescope02DuotoneRounded"
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
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTelescope02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-twotone-rounded IconTelescope02TwotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTelescope02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-solid-rounded IconTelescope02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTelescope02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-bulk-rounded IconTelescope02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTelescope02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-stroke-sharp IconTelescope02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTelescope02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="telescope-02-solid-sharp IconTelescope02SolidSharp"
    >
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

export const iconPackOfTelescope02: TheIconSelfPack = {
  name: 'Telescope02',
  StrokeRounded: IconTelescope02StrokeRounded,
  DuotoneRounded: IconTelescope02DuotoneRounded,
  TwotoneRounded: IconTelescope02TwotoneRounded,
  SolidRounded: IconTelescope02SolidRounded,
  BulkRounded: IconTelescope02BulkRounded,
  StrokeSharp: IconTelescope02StrokeSharp,
  SolidSharp: IconTelescope02SolidSharp,
};