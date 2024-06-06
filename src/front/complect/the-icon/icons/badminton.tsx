import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.39114 21.6387C1.81409 21.0816 1.8854 20.1398 2.53981 19.6752L6.17145 17.097C6.38333 16.9465 6.6739 16.9737 6.85404 17.1607C7.02764 17.3409 7.0488 17.6183 6.90454 17.8226L4.3387 21.4558C3.88384 22.0999 2.95883 22.1867 2.39114 21.6387Z',
  d2: 'M11.5 12.5L7 17',
  d3: 'M19.4291 12.5774C17.534 14.4725 13.869 14.5529 11.6581 12.3419C9.44711 10.131 9.52748 6.46597 11.4226 4.57087C13.912 2.08144 18.5975 0.980641 20.8084 3.19159C23.0194 5.40254 21.9186 10.088 19.4291 12.5774Z',
  d4: 'M5.59261 16.2816C6.20752 15.845 7.05048 15.9231 7.57429 16.4669C8.08043 16.9924 8.14268 17.803 7.72141 18.3995L5.15558 22.0327C4.3466 23.1782 2.70469 23.3313 1.69662 22.3581C0.668488 21.3656 0.796507 19.6865 1.96097 18.8598L5.59261 16.2816Z',
  d5: 'M12.2071 11.7929C12.5976 12.1834 12.5976 12.8166 12.2071 13.2071L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.7929 11.7929C11.1834 11.4024 11.8166 11.4024 12.2071 11.7929Z',
  d6: 'M16.3936 3.10267C14.8232 3.37944 13.2199 4.1871 12.1297 5.27724C10.6431 6.76385 10.5266 9.79546 12.3652 11.6341C14.2039 13.4727 17.2355 13.3562 18.7221 11.8696C19.8122 10.7794 20.6199 9.17612 20.8967 7.60576C21.177 6.01541 20.8848 4.68139 20.1014 3.89796C19.3179 3.11452 17.9839 2.82237 16.3936 3.10267ZM16.0464 1.13302C17.9739 0.793306 20.0881 1.05622 21.5156 2.48374C22.9431 3.91126 23.206 6.02544 22.8663 7.95291C22.5231 9.90037 21.5356 11.8845 20.1363 13.2838C17.8327 15.5874 13.5343 15.6316 10.951 13.0483C8.36775 10.465 8.41194 6.16661 10.7155 3.86302C12.1148 2.46372 14.0989 1.47627 16.0464 1.13302Z',
  d7: 'M21.3192 2.68119C19.9426 1.30458 17.9038 1.05104 16.0451 1.37865C14.1671 1.70965 12.2537 2.66188 10.9043 4.01127C8.89723 6.01838 8.6688 9.5959 10.4809 12.105L6.32735 16.2585C6.1204 16.2826 5.91719 16.3576 5.73732 16.4853L2.10568 19.0635C1.06873 19.7997 0.954888 21.2944 1.87025 22.1781C2.76823 23.0451 4.23091 22.9085 4.95136 21.8883L7.51719 18.2551C7.64261 18.0776 7.71674 17.8773 7.74109 17.6732L11.895 13.5192C14.4041 15.3316 17.9819 15.1032 19.9891 13.096C21.3385 11.7466 22.2907 9.83329 22.6217 7.95528C22.9493 6.09656 22.6958 4.05779 21.3192 2.68119ZM12.2681 5.37504C13.3194 4.32379 14.8655 3.54494 16.3799 3.27804C17.9135 3.00773 19.1999 3.28947 19.9554 4.04496C20.7109 4.80045 20.9926 6.08689 20.7223 7.62052C20.4554 9.13486 19.6766 10.681 18.6253 11.7323C17.1917 13.1658 14.2683 13.2782 12.4952 11.5052C10.7221 9.73211 10.8345 6.80863 12.2681 5.37504Z',
};

export const IconBadmintonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-stroke-rounded IconBadmintonStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBadmintonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-duotone-rounded IconBadmintonDuotoneRounded"
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
        fill="var(--icon-fill)" 
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

export const IconBadmintonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-twotone-rounded IconBadmintonTwotoneRounded"
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

export const IconBadmintonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-solid-rounded IconBadmintonSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBadmintonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-bulk-rounded IconBadmintonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBadmintonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-stroke-sharp IconBadmintonStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBadmintonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="badminton-solid-sharp IconBadmintonSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBadminton: TheIconSelfPack = {
  name: 'Badminton',
  StrokeRounded: IconBadmintonStrokeRounded,
  DuotoneRounded: IconBadmintonDuotoneRounded,
  TwotoneRounded: IconBadmintonTwotoneRounded,
  SolidRounded: IconBadmintonSolidRounded,
  BulkRounded: IconBadmintonBulkRounded,
  StrokeSharp: IconBadmintonStrokeSharp,
  SolidSharp: IconBadmintonSolidSharp,
};