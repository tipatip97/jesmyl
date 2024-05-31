import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 4L9 11',
  d2: 'M13 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10',
  d3: 'M13 4V17.6667C13 18.7666 13 19.3166 12.7071 19.6583C12.4142 20 11.9428 20 11 20H10',
  d4: 'M5 4V17.6667C5 18.7666 5 19.3166 4.70711 19.6583C4.41421 20 3.94281 20 3 20H2',
  d5: 'M15 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10H13V12C13 12.9428 13 13.4142 13.2929 13.7071C13.5858 14 14.0572 14 15 14Z',
  d6: 'M13 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10M13 4V17.6667C13 18.7666 13 19.3166 12.7071 19.6583C12.4142 20 11.9428 20 11 20H10',
  d7: 'M9 3C9.55228 3 10 3.44772 10 4L10 11C10 11.5523 9.55228 12 9 12C8.44771 12 8 11.5523 8 11L8 4C8 3.44772 8.44772 3 9 3Z',
  d8: 'M13 3C13.5523 3 14 3.44772 14 4V13H20.5734C19.6112 11.6744 18.3125 11 17.117 11C16.5647 11 16.117 10.5523 16.117 10C16.117 9.44772 16.5647 9 17.117 9C19.1871 9 21.1418 10.2136 22.4075 12.137L22.4379 12.1831C22.5841 12.4048 22.7623 12.675 22.8684 12.9293C23.0092 13.2668 23.0944 13.7425 22.8191 14.2311C22.5341 14.7369 22.0567 14.8977 21.7197 14.9539C21.4408 15.0004 21.1013 15.0002 20.7993 15L20.743 15H14L14 17.7183V17.7183C14.0001 18.2238 14.0001 18.6857 13.9568 19.0613C13.9103 19.4646 13.8006 19.9191 13.4664 20.3091C13.113 20.7213 12.6664 20.8802 12.2522 20.9452C11.9012 21.0003 11.4788 21.0001 11.0596 21H11.0596L11 21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11C11.5042 19 11.7653 18.9971 11.9423 18.9694L11.9486 18.9684C11.9553 18.937 11.963 18.8929 11.97 18.8323C11.9984 18.5853 12 18.241 12 17.6667V4C12 3.44772 12.4477 3 13 3Z',
  d9: 'M5 3C5.55228 3 6 3.44772 6 4L6 17.7183C6.00005 18.2238 6.0001 18.6857 5.95681 19.0613C5.91033 19.4646 5.80065 19.9191 5.46636 20.3091C5.11302 20.7213 4.6664 20.8802 4.25223 20.9452C3.90124 21.0003 3.47879 21.0001 3.05959 21C3.03971 21 3.01985 21 3 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H3C3.50423 19 3.76531 18.9971 3.94231 18.9694C3.94445 18.969 3.94653 18.9687 3.94856 18.9684C3.95533 18.937 3.96299 18.8929 3.96996 18.8323C3.99843 18.5853 4 18.241 4 17.6667V4C4 3.44772 4.44772 3 5 3Z',
  d10: 'M13 14H22C22 12 19 10 16.5 10',
  d11: 'M13 4V20H10',
  d12: 'M5 4V20H2',
  d13: 'M7.5 10.5L7.5 3.5L9.5 3.5L9.5 10.5L7.5 10.5Z',
  d14: 'M11.5 3.5V18.5H9.5V20.5H12.5C13.0523 20.5 13.5 20.0523 13.5 19.5V14.5H22.5V13.5C22.5 12.0146 21.4262 10.7532 20.2642 9.93303C19.0633 9.08532 17.4907 8.5 16 8.5V10.5C17.0093 10.5 18.1867 10.9147 19.1108 11.567C19.5467 11.8747 19.8726 12.1944 20.0988 12.5H13.5V3.5H11.5Z',
  d15: 'M3.5 18.5V3.5H5.5V19.5C5.5 20.0523 5.05228 20.5 4.5 20.5H1.5V18.5H3.5Z',
} as const;

export const IconAlphabetArabicStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-stroke-rounded IconAlphabetArabicStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphabetArabicDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-duotone-rounded IconAlphabetArabicDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphabetArabicTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-twotone-rounded IconAlphabetArabicTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconAlphabetArabicSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-solid-rounded IconAlphabetArabicSolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetArabicBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-bulk-rounded IconAlphabetArabicBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAlphabetArabicStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-stroke-sharp IconAlphabetArabicStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetArabicSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-arabic-solid-sharp IconAlphabetArabicSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfAlphabetArabic: TheIconSelfPack = {
  name: 'AlphabetArabic',
  StrokeRounded: IconAlphabetArabicStrokeRounded,
  DuotoneRounded: IconAlphabetArabicDuotoneRounded,
  TwotoneRounded: IconAlphabetArabicTwotoneRounded,
  SolidRounded: IconAlphabetArabicSolidRounded,
  BulkRounded: IconAlphabetArabicBulkRounded,
  StrokeSharp: IconAlphabetArabicStrokeSharp,
  SolidSharp: IconAlphabetArabicSolidSharp,
};