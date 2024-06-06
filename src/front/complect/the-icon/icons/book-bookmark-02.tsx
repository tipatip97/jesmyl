import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5',
  d2: 'M8 3L8 6.69003C8 7.43013 8 7.80019 8.23811 7.94371C8.24836 7.94989 8.25884 7.95571 8.26951 7.96115C8.51756 8.08746 8.84124 7.89707 9.4886 7.51629C9.97254 7.23164 10.2145 7.08931 10.4815 7.08447C10.4938 7.08425 10.5062 7.08425 10.5185 7.08447C10.7855 7.08931 11.0275 7.23164 11.5114 7.51629C12.1588 7.89707 12.4824 8.08747 12.7305 7.96115C12.7412 7.95571 12.7516 7.94989 12.7619 7.94372C13 7.80019 13 7.43013 13 6.69003V3',
  d3: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d4: 'M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22',
  d5: 'M13 2V6.68992C13 7.43003 13 7.80008 12.7619 7.94361C12.7516 7.94979 12.7412 7.9556 12.7305 7.96104C12.4824 8.08736 12.1588 7.89697 11.5114 7.51619C11.0275 7.23153 10.7855 7.0892 10.5185 7.08437C10.5062 7.08414 10.4938 7.08414 10.4815 7.08437C10.2145 7.0892 9.97254 7.23153 9.4886 7.51619C8.84124 7.89697 8.51756 8.08736 8.26951 7.96104C8.25883 7.9556 8.24836 7.94979 8.23811 7.94361C8 7.80008 8 7.43003 8 6.68992V2.06122C6.41985 2.16383 5.40677 2.43814 4.67345 3.17147C3.50187 4.34304 3.50187 6.22866 3.50187 9.99989V18.8781C3.45961 19.1071 3.46637 19.3224 3.50187 19.4999V18.8781C3.65804 18.0322 4.4835 16.9999 7.00187 16.9999C10.2019 16.9999 17.3352 16.9523 20.5019 16.9285V9.99989C20.5019 6.22866 20.5019 4.34304 19.3303 3.17147C18.2115 2.05265 16.4415 2.00227 13 2Z',
  d6: 'M11.4436 1.25H12.5564H12.5564H12.5564C14.3942 1.24999 15.8498 1.24997 16.989 1.40314C18.1614 1.56076 19.1104 1.89288 19.8588 2.64124C20.6071 3.38961 20.9392 4.33856 21.0969 5.51098C21.25 6.65018 21.25 8.10585 21.25 9.94359V17C21.25 17.082 21.2368 17.1609 21.2125 17.2348C21.1069 17.6738 20.7117 18 20.2402 18C19.4118 18 18.7402 18.6716 18.7402 19.5C18.7402 20.3284 19.4118 21 20.2402 21C20.7925 21 21.2402 21.4477 21.2402 22C21.2402 22.5339 20.8219 22.97 20.2951 22.9985C20.2811 22.9993 20.267 22.9997 20.2529 22.9999L20.2402 23H20.24H6.2099C4.2832 23 2.74609 21.4192 2.74609 19.5C2.74609 19.4439 2.74741 19.3882 2.75 19.3327V9.94357C2.74998 8.10582 2.74997 6.65019 2.90314 5.51098C3.06076 4.33856 3.39288 3.38961 4.14124 2.64124C4.88961 1.89288 5.83856 1.56076 7.01098 1.40314C8.15018 1.24997 9.60582 1.24999 11.4436 1.25H11.4436H11.4436ZM6.2099 18H17.0771C16.8611 18.4546 16.7402 18.9632 16.7402 19.5C16.7402 20.0368 16.8611 20.5454 17.0771 21H6.2099C5.41516 21 4.74609 20.3422 4.74609 19.5C4.74609 18.6578 5.41516 18 6.2099 18ZM8 3.6C8 3.1036 8.1036 3 8.6 3H12.4C12.8964 3 13 3.1036 13 3.6V6.69003C13 7.43013 13 7.80019 12.7619 7.94372C12.5135 8.09344 12.1866 7.91347 11.5114 7.51629C11.0966 7.27228 10.7986 7.14993 10.5 7.15004C10.2023 7.15014 9.90398 7.27197 9.4886 7.51629C8.81337 7.91347 8.48647 8.09343 8.23811 7.94372C8 7.80019 8 7.43013 8 6.69003V3.6Z',
  d7: 'M12.5564 1.25H11.4436H11.4436C9.60583 1.24999 8.15019 1.24997 7.01098 1.40314C5.83856 1.56076 4.88961 1.89288 4.14124 2.64124C3.39288 3.38961 3.06076 4.33856 2.90314 5.51098C2.74997 6.65019 2.74998 8.10582 2.75 9.94357V19.3327C2.74741 19.3882 2.74609 19.4439 2.74609 19.5C2.74609 21.4192 4.2832 23 6.2099 23H20.24C20.2401 23 20.2401 23 20.2402 23C20.2445 23 20.2487 23 20.2529 22.9999C20.267 22.9997 20.2811 22.9993 20.2951 22.9985C20.8219 22.97 21.2402 22.5339 21.2402 22C21.2402 21.4477 20.7925 21 20.2402 21C19.4118 21 18.7402 20.3284 18.7402 19.5C18.7402 18.6716 19.4118 18 20.2402 18C20.7117 18 21.1069 17.6738 21.2125 17.2348C21.2368 17.1609 21.25 17.082 21.25 17V9.94359C21.25 8.10585 21.25 6.65018 21.0969 5.51098C20.9392 4.33856 20.6071 3.38961 19.8588 2.64124C19.1104 1.89288 18.1614 1.56076 16.989 1.40314C15.8498 1.24997 14.3942 1.24999 12.5564 1.25H12.5564ZM17.0771 18H6.2099C5.41516 18 4.74609 18.6578 4.74609 19.5C4.74609 20.3422 5.41516 21 6.2099 21H17.0771C16.8611 20.5454 16.7402 20.0368 16.7402 19.5C16.7402 18.9632 16.8611 18.4546 17.0771 18Z',
  d8: 'M8.6 3C8.1036 3 8 3.1036 8 3.6V6.69003C8 7.43013 8 7.80019 8.23811 7.94372C8.48647 8.09343 8.81337 7.91347 9.4886 7.51629C9.90398 7.27197 10.2023 7.15014 10.5 7.15004C10.7986 7.14993 11.0966 7.27228 11.5114 7.51629C12.1866 7.91347 12.5135 8.09344 12.7619 7.94372C13 7.80019 13 7.43013 13 6.69003V3.6C13 3.1036 12.8964 3 12.4 3H8.6Z',
  d9: 'M8 2V8L10.5 7L13 8V2',
  d10: 'M18.4927 21.9959H7.51916C5.12219 22.0714 3.81134 21.3091 3.51891 19.1352M18.4927 21.9959H20.4732M18.4927 21.9959V15.9899M18.4927 15.9899H20.498V2L6.40042 2.00014C4.48758 2.21384 3.34756 3.29102 3.5189 6.15278L3.51894 16.4346C3.48604 17.1995 3.51906 18.2669 3.51891 19.1352M18.4927 15.9899L7.48792 15.9788C4.58607 15.8585 3.59722 17.2183 3.51891 19.1352',
  d11: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75H21.2474V20.875H19.5105V17.125H21.2474L21.2501 1.25H6.5ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM8 3V8L10.5 7L13 8V3H8Z',
};

export const IconBookBookmark02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-stroke-rounded IconBookBookmark02StrokeRounded"
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
        strokeLinecap="round" 
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

export const IconBookBookmark02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-duotone-rounded IconBookBookmark02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-twotone-rounded IconBookBookmark02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-solid-rounded IconBookBookmark02SolidRounded"
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

export const IconBookBookmark02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-bulk-rounded IconBookBookmark02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookBookmark02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-stroke-sharp IconBookBookmark02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-02-solid-sharp IconBookBookmark02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookBookmark02: TheIconSelfPack = {
  name: 'BookBookmark02',
  StrokeRounded: IconBookBookmark02StrokeRounded,
  DuotoneRounded: IconBookBookmark02DuotoneRounded,
  TwotoneRounded: IconBookBookmark02TwotoneRounded,
  SolidRounded: IconBookBookmark02SolidRounded,
  BulkRounded: IconBookBookmark02BulkRounded,
  StrokeSharp: IconBookBookmark02StrokeSharp,
  SolidSharp: IconBookBookmark02SolidSharp,
};