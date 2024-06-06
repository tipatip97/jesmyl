import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 2V4M12 2V4M7 2V4',
  d2: 'M3.5 10C3.5 6.70017 3.5 5.05025 4.52513 4.02513C5.55025 3 7.20017 3 10.5 3H13.5C16.7998 3 18.4497 3 19.4749 4.02513C20.5 5.05025 20.5 6.70017 20.5 10V15C20.5 18.2998 20.5 19.9497 19.4749 20.9749C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9749C3.5 19.9497 3.5 18.2998 3.5 15V10Z',
  d3: 'M8 15H12M8 10H16',
  d4: 'M7 1.125C7.55228 1.125 8 1.57272 8 2.125V4.125C8 4.67728 7.55228 5.125 7 5.125C6.44772 5.125 6 4.67728 6 4.125V2.125C6 1.57272 6.44772 1.125 7 1.125ZM12 1.125C12.5523 1.125 13 1.57272 13 2.125V4.125C13 4.67728 12.5523 5.125 12 5.125C11.4477 5.125 11 4.67728 11 4.125V2.125C11 1.57272 11.4477 1.125 12 1.125ZM17 1.125C17.5523 1.125 18 1.57272 18 2.125V4.125C18 4.67728 17.5523 5.125 17 5.125C16.4477 5.125 16 4.67728 16 4.125V2.125C16 1.57272 16.4477 1.125 17 1.125Z',
  d5: 'M13.5558 2.375H13.5558H13.5557H10.4443H10.4442H10.4442C8.84165 2.37498 7.5627 2.37497 6.55961 2.50983C5.52335 2.64915 4.66994 2.94466 3.9948 3.6198C3.31966 4.29494 3.02415 5.14835 2.88483 6.18461C2.74997 7.1877 2.74998 8.46665 2.75 10.0692V10.0692V10.0693V15.1807V15.1808V15.1808C2.74998 16.7834 2.74997 18.0623 2.88483 19.0654C3.02415 20.1017 3.31966 20.9551 3.9948 21.6302C4.66994 22.3053 5.52335 22.6008 6.55961 22.7402C7.5627 22.875 8.84166 22.875 10.4443 22.875H13.5557C15.1583 22.875 16.4373 22.875 17.4404 22.7402C18.4767 22.6008 19.3301 22.3053 20.0052 21.6302C20.6803 20.9551 20.9758 20.1017 21.1152 19.0654C21.25 18.0623 21.25 16.7833 21.25 15.1807V10.0693C21.25 8.46666 21.25 7.1877 21.1152 6.18461C20.9758 5.14835 20.6803 4.29494 20.0052 3.6198C19.3301 2.94466 18.4767 2.64915 17.4404 2.50983C16.4373 2.37497 15.1584 2.37498 13.5558 2.375ZM8 9.125C7.44772 9.125 7 9.57272 7 10.125C7 10.6773 7.44772 11.125 8 11.125H16C16.5523 11.125 17 10.6773 17 10.125C17 9.57272 16.5523 9.125 16 9.125H8ZM8 14.125C7.44772 14.125 7 14.5727 7 15.125C7 15.6773 7.44772 16.125 8 16.125H12C12.5523 16.125 13 15.6773 13 15.125C13 14.5727 12.5523 14.125 12 14.125H8Z',
  d6: 'M13.5558 2.375C15.1583 2.37498 16.4373 2.37497 17.4404 2.50983C18.4767 2.64915 19.3301 2.94466 20.0052 3.6198C20.6803 4.29494 20.9758 5.14835 21.1152 6.18461C21.25 7.1877 21.25 8.46666 21.25 10.0693V15.1807C21.25 16.7833 21.25 18.0623 21.1152 19.0654C20.9758 20.1017 20.6803 20.9551 20.0052 21.6302C19.3301 22.3053 18.4767 22.6008 17.4404 22.7402C16.4373 22.875 15.1583 22.875 13.5557 22.875H10.4443C8.84166 22.875 7.5627 22.875 6.55961 22.7402C5.52335 22.6008 4.66994 22.3053 3.9948 21.6302C3.31966 20.9551 3.02415 20.1017 2.88483 19.0654C2.74997 18.0623 2.74998 16.7833 2.75 15.1808V15.1807V10.0693V10.0692C2.74998 8.46666 2.74997 7.1877 2.88483 6.18461C3.02415 5.14835 3.31966 4.29494 3.9948 3.6198C4.66994 2.94466 5.52335 2.64915 6.55961 2.50983C7.5627 2.37497 8.84166 2.37498 10.4442 2.375H10.4443H13.5557H13.5558Z',
  d7: 'M7 10.125C7 9.57272 7.44772 9.125 8 9.125H16C16.5523 9.125 17 9.57272 17 10.125C17 10.6773 16.5523 11.125 16 11.125H8C7.44772 11.125 7 10.6773 7 10.125ZM7 15.125C7 14.5727 7.44772 14.125 8 14.125H12C12.5523 14.125 13 14.5727 13 15.125C13 15.6773 12.5523 16.125 12 16.125H8C7.44772 16.125 7 15.6773 7 15.125Z',
  d8: 'M17 2V6M12 2V6M7 2V6',
  d9: 'M21 4H3V22L21 22V4Z',
  d10: 'M8 16H12M8 11H16',
  d11: 'M8 3H11V1.5H13V3H16V1.5H18V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.75C21.75 21.9489 21.671 22.1397 21.5303 22.2803C21.3897 22.421 21.1989 22.5 21 22.5L3 22.5C2.58579 22.5 2.25 22.1642 2.25 21.75V3.75C2.25 3.33579 2.58579 3 3 3H6V1.5H8V3ZM16 11.75H8V9.75H16V11.75ZM12 16.75H8V14.75H12V16.75Z',
};

export const IconNote01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-stroke-rounded IconNote01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-duotone-rounded IconNote01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconNote01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-twotone-rounded IconNote01TwotoneRounded"
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

export const IconNote01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-solid-rounded IconNote01SolidRounded"
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

export const IconNote01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-bulk-rounded IconNote01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconNote01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-stroke-sharp IconNote01StrokeSharp"
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-01-solid-sharp IconNote01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNote01: TheIconSelfPack = {
  name: 'Note01',
  StrokeRounded: IconNote01StrokeRounded,
  DuotoneRounded: IconNote01DuotoneRounded,
  TwotoneRounded: IconNote01TwotoneRounded,
  SolidRounded: IconNote01SolidRounded,
  BulkRounded: IconNote01BulkRounded,
  StrokeSharp: IconNote01StrokeSharp,
  SolidSharp: IconNote01SolidSharp,
};