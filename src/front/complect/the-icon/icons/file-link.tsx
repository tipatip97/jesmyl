import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V11.5',
  d2: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d3: 'M7.70569 9.44141C8.45931 10.1862 9.68117 10.1862 10.4348 9.44141C11.1884 8.69662 11.1884 7.48908 10.4348 6.74429L8.7291 5.05859C8.06295 4.40025 7.03095 4.32384 6.27987 4.82935M6.29431 2.55859C5.54069 1.8138 4.31883 1.8138 3.56521 2.55859C2.8116 3.30338 2.8116 4.51092 3.56521 5.25571L5.2709 6.94141C5.94932 7.61187 7.00718 7.67878 7.76133 7.14213',
  d4: 'M20.2486 13.0104C19.9082 13.8464 18.34 15.5021 14.752 15.5021C14.4505 15.5021 13.6599 15.8053 13.7008 17.4483C13.7175 18.9333 13.1762 21.8711 10.9055 21.9978C10.4555 22 9.96637 22 9.43182 22C7.63275 22 6.73321 22 6.01478 21.7478C4.85979 21.3424 3.94875 20.4849 3.51796 19.3979C3.25 18.7217 3.25 17.8751 3.25 16.1818L3.25 7C3.25 6.07069 3.25 5.60603 3.32686 5.21964C3.64249 3.63287 4.88288 2.39248 6.46964 2.07686C6.85604 2 7.32069 2 8.25 2L12.5227 2C15.7839 2 17.4145 2 18.5469 2.79784C18.8714 3.02643 19.1594 3.29753 19.4023 3.60289C20.25 4.66867 20.25 6.20336 20.25 9.27273V11.8182C20.25 12.2452 20.25 12.6414 20.2486 13.0104Z',
  d5: 'M16.9385 1.47775C15.9562 1.37499 14.6685 1.37499 13.1274 1.375C12.5877 1.375 12.1501 1.81256 12.1501 2.35231C12.1501 2.89205 12.5877 3.32959 13.1274 3.32959C14.736 3.32959 15.8672 3.33084 16.7366 3.42179C17.5905 3.51112 18.0744 3.67788 18.4323 3.93092C18.6737 4.10167 18.8861 4.30276 19.0639 4.52711C19.3195 4.84961 19.4889 5.2824 19.5811 6.06919C19.6761 6.87895 19.6776 7.93628 19.6776 9.45973L19.6777 12.3599C19.6777 12.6269 19.6776 13.2655 19.397 13.7377C19.224 14.0286 19.0026 14.2717 18.7752 14.3956C18.4086 14.5951 17.9885 14.7085 17.5418 14.7085L16.5014 14.672C16.1213 14.6641 15.6778 14.6761 15.2496 14.7908C14.4157 15.0143 13.7643 15.6657 13.5408 16.4996C13.4261 16.9278 13.4141 17.3713 13.422 17.7514L13.4585 18.7918C13.4585 19.2595 13.3341 19.6666 13.1167 20.045C12.99 20.2656 12.7693 20.4675 12.4645 20.6448C12.0024 20.9137 11.449 20.9162 11.1108 20.9177C10.7727 20.9193 10.4159 20.9204 10.1178 20.9204C8.28372 20.9204 7.61659 20.9065 7.11323 20.7291C6.2406 20.4217 5.5749 19.78 5.26481 18.9947C5.18717 18.798 5.13233 18.5396 5.10289 18.0917C5.07288 17.635 5.07239 17.052 5.07239 16.2118V12.0987C5.07239 11.5609 4.63645 11.125 4.09869 11.125C3.56094 11.125 3.125 11.5609 3.125 12.0987V16.245C3.12499 17.0441 3.12499 17.6917 3.15973 18.2202C3.19552 18.7649 3.27113 19.2505 3.4544 19.7147C3.98321 21.054 5.09164 22.0883 6.4682 22.5733C7.327 22.8759 8.79908 22.8755 10.3541 22.8749C13.1937 22.8753 14.8804 22.8755 16.2628 22.3884C18.4828 21.6063 20.2565 19.9435 21.0999 17.8075C21.381 17.0955 21.5056 16.3308 21.5658 15.4139C21.625 14.5132 21.625 13.4006 21.625 11.9823V9.39882C21.625 7.95073 21.625 6.77808 21.5152 5.84075C21.401 4.86735 21.1578 4.02947 20.588 3.3104C20.2928 2.93792 19.9442 2.60914 19.5539 2.33309C18.8091 1.80643 17.9479 1.58334 16.9385 1.47775Z',
  d6: 'M3.37859 2.11198C4.71016 0.796008 6.86424 0.796007 8.19582 2.11198C8.58864 2.50019 8.59237 3.13335 8.20415 3.52617C7.81594 3.91899 7.18278 3.92272 6.78996 3.5345C6.23749 2.9885 5.33692 2.9885 4.78445 3.5345C4.23852 4.07403 4.23852 4.94385 4.78445 5.48338L6.91655 7.5905C7.41248 8.08061 8.19266 8.13227 8.74687 7.73789C9.19686 7.41768 9.82122 7.52288 10.1414 7.97287C10.4616 8.42285 10.3564 9.04721 9.90645 9.36742C8.5753 10.3147 6.71082 10.1991 5.5107 9.01302L3.37859 6.9059C2.04047 5.58346 2.04047 3.43442 3.37859 2.11198L3.37859 2.11198ZM6.91648 4.8321C8.24175 3.94011 10.0607 4.07216 11.2393 5.23698L13.3714 7.3441C14.7095 8.66654 14.7095 10.8156 13.3714 12.138C12.0398 13.454 9.88576 13.454 8.55418 12.138C8.16136 11.7498 8.15763 11.1167 8.54585 10.7238C8.93406 10.331 9.56722 10.3273 9.96004 10.7155C10.5125 11.2615 11.4131 11.2615 11.9656 10.7155C12.5115 10.176 12.5115 9.30616 11.9656 8.76662L9.83345 6.6595C9.3467 6.17846 8.58563 6.11948 8.03321 6.49129C7.57503 6.79966 6.95362 6.67823 6.64525 6.22006C6.33687 5.76189 6.4583 5.14047 6.91648 4.8321Z',
  d7: 'M6.99315 9.44141C7.78953 10.1862 9.0807 10.1862 9.87709 9.44141C10.6734 8.69662 10.6734 7.48908 9.87709 6.74429L8.07462 5.05859C7.37068 4.40025 6.28013 4.32384 5.48645 4.82935M5.5017 2.55859C4.70533 1.8138 3.41415 1.8138 2.61778 2.55859C1.82142 3.30338 1.82142 4.51092 2.61778 5.25571L4.42024 6.94141C5.13714 7.61187 6.25502 7.67878 7.05195 7.14213',
  d8: 'M11.2937 2.01L20.0087 2C20.0144 2 20.019 2.00448 20.019 2.01V15L12.8254 22H2.5591C2.55343 22 2.54883 21.9955 2.54883 21.99V11.0197M19.581 15H12.8254V21.423',
  d9: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H12.4869V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V11H2.75V21.7727Z',
  d10: 'M3.61229 2.09733C4.75546 0.967557 6.60407 0.967557 7.74724 2.09733L6.34139 3.51985C5.97732 3.16005 5.38221 3.16005 5.01814 3.51985C4.66062 3.87319 4.66062 4.44111 5.01814 4.79445L6.72383 6.48015C7.05015 6.80264 7.56587 6.83758 7.93154 6.57736L9.09112 8.20689C7.9485 9.01999 6.34849 8.92111 5.31797 7.90267L3.61229 6.21697C2.46257 5.08073 2.46257 3.23357 3.61229 2.09733Z',
  d11: 'M6.47151 4.24976C7.60901 3.48416 9.16994 3.5971 10.182 4.59733L11.8877 6.28303C13.0374 7.41927 13.0374 9.26643 11.8877 10.4027C10.7445 11.5324 8.89593 11.5324 7.75276 10.4027L9.15861 8.98015C9.52268 9.33995 10.1178 9.33995 10.4819 8.98015C10.8394 8.62681 10.8394 8.05889 10.4819 7.70555L8.77617 6.01985C8.45596 5.7034 7.95289 5.66352 7.58824 5.90895L6.47151 4.24976Z',
};

export const IconFileLinkStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-stroke-rounded IconFileLinkStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-duotone-rounded IconFileLinkDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-twotone-rounded IconFileLinkTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-solid-rounded IconFileLinkSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-bulk-rounded IconFileLinkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-stroke-sharp IconFileLinkStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileLinkSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-link-solid-sharp IconFileLinkSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileLink: TheIconSelfPack = {
  name: 'FileLink',
  StrokeRounded: IconFileLinkStrokeRounded,
  DuotoneRounded: IconFileLinkDuotoneRounded,
  TwotoneRounded: IconFileLinkTwotoneRounded,
  SolidRounded: IconFileLinkSolidRounded,
  BulkRounded: IconFileLinkBulkRounded,
  StrokeSharp: IconFileLinkStrokeSharp,
  SolidSharp: IconFileLinkSolidSharp,
};