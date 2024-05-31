import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8',
  d3: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM16.48 9.37756C16.9645 9.11257 17.1425 8.50493 16.8775 8.02038C16.6125 7.53582 16.0049 7.35782 15.5204 7.62282C13.6917 8.62286 12.1796 10.5529 11.1629 12.1096C10.7872 12.685 10.4662 13.2297 10.2094 13.6911C9.96984 13.4587 9.73258 13.257 9.52038 13.0892C9.2427 12.8697 8.99282 12.6965 8.81063 12.5772L8.49559 12.3815C8.01585 12.1079 7.40513 12.275 7.13152 12.7548C6.85797 13.2344 7.02493 13.8449 7.50442 14.1187L7.71471 14.2502C7.85752 14.3437 8.05764 14.4823 8.27997 14.6581C8.73753 15.0198 9.23126 15.494 9.54198 16.0135C9.73267 16.3323 10.0844 16.5191 10.4553 16.4987C10.8261 16.4782 11.1551 16.2536 11.3096 15.9159L11.4079 15.7105C11.4756 15.5721 11.577 15.3697 11.709 15.1204C11.9735 14.6207 12.3581 13.9372 12.8374 13.2032C13.8208 11.6975 15.1086 10.1275 16.48 9.37756Z',
  d4: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d5: 'M16.8775 8.02038C17.1425 8.50493 16.9645 9.11257 16.48 9.37756C15.1086 10.1275 13.8208 11.6975 12.8374 13.2032C12.3581 13.9372 11.9735 14.6207 11.709 15.1204C11.577 15.3697 11.4756 15.5721 11.4079 15.7105L11.3096 15.9159C11.1551 16.2536 10.8261 16.4782 10.4553 16.4987C10.0844 16.5191 9.73267 16.3323 9.54198 16.0135C9.23126 15.494 8.73753 15.0198 8.27997 14.6581C8.05764 14.4823 7.85752 14.3437 7.71471 14.2502L7.50442 14.1187C7.02493 13.8449 6.85797 13.2344 7.13152 12.7548C7.40513 12.275 8.01585 12.1079 8.49559 12.3815L8.81063 12.5772C8.99282 12.6965 9.2427 12.8697 9.52038 13.0892C9.73258 13.257 9.96984 13.4587 10.2094 13.6911C10.4662 13.2297 10.7872 12.685 11.1629 12.1096C12.1796 10.5529 13.6917 8.62286 15.5204 7.62282C16.0049 7.35782 16.6125 7.53582 16.8775 8.02038Z',
  d6: 'M8 12.5L10.5 15L16 9',
  d7: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM15.2473 7.93933L10.453 13.1694L8.69156 11.4079L7.27734 12.8222L10.5159 16.0607L16.7216 9.29078L15.2473 7.93933Z',
} as const;

export const IconCheckmarkCircle01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-stroke-rounded IconCheckmarkCircle01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkCircle01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-duotone-rounded IconCheckmarkCircle01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCheckmarkCircle01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-twotone-rounded IconCheckmarkCircle01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCheckmarkCircle01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-solid-rounded IconCheckmarkCircle01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkCircle01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-bulk-rounded IconCheckmarkCircle01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCheckmarkCircle01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-stroke-sharp IconCheckmarkCircle01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkCircle01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-circle-01-solid-sharp IconCheckmarkCircle01SolidSharp"
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

export const iconPackOfCheckmarkCircle01: TheIconSelfPack = {
  name: 'CheckmarkCircle01',
  StrokeRounded: IconCheckmarkCircle01StrokeRounded,
  DuotoneRounded: IconCheckmarkCircle01DuotoneRounded,
  TwotoneRounded: IconCheckmarkCircle01TwotoneRounded,
  SolidRounded: IconCheckmarkCircle01SolidRounded,
  BulkRounded: IconCheckmarkCircle01BulkRounded,
  StrokeSharp: IconCheckmarkCircle01StrokeSharp,
  SolidSharp: IconCheckmarkCircle01SolidSharp,
};