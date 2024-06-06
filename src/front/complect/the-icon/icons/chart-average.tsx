import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M6 12H6.00898M8.9982 12H9.00718M11.9964 12H12.0054M14.9946 12H15.0036M17.9928 12H18.0018M20.991 12H21',
  d3: 'M6 7C6.67348 5.87847 7.58712 5 8.99282 5C14.9359 5 11.5954 17 17.9819 17C19.3976 17 20.3057 16.1157 21 15',
  d4: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d5: 'M5 12C5 11.4477 5.44772 11 6 11H6.00898C6.56126 11 7.00898 11.4477 7.00898 12C7.00898 12.5523 6.56126 13 6.00898 13H6C5.44772 13 5 12.5523 5 12ZM7.9982 12C7.9982 11.4477 8.44592 11 8.9982 11H9.00718C9.55947 11 10.0072 11.4477 10.0072 12C10.0072 12.5523 9.55947 13 9.00718 13H8.9982C8.44592 13 7.9982 12.5523 7.9982 12ZM10.9964 12C10.9964 11.4477 11.4441 11 11.9964 11H12.0054C12.5577 11 13.0054 11.4477 13.0054 12C13.0054 12.5523 12.5577 13 12.0054 13H11.9964C11.4441 13 10.9964 12.5523 10.9964 12ZM13.9946 12C13.9946 11.4477 14.4423 11 14.9946 11H15.0036C15.5559 11 16.0036 11.4477 16.0036 12C16.0036 12.5523 15.5559 13 15.0036 13H14.9946C14.4423 13 13.9946 12.5523 13.9946 12ZM16.9928 12C16.9928 11.4477 17.4405 11 17.9928 11H18.0018C18.5541 11 19.0018 11.4477 19.0018 12C19.0018 12.5523 18.5541 13 18.0018 13H17.9928C17.4405 13 16.9928 12.5523 16.9928 12ZM19.991 12C19.991 11.4477 20.4387 11 20.991 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20.991C20.4387 13 19.991 12.5523 19.991 12Z',
  d6: 'M8.99272 6C8.10213 6 7.45439 6.52034 6.85721 7.51481C6.57289 7.98829 5.95857 8.14163 5.4851 7.8573C5.01162 7.57298 4.85828 6.95866 5.1426 6.48519C5.89238 5.2366 7.07193 4 8.99272 4C9.91491 4 10.7103 4.23632 11.3798 4.68477C12.039 5.12624 12.5181 5.7341 12.8814 6.39092C13.5506 7.60053 13.9159 9.15747 14.2432 10.5529C14.2604 10.626 14.2774 10.6987 14.2944 10.7709C14.6559 12.3069 14.9935 13.6433 15.5753 14.6089C15.8544 15.0722 16.1677 15.4092 16.531 15.6335C16.8878 15.8538 17.3483 16 17.9818 16C18.8815 16 19.5259 15.4761 20.1509 14.4717C20.4427 14.0028 21.0593 13.8592 21.5282 14.151C21.9971 14.4427 22.1407 15.0594 21.8489 15.5283C21.0854 16.7554 19.9135 18 17.9818 18C17.0187 18 16.1865 17.7712 15.4804 17.3353C14.7807 16.9033 14.2608 16.3028 13.8622 15.6411C13.0884 14.3567 12.6922 12.6931 12.3476 11.2291C12.3417 11.204 12.3358 11.179 12.3299 11.1541C11.9725 9.63507 11.6631 8.32028 11.1314 7.35908C10.8724 6.8909 10.5875 6.56126 10.2669 6.34648C9.9566 6.13868 9.55631 6 8.99272 6Z',
  d7: 'M21 21H3V3',
  d8: 'M4.00049 19.5V2.5H2.00049V20.5C2.00049 21.0523 2.4482 21.5 3.00049 21.5H21.0005V19.5H4.00049Z',
  d9: 'M5.00049 10.5H7.00946V12.5H5.00049V10.5ZM7.99869 10.5H10.0077V12.5H7.99869V10.5ZM10.9969 10.5H13.0059V12.5H10.9969V10.5ZM13.9951 10.5H16.0041V12.5H13.9951V10.5ZM16.9933 10.5H19.0023V12.5H16.9933V10.5ZM19.9915 10.5H22.0005V12.5H19.9915V10.5Z',
  d10: 'M8.99319 5.5C8.10259 5.5 7.45485 6.02034 6.85767 7.01481L5.14307 5.98519C5.89284 4.7366 7.07239 3.5 8.99319 3.5C9.91537 3.5 10.7107 3.73632 11.3803 4.18477C12.0394 4.62624 12.5185 5.2341 12.8819 5.89092C13.5511 7.10053 13.9163 8.65747 14.2437 10.0529C14.2608 10.126 14.2779 10.1987 14.2949 10.2709C14.6564 11.8069 14.9939 13.1433 15.5757 14.1089C15.8549 14.5722 16.1682 14.9092 16.5315 15.1335C16.8883 15.3538 17.3487 15.5 17.9822 15.5C18.882 15.5 19.5263 14.9761 20.1513 13.9717L21.8494 15.0283C21.0859 16.2554 19.9139 17.5 17.9822 17.5C17.0191 17.5 16.1869 17.2712 15.4808 16.8353C14.7812 16.4033 14.2613 15.8028 13.8626 15.1411C13.0889 13.8567 12.6926 12.1931 12.3481 10.7291C12.3422 10.704 12.3363 10.679 12.3304 10.6541C11.973 9.13507 11.6636 7.82028 11.1319 6.85908C10.8728 6.3909 10.588 6.06126 10.2673 5.84648C9.95706 5.63868 9.55678 5.5 8.99319 5.5Z',
};

export const IconChartAverageStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-stroke-rounded IconChartAverageStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconChartAverageDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-duotone-rounded IconChartAverageDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconChartAverageTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-twotone-rounded IconChartAverageTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconChartAverageSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-solid-rounded IconChartAverageSolidRounded"
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

export const IconChartAverageBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-bulk-rounded IconChartAverageBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartAverageStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-stroke-sharp IconChartAverageStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
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

export const IconChartAverageSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-average-solid-sharp IconChartAverageSolidSharp"
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

export const iconPackOfChartAverage: TheIconSelfPack = {
  name: 'ChartAverage',
  StrokeRounded: IconChartAverageStrokeRounded,
  DuotoneRounded: IconChartAverageDuotoneRounded,
  TwotoneRounded: IconChartAverageTwotoneRounded,
  SolidRounded: IconChartAverageSolidRounded,
  BulkRounded: IconChartAverageBulkRounded,
  StrokeSharp: IconChartAverageStrokeSharp,
  SolidSharp: IconChartAverageSolidSharp,
};