import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.8868 4.07642C17.1488 5.5519 17.9211 7.53325 17.9211 9.71162C17.9211 14.2718 14.5364 17.9686 10.3612 17.9686C8.04167 17.9686 6.03867 16.9088 4.67822 15.224',
  d2: 'M16.4175 3.57264L13.3562 6.41521C13.2666 6.49843 13.2726 6.6417 13.3537 6.7333C14.0308 7.49874 14.048 9.14282 13.2715 10.1704C12.4455 11.2635 11.2161 11.1152 10.774 10.8877L10.5235 11.5914C10.4287 11.8576 10.1611 12.0218 9.88068 11.9857L8.23877 11.7743C8.11395 11.7582 7.98884 11.8017 7.90094 11.8917L4.97952 14.8834L3.58065 16.3785C2.72253 17.2956 2.8051 18.7533 3.9034 19.363C7.37659 21.2911 12.9566 22.3317 17.8425 17.7358C22.3576 13.0697 21.2088 7.4076 19.431 3.95697C18.844 2.81772 17.3568 2.70045 16.4175 3.57264Z',
  d3: 'M5.47855 20.0987C9.53906 21.8417 14.4265 21.0566 17.7421 17.7436C21.0577 14.4305 21.8433 9.54682 20.0991 5.4894C19.4564 3.99446 19.1351 3.24699 18.0359 3.03596C17.2299 2.8812 16.6243 3.23029 15.7857 4C17.5241 5.83333 20.001 10.6 16.001 15C14.001 17.0048 8.90098 19.8628 4.50098 15.2571C3.74644 16.0417 2.84757 17.1237 3.02323 18.0372C3.23443 19.1355 3.98247 19.4566 5.47855 20.0987Z',
  d4: 'M15.8883 4.07617C17.1503 5.55165 17.9226 7.533 17.9226 9.71137C17.9226 14.2716 14.5379 17.9684 10.3627 17.9684C8.04314 17.9684 6.04014 16.9086 4.67969 15.2238',
  d5: 'M16.419 3.57288L13.3577 6.41545C13.2681 6.49867 13.2741 6.64194 13.3552 6.73354C14.0323 7.49898 14.0495 9.14306 13.273 10.1706C12.447 11.2637 11.2176 11.1154 10.7755 10.8879L10.525 11.5916C10.4302 11.8578 10.1626 12.022 9.88215 11.9859L8.24024 11.7745C8.11542 11.7584 7.99031 11.8019 7.90241 11.8919L4.98099 14.8836L3.58212 16.3787C2.724 17.2958 2.80657 18.7535 3.90487 19.3632C7.37806 21.2913 12.9581 22.3319 17.844 17.736C22.3591 13.0699 21.2103 7.40784 19.4325 3.95721C18.8455 2.81796 17.3583 2.70069 16.419 3.57288Z',
  d6: 'M15.8868 4.07666C17.1488 5.55214 17.9211 7.53349 17.9211 9.71187C17.9211 14.2721 14.5364 17.9689 10.3612 17.9689C8.04167 17.9689 6.03867 16.909 4.67822 15.2243',
  d7: 'M16.4175 3.57289L13.3562 6.41545C13.2666 6.49867 13.2726 6.64195 13.3537 6.73354C14.0308 7.49899 14.048 9.14306 13.2715 10.1707C12.4455 11.2638 11.2161 11.1154 10.774 10.8879L10.5235 11.5917C10.4287 11.8579 10.1611 12.0221 9.88068 11.9859L8.23877 11.7745C8.11395 11.7584 7.98884 11.8019 7.90094 11.8919L4.97952 14.8836L3.58065 16.3787C2.72253 17.2959 2.8051 18.7535 3.9034 19.3632C7.37659 21.2914 12.9566 22.332 17.8425 17.736C22.3576 13.07 21.2088 7.40784 19.431 3.95722C18.844 2.81796 17.3568 2.70069 16.4175 3.57289Z',
  d8: 'M15.096 4.38186C14.9036 4.18948 14.8074 4.09329 14.6861 4.09124C14.5648 4.0892 14.4662 4.18138 14.269 4.36573C13.8866 4.72317 13.5314 5.06539 13.2887 5.30791C13.0921 5.5009 12.8676 5.74175 12.7173 5.98764C12.6443 6.10726 12.5517 6.28656 12.5226 6.50152C12.4892 6.7482 12.5419 7.06159 12.7937 7.3062C13.2063 7.70701 13.2607 8.57737 12.7777 9.42175C12.5538 9.81318 12.2606 10.0971 11.9711 10.2361C11.7056 10.3635 11.4272 10.3816 11.1148 10.2259C10.8986 10.1182 10.6438 10.1212 10.4302 10.234C10.2166 10.3468 10.0704 10.5555 10.0374 10.7947C9.93887 11.3535 9.1701 11.2043 8.74058 11.0404C8.70156 11.0255 8.68206 11.0181 8.66571 11.0139C8.64937 11.0097 8.63419 11.0075 8.60382 11.0033C8.30376 10.9611 7.76254 10.9312 7.35565 11.3378L4.91348 13.778C4.71333 13.978 4.61326 14.078 4.61323 14.2023C4.61321 14.3266 4.71325 14.4266 4.91332 14.6267L5.53023 15.2436C5.53584 15.2492 5.54136 15.2549 5.54678 15.2607C8.18219 18.0688 12.5129 17.8467 15.2254 14.9539C17.9213 12.0789 17.9247 7.40117 15.2357 4.52157L15.096 4.38186Z',
  d9: 'M3.91291 15.7476C3.69494 15.5296 3.58595 15.4207 3.44851 15.4311C3.31107 15.4416 3.22442 15.5596 3.05113 15.7956C3.04458 15.8045 3.03805 15.8134 3.03155 15.8224C2.59435 16.4237 2.11355 17.2825 2.28591 18.1789C2.42768 18.9162 2.7731 19.4336 3.32064 19.8409C3.79278 20.1921 4.42451 20.4631 5.1145 20.7591L5.18191 20.788C9.51457 22.6478 14.7315 21.8114 18.2714 18.2742C21.8114 14.7369 22.6487 9.52331 20.7873 5.19329L20.7583 5.12595C20.4621 4.4365 20.1908 3.80513 19.8393 3.33327C19.4317 2.78605 18.9139 2.44109 18.1765 2.29951C17.3895 2.1484 16.7345 2.35357 16.1101 2.77341C16.1069 2.77553 16.1053 2.77659 16.0981 2.78209C15.9669 2.88234 15.9462 3.09582 16.0557 3.21944C16.0617 3.22622 16.0667 3.23127 16.0768 3.24138L16.3052 3.46977C16.311 3.47553 16.3166 3.48138 16.3222 3.48732C19.56 6.94321 19.5591 12.5252 16.3196 15.9799C13.0968 19.4169 7.76667 19.8077 4.46136 16.2961L3.91291 15.7476Z',
  d10: 'M15.096 4.38049C14.9037 4.18811 14.8075 4.09192 14.6862 4.08988C14.5649 4.08783 14.4663 4.18001 14.2691 4.36436C13.8867 4.72181 13.5314 5.06403 13.2888 5.30655C13.0922 5.49953 12.8677 5.74038 12.7174 5.98627C12.6443 6.10589 12.5517 6.2852 12.5226 6.50016C12.4892 6.74684 12.542 7.06022 12.7938 7.30484C13.2064 7.70564 13.2608 8.57601 12.7777 9.42039C12.5538 9.81181 12.2607 10.0957 11.9711 10.2347C11.7056 10.3622 11.4272 10.3802 11.1148 10.2246C10.8987 10.1169 10.6438 10.1199 10.4302 10.2326C10.2167 10.3454 10.0704 10.5541 10.0374 10.7934C9.93891 11.3521 9.17015 11.203 8.74063 11.0391C8.70161 11.0242 8.6821 11.0167 8.66576 11.0125C8.64942 11.0083 8.63423 11.0062 8.60386 11.0019C8.30381 10.9597 7.76258 10.9298 7.3557 11.3364L4.91353 13.7766C4.71338 13.9766 4.61331 14.0766 4.61328 14.2009C4.61326 14.3252 4.71329 14.4253 4.91336 14.6253L5.53028 15.2423C5.53589 15.2479 5.54141 15.2536 5.54683 15.2593C8.18224 18.0674 12.5129 17.8453 15.2255 14.9525C17.9213 12.0775 17.9248 7.3998 15.2358 4.5202L15.096 4.38049Z',
  d11: 'M4.99802 15.9713C6.38829 17.2838 8.26322 18.0884 10.3261 18.0884C14.6134 18.0884 18.0889 14.6129 18.0889 10.3256C18.0889 8.26273 17.2843 6.3878 15.9718 4.99753M21 10.3256C21 16.2206 16.2211 20.9995 10.3261 20.9995C7.48965 20.9995 4.91162 19.8932 3 18.0884L8.77725 12.3112C9.22567 12.7377 9.83226 12.9995 10.5 12.9995C11.8807 12.9995 13 11.8802 13 10.4995C13 10.2521 12.9641 10.0132 12.8971 9.78749C13.5512 9.45866 14 8.7815 14 7.99951C14 7.73003 13.9467 7.47299 13.8501 7.23837L18.0889 2.99951C19.8936 4.91114 21 7.48916 21 10.3256Z',
  d12: 'M18.6855 2.80229L18.1644 2.25024L16.2241 4.19049L16.5088 4.47518L16.5162 4.48302C17.9549 6.00695 18.838 8.06413 18.838 10.3259C18.838 15.0275 15.0267 18.8388 10.3252 18.8388C8.06335 18.8388 6.00617 17.9557 4.48224 16.517L4.4744 16.5096L4.1897 16.2249L2.25 18.1646L2.80204 18.6858C4.81368 20.5849 7.52855 21.7502 10.514 21.7502C16.7195 21.7502 21.75 16.7197 21.75 10.5142C21.75 7.52879 20.5847 4.81393 18.6855 2.80229Z',
  d13: 'M5.25036 15.1643L5.51961 15.4335C6.77543 16.6156 8.46502 17.3388 10.3252 17.3388C14.1982 17.3388 17.338 14.199 17.338 10.3259C17.338 8.46581 16.6148 6.77622 15.4327 5.52039L15.1635 5.25115L13.1106 7.30397L13.2979 7.75873C13.3569 7.90193 13.3898 8.05941 13.3898 8.22643C13.3898 8.70606 13.1153 9.12289 12.7114 9.32594L12.1601 9.60312L12.3356 10.1947C12.3814 10.3493 12.4063 10.5138 12.4063 10.6853C12.4063 11.6359 11.6357 12.4065 10.6851 12.4065C10.225 12.4065 9.80846 12.227 9.49906 11.9327L8.97777 11.4368L5.25036 15.1643Z',
};

export const IconWatermelonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-stroke-rounded IconWatermelonStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatermelonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-duotone-rounded IconWatermelonDuotoneRounded"
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
      />
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconWatermelonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-twotone-rounded IconWatermelonTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatermelonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-solid-rounded IconWatermelonSolidRounded"
    >
      <path 
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

export const IconWatermelonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-bulk-rounded IconWatermelonBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWatermelonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-stroke-sharp IconWatermelonStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWatermelonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watermelon-solid-sharp IconWatermelonSolidSharp"
    >
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

export const iconPackOfWatermelon: TheIconSelfPack = {
  name: 'Watermelon',
  StrokeRounded: IconWatermelonStrokeRounded,
  DuotoneRounded: IconWatermelonDuotoneRounded,
  TwotoneRounded: IconWatermelonTwotoneRounded,
  SolidRounded: IconWatermelonSolidRounded,
  BulkRounded: IconWatermelonBulkRounded,
  StrokeSharp: IconWatermelonStrokeSharp,
  SolidSharp: IconWatermelonSolidSharp,
};