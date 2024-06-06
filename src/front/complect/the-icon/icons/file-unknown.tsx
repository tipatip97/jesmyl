import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 3.97802C3.5 2.88559 4.39543 2 5.5 2C6.60457 2 7.5 2.88559 7.5 3.97802C7.5 4.3718 7.38366 4.7387 7.18311 5.04694C6.58541 5.96561 5.5 6.84163 5.5 7.93407V8.42857M5.5 11H5.51198',
  d2: 'M10.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V14',
  d3: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d4: 'M20.4986 13.0104C20.1582 13.8464 18.59 15.5021 15.002 15.5021C14.7005 15.5021 13.9099 15.8053 13.9508 17.4483C13.9675 18.9333 13.4262 21.8711 11.1555 21.9978C10.7055 22 10.2164 22 9.68182 22C7.88275 22 6.98321 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818L3.5 7C3.5 6.07069 3.5 5.60603 3.57686 5.21964C3.89249 3.63287 5.13288 2.39248 6.71964 2.07686C7.10604 2 7.57069 2 8.5 2L12.7727 2C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29753 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 12.2452 20.5 12.6414 20.4986 13.0104Z',
  d5: 'M5.625 3.125C5.06227 3.125 4.625 3.57326 4.625 4.10302C4.625 4.65531 4.17728 5.10302 3.625 5.10302C3.07272 5.10302 2.625 4.65531 2.625 4.10302C2.625 2.44792 3.97859 1.125 5.625 1.125C7.27141 1.125 8.625 2.44792 8.625 4.10302C8.625 4.69681 8.4489 5.25221 8.14632 5.71729C7.96519 5.99568 7.75528 6.25872 7.56867 6.48809C7.53374 6.53103 7.49968 6.57273 7.46642 6.61344C7.31197 6.80252 7.1749 6.97033 7.04791 7.14294C6.73157 7.57293 6.625 7.84565 6.625 8.05907V8.55357C6.625 9.10586 6.17728 9.55357 5.625 9.55357C5.07272 9.55357 4.625 9.10586 4.625 8.55357V8.05907C4.625 7.18005 5.06113 6.46854 5.43692 5.95774C5.59693 5.74024 5.77259 5.52537 5.92771 5.33562C5.95846 5.298 5.98841 5.26136 6.01726 5.2259C6.20227 4.9985 6.35218 4.80753 6.46991 4.62658C6.56841 4.47518 6.625 4.29678 6.625 4.10302C6.625 3.57326 6.18773 3.125 5.625 3.125ZM4.625 11.125C4.625 10.5727 5.07272 10.125 5.625 10.125H5.63698C6.18926 10.125 6.63698 10.5727 6.63698 11.125C6.63698 11.6773 6.18926 12.125 5.63698 12.125H5.625C5.07272 12.125 4.625 11.6773 4.625 11.125Z',
  d6: 'M16.6885 1.47775C15.7062 1.37499 12.4185 1.37499 10.8774 1.375C10.3377 1.375 9.90012 1.81256 9.90012 2.35231C9.90012 2.89205 10.3377 3.32959 10.8774 3.32959C12.486 3.32959 15.6172 3.33084 16.4866 3.42179C17.3405 3.51112 17.8244 3.67788 18.1823 3.93092C18.4237 4.10167 18.6361 4.30276 18.8139 4.52711C19.0695 4.84961 19.2389 5.2824 19.3311 6.06919C19.4261 6.87895 19.4276 7.93628 19.4276 9.45973L19.4277 12.3599C19.4277 12.6269 19.4276 13.2655 19.147 13.7377C18.974 14.0286 18.7526 14.2717 18.5252 14.3956C18.1586 14.5951 17.7385 14.7085 17.2918 14.7085L16.2514 14.672C15.8713 14.6641 15.4278 14.6761 14.9996 14.7908C14.1657 15.0143 13.5143 15.6657 13.2908 16.4996C13.1761 16.9278 13.1641 17.3713 13.172 17.7514L13.2085 18.7918C13.2085 19.2595 13.0841 19.6666 12.8667 20.045C12.74 20.2656 12.5193 20.4675 12.2145 20.6448C11.7524 20.9137 11.199 20.9162 10.8608 20.9177C10.5227 20.9193 10.1659 20.9204 9.86784 20.9204C8.03372 20.9204 7.36659 20.9065 6.86323 20.7291C5.9906 20.4217 5.3249 19.78 5.01481 18.9947C4.93717 18.798 4.88233 18.5396 4.85289 18.0917C4.82288 17.635 4.82239 17.052 4.82239 16.2118V14.0987C4.82239 13.5609 4.38645 13.125 3.84869 13.125C3.31094 13.125 2.875 13.5609 2.875 14.0987V16.245C2.87499 17.0441 2.87499 17.6917 2.90973 18.2202C2.94552 18.7649 3.02113 19.2505 3.2044 19.7147C3.73321 21.054 4.84164 22.0883 6.2182 22.5733C7.077 22.8759 8.54908 22.8755 10.1041 22.8749C12.9437 22.8753 14.6304 22.8755 16.0128 22.3884C18.2328 21.6063 20.0065 19.9435 20.8499 17.8075C21.131 17.0955 21.2556 16.3308 21.3158 15.4139C21.375 14.5132 21.375 13.4006 21.375 11.9823V9.39882C21.375 7.95073 21.375 6.77808 21.2652 5.84075C21.151 4.86735 20.9078 4.02947 20.338 3.3104C20.0428 2.93792 19.6942 2.60914 19.3039 2.33309C18.5591 1.80643 17.6979 1.58334 16.6885 1.47775Z',
  d7: 'M11.9966 2.00044L20.49 2.00012C20.4955 2.00012 20.5 2.0046 20.5 2.01012V14.9931L13.5 21.9894H3.51C3.50448 21.9894 3.5 21.9849 3.5 21.9794V11.9532M19.9672 14.9931H13.5V21.4268',
  d8: 'M5.51074 3.96354C5.51074 1.75058 8.62272 1.21389 9.41153 3.32002C9.72364 4.15338 9.28753 5.00314 8.74332 5.70737C8.45123 6.08535 8.05713 6.643 7.50687 7.53157C7.50639 7.53235 7.50601 7.5332 7.50576 7.53408L7.50499 7.53672C7.50473 7.53763 7.5046 7.53856 7.5046 7.5395V8.98679M7.5046 11.7483V10.2401',
  d9: 'M6.75 3.25C6.18727 3.25 5.75 3.69826 5.75 4.22802H3.75C3.75 2.57292 5.10359 1.25 6.75 1.25C8.39641 1.25 9.75 2.57292 9.75 4.22802C9.75 4.82181 9.5739 5.37721 9.27132 5.84229C9.26686 5.84915 9.26231 5.85595 9.25768 5.8627L7.75 8.06008V9.25H5.75V7.75C5.75 7.54802 5.81116 7.35078 5.92543 7.18424L7.60039 4.74306C7.69551 4.59351 7.75 4.41816 7.75 4.22802C7.75 3.69826 7.31273 3.25 6.75 3.25ZM5.75 10.25H7.76198V12.25H5.75V10.25Z',
  d10: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H12V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V14H2.75V21.7727Z',
};

export const IconFileUnknownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-stroke-rounded IconFileUnknownStrokeRounded"
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

export const IconFileUnknownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-duotone-rounded IconFileUnknownDuotoneRounded"
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

export const IconFileUnknownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-twotone-rounded IconFileUnknownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileUnknownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-solid-rounded IconFileUnknownSolidRounded"
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

export const IconFileUnknownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-bulk-rounded IconFileUnknownBulkRounded"
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

export const IconFileUnknownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-stroke-sharp IconFileUnknownStrokeSharp"
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

export const IconFileUnknownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unknown-solid-sharp IconFileUnknownSolidSharp"
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

export const iconPackOfFileUnknown: TheIconSelfPack = {
  name: 'FileUnknown',
  StrokeRounded: IconFileUnknownStrokeRounded,
  DuotoneRounded: IconFileUnknownDuotoneRounded,
  TwotoneRounded: IconFileUnknownTwotoneRounded,
  SolidRounded: IconFileUnknownSolidRounded,
  BulkRounded: IconFileUnknownBulkRounded,
  StrokeSharp: IconFileUnknownStrokeSharp,
  SolidSharp: IconFileUnknownSolidSharp,
};