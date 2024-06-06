import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 13.5V21.5M22 17.5L14 17.5',
  d2: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9587 8.52819 21.9963 9.68416 21.9994 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M17.875 12.375C18.4273 12.375 18.875 12.8227 18.875 13.375V16.375H21.875C22.4273 16.375 22.875 16.8227 22.875 17.375C22.875 17.9273 22.4273 18.375 21.875 18.375H18.875V21.375C18.875 21.9273 18.4273 22.375 17.875 22.375C17.3227 22.375 16.875 21.9273 16.875 21.375V18.375H13.875C13.3227 18.375 12.875 17.9273 12.875 17.375C12.875 16.8227 13.3227 16.375 13.875 16.375H16.875V13.375C16.875 12.8227 17.3227 12.375 17.875 12.375Z',
  d5: 'M9.3376 1.86384C8.69873 1.62427 7.98705 1.62458 6.95764 1.62504C6.0789 1.62503 5.19705 1.62506 4.6247 1.67552C4.03496 1.7275 3.51888 1.83746 3.04758 2.10048C2.44033 2.43935 1.93928 2.94041 1.6004 3.54766C1.33738 4.01896 1.22742 4.53504 1.17544 5.12478C1.12498 5.69712 1.12499 6.40585 1.125 7.28458V10.4325C1.12499 12.7408 1.12498 14.5499 1.31475 15.9614C1.50899 17.4061 1.91433 18.5461 2.80914 19.4409C3.70395 20.3358 4.84397 20.7411 6.28871 20.9353C7.70019 21.1251 9.50923 21.1251 11.8176 21.1251H13.1673C13.7478 21.1251 14.286 21.1251 14.7856 21.1209C15.0626 21.1186 15.201 21.1174 15.288 21.0297C15.375 20.942 15.375 20.8026 15.375 20.5239V20.4751C15.375 20.1923 15.375 20.0509 15.2871 19.963C15.1993 19.8751 15.0578 19.8751 14.775 19.8751H13.875C12.4943 19.8751 11.375 18.7558 11.375 17.3751C11.375 15.9944 12.4943 14.8751 13.875 14.8751H14.775C15.0578 14.8751 15.1993 14.8751 15.2871 14.7873C15.375 14.6994 15.375 14.558 15.375 14.2751V13.3751C15.375 11.9944 16.4943 10.8751 17.875 10.8751C19.2557 10.8751 20.375 11.9944 20.375 13.3751V14.2751C20.375 14.558 20.375 14.6994 20.4629 14.7873C20.5507 14.8751 20.6922 14.8751 20.975 14.8751H21.875C22.2263 14.8751 22.402 14.8751 22.4843 14.809C22.5016 14.795 22.5107 14.7862 22.5251 14.7692C22.5934 14.6887 22.5972 14.547 22.6048 14.2636C22.625 13.507 22.625 12.6475 22.625 11.6673C22.625 10.6483 22.625 9.74389 22.558 9.08456C22.4887 8.404 22.3419 7.8138 21.993 7.29169C21.7194 6.88223 21.3679 6.53066 20.9584 6.25707C20.4363 5.90821 19.8461 5.76136 19.1655 5.69213C18.5062 5.62506 17.6845 5.62507 16.6655 5.62508L13.1111 5.62508C12.795 5.62508 12.6146 5.62415 12.4814 5.61039C12.3794 5.60325 12.3098 5.52763 12.2878 5.49071C12.2159 5.37777 11.9588 4.86416 11.8175 4.58144C11.3454 3.62629 10.7331 2.38713 9.3376 1.86384Z',
  d6: 'M20.408 19.9116C20.4233 19.8997 20.415 19.8751 20.3955 19.8751C20.3842 19.8751 20.375 19.8843 20.375 19.8956C20.375 19.9126 20.3946 19.9221 20.408 19.9116Z',
  d7: 'M18 13.5073V21.5127M22 17.51H14',
  d8: 'M6.98662 6.51181H11.9984M11.9984 6.51181H21.99C21.9956 6.51181 22.0001 6.51628 22.0001 6.52181V12.0169M11.9984 6.51181L8.99521 2.51367H2.01007C2.00454 2.51367 2.00006 2.51815 2.00006 2.52367L2.0005 20.4615C2.0005 20.467 1.99492 20.5097 2.00044 20.5097H12.0099',
  d9: 'M17.75 17.25V14.25H19.75V17.25H22.75V19.25H19.75V22.25H17.75V19.25H14.75V17.25H17.75Z',
  d10: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.25V15.75H16.25V12.75H21.25V15.75H22.75V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-stroke-rounded IconFolderAddStrokeRounded"
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

export const IconFolderAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-duotone-rounded IconFolderAddDuotoneRounded"
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

export const IconFolderAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-twotone-rounded IconFolderAddTwotoneRounded"
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

export const IconFolderAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-solid-rounded IconFolderAddSolidRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-bulk-rounded IconFolderAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconFolderAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-stroke-sharp IconFolderAddStrokeSharp"
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

export const IconFolderAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-add-solid-sharp IconFolderAddSolidSharp"
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

export const iconPackOfFolderAdd: TheIconSelfPack = {
  name: 'FolderAdd',
  StrokeRounded: IconFolderAddStrokeRounded,
  DuotoneRounded: IconFolderAddDuotoneRounded,
  TwotoneRounded: IconFolderAddTwotoneRounded,
  SolidRounded: IconFolderAddSolidRounded,
  BulkRounded: IconFolderAddBulkRounded,
  StrokeSharp: IconFolderAddStrokeSharp,
  SolidSharp: IconFolderAddSolidSharp,
};