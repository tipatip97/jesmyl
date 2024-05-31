import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.2532 19.9167C19.8129 18.2147 21.5 15.3044 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C11.2744 2.5 10.5678 2.58134 9.88889 2.73541M17.2532 19.9167V17M17.2532 19.9167H20.5M6.72222 4.09975C4.17625 5.80396 2.5 8.70623 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C12.7256 21.5 13.4322 21.4187 14.1111 21.2646M6.72222 4.09975V7M6.72222 4.09975H3.5',
  d2: 'M12.5 7L9 12H15L11.5 17',
  d3: 'M21.5 11.9999C21.5 17.2466 17.2467 21.4999 12 21.4999C6.75329 21.4999 2.5 17.2466 2.5 11.9999C2.5 6.75317 6.75329 2.49988 12 2.49988C17.2467 2.49988 21.5 6.75317 21.5 11.9999Z',
  d4: 'M12 3.5C11.3494 3.5 10.717 3.57292 10.1102 3.71062C9.57158 3.83283 9.03589 3.49529 8.91368 2.95669C8.79147 2.4181 9.12901 1.88241 9.6676 1.7602C10.4187 1.58977 11.1995 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 14.6497 21.5181 17.0699 19.9 18.9167H20.5C21.0523 18.9167 21.5 19.3644 21.5 19.9167C21.5 20.469 21.0523 20.9167 20.5 20.9167H17.2532C16.7009 20.9167 16.2532 20.469 16.2532 19.9167V17C16.2532 16.4477 16.7009 16 17.2532 16C17.8055 16 18.2532 16.4477 18.2532 17V17.7576C19.6489 16.2427 20.5 14.2206 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2.5 4.09975C2.5 3.54746 2.94772 3.09975 3.5 3.09975H6.72222C7.27451 3.09975 7.72222 3.54746 7.72222 4.09975V7C7.72222 7.55228 7.27451 8 6.72222 8C6.16994 8 5.72222 7.55228 5.72222 7V6.26917C4.34108 7.7811 3.5 9.79244 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C12.6506 20.5 13.283 20.4271 13.8898 20.2894C14.4284 20.1672 14.9641 20.5047 15.0863 21.0433C15.2085 21.5819 14.871 22.1176 14.3324 22.2398C13.5813 22.4102 12.8005 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 9.35812 2.47614 6.94444 4.08565 5.09975H3.5C2.94772 5.09975 2.5 4.65203 2.5 4.09975Z',
  d5: 'M13.0735 6.18073C13.5259 6.49745 13.6359 7.12098 13.3192 7.57343L10.9207 11H15C15.3729 11 15.7148 11.2074 15.887 11.5382C16.0592 11.8689 16.0331 12.268 15.8192 12.5734L12.3192 17.5734C12.0025 18.0259 11.379 18.1359 10.9265 17.8192C10.4741 17.5025 10.3641 16.879 10.6808 16.4265L13.0793 13H9C8.62713 13 8.28522 12.7925 8.11302 12.4618C7.94083 12.131 7.96694 11.732 8.18077 11.4265L11.6808 6.4265C11.9975 5.97405 12.621 5.86402 13.0735 6.18073Z',
  d6: 'M17.2532 17V19.9167H20.5M6.72222 7V4.09975H3.5M9.88889 2.73541C10.5678 2.58134 11.2744 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 15.0437 20.0687 17.753 17.8424 19.4917M14.1111 21.2646C13.4322 21.4187 12.7256 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 8.89897 3.98581 6.14498 6.28436 4.41108',
  d7: 'M12 3.5C11.3494 3.5 10.717 3.57292 10.1102 3.71062L9.6676 1.7602C10.4187 1.58977 11.1995 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 14.6497 21.5181 17.0699 19.9 18.9167H21.5V20.9167H16.2532V16H18.2532V17.7576C19.6489 16.2427 20.5 14.2206 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z',
  d8: 'M7.72222 8H5.72222V6.26917C4.34108 7.7811 3.5 9.79244 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C12.6506 20.5 13.283 20.4271 13.8898 20.2894L14.3324 22.2398C13.5813 22.4102 12.8005 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 9.35812 2.47614 6.94444 4.08565 5.09975H2.5V3.09975H7.72222V8Z',
  d9: 'M13.8925 6.75422L10.9204 11H16.9204L11.7455 18.3927L10.1071 17.2458L13.0791 13H7.0791L12.254 5.6073L13.8925 6.75422Z',
} as const;

export const IconSustainableEnergyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-stroke-rounded IconSustainableEnergyStrokeRounded"
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

export const IconSustainableEnergyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-duotone-rounded IconSustainableEnergyDuotoneRounded"
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

export const IconSustainableEnergyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-twotone-rounded IconSustainableEnergyTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSustainableEnergySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-solid-rounded IconSustainableEnergySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSustainableEnergyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-bulk-rounded IconSustainableEnergyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSustainableEnergyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-stroke-sharp IconSustainableEnergyStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSustainableEnergySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sustainable-energy-solid-sharp IconSustainableEnergySolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSustainableEnergy: TheIconSelfPack = {
  name: 'SustainableEnergy',
  StrokeRounded: IconSustainableEnergyStrokeRounded,
  DuotoneRounded: IconSustainableEnergyDuotoneRounded,
  TwotoneRounded: IconSustainableEnergyTwotoneRounded,
  SolidRounded: IconSustainableEnergySolidRounded,
  BulkRounded: IconSustainableEnergyBulkRounded,
  StrokeSharp: IconSustainableEnergyStrokeSharp,
  SolidSharp: IconSustainableEnergySolidSharp,
};