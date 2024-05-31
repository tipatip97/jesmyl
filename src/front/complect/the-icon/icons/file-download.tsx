import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V12',
  d2: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d3: 'M4.5 7.5C4.99153 8.0057 6.29977 10 7 10M9.5 7.5C9.00847 8.0057 7.70023 10 7 10M7 10L7 2',
  d4: 'M20.5611 13.0104C20.2207 13.8464 18.6525 15.5021 15.0645 15.5021C14.763 15.5021 13.9724 15.8053 14.0133 17.4483C14.03 18.9333 13.4887 21.8711 11.218 21.9978C10.768 22 10.2789 22 9.74432 22C7.94525 22 7.04571 22 6.32728 21.7478C5.17229 21.3424 4.26125 20.4849 3.83046 19.3979C3.5625 18.7217 3.5625 17.8751 3.5625 16.1818L3.5625 7C3.5625 6.07069 3.5625 5.60603 3.63936 5.21964C3.95499 3.63287 5.19538 2.39248 6.78214 2.07686C7.16854 2 7.63319 2 8.5625 2L12.8352 2C16.0964 2 17.727 2 18.8594 2.79784C19.1839 3.02643 19.4719 3.29753 19.7148 3.60289C20.5625 4.66867 20.5625 6.20336 20.5625 9.27273V11.8182C20.5625 12.2452 20.5625 12.6414 20.5611 13.0104Z',
  d5: 'M16.5635 1.47773C15.5812 1.37497 14.3484 1.37499 12.8073 1.375H11.9773C11.4375 1.375 11 1.81255 11 2.35229C11 2.89203 11.4375 3.32957 11.9773 3.32957H12.7524C14.361 3.32957 15.4922 3.33082 16.3616 3.42177C17.2155 3.5111 17.6994 3.67786 18.0573 3.9309C18.2987 4.10165 18.5111 4.30274 18.6889 4.5271C18.9445 4.84959 19.1139 5.28238 19.2061 6.06917C19.3011 6.87893 19.3026 7.93626 19.3026 9.45971L19.3027 12.3599C19.3027 12.6269 19.3026 13.2655 19.022 13.7376C18.849 14.0286 18.6276 14.2717 18.4002 14.3956C18.0336 14.5951 17.6135 14.7084 17.1668 14.7084L16.1264 14.6719C15.7463 14.6641 15.3028 14.6761 14.8746 14.7908C14.0407 15.0142 13.3893 15.6656 13.1658 16.4996C13.0511 16.9278 13.0391 17.3713 13.047 17.7514L13.0835 18.7918C13.0835 19.2595 12.9591 19.6666 12.7417 20.045C12.615 20.2656 12.3943 20.4675 12.0895 20.6448C11.6274 20.9137 11.074 20.9162 10.7358 20.9177C10.3977 20.9192 10.0409 20.9204 9.74284 20.9204C7.90872 20.9204 7.24159 20.9065 6.73823 20.7291C5.8656 20.4216 5.1999 19.78 4.88981 18.9946C4.81217 18.798 4.75733 18.5396 4.72789 18.0916C4.69788 17.635 4.69739 17.052 4.69739 16.2118V12.0987C4.69739 11.5609 4.26145 11.125 3.72369 11.125C3.18594 11.125 2.75 11.5609 2.75 12.0987V16.2449C2.74999 17.0441 2.74999 17.6916 2.78473 18.2202C2.82052 18.7649 2.89613 19.2505 3.0794 19.7147C3.60821 21.054 4.71664 22.0883 6.0932 22.5733C6.952 22.8759 8.42408 22.8755 9.97909 22.8749C12.8187 22.8753 14.5054 22.8755 15.8878 22.3884C18.1078 21.6062 19.8815 19.9435 20.7249 17.8074C21.006 17.0955 21.1306 16.3308 21.1908 15.4139C21.25 14.5132 21.25 13.4006 21.25 11.9823V9.3988C21.25 7.95071 21.25 6.77806 21.1402 5.84073C21.026 4.86733 20.7828 4.02945 20.213 3.31039C19.9178 2.9379 19.5692 2.60912 19.1789 2.33307C18.4341 1.80641 17.5729 1.58332 16.5635 1.47773Z',
  d6: 'M8.00586 2.125C8.00586 1.57272 7.55814 1.125 7.00586 1.125C6.45357 1.125 6.00586 1.57272 6.00586 2.125L6.00586 6.62504L5.4116 6.62502C5.23596 6.62489 5.02031 6.62474 4.84387 6.64681L4.84053 6.64723C4.71408 6.663 4.13804 6.73483 3.86368 7.30043C3.58872 7.86725 3.89065 8.36739 3.95597 8.4756L4.29511 8.94408C4.58975 9.31991 4.99545 9.83437 5.37588 10.2254C5.56571 10.4205 5.78297 10.6217 6.01388 10.7806C6.21914 10.9218 6.56933 11.125 7 11.125C7.43067 11.125 7.78086 10.9218 7.98612 10.7806C8.21703 10.6217 8.43429 10.4205 8.62412 10.2254C9.00455 9.83437 9.41025 9.31992 9.70488 8.94409L10.044 8.47559C10.1093 8.36739 10.4113 7.86725 10.1363 7.30043C9.86196 6.73483 9.28592 6.66299 9.15947 6.64723L9.15613 6.64681C8.97969 6.62474 8.76403 6.62489 8.5884 6.62502L8.00586 6.62504L8.00586 2.125Z',
  d7: 'M4 7L7 10L10 7M7 2V9.44763',
  d8: 'M12.0096 2.01L20.49 2C20.4955 2 20.5 2.00448 20.5 2.01V15L13.5 22H3.51C3.50448 22 3.5 21.9955 3.5 21.99V11.9962M19.9945 15H13.5V21.4579',
  d9: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H12.4869V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V11H2.75V21.7727Z',
  d10: 'M7.45711 10.6643L11.1642 6.9572L9.75 5.54299L8.45711 6.83588V1.25009H6.45711L6.45711 6.83588L5.16421 5.54299L3.75 6.9572L7.45711 10.6643Z',
} as const;

export const IconFileDownloadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-stroke-rounded IconFileDownloadStrokeRounded"
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

export const IconFileDownloadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-duotone-rounded IconFileDownloadDuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconFileDownloadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-twotone-rounded IconFileDownloadTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDownloadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-solid-rounded IconFileDownloadSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDownloadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-bulk-rounded IconFileDownloadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDownloadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-stroke-sharp IconFileDownloadStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileDownloadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-download-solid-sharp IconFileDownloadSolidSharp"
    >
      <path 
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

export const iconPackOfFileDownload: TheIconSelfPack = {
  name: 'FileDownload',
  StrokeRounded: IconFileDownloadStrokeRounded,
  DuotoneRounded: IconFileDownloadDuotoneRounded,
  TwotoneRounded: IconFileDownloadTwotoneRounded,
  SolidRounded: IconFileDownloadSolidRounded,
  BulkRounded: IconFileDownloadBulkRounded,
  StrokeSharp: IconFileDownloadStrokeSharp,
  SolidSharp: IconFileDownloadSolidSharp,
};