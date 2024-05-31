import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 2.5L14 7C14 8.88562 14 9.82843 14.5858 10.4142C15.1716 11 16.1144 11 18 11',
  d2: 'M21.5 15H15M10 15H15M15 15V21.5',
  d3: 'M2.5 10H5C6.88562 10 7.82843 10 8.41421 9.41421C9 8.82843 9 7.88562 9 6',
  d4: 'M2.5 15H6',
  d5: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d6: 'M12.0572 1.75C12.1732 1.75 12.2878 1.75 12.4012 1.75002C12.6833 1.75009 12.8243 1.75012 12.9122 1.83799C13 1.92585 13 2.06704 13 2.34943L13 7.06583C13 7.95232 12.9999 8.71613 13.0821 9.32779C13.1703 9.98331 13.369 10.6117 13.8787 11.1213C14.3883 11.631 15.0167 11.8297 15.6722 11.9179C16.2839 12.0001 17.0477 12.0001 17.9342 12L18 12C18.5523 12 19 11.5523 19 11C19 10.4477 18.5523 10 18 10C17.0289 10 16.4012 9.99788 15.9387 9.93569C15.505 9.87738 15.369 9.78323 15.2929 9.70711C15.2168 9.63098 15.1226 9.49504 15.0643 9.0613C15.0021 8.59879 15 7.97108 15 7V2.3882C15 2.09746 15 1.95208 15.0924 1.86351C15.1848 1.77494 15.3283 1.78102 15.6154 1.79317C16.2386 1.81956 16.8024 1.86209 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V12.0572C22.25 12.528 22.25 12.9774 22.2482 13.4057C22.247 13.6853 22.2465 13.8252 22.1587 13.9126C22.0709 14 21.9306 14 21.65 14H10C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16H13.4C13.6828 16 13.8243 16 13.9121 16.0879C14 16.1757 14 16.3172 14 16.6V21.65C14 21.9306 14 22.0709 13.9126 22.1587C13.8252 22.2465 13.6853 22.247 13.4057 22.2482C12.9774 22.25 12.5282 22.25 12.0574 22.25H11.9428C9.75214 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.9015 17.0956 1.87709 16.8694 1.85662 16.633C1.83129 16.3407 1.81863 16.1945 1.90779 16.0972C1.99696 16 2.14686 16 2.44664 16H6C6.55229 16 7 15.5523 7 15C7 14.4477 6.55229 14 6 14H2.35004C2.06943 14 1.92912 14 1.84133 13.9126C1.75354 13.8252 1.75296 13.6853 1.75179 13.4057C1.74999 12.9773 1.75 12.5281 1.75 12.0572V11.9428C1.75 11.8269 1.75 11.7122 1.75002 11.5988C1.75009 11.3167 1.75012 11.1757 1.83799 11.0878C1.92585 11 2.06704 11 2.34943 11L5.06583 11C5.95232 11.0001 6.71613 11.0001 7.32779 10.9179C7.98331 10.8297 8.61166 10.631 9.12132 10.1213C9.63098 9.61166 9.82973 8.98331 9.91786 8.32779C10.0001 7.71613 10.0001 6.95232 10 6.06583L10 6C10 5.44772 9.55229 5 9 5C8.44772 5 8 5.44772 8 6C8 6.97108 7.99788 7.59879 7.93569 8.0613C7.87738 8.49504 7.78323 8.63098 7.70711 8.70711C7.63098 8.78323 7.49504 8.87738 7.0613 8.93569C6.59879 8.99788 5.97108 9 5 9H2.3882C2.09746 9 1.95208 9 1.86351 8.9076C1.77494 8.81519 1.78102 8.67166 1.79317 8.38459C1.81956 7.76142 1.86209 7.19758 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M16 21.5534C16 21.8531 16 22.003 16.0972 22.0922C16.1945 22.1814 16.3407 22.1687 16.633 22.1434C16.8694 22.1229 17.0956 22.0985 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.0985 17.0956 22.1229 16.8694 22.1434 16.633C22.1687 16.3407 22.1814 16.1945 22.0922 16.0972C22.003 16 21.8531 16 21.5534 16H16.6C16.3172 16 16.1757 16 16.0879 16.0879C16 16.1757 16 16.3172 16 16.6V21.5534Z',
  d8: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d9: 'M15 1.77241C14.387 1.75657 13.7217 1.75188 13 1.75049V6.99991L13 7.06574C13 7.95222 12.9999 8.71604 13.0822 9.3277C13.1703 9.98322 13.3691 10.6116 13.8787 11.1212C14.3884 11.6309 15.0167 11.8296 15.6722 11.9178C16.2839 12 17.0477 12 17.9342 11.9999L18 11.9999C18.5523 11.9999 19 11.5522 19 10.9999C19 10.4476 18.5523 9.99991 18 9.99991C17.029 9.99991 16.4012 9.99778 15.9387 9.9356C15.505 9.87729 15.3691 9.78314 15.2929 9.70701C15.2168 9.63089 15.1227 9.49494 15.0643 9.0612C15.0022 8.5987 15 7.97099 15 6.99991V1.77241ZM1.75061 10.9999C1.752 10.2782 1.75669 9.6129 1.77253 8.99991H5.00003C5.97111 8.99991 6.59882 8.99778 7.06133 8.9356C7.49506 8.87729 7.63101 8.78314 7.70714 8.70701C7.78326 8.63089 7.87741 8.49494 7.93572 8.0612C7.99791 7.5987 8.00003 6.97099 8.00003 5.99991C8.00003 5.44762 8.44774 4.99991 9.00003 4.99991C9.55231 4.99991 10 5.44762 10 5.99991L10 6.06574C10.0001 6.95223 10.0001 7.71604 9.91789 8.3277C9.82976 8.98321 9.63101 9.61157 9.12135 10.1212C8.61169 10.6309 7.98334 10.8296 7.32782 10.9178C6.71618 11 5.9524 11 5.06595 10.9999H5.06593H5.06586L5.00003 10.9999H1.75061ZM1.81204 15.9999C1.77806 15.3946 1.7627 14.7297 1.75575 13.9999H6.00003C6.55231 13.9999 7.00003 14.4476 7.00003 14.9999C7.00003 15.5522 6.55231 15.9999 6.00003 15.9999H1.81204ZM16 22.1879C15.3947 22.2219 14.7298 22.2372 14 22.2442V15.9999H10C9.44774 15.9999 9.00003 15.5522 9.00003 14.9999C9.00003 14.4476 9.44774 13.9999 10 13.9999H22.2443C22.2374 14.7297 22.222 15.3946 22.188 15.9999H16V22.1879Z',
  d10: 'M14 3L14 11H18',
  d11: 'M21 15H15M10 15H15M15 15V21',
  d12: 'M3 10H9V6',
  d13: 'M3 15H7',
  d14: 'M21 3H3V21H21V3Z',
  d15: 'M14.75 2.25V10.25H18V11.75H14C13.5858 11.75 13.25 11.4142 13.25 11V2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V9.25H8.25V6H9.75V10C9.75 10.4142 9.41421 10.75 9 10.75H2.25V14.25H7V15.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H14.25V15.75H10V14.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H14.75Z',
  d16: 'M21.75 15.75H15.75V21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V15.75Z',
} as const;

export const IconMazeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-stroke-rounded IconMazeStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMazeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-duotone-rounded IconMazeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMazeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-twotone-rounded IconMazeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMazeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-solid-rounded IconMazeSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMazeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-bulk-rounded IconMazeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMazeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-stroke-sharp IconMazeStrokeSharp"
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconMazeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maze-solid-sharp IconMazeSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMaze: TheIconSelfPack = {
  name: 'Maze',
  StrokeRounded: IconMazeStrokeRounded,
  DuotoneRounded: IconMazeDuotoneRounded,
  TwotoneRounded: IconMazeTwotoneRounded,
  SolidRounded: IconMazeSolidRounded,
  BulkRounded: IconMazeBulkRounded,
  StrokeSharp: IconMazeStrokeSharp,
  SolidSharp: IconMazeSolidSharp,
};