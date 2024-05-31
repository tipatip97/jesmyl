import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2C7.41421 2 8.12132 2 8.56066 2.43934C9 2.87868 9 3.58579 9 5C9 6.41421 9 7.12132 8.56066 7.56066C8.12132 8 7.41421 8 6 8C4.58579 8 3.87868 8 3.43934 7.56066C3 7.12132 3 6.41421 3 5Z',
  d2: 'M3 19C3 17.5858 3 16.8787 3.43934 16.4393C3.87868 16 4.58579 16 6 16C7.41421 16 8.12132 16 8.56066 16.4393C9 16.8787 9 17.5858 9 19C9 20.4142 9 21.1213 8.56066 21.5607C8.12132 22 7.41421 22 6 22C4.58579 22 3.87868 22 3.43934 21.5607C3 21.1213 3 20.4142 3 19Z',
  d3: 'M15 7C15 5.58579 15 4.87868 15.4393 4.43934C15.8787 4 16.5858 4 18 4C19.4142 4 20.1213 4 20.5607 4.43934C21 4.87868 21 5.58579 21 7C21 8.41421 21 9.12132 20.5607 9.56066C20.1213 10 19.4142 10 18 10C16.5858 10 15.8787 10 15.4393 9.56066C15 9.12132 15 8.41421 15 7Z',
  d4: 'M6 16V8',
  d5: 'M18 10C18 11.6569 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16',
  d6: 'M5.25 16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16H5.25ZM6.75 8C6.75 7.58579 6.41421 7.25 6 7.25C5.58579 7.25 5.25 7.58579 5.25 8H6.75ZM18.75 10C18.75 9.58579 18.4142 9.25 18 9.25C17.5858 9.25 17.25 9.58579 17.25 10H18.75ZM6.75 16V8H5.25V16H6.75ZM9 13.75H15V12.25H9V13.75ZM15 13.75C17.0711 13.75 18.75 12.0711 18.75 10H17.25C17.25 11.2426 16.2426 12.25 15 12.25V13.75ZM6.75 16C6.75 14.7574 7.75736 13.75 9 13.75V12.25C6.92893 12.25 5.25 13.9289 5.25 16H6.75Z',
  d7: 'M6 7C6.55228 7 7 7.44772 7 8V12.5351C7.58835 12.1948 8.27143 12 9 12H15C16.1046 12 17 11.1046 17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10C19 12.2091 17.2091 14 15 14H9C7.89543 14 7 14.8954 7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V8C5 7.44772 5.44772 7 6 7Z',
  d8: 'M5.95063 1.25L6 1.25L6.04938 1.25H6.04943C6.71427 1.24996 7.28711 1.24993 7.74585 1.31161C8.23748 1.37771 8.70875 1.52677 9.09099 1.90901C9.47324 2.29126 9.6223 2.76252 9.6884 3.25416C9.75007 3.71291 9.75004 4.28577 9.75001 4.95064V5.04937C9.75004 5.71424 9.75007 6.2871 9.6884 6.74585C9.6223 7.23748 9.47324 7.70875 9.09099 8.09099C8.70875 8.47324 8.23748 8.6223 7.74585 8.6884C7.2871 8.75007 6.71424 8.75004 6.04937 8.75001H5.95064C5.28577 8.75004 4.71291 8.75007 4.25416 8.6884C3.76252 8.6223 3.29126 8.47324 2.90901 8.09099C2.52677 7.70875 2.37771 7.23748 2.31161 6.74585C2.24993 6.28711 2.24996 5.71427 2.25 5.04943V5.04938L2.25 5L2.25 4.95063V4.95058C2.24996 4.28574 2.24993 3.71289 2.31161 3.25416C2.37771 2.76252 2.52677 2.29126 2.90901 1.90901C3.29126 1.52677 3.76252 1.37771 4.25416 1.31161C4.71289 1.24993 5.28574 1.24996 5.95058 1.25H5.95063Z',
  d9: 'M5.95063 15.25L6 15.25L6.04938 15.25H6.04943C6.71427 15.25 7.28711 15.2499 7.74585 15.3116C8.23748 15.3777 8.70875 15.5268 9.09099 15.909C9.47324 16.2913 9.6223 16.7625 9.6884 17.2542C9.75007 17.7129 9.75004 18.2858 9.75001 18.9506V19.0494C9.75004 19.7142 9.75007 20.2871 9.6884 20.7458C9.6223 21.2375 9.47324 21.7087 9.09099 22.091C8.70875 22.4732 8.23748 22.6223 7.74585 22.6884C7.2871 22.7501 6.71424 22.75 6.04937 22.75H5.95064C5.28577 22.75 4.71291 22.7501 4.25416 22.6884C3.76252 22.6223 3.29126 22.4732 2.90901 22.091C2.52677 21.7087 2.37771 21.2375 2.31161 20.7458C2.24993 20.2871 2.24996 19.7143 2.25 19.0494V19.0494L2.25 19L2.25 18.9506V18.9506C2.24996 18.2857 2.24993 17.7129 2.31161 17.2542C2.37771 16.7625 2.52677 16.2913 2.90901 15.909C3.29126 15.5268 3.76252 15.3777 4.25416 15.3116C4.71289 15.2499 5.28574 15.25 5.95058 15.25H5.95063Z',
  d10: 'M17.9506 3.25L18 3.25L18.0494 3.25H18.0494C18.7143 3.24996 19.2871 3.24993 19.7458 3.31161C20.2375 3.37771 20.7087 3.52677 21.091 3.90901C21.4732 4.29126 21.6223 4.76252 21.6884 5.25416C21.7501 5.71291 21.75 6.28577 21.75 6.95064V7.04937C21.75 7.71424 21.7501 8.2871 21.6884 8.74585C21.6223 9.23748 21.4732 9.70875 21.091 10.091C20.7087 10.4732 20.2375 10.6223 19.7458 10.6884C19.2871 10.7501 18.7142 10.75 18.0494 10.75H17.9506C17.2858 10.75 16.7129 10.7501 16.2542 10.6884C15.7625 10.6223 15.2913 10.4732 14.909 10.091C14.5268 9.70875 14.3777 9.23748 14.3116 8.74585C14.2499 8.28711 14.25 7.71427 14.25 7.04943V7.04938L14.25 7L14.25 6.95063V6.95058C14.25 6.28574 14.2499 5.71289 14.3116 5.25416C14.3777 4.76252 14.5268 4.29126 14.909 3.90901C15.2913 3.52677 15.7625 3.37771 16.2542 3.31161C16.7129 3.24993 17.2857 3.24996 17.9506 3.25H17.9506Z',
  d11: 'M5 8.74219C5.29049 8.75059 5.60837 8.75057 5.95064 8.75055H6.04937C6.39164 8.75057 6.70952 8.75059 7 8.74219V12.5357C7.58835 12.1953 8.27143 12.0005 9 12.0005H15C15.8444 12.0005 16.5665 11.4773 16.8599 10.7374C17.1873 10.7506 17.5525 10.7506 17.9506 10.7506H18.0494C18.3647 10.7506 18.6594 10.7506 18.931 10.744C18.5826 12.5979 16.9551 14.0005 15 14.0005H9C8.15563 14.0005 7.43347 14.5238 7.1401 15.2637C6.81268 15.2505 6.44752 15.2505 6.04939 15.2505H5.95063C5.60838 15.2505 5.29049 15.2505 5 15.2589V8.74219Z',
  d12: 'M9 8V2H3V8H9Z',
  d13: 'M9 22V16H3V22H9Z',
  d14: 'M21 10V4H15V10H21Z',
  d15: 'M18 10V13H9C7.34315 13 6 14.3431 6 16',
  d16: 'M2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H9C9.41421 1.25 9.75 1.58579 9.75 2V8C9.75 8.41421 9.41421 8.75 9 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8V2Z',
  d17: 'M2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16V22C9.75 22.4142 9.41421 22.75 9 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V16Z',
  d18: 'M14.25 4C14.25 3.58579 14.5858 3.25 15 3.25H21C21.4142 3.25 21.75 3.58579 21.75 4V10C21.75 10.4142 21.4142 10.75 21 10.75H15C14.5858 10.75 14.25 10.4142 14.25 10V4Z',
  d19: 'M5 16V8H7V12.5351C7.58835 12.1948 8.27143 12 9 12H17V10H19V13C19 13.5523 18.5523 14 18 14H9C7.89543 14 7 14.8954 7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16Z',
} as const;

export const IconWorkflowSquare07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-stroke-rounded IconWorkflowSquare07StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-duotone-rounded IconWorkflowSquare07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-twotone-rounded IconWorkflowSquare07TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-solid-rounded IconWorkflowSquare07SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-bulk-rounded IconWorkflowSquare07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-stroke-sharp IconWorkflowSquare07StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-07-solid-sharp IconWorkflowSquare07SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowSquare07: TheIconSelfPack = {
  name: 'WorkflowSquare07',
  StrokeRounded: IconWorkflowSquare07StrokeRounded,
  DuotoneRounded: IconWorkflowSquare07DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare07TwotoneRounded,
  SolidRounded: IconWorkflowSquare07SolidRounded,
  BulkRounded: IconWorkflowSquare07BulkRounded,
  StrokeSharp: IconWorkflowSquare07StrokeSharp,
  SolidSharp: IconWorkflowSquare07SolidSharp,
};