import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z',
  d2: 'M9.5 3L9.5 21',
  d3: 'M5 7H6M5 10H6',
  d4: 'M14 3H10L9.5 3.00013V20.9999L10 21H14C17.2792 21 18.9188 21 20.0811 20.0845C20.5111 19.7457 20.8851 19.325 21.1862 18.8412C22 17.5337 22 15.6891 22 12C22 8.31087 22 6.4663 21.1862 5.15877C20.8851 4.67502 20.5111 4.25427 20.0811 3.91554C18.9188 3 17.2792 3 14 3Z',
  d5: 'M14.0485 2.25H11.25C10.7786 2.25 10.5429 2.25 10.3964 2.39645C10.25 2.54289 10.25 2.7786 10.25 3.25L10.25 20.75C10.25 21.2214 10.25 21.4571 10.3964 21.6036C10.5429 21.75 10.7786 21.75 11.25 21.75H14.0486H14.0486H14.0486H14.0486H14.0486C15.6471 21.75 16.9135 21.75 17.9227 21.6303C18.961 21.5072 19.8141 21.2495 20.5452 20.6736C21.0463 20.2789 21.4778 19.792 21.8229 19.2375C22.3179 18.4422 22.5384 17.5216 22.645 16.3837C22.75 15.2629 22.75 13.8506 22.75 12.0395V11.9605C22.75 10.1494 22.75 8.73705 22.645 7.61632C22.5384 6.47837 22.3179 5.5578 21.8229 4.76246C21.4778 4.20797 21.0463 3.72109 20.5452 3.32638C19.8141 2.7505 18.961 2.49279 17.9227 2.36966C16.9135 2.24998 15.647 2.24999 14.0485 2.25H14.0485ZM7.74415 21.7341C7.12171 21.7188 6.56897 21.6889 6.07727 21.6305C5.03896 21.5074 4.18587 21.2497 3.4548 20.6738C2.95374 20.2791 2.5222 19.7922 2.17708 19.2378C1.68205 18.4424 1.46162 17.5218 1.355 16.3839C1.24999 15.2631 1.24999 13.8508 1.25 12.0396V11.9608C1.24999 10.1496 1.24999 8.73727 1.355 7.61653C1.46162 6.47858 1.68205 5.55801 2.17708 4.76267C2.5222 4.20818 2.95374 3.7213 3.4548 3.32659C4.18587 2.75071 5.03896 2.493 6.07727 2.36987C6.56896 2.31157 7.12171 2.28167 7.74415 2.26634C8.21361 2.25477 8.44835 2.24899 8.59917 2.39615C8.75 2.54331 8.75 2.78164 8.75 3.25831V20.7421C8.75 21.2188 8.75 21.4571 8.59917 21.6043C8.44835 21.7514 8.21361 21.7456 7.74415 21.7341ZM6.25 6.96094C6.25 6.54672 5.91421 6.21094 5.5 6.21094H4.5C4.08579 6.21094 3.75 6.54672 3.75 6.96094C3.75 7.37515 4.08579 7.71094 4.5 7.71094H5.5C5.91421 7.71094 6.25 7.37515 6.25 6.96094ZM6.25 9.96094C6.25 9.54672 5.91421 9.21094 5.5 9.21094H4.5C4.08579 9.21094 3.75 9.54672 3.75 9.96094C3.75 10.3752 4.08579 10.7109 4.5 10.7109H5.5C5.91421 10.7109 6.25 10.3752 6.25 9.96094Z',
  d6: 'M7.74415 21.7348C7.12171 21.7194 6.56896 21.6895 6.07727 21.6312C5.03896 21.5081 4.18587 21.2504 3.4548 20.6745C2.95374 20.2798 2.5222 19.7929 2.17708 19.2384C1.68205 18.4431 1.46162 17.5225 1.355 16.3846C1.24999 15.2638 1.24999 13.8515 1.25 12.0403V11.9615C1.24999 10.1503 1.24999 8.73795 1.355 7.61721C1.46162 6.47926 1.68205 5.55869 2.17708 4.76335C2.5222 4.20885 2.95374 3.72197 3.4548 3.32727C4.18587 2.75139 5.03896 2.49367 6.07727 2.37055C6.56896 2.31224 7.12171 2.28234 7.74415 2.26701C8.21361 2.25545 8.44835 2.24967 8.59917 2.39683C8.75 2.54398 8.75 2.78232 8.75 3.25899V20.7428C8.75 21.2195 8.75 21.4578 8.59917 21.6049C8.44835 21.7521 8.21361 21.7463 7.74415 21.7348ZM6.25 6.96484C6.25 6.55063 5.91421 6.21484 5.5 6.21484H4.5C4.08579 6.21484 3.75 6.55063 3.75 6.96484C3.75 7.37906 4.08579 7.71484 4.5 7.71484H5.5C5.91421 7.71484 6.25 7.37906 6.25 6.96484ZM6.25 9.96484C6.25 9.55063 5.91421 9.21484 5.5 9.21484H4.5C4.08579 9.21484 3.75 9.55063 3.75 9.96484C3.75 10.3791 4.08579 10.7148 4.5 10.7148H5.5C5.91421 10.7148 6.25 10.3791 6.25 9.96484Z',
  d7: 'M11.25 2.25H14.0485C15.647 2.24999 16.9135 2.24998 17.9227 2.36966C18.961 2.49279 19.8141 2.7505 20.5452 3.32638C21.0463 3.72109 21.4778 4.20797 21.8229 4.76246C22.3179 5.5578 22.5384 6.47837 22.645 7.61632C22.75 8.73705 22.75 10.1494 22.75 11.9605V12.0395C22.75 13.8506 22.75 15.2629 22.645 16.3837C22.5384 17.5216 22.3179 18.4422 21.8229 19.2375C21.4778 19.792 21.0463 20.2789 20.5452 20.6736C19.8141 21.2495 18.961 21.5072 17.9227 21.6303C16.9135 21.75 15.647 21.75 14.0486 21.75H11.25C10.7786 21.75 10.5429 21.75 10.3964 21.6036C10.25 21.4571 10.25 21.2214 10.25 20.75L10.25 3.25C10.25 2.7786 10.25 2.54289 10.3964 2.39645C10.5429 2.25 10.7786 2.25 11.25 2.25Z',
  d8: 'M22 3H2V21H22V3Z',
  d9: 'M4.5 7H7M4.5 10H7',
  d10: 'M10.25 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V21C22.75 21.4142 22.4142 21.75 22 21.75H10.25L10.25 2.25Z',
  d11: 'M2.00195 21.75H8.75195L8.75195 2.25H2.00195C1.58774 2.25 1.25195 2.58579 1.25195 3V21C1.25195 21.4142 1.58774 21.75 2.00195 21.75ZM6.24805 7.70544H3.74805V6.20544H6.24805V7.70544ZM6.24805 10.7054H3.74805V9.20544H6.24805V10.7054Z',
} as const;

export const IconSidebarLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-stroke-rounded IconSidebarLeftStrokeRounded"
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

export const IconSidebarLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-duotone-rounded IconSidebarLeftDuotoneRounded"
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

export const IconSidebarLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-twotone-rounded IconSidebarLeftTwotoneRounded"
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

export const IconSidebarLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-solid-rounded IconSidebarLeftSolidRounded"
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

export const IconSidebarLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-bulk-rounded IconSidebarLeftBulkRounded"
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

export const IconSidebarLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-stroke-sharp IconSidebarLeftStrokeSharp"
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

export const IconSidebarLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sidebar-left-solid-sharp IconSidebarLeftSolidSharp"
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

export const iconPackOfSidebarLeft: TheIconSelfPack = {
  name: 'SidebarLeft',
  StrokeRounded: IconSidebarLeftStrokeRounded,
  DuotoneRounded: IconSidebarLeftDuotoneRounded,
  TwotoneRounded: IconSidebarLeftTwotoneRounded,
  SolidRounded: IconSidebarLeftSolidRounded,
  BulkRounded: IconSidebarLeftBulkRounded,
  StrokeSharp: IconSidebarLeftStrokeSharp,
  SolidSharp: IconSidebarLeftSolidSharp,
};