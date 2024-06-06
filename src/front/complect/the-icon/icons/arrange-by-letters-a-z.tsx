import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 14H8.42109C9.35119 14 9.81624 14 9.94012 14.2801C10.064 14.5603 9.74755 14.8963 9.11466 15.5684L5.47691 19.4316C4.84402 20.1037 4.52757 20.4397 4.65145 20.7199C4.77533 21 5.24038 21 6.17048 21H10',
  d2: 'M4 9L6.10557 4.30527C6.49585 3.43509 6.69098 3 7 3C7.30902 3 7.50415 3.43509 7.89443 4.30527L10 9',
  d3: 'M17.5 20V4M17.5 20C16.7998 20 15.4915 18.0057 15 17.5M17.5 20C18.2002 20 19.5085 18.0057 20 17.5',
  d4: 'M8.42109 14H4L4.63901 20.5915C4.64472 20.6505 4.64758 20.68 4.68063 20.7462C4.71368 20.8125 4.71782 20.8163 4.7261 20.8239C4.91819 21 5.37369 21 6.17048 21H10L9.94159 14.4454C9.94093 14.3711 9.9406 14.3339 9.89792 14.2501C9.85524 14.1662 9.84931 14.1618 9.83746 14.153C9.63101 14 9.18145 14 8.42109 14Z',
  d5: 'M6.10557 4.30527L4.63203 7.59078C4.34717 8.22592 4.20474 8.5435 4.35253 8.77175C4.50031 9 4.84837 9 5.54447 9H8.45553C9.15163 9 9.49969 9 9.64747 8.77175C9.79526 8.5435 9.65283 8.22592 9.36797 7.59078L7.89443 4.30527C7.50415 3.43509 7.30902 3 7 3C6.69098 3 6.49585 3.43509 6.10557 4.30527Z',
  d6: 'M8.77634 15H4.5C3.94772 15 3.5 14.5523 3.5 14C3.5 13.4477 3.94772 13 4.5 13H8.92109C8.94138 13 8.96167 13 8.98197 13C9.3935 12.9999 9.80354 12.9998 10.1227 13.0449C10.4245 13.0875 11.066 13.223 11.3547 13.8757C11.6464 14.5353 11.3053 15.102 11.1293 15.3524C10.9445 15.6153 10.6643 15.9127 10.3848 16.2093C10.3708 16.2242 10.3567 16.2391 10.3427 16.254L6.81523 20H10.5C11.0523 20 11.5 20.4477 11.5 21C11.5 21.5523 11.0523 22 10.5 22H6.67048C6.6502 22 6.62991 22 6.60962 22C6.19808 22.0001 5.78803 22.0003 5.46883 21.9552C5.16705 21.9126 4.52552 21.777 4.23688 21.1243C3.9452 20.4647 4.28629 19.898 4.46231 19.6476C4.64712 19.3847 4.92731 19.0874 5.20678 18.7907C5.22082 18.7758 5.23486 18.7609 5.24888 18.7461L8.77634 15Z',
  d7: 'M7.50025 4.75464L9.58781 9.40922C9.81382 9.91315 10.4055 10.1384 10.9095 9.91243C11.4134 9.68643 11.6387 9.0947 11.4127 8.59078L9.30711 3.89605C9.2988 3.87753 9.2905 3.85901 9.28221 3.84051C9.10901 3.45408 8.93822 3.07302 8.76459 2.79568C8.60345 2.53829 8.21745 2 7.50025 2C6.78305 2 6.39705 2.53829 6.23591 2.79567C6.06228 3.07302 5.89148 3.45409 5.71828 3.84051C5.70999 3.85901 5.70169 3.87753 5.69339 3.89605L3.58781 8.59078C3.36181 9.0947 3.5871 9.68643 4.09102 9.91243C4.59495 10.1384 5.18667 9.91315 5.41268 9.40922L7.50025 4.75464Z',
  d8: 'M18.2559 4C18.2559 3.44772 17.8081 3 17.2559 3C16.7036 3 16.2559 3.44772 16.2559 4L16.2559 16.5L15.6616 16.5C15.486 16.4999 15.2703 16.4997 15.0939 16.5218L15.0905 16.5222C14.9641 16.538 14.388 16.6098 14.1137 17.1754C13.8387 17.7423 14.1407 18.2424 14.206 18.3506L14.2084 18.3546C14.3006 18.5076 14.4348 18.6785 14.5451 18.8191L14.5688 18.8493C14.8635 19.2252 15.2454 19.7094 15.6259 20.1004C15.8157 20.2955 16.033 20.4967 16.2639 20.6556C16.4691 20.7968 16.8193 21 17.25 21C17.6807 21 18.0309 20.7968 18.2361 20.6556C18.467 20.4967 18.6843 20.2955 18.8741 20.1004C19.2546 19.7094 19.6365 19.2252 19.9312 18.8493L19.9549 18.8191C20.0652 18.6785 20.1994 18.5077 20.2916 18.3546L20.294 18.3506C20.3593 18.2424 20.6613 17.7422 20.3863 17.1754C20.112 16.6098 19.5359 16.538 19.4095 16.5222L19.4061 16.5218C19.2297 16.4997 19.014 16.4999 18.8384 16.5L18.2559 16.5L18.2559 4Z',
  d9: 'M4 14H9L5 21H10',
  d10: 'M4 10L6.5 3H7.5L10 10',
  d11: 'M17.5 4V19.2542M15 17.5L17.5 20L20 17.5',
  d12: 'M7.71875 15H4.44193V13H11.1651L7.16511 20H10.4419V22H3.71875L7.71875 15Z',
  d13: 'M6.23702 2H8.64646L11.3835 9.66366L9.5 10.3363L7.44174 4.57321L5.38348 10.3363L3.5 9.66366L6.23702 2Z',
  d14: 'M18.2929 4V17.5858L19.0858 16.7929L20.5 18.2071L17.2929 21.4142L14.0858 18.2071L15.5 16.7929L16.2929 17.5858V4H18.2929Z',
} as const;

export const IconArrangeByLettersAZStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-stroke-rounded IconArrangeByLettersAZStrokeRounded"
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

export const IconArrangeByLettersAZDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-duotone-rounded IconArrangeByLettersAZDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconArrangeByLettersAZTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-twotone-rounded IconArrangeByLettersAZTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByLettersAZSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-solid-rounded IconArrangeByLettersAZSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByLettersAZBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-bulk-rounded IconArrangeByLettersAZBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconArrangeByLettersAZStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-stroke-sharp IconArrangeByLettersAZStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByLettersAZSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-letters-a-z-solid-sharp IconArrangeByLettersAZSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfArrangeByLettersAZ: TheIconSelfPack = {
  name: 'ArrangeByLettersAZ',
  StrokeRounded: IconArrangeByLettersAZStrokeRounded,
  DuotoneRounded: IconArrangeByLettersAZDuotoneRounded,
  TwotoneRounded: IconArrangeByLettersAZTwotoneRounded,
  SolidRounded: IconArrangeByLettersAZSolidRounded,
  BulkRounded: IconArrangeByLettersAZBulkRounded,
  StrokeSharp: IconArrangeByLettersAZStrokeSharp,
  SolidSharp: IconArrangeByLettersAZSolidSharp,
};