import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 3C18.3389 3 19.5083 3 20.3621 3.53647C20.8073 3.81621 21.1838 4.19267 21.4635 4.63789C22 5.49167 22 6.66111 22 9C22 11.3389 22 12.5083 21.4635 13.3621C21.1838 13.8073 20.8073 14.1838 20.3621 14.4635C19.5083 15 18.3389 15 16 15L8 15C5.66111 15 4.49167 15 3.63789 14.4635C3.19267 14.1838 2.81621 13.8073 2.53647 13.3621C2 12.5083 2 11.3389 2 9C2 6.66111 2 5.49167 2.53647 4.63789C2.81621 4.19267 3.19267 3.81621 3.63789 3.53647C4.49167 3 5.66111 3 8 3L16 3Z',
  d2: 'M7 12H17',
  d3: 'M18 7H18.009',
  d4: 'M6.8 18C6.8 18 7.6 19.875 6 21',
  d5: 'M17.2 18C17.2 18 16.4 19.875 18 21',
  d6: 'M12 18V21',
  d7: 'M16 3C18.3389 3 19.5083 3 20.3621 3.53647C20.8073 3.81621 21.1838 4.19267 21.4635 4.63789C22 5.49167 22 6.66111 22 9C22 11.3389 22 12.5083 21.4635 13.3621C21.1838 13.8073 20.8073 14.1838 20.3621 14.4635C19.5083 15 18.3389 15 16 15H8C5.66111 15 4.49167 15 3.63789 14.4635C3.19267 14.1838 2.81621 13.8073 2.53646 13.3621C2 12.5083 2 11.3389 2 9C2 6.66111 2 5.49167 2.53646 4.63789C2.81621 4.19267 3.19267 3.81621 3.63789 3.53647C4.49167 3 5.66111 3 8 3L16 3Z',
  d8: 'M16.0001 18.8282C16.0001 18.4176 16.0669 18.0617 16.1319 17.8103C16.1718 17.6371 16.2472 17.437 16.2799 17.3585C16.4967 16.8506 17.0845 16.6136 17.5925 16.8303C18.0978 17.0459 18.3342 17.628 18.1234 18.1341C18.0884 18.2694 18.0001 18.503 18.0001 18.8282C18.0001 19.2021 18.1076 19.6033 18.5753 19.9321C19.027 20.2498 19.1358 20.8735 18.8181 21.3253C18.5005 21.7771 17.8767 21.8858 17.4249 21.5681C16.2926 20.772 16.0001 19.6731 16.0001 18.8282Z',
  d9: 'M12.0001 16.7501C12.5524 16.7501 13.0001 17.1978 13.0001 17.7501V20.7501C13.0001 21.3024 12.5524 21.7501 12.0001 21.7501C11.4478 21.7501 11.0001 21.3024 11.0001 20.7501V17.7501C11.0001 17.1978 11.4478 16.7501 12.0001 16.7501Z',
  d10: 'M8.00008 18.8282C8.00008 18.4176 7.93324 18.0617 7.86824 17.8103C7.82833 17.6371 7.75294 17.437 7.72023 17.3585C7.50349 16.8506 6.91562 16.6136 6.40765 16.8303C5.90238 17.0459 5.66597 17.628 5.87674 18.1341C5.91174 18.2694 6.00008 18.503 6.00008 18.8282C6.00008 19.2021 5.89255 19.6033 5.42491 19.9321C4.97312 20.2498 4.86439 20.8735 5.18205 21.3253C5.49972 21.7771 6.12348 21.8858 6.57526 21.5681C7.70761 20.772 8.00008 19.6731 8.00008 18.8282Z',
  d11: 'M22.6794 11.8104C22.75 11.0827 22.75 10.1363 22.75 9.00004C22.75 7.86376 22.75 6.91734 22.6794 6.18963C22.6069 5.44204 22.4544 4.80522 22.0986 4.23886C21.7589 3.69825 21.3018 3.24112 20.7611 2.90142C20.1948 2.54556 19.558 2.39306 18.8104 2.32056C18.0826 2.24998 17.1754 2.24999 16.039 2.25H16.039H7.96092H7.96091C6.8246 2.24999 5.91735 2.24999 5.18963 2.32056C4.44204 2.39307 3.80522 2.54556 3.23886 2.90142C2.69825 3.24112 2.24111 3.69825 1.90142 4.23887C1.54556 4.80523 1.39306 5.44204 1.32056 6.18963C1.25079 6.90901 1.25 7.88018 1.25 9.00001C1.25 10.1198 1.25079 11.091 1.32056 11.8104C1.39306 12.558 1.54556 13.1948 1.90142 13.7612C2.24111 14.3018 2.69825 14.7589 3.23886 15.0986C3.80522 15.4545 4.44204 15.607 5.18963 15.6795C5.91737 15.7501 6.82463 15.75 7.96096 15.75L16.039 15.75C17.1754 15.75 18.0826 15.7501 18.8104 15.6795C19.558 15.607 20.1948 15.4545 20.7611 15.0986C21.3018 14.7589 21.7589 14.3018 22.0986 13.7612C22.4544 13.1948 22.6069 12.558 22.6794 11.8104ZM17.9955 5.5C17.4457 5.5 17 5.94772 17 6.5C17 7.05228 17.4457 7.5 17.9955 7.5H18.0045C18.5543 7.5 19 7.05228 19 6.5C19 5.94772 18.5543 5.5 18.0045 5.5H17.9955ZM7 10.5C6.44772 10.5 6 10.9477 6 11.5C6 12.0523 6.44772 12.5 7 12.5H17C17.5523 12.5 18 12.0523 18 11.5C18 10.9477 17.5523 10.5 17 10.5H7Z',
  d12: 'M22.75 9.00004C22.75 10.1363 22.75 11.0827 22.6794 11.8104C22.6069 12.558 22.4544 13.1948 22.0986 13.7612C21.7589 14.3018 21.3018 14.7589 20.7611 15.0986C20.1948 15.4545 19.558 15.607 18.8104 15.6795C18.0826 15.7501 17.1754 15.75 16.039 15.75L7.96096 15.75C6.82463 15.75 5.91737 15.7501 5.18963 15.6795C4.44204 15.607 3.80522 15.4545 3.23886 15.0986C2.69825 14.7589 2.24111 14.3018 1.90142 13.7612C1.54556 13.1948 1.39306 12.558 1.32056 11.8104C1.25079 11.091 1.25 10.1198 1.25 9.00001C1.25 7.88018 1.25079 6.90901 1.32056 6.18963C1.39306 5.44204 1.54556 4.80523 1.90142 4.23887C2.24111 3.69825 2.69825 3.24112 3.23886 2.90142C3.80522 2.54556 4.44204 2.39307 5.18963 2.32056C5.91735 2.24999 6.8246 2.24999 7.96091 2.25H7.96092H16.039H16.039C17.1754 2.24999 18.0826 2.24998 18.8104 2.32056C19.558 2.39306 20.1948 2.54556 20.7611 2.90142C21.3018 3.24112 21.7589 3.69825 22.0986 4.23886C22.4544 4.80522 22.6069 5.44204 22.6794 6.18963C22.75 6.91734 22.75 7.86376 22.75 9.00004Z',
  d13: 'M17 6.5C17 5.94772 17.4457 5.5 17.9955 5.5H18.0045C18.5543 5.5 19 5.94772 19 6.5C19 7.05228 18.5543 7.5 18.0045 7.5H17.9955C17.4457 7.5 17 7.05228 17 6.5ZM6 11.5C6 10.9477 6.44772 10.5 7 10.5H17C17.5523 10.5 18 10.9477 18 11.5C18 12.0523 17.5523 12.5 17 12.5H7C6.44772 12.5 6 12.0523 6 11.5Z',
  d14: 'M22 3H2V15H22V3Z',
  d15: 'M6 12H18',
  d16: 'M12 17V21',
  d17: 'M17 17V21',
  d18: 'M7 17V21',
  d19: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V15.5C22.75 15.9142 22.4142 16.25 22 16.25H2C1.58579 16.25 1.25 15.9142 1.25 15.5V3.5ZM18 13.25H6V11.75H18V13.25ZM19.009 6.5H17V8.5H19.009V6.5Z',
  d20: 'M6 17.25V21.25H8V17.25H6Z',
  d21: 'M11 21.25V17.25H13V21.25H11Z',
  d22: 'M16 21.25V17.25H18V21.25H16Z',
} as const;

export const IconSmartAcStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-stroke-rounded IconSmartAcStrokeRounded"
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

export const IconSmartAcDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-duotone-rounded IconSmartAcDuotoneRounded"
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

export const IconSmartAcTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-twotone-rounded IconSmartAcTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartAcSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-solid-rounded IconSmartAcSolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartAcBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-bulk-rounded IconSmartAcBulkRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
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

export const IconSmartAcStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-stroke-sharp IconSmartAcStrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartAcSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-ac-solid-sharp IconSmartAcSolidSharp"
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

export const iconPackOfSmartAc: TheIconSelfPack = {
  name: 'SmartAc',
  StrokeRounded: IconSmartAcStrokeRounded,
  DuotoneRounded: IconSmartAcDuotoneRounded,
  TwotoneRounded: IconSmartAcTwotoneRounded,
  SolidRounded: IconSmartAcSolidRounded,
  BulkRounded: IconSmartAcBulkRounded,
  StrokeSharp: IconSmartAcStrokeSharp,
  SolidSharp: IconSmartAcSolidSharp,
};