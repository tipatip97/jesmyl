import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 21H22',
  d2: 'M16.4591 16.4179L17.7484 11.3959M16.4591 16.4179L17.4214 16.6871M16.4591 16.4179L15.2828 21M16.4591 16.4179L7.79815 13.9957M17.7484 11.3959L19.0377 6.3738M17.7484 11.3959L18.7107 11.665M17.7484 11.3959L9.08743 8.97368M19.0377 6.3738L17.113 5.83554M19.0377 6.3738L20 6.64294M7.79815 13.9957L9.08743 8.97368M7.79815 13.9957L6.83582 13.7266M7.79815 13.9957L6 21M9.08743 8.97368L10.3767 3.95162M9.08743 8.97368L8.1251 8.70455M10.3767 3.95162L9.41437 3.68249M10.3767 3.95162L12.3014 4.48988M12.3014 4.48988L17.113 5.83554M12.3014 4.48988L12.7458 2.75811C12.8862 2.21105 13.4418 1.88632 13.9799 2.03682L16.8635 2.84327C17.3901 2.99054 17.7025 3.53846 17.5651 4.07382L17.113 5.83554',
  d3: 'M10.5 21L11.06 19M14 8.5L13.5218 10.208M12.1121 15.2424L12.5655 13.6232',
  d4: 'M19.0381 6.37531L17.7489 11.3974L9.08789 8.97519L10.3772 3.95312L12.3018 4.49139L17.1135 5.83705L19.0381 6.37531Z',
  d5: 'M7.79815 13.9922L6 20.9964H15.2828L16.4591 16.4144L7.79815 13.9922Z',
  d6: 'M9.61762 3.46136C9.21872 3.3498 8.8049 3.58274 8.69334 3.98165C8.58178 4.38056 8.81472 4.79437 9.21362 4.90593L9.46897 4.97734L8.17969 9.99941L18.2856 12.8257L19.5748 7.80362L19.7993 7.86638C20.1982 7.97794 20.612 7.745 20.7235 7.34609C20.8351 6.94719 20.6022 6.53337 20.2032 6.42181L9.61762 3.46136ZM14.7241 9.20228C14.8358 8.8034 14.603 8.38951 14.2041 8.27783C13.8052 8.16615 13.3913 8.39896 13.2796 8.79783L12.8014 10.5058C12.6897 10.9047 12.9225 11.3186 13.3214 11.4303C13.7203 11.542 14.1342 11.3091 14.2459 10.9103L14.7241 9.20228Z',
  d7: 'M11.7824 19.7023C11.8941 19.3034 11.6613 18.8895 11.2624 18.7778C10.8635 18.6661 10.4497 18.899 10.338 19.2978L9.77797 21.2978C9.66628 21.6967 9.8991 22.1106 10.298 22.2223C10.3592 22.2394 10.4207 22.2484 10.4814 22.25H5.0332L6.88923 15.0203L6.63388 14.9489C6.23498 14.8373 6.00204 14.4235 6.1136 14.0246C6.22516 13.6257 6.63898 13.3928 7.03788 13.5043L17.6235 16.4648C18.0224 16.5763 18.2554 16.9902 18.1438 17.3891C18.0322 17.788 17.6184 18.0209 17.2195 17.9094L16.9951 17.8466L15.8646 22.25H10.5198C10.8402 22.2417 11.1315 22.0271 11.2224 21.7023L11.7824 19.7023Z',
  d8: 'M1.25 21.5C1.25 21.0858 1.58579 20.75 2 20.75H22C22.4142 20.75 22.75 21.0858 22.75 21.5C22.75 21.9142 22.4142 22.25 22 22.25H2C1.58579 22.25 1.25 21.9142 1.25 21.5Z',
  d9: 'M12.019 3.07208C12.2619 2.12531 13.2309 1.54909 14.1815 1.81494L17.0651 2.62139C17.9917 2.88051 18.5282 3.83731 18.2912 4.76067L17.8391 6.52239C17.7361 6.9236 17.3274 7.16538 16.9262 7.06241C16.525 6.95944 16.2832 6.55072 16.3862 6.14951L16.8383 4.38779C16.8761 4.24042 16.7878 4.10139 16.6611 4.06596L13.7775 3.25951C13.6519 3.22438 13.5097 3.29761 13.4719 3.44496L13.0274 5.17673C12.9244 5.57795 12.5157 5.81972 12.1145 5.71675C11.7133 5.61378 11.4715 5.20506 11.5745 4.80385L12.019 3.07208Z',
  d10: 'M8.32661 8.4848C7.9277 8.37324 7.51388 8.60618 7.40232 9.00509C7.29076 9.40399 7.5237 9.81781 7.92261 9.92937L8.17795 10.0008L6.88867 15.0228L11.6952 16.3671C11.7598 16.4104 11.8323 16.4444 11.9112 16.4665C11.9904 16.4887 12.0701 16.4973 12.1479 16.4937L16.9945 17.8491L18.2838 12.8271L18.5082 12.8898C18.9071 13.0014 19.321 12.7684 19.4325 12.3695C19.5441 11.9706 19.3111 11.5568 18.9122 11.4452L9.28894 8.75393L8.32661 8.4848ZM11.6035 14.7839L11.8446 13.9228C11.9563 13.524 12.3702 13.2911 12.7691 13.4028C13.1679 13.5145 13.4008 13.9284 13.2891 14.3273L13.0481 15.1879L15.9227 15.9918L16.8389 12.423L9.62285 10.4049L8.70665 13.9737L11.6035 14.7839Z',
  d11: 'M8.69334 3.98179C8.8049 3.58288 9.21872 3.34994 9.61762 3.4615L20.2032 6.42195C20.6022 6.53351 20.8351 6.94732 20.7235 7.34623C20.612 7.74514 20.1982 7.97808 19.7993 7.86652L19.5748 7.80376L18.2856 12.8258L8.17969 9.99954L9.46897 4.97748L9.21362 4.90607C8.81472 4.79451 8.58178 4.38069 8.69334 3.98179Z',
  d12: 'M16.5765 5.40768L18.0214 5.81177L18.2912 4.76067C18.5282 3.83731 17.9917 2.88051 17.0651 2.62139L14.1815 1.81494C13.2309 1.54909 12.2619 2.12531 12.019 3.07208L11.7649 4.06202L13.2098 4.46611L13.4719 3.44496C13.5097 3.29761 13.6519 3.22438 13.7775 3.25951L16.6611 4.06596C16.7878 4.10139 16.8761 4.24042 16.8383 4.38779L16.5765 5.40768Z',
  d13: 'M14.2041 8.27797C14.603 8.38965 14.8358 8.80354 14.7241 9.20241L14.2459 10.9104C14.1342 11.3093 13.7203 11.5421 13.3214 11.4304C12.9225 11.3187 12.6897 10.9048 12.8014 10.506L13.2796 8.79797C13.3913 8.3991 13.8052 8.16628 14.2041 8.27797Z',
  d14: 'M6.1136 14.0248C6.22516 13.6258 6.63898 13.3929 7.03788 13.5045L17.6235 16.4649C18.0224 16.5765 18.2554 16.9903 18.1438 17.3892C18.0322 17.7881 17.6184 18.021 17.2195 17.9095L16.9951 17.8467L15.8646 22.2501H5.0332L6.88923 15.0204L6.63388 14.949C6.23498 14.8375 6.00204 14.4237 6.1136 14.0248Z',
  d15: 'M11.2624 18.778C11.6613 18.8897 11.8941 19.3035 11.7824 19.7024L11.2224 21.7024C11.1107 22.1013 10.6968 22.3341 10.298 22.2224C9.8991 22.1107 9.66628 21.6968 9.77797 21.298L10.338 19.298C10.4497 18.8991 10.8635 18.6663 11.2624 18.778Z',
  d16: 'M2 21.5H22',
  d17: 'M16.4599 16.909L17.7492 11.8772M16.4599 16.909L18.1398 17.3666M16.4599 16.909L7.79897 14.4822M16.4599 16.909L15.3472 21.2517M17.7492 11.8772L19.0385 6.84542M17.7492 11.8772L19.4056 12.2311M17.7492 11.8772L9.08825 9.45034M19.0385 6.84542L17.1138 6.30611M19.0385 6.84542L20.5991 7.27647M7.79897 14.4822L9.08825 9.45034M7.79897 14.4822L5.94128 13.9022M7.79897 14.4822L6.06443 21.2517M9.08825 9.45034L10.3775 4.41853M9.08825 9.45034L7.20543 8.87671M10.3775 4.41853L8.61591 3.87057M10.3775 4.41853L12.3022 4.95784M12.3022 4.95784L17.1138 6.30611M12.3022 4.95784L13 2.5L17.7492 3.87057L17.1138 6.30611',
  d18: 'M14.0004 8.97559L13.5222 10.6869M12.5659 14.1087L12.1804 15.4882M11.0604 19.496L10.582 21.2078',
  d19: 'M22 22.25H2V20.75H22V22.25Z',
  d20: 'M13.6097 13.5158L13.0705 15.1798L11.625 14.7748L12.1827 13.0535L13.6097 13.5158Z',
  d21: 'M13.208 1.77941C13.0163 1.7241 12.8105 1.74742 12.6361 1.8442C12.4617 1.94099 12.333 2.10327 12.2785 2.29517L11.7849 4.03398L10.5902 3.69922L8.83871 3.15441L8.39317 4.58672L9.47408 4.92294L8.55645 8.50428L7.42404 8.15927L6.98687 9.59415L8.18377 9.9588L7.26852 13.5308L6.16481 13.1863L5.71781 14.6181L6.89571 14.9859L5.33793 21.0656C5.28041 21.2901 5.32989 21.5285 5.47196 21.7116C5.61403 21.8946 5.83274 22.0017 6.06446 22.0017H15.3473C15.6898 22.0017 15.9888 21.7697 16.0738 21.4379L16.9975 17.8328L17.9428 18.0902L18.337 16.643L17.3699 16.3795L18.297 12.7612L19.2489 12.9646L19.5623 11.4977L18.6696 11.3069L19.5754 7.77179L20.3994 7.9994L20.7988 6.55354L19.2409 6.12323L19.2382 6.12248L18.0255 5.78267L18.475 4.05989C18.5776 3.66637 18.3479 3.26274 17.9572 3.14997L13.208 1.77941ZM16.5804 5.37788L13.2287 4.43871L13.5152 3.42944L16.8385 4.38849L16.5804 5.37788ZM9.6239 10.3795L16.8401 12.4015L15.9233 15.9799L12.3152 14.9689L8.70703 13.9578L9.6239 10.3795ZM9.94336 20.75H11.5194L12.133 18.8464L10.7053 18.3862L9.94336 20.75ZM14.4644 10.1774L14.9462 8.6049L13.512 8.16553L13.0196 9.77256L14.4644 10.1774Z',
};

export const IconPisaTowerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-stroke-rounded IconPisaTowerStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPisaTowerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-duotone-rounded IconPisaTowerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPisaTowerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-twotone-rounded IconPisaTowerTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPisaTowerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-solid-rounded IconPisaTowerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPisaTowerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-bulk-rounded IconPisaTowerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconPisaTowerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-stroke-sharp IconPisaTowerStrokeSharp"
    >
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

export const IconPisaTowerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pisa-tower-solid-sharp IconPisaTowerSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPisaTower: TheIconSelfPack = {
  name: 'PisaTower',
  StrokeRounded: IconPisaTowerStrokeRounded,
  DuotoneRounded: IconPisaTowerDuotoneRounded,
  TwotoneRounded: IconPisaTowerTwotoneRounded,
  SolidRounded: IconPisaTowerSolidRounded,
  BulkRounded: IconPisaTowerBulkRounded,
  StrokeSharp: IconPisaTowerStrokeSharp,
  SolidSharp: IconPisaTowerSolidSharp,
};