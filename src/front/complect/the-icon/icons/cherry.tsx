import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 16.5C22 19.5376 19.5376 22 16.5 22C13.4624 22 11 19.5376 11 16.5C11 13.4624 13.4624 11 16.5 11C19.5376 11 22 13.4624 22 16.5Z',
  d2: 'M10.5 11C9.62217 10.37 8.55171 10 7.39646 10C4.41608 10 2 12.4624 2 15.5C2 18.5376 4.41608 21 7.39646 21C8.08877 21 8.75062 20.8671 9.35882 20.6251',
  d3: 'M16 13C14.1631 11.1035 11.7291 7.13692 13.7946 4M16 2C14.9847 2.59904 14.2703 3.27752 13.7946 4M13.7946 4C11.4006 4.5 6.09142 6.5 7.13408 12',
  d4: 'M16 13C14.1599 11.1035 11.7216 7.13692 13.7907 4C14.2672 3.27752 14.9829 2.59904 16 2',
  d5: 'M10.5 11C9.62217 10.37 8.55171 10 7.39646 10C4.41608 10 2 12.4624 2 15.5C2 18.5376 4.41608 21 7.39646 21C8.08877 21 8.75062 20.8671 9.35882 20.6251M14.0004 3.5C11.6064 4 6.09134 6.5 7.13401 12',
  d6: 'M10.25 16.6252C10.25 13.1735 13.0482 10.3752 16.5 10.3752C19.9518 10.3752 22.75 13.1735 22.75 16.6252C22.75 20.077 19.9518 22.8752 16.5 22.8752C13.0482 22.8752 10.25 20.077 10.25 16.6252Z',
  d7: 'M11.1442 10.547C11.2959 10.6561 11.2991 10.8765 11.1636 11.0051C9.67694 12.4172 8.75 14.413 8.75 16.6252C8.75 18.2215 9.2326 19.7051 10.0598 20.9379C10.164 21.0932 10.1126 21.3077 9.94054 21.3808C9.19073 21.6991 8.36593 21.8752 7.5 21.8752C4.04822 21.8752 1.25 19.077 1.25 15.6252C1.25 12.1735 4.04822 9.37524 7.5 9.37524C8.85989 9.37524 10.1183 9.80956 11.1442 10.547Z',
  d8: 'M16.8615 1.49292C17.1417 1.9688 16.9832 2.58179 16.5073 2.86206C15.5988 3.39712 15.0044 3.97614 14.6253 4.55101C13.8241 5.76569 13.8526 7.18317 14.3706 8.62814C14.8916 10.0818 15.8691 11.4296 16.7175 12.3041C17.1021 12.7004 17.0925 13.3335 16.6961 13.7181C16.2998 14.1027 15.6667 14.0931 15.2821 13.6967C14.2904 12.6747 13.1287 11.0909 12.4878 9.30296C11.8439 7.5063 11.6878 5.37204 12.9557 3.4498C13.5296 2.5797 14.3666 1.80177 15.4923 1.13874C15.9682 0.858466 16.5812 1.01704 16.8615 1.49292Z',
  d9: 'M14.9794 3.296C15.0923 3.83662 14.7456 4.36641 14.2049 4.47932C13.1364 4.70249 11.331 5.38959 9.9427 6.62303C8.59406 7.82119 7.67527 9.48626 8.11659 11.8142C8.21945 12.3568 7.86297 12.8801 7.32034 12.9829C6.77772 13.0858 6.25445 12.7293 6.15159 12.1867C5.55024 9.01463 6.86764 6.6797 8.61436 5.12786C10.3214 3.61131 12.4705 2.7984 13.7961 2.52157C14.3367 2.40866 14.8665 2.75538 14.9794 3.296Z',
  d10: 'M14.2049 4.47957C14.7456 4.36666 15.0923 3.83687 14.9794 3.29625C14.8665 2.75563 14.3367 2.4089 13.7961 2.52181C12.4705 2.79865 10.3214 3.61155 8.61436 5.12811C7.39641 6.21017 6.3872 7.67296 6.09165 9.53481C3.31811 10.1735 1.25 12.658 1.25 15.6255C1.25 19.0773 4.04822 21.8755 7.5 21.8755C8.36593 21.8755 9.19073 21.6994 9.94054 21.381C10.1126 21.308 10.164 21.0934 10.0598 20.9382C9.2326 19.7053 8.75 18.2218 8.75 16.6255C8.75 14.4132 9.67694 12.4174 11.1636 11.0054C11.2991 10.8767 11.2959 10.6563 11.1442 10.5473C10.2861 9.93041 9.26527 9.52565 8.15845 9.40976C8.44625 8.27388 9.11316 7.36025 9.9427 6.62327C11.331 5.38983 13.1364 4.70273 14.2049 4.47957Z',
  d11: 'M10.25 16.5C10.25 13.0482 13.0482 10.25 16.5 10.25C19.9518 10.25 22.75 13.0482 22.75 16.5C22.75 19.9518 19.9518 22.75 16.5 22.75C13.0482 22.75 10.25 19.9518 10.25 16.5Z',
  d12: 'M16.3813 2.54191C15.4475 3.09285 14.8239 3.69663 14.4211 4.3084C13.5629 5.61176 13.6074 7.11927 14.1402 8.60843C14.6753 10.104 15.6742 11.4813 16.5389 12.3742L15.4614 13.4177C14.4893 12.414 13.3527 10.8598 12.7279 9.11377C12.2756 7.84972 12.0768 6.4339 12.4542 5.05482C11.5312 5.38561 10.5102 5.88335 9.65658 6.59652C8.33449 7.70106 7.40831 9.31501 7.87111 11.7563L6.39736 12.0356C5.8175 8.9769 7.02456 6.84085 8.69487 5.44539C10.2017 4.18652 12.0783 3.527 13.347 3.22736C13.8868 2.49552 14.6357 1.83016 15.619 1.25L16.3813 2.54191Z',
  d13: 'M11.429 10.6391C9.78806 12.0602 8.75 14.1589 8.75 16.5C8.75 18.2249 9.31354 19.8183 10.2665 21.1059C9.43257 21.5183 8.49335 21.75 7.5 21.75C4.04822 21.75 1.25 18.9518 1.25 15.5C1.25 12.0482 4.04822 9.25 7.5 9.25C8.98855 9.25 10.3556 9.77038 11.429 10.6391Z',
};

export const IconCherryStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-stroke-rounded IconCherryStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCherryDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-duotone-rounded IconCherryDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCherryTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-twotone-rounded IconCherryTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCherrySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-solid-rounded IconCherrySolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCherryBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-bulk-rounded IconCherryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconCherryStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-stroke-sharp IconCherryStrokeSharp"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCherrySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cherry-solid-sharp IconCherrySolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCherry: TheIconSelfPack = {
  name: 'Cherry',
  StrokeRounded: IconCherryStrokeRounded,
  DuotoneRounded: IconCherryDuotoneRounded,
  TwotoneRounded: IconCherryTwotoneRounded,
  SolidRounded: IconCherrySolidRounded,
  BulkRounded: IconCherryBulkRounded,
  StrokeSharp: IconCherryStrokeSharp,
  SolidSharp: IconCherrySolidSharp,
};