import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V20.4C4 21.2837 4.71634 22 5.6 22C6.48366 22 7.2 21.2837 7.2 20.4V19.6C7.2 18.7163 7.91634 18 8.8 18C9.68366 18 10.4 18.7163 10.4 19.6V20.4C10.4 21.2837 11.1163 22 12 22C12.8837 22 13.6 21.2837 13.6 20.4V19.6C13.6 18.7163 14.3163 18 15.2 18C16.0837 18 16.8 18.7163 16.8 19.6V20.4C16.8 21.2837 17.5163 22 18.4 22C19.2837 22 20 21.2837 20 20.4V10Z',
  d2: 'M9.00896 10H9M15 10H14.991',
  d3: 'M12 1.25C7.16751 1.25 3.25 5.16751 3.25 10V20.4C3.25 21.6979 4.30213 22.75 5.6 22.75C6.89787 22.75 7.95 21.6979 7.95 20.4V19.6C7.95 19.1306 8.33056 18.75 8.8 18.75C9.26944 18.75 9.65 19.1306 9.65 19.6V20.4C9.65 21.6979 10.7021 22.75 12 22.75C13.2979 22.75 14.35 21.6979 14.35 20.4V19.6C14.35 19.1306 14.7306 18.75 15.2 18.75C15.6694 18.75 16.05 19.1306 16.05 19.6V20.4C16.05 21.6979 17.1021 22.75 18.4 22.75C19.6979 22.75 20.75 21.6979 20.75 20.4V10C20.75 5.16751 16.8325 1.25 12 1.25ZM9 8.75C8.30964 8.75 7.75 9.30964 7.75 10C7.75 10.6904 8.30964 11.25 9 11.25H9.00896C9.69931 11.25 10.259 10.6904 10.259 10C10.259 9.30964 9.69931 8.75 9.00896 8.75H9ZM14.991 8.75C14.3007 8.75 13.741 9.30964 13.741 10C13.741 10.6904 14.3007 11.25 14.991 11.25H15C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75H14.991Z',
  d4: 'M3.25 10C3.25 5.16751 7.16751 1.25 12 1.25C16.8325 1.25 20.75 5.16751 20.75 10V20.4C20.75 21.6979 19.6979 22.75 18.4 22.75C17.1021 22.75 16.05 21.6979 16.05 20.4V19.6C16.05 19.1306 15.6694 18.75 15.2 18.75C14.7306 18.75 14.35 19.1306 14.35 19.6V20.4C14.35 21.6979 13.2979 22.75 12 22.75C10.7021 22.75 9.65 21.6979 9.65 20.4V19.6C9.65 19.1306 9.26944 18.75 8.8 18.75C8.33056 18.75 7.95 19.1306 7.95 19.6V20.4C7.95 21.6979 6.89787 22.75 5.6 22.75C4.30213 22.75 3.25 21.6979 3.25 20.4V10Z',
  d5: 'M7.75 10C7.75 9.30964 8.30964 8.75 9 8.75H9.00896C9.69931 8.75 10.259 9.30964 10.259 10C10.259 10.6904 9.69931 11.25 9.00896 11.25H9C8.30964 11.25 7.75 10.6904 7.75 10ZM13.741 10C13.741 9.30964 14.3007 8.75 14.991 8.75H15C15.6904 8.75 16.25 9.30964 16.25 10C16.25 10.6904 15.6904 11.25 15 11.25H14.991C14.3007 11.25 13.741 10.6904 13.741 10Z',
  d6: 'M12 1.5C16.4183 1.5 20 5.08172 20 9.5V20.9C20 21.7837 19.2837 22.5 18.4 22.5C17.5163 22.5 16.8 21.7837 16.8 20.9V20.1C16.8 19.2163 16.0837 18.5 15.2 18.5C14.3163 18.5 13.6 19.2163 13.6 20.1V20.9C13.6 21.7837 12.8837 22.5 12 22.5C11.1163 22.5 10.4 21.7837 10.4 20.9V20.1C10.4 19.2163 9.68366 18.5 8.8 18.5C7.91634 18.5 7.2 19.2163 7.2 20.1V20.9C7.2 21.7837 6.48366 22.5 5.6 22.5C4.71634 22.5 4 21.7837 4 20.9V9.5C4 5.08172 7.58172 1.5 12 1.5ZM9 8.75C8.30964 8.75 7.75 9.30964 7.75 10C7.75 10.6904 8.30964 11.25 9 11.25H9.00896C9.69931 11.25 10.259 10.6904 10.259 10C10.259 9.30964 9.69931 8.75 9.00896 8.75H9ZM14.991 8.75C14.3007 8.75 13.741 9.30964 13.741 10C13.741 10.6904 14.3007 11.25 14.991 11.25H15C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75H14.991Z',
};

export const IconPacman02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-stroke-rounded IconPacman02StrokeRounded"
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

export const IconPacman02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-duotone-rounded IconPacman02DuotoneRounded"
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

export const IconPacman02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-twotone-rounded IconPacman02TwotoneRounded"
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

export const IconPacman02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-solid-rounded IconPacman02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPacman02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-bulk-rounded IconPacman02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPacman02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-stroke-sharp IconPacman02StrokeSharp"
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

export const IconPacman02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-02-solid-sharp IconPacman02SolidSharp"
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

export const iconPackOfPacman02: TheIconSelfPack = {
  name: 'Pacman02',
  StrokeRounded: IconPacman02StrokeRounded,
  DuotoneRounded: IconPacman02DuotoneRounded,
  TwotoneRounded: IconPacman02TwotoneRounded,
  SolidRounded: IconPacman02SolidRounded,
  BulkRounded: IconPacman02BulkRounded,
  StrokeSharp: IconPacman02StrokeSharp,
  SolidSharp: IconPacman02SolidSharp,
};