import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 5V19H20V3',
  d2: 'M14 19L14 13.5372C14 11.3938 10 11.5836 10 13.5372L10 19',
  d3: 'M14 22L10 22',
  d4: 'M3 5L10.7351 2.26014C11.9889 1.91329 12.0111 1.91329 13.2649 2.26014L21 5',
  d5: 'M12.0119 8H12',
  d6: 'M4 5V19H10V13.5372C10 11.5836 14 11.3938 14 13.5372V19H20V5L12 2L4 5Z',
  d7: 'M19.75 2C20.3023 2 20.75 2.44772 20.75 3V4.59767C20.75 5.14995 20.3023 5.59767 19.75 5.59767C19.1977 5.59767 18.75 5.14995 18.75 4.59767V3C18.75 2.44772 19.1977 2 19.75 2Z',
  d8: 'M15 22C15 22.5523 14.5523 23 14 23L10 23C9.44772 23 9 22.5523 9 22C9 21.4477 9.44772 21 10 21L14 21C14.5523 21 15 21.4477 15 22Z',
  d9: 'M11.0359 3.21458L3.33416 5.94261C2.81357 6.12701 2.24206 5.85448 2.05766 5.33388C1.87326 4.81329 2.1458 4.24179 2.66639 4.05739L10.4015 1.31753C10.4236 1.30968 10.4461 1.30261 10.4687 1.29634C10.4959 1.28882 10.5229 1.28135 10.5496 1.27394C11.091 1.12385 11.5378 1 12.0003 1C12.4627 1 12.9095 1.12385 13.4509 1.27394C13.4777 1.28135 13.5046 1.28882 13.5318 1.29634C13.5545 1.30261 13.5769 1.30968 13.5991 1.31753L21.3342 4.05739C21.8547 4.24179 22.1273 4.81329 21.9429 5.33388C21.7585 5.85448 21.187 6.12701 20.6664 5.94261L12.9647 3.21458C12.3172 3.03581 12.1504 3 12.0003 3C11.8501 3 11.6833 3.03581 11.0359 3.21458Z',
  d10: 'M13.4649 1.53729L13.4007 1.51953C12.8429 1.36506 12.4275 1.25 12 1.25C11.5725 1.25 11.1571 1.36506 10.5993 1.51953L10.5351 1.53729C10.5181 1.54199 10.5013 1.54729 10.4847 1.55318L3.74959 3.93883C3.45014 4.0449 3.25 4.32811 3.25 4.64579V19C3.25 19.4142 3.58579 19.75 4 19.75H9.25V13.5372C9.25 12.755 9.66344 12.1643 10.1988 11.7945C10.7173 11.4363 11.3671 11.2656 11.9822 11.251C12.596 11.2365 13.2598 11.3756 13.7946 11.7365C14.3569 12.116 14.75 12.7296 14.75 13.5372V19.75H20C20.4142 19.75 20.75 19.4142 20.75 19V4.64579C20.75 4.32811 20.5499 4.0449 20.2504 3.93883L13.5153 1.55318C13.4987 1.54729 13.4819 1.54199 13.4649 1.53729ZM13.25 13.5372V19.75H10.75V13.5372C10.75 13.3426 10.8366 13.177 11.0512 13.0287C11.2827 12.8688 11.6329 12.7597 12.0178 12.7506C12.404 12.7414 12.7402 12.8346 12.9554 12.9799C13.1431 13.1065 13.25 13.273 13.25 13.5372ZM12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5H12.0119C12.8404 9.5 13.5119 8.82843 13.5119 8C13.5119 7.17157 12.8404 6.5 12.0119 6.5H12Z',
  d11: 'M19.75 2C20.3023 2 20.75 2.40726 20.75 2.90963V4.09037C20.75 4.59274 20.3023 5 19.75 5C19.1977 5 18.75 4.59274 18.75 4.09037V2.90963C18.75 2.40726 19.1977 2 19.75 2Z',
  d12: 'M13.4649 1.53729L13.4007 1.51953C12.8429 1.36506 12.4275 1.25 12 1.25C11.5725 1.25 11.1571 1.36506 10.5993 1.51953L10.5351 1.53729C10.5181 1.54199 10.5013 1.54729 10.4847 1.55318L3.74959 3.93883C3.45014 4.0449 3.25 4.32811 3.25 4.64579V19C3.25 19.4142 3.58579 19.75 4 19.75H20C20.4142 19.75 20.75 19.4142 20.75 19V4.64579C20.75 4.32811 20.5499 4.0449 20.2504 3.93883L13.5153 1.55318C13.4987 1.54729 13.4819 1.54199 13.4649 1.53729Z',
  d13: 'M13.7946 11.7365C14.3569 12.116 14.75 12.7296 14.75 13.5372L14.75 19.7534H13.25L13.25 13.5372C13.25 13.273 13.1431 13.1065 12.9554 12.9799C12.7402 12.8346 12.404 12.7414 12.0178 12.7506C11.6329 12.7597 11.2827 12.8688 11.0512 13.0287C10.8366 13.177 10.75 13.3426 10.75 13.5372V19.7534H9.25L9.25 13.5372C9.25 12.755 9.66344 12.1643 10.1988 11.7945C10.7173 11.4363 11.3671 11.2656 11.9822 11.251C12.596 11.2365 13.2598 11.3756 13.7946 11.7365Z',
  d14: 'M10.5 8C10.5 7.17157 11.1716 6.5 12 6.5H12.0119C12.8404 6.5 13.5119 7.17157 13.5119 8C13.5119 8.82843 12.8404 9.5 12.0119 9.5H12C11.1716 9.5 10.5 8.82843 10.5 8Z',
  d15: 'M14 19V12L10 12L10 19',
  d16: 'M2 6L12 2L22 6',
  d17: 'M9.99976 20.75L13.9998 20.75V22.75L9.99976 22.75L9.99976 20.75Z',
  d18: 'M12.2778 1.30364C12.099 1.23212 11.8995 1.23212 11.7207 1.30364L1.49988 5.30364L2.05696 6.69636L3.24988 6.22979V19.75H9.24988V12C9.24988 11.5858 9.58566 11.25 9.99987 11.25L13.9999 11.25C14.1988 11.25 14.3896 11.329 14.5302 11.4697C14.6709 11.6103 14.7499 11.8011 14.7499 12V19.75H20.7499V6.2298L21.9429 6.69636L22.5 5.30364L20.7499 4.61881V3H19.2499V4.03185L12.2778 1.30364ZM13.2499 19.75H10.7499V12.75L13.2499 12.75V19.75ZM13.0118 7H10.9999V9H13.0118V7Z',
} as const;

export const IconGuestHouseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-stroke-rounded IconGuestHouseStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGuestHouseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-duotone-rounded IconGuestHouseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGuestHouseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-twotone-rounded IconGuestHouseTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconGuestHouseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-solid-rounded IconGuestHouseSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGuestHouseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-bulk-rounded IconGuestHouseBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGuestHouseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-stroke-sharp IconGuestHouseStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGuestHouseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="guest-house-solid-sharp IconGuestHouseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGuestHouse: TheIconSelfPack = {
  name: 'GuestHouse',
  StrokeRounded: IconGuestHouseStrokeRounded,
  DuotoneRounded: IconGuestHouseDuotoneRounded,
  TwotoneRounded: IconGuestHouseTwotoneRounded,
  SolidRounded: IconGuestHouseSolidRounded,
  BulkRounded: IconGuestHouseBulkRounded,
  StrokeSharp: IconGuestHouseStrokeSharp,
  SolidSharp: IconGuestHouseSolidSharp,
};