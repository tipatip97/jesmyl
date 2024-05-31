import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 14H8.42109C9.35119 14 9.81624 14 9.94012 14.2801C10.064 14.5603 9.74755 14.8963 9.11466 15.5684L5.47691 19.4316C4.84402 20.1037 4.52757 20.4397 4.65145 20.7199C4.77533 21 5.24038 21 6.17048 21H10',
  d2: 'M4 9L6.10557 4.30527C6.49585 3.43509 6.69098 3 7 3C7.30902 3 7.50415 3.43509 7.89443 4.30527L10 9',
  d3: 'M17.5 20V4M17.5 20C16.7998 20 15.4915 18.0057 15 17.5M17.5 20C18.2002 20 19.5085 18.0057 20 17.5',
  d4: 'M15.5939 16.2718C15.7703 16.2497 15.986 16.2499 16.1616 16.25L16.75 16.25V4C16.75 3.44772 17.1977 3 17.75 3C18.3023 3 18.75 3.44772 18.75 4V16.25L19.3384 16.25C19.514 16.2499 19.7297 16.2497 19.9061 16.2718L19.9095 16.2722C20.0359 16.288 20.612 16.3598 20.8863 16.9254C21.1613 17.4922 20.8593 17.9924 20.794 18.1006L20.4549 18.5691C20.1602 18.9449 19.7546 19.4593 19.3741 19.8503C19.1843 20.0454 18.967 20.2467 18.7361 20.4055C18.5309 20.5467 18.1807 20.75 17.75 20.75C17.3193 20.75 16.9691 20.5467 16.7639 20.4055C16.533 20.2467 16.3157 20.0454 16.1259 19.8503C15.7454 19.4593 15.3397 18.9449 15.0451 18.569L14.706 18.1006C14.6407 17.9924 14.3387 17.4922 14.6137 16.9254C14.888 16.3598 15.4641 16.288 15.5905 16.2722L15.5939 16.2718Z',
  d5: 'M8.27634 15H4C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13H8.42109C8.44138 13 8.46167 13 8.48197 13C8.8935 12.9999 9.30354 12.9998 9.62274 13.0449C9.92453 13.0875 10.566 13.223 10.8547 13.8757C11.1464 14.5353 10.8053 15.102 10.6293 15.3524C10.4445 15.6153 10.1643 15.9127 9.88479 16.2093C9.87075 16.2242 9.85671 16.2391 9.84269 16.254L6.31523 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H6.17048C6.1502 22 6.12991 22 6.10962 22C5.69808 22.0001 5.28803 22.0003 4.96883 21.9552C4.66705 21.9126 4.02552 21.777 3.73688 21.1243C3.4452 20.4647 3.78629 19.898 3.96231 19.6476C4.14712 19.3847 4.42731 19.0874 4.70678 18.7907C4.72082 18.7758 4.73486 18.7609 4.74888 18.7461L8.27634 15Z',
  d6: 'M7.00025 4.75464L9.08781 9.40922C9.31382 9.91315 9.90555 10.1384 10.4095 9.91243C10.9134 9.68643 11.1387 9.0947 10.9127 8.59078L8.80711 3.89605C8.7988 3.87753 8.7905 3.85901 8.78221 3.84051C8.60901 3.45408 8.43822 3.07302 8.26459 2.79568C8.10345 2.53829 7.71745 2 7.00025 2C6.28305 2 5.89705 2.53829 5.73591 2.79567C5.56228 3.07302 5.39148 3.45409 5.21828 3.84051C5.20999 3.85901 5.20169 3.87753 5.19339 3.89605L3.08781 8.59078C2.86181 9.0947 3.0871 9.68643 3.59102 9.91243C4.09495 10.1384 4.68667 9.91315 4.91268 9.40922L7.00025 4.75464Z',
  d7: 'M4 14H9.5V14.5L4.5 20.5V21H10',
  d8: 'M4 10L6.5 3H7.5L10 10',
  d9: 'M17 4V19.2748M14 17L17 20L20 17',
  d10: 'M7.72303 15H3.94141V13H10.4414V14.862L6.15978 20H9.94141V22H3.44141V20.1379L7.72303 15Z',
  d11: 'M5.73702 2H8.14646L10.8835 9.66366L9 10.3363L6.94174 4.57321L4.88348 10.3363L3 9.66366L5.73702 2Z',
  d12: 'M18.2929 4V16.1716L19.5858 14.8787L21 16.2929L17.2929 20L13.5858 16.2929L15 14.8787L16.2929 16.1716V4H18.2929Z',
} as const;

export const IconSortingAZ02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-stroke-rounded IconSortingAZ02StrokeRounded"
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

export const IconSortingAZ02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-duotone-rounded IconSortingAZ02DuotoneRounded"
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

export const IconSortingAZ02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-twotone-rounded IconSortingAZ02TwotoneRounded"
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

export const IconSortingAZ02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-solid-rounded IconSortingAZ02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSortingAZ02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-bulk-rounded IconSortingAZ02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-stroke-sharp IconSortingAZ02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSortingAZ02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-a-z-02-solid-sharp IconSortingAZ02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSortingAZ02: TheIconSelfPack = {
  name: 'SortingAZ02',
  StrokeRounded: IconSortingAZ02StrokeRounded,
  DuotoneRounded: IconSortingAZ02DuotoneRounded,
  TwotoneRounded: IconSortingAZ02TwotoneRounded,
  SolidRounded: IconSortingAZ02SolidRounded,
  BulkRounded: IconSortingAZ02BulkRounded,
  StrokeSharp: IconSortingAZ02StrokeSharp,
  SolidSharp: IconSortingAZ02SolidSharp,
};