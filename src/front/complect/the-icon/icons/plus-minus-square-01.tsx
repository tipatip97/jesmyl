import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 7.5V13.8636M15.5 10.6818H8.5M15.5 16.5H8.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9.18182H8.5C7.94772 9.18182 7.5 9.62953 7.5 10.1818C7.5 10.7341 7.94772 11.1818 8.5 11.1818H11V13.3636C11 13.9159 11.4477 14.3636 12 14.3636C12.5523 14.3636 13 13.9159 13 13.3636V11.1818H15.5C16.0523 11.1818 16.5 10.7341 16.5 10.1818C16.5 9.62953 16.0523 9.18182 15.5 9.18182H13V7ZM8.5 16C7.94772 16 7.5 16.4477 7.5 17C7.5 17.5523 7.94772 18 8.5 18H15.5C16.0523 18 16.5 17.5523 16.5 17C16.5 16.4477 16.0523 16 15.5 16H8.5Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12 6C12.5523 6 13 6.44772 13 7V9.18182H15.5C16.0523 9.18182 16.5 9.62953 16.5 10.1818C16.5 10.7341 16.0523 11.1818 15.5 11.1818H13V13.3636C13 13.9159 12.5523 14.3636 12 14.3636C11.4477 14.3636 11 13.9159 11 13.3636V11.1818H8.5C7.94772 11.1818 7.5 10.7341 7.5 10.1818C7.5 9.62953 7.94772 9.18182 8.5 9.18182H11V7C11 6.44772 11.4477 6 12 6ZM7.5 17C7.5 16.4477 7.94772 16 8.5 16H15.5C16.0523 16 16.5 16.4477 16.5 17C16.5 17.5523 16.0523 18 15.5 18H8.5C7.94772 18 7.5 17.5523 7.5 17Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM11 7V9.18182H8.5V11.1818H11V13.3636H13V11.1818H15.5V9.18182H13V7H11ZM15.5 15H8.5V17H15.5V15Z',
};

export const IconPlusMinusSquare01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-stroke-rounded IconPlusMinusSquare01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinusSquare01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-duotone-rounded IconPlusMinusSquare01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinusSquare01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-twotone-rounded IconPlusMinusSquare01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinusSquare01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-solid-rounded IconPlusMinusSquare01SolidRounded"
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

export const IconPlusMinusSquare01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-bulk-rounded IconPlusMinusSquare01BulkRounded"
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

export const IconPlusMinusSquare01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-stroke-sharp IconPlusMinusSquare01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinusSquare01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-square-01-solid-sharp IconPlusMinusSquare01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlusMinusSquare01: TheIconSelfPack = {
  name: 'PlusMinusSquare01',
  StrokeRounded: IconPlusMinusSquare01StrokeRounded,
  DuotoneRounded: IconPlusMinusSquare01DuotoneRounded,
  TwotoneRounded: IconPlusMinusSquare01TwotoneRounded,
  SolidRounded: IconPlusMinusSquare01SolidRounded,
  BulkRounded: IconPlusMinusSquare01BulkRounded,
  StrokeSharp: IconPlusMinusSquare01StrokeSharp,
  SolidSharp: IconPlusMinusSquare01SolidSharp,
};