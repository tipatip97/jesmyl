import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10.7456 10C10.7456 9.05719 10.7456 8.58579 10.4347 8.29289C10.1239 8 9.62351 8 8.62281 8C7.62211 8 7.12176 8 6.81088 8.29289C6.5 8.58579 6.5 9.05719 6.5 10C6.5 10.9428 6.5 11.4142 6.81088 11.7071C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 11.7071C10.7456 11.4142 10.7456 10.9428 10.7456 10ZM10.7456 10L10.7456 12.0687C10.7456 13.9022 9.41052 15.4571 7.5614 16M17.5 10C17.5 9.05719 17.5 8.58579 17.1891 8.29289C16.8782 8 16.3779 8 15.3772 8C14.3765 8 13.8761 8 13.5653 8.29289C13.2544 8.58579 13.2544 9.05719 13.2544 10C13.2544 10.9428 13.2544 11.4142 13.5653 11.7071C13.8761 12 14.3765 12 15.3772 12C16.3779 12 16.8782 12 17.1891 11.7071C17.5 11.4142 17.5 10.9428 17.5 10ZM17.5 10V12.0687C17.5 13.9022 16.1649 15.4571 14.3158 16',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM6.5 10C6.5 9.05719 6.5 8.58579 6.81088 8.29289C7.12176 8 7.62211 8 8.62281 8C9.62351 8 10.1239 8 10.4347 8.29289C10.7456 8.58579 10.7456 9.05719 10.7456 10C10.7456 10.9428 10.7456 11.4142 10.4347 11.7071C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 11.7071C6.5 11.4142 6.5 10.9428 6.5 10ZM13.6107 8.29289C13.2998 8.58579 13.2998 9.05719 13.2998 10C13.2998 10.9428 13.2998 11.4142 13.6107 11.7071C13.9216 12 14.4219 12 15.4226 12C16.4233 12 16.9237 12 17.2345 11.7071C17.5454 11.4142 17.5454 10.9428 17.5454 10C17.5454 9.05719 17.5454 8.58579 17.2345 8.29289C16.9237 8 16.4233 8 15.4226 8C14.4219 8 13.9216 8 13.6107 8.29289Z',
  d4: 'M12.0572 22.25H11.9428H11.9427C9.75207 22.25 8.03142 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31136 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68803 1.93059C8.03144 1.74998 9.75214 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25ZM13.5962 16.2111C13.4795 15.8137 13.7071 15.3969 14.1045 15.2802C15.4556 14.8835 16.4235 13.8815 16.6815 12.7012C16.6815 12.7012 15.7963 12.7498 15.3335 12.7498C15.3335 12.7498 14.4549 12.7499 14.1183 12.7072C13.7539 12.6611 13.3703 12.5537 13.051 12.2528C12.7253 11.946 12.6027 11.567 12.5508 11.203C12.5043 10.8772 12.5044 9.95319 12.5044 9.95319C12.5043 9.52204 12.5043 9.12243 12.5508 8.79658C12.6027 8.43263 12.7253 8.05365 13.051 7.74681C13.3703 7.44593 13.7539 7.33852 14.1183 7.29236C14.4549 7.24972 15.4209 7.2498 15.4209 7.2498H15.4209C15.8837 7.24976 16.2995 7.24972 16.6361 7.29236C17.0005 7.33852 17.3841 7.44593 17.7034 7.74681C18.0291 8.05365 18.1517 8.43263 18.2036 8.79658C18.2501 9.12244 18.2501 9.52205 18.25 9.9532V9.95321L18.25 12.0685C18.25 14.291 16.6382 16.0996 14.5271 16.7194C14.1296 16.8361 13.7128 16.6085 13.5962 16.2111ZM6.84177 16.2111C6.72508 15.8137 6.95267 15.3969 7.35011 15.2802C8.7012 14.8835 9.6691 13.8815 9.92712 12.7012C9.92712 12.7012 9.04196 12.7498 8.57913 12.7498C8.57913 12.7498 7.70051 12.7499 7.3639 12.7072C6.99953 12.6611 6.61592 12.5537 6.29657 12.2528C5.97089 11.946 5.84831 11.567 5.79637 11.203C5.74987 10.8772 5.74999 9.95322 5.74999 9.95322C5.74993 9.52206 5.74987 9.12244 5.79637 8.79658C5.84831 8.43263 5.97089 8.05365 6.29657 7.74681C6.61592 7.44593 6.99953 7.33852 7.3639 7.29236C7.7005 7.24972 8.66649 7.2498 8.66649 7.2498H8.6665C9.12932 7.24976 9.5451 7.24972 9.88169 7.29236C10.2461 7.33852 10.6297 7.44593 10.949 7.74681C11.2747 8.05365 11.3973 8.43263 11.4492 8.79658C11.4957 9.12244 11.4957 9.52206 11.4956 9.95321L11.4956 12.0685C11.4956 14.291 9.88378 16.0996 7.77268 16.7194C7.37525 16.8361 6.95846 16.6085 6.84177 16.2111Z',
  d5: 'M11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 12.0572L22.25 11.9428L22.25 11.9428C22.25 9.75211 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75214 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31136 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75211 22.25 11.9428 22.25Z',
  d6: 'M14.1045 15.2802C13.7071 15.3969 13.4795 15.8137 13.5962 16.2111C13.7128 16.6085 14.1296 16.8361 14.5271 16.7194C16.6382 16.0996 18.25 14.291 18.25 12.0685L18.25 9.95321C18.2501 9.52205 18.2501 9.12244 18.2036 8.79658C18.1517 8.43263 18.0291 8.05365 17.7034 7.74681C17.3841 7.44593 17.0005 7.33852 16.6361 7.29236C16.2995 7.24972 15.8837 7.24976 15.4209 7.2498C15.4209 7.2498 14.4549 7.24972 14.1183 7.29236C13.7539 7.33852 13.3703 7.44593 13.051 7.74681C12.7253 8.05365 12.6027 8.43263 12.5508 8.79658C12.5043 9.12243 12.5043 9.52204 12.5044 9.95319C12.5044 9.95319 12.5043 10.8772 12.5508 11.203C12.6027 11.567 12.7253 11.946 13.051 12.2528C13.3703 12.5537 13.7539 12.6611 14.1183 12.7072C14.4549 12.7499 15.3335 12.7498 15.3335 12.7498C15.7963 12.7498 16.6815 12.7012 16.6815 12.7012C16.6966 12.6993 16.6663 12.7033 16.6815 12.7012C16.4235 13.8815 15.4556 14.8835 14.1045 15.2802ZM7.35011 15.2802C6.95267 15.3969 6.72508 15.8137 6.84177 16.2111C6.95846 16.6085 7.37525 16.8361 7.77268 16.7194C9.88378 16.0996 11.4956 14.291 11.4956 12.0685L11.4956 9.95321C11.4957 9.52206 11.4957 9.12244 11.4492 8.79658C11.3973 8.43263 11.2747 8.05365 10.949 7.74681C10.6297 7.44593 10.2461 7.33852 9.88169 7.29236C9.5451 7.24972 9.12931 7.24976 8.66649 7.2498C8.66649 7.2498 7.7005 7.24972 7.3639 7.29236C6.99953 7.33852 6.61592 7.44593 6.29657 7.74681C5.97089 8.05365 5.84831 8.43263 5.79637 8.79658C5.74987 9.12244 5.74993 9.52206 5.74999 9.95322C5.74999 9.95322 5.74987 10.8772 5.79637 11.203C5.84831 11.567 5.97089 11.946 6.29657 12.2528C6.61592 12.5537 6.99953 12.6611 7.3639 12.7072C7.70051 12.7499 8.57913 12.7498 8.57913 12.7498C9.04196 12.7498 9.92712 12.7012 9.92712 12.7012C9.94223 12.6993 9.91195 12.7033 9.92712 12.7012C9.6691 13.8815 8.7012 14.8835 7.35011 15.2802Z',
  d7: 'M21 3H3V21H21V3Z',
  d8: 'M10.5 12V8H6.5V12H10.5ZM10.5 12V13C10.5 14.6569 9.15685 16 7.5 16M17.5 12V8H13.5V12H17.5ZM17.5 12V13C17.5 14.6569 16.1569 16 14.5 16',
  d9: 'M3 2.25C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7.5 16.75C9.57107 16.75 11.25 15.0711 11.25 13V7.25H5.75V12.75H9.75V13C9.75 14.2426 8.74264 15.25 7.5 15.25V16.75ZM14.5 16.75C16.5711 16.75 18.25 15.0711 18.25 13V7.25H12.75V12.75H16.75V13C16.75 14.2426 15.7426 15.25 14.5 15.25V16.75Z',
} as const;

