import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 9C4 5.70017 4 4.05025 5.17157 3.02513C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.02513C20 4.05025 20 5.70017 20 9V15C20 18.2998 20 19.9497 18.8284 20.9749C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.9749C4 19.9497 4 18.2998 4 15V9Z',
  d2: 'M12.6287 14.2468C12.4601 14.4092 12.2347 14.5 12.0001 14.5C11.7655 14.5 11.5401 14.4092 11.3715 14.2468C9.82715 12.7504 7.75759 11.0788 8.76685 8.65187C9.31255 7.33966 10.6225 6.5 12.0001 6.5C13.3777 6.5 14.6876 7.33966 15.2333 8.65187C16.2413 11.0757 14.1768 12.7555 12.6287 14.2468Z',
  d3: 'M12 10H12.009',
  d4: 'M11 19H13',
  d5: 'M5.17157 3.02513C4 4.05025 4 5.70017 4 9V15C4 18.2998 4 19.9497 5.17157 20.9749C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.9749C20 19.9497 20 18.2998 20 15V9C20 5.70017 20 4.05025 18.8284 3.02513C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.02513ZM12.0001 14.5C12.2347 14.5 12.4601 14.4092 12.6287 14.2468C12.7465 14.1334 12.8672 14.0188 12.9893 13.903C14.4731 12.4957 16.1646 10.8913 15.2333 8.65187C14.6876 7.33966 13.3777 6.5 12.0001 6.5C10.6225 6.5 9.31255 7.33966 8.76685 8.65187C7.83932 10.8823 9.51218 12.4747 10.9879 13.8795C11.1179 14.0033 11.2464 14.1256 11.3715 14.2468C11.5401 14.4092 11.7655 14.5 12.0001 14.5Z',
  d6: 'M12.0501 1.25C13.8933 1.24999 15.3436 1.24998 16.4767 1.38328C17.6325 1.51924 18.5721 1.80425 19.3223 2.46069C20.0869 3.12975 20.4326 3.98951 20.5949 5.04565C20.75 6.05567 20.75 7.34069 20.75 8.93745V15.0626C20.75 16.6593 20.75 17.9443 20.5949 18.9544C20.4326 20.0105 20.0869 20.8703 19.3223 21.5393C18.5721 22.1957 17.6325 22.4808 16.4767 22.6167C15.3436 22.75 13.8933 22.75 12.0501 22.75H11.9499C10.1067 22.75 8.65638 22.75 7.52329 22.6167C6.36752 22.4808 5.42792 22.1957 4.6777 21.5393C3.91306 20.8703 3.56743 20.0105 3.40515 18.9544C3.24995 17.9443 3.24997 16.6593 3.25 15.0625V15.0625V8.93747V8.93745C3.24997 7.3407 3.24995 6.05567 3.40515 5.04565C3.56743 3.98951 3.91306 3.12975 4.6777 2.46069C5.42792 1.80425 6.36752 1.51924 7.52329 1.38328C8.65637 1.24998 10.1067 1.24999 11.9499 1.25H11.9499H12.0501H12.0501ZM12.0005 5.75C10.3272 5.75 8.73954 6.76527 8.07473 8.36388C7.45242 9.86031 7.79999 11.145 8.48118 12.204C9.02445 13.0486 9.81778 13.8025 10.4889 14.4402C10.6143 14.5594 10.7355 14.6745 10.8499 14.7854L10.8516 14.787C11.1603 15.0843 11.5723 15.25 12.0005 15.25C12.4287 15.25 12.8407 15.0843 13.1494 14.7869C13.2579 14.6824 13.3723 14.5741 13.4904 14.4623L13.4912 14.4615L13.4912 14.4615C14.1689 13.8199 14.9722 13.0593 15.5211 12.2042C16.2014 11.1442 16.5477 9.8585 15.9262 8.36388C15.2614 6.76527 13.6737 5.75 12.0005 5.75ZM11.9952 8.5C11.1705 8.5 10.502 9.17157 10.502 10C10.502 10.8284 11.1705 11.5 11.9952 11.5H12.0087C12.8334 11.5 13.502 10.8284 13.502 10C13.502 9.17157 12.8334 8.5 12.0087 8.5H11.9952ZM11 18.25C10.5858 18.25 10.25 18.5858 10.25 19C10.25 19.4142 10.5858 19.75 11 19.75H13C13.4142 19.75 13.75 19.4142 13.75 19C13.75 18.5858 13.4142 18.25 13 18.25H11Z',
  d7: 'M12.0501 1.25C13.8933 1.24999 15.3436 1.24998 16.4767 1.38328C17.6325 1.51924 18.5721 1.80425 19.3223 2.46069C20.0869 3.12975 20.4326 3.98951 20.5949 5.04565C20.75 6.05567 20.75 7.34069 20.75 8.93745V15.0626C20.75 16.6593 20.75 17.9443 20.5949 18.9544C20.4326 20.0105 20.0869 20.8703 19.3223 21.5393C18.5721 22.1957 17.6325 22.4808 16.4767 22.6167C15.3436 22.75 13.8933 22.75 12.0501 22.75H11.9499C10.1067 22.75 8.65638 22.75 7.52329 22.6167C6.36752 22.4808 5.42792 22.1957 4.6777 21.5393C3.91306 20.8703 3.56743 20.0105 3.40515 18.9544C3.24995 17.9443 3.24997 16.6593 3.25 15.0625V15.0625V8.93747V8.93745C3.24997 7.3407 3.24995 6.05567 3.40515 5.04565C3.56743 3.98951 3.91306 3.12975 4.6777 2.46069C5.42792 1.80425 6.36752 1.51924 7.52329 1.38328C8.65637 1.24998 10.1067 1.24999 11.9499 1.25H11.9499H12.0501H12.0501Z',
  d8: 'M12.0005 5.75C10.3272 5.75 8.73954 6.76527 8.07473 8.36388C7.45242 9.86031 7.8 11.145 8.48118 12.204C9.02445 13.0486 9.81778 13.8025 10.4889 14.4402C10.6143 14.5594 10.7355 14.6745 10.8499 14.7854L10.8516 14.787C11.1603 15.0843 11.5723 15.25 12.0005 15.25C12.4287 15.25 12.8407 15.0843 13.1494 14.7869C13.2581 14.6822 13.3728 14.5737 13.4912 14.4615C14.1689 13.8199 14.9722 13.0593 15.5211 12.2042C16.2014 11.1442 16.5477 9.8585 15.9262 8.36388C15.2614 6.76527 13.6737 5.75 12.0005 5.75ZM11.9952 8.5C11.1705 8.5 10.502 9.17157 10.502 10C10.502 10.8284 11.1705 11.5 11.9952 11.5H12.0087C12.8334 11.5 13.502 10.8284 13.502 10C13.502 9.17157 12.8334 8.5 12.0087 8.5H11.9952Z',
  d9: 'M10.25 19C10.25 18.5858 10.5858 18.25 11 18.25H13C13.4142 18.25 13.75 18.5858 13.75 19C13.75 19.4142 13.4142 19.75 13 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19Z',
  d10: 'M4 22H20V2H4V22Z',
  d11: 'M15.5 10.0004C15.5 12.8004 12 14.4004 12 14.4004C12 14.4004 8.5 12.8004 8.5 10.0004C8.5 8.01217 10.067 6.40039 12 6.40039C13.933 6.40039 15.5 8.01217 15.5 10.0004Z',
  d12: 'M10.5 19H13.5',
  d13: 'M10.5 10C10.5 9.17157 11.1686 8.5 11.9933 8.5H12.0067C12.8314 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8314 11.5 12.0067 11.5H11.9933C11.1686 11.5 10.5 10.8284 10.5 10Z',
  d14: 'M3.25 2C3.25 1.58579 3.58579 1.25 4 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V2ZM12 15.2246C12 15.2246 11.5602 15.0202 11.5066 14.9926C11.3995 14.9376 11.2499 14.8571 11.0718 14.752C10.7172 14.5426 10.2413 14.2303 9.76191 13.8193C8.82532 13.0166 7.75 11.7268 7.75 9.9999C7.75 7.61752 9.63301 5.6499 12 5.6499C14.367 5.6499 16.25 7.61752 16.25 9.9999C16.25 11.7268 15.1747 13.0166 14.2381 13.8193C13.7587 14.2303 13.2828 14.5426 12.9282 14.752C12.7501 14.8571 12.6005 14.9376 12.4934 14.9926C12.4398 15.0202 12 15.2246 12 15.2246ZM10.5 18.25V19.75H13.5V18.25H10.5Z',
} as const;

export const IconMobileNavigator01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-stroke-rounded IconMobileNavigator01StrokeRounded"
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

export const IconMobileNavigator01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-duotone-rounded IconMobileNavigator01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMobileNavigator01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-twotone-rounded IconMobileNavigator01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMobileNavigator01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-solid-rounded IconMobileNavigator01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileNavigator01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-bulk-rounded IconMobileNavigator01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileNavigator01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-stroke-sharp IconMobileNavigator01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileNavigator01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-01-solid-sharp IconMobileNavigator01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMobileNavigator01: TheIconSelfPack = {
  name: 'MobileNavigator01',
  StrokeRounded: IconMobileNavigator01StrokeRounded,
  DuotoneRounded: IconMobileNavigator01DuotoneRounded,
  TwotoneRounded: IconMobileNavigator01TwotoneRounded,
  SolidRounded: IconMobileNavigator01SolidRounded,
  BulkRounded: IconMobileNavigator01BulkRounded,
  StrokeSharp: IconMobileNavigator01StrokeSharp,
  SolidSharp: IconMobileNavigator01SolidSharp,
};