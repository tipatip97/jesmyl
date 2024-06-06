import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.50447H16.75C18.8567 6.50447 19.91 6.50447 20.6667 7.01062C20.9943 7.22974 21.2755 7.51131 21.4944 7.83925C22 8.59676 22 9.65129 22 11.7603C22 12.2047 22.0017 12.1093 22 12.5M12 6.50447L11.3666 5.23618C10.8418 4.18546 10.3622 3.12782 9.19926 2.69122C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88074C3.05227 3.15215 2.65142 3.55344 2.38032 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46447 19.054C4.5784 20.1692 6.20875 20.4361 9 20.5',
  d2: 'M21.4593 17.0153C21.8198 17.4308 22 17.6385 22 18C22 18.3615 21.8198 18.5692 21.4593 18.9847C20.5612 20.0199 18.9381 21.5 17 21.5C15.0619 21.5 13.4388 20.0199 12.5407 18.9847C12.1802 18.5692 12 18.3615 12 18C12 17.6385 12.1802 17.4308 12.5407 17.0153C13.4388 15.9801 15.0619 14.5 17 14.5C18.9381 14.5 20.5612 15.9801 21.4593 17.0153Z',
  d3: 'M17 18H17.009',
  d4: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 14.3897 22 16.0371 21.6419 17.2281C21.5873 17.1628 21.5264 17.0927 21.4593 17.0153C20.5612 15.9801 18.9381 14.5 17 14.5C15.0619 14.5 13.4388 15.9801 12.5407 17.0153C12.1802 17.4308 12 17.6385 12 18C12 18.3615 12.1802 18.5693 12.5407 18.9847C12.9512 19.4579 13.5133 20.0241 14.1876 20.4993C13.8896 20.5 13.5775 20.5 13.25 20.5Z',
  d5: 'M17 13.75C15.8378 13.75 14.8051 14.1931 13.9686 14.7426C13.1312 15.2927 12.4499 15.9755 11.9742 16.5238C11.6683 16.8736 11.25 17.3519 11.25 18C11.25 18.6481 11.6683 19.1264 11.9742 19.4762C12.4499 20.0245 13.1312 20.7073 13.9686 21.2574C14.8051 21.8069 15.8378 22.25 17 22.25C18.1622 22.25 19.1949 21.8069 20.0314 21.2574C20.8688 20.7073 21.5501 20.0245 22.0258 19.4762C22.3317 19.1264 22.75 18.6481 22.75 18C22.75 17.3519 22.3317 16.8736 22.0258 16.5238C21.5501 15.9755 20.8688 15.2927 20.0314 14.7426C19.1949 14.1931 18.1622 13.75 17 13.75ZM16.9855 16.5C16.1608 16.5 15.4922 17.1716 15.4922 18C15.4922 18.8284 16.1608 19.5 16.9855 19.5H16.9989C17.8236 19.5 18.4922 18.8284 18.4922 18C18.4922 17.1716 17.8236 16.5 16.9989 16.5H16.9855Z',
  d6: 'M9.4626 1.98884C8.82373 1.74927 8.11205 1.74958 7.08264 1.75004C6.2039 1.75003 5.32205 1.75006 4.7497 1.80052C4.15996 1.8525 3.64388 1.96246 3.17258 2.22548C2.56533 2.56435 2.06428 3.06541 1.7254 3.67266C1.46238 4.14396 1.35242 4.66004 1.30044 5.24978C1.24998 5.82212 1.24999 6.53085 1.25 7.40958V10.5575C1.24999 12.8658 1.24998 14.6749 1.43975 16.0864C1.63399 17.5311 2.03933 18.6711 2.93414 19.5659C3.82895 20.4608 4.96897 20.8661 6.41371 21.0603C7.50391 21.2069 8.83128 21.2403 10.4427 21.2479C10.7909 21.2495 10.965 21.2503 11.0441 21.1935C11.1333 21.1295 11.1775 21.0331 11.1679 20.9237C11.1594 20.8267 11.0407 20.69 10.8034 20.4165C10.5101 20.0853 9.75 19.2267 9.75 18.0001C9.75 16.7735 10.5501 15.8696 10.8434 15.5384C11.3723 14.929 12.1547 14.1395 13.145 13.489C14.1337 12.8396 15.4513 12.2501 17 12.2501C18.5487 12.2501 19.8663 12.8396 20.855 13.489C21.1512 13.6836 21.4288 13.8906 21.6866 14.1015C22.1565 14.486 22.3915 14.6782 22.5624 14.5984C22.7332 14.5187 22.7366 14.2311 22.7434 13.656C22.75 13.0884 22.75 12.4691 22.75 11.7923C22.75 10.7733 22.75 9.86889 22.683 9.20956C22.6137 8.529 22.4669 7.9388 22.118 7.41669C21.8444 7.00723 21.4929 6.65566 21.0834 6.38207C20.5613 6.03321 19.9711 5.88636 19.2905 5.81713C18.6312 5.75006 17.8095 5.75007 16.7905 5.75008L13.2361 5.75008C12.92 5.75008 12.7396 5.74915 12.6064 5.73539C12.5044 5.72825 12.4348 5.65263 12.4128 5.61571C12.3409 5.50277 12.0838 4.98916 11.9425 4.70644C11.4704 3.75129 10.8581 2.51213 9.4626 1.98884Z',
  d7: 'M17.0144 22.0038C19.7676 22.0038 21.9996 18.5025 21.9996 18.5025C21.9996 18.5025 19.7676 15.0012 17.0144 15.0012C14.2612 15.0012 12.0293 18.5025 12.0293 18.5025C12.0293 18.5025 14.2612 22.0038 17.0144 22.0038Z',
  d8: 'M17.0146 18.5029H17.0236',
  d9: 'M9.01269 20.7979H2.10391C2.04868 20.7979 2.00391 20.7537 2.00391 20.6991L2.00402 3.10027C2.00402 3.04566 2.04879 3.00139 2.10401 3.00138L8.97439 3.00098L12.0138 6.93845M12.0138 6.93845H6.98937M12.0138 6.93845H21.8959C21.9512 6.93845 21.9959 6.98273 21.9959 7.03734V13.3891',
  d10: 'M22.7493 18C22.7493 18 22.1949 17.17 22.06 16.9951C21.7913 16.6467 21.4012 16.1801 20.9159 15.7109C19.9753 14.8012 18.5423 13.75 16.859 13.75C15.1758 13.75 13.7428 14.8012 12.8021 15.7109C12.3169 16.1801 11.9267 16.6467 11.658 16.9951C11.5232 17.17 10.9688 18 10.9688 18C10.9688 18 11.5232 18.83 11.658 19.0049C11.9267 19.3533 12.3169 19.8199 12.8021 20.2891C13.7428 21.1988 15.1758 22.25 16.859 22.25C18.5423 22.25 19.9753 21.1988 20.9159 20.2891C21.4012 19.8199 21.7913 19.3533 22.06 19.0049C22.1949 18.83 22.7493 18 22.7493 18ZM16.8527 16.5C16.0279 16.5 15.3594 17.1716 15.3594 18C15.3594 18.8284 16.0279 19.5 16.8527 19.5H16.8661C17.6908 19.5 18.3594 18.8284 18.3594 18C18.3594 17.1716 17.6908 16.5 16.8661 16.5H16.8527Z',
  d11: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H11.6388C11.144 20.7583 10.7473 20.2813 10.4694 19.9208C10.3667 19.7876 10.1624 19.488 10.0204 19.2785C9.94107 19.1615 9.16406 18 9.16406 18C9.16406 18 9.94107 16.8385 10.0204 16.7215C10.1624 16.512 10.3667 16.2124 10.4694 16.0792C10.7694 15.6901 11.2078 15.1652 11.7586 14.6326C12.7708 13.6538 14.5698 12.25 16.8582 12.25C19.1467 12.25 20.9457 13.6538 21.9579 14.6326C22.2563 14.9212 22.5217 15.2074 22.75 15.4711V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderViewStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-stroke-rounded IconFolderViewStrokeRounded"
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

export const IconFolderViewDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-duotone-rounded IconFolderViewDuotoneRounded"
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

export const IconFolderViewTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-twotone-rounded IconFolderViewTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderViewSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-solid-rounded IconFolderViewSolidRounded"
    >
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

export const IconFolderViewBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-bulk-rounded IconFolderViewBulkRounded"
    >
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

export const IconFolderViewStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-stroke-sharp IconFolderViewStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderViewSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-view-solid-sharp IconFolderViewSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFolderView: TheIconSelfPack = {
  name: 'FolderView',
  StrokeRounded: IconFolderViewStrokeRounded,
  DuotoneRounded: IconFolderViewDuotoneRounded,
  TwotoneRounded: IconFolderViewTwotoneRounded,
  SolidRounded: IconFolderViewSolidRounded,
  BulkRounded: IconFolderViewBulkRounded,
  StrokeSharp: IconFolderViewStrokeSharp,
  SolidSharp: IconFolderViewSolidSharp,
};