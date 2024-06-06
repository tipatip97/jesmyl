import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 7.67359L16.409 6.18704C17.159 5.39576 17.534 5.00012 18 5.00012C18.466 5.00012 18.841 5.39576 19.591 6.18704L21 7.67359M18 5.08736L18 9.46244C18 11.6959 18 12.8126 17.5532 13.7974C17.1063 14.7821 16.2659 15.5175 14.585 16.9882L14 17.5001',
  d2: 'M3 6.5C3 5.27489 3 4.66233 3.23842 4.1944C3.44815 3.78279 3.78279 3.44815 4.1944 3.23842C4.66233 3 5.27489 3 6.5 3C7.72511 3 8.33767 3 8.8056 3.23842C9.21721 3.44815 9.55185 3.78279 9.76158 4.1944C10 4.66233 10 5.27489 10 6.5C10 7.72511 10 8.33767 9.76158 8.8056C9.55185 9.21721 9.21721 9.55185 8.8056 9.76158C8.33767 10 7.72511 10 6.5 10C5.27489 10 4.66233 10 4.1944 9.76158C3.78279 9.55185 3.44815 9.21721 3.23842 8.8056C3 8.33767 3 7.72511 3 6.5Z',
  d3: 'M3 17.5C3 16.2749 3 15.6623 3.23842 15.1944C3.44815 14.7828 3.78279 14.4481 4.1944 14.2384C4.66233 14 5.27489 14 6.5 14C7.72511 14 8.33767 14 8.8056 14.2384C9.21721 14.4481 9.55185 14.7828 9.76158 15.1944C10 15.6623 10 16.2749 10 17.5C10 18.7251 10 19.3377 9.76158 19.8056C9.55185 20.2172 9.21721 20.5519 8.8056 20.7616C8.33767 21 7.72511 21 6.5 21C5.27489 21 4.66233 21 4.1944 20.7616C3.78279 20.5519 3.44815 20.2172 3.23842 19.8056C3 19.3377 3 18.7251 3 17.5Z',
  d4: 'M17 8.5V9.46204C17 11.7857 16.9791 12.642 16.6425 13.3837C16.306 14.1255 15.6753 14.7051 13.9266 16.2352L13.3415 16.7471C12.9259 17.1108 12.8838 17.7426 13.2474 18.1582C13.6111 18.5739 14.2429 18.616 14.6585 18.2523L15.4123 17.5928C16.9301 16.2657 17.9264 15.3945 18.4638 14.2102C19.0012 13.0258 19.0008 11.7024 19.0001 9.68615L19 8.5L19.5885 8.50002C19.7641 8.50014 19.9798 8.5003 20.1562 8.47823L20.1596 8.47781C20.286 8.46204 20.8621 8.39021 21.1364 7.82461C21.4114 7.25779 21.1095 6.75765 21.0441 6.64944L20.705 6.18095C20.4104 5.80512 20.0047 5.29067 19.6242 4.89966C19.4344 4.70455 19.2171 4.50331 18.9862 4.34447C18.781 4.20326 18.4308 4 18.0001 4C17.5694 4 17.2193 4.20326 17.014 4.34447C16.7831 4.50331 16.5658 4.70455 16.376 4.89966C15.9956 5.29067 15.5899 5.80513 15.2952 6.18095L14.9561 6.64944C14.8908 6.75765 14.5888 7.25779 14.8638 7.82461C15.1382 8.39021 15.7142 8.46204 15.8406 8.47781L15.844 8.47823C16.0204 8.5003 16.2361 8.50014 16.4117 8.50002L17 8.5Z',
  d5: 'M6.46915 2.25H6.53085C7.11718 2.24999 7.60234 2.24998 7.99782 2.28229C8.40897 2.31589 8.78878 2.38811 9.1461 2.57017C9.69882 2.8518 10.1482 3.30118 10.4298 3.8539C10.6119 4.21122 10.6841 4.59103 10.7177 5.00218C10.75 5.39766 10.75 5.88283 10.75 6.46916V6.53084C10.75 7.11717 10.75 7.60234 10.7177 7.99782C10.6841 8.40897 10.6119 8.78878 10.4298 9.1461C10.1482 9.69882 9.69882 10.1482 9.1461 10.4298C8.78878 10.6119 8.40897 10.6841 7.99782 10.7177C7.60234 10.75 7.11717 10.75 6.53084 10.75H6.46916C5.88283 10.75 5.39766 10.75 5.00218 10.7177C4.59103 10.6841 4.21122 10.6119 3.8539 10.4298C3.30118 10.1482 2.8518 9.69882 2.57017 9.1461C2.38811 8.78878 2.31589 8.40897 2.28229 7.99782C2.24998 7.60234 2.24999 7.11718 2.25 6.53085V6.46915C2.24999 5.88282 2.24998 5.39766 2.28229 5.00218C2.31589 4.59103 2.38811 4.21122 2.57017 3.8539C2.8518 3.30118 3.30118 2.8518 3.8539 2.57017C4.21122 2.38811 4.59103 2.31589 5.00218 2.28229C5.39766 2.24998 5.88282 2.24999 6.46915 2.25Z',
  d6: 'M6.46915 13.25H6.53085C7.11718 13.25 7.60234 13.25 7.99782 13.2823C8.40897 13.3159 8.78878 13.3881 9.1461 13.5702C9.69882 13.8518 10.1482 14.3012 10.4298 14.8539C10.6119 15.2112 10.6841 15.591 10.7177 16.0022C10.75 16.3977 10.75 16.8828 10.75 17.4692V17.5308C10.75 18.1172 10.75 18.6023 10.7177 18.9978C10.6841 19.409 10.6119 19.7888 10.4298 20.1461C10.1482 20.6988 9.69882 21.1482 9.1461 21.4298C8.78878 21.6119 8.40897 21.6841 7.99782 21.7177C7.60234 21.75 7.11717 21.75 6.53084 21.75H6.46916C5.88283 21.75 5.39766 21.75 5.00218 21.7177C4.59103 21.6841 4.21122 21.6119 3.8539 21.4298C3.30118 21.1482 2.8518 20.6988 2.57017 20.1461C2.38811 19.7888 2.31589 19.409 2.28229 18.9978C2.24998 18.6023 2.24999 18.1172 2.25 17.5309V17.4692C2.24999 16.8828 2.24998 16.3977 2.28229 16.0022C2.31589 15.591 2.38811 15.2112 2.57017 14.8539C2.8518 14.3012 3.30118 13.8518 3.8539 13.5702C4.21122 13.3881 4.59103 13.3159 5.00218 13.2823C5.39766 13.25 5.88282 13.25 6.46915 13.25Z',
  d7: 'M9.99475 3H3.00195V10H9.99475V3Z',
  d8: 'M9.99475 14H3.00195V21H9.99475V14Z',
  d9: 'M15.0095 7.99154L18.0069 5.00394L20.9975 8.01575M14.0137 17.5L17.9635 14.0441C17.9852 14.0251 17.9976 13.9976 17.9976 13.9688V5.46074',
  d10: 'M17.2933 3.58594L21.0004 7.29304L19.5862 8.70726L18.2933 7.41436V14.0002C18.2933 14.2886 18.1688 14.5629 17.9518 14.7528L13.9518 18.2528L12.6348 16.7477L16.2933 13.5465V7.41437L15.0004 8.70726L13.5862 7.29304L17.2933 3.58594Z',
  d11: 'M10 3H3V10H10V3Z',
  d12: 'M10 14H3V21H10V14Z',
};

export const IconSortByUp01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-stroke-rounded IconSortByUp01StrokeRounded"
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

export const IconSortByUp01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-duotone-rounded IconSortByUp01DuotoneRounded"
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

export const IconSortByUp01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-twotone-rounded IconSortByUp01TwotoneRounded"
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

export const IconSortByUp01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-solid-rounded IconSortByUp01SolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortByUp01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-bulk-rounded IconSortByUp01BulkRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortByUp01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-stroke-sharp IconSortByUp01StrokeSharp"
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

export const IconSortByUp01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sort-by-up-01-solid-sharp IconSortByUp01SolidSharp"
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

export const iconPackOfSortByUp01: TheIconSelfPack = {
  name: 'SortByUp01',
  StrokeRounded: IconSortByUp01StrokeRounded,
  DuotoneRounded: IconSortByUp01DuotoneRounded,
  TwotoneRounded: IconSortByUp01TwotoneRounded,
  SolidRounded: IconSortByUp01SolidRounded,
  BulkRounded: IconSortByUp01BulkRounded,
  StrokeSharp: IconSortByUp01StrokeSharp,
  SolidSharp: IconSortByUp01SolidSharp,
};