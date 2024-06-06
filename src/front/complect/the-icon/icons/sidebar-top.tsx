import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z',
  d2: 'M2 9.5L22 9.5',
  d3: 'M6 6H7M10 6H11',
  d4: 'M10 21H14C17.2792 21 18.9188 21 20.0811 20.0845C20.5111 19.7457 20.8851 19.325 21.1862 18.8412C22 17.5337 22 15.6891 22 12C22 11.0523 22 10.2264 21.9862 9.5H2.01379C2 10.2264 2 11.0523 2 12C2 15.6891 2 17.5337 2.81382 18.8412C3.1149 19.325 3.48891 19.7457 3.91891 20.0845C5.08116 21 6.72077 21 10 21Z',
  d5: 'M9.95236 2.25H14.0493H14.0493C15.6478 2.24999 16.9143 2.24998 17.9236 2.36966C18.9619 2.49279 19.815 2.7505 20.546 3.32638C21.0471 3.72109 21.4786 4.20797 21.8237 4.76246C22.3188 5.5578 22.5392 6.47837 22.6458 7.61632C22.6488 7.64839 22.6518 7.6807 22.6546 7.71325C22.696 8.18824 22.7166 8.42573 22.568 8.58787C22.4194 8.75 22.1722 8.75 21.6778 8.75H2.32385C1.82945 8.75 1.58226 8.75 1.43363 8.58787C1.285 8.42573 1.30569 8.18824 1.34706 7.71325C1.3499 7.6807 1.35282 7.64839 1.35582 7.61632C1.46244 6.47837 1.68288 5.5578 2.1779 4.76246C2.52302 4.20797 2.95457 3.72109 3.45563 3.32638C4.18669 2.7505 5.03979 2.49279 6.07809 2.36966C7.08736 2.24998 8.35385 2.24999 9.95235 2.25H9.95236ZM21.7537 10.25H2.24634C1.77804 10.25 1.54389 10.25 1.39747 10.3962C1.25106 10.5425 1.2508 10.7757 1.25026 11.2422C1.25 11.474 1.25 11.7128 1.25 11.959V12.0395C1.24999 13.8506 1.24999 15.2629 1.355 16.3837C1.46162 17.5216 1.68205 18.4422 2.17708 19.2375C2.5222 19.792 2.95374 20.2789 3.4548 20.6736C4.18587 21.2495 5.03896 21.5072 6.07727 21.6303C7.08651 21.75 8.35294 21.75 9.95137 21.75H9.95139H9.95141H9.95143H9.95145H14.0485H14.0485H14.0485H14.0485H14.0485C15.647 21.75 16.9135 21.75 17.9227 21.6303C18.961 21.5072 19.8141 21.2495 20.5452 20.6736C21.0463 20.2789 21.4778 19.792 21.8229 19.2375C22.3179 18.4422 22.5384 17.5216 22.645 16.3837C22.75 15.2629 22.75 13.8506 22.75 12.0394V11.9589C22.75 11.7127 22.75 11.4739 22.7497 11.2422C22.7492 10.7757 22.7489 10.5425 22.6025 10.3962C22.4561 10.25 22.222 10.25 21.7537 10.25ZM6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5C5.25 5.91421 5.58579 6.25 6 6.25H7C7.41421 6.25 7.75 5.91421 7.75 5.5C7.75 5.08579 7.41421 4.75 7 4.75H6ZM10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5C9.25 5.91421 9.58579 6.25 10 6.25H11C11.4142 6.25 11.75 5.91421 11.75 5.5C11.75 5.08579 11.4142 4.75 11 4.75H10Z',
  d6: 'M9.95192 2.25H14.0488C15.6473 2.24999 16.9138 2.24998 17.9231 2.36966C18.9614 2.49279 19.8145 2.7505 20.5456 3.32638C21.0466 3.72109 21.4782 4.20797 21.8233 4.76246C22.3183 5.5578 22.5388 6.47837 22.6454 7.61632C22.6484 7.64839 22.6513 7.6807 22.6541 7.71325C22.6955 8.18824 22.7162 8.42573 22.5676 8.58787C22.419 8.75 22.1718 8.75 21.6774 8.75H2.32341C1.82901 8.75 1.58181 8.75 1.43319 8.58787C1.28456 8.42573 1.30525 8.18824 1.34662 7.71325C1.34946 7.6807 1.35238 7.64839 1.35538 7.61632C1.462 6.47837 1.68244 5.5578 2.17746 4.76246C2.52258 4.20797 2.95413 3.72109 3.45519 3.32638C4.18625 2.7505 5.03935 2.49279 6.07765 2.36966C7.08692 2.24998 8.35342 2.24999 9.95192 2.25ZM6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5C5.25 5.91421 5.58579 6.25 6 6.25H7C7.41421 6.25 7.75 5.91421 7.75 5.5C7.75 5.08579 7.41421 4.75 7 4.75H6ZM10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5C9.25 5.91421 9.58579 6.25 10 6.25H11C11.4142 6.25 11.75 5.91421 11.75 5.5C11.75 5.08579 11.4142 4.75 11 4.75H10Z',
  d7: 'M2.24634 10.25H21.7537C22.222 10.25 22.4561 10.25 22.6025 10.3962C22.7489 10.5425 22.7492 10.7757 22.7497 11.2422C22.75 11.4739 22.75 11.7127 22.75 11.9589V12.0394C22.75 13.8506 22.75 15.2629 22.645 16.3837C22.5384 17.5216 22.3179 18.4422 21.8229 19.2375C21.4778 19.792 21.0463 20.2789 20.5452 20.6736C19.8141 21.2495 18.961 21.5072 17.9227 21.6303C16.9135 21.75 15.6469 21.75 14.0485 21.75H9.95145C8.35299 21.75 7.08652 21.75 6.07727 21.6303C5.03896 21.5072 4.18587 21.2495 3.4548 20.6736C2.95374 20.2789 2.5222 19.792 2.17708 19.2375C1.68205 18.4422 1.46162 17.5216 1.355 16.3837C1.24999 15.2629 1.24999 13.8506 1.25 12.0395V11.959C1.25 11.7128 1.25 11.474 1.25026 11.2422C1.2508 10.7757 1.25106 10.5425 1.39747 10.3962C1.54389 10.25 1.77804 10.25 2.24634 10.25Z',
  d8: 'M22 3H2V21H22V3Z',
  d9: 'M5 6H7M9 6H11',
  d10: 'M22.75 10.25L1.25 10.25V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V10.25Z',
  d11: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V8.75L1.25 8.75V3ZM5 6.25H7V4.75H5V6.25ZM9 6.25H11V4.75H9V6.25Z',
};

export const IconSidebarTopStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-stroke-rounded IconSidebarTopStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarTopDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-duotone-rounded IconSidebarTopDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarTopTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-twotone-rounded IconSidebarTopTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSidebarTopSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-solid-rounded IconSidebarTopSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarTopBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-bulk-rounded IconSidebarTopBulkRounded"
    >
      <path 
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

export const IconSidebarTopStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-stroke-sharp IconSidebarTopStrokeSharp"
    >
      <path 
        d={d.d8} 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSidebarTopSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-top-solid-sharp IconSidebarTopSolidSharp"
    >
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

export const iconPackOfSidebarTop: TheIconSelfPack = {
  name: 'SidebarTop',
  StrokeRounded: IconSidebarTopStrokeRounded,
  DuotoneRounded: IconSidebarTopDuotoneRounded,
  TwotoneRounded: IconSidebarTopTwotoneRounded,
  SolidRounded: IconSidebarTopSolidRounded,
  BulkRounded: IconSidebarTopBulkRounded,
  StrokeSharp: IconSidebarTopStrokeSharp,
  SolidSharp: IconSidebarTopSolidSharp,
};