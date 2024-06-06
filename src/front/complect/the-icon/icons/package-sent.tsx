import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C11.1818 22 10.4002 21.6708 8.83693 21.0123C4.94564 19.3734 3 18.5539 3 17.1754V7.54234M12 22C12.8182 22 13.5998 21.6708 15.1631 21.0123C19.0544 19.3734 21 18.5539 21 17.1754V7.54234M12 22V12.0292M3 7.54234C3 8.15478 3.80157 8.54152 5.40472 9.315L8.32592 10.7244C10.1288 11.5943 11.0303 12.0292 12 12.0292M3 7.54234C3 6.9299 3.80157 6.54317 5.40472 5.76969L7 5M21 7.54234C21 8.15478 20.1984 8.54152 18.5953 9.315L15.6741 10.7244C13.8712 11.5943 12.9697 12.0292 12 12.0292M21 7.54234C21 6.9299 20.1984 6.54316 18.5953 5.76969L17.0446 5.02151M6 13.0263L8 14.0234',
  d2: 'M11.9963 9L11.9963 2.00005M11.9963 2.00005C11.7332 1.99649 11.4737 2.18028 11.2822 2.40466L10 3.93826M11.9963 2.00005C12.2501 2.00348 12.5071 2.18632 12.7103 2.40466L14 3.93826',
  d3: 'M21.1904 17.4839C21.1904 18.7742 19.2448 19.5413 15.3535 21.0755C13.7902 21.6918 13.0086 22 12.1904 22C11.3722 22 10.5906 21.6918 9.02736 21.0755C5.13607 19.5413 3.19043 18.7742 3.19043 17.4839V8L12.1904 12.0645L21.1904 8V17.4839Z',
  d4: 'M12.1904 22C11.3722 22 10.5906 21.6708 9.02736 21.0123C5.13607 19.3734 3.19043 18.5539 3.19043 17.1754V7.54234M12.1904 22C13.0086 22 13.7902 21.6708 15.3535 21.0123C19.2448 19.3734 21.1904 18.5539 21.1904 17.1754V7.54234M12.1904 22V12.0292M3.19043 7.54234C3.19043 8.15478 3.992 8.54152 5.59515 9.315L8.51635 10.7244C10.3192 11.5943 11.2207 12.0292 12.1904 12.0292M3.19043 7.54234C3.19043 6.9299 3.992 6.54317 5.59515 5.76969L7.19043 5M21.1904 7.54234C21.1904 8.15478 20.3888 8.54152 18.7857 9.315L15.8645 10.7244C14.0616 11.5943 13.1601 12.0292 12.1904 12.0292M21.1904 7.54234C21.1904 6.9299 20.3888 6.54316 18.7857 5.76969L17.235 5.02151M6.19043 13.0263L8.19043 14.0234',
  d5: 'M12.1867 9V2.00005M12.1867 2.00005C11.9236 1.99649 11.6641 2.18028 11.4726 2.40466L10.1904 3.93826M12.1867 2.00005C12.4405 2.00348 12.6975 2.18632 12.9007 2.40466L14.1904 3.93826',
  d6: 'M12 22C11.1818 22 10.4002 21.6708 8.83693 21.0123C4.94564 19.3734 3 18.5539 3 17.1754V7.54234M12 22C12.8182 22 13.5998 21.6708 15.1631 21.0123C19.0544 19.3734 21 18.5539 21 17.1754V7.54234M12 22V12.0292M3 7.54234C3 8.15478 3.80157 8.54152 5.40472 9.315L8.32592 10.7244C10.1288 11.5943 11.0303 12.0292 12 12.0292M3 7.54234C3 6.9299 3.80157 6.54317 5.40472 5.76969L7 5M21 7.54234C21 8.15478 20.1984 8.54152 18.5953 9.315L15.6741 10.7244C13.8712 11.5943 12.9697 12.0292 12 12.0292M21 7.54234C21 6.9299 20.1984 6.54316 18.5953 5.76969L17.0446 5.02151',
  d7: 'M6 13.0264L8 14.0234',
  d8: 'M4.35579 7.52885C4.32437 7.54815 4.15774 7.67733 3.96159 7.8314C3.97964 7.84427 3.99912 7.85778 4.02014 7.87194C4.36522 8.10435 4.90633 8.36754 5.73062 8.76524L8.65182 10.1746C10.5195 11.0757 11.2418 11.4049 12 11.4049C12.7582 11.4049 13.4806 11.0757 15.3482 10.1747L18.2694 8.76524C19.0937 8.36754 19.6348 8.10435 19.9799 7.87194C20.0009 7.85778 20.0204 7.84427 20.0384 7.8314C19.8423 7.67733 19.6756 7.54815 19.6442 7.52885C19.3259 7.33327 18.8178 7.10716 18.0067 6.75021L16.4948 6.08481C16.0098 5.87138 15.8063 5.33973 16.0403 4.89734C16.2743 4.45496 16.8572 4.26936 17.3422 4.4828L18.9202 5.17727L18.9202 5.17728C19.645 5.49619 20.2839 5.77734 20.7335 6.05352C21.1829 6.32961 21.75 6.78386 21.75 7.52574C21.75 7.55018 21.7489 7.57439 21.7468 7.59832C21.7489 7.62129 21.75 7.64456 21.75 7.66807L21.75 17.3012C21.75 18.4206 20.9311 19.164 19.9258 19.7655C18.9075 20.3748 17.1986 21.0946 15.3055 21.8919C13.8861 22.4903 12.9716 22.8757 12 22.8757C11.0284 22.8757 10.1139 22.4903 8.69452 21.8919L8.69452 21.8919C6.80139 21.0946 5.0925 20.3748 4.07416 19.7655C3.06888 19.164 2.25 18.4206 2.25 17.3012L2.25 7.66807C2.25 7.64456 2.25108 7.62129 2.2532 7.59832C2.25108 7.57439 2.25 7.55018 2.25 7.52574C2.25 6.78386 2.81708 6.32961 3.2665 6.05352C3.71606 5.77734 4.35503 5.49619 5.07981 5.17729L6.70132 4.46367C7.1863 4.25023 7.76914 4.43582 8.00313 4.87821C8.23713 5.32059 8.03366 5.85224 7.54868 6.06568L5.99328 6.75021C5.18221 7.10716 4.67415 7.33327 4.35579 7.52885ZM6.33103 12.6045C5.9593 12.4218 5.50982 12.575 5.32709 12.9468C5.14436 13.3185 5.29758 13.768 5.66931 13.9507L7.66931 14.9338C8.04104 15.1166 8.49051 14.9633 8.67324 14.5916C8.85597 14.2199 8.70276 13.7704 8.33103 13.5877L6.33103 12.6045Z',
  d9: 'M14.7606 3.47578C15.1192 3.89585 15.0693 4.52705 14.6492 4.8856C14.4626 5.04492 14.2343 5.1236 14.0067 5.125H13L13 9.125C13 9.67728 12.5523 10.125 12 10.125C11.4477 10.125 11 9.67728 11 9.125V5.125H9.99336C9.76579 5.1236 9.53745 5.04492 9.3508 4.8856C8.93073 4.52705 8.88086 3.89585 9.23941 3.47578L10.2394 2.30421L10.2721 2.26585L10.2721 2.26585C10.4788 2.02354 10.6945 1.77073 10.9005 1.58655C11.1317 1.37989 11.4948 1.125 12 1.125C12.5052 1.125 12.8683 1.37989 13.0995 1.58655C13.3056 1.77073 13.5212 2.02353 13.7279 2.26585L13.7279 2.26585L13.7606 2.30421L14.7606 3.47578Z',
  d10: 'M3.96159 7.8314C4.15774 7.67733 4.32437 7.54815 4.35579 7.52885C4.67415 7.33327 5.18221 7.10716 5.99328 6.75021L7.54868 6.06568C8.03366 5.85224 8.23713 5.32059 8.00313 4.87821C7.76914 4.43582 7.1863 4.25023 6.70132 4.46367L5.07981 5.17729C4.35503 5.49619 3.71606 5.77734 3.2665 6.05352C2.81708 6.32961 2.25 6.78386 2.25 7.52574C2.25 7.55018 2.25108 7.57439 2.2532 7.59832C2.25108 7.62129 2.25 7.64456 2.25 7.66807L2.25 17.3012C2.25 18.4206 3.06888 19.164 4.07416 19.7655C5.0925 20.3748 6.80139 21.0946 8.69452 21.8919L8.69452 21.8919C10.1139 22.4903 11.0284 22.8757 12 22.8757C12.9716 22.8757 13.8861 22.4903 15.3055 21.8919C17.1986 21.0946 18.9075 20.3748 19.9258 19.7655C20.9311 19.164 21.75 18.4206 21.75 17.3012L21.75 7.66807C21.75 7.64456 21.7489 7.62129 21.7468 7.59832C21.7489 7.57439 21.75 7.55018 21.75 7.52574C21.75 6.78386 21.1829 6.32961 20.7335 6.05352C20.2839 5.77734 19.645 5.49619 18.9202 5.17728L18.9202 5.17727L17.3422 4.4828C16.8572 4.26936 16.2743 4.45496 16.0403 4.89734C15.8063 5.33973 16.0098 5.87138 16.4948 6.08481L18.0067 6.75021C18.8178 7.10716 19.3259 7.33327 19.6442 7.52885C19.6756 7.54815 19.8423 7.67733 20.0384 7.8314C20.0204 7.84427 20.0009 7.85778 19.9799 7.87194C19.6348 8.10435 19.0937 8.36754 18.2694 8.76524L15.3482 10.1747C13.4806 11.0757 12.7582 11.4049 12 11.4049C11.2418 11.4049 10.5195 11.0757 8.65182 10.1746L5.73062 8.76524C4.90633 8.36754 4.36522 8.10435 4.02014 7.87194C3.99912 7.85778 3.97964 7.84427 3.96159 7.8314Z',
  d11: 'M5.32709 12.9467C5.50982 12.5749 5.9593 12.4217 6.33103 12.6044L8.33103 13.5876C8.70276 13.7703 8.85597 14.2198 8.67324 14.5915C8.49051 14.9632 8.04104 15.1164 7.66931 14.9337L5.66931 13.9506C5.29758 13.7679 5.14436 13.3184 5.32709 12.9467Z',
  d12: 'M16.5 6L21 8L12 12L3 8L7.5 6',
  d13: 'M6 13.5L8 14.5',
  d14: 'M3 8.00903V18.0133L11.9713 22.0214C11.9974 22.0332 12.0272 22.0332 12.0533 22.0215L21 18.0308V8.02402M12.0123 12.0527V21.5189',
  d15: 'M12.0176 9.00372V2.02539M9.50098 4.5093L12.0047 2.03811L14.5024 4.50526',
  d16: 'M2.25 8.00011V18.4874L11.6954 22.6854C11.8893 22.7715 12.1107 22.7715 12.3046 22.6854L21.75 18.4874V8C21.75 7.70361 21.5754 7.43483 21.3046 7.31445L16.8046 5.31445L16.1954 6.68517L19.1533 7.99981L12 11.1791L4.84666 7.99981L7.8046 6.68517L7.1954 5.31445L2.6954 7.31445C2.42455 7.43483 2.25 7.70372 2.25 8.00011ZM5.83594 14.0062L8.16512 15.1707V13.4937L5.83594 12.3291V14.0062Z',
  d17: 'M12.7491 9.06066V4.12132L13.9688 5.34099L15.0294 4.28033L11.9991 1.25L8.96875 4.28033L10.0294 5.34099L11.2491 4.12132V9.06066H12.7491Z',
};

export const IconPackageSentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-stroke-rounded IconPackageSentStrokeRounded"
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

export const IconPackageSentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-duotone-rounded IconPackageSentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPackageSentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-twotone-rounded IconPackageSentTwotoneRounded"
    >
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-solid-rounded IconPackageSentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-bulk-rounded IconPackageSentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-stroke-sharp IconPackageSentStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-sent-solid-sharp IconPackageSentSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageSent: TheIconSelfPack = {
  name: 'PackageSent',
  StrokeRounded: IconPackageSentStrokeRounded,
  DuotoneRounded: IconPackageSentDuotoneRounded,
  TwotoneRounded: IconPackageSentTwotoneRounded,
  SolidRounded: IconPackageSentSolidRounded,
  BulkRounded: IconPackageSentBulkRounded,
  StrokeSharp: IconPackageSentStrokeSharp,
  SolidSharp: IconPackageSentSolidSharp,
};