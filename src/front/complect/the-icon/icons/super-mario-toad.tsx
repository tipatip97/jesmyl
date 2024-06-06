import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.00779 16.7056C4.97141 16.3269 5.05697 16.1715 5.38146 15.9558C9.30933 13.3451 15.6755 13.3481 18.7181 15.9646C18.9566 16.1696 19.0195 16.3169 18.9951 16.6236C18.8758 18.1215 18.471 19.8517 17.2149 20.8332C15.2211 22.3912 8.76892 22.3867 6.78076 20.8332C5.53838 19.8624 5.14963 18.182 5.00779 16.7056Z',
  d2: 'M9.00896 18H9M15 18H14.991',
  d3: 'M5 18C3 17 2 14.2512 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21 17 19 18',
  d4: 'M3.36963 7C4.66856 7.31423 5.32655 8.8999 4.83928 10.5417C4.40097 12.0185 3.18529 13.0377 2 12.9989',
  d5: 'M20.6315 7C19.3317 7.31423 18.6732 8.8999 19.1608 10.5417C19.5992 12.0177 20.8145 13.0366 22 12.999',
  d6: 'M5.00877 16.7056C4.97239 16.3269 5.05795 16.1715 5.38244 15.9558C9.31031 13.3451 15.6765 13.3481 18.7191 15.9646C18.9576 16.1696 19.0205 16.3169 18.9961 16.6236C18.8768 18.1215 18.472 19.8517 17.2159 20.8332C15.2221 22.3912 8.76989 22.3867 6.78173 20.8332C5.53935 19.8624 5.15061 18.182 5.00877 16.7056Z',
  d7: 'M9.00994 18H9.00098M15.001 18H14.992',
  d8: 'M12.001 10C13.6578 10 15.001 8.65685 15.001 7C15.001 5.34315 13.6578 4 12.001 4C10.3441 4 9.00098 5.34315 9.00098 7C9.00098 8.65685 10.3441 10 12.001 10Z',
  d9: 'M18.7192 15.9646C15.6766 13.3481 9.31033 13.3451 5.38245 15.9558C5.05797 16.1715 4.97241 16.3269 5.00879 16.7056C5.05355 17.1715 5.12291 17.6578 5.23592 18.1357L5.001 18C3.28991 17.1445 2.31078 15.0089 2.0636 13C3.22884 13.0017 4.40968 11.9926 4.84028 10.5417C5.32755 8.8999 4.66956 7.31423 3.37063 7H3.33882C5.06787 4.01099 8.29959 2 12.001 2C15.798 2 19.1007 4.11615 20.7941 7.23341C20.7515 7.15496 20.7078 7.07716 20.6632 7H20.6325C19.3327 7.31423 18.6742 8.8999 19.1618 10.5417C19.5925 11.9917 20.773 13.0006 21.9384 13C21.6912 15.0089 20.7121 17.1445 19.001 18L18.7734 18.1091C18.8898 17.6117 18.9577 17.1056 18.9961 16.6236C19.0205 16.3169 18.9576 16.1696 18.7192 15.9646ZM15.001 7C15.001 8.65685 13.6579 10 12.001 10C10.3442 10 9.001 8.65685 9.001 7C9.001 5.34315 10.3442 4 12.001 4C13.6579 4 15.001 5.34315 15.001 7Z',
  d10: 'M5.00098 18C3.00098 17 2.00098 14.2512 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 14.2512 21.001 17 19.001 18',
  d11: 'M2.00098 12.9989C2.02184 12.9996 2.04271 13 2.06358 13M2.06358 13C3.22882 13.0017 4.40967 11.9926 4.84026 10.5417C5.32753 8.8999 4.66954 7.31423 3.37061 7H3.3388C2.48795 8.47087 2.00098 10.1786 2.00098 12C2.00098 12.3252 2.02185 12.6608 2.06358 13ZM22.001 12.999C21.9801 12.9997 21.9593 13 21.9384 13M21.9384 13C20.773 13.0006 19.5925 11.9917 19.1618 10.5417C18.6742 8.8999 19.3327 7.31423 20.6325 7H20.6632C21.514 8.47087 22.001 10.1786 22.001 12C22.001 12.3252 21.9801 12.6608 21.9384 13Z',
  d12: 'M8 18C8 17.4477 8.44772 17 9 17H9.00896C9.56124 17 10.009 17.4477 10.009 18C10.009 18.5523 9.56124 19 9.00896 19H9C8.44772 19 8 18.5523 8 18ZM13.991 18C13.991 17.4477 14.4388 17 14.991 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H14.991C14.4388 19 13.991 18.5523 13.991 18Z',
  d13: 'M12 4.75C10.7574 4.75 9.75 5.75736 9.75 7C9.75 8.24264 10.7574 9.25 12 9.25C13.2426 9.25 14.25 8.24264 14.25 7C14.25 5.75736 13.2426 4.75 12 4.75Z',
  d14: 'M4.62362 18.7903C4.59875 18.7083 4.58632 18.6674 4.56264 18.6375C4.53897 18.6077 4.5009 18.5857 4.42478 18.5418C3.34944 17.9209 2.57606 16.8925 2.06791 15.7811C1.8451 15.2937 1.66811 14.7798 1.53658 14.2588C1.47654 14.021 1.44652 13.9021 1.50699 13.8249C1.56745 13.7477 1.70481 13.7485 1.97953 13.7499C1.98635 13.75 1.99317 13.75 2 13.75C4.07107 13.75 5.75 12.0711 5.75 10C5.75 8.41833 4.77079 7.06537 3.38553 6.51427C3.13445 6.41439 3.00892 6.36444 2.98105 6.27204C2.95318 6.17964 3.02204 6.08033 3.15975 5.88172C5.10048 3.08287 8.33619 1.25 12 1.25C15.6638 1.25 18.8995 3.08288 20.8403 5.88172C20.978 6.08033 21.0468 6.17964 21.019 6.27204C20.9911 6.36445 20.8655 6.41439 20.6145 6.51427C19.2292 7.06537 18.25 8.41833 18.25 10C18.25 12.0711 19.9289 13.75 22 13.75C22.0068 13.75 22.0136 13.75 22.0205 13.7499C22.2952 13.7485 22.4325 13.7477 22.493 13.8249C22.5535 13.9021 22.5235 14.021 22.4634 14.2588C22.3319 14.7798 22.1549 15.2937 21.9321 15.7811C21.424 16.8924 20.6507 17.9207 19.5755 18.5416C19.4995 18.5855 19.4615 18.6074 19.4379 18.6371C19.4143 18.6669 19.4018 18.7078 19.3768 18.7896C19.0776 19.77 18.5577 20.7433 17.6484 21.4401C16.9938 21.9417 16.0711 22.2569 15.1296 22.4528C14.164 22.6537 13.0726 22.7503 11.9956 22.75C10.9186 22.7497 9.82761 22.6525 8.86288 22.4515C7.92235 22.2556 7.00068 21.9407 6.34745 21.4401C5.43254 20.7391 4.91926 19.765 4.62362 18.7903ZM6.41474 16.6684C6.31261 16.7292 6.26154 16.7597 6.23539 16.8135C6.20925 16.8674 6.21702 16.9268 6.23258 17.0455C6.39317 18.2706 6.75687 19.3424 7.54055 19.9429C7.85033 20.1802 8.43223 20.4193 9.26571 20.5929C10.075 20.7616 11.0284 20.8497 11.9963 20.8499C12.9641 20.8502 13.9178 20.7625 14.7277 20.5941C15.5616 20.4206 16.1445 20.1813 16.4556 19.9429C17.2597 19.3267 17.6378 18.1944 17.7799 16.9374C17.7916 16.834 17.7974 16.7823 17.776 16.7332C17.7546 16.6841 17.7139 16.654 17.6326 16.5939C16.3819 15.6699 14.4751 15.1511 12.3695 15.1499C10.26 15.1487 8.09333 15.6689 6.41474 16.6684ZM8.25 7C8.25 4.92893 9.92893 3.25 12 3.25C14.0711 3.25 15.75 4.92893 15.75 7C15.75 9.07107 14.0711 10.75 12 10.75C9.92893 10.75 8.25 9.07107 8.25 7Z',
  d15: 'M21.6017 7.78515C21.7241 7.76328 21.7854 7.75234 21.8476 7.78687C21.9098 7.82141 21.935 7.88451 21.9855 8.01071C22.4787 9.2442 22.75 10.5904 22.75 12C22.75 12.0735 22.7033 12.1392 22.6327 12.1598C22.432 12.2185 22.2197 12.25 22 12.25C20.7574 12.25 19.75 11.2426 19.75 10C19.75 8.89329 20.549 7.9732 21.6017 7.78515Z',
  d16: 'M1.36726 12.1598C1.29673 12.1392 1.25 12.0735 1.25 12C1.25 10.5904 1.5213 9.2442 2.01453 8.01071C2.065 7.88451 2.09023 7.82141 2.15243 7.78687C2.21464 7.75234 2.27587 7.76328 2.39833 7.78515C3.45097 7.9732 4.25 8.89329 4.25 10C4.25 11.2426 3.24264 12.25 2 12.25C1.78031 12.25 1.56798 12.2185 1.36726 12.1598Z',
  d17: 'M12 3.25C9.92893 3.25 8.25 4.92893 8.25 7C8.25 9.07107 9.92893 10.75 12 10.75C14.0711 10.75 15.75 9.07107 15.75 7C15.75 4.92893 14.0711 3.25 12 3.25ZM12 4.75C10.7574 4.75 9.75 5.75736 9.75 7C9.75 8.24264 10.7574 9.25 12 9.25C13.2426 9.25 14.25 8.24264 14.25 7C14.25 5.75736 13.2426 4.75 12 4.75Z',
  d18: 'M6.77458 20.6979C5.53107 19.6145 5.14197 17.6388 5 15.9911C9.12323 13.3333 15.8061 13.3363 19 16C18.8806 17.6717 18.4754 19.6026 17.2182 20.6979C15.2225 22.4365 8.76455 22.4316 6.77458 20.6979Z',
  d19: 'M8.00024 18C8.00024 17.4477 8.44796 17 9.00024 17H9.0092C9.56149 17 10.0092 17.4477 10.0092 18C10.0092 18.5523 9.56149 19 9.0092 19H9.00024C8.44796 19 8.00024 18.5523 8.00024 18ZM13.9913 18C13.9913 17.4477 14.439 17 14.9913 17H15.0002C15.5525 17 16.0002 17.4477 16.0002 18C16.0002 18.5523 15.5525 19 15.0002 19H14.9913C14.439 19 13.9913 18.5523 13.9913 18Z',
  d20: 'M9.74976 8C9.74976 6.75736 10.7571 5.75 11.9998 5.75C13.2424 5.75 14.2498 6.75736 14.2498 8C14.2498 9.24264 13.2424 10.25 11.9998 10.25C10.7571 10.25 9.74976 9.24264 9.74976 8Z',
  d21: 'M2.06767 15.7811C2.57634 16.8936 3.57885 17.923 4.68647 18.5437C4.71023 18.6252 4.73515 18.7064 4.76129 18.7871C5.05542 19.6955 5.52118 20.6 6.28252 21.2633C6.91342 21.813 7.82732 22.1748 8.793 22.4036C9.77572 22.6364 10.891 22.7497 11.9946 22.75C13.0982 22.7503 14.214 22.6377 15.1976 22.405C16.1642 22.1764 17.0792 21.8142 17.7115 21.2633C18.5432 20.5388 19.0412 19.5378 19.3407 18.5022C20.426 17.8778 21.4343 16.8692 21.9318 15.7811C22.2334 15.1214 22.4511 14.413 22.5857 13.7045C22.3948 13.7344 22.1991 13.75 21.9998 13.75C19.9287 13.75 18.2498 12.0711 18.2498 10C18.2498 8.22278 19.4861 6.73431 21.1456 6.34772C19.2506 3.28807 15.8632 1.25 11.9998 1.25C8.13631 1.25 4.74887 3.28806 2.85393 6.34772C4.51344 6.73431 5.74976 8.22278 5.74976 10C5.74976 12.0711 4.07082 13.75 1.99976 13.75C1.80044 13.75 1.60476 13.7344 1.41385 13.7045C1.54844 14.413 1.76607 15.1214 2.06767 15.7811ZM6.18742 18.3251C5.98843 17.7105 5.86785 17.0409 5.79272 16.3852C7.65902 15.3046 10.0391 14.7487 12.3477 14.75C14.6615 14.7513 16.793 15.3109 18.2178 16.3419C18.0661 17.8604 17.6558 19.3217 16.7252 20.1324C16.3597 20.4508 15.7191 20.7401 14.8513 20.9453C14.0006 21.1465 13.0033 21.2503 11.9942 21.25C10.9851 21.2497 9.98803 21.1454 9.13784 20.944C8.2706 20.7385 7.63101 20.4496 7.26693 20.1324C6.78475 19.7123 6.43422 19.0873 6.18742 18.3251ZM11.9998 4.25C9.92869 4.25 8.24976 5.92893 8.24976 8C8.24976 10.0711 9.92869 11.75 11.9998 11.75C14.0708 11.75 15.7498 10.0711 15.7498 8C15.7498 5.92893 14.0708 4.25 11.9998 4.25Z',
  d22: 'M21.8783 7.75322C20.6922 7.8163 19.7498 8.79809 19.7498 10C19.7498 11.2426 20.7571 12.25 21.9998 12.25C22.2624 12.25 22.5145 12.205 22.7489 12.1223C22.7495 12.0814 22.7498 12.0406 22.7498 12C22.7498 10.4917 22.4391 9.05594 21.8783 7.75322Z',
  d23: 'M1.24976 12C1.24976 12.0406 1.25005 12.0814 1.25065 12.1223C1.48498 12.205 1.73711 12.25 1.99976 12.25C3.2424 12.25 4.24976 11.2426 4.24976 10C4.24976 8.79809 3.30735 7.8163 2.12117 7.75322C1.56039 9.05594 1.24976 10.4917 1.24976 12Z',
};

export const IconSuperMarioToadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-stroke-rounded IconSuperMarioToadStrokeRounded"
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
      />
      <circle 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-duotone-rounded IconSuperMarioToadDuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-twotone-rounded IconSuperMarioToadTwotoneRounded"
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
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="7" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-solid-rounded IconSuperMarioToadSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-bulk-rounded IconSuperMarioToadBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      </g>
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
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-stroke-sharp IconSuperMarioToadStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <circle 
        cx="12" 
        cy="8" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSuperMarioToadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="super-mario-toad-solid-sharp IconSuperMarioToadSolidSharp"
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
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSuperMarioToad: TheIconSelfPack = {
  name: 'SuperMarioToad',
  StrokeRounded: IconSuperMarioToadStrokeRounded,
  DuotoneRounded: IconSuperMarioToadDuotoneRounded,
  TwotoneRounded: IconSuperMarioToadTwotoneRounded,
  SolidRounded: IconSuperMarioToadSolidRounded,
  BulkRounded: IconSuperMarioToadBulkRounded,
  StrokeSharp: IconSuperMarioToadStrokeSharp,
  SolidSharp: IconSuperMarioToadSolidSharp,
};