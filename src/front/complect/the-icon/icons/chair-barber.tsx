import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.6972 15H8C6.89543 15 6 14.0951 6 12.9788C6 11.8625 6.89796 10.9517 8.00141 11.002C12.6902 11.2157 15.2951 12.1485 16.384 12.6526C16.78 12.836 17 13.2432 17 13.6834C17 14.4105 16.4167 15 15.6972 15Z',
  d2: 'M17 14L20.9401 3.48443C21.1497 2.90943 20.7906 2.29091 20.1533 2.12892C18.5192 1.71359 16.8081 2.31124 16.2695 3.78511C15.6441 5.49648 15 8.13095 15 12',
  d3: 'M15 7.96062C15 7.96062 11.6187 6.56595 10.3204 7.13969C9.93065 7.31192 9.59819 7.59725 9.36369 7.96076C9 8.52452 9 9.34967 9 11',
  d4: 'M6 13V16C6 16.9319 6 17.3978 5.84776 17.7654C5.64477 18.2554 5.25542 18.6448 4.76537 18.8478C4.39782 19 3.93188 19 3 19',
  d5: 'M12 15V21',
  d6: 'M10 21H14',
  d7: 'M15.6982 15H8.00098C6.89641 15 6.00098 14.0951 6.00098 12.9788C6.00098 11.8625 6.89894 10.9517 8.00239 11.002C12.6912 11.2157 15.2961 12.1485 16.385 12.6526C16.781 12.836 17.001 13.2432 17.001 13.6834C17.001 14.4105 16.4177 15 15.6982 15Z',
  d8: 'M16.385 12.6526C16.781 12.836 17.001 13.2432 17.001 13.6834C17.001 13.8049 16.9847 13.9225 16.9543 14.0341L17.001 14L20.9411 3.48443C21.1507 2.90943 20.7916 2.29091 20.1543 2.12892C18.5202 1.71359 16.8091 2.31124 16.2705 3.78511C15.6451 5.49648 15.001 8.13095 15.001 12V12.1208C15.6056 12.3158 16.062 12.5031 16.385 12.6526Z',
  d9: 'M17.001 14L20.9411 3.48443C21.1507 2.90943 20.7916 2.29091 20.1543 2.12892C18.5202 1.71359 16.8091 2.31124 16.2705 3.78511C15.6451 5.49648 15.001 8.13095 15.001 12',
  d10: 'M15.001 7.96135C15.001 7.96135 11.6197 6.56668 10.3214 7.14043C9.93163 7.31266 9.59917 7.59798 9.36467 7.96149C9.00098 8.52525 9.00098 9.3504 9.00098 11.0007',
  d11: 'M6.00098 13V16C6.00098 16.9319 6.00098 17.3978 5.84874 17.7654C5.64575 18.2554 5.2564 18.6448 4.76635 18.8478C4.3988 19 3.93286 19 3.00098 19',
  d12: 'M12.001 15V21',
  d13: 'M10.001 21H14.001',
  d14: 'M15 7.96135C15 7.96135 11.6187 6.56668 10.3204 7.14043C9.93065 7.31266 9.59819 7.59798 9.36369 7.96149C9 8.52525 9 9.3504 9 11.0007',
  d15: 'M11.4996 8.39485C11.0443 8.34922 10.8047 8.39287 10.7246 8.42828C10.5164 8.5203 10.3343 8.67472 10.204 8.87677C10.1483 8.96311 10.0802 9.12516 10.0411 9.54053C10.001 9.96576 10 10.5292 10 11.3739C10 11.9262 9.55229 12.3739 9 12.3739C8.44772 12.3739 8 11.9262 8 11.3739V11.3264V11.3264C7.99998 10.5417 7.99996 9.88332 8.04986 9.35313C8.10169 8.80241 8.21538 8.27 8.52337 7.79258C8.86203 7.26761 9.34495 6.85138 9.91619 6.59894C10.4852 6.34747 11.1552 6.35031 11.699 6.40482C12.2764 6.46268 12.8806 6.59859 13.4121 6.74468C13.9484 6.89207 14.4375 7.05738 14.791 7.18502C14.9685 7.2491 15.1135 7.30432 15.2152 7.34397C15.2662 7.3638 15.3063 7.37978 15.3344 7.39107L15.3674 7.40439L15.3768 7.40823L15.3806 7.40981C15.8912 7.6204 16.135 8.20528 15.9245 8.71584C15.7139 9.22631 15.1295 9.46948 14.619 9.2591L14.6131 9.25671L14.589 9.24695C14.5669 9.23809 14.5332 9.22467 14.4891 9.20749C14.4009 9.1731 14.2716 9.12385 14.1118 9.06615C13.7907 8.95022 13.3534 8.80271 12.882 8.67316C12.4059 8.54229 11.9214 8.43712 11.4996 8.39485Z',
  d16: 'M7.25 16.407V16.0209C7.48815 16.0887 7.73968 16.1251 8 16.1251H15.6972C16.8384 16.1251 17.75 15.1923 17.75 14.0585C17.75 13.3775 17.404 12.6734 16.6991 12.3471C15.514 11.7985 12.8126 10.8455 8.03555 10.6278C6.47524 10.5567 5.25 11.8403 5.25 13.3539V16.375C5.25 16.8546 5.24946 17.1643 5.23329 17.4012C5.21773 17.6292 5.19112 17.7161 5.17388 17.7577C5.07239 18.0027 4.87771 18.1974 4.63268 18.2989C4.59107 18.3161 4.50424 18.3427 4.27624 18.3583C4.03926 18.3745 3.72962 18.375 3.25 18.375C2.69772 18.375 2.25 18.8227 2.25 19.375C2.25 19.9273 2.69772 20.375 3.25 20.375L3.28203 20.375C3.72066 20.375 4.09913 20.375 4.41238 20.3537C4.74221 20.3311 5.07212 20.2816 5.39805 20.1466C6.13313 19.8422 6.71716 19.2581 7.02164 18.523C7.15664 18.1971 7.20615 17.8672 7.22865 17.5374C7.25002 17.2241 7.25001 16.8456 7.25 16.407Z',
  d17: 'M12 14.375C12.5523 14.375 13 14.8227 13 15.375V20.375H14C14.5523 20.375 15 20.8227 15 21.375C15 21.9273 14.5523 22.375 14 22.375H10C9.44772 22.375 9 21.9273 9 21.375C9 20.8227 9.44772 20.375 10 20.375H11V15.375C11 14.8227 11.4477 14.375 12 14.375Z',
  d18: 'M14.8021 10.3518C14.567 10.2872 14.4495 10.2549 14.3875 10.1662C14.3254 10.0774 14.3352 9.95996 14.3546 9.72501C14.5667 7.16109 15.0663 5.26544 15.5639 3.90375C16.2794 1.94594 18.4716 1.30399 20.3369 1.7781C21.3461 2.03461 22.0251 3.07052 21.6437 4.11727L21.6413 4.12366L18.9781 11.2314C18.8055 11.692 18.7192 11.9222 18.5784 11.9656C18.4375 12.009 18.1924 11.836 17.7021 11.4901C17.5555 11.3866 17.3959 11.2938 17.2227 11.2136C16.6773 10.9611 15.8825 10.6488 14.8021 10.3518Z',
  d19: 'M8 10.6254C8.00336 10.1413 8.01409 9.71703 8.04834 9.35313C8.10017 8.80241 8.21386 8.27 8.52185 7.79258C8.86051 7.26761 9.34343 6.85138 9.91467 6.59894C10.4837 6.34747 11.1537 6.35031 11.6975 6.40482C12.2749 6.46268 12.8791 6.59859 13.4106 6.74468C13.8991 6.87895 14.3485 7.02808 14.6919 7.15006C14.5777 7.76961 14.4794 8.44358 14.4046 9.17547C14.325 9.14504 14.2256 9.1078 14.1102 9.06615C13.7892 8.95022 13.3519 8.80271 12.8805 8.67316C12.4044 8.54229 11.9199 8.43712 11.4981 8.39485C11.0428 8.34922 10.8032 8.39287 10.7231 8.42828C10.5148 8.5203 10.3328 8.67472 10.2025 8.87677C10.1468 8.96311 10.0786 9.12516 10.0395 9.54053C10.01 9.85447 10.0017 10.2438 9.99937 10.7659C9.38753 10.7062 8.733 10.6586 8.03403 10.6267C8.02267 10.6262 8.01133 10.6258 8 10.6254Z',
  d20: 'M11 16.1251H13V20.3751H14C14.5523 20.3751 15 20.8228 15 21.3751C15 21.9274 14.5523 22.3751 14 22.3751H10C9.44772 22.3751 9 21.9274 9 21.3751C9 20.8228 9.44772 20.3751 10 20.3751H11V16.1251Z',
  d21: 'M17.997 15.5025H6.0415L6.04303 12.5065H17.997V15.5025Z',
  d22: 'M15.0086 8.50745H9.03174L9.03358 12.5048',
  d23: 'M6.0375 12.4792L6.03769 19.413C6.03769 19.4681 5.99309 19.5129 5.93808 19.5129L2.99854 19.513',
  d24: 'M12.0202 15.5026V21.4986M9.03174 21.4986H15.0086',
  d25: 'M14.0063 12.523L16.9769 2.57298C16.9895 2.53062 17.0285 2.50159 17.0727 2.50159H21.0013L17.9903 12.523',
  d26: 'M7.79261 7.79306C7.98008 7.60542 8.23439 7.5 8.49958 7.5H14.497V9.5H9.49962L9.50101 12.4995L7.50185 12.5005L7.5 8.50046C7.49988 8.23517 7.60514 7.98069 7.79261 7.79306Z',
  d27: 'M4.75091 12.5016C4.75112 12.0875 5.0867 11.752 5.50059 11.752H12.9371L15.7762 2.28449C15.8713 1.96725 16.1632 1.75 16.4942 1.75H21.5001L18.2454 12.6035V15.5C18.2454 15.9142 17.9098 16.25 17.4958 16.25H6.74831V19.5C6.74831 20.0523 6.30079 20.5 5.74873 20.5H2.5V18.5H4.74916L4.75091 12.5016Z',
  d28: 'M10.4987 20.25V15.5H12.4978V20.25H14.497V22.25H8.49951V20.25H10.4987Z',
};

export const IconChairBarberStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-stroke-rounded IconChairBarberStrokeRounded"
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

export const IconChairBarberDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-duotone-rounded IconChairBarberDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconChairBarberTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-twotone-rounded IconChairBarberTwotoneRounded"
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
        d={d.d14} 
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

export const IconChairBarberSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-solid-rounded IconChairBarberSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconChairBarberBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-bulk-rounded IconChairBarberBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChairBarberStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-stroke-sharp IconChairBarberStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChairBarberSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-barber-solid-sharp IconChairBarberSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChairBarber: TheIconSelfPack = {
  name: 'ChairBarber',
  StrokeRounded: IconChairBarberStrokeRounded,
  DuotoneRounded: IconChairBarberDuotoneRounded,
  TwotoneRounded: IconChairBarberTwotoneRounded,
  SolidRounded: IconChairBarberSolidRounded,
  BulkRounded: IconChairBarberBulkRounded,
  StrokeSharp: IconChairBarberStrokeSharp,
  SolidSharp: IconChairBarberSolidSharp,
};