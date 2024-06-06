import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768',
  d2: 'M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768',
  d3: 'M7 8V10',
  d4: 'M7 15V17',
  d5: 'M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405',
  d6: 'M19 4.99619C11.8 -0.203811 5.33333 2.82952 3 4.99619V6C5.66667 7.5 12.6 9.6 19 6V4.99619Z',
  d7: 'M15.6052 21.4515C14.3031 21.7958 12.7145 21.9981 11 21.9981C6.58172 21.9981 3 20.6549 3 18.9981V12.5C4.5 14.334 9.8 17.0019 19 13.0019V15.309C18.5413 15.1103 18.0245 15 17.4723 15C15.5546 15 14 16.567 14 18.5C14 19.7402 14.64 20.8298 15.6052 21.4515Z',
  d8: 'M2.71527 3.08401C2.18749 3.55194 1.75 4.19711 1.75 5V9.98763C1.75 10.9324 1.90337 11.4637 2.70806 11.9907C3.03325 12.2037 3.39779 12.4055 3.8008 12.5952C5.76354 13.5188 8.3613 14 10.75 14C11.4869 14 12.2438 13.9542 12.9957 13.8637C13.2667 13.8311 13.4022 13.8148 13.5282 13.763C13.6542 13.7112 13.8027 13.5955 14.0999 13.3643C15.1159 12.5738 16.3918 12.1013 17.7855 12.1013C18.489 12.1013 18.8107 11.6139 19.4433 11.3826C19.6892 11.0134 19.75 10.5825 19.75 9.98763V5C19.75 4.19711 19.3125 3.55194 18.7847 3.08401C18.2558 2.61504 17.5474 2.2384 16.758 1.94235C15.1717 1.34749 13.0473 1 10.75 1C8.45269 1 6.32833 1.34749 4.74202 1.94235C3.95256 2.2384 3.24422 2.61504 2.71527 3.08401ZM4.04209 5.41948C4.30524 5.65279 4.72883 5.9045 5.32313 6.13845C5.35413 6.15065 5.39043 6.16171 5.42851 6.17331C5.53644 6.20619 5.65859 6.24339 5.71414 6.32318C5.75 6.37469 5.75 6.44357 5.75 6.58134V8.5C5.75 9.05228 6.19772 9.5 6.75 9.5C7.30228 9.5 7.75 9.05228 7.75 8.5V7.23948C7.75 7.02246 7.75 6.91395 7.8182 6.8542C7.8864 6.79444 7.99582 6.80895 8.21467 6.83796C8.99969 6.94202 9.8529 7 10.75 7C12.871 7 14.7466 6.67591 16.0557 6.18499C16.714 5.93815 17.1772 5.66834 17.4579 5.41948C17.8146 5.10324 17.8146 4.89676 17.4579 4.58052C17.1772 4.33166 16.714 4.06185 16.0557 3.81501C14.7466 3.32409 12.871 3 10.75 3C8.62903 3 6.7534 3.32409 5.44427 3.81501C4.78602 4.06185 4.32279 4.33166 4.04209 4.58052C3.6854 4.89676 3.6854 5.10324 4.04209 5.41948Z',
  d9: 'M11.8535 15.9696C11.9948 15.962 12.0655 15.9581 12.0976 16.0002C12.1297 16.0422 12.1069 16.1106 12.0614 16.2473C11.8594 16.8545 11.7501 17.5032 11.7501 18.1757C11.7501 19.5396 12.1995 20.8059 12.9613 21.8255C13.3167 22.3012 13.4944 22.539 13.4217 22.7002C13.349 22.8614 13.0834 22.8833 12.5521 22.9269C11.9685 22.9749 11.3655 22.9998 10.75 22.9998C8.45269 22.9998 6.32833 22.6523 4.74202 22.0575C3.95256 21.7614 3.24422 21.3848 2.71527 20.9158C2.18749 20.4479 1.75 19.8027 1.75 18.9998V14.4765C1.75 14.1584 1.75 13.9993 1.84753 13.9412C1.94506 13.883 2.0892 13.9608 2.37747 14.1164C2.56512 14.2177 2.75604 14.3137 2.9492 14.4046C3.72353 14.769 4.56834 15.0695 5.44849 15.3076C5.59458 15.3471 5.66763 15.3669 5.70882 15.4207C5.75 15.4745 5.75 15.549 5.75 15.698V17.5C5.75 18.0523 6.19772 18.5 6.75 18.5C7.30228 18.5 7.75 18.0523 7.75 17.5V16.2431C7.75 16.0289 7.75 15.9218 7.81749 15.8621C7.88499 15.8024 7.99274 15.8157 8.20824 15.8422C9.06549 15.9477 9.92236 15.9998 10.75 15.9998C11.113 15.9998 11.4817 15.9898 11.8535 15.9696Z',
  d10: 'M19.2407 13.8425C19.1949 13.3548 19.5135 12.8952 20.0036 12.7777C20.5407 12.6491 21.0804 12.9802 21.2091 13.5173L21.7084 15.6016C21.803 15.9964 21.6495 16.4092 21.32 16.6463C20.9905 16.8834 20.5503 16.8978 20.2061 16.6827C19.4651 16.2197 18.6977 15.6014 17.7852 15.6014C16.3953 15.6014 15.2498 16.7436 15.2498 18.1758C15.2498 19.608 16.3953 20.7502 17.7852 20.7502C19.0024 20.7502 20.0322 19.8749 20.2694 18.6939C20.3781 18.1524 20.9052 17.8016 21.4467 17.9103C21.9881 18.019 22.339 18.5461 22.2302 19.0875C21.8122 21.1695 19.9887 22.7502 17.7852 22.7502C15.27 22.7502 13.2498 20.6918 13.2498 18.1758C13.2498 15.6598 15.27 13.6014 17.7852 13.6014C18.2941 13.6014 18.7838 13.6863 19.2407 13.8425Z',
  d11: 'M7 8V10.5',
  d12: 'M7 15V17.5',
  d13: 'M20 13L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405',
  d14: 'M21.7424 15.7871L21.2552 12.75L19.2753 13.0566L19.4336 14.0433C18.9252 13.8485 18.3726 13.7414 17.7952 13.7414C15.2746 13.7414 13.25 15.7683 13.25 18.2457C13.25 20.7231 15.2746 22.75 17.7952 22.75C20.0036 22.75 21.8311 21.1935 22.25 19.1435L20.2849 18.7558C20.0472 19.9188 19.0151 20.7807 17.7952 20.7807C16.4023 20.7807 15.2544 19.656 15.2544 18.2457C15.2544 16.8355 16.4023 15.7108 17.7952 15.7108C18.3655 15.7108 18.8902 15.8972 19.3149 16.2142C19.3392 16.2323 19.3642 16.2493 19.3901 16.2651L20.2214 16.7755C20.5543 16.9798 20.9779 16.9744 21.3053 16.7617C21.6327 16.5489 21.8035 16.168 21.7424 15.7871Z',
  d15: 'M10.5 1.25C8.26651 1.25 6.20115 1.57577 4.65891 2.13345C3.89138 2.411 3.20271 2.7641 2.68846 3.20376C2.17534 3.64244 1.75 4.24729 1.75 5V10.9361C1.97068 11.4919 2.6214 12.1613 3.95808 12.7726C5.58075 13.5147 7.8927 14 10.5 14C11.8832 14 13.1833 13.8634 14.3415 13.6243C15.2562 12.9491 16.3786 12.5353 17.597 12.4947C18.5638 11.9634 19.0624 11.4087 19.25 10.9361V5C19.25 4.24729 18.8247 3.64244 18.3115 3.20376C17.7973 2.7641 17.1086 2.411 16.3411 2.13345C14.7988 1.57577 12.7335 1.25 10.5 1.25ZM3.69531 5C3.69531 4.97606 3.70525 4.84102 3.97929 4.60674C4.25219 4.37343 4.70255 4.12049 5.34252 3.88907C6.61528 3.42883 8.43881 3.125 10.5009 3.125C12.5629 3.125 14.3865 3.42883 15.6592 3.88907C16.2992 4.12049 16.7495 4.37343 17.0225 4.60674C17.2965 4.84102 17.3064 4.97606 17.3064 5C17.3064 5.02394 17.2965 5.15898 17.0225 5.39326C16.7495 5.62657 16.2992 5.87951 15.6592 6.11093C14.3865 6.57117 12.5629 6.875 10.5009 6.875C9.42006 6.875 8.40479 6.79153 7.5 6.64582V8.5H5.5V6.16612C5.44661 6.14799 5.39411 6.12959 5.34252 6.11093C4.70255 5.87951 4.25219 5.62657 3.97929 5.39326C3.70525 5.15898 3.69531 5.02394 3.69531 5Z',
  d16: 'M12.4967 15.9115C12.1774 16.6251 12 17.415 12 18.2457C12 19.9205 12.7212 21.4297 13.8731 22.4819C12.8331 22.6555 11.6915 22.75 10.5 22.75C8.22474 22.75 6.13146 22.4054 4.5798 21.8236C3.80674 21.5337 3.12904 21.1704 2.63112 20.7289C2.13408 20.2883 1.75 19.7057 1.75 19V13.8218C2.1764 14.1138 2.64334 14.3705 3.12628 14.5914C3.83533 14.9157 4.63391 15.1912 5.5 15.4102V17.5H7.5V15.7971C8.45572 15.9298 9.46312 16 10.5 16C11.1804 16 11.848 15.9698 12.4967 15.9115Z',
};

export const IconDataRecoveryStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-stroke-rounded IconDataRecoveryStrokeRounded"
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconDataRecoveryDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-duotone-rounded IconDataRecoveryDuotoneRounded"
    >
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconDataRecoveryTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-twotone-rounded IconDataRecoveryTwotoneRounded"
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconDataRecoverySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-solid-rounded IconDataRecoverySolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDataRecoveryBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-bulk-rounded IconDataRecoveryBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDataRecoveryStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-stroke-sharp IconDataRecoveryStrokeSharp"
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
      <ellipse 
        cx="11" 
        cy="5" 
        rx="8" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDataRecoverySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="data-recovery-solid-sharp IconDataRecoverySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDataRecovery: TheIconSelfPack = {
  name: 'DataRecovery',
  StrokeRounded: IconDataRecoveryStrokeRounded,
  DuotoneRounded: IconDataRecoveryDuotoneRounded,
  TwotoneRounded: IconDataRecoveryTwotoneRounded,
  SolidRounded: IconDataRecoverySolidRounded,
  BulkRounded: IconDataRecoveryBulkRounded,
  StrokeSharp: IconDataRecoveryStrokeSharp,
  SolidSharp: IconDataRecoverySolidSharp,
};