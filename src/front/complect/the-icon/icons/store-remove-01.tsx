import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.9668 10.002V15.002C2.9668 17.8304 2.9668 19.2446 3.84548 20.1233C4.72416 21.002 6.13837 21.002 8.9668 21.002H12.4668M20.9668 10.002V13.002',
  d2: 'M15.9668 16.002L18.9668 19.002M18.9668 19.002L21.9668 22.002M18.9668 19.002L15.9668 22.002M18.9668 19.002L21.9668 16.002',
  d3: 'M6.9668 17.002H10.9668',
  d4: 'M10.1038 7.91391C9.82182 8.93195 8.79628 10.6881 6.84777 10.9426C5.12733 11.1673 3.82246 10.4166 3.48916 10.1027C3.12168 9.84817 2.28416 9.03375 2.07906 8.52473C1.87395 8.01572 2.11324 6.91285 2.28416 6.46322L2.96743 4.48554C3.13423 3.9888 3.5247 2.81393 3.92501 2.41654C4.32533 2.01915 5.13581 2.00186 5.4694 2.00186H12.4749C14.2781 2.02732 18.2209 1.98579 19.0003 2.00186C19.7797 2.01794 20.2481 2.67105 20.3848 2.95101C21.5477 5.76681 22 7.37945 22 8.06662C21.8482 8.79967 21.22 10.1819 19.0003 10.7899C16.6933 11.4217 15.3854 10.1927 14.9751 9.72092M9.15522 9.72092C9.47997 10.1196 10.4987 10.9222 11.9754 10.9426C13.4522 10.9629 14.7273 9.93301 15.1802 9.41551C15.3084 9.26281 15.5853 8.80978 15.8725 7.91391',
  d5: 'M3.50199 10H3.19043V15C3.19043 17.8284 3.19043 19.2426 4.06911 20.1213C4.94779 21 6.362 21 9.19043 21H15.1904C18.0188 21 19.433 21 20.3117 20.1213C21.1904 19.2426 21.1904 17.8284 21.1904 15V10H20.8788C20.039 10.6203 18.965 10.9965 17.9451 10.9965C16.9252 10.9965 15.9938 10.6203 15.2841 10H14.8888C14.4644 10.419 13.5486 10.9965 12.1897 10.9965C11.1698 10.9965 10.2384 10.6203 9.52875 10H9.08333C8.03924 10.8623 6.90131 11.0276 6.43573 10.9965C5.4158 10.9965 4.34185 10.6203 3.50199 10Z',
  d6: 'M3.19043 10V15C3.19043 17.8284 3.19043 19.2426 4.06911 20.1213C4.94779 21 6.362 21 9.19043 21H12.6904M21.1904 10V13',
  d7: 'M10.2942 7.92519C10.0122 8.94483 8.98671 10.7038 7.0382 10.9587C5.31776 11.1837 4.01289 10.4319 3.67959 10.1175C3.31211 9.86251 2.47459 9.0468 2.26949 8.53698C2.06438 8.02716 2.30367 6.92255 2.47459 6.47221L3.15786 4.49141C3.32466 3.99389 3.71513 2.81716 4.11544 2.41915C4.51576 2.02113 5.32624 2.00382 5.65983 2.00382H12.6653C14.4685 2.02932 18.4113 1.98772 19.1907 2.00382C19.9701 2.01992 20.4385 2.67406 20.5752 2.95446C21.7381 5.77471 22.1904 7.38988 22.1904 8.07814C22.0386 8.81235 21.4104 10.1968 19.1907 10.8057C16.8837 11.4386 15.5758 10.2077 15.1655 9.73505M9.34565 9.73505C9.6704 10.1345 10.6891 10.9383 12.1658 10.9587C13.6426 10.9791 14.9177 9.94748 15.3706 9.42916C15.4988 9.27621 15.7757 8.82248 16.0629 7.92519',
  d8: 'M16.1904 16L19.1904 19M19.1904 19L22.1904 22M19.1904 19L16.1904 22M19.1904 19L22.1904 16',
  d9: 'M7.19043 17H11.1904',
  d10: 'M3 9.9967V14.999C3 17.8287 3 19.2436 3.87868 20.1227C4.75736 21.0018 6.17157 21.0018 9 21.0018H12.5M21 9.9967V12.9981',
  d11: 'M16 15.9991L19 19.0005M19 19.0005L22 22.0019M19 19.0005L16 22.0019M19 19.0005L22 15.9991',
  d12: 'M7 16.9996H11',
  d13: 'M10.1038 7.91891C9.82182 8.93778 8.79628 10.6953 6.84777 10.9501C5.12733 11.175 3.82246 10.4236 3.48916 10.1095C3.12168 9.85476 2.28416 9.03967 2.07906 8.53023C1.87395 8.0208 2.11324 6.91702 2.28416 6.46702L2.96743 4.48771C3.13423 3.99057 3.5247 2.81472 3.92501 2.417C4.32533 2.01929 5.13581 2.00198 5.4694 2.00198H12.4749C14.2781 2.02747 18.2209 1.9859 19.0003 2.00199C19.7797 2.01808 20.2481 2.67172 20.3848 2.95191C21.5477 5.77004 22 7.384 22 8.07174C21.8482 8.80539 21.22 10.1888 19.0003 10.7972C16.6933 11.4296 15.3854 10.1996 14.9751 9.7274M9.15522 9.72741C9.47997 10.1265 10.4987 10.9297 11.9754 10.9501C13.4522 10.9704 14.7273 9.93967 15.1802 9.42175C15.3084 9.26891 15.5853 8.81552 15.8725 7.91891',
  d14: 'M2.875 8.625C3.42729 8.625 3.875 9.07272 3.875 9.625V14.625C3.875 16.0675 3.87713 17.0487 3.97592 17.7836C4.07085 18.4896 4.23822 18.8166 4.46079 19.0392C4.68336 19.2618 5.01038 19.4292 5.71644 19.5241C6.45126 19.6229 7.43252 19.625 8.875 19.625H12.875C13.4273 19.625 13.875 20.0727 13.875 20.625C13.875 21.1773 13.4273 21.625 12.875 21.625H8.80443C7.45031 21.625 6.3337 21.6251 5.44994 21.5062C4.52211 21.3815 3.70269 21.1095 3.04658 20.4534C2.39047 19.7973 2.1185 18.9779 1.99376 18.0501C1.87494 17.1663 1.87497 16.0497 1.875 14.6956L1.875 9.625C1.875 9.07272 2.32272 8.625 2.875 8.625Z',
  d15: 'M19.875 12.875V9.625C19.875 9.07272 20.3227 8.625 20.875 8.625C21.4273 8.625 21.875 9.07272 21.875 9.625V12.875C21.875 13.4273 21.4273 13.875 20.875 13.875C20.3227 13.875 19.875 13.4273 19.875 12.875Z',
  d16: 'M17.3409 1.125C17.9764 1.12498 18.5178 1.12495 18.9612 1.17738C19.4353 1.23343 19.8724 1.3561 20.2681 1.65149C20.6617 1.94524 20.9078 2.33046 21.1055 2.77054C21.2922 3.186 21.4623 3.71452 21.664 4.34138L22.3603 6.50454L22.3752 6.55104C22.5513 7.09727 22.6925 7.53518 22.5891 8.19732C22.5463 8.47174 22.4916 8.69692 22.3989 8.90546C22.3117 9.10161 22.203 9.25188 22.1196 9.36704L22.1073 9.38417C21.1231 10.7468 19.3186 11.625 17.6293 11.625C16.5496 11.625 15.5522 11.2683 14.7516 10.6673C13.9509 11.2687 12.9539 11.625 11.8739 11.625C10.7945 11.625 9.79738 11.2685 8.99694 10.6678C8.19627 11.2689 7.19956 11.625 6.11989 11.625C4.43062 11.625 2.62608 10.7468 1.64192 9.38417L1.62955 9.36706C1.54623 9.2519 1.43751 9.10162 1.3503 8.90546C1.25759 8.69692 1.20289 8.47174 1.16006 8.19731C1.05673 7.53518 1.19788 7.09727 1.37395 6.55103L1.38893 6.50454L2.07265 4.3803L2.08518 4.3414L2.08518 4.34139C2.28692 3.71452 2.45702 3.186 2.64365 2.77054C2.84134 2.33046 3.0875 1.94524 3.48104 1.65149C3.87677 1.3561 4.31392 1.23343 4.78799 1.17738C5.23139 1.12495 5.77276 1.12498 6.40826 1.125H6.40829H17.3409H17.3409Z',
  d17: 'M22.5821 15.1679C22.9726 15.5584 22.9726 16.1916 22.5821 16.5821L20.2892 18.875L22.5821 21.1679C22.9726 21.5584 22.9726 22.1916 22.5821 22.5821C22.1916 22.9726 21.5584 22.9726 21.1679 22.5821L18.875 20.2892L16.5821 22.5821C16.1916 22.9726 15.5584 22.9726 15.1679 22.5821C14.7774 22.1916 14.7774 21.5584 15.1679 21.1679L17.4608 18.875L15.1679 16.5821C14.7774 16.1916 14.7774 15.5584 15.1679 15.1679C15.5584 14.7774 16.1916 14.7774 16.5821 15.1679L18.875 17.4608L21.1679 15.1679C21.5584 14.7774 22.1916 14.7774 22.5821 15.1679Z',
  d18: 'M5.875 16.875C5.875 16.3227 6.32272 15.875 6.875 15.875H10.875C11.4273 15.875 11.875 16.3227 11.875 16.875C11.875 17.4273 11.4273 17.875 10.875 17.875H6.875C6.32272 17.875 5.875 17.4273 5.875 16.875Z',
  d19: 'M1.875 9.68065L1.875 14.6959C1.87497 16.05 1.87494 17.1667 1.99376 18.0504C2.1185 18.9782 2.39047 19.7977 3.04658 20.4538C3.70269 21.1099 4.52211 21.3818 5.44994 21.5066C6.3337 21.6254 7.45031 21.6254 8.80443 21.6253H12.875C13.4273 21.6253 13.875 21.1776 13.875 20.6253C13.875 20.0731 13.4273 19.6253 12.875 19.6253H8.875C7.43252 19.6253 6.45126 19.6232 5.71644 19.5244C5.01038 19.4295 4.68336 19.2621 4.46079 19.0396C4.23822 18.817 4.07085 18.49 3.97592 17.7839C3.87713 17.0491 3.875 16.0678 3.875 14.6253V11.1367C3.10442 10.7986 2.40331 10.2988 1.875 9.68065Z',
  d20: 'M19.875 11.1363V12.8753C19.875 13.4276 20.3227 13.8753 20.875 13.8753C21.4273 13.8753 21.875 13.4276 21.875 12.8753V9.67969C21.3468 10.298 20.6457 10.7981 19.875 11.1363Z',
  d21: 'M3 10.0024V21.0024H13M21 10.0024V13.0024',
  d22: 'M16 16.0024L19 19.0024M19 19.0024L22 22.0024M19 19.0024L16 22.0024M19 19.0024L22 16.0024',
  d23: 'M6 17.0024H11',
  d24: 'M9.13638 9.76532C7.93711 11.0732 6.25359 11.0724 5.27947 10.8977C3.77281 10.6275 2.63279 9.43275 2.00078 8.52395C1.99902 8.52142 1.99857 8.51826 1.99949 8.51531L4.0489 1.99744H19.9537L22 8.49435C22.0009 8.49724 22.0006 8.50025 21.9989 8.50276C21.1211 9.81697 18.666 12.3147 15.2156 10.1525L14.7278 9.93048M9.13638 9.76532C9.655 9.19973 10.0831 8.3894 10.324 7.24258M9.13638 9.76532C9.72723 10.432 11.3695 11.5257 13.4048 10.7268C13.9574 10.5098 14.388 10.2379 14.7278 9.93048M14.7278 9.93048C15.5834 9.15631 15.8632 8.15691 16.0667 7.24258',
  d25: 'M17.6288 19.043L15.3359 21.3359L16.7502 22.7502L19.043 20.4573L21.3359 22.7502L22.7502 21.3359L20.4573 19.043L22.7502 16.7502L21.3359 15.3359L19.043 17.6288L16.7502 15.3359L15.3359 16.7502L17.6288 19.043Z',
  d26: 'M11 18.25H6V16.25H11V18.25Z',
  d27: 'M2.25 20.7748V9.0498H4.2V19.7998H13V21.7498H3.225C2.68652 21.7498 2.25 21.3133 2.25 20.7748Z',
  d28: 'M19.8 9.0498H21.75V12.9998H19.8V9.0498Z',
  d29: 'M22.7152 8.27967C22.7843 8.50442 22.744 8.74857 22.6063 8.93919C21.7343 10.1465 20.3195 11.7501 17.753 11.7501C16.6733 11.7501 15.6759 11.3934 14.8754 10.7923C14.0746 11.3938 13.0776 11.7501 11.9977 11.7501C10.9182 11.7501 9.92112 11.3936 9.12068 10.7928C8.32002 11.394 7.3233 11.7501 6.24364 11.7501C3.67691 11.7501 2.26376 10.1462 1.392 8.93919C1.25429 8.74852 1.214 8.5043 1.28317 8.2795L3.44607 1.25L20.5541 1.25008L22.7152 8.27967Z',
};

export const IconStoreRemove01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-stroke-rounded IconStoreRemove01StrokeRounded"
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

export const IconStoreRemove01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-duotone-rounded IconStoreRemove01DuotoneRounded"
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStoreRemove01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-twotone-rounded IconStoreRemove01TwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStoreRemove01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-solid-rounded IconStoreRemove01SolidRounded"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreRemove01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-bulk-rounded IconStoreRemove01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconStoreRemove01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-stroke-sharp IconStoreRemove01StrokeSharp"
    >
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

export const IconStoreRemove01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="store-remove-01-solid-sharp IconStoreRemove01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfStoreRemove01: TheIconSelfPack = {
  name: 'StoreRemove01',
  StrokeRounded: IconStoreRemove01StrokeRounded,
  DuotoneRounded: IconStoreRemove01DuotoneRounded,
  TwotoneRounded: IconStoreRemove01TwotoneRounded,
  SolidRounded: IconStoreRemove01SolidRounded,
  BulkRounded: IconStoreRemove01BulkRounded,
  StrokeSharp: IconStoreRemove01StrokeSharp,
  SolidSharp: IconStoreRemove01SolidSharp,
};