import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 3V21M20 3V21',
  d2: 'M9.66101 16.8652C10.6709 14.9551 11.1759 14 12 14C12.8241 14 13.3291 14.9551 14.339 16.8652L15.0267 18.166C15.8023 19.6329 16.1901 20.3664 15.9082 20.7191C15.8324 20.8139 15.7325 20.8921 15.6163 20.9476C15.1841 21.1541 14.3908 20.7381 12.8043 19.9062C12.4524 19.7216 12.2764 19.6294 12.084 19.6129C12.0281 19.6081 11.9719 19.6081 11.916 19.6129C11.7236 19.6294 11.5476 19.7216 11.1957 19.9062C9.60915 20.7381 8.81587 21.1541 8.38372 20.9476C8.26754 20.8921 8.16764 20.8139 8.09184 20.7191C7.80989 20.3664 8.19769 19.6329 8.97329 18.166L9.66101 16.8652Z',
  d3: 'M12 3V5',
  d4: 'M12 9V11',
  d5: 'M20 3V21H15.3623C15.4588 20.9999 15.5428 20.9828 15.6163 20.9476C15.7325 20.8921 15.8324 20.8139 15.9082 20.7191C16.1901 20.3664 15.8023 19.6329 15.0267 18.166L14.339 16.8652C13.3291 14.9551 12.8241 14 12 14C11.1759 14 10.6709 14.9551 9.66101 16.8652L8.97329 18.166C8.1977 19.6329 7.8099 20.3664 8.09184 20.7191C8.16764 20.8139 8.26754 20.8921 8.38372 20.9476C8.45723 20.9828 8.54118 20.9999 8.63771 21H4V3H20Z',
  d6: 'M4.25 2C4.80228 2 5.25 2.44772 5.25 3L5.25 21C5.25 21.5523 4.80228 22 4.25 22C3.69772 22 3.25 21.5523 3.25 21L3.25 3C3.25 2.44772 3.69772 2 4.25 2Z',
  d7: 'M19.75 2C20.3023 2 20.75 2.44772 20.75 3L20.75 21C20.75 21.5523 20.3023 22 19.75 22C19.1977 22 18.75 21.5523 18.75 21L18.75 3C18.75 2.44772 19.1977 2 19.75 2Z',
  d8: 'M10.3881 14.9585C10.772 14.4462 11.2712 14 12 14C12.7288 14 13.228 14.4462 13.6119 14.9585C13.9816 15.452 14.3615 16.1658 14.8154 17.0189L15.5187 18.3402C15.8664 18.9937 16.158 19.5414 16.3235 19.9673C16.4086 20.1862 16.4822 20.4253 16.4972 20.6644C16.5132 20.9194 16.4639 21.2141 16.2575 21.4706C16.1147 21.648 15.9331 21.7865 15.7323 21.8818C15.4626 22.0098 15.1852 22.0165 14.9474 21.9825C14.7139 21.9492 14.4738 21.8705 14.2378 21.7757C13.778 21.5911 13.1891 21.2843 12.469 20.9091C12.3212 20.8321 12.2028 20.7708 12.1241 20.7341C12.0916 20.719 12.0754 20.7114 12.0593 20.706C12.0432 20.7006 12.0426 20.7005 12.0416 20.7003C12.0094 20.6934 11.9649 20.6933 11.9167 20.7158C11.8413 20.748 11.707 20.8174 11.531 20.9091C10.8109 21.2843 10.2219 21.5911 9.7622 21.7757C9.52622 21.8705 9.28615 21.9492 9.05259 21.9825C8.81482 22.0165 8.53741 22.0098 8.26768 21.8818C8.06691 21.7865 7.88529 21.648 7.74251 21.4706C7.53614 21.2141 7.48676 20.9194 7.5028 20.6644C7.51783 20.4253 7.59139 20.1862 7.67648 19.9673C7.84204 19.5414 8.13356 18.9937 8.48133 18.3403L9.18456 17.0189C9.63849 16.1658 10.0184 15.452 10.3881 14.9585Z',
  d9: 'M12 2C12.5523 2 13 2.44772 13 3L13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5L11 3C11 2.44772 11.4477 2 12 2Z',
  d10: 'M12 8C12.5523 8 13 8.44772 13 9L13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11L11 9C11 8.44772 11.4477 8 12 8Z',
  d11: 'M5.25 3C5.25 2.44772 4.80228 2 4.25 2C3.69772 2 3.25 2.44772 3.25 3V21C3.25 21.5523 3.69772 22 4.25 22C4.80228 22 5.25 21.5523 5.25 21V3ZM20.75 3C20.75 2.44772 20.3023 2 19.75 2C19.1977 2 18.75 2.44772 18.75 3V21C18.75 21.5523 19.1977 22 19.75 22C20.3023 22 20.75 21.5523 20.75 21V3ZM12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V9Z',
  d12: 'M11.9997 14L8 21L12.0001 19.4441L16 20.9995L11.9997 14Z',
  d13: 'M12 3V6',
  d14: 'M12 8V11',
  d15: 'M5 3L5 21H3L3 3L5 3ZM19 21L19 3L21 3V21H19Z',
  d16: 'M11.9997 13L7.5 21L12.0001 19.2218L16.5 20.9994L11.9997 13Z',
  d17: 'M11 6L11 3L13 3L13 6H11Z',
  d18: 'M11 11L11 8L13 8L13 11H11Z',
};

export const IconNavigator01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-stroke-rounded IconNavigator01StrokeRounded"
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

export const IconNavigator01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-duotone-rounded IconNavigator01DuotoneRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNavigator01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-twotone-rounded IconNavigator01TwotoneRounded"
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

export const IconNavigator01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-solid-rounded IconNavigator01SolidRounded"
    >
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
      <path 
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

export const IconNavigator01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-bulk-rounded IconNavigator01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigator01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-stroke-sharp IconNavigator01StrokeSharp"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigator01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-01-solid-sharp IconNavigator01SolidSharp"
    >
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

export const iconPackOfNavigator01: TheIconSelfPack = {
  name: 'Navigator01',
  StrokeRounded: IconNavigator01StrokeRounded,
  DuotoneRounded: IconNavigator01DuotoneRounded,
  TwotoneRounded: IconNavigator01TwotoneRounded,
  SolidRounded: IconNavigator01SolidRounded,
  BulkRounded: IconNavigator01BulkRounded,
  StrokeSharp: IconNavigator01StrokeSharp,
  SolidSharp: IconNavigator01SolidSharp,
};