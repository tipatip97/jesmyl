import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z',
  d2: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d3: 'M19.0007 12H14M19.0007 12C19.0007 11.4398 16.9999 10 16.9999 10M19.0007 12C19.0007 12.5602 16.9999 14 16.9999 14',
  d4: 'M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z',
  d5: 'M13.5 12H19',
  d6: 'M17 10C17.4046 10.3932 19 11.4398 19 12C19 12.5602 17.4046 13.6068 17 14',
  d7: 'M19.0007 12H14M19.0007 12C19.0007 11.4398 16.9999 10 16.9999 10M19.0007 12C19.0007 12.5602 16.9999 14 16.9999 14M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z',
  d8: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM14.0161 13C13.6479 13.7409 12.8834 14.25 12 14.25C10.7574 14.25 9.75 13.2427 9.75 12C9.75 10.7574 10.7574 9.75003 12 9.75003C12.8834 9.75003 13.6479 10.2592 14.0161 11H16.25V10C16.2499 9.82767 16.3089 9.65445 16.4295 9.5131C16.6985 9.19805 17.1719 9.16065 17.4869 9.42956L18.6908 10.4571C18.9388 10.6688 19.1796 10.8742 19.3521 11.0671C19.5416 11.2791 19.75 11.5845 19.75 12C19.75 12.4155 19.5416 12.7209 19.3521 12.9329C19.1796 13.1259 18.9388 13.3313 18.6908 13.5429L18.6908 13.5429L17.4869 14.5705C17.1719 14.8394 16.6985 14.802 16.4295 14.4869C16.3087 14.3454 16.2497 14.1719 16.25 13.9993V13H14.0161Z',
  d9: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z',
  d10: 'M12 14.25C12.8834 14.25 13.6479 13.7409 14.0161 13H16.25V13.9993C16.2497 14.1719 16.3087 14.3454 16.4295 14.4869C16.6985 14.802 17.1719 14.8394 17.4869 14.5705L18.6908 13.5429C18.9388 13.3313 19.1796 13.1259 19.3521 12.9329C19.5416 12.7209 19.75 12.4155 19.75 12C19.75 11.5845 19.5416 11.2791 19.3521 11.0671C19.1796 10.8742 18.9388 10.6688 18.6908 10.4571L17.4869 9.42956C17.1719 9.16065 16.6985 9.19805 16.4295 9.5131C16.3089 9.65445 16.2499 9.82767 16.25 10V11H14.0161C13.6479 10.2592 12.8834 9.75003 12 9.75003C10.7574 9.75003 9.75 10.7574 9.75 12C9.75 13.2427 10.7574 14.25 12 14.25Z',
  d11: 'M15.9863 15.0046L18.9858 11.9971L16.0015 8.99902',
  d12: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM12 14.25C12.8834 14.25 13.6479 13.7409 14.0161 13H16.1712L14.8782 14.293L16.2924 15.7072L19.9995 12.0001L16.2924 8.29297L14.8782 9.70718L16.171 11H14.0161C13.6479 10.2591 12.8834 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z',
} as const;

export const IconRadiusStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-stroke-rounded IconRadiusStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-duotone-rounded IconRadiusDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-twotone-rounded IconRadiusTwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-solid-rounded IconRadiusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-bulk-rounded IconRadiusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-stroke-sharp IconRadiusStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadiusSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radius-solid-sharp IconRadiusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRadius: TheIconSelfPack = {
  name: 'Radius',
  StrokeRounded: IconRadiusStrokeRounded,
  DuotoneRounded: IconRadiusDuotoneRounded,
  TwotoneRounded: IconRadiusTwotoneRounded,
  SolidRounded: IconRadiusSolidRounded,
  BulkRounded: IconRadiusBulkRounded,
  StrokeSharp: IconRadiusStrokeSharp,
  SolidSharp: IconRadiusSolidSharp,
};