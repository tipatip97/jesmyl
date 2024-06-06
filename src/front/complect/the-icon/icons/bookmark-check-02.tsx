import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z',
  d2: 'M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8',
  d3: 'M16.4854 1.39731C15.348 1.24997 13.8939 1.24999 12.0546 1.25H11.9454C10.1061 1.24999 8.652 1.24997 7.51457 1.39731C6.34711 1.54853 5.40051 1.86672 4.65121 2.58863C3.89799 3.31431 3.56243 4.23743 3.40364 5.37525C3.24997 6.4765 3.24998 7.88206 3.25 9.64943L3.25 18.0459C3.24996 19.1434 3.24993 20.0553 3.35532 20.7405C3.46437 21.4495 3.71856 22.1395 4.41957 22.5139C5.04475 22.8477 5.7324 22.7798 6.31543 22.6028C6.90513 22.4238 7.50453 22.0989 8.05335 21.7521C8.60738 21.402 9.15065 21.0029 9.62299 20.6538C10.0858 20.3117 10.5131 19.9958 10.7969 19.8249C11.1965 19.5843 11.4487 19.4335 11.6533 19.3371C11.842 19.2482 11.9337 19.234 12 19.234C12.0663 19.234 12.158 19.2482 12.3467 19.3371C12.5513 19.4335 12.8035 19.5843 13.2031 19.8249C13.4869 19.9958 13.9142 20.3117 14.377 20.6538C14.8494 21.0029 15.3926 21.402 15.9467 21.7521C16.4955 22.0989 17.0949 22.4238 17.6846 22.6028C18.2676 22.7798 18.9552 22.8477 19.5804 22.5139C20.2814 22.1395 20.5356 21.4495 20.6447 20.7405C20.7501 20.0553 20.75 19.1434 20.75 18.0458V9.64945C20.75 7.88207 20.75 6.4765 20.5964 5.37525C20.4376 4.23743 20.102 3.31431 19.3488 2.58863C18.5995 1.86672 17.6529 1.54853 16.4854 1.39731ZM16.3196 8.94782C16.8429 8.77131 17.1241 8.20398 16.9475 7.68066C16.771 7.15734 16.2037 6.87621 15.6804 7.05272C14.8951 7.31759 14.1478 7.82147 13.4964 8.36558C12.8354 8.91765 12.2188 9.5574 11.6963 10.1539C11.3459 10.5539 11.0323 10.9408 10.7701 11.2786C10.5377 11.0287 10.3061 10.8395 10.0829 10.6977C9.83248 10.5387 9.60331 10.4465 9.41295 10.3947C9.31842 10.369 9.17188 10.3336 9 10.3336C8.44772 10.3336 8 10.7813 8 11.3336C8 11.8522 8.3948 12.2786 8.90025 12.3287C8.91855 12.3354 8.95654 12.3517 9.01087 12.3862C9.16314 12.4828 9.49129 12.754 9.8646 13.4651C10.0286 13.7776 10.3452 13.9804 10.6976 13.9989C11.0499 14.0174 11.3861 13.8486 11.5819 13.5552C11.6581 13.4463 11.8828 13.1253 12.0263 12.9317C12.314 12.5434 12.7214 12.0189 13.2008 11.4717C13.682 10.9223 14.2234 10.3641 14.7784 9.90059C15.343 9.42907 15.8696 9.09962 16.3196 8.94782Z',
  d4: 'M12.0546 1.25C13.8939 1.24999 15.348 1.24997 16.4854 1.39731C17.6529 1.54853 18.5995 1.86672 19.3488 2.58863C20.102 3.31431 20.4376 4.23743 20.5964 5.37525C20.75 6.4765 20.75 7.88207 20.75 9.64945V18.0458C20.75 19.1434 20.7501 20.0553 20.6447 20.7405C20.5356 21.4495 20.2814 22.1395 19.5804 22.5139C18.9553 22.8477 18.2676 22.7798 17.6846 22.6028C17.0949 22.4238 16.4955 22.0989 15.9467 21.7521C15.3926 21.402 14.8494 21.0029 14.377 20.6538C13.9142 20.3117 13.4869 19.9958 13.2031 19.8249C12.8035 19.5843 12.5513 19.4335 12.3467 19.3371C12.158 19.2482 12.0663 19.234 12 19.234C11.9337 19.234 11.842 19.2482 11.6533 19.3371C11.4488 19.4335 11.1965 19.5843 10.7969 19.8249C10.5131 19.9958 10.0858 20.3117 9.62299 20.6538C9.15065 21.0029 8.60739 21.402 8.05335 21.7521C7.50454 22.0989 6.90514 22.4238 6.31544 22.6028C5.7324 22.7798 5.04476 22.8477 4.41958 22.5139C3.71857 22.1395 3.46438 21.4495 3.35533 20.7405C3.24993 20.0553 3.24996 19.1434 3.25 18.0459L3.25 9.64943C3.24999 7.88206 3.24997 6.4765 3.40365 5.37525C3.56243 4.23743 3.898 3.31431 4.65121 2.58863C5.40051 1.86672 6.34712 1.54853 7.51457 1.39731C8.652 1.24997 10.1061 1.24999 11.9454 1.25H12.0546Z',
  d5: 'M16.9475 7.68066C17.1241 8.20398 16.8429 8.77131 16.3196 8.94782C15.8696 9.09962 15.343 9.42907 14.7784 9.90059C14.2234 10.3641 13.682 10.9223 13.2008 11.4717C12.7214 12.0189 12.314 12.5434 12.0263 12.9317C11.8828 13.1253 11.6581 13.4463 11.5819 13.5552C11.3861 13.8486 11.0499 14.0174 10.6976 13.9989C10.3452 13.9804 10.0286 13.7776 9.8646 13.4651C9.49129 12.754 9.16314 12.4828 9.01087 12.3862C8.95654 12.3517 8.91855 12.3354 8.90025 12.3287C8.3948 12.2786 8 11.8522 8 11.3336C8 10.7813 8.44772 10.3336 9 10.3336C9.17188 10.3336 9.31842 10.369 9.41295 10.3947C9.60331 10.4465 9.83248 10.5387 10.0829 10.6977C10.3061 10.8395 10.5377 11.0287 10.7701 11.2786C11.0323 10.9408 11.3459 10.5539 11.6963 10.1539C12.2188 9.5574 12.8354 8.91765 13.4964 8.36558C14.1478 7.82147 14.8951 7.31759 15.6804 7.05272C16.2037 6.87621 16.771 7.15734 16.9475 7.68066Z',
  d6: 'M9 10L10.75 12L16 7',
  d7: 'M4 2.01C4 2.00448 4.00448 2 4.01 2H19.99C19.9955 2 20 2.00448 20 2.01V22L12 18L4 22V2.01Z',
  d8: 'M4.00098 1.125C3.80206 1.125 3.6113 1.20402 3.47065 1.34467C3.32999 1.48532 3.25098 1.67609 3.25098 1.875V22.625L12.001 18.25L20.751 22.625V1.875C20.751 1.46079 20.4152 1.125 20.001 1.125H4.00098ZM10.7017 13.0828L16.5182 7.54324L15.4837 6.45703L10.8002 10.9175L9.56539 9.50626L8.43652 10.494L10.7017 13.0828Z',
};

export const IconBookmarkCheck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-stroke-rounded IconBookmarkCheck02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-duotone-rounded IconBookmarkCheck02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-twotone-rounded IconBookmarkCheck02TwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-solid-rounded IconBookmarkCheck02SolidRounded"
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

export const IconBookmarkCheck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-bulk-rounded IconBookmarkCheck02BulkRounded"
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

export const IconBookmarkCheck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-stroke-sharp IconBookmarkCheck02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkCheck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-check-02-solid-sharp IconBookmarkCheck02SolidSharp"
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

export const iconPackOfBookmarkCheck02: TheIconSelfPack = {
  name: 'BookmarkCheck02',
  StrokeRounded: IconBookmarkCheck02StrokeRounded,
  DuotoneRounded: IconBookmarkCheck02DuotoneRounded,
  TwotoneRounded: IconBookmarkCheck02TwotoneRounded,
  SolidRounded: IconBookmarkCheck02SolidRounded,
  BulkRounded: IconBookmarkCheck02BulkRounded,
  StrokeSharp: IconBookmarkCheck02StrokeSharp,
  SolidSharp: IconBookmarkCheck02SolidSharp,
};