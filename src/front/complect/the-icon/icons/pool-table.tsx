import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.35 17C4.0065 17 3.33475 17 2.91737 16.5607C2.5 16.1213 2.5 15.4142 2.5 14L2.5 6C2.5 4.58579 2.5 3.87868 2.91737 3.43934C3.33475 3 4.0065 3 5.35 3L18.65 3C19.9935 3 20.6653 3 21.0826 3.43934C21.5 3.87868 21.5 4.58579 21.5 6V14C21.5 15.4142 21.5 16.1213 21.0826 16.5607C20.6653 17 19.9935 17 18.65 17L5.35 17Z',
  d2: 'M12.0119 9H12',
  d3: 'M3 14C4.65685 14 6 15.3431 6 17M3 6C4.65685 6 6 4.65685 6 3',
  d4: 'M21 14C19.3431 14 18 15.3431 18 17M21 6C19.3431 6 18 4.65685 18 3',
  d5: 'M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17M14 3C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3',
  d6: 'M10.5 11.5L4 21',
  d7: 'M6 3C6 4.65685 4.65685 6 3 6L2.5 6C2.5 4.58579 2.5 3.87868 2.91737 3.43934C3.33475 3 4.0065 3 5.35 3L6.12794 3M21.5 14C21.5 15.4142 21.5 16.1213 21.0826 16.5607C20.6653 17 19.9935 17 18.65 17H17.9453H18C18 15.3431 19.3431 14 21 14H21.5ZM18.65 3C19.9935 3 20.6653 3 21.0826 3.43934C21.5 3.87868 21.5 4.58579 21.5 6L21 6C19.3431 6 18 4.65685 18 3L17.8706 3L18.65 3ZM2.5 14C2.5 15.4142 2.5 16.1213 2.91737 16.5607C3.33475 17 4.0065 17 5.35 17H6.04688V17C6.02099 17 6.00004 16.9788 5.99964 16.9529C5.97449 15.3178 4.64114 14 3 14L2.5 14Z',
  d8: 'M5.99964 16.9529C6.00004 16.9788 6.02095 17 6.04681 17L10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17H18C18 15.3431 19.3431 14 21 14H21.5V6L21 6C19.3431 6 18 4.65685 18 3H14C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3H6C6 4.65685 4.65685 6 3 6L2.5 6V14L3 14C4.64114 14 5.97449 15.3178 5.99964 16.9529Z',
  d9: 'M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17H14Z',
  d10: 'M14 3C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3H14Z',
  d11: 'M20.0735 4.04506C19.7718 4.00236 19.3515 4.00001 18.65 4.00001L5.35001 4.00001C4.64854 4.00001 4.22826 4.00236 3.92652 4.04506C3.78826 4.06463 3.71685 4.08792 3.68203 4.103C3.65542 4.11453 3.64861 4.12154 3.64238 4.1281C3.64235 4.12813 3.64248 4.12801 3.64238 4.1281C3.63839 4.13169 3.58227 4.18208 3.54412 4.4808C3.50193 4.81114 3.50001 5.26601 3.50001 6.00001L3.50001 14C3.50001 14.734 3.50193 15.1889 3.54412 15.5192C3.58227 15.8179 3.63818 15.8681 3.64217 15.8717C3.64214 15.8717 3.64228 15.8718 3.64217 15.8717C3.64841 15.8783 3.65542 15.8855 3.68203 15.897C3.71685 15.9121 3.78826 15.9354 3.92652 15.955C4.22826 15.9977 4.64854 16 5.35001 16L18.65 16C19.3515 16 19.7718 15.9977 20.0735 15.955C20.2118 15.9354 20.2832 15.9121 20.318 15.897C20.3446 15.8855 20.3514 15.8785 20.3576 15.8719C20.3575 15.872 20.3577 15.8719 20.3576 15.8719C20.3616 15.8683 20.4177 15.818 20.4559 15.5192C20.4981 15.1889 20.5 14.734 20.5 14V6.00001C20.5 5.26601 20.4981 4.81114 20.4559 4.4808C20.4177 4.18207 20.3618 4.13187 20.3578 4.12829C20.3577 4.12819 20.3579 4.12832 20.3578 4.12829C20.3516 4.12173 20.3446 4.11453 20.318 4.103C20.2832 4.08792 20.2118 4.06463 20.0735 4.04506ZM20.3537 2.06479C20.8624 2.13677 21.3846 2.30533 21.8076 2.7506C22.2238 3.18865 22.3746 3.71708 22.4398 4.22741C22.5001 4.69981 22.5001 5.28455 22.5 5.94067V14.0594C22.5001 14.7155 22.5001 15.3002 22.4398 15.7726C22.3746 16.2829 22.2238 16.8114 21.8076 17.2494C21.3846 17.6947 20.8624 17.8632 20.3537 17.9352C19.8949 18.0002 19.3304 18.0001 18.713 18L5.35001 18C5.32895 18 5.30795 18 5.28702 18C4.66957 18.0001 4.10507 18.0002 3.64627 17.9352C3.13766 17.8632 2.61539 17.6947 2.19238 17.2494C1.77624 16.8114 1.62542 16.2829 1.56024 15.7726C1.4999 15.3002 1.49995 14.7155 1.5 14.0594L1.50001 6.00001C1.50001 5.98015 1.5 5.96036 1.5 5.94063C1.49995 5.28453 1.4999 4.6998 1.56024 4.22741C1.62542 3.71708 1.77624 3.18865 2.19238 2.7506C2.61539 2.30533 3.13766 2.13677 3.64627 2.06479C4.10507 1.99986 4.66957 1.99993 5.28703 2.00001C5.30796 2.00001 5.32895 2.00001 5.35001 2.00001L18.713 2C19.3304 1.99993 19.8949 1.99986 20.3537 2.06479Z',
  d12: 'M11 9C11 8.44772 11.4477 8 12 8H12.0119C12.5642 8 13.0119 8.44772 13.0119 9C13.0119 9.55228 12.5642 10 12.0119 10H12C11.4477 10 11 9.55228 11 9Z',
  d13: 'M6.75 3C6.75 2.58579 6.41421 2.25 6 2.25C5.58579 2.25 5.25 2.58579 5.25 3C5.25 4.24264 4.24264 5.25 3 5.25C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75C5.07107 6.75 6.75 5.07107 6.75 3ZM18.75 3C18.75 2.58579 18.4142 2.25 18 2.25C17.5858 2.25 17.25 2.58579 17.25 3C17.25 5.07107 18.9289 6.75 21 6.75C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25C19.7574 5.25 18.75 4.24264 18.75 3ZM3 13.25C2.58579 13.25 2.25 13.5858 2.25 14C2.25 14.4142 2.58579 14.75 3 14.75C4.24264 14.75 5.25 15.7574 5.25 17C5.25 17.4142 5.58579 17.75 6 17.75C6.41421 17.75 6.75 17.4142 6.75 17C6.75 14.9289 5.07107 13.25 3 13.25ZM21 13.25C18.9289 13.25 17.25 14.9289 17.25 17C17.25 17.4142 17.5858 17.75 18 17.75C18.4142 17.75 18.75 17.4142 18.75 17C18.75 15.7574 19.7574 14.75 21 14.75C21.4142 14.75 21.75 14.4142 21.75 14C21.75 13.5858 21.4142 13.25 21 13.25ZM14.75 3.25C14.75 2.83579 14.4142 2.5 14 2.5C13.5858 2.5 13.25 2.83579 13.25 3.25C13.25 3.94036 12.6904 4.5 12 4.5C11.3096 4.5 10.75 3.94036 10.75 3.25C10.75 2.83579 10.4142 2.5 10 2.5C9.58579 2.5 9.25 2.83579 9.25 3.25C9.25 4.76878 10.4812 6 12 6C13.5188 6 14.75 4.76878 14.75 3.25ZM10.75 16.75C10.75 16.0596 11.3096 15.5 12 15.5C12.6904 15.5 13.25 16.0596 13.25 16.75C13.25 17.1642 13.5858 17.5 14 17.5C14.4142 17.5 14.75 17.1642 14.75 16.75C14.75 15.2312 13.5188 14 12 14C10.4812 14 9.25 15.2312 9.25 16.75C9.25 17.1642 9.58579 17.5 10 17.5C10.4142 17.5 10.75 17.1642 10.75 16.75Z',
  d14: 'M11.0647 10.6748C11.5205 10.9867 11.6371 11.609 11.3253 12.0648L4.82528 21.5648C4.51341 22.0206 3.89109 22.1373 3.43529 21.8254C2.97948 21.5135 2.8628 20.8912 3.17467 20.4354L9.67467 10.9354C9.98653 10.4796 10.6089 10.3629 11.0647 10.6748Z',
  d15: 'M22 3H2V17H22V3Z',
  d16: 'M2 14C3.65685 14 5 15.3431 5 17M2 6C3.65685 6 5 4.65685 5 3',
  d17: 'M22 14C20.3431 14 19 15.3431 19 17M22 6C20.3431 6 19 4.65685 19 3',
  d18: 'M5.22986 18H7.05815L4.61882 21.5L3.38086 20.653L5.22986 18Z',
  d19: 'M2 2.5C1.58579 2.5 1.25 2.83579 1.25 3.25V17.25C1.25 17.6642 1.58579 18 2 18H5.22986L9.88086 11.3267L11.1188 12.1737L7.05815 18H22C22.4142 18 22.75 17.6642 22.75 17.25V3.25C22.75 2.83579 22.4142 2.5 22 2.5H2ZM2.75 4V6.15549C3.80421 5.88415 4.63415 5.05421 4.90549 4H2.75ZM2.75 16.5H4.90549C4.63415 15.4458 3.80421 14.6158 2.75 14.3445V16.5ZM10.1454 16.5C10.4421 15.767 11.1607 15.25 12 15.25C12.8393 15.25 13.5579 15.767 13.8546 16.5H10.1454ZM21.25 16.5V14.3445C20.1958 14.6158 19.3658 15.4458 19.0945 16.5H21.25ZM19.0945 4H21.25V6.15549C20.1958 5.88415 19.3658 5.05421 19.0945 4ZM13.8546 4H10.1454C10.4421 4.73296 11.1607 5.25 12 5.25C12.8393 5.25 13.5579 4.73296 13.8546 4ZM12 8.25C11.4477 8.25 11 8.69772 11 9.25C11 9.80228 11.4477 10.25 12 10.25H12.0119C12.5642 10.25 13.0119 9.80228 13.0119 9.25C13.0119 8.69772 12.5642 8.25 12.0119 8.25H12Z',
};

export const IconPoolTableStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-stroke-rounded IconPoolTableStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTableDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-duotone-rounded IconPoolTableDuotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTableTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-twotone-rounded IconPoolTableTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTableSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-solid-rounded IconPoolTableSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTableBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-bulk-rounded IconPoolTableBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTableStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-stroke-sharp IconPoolTableStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconPoolTableSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-table-solid-sharp IconPoolTableSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPoolTable: TheIconSelfPack = {
  name: 'PoolTable',
  StrokeRounded: IconPoolTableStrokeRounded,
  DuotoneRounded: IconPoolTableDuotoneRounded,
  TwotoneRounded: IconPoolTableTwotoneRounded,
  SolidRounded: IconPoolTableSolidRounded,
  BulkRounded: IconPoolTableBulkRounded,
  StrokeSharp: IconPoolTableStrokeSharp,
  SolidSharp: IconPoolTableSolidSharp,
};