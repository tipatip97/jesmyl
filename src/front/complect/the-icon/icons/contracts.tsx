import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 6C17.9531 4.44655 17.7797 3.51998 17.1377 2.87868C16.2581 2 14.8423 2 12.0108 2H8.0065C5.17501 2 3.75926 2 2.87963 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87963 21.1213C3.75926 22 5.17501 22 8.0065 22H12.0108C14.8423 22 16.2581 22 17.1377 21.1213C17.7797 20.48 17.9531 19.5535 18 18',
  d2: 'M20.2419 11.7419L21.419 10.5648C21.6894 10.2944 21.8246 10.1592 21.8969 10.0134C22.0344 9.73584 22.0344 9.41003 21.8969 9.13252C21.8246 8.98666 21.6894 8.85145 21.419 8.58104C21.1485 8.31062 21.0133 8.17542 20.8675 8.10314C20.59 7.96562 20.2642 7.96562 19.9866 8.10314C19.8408 8.17542 19.7056 8.31062 19.4352 8.58104L18.2581 9.7581M20.2419 11.7419L14.9757 17.0081L12 18L12.9919 15.0243L18.2581 9.7581M20.2419 11.7419L18.2581 9.7581',
  d3: 'M5 19H6L7.25 16.5L8.5 19H9.5',
  d4: 'M6 6H14',
  d5: 'M6 10H12',
  d6: 'M8 2H12C14.8284 2 16.2426 2 17.1213 2.87868C18 3.75736 18 5.17157 18 8V10.0159L12.9919 15.024L12 17.9997L14.9757 17.0078L18 13.9835V16C18 18.8284 18 20.2426 17.1213 21.1213C16.2426 22 14.8284 22 12 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2Z',
  d7: 'M14.9342 17.5173L14.3079 17.726C13.4855 18.0002 13.0742 18.1373 12.8571 17.9202C12.6401 17.7031 12.7771 17.2919 13.0513 16.4694L13.2601 15.8431C13.3339 15.6216 13.3708 15.5109 13.4316 15.4125C13.4924 15.3141 13.575 15.2315 13.7401 15.0664L18.4843 10.3223L20.4551 12.2931L15.7109 17.0373C15.5458 17.2024 15.4633 17.2849 15.3649 17.3457C15.2665 17.4065 15.1557 17.4434 14.9342 17.5173Z',
  d8: 'M21.5158 11.2324L22.1728 10.5754C22.4414 10.3068 22.5757 10.1725 22.6475 10.0276C22.7842 9.75186 22.7842 9.42817 22.6475 9.15247C22.5757 9.00757 22.4414 8.87325 22.1728 8.60461C21.9041 8.33595 21.7698 8.20162 21.6249 8.12981C21.3492 7.99319 21.0255 7.99319 20.7498 8.12981C20.6049 8.20161 20.4706 8.33594 20.2019 8.60458L19.5449 9.2616L21.5158 11.2324Z',
  d9: 'M12.0549 1.25C13.4225 1.24998 14.5248 1.24997 15.3918 1.36653C16.2919 1.48754 17.0497 1.74644 17.6517 2.34835C18.2536 2.95027 18.5125 3.70814 18.6335 4.60825C18.75 5.47522 18.75 6.57754 18.75 7.94513V8.28811L12.8207 14.2172C12.6941 14.3429 12.5089 14.5268 12.3677 14.7553C12.2809 14.8957 12.2129 15.0771 12.1912 15.1349L11.8436 16.1378C11.7254 16.4918 11.5966 16.8777 11.5387 17.2029C11.479 17.5387 11.4122 18.2436 11.9727 18.8041C12.5331 19.3646 13.2381 19.2978 13.5739 19.238C13.8991 19.1802 14.285 19.0513 14.639 18.9332L15.6418 18.5855C15.6996 18.5638 15.881 18.4958 16.0215 18.409C16.25 18.2678 16.4338 18.0826 16.5595 17.956L18.75 15.7655V16.0549C18.75 17.4225 18.75 18.5248 18.6335 19.3918C18.5125 20.2919 18.2536 21.0497 17.6517 21.6517C17.0497 22.2536 16.2919 22.5125 15.3918 22.6335C14.5248 22.75 13.4225 22.75 12.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74643 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V16.0549V7.94511V7.9451C1.24998 6.57752 1.24997 5.47521 1.36653 4.60825C1.48754 3.70814 1.74644 2.95027 2.34835 2.34835C2.95027 1.74644 3.70814 1.48754 4.60825 1.36653C5.47521 1.24997 6.57754 1.24998 7.94511 1.25H7.94513H12.0549H12.0549ZM7.92082 16.1646C7.79378 15.9105 7.53408 15.75 7.25 15.75C6.96592 15.75 6.70622 15.9105 6.57918 16.1646L5.53647 18.25H5C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H6C6.28408 19.75 6.54378 19.5895 6.67082 19.3354L7.25 18.1771L7.82918 19.3354C7.95622 19.5895 8.21592 19.75 8.5 19.75H9.5C9.91421 19.75 10.25 19.4142 10.25 19C10.25 18.5858 9.91421 18.25 9.5 18.25H8.96353L7.92082 16.1646ZM5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6ZM6 9.25C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H12C12.4142 10.75 12.75 10.4142 12.75 10C12.75 9.58579 12.4142 9.25 12 9.25H6Z',
  d10: 'M15.3918 1.36652C14.5248 1.24996 13.4225 1.24998 12.0549 1.25H7.94513C6.57754 1.24998 5.47521 1.24996 4.60825 1.36652C3.70814 1.48754 2.95027 1.74643 2.34835 2.34835C1.74643 2.95027 1.48754 3.70814 1.36652 4.60825C1.24996 5.47521 1.24998 6.57753 1.25 7.94511V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6517C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H12.0549C13.4225 22.75 14.5248 22.75 15.3918 22.6335C16.2919 22.5125 17.0497 22.2536 17.6517 21.6517C18.2536 21.0497 18.5125 20.2919 18.6335 19.3918C18.75 18.5248 18.75 17.4225 18.75 16.0549V15.7655L16.5595 17.956C16.4338 18.0826 16.25 18.2678 16.0215 18.409C15.881 18.4958 15.6996 18.5638 15.6418 18.5855L14.639 18.9332C14.285 19.0513 13.8991 19.1802 13.5739 19.238C13.2381 19.2978 12.5331 19.3646 11.9727 18.8041C11.4122 18.2436 11.479 17.5387 11.5387 17.2029C11.5966 16.8777 11.7254 16.4918 11.8436 16.1378L12.1912 15.1349C12.2129 15.0771 12.2809 14.8957 12.3677 14.7553C12.5089 14.5268 12.6941 14.3429 12.8207 14.2172L18.75 8.28811V7.94513C18.75 6.57754 18.75 5.47522 18.6335 4.60825C18.5125 3.70814 18.2536 2.95027 17.6517 2.34835C17.0497 1.74643 16.2919 1.48754 15.3918 1.36652Z',
  d11: 'M7.25 15.75C7.53408 15.75 7.79378 15.9105 7.92082 16.1646L8.96353 18.25H9.5C9.91421 18.25 10.25 18.5858 10.25 19C10.25 19.4142 9.91421 19.75 9.5 19.75H8.5C8.21592 19.75 7.95622 19.5895 7.82918 19.3354L7.25 18.1771L6.67082 19.3354C6.54378 19.5895 6.28408 19.75 6 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H5.53647L6.57918 16.1646C6.70622 15.9105 6.96592 15.75 7.25 15.75Z',
  d12: 'M5.25 6C5.25 5.58579 5.58579 5.25 6 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H6C5.58579 6.75 5.25 6.41421 5.25 6Z',
  d13: 'M5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H12C12.4142 9.25 12.75 9.58579 12.75 10C12.75 10.4142 12.4142 10.75 12 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10Z',
  d14: 'M18 5.5V2H2V22H18V18.5',
  d15: 'M18 10L12.5 15.5L12 18L14.5 17.5L20 12M18 10L20 8L22 10L20 12M18 10L20 12',
  d16: 'M1.25 1.25H18.75V7.98212L12.0982 14.6339L11.1562 19.3436L15.866 18.4017L18.75 15.5176V22.75H1.25V1.25ZM8.96353 18.2493L7.25 14.8223L5.53647 18.2493H4.25V19.7493H6.46353L7.25 18.1764L8.03647 19.7493H10.25V18.2493H8.96353ZM5.25 5.25H14.75V6.75H5.25V5.25ZM12.75 9.25H5.25V10.75H12.75V9.25Z',
  d17: 'M20.75 7.75L22.75 9.75L21.2803 11.2197L19.2803 9.21967L20.75 7.75Z',
  d18: 'M18.2197 10.2803L13.25 15.25L12.75 17.75L15.25 17.25L20.2197 12.2803L18.2197 10.2803Z',
};

export const IconContractsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-stroke-rounded IconContractsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconContractsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-duotone-rounded IconContractsDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContractsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-twotone-rounded IconContractsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconContractsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-solid-rounded IconContractsSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconContractsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-bulk-rounded IconContractsBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContractsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-stroke-sharp IconContractsStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconContractsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="contracts-solid-sharp IconContractsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfContracts: TheIconSelfPack = {
  name: 'Contracts',
  StrokeRounded: IconContractsStrokeRounded,
  DuotoneRounded: IconContractsDuotoneRounded,
  TwotoneRounded: IconContractsTwotoneRounded,
  SolidRounded: IconContractsSolidRounded,
  BulkRounded: IconContractsBulkRounded,
  StrokeSharp: IconContractsStrokeSharp,
  SolidSharp: IconContractsSolidSharp,
};