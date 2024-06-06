import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z',
  d2: 'M10.125 15L10.125 9M12 9V7.5M12 16.5V15M10.125 12H13.875M13.875 12C14.4963 12 15 12.5037 15 13.125V13.875C15 14.4963 14.4963 15 13.875 15H9M13.875 12C14.4963 12 15 11.4963 15 10.875V10.125C15 9.50368 14.4963 9 13.875 9H9',
  d3: 'M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20',
  d4: 'M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4V2C7.25 1.58579 7.58579 1.25 8 1.25ZM12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V4C16.75 4.41421 16.4142 4.75 16 4.75C15.5858 4.75 15.25 4.41421 15.25 4V2C15.25 1.58579 15.5858 1.25 16 1.25ZM1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H4C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8ZM19.25 8C19.25 7.58579 19.5858 7.25 20 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8C22.75 8.41421 22.4142 8.75 22 8.75H20C19.5858 8.75 19.25 8.41421 19.25 8ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H4C4.41421 15.25 4.75 15.5858 4.75 16C4.75 16.4142 4.41421 16.75 4 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16ZM19.25 16C19.25 15.5858 19.5858 15.25 20 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H20C19.5858 16.75 19.25 16.4142 19.25 16ZM8 19.25C8.41421 19.25 8.75 19.5858 8.75 20V22C8.75 22.4142 8.41421 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22V20C7.25 19.5858 7.58579 19.25 8 19.25ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25ZM16 19.25C16.4142 19.25 16.75 19.5858 16.75 20V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22V20C15.25 19.5858 15.5858 19.25 16 19.25Z',
  d5: 'M12.0564 3.25H12.0564H12.0564C10.2187 3.24998 8.65019 3.24997 7.51098 3.40314C6.33856 3.56076 5.38961 3.89288 4.64124 4.64124C3.89288 5.38961 3.56076 6.33856 3.40314 7.51098C3.24997 8.65019 3.24998 10.2187 3.25 12.0564V12.0564V12.0564C3.24998 13.8942 3.24997 15.3498 3.40314 16.489C3.56076 17.6614 3.89288 18.6104 4.64124 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.2187 20.75 12.0564 20.75H12.0565C13.8942 20.75 15.3498 20.75 16.489 20.5969C17.6614 20.4392 18.6104 20.1071 19.3588 19.3588C20.1071 18.6104 20.4392 17.6614 20.5969 16.489C20.75 15.3498 20.75 13.8942 20.75 12.0565V12.0564C20.75 10.2187 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64124C18.6104 3.89288 17.6614 3.56076 16.489 3.40314C15.3498 3.24997 13.8942 3.24998 12.0564 3.25ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V8.25H9C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75H9.375L9.375 14.25H9C8.58579 14.25 8.25 14.5858 8.25 15C8.25 15.4142 8.58579 15.75 9 15.75H11.25V16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V15.75H13.875C14.9105 15.75 15.75 14.9105 15.75 13.875V13.125C15.75 12.7029 15.6105 12.3134 15.3751 12C15.6105 11.6866 15.75 11.2971 15.75 10.875V10.125C15.75 9.08947 14.9105 8.25 13.875 8.25H12.75V7.5ZM10.875 11.25V9.75H13.875C14.0821 9.75 14.25 9.91789 14.25 10.125V10.875C14.25 11.0821 14.0821 11.25 13.875 11.25H10.875ZM10.875 12.75H13.875C14.0821 12.75 14.25 12.9179 14.25 13.125V13.875C14.25 14.0821 14.0821 14.25 13.875 14.25H10.875V12.75Z',
  d6: 'M12.0564 3.25C13.8942 3.24998 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65019 20.75 10.2186 20.75 12.0564V12.0565C20.75 13.8942 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.8942 20.75 12.0565 20.75H12.0564C10.2186 20.75 8.65019 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24998 13.8942 3.25 12.0564V12.0564C3.24998 10.2187 3.24997 8.65019 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65019 3.24997 10.2187 3.24998 12.0564 3.25H12.0564Z',
  d7: 'M12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V8.25H13.875C14.9105 8.25 15.75 9.08947 15.75 10.125V10.875C15.75 11.2971 15.6105 11.6866 15.3751 12C15.6105 12.3134 15.75 12.7029 15.75 13.125V13.875C15.75 14.9105 14.9105 15.75 13.875 15.75H12.75V16.5C12.75 16.9142 12.4142 17.25 12 17.25C11.5858 17.25 11.25 16.9142 11.25 16.5V15.75H9C8.58579 15.75 8.25 15.4142 8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H9.375L9.375 9.75H9C8.58579 9.75 8.25 9.41421 8.25 9C8.25 8.58579 8.58579 8.25 9 8.25H11.25V7.5C11.25 7.08579 11.5858 6.75 12 6.75ZM10.875 9.75V11.25H13.875C14.0821 11.25 14.25 11.0821 14.25 10.875V10.125C14.25 9.91789 14.0821 9.75 13.875 9.75H10.875ZM13.875 12.75H10.875V14.25H13.875C14.0821 14.25 14.25 14.0821 14.25 13.875V13.125C14.25 12.9179 14.0821 12.75 13.875 12.75Z',
  d8: 'M8.75 2C8.75 1.58579 8.41421 1.25 8 1.25C7.58579 1.25 7.25 1.58579 7.25 2V3.4418C7.33573 3.42786 7.42272 3.415 7.51098 3.40314C7.88062 3.35344 8.29544 3.31987 8.75 3.29719V2Z',
  d9: 'M12.75 3.25032C12.5251 3.25 12.294 3.25 12.0564 3.25C11.7814 3.25 11.5124 3.25 11.25 3.25051V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.25032Z',
  d10: 'M16.75 3.4418C16.6643 3.42786 16.5773 3.415 16.489 3.40314C16.1116 3.35239 15.6993 3.31845 15.25 3.29577V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V3.4418Z',
  d11: 'M20.7028 8.75C20.6801 8.29544 20.6466 7.88062 20.5969 7.51098C20.585 7.42272 20.5721 7.33573 20.5582 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8C22.75 8.41421 22.4142 8.75 22 8.75H20.7028Z',
  d12: 'M20.7497 12.75C20.75 12.5251 20.75 12.294 20.75 12.0565C20.75 11.7814 20.75 11.5124 20.7495 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7497Z',
  d13: 'M20.5582 16.75C20.5721 16.6643 20.585 16.5773 20.5969 16.489C20.6476 16.1116 20.6815 15.6993 20.7042 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H20.5582Z',
  d14: 'M15.25 20.7042C15.6993 20.6815 16.1116 20.6476 16.489 20.5969C16.5773 20.585 16.6643 20.5721 16.75 20.5582V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22V20.7042Z',
  d15: 'M11.25 20.7495C11.5124 20.75 11.7814 20.75 12.0564 20.75C12.2939 20.75 12.5251 20.75 12.75 20.7497V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7495Z',
  d16: 'M7.25 20.5582C7.33573 20.5721 7.42272 20.585 7.51098 20.5969C7.88062 20.6466 8.29544 20.6801 8.75 20.7028V22C8.75 22.4142 8.41421 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22V20.5582Z',
  d17: 'M3.29577 15.25C3.31845 15.6993 3.35239 16.1116 3.40314 16.489C3.415 16.5773 3.42786 16.6643 3.4418 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H3.29577Z',
  d18: 'M3.25051 11.25C3.25 11.5124 3.25 11.7814 3.25 12.0564C3.25 12.2939 3.25 12.5251 3.25032 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.25051Z',
  d19: 'M3.4418 7.25C3.42786 7.33573 3.415 7.42272 3.40314 7.51098C3.35344 7.88062 3.31987 8.29544 3.29719 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.4418Z',
  d20: 'M4.00044 20.0002H20.0004V4.00024L4 4L4.00044 20.0002Z',
  d21: 'M4.00001 3.25C3.80109 3.25 3.61032 3.32902 3.46967 3.46967C3.32901 3.61033 3.24999 3.8011 3.25 4.00002L3.25044 20.0003C3.25045 20.4145 3.58623 20.7502 4.00044 20.7502H20.0004C20.4146 20.7502 20.7504 20.4145 20.7504 20.0002V4.00024C20.7504 3.58603 20.4147 3.25025 20.0004 3.25024L4.00001 3.25ZM12.75 8.25V6.75H11.25V8.25H8.25V9.75H9.375V14.25H8.25V15.75H11.25V17.25H12.75V15.75H13.875C14.9105 15.75 15.75 14.9105 15.75 13.875V13.125C15.75 12.7029 15.6105 12.3134 15.3751 12C15.6105 11.6866 15.75 11.2971 15.75 10.875V10.125C15.75 9.08947 14.9105 8.25 13.875 8.25H12.75ZM10.875 11.25V9.75H13.875C14.0821 9.75 14.25 9.91789 14.25 10.125V10.875C14.25 11.0821 14.0821 11.25 13.875 11.25H10.875ZM10.875 12.75H13.875C14.0821 12.75 14.25 12.9179 14.25 13.125V13.875C14.25 14.0821 14.0821 14.25 13.875 14.25H10.875V12.75Z',
  d22: 'M8.75 1.25V4.75H7.25V1.25H8.75ZM12.75 1.25V4.75H11.25V1.25H12.75ZM16.75 1.25V4.75H15.25V1.25H16.75ZM1.25 7.25H4.75V8.75H1.25V7.25ZM19.25 7.25H22.75V8.75H19.25V7.25ZM1.25 11.25H4.75V12.75H1.25V11.25ZM19.25 11.25H22.75V12.75H19.25V11.25ZM1.25 15.25H4.75V16.75H1.25V15.25ZM19.25 15.25H22.75V16.75H19.25V15.25ZM8.75 19.25V22.75H7.25V19.25H8.75ZM12.75 19.25V22.75H11.25V19.25H12.75ZM16.75 19.25V22.75H15.25V19.25H16.75Z',
};

export const IconBitcoinCpuStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-stroke-rounded IconBitcoinCpuStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinCpuDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-duotone-rounded IconBitcoinCpuDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinCpuTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-twotone-rounded IconBitcoinCpuTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinCpuSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-solid-rounded IconBitcoinCpuSolidRounded"
    >
      <path 
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

export const IconBitcoinCpuBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-bulk-rounded IconBitcoinCpuBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCpuStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-stroke-sharp IconBitcoinCpuStrokeSharp"
    >
      <path 
        d={d.d20} 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinCpuSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cpu-solid-sharp IconBitcoinCpuSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinCpu: TheIconSelfPack = {
  name: 'BitcoinCpu',
  StrokeRounded: IconBitcoinCpuStrokeRounded,
  DuotoneRounded: IconBitcoinCpuDuotoneRounded,
  TwotoneRounded: IconBitcoinCpuTwotoneRounded,
  SolidRounded: IconBitcoinCpuSolidRounded,
  BulkRounded: IconBitcoinCpuBulkRounded,
  StrokeSharp: IconBitcoinCpuStrokeSharp,
  SolidSharp: IconBitcoinCpuSolidSharp,
};