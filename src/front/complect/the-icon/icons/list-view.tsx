import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z',
  d2: 'M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z',
  d3: 'M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z',
  d4: 'M2.53168 9.32334C2.79738 9.26497 3.0942 9.25 3.4 9.25H20.6C20.9058 9.25 21.2026 9.26497 21.4683 9.32334C21.7425 9.38357 22.0291 9.49978 22.2647 9.73532C22.5002 9.97086 22.6164 10.2575 22.6767 10.5317C22.735 10.7974 22.75 11.0942 22.75 11.4V12.6C22.75 12.9058 22.735 13.2026 22.6767 13.4683C22.6164 13.7425 22.5002 14.0291 22.2647 14.2647C22.0291 14.5002 21.7425 14.6164 21.4683 14.6767C21.2026 14.735 20.9058 14.75 20.6 14.75H3.4C3.0942 14.75 2.79738 14.735 2.53168 14.6767C2.25749 14.6164 1.97086 14.5002 1.73532 14.2647C1.49978 14.0291 1.38357 13.7425 1.32334 13.4683C1.26497 13.2026 1.25 12.9058 1.25 12.6V11.4C1.25 11.0942 1.26497 10.7974 1.32334 10.5317C1.38357 10.2575 1.49978 9.97086 1.73532 9.73532C1.97086 9.49978 2.25749 9.38357 2.53168 9.32334Z',
  d5: 'M2.53168 1.32334C2.79738 1.26497 3.0942 1.25 3.4 1.25H20.6C20.9058 1.25 21.2026 1.26497 21.4683 1.32334C21.7425 1.38357 22.0291 1.49978 22.2647 1.73532C22.5002 1.97086 22.6164 2.25749 22.6767 2.53168C22.735 2.79738 22.75 3.0942 22.75 3.4V4.6C22.75 4.9058 22.735 5.20262 22.6767 5.46832C22.6164 5.74251 22.5002 6.02914 22.2647 6.26468C22.0291 6.50022 21.7425 6.61643 21.4683 6.67666C21.2026 6.73503 20.9058 6.75 20.6 6.75H3.4C3.0942 6.75 2.79738 6.73503 2.53168 6.67666C2.25749 6.61643 1.97086 6.50022 1.73532 6.26468C1.49978 6.02914 1.38357 5.74251 1.32334 5.46832C1.26497 5.20262 1.25 4.9058 1.25 4.6V3.4C1.25 3.0942 1.26497 2.79738 1.32334 2.53168C1.38357 2.25749 1.49978 1.97086 1.73532 1.73532C1.97086 1.49978 2.25749 1.38357 2.53168 1.32334Z',
  d6: 'M2.53168 17.3233C2.79738 17.265 3.0942 17.25 3.4 17.25H20.6C20.9058 17.25 21.2026 17.265 21.4683 17.3233C21.7425 17.3836 22.0291 17.4998 22.2647 17.7353C22.5002 17.9709 22.6164 18.2575 22.6767 18.5317C22.735 18.7974 22.75 19.0942 22.75 19.4V20.6C22.75 20.9058 22.735 21.2026 22.6767 21.4683C22.6164 21.7425 22.5002 22.0291 22.2647 22.2647C22.0291 22.5002 21.7425 22.6164 21.4683 22.6767C21.2026 22.735 20.9058 22.75 20.6 22.75H3.4C3.0942 22.75 2.79738 22.735 2.53168 22.6767C2.25749 22.6164 1.97086 22.5002 1.73532 22.2647C1.49978 22.0291 1.38357 21.7425 1.32334 21.4683C1.26497 21.2026 1.25 20.9058 1.25 20.6V19.4C1.25 19.0942 1.26497 18.7974 1.32334 18.5317C1.38357 18.2575 1.49978 17.9709 1.73532 17.7353C1.97086 17.4998 2.25749 17.3836 2.53168 17.3233Z',
  d7: 'M22 2H2V6H22V2Z',
  d8: 'M22 10H2V14H22V10Z',
  d9: 'M22 18H2V22H22V18Z',
  d10: 'M1.25 1.25H22.75V6.75H1.25V1.25Z',
  d11: 'M1.25 9.25H22.75V14.75H1.25V9.25Z',
  d12: 'M1.25 17.25H22.75V22.75H1.25V17.25Z',
} as const;

export const IconListViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-stroke-rounded IconListViewStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconListViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-duotone-rounded IconListViewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconListViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-twotone-rounded IconListViewTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconListViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-solid-rounded IconListViewSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconListViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-bulk-rounded IconListViewBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconListViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-stroke-sharp IconListViewStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconListViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="list-view-solid-sharp IconListViewSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfListView: TheIconSelfPack = {
  name: 'ListView',
  StrokeRounded: IconListViewStrokeRounded,
  DuotoneRounded: IconListViewDuotoneRounded,
  TwotoneRounded: IconListViewTwotoneRounded,
  SolidRounded: IconListViewSolidRounded,
  BulkRounded: IconListViewBulkRounded,
  StrokeSharp: IconListViewStrokeSharp,
  SolidSharp: IconListViewSolidSharp,
};