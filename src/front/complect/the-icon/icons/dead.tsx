import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 16H15',
  d2: 'M10 11L8.5 9.5M8.5 9.5L7 8M8.5 9.5L7 11M8.5 9.5L10 8M17 11L15.5 9.5M15.5 9.5L14 8M15.5 9.5L14 11M15.5 9.5L17 8',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.25 16C8.25 15.5858 8.58579 15.25 9 15.25L15 15.25C15.4142 15.25 15.75 15.5858 15.75 16C15.75 16.4142 15.4142 16.75 15 16.75H9C8.58579 16.75 8.25 16.4142 8.25 16ZM7.53033 7.46967C7.23744 7.17678 6.76256 7.17678 6.46967 7.46967C6.17678 7.76256 6.17678 8.23744 6.46967 8.53033L7.43934 9.5L6.46967 10.4697C6.17678 10.7626 6.17678 11.2374 6.46967 11.5303C6.76256 11.8232 7.23744 11.8232 7.53033 11.5303L8.5 10.5607L9.46967 11.5303C9.76256 11.8232 10.2374 11.8232 10.5303 11.5303C10.8232 11.2374 10.8232 10.7626 10.5303 10.4697L9.56066 9.5L10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967L8.5 8.43934L7.53033 7.46967ZM14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967C13.1768 7.76256 13.1768 8.23744 13.4697 8.53033L14.4393 9.5L13.4697 10.4697C13.1768 10.7626 13.1768 11.2374 13.4697 11.5303C13.7626 11.8232 14.2374 11.8232 14.5303 11.5303L15.5 10.5607L16.4697 11.5303C16.7626 11.8232 17.2374 11.8232 17.5303 11.5303C17.8232 11.2374 17.8232 10.7626 17.5303 10.4697L16.5607 9.5L17.5303 8.53033C17.8232 8.23744 17.8232 7.76256 17.5303 7.46967C17.2374 7.17678 16.7626 7.17678 16.4697 7.46967L15.5 8.43934L14.5303 7.46967Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.25 16C8.25 15.5858 8.58579 15.25 9 15.25H15C15.4142 15.25 15.75 15.5858 15.75 16C15.75 16.4142 15.4142 16.75 15 16.75H9C8.58579 16.75 8.25 16.4142 8.25 16Z',
  d6: 'M6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L8.5 8.43934L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L9.56066 9.5L10.5303 10.4697C10.8232 10.7626 10.8232 11.2374 10.5303 11.5303C10.2374 11.8232 9.76256 11.8232 9.46967 11.5303L8.5 10.5607L7.53033 11.5303C7.23744 11.8232 6.76256 11.8232 6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697L7.43934 9.5L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967ZM13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L15.5 8.43934L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L16.5607 9.5L17.5303 10.4697C17.8232 10.7626 17.8232 11.2374 17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303L15.5 10.5607L14.5303 11.5303C14.2374 11.8232 13.7626 11.8232 13.4697 11.5303C13.1768 11.2374 13.1768 10.7626 13.4697 10.4697L14.4393 9.5L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15 15.25L15 16.75H9V15.25L15 15.25ZM10.5294 8.53039L9.55974 9.50006L10.5294 10.4697L9.46875 11.5304L8.49908 10.5607L7.52941 11.5304L6.46875 10.4697L7.43842 9.50006L6.46875 8.53039L7.52941 7.46973L8.49908 8.4394L9.46875 7.46973L10.5294 8.53039ZM16.4688 11.5304L15.4991 10.5607L14.5294 11.5304L13.4688 10.4697L14.4384 9.50006L13.4688 8.53039L14.5294 7.46973L15.4991 8.4394L16.4688 7.46973L17.5294 8.53039L16.5597 9.50006L17.5294 10.4697L16.4688 11.5304Z',
} as const;

export const IconDeadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-stroke-rounded IconDeadStrokeRounded"
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

export const IconDeadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-duotone-rounded IconDeadDuotoneRounded"
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

export const IconDeadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-twotone-rounded IconDeadTwotoneRounded"
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

export const IconDeadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-solid-rounded IconDeadSolidRounded"
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

export const IconDeadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-bulk-rounded IconDeadBulkRounded"
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

export const IconDeadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-stroke-sharp IconDeadStrokeSharp"
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

export const IconDeadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dead-solid-sharp IconDeadSolidSharp"
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

export const iconPackOfDead: TheIconSelfPack = {
  name: 'Dead',
  StrokeRounded: IconDeadStrokeRounded,
  DuotoneRounded: IconDeadDuotoneRounded,
  TwotoneRounded: IconDeadTwotoneRounded,
  SolidRounded: IconDeadSolidRounded,
  BulkRounded: IconDeadBulkRounded,
  StrokeSharp: IconDeadStrokeSharp,
  SolidSharp: IconDeadSolidSharp,
};