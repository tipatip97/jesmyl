import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 7.5C8 7.5 8.89734 5.92822 9.06196 4.01957C9.13851 3.13198 9.17678 2.68819 9.42636 2.43221C9.67594 2.17623 9.97701 2.14256 10.5792 2.07523C10.9774 2.03069 11.451 2 12 2C12.549 2 13.0226 2.03069 13.4208 2.07523C14.023 2.14256 14.3241 2.17623 14.5736 2.43221C14.8232 2.68819 14.8615 3.13198 14.938 4.01957C15.1027 5.92822 16 7.5 16 7.5',
  d2: 'M16 16.5C16 16.5 15.1027 18.0718 14.938 19.9804C14.8615 20.868 14.8232 21.3118 14.5736 21.5678C14.3241 21.8238 14.023 21.8574 13.4208 21.9248C13.0226 21.9693 12.549 22 12 22C11.451 22 10.9774 21.9693 10.5792 21.9248C9.97701 21.8574 9.67594 21.8238 9.42636 21.5678C9.17678 21.3118 9.13851 20.868 9.06196 19.9804C8.89734 18.0718 8 16.5 8 16.5',
  d3: 'M9.92177 5.3137C8.97406 5.60796 8.1126 6.09816 7.38477 6.73693C7.43843 6.61353 7.4889 6.48881 7.53732 6.36396C7.76513 5.77652 7.9976 4.97872 8.0701 4.13682C8.07513 4.07849 8.07991 4.0195 8.08474 3.96003C8.14113 3.26487 8.20276 2.50516 8.71077 1.98412C9.21877 1.46308 9.87183 1.39441 10.3552 1.34358L10.3552 1.34357C10.3941 1.33948 10.4319 1.33551 10.4684 1.33142C10.9034 1.28279 11.4141 1.25 12.0004 1.25C12.5867 1.25 13.0974 1.28279 13.5324 1.33142C13.5689 1.33551 13.6067 1.33948 13.6456 1.34357C14.129 1.39441 14.7821 1.46308 15.2901 1.98411C15.7981 2.50516 15.8597 3.26487 15.9161 3.96003C15.9209 4.01949 15.9257 4.07848 15.9307 4.13681C16.0032 4.9787 16.2357 5.77652 16.4635 6.36396C16.5121 6.48929 16.5628 6.61436 16.6168 6.7381C15.8888 6.0989 15.0271 5.60837 14.0791 5.3139C14.0187 5.00832 13.9708 4.68723 13.9422 4.3555C13.923 4.13285 13.8766 3.75238 13.8501 3.54141C13.8386 3.45007 13.7705 3.37641 13.6794 3.36344C13.5805 3.34936 13.4649 3.33635 13.3101 3.31904C12.9485 3.2786 12.512 3.25 12.0004 3.25C11.4888 3.25 11.0523 3.2786 10.6907 3.31904C10.5359 3.33635 10.4203 3.34936 10.3214 3.36344C10.2303 3.37641 10.1622 3.45007 10.1507 3.54141C10.1243 3.75238 10.0779 4.13285 10.0587 4.3555C10.0301 4.68716 9.98215 5.00818 9.92177 5.3137ZM14.0791 18.6861C15.0271 18.3916 15.8888 17.9011 16.6168 17.2619C16.5628 17.3856 16.5121 17.5107 16.4635 17.636C16.2357 18.2235 16.0032 19.0213 15.9307 19.8632C15.9257 19.9215 15.9209 19.9805 15.9161 20.04C15.8597 20.7351 15.7981 21.4948 15.2901 22.0159C14.7821 22.5369 14.129 22.6056 13.6456 22.6564C13.6067 22.6605 13.5689 22.6645 13.5324 22.6686C13.0974 22.7172 12.5867 22.75 12.0004 22.75C11.4141 22.75 10.9034 22.7172 10.4684 22.6686C10.4319 22.6645 10.3941 22.6605 10.3552 22.6564C9.87183 22.6056 9.21877 22.5369 8.71077 22.0159C8.20276 21.4948 8.14113 20.7351 8.08474 20.04C8.07991 19.9805 8.07513 19.9215 8.0701 19.8632C7.9976 19.0213 7.76513 18.2235 7.53732 17.636C7.4889 17.5112 7.43843 17.3865 7.38477 17.2631C8.1126 17.9018 8.97406 18.392 9.92177 18.6863C9.98215 18.9918 10.0301 19.3128 10.0587 19.6445C10.0779 19.8671 10.1243 20.2476 10.1507 20.4586C10.1622 20.5499 10.2303 20.6236 10.3214 20.6366C10.4203 20.6506 10.5359 20.6637 10.6907 20.681C11.0523 20.7214 11.4888 20.75 12.0004 20.75C12.512 20.75 12.9485 20.7214 13.3101 20.681C13.4649 20.6637 13.5805 20.6506 13.6794 20.6366C13.7705 20.6236 13.8386 20.5499 13.8501 20.4586C13.8766 20.2476 13.923 19.8671 13.9422 19.6445C13.9708 19.3128 14.0187 18.9917 14.0791 18.6861Z',
  d4: 'M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z',
  d5: 'M8 7.5L9.5 2H14.5L16 7.5',
  d6: 'M8 16.5L9.5 22H14.5L16 16.5',
  d7: 'M5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C15.7279 5.25 18.75 8.27208 18.75 12C18.75 15.7279 15.7279 18.75 12 18.75C8.27208 18.75 5.25 15.7279 5.25 12Z',
  d8: 'M8.87739 1.25H15.1226L16.75 7.34514L14.9039 7.85941L13.6611 3.20455H10.3389L9.09606 7.85941L7.25 7.34514L8.87739 1.25ZM7.25 16.6549L9.09606 16.1406L10.3389 20.7955H13.6611L14.9039 16.1406L16.75 16.6549L15.1226 22.75H8.87739L7.25 16.6549Z',
} as const;

export const IconSmartWatch01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-stroke-rounded IconSmartWatch01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-duotone-rounded IconSmartWatch01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="6" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-twotone-rounded IconSmartWatch01TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-solid-rounded IconSmartWatch01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-bulk-rounded IconSmartWatch01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-stroke-sharp IconSmartWatch01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-01-solid-sharp IconSmartWatch01SolidSharp"
    >
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

export const iconPackOfSmartWatch01: TheIconSelfPack = {
  name: 'SmartWatch01',
  StrokeRounded: IconSmartWatch01StrokeRounded,
  DuotoneRounded: IconSmartWatch01DuotoneRounded,
  TwotoneRounded: IconSmartWatch01TwotoneRounded,
  SolidRounded: IconSmartWatch01SolidRounded,
  BulkRounded: IconSmartWatch01BulkRounded,
  StrokeSharp: IconSmartWatch01StrokeSharp,
  SolidSharp: IconSmartWatch01SolidSharp,
};