import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 16H21',
  d2: 'M2 22L22 22',
  d3: 'M3 9H21',
  d4: 'M3 22V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V22',
  d5: 'M11 19H13',
  d6: 'M10 9L9 5',
  d7: 'M6.5 9V5',
  d8: 'M14 16V12',
  d9: 'M12 9V5',
  d10: 'M16 16L17 12',
  d11: 'M19 16V12',
  d12: 'M21 22H3V16H21V22Z',
  d13: 'M9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 7.99998V8V9H3V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2Z',
  d14: 'M1 22C1 21.4477 1.44772 21 2 21L22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23L2 23C1.44772 23 1 22.5523 1 22Z',
  d15: 'M16.1819 11.2723C16.5837 11.3728 16.8281 11.78 16.7276 12.1818L15.7276 16.1818C15.6271 16.5837 15.2199 16.828 14.8181 16.7275C14.4163 16.6271 14.1719 16.2199 14.2724 15.818L15.2724 11.818C15.3729 11.4162 15.7801 11.1719 16.1819 11.2723ZM13 11.2499C13.4142 11.2499 13.75 11.5857 13.75 11.9999V15.9999C13.75 16.4141 13.4142 16.7499 13 16.7499C12.5858 16.7499 12.25 16.4141 12.25 15.9999V11.9999C12.25 11.5857 12.5858 11.2499 13 11.2499ZM18 11.2499C18.4142 11.2499 18.75 11.5857 18.75 11.9999V15.9999C18.75 16.4141 18.4142 16.7499 18 16.7499C17.5858 16.7499 17.25 16.4141 17.25 15.9999V11.9999C17.25 11.5857 17.5858 11.2499 18 11.2499Z',
  d16: 'M18.2585 1.1178C17.3303 0.99995 16.1546 0.999971 14.7149 1H9.28514C7.84543 0.999971 6.66967 0.99995 5.74153 1.1178C4.77568 1.24044 3.92744 1.50596 3.24375 2.15167C2.55199 2.805 2.25991 3.6286 2.12629 4.56725C1.99994 5.4548 1.99997 6.5748 2 7.92588V7.92591L2.00001 22C2.00001 22.5523 2.44773 23 3.00001 23L21 23C21.5523 23 22 22.5523 22 22L22 7.92602C22.0001 6.57486 22.0001 5.45484 21.8737 4.56725C21.7401 3.6286 21.448 2.805 20.7563 2.15167C20.0726 1.50596 19.2243 1.24044 18.2585 1.1178ZM20 14.65C20 14.9328 20 15.0743 19.9121 15.1621C19.8243 15.25 19.6828 15.25 19.4 15.25L4.6 15.25C4.31716 15.25 4.17574 15.25 4.08787 15.1621C4 15.0743 4 14.9328 4 14.65L4 10.35C4 10.0672 4 9.92574 4.08787 9.83787C4.17574 9.75 4.31716 9.75 4.6 9.75L19.4 9.75C19.6828 9.75 19.8243 9.75 19.9121 9.83787C20 9.92574 20 10.0672 20 10.35V14.65ZM10.25 19C10.25 18.5858 10.5858 18.25 11 18.25H13C13.4142 18.25 13.75 18.5858 13.75 19C13.75 19.4142 13.4142 19.75 13 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19ZM8.8181 4.27257C9.21994 4.17211 9.62715 4.41643 9.72761 4.81828L10.5856 8.25024L9.03943 8.25024L8.27239 5.18208C8.17193 4.78023 8.41625 4.37303 8.8181 4.27257ZM12.75 8.25024H11.25V5.00018C11.25 4.58596 11.5858 4.25018 12 4.25018C12.4142 4.25018 12.75 4.58596 12.75 5.00018V8.25024ZM7.25 8.25024H5.75V5.00018C5.75 4.58596 6.08579 4.25018 6.5 4.25018C6.91421 4.25018 7.25 4.58596 7.25 5.00018V8.25024Z',
  d17: 'M18.2585 1.1178C17.3303 0.999951 16.1546 0.999972 14.7149 1H9.28514C7.84543 0.999972 6.66967 0.999951 5.74153 1.1178C4.77568 1.24045 3.92744 1.50596 3.24375 2.15167C2.55199 2.805 2.25991 3.6286 2.12629 4.56725C1.99994 5.45481 1.99997 6.57482 2 7.92591L2.00001 22C2.00001 22.5523 2.44773 23 3.00001 23H21C21.5523 23 22 22.5523 22 22V7.92602C22.0001 6.57486 22.0001 5.45484 21.8737 4.56725C21.7401 3.62861 21.448 2.805 20.7563 2.15167C20.0726 1.50596 19.2243 1.24045 18.2585 1.1178ZM20 14.65C20 14.9328 20 15.0743 19.9121 15.1621C19.8243 15.25 19.6828 15.25 19.4 15.25H4.6C4.31716 15.25 4.17574 15.25 4.08787 15.1621C4 15.0743 4 14.9328 4 14.65V10.35C4 10.0672 4 9.92574 4.08787 9.83787C4.17574 9.75 4.31716 9.75 4.6 9.75H19.4C19.6828 9.75 19.8243 9.75 19.9121 9.83787C20 9.92574 20 10.0672 20 10.35V14.65Z',
  d18: 'M12.25 15.2501V12.0002C12.25 11.586 12.5858 11.2502 13 11.2502C13.4142 11.2502 13.75 11.586 13.75 12.0002V15.2501H12.25Z',
  d19: 'M14.4144 15.2501L15.2724 11.8183C15.3729 11.4164 15.7801 11.1721 16.1819 11.2726C16.5837 11.373 16.8281 11.7802 16.7276 12.1821L15.9606 15.2501H14.4144Z',
  d20: 'M18.75 12.0002C18.75 11.586 18.4142 11.2502 18 11.2502C17.5858 11.2502 17.25 11.586 17.25 12.0002V15.2501H18.75V12.0002Z',
  d21: 'M10.25 19C10.25 18.5858 10.5858 18.25 11 18.25H13C13.4142 18.25 13.75 18.5858 13.75 19C13.75 19.4142 13.4142 19.75 13 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19Z',
  d22: 'M11.25 9.75025H12.75V5.00018C12.75 4.58596 12.4142 4.25018 12 4.25018C11.5858 4.25018 11.25 4.58596 11.25 5.00018V9.75025Z',
  d23: 'M9.01299 9.75025H10.5581L9.72761 4.81828C9.62715 4.41643 9.21994 4.17211 8.8181 4.27257C8.41625 4.37303 8.17193 4.78023 8.27239 5.18208L9.01299 9.75025Z',
  d24: 'M5.75 9.75025H7.25V5.00018C7.25 4.58596 6.91421 4.25018 6.5 4.25018C6.08579 4.25018 5.75 4.58596 5.75 5.00018V9.75025Z',
  d25: 'M3 15.9905H21',
  d26: 'M3 8.99438H21',
  d27: 'M10.5 18.989H13.5',
  d28: 'M10 8.99419L9 4.99634M6 8.99419V4.99634M13 8.99419V4.99634',
  d29: 'M11 15.9905V11.9927M14 15.9905L15 11.9927M18 15.9905V11.9927',
  d30: 'M3 2.10092C3 2.04572 3.04477 2.00098 3.1 2.00098H20.9C20.9552 2.00098 21 2.04572 21 2.10092V21.999H3V2.10092Z',
  d31: 'M3 1.25L21 1.25C21.1989 1.25 21.3897 1.32902 21.5303 1.46967C21.671 1.61032 21.75 1.80109 21.75 2L21.75 22.75L2.25 22.75L2.25 2C2.25 1.58579 2.58579 1.25 3 1.25ZM20.25 9.75L3.75 9.75L3.75 15.25L20.25 15.25V9.75ZM5.25 8.10709H6.75L6.75 3.99977H5.25V8.10709ZM10.7106 8.10709L9.16447 8.10709L8.27239 4.18167L9.72761 3.81787L10.7106 8.10709ZM13.75 8.10709H12.25V3.99977H13.75V8.10709ZM10.5 19.75H13.5V18.25H10.5V19.75Z',
  d32: 'M23 22.75H1V20.75H23V22.75Z',
  d33: 'M15.7276 12.1817L14.7276 16.1817L13.2724 15.8179L14.2724 11.8179L15.7276 12.1817ZM11.75 11.9998V15.9998H10.25V11.9998H11.75ZM18.75 11.9998V15.9998H17.25V11.9998H18.75Z',
} as const;

export const IconBookshelf03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-stroke-rounded IconBookshelf03StrokeRounded"
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

export const IconBookshelf03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-duotone-rounded IconBookshelf03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
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

export const IconBookshelf03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-twotone-rounded IconBookshelf03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-solid-rounded IconBookshelf03SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-bulk-rounded IconBookshelf03BulkRounded"
    >
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
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-stroke-sharp IconBookshelf03StrokeSharp"
    >
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-03-solid-sharp IconBookshelf03SolidSharp"
    >
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

export const iconPackOfBookshelf03: TheIconSelfPack = {
  name: 'Bookshelf03',
  StrokeRounded: IconBookshelf03StrokeRounded,
  DuotoneRounded: IconBookshelf03DuotoneRounded,
  TwotoneRounded: IconBookshelf03TwotoneRounded,
  SolidRounded: IconBookshelf03SolidRounded,
  BulkRounded: IconBookshelf03BulkRounded,
  StrokeSharp: IconBookshelf03StrokeSharp,
  SolidSharp: IconBookshelf03SolidSharp,
};