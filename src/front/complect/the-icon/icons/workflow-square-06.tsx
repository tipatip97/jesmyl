import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 5C9 3.58579 9 2.87868 9.43934 2.43934C9.87868 2 10.5858 2 12 2C13.4142 2 14.1213 2 14.5607 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 14.5607 7.56066C14.1213 8 13.4142 8 12 8C10.5858 8 9.87868 8 9.43934 7.56066C9 7.12132 9 6.41421 9 5Z',
  d2: 'M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z',
  d3: 'M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z',
  d4: 'M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12C16.5872 12 17.1308 12 17.5596 12.1522C18.1313 12.3552 18.5856 12.7446 18.8224 13.2346C19 13.6022 19 14.0681 19 15V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 12.1522C5.86867 12.3552 5.41443 12.7446 5.17761 13.2346C5 13.6022 5 14.0681 5 15V16',
  d5: 'M11.9506 1.25L12 1.25L12.0494 1.25H12.0494C12.7143 1.24996 13.2871 1.24993 13.7458 1.31161C14.2375 1.37771 14.7087 1.52677 15.091 1.90901C15.4732 2.29126 15.6223 2.76252 15.6884 3.25416C15.7501 3.71291 15.75 4.28577 15.75 4.95064V5.04937C15.75 5.71424 15.7501 6.2871 15.6884 6.74585C15.6223 7.23748 15.4732 7.70875 15.091 8.09099C14.7087 8.47324 14.2375 8.6223 13.7458 8.6884C13.2871 8.75007 12.7142 8.75004 12.0494 8.75001H11.9506C11.2858 8.75004 10.7129 8.75007 10.2542 8.6884C9.76252 8.6223 9.29126 8.47324 8.90901 8.09099C8.52677 7.70875 8.37771 7.23748 8.31161 6.74585C8.24993 6.28711 8.24996 5.71427 8.25 5.04943V5.04938L8.25 5L8.25 4.95063V4.95058C8.24996 4.28574 8.24993 3.71289 8.31161 3.25416C8.37771 2.76252 8.52677 2.29126 8.90901 1.90901C9.29126 1.52677 9.76252 1.37771 10.2542 1.31161C10.7129 1.24993 11.2857 1.24996 11.9506 1.25H11.9506Z',
  d6: 'M4.95063 15.25L5 15.25L5.04938 15.25H5.04943C5.71427 15.25 6.28711 15.2499 6.74585 15.3116C7.23748 15.3777 7.70875 15.5268 8.09099 15.909C8.47324 16.2913 8.6223 16.7625 8.6884 17.2542C8.75007 17.7129 8.75004 18.2858 8.75001 18.9506V19.0494C8.75004 19.7142 8.75007 20.2871 8.6884 20.7458C8.6223 21.2375 8.47324 21.7087 8.09099 22.091C7.70875 22.4732 7.23748 22.6223 6.74585 22.6884C6.2871 22.7501 5.71424 22.75 5.04937 22.75H4.95064C4.28577 22.75 3.71291 22.7501 3.25416 22.6884C2.76252 22.6223 2.29126 22.4732 1.90901 22.091C1.52677 21.7087 1.37771 21.2375 1.31161 20.7458C1.24993 20.2871 1.24996 19.7143 1.25 19.0494V19.0494L1.25 19L1.25 18.9506V18.9506C1.24996 18.2857 1.24993 17.7129 1.31161 17.2542C1.37771 16.7625 1.52677 16.2913 1.90901 15.909C2.29126 15.5268 2.76252 15.3777 3.25416 15.3116C3.71289 15.2499 4.28574 15.25 4.95058 15.25H4.95063Z',
  d7: 'M18.9506 15.25L19 15.25L19.0494 15.25H19.0494C19.7143 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V19.0494C22.75 19.7142 22.7501 20.2871 22.6884 20.7458C22.6223 21.2375 22.4732 21.7087 22.091 22.091C21.7087 22.4732 21.2375 22.6223 20.7458 22.6884C20.2871 22.7501 19.7142 22.75 19.0494 22.75H18.9506C18.2858 22.75 17.7129 22.7501 17.2542 22.6884C16.7625 22.6223 16.2913 22.4732 15.909 22.091C15.5268 21.7087 15.3777 21.2375 15.3116 20.7458C15.2499 20.2871 15.25 19.7143 15.25 19.0494V19.0494L15.25 19L15.25 18.9506V18.9506C15.25 18.2857 15.2499 17.7129 15.3116 17.2542C15.3777 16.7625 15.5268 16.2913 15.909 15.909C16.2913 15.5268 16.7625 15.3777 17.2542 15.3116C17.7129 15.2499 18.2857 15.25 18.9506 15.25H18.9506Z',
  d8: 'M12 7C12.5523 7 13 7.44772 13 8L13 9.03602V9.03973C13.0001 9.49866 13.0012 9.79129 13.0191 10.015C13.0364 10.2324 13.0648 10.303 13.078 10.3303C13.1867 10.5552 13.4202 10.7794 13.775 10.9054C13.8621 10.9363 13.9987 10.9661 14.2817 10.9827C14.5711 10.9996 14.9447 11 15.5 11L15.529 11H15.529C16.048 11 16.4803 11 16.8351 11.0207C17.2029 11.0422 17.5525 11.0885 17.8942 11.2099C18.6828 11.4899 19.3579 12.0444 19.7228 12.7995C19.8872 13.1398 19.9476 13.486 19.9746 13.8263C20 14.1453 20 14.5289 20 14.964L20 16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16V15C18 14.5181 17.9993 14.2151 17.981 13.985C17.9636 13.7676 17.9352 13.697 17.922 13.6697C17.8133 13.4448 17.5798 13.2206 17.225 13.0946C17.1379 13.0637 17.0013 13.0339 16.7183 13.0173C16.4289 13.0004 16.0553 13 15.5 13H15.471H15.471C14.952 13 14.5197 13 14.1649 12.9793C13.7971 12.9578 13.4475 12.9115 13.1058 12.7901C12.6977 12.6452 12.32 12.4268 12 12.1451C11.68 12.4268 11.3023 12.6452 10.8942 12.7901C10.5525 12.9115 10.2029 12.9578 9.83508 12.9793C9.4803 13 9.04796 13 8.52902 13H8.529H8.5C7.94466 13 7.57111 13.0004 7.28169 13.0173C6.99873 13.0339 6.86207 13.0637 6.77499 13.0946C6.42018 13.2206 6.18672 13.4448 6.07799 13.6697C6.06483 13.697 6.03636 13.7676 6.01905 13.985C6.00074 14.2151 6 14.5181 6 15V16C6 16.5523 5.55229 17 5 17C4.44772 17 4 16.5523 4 16L4 14.964V14.9639C3.99998 14.5288 3.99997 14.1453 4.02536 13.8263C4.05245 13.486 4.11279 13.1398 4.27724 12.7995C4.64215 12.0444 5.31717 11.4899 6.10583 11.2099C6.44755 11.0885 6.79708 11.0422 7.16492 11.0207C7.5197 11 7.95204 11 8.47097 11H8.47102L8.5 11C9.05534 11 9.42889 10.9996 9.71832 10.9827C10.0013 10.9661 10.1379 10.9363 10.225 10.9054C10.5798 10.7794 10.8133 10.5552 10.922 10.3303C10.9352 10.303 10.9636 10.2324 10.981 10.015C10.999 9.78845 11 9.4912 11 9.02214L11 9V8C11 7.44772 11.4477 7 12 7Z',
  d9: 'M11 8.74219C11.2905 8.75059 11.6084 8.75057 11.9506 8.75055H12.0494C12.3916 8.75057 12.7095 8.75059 13 8.74219L13 9.04028C13.0001 9.4992 13.0012 9.79184 13.0191 10.0155C13.0364 10.233 13.0648 10.3036 13.078 10.3308C13.1867 10.5558 13.4202 10.78 13.775 10.9059C13.8621 10.9369 13.9987 10.9667 14.2817 10.9832C14.5711 11.0001 14.9447 11.0005 15.5 11.0005L15.529 11.0005C16.0479 11.0005 16.4803 11.0005 16.8351 11.0213C17.2029 11.0428 17.5525 11.0891 17.8942 11.2104C18.6828 11.4904 19.3579 12.0449 19.7228 12.8001C19.8872 13.1404 19.9476 13.4865 19.9746 13.8269C20 14.1459 20 14.5294 20 14.9645V15.2589C19.7095 15.2505 19.3916 15.2505 19.0494 15.2505H18.9506C18.6084 15.2505 18.2905 15.2505 18 15.2589V15.0005C18 14.5187 17.9993 14.2156 17.981 13.9856C17.9636 13.7681 17.9352 13.6975 17.922 13.6703C17.8133 13.4453 17.5798 13.2211 17.225 13.0952C17.1379 13.0642 17.0013 13.0344 16.7183 13.0179C16.4289 13.0009 16.0553 13.0005 15.5 13.0005H15.471C14.9521 13.0006 14.5197 13.0006 14.1649 12.9798C13.7971 12.9583 13.4475 12.912 13.1058 12.7907C12.6977 12.6458 12.32 12.4274 12 12.1457C11.68 12.4274 11.3023 12.6458 10.8942 12.7907C10.5525 12.912 10.2029 12.9583 9.83508 12.9798C9.4803 13.0006 9.04796 13.0006 8.52902 13.0005H8.5C7.94467 13.0005 7.57111 13.0009 7.28169 13.0179C6.99874 13.0344 6.86207 13.0642 6.77499 13.0952C6.42018 13.2211 6.18672 13.4453 6.078 13.6703C6.06483 13.6975 6.03636 13.7681 6.01905 13.9856C6.00074 14.2156 6 14.5187 6 15.0005V15.2589C5.70952 15.2505 5.39164 15.2505 5.04939 15.2505H4.95063C4.60838 15.2505 4.29049 15.2505 4 15.2589L4 14.9645C3.99998 14.5294 3.99997 14.1459 4.02536 13.8269C4.05245 13.4865 4.11279 13.1404 4.27724 12.8001C4.64215 12.0449 5.31717 11.4904 6.10583 11.2104C6.44755 11.0891 6.79708 11.0428 7.16492 11.0213C7.51971 11.0005 7.95204 11.0005 8.47097 11.0005L8.5 11.0005C9.05534 11.0005 9.4289 11.0001 9.71832 10.9832C10.0013 10.9667 10.1379 10.9369 10.225 10.9059C10.5798 10.78 10.8133 10.5558 10.922 10.3308C10.9352 10.3036 10.9636 10.233 10.981 10.0155C10.999 9.78899 11 9.49174 11 9.02268L11 8.74219Z',
  d10: 'M15 8V2H9V8H15Z',
  d11: 'M8 22V16H2V22H8Z',
  d12: 'M22 22V16H16V22H22Z',
  d13: 'M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12H19V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12H5V16',
  d14: 'M8.25 2C8.25 1.58579 8.58579 1.25 9 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8V2Z',
  d15: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H8C8.41421 15.25 8.75 15.5858 8.75 16V22C8.75 22.4142 8.41421 22.75 8 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16Z',
  d16: 'M15.25 16C15.25 15.5858 15.5858 15.25 16 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H16C15.5858 22.75 15.25 22.4142 15.25 22V16Z',
  d17: 'M11 9V8H13L13 9.03606C13 9.03728 13 9.03849 13 9.03971C13.0001 9.49865 13.0012 9.79129 13.019 10.015C13.0364 10.2324 13.0648 10.303 13.078 10.3303C13.1867 10.5552 13.4202 10.7794 13.775 10.9054C13.8621 10.9363 13.9987 10.9661 14.2817 10.9827C14.5711 10.9996 14.9447 11 15.5 11H19C19.5523 11 20 11.4477 20 12V16H18V13H15.471C14.9521 13 14.5197 13 14.1649 12.9793C13.7971 12.9578 13.4475 12.9115 13.1058 12.7901C12.6977 12.6452 12.32 12.4268 12 12.1451C11.68 12.4268 11.3023 12.6452 10.8942 12.7901C10.5525 12.9115 10.2029 12.9578 9.83508 12.9793C9.48029 13 9.04794 13 8.529 13H6V16H4V12C4 11.4477 4.44772 11 5 11H8.5C9.05534 11 9.42889 10.9996 9.71831 10.9827C10.0013 10.9661 10.1379 10.9363 10.225 10.9054C10.5798 10.7794 10.8133 10.5552 10.922 10.3303C10.9352 10.303 10.9636 10.2324 10.981 10.015C10.999 9.78845 11 9.49121 11 9.02216C11 9.01482 11 9.00743 11 9Z',
};

export const IconWorkflowSquare06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-stroke-rounded IconWorkflowSquare06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-duotone-rounded IconWorkflowSquare06DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-twotone-rounded IconWorkflowSquare06TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-solid-rounded IconWorkflowSquare06SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWorkflowSquare06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-bulk-rounded IconWorkflowSquare06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-stroke-sharp IconWorkflowSquare06StrokeSharp"
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowSquare06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-square-06-solid-sharp IconWorkflowSquare06SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfWorkflowSquare06: TheIconSelfPack = {
  name: 'WorkflowSquare06',
  StrokeRounded: IconWorkflowSquare06StrokeRounded,
  DuotoneRounded: IconWorkflowSquare06DuotoneRounded,
  TwotoneRounded: IconWorkflowSquare06TwotoneRounded,
  SolidRounded: IconWorkflowSquare06SolidRounded,
  BulkRounded: IconWorkflowSquare06BulkRounded,
  StrokeSharp: IconWorkflowSquare06StrokeSharp,
  SolidSharp: IconWorkflowSquare06SolidSharp,
};