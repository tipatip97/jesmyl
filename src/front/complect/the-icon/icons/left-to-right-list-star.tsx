import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5.5L21 5.5',
  d2: 'M12 12L21 12',
  d3: 'M12 18.5L21 18.5',
  d4: 'M8 5.5H3M4.04167 8L6.95833 3M6.95833 8L4.04167 3',
  d5: 'M8 18.5H3M4.04167 21L6.95833 16M6.95833 21L4.04167 16',
  d6: 'M11 5.5C11 4.94772 11.4477 4.5 12 4.5L21 4.5C21.5523 4.5 22 4.94772 22 5.5C22 6.05229 21.5523 6.5 21 6.5L12 6.5C11.4477 6.5 11 6.05228 11 5.5Z',
  d7: 'M11 12C11 11.4477 11.4477 11 12 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L12 13C11.4477 13 11 12.5523 11 12Z',
  d8: 'M11 18.5C11 17.9477 11.4477 17.5 12 17.5L21 17.5C21.5523 17.5 22 17.9477 22 18.5C22 19.0523 21.5523 19.5 21 19.5L12 19.5C11.4477 19.5 11 19.0523 11 18.5Z',
  d9: 'M3.5378 2.13614C4.01485 1.85786 4.62717 2.019 4.90545 2.49605L5.5 3.51528L6.09455 2.49605C6.37283 2.019 6.98515 1.85786 7.4622 2.13614C7.93926 2.41442 8.10039 3.02674 7.82211 3.50379L7.24104 4.49992H8C8.55228 4.49992 9 4.94763 9 5.49992C9 6.0522 8.55228 6.49992 8 6.49992H7.24104L7.82211 7.49605C8.10039 7.9731 7.93926 8.58542 7.4622 8.8637C6.98515 9.14198 6.37283 8.98084 6.09455 8.50379L5.5 7.48455L4.90545 8.50379C4.62717 8.98084 4.01485 9.14198 3.5378 8.8637C3.06074 8.58542 2.89961 7.9731 3.17789 7.49605L3.75896 6.49992H3C2.44772 6.49992 2 6.0522 2 5.49992C2 4.94763 2.44772 4.49992 3 4.49992H3.75896L3.17789 3.50379C2.89961 3.02674 3.06074 2.41442 3.5378 2.13614Z',
  d10: 'M3.5378 15.1361C4.01485 14.8579 4.62717 15.019 4.90545 15.496L5.5 16.5153L6.09455 15.496C6.37283 15.019 6.98515 14.8579 7.4622 15.1361C7.93926 15.4144 8.10039 16.0267 7.82211 16.5038L7.24104 17.4999H8C8.55228 17.4999 9 17.9476 9 18.4999C9 19.0522 8.55228 19.4999 8 19.4999H7.24104L7.82211 20.496C8.10039 20.9731 7.93926 21.5854 7.4622 21.8637C6.98515 22.142 6.37283 21.9808 6.09455 21.5038L5.5 20.4846L4.90545 21.5038C4.62717 21.9808 4.01485 22.142 3.5378 21.8637C3.06074 21.5854 2.89961 20.9731 3.17789 20.496L3.75896 19.4999H3C2.44772 19.4999 2 19.0522 2 18.4999C2 17.9476 2.44772 17.4999 3 17.4999H3.75896L3.17789 16.5038C2.89961 16.0267 3.06074 15.4144 3.5378 15.1361Z',
  d11: 'M11 5.5L21 5.5',
  d12: 'M11 12L21 12',
  d13: 'M11 18.5L21 18.5',
  d14: 'M21.001 6.5L11.001 6.5L11.001 4.5L21.001 4.5L21.001 6.5Z',
  d15: 'M21.001 13L11.001 13L11.001 11L21.001 11L21.001 13Z',
  d16: 'M21.001 19.5L11.001 19.5L11.001 17.5L21.001 17.5L21.001 19.5Z',
  d17: 'M5.5 6.86638L4.6895 8.25581L3.39383 7.5L4.19422 6.1279H3V4.6279H4.19422L3.39383 3.25581L4.6895 2.5L5.5 3.88943L6.3105 2.5L7.60617 3.25581L6.80578 4.6279H8V6.1279H6.80578L7.60617 7.5L6.3105 8.25581L5.5 6.86638Z',
  d18: 'M5.50098 20.1105L4.69048 21.4999L3.39481 20.7441L4.1952 19.372H3.00098V17.872H4.1952L3.39481 16.4999L4.69048 15.7441L5.50098 17.1336L6.31148 15.7441L7.60714 16.4999L6.80675 17.872H8.00098V19.372H6.80675L7.60714 20.7441L6.31148 21.4999L5.50098 20.1105Z',
} as const;

export const IconLeftToRightListStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-stroke-rounded IconLeftToRightListStarStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLeftToRightListStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-duotone-rounded IconLeftToRightListStarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLeftToRightListStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-twotone-rounded IconLeftToRightListStarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-solid-rounded IconLeftToRightListStarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconLeftToRightListStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-bulk-rounded IconLeftToRightListStarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLeftToRightListStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-stroke-sharp IconLeftToRightListStarStrokeSharp"
    >
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLeftToRightListStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-star-solid-sharp IconLeftToRightListStarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfLeftToRightListStar: TheIconSelfPack = {
  name: 'LeftToRightListStar',
  StrokeRounded: IconLeftToRightListStarStrokeRounded,
  DuotoneRounded: IconLeftToRightListStarDuotoneRounded,
  TwotoneRounded: IconLeftToRightListStarTwotoneRounded,
  SolidRounded: IconLeftToRightListStarSolidRounded,
  BulkRounded: IconLeftToRightListStarBulkRounded,
  StrokeSharp: IconLeftToRightListStarStrokeSharp,
  SolidSharp: IconLeftToRightListStarSolidSharp,
};