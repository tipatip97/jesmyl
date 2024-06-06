import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 17C6.89543 17 6 17.8954 6 19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19C10 17.8954 9.10457 17 8 17Z',
  d2: 'M12.874 8C12.9562 7.68038 13 7.3453 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 7.3453 5.04375 7.68038 5.12602 8',
  d3: 'M14.751 3.00765C14.8334 3.00257 14.9166 3 15.0003 3C17.2095 3 19.0003 4.79086 19.0003 7C19.0003 7.3453 18.9566 7.68038 18.8743 8',
  d4: 'M16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17Z',
  d5: 'M14 19H10M18 19C18.2471 19 18.4484 19.0074 18.5551 19C19.9616 18.9022 21.1151 17.8548 21.3411 16.4809C21.3583 16.3767 21.3695 16.2552 21.3918 16.0123L21.9288 10.1811C22.0227 9.16124 22.0697 8.65132 21.7684 8.32566C21.4672 8 20.9485 8 19.9112 8H4.08879C3.05147 8 2.53281 8 2.23155 8.32566C1.9303 8.65132 1.97726 9.16124 2.07117 10.1811L2.60816 16.0123C2.63053 16.2552 2.64171 16.3767 2.65885 16.4809C2.88486 17.8548 4.11626 18.8948 5.52272 18.9926C5.62936 19 5.75291 19 6 19',
  d6: 'M12 4.35417C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 7.3453 18.9562 7.68038 18.874 8H12.874C12.9562 7.68038 13 7.3453 13 7C13 5.98555 12.6224 5.05931 12 4.35417Z',
  d7: 'M2.07117 10.1811L2.60816 16.0123C2.63053 16.2552 2.64171 16.3767 2.65885 16.4809C2.88486 17.8548 4.11626 18.8948 5.52272 18.9926C5.62936 19 5.75291 19 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19H14C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19C18.0907 19 18.1752 19.001 18.2512 19.0019C18.3821 19.0034 18.4876 19.0047 18.5551 19C19.9616 18.9022 21.1151 17.8548 21.3411 16.4809C21.3583 16.3767 21.3695 16.2552 21.3918 16.0123L21.9288 10.1811C22.0227 9.16124 22.0697 8.65132 21.7684 8.32566C21.4672 8 20.9485 8 19.9112 8H4.08879C3.05147 8 2.53281 8 2.23155 8.32566C1.9303 8.65132 1.97726 9.16124 2.07117 10.1811Z',
  d8: 'M7.99951 20.25C8.68987 20.25 9.24951 19.6904 9.24951 19C9.24951 18.3096 8.68987 17.75 7.99951 17.75C7.30916 17.75 6.74951 18.3096 6.74951 19C6.74951 19.6904 7.30916 20.25 7.99951 20.25ZM10.7495 19C10.7495 20.5188 9.51829 21.75 7.99951 21.75C6.48073 21.75 5.24951 20.5188 5.24951 19C5.24951 17.4812 6.48073 16.25 7.99951 16.25C9.51829 16.25 10.7495 17.4812 10.7495 19Z',
  d9: 'M15.9995 20.25C16.6899 20.25 17.2495 19.6904 17.2495 19C17.2495 18.3096 16.6899 17.75 15.9995 17.75C15.3092 17.75 14.7495 18.3096 14.7495 19C14.7495 19.6904 15.3092 20.25 15.9995 20.25ZM18.7495 19C18.7495 20.5188 17.5183 21.75 15.9995 21.75C14.4807 21.75 13.2495 20.5188 13.2495 19C13.2495 17.4812 14.4807 16.25 15.9995 16.25C17.5183 16.25 18.7495 17.4812 18.7495 19Z',
  d10: 'M19.9582 7.25C20.4363 7.24995 20.8692 7.24991 21.2176 7.29766C21.5977 7.34976 22.001 7.47276 22.3189 7.81637C22.6383 8.1616 22.7275 8.57385 22.7459 8.95713C22.7626 9.30603 22.7232 9.73342 22.68 10.2023L22.0854 16.5767L22.0811 16.6026C21.8003 18.3098 20.379 19.6062 18.6479 19.7451C18.7144 19.5082 18.75 19.2582 18.75 19C18.75 17.4812 17.5188 16.25 16 16.25C14.4812 16.25 13.25 17.4812 13.25 19C13.25 19.2589 13.2858 19.5095 13.3527 19.747L10.6478 19.7455C10.7144 19.5084 10.75 19.2584 10.75 19C10.75 17.4812 9.51878 16.25 8 16.25C6.48122 16.25 5.25 17.4812 5.25 19C5.25 19.2529 5.28413 19.4977 5.34802 19.7303C3.67584 19.5603 2.19923 18.308 1.9187 16.6026L1.31984 10.2023C1.27661 9.73339 1.2372 9.30601 1.25393 8.95714C1.27231 8.57385 1.36154 8.1616 1.68089 7.81637C1.99875 7.47276 2.40212 7.34976 2.7822 7.29766C3.1306 7.24991 3.56349 7.24995 4.04159 7.25H19.9582Z',
  d11: 'M9.00032 2.25C6.80957 2.25 4.96521 3.7331 4.4165 5.75004H13.5841C13.0354 3.7331 11.1911 2.25 9.00032 2.25Z',
  d12: 'M15.0005 2.25C14.4294 2.25 13.8818 2.35081 13.3745 2.5356C14.2488 3.39233 14.8725 4.50384 15.1255 5.74999H19.5843C19.0356 3.73307 17.1913 2.25 15.0005 2.25Z',
  d13: 'M14.0001 19H10.0001M18.0001 19L21 18.9926L22.0001 8H2L3 19H6.00012',
  d14: 'M8 20.25C8.69036 20.25 9.25 19.6904 9.25 19C9.25 18.3096 8.69036 17.75 8 17.75C7.30964 17.75 6.75 18.3096 6.75 19C6.75 19.6904 7.30964 20.25 8 20.25ZM10.75 19C10.75 20.5188 9.51878 21.75 8 21.75C6.48122 21.75 5.25 20.5188 5.25 19C5.25 17.4812 6.48122 16.25 8 16.25C9.51878 16.25 10.75 17.4812 10.75 19Z',
  d15: 'M16 20.25C16.6904 20.25 17.25 19.6904 17.25 19C17.25 18.3096 16.6904 17.75 16 17.75C15.3096 17.75 14.75 18.3096 14.75 19C14.75 19.6904 15.3096 20.25 16 20.25ZM18.75 19C18.75 20.5188 17.5188 21.75 16 21.75C14.4812 21.75 13.25 20.5188 13.25 19C13.25 17.4812 14.4812 16.25 16 16.25C17.5188 16.25 18.75 17.4812 18.75 19Z',
  d16: 'M18.2153 19.7519V19C18.2153 18.3096 16.6593 16.75 15.9735 16.75C15.2877 16.75 13.7318 18.3096 13.7318 19V19.75H10.268V19C10.268 18.3096 8.7121 16.75 8.02629 16.75C7.34049 16.75 5.78453 18.3096 5.78453 19V19.75H2.37887L1.25 7.25H22.75L21.6211 19.7409L18.2153 19.7519Z',
  d17: 'M4.41602 5.75H13.5836C13.0349 3.73308 11.1906 2.25 8.99983 2.25C6.80908 2.25 4.96473 3.73308 4.41602 5.75Z',
  d18: 'M15.125 5.75H19.5839C19.0351 3.73308 17.1908 2.25 15 2.25C14.4289 2.25 13.8813 2.35081 13.374 2.5356C14.2483 3.39233 14.8721 4.50385 15.125 5.75Z',
};

export const IconMining01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-stroke-rounded IconMining01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMining01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-duotone-rounded IconMining01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMining01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-twotone-rounded IconMining01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMining01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-solid-rounded IconMining01SolidRounded"
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

export const IconMining01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-bulk-rounded IconMining01BulkRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconMining01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-stroke-sharp IconMining01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMining01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mining-01-solid-sharp IconMining01SolidSharp"
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
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMining01: TheIconSelfPack = {
  name: 'Mining01',
  StrokeRounded: IconMining01StrokeRounded,
  DuotoneRounded: IconMining01DuotoneRounded,
  TwotoneRounded: IconMining01TwotoneRounded,
  SolidRounded: IconMining01SolidRounded,
  BulkRounded: IconMining01BulkRounded,
  StrokeSharp: IconMining01StrokeSharp,
  SolidSharp: IconMining01SolidSharp,
};