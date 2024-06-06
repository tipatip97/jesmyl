import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591',
  d2: 'M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3',
  d3: 'M10.9802 10.2163L16.2141 4.98242L19.0176 7.78594L13.7837 13.0198C12.7384 14.0651 12.2158 14.5878 11.5789 14.9437C10.942 15.2996 9.43809 15.6576 8 16C8.3424 14.5619 8.70047 13.058 9.05637 12.4211C9.41226 11.7842 9.93493 11.2616 10.9802 10.2163Z',
  d4: 'M11.9278 2.25L12 2.25C12.5385 2.25 12.975 2.68652 12.975 3.225C12.975 3.76348 12.5385 4.2 12 4.2C9.90415 4.2 8.43035 4.20207 7.31564 4.35194C6.22898 4.49804 5.63068 4.76831 5.1995 5.1995C4.76831 5.63068 4.49804 6.22898 4.35194 7.31564C4.20207 8.43035 4.2 9.90415 4.2 12C4.2 14.0959 4.20207 15.5697 4.35194 16.6844C4.49804 17.771 4.76831 18.3693 5.1995 18.8005C5.63068 19.2317 6.22898 19.502 7.31564 19.6481C8.43035 19.7979 9.90415 19.8 12 19.8C14.0959 19.8 15.5697 19.7979 16.6844 19.6481C17.771 19.502 18.3693 19.2317 18.8005 18.8005C19.2317 18.3693 19.502 17.771 19.6481 16.6844C19.7979 15.5697 19.8 14.0959 19.8 12C19.8 11.4615 20.2365 11.025 20.775 11.025C21.3135 11.025 21.75 11.4615 21.75 12V12.0722C21.75 14.0792 21.75 15.6844 21.5807 16.9442C21.4055 18.2471 21.0332 19.3255 20.1794 20.1794C19.3255 21.0332 18.2471 21.4055 16.9442 21.5807C15.6844 21.75 14.0792 21.75 12.0722 21.75H11.9278C9.92083 21.75 8.31558 21.75 7.0558 21.5807C5.75291 21.4055 4.67453 21.0332 3.82064 20.1794C2.96676 19.3255 2.5945 18.2471 2.41933 16.9442C2.24996 15.6844 2.24998 14.0792 2.25 12.0722V11.9278C2.24998 9.92081 2.24996 8.31558 2.41933 7.0558C2.5945 5.75291 2.96676 4.67453 3.82064 3.82064C4.67453 2.96676 5.75291 2.5945 7.0558 2.41933C8.31558 2.24996 9.92081 2.24998 11.9278 2.25Z',
  d5: 'M20.9497 3.0503C19.8827 1.98323 18.1526 1.98323 17.0855 3.0503L16.2139 3.92188L20.078 7.78615L20.9497 6.91448C22.0168 5.84742 22.0168 4.11736 20.9497 3.0503ZM19.0174 8.84682L15.1533 4.98254L10.3695 9.76637L10.3694 9.76637L10.3694 9.76639C9.40083 10.7348 8.80884 11.3266 8.40167 12.0553C8.17455 12.4617 7.97615 13.0782 7.8006 13.709C7.62 14.358 7.44221 15.1047 7.27249 15.8175L7.27041 15.8263C7.21009 16.0796 7.28552 16.3462 7.46969 16.5303C7.65385 16.7145 7.92037 16.7899 8.17373 16.7296L8.18242 16.7275C8.89524 16.5578 9.64198 16.38 10.291 16.1994C10.9218 16.0239 11.5383 15.8255 11.9448 15.5983C12.6734 15.1912 13.2653 14.5992 14.2337 13.6306L19.0174 8.84682Z',
  d6: 'M19.0175 8.84669L15.1534 4.98242L10.3695 9.76637C9.40085 10.7347 8.80884 11.3266 8.40167 12.0553C8.17455 12.4617 7.97615 13.0782 7.8006 13.709C7.62 14.358 7.44221 15.1047 7.27249 15.8175L7.27041 15.8263C7.21009 16.0796 7.28552 16.3462 7.46969 16.5303C7.65385 16.7145 7.92037 16.7899 8.17373 16.7296L8.18242 16.7275C8.89524 16.5578 9.64198 16.38 10.291 16.1994C10.9218 16.0239 11.5383 15.8255 11.9448 15.5983C12.6734 15.1912 13.2653 14.5992 14.2337 13.6306L19.0175 8.84669Z',
  d7: 'M20.9495 3.0503C19.8824 1.98323 18.1524 1.98323 17.0853 3.0503L16.2139 3.92176L20.078 7.78603L20.9495 6.91448C22.0166 5.84742 22.0166 4.11736 20.9495 3.0503Z',
  d8: 'M15.5 5.5L18 3L21 6L18.5 8.5M15.5 5.5L9 12L8 16L12 15L18.5 8.5M15.5 5.5L18.5 8.5',
  d9: 'M11 5H3V21H19V13',
  d10: 'M18.5303 2.46967C18.2375 2.17678 17.7626 2.17678 17.4697 2.46967L15.5005 4.43886L19.5612 8.49952L21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L18.5303 2.46967ZM18.5005 9.56018L14.4398 5.49952L8.46969 11.4697C8.37357 11.5658 8.30538 11.6862 8.27241 11.8181L7.27241 15.8181C7.20851 16.0737 7.2834 16.344 7.46969 16.5303C7.65597 16.7166 7.92634 16.7915 8.18192 16.7276L12.1819 15.7276C12.3138 15.6946 12.4342 15.6264 12.5303 15.5303L18.5005 9.56018Z',
  d11: 'M2.25 5.22222C2.25 4.68528 2.68528 4.25 3.22222 4.25H11V6.19444H4.19444V19.8056H17.8056V13H19.75V20.7778C19.75 21.3147 19.3147 21.75 18.7778 21.75H3.22222C2.68528 21.75 2.25 21.3147 2.25 20.7778V5.22222Z',
};

export const IconPencilEdit02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-stroke-rounded IconPencilEdit02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-duotone-rounded IconPencilEdit02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-twotone-rounded IconPencilEdit02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-solid-rounded IconPencilEdit02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPencilEdit02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-bulk-rounded IconPencilEdit02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-stroke-sharp IconPencilEdit02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-02-solid-sharp IconPencilEdit02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPencilEdit02: TheIconSelfPack = {
  name: 'PencilEdit02',
  StrokeRounded: IconPencilEdit02StrokeRounded,
  DuotoneRounded: IconPencilEdit02DuotoneRounded,
  TwotoneRounded: IconPencilEdit02TwotoneRounded,
  SolidRounded: IconPencilEdit02SolidRounded,
  BulkRounded: IconPencilEdit02BulkRounded,
  StrokeSharp: IconPencilEdit02StrokeSharp,
  SolidSharp: IconPencilEdit02SolidSharp,
};