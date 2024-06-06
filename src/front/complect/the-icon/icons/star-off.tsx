import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5038 14.5L21.1477 11.8925C22.616 10.4206 22.1366 8.92853 20.099 8.58575L16.9128 8.05143C16.3734 7.9607 15.7342 7.48687 15.4945 6.99288L13.7366 3.44418C12.7877 1.51861 11.2296 1.51861 10.2707 3.44418L9.5 5',
  d2: 'M7.29561 8C7.22668 8.0227 7.15848 8.04009 7.09201 8.05146L3.90008 8.58578C1.85885 8.92855 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8162 5.98134 15.6328 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.71 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296C18.1387 22.71 19.4295 21.7623 18.8691 19.3125L18.7974 19',
  d3: 'M2 2L22 22',
  d4: 'M15.9874 21.4296C18.1387 22.71 19.4295 21.7623 18.8691 19.3125L18.7974 19L7.29561 8C7.22668 8.0227 7.15848 8.04009 7.09201 8.05146L3.90008 8.58578C1.85885 8.92855 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8162 5.98134 15.6328 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.71 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296Z',
  d5: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d6: 'M11.9961 1.25C13.0454 1.25 13.8719 2.04253 14.3995 3.11191L16.1616 6.66516C16.215 6.77513 16.3417 6.92998 16.5321 7.07164C16.7223 7.21315 16.9086 7.29121 17.0311 7.3118L20.2207 7.84612C21.3729 8.03973 22.3386 8.60449 22.6521 9.5879C22.9653 10.5705 22.5064 11.5916 21.6778 12.4216L21.677 12.4225L19.1991 14.9209C19.0873 15.0336 19.0314 15.09 19.0208 15.0989C18.8717 15.2237 18.7861 15.2239 18.6365 15.0996C18.6258 15.0908 18.5992 15.0641 18.5459 15.0108L8.91586 5.3808C8.76876 5.2337 8.6952 5.16015 8.67958 5.06485C8.66395 4.96954 8.71017 4.87635 8.80259 4.68998L9.58562 3.11097L9.58632 3.10957C10.119 2.04108 10.948 1.25 11.9961 1.25Z',
  d7: 'M6.96132 7.31219L6.96233 7.31202C7.07056 7.29324 7.12467 7.28386 7.14303 7.28295C7.23815 7.27825 7.26744 7.28753 7.34249 7.34614C7.35698 7.35746 7.37533 7.3758 7.41203 7.4125L19.5451 19.5456C19.617 19.6175 19.653 19.6534 19.6752 19.7003C19.6974 19.7473 19.7022 19.7943 19.7116 19.8885C19.8135 20.9038 19.6083 21.8367 18.8771 22.3742C17.9667 23.0433 16.7227 22.7467 15.5925 22.0736L12.6026 20.289C12.477 20.214 12.2614 20.1532 12.0011 20.1532C11.7427 20.1532 11.5226 20.2132 11.3888 20.291L11.3869 20.2921L8.40288 22.0732C7.27405 22.7487 6.03154 23.04 5.12111 22.3702C4.21449 21.7032 4.11214 20.43 4.40711 19.1447L5.1159 16.0547L5.11633 16.0527C5.14741 15.9107 5.14133 15.6908 5.0728 15.4494C5.0038 15.2064 4.89379 15.0199 4.79558 14.9209L2.31585 12.4206C1.49265 11.5906 1.03521 10.5704 1.34595 9.58925C1.65759 8.60525 2.62143 8.0398 3.77433 7.84606L6.96132 7.31219Z',
  d8: 'M6.96132 7.31155L6.96233 7.31137C7.07056 7.2926 7.12467 7.28321 7.14303 7.28231C7.23815 7.2776 7.26744 7.28688 7.34249 7.3455C7.35698 7.35681 7.37533 7.37516 7.41203 7.41186L19.5451 19.5449C19.617 19.6168 19.653 19.6528 19.6752 19.6997C19.6974 19.7466 19.7022 19.7937 19.7116 19.8878C19.8135 20.9031 19.6083 21.836 18.8771 22.3735C17.9667 23.0427 16.7227 22.7461 15.5925 22.073L12.6026 20.2884C12.477 20.2134 12.2614 20.1526 12.0011 20.1526C11.7427 20.1526 11.5226 20.2125 11.3888 20.2903L11.3869 20.2915L8.40288 22.0726C7.27405 22.748 6.03154 23.0394 5.12111 22.3696C4.21449 21.7026 4.11214 20.4294 4.40711 19.1441L5.1159 16.0541L5.11633 16.0521C5.14741 15.91 5.14133 15.6902 5.0728 15.4488C5.0038 15.2058 4.89379 15.0192 4.79558 14.9202L2.31585 12.42C1.49265 11.59 1.03521 10.5698 1.34595 9.58861C1.65759 8.6046 2.62143 8.03916 3.77433 7.84542L6.96132 7.31155Z',
  d9: 'M11.9953 1.25C13.0446 1.25 13.8711 2.04253 14.3987 3.11191L16.1608 6.66516C16.2142 6.77513 16.3409 6.92998 16.5313 7.07164C16.7215 7.21315 16.9077 7.29121 17.0303 7.3118L20.2199 7.84612C21.3721 8.03973 22.3378 8.60449 22.6513 9.5879C22.9645 10.5705 22.5055 11.5916 21.677 12.4216L21.6762 12.4225L19.1983 14.9209C19.0865 15.0336 19.0306 15.09 19.02 15.0989C18.8709 15.2237 18.7853 15.2239 18.6357 15.0996C18.625 15.0908 18.5984 15.0641 18.5451 15.0108L8.91506 5.3808C8.76795 5.2337 8.6944 5.16015 8.67878 5.06485C8.66315 4.96954 8.70936 4.87635 8.80179 4.68998L9.58482 3.11097L9.58551 3.10957C10.1182 2.04108 10.9472 1.25 11.9953 1.25Z',
  d10: 'M17.587 14.4055L21.9995 9.63932L15.4995 8L11.9995 2L9.48761 6.30612M8.10022 8.1007L1.99951 9.63932L6.49951 14.5L4.81917 22L11.9995 19L19.1799 22L18.3657 18.3662',
  d11: 'M21.3348 22.75L1.24902 2.66421L2.66324 1.25L22.749 21.3358L21.3348 22.75Z',
  d12: 'M11.999 1.25C12.2658 1.25 12.5125 1.39168 12.6469 1.6221L15.9881 7.34985L22.1824 8.91209C22.4392 8.97684 22.6427 9.17215 22.7181 9.42598C22.7934 9.67981 22.7293 9.95455 22.5494 10.1488L18.317 14.7204L18.3349 14.8004L9.069 5.53444L11.3512 1.6221C11.4856 1.39168 11.7323 1.25 11.999 1.25Z',
  d13: 'M19.9112 21.836C19.9725 22.1096 19.8761 22.3946 19.6612 22.5747C19.4464 22.7549 19.149 22.8001 18.8902 22.692L11.999 19.8128L5.10783 22.692C4.84912 22.8001 4.55171 22.7549 4.33684 22.5747C4.12198 22.3946 4.02554 22.1096 4.08684 21.836L5.68106 14.7204L1.44868 10.1488C1.26881 9.95455 1.20471 9.67981 1.28002 9.42598C1.35533 9.17215 1.5589 8.97684 1.81563 8.91209L7.48203 7.48301L19.3558 19.3567L19.9112 21.836Z',
};

export const IconStarOffStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-stroke-rounded IconStarOffStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconStarOffDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-duotone-rounded IconStarOffDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconStarOffTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-twotone-rounded IconStarOffTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconStarOffSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-solid-rounded IconStarOffSolidRounded"
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

export const IconStarOffBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-bulk-rounded IconStarOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarOffStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-stroke-sharp IconStarOffStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarOffSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="star-off-solid-sharp IconStarOffSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStarOff: TheIconSelfPack = {
  name: 'StarOff',
  StrokeRounded: IconStarOffStrokeRounded,
  DuotoneRounded: IconStarOffDuotoneRounded,
  TwotoneRounded: IconStarOffTwotoneRounded,
  SolidRounded: IconStarOffSolidRounded,
  BulkRounded: IconStarOffBulkRounded,
  StrokeSharp: IconStarOffStrokeSharp,
  SolidSharp: IconStarOffSolidSharp,
};