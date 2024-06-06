import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 10.5C2 15.1944 6.47715 19 12 19C12.6849 19 13.3538 18.9415 14 18.83V22C15.6708 20.365 18.5 17.5 20.2561 15.2974C21.3564 13.9321 22 12.2799 22 10.5C22 5.80558 17.5228 2 12 2C6.47715 2 2 5.80558 2 10.5Z',
  d2: 'M6 8.5V12.5H7M9 8.5V12.5M11.1 12.5V8.5L13.5 12.5V8.5M17.5 8.5H15.6V10.5M17.5 12.5H15.6V10.5M15.6 10.5H17.04',
  d3: 'M12 1.25C6.18186 1.25 1.25 5.2817 1.25 10.5C1.25 15.7183 6.18186 19.75 12 19.75C12.4226 19.75 12.8397 19.729 13.25 19.6882V22C13.25 22.3019 13.431 22.5743 13.7092 22.6913C13.9875 22.8084 14.3088 22.7472 14.5246 22.536C16.1955 20.9008 19.0535 18.0085 20.8414 15.7665C22.0378 14.2811 22.75 12.4664 22.75 10.5C22.75 5.2817 17.8181 1.25 12 1.25ZM11.8859 8.079C11.701 7.8064 11.3599 7.68634 11.045 7.78305C10.7301 7.87976 10.5152 8.1706 10.5152 8.5V12.5C10.5152 12.9142 10.851 13.25 11.2652 13.25C11.6794 13.25 12.0152 12.9142 12.0152 12.5V10.9419L13.3576 12.921C13.5425 13.1936 13.8836 13.3137 14.1985 13.2169C14.5133 13.1202 14.7283 12.8294 14.7283 12.5V8.5C14.7283 8.08578 14.3925 7.75 13.9783 7.75C13.564 7.75 13.2283 8.08578 13.2283 8.5V10.0581L11.8859 8.079ZM6.25 8.5C6.25 8.08578 5.91421 7.75 5.5 7.75C5.08579 7.75 4.75 8.08578 4.75 8.5V12.5C4.75 12.9142 5.08579 13.25 5.5 13.25H6.63043C7.04465 13.25 7.38043 12.9142 7.38043 12.5C7.38043 12.0858 7.04465 11.75 6.63043 11.75H6.25V8.5ZM9.6413 8.5C9.6413 8.08578 9.30552 7.75 8.8913 7.75C8.47709 7.75 8.1413 8.08578 8.1413 8.5V12.5C8.1413 12.9142 8.47709 13.25 8.8913 13.25C9.30552 13.25 9.6413 12.9142 9.6413 12.5V8.5ZM16.3522 7.75C15.938 7.75 15.6022 8.08578 15.6022 8.5V12.5C15.6022 12.9142 15.938 13.25 16.3522 13.25H18.5C18.9142 13.25 19.25 12.9142 19.25 12.5C19.25 12.0858 18.9142 11.75 18.5 11.75H17.1022V11.25H17.98C18.3942 11.25 18.73 10.9142 18.73 10.5C18.73 10.0858 18.3942 9.75 17.98 9.75H17.1022V9.25H18.5C18.9142 9.25 19.25 8.91421 19.25 8.5C19.25 8.08578 18.9142 7.75 18.5 7.75H16.3522Z',
  d4: 'M1.25 10.5C1.25 5.2817 6.18186 1.25 12 1.25C17.8181 1.25 22.75 5.2817 22.75 10.5C22.75 12.4664 22.0378 14.2811 20.8414 15.7665C19.0535 18.0085 16.1955 20.9008 14.5246 22.536C14.3088 22.7472 13.9875 22.8084 13.7092 22.6913C13.431 22.5743 13.25 22.3019 13.25 22V19.6882C12.8397 19.729 12.4226 19.75 12 19.75C6.18186 19.75 1.25 15.7183 1.25 10.5Z',
  d5: 'M11.045 7.78311C11.3599 7.6864 11.701 7.80646 11.8859 8.07906L13.2283 10.0582V8.50006C13.2283 8.08584 13.564 7.75006 13.9783 7.75006C14.3925 7.75006 14.7283 8.08584 14.7283 8.50006V12.5001C14.7283 12.8295 14.5133 13.1203 14.1985 13.217C13.8836 13.3137 13.5425 13.1937 13.3576 12.9211L12.0152 10.9419V12.5001C12.0152 12.9143 11.6794 13.2501 11.2652 13.2501C10.851 13.2501 10.5152 12.9143 10.5152 12.5001V8.50006C10.5152 8.17066 10.7301 7.87982 11.045 7.78311ZM5.5 7.75006C5.91421 7.75006 6.25 8.08584 6.25 8.50006V11.7501H6.63043C7.04465 11.7501 7.38043 12.0858 7.38043 12.5001C7.38043 12.9143 7.04465 13.2501 6.63043 13.2501H5.5C5.08579 13.2501 4.75 12.9143 4.75 12.5001V8.50006C4.75 8.08584 5.08579 7.75006 5.5 7.75006ZM8.8913 7.75006C9.30552 7.75006 9.6413 8.08584 9.6413 8.50006V12.5001C9.6413 12.9143 9.30552 13.2501 8.8913 13.2501C8.47709 13.2501 8.1413 12.9143 8.1413 12.5001V8.50006C8.1413 8.08584 8.47709 7.75006 8.8913 7.75006ZM15.6022 8.50006C15.6022 8.08584 15.938 7.75006 16.3522 7.75006H18.5C18.9142 7.75006 19.25 8.08584 19.25 8.50006C19.25 8.91427 18.9142 9.25006 18.5 9.25006H17.1022V9.75006H17.98C18.3942 9.75006 18.73 10.0858 18.73 10.5001C18.73 10.9143 18.3942 11.2501 17.98 11.2501H17.1022V11.7501H18.5C18.9142 11.7501 19.25 12.0858 19.25 12.5001C19.25 12.9143 18.9142 13.2501 18.5 13.2501H16.3522C15.938 13.2501 15.6022 12.9143 15.6022 12.5001V8.50006Z',
  d6: 'M5.95374 8.52148V12.5238H6.95109M8.94581 8.52148V12.5238M11.0403 12.5238V8.52148L13.4339 12.5238V8.52148M17.4233 8.52148H15.5284V10.5227M15.5284 10.5227V12.5238H17.4233M15.5284 10.5227H16.9646',
  d7: 'M2.00208 10.6322C2.00208 15.4446 7.0222 19.9756 13.9143 18.8472V21.9906C13.9143 21.999 13.9235 22.0042 13.93 21.9988C14.0555 21.8943 14.8972 21.1906 15.1752 20.8791C17.301 18.4964 21.8684 14.9024 21.9979 10.6322C21.9979 5.8197 17.5476 1.99902 12.0259 1.99902C6.50422 1.99902 2.00208 5.8197 2.00208 10.6322Z',
  d8: 'M12 1.25C6.18186 1.25 1.25 5.2817 1.25 10.5C1.25 15.7183 6.18186 19.75 12 19.75C12.4226 19.75 12.8397 19.729 13.25 19.6882V22C13.25 22.3019 13.431 22.5743 13.7092 22.6913C13.9875 22.8084 14.3088 22.7472 14.5246 22.536C16.1955 20.9008 19.0535 18.0085 20.8414 15.7665C22.0378 14.2811 22.75 12.4664 22.75 10.5C22.75 5.2817 17.8181 1.25 12 1.25ZM11.7431 8.11419C11.5697 7.82512 11.2247 7.68729 10.8998 7.77728C10.5749 7.86727 10.35 8.16295 10.35 8.50007V13.2501H11.85V11.2078L12.8569 12.8859C13.0303 13.175 13.3753 13.3128 13.7002 13.2229C14.0251 13.1329 14.25 12.8372 14.25 12.5001V7.75007H12.75V9.79233L11.7431 8.11419ZM6.75 11.7501V7.75007H5.25V12.5001C5.25 12.9143 5.58579 13.2501 6 13.2501H7.75V11.7501H6.75ZM9.75 13.2501V7.75007H8.25V13.2501H9.75ZM15.6 7.75007C15.1858 7.75007 14.85 8.08585 14.85 8.50007V12.5001C14.85 12.9143 15.1858 13.2501 15.6 13.2501H18.25V11.7501H16.35V11.2501H17.79V9.75007H16.35V9.25007H18.25V7.75007H15.6Z',
};

export const IconLineStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-stroke-rounded IconLineStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLineDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-duotone-rounded IconLineDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLineTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-twotone-rounded IconLineTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconLineSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-solid-rounded IconLineSolidRounded"
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

export const IconLineBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-bulk-rounded IconLineBulkRounded"
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

export const IconLineStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-stroke-sharp IconLineStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLineSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="line-solid-sharp IconLineSolidSharp"
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

export const iconPackOfLine: TheIconSelfPack = {
  name: 'Line',
  StrokeRounded: IconLineStrokeRounded,
  DuotoneRounded: IconLineDuotoneRounded,
  TwotoneRounded: IconLineTwotoneRounded,
  SolidRounded: IconLineSolidRounded,
  BulkRounded: IconLineBulkRounded,
  StrokeSharp: IconLineStrokeSharp,
  SolidSharp: IconLineSolidSharp,
};