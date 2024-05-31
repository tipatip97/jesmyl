import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 17L19 11C19 8.17157 19 6.75736 18.1213 5.87868C17.2426 5 15.8284 5 13 5H10M10 5C10 4.29977 11.9943 2.99153 12.5 2.5M10 5C10 5.70023 11.9943 7.00847 12.5 7.5',
  d2: 'M5 7.5L5 13.5C5 16.3284 5 17.7426 5.87868 18.6213C6.75736 19.5 8.17157 19.5 11 19.5H14M14 19.5C14 20.2002 12.0057 21.5085 11.5 22M14 19.5C14 18.7998 12.0057 17.4915 11.5 17',
  d3: 'M5 7.62805V13.7818C5 16.6827 5 18.1331 5.87868 19.0343C6.75736 19.9355 8.17157 19.9355 11 19.9355H14M14 19.9355C14 20.6537 12.0057 21.9955 11.5 22.4996M14 19.9355C14 19.2174 12.0057 17.8756 11.5 17.3715',
  d4: 'M5 7.11531C6.10457 7.11531 7 6.19693 7 5.06406C7 3.93119 6.10457 3.01282 5 3.01282C3.89543 3.01282 3 3.93119 3 5.06406C3 6.19693 3.89543 7.11531 5 7.11531Z',
  d5: 'M19 17.3715V11.2178C19 8.31689 19 6.86644 18.1213 5.96525C17.2426 5.06406 15.8284 5.06406 13 5.06406H10M10 5.06406C10 4.34588 11.9943 3.00412 12.5 2.5M10 5.06406C10 5.78223 11.9943 7.12399 12.5 7.62811',
  d6: 'M19 21.4741C20.1046 21.4741 21 20.5557 21 19.4228C21 18.29 20.1046 17.3716 19 17.3716C17.8954 17.3716 17 18.29 17 19.4228C17 20.5557 17.8954 21.4741 19 21.4741Z',
  d7: 'M16.25 19C16.25 17.4812 17.4812 16.25 19 16.25C20.5188 16.25 21.75 17.4812 21.75 19C21.75 20.5188 20.5188 21.75 19 21.75C17.4812 21.75 16.25 20.5188 16.25 19Z',
  d8: 'M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25C6.51878 2.25 7.75 3.48122 7.75 5C7.75 6.51878 6.51878 7.75 5 7.75C3.48122 7.75 2.25 6.51878 2.25 5Z',
  d9: 'M13.5 3.4116C13.5001 3.23596 13.5003 3.02031 13.4782 2.84387L13.4778 2.84053C13.462 2.71408 13.3902 2.13804 12.8246 1.86368C12.2578 1.58872 11.7576 1.89065 11.6494 1.95597L11.181 2.29511C10.8051 2.58975 10.2907 2.99545 9.89966 3.37588C9.70455 3.56571 9.50331 3.78297 9.34447 4.01388C9.20326 4.21914 9 4.56933 9 5C9 5.43067 9.20326 5.78086 9.34447 5.98612C9.50332 6.21703 9.70455 6.43429 9.89966 6.62412C10.2907 7.00455 10.8051 7.41025 11.1809 7.70488L11.6494 8.04403C11.7576 8.10935 12.2578 8.41128 12.8246 8.13632C13.3902 7.86196 13.462 7.28592 13.4778 7.15947L13.4782 7.15613C13.5003 6.97969 13.5001 6.76403 13.5 6.5884L13.5 3.4116Z',
  d10: 'M13.5 6.00079C14.6679 6.00251 15.5139 6.01482 16.1581 6.10144C16.8642 6.19636 17.1912 6.36373 17.4138 6.5863C17.6363 6.80888 17.8037 7.1359 17.8986 7.84195C17.9974 8.57677 17.9996 9.55803 17.9996 11.0005V17.0005C17.9996 17.5528 18.4473 18.0005 18.9996 18.0005C19.5518 18.0005 19.9996 17.5528 19.9996 17.0005L19.9996 10.9299C19.9996 9.57582 19.9996 8.45921 19.8808 7.57546C19.7561 6.64763 19.4841 5.8282 18.828 5.17209C18.1719 4.51598 17.3525 4.24401 16.4246 4.11927C15.639 4.01364 14.657 4.00194 13.5 4.00067L13.5 6.00079Z',
  d11: 'M10.5 20.5884C10.4999 20.764 10.4997 20.9797 10.5218 21.1561L10.5222 21.1595C10.538 21.2859 10.6098 21.862 11.1754 22.1363C11.7423 22.4113 12.2424 22.1093 12.3506 22.044L12.8191 21.7049C13.1949 21.4103 13.7094 21.0046 14.1004 20.6241C14.2955 20.4343 14.4967 20.217 14.6556 19.9861C14.7968 19.7809 15 19.4307 15 19C15 18.5693 14.7968 18.2191 14.6556 18.0139C14.4967 17.783 14.2955 17.5657 14.1004 17.3759C13.7094 16.9954 13.1949 16.5898 12.8191 16.2951L12.3506 15.956C12.2424 15.8907 11.7422 15.5887 11.1754 15.8637C10.6098 16.138 10.538 16.7141 10.5222 16.8405L10.5218 16.8439C10.4997 17.0203 10.4999 17.236 10.5 17.4116L10.5 20.5884Z',
  d12: 'M10.4996 17.9997C9.33165 17.998 8.4857 17.9857 7.84144 17.8991C7.13538 17.8042 6.80836 17.6368 6.58579 17.4142C6.36322 17.1916 6.19585 16.8646 6.10092 16.1586C6.00213 15.4237 6 14.4425 6 13L6 7C6 6.44772 5.55229 6 5 6C4.44772 6 4 6.44772 4 7L4 13.0706C3.99997 14.4247 3.99994 15.5413 4.11876 16.4251C4.2435 17.3529 4.51547 18.1723 5.17158 18.8284C5.82768 19.4845 6.64711 19.7565 7.57494 19.8812C8.36061 19.9869 9.34256 19.9986 10.4996 19.9999V17.9997Z',
  d13: 'M5 7.25V18.75H13.2981M11.5 21.25L14 18.75L11.5 16.25',
  d14: 'M3 5.25C3 4.14543 3.89543 3.25 5 3.25C6.10457 3.25 7 4.14543 7 5.25C7 6.35457 6.10457 7.25 5 7.25C3.89543 7.25 3 6.35457 3 5.25Z',
  d15: 'M19 16.75V5.25H10.6467M12.5 2.75L10 5.25L12.5 7.75',
  d16: 'M21 18.75C21 19.8546 20.1046 20.75 19 20.75C17.8954 20.75 17 19.8546 17 18.75C17 17.6454 17.8954 16.75 19 16.75C20.1046 16.75 21 17.6454 21 18.75Z',
  d17: 'M11.5858 17.7499L10.7929 16.957L12.2071 15.5428L14.7071 18.0428C14.8946 18.2304 15 18.4847 15 18.7499C15 19.0151 14.8946 19.2695 14.7071 19.457L12.2071 21.957L10.7929 20.5428L11.5858 19.7499H5C4.44771 19.7499 4 19.3022 4 18.7499V7.24992H6V17.7499H11.5858Z',
  d18: 'M7.75 5.25C7.75 6.76878 6.51878 8 5 8C3.48122 8 2.25 6.76878 2.25 5.25C2.25 3.73122 3.48122 2.5 5 2.5C6.51878 2.5 7.75 3.73122 7.75 5.25Z',
  d19: 'M12.4142 6.24995L13.2071 7.04285L11.7929 8.45706L9.29289 5.95706C9.10536 5.76952 9 5.51517 9 5.24995C9 4.98474 9.10536 4.73038 9.29289 4.54285L11.7929 2.04285L13.2071 3.45706L12.4142 4.24995H19C19.5523 4.24995 20 4.69767 20 5.24995V16.75H18V6.24995H12.4142Z',
  d20: 'M16.25 18.75C16.25 17.2312 17.4812 16 19 16C20.5188 16 21.75 17.2312 21.75 18.75C21.75 20.2688 20.5188 21.5 19 21.5C17.4812 21.5 16.25 20.2688 16.25 18.75Z',
} as const;

export const IconGitCompareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-stroke-rounded IconGitCompareStrokeRounded"
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
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGitCompareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-duotone-rounded IconGitCompareDuotoneRounded"
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="19" 
        cy="19" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="5" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGitCompareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-twotone-rounded IconGitCompareTwotoneRounded"
    >
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitCompareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-solid-rounded IconGitCompareSolidRounded"
    >
      <path 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconGitCompareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-bulk-rounded IconGitCompareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitCompareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-stroke-sharp IconGitCompareStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitCompareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-compare-solid-sharp IconGitCompareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfGitCompare: TheIconSelfPack = {
  name: 'GitCompare',
  StrokeRounded: IconGitCompareStrokeRounded,
  DuotoneRounded: IconGitCompareDuotoneRounded,
  TwotoneRounded: IconGitCompareTwotoneRounded,
  SolidRounded: IconGitCompareSolidRounded,
  BulkRounded: IconGitCompareBulkRounded,
  StrokeSharp: IconGitCompareStrokeSharp,
  SolidSharp: IconGitCompareSolidSharp,
};