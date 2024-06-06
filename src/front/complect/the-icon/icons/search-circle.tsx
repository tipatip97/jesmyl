import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M14.4 14.4L16 16M15.2 11.6C15.2 9.61175 13.5882 8 11.6 8C9.61175 8 8 9.61175 8 11.6C8 13.5882 9.61175 15.2 11.6 15.2C13.5882 15.2 15.2 13.5882 15.2 11.6Z',
  d3: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM11.6 8C13.5882 8 15.2 9.61177 15.2 11.6C15.2 13.5882 13.5882 15.2 11.6 15.2C9.61177 15.2 8 13.5882 8 11.6C8 9.61177 9.61177 8 11.6 8Z',
  d4: 'M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z',
  d5: 'M7 11.6C7 9.05949 9.05949 7 11.6 7C14.1405 7 16.2 9.05949 16.2 11.6C16.2 12.5083 15.9368 13.355 15.4824 14.0682L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L14.0682 15.4824C13.355 15.9368 12.5083 16.2 11.6 16.2C9.05949 16.2 7 14.1405 7 11.6ZM11.6 9C10.1641 9 9 10.1641 9 11.6C9 13.0359 10.1641 14.2 11.6 14.2C13.0359 14.2 14.2 13.0359 14.2 11.6C14.2 10.1641 13.0359 9 11.6 9Z',
  d6: 'M14.4 14.4L16.5 16.5M15.2 11.6C15.2 9.61177 13.5882 8 11.6 8C9.61177 8 8 9.61177 8 11.6C8 13.5882 9.61177 15.2 11.6 15.2C13.5882 15.2 15.2 13.5882 15.2 11.6Z',
  d7: 'M7 11.6C7 9.05949 9.05949 7 11.6 7C14.1405 7 16.2 9.05949 16.2 11.6C16.2 12.5083 15.9368 13.355 15.4824 14.0682L17.2071 15.7929L15.7929 17.2071L14.0682 15.4824C13.355 15.9368 12.5083 16.2 11.6 16.2C9.05949 16.2 7 14.1405 7 11.6ZM11.6 9C10.1641 9 9 10.1641 9 11.6C9 13.0359 10.1641 14.2 11.6 14.2C13.0359 14.2 14.2 13.0359 14.2 11.6C14.2 10.1641 13.0359 9 11.6 9Z',
};

export const IconSearchCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-stroke-rounded IconSearchCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSearchCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-duotone-rounded IconSearchCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSearchCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-twotone-rounded IconSearchCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSearchCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-solid-rounded IconSearchCircleSolidRounded"
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

export const IconSearchCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-bulk-rounded IconSearchCircleBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-stroke-sharp IconSearchCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconSearchCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-circle-solid-sharp IconSearchCircleSolidSharp"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSearchCircle: TheIconSelfPack = {
  name: 'SearchCircle',
  StrokeRounded: IconSearchCircleStrokeRounded,
  DuotoneRounded: IconSearchCircleDuotoneRounded,
  TwotoneRounded: IconSearchCircleTwotoneRounded,
  SolidRounded: IconSearchCircleSolidRounded,
  BulkRounded: IconSearchCircleBulkRounded,
  StrokeSharp: IconSearchCircleStrokeSharp,
  SolidSharp: IconSearchCircleSolidSharp,
};