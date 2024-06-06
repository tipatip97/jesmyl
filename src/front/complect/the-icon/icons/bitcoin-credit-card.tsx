import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 11C22 7.46252 22 5.69377 20.9472 4.5129C20.7788 4.32403 20.5932 4.14935 20.3925 3.99087C19.1379 3 17.2586 3 13.5 3H10.5C6.74142 3 4.86213 3 3.60746 3.99087C3.40678 4.14935 3.22119 4.32403 3.0528 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091C4.86213 19 6.74142 19 10.5 19H12',
  d2: 'M2 8H22',
  d3: 'M16.125 19.5L16.125 13.5M18 13.5V12M18 21V19.5M16.125 16.5H19.875M19.875 16.5C20.4963 16.5 21 17.0037 21 17.625V18.375C21 18.9963 20.4963 19.5 19.875 19.5H15M19.875 16.5C20.4963 16.5 21 15.9963 21 15.375V14.625C21 14.0037 20.4963 13.5 19.875 13.5H15',
  d4: 'M3.60746 18.0091C4.86213 19 6.74142 19 10.5 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 9.81688 22 8.8316 21.9606 8H2.03939C2 8.8316 2 9.81688 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091Z',
  d5: 'M18 11.75C18.4142 11.75 18.75 12.0858 18.75 12.5V13.25H19.875C20.9105 13.25 21.75 14.0895 21.75 15.125V15.875C21.75 16.2971 21.6105 16.6866 21.3751 17C21.6105 17.3134 21.75 17.7029 21.75 18.125V18.875C21.75 19.9105 20.9105 20.75 19.875 20.75H18.75V21.5C18.75 21.9142 18.4142 22.25 18 22.25C17.5858 22.25 17.25 21.9142 17.25 21.5V20.75H15C14.5858 20.75 14.25 20.4142 14.25 20C14.25 19.5858 14.5858 19.25 15 19.25H15.375L15.375 14.75H15C14.5858 14.75 14.25 14.4142 14.25 14C14.25 13.5858 14.5858 13.25 15 13.25H17.25V12.5C17.25 12.0858 17.5858 11.75 18 11.75ZM16.875 14.75V16.25H19.875C20.0821 16.25 20.25 16.0821 20.25 15.875V15.125C20.25 14.9179 20.0821 14.75 19.875 14.75H16.875ZM19.875 17.75H16.875L16.875 19.25H19.875C20.0821 19.25 20.25 19.0821 20.25 18.875V18.125C20.25 17.9179 20.0821 17.75 19.875 17.75Z',
  d6: 'M17.9694 1.8786C16.8308 1.74998 15.3866 1.74999 13.5476 1.75H10.4525C8.61347 1.74999 7.16918 1.74998 6.03059 1.8786C4.86843 2.00988 3.92602 2.28362 3.14264 2.90229C2.90812 3.08749 2.69069 3.29205 2.49299 3.5138C1.82682 4.26101 1.52933 5.16669 1.38764 6.27785C1.37133 6.4057 1.36318 6.46963 1.37784 6.52579C1.40128 6.61554 1.47015 6.69375 1.55622 6.72835C1.61007 6.75 1.67746 6.75 1.81224 6.75H22.1878C22.3226 6.75 22.39 6.75 22.4438 6.72835C22.5299 6.69375 22.5987 6.61553 22.6222 6.52579C22.6368 6.46963 22.6287 6.4057 22.6124 6.27785C22.4707 5.16669 22.1732 4.26101 21.507 3.5138C21.3093 3.29205 21.0919 3.08749 20.8574 2.90229C20.074 2.28362 19.1316 2.00988 17.9694 1.8786ZM22.7194 13.3077C22.75 12.5102 22.75 11.5972 22.75 10.5528V10.4473C22.75 9.87148 22.75 9.33565 22.7449 8.83709C22.7421 8.5614 22.7406 8.42356 22.653 8.33678C22.5653 8.25 22.4264 8.25 22.1486 8.25H1.85139C1.57361 8.25 1.43472 8.25 1.34704 8.33678C1.25937 8.42356 1.25795 8.5614 1.25512 8.83709C1.24999 9.33563 1.25 9.87145 1.25 10.4472V10.4473V10.5527V10.5527C1.24999 12.2767 1.24998 13.6427 1.38763 14.7222C1.52932 15.8333 1.82681 16.739 2.49298 17.4862C2.69068 17.7079 2.90811 17.9125 3.14263 18.0977C3.926 18.7164 4.86842 18.9901 6.03058 19.1214C7.16917 19.25 8.61345 19.25 10.4525 19.25H12.878C13.0577 18.7417 13.4148 18.3172 13.875 18.051V15.949C13.2025 15.56 12.75 14.8328 12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H15.878C16.1869 10.8761 17.0203 10.25 18 10.25C18.9831 10.25 19.8189 10.8805 20.1252 11.7591C21.2155 11.839 22.1619 12.4369 22.7194 13.3077Z',
  d7: 'M17.9694 1.8786C16.8308 1.74998 15.3865 1.74999 13.5475 1.75H10.4524C8.61339 1.74999 7.1691 1.74998 6.03052 1.8786C4.86835 2.00988 3.92594 2.28362 3.14256 2.90229C2.90804 3.08749 2.69061 3.29205 2.49292 3.5138C1.82674 4.26101 1.52926 5.16669 1.38756 6.27785C1.37126 6.4057 1.3631 6.46963 1.37777 6.52579C1.4012 6.61554 1.47008 6.69375 1.55614 6.72835C1.61 6.75 1.67738 6.75 1.81216 6.75H22.1877C22.3225 6.75 22.3899 6.75 22.4437 6.72835C22.5298 6.69375 22.5987 6.61553 22.6221 6.52579C22.6368 6.46963 22.6286 6.4057 22.6123 6.27785C22.4706 5.16669 22.1731 4.26101 21.507 3.5138C21.3093 3.29205 21.0918 3.08749 20.8573 2.90229C20.0739 2.28362 19.1315 2.00988 17.9694 1.8786Z',
  d8: 'M22.7194 13.3077C22.75 12.5102 22.75 11.5972 22.75 10.5528V10.4473C22.75 9.87148 22.75 9.33565 22.7449 8.83709C22.7421 8.5614 22.7406 8.42356 22.653 8.33678C22.5653 8.25 22.4264 8.25 22.1486 8.25H1.85139C1.57361 8.25 1.43472 8.25 1.34704 8.33678C1.25937 8.42356 1.25795 8.5614 1.25512 8.83709C1.24999 9.33563 1.25 9.87145 1.25 10.4472V10.5527C1.24999 12.2767 1.24998 13.6427 1.38763 14.7222C1.52932 15.8333 1.82681 16.739 2.49298 17.4862C2.69068 17.7079 2.90811 17.9125 3.14263 18.0977C3.926 18.7164 4.86842 18.9901 6.03058 19.1214C7.16917 19.25 8.61345 19.25 10.4525 19.25H12.878C13.0577 18.7417 13.4148 18.3172 13.875 18.051V15.949C13.2025 15.56 12.75 14.8328 12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H15.878C16.1869 10.8761 17.0203 10.25 18 10.25C18.9831 10.25 19.8189 10.8805 20.1252 11.7591C21.2155 11.839 22.1619 12.4369 22.7194 13.3077Z',
  d9: 'M22 11V3H2V19H12',
  d10: 'M18.75 11.75V13.25H19.875C20.9105 13.25 21.75 14.0895 21.75 15.125V15.875C21.75 16.2971 21.6105 16.6866 21.3751 17C21.6105 17.3134 21.75 17.7029 21.75 18.125V18.875C21.75 19.9105 20.9105 20.75 19.875 20.75H18.75V22.25H17.25V20.75H14.25V19.25H15.375L15.375 14.75H14.25V13.25H17.25V11.75H18.75ZM16.875 14.75V16.25H19.875C20.0821 16.25 20.25 16.0821 20.25 15.875V15.125C20.25 14.9179 20.0821 14.75 19.875 14.75H16.875ZM19.875 17.75H16.875L16.875 19.25H19.875C20.0821 19.25 20.25 19.0821 20.25 18.875V18.125C20.25 17.9179 20.0821 17.75 19.875 17.75Z',
  d11: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V6.75H1.25V2.5Z',
  d12: 'M1.25 8.25H22.75V13.3563C22.2178 12.493 21.3075 11.8875 20.25 11.7706V10.25H15.75V11.75H12.75V16.25H13.875V17.75H12.75V19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V8.25Z',
};

