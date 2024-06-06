import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 5.77778H16.75C18.8567 5.77778 19.91 5.77778 20.6667 6.25528C20.9943 6.462 21.2755 6.72762 21.4944 7.037C22 7.75163 22 8.74646 22 10.7361C22 14.0522 22 15.7102 21.1573 16.9013C20.7926 17.4169 20.3238 17.8596 19.7779 18.2042C18.5167 19 16.7612 19 13.25 19H12C7.28595 19 4.92893 19 3.46447 17.6169C2 16.2338 2 14.0077 2 9.55556V6.66959C2 4.95403 2 4.09625 2.38032 3.45262C2.65142 2.99381 3.05227 2.61523 3.53806 2.35919C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.1804C10.3622 2.59228 10.8418 3.59004 11.3666 4.58129L12 5.77778',
  d2: 'M12 19V22',
  d3: 'M20 22H4',
  d4: 'M12 19H13.25C16.7612 19 18.5167 19 19.7779 18.2042C20.3238 17.8596 20.7926 17.4169 21.1573 16.9013C22 15.7102 22 14.0522 22 10.7361C22 8.74646 22 7.75163 21.4944 7.03699C21.2755 6.72762 20.9943 6.462 20.6667 6.25528C19.91 5.77778 18.8567 5.77778 16.75 5.77778H12L11.3666 4.58129C10.8418 3.59004 10.3622 2.59228 9.19926 2.1804C8.6899 2 8.10802 2 6.94427 2C5.1278 2 4.21956 2 3.53806 2.35919C3.05227 2.61523 2.65142 2.99381 2.38032 3.45262C2 4.09625 2 4.95403 2 6.66959V9.55556C2 14.0077 2 16.2338 3.46447 17.6169C4.92893 19 7.28595 19 12 19Z',
  d5: 'M12 19V22M20 22H4',
  d6: 'M11.9357 3.92711L12.4516 4.90285L16.7885 4.90284H16.7885C17.8092 4.90284 18.6291 4.90283 19.2863 4.96597C19.9623 5.03092 20.5475 5.16828 21.067 5.49608C21.4758 5.7541 21.8297 6.08744 22.1067 6.4789C22.4627 6.98217 22.6124 7.55213 22.6825 8.20317C22.75 8.8302 22.75 9.69656 22.75 10.6555C22.75 12.276 22.75 13.5529 22.6404 14.571C22.5281 15.6132 22.2942 16.4681 21.7696 17.2095C21.3467 17.8072 20.8053 18.3177 20.1781 18.7135C19.4064 19.2005 18.5196 19.4174 17.4294 19.5222C16.3581 19.6251 15.0117 19.6251 13.2902 19.6251H13.2901H11.9455C9.63466 19.6251 7.82795 19.6251 6.41917 19.4462C4.98195 19.2637 3.84561 18.8836 2.9495 18.0372C2.04733 17.1852 1.6366 16.0951 1.44054 14.7179C1.24997 13.3792 1.24998 11.6658 1.25 9.49076V9.49075V6.50836V6.50835C1.24999 5.6814 1.24998 5.00883 1.30079 4.4645C1.3534 3.90076 1.46536 3.40183 1.73462 2.94615C2.07861 2.36399 2.58363 1.8895 3.18837 1.57077C3.65608 1.32426 4.16724 1.22135 4.75333 1.17255C5.32386 1.12505 6.19872 1.12503 7.07892 1.12503C8.11222 1.12463 8.81678 1.12436 9.44964 1.34849C10.8443 1.84243 11.4608 3.01992 11.9357 3.92711Z',
  d7: 'M12 17.875C12.5523 17.875 13 18.3227 13 18.875V20.875H20C20.5523 20.875 21 21.3227 21 21.875C21 22.4273 20.5523 22.875 20 22.875H4C3.44772 22.875 3 22.4273 3 21.875C3 21.3227 3.44772 20.875 4 20.875H11V18.875C11 18.3227 11.4477 17.875 12 17.875Z',
  d8: 'M11 19.625V20.8755H4C3.44772 20.8755 3 21.3233 3 21.8755C3 22.4278 3.44772 22.8755 4 22.8755H20C20.5523 22.8755 21 22.4278 21 21.8755C21 21.3233 20.5523 20.8755 20 20.8755H13V19.6255H11.9455C11.6205 19.6255 11.3054 19.6255 11 19.625Z',
  d9: 'M12.0055 18.9863V21.9846M21.0002 21.9846H3.01074',
  d10: 'M12.0175 6.00637L9.0114 2.00752L2.10413 1.98828C2.04878 1.98813 2.00384 2.03298 2.00391 2.08832L2.0232 18.8976C2.02326 18.9528 2.06799 18.9974 2.12314 18.9974H11.9533L21.9999 18.9865V6.10629C21.9999 6.0511 21.9551 6.00637 21.8999 6.00637H12.0175ZM12.0175 6.00637H6.99899',
  d11: 'M1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25L9.375 1.25001L12.375 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V19C22.75 19.4142 22.4142 19.75 22 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967Z',
  d12: 'M11.25 21.25V19H12.75V21.25H21V22.75H3V21.25H11.25Z',
};

export const IconFolderShared03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-stroke-rounded IconFolderShared03StrokeRounded"
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

export const IconFolderShared03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-duotone-rounded IconFolderShared03DuotoneRounded"
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

export const IconFolderShared03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-twotone-rounded IconFolderShared03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-solid-rounded IconFolderShared03SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-bulk-rounded IconFolderShared03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-stroke-sharp IconFolderShared03StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-03-solid-sharp IconFolderShared03SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderShared03: TheIconSelfPack = {
  name: 'FolderShared03',
  StrokeRounded: IconFolderShared03StrokeRounded,
  DuotoneRounded: IconFolderShared03DuotoneRounded,
  TwotoneRounded: IconFolderShared03TwotoneRounded,
  SolidRounded: IconFolderShared03SolidRounded,
  BulkRounded: IconFolderShared03BulkRounded,
  StrokeSharp: IconFolderShared03StrokeSharp,
  SolidSharp: IconFolderShared03SolidSharp,
};