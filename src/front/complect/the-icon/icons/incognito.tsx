import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 18C10 16.3431 8.65685 15 7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18Z',
  d2: 'M20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18Z',
  d3: 'M2 12H22',
  d4: 'M14.5 16.3411C13.9625 15.5328 13.0435 15 12 15C10.9565 15 10.0375 15.5328 9.5 16.3411',
  d5: 'M3 12L4.66166 5.70282C4.75853 5.33572 4.80697 5.15216 4.85375 5.02203C5.53545 3.12569 7.7632 2.40106 9.37283 3.55208C9.48328 3.63107 9.6247 3.75287 9.90752 3.99647C10.0699 4.13634 10.1511 4.20629 10.2264 4.26331C11.2822 5.06317 12.7178 5.06317 13.7736 4.26331C13.8489 4.20629 13.9301 4.13635 14.0925 3.99647C14.3753 3.75287 14.5167 3.63107 14.6272 3.55208C16.2368 2.40106 18.4645 3.12569 19.1463 5.02203C19.193 5.15216 19.2415 5.33571 19.3383 5.70282L21 12H3Z',
  d6: 'M14.5 16.3411C13.9625 15.5328 13.0435 15 12 15C10.9565 15 10.0375 15.5328 9.5 16.3411M10 18C10 16.3431 8.65685 15 7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18ZM20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18Z',
  d7: 'M7 19.875C5.89543 19.875 5 18.9796 5 17.875C5 16.7704 5.89543 15.875 7 15.875C7.69273 15.875 8.3032 16.2272 8.66213 16.7623C8.66544 16.7674 8.6688 16.7724 8.67221 16.7774C8.87943 17.0925 9 17.4697 9 17.875C9 18.9796 8.10457 19.875 7 19.875ZM10.7008 16.3543C10.8936 16.8231 11 17.3366 11 17.875C11 20.0841 9.20914 21.875 7 21.875C4.79086 21.875 3 20.0841 3 17.875C3 15.6659 4.79086 13.875 7 13.875C7.94603 13.875 8.81535 14.2034 9.50017 14.7525C10.1845 14.204 11.0538 13.875 12.0001 13.875C12.9464 13.875 13.8157 14.204 14.4999 14.7524C15.1847 14.2034 16.054 13.875 17 13.875C19.2091 13.875 21 15.6659 21 17.875C21 20.0841 19.2091 21.875 17 21.875C14.7909 21.875 13 20.0841 13 17.875C13 17.3366 13.1064 16.823 13.2993 16.3542C12.9492 16.0547 12.4955 15.875 12.0001 15.875C11.5046 15.875 11.0509 16.0548 10.7008 16.3543ZM15.323 16.7847C15.1187 17.0983 15 17.4728 15 17.875C15 18.9796 15.8954 19.875 17 19.875C18.1046 19.875 19 18.9796 19 17.875C19 16.7704 18.1046 15.875 17 15.875C16.3104 15.875 15.7024 16.224 15.3428 16.7549C15.3364 16.765 15.3298 16.7749 15.323 16.7847Z',
  d8: 'M4.14815 4.64469C4.09009 4.8062 4.03406 5.01861 3.94901 5.34105L2.48836 10.8765H2C1.44772 10.8765 1 11.3242 1 11.8765C1 12.4288 1.44772 12.8765 2 12.8765H22C22.5523 12.8765 23 12.4288 23 11.8765C23 11.3242 22.5523 10.8765 22 10.8765H21.512L20.0514 5.34108C19.9663 5.01861 19.9103 4.80621 19.8522 4.64469C19.009 2.29905 16.2215 1.36647 14.1911 2.81839C14.0525 2.91749 13.568 3.32899 13.3209 3.54188C12.533 4.13882 11.4674 4.13882 10.6795 3.54188C10.4324 3.32899 9.94785 2.91749 9.80926 2.81839C7.77885 1.36647 4.99137 2.29905 4.14815 4.64469Z',
  d9: 'M4 12L5.47704 5.70282C5.56314 5.33572 5.60619 5.15216 5.64778 5.02203C6.25374 3.12569 8.23395 2.40106 9.66473 3.55208C9.76292 3.63107 9.88862 3.75287 10.14 3.99647C10.2844 4.13634 10.3566 4.20629 10.4235 4.26331C11.3619 5.06317 12.6381 5.06317 13.5765 4.26331C13.6434 4.20629 13.7156 4.13635 13.86 3.99647C14.1114 3.75287 14.2371 3.63107 14.3353 3.55208C15.766 2.40106 17.7463 3.12569 18.3522 5.02203C18.3938 5.15216 18.4369 5.33571 18.523 5.70282L20 12H4Z',
  d10: 'M3.25 18C3.25 15.9289 4.99111 14.25 7.13889 14.25C8.05861 14.25 8.90376 14.5579 9.56956 15.0726C10.2348 14.5584 11.08 14.25 12 14.25C12.92 14.25 13.7652 14.5584 14.4304 15.0726C15.0962 14.5579 15.9414 14.25 16.8611 14.25C19.0089 14.25 20.75 15.9289 20.75 18C20.75 20.0711 19.0089 21.75 16.8611 21.75C14.7133 21.75 12.9722 20.0711 12.9722 18C12.9722 17.4953 13.0756 17.0138 13.2631 16.5743C12.9228 16.2935 12.4817 16.125 12 16.125C11.5183 16.125 11.0772 16.2935 10.7369 16.5743C10.9244 17.0138 11.0278 17.4953 11.0278 18C11.0278 20.0711 9.28666 21.75 7.13889 21.75C4.99111 21.75 3.25 20.0711 3.25 18ZM7.13889 16.125C6.065 16.125 5.19444 16.9645 5.19444 18C5.19444 19.0355 6.065 19.875 7.13889 19.875C8.21278 19.875 9.08333 19.0355 9.08333 18C9.08333 16.9645 8.21278 16.125 7.13889 16.125ZM16.8611 16.125C15.7872 16.125 14.9167 16.9645 14.9167 18C14.9167 19.0355 15.7872 19.875 16.8611 19.875C17.935 19.875 18.8056 19.0355 18.8056 18C18.8056 16.9645 17.935 16.125 16.8611 16.125Z',
  d11: 'M10.1349 2.96769C9.21241 2.2256 8.08304 2.07627 7.08922 2.43995C6.10391 2.80051 5.3008 3.64386 4.93337 4.79372C4.88261 4.95258 4.83344 5.16227 4.75724 5.48727L3.4642 11H2V13H22V11H20.5358L19.2428 5.4873C19.1666 5.16228 19.1174 4.95259 19.0666 4.79372C18.6992 3.64386 17.8961 2.80051 16.9108 2.43995C15.917 2.07627 14.7876 2.2256 13.8652 2.96769C13.7394 3.06885 13.5909 3.2128 13.3734 3.42359L13.3381 3.45782C13.1858 3.6054 13.1342 3.65483 13.09 3.69248C12.4319 4.25342 11.5681 4.25342 10.91 3.69248C10.8658 3.65483 10.8142 3.6054 10.6619 3.45782L10.6266 3.42359C10.4091 3.2128 10.2606 3.06885 10.1349 2.96769Z',
} as const;

export const IconIncognitoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-stroke-rounded IconIncognitoStrokeRounded"
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
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconIncognitoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-duotone-rounded IconIncognitoDuotoneRounded"
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
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconIncognitoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-twotone-rounded IconIncognitoTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconIncognitoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-solid-rounded IconIncognitoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIncognitoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-bulk-rounded IconIncognitoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIncognitoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-stroke-sharp IconIncognitoStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIncognitoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="incognito-solid-sharp IconIncognitoSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIncognito: TheIconSelfPack = {
  name: 'Incognito',
  StrokeRounded: IconIncognitoStrokeRounded,
  DuotoneRounded: IconIncognitoDuotoneRounded,
  TwotoneRounded: IconIncognitoTwotoneRounded,
  SolidRounded: IconIncognitoSolidRounded,
  BulkRounded: IconIncognitoBulkRounded,
  StrokeSharp: IconIncognitoStrokeSharp,
  SolidSharp: IconIncognitoSolidSharp,
};