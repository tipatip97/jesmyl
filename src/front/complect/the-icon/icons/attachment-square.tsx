import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8.56854 12L7.71068 11.1421C6.76311 10.1946 6.76311 8.65825 7.71068 7.71068C8.65825 6.76311 10.1946 6.76311 11.1421 7.71068L16.2893 12.8579C17.2369 13.8054 17.2369 15.3418 16.2893 16.2893C15.3418 17.2369 13.8054 17.2369 12.8579 16.2893L10.9277 14.3591C9.51688 12.9483 11.5463 11.0463 13 12.5L14 13.5',
  d3: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM10.6118 8.24101C9.95713 7.58633 8.89569 7.58633 8.24101 8.24101C7.58633 8.89569 7.58633 9.95713 8.24101 10.6118L9.09887 11.4697C9.39177 11.7626 9.39177 12.2374 9.09887 12.5303C8.80598 12.8232 8.33111 12.8232 8.03821 12.5303L7.18035 11.6725C5.93988 10.432 5.93988 8.42081 7.18035 7.18035C8.42081 5.93988 10.432 5.93988 11.6725 7.18035L16.8197 12.3275C18.0601 13.568 18.0601 15.5792 16.8197 16.8197C15.5792 18.0601 13.568 18.0601 12.3275 16.8197L10.3973 14.8895C9.91415 14.4063 9.67832 13.8254 9.7025 13.2382C9.72612 12.6645 9.99515 12.158 10.3828 11.8026C11.1805 11.0711 12.5091 10.9484 13.5303 11.9697L14.5303 12.9697C14.8232 13.2626 14.8232 13.7374 14.5303 14.0303C14.2374 14.3232 13.7626 14.3232 13.4697 14.0303L12.4697 13.0303C12.2323 12.793 12.0159 12.7305 11.8563 12.7288C11.6857 12.7269 11.5212 12.7938 11.3965 12.9081C11.2714 13.0229 11.2068 13.1656 11.2012 13.2999C11.1963 13.4206 11.2358 13.6066 11.458 13.8288L13.3882 15.759C14.0429 16.4137 15.1043 16.4137 15.759 15.759C16.4137 15.1043 16.4137 14.0429 15.759 13.3882L10.6118 8.24101Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M8.24101 8.24101C8.89569 7.58633 9.95713 7.58633 10.6118 8.24101L15.759 13.3882C16.4137 14.0429 16.4137 15.1043 15.759 15.759C15.1043 16.4137 14.0429 16.4137 13.3882 15.759L11.458 13.8288C11.2358 13.6066 11.1963 13.4206 11.2012 13.2999C11.2068 13.1656 11.2714 13.0229 11.3965 12.9081C11.5212 12.7938 11.6857 12.7269 11.8563 12.7288C12.0159 12.7305 12.2323 12.793 12.4697 13.0303L13.4697 14.0303C13.7626 14.3232 14.2374 14.3232 14.5303 14.0303C14.8232 13.7374 14.8232 13.2626 14.5303 12.9697L13.5303 11.9697C12.5091 10.9484 11.1805 11.0711 10.3828 11.8026C9.99515 12.158 9.72612 12.6645 9.7025 13.2382C9.67832 13.8254 9.91415 14.4063 10.3973 14.8895L12.3275 16.8197C13.568 18.0601 15.5792 18.0601 16.8197 16.8197C18.0601 15.5792 18.0601 13.568 16.8197 12.3275L11.6725 7.18035C10.432 5.93988 8.42081 5.93988 7.18035 7.18035C5.93988 8.42081 5.93988 10.432 7.18035 11.6725L8.03821 12.5303C8.33111 12.8232 8.80598 12.8232 9.09887 12.5303C9.39177 12.2374 9.39177 11.7626 9.09887 11.4697L8.24101 10.6118C7.58633 9.95713 7.58633 8.89569 8.24101 8.24101Z',
  d6: 'M21 3H3V21H21V3Z',
  d7: 'M3 2.25C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.24101 8.24101C8.89569 7.58633 9.95713 7.58633 10.6118 8.24101L15.759 13.3882C16.4137 14.0429 16.4137 15.1043 15.759 15.759C15.1043 16.4137 14.0429 16.4137 13.3882 15.759L11.458 13.8288C11.2358 13.6066 11.1963 13.4206 11.2012 13.2999C11.2068 13.1656 11.2714 13.0229 11.3965 12.9081C11.5212 12.7938 11.6857 12.7269 11.8563 12.7288C12.0159 12.7305 12.2323 12.793 12.4697 13.0303L13.4697 14.0303L14.5303 12.9697L13.5303 11.9697C12.5091 10.9484 11.1805 11.0711 10.3828 11.8026C9.99515 12.158 9.72612 12.6645 9.7025 13.2382C9.67832 13.8254 9.91415 14.4063 10.3973 14.8895L12.3275 16.8197C13.568 18.0601 15.5792 18.0601 16.8197 16.8197C18.0601 15.5792 18.0601 13.568 16.8197 12.3275L11.6725 7.18035C10.432 5.93988 8.42081 5.93988 7.18035 7.18035C5.93988 8.42081 5.93988 10.432 7.18035 11.6725L8.03821 12.5303L9.09887 11.4697L8.24101 10.6118C7.58633 9.95713 7.58633 8.89569 8.24101 8.24101Z',
};

export const IconAttachmentSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-stroke-rounded IconAttachmentSquareStrokeRounded"
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

export const IconAttachmentSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-duotone-rounded IconAttachmentSquareDuotoneRounded"
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

export const IconAttachmentSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-twotone-rounded IconAttachmentSquareTwotoneRounded"
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

export const IconAttachmentSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-solid-rounded IconAttachmentSquareSolidRounded"
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

export const IconAttachmentSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-bulk-rounded IconAttachmentSquareBulkRounded"
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

export const IconAttachmentSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-stroke-sharp IconAttachmentSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconAttachmentSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-square-solid-sharp IconAttachmentSquareSolidSharp"
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

export const iconPackOfAttachmentSquare: TheIconSelfPack = {
  name: 'AttachmentSquare',
  StrokeRounded: IconAttachmentSquareStrokeRounded,
  DuotoneRounded: IconAttachmentSquareDuotoneRounded,
  TwotoneRounded: IconAttachmentSquareTwotoneRounded,
  SolidRounded: IconAttachmentSquareSolidRounded,
  BulkRounded: IconAttachmentSquareBulkRounded,
  StrokeSharp: IconAttachmentSquareStrokeSharp,
  SolidSharp: IconAttachmentSquareSolidSharp,
};