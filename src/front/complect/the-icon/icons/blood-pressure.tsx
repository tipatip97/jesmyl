import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 13H9.80031C10.4304 13 10.7454 13 10.9985 13.1493C11.2517 13.2987 11.3926 13.5677 11.6743 14.1056L13.1905 17L15.2857 11L16.8018 13.8944C17.0836 14.4323 17.2245 14.7013 17.4777 14.8507C17.7308 15 18.0458 15 18.6759 15H20',
  d2: 'M20.5 12C19.732 8.4154 16.7237 5.03871 14.5241 2.97222C13.1443 1.67593 11.04 1.67593 9.66019 2.97222C7.11961 5.35907 3.5 9.49387 3.5 13.678C3.5 17.7804 6.75366 22 12.0921 22C15.4851 22 18.0359 20.2955 19.4444 18',
  d3: 'M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z',
  d4: 'M14.8375 10.0027C15.2349 9.97353 15.6117 10.183 15.7965 10.536L17.3127 13.4304C17.4632 13.7179 17.5538 13.8826 17.6199 13.9817C17.7486 13.9944 17.9662 14 18.3009 14H20.625C21.1773 14 21.625 14.4477 21.625 15C21.625 15.5523 21.1773 16 20.625 16L18.2638 16C17.981 16.0001 17.7013 16.0001 17.4622 15.9765C17.1917 15.9498 16.8916 15.8872 16.5945 15.712C16.2947 15.5351 16.0955 15.3011 15.9434 15.0729C15.8114 14.8749 15.6841 14.6318 15.5586 14.3921L15.0947 13.5064L13.7596 17.3297C13.6282 17.7059 13.2861 17.9682 12.8887 17.9973C12.4913 18.0265 12.1145 17.817 11.9296 17.464L10.4135 14.5696C10.263 14.2822 10.1723 14.1174 10.1063 14.0184C9.97754 14.0057 9.75994 14 9.42531 14H8.625C8.07272 14 7.625 13.5523 7.625 13C7.625 12.4477 8.07272 12 8.625 12L9.4624 12C9.74524 12 10.0249 11.9999 10.264 12.0235C10.5345 12.0502 10.8346 12.1128 11.1317 12.2881C11.4315 12.4649 11.6307 12.6989 11.7828 12.9271C11.9148 13.1251 12.0421 13.3682 12.1676 13.608L12.6315 14.4936L13.9666 10.6703C14.098 10.2942 14.4401 10.0319 14.8375 10.0027Z',
  d5: 'M14.5473 2.42838C12.8929 0.857205 10.3571 0.857205 8.70266 2.42838C7.42266 3.64397 5.85427 5.31956 4.60128 7.24155C3.35392 9.1549 2.375 11.3797 2.375 13.678C2.375 18.1459 5.88244 22.75 11.625 22.75C15.3016 22.75 18.062 20.8627 19.5724 18.3323C19.7826 17.98 19.8878 17.8038 19.8016 17.6519C19.7153 17.5 19.5006 17.5 19.0712 17.5L18.2313 17.5C17.9726 17.5001 17.629 17.5003 17.3149 17.4693C16.9223 17.4305 16.3851 17.33 15.8324 17.0039C15.6784 16.9131 15.472 16.9759 15.413 17.1447L15.1757 17.8242C14.8473 18.7647 13.9919 19.4204 12.9985 19.4933C12.005 19.5662 11.0631 19.0424 10.6009 18.16L9.37601 15.8216C9.29397 15.665 9.25295 15.5867 9.18134 15.5434C9.10973 15.5 9.02132 15.5 8.84451 15.5H8.625C7.24429 15.5 6.125 14.3807 6.125 13C6.125 11.6193 7.24428 10.5 8.62499 10.5L9.49489 10.5C9.75359 10.4999 10.0972 10.4998 10.4113 10.5308C10.8039 10.5695 11.3411 10.6701 11.8938 10.9962C12.0478 11.087 12.2542 11.0242 12.3132 10.8554L12.5505 10.1758C12.8789 9.23539 13.7342 8.57966 14.7277 8.50674C15.7211 8.43382 16.6631 8.95762 17.1253 9.84001L18.3502 12.1784C18.4322 12.3351 18.4732 12.4134 18.5449 12.4567C18.6165 12.5 18.7049 12.5 18.8817 12.5H20.1024C20.4269 12.5 20.5892 12.5 20.6792 12.3886C20.7693 12.2772 20.7367 12.1253 20.6715 11.8214C20.3219 10.191 19.5564 8.6338 18.6487 7.24155C17.3957 5.31956 15.8273 3.64397 14.5473 2.42838Z',
  d6: 'M8.70266 2.42838C10.3571 0.857205 12.8929 0.857205 14.5473 2.42838C15.8273 3.64397 17.3957 5.31956 18.6487 7.24155C19.8961 9.15491 20.875 11.3797 20.875 13.678C20.875 18.1459 17.3676 22.75 11.625 22.75C5.88244 22.75 2.375 18.1459 2.375 13.678C2.375 11.3797 3.35392 9.1549 4.60128 7.24155C5.85427 5.31956 7.42266 3.64397 8.70266 2.42838Z',
  d7: 'M8.5 13H11L13.1905 17L15.2857 11L17.5 15H20.5',
  d8: 'M20.3513 12C19.219 6.24646 12 2 12 2C12 2 3.5 7 3.5 13.5C3.5 18.1944 7.30558 22 12 22C15.0419 22 17.7105 20.4022 19.2124 18',
  d9: 'M15.951 10.0036C16.3439 9.97021 16.7197 10.1708 16.9106 10.5157L18.8394 14H21.25V16H18.25C17.8863 16 17.5513 15.8025 17.3751 15.4843L16.2431 13.4394L14.8846 17.3297C14.7543 17.7027 14.4167 17.964 14.0229 17.9966C13.6292 18.0292 13.2531 17.8269 13.0634 17.4803L11.1575 14H9.25V12H11.75C12.1153 12 12.4516 12.1993 12.6271 12.5197L13.7376 14.5476L15.0916 10.6703C15.2216 10.2981 15.5582 10.037 15.951 10.0036Z',
  d10: 'M11.74 1.41461C11.3133 1.68291 10.558 2.15778 10.2364 2.3867C9.4182 2.96899 8.32489 3.81609 7.22862 4.8742C5.06724 6.96036 2.75098 10.0049 2.75098 13.5514C2.75098 18.6316 6.89234 22.75 12.001 22.75C15.6884 22.75 18.8719 20.6043 20.3578 17.5H18.251C17.6449 17.5 17.0708 17.2807 16.6248 16.8989L16.3017 17.8242C15.976 18.7568 15.1319 19.4101 14.1475 19.4915C13.1632 19.5729 12.2231 19.0672 11.7487 18.2008L10.2697 15.5H7.75098V10.5H11.751C12.3488 10.5 12.9156 10.7135 13.3588 11.0856L13.6765 10.1758C14.0014 9.24528 14.8428 8.59251 15.8249 8.50902C16.807 8.42553 17.7466 8.9269 18.2239 9.78925L19.7245 12.5H21.1836C20.788 9.40389 18.718 6.75115 16.7733 4.8742C15.6771 3.81609 14.5838 2.96899 13.7656 2.3867C13.444 2.15779 12.6889 1.68305 12.2621 1.41474C12.1452 1.34125 12.0529 1.28321 12.001 1.25C11.9491 1.28317 11.8567 1.34125 11.74 1.41461Z',
} as const;

export const IconBloodPressureStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-stroke-rounded IconBloodPressureStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBloodPressureDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-duotone-rounded IconBloodPressureDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconBloodPressureTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-twotone-rounded IconBloodPressureTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconBloodPressureSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-solid-rounded IconBloodPressureSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodPressureBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-bulk-rounded IconBloodPressureBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodPressureStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-stroke-sharp IconBloodPressureStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBloodPressureSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blood-pressure-solid-sharp IconBloodPressureSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBloodPressure: TheIconSelfPack = {
  name: 'BloodPressure',
  StrokeRounded: IconBloodPressureStrokeRounded,
  DuotoneRounded: IconBloodPressureDuotoneRounded,
  TwotoneRounded: IconBloodPressureTwotoneRounded,
  SolidRounded: IconBloodPressureSolidRounded,
  BulkRounded: IconBloodPressureBulkRounded,
  StrokeSharp: IconBloodPressureStrokeSharp,
  SolidSharp: IconBloodPressureSolidSharp,
};