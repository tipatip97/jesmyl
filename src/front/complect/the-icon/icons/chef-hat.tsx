import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518',
  d2: 'M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5',
  d3: 'M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21',
  d4: 'M18 12V20M6 12V20',
  d5: 'M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518C7.58854 5.24874 6.82332 5 6 5C3.79086 5 2 6.79086 2 9C2 11.2091 3.79086 13 6 13V17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5V13Z',
  d6: 'M12.0003 20.75C9.4009 20.75 7.06048 21.1169 5.31673 21.6986C4.79283 21.8734 4.22644 21.5904 4.05167 21.0665C3.87689 20.5426 4.15991 19.9762 4.68381 19.8014C6.67118 19.1384 9.23185 18.75 12.0003 18.75C14.7687 18.75 17.3294 19.1384 19.3167 19.8014C19.8406 19.9762 20.1237 20.5426 19.9489 21.0665C19.7741 21.5904 19.2077 21.8734 18.6838 21.6986C16.9401 21.1169 14.5996 20.75 12.0003 20.75Z',
  d7: 'M7.377 4.4528C6.94087 4.32086 6.47845 4.24993 6 4.24993C3.37665 4.24993 1.25 6.37658 1.25 8.99993C1.25 11.1904 2.73266 13.0345 4.74915 13.5835C5.00088 13.652 5.12674 13.6863 5.18837 13.767C5.25 13.8476 5.25 13.9662 5.25 14.2034V15.032C5.25 15.3896 5.25 15.5684 5.36291 15.6585C5.47582 15.7486 5.65408 15.708 6.01058 15.6267C7.76977 15.2259 9.82216 14.9999 12.0003 14.9999C14.1782 14.9999 16.2304 15.2258 17.9894 15.6266C18.3459 15.7078 18.5242 15.7484 18.6371 15.6584C18.75 15.5683 18.75 15.3895 18.75 15.0318V14.2034C18.75 13.9662 18.75 13.8476 18.8116 13.767C18.8733 13.6863 18.9991 13.652 19.2508 13.5835C21.2673 13.0345 22.75 11.1904 22.75 8.99993C22.75 6.37658 20.6234 4.24993 18 4.24993C17.5216 4.24993 17.0591 4.32086 16.623 4.4528C16.3704 4.52923 16.244 4.56744 16.1536 4.53733C16.0632 4.50721 15.9851 4.40098 15.8288 4.18851C14.9645 3.01328 13.572 2.24993 12 2.24993C10.428 2.24993 9.0355 3.01328 8.1712 4.18851C8.01494 4.40098 7.93681 4.50721 7.84638 4.53732C7.75596 4.56744 7.62964 4.52922 7.377 4.4528ZM18.75 18.34C18.75 18.1252 18.75 18.0178 18.6888 17.9373C18.6276 17.8568 18.5269 17.8289 18.3256 17.7731C16.5964 17.2937 14.4047 16.9999 12.0003 16.9999C9.59559 16.9999 7.40366 17.2937 5.67441 17.7733C5.47307 17.8291 5.3724 17.857 5.3112 17.9375C5.25 18.018 5.25 18.1254 5.25 18.3401V20.6251C5.25 20.9821 5.25 21.1606 5.36656 21.2507C5.48311 21.3408 5.65584 21.2958 6.00128 21.2057L6.00131 21.2057L6.18914 21.1568C7.82456 20.7306 9.82721 20.4764 12 20.4764C14.1728 20.4764 16.1754 20.7306 17.8109 21.1568L17.9987 21.2057L17.9987 21.2057C18.3441 21.2958 18.5169 21.3408 18.6334 21.2507C18.75 21.1606 18.75 20.9821 18.75 20.6251V18.34Z',
  d8: 'M6 4.25C6.47845 4.25 6.94087 4.32093 7.377 4.45287C7.62964 4.52929 7.75596 4.56751 7.84638 4.53739C7.93681 4.50728 8.01494 4.40104 8.1712 4.18857C9.0355 3.01334 10.428 2.25 12 2.25C13.572 2.25 14.9645 3.01334 15.8288 4.18858C15.9851 4.40105 16.0632 4.50728 16.1536 4.5374C16.244 4.56751 16.3704 4.52929 16.623 4.45287C17.0591 4.32093 17.5216 4.25 18 4.25C20.6234 4.25 22.75 6.37665 22.75 9C22.75 11.1904 21.2673 13.0346 19.2508 13.5836C18.9991 13.6521 18.8733 13.6864 18.8116 13.767C18.75 13.8477 18.75 13.9663 18.75 14.2035V20.6252C18.75 20.9822 18.75 21.1607 18.6334 21.2508C18.5169 21.3408 18.3441 21.2958 17.9987 21.2058L17.8109 21.1568C16.1754 20.7306 14.1728 20.4765 12 20.4765C9.82721 20.4765 7.82456 20.7306 6.18914 21.1568L6.00131 21.2058C5.65586 21.2958 5.48311 21.3408 5.36656 21.2508C5.25 21.1607 5.25 20.9822 5.25 20.6252V14.2035C5.25 13.9663 5.25 13.8477 5.18837 13.767C5.12674 13.6864 5.00088 13.6521 4.74915 13.5836C2.73266 13.0346 1.25 11.1904 1.25 9C1.25 6.37665 3.37665 4.25 6 4.25Z',
  d9: 'M5.25 15.8159C7.16558 15.2977 9.5001 15 12.0003 15C14.5002 15 16.8345 15.2976 18.75 15.8158V17.8974C16.9619 17.345 14.606 17 12.0003 17C9.39428 17 7.03816 17.345 5.25 17.8976V15.8159Z',
  d10: 'M18 14C20.2091 14 22 12.2091 22 10C22 7.79086 20.2091 6 18 6C17.1767 6 16.4115 6.24874 15.7754 6.67518M6 14C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6C6.82332 6 7.58854 6.24874 8.22461 6.67518M15.7754 6.67518C15.2287 5.11714 13.7448 4 12 4C10.2552 4 8.77132 5.11714 8.22461 6.67518M15.7754 6.67518C15.9209 7.08981 16 7.53566 16 8C16 8.3453 15.9562 8.68038 15.874 9M9.46487 8C9.15785 7.46925 8.73238 7.0156 8.22461 6.67518',
  d11: 'M18 16.0002H6',
  d12: 'M21 20H3',
  d13: 'M18 11.5V20M6 11.5V20',
  d14: 'M12 3.25C10.2363 3.25 8.69843 4.21093 7.87912 5.6364C7.30239 5.38775 6.66675 5.25 6 5.25C3.37665 5.25 1.25 7.37665 1.25 10C1.25 12.3682 2.98301 14.3315 5.25 14.6911V15.5H18.75V14.6911C21.017 14.3315 22.75 12.3682 22.75 10C22.75 7.37665 20.6234 5.25 18 5.25C17.3332 5.25 16.6976 5.38776 16.1209 5.6364C15.3016 4.21093 13.7637 3.25 12 3.25Z',
  d15: 'M18.75 17.5H5.25V20.75L18.75 20.75V17.5Z',
  d16: 'M21 20.75H3V18.75H21V20.75Z',
} as const;

export const IconChefHatStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-stroke-rounded IconChefHatStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChefHatDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-duotone-rounded IconChefHatDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconChefHatTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-twotone-rounded IconChefHatTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconChefHatSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-solid-rounded IconChefHatSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChefHatBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-bulk-rounded IconChefHatBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.3" 
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

export const IconChefHatStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-stroke-sharp IconChefHatStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChefHatSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-hat-solid-sharp IconChefHatSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChefHat: TheIconSelfPack = {
  name: 'ChefHat',
  StrokeRounded: IconChefHatStrokeRounded,
  DuotoneRounded: IconChefHatDuotoneRounded,
  TwotoneRounded: IconChefHatTwotoneRounded,
  SolidRounded: IconChefHatSolidRounded,
  BulkRounded: IconChefHatBulkRounded,
  StrokeSharp: IconChefHatStrokeSharp,
  SolidSharp: IconChefHatSolidSharp,
};