import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 11.0846C9 11.0846 11.2095 8.50001 12 8.5C12.7906 8.49999 15 11.0846 15 11.0846M9 15.5C9 15.5 11.2095 12.9154 12 12.9154C12.7906 12.9154 15 15.5 15 15.5',
  d2: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM8.19191 10.5148C7.90483 10.8481 7.94435 11.3494 8.28019 11.6344C8.61601 11.9194 9.12108 11.88 9.40818 11.5467L9.77434 11.1363C10.0026 10.8862 10.3133 10.5551 10.6473 10.2261C10.9847 9.89379 11.3298 9.57948 11.6288 9.35358C11.7789 9.2402 11.8998 9.1625 11.9891 9.11644L12 9.11091L12.0109 9.11645C12.1002 9.16251 12.2211 9.2402 12.3712 9.35359C12.6701 9.57949 13.0153 9.89379 13.3527 10.2261C13.6867 10.5551 13.9974 10.8862 14.2257 11.1363L14.5919 11.5468C14.879 11.8801 15.384 11.9194 15.7198 11.6344C16.0557 11.3494 16.0952 10.8481 15.8081 10.5147L15.4115 10.07C15.1715 9.807 14.8403 9.45392 14.4797 9.09873C14.1225 8.74692 13.7204 8.37707 13.3403 8.08985C13.1508 7.94668 12.9493 7.81057 12.7483 7.70697C12.5647 7.6123 12.2979 7.5 12 7.5C11.702 7.5 11.4353 7.6123 11.2516 7.70697C11.0507 7.81057 10.8491 7.94668 10.6597 8.08985C10.2796 8.37707 9.87746 8.74693 9.52028 9.09875C9.15968 9.45394 8.82852 9.80702 8.58851 10.07L8.19191 10.5148ZM9.52028 13.2739C9.15968 13.6291 8.82852 13.9821 8.58851 14.2452L8.19192 14.6899C7.98903 14.9255 7.94277 15.2567 8.07343 15.5382C8.20408 15.8197 8.48778 16 8.80001 16L15.2 16C15.5122 16 15.7959 15.8197 15.9266 15.5382C16.0572 15.2567 16.011 14.9254 15.8081 14.6898L15.4115 14.2451C15.1715 13.9821 14.8403 13.629 14.4797 13.2738C14.1225 12.922 13.7204 12.5522 13.3403 12.265C13.1508 12.1218 12.9493 11.9857 12.7483 11.8821C12.5647 11.7874 12.2979 11.6751 12 11.6751C11.702 11.6751 11.4353 11.7874 11.2516 11.8821C11.0507 11.9857 10.8491 12.1218 10.6597 12.265C10.2796 12.5522 9.87746 12.922 9.52028 13.2739Z',
  d3: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75Z',
  d4: 'M8.28019 11.6344C7.94435 11.3494 7.90483 10.8481 8.19192 10.5148L8.58851 10.07C8.82852 9.80702 9.15968 9.45394 9.52028 9.09875C9.87746 8.74693 10.2796 8.37707 10.6597 8.08985C10.8491 7.94668 11.0507 7.81057 11.2516 7.70697C11.4353 7.6123 11.702 7.5 12 7.5C12.2979 7.5 12.5647 7.6123 12.7483 7.70697C12.9493 7.81057 13.1508 7.94668 13.3403 8.08985C13.7204 8.37707 14.1225 8.74692 14.4797 9.09873C14.8403 9.45392 15.1715 9.807 15.4115 10.07L15.8081 10.5147C16.0952 10.8481 16.0557 11.3494 15.7198 11.6344C15.384 11.9194 14.879 11.8801 14.5919 11.5468L14.2257 11.1363C13.9974 10.8862 13.6867 10.5551 13.3527 10.2261C13.0153 9.89379 12.6701 9.57949 12.3712 9.35359C12.2211 9.2402 12.1002 9.16251 12.0109 9.11644L12 9.11092L11.9891 9.11644C11.8998 9.1625 11.7789 9.2402 11.6288 9.35359C11.3298 9.57948 10.9847 9.89379 10.6473 10.2261C10.3133 10.5551 10.0026 10.8862 9.77434 11.1363L9.40818 11.5467C9.12108 11.88 8.61601 11.9194 8.28019 11.6344Z',
  d5: 'M8.58851 14.2452C8.82852 13.9821 9.15968 13.6291 9.52028 13.2739C9.87746 12.922 10.2796 12.5522 10.6597 12.265C10.8491 12.1218 11.0507 11.9857 11.2516 11.8821C11.4353 11.7874 11.702 11.6751 12 11.6751C12.2979 11.6751 12.5647 11.7874 12.7483 11.8821C12.9493 11.9857 13.1508 12.1218 13.3403 12.265C13.7204 12.5522 14.1225 12.922 14.4797 13.2738C14.8403 13.629 15.1715 13.9821 15.4115 14.2451L15.8081 14.6898C16.011 14.9254 16.0572 15.2567 15.9266 15.5382C15.7959 15.8197 15.5122 16 15.2 16L8.80001 16C8.48778 16 8.20408 15.8197 8.07343 15.5382C7.94277 15.2567 7.98903 14.9255 8.19192 14.6899L8.58851 14.2452Z',
  d6: 'M8 16L12 13L16 16M8 11L12 8L16 11',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.4508 10.4L12.0008 7.0625L7.55078 10.4L8.45079 11.6L12.0008 8.9375L15.5508 11.6L16.4508 10.4ZM16.4508 15.4L12.0008 12.0625L7.55078 15.4L8.45079 16.6L12.0008 13.9375L15.5508 16.6L16.4508 15.4Z',
};

export const IconCircleArrowUpDoubleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-stroke-rounded IconCircleArrowUpDoubleStrokeRounded"
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

export const IconCircleArrowUpDoubleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-duotone-rounded IconCircleArrowUpDoubleDuotoneRounded"
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

export const IconCircleArrowUpDoubleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-twotone-rounded IconCircleArrowUpDoubleTwotoneRounded"
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

export const IconCircleArrowUpDoubleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-solid-rounded IconCircleArrowUpDoubleSolidRounded"
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

export const IconCircleArrowUpDoubleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-bulk-rounded IconCircleArrowUpDoubleBulkRounded"
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

export const IconCircleArrowUpDoubleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-stroke-sharp IconCircleArrowUpDoubleStrokeSharp"
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

export const IconCircleArrowUpDoubleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-up-double-solid-sharp IconCircleArrowUpDoubleSolidSharp"
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

export const iconPackOfCircleArrowUpDouble: TheIconSelfPack = {
  name: 'CircleArrowUpDouble',
  StrokeRounded: IconCircleArrowUpDoubleStrokeRounded,
  DuotoneRounded: IconCircleArrowUpDoubleDuotoneRounded,
  TwotoneRounded: IconCircleArrowUpDoubleTwotoneRounded,
  SolidRounded: IconCircleArrowUpDoubleSolidRounded,
  BulkRounded: IconCircleArrowUpDoubleBulkRounded,
  StrokeSharp: IconCircleArrowUpDoubleStrokeSharp,
  SolidSharp: IconCircleArrowUpDoubleSolidSharp,
};