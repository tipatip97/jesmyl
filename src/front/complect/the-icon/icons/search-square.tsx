import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M15 15L17 17M16 11.5C16 9.01469 13.9853 7 11.5 7C9.01469 7 7 9.01469 7 11.5C7 13.9853 9.01469 16 11.5 16C13.9853 16 16 13.9853 16 11.5Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28248 21.5 7.52165 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52168 21.5 5.28248 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM11.5 7C13.9853 7 16 9.01472 16 11.5C16 13.9853 13.9853 16 11.5 16C9.01472 16 7 13.9853 7 11.5C7 9.01472 9.01472 7 11.5 7Z',
  d4: 'M15 15L17 17M16 11.5C16 9.01467 13.9853 7 11.5 7C9.01467 7 7 9.01467 7 11.5C7 13.9853 9.01467 16 11.5 16C13.9853 16 16 13.9853 16 11.5Z',
  d5: 'M11.9255 1.5H12.0745C14.2504 1.49998 15.9852 1.49996 17.3453 1.68282C18.7497 1.87164 19.9035 2.27175 20.8159 3.18414C21.7283 4.09653 22.1284 5.25033 22.3172 6.65471C22.5 8.01484 22.5 9.74955 22.5 11.9255V12.0745C22.5 14.2504 22.5 15.9852 22.3172 17.3453C22.1284 18.7497 21.7283 19.9035 20.8159 20.8159C19.9035 21.7283 18.7497 22.1284 17.3453 22.3172C15.9852 22.5 14.2504 22.5 12.0745 22.5H11.9255C9.74955 22.5 8.01484 22.5 6.65471 22.3172C5.25033 22.1284 4.09653 21.7283 3.18414 20.8159C2.27175 19.9035 1.87164 18.7497 1.68282 17.3453C1.49996 15.9852 1.49998 14.2504 1.5 12.0745V11.9255C1.49998 9.74957 1.49996 8.01485 1.68282 6.65471C1.87164 5.25033 2.27175 4.09653 3.18414 3.18414C4.09653 2.27175 5.25033 1.87164 6.65471 1.68282C8.01485 1.49996 9.74957 1.49998 11.9255 1.5ZM6.92121 3.66499C5.7386 3.82399 5.0772 4.1195 4.59835 4.59835C4.1195 5.0772 3.82399 5.7386 3.66499 6.92121C3.50212 8.13258 3.5 9.73256 3.5 12C3.5 14.2674 3.50212 15.8674 3.66499 17.0788C3.82399 18.2614 4.1195 18.9228 4.59835 19.4017C5.0772 19.8805 5.7386 20.176 6.92121 20.335C8.13258 20.4979 9.73256 20.5 12 20.5C14.2674 20.5 15.8674 20.4979 17.0788 20.335C18.2614 20.176 18.9228 19.8805 19.4017 19.4017C19.8805 18.9228 20.176 18.2614 20.335 17.0788C20.4979 15.8674 20.5 14.2674 20.5 12C20.5 9.73256 20.4979 8.13258 20.335 6.92121C20.176 5.7386 19.8805 5.0772 19.4017 4.59835C18.9228 4.1195 18.2614 3.82399 17.0788 3.66499C15.8674 3.50212 14.2674 3.5 12 3.5C9.73256 3.5 8.13258 3.50212 6.92121 3.66499Z',
  d6: 'M6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5C17 12.6575 16.6424 13.7315 16.0317 14.6175L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L14.6175 16.0317C13.7315 16.6424 12.6575 17 11.5 17C8.46243 17 6 14.5376 6 11.5ZM11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8Z',
  d7: 'M3 3V21L21 21V3H3Z',
  d8: 'M15 15L17.5 17.5M16 11.5C16 9.01472 13.9853 7 11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C13.9853 16 16 13.9853 16 11.5Z',
  d9: 'M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22L3 22C2.44772 22 2 21.5523 2 21V3ZM4 4V20L20 20V4H4Z',
  d10: 'M6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5C17 12.6575 16.6424 13.7315 16.0317 14.6175L18.2071 16.7929L16.7929 18.2071L14.6175 16.0317C13.7315 16.6424 12.6575 17 11.5 17C8.46243 17 6 14.5376 6 11.5ZM11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8Z',
};

export const IconSearchSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-stroke-rounded IconSearchSquareStrokeRounded"
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

export const IconSearchSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-duotone-rounded IconSearchSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-twotone-rounded IconSearchSquareTwotoneRounded"
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

export const IconSearchSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-solid-rounded IconSearchSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-bulk-rounded IconSearchSquareBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconSearchSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-stroke-sharp IconSearchSquareStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-square-solid-sharp IconSearchSquareSolidSharp"
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

export const iconPackOfSearchSquare: TheIconSelfPack = {
  name: 'SearchSquare',
  StrokeRounded: IconSearchSquareStrokeRounded,
  DuotoneRounded: IconSearchSquareDuotoneRounded,
  TwotoneRounded: IconSearchSquareTwotoneRounded,
  SolidRounded: IconSearchSquareSolidRounded,
  BulkRounded: IconSearchSquareBulkRounded,
  StrokeSharp: IconSearchSquareStrokeSharp,
  SolidSharp: IconSearchSquareSolidSharp,
};