import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M9 7.5C9.2 8.41667 10.08 10.5 12 11.5M12 11.5C13.92 10.5 14.8 8.41667 15 7.5M12 11.5V16.5M14.5 13.5H9.5',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.73292 7.34028C9.64462 6.93559 9.24498 6.6791 8.84028 6.7674C8.43559 6.85569 8.1791 7.25534 8.2674 7.66003C8.4787 8.62849 9.34073 10.7323 11.2502 11.9337V12.7502H9.50016C9.08594 12.7502 8.75016 13.0859 8.75016 13.5002C8.75016 13.9144 9.08594 14.2502 9.50016 14.2502H11.2502V16.5002C11.2502 16.9144 11.5859 17.2502 12.0002 17.2502C12.4144 17.2502 12.7502 16.9144 12.7502 16.5002V14.2502H14.5002C14.9144 14.2502 15.2502 13.9144 15.2502 13.5002C15.2502 13.0859 14.9144 12.7502 14.5002 12.7502H12.7502V11.9337C14.6596 10.7323 15.5216 8.62849 15.7329 7.66003C15.8212 7.25534 15.5647 6.85569 15.16 6.7674C14.7553 6.6791 14.3557 6.93559 14.2674 7.34028C14.1057 8.08119 13.4129 9.71487 12.0002 10.6327C10.5874 9.71487 9.89457 8.08119 9.73292 7.34028Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.84028 6.7674C9.24498 6.6791 9.64462 6.93559 9.73292 7.34028C9.89457 8.08119 10.5874 9.71487 12.0002 10.6327C13.4129 9.71487 14.1057 8.08119 14.2674 7.34028C14.3557 6.93559 14.7553 6.6791 15.16 6.7674C15.5647 6.85569 15.8212 7.25534 15.7329 7.66003C15.5216 8.62849 14.6596 10.7323 12.7502 11.9337V12.7502H14.5002C14.9144 12.7502 15.2502 13.0859 15.2502 13.5002C15.2502 13.9144 14.9144 14.2502 14.5002 14.2502H12.7502V16.5002C12.7502 16.9144 12.4144 17.2502 12.0002 17.2502C11.5859 17.2502 11.2502 16.9144 11.2502 16.5002V14.2502H9.50016C9.08594 14.2502 8.75016 13.9144 8.75016 13.5002C8.75016 13.0859 9.08594 12.7502 9.50016 12.7502H11.2502V11.9337C9.34073 10.7323 8.4787 8.62849 8.2674 7.66003C8.1791 7.25534 8.43559 6.85569 8.84028 6.7674Z',
  d6: 'M9 7.5L12 11.5M12 11.5L15 7.5M12 11.5V16.5M15 13.5H9',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.40039 7.95L11.2504 11.75V12.75H9.00039V14.25H11.2504V16.5H12.7504V14.25H15.0004V12.75H12.7504V11.75L15.6004 7.95L14.4004 7.05L12.0004 10.25L9.60039 7.05L8.40039 7.95Z',
};

export const IconYenCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-stroke-rounded IconYenCircleStrokeRounded"
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

export const IconYenCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-duotone-rounded IconYenCircleDuotoneRounded"
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

export const IconYenCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-twotone-rounded IconYenCircleTwotoneRounded"
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

export const IconYenCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-solid-rounded IconYenCircleSolidRounded"
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

export const IconYenCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-bulk-rounded IconYenCircleBulkRounded"
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

export const IconYenCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-stroke-sharp IconYenCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYenCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-circle-solid-sharp IconYenCircleSolidSharp"
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

export const iconPackOfYenCircle: TheIconSelfPack = {
  name: 'YenCircle',
  StrokeRounded: IconYenCircleStrokeRounded,
  DuotoneRounded: IconYenCircleDuotoneRounded,
  TwotoneRounded: IconYenCircleTwotoneRounded,
  SolidRounded: IconYenCircleSolidRounded,
  BulkRounded: IconYenCircleBulkRounded,
  StrokeSharp: IconYenCircleStrokeSharp,
  SolidSharp: IconYenCircleSolidSharp,
};