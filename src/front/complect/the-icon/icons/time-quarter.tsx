import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 15C2.14277 15.4274 2.31023 15.8431 2.50062 16.2452M4.12547 18.7463C4.44158 19.1137 4.781 19.4596 5.14137 19.7814M9 22C8.55224 21.8557 8.11701 21.6824 7.69641 21.4822',
  d2: 'M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12M12 13.5V16M10.5 12H6',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z',
  d5: 'M9.70802 11C10.0938 10.117 10.9748 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.0252 13.883 13.9062 13 14.292V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V14.292C10.4233 14.04 9.96 13.5767 9.70802 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H9.70802Z',
  d6: 'M1.25 12.0004C1.25 12.5401 1.68753 12.9776 2.22726 12.9776C2.76699 12.9776 3.20452 12.5401 3.20452 12.0004C3.20452 7.14282 7.14233 3.20501 11.9999 3.20501C16.8574 3.20501 20.7952 7.14282 20.7952 12.0004C20.7952 16.8579 16.8574 20.7957 11.9999 20.7957C11.4601 20.7957 11.0226 21.2332 11.0226 21.773C11.0226 22.3127 11.4601 22.7502 11.9999 22.7502C17.9369 22.7502 22.7497 17.9373 22.7497 12.0004C22.7497 6.06336 17.9369 1.25049 11.9999 1.25049C6.06288 1.25049 1.25 6.06337 1.25 12.0004ZM3.15444 14.6222C2.98344 14.1103 2.42982 13.834 1.9179 14.005C1.40598 14.176 1.12961 14.7296 1.30061 15.2415C1.45257 15.6964 1.63082 16.1389 1.83351 16.5669C2.06448 17.0548 2.64717 17.263 3.13498 17.032C3.62278 16.801 3.83099 16.2183 3.60002 15.7305C3.43058 15.3727 3.28153 15.0027 3.15444 14.6222ZM5.04551 17.9556C4.69353 17.5465 4.0765 17.5001 3.66734 17.8521C3.25818 18.2041 3.21183 18.8211 3.56381 19.2303C3.90057 19.6218 4.26231 19.9904 4.64654 20.3335C5.04912 20.693 5.6669 20.658 6.02639 20.2555C6.38588 19.8529 6.35096 19.2351 5.94838 18.8756C5.62827 18.5898 5.32659 18.2824 5.04551 17.9556ZM8.21439 20.3843C7.72705 20.1523 7.14394 20.3593 6.91199 20.8467C6.68004 21.334 6.88707 21.9171 7.37441 22.1491C7.82405 22.3631 8.28953 22.5485 8.76861 22.7029C9.28232 22.8684 9.83297 22.5861 9.99851 22.0724C10.1641 21.5587 9.8818 21.0081 9.36809 20.8425C8.97201 20.7149 8.58683 20.5615 8.21439 20.3843Z',
  d7: 'M1.9179 14.0047C2.42982 13.8337 2.98344 14.1101 3.15444 14.622C3.28153 15.0025 3.43058 15.3725 3.60002 15.7303C3.83099 16.2181 3.62278 16.8008 3.13498 17.0318C2.64717 17.2627 2.06448 17.0545 1.83351 16.5667C1.63082 16.1386 1.45257 15.6962 1.30061 15.2413C1.12961 14.7294 1.40598 14.1757 1.9179 14.0047ZM3.66734 17.8519C4.0765 17.4999 4.69353 17.5463 5.04551 17.9554C5.32659 18.2822 5.62827 18.5895 5.94838 18.8754C6.35096 19.2349 6.38588 19.8527 6.02639 20.2552C5.6669 20.6578 5.04911 20.6927 4.64654 20.3332C4.26231 19.9901 3.90057 19.6215 3.56381 19.2301C3.21183 18.8209 3.25818 18.2039 3.66734 17.8519ZM6.91199 20.8465C7.14394 20.3591 7.72705 20.1521 8.21439 20.384C8.58683 20.5613 8.97201 20.7147 9.36809 20.8423C9.8818 21.0079 10.1641 21.5585 9.99851 22.0722C9.83297 22.5859 9.28232 22.8682 8.76861 22.7026C8.28953 22.5483 7.82405 22.3629 7.37441 22.1489C6.88707 21.9169 6.68004 21.3338 6.91199 20.8465Z',
  d8: 'M2.22726 12.9774C1.68753 12.9774 1.25 12.5399 1.25 12.0001C1.25 6.06315 6.06288 1.25027 11.9999 1.25027C17.9369 1.25027 22.7497 6.06315 22.7497 12.0001C22.7497 17.9371 17.9369 22.75 11.9999 22.75C11.4601 22.75 11.0226 22.3125 11.0226 21.7727C11.0226 21.233 11.4601 20.7955 11.9999 20.7955C16.8574 20.7955 20.7952 16.8577 20.7952 12.0001C20.7952 7.1426 16.8574 3.20479 11.9999 3.20479C7.14233 3.20479 3.20452 7.1426 3.20452 12.0001C3.20452 12.5399 2.76699 12.9774 2.22726 12.9774Z',
  d9: 'M6 13H9.98388C10.2024 13.4396 10.5604 13.7976 11 14.0161V16H13V14.0161C13.7409 13.6479 14.25 12.8834 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C11.1166 9.75 10.3521 10.2591 9.98388 11H6V13Z',
  d10: 'M3.20455 12C3.20454 7.1424 7.1424 3.20454 12 3.20454C16.8576 3.20454 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955V22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H3.20455ZM3.41348 14.3695L3.10385 13.4426L1.25 14.0619L1.55963 14.9888C1.71159 15.4437 1.88984 15.8862 2.09254 16.3143L2.51075 17.1975L4.27728 16.3611L3.85907 15.4778C3.68963 15.12 3.54058 14.75 3.41348 14.3695ZM5.30458 17.703L4.66724 16.9621L3.18553 18.2368L3.82286 18.9777C4.15962 19.3691 4.52136 19.7377 4.9056 20.0808L5.63454 20.7318L6.9364 19.2739L6.20746 18.623C5.88735 18.3371 5.58566 18.0297 5.30458 17.703ZM8.47349 20.1316L7.59107 19.7116L6.75108 21.4765L7.6335 21.8965C8.08315 22.1105 8.54864 22.2959 9.02772 22.4503L9.95789 22.75L10.5574 20.8897L9.62721 20.5899C9.23113 20.4623 8.84594 20.3089 8.47349 20.1316Z',
} as const;

export const IconTimeQuarterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-stroke-rounded IconTimeQuarterStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTimeQuarterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-duotone-rounded IconTimeQuarterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconTimeQuarterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-twotone-rounded IconTimeQuarterTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTimeQuarterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-solid-rounded IconTimeQuarterSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeQuarterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-bulk-rounded IconTimeQuarterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconTimeQuarterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-stroke-sharp IconTimeQuarterStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTimeQuarterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-quarter-solid-sharp IconTimeQuarterSolidSharp"
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

export const iconPackOfTimeQuarter: TheIconSelfPack = {
  name: 'TimeQuarter',
  StrokeRounded: IconTimeQuarterStrokeRounded,
  DuotoneRounded: IconTimeQuarterDuotoneRounded,
  TwotoneRounded: IconTimeQuarterTwotoneRounded,
  SolidRounded: IconTimeQuarterSolidRounded,
  BulkRounded: IconTimeQuarterBulkRounded,
  StrokeSharp: IconTimeQuarterStrokeSharp,
  SolidSharp: IconTimeQuarterSolidSharp,
};