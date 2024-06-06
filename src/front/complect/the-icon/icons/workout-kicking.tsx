import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z',
  d2: 'M8.94848 14H8.13896C7.326 14 6.91951 14 6.63846 13.763C6.3574 13.526 6.29058 13.127 6.15693 12.3288L6.08019 11.8705C6.00839 11.4417 5.97249 11.2273 6.02497 11.0231C6.07746 10.8188 6.21238 10.6479 6.48221 10.3061L7.73131 8.72371M9.78571 6L8.69731 7.5L7.73131 8.72371M9.78571 6L11.9625 3M9.78571 6L14.2859 9.5M14.2859 9.5L20 3M14.2859 9.5L12.9672 12.5M7.73131 8.72371L12.9672 12.5M12.9672 12.5V21',
  d3: 'M11.2478 7.13778C10.6435 6.66777 10.3413 6.43277 10.0124 6.42442C9.90127 6.4216 9.79042 6.43734 9.68444 6.47098C9.37088 6.57054 9.14608 6.88036 8.69646 7.5C8.40062 7.87477 8.2527 8.06215 8.19885 8.25636C8.12489 8.52308 8.16478 8.80853 8.30903 9.04475C8.41407 9.21675 8.6077 9.3564 8.99495 9.63569L11.336 11.3241C11.909 11.7374 12.1956 11.9441 12.481 11.9634C12.7049 11.9785 12.9273 11.9179 13.1125 11.7914C13.3488 11.63 13.4909 11.3066 13.7753 10.6597C13.9624 10.2339 14.056 10.021 14.056 9.8109C14.056 9.64488 14.0146 9.48148 13.9357 9.33543C13.8358 9.1506 13.6522 9.00782 13.285 8.72226L11.2478 7.13778Z',
  d4: 'M3.125 5.5C3.125 4.25736 4.13236 3.25 5.375 3.25C6.61764 3.25 7.625 4.25736 7.625 5.5C7.625 6.74264 6.61764 7.75 5.375 7.75C4.13236 7.75 3.125 6.74264 3.125 5.5Z',
  d5: 'M12.6384 3.60011C12.9698 3.15831 12.8803 2.5315 12.4385 2.2001C11.9967 1.8687 11.3698 1.9582 11.0384 2.40001L5.55813 9.70607C5.5382 9.73264 5.51961 9.76018 5.50242 9.7886C5.22934 10.2401 4.85163 11.2778 5.04537 12.4871C5.10516 12.8446 5.17343 13.2528 5.26023 13.543C5.35901 13.8732 5.52448 14.2365 5.86972 14.5276C6.1515 14.7652 6.50724 14.8453 6.68295 14.8806C6.91076 14.9262 7.16361 14.9521 7.40282 14.9682C7.87722 15.0001 8.41171 15.0001 8.80936 15.0001H8.80937H8.82435C9.37664 15.0001 9.82435 14.5523 9.82435 14.0001C9.82435 13.4478 9.37664 13.0001 8.82435 13.0001C8.41052 13.0001 7.93806 12.9996 7.53694 12.9727C7.38709 12.9626 7.26316 12.9498 7.16643 12.9352C7.12418 12.7815 7.0853 12.5591 7.01971 12.1675C6.92123 11.547 7.11379 11.0177 7.1969 10.8544L7.78766 10.0668C7.9586 10.2104 8.16672 10.3604 8.38038 10.5145L8.3804 10.5145L11.8429 13.0117V21C11.8429 21.5523 12.2906 22 12.8429 22C13.3952 22 13.8429 21.5523 13.8429 21V12.7101L15.0147 10.0441L20.6267 3.66026C20.9913 3.24547 20.9507 2.61361 20.5359 2.24896C20.1211 1.88432 19.4893 1.92497 19.1246 2.33977L14.0322 8.13257L11.5886 6.23211C11.3817 6.07112 11.18 5.91422 10.9949 5.79103L12.6384 3.60011Z',
  d6: 'M8.94932 14H6.50043L6.00043 11L7.73216 8.72371M9.78656 6L8.69815 7.5L7.73216 8.72371M9.78656 6L11.9634 3M9.78656 6L14.2867 9.5M14.2867 9.5L20.0008 3M14.2867 9.5L12.9681 12.5M7.73216 8.72371L12.9681 12.5M12.9681 12.5V21',
  d7: 'M3.24982 5.74756C3.24982 4.50492 4.25718 3.49756 5.49982 3.49756C6.74246 3.49756 7.74982 4.50492 7.74982 5.74756C7.74982 6.9902 6.74246 7.99756 5.49982 7.99756C4.25718 7.99756 3.24982 6.9902 3.24982 5.74756Z',
  d8: 'M14.9264 10.1555L13.7179 12.9051V21.2475H12.2179V13.1313L7.88622 10.0072L6.7933 11.4438L7.13559 13.4975H8.94914V14.9975H6.50025C6.13362 14.9975 5.82073 14.7324 5.76045 14.3708L5.26045 11.3708C5.22646 11.1669 5.27817 10.9579 5.40335 10.7934L7.1432 8.50644L8.09987 7.29473L11.3562 2.80704L12.5702 3.68797L10.8194 6.10084L14.1895 8.72192L19.6237 2.75232L20.7502 3.74269L14.9264 10.1555Z',
};

export const IconWorkoutKickingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-stroke-rounded IconWorkoutKickingStrokeRounded"
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

export const IconWorkoutKickingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-duotone-rounded IconWorkoutKickingDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconWorkoutKickingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-twotone-rounded IconWorkoutKickingTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutKickingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-solid-rounded IconWorkoutKickingSolidRounded"
    >
      <path 
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

export const IconWorkoutKickingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-bulk-rounded IconWorkoutKickingBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutKickingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-stroke-sharp IconWorkoutKickingStrokeSharp"
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

export const IconWorkoutKickingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-kicking-solid-sharp IconWorkoutKickingSolidSharp"
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

export const iconPackOfWorkoutKicking: TheIconSelfPack = {
  name: 'WorkoutKicking',
  StrokeRounded: IconWorkoutKickingStrokeRounded,
  DuotoneRounded: IconWorkoutKickingDuotoneRounded,
  TwotoneRounded: IconWorkoutKickingTwotoneRounded,
  SolidRounded: IconWorkoutKickingSolidRounded,
  BulkRounded: IconWorkoutKickingBulkRounded,
  StrokeSharp: IconWorkoutKickingStrokeSharp,
  SolidSharp: IconWorkoutKickingSolidSharp,
};