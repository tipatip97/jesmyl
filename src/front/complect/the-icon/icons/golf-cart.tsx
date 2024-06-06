import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.99821 18.9818C3.07289 18.9818 2 19.2182 2 17.9874V15.8389C2 14.1187 2 13.2587 2.49899 12.6951C3.27867 11.8144 4.78799 12.0211 5.8359 12.0211C6.64499 12.0211 7.64108 11.9089 8.32617 12.4323C8.77967 12.7788 8.99564 13.352 9.42757 14.4984C9.59263 14.9364 9.71105 15.5422 10.1161 15.8216C10.3729 15.9986 10.7078 15.9986 11.3776 15.9986H13.4897C14.8134 15.9986 15.2614 14.9734 15.9875 14.0099H17.5416C19.7316 14.0099 21.7599 15.286 21.9669 17.6407C22.0083 18.112 22.1219 18.9818 21.4271 18.9818H19.9839M15.9875 18.9818H8.49419',
  d2: 'M4 12V3',
  d3: 'M19 14L16 3',
  d4: 'M2 3H18',
  d5: 'M16 14L14 11M13 12L15 10',
  d6: 'M6.5 12C6.5 9.97001 6.38046 8 4 8',
  d7: 'M2 15.8389V17.9874C2 19.0468 2.79496 19.0192 3.60647 18.9909C3.73772 18.9864 3.86939 18.9818 3.99821 18.9818H4.00008C4.00985 17.8856 4.9015 17 6 17C7.0985 17 7.99015 17.8856 7.99992 18.9818H16.0001C16.0099 17.8856 16.9015 17 18 17C19.0985 17 19.9901 17.8856 19.9999 18.9818H21.4271C22.0894 18.9818 22.0172 18.1912 21.9731 17.7092L21.9669 17.6407C21.7599 15.286 19.7316 14.0099 17.5416 14.0099H15.9875C15.8655 14.1717 15.7514 14.3352 15.6397 14.4954C15.0862 15.2888 14.5911 15.9986 13.4897 15.9986H11.3776C10.7078 15.9986 10.3729 15.9986 10.1161 15.8216C9.79422 15.5995 9.65334 15.1714 9.52622 14.7851C9.49338 14.6853 9.46146 14.5883 9.42757 14.4984C8.99564 13.352 8.77967 12.7788 8.32617 12.4323C7.74182 11.9858 6.9312 12.0018 6.20336 12.0162C6.07789 12.0187 5.95488 12.0211 5.8359 12.0211C5.67492 12.0211 5.50305 12.0162 5.32461 12.0112C4.34148 11.9832 3.15889 11.9497 2.49899 12.6951C2 13.2587 2 14.1187 2 15.8389Z',
  d8: 'M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z',
  d9: 'M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z',
  d10: 'M4 12V3M6.5 12C6.5 9.97001 6.38046 8 4 8',
  d11: 'M18.127 16.75C16.7462 16.75 15.627 17.8693 15.627 19.25C15.627 20.6307 16.7462 21.75 18.127 21.75C19.5077 21.75 20.627 20.6307 20.627 19.25C20.627 17.8693 19.5077 16.75 18.127 16.75Z',
  d12: 'M6.12695 16.75C4.74624 16.75 3.62695 17.8693 3.62695 19.25C3.62695 20.6307 4.74624 21.75 6.12695 21.75C7.50767 21.75 8.62695 20.6307 8.62695 19.25C8.62695 17.8693 7.50767 16.75 6.12695 16.75Z',
  d13: 'M18.127 4.25025H17.4362L20.0917 13.9871C20.095 13.9991 20.098 14.0112 20.1008 14.0232C21.5493 14.6753 22.6757 15.9504 22.841 17.8333C22.8615 18.0481 22.9068 18.5243 22.8365 18.8894C22.7951 19.1042 22.7025 19.3873 22.4751 19.6215C22.4319 19.666 22.3862 19.7063 22.3385 19.7424C22.1682 19.8713 22.083 19.9358 21.9708 19.8774C21.8586 19.819 21.8639 19.6767 21.8744 19.3921C21.8761 19.3454 21.877 19.2985 21.877 19.2515C21.877 17.1804 20.198 15.5015 18.127 15.5015C16.0559 15.5015 14.377 17.1804 14.377 19.2515C14.377 19.3402 14.38 19.4283 14.3861 19.5155C14.4027 19.7534 14.4109 19.8724 14.3517 19.9359C14.2925 19.9995 14.1826 19.9996 13.963 19.9998L10.2916 20.0034C10.0713 20.0036 9.96117 20.0037 9.90179 19.9401C9.84241 19.8764 9.8508 19.7571 9.86759 19.5185C9.8738 19.4303 9.87695 19.3413 9.87695 19.2515C9.87695 17.1804 8.19802 15.5015 6.12695 15.5015C4.05589 15.5015 2.37695 17.1804 2.37695 19.2515C2.37695 19.5331 2.37695 19.6739 2.28166 19.7324C2.26773 19.741 2.24752 19.7499 2.23179 19.7543C2.12423 19.785 2.04446 19.7119 1.8849 19.5656C1.82424 19.51 1.7664 19.4473 1.71259 19.3766C1.46679 19.0538 1.37696 18.6584 1.37696 18.2461L1.37695 16.0474C1.37693 15.2271 1.37691 14.5421 1.44509 13.9944C1.51689 13.4176 1.6743 12.8911 2.0644 12.45C2.37195 12.1023 2.74411 11.8831 3.12695 11.7443V4.25025H2.12695C1.57467 4.25025 1.12695 3.80254 1.12695 3.25025C1.12695 2.69797 1.57467 2.25025 2.12695 2.25025H16.1052C16.1201 2.24992 16.135 2.24992 16.1499 2.25025H18.127C18.6792 2.25025 19.127 2.69797 19.127 3.25025C19.127 3.80254 18.6792 4.25025 18.127 4.25025ZM8.12282 11.6859C8.10703 10.8315 8.03228 9.87762 7.68535 9.08695C7.45761 8.56792 7.10064 8.08483 6.55215 7.74173C6.13627 7.48159 5.65746 7.33143 5.12695 7.27542V4.25025H15.3632L17.8905 13.5172C17.8166 13.5145 17.7426 13.5132 17.6686 13.5132H16.8376L15.4137 11.3774L15.8341 10.9571C16.2246 10.5666 16.2246 9.93342 15.8341 9.54289C15.4435 9.15237 14.8104 9.15237 14.4198 9.54289L13.4329 10.5298C13.4235 10.5389 13.4143 10.5481 13.4052 10.5575L12.4198 11.5429C12.0293 11.9334 12.0293 12.5666 12.4198 12.9571C12.8104 13.3476 13.4435 13.3476 13.8341 12.9571L13.9715 12.8196L15.0594 14.4515L14.9929 14.5468C14.8333 14.7713 14.6952 14.9511 14.5533 15.0965C14.2976 15.3584 14.0391 15.5042 13.6167 15.5042H11.5046C10.8396 15.5042 10.5583 15.2915 10.5007 15.1852C10.4642 15.0979 10.2663 14.5208 10.2451 14.4589L10.2432 14.4536L10.2411 14.4479C10.0373 13.9061 9.86435 13.4471 9.68297 13.0833C9.48962 12.6955 9.25892 12.3561 8.90846 12.0881C8.6594 11.8976 8.391 11.7707 8.12282 11.6859ZM6.11664 11.5144C6.09367 10.8231 6.02606 10.2829 5.8539 9.89056C5.7542 9.66333 5.63495 9.52705 5.49151 9.43733C5.40871 9.38553 5.29244 9.33348 5.12695 9.29744V11.5039C5.49473 11.5036 5.86841 11.509 6.11664 11.5144Z',
  d14: 'M6.27947 11.5181C6.59139 11.5119 6.97155 11.5045 7.31858 11.5343C7.81932 11.5773 8.40364 11.7019 8.90846 12.0881C9.25892 12.3561 9.48962 12.6955 9.68297 13.0833C9.86435 13.4471 10.0373 13.9061 10.2411 14.4479L10.2432 14.4536L10.2451 14.4589C10.2663 14.5208 10.4642 15.0979 10.5007 15.1852C10.5583 15.2915 10.8396 15.5042 11.5046 15.5042H13.6167C14.0391 15.5042 14.2976 15.3584 14.5533 15.0965C14.6952 14.9511 14.8333 14.7713 14.9929 14.5468C15.1088 14.3805 15.3854 13.985 15.5155 13.8122C15.6572 13.6239 15.879 13.5132 16.1144 13.5132H17.6686C20.1173 13.5132 22.5896 14.9708 22.841 17.8333C22.8615 18.0481 22.9068 18.5243 22.8365 18.8894C22.7951 19.1042 22.7025 19.3873 22.4751 19.6215C22.4319 19.666 22.3862 19.7063 22.3385 19.7424C22.1682 19.8713 22.083 19.9358 21.9708 19.8774C21.8586 19.819 21.8639 19.6767 21.8744 19.3921C21.8761 19.3454 21.877 19.2985 21.877 19.2515C21.877 17.1804 20.198 15.5015 18.127 15.5015C16.0559 15.5015 14.377 17.1804 14.377 19.2515C14.377 19.3402 14.38 19.4283 14.3861 19.5155C14.4027 19.7534 14.4109 19.8724 14.3517 19.9359C14.2925 19.9995 14.1826 19.9996 13.963 19.9998L10.2916 20.0034C10.0713 20.0036 9.96117 20.0037 9.90179 19.9401C9.84241 19.8764 9.8508 19.7571 9.86759 19.5185C9.8738 19.4303 9.87695 19.3413 9.87695 19.2515C9.87695 17.1804 8.19802 15.5015 6.12695 15.5015C4.05589 15.5015 2.37695 17.1804 2.37695 19.2515C2.37695 19.5331 2.37695 19.6739 2.28166 19.7324C2.26773 19.741 2.24752 19.7499 2.23179 19.7543C2.12423 19.785 2.04446 19.7119 1.8849 19.5656C1.82424 19.51 1.7664 19.4473 1.71259 19.3766C1.46679 19.0538 1.37696 18.6584 1.37696 18.2461L1.37695 16.0474C1.37693 15.2271 1.37691 14.5421 1.44509 13.9944C1.51689 13.4176 1.6743 12.8911 2.0644 12.45C2.64147 11.7975 3.44602 11.5976 4.12183 11.5324C4.59024 11.4872 5.85306 11.5065 6.27174 11.5182L6.27947 11.5181Z',
  d15: 'M18.127 4.25025H17.4362L20.0917 13.9871C20.095 13.9991 20.098 14.0112 20.1008 14.0232C19.4138 13.7138 18.6543 13.5446 17.8905 13.5172L15.3632 4.25025H5.12695V7.27542C5.65746 7.33143 6.13627 7.48159 6.55215 7.74173C7.10064 8.08483 7.45761 8.56792 7.68535 9.08695C8.03228 9.87762 8.10703 10.8315 8.12282 11.6859C7.84743 11.5988 7.57228 11.556 7.31858 11.5343C6.97155 11.5045 6.59139 11.5119 6.27947 11.5181L6.27174 11.5182C6.22846 11.517 6.17616 11.5157 6.11664 11.5144C6.09367 10.8231 6.02606 10.2829 5.8539 9.89056C5.7542 9.66333 5.63495 9.52705 5.49151 9.43733C5.40871 9.38554 5.29244 9.33348 5.12695 9.29744V11.5039C4.72996 11.5043 4.33985 11.5113 4.12183 11.5324C3.80619 11.5629 3.46247 11.6227 3.12695 11.7443V4.25025H2.12695C1.57467 4.25025 1.12695 3.80254 1.12695 3.25025C1.12695 2.69797 1.57467 2.25025 2.12695 2.25025H16.1052C16.1201 2.24992 16.135 2.24992 16.1499 2.25025H18.127C18.6792 2.25025 19.127 2.69797 19.127 3.25025C19.127 3.80254 18.6792 4.25025 18.127 4.25025ZM16.8376 13.5132H16.1144C15.879 13.5132 15.6572 13.6239 15.5155 13.8122C15.4061 13.9574 15.1934 14.2599 15.0594 14.4515L13.9715 12.8196L13.8341 12.9571C13.4435 13.3476 12.8104 13.3476 12.4198 12.9571C12.0293 12.5666 12.0293 11.9334 12.4198 11.5429L13.4052 10.5575C13.4143 10.5481 13.4235 10.5389 13.4329 10.5298L14.4198 9.54289C14.8104 9.15237 15.4435 9.15237 15.8341 9.54289C16.2246 9.93342 16.2246 10.5666 15.8341 10.9571L15.4137 11.3774L16.8376 13.5132Z',
  d16: 'M3.99902 18.9999H1.99902V12L7.99902 12L9.99953 15.9987H13.9995L15.987 14.0099L21.999 13.9999V18.9999H19.999M15.999 18.9999H7.99954',
  d17: 'M4.99902 12V3',
  d18: 'M2 3H19',
  d19: 'M16 14L14 10.5M12.5 11.5L15.5 9.5',
  d20: 'M4.25252 4.22275H2.28027V2.25H19.0487V4.22275H17.3809L20.0003 13.827L18.097 14.346L15.3361 4.22275H6.22527V12.1138H4.25252V4.22275Z',
  d21: 'M3.5 19.25C3.5 17.8693 4.61929 16.75 6 16.75C7.38071 16.75 8.5 17.8693 8.5 19.25C8.5 20.6307 7.38071 21.75 6 21.75C4.61929 21.75 3.5 20.6307 3.5 19.25Z',
  d22: 'M15.5 19.25C15.5 17.8693 16.6193 16.75 18 16.75C19.3807 16.75 20.5 17.8693 20.5 19.25C20.5 20.6307 19.3807 21.75 18 21.75C16.6193 21.75 15.5 20.6307 15.5 19.25Z',
  d23: 'M2 11.25C1.80109 11.25 1.61032 11.329 1.46967 11.4697C1.32902 11.6103 1.25 11.8011 1.25 12V18.9999C1.25 19.4141 1.58579 19.7499 2 19.7499H2.28303C2.26124 19.5863 2.25 19.4195 2.25 19.25C2.25 17.1789 3.92893 15.5 6 15.5C8.07107 15.5 9.75 17.1789 9.75 19.25C9.75 19.4195 9.73876 19.5863 9.71697 19.7499H14.283C14.2612 19.5863 14.25 19.4195 14.25 19.25C14.25 17.1789 15.9289 15.5 18 15.5C20.0711 15.5 21.75 17.1789 21.75 19.25C21.75 19.4195 21.7388 19.5863 21.717 19.7499H22C22.4142 19.7499 22.75 19.4141 22.75 18.9999V13.9999C22.75 13.8007 22.6708 13.6098 22.5299 13.4691C22.389 13.3284 22.1979 13.2495 21.9988 13.2499L15.9867 13.2599C15.7882 13.2602 15.5979 13.3393 15.4575 13.4797L13.6897 15.2487H10.4639L8.67074 11.6644C8.54367 11.4104 8.28402 11.25 8 11.25H2Z',
  d24: 'M13.6643 11.9263L13.0557 12.3321L11.9463 10.668L14.9463 8.66797L16.0557 10.3321L15.3323 10.8143L16.8692 13.5039L15.1327 14.4962L13.6643 11.9263Z',
};

export const IconGolfCartStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-stroke-rounded IconGolfCartStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="6" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="18" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconGolfCartDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-duotone-rounded IconGolfCartDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="6" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="18" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconGolfCartTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-twotone-rounded IconGolfCartTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGolfCartSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-solid-rounded IconGolfCartSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconGolfCartBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-bulk-rounded IconGolfCartBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconGolfCartStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-stroke-sharp IconGolfCartStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="6" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="18" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGolfCartSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-cart-solid-sharp IconGolfCartSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGolfCart: TheIconSelfPack = {
  name: 'GolfCart',
  StrokeRounded: IconGolfCartStrokeRounded,
  DuotoneRounded: IconGolfCartDuotoneRounded,
  TwotoneRounded: IconGolfCartTwotoneRounded,
  SolidRounded: IconGolfCartSolidRounded,
  BulkRounded: IconGolfCartBulkRounded,
  StrokeSharp: IconGolfCartStrokeSharp,
  SolidSharp: IconGolfCartSolidSharp,
};