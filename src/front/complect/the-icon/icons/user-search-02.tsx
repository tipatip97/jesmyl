import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.9225 16.0335 0.625212 17.5386 2.63348 19.422C3.6145 20.342 4.70711 21 6.08078 21H13.9193C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.82 15.2964C11.871 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2092 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2092 3 14 4.79086 14 7Z',
  d3: 'M20.801 7.8L22.001 9M21.401 5.7C21.401 4.20882 20.1922 3 18.701 3C17.2098 3 16.001 4.20882 16.001 5.7C16.001 7.19118 17.2098 8.4 18.701 8.4C20.1922 8.4 21.401 7.19118 21.401 5.7Z',
  d4: 'M21.65 5.45293C21.65 3.96176 20.4412 2.75293 18.95 2.75293C17.4589 2.75293 16.25 3.96176 16.25 5.45293C16.25 6.9441 17.4589 8.15293 18.95 8.15293C20.4412 8.15293 21.65 6.9441 21.65 5.45293Z',
  d5: 'M5.43007 15.0493C4.1725 15.7864 0.875212 17.2915 2.88348 19.1749C3.8645 20.0949 4.95711 20.7529 6.33078 20.7529H14.1693C15.5429 20.7529 16.6355 20.0949 17.6165 19.1749C19.6248 17.2915 16.3275 15.7864 15.07 15.0493C12.121 13.3208 8.37906 13.3208 5.43007 15.0493Z',
  d6: 'M14.25 6.75293C14.25 8.96207 12.4592 10.7529 10.25 10.7529C8.04086 10.7529 6.25 8.96207 6.25 6.75293C6.25 4.54379 8.04086 2.75293 10.25 2.75293C12.4592 2.75293 14.25 4.54379 14.25 6.75293Z',
  d7: 'M21.05 7.55293L22.25 8.75293M21.65 5.45293C21.65 3.96175 20.4412 2.75293 18.95 2.75293C17.4588 2.75293 16.25 3.96175 16.25 5.45293C16.25 6.94411 17.4588 8.15293 18.95 8.15293C20.4412 8.15293 21.65 6.94411 21.65 5.45293Z',
  d8: 'M5.17909 15.2964C3.92152 16.0335 0.624236 17.5386 2.6325 19.422C3.61352 20.342 4.70613 21 6.0798 21H13.9183C15.2919 21 16.3845 20.342 17.3655 19.422C19.3738 17.5386 16.0765 16.0335 14.819 15.2964C11.87 13.5679 8.12808 13.5679 5.17909 15.2964Z',
  d9: 'M13.999 7C13.999 9.20914 12.2082 11 9.99902 11C7.78988 11 5.99902 9.20914 5.99902 7C5.99902 4.79086 7.78988 3 9.99902 3C12.2082 3 13.999 4.79086 13.999 7Z',
  d10: 'M20.8 7.8L22 9M21.4 5.7C21.4 4.20882 20.1912 3 18.7 3C17.2088 3 16 4.20882 16 5.7C16 7.19118 17.2088 8.4 18.7 8.4C20.1912 8.4 21.4 7.19118 21.4 5.7Z',
  d11: 'M4.801 14.6493C7.98419 12.7836 12.0162 12.7836 15.1994 14.6493C15.3002 14.7084 15.4257 14.7781 15.5686 14.8574C16.2012 15.2086 17.1731 15.7481 17.8385 16.3892C18.254 16.7896 18.6635 17.3303 18.7383 18.0037C18.8184 18.7252 18.4961 19.3911 17.8798 19.9691C16.8297 20.9539 15.5618 21.75 13.9194 21.75H6.08096C4.43862 21.75 3.1707 20.9538 2.12062 19.9691C1.5043 19.3911 1.18195 18.7252 1.26207 18.0037C1.33684 17.3303 1.7464 16.7896 2.16189 16.3892C2.82728 15.7481 3.79919 15.2086 4.43183 14.8574C4.57465 14.7781 4.7002 14.7084 4.801 14.6493Z',
  d12: 'M5.25019 7C5.25019 4.37665 7.37684 2.25 10.0002 2.25C12.6235 2.25 14.7502 4.37665 14.7502 7C14.7502 9.62335 12.6235 11.75 10.0002 11.75C7.37684 11.75 5.25019 9.62335 5.25019 7Z',
  d13: 'M15.251 5.7C15.251 3.79462 16.7956 2.25 18.701 2.25C20.6064 2.25 22.151 3.79462 22.151 5.7C22.151 6.37964 21.9545 7.01339 21.6151 7.5475L22.533 8.4714C22.825 8.76525 22.8234 9.24012 22.5296 9.53205C22.2357 9.82399 21.7609 9.82245 21.4689 9.5286L20.5558 8.6095C20.0201 8.95168 19.3837 9.15 18.701 9.15C16.7956 9.15 15.251 7.60538 15.251 5.7ZM18.701 3.75C17.624 3.75 16.751 4.62304 16.751 5.7C16.751 6.77696 17.624 7.65 18.701 7.65C19.7779 7.65 20.651 6.77696 20.651 5.7C20.651 4.62304 19.7779 3.75 18.701 3.75Z',
  d14: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d15: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d16: 'M20.6137 12.6047L22 14M21.4 10.7C21.4 9.20883 20.1912 8 18.7 8C17.2088 8 16 9.20883 16 10.7C16 12.1912 17.2088 13.4 18.7 13.4C20.1912 13.4 21.4 12.1912 21.4 10.7Z',
  d17: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d18: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d19: 'M15.25 10.7C15.25 8.79462 16.7946 7.25 18.7 7.25C20.6054 7.25 22.15 8.79462 22.15 10.7C22.15 11.3796 21.9535 12.0134 21.6142 12.5475L22.5321 13.4714L21.4679 14.5286L20.5548 13.6095C20.0192 13.9517 19.3827 14.15 18.7 14.15C16.7946 14.15 15.25 12.6054 15.25 10.7ZM18.7 8.75C17.623 8.75 16.75 9.62304 16.75 10.7C16.75 11.777 17.623 12.65 18.7 12.65C19.777 12.65 20.65 11.777 20.65 10.7C20.65 9.62304 19.777 8.75 18.7 8.75Z',
} as const;

export const IconUserSearch02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-stroke-rounded IconUserSearch02StrokeRounded"
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

export const IconUserSearch02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-duotone-rounded IconUserSearch02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-twotone-rounded IconUserSearch02TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-solid-rounded IconUserSearch02SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-bulk-rounded IconUserSearch02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-stroke-sharp IconUserSearch02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSearch02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-search-02-solid-sharp IconUserSearch02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserSearch02: TheIconSelfPack = {
  name: 'UserSearch02',
  StrokeRounded: IconUserSearch02StrokeRounded,
  DuotoneRounded: IconUserSearch02DuotoneRounded,
  TwotoneRounded: IconUserSearch02TwotoneRounded,
  SolidRounded: IconUserSearch02SolidRounded,
  BulkRounded: IconUserSearch02BulkRounded,
  StrokeSharp: IconUserSearch02StrokeSharp,
  SolidSharp: IconUserSearch02SolidSharp,
};