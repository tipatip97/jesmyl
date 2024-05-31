import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5',
  d2: 'M2 7H21',
  d3: 'M10 16H11M6 16H7M10 12H14M6 12H7',
  d4: 'M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d5: 'M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 9.6509 2 8.18354 2.09793 7H20.9021C21 8.18354 21 9.6509 21 11.5C21 13.421 21 14.93 20.8902 16.1368C20.3294 14.8777 19.0672 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.0672 14.8777 20.3294 16.1368 20.8902C14.93 21 13.421 21 11.5 21Z',
  d6: 'M10 16H11M6 16H7',
  d7: 'M10 12H14M6 12H7',
  d8: 'M13 17.6C13 15.0595 15.0595 13 17.6 13C20.1405 13 22.2 15.0595 22.2 17.6C22.2 18.5077 21.9371 19.354 21.4833 20.0669L22.7077 21.2935C23.0979 21.6844 23.0974 22.3175 22.7065 22.7077C22.3156 23.0979 21.6825 23.0974 21.2923 22.7065L20.0695 21.4816C19.3561 21.9364 18.5088 22.2 17.6 22.2C15.0595 22.2 13 20.1405 13 17.6ZM17.6 15C16.1641 15 15 16.1641 15 17.6C15 19.0359 16.1641 20.2 17.6 20.2C19.0359 20.2 20.2 19.0359 20.2 17.6C20.2 16.1641 19.0359 15 17.6 15Z',
  d9: 'M11.5572 1.25H11.4428H11.4428C9.25212 1.24999 7.53144 1.24998 6.18802 1.43059C4.81137 1.61568 3.71911 2.00272 2.86091 2.86091C2.00272 3.71911 1.61568 4.81137 1.43059 6.18802C1.40227 6.39867 1.38811 6.50399 1.43165 6.58807C1.45337 6.63001 1.48716 6.66865 1.52584 6.69577C1.60337 6.75012 1.7132 6.75012 1.93285 6.75012H21.0672C21.2868 6.75012 21.3966 6.75012 21.4742 6.69577C21.5128 6.66865 21.5466 6.63001 21.5683 6.58807C21.6119 6.50399 21.5977 6.39867 21.5694 6.18802C21.3843 4.81137 20.9973 3.71911 20.1391 2.86091C19.2809 2.00272 18.1886 1.61568 16.812 1.43059C15.4686 1.24998 13.7479 1.24999 11.5572 1.25H11.5572ZM21.7349 8.83105C21.7297 8.55822 21.7271 8.4218 21.6396 8.33596C21.552 8.25012 21.4144 8.25012 21.1391 8.25012H1.8609C1.5856 8.25012 1.44795 8.25012 1.36045 8.33596C1.27294 8.4218 1.27032 8.55822 1.26508 8.83105C1.24999 9.61693 1.24999 10.4849 1.25 11.4428V11.4428V11.5572V11.5572C1.24999 13.7479 1.24998 15.4686 1.43059 16.812C1.61568 18.1886 2.00272 19.2809 2.86091 20.1391C3.71911 20.9973 4.81137 21.3843 6.18802 21.5694C7.53144 21.75 9.2521 21.75 11.4428 21.75H11.5572L11.7626 21.75C12.3249 21.75 12.606 21.7499 12.6926 21.5998C12.7791 21.4496 12.6253 21.1839 12.3175 20.6525C11.7976 19.7547 11.5 18.7121 11.5 17.6C11.5 14.2311 14.2311 11.5 17.6 11.5C18.7121 11.5 19.7547 11.7976 20.6525 12.3175C21.1839 12.6253 21.4496 12.7791 21.5998 12.6926C21.7499 12.606 21.75 12.3249 21.75 11.7626L21.75 11.5572V11.4425V11.4424V11.4423V11.4422C21.75 10.4846 21.75 9.61679 21.7349 8.83105ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H7C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25H6ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H12C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25H10ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H7C7.41421 16.75 7.75 16.4142 7.75 16C7.75 15.5858 7.41421 15.25 7 15.25H6Z',
  d10: 'M21.6396 8.33584C21.7271 8.42168 21.7297 8.5581 21.7349 8.83093C21.75 9.61675 21.75 10.4847 21.75 11.4424V11.5571C21.75 11.626 21.75 11.6945 21.75 11.7625C21.75 12.3248 21.7499 12.6059 21.5998 12.6924C21.4496 12.779 21.1839 12.6251 20.6525 12.3174C19.7547 11.7975 18.7121 11.4999 17.6 11.4999C14.2311 11.4999 11.5 14.2309 11.5 17.5999C11.5 18.712 11.7976 19.7546 12.3175 20.6524C12.6253 21.1838 12.7791 21.4495 12.6926 21.5996C12.606 21.7498 12.3249 21.7498 11.7626 21.7499C11.6946 21.7499 11.6261 21.7499 11.5572 21.7499H11.4428C9.2521 21.7499 7.53144 21.7499 6.18802 21.5693C4.81137 21.3842 3.71911 20.9972 2.86091 20.139C2.00272 19.2808 1.61568 18.1885 1.43059 16.8119C1.24998 15.4684 1.24999 13.7478 1.25 11.5571V11.4427C1.24999 10.4848 1.24999 9.61682 1.26508 8.83093C1.27032 8.5581 1.27294 8.42168 1.36045 8.33584C1.44795 8.25 1.5856 8.25 1.8609 8.25H21.1391C21.4144 8.25 21.552 8.25 21.6396 8.33584Z',
  d11: 'M11.4432 1.25H11.5575C13.7482 1.24999 15.4689 1.24998 16.8123 1.43059C18.189 1.61568 19.2812 2.00272 20.1394 2.86091C20.9976 3.71911 21.3847 4.81137 21.5697 6.18802C21.5981 6.39867 21.6122 6.50399 21.5687 6.58807C21.547 6.63001 21.5132 6.66865 21.4745 6.69577C21.397 6.75012 21.2871 6.75012 21.0675 6.75012H1.93319C1.71354 6.75012 1.60371 6.75012 1.52618 6.69577C1.4875 6.66865 1.45371 6.63001 1.43199 6.58807C1.38845 6.50399 1.40261 6.39867 1.43093 6.18802C1.61602 4.81137 2.00306 3.71911 2.86125 2.86091C3.71945 2.00272 4.81171 1.61568 6.18836 1.43059C7.53178 1.24998 9.25247 1.24999 11.4432 1.25Z',
  d12: 'M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7C7.41421 11.25 7.75 11.5858 7.75 12C7.75 12.4142 7.41421 12.75 7 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d13: 'M20 12V2H2V20L12 20',
  d14: 'M2 7H20',
  d15: 'M10 15.5H12M6 15.5H8M10 11.5H16M6 11.5H8',
  d16: 'M20.3004 20.2975L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d17: 'M14.25 17.8905C14.25 15.6038 16.1035 13.75 18.39 13.75C20.6765 13.75 22.53 15.6038 22.53 17.8905C22.53 18.7075 22.2934 19.4693 21.8849 20.111L23.25 21.4782L21.9761 22.75L20.6126 21.3844C19.9705 21.7938 19.2079 22.031 18.39 22.031C16.1035 22.031 14.25 20.1772 14.25 17.8905ZM18.39 15.5502C17.0977 15.5502 16.05 16.598 16.05 17.8905C16.05 19.183 17.0977 20.2308 18.39 20.2308C19.6823 20.2308 20.73 19.183 20.73 17.8905C20.73 16.598 19.6823 15.5502 18.39 15.5502Z',
  d18: 'M1.5 1.25C1.08579 1.25 0.75 1.58579 0.75 2V6.25H20.25V2C20.25 1.58579 19.9142 1.25 19.5 1.25H1.5Z',
  d19: 'M20.25 7.75H0.75V20C0.75 20.4142 1.08579 20.75 1.5 20.75L13.5274 20.75C13.0334 19.9115 12.75 18.9341 12.75 17.8905C12.75 14.7755 15.2749 12.25 18.39 12.25C19.0417 12.25 19.6676 12.3606 20.25 12.5639V7.75ZM7.5 13H5.5V11.5H7.5V13ZM14.1194 13H9.5V11.5H14.1194V13ZM7.5 17H5.5V15.5H7.5V17ZM12.0425 17H9.5V15.5H12.0425V17Z',
} as const;

export const IconPropertySearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-stroke-rounded IconPropertySearchStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPropertySearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-duotone-rounded IconPropertySearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPropertySearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-twotone-rounded IconPropertySearchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertySearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-solid-rounded IconPropertySearchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertySearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-bulk-rounded IconPropertySearchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertySearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-stroke-sharp IconPropertySearchStrokeSharp"
    >
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertySearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-search-solid-sharp IconPropertySearchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfPropertySearch: TheIconSelfPack = {
  name: 'PropertySearch',
  StrokeRounded: IconPropertySearchStrokeRounded,
  DuotoneRounded: IconPropertySearchDuotoneRounded,
  TwotoneRounded: IconPropertySearchTwotoneRounded,
  SolidRounded: IconPropertySearchSolidRounded,
  BulkRounded: IconPropertySearchBulkRounded,
  StrokeSharp: IconPropertySearchStrokeSharp,
  SolidSharp: IconPropertySearchSolidSharp,
};