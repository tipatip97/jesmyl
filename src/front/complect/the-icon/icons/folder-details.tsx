import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 15.5L14 15.5M22 18.5H14M18 21.5L14.0001 21.4998',
  d2: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.89331 22 12M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M12.875 15.375C12.875 14.8227 13.3227 14.375 13.875 14.375L21.875 14.375C22.4273 14.375 22.875 14.8227 22.875 15.375C22.875 15.9273 22.4273 16.375 21.875 16.375L13.875 16.375C13.3227 16.375 12.875 15.9273 12.875 15.375ZM12.875 18.375C12.875 17.8227 13.3227 17.375 13.875 17.375H21.875C22.4273 17.375 22.875 17.8227 22.875 18.375C22.875 18.9273 22.4273 19.375 21.875 19.375H13.875C13.3227 19.375 12.875 18.9273 12.875 18.375ZM12.8751 21.3747C12.8751 20.8225 13.3229 20.3748 13.8752 20.3748L17.8751 20.375C18.4273 20.375 18.875 20.8228 18.875 21.3751C18.875 21.9273 18.4272 22.375 17.8749 22.375L13.8751 22.3748C13.3228 22.3748 12.8751 21.927 12.8751 21.3747Z',
  d5: 'M9.3376 1.86384C8.69873 1.62427 7.98705 1.62458 6.95764 1.62504C6.0789 1.62503 5.19705 1.62506 4.6247 1.67552C4.03496 1.7275 3.51888 1.83746 3.04758 2.10048C2.44033 2.43935 1.93928 2.94041 1.6004 3.54766C1.33738 4.01896 1.22742 4.53504 1.17544 5.12478C1.12498 5.69712 1.12499 6.40585 1.125 7.28458V10.4325C1.12499 12.7408 1.12498 14.5499 1.31475 15.9614C1.50899 17.4061 1.91433 18.5461 2.80914 19.4409C3.70395 20.3358 4.84397 20.7411 6.28871 20.9353C7.49531 21.0976 8.99243 21.1211 10.8437 21.1245C11.0843 21.1249 11.2047 21.1252 11.2836 21.0681C11.3625 21.0111 11.4082 20.8721 11.4994 20.5942C11.5376 20.4781 11.584 20.3657 11.638 20.2578C11.742 20.0499 11.794 19.946 11.794 19.8751C11.794 19.8042 11.742 19.7003 11.638 19.4924C11.4697 19.1562 11.375 18.7767 11.375 18.3751C11.375 17.9735 11.4697 17.5941 11.638 17.2578C11.742 17.0499 11.794 16.946 11.794 16.8751C11.794 16.8042 11.742 16.7003 11.638 16.4924C11.4697 16.1562 11.375 15.7767 11.375 15.3751C11.375 13.9944 12.4943 12.8751 13.875 12.8751H21.875C22.2458 12.8751 22.4312 12.8751 22.5139 12.8078C22.5328 12.7925 22.5417 12.7835 22.5571 12.7647C22.6245 12.682 22.6246 12.5312 22.6248 12.2296C22.625 12.0467 22.625 11.8593 22.625 11.6673C22.625 10.6483 22.625 9.74389 22.558 9.08456C22.4887 8.404 22.3419 7.8138 21.993 7.29169C21.7194 6.88223 21.3679 6.53066 20.9584 6.25707C20.4363 5.90821 19.8461 5.76136 19.1655 5.69213C18.5062 5.62506 17.6845 5.62507 16.6655 5.62508L13.1111 5.62508C12.795 5.62508 12.6146 5.62415 12.4814 5.61039C12.3794 5.60325 12.3098 5.52763 12.2878 5.49071C12.2159 5.37777 11.9588 4.86416 11.8175 4.58144C11.3454 3.62629 10.7331 2.38713 9.3376 1.86384Z',
  d6: 'M22 15.25H14M22 18.25H14M18 21.25L14.0001 21.2498',
  d7: 'M6.98444 6.25009H11.997M11.997 6.25009H21.99C21.9955 6.25009 22 6.25457 22 6.26009V11.7383M11.997 6.25009L8.99331 2.25195H2.00718C2.00165 2.25195 1.99717 2.25643 1.99717 2.26195L1.99761 20.1998C1.99761 20.2053 1.99204 20.2479 1.99755 20.248H11.008',
  d8: 'M14.75 14.25L22.75 14.25V16.25L14.75 16.25V14.25ZM14.75 17.25H22.75V19.25H14.75V17.25ZM14.7502 20.2498L18.7501 20.25L18.7499 22.25L14.7501 22.2498L14.7502 20.2498Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.25L13.25 12.75H22.75V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderDetailsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-stroke-rounded IconFolderDetailsStrokeRounded"
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

export const IconFolderDetailsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-duotone-rounded IconFolderDetailsDuotoneRounded"
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

export const IconFolderDetailsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-twotone-rounded IconFolderDetailsTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderDetailsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-solid-rounded IconFolderDetailsSolidRounded"
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

export const IconFolderDetailsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-bulk-rounded IconFolderDetailsBulkRounded"
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

export const IconFolderDetailsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-stroke-sharp IconFolderDetailsStrokeSharp"
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

export const IconFolderDetailsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-details-solid-sharp IconFolderDetailsSolidSharp"
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

export const iconPackOfFolderDetails: TheIconSelfPack = {
  name: 'FolderDetails',
  StrokeRounded: IconFolderDetailsStrokeRounded,
  DuotoneRounded: IconFolderDetailsDuotoneRounded,
  TwotoneRounded: IconFolderDetailsTwotoneRounded,
  SolidRounded: IconFolderDetailsSolidRounded,
  BulkRounded: IconFolderDetailsBulkRounded,
  StrokeSharp: IconFolderDetailsStrokeSharp,
  SolidSharp: IconFolderDetailsSolidSharp,
};