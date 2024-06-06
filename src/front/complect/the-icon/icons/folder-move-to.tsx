import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 12.5094 22 12.7592 21.9997 13M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.8215 20.8926 6.94493 20.9921 11 20.9994',
  d2: 'M19.5 16C20.0057 16.4915 22 17.7998 22 18.5M19.5 21C20.0057 20.5085 22 19.2002 22 18.5M22 18.5L14 18.5',
  d3: 'M12 21H13.25C16.7612 21 18.5167 21 19.7779 20.1573C20.3238 19.7926 20.7926 19.3238 21.1573 18.7779C22 17.5167 22 15.7612 22 12.25C22 10.1433 22 9.08996 21.4944 8.33329C21.2755 8.00572 20.9943 7.72447 20.6667 7.50559C19.91 7 18.8567 7 16.75 7H12L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.92893 21 7.28595 21 12 21Z',
  d4: 'M13.875 19.6309C13.3227 19.6309 12.875 19.1831 12.875 18.6309C12.875 18.0786 13.3227 17.6309 13.875 17.6309L18.375 17.6309L18.375 17.0366C18.3749 16.861 18.3747 16.6453 18.3968 16.4689L18.3972 16.4655C18.413 16.3391 18.4848 15.763 19.0504 15.4887C19.6173 15.2137 20.1174 15.5157 20.2256 15.581L20.6941 15.9201C21.0699 16.2147 21.5844 16.6204 21.9754 17.0009C22.1705 17.1907 22.3717 17.408 22.5306 17.6389C22.6718 17.8441 22.875 18.1943 22.875 18.625C22.875 19.0557 22.6718 19.4059 22.5306 19.6111C22.3717 19.842 22.1705 20.0593 21.9754 20.2491C21.5844 20.6296 21.0699 21.0352 20.6941 21.3299L20.2256 21.669C20.1174 21.7343 19.6172 22.0363 19.0504 21.7613C18.4848 21.487 18.413 20.9109 18.3972 20.7845L18.3968 20.7811C18.3747 20.6047 18.3749 20.389 18.375 20.2134L18.375 19.6309L13.875 19.6309Z',
  d5: 'M9.3376 2.36396C8.69873 2.12439 7.98705 2.12471 6.95764 2.12516C6.0789 2.12515 5.19705 2.12519 4.6247 2.17564C4.03496 2.22762 3.51888 2.33758 3.04758 2.6006C2.44033 2.93948 1.93928 3.44053 1.6004 4.04778C1.33738 4.51908 1.22742 5.03516 1.17544 5.6249C1.12499 6.19725 1.12499 6.90597 1.125 7.78471V10.9326C1.12499 13.241 1.12498 15.05 1.31475 16.4615C1.50899 17.9062 1.91433 19.0463 2.80914 19.9411C3.70395 20.8359 4.84397 21.2412 6.28871 21.4355C7.70019 21.6252 9.50923 21.6252 11.8176 21.6252H12.8261C12.8643 21.6252 12.8834 21.6252 12.8995 21.6235C13.0397 21.6083 13.1504 21.4976 13.1655 21.3574C13.1673 21.3414 13.1673 21.3223 13.1673 21.2841C13.1673 21.2495 13.1673 21.2321 13.1663 21.22C13.1571 21.1067 13.1046 21.0284 13.0032 20.9769C12.9924 20.9714 12.9705 20.9624 12.9266 20.9444C12.0162 20.5708 11.375 19.6756 11.375 18.6305C11.375 17.2498 12.4943 16.1305 13.875 16.1305L16.4235 16.1305C16.6528 16.1305 16.7674 16.1305 16.8451 16.0758C16.9228 16.0211 16.9681 15.8946 17.0585 15.6417C17.2304 15.1608 17.5994 14.525 18.3958 14.1388C19.7026 13.5048 20.8274 14.1907 20.9912 14.2906C21.1443 14.3845 21.3773 14.555 21.6231 14.7445C22.0534 15.0762 22.2685 15.2421 22.4353 15.1617C22.602 15.0814 22.6063 14.8182 22.6147 14.2918C22.625 13.6544 22.625 12.9493 22.625 12.1675C22.625 11.1484 22.625 10.244 22.558 9.58468C22.4887 8.90413 22.3419 8.31392 21.993 7.79181C21.7194 7.38235 21.3679 7.03078 20.9584 6.75719C20.4363 6.40833 19.8461 6.26148 19.1655 6.19225C18.5062 6.12518 17.6845 6.12519 16.6655 6.1252L13.1111 6.1252C12.795 6.1252 12.6146 6.12428 12.4814 6.11051C12.3794 6.10337 12.3098 6.02775 12.2878 5.99083C12.2159 5.87789 11.9588 5.36429 11.8175 5.08156C11.3454 4.12641 10.7331 2.88725 9.3376 2.36396Z',
  d6: 'M13.9775 18H21.4383M18.9913 15L21.9996 18L18.9913 21',
  d7: 'M6.98216 7.0112H21.8936C21.9488 7.0112 21.9936 7.05597 21.9936 7.1112V13.0054M12.0446 20.9987H2.09615C2.04089 20.9987 1.99609 20.954 1.99609 20.8987L1.99621 3.10139C1.99621 3.04616 2.041 3.00139 2.09625 3.00139L8.97032 3.00098L12.1906 7.0112',
  d8: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H11.8359V16.0428H15.7146L19.043 12.7144L22.75 16.4213V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
  d9: 'M19.043 14.8357L22.7502 18.5428L19.043 22.2499L17.6288 20.8357L18.9217 19.5428H13.3359V17.5428H18.9217L17.6288 16.2499L19.043 14.8357Z',
};

export const IconFolderMoveToStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-stroke-rounded IconFolderMoveToStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderMoveToDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-duotone-rounded IconFolderMoveToDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMoveToTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-twotone-rounded IconFolderMoveToTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMoveToSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-solid-rounded IconFolderMoveToSolidRounded"
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

export const IconFolderMoveToBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-bulk-rounded IconFolderMoveToBulkRounded"
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

export const IconFolderMoveToStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-stroke-sharp IconFolderMoveToStrokeSharp"
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

export const IconFolderMoveToSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-move-to-solid-sharp IconFolderMoveToSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderMoveTo: TheIconSelfPack = {
  name: 'FolderMoveTo',
  StrokeRounded: IconFolderMoveToStrokeRounded,
  DuotoneRounded: IconFolderMoveToDuotoneRounded,
  TwotoneRounded: IconFolderMoveToTwotoneRounded,
  SolidRounded: IconFolderMoveToSolidRounded,
  BulkRounded: IconFolderMoveToBulkRounded,
  StrokeSharp: IconFolderMoveToStrokeSharp,
  SolidSharp: IconFolderMoveToSolidSharp,
};