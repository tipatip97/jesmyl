import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22C14.7614 22 17 17.5228 17 12Z',
  d3: 'M12 22L12 2',
  d4: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2Z',
  d5: 'M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C9.23858 22 7 17.5228 7 12C7 6.47715 9.23858 2 12 2Z',
  d6: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2V22',
  d7: 'M17.4972 21.4043C20.6424 19.4956 22.749 15.999 22.749 12.0018C22.749 8.00452 20.6424 4.50798 17.4972 2.59925C17.1413 2.38323 16.9633 2.27522 16.8563 2.29103C16.7353 2.3089 16.637 2.3989 16.6084 2.51783C16.5832 2.62301 16.6846 2.82945 16.8875 3.24233C18.0114 5.5299 18.6815 8.62808 18.6815 12.0018C18.6815 15.3755 18.0114 18.4737 16.8875 20.7612C16.6846 21.1741 16.5832 21.3806 16.6084 21.4857C16.637 21.6047 16.7353 21.6947 16.8563 21.7125C16.9633 21.7283 17.1413 21.6203 17.4972 21.4043Z',
  d8: 'M5.31659 12.0018C5.31659 8.62808 5.98661 5.5299 7.11056 3.24234C7.31342 2.82946 7.41485 2.62301 7.38962 2.51783C7.36109 2.3989 7.26272 2.3089 7.14173 2.29103C7.03472 2.27522 6.85675 2.38323 6.5008 2.59925C3.35569 4.50798 1.24902 8.00452 1.24902 12.0018C1.24902 15.9991 3.35569 19.4956 6.5008 21.4043C6.85675 21.6203 7.03472 21.7283 7.14173 21.7125C7.26272 21.6947 7.36108 21.6047 7.38961 21.4857C7.41485 21.3806 7.31342 21.1741 7.11056 20.7612C5.98661 18.4737 5.31659 15.3755 5.31659 12.0018Z',
  d9: 'M10.3563 1.73445C9.76724 2.22082 9.18887 2.97916 8.66976 4.0357C7.69061 6.02857 7.05983 8.84377 7.05983 12.0018C7.05983 15.1598 7.69061 17.975 8.66976 19.9679C9.18887 21.0244 9.76724 21.7828 10.3563 22.2691C10.6408 22.5041 10.7831 22.6216 10.9553 22.5405C11.1274 22.4594 11.1274 22.2525 11.1274 21.8388V2.16473C11.1274 1.75103 11.1274 1.54418 10.9553 1.46308C10.7831 1.38198 10.6408 1.49947 10.3563 1.73445Z',
  d10: 'M12.8706 2.16473V21.8388C12.8706 22.2525 12.8706 22.4594 13.0428 22.5405C13.2149 22.6216 13.3572 22.5041 13.6418 22.2691C14.2308 21.7828 14.8092 21.0244 15.3283 19.9679C16.3074 17.975 16.9382 15.1598 16.9382 12.0018C16.9382 8.84377 16.3074 6.02857 15.3283 4.0357C14.8092 2.97916 14.2308 2.22082 13.6418 1.73445C13.3572 1.49947 13.2149 1.38198 13.0428 1.46308C12.8706 1.54418 12.8706 1.75103 12.8706 2.16473Z',
  d11: 'M10.356 1.73445C9.76698 2.22082 9.18861 2.97916 8.6695 4.0357C7.69034 6.02857 7.05957 8.84377 7.05957 12.0018C7.05957 15.1598 7.69034 17.975 8.6695 19.9679C9.18861 21.0244 9.76698 21.7828 10.356 22.2691C10.6406 22.5041 10.7829 22.6216 10.955 22.5405C11.1271 22.4594 11.1271 22.2525 11.1271 21.8388V2.16473C11.1271 1.75103 11.1271 1.54418 10.955 1.46308C10.7829 1.38198 10.6406 1.49947 10.356 1.73445Z',
  d12: 'M12.8704 2.16473V21.8388C12.8704 22.2525 12.8704 22.4594 13.0425 22.5405C13.2147 22.6216 13.357 22.5041 13.6415 22.2691C14.2305 21.7828 14.8089 21.0244 15.328 19.9679C16.3072 17.975 16.938 15.1598 16.938 12.0018C16.938 8.84377 16.3072 6.02857 15.328 4.0357C14.8089 2.97916 14.2305 2.22082 13.6415 1.73445C13.357 1.49947 13.2147 1.38198 13.0425 1.46308C12.8704 1.54418 12.8704 1.75103 12.8704 2.16473Z',
  d13: 'M11.25 1.25C11.0325 1.36354 10.8084 1.52954 10.5792 1.75641C10.0724 2.25813 9.58162 3.02139 9.15326 4.024C8.29764 6.02665 7.75 8.84605 7.75 12C7.75 15.1539 8.29764 17.9733 9.15326 19.976C9.58162 20.9786 10.0724 21.7419 10.5792 22.2436C10.8084 22.4705 11.0325 22.6365 11.25 22.75V1.25Z',
  d14: 'M12.75 22.75C12.9675 22.6365 13.1916 22.4705 13.4208 22.2436C13.9276 21.7419 14.4184 20.9786 14.8467 19.976C15.7024 17.9733 16.25 15.1539 16.25 12C16.25 8.84605 15.7024 6.02665 14.8467 4.024C14.4184 3.02139 13.9276 2.25813 13.4208 1.75641C13.1916 1.52954 12.9675 1.36354 12.75 1.25V22.75Z',
  d15: 'M8.71103 1.67645C8.36336 2.19116 8.05111 2.78083 7.77567 3.42551C6.82164 5.6585 6.25 8.69058 6.25 12C6.25 15.3094 6.82164 18.3415 7.77567 20.5745C8.05111 21.2192 8.36336 21.8088 8.71103 22.3235C4.38271 20.9224 1.25 16.8301 1.25 12C1.25 7.16986 4.38271 3.07755 8.71103 1.67645Z',
  d16: 'M16.2243 3.42551C15.9489 2.78083 15.6366 2.19116 15.289 1.67645C19.6173 3.07755 22.75 7.16986 22.75 12C22.75 16.8301 19.6173 20.9224 15.289 22.3235C15.6366 21.8088 15.9489 21.2192 16.2243 20.5745C17.1784 18.3415 17.75 15.3094 17.75 12C17.75 8.69058 17.1784 5.6585 16.2243 3.42551Z',
} as const;

export const IconLongitudeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-stroke-rounded IconLongitudeStrokeRounded"
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

export const IconLongitudeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-duotone-rounded IconLongitudeDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLongitudeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-twotone-rounded IconLongitudeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLongitudeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-solid-rounded IconLongitudeSolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLongitudeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-bulk-rounded IconLongitudeBulkRounded"
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
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

export const IconLongitudeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-stroke-sharp IconLongitudeStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLongitudeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="longitude-solid-sharp IconLongitudeSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLongitude: TheIconSelfPack = {
  name: 'Longitude',
  StrokeRounded: IconLongitudeStrokeRounded,
  DuotoneRounded: IconLongitudeDuotoneRounded,
  TwotoneRounded: IconLongitudeTwotoneRounded,
  SolidRounded: IconLongitudeSolidRounded,
  BulkRounded: IconLongitudeBulkRounded,
  StrokeSharp: IconLongitudeStrokeSharp,
  SolidSharp: IconLongitudeSolidSharp,
};