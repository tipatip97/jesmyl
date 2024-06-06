import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3622 3.12712 10.8418 4.18358 11.3666 5.23313L12 6.5M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 12.0094 22.0003 12.2592 22 12.5',
  d2: 'M22 15.5L16 21.5M22 21.5L16 15.5',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M15.1679 14.668C15.5584 14.2775 16.1916 14.2775 16.5821 14.668L18.875 16.9609L21.1679 14.668C21.5584 14.2775 22.1916 14.2775 22.5821 14.668C22.9726 15.0585 22.9726 15.6917 22.5821 16.0822L20.2892 18.3751L22.5821 20.668C22.9726 21.0585 22.9726 21.6917 22.5821 22.0822C22.1916 22.4728 21.5584 22.4728 21.1679 22.0822L18.875 19.7893L16.5821 22.0822C16.1916 22.4728 15.5584 22.4728 15.1679 22.0822C14.7774 21.6917 14.7774 21.0585 15.1679 20.668L17.4608 18.3751L15.1679 16.0822C14.7774 15.6917 14.7774 15.0585 15.1679 14.668Z',
  d5: 'M9.3376 1.86372C8.69873 1.62415 7.98705 1.62446 6.95764 1.62492C6.0789 1.62491 5.19705 1.62494 4.6247 1.67539C4.03496 1.72738 3.51888 1.83734 3.04758 2.10035C2.44033 2.43923 1.93928 2.94029 1.6004 3.54754C1.33738 4.01884 1.22742 4.53492 1.17544 5.12465C1.12498 5.697 1.12499 6.40573 1.125 7.28446V10.4323C1.12499 12.7407 1.12498 14.5498 1.31475 15.9613C1.50899 17.406 1.91433 18.546 2.80914 19.4408C3.70395 20.3356 4.84397 20.741 6.28871 20.9352C7.70019 21.125 9.50923 21.125 11.8176 21.125L12.8444 21.125C13.0851 21.125 13.2055 21.125 13.2842 21.0679C13.363 21.0108 13.4084 20.8721 13.4993 20.5946C13.6176 20.2336 13.8202 19.8941 14.1072 19.6071L14.9152 18.7991C15.1152 18.5991 15.2152 18.4991 15.2152 18.3749C15.2152 18.2506 15.1152 18.1506 14.9152 17.9506L14.1072 17.1426C13.1309 16.1663 13.1309 14.5834 14.1072 13.6071C15.0835 12.6308 16.6665 12.6308 17.6428 13.6071L18.4507 14.4151C18.6507 14.6151 18.7507 14.7151 18.875 14.7151C18.9993 14.7151 19.0993 14.6151 19.2993 14.4151L20.1072 13.6071C20.5821 13.1323 21.2004 12.8884 21.8227 12.8754C22.243 12.8667 22.4532 12.8623 22.5389 12.7749C22.6245 12.6875 22.6247 12.5174 22.6249 12.1772C22.625 12.0109 22.625 11.841 22.625 11.6672C22.625 10.6482 22.625 9.74377 22.558 9.08444C22.4887 8.40388 22.3419 7.81368 21.993 7.29157C21.7194 6.88211 21.3679 6.53054 20.9584 6.25695C20.4363 5.90809 19.8461 5.76124 19.1655 5.69201C18.5062 5.62494 17.6845 5.62495 16.6655 5.62496L13.1111 5.62496C12.795 5.62496 12.6146 5.62403 12.4814 5.61027C12.3794 5.60313 12.3098 5.52751 12.2878 5.49059C12.2159 5.37765 11.9588 4.86404 11.8175 4.58131C11.3454 3.62617 10.7331 2.38701 9.3376 1.86372Z',
  d6: 'M21.9973 14.999L14.9961 21.999M21.9973 21.999L14.9961 14.999',
  d7: 'M6.98424 7.01022H12.0822M12.0822 7.01022H21.8902C21.9454 7.01022 21.9902 7.05499 21.9902 7.11022V12.501M12.0822 7.01022L8.97168 3L2.10012 3.00041C2.04489 3.00041 2.00011 3.04518 2.00011 3.10041L2 20.8978C2 20.953 2.04478 20.9978 2.10002 20.9978H12.0448',
  d8: 'M19.9573 18.0428L22.7502 20.8357L21.3359 22.2499L18.543 19.457L15.7502 22.2499L14.3359 20.8357L17.1288 18.0428L14.3359 15.2499L15.7502 13.8357L18.543 16.6286L21.3359 13.8357L22.7502 15.2499L19.9573 18.0428Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H12.6292L12.2148 20.8357L15.0077 18.0428L12.2148 15.2499L15.7504 11.7144L18.5433 14.5072L21.3362 11.7144L22.75 13.1282V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-stroke-rounded IconFolderRemoveStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-duotone-rounded IconFolderRemoveDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-twotone-rounded IconFolderRemoveTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-solid-rounded IconFolderRemoveSolidRounded"
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

export const IconFolderRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-bulk-rounded IconFolderRemoveBulkRounded"
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

export const IconFolderRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-stroke-sharp IconFolderRemoveStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-remove-solid-sharp IconFolderRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFolderRemove: TheIconSelfPack = {
  name: 'FolderRemove',
  StrokeRounded: IconFolderRemoveStrokeRounded,
  DuotoneRounded: IconFolderRemoveDuotoneRounded,
  TwotoneRounded: IconFolderRemoveTwotoneRounded,
  SolidRounded: IconFolderRemoveSolidRounded,
  BulkRounded: IconFolderRemoveBulkRounded,
  StrokeSharp: IconFolderRemoveStrokeSharp,
  SolidSharp: IconFolderRemoveSolidSharp,
};