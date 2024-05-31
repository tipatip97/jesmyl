import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10 15.5C10 16.3284 9.32843 17 8.5 17C7.67157 17 7 16.3284 7 15.5C7 14.6716 7.67157 14 8.5 14C9.32843 14 10 14.6716 10 15.5ZM10 15.5V11C10 10.1062 10 9.65932 10.2262 9.38299C10.4524 9.10667 10.9638 9.00361 11.9865 8.7975C13.8531 8.42135 15.3586 7.59867 16 7V13.5M16 13.75C16 14.4404 15.4404 15 14.75 15C14.0596 15 13.5 14.4404 13.5 13.75C13.5 13.0596 14.0596 12.5 14.75 12.5C15.4404 12.5 16 13.0596 16 13.75Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM17 7.00002C17 6.60182 16.7638 6.24158 16.3985 6.08287C16.0333 5.92417 15.6088 5.99727 15.3177 6.26897C14.8419 6.71303 13.5194 7.46852 11.789 7.81723L11.7441 7.82627L11.7441 7.82627C11.2713 7.92152 10.8479 8.00682 10.5176 8.10693C10.1885 8.20667 9.76117 8.37238 9.45239 8.74959C9.15992 9.10687 9.07107 9.51482 9.03423 9.85103C8.9999 10.1643 8.99995 10.5468 9 10.9531L9 11V13.05C8.83845 13.0172 8.67123 13 8.5 13C7.11929 13 6 14.1193 6 15.5C6 16.8807 7.11929 18 8.5 18C9.88071 18 11 16.8807 11 15.5V11C11 10.53 11.0014 10.2596 11.0223 10.0689L11.0252 10.0444C11.0455 10.0373 11.0696 10.0295 11.0977 10.0209C11.3249 9.95208 11.6522 9.885 12.1841 9.77782C13.2371 9.56561 14.2032 9.21898 15 8.82846V11.5138C14.9179 11.5047 14.8345 11.5 14.75 11.5C13.5074 11.5 12.5 12.5074 12.5 13.75C12.5 14.9927 13.5074 16 14.75 16C15.9926 16 17 14.9927 17 13.75V7.00002Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M16.3985 6.08287C16.7638 6.24158 17 6.60182 17 7.00002V13.75C17 14.9927 15.9926 16 14.75 16C13.5074 16 12.5 14.9927 12.5 13.75C12.5 12.5074 13.5074 11.5 14.75 11.5C14.8345 11.5 14.9179 11.5047 15 11.5138V8.82846C14.2032 9.21898 13.2371 9.56561 12.1841 9.77782C11.6522 9.885 11.3249 9.95208 11.0977 10.0209C11.0696 10.0295 11.0455 10.0373 11.0252 10.0444L11.0223 10.0689C11.0014 10.2596 11 10.53 11 11V15.5C11 16.8807 9.88071 18 8.5 18C7.11929 18 6 16.8807 6 15.5C6 14.1193 7.11929 13 8.5 13C8.67123 13 8.83845 13.0172 9 13.05V11L9 10.9531C8.99995 10.5468 8.9999 10.1643 9.03423 9.85103C9.07107 9.51482 9.15992 9.10687 9.45239 8.74959C9.76117 8.37238 10.1885 8.20667 10.5176 8.10693C10.8479 8.00682 11.2713 7.92152 11.7441 7.82627L11.7441 7.82627L11.789 7.81723C13.5194 7.46852 14.8419 6.71303 15.3177 6.26897C15.6088 5.99727 16.0333 5.92417 16.3985 6.08287Z',
  d6: 'M3 21H21V3H3V21Z',
  d7: 'M10 15.5C10 16.3284 9.32843 17 8.5 17C7.67157 17 7 16.3284 7 15.5C7 14.6716 7.67157 14 8.5 14C9.32843 14 10 14.6716 10 15.5ZM10 15.5V10L16 7V13.5M16 13.75C16 14.4404 15.4404 15 14.75 15C14.0596 15 13.5 14.4404 13.5 13.75C13.5 13.0596 14.0596 12.5 14.75 12.5C15.4404 12.5 16 13.0596 16 13.75Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM17 7C17 6.65342 16.8205 6.33156 16.5257 6.14935C16.2309 5.96714 15.8628 5.95058 15.5528 6.10557L9.55279 9.10557C9.214 9.27497 9 9.62123 9 10V13.05C8.83845 13.0172 8.67123 13 8.5 13C7.11929 13 6 14.1193 6 15.5C6 16.8807 7.11929 18 8.5 18C9.88071 18 11 16.8807 11 15.5V10.618L15 8.61803V11.5137C14.9179 11.5047 14.8345 11.5 14.75 11.5C13.5074 11.5 12.5 12.5074 12.5 13.75C12.5 14.9926 13.5074 16 14.75 16C15.9926 16 17 14.9926 17 13.75C17 13.6996 16.9983 13.6495 16.9951 13.5999C16.9983 13.567 17 13.5337 17 13.5V7Z',
} as const;

export const IconMusicNoteSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-stroke-rounded IconMusicNoteSquare02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-duotone-rounded IconMusicNoteSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-twotone-rounded IconMusicNoteSquare02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-solid-rounded IconMusicNoteSquare02SolidRounded"
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

export const IconMusicNoteSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-bulk-rounded IconMusicNoteSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-stroke-sharp IconMusicNoteSquare02StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-02-solid-sharp IconMusicNoteSquare02SolidSharp"
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

export const iconPackOfMusicNoteSquare02: TheIconSelfPack = {
  name: 'MusicNoteSquare02',
  StrokeRounded: IconMusicNoteSquare02StrokeRounded,
  DuotoneRounded: IconMusicNoteSquare02DuotoneRounded,
  TwotoneRounded: IconMusicNoteSquare02TwotoneRounded,
  SolidRounded: IconMusicNoteSquare02SolidRounded,
  BulkRounded: IconMusicNoteSquare02BulkRounded,
  StrokeSharp: IconMusicNoteSquare02StrokeSharp,
  SolidSharp: IconMusicNoteSquare02SolidSharp,
};