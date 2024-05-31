import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.8293 18C14.9398 18.3128 15 18.6494 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 18.6494 9.06015 18.3128 9.17071 18',
  d2: 'M11.2361 13C11.7111 13.5308 12 14.2316 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15C6 14.2316 6.28885 13.5308 6.76389 13',
  d3: 'M17.2361 13C17.7111 13.5308 18 14.2316 18 15C18 16.6569 16.6569 18 15 18C13.3431 18 12 16.6569 12 15C12 14.2316 12.2889 13.5308 12.7639 13',
  d4: 'M15 10C15 11.6569 16.3431 13 18 13C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7C16.3431 7 15 8.34315 15 10Z',
  d5: 'M9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10Z',
  d6: 'M3 10C3 11.6569 4.34315 13 6 13C7.65685 13 9 11.6569 9 10C9 8.34315 7.65685 7 6 7C4.34315 7 3 8.34315 3 10Z',
  d7: 'M12 7C12 5.33333 12.8 2 16 2',
  d8: 'M12 22.3359C10.3431 22.3359 9 20.9928 9 19.3359C9 18.5676 9.28885 17.8667 9.76389 17.3359L9.83642 17.2178C11.0863 16.8557 12 15.7025 12 14.3359C12 15.6752 12.8775 16.8094 14.0889 17.1951L14.2361 17.3359C14.7111 17.8667 15 18.5676 15 19.3359C15 20.9928 13.6569 22.3359 12 22.3359Z',
  d9: 'M15.75 10.125C15.75 8.05393 14.0711 6.375 12 6.375C9.92893 6.375 8.25 8.05393 8.25 10.125C8.25 12.1961 9.92893 13.875 12 13.875C14.0711 13.875 15.75 12.1961 15.75 10.125Z',
  d10: 'M13.6665 4.49912C13.1774 5.34823 13 6.41293 13 7.125C13 7.67728 12.5523 8.125 12 8.125C11.4477 8.125 11 7.67728 11 7.125C11 6.1704 11.2226 4.7351 11.9335 3.50088C12.673 2.21692 13.9707 1.125 16 1.125C16.5523 1.125 17 1.57272 17 2.125C17 2.67728 16.5523 3.125 16 3.125C14.8293 3.125 14.127 3.69974 13.6665 4.49912Z',
  d11: 'M7.83301 12.8893C7.95207 13.0685 8.0116 13.158 7.98911 13.2446C7.96663 13.3311 7.8828 13.3743 7.71515 13.4607C7.20115 13.7255 6.61804 13.875 6 13.875C3.92893 13.875 2.25 12.1961 2.25 10.125C2.25 8.05393 3.92893 6.375 6 6.375C6.61804 6.375 7.20115 6.52451 7.71515 6.78934C7.8828 6.87571 7.96663 6.9189 7.98911 7.00545C8.0116 7.09199 7.95207 7.18155 7.83301 7.36066C7.30667 8.15248 7 9.10293 7 10.125C7 11.1471 7.30667 12.0975 7.83301 12.8893Z',
  d12: 'M16.2865 6.78934C16.1188 6.87571 16.035 6.9189 16.0125 7.00545C15.99 7.09199 16.0495 7.18155 16.1686 7.36066C16.6949 8.15248 17.0016 9.10293 17.0016 10.125C17.0016 11.1471 16.6949 12.0975 16.1686 12.8893C16.0495 13.0685 15.99 13.158 16.0125 13.2446C16.035 13.3311 16.1188 13.3743 16.2865 13.4607C16.8005 13.7255 17.3836 13.875 18.0016 13.875C20.0727 13.875 21.7516 12.1961 21.7516 10.125C21.7516 8.05393 20.0727 6.375 18.0016 6.375C17.3836 6.375 16.8005 6.52451 16.2865 6.78934Z',
  d13: 'M15.3527 14.3575C15.1725 14.2513 15.0824 14.1982 14.9986 14.1992C14.9147 14.2003 14.8236 14.2571 14.6414 14.3708C13.8746 14.8491 12.9689 15.1255 11.9986 15.1255C11.8998 15.1255 11.8016 15.1226 11.7042 15.117C11.4788 15.1039 11.3661 15.0973 11.3021 15.1647C11.2382 15.2321 11.2491 15.3304 11.2709 15.5269C11.4772 17.385 13.0876 18.8755 14.9986 18.8755C16.9096 18.8755 18.52 17.385 18.7263 15.5269C18.7481 15.3303 18.759 15.2321 18.6951 15.1647C18.6311 15.0973 18.5184 15.1038 18.2929 15.117C18.1954 15.1226 18.0971 15.1255 17.9981 15.1255C17.0355 15.1255 16.1604 14.8338 15.3527 14.3575Z',
  d14: 'M8.96437 20.1263C8.68045 20.1243 8.53849 20.1233 8.47878 20.2145C8.41907 20.3056 8.46938 20.419 8.57 20.6458C9.15306 21.9598 10.4692 22.8764 11.9994 22.8764C13.5297 22.8764 14.8458 21.9598 15.4289 20.6458C15.5295 20.419 15.5798 20.3056 15.5201 20.2145C15.4604 20.1233 15.3184 20.1243 15.0345 20.1263C15.0228 20.1263 15.0111 20.1264 14.9994 20.1264C14.0352 20.1264 13.1347 19.853 12.3714 19.3805C12.1803 19.2623 12.0848 19.2031 11.9994 19.2031C11.9141 19.2031 11.8186 19.2623 11.6275 19.3805C10.8642 19.853 9.96368 20.1264 8.99944 20.1264C8.98774 20.1264 8.97605 20.1263 8.96437 20.1263Z',
  d15: 'M10.0002 14.9787C10.0021 14.8518 10.003 14.7883 9.9731 14.7391C9.94321 14.6899 9.88311 14.6598 9.76292 14.5996C9.57513 14.5056 9.39408 14.4001 9.22069 14.284C9.11755 14.215 9.06598 14.1804 9.01371 14.1764C9.00287 14.1756 8.99338 14.1756 8.98254 14.1764C8.93027 14.1806 8.88162 14.2132 8.78431 14.2786C7.98774 14.8138 7.02774 15.1261 5.9986 15.1261C5.89977 15.1261 5.80162 15.1232 5.70421 15.1175C5.47879 15.1045 5.36608 15.0979 5.30214 15.1653C5.2382 15.2327 5.24911 15.331 5.27092 15.5275C5.4772 17.3856 7.08761 18.8761 8.9986 18.8761C9.61663 18.8761 10.1997 18.7266 10.7137 18.4617C10.8814 18.3754 10.9652 18.3322 10.9877 18.2456C11.0102 18.1591 10.9507 18.0695 10.8316 17.8904C10.3053 17.0986 9.9986 16.1482 9.9986 15.1261C9.9986 15.1014 9.99878 15.0767 9.99914 15.052L10.0002 14.9787Z',
  d16: 'M4.90909 6.25C6.37767 6.25 7.56818 7.48123 7.56818 9.00002C7.56818 10.5188 6.37767 11.75 4.90909 11.75C3.44052 11.75 2.25 10.5188 2.25 9.00002C2.25 7.48123 3.44052 6.25 4.90909 6.25Z',
  d17: 'M6.45712 13.296C7.25823 12.9871 7.94968 12.4454 8.45455 11.7505C8.95941 12.4454 9.65086 12.9871 10.452 13.296C10.8645 13.7809 11.1136 14.415 11.1136 15.1114C11.1136 16.6302 9.92312 17.8614 8.45455 17.8614C6.98597 17.8614 5.79545 16.6302 5.79545 15.1114C5.79545 14.415 6.04462 13.7809 6.45712 13.296Z',
  d18: 'M19.0909 6.25C20.5595 6.25 21.75 7.48123 21.75 9.00002C21.75 10.5188 20.5595 11.75 19.0909 11.75C17.6223 11.75 16.4318 10.5188 16.4318 9.00002C16.4318 7.48123 17.6223 6.25 19.0909 6.25Z',
  d19: 'M13.548 13.296C14.3491 12.9871 15.0406 12.4454 15.5455 11.7505C16.0503 12.4454 16.7418 12.9871 17.5429 13.296C17.9554 13.7809 18.2045 14.415 18.2045 15.1114C18.2045 16.6302 17.014 17.8614 15.5455 17.8614C14.0769 17.8614 12.8864 16.6302 12.8864 15.1114C12.8864 14.415 13.1355 13.7809 13.548 13.296Z',
  d20: 'M12 17.8619C11.3663 18.7342 10.4386 19.365 9.36914 19.5971C9.35056 19.7283 9.34091 19.8628 9.34091 20C9.34091 21.5188 10.5314 22.7501 12 22.7501C13.4686 22.7501 14.6591 21.5188 14.6591 20C14.6591 19.8628 14.6494 19.7283 14.6309 19.5971C13.5614 19.365 12.6337 18.7342 12 17.8619Z',
  d21: 'M14.6591 9.00002C14.6591 7.48123 13.4686 6.25 12 6.25C10.5314 6.25 9.34091 7.48123 9.34091 9.00002C9.34091 10.5188 10.5314 11.75 12 11.75C13.4686 11.75 14.6591 10.5188 14.6591 9.00002Z',
  d22: 'M11.2958 6.34747C10.169 6.6667 9.34091 7.73335 9.34091 9.00002C9.34091 10.5188 10.5314 11.75 12 11.75C13.4686 11.75 14.6591 10.5188 14.6591 9.00002C14.6591 7.77079 13.8793 6.72994 12.8033 6.37773C12.8897 5.72959 13.0879 4.87749 13.4498 4.24934C13.9451 3.38939 14.7219 2.75 15.9999 2.75V1.25C14.0778 1.25 12.8546 2.27728 12.15 3.50066C11.6401 4.3859 11.3899 5.50441 11.2958 6.34747Z',
  d23: 'M7.56818 9.00002C7.56818 7.48123 6.37767 6.25 4.90909 6.25C3.44052 6.25 2.25 7.48123 2.25 9.00002C2.25 10.5188 3.44052 11.75 4.90909 11.75C6.37767 11.75 7.56818 10.5188 7.56818 9.00002Z',
  d24: 'M8.45455 11.7505C7.94968 12.4454 7.25823 12.9871 6.45712 13.296C6.04462 13.7809 5.79545 14.415 5.79545 15.1114C5.79545 16.6302 6.98597 17.8614 8.45455 17.8614C9.92312 17.8614 11.1136 16.6302 11.1136 15.1114C11.1136 14.415 10.8645 13.7809 10.452 13.296C9.65086 12.9871 8.95941 12.4454 8.45455 11.7505Z',
  d25: 'M15.5455 11.7505C15.0406 12.4454 14.3491 12.9871 13.548 13.296C13.1355 13.7809 12.8864 14.415 12.8864 15.1114C12.8864 16.6302 14.0769 17.8614 15.5455 17.8614C17.014 17.8614 18.2045 16.6302 18.2045 15.1114C18.2045 14.415 17.9554 13.7809 17.5429 13.296C16.7418 12.9871 16.0503 12.4454 15.5455 11.7505Z',
} as const;

export const IconGrapesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-stroke-rounded IconGrapesStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-duotone-rounded IconGrapesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-twotone-rounded IconGrapesTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-solid-rounded IconGrapesSolidRounded"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-bulk-rounded IconGrapesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-stroke-sharp IconGrapesStrokeSharp"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGrapesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="grapes-solid-sharp IconGrapesSolidSharp"
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
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGrapes: TheIconSelfPack = {
  name: 'Grapes',
  StrokeRounded: IconGrapesStrokeRounded,
  DuotoneRounded: IconGrapesDuotoneRounded,
  TwotoneRounded: IconGrapesTwotoneRounded,
  SolidRounded: IconGrapesSolidRounded,
  BulkRounded: IconGrapesBulkRounded,
  StrokeSharp: IconGrapesStrokeSharp,
  SolidSharp: IconGrapesSolidSharp,
};