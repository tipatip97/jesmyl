import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 14.5H13M9 9.5H17',
  d2: 'M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z',
  d3: 'M5 6L2.5 6M5 12L2.5 12M5 18H2.5',
  d4: 'M4.25 9.5C4.25 6.20017 4.25 4.55025 5.27513 3.52513C6.30025 2.5 7.95017 2.5 11.25 2.5H14.25C17.5498 2.5 19.1997 2.5 20.2249 3.52513C21.25 4.55025 21.25 6.20017 21.25 9.5V14.5C21.25 17.7998 21.25 19.4497 20.2249 20.4749C19.1997 21.5 17.5498 21.5 14.25 21.5H11.25C7.95017 21.5 6.30025 21.5 5.27513 20.4749C4.25 19.4497 4.25 17.7998 4.25 14.5V9.5Z',
  d5: 'M1.625 6C1.625 5.44772 2.07272 5 2.625 5L5.125 5C5.67729 5 6.125 5.44772 6.125 6C6.125 6.55229 5.67728 7 5.125 7L2.625 7C2.07272 7 1.625 6.55228 1.625 6ZM1.625 12C1.625 11.4477 2.07272 11 2.625 11L5.125 11C5.67729 11 6.125 11.4477 6.125 12C6.125 12.5523 5.67728 13 5.125 13H2.625C2.07272 13 1.625 12.5523 1.625 12ZM1.625 18C1.625 17.4477 2.07272 17 2.625 17H5.125C5.67728 17 6.125 17.4477 6.125 18C6.125 18.5523 5.67728 19 5.125 19H2.625C2.07272 19 1.625 18.5523 1.625 18Z',
  d6: 'M13.6814 1.25H13.6814H13.6814H12.0686H12.0686H12.0686C10.2308 1.24999 8.77519 1.24997 7.63598 1.40314C6.46356 1.56076 5.51461 1.89288 4.76624 2.64124C4.01788 3.38961 3.68576 4.33856 3.52814 5.51098C3.37497 6.65019 3.37499 8.10581 3.375 9.94356V9.94357V9.94358V14.0564V14.0564V14.0564C3.37499 15.8942 3.37497 17.3498 3.52814 18.489C3.68576 19.6614 4.01788 20.6104 4.76624 21.3588C5.51461 22.1071 6.46356 22.4392 7.63598 22.5969C8.77518 22.75 10.2308 22.75 12.0685 22.75H12.0686H13.6814H13.6815C15.5192 22.75 16.9748 22.75 18.114 22.5969C19.2864 22.4392 20.2354 22.1071 20.9838 21.3588C21.7321 20.6104 22.0642 19.6614 22.2219 18.489C22.375 17.3498 22.375 15.8942 22.375 14.0565V14.0564V9.94359V9.94354C22.375 8.10581 22.375 6.65018 22.2219 5.51098C22.0642 4.33856 21.7321 3.38961 20.9838 2.64124C20.2354 1.89288 19.2864 1.56076 18.114 1.40314C16.9748 1.24997 15.5192 1.24999 13.6814 1.25ZM9.125 8.5C8.57272 8.5 8.125 8.94772 8.125 9.5C8.125 10.0523 8.57272 10.5 9.125 10.5H17.125C17.6773 10.5 18.125 10.0523 18.125 9.5C18.125 8.94772 17.6773 8.5 17.125 8.5H9.125ZM9.125 13.5C8.57272 13.5 8.125 13.9477 8.125 14.5C8.125 15.0523 8.57272 15.5 9.125 15.5H13.125C13.6773 15.5 14.125 15.0523 14.125 14.5C14.125 13.9477 13.6773 13.5 13.125 13.5H9.125Z',
  d7: 'M13.6814 1.25C15.5192 1.24998 16.9748 1.24997 18.114 1.40314C19.2864 1.56076 20.2354 1.89288 20.9838 2.64124C21.7321 3.38961 22.0642 4.33856 22.2219 5.51098C22.375 6.65018 22.375 8.1058 22.375 9.94354V9.94359V14.0564V14.0565C22.375 15.8942 22.375 17.3498 22.2219 18.489C22.0642 19.6614 21.7321 20.6104 20.9838 21.3588C20.2354 22.1071 19.2864 22.4392 18.114 22.5969C16.9748 22.75 15.5192 22.75 13.6815 22.75H13.6814H12.0686H12.0685C10.2308 22.75 8.77518 22.75 7.63598 22.5969C6.46356 22.4392 5.51461 22.1071 4.76624 21.3588C4.01788 20.6104 3.68576 19.6614 3.52814 18.489C3.37497 17.3498 3.37498 15.8942 3.375 14.0564V14.0564V9.94358V9.94357C3.37498 8.10582 3.37497 6.65019 3.52814 5.51098C3.68576 4.33856 4.01788 3.38961 4.76624 2.64124C5.51461 1.89288 6.46356 1.56076 7.63598 1.40314C8.77519 1.24997 10.2308 1.24998 12.0686 1.25H12.0686H13.6814H13.6814Z',
  d8: 'M3.61135 5H2.625C2.07272 5 1.625 5.44772 1.625 6C1.625 6.55228 2.07272 7 2.625 7H3.40942C3.43162 6.45243 3.46811 5.95741 3.52814 5.51098C3.5517 5.33568 3.57917 5.16538 3.61135 5ZM3.375 11H2.625C2.07272 11 1.625 11.4477 1.625 12C1.625 12.5523 2.07272 13 2.625 13H3.375V11ZM3.40942 17H2.625C2.07272 17 1.625 17.4477 1.625 18C1.625 18.5523 2.07272 19 2.625 19H3.61135C3.57917 18.8346 3.5517 18.6643 3.52814 18.489C3.46811 18.0426 3.43162 17.5476 3.40942 17Z',
  d9: 'M8.125 9.5C8.125 8.94772 8.57272 8.5 9.125 8.5H17.125C17.6773 8.5 18.125 8.94772 18.125 9.5C18.125 10.0523 17.6773 10.5 17.125 10.5H9.125C8.57272 10.5 8.125 10.0523 8.125 9.5ZM8.125 14.5C8.125 13.9477 8.57272 13.5 9.125 13.5H13.125C13.6773 13.5 14.125 13.9477 14.125 14.5C14.125 15.0523 13.6773 15.5 13.125 15.5H9.125C8.57272 15.5 8.125 15.0523 8.125 14.5Z',
  d10: 'M9.5 14.5H13.5M9.5 9.5H17.5',
  d11: 'M22 2H4V22L22 22V2Z',
  d12: 'M6 6L2 6M6 12L2 12M6 18H2',
  d13: 'M4 1.25C3.58579 1.25 3.25 1.58579 3.25 2V22C3.25 22.4142 3.58579 22.75 4 22.75L22 22.75C22.1989 22.75 22.3897 22.671 22.5303 22.5303C22.671 22.3897 22.75 22.1989 22.75 22V2C22.75 1.58579 22.4142 1.25 22 1.25H4ZM9.5 10.5H17.5V8.5H9.5V10.5ZM9.5 15.5H13.5V13.5H9.5V15.5Z',
  d14: 'M1.25 5L5.25 5V7L1.25 7V5ZM1.25 11L5.25 11V13H1.25V11ZM1.25 17H5.25V19H1.25V17Z',
} as const;

export const IconNotebookStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-stroke-rounded IconNotebookStrokeRounded"
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

export const IconNotebookDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-duotone-rounded IconNotebookDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconNotebookTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-twotone-rounded IconNotebookTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconNotebookSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-solid-rounded IconNotebookSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconNotebookBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-bulk-rounded IconNotebookBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebookStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-stroke-sharp IconNotebookStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconNotebookSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-solid-sharp IconNotebookSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfNotebook: TheIconSelfPack = {
  name: 'Notebook',
  StrokeRounded: IconNotebookStrokeRounded,
  DuotoneRounded: IconNotebookDuotoneRounded,
  TwotoneRounded: IconNotebookTwotoneRounded,
  SolidRounded: IconNotebookSolidRounded,
  BulkRounded: IconNotebookBulkRounded,
  StrokeSharp: IconNotebookStrokeSharp,
  SolidSharp: IconNotebookSolidSharp,
};