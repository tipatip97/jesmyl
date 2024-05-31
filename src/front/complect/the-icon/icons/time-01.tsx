import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.0078 10.5082C11.1794 10.5082 10.5078 11.1798 10.5078 12.0082C10.5078 12.8366 11.1794 13.5082 12.0078 13.5082C12.8362 13.5082 13.5078 12.8366 13.5078 12.0082C13.5078 11.1798 12.8362 10.5082 12.0078 10.5082ZM12.0078 10.5082V6.99902M15.0147 15.0198L13.0661 13.0712',
  d3: 'M3.89124 3.89319C2.5 5.28444 2.5 7.52361 2.5 12.002C2.5 16.4803 2.5 18.7195 3.89124 20.1108C5.28249 21.502 7.52166 21.502 12 21.502C16.4783 21.502 18.7175 21.502 20.1088 20.1108C21.5 18.7195 21.5 16.4803 21.5 12.002C21.5 7.52361 21.5 5.28444 20.1088 3.89319C18.7175 2.50195 16.4783 2.50195 12 2.50195C7.52166 2.50195 5.28249 2.50195 3.89124 3.89319ZM12 13.502C12.8284 13.502 13.5 12.8304 13.5 12.002C13.5 11.1736 12.8284 10.502 12 10.502C11.1716 10.502 10.5 11.1736 10.5 12.002C10.5 12.8304 11.1716 13.502 12 13.502Z',
  d4: 'M2.5 12.002C2.5 7.52361 2.5 5.28444 3.89124 3.89319C5.28249 2.50195 7.52166 2.50195 12 2.50195C16.4783 2.50195 18.7175 2.50195 20.1088 3.89319C21.5 5.28444 21.5 7.52361 21.5 12.002C21.5 16.4803 21.5 18.7195 20.1088 20.1108C18.7175 21.502 16.4783 21.502 12 21.502C7.52166 21.502 5.28249 21.502 3.89124 20.1108C2.5 18.7195 2.5 16.4803 2.5 12.002Z',
  d5: 'M11.9961 10.5004C11.1677 10.5004 10.4961 11.172 10.4961 12.0004C10.4961 12.8288 11.1677 13.5004 11.9961 13.5004C12.8245 13.5004 13.4961 12.8288 13.4961 12.0004C13.4961 11.172 12.8245 10.5004 11.9961 10.5004ZM11.9961 10.5004V6.99121M15.003 15.012L13.0544 13.0634',
  d6: 'M11.9961 10.4989C11.1677 10.4989 10.4961 11.1705 10.4961 11.9989C10.4961 12.8273 11.1677 13.4989 11.9961 13.4989C12.8245 13.4989 13.4961 12.8273 13.4961 11.9989C13.4961 11.1705 12.8245 10.4989 11.9961 10.4989ZM11.9961 10.4989V6.98975M15.003 15.0105L13.0544 13.0619',
  d7: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9.70802C10.117 10.0938 9.5 10.9748 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C12.3224 14.5 12.6306 14.439 12.9136 14.3278L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.3278 12.9136C14.439 12.6306 14.5 12.3224 14.5 12C14.5 10.9748 13.883 10.0938 13 9.70802V7Z',
  d8: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d9: 'M12 6C12.5523 6 13 6.44772 13 7V9.70802C13.883 10.0938 14.5 10.9748 14.5 12C14.5 12.3224 14.439 12.6306 14.3278 12.9136L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12.9136 14.3278C12.6306 14.439 12.3224 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.9748 10.117 10.0938 11 9.70802V7C11 6.44772 11.4477 6 12 6Z',
  d10: 'M21 3H3V21H21V3Z',
  d11: 'M12 7V10.5M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5ZM13.5 13.5L15 15',
  d12: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM13 9.98388C13.7409 10.3521 14.25 11.1166 14.25 12C14.25 12.2513 14.2088 12.4929 14.1328 12.7186L15.7071 14.2929L14.2929 15.7071L12.7186 14.1328C12.4929 14.2088 12.2513 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 11.1166 10.2591 10.3521 11 9.98388V7H13V9.98388Z',
} as const;

export const IconTime01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-stroke-rounded IconTime01StrokeRounded"
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

export const IconTime01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-duotone-rounded IconTime01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-twotone-rounded IconTime01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-solid-rounded IconTime01SolidRounded"
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

export const IconTime01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-bulk-rounded IconTime01BulkRounded"
    >
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

export const IconTime01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-stroke-sharp IconTime01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconTime01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-01-solid-sharp IconTime01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTime01: TheIconSelfPack = {
  name: 'Time01',
  StrokeRounded: IconTime01StrokeRounded,
  DuotoneRounded: IconTime01DuotoneRounded,
  TwotoneRounded: IconTime01TwotoneRounded,
  SolidRounded: IconTime01SolidRounded,
  BulkRounded: IconTime01BulkRounded,
  StrokeSharp: IconTime01StrokeSharp,
  SolidSharp: IconTime01SolidSharp,
};