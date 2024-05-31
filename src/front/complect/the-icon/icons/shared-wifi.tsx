import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.48311 3.65819C6.11715 3.25395 5.58823 3 5 3C3.89543 3 3 3.89543 3 5C3 5.58823 3.25395 6.11716 3.65819 6.48311C4.01303 6.80434 4.48366 7 5 7C6.10457 7 7 6.10457 7 5C7 4.48366 6.80434 4.01303 6.48311 3.65819ZM6.48311 3.65819C8.0644 2.6103 9.96093 2 12 2C12.6849 2 13.3538 2.06886 14 2.20004M20.353 6.5C21.394 8.0779 22 9.96818 22 12C22 12.6849 21.9311 13.3538 21.8 14M17.5169 20.3418C15.9356 21.3897 14.0391 22 12 22C11.3151 22 10.6462 21.9311 10 21.8M17.5169 20.3418C17.8828 20.7461 18.4118 21 19 21C20.1046 21 21 20.1046 21 19C21 18.4118 20.7461 17.8828 20.3418 17.5169C19.987 17.1957 19.5163 17 19 17C17.8954 17 17 17.8954 17 19C17 19.5163 17.1957 19.987 17.5169 20.3418ZM3.65819 17.5169C2.6103 15.9356 2 14.0391 2 12C2 11.3151 2.06886 10.6462 2.20004 10M3.65819 17.5169C3.25395 17.8828 3 18.4118 3 19C3 20.1046 3.89543 21 5 21C5.58823 21 6.11715 20.7461 6.48311 20.3418C6.80434 19.987 7 19.5163 7 19C7 17.8954 6.10457 17 5 17C4.48366 17 4.01303 17.1957 3.65819 17.5169ZM21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 4.48366 17.1957 4.01303 17.5169 3.65819C17.8828 3.25395 18.4118 3 19 3C20.1046 3 21 3.89543 21 5Z',
  d2: 'M8 10.4778C9.14883 9.54314 10.5209 9 11.9946 9C13.4729 9 14.849 9.54657 16 10.4866M14.1743 13C13.5182 12.5909 12.7779 12.3607 11.9946 12.3607C11.2152 12.3607 10.4784 12.5886 9.82477 12.9938',
  d3: 'M12 16H12.0064',
  d4: 'M20.3418 17.5169C21.3897 15.9356 22 14.0391 22 12C22 9.96093 21.3897 8.0644 20.3418 6.48311C19.987 6.80433 19.5163 7 19 7C17.8954 7 17 6.10457 17 5C17 4.48366 17.1957 4.01303 17.5169 3.65819C15.9356 2.6103 14.0391 2 12 2C9.96093 2 8.0644 2.6103 6.48311 3.65819C6.80434 4.01303 7 4.48366 7 5C7 6.10457 6.10457 7 5 7C4.48366 7 4.01303 6.80434 3.65819 6.48311C2.6103 8.0644 2 9.96093 2 12C2 14.0391 2.6103 15.9356 3.65819 17.5169C4.01303 17.1957 4.48366 17 5 17C6.10457 17 7 17.8954 7 19C7 19.5163 6.80434 19.987 6.48311 20.3418C8.0644 21.3897 9.96093 22 12 22C14.0391 22 15.9356 21.3897 17.5169 20.3418C17.1957 19.987 17 19.5163 17 19C17 17.8954 17.8954 17 19 17C19.5163 17 19.987 17.1957 20.3418 17.5169Z',
  d5: 'M12 3C10.4962 3 9.08033 3.36812 7.83568 4.01906C7.9421 4.3266 8 4.65677 8 5C8 6.65685 6.65685 8 5 8C4.2261 8 3.51861 7.70565 2.98706 7.22445C2.38224 6.67692 2 5.8824 2 5C2 3.34315 3.34315 2 5 2C5.57126 2 6.10569 2.16021 6.56011 2.43729C8.16497 1.52257 10.0226 1 12 1C12.7521 1 13.4876 1.07563 14.1989 1.22002C14.7402 1.32989 15.0899 1.85772 14.98 2.39897C14.8701 2.94021 14.3423 3.28992 13.8011 3.18005C13.22 3.06209 12.6177 3 12 3Z',
  d6: 'M16.7755 2.98707C17.3231 2.38225 18.1176 2 19 2C20.6569 2 22 3.34315 22 5C22 5.57151 21.8402 6.10569 21.5628 6.5603C22.4775 8.16513 23 10.0227 23 12C23 12.7521 22.9244 13.4876 22.78 14.1989C22.6701 14.7402 22.1423 15.0899 21.601 14.98C21.0598 14.8701 20.7101 14.3423 20.82 13.8011C20.9379 13.22 21 12.6177 21 12C21 10.4962 20.6319 9.0805 19.9811 7.83592C19.6737 7.94225 19.3436 8 19 8C17.3431 8 16 6.65685 16 5C16 4.2261 16.2944 3.51861 16.7755 2.98707Z',
  d7: 'M2.39897 9.01999C2.94021 9.12985 3.28992 9.65769 3.18005 10.1989C3.06209 10.78 3 11.3823 3 12C3 13.5038 3.36812 14.9197 4.01906 16.1643C4.32661 16.0579 4.65677 16 5 16C6.65685 16 8 17.3431 8 19C8 19.7739 7.70565 20.4814 7.22445 21.0129C6.67692 21.6178 5.88241 22 5 22C3.34315 22 2 20.6569 2 19C2 18.4287 2.16021 17.8943 2.43729 17.4399C1.52257 15.835 1 13.9774 1 12C1 11.2479 1.07563 10.5124 1.22002 9.80107C1.32989 9.25982 1.85772 8.91012 2.39897 9.01999Z',
  d8: 'M16 19C16 17.3431 17.3431 16 19 16C19.7739 16 20.4814 16.2944 21.0129 16.7755C21.6178 17.3231 22 18.1176 22 19C22 20.6569 20.6569 22 19 22C18.4287 22 17.8943 21.8398 17.4399 21.5627C15.835 22.4774 13.9774 23 12 23C11.2479 23 10.5124 22.9244 9.80107 22.78C9.25982 22.6701 8.91012 22.1423 9.01999 21.601C9.12985 21.0598 9.65769 20.7101 10.1989 20.82C10.78 20.9379 11.3823 21 12 21C13.5038 21 14.9197 20.6319 16.1643 19.9809C16.0579 19.6734 16 19.3432 16 19Z',
  d9: 'M11.9946 8C10.2653 8 8.67508 8.63946 7.36896 9.70203C6.94054 10.0506 6.87578 10.6804 7.22431 11.1088C7.57284 11.5373 8.20269 11.602 8.63111 11.2535C9.62265 10.4468 10.7765 10 11.9946 10C13.2165 10 14.3738 10.4496 15.3675 11.2611C15.7952 11.6105 16.4252 11.5469 16.7746 11.1192C17.1239 10.6914 17.0603 10.0614 16.6326 9.71209C15.3241 8.64352 13.7294 8 11.9946 8Z',
  d10: 'M11.9946 11.3607C11.0147 11.3607 10.0971 11.6484 9.29784 12.144C8.82846 12.435 8.68388 13.0514 8.97491 13.5208C9.26595 13.9902 9.88239 14.1348 10.3518 13.8437C10.8598 13.5288 11.4157 13.3607 11.9946 13.3607C12.5764 13.3607 13.1351 13.5304 13.6452 13.8485C14.1138 14.1408 14.7306 13.9978 15.0228 13.5291C15.3151 13.0605 15.1721 12.4437 14.7034 12.1515C13.9013 11.6513 12.9795 11.3607 11.9946 11.3607Z',
  d11: 'M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H12.0064C12.5587 17 13.0064 16.5523 13.0064 16C13.0064 15.4477 12.5587 15 12.0064 15H12Z',
  d12: 'M7.67156 4.34579C8.95071 3.61937 10.4297 3.20455 12.0078 3.20455C12.6115 3.20455 13.2 3.26522 13.7679 3.3805L14.1568 1.46502C13.4616 1.32391 12.7428 1.25 12.0078 1.25C10.0197 1.25 8.15546 1.79054 6.55665 2.73282C6.11423 2.42863 5.57771 2.25 5 2.25C3.48122 2.25 2.25 3.48122 2.25 5C2.25 5.80886 2.60017 6.53698 3.15485 7.03912C3.64221 7.48032 4.29049 7.75 5 7.75C6.51878 7.75 7.75 6.51878 7.75 5C7.75 4.77469 7.7228 4.55556 7.67156 4.34579Z',
  d13: 'M19.665 7.66904C20.3896 8.94697 20.8033 10.424 20.8033 12C20.8033 12.6037 20.7426 13.1922 20.6273 13.7601L22.5428 14.149C22.6839 13.4538 22.7578 12.735 22.7578 12C22.7578 10.0112 22.2169 8.14624 21.2739 6.54701C21.5744 6.10626 21.75 5.57364 21.75 5C21.75 3.48122 20.5188 2.25 19 2.25C18.1911 2.25 17.463 2.60017 16.9609 3.15485C16.5197 3.64221 16.25 4.29049 16.25 5C16.25 6.51878 17.4812 7.75 19 7.75C19.2293 7.75 19.4521 7.72193 19.665 7.66904Z',
  d14: 'M3.21236 12C3.21236 11.3963 3.27304 10.8078 3.38832 10.2399L1.47283 9.85104C1.33172 10.5462 1.25781 11.265 1.25781 12C1.25781 13.9838 1.79602 15.8443 2.73455 17.4408C2.42931 17.8837 2.25 18.4212 2.25 19C2.25 20.5188 3.48122 21.75 5 21.75C5.80886 21.75 6.53698 21.3998 7.03912 20.8452C7.48032 20.3578 7.75 19.7095 7.75 19C7.75 17.4812 6.51878 16.25 5 16.25C4.77575 16.25 4.55763 16.2769 4.34876 16.3277C3.62534 15.0505 3.21236 13.5746 3.21236 12Z',
  d15: 'M16.3304 19.662C15.0544 20.3836 13.5803 20.7955 12.0078 20.7955C11.4041 20.7955 10.8156 20.7348 10.2477 20.6195L9.85886 22.535C10.554 22.6761 11.2728 22.75 12.0078 22.75C13.9924 22.75 15.8536 22.2114 17.4506 21.2721C17.8916 21.5733 18.4254 21.75 19 21.75C20.5188 21.75 21.75 20.5188 21.75 19C21.75 18.1911 21.3998 17.463 20.8452 16.9609C20.3578 16.5197 19.7095 16.25 19 16.25C17.4812 16.25 16.25 17.4812 16.25 19C16.25 19.2281 16.2779 19.4499 16.3304 19.662Z',
  d16: 'M11.9928 8C10.2635 8 8.67331 8.63946 7.36719 9.70203L8.62934 11.2535C9.62088 10.4468 10.7747 10 11.9928 10C13.2147 10 14.3721 10.4496 15.3657 11.2611L16.6308 9.71209C15.3224 8.64352 13.7276 8 11.9928 8Z',
  d17: 'M11.9928 11.3607C11.0129 11.3607 10.0954 11.6484 9.29607 12.144L10.35 13.8437C10.858 13.5288 11.4139 13.3607 11.9928 13.3607C12.5746 13.3607 13.1333 13.5304 13.6434 13.8485L14.7017 12.1515C13.8996 11.6513 12.9777 11.3607 11.9928 11.3607Z',
  d18: 'M11.9968 15C11.4463 15 11 15.4477 11 16C11 16.5523 11.4463 17 11.9968 17H12.0032C12.5537 17 13 16.5523 13 16C13 15.4477 12.5537 15 12.0032 15H11.9968Z',
} as const;

export const IconSharedWifiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-stroke-rounded IconSharedWifiStrokeRounded"
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

export const IconSharedWifiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-duotone-rounded IconSharedWifiDuotoneRounded"
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconSharedWifiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-twotone-rounded IconSharedWifiTwotoneRounded"
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
      />
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

export const IconSharedWifiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-solid-rounded IconSharedWifiSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconSharedWifiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-bulk-rounded IconSharedWifiBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconSharedWifiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-stroke-sharp IconSharedWifiStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSharedWifiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shared-wifi-solid-sharp IconSharedWifiSolidSharp"
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

export const iconPackOfSharedWifi: TheIconSelfPack = {
  name: 'SharedWifi',
  StrokeRounded: IconSharedWifiStrokeRounded,
  DuotoneRounded: IconSharedWifiDuotoneRounded,
  TwotoneRounded: IconSharedWifiTwotoneRounded,
  SolidRounded: IconSharedWifiSolidRounded,
  BulkRounded: IconSharedWifiBulkRounded,
  StrokeSharp: IconSharedWifiStrokeSharp,
  SolidSharp: IconSharedWifiSolidSharp,
};