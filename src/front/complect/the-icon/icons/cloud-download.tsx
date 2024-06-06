import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101',
  d2: 'M12 21L12 13M12 21C11.2998 21 9.99153 19.0057 9.5 18.5M12 21C12.7002 21 14.0085 19.0057 14.5 18.5',
  d3: 'M17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273L18 18C20.25 17.7508 22 15.8398 22 13.5193C22 11.0294 19.9853 9.01101 17.5 9.01101L17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009Z',
  d4: 'M13.0059 13.25C13.0059 12.6977 12.5581 12.25 12.0059 12.25C11.4536 12.25 11.0059 12.6977 11.0059 13.25L11.0059 17.75L10.4116 17.75C10.236 17.7499 10.0203 17.7497 9.84387 17.7718L9.84053 17.7722C9.71408 17.788 9.13804 17.8598 8.86368 18.4254C8.58872 18.9923 8.89065 19.4924 8.95597 19.6006L8.95841 19.6046C9.05062 19.7576 9.18477 19.9285 9.29511 20.0691L9.31885 20.0993C9.61348 20.4752 9.99545 20.9594 10.3759 21.3504C10.5657 21.5455 10.783 21.7467 11.0139 21.9056C11.2191 22.0468 11.5693 22.25 12 22.25C12.4307 22.25 12.7809 22.0468 12.9861 21.9056C13.217 21.7467 13.4343 21.5455 13.6241 21.3504C14.0046 20.9594 14.3865 20.4752 14.6812 20.0993L14.7049 20.0691C14.8152 19.9285 14.9494 19.7577 15.0416 19.6046L15.044 19.6006C15.1093 19.4924 15.4113 18.9922 15.1363 18.4254C14.862 17.8598 14.2859 17.788 14.1595 17.7722L14.1561 17.7718C13.9797 17.7497 13.764 17.7499 13.5884 17.75L13.0059 17.75L13.0059 13.25Z',
  d5: 'M1.25 12.5C1.25 9.85826 3.03106 7.6332 5.45825 6.95919C5.65424 6.90476 5.75224 6.87755 5.80872 6.8197C5.8652 6.76184 5.88991 6.66384 5.93931 6.46783C6.62272 3.75653 9.07671 1.75 12 1.75C15.2149 1.75 17.8628 4.17731 18.2112 7.29924C18.2385 7.54459 18.2522 7.6673 18.3147 7.73828C18.3772 7.80927 18.4989 7.8388 18.7423 7.89786C21.0422 8.45589 22.75 10.5285 22.75 13C22.75 15.8995 20.3995 18.25 17.5 18.25H17.4401C17.2205 18.25 17.1108 18.25 17.0353 18.1998C16.9598 18.1496 16.9084 18.0271 16.8057 17.7821C16.6794 17.4808 16.4916 17.1994 16.2425 16.9573C15.911 16.6351 15.5132 16.4233 15.0944 16.3213C14.7836 16.2455 14.6282 16.2076 14.5641 16.1261C14.5 16.0445 14.5 15.913 14.5 15.6499V13.25C14.5 11.8693 13.3807 10.75 12 10.75C10.6193 10.75 9.5 11.8693 9.5 13.25L9.5 15.6499C9.5 15.913 9.5 16.0445 9.43591 16.1261C9.37183 16.2076 9.21643 16.2455 8.90563 16.3213C8.48685 16.4233 8.08898 16.6351 7.75753 16.9573C7.50734 17.2005 7.29651 17.4833 7.15528 17.7861C7.03878 18.0359 6.98053 18.1608 6.89891 18.2081C6.81728 18.2554 6.7148 18.2467 6.50984 18.2294C3.56363 17.9807 1.25 15.5105 1.25 12.5Z',
  d6: 'M12 13L12 20.4549M9 18L12 21L15 18',
  d7: 'M12.0001 22L15.7072 18.2929L14.293 16.8787L13.0001 18.1716V12.5858H11.0001L11.0001 18.1716L9.70718 16.8787L8.29297 18.2929L12.0001 22Z',
  d8: 'M5.853 7.11454C3.22664 7.64643 1.25 9.96699 1.25 12.75C1.25 15.6494 3.39592 18.0475 6.18613 18.4428L9.5003 15.1287L9.5003 11.25H14.5003V15.1287L17.8287 18.4571L17.7939 18.4919C20.5567 18.3395 22.75 16.0509 22.75 13.25C22.75 10.6041 20.7927 8.41534 18.2469 8.05273C18.1428 4.69224 15.3858 2 12 2C8.93585 2 6.38731 4.20456 5.853 7.11454Z',
};

export const IconCloudDownloadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-stroke-rounded IconCloudDownloadStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCloudDownloadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-duotone-rounded IconCloudDownloadDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCloudDownloadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-twotone-rounded IconCloudDownloadTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudDownloadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-solid-rounded IconCloudDownloadSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudDownloadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-bulk-rounded IconCloudDownloadBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudDownloadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-stroke-sharp IconCloudDownloadStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudDownloadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-download-solid-sharp IconCloudDownloadSolidSharp"
    >
      <path 
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

export const iconPackOfCloudDownload: TheIconSelfPack = {
  name: 'CloudDownload',
  StrokeRounded: IconCloudDownloadStrokeRounded,
  DuotoneRounded: IconCloudDownloadDuotoneRounded,
  TwotoneRounded: IconCloudDownloadTwotoneRounded,
  SolidRounded: IconCloudDownloadSolidRounded,
  BulkRounded: IconCloudDownloadBulkRounded,
  StrokeSharp: IconCloudDownloadStrokeSharp,
  SolidSharp: IconCloudDownloadSolidSharp,
};