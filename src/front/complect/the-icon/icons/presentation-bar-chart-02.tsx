import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 18V22',
  d2: 'M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22',
  d3: 'M2.5 12C2.5 14.8284 2.5 16.2426 3.37868 17.1213C4.25736 18 5.67157 18 8.5 18H15.5C18.3284 18 19.7426 18 20.6213 17.1213C21.5 16.2426 21.5 14.8284 21.5 12V8C21.5 5.17157 21.5 3.75736 20.6213 2.87868C19.7426 2 18.3284 2 15.5 2H8.5C5.67157 2 4.25736 2 3.37868 2.87868C2.5 3.75736 2.5 5.17157 2.5 8V12Z',
  d4: 'M8 13V10M12 13V7M16 13V11',
  d5: 'M13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18V19.5035C10.5268 19.5145 10.091 19.5585 9.68018 19.7287C9.12373 19.9592 8.69838 20.3859 8.21912 20.8667L8.12106 20.965L7.79285 21.2932C7.40235 21.6838 7.40239 22.3169 7.79294 22.7074C8.18349 23.0979 8.81665 23.0979 9.20715 22.7073L9.53536 22.3791C10.1711 21.7432 10.3046 21.6348 10.4456 21.5764C10.542 21.5365 10.6525 21.5156 11 21.5063V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21.5063C13.3473 21.5156 13.4577 21.5365 13.5541 21.5764C13.6951 21.6348 13.8285 21.7432 14.4643 22.379L14.7927 22.7074C15.1832 23.0979 15.8164 23.0979 16.2069 22.7074C16.5974 22.3169 16.5974 21.6837 16.2069 21.2932L15.8785 20.9647L15.7804 20.8665C15.3012 20.3858 14.8758 19.9591 14.3194 19.7286C13.9088 19.5585 13.473 19.5145 13 19.5035V18Z',
  d6: 'M1.75 10.9375C1.75 14.0311 1.75 16.5779 2.69805 17.5389C3.6461 18.5 5.17196 18.5 8.22368 18.5H15.7763C18.828 18.5 20.3539 18.5 21.302 17.5389C22.25 16.5779 22.25 15.0311 22.25 11.9375V7.5625C22.25 4.46891 22.25 2.92211 21.302 1.96106C20.3539 1 18.828 1 15.7763 1H8.22368C5.17196 1 3.6461 1 2.69805 1.96106C1.75 2.92211 1.75 3.46891 1.75 6.5625V10.9375ZM13 6.56641C13 6.01412 12.5523 5.56641 12 5.56641C11.4477 5.56641 11 6.01412 11 6.56641V12.5664C11 13.1187 11.4477 13.5664 12 13.5664C12.5523 13.5664 13 13.1187 13 12.5664V6.56641ZM9 9.56641C9 9.01412 8.55228 8.56641 8 8.56641C7.44772 8.56641 7 9.01412 7 9.56641V12.5664C7 13.1187 7.44772 13.5664 8 13.5664C8.55228 13.5664 9 13.1187 9 12.5664V9.56641ZM16 9.56641C16.5523 9.56641 17 10.0141 17 10.5664V12.5664C17 13.1187 16.5523 13.5664 16 13.5664C15.4477 13.5664 15 13.1187 15 12.5664V10.5664C15 10.0141 15.4477 9.56641 16 9.56641Z',
  d7: 'M2.69805 17.5389C1.75 16.5779 1.75 14.0311 1.75 10.9375V6.5625C1.75 3.46891 1.75 2.92211 2.69805 1.96106C3.6461 1 5.17196 1 8.22368 1H15.7763C18.828 1 20.3539 1 21.302 1.96106C22.25 2.92211 22.25 4.46891 22.25 7.5625V11.9375C22.25 15.0311 22.25 16.5779 21.302 17.5389C20.3539 18.5 18.828 18.5 15.7763 18.5H8.22368C5.17196 18.5 3.6461 18.5 2.69805 17.5389Z',
  d8: 'M11 18.5V19.5035C10.5268 19.5145 10.091 19.5585 9.68018 19.7287C9.12373 19.9592 8.69838 20.3859 8.21912 20.8667L8.12106 20.965L7.79285 21.2932C7.40235 21.6838 7.40239 22.3169 7.79294 22.7074C8.18349 23.0979 8.81665 23.0979 9.20715 22.7073L9.53536 22.3791C10.1711 21.7432 10.3046 21.6348 10.4456 21.5764C10.542 21.5365 10.6525 21.5156 11 21.5063V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21.5063C13.3473 21.5156 13.4577 21.5365 13.5541 21.5764C13.6951 21.6348 13.8285 21.7432 14.4643 22.379L14.7927 22.7074C15.1832 23.0979 15.8164 23.0979 16.2069 22.7074C16.5974 22.3169 16.5974 21.6837 16.2069 21.2932L15.8785 20.9647L15.7804 20.8665C15.3012 20.3858 14.8758 19.9591 14.3194 19.7286C13.9088 19.5585 13.473 19.5145 13 19.5035V18.5H11Z',
  d9: 'M13 6.56641C13 6.01412 12.5523 5.56641 12 5.56641C11.4477 5.56641 11 6.01412 11 6.56641V12.5664C11 13.1187 11.4477 13.5664 12 13.5664C12.5523 13.5664 13 13.1187 13 12.5664V6.56641Z',
  d10: 'M9 9.56641C9 9.01412 8.55228 8.56641 8 8.56641C7.44772 8.56641 7 9.01412 7 9.56641V12.5664C7 13.1187 7.44772 13.5664 8 13.5664C8.55228 13.5664 9 13.1187 9 12.5664V9.56641Z',
  d11: 'M17 10.5664C17 10.0141 16.5523 9.56641 16 9.56641C15.4477 9.56641 15 10.0141 15 10.5664V12.5664C15 13.1187 15.4477 13.5664 16 13.5664C16.5523 13.5664 17 13.1187 17 12.5664V10.5664Z',
  d12: 'M21 16V2H3V16L21 16Z',
  d13: 'M12 16L12 21',
  d14: 'M8 21L9.5 19H14.5L16 21',
  d15: 'M8 13V9M12 13V6M16 13V10',
  d16: 'M11 20.1944V21.75H13V20.1944H13.9792L15.1667 21.75L16.75 20.5833L15.2656 18.6389C15.0787 18.3941 14.7854 18.25 14.474 18.25H13V16.25H11V18.25H9.52604C9.21456 18.25 8.92126 18.3941 8.73438 18.6389L7.25 20.5833L8.83333 21.75L10.0208 20.1944H11Z',
  d17: 'M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2V16C2.25 16.4142 2.58579 16.75 3 16.75L21 16.75C21.1989 16.75 21.3897 16.671 21.5303 16.5303C21.671 16.3897 21.75 16.1989 21.75 16V2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM13 13V6H11V13H13ZM9 13V9H7V13H9ZM17 13V10H15V13H17Z',
} as const;

export const IconPresentationBarChart02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-stroke-rounded IconPresentationBarChart02StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPresentationBarChart02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-duotone-rounded IconPresentationBarChart02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPresentationBarChart02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-twotone-rounded IconPresentationBarChart02TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-solid-rounded IconPresentationBarChart02SolidRounded"
    >
      <path 
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

export const IconPresentationBarChart02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-bulk-rounded IconPresentationBarChart02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-stroke-sharp IconPresentationBarChart02StrokeSharp"
    >
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-02-solid-sharp IconPresentationBarChart02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentationBarChart02: TheIconSelfPack = {
  name: 'PresentationBarChart02',
  StrokeRounded: IconPresentationBarChart02StrokeRounded,
  DuotoneRounded: IconPresentationBarChart02DuotoneRounded,
  TwotoneRounded: IconPresentationBarChart02TwotoneRounded,
  SolidRounded: IconPresentationBarChart02SolidRounded,
  BulkRounded: IconPresentationBarChart02BulkRounded,
  StrokeSharp: IconPresentationBarChart02StrokeSharp,
  SolidSharp: IconPresentationBarChart02SolidSharp,
};