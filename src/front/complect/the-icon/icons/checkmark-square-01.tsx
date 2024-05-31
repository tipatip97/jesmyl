import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 13.75C8 13.75 9.6 14.6625 10.4 16C10.4 16 12.8 10.75 16 9',
  d3: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM16.8775 8.02038C17.1425 8.50493 16.9645 9.11257 16.48 9.37756C15.1086 10.1275 13.8208 11.6975 12.8374 13.2032C12.3581 13.9372 11.9735 14.6207 11.709 15.1204C11.577 15.3697 11.4756 15.5721 11.4079 15.7105L11.3096 15.9159C11.1551 16.2536 10.8261 16.4782 10.4553 16.4987C10.0844 16.5191 9.73267 16.3323 9.54198 16.0135C9.23126 15.494 8.73753 15.0198 8.27997 14.6581C8.05764 14.4823 7.85752 14.3437 7.71471 14.2502L7.50442 14.1187C7.02493 13.8449 6.85797 13.2344 7.13152 12.7548C7.40513 12.275 8.01585 12.1079 8.49559 12.3815L8.81063 12.5772C8.99282 12.6965 9.2427 12.8697 9.52038 13.0892C9.73258 13.257 9.96984 13.4587 10.2094 13.6911C10.4662 13.2297 10.7872 12.685 11.1629 12.1096C12.1796 10.5529 13.6917 8.62286 15.5204 7.62282C16.0049 7.35782 16.6125 7.53582 16.8775 8.02038Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M16.48 9.37756C16.9645 9.11257 17.1425 8.50493 16.8775 8.02038C16.6125 7.53582 16.0049 7.35782 15.5204 7.62282C13.6917 8.62286 12.1796 10.5529 11.1629 12.1096C10.7872 12.685 10.4662 13.2297 10.2094 13.6911C9.96984 13.4587 9.73258 13.257 9.52038 13.0892C9.2427 12.8697 8.99282 12.6965 8.81063 12.5772L8.49559 12.3815C8.01585 12.1079 7.40513 12.275 7.13152 12.7548C6.85797 13.2344 7.02493 13.8449 7.50442 14.1187L7.71471 14.2502C7.85752 14.3437 8.05764 14.4823 8.27997 14.6581C8.73753 15.0198 9.23126 15.494 9.54198 16.0135C9.73267 16.3323 10.0844 16.5191 10.4553 16.4987C10.8261 16.4782 11.1551 16.2536 11.3096 15.9159L11.4079 15.7105C11.4756 15.5721 11.577 15.3697 11.709 15.1204C11.9735 14.6207 12.3581 13.9372 12.8374 13.2032C13.8208 11.6975 15.1086 10.1275 16.48 9.37756Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M8 12.5L10.5 15L16 9',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM15.2473 7.93933L10.453 13.1694L8.69156 11.4079L7.27734 12.8222L10.5159 16.0607L16.7216 9.29078L15.2473 7.93933Z',
} as const;

export const IconCheckmarkSquare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-stroke-rounded IconCheckmarkSquare01StrokeRounded"
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

export const IconCheckmarkSquare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-duotone-rounded IconCheckmarkSquare01DuotoneRounded"
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

export const IconCheckmarkSquare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-twotone-rounded IconCheckmarkSquare01TwotoneRounded"
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

export const IconCheckmarkSquare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-solid-rounded IconCheckmarkSquare01SolidRounded"
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

export const IconCheckmarkSquare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-bulk-rounded IconCheckmarkSquare01BulkRounded"
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

export const IconCheckmarkSquare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-stroke-sharp IconCheckmarkSquare01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-01-solid-sharp IconCheckmarkSquare01SolidSharp"
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

export const iconPackOfCheckmarkSquare01: TheIconSelfPack = {
  name: 'CheckmarkSquare01',
  StrokeRounded: IconCheckmarkSquare01StrokeRounded,
  DuotoneRounded: IconCheckmarkSquare01DuotoneRounded,
  TwotoneRounded: IconCheckmarkSquare01TwotoneRounded,
  SolidRounded: IconCheckmarkSquare01SolidRounded,
  BulkRounded: IconCheckmarkSquare01BulkRounded,
  StrokeSharp: IconCheckmarkSquare01StrokeSharp,
  SolidSharp: IconCheckmarkSquare01SolidSharp,
};