import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5',
  d2: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d3: 'M9 10.3265L10.409 11.8131C11.159 12.6044 11.534 13 12 13C12.466 13 12.841 12.6044 13.591 11.8131L15 10.3265M12 12.9128L12 6',
  d4: 'M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22',
  d5: 'M11.5019 2H12.5019C16.2731 2 18.1587 2 19.3303 3.17157C20.5019 4.34315 20.5019 6.22876 20.5019 10V16.9286C17.3352 16.9524 10.2019 17 7.00187 17C4.4835 17 3.65804 18.0323 3.50187 18.8782V19.5C3.46637 19.3225 3.45961 19.1072 3.50187 18.8782V10C3.50187 6.22876 3.50187 4.34315 4.67345 3.17157C5.84502 2 7.73064 2 11.5019 2Z',
  d6: 'M11.4436 1.25H12.5564H12.5564H12.5564C14.3942 1.24999 15.8498 1.24997 16.989 1.40314C18.1614 1.56076 19.1104 1.89288 19.8588 2.64124C20.6071 3.38961 20.9392 4.33856 21.0969 5.51098C21.25 6.65018 21.25 8.10585 21.25 9.94359V17C21.25 17.082 21.2368 17.1609 21.2125 17.2348C21.1069 17.6738 20.7117 18 20.2402 18C19.4118 18 18.7402 18.6716 18.7402 19.5C18.7402 20.3284 19.4118 21 20.2402 21C20.7925 21 21.2402 21.4477 21.2402 22C21.2402 22.5339 20.8219 22.97 20.2951 22.9985C20.2811 22.9993 20.267 22.9997 20.2529 22.9999L20.2402 23H20.24H6.2099C4.2832 23 2.74609 21.4192 2.74609 19.5C2.74609 19.4439 2.74741 19.3882 2.75 19.3327V9.94357C2.74998 8.10582 2.74997 6.65019 2.90314 5.51098C3.06076 4.33856 3.39288 3.38961 4.14124 2.64124C4.88961 1.89288 5.83856 1.56076 7.01098 1.40314C8.15018 1.24997 9.60582 1.24999 11.4436 1.25H11.4436H11.4436ZM6.2099 18H17.0771C16.8611 18.4546 16.7402 18.9632 16.7402 19.5C16.7402 20.0368 16.8611 20.5454 17.0771 21H6.2099C5.41516 21 4.74609 20.3422 4.74609 19.5C4.74609 18.6578 5.41516 18 6.2099 18ZM15.308 10.8424C15.574 10.5418 15.5621 10.0671 15.2815 9.78216C15.1432 9.64169 14.9654 9.57355 14.7888 9.57659H13V6.25C13 5.69771 12.5523 5.25 12 5.25C11.4477 5.25 11 5.69771 11 6.25V9.57659H9.18854C9.01946 9.57951 8.85086 9.64769 8.71845 9.78216C8.43787 10.0671 8.426 10.5418 8.69195 10.8424L10.0373 12.3632C10.3612 12.7295 10.6514 13.0576 10.918 13.2875C11.2073 13.537 11.5561 13.75 12 13.75C12.4439 13.75 12.7927 13.537 13.082 13.2875C13.3486 13.0576 13.6388 12.7295 13.9627 12.3632L15.308 10.8424Z',
  d7: 'M12.5564 1.25H11.4436H11.4436C9.60583 1.24999 8.15019 1.24997 7.01098 1.40314C5.83856 1.56076 4.88961 1.89288 4.14124 2.64124C3.39288 3.38961 3.06076 4.33856 2.90314 5.51098C2.74997 6.65019 2.74998 8.10582 2.75 9.94357V19.3327C2.74741 19.3882 2.74609 19.4439 2.74609 19.5C2.74609 21.4192 4.2832 23 6.2099 23H20.24C20.2401 23 20.2401 23 20.2402 23C20.2445 23 20.2487 23 20.2529 22.9999C20.267 22.9997 20.2811 22.9993 20.2951 22.9985C20.8219 22.97 21.2402 22.5339 21.2402 22C21.2402 21.4477 20.7925 21 20.2402 21C19.4118 21 18.7402 20.3284 18.7402 19.5C18.7402 18.6716 19.4118 18 20.2402 18C20.7117 18 21.1069 17.6738 21.2125 17.2348C21.2368 17.1609 21.25 17.082 21.25 17V9.94359C21.25 8.10585 21.25 6.65018 21.0969 5.51098C20.9392 4.33856 20.6071 3.38961 19.8588 2.64124C19.1104 1.89288 18.1614 1.56076 16.989 1.40314C15.8498 1.24997 14.3942 1.24999 12.5564 1.25H12.5564ZM17.0771 18H6.2099C5.41516 18 4.74609 18.6578 4.74609 19.5C4.74609 20.3422 5.41516 21 6.2099 21H17.0771C16.8611 20.5454 16.7402 20.0368 16.7402 19.5C16.7402 18.9632 16.8611 18.4546 17.0771 18Z',
  d8: 'M15.2815 9.78216C15.5621 10.0671 15.574 10.5418 15.308 10.8424L13.9627 12.3632C13.6388 12.7295 13.3486 13.0576 13.082 13.2875C12.7927 13.537 12.4439 13.75 12 13.75C11.5561 13.75 11.2073 13.537 10.918 13.2875C10.6514 13.0576 10.3612 12.7295 10.0373 12.3632L8.69195 10.8424C8.426 10.5418 8.43787 10.0671 8.71846 9.78216C8.85087 9.64769 9.01946 9.57951 9.18854 9.57659H11V6.25C11 5.69772 11.4477 5.25 12 5.25C12.5523 5.25 13 5.69772 13 6.25V9.57659H14.7888C14.9654 9.57355 15.1432 9.64169 15.2815 9.78216Z',
  d9: 'M15 9.32653L12 12L9 9.32653M12 5L12 11.3965',
  d10: 'M18.4927 21.9954H7.51916C5.12219 22.0709 3.81134 21.3086 3.51891 19.1347M18.4927 21.9954H20.4732M18.4927 21.9954V15.9894M18.4927 15.9894H20.498V1.99951L6.40042 1.99965C4.48758 2.21335 3.34756 3.29053 3.5189 6.15229L3.51894 16.4341C3.48604 17.199 3.51906 18.2664 3.51891 19.1347M18.4927 15.9894L7.48792 15.9783C4.58607 15.858 3.59722 17.2178 3.51891 19.1347',
  d11: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75H21.2474V20.875H19.5105V17.125H21.2474L21.2501 1.25H6.5ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM12.749 10.327V5H11.249V10.327L9.49796 8.7666L8.5 9.88646L11.999 13.0046L15.498 9.88646L14.5 8.7666L12.749 10.327Z',
};

export const IconBookDownloadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-stroke-rounded IconBookDownloadStrokeRounded"
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

export const IconBookDownloadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-duotone-rounded IconBookDownloadDuotoneRounded"
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

export const IconBookDownloadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-twotone-rounded IconBookDownloadTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconBookDownloadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-solid-rounded IconBookDownloadSolidRounded"
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

export const IconBookDownloadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-bulk-rounded IconBookDownloadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookDownloadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-stroke-sharp IconBookDownloadStrokeSharp"
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

export const IconBookDownloadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-download-solid-sharp IconBookDownloadSolidSharp"
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

export const iconPackOfBookDownload: TheIconSelfPack = {
  name: 'BookDownload',
  StrokeRounded: IconBookDownloadStrokeRounded,
  DuotoneRounded: IconBookDownloadDuotoneRounded,
  TwotoneRounded: IconBookDownloadTwotoneRounded,
  SolidRounded: IconBookDownloadSolidRounded,
  BulkRounded: IconBookDownloadBulkRounded,
  StrokeSharp: IconBookDownloadStrokeSharp,
  SolidSharp: IconBookDownloadSolidSharp,
};