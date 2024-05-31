import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 15.8278C17.9985 21.756 9.86407 23.4835 5.20143 18.8641C0.629484 14.3347 2.04493 6.12883 8.05653 3.5',
  d2: 'M17.6831 12.5C19.5708 12.5 20.5146 12.5 21.1241 11.655C21.1469 11.6234 21.1848 11.5667 21.2052 11.5336C21.7527 10.6471 21.4705 9.966 20.9063 8.60378C20.3946 7.36853 19.6447 6.24615 18.6993 5.30073C17.7538 4.35531 16.6315 3.60536 15.3962 3.0937C14.034 2.52946 13.3529 2.24733 12.4664 2.79477C12.4333 2.81523 12.3766 2.85309 12.345 2.87587C11.5 3.4854 11.5 4.42922 11.5 6.31686V8.42748C11.5 10.3473 11.5 11.3072 12.0964 11.9036C12.6928 12.5 13.6527 12.5 15.5725 12.5H17.6831Z',
  d3: 'M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 11.6584 21.482 11.3211 21.4468 10.9888C21.4001 11.1668 21.3213 11.3456 21.2052 11.5336C21.1848 11.5667 21.1469 11.6234 21.1241 11.655C20.5146 12.5 19.5708 12.5 17.6831 12.5H15.5725C13.6527 12.5 12.6928 12.5 12.0964 11.9036C11.5 11.3072 11.5 10.3473 11.5 8.42748V6.31686C11.5 4.42922 11.5 3.4854 12.345 2.87587C12.3766 2.85309 12.4333 2.81523 12.4664 2.79477C12.6544 2.67867 12.8332 2.59988 13.0112 2.55318C12.6789 2.51803 12.3416 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z',
  d4: 'M20.2033 14.647C21.0752 14.479 21.5111 14.395 21.6606 14.5463C21.6782 14.5641 21.6891 14.5772 21.7034 14.5977C21.8254 14.772 21.6974 15.1004 21.4414 15.7573C19.9607 19.5573 16.2657 22.25 11.9417 22.25C6.313 22.25 1.75 17.687 1.75 12.0582C1.75 7.73431 4.44269 4.03928 8.24269 2.55853C8.89947 2.30261 9.22786 2.17465 9.40211 2.29656C9.42264 2.31092 9.43574 2.32185 9.45357 2.33945C9.60489 2.48888 9.52088 2.9248 9.35287 3.79663C9.20681 4.55454 9.20711 5.44239 9.20739 6.24922C9.20757 6.77036 9.20752 7.2915 9.20747 7.81264C9.20744 8.06101 9.20742 8.30938 9.20742 8.55775L9.20741 8.63425C9.2073 9.48139 9.20719 10.3242 9.3015 11.0256C9.40887 11.8243 9.67386 12.7624 10.4557 13.5442C11.2375 14.326 12.1756 14.591 12.9743 14.6984C13.6754 14.7927 14.5177 14.7926 15.3643 14.7925C15.3903 14.7925 15.4162 14.7925 15.4421 14.7925L17.6603 14.7925C17.6903 14.7925 17.7203 14.7925 17.7505 14.7925C18.5574 14.7928 19.4453 14.7931 20.2033 14.647Z',
  d5: 'M15.683 2.40072L15.6184 2.37394C14.9931 2.11478 14.4112 1.8736 13.8718 1.78681C13.2432 1.68566 12.6691 1.78791 12.0721 2.15656C12.0237 2.18644 11.9521 2.23426 11.906 2.26753C11.2953 2.70804 11.0022 3.28368 10.8689 3.97508C10.7496 4.59427 10.7497 5.36328 10.7498 6.24867L10.7498 8.47956C10.7497 9.39501 10.7497 10.157 10.831 10.7617C10.9167 11.3993 11.1051 11.9731 11.5658 12.4339C12.0266 12.8946 12.6003 13.083 13.238 13.1687C13.8426 13.25 14.6046 13.25 15.5201 13.2499L17.751 13.2499C18.6364 13.25 19.4054 13.2501 20.0246 13.1308C20.716 12.9975 21.2916 12.7044 21.7322 12.0937C21.7654 12.0476 21.8133 11.976 21.8431 11.9276C22.2118 11.3306 22.314 10.7565 22.2129 10.1279C22.1261 9.58851 21.8849 9.0066 21.6258 8.38133L21.599 8.3167C21.0496 6.99045 20.2444 5.7854 19.2294 4.77033C18.2143 3.75527 17.0092 2.95007 15.683 2.40072Z',
  d6: 'M21.4718 12.5C21.671 9.85979 20.82 7.13848 18.7986 5.13585C16.7723 3.12841 14.0904 2.31961 11.5 2.5333V12.5H21.4718Z',
  d7: 'M11.4383 1.78579C14.2249 1.55592 17.1293 2.42626 19.3264 4.60301C21.5202 6.77639 22.4336 9.72085 22.2196 12.5564L22.1673 13.25H10.75V1.84257L11.4383 1.78579Z',
  d8: 'M9.25 2.12305C4.92455 3.32478 1.75 7.29164 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C16.7083 22.25 20.6752 19.0754 21.8769 14.7499H9.25V2.12305Z',
} as const;

export const IconPieChartStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-stroke-rounded IconPieChartStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPieChartDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-duotone-rounded IconPieChartDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconPieChartTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-twotone-rounded IconPieChartTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-solid-rounded IconPieChartSolidRounded"
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

export const IconPieChartBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-bulk-rounded IconPieChartBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPieChartStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-stroke-sharp IconPieChartStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconPieChartSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pie-chart-solid-sharp IconPieChartSolidSharp"
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

export const iconPackOfPieChart: TheIconSelfPack = {
  name: 'PieChart',
  StrokeRounded: IconPieChartStrokeRounded,
  DuotoneRounded: IconPieChartDuotoneRounded,
  TwotoneRounded: IconPieChartTwotoneRounded,
  SolidRounded: IconPieChartSolidRounded,
  BulkRounded: IconPieChartBulkRounded,
  StrokeSharp: IconPieChartStrokeSharp,
  SolidSharp: IconPieChartSolidSharp,
};