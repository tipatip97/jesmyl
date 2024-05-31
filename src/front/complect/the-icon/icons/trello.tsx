import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z',
  d3: 'M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM6.29289 6.29289C6 6.58579 6 7.05719 6 8V15C6 15.9428 6 16.4142 6.29289 16.7071C6.58579 17 7.05719 17 8 17H8.5C9.44281 17 9.91421 17 10.2071 16.7071C10.5 16.4142 10.5 15.9428 10.5 15V8C10.5 7.05719 10.5 6.58579 10.2071 6.29289C9.91421 6 9.44281 6 8.5 6H8C7.05719 6 6.58579 6 6.29289 6.29289ZM13.7929 6.29289C13.5 6.58579 13.5 7.05719 13.5 8V10C13.5 10.9428 13.5 11.4142 13.7929 11.7071C14.0858 12 14.5572 12 15.5 12H16C16.9428 12 17.4142 12 17.7071 11.7071C18 11.4142 18 10.9428 18 10V8C18 7.05719 18 6.58579 17.7071 6.29289C17.4142 6 16.9428 6 16 6H15.5C14.5572 6 14.0858 6 13.7929 6.29289Z',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM6.29289 6.29289C6 6.58579 6 7.05719 6 8L6 15C6 15.9428 6 16.4142 6.29289 16.7071C6.58579 17 7.05719 17 8 17H8.5C9.44281 17 9.91421 17 10.2071 16.7071C10.5 16.4142 10.5 15.9428 10.5 15L10.5 8C10.5 7.05719 10.5 6.58579 10.2071 6.29289C9.91421 6 9.44281 6 8.5 6H8C7.05719 6 6.58579 6 6.29289 6.29289ZM13.7929 6.29289C13.5 6.58579 13.5 7.05719 13.5 8V10C13.5 10.9428 13.5 11.4142 13.7929 11.7071C14.0858 12 14.5572 12 15.5 12H16C16.9428 12 17.4142 12 17.7071 11.7071C18 11.4142 18 10.9428 18 10V8C18 7.05719 18 6.58579 17.7071 6.29289C17.4142 6 16.9428 6 16 6H15.5C14.5572 6 14.0858 6 13.7929 6.29289Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M10.5034 6.0127L5.96631 6.01282V17.0298C5.96631 17.0354 5.97079 17.0398 5.97631 17.0398H10.4934C10.4989 17.0398 10.5034 17.0354 10.5034 17.0298V6.0127Z',
  d9: 'M18.0215 6.0127L13.4844 6.01276V12.0037C13.4844 12.0092 13.4889 12.0137 13.4944 12.0137H18.0115C18.017 12.0137 18.0215 12.0092 18.0215 12.0037V6.0127Z',
  d10: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6 6L10.5 6L10.5 17H6L6 6ZM13.5 6H18V12H13.5V6Z',
} as const;

export const IconTrelloStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-stroke-rounded IconTrelloStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrelloDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-duotone-rounded IconTrelloDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrelloTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-twotone-rounded IconTrelloTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconTrelloSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-solid-rounded IconTrelloSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrelloBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-bulk-rounded IconTrelloBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrelloStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-stroke-sharp IconTrelloStrokeSharp"
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrelloSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trello-solid-sharp IconTrelloSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrello: TheIconSelfPack = {
  name: 'Trello',
  StrokeRounded: IconTrelloStrokeRounded,
  DuotoneRounded: IconTrelloDuotoneRounded,
  TwotoneRounded: IconTrelloTwotoneRounded,
  SolidRounded: IconTrelloSolidRounded,
  BulkRounded: IconTrelloBulkRounded,
  StrokeSharp: IconTrelloStrokeSharp,
  SolidSharp: IconTrelloSolidSharp,
};