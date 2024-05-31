import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 4L3 4',
  d2: 'M11 19L3 19',
  d3: 'M21 19L17 19',
  d4: 'M21 11.5L11 11.5',
  d5: 'M21 4L19 4',
  d6: 'M5 11.5L3 11.5',
  d7: 'M14.5 2C14.9659 2 15.1989 2 15.3827 2.07612C15.6277 2.17761 15.8224 2.37229 15.9239 2.61732C16 2.80109 16 3.03406 16 3.5L16 4.5C16 4.96594 16 5.19891 15.9239 5.38268C15.8224 5.62771 15.6277 5.82239 15.3827 5.92388C15.1989 6 14.9659 6 14.5 6C14.0341 6 13.8011 6 13.6173 5.92388C13.3723 5.82239 13.1776 5.62771 13.0761 5.38268C13 5.19891 13 4.96594 13 4.5L13 3.5C13 3.03406 13 2.80109 13.0761 2.61732C13.1776 2.37229 13.3723 2.17761 13.6173 2.07612C13.8011 2 14.0341 2 14.5 2Z',
  d8: 'M12.5 17C12.9659 17 13.1989 17 13.3827 17.0761C13.6277 17.1776 13.8224 17.3723 13.9239 17.6173C14 17.8011 14 18.0341 14 18.5L14 19.5C14 19.9659 14 20.1989 13.9239 20.3827C13.8224 20.6277 13.6277 20.8224 13.3827 20.9239C13.1989 21 12.9659 21 12.5 21C12.0341 21 11.8011 21 11.6173 20.9239C11.3723 20.8224 11.1776 20.6277 11.0761 20.3827C11 20.1989 11 19.9659 11 19.5L11 18.5C11 18.0341 11 17.8011 11.0761 17.6173C11.1776 17.3723 11.3723 17.1776 11.6173 17.0761C11.8011 17 12.0341 17 12.5 17Z',
  d9: 'M9.5 9.5C9.96594 9.5 10.1989 9.5 10.3827 9.57612C10.6277 9.67761 10.8224 9.87229 10.9239 10.1173C11 10.3011 11 10.5341 11 11L11 12C11 12.4659 11 12.6989 10.9239 12.8827C10.8224 13.1277 10.6277 13.3224 10.3827 13.4239C10.1989 13.5 9.96594 13.5 9.5 13.5C9.03406 13.5 8.80109 13.5 8.61732 13.4239C8.37229 13.3224 8.17761 13.1277 8.07612 12.8827C8 12.6989 8 12.4659 8 12L8 11C8 10.5341 8 10.3011 8.07612 10.1173C8.17761 9.87229 8.37229 9.67761 8.61732 9.57612C8.80109 9.5 9.03406 9.5 9.5 9.5Z',
  d10: 'M14 4C14 4.55228 13.5523 5 13 5L3 5C2.44771 5 2 4.55228 2 4C2 3.44772 2.44771 3 3 3L13 3C13.5523 3 14 3.44772 14 4Z',
  d11: 'M12 19C12 19.5523 11.5523 20 11 20L3 20C2.44771 20 2 19.5523 2 19C2 18.4477 2.44771 18 3 18L11 18C11.5523 18 12 18.4477 12 19Z',
  d12: 'M22 19C22 19.5523 21.5523 20 21 20L17 20C16.4477 20 16 19.5523 16 19C16 18.4477 16.4477 18 17 18L21 18C21.5523 18 22 18.4477 22 19Z',
  d13: 'M22 11.5C22 12.0523 21.5523 12.5 21 12.5L11 12.5C10.4477 12.5 10 12.0523 10 11.5C10 10.9477 10.4477 10.5 11 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5Z',
  d14: 'M22 4C22 4.55228 21.5523 5 21 5L19 5C18.4477 5 18 4.55228 18 4C18 3.44772 18.4477 3 19 3L21 3C21.5523 3 22 3.44772 22 4Z',
  d15: 'M6 11.5C6 12.0523 5.55228 12.5 5 12.5L3 12.5C2.44772 12.5 2 12.0523 2 11.5C2 10.9477 2.44772 10.5 3 10.5L5 10.5C5.55228 10.5 6 10.9477 6 11.5Z',
  d16: 'M16.75 3.47825C16.75 3.48548 16.75 3.49273 16.75 3.5L16.75 4.52176C16.75 4.73604 16.75 4.93288 16.7387 5.09821C16.7266 5.27585 16.699 5.47119 16.6168 5.6697C16.4392 6.0985 16.0985 6.43918 15.6697 6.61679C15.4712 6.69901 15.2759 6.72663 15.0982 6.73875C14.9329 6.75003 14.736 6.75002 14.5218 6.75L14.4782 6.75C14.264 6.75002 14.0671 6.75003 13.9018 6.73875C13.7241 6.72663 13.5288 6.69901 13.3303 6.61679C12.9015 6.43918 12.5608 6.0985 12.3832 5.6697C12.301 5.47119 12.2734 5.27585 12.2613 5.09821C12.25 4.93289 12.25 4.73604 12.25 4.52176L12.25 3.47824C12.25 3.26396 12.25 3.06712 12.2613 2.90179C12.2734 2.72415 12.301 2.52881 12.3832 2.33031C12.5608 1.90151 12.9015 1.56083 13.3303 1.38321C13.5288 1.30099 13.7241 1.27338 13.9018 1.26126C14.0671 1.24998 14.264 1.24999 14.4782 1.25C14.4855 1.25 14.4927 1.25 14.5 1.25C14.5073 1.25 14.5145 1.25 14.5218 1.25C14.736 1.24999 14.9329 1.24998 15.0982 1.26126C15.2759 1.27338 15.4712 1.30099 15.6697 1.38321C16.0985 1.56083 16.4392 1.90151 16.6168 2.33031C16.699 2.52881 16.7266 2.72415 16.7387 2.90179C16.75 3.06712 16.75 3.26397 16.75 3.47825Z',
  d17: 'M14.75 18.4782C14.75 18.4855 14.75 18.4927 14.75 18.5L14.75 19.5218C14.75 19.736 14.75 19.9329 14.7387 20.0982C14.7266 20.2759 14.699 20.4712 14.6168 20.6697C14.4392 21.0985 14.0985 21.4392 13.6697 21.6168C13.4712 21.699 13.2759 21.7266 13.0982 21.7387C12.9329 21.75 12.736 21.75 12.5218 21.75L12.4782 21.75C12.264 21.75 12.0671 21.75 11.9018 21.7387C11.7241 21.7266 11.5288 21.699 11.3303 21.6168C10.9015 21.4392 10.5608 21.0985 10.3832 20.6697C10.301 20.4712 10.2734 20.2759 10.2613 20.0982C10.25 19.9329 10.25 19.736 10.25 19.5218L10.25 18.4782C10.25 18.264 10.25 18.0671 10.2613 17.9018C10.2734 17.7241 10.301 17.5288 10.3832 17.3303C10.5608 16.9015 10.9015 16.5608 11.3303 16.3832C11.5288 16.301 11.7241 16.2734 11.9018 16.2613C12.0671 16.25 12.264 16.25 12.4782 16.25C12.4855 16.25 12.4927 16.25 12.5 16.25C12.5073 16.25 12.5145 16.25 12.5218 16.25C12.736 16.25 12.9329 16.25 13.0982 16.2613C13.2759 16.2734 13.4712 16.301 13.6697 16.3832C14.0985 16.5608 14.4392 16.9015 14.6168 17.3303C14.699 17.5288 14.7266 17.7241 14.7387 17.9018C14.75 18.0671 14.75 18.264 14.75 18.4782Z',
  d18: 'M11.75 10.9782C11.75 10.9855 11.75 10.9927 11.75 11L11.75 12.0218C11.75 12.236 11.75 12.4329 11.7387 12.5982C11.7266 12.7759 11.699 12.9712 11.6168 13.1697C11.4392 13.5985 11.0985 13.9392 10.6697 14.1168C10.4712 14.199 10.2759 14.2266 10.0982 14.2387C9.93288 14.25 9.73603 14.25 9.52176 14.25L9.47824 14.25C9.26396 14.25 9.06711 14.25 8.90179 14.2387C8.72415 14.2266 8.52881 14.199 8.3303 14.1168C7.9015 13.9392 7.56082 13.5985 7.38321 13.1697C7.30099 12.9712 7.27337 12.7759 7.26125 12.5982C7.24997 12.4329 7.24998 12.236 7.25 12.0218L7.25 10.9782C7.24998 10.764 7.24997 10.5671 7.26125 10.4018C7.27337 10.2241 7.30099 10.0288 7.38321 9.83031C7.56082 9.40151 7.9015 9.06083 8.3303 8.88321C8.52881 8.80099 8.72415 8.77338 8.90179 8.76126C9.06712 8.74998 9.26396 8.74999 9.47824 8.75C9.48547 8.75 9.49273 8.75 9.5 8.75C9.50727 8.75 9.51452 8.75 9.52175 8.75C9.73603 8.74999 9.93288 8.74998 10.0982 8.76126C10.2759 8.77338 10.4712 8.80099 10.6697 8.88321C11.0985 9.06083 11.4392 9.40151 11.6168 9.83031C11.699 10.0288 11.7266 10.2241 11.7387 10.4018C11.75 10.5671 11.75 10.764 11.75 10.9782Z',
  d19: 'M16 2H13V6H16V2Z',
  d20: 'M11 9.5H8V13.5H11V9.5Z',
  d21: 'M14 17H11V21H14V17Z',
  d22: 'M21 19L16 19',
  d23: 'M21 4L18 4',
  d24: 'M6 11.5L3 11.5',
  d25: 'M12.25 1.25H16.75V6.75H12.25V1.25Z',
  d26: 'M7.25 8.75H11.75V14.25H7.25V8.75Z',
  d27: 'M10.25 16.25H14.75V21.75H10.25V16.25Z',
  d28: 'M3 3L13 3L13 5L3 5L3 3Z',
  d29: 'M3 18L11 18L11 20L3 20L3 18Z',
  d30: 'M16 18L21 18L21 20L16 20L16 18Z',
  d31: 'M11 10.5L21 10.5L21 12.5L11 12.5L11 10.5Z',
  d32: 'M18 3L21 3L21 5L18 5L18 3Z',
  d33: 'M3 10.5L6 10.5L6 12.5L3 12.5L3 10.5Z',
} as const;

