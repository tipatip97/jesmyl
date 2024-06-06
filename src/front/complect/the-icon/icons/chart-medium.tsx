import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 3H12.009M12 6H12.009M12 9H12.009M12 12H12.009M12 15H12.009M12 18H12.009',
  d2: 'M6 7C6.67348 5.87847 7.58712 5 8.99282 5C14.9359 5 11.5954 17 17.9819 17C19.3976 17 20.3057 16.1157 21 15',
  d3: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d4: 'M11 3C11 2.44772 11.4477 2 12 2H12.009C12.5613 2 13.009 2.44772 13.009 3C13.009 3.55228 12.5613 4 12.009 4H12C11.4477 4 11 3.55228 11 3ZM11 6C11 5.44772 11.4477 5 12 5H12.009C12.5613 5 13.009 5.44772 13.009 6C13.009 6.55228 12.5613 7 12.009 7H12C11.4477 7 11 6.55228 11 6ZM11 9C11 8.44772 11.4477 8 12 8H12.009C12.5613 8 13.009 8.44772 13.009 9C13.009 9.55228 12.5613 10 12.009 10H12C11.4477 10 11 9.55228 11 9ZM11 12C11 11.4477 11.4477 11 12 11H12.009C12.5613 11 13.009 11.4477 13.009 12C13.009 12.5523 12.5613 13 12.009 13H12C11.4477 13 11 12.5523 11 12ZM11 15C11 14.4477 11.4477 14 12 14H12.009C12.5613 14 13.009 14.4477 13.009 15C13.009 15.5523 12.5613 16 12.009 16H12C11.4477 16 11 15.5523 11 15ZM11 18C11 17.4477 11.4477 17 12 17H12.009C12.5613 17 13.009 17.4477 13.009 18C13.009 18.5523 12.5613 19 12.009 19H12C11.4477 19 11 18.5523 11 18Z',
  d5: 'M8.99272 6C8.10213 6 7.45439 6.52034 6.85721 7.51481C6.57289 7.98829 5.95857 8.14163 5.4851 7.8573C5.01162 7.57298 4.85828 6.95866 5.1426 6.48519C5.89238 5.2366 7.07193 4 8.99272 4C9.91491 4 10.7103 4.23632 11.3798 4.68477C12.039 5.12624 12.5181 5.7341 12.8814 6.39092C13.5506 7.60053 13.9159 9.15747 14.2432 10.5529C14.2604 10.626 14.2774 10.6987 14.2944 10.7709C14.6559 12.3069 14.9935 13.6433 15.5753 14.6089C15.8544 15.0722 16.1677 15.4092 16.531 15.6335C16.8878 15.8538 17.3483 16 17.9818 16C18.8815 16 19.5259 15.4761 20.1509 14.4717C20.4427 14.0028 21.0593 13.8592 21.5282 14.151C21.9971 14.4427 22.1407 15.0594 21.8489 15.5283C21.0854 16.7554 19.9135 18 17.9818 18C17.0187 18 16.1865 17.7712 15.4804 17.3353C14.7807 16.9033 14.2608 16.3028 13.8622 15.6411C13.0884 14.3567 12.6922 12.6931 12.3476 11.2291C12.3417 11.204 12.3358 11.179 12.3299 11.1541C11.9725 9.63507 11.6631 8.32028 11.1314 7.35908C10.8724 6.8909 10.5875 6.56126 10.2669 6.34648C9.9566 6.13868 9.55631 6 8.99272 6Z',
  d6: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d7: 'M21 21H3V3',
  d8: 'M11.0752 2H13.0842V4H11.0752V2ZM11.0752 5H13.0842V7H11.0752V5ZM11.0752 8H13.0842V10H11.0752V8ZM11.0752 11H13.0842V13H11.0752V11ZM11.0752 14H13.0842V16H11.0752V14ZM11.0752 17H13.0842V19H11.0752V17Z',
  d9: 'M9.06789 6C8.1773 6 7.52956 6.52034 6.93238 7.51481L5.21777 6.48519C5.96755 5.2366 7.1471 4 9.06789 4C9.99008 4 10.7855 4.23632 11.455 4.68477C12.1141 5.12624 12.5932 5.7341 12.9566 6.39092C13.6258 7.60053 13.991 9.15747 14.3184 10.5529C14.3355 10.626 14.3526 10.6987 14.3696 10.7709C14.7311 12.3069 15.0686 13.6433 15.6504 14.6089C15.9296 15.0722 16.2429 15.4092 16.6062 15.6335C16.963 15.8538 17.4235 16 18.0569 16C18.9567 16 19.601 15.4761 20.226 14.4717L21.9241 15.5283C21.1606 16.7554 19.9886 18 18.0569 18C17.0938 18 16.2616 17.7712 15.5555 17.3353C14.8559 16.9033 14.336 16.3028 13.9373 15.6411C13.1636 14.3567 12.7673 12.6931 12.4228 11.2291C12.4169 11.204 12.411 11.179 12.4051 11.1541C12.0477 9.63507 11.7383 8.32028 11.2066 7.35908C10.9476 6.8909 10.6627 6.56126 10.342 6.34648C10.0318 6.13868 9.63148 6 9.06789 6Z',
  d10: 'M4.0752 20V3H2.0752V21C2.0752 21.5523 2.52291 22 3.0752 22H21.0752V20H4.0752Z',
} as const;

export const IconChartMediumStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-stroke-rounded IconChartMediumStrokeRounded"
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

export const IconChartMediumDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-duotone-rounded IconChartMediumDuotoneRounded"
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
        strokeLinecap="round" 
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

export const IconChartMediumTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-twotone-rounded IconChartMediumTwotoneRounded"
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

export const IconChartMediumSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-solid-rounded IconChartMediumSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartMediumBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-bulk-rounded IconChartMediumBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartMediumStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-stroke-sharp IconChartMediumStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartMediumSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-medium-solid-sharp IconChartMediumSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartMedium: TheIconSelfPack = {
  name: 'ChartMedium',
  StrokeRounded: IconChartMediumStrokeRounded,
  DuotoneRounded: IconChartMediumDuotoneRounded,
  TwotoneRounded: IconChartMediumTwotoneRounded,
  SolidRounded: IconChartMediumSolidRounded,
  BulkRounded: IconChartMediumBulkRounded,
  StrokeSharp: IconChartMediumStrokeSharp,
  SolidSharp: IconChartMediumSolidSharp,
};