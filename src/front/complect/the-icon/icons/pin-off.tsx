import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.5 8C6.95863 8.1281 6.49932 8.14239 5.99268 8.45891C5.07234 9.03388 4.85108 9.71674 5.08821 10.7612C5.94028 14.5139 9.48599 18.0596 13.2388 18.9117C14.2834 19.1489 14.9661 18.928 15.5416 18.0077C15.8411 17.5288 15.8716 17.0081 16 16.5',
  d2: 'M12 7.79915C12.1776 7.77794 12.3182 7.74034 12.4295 7.68235C13.3997 7.17686 13.9291 5.53361 14.4498 4.60009C14.9311 3.73715 15.1718 3.30567 15.7379 3.10227C16.3041 2.89888 16.6448 3.02205 17.3262 3.26839C18.9197 3.8445 20.1555 5.08032 20.7316 6.6738C20.9779 7.35521 21.1011 7.69591 20.8977 8.26204C20.6943 8.82817 20.2628 9.06884 19.3999 9.55018C18.4608 10.074 16.7954 10.6108 16.2905 11.5898C16.2345 11.6983 16.1978 11.8327 16.1769 12',
  d3: 'M3 21L8 16',
  d4: 'M3 3L21 21',
  d5: 'M13.2388 18.9117C9.48599 18.0596 5.94028 14.5139 5.08821 10.7612C4.85108 9.71674 5.07234 9.03388 5.99268 8.45891C6.49932 8.14239 6.95863 8.1281 7.5 8L16 16.5C15.8716 17.0081 15.8411 17.5288 15.5416 18.0077C14.9661 18.928 14.2834 19.1489 13.2388 18.9117Z',
  d6: 'M8.95808 15.0429C9.34861 15.4334 9.34861 16.0666 8.95808 16.4571L3.95808 21.4571C3.56756 21.8476 2.93439 21.8476 2.54387 21.4571C2.15335 21.0666 2.15335 20.4334 2.54387 20.0429L7.54387 15.0429C7.93439 14.6524 8.56756 14.6524 8.95808 15.0429Z',
  d7: 'M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z',
  d8: 'M17.7103 2.55346C19.4579 3.18528 20.8156 4.54305 21.4475 6.29064C21.5545 6.58633 21.6808 6.93507 21.7268 7.24165C21.7811 7.60384 21.7449 7.94519 21.609 8.32365C21.3178 9.13408 20.6653 9.49626 19.9462 9.89542L18.5283 10.6861C18.0155 10.9721 17.6769 11.1618 17.4358 11.3286C17.201 11.4909 17.1343 11.582 17.1065 11.6358C17.0919 11.6641 17.0463 11.8022 17.0583 12.2506C17.0605 12.3335 17.0644 12.4223 17.0698 12.5176C17.096 12.9787 17.1091 13.2092 16.9834 13.2655C16.8576 13.3219 16.6968 13.161 16.3751 12.8394L11.1381 7.6024C10.8192 7.28348 10.6598 7.12402 10.7156 6.99846C10.7715 6.8729 10.9999 6.88481 11.4566 6.90862C11.5637 6.91421 11.6629 6.91806 11.755 6.91998C11.9689 6.92445 12.2401 6.94301 12.3812 6.86947C12.4336 6.84219 12.5245 6.7753 12.6874 6.53889C12.8543 6.29676 13.0447 5.95698 13.3312 5.44342L14.1055 4.05478C14.5047 3.33567 14.8669 2.68318 15.6773 2.39201C16.0558 2.25603 16.3971 2.2199 16.7593 2.27422C17.0659 2.32019 17.4146 2.44643 17.7103 2.55346Z',
  d9: 'M16.3512 17.9068C16.2228 18.1123 16.0613 18.3708 15.881 18.563C15.6679 18.7901 15.4224 18.9506 15.1063 19.0787C14.7845 19.2091 14.4917 19.2619 14.1757 19.2478C13.907 19.2358 13.5984 19.1656 13.3407 19.107C11.3651 18.6584 9.4793 17.5121 7.98403 16.0169C6.48875 14.5216 5.34249 12.6359 4.89391 10.6602C4.83533 10.4027 4.76515 10.0941 4.75318 9.82535C4.73911 9.50941 4.792 9.21658 4.92249 8.89474C5.05066 8.5786 5.21123 8.3331 5.43845 8.12006C5.63076 7.93974 5.8893 7.7784 6.09477 7.65019C6.35734 7.48615 6.6245 7.34694 6.89538 7.23077C7.00657 7.18309 7.06216 7.15925 7.1224 7.17084C7.18265 7.18244 7.22746 7.22725 7.31708 7.31687L16.6846 16.6843C16.7741 16.7738 16.8188 16.8186 16.8304 16.8788C16.842 16.939 16.8183 16.9945 16.7708 17.1055C16.655 17.3763 16.5157 17.6437 16.3512 17.9068Z',
  d10: 'M17.7097 2.55346C19.4573 3.18528 20.8151 4.54305 21.4469 6.29064C21.554 6.58633 21.6802 6.93507 21.7262 7.24165C21.7805 7.60384 21.7444 7.94519 21.6084 8.32365C21.3173 9.13408 20.6647 9.49626 19.9456 9.89542L18.5277 10.6861C18.0149 10.9721 17.6764 11.1618 17.4352 11.3286C17.2005 11.4909 17.1337 11.582 17.106 11.6358C17.0914 11.6641 17.0458 11.8022 17.0577 12.2506C17.0599 12.3335 17.0638 12.4223 17.0692 12.5176C17.0954 12.9787 17.1086 13.2092 16.9828 13.2655C16.8571 13.3219 16.6962 13.161 16.3746 12.8394L11.1376 7.6024C10.8187 7.28348 10.6592 7.12402 10.7151 6.99846C10.771 6.8729 10.9993 6.88481 11.4561 6.90862C11.5632 6.91421 11.6623 6.91806 11.7544 6.91998C11.9684 6.92445 12.2395 6.94301 12.3807 6.86947C12.4331 6.84219 12.5239 6.7753 12.6869 6.53889C12.8538 6.29676 13.0442 5.95698 13.3307 5.44342L14.105 4.05478C14.5042 3.33567 14.8663 2.68318 15.6768 2.39201C16.0552 2.25603 16.3966 2.2199 16.7587 2.27422C17.0653 2.32019 17.414 2.44643 17.7097 2.55346Z',
  d11: 'M15.881 18.563C16.0613 18.3708 16.2228 18.1123 16.3512 17.9069C16.5157 17.6437 16.655 17.3763 16.7708 17.1055C16.8183 16.9945 16.842 16.939 16.8304 16.8788C16.8188 16.8186 16.7741 16.7739 16.6846 16.6844L7.31708 7.31689C7.22746 7.22727 7.18265 7.18246 7.1224 7.17087C7.06216 7.15927 7.00657 7.18311 6.89538 7.2308C6.6245 7.34697 6.35734 7.48617 6.09477 7.65021C5.8893 7.77843 5.63076 7.93977 5.43845 8.12008C5.21123 8.33312 5.05066 8.57862 4.92249 8.89476C4.792 9.2166 4.73911 9.50943 4.75318 9.82537C4.76515 10.0941 4.83534 10.4027 4.89391 10.6602C5.27181 12.3246 6.14485 13.9251 7.30458 15.2822L2.54387 20.0429C2.15335 20.4334 2.15335 21.0666 2.54387 21.4571C2.93439 21.8476 3.56756 21.8476 3.95808 21.4571L8.7188 16.6964C10.0758 17.8561 11.6764 18.7291 13.3407 19.107C13.5984 19.1656 13.907 19.2358 14.1757 19.2478C14.4917 19.2619 14.7845 19.2091 15.1063 19.0787C15.4224 18.9507 15.6679 18.7902 15.881 18.563Z',
  d12: 'M2 2L22 22',
  d13: 'M3 21L9 15',
  d14: 'M16.2482 16.4221C15.8336 17.654 15.0241 18.5406 13.4051 20.0826L3.94531 10.5443L4.00173 10.4879C5.51448 8.975 6.40629 8.08312 7.62213 7.72178M16.2289 13.2164L16.0828 11.4257C17.6605 10.1584 19.462 9.78947 20.9376 8.61769C20.883 6.76229 20.1515 5.63028 19.233 4.74443C17.8184 3.38071 16.2118 3.09146 15.4909 3.06055C14.2133 4.73795 13.4678 7.17333 12.5992 7.91852L10.8081 7.76049',
  d15: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d16: 'M15.5196 2.26734L15.122 2.25L12.3143 7.08422C12.1577 7.07098 11.9574 7.05366 11.7238 7.03257C11.3632 7.00002 10.9239 6.95858 10.4438 6.90948L17.0903 13.556C17.0412 13.076 16.9998 12.6368 16.9672 12.2764C16.9462 12.0427 16.9288 11.8424 16.9156 11.6857L21.7495 8.87786L21.7321 8.48031C21.6574 6.76627 21.039 5.38891 19.825 4.17447C18.6107 2.96036 17.2335 2.34207 15.5196 2.26734Z',
  d17: 'M6.75966 7.22982C5.93726 7.61998 5.18937 8.24236 4.41372 9.0319L2.92188 10.5219L7.49326 15.0937L2.25 20.3369L3.66421 21.7511L8.90742 16.5079L13.4762 21.077L14.9652 19.5896L14.9676 19.5873C15.7577 18.8117 16.3802 18.0636 16.7703 17.2409C16.8218 17.1323 16.869 17.023 16.9118 16.913L7.08719 7.08845C6.97729 7.13122 6.86818 7.17834 6.75966 7.22982Z',
};

export const IconPinOffStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-stroke-rounded IconPinOffStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPinOffDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-duotone-rounded IconPinOffDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconPinOffTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-twotone-rounded IconPinOffTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPinOffSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-solid-rounded IconPinOffSolidRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinOffBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-bulk-rounded IconPinOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinOffStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-stroke-sharp IconPinOffStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconPinOffSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-off-solid-sharp IconPinOffSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPinOff: TheIconSelfPack = {
  name: 'PinOff',
  StrokeRounded: IconPinOffStrokeRounded,
  DuotoneRounded: IconPinOffDuotoneRounded,
  TwotoneRounded: IconPinOffTwotoneRounded,
  SolidRounded: IconPinOffSolidRounded,
  BulkRounded: IconPinOffBulkRounded,
  StrokeSharp: IconPinOffStrokeSharp,
  SolidSharp: IconPinOffSolidSharp,
};