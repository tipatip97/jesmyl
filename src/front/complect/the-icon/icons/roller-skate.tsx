import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.19492 6.02368C5.31124 3.67541 9.43957 2.78906 10.9298 3.04156C11.0938 4.51869 11.9861 8.27344 13.9343 9.88314C15.8824 11.4928 21.5544 11.5 21.9593 13.6517C22.2035 14.9494 21.3319 16 19.7887 16H4.94536C3.80012 16 3.2275 16 2.65133 15.4575C2.07516 14.9149 2.05322 14.5614 2.00932 13.8543C1.92348 12.4718 2.44907 11.2679 2.82834 10.5934C3.56137 9.2898 3.49695 7.5 3.19492 6.02368Z',
  d2: 'M12.5 8.5L11.5 9',
  d3: 'M11.5 6L10 6.5',
  d4: 'M6 16C6 13.4362 4.7934 11.1977 3 10',
  d5: 'M6 19H10M14 19H18',
  d6: 'M10.9298 3.04156C9.43958 2.78906 5.31125 3.67541 3.19493 6.02368C3.28818 7.22786 3.15608 9.2118 3.07837 10.0533C4.82847 11.2632 6.00001 13.4737 6.00001 16L19.7888 16C21.332 16 22.2035 14.9494 21.9593 13.6517C21.7255 12.409 19.7346 11.8816 17.7189 11.3476C16.2447 10.9571 14.7572 10.5631 13.9343 9.88314C11.9861 8.27344 11.0938 4.51869 10.9298 3.04156Z',
  d7: 'M3.19492 6.02344C3.45706 7.30476 3.54021 8.82222 3.07836 10.053M3.07836 10.053C4.82846 11.263 6 13.4734 6 15.9998H6.03516H4.94536C3.80012 15.9998 3.2275 15.9998 2.65133 15.4572C2.07516 14.9147 2.05322 14.5612 2.00932 13.8541C1.92348 12.4716 2.44907 11.2677 2.82834 10.5932C2.92516 10.421 3.00807 10.2403 3.07836 10.053Z',
  d8: 'M4 17.8749C3.44772 17.8749 3 18.3226 3 18.8749C3 19.4272 3.44772 19.8749 4 19.8749C4.55228 19.8749 5 19.4272 5 18.8749C5 18.3226 4.55228 17.8749 4 17.8749ZM1 18.8749C1 17.218 2.34315 15.8749 4 15.8749C5.65685 15.8749 7 17.218 7 18.8749C7 20.5317 5.65685 21.8749 4 21.8749C2.34315 21.8749 1 20.5317 1 18.8749Z',
  d9: 'M12 17.8749C11.4477 17.8749 11 18.3226 11 18.8749C11 19.4272 11.4477 19.8749 12 19.8749C12.5523 19.8749 13 19.4272 13 18.8749C13 18.3226 12.5523 17.8749 12 17.8749ZM9 18.8749C9 17.218 10.3431 15.8749 12 15.8749C13.6569 15.8749 15 17.218 15 18.8749C15 20.5317 13.6569 21.8749 12 21.8749C10.3431 21.8749 9 20.5317 9 18.8749Z',
  d10: 'M20 17.8749C19.4477 17.8749 19 18.3226 19 18.8749C19 19.4272 19.4477 19.8749 20 19.8749C20.5523 19.8749 21 19.4272 21 18.8749C21 18.3226 20.5523 17.8749 20 17.8749ZM17 18.8749C17 17.218 18.3431 15.8749 20 15.8749C21.6569 15.8749 23 17.218 23 18.8749C23 20.5317 21.6569 21.8749 20 21.8749C18.3431 21.8749 17 20.5317 17 18.8749Z',
  d11: 'M5 18.8749C5 18.3226 5.44772 17.8749 6 17.8749H10C10.5523 17.8749 11 18.3226 11 18.8749C11 19.4272 10.5523 19.8749 10 19.8749H6C5.44772 19.8749 5 19.4272 5 18.8749ZM13 18.8749C13 18.3226 13.4477 17.8749 14 17.8749H18C18.5523 17.8749 19 18.3226 19 18.8749C19 19.4272 18.5523 19.8749 18 19.8749H14C13.4477 19.8749 13 19.4272 13 18.8749Z',
  d12: 'M7.10112 2.71137C8.61583 2.22281 10.1643 2.01901 11.1175 2.17876C11.5476 2.25085 11.8774 2.59622 11.9255 3.02512C11.9535 3.27464 12.0073 3.60832 12.0893 3.99431C12.1385 4.22609 12.1632 4.34198 12.1179 4.43476C12.0727 4.52755 11.9694 4.57807 11.7626 4.6791L9.67084 5.70144C9.2987 5.88333 9.14446 6.33245 9.32634 6.7046C9.50822 7.07674 9.95735 7.23098 10.3295 7.0491L12.5069 5.98489C12.576 5.95116 12.6589 5.98487 12.6857 6.05687C12.7478 6.22398 12.813 6.3887 12.881 6.55013C12.9856 6.79829 13.0379 6.92236 13.0027 7.02924C12.9674 7.13611 12.8559 7.20202 12.6331 7.33384L11.1184 8.22973C10.7618 8.4406 10.6438 8.90056 10.8546 9.25708C11.0655 9.6136 11.5255 9.73168 11.882 9.52081L13.4256 8.60781C13.6352 8.48383 13.74 8.42184 13.8428 8.43544C13.9456 8.44903 14.0401 8.54574 14.2291 8.73916C14.3215 8.83375 14.4161 8.92099 14.5129 9.00011C14.8366 9.26464 15.3873 9.51205 16.1621 9.75806C16.6851 9.9241 18.0623 10.2878 18.6371 10.4384C19.474 10.6666 20.357 10.9341 21.0665 11.3064C21.7585 11.6694 22.5112 12.2509 22.6936 13.2095C22.8628 14.0988 22.6517 14.9798 22.0558 15.6383C21.4646 16.2917 20.5882 16.6249 19.6119 16.6249L4.96048 16.6251C3.9755 16.627 3.04337 16.6287 2.19386 15.8375C1.83393 15.5023 1.57658 15.1576 1.4296 14.7292C1.30557 14.3677 1.27939 13.9427 1.261 13.644C1.16042 12.0416 1.77196 10.6846 2.18497 9.95811C2.72341 9.01096 2.71997 7.57342 2.43762 6.20827C2.37542 5.90751 2.46133 5.59541 2.66911 5.36737C3.86008 4.06024 5.56238 3.20769 7.10112 2.71137ZM4.52931 11.3318C4.30863 11.0388 4.19829 10.8923 4.02748 10.9122C3.85668 10.932 3.78157 11.1029 3.63137 11.4446C3.35083 12.0828 3.16339 12.7548 3.21168 13.5241C3.23534 13.9011 3.24943 14.0177 3.28037 14.1079C3.29562 14.1523 3.33053 14.2407 3.53367 14.4299C3.67213 14.5589 3.78055 14.6096 3.95784 14.6428C4.19782 14.6877 4.51259 14.6915 5.10562 14.6915H5.21661C5.54502 14.6915 5.70922 14.6915 5.79931 14.577C5.88939 14.4626 5.85279 14.3112 5.77959 14.0084C5.53726 13.0061 5.10456 12.0955 4.52931 11.3318Z',
  d13: 'M11.1175 2.17876C10.1643 2.01901 8.61583 2.22281 7.10112 2.71137C5.56238 3.20769 3.86008 4.06024 2.66911 5.36737C2.46133 5.59541 2.37542 5.90751 2.43762 6.20827C2.71997 7.57342 2.72341 9.01096 2.18497 9.95811C1.77196 10.6846 1.16042 12.0416 1.261 13.644C1.27939 13.9427 1.30557 14.3677 1.4296 14.7292C1.57658 15.1576 1.83393 15.5023 2.19386 15.8375C3.04337 16.6287 3.9755 16.627 4.96048 16.6251L19.6119 16.6249C20.5882 16.6249 21.4646 16.2917 22.0558 15.6383C22.6517 14.9798 22.8628 14.0988 22.6936 13.2095C22.5112 12.2509 21.7585 11.6694 21.0665 11.3064C20.357 10.9341 19.474 10.6666 18.6371 10.4384C18.0623 10.2878 16.6851 9.9241 16.1621 9.75806C15.3873 9.51205 14.8366 9.26464 14.5129 9.00011C13.7627 8.38701 13.1428 7.28642 12.6857 6.05687C12.2374 4.85111 11.9971 3.66304 11.9255 3.02512C11.8774 2.59622 11.5476 2.25085 11.1175 2.17876ZM3.21168 13.5241C3.16339 12.7548 3.35083 12.0828 3.63137 11.4446C3.78157 11.1029 3.85668 10.932 4.02748 10.9122C4.19829 10.8923 4.30863 11.0388 4.52931 11.3318C5.10456 12.0955 5.53726 13.0061 5.77959 14.0084C5.85279 14.3112 5.88939 14.4626 5.79931 14.577C5.70922 14.6915 5.54502 14.6915 5.21661 14.6915H5.10562C4.51259 14.6915 4.19782 14.6877 3.95784 14.6428C3.78055 14.6096 3.67213 14.5589 3.53367 14.4299C3.33053 14.2407 3.29562 14.1523 3.28037 14.1079C3.24943 14.0177 3.23534 13.9011 3.21168 13.5241Z',
  d14: 'M12.1972 4.46362L9.67084 5.69836C9.2987 5.88024 9.14446 6.32937 9.32634 6.70151C9.50822 7.07366 9.95735 7.2279 10.3295 7.04601L12.6354 5.91904C12.4539 5.41411 12.3089 4.91587 12.1972 4.46362ZM13.1069 7.05052L11.1184 8.22665C10.7618 8.43751 10.6438 8.89747 10.8546 9.254C11.0655 9.61052 11.5255 9.72859 11.882 9.51772L13.8809 8.33545C13.5969 7.9665 13.3381 7.5291 13.1069 7.05052Z',
  d15: 'M12.5 8.5L10.5 10',
  d16: 'M11.5 6L9 7',
  d17: 'M7.06464 2.84433C8.59781 2.34438 10.1373 2.14664 11.0551 2.30214L11.6128 2.39664L11.6752 2.95881C11.7278 3.43268 11.8655 4.18328 12.102 5.02372L9.64648 6.33904L10.3548 7.66129L12.5861 6.46604C12.7535 6.88857 12.9409 7.29665 13.1478 7.67483L11.0243 9.42085L11.977 10.5795L14.0042 8.91256C14.1352 9.05711 14.2711 9.18864 14.412 9.30501C14.7822 9.61086 15.3847 9.87838 16.1824 10.1344C16.7236 10.3082 17.2961 10.4598 17.8877 10.6164C18.163 10.6893 18.4425 10.7634 18.7248 10.8412C19.5811 11.0772 20.4607 11.3481 21.16 11.719C21.8458 12.0828 22.5311 12.6348 22.6964 13.5131C22.8568 14.3653 22.6555 15.1956 22.1032 15.8127C21.5544 16.4258 20.7309 16.75 19.7888 16.75L4.81817 16.7501C3.79141 16.7514 2.93251 16.7524 2.13719 16.0035C1.78894 15.6756 1.55406 15.3522 1.42051 14.9586C1.30474 14.6175 1.28295 14.2622 1.26363 13.9473L1.26077 13.9009C1.16212 12.312 1.76284 10.9582 2.17461 10.2259C2.77109 9.1651 2.75235 7.6023 2.46015 6.17405L2.38424 5.80298L2.6378 5.52162C3.81634 4.21392 5.51303 3.35029 7.06464 2.84433ZM3.48206 10.9611C3.1353 11.5778 2.68485 12.6318 2.75787 13.808C2.78151 14.1888 2.79644 14.3456 2.84094 14.4767C2.87338 14.5723 2.93756 14.6969 3.16548 14.9116C3.48987 15.217 3.73826 15.2501 4.94535 15.2501H5.96523C5.78704 13.3396 4.93594 11.6617 3.69105 10.5388C3.62874 10.6829 3.55926 10.8238 3.48206 10.9611Z',
  d18: 'M4 16.2502C2.48122 16.2502 1.25 17.4815 1.25 19.0002C1.25 20.519 2.48122 21.7502 4 21.7502C5.25878 21.7502 6.32002 20.9045 6.64648 19.7502H9.35352C9.67998 20.9045 10.7412 21.7502 12 21.7502C13.2588 21.7502 14.32 20.9045 14.6465 19.7502H17.3535C17.68 20.9045 18.7412 21.7502 20 21.7502C21.5188 21.7502 22.75 20.519 22.75 19.0002C22.75 17.4815 21.5188 16.2502 20 16.2502C18.7412 16.2502 17.68 17.096 17.3535 18.2502H14.6465C14.32 17.096 13.2588 16.2502 12 16.2502C10.7412 16.2502 9.67998 17.096 9.35352 18.2502H6.64648C6.32002 17.096 5.25878 16.2502 4 16.2502ZM2.75 19.0002C2.75 18.3099 3.30964 17.7502 4 17.7502C4.69036 17.7502 5.25 18.3099 5.25 19.0002C5.25 19.6906 4.69036 20.2502 4 20.2502C3.30964 20.2502 2.75 19.6906 2.75 19.0002ZM10.75 19.0002C10.75 18.3099 11.3096 17.7502 12 17.7502C12.6904 17.7502 13.25 18.3099 13.25 19.0002C13.25 19.6906 12.6904 20.2502 12 20.2502C11.3096 20.2502 10.75 19.6906 10.75 19.0002ZM20 17.7502C19.3096 17.7502 18.75 18.3099 18.75 19.0002C18.75 19.6906 19.3096 20.2502 20 20.2502C20.6904 20.2502 21.25 19.6906 21.25 19.0002C21.25 18.3099 20.6904 17.7502 20 17.7502Z',
} as const;

export const IconRollerSkateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-stroke-rounded IconRollerSkateStrokeRounded"
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
      <circle 
        cx="4" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconRollerSkateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-duotone-rounded IconRollerSkateDuotoneRounded"
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
      <circle 
        cx="4" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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

export const IconRollerSkateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-twotone-rounded IconRollerSkateTwotoneRounded"
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
      <circle 
        cx="4" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRollerSkateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-solid-rounded IconRollerSkateSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollerSkateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-bulk-rounded IconRollerSkateBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollerSkateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-stroke-sharp IconRollerSkateStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="4" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="20" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRollerSkateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="roller-skate-solid-sharp IconRollerSkateSolidSharp"
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

export const iconPackOfRollerSkate: TheIconSelfPack = {
  name: 'RollerSkate',
  StrokeRounded: IconRollerSkateStrokeRounded,
  DuotoneRounded: IconRollerSkateDuotoneRounded,
  TwotoneRounded: IconRollerSkateTwotoneRounded,
  SolidRounded: IconRollerSkateSolidRounded,
  BulkRounded: IconRollerSkateBulkRounded,
  StrokeSharp: IconRollerSkateStrokeSharp,
  SolidSharp: IconRollerSkateSolidSharp,
};