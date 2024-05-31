import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5',
  d2: 'M19.5 13.5001V12.0001H14.5V8C14.5 5.23858 12.2614 3 9.5 3C6.73858 3 4.5 5.23858 4.5 8V13.5001C4.5 17.6422 7.85786 21.0001 12 21.0001C16.1421 21.0001 19.5 17.6422 19.5 13.5001Z',
  d3: 'M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3',
  d4: 'M9.5 9.5V13.5C9.5 14.8807 10.6193 16 12 16C13.3807 16 14.5 14.8807 14.5 13.5V8C14.5 5.23858 12.2614 3 9.5 3',
  d5: 'M9.57353 4.19999C7.42937 4.19999 5.69118 5.94608 5.69118 8.09998V13.4625C5.69118 16.9626 8.51573 19.8 12 19.8C15.4843 19.8 18.3088 16.9626 18.3088 13.4625V12C18.3088 11.4616 18.7434 11.025 19.2794 11.025C19.8155 11.025 20.25 11.4616 20.25 12V13.4625C20.25 18.0396 16.5563 21.75 12 21.75C7.44365 21.75 3.75 18.0396 3.75 13.4625V8.09998C3.75 4.86913 6.35728 2.25 9.57353 2.25C12.7898 2.25 15.3971 4.86913 15.3971 8.09998V13.4625C15.3971 15.3471 13.8761 16.875 12 16.875C10.1239 16.875 8.60294 15.3471 8.60294 13.4625V9.56248C8.60294 9.024 9.03749 8.58748 9.57353 8.58748C10.1096 8.58748 10.5441 9.024 10.5441 9.56248V13.4625C10.5441 14.2702 11.1959 14.925 12 14.925C12.8041 14.925 13.4559 14.2702 13.4559 13.4625V8.09998C13.4559 5.94608 11.7177 4.19999 9.57353 4.19999Z',
  d6: 'M9.5741 2.25C12.7903 2.25 15.3976 4.86913 15.3976 8.09998V13.4625C15.3976 15.3471 13.8767 16.875 12.0006 16.875C10.1244 16.875 8.60352 15.3471 8.60352 13.4625V9.56248C8.60352 9.024 9.03806 8.58748 9.5741 8.58748C10.1101 8.58748 10.5447 9.024 10.5447 9.56248V13.4625C10.5447 14.2702 11.1965 14.925 12.0006 14.925C12.8046 14.925 13.4565 14.2702 13.4565 13.4625V8.09998C13.4565 5.94608 11.7183 4.19999 9.5741 4.19999V2.25Z',
  d7: 'M9.57353 4.19999C7.42937 4.19999 5.69118 5.94608 5.69118 8.09998V13.4625C5.69118 16.9626 8.51573 19.8 12 19.8C15.4843 19.8 18.3088 16.9626 18.3088 13.4625V12C18.3088 11.4616 18.7434 11.025 19.2794 11.025C19.8155 11.025 20.25 11.4616 20.25 12V13.4625C20.25 18.0396 16.5563 21.75 12 21.75C7.44365 21.75 3.75 18.0396 3.75 13.4625V8.09998C3.75 4.86913 6.35728 2.25 9.57353 2.25V4.19999Z',
  d8: 'M9.57353 4.19999C7.42937 4.19999 5.69118 5.94608 5.69118 8.09998V13.4625C5.69118 16.9626 8.51573 19.8 12 19.8C15.4843 19.8 18.3088 16.9626 18.3088 13.4625V12H20.25V13.4625C20.25 18.0396 16.5563 21.75 12 21.75C7.44365 21.75 3.75 18.0396 3.75 13.4625V8.09998C3.75 4.86913 6.35728 2.25 9.57353 2.25C12.7898 2.25 15.3971 4.86913 15.3971 8.09998V13.4625C15.3971 15.3471 13.8761 16.875 12 16.875C10.1239 16.875 8.60294 15.3471 8.60294 13.4625V9.56248H10.5441V13.4625C10.5441 14.2702 11.1959 14.925 12 14.925C12.8041 14.925 13.4559 14.2702 13.4559 13.4625V8.09998C13.4559 5.94608 11.7177 4.19999 9.57353 4.19999Z',
} as const;

export const IconAttachmentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-stroke-rounded IconAttachmentStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAttachmentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-duotone-rounded IconAttachmentDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAttachmentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-twotone-rounded IconAttachmentTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAttachmentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-solid-rounded IconAttachmentSolidRounded"
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

export const IconAttachmentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-bulk-rounded IconAttachmentBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAttachmentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-stroke-sharp IconAttachmentStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAttachmentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="attachment-solid-sharp IconAttachmentSolidSharp"
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

export const iconPackOfAttachment: TheIconSelfPack = {
  name: 'Attachment',
  StrokeRounded: IconAttachmentStrokeRounded,
  DuotoneRounded: IconAttachmentDuotoneRounded,
  TwotoneRounded: IconAttachmentTwotoneRounded,
  SolidRounded: IconAttachmentSolidRounded,
  BulkRounded: IconAttachmentBulkRounded,
  StrokeSharp: IconAttachmentStrokeSharp,
  SolidSharp: IconAttachmentSolidSharp,
};