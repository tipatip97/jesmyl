import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.77614 15 9 15.2239 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.2239 9 15 8.77614 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364Z',
  d2: 'M15 9H15.5C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5V15',
  d3: 'M8.5473 1.25C9.91541 1.24999 11.0075 1.24998 11.8745 1.35043C12.7675 1.45389 13.5167 1.67232 14.1498 2.17722C14.3986 2.37563 14.6244 2.60136 14.8228 2.85017C15.3277 3.48329 15.5461 4.23254 15.6496 5.12547C15.7295 5.81577 15.7458 6.64876 15.7492 7.65012C15.7501 7.93306 15.7506 8.07453 15.838 8.16198C15.9255 8.24944 16.0669 8.24991 16.3499 8.25084C17.3512 8.25416 18.1842 8.27045 18.8745 8.35043C19.7675 8.45389 20.5167 8.67232 21.1498 9.17722C21.3986 9.37563 21.6244 9.60136 21.8228 9.85017C22.3277 10.4833 22.5461 11.2325 22.6496 12.1255C22.75 12.9925 22.75 14.0846 22.75 15.4527V15.5473C22.75 16.9154 22.75 18.0075 22.6496 18.8745C22.5461 19.7675 22.3277 20.5167 21.8228 21.1498C21.6244 21.3986 21.3986 21.6244 21.1498 21.8228C20.5167 22.3277 19.7675 22.5461 18.8745 22.6496C18.0075 22.75 16.9154 22.75 15.5473 22.75H15.4527C14.0846 22.75 12.9925 22.75 12.1255 22.6496C11.2325 22.5461 10.4833 22.3277 9.85017 21.8228C9.60136 21.6244 9.37563 21.3986 9.17722 21.1498C8.67232 20.5167 8.45389 19.7675 8.35043 18.8745C8.27045 18.1842 8.25416 17.3512 8.25084 16.3499C8.24991 16.0669 8.24944 15.9255 8.16198 15.838C8.07453 15.7506 7.93306 15.7501 7.65012 15.7492C6.64876 15.7458 5.81577 15.7295 5.12547 15.6496C4.23254 15.5461 3.48329 15.3277 2.85017 14.8228C2.60136 14.6244 2.37563 14.3986 2.17722 14.1498C1.67232 13.5167 1.45389 12.7675 1.35043 11.8745C1.24998 11.0075 1.24999 9.91539 1.25 8.54729V8.4527C1.24999 7.0846 1.24998 5.99249 1.35043 5.12547C1.45389 4.23254 1.67232 3.48329 2.17722 2.85017C2.37563 2.60136 2.60136 2.37563 2.85017 2.17722C3.48329 1.67232 4.23254 1.45389 5.12547 1.35043C5.99249 1.24998 7.08461 1.24999 8.45271 1.25H8.5473Z',
  d4: 'M15.5473 8.25C16.9154 8.24999 18.0075 8.24998 18.8745 8.35043C19.7675 8.45389 20.5167 8.67232 21.1498 9.17722C21.3986 9.37563 21.6244 9.60136 21.8228 9.85017C22.3277 10.4833 22.5461 11.2325 22.6496 12.1255C22.75 12.9925 22.75 14.0846 22.75 15.4527V15.5473C22.75 16.9154 22.75 18.0075 22.6496 18.8745C22.5461 19.7675 22.3277 20.5167 21.8228 21.1498C21.6244 21.3986 21.3986 21.6244 21.1498 21.8228C20.5167 22.3277 19.7675 22.5461 18.8745 22.6496C18.0075 22.75 16.9154 22.75 15.5473 22.75H15.4527C14.0846 22.75 12.9925 22.75 12.1255 22.6496C11.2325 22.5461 10.4833 22.3277 9.85017 21.8228C9.60136 21.6244 9.37563 21.3986 9.17722 21.1498C8.67232 20.5167 8.45389 19.7675 8.35043 18.8745C8.24998 18.0075 8.24999 16.9154 8.25 15.5473V15.5473V15.4527V15.4527C8.24999 14.0846 8.24998 12.9925 8.35043 12.1255C8.45389 11.2325 8.67232 10.4833 9.17722 9.85017C9.37563 9.60136 9.60136 9.37563 9.85017 9.17722C10.4833 8.67232 11.2325 8.45389 12.1255 8.35043C12.9925 8.24998 14.0846 8.24999 15.4527 8.25H15.4527H15.5473H15.5473Z',
  d5: 'M11.8745 1.35043C11.0075 1.24998 9.91541 1.24999 8.5473 1.25H8.54729H8.45271H8.4527C7.0846 1.24999 5.99249 1.24998 5.12546 1.35043C4.23254 1.45389 3.48329 1.67232 2.85017 2.17722C2.60136 2.37563 2.37563 2.60136 2.17722 2.85017C1.67232 3.48329 1.45389 4.23254 1.35043 5.12546C1.24998 5.99249 1.24999 7.0846 1.25 8.4527V8.45271V8.54729V8.5473C1.24999 9.91541 1.24998 11.0075 1.35043 11.8745C1.45389 12.7675 1.67232 13.5167 2.17722 14.1498C2.37563 14.3986 2.60136 14.6244 2.85017 14.8228C3.48329 15.3277 4.23254 15.5461 5.12546 15.6496C5.94924 15.745 6.9762 15.7498 8.25001 15.75C8.25 15.6831 8.25 15.6156 8.25 15.5473V15.5473V15.5473V15.4527V15.4527V15.4527C8.24999 14.0846 8.24998 12.9925 8.35043 12.1255C8.45389 11.2325 8.67232 10.4833 9.17722 9.85017C9.37563 9.60136 9.60136 9.37563 9.85017 9.17722C10.4833 8.67232 11.2325 8.45389 12.1255 8.35043C12.9925 8.24998 14.0846 8.24999 15.4527 8.25H15.4527H15.4527H15.5473H15.5473H15.5473C15.6156 8.25 15.6831 8.25 15.75 8.25001C15.7498 6.9762 15.745 5.94924 15.6496 5.12546C15.5461 4.23254 15.3277 3.48329 14.8228 2.85017C14.6244 2.60136 14.3986 2.37563 14.1498 2.17722C13.5167 1.67232 12.7675 1.45389 11.8745 1.35043Z',
  d6: 'M14.9904 2.00049H2.10747C2.102 2.00049 2.09755 2.00494 2.09751 2.01046L2.00098 14.9605C2.00094 14.9661 2.00541 14.9707 2.01094 14.9707L9.05191 14.9605L8.99951 21.9898C8.99947 21.9954 9.00395 22 9.00948 22H21.9889C21.9944 22 21.9989 21.9955 21.9989 21.9899V9.03983C21.9989 9.03428 21.9944 9.02979 21.9889 9.02979H15.0003V2.01053C15.0003 2.00499 14.9959 2.00049 14.9904 2.00049Z',
  d7: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V8.25H22C22.4142 8.25 22.75 8.58579 22.75 9V22C22.75 22.4142 22.4142 22.75 22 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22V15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V2Z',
};

export const IconPathfinderUniteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-stroke-rounded IconPathfinderUniteStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderUniteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-duotone-rounded IconPathfinderUniteDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPathfinderUniteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-twotone-rounded IconPathfinderUniteTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderUniteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-solid-rounded IconPathfinderUniteSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderUniteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-bulk-rounded IconPathfinderUniteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPathfinderUniteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-stroke-sharp IconPathfinderUniteStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderUniteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-unite-solid-sharp IconPathfinderUniteSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPathfinderUnite: TheIconSelfPack = {
  name: 'PathfinderUnite',
  StrokeRounded: IconPathfinderUniteStrokeRounded,
  DuotoneRounded: IconPathfinderUniteDuotoneRounded,
  TwotoneRounded: IconPathfinderUniteTwotoneRounded,
  SolidRounded: IconPathfinderUniteSolidRounded,
  BulkRounded: IconPathfinderUniteBulkRounded,
  StrokeSharp: IconPathfinderUniteStrokeSharp,
  SolidSharp: IconPathfinderUniteSolidSharp,
};