import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 17.5L22 22',
  d2: 'M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z',
  d3: 'M6.5 14L8.34189 8.47434C8.43631 8.19107 8.7014 8 9 8C9.2986 8 9.56369 8.19107 9.65811 8.47434L11.5 14M14.5 8V14M7.5 12H10.5',
  d4: 'M1.25 11.0227C1.25 5.6254 5.6254 1.25 11.0227 1.25C16.4201 1.25 20.7955 5.6254 20.7955 11.0227C20.7955 13.3694 19.9683 15.5229 18.5897 17.2076L22.4638 21.0817C22.8454 21.4633 22.8454 22.0821 22.4638 22.4638C22.0821 22.8454 21.4633 22.8454 21.0817 22.4638L17.2076 18.5897C15.5229 19.9683 13.3694 20.7955 11.0227 20.7955C5.6254 20.7955 1.25 16.4201 1.25 11.0227ZM11.0227 3.20455C6.70486 3.20455 3.20455 6.70486 3.20455 11.0227C3.20455 15.3406 6.70486 18.8409 11.0227 18.8409C15.3406 18.8409 18.8409 15.3406 18.8409 11.0227C18.8409 6.70486 15.3406 3.20455 11.0227 3.20455Z',
  d5: 'M7.63058 8.23717C7.82709 7.64764 8.37879 7.25 9.0002 7.25C9.62162 7.25 10.1733 7.64764 10.3698 8.23717L9.65832 8.47434L10.3698 8.23717L12.2117 13.7628C12.3427 14.1558 12.1303 14.5805 11.7374 14.7115C11.3444 14.8425 10.9197 14.6301 10.7887 14.2372L10.293 12.75H7.70744L7.21172 14.2372C7.08073 14.6301 6.65599 14.8425 6.26303 14.7115C5.87008 14.5805 5.65771 14.1558 5.78869 13.7628L7.63058 8.23717ZM8.20744 11.25H9.79297L9.0002 8.87171L8.20744 11.25ZM14.5002 7.25C14.9144 7.25 15.2502 7.58579 15.2502 8V14C15.2502 14.4142 14.9144 14.75 14.5002 14.75C14.086 14.75 13.7502 14.4142 13.7502 14V8C13.7502 7.58579 14.086 7.25 14.5002 7.25Z',
  d6: 'M7.29371 12.1944H10.9272M10.9272 12.1944H11.0053M10.9272 12.1944L10.2574 10.4864L9.07825 7.58751L7.88377 10.4864L6.22412 14.7422M10.9272 12.1944L11.9263 14.7422M14.4886 7.24023L14.4887 14.7521',
  d7: 'M1.25 11.25C1.25 5.72715 5.72715 1.25 11.25 1.25C16.7728 1.25 21.25 5.72715 21.25 11.25C21.25 13.6513 20.4036 15.8549 18.9929 17.5787L22.75 21.3358L21.3358 22.75L17.5787 18.9929C15.8549 20.4036 13.6513 21.25 11.25 21.25C5.72715 21.25 1.25 16.7728 1.25 11.25ZM11.25 3.25C6.83172 3.25 3.25 6.83172 3.25 11.25C3.25 15.6683 6.83172 19.25 11.25 19.25C15.6683 19.25 19.25 15.6683 19.25 11.25C19.25 6.83172 15.6683 3.25 11.25 3.25Z',
  d8: 'M8.51796 7.5H10.1231L12.8598 14.6839L11.4581 15.2179L10.6894 13.2H7.95169L7.18298 15.2179L5.78125 14.6839L8.51796 7.5ZM8.52312 11.7H10.118L9.32054 9.60677L8.52312 11.7ZM15.4991 7.5V15H13.9991V7.5H15.4991Z',
};

export const IconAiSearchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-stroke-rounded IconAiSearchStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAiSearchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-duotone-rounded IconAiSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAiSearchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-twotone-rounded IconAiSearchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAiSearchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-solid-rounded IconAiSearchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSearchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-bulk-rounded IconAiSearchBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSearchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-stroke-sharp IconAiSearchStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSearchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-search-solid-sharp IconAiSearchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiSearch: TheIconSelfPack = {
  name: 'AiSearch',
  StrokeRounded: IconAiSearchStrokeRounded,
  DuotoneRounded: IconAiSearchDuotoneRounded,
  TwotoneRounded: IconAiSearchTwotoneRounded,
  SolidRounded: IconAiSearchSolidRounded,
  BulkRounded: IconAiSearchBulkRounded,
  StrokeSharp: IconAiSearchStrokeSharp,
  SolidSharp: IconAiSearchSolidSharp,
};