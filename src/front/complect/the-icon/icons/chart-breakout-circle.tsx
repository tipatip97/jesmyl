import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 3.38462V2M19.6306 4.36369L20.6081 3.38462M20.6176 8H22',
  d2: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2',
  d3: 'M11.8527 8.00684H15.0748C15.4536 8.00684 15.7607 8.32175 15.7607 8.71022V12.0354M2.76074 13.9583C5.03399 14.2241 10.7383 13.5137 14.8923 8.88963',
  d4: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d5: 'M12.0637 8.00684H15.2857C15.6646 8.00684 15.9717 8.32175 15.9717 8.71022V12.0354M2.97168 13.9583C5.24492 14.2241 10.9492 13.5137 15.1033 8.88963',
  d6: 'M16.999 11.9704C16.999 12.5227 16.5513 12.9704 15.999 12.9704C15.8307 12.9704 15.6722 12.9288 15.533 12.8554C15.5101 12.8433 15.4896 12.8273 15.4712 12.809L14.1681 11.5114C14.0604 11.4041 13.8895 11.3947 13.7689 11.4872C11.3507 13.3419 8.86808 14.2442 6.80124 14.6632C5.38064 14.9512 4.15688 15.0112 3.28245 14.9984C2.99884 14.9943 2.75132 14.9825 2.54502 14.9683C2.37973 14.9569 2.25896 14.81 2.27483 14.6451L2.40895 13.2515C2.42482 13.0866 2.57132 12.9661 2.73667 12.9766C2.89838 12.9869 3.09119 12.9954 3.31154 12.9986C4.06969 13.0097 5.1477 12.9577 6.40388 12.7031C8.1415 12.3508 10.2209 11.6114 12.276 10.1066C12.4225 9.99939 12.4363 9.78692 12.3077 9.65883L11.15 8.50604C11.1293 8.48541 11.1114 8.462 11.0986 8.43568C11.0348 8.30399 10.999 8.15619 10.999 8.00001C10.999 7.44773 11.4467 7.00001 11.999 7.00001L14.0532 7.00001C14.4775 6.99993 14.8891 6.99985 15.2286 7.04514C15.6104 7.0961 16.0471 7.2202 16.4106 7.58101C16.7751 7.94284 16.9015 8.37929 16.9533 8.76183C16.9992 9.10024 16.9991 9.51023 16.999 9.93069L16.999 11.9704Z',
  d7: 'M15.75 1.25C16.3023 1.25 16.75 1.69772 16.75 2.25V3.63462C16.75 4.1869 16.3023 4.63462 15.75 4.63462C15.1977 4.63462 14.75 4.1869 14.75 3.63462V2.25C14.75 1.69772 15.1977 1.25 15.75 1.25ZM21.0647 2.92695C21.4555 3.31717 21.456 3.95033 21.0658 4.34116L20.0883 5.32024C19.698 5.71107 19.0649 5.71157 18.674 5.32135C18.2832 4.93113 18.2827 4.29797 18.6729 3.90714L19.6505 2.92807C20.0407 2.53723 20.6738 2.53673 21.0647 2.92695ZM19.3676 8.25C19.3676 7.69772 19.8153 7.25 20.3676 7.25H21.75C22.3023 7.25 22.75 7.69772 22.75 8.25C22.75 8.80228 22.3023 9.25 21.75 9.25H20.3676C19.8153 9.25 19.3676 8.80228 19.3676 8.25Z',
  d8: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 11.4603 21.233 11.0227 21.7727 11.0227C22.3125 11.0227 22.75 11.4603 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.5397 1.25 12.9773 1.68754 12.9773 2.22727C12.9773 2.76701 12.5397 3.20455 12 3.20455Z',
  d9: 'M16 4V2M19 4.99273L20.6081 3.38462M20 8H22',
  d10: 'M20 13C20 17.9706 15.9706 22 11 22C6.02944 22 2 17.9706 2 13C2 8.02944 6.02944 4 11 4',
  d11: 'M2.46533 15.0167C5.27236 14.9398 10.9694 13.9811 14.6957 9.40942M10.9846 9.00586L15.0121 9.0061V12.9746',
  d12: 'M17.5002 1.5V3.5H15.5002V1.5H17.5002ZM21.8155 3.59172L20.2074 5.19984L18.7931 3.78562L20.4013 2.17751L21.8155 3.59172ZM22.5002 8.5H20.5002V6.5H22.5002V8.5Z',
  d13: 'M11.5002 4.5C7.08197 4.5 3.50024 8.08172 3.50024 12.5C3.50024 16.9183 7.08197 20.5 11.5002 20.5C15.9185 20.5 19.5002 16.9183 19.5002 12.5H21.5002C21.5002 18.0228 17.0231 22.5 11.5002 22.5C5.9774 22.5 1.50024 18.0228 1.50024 12.5C1.50024 6.97715 5.9774 2.5 11.5002 2.5V4.5Z',
  d14: 'M16.4994 7.5V12.4705H14.4994V11.0801C12.3702 13.0219 9.90992 14.1047 7.84275 14.7098C6.49574 15.104 5.29746 15.301 4.43321 15.3998C4.00042 15.4493 3.64952 15.4743 3.40332 15.487C3.28017 15.4933 3.18306 15.4966 3.11483 15.4982C3.0807 15.4991 3.05378 15.4995 3.03442 15.4998L3.01109 15.5L3.00376 15.5L3.00119 15.5L3.00018 15.5C2.99975 15.5 2.99935 15.5 2.99935 14.5C2.99935 13.5 2.99901 13.5 2.99871 13.5C2.99778 13.5 2.99869 13.5 2.99871 13.5L3.01045 13.4999C3.02164 13.4998 3.04019 13.4995 3.06576 13.4989C3.11691 13.4976 3.19607 13.495 3.30046 13.4896C3.50934 13.4789 3.8186 13.457 4.20612 13.4127C4.98249 13.324 6.06546 13.146 7.28095 12.7903C9.19781 12.2292 11.3997 11.2399 13.2621 9.50005L11.4994 9.50008L11.4993 7.50008L16.4994 7.5Z',
};

export const IconChartBreakoutCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-stroke-rounded IconChartBreakoutCircleStrokeRounded"
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

export const IconChartBreakoutCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-duotone-rounded IconChartBreakoutCircleDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-twotone-rounded IconChartBreakoutCircleTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-solid-rounded IconChartBreakoutCircleSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconChartBreakoutCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-bulk-rounded IconChartBreakoutCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-stroke-sharp IconChartBreakoutCircleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconChartBreakoutCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-breakout-circle-solid-sharp IconChartBreakoutCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfChartBreakoutCircle: TheIconSelfPack = {
  name: 'ChartBreakoutCircle',
  StrokeRounded: IconChartBreakoutCircleStrokeRounded,
  DuotoneRounded: IconChartBreakoutCircleDuotoneRounded,
  TwotoneRounded: IconChartBreakoutCircleTwotoneRounded,
  SolidRounded: IconChartBreakoutCircleSolidRounded,
  BulkRounded: IconChartBreakoutCircleBulkRounded,
  StrokeSharp: IconChartBreakoutCircleStrokeSharp,
  SolidSharp: IconChartBreakoutCircleSolidSharp,
};