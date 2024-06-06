import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13V5.00049C15.0005 4.06815 15.0005 3.60198 14.8481 3.23428C14.6451 2.74451 14.256 2.35537 13.7662 2.15239C13.3985 2 12.9323 2 12 2C11.0677 2 10.6015 2 10.2338 2.15239C9.74402 2.35537 9.35488 2.74451 9.1519 3.23428C8.99951 3.60198 8.99951 4.06815 8.99951 5.00049V13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22Z',
  d2: 'M12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15ZM12 15V8',
  d3: 'M17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 15.3644 7.78534 13.9122 8.99951 13V5.00049C8.99951 4.06815 8.99951 3.60198 9.1519 3.23428C9.35488 2.74451 9.74402 2.35537 10.2338 2.15239C10.6015 2 11.0677 2 12 2C12.9323 2 13.3985 2 13.7662 2.15239C14.256 2.35537 14.6451 2.74451 14.8481 3.23428C15.0005 3.60198 15.0005 4.06815 15.0005 5.00049V13C16.2147 13.9122 17 15.3644 17 17ZM12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z',
  d4: 'M13.1459 1.27079C12.8412 1.24999 12.47 1.24999 12.0253 1.25H12.0253C11.5806 1.24999 11.1588 1.24999 10.8541 1.27079C10.5368 1.29245 10.2372 1.33914 9.94665 1.45953C9.27321 1.73863 8.73814 2.2737 8.45905 2.94713C8.33865 3.23764 8.29196 3.53731 8.2703 3.85456C8.2495 4.15932 8.2495 4.53054 8.24951 4.97522V4.97522L8.24951 12.6414C7.0263 13.6949 6.25 15.2569 6.25 17C6.25 20.1756 8.82436 22.75 12 22.75C15.1756 22.75 17.75 20.1756 17.75 17C17.75 15.2569 16.9737 13.6949 15.7505 12.6414V4.97524C15.7505 4.53055 15.7505 4.15933 15.7297 3.85456C15.708 3.53731 15.6614 3.23764 15.541 2.94713C15.2619 2.2737 14.7268 1.73863 14.0534 1.45953C13.7628 1.33914 13.4632 1.29245 13.1459 1.27079ZM12 7C12.5523 7 13 7.44772 13 8V14.4375C14.0243 14.8375 14.75 15.834 14.75 17C14.75 18.5188 13.5188 19.75 12 19.75C10.4812 19.75 9.25 18.5188 9.25 17C9.25 15.834 9.97566 14.8375 11 14.4375V8C11 7.44772 11.4477 7 12 7Z',
  d5: 'M12.0253 1.25C12.47 1.24999 12.8412 1.24999 13.1459 1.27079C13.4632 1.29245 13.7628 1.33914 14.0534 1.45953C14.7268 1.73863 15.2619 2.2737 15.541 2.94713C15.6614 3.23764 15.708 3.53731 15.7297 3.85456C15.7505 4.15933 15.7505 4.53055 15.7505 4.97524V12.6414C16.9737 13.6949 17.75 15.2569 17.75 17C17.75 20.1756 15.1756 22.75 12 22.75C8.82436 22.75 6.25 20.1756 6.25 17C6.25 15.2569 7.0263 13.6949 8.24951 12.6414L8.24951 4.97522C8.2495 4.53054 8.2495 4.15932 8.2703 3.85456C8.29196 3.53731 8.33865 3.23764 8.45905 2.94713C8.73814 2.2737 9.27321 1.73863 9.94665 1.45953C10.2372 1.33914 10.5368 1.29245 10.8541 1.27079C11.1588 1.24999 11.5806 1.24999 12.0253 1.25H12.0253Z',
  d6: 'M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V14.4375C9.97566 14.8375 9.25 15.834 9.25 17C9.25 18.5188 10.4812 19.75 12 19.75C13.5188 19.75 14.75 18.5188 14.75 17C14.75 15.834 14.0243 14.8375 13 14.4375V8Z',
  d7: 'M11.9525 15.0295C10.8584 15.0295 9.9715 15.9269 9.9715 17.034C9.9715 18.1411 10.8584 19.0385 11.9525 19.0385C13.0466 19.0385 13.9336 18.1411 13.9336 17.034C13.9336 15.9269 13.0466 15.0295 11.9525 15.0295ZM11.9525 15.0295V8.01367',
  d8: 'M14.9078 2.05469H9.05572C9.05025 2.05469 9.04582 2.05917 9.04582 2.06471L9.04582 13.0251C6.82281 14.5754 6.84296 17.114 7.1309 18.2792C9.04584 23.1689 13.2015 22.3068 14.7911 21.2049C18.6962 17.6485 16.5449 14.3297 14.9178 13.0251V2.06471C14.9178 2.05917 14.9133 2.05469 14.9078 2.05469Z',
  d9: 'M8.99951 1.25C8.5853 1.25 8.24951 1.58579 8.24951 2V12.6414C7.0263 13.6949 6.25 15.2569 6.25 17C6.25 20.1756 8.82436 22.75 12 22.75C15.1756 22.75 17.75 20.1756 17.75 17C17.75 15.2569 16.9737 13.6949 15.7505 12.6414V2C15.7505 1.58579 15.4147 1.25 15.0005 1.25H8.99951ZM14.75 17C14.75 15.7412 13.9043 14.68 12.75 14.3535V7.25H11.25V14.3535C10.0957 14.68 9.25 15.7412 9.25 17C9.25 18.5188 10.4812 19.75 12 19.75C13.5188 19.75 14.75 18.5188 14.75 17Z',
};

export const IconTemperatureStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-stroke-rounded IconTemperatureStrokeRounded"
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

export const IconTemperatureDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-duotone-rounded IconTemperatureDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconTemperatureTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-twotone-rounded IconTemperatureTwotoneRounded"
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

export const IconTemperatureSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-solid-rounded IconTemperatureSolidRounded"
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

export const IconTemperatureBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-bulk-rounded IconTemperatureBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTemperatureStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-stroke-sharp IconTemperatureStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTemperatureSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="temperature-solid-sharp IconTemperatureSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTemperature: TheIconSelfPack = {
  name: 'Temperature',
  StrokeRounded: IconTemperatureStrokeRounded,
  DuotoneRounded: IconTemperatureDuotoneRounded,
  TwotoneRounded: IconTemperatureTwotoneRounded,
  SolidRounded: IconTemperatureSolidRounded,
  BulkRounded: IconTemperatureBulkRounded,
  StrokeSharp: IconTemperatureStrokeSharp,
  SolidSharp: IconTemperatureSolidSharp,
};