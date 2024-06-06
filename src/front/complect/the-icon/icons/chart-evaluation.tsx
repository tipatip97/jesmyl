import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M17.7048 9.33333L14.8311 13.9845C14.4123 14.6623 13.9369 15.686 13.0749 15.5344C12.0611 15.356 11.5742 13.8449 10.7026 13.3445C9.99285 12.9371 9.47971 13.4281 9.06475 14M21 4L19.1465 7M5 20L7.52632 16.2667',
  d3: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.19893 18.3 4.32359 18.6849 4.49359 18.964L6.69812 15.7062C7.00764 15.2488 7.62935 15.1289 8.08675 15.4385C8.54415 15.748 8.66404 16.3697 8.35452 16.8271L6.28851 19.8802L6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2ZM21.5256 3.14928C21.9955 3.43957 22.141 4.05578 21.8507 4.52562L19.9972 7.52562C19.7069 7.99546 19.0907 8.14101 18.6208 7.85072C18.151 7.56043 18.0054 6.94422 18.2957 6.47438L20.1493 3.47438C20.4396 3.00454 21.0558 2.85899 21.5256 3.14928ZM18.2304 8.48261C18.7003 8.7729 18.8458 9.38911 18.5555 9.85895L15.6818 14.5102C15.6508 14.5603 15.6137 14.6233 15.5714 14.6951C15.4036 14.9798 15.1537 15.4038 14.8747 15.7256C14.4963 16.162 13.838 16.684 12.9016 16.5192C11.9639 16.3543 11.374 15.5986 11.0441 15.1716C10.9785 15.0866 10.9199 15.0093 10.8655 14.9374C10.7484 14.7828 10.6499 14.6527 10.5391 14.5234C10.3852 14.3438 10.279 14.2547 10.2059 14.2125C10.1828 14.23 10.151 14.2572 10.1105 14.2985C10.0401 14.3705 9.96237 14.4657 9.87412 14.5873C9.54977 15.0343 8.92446 15.1337 8.47746 14.8094C8.03045 14.485 7.93103 13.8597 8.25538 13.4127C8.47698 13.1073 8.82045 12.6796 9.30278 12.4225C9.87464 12.1178 10.5462 12.1017 11.2005 12.4773C11.5632 12.6855 11.8444 12.973 12.0578 13.2221C12.2101 13.3998 12.3662 13.6058 12.4981 13.78C12.5444 13.841 12.5877 13.8982 12.6268 13.9488C12.9807 14.4069 13.1448 14.5191 13.228 14.5446C13.2522 14.5282 13.2978 14.4913 13.3637 14.4153C13.4513 14.3142 13.5442 14.1801 13.6509 14.0076C13.7034 13.9229 13.7549 13.8361 13.8101 13.7428L13.8178 13.7297C13.869 13.6431 13.9247 13.5489 13.9803 13.4589L16.8541 8.80772C17.1444 8.33788 17.7606 8.19232 18.2304 8.48261Z',
  d4: 'M21.5257 3.14917C21.9955 3.43946 22.1411 4.05567 21.8508 4.52551L20.1757 7.23674C19.8854 7.70658 19.2692 7.85214 18.7993 7.56185C18.3295 7.27156 18.1839 6.65535 18.4742 6.18551L20.1494 3.47428C20.4396 3.00444 21.0559 2.85888 21.5257 3.14917ZM18.2305 8.48251C18.7003 8.7728 18.8459 9.389 18.5556 9.85885L15.6819 14.5101C15.5279 14.7593 15.2242 15.3226 14.8748 15.7255C14.4964 16.1619 13.8381 16.6839 12.9017 16.5191C11.964 16.3542 11.374 15.5984 11.0442 15.1715C10.8375 14.904 10.7015 14.7128 10.5391 14.5232C10.4185 14.3825 10.2727 14.1328 10.1106 14.2984C10.0402 14.3704 9.96245 14.4656 9.8742 14.5872C9.54984 15.0342 8.92454 15.1336 8.47753 14.8093C8.03053 14.4849 7.9311 13.8596 8.25546 13.4126C8.47706 13.1072 8.82053 12.6795 9.30285 12.4224C9.87471 12.1176 10.5462 12.1016 11.2006 12.4772C11.5633 12.6854 11.8445 12.9729 12.0579 13.222C12.2102 13.3997 12.3663 13.6057 12.4982 13.7799C12.6695 14.006 13.0507 14.7763 13.3638 14.4152C13.6119 14.1291 13.7824 13.7793 13.9804 13.4588L16.8542 8.80761C17.1445 8.33777 17.7607 8.19222 18.2305 8.48251ZM8.08132 15.6862C8.53073 16.0072 8.63482 16.6317 8.31381 17.0811L5.81381 20.5811C5.4928 21.0305 4.86825 21.1346 4.41884 20.8136C3.96943 20.4926 3.86534 19.8681 4.18634 19.4187L6.68634 15.9187C7.00735 15.4692 7.6319 15.3652 8.08132 15.6862Z',
  d5: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d6: 'M21 21H3V3',
  d7: 'M16.7049 9.33333L12.5 15.5L9.00005 13L7.75005 14.75M20 4L18.1465 7M3.49927 20.5L6.00005 17.2',
  d8: 'M5.63283 19.5H21.5V21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V2.5H4.5V17.6835L5.703 16.096L7.297 17.304L5.63283 19.5ZM21.3507 4.02562L19.4972 7.02562L17.7957 5.97438L19.6493 2.97438L21.3507 4.02562ZM18.031 9.39669L13.2504 16.4078L9.7325 13.895L9.06373 14.8312L7.43627 13.6688L9.2675 11.105L12.7496 13.5922L16.3786 8.26997L18.031 9.39669Z',
};

export const IconChartEvaluationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-stroke-rounded IconChartEvaluationStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChartEvaluationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-duotone-rounded IconChartEvaluationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconChartEvaluationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-twotone-rounded IconChartEvaluationTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconChartEvaluationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-solid-rounded IconChartEvaluationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartEvaluationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-bulk-rounded IconChartEvaluationBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconChartEvaluationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-stroke-sharp IconChartEvaluationStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartEvaluationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-evaluation-solid-sharp IconChartEvaluationSolidSharp"
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

export const iconPackOfChartEvaluation: TheIconSelfPack = {
  name: 'ChartEvaluation',
  StrokeRounded: IconChartEvaluationStrokeRounded,
  DuotoneRounded: IconChartEvaluationDuotoneRounded,
  TwotoneRounded: IconChartEvaluationTwotoneRounded,
  SolidRounded: IconChartEvaluationSolidRounded,
  BulkRounded: IconChartEvaluationBulkRounded,
  StrokeSharp: IconChartEvaluationStrokeSharp,
  SolidSharp: IconChartEvaluationSolidSharp,
};