import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 15L6 22',
  d2: 'M15 15L18 22',
  d3: 'M12 15L12 22',
  d4: 'M15.5556 6C16.1481 5.44772 16.1481 4.55228 15.5556 4C14.963 3.44772 14.963 2.55228 15.5556 2M12 6C12.5926 5.44772 12.5926 4.55228 12 4C11.4074 3.44772 11.4074 2.55228 12 2M8.44444 6C9.03704 5.44772 9.03704 4.55228 8.44444 4C7.85185 3.44772 7.85185 2.55228 8.44444 2',
  d5: 'M7.5 19H16.5',
  d6: 'M12 15C15.5371 15 18.4632 12.3908 18.9485 8.99703C19.0107 8.56215 19.0418 8.3447 18.8918 8.17235C18.7419 8 18.5001 8 18.0164 8H5.98359C5.49992 8 5.25809 8 5.10816 8.17235C4.95823 8.3447 4.98933 8.56215 5.05151 8.99703C5.53679 12.3908 8.46285 15 12 15Z',
  d7: 'M19 10H20M5 10H4',
  d8: 'M8.99311 1.48866C9.27551 1.79168 9.2588 2.26626 8.95579 2.54866C8.6814 2.80438 8.6814 3.19562 8.95579 3.45134C9.86659 4.30019 9.86659 5.69981 8.95579 6.54866C8.65277 6.83107 8.17819 6.81436 7.89578 6.51134C7.61338 6.20833 7.63009 5.73375 7.9331 5.45134C8.20748 5.19562 8.20748 4.80438 7.9331 4.54866C7.0223 3.69981 7.0223 2.30019 7.9331 1.45134C8.23612 1.16894 8.7107 1.18564 8.99311 1.48866ZM12.5487 1.48866C12.8311 1.79168 12.8144 2.26626 12.5113 2.54866C12.237 2.80438 12.237 3.19562 12.5113 3.45134C13.4221 4.30019 13.4221 5.69981 12.5113 6.54866C12.2083 6.83107 11.7337 6.81436 11.4513 6.51134C11.1689 6.20833 11.1856 5.73375 11.4887 5.45134C11.763 5.19562 11.763 4.80438 11.4887 4.54866C10.5779 3.69981 10.5779 2.30019 11.4887 1.45134C11.7917 1.16894 12.2663 1.18564 12.5487 1.48866ZM16.1042 1.48866C16.3866 1.79168 16.3699 2.26626 16.0669 2.54866C15.7925 2.80438 15.7925 3.19562 16.0669 3.45134C16.9777 4.30019 16.9777 5.69981 16.0669 6.54866C15.7639 6.83107 15.2893 6.81436 15.0069 6.51134C14.7245 6.20833 14.7412 5.73375 15.0442 5.45134C15.3186 5.19562 15.3186 4.80438 15.0442 4.54866C14.1334 3.69981 14.1334 2.30019 15.0442 1.45134C15.3472 1.16894 15.8218 1.18564 16.1042 1.48866Z',
  d9: 'M9.29563 14.3106C9.67635 14.4738 9.85272 14.9147 9.68955 15.2954L8.42331 18.2499H11.2502V14.9999C11.2502 14.5857 11.586 14.2499 12.0002 14.2499C12.4144 14.2499 12.7502 14.5857 12.7502 14.9999V18.2499H15.5771L14.3108 15.2954C14.1477 14.9147 14.324 14.4738 14.7048 14.3106C15.0855 14.1474 15.5264 14.3238 15.6896 14.7045L18.6896 21.7045C18.8527 22.0852 18.6764 22.5261 18.2956 22.6893C17.9149 22.8525 17.474 22.6761 17.3108 22.2954L16.2199 19.7499H12.7502V21.9999C12.7502 22.4142 12.4144 22.7499 12.0002 22.7499C11.586 22.7499 11.2502 22.4142 11.2502 21.9999V19.7499H7.78045L6.68955 22.2954C6.52638 22.6761 6.08548 22.8525 5.70475 22.6893C5.32403 22.5261 5.14767 22.0852 5.31083 21.7045L8.31083 14.7045C8.474 14.3238 8.91491 14.1474 9.29563 14.3106Z',
  d10: 'M5.9463 7.25001L5.98355 7.25003H18.0164L18.0536 7.25001C18.2621 7.2499 18.4955 7.24978 18.6936 7.28034C18.9369 7.31787 19.2263 7.41419 19.4577 7.68014C19.6781 7.93358 19.7433 8.21681 19.7494 8.46788C19.7542 8.66272 19.7226 8.88245 19.696 9.0674L19.6909 9.10322C19.1533 12.8627 15.9141 15.75 12 15.75C8.08587 15.75 4.8466 12.8627 4.30903 9.10322L4.30389 9.0674C4.2773 8.88245 4.2457 8.66272 4.25048 8.46788C4.25664 8.21681 4.32179 7.93358 4.54226 7.68014C4.77361 7.41419 5.06306 7.31787 5.30634 7.28034C5.50446 7.24978 5.73782 7.2499 5.9463 7.25001L5.9463 7.25001Z',
  d11: 'M3 10C3 9.44772 3.44772 9 4 9H5C5.55228 9 6 9.44772 6 10C6 10.5523 5.55228 11 5 11H4C3.44772 11 3 10.5523 3 10ZM18 10C18 9.44772 18.4477 9 19 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H19C18.4477 11 18 10.5523 18 10Z',
  d12: 'M4.29425 9H4C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H4.83448C4.5827 10.4022 4.40384 9.7663 4.30903 9.10322L4.30389 9.0674L4.30388 9.06739C4.30072 9.04539 4.29749 9.02289 4.29425 9ZM8.26998 14.8001L5.31083 21.7048C5.14767 22.0855 5.32403 22.5264 5.70475 22.6896C6.08548 22.8527 6.52638 22.6764 6.68955 22.2956L7.78045 19.7502H11.2502V22.0002C11.2502 22.4144 11.586 22.7502 12.0002 22.7502C12.4144 22.7502 12.7502 22.4144 12.7502 22.0002V19.7502H16.2199L17.3108 22.2956C17.474 22.6764 17.9149 22.8527 18.2956 22.6896C18.6764 22.5264 18.8527 22.0855 18.6896 21.7048L15.7303 14.7999C15.2942 15.0385 14.8327 15.2365 14.3508 15.3889L15.5771 18.2502H12.7502V15.7144C12.5033 15.738 12.253 15.75 12 15.75C11.747 15.75 11.4969 15.738 11.2502 15.7144V18.2502H8.42331L9.64952 15.389C9.16764 15.2366 8.70609 15.0386 8.26998 14.8001ZM19.1654 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H19.7057C19.7024 9.02288 19.6992 9.04537 19.6961 9.06737L19.696 9.0674L19.6909 9.10322C19.5961 9.7663 19.4172 10.4022 19.1654 11Z',
  d13: 'M12 2V6',
  d14: 'M15.5 2V6',
  d15: 'M8.5 2V6',
  d16: 'M9 15L6 22M15 15L18 22M12 15L12 22M7.5 19H16.5',
  d17: 'M12 15C15.866 15 19 11.866 19 8H5C5 11.866 8.13401 15 12 15Z',
  d18: 'M19 10H21M5 10H3',
  d19: 'M5.31055 21.4092L8.31055 14.4092L9.68926 15.0001L6.68926 22.0001L5.31055 21.4092Z',
  d20: 'M18.6895 21.4092L15.6895 14.4092L14.3107 15.0001L17.3107 22.0001L18.6895 21.4092Z',
  d21: 'M11.25 22L11.25 15L12.75 15L12.75 22L11.25 22Z',
  d22: 'M11.25 6V2H12.75V6H11.25Z',
  d23: 'M7.25 6V2H8.75V6H7.25Z',
  d24: 'M15.25 6V2H16.75V6H15.25Z',
  d25: 'M16.5 19.75H7.5V18.25H16.5V19.75Z',
  d26: 'M19.75 7.25V8C19.75 12.2802 16.2802 15.75 12 15.75C7.71979 15.75 4.25 12.2802 4.25 8V7.25H19.75Z',
  d27: 'M3 9.25H5V10.75H3V9.25ZM21 10.75H19V9.25H21V10.75Z',
} as const;

export const IconBbqGrillStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-stroke-rounded IconBbqGrillStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBbqGrillDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-duotone-rounded IconBbqGrillDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBbqGrillTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-twotone-rounded IconBbqGrillTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBbqGrillSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-solid-rounded IconBbqGrillSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconBbqGrillBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-bulk-rounded IconBbqGrillBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBbqGrillStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-stroke-sharp IconBbqGrillStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBbqGrillSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bbq-grill-solid-sharp IconBbqGrillSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBbqGrill: TheIconSelfPack = {
  name: 'BbqGrill',
  StrokeRounded: IconBbqGrillStrokeRounded,
  DuotoneRounded: IconBbqGrillDuotoneRounded,
  TwotoneRounded: IconBbqGrillTwotoneRounded,
  SolidRounded: IconBbqGrillSolidRounded,
  BulkRounded: IconBbqGrillBulkRounded,
  StrokeSharp: IconBbqGrillStrokeSharp,
  SolidSharp: IconBbqGrillSolidSharp,
};