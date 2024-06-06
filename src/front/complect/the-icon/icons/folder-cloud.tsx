import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.00127 6.50447H16.7537C18.861 6.50447 19.9146 6.50447 20.6714 7.01062C20.9991 7.22974 21.2804 7.51131 21.4994 7.83925C22.0051 8.59676 22 9.90157 22 12.0106M12.0025 6.50447L11.3689 5.23618C10.844 4.18546 10.3643 3.12782 9.20108 2.69122C8.69159 2.5 8.10957 2.5 6.94553 2.5C5.12859 2.5 4.22013 2.5 3.53845 2.88074C3.05253 3.15215 2.65159 3.55344 2.38041 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46484 19.054C4.57905 20.1692 6.20981 20.4361 9.00178 20.5',
  d2: 'M12 18.8333C12 20.3061 13.1193 21.5 14.5 21.5H19.75C20.9926 21.5 22 20.4255 22 19.1C22 17.6579 20.8197 16.6944 19.7388 16.7C19.8774 15.0592 18.6444 13.5 17 13.5C15.5616 13.5 14.3812 14.6779 14.2602 16.1788C12.992 16.3075 12 17.4469 12 18.8333Z',
  d3: 'M12.5483 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 14.6898 22 16.3989 21.5054 17.6175C21.0615 17.0371 20.3825 16.6967 19.7388 16.7C19.8774 15.0592 18.6444 13.5 17 13.5C15.5616 13.5 14.3812 14.6779 14.2602 16.1788C12.992 16.3075 12 17.4468 12 18.8333C12 19.464 12.2052 20.0435 12.5483 20.5Z',
  d4: 'M13.6022 15.5482C13.9744 13.9689 15.3248 12.75 17 12.75C18.897 12.75 20.2896 14.3085 20.4775 16.0519C21.689 16.3902 22.75 17.5431 22.75 19.1C22.75 20.7934 21.4517 22.25 19.75 22.25H14.5C12.6602 22.25 11.25 20.674 11.25 18.8333C11.25 17.3044 12.2191 15.9629 13.6022 15.5482Z',
  d5: 'M9.4626 1.98884C8.82373 1.74927 8.11205 1.74958 7.08264 1.75004C6.2039 1.75003 5.32205 1.75006 4.7497 1.80052C4.15996 1.8525 3.64388 1.96246 3.17258 2.22548C2.56533 2.56435 2.06428 3.06541 1.7254 3.67266C1.46238 4.14396 1.35242 4.66004 1.30044 5.24978C1.24998 5.82212 1.24999 6.53085 1.25 7.40958V10.5575C1.24999 12.8658 1.24998 14.6749 1.43975 16.0864C1.63399 17.5311 2.03933 18.6711 2.93414 19.5659C3.82895 20.4608 4.96897 20.8661 6.41371 21.0603C7.24707 21.1724 8.21901 21.2183 9.35048 21.2371C9.78433 21.2443 10.0013 21.2479 10.0931 21.1256C10.185 21.0034 10.1143 20.7733 9.97294 20.3132C9.82741 19.8395 9.75 19.3408 9.75 18.8335C9.75 17.0463 10.6935 15.3919 12.1956 14.5308C12.2956 14.4735 12.3456 14.4449 12.3772 14.4102C12.4089 14.3755 12.4326 14.3237 12.48 14.2202C13.2592 12.5177 14.9305 11.2501 17 11.2501C19.3601 11.2501 21.0905 12.8699 21.7287 14.7921C21.7495 14.8547 21.7599 14.886 21.7725 14.9093C21.7919 14.9451 21.8105 14.9681 21.8415 14.9946C21.8616 15.0117 21.89 15.0284 21.9468 15.0617C22.1987 15.2095 22.3246 15.2834 22.4019 15.2854C22.5183 15.2883 22.607 15.2396 22.6669 15.1399C22.7067 15.0735 22.7112 14.9467 22.7203 14.6931C22.75 13.8646 22.75 12.9064 22.75 11.7923C22.75 10.7733 22.75 9.86889 22.683 9.20956C22.6137 8.529 22.4669 7.9388 22.118 7.41669C21.8444 7.00723 21.4929 6.65566 21.0834 6.38207C20.5613 6.03321 19.9711 5.88636 19.2905 5.81713C18.6312 5.75006 17.8095 5.75007 16.7905 5.75008L13.2361 5.75008C12.92 5.75008 12.7396 5.74915 12.6064 5.73539C12.5044 5.72825 12.4348 5.65263 12.4128 5.61571C12.3409 5.50277 12.0838 4.98916 11.9425 4.70644C11.4704 3.75129 10.8581 2.51213 9.4626 1.98884Z',
  d6: 'M6.98444 6.50009H11.997M11.997 6.50009H21.99C21.9955 6.50009 22 6.50457 22 6.51009V11.9883M11.997 6.50009L8.99331 2.50195H2.00718C2.00165 2.50195 1.99717 2.50643 1.99717 2.51195L1.99761 20.4498C1.99761 20.4553 1.99204 20.4979 1.99755 20.498L8.99331 20.4498',
  d7: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H10.3671C9.97062 20.5217 9.75 19.6899 9.75 18.8333C9.75 16.9697 10.776 15.2503 12.3915 14.4246C13.1273 12.6201 14.8485 11.25 17 11.25C19.433 11.25 21.1967 12.9714 21.7846 14.9708C22.1301 15.1552 22.4556 15.3856 22.75 15.6567V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderCloudStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-stroke-rounded IconFolderCloudStrokeRounded"
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

export const IconFolderCloudDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-duotone-rounded IconFolderCloudDuotoneRounded"
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

export const IconFolderCloudTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-twotone-rounded IconFolderCloudTwotoneRounded"
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

export const IconFolderCloudSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-solid-rounded IconFolderCloudSolidRounded"
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

export const IconFolderCloudBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-bulk-rounded IconFolderCloudBulkRounded"
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

export const IconFolderCloudStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-stroke-sharp IconFolderCloudStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderCloudSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-cloud-solid-sharp IconFolderCloudSolidSharp"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderCloud: TheIconSelfPack = {
  name: 'FolderCloud',
  StrokeRounded: IconFolderCloudStrokeRounded,
  DuotoneRounded: IconFolderCloudDuotoneRounded,
  TwotoneRounded: IconFolderCloudTwotoneRounded,
  SolidRounded: IconFolderCloudSolidRounded,
  BulkRounded: IconFolderCloudBulkRounded,
  StrokeSharp: IconFolderCloudStrokeSharp,
  SolidSharp: IconFolderCloudSolidSharp,
};