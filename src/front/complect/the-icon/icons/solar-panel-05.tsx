import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8',
  d2: 'M15.7933 11H8.20668C7.2338 11 6.74735 11 6.37446 11.2671C6.00157 11.5342 5.83077 12.005 5.48917 12.9466L4.76359 14.9466C4.09554 16.7881 3.76151 17.7088 4.19435 18.3544C4.62719 19 5.57849 19 7.48111 19H16.5189C18.4215 19 19.3728 19 19.8057 18.3544C20.2385 17.7088 19.9045 16.7881 19.2364 14.9466L18.5108 12.9466C18.1692 12.005 17.9984 11.5342 17.6255 11.2671C17.2526 11 16.7662 11 15.7933 11Z',
  d3: 'M12 11V19',
  d4: 'M19 15H5',
  d5: 'M12 19V22M12 22H14M12 22H10',
  d6: 'M12 2.5V2',
  d7: 'M17.5 8H18',
  d8: 'M6 8L6.5 8',
  d9: 'M15.8887 4.11088L16.2422 3.75732',
  d10: 'M7.75781 3.75781L8.11137 4.11137',
  d11: 'M4.74414 15L5.48908 12.9466C5.83068 12.005 6.00148 11.5342 6.37438 11.2671C6.74727 11 7.23371 11 8.2066 11H11.9999V15H19.2557C19.9108 16.8059 20.2342 17.7151 19.8056 18.3544C19.3727 19 18.4214 19 16.5188 19H11.9999V15H4.74414Z',
  d12: 'M12 5C10.3431 5 9 6.34315 9 8H15C15 6.34315 13.6569 5 12 5Z',
  d13: 'M8.25 8C8.25 5.92893 9.92893 4.25 12 4.25C14.0711 4.25 15.75 5.92893 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z',
  d14: 'M11.25 10.25H8.16776C7.71459 10.25 7.31271 10.2499 6.97961 10.2883C6.61685 10.3301 6.26407 10.4235 5.93757 10.6574C5.61302 10.8899 5.40857 11.1938 5.24676 11.5233C5.09658 11.8291 4.95662 12.2149 4.7968 12.6555L4.21835 14.25H11.25V10.25Z',
  d15: 'M3.68045 15.75C3.52727 16.1972 3.40489 16.5956 3.33182 16.9457C3.20241 17.5659 3.18942 18.2025 3.57126 18.772C3.95769 19.3484 4.55336 19.5663 5.17348 19.6608C5.75993 19.7501 6.52085 19.7501 7.42041 19.75H11.25V15.75H3.68045Z',
  d16: 'M12.75 19.75H16.5793C17.4789 19.7501 18.2398 19.7501 18.8263 19.6608C19.4464 19.5663 20.042 19.3484 20.4285 18.772C20.8103 18.2025 20.7973 17.5659 20.6679 16.9457C20.5948 16.5956 20.4725 16.1972 20.3193 15.75H12.75V19.75Z',
  d17: 'M19.7814 14.25L19.2029 12.6555C19.0431 12.2149 18.9031 11.8291 18.753 11.5233C18.5912 11.1938 18.3867 10.8899 18.0622 10.6574C17.7357 10.4235 17.3829 10.3301 17.0201 10.2883C16.687 10.2499 16.2852 10.25 15.8321 10.25H12.75V14.25H19.7814Z',
  d18: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.5C12.75 2.91421 12.4142 3.25 12 3.25C11.5858 3.25 11.25 2.91421 11.25 2.5V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d19: 'M16.75 8C16.75 7.58579 17.0858 7.25 17.5 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H17.5C17.0858 8.75 16.75 8.41421 16.75 8Z',
  d20: 'M6.5 8.75L6 8.75C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25L6.5 7.25C6.91421 7.25 7.25 7.58579 7.25 8C7.25 8.41421 6.91421 8.75 6.5 8.75Z',
  d21: 'M16.7726 3.22699C17.0654 3.51989 17.0654 3.99476 16.7726 4.28765L16.419 4.64121C16.1261 4.9341 15.6512 4.9341 15.3583 4.64121C15.0654 4.34831 15.0654 3.87344 15.3583 3.58055L15.7119 3.22699C16.0048 2.9341 16.4797 2.9341 16.7726 3.22699Z',
  d22: 'M7.22748 3.22748C7.52038 2.93459 7.99525 2.93459 8.28814 3.22748L8.6417 3.58104C8.93459 3.87393 8.93459 4.3488 8.6417 4.6417C8.3488 4.93459 7.87393 4.93459 7.58104 4.6417L7.22748 4.28814C6.93459 3.99525 6.93459 3.52038 7.22748 3.22748Z',
  d23: 'M11.25 19.7495H12.75V21.25H14C14.4142 21.25 14.75 21.5858 14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25 22.4142 9.25 22C9.25 21.5858 9.58579 21.25 10 21.25H11.25V19.7495Z',
  d24: 'M12.75 10.25H8.16776H8.16772C7.71456 10.25 7.3127 10.25 6.97961 10.2883C6.61685 10.3301 6.26407 10.4235 5.93757 10.6574C5.61302 10.8899 5.40857 11.1938 5.24676 11.5233C5.09658 11.8291 4.95662 12.2149 4.7968 12.6555L3.68045 15.75C3.52727 16.1972 3.40489 16.5956 3.33182 16.9457C3.20241 17.5659 3.18942 18.2025 3.57126 18.772C3.95769 19.3484 4.55336 19.5663 5.17348 19.6608C5.75993 19.7501 6.52085 19.7501 7.42041 19.75H12.75H16.5793C17.4789 19.7501 18.2398 19.7501 18.8263 19.6608C19.4464 19.5663 20.042 19.3484 20.4285 18.772C20.8103 18.2025 20.7973 17.5659 20.6679 16.9457C20.5948 16.5956 20.4725 16.1972 20.3193 15.75L19.2029 12.6555L19.2029 12.6555C19.0431 12.2149 18.9031 11.8291 18.753 11.5233C18.5912 11.1938 18.3867 10.8899 18.0622 10.6574C17.7357 10.4235 17.3829 10.3301 17.0201 10.2883C16.687 10.25 16.2853 10.25 15.8321 10.25H15.8321H12.75Z',
  d25: 'M4.2218 14.25H11.2504V10.25H12.7502L12.7504 14.25H19.7784L20.3195 15.75L12.7504 15.75V19.75H11.2504V15.75L3.68066 15.75L4.2218 14.25Z',
  d26: 'M17.5 10.9999L6.5 10.9999L4 18.9999L20 19L17.5 10.9999Z',
  d27: 'M12 11V19M19 15H5',
  d28: 'M9.87803 7.25H14.122C13.8131 6.37611 12.9797 5.75 12 5.75C11.0203 5.75 10.1869 6.37611 9.87803 7.25ZM8.25 8C8.25 5.92893 9.92893 4.25 12 4.25C14.0711 4.25 15.75 5.92893 15.75 8V8.75H8.25V8Z',
  d29: 'M11.25 10.25V14.25H4.69862L5.78415 10.7763C5.88199 10.4632 6.17197 10.25 6.50001 10.25L11.25 10.25Z',
  d30: 'M12.75 10.25V14.25H19.3014L18.2159 10.7763C18.1181 10.4632 17.8281 10.25 17.5001 10.25L12.75 10.25Z',
  d31: 'M19.7702 15.75H12.75V19.7501L20 19.7501C20.2386 19.7501 20.463 19.6366 20.6043 19.4444C20.7456 19.2521 20.7871 19.0041 20.7159 18.7764L19.7702 15.75Z',
  d32: 'M11.25 19.7501V15.75H4.22987L3.28415 18.7763C3.21298 19.0041 3.25441 19.2521 3.39574 19.4443C3.53706 19.6365 3.76142 19.75 4 19.75L11.25 19.7501Z',
  d33: 'M12.75 1.25V3.25H11.25V1.25H12.75Z',
  d34: 'M16.75 7.25H18.75V8.75H16.75V7.25Z',
  d35: 'M7.25 8.75L5.25 8.75L5.25 7.25L7.25 7.25L7.25 8.75Z',
  d36: 'M17.303 3.75732L15.8888 5.17153L14.8281 4.11087L16.2423 2.69666L17.303 3.75732Z',
  d37: 'M7.75793 2.69714L9.17214 4.11136L8.11148 5.17202L6.69727 3.7578L7.75793 2.69714Z',
  d38: 'M11.25 19.7501L12.75 19.7501V21.2501H14.75V22.7501H9.25V21.2501H11.25V19.7501Z',
} as const;

export const IconSolarPanel05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-stroke-rounded IconSolarPanel05StrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-duotone-rounded IconSolarPanel05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-twotone-rounded IconSolarPanel05TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-solid-rounded IconSolarPanel05SolidRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-bulk-rounded IconSolarPanel05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-stroke-sharp IconSolarPanel05StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-05-solid-sharp IconSolarPanel05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPanel05: TheIconSelfPack = {
  name: 'SolarPanel05',
  StrokeRounded: IconSolarPanel05StrokeRounded,
  DuotoneRounded: IconSolarPanel05DuotoneRounded,
  TwotoneRounded: IconSolarPanel05TwotoneRounded,
  SolidRounded: IconSolarPanel05SolidRounded,
  BulkRounded: IconSolarPanel05BulkRounded,
  StrokeSharp: IconSolarPanel05StrokeSharp,
  SolidSharp: IconSolarPanel05SolidSharp,
};