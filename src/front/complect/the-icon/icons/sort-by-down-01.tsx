import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 16.3265L16.409 17.8131C17.159 18.6044 17.534 19 18 19C18.466 19 18.841 18.6044 19.591 17.8131L21 16.3265M18 18.9128L18 14.5377C18 12.3042 18 11.1875 17.5532 10.2028C17.1063 9.21804 16.2659 8.48266 14.585 7.01192L14 6.5',
  d2: 'M3 6.5C3 5.27489 3 4.66233 3.23842 4.1944C3.44815 3.78279 3.78279 3.44815 4.1944 3.23842C4.66233 3 5.27489 3 6.5 3C7.72511 3 8.33767 3 8.8056 3.23842C9.21721 3.44815 9.55185 3.78279 9.76158 4.1944C10 4.66233 10 5.27489 10 6.5C10 7.72511 10 8.33767 9.76158 8.8056C9.55185 9.21721 9.21721 9.55185 8.8056 9.76158C8.33767 10 7.72511 10 6.5 10C5.27489 10 4.66233 10 4.1944 9.76158C3.78279 9.55185 3.44815 9.21721 3.23842 8.8056C3 8.33767 3 7.72511 3 6.5Z',
  d3: 'M3 17.5C3 16.2749 3 15.6623 3.23842 15.1944C3.44815 14.7828 3.78279 14.4481 4.1944 14.2384C4.66233 14 5.27489 14 6.5 14C7.72511 14 8.33767 14 8.8056 14.2384C9.21721 14.4481 9.55185 14.7828 9.76158 15.1944C10 15.6623 10 16.2749 10 17.5C10 18.7251 10 19.3377 9.76158 19.8056C9.55185 20.2172 9.21721 20.5519 8.8056 20.7616C8.33767 21 7.72511 21 6.5 21C5.27489 21 4.66233 21 4.1944 20.7616C3.78279 20.5519 3.44815 20.2172 3.23842 19.8056C3 19.3377 3 18.7251 3 17.5Z',
  d4: 'M6.46915 2.25H6.53085C7.11718 2.24999 7.60234 2.24998 7.99782 2.28229C8.40897 2.31589 8.78878 2.38811 9.1461 2.57017C9.69882 2.8518 10.1482 3.30118 10.4298 3.8539C10.6119 4.21122 10.6841 4.59103 10.7177 5.00218C10.75 5.39766 10.75 5.88283 10.75 6.46916V6.53084C10.75 7.11717 10.75 7.60234 10.7177 7.99782C10.6841 8.40897 10.6119 8.78878 10.4298 9.1461C10.1482 9.69882 9.69882 10.1482 9.1461 10.4298C8.78878 10.6119 8.40897 10.6841 7.99782 10.7177C7.60234 10.75 7.11717 10.75 6.53084 10.75H6.46916C5.88283 10.75 5.39766 10.75 5.00218 10.7177C4.59103 10.6841 4.21122 10.6119 3.8539 10.4298C3.30118 10.1482 2.8518 9.69882 2.57017 9.1461C2.38811 8.78878 2.31589 8.40897 2.28229 7.99782C2.24998 7.60234 2.24999 7.11718 2.25 6.53085V6.46915C2.24999 5.88282 2.24998 5.39766 2.28229 5.00218C2.31589 4.59103 2.38811 4.21122 2.57017 3.8539C2.8518 3.30118 3.30118 2.8518 3.8539 2.57017C4.21122 2.38811 4.59103 2.31589 5.00218 2.28229C5.39766 2.24998 5.88282 2.24999 6.46915 2.25Z',
  d5: 'M6.46915 13.25H6.53085C7.11718 13.25 7.60234 13.25 7.99782 13.2823C8.40897 13.3159 8.78878 13.3881 9.1461 13.5702C9.69882 13.8518 10.1482 14.3012 10.4298 14.8539C10.6119 15.2112 10.6841 15.591 10.7177 16.0022C10.75 16.3977 10.75 16.8828 10.75 17.4692V17.5308C10.75 18.1172 10.75 18.6023 10.7177 18.9978C10.6841 19.409 10.6119 19.7888 10.4298 20.1461C10.1482 20.6988 9.69882 21.1482 9.1461 21.4298C8.78878 21.6119 8.40897 21.6841 7.99782 21.7177C7.60234 21.75 7.11717 21.75 6.53084 21.75H6.46916C5.88283 21.75 5.39766 21.75 5.00218 21.7177C4.59103 21.6841 4.21122 21.6119 3.8539 21.4298C3.30118 21.1482 2.8518 20.6988 2.57017 20.1461C2.38811 19.7888 2.31589 19.409 2.28229 18.9978C2.24998 18.6023 2.24999 18.1172 2.25 17.5309V17.4692C2.24999 16.8828 2.24998 16.3977 2.28229 16.0022C2.31589 15.591 2.38811 15.2112 2.57017 14.8539C2.8518 14.3012 3.30118 13.8518 3.8539 13.5702C4.21122 13.3881 4.59103 13.3159 5.00218 13.2823C5.39766 13.25 5.88282 13.25 6.46915 13.25Z',
  d6: 'M17 15.4997V14.5377C17 12.2141 16.9791 11.3578 16.6425 10.616C16.306 9.87422 15.6753 9.29463 13.9266 7.76451L13.3415 7.25259C12.9259 6.88891 12.8838 6.25715 13.2474 5.84151C13.6111 5.42587 14.2429 5.38376 14.6585 5.74744L15.4123 6.40689C16.9301 7.73405 17.9264 8.60522 18.4638 9.78956C19.0012 10.9739 19.0008 12.2974 19.0001 14.3136L19 15.4997L19.5885 15.4997C19.7641 15.4996 19.9798 15.4994 20.1562 15.5215L20.1596 15.5219C20.286 15.5377 20.8621 15.6095 21.1364 16.1751C21.4114 16.7419 21.1095 17.2421 21.0441 17.3503L20.705 17.8188C20.4104 18.1946 20.0047 18.7091 19.6242 19.1001C19.4344 19.2952 19.2171 19.4964 18.9862 19.6553C18.781 19.7965 18.4308 19.9997 18.0001 19.9997C17.5694 19.9997 17.2193 19.7965 17.014 19.6553C16.7831 19.4964 16.5658 19.2952 16.376 19.1001C15.9956 18.7091 15.5899 18.1946 15.2952 17.8188L14.9561 17.3503C14.8908 17.2421 14.5888 16.7419 14.8638 16.1751C15.1382 15.6095 15.7142 15.5377 15.8406 15.5219L15.844 15.5215C16.0204 15.4994 16.2361 15.4996 16.4117 15.4997L17 15.4997Z',
  d7: 'M10 3H3V10H10V3Z',
  d8: 'M10 14H3V21H10V14Z',
  d9: 'M15.0066 16.0246L18.0071 19.0122L21.0008 16.0004M14.0098 6.51611L17.9636 9.97204C17.9854 9.99103 17.9978 10.0185 17.9978 10.0473V18.5554',
  d10: 'M17.2933 19.2528L21.0004 15.5457L19.5862 14.1315L18.2933 15.4244V8.83852C18.2933 8.55015 18.1688 8.27583 17.9518 8.08594L13.9518 4.58594L12.6348 6.09109L16.2933 9.29228V15.4244L15.0004 14.1315L13.5862 15.5457L17.2933 19.2528Z',
};

export const IconSortByDown01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-stroke-rounded IconSortByDown01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSortByDown01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-duotone-rounded IconSortByDown01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSortByDown01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-twotone-rounded IconSortByDown01TwotoneRounded"
    >
      <path 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortByDown01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-solid-rounded IconSortByDown01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSortByDown01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-bulk-rounded IconSortByDown01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSortByDown01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-stroke-sharp IconSortByDown01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSortByDown01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-down-01-solid-sharp IconSortByDown01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
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

export const iconPackOfSortByDown01: TheIconSelfPack = {
  name: 'SortByDown01',
  StrokeRounded: IconSortByDown01StrokeRounded,
  DuotoneRounded: IconSortByDown01DuotoneRounded,
  TwotoneRounded: IconSortByDown01TwotoneRounded,
  SolidRounded: IconSortByDown01SolidRounded,
  BulkRounded: IconSortByDown01BulkRounded,
  StrokeSharp: IconSortByDown01StrokeSharp,
  SolidSharp: IconSortByDown01SolidSharp,
};