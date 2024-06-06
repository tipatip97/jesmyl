import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.6 22C5.6 21.1163 4.88366 20.4 4 20.4M8.8 22C8.8 19.349 6.65097 17.2 4 17.2M12 22C12 17.5817 8.41828 14 4 14',
  d2: 'M5 11V9.50003C5 6.21252 5 4.56876 5.90797 3.46241C6.07418 3.25989 6.25989 3.07418 6.46241 2.90797C7.56876 2 9.21252 2 12.5 2C15.7875 2 17.4313 2 18.5377 2.90797C18.7402 3.07418 18.9259 3.25989 19.0921 3.46241C20.0001 4.56876 20.0001 6.21252 20.0001 9.50003V17C20.0001 17.9293 20.0001 18.394 19.9232 18.7804C19.6076 20.3671 18.3672 21.6075 16.7804 21.9231C16.394 22 15.9294 22 15.0001 22',
  d3: 'M5 9C5 5.70017 5 4.05025 6.09835 3.02513C7.1967 2 8.96447 2 12.5 2C16.0355 2 17.8033 2 18.9016 3.02513C20 4.05025 20 5.70017 20 9V15C20 18.2998 20 19.9497 18.9016 20.9749C17.8033 22 16.0355 22 12.5 22C8.96447 22 7.1967 22 6.09835 20.9749C5 19.9497 5 18.2998 5 15V9Z',
  d4: 'M4 15C7.86599 15 11 18.134 11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22C13 17.0294 8.97056 13 4 13C3.44771 13 3 13.4477 3 14C3 14.5523 3.44771 15 4 15ZM4 18.2C6.09868 18.2 7.8 19.9013 7.8 22C7.8 22.5523 8.24772 23 8.8 23C9.35228 23 9.8 22.5523 9.8 22C9.8 18.7967 7.20325 16.2 4 16.2C3.44771 16.2 3 16.6477 3 17.2C3 17.7523 3.44771 18.2 4 18.2ZM4 21.4C4.33137 21.4 4.6 21.6686 4.6 22C4.6 22.5523 5.04772 23 5.6 23C6.15228 23 6.6 22.5523 6.6 22C6.6 20.5641 5.43594 19.4 4 19.4C3.44771 19.4 3 19.8477 3 20.4C3 20.9523 3.44771 21.4 4 21.4Z',
  d5: 'M12.4366 1H12.5635C14.1534 0.999979 15.4352 0.999962 16.4542 1.12041C17.5088 1.24507 18.4112 1.51053 19.1721 2.13497C19.4252 2.34273 19.6573 2.57486 19.8651 2.82801C20.4895 3.58888 20.755 4.49132 20.8797 5.5459C21.0001 6.56489 21.0001 7.84672 21.0001 9.4366V17C21.0001 17.0392 21.0001 17.0777 21.0001 17.1157C21.0003 17.9334 21.0004 18.4906 20.904 18.9755C20.5095 20.9589 18.959 22.5094 16.9755 22.9039C16.4907 23.0004 15.9334 23.0002 15.1158 23C15.0778 23 15.0392 23 15.0001 23C14.4478 23 14.0001 22.5523 14.0001 22C14.0001 21.4477 14.4478 21 15.0001 21C15.9773 21 16.3199 20.9952 16.5853 20.9424C17.7754 20.7056 18.7057 19.7753 18.9424 18.5853C18.9952 18.3198 19.0001 17.9772 19.0001 17V9.50003C19.0001 7.83178 18.9984 6.66851 18.8935 5.78067C18.7911 4.91491 18.6026 4.44229 18.3191 4.09681C18.1944 3.94492 18.0552 3.80564 17.9033 3.68098C17.5578 3.39745 17.0852 3.20892 16.2194 3.10658C15.3316 3.00164 14.1683 3 12.5 3C10.8318 3 9.66851 3.00164 8.78067 3.10658C7.91491 3.20892 7.44229 3.39745 7.09681 3.68098C6.94491 3.80564 6.80564 3.94491 6.68098 4.09681C6.39745 4.44229 6.20892 4.91491 6.10658 5.78067C6.00164 6.66851 6 7.83178 6 9.50003V11C6 11.5523 5.55229 12 5 12C4.44772 12 4 11.5523 4 11L4 9.4366C3.99998 7.84672 3.99996 6.56489 4.12041 5.5459C4.24507 4.49132 4.51053 3.58889 5.13497 2.82801C5.34273 2.57486 5.57486 2.34273 5.82801 2.13497C6.58889 1.51053 7.49132 1.24507 8.5459 1.12041C9.56489 0.999962 10.8467 0.999979 12.4366 1Z',
  d6: 'M15 22H20V2H5V11',
  d7: 'M3.5 15C7.36599 15 10.5 18.134 10.5 22H12.5C12.5 17.0294 8.47056 13 3.5 13V15ZM3.5 18.2C5.59868 18.2 7.3 19.9013 7.3 22H9.3C9.3 18.7967 6.70325 16.2 3.5 16.2V18.2ZM3.5 21.4C3.83137 21.4 4.1 21.6686 4.1 22H6.1C6.1 20.5641 4.93594 19.4 3.5 19.4V21.4Z',
  d8: 'M3.5 2C3.5 1.44772 3.94772 1 4.5 1H19.5C20.0523 1 20.5 1.44772 20.5 2V22C20.5 22.5523 20.0523 23 19.5 23H14.5V21H18.5V3H5.5V11H3.5V2Z',
};

export const IconTransmissionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-stroke-rounded IconTransmissionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-duotone-rounded IconTransmissionDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-twotone-rounded IconTransmissionTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-solid-rounded IconTransmissionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-bulk-rounded IconTransmissionBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-stroke-sharp IconTransmissionStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransmissionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transmission-solid-sharp IconTransmissionSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfTransmission: TheIconSelfPack = {
  name: 'Transmission',
  StrokeRounded: IconTransmissionStrokeRounded,
  DuotoneRounded: IconTransmissionDuotoneRounded,
  TwotoneRounded: IconTransmissionTwotoneRounded,
  SolidRounded: IconTransmissionSolidRounded,
  BulkRounded: IconTransmissionBulkRounded,
  StrokeSharp: IconTransmissionStrokeSharp,
  SolidSharp: IconTransmissionSolidSharp,
};