import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 14.9998C8.83843 15 8.67184 15 8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5C15 8.67184 15 8.83843 14.9998 9',
  d2: 'M9 14.9998C9.00267 12.5132 9.04641 11.2167 9.76342 10.3176C9.92682 10.1127 10.1127 9.92682 10.3176 9.76342C11.2167 9.04641 12.5132 9.00267 14.9998 9',
  d3: 'M22 14.5V16.5M16.5 22H14.5M22 12C21.9345 11.1196 21.7782 10.5249 21.4047 10.0579C21.2673 9.88599 21.1109 9.73003 20.9385 9.59294C20.4718 9.22181 19.8778 9.06568 19 9H18.5M22 19C21.9343 19.8778 21.7782 20.4718 21.4071 20.9385C21.27 21.1109 21.114 21.2673 20.9421 21.4047C20.4751 21.7782 19.8804 21.9345 19 22M12 22C11.1222 21.9343 10.5282 21.7782 10.0615 21.4071C9.88914 21.27 9.73274 21.114 9.59527 20.9421C9.22182 20.4751 9.06547 19.8804 9 19L9 18.5',
  d4: 'M2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.6719 15 8.83855 15 9.00017 14.9998C9.00284 12.5133 9.0466 11.2169 9.76359 10.3178C9.92699 10.1129 10.1129 9.92699 10.3178 9.76359C11.2169 9.0466 12.5133 9.00284 14.9998 9.00017C15 8.83855 15 8.6719 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779Z',
  d5: 'M17.25 8.75C17.25 8.19772 17.6977 7.75 18.25 7.75H18.7874L18.8246 7.75279C19.7668 7.82328 20.6068 8.00035 21.3109 8.56026C21.5419 8.74393 21.7514 8.95292 21.9357 9.18334C22.4998 9.88868 22.677 10.7312 22.7472 11.6758C22.7882 12.2266 22.3749 12.7063 21.8242 12.7472C21.2734 12.7882 20.7937 12.3749 20.7528 11.8242C20.6921 11.0081 20.5566 10.6611 20.3737 10.4324C20.2831 10.3191 20.1799 10.2161 20.066 10.1256C19.8402 9.94599 19.4993 9.81214 18.7117 9.75H18.25C17.6977 9.75 17.25 9.30228 17.25 8.75ZM21.75 13.25C22.3023 13.25 22.75 13.6977 22.75 14.25V16.25C22.75 16.8023 22.3023 17.25 21.75 17.25C21.1977 17.25 20.75 16.8023 20.75 16.25V14.25C20.75 13.6977 21.1977 13.25 21.75 13.25ZM8.75 17.25C9.30228 17.25 9.75 17.6977 9.75 18.25L9.75 18.7119C9.81197 19.5022 9.94614 19.8423 10.1263 20.0676C10.2169 20.1809 10.3201 20.2839 10.434 20.3744C10.6633 20.5567 11.0111 20.6919 11.8246 20.7528C12.3754 20.794 12.7884 21.2739 12.7472 21.8246C12.706 22.3754 12.2261 22.7884 11.6754 22.7472C10.7332 22.6767 9.89316 22.4996 9.1891 21.9397C8.95815 21.7561 8.74856 21.5471 8.56429 21.3167C8.00023 20.6113 7.823 19.7688 7.75275 18.8242L7.75 18.7871L7.75 18.25C7.75 17.6977 8.19771 17.25 8.75 17.25ZM21.8246 17.7528C22.3754 17.794 22.7884 18.2739 22.7472 18.8246C22.6767 19.7668 22.4996 20.6068 21.9397 21.3109C21.7561 21.5419 21.5471 21.7514 21.3167 21.9357C20.6113 22.4998 19.7688 22.677 18.8242 22.7472C18.2734 22.7882 17.7937 22.3749 17.7528 21.8242C17.7118 21.2734 18.1251 20.7937 18.6758 20.7528C19.4919 20.6921 19.8389 20.5566 20.0676 20.3737C20.1809 20.2831 20.2839 20.1799 20.3744 20.066C20.5567 19.8367 20.6919 19.4889 20.7528 18.6754C20.794 18.1246 21.2739 17.7116 21.8246 17.7528ZM13.25 21.75C13.25 21.1977 13.6977 20.75 14.25 20.75H16.25C16.8023 20.75 17.25 21.1977 17.25 21.75C17.25 22.3023 16.8023 22.75 16.25 22.75H14.25C13.6977 22.75 13.25 22.3023 13.25 21.75Z',
  d6: 'M8.5473 1.25C9.91541 1.24999 11.0075 1.24998 11.8745 1.35043C12.7675 1.45389 13.5167 1.67232 14.1498 2.17722C14.3986 2.37563 14.6244 2.60136 14.8228 2.85017C15.3277 3.48329 15.5461 4.23254 15.6496 5.12547C15.75 5.9925 15.75 7.0846 15.75 8.45271L15.7496 9.00081C15.7494 9.23317 15.7493 9.34935 15.7114 9.44104C15.6606 9.56353 15.5633 9.66086 15.4409 9.71163C15.3492 9.74963 15.233 9.74975 15.0006 9.75C13.7459 9.75135 12.8523 9.76419 12.1638 9.85721C11.4913 9.94805 11.0901 10.1069 10.7852 10.35C10.6242 10.4784 10.4782 10.6245 10.3498 10.7855C10.1067 11.0903 9.94788 11.4914 9.85709 12.1639C9.76413 12.8524 9.75135 13.7458 9.75 15.0006C9.74975 15.233 9.74963 15.3492 9.71163 15.4409C9.66086 15.5633 9.56353 15.6606 9.44104 15.7114C9.34935 15.7493 9.23317 15.7494 9.00081 15.7496L8.45271 15.75C7.0846 15.75 5.9925 15.75 5.12547 15.6496C4.23254 15.5461 3.48329 15.3277 2.85017 14.8228C2.60136 14.6244 2.37563 14.3986 2.17722 14.1498C1.67232 13.5167 1.45389 12.7675 1.35043 11.8745C1.24998 11.0075 1.24999 9.91539 1.25 8.54729V8.4527C1.24999 7.0846 1.24998 5.99249 1.35043 5.12547C1.45389 4.23254 1.67232 3.48329 2.17722 2.85017C2.37563 2.60136 2.60136 2.37563 2.85017 2.17722C3.48329 1.67232 4.23254 1.45389 5.12547 1.35043C5.99249 1.24998 7.08461 1.24999 8.45271 1.25H8.5473Z',
  d7: 'M21.9632 14.0151V17.0189M16.9725 22.0253H13.978M21.9632 12.0126V9.00879H17.9706M21.9632 19.0215V22.0253H18.9688M11.9817 22.0253H8.9873V18.0202',
  d8: 'M14.9033 2.03534L14.9627 8.92854L9.0116 8.98007L9.0638 15.0459L2.08245 15.1064C2.07694 15.1064 2.07243 15.102 2.07239 15.0965L1.95996 2.03152C1.95991 2.02599 1.9644 2.02148 1.96995 2.02148L14.8934 2.02548C14.8989 2.02548 14.9033 2.02988 14.9033 2.03534Z',
  d9: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H14.9998C15.414 1.25 15.7498 1.58579 15.7498 2V9.75L9.75003 9.75L9.74999 15.7498H2C1.58579 15.7498 1.25 15.414 1.25 14.9998V2Z',
  d10: 'M18 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9V12H21.25V9.75H18V8.25ZM22.75 14V17H21.25V14H22.75ZM9.75 21.25V18H8.25V22C8.25 22.4142 8.58579 22.75 9 22.75H12V21.25H9.75ZM21.25 21.25V19H22.75V22C22.75 22.4142 22.4142 22.75 22 22.75H19V21.25H21.25ZM17 22.75L14 22.75V21.25L17 21.25V22.75Z',
} as const;

export const IconPathfinderMinusFrontStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-stroke-rounded IconPathfinderMinusFrontStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-duotone-rounded IconPathfinderMinusFrontDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-twotone-rounded IconPathfinderMinusFrontTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-solid-rounded IconPathfinderMinusFrontSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-bulk-rounded IconPathfinderMinusFrontBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-stroke-sharp IconPathfinderMinusFrontStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusFrontSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-front-solid-sharp IconPathfinderMinusFrontSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPathfinderMinusFront: TheIconSelfPack = {
  name: 'PathfinderMinusFront',
  StrokeRounded: IconPathfinderMinusFrontStrokeRounded,
  DuotoneRounded: IconPathfinderMinusFrontDuotoneRounded,
  TwotoneRounded: IconPathfinderMinusFrontTwotoneRounded,
  SolidRounded: IconPathfinderMinusFrontSolidRounded,
  BulkRounded: IconPathfinderMinusFrontBulkRounded,
  StrokeSharp: IconPathfinderMinusFrontStrokeSharp,
  SolidSharp: IconPathfinderMinusFrontSolidSharp,
};