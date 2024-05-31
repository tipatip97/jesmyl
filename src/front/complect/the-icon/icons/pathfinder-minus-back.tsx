import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 9.00017C15.1616 9 15.3282 9 15.5 9C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5C9 15.3282 9 15.1616 9.00017 15',
  d2: 'M15 9.00017C14.9973 11.4868 14.9536 12.7833 14.2366 13.6824C14.0732 13.8873 13.8873 14.0732 13.6824 14.2366C12.7833 14.9536 11.4868 14.9973 9.00017 15',
  d3: 'M2 9.5L2 7.5M7.5 2L9.5 2M2 12C2.06547 12.8804 2.22182 13.4751 2.59527 13.9421C2.73274 14.114 2.88914 14.27 3.06153 14.4071C3.52821 14.7782 4.12216 14.9343 5 15L5.5 15M2 5C2.06568 4.12216 2.22181 3.52821 2.59294 3.06153C2.73003 2.88914 2.88599 2.73274 3.0579 2.59527C3.52488 2.22182 4.11965 2.06546 5 2M12 2C12.8778 2.06568 13.4718 2.22181 13.9385 2.59294C14.1109 2.73003 14.2673 2.88599 14.4047 3.0579C14.7782 3.52488 14.9345 4.11965 15 5L15 5.5',
  d4: 'M9.00017 14.9998C9 15.1615 9 15.3281 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.3281 9 15.1615 9 14.9998 9.00017C14.9972 11.4867 14.9534 12.7831 14.2364 13.6822C14.073 13.8871 13.8871 14.073 13.6822 14.2364C12.7831 14.9534 11.4867 14.9972 9.00017 14.9998Z',
  d5: 'M6.75 15.25C6.75 15.8023 6.30229 16.25 5.75 16.25H5.21264L5.17539 16.2472C4.23318 16.1767 3.39316 15.9996 2.6891 15.4397C2.45815 15.2561 2.24856 15.0471 2.06429 14.8167C1.50023 14.1113 1.323 13.2688 1.25275 12.3242C1.2118 11.7734 1.62508 11.2937 2.17584 11.2528C2.72661 11.2118 3.20629 11.6251 3.24725 12.1758C3.30793 12.9919 3.44342 13.3389 3.62625 13.5676C3.71693 13.6809 3.82014 13.7839 3.93395 13.8744C4.15982 14.054 4.50074 14.1879 5.28834 14.25H5.75C6.30229 14.25 6.75 14.6977 6.75 15.25ZM2.25 10.75C1.69771 10.75 1.25 10.3023 1.25 9.75V7.75C1.25 7.19771 1.69771 6.75 2.25 6.75C2.80229 6.75 3.25 7.19771 3.25 7.75V9.75C3.25 10.3023 2.80229 10.75 2.25 10.75ZM15.25 6.75C14.6977 6.75 14.25 6.30229 14.25 5.75L14.25 5.2881C14.188 4.4978 14.0539 4.15768 13.8737 3.93245C13.7831 3.81906 13.6799 3.71613 13.566 3.62562C13.3367 3.44326 12.9889 3.30808 12.1754 3.24721C11.6246 3.20601 11.2116 2.72613 11.2528 2.17539C11.294 1.62464 11.7739 1.21158 12.3246 1.25279C13.2668 1.32328 14.1068 1.50035 14.8109 2.06026C15.0419 2.24393 15.2514 2.45292 15.4357 2.68334C15.9998 3.38868 16.177 4.23121 16.2472 5.17584L16.25 5.21287L16.25 5.75C16.25 6.30228 15.8023 6.75 15.25 6.75ZM2.17539 6.24721C1.62464 6.20601 1.21158 5.72613 1.25279 5.17539C1.32328 4.23318 1.50035 3.39316 2.06026 2.6891C2.24393 2.45815 2.45292 2.24856 2.68334 2.06429C3.38868 1.50023 4.23121 1.323 5.17584 1.25275C5.72661 1.2118 6.20629 1.62508 6.24725 2.17584C6.2882 2.72661 5.87492 3.20629 5.32416 3.24725C4.50808 3.30793 4.16108 3.44342 3.93245 3.62625C3.81906 3.71693 3.71613 3.82014 3.62562 3.93395C3.44326 4.16326 3.30808 4.51115 3.24721 5.32461C3.20601 5.87536 2.72613 6.28842 2.17539 6.24721ZM10.75 2.25C10.75 2.80229 10.3023 3.25 9.75 3.25H7.75C7.19771 3.25 6.75 2.80229 6.75 2.25C6.75 1.69771 7.19771 1.25 7.75 1.25H9.75C10.3023 1.25 10.75 1.69771 10.75 2.25Z',
  d6: 'M15.4527 22.75C14.0846 22.75 12.9925 22.75 12.1255 22.6496C11.2325 22.5461 10.4833 22.3277 9.85017 21.8228C9.60137 21.6244 9.37563 21.3986 9.17721 21.1498C8.67232 20.5167 8.45389 19.7675 8.35043 18.8745C8.24998 18.0075 8.24999 16.9154 8.25 15.5473L8.25041 14.9992C8.25059 14.7668 8.25068 14.6507 8.28864 14.559C8.33937 14.4365 8.43667 14.3391 8.55915 14.2884C8.65082 14.2504 8.767 14.2502 8.99937 14.25C10.2541 14.2487 11.1477 14.2358 11.8362 14.1428C12.5087 14.0519 12.9099 13.8931 13.2148 13.65C13.3758 13.5216 13.5218 13.3755 13.6502 13.2145C13.8933 12.9097 14.0521 12.5086 14.1429 11.8361C14.2359 11.1476 14.2487 10.2542 14.25 8.99937C14.2502 8.767 14.2504 8.65082 14.2884 8.55915C14.3391 8.43667 14.4365 8.33937 14.559 8.28864C14.6507 8.25068 14.7668 8.25059 14.9992 8.25041L15.5473 8.25C16.9154 8.24999 18.0075 8.24998 18.8745 8.35043C19.7675 8.45389 20.5167 8.67232 21.1498 9.17721C21.3986 9.37563 21.6244 9.60136 21.8228 9.85017C22.3277 10.4833 22.5461 11.2325 22.6496 12.1255C22.75 12.9925 22.75 14.0846 22.75 15.4527V15.5473C22.75 16.9154 22.75 18.0075 22.6496 18.8745C22.5461 19.7675 22.3277 20.5167 21.8228 21.1498C21.6244 21.3986 21.3986 21.6244 21.1498 21.8228C20.5167 22.3277 19.7675 22.5461 18.8745 22.6496C18.0075 22.75 16.9154 22.75 15.5473 22.75H15.4527Z',
  d7: 'M1.99805 12V15H5.97443M1.99805 5V2H4.98032M11.9389 2H14.9213V6M1.99805 7V10M9.9508 2H6.96852',
  d8: 'M21.8709 9.03418H14.9861V14.9965H8.92773V21.9911C8.92773 21.9966 8.93219 22.0011 8.93768 22.0011H21.9866C21.9921 22.0011 21.9966 21.9965 21.9965 21.991L21.8808 9.04409C21.8807 9.0386 21.8763 9.03418 21.8709 9.03418Z',
  d9: 'M21.9979 8.25C22.4121 8.25 22.7479 8.58579 22.7479 9L22.7479 21.9998C22.7479 22.1987 22.6689 22.3895 22.5282 22.5302C22.3876 22.6708 22.1968 22.7498 21.9979 22.7498L8.99805 22.7498C8.58383 22.7498 8.24805 22.414 8.24805 21.9998V14.2498L14.2478 14.2498L14.2479 8.25H21.9979Z',
  d10: 'M6.99807 1.25L9.99807 1.25V2.75L6.99807 2.75L6.99807 1.25ZM1.24805 2C1.24805 1.58579 1.58383 1.25 1.99805 1.25L4.99805 1.25V2.75L2.74805 2.75L2.74805 5H1.24805L1.24805 2ZM14.2481 2.75L11.998 2.75V1.25L14.9981 1.25C15.4123 1.25 15.7481 1.58579 15.7481 2V6H14.2481V2.75ZM1.24805 10L1.24805 7H2.74805L2.74805 10H1.24805ZM1.24805 15L1.24805 12H2.74805L2.74805 14.25H5.99807V15.75H1.99805C1.79913 15.75 1.60837 15.671 1.46772 15.5303C1.32706 15.3897 1.24805 15.1989 1.24805 15Z',
} as const;

export const IconPathfinderMinusBackStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-stroke-rounded IconPathfinderMinusBackStrokeRounded"
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

export const IconPathfinderMinusBackDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-duotone-rounded IconPathfinderMinusBackDuotoneRounded"
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

export const IconPathfinderMinusBackTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-twotone-rounded IconPathfinderMinusBackTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderMinusBackSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-solid-rounded IconPathfinderMinusBackSolidRounded"
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

export const IconPathfinderMinusBackBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-bulk-rounded IconPathfinderMinusBackBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPathfinderMinusBackStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-stroke-sharp IconPathfinderMinusBackStrokeSharp"
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

export const IconPathfinderMinusBackSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-minus-back-solid-sharp IconPathfinderMinusBackSolidSharp"
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

export const iconPackOfPathfinderMinusBack: TheIconSelfPack = {
  name: 'PathfinderMinusBack',
  StrokeRounded: IconPathfinderMinusBackStrokeRounded,
  DuotoneRounded: IconPathfinderMinusBackDuotoneRounded,
  TwotoneRounded: IconPathfinderMinusBackTwotoneRounded,
  SolidRounded: IconPathfinderMinusBackSolidRounded,
  BulkRounded: IconPathfinderMinusBackBulkRounded,
  StrokeSharp: IconPathfinderMinusBackStrokeSharp,
  SolidSharp: IconPathfinderMinusBackSolidSharp,
};