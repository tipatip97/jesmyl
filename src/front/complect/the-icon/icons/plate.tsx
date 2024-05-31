import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.4301 13C18.7891 13.5166 19 14.1471 19 14.8276C19 16.5796 17.6018 18 15.8771 18C15.5726 18 15.2783 17.9557 15 17.8732M18.9805 10C20.7855 11.0188 22 12.924 22 15.1063C22 18.3613 19.298 21 15.9648 21C14.4472 21 13.0605 20.453 12 19.5499',
  d2: 'M9 17C12.866 17 16 13.866 16 10C16 6.13401 12.866 3 9 3C5.13401 3 2 6.13401 2 10C2 13.866 5.13401 17 9 17ZM9 14C11.2091 14 13 12.2091 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2091 6.79086 14 9 14Z',
  d3: 'M18.9805 10C20.7855 11.0188 22 12.924 22 15.1063C22 18.3613 19.298 21 15.9648 21C14.4472 21 13.0605 20.453 12 19.5499',
  d4: 'M18.4301 13C18.7891 13.5166 19 14.1471 19 14.8276C19 16.5796 17.6018 18 15.8771 18C15.5726 18 15.2783 17.9557 15 17.8732',
  d5: 'M9 2.25C4.71979 2.25 1.25 5.71979 1.25 10C1.25 14.2802 4.71979 17.75 9 17.75C13.2802 17.75 16.75 14.2802 16.75 10C16.75 5.71979 13.2802 2.25 9 2.25ZM5.75 10C5.75 8.20507 7.20507 6.75 9 6.75C10.7949 6.75 12.25 8.20507 12.25 10C12.25 11.7949 10.7949 13.25 9 13.25C7.20507 13.25 5.75 11.7949 5.75 10ZM9 5.25C6.37665 5.25 4.25 7.37665 4.25 10C4.25 12.6234 6.37665 14.75 9 14.75C11.6234 14.75 13.75 12.6234 13.75 10C13.75 7.37665 11.6234 5.25 9 5.25Z',
  d6: 'M18.2407 9.57488C18.2199 9.11436 18.2095 8.8841 18.3542 8.79063C18.499 8.69717 18.6827 8.79035 19.0501 8.97673C21.2457 10.0906 22.7504 12.3696 22.7504 15.0001C22.7504 18.7281 19.7283 21.7501 16.0004 21.7501C14.1713 21.7501 12.5122 21.0227 11.2965 19.8413C11.0002 19.5533 10.8521 19.4093 10.8936 19.242C10.9351 19.0747 11.1571 19.0098 11.601 18.88C12.2127 18.7012 12.7982 18.4608 13.3502 18.1661C13.5238 18.0734 13.6106 18.0271 13.6905 18.0295C13.7703 18.0319 13.8605 18.0873 14.0407 18.198C14.611 18.5482 15.2821 18.7501 16.0004 18.7501C18.0714 18.7501 19.7504 17.0712 19.7504 15.0001C19.7504 13.8364 19.2202 12.7964 18.3883 12.1086C18.2259 11.9743 18.1447 11.9072 18.1165 11.8326C18.0884 11.7581 18.1038 11.6613 18.1347 11.4677C18.2108 10.9899 18.2504 10.4999 18.2504 10.0006C18.2504 9.85793 18.2471 9.71599 18.2407 9.57488Z',
  d7: 'M17.2184 14.2505C17.4186 13.8643 17.5186 13.6712 17.7117 13.6813C17.9048 13.6914 17.9686 13.8542 18.0961 14.1797C18.1957 14.4339 18.2504 14.7106 18.2504 15.0001C18.2504 16.2428 17.243 17.2501 16.0004 17.2501C15.9666 17.2501 15.9329 17.2494 15.8995 17.2479C15.5515 17.2326 15.3774 17.2249 15.3054 17.0454C15.2334 16.8659 15.3832 16.7095 15.6828 16.3966C16.2912 15.7611 16.8099 15.0389 17.2184 14.2505Z',
  d8: 'M9.00195 2.25C4.72175 2.25 1.25195 5.71979 1.25195 10C1.25195 14.2802 4.72175 17.75 9.00195 17.75C13.2822 17.75 16.752 14.2802 16.752 10C16.752 5.71979 13.2822 2.25 9.00195 2.25ZM5.75195 10C5.75195 8.20507 7.20703 6.75 9.00195 6.75C10.7969 6.75 12.252 8.20507 12.252 10C12.252 11.7949 10.7969 13.25 9.00195 13.25C7.20703 13.25 5.75195 11.7949 5.75195 10ZM9.00195 5.25C6.3786 5.25 4.25195 7.37665 4.25195 10C4.25195 12.6234 6.3786 14.75 9.00195 14.75C11.6253 14.75 13.752 12.6234 13.752 10C13.752 7.37665 11.6253 5.25 9.00195 5.25Z',
  d9: 'M14.998 21.7499C19.2782 21.7499 22.748 18.2801 22.748 13.9999C22.748 10.652 20.6252 7.79996 17.6522 6.71631C18.0398 7.73674 18.2519 8.84354 18.2519 9.9999C18.2519 10.1764 18.247 10.3517 18.2373 10.5257C19.1668 11.3927 19.748 12.6284 19.748 13.9999C19.748 16.6232 17.6214 18.7499 14.998 18.7499C14.2981 18.7499 13.6335 18.5985 13.0352 18.3266C11.8983 18.8783 10.6314 19.204 9.29297 19.2454C10.7094 20.7851 12.741 21.7499 14.998 21.7499Z',
  d10: 'M18.248 13.9999C18.248 15.7948 16.793 17.2499 14.998 17.2499C14.9173 17.2499 14.8373 17.247 14.7581 17.2412C16.2489 16.0545 17.3649 14.4172 17.9001 12.5354C18.1227 12.9755 18.248 13.473 18.248 13.9999Z',
} as const;

export const IconPlateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-stroke-rounded IconPlateStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="9" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="9" 
        cy="10" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconPlateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-duotone-rounded IconPlateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="9" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="9" 
        cy="10" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconPlateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-twotone-rounded IconPlateTwotoneRounded"
    >
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
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="9" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="9" 
        cy="10" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconPlateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-solid-rounded IconPlateSolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-bulk-rounded IconPlateBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconPlateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-stroke-sharp IconPlateStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="9" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="9" 
        cy="10" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconPlateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plate-solid-sharp IconPlateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfPlate: TheIconSelfPack = {
  name: 'Plate',
  StrokeRounded: IconPlateStrokeRounded,
  DuotoneRounded: IconPlateDuotoneRounded,
  TwotoneRounded: IconPlateTwotoneRounded,
  SolidRounded: IconPlateSolidRounded,
  BulkRounded: IconPlateBulkRounded,
  StrokeSharp: IconPlateStrokeSharp,
  SolidSharp: IconPlateSolidSharp,
};