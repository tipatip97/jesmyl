import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14',
  d2: 'M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14',
  d3: 'M13 9L11 15',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM15.3471 10.7575C14.9288 10.3969 14.882 9.76547 15.2425 9.34714C15.6031 8.9288 16.2345 8.88198 16.6529 9.24255L17.8794 10.2997L17.9165 10.3317C18.1415 10.5255 18.3806 10.7314 18.5554 10.9289C18.7531 11.1522 19 11.5066 19 12C19 12.4934 18.7531 12.8478 18.5554 13.0711C18.3806 13.2686 18.1415 13.4746 17.9165 13.6684L17.8794 13.7003L16.6529 14.7575C16.2345 15.1181 15.6031 15.0712 15.2425 14.6529C14.882 14.2346 14.9288 13.6031 15.3471 13.2426L16.5737 12.1854C16.6552 12.1151 16.7256 12.0544 16.7876 12C16.7256 11.9456 16.6552 11.885 16.5737 11.8147L15.3471 10.7575ZM8.75746 9.34714C9.11804 9.76547 9.07121 10.3969 8.65288 10.7575L7.42634 11.8147C7.34477 11.885 7.27445 11.9456 7.21242 12C7.27445 12.0544 7.34477 12.1151 7.42634 12.1854L8.65288 13.2426C9.07121 13.6031 9.11804 14.2346 8.75746 14.6529C8.39689 15.0712 7.76546 15.1181 7.34712 14.7575L6.12058 13.7003L6.08353 13.6684L6.08353 13.6684C5.8585 13.4746 5.61941 13.2686 5.44458 13.0711C5.24691 12.8478 5 12.4934 5 12C5 11.5066 5.24691 11.1522 5.44458 10.9289C5.61941 10.7314 5.85851 10.5255 6.08354 10.3317L6.12058 10.2997L7.34712 9.24255C7.76546 8.88198 8.39689 8.9288 8.75746 9.34714ZM13.949 9.3165C14.1236 8.79256 13.8404 8.22624 13.3165 8.05159C12.7926 7.87694 12.2262 8.1601 12.0516 8.68404L10.0516 14.684C9.87694 15.208 10.1601 15.7743 10.684 15.949C11.208 16.1236 11.7743 15.8404 11.949 15.3165L13.949 9.3165Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M15.2425 9.34714C14.882 9.76547 14.9288 10.3969 15.3471 10.7575L16.5737 11.8147L17.2265 11.0572L16.5737 11.8147C16.6552 11.885 16.7256 11.9456 16.7876 12C16.7256 12.0544 16.6552 12.1151 16.5737 12.1854L15.3471 13.2426C14.9288 13.6031 14.882 14.2346 15.2425 14.6529C15.6031 15.0712 16.2345 15.1181 16.6529 14.7575L17.8794 13.7003C17.8917 13.6897 17.9041 13.679 17.9165 13.6684C18.1415 13.4746 18.3806 13.2686 18.5554 13.0711C18.7531 12.8478 19 12.4934 19 12C19 11.5066 18.7531 11.1522 18.5554 10.9289C18.3806 10.7314 18.1415 10.5255 17.9165 10.3317C17.9041 10.321 17.8917 10.3103 17.8794 10.2997C17.8794 10.2997 17.8794 10.2997 17.8794 10.2997L16.6529 9.24255C16.2345 8.88198 15.6031 8.9288 15.2425 9.34714Z',
  d8: 'M8.75746 9.34714C9.11804 9.76547 9.07121 10.3969 8.65288 10.7575L7.42634 11.8147L6.77346 11.0572L7.42634 11.8147C7.34477 11.885 7.27445 11.9456 7.21242 12C7.27445 12.0544 7.34477 12.1151 7.42634 12.1854L8.65288 13.2426C9.07121 13.6031 9.11804 14.2346 8.75746 14.6529C8.39689 15.0712 7.76546 15.1181 7.34712 14.7575L6.12058 13.7003C6.10828 13.6897 6.09593 13.679 6.08353 13.6684C5.8585 13.4746 5.61941 13.2686 5.44458 13.0711C5.24691 12.8478 5 12.4934 5 12C5 11.5066 5.24691 11.1522 5.44458 10.9289C5.61941 10.7314 5.85851 10.5255 6.08354 10.3317C6.09593 10.321 6.10828 10.3103 6.12058 10.2997C6.12058 10.2997 6.12058 10.2997 6.12058 10.2997L7.34712 9.24255C7.76546 8.88198 8.39689 8.9288 8.75746 9.34714Z',
  d9: 'M13.3165 8.05159C13.8404 8.22624 14.1236 8.79256 13.949 9.3165L11.949 15.3165C11.7743 15.8404 11.208 16.1236 10.684 15.949C10.1601 15.7743 9.87694 15.208 10.0516 14.684L12.0516 8.68404C12.2262 8.1601 12.7926 7.87694 13.3165 8.05159Z',
  d10: 'M3 3V21H21V3H3Z',
  d11: 'M15.502 9.49621L18.0032 12.0056L15.502 14.515M8.49828 9.49621L5.99707 12.0056L8.49828 14.515M13.9978 7.99805L9.99422 16.0024',
  d12: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM13.3293 7.66504L9.32929 15.665L10.6709 16.3359L14.6709 8.33586L13.3293 7.66504ZM9.03044 10.0308L7.96978 8.97012L4.93945 12.0004L7.96978 15.0308L9.03044 13.9701L7.06077 12.0004L9.03044 10.0308ZM14.9698 10.0308L16.9395 12.0004L14.9698 13.9701L16.0304 15.0308L19.0608 12.0004L16.0304 8.97012L14.9698 10.0308Z',
};

export const IconSourceCodeSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-stroke-rounded IconSourceCodeSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSourceCodeSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-duotone-rounded IconSourceCodeSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSourceCodeSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-twotone-rounded IconSourceCodeSquareTwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSourceCodeSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-solid-rounded IconSourceCodeSquareSolidRounded"
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

export const IconSourceCodeSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-bulk-rounded IconSourceCodeSquareBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSourceCodeSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-stroke-sharp IconSourceCodeSquareStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSourceCodeSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-square-solid-sharp IconSourceCodeSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSourceCodeSquare: TheIconSelfPack = {
  name: 'SourceCodeSquare',
  StrokeRounded: IconSourceCodeSquareStrokeRounded,
  DuotoneRounded: IconSourceCodeSquareDuotoneRounded,
  TwotoneRounded: IconSourceCodeSquareTwotoneRounded,
  SolidRounded: IconSourceCodeSquareSolidRounded,
  BulkRounded: IconSourceCodeSquareBulkRounded,
  StrokeSharp: IconSourceCodeSquareStrokeSharp,
  SolidSharp: IconSourceCodeSquareSolidSharp,
};