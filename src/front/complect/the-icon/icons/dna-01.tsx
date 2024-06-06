import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.6671 22C9.20107 21.466 9.73505 20.9321 9.24127 18M8.6671 15.3336C7.33381 10.0004 8.33378 9.00042 8.6671 8.6671C9.00042 8.33378 10.0004 7.33381 15.3336 8.6671M8.6671 15.3336C3.33394 14.0003 2.66664 14.6663 2 15.3329M8.6671 15.3336C14.0003 16.6668 14.9996 15.6662 15.3329 15.3329C15.6662 14.9996 16.6668 14.0003 15.3336 8.6671M22 8.6671C21.3334 9.33375 20.6667 10.0004 15.3336 8.6671M15.3329 2C14.799 2.53394 14.2654 3.06829 14.7592 6',
  d2: 'M8.66775 8.66775C8.33443 9.00107 7.33446 10.001 8.66775 15.3342C13.9999 16.6672 14.9998 15.6673 15.3334 15.3337L15.3335 15.3335L15.3337 15.3334C15.6673 14.9998 16.6672 13.9999 15.3342 8.66775C10.001 7.33446 9.00107 8.33443 8.66775 8.66775Z',
  d3: 'M8.6671 15.3342C7.33381 10.001 8.33378 9.00107 8.6671 8.66775C9.00042 8.33443 10.0004 7.33446 15.3336 8.66775M8.6671 15.3342C3.33394 14.0009 2.66664 14.6669 2 15.3335M8.6671 15.3342C14.0003 16.6675 14.9996 15.6669 15.3329 15.3335C15.6662 15.0002 16.6668 14.0009 15.3336 8.66775M22 8.66775C21.3334 9.33439 20.6667 10.001 15.3336 8.66775',
  d4: 'M7.99976 22C8.53373 21.466 9.0677 20.9321 8.57392 18',
  d5: 'M15.666 2C15.1321 2.53394 14.5986 3.06829 15.0923 6',
  d6: 'M7.95999 22.7071C7.56947 22.3166 7.56947 21.6834 7.95999 21.2929C8.19884 21.054 8.29776 20.95 8.36818 20.6619C8.45788 20.2948 8.49495 19.59 8.25515 18.1661C8.16344 17.6215 8.53058 17.1056 9.0752 17.0139C9.61981 16.9222 10.1357 17.2893 10.2274 17.8339C10.4814 19.3421 10.4983 20.3702 10.311 21.1367C10.106 21.9754 9.67618 22.4052 9.38121 22.7001L9.37421 22.7071C8.98368 23.0976 8.35052 23.0976 7.95999 22.7071ZM14.0045 16.9498C12.8674 17.0983 11.1443 16.9836 8.42457 16.3037C5.77205 15.6406 4.41169 15.5122 3.67395 15.5792C3.32965 15.6104 3.15934 15.6816 3.06479 15.735C2.95869 15.7949 2.87908 15.868 2.70711 16.04C2.31658 16.4305 1.68342 16.4305 1.29289 16.04C0.902369 15.6495 0.902369 15.0163 1.29289 14.6258C1.2986 14.6201 1.30443 14.6143 1.31037 14.6083C1.47236 14.4461 1.72124 14.1969 2.08121 13.9936C2.46593 13.7763 2.92076 13.6393 3.49326 13.5873C4.35709 13.509 5.55895 13.62 7.34214 13.9987C6.98054 12.1622 6.93317 10.8957 7.05052 9.99605C7.12603 9.41718 7.2716 8.97472 7.4572 8.62773C7.64689 8.27309 7.85488 8.06511 7.95929 7.9607L7.9607 7.95929C8.06511 7.85488 8.27309 7.64689 8.62773 7.4572C8.97472 7.2716 9.41718 7.12603 9.99605 7.05052C11.1332 6.90219 12.8563 7.01702 15.5761 7.69696C18.2286 8.36009 19.5887 8.48823 20.3262 8.42118C20.6703 8.3899 20.8405 8.31869 20.935 8.26527C21.0412 8.20528 21.1208 8.13212 21.2929 7.95999C21.6834 7.56947 22.3166 7.56947 22.7071 7.95999C23.0976 8.35052 23.0976 8.98368 22.7071 9.37421C22.7013 9.38 22.6954 9.38592 22.6894 9.39196C22.5275 9.55404 22.2788 9.80314 21.9192 10.0064C21.5345 10.2238 21.0797 10.3609 20.5073 10.413C19.6435 10.4915 18.4417 10.3806 16.6585 10.0019C17.0201 11.8385 17.0673 13.1048 16.9498 14.0045C16.8742 14.5833 16.7285 15.0257 16.5427 15.3727C16.3531 15.7269 16.1453 15.9347 16.041 16.039L16.039 16.041C15.9347 16.1453 15.7269 16.3531 15.3727 16.5427C15.0257 16.7285 14.5833 16.8742 14.0045 16.9498ZM14.5046 9.49605C12.258 8.97678 10.9738 8.93993 10.2547 9.03372C9.87529 9.08321 9.67194 9.1668 9.57103 9.22077C9.47856 9.27023 9.43669 9.31173 9.37421 9.37421C9.31173 9.43669 9.27023 9.47856 9.22077 9.57103C9.1668 9.67194 9.08321 9.87529 9.03372 10.2547C8.93993 10.9738 8.97678 12.258 9.49605 14.5046C11.7426 15.0238 13.0266 15.0605 13.7454 14.9666C14.1247 14.9171 14.3279 14.8335 14.4288 14.7795C14.5212 14.73 14.5631 14.6885 14.6258 14.6258C14.6885 14.5631 14.73 14.5212 14.7795 14.4288C14.8335 14.3279 14.9171 14.1247 14.9666 13.7454C15.0605 13.0266 15.0238 11.7426 14.5046 9.49605ZM14.9253 6.98611C14.3807 7.07784 13.8648 6.7107 13.7731 6.16609C13.5191 4.65816 13.5021 3.63006 13.6892 2.86362C13.8941 2.02449 14.324 1.59462 14.6192 1.29946L14.6258 1.29289C15.0163 0.902369 15.6495 0.902369 16.04 1.29289C16.4305 1.68342 16.4305 2.31658 16.04 2.70711C15.8014 2.94569 15.7025 3.04983 15.6321 3.33805C15.5425 3.7052 15.5055 4.41014 15.7453 5.83391C15.8371 6.37853 15.4699 6.89438 14.9253 6.98611Z',
  d7: 'M14.0045 16.9505C12.8674 17.099 11.1443 16.9843 8.42457 16.3044C5.77205 15.6413 4.41169 15.5129 3.67395 15.5799C3.32965 15.6111 3.15934 15.6823 3.06479 15.7357C2.95869 15.7956 2.87908 15.8687 2.70711 16.0407C2.31658 16.4312 1.68342 16.4312 1.29289 16.0407C0.902369 15.6502 0.902369 15.017 1.29289 14.6265C1.2986 14.6208 1.30443 14.6149 1.31037 14.609C1.47236 14.4468 1.72124 14.1976 2.08121 13.9942C2.46593 13.7769 2.92076 13.64 3.49326 13.588C4.35709 13.5097 5.55895 13.6207 7.34214 13.9994C6.98054 12.1628 6.93317 10.8964 7.05052 9.99674C7.12603 9.41787 7.2716 8.97541 7.4572 8.62842C7.64689 8.27379 7.85488 8.0658 7.95929 7.96139L7.9607 7.95999C8.06511 7.85557 8.27309 7.64758 8.62773 7.4579C8.97472 7.2723 9.41718 7.12672 9.99605 7.05122C11.1332 6.90289 12.8563 7.01771 15.5761 7.69765C18.2286 8.36078 19.5887 8.48892 20.3262 8.42188C20.6703 8.39059 20.8405 8.31938 20.935 8.26597C21.0412 8.20598 21.1208 8.13282 21.2929 7.96069C21.6834 7.57016 22.3166 7.57016 22.7071 7.96069C23.0976 8.35121 23.0976 8.98438 22.7071 9.3749C22.7013 9.38069 22.6954 9.38661 22.6894 9.39266C22.5275 9.55473 22.2788 9.80384 21.9192 10.0071C21.5345 10.2245 21.0797 10.3616 20.5073 10.4137C19.6435 10.4922 18.4417 10.3813 16.6585 10.0026C17.0201 11.8392 17.0673 13.1055 16.9498 14.0052C16.8742 14.584 16.7285 15.0264 16.5427 15.3734C16.3531 15.7276 16.1453 15.9354 16.041 16.0397L16.039 16.0417C15.9347 16.146 15.7269 16.3538 15.3727 16.5434C15.0257 16.7292 14.5833 16.8749 14.0045 16.9505ZM14.5046 9.49675C12.258 8.97748 10.9738 8.94062 10.2547 9.03442C9.87529 9.08391 9.67194 9.16749 9.57103 9.22147C9.47856 9.27093 9.43669 9.31242 9.37421 9.3749C9.31173 9.43738 9.27023 9.47925 9.22077 9.57172C9.1668 9.67264 9.08321 9.87599 9.03372 10.2554C8.93993 10.9745 8.97678 12.2587 9.49605 14.5053C11.7426 15.0245 13.0266 15.0612 13.7454 14.9673C14.1247 14.9178 14.3279 14.8342 14.4288 14.7802C14.5212 14.7307 14.5631 14.6892 14.6258 14.6265C14.6885 14.5638 14.73 14.5219 14.7795 14.4295C14.8335 14.3286 14.9171 14.1254 14.9666 13.7461C15.0605 13.0273 15.0238 11.7433 14.5046 9.49675Z',
  d8: 'M7.95913 22.7071C7.5686 22.3166 7.5686 21.6834 7.95913 21.2929C8.19797 21.054 8.29689 20.95 8.36731 20.6619C8.45702 20.2948 8.49408 19.59 8.25428 18.1661C8.16257 17.6215 8.52972 17.1056 9.07433 17.0139C9.61895 16.9222 10.1348 17.2893 10.2265 17.8339C10.4805 19.3421 10.4975 20.3702 10.3101 21.1367C10.1051 21.9754 9.67531 22.4052 9.38034 22.7001L9.37334 22.7071C8.98282 23.0976 8.34965 23.0976 7.95913 22.7071ZM14.9244 6.98611C14.3798 7.07784 13.864 6.7107 13.7722 6.16609C13.5183 4.65816 13.5012 3.63006 13.6883 2.86362C13.8932 2.02449 14.3232 1.59462 14.6184 1.29946L14.6249 1.29289C15.0154 0.902369 15.6486 0.902369 16.0391 1.29289C16.4297 1.68342 16.4297 2.31658 16.0391 2.70711C15.8006 2.94569 15.7016 3.04983 15.6313 3.33805C15.5416 3.7052 15.5047 4.41014 15.7445 5.83391C15.8362 6.37853 15.4691 6.89438 14.9244 6.98611Z',
  d9: 'M9.37072 22.743L9.36369 22.75L7.94381 21.3301C8.18362 21.0903 8.28293 20.9858 8.35364 20.6966C8.4437 20.3281 8.48091 19.6204 8.24015 18.1908L10.2203 17.8573C10.4753 19.3715 10.4923 20.4038 10.3042 21.1733C10.0984 22.0154 9.66687 22.4469 9.37072 22.743ZM14.0125 16.9696C12.8708 17.1187 11.1409 17.0036 8.41024 16.3209C5.7471 15.6551 4.38129 15.5263 3.6406 15.5935C3.29492 15.6249 3.12392 15.6963 3.029 15.7499C2.92247 15.8101 2.84254 15.8835 2.66988 16.0562L1.25 14.6363C1.25573 14.6306 1.26158 14.6247 1.26755 14.6188C1.43018 14.4559 1.68007 14.2057 2.04147 14.0015C2.42774 13.7834 2.88439 13.6458 3.45919 13.5937C4.32648 13.515 5.53315 13.6265 7.32349 14.0067C6.96043 12.1628 6.91288 10.8913 7.03069 9.98802C7.1065 9.40683 7.25266 8.9626 7.439 8.61422C7.62945 8.25817 7.83827 8.04935 7.94311 7.94452L7.94452 7.94311C8.04935 7.83827 8.25817 7.62945 8.61422 7.439C8.9626 7.25266 9.40683 7.1065 9.98802 7.03069C11.1297 6.88177 12.8598 6.99706 15.5904 7.67972C18.2535 8.34551 19.6191 8.47416 20.3595 8.40685C20.7051 8.37544 20.876 8.30394 20.9708 8.25031C21.0774 8.19008 21.1573 8.11663 21.3301 7.94381L22.75 9.36369C22.7442 9.36951 22.7383 9.37545 22.7322 9.38152C22.5697 9.54424 22.3199 9.79434 21.9589 9.99841C21.5727 10.2167 21.1161 10.3544 20.5413 10.4066C19.6741 10.4855 18.4675 10.3741 16.6772 9.99391C17.0402 11.8378 17.0876 13.1093 16.9696 14.0125C16.8937 14.5937 16.7474 15.0378 16.5609 15.3862C16.3706 15.7418 16.1619 15.9505 16.0572 16.0552L16.0552 16.0572C15.9505 16.1619 15.7418 16.3706 15.3862 16.5609C15.0378 16.7474 14.5937 16.8937 14.0125 16.9696ZM14.5146 9.48602C12.259 8.96467 10.9697 8.92767 10.2477 9.02184C9.86678 9.07153 9.66262 9.15545 9.5613 9.20964C9.46846 9.2593 9.42642 9.30096 9.36369 9.36369C9.30096 9.42642 9.2593 9.46846 9.20964 9.5613C9.15545 9.66262 9.07153 9.86678 9.02184 10.2477C8.92767 10.9697 8.96467 12.259 9.48602 14.5146C11.7416 15.036 13.0307 15.0728 13.7524 14.9785C14.1332 14.9288 14.3373 14.8448 14.4385 14.7906C14.5313 14.7409 14.5734 14.6993 14.6363 14.6363C14.6993 14.5734 14.7409 14.5313 14.7906 14.4385C14.8448 14.3373 14.9288 14.1332 14.9785 13.7524C15.0728 13.0307 15.036 11.7416 14.5146 9.48602ZM14.6297 1.25659L14.6363 1.25L16.0562 2.66988C15.8167 2.90942 15.7173 3.01398 15.6467 3.30335C15.5567 3.67197 15.5196 4.37973 15.7603 5.80921L13.7802 6.14272C13.5252 4.62874 13.5081 3.59653 13.696 2.82702C13.9017 1.98453 14.3333 1.55294 14.6297 1.25659Z',
};

export const IconDna01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-stroke-rounded IconDna01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDna01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-duotone-rounded IconDna01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDna01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-twotone-rounded IconDna01TwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDna01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-solid-rounded IconDna01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDna01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-bulk-rounded IconDna01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDna01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-stroke-sharp IconDna01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDna01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dna-01-solid-sharp IconDna01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDna01: TheIconSelfPack = {
  name: 'Dna01',
  StrokeRounded: IconDna01StrokeRounded,
  DuotoneRounded: IconDna01DuotoneRounded,
  TwotoneRounded: IconDna01TwotoneRounded,
  SolidRounded: IconDna01SolidRounded,
  BulkRounded: IconDna01BulkRounded,
  StrokeSharp: IconDna01StrokeSharp,
  SolidSharp: IconDna01SolidSharp,
};