import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 21C15.567 21 14 19.433 14 17.5L14 3L21 3L21 17.5C21 19.433 19.433 21 17.5 21Z',
  d2: 'M22 3L13 3',
  d3: 'M17 7H14',
  d4: 'M10 16.875C10 19.9126 8 21 6 21C4 21 2 19.9126 2 16.875C2 13.8374 6 10 6 10C6 10 10 13.8374 10 16.875Z',
  d5: 'M14 12C15.083 11.1336 16.2974 9.87843 17.771 10.7626C19.0014 11.5009 20.0342 10.7244 21 10',
  d6: 'M17.5 21C19.433 21 21 19.433 21 17.5L21 10L19 11L17 10.5L14 11.5V17.5C14 19.433 15.567 21 17.5 21Z',
  d7: 'M12.875 7C12.875 6.44772 13.3227 6 13.875 6L16.875 6C17.4273 6 17.875 6.44772 17.875 7C17.875 7.55228 17.4273 8 16.875 8H13.875C13.3227 8 12.875 7.55228 12.875 7Z',
  d8: 'M5.35578 9.45879C5.64596 9.1804 6.10404 9.1804 6.39422 9.45879L6.39997 9.46461C6.52015 9.58642 6.86085 9.93175 7.05171 10.139C7.4389 10.5595 7.95654 11.1542 8.47592 11.8496C8.99376 12.5431 9.5239 13.3507 9.92705 14.1967C10.327 15.0359 10.625 15.9605 10.625 16.875C10.625 18.5702 10.0593 19.824 9.11687 20.6428C8.19348 21.445 6.99994 21.75 5.875 21.75C4.75006 21.75 3.55652 21.445 2.63313 20.6428C1.69069 19.824 1.125 18.5702 1.125 16.875C1.125 15.9605 1.42299 15.0359 1.82295 14.1967C2.2261 13.3507 2.75624 12.5431 3.27408 11.8496C3.79346 11.1542 4.3111 10.5595 4.69829 10.139C4.88917 9.93173 5.22992 9.58636 5.35007 9.46458L5.35578 9.45879Z',
  d9: 'M12.875 2C12.3227 2 11.875 2.44772 11.875 3C11.875 3.55228 12.3227 4 12.875 4L12.875 17.5C12.875 19.9853 14.8897 22 17.375 22C19.8603 22 21.875 19.9853 21.875 17.5L21.875 4C22.4273 4 22.875 3.55228 22.875 3C22.875 2.44772 22.4273 2 21.875 2H12.875ZM19.875 4L19.875 9.80085C19.6034 9.98784 19.3541 10.1345 19.105 10.2244C18.7545 10.351 18.4281 10.3572 18.0319 10.1195C17.0208 9.51289 16.0681 9.65935 15.2787 10.054C15.1423 10.1222 15.0074 10.1998 14.875 10.2835V4H19.875Z',
  d10: 'M12.875 2C12.3227 2 11.875 2.44772 11.875 3C11.875 3.55228 12.3227 4 12.875 4H21.875C22.4273 4 22.875 3.55228 22.875 3C22.875 2.44772 22.4273 2 21.875 2H12.875Z',
  d11: 'M21.875 4L21.875 17.5C21.875 19.9853 19.8603 22 17.375 22C14.8897 22 12.875 19.9853 12.875 17.5L12.875 4H14.875V10.2835C15.0074 10.1998 15.1423 10.1222 15.2787 10.054C16.0681 9.65935 17.0208 9.51289 18.0319 10.1195C18.4281 10.3572 18.7545 10.351 19.105 10.2244C19.3541 10.1345 19.6034 9.98784 19.875 9.80085L19.875 4H21.875Z',
  d12: 'M14.875 6H16.875C17.4273 6 17.875 6.44772 17.875 7C17.875 7.55228 17.4273 8 16.875 8H14.875V6Z',
  d13: 'M16.5 21C14.567 21 13 19.433 13 17.5L13 3L20 3L20 17.5C20 19.433 18.433 21 16.5 21Z',
  d14: 'M22 3L11 3',
  d15: 'M16 7H13',
  d16: 'M20 11H13',
  d17: 'M6 11C6 11 10 13.5 10 16.75C10 19.0972 8.20914 21 6 21C3.79086 21 2 19.0972 2 16.75C2 13.5 6 11 6 11Z',
  d18: 'M11.5 2L22.5 2V4L11.5 4V2Z',
  d19: 'M16.5 7H13.5',
  d20: 'M14.5 10L14.5 3H12.5V17.5C12.5 19.9853 14.5147 22 17 22C19.4853 22 21.5 19.9853 21.5 17.5L21.5 3H19.5V10H14.5Z',
  d21: 'M6.25 10.1152C6.25 10.1152 7.13019 10.6929 7.32897 10.8441C7.72529 11.1454 8.25557 11.5843 8.78843 12.1338C9.82859 13.2065 11 14.8259 11 16.7497C11 19.4676 8.91554 21.7497 6.25 21.7497C3.58446 21.7497 1.5 19.4676 1.5 16.7497C1.5 14.8259 2.67141 13.2065 3.71157 12.1338C4.24443 11.5843 4.77471 11.1454 5.17103 10.8441C5.36981 10.6929 6.25 10.1152 6.25 10.1152Z',
} as const;

export const IconLabsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-stroke-rounded IconLabsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLabsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-duotone-rounded IconLabsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLabsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-twotone-rounded IconLabsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLabsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-solid-rounded IconLabsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-bulk-rounded IconLabsBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLabsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-stroke-sharp IconLabsStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconLabsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="labs-solid-sharp IconLabsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLabs: TheIconSelfPack = {
  name: 'Labs',
  StrokeRounded: IconLabsStrokeRounded,
  DuotoneRounded: IconLabsDuotoneRounded,
  TwotoneRounded: IconLabsTwotoneRounded,
  SolidRounded: IconLabsSolidRounded,
  BulkRounded: IconLabsBulkRounded,
  StrokeSharp: IconLabsStrokeSharp,
  SolidSharp: IconLabsSolidSharp,
};