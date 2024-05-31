import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 15L12 16.5',
  d2: 'M3 15C3.14932 17.9325 3.30572 19.4716 4.39811 20.4447C5.58274 21.5 7.43054 21.5 11.1261 21.5H12.8739C16.5695 21.5 18.4173 21.5 19.6019 20.4447C20.6943 19.4716 20.8507 17.9325 21 15',
  d3: 'M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z',
  d4: 'M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6',
  d5: 'M3.17284 11C5.00204 13.8276 8.59474 15 12 15C15.4053 15 18.998 13.8276 20.8272 11H21L20.8471 14.2269C20.6829 17.6686 20.6007 19.3894 19.4412 20.4447C18.2816 21.5 16.4728 21.5 12.8554 21.5H11.1446C7.52716 21.5 5.71843 21.5 4.55885 20.4447C3.39927 19.3894 3.31714 17.6686 3.15288 14.2269L3 11H3.17284Z',
  d6: 'M2.94942 14.0013C3.50099 13.9732 3.97089 14.3976 3.99897 14.9492C4.07445 16.4315 4.14896 17.4635 4.32178 18.2399C4.48695 18.9819 4.72226 19.394 5.06355 19.698C5.44105 20.0343 5.96857 20.2557 6.94292 20.3756C7.9396 20.4983 9.25286 20.5 11.1264 20.5H12.8741C14.7477 20.5 16.0609 20.4983 17.0576 20.3756C18.032 20.2557 18.5595 20.0343 18.937 19.698C19.2783 19.394 19.5136 18.9819 19.6788 18.2399C19.8516 17.4635 19.9261 16.4315 20.0016 14.9492C20.0296 14.3976 20.4995 13.9732 21.0511 14.0013C21.6027 14.0294 22.0271 14.4993 21.999 15.0509C21.9251 16.501 21.8468 17.7049 21.631 18.6744C21.4075 19.6783 21.0184 20.5223 20.2673 21.1914C19.4602 21.9104 18.4715 22.2167 17.3019 22.3606C16.1687 22.5001 14.7321 22.5001 12.9413 22.5H11.0592C9.26847 22.5001 7.83179 22.5001 6.69865 22.3606C5.52904 22.2167 4.54034 21.9104 3.73321 21.1914C2.9821 20.5223 2.59301 19.6783 2.36956 18.6744C2.15375 17.7049 2.0754 16.501 2.00156 15.0509C1.97348 14.4993 2.39785 14.0294 2.94942 14.0013Z',
  d7: 'M1.98194 7.40879C2.33904 6.32293 3.19914 5.25 4.64816 5.25H19.3522C20.8012 5.25 21.6613 6.32292 22.0184 7.40879C22.3726 8.486 22.3323 9.81185 21.8168 10.7921C20.2143 13.8395 16.9562 15.2869 13.7141 15.6539C13.5426 15.6733 13.3913 15.7763 13.3142 15.9306L12.9472 16.6646C12.7678 17.0234 12.4011 17.25 12 17.25C11.5988 17.25 11.2321 17.0234 11.0528 16.6646L10.6857 15.9305C10.6086 15.7762 10.4573 15.6732 10.2858 15.6538C7.0439 15.2868 3.78598 13.8393 2.18353 10.7921C1.66803 9.81185 1.62769 8.486 1.98194 7.40879Z',
  d8: 'M11.8252 1.5C11.9423 1.50001 12.06 1.50001 12.1765 1.5C12.8218 1.49995 13.4008 1.49989 13.8807 1.56382C14.4114 1.63451 14.9183 1.79327 15.3723 2.17507C15.8132 2.54582 16.0764 3.02008 16.2809 3.53295C16.4753 4.02046 16.6521 4.63914 16.8604 5.36828L16.9624 5.72529L15.0393 6.27473L14.951 5.96567C14.7253 5.17561 14.5755 4.6557 14.4232 4.27373C14.2767 3.90647 14.168 3.7755 14.0851 3.70581C14.0154 3.64718 13.9125 3.58572 13.6166 3.54631C13.2844 3.50205 12.8403 3.50001 12.1178 3.50001H11.8839C11.1614 3.50001 10.7173 3.50205 10.3851 3.54631C10.0891 3.58572 9.98625 3.64718 9.91652 3.70581C9.83364 3.7755 9.72494 3.90647 9.5785 4.27373C9.42619 4.6557 9.27639 5.17561 9.05066 5.96567L8.96235 6.27473L7.03931 5.72529C7.07331 5.60629 7.10731 5.48729 7.1413 5.3683C7.3496 4.63915 7.52635 4.02046 7.72074 3.53295C7.92525 3.02008 8.18844 2.54582 8.62934 2.17507C9.08338 1.79327 9.59024 1.63451 10.121 1.56382C10.6009 1.49989 11.1798 1.49995 11.8252 1.5Z',
  d9: 'M20.5 15V21.5H3.5V15',
  d10: 'M15.5 6V2.5H8.5V6',
  d11: 'M12 15V17.5',
  d12: 'M21.4907 6.10547H2.50905C2.50351 6.10547 2.49902 6.10995 2.49902 6.11547V10.3226C5.30312 17.1007 19.7062 15.9926 21.5007 10.3226V6.11547C21.5007 6.10995 21.4962 6.10547 21.4907 6.10547Z',
  d13: 'M2.75 21.5V15H4.25V20.75H19.75V15H21.25V21.5C21.25 21.9142 20.9142 22.25 20.5 22.25H3.5C3.08579 22.25 2.75 21.9142 2.75 21.5Z',
  d14: 'M2.49976 21.25V14.75H4.49976V20.25H19.4998V14.75H21.4998V21.25C21.4998 21.8023 21.052 22.25 20.4998 22.25H3.49976C2.94747 22.25 2.49976 21.8023 2.49976 21.25Z',
  d15: 'M7.49976 2.75C7.49976 2.19772 7.94747 1.75 8.49976 1.75H15.4998C16.052 1.75 16.4998 2.19772 16.4998 2.75V6.25H14.4998V3.75H9.49976V6.25H7.49976V2.75Z',
  d16: 'M2.5 5.25C2.08579 5.25 1.75 5.58579 1.75 6V10.6282L1.83619 10.7921C3.56415 14.078 7.49829 15.4939 11 15.7179V17H13V15.7179C16.5018 15.494 20.436 14.0782 22.164 10.7921L22.2502 10.6282V6C22.2502 5.58579 21.9144 5.25 21.5002 5.25H2.5Z',
} as const;

export const IconBriefcase07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-stroke-rounded IconBriefcase07StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-duotone-rounded IconBriefcase07DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-twotone-rounded IconBriefcase07TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-solid-rounded IconBriefcase07SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-bulk-rounded IconBriefcase07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBriefcase07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-stroke-sharp IconBriefcase07StrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-07-solid-sharp IconBriefcase07SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcase07: TheIconSelfPack = {
  name: 'Briefcase07',
  StrokeRounded: IconBriefcase07StrokeRounded,
  DuotoneRounded: IconBriefcase07DuotoneRounded,
  TwotoneRounded: IconBriefcase07TwotoneRounded,
  SolidRounded: IconBriefcase07SolidRounded,
  BulkRounded: IconBriefcase07BulkRounded,
  StrokeSharp: IconBriefcase07StrokeSharp,
  SolidSharp: IconBriefcase07SolidSharp,
};