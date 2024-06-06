import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.8814 5.18605C13.459 4.31449 9.8081 2.64154 6.51949 3.06854C8.50877 4.43854 9.55528 5.17541 12.3785 7.68896M18.8139 9.11851C19.6855 10.5409 21.3585 14.1918 20.9315 17.4804C19.5614 15.4911 18.8246 14.4446 16.311 11.6214M10.4727 11.4183L3.4233 18.4677C2.85149 19.0395 2.86008 19.9751 3.44248 20.5575C4.02489 21.1399 4.96056 21.1485 5.53237 20.5767L12.5818 13.5274M11.9865 9.22564L14.7742 12.0134C15.0838 12.3229 15.5845 12.3241 15.8927 12.0159L19.3464 8.5622C19.6546 8.25405 19.6534 7.75331 19.3439 7.44376L16.5561 4.65604C16.2466 4.34649 15.7458 4.34535 15.4377 4.6535L11.9839 8.10721C11.6758 8.41535 11.6769 8.91609 11.9865 9.22564Z',
  d2: 'M5.43682 20.6076C4.86739 21.1425 3.9761 21.1286 3.42366 20.5762C2.87122 20.0237 2.8573 19.1324 3.39221 18.563L10.4777 11.4775L12.5223 13.5221L5.43682 20.6076Z',
  d3: 'M20.9375 17.602C20.9375 17.602 21.5784 13.4363 18.7612 9.2041L16.2725 11.6927C19.6558 15.3589 20.9375 17.602 20.9375 17.602Z',
  d4: 'M12.3065 7.72799C8.64027 4.34475 6.39746 3.06278 6.39746 3.06278C6.39746 3.06278 10.5635 2.42139 14.7958 5.23872L12.3065 7.72799Z',
  d5: 'M12.5102 13.5379L5.43228 20.6068C4.86345 21.1405 3.97311 21.1266 3.42126 20.5755C2.8694 20.0243 2.8555 19.1351 3.38984 18.567L10.4678 11.498',
  d6: 'M14.8116 5.26898C13.2937 4.1975 9.64059 2.64829 6.35547 3.0743C8.34264 4.44109 9.49111 5.25836 12.3113 7.76606M18.8106 9.18976C19.6812 10.6089 21.3541 14.1376 20.9366 17.6062C19.568 15.6216 18.7884 14.5125 16.2774 11.6959M11.9345 9.29918L14.7193 12.0804C15.0285 12.3892 15.5846 12.3878 15.8925 12.0804L19.3425 8.63475C19.6504 8.32732 19.6518 7.81414 19.3425 7.50531L16.5577 4.72409C16.2485 4.41527 15.6751 4.43025 15.3673 4.73768L12.0239 8.09535C11.716 8.40278 11.6253 8.99035 11.9345 9.29918Z',
  d7: 'M15.7074 3.71375C15.8884 3.68396 16.0732 3.68396 16.2542 3.71374C16.5828 3.76778 16.8376 3.928 17.0468 4.09666C17.2384 4.25105 17.447 4.45974 17.6715 4.68428L17.6715 4.68428L19.3158 6.32854C19.5405 6.55321 19.7493 6.76202 19.9038 6.9537C20.0726 7.16309 20.2329 7.41815 20.2868 7.74696C20.3164 7.92752 20.3164 8.1117 20.2868 8.29225C20.2329 8.62106 20.0726 8.87612 19.9038 9.08551C19.7493 9.2772 19.5405 9.486 19.3158 9.71066L19.3158 9.71067L16.746 12.2806C16.5359 12.4919 16.3078 12.7214 16.0355 12.8492C15.5822 13.0619 15.0577 13.0619 14.6043 12.8492C14.4356 12.77 14.3002 12.6628 14.1893 12.5642L11.4364 9.81133C11.3379 9.70051 11.2306 9.56517 11.1515 9.39655C10.9384 8.94294 10.9384 8.41805 11.1515 7.96445C11.2792 7.69245 11.5084 7.46451 11.7196 7.2546L11.7196 7.2546L14.2901 4.68428C14.5146 4.45975 14.7233 4.25105 14.9148 4.09666C15.124 3.928 15.3788 3.76778 15.7074 3.71375Z',
  d8: 'M13.3055 3.54687C11.7508 2.82791 10.2836 2.49426 9.10068 2.34978C8.27104 2.24846 7.57834 2.23977 7.08833 2.25705C6.84314 2.2657 6.51953 2.27734 6.28494 2.32131L6.28357 2.32152C5.96839 2.37004 5.71836 2.61256 5.66025 2.92611C5.60216 3.23957 5.74857 3.55548 6.02526 3.71378L6.02765 3.71517C6.02765 3.71517 6.27016 3.86296 6.3981 3.94571C6.65398 4.11121 7.03732 4.36923 7.53535 4.73257C8.19537 5.21408 9.05693 5.88065 10.0903 6.76207L13.3055 3.54687Z',
  d9: 'M10.199 10.6957L2.86188 18.0329C2.85636 18.0384 2.85092 18.044 2.84558 18.0497C2.0333 18.9144 2.05445 20.2678 2.89333 21.1067C3.73221 21.9456 5.08565 21.9667 5.95032 21.1544C5.95601 21.1491 5.96162 21.1436 5.96715 21.1381L13.3043 13.801L10.199 10.6957Z',
  d10: 'M17.238 13.9093C18.1195 14.9428 18.7861 15.8045 19.2676 16.4646C19.6309 16.9626 19.8889 17.346 20.0544 17.6019C20.1371 17.7298 20.2484 17.9125 20.2865 17.9751C20.4449 18.2516 20.7607 18.3979 21.074 18.3398C21.3876 18.2817 21.6301 18.0316 21.6786 17.7164C21.7079 17.5257 21.7344 17.1569 21.743 16.9117C21.7602 16.4218 21.7515 15.7291 21.6501 14.8995C21.5055 13.7166 21.1718 12.2494 20.4527 10.6946L17.238 13.9093Z',
  d11: 'M10.79 11.2353L3.40819 18.6342C3.36939 18.6731 3.36911 18.7363 3.40758 18.7755L5.31922 20.7251C5.35807 20.7647 5.42158 20.7648 5.46059 20.7254L12.8232 13.2811M15.111 4.98674C11.5715 2.7839 8.44708 2.73802 6.84664 2.75738C6.75223 2.75852 6.71233 2.87946 6.78721 2.93732C8.73547 4.44295 9.7312 4.76626 12.563 7.50139M19.0916 8.9756C21.2335 12.3552 21.3868 16.1767 21.3762 17.3098C21.3754 17.4041 21.2554 17.4439 21.1972 17.37C19.6662 15.4235 19.2755 14.3116 16.5724 11.4617M11.7245 8.46906L15.519 12.3611C15.5575 12.4005 15.6205 12.4011 15.6597 12.3624L20.1773 7.90414C20.2165 7.86542 20.2171 7.80203 20.1786 7.76256L16.3842 3.87056C16.3457 3.83109 16.2827 3.83048 16.2434 3.8692L11.7259 8.32748C11.6866 8.3662 11.686 8.42959 11.7245 8.46906Z',
  d12: 'M15.4495 3.52386C15.7424 3.23098 16.2172 3.23098 16.5101 3.52387L20.4755 7.48922C20.6161 7.62987 20.6952 7.82064 20.6952 8.01955C20.6951 8.21847 20.6161 8.40923 20.4755 8.54988L15.8492 13.1761C15.5563 13.469 15.0814 13.469 14.7885 13.1761L10.8232 9.21071C10.6825 9.07006 10.6035 8.87929 10.6035 8.68038C10.6035 8.48146 10.6825 8.2907 10.8232 8.15005L15.4495 3.52386Z',
  d13: 'M13.3048 3.54673C11.7501 2.82787 10.2831 2.49425 9.10023 2.34978C8.27059 2.24846 7.57789 2.23977 7.08788 2.25705C6.8427 2.2657 6.49438 2.28899 6.28312 2.32152C5.96795 2.37004 5.71792 2.61256 5.6598 2.92611C5.60171 3.23957 5.74812 3.55548 6.02481 3.71378C6.28069 3.87928 7.03687 4.36923 7.5349 4.73257C8.19486 5.21404 9.05634 5.88053 10.0896 6.76184L13.3048 3.54673Z',
  d14: 'M10.193 10.7013L2.46967 18.4248C2.17682 18.7176 2.17677 19.1924 2.46957 19.4853L4.51373 21.5302C4.65437 21.6709 4.84515 21.75 5.04409 21.75C5.24303 21.75 5.43382 21.671 5.57449 21.5303L13.2982 13.8066L10.193 10.7013Z',
  d15: 'M17.2372 13.9089C18.1189 14.9425 18.7856 15.8044 19.2672 16.4646C19.6305 16.9626 20.1205 17.7191 20.286 17.9749C20.4443 18.2515 20.7601 18.3979 21.0735 18.3398C21.3871 18.2817 21.6297 18.0316 21.6782 17.7164C21.7047 17.5436 21.7339 17.1569 21.7425 16.9117C21.7598 16.4218 21.751 15.7291 21.6496 14.8995C21.5051 13.7165 21.1712 12.2491 20.452 10.6941L17.2372 13.9089Z',
};

export const IconMining02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-stroke-rounded IconMining02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMining02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-duotone-rounded IconMining02DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMining02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-twotone-rounded IconMining02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMining02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-solid-rounded IconMining02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconMining02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-bulk-rounded IconMining02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
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
      </g>
    </TheIconWrapper>
  );
};

export const IconMining02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-stroke-sharp IconMining02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMining02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-02-solid-sharp IconMining02SolidSharp"
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMining02: TheIconSelfPack = {
  name: 'Mining02',
  StrokeRounded: IconMining02StrokeRounded,
  DuotoneRounded: IconMining02DuotoneRounded,
  TwotoneRounded: IconMining02TwotoneRounded,
  SolidRounded: IconMining02SolidRounded,
  BulkRounded: IconMining02BulkRounded,
  StrokeSharp: IconMining02StrokeSharp,
  SolidSharp: IconMining02SolidSharp,
};