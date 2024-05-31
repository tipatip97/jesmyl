import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 15H15C15.9319 15 16.3978 15 16.7654 15.1522C17.2554 15.3552 17.6448 15.7446 17.8478 16.2346C18 16.6022 18 17.0681 18 18C18 18.9319 18 19.3978 17.8478 19.7654C17.6448 20.2554 17.2554 20.6448 16.7654 20.8478C16.3978 21 15.9319 21 15 21H2',
  d2: 'M2 3H15C15.9319 3 16.3978 3 16.7654 3.15224C17.2554 3.35523 17.6448 3.74458 17.8478 4.23463C18 4.60218 18 5.06812 18 6C18 6.93188 18 7.39782 17.8478 7.76537C17.6448 8.25542 17.2554 8.64477 16.7654 8.84776C16.3978 9 15.9319 9 15 9H2',
  d3: 'M22 9H9C8.06812 9 7.60218 9 7.23463 9.15224C6.74458 9.35523 6.35523 9.74458 6.15224 10.2346C6 10.6022 6 11.0681 6 12C6 12.9319 6 13.3978 6.15224 13.7654C6.35523 14.2554 6.74458 14.6448 7.23463 14.8478C7.60218 15 8.06812 15 9 15H22',
  d4: 'M21 15C19.8954 15 19 13.6569 19 12C19 10.3431 19.8954 9 21 9',
  d5: 'M3 3C4.10457 3 5 4.34315 5 6C5 7.65685 4.10457 9 3 9',
  d6: 'M3 15C4.10457 15 5 16.3431 5 18C5 19.6569 4.10457 21 3 21',
  d7: 'M3 15H15.7941C17.0124 15 18 16.3431 18 18C18 19.6569 17.0124 21 15.7941 21H3C5.64706 19.8 5.20588 15.6 3 15Z',
  d8: 'M3 3H15.7941C17.0124 3 18 4.34315 18 6C18 7.65685 17.0124 9 15.7941 9H3C5.64706 7.8 5.20588 3.6 3 3Z',
  d9: 'M2 3H8.5H15C15.9319 3 16.3978 3 16.7654 3.15224C17.2554 3.35523 17.6448 3.74458 17.8478 4.23463C18 4.60218 18 5.06812 18 6C18 6.93188 18 7.39782 17.8478 7.76537C17.6448 8.25542 17.2554 8.64477 16.7654 8.84776C16.3978 9 15.9319 9 15 9H2',
  d10: 'M22 9H9C8.06812 9 7.60218 9 7.23463 9.15224C6.74458 9.35523 6.35523 9.74458 6.15224 10.2346C6 10.6022 6 11.0681 6 12C6 12.9319 6 13.3978 6.15224 13.7654C6.35523 14.2554 6.74458 14.6448 7.23463 14.8478C7.60218 15 8.06812 15 9 15H22M21 15C19.8954 15 19 13.6569 19 12C19 10.3431 19.8954 9 21 9',
  d11: 'M9.10779 8.25L21.7778 8.25C22.3147 8.25 22.75 8.66973 22.75 9.1875C22.75 9.70527 22.3147 10.125 21.7778 10.125H20.8056C20.6948 10.125 20.4756 10.1899 20.2396 10.5313C20.0081 10.8661 19.8333 11.3826 19.8333 12C19.8333 12.6174 20.0081 13.1339 20.2396 13.4687C20.4756 13.8101 20.6948 13.875 20.8056 13.875H21.7778C22.3147 13.875 22.75 14.2947 22.75 14.8125C22.75 15.3303 22.3147 15.75 21.7778 15.75L9.10779 15.75C8.68132 15.75 8.31335 15.75 8.0088 15.73C7.68813 15.7089 7.36738 15.6625 7.05051 15.5359C6.33584 15.2505 5.76804 14.7029 5.47202 14.0138C5.34077 13.7082 5.29264 13.3989 5.27076 13.0897C5.24998 12.7961 5.24999 12.4412 5.25 12.03V11.97C5.24999 11.5588 5.24998 11.2039 5.27076 10.9103C5.29264 10.6011 5.34077 10.2918 5.47202 9.9862C5.76804 9.29706 6.33584 8.74954 7.05051 8.46409C7.36738 8.33752 7.68813 8.29111 8.0088 8.27002C8.31335 8.24998 8.68133 8.24999 9.10779 8.25ZM18.2693 13.875C18.0216 13.3124 17.8889 12.668 17.8889 12C17.8889 11.332 18.0216 10.6876 18.2693 10.125H9.13889C8.67259 10.125 8.37155 10.1255 8.14116 10.1407C7.91949 10.1553 7.83507 10.1802 7.79461 10.1964C7.55639 10.2915 7.36713 10.474 7.26845 10.7037C7.25169 10.7427 7.22582 10.8242 7.21069 11.0379C7.19497 11.2601 7.19445 11.5504 7.19445 12C7.19445 12.4496 7.19497 12.7399 7.21069 12.9621C7.22582 13.1758 7.25169 13.2573 7.26845 13.2963C7.36713 13.526 7.55639 13.7085 7.79462 13.8036C7.83507 13.8198 7.91949 13.8447 8.14116 13.8593C8.37155 13.8745 8.67259 13.875 9.13889 13.875H18.2693Z',
  d12: 'M3.66327 4.125C3.70586 4.17545 3.74827 4.23185 3.79018 4.29471C4.05922 4.69827 4.25 5.29899 4.25 6C4.25 6.70101 4.05922 7.30173 3.79018 7.7053C3.74827 7.76815 3.70586 7.82455 3.66327 7.875H2.22222C1.68528 7.875 1.25 8.29473 1.25 8.8125C1.25 9.33027 1.68528 9.75 2.22222 9.75H2.99855L3 9.75L3.00244 9.75L14.8922 9.75H14.8922C15.3187 9.75001 15.6867 9.75002 15.9912 9.72998C16.3119 9.70889 16.6326 9.66248 16.9495 9.53591C17.6642 9.25046 18.232 8.70294 18.528 8.0138C18.6592 7.70824 18.7074 7.39895 18.7292 7.08973C18.75 6.79606 18.75 6.44122 18.75 6.02999V5.97001C18.75 5.55878 18.75 5.20395 18.7292 4.91027C18.7074 4.60105 18.6592 4.29176 18.528 3.9862C18.232 3.29706 17.6642 2.74954 16.9495 2.46409C16.6326 2.33752 16.3119 2.29111 15.9912 2.27002C15.6867 2.24998 15.3187 2.24999 14.8923 2.25H14.8923H2.22222C1.68528 2.25 1.25 2.66973 1.25 3.1875C1.25 3.70527 1.68528 4.125 2.22222 4.125H3.66327Z',
  d13: 'M3.66327 16.125C3.70586 16.1754 3.74827 16.2319 3.79018 16.2947C4.05922 16.6983 4.25 17.299 4.25 18C4.25 18.701 4.05922 19.3017 3.79018 19.7053C3.74827 19.7681 3.70586 19.8246 3.66327 19.875H2.22222C1.68528 19.875 1.25 20.2947 1.25 20.8125C1.25 21.3303 1.68528 21.75 2.22222 21.75H2.99855L3 21.75L3.00244 21.75L14.8922 21.75H14.8922C15.3187 21.75 15.6867 21.75 15.9912 21.73C16.3119 21.7089 16.6326 21.6625 16.9495 21.5359C17.6642 21.2505 18.232 20.7029 18.528 20.0138C18.6592 19.7082 18.7074 19.3989 18.7292 19.0897C18.75 18.7961 18.75 18.4412 18.75 18.03V17.97C18.75 17.5588 18.75 17.2039 18.7292 16.9103C18.7074 16.6011 18.6592 16.2918 18.528 15.9862C18.232 15.2971 17.6642 14.7495 16.9495 14.4641C16.6326 14.3375 16.3119 14.2911 15.9912 14.27C15.6867 14.25 15.3187 14.25 14.8923 14.25H14.8923H2.22222C1.68528 14.25 1.25 14.6697 1.25 15.1875C1.25 15.7053 1.68528 16.125 2.22222 16.125H3.66327Z',
  d14: 'M22 9.00003L9.00002 9C7.34317 9 6.00001 10.3432 6 12C6.00001 13.6569 7.34317 15 9.00001 15H22',
  d15: 'M19.5 9L19.5 15',
  d16: 'M2 15L15 15C16.6568 15 18 16.3432 18 18C18 19.6569 16.6568 21 15 21H2',
  d17: 'M4.5 15L4.5 21',
  d18: 'M2 3.00003L15 3C16.6568 3 18 4.34317 18 6.00002C18 7.65686 16.6568 9.00002 15 9.00003H2',
  d19: 'M4.5 3L4.5 9',
  d20: 'M19.2422 8.25002L9.38237 8.25C7.23821 8.25 5.50001 9.92894 5.5 12C5.50001 14.0711 7.23821 15.75 9.38236 15.75H22V13.875H20.25L20.25 10.125L22 10.125L22 8.25003L19.2578 8.25002C19.2552 8.25001 19.2526 8.25 19.25 8.25C19.2474 8.25 19.2448 8.25001 19.2422 8.25002ZM18.25 10.125L9.38237 10.125C8.3103 10.125 7.44118 10.9645 7.44118 12C7.44118 13.0355 8.31029 13.875 9.38237 13.875H18.25L18.25 10.125Z',
  d21: 'M4.49409 14.25L2 14.25L2 16.125L3.75 16.125L3.75 19.875H2V21.75H14.6176C16.7618 21.75 18.5 20.0711 18.5 18C18.5 15.9289 16.7618 14.25 14.6176 14.25L4.50591 14.25L4.5 14.25L4.49409 14.25Z',
  d22: 'M4.49409 2.25002L2 2.25003L2 4.12502L3.75 4.12502L3.75 7.87501H2V9.75H14.6176C16.7618 9.74999 18.5 8.07105 18.5 6C18.5 3.92894 16.7618 2.25 14.6176 2.25L4.50591 2.25002L4.5 2.25L4.49409 2.25002Z',
} as const;

export const IconBooks01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-stroke-rounded IconBooks01StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBooks01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-duotone-rounded IconBooks01DuotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBooks01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-twotone-rounded IconBooks01TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d5} 
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

export const IconBooks01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-solid-rounded IconBooks01SolidRounded"
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-bulk-rounded IconBooks01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
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

export const IconBooks01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-stroke-sharp IconBooks01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-01-solid-sharp IconBooks01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBooks01: TheIconSelfPack = {
  name: 'Books01',
  StrokeRounded: IconBooks01StrokeRounded,
  DuotoneRounded: IconBooks01DuotoneRounded,
  TwotoneRounded: IconBooks01TwotoneRounded,
  SolidRounded: IconBooks01SolidRounded,
  BulkRounded: IconBooks01BulkRounded,
  StrokeSharp: IconBooks01StrokeSharp,
  SolidSharp: IconBooks01SolidSharp,
};