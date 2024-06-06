import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.68924 2.43826L5.3538 4.21913C4.38173 4.96038 3.89569 5.33101 4.01879 5.6655C4.14189 6 4.76432 6 6.00918 6H16C16.3645 6 16.5467 6 16.7153 5.94363C16.8839 5.88726 17.0262 5.77875 17.3108 5.56174L19.6462 3.78087C20.6183 3.03962 21.1043 2.66899 20.9812 2.3345C20.8581 2 20.2357 2 18.9908 2H9C8.63555 2 8.45332 2 8.28472 2.05637C8.11612 2.11274 7.97383 2.22125 7.68924 2.43826Z',
  d2: 'M4.01879 21.666C4.14189 22.0005 4.76432 22.0005 6.00918 22.0005H16C16.3645 22.0005 16.5467 22.0005 16.7153 21.9441M4.01879 21.666C3.89569 21.3315 4.38173 20.9608 5.3538 20.2196L7.68924 18.4387C7.97383 18.2217 8.11612 18.1132 8.28472 18.0568M4.01879 21.666V5.66597M8.28472 18.0568C8.45332 18.0005 8.63555 18.0005 9 18.0005H14M8.28472 18.0568V9.00046M16.7153 21.9441C16.8839 21.8877 17.0262 21.7792 17.3108 21.5622L19.6462 19.7813C20.6183 19.0401 21.1043 18.6695 20.9812 18.335V2.33496M16.7153 21.9441V5.94409',
  d3: 'M17.3103 21.5612L19.6458 19.7804C20.6178 19.0391 21.1039 18.6685 20.9808 18.334V2.33398L16.7148 5.94312V21.9431C16.8834 21.8867 17.0257 21.7782 17.3103 21.5612Z',
  d4: 'M4.01879 21.665C4.14189 21.9995 4.76432 21.9995 6.00918 21.9995H16C16.3645 21.9995 16.5467 21.9995 16.7153 21.9431M4.01879 21.665C3.89569 21.3305 4.38173 20.9599 5.3538 20.2186L7.68924 18.4377C7.97383 18.2207 8.11612 18.1122 8.28472 18.0559M4.01879 21.665V5.66499M8.28472 18.0559C8.45332 17.9995 8.63555 17.9995 9 17.9995H14M8.28472 18.0559V8.99949M16.7153 21.9431C16.8839 21.8867 17.0262 21.7782 17.3108 21.5612L19.6462 19.7804C20.6183 19.0391 21.1043 18.6685 20.9812 18.334V2.33398M16.7153 21.9431V5.94312',
  d5: 'M16.716 21.9431C16.5474 21.9995 16.3652 21.9995 16.0007 21.9995H6.00993C4.76506 21.9995 4.14263 21.9995 4.01953 21.665V5.66499M16.716 21.9431C16.8846 21.8867 17.0269 21.7782 17.3115 21.5612L19.6469 19.7804C20.619 19.0391 21.1051 18.6685 20.982 18.334V2.33398M16.716 21.9431V5.94312',
  d6: 'M8.28547 18L4.01953 21.6655M8.28547 18C8.28547 18 8.63629 18 9.00074 18H14.0007M8.28547 18V9',
  d7: 'M21.2313 4.29059C21.2313 3.75128 21.2313 3.48162 21.0619 3.39973C20.8924 3.31783 20.6811 3.48537 20.2585 3.82045L15.6938 7.43998C15.5813 7.52923 15.525 7.57385 15.4951 7.63575C15.4652 7.69765 15.4653 7.77001 15.4654 7.91474C15.4654 7.94254 15.4654 7.97102 15.4654 8.00019V21.9438C15.4654 22.185 15.5814 22.4115 15.7771 22.5525C15.9729 22.6934 16.2245 22.7316 16.4532 22.6551C16.7439 22.5579 16.9824 22.3752 17.2115 22.1997L19.6442 20.3446C20.0932 20.0022 20.4908 19.6991 20.7542 19.4363C20.8912 19.2996 21.043 19.1253 21.1413 18.914C21.2247 18.7349 21.2715 18.5228 21.2407 18.2975C21.2354 18.2584 21.2327 18.2388 21.232 18.2287C21.2313 18.2185 21.2313 18.2067 21.2313 18.183V4.29059ZM14.3133 6.62033C14.2322 6.68464 14.1916 6.7168 14.1437 6.7335C14.0958 6.75019 14.044 6.75019 13.9405 6.75019L5.45685 6.7502H5.45684C4.87937 6.75024 4.37288 6.75028 3.9982 6.70231C3.80344 6.67738 3.57922 6.6327 3.3743 6.53136C3.14862 6.41975 2.92659 6.22783 2.81505 5.92472C2.70225 5.61823 2.74865 5.3233 2.85887 5.08642C2.95718 4.87514 3.10898 4.70082 3.24598 4.56412C3.50943 4.30125 3.90698 3.99816 4.356 3.65583L6.78871 1.80066C7.01785 1.62515 7.25637 1.44245 7.54701 1.34527C7.83536 1.24886 8.13696 1.24949 8.43054 1.2501L18.5199 1.25019C19.0139 1.25018 19.4483 1.25017 19.7889 1.27657C19.831 1.27984 19.8756 1.28365 19.922 1.28847C20.2251 1.31996 20.3766 1.3357 20.433 1.52935C20.4895 1.723 20.3479 1.83528 20.0647 2.05984L14.3133 6.62033Z',
  d8: 'M3.73448 4.92188C4.26817 4.92188 4.7008 5.35726 4.7008 5.89434V19.0727C4.7008 19.0727 6.84202 17.4289 6.89043 17.3927V9.13703C6.89043 8.59995 7.32307 8.16456 7.85676 8.16456C8.39044 8.16456 8.82308 8.59995 8.82308 9.13703V16.9168L13.3795 16.9167C13.9131 16.9167 14.3458 17.3521 14.3458 17.8892C14.3458 18.4263 13.9132 18.8617 13.3795 18.8617L8.16488 18.8687L5.62863 20.8066L15.709 20.798C16.2118 20.636 16.752 20.9106 16.9199 21.4159C17.0891 21.9253 16.816 22.4762 16.3098 22.6465C15.9915 22.7537 15.6601 22.7526 15.3843 22.7517L5.59538 22.7516C5.04792 22.7516 4.54475 22.7517 4.16696 22.703C3.96863 22.6775 3.72105 22.6297 3.48766 22.5135C3.22752 22.3841 2.96142 22.1556 2.82762 21.7897C2.7466 21.5681 2.73314 21.3455 2.76815 21.1381V5.89434C2.76815 5.35726 3.20079 4.92188 3.73448 4.92188Z',
  d9: 'M15.4654 20.7972V21.9442C15.4654 22.1854 15.5814 22.4119 15.7771 22.5528C15.8875 22.6323 16.0155 22.6791 16.1473 22.6911C15.8808 22.7522 15.6134 22.7514 15.3843 22.7506L5.59538 22.7505C5.04792 22.7505 4.54475 22.7506 4.16696 22.7019C3.96863 22.6764 3.72105 22.6286 3.48766 22.5125C3.22752 22.383 2.96142 22.1545 2.82762 21.7886C2.7466 21.567 2.73314 21.3445 2.76815 21.1371V5.89326C2.76815 5.85672 2.77016 5.82065 2.77406 5.78516C2.78421 5.83142 2.79776 5.87813 2.81505 5.92511C2.92659 6.22821 3.14862 6.42013 3.3743 6.53174C3.57922 6.63309 3.80344 6.67776 3.9982 6.70269C4.19799 6.72827 4.43527 6.7402 4.7008 6.74576V19.0717C4.7008 19.0717 6.84202 17.4278 6.89043 17.3916V9.13594C6.89043 8.59887 7.32307 8.16348 7.85676 8.16348C8.39044 8.16348 8.82308 8.59887 8.82308 9.13594V16.9157L13.3795 16.9157C13.9131 16.9156 14.3458 17.351 14.3458 17.8881C14.3458 18.4252 13.9132 18.8606 13.3795 18.8606L8.16488 18.8677L5.62863 20.8055L15.4654 20.7972Z',
  d10: 'M7.99977 2L3.99902 6H16.999L20.999 2H7.99977Z',
  d11: 'M7.99902 18V8.94363M7.99902 18L13.9998 18.0005M7.99902 18L4.48715 21.5119M20.9998 2V18L16.999 22.0564L3.99902 22V6M16.999 6V21.5119',
  d12: 'M15.5 8.4224V21.0008L5.9038 20.9593L7.91418 18.954L13.5007 18.9545L13.5008 16.9596L8.5 16.9592V8.92333H6.5V17.5434L4.5 19.5383V6.98466H14.113L20.1135 1H7.50074C7.23556 1 6.98123 1.10506 6.7937 1.29208L2.79296 5.28186C2.60538 5.46892 2.5 5.72265 2.5 5.98722V21.9463C2.5 22.4955 2.94508 22.9414 3.49566 22.9438L16.4957 23C16.7648 23.0012 17.023 22.8941 17.212 22.703L21.2127 18.657C21.3973 18.4703 21.5008 18.2187 21.5007 17.9565L21.5 2.43825L15.5 8.4224Z',
};

export const IconRectangular01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-stroke-rounded IconRectangular01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRectangular01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-duotone-rounded IconRectangular01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangular01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-twotone-rounded IconRectangular01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangular01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-solid-rounded IconRectangular01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangular01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-bulk-rounded IconRectangular01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangular01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-stroke-sharp IconRectangular01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRectangular01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rectangular-01-solid-sharp IconRectangular01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRectangular01: TheIconSelfPack = {
  name: 'Rectangular01',
  StrokeRounded: IconRectangular01StrokeRounded,
  DuotoneRounded: IconRectangular01DuotoneRounded,
  TwotoneRounded: IconRectangular01TwotoneRounded,
  SolidRounded: IconRectangular01SolidRounded,
  BulkRounded: IconRectangular01BulkRounded,
  StrokeSharp: IconRectangular01StrokeSharp,
  SolidSharp: IconRectangular01SolidSharp,
};