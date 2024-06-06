import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 5L11.3026 5C8.56425 5 7.19508 5 6.34438 5.87868C5.6596 6.58599 5.52605 7.64032 5.5 9.5M21 19L11.3026 19C8.56424 19 7.19508 19 6.34438 18.1213C5.6596 17.414 5.52605 16.3597 5.5 14.5',
  d2: 'M8 12C8 13.3807 6.88071 14.5 5.5 14.5C4.11929 14.5 3 13.3807 3 12C3 10.6193 4.11929 9.5 5.5 9.5C6.88071 9.5 8 10.6193 8 12Z',
  d3: 'M8 12H21',
  d4: 'M11.3026 5H21L21 19L11.3026 19C8.56424 19 7.19508 19 6.34438 18.1213C5.6596 17.414 5.52605 16.3597 5.5 14.5C6.88071 14.5 8 13.3807 8 12C8 10.6193 6.88071 9.5 5.5 9.5C5.52605 7.64032 5.6596 6.58599 6.34438 5.87868C7.19508 5 8.56425 5 11.3026 5Z',
  d5: 'M5.75 8.5C7.17766 8.5 8.40567 9.35478 8.95017 10.5805C9.04571 10.7955 9.09347 10.9031 9.16804 10.9515C9.2426 11 9.3459 11 9.5525 11H21.15C21.4328 11 21.5743 11 21.6621 11.0879C21.75 11.1757 21.75 11.3172 21.75 11.6V12.4C21.75 12.6828 21.75 12.8243 21.6621 12.9121C21.5743 13 21.4328 13 21.15 13H9.5525C9.3459 13 9.2426 13 9.16804 13.0485C9.09347 13.0969 9.04571 13.2045 8.95017 13.4195C8.40567 14.6452 7.17766 15.5 5.75 15.5C3.817 15.5 2.25 13.933 2.25 12C2.25 10.067 3.817 8.5 5.75 8.5ZM5.75 10.5C4.92157 10.5 4.25 11.1716 4.25 12C4.25 12.8284 4.92157 13.5 5.75 13.5C6.57843 13.5 7.25 12.8284 7.25 12C7.25 11.1716 6.57843 10.5 5.75 10.5Z',
  d6: 'M19.2944 4.32992C19.9222 4.41432 20.489 4.59999 20.9445 5.05546C21.4 5.51093 21.5856 6.07773 21.67 6.70553C21.75 7.30032 21.75 8.04956 21.75 8.94806C21.75 9.18448 21.75 9.30269 21.687 9.38384C21.6716 9.40375 21.6537 9.42164 21.6338 9.43708C21.5526 9.5 21.4344 9.5 21.198 9.5L10.3468 9.50002C10.1821 9.50002 10.0998 9.50002 10.0338 9.46492C9.96773 9.42981 9.91754 9.35542 9.81716 9.20665C8.91935 7.87599 7.39814 7.00002 5.67007 7.00002C5.54594 7.00002 5.48388 7.00002 5.44288 6.98811C5.30933 6.94931 5.21889 6.82115 5.2271 6.68232C5.22961 6.6397 5.24538 6.59537 5.27693 6.5067C5.43147 6.07224 5.65402 5.68921 5.97561 5.35704C6.56245 4.7509 7.30391 4.48902 8.18252 4.367C9.02509 4.25 10.0951 4.25002 11.4164 4.25004L17.052 4.25C17.9505 4.24997 18.6997 4.24995 19.2944 4.32992Z',
  d7: 'M21.75 15.052C21.75 15.9505 21.75 16.6997 21.67 17.2945C21.5856 17.9223 21.4 18.4891 20.9445 18.9445C20.489 19.4 19.9222 19.5857 19.2944 19.6701C18.6997 19.7501 17.9504 19.75 17.0519 19.75L11.4164 19.75C10.0951 19.7501 9.02508 19.7501 8.18252 19.6331C7.30391 19.5111 6.56245 19.2492 5.97561 18.643C5.65401 18.3109 5.43146 17.9278 5.27691 17.4934C5.24537 17.4047 5.22959 17.3603 5.22708 17.3177C5.21888 17.1789 5.30931 17.0507 5.44285 17.0119C5.48385 17 5.54593 17 5.67007 17C7.39814 17 8.91935 16.1241 9.81716 14.7934C9.91754 14.6446 9.96773 14.5702 10.0338 14.5351C10.0998 14.5 10.1821 14.5 10.3468 14.5L21.198 14.5C21.4344 14.5 21.5527 14.5 21.6338 14.563C21.6537 14.5784 21.6716 14.5962 21.687 14.6161C21.75 14.6973 21.75 14.8155 21.75 15.052Z',
  d8: 'M21 5L5.5 5V9.5M21 19H5.5V14.5',
  d9: 'M5.5 10.25C4.5335 10.25 3.75 11.0335 3.75 12C3.75 12.9665 4.5335 13.75 5.5 13.75C6.4665 13.75 7.25 12.9665 7.25 12C7.25 11.0335 6.4665 10.25 5.5 10.25ZM2.25 12C2.25 10.2051 3.70507 8.75 5.5 8.75C7.03679 8.75 8.32445 9.81665 8.66303 11.25H21.75V12.75H8.66303C8.32445 14.1834 7.03679 15.25 5.5 15.25C3.70507 15.25 2.25 13.7949 2.25 12Z',
  d10: 'M5.5 4.25C5.08579 4.25 4.75 4.58579 4.75 5V7.30888C4.9943 7.27013 5.2448 7.25 5.5 7.25C7.31038 7.25 8.88207 8.26186 9.68386 9.75H21.75V4.25H5.5Z',
  d11: 'M21.75 14.25H9.68386C8.88207 15.7381 7.31038 16.75 5.5 16.75C5.2448 16.75 4.9943 16.7299 4.75 16.6911V19C4.75 19.4142 5.08579 19.75 5.5 19.75H21.75V14.25Z',
};

export const IconCapStraightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-stroke-rounded IconCapStraightStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapStraightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-duotone-rounded IconCapStraightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapStraightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-twotone-rounded IconCapStraightTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapStraightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-solid-rounded IconCapStraightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapStraightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-bulk-rounded IconCapStraightBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconCapStraightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-stroke-sharp IconCapStraightStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapStraightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-straight-solid-sharp IconCapStraightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCapStraight: TheIconSelfPack = {
  name: 'CapStraight',
  StrokeRounded: IconCapStraightStrokeRounded,
  DuotoneRounded: IconCapStraightDuotoneRounded,
  TwotoneRounded: IconCapStraightTwotoneRounded,
  SolidRounded: IconCapStraightSolidRounded,
  BulkRounded: IconCapStraightBulkRounded,
  StrokeSharp: IconCapStraightStrokeSharp,
  SolidSharp: IconCapStraightSolidSharp,
};