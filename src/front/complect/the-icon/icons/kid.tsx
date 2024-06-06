import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 5.73791C14 5.73791 12.8849 6.23808 12.1017 5.85651C11.1464 5.39118 10.1991 3.44619 12.0914 2',
  d2: 'M8.00897 9H8M16 9H15.991',
  d3: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d4: 'M11.5742 1.45341C11.6436 1.38029 11.5899 1.25721 11.4892 1.26192C5.78933 1.52855 1.25 6.23417 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.85886 19.141 2.56064 14.3183 1.5006C14.2303 1.48127 14.1863 1.4716 14.1375 1.4769C14.0887 1.48221 14.05 1.50008 13.9726 1.53582C13.9519 1.54535 13.9316 1.55496 13.9115 1.56462C13.2231 1.89585 12.8284 2.31168 12.6573 2.49189C11.931 3.25204 11.7887 3.90569 11.8455 4.31456C11.9059 4.74983 12.1756 5.05726 12.4299 5.18114C12.5961 5.26209 12.8685 5.27125 13.1935 5.20451C13.3411 5.17421 13.5316 5.12408 13.695 5.05152C14.0724 4.88393 14.515 5.05277 14.6841 5.42984C14.8536 5.80778 14.6847 6.25158 14.3068 6.4211C14.0007 6.55838 13.7243 6.62681 13.4952 6.67385C13.0669 6.76181 12.3901 6.83026 11.773 6.52965C11.0721 6.1882 10.4893 5.45412 10.3598 4.52083C10.2265 3.56119 10.606 2.4667 11.5742 1.45341ZM6.75 9C6.75 8.30964 7.30964 7.75 8 7.75H8.00897C8.69933 7.75 9.25897 8.30964 9.25897 9C9.25897 9.69036 8.69933 10.25 8.00897 10.25H8C7.30964 10.25 6.75 9.69036 6.75 9ZM14.741 9C14.741 8.30964 15.3007 7.75 15.991 7.75H16C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25H15.991C15.3007 10.25 14.741 9.69036 14.741 9ZM8.59974 14.5496C8.35099 14.2184 7.88084 14.1516 7.54964 14.4003C7.21843 14.6491 7.1516 15.1192 7.40035 15.4504C8.44802 16.8453 10.1185 17.75 12 17.75C13.8816 17.75 15.5521 16.8453 16.5997 15.4504C16.8485 15.1192 16.7817 14.6491 16.4505 14.4003C16.1192 14.1516 15.6491 14.2184 15.4003 14.5496C14.6238 15.5836 13.3898 16.25 12 16.25C10.6103 16.25 9.37631 15.5836 8.59974 14.5496Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M14.1415 1.46331C14.0611 1.49637 13.9845 1.53069 13.9115 1.56577C13.2231 1.89701 12.8284 2.31284 12.6574 2.49305C11.931 3.2532 11.7888 3.90685 11.8455 4.31572C11.906 4.75099 12.1757 5.05842 12.43 5.1823C12.5961 5.26325 12.8685 5.27241 13.1935 5.20567C13.3411 5.17537 13.5316 5.12524 13.695 5.05268C14.0724 4.88509 14.515 5.05393 14.6842 5.431C14.8537 5.80894 14.6847 6.25274 14.3068 6.42226C14.0007 6.55954 13.7243 6.62797 13.4952 6.67501C13.0669 6.76297 12.3901 6.83142 11.773 6.53081C11.0721 6.18936 10.4893 5.45528 10.3598 4.52199C10.2266 3.56235 10.6061 2.46786 11.5742 1.45457C11.6211 1.40519 11.6871 1.33566 11.7727 1.25236C11.8483 1.25079 11.9241 1.25 12 1.25C12.7333 1.25 13.4495 1.32342 14.1415 1.46331Z',
  d7: 'M6.75 9C6.75 8.30964 7.30964 7.75 8 7.75H8.00897C8.69933 7.75 9.25897 8.30964 9.25897 9C9.25897 9.69036 8.69933 10.25 8.00897 10.25H8C7.30964 10.25 6.75 9.69036 6.75 9ZM14.741 9C14.741 8.30964 15.3007 7.75 15.991 7.75H16C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25H15.991C15.3007 10.25 14.741 9.69036 14.741 9Z',
  d8: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d9: 'M11.8245 1.2514C5.96838 1.34514 1.25 6.12155 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.78315 19.0339 2.43424 14.1044 1.45589C13.4772 1.86557 12.8886 2.31435 12.5686 2.57816L12.5571 2.58746L12.5469 2.59543C11.8074 3.16055 11.6969 3.73828 11.7688 4.17345C11.8525 4.68049 12.1902 5.06487 12.4302 5.18178C12.5964 5.26273 12.8688 5.27188 13.1938 5.20515C13.3414 5.17484 13.472 5.13461 13.5655 5.10184C13.6117 5.08565 13.6474 5.0718 13.6698 5.06275C13.681 5.05824 13.6887 5.05496 13.6928 5.05324C13.6927 5.05325 13.6927 5.05326 13.6937 5.05546C13.6944 5.05695 13.6955 5.05946 13.6974 5.06368L13.6975 5.06374L13.6975 5.06379C13.7118 5.09559 13.7695 5.22338 14.0001 5.73743C14.307 6.42174 14.3069 6.42183 14.3067 6.42191L14.3054 6.42249L14.3033 6.42343L14.2978 6.42583L14.282 6.43267C14.2693 6.43809 14.2523 6.44519 14.2315 6.45361C14.1899 6.47042 14.1323 6.49267 14.0617 6.51741C13.9217 6.56649 13.7246 6.62745 13.4955 6.67449C13.0672 6.76245 12.3904 6.8309 11.7733 6.53028C11.0581 6.18187 10.4445 5.36109 10.2888 4.41775C10.1218 3.40587 10.4808 2.292 11.6248 1.41227C11.6828 1.36458 11.7498 1.31054 11.8245 1.2514ZM6.75 9.00043C6.75 8.31007 7.30964 7.75043 8 7.75043H8.00897C8.69933 7.75043 9.25897 8.31007 9.25897 9.00043C9.25897 9.69078 8.69933 10.2504 8.00897 10.2504H8C7.30964 10.2504 6.75 9.69078 6.75 9.00043ZM14.741 9.00043C14.741 8.31007 15.3007 7.75043 15.991 7.75043H16C16.6904 7.75043 17.25 8.31007 17.25 9.00043C17.25 9.69078 16.6904 10.2504 16 10.2504H15.991C15.3007 10.2504 14.741 9.69078 14.741 9.00043ZM15.4004 14.5502C14.6238 15.5842 13.3899 16.2506 12.0001 16.2506C10.6103 16.2506 9.37635 15.5842 8.59978 14.5502L7.40039 15.451C8.44806 16.846 10.1185 17.7506 12.0001 17.7506C13.8816 17.7506 15.5521 16.846 16.5998 15.451L15.4004 14.5502Z',
};

export const IconKidStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-stroke-rounded IconKidStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconKidDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-duotone-rounded IconKidDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconKidTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-twotone-rounded IconKidTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconKidSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-solid-rounded IconKidSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKidBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-bulk-rounded IconKidBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconKidStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-stroke-sharp IconKidStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKidSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kid-solid-sharp IconKidSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKid: TheIconSelfPack = {
  name: 'Kid',
  StrokeRounded: IconKidStrokeRounded,
  DuotoneRounded: IconKidDuotoneRounded,
  TwotoneRounded: IconKidTwotoneRounded,
  SolidRounded: IconKidSolidRounded,
  BulkRounded: IconKidBulkRounded,
  StrokeSharp: IconKidStrokeSharp,
  SolidSharp: IconKidSolidSharp,
};