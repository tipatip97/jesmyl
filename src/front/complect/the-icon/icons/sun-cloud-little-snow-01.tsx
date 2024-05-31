import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d3: 'M11 16L12 17M12 17L13 18M12 17L13 16M12 17L11 18M15 20L16 21M16 21L17 22M16 21L17 20M16 21L15 22M7 20L8 21M8 21L9 22M8 21L9 20M8 21L7 22',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M10.4179 15.1679C10.8084 14.7774 11.4416 14.7774 11.8321 15.1679L12.125 15.4608L12.4179 15.1679C12.8084 14.7774 13.4416 14.7774 13.8321 15.1679C14.2226 15.5584 14.2226 16.1916 13.8321 16.5821L13.5392 16.875L13.8321 17.1679C14.2226 17.5584 14.2226 18.1916 13.8321 18.5821C13.4416 18.9726 12.8084 18.9726 12.4179 18.5821L12.125 18.2892L11.8321 18.5821C11.4416 18.9726 10.8084 18.9726 10.4179 18.5821C10.0274 18.1916 10.0274 17.5584 10.4179 17.1679L10.7108 16.875L10.4179 16.5821C10.0274 16.1916 10.0274 15.5584 10.4179 15.1679ZM6.41789 19.1679C6.80842 18.7774 7.44158 18.7774 7.83211 19.1679L8.125 19.4608L8.41789 19.1679C8.80842 18.7774 9.44158 18.7774 9.83211 19.1679C10.2226 19.5584 10.2226 20.1916 9.83211 20.5821L9.53921 20.875L9.83211 21.1679C10.2226 21.5584 10.2226 22.1916 9.83211 22.5821C9.44158 22.9726 8.80842 22.9726 8.41789 22.5821L8.125 22.2892L7.83211 22.5821C7.44158 22.9726 6.80842 22.9726 6.41789 22.5821C6.02737 22.1916 6.02737 21.5584 6.41789 21.1679L6.71079 20.875L6.41789 20.5821C6.02737 20.1916 6.02737 19.5584 6.41789 19.1679ZM14.4179 19.1679C14.8084 18.7774 15.4416 18.7774 15.8321 19.1679L16.125 19.4608L16.4179 19.1679C16.8084 18.7774 17.4416 18.7774 17.8321 19.1679C18.2226 19.5584 18.2226 20.1916 17.8321 20.5821L17.5392 20.875L17.8321 21.1679C18.2226 21.5584 18.2226 22.1916 17.8321 22.5821C17.4416 22.9726 16.8084 22.9726 16.4179 22.5821L16.125 22.2892L15.8321 22.5821C15.4416 22.9726 14.8084 22.9726 14.4179 22.5821C14.0274 22.1916 14.0274 21.5584 14.4179 21.1679L14.7108 20.875L14.4179 20.5821C14.0274 20.1916 14.0274 19.5584 14.4179 19.1679Z',
  d6: 'M1.375 13.125C1.375 10.4833 3.15606 8.2582 5.58325 7.58419C5.77924 7.52976 5.87724 7.50255 5.93372 7.4447C5.9902 7.38684 6.01491 7.28884 6.06431 7.09283C6.74772 4.38153 9.20171 2.375 12.125 2.375C15.3399 2.375 17.9878 4.80231 18.3362 7.92424C18.3635 8.16959 18.3772 8.2923 18.4397 8.36328C18.5022 8.43427 18.6239 8.4638 18.8673 8.52286C21.1672 9.08089 22.875 11.1535 22.875 13.625C22.875 15.7744 21.5833 17.6222 19.7338 18.4343C19.5462 18.5167 19.4525 18.5578 19.3571 18.537C19.2617 18.5161 19.1732 18.4164 18.9961 18.2169C18.963 18.1796 18.9285 18.143 18.8928 18.1072C18.1998 17.4142 17.2012 17.2131 16.3308 17.5039C16.236 17.5356 16.1886 17.5514 16.1554 17.5548C16.1297 17.5574 16.1206 17.5574 16.0948 17.5548C16.0617 17.5515 16.0139 17.5355 15.9183 17.5036C15.7718 17.4547 15.6985 17.4303 15.6599 17.4016C15.6295 17.3789 15.6211 17.3705 15.5984 17.3401C15.5697 17.3015 15.5453 17.2282 15.4964 17.0817C15.4645 16.9861 15.4485 16.9383 15.4452 16.9052C15.4426 16.8795 15.4426 16.8703 15.4452 16.8446C15.4486 16.8115 15.4644 16.764 15.4961 16.6692C15.7868 15.7988 15.5858 14.8002 14.8928 14.1072C14.2101 13.4246 13.2309 13.2193 12.3699 13.4912C12.2375 13.533 12.1712 13.554 12.125 13.554C12.0788 13.554 12.0125 13.5331 11.8802 13.4912C11.0191 13.2193 10.0399 13.4246 9.35723 14.1072C8.66425 14.8002 8.46314 15.7988 8.75392 16.6692C8.7856 16.764 8.80145 16.8114 8.80482 16.8446C8.80743 16.8703 8.80744 16.8795 8.80483 16.9052C8.80147 16.9383 8.78552 16.9861 8.75362 17.0817C8.70473 17.2282 8.68029 17.3015 8.65158 17.3401C8.62893 17.3705 8.62049 17.3789 8.59007 17.4016C8.5515 17.4303 8.47824 17.4547 8.33172 17.5036C8.23612 17.5355 8.1883 17.5515 8.15518 17.5548C8.12945 17.5574 8.12029 17.5574 8.09457 17.5548C8.06145 17.5514 8.01404 17.5356 7.91921 17.5039C7.04885 17.2132 6.05022 17.4143 5.35723 18.1072L5.34906 18.1154C5.16311 18.3031 5.07013 18.3969 4.97502 18.413C4.87992 18.4291 4.78804 18.3842 4.60429 18.2945C2.69212 17.3603 1.375 15.3965 1.375 13.125Z',
  d7: 'M3.125 5.98179C3.125 4.40086 4.40141 3.125 5.96888 3.125C6.74917 3.125 7.45702 3.44017 7.97224 3.95404C8.47713 3.5048 9.05535 3.1362 9.68671 2.86845C8.79982 1.80488 7.46405 1.125 5.96888 1.125C3.29052 1.125 1.125 3.30262 1.125 5.98179C1.125 7.37511 1.71096 8.63195 2.64756 9.51703C3.07158 8.99154 3.58625 8.54223 4.16783 8.19283C3.53021 7.66805 3.125 6.8729 3.125 5.98179Z',
  d8: 'M10.8 15L12 16.1429M12 16.1429L13.2 17.2857M12 16.1429L13.2 15M12 16.1429L10.8 17.2857M14.6 19.7143L15.8 20.8571M15.8 20.8571L17 22M15.8 20.8571L17 19.7143M15.8 20.8571L14.6 22M7 19.7143L8.2 20.8571M8.2 20.8571L9.4 22M8.2 20.8571L9.4 19.7143M8.2 20.8571L7 22',
  d9: 'M2.68308 9.70164C1.80115 8.86245 1.25 7.67454 1.25 6.35826C1.25 3.81619 3.30471 1.75 5.84601 1.75C7.23857 1.75 8.48541 2.37157 9.32672 3.3489C10.1372 2.96484 11.0435 2.75 12 2.75C15.3858 2.75 18.1428 5.44224 18.2469 8.80273C20.7927 9.16534 22.75 11.3541 22.75 14C22.75 16.1757 21.4265 18.0423 19.5407 18.8386L13.6833 12.7734H10.3176L4.57091 18.7132C2.60932 17.7977 1.25 15.8076 1.25 13.5C1.25 12.044 1.79103 10.7146 2.68308 9.70164ZM3.14766 6.35826C3.14766 4.85823 4.35875 3.64766 5.84601 3.64766C6.58272 3.64766 7.25136 3.94376 7.7396 4.42707C6.77854 5.32293 6.1002 6.51824 5.853 7.86454C5.25587 7.98547 4.69233 8.19886 4.17797 8.48912C3.54949 7.99188 3.14766 7.22264 3.14766 6.35826Z',
  d10: 'M12.0002 14.4383L12.6169 13.8281L14.0236 15.2498L13.422 15.8451L14.0236 16.4404L12.6169 17.862L12.0002 17.2519L11.3836 17.862L9.97688 16.4404L10.5785 15.8451L9.97688 15.2498L11.3836 13.8281L12.0002 14.4383ZM6.39849 20.2328L5.79688 19.6375L7.2036 18.2159L7.82024 18.826L8.43688 18.2159L9.8436 19.6375L9.24198 20.2328L9.8436 20.8281L8.43688 22.2498L7.82024 21.6396L7.2036 22.2498L5.79688 20.8281L6.39849 20.2328ZM14.7585 20.2328L14.1569 19.6375L15.5636 18.2159L16.1802 18.826L16.7969 18.2159L18.2036 19.6375L17.602 20.2328L18.2036 20.8281L16.7969 22.2498L16.1802 21.6396L15.5636 22.2498L14.1569 20.8281L14.7585 20.2328Z',
} as const;

