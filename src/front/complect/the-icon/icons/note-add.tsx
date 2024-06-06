import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 2V4M11 2V4M6 2V4',
  d2: 'M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5',
  d3: 'M17.5 14L17.5 22M21.5 18L13.5 18',
  d4: 'M7 15H11M7 10H15',
  d5: 'M2.5 10C2.5 6.70017 2.5 5.05025 3.52513 4.02513C4.55025 3 6.20017 3 9.5 3H12.5C15.7998 3 17.4497 3 18.4749 4.02513C19.5 5.05025 19.5 6.70017 19.5 10V15C19.5 18.2998 19.5 19.9497 18.4749 20.9749C17.4497 22 15.7998 22 12.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9749C2.5 19.9497 2.5 18.2998 2.5 15V10Z',
  d6: 'M7 15H11',
  d7: 'M7 10H15',
  d8: 'M5.875 1C6.42728 1 6.875 1.44772 6.875 2V4C6.875 4.55228 6.42728 5 5.875 5C5.32272 5 4.875 4.55228 4.875 4V2C4.875 1.44772 5.32272 1 5.875 1ZM10.875 1C11.4273 1 11.875 1.44772 11.875 2V4C11.875 4.55228 11.4273 5 10.875 5C10.3227 5 9.875 4.55228 9.875 4V2C9.875 1.44772 10.3227 1 10.875 1ZM15.875 1C16.4273 1 16.875 1.44772 16.875 2V4C16.875 4.55228 16.4273 5 15.875 5C15.3227 5 14.875 4.55228 14.875 4V2C14.875 1.44772 15.3227 1 15.875 1Z',
  d9: 'M12.4308 2.25H9.31926H9.31925C7.71668 2.24998 6.43769 2.24997 5.43462 2.38483C4.39835 2.52415 3.54494 2.81966 2.8698 3.4948C2.19466 4.16994 1.89915 5.02335 1.75983 6.05962C1.62497 7.06269 1.62498 8.34166 1.625 9.94422V9.94424V15.0558V15.0558C1.62498 16.6583 1.62497 17.9373 1.75983 18.9404C1.89915 19.9767 2.19466 20.8301 2.8698 21.5052C3.54494 22.1803 4.39835 22.4758 5.43462 22.6152C6.4377 22.75 7.71667 22.75 9.31926 22.75H12.4307C13.1993 22.75 13.8934 22.75 14.5183 22.7351C14.6464 22.7321 14.7104 22.7306 14.789 22.6687C14.813 22.6497 14.8433 22.6157 14.8592 22.5896C14.9114 22.5043 14.903 22.4158 14.8863 22.2388C14.8788 22.1602 14.875 22.0806 14.875 22V21.1C14.875 20.8172 14.875 20.6757 14.7871 20.5879C14.6993 20.5 14.5578 20.5 14.275 20.5H13.375C11.9943 20.5 10.875 19.3807 10.875 18C10.875 16.6193 11.9943 15.5 13.375 15.5L14.275 15.5C14.5578 15.5 14.6993 15.5 14.7871 15.4121C14.875 15.3243 14.875 15.1828 14.875 14.9V14C14.875 12.6193 15.9943 11.5 17.375 11.5C18.7557 11.5 19.875 12.6193 19.875 14C20.0131 14 20.125 13.8881 20.125 13.75V9.94426C20.125 8.34167 20.125 7.0627 19.9902 6.05962C19.8508 5.02335 19.5553 4.16994 18.8802 3.4948C18.2051 2.81966 17.3517 2.52415 16.3154 2.38483C15.3123 2.24997 14.0333 2.24998 12.4308 2.25H12.4308ZM6.875 8.25C6.46079 8.25 6.125 8.58579 6.125 9C6.125 9.41421 6.46079 9.75 6.875 9.75H14.875C15.2892 9.75 15.625 9.41421 15.625 9C15.625 8.58579 15.2892 8.25 14.875 8.25H6.875ZM6.875 13.25C6.46079 13.25 6.125 13.5858 6.125 14C6.125 14.4142 6.46079 14.75 6.875 14.75H10.875C11.2892 14.75 11.625 14.4142 11.625 14C11.625 13.5858 11.2892 13.25 10.875 13.25H6.875Z',
  d10: 'M17.375 13C17.9273 13 18.375 13.4477 18.375 14V17H21.375C21.9273 17 22.375 17.4477 22.375 18C22.375 18.5523 21.9273 19 21.375 19H18.375V22C18.375 22.5523 17.9273 23 17.375 23C16.8227 23 16.375 22.5523 16.375 22V19H13.375C12.8227 19 12.375 18.5523 12.375 18C12.375 17.4477 12.8227 17 13.375 17L16.375 17V14C16.375 13.4477 16.8227 13 17.375 13Z',
  d11: 'M9.31926 2.25H12.4308C14.0333 2.24998 15.3123 2.24997 16.3154 2.38483C17.3517 2.52415 18.2051 2.81966 18.8802 3.4948C19.5553 4.16994 19.8508 5.02335 19.9902 6.05962C20.125 7.0627 20.125 8.34167 20.125 9.94426V13.75C20.125 13.8881 20.0131 14 19.875 14C19.875 12.6193 18.7557 11.5 17.375 11.5C15.9943 11.5 14.875 12.6193 14.875 14V14.9C14.875 15.1828 14.875 15.3243 14.7871 15.4121C14.6993 15.5 14.5578 15.5 14.275 15.5L13.375 15.5C11.9943 15.5 10.875 16.6193 10.875 18C10.875 19.3807 11.9943 20.5 13.375 20.5H14.275C14.5578 20.5 14.6993 20.5 14.7871 20.5879C14.875 20.6757 14.875 20.8172 14.875 21.1V22C14.875 22.0806 14.8788 22.1602 14.8863 22.2388C14.903 22.4158 14.9114 22.5043 14.8592 22.5896C14.8433 22.6157 14.813 22.6497 14.789 22.6687C14.7104 22.7306 14.6464 22.7321 14.5183 22.7351C13.8934 22.75 13.1993 22.75 12.4307 22.75H9.31926C7.71667 22.75 6.4377 22.75 5.43462 22.6152C4.39835 22.4758 3.54494 22.1803 2.8698 21.5052C2.19466 20.8301 1.89915 19.9767 1.75983 18.9404C1.62497 17.9373 1.62498 16.6583 1.625 15.0558V9.94424C1.62498 8.34167 1.62497 7.06269 1.75983 6.05962C1.89915 5.02335 2.19466 4.16994 2.8698 3.4948C3.54494 2.81966 4.39835 2.52415 5.43462 2.38483C6.43769 2.24997 7.71668 2.24998 9.31926 2.25Z',
  d12: 'M6.125 9C6.125 8.58579 6.46079 8.25 6.875 8.25H14.875C15.2892 8.25 15.625 8.58579 15.625 9C15.625 9.41421 15.2892 9.75 14.875 9.75H6.875C6.46079 9.75 6.125 9.41421 6.125 9ZM6.125 14C6.125 13.5858 6.46079 13.25 6.875 13.25H10.875C11.2892 13.25 11.625 13.5858 11.625 14C11.625 14.4142 11.2892 14.75 10.875 14.75H6.875C6.46079 14.75 6.125 14.4142 6.125 14Z',
  d13: 'M16 2V6M11 2V6M6 2V6',
  d14: 'M20 12V4H2V22L13 22',
  d15: 'M18 14L18 22M22 18L14 18',
  d16: 'M7 16H11M7 11H15',
  d17: 'M17.75 17.5V14.5H19.75V17.5L22.75 17.5V19.5H19.75V22.5H17.75V19.5H14.75V17.5L17.75 17.5Z',
  d18: 'M7 3H10V1.5H12V3H15V1.5H17V3H20C20.4142 3 20.75 3.33579 20.75 3.75V13H16.25V16L13.25 16V21H16.25V22.5L2 22.5C1.58579 22.5 1.25 22.1642 1.25 21.75V3.75C1.25 3.33579 1.58579 3 2 3H5V1.5H7V3ZM7 10.5H15V9H7V10.5ZM7 15.5H11V14H7V15.5Z',
};

export const IconNoteAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-stroke-rounded IconNoteAddStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-duotone-rounded IconNoteAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-twotone-rounded IconNoteAddTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-solid-rounded IconNoteAddSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-bulk-rounded IconNoteAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-stroke-sharp IconNoteAddStrokeSharp"
    >
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-add-solid-sharp IconNoteAddSolidSharp"
    >
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

export const iconPackOfNoteAdd: TheIconSelfPack = {
  name: 'NoteAdd',
  StrokeRounded: IconNoteAddStrokeRounded,
  DuotoneRounded: IconNoteAddDuotoneRounded,
  TwotoneRounded: IconNoteAddTwotoneRounded,
  SolidRounded: IconNoteAddSolidRounded,
  BulkRounded: IconNoteAddBulkRounded,
  StrokeSharp: IconNoteAddStrokeSharp,
  SolidSharp: IconNoteAddSolidSharp,
};