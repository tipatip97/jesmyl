import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 11L4 21',
  d2: 'M19 13L19 21',
  d3: 'M19 3L19 7',
  d4: 'M11.5 3L11.5 13',
  d5: 'M4 3L4 5',
  d6: 'M11.5 19L11.5 21',
  d7: 'M2 9.5C2 9.03406 2 8.80109 2.07612 8.61732C2.17761 8.37229 2.37229 8.17761 2.61732 8.07612C2.80109 8 3.03406 8 3.5 8H4.5C4.96594 8 5.19891 8 5.38268 8.07612C5.62771 8.17761 5.82239 8.37229 5.92388 8.61732C6 8.80109 6 9.03406 6 9.5C6 9.96594 6 10.1989 5.92388 10.3827C5.82239 10.6277 5.62771 10.8224 5.38268 10.9239C5.19891 11 4.96594 11 4.5 11H3.5C3.03406 11 2.80109 11 2.61732 10.9239C2.37229 10.8224 2.17761 10.6277 2.07612 10.3827C2 10.1989 2 9.96594 2 9.5Z',
  d8: 'M17 11.5C17 11.0341 17 10.8011 17.0761 10.6173C17.1776 10.3723 17.3723 10.1776 17.6173 10.0761C17.8011 10 18.0341 10 18.5 10H19.5C19.9659 10 20.1989 10 20.3827 10.0761C20.6277 10.1776 20.8224 10.3723 20.9239 10.6173C21 10.8011 21 11.0341 21 11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13H18.5C18.0341 13 17.8011 13 17.6173 12.9239C17.3723 12.8224 17.1776 12.6277 17.0761 12.3827C17 12.1989 17 11.9659 17 11.5Z',
  d9: 'M9.5 14.5C9.5 14.0341 9.5 13.8011 9.57612 13.6173C9.67761 13.3723 9.87229 13.1776 10.1173 13.0761C10.3011 13 10.5341 13 11 13H12C12.4659 13 12.6989 13 12.8827 13.0761C13.1277 13.1776 13.3224 13.3723 13.4239 13.6173C13.5 13.8011 13.5 14.0341 13.5 14.5C13.5 14.9659 13.5 15.1989 13.4239 15.3827C13.3224 15.6277 13.1277 15.8224 12.8827 15.9239C12.6989 16 12.4659 16 12 16H11C10.5341 16 10.3011 16 10.1173 15.9239C9.87229 15.8224 9.67761 15.6277 9.57612 15.3827C9.5 15.1989 9.5 14.9659 9.5 14.5Z',
  d10: 'M4 10C4.55228 10 5 10.4477 5 11L5 21C5 21.5523 4.55229 22 4 22C3.44772 22 3 21.5523 3 21L3 11C3 10.4477 3.44772 10 4 10Z',
  d11: 'M19 12C19.5523 12 20 12.4477 20 13L20 21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21L18 13C18 12.4477 18.4477 12 19 12Z',
  d12: 'M19 2C19.5523 2 20 2.44772 20 3L20 7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7L18 3C18 2.44772 18.4477 2 19 2Z',
  d13: 'M11.5 2C12.0523 2 12.5 2.44772 12.5 3L12.5 13C12.5 13.5523 12.0523 14 11.5 14C10.9477 14 10.5 13.5523 10.5 13L10.5 3C10.5 2.44772 10.9477 2 11.5 2Z',
  d14: 'M4 2C4.55228 2 5 2.44772 5 3L5 5C5 5.55228 4.55229 6 4 6C3.44772 6 3 5.55228 3 5L3 3C3 2.44772 3.44772 2 4 2Z',
  d15: 'M11.5 18C12.0523 18 12.5 18.4477 12.5 19L12.5 21C12.5 21.5523 12.0523 22 11.5 22C10.9477 22 10.5 21.5523 10.5 21L10.5 19C10.5 18.4477 10.9477 18 11.5 18Z',
  d16: 'M3.47825 7.25C3.48548 7.25 3.49273 7.25 3.5 7.25L4.52176 7.25C4.73604 7.24999 4.93288 7.24998 5.09821 7.26126C5.27585 7.27338 5.47119 7.30099 5.6697 7.38321C6.0985 7.56083 6.43918 7.90151 6.61679 8.33031C6.69901 8.52881 6.72663 8.72415 6.73875 8.90179C6.75003 9.06712 6.75002 9.26396 6.75 9.47824V9.52176C6.75002 9.73604 6.75003 9.93289 6.73875 10.0982C6.72663 10.2759 6.69901 10.4712 6.61679 10.6697C6.43918 11.0985 6.0985 11.4392 5.6697 11.6168C5.47119 11.699 5.27585 11.7266 5.09821 11.7387C4.93289 11.75 4.73604 11.75 4.52176 11.75H3.47824C3.26396 11.75 3.06712 11.75 2.90179 11.7387C2.72415 11.7266 2.52881 11.699 2.33031 11.6168C1.90151 11.4392 1.56083 11.0985 1.38321 10.6697C1.30099 10.4712 1.27338 10.2759 1.26126 10.0982C1.24998 9.93288 1.24999 9.73604 1.25 9.52176C1.25 9.51453 1.25 9.50727 1.25 9.5C1.25 9.49273 1.25 9.48548 1.25 9.47825C1.24999 9.26397 1.24998 9.06712 1.26126 8.90179C1.27338 8.72415 1.30099 8.52881 1.38321 8.33031C1.56083 7.90151 1.90151 7.56083 2.33031 7.38321C2.52881 7.30099 2.72415 7.27338 2.90179 7.26126C3.06712 7.24998 3.26397 7.24999 3.47825 7.25Z',
  d17: 'M18.4782 9.25C18.4855 9.25 18.4927 9.25 18.5 9.25L19.5218 9.25C19.736 9.24999 19.9329 9.24998 20.0982 9.26126C20.2759 9.27338 20.4712 9.30099 20.6697 9.38321C21.0985 9.56083 21.4392 9.90151 21.6168 10.3303C21.699 10.5288 21.7266 10.7241 21.7387 10.9018C21.75 11.0671 21.75 11.264 21.75 11.4782V11.5218C21.75 11.736 21.75 11.9329 21.7387 12.0982C21.7266 12.2759 21.699 12.4712 21.6168 12.6697C21.4392 13.0985 21.0985 13.4392 20.6697 13.6168C20.4712 13.699 20.2759 13.7266 20.0982 13.7387C19.9329 13.75 19.736 13.75 19.5218 13.75H18.4782C18.264 13.75 18.0671 13.75 17.9018 13.7387C17.7241 13.7266 17.5288 13.699 17.3303 13.6168C16.9015 13.4392 16.5608 13.0985 16.3832 12.6697C16.301 12.4712 16.2734 12.2759 16.2613 12.0982C16.25 11.9329 16.25 11.736 16.25 11.5218C16.25 11.5145 16.25 11.5073 16.25 11.5C16.25 11.4927 16.25 11.4855 16.25 11.4782C16.25 11.264 16.25 11.0671 16.2613 10.9018C16.2734 10.7241 16.301 10.5288 16.3832 10.3303C16.5608 9.90151 16.9015 9.56083 17.3303 9.38321C17.5288 9.30099 17.7241 9.27338 17.9018 9.26126C18.0671 9.24998 18.264 9.24999 18.4782 9.25Z',
  d18: 'M10.9782 12.25C10.9855 12.25 10.9927 12.25 11 12.25L12.0218 12.25C12.236 12.25 12.4329 12.25 12.5982 12.2613C12.7759 12.2734 12.9712 12.301 13.1697 12.3832C13.5985 12.5608 13.9392 12.9015 14.1168 13.3303C14.199 13.5288 14.2266 13.7241 14.2387 13.9018C14.25 14.0671 14.25 14.264 14.25 14.4782V14.5218C14.25 14.736 14.25 14.9329 14.2387 15.0982C14.2266 15.2759 14.199 15.4712 14.1168 15.6697C13.9392 16.0985 13.5985 16.4392 13.1697 16.6168C12.9712 16.699 12.7759 16.7266 12.5982 16.7387C12.4329 16.75 12.236 16.75 12.0218 16.75H10.9782C10.764 16.75 10.5671 16.75 10.4018 16.7387C10.2241 16.7266 10.0288 16.699 9.83031 16.6168C9.40151 16.4392 9.06083 16.0985 8.88321 15.6697C8.80099 15.4712 8.77338 15.2759 8.76126 15.0982C8.74998 14.9329 8.74999 14.736 8.75 14.5218C8.75 14.5145 8.75 14.5073 8.75 14.5C8.75 14.4927 8.75 14.4855 8.75 14.4782C8.74999 14.264 8.74998 14.0671 8.76126 13.9018C8.77338 13.7241 8.80099 13.5288 8.88321 13.3303C9.06083 12.9015 9.40151 12.5608 9.83031 12.3832C10.0288 12.301 10.2241 12.2734 10.4018 12.2613C10.5671 12.25 10.764 12.25 10.9782 12.25Z',
  d19: 'M19 3L19 8',
  d20: 'M6 11V8L2 8L2 11L6 11Z',
  d21: 'M13.5 16V13L9.5 13L9.5 16L13.5 16Z',
  d22: 'M21 13V10L17 10L17 13L21 13Z',
  d23: 'M4 3L4 6',
  d24: 'M11.5 18L11.5 21',
  d25: 'M3 21L3 11L5 11L5 21L3 21Z',
  d26: 'M18 21L18 13L20 13L20 21L18 21Z',
  d27: 'M18 8L18 3L20 3L20 8L18 8Z',
  d28: 'M10.5 13L10.5 3L12.5 3L12.5 13L10.5 13Z',
  d29: 'M3 6L3 3L5 3L5 6L3 6Z',
  d30: 'M10.5 21L10.5 18L12.5 18L12.5 21L10.5 21Z',
  d31: 'M1.25 7.25H6.75V11.75L1.25 11.75V7.25Z',
  d32: 'M8.75 12.25H14.25V16.75H8.75V12.25Z',
  d33: 'M16.25 9.25H21.75V13.75H16.25V9.25Z',
};

export const IconPreferenceVerticalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-stroke-rounded IconPreferenceVerticalStrokeRounded"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPreferenceVerticalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-duotone-rounded IconPreferenceVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPreferenceVerticalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-twotone-rounded IconPreferenceVerticalTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPreferenceVerticalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-solid-rounded IconPreferenceVerticalSolidRounded"
    >
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

export const IconPreferenceVerticalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-bulk-rounded IconPreferenceVerticalBulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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

export const IconPreferenceVerticalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-stroke-sharp IconPreferenceVerticalStrokeSharp"
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPreferenceVerticalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-vertical-solid-sharp IconPreferenceVerticalSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPreferenceVertical: TheIconSelfPack = {
  name: 'PreferenceVertical',
  StrokeRounded: IconPreferenceVerticalStrokeRounded,
  DuotoneRounded: IconPreferenceVerticalDuotoneRounded,
  TwotoneRounded: IconPreferenceVerticalTwotoneRounded,
  SolidRounded: IconPreferenceVerticalSolidRounded,
  BulkRounded: IconPreferenceVerticalBulkRounded,
  StrokeSharp: IconPreferenceVerticalStrokeSharp,
  SolidSharp: IconPreferenceVerticalSolidSharp,
};