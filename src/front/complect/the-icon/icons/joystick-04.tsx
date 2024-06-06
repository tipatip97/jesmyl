import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.32486 12C9.15779 12.0809 8.98076 12.1675 8.79195 12.2599L7.26844 13.0053C5.75615 13.7452 5 14.1152 5 14.575C5 15.0347 5.75615 15.4047 7.26844 16.1446L8.79195 16.8901C10.3042 17.63 11.0604 18 12 18C12.9396 18 13.6958 17.63 15.2081 16.8901L16.7316 16.1446C18.2439 15.4047 19 15.0347 19 14.575C19 14.1152 18.2439 13.7452 16.7316 13.0053L15.2081 12.2599C15.0192 12.1675 14.8422 12.0809 14.6751 12',
  d2: 'M19 14.5V18.2667C19 18.7678 18.2439 19.1711 16.7316 19.9776L15.2081 20.7902C13.6958 21.5967 12.9396 22 12 22C11.0604 22 10.3042 21.5967 8.79195 20.7902L7.26844 19.9776C5.75615 19.1711 5 18.7678 5 18.2667V14.5',
  d3: 'M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5Z',
  d4: 'M12 9V14.5',
  d5: 'M19 14.5L15 12H9L5 14.5L12 18L19 14.5Z',
  d6: 'M5 14.575C5 15.0347 5.75615 15.4047 7.26844 16.1446L8.79195 16.8901C10.3042 17.63 11.0604 18 12 18C12.9396 18 13.6958 17.63 15.2081 16.8901L16.7316 16.1446C18.2439 15.4047 19 15.0347 19 14.575M19 14.5V18.2667C19 18.7678 18.2439 19.1711 16.7316 19.9776L15.2081 20.7902C13.6958 21.5967 12.9396 22 12 22C11.0604 22 10.3042 21.5967 8.79195 20.7902L7.26844 19.9776C5.75615 19.1711 5 18.7678 5 18.2667V14.5',
  d7: 'M10.2805 11.7793C10.0474 11.3133 9.46806 11.1183 8.98646 11.3438C8.82274 11.4205 8.6497 11.5024 8.46766 11.5886L6.93463 12.3145C6.2499 12.6387 5.65903 12.9184 5.24518 13.1752C5.0306 13.3084 4.80105 13.4724 4.6188 13.6793C4.49938 13.8149 4.38731 13.9845 4.31874 14.1861C4.27462 14.2817 4.25 14.3881 4.25 14.5002V18.2669C4.25 18.9316 4.75672 19.3565 5.13742 19.6226C5.5528 19.9129 6.15248 20.2327 6.86935 20.615L8.57833 21.5265C9.95605 22.262 10.8708 22.7502 12 22.7502C13.1292 22.7502 14.044 22.262 15.4217 21.5265L17.1306 20.615C17.8475 20.2327 18.4472 19.9129 18.8626 19.6226C19.2433 19.3565 19.75 18.9316 19.75 18.2669V14.5002C19.75 14.3881 19.7254 14.2817 19.6813 14.1861C19.6127 13.9845 19.5006 13.8149 19.3812 13.6793C19.1989 13.4724 18.9694 13.3084 18.7548 13.1752C18.341 12.9184 17.7501 12.6387 17.0654 12.3145L15.5313 11.5881C15.3497 11.5022 15.1768 11.4203 15.0135 11.3438C14.5319 11.1183 13.9526 11.3133 13.7195 11.7793C13.4865 12.2454 13.688 12.806 14.1695 13.0315C14.3292 13.1063 14.4987 13.1866 14.682 13.2734L16.4448 14.1082C16.871 14.3108 17.0842 14.4121 17.0842 14.6016C17.0842 14.7912 16.871 14.8925 16.4448 15.0951L14.682 15.9299C13.1522 16.6543 12.6393 16.8751 12 16.8751C11.3607 16.8751 10.8478 16.6543 9.31797 15.9299L7.55522 15.0951C7.12897 14.8925 6.91584 14.7912 6.91584 14.6016C6.91584 14.4121 7.12897 14.3108 7.55522 14.1082L9.31797 13.2734C9.50131 13.1866 9.67084 13.1063 9.83045 13.0315C10.312 12.806 10.5135 12.2454 10.2805 11.7793Z',
  d8: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5C16.25 7.84721 14.3472 9.75 12 9.75C9.65279 9.75 7.75 7.84721 7.75 5.5Z',
  d9: 'M12 8C12.5523 8 13 8.44772 13 9V14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5V9C11 8.44772 11.4477 8 12 8Z',
  d10: 'M12 18L19 14.5V18.5L12 22L5 18.5V14.5L12 18Z',
  d11: 'M19 14.5L12 11L5 14.5',
  d12: 'M12 1.25C9.65279 1.25 7.75 3.15279 7.75 5.5C7.75 7.5913 9.26049 9.3298 11.25 9.68403V14.5H12.75V9.68403C14.7395 9.3298 16.25 7.5913 16.25 5.5C16.25 3.15279 14.3472 1.25 12 1.25Z',
  d13: 'M4.66406 13.8291L9.75 11.2861V12.9632L6.67671 14.4998L12 17.1615L17.3228 14.5001L14.25 12.9637V11.2867L19.3209 13.8221C19.3459 13.8339 19.3704 13.8473 19.3943 13.862C19.6154 13.9987 19.75 14.2401 19.75 14.5V18.5C19.75 18.7841 19.5895 19.0438 19.3354 19.1708L12.3354 22.6708C12.1243 22.7764 11.8757 22.7764 11.6646 22.6708L4.66459 19.1708C4.4105 19.0438 4.25 18.7841 4.25 18.5V14.5C4.25 14.2401 4.38459 13.9987 4.6057 13.862C4.62481 13.8502 4.6442 13.8391 4.66406 13.8291Z',
};

export const IconJoystick04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-stroke-rounded IconJoystick04StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconJoystick04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-duotone-rounded IconJoystick04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconJoystick04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-twotone-rounded IconJoystick04TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconJoystick04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-solid-rounded IconJoystick04SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconJoystick04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-bulk-rounded IconJoystick04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-stroke-sharp IconJoystick04StrokeSharp"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-04-solid-sharp IconJoystick04SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoystick04: TheIconSelfPack = {
  name: 'Joystick04',
  StrokeRounded: IconJoystick04StrokeRounded,
  DuotoneRounded: IconJoystick04DuotoneRounded,
  TwotoneRounded: IconJoystick04TwotoneRounded,
  SolidRounded: IconJoystick04SolidRounded,
  BulkRounded: IconJoystick04BulkRounded,
  StrokeSharp: IconJoystick04StrokeSharp,
  SolidSharp: IconJoystick04SolidSharp,
};