export const IconPreferenceHorizontalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-stroke-rounded IconPreferenceHorizontalStrokeRounded"
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

export const IconPreferenceHorizontalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-duotone-rounded IconPreferenceHorizontalDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconPreferenceHorizontalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-twotone-rounded IconPreferenceHorizontalTwotoneRounded"
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

export const IconPreferenceHorizontalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-solid-rounded IconPreferenceHorizontalSolidRounded"
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

export const IconPreferenceHorizontalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-bulk-rounded IconPreferenceHorizontalBulkRounded"
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

export const IconPreferenceHorizontalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-stroke-sharp IconPreferenceHorizontalStrokeSharp"
    >
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
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
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

export const IconPreferenceHorizontalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="preference-horizontal-solid-sharp IconPreferenceHorizontalSolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPreferenceHorizontal: TheIconSelfPack = {
  name: 'PreferenceHorizontal',
  StrokeRounded: IconPreferenceHorizontalStrokeRounded,
  DuotoneRounded: IconPreferenceHorizontalDuotoneRounded,
  TwotoneRounded: IconPreferenceHorizontalTwotoneRounded,
  SolidRounded: IconPreferenceHorizontalSolidRounded,
  BulkRounded: IconPreferenceHorizontalBulkRounded,
  StrokeSharp: IconPreferenceHorizontalStrokeSharp,
  SolidSharp: IconPreferenceHorizontalSolidSharp,
};