export const IconSunCloudLittleSnow01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-stroke-rounded IconSunCloudLittleSnow01StrokeRounded"
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

export const IconSunCloudLittleSnow01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-duotone-rounded IconSunCloudLittleSnow01DuotoneRounded"
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

export const IconSunCloudLittleSnow01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-twotone-rounded IconSunCloudLittleSnow01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleSnow01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-solid-rounded IconSunCloudLittleSnow01SolidRounded"
    >
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

export const IconSunCloudLittleSnow01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-bulk-rounded IconSunCloudLittleSnow01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudLittleSnow01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-stroke-sharp IconSunCloudLittleSnow01StrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleSnow01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-snow-01-solid-sharp IconSunCloudLittleSnow01SolidSharp"
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

export const iconPackOfSunCloudLittleSnow01: TheIconSelfPack = {
  name: 'SunCloudLittleSnow01',
  StrokeRounded: IconSunCloudLittleSnow01StrokeRounded,
  DuotoneRounded: IconSunCloudLittleSnow01DuotoneRounded,
  TwotoneRounded: IconSunCloudLittleSnow01TwotoneRounded,
  SolidRounded: IconSunCloudLittleSnow01SolidRounded,
  BulkRounded: IconSunCloudLittleSnow01BulkRounded,
  StrokeSharp: IconSunCloudLittleSnow01StrokeSharp,
  SolidSharp: IconSunCloudLittleSnow01SolidSharp,
};