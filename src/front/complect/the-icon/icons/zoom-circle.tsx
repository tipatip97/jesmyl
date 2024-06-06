import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M6.5 11V10C6.5 9.5286 6.5 9.29289 6.64645 9.14645C6.79289 9 7.0286 9 7.5 9H9C10.8856 9 11.8284 9 12.4142 9.58579C13 10.1716 13 11.1144 13 13V14C13 14.4714 13 14.7071 12.8536 14.8536C12.7071 15 12.4714 15 12 15H10.5C8.61438 15 7.67157 15 7.08579 14.4142C6.5 13.8284 6.5 12.8856 6.5 11Z',
  d3: 'M15.4498 10.5352L15.7998 10.1976C16.5247 9.49854 16.8872 9.14899 17.1936 9.27553C17.5 9.40207 17.5 9.90131 17.5 10.8998V13.1002C17.5 14.0987 17.5 14.5979 17.1936 14.7245C16.8872 14.851 16.5247 14.5015 15.7998 13.8024L15.4498 13.4648C15.0061 13.0369 15 13.0226 15 12.4115V11.5885C15 10.9774 15.0061 10.9631 15.4498 10.5352Z',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.5 10V11C6.5 12.8856 6.5 13.8284 7.08579 14.4142C7.67157 15 8.61438 15 10.5 15H12C12.4714 15 12.7071 15 12.8536 14.8536C13 14.7071 13 14.4714 13 14V13C13 11.1144 13 10.1716 12.4142 9.58579C11.8284 9 10.8856 9 9 9H7.5C7.0286 9 6.79289 9 6.64645 9.14645C6.5 9.29289 6.5 9.5286 6.5 10ZM15.7998 10.1976L15.4498 10.5352C15.0061 10.9631 15 10.9774 15 11.5885V12.4115C15 13.0226 15.0061 13.0369 15.4498 13.4648L15.7998 13.8024C16.5247 14.5015 16.8872 14.851 17.1936 14.7245C17.5 14.5979 17.5 14.0987 17.5 13.1002V10.8998C17.5 9.90131 17.5 9.40207 17.1936 9.27553C16.8872 9.14899 16.5247 9.49854 15.7998 10.1976Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.46557 8.24999L7.50002 8.25H9.00002L9.05202 8.25C9.9505 8.24997 10.6997 8.24994 11.2945 8.32991C11.9223 8.41432 12.4891 8.59999 12.9446 9.05546C13.4 9.51093 13.5857 10.0777 13.6701 10.7055C13.7501 11.3003 13.75 12.0495 13.75 12.948L13.75 14L13.75 14.0344C13.7501 14.2396 13.7502 14.4614 13.725 14.6486C13.6955 14.8679 13.6197 15.1481 13.3839 15.3839C13.1481 15.6197 12.8679 15.6955 12.6486 15.725C12.4614 15.7502 12.2396 15.7501 12.0345 15.75H12.0345L12 15.75L10.448 15.75C9.54954 15.75 8.80032 15.7501 8.20554 15.6701C7.57774 15.5857 7.01094 15.4 6.55547 14.9445C6.1 14.4891 5.91433 13.9223 5.82993 13.2945C5.74996 12.6997 5.74999 11.9505 5.75002 11.052L5.75002 11L5.75002 10L5.75001 9.96555C5.74993 9.76044 5.74984 9.53864 5.77501 9.35143C5.8045 9.1321 5.88033 8.85192 6.11613 8.61612C6.35193 8.38032 6.63212 8.30448 6.85145 8.27499C7.03866 8.24982 7.26046 8.24991 7.46557 8.24999ZM15.8698 9.70651L15.3797 10.1364C14.7585 10.6811 14.75 10.6993 14.75 11.4773L14.75 12.5252C14.75 13.3033 14.7585 13.3214 15.3797 13.8662L15.8698 14.296C16.8846 15.1861 17.3921 15.6312 17.821 15.47C18.25 15.3089 18.25 14.6733 18.25 13.4021V10.6005C18.25 9.32924 18.25 8.69362 17.821 8.53251C17.3921 8.37139 16.8846 8.81643 15.8698 9.70651Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M7.50002 8.25002L7.46557 8.25001L7.46557 8.25001C7.26046 8.24993 7.03866 8.24984 6.85145 8.27501C6.63212 8.3045 6.35193 8.38033 6.11613 8.61613C5.88033 8.85193 5.8045 9.13212 5.77501 9.35145C5.74984 9.53866 5.74993 9.76046 5.75001 9.96557L5.75001 9.96557L5.75002 10L5.75002 11L5.75002 11.052C5.74999 11.9505 5.74996 12.6997 5.82993 13.2945C5.91433 13.9223 6.1 14.4891 6.55547 14.9446C7.01094 15.4 7.57774 15.5857 8.20554 15.6701C8.80032 15.7501 9.54954 15.75 10.448 15.75L12 15.75L12.0345 15.75C12.2396 15.7501 12.4614 15.7502 12.6486 15.725C12.8679 15.6955 13.1481 15.6197 13.3839 15.3839C13.6197 15.1481 13.6955 14.8679 13.725 14.6486C13.7502 14.4614 13.7501 14.2396 13.75 14.0345L13.75 14L13.75 12.948C13.75 12.0495 13.7501 11.3003 13.6701 10.7055C13.5857 10.0777 13.4 9.51094 12.9446 9.05547C12.4891 8.6 11.9223 8.41433 11.2945 8.32993C10.6997 8.24996 9.9505 8.24999 9.05202 8.25002L9.00002 8.25002H7.50002ZM15.8698 9.70651L15.3797 10.1364C14.7585 10.6811 14.75 10.6993 14.75 11.4773L14.75 12.5252C14.75 13.3033 14.7585 13.3214 15.3797 13.8662L15.8698 14.296C16.8846 15.1861 17.3921 15.6312 17.821 15.47C18.25 15.3089 18.25 14.6733 18.25 13.4021V10.6005C18.25 9.32924 18.25 8.69362 17.821 8.53251C17.3921 8.37139 16.8846 8.81643 15.8698 9.70651Z',
  d8: 'M6.5 9V8.25C6.08579 8.25 5.75 8.58579 5.75 9H6.5ZM13 15V15.75C13.4142 15.75 13.75 15.4142 13.75 15H13ZM17.5 9.50002H18.25C18.25 9.22982 18.1047 8.9805 17.8695 8.84737C17.6344 8.71424 17.3458 8.71788 17.1141 8.8569L17.5 9.50002ZM15 11L14.6141 10.3569L14.25 10.5754V11H15ZM17.5 14.5L17.1141 15.1432C17.3458 15.2822 17.6344 15.2858 17.8695 15.1527C18.1047 15.0196 18.25 14.7702 18.25 14.5H17.5ZM15 13H14.25V13.4246L14.6141 13.6431L15 13ZM5.75 9V13H7.25V9H5.75ZM8.5 15.75H13V14.25H8.5V15.75ZM13.75 15V11H12.25V15H13.75ZM11 8.25H6.5V9.75H11V8.25ZM17.1141 8.8569L14.6141 10.3569L15.3859 11.6431L17.8859 10.1431L17.1141 8.8569ZM17.8859 13.8569L15.3859 12.3569L14.6141 13.6431L17.1141 15.1432L17.8859 13.8569ZM14.25 11V13H15.75V11H14.25ZM18.25 14.5V9.50002H16.75V14.5H18.25ZM13.75 11C13.75 9.48122 12.5188 8.25 11 8.25V9.75C11.6904 9.75 12.25 10.3096 12.25 11H13.75ZM5.75 13C5.75 14.5188 6.98122 15.75 8.5 15.75V14.25C7.80964 14.25 7.25 13.6904 7.25 13H5.75Z',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.5 9L6.5 13C6.5 14.1046 7.39543 15 8.5 15L14 15L14 11C14 9.89543 13.1046 9 12 9L6.5 9ZM17.5 9.50002L15 11L15 13L17.5 14.5V9.50002Z',
};

export const IconZoomCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-stroke-rounded IconZoomCircleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconZoomCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-duotone-rounded IconZoomCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconZoomCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-twotone-rounded IconZoomCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconZoomCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-solid-rounded IconZoomCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-bulk-rounded IconZoomCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconZoomCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-stroke-sharp IconZoomCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-circle-solid-sharp IconZoomCircleSolidSharp"
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

export const iconPackOfZoomCircle: TheIconSelfPack = {
  name: 'ZoomCircle',
  StrokeRounded: IconZoomCircleStrokeRounded,
  DuotoneRounded: IconZoomCircleDuotoneRounded,
  TwotoneRounded: IconZoomCircleTwotoneRounded,
  SolidRounded: IconZoomCircleSolidRounded,
  BulkRounded: IconZoomCircleBulkRounded,
  StrokeSharp: IconZoomCircleStrokeSharp,
  SolidSharp: IconZoomCircleSolidSharp,
};