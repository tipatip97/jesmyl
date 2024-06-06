import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M15 9H9C7.58579 9 6.87868 9 6.43934 9.43934C6 9.87868 6 10.5858 6 12C6 13.4142 6 14.1213 6.43934 14.5607C6.87868 15 7.58579 15 9 15H15C16.4142 15 17.1213 15 17.5607 14.5607C18 14.1213 18 13.4142 18 12C18 10.5858 18 9.87868 17.5607 9.43934C17.1213 9 16.4142 9 15 9Z',
  d3: 'M14.4912 12H14.5002M9.5 12H9.50897',
  d4: 'M3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276ZM6.43934 9.43934C6.87868 9 7.58579 9 9 9H15C16.4142 9 17.1213 9 17.5607 9.43934C18 9.87868 18 10.5858 18 12C18 13.4142 18 14.1213 17.5607 14.5607C17.1213 15 16.4142 15 15 15H9C7.58579 15 6.87868 15 6.43934 14.5607C6 14.1213 6 13.4142 6 12C6 10.5858 6 9.87868 6.43934 9.43934Z',
  d5: 'M17.0242 1.90522C15.7462 1.74998 14.0202 1.74999 11.9487 1.75C9.87731 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.86064 1.90522 7.16661C1.74998 8.44458 1.74999 10.0681 1.75 12.1396V12.1396C1.74999 14.211 1.74998 15.7463 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.32329 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25C14.0202 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513C22.25 9.97982 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.32329 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM15.0494 8.25H15.0494H15.0494H8.95063H8.95058H8.95056C8.28572 8.24996 7.71289 8.24993 7.25416 8.31161C6.76252 8.37771 6.29126 8.52677 5.90901 8.90901C5.52677 9.29126 5.37771 9.76252 5.31161 10.2542C5.24993 10.7129 5.24996 11.3845 5.25 12.0494V12.0494C5.24996 12.7143 5.24993 13.2871 5.31161 13.7458C5.37771 14.2375 5.52677 14.7087 5.90901 15.091C6.29126 15.4732 6.76252 15.6223 7.25416 15.6884C7.71291 15.7501 8.28577 15.75 8.95063 15.75H15.0494C15.7142 15.75 16.2871 15.7501 16.7458 15.6884C17.2375 15.6223 17.7087 15.4732 18.091 15.091C18.4732 14.7087 18.6223 14.2375 18.6884 13.7458C18.7501 13.2871 18.75 12.7143 18.75 12.0495V12.0494C18.75 11.3845 18.7501 10.7129 18.6884 10.2542C18.6223 9.76252 18.4732 9.29126 18.091 8.90901C17.7087 8.52677 17.2375 8.37771 16.7458 8.31161C16.2871 8.24993 15.7143 8.24996 15.0494 8.25Z',
  d6: 'M8.5 12C8.5 11.4477 8.94772 11 9.5 11H9.50897C10.0613 11 10.509 11.4477 10.509 12C10.509 12.5523 10.0613 13 9.50897 13H9.5C8.94772 13 8.5 12.5523 8.5 12ZM13.4912 12C13.4912 11.4477 13.9389 11 14.4912 11H14.5002C15.0525 11 15.5002 11.4477 15.5002 12C15.5002 12.5523 15.0525 13 14.5002 13H14.4912C13.9389 13 13.4912 12.5523 13.4912 12Z',
  d7: 'M11.9487 1.75C14.0202 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.32329 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.97982 22.25 12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.0202 22.25 11.9487 22.25C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.32329 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7463 1.74999 14.211 1.75 12.1396V12.1396C1.74999 10.0681 1.74998 8.44458 1.90522 7.16661C2.06386 5.86064 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75Z',
  d8: 'M15.0495 8.25H15.0494H15.0494H8.95063H8.95058H8.95053C8.28571 8.24997 7.71288 8.24994 7.25416 8.31161C6.76252 8.37771 6.29126 8.52677 5.90902 8.90901C5.52677 9.29126 5.37771 9.76252 5.31161 10.2542C5.24993 10.7129 5.24997 11.3845 5.25 12.0494V12.0494V12.0495C5.24997 12.7143 5.24994 13.2871 5.31161 13.7458C5.37771 14.2375 5.52677 14.7087 5.90902 15.091C6.29126 15.4732 6.76252 15.6223 7.25416 15.6884C7.71291 15.7501 8.28577 15.75 8.95064 15.75H15.0494C15.7142 15.75 16.2871 15.7501 16.7458 15.6884C17.2375 15.6223 17.7087 15.4732 18.091 15.091C18.4732 14.7087 18.6223 14.2375 18.6884 13.7458C18.7501 13.2871 18.75 12.7143 18.75 12.0494V12.0494V12.0494C18.75 11.3845 18.7501 10.7129 18.6884 10.2542C18.6223 9.76252 18.4732 9.29126 18.091 8.90902C17.7087 8.52677 17.2375 8.37771 16.7458 8.31161C16.2871 8.24994 15.7143 8.24997 15.0495 8.25ZM9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13H9.50897C10.0613 13 10.509 12.5523 10.509 12C10.509 11.4477 10.0613 11 9.50897 11H9.5ZM14.4912 11C13.9389 11 13.4912 11.4477 13.4912 12C13.4912 12.5523 13.9389 13 14.4912 13H14.5002C15.0525 13 15.5002 12.5523 15.5002 12C15.5002 11.4477 15.0525 11 14.5002 11H14.4912Z',
  d9: 'M21 3H3V21H21V3Z',
  d10: 'M18 9H6V15H18V9Z',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6 8.25C5.58579 8.25 5.25 8.58579 5.25 9V15C5.25 15.4142 5.58579 15.75 6 15.75H18C18.4142 15.75 18.75 15.4142 18.75 15V9C18.75 8.58579 18.4142 8.25 18 8.25H6Z',
};

export const IconPowerSocket02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-stroke-rounded IconPowerSocket02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPowerSocket02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-duotone-rounded IconPowerSocket02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconPowerSocket02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-twotone-rounded IconPowerSocket02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPowerSocket02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-solid-rounded IconPowerSocket02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPowerSocket02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-bulk-rounded IconPowerSocket02BulkRounded"
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

export const IconPowerSocket02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-stroke-sharp IconPowerSocket02StrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPowerSocket02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="power-socket-02-solid-sharp IconPowerSocket02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const iconPackOfPowerSocket02: TheIconSelfPack = {
  name: 'PowerSocket02',
  StrokeRounded: IconPowerSocket02StrokeRounded,
  DuotoneRounded: IconPowerSocket02DuotoneRounded,
  TwotoneRounded: IconPowerSocket02TwotoneRounded,
  SolidRounded: IconPowerSocket02SolidRounded,
  BulkRounded: IconPowerSocket02BulkRounded,
  StrokeSharp: IconPowerSocket02StrokeSharp,
  SolidSharp: IconPowerSocket02SolidSharp,
};