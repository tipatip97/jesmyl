import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 9C7.46589 8.38677 9.61061 8 12 8C14.3894 8 16.5341 8.38677 18 9',
  d2: 'M9 11.5C9.93974 11.176 10.9492 11 12 11C13.0508 11 14.0603 11.176 15 11.5',
  d3: 'M8 15C9.17669 15.636 10.5429 16 12 16C13.4571 16 14.8233 15.636 16 15',
  d4: 'M6 10C6 13.2571 4.1688 14.9419 3.05731 14.9985C3.02153 15.0003 2.98891 14.9808 2.97139 14.9496C2.15656 13.4966 2 11.7879 2 10C2 6.68629 2.89543 4 4 4C5.10457 4 6 6.68629 6 10Z',
  d5: 'M18 10C18 13.2571 19.8312 14.9419 20.9427 14.9985C20.9785 15.0003 21.0111 14.9808 21.0286 14.9496C21.8434 13.4966 22 11.7879 22 10C22 6.68629 21.1046 4 20 4C18.8954 4 18 6.68629 18 10Z',
  d6: 'M21 15C19.2035 17.989 15.8458 20 12 20C8.15423 20 4.79648 17.989 3 15',
  d7: 'M6 9C6.47721 12.8124 4.32919 14.7566 3.16435 14.9796C3.09019 14.9938 3.04712 15.0781 3.0871 15.1422C4.90365 18.0526 8.21554 20 12 20C15.7845 20 19.0963 18.0526 20.9129 15.1422C20.9529 15.0781 20.9094 14.9943 20.8349 14.9821C19.7116 14.7978 18 13.2841 18 9C16.5341 8.38677 14.3894 8 12 8C9.61061 8 7.46589 8.38677 6 9Z',
  d8: 'M4.18178 3.25C3.48413 3.25 2.97504 3.67286 2.65342 4.07885C2.32312 4.4958 2.06841 5.03889 1.87258 5.62332C1.47754 6.80234 1.24996 8.36931 1.24996 10.0556C1.24996 11.8232 1.39794 13.7001 2.32416 15.3432C4.25555 18.54 7.89672 20.75 12 20.75C16.1032 20.75 19.7444 18.54 21.6758 15.3432C22.602 13.7001 22.75 11.8232 22.75 10.0556C22.75 8.36931 22.5224 6.80234 22.1273 5.62332C21.9315 5.03889 21.6768 4.4958 21.3465 4.07885C21.0249 3.67286 20.5158 3.25 19.8181 3.25C19.1205 3.25 18.6114 3.67286 18.2898 4.07885C17.9595 4.4958 17.7048 5.03889 17.5089 5.62332C17.318 6.19332 17.145 6.90688 17.034 7.64055C17.0158 7.76064 16.8974 7.8391 16.7798 7.80862C15.4037 7.4519 13.7547 7.25 12.0002 7.25C10.2366 7.25 8.57973 7.45397 7.19946 7.8141C7.08162 7.84485 6.96279 7.76608 6.94534 7.64556C6.83865 6.90879 6.6831 6.19671 6.49097 5.62332C6.29515 5.03889 6.04044 4.4958 5.71014 4.07885C5.38852 3.67286 4.87943 3.25 4.18178 3.25ZM3.72736 6.23819C3.415 7.17042 3.20504 8.52012 3.20504 10.0555C3.20504 11.3412 3.29448 12.4777 3.62257 13.4653C3.66408 13.5902 3.81501 13.6343 3.91167 13.5449C4.03928 13.4269 4.17486 13.2768 4.31105 13.0871C4.76589 12.4536 5.15958 11.4539 5.15958 10.0555C5.15958 8.52012 4.94962 7.17042 4.63726 6.23819C4.53267 5.92604 4.42432 5.68412 4.32315 5.50595C4.25873 5.3925 4.10589 5.3925 4.04147 5.50595C3.9403 5.68412 3.83195 5.92604 3.72736 6.23819ZM19.3637 6.23819C19.0514 7.17042 18.8414 8.52012 18.8414 10.0555C18.8414 11.4539 19.2351 12.4536 19.6899 13.0871C19.8261 13.2768 19.9617 13.4269 20.0893 13.5449C20.186 13.6343 20.3369 13.5902 20.3784 13.4653C20.7065 12.4777 20.7959 11.3412 20.7959 10.0555C20.7959 8.52012 20.586 7.17042 20.2736 6.23819C20.169 5.92604 20.0607 5.68412 19.9595 5.50595C19.8951 5.3925 19.7423 5.3925 19.6778 5.50595C19.5767 5.68412 19.4683 5.92604 19.3637 6.23819ZM8.75576 10.791C9.77315 10.4402 10.8651 10.25 12.0002 10.25C13.1353 10.25 14.2273 10.4402 15.2446 10.791C15.6362 10.926 15.8443 11.3528 15.7093 11.7444C15.5742 12.136 15.1474 12.344 14.7558 12.209C13.8937 11.9118 12.9668 11.75 12.0002 11.75C11.0336 11.75 10.1067 11.9118 9.24465 12.209C8.85305 12.344 8.42616 12.136 8.29116 11.7444C8.15616 11.3528 8.36417 10.926 8.75576 10.791ZM8.35676 14.3404C7.99237 14.1434 7.5373 14.2791 7.34035 14.6435C7.1434 15.0079 7.27914 15.463 7.64353 15.6599C8.92871 16.3546 10.4173 16.7501 12.0001 16.7501C13.583 16.7501 15.0716 16.3546 16.3568 15.6599C16.7212 15.463 16.8569 15.0079 16.6599 14.6435C16.463 14.2791 16.0079 14.1434 15.6435 14.3404C14.5753 14.9177 13.3316 15.2501 12.0001 15.2501C10.6687 15.2501 9.42496 14.9177 8.35676 14.3404Z',
  d9: 'M4.18182 3.25C3.48417 3.25 2.97508 3.67286 2.65346 4.07885C2.32316 4.4958 2.06845 5.03889 1.87262 5.62332C1.47757 6.80234 1.25 8.36931 1.25 10.0556C1.25 11.8232 1.39798 13.7001 2.3242 15.3432C4.25559 18.54 7.89676 20.75 12 20.75C16.1032 20.75 19.7444 18.54 21.6758 15.3432C22.602 13.7001 22.75 11.8232 22.75 10.0556C22.75 8.36931 22.5224 6.80234 22.1274 5.62332C21.9316 5.03889 21.6768 4.4958 21.3465 4.07885C21.0249 3.67286 20.5158 3.25 19.8182 3.25C19.1205 3.25 18.6114 3.67286 18.2898 4.07885C17.9595 4.4958 17.7048 5.03889 17.509 5.62332C17.318 6.19332 17.145 6.90688 17.034 7.64055C17.0158 7.76064 16.8974 7.8391 16.7798 7.80862C15.4038 7.4519 13.7547 7.25 12.0002 7.25C10.2367 7.25 8.57977 7.45397 7.19949 7.8141C7.08165 7.84485 6.96283 7.76608 6.94538 7.64556C6.83869 6.90879 6.68314 6.19671 6.49101 5.62332C6.29519 5.03889 6.04048 4.4958 5.71018 4.07885C5.38856 3.67286 4.87947 3.25 4.18182 3.25ZM3.7274 6.23819C3.41504 7.17042 3.20508 8.52012 3.20508 10.0555C3.20508 11.3412 3.29452 12.4777 3.62261 13.4653C3.66412 13.5902 3.81505 13.6343 3.91171 13.5449C4.03931 13.4269 4.1749 13.2768 4.31109 13.0871C4.76593 12.4536 5.15962 11.4539 5.15962 10.0555C5.15962 8.52012 4.94966 7.17042 4.6373 6.23819C4.53271 5.92604 4.42436 5.68412 4.32319 5.50595C4.25877 5.3925 4.10593 5.3925 4.04151 5.50595C3.94034 5.68412 3.83199 5.92604 3.7274 6.23819ZM19.3638 6.23819C19.0514 7.17042 18.8414 8.52012 18.8414 10.0555C18.8414 11.4539 19.2351 12.4536 19.69 13.0871C19.8262 13.2768 19.9618 13.4269 20.0894 13.5449C20.186 13.6343 20.3369 13.5902 20.3785 13.4653C20.7065 12.4777 20.796 11.3412 20.796 10.0555C20.796 8.52012 20.586 7.17042 20.2737 6.23819C20.1691 5.92604 20.0607 5.68412 19.9596 5.50595C19.8951 5.3925 19.7423 5.3925 19.6779 5.50595C19.5767 5.68412 19.4684 5.92604 19.3638 6.23819Z',
  d10: 'M8.75576 10.791C9.77315 10.4402 10.8651 10.25 12.0002 10.25C13.1353 10.25 14.2273 10.4402 15.2446 10.791C15.6362 10.926 15.8443 11.3528 15.7093 11.7444C15.5742 12.136 15.1474 12.344 14.7558 12.209C13.8937 11.9118 12.9668 11.75 12.0002 11.75C11.0336 11.75 10.1067 11.9118 9.24465 12.209C8.85305 12.344 8.42616 12.136 8.29116 11.7444C8.15616 11.3528 8.36417 10.926 8.75576 10.791Z',
  d11: 'M7.34035 14.6435C7.5373 14.2791 7.99237 14.1434 8.35676 14.3404C9.42496 14.9177 10.6687 15.2501 12.0001 15.2501C13.3316 15.2501 14.5753 14.9177 15.6435 14.3404C16.0079 14.1434 16.463 14.2791 16.6599 14.6435C16.8569 15.0079 16.7212 15.463 16.3568 15.6599C15.0716 16.3546 13.583 16.7501 12.0001 16.7501C10.4173 16.7501 8.92871 16.3546 7.64353 15.6599C7.27914 15.463 7.1434 15.0079 7.34035 14.6435Z',
  d12: 'M4.18182 3.25C3.48417 3.25 2.97508 3.67286 2.65346 4.07885C2.32316 4.4958 2.06845 5.03889 1.87262 5.62332C1.47757 6.80234 1.25 8.36931 1.25 10.0556C1.25 11.8232 1.39798 13.7001 2.3242 15.3432C2.33819 15.368 2.35325 15.3923 2.36932 15.4161L2.36692 15.4175C4.29831 18.6144 7.89676 20.75 12 20.75C16.1032 20.75 19.7017 18.6144 21.6331 15.4175L21.6307 15.4161C21.6467 15.3923 21.6618 15.368 21.6758 15.3432C22.602 13.7001 22.75 11.8232 22.75 10.0556C22.75 8.36931 22.5224 6.80234 22.1274 5.62332C21.9316 5.03889 21.6768 4.4958 21.3465 4.07885C21.0249 3.67286 20.5158 3.25 19.8182 3.25C19.1205 3.25 18.6114 3.67286 18.2898 4.07885C17.9595 4.4958 17.7048 5.03889 17.509 5.62332C17.3008 6.24459 17.1392 6.97357 17.0328 7.77096C15.6044 7.36696 13.8581 7.13889 12 7.13889C10.1419 7.13889 8.39556 7.36696 6.96721 7.77096C6.86084 6.97357 6.69918 6.24459 6.49101 5.62332C6.29519 5.03889 6.04048 4.4958 5.71018 4.07885C5.38856 3.67286 4.87947 3.25 4.18182 3.25ZM3.20508 10.0555C3.20508 8.52012 3.41504 7.17042 3.7274 6.23819C3.8827 5.7747 4.0463 5.46603 4.18235 5.29102C4.31841 5.46603 4.482 5.7747 4.6373 6.23819C4.94966 7.17042 5.15962 8.52012 5.15962 10.0555C5.15962 11.4539 4.76593 12.4536 4.31109 13.0871C4.10033 13.3806 3.89102 13.5795 3.71048 13.7111C3.31019 12.6678 3.20508 11.4492 3.20508 10.0555ZM18.8414 10.0555C18.8414 8.52012 19.0514 7.17042 19.3638 6.23819C19.5191 5.7747 19.6827 5.46603 19.8187 5.29102C19.9548 5.46603 20.1184 5.7747 20.2737 6.23819C20.586 7.17042 20.796 8.52012 20.796 10.0555C20.796 11.4492 20.6909 12.6678 20.2906 13.7111C20.11 13.5795 19.9007 13.3806 19.69 13.0871C19.2351 12.4536 18.8414 11.4539 18.8414 10.0555ZM8.75586 11.791C9.77324 11.4402 10.8652 11.25 12.0003 11.25C13.1354 11.25 14.2274 11.4402 15.2447 11.791L14.7559 13.209C13.8938 12.9118 12.9669 12.75 12.0003 12.75C11.0337 12.75 10.1068 12.9118 9.24474 13.209L8.75586 11.791ZM11.9992 17.7496C13.582 17.7496 15.0706 17.3541 16.3558 16.6594L15.6426 15.3398C14.5744 15.9172 13.3306 16.2496 11.9992 16.2496C10.6678 16.2496 9.42401 15.9172 8.35581 15.3398L7.64258 16.6594C8.92776 17.3541 10.4163 17.7496 11.9992 17.7496Z',
};

export const IconMaskStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-stroke-rounded IconMaskStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMaskDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-duotone-rounded IconMaskDuotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconMaskTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-twotone-rounded IconMaskTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMaskSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-solid-rounded IconMaskSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-bulk-rounded IconMaskBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-stroke-sharp IconMaskStrokeSharp"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-solid-sharp IconMaskSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMask: TheIconSelfPack = {
  name: 'Mask',
  StrokeRounded: IconMaskStrokeRounded,
  DuotoneRounded: IconMaskDuotoneRounded,
  TwotoneRounded: IconMaskTwotoneRounded,
  SolidRounded: IconMaskSolidRounded,
  BulkRounded: IconMaskBulkRounded,
  StrokeSharp: IconMaskStrokeSharp,
  SolidSharp: IconMaskSolidSharp,
};