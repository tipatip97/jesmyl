import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 6C8 4.11438 8 3.17157 8.58579 2.58579C9.17157 2 10.1144 2 12 2C13.8856 2 14.8284 2 15.4142 2.58579C16 3.17157 16 4.11438 16 6C16 7.88562 16 8.82843 15.4142 9.41421C14.8284 10 13.8856 10 12 10C10.1144 10 9.17157 10 8.58579 9.41421C8 8.82843 8 7.88562 8 6Z',
  d2: 'M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z',
  d3: 'M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z',
  d4: 'M19 16C18.8172 13.547 17.7969 13 14.3472 13L12 13L9.65278 13C6.20315 13 5.1828 13.547 5 16',
  d5: 'M12.052 1.25C12.9505 1.24997 13.6997 1.24995 14.2945 1.32991C14.9223 1.41432 15.4891 1.59999 15.9445 2.05546C16.4 2.51093 16.5857 3.07773 16.6701 3.70552C16.7501 4.3003 16.75 5.04951 16.75 5.94798V5.94801V6.052V6.05203C16.75 6.9505 16.7501 7.69971 16.6701 8.29448C16.5857 8.92228 16.4 9.48908 15.9445 9.94455C15.4891 10.4 14.9223 10.5857 14.2945 10.6701C13.6997 10.7501 12.9505 10.75 12.052 10.75H12.052H11.948H11.948C11.0495 10.75 10.3003 10.7501 9.70552 10.6701C9.07773 10.5857 8.51093 10.4 8.05546 9.94455C7.59999 9.48908 7.41432 8.92228 7.32991 8.29448C7.24995 7.69971 7.24997 6.9505 7.25 6.05203V6.052V5.948V5.94797C7.24997 5.04951 7.24995 4.3003 7.32991 3.70552C7.41432 3.07773 7.59999 2.51093 8.05546 2.05546C8.51093 1.59999 9.07773 1.41432 9.70552 1.32991C10.3003 1.24995 11.0495 1.24997 11.948 1.25H11.948H12.052H12.052Z',
  d6: 'M4.95063 15.25L5 15.25L5.04938 15.25H5.04943C5.71427 15.25 6.28711 15.2499 6.74585 15.3116C7.23748 15.3777 7.70875 15.5268 8.09099 15.909C8.47324 16.2913 8.6223 16.7625 8.6884 17.2542C8.75007 17.7129 8.75004 18.2858 8.75001 18.9506V18.9506V19.0494V19.0494C8.75004 19.7143 8.75007 20.2871 8.6884 20.7458C8.6223 21.2375 8.47324 21.7087 8.09099 22.091C7.70875 22.4732 7.23748 22.6223 6.74585 22.6884C6.2871 22.7501 5.71424 22.75 5.04937 22.75H4.95064C4.28577 22.75 3.71291 22.7501 3.25416 22.6884C2.76252 22.6223 2.29126 22.4732 1.90901 22.091C1.52677 21.7087 1.37771 21.2375 1.31161 20.7458C1.24993 20.2871 1.24996 19.7143 1.25 19.0494V19.0494L1.25 19L1.25 18.9506V18.9506C1.24996 18.2857 1.24993 17.7129 1.31161 17.2542C1.37771 16.7625 1.52677 16.2913 1.90901 15.909C2.29126 15.5268 2.76252 15.3777 3.25416 15.3116C3.71289 15.2499 4.28574 15.25 4.95058 15.25H4.95063Z',
  d7: 'M18.9506 15.25L19 15.25L19.0494 15.25H19.0494C19.7143 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V18.9506V19.0494V19.0494C22.75 19.7143 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H18.9506C18.2858 22.75 17.7129 22.7501 17.2542 22.6884C16.7625 22.6223 16.2913 22.4732 15.909 22.091C15.5268 21.7087 15.3777 21.2375 15.3116 20.7458C15.2499 20.2871 15.25 19.7143 15.25 19.0494V19.0494L15.25 19L15.25 18.9506V18.9506C15.25 18.2857 15.2499 17.7129 15.3116 17.2542C15.3777 16.7625 15.5268 16.2913 15.909 15.909C16.2913 15.5268 16.7625 15.3777 17.2542 15.3116C17.7129 15.2499 18.2857 15.25 18.9506 15.25H18.9506Z',
  d8: 'M19.0743 16.9972C18.5235 17.0383 18.0438 16.6251 18.0027 16.0743C17.9192 14.9533 17.6675 14.615 17.3685 14.428C16.9343 14.1566 16.0992 14 14.3472 14L9.65273 14C7.90071 14 7.06563 14.1566 6.63142 14.428C6.33239 14.615 6.08073 14.9533 5.99719 16.0743C5.95615 16.6251 5.4764 17.0383 4.92564 16.9972C4.37488 16.9562 3.96168 16.4764 4.00272 15.9257C4.10198 14.5937 4.45189 13.432 5.57114 12.7322C6.55522 12.1169 7.95513 12 9.65273 12L14.3472 12C16.0448 12 17.4447 12.1169 18.4288 12.7322C19.548 13.432 19.8979 14.5937 19.9972 15.9257C20.0382 16.4764 19.625 16.9562 19.0743 16.9972Z',
  d9: 'M19.9208 15.2564C19.6519 15.2501 19.3605 15.2501 19.0489 15.2501H18.9502C18.5626 15.2501 18.2063 15.2501 17.8856 15.2623C17.7641 14.7647 17.5777 14.5591 17.368 14.428C16.9338 14.1566 16.0987 14 14.3467 14H9.65227C7.90024 14 7.06516 14.1566 6.63095 14.428C6.42127 14.5591 6.23487 14.7647 6.11341 15.2623C5.79275 15.2501 5.43645 15.2501 5.04891 15.2501H4.95016C4.63852 15.2501 4.34708 15.2501 4.07812 15.2564C4.24427 14.2086 4.64351 13.3119 5.57068 12.7322C6.55475 12.1169 7.95466 12 9.65227 12H14.3467C16.0443 12 17.4442 12.1169 18.4283 12.7322C19.3555 13.3119 19.7547 14.2086 19.9208 15.2564Z',
  d10: 'M8 22V16H2V22H8Z',
  d11: 'M22 22V16H16V22H22Z',
  d12: 'M16 10V2H8V10H16Z',
  d13: 'M19 16L18.9997 13L5 13.0001L5 16',
  d14: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16V22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16Z',
  d15: 'M15.25 16C15.25 15.5858 15.5858 15.25 16 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V16Z',
  d16: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10V2Z',
  d17: 'M6 14.0001V16H4L4 13.0001C4 12.4478 4.44771 12.0001 4.99999 12.0001L18.9997 12C19.552 12 19.9997 12.4477 19.9997 12.9999L20 15.9999L18 16.0001L17.9998 14L6 14.0001Z',
} as const;

export const IconHierarchySquare03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-stroke-rounded IconHierarchySquare03StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-duotone-rounded IconHierarchySquare03DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-twotone-rounded IconHierarchySquare03TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-solid-rounded IconHierarchySquare03SolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-bulk-rounded IconHierarchySquare03BulkRounded"
    >
      <path 
        d={d.d9} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-stroke-sharp IconHierarchySquare03StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-03-solid-sharp IconHierarchySquare03SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare03: TheIconSelfPack = {
  name: 'HierarchySquare03',
  StrokeRounded: IconHierarchySquare03StrokeRounded,
  DuotoneRounded: IconHierarchySquare03DuotoneRounded,
  TwotoneRounded: IconHierarchySquare03TwotoneRounded,
  SolidRounded: IconHierarchySquare03SolidRounded,
  BulkRounded: IconHierarchySquare03BulkRounded,
  StrokeSharp: IconHierarchySquare03StrokeSharp,
  SolidSharp: IconHierarchySquare03SolidSharp,
};