import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101',
  d2: 'M12 13L12 21M12 13C11.2998 13 9.99153 14.9943 9.5 15.5M12 13C12.7002 13 14.0085 14.9943 14.5 15.5',
  d3: 'M17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273L18 18C20.25 17.7508 22 15.8398 22 13.5193C22 11.0294 19.9853 9.01101 17.5 9.01101L17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009Z',
  d4: 'M13.0059 21.25C13.0059 21.8023 12.5581 22.25 12.0059 22.25C11.4536 22.25 11.0059 21.8023 11.0059 21.25L11.0059 16.75L10.4116 16.75C10.236 16.7501 10.0203 16.7503 9.84387 16.7282L9.84053 16.7278C9.71408 16.712 9.13804 16.6402 8.86368 16.0746C8.58872 15.5077 8.89065 15.0076 8.95597 14.8994L8.95841 14.8954C9.05062 14.7424 9.18477 14.5715 9.29511 14.4309L9.31885 14.4007C9.61348 14.0248 9.99545 13.5406 10.3759 13.1496C10.5657 12.9545 10.783 12.7533 11.0139 12.5944C11.2191 12.4532 11.5693 12.25 12 12.25C12.4307 12.25 12.7809 12.4532 12.9861 12.5944C13.217 12.7533 13.4343 12.9545 13.6241 13.1496C14.0046 13.5406 14.3865 14.0248 14.6812 14.4007L14.7049 14.4309C14.8152 14.5715 14.9494 14.7423 15.0416 14.8954L15.044 14.8994C15.1093 15.0076 15.4113 15.5078 15.1363 16.0746C14.862 16.6402 14.2859 16.712 14.1595 16.7278L14.1561 16.7282C13.9797 16.7503 13.764 16.7501 13.5884 16.75L13.0059 16.75L13.0059 21.25Z',
  d5: 'M1.25 12.5C1.25 9.85826 3.03106 7.6332 5.45825 6.95919C5.65424 6.90476 5.75224 6.87755 5.80872 6.8197C5.8652 6.76184 5.88991 6.66384 5.93931 6.46783C6.62272 3.75653 9.07671 1.75 12 1.75C15.2149 1.75 17.8628 4.17731 18.2112 7.29924C18.2385 7.54459 18.2522 7.6673 18.3147 7.73828C18.3772 7.80927 18.4989 7.8388 18.7423 7.89786C21.0422 8.45589 22.75 10.5285 22.75 13C22.75 15.8995 20.3995 18.25 17.5 18.25H16.4006C15.942 18.25 15.7126 18.25 15.6826 18.2119C15.6679 18.1933 15.6641 18.1839 15.6617 18.1603C15.6567 18.1121 15.8519 17.9223 16.2425 17.5427C17.2326 16.5804 17.255 14.9976 16.2927 14.0075C15.6442 13.1982 15.0315 12.3422 14.2379 11.6663C13.6086 11.1303 12.8426 10.75 12 10.75C11.1574 10.75 10.3914 11.1303 9.76209 11.6663C8.96846 12.3422 8.35575 13.1982 7.7073 14.0075C6.74496 14.9976 6.76745 16.5804 7.75753 17.5427C8.14807 17.9223 8.34334 18.1121 8.33832 18.1603C8.33587 18.1839 8.33206 18.1933 8.31739 18.2119C8.28737 18.25 8.05801 18.25 7.59942 18.25H7C3.82436 18.25 1.25 15.6756 1.25 12.5Z',
  d6: 'M12 21L12 13.5465M9 16L12 13L15 16',
  d7: 'M12.0001 12.0859L15.7072 15.793L14.293 17.2072L13.0001 15.9143V21.5001H11.0001L11.0001 15.9143L9.70718 17.2072L8.29297 15.793L12.0001 12.0859Z',
  d8: 'M5.853 7.61454C3.22664 8.14643 1.25 10.467 1.25 13.25C1.25 16.4256 3.82436 19 7 19H9.5003V18.8713L6.17188 15.5429L12.0003 9.71448L17.8287 15.5429L14.5003 18.8713V19H17.5C20.3995 19 22.75 16.6495 22.75 13.75C22.75 11.1041 20.7927 8.91534 18.2469 8.55273C18.1428 5.19224 15.3858 2.5 12 2.5C8.93585 2.5 6.38731 4.70456 5.853 7.61454Z',
};

export const IconCloudUploadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-stroke-rounded IconCloudUploadStrokeRounded"
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

export const IconCloudUploadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-duotone-rounded IconCloudUploadDuotoneRounded"
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

export const IconCloudUploadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-twotone-rounded IconCloudUploadTwotoneRounded"
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

export const IconCloudUploadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-solid-rounded IconCloudUploadSolidRounded"
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

export const IconCloudUploadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-bulk-rounded IconCloudUploadBulkRounded"
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

export const IconCloudUploadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-stroke-sharp IconCloudUploadStrokeSharp"
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

export const IconCloudUploadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-upload-solid-sharp IconCloudUploadSolidSharp"
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

export const iconPackOfCloudUpload: TheIconSelfPack = {
  name: 'CloudUpload',
  StrokeRounded: IconCloudUploadStrokeRounded,
  DuotoneRounded: IconCloudUploadDuotoneRounded,
  TwotoneRounded: IconCloudUploadTwotoneRounded,
  SolidRounded: IconCloudUploadSolidRounded,
  BulkRounded: IconCloudUploadBulkRounded,
  StrokeSharp: IconCloudUploadStrokeSharp,
  SolidSharp: IconCloudUploadSolidSharp,
};