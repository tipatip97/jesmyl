import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C12.9022 2 13.675 2.70814 14.5875 3.99725C15.4939 5.2777 15.9471 5.91793 15.6683 6.45896C15.3895 7 14.5733 7 12.9409 7H11.0591C9.42669 7 8.6105 7 8.33169 6.45896C8.05287 5.91793 8.50607 5.2777 9.41248 3.99725C10.325 2.70814 11.0978 2 12 2Z',
  d2: 'M5.82894 14H18.1711C18.9276 14 19.3059 14 19.4509 13.7508C19.5958 13.5017 19.4091 13.1765 19.0359 12.526C18.9358 12.3515 18.8353 12.1773 18.7346 12.0031C18.1692 11.0254 17.8866 10.5365 17.4209 10.2683C16.9552 10 16.3876 10 15.2523 10H8.74773C7.61242 10 7.04477 10 6.57911 10.2683C6.11344 10.5365 5.83076 11.0254 5.2654 12.0031C5.16471 12.1773 5.06424 12.3515 4.96412 12.526C4.59085 13.1765 4.40422 13.5017 4.54914 13.7508C4.69406 14 5.07236 14 5.82894 14Z',
  d3: 'M8.24328 22H15.7567C19.3099 22 21.0866 22 21.7671 20.8828C22.1944 20.1813 22.0132 19.3288 21.392 18.0487C21.1514 17.5529 21.0311 17.305 20.7877 17.1525C20.5442 17 20.2499 17 19.6613 17H4.33871C3.75012 17 3.45582 17 3.21234 17.1525C2.96886 17.305 2.84856 17.5529 2.60797 18.0487C1.98681 19.3288 1.80564 20.1813 2.23293 20.8828C2.91344 22 4.69006 22 8.24328 22Z',
  d4: 'M10.2403 1.93101C10.7531 1.51812 11.3327 1.25 12.0005 1.25C12.6683 1.25 13.2479 1.51812 13.7607 1.93101C14.2616 2.3343 14.7304 2.9003 15.2001 3.56392C15.6228 4.16094 16.027 4.73173 16.2451 5.17292C16.4762 5.64016 16.6379 6.21565 16.3355 6.80253C16.0282 7.39887 15.4454 7.59445 14.9259 7.67378C14.426 7.7501 13.7663 7.75006 13.0023 7.75L12.9414 7.75H11.0595L10.9986 7.75C10.2346 7.75006 9.57496 7.7501 9.07507 7.67378C8.55551 7.59445 7.9728 7.39887 7.66548 6.80253C7.36304 6.21565 7.52476 5.64016 7.75582 5.17292C7.974 4.73173 8.37811 4.16095 8.80081 3.56392C9.27056 2.9003 9.73933 2.3343 10.2403 1.93101Z',
  d5: 'M15.2872 9.25C15.8252 9.24998 16.2822 9.24997 16.661 9.28711C17.0642 9.32663 17.4377 9.41232 17.7954 9.61838C18.153 9.82436 18.4141 10.1039 18.6498 10.4323C18.871 10.7405 19.0988 11.1343 19.3665 11.5974L19.3665 11.5975C19.4675 11.7722 19.6096 12.0187 19.7102 12.194C19.8762 12.483 20.0409 12.7698 20.137 13.0175C20.2421 13.2882 20.3438 13.7076 20.0993 14.1279C19.8546 14.5487 19.4381 14.6675 19.1519 14.7105C18.888 14.7502 18.5554 14.7501 18.2187 14.75H5.7816C5.44493 14.7501 5.11225 14.7502 4.84836 14.7105C4.56219 14.6675 4.14572 14.5487 3.90098 14.1279C3.65653 13.7076 3.75824 13.2882 3.86327 13.0175C3.95942 12.7698 4.12414 12.4829 4.29006 12.194C4.39067 12.0187 4.53274 11.7722 4.63375 11.5975C4.90152 11.1344 5.12925 10.7405 5.35052 10.4323C5.58625 10.1039 5.84731 9.82436 6.20488 9.61838C6.56258 9.41232 6.93613 9.32663 7.33927 9.28711C7.71813 9.24997 8.17506 9.24998 8.71305 9.25H8.71308H15.2872H15.2872Z',
  d6: 'M19.6933 16.25C19.9604 16.25 20.2162 16.2499 20.4344 16.2733C20.6806 16.2998 20.9364 16.3604 21.1862 16.5169C21.6186 16.7876 21.8757 17.3225 22.0673 17.7213C22.6845 18.9933 23.0632 20.1975 22.4081 21.2729C21.8896 22.1242 20.9881 22.4533 19.9461 22.6028C18.9195 22.75 17.5436 22.75 15.8215 22.75H15.8215H8.17948H8.17946C6.45736 22.75 5.08144 22.75 4.0548 22.6028C3.01285 22.4533 2.11136 22.1242 1.59287 21.2729C0.937786 20.1975 1.31642 18.9933 1.93368 17.7213C2.12524 17.3225 2.38234 16.7876 2.81474 16.5169C3.06455 16.3604 3.32034 16.2998 3.56654 16.2733C3.78472 16.2499 4.04059 16.25 4.30769 16.25L19.6933 16.25Z',
  d7: 'M2 20H22L19.7778 16H4.22222L2 20Z',
  d8: 'M18.1111 13L16.4444 10H7.55556L5.88889 13H18.1111Z',
  d9: 'M12 2L9.22222 7H14.7778L12 2Z',
  d10: 'M12 0.455566L16.0524 7.74991H7.94756L12 0.455566Z',
  d11: 'M7.11423 9.24991H16.8857L19.3857 13.7499H4.61423L7.11423 9.24991Z',
  d12: 'M3.7809 15.2499H20.2191L23.2746 20.7499H0.725342L3.7809 15.2499Z',
} as const;

export const IconPyramidStructure01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-stroke-rounded IconPyramidStructure01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-duotone-rounded IconPyramidStructure01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-twotone-rounded IconPyramidStructure01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-solid-rounded IconPyramidStructure01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPyramidStructure01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-bulk-rounded IconPyramidStructure01BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidStructure01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-stroke-sharp IconPyramidStructure01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPyramidStructure01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-structure-01-solid-sharp IconPyramidStructure01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPyramidStructure01: TheIconSelfPack = {
  name: 'PyramidStructure01',
  StrokeRounded: IconPyramidStructure01StrokeRounded,
  DuotoneRounded: IconPyramidStructure01DuotoneRounded,
  TwotoneRounded: IconPyramidStructure01TwotoneRounded,
  SolidRounded: IconPyramidStructure01SolidRounded,
  BulkRounded: IconPyramidStructure01BulkRounded,
  StrokeSharp: IconPyramidStructure01StrokeSharp,
  SolidSharp: IconPyramidStructure01SolidSharp,
};