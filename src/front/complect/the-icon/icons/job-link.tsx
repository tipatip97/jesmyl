import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0065 21.5H9.60546C6.02021 21.5 4.22759 21.5 3.11379 20.365C2 19.2301 2 17.4034 2 13.75C2 10.0966 2 8.26992 3.11379 7.13496C4.22759 6 6.02021 6 9.60546 6H13.4082C16.9934 6 18.7861 6 19.8999 7.13496C20.7568 8.00819 20.9544 9.2909 21 11.5V13',
  d2: 'M19 18.5H16M16 21.5C14.3431 21.5 13 20.1569 13 18.5C13 16.8431 14.3431 15.5 16 15.5M19 21.5C20.6569 21.5 22 20.1569 22 18.5C22 16.8431 20.6569 15.5 19 15.5',
  d3: 'M15.9998 6L15.9004 5.69094C15.4054 4.15089 15.1579 3.38087 14.5686 2.94043C13.9794 2.5 13.1967 2.5 11.6313 2.5H11.3682C9.8028 2.5 9.02011 2.5 8.43087 2.94043C7.84162 3.38087 7.59411 4.15089 7.0991 5.69094L6.99976 6',
  d4: 'M9.60546 6H13.4082C16.9934 6 18.7861 6 19.8999 7.13496C20.7568 8.00819 20.9544 9.2909 21 11.5V13.5C21 14.5521 21 15.4574 20.9746 16.2414C20.4469 15.7797 19.7561 15.5 19 15.5H16C14.3431 15.5 13 16.8431 13 18.5C13 20.0329 14.1497 21.2973 15.6338 21.4779C14.8748 21.5 14.0043 21.5 13 21.5H9.60546C6.02021 21.5 4.22759 21.5 3.11379 20.365C2 19.2301 2 17.4034 2 13.75C2 10.0966 2 8.26992 3.11379 7.13496C4.22759 6 6.02021 6 9.60546 6Z',
  d5: 'M16 16.25C14.7574 16.25 13.75 17.2574 13.75 18.5C13.75 19.7426 14.7574 20.75 16 20.75C16.4142 20.75 16.75 21.0858 16.75 21.5C16.75 21.9142 16.4142 22.25 16 22.25C13.9289 22.25 12.25 20.5711 12.25 18.5C12.25 16.4289 13.9289 14.75 16 14.75C16.4142 14.75 16.75 15.0858 16.75 15.5C16.75 15.9142 16.4142 16.25 16 16.25ZM18.25 15.5C18.25 15.0858 18.5858 14.75 19 14.75C21.0711 14.75 22.75 16.4289 22.75 18.5C22.75 20.5711 21.0711 22.25 19 22.25C18.5858 22.25 18.25 21.9142 18.25 21.5C18.25 21.0858 18.5858 20.75 19 20.75C20.2426 20.75 21.25 19.7426 21.25 18.5C21.25 17.2574 20.2426 16.25 19 16.25C18.5858 16.25 18.25 15.9142 18.25 15.5ZM15.25 18.5C15.25 18.0858 15.5858 17.75 16 17.75H19C19.4142 17.75 19.75 18.0858 19.75 18.5C19.75 18.9142 19.4142 19.25 19 19.25H16C15.5858 19.25 15.25 18.9142 15.25 18.5Z',
  d6: 'M13.4653 5.25H9.54836H9.54835C7.8042 5.24998 6.41746 5.24997 5.33103 5.39881C4.20972 5.55243 3.29737 5.87711 2.5785 6.60965C1.86155 7.34022 1.54553 8.26413 1.39567 9.39997C1.24997 10.5042 1.24999 12.0256 1.25 13.8053V13.8053C1.24999 15.5851 1.24997 16.9958 1.39567 18.1C1.54553 19.2359 1.86155 20.1598 2.5785 20.8904C3.29737 21.6229 4.20972 21.9476 5.33103 22.1012C6.41745 22.25 7.80415 22.25 9.54827 22.25H12.3258C11.3534 21.2971 10.75 19.969 10.75 18.5C10.75 15.6005 13.1005 13.25 16 13.25H19C20.0083 13.25 20.9502 13.5343 21.75 14.027V11.4923L21.7498 11.4845C21.705 9.30913 21.5271 7.72233 20.4352 6.60965C19.7163 5.87711 18.8039 5.55243 17.6826 5.39881C16.5962 5.24997 15.2095 5.24998 13.4653 5.25H13.4653Z',
  d7: 'M11.5 1.75C12.202 1.74997 12.9887 1.74994 13.489 1.80636C14.0285 1.86718 14.5376 2.00167 15.0007 2.3313C15.4609 2.65886 15.7452 3.08653 15.9695 3.56267C16.1797 4.00911 16.3706 4.57486 16.5936 5.23559L16.704 5.56253C16.8653 6.0405 16.5892 6.55251 16.0873 6.70615C15.5855 6.85978 15.0478 6.59685 14.8865 6.11889C14.6437 5.39941 14.3894 4.65013 14.2277 4.30681C14.0751 3.98287 13.9601 3.86036 13.8578 3.78755C13.7584 3.71681 13.6129 3.65111 13.2646 3.61184C12.8898 3.56957 12.2699 3.56809 11.5 3.56809C10.7301 3.56809 10.1102 3.56957 9.73541 3.61184C9.38714 3.65111 9.24158 3.71681 9.1422 3.78755C9.03992 3.86036 8.9249 3.98287 8.77232 4.30681C8.61061 4.65013 8.35629 5.39941 8.11347 6.11889C7.95215 6.59685 7.41454 6.85978 6.91267 6.70615C6.4108 6.55251 6.13473 6.0405 6.29605 5.56253L6.40639 5.23559L6.40639 5.23558C6.62935 4.57485 6.82027 4.00911 7.03055 3.56267C7.25482 3.08653 7.53914 2.65886 7.9993 2.3313C8.46236 2.00167 8.97155 1.86718 9.51096 1.80636C10.0113 1.74994 10.798 1.74997 11.5 1.75Z',
  d8: 'M13.4896 1.80636C12.9893 1.74994 12.2026 1.74997 11.5006 1.75C10.7986 1.74997 10.0119 1.74994 9.51156 1.80636C8.97215 1.86718 8.46296 2.00167 7.9999 2.3313C7.53975 2.65886 7.25542 3.08653 7.03115 3.56267C6.82087 4.00911 6.62996 4.57485 6.40699 5.23558L6.38477 5.30145C6.98672 5.26671 7.6599 5.25542 8.41038 5.25176C8.54926 4.85488 8.67729 4.50985 8.77292 4.30681C8.92551 3.98287 9.04052 3.86036 9.14281 3.78755C9.24218 3.71681 9.38775 3.65111 9.73601 3.61184C10.1109 3.56957 10.7308 3.56809 11.5006 3.56809C12.2705 3.56809 12.8904 3.56957 13.2652 3.61184C13.6135 3.65111 13.759 3.71681 13.8584 3.78755C13.9607 3.86036 14.0757 3.98287 14.2283 4.30681C14.3239 4.50984 14.4519 4.85484 14.5908 5.25169C15.341 5.25526 16.0141 5.26632 16.6162 5.30065L16.5942 5.23559C16.3713 4.57486 16.1803 4.00911 15.9701 3.56267C15.7458 3.08653 15.4615 2.65886 15.0013 2.3313C14.5382 2.00167 14.0291 1.86718 13.4896 1.80636Z',
  d9: 'M21 13.5V6H2V21.5H12',
  d10: 'M16 6L15 2.5H8L7 6',
  d11: 'M7.24147 2.40931C7.35855 2.01906 7.73308 1.75 8.15925 1.75H14.8408C15.2669 1.75 15.6415 2.01906 15.7585 2.40931L16.713 5.59098C16.8579 6.07372 16.5643 6.57686 16.0575 6.71479C15.5506 6.85271 15.0223 6.57319 14.8775 6.09045L14.1208 3.5681H8.87923L8.12252 6.09045C7.9777 6.57319 7.4494 6.85271 6.94253 6.71479C6.43565 6.57686 6.14215 6.07372 6.28697 5.59098L7.24147 2.40931Z',
  d12: 'M16 16.25C14.7574 16.25 13.75 17.2574 13.75 18.5C13.75 19.7426 14.7574 20.75 16 20.75V22.25C13.9289 22.25 12.25 20.5711 12.25 18.5C12.25 16.4289 13.9289 14.75 16 14.75V16.25ZM19 14.75C21.0711 14.75 22.75 16.4289 22.75 18.5C22.75 20.5711 21.0711 22.25 19 22.25V20.75C20.2426 20.75 21.25 19.7426 21.25 18.5C21.25 17.2574 20.2426 16.25 19 16.25V14.75ZM16 17.75H19V19.25H16V17.75Z',
  d13: 'M2 5.25C1.58579 5.25 1.25 5.58579 1.25 6V21.5C1.25 21.9142 1.58579 22.25 2 22.25H12.3258C11.3534 21.2971 10.75 19.969 10.75 18.5C10.75 15.6005 13.1005 13.25 16 13.25H19C20.0083 13.25 20.9502 13.5343 21.75 14.027V6C21.75 5.58579 21.4142 5.25 21 5.25H2Z',
} as const;

export const IconJobLinkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-stroke-rounded IconJobLinkStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconJobLinkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-duotone-rounded IconJobLinkDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconJobLinkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-twotone-rounded IconJobLinkTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconJobLinkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-solid-rounded IconJobLinkSolidRounded"
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

export const IconJobLinkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-bulk-rounded IconJobLinkBulkRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJobLinkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-stroke-sharp IconJobLinkStrokeSharp"
    >
      <path 
        d={d.d9} 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJobLinkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-link-solid-sharp IconJobLinkSolidSharp"
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJobLink: TheIconSelfPack = {
  name: 'JobLink',
  StrokeRounded: IconJobLinkStrokeRounded,
  DuotoneRounded: IconJobLinkDuotoneRounded,
  TwotoneRounded: IconJobLinkTwotoneRounded,
  SolidRounded: IconJobLinkSolidRounded,
  BulkRounded: IconJobLinkBulkRounded,
  StrokeSharp: IconJobLinkStrokeSharp,
  SolidSharp: IconJobLinkSolidSharp,
};