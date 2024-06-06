import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 8.39801L17.5 8.39795C19.9853 8.39795 22 10.3784 22 12.8214C22 14.3551 21.206 15.7065 20 16.5M17.4776 8.39801C17.4924 8.23611 17.5 8.07215 17.5 7.90646C17.5 4.92055 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.67106 6.52042 7.43728M17.4776 8.39801C17.3753 9.51316 16.9286 10.5307 16.2428 11.3469M6.52042 7.43728C3.98398 7.67454 2 9.77448 2 12.3299C2 14.0886 2.93963 15.6315 4.35232 16.5M6.52042 7.43728C6.67826 7.42251 6.83823 7.41496 7 7.41496C8.12582 7.41496 9.16474 7.78072 10.0005 8.39795',
  d2: 'M8 15.9778C9.14883 15.0431 10.5209 14.5 11.9946 14.5C13.4729 14.5 14.849 15.0466 16 15.9866M14.1743 18.5C13.5182 18.0909 12.7779 17.8607 11.9946 17.8607C11.2152 17.8607 10.4784 18.0886 9.82477 18.4938',
  d3: 'M12 21.5H12.0064',
  d4: 'M17.5 7.90646C17.5 4.92055 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.67106 6.52042 7.43728C3.98398 7.67454 2 9.77448 2 12.3299C2 14.0886 2.93963 15.6315 4.35232 16.5H20C21.206 15.7065 22 14.3551 22 12.8214C22 10.3784 19.9853 8.39795 17.5 8.39795L17.4776 8.39801C17.4924 8.23611 17.5 8.07215 17.5 7.90646Z',
  d5: 'M5.603 6.13378C2.97664 6.66768 1 8.99698 1 11.7905C1 14.3002 2.59584 16.4357 4.82452 17.2305C5.21657 17.3704 5.4126 17.4403 5.50162 17.3555C5.59064 17.2706 5.51632 17.0205 5.36766 16.5203C5.08727 15.5767 5.36629 14.4948 6.17239 13.8366C7.71425 12.5775 9.63168 11.7905 11.7446 11.7905C13.8644 11.7905 15.7871 12.5825 17.3314 13.8485C18.1822 14.5459 18.4405 15.7133 18.0782 16.6891C17.9118 17.1373 17.8286 17.3613 17.9094 17.4517C17.9902 17.542 18.1756 17.4947 18.5464 17.4002C20.8189 16.8209 22.5 14.7537 22.5 12.2923C22.5 9.63647 20.5427 7.43948 17.9969 7.07551C17.8928 3.70237 15.1358 1 11.75 1C8.68585 1 6.13731 3.21286 5.603 6.13378Z',
  d6: 'M11.9946 13.5C10.2653 13.5 8.67508 14.1395 7.36896 15.202C6.94054 15.5506 6.87578 16.1804 7.22431 16.6088C7.57284 17.0373 8.20269 17.102 8.63111 16.7535C9.62265 15.9468 10.7765 15.5 11.9946 15.5C13.2165 15.5 14.3738 15.9496 15.3675 16.7611C15.7952 17.1105 16.4252 17.0469 16.7746 16.6192C17.1239 16.1914 17.0603 15.5614 16.6326 15.2121C15.3241 14.1435 13.7294 13.5 11.9946 13.5Z',
  d7: 'M11.9946 16.8607C11.0147 16.8607 10.0971 17.1484 9.29784 17.644C8.82846 17.935 8.68388 18.5514 8.97491 19.0208C9.26595 19.4902 9.88239 19.6348 10.3518 19.3437C10.8598 19.0288 11.4157 18.8607 11.9946 18.8607C12.5764 18.8607 13.1351 19.0304 13.6452 19.3485C14.1138 19.6408 14.7306 19.4978 15.0228 19.0291C15.3151 18.5605 15.1721 17.9437 14.7034 17.6515C13.9013 17.1513 12.9795 16.8607 11.9946 16.8607Z',
  d8: 'M12 20.5C11.4477 20.5 11 20.9477 11 21.5C11 22.0523 11.4477 22.5 12 22.5H12.0064C12.5587 22.5 13.0064 22.0523 13.0064 21.5C13.0064 20.9477 12.5587 20.5 12.0064 20.5H12Z',
  d9: 'M7.36914 15.202C8.67526 14.1395 10.2655 13.5 11.9948 13.5C13.7296 13.5 15.3243 14.1435 16.6328 15.2121L15.3677 16.7611C14.374 15.9496 13.2167 15.5 11.9948 15.5C10.7767 15.5 9.62284 15.9468 8.63129 16.7535L7.36914 15.202ZM9.29802 17.644C10.0973 17.1484 11.0149 16.8607 11.9948 16.8607C12.9797 16.8607 13.9015 17.1513 14.7036 17.6515L13.6453 19.3485C13.1352 19.0304 12.5766 18.8607 11.9948 18.8607C11.4159 18.8607 10.8599 19.0288 10.3519 19.3437L9.29802 17.644Z',
  d10: 'M5.853 6.86454C3.22664 7.39643 1.25 9.71699 1.25 12.5C1.25 15.6756 3.82436 18.25 7 18.25H7.60012L5.25781 14.9851L6.42139 14.0385C7.96325 12.7841 9.88069 12 11.9936 12C14.1134 12 16.0361 12.7891 17.5804 14.0503L18.7422 14.9991L16.4019 18.25H17.5C20.3995 18.25 22.75 15.8995 22.75 13C22.75 10.3541 20.7927 8.16534 18.2469 7.80273C18.1428 4.44224 15.3858 1.75 12 1.75C8.93585 1.75 6.38731 3.95456 5.853 6.86454Z',
  d11: 'M10.998 21.25C10.998 20.6977 11.4443 20.25 11.9949 20.25H12.0012C12.5517 20.25 12.998 20.6977 12.998 21.25C12.998 21.8023 12.5517 22.25 12.0012 22.25H11.9949C11.4443 22.25 10.998 21.8023 10.998 21.25Z',
};

export const IconWirelessCloudAccessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-stroke-rounded IconWirelessCloudAccessStrokeRounded"
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

export const IconWirelessCloudAccessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-duotone-rounded IconWirelessCloudAccessDuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWirelessCloudAccessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-twotone-rounded IconWirelessCloudAccessTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconWirelessCloudAccessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-solid-rounded IconWirelessCloudAccessSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWirelessCloudAccessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-bulk-rounded IconWirelessCloudAccessBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWirelessCloudAccessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-stroke-sharp IconWirelessCloudAccessStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconWirelessCloudAccessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wireless-cloud-access-solid-sharp IconWirelessCloudAccessSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWirelessCloudAccess: TheIconSelfPack = {
  name: 'WirelessCloudAccess',
  StrokeRounded: IconWirelessCloudAccessStrokeRounded,
  DuotoneRounded: IconWirelessCloudAccessDuotoneRounded,
  TwotoneRounded: IconWirelessCloudAccessTwotoneRounded,
  SolidRounded: IconWirelessCloudAccessSolidRounded,
  BulkRounded: IconWirelessCloudAccessBulkRounded,
  StrokeSharp: IconWirelessCloudAccessStrokeSharp,
  SolidSharp: IconWirelessCloudAccessSolidSharp,
};