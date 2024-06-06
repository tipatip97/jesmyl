import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z',
  d2: 'M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354',
  d3: 'M3.61426 12.3557C3.61487 12.3522 3.61549 12.3487 3.61611 12.3452C5.08073 11.8915 8.39146 11.684 11.9841 13.702C15.5699 15.7161 18.9999 15.0004 20.4999 13.6784C20.4999 13.6783 20.4999 13.6785 20.4999 13.6784C20.4999 9.49424 16.9191 5.35907 14.4057 2.97222C13.0407 1.67593 10.959 1.67593 9.594 2.97222C7.34616 5.10694 4.24446 8.63983 3.61426 12.3557Z',
  d4: 'M15.0131 2.46876C13.3082 0.843746 10.6918 0.843746 8.98694 2.46876C7.73305 3.66394 6.19137 5.31616 4.9572 7.21627C3.73034 9.10512 2.75 11.3266 2.75 13.6399C2.75 18.1253 6.25883 22.75 12 22.75C17.7412 22.75 21.25 18.1253 21.25 13.6399C21.25 11.3266 20.2697 9.10513 19.0428 7.21627C17.8086 5.31616 16.267 3.66394 15.0131 2.46876ZM10.3279 3.88604C11.2812 2.97738 12.7188 2.97738 13.6721 3.88604C14.8654 5.02346 16.2906 6.55795 17.4115 8.28368C18.4849 9.93624 19.2276 11.6852 19.2973 13.3805C18.0238 14.0355 15.5565 14.5611 12.4742 12.8298C9.56427 11.1953 7.00776 10.8671 5.18542 11.0421C5.51852 10.1102 6.0046 9.18269 6.58853 8.28368C7.70944 6.55795 9.13464 5.02346 10.3279 3.88604Z',
  d5: 'M13.6721 3.88604C12.7188 2.97738 11.2812 2.97738 10.3279 3.88604C9.13464 5.02346 7.70944 6.55795 6.58853 8.28368C5.46031 10.0207 4.69737 11.8641 4.69737 13.6399C4.69737 17.1728 7.45668 20.7955 12 20.7955C16.5433 20.7955 19.3026 17.1728 19.3026 13.6399C19.3026 11.8641 18.5397 10.0207 17.4115 8.28368C16.2906 6.55795 14.8654 5.02346 13.6721 3.88604ZM8.98694 2.46876C10.6918 0.843746 13.3082 0.843746 15.0131 2.46876C16.267 3.66394 17.8086 5.31616 19.0428 7.21627C20.2697 9.10513 21.25 11.3266 21.25 13.6399C21.25 18.1253 17.7412 22.75 12 22.75C6.25883 22.75 2.75 18.1253 2.75 13.6399C2.75 11.3266 3.73034 9.10512 4.9572 7.21627C6.19137 5.31616 7.73305 3.66394 8.98694 2.46876Z',
  d6: 'M4.69727 13.64C4.69727 17.1729 7.45658 20.7955 11.9999 20.7955C16.5432 20.7955 19.3025 17.1729 19.3025 13.64C19.3025 13.5536 19.3007 13.4671 19.2972 13.3804C18.0237 14.0354 15.5563 14.5612 12.4738 12.8298C9.56406 11.1954 7.00767 10.8672 5.18535 11.0421C4.87485 11.9108 4.69727 12.7832 4.69727 13.64Z',
  d7: 'M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 7 12 2 12 2C12 2 20.5 7 20.5 13.5Z',
  d8: 'M13.8599 2.44316C13.4572 2.15603 12 1.25 12 1.25C12 1.25 10.5428 2.15603 10.1401 2.44316C9.33662 3.01619 8.26207 3.8503 7.1837 4.89323C5.06738 6.93997 2.75 9.97063 2.75 13.533C2.75 18.6234 6.89137 22.75 12 22.75C17.1086 22.75 21.25 18.6234 21.25 13.533C21.25 9.97063 18.9326 6.93997 16.8163 4.89323C15.7379 3.8503 14.6634 3.01619 13.8599 2.44316ZM11.2727 4.02121C11.5561 3.81909 11.8029 3.65219 11.9992 3.52344C12.1954 3.65219 12.4423 3.81909 12.7257 4.02121C13.474 4.55483 14.4685 5.32762 15.4592 6.28575C17.481 8.24112 19.3018 10.7892 19.3018 13.5331C17.9326 14.1953 15.4276 14.7761 12.3507 13.0478C9.41463 11.3986 6.85794 11.1067 5.08203 11.3041C5.7218 9.42163 7.07798 7.69891 8.53918 6.28575C9.52988 5.32762 10.5244 4.55483 11.2727 4.02121Z',
};

export const IconHumidityStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-stroke-rounded IconHumidityStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHumidityDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-duotone-rounded IconHumidityDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHumidityTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-twotone-rounded IconHumidityTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHumiditySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-solid-rounded IconHumiditySolidRounded"
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

export const IconHumidityBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-bulk-rounded IconHumidityBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHumidityStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-stroke-sharp IconHumidityStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconHumiditySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="humidity-solid-sharp IconHumiditySolidSharp"
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

export const iconPackOfHumidity: TheIconSelfPack = {
  name: 'Humidity',
  StrokeRounded: IconHumidityStrokeRounded,
  DuotoneRounded: IconHumidityDuotoneRounded,
  TwotoneRounded: IconHumidityTwotoneRounded,
  SolidRounded: IconHumiditySolidRounded,
  BulkRounded: IconHumidityBulkRounded,
  StrokeSharp: IconHumidityStrokeSharp,
  SolidSharp: IconHumiditySolidSharp,
};