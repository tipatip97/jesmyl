import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 18C15 16.5858 15 15.8787 15.4393 15.4393C15.8787 15 16.5858 15 18 15C19.4142 15 20.1213 15 20.5607 15.4393C21 15.8787 21 16.5858 21 18C21 19.4142 21 20.1213 20.5607 20.5607C20.1213 21 19.4142 21 18 21C16.5858 21 15.8787 21 15.4393 20.5607C15 20.1213 15 19.4142 15 18Z',
  d2: 'M3 9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C7.41421 6 8.12132 6 8.56066 6.43934C9 6.87868 9 7.58579 9 9C9 10.4142 9 11.1213 8.56066 11.5607C8.12132 12 7.41421 12 6 12C4.58579 12 3.87868 12 3.43934 11.5607C3 11.1213 3 10.4142 3 9Z',
  d3: 'M9 9H12C14.8284 9 16.2426 9 17.1213 9.87868C18 10.7574 18 12.1716 18 15',
  d4: 'M6 12V22M6 6V2',
  d5: 'M15.1586 10.1009C14.4237 10.0021 13.4425 10 12 10H9C8.44772 10 8 9.55229 8 9C8 8.44772 8.44772 8 9 8H12C12.0236 8 12.0471 8 12.0706 8C13.4247 7.99997 14.5413 7.99994 15.4251 8.11875C16.3529 8.2435 17.1723 8.51547 17.8284 9.17158C18.4845 9.82768 18.7565 10.6471 18.8812 11.5749C19.0001 12.4587 19 13.5753 19 14.9294L19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15C17 13.5575 16.9979 12.5763 16.8991 11.8414C16.8042 11.1354 16.6368 10.8084 16.4142 10.5858C16.1916 10.3632 15.8646 10.1958 15.1586 10.1009Z',
  d6: 'M6 1C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6V2C5 1.44772 5.44772 1 6 1ZM6 11C6.55228 11 7 11.4477 7 12V22C7 22.5523 6.55228 23 6 23C5.44772 23 5 22.5523 5 22V12C5 11.4477 5.44772 11 6 11Z',
  d7: 'M17.9506 14.25L18 14.25L18.0494 14.25H18.0494C18.7143 14.25 19.2871 14.2499 19.7458 14.3116C20.2375 14.3777 20.7087 14.5268 21.091 14.909C21.4732 15.2913 21.6223 15.7625 21.6884 16.2542C21.7501 16.7129 21.75 17.2858 21.75 17.9506V18.0494C21.75 18.7142 21.7501 19.2871 21.6884 19.7458C21.6223 20.2375 21.4732 20.7087 21.091 21.091C20.7087 21.4732 20.2375 21.6223 19.7458 21.6884C19.2871 21.7501 18.7142 21.75 18.0494 21.75H17.9506C17.2858 21.75 16.7129 21.7501 16.2542 21.6884C15.7625 21.6223 15.2913 21.4732 14.909 21.091C14.5268 20.7087 14.3777 20.2375 14.3116 19.7458C14.2499 19.2871 14.25 18.7143 14.25 18.0494V18.0494L14.25 18L14.25 17.9506V17.9506C14.25 17.2857 14.2499 16.7129 14.3116 16.2542C14.3777 15.7625 14.5268 15.2913 14.909 14.909C15.2913 14.5268 15.7625 14.3777 16.2542 14.3116C16.7129 14.2499 17.2857 14.25 17.9506 14.25H17.9506Z',
  d8: 'M5.95063 5.25L6 5.25L6.04938 5.25H6.04943C6.71427 5.24996 7.28711 5.24993 7.74585 5.31161C8.23748 5.37771 8.70875 5.52677 9.09099 5.90901C9.47324 6.29126 9.6223 6.76252 9.6884 7.25416C9.75007 7.71291 9.75004 8.28577 9.75001 8.95064V9.04937C9.75004 9.71424 9.75007 10.2871 9.6884 10.7458C9.6223 11.2375 9.47324 11.7087 9.09099 12.091C8.70875 12.4732 8.23748 12.6223 7.74585 12.6884C7.2871 12.7501 6.71424 12.75 6.04937 12.75H5.95064C5.28577 12.75 4.71291 12.7501 4.25416 12.6884C3.76252 12.6223 3.29126 12.4732 2.90901 12.091C2.52677 11.7087 2.37771 11.2375 2.31161 10.7458C2.24993 10.2871 2.24996 9.71427 2.25 9.04943V9.04938L2.25 9L2.25 8.95063V8.95058C2.24996 8.28574 2.24993 7.71289 2.31161 7.25416C2.37771 6.76252 2.52677 6.29126 2.90901 5.90901C3.29126 5.52677 3.76252 5.37771 4.25416 5.31161C4.71289 5.24993 5.28574 5.24996 5.95058 5.25H5.95063Z',
  d9: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V5.25837C5.29049 5.24997 5.60838 5.24998 5.95063 5.25H6.04938C6.39163 5.24998 6.70951 5.24997 7 5.25837V2Z',
  d10: 'M9.74164 10C9.75004 9.70952 9.75003 9.39164 9.75001 9.04937V8.95064C9.75003 8.60837 9.75004 8.29049 9.74164 8L12.0706 8C13.4247 7.99996 14.5413 7.99993 15.4251 8.11875C16.3529 8.2435 17.1723 8.51546 17.8284 9.17157C18.4845 9.82768 18.7565 10.6471 18.8812 11.5749C18.9798 12.3082 18.9966 13.2018 18.9994 14.2584C18.7091 14.25 18.3914 14.25 18.0494 14.25H17.9506C17.6081 14.25 17.2899 14.25 16.9992 14.2584C16.996 13.2092 16.9799 12.4428 16.8991 11.8414C16.8042 11.1354 16.6368 10.8084 16.4142 10.5858C16.1916 10.3632 15.8646 10.1958 15.1586 10.1009C14.4237 10.0021 13.4425 10 12 10H9.74164Z',
  d11: 'M5 12.7416C5.29049 12.75 5.60837 12.75 5.95064 12.75H6.04937C6.39164 12.75 6.70952 12.75 7 12.7416V22C7 22.5523 6.55228 23 6 23C5.44772 23 5 22.5523 5 22V12.7416Z',
  d12: 'M21 21V15H15V21H21Z',
  d13: 'M9 12V6H3V12H9Z',
  d14: 'M9 9L18 9.00001V15',
  d15: 'M14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H21C21.4142 14.25 21.75 14.5858 21.75 15V21C21.75 21.4142 21.4142 21.75 21 21.75H15C14.5858 21.75 14.25 21.4142 14.25 21V15Z',
  d16: 'M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H9C9.41421 5.25 9.75 5.58579 9.75 6V12C9.75 12.4142 9.41421 12.75 9 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12V6Z',
  d17: 'M17 10L9 10V8L18 8.00001C18.5523 8.00001 19 8.44773 19 9.00001V15H17V10Z',
  d18: 'M7 2V6H5V2H7ZM5 22V12H7V22H5Z',
};

export const IconWorkflowSquare04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-stroke-rounded IconWorkflowSquare04StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-duotone-rounded IconWorkflowSquare04DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-twotone-rounded IconWorkflowSquare04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-solid-rounded IconWorkflowSquare04SolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-bulk-rounded IconWorkflowSquare04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-stroke-sharp IconWorkflowSquare04StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-04-solid-sharp IconWorkflowSquare04SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowSquare04: TheIconSelfPack = {
  name: 'WorkflowSquare04',
  StrokeRounded: IconWorkflowSquare04StrokeRounded,
  DuotoneRounded: IconWorkflowSquare04DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare04TwotoneRounded,
  SolidRounded: IconWorkflowSquare04SolidRounded,
  BulkRounded: IconWorkflowSquare04BulkRounded,
  StrokeSharp: IconWorkflowSquare04StrokeSharp,
  SolidSharp: IconWorkflowSquare04SolidSharp,
};