import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z',
  d2: 'M14.5 3L14.5 21',
  d3: 'M18 7H19M18 10H19',
  d4: 'M14 3H10C6.72077 3 5.08116 3 3.91891 3.91554C3.48891 4.25427 3.1149 4.67502 2.81382 5.15877C2 6.4663 2 8.31087 2 12C2 15.6891 2 17.5337 2.81382 18.8412C3.1149 19.325 3.48891 19.7457 3.91891 20.0845C5.08116 21 6.72077 21 10 21H14L14.5 20.9999V3.00013L14 3Z',
  d5: 'M9.95154 2.25H12.75C13.2214 2.25 13.4571 2.25 13.6036 2.39645C13.75 2.54289 13.75 2.7786 13.75 3.25L13.75 20.75C13.75 21.2214 13.75 21.4571 13.6036 21.6036C13.4571 21.75 13.2214 21.75 12.75 21.75H9.95145H9.95143H9.95141H9.95139H9.95137C8.35293 21.75 7.08651 21.75 6.07727 21.6303C5.03896 21.5072 4.18587 21.2495 3.4548 20.6736C2.95374 20.2789 2.5222 19.792 2.17708 19.2375C1.68205 18.4422 1.46162 17.5216 1.355 16.3837C1.24999 15.2629 1.24999 13.8506 1.25 12.0395V12.0395V11.9605V11.9605C1.24999 10.1494 1.24999 8.73705 1.355 7.61632C1.46162 6.47837 1.68205 5.5578 2.17708 4.76246C2.5222 4.20797 2.95374 3.72109 3.4548 3.32638C4.18587 2.7505 5.03896 2.49279 6.07727 2.36966C7.08654 2.24998 8.35302 2.24999 9.95153 2.25H9.95154ZM16.2559 21.7341C16.8783 21.7188 17.431 21.6889 17.9227 21.6305C18.961 21.5074 19.8141 21.2497 20.5452 20.6738C21.0463 20.2791 21.4778 19.7922 21.8229 19.2378C22.3179 18.4424 22.5384 17.5218 22.645 16.3839C22.75 15.2631 22.75 13.8508 22.75 12.0396V11.9608C22.75 10.1496 22.75 8.73727 22.645 7.61653C22.5384 6.47858 22.3179 5.55801 21.8229 4.76267C21.4778 4.20818 21.0463 3.7213 20.5452 3.32659C19.8141 2.75071 18.961 2.493 17.9227 2.36987C17.431 2.31157 16.8783 2.28167 16.2559 2.26634C15.7864 2.25477 15.5517 2.24899 15.4008 2.39615C15.25 2.54331 15.25 2.78164 15.25 3.25831V20.7421C15.25 21.2188 15.25 21.4571 15.4008 21.6043C15.5517 21.7514 15.7864 21.7456 16.2559 21.7341ZM17.75 6.96094C17.75 6.54672 18.0858 6.21094 18.5 6.21094H19.5C19.9142 6.21094 20.25 6.54672 20.25 6.96094C20.25 7.37515 19.9142 7.71094 19.5 7.71094H18.5C18.0858 7.71094 17.75 7.37515 17.75 6.96094ZM17.75 9.96094C17.75 9.54672 18.0858 9.21094 18.5 9.21094H19.5C19.9142 9.21094 20.25 9.54672 20.25 9.96094C20.25 10.3752 19.9142 10.7109 19.5 10.7109H18.5C18.0858 10.7109 17.75 10.3752 17.75 9.96094Z',
  d6: 'M16.2559 21.7348C16.8783 21.7194 17.431 21.6895 17.9227 21.6312C18.961 21.5081 19.8141 21.2504 20.5452 20.6745C21.0463 20.2798 21.4778 19.7929 21.8229 19.2384C22.3179 18.4431 22.5384 17.5225 22.645 16.3846C22.75 15.2638 22.75 13.8515 22.75 12.0403V11.9615C22.75 10.1503 22.75 8.73795 22.645 7.61721C22.5384 6.47926 22.3179 5.55869 21.8229 4.76335C21.4778 4.20885 21.0463 3.72197 20.5452 3.32727C19.8141 2.75139 18.961 2.49367 17.9227 2.37055C17.431 2.31224 16.8783 2.28234 16.2559 2.26701C15.7864 2.25545 15.5517 2.24967 15.4008 2.39683C15.25 2.54398 15.25 2.78232 15.25 3.25899V20.7428C15.25 21.2195 15.25 21.4578 15.4008 21.6049C15.5517 21.7521 15.7864 21.7463 16.2559 21.7348ZM17.75 6.96094C17.75 6.54672 18.0858 6.21094 18.5 6.21094H19.5C19.9142 6.21094 20.25 6.54672 20.25 6.96094C20.25 7.37515 19.9142 7.71094 19.5 7.71094H18.5C18.0858 7.71094 17.75 7.37515 17.75 6.96094ZM17.75 9.96094C17.75 9.54672 18.0858 9.21094 18.5 9.21094H19.5C19.9142 9.21094 20.25 9.54672 20.25 9.96094C20.25 10.3752 19.9142 10.7109 19.5 10.7109H18.5C18.0858 10.7109 17.75 10.3752 17.75 9.96094Z',
  d7: 'M12.75 2.25H9.95154C8.35303 2.24999 7.08654 2.24998 6.07727 2.36966C5.03896 2.49279 4.18587 2.7505 3.4548 3.32638C2.95374 3.72109 2.5222 4.20797 2.17708 4.76246C1.68205 5.5578 1.46162 6.47837 1.355 7.61632C1.24999 8.73705 1.24999 10.1494 1.25 11.9605V12.0395C1.24999 13.8506 1.24999 15.2629 1.355 16.3837C1.46162 17.5216 1.68205 18.4422 2.17708 19.2375C2.5222 19.792 2.95374 20.2789 3.4548 20.6736C4.18587 21.2495 5.03896 21.5072 6.07727 21.6303C7.08652 21.75 8.35298 21.75 9.95145 21.75H12.75C13.2214 21.75 13.4571 21.75 13.6036 21.6036C13.75 21.4571 13.75 21.2214 13.75 20.75L13.75 3.25C13.75 2.7786 13.75 2.54289 13.6036 2.39645C13.4571 2.25 13.2214 2.25 12.75 2.25Z',
  d8: 'M22 3H2V21H22V3Z',
  d9: 'M17 7H19.5M17 10H19.5',
  d10: 'M13.75 2.25H2C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H13.75L13.75 2.25Z',
  d11: 'M22 21.75H15.25V2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V21C22.75 21.4142 22.4142 21.75 22 21.75ZM17.75 7.70544H20.25V6.20544H17.75V7.70544ZM17.75 10.7054H20.25V9.20544H17.75V10.7054Z',
};

export const IconSidebarRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-stroke-rounded IconSidebarRightStrokeRounded"
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

export const IconSidebarRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-duotone-rounded IconSidebarRightDuotoneRounded"
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

export const IconSidebarRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-twotone-rounded IconSidebarRightTwotoneRounded"
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

export const IconSidebarRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-solid-rounded IconSidebarRightSolidRounded"
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

export const IconSidebarRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-bulk-rounded IconSidebarRightBulkRounded"
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

export const IconSidebarRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-stroke-sharp IconSidebarRightStrokeSharp"
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

export const IconSidebarRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-right-solid-sharp IconSidebarRightSolidSharp"
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

export const iconPackOfSidebarRight: TheIconSelfPack = {
  name: 'SidebarRight',
  StrokeRounded: IconSidebarRightStrokeRounded,
  DuotoneRounded: IconSidebarRightDuotoneRounded,
  TwotoneRounded: IconSidebarRightTwotoneRounded,
  SolidRounded: IconSidebarRightSolidRounded,
  BulkRounded: IconSidebarRightBulkRounded,
  StrokeSharp: IconSidebarRightStrokeSharp,
  SolidSharp: IconSidebarRightSolidSharp,
};