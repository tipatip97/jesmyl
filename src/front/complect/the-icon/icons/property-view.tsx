import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.9977 12.5032C20.9977 12.5032 21 12.0338 21 11.5029C21 7.02321 21 4.78334 19.6088 3.39167C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39167C2 4.78334 2 7.02321 2 11.5029C2 15.9827 2 18.2225 3.39124 19.6142C4.55785 20.7812 6.32067 20.9696 9.5 21',
  d2: 'M2 7H21',
  d3: 'M6 16H7M10 12H15M6 12H7',
  d4: 'M17 18.5H17.009',
  d5: 'M21.772 18.0225C21.924 18.2357 22 18.3422 22 18.5C22 18.6578 21.924 18.7643 21.772 18.9775C21.089 19.9353 19.3446 22 17 22C14.6554 22 12.911 19.9353 12.228 18.9775C12.076 18.7643 12 18.6578 12 18.5C12 18.3422 12.076 18.2357 12.228 18.0225C12.911 17.0647 14.6554 15 17 15C19.3446 15 21.089 17.0647 21.772 18.0225Z',
  d6: 'M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 9.6509 2 8.18354 2.09793 7H20.9021C21 8.18354 21 9.6509 21 11.5C21 13.829 21 15.5524 20.8043 16.8659C19.9101 15.954 18.5937 15 17 15C14.6554 15 12.911 17.0647 12.228 18.0225C12.076 18.2357 12 18.3422 12 18.5C12 18.6578 12.076 18.7643 12.228 18.9775C12.5944 19.4912 13.2661 20.3234 14.172 20.9847C13.382 21 12.4964 21 11.5 21Z',
  d7: 'M6 16H7',
  d8: 'M10 12L15 12M6 12H7',
  d9: 'M17 14.25C15.6017 14.25 14.4205 14.8652 13.5294 15.5609C12.6368 16.2578 11.9522 17.1169 11.5879 17.6278C11.4661 17.7948 11.25 18.0914 11.25 18.5C11.25 18.9086 11.4661 19.2052 11.5879 19.3722C11.9522 19.8831 12.6368 20.7422 13.5294 21.4391C14.4205 22.1348 15.6017 22.75 17 22.75C18.3983 22.75 19.5795 22.1348 20.4706 21.4391C21.3632 20.7422 22.0478 19.8831 22.4121 19.3722C22.5339 19.2052 22.75 18.9086 22.75 18.5C22.75 18.0914 22.5339 17.7948 22.4121 17.6278C22.0478 17.1169 21.3632 16.2578 20.4706 15.5609C19.5795 14.8652 18.3983 14.25 17 14.25ZM16.9933 17C16.1686 17 15.5 17.6716 15.5 18.5C15.5 19.3284 16.1686 20 16.9933 20H17.0067C17.8314 20 18.5 19.3284 18.5 18.5C18.5 17.6716 17.8314 17 17.0067 17H16.9933Z',
  d10: 'M11.5572 1.25H11.4428C9.25213 1.24999 7.53144 1.24998 6.18802 1.43059C4.81137 1.61568 3.71911 2.00272 2.86091 2.86091C2.00272 3.71911 1.61568 4.81137 1.43059 6.18802C1.40227 6.39867 1.38811 6.50399 1.43165 6.58807C1.45337 6.63001 1.48716 6.66865 1.52584 6.69577C1.60337 6.75012 1.7132 6.75012 1.93285 6.75012H21.0672C21.2868 6.75012 21.3966 6.75012 21.4742 6.69577C21.5128 6.66865 21.5466 6.63001 21.5683 6.58807C21.6119 6.50399 21.5977 6.39867 21.5694 6.18802C21.3843 4.81137 20.9973 3.71911 20.1391 2.86091C19.2809 2.00272 18.1886 1.61568 16.812 1.43059C15.4686 1.24998 13.7479 1.24999 11.5572 1.25ZM21.7349 8.83105C21.7297 8.55822 21.7271 8.4218 21.6396 8.33596C21.552 8.25012 21.4144 8.25012 21.1391 8.25012H1.8609C1.5856 8.25012 1.44795 8.25012 1.36045 8.33596C1.27294 8.4218 1.27032 8.55822 1.26508 8.83105C1.24999 9.61692 1.24999 10.485 1.25 11.4428V11.4428V11.5572C1.24999 13.7479 1.24998 15.4686 1.43059 16.812C1.61568 18.1886 2.00272 19.2809 2.86091 20.1391C3.71911 20.9973 4.81137 21.3843 6.18802 21.5694C7.22844 21.7093 8.60867 21.7408 10.1959 21.7479C10.7993 21.7506 11.1009 21.752 11.1837 21.5833C11.2665 21.4147 11.073 21.1667 10.6859 20.6707C10.5646 20.5153 10.4596 20.3733 10.3718 20.2504L10.3601 20.2345C10.2174 20.0405 9.75 19.4052 9.75 18.5C9.75 17.5948 10.2174 16.9595 10.3601 16.7655L10.3718 16.7497C10.7793 16.1791 11.5585 15.1966 12.6063 14.3785C13.6502 13.5636 15.1495 12.75 17 12.75C18.8505 12.75 20.3498 13.5636 21.3937 14.3785C21.5286 14.4839 21.7304 14.3936 21.7339 14.2224C21.75 13.4226 21.75 12.537 21.75 11.5575V11.5574V11.5573V11.5572V11.4425V11.4424V11.4423V11.4422C21.75 10.4847 21.75 9.61676 21.7349 8.83105ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H7C7.41421 12.75 7.75 12.4142 7.75 12C7.75 11.5858 7.41421 11.25 7 11.25H6ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H10ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H7C7.41421 16.75 7.75 16.4142 7.75 16C7.75 15.5858 7.41421 15.25 7 15.25H6Z',
  d11: 'M21.6396 8.33584C21.7271 8.42168 21.7297 8.5581 21.7349 8.83093C21.75 9.61672 21.75 10.4847 21.75 11.4424V11.5571C21.75 12.5367 21.75 13.4224 21.7339 14.2223C21.7304 14.3935 21.5286 14.4838 21.3937 14.3784C20.3498 13.5635 18.8505 12.7499 17 12.7499C15.1495 12.7499 13.6502 13.5635 12.6063 14.3784C11.5585 15.1964 10.7793 16.179 10.3718 16.7495L10.3601 16.7654C10.2174 16.9594 9.75 17.5947 9.75 18.4999C9.75 19.405 10.2174 20.0403 10.3601 20.2344L10.3718 20.2502C10.4596 20.3732 10.5646 20.5152 10.6859 20.6706C11.073 21.1666 11.2665 21.4146 11.1837 21.5832C11.1009 21.7519 10.7993 21.7505 10.1959 21.7478C8.60867 21.7407 7.22844 21.7092 6.18802 21.5693C4.81137 21.3842 3.71911 20.9972 2.86091 20.139C2.00272 19.2808 1.61568 18.1885 1.43059 16.8119C1.24998 15.4684 1.24999 13.7477 1.25 11.5571V11.4427C1.24999 10.4849 1.24999 9.61681 1.26508 8.83093C1.27032 8.5581 1.27294 8.42168 1.36045 8.33584C1.44795 8.25 1.5856 8.25 1.8609 8.25H21.1391C21.4144 8.25 21.552 8.25 21.6396 8.33584Z',
  d12: 'M11.4432 1.25H11.5575C13.7482 1.24999 15.4689 1.24998 16.8123 1.43059C18.189 1.61568 19.2812 2.00272 20.1394 2.86091C20.9976 3.71911 21.3847 4.81137 21.5697 6.18802C21.5981 6.39867 21.6122 6.50399 21.5687 6.58807C21.547 6.63001 21.5132 6.66865 21.4745 6.69577C21.397 6.75012 21.2871 6.75012 21.0675 6.75012H1.93319C1.71354 6.75012 1.60371 6.75012 1.52618 6.69577C1.4875 6.66865 1.45371 6.63001 1.43199 6.58807C1.38845 6.50399 1.40261 6.39867 1.43093 6.18802C1.61602 4.81137 2.00306 3.71911 2.86125 2.86091C3.71945 2.00272 4.81171 1.61568 6.18836 1.43059C7.53178 1.24998 9.25247 1.24999 11.4432 1.25Z',
  d13: 'M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7C7.41421 11.25 7.75 11.5858 7.75 12C7.75 12.4142 7.41421 12.75 7 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d14: 'M20 13V2H2V20L10 20',
  d15: 'M2 7H20',
  d16: 'M6 15.5H8M10 11.5H16M6 11.5H8',
  d17: 'M17 22C19.7614 22 22 18.5 22 18.5C22 18.5 19.7614 15 17 15C14.2386 15 12 18.5 12 18.5C12 18.5 14.2386 22 17 22Z',
  d18: 'M23.25 18.5C23.25 18.5 22.9182 17.9735 22.8827 17.9212C22.8117 17.8167 22.7088 17.67 22.5771 17.4951C22.3148 17.1467 21.9339 16.6801 21.4603 16.2109C20.542 15.3012 19.1432 14.25 17.5 14.25C15.8568 14.25 14.458 15.3012 13.5397 16.2109C13.0661 16.6801 12.6852 17.1467 12.4229 17.4951C12.2912 17.67 12.1883 17.8167 12.1173 17.9212C12.0818 17.9735 11.75 18.5 11.75 18.5C11.75 18.5 12.0818 19.0265 12.1173 19.0788C12.1883 19.1833 12.2912 19.33 12.4229 19.5049C12.6852 19.8533 13.0661 20.3199 13.5397 20.7891C14.458 21.6988 15.8568 22.75 17.5 22.75C19.1432 22.75 20.542 21.6988 21.4603 20.7891C21.9339 20.3199 22.3148 19.8533 22.5771 19.5049C22.7088 19.33 22.8117 19.1833 22.8827 19.0788C22.9182 19.0265 23.25 18.5 23.25 18.5ZM17.4922 16.75C16.53 16.75 15.75 17.5335 15.75 18.5C15.75 19.4665 16.53 20.25 17.4922 20.25H17.5078C18.47 20.25 19.25 19.4665 19.25 18.5C19.25 17.5335 18.47 16.75 17.5078 16.75H17.4922Z',
  d19: 'M1.5 1.25C1.08579 1.25 0.75 1.58579 0.75 2V6.25H20.25V2C20.25 1.58579 19.9142 1.25 19.5 1.25H1.5Z',
  d20: 'M20.25 7.75H0.75V20C0.75 20.4142 1.08579 20.75 1.5 20.75L11.4908 20.75C11.3923 20.6274 11.3032 20.5122 11.224 20.4069C11.0761 20.2105 9.97656 18.5 9.97656 18.5L10.8761 17.0783C10.9591 16.9562 11.0761 16.7895 11.224 16.5931C11.5169 16.2039 11.9452 15.6786 12.4836 15.1452C13.4686 14.1694 15.2373 12.75 17.4995 12.75C18.5273 12.75 19.4532 13.043 20.25 13.4542V7.75ZM7.5 13H5.5V11.5H7.5V13ZM14.5 13H9.5V11.5H14.5V13ZM7.5 17H5.5V15.5H7.5V17Z',
} as const;

export const IconPropertyViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-stroke-rounded IconPropertyViewStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-duotone-rounded IconPropertyViewDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-twotone-rounded IconPropertyViewTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-solid-rounded IconPropertyViewSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-bulk-rounded IconPropertyViewBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPropertyViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-stroke-sharp IconPropertyViewStrokeSharp"
    >
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-view-solid-sharp IconPropertyViewSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPropertyView: TheIconSelfPack = {
  name: 'PropertyView',
  StrokeRounded: IconPropertyViewStrokeRounded,
  DuotoneRounded: IconPropertyViewDuotoneRounded,
  TwotoneRounded: IconPropertyViewTwotoneRounded,
  SolidRounded: IconPropertyViewSolidRounded,
  BulkRounded: IconPropertyViewBulkRounded,
  StrokeSharp: IconPropertyViewStrokeSharp,
  SolidSharp: IconPropertyViewSolidSharp,
};