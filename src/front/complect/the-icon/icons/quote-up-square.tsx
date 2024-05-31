import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M13.2544 14C13.2544 14.9428 13.2544 15.4142 13.5653 15.7071C13.8761 16 14.3765 16 15.3772 16C16.3779 16 16.8782 16 17.1891 15.7071C17.5 15.4142 17.5 14.9428 17.5 14C17.5 13.0572 17.5 12.5858 17.1891 12.2929C16.8782 12 16.3779 12 15.3772 12C14.3765 12 13.8761 12 13.5653 12.2929C13.2544 12.5858 13.2544 13.0572 13.2544 14ZM13.2544 14V11.9313C13.2544 10.0978 14.5895 8.54292 16.4386 8M6.5 14C6.5 14.9428 6.5 15.4142 6.81088 15.7071C7.12176 16 7.62211 16 8.62281 16C9.62351 16 10.1239 16 10.4347 15.7071C10.7456 15.4142 10.7456 14.9428 10.7456 14C10.7456 13.0572 10.7456 12.5858 10.4347 12.2929C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 12.2929C6.5 12.5858 6.5 13.0572 6.5 14ZM6.5 14V11.9313C6.5 10.0978 7.83509 8.54292 9.68421 8',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM6.5 14C6.5 13.0572 6.5 12.5858 6.81088 12.2929C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 12.2929C10.7456 12.5858 10.7456 13.0572 10.7456 14C10.7456 14.9428 10.7456 15.4142 10.4347 15.7071C10.1239 16 9.62351 16 8.62281 16C7.62211 16 7.12176 16 6.81088 15.7071C6.5 15.4142 6.5 14.9428 6.5 14ZM13.5648 12.2929C13.2539 12.5858 13.2539 13.0572 13.2539 14C13.2539 14.9428 13.2539 15.4142 13.5648 15.7071C13.8757 16 14.376 16 15.3767 16C16.3774 16 16.8778 16 17.1886 15.7071C17.4995 15.4142 17.4995 14.9428 17.4995 14C17.4995 13.0572 17.4995 12.5858 17.1886 12.2929C16.8778 12 16.3774 12 15.3767 12C14.376 12 13.8757 12 13.5648 12.2929Z',
  d4: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM10.4038 7.78878C10.5205 8.18622 10.2929 8.603 9.89551 8.7197C8.54441 9.11639 7.57652 10.1184 7.3185 11.2987C7.3185 11.2987 8.20365 11.25 8.66648 11.2501C8.66648 11.2501 9.54511 11.25 9.88171 11.2926C10.2461 11.3388 10.6297 11.4462 10.949 11.7471C11.2747 12.0539 11.3973 12.4329 11.4492 12.7968C11.4957 13.1227 11.4956 14.0467 11.4956 14.0467C11.4957 14.4778 11.4957 14.8774 11.4492 15.2033C11.3973 15.5673 11.2747 15.9462 10.949 16.2531C10.6297 16.5539 10.2461 16.6614 9.88171 16.7075C9.54511 16.7502 8.57913 16.7501 8.57913 16.7501H8.57911C8.1163 16.7501 7.70051 16.7502 7.36392 16.7075C6.99955 16.6614 6.61594 16.5539 6.29658 16.2531C5.97091 15.9462 5.84833 15.5673 5.79639 15.2033C5.74989 14.8774 5.74994 14.4778 5.75 14.0467L5.75001 11.9314C5.75001 9.70888 7.36184 7.90029 9.47293 7.28045C9.87037 7.16376 10.2872 7.39135 10.4038 7.78878ZM17.1582 7.78878C17.2749 8.18622 17.0473 8.603 16.6499 8.7197C15.2988 9.11639 14.3309 10.1184 14.0729 11.2987C14.0729 11.2987 14.958 11.25 15.4209 11.2501C15.4209 11.2501 16.2995 11.25 16.6361 11.2926C17.0005 11.3388 17.3841 11.4462 17.7034 11.7471C18.0291 12.0539 18.1517 12.4329 18.2036 12.7968C18.2501 13.1227 18.25 14.0467 18.25 14.0467C18.2501 14.4778 18.2501 14.8774 18.2036 15.2033C18.1517 15.5673 18.0291 15.9462 17.7034 16.2531C17.3841 16.5539 17.0005 16.6614 16.6361 16.7075C16.2995 16.7502 15.3335 16.7501 15.3335 16.7501H15.3335C14.8707 16.7501 14.4549 16.7502 14.1183 16.7075C13.7539 16.6614 13.3703 16.5539 13.051 16.2531C12.7253 15.9462 12.6027 15.5673 12.5508 15.2033C12.5043 14.8774 12.5043 14.4778 12.5044 14.0467L12.5044 11.9314C12.5044 9.70888 14.1162 7.90029 16.2273 7.28045C16.6248 7.16376 17.0415 7.39135 17.1582 7.78878Z',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M9.89551 8.71982C10.2929 8.60313 10.5205 8.18634 10.4038 7.78891C10.2872 7.39147 9.87037 7.16388 9.47293 7.28057C7.36184 7.90041 5.75001 9.709 5.75001 11.9315L5.75 14.0468C5.74994 14.4779 5.74989 14.8776 5.79639 15.2034C5.84833 15.5674 5.97091 15.9464 6.29658 16.2532C6.61594 16.5541 6.99955 16.6615 7.36392 16.7076C7.70052 16.7503 8.11631 16.7502 8.57913 16.7502C8.57913 16.7502 9.54511 16.7503 9.88171 16.7076C10.2461 16.6615 10.6297 16.5541 10.949 16.2532C11.2747 15.9464 11.3973 15.5674 11.4492 15.2034C11.4957 14.8776 11.4957 14.478 11.4956 14.0468C11.4956 14.0468 11.4957 13.1228 11.4492 12.797C11.3973 12.433 11.2747 12.054 10.949 11.7472C10.6297 11.4463 10.2461 11.3389 9.88171 11.2928C9.54511 11.2501 8.66648 11.2502 8.66648 11.2502C8.20365 11.2502 7.3185 11.2988 7.3185 11.2988C7.30339 11.3007 7.33367 11.2967 7.3185 11.2988C7.57652 10.1185 8.54441 9.11651 9.89551 8.71982ZM16.6499 8.71982C17.0473 8.60313 17.2749 8.18634 17.1582 7.78891C17.0415 7.39147 16.6248 7.16388 16.2273 7.28057C14.1162 7.90041 12.5044 9.709 12.5044 11.9315L12.5044 14.0468C12.5043 14.4779 12.5043 14.8776 12.5508 15.2034C12.6027 15.5674 12.7253 15.9464 13.051 16.2532C13.3703 16.5541 13.7539 16.6615 14.1183 16.7076C14.4549 16.7503 14.8707 16.7502 15.3335 16.7502C15.3335 16.7502 16.2995 16.7503 16.6361 16.7076C17.0005 16.6615 17.3841 16.5541 17.7034 16.2532C18.0291 15.9464 18.1517 15.5674 18.2036 15.2034C18.2501 14.8776 18.2501 14.4779 18.25 14.0468C18.25 14.0468 18.2501 13.1228 18.2036 12.797C18.1517 12.433 18.0291 12.054 17.7034 11.7472C17.3841 11.4463 17.0005 11.3389 16.6361 11.2928C16.2995 11.2501 15.4209 11.2502 15.4209 11.2502C14.958 11.2502 14.0729 11.2988 14.0729 11.2988C14.0578 11.3007 14.0881 11.2967 14.0729 11.2988C14.3309 10.1185 15.2988 9.11651 16.6499 8.71982Z',
  d7: 'M21 3H3V21H21V3Z',
  d8: 'M13.5 12V16H17.5V12H13.5ZM13.5 12V11C13.5 9.34315 14.8431 8 16.5 8M6.5 12V16H10.5V12H6.5ZM6.5 12V11C6.5 9.34315 7.84315 8 9.5 8',
  d9: 'M3 2.25C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7.25 11C7.25 9.75736 8.25736 8.75 9.5 8.75V7.25C7.42893 7.25 5.75 8.92893 5.75 11V16.75H11.25V11.25H7.25V11ZM14.25 11C14.25 9.75736 15.2574 8.75 16.5 8.75V7.25C14.4289 7.25 12.75 8.92893 12.75 11V16.75H18.25V11.25H14.25V11Z',
} as const;

export const IconQuoteUpSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-stroke-rounded IconQuoteUpSquareStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-duotone-rounded IconQuoteUpSquareDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-twotone-rounded IconQuoteUpSquareTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-solid-rounded IconQuoteUpSquareSolidRounded"
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

export const IconQuoteUpSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-bulk-rounded IconQuoteUpSquareBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconQuoteUpSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-stroke-sharp IconQuoteUpSquareStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-square-solid-sharp IconQuoteUpSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuoteUpSquare: TheIconSelfPack = {
  name: 'QuoteUpSquare',
  StrokeRounded: IconQuoteUpSquareStrokeRounded,
  DuotoneRounded: IconQuoteUpSquareDuotoneRounded,
  TwotoneRounded: IconQuoteUpSquareTwotoneRounded,
  SolidRounded: IconQuoteUpSquareSolidRounded,
  BulkRounded: IconQuoteUpSquareBulkRounded,
  StrokeSharp: IconQuoteUpSquareStrokeSharp,
  SolidSharp: IconQuoteUpSquareSolidSharp,
};