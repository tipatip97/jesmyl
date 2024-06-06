import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.8934 20.8654L12.0206 19.0266M7.91638 20.9237L8.04356 19.0266M6.05503 15.5229V13.5208M10.0321 8.75557L8.13307 4.16724C7.8936 3.52902 6.88092 2.34355 5.24116 3.46072C4.37391 4.05158 3.58048 4.59256 3.02538 4.97115C2.52025 5.31565 2.19911 5.87232 2.16708 6.48575C1.96653 10.3263 1.93813 16.851 2.12774 19.0054C2.13145 19.7304 2.42599 21.057 4.68582 20.9917C4.68582 20.9917 18.9127 20.9356 19.5555 20.9917C20.1983 21.0477 21.9261 20.8669 21.9261 19.0054C22.0106 17.5599 22.0268 15.4225 21.9528 14.0229C21.9229 13.4574 21.6972 12.9214 21.2652 12.5587C20.4509 11.8749 19.0102 10.926 16.9851 10.0247L16.9236 12.0571L13.4161 11.9701M2.00373 12.8543C3.48472 11.0376 8.36491 8.57984 11.4174 8.64081C11.769 8.64783 12.0655 8.88467 12.2009 9.21139L14.6783 15.1908M14.6783 15.1908L16.9681 20.968M14.6783 15.1908C8.85179 14.6002 4.09893 16.0215 2.03479 17.0636M14.6783 15.1908C16.9404 15.4201 19.1002 15.7897 21.9939 16.9925M10.0321 15.0224V13.0203',
  d2: 'M2 7.62381V8.14792C2 10.0045 2 10.9328 2.47483 11.2258C2.94965 11.5188 3.88294 11.0507 5.74951 10.1143C7.08864 9.44255 8.51429 8.98019 10 8.76003L8.91647 6.01207C8.22524 4.25903 7.87962 3.38252 6.98358 3.09049C6.08753 2.79846 5.43372 3.23354 4.1261 4.10371C3.87377 4.27162 3.62534 4.44735 3.38101 4.63064C2.75091 5.10333 2.43586 5.33967 2.21793 5.78125C2 6.22283 2 6.68982 2 7.62381Z',
  d3: 'M12 15C8.24786 15 4.78536 15.7442 2 17C2 18.8856 2 19.8284 2.58579 20.4142C3.17157 21 4.11438 21 6 21H18C19.8856 21 20.8284 21 21.4142 20.4142C22 19.8284 22 18.8856 22 17C19.2146 15.7442 15.7521 15 12 15Z',
  d4: 'M12 21V19',
  d5: 'M10 15V13',
  d6: 'M6 15.5V13.5',
  d7: 'M8 21V19',
  d8: 'M1.99976 12.7282V7.61704C1.99976 6.68432 1.99976 6.21796 2.21735 5.77698C2.43495 5.336 2.74952 5.09998 3.37865 4.62794C3.62261 4.44489 3.87066 4.2694 4.1226 4.10172C5.42822 3.23273 6.08103 2.79824 6.97571 3.08988C7.87037 3.38151 8.21547 4.25683 8.90564 6.00749L9.98751 8.75172M1.99976 12.7282V16.8517C1.99976 18.7954 1.99976 19.7673 2.58465 20.3712C3.16953 20.9751 4.1109 20.9751 5.99363 20.9751H16.9768L12.4965 9.87351C12.2428 9.24488 12.1159 8.93057 11.8345 8.7561C11.553 8.58164 11.2538 8.61096 10.6551 8.66959C10.4313 8.69151 10.2088 8.71892 9.98751 8.75172M1.99976 12.7282C4.27917 10.6061 7.01276 9.19262 9.98751 8.75172',
  d9: 'M11.9841 20.9753V18.978',
  d10: 'M9.98706 14.9831V12.9858',
  d11: 'M5.9939 15.4826V13.4854',
  d12: 'M7.99097 20.9753V18.978',
  d13: 'M13.4099 12.0201H16.9503L16.9504 9.91553C18.9724 10.8156 20.3944 11.7292 21.2075 12.412C21.6388 12.7743 21.9362 13.2805 21.9661 13.8453C22.04 15.2429 21.983 17.5276 21.8987 18.9712C21.8987 20.8301 20.4151 20.8934 19.7576 20.9855C19.5217 21.0185 17.0056 20.9841 14.464 20.9855',
  d14: 'M2.09448 16.9213C3.71508 16.2078 8.49825 14.5323 14.3158 15.122C15.9778 15.2905 19.4353 15.7215 21.5962 16.9213',
  d15: 'M8.75 20.0015C8.75 19.5873 8.41421 19.2515 8 19.2515C7.58579 19.2515 7.25 19.5873 7.25 20.0015V21.3515C7.25 21.54 7.25 21.6343 7.19142 21.6929C7.13284 21.7515 7.03856 21.7515 6.85 21.7515H5.94696C5.04968 21.7515 4.29906 21.7515 3.70271 21.6688C3.07049 21.581 2.50187 21.3877 2.04746 20.9186C1.59628 20.4529 1.41336 19.8757 1.32986 19.2346C1.3003 19.0077 1.28173 18.7586 1.27006 18.4875C1.26491 18.368 1.26234 18.3083 1.29122 18.258C1.3201 18.2077 1.37393 18.1794 1.48159 18.1226L2.32921 17.6758C5.0045 16.4737 8.35252 15.7515 12.0001 15.7515C13.2289 15.7515 14.4239 15.8335 15.5705 15.9882C15.681 16.0031 15.7362 16.0105 15.7787 16.0436C15.8213 16.0767 15.8424 16.1289 15.8845 16.2334L17.89 21.2018C17.9905 21.4507 18.0407 21.5752 17.9813 21.6633C17.9218 21.7515 17.7876 21.7515 17.5191 21.7515L13.15 21.7515C12.9614 21.7515 12.8672 21.7515 12.8086 21.6929C12.75 21.6343 12.75 21.54 12.75 21.3515V20.0015C12.75 19.5873 12.4142 19.2515 12 19.2515C11.5858 19.2515 11.25 19.5873 11.25 20.0015V21.3515C11.25 21.54 11.25 21.6343 11.1914 21.6929C11.1328 21.7515 11.0386 21.7515 10.85 21.7515H9.15C8.96144 21.7515 8.86716 21.7515 8.80858 21.6929C8.75 21.6343 8.75 21.54 8.75 21.3515V20.0015Z',
  d16: 'M12.2453 8.12839C11.7406 7.81565 11.1901 7.87209 10.7064 7.92167C10.4699 7.94483 10.1242 7.98496 9.89042 8.0196C7.03799 8.4423 4.35177 9.75673 2.11206 11.6405C1.85876 11.8522 1.57965 12.0855 1.41389 12.4416C1.24788 12.7981 1.24908 13.1799 1.25018 13.5301L1.25031 16.0736C1.25032 16.1997 1.25032 16.2627 1.26989 16.3037C1.30434 16.3757 1.37834 16.4204 1.45814 16.4172C1.50346 16.4155 1.55924 16.3861 1.67081 16.3272L1.69185 16.3178C2.70114 15.8627 3.7929 15.4736 4.95017 15.1598C5.09519 15.1205 5.1677 15.1009 5.20885 15.0471C5.25 14.9933 5.25 14.919 5.25 14.7705V13.5015C5.25 13.0873 5.58579 12.7515 6 12.7515C6.41421 12.7515 6.75 13.0873 6.75 13.5015V14.259C6.75 14.4826 6.75 14.5944 6.82126 14.6544C6.89251 14.7143 7.00389 14.6949 7.22663 14.6562C7.77054 14.5617 8.32508 14.4829 8.88882 14.4208C9.06156 14.4018 9.14793 14.3923 9.19897 14.3353C9.25 14.2783 9.25 14.1923 9.25 14.0203V13.0015C9.25 12.5873 9.58579 12.2515 10 12.2515C10.4142 12.2515 10.75 12.5873 10.75 13.0015V13.8608C10.75 14.0563 10.75 14.1541 10.8106 14.213C10.8713 14.2719 10.97 14.2691 11.1674 14.2634C11.4434 14.2555 11.721 14.2515 12.0001 14.2515C12.8441 14.2515 13.6747 14.2882 14.4877 14.3592C14.7879 14.3855 14.938 14.3986 15.0047 14.3086C15.0713 14.2186 15.0155 14.0803 14.9039 13.8039L13.1952 9.57067C13.0798 9.28476 12.9698 9.01215 12.849 8.79283C12.7122 8.54459 12.5315 8.30578 12.2453 8.12839Z',
  d17: 'M9.82536 6.27214L9.59191 5.68009C9.26554 4.85224 8.98711 4.14599 8.67014 3.61761C8.32451 3.04147 7.88742 2.59622 7.21614 2.37744C6.57311 2.16787 6.00076 2.22982 5.42336 2.46798C4.91544 2.67748 4.37209 3.03915 3.7647 3.44346C3.50047 3.61929 3.11015 3.89635 2.85468 4.08799C2.29454 4.50743 1.84385 4.84493 1.54554 5.44937C1.24867 6.0509 1.24929 6.68683 1.25008 7.49589L1.25012 9.87193C1.25012 10.2408 1.25013 10.4252 1.36095 10.4804C1.47176 10.5356 1.62183 10.4224 1.92195 10.1959C4.09768 8.55414 6.83991 7.31232 9.5134 6.82302C9.74487 6.78065 9.86061 6.75947 9.9065 6.67688C9.95238 6.59428 9.91004 6.4869 9.82536 6.27214Z',
  d18: 'M16.8036 14.66C16.6948 14.641 16.6404 14.6315 16.6001 14.5989C16.5598 14.5663 16.5394 14.5156 16.4985 14.4142L15.4423 11.7976C15.3426 11.5506 15.2927 11.4272 15.351 11.3394C15.3516 11.3385 15.3521 11.3377 15.3527 11.3369C15.4123 11.25 15.5454 11.25 15.8118 11.25C15.9989 11.25 16.0924 11.25 16.1508 11.1923C16.1514 11.1917 16.152 11.1911 16.1525 11.1906C16.2103 11.1321 16.2103 11.0386 16.2103 10.8515V10C16.2103 9.75446 16.3305 9.52446 16.5321 9.38426C16.7337 9.24407 16.9911 9.21143 17.2213 9.29689C18.5717 9.79822 19.8489 10.4851 21.0318 11.33L21.1122 11.3873C21.678 11.7907 22.1382 12.1187 22.4443 12.7115C22.7512 13.306 22.7505 13.9369 22.7496 14.7209L22.7496 16.0328C22.7496 16.1865 22.7496 16.2634 22.7193 16.312C22.6877 16.3626 22.6351 16.3965 22.576 16.4044C22.5192 16.4119 22.4492 16.3802 22.3092 16.3168L22.3081 16.3163C20.667 15.5764 18.8079 15.0108 16.8036 14.66Z',
  d19: 'M17.5272 16.9629C17.4038 16.6571 17.342 16.5042 17.4215 16.4118C17.501 16.3195 17.6594 16.3573 17.9762 16.4328C19.316 16.7523 20.5638 17.1753 21.6915 17.6837L22.5022 18.0509C22.6193 18.1039 22.6778 18.1304 22.7099 18.1821C22.7419 18.2337 22.7397 18.297 22.7353 18.4235C22.7242 18.7435 22.7043 19.0342 22.669 19.2953C22.5837 19.9241 22.3962 20.4914 21.9374 20.9466C21.4794 21.401 20.9101 21.586 20.2791 21.6702C20.1097 21.6928 19.9279 21.709 19.7337 21.7206C19.6003 21.7286 19.5336 21.7326 19.4791 21.6981C19.4247 21.6637 19.3991 21.6003 19.3479 21.4735L17.5272 16.9629Z',
  d20: 'M12.0173 20.998V17.998',
  d21: 'M10.0178 14.998V11.998',
  d22: 'M6.01978 15.998V12.998',
  d23: 'M8.0188 20.998V17.998',
  d24: 'M10.0344 9.08628L8.00785 3.00195C5.47976 3.38792 2.94394 4.22479 1.9978 4.72491V10.9701M10.0344 9.08628L12.0338 8.95801L13.178 11.7523M10.0344 9.08628C8.13132 9.08628 3.91009 10.0863 1.9978 10.9701M16.9691 20.9514H22.0022V16.9891M16.9691 20.9514L14.559 15.1035M16.9691 20.9514L1.9978 20.998V16.9891M13.178 11.7523L14.559 15.1035M13.178 11.7523L16.9691 12.0002L17.0296 9.48347C17.8336 9.63124 20.5448 10.2005 22.0022 11.0195V16.9891M14.559 15.1035C9.41389 14.6714 4.55657 15.7925 1.9978 16.9891M14.559 15.1035C17.0486 15.3125 19.6056 15.8853 22.0022 16.9891M1.9978 10.9701V16.9891',
  d25: 'M8.74707 21.75V18.9999H7.24707V21.75H1.24902L1.2496 17.5988C4.24902 16.4412 7.96311 15.75 11.9982 15.75C13.2707 15.75 14.5113 15.8187 15.7077 15.9492L18.124 21.75H12.7471V18.9999H11.2471V21.75H8.74707Z',
  d26: 'M1.69225 10.3163C4.58424 9.01238 8.15331 8.25 12.0005 8.25H12.5006L15.0535 14.3788C14.0574 14.294 13.0369 14.25 11.9982 14.25C11.578 14.25 11.1609 14.2572 10.7471 14.2714V11.9999H9.24707V14.3542C8.39522 14.4193 7.5606 14.5142 6.74707 14.6371V12H5.24707V14.8997C3.83086 15.1827 2.49095 15.5526 1.24982 15.9982L1.25058 10.5154L1.69225 10.3163Z',
  d27: 'M1.24939 9.1443C3.81951 7.99725 6.85865 7.26296 10.124 7.05842L8.51225 2.25L7.88768 2.34239C5.62084 2.67772 3.52126 3.28521 1.69112 4.11035L1.24939 4.30952V9.1443Z',
  d28: 'M15.0446 11.1058C15.4444 11.1276 15.8394 11.1537 16.2291 11.1838L16.2547 8.5542L17.1347 8.71991C19.0113 9.07327 20.757 9.61638 22.3093 10.3162L22.7511 10.5154L22.7508 15.999C20.8601 15.32 18.7401 14.8167 16.4703 14.5286L15.0446 11.1058Z',
  d29: 'M17.1405 16.1375L19.4784 21.75H22.7504L22.7507 17.5995C21.0798 16.9545 19.187 16.4542 17.1405 16.1375Z',
};

export const IconColosseumStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-stroke-rounded IconColosseumStrokeRounded"
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

export const IconColosseumDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-duotone-rounded IconColosseumDuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconColosseumTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-twotone-rounded IconColosseumTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconColosseumSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-solid-rounded IconColosseumSolidRounded"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconColosseumBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-bulk-rounded IconColosseumBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconColosseumStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-stroke-sharp IconColosseumStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconColosseumSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="colosseum-solid-sharp IconColosseumSolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfColosseum: TheIconSelfPack = {
  name: 'Colosseum',
  StrokeRounded: IconColosseumStrokeRounded,
  DuotoneRounded: IconColosseumDuotoneRounded,
  TwotoneRounded: IconColosseumTwotoneRounded,
  SolidRounded: IconColosseumSolidRounded,
  BulkRounded: IconColosseumBulkRounded,
  StrokeSharp: IconColosseumStrokeSharp,
  SolidSharp: IconColosseumSolidSharp,
};