import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.9999 13.9824H16.0742C15.2321 13.9824 14.5705 14.686 14.1994 15.4296C13.7962 16.2375 12.9888 16.9824 11.4999 16.9824C10.011 16.9824 9.20361 16.2375 8.80042 15.4296C8.4293 14.686 7.76765 13.9824 6.92554 13.9824H1.99988',
  d2: 'M16.66 5.97537C16.66 5.97537 17.0371 6.09064 17.5607 6.85858C17.5607 6.85858 18.3286 5.20059 19.3933 4.62463',
  d3: 'M21.0166 12.4918C21.0166 16.974 21.0166 19.2152 19.6242 20.6077C18.2316 22.0001 15.9905 22.0001 11.5082 22.0001C7.02596 22.0001 4.78482 22.0001 3.39234 20.6077C1.99988 19.2152 1.99988 16.974 1.99988 12.4918C1.99988 8.00948 1.99988 5.76834 3.39234 4.37586C4.78482 2.9834 7.02596 2.9834 11.5082 2.9834',
  d4: 'M22 5.98324C22 8.18312 20.2167 9.96647 18.0168 9.96647C15.8169 9.96647 14.0336 8.18312 14.0336 5.98324C14.0336 3.78336 15.8169 2 18.0168 2C20.2167 2 22 3.78336 22 5.98324Z',
  d5: 'M15.3074 3.03852C14.2572 2.98633 13.0081 2.98633 11.5081 2.98633C7.02611 2.98633 4.78512 2.98633 3.39274 4.37841C2.00037 5.7705 2.00037 8.01102 2.00037 12.4921C2.00037 13.0231 2.00037 13.5226 2.00268 13.993H6.93004C7.77283 13.993 8.43502 14.697 8.80644 15.4411C9.20996 16.2494 10.018 16.9948 11.5081 16.9948C12.9982 16.9948 13.8063 16.2494 14.2098 15.4411C14.5812 14.697 15.2433 13.993 16.0861 13.993L21.0135 13.9965C21.0158 13.5251 21.0158 13.0244 21.0158 12.4921C21.0158 10.9924 21.0158 9.74355 20.9636 8.69356C20.2319 9.4908 19.181 9.99056 18.0134 9.99056C15.8025 9.99056 14.0101 8.19862 14.0101 5.98814C14.0101 4.82078 14.51 3.77014 15.3074 3.03852Z',
  d6: 'M21.0158 12.4921C21.0158 16.9731 21.0158 19.2136 19.6235 20.6058C18.2311 21.9978 15.99 21.9978 11.5081 21.9978C7.02611 21.9978 4.78512 21.9978 3.39274 20.6058C2.00037 19.2136 2.00037 16.9731 2.00037 12.4921C2.00037 8.01102 2.00037 5.7705 3.39274 4.37841C4.78512 2.98633 7.02611 2.98633 11.5081 2.98633',
  d7: 'M21.0158 13.9932H16.0861C15.2433 13.9932 14.5812 14.6972 14.2098 15.4412C13.8063 16.2496 12.9982 16.995 11.5081 16.995C10.018 16.995 9.20996 16.2496 8.80644 15.4412C8.43502 14.6972 7.77283 13.9932 6.93004 13.9932H2.00037',
  d8: 'M16.6556 5.98046C16.6556 5.98046 17.033 6.0958 17.5571 6.86421C17.5571 6.86421 18.3256 5.20521 19.3912 4.62891',
  d9: 'M21.9996 5.98809C21.9996 8.1893 20.2149 9.97373 18.0132 9.97373C15.8115 9.97373 14.0267 8.1893 14.0267 5.98809C14.0267 3.78688 15.8115 2.00244 18.0132 2.00244C20.2149 2.00244 21.9996 3.78688 21.9996 5.98809Z',
  d10: 'M21.0001 12.4916C21.0001 16.9744 21.0001 19.2159 19.6089 20.6086C18.2176 22.0012 15.9784 22.0012 11.5001 22.0012C7.02178 22.0012 4.78261 22.0012 3.39136 20.6086C2.00012 19.2159 2.00012 16.9744 2.00012 12.4916C2.00012 8.00868 2.00012 5.76724 3.39136 4.37458C4.78261 2.98193 7.02178 2.98193 11.5001 2.98193',
  d11: 'M21.0001 13.9932H16.0744C15.2323 13.9932 14.5707 14.6975 14.1996 15.4418C13.7964 16.2505 12.989 16.9962 11.5001 16.9962C10.0112 16.9962 9.20385 16.2505 8.80066 15.4418C8.42954 14.6975 7.76789 13.9932 6.92578 13.9932H2.00012',
  d12: 'M16.6599 5.97793C16.6599 5.97793 17.037 6.09332 17.5606 6.86204C17.5606 6.86204 18.3285 5.20236 19.3932 4.62582M21.9998 5.9858C21.9998 8.18791 20.2164 9.97307 18.0166 9.97307C15.8167 9.97307 14.0333 8.18791 14.0333 5.9858C14.0333 3.7837 15.8167 1.99854 18.0166 1.99854C20.2164 1.99854 21.9998 3.7837 21.9998 5.9858Z',
  d13: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM19.6884 5.3285C20.0531 5.13216 20.1896 4.67733 19.9932 4.31261C19.7969 3.94788 19.3421 3.81138 18.9773 4.00773C18.3195 4.36188 17.7563 5.10818 17.4255 5.60905C17.3158 5.5213 17.1106 5.38248 16.9891 5.32453C16.6153 5.14618 16.1676 5.30467 15.9893 5.67852C15.8126 6.04892 15.9665 6.49177 16.333 6.67337C16.333 6.67337 16.4367 6.73845 16.4958 6.78627C16.6141 6.88211 16.7719 7.0386 16.9089 7.27106C17.0496 7.5098 17.3104 7.65153 17.5872 7.63965C17.864 7.62777 18.1118 7.4641 18.2315 7.21431C18.2528 7.17242 18.3142 7.05185 18.3561 6.97497C18.4404 6.82046 18.5616 6.61018 18.7093 6.38669C19.0269 5.90582 19.3849 5.49185 19.6884 5.3285Z',
  d14: 'M20.1793 11.8596C19.9654 11.9391 19.8585 11.9789 19.8048 12.0562C19.7512 12.1335 19.7513 12.24 19.7516 12.453C19.7518 12.6174 19.7519 12.7831 19.7519 12.9499C19.752 13.1155 19.6176 13.25 19.4519 13.25L16.072 13.25C14.7918 13.25 13.9366 14.2898 13.5261 15.1123C13.2358 15.6938 12.6723 16.25 11.4977 16.25C10.3231 16.25 9.7595 15.6938 9.46929 15.1123C9.05879 14.2898 8.20352 13.25 6.92333 13.25L3.55194 13.25C3.38626 13.25 3.25193 13.1155 3.25197 12.9499C3.25245 10.7983 3.26128 8.82894 3.41693 7.67121C3.57593 6.4886 3.87144 5.8272 4.35029 5.34835C4.82915 4.8695 5.49055 4.57399 6.67315 4.41499C7.75804 4.26913 9.55567 4.2522 11.548 4.25025C11.7604 4.25004 11.8666 4.24994 11.9437 4.19628C12.0208 4.14261 12.0604 4.03598 12.1397 3.82272C12.2094 3.63521 12.2878 3.45194 12.3745 3.27343C12.6146 2.77898 12.7347 2.53175 12.6465 2.39096C12.5584 2.25016 12.3051 2.25012 11.7986 2.25002L11.6775 2.25C9.50152 2.24998 7.76678 2.24996 6.40666 2.43283C5.00228 2.62164 3.84847 3.02175 2.93608 3.93414C2.02369 4.84653 1.62358 6.00033 1.43477 7.40471C1.2708 8.62426 1.25387 10.5469 1.25214 12.4999L1.25 14.0037C1.25858 15.7454 1.29789 17.1539 1.50296 18.2892C1.71192 19.4461 2.10342 20.3839 2.85859 21.1391C3.71679 21.9973 4.80904 22.3843 6.1857 22.5694C7.52911 22.75 9.24978 22.75 11.4405 22.75H11.5548C13.7455 22.75 15.4662 22.75 16.8097 22.5694C18.1863 22.3843 19.2786 21.9973 20.1368 21.1391C20.8919 20.3839 21.2834 19.4461 21.4924 18.2892C21.6975 17.1539 21.7368 15.7454 21.7453 14.0037L21.7517 12.5C21.7517 12.3963 21.7515 12.2927 21.7513 12.1893C21.7504 11.6896 21.7499 11.4398 21.609 11.3519C21.468 11.264 21.2238 11.3831 20.7353 11.6212C20.5547 11.7093 20.3691 11.7889 20.1793 11.8596Z',
  d15: 'M12 4H2V22H20V12',
  d16: 'M20 15H14C14 16.6569 12.6569 18 11 18C9.34315 18 8 16.6569 8 15H2',
  d17: 'M22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10C20.2091 10 22 8.20914 22 6Z',
  d18: 'M16.2407 5.73778L17.5256 6.99441L19.831 4.66113',
  d19: 'M1.25 4.225C1.25 3.68652 1.68652 3.25 2.225 3.25H11.5V5.20001H3.19922V14H8.74922V14.75C8.74922 15.9927 9.75658 17 10.9992 17C12.2419 17 13.2492 15.9927 13.2492 14.75V14H18.7992V12.5H20.75V21.775C20.75 22.3135 20.3135 22.75 19.775 22.75H2.225C1.68652 22.75 1.25 22.3135 1.25 21.775V4.225Z',
  d20: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM17.501 8.06065L20.3559 5.20574L19.2952 4.14508L17.501 5.93933L16.7599 5.19825L15.6992 6.25891L17.501 8.06065Z',
} as const;

export const IconInboxCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-stroke-rounded IconInboxCheckStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-duotone-rounded IconInboxCheckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-twotone-rounded IconInboxCheckTwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-solid-rounded IconInboxCheckSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-bulk-rounded IconInboxCheckBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-stroke-sharp IconInboxCheckStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-check-solid-sharp IconInboxCheckSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInboxCheck: TheIconSelfPack = {
  name: 'InboxCheck',
  StrokeRounded: IconInboxCheckStrokeRounded,
  DuotoneRounded: IconInboxCheckDuotoneRounded,
  TwotoneRounded: IconInboxCheckTwotoneRounded,
  SolidRounded: IconInboxCheckSolidRounded,
  BulkRounded: IconInboxCheckBulkRounded,
  StrokeSharp: IconInboxCheckStrokeSharp,
  SolidSharp: IconInboxCheckSolidSharp,
};