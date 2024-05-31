import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.53448 14L4.0332 6',
  d2: 'M11.5 21.5L15.5 14',
  d3: 'M12 8H21',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z',
  d5: 'M8.53253 14L4.03125 6',
  d6: 'M8.53643 14L4.03516 6',
  d7: 'M3.38738 7.15535C3.16152 6.76749 3.04859 6.57356 2.87028 6.57889C2.69197 6.58421 2.59475 6.77669 2.4003 7.16166C1.66451 8.61838 1.25 10.2653 1.25 12.0091C1.25 16.9627 4.59473 21.1344 9.14715 22.3853C9.47882 22.4765 9.64465 22.522 9.80617 22.4519C9.9677 22.3818 10.0529 22.2198 10.2233 21.8958L12.4399 17.6807C12.5986 17.3789 12.3407 17.0134 12 17.0134C10.1069 17.0134 8.45946 15.9604 7.61063 14.4076L3.38738 7.15535Z',
  d8: 'M4.74685 4.06793C4.49207 4.30116 4.36469 4.41777 4.33811 4.59244C4.31153 4.76712 4.40398 4.92588 4.58888 5.24339L6.58881 8.67771C6.91811 9.2432 7.08277 9.52595 7.28675 9.54564C7.49073 9.56534 7.74042 9.28044 8.23981 8.71065C9.15622 7.66502 10.5011 7.00489 12 7.00489H20.525C20.9744 7.00489 21.199 7.00489 21.2842 6.84776C21.3693 6.69064 21.2515 6.50952 21.0159 6.14729C19.0985 3.19921 15.7767 1.25 12 1.25C9.20479 1.25 6.65875 2.31774 4.74685 4.06793Z',
  d9: 'M22.4422 9.44235C22.392 9.23725 22.3669 9.13469 22.2854 9.07064C22.2038 9.00659 22.0943 9.00659 21.8751 9.00659H17.2015C16.7004 9.00659 16.4499 9.00659 16.361 9.14142C16.272 9.27624 16.3814 9.53243 16.6001 10.0448C16.8575 10.6479 17 11.3119 17 12.0091C17 12.8161 16.8092 13.5784 16.4702 14.2534C16.4512 14.3294 16.4228 14.4045 16.3847 14.4769L12.4886 21.8858C12.2788 22.2847 12.174 22.4842 12.2734 22.6328C12.3728 22.7815 12.5885 22.7611 13.0199 22.7205C18.4786 22.2063 22.75 17.607 22.75 12.0091C22.75 11.1246 22.6433 10.2649 22.4422 9.44235Z',
  d10: 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z',
  d11: 'M2.62211 6.74061C1.74826 8.29539 1.24988 10.0895 1.24988 12C1.24988 16.914 4.54709 21.058 9.04984 22.3402L12.4343 16.9815C12.2911 16.9938 12.1463 17.0001 12 17.0001C10.1625 17.0001 8.55643 16.0089 7.68747 14.5319L2.62211 6.74061Z',
  d12: 'M3.86097 4.97687L7.30552 10.2751C8.00811 8.36367 9.84481 7.00012 12 7.00012H21.5188C19.7193 3.5812 16.1318 1.25 11.9999 1.25C8.74737 1.25 5.83224 2.69445 3.86097 4.97687Z',
  d13: 'M22.3257 9.00012H16.0004C16.6281 9.83578 17 10.8745 17 12.0001C17 12.806 16.8094 13.5673 16.4707 14.2414C16.4456 14.3425 16.4041 14.4413 16.3455 14.5341L11.1761 22.7189C11.448 22.7395 11.7227 22.75 11.9999 22.75C17.9369 22.75 22.7499 17.9371 22.7499 12C22.7499 10.9588 22.6019 9.95224 22.3257 9.00012Z',
  d14: 'M8.99999 12.0001C8.99999 10.3433 10.3431 9.00012 12 9.00012C13.6568 9.00012 15 10.3433 15 12.0001C15 13.657 13.6568 15.0001 12 15.0001C10.3431 15.0001 8.99999 13.657 8.99999 12.0001Z',
} as const;

export const IconChromeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-stroke-rounded IconChromeStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconChromeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-duotone-rounded IconChromeDuotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
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

export const IconChromeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-twotone-rounded IconChromeTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconChromeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-solid-rounded IconChromeSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconChromeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-bulk-rounded IconChromeBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChromeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-stroke-sharp IconChromeStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconChromeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chrome-solid-sharp IconChromeSolidSharp"
    >
      <path 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChrome: TheIconSelfPack = {
  name: 'Chrome',
  StrokeRounded: IconChromeStrokeRounded,
  DuotoneRounded: IconChromeDuotoneRounded,
  TwotoneRounded: IconChromeTwotoneRounded,
  SolidRounded: IconChromeSolidRounded,
  BulkRounded: IconChromeBulkRounded,
  StrokeSharp: IconChromeStrokeSharp,
  SolidSharp: IconChromeSolidSharp,
};