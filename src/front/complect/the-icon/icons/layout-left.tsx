import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z',
  d2: 'M9 21.5L9 2.5',
  d3: 'M20.1049 20.1127C21.4961 18.7214 21.4961 16.4822 21.4961 12.0039C21.4961 7.52556 21.4961 5.28639 20.1048 3.89515C18.7136 2.50391 16.4744 2.50391 11.9961 2.50391L8.99609 2.50391L8.99609 21.4812C9.86701 21.5039 10.8594 21.5039 11.9961 21.5039C16.4744 21.5039 18.7136 21.5039 20.1049 20.1127Z',
  d4: 'M10.9905 1.50046C10.525 1.50136 10.2922 1.50181 10.1461 1.6482C10 1.79458 10 2.02842 10 2.4961L10 21.5037C10 21.9713 10 22.2052 10.1461 22.3516C10.2922 22.4979 10.525 22.4984 10.9905 22.4993C11.2927 22.4999 11.6043 22.4999 11.9255 22.4999H12.0745C14.2504 22.4999 15.9852 22.4999 17.3453 22.3171C18.7497 22.1282 19.9035 21.7281 20.8159 20.8157C21.7283 19.9034 22.1284 18.7495 22.3172 17.3452C22.5 15.985 22.5 14.2503 22.5 12.0743V11.9255C22.5 9.74947 22.5 8.01473 22.3172 6.65459C22.1284 5.25021 21.7283 4.09641 20.8159 3.18401C19.9035 2.27162 18.7497 1.87152 17.3453 1.6827C15.9851 1.49984 14.2504 1.49985 12.0744 1.49988L11.9256 1.49988C11.6043 1.49987 11.2927 1.49987 10.9905 1.50046Z',
  d5: 'M1.5 11.9265V12.0754C1.49998 14.2514 1.49996 15.9861 1.68282 17.3463C1.87164 18.7507 2.27175 19.9045 3.18414 20.8169C4.09653 21.7292 5.25033 22.1294 6.65471 22.3182C6.7501 22.331 6.84733 22.3429 6.94642 22.354C7.42656 22.4077 7.66663 22.4346 7.83332 22.2855C8 22.1365 8 21.885 8 21.3822L8 2.6198C8 2.11696 8 1.86553 7.83332 1.71646C7.66663 1.56739 7.42656 1.59425 6.94642 1.64798C6.84733 1.65907 6.7501 1.67099 6.65471 1.68382C5.25033 1.87263 4.09653 2.27274 3.18414 3.18513C2.27175 4.09752 1.87164 5.25133 1.68282 6.6557C1.49996 8.01584 1.49998 9.75056 1.5 11.9265Z',
  d6: 'M3 21H21V3H3V21Z',
  d7: 'M9 21L9 3',
  d8: 'M8 2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H8L8 2.25Z',
  d9: 'M10 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H10L10 21.75Z',
};

export const IconLayoutLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-stroke-rounded IconLayoutLeftStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-duotone-rounded IconLayoutLeftDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-twotone-rounded IconLayoutLeftTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-solid-rounded IconLayoutLeftSolidRounded"
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

export const IconLayoutLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-bulk-rounded IconLayoutLeftBulkRounded"
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

export const IconLayoutLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-stroke-sharp IconLayoutLeftStrokeSharp"
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

export const IconLayoutLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-left-solid-sharp IconLayoutLeftSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayoutLeft: TheIconSelfPack = {
  name: 'LayoutLeft',
  StrokeRounded: IconLayoutLeftStrokeRounded,
  DuotoneRounded: IconLayoutLeftDuotoneRounded,
  TwotoneRounded: IconLayoutLeftTwotoneRounded,
  SolidRounded: IconLayoutLeftSolidRounded,
  BulkRounded: IconLayoutLeftBulkRounded,
  StrokeSharp: IconLayoutLeftStrokeSharp,
  SolidSharp: IconLayoutLeftSolidSharp,
};