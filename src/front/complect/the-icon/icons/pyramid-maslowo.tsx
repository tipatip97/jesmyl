import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.75024 7.56659C9.66926 4.5222 10.6288 3 12 3C13.3712 3 14.3307 4.52219 16.2498 7.56658L18.4941 11.1271C21.2362 15.4772 22.6072 17.6522 21.7426 19.3261C20.878 21 18.3834 21 13.3944 21H10.6056C5.61655 21 3.12205 21 2.25742 19.3261C1.3928 17.6522 2.76382 15.4772 5.50587 11.1271L7.75024 7.56659Z',
  d2: 'M3.5 15H9M20.5 15H15M7 9H17',
  d3: 'M12 9L12 21',
  d4: 'M12 3C10.6288 3 9.66927 4.52219 7.75025 7.56658L6.8467 9L17.1533 9L16.2498 7.56658C14.3307 4.52219 13.3712 3 12 3Z',
  d5: 'M20.8505 15L3.14951 15C2.07374 16.9528 1.69855 18.2441 2.25742 19.3261C3.12205 21 5.61655 21 10.6056 21L13.3944 21C18.3834 21 20.878 21 21.7426 19.3261C22.3015 18.2441 21.9263 16.9528 20.8505 15Z',
  d6: 'M7 8.25C6.58579 8.25 6.25 8.58579 6.25 9C6.25 9.41421 6.58579 9.75 7 9.75V8.25ZM17 9.75C17.4142 9.75 17.75 9.41421 17.75 9C17.75 8.58579 17.4142 8.25 17 8.25V9.75ZM3.5 14.25C3.08579 14.25 2.75 14.5858 2.75 15C2.75 15.4142 3.08579 15.75 3.5 15.75V14.25ZM9 15.75C9.41421 15.75 9.75 15.4142 9.75 15C9.75 14.5858 9.41421 14.25 9 14.25V15.75ZM15 14.25C14.5858 14.25 14.25 14.5858 14.25 15C14.25 15.4142 14.5858 15.75 15 15.75V14.25ZM20.5 15.75C20.9142 15.75 21.25 15.4142 21.25 15C21.25 14.5858 20.9142 14.25 20.5 14.25V15.75ZM7 9.75H17V8.25H7V9.75ZM3.5 15.75H9V14.25H3.5V15.75ZM15 15.75H20.5V14.25H15V15.75ZM11.25 9L11.25 21H12.75L12.75 9L11.25 9Z',
  d7: 'M12.0003 2.25C10.985 2.25 10.2122 2.83442 9.51098 3.65408C8.82416 4.45686 8.08085 5.63611 7.15074 7.1117C6.91295 7.48894 6.79405 7.67756 6.86194 7.82528C6.86808 7.83862 6.87518 7.85149 6.8832 7.8638C6.97196 8 7.19492 8 7.64085 8H16.3598C16.8057 8 17.0287 8 17.1175 7.86381C17.1255 7.8515 17.1326 7.83862 17.1387 7.82527C17.2066 7.67755 17.0877 7.48894 16.8499 7.11172L16.8499 7.11171L16.8499 7.11169C15.9198 5.6361 15.1765 4.45686 14.4897 3.65407C13.7884 2.83442 13.0157 2.25 12.0003 2.25ZM18.8471 10.2801C18.7608 10.1431 18.7176 10.0747 18.6499 10.0373C18.5823 10 18.5014 10 18.3395 10H13.602C13.3191 10 13.1777 10 13.0898 10.0879C13.002 10.1757 13.002 10.3172 13.002 10.6L13.002 21.2857C13.002 21.4389 13.002 21.5155 13.0293 21.5751C13.0592 21.6404 13.1116 21.6927 13.1769 21.7227C13.2364 21.75 13.313 21.75 13.4662 21.75H13.4662H13.4663C15.9002 21.75 17.8175 21.75 19.2299 21.532C20.6654 21.3104 21.8103 20.8299 22.4093 19.6703C22.9377 18.6472 22.8041 17.552 22.3397 16.3628C22.2724 16.1906 22.2388 16.1045 22.1623 16.0523C22.0857 16 21.9894 16 21.7967 16H16.002C15.4497 16 15.002 15.5523 15.002 15C15.002 14.4477 15.4497 14 16.002 14H20.1031C20.5668 14 20.7987 14 20.8847 13.847C20.9707 13.694 20.8511 13.4975 20.6119 13.1044C20.1817 12.3973 19.6959 11.6266 19.1646 10.7839L18.8471 10.2801ZM10.5344 21.75C10.6907 21.75 10.7688 21.75 10.8293 21.7216C10.8928 21.6919 10.9438 21.6408 10.9736 21.5774C11.002 21.5169 11.002 21.4387 11.002 21.2825L11.002 10.6C11.002 10.3172 11.002 10.1757 10.9141 10.0879C10.8262 10 10.6848 10 10.402 10H5.66116C5.49929 10 5.41836 10 5.35071 10.0373C5.28305 10.0747 5.23989 10.1431 5.15358 10.2801L4.836 10.7839C4.30478 11.6266 3.81898 12.3973 3.38872 13.1044C3.14957 13.4975 3.03 13.694 3.116 13.847C3.202 14 3.43386 14 3.89759 14H8.00195C8.55424 14 9.00195 14.4477 9.00195 15C9.00195 15.5523 8.55424 16 8.00195 16H2.20398C2.01126 16 1.9149 16 1.83837 16.0523C1.76184 16.1045 1.72823 16.1906 1.66099 16.3628C1.19658 17.552 1.06291 18.6472 1.59139 19.6703C2.19038 20.8299 3.33525 21.3104 4.77075 21.532C6.1832 21.75 8.10042 21.75 10.5344 21.75H10.5344H10.5344Z',
  d8: 'M22.3397 16.3628C22.2724 16.1906 22.2388 16.1045 22.1623 16.0523C22.0857 16 21.9894 16 21.7967 16H13.601C13.3182 16 13.1768 16 13.0889 16.0879C13.001 16.1757 13.001 16.3172 13.001 16.6V21.2848C13.001 21.4389 13.001 21.5159 13.0286 21.5757C13.0585 21.6405 13.1105 21.6925 13.1753 21.7224C13.2351 21.75 13.3122 21.75 13.4662 21.75C15.9002 21.75 17.8175 21.7501 19.2299 21.532C20.6654 21.3104 21.8103 20.8299 22.4093 19.6703C22.9377 18.6472 22.8041 17.5521 22.3397 16.3628Z',
  d9: 'M10.5344 21.75C10.6898 21.75 10.7675 21.75 10.8278 21.7219C10.8917 21.6921 10.9431 21.6407 10.9729 21.5768C11.001 21.5165 11.001 21.4388 11.001 21.2834V16.6C11.001 16.3172 11.001 16.1757 10.9132 16.0879C10.8253 16 10.6839 16 10.401 16H2.20399C2.01127 16 1.91491 16 1.83838 16.0523C1.76185 16.1045 1.72823 16.1906 1.661 16.3628C1.19659 17.552 1.06291 18.6472 1.59139 19.6703C2.19038 20.8299 3.33525 21.3104 4.77075 21.532C6.1832 21.7501 8.10042 21.75 10.5344 21.75Z',
  d10: 'M18.8468 10.2801C18.7605 10.1431 18.7173 10.0747 18.6496 10.0373C18.582 10 18.5011 10 18.3392 10H13.6007C13.3179 10 13.1765 10 13.0886 10.0879C13.0007 10.1757 13.0007 10.3172 13.0007 10.6V13.4C13.0007 13.6828 13.0007 13.8243 13.0886 13.9121C13.1765 14 13.3179 14 13.6007 14H20.1028C20.5665 14 20.7984 14 20.8844 13.847C20.9704 13.694 20.8508 13.4975 20.6116 13.1044C20.1814 12.3973 19.6956 11.6266 19.1644 10.7839L18.8468 10.2801Z',
  d11: 'M3.38844 13.1044C3.14929 13.4975 3.02972 13.694 3.11572 13.847C3.20172 14 3.43358 14 3.89731 14H10.4007C10.6836 14 10.825 14 10.9129 13.9121C11.0007 13.8243 11.0007 13.6828 11.0007 13.4V10.6C11.0007 10.3172 11.0007 10.1757 10.9129 10.0879C10.825 10 10.6836 10 10.4007 10H5.66088C5.49902 10 5.41808 10 5.35043 10.0373C5.28277 10.0747 5.23962 10.1431 5.1533 10.2801L4.83571 10.7839C4.30449 11.6266 3.8187 12.3973 3.38844 13.1044Z',
  d12: 'M12.0011 2.25C10.9857 2.25 10.213 2.83442 9.51171 3.65408C8.82489 4.45686 8.08158 5.63611 7.15147 7.1117C6.91369 7.48892 6.7948 7.67753 6.86268 7.82525C6.86882 7.8386 6.87592 7.85148 6.88395 7.86379C6.97271 7.99998 7.19567 7.99998 7.64158 7.99998H16.3606C16.8065 7.99998 17.0294 7.99998 17.1182 7.8638C17.1262 7.85148 17.1333 7.8386 17.1394 7.82524C17.2073 7.67753 17.0884 7.48892 16.8507 7.11172C15.9206 5.63613 15.1772 4.45686 14.4904 3.65407C13.7891 2.83442 13.0164 2.25 12.0011 2.25Z',
  d13: 'M22 21L12 3L2 21H22Z',
  d14: 'M19 15L15 15M5 15H9M16.1818 10L8 10',
  d15: 'M12 10L12 21',
  d16: 'M15.6365 8.00024L12.0007 1.45581L8.36491 8.00024H15.6365Z',
  d17: 'M16.7476 10.0002H13.0015L13.0015 21.7502H23.2753L20.0809 16.0002L15.0015 16.0002V14.0002L18.9698 14.0002L16.7476 10.0002Z',
  d18: 'M11.0015 21.7502L11.0015 10.0002H7.2538L5.03158 14.0002H9.00146V16.0002H3.92047L0.726074 21.7502H11.0015Z',
};

export const IconPyramidMaslowoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-stroke-rounded IconPyramidMaslowoStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-duotone-rounded IconPyramidMaslowoDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-twotone-rounded IconPyramidMaslowoTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-solid-rounded IconPyramidMaslowoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-bulk-rounded IconPyramidMaslowoBulkRounded"
    >
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
      </g>
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-stroke-sharp IconPyramidMaslowoStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidMaslowoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-maslowo-solid-sharp IconPyramidMaslowoSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfPyramidMaslowo: TheIconSelfPack = {
  name: 'PyramidMaslowo',
  StrokeRounded: IconPyramidMaslowoStrokeRounded,
  DuotoneRounded: IconPyramidMaslowoDuotoneRounded,
  TwotoneRounded: IconPyramidMaslowoTwotoneRounded,
  SolidRounded: IconPyramidMaslowoSolidRounded,
  BulkRounded: IconPyramidMaslowoBulkRounded,
  StrokeSharp: IconPyramidMaslowoStrokeSharp,
  SolidSharp: IconPyramidMaslowoSolidSharp,
};