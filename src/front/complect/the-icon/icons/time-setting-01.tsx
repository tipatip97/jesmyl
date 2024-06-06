import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 8V12L14.8037 13.5',
  d2: 'M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z',
  d3: 'M9.38041 2.1204C9.17284 1.76686 8.71985 1.64549 8.36333 1.84791L4.89923 3.81472C4.72461 3.91387 4.59704 4.07888 4.54508 4.27284C4.49312 4.4668 4.5211 4.67349 4.62276 4.84665C5.76109 6.78558 4.30575 9.28336 2 9.28336C1.58579 9.28336 1.25 9.61914 1.25 10.0334V13.967C1.25 14.3812 1.58579 14.717 2 14.717C4.30517 14.717 5.75974 17.2143 4.62118 19.1536C4.51952 19.3268 4.49154 19.5334 4.5435 19.7274C4.59546 19.9214 4.72303 20.0864 4.89765 20.1855L8.36175 22.1523C8.71827 22.3547 9.17126 22.2334 9.37882 21.8798C10.5539 19.8784 13.4477 19.8783 14.6228 21.8797C14.8303 22.2333 15.2833 22.3547 15.6398 22.1522L19.1039 20.1854C19.2786 20.0863 19.4061 19.9213 19.4581 19.7273C19.51 19.5333 19.4821 19.3267 19.3804 19.1535C18.2416 17.2138 19.6954 14.717 22 14.717C22.4142 14.717 22.75 14.3812 22.75 13.967V10.0334C22.75 9.61914 22.4142 9.28336 22 9.28336C19.6948 9.28336 18.2403 6.78608 19.3788 4.84674C19.4805 4.67358 19.5085 4.46689 19.4565 4.27294C19.4045 4.07898 19.277 3.91396 19.1024 3.81482L15.6383 1.84801C15.2817 1.64559 14.8287 1.76695 14.6212 2.1205C13.4469 4.12071 10.5548 4.12068 9.38041 2.1204ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.3688 11.203 12.7077 11.5283 12.8817L14.332 14.3817C14.8189 14.6423 15.4249 14.4587 15.6855 13.9717C15.946 13.4848 15.7624 12.8788 15.2754 12.6183L13 11.4009V8Z',
  d4: 'M8.36333 1.84791C8.71985 1.64549 9.17284 1.76686 9.38041 2.1204C10.5548 4.12068 13.4469 4.12071 14.6212 2.1205C14.8287 1.76695 15.2817 1.64559 15.6383 1.84801L19.1024 3.81482C19.277 3.91396 19.4045 4.07898 19.4565 4.27294C19.5085 4.46689 19.4805 4.67358 19.3788 4.84674C18.2403 6.78608 19.6948 9.28336 22 9.28336C22.4142 9.28336 22.75 9.61914 22.75 10.0334V13.967C22.75 14.3812 22.4142 14.717 22 14.717C19.6954 14.717 18.2416 17.2138 19.3804 19.1535C19.4821 19.3267 19.51 19.5333 19.4581 19.7273C19.4061 19.9213 19.2786 20.0863 19.1039 20.1854L15.6398 22.1522C15.2833 22.3547 14.8303 22.2333 14.6228 21.8797C13.4477 19.8783 10.5539 19.8784 9.37882 21.8798C9.17126 22.2334 8.71827 22.3547 8.36175 22.1523L4.89765 20.1855C4.72303 20.0864 4.59546 19.9214 4.5435 19.7274C4.49154 19.5334 4.51952 19.3268 4.62118 19.1536C5.75974 17.2143 4.30517 14.717 2 14.717C1.58579 14.717 1.25 14.3812 1.25 13.967V10.0334C1.25 9.61914 1.58579 9.28336 2 9.28336C4.30575 9.28336 5.76109 6.78558 4.62276 4.84665C4.5211 4.67349 4.49312 4.4668 4.54508 4.27284C4.59704 4.07888 4.72461 3.91387 4.89923 3.81472L8.36333 1.84791Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8V11.4009L15.2754 12.6183C15.7624 12.8788 15.946 13.4848 15.6855 13.9717C15.4249 14.4587 14.8189 14.6423 14.332 14.3817L11.5283 12.8817C11.203 12.7077 11 12.3688 11 12V8C11 7.44772 11.4477 7 12 7Z',
  d6: 'M12 7.5L12 12L15 13.5',
  d7: 'M9.38041 2.1204C9.17284 1.76686 8.71985 1.64549 8.36333 1.84791L4.89923 3.81472C4.72461 3.91387 4.59704 4.07888 4.54508 4.27284C4.49312 4.4668 4.5211 4.67349 4.62276 4.84665C5.76109 6.78558 4.30575 9.28336 2 9.28336C1.58579 9.28336 1.25 9.61914 1.25 10.0334V13.967C1.25 14.3812 1.58579 14.717 2 14.717C4.30517 14.717 5.75974 17.2143 4.62118 19.1536C4.51952 19.3268 4.49154 19.5334 4.5435 19.7274C4.59546 19.9214 4.72303 20.0864 4.89765 20.1855L8.36175 22.1523C8.71827 22.3547 9.17126 22.2334 9.37882 21.8798C10.5539 19.8784 13.4477 19.8783 14.6228 21.8797C14.8303 22.2333 15.2833 22.3547 15.6398 22.1522L19.1039 20.1854C19.2786 20.0863 19.4061 19.9213 19.4581 19.7273C19.51 19.5333 19.4821 19.3267 19.3804 19.1535C18.2416 17.2138 19.6954 14.717 22 14.717C22.4142 14.717 22.75 14.3812 22.75 13.967V10.0334C22.75 9.61914 22.4142 9.28336 22 9.28336C19.6948 9.28336 18.2403 6.78608 19.3788 4.84674C19.4805 4.67358 19.5085 4.46689 19.4565 4.27294C19.4045 4.07898 19.277 3.91396 19.1024 3.81482L15.6383 1.84801C15.2817 1.64559 14.8287 1.76695 14.6212 2.1205C13.4469 4.12071 10.5548 4.12068 9.38041 2.1204ZM13 7.50012H11V12.6182L14.5528 14.3945L15.4472 12.6057L13 11.3821V7.50012Z',
};

export const IconTimeSetting01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-stroke-rounded IconTimeSetting01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTimeSetting01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-duotone-rounded IconTimeSetting01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTimeSetting01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-twotone-rounded IconTimeSetting01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTimeSetting01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-solid-rounded IconTimeSetting01SolidRounded"
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

export const IconTimeSetting01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-bulk-rounded IconTimeSetting01BulkRounded"
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

export const IconTimeSetting01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-stroke-sharp IconTimeSetting01StrokeSharp"
    >
      <path 
        d={d.d6} 
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

export const IconTimeSetting01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="time-setting-01-solid-sharp IconTimeSetting01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTimeSetting01: TheIconSelfPack = {
  name: 'TimeSetting01',
  StrokeRounded: IconTimeSetting01StrokeRounded,
  DuotoneRounded: IconTimeSetting01DuotoneRounded,
  TwotoneRounded: IconTimeSetting01TwotoneRounded,
  SolidRounded: IconTimeSetting01SolidRounded,
  BulkRounded: IconTimeSetting01BulkRounded,
  StrokeSharp: IconTimeSetting01StrokeSharp,
  SolidSharp: IconTimeSetting01SolidSharp,
};