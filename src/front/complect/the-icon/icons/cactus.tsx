import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.1509 15H10.8491C8.79675 15 7.77055 15 7.2641 15.5967C6.75765 16.1934 7.03957 17.0703 7.6034 18.8242L7.69704 19.1154C8.14071 20.4955 8.36255 21.1855 8.95349 21.5878L8.97997 21.6055C9.57752 22 10.385 22 12 22C13.615 22 14.4225 22 15.02 21.6055L15.0465 21.5878C15.6375 21.1855 15.8593 20.4955 16.303 19.1154L16.3966 18.8242C16.9604 17.0703 17.2423 16.1934 16.7359 15.5967C16.2294 15 15.2033 15 13.1509 15Z',
  d2: 'M9.90373 15L8.55745 7.93548C8.16693 5.8863 9.81696 4 12 4C14.183 4 15.8331 5.88629 15.4426 7.93548L14.0963 15',
  d3: 'M12 15L12 12',
  d4: 'M15.5 6L17 5M8.5 6L7 5M12 4V2M15.5 10L17 11M8.5 10L7 11',
  d5: 'M13.2038 14.375C14.1847 14.375 14.9944 14.375 15.6191 14.4558C16.2611 14.5389 16.8732 14.7248 17.3074 15.2364C17.7602 15.7698 17.8021 16.3975 17.7089 17.0138C17.6221 17.5872 17.3951 18.2931 17.1297 19.1184L17.1297 19.1184C16.9197 19.7717 16.6141 20.7223 16.4091 21.1609C16.1888 21.6323 15.9107 22.0316 15.4683 22.3328C15.029 22.6228 14.5082 22.7661 13.9682 22.8217C13.4511 22.875 12.8131 22.875 12.039 22.875H12.039H11.9604H11.9604C11.1863 22.875 10.5483 22.875 10.0313 22.8217C9.49122 22.7661 9.00135 22.6435 8.56205 22.3535C8.11958 22.0523 7.81066 21.6323 7.59032 21.1609C7.38527 20.7223 7.07972 19.7717 6.86973 19.1185C6.60434 18.2931 6.37735 17.5872 6.29055 17.0138C6.19728 16.3975 6.23925 15.7698 6.692 15.2364C7.1262 14.7248 7.73827 14.5389 8.38035 14.4558C9.00505 14.375 9.81474 14.375 10.7957 14.375H10.7957H13.2037H13.2038Z',
  d6: 'M12 11.125C12.5523 11.125 13 11.5727 13 12.125L13 15.125C13 15.6773 12.5523 16.125 12 16.125C11.4477 16.125 11 15.6773 11 15.125L11 12.125C11 11.5727 11.4477 11.125 12 11.125Z',
  d7: 'M12.0001 1.125C12.5524 1.125 13.0001 1.57272 13.0001 2.125V3.23315C14.0533 3.46469 14.9682 4.05346 15.5984 4.85764L16.4454 4.29295C16.9049 3.9866 17.5258 4.11077 17.8322 4.5703C18.1385 5.02983 18.0143 5.6507 17.5548 5.95705L16.4345 6.70393C16.5242 7.19593 16.5264 7.71569 16.425 8.24768L16.2065 9.39409L17.5548 10.2929C18.0143 10.5993 18.1385 11.2202 17.8322 11.6797C17.5258 12.1392 16.9049 12.2634 16.4454 11.9571L15.8001 11.5268L15.0787 15.3122C14.9753 15.8547 14.4517 16.2107 13.9092 16.1073C13.3667 16.0039 13.0107 15.4803 13.1141 14.9378L14.4603 7.87328C14.7228 6.49609 13.6138 5.125 12.0001 5.125C10.3864 5.125 9.27742 6.49609 9.53988 7.87328L10.8862 14.9378C10.9895 15.4803 10.6336 16.0039 10.091 16.1073C9.54852 16.2107 9.0249 15.8547 8.92152 15.3122L8.20014 11.5268L7.55481 11.9571C7.09528 12.2634 6.47441 12.1392 6.16806 11.6797C5.8617 11.2202 5.98588 10.5993 6.44541 10.2929L7.7937 9.39409L7.57523 8.24768C7.47385 7.7157 7.47603 7.19593 7.56573 6.70393L6.44541 5.95705C5.98588 5.6507 5.8617 5.02983 6.16806 4.5703C6.47441 4.11077 7.09528 3.9866 7.55481 4.29295L8.40185 4.85765C9.03204 4.05346 9.94691 3.46469 11.0001 3.23315V2.125C11.0001 1.57272 11.4478 1.125 12.0001 1.125Z',
  d8: 'M13.0001 2.12506C13.0001 1.57278 12.5524 1.12506 12.0001 1.12506C11.4478 1.12506 11.0001 1.57278 11.0001 2.12506V3.23321C9.94691 3.46475 9.03204 4.05352 8.40185 4.85771L7.55481 4.29301C7.09528 3.98666 6.47441 4.11083 6.16806 4.57036C5.8617 5.02989 5.98588 5.65076 6.44541 5.95711L7.56573 6.70399C7.47603 7.19599 7.47385 7.71576 7.57523 8.24775L7.7937 9.39415L6.44541 10.293C5.98588 10.5994 5.8617 11.2202 6.16806 11.6798C6.47441 12.1393 7.09528 12.2635 7.55481 11.9571L8.20014 11.5269L8.92152 15.3123C9.0249 15.8548 9.54852 16.2108 10.091 16.1074C10.6336 16.004 10.9895 15.4804 10.8862 14.9379L9.53988 7.87334C9.27742 6.49615 10.3864 5.12506 12.0001 5.12506C13.6138 5.12506 14.7228 6.49615 14.4603 7.87334L13.1141 14.9379C13.0107 15.4804 13.3667 16.004 13.9092 16.1074C14.4517 16.2108 14.9753 15.8548 15.0787 15.3123L15.8001 11.5269L16.4454 11.9571C16.9049 12.2635 17.5258 12.1393 17.8322 11.6798C18.1385 11.2202 18.0143 10.5994 17.5548 10.293L16.2065 9.39415L16.425 8.24774C16.5264 7.71576 16.5242 7.19599 16.4345 6.70399L17.5548 5.95711C18.0143 5.65076 18.1385 5.02989 17.8322 4.57036C17.5258 4.11083 16.9049 3.98666 16.4454 4.29301L15.5984 4.85771C14.9682 4.05352 14.0533 3.46475 13.0001 3.23321V2.12506ZM13 12.1251C13 11.5728 12.5523 11.1251 12 11.1251C11.4477 11.1251 11 11.5728 11 12.1251V15.1251C11 15.6773 11.4477 16.1251 12 16.1251C12.5523 16.1251 13 15.6773 13 15.1251V12.1251Z',
  d9: 'M9.48933 15.0024L8.52592 7.96576C8.23888 5.86932 9.87504 4.00244 11.9994 4.00244C14.1237 4.00244 15.7599 5.86932 15.4728 7.96576L14.5095 15.0024',
  d10: 'M11.9775 15.0024V12.0024',
  d11: 'M15.0117 6.50244L17.0198 5.00244M8.98755 6.50244L6.97949 5.00244M11.9996 4.50244V2.00244M15.0117 9.50244L17.0198 11.0024M8.98755 9.50244L6.97949 11.0024',
  d12: 'M17.4005 15.0171L6.59949 15.0171C6.53281 15.0171 6.48466 15.0806 6.50293 15.1445L8.46312 21.9975H15.5313L17.4971 15.1446C17.5154 15.0807 17.4672 15.0171 17.4005 15.0171Z',
  d13: 'M5.90124 14.0484C6.04297 13.8605 6.26466 13.75 6.50001 13.75H17.5C17.7353 13.75 17.957 13.8605 18.0988 14.0484C18.2405 14.2362 18.2858 14.4798 18.2211 14.706L16.0657 22.25H7.93428L5.77886 14.706C5.71421 14.4798 5.75952 14.2362 5.90124 14.0484Z',
  d14: 'M11.0004 2.86121C9.93895 3.1018 9.02811 3.71699 8.40301 4.55196L7.60039 3.95L6.40039 5.55L7.57993 6.43465C7.49743 6.88821 7.48389 7.36355 7.55001 7.84843L7.70333 8.97279L6.40039 9.95L7.60039 11.55L8.01261 11.2408L8.50956 14.8851L10.4912 14.6149L9.53167 7.57821C9.32767 6.0822 10.4905 4.75 12.0004 4.75C13.5102 4.75 14.6731 6.0822 14.4691 7.57821L13.5096 14.6149L15.4912 14.8851L15.9882 11.2408L16.4004 11.55L17.6004 9.95L16.2974 8.97279L16.4508 7.84843C16.5169 7.36355 16.5034 6.88821 16.4209 6.43465L17.6004 5.55L16.4004 3.95L15.5978 4.55196C14.9727 3.71699 14.0618 3.1018 13.0004 2.86121V1.75H11.0004V2.86121ZM13.0004 11.75V14.75H11.0004V11.75H13.0004Z',
};

export const IconCactusStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-stroke-rounded IconCactusStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCactusDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-duotone-rounded IconCactusDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconCactusTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-twotone-rounded IconCactusTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCactusSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-solid-rounded IconCactusSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCactusBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-bulk-rounded IconCactusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCactusStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-stroke-sharp IconCactusStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCactusSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cactus-solid-sharp IconCactusSolidSharp"
    >
      <path 
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

export const iconPackOfCactus: TheIconSelfPack = {
  name: 'Cactus',
  StrokeRounded: IconCactusStrokeRounded,
  DuotoneRounded: IconCactusDuotoneRounded,
  TwotoneRounded: IconCactusTwotoneRounded,
  SolidRounded: IconCactusSolidRounded,
  BulkRounded: IconCactusBulkRounded,
  StrokeSharp: IconCactusStrokeSharp,
  SolidSharp: IconCactusSolidSharp,
};