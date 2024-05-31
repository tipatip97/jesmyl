import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M18.9973 12.0838C18.9627 12.6123 18.4918 13.0126 17.55 13.8133C16.0773 15.0654 15.3409 15.6914 14.7351 15.4483C14.6734 15.4236 14.6138 15.3931 14.5571 15.3574C14.1246 15.085 14.0279 14.42 14.0062 13.1982H9.99377C9.97214 14.42 9.87543 15.085 9.44294 15.3574C9.38619 15.3931 9.32661 15.4236 9.26489 15.4483C8.65908 15.6914 7.92271 15.0654 6.44997 13.8133C5.50821 13.0126 5.03733 12.6123 5.00274 12.0838C4.99909 12.028 4.99909 11.972 5.00274 11.9162C5.03733 11.3877 5.50821 10.9874 6.44997 10.1867C7.92271 8.93464 8.65908 8.3086 9.26489 8.55167C9.32661 8.57644 9.38619 8.60687 9.44294 8.64262C9.86305 8.90724 9.96633 9.54228 9.99172 10.6982H14.0083C14.0337 9.54228 14.1369 8.90724 14.5571 8.64262C14.6138 8.60687 14.6734 8.57644 14.7351 8.55167C15.3409 8.3086 16.0773 8.93464 17.55 10.1867C18.4918 10.9874 18.9627 11.3877 18.9973 11.9162C19.0009 11.972 19.0009 12.028 18.9973 12.0838Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM17.55 13.8133C18.4918 13.0126 18.9627 12.6123 18.9973 12.0838C19.0009 12.028 19.0009 11.972 18.9973 11.9162C18.9627 11.3877 18.4918 10.9874 17.55 10.1867C16.0773 8.93464 15.3409 8.3086 14.7351 8.55167C14.6734 8.57644 14.6138 8.60687 14.5571 8.64262C14.1369 8.90724 14.0337 9.54228 14.0083 10.6982H9.99172C9.96633 9.54228 9.86305 8.90724 9.44294 8.64262C9.38619 8.60687 9.32661 8.57644 9.26489 8.55167C8.65908 8.3086 7.92271 8.93464 6.44997 10.1867C5.50821 10.9874 5.03733 11.3877 5.00274 11.9162C4.99909 11.972 4.99909 12.028 5.00274 12.0838C5.03733 12.6123 5.50821 13.0126 6.44997 13.8133C7.92271 15.0654 8.65908 15.6914 9.26489 15.4483C9.32661 15.4236 9.38619 15.3931 9.44294 15.3574C9.87543 15.085 9.97214 14.42 9.99377 13.1982H14.0062C14.0279 14.42 14.1246 15.085 14.5571 15.3574C14.6138 15.3931 14.6734 15.4236 14.7351 15.4483C15.3409 15.6914 16.0773 15.0654 17.55 13.8133Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM17.55 13.8133C18.4918 13.0126 18.9627 12.6123 18.9973 12.0838C19.0009 12.028 19.0009 11.972 18.9973 11.9162C18.9627 11.3877 18.4918 10.9874 17.55 10.1867C16.0773 8.93464 15.3409 8.3086 14.7351 8.55167C14.6734 8.57644 14.6138 8.60687 14.5571 8.64262C14.1369 8.90724 14.0337 9.54228 14.0083 10.6982H9.99172C9.96633 9.54228 9.86305 8.90724 9.44294 8.64262C9.38619 8.60687 9.32661 8.57644 9.26489 8.55167C8.65908 8.3086 7.92271 8.93464 6.44997 10.1867C5.50821 10.9874 5.03733 11.3877 5.00274 11.9162C4.99909 11.972 4.99909 12.028 5.00274 12.0838C5.03733 12.6123 5.50821 13.0126 6.44997 13.8133C7.92271 15.0654 8.65908 15.6914 9.26489 15.4483C9.32661 15.4236 9.38619 15.3931 9.44294 15.3574C9.87543 15.085 9.97214 14.42 9.99377 13.1982H14.0062C14.0279 14.42 14.1246 15.085 14.5571 15.3574C14.6138 15.3931 14.6734 15.4236 14.7351 15.4483C15.3409 15.6914 16.0773 15.0654 17.55 13.8133Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M10.0238 7.98365L10.0238 10.7108H13.9849V8.02406C13.9849 8.01544 13.9951 8.01086 14.0015 8.01657L18.4893 11.9928C18.4937 11.9967 18.4938 12.0037 18.4893 12.0077L14.0015 15.9964C13.9951 16.0022 13.9849 15.9976 13.9849 15.989V13.2101H10.0238V15.9889C10.0238 15.9976 10.0136 16.0022 10.0071 15.9964L5.51263 11.9936C5.50816 11.9896 5.50816 11.9826 5.51263 11.9787L10.0072 7.97618C10.0136 7.97044 10.0238 7.97502 10.0238 7.98365Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM9.99094 10.6982H14.0075V8L18.5 12L14 16L14.0054 13.1982H9.99298L10 16L5.5 12L10 8L9.99094 10.6982Z',
} as const;

export const IconTeamviewerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-stroke-rounded IconTeamviewerStrokeRounded"
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

export const IconTeamviewerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-duotone-rounded IconTeamviewerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTeamviewerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-twotone-rounded IconTeamviewerTwotoneRounded"
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

export const IconTeamviewerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-solid-rounded IconTeamviewerSolidRounded"
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

export const IconTeamviewerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-bulk-rounded IconTeamviewerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeamviewerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-stroke-sharp IconTeamviewerStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeamviewerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="teamviewer-solid-sharp IconTeamviewerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTeamviewer: TheIconSelfPack = {
  name: 'Teamviewer',
  StrokeRounded: IconTeamviewerStrokeRounded,
  DuotoneRounded: IconTeamviewerDuotoneRounded,
  TwotoneRounded: IconTeamviewerTwotoneRounded,
  SolidRounded: IconTeamviewerSolidRounded,
  BulkRounded: IconTeamviewerBulkRounded,
  StrokeSharp: IconTeamviewerStrokeSharp,
  SolidSharp: IconTeamviewerSolidSharp,
};