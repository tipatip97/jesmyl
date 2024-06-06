import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5V22M12 22H9M12 22H15',
  d2: 'M21 13L18.5 8L16 13',
  d3: 'M8 13L5.5 8L3 13',
  d4: 'M4 8H5.0482C6.31166 8 7.5375 7.471 8.5241 6.5C10.5562 4.5 13.4438 4.5 15.4759 6.5C16.4625 7.471 17.6883 8 18.9518 8H20',
  d5: 'M18.5 17C19.8547 17 21.0344 16.1663 21.6473 14.9349C21.978 14.2702 22.1434 13.9379 21.8415 13.469C21.5396 13 21.04 13 20.0407 13H16.9593C15.96 13 15.4604 13 15.1585 13.469C14.8566 13.9379 15.022 14.2702 15.3527 14.9349C15.9656 16.1663 17.1453 17 18.5 17Z',
  d6: 'M5.5 17C6.85471 17 8.03442 16.1663 8.64726 14.9349C8.97802 14.2702 9.14339 13.9379 8.84151 13.469C8.53962 13 8.04 13 7.04075 13H3.95925C2.96 13 2.46038 13 2.15849 13.469C1.85661 13.9379 2.02198 14.2702 2.35273 14.9349C2.96558 16.1663 4.14528 17 5.5 17Z',
  d7: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d8: 'M5.5 17C6.85471 17 8.03442 16.1663 8.64726 14.9349C8.97801 14.2702 9.14339 13.9379 8.84151 13.469C8.53962 13 8.04 13 7.04075 13H3.95925C2.96 13 2.46038 13 2.15849 13.469C1.85661 13.9379 2.02198 14.2702 2.35273 14.9349C2.96558 16.1663 4.14528 17 5.5 17Z',
  d9: 'M12 5V22',
  d10: 'M9 22H12H15',
  d11: 'M18.5002 7.25C18.7842 7.25 19.0439 7.4105 19.171 7.66459L21.671 12.6646C21.8562 13.0351 21.7061 13.4856 21.3356 13.6708C20.9651 13.8561 20.5146 13.7059 20.3293 13.3354L18.5002 9.67705L16.671 13.3354C16.4857 13.7059 16.0352 13.8561 15.6648 13.6708C15.2943 13.4856 15.1441 13.0351 15.3293 12.6646L17.8293 7.66459C17.9564 7.4105 18.2161 7.25 18.5002 7.25Z',
  d12: 'M5.50016 7.25C5.78424 7.25 6.04394 7.4105 6.17098 7.66459L8.67098 12.6646C8.85623 13.0351 8.70606 13.4856 8.33557 13.6708C7.96509 13.8561 7.51459 13.7059 7.32934 13.3354L5.50016 9.67705L3.67098 13.3354C3.48574 13.7059 3.03524 13.8561 2.66475 13.6708C2.29427 13.4856 2.1441 13.0351 2.32934 12.6646L4.82934 7.66459C4.95639 7.4105 5.21609 7.25 5.50016 7.25Z',
  d13: 'M16.8997 12.25L16.9592 12.25H20.0407L20.1003 12.25C20.5479 12.2499 20.9893 12.2497 21.3525 12.3238C21.795 12.414 22.1901 12.6249 22.4721 13.0631C22.721 13.4496 22.8028 13.8468 22.7171 14.2757C22.652 14.601 22.487 14.9316 22.3443 15.2177L22.3187 15.269C21.5983 16.7165 20.1801 17.75 18.5 17.75C16.8198 17.75 15.4016 16.7165 14.6813 15.269L14.6557 15.2177C14.5129 14.9316 14.348 14.601 14.2829 14.2757C14.1972 13.8468 14.279 13.4496 14.5278 13.0631C14.8099 12.6249 15.205 12.414 15.6475 12.3238C16.0107 12.2497 16.4521 12.2499 16.8997 12.25Z',
  d14: 'M3.89968 12.25L3.95924 12.25H7.04074L7.1003 12.25C7.54788 12.2499 7.98927 12.2497 8.35245 12.3238C8.79495 12.414 9.19008 12.6249 9.47214 13.0631C9.72098 13.4496 9.80283 13.8468 9.71705 14.2757C9.65199 14.601 9.48705 14.9316 9.3443 15.2177L9.3187 15.269C8.59834 16.7165 7.18013 17.75 5.49999 17.75C3.81985 17.75 2.40164 16.7165 1.68128 15.269L1.65568 15.2177C1.51293 14.9316 1.34799 14.601 1.28293 14.2757C1.19715 13.8468 1.279 13.4496 1.52785 13.0631C1.8099 12.6249 2.20503 12.414 2.64753 12.3238C3.01071 12.2497 3.45211 12.2499 3.89968 12.25Z',
  d15: 'M12 3C11.7239 3 11.5 3.22386 11.5 3.5C11.5 3.77614 11.7239 4 12 4C12.2761 4 12.5 3.77614 12.5 3.5C12.5 3.22386 12.2761 3 12 3ZM14.2954 4.49202C14.4271 4.1879 14.5 3.85247 14.5 3.5C14.5 2.11929 13.3807 1 12 1C10.6193 1 9.5 2.11929 9.5 3.5C9.5 3.85247 9.57294 4.1879 9.70455 4.49202C9.03517 4.78917 8.39811 5.22093 7.82265 5.78728C7.00349 6.59349 6.0229 7 5.0482 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H5.0482C6.60042 9 8.07152 8.3485 9.22555 7.21272C9.76484 6.68196 10.3709 6.32541 11 6.14309V21H9C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H15C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21H13V6.14309C13.6291 6.32541 14.2352 6.68195 14.7745 7.21272C15.9285 8.3485 17.3996 9 18.9518 9H20C20.5523 9 21 8.55228 21 8C21 7.44772 20.5523 7 20 7H18.9518C17.9771 7 16.9965 6.59349 16.1773 5.78728C15.6019 5.22092 14.9648 4.78917 14.2954 4.49202Z',
  d16: 'M19.1707 7.66459C19.0437 7.4105 18.784 7.25 18.4999 7.25C18.2158 7.25 17.9561 7.4105 17.8291 7.66459L15.479 12.3649C15.1051 12.4721 14.7736 12.6813 14.5278 13.0631C14.279 13.4496 14.1972 13.8468 14.2829 14.2757C14.348 14.601 14.5129 14.9316 14.6557 15.2177L14.6813 15.269C15.4016 16.7165 16.8198 17.75 18.5 17.75C20.1801 17.75 21.5983 16.7165 22.3187 15.269L22.3443 15.2177C22.487 14.9316 22.652 14.601 22.7171 14.2757C22.8028 13.8468 22.721 13.4496 22.4721 13.0631C22.2264 12.6813 21.8948 12.472 21.5209 12.3648L19.1707 7.66459ZM19.7864 12.25L18.4999 9.67705L17.2134 12.25H19.7864Z',
  d17: 'M6.17098 7.66459C6.04394 7.4105 5.78424 7.25 5.50016 7.25C5.21609 7.25 4.95639 7.4105 4.82934 7.66459L2.47924 12.3648C2.10524 12.472 1.77362 12.6812 1.52785 13.0631C1.279 13.4496 1.19715 13.8468 1.28293 14.2757C1.34799 14.601 1.51293 14.9316 1.65568 15.2177L1.68128 15.269C2.40164 16.7165 3.81985 17.75 5.49999 17.75C7.18013 17.75 8.59834 16.7165 9.3187 15.269L9.3443 15.2177C9.48705 14.9316 9.65199 14.601 9.71705 14.2757C9.80283 13.8468 9.72098 13.4496 9.47214 13.0631C9.22646 12.6814 8.89499 12.4722 8.52115 12.3649L6.17098 7.66459ZM6.78665 12.25L5.50016 9.67705L4.21368 12.25H6.78665Z',
  d18: 'M3 8H5.0482C6.31166 8 7.5375 7.471 8.5241 6.5C10.5562 4.5 13.4438 4.5 15.4759 6.5C16.4625 7.471 17.6883 8 18.9518 8H21',
  d19: 'M5.5 16.5C7.433 16.5 9 14.933 9 13H2C2 14.933 3.567 16.5 5.5 16.5Z',
  d20: 'M18.5 16.5C20.433 16.5 22 14.933 22 13H15C15 14.933 16.567 16.5 18.5 16.5Z',
  d21: 'M12 3C11.7239 3 11.5 3.22386 11.5 3.5C11.5 3.77614 11.7239 4 12 4C12.2761 4 12.5 3.77614 12.5 3.5C12.5 3.22386 12.2761 3 12 3ZM9.5 3.5C9.5 2.11929 10.6193 1 12 1C13.3807 1 14.5 2.11929 14.5 3.5C14.5 4.88071 13.3807 6 12 6C10.6193 6 9.5 4.88071 9.5 3.5Z',
  d22: 'M9.22555 7.46272C10.8685 5.84576 13.1315 5.84576 14.7745 7.46272C15.4419 8.11961 16.2154 8.61451 17.0493 8.91507L15.1055 12.8028L16.8943 13.6972L18.4999 10.4861L20.1055 13.6972L21.8943 12.8028L20.1179 9.25H21V7.25H18.9518C17.9771 7.25 16.9965 6.84349 16.1773 6.03728C13.756 3.65424 10.244 3.65424 7.82265 6.03728C7.00349 6.84349 6.0229 7.25 5.0482 7.25H3V9.25H3.88186L2.10547 12.8028L3.89432 13.6972L5.4999 10.4861L7.10547 13.6972L8.89432 12.8028L6.9505 8.91513C7.78448 8.61458 8.55805 8.11966 9.22555 7.46272Z',
  d23: 'M11 21V5H13V21H15V23H9V21H11Z',
  d24: 'M9.75 12.25V13C9.75 15.3472 7.84721 17.25 5.5 17.25C3.15279 17.25 1.25 15.3472 1.25 13V12.25H9.75Z',
  d25: 'M22.75 12.25V13C22.75 15.3472 20.8472 17.25 18.5 17.25C16.1528 17.25 14.25 15.3472 14.25 13V12.25H22.75Z',
};

export const IconJusticeScale01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-stroke-rounded IconJusticeScale01StrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-duotone-rounded IconJusticeScale01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-twotone-rounded IconJusticeScale01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-solid-rounded IconJusticeScale01SolidRounded"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-bulk-rounded IconJusticeScale01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJusticeScale01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-stroke-sharp IconJusticeScale01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
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

export const IconJusticeScale01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="justice-scale-01-solid-sharp IconJusticeScale01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJusticeScale01: TheIconSelfPack = {
  name: 'JusticeScale01',
  StrokeRounded: IconJusticeScale01StrokeRounded,
  DuotoneRounded: IconJusticeScale01DuotoneRounded,
  TwotoneRounded: IconJusticeScale01TwotoneRounded,
  SolidRounded: IconJusticeScale01SolidRounded,
  BulkRounded: IconJusticeScale01BulkRounded,
  StrokeSharp: IconJusticeScale01StrokeSharp,
  SolidSharp: IconJusticeScale01SolidSharp,
};