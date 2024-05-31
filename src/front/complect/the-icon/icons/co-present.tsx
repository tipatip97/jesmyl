import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.58984 18.177C3.44055 18.0742 3.30166 17.9585 3.17157 17.8284C2 16.6569 2 14.7712 2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11C22 14.7712 22 16.6569 20.8284 17.8284C20.6983 17.9585 20.5595 18.0742 20.4102 18.177',
  d2: 'M8.6863 16.926C7.82171 17.4525 5.55483 18.5276 6.93552 19.8729C7.60997 20.53 8.36113 21 9.30553 21H14.6945C15.6389 21 16.39 20.53 17.0645 19.8729C18.4452 18.5276 16.1783 17.4525 15.3137 16.926C13.2863 15.6913 10.7137 15.6913 8.6863 16.926Z',
  d3: 'M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z',
  d4: 'M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C3.30166 17.9585 3.44055 18.0742 3.58984 18.177H6.88808C7.28992 17.7367 7.92334 17.3701 8.39168 17.0991C8.50044 17.0361 8.60031 16.9784 8.6863 16.926C10.7137 15.6913 13.2863 15.6913 15.3137 16.926C15.3997 16.9784 15.4996 17.0361 15.6083 17.0991C16.0767 17.3701 16.7101 17.7367 17.1119 18.177H20.4102C20.5595 18.0742 20.6983 17.9585 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3ZM14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z',
  d5: 'M9.92684 2H14.0732C15.8966 1.99997 17.3664 1.99995 18.5223 2.15537C19.7225 2.31672 20.733 2.66191 21.5355 3.46447C22.3381 4.26702 22.6833 5.27752 22.8446 6.47767C23.0001 7.63363 23 9.1034 23 10.9269V11.0731C23 12.8966 23.0001 14.3664 22.8446 15.5223C22.6833 16.7225 22.3381 17.733 21.5355 18.5355C21.3628 18.7083 21.1771 18.863 20.9773 19.0006C20.5224 19.3138 19.8998 19.199 19.5865 18.7441C19.2733 18.2892 19.3882 17.6665 19.843 17.3533C19.9418 17.2853 20.0339 17.2088 20.1213 17.1213C20.4903 16.7523 20.7309 16.2342 20.8625 15.2558C20.9979 14.2487 21 12.9139 21 11C21 9.08611 20.9979 7.7513 20.8625 6.74416C20.7309 5.7658 20.4903 5.2477 20.1213 4.87868C19.7523 4.50966 19.2342 4.26907 18.2558 4.13753C17.2487 4.00213 15.9139 4 14 4H10C8.08611 4 6.7513 4.00213 5.74416 4.13753C4.76579 4.26907 4.2477 4.50966 3.87868 4.87868C3.50966 5.2477 3.26907 5.76579 3.13753 6.74416C3.00213 7.7513 3 9.08611 3 11C3 12.9139 3.00213 14.2487 3.13753 15.2558C3.26907 16.2342 3.50966 16.7523 3.87868 17.1213C3.96612 17.2088 4.05822 17.2853 4.15697 17.3533C4.61185 17.6665 4.72669 18.2892 4.41347 18.7441C4.10025 19.199 3.47759 19.3138 3.02271 19.0006C2.82288 18.863 2.6372 18.7083 2.46447 18.5355C1.66191 17.733 1.31672 16.7225 1.15537 15.5223C0.999951 14.3664 0.999973 12.8966 1 11.0732V10.9268C0.999973 9.10338 0.999951 7.63362 1.15537 6.47767C1.31672 5.27752 1.66191 4.26702 2.46447 3.46447C3.26702 2.66191 4.27752 2.31672 5.47767 2.15537C6.63362 1.99995 8.10338 1.99997 9.92684 2Z',
  d6: 'M8.23443 16.7038C7.25195 17.3882 4.67595 18.7858 6.2449 20.5347C7.01133 21.389 7.86492 22 8.9381 22H15.0619C16.1351 22 16.9887 21.389 17.7551 20.5347C19.3241 18.7858 16.7481 17.3882 15.7656 16.7038C13.4617 15.0987 10.5383 15.0987 8.23443 16.7038Z',
  d7: 'M15.25 11.25C15.25 13.0449 13.7949 14.5 12 14.5C10.2051 14.5 8.75 13.0449 8.75 11.25C8.75 9.45507 10.2051 8 12 8C13.7949 8 15.25 9.45507 15.25 11.25Z',
  d8: 'M19 18H22V3H2V18H5',
  d9: 'M7 21H17C17 18.2386 14.7614 16 12 16C9.23858 16 7 18.2386 7 21Z',
  d10: 'M1.25 3.22059C1.25 2.68455 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68455 22.75 3.22059V17.7794C22.75 18.3155 22.3125 18.75 21.7727 18.75H18.8409V16.8088H20.7955V4.19118H3.20455V16.8088H5.15909V18.75H2.22727C1.68754 18.75 1.25 18.3155 1.25 17.7794V3.22059Z',
  d11: 'M8.75 11C8.75 9.20507 10.2051 7.75 12 7.75C13.7949 7.75 15.25 9.20507 15.25 11C15.25 12.7949 13.7949 14.25 12 14.25C10.2051 14.25 8.75 12.7949 8.75 11Z',
  d12: 'M6.25 21C6.25 17.8244 8.82436 15.25 12 15.25C15.1756 15.25 17.75 17.8244 17.75 21V21.75H6.25V21Z',
} as const;

export const IconCoPresentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-stroke-rounded IconCoPresentStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-duotone-rounded IconCoPresentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-twotone-rounded IconCoPresentTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-solid-rounded IconCoPresentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-bulk-rounded IconCoPresentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-stroke-sharp IconCoPresentStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoPresentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="co-present-solid-sharp IconCoPresentSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCoPresent: TheIconSelfPack = {
  name: 'CoPresent',
  StrokeRounded: IconCoPresentStrokeRounded,
  DuotoneRounded: IconCoPresentDuotoneRounded,
  TwotoneRounded: IconCoPresentTwotoneRounded,
  SolidRounded: IconCoPresentSolidRounded,
  BulkRounded: IconCoPresentBulkRounded,
  StrokeSharp: IconCoPresentStrokeSharp,
  SolidSharp: IconCoPresentSolidSharp,
};