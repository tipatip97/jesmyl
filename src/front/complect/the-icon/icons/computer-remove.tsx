import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 2H10.0039C6.72304 2 5.08264 2 3.91983 2.81382C3.48962 3.1149 3.11544 3.48891 2.81421 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81421 16.0811C3.11544 16.5111 3.48962 16.8851 3.91983 17.1862C5.08264 18 6.72304 18 10.0039 18H14.0058C17.2866 18 18.927 18 20.0898 17.1862C20.52 16.8851 20.8942 16.5111 21.1954 16.0811C21.8241 15.1837 21.9674 14.0017 22 12',
  d2: 'M15 2L18.5 5.5M18.5 5.5L22 9M18.5 5.5L22 2M18.5 5.5L15 9',
  d3: 'M11 15H13',
  d4: 'M12 18V22',
  d5: 'M8 22H16',
  d6: 'M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z',
  d7: 'M22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L19.9142 5.5L22.7071 8.29289C23.0976 8.68342 23.0976 9.31658 22.7071 9.70711C22.3166 10.0976 21.6834 10.0976 21.2929 9.70711L18.5 6.91421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L17.0858 5.5L14.2929 2.70711C13.9024 2.31658 13.9024 1.68342 14.2929 1.29289C14.6834 0.902369 15.3166 0.902369 15.7071 1.29289L18.5 4.08579L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289Z',
  d8: 'M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z',
  d9: 'M11.5 1C12.0523 1 12.5 1.44772 12.5 2C12.5 2.55229 12.0523 3 11.5 3H10.0039C8.34184 3 7.17336 3.0013 6.27237 3.09622C5.38915 3.18928 4.87884 3.36322 4.49322 3.6331C4.15857 3.86731 3.86752 4.15823 3.63323 4.49267C3.36332 4.87796 3.18934 5.38782 3.09626 6.27046C3.0013 7.17093 3 8.33875 3 10C3 11.6612 3.0013 12.8291 3.09626 13.7295C3.18934 14.6122 3.36332 15.122 3.63323 15.5073C3.86752 15.8418 4.15857 16.1327 4.49322 16.3669C4.87884 16.6368 5.38915 16.8107 6.27237 16.9038C7.17336 16.9987 8.34184 17 10.0039 17H14.0058C15.6678 17 16.8363 16.9987 17.7373 16.9038C18.6205 16.8107 19.1308 16.6368 19.5164 16.3669C19.8511 16.1327 20.1421 15.8418 20.3764 15.5073C20.8063 14.8936 20.967 14.0157 21.0001 11.9837C21.0091 11.4315 21.4641 10.9911 22.0163 11.0001C22.5685 11.0091 23.0089 11.4641 22.9999 12.0163C22.9677 13.9876 22.8419 15.4737 22.0144 16.6549C21.6463 17.1804 21.189 17.6375 20.6632 18.0055C19.886 18.5494 18.9947 18.7824 17.9468 18.8928C16.9288 19 15.6548 19 14.0625 19H13.4C13.0229 19 13 19.0229 13 19.4V20C13 20.8273 13.1727 21 14 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H10C10.8273 21 11 20.8273 11 20V19.4C11 19.0229 10.9771 19 10.6 19H9.94717C8.35486 19 7.08088 19 6.06282 18.8928C5.01493 18.7824 4.12363 18.5494 3.34644 18.0055C2.82068 17.6375 2.36336 17.1804 1.99519 16.6549C1.45089 15.8779 1.21776 14.9868 1.10729 13.9393C0.999974 12.9217 0.999986 11.6482 1 10.0567V9.94325C0.999986 8.35178 0.999974 7.07835 1.10729 6.06071C1.21776 5.01317 1.45089 4.12211 1.99519 3.34514C2.36336 2.81959 2.82068 2.3625 3.34644 1.99454C4.12363 1.4506 5.01493 1.21763 6.06282 1.10723C7.08087 0.999974 8.35486 0.999986 9.94716 1H11.5Z',
  d10: 'M22 11V18H2V3H12',
  d11: 'M10.5 15H13.5',
  d12: 'M12 18.001V21.9996M12 21.9996H8M12 21.9996H16',
  d13: 'M18.543 4.04289L21.3359 1.25L22.7502 2.66421L19.9573 5.45711L22.7502 8.25L21.3359 9.66421L18.543 6.87132L15.7502 9.66421L14.3359 8.25L17.1288 5.45711L14.3359 2.66421L15.7502 1.25L18.543 4.04289Z',
  d14: 'M13.5 15.25H10.5V13.25H13.5V15.25Z',
  d15: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H21.7727C22.3125 18.75 22.75 18.3147 22.75 17.7778V12L20.7955 12V16.8056H3.20455V3.19444H12L12 1.25H2.22727Z',
};

export const IconComputerRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-stroke-rounded IconComputerRemoveStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-duotone-rounded IconComputerRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-twotone-rounded IconComputerRemoveTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-solid-rounded IconComputerRemoveSolidRounded"
    >
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-bulk-rounded IconComputerRemoveBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-stroke-sharp IconComputerRemoveStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconComputerRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-remove-solid-sharp IconComputerRemoveSolidSharp"
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerRemove: TheIconSelfPack = {
  name: 'ComputerRemove',
  StrokeRounded: IconComputerRemoveStrokeRounded,
  DuotoneRounded: IconComputerRemoveDuotoneRounded,
  TwotoneRounded: IconComputerRemoveTwotoneRounded,
  SolidRounded: IconComputerRemoveSolidRounded,
  BulkRounded: IconComputerRemoveBulkRounded,
  StrokeSharp: IconComputerRemoveStrokeSharp,
  SolidSharp: IconComputerRemoveSolidSharp,
};