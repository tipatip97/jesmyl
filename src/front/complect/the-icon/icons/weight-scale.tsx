import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.68262 5C5.31812 5.06167 4.47505 5.2536 3.87868 5.851C3 6.73119 3 8.14783 3 10.9811V15.9897C3 18.823 3 20.2396 3.87868 21.1198C4.75736 22 6.17157 22 9 22H15C17.8284 22 19.2426 22 20.1213 21.1198C21 20.2396 21 18.823 21 15.9897V10.9811C21 8.14783 21 6.73119 20.1213 5.851C19.5249 5.2536 18.6819 5.06167 17.3174 5',
  d2: 'M7.02532 6.54026C6.54474 4.66034 6.30445 3.72039 6.69501 3.03089C6.79898 2.84733 6.93184 2.68092 7.08871 2.53776C7.67799 2 8.66873 2 10.6502 2H13.3498C15.3313 2 16.322 2 16.9113 2.53776C17.0682 2.68092 17.201 2.84733 17.305 3.03089C17.6955 3.72039 17.4553 4.66034 16.9747 6.54026C16.5915 8.03898 16.4 8.78834 15.8877 9.28153C15.7483 9.41576 15.5936 9.5339 15.4266 9.63362C14.8131 10 14.0233 10 12.4436 10H11.5564C9.97674 10 9.18689 10 8.5734 9.63362C8.40642 9.5339 8.2517 9.41576 8.11228 9.28153C7.60002 8.78834 7.40846 8.03898 7.02532 6.54026Z',
  d3: 'M10 18H14',
  d4: 'M11.5 10L12.5 7',
  d5: 'M6.65053 5.00146C6.74231 5.43318 6.87151 5.93857 7.02532 6.54024C7.40846 8.03896 7.60002 8.78833 8.11228 9.28151C8.2517 9.41575 8.40642 9.53388 8.5734 9.6336C9.18689 9.99999 9.97674 9.99999 11.5564 9.99999H12.4436C14.0233 9.99999 14.8131 9.99999 15.4266 9.6336C15.5936 9.53388 15.7483 9.41575 15.8877 9.28151C16.4 8.78833 16.5915 8.03897 16.9747 6.54025C17.1285 5.93858 17.2577 5.43318 17.3495 5.00146C18.6951 5.06469 19.5296 5.25828 20.1213 5.85098C21 6.73117 21 8.14781 21 10.9811V15.9897C21 18.823 21 20.2396 20.1213 21.1198C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1198C3 20.2396 3 18.823 3 15.9897V10.9811C3 8.14781 3 6.73117 3.87868 5.85098C4.47037 5.25828 5.30488 5.06469 6.65053 5.00146Z',
  d6: 'M10.6439 1.25H13.3561C14.259 1.24997 15.0211 1.24994 15.6249 1.32042C16.255 1.39395 16.8707 1.55847 17.3706 2.00915C17.5958 2.21222 17.7873 2.44899 17.9376 2.71113C18.2738 3.29759 18.29 3.92691 18.21 4.54305C18.1338 5.12988 17.9482 5.8472 17.7298 6.691L17.7034 6.79302C17.5291 7.467 17.3807 8.04037 17.2102 8.5003C17.029 8.989 16.7954 9.43053 16.4051 9.80182C16.2181 9.97973 16.0109 10.1359 15.7878 10.2676C15.3243 10.541 14.8306 10.6513 14.302 10.702C13.8018 10.75 13.1927 10.75 12.4717 10.75H11.5283C10.8073 10.75 10.1982 10.75 9.69801 10.702C9.16936 10.6513 8.67566 10.541 8.21217 10.2676C7.9891 10.1359 7.78194 9.97973 7.5949 9.80182C7.20457 9.43053 6.97095 8.989 6.78978 8.5003C6.61927 8.04037 6.47094 7.46699 6.29657 6.79301L6.28507 6.74854C6.28009 6.72929 6.27512 6.7101 6.27017 6.69099C6.05181 5.84719 5.86617 5.12987 5.79 4.54305C5.71002 3.92691 5.72617 3.29759 6.06239 2.71113C6.21268 2.44899 6.40422 2.21222 6.62944 2.00915C7.1293 1.55847 7.74503 1.39395 8.37506 1.32042C8.97893 1.24994 9.74095 1.24997 10.6439 1.25ZM8.60067 3.2073C8.13641 3.26149 7.99252 3.35241 7.92575 3.4126C7.8493 3.48153 7.78534 3.56095 7.73568 3.64756C7.69637 3.71613 7.64027 3.8608 7.69746 4.30137C7.75673 4.75797 7.91092 5.36081 8.14823 6.27795C8.33725 7.00848 8.46246 7.48783 8.59555 7.84684C8.72171 8.18716 8.82647 8.33584 8.9287 8.43308C9.00978 8.51021 9.10016 8.57847 9.1982 8.63631C9.32461 8.7109 9.5056 8.77464 9.88389 8.81094C10.2802 8.84896 10.7953 8.85 11.5735 8.85H12.4265C13.2047 8.85 13.7198 8.84896 14.1161 8.81094C14.4944 8.77464 14.6754 8.7109 14.8018 8.63631C14.8998 8.57847 14.9902 8.51021 15.0713 8.43308C15.1735 8.33584 15.2783 8.18716 15.4045 7.84684C15.5375 7.48783 15.6628 7.00848 15.8518 6.27795C16.0891 5.36081 16.2433 4.75797 16.3025 4.30137C16.3597 3.8608 16.3036 3.71613 16.2643 3.64756C16.2147 3.56094 16.1507 3.48153 16.0742 3.4126C16.0075 3.35241 15.8636 3.26149 15.3993 3.2073C14.9218 3.15157 14.2747 3.15 13.2979 3.15H10.7021C9.72532 3.15 9.07816 3.15157 8.60067 3.2073Z',
  d7: 'M7.38414 4.84405C7.30775 4.48471 6.9823 4.23359 6.61533 4.25084C5.25234 4.31488 4.15588 4.51029 3.3479 5.31965C2.74621 5.92238 2.48747 6.68113 2.3665 7.58241C2.24996 8.45069 2.24998 9.55475 2.25 10.9248V10.9248V10.9248V16.043V16.043V16.0431C2.24998 17.4131 2.24996 18.5172 2.3665 19.3855C2.48747 20.2867 2.74621 21.0455 3.3479 21.6482C3.94976 22.2511 4.70774 22.5105 5.60808 22.6318C6.47513 22.7486 7.57752 22.7486 8.94504 22.7485H15.055C16.4225 22.7486 17.5249 22.7486 18.3919 22.6318C19.2923 22.5105 20.0502 22.2511 20.6521 21.6482C21.2538 21.0455 21.5125 20.2867 21.6335 19.3855C21.75 18.5172 21.75 17.4131 21.75 16.043V10.9249C21.75 9.55477 21.75 8.4507 21.6335 7.58241C21.5125 6.68113 21.2538 5.92238 20.6521 5.31965C19.8441 4.51029 18.7477 4.31488 17.3847 4.25084C17.0177 4.23359 16.6923 4.48471 16.6159 4.84405C16.528 5.25756 16.4031 5.74642 16.248 6.35303C16.0527 7.11711 15.9191 7.63604 15.7754 8.02855C15.637 8.40631 15.5113 8.60135 15.3675 8.73977C15.2694 8.83421 15.1603 8.91764 15.0421 8.98823C14.8668 9.09292 14.6379 9.16614 14.2249 9.20624C13.7979 9.24771 13.248 9.24853 12.4436 9.24853H11.5564C10.752 9.24853 10.2021 9.24771 9.77509 9.20624C9.36212 9.16614 9.13324 9.09292 8.95795 8.98823C8.83973 8.91764 8.73056 8.83422 8.63246 8.73977C8.48869 8.60135 8.36299 8.40631 8.22463 8.02855C8.08086 7.63604 7.94728 7.11711 7.75196 6.35303C7.59688 5.74642 7.47205 5.25756 7.38414 4.84405ZM10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z',
  d8: 'M12.8163 6.05159C13.3402 6.22624 13.6234 6.79256 13.4487 7.3165L12.6345 9.75924C12.4599 10.2832 11.8935 10.5663 11.3696 10.3917C10.8456 10.2171 10.5625 9.65073 10.7371 9.12679L11.5514 6.68404C11.726 6.1601 12.2924 5.87694 12.8163 6.05159Z',
  d9: 'M6.61533 4.25084C6.9823 4.23359 7.30775 4.48471 7.38414 4.84405C7.47205 5.25756 7.59688 5.74642 7.75196 6.35303C7.94728 7.11711 8.08086 7.63604 8.22463 8.02855C8.36299 8.40631 8.48869 8.60135 8.63246 8.73977C8.73056 8.83422 8.83973 8.91764 8.95795 8.98823C9.13324 9.09292 9.36212 9.16614 9.77509 9.20624C10.2021 9.24771 10.752 9.24853 11.5564 9.24853H12.4436C13.248 9.24853 13.7979 9.24771 14.2249 9.20624C14.6379 9.16614 14.8668 9.09292 15.0421 8.98823C15.1603 8.91764 15.2694 8.83421 15.3675 8.73977C15.5113 8.60135 15.637 8.40631 15.7754 8.02855C15.9191 7.63604 16.0527 7.11711 16.248 6.35303C16.4031 5.74642 16.528 5.25756 16.6159 4.84405C16.6923 4.48471 17.0177 4.23359 17.3847 4.25084C18.7477 4.31488 19.8441 4.51029 20.6521 5.31965C21.2538 5.92238 21.5125 6.68113 21.6335 7.58241C21.75 8.4507 21.75 9.55477 21.75 10.9249V16.043C21.75 17.4131 21.75 18.5172 21.6335 19.3855C21.5125 20.2867 21.2538 21.0455 20.6521 21.6482C20.0502 22.2511 19.2923 22.5105 18.3919 22.6318C17.5249 22.7486 16.4225 22.7486 15.055 22.7485H8.94504C7.57752 22.7486 6.47513 22.7486 5.60808 22.6318C4.70774 22.5105 3.94976 22.2511 3.3479 21.6482C2.74621 21.0455 2.48747 20.2867 2.3665 19.3855C2.24996 18.5172 2.24998 17.4131 2.25 16.043V16.043V10.9248V10.9248C2.24998 9.55475 2.24996 8.45069 2.3665 7.58241C2.48747 6.68113 2.74621 5.92238 3.3479 5.31965C4.15588 4.51029 5.25234 4.31488 6.61533 4.25084Z',
  d10: 'M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z',
  d11: 'M17 3H7L8 10H16L17 3Z',
  d12: 'M16.5 6H20V21H4V6H7.5',
  d13: 'M10 17H14',
  d14: 'M11.5 10L13 6',
  d15: 'M6.43341 2.5086C6.57587 2.34435 6.78259 2.25 7 2.25H17C17.2174 2.25 17.4241 2.34435 17.5666 2.5086C17.709 2.67285 17.7732 2.89083 17.7425 3.10607L17.4362 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6V21C20.75 21.4142 20.4142 21.75 20 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21V6C3.25 5.58579 3.58579 5.25 4 5.25H6.56382L6.25754 3.10607C6.2268 2.89083 6.29096 2.67285 6.43341 2.5086ZM7.86523 3.75L8.65095 9.25H10.9794L12.2969 5.73682L13.7014 6.2635L12.5814 9.25H15.35L16.1357 3.75H7.86523ZM10 17.75H14V16.25H10V17.75Z',
};

export const IconWeightScaleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-stroke-rounded IconWeightScaleStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-duotone-rounded IconWeightScaleDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-twotone-rounded IconWeightScaleTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-solid-rounded IconWeightScaleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-bulk-rounded IconWeightScaleBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-stroke-sharp IconWeightScaleStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScaleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-solid-sharp IconWeightScaleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWeightScale: TheIconSelfPack = {
  name: 'WeightScale',
  StrokeRounded: IconWeightScaleStrokeRounded,
  DuotoneRounded: IconWeightScaleDuotoneRounded,
  TwotoneRounded: IconWeightScaleTwotoneRounded,
  SolidRounded: IconWeightScaleSolidRounded,
  BulkRounded: IconWeightScaleBulkRounded,
  StrokeSharp: IconWeightScaleStrokeSharp,
  SolidSharp: IconWeightScaleSolidSharp,
};