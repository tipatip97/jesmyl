import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V11',
  d2: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M16.4991 13C15.0744 13 14.1506 13.9085 13.0581 14.2397C12.6138 14.3744 12.3917 14.4417 12.3018 14.5366C12.2119 14.6315 12.1856 14.7702 12.133 15.0476C11.5696 18.0157 12.801 20.7598 15.7375 21.8279C16.053 21.9426 16.2108 22 16.5007 22C16.7906 22 16.9484 21.9426 17.2639 21.8279C20.2002 20.7598 21.4304 18.0157 20.8669 15.0476C20.8142 14.7701 20.7879 14.6314 20.698 14.5365C20.6081 14.4416 20.386 14.3743 19.9418 14.2397C18.8488 13.9086 17.9239 13 16.4991 13Z',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.5602 22 15.9515 22 16.2586 21.9832C16.0967 21.9585 15.9544 21.9067 15.7375 21.8279C12.801 20.7598 11.5696 18.0157 12.133 15.0476C12.1856 14.7702 12.2119 14.6315 12.3018 14.5366C12.3917 14.4417 12.6138 14.3744 13.0581 14.2397C13.4541 14.1197 13.8279 13.9238 14.2115 13.7228C14.8861 13.3693 15.5908 13 16.4991 13C17.4075 13 18.1126 13.3693 18.7876 13.7228C19.1714 13.9238 19.5456 14.1197 19.9418 14.2397C19.9616 14.2458 19.981 14.2516 20 14.2574V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M6.93654 22.6472C7.91879 22.75 9.48161 22.75 11.0227 22.75C11.5625 22.75 12 22.3124 12 21.7727C12 21.233 11.5625 20.7954 11.0227 20.7954C9.41409 20.7954 8.00785 20.7941 7.1384 20.7032C6.28448 20.6138 5.80055 20.4471 5.44272 20.194C5.20127 20.0233 4.98889 19.8222 4.8111 19.5978C4.55553 19.2753 4.38609 18.8425 4.29386 18.0558C4.19893 17.246 4.19735 16.1887 4.19735 14.6652L4.19727 11.765C4.19725 11.498 4.19742 10.8595 4.47804 10.3873C4.65097 10.0963 4.87239 9.8532 5.09984 9.72938C5.46635 9.52986 5.88654 9.4165 6.33321 9.4165L7.37358 9.45299C7.75367 9.46088 8.19721 9.44887 8.62536 9.33415C9.45933 9.11069 10.1107 8.45928 10.3342 7.62531C10.4489 7.19716 10.4609 6.75362 10.453 6.37353L10.4165 5.33316C10.4165 4.86547 10.5409 4.45834 10.7583 4.07993C10.885 3.85934 11.1057 3.65745 11.4105 3.48014C11.8726 3.21123 12.426 3.20874 12.7642 3.20722C13.1023 3.20569 13.4591 3.20452 13.7572 3.20452C15.5913 3.20452 16.2584 3.21847 16.7618 3.39582C17.6344 3.70328 18.3001 4.34492 18.6102 5.13029C18.6878 5.32693 18.7427 5.58535 18.7721 6.0333C18.8021 6.48997 18.8026 7.07292 18.8026 7.91318V11.0263C18.8026 11.564 19.2386 12 19.7763 12C20.3141 12 20.75 11.564 20.75 11.0263V7.88C20.75 7.08084 20.75 6.43328 20.7153 5.9047C20.6795 5.36007 20.6039 4.8744 20.4206 4.41024C19.8918 3.07093 18.7834 2.03666 17.4068 1.55166C16.548 1.24907 15.0759 1.24946 13.5209 1.25C10.6813 1.24964 8.99465 1.24943 7.61221 1.73651C5.39221 2.51869 3.61848 4.18143 2.77509 6.31749C2.49397 7.02945 2.36944 7.79416 2.30919 8.711C2.25 9.61171 2.25 10.7243 2.25 12.1426V12.1426V14.7261C2.24998 16.1742 2.24996 17.3469 2.35985 18.2842C2.47396 19.2576 2.71721 20.0955 3.28704 20.8145C3.58222 21.187 3.93077 21.5158 4.32114 21.7919C5.0659 22.3185 5.92712 22.5416 6.93654 22.6472Z',
  d6: 'M14.3219 12.8228C14.908 12.5343 15.6173 12.25 16.4982 12.25C17.3792 12.25 18.0887 12.5343 18.675 12.8227C18.8696 12.9184 19.0403 13.0079 19.1971 13.09C19.5508 13.2754 19.8336 13.4236 20.1583 13.522C20.3622 13.5837 20.5689 13.6463 20.7134 13.7001C20.8392 13.7469 21.0665 13.8359 21.2415 14.0207C21.3965 14.1843 21.4706 14.3642 21.5137 14.5078C21.5498 14.6276 21.5803 14.789 21.6028 14.9077C22.2229 18.174 20.8583 21.3182 17.5193 22.5327C17.2123 22.6445 16.9225 22.75 16.4998 22.75C16.0771 22.75 15.7873 22.6445 15.4802 22.5327C12.1413 21.3183 10.7752 18.1743 11.3952 14.9077C11.4177 14.7891 11.4482 14.6277 11.4842 14.5079C11.5274 14.3643 11.6015 14.1844 11.7564 14.0208C11.9314 13.8361 12.1587 13.747 12.2845 13.7002C12.4289 13.6464 12.6357 13.5838 12.8396 13.522C13.1641 13.4236 13.4465 13.2755 13.8 13.0902C13.9567 13.008 14.1274 12.9185 14.3219 12.8228Z',
  d7: 'M10.9916 21.7471H3.01C3.00448 21.7471 3 21.7426 3 21.7371V8.74897L10 1.75H19.99C19.9955 1.75 20 1.75448 20 1.76V10.7207M10 2.30258V8.74897H3.51973',
  d8: 'M17.007 13.7513C15.5981 13.7513 14.6027 14.975 13.2176 14.9714C12.4456 18.1709 13.796 20.5567 16.1917 21.495C16.4715 21.5969 16.7512 21.747 17.0084 21.747C17.2655 21.747 17.4054 21.6961 17.6853 21.5941C20.6924 20.4987 21.4275 17.6471 20.786 14.9666C19.5052 14.9666 18.2707 13.7513 17.007 13.7513Z',
  d9: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H11.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V11H20.75V2.22727Z',
  d10: 'M14.8021 13.9119C15.3588 13.6233 16.0786 13.25 16.9999 13.25C17.9251 13.25 18.6456 13.6239 19.203 13.9132L19.2418 13.9333C19.8366 14.2417 20.2583 14.448 20.7835 14.448H21.3706L21.5115 15.0171C21.9716 16.8747 21.7532 18.6232 20.9624 20.01C20.1693 21.4011 18.8272 22.3781 17.1497 22.7195L16.9999 22.75L16.8501 22.7195C15.1725 22.3781 13.8305 21.4011 13.0374 20.01C12.2467 18.6232 12.0282 16.8747 12.4883 15.0171L12.6292 14.448H13.2163C13.7427 14.448 14.1662 14.2413 14.7611 13.9332L14.8021 13.9119Z',
} as const;

export const IconFileSecurityStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-stroke-rounded IconFileSecurityStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileSecurityDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-duotone-rounded IconFileSecurityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconFileSecurityTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-twotone-rounded IconFileSecurityTwotoneRounded"
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

export const IconFileSecuritySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-solid-rounded IconFileSecuritySolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSecurityBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-bulk-rounded IconFileSecurityBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileSecurityStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-stroke-sharp IconFileSecurityStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSecuritySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-security-solid-sharp IconFileSecuritySolidSharp"
    >
      <path 
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

export const iconPackOfFileSecurity: TheIconSelfPack = {
  name: 'FileSecurity',
  StrokeRounded: IconFileSecurityStrokeRounded,
  DuotoneRounded: IconFileSecurityDuotoneRounded,
  TwotoneRounded: IconFileSecurityTwotoneRounded,
  SolidRounded: IconFileSecuritySolidRounded,
  BulkRounded: IconFileSecurityBulkRounded,
  StrokeSharp: IconFileSecurityStrokeSharp,
  SolidSharp: IconFileSecuritySolidSharp,
};