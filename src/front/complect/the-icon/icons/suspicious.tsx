import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 16.9998C9.83563 16.372 10.8744 16 12 16C13.1256 16 14.1644 16.372 15 16.9998',
  d2: 'M7 8.01067C7 8.01067 8.40944 7.88341 9.19588 8.50798M9.19588 8.50798L8.93275 9.34267C8.82896 9.67191 9.10031 10 9.4764 10C9.87165 10 10.1327 9.64338 9.92918 9.33476C9.74877 9.06118 9.50309 8.75196 9.19588 8.50798ZM14 8.01067C14 8.01067 15.4094 7.88341 16.1959 8.50798M16.1959 8.50798L15.9328 9.34267C15.829 9.67191 16.1003 10 16.4764 10C16.8717 10 17.1327 9.64338 16.9292 9.33476C16.7488 9.06118 16.5031 8.75196 16.1959 8.50798Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.54954 16.4002C9.5106 15.6782 10.7064 15.25 12 15.25C13.2937 15.25 14.4895 15.6782 15.4505 16.4002C15.7817 16.649 15.8485 17.1192 15.5997 17.4503C15.3509 17.7815 14.8807 17.8483 14.5495 17.5995C13.8393 17.0659 12.9577 16.75 12 16.75C11.0424 16.75 10.1607 17.0659 9.45054 17.5995C9.11938 17.8483 8.64922 17.7815 8.40042 17.4503C8.15161 17.1192 8.21838 16.649 8.54954 16.4002ZM6.25309 8.07811C6.29032 8.49053 6.65475 8.79471 7.06715 8.75766C7.09803 8.75592 7.18301 8.75137 7.24383 8.75046C7.36647 8.74861 7.537 8.75174 7.72649 8.77119C7.92804 8.79188 8.12123 8.82816 8.29196 8.88098L8.2175 9.11718C7.93235 10.0217 8.69425 10.75 9.47644 10.75C9.89752 10.75 10.3008 10.5582 10.5422 10.2126C10.7984 9.84594 10.8349 9.34578 10.5554 8.92189C10.3496 8.60981 10.0532 8.23109 9.66236 7.92066C9.09859 7.47293 8.37374 7.32975 7.87965 7.27903C7.61848 7.25222 7.3875 7.24813 7.22129 7.25063C7.14262 7.25181 7.00001 7.25989 6.9424 7.26315L6.94236 7.26315L6.94226 7.26316L6.93261 7.26371C6.52007 7.30095 6.21584 7.66557 6.25309 8.07811ZM13.2531 8.07811C13.2903 8.49053 13.6548 8.79471 14.0671 8.75766C14.098 8.75592 14.183 8.75137 14.2438 8.75046C14.3665 8.74861 14.537 8.75174 14.7265 8.77119C14.928 8.79188 15.1212 8.82816 15.292 8.88098L15.2175 9.11718C14.9324 10.0217 15.6943 10.75 16.4764 10.75C16.8975 10.75 17.3008 10.5582 17.5422 10.2126C17.7984 9.84594 17.8349 9.34578 17.5554 8.92189C17.3496 8.60981 17.0532 8.23109 16.6624 7.92066C16.0986 7.47293 15.3737 7.32975 14.8797 7.27903C14.6185 7.25222 14.3875 7.24813 14.2213 7.25063C14.1426 7.25181 13.9998 7.2599 13.9423 7.26316L13.9326 7.26371C13.5201 7.30095 13.2158 7.66557 13.2531 8.07811Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.54954 16.4002C9.5106 15.6782 10.7064 15.25 12 15.25C13.2937 15.25 14.4895 15.6782 15.4505 16.4002C15.7817 16.649 15.8485 17.1192 15.5997 17.4503C15.3509 17.7815 14.8807 17.8483 14.5495 17.5995C13.8393 17.0659 12.9577 16.75 12 16.75C11.0424 16.75 10.1607 17.0659 9.45054 17.5995C9.11938 17.8483 8.64922 17.7815 8.40042 17.4503C8.15161 17.1192 8.21838 16.649 8.54954 16.4002Z',
  d6: 'M14.0671 8.75766C13.6548 8.79471 13.2903 8.49053 13.2531 8.07811C13.2158 7.66557 13.5201 7.30095 13.9326 7.2637C13.9819 7.26093 14.1377 7.25188 14.2213 7.25063C14.3875 7.24813 14.6185 7.25222 14.8797 7.27903C15.3737 7.32975 16.0986 7.47293 16.6624 7.92067C17.0532 8.23109 17.3496 8.60981 17.5554 8.92189C17.8349 9.34578 17.7984 9.84594 17.5422 10.2126C17.3008 10.5582 16.8975 10.75 16.4764 10.75C15.6943 10.75 14.9324 10.0217 15.2175 9.11718L15.292 8.88098C15.1212 8.82816 14.928 8.79188 14.7265 8.77119C14.537 8.75174 14.3665 8.74861 14.2438 8.75046C14.183 8.75137 14.098 8.75592 14.0671 8.75766Z',
  d7: 'M7.06715 8.75766C6.65475 8.79471 6.29032 8.49053 6.25309 8.07811C6.21584 7.66557 6.52007 7.30095 6.93261 7.2637C6.98187 7.26093 7.13769 7.25188 7.22129 7.25063C7.3875 7.24813 7.61848 7.25222 7.87965 7.27903C8.37374 7.32975 9.09859 7.47293 9.66236 7.92067C10.0532 8.23109 10.3496 8.60981 10.5554 8.92189C10.8349 9.34578 10.7984 9.84594 10.5422 10.2126C10.3008 10.5582 9.89752 10.75 9.47644 10.75C8.69425 10.75 7.93235 10.0217 8.2175 9.11718L8.29196 8.88098C8.12123 8.82816 7.92804 8.79188 7.72649 8.77119C7.537 8.75174 7.36647 8.74861 7.24383 8.75046C7.18301 8.75137 7.09803 8.75592 7.06715 8.75766Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.54883 16.4002C9.50988 15.6782 10.7057 15.25 11.9993 15.25C13.293 15.25 14.4888 15.6782 15.4498 16.4002L14.5488 17.5995C13.8386 17.0659 12.9569 16.75 11.9993 16.75C11.0417 16.75 10.16 17.0659 9.44983 17.5995L8.54883 16.4002ZM7.13498 7.25063C7.04997 7.25188 6.8418 7.26367 6.8418 7.26367L6.97823 8.75775C6.97823 8.75775 7.45603 8.75183 7.64873 8.77128C7.85368 8.79197 8.05014 8.82826 8.22375 8.88107L8.14804 9.11729C7.85807 10.0219 8.63285 10.7502 9.42826 10.7502C9.85645 10.7502 10.2665 10.5584 10.5121 10.2128C10.7725 9.8461 10.8097 9.34591 10.5254 8.92198C10.3161 8.60989 10.0148 8.23115 9.61732 7.9207C9.04402 7.47295 8.30692 7.32975 7.80448 7.27903C7.53889 7.25222 7.304 7.24813 7.13498 7.25063ZM13.9602 7.26367L14.101 8.75743C14.2257 8.75558 14.5744 8.75183 14.7671 8.77128C14.972 8.79197 15.1685 8.82826 15.3421 8.88107L15.2664 9.11729C14.9764 10.0219 15.7512 10.7502 16.5466 10.7502C16.9748 10.7502 17.3849 10.5584 17.6304 10.2128C17.8909 9.8461 17.928 9.34591 17.6438 8.92198C17.4345 8.60989 17.1332 8.23115 16.7357 7.9207C16.1624 7.47295 15.4253 7.32975 14.9228 7.27903C14.6572 7.25222 14.4224 7.24813 14.2533 7.25063C14.1683 7.25188 13.9602 7.26367 13.9602 7.26367Z',
} as const;

export const IconSuspiciousStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-stroke-rounded IconSuspiciousStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSuspiciousDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-duotone-rounded IconSuspiciousDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSuspiciousTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-twotone-rounded IconSuspiciousTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSuspiciousSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-solid-rounded IconSuspiciousSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuspiciousBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-bulk-rounded IconSuspiciousBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSuspiciousStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-stroke-sharp IconSuspiciousStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSuspiciousSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="suspicious-solid-sharp IconSuspiciousSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSuspicious: TheIconSelfPack = {
  name: 'Suspicious',
  StrokeRounded: IconSuspiciousStrokeRounded,
  DuotoneRounded: IconSuspiciousDuotoneRounded,
  TwotoneRounded: IconSuspiciousTwotoneRounded,
  SolidRounded: IconSuspiciousSolidRounded,
  BulkRounded: IconSuspiciousBulkRounded,
  StrokeSharp: IconSuspiciousStrokeSharp,
  SolidSharp: IconSuspiciousSolidSharp,
};