import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H7.25M21.5 9H16.75',
  d3: 'M7 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28248 21.5 7.52165 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H17C17 10.1046 16.1046 11 15 11H9C7.89543 11 7 10.1046 7 9Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75211 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.9015 6.90442 1.87709 7.1306 1.85662 7.36695C1.83129 7.65935 1.81862 7.80554 1.90779 7.90277C1.99696 8 2.14686 8 2.44664 8H5.7464C5.94136 8 6.03883 8 6.11047 7.95663C6.1821 7.91326 6.23476 7.81261 6.34008 7.61129C6.84112 6.65357 7.84423 6 9 6H15C16.1558 6 17.1589 6.65357 17.6599 7.61129C17.7652 7.81261 17.8179 7.91326 17.8895 7.95663C17.9612 8 18.0586 8 18.2536 8H21.5534C21.8531 8 22.003 8 22.0922 7.90277C22.1814 7.80554 22.1687 7.65935 22.1434 7.36695C22.1229 7.1306 22.0985 6.90442 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM22.2482 10.5943C22.247 10.3147 22.2465 10.1748 22.1587 10.0874C22.0709 10 21.9306 10 21.65 10H18.2536C18.0586 10 17.9612 10 17.8895 10.0434C17.8179 10.0867 17.7652 10.1874 17.6599 10.3887C17.1589 11.3464 16.1558 12 15 12H9C7.84423 12 6.84112 11.3464 6.34008 10.3887C6.23476 10.1874 6.1821 10.0867 6.11047 10.0434C6.03883 10 5.94136 10 5.7464 10H2.35004C2.06943 10 1.92912 10 1.84133 10.0874C1.75354 10.1748 1.75296 10.3147 1.75179 10.5943C1.74999 11.0227 1.75 11.4719 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 11.4719 22.25 11.0227 22.2482 10.5943ZM8 9C8 8.44772 8.44771 8 9 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H9C8.44771 10 8 9.55228 8 9Z',
  d5: 'M12.0571 1.75H11.9427C9.75202 1.74999 8.03133 1.74998 6.68792 1.93059C5.31126 2.11568 4.21901 2.50272 3.36081 3.36091C2.50261 4.21911 2.11558 5.31137 1.93049 6.68802C1.9014 6.90442 1.87699 7.1306 1.85651 7.36695C1.83118 7.65935 1.81852 7.80554 1.90769 7.90277C1.99686 8 2.14675 8 2.44653 8H5.74629C5.94125 8 6.03873 8 6.11036 7.95663C6.18199 7.91326 6.23465 7.81261 6.33997 7.61129C6.84101 6.65357 7.84413 6 8.99989 6H14.9999C16.1557 6 17.1588 6.65357 17.6598 7.61129C17.7651 7.81261 17.8178 7.91326 17.8894 7.95663C17.9611 8 18.0585 8 18.2535 8H21.5533C21.853 8 22.0029 8 22.0921 7.90277C22.1813 7.80554 22.1686 7.65935 22.1433 7.36695C22.1228 7.1306 22.0984 6.90442 22.0693 6.68802C21.8842 5.31137 21.4972 4.21911 20.639 3.36091C19.7808 2.50272 18.6885 2.11568 17.3119 1.93059C15.9685 1.74998 14.2478 1.74999 12.0571 1.75Z',
  d6: 'M7.99989 9C7.99989 8.44772 8.44761 8 8.99989 8H14.9999C15.5522 8 15.9999 8.44772 15.9999 9C15.9999 9.55228 15.5522 10 14.9999 10H8.99989C8.44761 10 7.99989 9.55228 7.99989 9Z',
  d7: 'M22.2482 10.5943C22.247 10.3147 22.2465 10.1749 22.1587 10.0874C22.0709 10 21.9306 10 21.65 10H18.2536C18.0586 10 17.9612 10 17.8895 10.0434C17.8179 10.0867 17.7652 10.1874 17.6599 10.3887C17.1589 11.3464 16.1558 12 15 12H9C7.84423 12 6.84112 11.3464 6.34008 10.3887C6.23476 10.1874 6.1821 10.0867 6.11047 10.0434C6.03883 10 5.94136 10 5.7464 10H2.35004C2.06943 10 1.92912 10 1.84133 10.0874C1.75354 10.1749 1.75296 10.3147 1.75179 10.5943C1.74999 11.0227 1.75 11.4719 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.4719 22.25 11.0227 22.2482 10.5943Z',
  d8: 'M21 3H3V21H21V3Z',
  d9: 'M3 9H7.25M21 9H16.75',
  d10: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.25H6.25V6.25H17.75V8.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3Z',
  d11: 'M21.75 9.75H17.75V11.75H6.25V9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V9.75Z',
  d12: 'M7.75 7.75V10.25H16.25V7.75H7.75Z',
};

export const IconAirpod01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-stroke-rounded IconAirpod01StrokeRounded"
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
      />
      <rect 
        x="7" 
        y="7" 
        width="10" 
        height="4" 
        rx="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconAirpod01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-duotone-rounded IconAirpod01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <rect 
        x="7" 
        y="7" 
        width="10" 
        height="4" 
        rx="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconAirpod01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-twotone-rounded IconAirpod01TwotoneRounded"
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
      />
      <rect 
        x="7" 
        y="7" 
        width="10" 
        height="4" 
        rx="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconAirpod01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-solid-rounded IconAirpod01SolidRounded"
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

export const IconAirpod01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-bulk-rounded IconAirpod01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-stroke-sharp IconAirpod01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <rect 
        x="7" 
        y="7" 
        width="10" 
        height="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconAirpod01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-01-solid-sharp IconAirpod01SolidSharp"
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

export const iconPackOfAirpod01: TheIconSelfPack = {
  name: 'Airpod01',
  StrokeRounded: IconAirpod01StrokeRounded,
  DuotoneRounded: IconAirpod01DuotoneRounded,
  TwotoneRounded: IconAirpod01TwotoneRounded,
  SolidRounded: IconAirpod01SolidRounded,
  BulkRounded: IconAirpod01BulkRounded,
  StrokeSharp: IconAirpod01StrokeSharp,
  SolidSharp: IconAirpod01SolidSharp,
};