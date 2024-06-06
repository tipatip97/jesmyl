import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 4L3 4M21 20L3 20',
  d2: 'M7.13478 9.66101C9.04493 10.6709 10 11.1759 10 12C10 12.8241 9.04493 13.3291 7.13478 14.339L5.83402 15.0267C4.36705 15.8023 3.63357 16.1901 3.2809 15.9082C3.18609 15.8324 3.10787 15.7325 3.05235 15.6163C2.84587 15.1841 3.26185 14.3908 4.09382 12.8043C4.27836 12.4524 4.37063 12.2764 4.38713 12.084C4.39192 12.0281 4.39192 11.9719 4.38713 11.916C4.37063 11.7236 4.27836 11.5476 4.09382 11.1957C3.26185 9.60915 2.84587 8.81587 3.05235 8.38372C3.10787 8.26754 3.18609 8.16764 3.2809 8.09184C3.63357 7.80989 4.36705 8.19769 5.83402 8.97329L7.13478 9.66101Z',
  d3: 'M21 12L19 12',
  d4: 'M15 12L13 12',
  d5: 'M21 20L3 20V15.3613C3 15.4582 3.01711 15.5425 3.05235 15.6163C3.10787 15.7325 3.18609 15.8324 3.2809 15.9082C3.63357 16.1901 4.36705 15.8023 5.83402 15.0267L7.13478 14.339L7.13479 14.339C9.04493 13.3291 10 12.8241 10 12C10 11.1759 9.04493 10.6709 7.13478 9.66101L5.83402 8.97329C4.36705 8.19769 3.63357 7.80989 3.2809 8.09184C3.18609 8.16764 3.10787 8.26754 3.05235 8.38372C3.01716 8.45737 3.00005 8.54152 3 8.63829V4H21V20Z',
  d6: 'M22 4.25C22 4.80228 21.5523 5.25 21 5.25L3 5.25C2.44772 5.25 2 4.80228 2 4.25C2 3.69771 2.44772 3.25 3 3.25L21 3.25C21.5523 3.25 22 3.69772 22 4.25Z',
  d7: 'M22 19.75C22 20.3023 21.5523 20.75 21 20.75L3 20.75C2.44772 20.75 2 20.3023 2 19.75C2 19.1977 2.44772 18.75 3 18.75L21 18.75C21.5523 18.75 22 19.1977 22 19.75Z',
  d8: 'M9.04145 10.3881C9.55375 10.772 10 11.2712 10 12C10 12.7288 9.55376 13.228 9.04145 13.6119C8.54803 13.9816 7.83418 14.3615 6.98114 14.8154L5.65976 15.5187C5.00633 15.8664 4.45859 16.158 4.03271 16.3235C3.8138 16.4086 3.57466 16.4822 3.33557 16.4972C3.08061 16.5132 2.78588 16.4639 2.52944 16.2575C2.35201 16.1147 2.2135 15.9331 2.1182 15.7323C1.99017 15.4626 1.98354 15.1852 2.01746 14.9474C2.05077 14.7139 2.12951 14.4738 2.22428 14.2378C2.40892 13.778 2.71574 13.1891 3.0909 12.469C3.16788 12.3212 3.22917 12.2028 3.26591 12.1241C3.28104 12.0916 3.28861 12.0754 3.29401 12.0593C3.29941 12.0432 3.29952 12.0426 3.29975 12.0416C3.30661 12.0094 3.30673 11.9649 3.28424 11.9167C3.25203 11.8413 3.18259 11.707 3.09089 11.531C2.71574 10.8109 2.40892 10.2219 2.22428 9.7622C2.12951 9.52622 2.05077 9.28615 2.01745 9.05259C1.98354 8.81482 1.99017 8.53741 2.1182 8.26768C2.2135 8.06691 2.35201 7.88529 2.52944 7.74251C2.78588 7.53614 3.08061 7.48676 3.33557 7.5028C3.57466 7.51783 3.8138 7.59139 4.03271 7.67648C4.45859 7.84204 5.00632 8.13356 5.65974 8.48133L6.98115 9.18456C7.83418 9.63849 8.54803 10.0184 9.04145 10.3881Z',
  d9: 'M22 12C22 12.5523 21.5523 13 21 13L19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11L21 11C21.5523 11 22 11.4477 22 12Z',
  d10: 'M16 12C16 12.5523 15.5523 13 15 13L13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11L15 11C15.5523 11 16 11.4477 16 12Z',
  d11: 'M21 5.25C21.5523 5.25 22 4.80228 22 4.25C22 3.69772 21.5523 3.25 21 3.25H3C2.44772 3.25 2 3.69771 2 4.25C2 4.80228 2.44772 5.25 3 5.25L21 5.25ZM21 20.75C21.5523 20.75 22 20.3023 22 19.75C22 19.1977 21.5523 18.75 21 18.75L3 18.75C2.44772 18.75 2 19.1977 2 19.75C2 20.3023 2.44772 20.75 3 20.75H21ZM22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H15Z',
  d12: 'M20.9971 20H2.99707M2.99707 4L20.9971 4',
  d13: 'M9.99805 11.9997L2.99805 8L4.55395 12.0001L2.99855 16L9.99805 11.9997Z',
  d14: 'M20.998 12L17.998 12',
  d15: 'M15.998 12L12.998 12',
  d16: 'M21 5L3 5V3L21 3V5ZM3 19H21V21H3V19Z',
  d17: 'M11 11.9997L3 7.5L4.77818 12.0001L3.00057 16.5L11 11.9997Z',
  d18: 'M18.001 11L21.001 11V13H18.001V11Z',
  d19: 'M13.001 11L16.001 11V13H13.001V11Z',
};

export const IconNavigator02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-stroke-rounded IconNavigator02StrokeRounded"
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

export const IconNavigator02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-duotone-rounded IconNavigator02DuotoneRounded"
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

export const IconNavigator02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-twotone-rounded IconNavigator02TwotoneRounded"
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

export const IconNavigator02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-solid-rounded IconNavigator02SolidRounded"
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

export const IconNavigator02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-bulk-rounded IconNavigator02BulkRounded"
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

export const IconNavigator02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-stroke-sharp IconNavigator02StrokeSharp"
    >
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigator02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="navigator-02-solid-sharp IconNavigator02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNavigator02: TheIconSelfPack = {
  name: 'Navigator02',
  StrokeRounded: IconNavigator02StrokeRounded,
  DuotoneRounded: IconNavigator02DuotoneRounded,
  TwotoneRounded: IconNavigator02TwotoneRounded,
  SolidRounded: IconNavigator02SolidRounded,
  BulkRounded: IconNavigator02BulkRounded,
  StrokeSharp: IconNavigator02StrokeSharp,
  SolidSharp: IconNavigator02SolidSharp,
};