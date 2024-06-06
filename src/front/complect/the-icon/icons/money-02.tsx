import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.549 12C14.549 13.3807 13.4297 14.5 12.049 14.5C10.6683 14.5 9.54903 13.3807 9.54903 12C9.54903 10.6193 10.6683 9.5 12.049 9.5C13.4297 9.5 14.549 10.6193 14.549 12Z',
  d2: 'M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z',
  d3: 'M18.5098 12H18.5008',
  d4: 'M5.5 12H5.49102',
  d5: 'M3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 8.46252 22 6.69377 20.9472 5.5129C20.7788 5.32403 20.5932 5.14935 20.3925 4.99087C19.1379 4 17.2586 4 13.5 4H10.5C6.74142 4 4.86213 4 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129ZM12.051 14.5C13.4317 14.5 14.551 13.3807 14.551 12C14.551 10.6193 13.4317 9.5 12.051 9.5C10.6703 9.5 9.55099 10.6193 9.55099 12C9.55099 13.3807 10.6703 14.5 12.051 14.5Z',
  d6: 'M13.5475 3.25H13.5475H10.4525H10.4525C8.61345 3.24999 7.16917 3.24998 6.03058 3.3786C4.86842 3.50988 3.926 3.78362 3.14263 4.40229C2.90811 4.58749 2.69068 4.79205 2.49298 5.0138C1.82681 5.76101 1.52932 6.66669 1.38763 7.77785C1.24998 8.85727 1.24999 10.2232 1.25 11.9472V11.9473V12.0527V12.0527C1.24999 13.7767 1.24998 15.1427 1.38763 16.2222C1.52932 17.3333 1.82681 18.239 2.49298 18.9862C2.69068 19.2079 2.90811 19.4125 3.14263 19.5977C3.926 20.2164 4.86842 20.4901 6.03058 20.6214C7.16917 20.75 8.61345 20.75 10.4525 20.75H13.5475C15.3866 20.75 16.8308 20.75 17.9694 20.6214C19.1316 20.4901 20.074 20.2164 20.8574 19.5977C21.0919 19.4125 21.3093 19.208 21.507 18.9862C22.1732 18.239 22.4707 17.3333 22.6124 16.2222C22.75 15.1427 22.75 13.7768 22.75 12.0528V11.9473C22.75 10.2232 22.75 8.85727 22.6124 7.77785C22.4707 6.66669 22.1732 5.76101 21.507 5.0138C21.3093 4.79205 21.0919 4.58749 20.8574 4.40229C20.074 3.78362 19.1316 3.50988 17.9694 3.3786C16.8308 3.24998 15.3866 3.24999 13.5475 3.25ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM18.51 11C19.0622 11 19.51 11.4477 19.51 12C19.51 12.5523 19.0622 13 18.51 13H18.501C17.9487 13 17.501 12.5523 17.501 12C17.501 11.4477 17.9487 11 18.501 11H18.51ZM6.50117 12C6.50117 11.4477 6.05345 11 5.50117 11H5.49219C4.9399 11 4.49219 11.4477 4.49219 12C4.49219 12.5523 4.9399 13 5.49219 13H5.50117C6.05345 13 6.50117 12.5523 6.50117 12Z',
  d7: 'M13.5475 3.25H13.5475H10.4525H10.4525C8.61345 3.24999 7.16917 3.24998 6.03058 3.3786C4.86842 3.50988 3.926 3.78362 3.14263 4.40229C2.90811 4.58749 2.69068 4.79205 2.49298 5.0138C1.82681 5.76101 1.52932 6.66669 1.38763 7.77785C1.24998 8.85727 1.24999 10.2232 1.25 11.9472V11.9473V12.0527V12.0527C1.24999 13.7767 1.24998 15.1427 1.38763 16.2222C1.52932 17.3333 1.82681 18.239 2.49298 18.9862C2.69068 19.2079 2.90811 19.4125 3.14263 19.5977C3.926 20.2164 4.86842 20.4901 6.03058 20.6214C7.16917 20.75 8.61345 20.75 10.4525 20.75H13.5475C15.3866 20.75 16.8308 20.75 17.9694 20.6214C19.1316 20.4901 20.074 20.2164 20.8574 19.5977C21.0919 19.4125 21.3093 19.208 21.507 18.9862C22.1732 18.239 22.4707 17.3333 22.6124 16.2222C22.75 15.1427 22.75 13.7768 22.75 12.0528V11.9473C22.75 10.2232 22.75 8.85727 22.6124 7.77785C22.4707 6.66669 22.1732 5.76101 21.507 5.0138C21.3093 4.79205 21.0919 4.58749 20.8574 4.40229C20.074 3.78362 19.1316 3.50988 17.9694 3.3786C16.8308 3.24998 15.3866 3.24999 13.5475 3.25Z',
  d8: 'M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
  d9: 'M19.51 12C19.51 11.4477 19.0622 11 18.51 11H18.501C17.9487 11 17.501 11.4477 17.501 12C17.501 12.5523 17.9487 13 18.501 13H18.51C19.0622 13 19.51 12.5523 19.51 12ZM5.50117 11C6.05345 11 6.50117 11.4477 6.50117 12C6.50117 12.5523 6.05345 13 5.50117 13H5.49219C4.9399 13 4.49219 12.5523 4.49219 12C4.49219 11.4477 4.9399 11 5.49219 11H5.50117Z',
  d10: 'M22 4V20H2V4H22Z',
  d11: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H22C22.4142 3.25 22.75 3.58579 22.75 4V20C22.75 20.4142 22.4142 20.75 22 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V4ZM8.79883 12C8.79883 10.2051 10.2539 8.75 12.0488 8.75C13.8438 8.75 15.2988 10.2051 15.2988 12C15.2988 13.7949 13.8438 15.25 12.0488 15.25C10.2539 15.25 8.79883 13.7949 8.79883 12ZM4 11H6V13H4V11ZM18 11H20V13H18V11Z',
};

export const IconMoney02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-stroke-rounded IconMoney02StrokeRounded"
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

export const IconMoney02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-duotone-rounded IconMoney02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconMoney02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-twotone-rounded IconMoney02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoney02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-solid-rounded IconMoney02SolidRounded"
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

export const IconMoney02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-bulk-rounded IconMoney02BulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-stroke-sharp IconMoney02StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoney02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-02-solid-sharp IconMoney02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoney02: TheIconSelfPack = {
  name: 'Money02',
  StrokeRounded: IconMoney02StrokeRounded,
  DuotoneRounded: IconMoney02DuotoneRounded,
  TwotoneRounded: IconMoney02TwotoneRounded,
  SolidRounded: IconMoney02SolidRounded,
  BulkRounded: IconMoney02BulkRounded,
  StrokeSharp: IconMoney02StrokeSharp,
  SolidSharp: IconMoney02SolidSharp,
};