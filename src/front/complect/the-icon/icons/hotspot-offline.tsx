import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12',
  d2: 'M4 20.001C2.74418 18.3295 2 16.2516 2 14C2 10.7288 3.57069 7.82446 5.99903 6',
  d3: 'M8.5 4.62961C9.58934 4.22255 10.7687 4 12 4C17.5228 4 22 8.47715 22 14C22 15.2313 21.7775 16.4107 21.3704 17.5',
  d4: 'M7.50087 18C6.56753 16.9385 6 15.5367 6 14C6 11.913 7.04673 10.0749 8.63494 9M16.2877 18C16.5573 17.6934 16.7963 17.3584 17 17',
  d5: 'M18 14C18 10.6863 15.3137 8 12 8',
  d6: 'M2 2L22 22',
  d7: 'M12 16C13.1046 16 14 15.1046 14 14L12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z',
  d8: 'M9.25 14C9.25 12.4812 10.4812 11.25 12 11.25H12.3107L14.75 13.6893V14C14.75 15.5188 13.5188 16.75 12 16.75C10.4812 16.75 9.25 15.5188 9.25 14Z',
  d9: 'M6.79852 5.39938C7.13026 5.84093 7.04125 6.46781 6.5997 6.79955C4.41194 8.44326 3 11.0566 3 14.0001C3 16.0277 3.66932 17.8961 4.79949 19.4004C5.13124 19.8419 5.04222 20.4688 4.60067 20.8005C4.15913 21.1323 3.53225 21.0433 3.20051 20.6017C1.81903 18.763 1 16.4757 1 14.0001C1 10.4011 2.72943 7.20577 5.39835 5.20056C5.8399 4.86882 6.46677 4.95784 6.79852 5.39938Z',
  d10: 'M12.0003 5C11.0579 5 10.1511 5.14451 9.29992 5.41185C8.77301 5.57734 8.21171 5.28436 8.04622 4.75745C7.88073 4.23054 8.17371 3.66924 8.70062 3.50375C9.7435 3.1762 10.8523 3 12.0003 3C18.0754 3 23.0003 7.92487 23.0003 14C23.0003 15.148 22.8241 16.2568 22.4965 17.2996C22.331 17.8266 21.7697 18.1195 21.2428 17.954C20.7159 17.7886 20.4229 17.2273 20.5884 16.7004C20.8558 15.8492 21.0003 14.9424 21.0003 14C21.0003 9.02944 16.9708 5 12.0003 5Z',
  d11: 'M9.46309 8.4396C9.77265 8.89697 9.65282 9.51869 9.19545 9.82825C7.87454 10.7223 7 12.254 7 14.0001C7 15.2866 7.47421 16.4553 8.25186 17.3398C8.61654 17.7545 8.57594 18.3864 8.16118 18.7511C7.74642 19.1158 7.11455 19.0752 6.74987 18.6604C5.66085 17.4218 5 15.787 5 14.0001C5 11.5723 6.21892 9.42779 8.07444 8.17195C8.53181 7.86239 9.15353 7.98222 9.46309 8.4396ZM17.4941 16.1307C17.9742 16.4035 18.1423 17.014 17.8694 17.4942C17.6319 17.9121 17.3531 18.3028 17.0387 18.6604C16.674 19.0752 16.0421 19.1158 15.6274 18.7511C15.2126 18.3864 15.172 17.7545 15.5367 17.3398C15.7614 17.0843 15.9607 16.8049 16.1306 16.506C16.4034 16.0259 17.0139 15.8578 17.4941 16.1307Z',
  d12: 'M11.5034 7.91784C11.5488 7.36742 12.0319 6.95803 12.5823 7.00344C15.9846 7.28412 18.716 10.0155 18.9967 13.4178C19.0421 13.9683 18.6327 14.4513 18.0823 14.4967C17.5319 14.5421 17.0488 14.1327 17.0034 13.5823C16.8032 11.1547 14.8454 9.19694 12.4178 8.99667C11.8674 8.95126 11.458 8.46825 11.5034 7.91784Z',
  d13: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d14: 'M4 20.0005C2.74418 18.329 2 16.2512 2 13.9995C2 10.8143 3.48927 7.9768 5.80949 6.14551',
  d15: 'M7.50087 18C6.56753 16.9385 6 15.5367 6 14C6 11.913 7.04673 10.0749 8.63494 9',
  d16: 'M21.3329 22.75L1.24707 2.66421L2.66128 1.25L22.7471 21.3358L21.3329 22.75Z',
  d17: 'M12 5.25C16.9706 5.25 21 9.27944 21 14.25C21 15.2199 20.8469 16.1533 20.5634 17.0279L22.1148 18.5792C22.6844 17.2502 23 15.7864 23 14.25C23 8.17487 18.0751 3.25 12 3.25C10.4628 3.25 8.99916 3.56533 7.67038 4.13484L9.22234 5.6868C10.0972 5.40324 11.0307 5.25 12 5.25Z',
  d18: 'M1 14.25C1 16.6802 1.78926 18.9289 3.12504 20.75L4.71413 19.5348C3.6357 18.0509 3 16.226 3 14.25C3 11.1901 4.52707 8.48679 6.8607 6.8607L5.42813 5.42813C2.74036 7.43365 1 10.6386 1 14.25Z',
  d19: 'M12 17.25C10.3431 17.25 9 15.9069 9 14.25C9 12.8249 9.9937 11.6319 11.326 11.326L14.924 14.924C14.6181 16.2563 13.4251 17.25 12 17.25Z',
  d20: 'M7 14.25C7 15.3114 7.32984 16.2942 7.89352 17.1035L6.30371 18.3192C5.48345 17.1726 5 15.7669 5 14.25C5 11.7407 6.3203 9.53983 8.30411 8.30411L9.77241 9.77241C8.12896 10.5916 7 12.289 7 14.25Z',
  d21: 'M12 7.25C15.866 7.25 19 10.384 19 14.25C19 14.6327 18.9692 15.0083 18.91 15.3745L16.9265 13.391C16.5675 11.318 14.932 9.68247 12.8591 9.32352L10.8754 7.33986C11.2415 7.28073 11.6172 7.25 12 7.25Z',
} as const;

export const IconHotspotOfflineStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-stroke-rounded IconHotspotOfflineStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHotspotOfflineDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-duotone-rounded IconHotspotOfflineDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHotspotOfflineTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-twotone-rounded IconHotspotOfflineTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHotspotOfflineSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-solid-rounded IconHotspotOfflineSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotspotOfflineBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-bulk-rounded IconHotspotOfflineBulkRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconHotspotOfflineStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-stroke-sharp IconHotspotOfflineStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d3} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconHotspotOfflineSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-offline-solid-sharp IconHotspotOfflineSolidSharp"
    >
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
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
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

export const iconPackOfHotspotOffline: TheIconSelfPack = {
  name: 'HotspotOffline',
  StrokeRounded: IconHotspotOfflineStrokeRounded,
  DuotoneRounded: IconHotspotOfflineDuotoneRounded,
  TwotoneRounded: IconHotspotOfflineTwotoneRounded,
  SolidRounded: IconHotspotOfflineSolidRounded,
  BulkRounded: IconHotspotOfflineBulkRounded,
  StrokeSharp: IconHotspotOfflineStrokeSharp,
  SolidSharp: IconHotspotOfflineSolidSharp,
};