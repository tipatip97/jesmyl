import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 9C4 5.70017 4 4.05025 5.17157 3.02513C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.02513C20 4.05025 20 5.70017 20 9V15C20 18.2998 20 19.9497 18.8284 20.9749C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.9749C4 19.9497 4 18.2998 4 15V9Z',
  d2: 'M12 10H12.009',
  d3: 'M12 6.5C13.8941 6.5 15.5 8.11319 15.5 10.0703C15.5 12.0586 13.868 13.4539 12.3605 14.4027C12.2506 14.4665 12.1264 14.5 12 14.5C11.8736 14.5 11.7494 14.4665 11.6395 14.4027C10.1348 13.4446 8.5 12.0655 8.5 10.0703C8.5 8.11319 10.1059 6.5 12 6.5Z',
  d4: 'M11 19H13',
  d5: 'M5.17157 3.02513C4 4.05025 4 5.70017 4 9V15C4 18.2998 4 19.9497 5.17157 20.9749C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.9749C20 19.9497 20 18.2998 20 15V9C20 5.70017 20 4.05025 18.8284 3.02513C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.02513ZM15.5 10.0703C15.5 8.11319 13.8941 6.5 12 6.5C10.1059 6.5 8.5 8.11319 8.5 10.0703C8.5 12.0655 10.1348 13.4446 11.6395 14.4027C11.7494 14.4665 11.8736 14.5 12 14.5C12.1264 14.5 12.2506 14.4665 12.3605 14.4027C13.868 13.4539 15.5 12.0586 15.5 10.0703Z',
  d6: 'M12.0501 1.25C13.8933 1.24999 15.3436 1.24998 16.4767 1.38328C17.6325 1.51924 18.5721 1.80425 19.3223 2.46069C20.0869 3.12975 20.4326 3.98951 20.5949 5.04565C20.75 6.05567 20.75 7.34069 20.75 8.93745V15.0626C20.75 16.6593 20.75 17.9443 20.5949 18.9544C20.4326 20.0105 20.0869 20.8703 19.3223 21.5393C18.5721 22.1957 17.6325 22.4808 16.4767 22.6167C15.3436 22.75 13.8933 22.75 12.0501 22.75H11.9499C10.1067 22.75 8.65638 22.75 7.52329 22.6167C6.36752 22.4808 5.42792 22.1957 4.6777 21.5393C3.91306 20.8703 3.56743 20.0105 3.40515 18.9544C3.24995 17.9443 3.24997 16.6593 3.25 15.0625V15.0625V8.93747V8.93745C3.24997 7.3407 3.24995 6.05567 3.40515 5.04565C3.56743 3.98951 3.91306 3.12975 4.6777 2.46069C5.42792 1.80425 6.36752 1.51924 7.52329 1.38328C8.65637 1.24998 10.1067 1.24999 11.9499 1.25H11.9499H12.0501H12.0501ZM12 5.75C9.68106 5.75 7.75 7.70968 7.75 10.0703C7.75 12.503 9.73463 14.0789 11.2367 15.0353L11.2496 15.0436L11.2629 15.0513C11.4866 15.1811 11.7406 15.25 12 15.25C12.2594 15.25 12.5134 15.1811 12.7371 15.0513L12.7487 15.0446L12.76 15.0374C14.2714 14.0861 16.25 12.4949 16.25 10.0703C16.25 7.70968 14.3189 5.75 12 5.75ZM11.9933 8.5C11.1686 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1686 11.5 11.9933 11.5H12.0067C12.8314 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8314 8.5 12.0067 8.5H11.9933ZM11 18.25C10.5858 18.25 10.25 18.5858 10.25 19C10.25 19.4142 10.5858 19.75 11 19.75H13C13.4142 19.75 13.75 19.4142 13.75 19C13.75 18.5858 13.4142 18.25 13 18.25H11Z',
  d7: 'M12.0501 1.25C13.8933 1.24999 15.3436 1.24998 16.4767 1.38328C17.6325 1.51924 18.5721 1.80425 19.3223 2.46069C20.0869 3.12975 20.4326 3.98951 20.5949 5.04565C20.75 6.05567 20.75 7.34069 20.75 8.93745V15.0626C20.75 16.6593 20.75 17.9443 20.5949 18.9544C20.4326 20.0105 20.0869 20.8703 19.3223 21.5393C18.5721 22.1957 17.6325 22.4808 16.4767 22.6167C15.3436 22.75 13.8933 22.75 12.0501 22.75H11.9499C10.1067 22.75 8.65638 22.75 7.52329 22.6167C6.36752 22.4808 5.42792 22.1957 4.6777 21.5393C3.91306 20.8703 3.56743 20.0105 3.40515 18.9544C3.24995 17.9443 3.24997 16.6593 3.25 15.0625V15.0625V8.93747V8.93745C3.24997 7.3407 3.24995 6.05567 3.40515 5.04565C3.56743 3.98951 3.91306 3.12975 4.6777 2.46069C5.42792 1.80425 6.36752 1.51924 7.52329 1.38328C8.65637 1.24998 10.1067 1.24999 11.9499 1.25H11.9499H12.0501H12.0501Z',
  d8: 'M12 5.75C9.68105 5.75 7.75 7.70968 7.75 10.0703C7.75 12.503 9.73463 14.0789 11.2367 15.0353L11.2496 15.0436L11.2629 15.0513C11.4866 15.1811 11.7406 15.25 12 15.25C12.2594 15.25 12.5134 15.1811 12.7371 15.0513L12.7487 15.0446L12.76 15.0374C14.2714 14.0861 16.25 12.4949 16.25 10.0703C16.25 7.70968 14.3189 5.75 12 5.75ZM11.9933 8.5C11.1686 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1686 11.5 11.9933 11.5H12.0067C12.8314 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8314 8.5 12.0067 8.5H11.9933Z',
  d9: 'M10.25 19C10.25 18.5858 10.5858 18.25 11 18.25H13C13.4142 18.25 13.75 18.5858 13.75 19C13.75 19.4142 13.4142 19.75 13 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19Z',
  d10: 'M4 22H20V2H4V22Z',
  d11: 'M10.5 19H13.5',
  d12: 'M12 6.5C10.067 6.5 8.5 7.94714 8.5 9.73228C8.5 10.753 8.9375 11.5467 9.8125 12.2556C10.4292 12.7553 11.5514 13.8272 12 14.5C12.4713 13.8406 13.5708 12.7553 14.1875 12.2556C15.0625 11.5467 15.5 10.753 15.5 9.73228C15.5 7.94714 13.933 6.5 12 6.5Z',
  d13: 'M3.25 2C3.25 1.58579 3.58579 1.25 4 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V2ZM13.5 18.25V19.75H10.5V18.25H13.5ZM12 5.75C9.7101 5.75 7.75 7.47785 7.75 9.73228C7.75 11.0222 8.32597 12.0165 9.34036 12.8384C9.62433 13.0684 10.0394 13.4429 10.4384 13.8427C10.8454 14.2505 11.1945 14.6439 11.376 14.9161C11.5127 15.1211 11.7414 15.2459 11.9878 15.2499C12.2342 15.2539 12.4669 15.1366 12.6102 14.9361C13.0296 14.3493 14.075 13.312 14.6596 12.8384C15.674 12.0165 16.25 11.0222 16.25 9.73228C16.25 7.47785 14.2899 5.75 12 5.75Z',
  d14: 'M10.5 10C10.5 9.17157 11.1686 8.5 11.9933 8.5H12.0067C12.8314 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8314 11.5 12.0067 11.5H11.9933C11.1686 11.5 10.5 10.8284 10.5 10Z',
};

export const IconMobileNavigator02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-stroke-rounded IconMobileNavigator02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileNavigator02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-duotone-rounded IconMobileNavigator02DuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
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

export const IconMobileNavigator02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-twotone-rounded IconMobileNavigator02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMobileNavigator02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-solid-rounded IconMobileNavigator02SolidRounded"
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

export const IconMobileNavigator02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-bulk-rounded IconMobileNavigator02BulkRounded"
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

export const IconMobileNavigator02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-stroke-sharp IconMobileNavigator02StrokeSharp"
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
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileNavigator02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-navigator-02-solid-sharp IconMobileNavigator02SolidSharp"
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

export const iconPackOfMobileNavigator02: TheIconSelfPack = {
  name: 'MobileNavigator02',
  StrokeRounded: IconMobileNavigator02StrokeRounded,
  DuotoneRounded: IconMobileNavigator02DuotoneRounded,
  TwotoneRounded: IconMobileNavigator02TwotoneRounded,
  SolidRounded: IconMobileNavigator02SolidRounded,
  BulkRounded: IconMobileNavigator02BulkRounded,
  StrokeSharp: IconMobileNavigator02StrokeSharp,
  SolidSharp: IconMobileNavigator02SolidSharp,
};