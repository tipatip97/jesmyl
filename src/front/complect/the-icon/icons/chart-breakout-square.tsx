import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 3.38462V2M19.6306 4.36369L20.6081 3.38462M20.6176 8H22',
  d2: 'M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2',
  d3: 'M11.8517 8.00684H15.0738C15.4527 8.00684 15.7598 8.32175 15.7598 8.71022V12.0354M2.75977 13.9583C5.03301 14.2241 10.7373 13.5137 14.8914 8.88963',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d5: 'M11.8527 8.00684H15.0748C15.4536 8.00684 15.7607 8.32175 15.7607 8.71022V12.0354M2.76074 13.9583C5.03399 14.2241 10.7383 13.5137 14.8923 8.88963',
  d6: 'M12.0642 8.00684H15.2862C15.6651 8.00684 15.9722 8.32175 15.9722 8.71022V12.0354M2.58301 13.9524C5.12655 14.2235 10.9497 13.5137 15.1038 8.88963',
  d7: 'M15.75 1.25C16.3023 1.25 16.75 1.69772 16.75 2.25V3.63462C16.75 4.1869 16.3023 4.63462 15.75 4.63462C15.1977 4.63462 14.75 4.1869 14.75 3.63462V2.25C14.75 1.69772 15.1977 1.25 15.75 1.25ZM21.0647 2.92695C21.4555 3.31717 21.456 3.95033 21.0658 4.34116L20.0883 5.32024C19.698 5.71107 19.0649 5.71157 18.674 5.32135C18.2832 4.93113 18.2827 4.29797 18.6729 3.90714L19.6505 2.92807C20.0407 2.53723 20.6738 2.53673 21.0647 2.92695ZM19.3676 8.25C19.3676 7.69772 19.8153 7.25 20.3676 7.25H21.75C22.3023 7.25 22.75 7.69772 22.75 8.25C22.75 8.80228 22.3023 9.25 21.75 9.25H20.3676C19.8153 9.25 19.3676 8.80228 19.3676 8.25Z',
  d8: 'M11.9269 1.25L12 1.25C12.5397 1.25 12.9773 1.68754 12.9773 2.22727C12.9773 2.76701 12.5397 3.20455 12 3.20455C9.66892 3.20455 8.01892 3.20662 6.76855 3.37473C5.54629 3.53906 4.85324 3.84574 4.34949 4.34949C3.84574 4.85324 3.53906 5.54629 3.37473 6.76855C3.20662 8.01892 3.20455 9.66892 3.20455 12C3.20455 14.3311 3.20662 15.9811 3.37473 17.2315C3.53906 18.4537 3.84574 19.1468 4.34949 19.6505C4.85324 20.1543 5.54629 20.4609 6.76855 20.6253C8.01892 20.7934 9.66892 20.7955 12 20.7955C14.3311 20.7955 15.9811 20.7934 17.2315 20.6253C18.4537 20.4609 19.1468 20.1543 19.6505 19.6505C20.1543 19.1468 20.4609 18.4537 20.6253 17.2315C20.7934 15.9811 20.7955 14.3311 20.7955 12C20.7955 11.4603 21.233 11.0227 21.7727 11.0227C22.3125 11.0227 22.75 11.4603 22.75 12V12.0731C22.75 14.3145 22.75 16.0961 22.5624 17.4919C22.3689 18.9309 21.96 20.1051 21.0326 21.0326C20.1051 21.96 18.9309 22.3689 17.4919 22.5624C16.0961 22.75 14.3145 22.75 12.0731 22.75H11.9269C9.68549 22.75 7.90386 22.75 6.50811 22.5624C5.06912 22.3689 3.89485 21.96 2.96742 21.0326C2.03999 20.1051 1.63108 18.9309 1.43761 17.4919C1.24996 16.0961 1.24998 14.3145 1.25 12.0731V11.9269C1.24998 9.68548 1.24996 7.90385 1.43761 6.50811C1.63108 5.06912 2.03999 3.89485 2.96742 2.96742C3.89485 2.03999 5.06912 1.63108 6.50811 1.43761C7.90385 1.24996 9.68548 1.24998 11.9269 1.25Z',
  d9: 'M17.001 11.9704C17.001 12.5227 16.5532 12.9704 16.001 12.9704C15.8327 12.9704 15.6741 12.9288 15.535 12.8554C15.5121 12.8433 15.4915 12.8273 15.4732 12.809L14.1701 11.5114C14.0623 11.4041 13.8915 11.3947 13.7709 11.4872C11.3527 13.3419 8.87003 14.2442 6.80319 14.6632C5.38259 14.9512 4.15883 15.0112 3.2844 14.9984C3.00079 14.9943 2.75328 14.9825 2.54697 14.9683C2.38168 14.9569 2.26091 14.81 2.27679 14.6451L2.4109 13.2515C2.42677 13.0866 2.57328 12.9661 2.73863 12.9766C2.90034 12.9869 3.09314 12.9954 3.31349 12.9986C4.07164 13.0097 5.14966 12.9577 6.40584 12.7031C8.14345 12.3508 10.2228 11.6114 12.278 10.1066C12.4244 9.99939 12.4383 9.78692 12.3096 9.65883L11.152 8.50604C11.1312 8.48541 11.1134 8.462 11.1006 8.43568C11.0368 8.30399 11.001 8.15619 11.001 8.00001C11.001 7.44773 11.4487 7.00001 12.001 7.00001L14.0551 7.00001C14.4794 6.99993 14.8911 6.99985 15.2305 7.04514C15.6124 7.0961 16.049 7.2202 16.4125 7.58101C16.7771 7.94284 16.9035 8.37929 16.9553 8.76183C17.0011 9.10024 17.0011 9.51023 17.001 9.93069L17.001 11.9704Z',
  d10: 'M16 4V2M19 4.99273L20.6081 3.38462M20 8H22',
  d11: 'M20 12V22H2V4H12',
  d12: 'M2.00977 15.0033C4.82596 14.9261 11.0022 13.9628 14.75 9.35254M10.9133 8.99414H15.0308V12.9536',
  d13: 'M17.5 1.5V3.5H15.5V1.5H17.5ZM21.8152 3.59172L20.2071 5.19984L18.7929 3.78562L20.401 2.17751L21.8152 3.59172ZM22.5 8.5H20.5V6.5H22.5V8.5Z',
  d14: 'M1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H12.5V4.5H3.5V20.5H19.5V11.5H21.5V21.5C21.5 22.0523 21.0523 22.5 20.5 22.5H2.5C1.94772 22.5 1.5 22.0523 1.5 21.5V3.5Z',
  d15: 'M16.5001 7.5V12.4705H14.5001V11.0638C12.3196 13.0235 9.74605 14.1091 7.5814 14.7132C6.17366 15.1061 4.91487 15.3022 4.00602 15.4005C3.55088 15.4497 3.1815 15.4745 2.92265 15.4871C2.79318 15.4934 2.69119 15.4966 2.61978 15.4983C2.58407 15.4991 2.55598 15.4995 2.53591 15.4998L2.51186 15.5L2.50443 15.5L2.50188 15.5C2.50147 15.5 2.5001 15.5 2.5001 14.5C2.5001 13.5 2.49979 13.5 2.49951 13.5L2.5007 13.5L2.51334 13.4999C2.52571 13.4998 2.5459 13.4995 2.57355 13.4988C2.62884 13.4975 2.71387 13.4949 2.8256 13.4895C3.04918 13.4786 3.37902 13.4566 3.79106 13.4121C4.61659 13.3228 5.76405 13.144 7.04381 12.7868C9.06377 12.2231 11.355 11.2322 13.2468 9.50005L11.5001 9.50008L11.5001 7.50008L16.5001 7.5Z',
};

export const IconChartBreakoutSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-stroke-rounded IconChartBreakoutSquareStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChartBreakoutSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-duotone-rounded IconChartBreakoutSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconChartBreakoutSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-twotone-rounded IconChartBreakoutSquareTwotoneRounded"
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

export const IconChartBreakoutSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-solid-rounded IconChartBreakoutSquareSolidRounded"
    >
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-bulk-rounded IconChartBreakoutSquareBulkRounded"
    >
      <path 
        opacity="0.5" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-stroke-sharp IconChartBreakoutSquareStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-square-solid-sharp IconChartBreakoutSquareSolidSharp"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartBreakoutSquare: TheIconSelfPack = {
  name: 'ChartBreakoutSquare',
  StrokeRounded: IconChartBreakoutSquareStrokeRounded,
  DuotoneRounded: IconChartBreakoutSquareDuotoneRounded,
  TwotoneRounded: IconChartBreakoutSquareTwotoneRounded,
  SolidRounded: IconChartBreakoutSquareSolidRounded,
  BulkRounded: IconChartBreakoutSquareBulkRounded,
  StrokeSharp: IconChartBreakoutSquareStrokeSharp,
  SolidSharp: IconChartBreakoutSquareSolidSharp,
};