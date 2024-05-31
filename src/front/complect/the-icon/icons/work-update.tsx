import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11',
  d2: 'M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z',
  d3: 'M19.5 18L18.9142 18.5541C18.2475 19.1847 17.9142 19.5 17.5 19.5M15.5 18L16.0858 18.5541C16.7525 19.1847 17.0858 19.5 17.5 19.5M17.5 19.5V15.5',
  d4: 'M16 5.5L15.9007 5.19094C15.4056 3.65089 15.1581 2.88087 14.5689 2.44043C13.9796 2 13.197 2 11.6316 2H11.3684C9.80304 2 9.02036 2 8.43111 2.44043C7.84186 2.88087 7.59436 3.65089 7.09934 5.19094L7 5.5',
  d5: 'M9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11V13C21 13.6016 21 14.1551 20.9952 14.6655C20.1702 13.6493 18.9109 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 18.9109 13.6493 20.1702 14.6655 20.9952C14.1551 21 13.6015 21 13 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5Z',
  d6: 'M11.5 1.25C12.202 1.24997 12.9887 1.24994 13.489 1.30636C14.0285 1.36718 14.5376 1.50167 15.0007 1.8313C15.4609 2.15886 15.7452 2.58653 15.9695 3.06267C16.1797 3.50911 16.3706 4.07486 16.5936 4.73559L16.704 5.06253C16.8653 5.5405 16.5892 6.05251 16.0873 6.20615C15.5855 6.35978 15.0478 6.09685 14.8865 5.61889C14.6437 4.89941 14.3894 4.15013 14.2277 3.80681C14.0751 3.48287 13.9601 3.36036 13.8578 3.28755C13.7584 3.21681 13.6129 3.15111 13.2646 3.11184C12.8898 3.06957 12.2699 3.06809 11.5 3.06809C10.7301 3.06809 10.1102 3.06957 9.73541 3.11184C9.38714 3.15111 9.24158 3.21681 9.1422 3.28755C9.03992 3.36036 8.9249 3.48287 8.77232 3.80681C8.61061 4.15013 8.35629 4.89941 8.11347 5.61889C7.95215 6.09685 7.41454 6.35978 6.91267 6.20615C6.4108 6.05251 6.13473 5.5405 6.29605 5.06253L6.40639 4.73559L6.40639 4.73558C6.62935 4.07485 6.82027 3.50911 7.03055 3.06267C7.25482 2.58653 7.53914 2.15886 7.9993 1.8313C8.46236 1.50167 8.97155 1.36718 9.51096 1.30636C10.0113 1.24994 10.798 1.24997 11.5 1.25Z',
  d7: 'M13.4653 4.75H9.54836C7.80421 4.74998 6.41746 4.74997 5.33103 4.89881C4.20972 5.05243 3.29737 5.37711 2.5785 6.10965C1.86155 6.84022 1.54553 7.76413 1.39567 8.89997C1.24997 10.0042 1.24999 11.5256 1.25 13.3053C1.24999 15.0851 1.24997 16.4958 1.39567 17.6C1.54553 18.7359 1.86155 19.6598 2.5785 20.3904C3.29737 21.1229 4.20972 21.4476 5.33103 21.6012C6.41745 21.75 7.80415 21.75 9.54827 21.75H12.2557C11.3142 20.5897 10.75 19.1107 10.75 17.5C10.75 13.7721 13.7721 10.75 17.5 10.75C19.1107 10.75 20.5897 11.3142 21.75 12.2557V10.9923L21.7498 10.9845C21.705 8.80913 21.5271 7.22233 20.4352 6.10965C19.7163 5.37711 18.8039 5.05243 17.6826 4.89881C16.5962 4.74997 15.2095 4.74998 13.4653 4.75Z',
  d8: 'M17.5 12.25C14.6005 12.25 12.25 14.6005 12.25 17.5C12.25 20.3995 14.6005 22.75 17.5 22.75C20.3995 22.75 22.75 20.3995 22.75 17.5C22.75 14.6005 20.3995 12.25 17.5 12.25ZM18.25 15.5C18.25 15.0858 17.9142 14.75 17.5 14.75C17.0858 14.75 16.75 15.0858 16.75 15.5V18.1497L16.0154 17.4551C15.7145 17.1705 15.2398 17.1837 14.9551 17.4846C14.6705 17.7855 14.6837 18.2602 14.9846 18.5449L15.6021 19.129L15.6022 19.129C15.9081 19.4184 16.1893 19.6845 16.4487 19.8717C16.7358 20.0789 17.0755 20.25 17.5 20.25C17.9245 20.25 18.2642 20.0789 18.5513 19.8717C18.8107 19.6845 19.0919 19.4184 19.3978 19.129L20.0154 18.5449C20.3163 18.2602 20.3295 17.7855 20.0449 17.4846C19.7602 17.1837 19.2855 17.1705 18.9846 17.4551L18.25 18.1497V15.5Z',
  d9: 'M13.4896 1.30636C12.9893 1.24994 12.2026 1.24997 11.5006 1.25C10.7986 1.24997 10.0119 1.24994 9.51156 1.30636C8.97215 1.36718 8.46296 1.50167 7.9999 1.8313C7.53975 2.15886 7.25542 2.58653 7.03115 3.06267C6.82087 3.50911 6.62996 4.07485 6.40699 4.73558L6.38477 4.80145C6.98672 4.76671 7.6599 4.75542 8.41038 4.75176C8.54926 4.35488 8.67729 4.00985 8.77292 3.80681C8.92551 3.48287 9.04052 3.36036 9.14281 3.28755C9.24218 3.21681 9.38775 3.15111 9.73601 3.11184C10.1109 3.06957 10.7308 3.06809 11.5006 3.06809C12.2705 3.06809 12.8904 3.06957 13.2652 3.11184C13.6135 3.15111 13.759 3.21681 13.8584 3.28755C13.9607 3.36036 14.0757 3.48287 14.2283 3.80681C14.3239 4.00984 14.4519 4.35484 14.5908 4.75169C15.341 4.75526 16.0141 4.76632 16.6162 4.80065L16.5942 4.73559C16.3713 4.07486 16.1803 3.50911 15.9701 3.06267C15.7458 2.58653 15.4615 2.15886 15.0013 1.8313C14.5382 1.50167 14.0291 1.36718 13.4896 1.30636Z',
  d10: 'M21 11.5V5.5H2V21H11',
  d11: 'M16 5.5L15 2H8L7 5.5',
  d12: 'M20 17.463L17.5 19.463L15 17.463M17.5 15V18.9513',
  d13: 'M7.24147 1.90931C7.35855 1.51906 7.73308 1.25 8.15925 1.25H14.8408C15.2669 1.25 15.6415 1.51906 15.7585 1.90931L16.713 5.09098C16.8579 5.57372 16.5643 6.07686 16.0575 6.21479C15.5506 6.35271 15.0223 6.07319 14.8775 5.59045L14.1208 3.0681H8.87923L8.12252 5.59045C7.9777 6.07319 7.4494 6.35271 6.94253 6.21479C6.43565 6.07686 6.14215 5.57372 6.28697 5.09098L7.24147 1.90931Z',
  d14: 'M2 4.75C1.58579 4.75 1.25 5.08579 1.25 5.5V21C1.25 21.4142 1.58579 21.75 2 21.75H12.2557C11.3142 20.5897 10.75 19.1107 10.75 17.5C10.75 13.7721 13.7721 10.75 17.5 10.75C19.1107 10.75 20.5897 11.3142 21.75 12.2557V5.5C21.75 5.08579 21.4142 4.75 21 4.75H2Z',
  d15: 'M17.5 12.25C14.6005 12.25 12.25 14.6005 12.25 17.5C12.25 20.3995 14.6005 22.75 17.5 22.75C20.3995 22.75 22.75 20.3995 22.75 17.5C22.75 14.6005 20.3995 12.25 17.5 12.25ZM18.2498 17.9026V15H16.7498V17.9026L15.4683 16.8774L14.5312 18.0487L17.4998 20.4235L20.4683 18.0487L19.5312 16.8774L18.2498 17.9026Z',
} as const;

export const IconWorkUpdateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-stroke-rounded IconWorkUpdateStrokeRounded"
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

export const IconWorkUpdateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-duotone-rounded IconWorkUpdateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconWorkUpdateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-twotone-rounded IconWorkUpdateTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWorkUpdateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-solid-rounded IconWorkUpdateSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWorkUpdateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-bulk-rounded IconWorkUpdateBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
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

export const IconWorkUpdateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-stroke-sharp IconWorkUpdateStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkUpdateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="work-update-solid-sharp IconWorkUpdateSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkUpdate: TheIconSelfPack = {
  name: 'WorkUpdate',
  StrokeRounded: IconWorkUpdateStrokeRounded,
  DuotoneRounded: IconWorkUpdateDuotoneRounded,
  TwotoneRounded: IconWorkUpdateTwotoneRounded,
  SolidRounded: IconWorkUpdateSolidRounded,
  BulkRounded: IconWorkUpdateBulkRounded,
  StrokeSharp: IconWorkUpdateStrokeSharp,
  SolidSharp: IconWorkUpdateSolidSharp,
};