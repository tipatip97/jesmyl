import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 8C8.42317 8.31737 9.19208 8.70974 9.28942 9.34118C9.29507 9.37783 9.2989 9.41481 9.30089 9.45195C9.32383 9.88051 9.01424 10.2537 8.39506 11M16 8C15.5768 8.31738 14.8079 8.70974 14.7106 9.34118C14.7049 9.37783 14.7011 9.41481 14.6991 9.45195C14.6762 9.88051 14.9858 10.2537 15.6049 11',
  d2: 'M12 13.5C13.6732 13.5 15.1098 14.4559 15.7297 15.8205C15.9802 16.3718 16.1055 16.6475 15.8889 16.8748C15.6723 17.1022 15.2907 16.9913 14.5274 16.7696C13.8039 16.5595 12.9019 16.3703 12 16.3703C11.0981 16.3703 10.1961 16.5595 9.47257 16.7696C8.70933 16.9913 8.32771 17.1022 8.11112 16.8748C7.89454 16.6475 8.01978 16.3718 8.27026 15.8205C8.89021 14.4559 10.3268 13.5 12 13.5Z',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.7297 15.8205C15.1098 14.4559 13.6732 13.5 12 13.5C10.3268 13.5 8.89021 14.4559 8.27026 15.8205C8.01978 16.3718 7.89454 16.6475 8.11112 16.8748C8.32771 17.1022 8.70933 16.9913 9.47257 16.7696C10.1961 16.5595 11.0981 16.3703 12 16.3703C12.9019 16.3703 13.8039 16.5595 14.5274 16.7696C15.2907 16.9913 15.6723 17.1022 15.8889 16.8748C16.1055 16.6475 15.9802 16.3718 15.7297 15.8205Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.40004 7.54998C7.64857 7.21861 8.11867 7.15145 8.45004 7.39998C8.51404 7.44798 8.58454 7.49588 8.67516 7.55746L8.67522 7.5575L8.67526 7.55753C8.71039 7.5814 8.74854 7.60732 8.79051 7.6361C8.9282 7.73052 9.09203 7.84604 9.25007 7.97914C9.54957 8.23138 9.93985 8.63749 10.0307 9.22689C10.0402 9.2882 10.0465 9.34994 10.0499 9.41184C10.0729 9.84272 9.91754 10.1997 9.72263 10.5078C9.54454 10.7893 9.28582 11.1011 9.00011 11.4454L8.97232 11.4789C8.70785 11.7976 8.23502 11.8417 7.91623 11.5772C7.59744 11.3127 7.55341 10.8399 7.81789 10.5211C8.14037 10.1324 8.33498 9.89553 8.455 9.70582C8.51044 9.61819 8.53405 9.56437 8.54431 9.53347C8.55274 9.50804 8.55232 9.49799 8.552 9.49202C8.55134 9.47965 8.55007 9.46743 8.54822 9.45543C8.54174 9.4134 8.4989 9.30761 8.2838 9.12645C8.18455 9.04286 8.07073 8.96132 7.9422 8.87318L7.85741 8.81543L7.85735 8.81539L7.85731 8.81536C7.75747 8.74756 7.64464 8.67093 7.55004 8.59998C7.21867 8.35145 7.15152 7.88135 7.40004 7.54998ZM16.6 7.54998C16.8486 7.88135 16.7814 8.35145 16.45 8.59998C16.3554 8.67094 16.2426 8.74758 16.1427 8.81539L16.1427 8.81541L16.1427 8.81543C16.113 8.83558 16.0845 8.85496 16.0579 8.87318C15.9294 8.96132 15.8155 9.04287 15.7163 9.12645C15.5012 9.30761 15.4583 9.4134 15.4519 9.45543C15.45 9.46743 15.4487 9.47965 15.4481 9.49202C15.4478 9.49799 15.4473 9.50804 15.4558 9.53347C15.466 9.56437 15.4897 9.61819 15.5451 9.70582C15.6651 9.89553 15.8597 10.1324 16.1822 10.5211C16.4467 10.8399 16.4026 11.3127 16.0839 11.5772C15.7651 11.8417 15.2922 11.7976 15.0278 11.4789L15 11.4454C14.7143 11.1011 14.4555 10.7893 14.2775 10.5078C14.0825 10.1997 13.9272 9.84272 13.9502 9.41184C13.9535 9.34994 13.9599 9.2882 13.9694 9.22689C14.0602 8.63749 14.4505 8.23138 14.75 7.97914C14.9081 7.84604 15.0719 7.73052 15.2096 7.6361C15.2515 7.60732 15.2897 7.5814 15.3248 7.55754C15.4155 7.49592 15.486 7.448 15.55 7.39998C15.8814 7.15145 16.3515 7.21861 16.6 7.54998ZM15.7297 15.8205C15.1098 14.4559 13.6732 13.5 12 13.5C10.3268 13.5 8.89021 14.4559 8.27026 15.8205C8.01978 16.3718 7.89454 16.6475 8.11112 16.8748C8.32771 17.1022 8.70933 16.9913 9.47257 16.7696C10.1961 16.5595 11.0981 16.3703 12 16.3703C12.9019 16.3703 13.8039 16.5595 14.5274 16.7696C15.2907 16.9913 15.6723 17.1022 15.8889 16.8748C16.1055 16.6475 15.9802 16.3718 15.7297 15.8205Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M7.40004 7.55004C7.64857 7.21867 8.11867 7.15152 8.45004 7.40004C8.51407 7.44806 8.58459 7.49598 8.67526 7.55759C8.71039 7.58146 8.74854 7.60738 8.79051 7.63616C8.9282 7.73058 9.09203 7.8461 9.25007 7.9792C9.54957 8.23144 9.93985 8.63755 10.0307 9.22695C10.0402 9.28826 10.0465 9.35 10.0499 9.41191C10.0729 9.84279 9.91754 10.1997 9.72263 10.5078C9.54454 10.7893 9.28582 11.1011 9.00011 11.4454C8.99088 11.4566 8.98161 11.4677 8.97232 11.4789C8.70785 11.7977 8.23502 11.8417 7.91623 11.5773C7.59744 11.3128 7.55341 10.84 7.81789 10.5212C8.14037 10.1325 8.33498 9.89559 8.455 9.70588C8.51044 9.61825 8.53405 9.56443 8.54431 9.53354C8.55275 9.5081 8.55232 9.49805 8.552 9.49208C8.55134 9.47971 8.55007 9.46749 8.54822 9.45549C8.54174 9.41346 8.4989 9.30767 8.2838 9.12651C8.18455 9.04293 8.07073 8.96138 7.9422 8.87324C7.91563 8.85502 7.8871 8.83565 7.85741 8.81549C7.75755 8.74767 7.64467 8.67102 7.55004 8.60004C7.21867 8.35152 7.15152 7.88142 7.40004 7.55004ZM16.6 7.55004C16.8486 7.88141 16.7814 8.35151 16.45 8.60004C16.3554 8.67102 16.2425 8.74767 16.1427 8.81549C16.113 8.83565 16.0845 8.85502 16.0579 8.87324C15.9294 8.96138 15.8155 9.04293 15.7163 9.12651C15.5012 9.30767 15.4583 9.41346 15.4519 9.45549C15.45 9.46749 15.4487 9.47971 15.4481 9.49208C15.4478 9.49805 15.4473 9.5081 15.4558 9.53354C15.466 9.56443 15.4897 9.61825 15.5451 9.70588C15.6651 9.89559 15.8597 10.1325 16.1822 10.5212C16.4467 10.84 16.4026 11.3128 16.0839 11.5773C15.7651 11.8417 15.2922 11.7977 15.0278 11.4789C15.0185 11.4677 15.0092 11.4566 15 11.4454C14.7143 11.1011 14.4555 10.7893 14.2775 10.5078C14.0825 10.1997 13.9272 9.84279 13.9502 9.41191C13.9535 9.35 13.9599 9.28826 13.9694 9.22695C14.0602 8.63755 14.4505 8.23144 14.75 7.9792C14.9081 7.8461 15.0719 7.73058 15.2096 7.63616C15.2515 7.60738 15.2897 7.58146 15.3248 7.5576C15.4155 7.49598 15.486 7.44806 15.55 7.40005C15.8814 7.15152 16.3515 7.21867 16.6 7.55004Z',
  d7: 'M8 8L9.5 9.45195L8 11M16 8L14.5 9.45195L16 11',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.43877 9.46877L7.47793 8.53872L8.52119 7.46094L10.5604 9.43478L8.53819 11.5217L7.46094 10.4779L8.43877 9.46877ZM15.4779 7.46094L16.5212 8.53872L15.5604 9.46877L16.5382 10.4779L15.4609 11.5217L13.4388 9.43478L15.4779 7.46094ZM15.7297 15.8205C15.1098 14.4559 13.6732 13.5 12 13.5C10.3268 13.5 8.89021 14.4559 8.27026 15.8205C8.01978 16.3718 7.89454 16.6475 8.11112 16.8748C8.32771 17.1022 8.70933 16.9913 9.47257 16.7696C10.1961 16.5595 11.0981 16.3703 12 16.3703C12.9019 16.3703 13.8039 16.5595 14.5274 16.7696C15.2907 16.9913 15.6723 17.1022 15.8889 16.8748C16.1055 16.6475 15.9802 16.3718 15.7297 15.8205Z',
};

export const IconTired02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-stroke-rounded IconTired02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconTired02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-duotone-rounded IconTired02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconTired02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-twotone-rounded IconTired02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTired02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-solid-rounded IconTired02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTired02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-bulk-rounded IconTired02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTired02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-stroke-sharp IconTired02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTired02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tired-02-solid-sharp IconTired02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTired02: TheIconSelfPack = {
  name: 'Tired02',
  StrokeRounded: IconTired02StrokeRounded,
  DuotoneRounded: IconTired02DuotoneRounded,
  TwotoneRounded: IconTired02TwotoneRounded,
  SolidRounded: IconTired02SolidRounded,
  BulkRounded: IconTired02BulkRounded,
  StrokeSharp: IconTired02StrokeSharp,
  SolidSharp: IconTired02SolidSharp,
};