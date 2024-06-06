import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M17 10C17 10 13.3176 14 12 14C10.6824 14 7 10 7 10',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM12.0626 12.4598C12.0373 12.4712 12.0166 12.4798 12.0001 12.4861C11.9836 12.4798 11.9628 12.4712 11.9375 12.4598C11.8223 12.4077 11.6697 12.3215 11.4827 12.1976C11.1095 11.9503 10.6791 11.6065 10.2584 11.2432C9.8419 10.8834 9.45435 10.5212 9.16969 10.2477L8.71355 9.79932C8.32658 9.40536 7.69337 9.3995 7.29935 9.78643C6.90529 10.1734 6.89954 10.8065 7.2865 11.2006L7.78386 11.6897C8.08451 11.9786 8.49932 12.3665 8.95105 12.7567C9.39864 13.1433 9.90231 13.5496 10.3779 13.8647C10.6154 14.0221 10.8659 14.1702 11.1135 14.2822C11.3436 14.3862 11.6584 14.4999 12.0001 14.4999C12.3417 14.4999 12.6565 14.3862 12.8866 14.2822C13.1342 14.1702 13.3848 14.0221 13.6222 13.8647C14.0978 13.5496 14.6015 13.1433 15.0491 12.7567C15.5008 12.3665 15.9156 11.9786 16.2162 11.6897L16.7136 11.2006C17.1006 10.8065 17.0948 10.1734 16.7008 9.78643C16.3067 9.3995 15.6735 9.40536 15.2866 9.79932L14.8304 10.2477C14.5457 10.5212 14.1582 10.8834 13.7417 11.2432C13.321 11.6065 12.8906 11.9503 12.5174 12.1976C12.3304 12.3215 12.1778 12.4077 12.0626 12.4598Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12.0001 12.4861C12.0166 12.4798 12.0373 12.4712 12.0626 12.4598C12.1778 12.4077 12.3304 12.3215 12.5174 12.1976C12.8906 11.9503 13.321 11.6065 13.7417 11.2432C14.1582 10.8834 14.5457 10.5212 14.8304 10.2477L15.2866 9.79932C15.6735 9.40536 16.3067 9.3995 16.7008 9.78643C17.0948 10.1734 17.1006 10.8065 16.7136 11.2006L16.2162 11.6897C15.9156 11.9786 15.5008 12.3665 15.0491 12.7567C14.6015 13.1433 14.0978 13.5496 13.6222 13.8647C13.3848 14.0221 13.1342 14.1702 12.8866 14.2822C12.6565 14.3862 12.3417 14.4999 12.0001 14.4999C11.6584 14.4999 11.3436 14.3862 11.1135 14.2822C10.8659 14.1702 10.6154 14.0221 10.3779 13.8647C9.90231 13.5496 9.39864 13.1433 8.95105 12.7567C8.49932 12.3665 8.08451 11.9786 7.78386 11.6897L7.2865 11.2006C6.89954 10.8065 6.90529 10.1734 7.29935 9.78643C7.69337 9.3995 8.32658 9.40536 8.71355 9.79932L9.16969 10.2477C9.45435 10.5212 9.8419 10.8834 10.2584 11.2432C10.6791 11.6065 11.1095 11.9503 11.4827 12.1976C11.6697 12.3215 11.8223 12.4077 11.9375 12.4598C11.9628 12.4712 11.9836 12.4798 12.0001 12.4861Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M17 10L12 14L7 10',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7.6244 9.21912L11.9997 12.7194L16.375 9.21914L17.6244 10.7809L11.9997 15.2806L6.375 10.7808L7.6244 9.21912Z',
};

export const IconSquareArrowDown01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-stroke-rounded IconSquareArrowDown01StrokeRounded"
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

export const IconSquareArrowDown01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-duotone-rounded IconSquareArrowDown01DuotoneRounded"
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

export const IconSquareArrowDown01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-twotone-rounded IconSquareArrowDown01TwotoneRounded"
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

export const IconSquareArrowDown01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-solid-rounded IconSquareArrowDown01SolidRounded"
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

export const IconSquareArrowDown01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-bulk-rounded IconSquareArrowDown01BulkRounded"
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

export const IconSquareArrowDown01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-stroke-sharp IconSquareArrowDown01StrokeSharp"
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

export const IconSquareArrowDown01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-01-solid-sharp IconSquareArrowDown01SolidSharp"
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

export const iconPackOfSquareArrowDown01: TheIconSelfPack = {
  name: 'SquareArrowDown01',
  StrokeRounded: IconSquareArrowDown01StrokeRounded,
  DuotoneRounded: IconSquareArrowDown01DuotoneRounded,
  TwotoneRounded: IconSquareArrowDown01TwotoneRounded,
  SolidRounded: IconSquareArrowDown01SolidRounded,
  BulkRounded: IconSquareArrowDown01BulkRounded,
  StrokeSharp: IconSquareArrowDown01StrokeSharp,
  SolidSharp: IconSquareArrowDown01SolidSharp,
};