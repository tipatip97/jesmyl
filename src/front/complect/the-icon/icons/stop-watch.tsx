import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 5.5L19 4.5M5 4.5L6 5.5',
  d2: 'M12 9.5V13.5L14 15.5',
  d3: 'M12 3.5V2',
  d4: 'M10 2H14',
  d5: 'M4.29289 3.91789C4.68342 3.52737 5.31658 3.52737 5.70711 3.91789L6.70711 4.91789C7.09763 5.30842 7.09763 5.94158 6.70711 6.33211C6.31658 6.72263 5.68342 6.72263 5.29289 6.33211L4.29289 5.33211C3.90237 4.94158 3.90237 4.30842 4.29289 3.91789ZM19.7071 3.91789C20.0976 4.30842 20.0976 4.94158 19.7071 5.33211L18.7071 6.33211C18.3166 6.72263 17.6834 6.72263 17.2929 6.33211C16.9024 5.94158 16.9024 5.30842 17.2929 4.91789L18.2929 3.91789C18.6834 3.52737 19.3166 3.52737 19.7071 3.91789Z',
  d6: 'M12 3.375C6.61522 3.375 2.25 7.74022 2.25 13.125C2.25 18.5098 6.61522 22.875 12 22.875C17.3848 22.875 21.75 18.5098 21.75 13.125C21.75 7.74022 17.3848 3.375 12 3.375ZM13 9.625C13 9.07272 12.5523 8.625 12 8.625C11.4477 8.625 11 9.07272 11 9.625V13.625C11 13.8902 11.1054 14.1446 11.2929 14.3321L13.2929 16.3321C13.6834 16.7226 14.3166 16.7226 14.7071 16.3321C15.0976 15.9416 15.0976 15.3084 14.7071 14.9179L13 13.2108V9.625Z',
  d7: 'M9 2.125C9 1.57272 9.44772 1.125 10 1.125H14C14.5523 1.125 15 1.57272 15 2.125C15 2.67728 14.5523 3.125 14 3.125H13V3.625C13 4.17728 12.5523 4.625 12 4.625C11.4477 4.625 11 4.17728 11 3.625V3.125H10C9.44772 3.125 9 2.67728 9 2.125Z',
  d8: 'M9 2.125C9 1.57272 9.44772 1.125 10 1.125H14C14.5523 1.125 15 1.57272 15 2.125C15 2.67728 14.5523 3.125 14 3.125H13V3.42566C12.6712 3.39216 12.3376 3.375 12 3.375C11.6624 3.375 11.3288 3.39216 11 3.42566V3.125H10C9.44772 3.125 9 2.67728 9 2.125ZM6.71761 4.92855C6.71414 4.92498 6.71064 4.92143 6.70711 4.91789L5.70711 3.91789C5.31658 3.52737 4.68342 3.52737 4.29289 3.91789C3.90237 4.30842 3.90237 4.94158 4.29289 5.33211L5.14873 6.18795C5.626 5.71655 6.15167 5.29404 6.71761 4.92855ZM18.8513 6.18795L19.7071 5.33211C20.0976 4.94158 20.0976 4.30842 19.7071 3.91789C19.3166 3.52737 18.6834 3.52737 18.2929 3.91789L17.2929 4.91789C17.2894 4.92143 17.2859 4.92498 17.2824 4.92855C17.8483 5.29404 18.374 5.71655 18.8513 6.18795Z',
  d9: 'M2.25 13.125C2.25 7.74022 6.61522 3.375 12 3.375C17.3848 3.375 21.75 7.74022 21.75 13.125C21.75 18.5098 17.3848 22.875 12 22.875C6.61522 22.875 2.25 18.5098 2.25 13.125Z',
  d10: 'M12 8.625C12.5523 8.625 13 9.07272 13 9.625V13.2108L14.7071 14.9179C15.0976 15.3084 15.0976 15.9416 14.7071 16.3321C14.3166 16.7226 13.6834 16.7226 13.2929 16.3321L11.2929 14.3321C11.1054 14.1446 11 13.8902 11 13.625V9.625C11 9.07272 11.4477 8.625 12 8.625Z',
  d11: 'M18 5.5L19.5 4M4.5 4L6 5.5',
  d12: 'M12 8.5V13.5L14.5 16',
  d13: 'M12 3.5V2M9 2H15',
  d14: 'M5.46875 6.03039L3.96875 4.53039L5.02941 3.46973L6.52941 4.96973L5.46875 6.03039ZM20.0294 4.53039L18.5294 6.03039L17.4688 4.96973L18.9688 3.46973L20.0294 4.53039Z',
  d15: 'M12 3.25C6.61522 3.25 2.25 7.61522 2.25 13C2.25 18.3848 6.61522 22.75 12 22.75C17.3848 22.75 21.75 18.3848 21.75 13C21.75 7.61522 17.3848 3.25 12 3.25ZM12.75 13.1893V8.5H11.25V13.8107L13.9697 16.5303L15.0303 15.4697L12.75 13.1893Z',
  d16: 'M11.25 2.75H9V1.25H15V2.75H12.75V3.5H11.25V2.75Z',
};

export const IconStopWatchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-stroke-rounded IconStopWatchStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const IconStopWatchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-duotone-rounded IconStopWatchDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="13" 
        r="9" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const IconStopWatchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-twotone-rounded IconStopWatchTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const IconStopWatchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-solid-rounded IconStopWatchSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStopWatchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-bulk-rounded IconStopWatchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStopWatchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-stroke-sharp IconStopWatchStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="13" 
        r="9" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStopWatchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-watch-solid-sharp IconStopWatchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStopWatch: TheIconSelfPack = {
  name: 'StopWatch',
  StrokeRounded: IconStopWatchStrokeRounded,
  DuotoneRounded: IconStopWatchDuotoneRounded,
  TwotoneRounded: IconStopWatchTwotoneRounded,
  SolidRounded: IconStopWatchSolidRounded,
  BulkRounded: IconStopWatchBulkRounded,
  StrokeSharp: IconStopWatchStrokeSharp,
  SolidSharp: IconStopWatchSolidSharp,
};