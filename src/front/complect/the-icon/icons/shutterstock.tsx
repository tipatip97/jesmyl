import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M18 13V14C18 15.8856 18 16.8284 17.4142 17.4142C16.8284 18 15.8856 18 14 18H13M6 11V10C6 8.11438 6 7.17157 6.58579 6.58579C7.17157 6 8.11438 6 10 6H11',
  d3: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM10 5.00001L9.93417 5C9.04769 4.99995 8.28387 4.99991 7.67221 5.08215C7.0167 5.17028 6.38835 5.36902 5.87868 5.87868C5.36902 6.38835 5.17028 7.0167 5.08215 7.67221C4.99991 8.28387 4.99995 9.04769 5 9.93417L5 10V11C5 11.5523 5.44772 12 6 12C6.55229 12 7 11.5523 7 11V10C7 9.02893 7.00213 8.40121 7.06431 7.93871C7.12263 7.50497 7.21677 7.36902 7.2929 7.2929C7.36902 7.21677 7.50497 7.12263 7.93871 7.06431C8.40122 7.00213 9.02893 7 10 7H11C11.5523 7 12 6.55229 12 6C12 5.44772 11.5523 5.00001 11 5.00001H10ZM19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13V14C17 14.9711 16.9979 15.5988 16.9357 16.0613C16.8774 16.495 16.7832 16.631 16.7071 16.7071C16.631 16.7832 16.495 16.8774 16.0613 16.9357C15.5988 16.9979 14.9711 17 14 17H13C12.4477 17 12 17.4477 12 18C12 18.5523 12.4477 19 13 19L14.0658 19C14.9523 19.0001 15.7161 19.0001 16.3278 18.9179C16.9833 18.8297 17.6117 18.631 18.1213 18.1213C18.631 17.6117 18.8297 16.9833 18.9179 16.3278C19.0001 15.7161 19.0001 14.9523 19 14.0659V14.0658L19 13Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M9.93417 5C9.95604 5 9.97799 5 10 5L11 5C11.5523 5 12 5.44772 12 6C12 6.55229 11.5523 7 11 7H10C9.02893 7 8.40122 7.00213 7.93871 7.06431C7.50497 7.12263 7.36902 7.21677 7.2929 7.2929C7.21677 7.36902 7.12263 7.50497 7.06431 7.93871C7.00213 8.40122 7 9.02893 7 10V11C7 11.5523 6.55229 12 6 12C5.44772 12 5 11.5523 5 11L5 10C5 9.97799 5 9.95604 5 9.93417C4.99995 9.04769 4.99991 8.28387 5.08215 7.67221C5.17028 7.0167 5.36902 6.38835 5.87868 5.87868C6.38835 5.36902 7.0167 5.17028 7.67221 5.08215C8.28387 4.99991 9.04769 4.99995 9.93417 5ZM18 12C18.5523 12 19 12.4477 19 13L19 14.0658C19.0001 14.9523 19.0001 15.7161 18.9179 16.3278C18.8297 16.9833 18.631 17.6117 18.1213 18.1213C17.6117 18.631 16.9833 18.8297 16.3278 18.9179C15.7161 19.0001 14.9523 19.0001 14.0658 19L13 19C12.4477 19 12 18.5523 12 18C12 17.4477 12.4477 17 13 17H14C14.9711 17 15.5988 16.9979 16.0613 16.9357C16.495 16.8774 16.631 16.7832 16.7071 16.7071C16.7832 16.631 16.8774 16.495 16.9357 16.0613C16.9979 15.5988 17 14.9711 17 14V13C17 12.4477 17.4477 12 18 12Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M18 13V18H13M6 11L5.99994 6H11',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM11.0001 5.25H5.25L5.25007 11L6.75007 11L6.75002 6.75L11.0001 6.75V5.25ZM18.7501 18.75V13H17.2501V17.25H13.0001V18.75L18.7501 18.75Z',
};

export const IconShutterstockStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-stroke-rounded IconShutterstockStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShutterstockDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-duotone-rounded IconShutterstockDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconShutterstockTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-twotone-rounded IconShutterstockTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconShutterstockSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-solid-rounded IconShutterstockSolidRounded"
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

export const IconShutterstockBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-bulk-rounded IconShutterstockBulkRounded"
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

export const IconShutterstockStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-stroke-sharp IconShutterstockStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShutterstockSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shutterstock-solid-sharp IconShutterstockSolidSharp"
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

export const iconPackOfShutterstock: TheIconSelfPack = {
  name: 'Shutterstock',
  StrokeRounded: IconShutterstockStrokeRounded,
  DuotoneRounded: IconShutterstockDuotoneRounded,
  TwotoneRounded: IconShutterstockTwotoneRounded,
  SolidRounded: IconShutterstockSolidRounded,
  BulkRounded: IconShutterstockBulkRounded,
  StrokeSharp: IconShutterstockStrokeSharp,
  SolidSharp: IconShutterstockSolidSharp,
};