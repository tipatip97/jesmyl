import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z',
  d2: 'M8.02593 15.6067C8.00876 15.4067 8 15.2044 8 15C8 11.134 11.134 8 15 8C15.2867 8 15.5693 8.01723 15.8469 8.05071M18.9969 9.25251C20.8121 10.5172 22 12.6199 22 15C22 18.866 18.866 22 15 22C12.6199 22 10.5172 20.8121 9.25251 18.9969',
  d3: 'M6.5 2.5L15.5 11.5M2.5 6.5L11.5 15.5',
  d4: 'M9.00023 16C12.8662 16 16.0002 12.866 16.0002 8.99999C16.0002 8.68201 15.979 8.36899 15.938 8.06226C19.3606 8.52048 22.0002 11.452 22.0002 15C22.0002 18.866 18.8662 22 15.0002 22C11.4522 22 8.52072 19.3603 8.0625 15.9377C8.36923 15.9788 8.68226 16 9.00023 16Z',
  d5: 'M9.00058 18.2506C8.50295 18.2506 8.25413 18.2506 8.16854 18.4055C8.08295 18.5605 8.20045 18.7473 8.43545 19.1209C9.80684 21.3014 12.2345 22.7506 15.0006 22.7506C19.2808 22.7506 22.7506 19.2808 22.7506 15.0006C22.7506 12.2345 21.3014 9.80685 19.1209 8.43545C18.7473 8.20045 18.5605 8.08295 18.4055 8.16854C18.2506 8.25413 18.2506 8.50295 18.2506 9.00058C18.2506 14.1092 14.1092 18.2506 9.00058 18.2506Z',
  d6: 'M3.21248 8.4575C3.19595 8.63611 3.1875 8.81707 3.1875 9C3.1875 11.5334 4.8082 13.6882 7.06933 14.4842C7.09618 13.8399 7.2017 13.2159 7.37653 12.6216L3.21248 8.4575ZM3.83204 6.33702L8.22421 10.7292C8.85489 9.71377 9.71377 8.85489 10.7292 8.22421L6.33702 3.83204C5.26418 4.38598 4.38598 5.26418 3.83204 6.33702ZM8.4575 3.21248L12.6216 7.37653C13.2159 7.2017 13.8399 7.09619 14.4842 7.06933C13.6882 4.8082 11.5334 3.1875 9 3.1875C8.81707 3.1875 8.63611 3.19595 8.4575 3.21248ZM14.8125 9C14.6296 9 14.4486 9.00845 14.27 9.02498L14.7875 9.5425C14.804 9.36389 14.8125 9.18293 14.8125 9ZM14.168 11.663L12.1495 9.64454C11.0767 10.1985 10.1985 11.0767 9.64454 12.1495L11.663 14.168C12.7358 13.614 13.614 12.7358 14.168 11.663ZM9.5425 14.7875L9.02498 14.27C9.00845 14.4486 9 14.6296 9 14.8125C9.18293 14.8125 9.36389 14.804 9.5425 14.7875ZM1.25 9C1.25 4.71979 4.71979 1.25 9 1.25C13.2802 1.25 16.75 4.71979 16.75 9C16.75 13.2802 13.2802 16.75 9 16.75C4.71979 16.75 1.25 13.2802 1.25 9Z',
  d7: 'M2.84541 7.90607C2.78271 8.26127 2.75 8.62681 2.75 9C2.75 11.844 4.65017 14.2452 7.25 15.0019C7.25 15.0013 7.25 15.0006 7.25 15C7.25 14.1873 7.3751 13.4038 7.60708 12.6677L2.84541 7.90607ZM3.36135 6.30069L8.25 11.1893C8.94399 9.96269 9.96269 8.94399 11.1893 8.25L6.30069 3.36135C5.01741 3.97679 3.97679 5.01741 3.36135 6.30069ZM7.90607 2.84541L12.6677 7.60708C13.4038 7.3751 14.1873 7.25 15 7.25C15.0006 7.25 15.0013 7.25 15.0019 7.25C14.2452 4.65017 11.844 2.75 9 2.75C8.62681 2.75 8.26127 2.78271 7.90607 2.84541ZM15.2453 8.75471C15.1639 8.75158 15.0822 8.75 15 8.75C14.6268 8.75 14.2613 8.78271 13.9061 8.84541L15.1546 10.0939C15.2173 9.73873 15.25 9.37319 15.25 9C15.25 8.91783 15.2484 8.83605 15.2453 8.75471ZM14.6386 11.6993L12.3007 9.36135C11.0174 9.97679 9.97679 11.0174 9.36135 12.3007L11.6993 14.6386C12.9826 14.0232 14.0232 12.9826 14.6386 11.6993ZM10.0939 15.1546L8.84541 13.9061C8.78271 14.2613 8.75 14.6268 8.75 15C8.75 15.0822 8.75158 15.1639 8.75471 15.2453C8.83605 15.2484 8.91783 15.25 9 15.25C9.37319 15.25 9.73873 15.2173 10.0939 15.1546ZM1.25 9C1.25 4.71979 4.71979 1.25 9 1.25C12.9288 1.25 16.1737 4.1727 16.6811 7.96274C16.7266 8.30238 16.75 8.64865 16.75 9C16.75 13.2802 13.2802 16.75 9 16.75C8.64865 16.75 8.30238 16.7266 7.96274 16.6811C4.1727 16.1737 1.25 12.9288 1.25 9Z',
  d8: 'M7.93359 18.1892C9.14942 20.8787 11.8557 22.7501 14.9991 22.7501C19.2793 22.7501 22.7491 19.2803 22.7491 15.0001C22.7491 11.8567 20.8777 9.1504 18.1882 7.93457C18.2285 8.28496 18.2491 8.64056 18.2491 9.00011C18.2491 14.1087 14.1078 18.2501 8.99913 18.2501C8.63958 18.2501 8.28398 18.2295 7.93359 18.1892Z',
};

export const IconTransparencyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-stroke-rounded IconTransparencyStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransparencyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-duotone-rounded IconTransparencyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransparencyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-twotone-rounded IconTransparencyTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransparencySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-solid-rounded IconTransparencySolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTransparencyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-bulk-rounded IconTransparencyBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconTransparencyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-stroke-sharp IconTransparencyStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTransparencySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="transparency-solid-sharp IconTransparencySolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfTransparency: TheIconSelfPack = {
  name: 'Transparency',
  StrokeRounded: IconTransparencyStrokeRounded,
  DuotoneRounded: IconTransparencyDuotoneRounded,
  TwotoneRounded: IconTransparencyTwotoneRounded,
  SolidRounded: IconTransparencySolidRounded,
  BulkRounded: IconTransparencyBulkRounded,
  StrokeSharp: IconTransparencyStrokeSharp,
  SolidSharp: IconTransparencySolidSharp,
};