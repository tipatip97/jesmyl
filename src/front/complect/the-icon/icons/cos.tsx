import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5V14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5V9.5Z',
  d2: 'M21.6896 8.61565C21.2637 7.65235 20.4428 7 19.5 7H19C17.8954 7 17 8.11929 17 9.5C17 10.8807 17.8954 12 19 12H20C21.1046 12 22 13.1193 22 14.5C22 15.8807 21.1046 17 20 17H19.5C18.4748 17 17.5938 16.2287 17.208 15.125',
  d3: 'M7 8.31432C6.55082 7.53174 5.67081 7 4.65873 7C3.19035 7 2 8.11929 2 9.5V14.5C2 15.8807 3.19035 17 4.65873 17C5.67081 17 6.55082 16.4683 7 15.6857',
  d4: 'M8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5V14.5C15.5 16.433 13.933 18 12 18C10.067 18 8.5 16.433 8.5 14.5V9.5ZM12 8C11.1716 8 10.5 8.67157 10.5 9.5V14.5C10.5 15.3284 11.1716 16 12 16C12.8284 16 13.5 15.3284 13.5 14.5V9.5C13.5 8.67157 12.8284 8 12 8Z',
  d5: 'M16 9.5C16 7.78677 17.1464 6 19 6H19.5C20.9417 6 22.0645 6.99059 22.6042 8.2113C22.8275 8.71642 22.5991 9.30694 22.0939 9.53026C21.5888 9.75358 20.9983 9.52513 20.775 9.02001C20.4629 8.31412 19.9439 8 19.5 8H19C18.6444 8 18 8.45181 18 9.5C18 10.5482 18.6444 11 19 11H20C21.8536 11 23 12.7868 23 14.5C23 16.2132 21.8536 18 20 18H19.5C17.9295 18 16.7458 16.8333 16.264 15.455C16.0818 14.9336 16.3567 14.3632 16.8781 14.181C17.3994 13.9988 17.9698 14.2737 18.152 14.795C18.4418 15.6241 19.0201 16 19.5 16H20C20.3556 16 21 15.5482 21 14.5C21 13.4518 20.3556 13 20 13H19C17.1464 13 16 11.2132 16 9.5Z',
  d6: 'M1 9.5C1 7.5099 2.69695 6 4.65873 6C6.02207 6 7.23639 6.71735 7.86729 7.81652C8.14222 8.29551 7.9768 8.90668 7.49781 9.18161C7.01881 9.45654 6.40764 9.29112 6.13271 8.81213C5.86524 8.34614 5.31956 8 4.65873 8C3.68376 8 3 8.72867 3 9.5V14.5C3 15.2713 3.68375 16 4.65873 16C5.31956 16 5.86524 15.6539 6.13271 15.1879C6.40764 14.7089 7.01881 14.5435 7.49781 14.8184C7.9768 15.0933 8.14222 15.7045 7.86729 16.1835C7.23639 17.2827 6.02207 18 4.65873 18C2.69695 18 1 16.4901 1 14.5V9.5Z',
  d7: 'M16 9.5C16 7.78677 17.1464 6 19 6H19.5C20.9417 6 22.0645 6.99059 22.6042 8.2113L20.775 9.02001C20.4629 8.31412 19.9439 8 19.5 8H19C18.6444 8 18 8.45181 18 9.5C18 10.5482 18.6444 11 19 11H20C21.8536 11 23 12.7868 23 14.5C23 16.2132 21.8536 18 20 18H19.5C17.9295 18 16.7458 16.8333 16.264 15.455L18.152 14.795C18.4418 15.6241 19.0201 16 19.5 16H20C20.3556 16 21 15.5482 21 14.5C21 13.4518 20.3556 13 20 13H19C17.1464 13 16 11.2132 16 9.5Z',
  d8: 'M1 9.5C1 7.5099 2.69695 6 4.65873 6C6.02207 6 7.23639 6.71735 7.86729 7.81652L6.13271 8.81213C5.86524 8.34614 5.31956 8 4.65873 8C3.68376 8 3 8.72867 3 9.5V14.5C3 15.2713 3.68375 16 4.65873 16C5.31956 16 5.86524 15.6539 6.13271 15.1879L7.86729 16.1835C7.23639 17.2827 6.02207 18 4.65873 18C2.69695 18 1 16.4901 1 14.5V9.5Z',
};

export const IconCosStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-stroke-rounded IconCosStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-duotone-rounded IconCosDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-twotone-rounded IconCosTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-solid-rounded IconCosSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCosBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-bulk-rounded IconCosBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCosStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-stroke-sharp IconCosStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cos-solid-sharp IconCosSolidSharp"
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

export const iconPackOfCos: TheIconSelfPack = {
  name: 'Cos',
  StrokeRounded: IconCosStrokeRounded,
  DuotoneRounded: IconCosDuotoneRounded,
  TwotoneRounded: IconCosTwotoneRounded,
  SolidRounded: IconCosSolidRounded,
  BulkRounded: IconCosBulkRounded,
  StrokeSharp: IconCosStrokeSharp,
  SolidSharp: IconCosSolidSharp,
};