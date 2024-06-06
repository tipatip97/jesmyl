import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V12',
  d2: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d3: 'M4.5 4.5C4.99153 3.9943 6.29977 2 7 2M9.5 4.5C9.00847 3.9943 7.70023 2 7 2M7 2L7 10',
  d4: 'M20.5015 13.0104C20.1611 13.8464 18.5929 15.5021 15.0049 15.5021C14.7035 15.5021 13.9128 15.8053 13.9537 17.4483C13.9704 18.9333 13.4291 21.8711 11.1584 21.9978C10.7085 22 10.2193 22 9.68475 22C7.88568 22 6.98614 22 6.26771 21.7478C5.11272 21.3424 4.20168 20.4849 3.77089 19.3979C3.50293 18.7217 3.50293 17.8751 3.50293 16.1818L3.50293 7C3.50293 6.07069 3.50293 5.60603 3.57979 5.21964C3.89542 3.63287 5.13581 2.39248 6.72257 2.07686C7.10897 2 7.57362 2 8.50293 2L12.7757 2C16.0369 2 17.6675 2 18.7999 2.79784C19.1243 3.02643 19.4124 3.29753 19.6552 3.60289C20.5029 4.66867 20.5029 6.20336 20.5029 9.27273V11.8182C20.5029 12.2452 20.5029 12.6414 20.5015 13.0104Z',
  d5: 'M16.5635 1.47775C15.5812 1.37499 14.2935 1.37499 12.7524 1.375C12.2127 1.375 11.7751 1.81256 11.7751 2.35231C11.7751 2.89205 12.2127 3.32959 12.7524 3.32959C14.361 3.32959 15.4922 3.33084 16.3616 3.42179C17.2155 3.51112 17.6994 3.67788 18.0573 3.93092C18.2987 4.10167 18.5111 4.30276 18.6889 4.52711C18.9445 4.84961 19.1139 5.2824 19.2061 6.06919C19.3011 6.87895 19.3026 7.93628 19.3026 9.45973L19.3027 12.3599C19.3027 12.6269 19.3026 13.2655 19.022 13.7377C18.849 14.0286 18.6276 14.2717 18.4002 14.3956C18.0336 14.5951 17.6135 14.7085 17.1668 14.7085L16.1264 14.672C15.7463 14.6641 15.3028 14.6761 14.8746 14.7908C14.0407 15.0143 13.3893 15.6657 13.1658 16.4996C13.0511 16.9278 13.0391 17.3713 13.047 17.7514L13.0835 18.7918C13.0835 19.2595 12.9591 19.6666 12.7417 20.045C12.615 20.2656 12.3943 20.4675 12.0895 20.6448C11.6274 20.9137 11.074 20.9162 10.7358 20.9177C10.3977 20.9193 10.0409 20.9204 9.74284 20.9204C7.90872 20.9204 7.24159 20.9065 6.73823 20.7291C5.8656 20.4217 5.1999 19.78 4.88981 18.9947C4.81217 18.798 4.75733 18.5396 4.72789 18.0917C4.69788 17.635 4.69739 17.052 4.69739 16.2118V12.0987C4.69739 11.5609 4.26145 11.125 3.72369 11.125C3.18594 11.125 2.75 11.5609 2.75 12.0987V16.245C2.74999 17.0441 2.74999 17.6917 2.78473 18.2202C2.82052 18.7649 2.89613 19.2505 3.0794 19.7147C3.60821 21.054 4.71664 22.0883 6.0932 22.5733C6.952 22.8759 8.42408 22.8755 9.97909 22.8749C12.8187 22.8753 14.5054 22.8755 15.8878 22.3884C18.1078 21.6063 19.8815 19.9435 20.7249 17.8075C21.006 17.0955 21.1306 16.3308 21.1908 15.4139C21.25 14.5132 21.25 13.4006 21.25 11.9823V9.39882C21.25 7.95073 21.25 6.77808 21.1402 5.84075C21.026 4.86735 20.7828 4.02947 20.213 3.3104C19.9178 2.93792 19.5692 2.60914 19.1789 2.33309C18.4341 1.80643 17.5729 1.58334 16.5635 1.47775Z',
  d6: 'M8.00586 10.125C8.00586 10.6773 7.55814 11.125 7.00586 11.125C6.45357 11.125 6.00586 10.6773 6.00586 10.125L6.00586 5.62496L5.4116 5.62498C5.23596 5.62511 5.02031 5.62526 4.84387 5.60319L4.84053 5.60277C4.71408 5.587 4.13804 5.51517 3.86368 4.94957C3.58872 4.38275 3.89065 3.88261 3.95597 3.7744L4.29511 3.30592C4.58975 2.93009 4.99545 2.41563 5.37588 2.02462C5.56571 1.82951 5.78297 1.62828 6.01388 1.46943C6.21914 1.32823 6.56933 1.12496 7 1.12496C7.43067 1.12496 7.78086 1.32823 7.98612 1.46943C8.21703 1.62828 8.43429 1.82951 8.62412 2.02462C9.00455 2.41563 9.41025 2.93008 9.70488 3.30591L10.044 3.77441C10.1093 3.88261 10.4113 4.38275 10.1363 4.94957C9.86196 5.51517 9.28592 5.58701 9.15947 5.60277L9.15613 5.60319C8.97969 5.62526 8.76403 5.62511 8.5884 5.62498L8.00586 5.62496L8.00586 10.125Z',
  d7: 'M7 10V2.49547M4 5L7 2L10 5',
  d8: 'M12.032 2.00146H20.49C20.4955 2.00146 20.5 2.00594 20.5 2.01147V14.9996L13.5 21.9985H3.51C3.50448 21.9985 3.5 21.9941 3.5 21.9885V12.0203M20.0222 14.9996H13.5V21.3999',
  d9: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H12V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V13H2.75V21.7727Z',
  d10: 'M6.45711 1.25L10.1642 4.95711L8.75 6.37132L7.45711 5.07843V10.6642H5.45711V5.07843L4.16421 6.37132L2.75 4.95711L6.45711 1.25Z',
} as const;

export const IconFileUploadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-stroke-rounded IconFileUploadStrokeRounded"
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

export const IconFileUploadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-duotone-rounded IconFileUploadDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconFileUploadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-twotone-rounded IconFileUploadTwotoneRounded"
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

export const IconFileUploadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-solid-rounded IconFileUploadSolidRounded"
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

export const IconFileUploadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-bulk-rounded IconFileUploadBulkRounded"
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

export const IconFileUploadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-stroke-sharp IconFileUploadStrokeSharp"
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

export const IconFileUploadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-upload-solid-sharp IconFileUploadSolidSharp"
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

export const iconPackOfFileUpload: TheIconSelfPack = {
  name: 'FileUpload',
  StrokeRounded: IconFileUploadStrokeRounded,
  DuotoneRounded: IconFileUploadDuotoneRounded,
  TwotoneRounded: IconFileUploadTwotoneRounded,
  SolidRounded: IconFileUploadSolidRounded,
  BulkRounded: IconFileUploadBulkRounded,
  StrokeSharp: IconFileUploadStrokeSharp,
  SolidSharp: IconFileUploadSolidSharp,
};