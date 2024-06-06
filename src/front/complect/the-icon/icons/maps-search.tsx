import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12.0889V9.23578C22 7.29177 22 6.31978 21.4142 5.71584C20.8284 5.11192 19.8856 5.11192 18 5.11192H15.9214C15.004 5.11192 14.9964 5.11013 14.1715 4.69638L10.8399 3.0254C9.44884 2.32773 8.75332 1.97889 8.01238 2.00314C7.27143 2.02738 6.59877 2.42098 5.25345 3.20819L4.02558 3.92667C3.03739 4.5049 2.54329 4.79402 2.27164 5.27499C2 5.75596 2 6.34169 2 7.51313V15.7487C2 17.2879 2 18.0575 2.34226 18.4859C2.57001 18.7708 2.88916 18.9625 3.242 19.026C3.77226 19.1214 4.42148 18.7416 5.71987 17.9817C6.60156 17.4659 7.45011 16.9301 8.50487 17.0754C9.38869 17.1971 10.21 17.756 11 18.1522',
  d2: 'M8 2.00195V17.0359',
  d3: 'M15 5.00879V11.0224',
  d4: 'M20.1069 20.1754L21.9521 21.9984M21.1691 17.6381C21.1691 19.6048 19.5752 21.1991 17.609 21.1991C15.6428 21.1991 14.0488 19.6048 14.0488 17.6381C14.0488 15.6714 15.6428 14.0771 17.609 14.0771C19.5752 14.0771 21.1691 15.6714 21.1691 17.6381Z',
  d5: 'M4.02558 3.9399L5.25345 3.22304C6.59128 2.44199 7.26392 2.04929 8 2.02115L8.01238 2.02071C8.75332 1.99652 9.44884 2.34457 10.8399 3.04067L14.1715 4.70787C14.9964 5.12069 15.004 5.12247 15.9214 5.12247H18C19.8856 5.12247 20.8284 5.12247 21.4142 5.72503C22 6.3276 22 7.2974 22 9.23702V17.3815C22 18.0373 21.581 18.5888 21.0037 18.7949C21.1309 18.4266 21.2 18.0311 21.2 17.6195C21.2 15.6313 19.5882 14.0195 17.6 14.0195C15.6118 14.0195 14 15.6313 14 17.6195C14 17.8795 14.0276 18.133 14.0799 18.3774L11 18.1333C10.8135 18.04 10.6253 17.9376 10.4349 17.8341C9.81874 17.499 9.18005 17.1517 8.50487 17.0589C7.49945 16.9207 6.68141 17.4 5.84342 17.8909L5.71987 17.9632C4.42151 18.7213 3.77226 19.1003 3.242 19.0051C2.88916 18.9417 2.57001 18.7505 2.34226 18.4662C2 18.0388 2 17.2709 2 15.7352V7.51826C2 6.34946 2 5.76506 2.27164 5.28517C2.54329 4.80529 3.03739 4.51682 4.02558 3.9399Z',
  d6: 'M22 12.0837V9.23702C22 7.2974 22 6.3276 21.4142 5.72503C20.8284 5.12247 19.8856 5.12247 18 5.12247H15.9214C15.004 5.12247 14.9964 5.12069 14.1715 4.70787L10.8399 3.04067C9.44884 2.34457 8.75332 1.99652 8.01238 2.02071C7.27143 2.0449 6.59877 2.43761 5.25345 3.22304L4.02558 3.9399C3.03739 4.51682 2.54329 4.80529 2.27164 5.28517C2 5.76506 2 6.34946 2 7.51826V15.7352C2 17.2709 2 18.0388 2.34226 18.4662C2.57001 18.7505 2.88916 18.9417 3.242 19.0051C3.77226 19.1003 4.42148 18.7213 5.71987 17.9632C6.60156 17.4485 7.45011 16.9139 8.50487 17.0589C9.38869 17.1803 10.21 17.738 11 18.1333',
  d7: 'M8 2.01953V17.0195',
  d8: 'M15 5.01953V11.0195',
  d9: 'M20.106 20.1569L21.9512 21.9799M21.1682 17.6196C21.1682 19.5863 19.5743 21.1806 17.6081 21.1806C15.6419 21.1806 14.0479 19.5863 14.0479 17.6196C14.0479 15.6529 15.6419 14.0586 17.6081 14.0586C19.5743 14.0586 21.1682 15.6529 21.1682 17.6196Z',
  d10: 'M20.1548 20.1569L22 21.9799M21.217 17.6196C21.217 19.5863 19.6231 21.1806 17.6569 21.1806C15.6907 21.1806 14.0967 19.5863 14.0967 17.6196C14.0967 15.6529 15.6907 14.0586 17.6569 14.0586C19.6231 14.0586 21.217 15.6529 21.217 17.6196Z',
  d11: 'M12.75 17.2765C12.75 14.7766 14.7766 12.75 17.2765 12.75C19.7765 12.75 21.8031 14.7766 21.8031 17.2765C21.8031 18.1656 21.5468 18.9947 21.104 19.6942L22.456 21.0418C22.8471 21.4317 22.8481 22.0648 22.4582 22.456C22.0683 22.8471 21.4352 22.8481 21.044 22.4582L19.6888 21.1074C18.9905 21.5481 18.1633 21.8031 17.2765 21.8031C14.7766 21.8031 12.75 19.7765 12.75 17.2765ZM17.2765 14.75C15.8812 14.75 14.75 15.8812 14.75 17.2765C14.75 18.6719 15.8812 19.8031 17.2765 19.8031C18.6719 19.8031 19.8031 18.6719 19.8031 17.2765C19.8031 15.8812 18.6719 14.75 17.2765 14.75Z',
  d12: 'M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.6681 18.5191C11.0076 18.6879 11.1774 18.7723 11.275 18.703C11.3726 18.6337 11.3476 18.4347 11.2975 18.0367C11.2661 17.7877 11.25 17.534 11.25 17.2765C11.25 15.1336 12.3684 13.252 14.0534 12.1834C14.1515 12.1212 14.2005 12.0901 14.2252 12.0451C14.25 12.0001 14.25 11.9447 14.25 11.8339L14.25 4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z',
  d13: 'M22.75 12.9322C22.75 13.6195 22.75 13.9632 22.6218 14.0125C22.4936 14.0618 22.246 13.7876 21.7509 13.2392C20.648 12.0177 19.0519 11.25 17.2765 11.25C16.9287 11.25 16.5878 11.2795 16.2561 11.336C16.0134 11.3774 15.892 11.3981 15.821 11.3382C15.75 11.2783 15.75 11.1612 15.75 10.9272L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V12.9322Z',
  d14: 'M7.25 1.95737C7.25 1.62984 7.25 1.46607 7.13415 1.37599C7.1208 1.36561 7.10282 1.3541 7.08779 1.34634C6.95744 1.27893 6.81999 1.34242 6.54509 1.46938C6.08426 1.68221 5.55431 1.98964 4.90724 2.36503L3.6187 3.11251C3.15062 3.38402 2.75247 3.61497 2.44084 3.84C2.10848 4.07999 1.82705 4.3455 1.61998 4.70898C1.4134 5.07159 1.32728 5.45023 1.28746 5.86053C1.24997 6.2469 1.24999 6.71323 1.25 7.26437V15.5035C1.24999 16.2326 1.24998 16.8354 1.29639 17.3069C1.34327 17.783 1.44676 18.2613 1.75833 18.6479C2.09802 19.0693 2.57688 19.3558 3.11024 19.451C3.60335 19.539 4.0707 19.3911 4.5015 19.1966C4.92742 19.0043 5.49919 18.6726 6.11822 18.3135C6.40134 18.1492 6.6546 18.0023 6.89091 17.8802C7.07195 17.7867 7.16247 17.7399 7.20624 17.668C7.25 17.5962 7.25 17.5016 7.25 17.3124L7.25 1.95737Z',
  d15: 'M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d16: 'M22 11.9998V5H15L8.01175 2.00098L2 5.08297V19L8.01175 17L11 18.2827',
  d17: 'M8 2L8 17',
  d18: 'M15 5V12',
  d19: 'M13.25 17.7519C13.25 15.2655 15.2655 13.25 17.7519 13.25C20.2382 13.25 22.2537 15.2655 22.2537 17.7519C22.2537 18.6407 21.9961 19.4695 21.5515 20.1674L22.75 21.366L21.366 22.75L20.1674 21.5515C19.4695 21.9961 18.6407 22.2537 17.7519 22.2537C15.2655 22.2537 13.25 20.2382 13.25 17.7519ZM17.7519 15.2073C16.3466 15.2073 15.2073 16.3466 15.2073 17.7519C15.2073 19.1572 16.3466 20.2964 17.7519 20.2964C19.1572 20.2964 20.2964 19.1572 20.2964 17.7519C20.2964 16.3466 19.1572 15.2073 17.7519 15.2073Z',
  d20: 'M12.0199 19.5369L8.75 18.1333L8.75 1.25L14.25 3.61034V12.877C12.7359 13.9665 11.75 15.7441 11.75 17.7519C11.75 18.3735 11.8445 18.973 12.0199 19.5369Z',
  d21: 'M22.75 14.4279V4.74835C22.75 4.33413 22.4142 3.99835 22 3.99835H15.75V12.092C16.3761 11.8705 17.0499 11.75 17.7519 11.75C19.8373 11.75 21.6743 12.8136 22.75 14.4279Z',
  d22: 'M1.65785 4.16391L7.25 1.29703L7.25 18.044L2.23675 19.7118C2.00807 19.7879 1.75676 19.7495 1.56129 19.6085C1.36582 19.4675 1.25 19.2412 1.25 19.0002V4.83131C1.25 4.54995 1.40747 4.29226 1.65785 4.16391Z',
};

export const IconMapsSearchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-stroke-rounded IconMapsSearchStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMapsSearchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-duotone-rounded IconMapsSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMapsSearchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-twotone-rounded IconMapsSearchTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSearchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-solid-rounded IconMapsSearchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsSearchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-bulk-rounded IconMapsSearchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconMapsSearchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-stroke-sharp IconMapsSearchStrokeSharp"
    >
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

export const IconMapsSearchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-search-solid-sharp IconMapsSearchSolidSharp"
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
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsSearch: TheIconSelfPack = {
  name: 'MapsSearch',
  StrokeRounded: IconMapsSearchStrokeRounded,
  DuotoneRounded: IconMapsSearchDuotoneRounded,
  TwotoneRounded: IconMapsSearchTwotoneRounded,
  SolidRounded: IconMapsSearchSolidRounded,
  BulkRounded: IconMapsSearchBulkRounded,
  StrokeSharp: IconMapsSearchStrokeSharp,
  SolidSharp: IconMapsSearchSolidSharp,
};