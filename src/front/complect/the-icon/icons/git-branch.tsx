import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5',
  d2: 'M5 7L5 17',
  d3: 'M20.5884 13.5C20.764 13.5001 20.9797 13.5003 21.1561 13.4782L21.1595 13.4778C21.2859 13.462 21.862 13.3902 22.1363 12.8246C22.4113 12.2578 22.1093 11.7576 22.044 11.6494L21.7049 11.181C21.4103 10.8051 21.0046 10.2907 20.6241 9.89966C20.4343 9.70455 20.217 9.50331 19.9861 9.34447C19.7809 9.20326 19.4307 9 19 9C18.5693 9 18.2191 9.20326 18.0139 9.34447C17.783 9.50332 17.5657 9.70455 17.3759 9.89966C16.9954 10.2907 16.5898 10.8051 16.2951 11.1809L15.956 11.6494C15.8907 11.7576 15.5887 12.2578 15.8637 12.8246C16.138 13.3902 16.7141 13.462 16.8405 13.4778L16.8439 13.4782C17.0203 13.5003 17.236 13.5001 17.4116 13.5L20.5884 13.5Z',
  d4: 'M17.9997 13.498C17.998 14.666 17.9857 15.5119 17.8991 16.1562C17.8042 16.8622 17.6368 17.1893 17.4142 17.4118C17.1916 17.6344 16.8646 17.8018 16.1586 17.8967C15.4237 17.9955 14.4425 17.9976 13 17.9976H7C6.44772 17.9976 6 18.4453 6 18.9976C6 19.5499 6.44772 19.9976 7 19.9976L13.0706 19.9976C14.4247 19.9976 15.5413 19.9977 16.4251 19.8789C17.3529 19.7541 18.1723 19.4821 18.8284 18.826C19.4845 18.1699 19.7565 17.3505 19.8812 16.4227C19.9869 15.637 19.9986 14.6551 19.9999 13.498H17.9997Z',
  d5: 'M5 6C5.55228 6 6 6.44772 6 7L6 17C6 17.5523 5.55229 18 5 18C4.44772 18 4 17.5523 4 17L4 7C4 6.44772 4.44772 6 5 6Z',
  d6: 'M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25C6.51878 2.25 7.75 3.48122 7.75 5C7.75 6.51878 6.51878 7.75 5 7.75C3.48122 7.75 2.25 6.51878 2.25 5Z',
  d7: 'M16.25 5C16.25 3.48122 17.4812 2.25 19 2.25C20.5188 2.25 21.75 3.48122 21.75 5C21.75 6.51878 20.5188 7.75 19 7.75C17.4812 7.75 16.25 6.51878 16.25 5Z',
  d8: 'M2.25 19C2.25 17.4812 3.48122 16.25 5 16.25C6.51878 16.25 7.75 17.4812 7.75 19C7.75 20.5188 6.51878 21.75 5 21.75C3.48122 21.75 2.25 20.5188 2.25 19Z',
  d9: 'M7 19H18.5V10.6376M21 12.5L18.5 10L16 12.5',
  d10: 'M20.4995 5C20.4995 6.10457 19.6041 7 18.4995 7C17.3949 7 16.4995 6.10457 16.4995 5C16.4995 3.89543 17.3949 3 18.4995 3C19.6041 3 20.4995 3.89543 20.4995 5Z',
  d11: 'M17.7929 9.29289C18.1834 8.90237 18.8166 8.90237 19.2071 9.29289L21.7071 11.7929L20.2929 13.2071L19.5 12.4142V19C19.5 19.5523 19.0523 20 18.5 20H7V18H17.5V12.4142L16.7071 13.2071L15.2929 11.7929L17.7929 9.29289Z',
  d12: 'M4 17L4 7L6 7L6 17L4 17Z',
  d13: 'M15.7495 5C15.7495 3.48122 16.9807 2.25 18.4995 2.25C20.0183 2.25 21.2495 3.48122 21.2495 5C21.2495 6.51878 20.0183 7.75 18.4995 7.75C16.9807 7.75 15.7495 6.51878 15.7495 5Z',
};

export const IconGitBranchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-stroke-rounded IconGitBranchStrokeRounded"
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
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="5" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGitBranchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-duotone-rounded IconGitBranchDuotoneRounded"
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="5" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="19" 
        cy="5" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="5" 
        cy="19" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="5" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGitBranchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-twotone-rounded IconGitBranchTwotoneRounded"
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
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="5" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconGitBranchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-solid-rounded IconGitBranchSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGitBranchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-bulk-rounded IconGitBranchBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGitBranchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-stroke-sharp IconGitBranchStrokeSharp"
    >
      <path 
        d={d.d9} 
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
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconGitBranchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="git-branch-solid-sharp IconGitBranchSolidSharp"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGitBranch: TheIconSelfPack = {
  name: 'GitBranch',
  StrokeRounded: IconGitBranchStrokeRounded,
  DuotoneRounded: IconGitBranchDuotoneRounded,
  TwotoneRounded: IconGitBranchTwotoneRounded,
  SolidRounded: IconGitBranchSolidRounded,
  BulkRounded: IconGitBranchBulkRounded,
  StrokeSharp: IconGitBranchStrokeSharp,
  SolidSharp: IconGitBranchSolidSharp,
};