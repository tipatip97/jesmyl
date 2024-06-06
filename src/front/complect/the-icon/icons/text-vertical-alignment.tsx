import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 4L22 4',
  d2: 'M13 8L22 8',
  d3: 'M2 12H22',
  d4: 'M13 20L22 20',
  d5: 'M13 16L22 16',
  d6: 'M8 8.5L6.71429 5.5M6.71429 5.5L5.58623 2.86786C5.55491 2.7948 5.53926 2.75827 5.51945 2.72724C5.44354 2.60832 5.31395 2.527 5.16623 2.50559C5.12769 2.5 5.08512 2.5 5 2.5C4.91488 2.5 4.87231 2.5 4.83377 2.50559C4.68605 2.527 4.55646 2.60831 4.48055 2.72724C4.46074 2.75826 4.44509 2.7948 4.41377 2.86786L3.28571 5.5M6.71429 5.5L3.28571 5.5M3.28571 5.5L2 8.5',
  d7: 'M8 21.5L6.71429 18.5M6.71429 18.5L5.58623 15.8679C5.55491 15.7948 5.53926 15.7583 5.51945 15.7272C5.44354 15.6083 5.31395 15.527 5.16623 15.5056C5.12769 15.5 5.08512 15.5 5 15.5C4.91488 15.5 4.87231 15.5 4.83377 15.5056C4.68605 15.527 4.55646 15.6083 4.48055 15.7272C4.46074 15.7583 4.44509 15.7948 4.41377 15.8679L3.28571 18.5M6.71429 18.5L3.28571 18.5M3.28571 18.5L2 21.5',
  d8: 'M5.58567 15.8679L6.71373 18.5L3.28516 18.5L4.41321 15.8679C4.44453 15.7948 4.46018 15.7583 4.47999 15.7272C4.5559 15.6083 4.68549 15.527 4.83321 15.5056C4.87176 15.5 4.91432 15.5 4.99944 15.5C5.08457 15.5 5.12713 15.5 5.16567 15.5056C5.31339 15.527 5.44298 15.6083 5.51889 15.7272C5.5387 15.7583 5.55435 15.7948 5.58567 15.8679Z',
  d9: 'M5.58567 2.86786L6.71373 5.5L3.28516 5.5L4.41321 2.86786C4.44453 2.7948 4.46018 2.75826 4.47999 2.72724C4.5559 2.60831 4.68549 2.527 4.83321 2.50559C4.87176 2.5 4.91432 2.5 4.99944 2.5C5.08457 2.5 5.12713 2.5 5.16567 2.50559C5.31339 2.527 5.44298 2.60832 5.51889 2.72724C5.5387 2.75827 5.55435 2.7948 5.58567 2.86786Z',
  d10: 'M8 9L6.71429 6M6.71429 6L5.58623 3.36786C5.55491 3.2948 5.53926 3.25827 5.51945 3.22724C5.44354 3.10832 5.31395 3.027 5.16623 3.00559C5.12769 3 5.08512 3 5 3C4.91488 3 4.87231 3 4.83377 3.00559C4.68605 3.027 4.55646 3.10831 4.48055 3.22724C4.46074 3.25826 4.44509 3.2948 4.41377 3.36786L3.28571 6M6.71429 6L3.28571 6M3.28571 6L2 9',
  d11: 'M8 21L6.71429 18M6.71429 18L5.58623 15.3679C5.55491 15.2948 5.53926 15.2583 5.51945 15.2272C5.44354 15.1083 5.31395 15.027 5.16623 15.0056C5.12769 15 5.08512 15 5 15C4.91488 15 4.87231 15 4.83377 15.0056C4.68605 15.027 4.55646 15.1083 4.48055 15.2272C4.46074 15.2583 4.44509 15.2948 4.41377 15.3679L3.28571 18M6.71429 18L3.28571 18M3.28571 18L2 21',
  d12: 'M11.5 4C11.5 3.44772 11.9477 3 12.5 3L21.5 3C22.0523 3 22.5 3.44772 22.5 4C22.5 4.55229 22.0523 5 21.5 5L12.5 5C11.9477 5 11.5 4.55228 11.5 4Z',
  d13: 'M11.5 8C11.5 7.44772 11.9477 7 12.5 7L21.5 7C22.0523 7 22.5 7.44772 22.5 8C22.5 8.55229 22.0523 9 21.5 9L12.5 9C11.9477 9 11.5 8.55228 11.5 8Z',
  d14: 'M1.5 12C1.5 11.4477 1.94772 11 2.5 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12Z',
  d15: 'M11.5 20C11.5 19.4477 11.9477 19 12.5 19L21.5 19C22.0523 19 22.5 19.4477 22.5 20C22.5 20.5523 22.0523 21 21.5 21L12.5 21C11.9477 21 11.5 20.5523 11.5 20Z',
  d16: 'M11.5 16C11.5 15.4477 11.9477 15 12.5 15L21.5 15C22.0523 15 22.5 15.4477 22.5 16C22.5 16.5523 22.0523 17 21.5 17L12.5 17C11.9477 17 11.5 16.5523 11.5 16Z',
  d17: 'M5.5003 1.5C5.26201 1.5 4.98801 1.55952 4.73302 1.69075C4.46592 1.82822 4.16625 2.0742 3.99493 2.47394L1.58111 8.10608C1.36356 8.6137 1.5987 9.20158 2.10633 9.41914C2.61396 9.6367 3.20184 9.40155 3.4194 8.89393L4.03568 7.45597H5.48236C5.48833 7.45607 5.49431 7.45612 5.50031 7.45612H6.96491L7.58117 8.89408C7.79873 9.40171 8.38661 9.63686 8.89424 9.4193C9.40187 9.20175 9.63702 8.61387 9.41946 8.10624L7.00569 2.4741C6.66224 1.67271 5.89111 1.50654 5.52536 1.50031C5.51703 1.5001 5.50868 1.5 5.5003 1.5ZM5.50027 4.03864L4.89284 5.45597H5.50029C5.50628 5.45597 5.51226 5.45602 5.51822 5.45612H6.10777L5.50027 4.03864Z',
  d18: 'M5.5003 14.5C5.26201 14.5 4.98801 14.5595 4.73302 14.6908C4.46592 14.8282 4.16625 15.0742 3.99493 15.4739L1.58111 21.1061C1.36356 21.6137 1.5987 22.2016 2.10633 22.4191C2.61396 22.6367 3.20184 22.4016 3.4194 21.8939L4.03568 20.456H5.48236C5.48833 20.4561 5.49431 20.4561 5.50031 20.4561H6.96491L7.58117 21.8941C7.79873 22.4017 8.38661 22.6369 8.89424 22.4193C9.40187 22.2017 9.63702 21.6139 9.41946 21.1062L7.00569 15.4741C6.66224 14.6727 5.89111 14.5065 5.52536 14.5003C5.51703 14.5001 5.50868 14.5 5.5003 14.5ZM5.50027 17.0386L4.89284 18.456H5.50029C5.50628 18.456 5.51226 18.456 5.51822 18.4561H6.10777L5.50027 17.0386Z',
  d19: 'M8 9L5.5 2.5H4.5L2 9M3 7H7',
  d20: 'M8 22L5.5 15.5H4.5L2 22M3 20H7',
  d21: 'M12 3L23 3L23 5L12 5L12 3Z',
  d22: 'M12 7L23 7L23 9L12 9L12 7Z',
  d23: 'M1 11H23V13H1V11Z',
  d24: 'M12 19L23 19V21L12 21V19Z',
  d25: 'M12 15L23 15V17L12 17V15Z',
  d26: 'M3.74655 2H6.12014L8.86669 9.14102L7 9.85898L6.47732 8.5H3.38938L2.86669 9.85898L1 9.14102L3.74655 2ZM4.15861 6.5H5.70809L4.93335 4.48568L4.15861 6.5Z',
  d27: 'M3.81295 14.1411H6.18655L8.9331 21.2822L7.06641 22.0001L6.54372 20.6411H3.45578L2.9331 22.0001L1.06641 21.2822L3.81295 14.1411ZM4.22501 18.6411H5.77449L4.99975 16.6268L4.22501 18.6411Z',
};

export const IconTextVerticalAlignmentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-stroke-rounded IconTextVerticalAlignmentStrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-duotone-rounded IconTextVerticalAlignmentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-twotone-rounded IconTextVerticalAlignmentTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-solid-rounded IconTextVerticalAlignmentSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-bulk-rounded IconTextVerticalAlignmentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-stroke-sharp IconTextVerticalAlignmentStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVerticalAlignmentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-vertical-alignment-solid-sharp IconTextVerticalAlignmentSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextVerticalAlignment: TheIconSelfPack = {
  name: 'TextVerticalAlignment',
  StrokeRounded: IconTextVerticalAlignmentStrokeRounded,
  DuotoneRounded: IconTextVerticalAlignmentDuotoneRounded,
  TwotoneRounded: IconTextVerticalAlignmentTwotoneRounded,
  SolidRounded: IconTextVerticalAlignmentSolidRounded,
  BulkRounded: IconTextVerticalAlignmentBulkRounded,
  StrokeSharp: IconTextVerticalAlignmentStrokeSharp,
  SolidSharp: IconTextVerticalAlignmentSolidSharp,
};