import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 6C5.08715 4.58055 5.32629 3.67665 5.98247 3.02513C7.01491 2 8.67661 2 12 2C15.3234 2 16.9851 2 18.0175 3.02513C18.6737 3.67665 18.9128 4.58055 19 6M19 18C18.9128 19.4194 18.6737 20.3233 18.0175 20.9749C16.9851 22 15.3234 22 12 22C8.67661 22 7.01491 22 5.98247 20.9749C5.32629 20.3233 5.08715 19.4194 5 18',
  d2: 'M11 19H13',
  d3: 'M17.5 9L19.0332 10.5858C19.6777 11.2525 20 11.5858 20 12C20 12.4142 19.6777 12.7475 19.0332 13.4142L17.5 15',
  d4: 'M6.5 9L4.96682 10.5858C4.32228 11.2525 4 11.5858 4 12C4 12.4142 4.32227 12.7475 4.96682 13.4142L6.5 15',
  d5: 'M6.02584 20.9749C7.05096 22 8.70088 22 12.0007 22C15.3005 22 16.9505 22 17.9756 20.9749C18.8915 20.059 18.9891 18.6444 18.9995 16V8C18.9891 5.35561 18.8915 3.94101 17.9756 3.02513C16.9505 2 15.3005 2 12.0007 2C8.70088 2 7.05096 2 6.02584 3.02513C5.10996 3.94101 5.01235 5.35561 5.00195 8V16C5.01235 18.6444 5.10996 20.059 6.02584 20.9749Z',
  d6: 'M11.9284 1H12.0717C13.6725 0.999971 14.974 0.999946 16.0002 1.13694C17.0697 1.27971 17.9889 1.58744 18.7222 2.31551C19.6545 3.24121 19.9081 4.47189 19.9982 5.93872C20.032 6.48996 19.6126 6.96428 19.0613 6.99812C18.5101 7.03197 18.0358 6.61253 18.0019 6.06129C17.9177 4.68922 17.693 4.1121 17.313 3.73475C17.0138 3.43769 16.5859 3.23286 15.7356 3.11935C14.8572 3.0021 13.6898 3 12 3C10.3103 3 9.14283 3.0021 8.26448 3.11935C7.41418 3.23286 6.98627 3.43769 6.68709 3.73475C6.30705 4.1121 6.0824 4.68922 5.99815 6.06129C5.96431 6.61253 5.49 7.03197 4.93875 6.99812C4.3875 6.96428 3.96807 6.48996 4.00191 5.93872C4.09197 4.47189 4.3456 3.24121 5.27792 2.31551C6.01118 1.58744 6.93034 1.27971 7.99984 1.13694C9.02603 0.999946 10.3276 0.999971 11.9284 1ZM19.0613 17.0019C19.6126 17.0357 20.032 17.51 19.9982 18.0613C19.9081 19.5281 19.6545 20.7588 18.7222 21.6845C17.9889 22.4126 17.0697 22.7203 16.0002 22.8631C14.974 23.0001 13.6725 23 12.0717 23H11.9284C10.3276 23 9.02603 23.0001 7.99984 22.8631C6.93034 22.7203 6.01118 22.4126 5.27792 21.6845C4.3456 20.7588 4.09197 19.5281 4.00191 18.0613C3.96807 17.51 4.3875 17.0357 4.93875 17.0019C5.49 16.968 5.96431 17.3875 5.99815 17.9387C6.0824 19.3108 6.30705 19.8879 6.68709 20.2653C6.98627 20.5623 7.41418 20.7671 8.26448 20.8807C9.14283 20.9979 10.3103 21 12 21C13.6898 21 14.8572 20.9979 15.7356 20.8807C16.5859 20.7671 17.0138 20.5623 17.313 20.2653C17.693 19.8879 17.9177 19.3108 18.0019 17.9387C18.0358 17.3875 18.5101 16.968 19.0613 17.0019Z',
  d7: 'M10 19C10 18.4477 10.4477 18 11 18H13C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19Z',
  d8: 'M16.8049 8.28107C16.4079 8.66495 16.3972 9.29803 16.7811 9.69508L18.3142 11.2809C18.6559 11.6343 18.8413 11.8291 18.9536 11.9812L18.9672 12L18.9536 12.0188C18.8413 12.1709 18.6559 12.3657 18.3142 12.7191L16.7811 14.3049C16.3972 14.702 16.4079 15.3351 16.8049 15.7189C17.202 16.1028 17.835 16.0921 18.2189 15.6951L19.7521 14.1093L19.7894 14.0708C20.0793 13.771 20.3616 13.4791 20.563 13.2061C20.7911 12.8969 21 12.5034 21 12C21 11.4966 20.7911 11.1031 20.563 10.7939C20.3616 10.5209 20.0793 10.229 19.7894 9.92926L19.7521 9.89071L18.2189 8.30492C17.835 7.90787 17.202 7.89719 16.8049 8.28107Z',
  d9: 'M7.19508 8.28107C7.59214 8.66495 7.60281 9.29803 7.21893 9.69508L5.68576 11.2809C5.34407 11.6343 5.15867 11.8291 5.04645 11.9812L5.03282 12L5.04645 12.0188C5.15867 12.1709 5.34407 12.3657 5.68576 12.7191L7.21893 14.3049C7.60281 14.702 7.59214 15.3351 7.19508 15.7189C6.79803 16.1028 6.16495 16.0921 5.78107 15.6951L4.24789 14.1093L4.21062 14.0708C3.92071 13.771 3.63839 13.4791 3.43697 13.2061C3.20894 12.8969 3 12.5034 3 12C3 11.4966 3.20894 11.1031 3.43697 10.7939C3.63839 10.5209 3.9207 10.229 4.21061 9.92926L4.24789 9.89071L5.78107 8.30492C6.16495 7.90787 6.79803 7.89719 7.19508 8.28107Z',
  d10: 'M5.00096 7L5.00107 2.00021L19 2L18.9985 7M5.00096 17L5 22H19.001L18.9985 17',
  d11: 'M10.5 19H13.5',
  d12: 'M17 9L20 12L17 15',
  d13: 'M7 9L4 12L7 15',
  d14: 'M5.22008 1.2502L18.7807 1.25C19.0377 1.25 19.2841 1.35299 19.4658 1.53632C19.6475 1.71965 19.7495 1.96829 19.7494 2.22752L19.748 7.09116L17.8106 7.09066L17.8118 3.20456L6.18877 3.20473L6.18868 7.09093L4.2513 7.09089L4.25141 2.22746C4.25142 1.68774 4.6851 1.25021 5.22008 1.2502ZM17.8126 20.7955L17.8106 16.9095L19.748 16.9087L19.7504 21.7723C19.7505 22.0316 19.6485 22.2803 19.4668 22.4636C19.2851 22.647 19.0387 22.75 18.7817 22.75H5.21906C4.96212 22.75 4.7157 22.647 4.53403 22.4637C4.35237 22.2804 4.25033 22.0318 4.25037 21.7726L4.2513 16.9089L6.18868 16.9092L6.1879 20.7955H17.8126Z',
  d15: 'M13.5004 19H10.5004V17H13.5004V19Z',
  d16: 'M5.00133 6.99951L5.00144 1.99972L19.0004 1.99951L18.9988 6.99951M5.00133 16.9995L5.00037 21.9995H19.0013L18.9988 16.9995',
  d17: 'M17.2926 8.29199L15.8784 9.70621L18.1713 11.9991L15.8784 14.292L17.2926 15.7062L20.9998 11.9991L17.2926 8.29199Z',
  d18: 'M6.70735 8.29248L8.12156 9.70669L5.82867 11.9996L8.12156 14.2925L6.70735 15.7067L3.00024 11.9996L6.70735 8.29248Z',
};

export const IconMobileProgramming02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-stroke-rounded IconMobileProgramming02StrokeRounded"
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

export const IconMobileProgramming02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-duotone-rounded IconMobileProgramming02DuotoneRounded"
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

export const IconMobileProgramming02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-twotone-rounded IconMobileProgramming02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-solid-rounded IconMobileProgramming02SolidRounded"
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

export const IconMobileProgramming02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-bulk-rounded IconMobileProgramming02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMobileProgramming02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-stroke-sharp IconMobileProgramming02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProgramming02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-programming-02-solid-sharp IconMobileProgramming02SolidSharp"
    >
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const iconPackOfMobileProgramming02: TheIconSelfPack = {
  name: 'MobileProgramming02',
  StrokeRounded: IconMobileProgramming02StrokeRounded,
  DuotoneRounded: IconMobileProgramming02DuotoneRounded,
  TwotoneRounded: IconMobileProgramming02TwotoneRounded,
  SolidRounded: IconMobileProgramming02SolidRounded,
  BulkRounded: IconMobileProgramming02BulkRounded,
  StrokeSharp: IconMobileProgramming02StrokeSharp,
  SolidSharp: IconMobileProgramming02SolidSharp,
};