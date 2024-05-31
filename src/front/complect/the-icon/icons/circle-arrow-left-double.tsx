import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0846 15C11.0846 15 8.50001 12.7905 8.5 12C8.49999 11.2094 11.0846 9 11.0846 9M15.5 15C15.5 15 12.9154 12.7905 12.9154 12C12.9154 11.2094 15.5 9 15.5 9',
  d2: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM10.5148 8.19192C10.8481 7.90483 11.3494 7.94435 11.6344 8.28019C11.9194 8.61601 11.88 9.12108 11.5467 9.40818L11.1363 9.77434C10.8862 10.0026 10.5551 10.3133 10.2261 10.6473C9.89379 10.9847 9.57948 11.3298 9.35359 11.6288C9.2402 11.7789 9.1625 11.8998 9.11644 11.9891L9.11092 12L9.11645 12.0109C9.16251 12.1002 9.2402 12.2211 9.35359 12.3712C9.57949 12.6701 9.89379 13.0153 10.2261 13.3527C10.5551 13.6867 10.8862 13.9974 11.1363 14.2257L11.5468 14.5919C11.8801 14.879 11.9194 15.384 11.6344 15.7198C11.3494 16.0557 10.8481 16.0952 10.5147 15.8081L10.07 15.4115C9.807 15.1715 9.45392 14.8403 9.09873 14.4797C8.74692 14.1225 8.37707 13.7204 8.08985 13.3403C7.94668 13.1508 7.81057 12.9493 7.70697 12.7483C7.6123 12.5647 7.5 12.2979 7.5 12C7.5 11.702 7.6123 11.4353 7.70697 11.2516C7.81057 11.0507 7.94668 10.8491 8.08985 10.6597C8.37707 10.2796 8.74693 9.87746 9.09875 9.52028C9.45394 9.15968 9.80702 8.82852 10.07 8.58851L10.5148 8.19192ZM13.2739 9.52028C13.6291 9.15968 13.9821 8.82852 14.2452 8.58851L14.6899 8.19192C14.9255 7.98904 15.2567 7.94277 15.5382 8.07343C15.8197 8.20408 16 8.48778 16 8.80001L16 15.2C16 15.5122 15.8197 15.7959 15.5382 15.9266C15.2567 16.0572 14.9254 16.011 14.6898 15.8081L14.2451 15.4115C13.9821 15.1715 13.629 14.8403 13.2738 14.4797C12.922 14.1225 12.5522 13.7204 12.265 13.3403C12.1218 13.1508 11.9857 12.9493 11.8821 12.7483C11.7874 12.5647 11.6751 12.2979 11.6751 12C11.6751 11.702 11.7874 11.4353 11.8821 11.2516C11.9857 11.0507 12.1218 10.8491 12.265 10.6597C12.5522 10.2796 12.922 9.87746 13.2739 9.52028Z',
  d3: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d4: 'M11.6344 8.28019C11.3494 7.94435 10.8481 7.90483 10.5148 8.19192L10.07 8.58851C9.80702 8.82852 9.45394 9.15968 9.09875 9.52028C8.74693 9.87746 8.37707 10.2796 8.08985 10.6597C7.94668 10.8491 7.81057 11.0507 7.70697 11.2516C7.6123 11.4353 7.5 11.702 7.5 12C7.5 12.2979 7.6123 12.5647 7.70697 12.7483C7.81057 12.9493 7.94668 13.1508 8.08985 13.3403C8.37707 13.7204 8.74692 14.1225 9.09873 14.4797C9.45392 14.8403 9.807 15.1715 10.07 15.4115L10.5147 15.8081C10.8481 16.0952 11.3494 16.0557 11.6344 15.7198C11.9194 15.384 11.8801 14.879 11.5468 14.5919L11.1363 14.2257C10.8862 13.9974 10.5551 13.6867 10.2261 13.3527C9.89379 13.0153 9.57949 12.6701 9.35359 12.3712C9.2402 12.2211 9.16251 12.1002 9.11645 12.0109L9.11092 12L9.11644 11.9891C9.1625 11.8998 9.2402 11.7789 9.35359 11.6288C9.57948 11.3298 9.89379 10.9847 10.2261 10.6473C10.5551 10.3133 10.8862 10.0026 11.1363 9.77434L11.5467 9.40818C11.88 9.12108 11.9194 8.61601 11.6344 8.28019Z',
  d5: 'M14.2452 8.58851C13.9821 8.82852 13.6291 9.15968 13.2739 9.52028C12.922 9.87746 12.5522 10.2796 12.265 10.6597C12.1218 10.8491 11.9857 11.0507 11.8821 11.2516C11.7874 11.4353 11.6751 11.702 11.6751 12C11.6751 12.2979 11.7874 12.5647 11.8821 12.7483C11.9857 12.9493 12.1218 13.1508 12.265 13.3403C12.5522 13.7204 12.922 14.1225 13.2738 14.4797C13.629 14.8403 13.9821 15.1715 14.2451 15.4115L14.6899 15.8081C14.9254 16.011 15.2567 16.0572 15.5382 15.9266C15.8197 15.7959 16 15.5122 16 15.2L16 8.80001C16 8.48778 15.8197 8.20408 15.5382 8.07343C15.2567 7.94277 14.9255 7.98903 14.6899 8.19192L14.2452 8.58851Z',
  d6: 'M16 8L13 12L16 16M11 8L8 12L11 16',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.6 8.45005L10.4 7.55005L7.0625 12L10.4 16.4501L11.6 15.5501L8.9375 12.0001L11.6 8.45005ZM16.6 8.45005L15.4 7.55005L12.0625 12L15.4 16.4501L16.6 15.5501L13.9375 12.0001L16.6 8.45005Z',
} as const;

export const IconCircleArrowLeftDoubleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-stroke-rounded IconCircleArrowLeftDoubleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-duotone-rounded IconCircleArrowLeftDoubleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-twotone-rounded IconCircleArrowLeftDoubleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-solid-rounded IconCircleArrowLeftDoubleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-bulk-rounded IconCircleArrowLeftDoubleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-stroke-sharp IconCircleArrowLeftDoubleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeftDoubleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-double-solid-sharp IconCircleArrowLeftDoubleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowLeftDouble: TheIconSelfPack = {
  name: 'CircleArrowLeftDouble',
  StrokeRounded: IconCircleArrowLeftDoubleStrokeRounded,
  DuotoneRounded: IconCircleArrowLeftDoubleDuotoneRounded,
  TwotoneRounded: IconCircleArrowLeftDoubleTwotoneRounded,
  SolidRounded: IconCircleArrowLeftDoubleSolidRounded,
  BulkRounded: IconCircleArrowLeftDoubleBulkRounded,
  StrokeSharp: IconCircleArrowLeftDoubleStrokeSharp,
  SolidSharp: IconCircleArrowLeftDoubleSolidSharp,
};