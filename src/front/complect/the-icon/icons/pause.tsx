import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z',
  d2: 'M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z',
  d3: 'M16.9506 3.25L17 3.25L17.0494 3.25H17.0494C17.7143 3.24996 18.2871 3.24993 18.7458 3.31161C19.2375 3.37771 19.7087 3.52677 20.091 3.90901C20.4732 4.29126 20.6223 4.76252 20.6884 5.25416C20.7501 5.71291 20.75 6.28577 20.75 6.95064V17.0494C20.75 17.7142 20.7501 18.2871 20.6884 18.7458C20.6223 19.2375 20.4732 19.7087 20.091 20.091C19.7087 20.4732 19.2375 20.6223 18.7458 20.6884C18.2871 20.7501 17.7142 20.75 17.0494 20.75H16.9506C16.2858 20.75 15.7129 20.7501 15.2542 20.6884C14.7625 20.6223 14.2913 20.4732 13.909 20.091C13.5268 19.7087 13.3777 19.2375 13.3116 18.7458C13.2499 18.2871 13.25 17.7143 13.25 17.0494V17.0494V6.95063V6.95058C13.25 6.28574 13.2499 5.71289 13.3116 5.25416C13.3777 4.76252 13.5268 4.29126 13.909 3.90901C14.2913 3.52677 14.7625 3.37771 15.2542 3.31161C15.7129 3.24993 16.2857 3.24996 16.9506 3.25H16.9506Z',
  d4: 'M6.95063 3.25L7 3.25L7.04938 3.25H7.04943C7.71427 3.24996 8.28711 3.24993 8.74585 3.31161C9.23748 3.37771 9.70875 3.52677 10.091 3.90901C10.4732 4.29126 10.6223 4.76252 10.6884 5.25416C10.7501 5.71291 10.75 6.28577 10.75 6.95064V17.0494C10.75 17.7142 10.7501 18.2871 10.6884 18.7458C10.6223 19.2375 10.4732 19.7087 10.091 20.091C9.70875 20.4732 9.23748 20.6223 8.74585 20.6884C8.2871 20.7501 7.71424 20.75 7.04937 20.75H6.95063C6.28577 20.75 5.71291 20.7501 5.25416 20.6884C4.76252 20.6223 4.29126 20.4732 3.90901 20.091C3.52677 19.7087 3.37771 19.2375 3.31161 18.7458C3.24993 18.2871 3.24996 17.7143 3.25 17.0494V17.0494V6.95063V6.95058C3.24996 6.28574 3.24993 5.71289 3.31161 5.25416C3.37771 4.76252 3.52677 4.29126 3.90901 3.90901C4.29126 3.52677 4.76252 3.37771 5.25416 3.31161C5.71289 3.24993 6.28573 3.24996 6.95058 3.25H6.95063Z',
  d5: 'M4 20H10V4H4V20Z',
  d6: 'M14 20H20V4H14V20Z',
  d7: 'M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H10C10.4142 3.25 10.75 3.58579 10.75 4V20C10.75 20.4142 10.4142 20.75 10 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z',
  d8: 'M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V20C20.75 20.4142 20.4142 20.75 20 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V4Z',
} as const;

export const IconPauseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-stroke-rounded IconPauseStrokeRounded"
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

export const IconPauseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-duotone-rounded IconPauseDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconPauseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-twotone-rounded IconPauseTwotoneRounded"
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

export const IconPauseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-solid-rounded IconPauseSolidRounded"
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

export const IconPauseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-bulk-rounded IconPauseBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPauseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-stroke-sharp IconPauseStrokeSharp"
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

export const IconPauseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pause-solid-sharp IconPauseSolidSharp"
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

export const iconPackOfPause: TheIconSelfPack = {
  name: 'Pause',
  StrokeRounded: IconPauseStrokeRounded,
  DuotoneRounded: IconPauseDuotoneRounded,
  TwotoneRounded: IconPauseTwotoneRounded,
  SolidRounded: IconPauseSolidRounded,
  BulkRounded: IconPauseBulkRounded,
  StrokeSharp: IconPauseStrokeSharp,
  SolidSharp: IconPauseSolidSharp,
};