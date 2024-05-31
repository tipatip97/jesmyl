import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.50304 4C7.48421 3.62851 7.55185 3.34156 7.73579 3.1C8.19267 2.5 9.12335 2.5 10.9847 2.5H13.0153C14.8766 2.5 15.8073 2.5 16.2642 3.1C16.4481 3.34156 16.5158 3.62851 16.497 4',
  d2: 'M5 8C5.03784 7.74037 5.12478 7.51593 5.26968 7.31431C5.85493 6.5 7.0681 6.5 9.49444 6.5H14.5056C16.9319 6.5 18.1451 6.5 18.7303 7.31431C18.8752 7.51593 18.9622 7.74037 19 8',
  d3: 'M3.81753 15.7128L4.53641 18.016C5.43193 20.8852 6.19729 21.5 9.21027 21.5H14.7897C17.8027 21.5 18.5681 20.8852 19.4636 18.016L20.1825 15.7128C20.9261 13.3303 21.2979 12.139 20.7101 11.3195C20.1223 10.5 18.896 10.5 16.4434 10.5H7.55662C5.104 10.5 3.8777 10.5 3.28988 11.3195C2.70207 12.139 3.07389 13.3303 3.81753 15.7128Z',
  d4: 'M10.913 1.75C10.9368 1.75001 10.9607 1.75001 10.9847 1.75001H13.0152C13.0392 1.75001 13.0631 1.75001 13.0869 1.75C13.9561 1.74994 14.7145 1.74988 15.3085 1.83515C15.9411 1.92598 16.5997 2.13997 17.0598 2.74419C17.4285 3.22842 17.5224 3.77245 17.4956 4.30064C17.4677 4.85221 16.9979 5.27669 16.4463 5.24872C15.8947 5.22076 15.4702 4.75095 15.4982 4.19938C15.504 4.08513 15.4942 4.02444 15.4871 3.99664C15.4817 3.97503 15.4765 3.96626 15.4685 3.95583C15.4611 3.94601 15.4499 3.93141 15.4022 3.90912C15.3422 3.88109 15.2299 3.84438 15.0243 3.81486C14.5896 3.75247 13.9774 3.75001 13.0152 3.75001H10.9847C10.0225 3.75001 9.41025 3.75247 8.97561 3.81486C8.76999 3.84438 8.65766 3.88109 8.59768 3.90912C8.54998 3.93141 8.53881 3.94601 8.53134 3.95583C8.5234 3.96626 8.51822 3.97503 8.51275 3.99664C8.50572 4.02444 8.49591 4.08513 8.5017 4.19938C8.52966 4.75095 8.10519 5.22076 7.55361 5.24872C7.00204 5.27669 6.53223 4.85221 6.50426 4.30064C6.47749 3.77245 6.57141 3.22843 6.94014 2.74418C7.40023 2.13997 8.05876 1.92598 8.69142 1.83515C9.28541 1.74988 10.0438 1.74994 10.913 1.75Z',
  d5: 'M9.41621 5.75C9.44224 5.75 9.46836 5.75001 9.49457 5.75001L14.5841 5.75C15.7302 5.74994 16.7025 5.7499 17.4566 5.86282C18.2558 5.9825 19.0226 6.2573 19.5425 6.9807C19.7891 7.32391 19.9308 7.70216 19.9897 8.10577C20.0693 8.65227 19.6909 9.15989 19.1444 9.23955C18.5979 9.31921 18.0902 8.94075 18.0106 8.39425C17.9937 8.2786 17.9616 8.20796 17.9184 8.14792C17.8531 8.05702 17.7206 7.92466 17.1604 7.84077C16.5721 7.75268 15.7517 7.75001 14.5057 7.75001H9.49457C8.24852 7.75001 7.42812 7.75268 6.83988 7.84077C6.27962 7.92466 6.14718 8.05702 6.08185 8.14792C6.0387 8.20796 6.00653 8.2786 5.98967 8.39424C5.91001 8.94075 5.4024 9.31921 4.85589 9.23955C4.30938 9.15989 3.93093 8.65227 4.01059 8.10577C4.06942 7.70216 4.21112 7.32391 4.45778 6.9807C4.97769 6.2573 5.74446 5.9825 6.54369 5.86282C7.2978 5.7499 8.27001 5.74994 9.41621 5.75Z',
  d6: 'M16.5048 9.75C17.6787 9.74997 18.6445 9.74994 19.3866 9.86065C20.1618 9.97631 20.8545 10.2342 21.3194 10.8824C21.7817 11.5269 21.8116 12.2689 21.6859 13.0493C21.5649 13.8007 21.2728 14.7365 20.9161 15.8792L20.1794 18.2395C19.7318 19.6734 19.2618 20.7624 18.3719 21.4329C17.4769 22.1074 16.3038 22.25 14.7896 22.25H9.21013C7.69597 22.25 6.5228 22.1074 5.62779 21.4329C4.73794 20.7624 4.26788 19.6734 3.82033 18.2395L3.08365 15.8792C2.72695 14.7365 2.43484 13.8007 2.31381 13.0493C2.18812 12.2689 2.21802 11.5269 2.68031 10.8824C3.14523 10.2342 3.8379 9.97631 4.61314 9.86065C5.35521 9.74994 6.32102 9.74997 7.49488 9.75H7.49491H16.5048H16.5048Z',
  d7: 'M18.997 8.5V6.50008L4.98145 6.5V8.5',
  d8: 'M16.4954 4.5V2.50008L7.48438 2.5V4.5',
  d9: 'M20.8905 10.4933L3.08846 10.4932C3.02243 10.4932 2.97448 10.5559 2.99187 10.6195L5.96595 21.5015H18.004L20.9871 10.6197C21.0046 10.556 20.9566 10.4933 20.8905 10.4933Z',
  d10: 'M4.47065 5.96967C4.6113 5.82902 4.80207 5.75 5.00098 5.75L18.9994 5.75008C19.4137 5.75008 19.7494 6.08587 19.7494 6.50008V8.5H18.2494V7.25008L5.75098 7.25V8.5H4.25098V6.5C4.25098 6.30109 4.32999 6.11032 4.47065 5.96967Z',
  d11: 'M6.97065 1.96967C7.1113 1.82902 7.30207 1.75 7.50098 1.75L16.501 1.75008C16.9152 1.75008 17.251 2.08587 17.251 2.50008V4.5H15.751V3.25007L8.25098 3.25001V4.5H6.75098V2.5C6.75098 2.30109 6.83 2.11032 6.97065 1.96967Z',
  d12: 'M2.40495 10.0448C2.54684 9.85899 2.76723 9.75 3.00098 9.75H20.9996C21.2333 9.75 21.4537 9.85897 21.5956 10.0447C21.7375 10.2305 21.7846 10.4717 21.7232 10.6973L18.5739 22.25L5.42814 22.25L2.27741 10.6973C2.21591 10.4718 2.26307 10.2305 2.40495 10.0448Z',
} as const;

export const IconFolderLibraryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-stroke-rounded IconFolderLibraryStrokeRounded"
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

export const IconFolderLibraryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-duotone-rounded IconFolderLibraryDuotoneRounded"
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

export const IconFolderLibraryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-twotone-rounded IconFolderLibraryTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLibrarySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-solid-rounded IconFolderLibrarySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFolderLibraryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-bulk-rounded IconFolderLibraryBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFolderLibraryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-stroke-sharp IconFolderLibraryStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLibrarySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-library-solid-sharp IconFolderLibrarySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderLibrary: TheIconSelfPack = {
  name: 'FolderLibrary',
  StrokeRounded: IconFolderLibraryStrokeRounded,
  DuotoneRounded: IconFolderLibraryDuotoneRounded,
  TwotoneRounded: IconFolderLibraryTwotoneRounded,
  SolidRounded: IconFolderLibrarySolidRounded,
  BulkRounded: IconFolderLibraryBulkRounded,
  StrokeSharp: IconFolderLibraryStrokeSharp,
  SolidSharp: IconFolderLibrarySolidSharp,
};