export const IconBitcoinCreditCardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-stroke-rounded IconBitcoinCreditCardStrokeRounded"
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

export const IconBitcoinCreditCardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-duotone-rounded IconBitcoinCreditCardDuotoneRounded"
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

export const IconBitcoinCreditCardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-twotone-rounded IconBitcoinCreditCardTwotoneRounded"
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

export const IconBitcoinCreditCardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-solid-rounded IconBitcoinCreditCardSolidRounded"
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

export const IconBitcoinCreditCardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-bulk-rounded IconBitcoinCreditCardBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCreditCardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-stroke-sharp IconBitcoinCreditCardStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCreditCardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-credit-card-solid-sharp IconBitcoinCreditCardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinCreditCard: TheIconSelfPack = {
  name: 'BitcoinCreditCard',
  StrokeRounded: IconBitcoinCreditCardStrokeRounded,
  DuotoneRounded: IconBitcoinCreditCardDuotoneRounded,
  TwotoneRounded: IconBitcoinCreditCardTwotoneRounded,
  SolidRounded: IconBitcoinCreditCardSolidRounded,
  BulkRounded: IconBitcoinCreditCardBulkRounded,
  StrokeSharp: IconBitcoinCreditCardStrokeSharp,
  SolidSharp: IconBitcoinCreditCardSolidSharp,
};