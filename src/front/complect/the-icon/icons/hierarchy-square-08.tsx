import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.19868 9.6H4.80132C2.79237 9.6 1.43791 11.7484 2.22927 13.6796C2.33951 13.9486 2.59243 14.1231 2.87228 14.1231H3.36437C3.53023 14.1231 3.67481 14.2411 3.71504 14.4094L4.34854 17.0597C4.48063 17.6123 4.95537 18 5.5 18C6.04463 18 6.51937 17.6123 6.65146 17.0597L7.28496 14.4094C7.32519 14.2411 7.46977 14.1231 7.63563 14.1231H8.12772C8.40757 14.1231 8.66049 13.9486 8.77073 13.6796C9.56209 11.7484 8.20763 9.6 6.19868 9.6Z',
  d2: 'M7.25 7.8C7.25 8.79411 6.4665 9.6 5.5 9.6C4.5335 9.6 3.75 8.79411 3.75 7.8C3.75 6.80589 4.5335 6 5.5 6C6.4665 6 7.25 6.80589 7.25 7.8Z',
  d3: 'M16 5C16 3.58579 16 2.87868 16.4393 2.43934C16.8787 2 17.5858 2 19 2C20.4142 2 21.1213 2 21.5607 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.5607 7.56066C21.1213 8 20.4142 8 19 8C17.5858 8 16.8787 8 16.4393 7.56066C16 7.12132 16 6.41421 16 5Z',
  d4: 'M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z',
  d5: 'M16 5H15C12.547 5.1828 12 6.20315 12 9.65278L12 14.3472C12 17.7969 12.547 18.8172 15 19H16',
  d6: 'M6.19868 9.6H5.5H4.80132C2.79237 9.6 1.43791 11.7484 2.22927 13.6796C2.33951 13.9486 2.59243 14.1231 2.87228 14.1231H3.36437C3.53023 14.1231 3.67481 14.2411 3.71504 14.4094L4.34854 17.0597C4.48063 17.6123 4.95537 18 5.5 18C6.04463 18 6.51937 17.6123 6.65146 17.0597L7.28496 14.4094C7.32519 14.2411 7.46977 14.1231 7.63563 14.1231H8.12772C8.40757 14.1231 8.66049 13.9486 8.77073 13.6796C9.56209 11.7484 8.20763 9.6 6.19868 9.6Z',
  d7: 'M5.5 9.6C6.4665 9.6 7.25 8.79411 7.25 7.8C7.25 6.80589 6.4665 6 5.5 6C4.5335 6 3.75 6.80589 3.75 7.8C3.75 8.79411 4.5335 9.6 5.5 9.6ZM5.5 9.6H4.80132C2.79237 9.6 1.43791 11.7484 2.22927 13.6796C2.33951 13.9486 2.59243 14.1231 2.87228 14.1231H3.36437C3.53023 14.1231 3.67481 14.2411 3.71504 14.4094L4.34854 17.0597C4.48063 17.6123 4.95537 18 5.5 18C6.04463 18 6.51937 17.6123 6.65146 17.0597L7.28496 14.4094C7.32519 14.2411 7.46977 14.1231 7.63563 14.1231H8.12772C8.40757 14.1231 8.66049 13.9486 8.77073 13.6796C9.56209 11.7484 8.20763 9.6 6.19868 9.6H5.5Z',
  d8: 'M7.62034 9.15046C7.86153 8.75668 7.99997 8.2926 7.99997 7.8C7.99997 6.41173 6.90045 5.25 5.49997 5.25C4.09948 5.25 2.99997 6.41173 2.99997 7.8C2.99997 8.2926 3.1384 8.75668 3.37959 9.15046C1.65692 9.9245 0.754934 12.0597 1.53524 13.964C1.75499 14.5003 2.27275 14.8731 2.87225 14.8731H3.0547L3.61905 17.2341C3.82683 18.1033 4.58724 18.75 5.49997 18.75C6.41269 18.75 7.1731 18.1033 7.38088 17.2341L7.94523 14.8731H8.12768C8.72718 14.8731 9.24494 14.5003 9.46469 13.964C10.245 12.0597 9.34301 9.9245 7.62034 9.15046ZM4.5 7.8C4.5 7.20004 4.96749 6.75 5.5 6.75C6.03251 6.75 6.5 7.20004 6.5 7.8C6.5 8.39996 6.03251 8.85 5.5 8.85C4.96749 8.85 4.5 8.39996 4.5 7.8Z',
  d9: 'M18.9506 1.25L19 1.25L19.0494 1.25H19.0494C19.7143 1.24996 20.2871 1.24993 20.7458 1.31161C21.2375 1.37771 21.7087 1.52677 22.091 1.90901C22.4732 2.29126 22.6223 2.76252 22.6884 3.25416C22.7501 3.7129 22.75 4.28575 22.75 4.95061V4.95062V5.04939V5.0494C22.75 5.71425 22.7501 6.28711 22.6884 6.74585C22.6223 7.23748 22.4732 7.70875 22.091 8.09099C21.7087 8.47324 21.2375 8.6223 20.7458 8.6884C20.2871 8.75007 19.7142 8.75004 19.0494 8.75001H18.9506C18.2858 8.75004 17.7129 8.75007 17.2542 8.6884C16.7625 8.6223 16.2913 8.47324 15.909 8.09099C15.5268 7.70875 15.3777 7.23748 15.3116 6.74585C15.2499 6.28711 15.25 5.71427 15.25 5.04943V5.04938L15.25 5L15.25 4.95063V4.95058C15.25 4.28574 15.2499 3.71289 15.3116 3.25416C15.3777 2.76252 15.5268 2.29126 15.909 1.90901C16.2913 1.52677 16.7625 1.37771 17.2542 1.31161C17.7129 1.24993 18.2857 1.24996 18.9506 1.25H18.9506Z',
  d10: 'M18.9506 15.25L19 15.25L19.0494 15.25H19.0494C19.7143 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V18.9506V19.0494V19.0494C22.75 19.7143 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H18.9506C18.2858 22.75 17.7129 22.7501 17.2542 22.6884C16.7625 22.6223 16.2913 22.4732 15.909 22.091C15.5268 21.7087 15.3777 21.2375 15.3116 20.7458C15.2499 20.2871 15.25 19.7143 15.25 19.0494V19.0494L15.25 19L15.25 18.9506V18.9506C15.25 18.2857 15.2499 17.7129 15.3116 17.2542C15.3777 16.7625 15.5268 16.2913 15.909 15.909C16.2913 15.5268 16.7625 15.3777 17.2542 15.3116C17.7129 15.2499 18.2857 15.25 18.9506 15.25H18.9506Z',
  d11: 'M14.9257 4.00277C14.9504 4.00092 14.9752 4 15 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H15.0383C13.946 6.08621 13.613 6.33566 13.428 6.63147C13.1566 7.06568 13 7.90075 13 9.65278L13 14.3472C13 16.0992 13.1566 16.9343 13.428 17.3685C13.613 17.6643 13.946 17.9138 15.0383 18H16C16.5523 18 17 18.4477 17 19C17 19.5523 16.5523 20 16 20H15C14.9752 20 14.9504 19.9991 14.9257 19.9972C13.5937 19.898 12.432 19.5481 11.7322 18.4288C11.1169 17.4447 11 16.0448 11 14.3472L11 9.65278C11 7.95518 11.1169 6.55526 11.7322 5.57119C12.432 4.45194 13.5937 4.10203 14.9257 4.00277Z',
  d12: 'M15.2584 4H15C14.9752 4 14.9504 4.00092 14.9257 4.00277C13.5937 4.10203 12.432 4.45194 11.7322 5.57119C11.1169 6.55526 11 7.95518 11 9.65278V14.3472C11 16.0448 11.1169 17.4447 11.7322 18.4288C12.432 19.5481 13.5937 19.898 14.9257 19.9972C14.9504 19.9991 14.9752 20 15 20H15.2584C15.25 19.7095 15.25 19.3916 15.25 19.0494V18.9506C15.25 18.6084 15.25 18.2905 15.2584 18H15.0383C13.946 17.9138 13.613 17.6643 13.428 17.3685C13.1566 16.9343 13 16.0992 13 14.3472L13 9.65278C13 7.90075 13.1566 7.06568 13.428 6.63147C13.613 6.33566 13.946 6.08621 15.0383 6H15.2584C15.25 5.70951 15.25 5.39163 15.25 5.04938V4.95063C15.25 4.60838 15.25 4.29049 15.2584 4Z',
  d13: 'M8 7.8C8 6.41173 6.90049 5.25 5.5 5.25C4.09951 5.25 3 6.41173 3 7.8C3 9.18827 4.09951 10.3501 5.5 10.3501C6.90049 10.3501 8 9.18827 8 7.8Z',
  d14: 'M1.53524 13.9639C0.754934 12.0597 1.65692 9.92444 3.37959 9.15039L7.62038 9.15041C9.34302 9.92447 10.245 12.0597 9.46469 13.9639C9.24494 14.5002 8.72718 14.873 8.12768 14.873H7.94523L7.38088 17.234C7.1731 18.1033 6.41269 18.7499 5.49997 18.7499C4.58724 18.7499 3.82683 18.1033 3.61905 17.234L3.0547 14.873H2.87225C2.27275 14.873 1.75499 14.5002 1.53524 13.9639Z',
  d15: 'M5.50113 9.6C6.46763 9.6 7.25113 8.79411 7.25113 7.8C7.25113 6.80589 6.46763 6 5.50113 6C4.53463 6 3.75113 6.80589 3.75113 7.8C3.75113 8.79411 4.53463 9.6 5.50113 9.6ZM5.50113 9.6C7.43383 9.6 9.00113 11.1668 9.00113 13.0995V14H7.5022L6.5022 18H4.5022L3.5022 14H2.0022V13.0995C2.0022 11.1668 3.56843 9.6 5.50113 9.6Z',
  d16: 'M22 22V16H16V22H22Z',
  d17: 'M22 8V2H16V8H22Z',
  d18: 'M16 5L12 5.00002V19H16',
  d19: 'M7.49105 9.34357C7.81228 8.91247 8.00137 8.37572 8.00137 7.8C8.00137 6.41173 6.90186 5.25 5.50137 5.25C4.10088 5.25 3.00137 6.41173 3.00137 7.8C3.00137 8.37575 3.19048 8.91254 3.51175 9.34365C2.16762 10.0573 1.25244 11.4715 1.25244 13.0995V14.75H2.91686L3.91686 18.75H7.08802L8.08802 14.75H9.75137V13.0995C9.75137 11.4713 8.83551 10.0571 7.49105 9.34357ZM4.50049 7.8C4.50049 7.20004 4.96798 6.75 5.50049 6.75C6.033 6.75 6.50049 7.20004 6.50049 7.8C6.50049 8.39996 6.033 8.85 5.50049 8.85C4.96798 8.85 4.50049 8.39996 4.50049 7.8Z',
  d20: 'M15.25 16C15.25 15.5858 15.5858 15.25 16 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V16Z',
  d21: 'M15.25 2C15.25 1.58579 15.5858 1.25 16 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V8C22.75 8.41421 22.4142 8.75 22 8.75H16C15.5858 8.75 15.25 8.41421 15.25 8V2Z',
  d22: 'M13 6.00002L16 6L16 4L12 4.00002C11.4477 4.00003 11 4.44774 11 5.00002V19C11 19.5523 11.4477 20 12 20H16V18H13V6.00002Z',
};

export const IconHierarchySquare08StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-stroke-rounded IconHierarchySquare08StrokeRounded"
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

export const IconHierarchySquare08DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-duotone-rounded IconHierarchySquare08DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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

export const IconHierarchySquare08TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-twotone-rounded IconHierarchySquare08TwotoneRounded"
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

export const IconHierarchySquare08SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-solid-rounded IconHierarchySquare08SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconHierarchySquare08BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-bulk-rounded IconHierarchySquare08BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare08StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-stroke-sharp IconHierarchySquare08StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare08SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-08-solid-sharp IconHierarchySquare08SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare08: TheIconSelfPack = {
  name: 'HierarchySquare08',
  StrokeRounded: IconHierarchySquare08StrokeRounded,
  DuotoneRounded: IconHierarchySquare08DuotoneRounded,
  TwotoneRounded: IconHierarchySquare08TwotoneRounded,
  SolidRounded: IconHierarchySquare08SolidRounded,
  BulkRounded: IconHierarchySquare08BulkRounded,
  StrokeSharp: IconHierarchySquare08StrokeSharp,
  SolidSharp: IconHierarchySquare08SolidSharp,
};