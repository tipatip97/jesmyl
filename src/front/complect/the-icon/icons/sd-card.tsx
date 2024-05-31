import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 8.89922V8C5.5 5.17157 5.5 3.75736 6.37868 2.87868C7.25736 2 8.67157 2 11.5 2H14.5C17.3284 2 18.7426 2 19.6213 2.87868C20.5 3.75736 20.5 5.17157 20.5 8V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1569 22 16.2712 22 12.5 22H10.6254C7.69689 22 6.23263 22 5.19651 21.2702C4.8212 21.0058 4.49421 20.6788 4.22984 20.3035C3.5 19.2674 3.5 17.8031 3.5 14.8746V14.6008C3.5 14.0589 3.5 13.7879 3.54625 13.5276C3.60289 13.2088 3.71077 12.9012 3.8657 12.6169C3.99221 12.3847 4.16148 12.1732 4.5 11.75C4.83852 11.3268 5.00779 11.1153 5.1343 10.8831C5.28923 10.5988 5.39711 10.2912 5.45375 9.97241C5.5 9.71207 5.5 9.44112 5.5 8.89922Z',
  d2: 'M16.5 6V9',
  d3: 'M13 6V9',
  d4: 'M9.5 6V9',
  d5: 'M14.5549 1.25H14.5549C15.9225 1.24998 17.0248 1.24996 17.8918 1.36652C18.7919 1.48754 19.5498 1.74643 20.1517 2.34835C20.7536 2.95027 21.0125 3.70814 21.1335 4.60825C21.2501 5.47522 21.25 6.57754 21.25 7.94513V14.0565C21.25 15.8942 21.25 17.3498 21.0969 18.489C20.9393 19.6614 20.6071 20.6104 19.8588 21.3588C19.1104 22.1071 18.1615 22.4392 16.989 22.5969C15.8498 22.75 14.3942 22.75 12.5564 22.75H10.582C9.15457 22.75 8.02355 22.75 7.12236 22.6546C6.1986 22.5568 5.42992 22.3519 4.76462 21.8833C4.31895 21.5694 3.93064 21.1811 3.61671 20.7354C3.14807 20.0701 2.94322 19.3014 2.84542 18.3777C2.75 17.4765 2.75001 16.3455 2.75002 14.918L2.75001 14.538C2.7499 14.0563 2.74983 13.7229 2.80783 13.3964C2.87863 12.9979 3.01348 12.6135 3.20714 12.2581C3.36579 11.9669 3.57414 11.7066 3.87515 11.3305L3.91437 11.2815C4.26914 10.838 4.38816 10.685 4.47575 10.5242C4.59194 10.311 4.67285 10.0803 4.71533 9.84123C4.74735 9.66101 4.75002 9.46714 4.75002 8.89922L4.75002 7.94513C4.75 6.57754 4.74998 5.47522 4.86654 4.60825C4.98756 3.70814 5.24645 2.95027 5.84837 2.34835C6.45028 1.74643 7.20816 1.48754 8.10827 1.36652C8.97523 1.24996 10.0776 1.24998 11.4451 1.25H11.4451H14.5549ZM17 5C17.5523 5 18 5.44772 18 6V9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9V6C16 5.44772 16.4477 5 17 5ZM14 6C14 5.44772 13.5523 5 13 5C12.4477 5 12 5.44772 12 6V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V6ZM9 5C9.55228 5 10 5.44772 10 6V9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9V6C8 5.44772 8.44772 5 9 5Z',
  d6: 'M14.5549 1.25H14.5549H11.4451H11.4451C10.0776 1.24998 8.97523 1.24996 8.10827 1.36652C7.20816 1.48754 6.45028 1.74643 5.84837 2.34835C5.24645 2.95027 4.98756 3.70814 4.86654 4.60825C4.74998 5.47522 4.75 6.57754 4.75002 7.94513L4.75002 8.89922C4.75002 9.46714 4.74735 9.66101 4.71533 9.84123C4.67285 10.0803 4.59194 10.311 4.47575 10.5242C4.38816 10.685 4.26914 10.838 3.91437 11.2815L3.87515 11.3305C3.57414 11.7066 3.36579 11.9669 3.20714 12.2581C3.01348 12.6135 2.87863 12.9979 2.80783 13.3964C2.74983 13.7229 2.7499 14.0563 2.75001 14.538L2.75002 14.918C2.75001 16.3455 2.75 17.4765 2.84542 18.3777C2.94322 19.3014 3.14807 20.0701 3.61671 20.7354C3.93064 21.1811 4.31895 21.5694 4.76462 21.8833C5.42992 22.3519 6.1986 22.5568 7.12236 22.6546C8.02355 22.75 9.15457 22.75 10.582 22.75H12.5564C14.3942 22.75 15.8498 22.75 16.989 22.5969C18.1615 22.4392 19.1104 22.1071 19.8588 21.3588C20.6071 20.6104 20.9393 19.6614 21.0969 18.489C21.25 17.3498 21.25 15.8942 21.25 14.0565V7.94513C21.25 6.57754 21.2501 5.47522 21.1335 4.60825C21.0125 3.70814 20.7536 2.95027 20.1517 2.34835C19.5498 1.74643 18.7919 1.48754 17.8918 1.36652C17.0248 1.24996 15.9225 1.24998 14.5549 1.25Z',
  d7: 'M18 6C18 5.44772 17.5523 5 17 5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10C17.5523 10 18 9.55228 18 9V6ZM13 5C13.5523 5 14 5.44772 14 6V9C14 9.55228 13.5523 10 13 10C12.4477 10 12 9.55228 12 9V6C12 5.44772 12.4477 5 13 5ZM10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6V9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9V6Z',
  d8: 'M5.5 2V1.25H4.75V2H5.5ZM5.5 10L6.12404 10.416L6.25 10.2271V10H5.5ZM20.5 2H21.25C21.25 1.58579 20.9142 1.25 20.5 1.25V2ZM20.5 22V22.75C20.9142 22.75 21.25 22.4142 21.25 22H20.5ZM3.5 22H2.75C2.75 22.4142 3.08579 22.75 3.5 22.75V22ZM3.5 13L2.87596 12.584L2.75 12.7729V13H3.5ZM4.75 2V10H6.25V2H4.75ZM5.5 2.75H20.5V1.25H5.5V2.75ZM19.75 2V22H21.25V2H19.75ZM20.5 21.25H3.5V22.75H20.5V21.25ZM4.25 22V13H2.75V22H4.25ZM4.87596 9.58397L2.87596 12.584L4.12404 13.416L6.12404 10.416L4.87596 9.58397Z',
  d9: 'M16.5 5V9M13 5V9M9.5 5V9',
  d10: 'M5.5 2V10L3.5 13V22H20.5V2H5.5ZM8.5 5V9H10.5V5H8.5ZM12 5V9H14V5H12ZM15.5 5V9H17.5V5H15.5Z',
} as const;

export const IconSdCardStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-stroke-rounded IconSdCardStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSdCardDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-duotone-rounded IconSdCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSdCardTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-twotone-rounded IconSdCardTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSdCardSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-solid-rounded IconSdCardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSdCardBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-bulk-rounded IconSdCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSdCardStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-stroke-sharp IconSdCardStrokeSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSdCardSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sd-card-solid-sharp IconSdCardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSdCard: TheIconSelfPack = {
  name: 'SdCard',
  StrokeRounded: IconSdCardStrokeRounded,
  DuotoneRounded: IconSdCardDuotoneRounded,
  TwotoneRounded: IconSdCardTwotoneRounded,
  SolidRounded: IconSdCardSolidRounded,
  BulkRounded: IconSdCardBulkRounded,
  StrokeSharp: IconSdCardStrokeSharp,
  SolidSharp: IconSdCardSolidSharp,
};