import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 12H16M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM17 12.0059C17 12.5581 16.5523 13.0059 16 13.0059H11.5L11.5 13.5884C11.5001 13.764 11.5003 13.9797 11.4782 14.1561L11.4778 14.1595C11.462 14.2859 11.3902 14.862 10.8246 15.1363C10.2578 15.4113 9.75761 15.1093 9.64941 15.044L9.18091 14.7049C8.80508 14.4102 8.29063 14.0046 7.89962 13.6241C7.70451 13.4343 7.50328 13.217 7.34443 12.9861C7.20323 12.7809 6.99996 12.4307 6.99996 12C6.99996 11.5693 7.20323 11.2191 7.34443 11.0139C7.50328 10.783 7.70451 10.5657 7.89962 10.3759C8.29063 9.99545 8.80509 9.58975 9.18092 9.29511L9.6494 8.95597C9.75761 8.89065 10.2577 8.58872 10.8246 8.86368C11.3902 9.13804 11.462 9.71408 11.4778 9.84053L11.4782 9.84387C11.5003 10.0203 11.5001 10.236 11.5 10.4116L11.5 11.0059H16C16.5523 11.0059 17 11.4536 17 12.0059Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M16 13.0059C16.5523 13.0059 17 12.5581 17 12.0059C17 11.4536 16.5523 11.0059 16 11.0059L11.5 11.0059L11.5 10.4116C11.5001 10.236 11.5003 10.0203 11.4782 9.84387L11.4778 9.84053C11.462 9.71408 11.3902 9.13804 10.8246 8.86368C10.2577 8.58872 9.75761 8.89065 9.6494 8.95597L9.18092 9.29511C8.80509 9.58975 8.29063 9.99545 7.89962 10.3759C7.70451 10.5657 7.50328 10.783 7.34443 11.0139C7.20323 11.2191 6.99996 11.5693 6.99996 12C6.99996 12.4307 7.20323 12.7809 7.34443 12.9861C7.50328 13.217 7.70451 13.4343 7.89962 13.6241C8.29063 14.0046 8.80508 14.4102 9.18091 14.7049L9.64941 15.044C9.75761 15.1093 10.2578 15.4113 10.8246 15.1363C11.3902 14.862 11.462 14.2859 11.4778 14.1595L11.4782 14.1561C11.5003 13.9797 11.5001 13.764 11.5 13.5884L11.5 13.0059L16 13.0059Z',
  d6: 'M16 12H8.75268M11 9L8 12L11 15',
  d7: 'M3 21H21V3H3V21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM11.7073 14.293L10.4144 13.0001H16.0002V11.0001H10.4144L11.7073 9.70718L10.293 8.29297L6.58594 12.0001L10.293 15.7072L11.7073 14.293Z',
};

export const IconLoginSquare01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-stroke-rounded IconLoginSquare01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-duotone-rounded IconLoginSquare01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-twotone-rounded IconLoginSquare01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-solid-rounded IconLoginSquare01SolidRounded"
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

export const IconLoginSquare01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-bulk-rounded IconLoginSquare01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-stroke-sharp IconLoginSquare01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoginSquare01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-square-01-solid-sharp IconLoginSquare01SolidSharp"
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

export const iconPackOfLoginSquare01: TheIconSelfPack = {
  name: 'LoginSquare01',
  StrokeRounded: IconLoginSquare01StrokeRounded,
  DuotoneRounded: IconLoginSquare01DuotoneRounded,
  TwotoneRounded: IconLoginSquare01TwotoneRounded,
  SolidRounded: IconLoginSquare01SolidRounded,
  BulkRounded: IconLoginSquare01BulkRounded,
  StrokeSharp: IconLoginSquare01StrokeSharp,
  SolidSharp: IconLoginSquare01SolidSharp,
};