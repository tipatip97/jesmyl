import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6 9H9.5M17 9H18M12 8V10M14.5 8V10',
  d3: 'M18 15H12M7 15H6M9.5 14V16',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V8C11.25 7.58579 11.5858 7.25 12 7.25ZM14.5 7.25C14.9142 7.25 15.25 7.58579 15.25 8V10C15.25 10.4142 14.9142 10.75 14.5 10.75C14.0858 10.75 13.75 10.4142 13.75 10V8C13.75 7.58579 14.0858 7.25 14.5 7.25ZM5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H9.5C9.91421 8.25 10.25 8.58579 10.25 9C10.25 9.41421 9.91421 9.75 9.5 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9ZM16.25 9C16.25 8.58579 16.5858 8.25 17 8.25H18C18.4142 8.25 18.75 8.58579 18.75 9C18.75 9.41421 18.4142 9.75 18 9.75H17C16.5858 9.75 16.25 9.41421 16.25 9ZM10.25 14C10.25 13.5858 9.91421 13.25 9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14V16C8.75 16.4142 9.08579 16.75 9.5 16.75C9.91421 16.75 10.25 16.4142 10.25 16V14ZM6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75H7C7.41421 15.75 7.75 15.4142 7.75 15C7.75 14.5858 7.41421 14.25 7 14.25H6ZM12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75H18C18.4142 15.75 18.75 15.4142 18.75 15C18.75 14.5858 18.4142 14.25 18 14.25H12Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V8C11.25 7.58579 11.5858 7.25 12 7.25ZM14.5 7.25C14.9142 7.25 15.25 7.58579 15.25 8V10C15.25 10.4142 14.9142 10.75 14.5 10.75C14.0858 10.75 13.75 10.4142 13.75 10V8C13.75 7.58579 14.0858 7.25 14.5 7.25ZM5.25 9C5.25 8.58579 5.58579 8.25 6 8.25H9.5C9.91421 8.25 10.25 8.58579 10.25 9C10.25 9.41421 9.91421 9.75 9.5 9.75H6C5.58579 9.75 5.25 9.41421 5.25 9ZM16.25 9C16.25 8.58579 16.5858 8.25 17 8.25H18C18.4142 8.25 18.75 8.58579 18.75 9C18.75 9.41421 18.4142 9.75 18 9.75H17C16.5858 9.75 16.25 9.41421 16.25 9Z',
  d7: 'M9.5 13.25C9.91421 13.25 10.25 13.5858 10.25 14V16C10.25 16.4142 9.91421 16.75 9.5 16.75C9.08579 16.75 8.75 16.4142 8.75 16V14C8.75 13.5858 9.08579 13.25 9.5 13.25ZM5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H7C7.41421 14.25 7.75 14.5858 7.75 15C7.75 15.4142 7.41421 15.75 7 15.75H6C5.58579 15.75 5.25 15.4142 5.25 15ZM11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H18C18.4142 14.25 18.75 14.5858 18.75 15C18.75 15.4142 18.4142 15.75 18 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15Z',
  d8: 'M3 21H21V3.00046L3 3V21Z',
  d9: 'M6 9H9M16 9H18M11 7V11M14 7V11',
  d10: 'M18 15H13M9 15H6M11 13V17',
  d11: 'M2.46968 2.46966C2.61033 2.32901 2.8011 2.24999 3.00002 2.25L21 2.25046C21.4142 2.25047 21.75 2.58626 21.75 3.00046V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.80108 2.32902 2.61032 2.46968 2.46966ZM10.25 11V7H11.75V11H10.25ZM13.25 11V7H14.75V11H13.25ZM9 9.75H6V8.25H9V9.75ZM18 9.75H16V8.25H18V9.75ZM10.25 13V17H11.75V13H10.25ZM9 14.25H6V15.75H9V14.25ZM18 14.25H13V15.75H18V14.25Z',
};

export const IconAbacusStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-stroke-rounded IconAbacusStrokeRounded"
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

export const IconAbacusDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-duotone-rounded IconAbacusDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbacusTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-twotone-rounded IconAbacusTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbacusSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-solid-rounded IconAbacusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAbacusBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-bulk-rounded IconAbacusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAbacusStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-stroke-sharp IconAbacusStrokeSharp"
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbacusSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="abacus-solid-sharp IconAbacusSolidSharp"
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

export const iconPackOfAbacus: TheIconSelfPack = {
  name: 'Abacus',
  StrokeRounded: IconAbacusStrokeRounded,
  DuotoneRounded: IconAbacusDuotoneRounded,
  TwotoneRounded: IconAbacusTwotoneRounded,
  SolidRounded: IconAbacusSolidRounded,
  BulkRounded: IconAbacusBulkRounded,
  StrokeSharp: IconAbacusStrokeSharp,
  SolidSharp: IconAbacusSolidSharp,
};