import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 18H12.0118',
  d2: 'M8.25 15C10.25 13 13.75 13 15.75 15',
  d3: 'M18.5 12C18.4235 11.9323 18.3464 11.866 18.2687 11.801M5.5 12C8.06378 9.86352 11.1338 9.0964 14 9.69866',
  d4: 'M2 9C5.46566 6.07345 9.24828 4.75279 13 5.03799',
  d5: 'M22.0002 5L16.0002 11M22.0002 11L16.0002 5',
  d6: 'M5.5 12C8.06378 9.86352 11.1338 9.0964 14 9.69866',
  d7: 'M18.5009 11.9997C18.4243 11.932 18.3472 11.8657 18.2695 11.8008',
  d8: 'M10.75 18.0001C10.75 17.3098 11.3071 16.7501 11.9942 16.7501C12.6766 16.7501 13.25 17.3096 13.25 18.0001C13.25 18.6907 12.6766 19.2501 11.9942 19.2501C11.3071 19.2501 10.75 18.6905 10.75 18.0001Z',
  d9: 'M7.54292 14.293C9.93344 11.9024 14.0666 11.9024 16.4571 14.293C16.8477 14.6835 16.8477 15.3166 16.4571 15.7072C16.0666 16.0977 15.4334 16.0977 15.0429 15.7072C13.4334 14.0977 10.5666 14.0977 8.95713 15.7072C8.5666 16.0977 7.93344 16.0977 7.54292 15.7072C7.15239 15.3166 7.15239 14.6835 7.54292 14.293Z',
  d10: 'M4.85984 11.2318C7.4789 9.04928 10.6279 8.15484 13.6519 8.61944C14.1978 8.7033 14.5723 9.21381 14.4884 9.75969C14.4046 10.3056 13.894 10.6801 13.3482 10.5962C10.9319 10.225 8.35168 10.9254 6.14021 12.7683C5.71593 13.1218 5.08536 13.0645 4.7318 12.6402C4.37824 12.216 4.43556 11.5854 4.85984 11.2318ZM17.7144 11.3107C18.0787 10.8955 18.7105 10.8543 19.1256 11.2185L19.1626 11.2511C19.5763 11.6171 19.6149 12.249 19.249 12.6627C18.883 13.0763 18.251 13.115 17.8374 12.749L17.8066 12.7219C17.3915 12.3576 17.3502 11.7258 17.7144 11.3107Z',
  d11: 'M1.35484 8.23603C4.98611 5.16964 9.02029 3.73263 13.0758 4.04092C13.6265 4.08279 14.039 4.56315 13.9971 5.11385C13.9553 5.66454 13.4749 6.07703 12.9242 6.03517C9.4763 5.77306 5.94526 6.97738 2.6452 9.76409C2.22324 10.1204 1.59231 10.0672 1.23599 9.64524C0.879668 9.22327 0.93288 8.59235 1.35484 8.23603Z',
  d12: 'M15.2929 4.29289C15.6834 3.90237 16.3166 3.90237 16.7071 4.29289L19 6.58579L21.2929 4.29289C21.6834 3.90237 22.3166 3.90237 22.7071 4.29289C23.0976 4.68342 23.0976 5.31658 22.7071 5.70711L20.4142 8L22.7071 10.2929C23.0976 10.6834 23.0976 11.3166 22.7071 11.7071C22.3166 12.0976 21.6834 12.0976 21.2929 11.7071L19 9.41421L16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071C14.9024 11.3166 14.9024 10.6834 15.2929 10.2929L17.5858 8L15.2929 5.70711C14.9024 5.31658 14.9024 4.68342 15.2929 4.29289Z',
  d13: 'M5.5 12C7.91527 9.98728 10.7799 9.18987 13.5 9.60778',
  d14: 'M19.7073 8.20711L22.0002 10.5L20.5859 11.9142L18.293 9.62132L16.0002 11.9142L14.5859 10.5L16.8788 8.20711L14.5859 5.91421L16.0002 4.5L18.293 6.79289L20.5859 4.5L22.0002 5.91421L19.7073 8.20711Z',
  d15: 'M11.9999 4.5C8.54366 4.50002 5.1329 5.76356 2 8.21401L3.31491 9.72465C6.12597 7.5501 9.08526 6.50001 11.9999 6.5L11.9999 4.5Z',
  d16: 'M15.0413 16.2071C13.4323 14.5976 10.5664 14.5976 8.95744 16.2071L7.64246 14.6964C10.0127 12.4345 13.9863 12.4345 16.3564 14.6965L15.0413 16.2071Z',
  d17: 'M6.29179 13.1447L4.97802 11.6353C7.10542 9.90341 9.56254 9.02143 11.9999 9.00039V11.0004C10.0379 11.0199 8.04943 11.7311 6.29179 13.1447Z',
  d18: 'M12 17.5C11.4477 17.5 11 17.9477 11 18.5C11 19.0523 11.4477 19.5 12 19.5H12.0118C12.5641 19.5 13.0118 19.0523 13.0118 18.5C13.0118 17.9477 12.5641 17.5 12.0118 17.5H12Z',
} as const;

export const IconWifiDisconnected03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-stroke-rounded IconWifiDisconnected03StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-duotone-rounded IconWifiDisconnected03DuotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-twotone-rounded IconWifiDisconnected03TwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-solid-rounded IconWifiDisconnected03SolidRounded"
    >
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

export const IconWifiDisconnected03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-bulk-rounded IconWifiDisconnected03BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-stroke-sharp IconWifiDisconnected03StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiDisconnected03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-disconnected-03-solid-sharp IconWifiDisconnected03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiDisconnected03: TheIconSelfPack = {
  name: 'WifiDisconnected03',
  StrokeRounded: IconWifiDisconnected03StrokeRounded,
  DuotoneRounded: IconWifiDisconnected03DuotoneRounded,
  TwotoneRounded: IconWifiDisconnected03TwotoneRounded,
  SolidRounded: IconWifiDisconnected03SolidRounded,
  BulkRounded: IconWifiDisconnected03BulkRounded,
  StrokeSharp: IconWifiDisconnected03StrokeSharp,
  SolidSharp: IconWifiDisconnected03SolidSharp,
};