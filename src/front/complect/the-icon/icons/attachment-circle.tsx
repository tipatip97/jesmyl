import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.56854 12L7.71068 11.1421C6.76311 10.1946 6.76311 8.65825 7.71068 7.71068C8.65825 6.76311 10.1946 6.76311 11.1421 7.71068L16.2893 12.8579C17.2369 13.8054 17.2369 15.3418 16.2893 16.2893C15.3418 17.2369 13.8054 17.2369 12.8579 16.2893L10.9277 14.3591C9.51688 12.9483 11.5463 11.0463 13 12.5L14 13.5',
  d2: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.6118 8.24101C9.95713 7.58633 8.89569 7.58633 8.24101 8.24101C7.58633 8.89569 7.58633 9.95713 8.24101 10.6118L9.09887 11.4697C9.39177 11.7626 9.39177 12.2374 9.09887 12.5303C8.80598 12.8232 8.33111 12.8232 8.03821 12.5303L7.18035 11.6725C5.93988 10.432 5.93988 8.42081 7.18035 7.18035C8.42081 5.93988 10.432 5.93988 11.6725 7.18035L16.8197 12.3275C18.0601 13.568 18.0601 15.5792 16.8197 16.8197C15.5792 18.0601 13.568 18.0601 12.3275 16.8197L10.3973 14.8895C9.91415 14.4063 9.67832 13.8254 9.7025 13.2382C9.72612 12.6645 9.99515 12.158 10.3828 11.8026C11.1805 11.0711 12.5091 10.9484 13.5303 11.9697L14.5303 12.9697C14.8232 13.2626 14.8232 13.7374 14.5303 14.0303C14.2374 14.3232 13.7626 14.3232 13.4697 14.0303L12.4697 13.0303C12.2323 12.793 12.0159 12.7305 11.8563 12.7288C11.6857 12.7269 11.5212 12.7938 11.3965 12.9081C11.2714 13.0229 11.2068 13.1656 11.2012 13.2999C11.1963 13.4206 11.2358 13.6066 11.458 13.8288L13.3882 15.759C14.0429 16.4137 15.1043 16.4137 15.759 15.759C16.4137 15.1043 16.4137 14.0429 15.759 13.3882L10.6118 8.24101Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d4: 'M8.24101 8.24101C8.89569 7.58633 9.95713 7.58633 10.6118 8.24101L15.759 13.3882C16.4137 14.0429 16.4137 15.1043 15.759 15.759C15.1043 16.4137 14.0429 16.4137 13.3882 15.759L11.458 13.8288C11.2358 13.6066 11.1963 13.4206 11.2012 13.2999C11.2068 13.1656 11.2714 13.0229 11.3965 12.9081C11.5212 12.7938 11.6857 12.7269 11.8563 12.7288C12.0159 12.7305 12.2323 12.793 12.4697 13.0303L13.4697 14.0303C13.7626 14.3232 14.2374 14.3232 14.5303 14.0303C14.8232 13.7374 14.8232 13.2626 14.5303 12.9697L13.5303 11.9697C12.5091 10.9484 11.1805 11.0711 10.3828 11.8026C9.99515 12.158 9.72612 12.6645 9.7025 13.2382C9.67832 13.8254 9.91415 14.4063 10.3973 14.8895L12.3275 16.8197C13.568 18.0601 15.5792 18.0601 16.8197 16.8197C18.0601 15.5792 18.0601 13.568 16.8197 12.3275L11.6725 7.18035C10.432 5.93988 8.42081 5.93988 7.18035 7.18035C5.93988 8.42081 5.93988 10.432 7.18035 11.6725L8.03821 12.5303C8.33111 12.8232 8.80598 12.8232 9.09887 12.5303C9.39177 12.2374 9.39177 11.7626 9.09887 11.4697L8.24101 10.6118C7.58633 9.95713 7.58633 8.89569 8.24101 8.24101Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.24101 8.24101C8.89569 7.58633 9.95713 7.58633 10.6118 8.24101L15.759 13.3882C16.4137 14.0429 16.4137 15.1043 15.759 15.759C15.1043 16.4137 14.0429 16.4137 13.3882 15.759L11.458 13.8288C11.2358 13.6066 11.1963 13.4206 11.2012 13.2999C11.2068 13.1656 11.2714 13.0229 11.3965 12.9081C11.5212 12.7938 11.6857 12.7269 11.8563 12.7288C12.0159 12.7305 12.2323 12.793 12.4697 13.0303L13.4697 14.0303L14.5303 12.9697L13.5303 11.9697C12.5091 10.9484 11.1805 11.0711 10.3828 11.8026C9.99515 12.158 9.72612 12.6645 9.7025 13.2382C9.67832 13.8254 9.91415 14.4063 10.3973 14.8895L12.3275 16.8197C13.568 18.0601 15.5792 18.0601 16.8197 16.8197C18.0601 15.5792 18.0601 13.568 16.8197 12.3275L11.6725 7.18035C10.432 5.93988 8.42081 5.93988 7.18035 7.18035C5.93988 8.42081 5.93988 10.432 7.18035 11.6725L8.03821 12.5303L9.09887 11.4697L8.24101 10.6118C7.58633 9.95713 7.58633 8.89569 8.24101 8.24101Z',
} as const;

export const IconAttachmentCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-stroke-rounded IconAttachmentCircleStrokeRounded"
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
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-duotone-rounded IconAttachmentCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
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
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-twotone-rounded IconAttachmentCircleTwotoneRounded"
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
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-solid-rounded IconAttachmentCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-bulk-rounded IconAttachmentCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-stroke-sharp IconAttachmentCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAttachmentCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-circle-solid-sharp IconAttachmentCircleSolidSharp"
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

export const iconPackOfAttachmentCircle: TheIconSelfPack = {
  name: 'AttachmentCircle',
  StrokeRounded: IconAttachmentCircleStrokeRounded,
  DuotoneRounded: IconAttachmentCircleDuotoneRounded,
  TwotoneRounded: IconAttachmentCircleTwotoneRounded,
  SolidRounded: IconAttachmentCircleSolidRounded,
  BulkRounded: IconAttachmentCircleBulkRounded,
  StrokeSharp: IconAttachmentCircleStrokeSharp,
  SolidSharp: IconAttachmentCircleSolidSharp,
};