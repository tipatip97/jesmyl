import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 11V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22',
  d2: 'M21 22L19.2857 20.2857M19.8571 17.4286C19.8571 19.3221 18.3221 20.8571 16.4286 20.8571C14.535 20.8571 13 19.3221 13 17.4286C13 15.535 14.535 14 16.4286 14C18.3221 14 19.8571 15.535 19.8571 17.4286Z',
  d3: 'M7 7H15M7 11H11',
  d4: 'M19 14V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V16C3 17.8638 3 18.7956 3.30448 19.5307C3.71046 20.5108 4.48915 21.2895 5.46927 21.6955C6.20435 22 7.13623 22 9 22H11C14.7712 22 16.6569 22 17.8284 20.8284C17.9739 20.683 18.1012 20.5266 18.2128 20.3569C17.693 20.6743 17.0822 20.8571 16.4286 20.8571C14.535 20.8571 13 19.3221 13 17.4286C13 15.535 14.535 14 16.4286 14C17.4518 14 18.3703 14.4482 18.9985 15.159C19 14.7938 19 14.4079 19 14Z',
  d5: 'M16.4571 15.15C15.1829 15.15 14.15 16.1829 14.15 17.4571C14.15 18.7313 15.1829 19.7643 16.4571 19.7643C17.7313 19.7643 18.7643 18.7313 18.7643 17.4571C18.7643 16.1829 17.7313 15.15 16.4571 15.15ZM12.25 17.4571C12.25 15.1336 14.1336 13.25 16.4571 13.25C18.7807 13.25 20.6643 15.1336 20.6643 17.4571C20.6643 18.2748 20.431 19.0381 20.0274 19.6839L21.4718 21.1282C21.8427 21.4992 21.8427 22.1008 21.4718 22.4718C21.1008 22.8427 20.4992 22.8427 20.1282 22.4718L18.6839 21.0274C18.0381 21.431 17.2748 21.6643 16.4571 21.6643C14.1336 21.6643 12.25 19.7807 12.25 17.4571Z',
  d6: 'M11.0564 1.25C12.8942 1.24999 14.3498 1.24997 15.489 1.40314C16.6614 1.56076 17.6104 1.89288 18.3588 2.64124C19.1071 3.38961 19.4392 4.33856 19.5969 5.51098C19.75 6.65018 19.75 8.10585 19.75 9.94359V12.7952C18.8196 12.1368 17.6836 11.75 16.4571 11.75C13.3052 11.75 10.75 14.3052 10.75 17.4571C10.75 19.8123 12.1766 21.8343 14.2129 22.7061C13.3144 22.75 12.2685 22.75 11.0565 22.75H11.0564C9.21865 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24999 15.8942 2.25 14.0564V14.0564V9.94357V9.94356C2.24999 8.10581 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.21867 1.24999 11.0564 1.25H11.0564ZM7 6.25C6.58579 6.25 6.25 6.58579 6.25 7C6.25 7.41421 6.58579 7.75 7 7.75H15C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25H7ZM7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75H11C11.4142 11.75 11.75 11.4142 11.75 11C11.75 10.5858 11.4142 10.25 11 10.25H7Z',
  d7: 'M15.489 1.40314C14.3498 1.24997 12.8942 1.24998 11.0564 1.25C9.21867 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V14.0564C2.24998 15.8942 2.24997 17.3498 2.40314 18.489C2.56076 19.6614 2.89288 20.6104 3.64124 21.3588C4.38961 22.1071 5.33856 22.4392 6.51098 22.5969C7.65019 22.75 9.21865 22.75 11.0564 22.75C12.2685 22.75 13.3144 22.75 14.2129 22.7061C12.1766 21.8343 10.75 19.8123 10.75 17.4571C10.75 14.3052 13.3052 11.75 16.4571 11.75C17.6836 11.75 18.8196 12.1368 19.75 12.7952V9.94359C19.75 8.10585 19.75 6.65018 19.5969 5.51098C19.4392 4.33856 19.1071 3.38961 18.3588 2.64124C17.6104 1.89288 16.6614 1.56076 15.489 1.40314Z',
  d8: 'M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7ZM6.25 11C6.25 10.5858 6.58579 10.25 7 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H7C6.58579 11.75 6.25 11.4142 6.25 11Z',
  d9: 'M19.007 11.4929V2H3V21.985H12.0039',
  d10: 'M7.00195 6.99609H15.0054M7.00195 10.9931H11.0037',
  d11: 'M18.8636 19.8377C19.5013 19.2139 19.8721 18.3582 19.8721 17.3963C19.8721 15.4985 18.3318 13.96 16.4317 13.96C14.5316 13.96 12.9912 15.4985 12.9912 17.3963C12.9912 19.2942 14.5316 20.8327 16.4317 20.8327C17.3687 20.8327 18.2432 20.4446 18.8636 19.8377ZM18.8636 19.8377L21.0001 21.9973',
  d12: 'M16.4715 15.043C15.1303 15.043 14.043 16.1303 14.043 17.4715C14.043 18.8128 15.1303 19.9001 16.4715 19.9001C17.8128 19.9001 18.9001 18.8128 18.9001 17.4715C18.9001 16.1303 17.8128 15.043 16.4715 15.043ZM12.043 17.4715C12.043 15.0257 14.0257 13.043 16.4715 13.043C18.9174 13.043 20.9001 15.0257 20.9001 17.4715C20.9001 18.3323 20.6546 19.1357 20.2297 19.8155L21.7501 21.3359L20.3359 22.7501L18.8155 21.2297C18.1357 21.6546 17.3323 21.9001 16.4715 21.9001C14.0257 21.9001 12.043 19.9174 12.043 17.4715Z',
  d13: 'M2.25 1.25H19.75V12.5312C18.811 11.9068 17.6837 11.543 16.4715 11.543C13.1973 11.543 10.543 14.1973 10.543 17.4715C10.543 19.7726 11.8539 21.7674 13.7696 22.75H2.25V1.25ZM7 7.75H15V6.25H7V7.75ZM7 11.75H11V10.25H7V11.75Z',
} as const;

export const IconAudit02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-stroke-rounded IconAudit02StrokeRounded"
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

export const IconAudit02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-duotone-rounded IconAudit02DuotoneRounded"
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
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAudit02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-twotone-rounded IconAudit02TwotoneRounded"
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

export const IconAudit02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-solid-rounded IconAudit02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudit02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-bulk-rounded IconAudit02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAudit02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-stroke-sharp IconAudit02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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

export const IconAudit02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="audit-02-solid-sharp IconAudit02SolidSharp"
    >
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

export const iconPackOfAudit02: TheIconSelfPack = {
  name: 'Audit02',
  StrokeRounded: IconAudit02StrokeRounded,
  DuotoneRounded: IconAudit02DuotoneRounded,
  TwotoneRounded: IconAudit02TwotoneRounded,
  SolidRounded: IconAudit02SolidRounded,
  BulkRounded: IconAudit02BulkRounded,
  StrokeSharp: IconAudit02StrokeSharp,
  SolidSharp: IconAudit02SolidSharp,
};