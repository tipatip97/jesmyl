import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 10.9867C17.485 10.9867 17.4925 10.9867 17.5 10.9867C19.9853 10.9867 22 12.9969 22 15.4767C22 17.2396 20.9817 18.7653 19.5 19.5M17.4776 10.9867C17.4924 10.8224 17.5 10.656 17.5 10.4878C17.5 7.45697 15.0376 5 12 5C9.12324 5 6.76233 7.20372 6.52042 10.0116M17.4776 10.9867C17.395 11.9014 16.9769 12.6883 16.5 13.4181M6.52042 10.0116C3.98398 10.2524 2 12.3839 2 14.9778C2 16.8244 3.0055 18.4367 4.5 19.2993M6.52042 10.0116C6.67826 9.99657 6.83823 9.98891 7 9.98891C8.12582 9.98891 9.16474 10.3602 10.0005 10.9867',
  d2: 'M11 16L13 18M13 16L11 18',
  d3: 'M15 20L17 22M17 20L15 22',
  d4: 'M7 20L9 22M9 20L7 22',
  d5: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d6: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d7: 'M10.4179 15.1679C10.8084 14.7774 11.4416 14.7774 11.8321 15.1679L12.125 15.4608L12.4179 15.1679C12.8084 14.7774 13.4416 14.7774 13.8321 15.1679C14.2226 15.5584 14.2226 16.1916 13.8321 16.5821L13.5392 16.875L13.8321 17.1679C14.2226 17.5584 14.2226 18.1916 13.8321 18.5821C13.4416 18.9726 12.8084 18.9726 12.4179 18.5821L12.125 18.2892L11.8321 18.5821C11.4416 18.9726 10.8084 18.9726 10.4179 18.5821C10.0274 18.1916 10.0274 17.5584 10.4179 17.1679L10.7108 16.875L10.4179 16.5821C10.0274 16.1916 10.0274 15.5584 10.4179 15.1679ZM6.41789 19.1679C6.80842 18.7774 7.44158 18.7774 7.83211 19.1679L8.125 19.4608L8.41789 19.1679C8.80842 18.7774 9.44158 18.7774 9.83211 19.1679C10.2226 19.5584 10.2226 20.1916 9.83211 20.5821L9.53921 20.875L9.83211 21.1679C10.2226 21.5584 10.2226 22.1916 9.83211 22.5821C9.44158 22.9726 8.80842 22.9726 8.41789 22.5821L8.125 22.2892L7.83211 22.5821C7.44158 22.9726 6.80842 22.9726 6.41789 22.5821C6.02737 22.1916 6.02737 21.5584 6.41789 21.1679L6.71079 20.875L6.41789 20.5821C6.02737 20.1916 6.02737 19.5584 6.41789 19.1679ZM14.4179 19.1679C14.8084 18.7774 15.4416 18.7774 15.8321 19.1679L16.125 19.4608L16.4179 19.1679C16.8084 18.7774 17.4416 18.7774 17.8321 19.1679C18.2226 19.5584 18.2226 20.1916 17.8321 20.5821L17.5392 20.875L17.8321 21.1679C18.2226 21.5584 18.2226 22.1916 17.8321 22.5821C17.4416 22.9726 16.8084 22.9726 16.4179 22.5821L16.125 22.2892L15.8321 22.5821C15.4416 22.9726 14.8084 22.9726 14.4179 22.5821C14.0274 22.1916 14.0274 21.5584 14.4179 21.1679L14.7108 20.875L14.4179 20.5821C14.0274 20.1916 14.0274 19.5584 14.4179 19.1679Z',
  d8: 'M1.375 15.125C1.375 12.4833 3.15606 10.2582 5.58325 9.58419C5.77924 9.52976 5.87724 9.50255 5.93372 9.4447C5.9902 9.38684 6.01491 9.28884 6.06431 9.09283C6.74772 6.38153 9.20171 4.375 12.125 4.375C15.3399 4.375 17.9878 6.80231 18.3362 9.92424C18.3635 10.1696 18.3772 10.2923 18.4397 10.3633C18.5022 10.4343 18.6239 10.4638 18.8673 10.5229C21.1672 11.0809 22.875 13.1535 22.875 15.625C22.875 17.4265 21.9676 19.0161 20.5849 19.9617C20.2299 20.2044 20.0524 20.3258 19.904 20.2668C19.7556 20.2077 19.693 19.9194 19.568 19.3428C19.4698 18.89 19.2447 18.4592 18.8928 18.1072C18.1998 17.4142 17.2012 17.2131 16.3308 17.5039C16.236 17.5356 16.1886 17.5514 16.1554 17.5548C16.1297 17.5574 16.1206 17.5574 16.0948 17.5548C16.0617 17.5515 16.0139 17.5355 15.9183 17.5036C15.7718 17.4547 15.6985 17.4303 15.6599 17.4016C15.6295 17.3789 15.6211 17.3705 15.5984 17.3401C15.5697 17.3015 15.5453 17.2282 15.4964 17.0817C15.4645 16.9861 15.4485 16.9383 15.4452 16.9052C15.4426 16.8795 15.4426 16.8703 15.4452 16.8446C15.4486 16.8115 15.4644 16.764 15.4961 16.6692C15.7868 15.7988 15.5858 14.8002 14.8928 14.1072C14.2101 13.4246 13.2309 13.2193 12.3699 13.4912C12.2375 13.533 12.1712 13.554 12.125 13.554C12.0788 13.554 12.0125 13.5331 11.8802 13.4912C11.0191 13.2193 10.0399 13.4246 9.35723 14.1072C8.66425 14.8002 8.46314 15.7988 8.75392 16.6692C8.7856 16.764 8.80145 16.8114 8.80482 16.8446C8.80743 16.8703 8.80744 16.8795 8.80483 16.9052C8.80147 16.9383 8.78552 16.9861 8.75362 17.0817C8.70473 17.2282 8.68029 17.3015 8.65158 17.3401C8.62893 17.3705 8.62049 17.3789 8.59007 17.4016C8.5515 17.4303 8.47824 17.4547 8.33172 17.5036C8.23612 17.5355 8.1883 17.5515 8.15518 17.5548C8.12945 17.5574 8.12029 17.5574 8.09457 17.5548C8.06145 17.5514 8.01404 17.5356 7.91921 17.5039C7.04885 17.2132 6.05022 17.4143 5.35723 18.1072C5.05107 18.4134 4.84092 18.7792 4.72678 19.1673C4.5619 19.7278 4.47946 20.0081 4.33021 20.0574C4.18096 20.1068 4.00973 19.9777 3.66727 19.7196C2.27505 18.6702 1.375 17.0027 1.375 15.125Z',
  d9: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91299 4.72044 9.00694 4.94288 9.07374 5.16909C9.65058 4.84579 10.2839 4.61133 10.9553 4.48424C10.8484 4.15221 10.7058 3.82676 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.27307 9.41277 2.94576 10.0572 3.7222 10.4896C4.27537 10.0829 4.90401 9.77279 5.58325 9.58417C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.98722 9.38988 6.01221 9.29906 6.05668 9.12305C5.04887 9.0863 4.07904 8.54201 3.5346 7.58974Z',
  d10: 'M10.8 15L12 16.1429M12 16.1429L13.2 17.2857M12 16.1429L13.2 15M12 16.1429L10.8 17.2857M14.6 19.7143L15.8 20.8571M15.8 20.8571L17 22M15.8 20.8571L17 19.7143M15.8 20.8571L14.6 22M7 19.7143L8.2 20.8571M8.2 20.8571L9.4 22M8.2 20.8571L9.4 19.7143M8.2 20.8571L7 22',
  d11: 'M12.0002 15.4383L12.6169 14.8281L14.0236 16.2498L13.422 16.8451L14.0236 17.4404L12.6169 18.862L12.0002 18.2519L11.3836 18.862L9.97688 17.4404L10.5785 16.8451L9.97688 16.2498L11.3836 14.8281L12.0002 15.4383ZM6.39849 21.2328L5.79688 20.6375L7.2036 19.2159L7.82024 19.826L8.43688 19.2159L9.8436 20.6375L9.24198 21.2328L9.8436 21.8281L8.43688 23.2498L7.82024 22.6396L7.2036 23.2498L5.79688 21.8281L6.39849 21.2328ZM14.7585 21.2328L14.1569 20.6375L15.5636 19.2159L16.1802 19.826L16.7969 19.2159L18.2036 20.6375L17.602 21.2328L18.2036 21.8281L16.7969 23.2498L16.1802 22.6396L15.5636 23.2498L14.1569 21.8281L14.7585 21.2328Z',
  d12: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.5412 2.31363 19.334 3.9169 20.3544L10.3188 13.7734H13.6846L20.2142 20.4949C21.7341 19.5751 22.75 17.9062 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
} as const;

export const IconMoonCloudLittleSnowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-stroke-rounded IconMoonCloudLittleSnowStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleSnowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-duotone-rounded IconMoonCloudLittleSnowDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconMoonCloudLittleSnowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-twotone-rounded IconMoonCloudLittleSnowTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleSnowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-solid-rounded IconMoonCloudLittleSnowSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleSnowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-bulk-rounded IconMoonCloudLittleSnowBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleSnowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-stroke-sharp IconMoonCloudLittleSnowStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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

export const IconMoonCloudLittleSnowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-snow-solid-sharp IconMoonCloudLittleSnowSolidSharp"
    >
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

export const iconPackOfMoonCloudLittleSnow: TheIconSelfPack = {
  name: 'MoonCloudLittleSnow',
  StrokeRounded: IconMoonCloudLittleSnowStrokeRounded,
  DuotoneRounded: IconMoonCloudLittleSnowDuotoneRounded,
  TwotoneRounded: IconMoonCloudLittleSnowTwotoneRounded,
  SolidRounded: IconMoonCloudLittleSnowSolidRounded,
  BulkRounded: IconMoonCloudLittleSnowBulkRounded,
  StrokeSharp: IconMoonCloudLittleSnowStrokeSharp,
  SolidSharp: IconMoonCloudLittleSnowSolidSharp,
};