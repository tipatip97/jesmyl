import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 17L11.0714 12.5M3 17L4.92857 12.5M4.92857 12.5L7.02295 7.61311C7.21207 7.17183 7.54728 7 8 7C8.45272 7 8.78793 7.17183 8.97705 7.61311L11.0714 12.5M4.92857 12.5H11.0714',
  d2: 'M16 3.00008C16.8333 2.99261 18 3.50003 18.5 4.50003M18.5 4.50003C19 3.50003 20.1667 3.00005 21 3.00008M18.5 4.50003L18.5 19.5M21 21C20.1667 21.0074 19 20.5 18.5 19.5M18.5 19.5C18 20.5 16.8333 21 16 21M20 12H17',
  d3: 'M4.92773 12.5L7.02212 7.61311C7.21124 7.17183 7.54645 7 7.99916 7C8.45188 7 8.78709 7.17183 8.97621 7.61311L11.0706 12.5H4.92773Z',
  d4: 'M8.00025 6C7.65097 6 7.26182 6.06619 6.89955 6.28288C6.52705 6.5057 6.26794 6.83682 6.10407 7.21919L2.08111 16.6061C1.86356 17.1137 2.09871 17.7016 2.60634 17.9191C3.11397 18.1367 3.70185 17.9015 3.9194 17.3939L5.58822 13.5H10.4123L12.0811 17.3939C12.2987 17.9015 12.8866 18.1367 13.3942 17.9191C13.9018 17.7016 14.137 17.1137 13.9194 16.6061L9.89646 7.21919C9.73258 6.83682 9.47348 6.5057 9.10097 6.28288C8.7387 6.06619 8.34953 6 8.00025 6ZM7.87887 8.15503C7.92989 8.02344 7.97889 8.00705 8.00021 8C8.02152 8.00705 8.07052 8.02344 8.12154 8.15503L9.5551 11.5H6.44531L7.87887 8.15503Z',
  d5: 'M16.8948 4.24941C16.57 4.07157 16.237 3.99799 16.009 4.00004C15.4567 4.00499 15.005 3.5613 15 3.00904C14.9951 2.45677 15.4388 2.00507 15.991 2.00012C16.7652 1.99318 17.7373 2.29532 18.5008 2.93321C19.2648 2.29754 20.2349 2.00005 21 2.00008C21.5523 2.0001 22 2.44783 22 3.00012C22 3.5524 21.5522 4.0001 21 4.00008C20.5128 4.00006 19.845 4.28843 19.5 4.77238V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H19.5V19.2285C19.6461 19.435 19.8546 19.6134 20.1052 19.7506C20.43 19.9285 20.763 20.0021 20.991 20C21.5433 19.9951 21.995 20.4388 22 20.991C22.0049 21.5433 21.5612 21.995 21.009 21.9999C20.2348 22.0069 19.2627 21.7047 18.4992 21.0668C17.7352 21.7025 16.7651 22 16 22C15.4477 22 15 21.5522 15 20.9999C15 20.4477 15.4478 20 16 20C16.4872 20 17.155 19.7116 17.5 19.2277V13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H17.5L17.5 4.77158C17.3539 4.5651 17.1454 4.38662 16.8948 4.24941Z',
  d6: 'M16.8967 4.24941C16.5719 4.07157 16.239 3.99799 16.0109 4.00004C15.4587 4.00499 15.0069 3.5613 15.002 3.00904C14.997 2.45677 15.4407 2.00507 15.993 2.00012C16.7672 1.99318 17.7393 2.29532 18.5028 2.93321C19.2667 2.29754 20.2368 2.00005 21.002 2.00008C21.5543 2.0001 22.002 2.44783 22.002 3.00012C22.0019 3.5524 21.5542 4.0001 21.0019 4.00008C20.5148 4.00006 19.8469 4.28843 19.502 4.77238V11H20.002C20.5542 11 21.002 11.4477 21.002 12C21.002 12.5523 20.5542 13 20.002 13H19.502V19.2285C19.648 19.435 19.8565 19.6134 20.1072 19.7506C20.432 19.9285 20.765 20.0021 20.993 20C21.5453 19.9951 21.997 20.4388 22.0019 20.991C22.0069 21.5433 21.5632 21.995 21.0109 21.9999C20.2367 22.0069 19.2646 21.7047 18.5011 21.0668C17.7372 21.7025 16.7671 22 16.0019 22C15.4496 22 15.0019 21.5522 15.002 20.9999C15.002 20.4477 15.4497 20 16.002 20C16.4891 20 17.157 19.7116 17.502 19.2277V13H17.002C16.4497 13 16.002 12.5523 16.002 12C16.002 11.4477 16.4497 11 17.002 11H17.502L17.502 4.77158C17.3559 4.5651 17.1474 4.38662 16.8967 4.24941Z',
  d7: 'M13 17.0002L8.5 7H7.5L3 17.0002M11 13H5',
  d8: 'M16 3.00008C16.8333 2.99261 18 3.50003 18.5 4.50003M18.5 4.50003C19 3.50003 20.1667 3.00005 21 3.00008M18.5 4.50003L18.5 19.5M21 21C20.1667 21.0074 19 20.5 18.5 19.5M18.5 19.5C18 20.5 16.8333 21 16 21M20.5 12H16.5',
  d9: 'M7.76301 6H10.0551L14.8181 16.5898L12.9951 17.4105L11.4612 14H6.35692L4.82296 17.4105L3 16.5898L7.76301 6ZM7.25647 12H10.5616L8.90904 8.32576L7.25647 12Z',
  d10: 'M16.8877 4.24941C16.563 4.07157 16.2302 3.99799 16.0023 4.00004L15.9844 2.00012C16.7582 1.99318 17.7298 2.29532 18.493 2.93321C19.2565 2.29754 20.2261 2.00005 20.9909 2.00008L20.9909 4.00008C20.504 4.00006 19.8364 4.28843 19.4916 4.77238V11H20.4911V13H19.4916V19.2285C19.6376 19.435 19.846 19.6134 20.0965 19.7506C20.4212 19.9285 20.754 20.0021 20.9819 20L20.9999 21.9999C20.226 22.0069 19.2544 21.7047 18.4913 21.0668C17.7277 21.7025 16.7581 22 15.9933 22L15.9934 20C16.4803 20 17.1478 19.7116 17.4926 19.2277L17.4926 13H16.4931V11H17.4926L17.4926 4.77158C17.3466 4.5651 17.1382 4.38662 16.8877 4.24941Z',
};

export const IconCursorTextStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-stroke-rounded IconCursorTextStrokeRounded"
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

export const IconCursorTextDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-duotone-rounded IconCursorTextDuotoneRounded"
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

export const IconCursorTextTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-twotone-rounded IconCursorTextTwotoneRounded"
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

export const IconCursorTextSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-solid-rounded IconCursorTextSolidRounded"
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

export const IconCursorTextBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-bulk-rounded IconCursorTextBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorTextStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-stroke-sharp IconCursorTextStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorTextSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-text-solid-sharp IconCursorTextSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursorText: TheIconSelfPack = {
  name: 'CursorText',
  StrokeRounded: IconCursorTextStrokeRounded,
  DuotoneRounded: IconCursorTextDuotoneRounded,
  TwotoneRounded: IconCursorTextTwotoneRounded,
  SolidRounded: IconCursorTextSolidRounded,
  BulkRounded: IconCursorTextBulkRounded,
  StrokeSharp: IconCursorTextStrokeSharp,
  SolidSharp: IconCursorTextSolidSharp,
};