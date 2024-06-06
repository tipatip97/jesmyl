import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C11.1818 22 10.4002 21.6754 8.83693 21.0262C4.94564 19.4101 3 18.6021 3 17.2429V7.74463M12 22C12.8182 22 13.5998 21.6754 15.1631 21.0262C19.0544 19.4101 21 18.6021 21 17.2429V7.74463M12 22V12.1687M3 7.74463C3 8.3485 3.80157 8.72983 5.40472 9.49248L8.32592 10.8822C10.1288 11.7399 11.0303 12.1687 12 12.1687M3 7.74463C3 7.14076 3.80157 6.75944 5.40472 5.99678L7.5 5M21 7.74463C21 8.3485 20.1984 8.72983 18.5953 9.49248L15.6741 10.8822C13.8712 11.7399 12.9697 12.1687 12 12.1687M21 7.74463C21 7.14076 20.1984 6.75944 18.5953 5.99678L16.5 5M6 13.1518L8 14.135',
  d2: 'M12.0037 2L12.0037 8.99995M12.0037 8.99995C12.2668 9.00351 12.5263 8.81972 12.7178 8.59534L14 7.06174M12.0037 8.99995C11.7499 8.99652 11.4929 8.81368 11.2897 8.59534L10 7.06174',
  d3: 'M21.1904 17.1519C21.1904 18.4422 19.2448 19.2093 15.3535 20.7435C13.7902 21.3598 13.0086 21.668 12.1904 21.668C11.3722 21.668 10.5906 21.3598 9.02736 20.7435C5.13607 19.2093 3.19043 18.4422 3.19043 17.1519V7.66797L12.1904 11.7325L21.1904 7.66797V17.1519Z',
  d4: 'M12.1904 21.668C11.3722 21.668 10.5906 21.3434 9.02736 20.6942C5.13607 19.0781 3.19043 18.2701 3.19043 16.9109V7.4126M12.1904 21.668C13.0086 21.668 13.7902 21.3434 15.3535 20.6942C19.2448 19.0781 21.1904 18.2701 21.1904 16.9109V7.4126M12.1904 21.668V11.8367M3.19043 7.4126C3.19043 8.01647 3.992 8.3978 5.59515 9.16045L8.51635 10.5502C10.3192 11.4079 11.2207 11.8367 12.1904 11.8367M3.19043 7.4126C3.19043 6.80873 3.992 6.42741 5.59515 5.66475L7.69043 4.66797M21.1904 7.4126C21.1904 8.01647 20.3888 8.3978 18.7857 9.16045L15.8645 10.5502C14.0616 11.4079 13.1601 11.8367 12.1904 11.8367M21.1904 7.4126C21.1904 6.80873 20.3888 6.42741 18.7857 5.66475L16.6904 4.66797M6.19043 12.8198L8.19043 13.803',
  d5: 'M12.1941 1.66797V8.66792M12.1941 8.66792C12.4572 8.67148 12.7167 8.48769 12.9082 8.26331L14.1904 6.72971M12.1941 8.66792C11.9403 8.66449 11.6833 8.48165 11.4801 8.26331L10.1904 6.72971',
  d6: 'M12 22C11.1818 22 10.4002 21.6754 8.83693 21.0262C4.94564 19.4101 3 18.6021 3 17.2429V7.74463M12 22C12.8182 22 13.5998 21.6754 15.1631 21.0262C19.0544 19.4101 21 18.6021 21 17.2429V7.74463M12 22V12.1687M3 7.74463C3 8.3485 3.80157 8.72983 5.40472 9.49248L8.32592 10.8822C10.1288 11.7399 11.0303 12.1687 12 12.1687M3 7.74463C3 7.14076 3.80157 6.75944 5.40472 5.99678L7.5 5M21 7.74463C21 8.3485 20.1984 8.72983 18.5953 9.49248L15.6741 10.8822C13.8712 11.7399 12.9697 12.1687 12 12.1687M21 7.74463C21 7.14076 20.1984 6.75944 18.5953 5.99678L16.5 5',
  d7: 'M6 13.1523L8 14.1355',
  d8: 'M12.0037 2V8.99995M12.0037 8.99995C12.2668 9.00351 12.5263 8.81972 12.7178 8.59534L14 7.06174M12.0037 8.99995C11.7499 8.99652 11.4929 8.81368 11.2897 8.59534L10 7.06174',
  d9: 'M4.35579 7.52885C4.32437 7.54815 4.15774 7.67733 3.96159 7.8314C3.97964 7.84427 3.99912 7.85778 4.02014 7.87194C4.36522 8.10435 4.90633 8.36754 5.73062 8.76524L8.65182 10.1746C10.5195 11.0757 11.2418 11.4049 12 11.4049C12.7582 11.4049 13.4806 11.0757 15.3482 10.1747L18.2694 8.76524C19.0937 8.36754 19.6348 8.10435 19.9799 7.87194C20.0009 7.85778 20.0204 7.84427 20.0384 7.8314C19.8423 7.67733 19.6756 7.54815 19.6442 7.52885C19.3259 7.33327 18.8178 7.10716 18.0067 6.75021L16.4948 6.08481C16.0098 5.87138 15.8063 5.33973 16.0403 4.89734C16.2743 4.45496 16.8572 4.26936 17.3422 4.4828L18.9202 5.17727L18.9202 5.17728C19.645 5.49619 20.2839 5.77734 20.7335 6.05352C21.1829 6.32961 21.75 6.78386 21.75 7.52574C21.75 7.55018 21.7489 7.57439 21.7468 7.59832C21.7489 7.62129 21.75 7.64456 21.75 7.66807L21.75 17.3012C21.75 18.4206 20.9311 19.164 19.9258 19.7655C18.9075 20.3748 17.1986 21.0946 15.3055 21.8919C13.8861 22.4903 12.9716 22.8757 12 22.8757C11.0284 22.8757 10.1139 22.4903 8.69452 21.8919L8.69452 21.8919C6.80139 21.0946 5.0925 20.3748 4.07416 19.7655C3.06888 19.164 2.25 18.4206 2.25 17.3012L2.25 7.66807C2.25 7.64456 2.25108 7.62129 2.2532 7.59832C2.25108 7.57439 2.25 7.55018 2.25 7.52574C2.25 6.78386 2.81708 6.32961 3.2665 6.05352C3.71606 5.77734 4.35503 5.49619 5.07981 5.17729L6.70132 4.46367C7.1863 4.25023 7.76914 4.43582 8.00313 4.87821C8.23713 5.32059 8.03366 5.85224 7.54868 6.06568L5.99328 6.75021C5.18221 7.10716 4.67415 7.33327 4.35579 7.52885ZM6.33103 12.6045C5.9593 12.4218 5.50982 12.575 5.32709 12.9468C5.14436 13.3185 5.29758 13.768 5.66931 13.9507L7.66931 14.9338C8.04104 15.1166 8.49051 14.9633 8.67324 14.5916C8.85597 14.2199 8.70276 13.7704 8.33103 13.5877L6.33103 12.6045Z',
  d10: 'M14.7606 7.77422C15.1192 7.35415 15.0693 6.72295 14.6492 6.3644C14.4626 6.20508 14.2343 6.1264 14.0067 6.125H13L13 2.125C13 1.57272 12.5523 1.125 12 1.125C11.4477 1.125 11 1.57272 11 2.125V6.125H9.99336C9.76579 6.1264 9.53745 6.20508 9.3508 6.3644C8.93073 6.72295 8.88086 7.35415 9.23941 7.77422L10.2394 8.94579L10.2721 8.98415L10.2721 8.98415C10.4788 9.22646 10.6945 9.47927 10.9005 9.66345C11.1317 9.87011 11.4948 10.125 12 10.125C12.5052 10.125 12.8683 9.87011 13.0995 9.66345C13.3056 9.47927 13.5212 9.22647 13.7279 8.98415L13.7279 8.98415L13.7606 8.94579L14.7606 7.77422Z',
  d11: 'M3.96159 7.8314C4.15774 7.67733 4.32437 7.54815 4.35579 7.52885C4.67415 7.33327 5.18221 7.10716 5.99328 6.75021L7.54868 6.06568C8.03366 5.85224 8.23713 5.32059 8.00313 4.87821C7.76914 4.43582 7.1863 4.25023 6.70132 4.46367L5.07981 5.17729C4.35503 5.49619 3.71606 5.77734 3.2665 6.05352C2.81708 6.32961 2.25 6.78386 2.25 7.52574C2.25 7.55018 2.25108 7.57439 2.2532 7.59832C2.25108 7.62129 2.25 7.64456 2.25 7.66807L2.25 17.3012C2.25 18.4206 3.06888 19.164 4.07416 19.7655C5.0925 20.3748 6.80139 21.0946 8.69452 21.8919L8.69452 21.8919C10.1139 22.4903 11.0284 22.8757 12 22.8757C12.9716 22.8757 13.8861 22.4903 15.3055 21.8919C17.1986 21.0946 18.9075 20.3748 19.9258 19.7655C20.9311 19.164 21.75 18.4206 21.75 17.3012L21.75 7.66807C21.75 7.64456 21.7489 7.62129 21.7468 7.59832C21.7489 7.57439 21.75 7.55018 21.75 7.52574C21.75 6.78386 21.1829 6.32961 20.7335 6.05352C20.2839 5.77734 19.645 5.49619 18.9202 5.17728L18.9202 5.17727L17.3422 4.4828C16.8572 4.26936 16.2743 4.45496 16.0403 4.89734C15.8063 5.33973 16.0098 5.87138 16.4948 6.08481L18.0067 6.75021C18.8178 7.10716 19.3259 7.33327 19.6442 7.52885C19.6756 7.54815 19.8423 7.67733 20.0384 7.8314C20.0204 7.84427 20.0009 7.85778 19.9799 7.87194C19.6348 8.10435 19.0937 8.36754 18.2694 8.76524L15.3482 10.1747C13.4806 11.0757 12.7582 11.4049 12 11.4049C11.2418 11.4049 10.5195 11.0757 8.65182 10.1746L5.73062 8.76524C4.90633 8.36754 4.36522 8.10435 4.02014 7.87194C3.99912 7.85778 3.97964 7.84427 3.96159 7.8314Z',
  d12: 'M5.32709 12.9467C5.50982 12.5749 5.9593 12.4217 6.33103 12.6044L8.33103 13.5876C8.70276 13.7703 8.85597 14.2198 8.67324 14.5915C8.49051 14.9632 8.04104 15.1164 7.66931 14.9337L5.66931 13.9506C5.29758 13.7679 5.14436 13.3184 5.32709 12.9467Z',
  d13: 'M16.5 6.00146L21 8.00225L12 12.0038L3 8.00225L7.5 6.00146',
  d14: 'M6 13.5044L8 14.5048',
  d15: 'M3 8.00244V17.9955L11.9713 21.9991C11.9974 22.0108 12.0272 22.0109 12.0533 21.9991L21 18.0129V8.01741M12.0123 12.0415V21.4971',
  d16: 'M12.0022 2.00977V8.46076M14.4972 6.50512L12.0022 9.00273L9.50391 6.50113',
  d17: 'M2.25 8.00011V18.4874L11.6954 22.6854C11.8893 22.7715 12.1107 22.7715 12.3046 22.6854L21.75 18.4874V8C21.75 7.70361 21.5754 7.43483 21.3046 7.31445L16.8046 5.31445L16.1954 6.68517L19.1533 7.99981L12 11.1791L4.84666 7.99981L7.8046 6.68517L7.1954 5.31445L2.6954 7.31445C2.42455 7.43483 2.25 7.70372 2.25 8.00011ZM5.83594 14.0062L8.16512 15.1707V13.4937L5.83594 12.3291V14.0062Z',
  d18: 'M12.7491 1.25V6.18934L13.9688 4.96967L15.0294 6.03033L11.9991 9.06066L8.96875 6.03033L10.0294 4.96967L11.2491 6.18934V1.25H12.7491Z',
};

export const IconPackageReceiveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-stroke-rounded IconPackageReceiveStrokeRounded"
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

export const IconPackageReceiveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-duotone-rounded IconPackageReceiveDuotoneRounded"
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

export const IconPackageReceiveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-twotone-rounded IconPackageReceiveTwotoneRounded"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageReceiveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-solid-rounded IconPackageReceiveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPackageReceiveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-bulk-rounded IconPackageReceiveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageReceiveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-stroke-sharp IconPackageReceiveStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageReceiveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-receive-solid-sharp IconPackageReceiveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageReceive: TheIconSelfPack = {
  name: 'PackageReceive',
  StrokeRounded: IconPackageReceiveStrokeRounded,
  DuotoneRounded: IconPackageReceiveDuotoneRounded,
  TwotoneRounded: IconPackageReceiveTwotoneRounded,
  SolidRounded: IconPackageReceiveSolidRounded,
  BulkRounded: IconPackageReceiveBulkRounded,
  StrokeSharp: IconPackageReceiveStrokeSharp,
  SolidSharp: IconPackageReceiveSolidSharp,
};