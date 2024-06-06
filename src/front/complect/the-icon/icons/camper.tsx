import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 7H20.9383C21.4324 7 21.6794 7 21.8203 6.88531C21.9062 6.81539 21.9664 6.71959 21.9915 6.61269C22.0327 6.43736 21.9222 6.21984 21.7013 5.78486C21.1469 4.6935 20.8697 4.14783 20.438 3.76671C20.1688 3.529 19.8587 3.34036 19.5223 3.20962C18.9829 3 18.3631 3 17.1235 3H8.09555C5.22208 3 3.78535 3 2.89267 3.87868C2 4.75736 2 6.17157 2 9V14',
  d2: 'M9 19H15M19 19C20.6569 19 22 17.6569 22 16V13H4C3.05719 13 2.58579 13 2.29289 13.2929C2 13.5858 2 14.0572 2 15V16C2 17.4142 2 18.1213 2.43934 18.5607C2.87868 19 3.58579 19 5 19',
  d3: 'M6 7L8 7',
  d4: 'M14 13V8.9657C14 8.25047 14 7.89285 14.123 7.62348C14.2146 7.42269 14.3522 7.25756 14.5196 7.14756C14.744 7 15.0421 7 15.6381 7C16.5393 7 16.9899 7 17.4041 7.14611C17.7159 7.25609 18.0108 7.42615 18.2772 7.64963C18.631 7.94652 18.9125 8.36875 19.4755 9.21321L22 13',
  d5: 'M20.9383 7H14V13H2V9C2 6.17157 2 4.75736 2.89267 3.87868C3.78535 3 5.22208 3 8.09555 3H17.1235C18.3631 3 18.9829 3 19.5223 3.20962C19.8587 3.34036 20.1688 3.529 20.438 3.76671C20.8697 4.14783 21.1469 4.6935 21.7013 5.78486C21.9222 6.21983 22.0327 6.43736 21.9915 6.61269C21.9664 6.71959 21.9062 6.81539 21.8203 6.88531C21.6794 7 21.4324 7 20.9383 7Z',
  d6: 'M4 13H22V16C22 17.6569 20.6569 19 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19H9C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19C3.58579 19 2.87868 19 2.43934 18.5607C2 18.1213 2 17.4142 2 16V15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13Z',
  d7: 'M16 7H20.9383C21.4324 7 21.6794 7 21.8203 6.88531C21.9062 6.81539 21.9664 6.71959 21.9915 6.61269C22.0327 6.43736 21.9222 6.21984 21.7013 5.78486C21.1469 4.6935 20.8697 4.14783 20.438 3.76671C20.1688 3.529 19.8587 3.34036 19.5223 3.20962C18.9829 3 18.3631 3 17.1235 3H8.09555C5.22208 3 3.78535 3 2.89267 3.87868C2 4.75736 2 6.17157 2 9V13V14',
  d8: 'M2.7695 12.0455C3.10941 11.9998 3.52154 11.9999 3.94561 12L22 12C22.5523 12 23 12.4477 23 13V16C23 17.3785 22.3027 18.5942 21.2415 19.3134C21.2177 19.3296 21.2058 19.3377 21.1924 19.3449C21.0032 19.4469 20.7732 19.325 20.7515 19.1111C20.75 19.096 20.75 19.064 20.75 19C20.75 16.9289 19.0711 15.25 17 15.25C14.9289 15.25 13.25 16.9289 13.25 19C13.25 19.0752 13.2522 19.1499 13.2566 19.224C13.2797 19.6157 13.2912 19.8116 13.2024 19.9058C13.1136 20 12.9413 20 12.5968 20H11.4032C11.0587 20 10.8864 20 10.7976 19.9058C10.7088 19.8116 10.7203 19.6157 10.7434 19.224C10.7478 19.1499 10.75 19.0752 10.75 19C10.75 16.9289 9.07107 15.25 7 15.25C4.92893 15.25 3.25 16.9289 3.25 19C3.25 19.2766 3.27994 19.5462 3.33676 19.8057C3.35255 19.8778 3.29405 19.946 3.22086 19.9362C2.7015 19.8664 2.16869 19.7042 1.73225 19.2678C1.29581 18.8313 1.13367 18.2985 1.06385 17.7792C0.999892 17.3035 0.999948 16.7157 1.00001 16.0616L1.00001 14.9456C0.999924 14.5215 0.999843 14.1094 1.04554 13.7695C1.09706 13.3863 1.22259 12.949 1.5858 12.5858C1.94902 12.2226 2.38629 12.0971 2.7695 12.0455Z',
  d9: 'M19.16 4.14186C18.8372 4.01639 18.4448 4.00016 17.1235 4.00016H8.09556C6.63098 4.00016 5.63159 4.00222 4.88251 4.10135C4.1606 4.19689 3.82316 4.36612 3.59418 4.59151C3.36739 4.81474 3.19843 5.14053 3.10239 5.84368C3.00219 6.57723 3 7.55724 3 9.00016V14.0002C3 14.5524 2.55229 15.0002 2 15.0002C1.44772 15.0002 1 14.5524 1 14.0002L1 8.92864C0.999965 7.57533 0.999936 6.45781 1.12079 5.57301C1.24792 4.64227 1.52529 3.82162 2.19118 3.16617C2.85487 2.51288 3.68213 2.24277 4.62012 2.11864C5.51585 2.0001 6.64844 2.00013 8.02575 2.00016C11.1159 2.00016 14.2061 2.00229 17.2963 2.00008C18.3666 1.99931 19.1667 1.99874 19.8845 2.27769C20.3302 2.45091 20.7418 2.70113 21.0999 3.01722C21.9525 3.76994 22.4017 4.92637 22.8784 5.93836C22.9515 6.12903 23.055 6.45872 22.965 6.84165C22.8888 7.16558 22.7072 7.45293 22.4516 7.661C22.1517 7.9052 21.8155 7.96012 21.6128 7.9807C21.42 8.0003 21.1894 8.00023 20.9742 8.00017L16 8.00016C15.4477 8.00016 15 7.55245 15 7.00016C15 6.44788 15.4477 6.00016 16 6.00016H20.3618C20.5085 6.00016 20.5819 6.00016 20.6112 5.95267C20.6405 5.90518 20.6076 5.83953 20.5417 5.70825C20.216 5.05931 19.8742 4.41941 19.16 4.14186Z',
  d10: 'M5 7C5 6.44772 5.44772 6 6 6L8 6C8.55228 6 9 6.44772 9 7C9 7.55228 8.55228 8 8 8L6 8C5.44772 8 5 7.55228 5 7Z',
  d11: 'M17.0715 8.08932C16.8561 8.01336 16.6085 8.00016 15.6381 8.00016C15.1133 8.00016 15.0128 8 15.0128 8.1997C15.0006 8.3677 15 8.59356 15 8.96586V13.0002C15 13.5524 14.5523 14.0002 14 14.0002C13.4477 14.0002 13 13.5524 13 13.0002V8.96586C13 8.62292 12.9994 8.31236 13.018 8.0554C13.0928 7.02084 13.7822 6.13375 14.8359 6.02398C15.1165 5.99475 15.4586 6.00036 15.7739 6.00008C16.5419 5.9994 17.1574 5.99885 17.7368 6.20321C18.1675 6.35513 18.5664 6.58713 18.9199 6.88371C19.4102 7.29505 19.78 7.86739 20.3075 8.65867L22.8321 12.4455C23.1384 12.905 23.0142 13.5259 22.5547 13.8322C22.0952 14.1386 21.4743 14.0144 21.168 13.5549L18.6434 9.76807C18.045 8.87043 17.8519 8.5983 17.6344 8.41586C17.4552 8.26548 17.2644 8.15737 17.0715 8.08932Z',
  d12: 'M17 16.5C15.6193 16.5 14.5 17.6193 14.5 19C14.5 20.3807 15.6193 21.5 17 21.5C18.3807 21.5 19.5 20.3807 19.5 19C19.5 17.6193 18.3807 16.5 17 16.5Z',
  d13: 'M7 16.5C5.61929 16.5 4.5 17.6193 4.5 19C4.5 20.3807 5.61929 21.5 7 21.5C8.38071 21.5 9.5 20.3807 9.5 19C9.5 17.6193 8.38071 16.5 7 16.5Z',
  d14: 'M19.16 4.14186C18.8372 4.01639 18.4448 4.00016 17.1235 4.00016H8.09556C6.63098 4.00016 5.63159 4.00222 4.88251 4.10135C4.1606 4.19689 3.82316 4.36612 3.59418 4.59151C3.36739 4.81474 3.19843 5.14053 3.10239 5.84368C3.00219 6.57723 3 7.55724 3 9.00016V12.0218C3.28856 11.9999 3.61341 11.9999 3.9456 12H3.94561L13 12V8.96586L13 8.93411C13 8.60375 13 8.30441 13.018 8.0554C13.0928 7.02084 13.7822 6.13375 14.8359 6.02398C15.0761 5.99896 15.3614 5.99946 15.6363 5.99995L15.7739 6.00008H15.774C15.8624 6 15.9489 5.99992 16.0335 6.00016H20.3618C20.5085 6.00016 20.5819 6.00016 20.6112 5.95267C20.6405 5.90518 20.6076 5.83953 20.5417 5.70825C20.216 5.05931 19.8742 4.41941 19.16 4.14186ZM15 12L20.1314 12L18.6434 9.76807C18.045 8.87043 17.8519 8.5983 17.6344 8.41586C17.4552 8.26548 17.2644 8.15737 17.0715 8.08932C16.8561 8.01336 16.6085 8.00016 15.6381 8.00016H15.6369C15.1131 8.00016 15.0128 8.00016 15.0128 8.1997C15.0006 8.3677 15 8.59356 15 8.96586V12ZM22.8216 12.4297L20.3075 8.65867L20.2301 8.54244L20.23 8.54228C20.1007 8.34814 19.9806 8.16774 19.8651 8.00017L20.9742 8.00017C21.1894 8.00023 21.42 8.0003 21.6128 7.9807C21.8155 7.96012 22.1517 7.9052 22.4516 7.661C22.7072 7.45293 22.8888 7.16558 22.965 6.84165C23.055 6.45872 22.9515 6.12903 22.8784 5.93836C22.8129 5.79932 22.748 5.65756 22.6824 5.51448L22.6823 5.51435C22.2706 4.61613 21.8353 3.66649 21.0999 3.01722C20.7418 2.70113 20.3302 2.45091 19.8845 2.27769C19.1667 1.99874 18.3666 1.99931 17.2963 2.00008C15.2231 2.00156 13.15 2.00109 11.0768 2.00062C10.0598 2.00039 9.04276 2.00016 8.02575 2.00016C6.64844 2.00013 5.51585 2.0001 4.62012 2.11864C3.68213 2.24277 2.85487 2.51288 2.19118 3.16617C1.52529 3.82162 1.24792 4.64227 1.12079 5.57301C0.999937 6.4578 0.999965 7.57531 1 8.9286V8.92864L1 14.0002C1 14.0533 1.00415 14.1054 1.01212 14.1563C0.999901 14.4037 0.999953 14.6722 1.00001 14.9456L1.00001 16.0616C0.999948 16.7157 0.999892 17.3035 1.06385 17.7792C1.13367 18.2985 1.29581 18.8313 1.73225 19.2678C2.16869 19.7042 2.7015 19.8664 3.22086 19.9362C3.29405 19.946 3.35255 19.8778 3.33676 19.8057C3.27994 19.5462 3.25 19.2766 3.25 19C3.25 16.9289 4.92893 15.25 7 15.25C9.07107 15.25 10.75 16.9289 10.75 19C10.75 19.0752 10.7478 19.1499 10.7434 19.224C10.7203 19.6157 10.7088 19.8116 10.7976 19.9058C10.8864 20 11.0587 20 11.4032 20H12.5968C12.9413 20 13.1136 20 13.2024 19.9058C13.2912 19.8116 13.2797 19.6157 13.2566 19.224C13.2522 19.1499 13.25 19.0752 13.25 19C13.25 16.9289 14.9289 15.25 17 15.25C19.0711 15.25 20.75 16.9289 20.75 19C20.75 19.064 20.75 19.096 20.7515 19.1111C20.7732 19.325 21.0032 19.4469 21.1924 19.3449C21.2058 19.3377 21.2177 19.3296 21.2415 19.3134C22.3027 18.5942 23 17.3785 23 16V13.013C23.0011 12.9308 22.9922 12.848 22.9726 12.7667C22.9433 12.644 22.8914 12.5302 22.8216 12.4297Z',
  d15: 'M18 7H22L20 3H2V14',
  d16: 'M5 7L8 7',
  d17: 'M9 19H15M19 19H22V13L18 7H14V13M5 19H2V13H21.3477',
  d18: 'M4.5 19.25C4.5 17.8693 5.61929 16.75 7 16.75C8.38071 16.75 9.5 17.8693 9.5 19.25C9.5 20.6307 8.38071 21.75 7 21.75C5.61929 21.75 4.5 20.6307 4.5 19.25ZM14.5 19.25C14.5 17.8693 15.6193 16.75 17 16.75C18.3807 16.75 19.5 17.8693 19.5 19.25C19.5 20.6307 18.3807 21.75 17 21.75C15.6193 21.75 14.5 20.6307 14.5 19.25Z',
  d19: 'M8 8L5 8L5 6L8 6V8Z',
  d20: 'M1.25 3.22222C1.25 2.68528 1.68754 2.25 2.22727 2.25H19.8182C20.1883 2.25 20.5267 2.45806 20.6923 2.78743L22.6468 6.67632C22.7983 6.9777 22.7821 7.33561 22.604 7.62224C22.426 7.90887 22.1114 8.08333 21.7727 8.08333H19.6897L22.5859 12.4052C22.6929 12.5649 22.75 12.7525 22.75 12.9444V18.7778C22.75 19.3147 22.3125 19.75 21.7727 19.75H20.717C20.7388 19.5864 20.75 19.4195 20.75 19.25C20.75 17.1789 19.0711 15.5 17 15.5C14.9289 15.5 13.25 17.1789 13.25 19.25C13.25 19.4195 13.2612 19.5864 13.283 19.75H10.717C10.7388 19.5864 10.75 19.4195 10.75 19.25C10.75 17.1789 9.07107 15.5 7 15.5C4.92893 15.5 3.25 17.1789 3.25 19.25C3.25 19.4195 3.26125 19.5864 3.28304 19.75H2.22727C1.68754 19.75 1.25 19.3147 1.25 18.7778V3.22222ZM3.20312 11.9721V4.19434H19.2128L20.19 6.13878H13.9531C13.4134 6.13878 12.9759 6.57406 12.9759 7.111V11.9721H3.20312ZM14.9304 11.9721H19.9453L17.3392 8.08322H14.9304V11.9721Z',
};

export const IconCamperStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-stroke-rounded IconCamperStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconCamperDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-duotone-rounded IconCamperDuotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconCamperTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-twotone-rounded IconCamperTwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconCamperSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-solid-rounded IconCamperSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconCamperBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-bulk-rounded IconCamperBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
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
    </TheIconWrapper>
  );
};

export const IconCamperStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-stroke-sharp IconCamperStrokeSharp"
    >
      <circle 
        cx="17" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconCamperSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camper-solid-sharp IconCamperSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCamper: TheIconSelfPack = {
  name: 'Camper',
  StrokeRounded: IconCamperStrokeRounded,
  DuotoneRounded: IconCamperDuotoneRounded,
  TwotoneRounded: IconCamperTwotoneRounded,
  SolidRounded: IconCamperSolidRounded,
  BulkRounded: IconCamperBulkRounded,
  StrokeSharp: IconCamperStrokeSharp,
  SolidSharp: IconCamperSolidSharp,
};