import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z',
  d2: 'M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z',
  d3: 'M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C13.9206 21.0834 14.2311 20.7971 14.5452 20.5075C18.3609 16.9893 22.711 12.9784 20.316 7.37966C18.9126 4.09916 15.5439 2 12.0011 2C8.45834 2 5.08963 4.09916 3.68627 7.37966C1.30093 12.9556 5.603 16.9368 9.39808 20.4488C9.73246 20.7582 10.0629 21.064 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22ZM12 14.5C13.933 14.5 15.5 12.933 15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5Z',
  d4: 'M12.0015 1.25C8.17538 1.25 4.52505 3.51303 2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90758 21.0169L8.90824 21.0175C9.23768 21.3222 9.56031 21.6206 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732L15.0391 21.0732L15.0391 21.0732C16.787 19.4627 18.7304 17.672 20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z',
  d5: 'M2.99714 7.08468C4.52505 3.51303 8.17538 1.25 12.0015 1.25C15.8277 1.25 19.478 3.51303 21.0059 7.08468C22.4261 10.4045 21.6591 13.2362 20.0582 15.6609C18.7304 17.672 16.787 19.4627 15.0391 21.0732L15.0391 21.0732L15.039 21.0732C14.7286 21.3592 14.4243 21.6396 14.1308 21.9144C13.5558 22.4528 12.7919 22.75 12.0015 22.75C11.2112 22.75 10.4473 22.4528 9.87231 21.9145L9.87066 21.9129C9.5601 21.6204 9.23725 21.3218 8.90758 21.0169L8.90742 21.0168C7.17835 19.4178 5.26177 17.6454 3.94771 15.6595C2.34496 13.2373 1.57518 10.4086 2.99714 7.08468Z',
  d6: 'M8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z',
  d7: 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z',
  d8: 'M10.2203 21.8483C10.6562 22.0977 11.0206 22.2874 11.2779 22.4156L12 22.75L12.7221 22.4156C12.9794 22.2874 13.3438 22.0977 13.7797 21.8483C14.6496 21.3505 15.813 20.6101 16.9801 19.6407C19.2892 17.7227 21.75 14.7912 21.75 10.968C21.75 5.60091 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.60091 2.25 10.968C2.25 14.7912 4.71077 17.7227 7.01986 19.6407C8.18703 20.6101 9.35038 21.3505 10.2203 21.8483ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z',
};

export const IconLocation01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-stroke-rounded IconLocation01StrokeRounded"
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

export const IconLocation01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-duotone-rounded IconLocation01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-twotone-rounded IconLocation01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocation01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-solid-rounded IconLocation01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-bulk-rounded IconLocation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-stroke-sharp IconLocation01StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-01-solid-sharp IconLocation01SolidSharp"
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

export const iconPackOfLocation01: TheIconSelfPack = {
  name: 'Location01',
  StrokeRounded: IconLocation01StrokeRounded,
  DuotoneRounded: IconLocation01DuotoneRounded,
  TwotoneRounded: IconLocation01TwotoneRounded,
  SolidRounded: IconLocation01SolidRounded,
  BulkRounded: IconLocation01BulkRounded,
  StrokeSharp: IconLocation01StrokeSharp,
  SolidSharp: IconLocation01SolidSharp,
};