export const IconQuoteDownSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-stroke-rounded IconQuoteDownSquareStrokeRounded"
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

export const IconQuoteDownSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-duotone-rounded IconQuoteDownSquareDuotoneRounded"
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

export const IconQuoteDownSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-twotone-rounded IconQuoteDownSquareTwotoneRounded"
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

export const IconQuoteDownSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-solid-rounded IconQuoteDownSquareSolidRounded"
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

export const IconQuoteDownSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-bulk-rounded IconQuoteDownSquareBulkRounded"
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

export const IconQuoteDownSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-stroke-sharp IconQuoteDownSquareStrokeSharp"
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

export const IconQuoteDownSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-square-solid-sharp IconQuoteDownSquareSolidSharp"
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

export const iconPackOfQuoteDownSquare: TheIconSelfPack = {
  name: 'QuoteDownSquare',
  StrokeRounded: IconQuoteDownSquareStrokeRounded,
  DuotoneRounded: IconQuoteDownSquareDuotoneRounded,
  TwotoneRounded: IconQuoteDownSquareTwotoneRounded,
  SolidRounded: IconQuoteDownSquareSolidRounded,
  BulkRounded: IconQuoteDownSquareBulkRounded,
  StrokeSharp: IconQuoteDownSquareStrokeSharp,
  SolidSharp: IconQuoteDownSquareSolidSharp,
};