import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 20.0001C19.9275 20.0545 19.8534 20.1069 19.7779 20.1574C18.5167 21.0001 16.7612 21.0001 13.25 21.0001H12C7.28595 21.0001 4.92893 21.0001 3.46447 19.5356C2 18.0711 2 15.7141 2 11.0001V7.94433C2 6.12785 2 5.21962 2.38032 4.53812C2.61398 4.11941 2.94402 3.76381 3.34177 3.5',
  d2: 'M11 6.99998H16.75C18.8567 6.99998 19.91 6.99998 20.6667 7.50557C20.9943 7.72445 21.2755 8.0057 21.4944 8.33327C22 9.08994 22 10.1433 22 12.25C22 14.3906 22 15.8787 21.8091 17M12 6.99998L11.3666 5.73311C10.8418 4.68355 10.3622 3.6271 9.19926 3.19099C8.77825 3.03311 8.3077 3.00573 7.5 3.00098H7',
  d3: 'M2 2L22 22',
  d4: 'M12 21.0025H13.25H13.25C16.7612 21.0025 18.5167 21.0025 19.7779 20.1598C19.8781 20.0928 19.9758 20.0223 20.0707 19.9485L3.53806 3.38281C3.05227 3.65392 2.65142 4.05476 2.38032 4.54056C2 5.22206 2 6.1303 2 7.94677V11.0025C2 15.7165 2 18.0736 3.46447 19.538C4.92893 21.0025 7.28595 21.0025 12 21.0025Z',
  d5: 'M11 6.999H16.75C18.8567 6.999 19.91 6.999 20.6667 7.50459C20.9943 7.72347 21.2755 8.00472 21.4944 8.33229C22 9.08896 22 10.1423 22 12.249C22 14.3896 22 15.8777 21.8091 16.999M12 6.999L11.3666 5.73213C10.8418 4.68258 10.3622 3.62612 9.19926 3.19001C8.77825 3.03214 8.3077 3.00475 7.5 3H7',
  d6: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d7: 'M7.08264 2.25004C8.11205 2.24958 8.82373 2.24927 9.4626 2.48884C10.8581 3.01213 11.4704 4.25129 11.9425 5.20644C12.0838 5.48916 12.3409 6.00277 12.4128 6.11571C12.4348 6.15263 12.5044 6.22825 12.6064 6.23539C12.7396 6.24915 12.92 6.25008 13.2361 6.25008L16.7905 6.25008C17.8095 6.25007 18.6312 6.25006 19.2905 6.31713C19.9711 6.38636 20.5613 6.53321 21.0834 6.88207C21.4929 7.15566 21.8444 7.50723 22.118 7.91669C22.4669 8.4388 22.6137 9.029 22.683 9.70956C22.75 10.3689 22.75 11.2733 22.75 12.2923C22.75 14.0121 22.75 15.3603 22.6408 16.4337C22.5917 16.9169 22.5192 17.3606 22.409 17.7721C22.3137 18.1283 22.266 18.3064 22.0987 18.3513C21.9314 18.3961 21.7908 18.2555 21.5096 17.9744L6.70457 3.16932C6.35867 2.82342 6.18572 2.65046 6.21461 2.49516C6.22222 2.45425 6.23865 2.41459 6.2622 2.38028C6.35159 2.25003 6.59527 2.25003 7.08264 2.25004Z',
  d8: 'M20.1945 20.781C19.4202 21.2984 18.5283 21.5295 17.4336 21.6409C16.3602 21.7501 15.012 21.7501 13.2923 21.7501H11.9426C9.63423 21.7501 7.82519 21.7501 6.41371 21.5603C4.96897 21.3661 3.82895 20.9608 2.93414 20.0659C2.03933 19.1711 1.63399 18.0311 1.43975 16.5864C1.24998 15.1749 1.24999 13.3658 1.25 11.0575V7.90957C1.24999 7.03084 1.24999 6.32212 1.30044 5.74978C1.35242 5.16004 1.46238 4.64396 1.7254 4.17266C1.93016 3.80573 2.19414 3.47758 2.50498 3.20055C2.66845 3.05486 2.75019 2.98201 2.86938 2.98544C2.98858 2.98886 3.07451 3.07479 3.24636 3.24664L20.2379 20.2382C20.2858 20.2861 20.3098 20.31 20.3269 20.3365C20.3999 20.4488 20.3837 20.6133 20.2902 20.7092C20.2682 20.7318 20.2437 20.7482 20.1945 20.781Z',
  d9: 'M7.08208 2.25004C8.11148 2.24958 8.82317 2.24927 9.46203 2.48884C10.8575 3.01213 11.4699 4.25129 11.9419 5.20644C12.0833 5.48916 12.3403 6.00277 12.4122 6.11571C12.4342 6.15263 12.5038 6.22825 12.6058 6.23539C12.739 6.24915 12.9194 6.25008 13.2355 6.25008L16.7899 6.25008C17.8089 6.25007 18.6306 6.25006 19.29 6.31713C19.9705 6.38636 20.5607 6.53321 21.0828 6.88207C21.4923 7.15566 21.8439 7.50723 22.1174 7.91669C22.4663 8.4388 22.6132 9.029 22.6824 9.70956C22.7495 10.3689 22.7494 11.2733 22.7494 12.2923C22.7494 14.0121 22.7495 15.3603 22.6403 16.4337C22.5911 16.9169 22.5186 17.3606 22.4085 17.7721C22.3131 18.1283 22.2655 18.3064 22.0981 18.3513C21.9308 18.3961 21.7902 18.2555 21.509 17.9744L6.70401 3.16932C6.35811 2.82342 6.18516 2.65046 6.21405 2.49516C6.22166 2.45425 6.23809 2.41459 6.26164 2.38028C6.35102 2.25003 6.59471 2.25003 7.08208 2.25004Z',
  d10: 'M20.1945 20.7801C19.4202 21.2975 18.5283 21.5286 17.4336 21.64C16.3602 21.7491 15.012 21.7491 13.2923 21.7491H11.9426C9.63423 21.7491 7.82519 21.7492 6.41371 21.5594C4.96897 21.3651 3.82895 20.9598 2.93414 20.065C2.03933 19.1702 1.63399 18.0302 1.43975 16.5854C1.24998 15.1739 1.24999 13.3649 1.25 11.0565V7.90863C1.24999 7.0299 1.24999 6.32118 1.30044 5.74883C1.35242 5.15909 1.46238 4.64302 1.7254 4.17171C1.93016 3.80479 2.19414 3.47663 2.50498 3.1996C2.66845 3.05391 2.75019 2.98107 2.86938 2.98449C2.98858 2.98792 3.07451 3.07384 3.24636 3.2457L20.2379 20.2373C20.2858 20.2852 20.3098 20.3091 20.3269 20.3355C20.3999 20.4479 20.3837 20.6123 20.2902 20.7083C20.2682 20.7308 20.2437 20.7473 20.1945 20.7801Z',
  d11: 'M6.49121 3.01758H9.00342L12.0112 6.98321H21.9C21.9553 6.98321 22 7.02798 22 7.08321V18.0199M3.00098 2.99707H2.108C2.05277 2.99707 2.008 3.04184 2.008 3.09707L2.00781 20.904C2.00781 20.9593 2.05258 21.004 2.10781 21.004H21.0189',
  d12: 'M2 2.25C1.80109 2.25 1.61032 2.32902 1.46967 2.46967C1.32902 2.61032 1.25 2.80109 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H21.75L2.25 2.25H2Z',
  d13: 'M12.375 6.25L9.375 2.25001L5.78554 2.25L22.75 19.2145V7C22.75 6.58579 22.4142 6.25 22 6.25H12.375Z',
  d14: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
};

export const IconFolderOffStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-stroke-rounded IconFolderOffStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderOffDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-duotone-rounded IconFolderOffDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderOffTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-twotone-rounded IconFolderOffTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderOffSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-solid-rounded IconFolderOffSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconFolderOffBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-bulk-rounded IconFolderOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFolderOffStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-stroke-sharp IconFolderOffStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderOffSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-off-solid-sharp IconFolderOffSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderOff: TheIconSelfPack = {
  name: 'FolderOff',
  StrokeRounded: IconFolderOffStrokeRounded,
  DuotoneRounded: IconFolderOffDuotoneRounded,
  TwotoneRounded: IconFolderOffTwotoneRounded,
  SolidRounded: IconFolderOffSolidRounded,
  BulkRounded: IconFolderOffBulkRounded,
  StrokeSharp: IconFolderOffStrokeSharp,
  SolidSharp: IconFolderOffSolidSharp,
};