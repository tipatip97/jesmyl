import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.91872 4.43926C5.46116 3.73152 5.73238 3.37764 6.10315 3.18882C6.47393 3 6.89759 3 7.74491 3H10.1606C11.0277 3 11.4612 3 11.7306 3.29289C12 3.58579 12 4.05719 12 5V9H7.74491C6.89759 9 6.47393 9 6.10315 8.81118C5.73238 8.62236 5.46116 8.26848 4.91872 7.56074L4.70383 7.28037C4.23461 6.66816 4 6.36205 4 6C4 5.63795 4.23461 5.33184 4.70383 4.71963L4.91872 4.43926Z',
  d2: 'M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8H12V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.362 20 11C20 10.638 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z',
  d3: 'M12 21L12 4',
  d4: 'M9 21H15',
  d5: 'M4.91872 4.43926C5.46116 3.73152 5.73238 3.37764 6.10315 3.18882C6.47393 3 6.89759 3 7.74491 3L10.1606 3C11.0277 3 11.4612 3 11.7306 3.29289C12 3.58579 12 4.05719 12 5V9H7.74491C6.89759 9 6.47393 9 6.10315 8.81118C5.73238 8.62236 5.46116 8.26848 4.91872 7.56074L4.70383 7.28037C4.23461 6.66816 4 6.36205 4 6C4 5.63795 4.23461 5.33184 4.70383 4.71963L4.91872 4.43926Z',
  d6: 'M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8H12V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.3621 20 11C20 10.6379 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z',
  d7: 'M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8L12 8V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.362 20 11C20 10.638 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z',
  d8: 'M16.3892 7.25012C17.1028 7.24909 17.7021 7.24823 18.2372 7.52075C18.533 7.6714 18.764 7.87752 18.9801 8.11573C19.1832 8.33953 19.4027 8.626 19.6589 8.96029C19.8737 9.24049 20.329 9.83442 20.4696 10.072C20.6261 10.3366 20.75 10.6373 20.75 11.0003C20.75 11.3632 20.6261 11.6639 20.4696 11.9285C20.329 12.1661 19.8737 12.76 19.6589 13.0402C19.4027 13.3745 19.1832 13.661 18.9801 13.8848C18.764 14.123 18.533 14.3291 18.2372 14.4798C17.7021 14.7523 17.1028 14.7514 16.3891 14.7504L15 14.7503C14.5858 14.7503 14.25 14.4145 14.25 14.0003V8.00025C14.25 7.58604 14.5858 7.25025 15 7.25025L16.3892 7.25012Z',
  d9: 'M10.2067 2.00037L7.61085 2.00024C6.89723 1.99921 6.29793 1.99835 5.7628 2.27087C5.46698 2.42152 5.23601 2.62764 5.01987 2.86584C4.81681 3.08965 4.59726 3.37612 4.34107 3.7104C4.12626 3.99061 3.67099 4.58454 3.53044 4.82216C3.37392 5.08675 3.25 5.38739 3.25 5.75037C3.25 6.11335 3.37392 6.41399 3.53044 6.67859C3.67099 6.9162 3.87074 7.17676 4.08555 7.45696C4.34174 7.79124 4.81681 8.4111 5.01987 8.6349C5.23601 8.87311 5.46698 9.07923 5.7628 9.22988C6.29793 9.50239 6.89723 9.50153 7.61085 9.5005L11 9.5004L11 20.9738C11 21.5406 11.4478 22.0001 12 22.0001C12.5523 22.0001 13 21.5406 13 20.9738L13 3.27668C13 2.70986 12.5894 2.04487 11.2782 2.04487C11.2782 2.04487 10.6003 2.0003 10.2067 2.00037Z',
  d10: 'M8 21C8 20.4477 8.44772 20 9 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21Z',
  d11: 'M11.2044 2.00025L7.61085 2.00012C6.89723 1.99909 6.29793 1.99823 5.7628 2.27075C5.46698 2.4214 5.23601 2.62752 5.01987 2.86573C4.81681 3.08953 4.59726 3.376 4.34107 3.71028C4.12626 3.99049 3.67099 4.58442 3.53044 4.82204C3.37392 5.08663 3.25 5.38727 3.25 5.75025C3.25 6.11323 3.37392 6.41387 3.53044 6.67847C3.67099 6.91608 3.87074 7.17664 4.08555 7.45684C4.34174 7.79112 4.81681 8.41098 5.01987 8.63478C5.23601 8.87299 5.46698 9.07911 5.7628 9.22976C6.29793 9.50227 6.89723 9.50141 7.61085 9.50038L11.9977 9.50028V2.02828L11.2044 2.00025Z',
  d12: 'M11 20.9728C11 21.5396 11.4478 21.9991 12 21.9991C12.5523 21.9991 13 21.5396 13 20.9728L13 3.02734C13 2.47506 12.5523 2.02734 12 2.02734C11.4477 2.02734 11 2.47506 11 3.02735L11 20.9728Z',
  d13: 'M12.0049 21V3',
  d14: 'M9.00586 21H15.0026',
  d15: 'M17.9847 9.00324L12.0149 9.00293C12.0094 9.00293 12.0049 9.00741 12.0049 9.01293V15.0014C12.0049 15.0069 12.0094 15.0114 12.0149 15.0114H17.9847L20.0101 11.9999L17.9847 9.00324Z',
  d16: 'M6.02953 9.00328L11.9942 9.00359C11.9997 9.00359 12.0042 8.99911 12.0042 8.99359V3.00512C12.0042 2.99959 11.9997 2.99512 11.9942 2.99512H6.02953L4.00586 6.00662L6.02953 9.00328Z',
  d17: 'M11 9.75H5.5L3 6L5.5 2.25H13L13 19.75H15V21.75H9V19.75H11L11 9.75Z',
  d18: 'M14.5 15.75H18.5L21 12L18.5 8.25H14.5V15.75Z',
};

export const IconDirections01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-stroke-rounded IconDirections01StrokeRounded"
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

export const IconDirections01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-duotone-rounded IconDirections01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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

export const IconDirections01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-twotone-rounded IconDirections01TwotoneRounded"
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

export const IconDirections01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-solid-rounded IconDirections01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDirections01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-bulk-rounded IconDirections01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDirections01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-stroke-sharp IconDirections01StrokeSharp"
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
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDirections01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-01-solid-sharp IconDirections01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDirections01: TheIconSelfPack = {
  name: 'Directions01',
  StrokeRounded: IconDirections01StrokeRounded,
  DuotoneRounded: IconDirections01DuotoneRounded,
  TwotoneRounded: IconDirections01TwotoneRounded,
  SolidRounded: IconDirections01SolidRounded,
  BulkRounded: IconDirections01BulkRounded,
  StrokeSharp: IconDirections01StrokeSharp,
  SolidSharp: IconDirections01SolidSharp,
};