import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z',
  d2: 'M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12C16.5872 12 17.1308 12 17.5596 12.1522C18.1313 12.3552 18.5856 12.7446 18.8224 13.2346C19 13.6022 19 14.0681 19 15V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 12.1522C5.86867 12.3552 5.41443 12.7446 5.17761 13.2346C5 13.6022 5 14.0681 5 15V16',
  d3: 'M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z',
  d4: 'M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8L13 9.03602V9.03973C13.0001 9.49866 13.0012 9.79129 13.0191 10.015C13.0364 10.2324 13.0648 10.303 13.078 10.3303C13.1867 10.5552 13.4202 10.7794 13.775 10.9054C13.8621 10.9363 13.9987 10.9661 14.2817 10.9827C14.5711 10.9996 14.9447 11 15.5 11L15.529 11H15.529C16.048 11 16.4803 11 16.8351 11.0207C17.2029 11.0422 17.5525 11.0885 17.8942 11.2099C18.6828 11.4899 19.3579 12.0444 19.7228 12.7995C19.8872 13.1398 19.9476 13.486 19.9746 13.8263C20 14.1453 20 14.5289 20 14.964L20 16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16V15C18 14.5181 17.9993 14.2151 17.981 13.985C17.9636 13.7676 17.9352 13.697 17.922 13.6697C17.8133 13.4448 17.5798 13.2206 17.225 13.0946C17.1379 13.0637 17.0013 13.0339 16.7183 13.0173C16.4289 13.0004 16.0553 13 15.5 13H15.471H15.471C14.952 13 14.5197 13 14.1649 12.9793C13.7971 12.9578 13.4475 12.9115 13.1058 12.7901C12.6977 12.6452 12.32 12.4268 12 12.1451C11.68 12.4268 11.3023 12.6452 10.8942 12.7901C10.5525 12.9115 10.2029 12.9578 9.83508 12.9793C9.4803 13 9.04796 13 8.52902 13H8.529H8.5C7.94466 13 7.57111 13.0004 7.28169 13.0173C6.99873 13.0339 6.86207 13.0637 6.77499 13.0946C6.42018 13.2206 6.18672 13.4448 6.07799 13.6697C6.06483 13.697 6.03636 13.7676 6.01905 13.985C6.00074 14.2151 6 14.5181 6 15V16C6 16.5523 5.55229 17 5 17C4.44772 17 4 16.5523 4 16L4 14.964V14.9639C3.99998 14.5288 3.99997 14.1453 4.02536 13.8263C4.05245 13.486 4.11279 13.1398 4.27724 12.7995C4.64215 12.0444 5.31717 11.4899 6.10583 11.2099C6.44755 11.0885 6.79708 11.0422 7.16492 11.0207C7.5197 11 7.95204 11 8.47097 11H8.47102L8.5 11C9.05534 11 9.42889 10.9996 9.71832 10.9827C10.0013 10.9661 10.1379 10.9363 10.225 10.9054C10.5798 10.7794 10.8133 10.5552 10.922 10.3303C10.9352 10.303 10.9636 10.2324 10.981 10.015C10.999 9.78845 11 9.4912 11 9.02214L11 9V8C11 7.44772 11.4477 7 12 7Z',
  d6: 'M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5C15.75 7.07107 14.0711 8.75 12 8.75C9.92893 8.75 8.25 7.07107 8.25 5Z',
  d7: 'M1.25 19C1.25 16.9289 2.92893 15.25 5 15.25C7.07107 15.25 8.75 16.9289 8.75 19C8.75 21.0711 7.07107 22.75 5 22.75C2.92893 22.75 1.25 21.0711 1.25 19Z',
  d8: 'M15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z',
  d9: 'M11 8.61328C11.3184 8.70115 11.6537 8.74809 12 8.74809C12.3463 8.74809 12.6816 8.70115 13 8.61328L13 9.03782C13.0001 9.49675 13.0012 9.78938 13.0191 10.0131C13.0364 10.2305 13.0648 10.3011 13.078 10.3283C13.1867 10.5533 13.4202 10.7775 13.775 10.9035C13.8621 10.9344 13.9987 10.9642 14.2817 10.9808C14.5711 10.9977 14.9447 10.9981 15.5 10.9981L15.529 10.9981C16.0479 10.9981 16.4803 10.9981 16.8351 11.0188C17.2029 11.0403 17.5525 11.0866 17.8942 11.208C18.6828 11.488 19.3579 12.0425 19.7228 12.7976C19.8872 13.1379 19.9476 13.4841 19.9746 13.8244C20 14.1434 20 14.5269 20 14.9621V15.3829C19.6816 15.295 19.3463 15.2481 19 15.2481C18.6537 15.2481 18.3184 15.295 18 15.3829V14.9981C18 14.5162 17.9993 14.2132 17.981 13.9831C17.9636 13.7656 17.9352 13.6951 17.922 13.6678C17.8133 13.4428 17.5798 13.2187 17.225 13.0927C17.1379 13.0618 17.0013 13.032 16.7183 13.0154C16.4289 12.9985 16.0553 12.9981 15.5 12.9981H15.471C14.9521 12.9981 14.5197 12.9981 14.1649 12.9774C13.7971 12.9558 13.4475 12.9095 13.1058 12.7882C12.6977 12.6433 12.32 12.4249 12 12.1432C11.68 12.4249 11.3023 12.6433 10.8942 12.7882C10.5525 12.9095 10.2029 12.9558 9.83508 12.9774C9.4803 12.9981 9.04796 12.9981 8.52902 12.9981H8.5C7.94467 12.9981 7.57111 12.9985 7.28169 13.0154C6.99874 13.032 6.86207 13.0618 6.77499 13.0927C6.42018 13.2187 6.18672 13.4428 6.078 13.6678C6.06483 13.6951 6.03636 13.7656 6.01905 13.9831C6.00074 14.2132 6 14.5162 6 14.9981V15.3829C5.68164 15.295 5.3463 15.2481 5 15.2481C4.6537 15.2481 4.31836 15.295 4 15.3829L4 14.9621C3.99998 14.527 3.99997 14.1434 4.02536 13.8244C4.05245 13.4841 4.11279 13.1379 4.27724 12.7976C4.64215 12.0425 5.31717 11.488 6.10583 11.208C6.44755 11.0866 6.79708 11.0403 7.16492 11.0188C7.51971 10.9981 7.95204 10.9981 8.47097 10.9981L8.5 10.9981C9.05534 10.9981 9.4289 10.9977 9.71832 10.9808C10.0013 10.9642 10.1379 10.9344 10.225 10.9035C10.5798 10.7775 10.8133 10.5533 10.922 10.3283C10.9352 10.3011 10.9636 10.2305 10.981 10.0131C10.999 9.78654 11 9.48929 11 9.02023L11 8.61328Z',
  d10: 'M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12H19V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12H5V16',
  d11: 'M11 9V8H13L13 9.03606C13 9.03728 13 9.03849 13 9.03971C13.0001 9.49865 13.0012 9.79129 13.019 10.015C13.0364 10.2324 13.0648 10.303 13.078 10.3303C13.1867 10.5552 13.4202 10.7794 13.775 10.9054C13.8621 10.9363 13.9987 10.9661 14.2817 10.9827C14.5711 10.9996 14.9447 11 15.5 11H19C19.5523 11 20 11.4477 20 12V16H18V13H15.471C14.9521 13 14.5197 13 14.1649 12.9793C13.7971 12.9578 13.4475 12.9115 13.1058 12.7901C12.6977 12.6452 12.32 12.4268 12 12.1451C11.68 12.4268 11.3023 12.6452 10.8942 12.7901C10.5525 12.9115 10.2029 12.9578 9.83508 12.9793C9.48029 13 9.04794 13 8.529 13H6V16H4V12C4 11.4477 4.44772 11 5 11H8.5C9.05534 11 9.42889 10.9996 9.71831 10.9827C10.0013 10.9661 10.1379 10.9363 10.225 10.9054C10.5798 10.7794 10.8133 10.5552 10.922 10.3303C10.9352 10.303 10.9636 10.2324 10.981 10.015C10.999 9.78845 11 9.49121 11 9.02216C11 9.01482 11 9.00743 11 9Z',
};

export const IconWorkflowCircle03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-stroke-rounded IconWorkflowCircle03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-duotone-rounded IconWorkflowCircle03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-twotone-rounded IconWorkflowCircle03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWorkflowCircle03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-solid-rounded IconWorkflowCircle03SolidRounded"
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

export const IconWorkflowCircle03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-bulk-rounded IconWorkflowCircle03BulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
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

export const IconWorkflowCircle03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-stroke-sharp IconWorkflowCircle03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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

export const IconWorkflowCircle03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="workflow-circle-03-solid-sharp IconWorkflowCircle03SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const iconPackOfWorkflowCircle03: TheIconSelfPack = {
  name: 'WorkflowCircle03',
  StrokeRounded: IconWorkflowCircle03StrokeRounded,
  DuotoneRounded: IconWorkflowCircle03DuotoneRounded,
  TwotoneRounded: IconWorkflowCircle03TwotoneRounded,
  SolidRounded: IconWorkflowCircle03SolidRounded,
  BulkRounded: IconWorkflowCircle03BulkRounded,
  StrokeSharp: IconWorkflowCircle03StrokeSharp,
  SolidSharp: IconWorkflowCircle03SolidSharp,
};