import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.4571 7.20279 20.7356 7.94376 20.8747 9',
  d2: 'M19.1581 19.829C19.0569 20.0309 19 20.2588 19 20.5C19 21.3284 19.6716 22 20.5 22C21.3284 22 22 21.3284 22 20.5C22 19.6716 21.3284 19 20.5 19C19.9128 19 19.4043 19.3375 19.1581 19.829ZM19.1581 19.829L15.8419 18.171M19.1581 15.171C19.4043 15.6625 19.9128 16 20.5 16C21.3284 16 22 15.3284 22 14.5C22 13.6716 21.3284 13 20.5 13C19.6716 13 19 13.6716 19 14.5C19 14.7412 19.0569 14.9691 19.1581 15.171ZM19.1581 15.171L15.8419 16.829M15.8419 16.829C15.5957 16.3375 15.0872 16 14.5 16C13.6716 16 13 16.6716 13 17.5C13 18.3284 13.6716 19 14.5 19C15.0872 19 15.5957 18.6625 15.8419 18.171M15.8419 16.829C15.9431 17.0309 16 17.2588 16 17.5C16 17.7412 15.9431 17.9691 15.8419 18.171',
  d3: 'M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5',
  d4: 'M9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11V13C21 13.0286 21 13.057 21 13.0854C20.8436 13.0301 20.6753 13 20.5 13C19.6716 13 19 13.6716 19 14.5C19 14.7412 19.0569 14.9691 19.1581 15.171C19.4043 15.6625 19.9128 16 20.5 16C20.6634 16 20.8208 15.9739 20.968 15.9255C20.9157 17.2766 20.7777 18.2555 20.414 19.0024C19.8634 19.0336 19.3922 19.3616 19.1581 19.829C19.069 20.0067 19.0143 20.2046 19.0024 20.414C17.7991 21 15.9937 21 13 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5ZM13 17.5C13 18.3284 13.6716 19 14.5 19C15.0872 19 15.5957 18.6625 15.8419 18.171C15.9431 17.9691 16 17.7412 16 17.5C16 17.2588 15.9431 17.0309 15.8419 16.829C15.5957 16.3375 15.0872 16 14.5 16C13.6716 16 13 16.6716 13 17.5Z',
  d5: 'M20.5 12.25C19.2574 12.25 18.25 13.2574 18.25 14.5L18.25 14.5069L15.8556 15.7042C15.4789 15.4193 15.0094 15.25 14.5 15.25C13.2574 15.25 12.25 16.2574 12.25 17.5C12.25 18.7426 13.2574 19.75 14.5 19.75C15.0094 19.75 15.4788 19.5807 15.8554 19.2959L18.25 20.4932L18.25 20.5C18.25 21.7426 19.2574 22.75 20.5 22.75C21.7426 22.75 22.75 21.7426 22.75 20.5C22.75 19.2574 21.7426 18.25 20.5 18.25C19.9905 18.25 19.521 18.4194 19.1443 18.7043L16.75 17.5071L16.75 17.5L16.75 17.493L19.1444 16.2958C19.5211 16.5806 19.9905 16.75 20.5 16.75C21.7426 16.75 22.75 15.7426 22.75 14.5C22.75 13.2574 21.7426 12.25 20.5 12.25Z',
  d6: 'M11.5 1.25C12.202 1.24997 12.9887 1.24994 13.489 1.30636C14.0285 1.36718 14.5376 1.50167 15.0007 1.8313C15.4609 2.15886 15.7452 2.58653 15.9695 3.06267C16.1797 3.50911 16.3706 4.07486 16.5936 4.73559L16.704 5.06253C16.8653 5.5405 16.5892 6.05251 16.0873 6.20615C15.5855 6.35978 15.0478 6.09685 14.8865 5.61889C14.6437 4.89941 14.3894 4.15013 14.2277 3.80681C14.0751 3.48287 13.9601 3.36036 13.8578 3.28755C13.7584 3.21681 13.6129 3.15111 13.2646 3.11184C12.8898 3.06957 12.2699 3.06809 11.5 3.06809C10.7301 3.06809 10.1102 3.06957 9.73541 3.11184C9.38714 3.15111 9.24158 3.21681 9.1422 3.28755C9.03992 3.36036 8.9249 3.48287 8.77232 3.80681C8.61061 4.15013 8.35629 4.89941 8.11347 5.61889C7.95215 6.09685 7.41454 6.35978 6.91267 6.20615C6.4108 6.05251 6.13473 5.5405 6.29605 5.06253L6.40639 4.73559L6.40639 4.73558C6.62935 4.07485 6.82027 3.50911 7.03055 3.06267C7.25482 2.58653 7.53914 2.15886 7.9993 1.8313C8.46236 1.50167 8.97155 1.36718 9.51096 1.30636C10.0113 1.24994 10.798 1.24997 11.5 1.25Z',
  d7: 'M13.4653 4.75H9.54836H9.54835C7.8042 4.74998 6.41746 4.74997 5.33103 4.89881C4.20972 5.05243 3.29737 5.37711 2.5785 6.10965C1.86155 6.84022 1.54553 7.76413 1.39567 8.89997C1.24997 10.0042 1.24999 11.5256 1.25 13.3053V13.3053C1.24999 15.0851 1.24997 16.4958 1.39567 17.6C1.54553 18.7359 1.86155 19.6598 2.5785 20.3904C3.29737 21.1229 4.20972 21.4476 5.33103 21.6012C6.41745 21.75 7.80415 21.75 9.54827 21.75H15.0549L14.5 21.25C12.4289 21.25 10.75 19.5711 10.75 17.5C10.75 15.4289 12.4289 13.75 14.5 13.75C14.9876 13.75 15.4544 13.8437 15.8826 14.0136L16.8808 13.5145C17.3136 11.9215 18.77 10.75 20.5 10.75C20.9381 10.75 21.3586 10.8251 21.7494 10.9632C21.7038 8.79873 21.5235 7.21869 20.4352 6.10965C19.7163 5.37711 18.8039 5.05243 17.6826 4.89881C16.5962 4.74997 15.2095 4.74998 13.4653 4.75H13.4653Z',
  d8: 'M13.4896 1.30636C12.9893 1.24994 12.2026 1.24997 11.5006 1.25C10.7986 1.24997 10.0119 1.24994 9.51156 1.30636C8.97215 1.36718 8.46296 1.50167 7.9999 1.8313C7.53975 2.15886 7.25542 2.58653 7.03115 3.06267C6.82087 3.50911 6.62996 4.07485 6.40699 4.73558L6.38477 4.80145C6.98672 4.76671 7.6599 4.75542 8.41038 4.75176C8.54926 4.35488 8.67729 4.00985 8.77292 3.80681C8.92551 3.48287 9.04052 3.36036 9.14281 3.28755C9.24218 3.21681 9.38775 3.15111 9.73601 3.11184C10.1109 3.06957 10.7308 3.06809 11.5006 3.06809C12.2705 3.06809 12.8904 3.06957 13.2652 3.11184C13.6135 3.15111 13.759 3.21681 13.8584 3.28755C13.9607 3.36036 14.0757 3.48287 14.2283 3.80681C14.3239 4.00984 14.4519 4.35484 14.5908 4.75169C15.341 4.75526 16.0141 4.76632 16.6162 4.80065L16.5942 4.73559C16.3713 4.07486 16.1803 3.50911 15.9701 3.06267C15.7458 2.58653 15.4615 2.15886 15.0013 1.8313C14.5382 1.50167 14.0291 1.36718 13.4896 1.30636Z',
  d9: 'M21 11V5.5H2V21H12',
  d10: 'M16 5.5L15 2H8L7 5.5',
  d11: 'M7.24147 1.90931C7.35855 1.51906 7.73308 1.25 8.15925 1.25H14.8408C15.2669 1.25 15.6415 1.51906 15.7585 1.90931L16.713 5.09098C16.8579 5.57372 16.5643 6.07686 16.0575 6.21479C15.5506 6.35271 15.0223 6.07319 14.8775 5.59045L14.1208 3.0681H8.87923L8.12252 5.59045C7.9777 6.07319 7.4494 6.35271 6.94253 6.21479C6.43565 6.07686 6.14215 5.57372 6.28697 5.09098L7.24147 1.90931Z',
  d12: 'M2 4.75C1.58579 4.75 1.25 5.08579 1.25 5.5V21C1.25 21.4142 1.58579 21.75 2 21.75H15.0753L14.5 21.25C12.4289 21.25 10.75 19.5711 10.75 17.5C10.75 15.4289 12.4289 13.75 14.5 13.75C14.9876 13.75 15.4544 13.8437 15.8826 14.0136L16.8808 13.5145C17.3136 11.9215 18.77 10.75 20.5 10.75C20.9383 10.75 21.359 10.8252 21.75 10.9634V5.5C21.75 5.08579 21.4142 4.75 21 4.75H2Z',
} as const;

export const IconJobShareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-stroke-rounded IconJobShareStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJobShareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-duotone-rounded IconJobShareDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconJobShareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-twotone-rounded IconJobShareTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJobShareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-solid-rounded IconJobShareSolidRounded"
    >
      <path 
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

export const IconJobShareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-bulk-rounded IconJobShareBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJobShareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-stroke-sharp IconJobShareStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconJobShareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="job-share-solid-sharp IconJobShareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJobShare: TheIconSelfPack = {
  name: 'JobShare',
  StrokeRounded: IconJobShareStrokeRounded,
  DuotoneRounded: IconJobShareDuotoneRounded,
  TwotoneRounded: IconJobShareTwotoneRounded,
  SolidRounded: IconJobShareSolidRounded,
  BulkRounded: IconJobShareBulkRounded,
  StrokeSharp: IconJobShareStrokeSharp,
  SolidSharp: IconJobShareSolidSharp,
};