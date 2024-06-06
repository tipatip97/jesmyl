import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9.5 16L9.5 8',
  d3: 'M11 8V6M13.5 8V6',
  d4: 'M11 18V16M13.5 18V16',
  d5: 'M9.5 12L14.5 12C15.3284 12 16 12.6716 16 13.5V14.5C16 15.3284 15.3284 16 14.5 16H8',
  d6: 'M8 8L14.5 8C15.3284 8 16 8.67157 16 9.5V10.5C16 11.3284 15.3284 12 14.5 12H9.5',
  d7: 'M9.5 16L9.5 8M11 8V6M13.5 8V6M11 18V16M13.5 18V16M9.5 12H14.5M14.5 12C15.3284 12 16 12.6716 16 13.5V14.5C16 15.3284 15.3284 16 14.5 16H8M14.5 12C15.3284 12 16 11.3284 16 10.5V9.5C16 8.67157 15.3284 8 14.5 8H8',
  d8: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.86647 1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428C14.1335 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572C22.25 9.86646 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059ZM11.75 6C11.75 5.58579 11.4142 5.25 11 5.25C10.5858 5.25 10.25 5.58579 10.25 6V7.25H8C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H8.75L8.75 15.25H8C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H10.25V18C10.25 18.4142 10.5858 18.75 11 18.75C11.4142 18.75 11.75 18.4142 11.75 18V16.75H12.75V18C12.75 18.4142 13.0858 18.75 13.5 18.75C13.9142 18.75 14.25 18.4142 14.25 18V16.75H14.5C15.7426 16.75 16.75 15.7426 16.75 14.5V13.5C16.75 12.9237 16.5334 12.3981 16.1771 12C16.5334 11.6019 16.75 11.0763 16.75 10.5V9.5C16.75 8.25736 15.7426 7.25 14.5 7.25H14.25V6C14.25 5.58579 13.9142 5.25 13.5 5.25C13.0858 5.25 12.75 5.58579 12.75 6V7.25H11.75V6ZM10.25 11.25V8.75H10.9991H11.0009H13.4991H13.5009H14.5C14.9142 8.75 15.25 9.08579 15.25 9.5V10.5C15.25 10.9142 14.9142 11.25 14.5 11.25H10.25ZM10.25 12.75H14.5C14.9142 12.75 15.25 13.0858 15.25 13.5V14.5C15.25 14.9142 14.9142 15.25 14.5 15.25H10.25V12.75Z',
  d9: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.86646 22.25 12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.1335 22.25 11.9428 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572C1.74999 9.86647 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.86647 1.74999 12.0572 1.75Z',
  d10: 'M11 5.25C11.4142 5.25 11.75 5.58579 11.75 6V7.25H12.75V6C12.75 5.58579 13.0858 5.25 13.5 5.25C13.9142 5.25 14.25 5.58579 14.25 6V7.25H14.5C15.7426 7.25 16.75 8.25736 16.75 9.5V10.5C16.75 11.0763 16.5334 11.6019 16.1771 12C16.5334 12.3981 16.75 12.9237 16.75 13.5V14.5C16.75 15.7426 15.7426 16.75 14.5 16.75H14.25V18C14.25 18.4142 13.9142 18.75 13.5 18.75C13.0858 18.75 12.75 18.4142 12.75 18V16.75H11.75V18C11.75 18.4142 11.4142 18.75 11 18.75C10.5858 18.75 10.25 18.4142 10.25 18V16.75H8C7.58579 16.75 7.25 16.4142 7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H8.75L8.75 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H10.25V6C10.25 5.58579 10.5858 5.25 11 5.25ZM10.25 8.75V11.25H14.5C14.9142 11.25 15.25 10.9142 15.25 10.5V9.5C15.25 9.08579 14.9142 8.75 14.5 8.75H13.5009C13.5006 8.75 13.5011 8.75 13.5009 8.75C13.5006 8.75 13.4994 8.75 13.4991 8.75H11.0009C11.0006 8.75 11.0011 8.75 11.0009 8.75C11.0006 8.75 10.9994 8.75 10.9991 8.75H10.25ZM14.5 12.75H10.25V15.25H14.5C14.9142 15.25 15.25 14.9142 15.25 14.5V13.5C15.25 13.0858 14.9142 12.75 14.5 12.75Z',
  d11: 'M21 3.00041L3 3V21H21V3.00041Z',
  d12: 'M3.00002 2.25C2.8011 2.25 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00041C21.75 2.5862 21.4142 2.25042 21 2.25041L3.00002 2.25ZM8 7.25H10.25V6H11.75V7.25H12.75V6H14.25V7.25H14.5C15.7426 7.25 16.75 8.25736 16.75 9.5V10.5C16.75 11.0763 16.5334 11.6019 16.1771 12C16.5334 12.3981 16.75 12.9237 16.75 13.5V14.5C16.75 15.7426 15.7426 16.75 14.5 16.75H14.25V18H12.75V16.75H11.75V18H10.25V16.75H8V15.25H8.75L8.75 8.75H8V7.25ZM15.25 10.5C15.25 10.9142 14.9142 11.25 14.5 11.25H10.25V8.75H14.5C14.9142 8.75 15.25 9.08579 15.25 9.5V10.5ZM14.5 12.75H10.25V15.25H14.5C14.9142 15.25 15.25 14.9142 15.25 14.5V13.5C15.25 13.0858 14.9142 12.75 14.5 12.75Z',
};

export const IconBitcoinRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-stroke-rounded IconBitcoinRectangleStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-duotone-rounded IconBitcoinRectangleDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-twotone-rounded IconBitcoinRectangleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-solid-rounded IconBitcoinRectangleSolidRounded"
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

export const IconBitcoinRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-bulk-rounded IconBitcoinRectangleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-stroke-sharp IconBitcoinRectangleStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBitcoinRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-rectangle-solid-sharp IconBitcoinRectangleSolidSharp"
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

export const iconPackOfBitcoinRectangle: TheIconSelfPack = {
  name: 'BitcoinRectangle',
  StrokeRounded: IconBitcoinRectangleStrokeRounded,
  DuotoneRounded: IconBitcoinRectangleDuotoneRounded,
  TwotoneRounded: IconBitcoinRectangleTwotoneRounded,
  SolidRounded: IconBitcoinRectangleSolidRounded,
  BulkRounded: IconBitcoinRectangleBulkRounded,
  StrokeSharp: IconBitcoinRectangleStrokeSharp,
  SolidSharp: IconBitcoinRectangleSolidSharp,
};