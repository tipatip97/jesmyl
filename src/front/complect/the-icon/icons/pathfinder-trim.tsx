import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5',
  d2: 'M9 15.5C9 12.6835 9 11.2753 9.76359 10.3178C9.92699 10.1129 10.1129 9.92699 10.3178 9.76359C11.2753 9 12.6835 9 15.5 9C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5Z',
  d3: 'M15.5473 8.25C16.9154 8.24999 18.0075 8.24998 18.8745 8.35043C19.7675 8.45389 20.5167 8.67232 21.1498 9.17722C21.3986 9.37563 21.6244 9.60136 21.8228 9.85017C22.3277 10.4833 22.5461 11.2325 22.6496 12.1255C22.75 12.9925 22.75 14.0846 22.75 15.4527V15.5473C22.75 16.9154 22.75 18.0075 22.6496 18.8745C22.5461 19.7675 22.3277 20.5167 21.8228 21.1498C21.6244 21.3986 21.3986 21.6244 21.1498 21.8228C20.5167 22.3277 19.7675 22.5461 18.8745 22.6496C18.0075 22.75 16.9154 22.75 15.5473 22.75H15.4527C14.0846 22.75 12.9925 22.75 12.1255 22.6496C11.2325 22.5461 10.4833 22.3277 9.85017 21.8228C9.60136 21.6244 9.37563 21.3986 9.17722 21.1498C8.67232 20.5167 8.45389 19.7675 8.35043 18.8745C8.24998 18.0075 8.24999 16.9154 8.25 15.5473V15.5473V15.4527V15.4527C8.24999 14.0846 8.24998 12.9925 8.35043 12.1255C8.45389 11.2325 8.67232 10.4833 9.17722 9.85017C9.37563 9.60136 9.60136 9.37563 9.85017 9.17722C10.4833 8.67232 11.2325 8.45389 12.1255 8.35043C12.9925 8.24998 14.0846 8.24999 15.4527 8.25H15.4527H15.5473H15.5473Z',
  d4: 'M6.75 15.3745C6.74994 14.0715 6.74989 12.9066 6.8604 11.9528C6.97986 10.9218 7.25333 9.85684 8.00447 8.91494C8.27291 8.57832 8.57832 8.27291 8.91494 8.00447C9.85684 7.25333 10.9218 6.97986 11.9528 6.8604C12.9066 6.74989 14.0715 6.74994 15.3746 6.75C15.4298 6.75 15.4574 6.75 15.4808 6.74626C15.6112 6.72547 15.7143 6.61927 15.7311 6.4883C15.7342 6.46473 15.7334 6.43785 15.7318 6.38409C15.7178 5.91949 15.6931 5.50133 15.6496 5.12547C15.5461 4.23254 15.3277 3.48329 14.8228 2.85017C14.6244 2.60136 14.3986 2.37563 14.1498 2.17722C13.5167 1.67232 12.7675 1.45389 11.8745 1.35043C11.0075 1.24998 9.91541 1.24999 8.54731 1.25H8.45271C7.08461 1.24999 5.99249 1.24998 5.12547 1.35043C4.23254 1.45389 3.48329 1.67232 2.85017 2.17722C2.60136 2.37563 2.37563 2.60136 2.17722 2.85017C1.67232 3.48329 1.45389 4.23254 1.35043 5.12547C1.24998 5.99249 1.24999 7.08459 1.25 8.45269V8.54729C1.24999 9.91539 1.24998 11.0075 1.35043 11.8745C1.45389 12.7675 1.67232 13.5167 2.17722 14.1498C2.37563 14.3986 2.60136 14.6244 2.85017 14.8228C3.48329 15.3277 4.23254 15.5461 5.12547 15.6496C5.50133 15.6931 5.91949 15.7178 6.38409 15.7318C6.43785 15.7334 6.46474 15.7342 6.48831 15.7311C6.61927 15.7143 6.72547 15.6112 6.74626 15.4808C6.75 15.4574 6.75 15.4297 6.75 15.3745Z',
  d5: 'M22 9H9V22H22V9Z',
  d6: 'M15 9V2H2V15H9',
  d7: 'M8.25 9C8.25 8.58579 8.58579 8.25 9 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9V22C22.75 22.4142 22.4142 22.75 22 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22V9Z',
  d8: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V6.75H9C7.75736 6.75 6.75 7.75736 6.75 9V15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V2Z',
} as const;

export const IconPathfinderTrimStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-stroke-rounded IconPathfinderTrimStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-duotone-rounded IconPathfinderTrimDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-twotone-rounded IconPathfinderTrimTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-solid-rounded IconPathfinderTrimSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-bulk-rounded IconPathfinderTrimBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-stroke-sharp IconPathfinderTrimStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderTrimSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-trim-solid-sharp IconPathfinderTrimSolidSharp"
    >
      <path 
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

export const iconPackOfPathfinderTrim: TheIconSelfPack = {
  name: 'PathfinderTrim',
  StrokeRounded: IconPathfinderTrimStrokeRounded,
  DuotoneRounded: IconPathfinderTrimDuotoneRounded,
  TwotoneRounded: IconPathfinderTrimTwotoneRounded,
  SolidRounded: IconPathfinderTrimSolidRounded,
  BulkRounded: IconPathfinderTrimBulkRounded,
  StrokeSharp: IconPathfinderTrimStrokeSharp,
  SolidSharp: IconPathfinderTrimSolidSharp,
};