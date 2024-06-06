import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 14L9.07143 8.5M9.07143 8.5L7.37934 3.67442C7.33237 3.54046 7.30888 3.47349 7.27917 3.4166C7.16531 3.19858 6.97093 3.0495 6.74934 3.01024C6.69153 3 6.62769 3 6.5 3C6.37231 3 6.30847 3 6.25066 3.01024C6.02907 3.0495 5.83469 3.19858 5.72083 3.4166C5.69112 3.47349 5.66763 3.54046 5.62066 3.67442L3.92857 8.5M9.07143 8.5L3.92857 8.5M3.92857 8.5L2 14',
  d2: 'M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M20 19H22M16 19H8M8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19M4 19H2',
  d3: 'M15 8.5V5C15 4.05719 15 3.58579 15.2929 3.29289C15.5858 3 16.0572 3 17 3H18.25C19.7688 3 21 4.23122 21 5.75C21 7.26878 19.7688 8.5 18.25 8.5H15ZM15 8.5H19.25C20.7688 8.5 22 9.73122 22 11.25C22 12.7688 20.7688 14 19.25 14H17C16.0572 14 15.5858 14 15.2929 13.7071C15 13.4142 15 12.9428 15 12V8.5Z',
  d4: 'M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19C16 17.8954 16.8954 17 18 17C19.1046 17 20 17.8954 20 19Z',
  d5: 'M8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17C7.10457 17 8 17.8954 8 19Z',
  d6: 'M6.50028 2.12515L6.47308 2.12508C6.37904 2.12475 6.22619 2.1242 6.07648 2.15072C5.51825 2.24961 5.07678 2.61531 4.83471 3.07881C4.76987 3.20296 4.72276 3.33815 4.68738 3.4397L1.05661 13.7943C0.873856 14.3154 1.1482 14.8861 1.66938 15.0688C2.19055 15.2516 2.76119 14.9772 2.94394 14.456L4.63789 9.62515L8.36265 9.62515L10.0566 14.456C10.2394 14.9772 10.81 15.2516 11.3312 15.0688C11.8523 14.8861 12.1267 14.3154 11.9439 13.7943L8.31316 3.4397C8.27778 3.33816 8.23068 3.20296 8.16584 3.07881C7.92376 2.61531 7.48227 2.24961 6.92405 2.15072C6.77435 2.1242 6.62151 2.12475 6.52747 2.12508L6.50028 2.12515ZM5.33984 7.6252L6.50093 4.31396L7.66201 7.6252H5.33984Z',
  d7: 'M2 20.125H3.43747C3.8375 21.1493 4.83401 21.875 6 21.875C7.16599 21.875 8.1625 21.1493 8.56253 20.125H15.4375C15.8375 21.1493 16.834 21.875 18 21.875C19.166 21.875 20.1625 21.1493 20.5625 20.125H22C22.5523 20.125 23 19.6773 23 19.125C23 18.5727 22.5523 18.125 22 18.125H20.5625C20.1625 17.1007 19.166 16.375 18 16.375C16.834 16.375 15.8375 17.1007 15.4375 18.125H8.56253C8.1625 17.1007 7.16599 16.375 6 16.375C4.83401 16.375 3.8375 17.1007 3.43747 18.125H2C1.44772 18.125 1 18.5727 1 19.125C1 19.6773 1.44772 20.125 2 20.125Z',
  d8: 'M16.9456 2.12501C16.9637 2.12501 16.9819 2.12501 17 2.12501H18.25C20.3211 2.12501 22 3.80395 22 5.87501C22 6.74293 21.7052 7.54199 21.2102 8.17747C22.2839 8.8371 23 10.0224 23 11.375C23 13.4461 21.3211 15.125 19.25 15.125H17C16.9819 15.125 16.9637 15.125 16.9456 15.125C16.5215 15.1251 16.1094 15.1252 15.7695 15.0795C15.3863 15.028 14.949 14.9024 14.5858 14.5392C14.2226 14.176 14.0971 13.7387 14.0455 13.3555C13.9998 13.0156 13.9999 12.6035 14 12.1794C14 12.1613 14 12.1432 14 12.125V5.12501C14 5.10686 14 5.08872 14 5.07061C13.9999 4.64654 13.9998 4.23441 14.0455 3.89449C14.0971 3.51129 14.2226 3.07402 14.5858 2.7108C14.949 2.34759 15.3863 2.22206 15.7695 2.17054C16.1094 2.12484 16.5215 2.12492 16.9456 2.12501ZM16 9.62501V12.125C16 12.6247 16.0021 12.8988 16.0277 13.089C16.028 13.0915 16.0284 13.0939 16.0287 13.0963C16.0311 13.0967 16.0335 13.097 16.036 13.0973C16.2262 13.1229 16.5003 13.125 17 13.125H19.25C20.2165 13.125 21 12.3415 21 11.375C21 10.4085 20.2165 9.62501 19.25 9.62501H16ZM16 7.62501H18.25C19.2165 7.62501 20 6.84151 20 5.87501C20 4.90852 19.2165 4.12501 18.25 4.12501H17C16.5003 4.12501 16.2262 4.12714 16.036 4.15271C16.0335 4.15304 16.0311 4.15337 16.0287 4.15371C16.0284 4.15608 16.028 4.15851 16.0277 4.16099C16.0021 4.35118 16 4.62534 16 5.12501V7.62501Z',
  d9: 'M11 14L7 3H6L2 14M4 10H9',
  d10: 'M15 8.5V3H18.25C19.7688 3 21 4.23122 21 5.75C21 7.26878 19.7688 8.5 18.25 8.5H15ZM15 8.5H19.25C20.7688 8.5 22 9.73122 22 11.25C22 12.7688 20.7688 14 19.25 14H15V8.5Z',
  d11: 'M5.58111 2H7.98196L12.5631 14.5981L10.6835 15.2815L9.12656 11H4.43651L2.87959 15.2815L1 14.598L5.58111 2ZM5.16378 9H8.39929L6.78154 4.55118L5.16378 9Z',
  d12: 'M3.43747 20.25H1V18.25H3.43747C3.8375 17.2257 4.83401 16.5 6 16.5C7.16599 16.5 8.1625 17.2257 8.56253 18.25H15.4375C15.8375 17.2257 16.834 16.5 18 16.5C19.166 16.5 20.1625 17.2257 20.5625 18.25H23V20.25H20.5625C20.1625 21.2743 19.166 22 18 22C16.834 22 15.8375 21.2743 15.4375 20.25H8.56253C8.1625 21.2743 7.16599 22 6 22C4.83401 22 3.8375 21.2743 3.43747 20.25Z',
  d13: 'M14 3C14 2.44772 14.4477 2 15 2H18.25C20.3211 2 22 3.67893 22 5.75C22 6.61792 21.7051 7.41697 21.2101 8.05245C22.2839 8.71209 23 9.89742 23 11.25C23 13.3211 21.3211 15 19.25 15H15C14.4477 15 14 14.5523 14 14V3ZM16 9.5V13H19.25C20.2165 13 21 12.2165 21 11.25C21 10.2835 20.2165 9.5 19.25 9.5H16ZM16 7.5H18.25C19.2165 7.5 20 6.7165 20 5.75C20 4.7835 19.2165 4 18.25 4H16V7.5Z',
};

export const IconSegmentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-stroke-rounded IconSegmentStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSegmentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-duotone-rounded IconSegmentDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconSegmentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-twotone-rounded IconSegmentTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSegmentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-solid-rounded IconSegmentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconSegmentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-bulk-rounded IconSegmentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSegmentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-stroke-sharp IconSegmentStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconSegmentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="segment-solid-sharp IconSegmentSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSegment: TheIconSelfPack = {
  name: 'Segment',
  StrokeRounded: IconSegmentStrokeRounded,
  DuotoneRounded: IconSegmentDuotoneRounded,
  TwotoneRounded: IconSegmentTwotoneRounded,
  SolidRounded: IconSegmentSolidRounded,
  BulkRounded: IconSegmentBulkRounded,
  StrokeSharp: IconSegmentStrokeSharp,
  SolidSharp: IconSegmentSolidSharp,
};