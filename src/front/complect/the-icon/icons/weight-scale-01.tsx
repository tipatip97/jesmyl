import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z',
  d2: 'M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15',
  d3: 'M12 17L13 15',
  d4: 'M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z',
  d5: 'M14 8V5M10 8V5',
  d6: 'M4.25 15C4.25 10.7198 7.71979 7.25 12 7.25C16.2802 7.25 19.75 10.7198 19.75 15V18.8889C19.75 20.0451 19.5678 21.0796 18.8757 21.7989C18.1771 22.5247 17.1351 22.75 15.8889 22.75H8.11111C6.95489 22.75 5.9204 22.5678 5.20115 21.8757C4.47527 21.1771 4.25 20.1351 4.25 18.8889V15ZM12 11.75C10.2051 11.75 8.75 13.2051 8.75 15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15C7.25 12.3766 9.37665 10.25 12 10.25C14.6234 10.25 16.75 12.3766 16.75 15C16.75 15.4142 16.4142 15.75 16 15.75C15.5858 15.75 15.25 15.4142 15.25 15C15.25 13.2051 13.7949 11.75 12 11.75ZM13.671 15.3356C13.8562 14.9651 13.7061 14.5146 13.3356 14.3293C12.9651 14.1441 12.5146 14.2943 12.3293 14.6648L11.3293 16.6648C11.1441 17.0352 11.2943 17.4857 11.6648 17.671C12.0352 17.8562 12.4857 17.7061 12.671 17.3356L13.671 15.3356Z',
  d7: 'M18.7263 1.25C19.0377 1.24996 19.3327 1.24992 19.5676 1.27662C19.8014 1.3032 20.1642 1.37197 20.4352 1.67057C20.5592 1.80726 20.6527 1.97081 20.7063 2.15085C20.8271 2.55702 20.6735 2.90898 20.563 3.11537C20.4535 3.31992 20.1934 3.68867 20.0223 3.93101C19.6023 4.52742 19.2748 4.99249 18.7968 5.29516C18.6398 5.39455 18.4734 5.47864 18.3 5.54645C17.7767 5.75111 17.1987 5.75066 16.4382 5.75007H7.56224C6.80181 5.75066 6.22376 5.75111 5.70047 5.54645C5.52709 5.47864 5.36066 5.39455 5.20368 5.29516C4.72565 4.99249 4.39816 4.52744 3.97816 3.93103C3.80711 3.68868 3.54694 3.31992 3.43744 3.11537C3.32697 2.90898 3.17334 2.55703 3.29417 2.15085C3.34773 1.97081 3.44128 1.80726 3.56531 1.67057C3.83625 1.37197 4.19905 1.3032 4.43286 1.27662C4.66781 1.24992 4.96276 1.24996 5.27416 1.25H18.7263Z',
  d8: 'M10 4C10.5523 4 11 4.44772 11 5V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V5C9 4.44772 9.44772 4 10 4ZM14 4C14.5523 4 15 4.44772 15 5V8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8V5C13 4.44772 13.4477 4 14 4Z',
  d9: 'M4.25 15C4.25 10.7198 7.71979 7.25 12 7.25C16.2802 7.25 19.75 10.7198 19.75 15V18.8889C19.75 20.0451 19.5678 21.0796 18.8757 21.7989C18.1771 22.5247 17.1351 22.75 15.8889 22.75H8.11111C6.95489 22.75 5.9204 22.5678 5.20115 21.8757C4.47527 21.1771 4.25 20.1351 4.25 18.8889V15Z',
  d10: 'M12 11.75C10.2051 11.75 8.75 13.2051 8.75 15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15C7.25 12.3766 9.37665 10.25 12 10.25C14.6234 10.25 16.75 12.3766 16.75 15C16.75 15.4142 16.4142 15.75 16 15.75C15.5858 15.75 15.25 15.4142 15.25 15C15.25 13.2051 13.7949 11.75 12 11.75Z',
  d11: 'M13.3356 14.3293C13.7061 14.5146 13.8562 14.9651 13.671 15.3356L12.671 17.3356C12.4857 17.7061 12.0352 17.8562 11.6648 17.671C11.2943 17.4857 11.1441 17.0352 11.3293 16.6648L12.3293 14.6648C12.5146 14.2943 12.9651 14.1441 13.3356 14.3293Z',
  d12: 'M9 7.85201V5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V7.31392C10.2998 7.40413 9.62878 7.5878 9 7.85201ZM13 7.31392V5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5V7.85201C14.3712 7.5878 13.7002 7.40413 13 7.31392Z',
  d13: 'M19 8H5V22H19V8Z',
  d14: 'M20 2H4L6 5H18L20 2Z',
  d15: 'M16 16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16',
  d16: 'M3.33875 1.64611C3.46926 1.40224 3.7234 1.25 4 1.25H20C20.2766 1.25 20.5307 1.40224 20.6613 1.64611C20.7918 1.88997 20.7775 2.18588 20.624 2.41603L18.624 5.41603C18.4849 5.62467 18.2508 5.75 18 5.75H6C5.74924 5.75 5.51506 5.62467 5.37596 5.41603L3.37596 2.41603C3.22254 2.18588 3.20823 1.88997 3.33875 1.64611Z',
  d17: 'M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25L19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V22C19.75 22.4142 19.4142 22.75 19 22.75L5 22.75C4.58579 22.75 4.25 22.4142 4.25 22L4.25 8ZM12 12.75C10.2051 12.75 8.75 14.2051 8.75 16H7.25C7.25 13.3766 9.37665 11.25 12 11.25C14.6234 11.25 16.75 13.3766 16.75 16H15.25C15.25 14.2051 13.7949 12.75 12 12.75ZM12.6698 17.3354L13.6698 15.3354L12.3281 14.6646L11.3281 16.6646L12.6698 17.3354Z',
  d18: 'M11 5V8H9V5H11ZM15 5V8H13V5H15Z',
};

export const IconWeightScale01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-stroke-rounded IconWeightScale01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScale01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-duotone-rounded IconWeightScale01DuotoneRounded"
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
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScale01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-twotone-rounded IconWeightScale01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScale01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-solid-rounded IconWeightScale01SolidRounded"
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

export const IconWeightScale01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-bulk-rounded IconWeightScale01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScale01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-stroke-sharp IconWeightScale01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWeightScale01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="weight-scale-01-solid-sharp IconWeightScale01SolidSharp"
    >
      <path 
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

export const iconPackOfWeightScale01: TheIconSelfPack = {
  name: 'WeightScale01',
  StrokeRounded: IconWeightScale01StrokeRounded,
  DuotoneRounded: IconWeightScale01DuotoneRounded,
  TwotoneRounded: IconWeightScale01TwotoneRounded,
  SolidRounded: IconWeightScale01SolidRounded,
  BulkRounded: IconWeightScale01BulkRounded,
  StrokeSharp: IconWeightScale01StrokeSharp,
  SolidSharp: IconWeightScale01SolidSharp,
};