import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12 16L12 8M12 16C11.2998 16 9.99153 14.0057 9.5 13.5M12 16C12.7002 16 14.0085 14.0057 14.5 13.5',
  d3: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM13.0059 8C13.0059 7.44772 12.5581 7 12.0059 7C11.4536 7 11.0059 7.44772 11.0059 8V12.5L10.4116 12.5C10.236 12.4999 10.0203 12.4997 9.84387 12.5218L9.84053 12.5222C9.71408 12.538 9.13804 12.6098 8.86368 13.1754C8.58872 13.7423 8.89065 14.2424 8.95597 14.3506L8.95841 14.3546C9.05062 14.5076 9.18477 14.6785 9.29511 14.8191L9.31885 14.8493C9.61348 15.2252 9.99545 15.7094 10.3759 16.1004C10.5657 16.2955 10.783 16.4967 11.0139 16.6556C11.2191 16.7968 11.5693 17 12 17C12.4307 17 12.7809 16.7968 12.9861 16.6556C13.217 16.4967 13.4343 16.2955 13.6241 16.1004C14.0046 15.7094 14.3865 15.2252 14.6812 14.8493L14.7049 14.8191C14.8152 14.6785 14.9494 14.5077 15.0416 14.3546L15.044 14.3506C15.1093 14.2424 15.4113 13.7422 15.1363 13.1754C14.862 12.6098 14.2859 12.538 14.1595 12.5222L14.1561 12.5218C13.9797 12.4997 13.764 12.4999 13.5884 12.5L13.0059 12.5V8Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M12.0059 7C12.5581 7 13.0059 7.44772 13.0059 8V12.5L13.5884 12.5C13.764 12.4999 13.9797 12.4997 14.1561 12.5218L14.1595 12.5222C14.2859 12.538 14.862 12.6098 15.1363 13.1754C15.4113 13.7422 15.1093 14.2424 15.044 14.3506L15.0416 14.3546C14.9494 14.5077 14.8152 14.6785 14.7049 14.8191L14.6812 14.8493C14.3865 15.2252 14.0046 15.7094 13.6241 16.1004C13.4343 16.2955 13.217 16.4967 12.9861 16.6556C12.7809 16.7968 12.4307 17 12 17C11.5693 17 11.2191 16.7968 11.0139 16.6556C10.783 16.4967 10.5657 16.2955 10.3759 16.1004C9.99545 15.7094 9.61348 15.2252 9.31885 14.8493L9.29511 14.8191C9.18477 14.6785 9.05062 14.5076 8.95841 14.3546L8.95597 14.3506C8.89065 14.2424 8.58872 13.7423 8.86368 13.1754C9.13804 12.6098 9.71408 12.538 9.84053 12.5222L9.84387 12.5218C10.0203 12.4997 10.236 12.4999 10.4116 12.5L11.0059 12.5V8C11.0059 7.44772 11.4536 7 12.0059 7Z',
  d6: 'M21 3H3V21H21V3Z',
  d7: 'M8 17.0039H16M11.9961 7.00391V13.7212M9.49435 11.8211L11.9961 13.987L14.4978 11.8211',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.7491 13.6589L12.7491 7.46967H11.2491V13.6589L9.52945 11.9391L8.46875 12.9998L11.9991 16.5304L15.5294 12.9998L14.4688 11.9391L12.7491 13.6589Z',
};

export const IconDownloadSquare01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-stroke-rounded IconDownloadSquare01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDownloadSquare01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-duotone-rounded IconDownloadSquare01DuotoneRounded"
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

export const IconDownloadSquare01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-twotone-rounded IconDownloadSquare01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDownloadSquare01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-solid-rounded IconDownloadSquare01SolidRounded"
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

export const IconDownloadSquare01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-bulk-rounded IconDownloadSquare01BulkRounded"
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

export const IconDownloadSquare01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-stroke-sharp IconDownloadSquare01StrokeSharp"
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

export const IconDownloadSquare01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-01-solid-sharp IconDownloadSquare01SolidSharp"
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

export const iconPackOfDownloadSquare01: TheIconSelfPack = {
  name: 'DownloadSquare01',
  StrokeRounded: IconDownloadSquare01StrokeRounded,
  DuotoneRounded: IconDownloadSquare01DuotoneRounded,
  TwotoneRounded: IconDownloadSquare01TwotoneRounded,
  SolidRounded: IconDownloadSquare01SolidRounded,
  BulkRounded: IconDownloadSquare01BulkRounded,
  StrokeSharp: IconDownloadSquare01StrokeSharp,
  SolidSharp: IconDownloadSquare01SolidSharp,
};