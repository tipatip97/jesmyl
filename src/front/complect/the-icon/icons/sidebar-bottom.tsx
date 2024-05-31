import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z',
  d2: 'M2 14.5L22 14.5',
  d3: 'M6 18H7M10 18H11',
  d4: 'M14 3H10C6.72077 3 5.08116 3 3.91891 3.91554C3.48891 4.25427 3.1149 4.67502 2.81382 5.15877C2 6.4663 2 8.31087 2 12C2 12.9477 2 13.7736 2.01379 14.5H21.9862C22 13.7736 22 12.9477 22 12C22 8.31087 22 6.4663 21.1862 5.15877C20.8851 4.67502 20.5111 4.25427 20.0811 3.91554C18.9188 3 17.2792 3 14 3Z',
  d5: 'M21.7537 13.75H2.24634C1.77804 13.75 1.54389 13.75 1.39747 13.6038C1.25106 13.4575 1.2508 13.2243 1.25026 12.7578C1.25 12.526 1.25 12.2872 1.25 12.041V11.9605C1.24999 10.1494 1.24999 8.73705 1.355 7.61632C1.46162 6.47837 1.68205 5.5578 2.17708 4.76246C2.5222 4.20797 2.95374 3.72108 3.4548 3.32638C4.18587 2.7505 5.03896 2.49279 6.07727 2.36966C7.08651 2.24998 8.35296 2.24999 9.95141 2.25H9.95143H9.95145H14.0485H14.0485H14.0485C15.6469 2.24999 16.9135 2.24998 17.9227 2.36966C18.961 2.49279 19.8141 2.7505 20.5452 3.32638C21.0463 3.72108 21.4778 4.20797 21.8229 4.76246C22.3179 5.5578 22.5384 6.47837 22.645 7.61632C22.75 8.73706 22.75 10.1494 22.75 11.9606V12.0411C22.75 12.2873 22.75 12.5261 22.7497 12.7578C22.7492 13.2243 22.7489 13.4575 22.6025 13.6038C22.4561 13.75 22.222 13.75 21.7537 13.75ZM9.95236 21.75H14.0493H14.0493C15.6478 21.75 16.9143 21.75 17.9236 21.6303C18.9619 21.5072 19.815 21.2495 20.546 20.6736C21.0471 20.2789 21.4786 19.792 21.8237 19.2375C22.3188 18.4422 22.5392 17.5216 22.6458 16.3837C22.6488 16.3516 22.6518 16.3193 22.6546 16.2867C22.696 15.8118 22.7166 15.5743 22.568 15.4121C22.4194 15.25 22.1722 15.25 21.6778 15.25H2.32385C1.82945 15.25 1.58226 15.25 1.43363 15.4121C1.285 15.5743 1.30569 15.8118 1.34706 16.2867C1.3499 16.3193 1.35282 16.3516 1.35582 16.3837C1.46244 17.5216 1.68288 18.4422 2.1779 19.2375C2.52302 19.792 2.95457 20.2789 3.45563 20.6736C4.18669 21.2495 5.03979 21.5072 6.07809 21.6303C7.08736 21.75 8.35385 21.75 9.95235 21.75H9.95236ZM6 19.25C5.58579 19.25 5.25 18.9142 5.25 18.5C5.25 18.0858 5.58579 17.75 6 17.75H7C7.41421 17.75 7.75 18.0858 7.75 18.5C7.75 18.9142 7.41421 19.25 7 19.25H6ZM10 19.25C9.58579 19.25 9.25 18.9142 9.25 18.5C9.25 18.0858 9.58579 17.75 10 17.75H11C11.4142 17.75 11.75 18.0858 11.75 18.5C11.75 18.9142 11.4142 19.25 11 19.25H10Z',
  d6: 'M9.95192 21.75H14.0488C15.6473 21.75 16.9138 21.75 17.9231 21.6303C18.9614 21.5072 19.8145 21.2495 20.5456 20.6736C21.0466 20.2789 21.4782 19.792 21.8233 19.2375C22.3183 18.4422 22.5388 17.5216 22.6454 16.3837C22.6484 16.3516 22.6513 16.3193 22.6541 16.2867C22.6955 15.8118 22.7162 15.5743 22.5676 15.4121C22.419 15.25 22.1718 15.25 21.6774 15.25H2.32341C1.82901 15.25 1.58181 15.25 1.43319 15.4121C1.28456 15.5743 1.30525 15.8118 1.34662 16.2867C1.34946 16.3193 1.35238 16.3516 1.35538 16.3837C1.462 17.5216 1.68244 18.4422 2.17746 19.2375C2.52258 19.792 2.95413 20.2789 3.45519 20.6736C4.18625 21.2495 5.03935 21.5072 6.07765 21.6303C7.08692 21.75 8.35342 21.75 9.95192 21.75ZM6 19.25C5.58579 19.25 5.25 18.9142 5.25 18.5C5.25 18.0858 5.58579 17.75 6 17.75H7C7.41421 17.75 7.75 18.0858 7.75 18.5C7.75 18.9142 7.41421 19.25 7 19.25H6ZM10 19.25C9.58579 19.25 9.25 18.9142 9.25 18.5C9.25 18.0858 9.58579 17.75 10 17.75H11C11.4142 17.75 11.75 18.0858 11.75 18.5C11.75 18.9142 11.4142 19.25 11 19.25H10Z',
  d7: 'M2.24634 13.75H21.7537C22.222 13.75 22.4561 13.75 22.6025 13.6038C22.7489 13.4575 22.7492 13.2243 22.7497 12.7578C22.75 12.5261 22.75 12.2873 22.75 12.0411V11.9606C22.75 10.1494 22.75 8.73706 22.645 7.61632C22.5384 6.47837 22.3179 5.5578 21.8229 4.76246C21.4778 4.20797 21.0463 3.72108 20.5452 3.32638C19.8141 2.7505 18.961 2.49279 17.9227 2.36966C16.9135 2.24998 15.6469 2.24999 14.0485 2.25H9.95145C8.35299 2.24999 7.08652 2.24998 6.07727 2.36966C5.03896 2.49279 4.18587 2.7505 3.4548 3.32638C2.95374 3.72108 2.5222 4.20797 2.17708 4.76246C1.68205 5.5578 1.46162 6.47837 1.355 7.61632C1.24999 8.73705 1.24999 10.1494 1.25 11.9605V12.041C1.25 12.2872 1.25 12.526 1.25026 12.7578C1.2508 13.2243 1.25106 13.4575 1.39747 13.6038C1.54389 13.75 1.77804 13.75 2.24634 13.75Z',
  d8: 'M22 3H2V21H22V3Z',
  d9: 'M5 18H7M9 18H11',
  d10: 'M22.75 13.75L1.25 13.75V3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V13.75Z',
  d11: 'M1.25 21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V15.25H1.25V21ZM5 17.7499H7V19.2499H5V17.7499ZM9 17.7499H11V19.2499H9V17.7499Z',
} as const;

export const IconSidebarBottomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-stroke-rounded IconSidebarBottomStrokeRounded"
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

export const IconSidebarBottomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-duotone-rounded IconSidebarBottomDuotoneRounded"
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

export const IconSidebarBottomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-twotone-rounded IconSidebarBottomTwotoneRounded"
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

export const IconSidebarBottomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-solid-rounded IconSidebarBottomSolidRounded"
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

export const IconSidebarBottomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-bulk-rounded IconSidebarBottomBulkRounded"
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

export const IconSidebarBottomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-stroke-sharp IconSidebarBottomStrokeSharp"
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

export const IconSidebarBottomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-bottom-solid-sharp IconSidebarBottomSolidSharp"
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

export const iconPackOfSidebarBottom: TheIconSelfPack = {
  name: 'SidebarBottom',
  StrokeRounded: IconSidebarBottomStrokeRounded,
  DuotoneRounded: IconSidebarBottomDuotoneRounded,
  TwotoneRounded: IconSidebarBottomTwotoneRounded,
  SolidRounded: IconSidebarBottomSolidRounded,
  BulkRounded: IconSidebarBottomBulkRounded,
  StrokeSharp: IconSidebarBottomStrokeSharp,
  SolidSharp: IconSidebarBottomSolidSharp,
};