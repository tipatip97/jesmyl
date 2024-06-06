import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.945 22C6.55709 22 2.99998 18.4183 2.99998 14C2.99998 11.9162 3.95827 9.83244 5.20922 8C5.46594 9.5 6.57524 12.4 8.95876 12C6.33496 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10',
  d2: 'M15.5354 16.202C15.5354 15.5075 15.4277 14.5456 15.8359 13.9204C16.7377 12.5395 18.6013 12.7797 19.2625 14.1006C19.5631 14.761 19.4516 15.5377 19.4669 16.1928M15.5354 16.202C14.6863 16.2899 14.3202 16.8419 14.1768 17.2827C14.0325 17.8231 13.9123 19.144 14.1046 20.5849C14.2729 21.4855 14.9066 21.9036 15.4724 21.9539C16.0134 22.0019 18.2978 21.9899 18.9591 21.9899C19.9839 21.9899 20.5851 21.7257 20.8857 20.645C21.0299 19.8044 21.066 18.2433 20.8255 17.2827C20.5597 16.481 19.9245 16.248 19.4669 16.1928M15.5354 16.202C16.8165 16.0693 18.1849 16.0383 19.4669 16.1928',
  d3: 'M11.1564 22.001C6.79035 22.001 3.25098 18.4193 3.25098 14.001C3.25098 11.9172 4.20449 9.83342 5.44921 8.00098C5.70464 9.50098 6.80841 12.401 9.18004 12.001C6.56933 6.50098 11.1564 2.00098 11.1564 2.00098C11.1564 2.00098 11.6505 5.50098 16.0973 9.00098C18.8078 11.1344 19.633 13.8061 19.096 16.1723C18.6659 16.1585 18.2232 16.1514 17.751 16.1514C17.0577 16.1514 16.4281 16.1667 15.8084 16.196C15.0718 16.2308 14.4666 16.8197 14.3682 17.5713C14.304 18.0618 14.251 18.5645 14.251 19.0764C14.251 19.5883 14.304 20.091 14.3682 20.5815C14.4001 20.8257 14.4856 21.0527 14.6117 21.2491C13.5875 21.6856 12.4249 21.9536 11.1564 22.001Z',
  d4: 'M11.196 22.001C6.80809 22.001 3.25098 18.4193 3.25098 14.001C3.25098 11.9172 4.20927 9.83342 5.46022 8.00098C5.71694 9.50098 6.82624 12.401 9.20976 12.001C6.58596 6.50098 11.196 2.00098 11.196 2.00098C11.196 2.00098 11.6926 5.50098 16.1617 9.00098C16.5755 9.32505 16.9367 9.65903 17.251 10.001',
  d5: 'M15.9919 16.3781C15.9919 16.3181 16.0002 15.553 16.0015 15.1186C16.0028 14.7217 15.9679 14.3389 16.1575 13.9887C16.8679 12.5757 18.9079 12.7196 19.4119 14.159C19.4993 14.396 19.5045 14.7717 19.5019 15.1186C19.4987 15.5619 19.5079 16.3781 19.5079 16.3781M15.9919 16.3781C14.9121 16.3781 14.4681 17.1577 14.3481 17.6375C14.2281 18.1173 14.2281 19.8566 14.3001 20.5763C14.54 21.4759 15.1399 21.8477 15.7278 21.9677C16.2677 22.0157 18.5473 21.9977 19.2072 21.9977C20.167 22.0157 20.8869 21.6558 21.1868 20.5763C21.2468 20.2164 21.3068 18.2373 21.1568 17.6375C20.8389 16.6779 20.1078 16.3781 19.5079 16.3781M15.9919 16.3781H19.5079',
  d6: 'M10.945 22C6.55711 22 3 18.4183 3 14C3 11.9162 3.95829 9.83244 5.20924 8C5.46596 9.5 6.57526 12.4 8.95878 12C6.33498 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10',
  d7: 'M15.5325 16.202C15.5325 15.5075 15.4248 14.5456 15.833 13.9204C16.7348 12.5395 18.5984 12.7797 19.2596 14.1006C19.5602 14.761 19.4487 15.5377 19.464 16.1928M15.5325 16.202C14.6834 16.2899 14.3173 16.8419 14.1739 17.2827C14.0296 17.8231 13.9094 19.144 14.1017 20.5849C14.27 21.4855 14.9037 21.9036 15.4695 21.9539C16.0105 22.0019 18.2949 21.9899 18.9562 21.9899C19.981 21.9899 20.5822 21.7257 20.8828 20.645C21.027 19.8044 21.0631 18.2433 20.8226 17.2827C20.5568 16.481 19.9216 16.248 19.464 16.1928M15.5325 16.202C16.8136 16.0693 18.182 16.0383 19.464 16.1928',
  d8: 'M20.2188 15.6106V15.025C20.2188 13.5125 19.0213 12.25 17.5 12.25C15.9787 12.25 14.7813 13.5125 14.7813 15.025V15.6106C14.0256 15.9237 13.4824 16.641 13.3735 17.4725C13.308 17.9731 13.25 18.5139 13.25 19.075C13.25 19.6361 13.308 20.1769 13.3735 20.6775C13.5154 21.7614 14.3954 22.6513 15.5219 22.7046C16.1538 22.7345 16.7952 22.75 17.5 22.75C18.2048 22.75 18.8462 22.7345 19.4781 22.7046C20.6046 22.6513 21.4846 21.7615 21.6265 20.6775C21.692 20.1769 21.75 19.6361 21.75 19.075C21.75 18.5139 21.692 17.9731 21.6265 17.4725C21.5176 16.641 20.9744 15.9237 20.2188 15.6106ZM16.2812 15.025C16.2812 14.3008 16.8467 13.75 17.5 13.75C18.1533 13.75 18.7188 14.3008 18.7188 15.025V15.4167C18.3277 15.4057 17.9254 15.4 17.5 15.4C17.0746 15.4 16.6723 15.4057 16.2812 15.4167V15.025Z',
  d9: 'M11.81 2.38343C11.758 2.2123 11.7056 1.97694 11.6874 1.89321C11.6472 1.61412 11.4538 1.38101 11.1868 1.29007C10.9194 1.19896 10.6234 1.26594 10.4211 1.46332C10.146 1.73189 9.88052 2.06013 9.67156 2.33138C9.25478 2.87241 8.72701 3.65599 8.2853 4.62696C7.61241 6.1061 7.13216 8.0424 7.56823 10.2055C7.64368 10.5798 7.6814 10.7669 7.54104 10.8342C7.40068 10.9015 7.29494 10.7747 7.08346 10.5211C7.02068 10.4458 6.95946 10.3656 6.89968 10.2807C6.37569 9.53658 6.06462 8.55205 5.9485 7.8735C5.89694 7.57223 5.66771 7.33238 5.36907 7.26725C5.07044 7.20211 4.76215 7.32472 4.58982 7.57716C3.30262 9.4627 2.25 11.6973 2.25 14C2.25 18.8276 6.13803 22.75 10.945 22.75H11.855C12.1978 22.75 12.3692 22.75 12.428 22.6562C12.4867 22.5624 12.4051 22.394 12.2418 22.0572C12.0621 21.6865 11.9404 21.2864 11.8862 20.8722C11.818 20.3513 11.75 19.7343 11.75 19.075C11.75 18.4157 11.818 17.7987 11.8862 17.2778C12.0081 16.3465 12.4655 15.4951 13.1536 14.8849C13.2212 14.8249 13.255 14.795 13.2722 14.7614C13.2894 14.7278 13.2938 14.6832 13.3028 14.5941C13.5141 12.4857 15.2585 10.75 17.5 10.75C17.6663 10.75 17.83 10.7596 17.9904 10.7781C18.2836 10.812 18.4302 10.829 18.4978 10.7254C18.5654 10.6217 18.5046 10.518 18.383 10.3107C17.8715 9.43815 16.7241 8.68444 16.3731 8.40955C14.2265 6.72839 13.0528 5.06303 12.4173 3.84139C12.0989 3.22928 11.9141 2.72563 11.81 2.38343Z',
  d10: 'M19.5 16.5V15C19.5 13.8954 18.6046 13 17.5 13C16.3954 13 15.5 13.8954 15.5 15V16.5M14 16.5H21V22H14V16.5Z',
  d11: 'M17.5 12.25C15.9812 12.25 14.75 13.4812 14.75 15V15.75H13.25V22.75H21.75V15.75H20.25V15C20.25 13.4812 19.0188 12.25 17.5 12.25ZM16.25 15V15.75H18.75V15C18.75 14.3096 18.1904 13.75 17.5 13.75C16.8096 13.75 16.25 14.3096 16.25 15Z',
  d12: 'M11.69 1.9084L11.6872 1.89209C11.6467 1.6135 11.4535 1.38088 11.1868 1.29007C10.9194 1.19896 10.6234 1.26594 10.4211 1.46332C10.4211 1.46332 9.88052 2.06013 9.67156 2.33138C9.25478 2.87241 8.72701 3.65599 8.2853 4.62696C7.51912 6.31118 7.00269 8.58809 7.80438 11.1177C7.4666 10.9499 7.1686 10.6626 6.89968 10.2807C6.37569 9.53658 6.06462 8.55205 5.9485 7.8735C5.89694 7.57223 5.66771 7.33238 5.36907 7.26725C5.07044 7.20211 4.76215 7.32472 4.58982 7.57716C3.30262 9.4627 2.25 11.6973 2.25 14C2.25 18.8276 6.13803 22.75 10.945 22.75H11.75V14.25H13.316C13.6702 12.2605 15.4087 10.75 17.5 10.75C17.9338 10.75 18.3524 10.815 18.7467 10.9358C18.1567 10.0501 17.3785 9.19695 16.3731 8.40955C14.2265 6.72839 13.0528 5.06303 12.4173 3.84139C12.0989 3.22928 11.9141 2.72563 11.81 2.38343C11.758 2.2123 11.7262 2.08154 11.708 1.99782C11.6989 1.95596 11.6932 1.92587 11.69 1.9084Z',
};

export const IconFireSecurityStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-stroke-rounded IconFireSecurityStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFireSecurityDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-duotone-rounded IconFireSecurityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFireSecurityTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-twotone-rounded IconFireSecurityTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFireSecuritySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-solid-rounded IconFireSecuritySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFireSecurityBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-bulk-rounded IconFireSecurityBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFireSecurityStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-stroke-sharp IconFireSecurityStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFireSecuritySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-security-solid-sharp IconFireSecuritySolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfFireSecurity: TheIconSelfPack = {
  name: 'FireSecurity',
  StrokeRounded: IconFireSecurityStrokeRounded,
  DuotoneRounded: IconFireSecurityDuotoneRounded,
  TwotoneRounded: IconFireSecurityTwotoneRounded,
  SolidRounded: IconFireSecuritySolidRounded,
  BulkRounded: IconFireSecurityBulkRounded,
  StrokeSharp: IconFireSecurityStrokeSharp,
  SolidSharp: IconFireSecuritySolidSharp,
};