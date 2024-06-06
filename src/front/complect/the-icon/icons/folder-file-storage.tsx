import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979H11',
  d2: 'M17.5556 21.5H18.4444C20.1205 21.5 20.9586 21.5 21.4793 20.9728C22 20.4456 22 19.5971 22 17.9V17.5912C22 16.8554 22 16.4875 21.8647 16.1568C21.7293 15.826 21.4724 15.5658 20.9586 15.0456L19.6488 13.7194C19.2323 13.2977 19.0241 13.0869 18.7847 12.9306C18.5152 12.7547 18.2165 12.6295 17.9031 12.5609C17.6247 12.5 17.3302 12.5 16.7412 12.5C15.8428 12.5 15.3936 12.5 15.0437 12.6606C14.6511 12.8408 14.3366 13.1593 14.1586 13.5568C14 13.911 14 14.3659 14 15.2755V17.9C14 19.5971 14 20.4456 14.5207 20.9728C15.0414 21.5 15.8795 21.5 17.5556 21.5Z',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 13.6743 22 15.0713 21.8613 16.1486C21.7251 15.8216 21.4682 15.5615 20.9586 15.0456L19.6488 13.7194C19.2323 13.2977 19.0241 13.0869 18.7847 12.9306C18.5152 12.7547 18.2165 12.6295 17.9031 12.5609C17.6247 12.5 17.3302 12.5 16.7413 12.5C15.8428 12.5 15.3936 12.5 15.0437 12.6606C14.6511 12.8408 14.3366 13.1593 14.1586 13.5568C14 13.911 14 14.3659 14 15.2755V17.9C14 19.1652 14 19.9588 14.2158 20.4993C13.9094 20.5 13.5878 20.5 13.25 20.5Z',
  d4: 'M16.8157 11.75C17.3329 11.7498 17.7044 11.7497 18.0634 11.8283C18.466 11.9164 18.8492 12.0771 19.1946 12.3026C19.5025 12.5035 19.7642 12.7687 20.1301 13.1394L21.5722 14.5994C22.0076 15.0393 22.3659 15.4013 22.5588 15.8728C22.7513 16.3434 22.7507 17.3279 22.75 17.9506C22.75 18.756 22.7501 19.4341 22.6784 19.9738C22.6025 20.5455 22.4342 21.0733 22.0129 21.4999C21.5904 21.9277 21.0653 22.0998 20.4963 22.1773C19.9614 22.2501 19.29 22.2501 18.4959 22.25H17.5041C16.71 22.2501 16.0386 22.2501 15.5037 22.1773C14.9347 22.0998 14.4096 21.9277 13.9871 21.4999C13.5658 21.0733 13.3975 20.5455 13.3216 19.9738C13.2499 19.4341 13.25 18.756 13.25 17.9507V17.9506L13.25 15.2489C13.25 14.8168 13.25 14.4525 13.2718 14.1533C13.2946 13.8406 13.3442 13.5405 13.4741 13.2503C13.7257 12.6884 14.1715 12.2358 14.7308 11.979C15.0206 11.846 15.3203 11.7954 15.6308 11.7722C15.9274 11.75 16.3896 11.75 16.8157 11.75Z',
  d5: 'M9.4626 1.98884C8.82373 1.74927 8.11205 1.74958 7.08264 1.75004C6.2039 1.75003 5.32205 1.75006 4.7497 1.80052C4.15996 1.8525 3.64388 1.96246 3.17258 2.22548C2.56533 2.56435 2.06428 3.06541 1.7254 3.67266C1.46238 4.14396 1.35242 4.66004 1.30044 5.24978C1.24999 5.82212 1.24999 6.53085 1.25 7.40958V10.5575C1.24999 12.8658 1.24998 14.6749 1.43975 16.0864C1.63399 17.5311 2.03933 18.6711 2.93414 19.5659C3.82895 20.4608 4.96897 20.8661 6.41371 21.0603C7.66179 21.2281 9.22071 21.2476 11.1609 21.2498C11.4457 21.2501 11.5881 21.2503 11.6762 21.1617C11.7643 21.0731 11.7634 20.9305 11.7615 20.6454C11.7548 19.587 11.75 18.2855 11.75 17.9507L11.75 15.2107C11.75 14.8098 11.7499 14.3987 11.7758 14.0442C11.8046 13.6492 11.8741 13.1534 12.1051 12.6374C12.504 11.7466 13.2122 11.0257 14.1051 10.6159C14.6241 10.3776 15.1234 10.3061 15.5189 10.2765C15.8726 10.25 16.493 10.25 16.888 10.2501C17.3441 10.2496 17.8629 10.249 18.3841 10.3631C18.9649 10.4901 19.5171 10.722 20.0144 11.0466C20.4599 11.3373 20.8239 11.7066 21.1462 12.0337L21.7334 12.6279C22.1628 13.0626 22.3775 13.2799 22.5635 13.2036C22.7495 13.1272 22.7497 12.8225 22.7499 12.2132L22.75 11.7923C22.75 10.7733 22.75 9.86889 22.683 9.20956C22.6137 8.529 22.4669 7.9388 22.118 7.41669C21.8444 7.00723 21.4929 6.65566 21.0834 6.38207C20.5613 6.03321 19.9711 5.88636 19.2905 5.81713C18.6312 5.75006 17.8095 5.75007 16.7905 5.75008L13.2361 5.75008C12.92 5.75008 12.7396 5.74915 12.6064 5.73539C12.5044 5.72825 12.4348 5.65263 12.4128 5.61571C12.3409 5.50277 12.0838 4.98916 11.9425 4.70644C11.4704 3.75129 10.8581 2.51213 9.4626 1.98884Z',
  d6: 'M6.98876 6.50886H21.8936C21.9489 6.50886 21.9936 6.5536 21.9936 6.6088V10.9891M10.9779 20.4882H2.10489C2.04966 20.4882 2.00488 20.4435 2.00488 20.3883L2.00499 2.60133C2.00499 2.54613 2.04977 2.50139 2.105 2.50139L8.97605 2.50098L12.0564 6.50886',
  d7: 'M19.0131 12.4873H14.0873C14.0321 12.4873 13.9873 12.5321 13.9873 12.5872V21.4C13.9873 21.4552 14.0321 21.5 14.0873 21.5H21.8999C21.9552 21.5 22 21.4552 22 21.4V15.5033L19.0131 12.4873Z',
  d8: 'M14.75 22.25H22.75V16.25L19.75 13.25H14.75V22.25Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.25V11.75H20.3713L22.75 14.1287V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderFileStorageStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-stroke-rounded IconFolderFileStorageStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderFileStorageDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-duotone-rounded IconFolderFileStorageDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderFileStorageTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-twotone-rounded IconFolderFileStorageTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderFileStorageSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-solid-rounded IconFolderFileStorageSolidRounded"
    >
      <path 
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

export const IconFolderFileStorageBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-bulk-rounded IconFolderFileStorageBulkRounded"
    >
      <path 
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

export const IconFolderFileStorageStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-stroke-sharp IconFolderFileStorageStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderFileStorageSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-file-storage-solid-sharp IconFolderFileStorageSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderFileStorage: TheIconSelfPack = {
  name: 'FolderFileStorage',
  StrokeRounded: IconFolderFileStorageStrokeRounded,
  DuotoneRounded: IconFolderFileStorageDuotoneRounded,
  TwotoneRounded: IconFolderFileStorageTwotoneRounded,
  SolidRounded: IconFolderFileStorageSolidRounded,
  BulkRounded: IconFolderFileStorageBulkRounded,
  StrokeSharp: IconFolderFileStorageStrokeSharp,
  SolidSharp: IconFolderFileStorageSolidSharp,
};