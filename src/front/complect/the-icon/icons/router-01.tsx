import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21Z',
  d2: 'M8 3.47776C9.14883 2.54314 10.5209 2 11.9946 2C13.4729 2 14.849 2.54657 16 3.48661M14.1743 6C13.5182 5.59087 12.7779 5.36068 11.9946 5.36068C11.2152 5.36068 10.4784 5.58856 9.82477 5.99385',
  d3: 'M12 9H12.0064',
  d4: 'M17.9998 17H18.0088',
  d5: 'M13.9998 17H14.0088',
  d6: 'M6 17H10',
  d7: 'M11.9946 1C10.2653 1 8.67508 1.63946 7.36896 2.70203C6.94054 3.05057 6.87578 3.68041 7.22431 4.10883C7.57284 4.53725 8.20269 4.60201 8.63111 4.25348C9.62265 3.44682 10.7765 3 11.9946 3C13.2165 3 14.3738 3.44963 15.3675 4.26114C15.7952 4.61048 16.4252 4.54691 16.7746 4.11916C17.1239 3.6914 17.0603 3.06143 16.6326 2.71209C15.3241 1.64352 13.7294 1 11.9946 1Z',
  d8: 'M11.9946 4.36068C11.0147 4.36068 10.0971 4.64836 9.29784 5.14396C8.82846 5.43499 8.68388 6.05143 8.97491 6.52081C9.26595 6.99019 9.88239 7.13477 10.3518 6.84373C10.8598 6.52876 11.4157 6.36068 11.9946 6.36068C12.5764 6.36068 13.1351 6.53045 13.6452 6.84854C14.1138 7.14077 14.7306 6.99777 15.0228 6.52913C15.3151 6.0605 15.1721 5.44369 14.7034 5.15146C13.9013 4.65129 12.9795 4.36068 11.9946 4.36068Z',
  d9: 'M12 8C11.4477 8 11 8.44772 11 9C11 9.55229 11.4477 10 12 10H12.0064C12.5587 10 13.0064 9.55229 13.0064 9C13.0064 8.44772 12.5587 8 12.0064 8H12Z',
  d10: 'M18.052 12.25H5.948H5.94797C5.0495 12.25 4.3003 12.2499 3.70552 12.3299C3.07773 12.4143 2.51093 12.6 2.05546 13.0555C1.59999 13.5109 1.41432 14.0777 1.32991 14.7055C1.24995 15.3003 1.24997 16.0495 1.25 16.948V17.052C1.24997 17.9505 1.24995 18.6997 1.32991 19.2945C1.41432 19.9223 1.59999 20.4891 2.05546 20.9445C2.51093 21.4 3.07773 21.5857 3.70552 21.6701C4.3003 21.7501 5.04951 21.75 5.94798 21.75H5.94801H18.052H18.052C18.9505 21.75 19.6997 21.7501 20.2945 21.6701C20.9223 21.5857 21.4891 21.4 21.9445 20.9445C22.4 20.4891 22.5857 19.9223 22.6701 19.2945C22.7501 18.6997 22.75 17.9505 22.75 17.052V16.948C22.75 16.0495 22.7501 15.3003 22.6701 14.7055C22.5857 14.0777 22.4 13.5109 21.9445 13.0555C21.4891 12.6 20.9223 12.4143 20.2945 12.3299C19.6997 12.2499 18.9505 12.25 18.052 12.25H18.052ZM5 17C5 16.4477 5.44772 16 6 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H6C5.44772 18 5 17.5523 5 17ZM14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H14.009C14.5613 18 15.009 17.5523 15.009 17C15.009 16.4477 14.5613 16 14.009 16H14ZM18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18H18.009C18.5613 18 19.009 17.5523 19.009 17C19.009 16.4477 18.5613 16 18.009 16H18Z',
  d11: 'M22 21H2V13H22V21Z',
  d12: 'M11.9928 1.75C10.2635 1.75 8.67331 2.38946 7.36719 3.45203L8.62934 5.00348C9.62088 4.19682 10.7747 3.75 11.9928 3.75C13.2147 3.75 14.3721 4.19963 15.3657 5.01114L16.6308 3.46209C15.3224 2.39352 13.7276 1.75 11.9928 1.75Z',
  d13: 'M11.9928 5.11068C11.0129 5.11068 10.0954 5.39836 9.29607 5.89396L10.35 7.59373C10.858 7.27876 11.4139 7.11068 11.9928 7.11068C12.5746 7.11068 13.1333 7.28045 13.6434 7.59854L14.7017 5.90146C13.8996 5.40129 12.9777 5.11068 11.9928 5.11068Z',
  d14: 'M12 8.75C11.4477 8.75 11 9.19772 11 9.75C11 10.3023 11.4477 10.75 12 10.75H12.0064C12.5586 10.75 13.0064 10.3023 13.0064 9.75C13.0064 9.19772 12.5586 8.75 12.0064 8.75H12Z',
  d15: 'M2 12.75C1.58579 12.75 1.25 13.0858 1.25 13.5V21.5C1.25 21.9142 1.58579 22.25 2 22.25H22C22.4142 22.25 22.75 21.9142 22.75 21.5V13.5C22.75 13.0858 22.4142 12.75 22 12.75H2ZM5 18.5H9.9973V16.5H5V18.5ZM12.9951 16.5H15.0027V18.5H12.9951V16.5ZM16.9924 16.5H19V18.5H16.9924V16.5Z',
} as const;

export const IconRouter01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-stroke-rounded IconRouter01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRouter01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-duotone-rounded IconRouter01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRouter01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-twotone-rounded IconRouter01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-solid-rounded IconRouter01SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-bulk-rounded IconRouter01BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-stroke-sharp IconRouter01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRouter01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="router-01-solid-sharp IconRouter01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRouter01: TheIconSelfPack = {
  name: 'Router01',
  StrokeRounded: IconRouter01StrokeRounded,
  DuotoneRounded: IconRouter01DuotoneRounded,
  TwotoneRounded: IconRouter01TwotoneRounded,
  SolidRounded: IconRouter01SolidRounded,
  BulkRounded: IconRouter01BulkRounded,
  StrokeSharp: IconRouter01StrokeSharp,
  SolidSharp: IconRouter01SolidSharp,
};