import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.5802 8L14.9874 6.85021C13.664 4.2834 13.0023 3 12 3C10.9977 3 10.336 4.2834 9.01261 6.85021L4.59051 15.4272C3.31146 17.908 2.67193 19.1484 3.16823 20.0742C3.66452 21 4.96898 21 7.5779 21H16.4221C19.031 21 20.3355 21 20.8318 20.0742C21.3281 19.1484 20.6885 17.908 19.4095 15.4272L19.0598 14.7489',
  d2: 'M8 10L22 7M8 10L21.4615 11.5M8 10L22 16',
  d3: 'M8 10L2 11',
  d4: 'M7.5779 21H16.4221C19.031 21 20.3355 21 20.8318 20.0742C21.3281 19.1484 20.6885 17.908 19.4095 15.4272L19.0598 14.7489L7.64643 9.5L4.59051 15.4272C3.31146 17.908 2.67193 19.1484 3.16823 20.0742C3.66452 21 4.96898 21 7.5779 21Z',
  d5: 'M19.0598 14.7489L19.4095 15.4271C20.6885 17.908 21.3281 19.1484 20.8318 20.0742C20.3355 21 19.031 21 16.4221 21H7.5779C4.96898 21 3.66452 21 3.16823 20.0742C2.67193 19.1484 3.31146 17.908 4.59051 15.4271L7 10.5',
  d6: 'M15.5 8L14.9874 6.85021C13.664 4.2834 13.0023 3 12 3C10.9977 3 10.336 4.2834 9.01264 6.85021L7.5 10',
  d7: 'M8 10L22 7M8 10L21.4615 11.5M8 10L22 16M8 10L2 11',
  d8: 'M8 10L22 7M8 10L22 16M8 10L2 11',
  d9: 'M11.442 4.54192C11.0373 5.11132 10.5786 5.9956 9.90167 7.30847L8.2777 10.4583C8.02461 10.9491 7.42151 11.1419 6.93062 10.8888C6.43974 10.6357 6.24697 10.0326 6.50006 9.54174L8.12403 6.39195C8.13658 6.36761 8.14908 6.34336 8.16155 6.31918C8.79125 5.09773 9.31421 4.08333 9.81189 3.38318C10.3114 2.68041 10.9882 2 12.0002 2C13.0123 2 13.689 2.68041 14.1886 3.38318C14.6863 4.08333 15.2092 5.09772 15.8389 6.31918L16.4693 7.54174C16.7223 8.03262 16.5296 8.63573 16.0387 8.88882C15.5478 9.14191 14.9447 8.94914 14.6916 8.45826L14.0988 7.30847C13.4219 5.9956 12.9632 5.11132 12.5585 4.54192C12.361 4.26415 12.2176 4.1226 12.1209 4.05322C12.0464 3.99973 12.0166 3.99991 12.0019 3.99999C12.0013 4 12.0008 4 12.0002 4C11.9997 4 11.9992 4 11.9986 3.99999C11.9839 3.99991 11.9541 3.99973 11.8796 4.05322C11.7828 4.1226 11.6395 4.26415 11.442 4.54192Z',
  d10: 'M7.67139 9.30544C7.31181 9.15913 6.90001 9.31139 6.72211 9.65644L3.89628 15.1373C3.28026 16.3321 2.78096 17.3004 2.50585 18.086C2.22466 18.889 2.10902 19.6857 2.5073 20.4287C2.91718 21.1933 3.6502 21.4934 4.46096 21.6248C5.2353 21.7502 6.26337 21.7502 7.50944 21.7501H16.4907C17.7368 21.7502 18.7649 21.7502 19.5392 21.6248C20.35 21.4934 21.083 21.1933 21.4929 20.4287C21.8911 19.6857 21.7755 18.889 21.4943 18.086C21.2192 17.3004 20.7199 16.3321 20.1039 15.1373L19.7265 14.4053C19.6445 14.2463 19.5083 14.1218 19.3425 14.0543L7.67139 9.30544Z',
  d11: 'M22.978 6.79068C23.0937 7.3307 22.7497 7.86229 22.2097 7.97801L14.2292 9.68811L21.5724 10.5064C22.1213 10.5675 22.5167 11.0621 22.4555 11.6109C22.3944 12.1598 21.8998 12.5552 21.351 12.4941L14.6034 11.7422L22.3941 15.0811C22.9017 15.2986 23.1369 15.8865 22.9193 16.3941C22.7017 16.9018 22.1139 17.1369 21.6062 16.9194L7.87554 11.0348L2.16456 11.9866C1.61978 12.0774 1.10456 11.7094 1.01376 11.1646C0.922967 10.6198 1.29099 10.1046 1.83576 10.0138L7.81309 9.01759L21.7906 6.0224C22.3307 5.90668 22.8622 6.25065 22.978 6.79068Z',
  d12: 'M15 8.4L12 3L2 21H22L18.3889 14.5',
  d13: 'M12 2.25C12.3549 2.25 12.6819 2.44197 12.8543 2.7515L15.7861 8.0165L14.0775 8.9635L12 5.23265L9.22524 10.2156L19.8032 15.2305L22.627 20.3015C22.7952 20.6035 22.7906 20.9717 22.615 21.2694C22.4394 21.5672 22.119 21.75 21.7727 21.75H2.22727C1.88101 21.75 1.56059 21.5672 1.38499 21.2694C1.20939 20.9717 1.20482 20.6035 1.37298 20.3015L11.1457 2.7515C11.3181 2.44197 11.6451 2.25 12 2.25Z',
  d14: 'M14.1078 9.72284L22.0656 7.99656L21.6478 6.02246L7.70989 9.04597L1.74951 10.0516L2.07738 12.0431L7.77217 11.0822L21.4639 17.0225L22.2495 15.1668L14.4809 11.7963L21.2094 12.5553L21.4302 10.5488L14.1078 9.72284Z',
};

export const IconPrism01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-stroke-rounded IconPrism01StrokeRounded"
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

export const IconPrism01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-duotone-rounded IconPrism01DuotoneRounded"
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

export const IconPrism01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-twotone-rounded IconPrism01TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrism01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-solid-rounded IconPrism01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrism01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-bulk-rounded IconPrism01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrism01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-stroke-sharp IconPrism01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPrism01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prism-01-solid-sharp IconPrism01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrism01: TheIconSelfPack = {
  name: 'Prism01',
  StrokeRounded: IconPrism01StrokeRounded,
  DuotoneRounded: IconPrism01DuotoneRounded,
  TwotoneRounded: IconPrism01TwotoneRounded,
  SolidRounded: IconPrism01SolidRounded,
  BulkRounded: IconPrism01BulkRounded,
  StrokeSharp: IconPrism01StrokeSharp,
  SolidSharp: IconPrism01SolidSharp,
};