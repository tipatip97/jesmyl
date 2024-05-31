import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 8V6.48477C4 3.77748 4 2.42383 4.79089 2.07276C5.58178 1.72168 6.52338 2.65735 8.40659 4.5287L19.2835 15.3371C21.2721 17.3131 22.2664 18.3012 21.9383 19.1506C21.6102 20 20.2343 20 17.4825 20H16M13 22C13 21.0572 13 20.5858 12.7071 20.2929C12.4142 20 11.9428 20 11 20H6.60556C5.37729 20 4.76315 20 4.38158 19.6036C4 19.2072 4 18.5692 4 17.2932V13C4 12.0572 4 11.5858 3.70711 11.2929C3.41421 11 2.94281 11 2 11',
  d2: 'M4 15H5C6.88562 15 7.82843 15 8.41421 15.5858C9 16.1716 9 17.1144 9 19V20',
  d3: 'M8.40659 4.5287L19.2835 15.3371C21.2721 17.3131 22.2664 18.3012 21.9383 19.1506C21.6102 20 20.2343 20 17.4825 20H8C8.55229 20 9 19.5523 9 19C9 17.1144 9 16.1716 8.41421 15.5858C7.82843 15 6.88562 15 5 15H4V6.48477C4 3.77749 4 2.42383 4.79089 2.07276C5.58178 1.72168 6.52338 2.65735 8.40659 4.5287Z',
  d4: 'M5.5904 3.27161C6.08848 3.64229 6.73421 4.28037 7.70002 5.2401L18.5769 16.0485C19.5946 17.0598 20.2782 17.7424 20.6818 18.2735C20.8913 18.5491 20.9631 18.7041 20.9866 18.7783C20.9191 18.8114 20.7718 18.8629 20.4735 18.9063C19.8342 18.9995 18.8913 19.0021 17.4808 19.0021H15.9983C15.446 19.0021 14.9983 19.4498 14.9983 20.0021C14.9983 20.5544 15.446 21.0021 15.9983 21.0021L17.5653 21.0021C18.8692 21.0021 19.9604 21.0022 20.7617 20.8854C21.547 20.7711 22.494 20.485 22.8695 19.513C23.2376 18.5598 22.7594 17.7018 22.2741 17.0633C21.7756 16.4073 20.9896 15.6263 20.0444 14.6872L9.05083 3.76286L9.05082 3.76286C8.15948 2.87705 7.41191 2.13413 6.78445 1.66717C6.17501 1.21361 5.31874 0.745665 4.38347 1.16083C3.46772 1.56733 3.21085 2.50021 3.10645 3.26135C2.99822 4.05032 2.99826 5.12132 2.9983 6.40696L2.99831 8.00207C2.99831 8.55435 3.44602 9.00207 3.99831 9.00207C4.55059 9.00207 4.99831 8.55435 4.99831 8.00207V6.48684C4.99831 5.10075 5.00063 4.16932 5.08789 3.53315C5.12559 3.25834 5.17068 3.10768 5.2028 3.02937C5.2758 3.0613 5.39928 3.12938 5.5904 3.27161Z',
  d5: 'M1.99999 10.0039L2.05439 10.0039C2.47846 10.0038 2.89059 10.0037 3.2305 10.0494C3.61371 10.101 4.05099 10.2265 4.4142 10.5897C4.77742 10.9529 4.90294 11.3902 4.95446 11.7734C5.00016 12.1133 5.00008 12.5254 4.99999 12.9495L4.99999 14.2539H5.052C5.95047 14.2539 6.6997 14.2539 7.29448 14.3339C7.92227 14.4183 8.48907 14.6039 8.94454 15.0594C9.40001 15.5149 9.58568 16.0817 9.67009 16.7095C9.75005 17.3042 9.75003 18.0535 9.75 18.9519V19.0039L11.0544 19.0039C11.4785 19.0038 11.8906 19.0037 12.2305 19.0494C12.6137 19.101 13.051 19.2265 13.4142 19.5897C13.7774 19.9529 13.9029 20.3902 13.9545 20.7734C14.0002 21.1133 14.0001 21.5254 14 21.9495L14 22.0039C14 22.5562 13.5523 23.0039 13 23.0039C12.4477 23.0039 12 22.5562 12 22.0039C12 21.5042 11.9979 21.2301 11.9723 21.0399L11.9713 21.0326L11.964 21.0316C11.7738 21.006 11.4997 21.0039 11 21.0039L6.54475 21.0039C5.98314 21.004 5.46241 21.0041 5.03771 20.9448C4.56493 20.8787 4.06693 20.7226 3.66111 20.301C3.26043 19.8848 3.11712 19.3832 3.05595 18.9105C2.99987 18.4771 2.99992 17.9432 2.99998 17.3554L2.99999 13.0039C2.99999 12.5042 2.99786 12.2301 2.97229 12.0399L2.97129 12.0326L2.96401 12.0316C2.77382 12.006 2.49966 12.0039 1.99999 12.0039C1.4477 12.0039 0.999986 11.5562 0.999986 11.0039C0.999986 10.4516 1.4477 10.0039 1.99999 10.0039Z',
  d6: 'M3.99414 14.9902H8.99576V19.9866',
  d7: 'M1.99609 10.9938H3.9899V19.9884H12.9952V21.9922M3.9899 7.98578V2.00318C3.9899 1.99427 4.00068 1.98982 4.00698 1.99611L21.9941 19.9701C22.0004 19.9764 21.996 19.9872 21.987 19.9872H16.0002',
  d8: 'M2.5 2.50003C2.5 2.09557 2.74364 1.73093 3.11732 1.57615C3.49099 1.42137 3.92111 1.50692 4.20711 1.79292L22.2071 19.7929C22.4931 20.0789 22.5787 20.509 22.4239 20.8827C22.2691 21.2564 21.9045 21.5 21.5 21.5H15.5V19.5H19.0858L4.5 4.91424V8.50003H2.5V2.50003Z',
  d9: 'M1.5 10.5H4.5V14.5H8.50003C9.05231 14.5 9.50003 14.9477 9.50003 15.5V19.5H13.5V22.5H11.5V21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V12.5H1.5V10.5Z',
} as const;

export const IconRightTriangleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-stroke-rounded IconRightTriangleStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconRightTriangleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-duotone-rounded IconRightTriangleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconRightTriangleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-twotone-rounded IconRightTriangleTwotoneRounded"
    >
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconRightTriangleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-solid-rounded IconRightTriangleSolidRounded"
    >
      <path 
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

export const IconRightTriangleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-bulk-rounded IconRightTriangleBulkRounded"
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

export const IconRightTriangleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-stroke-sharp IconRightTriangleStrokeSharp"
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

export const IconRightTriangleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="right-triangle-solid-sharp IconRightTriangleSolidSharp"
    >
      <path 
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

export const iconPackOfRightTriangle: TheIconSelfPack = {
  name: 'RightTriangle',
  StrokeRounded: IconRightTriangleStrokeRounded,
  DuotoneRounded: IconRightTriangleDuotoneRounded,
  TwotoneRounded: IconRightTriangleTwotoneRounded,
  SolidRounded: IconRightTriangleSolidRounded,
  BulkRounded: IconRightTriangleBulkRounded,
  StrokeSharp: IconRightTriangleStrokeSharp,
  SolidSharp: IconRightTriangleSolidSharp,
};