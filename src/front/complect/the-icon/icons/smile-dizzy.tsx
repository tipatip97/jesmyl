import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 11L8.5 9.5M8.5 9.5L7 8M8.5 9.5L7 11M8.5 9.5L10 8M17 11L15.5 9.5M15.5 9.5L14 8M15.5 9.5L14 11M15.5 9.5L17 8',
  d2: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L8.5 8.43934L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L9.56066 9.5L10.5303 10.4697C10.8232 10.7626 10.8232 11.2374 10.5303 11.5303C10.2374 11.8232 9.76256 11.8232 9.46967 11.5303L8.5 10.5607L7.53033 11.5303C7.23744 11.8232 6.76256 11.8232 6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697L7.43934 9.5L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L15.5 8.43934L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L16.5607 9.5L17.5303 10.4697C17.8232 10.7626 17.8232 11.2374 17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303L15.5 10.5607L14.5303 11.5303C14.2374 11.8232 13.7626 11.8232 13.4697 11.5303C13.1768 11.2374 13.1768 10.7626 13.4697 10.4697L14.4393 9.5L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967ZM8.59974 14.5496C8.35099 14.2184 7.88084 14.1515 7.54964 14.4003C7.21843 14.649 7.1516 15.1192 7.40035 15.4504C8.44802 16.8453 10.1185 17.75 12 17.75C13.8816 17.75 15.5521 16.8453 16.5997 15.4504C16.8485 15.1192 16.7817 14.649 16.4505 14.4003C16.1192 14.1515 15.6491 14.2184 15.4003 14.5496C14.6238 15.5835 13.3898 16.25 12 16.25C10.6103 16.25 9.37631 15.5835 8.59974 14.5496Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L8.5 8.43934L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L9.56066 9.5L10.5303 10.4697C10.8232 10.7626 10.8232 11.2374 10.5303 11.5303C10.2374 11.8232 9.76256 11.8232 9.46967 11.5303L8.5 10.5607L7.53033 11.5303C7.23744 11.8232 6.76256 11.8232 6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697L7.43934 9.5L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L15.5 8.43934L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L16.5607 9.5L17.5303 10.4697C17.8232 10.7626 17.8232 11.2374 17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303L15.5 10.5607L14.5303 11.5303C14.2374 11.8232 13.7626 11.8232 13.4697 11.5303C13.1768 11.2374 13.1768 10.7626 13.4697 10.4697L14.4393 9.5L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967Z',
  d6: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9.55974 9.50006L10.5294 8.53039L9.46875 7.46973L8.49908 8.4394L7.52941 7.46973L6.46875 8.53039L7.43842 9.50006L6.46875 10.4697L7.52941 11.5304L8.49908 10.5607L9.46875 11.5304L10.5294 10.4697L9.55974 9.50006ZM15.4991 10.5607L16.4688 11.5304L17.5294 10.4697L16.5597 9.50006L17.5294 8.53039L16.4688 7.46973L15.4991 8.4394L14.5294 7.46973L13.4688 8.53039L14.4384 9.50006L13.4688 10.4697L14.5294 11.5304L15.4991 10.5607ZM15.4004 14.5498C14.6238 15.5838 13.3899 16.2502 12.0001 16.2502C10.6103 16.2502 9.37635 15.5838 8.59978 14.5498L7.40039 15.4506C8.44806 16.8455 10.1185 17.7502 12.0001 17.7502C13.8816 17.7502 15.5521 16.8455 16.5998 15.4506L15.4004 14.5498Z',
};

export const IconSmileDizzyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-stroke-rounded IconSmileDizzyStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmileDizzyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-duotone-rounded IconSmileDizzyDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmileDizzyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-twotone-rounded IconSmileDizzyTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSmileDizzySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-solid-rounded IconSmileDizzySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmileDizzyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-bulk-rounded IconSmileDizzyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconSmileDizzyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-stroke-sharp IconSmileDizzyStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSmileDizzySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smile-dizzy-solid-sharp IconSmileDizzySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmileDizzy: TheIconSelfPack = {
  name: 'SmileDizzy',
  StrokeRounded: IconSmileDizzyStrokeRounded,
  DuotoneRounded: IconSmileDizzyDuotoneRounded,
  TwotoneRounded: IconSmileDizzyTwotoneRounded,
  SolidRounded: IconSmileDizzySolidRounded,
  BulkRounded: IconSmileDizzyBulkRounded,
  StrokeSharp: IconSmileDizzyStrokeSharp,
  SolidSharp: IconSmileDizzySolidSharp,
};