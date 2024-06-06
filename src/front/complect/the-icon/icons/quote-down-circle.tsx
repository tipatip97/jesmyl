import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.7456 10C10.7456 9.05719 10.7456 8.58579 10.4347 8.29289C10.1239 8 9.62351 8 8.62281 8C7.62211 8 7.12176 8 6.81088 8.29289C6.5 8.58579 6.5 9.05719 6.5 10C6.5 10.9428 6.5 11.4142 6.81088 11.7071C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 11.7071C10.7456 11.4142 10.7456 10.9428 10.7456 10ZM10.7456 10L10.7456 12.0687C10.7456 13.9022 9.41052 15.4571 7.5614 16M17.5 10C17.5 9.05719 17.5 8.58579 17.1891 8.29289C16.8782 8 16.3779 8 15.3772 8C14.3765 8 13.8761 8 13.5653 8.29289C13.2544 8.58579 13.2544 9.05719 13.2544 10C13.2544 10.9428 13.2544 11.4142 13.5653 11.7071C13.8761 12 14.3765 12 15.3772 12C16.3779 12 16.8782 12 17.1891 11.7071C17.5 11.4142 17.5 10.9428 17.5 10ZM17.5 10V12.0687C17.5 13.9022 16.1649 15.4571 14.3158 16',
  d2: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.5 10C6.5 9.05719 6.5 8.58579 6.81088 8.29289C7.12176 8 7.62211 8 8.62281 8C9.62351 8 10.1239 8 10.4347 8.29289C10.7456 8.58579 10.7456 9.05719 10.7456 10C10.7456 10.9428 10.7456 11.4142 10.4347 11.7071C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 11.7071C6.5 11.4142 6.5 10.9428 6.5 10ZM13.5648 8.29289C13.2539 8.58579 13.2539 9.05719 13.2539 10C13.2539 10.9428 13.2539 11.4142 13.5648 11.7071C13.8757 12 14.376 12 15.3767 12C16.3774 12 16.8778 12 17.1886 11.7071C17.4995 11.4142 17.4995 10.9428 17.4995 10C17.4995 9.05719 17.4995 8.58579 17.1886 8.29289C16.8778 8 16.3774 8 15.3767 8C14.376 8 13.8757 8 13.5648 8.29289Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM13.5962 16.2112C13.4795 15.8138 13.7071 15.397 14.1045 15.2803C15.4556 14.8836 16.4235 13.8816 16.6815 12.7013C16.6815 12.7013 15.7963 12.75 15.3335 12.7499C15.3335 12.7499 14.4549 12.75 14.1183 12.7074C13.7539 12.6612 13.3703 12.5538 13.051 12.2529C12.7253 11.9461 12.6027 11.5671 12.5508 11.2032C12.5043 10.8773 12.5044 9.95331 12.5044 9.95331C12.5043 9.52216 12.5043 9.12256 12.5508 8.7967C12.6027 8.43275 12.7253 8.05377 13.051 7.74693C13.3703 7.44605 13.7539 7.33864 14.1183 7.29248C14.4549 7.24984 15.4209 7.24992 15.4209 7.24992H15.4209C15.8837 7.24988 16.2995 7.24985 16.6361 7.29248C17.0005 7.33864 17.3841 7.44605 17.7034 7.74693C18.0291 8.05377 18.1517 8.43275 18.2036 8.7967C18.2501 9.12256 18.2501 9.52217 18.25 9.95332V9.95333L18.25 12.0686C18.25 14.2911 16.6382 16.0997 14.5271 16.7195C14.1296 16.8362 13.7128 16.6087 13.5962 16.2112ZM6.84177 16.2112C6.72508 15.8138 6.95267 15.397 7.35011 15.2803C8.7012 14.8836 9.6691 13.8816 9.92712 12.7013C9.92712 12.7013 9.04196 12.75 8.57913 12.7499C8.57913 12.7499 7.70051 12.75 7.3639 12.7074C6.99953 12.6612 6.61592 12.5538 6.29657 12.2529C5.97089 11.9461 5.84831 11.5671 5.79637 11.2032C5.74987 10.8773 5.74999 9.95334 5.74999 9.95334C5.74993 9.52218 5.74987 9.12256 5.79637 8.7967C5.84831 8.43275 5.97089 8.05377 6.29657 7.74693C6.61592 7.44605 6.99953 7.33864 7.3639 7.29248C7.7005 7.24984 8.66649 7.24992 8.66649 7.24992H8.6665C9.12932 7.24988 9.5451 7.24985 9.88169 7.29248C10.2461 7.33864 10.6297 7.44605 10.949 7.74693C11.2747 8.05377 11.3973 8.43275 11.4492 8.7967C11.4957 9.12256 11.4957 9.52219 11.4956 9.95334L11.4956 12.0686C11.4956 14.2911 9.88378 16.0997 7.77268 16.7195C7.37525 16.8362 6.95846 16.6087 6.84177 16.2112Z',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d5: 'M14.1045 15.2802C13.7071 15.3969 13.4795 15.8137 13.5962 16.2111C13.7128 16.6085 14.1296 16.8361 14.5271 16.7194C16.6382 16.0996 18.25 14.291 18.25 12.0685L18.25 9.95321C18.2501 9.52205 18.2501 9.12244 18.2036 8.79658C18.1517 8.43263 18.0291 8.05365 17.7034 7.74681C17.3841 7.44593 17.0005 7.33852 16.6361 7.29236C16.2995 7.24972 15.8837 7.24976 15.4209 7.2498C15.4209 7.2498 14.4549 7.24972 14.1183 7.29236C13.7539 7.33852 13.3703 7.44593 13.051 7.74681C12.7253 8.05365 12.6027 8.43263 12.5508 8.79658C12.5043 9.12243 12.5043 9.52204 12.5044 9.95319C12.5044 9.95319 12.5043 10.8772 12.5508 11.203C12.6027 11.567 12.7253 11.946 13.051 12.2528C13.3703 12.5537 13.7539 12.6611 14.1183 12.7072C14.4549 12.7499 15.3335 12.7498 15.3335 12.7498C15.7963 12.7498 16.6815 12.7012 16.6815 12.7012C16.6966 12.6993 16.6663 12.7033 16.6815 12.7012C16.4235 13.8815 15.4556 14.8835 14.1045 15.2802ZM7.35011 15.2802C6.95267 15.3969 6.72508 15.8137 6.84177 16.2111C6.95846 16.6085 7.37525 16.8361 7.77268 16.7194C9.88378 16.0996 11.4956 14.291 11.4956 12.0685L11.4956 9.95321C11.4957 9.52206 11.4957 9.12244 11.4492 8.79658C11.3973 8.43263 11.2747 8.05365 10.949 7.74681C10.6297 7.44593 10.2461 7.33852 9.88169 7.29236C9.5451 7.24972 9.12931 7.24976 8.66649 7.2498C8.66649 7.2498 7.7005 7.24972 7.3639 7.29236C6.99953 7.33852 6.61592 7.44593 6.29657 7.74681C5.97089 8.05365 5.84831 8.43263 5.79637 8.79658C5.74987 9.12244 5.74993 9.52206 5.74999 9.95322C5.74999 9.95322 5.74987 10.8772 5.79637 11.203C5.84831 11.567 5.97089 11.946 6.29657 12.2528C6.61592 12.5537 6.99953 12.6611 7.3639 12.7072C7.70051 12.7499 8.57913 12.7498 8.57913 12.7498C9.04196 12.7498 9.92712 12.7012 9.92712 12.7012C9.94223 12.6993 9.91195 12.7033 9.92712 12.7012C9.6691 13.8815 8.7012 14.8835 7.35011 15.2802Z',
  d6: 'M10.5 12V8H6.5V12H10.5ZM10.5 12V13C10.5 14.6569 9.15685 16 7.5 16M17.5 12V8H13.5V12H17.5ZM17.5 12V13C17.5 14.6569 16.1569 16 14.5 16',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.5 16.75C9.57107 16.75 11.25 15.0711 11.25 13V7.25H5.75V12.75H9.75V13C9.75 14.2426 8.74264 15.25 7.5 15.25V16.75ZM14.5 16.75C16.5711 16.75 18.25 15.0711 18.25 13V7.25H12.75V12.75H16.75V13C16.75 14.2426 15.7426 15.25 14.5 15.25V16.75Z',
};

export const IconQuoteDownCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-stroke-rounded IconQuoteDownCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteDownCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-duotone-rounded IconQuoteDownCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteDownCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-twotone-rounded IconQuoteDownCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteDownCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-solid-rounded IconQuoteDownCircleSolidRounded"
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

export const IconQuoteDownCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-bulk-rounded IconQuoteDownCircleBulkRounded"
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

export const IconQuoteDownCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-stroke-sharp IconQuoteDownCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteDownCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-down-circle-solid-sharp IconQuoteDownCircleSolidSharp"
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

export const iconPackOfQuoteDownCircle: TheIconSelfPack = {
  name: 'QuoteDownCircle',
  StrokeRounded: IconQuoteDownCircleStrokeRounded,
  DuotoneRounded: IconQuoteDownCircleDuotoneRounded,
  TwotoneRounded: IconQuoteDownCircleTwotoneRounded,
  SolidRounded: IconQuoteDownCircleSolidRounded,
  BulkRounded: IconQuoteDownCircleBulkRounded,
  StrokeSharp: IconQuoteDownCircleStrokeSharp,
  SolidSharp: IconQuoteDownCircleSolidSharp,
};