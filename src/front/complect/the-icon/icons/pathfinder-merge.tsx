import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.77606 15 9 15.2239 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.224 9 15 8.77597 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364Z',
  d2: 'M15 9H15.5C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5V15',
  d3: 'M8.5473 1.25C9.91541 1.24999 11.0075 1.24998 11.8745 1.35043C12.7675 1.45389 13.5167 1.67232 14.1498 2.17722C14.3986 2.37563 14.6244 2.60136 14.8228 2.85017C15.3277 3.48329 15.5461 4.23254 15.6496 5.12547C15.7295 5.81577 15.7458 6.64876 15.7492 7.65012C15.7501 7.93306 15.7506 8.07453 15.838 8.16198C15.9255 8.24944 16.0669 8.24991 16.3499 8.25084C17.3512 8.25416 18.1842 8.27045 18.8745 8.35043C19.7675 8.45389 20.5167 8.67232 21.1498 9.17722C21.3986 9.37563 21.6244 9.60136 21.8228 9.85017C22.3277 10.4833 22.5461 11.2325 22.6496 12.1255C22.75 12.9925 22.75 14.0846 22.75 15.4527V15.5473C22.75 16.9154 22.75 18.0075 22.6496 18.8745C22.5461 19.7675 22.3277 20.5167 21.8228 21.1498C21.6244 21.3986 21.3986 21.6244 21.1498 21.8228C20.5167 22.3277 19.7675 22.5461 18.8745 22.6496C18.0075 22.75 16.9154 22.75 15.5473 22.75H15.4527C14.0846 22.75 12.9925 22.75 12.1255 22.6496C11.2325 22.5461 10.4833 22.3277 9.85017 21.8228C9.60136 21.6244 9.37563 21.3986 9.17722 21.1498C8.67232 20.5167 8.45389 19.7675 8.35043 18.8745C8.25499 18.0508 8.25024 17.0238 8.25001 15.75V10.9002C8.25001 10.4472 7.88281 10.08 7.42984 10.08C6.97687 10.08 6.60967 10.4472 6.60967 10.9002V15.124C6.60967 15.4146 6.60967 15.5599 6.51672 15.6485C6.42377 15.7372 6.2813 15.7304 5.99636 15.7169C5.68351 15.7021 5.39372 15.6806 5.12547 15.6496C4.23254 15.5461 3.48329 15.3277 2.85017 14.8228C2.60136 14.6244 2.37563 14.3986 2.17722 14.1498C1.67232 13.5167 1.45389 12.7675 1.35043 11.8745C1.24998 11.0075 1.24999 9.91539 1.25 8.54729V8.4527C1.24999 7.0846 1.24998 5.99249 1.35043 5.12547C1.45389 4.23254 1.67232 3.48329 2.17722 2.85017C2.37563 2.60136 2.60136 2.37563 2.85017 2.17722C3.48329 1.67232 4.23254 1.45389 5.12547 1.35043C5.99249 1.24998 7.08461 1.24999 8.45271 1.25H8.5473Z',
  d4: 'M15 9H14.25V9.75H15V9ZM9 15H9.75V14.25H9V15ZM15 2H15.75C15.75 1.58579 15.4142 1.25 15 1.25V2ZM2 2V1.25C1.58579 1.25 1.25 1.58579 1.25 2H2ZM2 15H1.25C1.25 15.4142 1.58579 15.75 2 15.75V15ZM9 22H8.25C8.25 22.4142 8.58579 22.75 9 22.75V22ZM22 22V22.75C22.4142 22.75 22.75 22.4142 22.75 22H22ZM22 9H22.75C22.75 8.58579 22.4142 8.25 22 8.25V9ZM15.75 9V2H14.25V9H15.75ZM15 1.25H2V2.75H15V1.25ZM1.25 2V15H2.75V2H1.25ZM9 14.25H2V15.75H9V14.25ZM8.25 15V22H9.75V15H8.25ZM9 22.75H22V21.25H9V22.75ZM22.75 22V9H21.25V22H22.75ZM22 8.25H15V9.75H22V8.25Z',
  d5: 'M14.9904 2H2.10747C2.102 2 2.09755 2.00445 2.09751 2.00997L2.00098 14.9601C2.00094 14.9656 2.00541 14.9702 2.01094 14.9702L9.05191 14.9601L8.99951 21.9894C8.99947 21.9949 9.00395 21.9995 9.00948 21.9995H21.9889C21.9944 21.9995 21.9989 21.995 21.9989 21.9894V9.03934C21.9989 9.03379 21.9944 9.0293 21.9889 9.0293H15.0003V2.01004C15.0003 2.0045 14.9959 2 14.9904 2Z',
  d6: 'M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V15C1.25 15.4142 1.58579 15.75 2 15.75H6.75V10H8.25V22C8.25 22.4142 8.58579 22.75 9 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V9C22.75 8.58579 22.4142 8.25 22 8.25H15.75V2C15.75 1.58579 15.4142 1.25 15 1.25H2Z',
} as const;

export const IconPathfinderMergeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-stroke-rounded IconPathfinderMergeStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-duotone-rounded IconPathfinderMergeDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-twotone-rounded IconPathfinderMergeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-solid-rounded IconPathfinderMergeSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-bulk-rounded IconPathfinderMergeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-stroke-sharp IconPathfinderMergeStrokeSharp"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMergeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-merge-solid-sharp IconPathfinderMergeSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPathfinderMerge: TheIconSelfPack = {
  name: 'PathfinderMerge',
  StrokeRounded: IconPathfinderMergeStrokeRounded,
  DuotoneRounded: IconPathfinderMergeDuotoneRounded,
  TwotoneRounded: IconPathfinderMergeTwotoneRounded,
  SolidRounded: IconPathfinderMergeSolidRounded,
  BulkRounded: IconPathfinderMergeBulkRounded,
  StrokeSharp: IconPathfinderMergeStrokeSharp,
  SolidSharp: IconPathfinderMergeSolidSharp,
};