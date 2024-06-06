import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M12 2V4',
  d3: 'M22 12L20 12',
  d4: 'M12 20L12 22',
  d5: 'M4 12H2',
  d6: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16',
  d7: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d8: 'M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1ZM1 12C1 11.4477 1.44772 11 2 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12ZM19 12C19 11.4477 19.4477 11 20 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20C19.4477 13 19 12.5523 19 12ZM12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.4477 11.4477 19 12 19Z',
  d9: 'M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z',
  d10: 'M12 7C12.5523 7 13 7.44772 13 8V8.14149C13.7704 8.36492 14.4496 8.8498 14.7908 9.5737C15.0262 10.0733 14.8121 10.6691 14.3125 10.9046C13.8129 11.14 13.2171 10.9259 12.9816 10.4263C12.9168 10.2888 12.6009 10 12 10C11.6432 10 11.3586 10.1097 11.1858 10.2393C11.0133 10.3687 11 10.4711 11 10.5C11 10.5289 11.0133 10.6313 11.1858 10.7607C11.3586 10.8903 11.6432 11 12 11C12.7477 11 13.4632 11.2261 14.0142 11.6393C14.5656 12.0529 15 12.7005 15 13.5C15 14.2995 14.5656 14.9471 14.0142 15.3607C13.717 15.5835 13.3721 15.752 13 15.8598V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V15.8585C10.2296 15.6351 9.55037 15.1502 9.20922 14.4263C8.97378 13.9267 9.18792 13.3309 9.68751 13.0954C10.1871 12.86 10.7829 13.0741 11.0184 13.5737C11.0832 13.7112 11.3991 14 12 14C12.3568 14 12.6414 13.8903 12.8142 13.7607C12.9867 13.6313 13 13.5289 13 13.5C13 13.4711 12.9867 13.3687 12.8142 13.2393C12.6414 13.1097 12.3568 13 12 13C11.2523 13 10.5368 12.7739 9.98579 12.3607C9.43443 11.9471 9 11.2995 9 10.5C9 9.70046 9.43443 9.05286 9.98579 8.63934C10.283 8.41646 10.6279 8.24804 11 8.14015V8C11 7.44772 11.4477 7 12 7Z',
  d11: 'M12 2V5M22 12H19M12 19V22M5 12H2',
  d12: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V7.5M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16.5',
  d13: 'M11 5V2H13V5H11ZM2 11H5V13H2V11ZM19 11H22V13H19V11ZM11 22V19H13V22H11Z',
  d14: 'M11 8.14015C10.6279 8.24804 10.283 8.41646 9.98579 8.63934C9.43443 9.05286 9 9.70046 9 10.5C9 11.2995 9.43443 11.9471 9.98579 12.3607C10.5368 12.7739 11.2523 13 12 13C12.3568 13 12.6414 13.1097 12.8142 13.2393C12.9867 13.3687 13 13.4711 13 13.5C13 13.5289 12.9867 13.6313 12.8142 13.7607C12.6414 13.8903 12.3568 14 12 14C11.3991 14 11.0832 13.7112 11.0184 13.5737L9.20922 14.4263C9.55037 15.1502 10.2296 15.6351 11 15.8585V16.5H13V15.8598C13.3721 15.752 13.717 15.5835 14.0142 15.3607C14.5656 14.9471 15 14.2995 15 13.5C15 12.7005 14.5656 12.0529 14.0142 11.6393C13.4632 11.2261 12.7477 11 12 11C11.6432 11 11.3586 10.8903 11.1858 10.7607C11.0133 10.6313 11 10.5289 11 10.5C11 10.4711 11.0133 10.3687 11.1858 10.2393C11.3586 10.1097 11.6432 10 12 10C12.6009 10 12.9168 10.2888 12.9816 10.4263L14.7908 9.5737C14.4496 8.84981 13.7704 8.36492 13 8.14149V7.5H11V8.14015Z',
};

export const IconTargetDollarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-stroke-rounded IconTargetDollarStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTargetDollarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-duotone-rounded IconTargetDollarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTargetDollarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-twotone-rounded IconTargetDollarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTargetDollarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-solid-rounded IconTargetDollarSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTargetDollarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-bulk-rounded IconTargetDollarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTargetDollarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-stroke-sharp IconTargetDollarStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTargetDollarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-dollar-solid-sharp IconTargetDollarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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

export const iconPackOfTargetDollar: TheIconSelfPack = {
  name: 'TargetDollar',
  StrokeRounded: IconTargetDollarStrokeRounded,
  DuotoneRounded: IconTargetDollarDuotoneRounded,
  TwotoneRounded: IconTargetDollarTwotoneRounded,
  SolidRounded: IconTargetDollarSolidRounded,
  BulkRounded: IconTargetDollarBulkRounded,
  StrokeSharp: IconTargetDollarStrokeSharp,
  SolidSharp: IconTargetDollarSolidSharp,
};