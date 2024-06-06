import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 8V12M12 12H9C7.11438 12 6.17157 12 5.58579 12.5858C5 13.1716 5 14.1144 5 16M12 12H15C16.8856 12 17.8284 12 18.4142 12.5858C19 13.1716 19 14.1144 19 16',
  d2: 'M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z',
  d3: 'M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z',
  d4: 'M10.2857 2H13.7143C15.7888 2 16 3.10993 16 5C16 6.89007 15.7888 8 13.7143 8H10.2857C8.2112 8 8 6.89007 8 5C8 3.10993 8.2112 2 10.2857 2Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8V11L15.0658 11C15.9523 10.9999 16.7161 10.9999 17.3278 11.0821C17.9833 11.1703 18.6117 11.369 19.1213 11.8787C19.631 12.3883 19.8297 13.0167 19.9179 13.6722C20.0001 14.2839 20.0001 15.0477 20 15.9342L20 16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16C18 15.0289 17.9979 14.4012 17.9357 13.9387C17.8774 13.505 17.7832 13.369 17.7071 13.2929C17.631 13.2168 17.495 13.1226 17.0613 13.0643C16.5988 13.0021 15.9711 13 15 13H9C8.02893 13 7.40122 13.0021 6.93871 13.0643C6.50497 13.1226 6.36902 13.2168 6.2929 13.2929C6.21677 13.369 6.12263 13.505 6.06431 13.9387C6.00213 14.4012 6 15.0289 6 16C6 16.5523 5.55229 17 5 17C4.44772 17 4 16.5523 4 16L4 15.9342C3.99995 15.0477 3.99991 14.2839 4.08215 13.6722C4.17028 13.0167 4.36902 12.3883 4.87868 11.8787C5.38835 11.369 6.0167 11.1703 6.67221 11.0821C7.28387 10.9999 8.04769 10.9999 8.93417 11C8.95604 11 8.97799 11 9 11H11V8C11 7.44772 11.4477 7 12 7Z',
  d6: 'M4.95063 15.25L5 15.25L5.04938 15.25H5.04943C5.71427 15.25 6.28711 15.2499 6.74585 15.3116C7.23748 15.3777 7.70875 15.5268 8.09099 15.909C8.47324 16.2913 8.6223 16.7625 8.6884 17.2542C8.75007 17.7129 8.75004 18.2858 8.75001 18.9506V19.0494C8.75004 19.7142 8.75007 20.2871 8.6884 20.7458C8.6223 21.2375 8.47324 21.7087 8.09099 22.091C7.70875 22.4732 7.23748 22.6223 6.74585 22.6884C6.2871 22.7501 5.71424 22.75 5.04937 22.75H4.95064C4.28577 22.75 3.71291 22.7501 3.25416 22.6884C2.76252 22.6223 2.29126 22.4732 1.90901 22.091C1.52677 21.7087 1.37771 21.2375 1.31161 20.7458C1.24993 20.2871 1.24996 19.7143 1.25 19.0494V19.0494L1.25 19L1.25 18.9506V18.9506C1.24996 18.2857 1.24993 17.7129 1.31161 17.2542C1.37771 16.7625 1.52677 16.2913 1.90901 15.909C2.29126 15.5268 2.76252 15.3777 3.25416 15.3116C3.71289 15.2499 4.28574 15.25 4.95058 15.25H4.95063Z',
  d7: 'M18.9506 15.25L19 15.25L19.0494 15.25H19.0494C19.7143 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V19.0494C22.75 19.7142 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H18.9506C18.2858 22.75 17.7129 22.7501 17.2542 22.6884C16.7625 22.6223 16.2913 22.4732 15.909 22.091C15.5268 21.7087 15.3777 21.2375 15.3116 20.7458C15.2499 20.2871 15.25 19.7143 15.25 19.0494V19.0494L15.25 19L15.25 18.9506V18.9506C15.25 18.2857 15.2499 17.7129 15.3116 17.2542C15.3777 16.7625 15.5268 16.2913 15.909 15.909C16.2913 15.5268 16.7625 15.3777 17.2542 15.3116C17.7129 15.2499 18.2857 15.25 18.9506 15.25H18.9506Z',
  d8: 'M7.72393 2.40181C8.22979 1.56916 9.12113 1.25 10.2857 1.25H13.7143C14.8789 1.25 15.7702 1.56916 16.2761 2.40181C16.7139 3.12249 16.75 4.08766 16.75 5C16.75 5.91234 16.7139 6.87751 16.2761 7.59819C15.7702 8.43084 14.8789 8.75 13.7143 8.75H10.2857C9.12113 8.75 8.22979 8.43084 7.72393 7.59819C7.2861 6.87751 7.25 5.91234 7.25 5C7.25 4.08766 7.2861 3.12249 7.72393 2.40181Z',
  d9: 'M11.0005 8.75V11L8.93465 11C8.04817 10.9999 7.28434 10.9999 6.67269 11.0821C6.01717 11.1703 5.38882 11.369 4.87916 11.8787C4.3695 12.3883 4.17075 13.0167 4.08262 13.6722C4.02209 14.1224 4.00614 14.655 4.00195 15.2583C4.29204 15.25 4.60942 15.25 4.95109 15.25H5.04985C5.3928 15.25 5.7113 15.25 6.00227 15.2584C6.00642 14.689 6.02009 14.2712 6.06479 13.9387C6.1231 13.505 6.21725 13.369 6.29337 13.2929C6.3695 13.2168 6.50544 13.1226 6.93918 13.0643C7.40169 13.0021 8.0294 13 9.00048 13H15.0005C15.9716 13 16.5993 13.0021 17.0618 13.0643C17.4955 13.1226 17.6315 13.2168 17.7076 13.2929C17.7837 13.369 17.8779 13.505 17.9362 13.9387C17.9809 14.2712 17.9945 14.689 17.9987 15.2584C18.2897 15.25 18.6082 15.25 18.9511 15.25H19.0499C19.3915 15.25 19.7089 15.25 19.999 15.2583C19.9948 14.655 19.9789 14.1224 19.9183 13.6722C19.8302 13.0167 19.6315 12.3883 19.1218 11.8787C18.6121 11.369 17.9838 11.1703 17.3283 11.0821C16.7166 10.9999 15.9528 10.9999 15.0663 11L13.0005 11V8.75H11.0005Z',
  d10: 'M4.95063 15.25H5.04938C5.71422 15.25 6.28712 15.2499 6.74585 15.3116C7.23749 15.3777 7.70875 15.5268 8.091 15.909C8.47324 16.2913 8.6223 16.7625 8.6884 17.2542C8.75008 17.7129 8.75004 18.2858 8.75001 18.9506V19.0494C8.75004 19.7142 8.75008 20.2871 8.6884 20.7458C8.6223 21.2375 8.47324 21.7087 8.091 22.091C7.70875 22.4732 7.23749 22.6223 6.74585 22.6884C6.2871 22.7501 5.71424 22.75 5.04937 22.75H4.95064C4.28577 22.75 3.71291 22.7501 3.25416 22.6884C2.76252 22.6223 2.29126 22.4732 1.90902 22.091C1.52677 21.7087 1.37771 21.2375 1.31161 20.7458C1.24994 20.2871 1.24997 19.7142 1.25 19.0494V18.9506C1.24997 18.2858 1.24994 17.7129 1.31161 17.2542C1.37771 16.7625 1.52677 16.2913 1.90902 15.909C2.29126 15.5268 2.76252 15.3777 3.25416 15.3116C3.71289 15.2499 4.28579 15.25 4.95063 15.25Z',
  d11: 'M18.9506 15.25H19.0494C19.7142 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V19.0494C22.75 19.7142 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H18.9506C18.2858 22.75 17.7129 22.7501 17.2542 22.6884C16.7625 22.6223 16.2913 22.4732 15.909 22.091C15.5268 21.7087 15.3777 21.2375 15.3116 20.7458C15.2499 20.2871 15.25 19.7142 15.25 19.0494V18.9506C15.25 18.2858 15.2499 17.7129 15.3116 17.2542C15.3777 16.7625 15.5268 16.2913 15.909 15.909C16.2913 15.5268 16.7625 15.3777 17.2542 15.3116C17.7129 15.2499 18.2858 15.25 18.9506 15.25Z',
  d12: 'M7.72394 2.40181C8.2298 1.56916 9.12114 1.25 10.2857 1.25H13.7143C14.8789 1.25 15.7702 1.56916 16.2761 2.40181C16.7139 3.12249 16.75 4.08766 16.75 5C16.75 5.91234 16.7139 6.87751 16.2761 7.59819C15.7702 8.43084 14.8789 8.75 13.7143 8.75H10.2857C9.12114 8.75 8.2298 8.43084 7.72394 7.59819C7.2861 6.87751 7.25001 5.91234 7.25001 5C7.25001 4.08766 7.2861 3.12249 7.72394 2.40181Z',
  d13: 'M8 22V16H2V22H8Z',
  d14: 'M22 22V16H16V22H22Z',
  d15: 'M12 8V12M12 12H5.00004L5 16M12 12H19V16',
  d16: 'M16 8V2H8V8H16Z',
  d17: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16V22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16Z',
  d18: 'M15.25 16C15.25 15.5858 15.5858 15.25 16 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V16Z',
  d19: 'M11 11V8H13V11H19C19.5523 11 20 11.4477 20 12V16H18V13H6.00003L6 16L4 16L4.00004 12C4.00004 11.4477 4.44776 11 5.00004 11H11Z',
  d20: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8V2Z',
};

export const IconHierarchySquare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-stroke-rounded IconHierarchySquare02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-duotone-rounded IconHierarchySquare02DuotoneRounded"
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-twotone-rounded IconHierarchySquare02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-solid-rounded IconHierarchySquare02SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-bulk-rounded IconHierarchySquare02BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-stroke-sharp IconHierarchySquare02StrokeSharp"
    >
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-02-solid-sharp IconHierarchySquare02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare02: TheIconSelfPack = {
  name: 'HierarchySquare02',
  StrokeRounded: IconHierarchySquare02StrokeRounded,
  DuotoneRounded: IconHierarchySquare02DuotoneRounded,
  TwotoneRounded: IconHierarchySquare02TwotoneRounded,
  SolidRounded: IconHierarchySquare02SolidRounded,
  BulkRounded: IconHierarchySquare02BulkRounded,
  StrokeSharp: IconHierarchySquare02StrokeSharp,
  SolidSharp: IconHierarchySquare02SolidSharp,
};