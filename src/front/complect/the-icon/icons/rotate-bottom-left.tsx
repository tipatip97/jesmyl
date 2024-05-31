import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.00098 10C2.00098 13.2998 2.00098 14.9497 3.0261 15.9749C4.05123 17 5.70114 17 9.00098 17C12.3008 17 13.9507 17 14.9758 15.9749C16.001 14.9497 16.001 13.2998 16.001 10C16.001 6.70017 16.001 5.05025 14.9759 4.02513C13.9507 3 12.3008 3 9.00098 3C5.70115 3 4.05123 3 3.0261 4.02513C2.00098 5.05025 2.00098 6.70017 2.00098 10Z',
  d2: 'M22 14.4201L20.8899 13.0744C20.299 12.3581 20.0035 12 19.6364 12V13C19.6364 16.7712 19.6364 18.6569 18.4648 19.8284C17.2932 21 15.4076 21 11.6364 21H11',
  d3: 'M2.00098 10C2.00098 13.2998 2.00098 14.9497 3.0261 15.9749C4.05123 17 5.70115 17 9.00098 17C12.3008 17 13.9507 17 14.9759 15.9749C16.001 14.9497 16.001 13.2998 16.001 10C16.001 6.70017 16.001 5.05025 14.9759 4.02513C13.9507 3 12.3008 3 9.00098 3C5.70114 3 4.05123 3 3.0261 4.02513C2.00098 5.05025 2.00098 6.70017 2.00098 10Z',
  d4: 'M9.05575 2.25C10.6583 2.24998 11.9373 2.24997 12.9404 2.38483C13.9767 2.52415 14.8301 2.81966 15.5052 3.4948C16.1803 4.16994 16.4759 5.02335 16.6152 6.05961C16.75 7.0627 16.75 8.34166 16.75 9.94426V10.0557C16.75 11.6583 16.75 12.9373 16.6152 13.9404C16.4758 14.9767 16.1803 15.8301 15.5052 16.5052C14.8301 17.1803 13.9767 17.4759 12.9404 17.6152C11.9373 17.75 10.6583 17.75 9.05574 17.75H8.94426C7.34166 17.75 6.0627 17.75 5.05961 17.6152C4.02335 17.4759 3.16994 17.1803 2.4948 16.5052C1.81966 15.8301 1.52415 14.9767 1.38483 13.9404C1.24997 12.9373 1.24998 11.6583 1.25 10.0557V10.0557V9.94426V9.94425C1.24998 8.34166 1.24997 7.0627 1.38483 6.05961C1.52415 5.02335 1.81966 4.16994 2.4948 3.4948C3.16994 2.81966 4.02335 2.52415 5.05961 2.38483C6.0627 2.24997 7.34166 2.24998 8.94425 2.25H8.94426H9.05574H9.05575Z',
  d5: 'M18.3854 11.75C18.3854 11.1977 18.8331 10.75 19.3854 10.75C19.9399 10.75 20.3404 11.0377 20.6072 11.2845C20.8514 11.5103 21.1104 11.8244 21.3747 12.1449C21.3865 12.1593 21.3984 12.1737 21.4103 12.1881L22.5204 13.5338C22.8719 13.9598 22.8114 14.5901 22.3854 14.9415C21.9594 15.293 21.3291 15.2325 20.9776 14.8065L20.3832 14.0859C20.3763 15.3399 20.3478 16.3962 20.23 17.2723C20.0687 18.4725 19.7235 19.483 18.9209 20.2855C18.1184 21.0881 17.1079 21.4333 15.9077 21.5946C14.7518 21.75 13.282 21.75 11.4586 21.75H10.749C10.1967 21.75 9.74902 21.3023 9.74902 20.75C9.74902 20.1977 10.1967 19.75 10.749 19.75H11.3854C13.2993 19.75 14.6341 19.7479 15.6412 19.6125C16.6196 19.4809 17.1377 19.2403 17.5067 18.8713C17.8757 18.5023 18.1163 17.9842 18.2479 17.0058C18.3833 15.9987 18.3854 14.6639 18.3854 12.75V11.75Z',
  d6: 'M9.05673 2.25C10.6593 2.24998 11.9383 2.24997 12.9414 2.38483C13.9776 2.52415 14.831 2.81966 15.5062 3.4948C16.1813 4.16994 16.4768 5.02335 16.6161 6.05961C16.751 7.0627 16.751 8.34166 16.751 9.94426V10.0557C16.751 11.6583 16.751 12.9373 16.6161 13.9404C16.4768 14.9767 16.1813 15.8301 15.5062 16.5052C14.831 17.1803 13.9776 17.4759 12.9414 17.6152C11.9383 17.75 10.6593 17.75 9.05672 17.75H8.94524C7.34264 17.75 6.06368 17.75 5.06059 17.6152C4.02433 17.4759 3.17091 17.1803 2.49577 16.5052C1.82063 15.8301 1.52513 14.9767 1.38581 13.9404C1.25094 12.9373 1.25096 11.6583 1.25098 10.0557V10.0557V9.94426V9.94425C1.25096 8.34166 1.25095 7.0627 1.38581 6.05961C1.52513 5.02335 1.82063 4.16994 2.49577 3.4948C3.17091 2.81966 4.02433 2.52415 5.06059 2.38483C6.06367 2.24997 7.34263 2.24998 8.94522 2.25H8.94523H9.05672H9.05673Z',
  d7: 'M18.3864 11.75C18.3864 11.1977 18.8341 10.75 19.3864 10.75C19.9408 10.75 20.3414 11.0377 20.6082 11.2845C20.8523 11.5103 21.1114 11.8244 21.3756 12.1449C21.3875 12.1593 21.3994 12.1737 21.4113 12.1881L22.5214 13.5338C22.8728 13.9598 22.8124 14.5901 22.3864 14.9415C21.9603 15.293 21.3301 15.2325 20.9786 14.8065L20.3842 14.0859C20.3773 15.3399 20.3488 16.3962 20.231 17.2723C20.0696 18.4725 19.7245 19.483 18.9219 20.2855C18.1193 21.0881 17.1088 21.4333 15.9087 21.5946C14.7527 21.75 13.283 21.75 11.4595 21.75H10.75C10.1977 21.75 9.75 21.3023 9.75 20.75C9.75 20.1977 10.1977 19.75 10.75 19.75H11.3864C13.3002 19.75 14.6351 19.7479 15.6422 19.6125C16.6206 19.4809 17.1387 19.2403 17.5077 18.8713C17.8767 18.5023 18.1173 17.9842 18.2488 17.0058C18.3842 15.9987 18.3864 14.6639 18.3864 12.75V11.75Z',
  d8: 'M15 16.5H2V3.5H15V16.5Z',
  d9: 'M22 13.4998L19 10.5V20.4998H10',
  d10: 'M15 17.25C15.4142 17.25 15.75 16.9142 15.75 16.5L15.75 3.5C15.75 3.08579 15.4142 2.75 15 2.75L2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5L1.25 16.5C1.25 16.9142 1.58579 17.25 2 17.25L15 17.25Z',
  d11: 'M22.75 12.6644L19.4571 9.54315C19.1711 9.25716 18.741 9.17162 18.3673 9.3264C17.9936 9.48118 17.75 9.84582 17.75 10.2503L17.75 19.2501H9.75L9.75 21.2501H18.75C19.3023 21.2501 19.75 20.8024 19.75 20.2501V12.6644L21.3358 14.0786L22.75 12.6644Z',
} as const;

