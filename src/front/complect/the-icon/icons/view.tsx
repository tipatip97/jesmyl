import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z',
  d2: 'M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z',
  d3: 'M22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C7.31078 5 3.8221 9.12944 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C16.6892 19 20.1779 14.8706 21.544 12.955C21.848 12.5287 22 12.3155 22 12ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z',
  d4: 'M5.52031 6.71298C7.22595 5.38141 9.42944 4.25 12 4.25C14.5706 4.25 16.774 5.38141 18.4797 6.71298C20.1869 8.04576 21.4487 9.61974 22.1546 10.6095L22.2078 10.6837C22.461 11.0358 22.75 11.4378 22.75 12C22.75 12.5622 22.461 12.9642 22.2078 13.3163L22.1546 13.3905C21.4487 14.3803 20.1869 15.9542 18.4797 17.287C16.774 18.6186 14.5706 19.75 12 19.75C9.42944 19.75 7.22595 18.6186 5.52031 17.287C3.81313 15.9542 2.55126 14.3803 1.84541 13.3905L1.79219 13.3163C1.53904 12.9642 1.25 12.5622 1.25 12C1.25 11.4378 1.53904 11.0358 1.79219 10.6837L1.84541 10.6095C2.55126 9.61974 3.81313 8.04576 5.52031 6.71298ZM8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12Z',
  d5: 'M12 4.25C9.42944 4.25 7.22595 5.38141 5.52031 6.71298C3.81313 8.04576 2.55126 9.61974 1.84541 10.6095L1.79219 10.6837C1.53904 11.0358 1.25 11.4378 1.25 12C1.25 12.5622 1.53904 12.9642 1.79219 13.3163L1.84541 13.3905C2.55126 14.3803 3.81313 15.9542 5.52031 17.287C7.22595 18.6186 9.42944 19.75 12 19.75C14.5706 19.75 16.774 18.6186 18.4797 17.287C20.1869 15.9542 21.4487 14.3803 22.1546 13.3905L22.2078 13.3163C22.461 12.9642 22.75 12.5622 22.75 12C22.75 11.4378 22.461 11.0358 22.2078 10.6837L22.1546 10.6095C21.4487 9.61974 20.1869 8.04576 18.4797 6.71298C16.774 5.38141 14.5706 4.25 12 4.25Z',
  d6: 'M12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5Z',
  d7: 'M12 5C17.5228 5 22 12 22 12C22 12 17.5228 19 12 19C6.47715 19 2 12 2 12C2 12 6.47715 5 12 5Z',
  d8: 'M22.579 12.253C22.3218 12.635 21.8797 13.2917 21.6817 13.5517C21.1667 14.2283 20.4202 15.1324 19.4946 16.0391C17.6729 17.8238 15.0245 19.75 12 19.75C8.9755 19.75 6.32708 17.8238 4.50536 16.0391C3.57982 15.1324 2.83325 14.2283 2.31826 13.5517C2.12034 13.2917 1.67823 12.6351 1.42103 12.2531C1.34302 12.1372 1.28201 12.0466 1.25 12C1.28201 11.9534 1.34302 11.8628 1.42103 11.7469C1.67823 11.3649 2.12034 10.7083 2.31826 10.4483C2.83325 9.77169 3.57982 8.86758 4.50536 7.96086C6.32708 6.17619 8.9755 4.25 12 4.25C15.0245 4.25 17.6729 6.17619 19.4946 7.96086C20.4202 8.86758 21.1667 9.77169 21.6817 10.4483C21.8797 10.7083 22.3218 11.365 22.579 11.747C22.657 11.8628 22.718 11.9534 22.75 12C22.718 12.0466 22.657 12.1372 22.579 12.253ZM12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5Z',
};

export const IconViewStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-stroke-rounded IconViewStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconViewDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-duotone-rounded IconViewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconViewTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-twotone-rounded IconViewTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconViewSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-solid-rounded IconViewSolidRounded"
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

export const IconViewBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-bulk-rounded IconViewBulkRounded"
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

export const IconViewStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-stroke-sharp IconViewStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconViewSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="view-solid-sharp IconViewSolidSharp"
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

export const iconPackOfView: TheIconSelfPack = {
  name: 'View',
  StrokeRounded: IconViewStrokeRounded,
  DuotoneRounded: IconViewDuotoneRounded,
  TwotoneRounded: IconViewTwotoneRounded,
  SolidRounded: IconViewSolidRounded,
  BulkRounded: IconViewBulkRounded,
  StrokeSharp: IconViewStrokeSharp,
  SolidSharp: IconViewSolidSharp,
};