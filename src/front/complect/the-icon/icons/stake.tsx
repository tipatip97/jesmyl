import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 6C11.3137 6 14 5.10457 14 4C14 2.89543 11.3137 2 8 2C4.68629 2 2 2.89543 2 4C2 5.10457 4.68629 6 8 6Z',
  d2: 'M15.5 9C11.9102 9 9 11.9101 9 15.5C9 19.0898 11.9102 22 15.5 22C19.0898 22 22 19.0899 22 15.5C22 11.9101 19.0898 9 15.5 9Z',
  d3: 'M15.5 19C15.6047 19 15.702 18.9505 15.8967 18.8516L17.4614 18.0564C18.1538 17.7045 18.5 17.5286 18.5 17.25V13.75M15.5 19C15.3953 19 15.298 18.9505 15.1033 18.8516L13.5386 18.0564C12.8462 17.7045 12.5 17.5286 12.5 17.25V13.75M15.5 19V15.5M18.5 13.75C18.5 13.4714 18.1538 13.2955 17.4614 12.9436L15.8967 12.1484C15.702 12.0495 15.6047 12 15.5 12C15.3953 12 15.298 12.0495 15.1033 12.1484L13.5386 12.9436C12.8462 13.2955 12.5 13.4714 12.5 13.75M18.5 13.75C18.5 14.0286 18.1538 14.2045 17.4614 14.5564L15.8967 15.3516C15.702 15.4505 15.6047 15.5 15.5 15.5M12.5 13.75C12.5 14.0286 12.8462 14.2045 13.5386 14.5564L15.1033 15.3516C15.298 15.4505 15.3953 15.5 15.5 15.5',
  d4: 'M2 4V8.02171V12.0434C2 12.7473 3.17834 13.6328 6.12981 14M2.10726 8.54768C3.31161 9.60965 5.45881 10.0602 7.75359 10.0602M13.9884 4.12134V6.13597',
  d5: 'M8 5.7793C11.3137 5.7793 14 4.88387 14 3.7793C14 2.67473 11.3137 1.7793 8 1.7793C4.68629 1.7793 2 2.67473 2 3.7793C2 4.88387 4.68629 5.7793 8 5.7793Z',
  d6: 'M15.5 8.7793C11.9102 8.7793 9 11.6894 9 15.2793C9 18.8691 11.9102 21.7793 15.5 21.7793C19.0898 21.7793 22 18.8692 22 15.2793C22 11.6894 19.0898 8.7793 15.5 8.7793Z',
  d7: 'M2 3.7793V7.80101V11.8227C2 12.5266 3.17905 13.4121 6.1323 13.7793M2.10733 8.32698C3.3124 9.38895 5.4609 9.8395 7.75706 9.8395M13.9957 3.90064V5.91527',
  d8: 'M9 15.2793C9 11.6894 11.9102 8.7793 15.5 8.7793C19.0899 8.7793 22 11.6894 22 15.2793C22 18.8692 19.0898 21.7793 15.5 21.7793C11.9102 21.7793 9 18.8691 9 15.2793ZM17.4614 17.8357L15.8967 18.6309C15.702 18.7298 15.6047 18.7793 15.5 18.7793C15.3953 18.7793 15.298 18.7298 15.1033 18.6309L13.5386 17.8357C12.8462 17.4838 12.5 17.3079 12.5 17.0293V13.5293C12.5 13.2507 12.8462 13.0748 13.5386 12.7229L15.1033 11.9277C15.298 11.8288 15.3953 11.7793 15.5 11.7793C15.6047 11.7793 15.702 11.8288 15.8967 11.9277L17.4614 12.7229C18.1538 13.0748 18.5 13.2507 18.5 13.5293V17.0293C18.5 17.3079 18.1538 17.4838 17.4614 17.8357Z',
  d9: 'M15.5 18.7793C15.6047 18.7793 15.702 18.7298 15.8967 18.6309L17.4614 17.8357C18.1538 17.4838 18.5 17.3079 18.5 17.0293V13.5293M15.5 18.7793C15.3953 18.7793 15.298 18.7298 15.1033 18.6309L13.5386 17.8357C12.8462 17.4838 12.5 17.3079 12.5 17.0293V13.5293M15.5 18.7793V15.2793M18.5 13.5293C18.5 13.2507 18.1538 13.0748 17.4614 12.7229L15.8967 11.9277C15.702 11.8288 15.6047 11.7793 15.5 11.7793C15.3953 11.7793 15.298 11.8288 15.1033 11.9277L13.5386 12.7229C12.8462 13.0748 12.5 13.2507 12.5 13.5293M18.5 13.5293C18.5 13.8079 18.1538 13.9838 17.4614 14.3357L15.8967 15.1309C15.702 15.2298 15.6047 15.2793 15.5 15.2793M12.5 13.5293C12.5 13.8079 12.8462 13.9838 13.5386 14.3357L15.1033 15.1309C15.298 15.2298 15.3953 15.2793 15.5 15.2793',
  d10: 'M2 4V8.02171V12.0434C2 12.7473 3.20532 13.5468 6.15679 13.9141M2.10726 8.54768C3.31161 9.60965 5.48529 9.99837 7.78006 9.99837M13.9884 4.12134V6.13597',
  d11: 'M3.52019 1.87427C4.70117 1.48061 6.28497 1.25 8 1.25C9.71503 1.25 11.2988 1.48061 12.4798 1.87427C13.0664 2.0698 13.5952 2.31915 13.9927 2.63245C14.3818 2.93909 14.75 3.39556 14.75 4C14.75 4.60444 14.3818 5.06091 13.9927 5.36755C13.5952 5.68085 13.0664 5.9302 12.4798 6.12573C11.2988 6.51939 9.71503 6.75 8 6.75C6.28497 6.75 4.70117 6.51939 3.52019 6.12573C2.93362 5.9302 2.40483 5.68085 2.00728 5.36755C1.61818 5.06091 1.25 4.60444 1.25 4C1.25 3.39556 1.61818 2.93909 2.00728 2.63245C2.40483 2.31915 2.93362 2.0698 3.52019 1.87427Z',
  d12: 'M3.17857 11.7291C3.1826 11.7335 3.18721 11.7383 3.19246 11.7436C3.27415 11.8261 3.44305 11.9487 3.73691 12.0834C4.32023 12.3507 5.20834 12.5807 6.30504 12.7018C6.83446 12.7603 7.21688 13.2425 7.15918 13.7788C7.10148 14.3152 6.62553 14.7026 6.0961 14.6442C4.87844 14.5097 3.7734 14.2445 2.94218 13.8636C2.52876 13.6742 2.13503 13.4345 1.83091 13.1274C1.52361 12.817 1.25 12.3742 1.25 11.8155V4H3.17857V7.82199C3.1941 7.83872 3.21818 7.862 3.25432 7.89166C3.41348 8.02227 3.70283 8.18373 4.14708 8.33956C5.02607 8.64786 6.30577 8.86314 7.77599 8.88314C8.30851 8.89039 8.7344 9.33361 8.72725 9.8731C8.7201 10.4126 8.28261 10.8441 7.7501 10.8368C6.13483 10.8149 4.64015 10.5802 3.51613 10.1859C3.40178 10.1458 3.28902 10.1033 3.17857 10.0582V11.7291ZM14.75 4V6.0689C14.75 6.60844 14.3183 7.04583 13.7857 7.04583C13.2532 7.04583 12.8214 6.60844 12.8214 6.0689V4H14.75Z',
  d13: 'M15.5 22.75C19.5041 22.75 22.75 19.5041 22.75 15.5C22.75 11.4959 19.5041 8.25 15.5 8.25C11.4959 8.25 8.25 11.4959 8.25 15.5C8.25 19.5041 11.4959 22.75 15.5 22.75ZM15.4431 12.817L15.5 12.7881L15.5569 12.817L17.1216 13.6122C17.2218 13.6631 17.311 13.7085 17.3913 13.75C17.311 13.7915 17.2218 13.8369 17.1216 13.8878L15.5569 14.683L15.5 14.7119L15.4431 14.683L13.8784 13.8878C13.7782 13.8369 13.689 13.7915 13.6087 13.75C13.689 13.7085 13.7782 13.6631 13.8784 13.6122L15.4431 12.817ZM16.25 16.0134L17.75 15.2511V17.0515C17.703 17.0811 17.6409 17.1171 17.5585 17.1617C17.4392 17.2264 17.2974 17.2985 17.1216 17.3878L16.25 17.8308V16.0134ZM13.8784 17.3878L14.75 17.8308V16.0134L13.25 15.2511V17.0515C13.297 17.0811 13.3591 17.1171 13.4415 17.1617C13.5608 17.2264 13.7026 17.2985 13.8784 17.3878ZM19.25 17.25V13.75C19.25 13.2328 18.9016 12.9238 18.6743 12.7626C18.4552 12.6072 18.1528 12.4535 17.8442 12.2968L17.8012 12.275L16.2365 11.4798L16.2204 11.4716L16.2203 11.4716C16.1376 11.4295 16.0373 11.3784 15.9435 11.3409C15.8297 11.2953 15.6807 11.25 15.5 11.25C15.3193 11.25 15.1703 11.2953 15.0565 11.3409C14.9627 11.3784 14.8624 11.4295 14.7797 11.4716L14.7635 11.4798L13.1988 12.275L13.1558 12.2968L13.1558 12.2968C12.8472 12.4535 12.5448 12.6072 12.3257 12.7626C12.0984 12.9238 11.75 13.2328 11.75 13.75V17.25C11.75 17.7672 12.0985 18.0762 12.3257 18.2374C12.5448 18.3928 12.8472 18.5465 13.1558 18.7032L13.1988 18.725L14.7635 19.5202L14.7797 19.5284C14.8624 19.5705 14.9627 19.6216 15.0565 19.6591C15.1703 19.7047 15.3193 19.75 15.5 19.75C15.6807 19.75 15.8297 19.7047 15.9435 19.6591C16.0373 19.6216 16.1376 19.5706 16.2203 19.5285L16.2204 19.5284L16.2365 19.5202L17.8012 18.725L17.8442 18.7032L17.8442 18.7032C18.1528 18.5465 18.4552 18.3928 18.6743 18.2374C18.9016 18.0762 19.25 17.7672 19.25 17.25Z',
  d14: 'M22.75 15.5C22.75 19.5041 19.5041 22.75 15.5 22.75C11.4959 22.75 8.25 19.5041 8.25 15.5C8.25 11.4959 11.4959 8.25 15.5 8.25C19.5041 8.25 22.75 11.4959 22.75 15.5Z',
  d15: 'M19.25 17.25V13.75C19.25 13.2328 18.9016 12.9238 18.6743 12.7626C18.4552 12.6072 18.1528 12.4535 17.8442 12.2968L16.2204 11.4716C16.1376 11.4295 16.0373 11.3784 15.9435 11.3409C15.8297 11.2953 15.6807 11.25 15.5 11.25C15.3193 11.25 15.1703 11.2953 15.0565 11.3409C14.9627 11.3784 14.8624 11.4295 14.7797 11.4716L13.1558 12.2968C12.8472 12.4535 12.5448 12.6072 12.3257 12.7626C12.0984 12.9238 11.75 13.2328 11.75 13.75V17.25C11.75 17.7672 12.0985 18.0762 12.3257 18.2374C12.5448 18.3928 12.8472 18.5465 13.1558 18.7032L14.7797 19.5284C14.8624 19.5705 14.9627 19.6216 15.0565 19.6591C15.1703 19.7047 15.3193 19.75 15.5 19.75C15.6807 19.75 15.8297 19.7047 15.9435 19.6591C16.0373 19.6216 16.1376 19.5705 16.2203 19.5284L17.8442 18.7032C18.1528 18.5465 18.4552 18.3928 18.6743 18.2374C18.9016 18.0762 19.25 17.7672 19.25 17.25ZM14.75 17.8307L13.25 17.0514V15.251L14.75 16.0133V17.8307ZM16.25 16.0133L17.75 15.251V17.0514L16.25 17.8307V16.0133Z',
  d16: 'M8.00554 6C11.318 6 14.0033 5.10457 14.0033 4C14.0033 2.89543 11.318 2 8.00554 2C4.69309 2 2.00781 2.89543 2.00781 4C2.00781 5.10457 4.69309 6 8.00554 6Z',
  d17: 'M15.5024 9C11.914 9 9.00488 11.9101 9.00488 15.5C9.00488 19.0898 11.914 22 15.5024 22C19.0909 22 22 19.0899 22 15.5C22 11.9101 19.0909 9 15.5024 9Z',
  d18: 'M15.5028 15.5L18.3216 13.8551M15.5028 15.5L12.75 13.8936M15.5028 15.5V18.775M18.5016 13.75L15.5028 12L12.5039 13.75V17.25L15.5028 19L18.5016 17.25V13.75Z',
  d19: 'M7.77177 10.0219C4.4583 10.0219 2 9.09411 2 8.10024M13.9991 7.10024V3.90137M2 3.90137V12.0328C2 12.8389 3.7604 13.6775 6.19622 13.9065',
  d20: 'M3.17857 11.7291C3.26026 11.8116 3.44305 11.9487 3.73691 12.0834C4.28273 12.3335 5.09539 12.551 6.0961 12.6771V14.6442C4.87844 14.5097 3.77341 14.2445 2.94218 13.8636C2.52876 13.6742 2.13503 13.4345 1.83091 13.1274C1.52361 12.817 1.25 12.3742 1.25 11.8155V4H3.17857V7.82199C3.39486 8.01581 3.70283 8.18373 4.14708 8.33956C5.02607 8.64786 6.30577 8.86314 7.77599 8.88314L7.7501 10.8368C6.13483 10.8149 4.64015 10.5802 3.51613 10.1859C3.40178 10.1458 3.28902 10.1033 3.17857 10.0582V11.7291Z',
  d21: 'M14.75 4V7.0689H12.8214V4H14.75Z',
  d22: 'M15.5 22.75C19.5041 22.75 22.75 19.5041 22.75 15.5C22.75 11.4959 19.5041 8.25 15.5 8.25C11.4959 8.25 8.25 11.4959 8.25 15.5C8.25 19.5041 11.4959 22.75 15.5 22.75ZM18.8779 13.1022L15.8779 11.3522C15.6444 11.2159 15.3556 11.2159 15.1221 11.3522L12.1221 13.1022C11.8917 13.2366 11.75 13.4832 11.75 13.75V17.25C11.75 17.5168 11.8917 17.7634 12.1221 17.8978L15.1221 19.6478C15.3556 19.7841 15.6444 19.7841 15.8779 19.6478L18.8779 17.8978C19.1083 17.7634 19.25 17.5168 19.25 17.25V13.75C19.25 13.4832 19.1083 13.2366 18.8779 13.1022ZM14.75 15.9308L13.25 15.0558V16.8192L14.75 17.6942V15.9308ZM17.75 16.8192L16.25 17.6942V15.9308L17.75 15.0558V16.8192ZM17.0115 13.75L15.5 14.6317L13.9885 13.75L15.5 12.8683L17.0115 13.75Z',
} as const;

export const IconStakeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-stroke-rounded IconStakeStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStakeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-duotone-rounded IconStakeDuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStakeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-twotone-rounded IconStakeTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconStakeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-solid-rounded IconStakeSolidRounded"
    >
      <path 
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

export const IconStakeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-bulk-rounded IconStakeBulkRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
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

export const IconStakeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-stroke-sharp IconStakeStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStakeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stake-solid-sharp IconStakeSolidSharp"
    >
      <path 
        d={d.d11} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStake: TheIconSelfPack = {
  name: 'Stake',
  StrokeRounded: IconStakeStrokeRounded,
  DuotoneRounded: IconStakeDuotoneRounded,
  TwotoneRounded: IconStakeTwotoneRounded,
  SolidRounded: IconStakeSolidRounded,
  BulkRounded: IconStakeBulkRounded,
  StrokeSharp: IconStakeStrokeSharp,
  SolidSharp: IconStakeSolidSharp,
};