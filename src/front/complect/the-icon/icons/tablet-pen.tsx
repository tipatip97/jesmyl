import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 7.75736 2 5.63604 3.31802 4.31802C4.63604 3 6.75736 3 11 3H13C17.2426 3 19.364 3 20.682 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.682 19.682C19.364 21 17.2426 21 13 21H11C6.75736 21 4.63604 21 3.31802 19.682C2 18.364 2 16.2426 2 12Z',
  d2: 'M6.5 3V21',
  d3: 'M17.0058 8.88441L17.614 9.49021C18.1286 10.0028 18.1286 10.8338 17.6141 11.3463L14.4275 14.5799C14.1768 14.8296 13.8561 14.9979 13.5077 15.0627L11.5327 15.4898C11.2209 15.5572 10.9432 15.2814 11.01 14.9706L11.4304 13.0148C11.4955 12.6677 11.6645 12.3483 11.9151 12.0987L15.1423 8.88441C15.6569 8.37186 16.4912 8.37186 17.0058 8.88441Z',
  d4: 'M10.6904 3.11133H12.6904C16.933 3.11133 19.0544 3.11133 20.3724 4.42935C21.6904 5.74737 21.6904 7.86869 21.6904 12.1113C21.6904 16.3539 21.6904 18.4753 20.3724 19.7933C19.0544 21.1113 16.933 21.1113 12.6904 21.1113H10.6904C8.81317 21.1113 7.35123 21.1113 6.19043 20.9971V3.22551C7.35123 3.11133 8.81317 3.11133 10.6904 3.11133ZM14.4778 9.31472L11.5835 12.2091C11.1254 12.6671 11.0155 13.3099 10.9075 13.9411C10.8792 14.1067 10.851 14.2716 10.8166 14.432C10.6876 15.0357 10.623 15.3376 10.7936 15.5081C10.9641 15.6787 11.266 15.6141 11.8697 15.4851C12.0301 15.4507 12.195 15.4225 12.3606 15.3942C12.9918 15.2862 13.6346 15.1763 14.0926 14.7182L16.987 11.8239C17.2787 11.5322 17.4245 11.3863 17.5121 11.2346C17.7498 10.8229 17.7498 10.3156 17.5121 9.90396C17.4245 9.75225 17.2787 9.60641 16.987 9.31474C16.6953 9.02306 16.5495 8.8772 16.3978 8.78961C15.9861 8.5519 15.4788 8.5519 15.0671 8.78961C14.9154 8.8772 14.7695 9.02305 14.4778 9.31472Z',
  d5: 'M1.69043 12.1113C1.69043 7.86869 1.69043 5.74737 3.00845 4.42935C4.32647 3.11133 6.44779 3.11133 10.6904 3.11133H12.6904C16.933 3.11133 19.0544 3.11133 20.3724 4.42935C21.6904 5.74737 21.6904 7.86869 21.6904 12.1113C21.6904 16.3539 21.6904 18.4753 20.3724 19.7933C19.0544 21.1113 16.933 21.1113 12.6904 21.1113H10.6904C6.44779 21.1113 4.32647 21.1113 3.00845 19.7933C1.69043 18.4753 1.69043 16.3539 1.69043 12.1113Z',
  d6: 'M16.7532 8.95807L17.3765 9.57223C17.9038 10.0918 17.9038 10.9343 17.3765 11.4539L14.1109 14.7321C13.8541 14.9852 13.5255 15.1558 13.1684 15.2216L11.1446 15.6544C10.825 15.7228 10.5404 15.4433 10.6089 15.1282L11.0397 13.1454C11.1064 12.7935 11.2795 12.4698 11.5364 12.2166L14.8435 8.95807C15.3708 8.43846 16.2259 8.43846 16.7532 8.95807Z',
  d7: 'M6.19043 3.11133V21.1113',
  d8: 'M16.9573 8.24526C16.3909 7.91825 15.6931 7.91825 15.1266 8.24526C14.9164 8.36662 14.7261 8.55725 14.4798 8.8038L11.5395 11.7442C11.1604 12.1232 10.9797 12.5842 10.8702 13.0129C10.8156 13.227 10.7763 13.4433 10.7416 13.6439L10.7237 13.7485C10.6954 13.9139 10.6692 14.0667 10.6372 14.2162L10.6303 14.2488C10.5717 14.5223 10.5166 14.7798 10.5033 14.9895C10.4889 15.2165 10.5134 15.5142 10.7496 15.7504C10.9857 15.9866 11.2835 16.0111 11.5105 15.9967C11.7201 15.9833 11.9776 15.9282 12.2511 15.8697L12.2838 15.8627C12.4332 15.8307 12.586 15.8046 12.7514 15.7763L12.8561 15.7583C13.0567 15.7236 13.273 15.6844 13.4871 15.6297C13.9157 15.5203 14.3767 15.3395 14.7558 14.9605L17.6961 12.0201C17.9427 11.7739 18.1333 11.5835 18.2547 11.3733C18.5817 10.8069 18.5817 10.109 18.2547 9.54263C18.1333 9.33244 17.9427 9.14206 17.6961 8.89584L17.6041 8.8038C17.3579 8.55725 17.1675 8.36662 16.9573 8.24526Z',
  d9: 'M13.0741 2H10.9259C8.86751 1.99998 7.2211 1.99996 5.92903 2.17367C4.59273 2.35333 3.48669 2.73514 2.61091 3.61091C1.73514 4.48669 1.35333 5.59273 1.17367 6.92903C0.999957 8.2211 0.999976 9.86749 1 11.9259V12.0741C0.999976 14.1325 0.999957 15.7789 1.17367 17.071C1.35333 18.4073 1.73514 19.5133 2.61091 20.3891C3.48669 21.2649 4.59273 21.6467 5.92903 21.8263C7.2211 22 8.86749 22 10.9259 22H13.074C15.1325 22 16.7789 22 18.071 21.8263C19.4073 21.6467 20.5133 21.2649 21.3891 20.3891C22.2649 19.5133 22.6467 18.4073 22.8263 17.071C23 15.7789 23 14.1325 23 12.0741V11.926C23 9.86753 23 8.2211 22.8263 6.92903C22.6467 5.59273 22.2649 4.48669 21.3891 3.61091C20.5133 2.73514 19.4073 2.35333 18.071 2.17367C16.7789 1.99996 15.1325 1.99998 13.0741 2ZM7.25 18.998C7.25 19.4465 7.25 19.6708 7.39194 19.8165C7.53387 19.9621 7.75326 19.9677 8.19204 19.979C8.98797 19.9995 9.91231 20 11 20H13C15.1496 20 16.6612 19.9979 17.8045 19.8442C18.919 19.6943 19.5326 19.4171 19.9749 18.9749C20.4171 18.5326 20.6943 17.919 20.8442 16.8045C20.9979 15.6612 21 14.1496 21 12C21 9.85041 20.9979 8.33882 20.8442 7.19553C20.6943 6.081 20.4171 5.46737 19.9749 5.02513C19.5326 4.58289 18.919 4.30568 17.8045 4.15584C16.6612 4.00213 15.1496 4 13 4H11C9.91231 4 8.98797 4.00055 8.19204 4.021C7.75326 4.03227 7.53387 4.03791 7.39194 4.18354C7.25 4.32916 7.25 4.55345 7.25 5.00204V18.998Z',
  d10: 'M2 3V21H22V3H2Z',
  d11: 'M15.9834 8.0458L10.5322 13.4654V15.9831H13.0886L18.439 10.5841C18.4773 10.5455 18.4777 10.4829 18.4399 10.4438L16.1236 8.04721C16.0854 8.00761 16.0225 8.00697 15.9834 8.0458Z',
  d12: 'M10.498 13.5V16H12.998L18.498 10.5L15.998 8L10.498 13.5Z',
  d13: 'M2.22727 2.25H21.7727C22.0319 2.25 22.2805 2.35272 22.4638 2.53557C22.647 2.71842 22.75 2.96641 22.75 3.225V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75L2.22727 21.75C1.96808 21.75 1.71951 21.6473 1.53624 21.4644C1.35296 21.2816 1.25 21.0336 1.25 20.775V3.225C1.25 2.68652 1.68754 2.25 2.22727 2.25ZM8 19.8L20.7955 19.7999V4.19995H8V19.8Z',
};

export const IconTabletPenStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-stroke-rounded IconTabletPenStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletPenDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-duotone-rounded IconTabletPenDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletPenTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-twotone-rounded IconTabletPenTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTabletPenSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-solid-rounded IconTabletPenSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletPenBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-bulk-rounded IconTabletPenBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletPenStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-stroke-sharp IconTabletPenStrokeSharp"
    >
      <path 
        d={d.d10} 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletPenSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-pen-solid-sharp IconTabletPenSolidSharp"
    >
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

export const iconPackOfTabletPen: TheIconSelfPack = {
  name: 'TabletPen',
  StrokeRounded: IconTabletPenStrokeRounded,
  DuotoneRounded: IconTabletPenDuotoneRounded,
  TwotoneRounded: IconTabletPenTwotoneRounded,
  SolidRounded: IconTabletPenSolidRounded,
  BulkRounded: IconTabletPenBulkRounded,
  StrokeSharp: IconTabletPenStrokeSharp,
  SolidSharp: IconTabletPenSolidSharp,
};