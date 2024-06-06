import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8.42857 10L13.5196 16.3964C13.716 16.6432 13.9002 16.8767 14.2159 16.9639C14.3466 17 14.4882 17 14.7714 17C15.0515 17 15.1915 17 15.2984 16.9455C15.5894 16.7973 15.5714 16.4841 15.5714 16.2V13.4286M8.42857 10V7M8.42857 10V17M8.42857 7H9.53035C10.0067 7 10.2448 7 10.4514 7.10018C10.6581 7.20035 10.8056 7.38733 11.1006 7.76128L15.5714 13.4286M8.42857 7H7M8.42857 17H7M8.42857 17H10M15.5714 7V13.4286M15.5714 7H14M15.5714 7H17',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM8.5 10V7H9.57971C10.0465 7 10.2799 7 10.4823 7.10018C10.6848 7.20035 10.8294 7.38733 11.1185 7.76128L15.4998 13.4286V16.2C15.4998 16.2156 15.4998 16.2312 15.4999 16.2469C15.5008 16.5178 15.5018 16.8054 15.2322 16.9455C15.1274 17 14.9902 17 14.7158 17C14.4382 17 14.2995 17 14.1714 16.9639C13.8641 16.8773 13.6839 16.6463 13.4929 16.4013L8.5 10Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM11.6316 7.22359C11.3983 6.92587 11.146 6.60386 10.7786 6.42573C10.4112 6.2476 10.0021 6.24896 9.62392 6.25021L7 6.25042C6.58579 6.25042 6.25 6.58621 6.25 7.00042C6.25 7.41463 6.58579 7.75042 7 7.75042H7.67857L7.67857 16.2504H7C6.58579 16.2504 6.25 16.5862 6.25 17.0004C6.25 17.4146 6.58579 17.7504 7 17.7504H10C10.4142 17.7504 10.75 17.4146 10.75 17.0004C10.75 16.5862 10.4142 16.2504 10 16.2504H9.17857V12.1471L12.9328 16.8639C12.9422 16.8757 12.9521 16.8882 12.9624 16.9014C13.1402 17.1268 13.4613 17.5339 14.0161 17.6872C14.2485 17.7514 14.4898 17.7509 14.7155 17.7505C14.7369 17.7505 14.7584 17.7505 14.7799 17.7505C15.0732 17.7506 15.3708 17.7508 15.6389 17.6142C16.022 17.419 16.2022 17.0943 16.2732 16.7998C16.3249 16.5849 16.3228 16.3538 16.3217 16.2377V16.2377L16.3214 7.75042H17C17.4142 7.75042 17.75 7.41463 17.75 7.00042C17.75 6.58621 17.4142 6.25042 17 6.25042H14C13.5858 6.25042 13.25 6.58621 13.25 7.00042C13.25 7.41463 13.5858 7.75042 14 7.75042H14.8214V11.2674L11.6316 7.22359Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M10.7786 6.42573C11.146 6.60386 11.3983 6.92586 11.6316 7.22359L14.8214 11.2674V7.75042H14C13.5858 7.75042 13.25 7.41463 13.25 7.00042C13.25 6.58621 13.5858 6.25042 14 6.25042H17C17.4142 6.25042 17.75 6.58621 17.75 7.00042C17.75 7.41463 17.4142 7.75042 17 7.75042H16.3214L16.3217 16.2377V16.2377C16.3228 16.3538 16.3249 16.5849 16.2732 16.7998C16.2022 17.0943 16.022 17.419 15.6389 17.6142C15.3511 17.7608 15.0294 17.7499 14.7155 17.7505C14.4898 17.7509 14.2485 17.7514 14.0161 17.6872C13.429 17.525 13.1035 17.0784 12.9328 16.8639L9.17857 12.1471V16.2504H10C10.4142 16.2504 10.75 16.5862 10.75 17.0004C10.75 17.4146 10.4142 17.7504 10 17.7504H7C6.58579 17.7504 6.25 17.4146 6.25 17.0004C6.25 16.5862 6.58579 16.2504 7 16.2504H7.67857V7.75042H7C6.58579 7.75042 6.25 7.41463 6.25 7.00042C6.25 6.58621 6.58579 6.25042 7 6.25042L9.62392 6.25021C10.0021 6.24896 10.4112 6.2476 10.7786 6.42573Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M15.5724 13.3807L10.5442 7.03027L8.47498 7.03047M15.5724 13.3807V16.987H13.5117L8.47498 10.0473M15.5724 13.3807V7.03047M8.47498 10.0473V7.03047M8.47498 10.0473V16.987M6.99316 7.03047H8.47498M8.47498 16.987H7.01985M8.47498 16.987H9.99686M15.5724 7.03047H16.9805M15.5724 7.03047H14.0181',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM11.0888 6.53548C10.9466 6.3552 10.7296 6.25 10.5 6.25L7 6.25V7.75H7.67857L7.67857 16.25H7V17.75H10V16.25H9.17857V12.3136L12.8926 17.44C13.0337 17.6347 13.2596 17.75 13.5 17.75H16.3214V7.75H17V6.25H14V7.75H14.8214V11.2669L11.0888 6.53548Z',
};

export const IconNotion01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-stroke-rounded IconNotion01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-duotone-rounded IconNotion01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-twotone-rounded IconNotion01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-solid-rounded IconNotion01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-bulk-rounded IconNotion01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-stroke-sharp IconNotion01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-01-solid-sharp IconNotion01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotion01: TheIconSelfPack = {
  name: 'Notion01',
  StrokeRounded: IconNotion01StrokeRounded,
  DuotoneRounded: IconNotion01DuotoneRounded,
  TwotoneRounded: IconNotion01TwotoneRounded,
  SolidRounded: IconNotion01SolidRounded,
  BulkRounded: IconNotion01BulkRounded,
  StrokeSharp: IconNotion01StrokeSharp,
  SolidSharp: IconNotion01SolidSharp,
};