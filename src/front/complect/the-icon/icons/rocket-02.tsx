import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z',
  d2: 'M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14',
  d3: 'M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14',
  d4: 'M10 15V20',
  d5: 'M14 15V17',
  d6: 'M11.1307 1.57851C11.3549 1.39213 11.6365 1.25 12 1.25C12.3635 1.25 12.6451 1.39213 12.8693 1.57851C13.0459 1.72524 13.2423 1.9576 13.3935 2.13657C14.3749 3.29624 15.0833 4.72449 15.0833 6.41327V7.7143C15.0833 8.2988 15.091 8.50906 15.1324 8.6464L15.1329 8.64823C15.1476 8.69688 15.2185 8.79846 15.4542 8.97151C15.9121 9.26266 16.75 9.79551 16.75 10.8598C16.75 11.3381 16.6511 11.8487 16.2903 12.2353C15.919 12.633 15.4124 12.75 14.9358 12.75H9.06415C8.58757 12.75 8.08096 12.633 7.70973 12.2353C7.34894 11.8487 7.25 11.3381 7.25 10.8598C7.25 9.79551 8.08792 9.26266 8.54576 8.97151C8.7815 8.79846 8.85244 8.69688 8.86707 8.64823L8.86761 8.6464C8.90898 8.50906 8.91667 8.2988 8.91667 7.7143V6.41327C8.91667 4.72449 9.62507 3.29624 10.6065 2.13657C10.7577 1.95761 10.9541 1.72524 11.1307 1.57851Z',
  d7: 'M3.79358 15.8973C4.1563 14.4098 5.4649 13.25 7.11364 13.25C7.65337 13.25 8.09091 13.6753 8.09091 14.2C8.09091 14.7247 7.65337 15.15 7.11364 15.15C6.36249 15.15 5.64773 15.8002 5.64773 16.7333V17.6833H4.67045C3.91931 17.6833 3.20455 18.3335 3.20455 19.2667C3.20455 20.1998 3.91931 20.85 4.67045 20.85C5.21019 20.85 5.64773 21.2753 5.64773 21.8C5.64773 22.3247 5.21019 22.75 4.67045 22.75C2.72293 22.75 1.25 21.1318 1.25 19.2667C1.25 17.6939 2.29742 16.2966 3.79358 15.8973ZM15.9091 14.2C15.9091 13.6753 16.3466 13.25 16.8864 13.25C18.5351 13.25 19.8437 14.4098 20.2064 15.8973C21.7026 16.2966 22.75 17.6939 22.75 19.2667C22.75 21.1318 21.2771 22.75 19.3295 22.75C18.7898 22.75 18.3523 22.3247 18.3523 21.8C18.3523 21.2753 18.7898 20.85 19.3295 20.85C20.0807 20.85 20.7955 20.1998 20.7955 19.2667C20.7955 18.3335 20.0807 17.6833 19.3295 17.6833C18.7898 17.6833 18.3523 17.258 18.3523 16.7333C18.3523 15.8002 17.6375 15.15 16.8864 15.15C16.3466 15.15 15.9091 14.7247 15.9091 14.2ZM10.0455 14.2C10.5852 14.2 11.0227 14.6253 11.0227 15.15V19.9C11.0227 20.4247 10.5852 20.85 10.0455 20.85C9.50572 20.85 9.06818 20.4247 9.06818 19.9V15.15C9.06818 14.6253 9.50572 14.2 10.0455 14.2ZM13.9545 14.2C14.4943 14.2 14.9318 14.6253 14.9318 15.15V17.05C14.9318 17.5747 14.4943 18 13.9545 18C13.4148 18 12.9773 17.5747 12.9773 17.05V15.15C12.9773 14.6253 13.4148 14.2 13.9545 14.2Z',
  d8: 'M9.5 9V6.41327C9.5 4.94834 10.5 2.9999 12 2C13.5 3 14.5 4.94834 14.5 6.41327V9L16 10V12H8.00011L8 10L9.5 9Z',
  d9: 'M10 14.5V21',
  d10: 'M14 14.5V18',
  d11: 'M11.584 1.37594C11.8359 1.20801 12.1641 1.20802 12.416 1.37596C13.2836 1.95437 13.985 2.78984 14.4696 3.67076C14.9519 4.54735 15.25 5.52464 15.25 6.41327V8.59861L16.416 9.37596C16.6247 9.51506 16.75 9.74924 16.75 10V12C16.75 12.4142 16.4142 12.75 16 12.75H8.00011C7.58591 12.75 7.25013 12.4142 7.25011 12L7.25 10C7.24999 9.74926 7.37531 9.51507 7.58397 9.37596L8.75 8.59861V6.41327C8.75 5.52465 9.04811 4.54733 9.53038 3.67072C10.015 2.7898 10.7164 1.95431 11.584 1.37594Z',
  d12: 'M3.79358 15.8973C4.1563 14.4098 5.4649 13.25 7.11364 13.25V15.15C6.36249 15.15 5.64773 15.8002 5.64773 16.7333V17.6833H4.67045C3.91931 17.6833 3.20455 18.3335 3.20455 19.2667C3.20455 20.1998 3.91931 20.85 4.67045 20.85V22.75C2.72293 22.75 1.25 21.1318 1.25 19.2667C1.25 17.6939 2.29742 16.2966 3.79358 15.8973ZM18.3523 16.7333C18.3523 15.8002 17.6375 15.15 16.8864 15.15V13.25C18.5351 13.25 19.8437 14.4098 20.2064 15.8973C21.7026 16.2966 22.75 17.6939 22.75 19.2667C22.75 21.1318 21.2771 22.75 19.3295 22.75V20.85C20.0807 20.85 20.7955 20.1998 20.7955 19.2667C20.7955 18.3335 20.0807 17.6833 19.3295 17.6833H18.3523V16.7333ZM9.06818 20.85V14.675H11.0227V20.85H9.06818ZM12.9773 18V14.675H14.9318V18H12.9773Z',
} as const;

export const IconRocket02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-stroke-rounded IconRocket02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRocket02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-duotone-rounded IconRocket02DuotoneRounded"
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

export const IconRocket02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-twotone-rounded IconRocket02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
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

export const IconRocket02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-solid-rounded IconRocket02SolidRounded"
    >
      <path 
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

export const IconRocket02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-bulk-rounded IconRocket02BulkRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconRocket02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-stroke-sharp IconRocket02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
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
    </TheIconWrapper>
  );
};

export const IconRocket02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rocket-02-solid-sharp IconRocket02SolidSharp"
    >
      <path 
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

export const iconPackOfRocket02: TheIconSelfPack = {
  name: 'Rocket02',
  StrokeRounded: IconRocket02StrokeRounded,
  DuotoneRounded: IconRocket02DuotoneRounded,
  TwotoneRounded: IconRocket02TwotoneRounded,
  SolidRounded: IconRocket02SolidRounded,
  BulkRounded: IconRocket02BulkRounded,
  StrokeSharp: IconRocket02StrokeSharp,
  SolidSharp: IconRocket02SolidSharp,
};