import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5',
  d2: 'M11.5 20C11.5 20 10.0691 19.9878 9.09883 19.9634C5.95033 19.8843 4.37608 19.8448 3.24496 18.7094C2.11383 17.5739 2.08114 16.0412 2.01577 12.9756C1.99475 11.9899 1.99474 11.0101 2.01576 10.0244C2.08114 6.95885 2.11382 5.42608 3.24495 4.29065C4.37608 3.15521 5.95033 3.11566 9.09882 3.03656C11.0393 2.98781 12.9607 2.98781 14.9012 3.03657C18.0497 3.11568 19.6239 3.15523 20.7551 4.29066C21.8862 5.42609 21.9189 6.95886 21.9842 10.0244C21.9918 10.3812 21.9967 10.9995 21.9988 11.5',
  d3: 'M14 17H22M18 21L18 13',
  d4: 'M9.09883 19.9647C11.0393 20.0118 12.9607 20.0118 14.9012 19.9647C18.0497 19.8883 19.6239 19.8501 20.755 18.7539C21.8862 17.6576 21.9189 16.1777 21.9842 13.2179V13.2178C22.0053 12.2661 22.0053 11.3201 21.9842 10.3684C21.9392 8.32941 21.9097 6.99275 21.5259 6L12 10.8276L2.47411 6C2.09032 6.99275 2.0608 8.32941 2.01576 10.3684C1.99474 11.3201 1.99475 12.2661 2.01577 13.2178C2.08114 16.1777 2.11383 17.6576 3.24496 18.7539C4.37608 19.8501 5.95033 19.8883 9.09883 19.9647Z',
  d5: 'M15.4545 10.162L19.6903 7.76197C20.0513 7.55742 20.2318 7.45514 20.3787 7.53609C20.5255 7.61703 20.5352 7.81979 20.5545 8.22529C20.5806 8.77185 20.5947 9.40551 20.6107 10.1547C20.6231 10.7362 20.6281 11.1493 20.6256 11.5961C20.6226 12.1479 21.058 12.6048 21.6098 12.6166C22.1615 12.6283 22.6205 12.1905 22.6239 11.6387C22.6269 11.1618 22.6219 10.7253 22.6088 10.1121L22.6072 10.0368C22.5759 8.57128 22.5501 7.36037 22.3795 6.37916C22.1977 5.3336 21.8388 4.45811 21.0894 3.70674C20.666 3.28228 20.1996 2.9827 19.6838 2.76889C19.6053 2.72604 19.5211 2.69373 19.4335 2.67311C19.1037 2.55684 18.7544 2.47116 18.3841 2.40676C17.3831 2.23265 16.1413 2.20152 14.6319 2.16368L14.557 2.16181C12.6013 2.11273 11.1482 2.11274 9.19246 2.16181L9.11761 2.16369C7.60825 2.20152 6.36636 2.23265 5.3654 2.40675C4.30303 2.59154 3.41352 2.95141 2.66011 3.70674C1.91066 4.45811 1.55181 5.3336 1.37001 6.37916C1.1994 7.36038 1.17359 8.57123 1.14234 10.0367L1.14073 10.1121C1.11942 11.1101 1.11943 11.64 1.14074 12.6379L1.14235 12.7133C1.1736 14.1788 1.19942 15.3896 1.37003 16.3709C1.55182 17.4164 1.91067 18.2919 2.66013 19.0433C3.41353 19.7986 4.30305 20.1585 5.36542 20.3433C6.36638 20.5174 7.60825 20.5485 9.11761 20.5863L9.19247 20.5882C9.79137 20.6032 10.3431 20.6137 10.8766 20.6195C11.4278 20.6255 11.8746 20.1782 11.8746 19.627C11.8746 19.0758 11.4278 18.6295 10.8766 18.6233C10.3594 18.6176 9.82403 18.6074 9.24267 18.5928C7.63972 18.5526 6.54649 18.5226 5.7083 18.3768C4.91502 18.2388 4.45285 18.0124 4.07597 17.6345C3.69514 17.2527 3.47251 16.7968 3.33907 16.0293C3.19736 15.2143 3.17211 14.1553 3.1388 12.5953C3.1181 11.6258 3.11809 11.1242 3.13879 10.1547C3.15478 9.40561 3.16892 8.77204 3.19498 8.22553C3.21433 7.82001 3.224 7.61725 3.37084 7.5363C3.51768 7.45535 3.69819 7.55763 4.05921 7.76219L8.29461 10.162C9.59422 10.8984 10.6934 11.375 11.8746 11.375C13.0558 11.375 14.1549 10.8984 15.4545 10.162Z',
  d6: 'M17.875 11.875C18.4273 11.875 18.875 12.3227 18.875 12.875V15.875H21.875C22.4273 15.875 22.875 16.3227 22.875 16.875C22.875 17.4273 22.4273 17.875 21.875 17.875H18.875V20.875C18.875 21.4273 18.4273 21.875 17.875 21.875C17.3227 21.875 16.875 21.4273 16.875 20.875V17.875H13.875C13.3227 17.875 12.875 17.4273 12.875 16.875C12.875 16.3227 13.3227 15.875 13.875 15.875H16.875L16.875 12.875C16.875 12.3227 17.3227 11.875 17.875 11.875Z',
  d7: 'M15.4546 10.162L19.6904 7.76197C20.0514 7.55742 20.2319 7.45514 20.3788 7.53609C20.5256 7.61703 20.5353 7.8198 20.5546 8.2253C20.5807 8.77187 20.5948 9.40551 20.6108 10.1547C20.6233 10.7362 20.6282 11.1493 20.6257 11.5961C20.6227 12.1479 21.0582 12.6048 21.6099 12.6166C22.1617 12.6283 22.6206 12.1905 22.624 11.6387C22.627 11.1618 22.622 10.7253 22.6089 10.1121L22.6073 10.0368C22.576 8.57128 22.5502 7.36037 22.3796 6.37916C22.1978 5.3336 21.839 4.45811 21.0895 3.70674C20.6661 3.28228 20.1998 2.9827 19.6839 2.76889C19.6054 2.72604 19.5213 2.69373 19.4336 2.67311C19.1038 2.55684 18.7545 2.47116 18.3842 2.40676C17.3833 2.23265 16.1414 2.20152 14.632 2.16368L14.5572 2.16181C12.6014 2.11273 11.1484 2.11274 9.19258 2.16181L9.11773 2.16369C7.60837 2.20152 6.36649 2.23265 5.36552 2.40675C4.30315 2.59154 3.41364 2.95141 2.66024 3.70674C1.91078 4.45811 1.55193 5.3336 1.37014 6.37916C1.19953 7.36038 1.17371 8.57123 1.14246 10.0367L1.14085 10.1121C1.11955 11.1101 1.11956 11.64 1.14086 12.6379L1.14247 12.7133C1.17372 14.1788 1.19954 15.3896 1.37015 16.3709C1.55195 17.4164 1.91079 18.2919 2.66025 19.0433C3.41365 19.7986 4.30317 20.1585 5.36554 20.3433C6.3665 20.5174 7.60838 20.5485 9.11773 20.5863L9.1926 20.5882C9.79149 20.6032 10.3432 20.6137 10.8767 20.6195C11.4279 20.6255 11.8747 20.1782 11.8747 19.627C11.8747 19.0758 11.4279 18.6295 10.8767 18.6233C10.3595 18.6176 9.82415 18.6074 9.24279 18.5928C7.63984 18.5526 6.54661 18.5226 5.70843 18.3768C4.91515 18.2388 4.45298 18.0124 4.07609 17.6345C3.69526 17.2527 3.47264 16.7968 3.33919 16.0293C3.19749 15.2143 3.17223 14.1553 3.13892 12.5953C3.11822 11.6258 3.11821 11.1242 3.13891 10.1547C3.15491 9.40561 3.16904 8.77204 3.19511 8.22553C3.21445 7.82001 3.22412 7.61725 3.37096 7.5363C3.5178 7.45535 3.69831 7.55763 4.05933 7.76219L8.29473 10.162C9.59434 10.8984 10.6935 11.375 11.8747 11.375C13.0559 11.375 14.155 10.8984 15.4546 10.162Z',
  d8: 'M17.8751 11.875C18.4274 11.875 18.8751 12.3227 18.8751 12.875V15.875H21.8751C22.4274 15.875 22.8751 16.3227 22.8751 16.875C22.8751 17.4273 22.4274 17.875 21.8751 17.875H18.8751V20.875C18.8751 21.4273 18.4274 21.875 17.8751 21.875C17.3228 21.875 16.8751 21.4273 16.8751 20.875V17.875H13.8751C13.3228 17.875 12.8751 17.4273 12.8751 16.875C12.8751 16.3227 13.3228 15.875 13.8751 15.875H16.8751L16.8751 12.875C16.8751 12.3227 17.3228 11.875 17.8751 11.875Z',
  d9: 'M22 11.5V3H2V20H12',
  d10: 'M2 6.5L12 11.5L22 6.5',
  d11: 'M1.25 3.22368C1.25 2.68593 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68593 22.75 3.22368V14H20.796V8.10217L12.0003 12.5L3.20508 8.1024V18.8026H12V20.75H2.22727C1.68754 20.75 1.25 20.3141 1.25 19.7763V3.22368Z',
  d12: 'M18.75 18.75V21.75H16.75L16.75 18.75H13.75V16.75H16.75L16.75 13.75H18.75V16.75H21.75V18.75H18.75Z',
};

export const IconMailAdd01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-stroke-rounded IconMailAdd01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailAdd01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-duotone-rounded IconMailAdd01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailAdd01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-twotone-rounded IconMailAdd01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAdd01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-solid-rounded IconMailAdd01SolidRounded"
    >
      <path 
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

export const IconMailAdd01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-bulk-rounded IconMailAdd01BulkRounded"
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

export const IconMailAdd01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-stroke-sharp IconMailAdd01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAdd01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-01-solid-sharp IconMailAdd01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailAdd01: TheIconSelfPack = {
  name: 'MailAdd01',
  StrokeRounded: IconMailAdd01StrokeRounded,
  DuotoneRounded: IconMailAdd01DuotoneRounded,
  TwotoneRounded: IconMailAdd01TwotoneRounded,
  SolidRounded: IconMailAdd01SolidRounded,
  BulkRounded: IconMailAdd01BulkRounded,
  StrokeSharp: IconMailAdd01StrokeSharp,
  SolidSharp: IconMailAdd01SolidSharp,
};