export const IconRotateBottomLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-stroke-rounded IconRotateBottomLeftStrokeRounded"
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

export const IconRotateBottomLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-duotone-rounded IconRotateBottomLeftDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateBottomLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-twotone-rounded IconRotateBottomLeftTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateBottomLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-solid-rounded IconRotateBottomLeftSolidRounded"
    >
      <path 
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

export const IconRotateBottomLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-bulk-rounded IconRotateBottomLeftBulkRounded"
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

export const IconRotateBottomLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-stroke-sharp IconRotateBottomLeftStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconRotateBottomLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-bottom-left-solid-sharp IconRotateBottomLeftSolidSharp"
    >
      <path 
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

export const iconPackOfRotateBottomLeft: TheIconSelfPack = {
  name: 'RotateBottomLeft',
  StrokeRounded: IconRotateBottomLeftStrokeRounded,
  DuotoneRounded: IconRotateBottomLeftDuotoneRounded,
  TwotoneRounded: IconRotateBottomLeftTwotoneRounded,
  SolidRounded: IconRotateBottomLeftSolidRounded,
  BulkRounded: IconRotateBottomLeftBulkRounded,
  StrokeSharp: IconRotateBottomLeftStrokeSharp,
  SolidSharp: IconRotateBottomLeftSolidSharp,
};