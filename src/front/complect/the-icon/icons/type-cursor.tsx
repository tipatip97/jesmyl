import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 16C5.07003 16 4.60504 16 4.22354 15.8978C3.18827 15.6204 2.37962 14.8117 2.10222 13.7765C2 13.395 2 12.93 2 12C2 11.07 2 10.605 2.10222 10.2235C2.37962 9.18827 3.18827 8.37962 4.22354 8.10222C4.60504 8 5.07003 8 6 8M12 16H18C18.93 16 19.395 16 19.7765 15.8978C20.8117 15.6204 21.6204 14.8117 21.8978 13.7765C22 13.395 22 12.93 22 12C22 11.07 22 10.605 21.8978 10.2235C21.6204 9.18827 20.8117 8.37962 19.7765 8.10222C19.395 8 18.93 8 18 8H12',
  d2: 'M7 3H9M11 3H9M9 3V21M9 21H7M9 21H11',
  d3: 'M4.22354 15.8978C4.60504 16 5.07003 16 6 16H12H18C18.93 16 19.395 16 19.7765 15.8978C20.8117 15.6204 21.6204 14.8117 21.8978 13.7765C22 13.395 22 12.93 22 12C22 11.07 22 10.605 21.8978 10.2235C21.6204 9.18827 20.8117 8.37962 19.7765 8.10222C19.395 8 18.93 8 18 8H12H6C5.07003 8 4.60504 8 4.22354 8.10222C3.18827 8.37962 2.37962 9.18827 2.10222 10.2235C2 10.605 2 11.07 2 12C2 12.93 2 13.395 2.10222 13.7765C2.37962 14.8117 3.18827 15.6204 4.22354 15.8978Z',
  d4: 'M5.86252 6.99993C5.90771 6.99995 5.95356 6.99997 6.0001 6.99997C6.55238 6.99997 7.0001 7.44769 7.0001 7.99997C7.0001 8.55226 6.55238 8.99997 6.0001 8.99997C5.00574 8.99997 4.70474 9.00856 4.48246 9.06812C3.79227 9.25306 3.25318 9.79215 3.06824 10.4823C3.00869 10.7046 3.0001 11.0056 3.0001 12C3.0001 12.9943 3.00869 13.2953 3.06824 13.5176C3.25318 14.2078 3.79227 14.7469 4.48246 14.9318C4.70474 14.9914 5.00574 15 6.0001 15C6.55238 15 7.0001 15.4477 7.0001 16C7.0001 16.5523 6.55238 17 6.0001 17C5.95356 17 5.9077 17 5.86251 17C5.06713 17.0005 4.47647 17.0008 3.96482 16.8637C2.58445 16.4938 1.50626 15.4156 1.13639 14.0353C0.999297 13.5236 0.999617 12.9329 1.00005 12.1376C1.00007 12.0924 1.0001 12.0465 1.0001 12C1.0001 11.9534 1.00007 11.9076 1.00005 11.8624C0.999617 11.067 0.999297 10.4763 1.13639 9.9647C1.50626 8.58433 2.58445 7.50614 3.96482 7.13627C4.47647 6.99917 5.06713 6.99949 5.86252 6.99993ZM19.5177 9.06812C19.2955 9.00856 18.9944 8.99997 18.0001 8.99997H12.0001C11.4478 8.99997 11.0001 8.55226 11.0001 7.99997C11.0001 7.44769 11.4478 6.99997 12.0001 6.99997H18.0001C18.0466 6.99997 18.0925 6.99995 18.1377 6.99993C18.9331 6.99949 19.5237 6.99917 20.0354 7.13627C21.4157 7.50614 22.4939 8.58433 22.8638 9.9647C23.0009 10.4764 23.0006 11.067 23.0001 11.8624C23.0001 11.9076 23.0001 11.9534 23.0001 12C23.0001 12.0465 23.0001 12.0924 23.0001 12.1375C23.0006 12.9329 23.0009 13.5236 22.8638 14.0353C22.4939 15.4156 21.4157 16.4938 20.0354 16.8637C19.5237 17.0008 18.9331 17.0005 18.1377 17C18.0925 17 18.0466 17 18.0001 17H12.0001C11.4478 17 11.0001 16.5523 11.0001 16C11.0001 15.4477 11.4478 15 12.0001 15H18.0001C18.9944 15 19.2955 14.9914 19.5177 14.9318C20.2079 14.7469 20.747 14.2078 20.9319 13.5176C20.9915 13.2953 21.0001 12.9943 21.0001 12C21.0001 11.0056 20.9915 10.7046 20.9319 10.4823C20.747 9.79215 20.2079 9.25306 19.5177 9.06812Z',
  d5: 'M6 3C6 2.44772 6.44772 2 7 2H11C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4H10V20H11C11.5523 20 12 20.4477 12 21C12 21.5523 11.5523 22 11 22H7C6.44772 22 6 21.5523 6 21C6 20.4477 6.44772 20 7 20H8V4H7C6.44772 4 6 3.55228 6 3Z',
  d6: 'M5.99908 16L1.99805 15.9999L1.99908 7.99991L5.99908 7.99997M11.9991 16L21.9991 15.9999V7.99988L11.9991 7.99997',
  d7: 'M6 3H9M12 3H9M9 3V21M9 21H6M9 21H12',
  d8: 'M20.9991 8.99989L11.9991 8.99997L11.9991 6.99997L21.9991 6.99988C22.2643 6.99988 22.5186 7.10523 22.7062 7.29277C22.8937 7.4803 22.9991 7.73466 22.9991 7.99988V15.9999C22.9991 16.5522 22.5514 16.9999 21.9991 16.9999L11.9991 17L11.9991 15L20.9991 14.9999V8.99989ZM0.999079 7.99978C0.99915 7.44754 1.44685 6.9999 1.99909 6.99991L5.99909 6.99997L5.99906 8.99997L2.99895 8.99993L2.99818 14.9999L5.9991 15L5.99905 17L1.99802 16.9999C1.73279 16.9999 1.47842 16.8945 1.29089 16.7069C1.10335 16.5194 0.998013 16.265 0.998047 15.9997L0.999079 7.99978Z',
  d9: 'M8 4H6V2H12V4H10V20H12V22H6V20H8V4Z',
};

export const IconTypeCursorStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-stroke-rounded IconTypeCursorStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTypeCursorDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-duotone-rounded IconTypeCursorDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTypeCursorTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-twotone-rounded IconTypeCursorTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTypeCursorSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-solid-rounded IconTypeCursorSolidRounded"
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

export const IconTypeCursorBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-bulk-rounded IconTypeCursorBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTypeCursorStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-stroke-sharp IconTypeCursorStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTypeCursorSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="type-cursor-solid-sharp IconTypeCursorSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTypeCursor: TheIconSelfPack = {
  name: 'TypeCursor',
  StrokeRounded: IconTypeCursorStrokeRounded,
  DuotoneRounded: IconTypeCursorDuotoneRounded,
  TwotoneRounded: IconTypeCursorTwotoneRounded,
  SolidRounded: IconTypeCursorSolidRounded,
  BulkRounded: IconTypeCursorBulkRounded,
  StrokeSharp: IconTypeCursorStrokeSharp,
  SolidSharp: IconTypeCursorSolidSharp,
};