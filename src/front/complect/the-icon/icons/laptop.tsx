import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5',
  d2: 'M12 5.5H12.009',
  d3: 'M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z',
  d4: 'M20 6.5V14.5H4V6.5C4 4.61438 4 3.67157 4.58579 3.08579C5.17157 2.5 6.11438 2.5 8 2.5H16C17.8856 2.5 18.8284 2.5 19.4142 3.08579C20 3.67157 20 4.61438 20 6.5Z',
  d5: 'M11.9955 5C11.4457 5 11 5.44772 11 6C11 6.55228 11.4457 7 11.9955 7H12.0045C12.5543 7 13 6.55228 13 6C13 5.44772 12.5543 5 12.0045 5H11.9955Z',
  d6: 'M5.92221 1.83215C6.53387 1.74991 7.29769 1.74995 8.18417 1.75H15.8156C16.7021 1.74995 17.4659 1.74991 18.0775 1.83215C18.7331 1.92028 19.3614 2.11902 19.8711 2.62868C20.3807 3.13835 20.5795 3.7667 20.6676 4.42221C20.7498 5.03387 20.7498 5.79769 20.7498 6.68417L20.7498 14.25L20.7498 14.2913C20.7511 14.3426 20.7573 14.3679 20.7796 14.4141L20.7896 14.4338L21.1655 15.1653C21.8895 16.5014 22.3771 17.5653 22.6026 18.4487C22.8346 19.3577 22.8073 20.1495 22.413 20.8656C21.9723 21.6661 21.1848 21.9782 20.3015 22.1165C19.4479 22.2501 18.3095 22.25 16.913 22.25H16.913H16.913H11.9999H7.08676H7.08674H7.08672C5.69027 22.25 4.55188 22.2501 3.69825 22.1165C2.81497 21.9782 2.02749 21.6661 1.58675 20.8656C1.1925 20.1495 1.16515 19.3577 1.39719 18.4487C1.62267 17.5653 2.11021 16.5014 2.83421 15.1653L3.21015 14.4338L3.22019 14.4141C3.2425 14.3679 3.24862 14.3426 3.24991 14.2913L3.25 14.25L3.25 6.68417C3.24995 5.79769 3.24991 5.03387 3.33215 4.42221C3.42028 3.7667 3.61902 3.13835 4.12868 2.62868C4.63835 2.11902 5.2667 1.92028 5.92221 1.83215ZM5.25 6.75V13.15C5.25 13.4328 5.25 13.5743 5.33787 13.6621C5.42574 13.75 5.56716 13.75 5.85 13.75H11.9999H18.1497C18.4326 13.75 18.574 13.75 18.6619 13.6621C18.7497 13.5743 18.7497 13.4328 18.7497 13.15V6.75C18.7497 5.77892 18.7476 5.15121 18.6854 4.6887C18.6271 4.25496 18.533 4.11902 18.4569 4.04289C18.3807 3.96677 18.2448 3.87262 17.811 3.81431C17.3485 3.75212 16.7208 3.75 15.7497 3.75H8.25C7.27892 3.75 6.65121 3.75212 6.1887 3.81431C5.75496 3.87262 5.61902 3.96677 5.54289 4.04289C5.46677 4.11902 5.37262 4.25496 5.31431 4.6887C5.25212 5.15121 5.25 5.77892 5.25 6.75Z',
  d7: 'M20 14.5V2.5L4 2.5V14.5',
  d8: 'M2 21.5L4.01911 14.5H19.9514L21.9996 21.5H2Z',
  d9: 'M11.002 5H13.002V7H11.002V5Z',
  d10: 'M22.7143 21.0056L20.7974 14.3038V1.75H3.20613V14.3038L1.28955 21.0057C1.20532 21.3002 1.26438 21.6172 1.44905 21.8617C1.63372 22.1062 1.9226 22.25 2.22925 22.25H21.7747C22.0813 22.25 22.3702 22.1062 22.5549 21.8617C22.7395 21.6171 22.7986 21.3002 22.7143 21.0056ZM18.8442 3.70239V13.4643H5.16211V3.70239H18.8442Z',
} as const;

export const IconLaptopStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-stroke-rounded IconLaptopStrokeRounded"
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

export const IconLaptopDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-duotone-rounded IconLaptopDuotoneRounded"
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

export const IconLaptopTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-twotone-rounded IconLaptopTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLaptopSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-solid-rounded IconLaptopSolidRounded"
    >
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

export const IconLaptopBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-bulk-rounded IconLaptopBulkRounded"
    >
      <path 
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

export const IconLaptopStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-stroke-sharp IconLaptopStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-solid-sharp IconLaptopSolidSharp"
    >
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

export const iconPackOfLaptop: TheIconSelfPack = {
  name: 'Laptop',
  StrokeRounded: IconLaptopStrokeRounded,
  DuotoneRounded: IconLaptopDuotoneRounded,
  TwotoneRounded: IconLaptopTwotoneRounded,
  SolidRounded: IconLaptopSolidRounded,
  BulkRounded: IconLaptopBulkRounded,
  StrokeSharp: IconLaptopStrokeSharp,
  SolidSharp: IconLaptopSolidSharp,
};