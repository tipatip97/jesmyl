import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2',
  d2: 'M4.64856 5.07876C4.7869 4.93211 4.92948 4.7895 5.0761 4.65111M7.94733 2.72939C8.12884 2.6478 8.31313 2.57128 8.5 2.5M2.5 8.5C2.57195 8.31127 2.64925 8.12518 2.73172 7.94192',
  d3: 'M12 8V16M16 12L8 12',
  d4: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d5: 'M4.64856 5.07876C4.78691 4.93211 4.92948 4.7895 5.0761 4.65111M7.94733 2.72939C8.12884 2.6478 8.31313 2.57128 8.5 2.5M2.73172 7.94192C2.64925 8.12518 2.57195 8.31127 2.5 8.5',
  d6: 'M11 2C11 1.44772 11.4477 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 11.4477 1.44772 11 2 11C2.55228 11 3 11.4477 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.4477 3 11 2.55228 11 2ZM9.43434 2.14361C9.63116 2.65963 9.37241 3.23751 8.85639 3.43434C8.68765 3.4987 8.52124 3.5678 8.35731 3.64149C7.85358 3.86791 7.26166 3.64311 7.03524 3.13937C6.80881 2.63564 7.03362 2.04372 7.53735 1.8173C7.73645 1.72781 7.9386 1.64386 8.14361 1.56566C8.65963 1.36883 9.23751 1.62759 9.43434 2.14361ZM5.80331 3.96469C6.1824 4.36632 6.16414 4.99922 5.76252 5.37832C5.62995 5.50345 5.50103 5.6324 5.37594 5.76499C4.99694 6.16671 4.36404 6.18514 3.96232 5.80614C3.5606 5.42715 3.54218 4.79425 3.92117 4.39253C4.07278 4.23183 4.22902 4.07555 4.38968 3.9239C4.79131 3.5448 5.42421 3.56307 5.80331 3.96469ZM3.14211 7.03001C3.64574 7.25667 3.87028 7.84868 3.64363 8.35231C3.56916 8.5178 3.49936 8.68582 3.43441 8.85621C3.23768 9.37227 2.65985 9.63114 2.14379 9.43441C1.62773 9.23768 1.36887 8.65985 1.56559 8.14379C1.64453 7.93673 1.72934 7.73257 1.81981 7.53153C2.04646 7.0279 2.63848 6.80336 3.14211 7.03001Z',
  d7: 'M12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z',
  d8: 'M12 2C6.47715 2 2 6.47715 2 12',
  d9: 'M12 7V17M17 12L7 12',
  d10: 'M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z',
  d11: 'M12 3.20454C16.8576 3.20454 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.14241 20.7955 3.20455 16.8576 3.20455 12C3.20455 11.5307 3.24121 11.0707 3.31166 10.6224L1.38081 10.319C1.29464 10.8673 1.25 11.4287 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.4288 1.25 10.8673 1.29464 10.319 1.38081L10.6224 3.31166C11.0707 3.24121 11.5307 3.20455 12 3.20454Z',
  d12: 'M6.46516 5.16397C7.17644 4.58729 7.97892 4.11975 8.84709 3.78626L8.14622 1.9617C7.08348 2.36992 6.10259 2.94169 5.23422 3.64574L6.46516 5.16397Z',
  d13: 'M3.78626 8.84708C4.11975 7.97891 4.58729 7.17644 5.16397 6.46516L3.64574 5.23422C2.94169 6.10259 2.36992 7.08348 1.9617 8.14622L3.78626 8.84708Z',
} as const;

export const IconAddCircleHalfDotStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-stroke-rounded IconAddCircleHalfDotStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAddCircleHalfDotDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-duotone-rounded IconAddCircleHalfDotDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
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

export const IconAddCircleHalfDotTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-twotone-rounded IconAddCircleHalfDotTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAddCircleHalfDotSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-solid-rounded IconAddCircleHalfDotSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconAddCircleHalfDotBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-bulk-rounded IconAddCircleHalfDotBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAddCircleHalfDotStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-stroke-sharp IconAddCircleHalfDotStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
        strokeDasharray="3 2" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAddCircleHalfDotSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-circle-half-dot-solid-sharp IconAddCircleHalfDotSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfAddCircleHalfDot: TheIconSelfPack = {
  name: 'AddCircleHalfDot',
  StrokeRounded: IconAddCircleHalfDotStrokeRounded,
  DuotoneRounded: IconAddCircleHalfDotDuotoneRounded,
  TwotoneRounded: IconAddCircleHalfDotTwotoneRounded,
  SolidRounded: IconAddCircleHalfDotSolidRounded,
  BulkRounded: IconAddCircleHalfDotBulkRounded,
  StrokeSharp: IconAddCircleHalfDotStrokeSharp,
  SolidSharp: IconAddCircleHalfDotSolidSharp,
};