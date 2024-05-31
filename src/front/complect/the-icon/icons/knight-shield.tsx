import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z',
  d2: 'M19.1137 4.89038L6.00049 18.0036',
  d3: 'M11.9979 1.99927C9.14846 1.99927 7.30086 4.01826 5.11578 4.75417C4.22731 5.0534 3.78308 5.20301 3.60329 5.41392C3.42351 5.62483 3.37087 5.93302 3.26558 6.5494C2.13888 13.1453 4.60153 19.2433 10.4746 21.6168C11.1056 21.8718 11.4212 21.9993 12.001 21.9993C12.5808 21.9993 12.8963 21.8718 13.5273 21.6168C19.4001 19.2432 21.8604 13.1453 20.7334 6.5494C20.628 5.93291 20.5754 5.62467 20.3955 5.41376C20.2157 5.20285 19.7715 5.05332 18.8831 4.75426C16.6972 4.01842 14.8475 1.99927 11.9979 1.99927Z',
  d4: 'M20.734 6.55062C21.861 13.1464 19.4007 19.2444 13.528 21.6179C12.897 21.873 12.5815 22.0005 12.0016 22.0005C11.4218 22.0005 11.1063 21.873 10.4752 21.618C8.54846 20.8393 6.98872 19.6597 5.80237 18.1932L6.00026 18.0005L19.0002 5.00049L19.1462 4.84399C19.8615 5.08624 20.235 5.22596 20.3962 5.41498C20.576 5.62588 20.6286 5.93416 20.734 6.55062Z',
  d5: 'M19.005 5.01099L5.99475 17.9877',
  d6: 'M19.082 4.89038L5.96875 18.0036',
  d7: 'M7.91778 2.44629C9.03747 1.83475 10.3599 1.25 11.9982 1.25C13.6363 1.25 14.9593 1.83475 16.0796 2.44625C17.2679 3.09493 18.0864 3.6703 19.0475 3.99344C19.6925 4.21026 20.499 4.39022 20.9599 4.93011C21.3288 5.36227 21.412 5.93388 21.5043 6.47413C22.5856 12.7975 20.111 19.7812 13.8197 22.3218C13.2217 22.5633 12.7596 22.75 12.0012 22.75C11.2428 22.75 10.7807 22.5634 10.1827 22.3218C3.89154 19.7812 1.41519 12.7916 2.49502 6.47423C2.58733 5.93403 2.67048 5.36249 3.03932 4.93034C3.50016 4.3904 4.30672 4.21033 4.95164 3.99341C5.91236 3.67025 6.72991 3.09506 7.91778 2.44629ZM5.57644 5.84577C5.36589 5.91659 5.16815 5.98631 4.99677 6.04896C4.77944 6.12841 4.67077 6.16813 4.58457 6.27118C4.48265 6.39302 4.46984 6.53684 4.41823 6.83859C3.82252 10.3216 4.3082 13.576 5.79246 16.1224C5.95722 16.4051 6.0396 16.5464 6.18656 16.5655C6.33352 16.5846 6.45417 16.4643 6.69548 16.2238L16.892 6.06207C17.1643 5.7908 17.3004 5.65516 17.2793 5.50691C17.2583 5.35866 17.0851 5.26334 16.7387 5.07272C16.1683 4.75882 15.6274 4.42682 15.1411 4.16138C14.1246 3.60647 13.1484 3.20459 11.9983 3.20459C10.8483 3.20459 9.87274 3.6064 8.85692 4.16121C7.90927 4.67878 6.75383 5.44973 5.57644 5.84577Z',
  d8: 'M19.3888 4.13392L18.9473 3.98438L4.79712 18.1431L5.22182 18.6677C6.48863 20.2326 8.15179 21.4875 10.1942 22.3129L10.2288 22.3269C10.8421 22.5749 11.2755 22.7501 12.0016 22.7501C12.7277 22.7501 13.1611 22.5749 13.7744 22.3269L13.809 22.3129C20.0953 19.7722 22.6382 13.2691 21.4755 6.43717L21.4682 6.39414C21.4199 6.1115 21.3752 5.84984 21.317 5.63448C21.2534 5.39929 21.1572 5.15116 20.9669 4.92797C20.7708 4.69796 20.5044 4.5604 20.2805 4.4623C20.0433 4.35842 19.7408 4.25312 19.3888 4.13392Z',
  d9: 'M19.3886 4.13384C19.3047 4.10541 19.2162 4.07563 19.1238 4.04451L19.1228 4.04418C18.4071 3.80327 17.757 3.42491 17.0176 2.99465C16.7136 2.81771 16.3945 2.63199 16.0495 2.44344C14.9179 1.82496 13.6102 1.25 11.9983 1.25C10.3865 1.25 9.07927 1.82495 7.94824 2.44345C7.60335 2.63206 7.28434 2.81782 6.98042 2.99479C6.24181 3.42488 5.59184 3.80324 4.87677 4.04414L4.85089 4.05285C4.42871 4.19503 4.07564 4.31393 3.80749 4.42485C3.55366 4.52984 3.24828 4.67545 3.03291 4.92811C2.84267 5.15129 2.74648 5.3994 2.68289 5.63457C2.62466 5.84993 2.58 6.11152 2.53174 6.39415L2.52667 6.42385C1.74162 11.0197 2.62527 15.4604 5.22161 18.6676L5.74595 19.3153L20.5315 4.52091L19.3886 4.13384Z',
  d10: 'M18.998 5.00781L5.70996 18.5269',
  d11: 'M11.9767 2.23633C7.77145 2.3706 7.21173 5.22781 3.02169 5.22781C0.402728 16.3467 7.95944 21.7515 12.0239 22.2363C16.4162 21.4887 23.3574 16.4225 21.0163 5.21395C16.8263 5.21395 16.1819 2.3706 11.9767 2.23633Z',
  d12: 'M12.0003 1.25C10.0579 1.25 8.53712 2.08008 7.19475 2.8128L7.144 2.8405C5.75155 3.60038 4.54004 4.2476 3.01432 4.2476H2.42008L2.28419 4.82563C1.04104 10.1135 2.03667 14.9242 4.65403 18.2713L19.0447 3.89216C18.3186 3.63167 17.6181 3.2528 16.8635 2.84064L16.8181 2.81581C15.4747 2.08191 13.9519 1.25 12.0003 1.25Z',
  d13: 'M20.8131 4.2448L5.64983 19.3959C7.28518 21.0284 9.3831 22.1888 11.8429 22.7163L12.0002 22.75L12.1576 22.7163C19.6506 21.1096 23.7859 13.6288 21.7164 4.82563L21.5805 4.2476H20.9862C20.9281 4.2476 20.8704 4.24666 20.8131 4.2448Z',
} as const;

export const IconKnightShieldStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-stroke-rounded IconKnightShieldStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconKnightShieldDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-duotone-rounded IconKnightShieldDuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconKnightShieldTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-twotone-rounded IconKnightShieldTwotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconKnightShieldSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-solid-rounded IconKnightShieldSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnightShieldBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-bulk-rounded IconKnightShieldBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnightShieldStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-stroke-sharp IconKnightShieldStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnightShieldSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knight-shield-solid-sharp IconKnightShieldSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKnightShield: TheIconSelfPack = {
  name: 'KnightShield',
  StrokeRounded: IconKnightShieldStrokeRounded,
  DuotoneRounded: IconKnightShieldDuotoneRounded,
  TwotoneRounded: IconKnightShieldTwotoneRounded,
  SolidRounded: IconKnightShieldSolidRounded,
  BulkRounded: IconKnightShieldBulkRounded,
  StrokeSharp: IconKnightShieldStrokeSharp,
  SolidSharp: IconKnightShieldSolidSharp,
};