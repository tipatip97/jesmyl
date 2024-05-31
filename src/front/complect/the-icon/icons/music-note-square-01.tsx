import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M13 14.5C13 15.8807 11.8807 17 10.5 17C9.11929 17 8 15.8807 8 14.5C8 13.1193 9.11929 12 10.5 12C11.8807 12 13 13.1193 13 14.5ZM13 14.5V7C13.3333 7.5 13.6 9.6 16 10',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM10.5 17C11.8807 17 13 15.8807 13 14.5C13 13.1193 11.8807 12 10.5 12C9.11929 12 8 13.1193 8 14.5C8 15.8807 9.11929 17 10.5 17Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059ZM13.8321 6.44538C13.5876 6.07872 13.132 5.91529 12.7102 6.04299C12.2885 6.17068 12 6.55941 12 7.00008V11.3369C11.5454 11.1209 11.0368 11.0001 10.5 11.0001C8.567 11.0001 7 12.5671 7 14.5001C7 16.4331 8.567 18.0001 10.5 18.0001C12.433 18.0001 14 16.4331 14 14.5001V10.2577C14.4787 10.5948 15.0795 10.8605 15.8356 10.9865C16.3804 11.0773 16.8956 10.7092 16.9864 10.1645C17.0772 9.61971 16.7092 9.10448 16.1644 9.01368C15.2904 8.86802 14.8507 8.44099 14.5671 7.99821C14.4141 7.75946 14.3022 7.50681 14.2004 7.25212C14.1843 7.21204 14.1655 7.16413 14.1459 7.1142L14.1459 7.11419C14.1132 7.03071 14.0782 6.94156 14.0502 6.87381C14.0047 6.76386 13.9328 6.59647 13.8321 6.44538Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M12.7102 6.04299C13.132 5.91529 13.5876 6.07872 13.8321 6.44538C13.9328 6.59647 14.0047 6.76386 14.0502 6.87381C14.0782 6.94156 14.1132 7.03071 14.1459 7.11419L14.1459 7.1142C14.1655 7.16413 14.1843 7.21204 14.2004 7.25212C14.3022 7.50681 14.4141 7.75946 14.5671 7.99821C14.8507 8.44099 15.2904 8.86802 16.1644 9.01368C16.7092 9.10448 17.0772 9.61971 16.9864 10.1645C16.8956 10.7092 16.3804 11.0773 15.8356 10.9865C15.0795 10.8605 14.4787 10.5948 14 10.2577V14.5001C14 16.4331 12.433 18.0001 10.5 18.0001C8.567 18.0001 7 16.4331 7 14.5001C7 12.5671 8.567 11.0001 10.5 11.0001C11.0368 11.0001 11.5454 11.1209 12 11.3369V7.00008C12 6.55941 12.2885 6.17068 12.7102 6.04299Z',
  d7: 'M3 21H21V3H3V21Z',
  d8: 'M13 14.5C13 15.8807 11.8807 17 10.5 17C9.11929 17 8 15.8807 8 14.5C8 13.1193 9.11929 12 10.5 12C11.8807 12 13 13.1193 13 14.5ZM13 14.5V7C13.3333 7.5 14 10 16 10',
  d9: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM13.2102 6.04299C13.632 5.91529 14.0876 6.07872 14.3321 6.44538C14.4217 6.57981 14.4974 6.73924 14.5493 6.8509C14.5717 6.89897 14.6091 6.98149 14.6463 7.06354C14.6797 7.13728 14.7132 7.21111 14.7361 7.26071C14.8699 7.55067 15.0213 7.85429 15.2071 8.13288C15.5868 8.70257 15.9896 9.00008 16.5 9.00008H17V11L16.5 11.0001C15.6689 11.0001 15.0118 10.7036 14.5 10.3015V14.5001C14.5 16.4331 12.933 18.0001 11 18.0001C9.067 18.0001 7.5 16.4331 7.5 14.5001C7.5 12.5671 9.067 11.0001 11 11.0001C11.5368 11.0001 12.0454 11.1209 12.5 11.3369V7.00008C12.5 6.55941 12.7885 6.17068 13.2102 6.04299Z',
} as const;

export const IconMusicNoteSquare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-stroke-rounded IconMusicNoteSquare01StrokeRounded"
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

export const IconMusicNoteSquare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-duotone-rounded IconMusicNoteSquare01DuotoneRounded"
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

export const IconMusicNoteSquare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-twotone-rounded IconMusicNoteSquare01TwotoneRounded"
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

export const IconMusicNoteSquare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-solid-rounded IconMusicNoteSquare01SolidRounded"
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

export const IconMusicNoteSquare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-bulk-rounded IconMusicNoteSquare01BulkRounded"
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

export const IconMusicNoteSquare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-stroke-sharp IconMusicNoteSquare01StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMusicNoteSquare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="music-note-square-01-solid-sharp IconMusicNoteSquare01SolidSharp"
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

export const iconPackOfMusicNoteSquare01: TheIconSelfPack = {
  name: 'MusicNoteSquare01',
  StrokeRounded: IconMusicNoteSquare01StrokeRounded,
  DuotoneRounded: IconMusicNoteSquare01DuotoneRounded,
  TwotoneRounded: IconMusicNoteSquare01TwotoneRounded,
  SolidRounded: IconMusicNoteSquare01SolidRounded,
  BulkRounded: IconMusicNoteSquare01BulkRounded,
  StrokeSharp: IconMusicNoteSquare01StrokeSharp,
  SolidSharp: IconMusicNoteSquare01SolidSharp,
};