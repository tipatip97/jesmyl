import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.7104 8.70122L21.9186 12.7288C21.9578 12.8592 21.9773 12.9244 21.9879 12.9914L21.9908 13.0118C22 13.079 22 13.147 22 13.2831C22 16.7797 22 18.528 20.9812 19.6669C20.8824 19.7774 20.7774 19.8824 20.6669 19.9812C19.528 21 17.7797 21 14.2831 21H9.71685C6.22026 21 4.47197 21 3.33311 19.9812C3.22259 19.8824 3.11765 19.7774 3.01877 19.6669C2 18.528 2 16.7797 2 13.2831C2 13.147 2 13.079 2.00915 13.0118L2.01215 12.9914C2.02269 12.9244 2.04225 12.8592 2.08136 12.7288L3.28963 8.70122C4.11355 5.95484 4.5255 4.58166 5.5884 3.79083C6.6513 3 8.08495 3 10.9522 3H13.0478C15.9151 3 17.3487 3 18.4116 3.79083C19.4745 4.58166 19.8865 5.95484 20.7104 8.70122Z',
  d2: 'M2 13H22',
  d3: 'M17.9888 17H18M13 17H13.0112',
  d4: 'M20.7183 8.69451L21.9277 12.7174C21.9669 12.8476 21.9865 12.9127 21.997 12.9796C21.9986 12.9904 21.9902 13 21.9794 13L2.003 12.9796C2.01355 12.9127 2.03312 12.8476 2.07227 12.7174L3.28165 8.69451C4.10632 5.95137 4.51865 4.5798 5.58253 3.7899C6.6464 3 8.08136 3 10.9513 3H13.0487C15.9186 3 17.3536 3 18.4175 3.7899C19.4813 4.5798 19.8937 5.95137 20.7183 8.69451Z',
  d5: 'M13.0831 2.25H10.9166H10.9166H10.9166C9.56503 2.24998 8.4663 2.24997 7.57897 2.35153C6.65331 2.45747 5.85556 2.68278 5.14787 3.20079C4.44017 3.71879 3.99157 4.40577 3.62244 5.24756C3.26858 6.05452 2.95289 7.08982 2.56454 8.3634L1.36632 12.2927L1.28568 12.6079L1.28568 12.6079C1.27748 12.64 1.27337 12.656 1.2711 12.6724C1.26884 12.6887 1.26842 12.7052 1.2676 12.7383L1.25 13.4418V13.4418V13.4418C1.24999 15.1243 1.24998 16.4571 1.38317 17.5068C1.52004 18.5855 1.80783 19.4674 2.4598 20.187C2.5772 20.3166 2.70182 20.4396 2.83307 20.5555C3.56189 21.1992 4.45505 21.4834 5.5476 21.6185C6.61069 21.75 7.96057 21.75 9.66452 21.75H9.66456H9.66459H9.66463H14.3354H14.3354H14.3354H14.3355C16.0394 21.75 17.3893 21.75 18.4524 21.6185C19.545 21.4834 20.4381 21.1992 21.1669 20.5555C21.2982 20.4396 21.4228 20.3166 21.5402 20.187C22.1922 19.4674 22.48 18.5855 22.6168 17.5068C22.75 16.4572 22.75 15.1244 22.75 13.442V13.442V13.442V13.4419L22.7321 12.7382C22.7313 12.7052 22.7309 12.6887 22.7286 12.6724C22.7263 12.656 22.7222 12.64 22.7141 12.608L22.6334 12.2927L21.4352 8.36342C21.0468 7.08983 20.7311 6.05452 20.3773 5.24756C20.0081 4.40577 19.5595 3.71879 18.8519 3.20079C18.1442 2.68278 17.3464 2.45747 16.4208 2.35153C15.5334 2.24997 14.4347 2.24998 13.0832 2.25H13.0831H13.0831ZM20.3807 11.599L19.579 8.96992C19.1696 7.62748 18.8852 6.70003 18.5817 6.00778C18.2882 5.33867 18.0159 4.98496 17.6844 4.74234C17.353 4.49973 16.9303 4.34472 16.1946 4.26051C15.4333 4.17339 14.4486 4.17188 13.024 4.17188H10.9753C9.55061 4.17188 8.5659 4.17339 7.80469 4.26051C7.06893 4.34472 6.64629 4.49973 6.31483 4.74234C5.98337 4.98496 5.711 5.33867 5.41759 6.00778C5.11404 6.70003 4.82961 7.62748 4.42024 8.96992L3.61371 11.6148C3.50704 11.9645 3.45371 12.1394 3.5438 12.259C3.63388 12.3785 3.81887 12.3783 4.18885 12.3779L19.8068 12.3622C20.1761 12.3618 20.3607 12.3616 20.4506 12.2422C20.5404 12.1227 20.4872 11.9481 20.3807 11.599ZM12 17C12 16.4477 12.4477 16 13 16H13.0112C13.5635 16 14.0112 16.4477 14.0112 17C14.0112 17.5523 13.5635 18 13.0112 18H13C12.4477 18 12 17.5523 12 17ZM16.9888 17C16.9888 16.4477 17.4365 16 17.9888 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H17.9888C17.4365 18 16.9888 17.5523 16.9888 17Z',
  d6: 'M10.9166 2.25H13.0831H13.0831C14.4347 2.24998 15.5334 2.24997 16.4208 2.35152C17.3464 2.45747 18.1442 2.68278 18.8519 3.20078C19.5595 3.71879 20.0081 4.40577 20.3773 5.24756C20.7311 6.05452 21.0468 7.08983 21.4352 8.36342L22.6334 12.2927L22.7141 12.608C22.7222 12.64 22.7263 12.656 22.7286 12.6724C22.7309 12.6887 22.7313 12.7052 22.7321 12.7382L22.75 13.4419V13.442V13.442C22.75 15.1244 22.75 16.4572 22.6168 17.5068C22.48 18.5855 22.1922 19.4674 21.5402 20.187C21.4228 20.3166 21.2982 20.4396 21.1669 20.5555C20.4381 21.1992 19.545 21.4834 18.4524 21.6185C17.3893 21.75 16.0394 21.75 14.3354 21.75H14.3354H14.3354H9.66463H9.66459H9.66456C7.96059 21.75 6.61069 21.75 5.5476 21.6185C4.45505 21.4834 3.56189 21.1992 2.83307 20.5555C2.70182 20.4396 2.5772 20.3166 2.4598 20.187C1.80783 19.4674 1.52004 18.5855 1.38317 17.5068C1.24998 16.4571 1.24999 15.1243 1.25 13.4418V13.4418L1.2676 12.7383C1.26842 12.7052 1.26884 12.6887 1.2711 12.6724C1.27337 12.656 1.27748 12.64 1.28568 12.6079L1.28568 12.6079L1.36632 12.2927L2.56454 8.3634C2.95289 7.08982 3.26858 6.05452 3.62244 5.24756C3.99157 4.40577 4.44017 3.71879 5.14787 3.20078C5.85556 2.68278 6.65331 2.45747 7.57897 2.35152C8.4663 2.24997 9.56504 2.24998 10.9166 2.25H10.9166ZM19.579 8.96992L20.3807 11.599C20.4872 11.9481 20.5404 12.1227 20.4506 12.2422C20.3607 12.3616 20.1761 12.3618 19.8068 12.3622L4.18885 12.3779C3.81887 12.3783 3.63388 12.3785 3.5438 12.259C3.45371 12.1394 3.50704 11.9645 3.61371 11.6147L4.42024 8.96992C4.82961 7.62748 5.11404 6.70003 5.41759 6.00778C5.711 5.33867 5.98337 4.98496 6.31483 4.74234C6.64629 4.49973 7.06893 4.34472 7.80469 4.26051C8.5659 4.17339 9.55061 4.17188 10.9753 4.17188H13.024C14.4486 4.17188 15.4333 4.17339 16.1946 4.26051C16.9303 4.34472 17.353 4.49973 17.6844 4.74234C18.0159 4.98496 18.2882 5.33867 18.5817 6.00778C18.8852 6.70003 19.1696 7.62748 19.579 8.96992Z',
  d7: 'M13 16C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H13.0112C13.5635 18 14.0112 17.5523 14.0112 17C14.0112 16.4477 13.5635 16 13.0112 16H13ZM17.9888 16C17.4365 16 16.9888 16.4477 16.9888 17C16.9888 17.5523 17.4365 18 17.9888 18H18C18.5523 18 19 17.5523 19 17C19 16.4477 18.5523 16 18 16H17.9888Z',
  d8: 'M1.99902 12.9902H21.999',
  d9: 'M17.9878 17.002H17.999M12.999 17.002H13.0102',
  d10: 'M4.93761 3.06986L2.01367 12.9717V21.002H22.001V13.0535L19.0361 3.06972C19.0234 3.02719 18.9845 2.99805 18.9402 2.99805H5.03349C4.9892 2.99805 4.95019 3.02727 4.93761 3.06986Z',
  d11: 'M5.15909 2.25C4.72752 2.25 4.34704 2.53243 4.22303 2.94484L1.29122 12.6948C1.26388 12.7857 1.25 12.8801 1.25 12.975V21.75H22.75V12.975C22.75 12.8801 22.7361 12.7857 22.7088 12.6948L19.777 2.94484C19.653 2.53243 19.2725 2.25 18.8409 2.25H5.15909ZM3.46484 12.25L5.88547 4.19995H18.113L20.5337 12.25H3.46484ZM14.0112 16H12V18H14.0112V16ZM19 16H16.9888V18H19V16Z',
} as const;

export const IconHardDriveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-stroke-rounded IconHardDriveStrokeRounded"
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

export const IconHardDriveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-duotone-rounded IconHardDriveDuotoneRounded"
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

export const IconHardDriveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-twotone-rounded IconHardDriveTwotoneRounded"
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

export const IconHardDriveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-solid-rounded IconHardDriveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHardDriveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-bulk-rounded IconHardDriveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHardDriveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-stroke-sharp IconHardDriveStrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHardDriveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hard-drive-solid-sharp IconHardDriveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHardDrive: TheIconSelfPack = {
  name: 'HardDrive',
  StrokeRounded: IconHardDriveStrokeRounded,
  DuotoneRounded: IconHardDriveDuotoneRounded,
  TwotoneRounded: IconHardDriveTwotoneRounded,
  SolidRounded: IconHardDriveSolidRounded,
  BulkRounded: IconHardDriveBulkRounded,
  StrokeSharp: IconHardDriveStrokeSharp,
  SolidSharp: IconHardDriveSolidSharp,
};