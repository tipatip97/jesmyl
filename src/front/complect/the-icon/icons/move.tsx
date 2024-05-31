import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 3V9',
  d2: 'M3 12H9',
  d3: 'M21 12H15',
  d4: 'M12 21V14.5',
  d5: 'M9 6L10.705 4.04824C11.3155 3.34941 11.6207 3 12 3C12.3793 3 12.6845 3.34941 13.295 4.04824L15 6',
  d6: 'M15 18L13.295 19.9518C12.6845 20.6506 12.3793 21 12 21C11.6207 21 11.3155 20.6506 10.705 19.9518L9 18',
  d7: 'M18 9L19.9518 10.705C20.6506 11.3155 21 11.6207 21 12C21 12.3793 20.6506 12.6845 19.9518 13.295L18 15',
  d8: 'M6 15L4.04824 13.295C3.34941 12.6845 3 12.3793 3 12C3 11.6207 3.34941 11.3155 4.04824 10.705L6 9',
  d9: 'M12 3V9M12 3C11.6207 3 11.3155 3.34941 10.705 4.04824L9 6M12 3C12.3793 3 12.6845 3.34941 13.295 4.04824L15 6',
  d10: 'M12 21V14.5M12 21C12.3793 21 12.6845 20.6506 13.295 19.9518L15 18M12 21C11.6207 21 11.3155 20.6506 10.705 19.9518L9 18',
  d11: 'M3 12H9M3 12C3 12.3793 3.34941 12.6845 4.04824 13.295L6 15M3 12C3 11.6207 3.34941 11.3155 4.04824 10.705L6 9M21 12H15M21 12C21 11.6207 20.6506 11.3155 19.9518 10.705L18 9M21 12C21 12.3793 20.6506 12.6845 19.9518 13.295L18 15',
  d12: 'M8.43518 5.50658C8.16267 5.81853 8.19464 6.29233 8.50659 6.56483C8.64888 6.68913 8.82483 6.75008 9 6.75001H10.4C10.6828 6.75001 10.8243 6.75001 10.9121 6.83788C11 6.92575 11 7.06717 11 7.35001V9.00013C11 9.55241 11.4477 10.0001 12 10.0001C12.5523 10.0001 13 9.55241 13 9.00013V7.35001C13 7.06717 13 6.92575 13.0879 6.83788C13.1757 6.75001 13.3172 6.75001 13.6 6.75001H15.0008C15.1757 6.7499 15.3514 6.68895 15.4934 6.56483C15.8054 6.29233 15.8374 5.81853 15.5648 5.50658L13.8297 3.52028C13.5506 3.20068 13.293 2.90574 13.0542 2.69718C12.7949 2.47076 12.4527 2.25 12 2.25C11.5474 2.25 11.2051 2.47076 10.9458 2.69718C10.707 2.90574 10.4495 3.20068 10.1703 3.52028L8.43518 5.50658Z',
  d13: 'M8.43518 18.4934C8.16267 18.1815 8.19464 17.7077 8.50659 17.4352C8.64888 17.3109 8.82483 17.2499 9 17.25H10.4C10.6828 17.25 10.8243 17.25 10.9121 17.1621C11 17.0743 11 16.9328 11 16.65V14.9999C11 14.4476 11.4477 13.9999 12 13.9999C12.5523 13.9999 13 14.4476 13 14.9999V16.65C13 16.9328 13 17.0743 13.0879 17.1621C13.1757 17.25 13.3172 17.25 13.6 17.25H15.0008C15.1757 17.2501 15.3514 17.3111 15.4934 17.4352C15.8054 17.7077 15.8374 18.1815 15.5648 18.4934L13.8297 20.4797C13.5506 20.7993 13.293 21.0943 13.0542 21.3028C12.7949 21.5292 12.4527 21.75 12 21.75C11.5474 21.75 11.2051 21.5292 10.9458 21.3028C10.707 21.0943 10.4495 20.7993 10.1703 20.4797L8.43518 18.4934Z',
  d14: 'M18.4934 8.43518C18.1815 8.16267 17.7077 8.19464 17.4352 8.50659C17.3109 8.64888 17.2499 8.82483 17.25 9L17.25 10.4C17.25 10.6828 17.25 10.8243 17.1621 10.9121C17.0743 11 16.9328 11 16.65 11L14.9999 11C14.4476 11 13.9999 11.4477 13.9999 12C13.9999 12.5523 14.4476 13 14.9999 13L16.65 13C16.9328 13 17.0743 13 17.1621 13.0879C17.25 13.1757 17.25 13.3172 17.25 13.6L17.25 15.0008C17.2501 15.1757 17.3111 15.3514 17.4352 15.4934C17.7077 15.8054 18.1815 15.8374 18.4934 15.5648L20.4797 13.8297C20.7993 13.5506 21.0943 13.293 21.3028 13.0542C21.5292 12.7949 21.75 12.4527 21.75 12C21.75 11.5474 21.5292 11.2051 21.3028 10.9458C21.0943 10.707 20.7993 10.4495 20.4797 10.1703L18.4934 8.43518Z',
  d15: 'M5.50658 8.43518C5.81853 8.16267 6.29233 8.19464 6.56483 8.50659C6.68913 8.64888 6.75008 8.82483 6.75001 9L6.75001 10.4C6.75001 10.6828 6.75001 10.8243 6.83788 10.9121C6.92575 11 7.06717 11 7.35001 11L9.00013 11C9.55241 11 10.0001 11.4477 10.0001 12C10.0001 12.5523 9.55241 13 9.00013 13L7.35001 13C7.06717 13 6.92575 13 6.83788 13.0879C6.75001 13.1757 6.75001 13.3172 6.75001 13.6L6.75001 15.0008C6.7499 15.1757 6.68895 15.3514 6.56483 15.4934C6.29233 15.8054 5.81853 15.8374 5.50658 15.5648L3.52028 13.8297C3.20067 13.5506 2.90574 13.293 2.69718 13.0542C2.47076 12.7949 2.25 12.4527 2.25 12C2.25 11.5474 2.47076 11.2051 2.69718 10.9458C2.90574 10.707 3.20068 10.4495 3.52028 10.1703L5.50658 8.43518Z',
  d16: 'M8.99939 12.0084H3.72509M5.99416 9.00723L3 12.0084L6.00293 15.0091M14.9815 12.0084H20.3504M17.9753 8.97756L21 12.0084L18.002 14.9961M11.9979 14.4984V20.3629M8.99939 17.9802L11.9979 20.998L15.0029 18.003M11.9816 8.97756V3.59176M14.9815 6.0037L11.9816 3.00195L9.03376 6.0037',
  d17: 'M12.0001 2L15.7072 5.70702L14.293 7.12125L13.0001 5.82838V9.4142H11.0001V5.82838L9.70717 7.12125L8.29297 5.70702L12.0001 2Z',
  d18: 'M13.0001 14.0858V18.1715L14.293 16.8786L15.7072 18.2928L12.0001 22L8.29297 18.2928L9.7072 16.8786L11.0001 18.1715V14.0858H13.0001Z',
  d19: 'M18.1706 11.0001L16.8777 9.70717L18.2919 8.29297L21.999 12.0001L18.2919 15.7072L16.8777 14.293L18.1706 13.0001H14.5848V11.0001H18.1706Z',
  d20: 'M5.82846 13.0001L7.12131 14.293L5.70711 15.7072L2 12.0001L5.7071 8.29297L7.12133 9.70717L5.82839 11.0001H9.41421V13.0001H5.82846Z',
} as const;

export const IconMoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-stroke-rounded IconMoveStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-duotone-rounded IconMoveDuotoneRounded"
    >
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-twotone-rounded IconMoveTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-solid-rounded IconMoveSolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-bulk-rounded IconMoveBulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-stroke-sharp IconMoveStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="move-solid-sharp IconMoveSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMove: TheIconSelfPack = {
  name: 'Move',
  StrokeRounded: IconMoveStrokeRounded,
  DuotoneRounded: IconMoveDuotoneRounded,
  TwotoneRounded: IconMoveTwotoneRounded,
  SolidRounded: IconMoveSolidRounded,
  BulkRounded: IconMoveBulkRounded,
  StrokeSharp: IconMoveStrokeSharp,
  SolidSharp: IconMoveSolidSharp,
};