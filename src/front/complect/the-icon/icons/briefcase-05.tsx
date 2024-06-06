import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 11L3.15288 14.2269C3.31714 17.6686 3.39927 19.3894 4.55885 20.4447C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.4447C20.6007 19.3894 20.6829 17.6686 20.8471 14.2269L21 11',
  d2: 'M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z',
  d3: 'M12 11H12.009',
  d4: 'M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6',
  d5: 'M3.17284 11C5.00204 13.8276 8.59474 15 12 15C15.4053 15 18.998 13.8276 20.8272 11H21L20.8471 14.2269C20.6829 17.6686 20.6007 19.3894 19.4412 20.4447C18.2816 21.5 16.4728 21.5 12.8554 21.5H11.1446C7.52716 21.5 5.71843 21.5 4.55885 20.4447C3.39927 19.3894 3.31714 17.6686 3.15288 14.2269L3 11H3.17284Z',
  d6: 'M2.3994 14.1478C2.38878 13.9237 2.38347 13.8117 2.4448 13.7835C2.50612 13.7553 2.58914 13.8337 2.75517 13.9904C5.28371 16.377 8.90537 17.2495 12.0008 17.2495C15.0965 17.2495 18.7184 16.3769 21.247 13.9899C21.413 13.8332 21.496 13.7548 21.5574 13.783C21.6187 13.8112 21.6134 13.9232 21.6028 14.1473L21.5946 14.3191C21.5148 15.9916 21.4512 17.325 21.2556 18.3684C21.0531 19.4486 20.6926 20.3204 19.947 20.9989C19.2063 21.673 18.2897 21.9703 17.1646 22.1117C16.0685 22.2495 14.6732 22.2495 12.9091 22.2495H11.093C9.32894 22.2495 7.93364 22.2495 6.83755 22.1117C5.71245 21.9703 4.79587 21.673 4.05512 20.9989C3.30954 20.3204 2.94901 19.4486 2.74653 18.3684C2.55095 17.325 2.48732 15.9916 2.40752 14.3191L2.3994 14.1478Z',
  d7: 'M1.98194 7.40879C2.33904 6.32293 3.19914 5.25 4.64816 5.25H19.3522C20.8012 5.25 21.6613 6.32292 22.0184 7.40879C22.3726 8.486 22.3323 9.81185 21.8168 10.7921C19.9301 14.3799 15.7486 15.75 12.0002 15.75C8.25177 15.75 4.07022 14.3799 2.18353 10.7921C1.66803 9.81185 1.62769 8.486 1.98194 7.40879ZM11.9958 10C11.446 10 11.0002 10.4477 11.0002 11C11.0002 11.5523 11.446 12 11.9958 12H12.0047C12.5545 12 13.0002 11.5523 13.0002 11C13.0002 10.4477 12.5545 10 12.0047 10H11.9958Z',
  d8: 'M11.8252 1.5C11.9423 1.50001 12.06 1.50001 12.1765 1.5C12.8218 1.49995 13.4008 1.49989 13.8807 1.56382C14.4114 1.63451 14.9183 1.79327 15.3723 2.17507C15.8132 2.54582 16.0764 3.02008 16.2809 3.53295C16.4753 4.02046 16.6521 4.63914 16.8604 5.36828L16.9624 5.72529L15.0393 6.27473L14.951 5.96567C14.7253 5.17561 14.5755 4.6557 14.4232 4.27373C14.2767 3.90647 14.168 3.7755 14.0851 3.70581C14.0154 3.64718 13.9125 3.58572 13.6166 3.54631C13.2844 3.50205 12.8403 3.50001 12.1178 3.50001H11.8839C11.1614 3.50001 10.7173 3.50205 10.3851 3.54631C10.0891 3.58572 9.98625 3.64718 9.91652 3.70581C9.83364 3.7755 9.72494 3.90647 9.5785 4.27373C9.42619 4.6557 9.27639 5.17561 9.05066 5.96567L8.96235 6.27473L7.03931 5.72529C7.07331 5.60629 7.10731 5.48729 7.1413 5.3683C7.3496 4.63915 7.52635 4.02046 7.72074 3.53295C7.92525 3.02008 8.18844 2.54582 8.62934 2.17507C9.08338 1.79327 9.59024 1.63451 10.121 1.56382C10.6009 1.49989 11.1798 1.49995 11.8252 1.5Z',
  d9: 'M2.25416 10.9221C4.17298 14.412 8.29785 15.7487 12.0002 15.7487C15.7026 15.7487 19.8275 14.4119 21.7463 10.9219C21.7501 10.9589 21.7512 10.9965 21.7494 11.0342L21.5938 14.3183C21.514 15.9908 21.4504 17.3242 21.2548 18.3675C21.0523 19.4477 20.6918 20.3195 19.9462 20.998C19.2054 21.6722 18.2889 21.9695 17.1638 22.1109C16.0677 22.2487 14.6723 22.2487 12.9083 22.2487H11.0922C9.32811 22.2487 7.93281 22.2487 6.83673 22.1109C5.71162 21.9695 4.79505 21.6722 4.05429 20.998C3.30871 20.3195 2.94819 19.4477 2.7457 18.3675C2.55012 17.3242 2.4865 15.9908 2.40669 14.3183L2.25109 11.0342C2.2493 10.9965 2.25036 10.9591 2.25416 10.9221Z',
  d10: 'M3.45239 12V21.5H20.492V12',
  d11: 'M11.9714 11H11.9804',
  d12: 'M15.4795 6V2.5H8.46313V6',
  d13: 'M21.491 6H2.50929C2.50376 6 2.49927 6.00448 2.49927 6.01V10.2171C5.30337 16.9952 19.7064 15.8871 21.501 10.2171V6.01C21.501 6.00448 21.4965 6 21.491 6Z',
  d14: 'M2.49976 5.25C2.08554 5.25 1.74976 5.58579 1.74976 6V10.6282L1.83595 10.7921C3.73081 14.3954 8.27864 15.75 12 15.75C15.7214 15.75 20.2689 14.3954 22.1638 10.7921L22.25 10.6282V6C22.25 5.58579 21.9142 5.25 21.5 5.25H2.49976ZM12.9998 10H10.9998V12H12.9998V10Z',
  d15: 'M7.49976 2.75C7.49976 2.19772 7.94747 1.75 8.49976 1.75H15.4998C16.052 1.75 16.4998 2.19772 16.4998 2.75V6.25H14.4998V3.75H9.49976V6.25H7.49976V2.75Z',
  d16: 'M2.74951 14.252V21.4999C2.74951 21.9141 3.0853 22.2499 3.49951 22.2499H20.4995C20.9137 22.2499 21.2495 21.9141 21.2495 21.4999V14.2522C18.6169 16.4625 14.9278 17.2499 11.9997 17.2499C9.07163 17.2499 5.38223 16.4625 2.74951 14.252Z',
};

export const IconBriefcase05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-stroke-rounded IconBriefcase05StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-duotone-rounded IconBriefcase05DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-twotone-rounded IconBriefcase05TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconBriefcase05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-solid-rounded IconBriefcase05SolidRounded"
    >
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

export const IconBriefcase05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-bulk-rounded IconBriefcase05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconBriefcase05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-stroke-sharp IconBriefcase05StrokeSharp"
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
        strokeLinecap="square" 
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

export const IconBriefcase05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-05-solid-sharp IconBriefcase05SolidSharp"
    >
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

export const iconPackOfBriefcase05: TheIconSelfPack = {
  name: 'Briefcase05',
  StrokeRounded: IconBriefcase05StrokeRounded,
  DuotoneRounded: IconBriefcase05DuotoneRounded,
  TwotoneRounded: IconBriefcase05TwotoneRounded,
  SolidRounded: IconBriefcase05SolidRounded,
  BulkRounded: IconBriefcase05BulkRounded,
  StrokeSharp: IconBriefcase05StrokeSharp,
  SolidSharp: IconBriefcase05SolidSharp,
};