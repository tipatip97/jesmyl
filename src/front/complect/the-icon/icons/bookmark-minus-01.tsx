import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V12.5',
  d2: 'M3.5 7H10',
  d3: 'M13 5H21',
  d4: 'M3.02775 7H18.9723C19 7.77051 19 8.66411 19 9.70753V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C17.0846 22.4624 15.178 21.0527 13.7467 19.9944C13.3032 19.6665 12.9054 19.3723 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C9.09462 19.3723 8.69675 19.6665 8.25325 19.9944C6.82195 21.0527 4.91543 22.4624 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808V9.70753C3 8.66411 3 7.77051 3.02775 7Z',
  d5: 'M11.875 5C11.875 4.44772 12.3227 4 12.875 4H20.875C21.4273 4 21.875 4.44772 21.875 5C21.875 5.55228 21.4273 6 20.875 6H12.875C12.3227 6 11.875 5.55228 11.875 5Z',
  d6: 'M10.875 1.25C12.7143 1.24999 14.223 1.24998 15.3604 1.39731C15.8781 1.46436 16.3523 1.56424 16.7852 1.71758C17.3198 1.90696 17.587 2.00164 17.5442 2.25082C17.5014 2.5 17.1888 2.5 16.5637 2.5H12.875C11.4943 2.5 10.375 3.61929 10.375 5C10.375 5.09063 10.3798 5.18012 10.3892 5.26825C10.4449 5.79017 10.4727 6.05113 10.3833 6.15057C10.294 6.25 10.0857 6.25 9.66922 6.25H2.83346C2.5289 6.25 2.37662 6.25 2.28714 6.14951C2.19765 6.04901 2.21468 5.90257 2.24874 5.60969C2.258 5.53006 2.26795 5.45191 2.27865 5.37525C2.43743 4.23743 2.773 3.31431 3.52622 2.58863C4.27552 1.86672 5.22212 1.54853 6.38958 1.39731C7.527 1.24998 9.03568 1.24999 10.875 1.25Z',
  d7: 'M2.12771 8.3407C2.12954 8.06313 2.13045 7.92434 2.2182 7.83717C2.30595 7.75 2.44555 7.75 2.72477 7.75H19.0252C19.3045 7.75 19.4441 7.75 19.5318 7.83717C19.6196 7.92434 19.6205 8.06313 19.6223 8.3407C19.625 8.75307 19.625 9.18898 19.625 9.64945V18.0458C19.6251 19.1434 19.6251 20.0553 19.5197 20.7405C19.4106 21.4495 19.1564 22.1395 18.4554 22.5139C17.8303 22.8477 17.1426 22.7798 16.5596 22.6028C15.9699 22.4238 15.3705 22.0989 14.8217 21.7521C14.2676 21.402 13.7244 21.0029 13.252 20.6538C12.7892 20.3117 12.3619 19.9958 12.0781 19.8249C11.6785 19.5843 11.4263 19.4335 11.2217 19.3371C11.033 19.2482 10.9413 19.234 10.875 19.234C10.8087 19.234 10.717 19.2482 10.5283 19.3371C10.3238 19.4335 10.0715 19.5843 9.6719 19.8249C9.38808 19.9958 8.96081 20.3117 8.498 20.6538C8.02566 21.0029 7.48239 21.402 6.92836 21.7521C6.37954 22.0989 5.78014 22.4238 5.19044 22.6028C4.60741 22.7798 3.91976 22.8477 3.29458 22.5139C2.59357 22.1395 2.33938 21.4495 2.23033 20.7405C2.12494 20.0553 2.12497 19.1433 2.125 18.0459L2.12501 9.64943C2.125 9.18914 2.125 8.7531 2.12771 8.3407Z',
  d8: 'M3.5 7H11',
  d9: 'M19 10V22L11 18L3 22V2.05C3 2.02238 3.02239 2 3.05 2H11',
  d10: 'M22.25 6H14.25V4H22.25V6Z',
  d11: 'M1.96967 1.46967C2.11032 1.32902 2.30109 1.25 2.5 1.25H18.5C18.9142 1.25 19.25 1.58579 19.25 2V2.5H12.75V6.25H1.75V2C1.75 1.80109 1.82902 1.61032 1.96967 1.46967Z',
  d12: 'M1.75 7.75H19.25V22.75L10.5 18.375L1.75 22.75V7.75Z',
};

export const IconBookmarkMinus01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-stroke-rounded IconBookmarkMinus01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-duotone-rounded IconBookmarkMinus01DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-twotone-rounded IconBookmarkMinus01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-solid-rounded IconBookmarkMinus01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-bulk-rounded IconBookmarkMinus01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-stroke-sharp IconBookmarkMinus01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkMinus01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-minus-01-solid-sharp IconBookmarkMinus01SolidSharp"
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

export const iconPackOfBookmarkMinus01: TheIconSelfPack = {
  name: 'BookmarkMinus01',
  StrokeRounded: IconBookmarkMinus01StrokeRounded,
  DuotoneRounded: IconBookmarkMinus01DuotoneRounded,
  TwotoneRounded: IconBookmarkMinus01TwotoneRounded,
  SolidRounded: IconBookmarkMinus01SolidRounded,
  BulkRounded: IconBookmarkMinus01BulkRounded,
  StrokeSharp: IconBookmarkMinus01StrokeSharp,
  SolidSharp: IconBookmarkMinus01SolidSharp,
};