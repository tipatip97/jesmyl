import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 19H2M22 19C22 18.4398 20.4046 17.3932 20 17M22 19C22 19.5602 20.4046 20.6068 20 21M2 19C2 18.4398 3.59544 17.3932 4 17M2 19C2 19.5602 3.59544 20.6068 4 21',
  d2: 'M22 14L20.0714 8.5M20.0714 8.5L18.3793 3.67442C18.3324 3.54046 18.3089 3.47349 18.2792 3.4166C18.1653 3.19858 17.9709 3.0495 17.7493 3.01024C17.6915 3 17.6277 3 17.5 3C17.3723 3 17.3085 3 17.2507 3.01024C17.0291 3.0495 16.8347 3.19858 16.7208 3.4166C16.6911 3.47349 16.6676 3.54046 16.6207 3.67442L14.9286 8.5M20.0714 8.5L14.9286 8.5M14.9286 8.5L13 14',
  d3: 'M2 3L5.62066 13.3256C5.66763 13.4595 5.69112 13.5265 5.72083 13.5834C5.83469 13.8014 6.02907 13.9505 6.25065 13.9898C6.30847 14 6.37231 14 6.5 14C6.62768 14 6.69153 14 6.74934 13.9898C6.97093 13.9505 7.16531 13.8014 7.27917 13.5834C7.30888 13.5265 7.33237 13.4595 7.37934 13.3256L11 3',
  d4: 'M18.3785 3.67442L20.0706 8.5L14.9277 8.5L16.6198 3.67442C16.6668 3.54046 16.6903 3.47349 16.72 3.4166C16.8339 3.19858 17.0282 3.0495 17.2498 3.01024C17.3076 3 17.3715 3 17.4992 3C17.6268 3 17.6907 3 17.7485 3.01024C17.9701 3.0495 18.1645 3.19858 18.2783 3.4166C18.308 3.47349 18.3315 3.54046 18.3785 3.67442Z',
  d5: 'M19.2829 16.303C19.6679 15.907 20.301 15.898 20.697 16.2829C20.7512 16.3357 20.8766 16.4371 21.1009 16.6132L21.1494 16.6513C21.3423 16.8027 21.5753 16.9856 21.7982 17.1745C22.0358 17.3758 22.2968 17.6128 22.5057 17.8581C22.6105 17.9811 22.7225 18.1297 22.8123 18.2975C22.8979 18.4574 23 18.7023 23 19C23 19.2977 22.8979 19.5426 22.8123 19.7025C22.7225 19.8703 22.6105 20.0189 22.5057 20.1419C22.2968 20.3872 22.0358 20.6242 21.7982 20.8255C21.5753 21.0144 21.3423 21.1973 21.1494 21.3487L21.1009 21.3868C20.8766 21.5629 20.7512 21.6644 20.697 21.7171C20.301 22.102 19.6679 22.093 19.2829 21.697C19.0944 21.503 19.0003 21.2522 19 21.0015V20.6C19 20.3172 19 20.1757 18.9121 20.0879C18.8243 20 18.6828 20 18.4 20H5.6C5.31716 20 5.17574 20 5.08787 20.0879C5 20.1757 5 20.3172 5 20.6V20.999C5.00027 21.2505 4.90624 21.5024 4.71708 21.697C4.33215 22.093 3.69904 22.102 3.30301 21.7171C3.24876 21.6644 3.12339 21.5629 2.89913 21.3868L2.85061 21.3487C2.65771 21.1973 2.42474 21.0144 2.20182 20.8255C1.96422 20.6242 1.70321 20.3872 1.49431 20.1419C1.38951 20.0189 1.27748 19.8703 1.18766 19.7025C1.10207 19.5426 1 19.2977 1 19C1 18.7023 1.10207 18.4574 1.18766 18.2975C1.27748 18.1297 1.38951 17.9811 1.49431 17.8581C1.70321 17.6128 1.96422 17.3758 2.20182 17.1745C2.42473 16.9856 2.6577 16.8027 2.8506 16.6513L2.89913 16.6132C3.12339 16.4371 3.24876 16.3357 3.30301 16.2829C3.69904 15.898 4.33215 15.907 4.71708 16.303C4.90569 16.4971 4.99973 16.748 5 16.9988V17.4C5 17.6828 5 17.8243 5.08787 17.9121C5.17574 18 5.31716 18 5.6 18H18.4C18.6828 18 18.8243 18 18.9121 17.9121C19 17.8243 19 17.6828 19 17.4V16.9988C19.0003 16.748 19.0943 16.4971 19.2829 16.303Z',
  d6: 'M17.5003 2.00015L17.4731 2.00008C17.379 1.99975 17.2262 1.9992 17.0765 2.02572C16.5183 2.12461 16.0768 2.49031 15.8347 2.95381C15.7699 3.07796 15.7228 3.21316 15.6874 3.3147L15.6773 3.34367L12.0566 13.6693C11.8739 14.1904 12.1482 14.7611 12.6694 14.9438C13.1905 15.1266 13.7612 14.8522 13.9439 14.331L15.6379 9.50015L19.3627 9.50015L21.0566 14.331C21.2394 14.8522 21.81 15.1266 22.3312 14.9438C22.8523 14.7611 23.1267 14.1904 22.9439 13.6693L19.3233 3.34367L19.3132 3.3147C19.2778 3.21316 19.2307 3.07796 19.1658 2.95381C18.9238 2.49031 18.4823 2.12461 17.924 2.02572C17.7744 1.9992 17.6215 1.99975 17.5275 2.00008L17.5003 2.00015ZM17.5003 4.18896L18.6613 7.5002H16.3392L17.5003 4.18896Z',
  d7: 'M6.50028 14.9999L6.47308 14.9999C6.37904 15.0003 6.22619 15.0008 6.07649 14.9743C5.51826 14.8754 5.07678 14.5097 4.83471 14.0462C4.76987 13.922 4.72276 13.7868 4.68738 13.6853L4.67726 13.6563L1.05661 3.33075C0.873856 2.80958 1.1482 2.23893 1.66938 2.05618C2.19055 1.87344 2.76119 2.14778 2.94394 2.66896L6.50026 12.811L10.0566 2.66895C10.2394 2.14778 10.81 1.87343 11.3312 2.05618C11.8523 2.23893 12.1267 2.80957 11.9439 3.33075L8.32328 13.6563L8.31316 13.6853C8.27778 13.7868 8.23068 13.922 8.16584 14.0462C7.92376 14.5097 7.48227 14.8754 6.92405 14.9743C6.77436 15.0008 6.62151 15.0003 6.52747 14.9999L6.50028 14.9999Z',
  d8: 'M20 16L22 18.5L20 21M4 16L2 18.5L4 21M2.45162 18.5H21.3669',
  d9: 'M22 14L18 3H17L13 14M14.6364 10H20.3636',
  d10: 'M11 3L6.5 14L2 3',
  d11: 'M4.61125 19.6252L5.31149 20.5005L3.74976 21.7499L1.25 18.6252L3.74976 15.5005L5.31149 16.7499L4.61125 17.6252H19.3875L18.6873 16.7499L20.249 15.5005L22.7487 18.6252L20.249 21.7499L18.6873 20.5005L19.3875 19.6252H4.61125Z',
  d12: 'M15.8605 2.25H18.2613L22.5007 13.9083L20.6211 14.5917L19.4059 11.25H14.7159L13.5007 14.5917L11.6211 13.9083L15.8605 2.25ZM15.4431 9.25H18.6786L17.0609 4.80118L15.4431 9.25Z',
  d13: 'M6.92555 10.9876L10.5 2.25L12.3511 3.00727L7.85109 14.0073C7.69735 14.3831 7.3316 14.6286 6.92555 14.6286C6.51949 14.6286 6.15375 14.3831 6 14.0073L1.5 3.00727L3.35109 2.25L6.92555 10.9876Z',
};

export const IconTextTrackingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-stroke-rounded IconTextTrackingStrokeRounded"
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

export const IconTextTrackingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-duotone-rounded IconTextTrackingDuotoneRounded"
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

export const IconTextTrackingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-twotone-rounded IconTextTrackingTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTextTrackingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-solid-rounded IconTextTrackingSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextTrackingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-bulk-rounded IconTextTrackingBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextTrackingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-stroke-sharp IconTextTrackingStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTextTrackingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-tracking-solid-sharp IconTextTrackingSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextTracking: TheIconSelfPack = {
  name: 'TextTracking',
  StrokeRounded: IconTextTrackingStrokeRounded,
  DuotoneRounded: IconTextTrackingDuotoneRounded,
  TwotoneRounded: IconTextTrackingTwotoneRounded,
  SolidRounded: IconTextTrackingSolidRounded,
  BulkRounded: IconTextTrackingBulkRounded,
  StrokeSharp: IconTextTrackingStrokeSharp,
  SolidSharp: IconTextTrackingSolidSharp,
};