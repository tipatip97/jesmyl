import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11 7L12 8.66667M17 17L13.4 11',
  d3: 'M13 7L7 17',
  d4: 'M6.5 14H12.5M17.5 14L15.5 14',
  d5: 'M11 7L12 8.66667M13.4 11L17 17M13 7L7 17M15.5 14H17.5M6.5 14H12.5',
  d6: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM11.6431 6.61424C11.43 6.25906 10.9693 6.14388 10.6141 6.35699C10.2589 6.5701 10.1438 7.0308 10.3569 7.38599L11.1254 8.66678L8.37536 13.2501H6.5C6.08579 13.2501 5.75 13.5859 5.75 14.0001C5.75 14.4143 6.08579 14.7501 6.5 14.7501H7.47536L6.35688 16.6142C6.14377 16.9694 6.25894 17.4301 6.61413 17.6432C6.96931 17.8563 7.43001 17.7412 7.64312 17.386L9.22464 14.7501H12.5C12.9142 14.7501 13.25 14.4143 13.25 14.0001C13.25 13.5859 12.9142 13.2501 12.5 13.2501H10.1246L12.6351 9.06596C12.6404 9.05755 12.6455 9.04905 12.6504 9.04045L13.6431 7.38599C13.8562 7.0308 13.7411 6.5701 13.3859 6.35699C13.0307 6.14388 12.57 6.25906 12.3569 6.61424L12 7.20904L11.6431 6.61424ZM14.0431 10.6142C13.83 10.2591 13.3693 10.1439 13.0141 10.357C12.6589 10.5701 12.5438 11.0308 12.7569 11.386L16.3569 17.386C16.57 17.7412 17.0307 17.8563 17.3859 17.6432C17.7411 17.4301 17.8562 16.9694 17.6431 16.6142L16.5246 14.7501H17.5C17.9142 14.7501 18.25 14.4143 18.25 14.0001C18.25 13.5859 17.9142 13.2501 17.5 13.2501H15.6246L14.0431 10.6142Z',
  d7: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d8: 'M10.6141 6.35699C10.9693 6.14388 11.43 6.25906 11.6431 6.61424L12 7.20904L12.3569 6.61424C12.57 6.25906 13.0307 6.14388 13.3859 6.35699C13.7411 6.5701 13.8562 7.0308 13.6431 7.38599L12.6504 9.04045C12.6455 9.04905 12.6404 9.05755 12.6351 9.06596L10.1246 13.2501H12.5C12.9142 13.2501 13.25 13.5859 13.25 14.0001C13.25 14.4143 12.9142 14.7501 12.5 14.7501H9.22464L7.64312 17.386C7.43001 17.7412 6.96931 17.8563 6.61413 17.6432C6.25894 17.4301 6.14377 16.9694 6.35688 16.6142L7.47536 14.7501H6.5C6.08579 14.7501 5.75 14.4143 5.75 14.0001C5.75 13.5859 6.08579 13.2501 6.5 13.2501H8.37536L11.1254 8.66678L10.3569 7.38599C10.1438 7.0308 10.2589 6.5701 10.6141 6.35699ZM13.0141 10.357C13.3693 10.1439 13.83 10.2591 14.0431 10.6142L15.6246 13.2501H17.5C17.9142 13.2501 18.25 13.5859 18.25 14.0001C18.25 14.4143 17.9142 14.7501 17.5 14.7501H16.5246L17.6431 16.6142C17.8562 16.9694 17.7411 17.4301 17.3859 17.6432C17.0307 17.8563 16.57 17.7412 16.3569 17.386L12.7569 11.386C12.5438 11.0308 12.6589 10.5701 13.0141 10.357Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M10.5 6.5L11.8028 8.33802M17.5 17.5L13.4 11',
  d11: 'M13.5 6.5L6.5 17.5',
  d12: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM14.1307 6.91835L10.0916 13.2656H12.4979L12.4979 14.7656H9.13701L7.13073 17.9184L5.86523 17.113L7.35904 14.7656H6.49791V13.2656H8.31359L11.1757 8.76808L9.88659 6.94945L11.1103 6.08203L12.0454 7.40128L12.8652 6.11304L14.1307 6.91835ZM12.7641 11.4159L16.8641 17.9159L18.1328 17.1156L16.6505 14.7656H17.4979V13.2656H15.7044L14.0328 10.6156L12.7641 11.4159Z',
};

export const IconAppStoreStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-stroke-rounded IconAppStoreStrokeRounded"
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

export const IconAppStoreDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-duotone-rounded IconAppStoreDuotoneRounded"
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

export const IconAppStoreTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-twotone-rounded IconAppStoreTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAppStoreSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-solid-rounded IconAppStoreSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppStoreBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-bulk-rounded IconAppStoreBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAppStoreStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-stroke-sharp IconAppStoreStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAppStoreSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="app-store-solid-sharp IconAppStoreSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAppStore: TheIconSelfPack = {
  name: 'AppStore',
  StrokeRounded: IconAppStoreStrokeRounded,
  DuotoneRounded: IconAppStoreDuotoneRounded,
  TwotoneRounded: IconAppStoreTwotoneRounded,
  SolidRounded: IconAppStoreSolidRounded,
  BulkRounded: IconAppStoreBulkRounded,
  StrokeSharp: IconAppStoreStrokeSharp,
  SolidSharp: IconAppStoreSolidSharp,
};