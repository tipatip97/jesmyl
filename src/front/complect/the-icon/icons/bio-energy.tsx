import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.51691 12H3.8974C3.46866 12 3.25429 12 3.12182 12.1371C2.98934 12.2742 2.99444 12.4858 3.00462 12.9091C3.01499 13.34 3.03966 13.7692 3.09832 14.1975C3.12255 14.3744 3.13466 14.4628 3.1927 14.5082C3.25075 14.5536 3.35607 14.5413 3.56672 14.5167C4.73441 14.3801 5.86167 15.3326 5.86167 16.5839C5.86167 17.2074 5.59266 17.767 5.16638 18.1489C5.01046 18.2885 4.9325 18.3584 4.92694 18.4317C4.92138 18.505 4.97764 18.5735 5.09015 18.7106C5.49816 19.2075 5.9569 19.6597 6.45825 20.059C6.57718 20.1537 6.63664 20.2011 6.70196 20.1992C6.76728 20.1973 6.83399 20.1376 6.96741 20.0183C7.32763 19.6962 7.79991 19.5009 8.317 19.5009C9.42587 19.5009 10.3136 20.4293 10.3606 21.5054C10.3684 21.684 10.3723 21.7732 10.4156 21.8217C10.4589 21.8703 10.533 21.8813 10.6812 21.9035C11.5421 22.0322 12.4579 22.0322 13.3188 21.9035C13.467 21.8813 13.5411 21.8703 13.5844 21.8217C13.6277 21.7732 13.6316 21.684 13.6394 21.5054C13.6864 20.4293 14.5741 19.5009 15.683 19.5009C16.2001 19.5009 16.6724 19.6962 17.0326 20.0183C17.166 20.1376 17.2327 20.1973 17.298 20.1992C17.3634 20.2011 17.4228 20.1537 17.5417 20.059C18.0431 19.6597 18.5018 19.2075 18.9098 18.7106C19.0224 18.5735 19.0786 18.505 19.0731 18.4317C19.0675 18.3584 18.9895 18.2885 18.8336 18.1489C18.4073 17.767 18.1383 17.2074 18.1383 16.5839C18.1383 15.3326 19.2656 14.3801 20.4333 14.5167C20.6439 14.5413 20.7493 14.5536 20.8073 14.5082C20.8653 14.4628 20.8775 14.3744 20.9017 14.1975C20.9603 13.7692 20.985 13.34 20.9954 12.9091C21.0056 12.4858 21.0107 12.2742 20.8782 12.1371C20.7457 12 20.5313 12 20.1026 12H16.4831C16.2763 14.3363 14.3481 16.1671 12 16.1671C9.65187 16.1671 7.72366 14.3363 7.51691 12Z',
  d2: 'M7 12H17',
  d3: 'M12 12L12 6',
  d4: 'M11.7412 7.7412C12.2899 6.20331 11.9672 4.44278 10.7622 3.2378C9.55722 2.03282 7.79669 1.71006 6.2588 2.2588C5.71007 3.79669 6.03282 5.55722 7.2378 6.7622C8.44278 7.96718 10.2033 8.28993 11.7412 7.7412Z',
  d5: 'M12.2157 9.78433C11.7584 8.50276 12.0274 7.03565 13.0315 6.0315C14.0356 5.02735 15.5028 4.75839 16.7843 5.21567C17.2416 6.49725 16.9726 7.96435 15.9685 8.9685C14.9644 9.97265 13.4972 10.2416 12.2157 9.78433Z',
  d6: 'M12 12V6M11.7412 7.7412C12.2899 6.20331 11.9672 4.44278 10.7622 3.2378C9.55722 2.03282 7.79669 1.71006 6.2588 2.2588C5.71007 3.79669 6.03282 5.55722 7.2378 6.7622C8.44278 7.96718 10.2033 8.28993 11.7412 7.7412ZM12.2157 9.78433C11.7584 8.50276 12.0274 7.03565 13.0315 6.0315C14.0356 5.02735 15.5028 4.75839 16.7843 5.21567C17.2416 6.49725 16.9726 7.96435 15.9685 8.9685C14.9644 9.97265 13.4972 10.2416 12.2157 9.78433Z',
  d7: 'M3.89696 11.2498H7.51646C7.90505 11.2498 8.22929 11.5466 8.26354 11.9337C8.43734 13.8976 10.0546 15.4169 11.9996 15.4169C13.9445 15.4169 15.5618 13.8976 15.7356 11.9337C15.7698 11.5466 16.0941 11.2498 16.4826 11.2498L20.1355 11.2498C20.32 11.2497 20.5275 11.2496 20.7039 11.274C20.9147 11.3032 21.1888 11.3795 21.417 11.6157C21.6418 11.8482 21.711 12.1196 21.735 12.3306C21.755 12.5064 21.7492 12.7449 21.7447 12.927C21.734 13.3734 21.7081 13.8329 21.6443 14.299C21.6347 14.3696 21.6174 14.4979 21.5914 14.5952C21.5595 14.7148 21.4831 14.9312 21.2689 15.0987C21.0324 15.2838 20.7735 15.2893 20.671 15.2885C20.5687 15.2876 20.4319 15.2715 20.3457 15.2614C19.6174 15.1762 18.8879 15.7874 18.8879 16.5836C18.8879 16.9876 19.0613 17.3461 19.3336 17.59C19.3974 17.6471 19.4989 17.7378 19.5667 17.8132C19.6357 17.8898 19.7983 18.0825 19.8205 18.3747C19.8408 18.6426 19.7353 18.8432 19.6694 18.9476C19.6158 19.0324 19.534 19.1317 19.489 19.1863C19.0477 19.7238 18.5513 20.2131 18.0085 20.6454C17.9615 20.683 17.8717 20.7548 17.7939 20.8029C17.6956 20.8637 17.5161 20.9556 17.276 20.9487C17.0145 20.9411 16.8297 20.8174 16.7505 20.76C16.6763 20.7063 16.5863 20.6256 16.5322 20.5772C16.3029 20.3721 16.0066 20.2506 15.6826 20.2506C15.0054 20.2506 14.4191 20.832 14.3883 21.5379C14.3852 21.6105 14.38 21.7302 14.367 21.82C14.3532 21.9152 14.3142 22.1299 14.1433 22.3212C13.9859 22.4973 13.7997 22.5653 13.6882 22.5958C13.6005 22.6197 13.4879 22.6364 13.4293 22.645C12.4948 22.7847 11.5043 22.7847 10.5698 22.645C10.5112 22.6364 10.3986 22.6197 10.3109 22.5958C10.1994 22.5653 10.0132 22.4973 9.85581 22.3212C9.68493 22.1299 9.64594 21.9152 9.63211 21.82C9.61907 21.7302 9.61394 21.6105 9.61084 21.5379C9.58001 20.832 8.99368 20.2506 8.31656 20.2506C7.99252 20.2506 7.69618 20.3721 7.46693 20.5772C7.41284 20.6256 7.32281 20.7063 7.24857 20.76C7.16943 20.8174 6.98457 20.9411 6.7231 20.9487C6.483 20.9556 6.30352 20.8637 6.20519 20.8029C6.1274 20.7548 6.03757 20.683 5.99056 20.6454C5.44777 20.2131 4.9514 19.7238 4.51007 19.1863C4.46511 19.1317 4.38333 19.0324 4.32975 18.9476C4.26376 18.8431 4.15833 18.6426 4.17865 18.3747C4.20081 18.0825 4.36339 17.8898 4.43236 17.8132C4.50019 17.7378 4.60167 17.6471 4.66552 17.59C4.93783 17.3461 5.11122 16.9876 5.11122 16.5836C5.11122 15.7874 4.38166 15.1762 3.65339 15.2614C3.56721 15.2715 3.43042 15.2876 3.32809 15.2885C3.22563 15.2893 2.96674 15.2838 2.73017 15.0987C2.51602 14.9312 2.43964 14.7148 2.40773 14.5953C2.38174 14.4978 2.36437 14.3696 2.35481 14.299C2.29097 13.8329 2.26514 13.3734 2.2544 12.927C2.24992 12.7449 2.24407 12.5064 2.2641 12.3306C2.28815 12.1196 2.35728 11.8482 2.58207 11.6157C2.81034 11.3795 3.08437 11.3032 3.2952 11.274C3.47162 11.2496 3.71245 11.2497 3.89696 11.2498Z',
  d8: 'M6.00652 1.55219C7.79877 0.912697 9.86886 1.2838 11.2923 2.70724C12.0376 3.45255 12.4944 4.37514 12.6687 5.34231C13.8825 4.25168 15.5694 3.98553 17.0366 4.50905C17.2485 4.58467 17.4153 4.75146 17.4909 4.96339C18.039 6.49932 17.7217 8.27599 16.4991 9.4986C15.4807 10.517 14.0779 10.9072 12.75 10.6925V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12L11.25 8.65182C9.6506 8.96668 7.93742 8.52249 6.70724 7.2923C5.2838 5.86886 4.9127 3.79877 5.55219 2.00652C5.62781 1.79459 5.79459 1.62781 6.00652 1.55219Z',
  d9: 'M15.5 12.5C15.5 14.433 13.933 16 12 16C10.067 16 8.5 14.433 8.5 12.5',
  d10: 'M5.26795 20.0331L8.73205 22C10.1969 19.5048 13.8046 19.5047 15.2695 21.9999L18.7336 20.033C17.2874 17.5696 19.1434 14.4668 22 14.4668V12.5H2V14.4668C4.85668 14.4668 6.71425 17.5696 5.26795 20.0331Z',
  d11: 'M9.25 11.25V12.0155C9.25 13.5657 10.4812 14.8223 12 14.8223C13.5188 14.8223 14.75 13.5657 14.75 12.0155V11.25L22.75 11.2501V14.7885H22C19.6954 14.7885 18.2416 17.3369 19.3804 19.3167L19.7657 19.9865L14.997 22.7499L14.6228 22.0993C13.4477 20.0565 10.5539 20.0565 9.37882 22.0994L9.00457 22.75L4.23592 19.9866L4.62118 19.3168C5.75974 17.3374 4.30517 14.7885 2 14.7885H1.25V11.2501L9.25 11.25Z',
  d12: 'M11.2498 8.65187C9.65044 8.96664 7.93737 8.52243 6.70724 7.2923C5.2838 5.86886 4.9127 3.79877 5.55219 2.00652L5.67167 1.67167L6.00652 1.55219C7.79877 0.912697 9.86886 1.2838 11.2923 2.70724C12.0375 3.45246 12.4943 4.37492 12.6686 5.34195C13.8824 4.25162 15.5691 3.98559 17.0361 4.50905L17.371 4.62853L17.4905 4.96339C18.0385 6.49932 17.7212 8.27599 16.4986 9.4986C15.4803 10.5169 14.0776 10.9072 12.7498 10.6925V11.9998H11.2498L11.2498 8.65187Z',
};

export const IconBioEnergyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-stroke-rounded IconBioEnergyStrokeRounded"
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
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
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

export const IconBioEnergyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-duotone-rounded IconBioEnergyDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
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

export const IconBioEnergyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-twotone-rounded IconBioEnergyTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBioEnergySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-solid-rounded IconBioEnergySolidRounded"
    >
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

export const IconBioEnergyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-bulk-rounded IconBioEnergyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBioEnergyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-stroke-sharp IconBioEnergyStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBioEnergySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bio-energy-solid-sharp IconBioEnergySolidSharp"
    >
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

export const iconPackOfBioEnergy: TheIconSelfPack = {
  name: 'BioEnergy',
  StrokeRounded: IconBioEnergyStrokeRounded,
  DuotoneRounded: IconBioEnergyDuotoneRounded,
  TwotoneRounded: IconBioEnergyTwotoneRounded,
  SolidRounded: IconBioEnergySolidRounded,
  BulkRounded: IconBioEnergyBulkRounded,
  StrokeSharp: IconBioEnergyStrokeSharp,
  SolidSharp: IconBioEnergySolidSharp,
};