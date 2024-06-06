import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 22.0017V16.0275C20 15.0786 20 14.6042 19.8416 14.2303C19.6413 13.7575 19.2669 13.3798 18.7958 13.1755C18.4232 13.0139 17.9488 13.0098 17 13.0017C17 18.0017 12 20.0017 12 20.0017C12 20.0017 7 18.0017 7 13.0017C6.06812 13.0017 5.60218 13.0017 5.23463 13.1539C4.74458 13.3569 4.35523 13.7463 4.15224 14.2363C4 14.6039 4 15.0698 4 16.0017V22.0017',
  d2: 'M12 13.5L14 12.5V14.5L12 13.5ZM12 13.5L10 12.5002V14.5002L12 13.5Z',
  d3: 'M15.5 6.5V5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5V6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5Z',
  d4: 'M20 16.0275V22.0017H4V16.0017C4 15.0698 4 14.6039 4.15224 14.2363C4.35523 13.7463 4.74458 13.3569 5.23463 13.1539C5.60218 13.0017 6.06812 13.0017 7 13.0017C7 18.0017 12 20.0017 12 20.0017C12 20.0017 17 18.0017 17 13.0017C17.9488 13.0098 18.4232 13.0139 18.7958 13.1755C19.2669 13.3798 19.6413 13.7575 19.8416 14.2303C20 14.6042 20 15.0786 20 16.0275Z',
  d5: 'M15.5 6.49976V5.49976C15.5 3.56676 13.933 1.99976 12 1.99976C10.067 1.99976 8.5 3.56676 8.5 5.49976V6.49976C8.5 8.43275 10.067 9.99976 12 9.99976C13.933 9.99976 15.5 8.43275 15.5 6.49976Z',
  d6: 'M6.97475 12.2517C7.38896 12.2517 7.75 12.5875 7.75 13.0017C7.75 15.2227 8.8526 16.785 10.0017 17.8192C10.5769 18.3369 11.566 18.931 12 19.177C12.4339 18.931 13.4231 18.3369 13.9983 17.8192C15.1474 16.785 16.25 15.2227 16.25 13.0017C16.25 12.8017 16.3299 12.6099 16.4719 12.4691C16.614 12.3283 16.8322 12.2502 17.0322 12.252C17.4847 12.2558 17.8625 12.259 18.1726 12.2833C18.4955 12.3086 18.8001 12.3598 19.0942 12.4874C19.742 12.7683 20.2568 13.2876 20.5322 13.9377C20.6573 14.233 20.7059 14.538 20.7284 14.8611C20.75 15.1713 20.75 15.5492 20.75 16.0017V16.0017V22.0017C20.75 22.4159 20.4142 22.7517 20 22.7517H4C3.58579 22.7517 3.25 22.4159 3.25 22.0017V15.9765V15.9764C3.24999 15.532 3.24999 15.161 3.27077 14.8563C3.29241 14.5392 3.33905 14.2397 3.45933 13.9493C3.73844 13.2755 4.27379 12.7401 4.94762 12.461C5.23801 12.3408 5.53754 12.2941 5.85464 12.2725C6.15925 12.2517 6.53028 12.2517 6.97474 12.2517H6.97475Z',
  d7: 'M14.3943 11.862C14.6154 11.9987 14.75 12.2401 14.75 12.5V14.5C14.75 14.7599 14.6154 15.0013 14.3943 15.138C14.1732 15.2746 13.8971 15.2871 13.6646 15.1708L12 14.3385L10.3355 15.171C10.103 15.2873 9.82686 15.2749 9.60573 15.1382C9.3846 15.0016 9.25 14.7602 9.25 14.5002V12.5002C9.25 12.2403 9.38458 11.9989 9.60567 11.8622C9.82677 11.7256 10.1029 11.7131 10.3354 11.8294L12 12.6615L13.6646 11.8292C13.8971 11.7129 14.1732 11.7254 14.3943 11.862Z',
  d8: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5V6.5C16.25 8.84721 14.3472 10.75 12 10.75C9.65279 10.75 7.75 8.84721 7.75 6.5V5.5Z',
  d9: 'M20 22.0015V15.0015C20 13.8969 19.1046 13.0015 18 13.0015H17C17 18.0015 12 20.0015 12 20.0015C12 20.0015 7 18.0015 7 13.0015H6C4.89543 13.0015 4 13.8969 4 15.0015V22.0015',
  d10: 'M11.5885 18.9583C11.7491 19.0493 11.8888 19.1219 12 19.1767C12.1112 19.1219 12.2509 19.0493 12.4115 18.9583C12.8454 18.7124 13.4231 18.3366 13.9983 17.819C15.1474 16.7848 16.25 15.2225 16.25 13.0015V12.2515H18C19.5188 12.2515 20.75 13.4827 20.75 15.0015V22.7515H3.25V15.0015C3.25 13.4827 4.48122 12.2515 6 12.2515H7.75V13.0015C7.75 15.2225 8.8526 16.7848 10.0017 17.819C10.5769 18.3366 11.1546 18.7124 11.5885 18.9583Z',
  d11: 'M14.75 11.2864V15.7134L12 14.3384L9.25 15.7138V11.2867L12 12.6614L14.75 11.2864Z',
} as const;

export const IconWaiterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-stroke-rounded IconWaiterStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWaiterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-duotone-rounded IconWaiterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconWaiterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-twotone-rounded IconWaiterTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWaiterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-solid-rounded IconWaiterSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconWaiterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-bulk-rounded IconWaiterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconWaiterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-stroke-sharp IconWaiterStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconWaiterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waiter-solid-sharp IconWaiterSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWaiter: TheIconSelfPack = {
  name: 'Waiter',
  StrokeRounded: IconWaiterStrokeRounded,
  DuotoneRounded: IconWaiterDuotoneRounded,
  TwotoneRounded: IconWaiterTwotoneRounded,
  SolidRounded: IconWaiterSolidRounded,
  BulkRounded: IconWaiterBulkRounded,
  StrokeSharp: IconWaiterStrokeSharp,
  SolidSharp: IconWaiterSolidSharp,
};