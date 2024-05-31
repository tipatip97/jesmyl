import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 16.9286V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V19.5',
  d2: 'M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21',
  d3: 'M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17',
  d4: 'M14.3877 6.84933C14.7057 6.63424 15.0883 6.50878 15.5 6.50878C16.6046 6.50878 17.5 7.41206 17.5 8.52633C17.5 9.62271 16.5957 10.54 15.5 10.54V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V10.665C8.33217 10.665 7.5 9.79515 7.5 8.52633C7.5 7.41206 8.39543 6.50878 9.5 6.50878C9.91166 6.50878 10.2943 6.63424 10.6123 6.84933C10.8857 6.06347 11.6276 5.5 12.5 5.5C13.3724 5.5 14.1143 6.06347 14.3877 6.84933ZM14.3877 6.84933C14.4604 7.05846 14.5 7.28335 14.5 7.51755',
  d5: 'M5.17157 3.17157C6.34315 2 8.22876 2 12 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V16C21 16.4714 21 16.7071 20.8536 16.8536C20.7071 17 20.4714 17 20 17H6.5C5.11929 17 4 18.1193 4 19.5V10C4 6.22876 4 4.34315 5.17157 3.17157ZM15.5 6.50878C16.6046 6.50878 17.5 7.41206 17.5 8.52633C17.5 9.62271 16.5957 10.54 15.5 10.54V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V10.665C8.33217 10.665 7.5 9.79515 7.5 8.52633C7.5 7.41206 8.39543 6.50878 9.5 6.50878C9.91166 6.50878 10.2943 6.63424 10.6123 6.84933C10.8857 6.06347 11.6276 5.5 12.5 5.5C13.3724 5.5 14.1143 6.06347 14.3877 6.84933C14.7057 6.63424 15.0883 6.50878 15.5 6.50878Z',
  d6: 'M3.25 19.5C3.25 17.567 4.817 16 6.75 16H20.75C21.3023 16 21.75 16.4477 21.75 17C21.75 17.5523 21.3023 18 20.75 18H6.75C5.92157 18 5.25 18.6716 5.25 19.5C5.25 20.3284 5.92157 21 6.75 21H20.75C21.3023 21 21.75 21.4477 21.75 22C21.75 22.5523 21.3023 23 20.75 23H6.75C4.817 23 3.25 21.433 3.25 19.5Z',
  d7: 'M17 19.5C17 17.567 18.567 16 20.5 16C21.0523 16 21.5 16.4477 21.5 17C21.5 17.5523 21.0523 18 20.5 18C19.6716 18 19 18.6716 19 19.5C19 20.3284 19.6716 21 20.5 21C21.0523 21 21.5 21.4477 21.5 22C21.5 22.5523 21.0523 23 20.5 23C18.567 23 17 21.433 17 19.5Z',
  d8: 'M11.9436 1.25H13.0564C14.8942 1.24999 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.10585 21.75 9.94359V16.9286C21.75 17.3428 21.4142 17.6786 21 17.6786H6.32592L5.59008 18.467L4.62404 19.916C4.44071 20.191 4.09898 20.3136 3.78266 20.2178C3.46634 20.122 3.25 19.8305 3.25 19.5V9.94356C3.24999 8.10582 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65018 1.24997 10.1058 1.24999 11.9436 1.25ZM15.5 6.50878C16.6046 6.50878 17.5 7.41207 17.5 8.52633C17.5 9.48681 16.806 10.3098 15.8973 10.4991C15.6922 10.5418 15.5897 10.5632 15.5448 10.6183C15.5 10.6735 15.5 10.7623 15.5 10.94V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V11.065C9.5 10.8862 9.5 10.7968 9.45365 10.7412C9.4073 10.6856 9.30552 10.6669 9.10196 10.6295C8.14761 10.4545 7.5 9.64564 7.5 8.52633C7.5 7.41207 8.39543 6.50878 9.5 6.50878C9.72694 6.50878 9.94505 6.54691 10.1484 6.61716C10.3863 6.69938 10.5053 6.74048 10.5698 6.71892C10.6343 6.69735 10.7043 6.59333 10.8444 6.38528C11.2042 5.851 11.8115 5.5 12.5 5.5C13.1885 5.5 13.7958 5.85099 14.1556 6.38528C14.2957 6.59333 14.3657 6.69735 14.4302 6.71892C14.4947 6.74048 14.6137 6.69938 14.8516 6.61716C15.055 6.54691 15.2731 6.50878 15.5 6.50878Z',
  d9: 'M6.75 23C4.817 23 3.25 21.433 3.25 19.5L3.25 9.94356V9.94355C3.24999 8.10581 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65018 1.24997 10.1058 1.24998 11.9436 1.25H13.0564C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.10585 21.75 9.94359V16.9286C21.75 16.9397 21.7498 16.9507 21.7493 16.9617C21.7498 16.9744 21.75 16.9872 21.75 17C21.75 17.5523 21.3023 18 20.75 18H20.5C19.6716 18 19 18.6716 19 19.5C19 20.3284 19.6716 21 20.5 21H20.75C21.3023 21 21.75 21.4477 21.75 22C21.75 22.5523 21.3023 23 20.75 23H20.5L6.75 23ZM17.3368 21H6.75C5.92157 21 5.25 20.3284 5.25 19.5C5.25 18.6716 5.92157 18 6.75 18H17.3368C17.1208 18.4546 17 18.9632 17 19.5C17 20.0368 17.1208 20.5454 17.3368 21Z',
  d10: 'M17.5 8.52633C17.5 7.41206 16.6046 6.50878 15.5 6.50878C15.2731 6.50878 15.055 6.5469 14.8516 6.61716C14.6137 6.69938 14.4947 6.74048 14.4302 6.71892C14.3657 6.69735 14.2957 6.59333 14.1556 6.38527C13.7958 5.85099 13.1885 5.5 12.5 5.5C11.8115 5.5 11.2042 5.85099 10.8444 6.38527C10.7043 6.59333 10.6343 6.69735 10.5698 6.71892C10.5053 6.74048 10.3863 6.69938 10.1484 6.61716C9.94505 6.5469 9.72694 6.50878 9.5 6.50878C8.39543 6.50878 7.5 7.41206 7.5 8.52633C7.5 9.64564 8.1476 10.4545 9.10196 10.6295C9.30552 10.6669 9.4073 10.6856 9.45365 10.7412C9.5 10.7968 9.5 10.8862 9.5 11.065V11.5C9.5 12.4428 9.5 12.9142 9.79289 13.2071C10.0858 13.5 10.5572 13.5 11.5 13.5H13.5C14.4428 13.5 14.9142 13.5 15.2071 13.2071C15.5 12.9142 15.5 12.4428 15.5 11.5V10.94C15.5 10.7623 15.5 10.6735 15.5448 10.6183C15.5897 10.5632 15.6922 10.5418 15.8973 10.4991C16.806 10.3098 17.5 9.48681 17.5 8.52633Z',
  d11: 'M3.51693 19.0986V6.15635C3.34571 3.2928 4.485 2.21495 6.39664 2.00112L20.4854 2.00098V15.9996L18.4855 16.0099M3.51693 19.0986C3.51693 20.7524 4.83897 21.999 6.49074 21.999H18.4855M3.51693 19.0986C3.51693 17.4447 4.83897 16.0099 6.49074 16.0099H18.4855M18.4855 16.0099V21.999M20.501 21.999H18.4855',
  d12: 'M13.8929 6.40409C14.5152 5.81182 15.4845 6.01928 15.8566 6.20078C16.9323 6.72549 17.0976 7.85953 16.9651 8.38001C16.8151 9.42917 15.8211 10.008 15.1002 10.0362C15.0435 10.0385 14.9966 10.0835 14.9966 10.1402V13.0099H9.01252V10.2497C9.01252 10.1898 8.95995 10.1436 8.90013 10.1466C7.53616 10.2137 6.6152 8.5226 7.13208 7.29368C7.76856 5.78043 9.24295 5.83096 10.0058 6.26628C10.0596 6.29698 10.1297 6.27636 10.1573 6.2209C10.8641 4.80106 12.1594 4.96045 12.5233 5.07689C13.3744 5.35572 13.7379 5.86616 13.8929 6.40409ZM13.8929 6.40409C14 6.77578 14.0075 7.1606 14.0075 7.4912',
  d13: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75L21.2474 22.75V20.875H19.5105V17.125L21.2474 17.125L21.2501 1.25L6.5 1.25ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM15 6.00878C16.1046 6.00878 17 6.91206 17 8.02633C17 9.12271 16.0957 10.04 15 10.04L15 13L9 13L9 10.165C7.83217 10.165 7 9.29515 7 8.02633C7 6.91206 7.89543 6.00878 9 6.00878C9.41166 6.00878 9.79427 6.13424 10.1123 6.34933C10.3857 5.56347 11.1276 5 12 5C12.8724 5 13.6143 5.56347 13.8877 6.34933C14.2057 6.13424 14.5883 6.00878 15 6.00878Z',
} as const;

export const IconCookBookStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-stroke-rounded IconCookBookStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCookBookDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-duotone-rounded IconCookBookDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconCookBookTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-twotone-rounded IconCookBookTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCookBookSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-solid-rounded IconCookBookSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconCookBookBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-bulk-rounded IconCookBookBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCookBookStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-stroke-sharp IconCookBookStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCookBookSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cook-book-solid-sharp IconCookBookSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCookBook: TheIconSelfPack = {
  name: 'CookBook',
  StrokeRounded: IconCookBookStrokeRounded,
  DuotoneRounded: IconCookBookDuotoneRounded,
  TwotoneRounded: IconCookBookTwotoneRounded,
  SolidRounded: IconCookBookSolidRounded,
  BulkRounded: IconCookBookBulkRounded,
  StrokeSharp: IconCookBookStrokeSharp,
  SolidSharp: IconCookBookSolidSharp,
};