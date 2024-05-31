import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 15L12 16.5',
  d2: 'M3 11L3.15288 13.8633C3.31714 17.477 3.39927 19.2839 4.55885 20.3919C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.3919C20.6007 19.2839 20.6829 17.477 20.8471 13.8633L21 11',
  d3: 'M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z',
  d4: 'M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6',
  d5: 'M3.17284 11C5.00204 13.8276 8.59474 15 12 15C15.4053 15 18.998 13.8276 20.8272 11H21L20.8471 14.2269C20.6829 17.6686 20.6007 19.3894 19.4412 20.4447C18.2816 21.5 16.4728 21.5 12.8554 21.5H11.1446C7.52716 21.5 5.71843 21.5 4.55885 20.4447C3.39927 19.3894 3.31714 17.6686 3.15288 14.2269L3 11H3.17284Z',
  d6: 'M2.4047 13.8992C2.39966 13.8049 2.51563 13.7544 2.58272 13.8209C4.46079 15.6819 6.98561 16.6651 9.42731 17.0498C9.52408 17.0651 9.6077 17.1255 9.65151 17.2132L9.71211 17.3344C10.1456 18.2013 11.0317 18.749 12.001 18.749C12.9703 18.749 13.8563 18.2013 14.2898 17.3344L14.3504 17.2132C14.3942 17.1256 14.4778 17.0651 14.5746 17.0499C17.0173 16.6651 19.5432 15.6813 21.4216 13.819C21.4878 13.7533 21.6022 13.8032 21.5973 13.8963L21.597 13.9022L21.5948 13.9511C21.5148 15.7114 21.4513 17.1073 21.2566 18.198C21.0561 19.3213 20.7003 20.226 19.9602 20.9331C19.2202 21.6403 18.3003 21.9547 17.169 22.104C16.0706 22.249 14.6734 22.249 12.9113 22.249H11.0906C9.32847 22.249 7.93118 22.249 6.8328 22.104C5.70153 21.9547 4.78165 21.6403 4.04161 20.9331C3.30158 20.226 2.94575 19.3213 2.74521 18.198C2.55049 17.1073 2.48706 15.7115 2.40706 13.9512L2.4047 13.8992Z',
  d7: 'M1.98194 7.40879C2.33904 6.32293 3.19914 5.25 4.64816 5.25H19.3522C20.8012 5.25 21.6613 6.32292 22.0184 7.40879C22.3726 8.486 22.3323 9.81185 21.8168 10.7921C20.2143 13.8395 16.9562 15.2869 13.7141 15.6539C13.5426 15.6733 13.3913 15.7763 13.3142 15.9306L12.9472 16.6646C12.7678 17.0234 12.4011 17.25 12 17.25C11.5988 17.25 11.2321 17.0234 11.0528 16.6646L10.6857 15.9305C10.6086 15.7762 10.4573 15.6732 10.2858 15.6538C7.0439 15.2868 3.78598 13.8393 2.18353 10.7921C1.66803 9.81185 1.62769 8.486 1.98194 7.40879Z',
  d8: 'M11.8252 1.5C11.9423 1.50001 12.06 1.50001 12.1765 1.5C12.8218 1.49995 13.4008 1.49989 13.8807 1.56382C14.4114 1.63451 14.9183 1.79327 15.3723 2.17507C15.8132 2.54582 16.0764 3.02008 16.2809 3.53295C16.4753 4.02046 16.6521 4.63914 16.8604 5.36828L16.9624 5.72529L15.0393 6.27473L14.951 5.96567C14.7253 5.17561 14.5755 4.6557 14.4232 4.27373C14.2767 3.90647 14.168 3.7755 14.0851 3.70581C14.0154 3.64718 13.9125 3.58572 13.6166 3.54631C13.2844 3.50205 12.8403 3.50001 12.1178 3.50001H11.8839C11.1614 3.50001 10.7173 3.50205 10.3851 3.54631C10.0891 3.58572 9.98625 3.64718 9.91652 3.70581C9.83364 3.7755 9.72494 3.90647 9.5785 4.27373C9.42619 4.6557 9.27639 5.17561 9.05066 5.96567L8.96235 6.27473L7.03931 5.72529C7.07331 5.60629 7.10731 5.48729 7.1413 5.3683C7.3496 4.63915 7.52635 4.02046 7.72074 3.53295C7.92525 3.02008 8.18844 2.54582 8.62934 2.17507C9.08338 1.79327 9.59024 1.63451 10.121 1.56382C10.6009 1.49989 11.1798 1.49995 11.8252 1.5Z',
  d9: 'M3.00025 10.25C2.79439 10.25 2.59759 10.3346 2.45596 10.484C2.31433 10.6334 2.24034 10.8344 2.25131 11.04L2.40403 13.9003L2.40639 13.9522C2.48639 15.7125 2.54982 17.1084 2.74453 18.199C2.94507 19.3223 3.30091 20.227 4.04094 20.9342C4.78098 21.6413 5.70086 21.9557 6.83213 22.105C7.93051 22.25 9.3278 22.25 11.0899 22.25H12.9106C14.6727 22.25 16.07 22.25 17.1684 22.105C18.2996 21.9557 19.2195 21.6413 19.9595 20.9342C20.6996 20.227 21.0554 19.3223 21.256 18.199C21.4507 17.1084 21.5141 15.7125 21.5941 13.9522L21.5963 13.9032L21.5966 13.8973L21.7492 11.04C21.7602 10.8344 21.6862 10.6334 21.5445 10.484C21.4029 10.3346 21.2061 10.25 21.0002 10.25H3.00025Z',
  d10: 'M3.5 12V21.5H20.5V12',
  d11: 'M15.5 6V2.5H8.5V6',
  d12: 'M12 15V17.5',
  d13: 'M21.4907 6.05273H2.50905C2.50351 6.05273 2.49902 6.05721 2.49902 6.06273V10.2699C5.30312 17.0479 19.7062 15.9398 21.5007 10.2699V6.06273C21.5007 6.05721 21.4962 6.05273 21.4907 6.05273Z',
  d14: 'M7.5 2.75C7.5 2.19772 7.94772 1.75 8.5 1.75H15.5C16.0523 1.75 16.5 2.19772 16.5 2.75V6.25H14.5V3.75H9.5V6.25H7.5V2.75Z',
  d15: 'M2.5 5.25C2.08579 5.25 1.75 5.58579 1.75 6V10.6282L1.83619 10.7921C3.56415 14.078 7.49829 15.4939 11 15.7179V17H13V15.7179C16.5018 15.494 20.436 14.0782 22.164 10.7921L22.2502 10.6282V6C22.2502 5.58579 21.9144 5.25 21.5002 5.25H2.5Z',
  d16: 'M21.25 14.2512C19.3194 15.8716 16.8249 16.7253 14.5 17.067V18.5001H9.5V17.067C7.17513 16.7252 4.68053 15.8714 2.75 14.251V21.5001C2.75 21.9143 3.08579 22.2501 3.5 22.2501H20.5C20.9142 22.2501 21.25 21.9143 21.25 21.5001V14.2512Z',
} as const;

export const IconBriefcase06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-stroke-rounded IconBriefcase06StrokeRounded"
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

export const IconBriefcase06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-duotone-rounded IconBriefcase06DuotoneRounded"
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

export const IconBriefcase06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-twotone-rounded IconBriefcase06TwotoneRounded"
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

export const IconBriefcase06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-solid-rounded IconBriefcase06SolidRounded"
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

export const IconBriefcase06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-bulk-rounded IconBriefcase06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconBriefcase06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-stroke-sharp IconBriefcase06StrokeSharp"
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-06-solid-sharp IconBriefcase06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfBriefcase06: TheIconSelfPack = {
  name: 'Briefcase06',
  StrokeRounded: IconBriefcase06StrokeRounded,
  DuotoneRounded: IconBriefcase06DuotoneRounded,
  TwotoneRounded: IconBriefcase06TwotoneRounded,
  SolidRounded: IconBriefcase06SolidRounded,
  BulkRounded: IconBriefcase06BulkRounded,
  StrokeSharp: IconBriefcase06StrokeSharp,
  SolidSharp: IconBriefcase06SolidSharp,
};