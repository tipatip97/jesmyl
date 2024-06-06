import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 8.23077V5.46154C3.5 3.54978 5.067 2 7 2C8.933 2 10.5 3.54978 10.5 5.46154L10.5 9.26923C10.5 10.2251 9.7165 11 8.75 11C7.7835 11 7 10.2251 7 9.26923L7 5.46154',
  d2: 'M12.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V12',
  d3: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d4: 'M20.5298 13.0104C20.1895 13.8464 18.6213 15.5021 15.0332 15.5021C14.7318 15.5021 13.9411 15.8053 13.9821 17.4483C13.9987 18.9333 13.4575 21.8711 11.1867 21.9978C10.7368 22 10.2476 22 9.71307 22C7.914 22 7.01446 22 6.29603 21.7478C5.14104 21.3424 4.23 20.4849 3.79921 19.3979C3.53125 18.7217 3.53125 17.8751 3.53125 16.1818L3.53125 7C3.53125 6.07069 3.53125 5.60603 3.60811 5.21964C3.92374 3.63287 5.16413 2.39248 6.75089 2.07686C7.13729 2 7.60194 2 8.53125 2L12.804 2C16.0652 2 17.6958 2 18.8282 2.79784C19.1526 3.02643 19.4407 3.29753 19.6836 3.60289C20.5313 4.66867 20.5312 6.20336 20.5312 9.27273V11.8182C20.5312 12.2452 20.5313 12.6414 20.5298 13.0104Z',
  d5: 'M11.625 5.58654C11.625 3.11211 9.59984 1.125 7.125 1.125C4.65017 1.125 2.625 3.11211 2.625 5.58654V8.35577C2.625 8.90805 3.07271 9.35577 3.625 9.35577C4.17728 9.35577 4.625 8.90805 4.625 8.35577V5.58654C4.625 4.23746 5.73384 3.125 7.125 3.125C8.51616 3.125 9.625 4.23746 9.625 5.58654L9.625 9.39423C9.625 9.78743 9.29966 10.125 8.875 10.125C8.45034 10.125 8.125 9.78744 8.125 9.39423L8.125 5.58654C8.125 5.03425 7.67729 4.58654 7.125 4.58654C6.57272 4.58654 6.125 5.03425 6.125 5.58654L6.125 9.39423C6.125 10.9128 7.36666 12.125 8.875 12.125C10.3833 12.125 11.625 10.9128 11.625 9.39423L11.625 5.58654Z',
  d6: 'M16.6885 1.47775C15.7062 1.37499 15.4185 1.37499 13.8774 1.375C13.3377 1.375 12.9001 1.81256 12.9001 2.35231C12.9001 2.89205 13.3377 3.32959 13.8774 3.32959C15.486 3.32959 15.6172 3.33084 16.4866 3.42179C17.3405 3.51112 17.8244 3.67788 18.1823 3.93092C18.4237 4.10167 18.6361 4.30276 18.8139 4.52711C19.0695 4.84961 19.2389 5.2824 19.3311 6.06919C19.4261 6.87895 19.4276 7.93628 19.4276 9.45973L19.4277 12.3599C19.4277 12.6269 19.4276 13.2655 19.147 13.7377C18.974 14.0286 18.7526 14.2717 18.5252 14.3956C18.1586 14.5951 17.7385 14.7085 17.2918 14.7085L16.2514 14.672C15.8713 14.6641 15.4278 14.6761 14.9996 14.7908C14.1657 15.0143 13.5143 15.6657 13.2908 16.4996C13.1761 16.9278 13.1641 17.3713 13.172 17.7514L13.2085 18.7918C13.2085 19.2595 13.0841 19.6666 12.8667 20.045C12.74 20.2656 12.5193 20.4675 12.2145 20.6448C11.7524 20.9137 11.199 20.9162 10.8608 20.9177C10.5227 20.9193 10.1659 20.9204 9.86784 20.9204C8.03372 20.9204 7.36659 20.9065 6.86323 20.7291C5.9906 20.4217 5.3249 19.78 5.01481 18.9947C4.93717 18.798 4.88233 18.5396 4.85289 18.0917C4.82288 17.635 4.82239 17.052 4.82239 16.2118V13.0987C4.82239 12.5609 4.38645 12.125 3.84869 12.125C3.31094 12.125 2.875 12.5609 2.875 13.0987V16.245C2.87499 17.0441 2.87499 17.6917 2.90973 18.2202C2.94552 18.7649 3.02113 19.2505 3.2044 19.7147C3.73321 21.054 4.84164 22.0883 6.2182 22.5733C7.077 22.8759 8.54908 22.8755 10.1041 22.8749C12.9437 22.8753 14.6304 22.8755 16.0128 22.3884C18.2328 21.6063 20.0065 19.9435 20.8499 17.8075C21.131 17.0955 21.2556 16.3308 21.3158 15.4139C21.375 14.5132 21.375 13.4006 21.375 11.9823V9.39882C21.375 7.95073 21.375 6.77808 21.2652 5.84075C21.151 4.86735 20.9078 4.02947 20.338 3.3104C20.0428 2.93792 19.6942 2.60914 19.3039 2.33309C18.5591 1.80643 17.6979 1.58334 16.6885 1.47775Z',
  d7: 'M3.5 8.23077V5.46154C3.5 3.54978 5.067 2 7 2C8.933 2 10.5 3.54978 10.5 5.46154V9.26923C10.5 10.2251 9.7165 11 8.75 11C7.7835 11 7 10.2251 7 9.26923V5.46154',
  d8: 'M12.9561 2.01L20.49 2C20.4955 2 20.5 2.00448 20.5 2.01V15L13.5 22H3.51C3.50448 22 3.5 21.9955 3.5 21.99V12.9793M20.072 15H13.5V21.4613',
  d9: 'M11.75 5.71154C11.75 3.23711 9.72484 1.25 7.25 1.25C4.77517 1.25 2.75 3.23711 2.75 5.71154V8.48077H4.75V5.71154C4.75 4.36246 5.85884 3.25 7.25 3.25C8.64116 3.25 9.75 4.36246 9.75 5.71154L9.75 9.51923C9.75 9.91243 9.42466 10.25 9 10.25C8.57534 10.25 8.25 9.91244 8.25 9.51923L8.25 5.71154L6.25 5.71154L6.25 9.51923C6.25 11.0378 7.49166 12.25 9 12.25C10.5083 12.25 11.75 11.0378 11.75 9.51923L11.75 5.71154Z',
  d10: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H13.4869V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V13H2.75V21.7727Z',
};

export const IconFileAttachmentStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-stroke-rounded IconFileAttachmentStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileAttachmentDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-duotone-rounded IconFileAttachmentDuotoneRounded"
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

export const IconFileAttachmentTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-twotone-rounded IconFileAttachmentTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileAttachmentSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-solid-rounded IconFileAttachmentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFileAttachmentBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-bulk-rounded IconFileAttachmentBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileAttachmentStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-stroke-sharp IconFileAttachmentStrokeSharp"
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

export const IconFileAttachmentSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-attachment-solid-sharp IconFileAttachmentSolidSharp"
    >
      <path 
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

export const iconPackOfFileAttachment: TheIconSelfPack = {
  name: 'FileAttachment',
  StrokeRounded: IconFileAttachmentStrokeRounded,
  DuotoneRounded: IconFileAttachmentDuotoneRounded,
  TwotoneRounded: IconFileAttachmentTwotoneRounded,
  SolidRounded: IconFileAttachmentSolidRounded,
  BulkRounded: IconFileAttachmentBulkRounded,
  StrokeSharp: IconFileAttachmentStrokeSharp,
  SolidSharp: IconFileAttachmentSolidSharp,
};