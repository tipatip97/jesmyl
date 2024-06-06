import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 11.5C2.5 14.3284 2.5 15.7426 3.37868 16.6213C4.25736 17.5 5.67157 17.5 8.5 17.5H15.5C18.3284 17.5 19.7426 17.5 20.6213 16.6213C21.5 15.7426 21.5 14.3284 21.5 11.5V9.5C21.5 6.67157 21.5 5.25736 20.6213 4.37868C19.7426 3.5 18.3284 3.5 15.5 3.5H8.5C5.67157 3.5 4.25736 3.5 3.37868 4.37868C2.5 5.25736 2.5 6.67157 2.5 9.5V11.5Z',
  d2: 'M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22',
  d3: 'M12 2V3.5',
  d4: 'M12 17.5V22',
  d5: 'M12 17.5L12.0001 22',
  d6: 'M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22M12 17.5V22',
  d7: 'M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2L11 3.5C11 4.05228 11.4477 4.5 12 4.5C12.5523 4.5 13 4.05228 13 3.5L13 2Z',
  d8: 'M11 22V21.5063C10.6525 21.5156 10.542 21.5365 10.4456 21.5764C10.3046 21.6348 10.1711 21.7432 9.53536 22.3791L9.20715 22.7073C8.81665 23.0979 8.18349 23.0979 7.79294 22.7074C7.40239 22.3169 7.40235 21.6838 7.79285 21.2932L8.12106 20.965L8.21912 20.8667C8.69838 20.3859 9.12373 19.9592 9.68018 19.7287C10.091 19.5585 10.5268 19.5145 11 19.5035L11 17H13V19.5035C13.473 19.5145 13.9088 19.5585 14.3194 19.7286C14.8758 19.9591 15.3012 20.3858 15.7804 20.8665L15.8785 20.9647L16.2069 21.2932C16.5974 21.6837 16.5974 22.3169 16.2069 22.7074C15.8164 23.0979 15.1832 23.0979 14.7927 22.7074L14.4643 22.379C13.8285 21.7432 13.6951 21.6348 13.5541 21.5764C13.4577 21.5365 13.3473 21.5156 13 21.5063V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22Z',
  d9: 'M1.75 11.6071C1.75 14.7386 1.75 16.3044 2.69805 17.2772C3.6461 18.25 5.17196 18.25 8.22368 18.25H15.7763C18.828 18.25 20.3539 18.25 21.302 17.2772C22.25 16.3044 22.25 14.7386 22.25 11.6071V9.39286C22.25 6.26138 22.25 4.69565 21.302 3.72282C20.3539 2.75 18.828 2.75 15.7763 2.75H8.22368C5.17196 2.75 3.6461 2.75 2.69805 3.72282C1.75 4.69565 1.75 6.26138 1.75 9.39286V11.6071Z',
  d10: 'M12 1C12.5523 1 13 1.44772 13 2L13 2.75H11L11 2C11 1.44772 11.4477 1 12 1ZM11 18.25L11 19.5035C10.5268 19.5145 10.091 19.5585 9.68018 19.7287C9.12373 19.9592 8.69838 20.3859 8.21912 20.8667L8.12106 20.965L7.79285 21.2932C7.40235 21.6838 7.40239 22.3169 7.79294 22.7074C8.18349 23.0979 8.81665 23.0979 9.20715 22.7073L9.53536 22.3791C10.1711 21.7432 10.3046 21.6348 10.4456 21.5764C10.542 21.5365 10.6525 21.5156 11 21.5063V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21.5063C13.3473 21.5156 13.4577 21.5365 13.5541 21.5764C13.6951 21.6348 13.8285 21.7432 14.4643 22.379L14.7927 22.7074C15.1832 23.0979 15.8164 23.0979 16.2069 22.7074C16.5974 22.3169 16.5974 21.6837 16.2069 21.2932L15.8785 20.9647L15.7804 20.8665C15.3012 20.3858 14.8758 19.9591 14.3194 19.7286C13.9088 19.5585 13.473 19.5145 13 19.5035V18.25H11Z',
  d11: 'M21 17V4H3V17L21 17Z',
  d12: 'M12 2L12 4',
  d13: 'M12 17L12 22',
  d14: 'M8 22L9.5 20H14.5L16 22',
  d15: 'M2.25 3.75C2.25 3.33579 2.58579 3 3 3H21C21.4142 3 21.75 3.33579 21.75 3.75V16.75C21.75 16.9489 21.671 17.1397 21.5303 17.2803C21.3897 17.421 21.1989 17.5 21 17.5L3 17.5C2.58579 17.5 2.25 17.1642 2.25 16.75V3.75Z',
  d16: 'M11 3.75L11 1.75L13 1.75L13 3.75L11 3.75Z',
  d17: 'M11 20.6944V22.25H13V20.6944H13.9792L15.1667 22.25L16.75 21.0833L15.2656 19.1389C15.0787 18.8941 14.7854 18.75 14.474 18.75H13V16.75H11V18.75H9.52604C9.21456 18.75 8.92126 18.8941 8.73438 19.1389L7.25 21.0833L8.83333 22.25L10.0208 20.6944H11Z',
};

export const IconPresentation07StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-stroke-rounded IconPresentation07StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-duotone-rounded IconPresentation07DuotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-twotone-rounded IconPresentation07TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-solid-rounded IconPresentation07SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-bulk-rounded IconPresentation07BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-stroke-sharp IconPresentation07StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentation07SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-07-solid-sharp IconPresentation07SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentation07: TheIconSelfPack = {
  name: 'Presentation07',
  StrokeRounded: IconPresentation07StrokeRounded,
  DuotoneRounded: IconPresentation07DuotoneRounded,
  TwotoneRounded: IconPresentation07TwotoneRounded,
  SolidRounded: IconPresentation07SolidRounded,
  BulkRounded: IconPresentation07BulkRounded,
  StrokeSharp: IconPresentation07StrokeSharp,
  SolidSharp: IconPresentation07SolidSharp,
};