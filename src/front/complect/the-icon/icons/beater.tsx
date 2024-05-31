import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 5H17.5C18.9045 5 19.6067 5 20.1111 5.33706C20.3295 5.48298 20.517 5.67048 20.6629 5.88886C21 6.39331 21 7.09554 21 8.5C21 9.90446 21 10.6067 20.6629 11.1111C20.517 11.3295 20.3295 11.517 20.1111 11.6629C19.6067 12 18.9045 12 17.5 12H6.5C5.09554 12 4.39331 12 3.88886 11.6629C3.67048 11.517 3.48298 11.3295 3.33706 11.1111C3 10.6067 3 9.90446 3 8.5C3 7.09554 3 6.39331 3.33706 5.88886C3.48298 5.67048 3.67048 5.48298 3.88886 5.33706C4.39331 5 5.09554 5 6.5 5Z',
  d2: 'M17.5 16H15.5C14.6716 16 14 16.6716 14 17.5V19.5C14 20.3284 14.6716 21 15.5 21H17.5C18.3284 21 19 20.3284 19 19.5V17.5C19 16.6716 18.3284 16 17.5 16Z',
  d3: 'M16.5 22V21M16.5 12V16',
  d4: 'M8 2H15C15.9319 2 16.3978 2 16.7654 2.15224C17.2554 2.35523 17.6448 2.74458 17.8478 3.23463C18 3.60218 18 4.06812 18 5',
  d5: 'M17 8.5H16.991M13.009 8.5H13',
  d6: 'M16.5 16V12M16.5 22V21',
  d7: 'M13 17.5C13 16.1193 14.1193 15 15.5 15H17.5C18.8807 15 20 16.1193 20 17.5V19.5C20 20.8807 18.8807 22 17.5 22H15.5C14.1193 22 13 20.8807 13 19.5V17.5ZM15.5 17C15.2239 17 15 17.2239 15 17.5V19.5C15 19.7761 15.2239 20 15.5 20H17.5C17.7761 20 18 19.7761 18 19.5V17.5C18 17.2239 17.7761 17 17.5 17H15.5Z',
  d8: 'M16.5 11C17.0523 11 17.5 11.4477 17.5 12V16C17.5 16.5523 17.0523 17 16.5 17C15.9477 17 15.5 16.5523 15.5 16V12C15.5 11.4477 15.9477 11 16.5 11ZM16.5 20C17.0523 20 17.5 20.4477 17.5 21V22C17.5 22.5523 17.0523 23 16.5 23C15.9477 23 15.5 22.5523 15.5 22V21C15.5 20.4477 15.9477 20 16.5 20Z',
  d9: 'M16.0262 3.01671C15.7893 3.00054 15.4796 3 15 3H8C7.44772 3 7 2.55229 7 2C7 1.44772 7.44772 1 8 1L15.032 1C15.4706 0.999988 15.8491 0.999977 16.1624 1.02135C16.4922 1.04386 16.8221 1.09336 17.1481 1.22836C17.8831 1.53284 18.4672 2.11687 18.7716 2.85195C18.9066 3.17788 18.9561 3.50779 18.9787 3.83762C19 4.15088 19 4.52936 19 4.96801V5C19 5.55229 18.5523 6 18 6C17.4477 6 17 5.55229 17 5C17 4.52038 16.9995 4.21074 16.9833 3.97376C16.9677 3.74576 16.9411 3.65893 16.9239 3.61732C16.8224 3.37229 16.6277 3.17762 16.3827 3.07612C16.3411 3.05888 16.2542 3.03227 16.0262 3.01671Z',
  d10: 'M6.46166 4.25L17.5384 4.25C18.2079 4.24998 18.7667 4.24997 19.219 4.29598C19.6925 4.34415 20.1318 4.44886 20.5278 4.71346C20.8281 4.91409 21.0859 5.17191 21.2865 5.47218C21.5511 5.86818 21.6559 6.30754 21.704 6.78102C21.75 7.23335 21.75 7.79209 21.75 8.46168V8.53832C21.75 9.20791 21.75 9.76664 21.704 10.219C21.6559 10.6925 21.5511 11.1318 21.2865 11.5278C21.0859 11.8281 20.8281 12.0859 20.5278 12.2865C20.1318 12.5511 19.6925 12.6558 19.219 12.704C18.7667 12.75 18.2079 12.75 17.5384 12.75H17.5383L6.46162 12.75H6.4616C5.79204 12.75 5.23334 12.75 4.78102 12.704C4.30755 12.6558 3.86818 12.5511 3.47218 12.2865C3.17191 12.0859 2.9141 11.8281 2.71346 11.5278C2.44887 11.1318 2.34415 10.6924 2.29599 10.219C2.24997 9.76667 2.24999 9.20792 2.25 8.53838V8.53834V8.46161V8.46157C2.24999 7.79203 2.24997 7.23333 2.29599 6.78102C2.34415 6.30754 2.44887 5.86818 2.71346 5.47218C2.9141 5.17191 3.17191 4.91409 3.47218 4.71346C3.86818 4.44886 4.30755 4.34415 4.78102 4.29598C5.23335 4.24997 5.79208 4.24998 6.46166 4.25ZM13 7.5C12.4477 7.5 12 7.94771 12 8.5C12 9.05228 12.4477 9.5 13 9.5H13.009C13.5612 9.5 14.009 9.05228 14.009 8.5C14.009 7.94771 13.5612 7.5 13.009 7.5H13ZM16.991 7.5C16.4388 7.5 15.991 7.94771 15.991 8.5C15.991 9.05228 16.4388 9.5 16.991 9.5H17C17.5523 9.5 18 9.05228 18 8.5C18 7.94771 17.5523 7.5 17 7.5H16.991Z',
  d11: 'M19 15H14V20H19V15Z',
  d12: 'M21 5H3V12H21V5Z',
  d13: 'M16.5 22V20M16.5 12V15',
  d14: 'M8 2H18V5',
  d15: 'M19 15.5H14V20.5H19V15.5Z',
  d16: 'M17.5 12.5V15.5H15.5V12.5H17.5ZM17.5 20.5V22.5H15.5V20.5H17.5Z',
  d17: 'M8 1.5H18C18.5523 1.5 19 1.94772 19 2.5V5.5H17V3.5H8V1.5Z',
  d18: 'M3 4.75C2.80109 4.75 2.61032 4.82902 2.46967 4.96967C2.32902 5.11032 2.25 5.30109 2.25 5.5L2.25 12.5C2.25 12.9142 2.58579 13.25 3 13.25L21 13.25C21.4142 13.25 21.75 12.9142 21.75 12.5V5.5C21.75 5.08579 21.4142 4.75 21 4.75L3 4.75ZM14.009 8L12 8V10H14.009V8ZM18 8H15.991V10H18V8Z',
} as const;

export const IconBeaterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-stroke-rounded IconBeaterStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBeaterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-duotone-rounded IconBeaterDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBeaterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-twotone-rounded IconBeaterTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconBeaterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-solid-rounded IconBeaterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBeaterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-bulk-rounded IconBeaterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconBeaterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-stroke-sharp IconBeaterStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeaterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="beater-solid-sharp IconBeaterSolidSharp"
    >
      <path 
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

export const iconPackOfBeater: TheIconSelfPack = {
  name: 'Beater',
  StrokeRounded: IconBeaterStrokeRounded,
  DuotoneRounded: IconBeaterDuotoneRounded,
  TwotoneRounded: IconBeaterTwotoneRounded,
  SolidRounded: IconBeaterSolidRounded,
  BulkRounded: IconBeaterBulkRounded,
  StrokeSharp: IconBeaterStrokeSharp,
  SolidSharp: IconBeaterSolidSharp,
};