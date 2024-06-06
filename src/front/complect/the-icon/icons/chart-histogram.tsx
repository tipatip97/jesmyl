import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M13 10L13 21',
  d3: 'M18 13L18 21',
  d4: 'M8 13L8 20',
  d5: 'M21 7.98693C19.16 7.98693 17.1922 8.24252 15.8771 6.49346C14.3798 4.50218 11.6202 4.50218 10.1229 6.49346C8.80782 8.24252 6.84003 7.98693 5 7.98693H3',
  d6: 'M3 2C3.55229 2 4 2.44772 4 3V6.98693H5C5.24744 6.98693 5.48186 6.99042 5.70609 6.99377C6.40305 7.00416 7.00152 7.01308 7.58634 6.91099C8.28301 6.78937 8.85218 6.51956 9.32368 5.89249C11.221 3.36917 14.779 3.36917 16.6763 5.89249C17.1478 6.51956 17.717 6.78937 18.4137 6.91099C18.9985 7.01308 19.5969 7.00416 20.2939 6.99377C20.5181 6.99042 20.7526 6.98693 21 6.98693C21.5523 6.98693 22 7.43464 22 7.98693C22 8.53921 21.5523 8.98693 21 8.98693C20.8272 8.98693 20.6419 8.98996 20.4477 8.99313C19.7166 9.00508 18.8596 9.01909 18.0697 8.88119C16.9937 8.69335 15.9214 8.21642 15.0778 7.09444C13.9806 5.63519 12.0194 5.63519 10.9222 7.09444C10.0786 8.21642 9.00629 8.69335 7.93029 8.88119C7.14035 9.0191 6.28339 9.00508 5.55228 8.99313C5.3581 8.98996 5.17281 8.98693 5 8.98693H4V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C6.50956 19.9099 6.74409 19.9319 7 19.9486L7 13C7 12.4477 7.44772 12 8 12C8.55229 12 9 12.4477 9 13L9 19.9986C9.31141 19.9999 9.644 20 10 20H12L12 10C12 9.44772 12.4477 9 13 9C13.5523 9 14 9.44772 14 10L14 20H17V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d7: 'M13 9C13.5523 9 14 9.44772 14 10L14 21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21L12 10C12 9.44772 12.4477 9 13 9Z',
  d8: 'M18 12C18.5523 12 19 12.4477 19 13L19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21L17 13C17 12.4477 17.4477 12 18 12Z',
  d9: 'M8 12C8.55228 12 9 12.4477 9 13L9 20C9 20.5523 8.55229 21 8 21C7.44772 21 7 20.5523 7 20L7 13C7 12.4477 7.44772 12 8 12Z',
  d10: 'M15.0778 7.09444C13.9806 5.63519 12.0194 5.63519 10.9222 7.09444C10.0786 8.21642 9.00629 8.69335 7.93028 8.88119C7.14035 9.0191 6.28338 9.00508 5.55227 8.99313C5.3581 8.98996 5.1728 8.98693 5 8.98693H3C2.44772 8.98693 2 8.53921 2 7.98693C2 7.43464 2.44772 6.98693 3 6.98693H5C5.24744 6.98693 5.48186 6.99042 5.70608 6.99377C6.40305 7.00416 7.00152 7.01308 7.58633 6.91099C8.28301 6.78937 8.85218 6.51956 9.32368 5.89249C11.221 3.36917 14.779 3.36917 16.6763 5.89249C17.1478 6.51956 17.717 6.78937 18.4137 6.91099C18.9985 7.01308 19.5969 7.00416 20.2939 6.99377C20.5181 6.99042 20.7526 6.98693 21 6.98693C21.5523 6.98693 22 7.43464 22 7.98693C22 8.53921 21.5523 8.98693 21 8.98693C20.8272 8.98693 20.6419 8.98996 20.4477 8.99313C19.7166 9.00508 18.8596 9.0191 18.0697 8.88119C16.9937 8.69335 15.9214 8.21642 15.0778 7.09444Z',
  d11: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16377 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.92793C8.33929 22 7.04614 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9527 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d12: 'M21 21H3V3',
  d13: 'M8 13L8 21',
  d14: 'M3 7.98693H10C10 6.33729 11.3438 5 12.9934 5C14.6503 5 16 6.34315 16 8L21 7.98693',
  d15: 'M4.49854 19.5V2.5H2.49854V20.5C2.49854 21.0523 2.94625 21.5 3.49854 21.5H21.4985V19.5H4.49854Z',
  d16: 'M12.4985 20.5L12.4985 9.5L14.4985 9.5L14.4985 20.5L12.4985 20.5Z',
  d17: 'M17.4985 20.5L17.4985 12.5L19.4985 12.5L19.4985 20.5L17.4985 20.5Z',
  d18: 'M7.49854 20.5L7.49854 12.5L9.49854 12.5L9.49854 20.5L7.49854 20.5Z',
  d19: 'M13.492 5.5C12.3918 5.5 11.4985 6.39242 11.4985 7.48693V8.48693H3.49854V6.48693H9.62535C10.0708 4.76745 11.6375 3.5 13.492 3.5C15.3529 3.5 16.925 4.77209 17.3716 6.49771L21.4959 6.48693L21.5012 8.48692L15.4985 8.50262V7.5C15.4985 6.39827 14.5994 5.5 13.492 5.5Z',
} as const;

export const IconChartHistogramStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-stroke-rounded IconChartHistogramStrokeRounded"
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

export const IconChartHistogramDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-duotone-rounded IconChartHistogramDuotoneRounded"
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

export const IconChartHistogramTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-twotone-rounded IconChartHistogramTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
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

export const IconChartHistogramSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-solid-rounded IconChartHistogramSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartHistogramBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-bulk-rounded IconChartHistogramBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartHistogramStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-stroke-sharp IconChartHistogramStrokeSharp"
    >
      <path 
        d={d.d12} 
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
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconChartHistogramSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-histogram-solid-sharp IconChartHistogramSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartHistogram: TheIconSelfPack = {
  name: 'ChartHistogram',
  StrokeRounded: IconChartHistogramStrokeRounded,
  DuotoneRounded: IconChartHistogramDuotoneRounded,
  TwotoneRounded: IconChartHistogramTwotoneRounded,
  SolidRounded: IconChartHistogramSolidRounded,
  BulkRounded: IconChartHistogramBulkRounded,
  StrokeSharp: IconChartHistogramStrokeSharp,
  SolidSharp: IconChartHistogramSolidSharp,
};