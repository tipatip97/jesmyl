import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.10448 17.5C8.33359 16.5723 8.42384 15.1986 8.69771 14.3155C13.1751 16.5 13.7595 12.5 13.4229 11.5C14.9282 12.5 16.3877 15.9189 14.8371 17.5',
  d2: 'M8.81631 17.5C5.5924 16.4286 4.76862 11.5478 6.12929 8.92857C7.12501 11.0714 8.75001 11.0714 8.75001 11.0714C7.66668 6.78571 9.83335 3.57143 14.0108 2.5C13.1918 4.001 12.5366 6.34631 14.197 7.84902C14.5485 7.18039 15.7296 5.71429 17.4167 5.71429C17.4167 5.71429 16.1196 8.01619 17.5273 10.0221C19.152 12.3372 18.736 15.7851 16.3196 17.5',
  d3: 'M20.5 17.5H3.5L4.1601 19.9851C4.4949 21.2455 4.84122 21.5 6.22165 21.5H17.7783C19.1588 21.5 19.5051 21.2455 19.8399 19.9851L20.5 17.5Z',
  d4: 'M3.55556 17.5H2.5M20.4444 17.5H21.5',
  d5: 'M8.75001 11.0714C7.66668 6.78571 9.83335 3.57143 14.0108 2.5C13.1918 4.001 12.5366 6.34631 14.197 7.84902C14.5485 7.18039 15.7296 5.71429 17.4167 5.71429C17.4167 5.71429 16.1196 8.01619 17.5273 10.0221C19.152 12.3372 18.736 15.7851 16.3196 17.5H14.8371C16.3877 15.9189 14.9282 12.5 13.4229 11.5C13.7595 12.5 13.1751 16.5 8.69771 14.3155C8.42384 15.1986 8.33359 16.5723 9.10448 17.5H8.81631C5.5924 16.4286 4.76862 11.5478 6.12929 8.92857C7.12501 11.0714 8.75001 11.0714 8.75001 11.0714Z',
  d6: 'M2.90549 17.0428C3.04746 16.8582 3.26713 16.75 3.50001 16.75H20.5C20.7329 16.75 20.9526 16.8582 21.0945 17.0428C21.2365 17.2274 21.2847 17.4675 21.2249 17.6925L20.5648 20.1776C20.3962 20.8123 20.1757 21.4298 19.6454 21.8196C19.1269 22.2005 18.4631 22.25 17.7784 22.25H6.22166C5.53687 22.25 4.87308 22.2005 4.35465 21.8196C3.82428 21.4298 3.60383 20.8123 3.43524 20.1776L2.77514 17.6925C2.71536 17.4675 2.76352 17.2274 2.90549 17.0428Z',
  d7: 'M1.5 17.75C1.5 17.1977 1.94772 16.75 2.5 16.75H21.5C22.0523 16.75 22.5 17.1977 22.5 17.75C22.5 18.3023 22.0523 18.75 21.5 18.75H2.5C1.94772 18.75 1.5 18.3023 1.5 17.75Z',
  d8: 'M14.669 2.85924C14.8121 2.59713 14.786 2.27515 14.6026 2.03948C14.4192 1.80382 14.1136 1.69937 13.8243 1.77355C11.5925 2.34597 9.82482 3.51149 8.77299 5.18052C7.96645 6.46033 7.61405 7.98372 7.75263 9.66016C7.7599 9.74817 7.6603 9.80234 7.59575 9.74208C7.3308 9.49471 7.05254 9.13593 6.80935 8.61256C6.68888 8.35332 6.43153 8.1851 6.14574 8.17879C5.85995 8.17248 5.59542 8.32918 5.46364 8.58286C4.68057 10.0902 4.55236 12.1625 5.02778 13.9841C5.37421 15.3115 6.0707 16.6051 7.17222 17.4593C7.20654 17.4859 7.24892 17.5 7.29235 17.5H8.67825C8.84768 17.5 8.94646 17.2968 8.8634 17.1491C8.40448 16.3332 8.44355 15.3042 8.63498 14.5399C8.66477 14.4209 8.80106 14.3661 8.91262 14.417C12.5809 16.0912 13.5173 13.4771 13.502 12.0754C13.4999 11.8848 13.7368 11.737 13.8726 11.8707C15.0841 13.0634 16.0608 15.6156 15.1301 17.1254C15.0371 17.2763 15.1361 17.5 15.3134 17.5H17.3999C17.4526 17.5 17.5035 17.4792 17.5404 17.4416C19.6017 15.3427 19.7934 11.9458 18.1411 9.59128C17.5894 8.80512 17.5559 7.95253 17.6822 7.24852C17.7453 6.89743 17.9848 6.29406 18.07 6.0825C18.2009 5.85028 18.1986 5.56606 18.0642 5.33593C17.9297 5.10579 17.6832 4.96432 17.4166 4.96432C16.3475 4.96432 15.4679 5.42932 14.831 5.95049C14.622 6.12146 14.4335 6.30294 14.2667 6.48439C14.2185 6.53691 14.1321 6.5255 14.1048 6.45961C13.9469 6.07867 13.8957 5.66076 13.9226 5.21953C13.9723 4.4048 14.2909 3.55223 14.669 2.85924Z',
  d9: 'M13.502 12.0765C13.5173 13.4781 12.5809 16.0923 8.91262 14.418C8.80106 14.3671 8.66477 14.422 8.63498 14.5409C8.45158 15.2732 8.40803 16.2484 8.80825 17.0464C8.84077 17.1112 8.90835 17.15 8.98088 17.1497L15.0189 17.1269C15.0881 17.1266 15.1528 17.091 15.186 17.0304C16.0198 15.5105 15.0587 13.0395 13.8726 11.8717C13.7368 11.738 13.4999 11.8859 13.502 12.0765Z',
  d10: 'M8.81626 17.5C5.59235 16.4286 5.00086 12 6.00054 9C7.00086 11.0714 8.74997 11.0714 8.74997 11.0714C7.66663 6.78571 9.99902 3.5 13.999 2C12.999 4 12.499 6.5 13.999 8C14.499 7 15.499 5.5 17.499 5.5C17.499 5.5 16.1196 8.01619 17.5273 10.0221C19.152 12.3372 18.736 15.7851 16.3195 17.5',
  d11: 'M3.5 17.5H20.5M3.5 17.5L4.5 21.5H19.5L20.5 17.5M3.5 17.5H2M20.5 17.5H22',
  d12: 'M14.6708 2.58544C14.8088 2.30959 14.7638 1.97743 14.5574 1.74823C14.3511 1.51902 14.0254 1.4395 13.7367 1.54778C11.6173 2.34254 9.88357 3.63158 8.82995 5.34889C7.96597 6.75712 7.58524 8.41241 7.7903 10.2327C7.42435 10.0036 7.00853 9.61063 6.67689 8.92388C6.54415 8.64902 6.25808 8.48201 5.95347 8.50157C5.64885 8.52113 5.38648 8.72334 5.28998 9.01293C4.74695 10.6426 4.63495 12.6486 5.1003 14.4144C5.37799 15.4681 5.87434 16.4734 6.63679 17.25H8.78607C8.36903 16.3753 8.46977 15.3005 8.69771 14.5655C13.1751 16.75 13.7595 12.75 13.4229 11.75C14.7843 12.6544 16.1083 15.5374 15.2018 17.25H17.9329C19.6202 15.1393 19.6831 12.037 18.1422 9.84127C17.5998 9.06849 17.5744 8.17308 17.7228 7.40026C17.796 7.01875 17.9082 6.68859 18.0024 6.45404C18.0492 6.33752 18.0908 6.24662 18.1194 6.1871C18.1337 6.15739 18.1447 6.13565 18.1514 6.12262L18.1581 6.10975L18.1587 6.1086C18.285 5.87662 18.28 5.59523 18.1453 5.36787C18.0103 5.13986 17.765 5.00003 17.5 5.00003C15.7647 5.00003 14.6619 5.93052 13.9791 6.84631C13.8341 6.44439 13.7815 5.98659 13.8112 5.48157C13.8659 4.55244 14.1993 3.52846 14.6708 2.58544Z',
  d13: 'M22 17V18.5H21.0856L20.0856 22.5H3.91442L2.91442 18.5H2V17H22Z',
};

export const IconFirePitStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-stroke-rounded IconFirePitStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFirePitDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-duotone-rounded IconFirePitDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconFirePitTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-twotone-rounded IconFirePitTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconFirePitSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-solid-rounded IconFirePitSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconFirePitBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-bulk-rounded IconFirePitBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFirePitStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-stroke-sharp IconFirePitStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconFirePitSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fire-pit-solid-sharp IconFirePitSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFirePit: TheIconSelfPack = {
  name: 'FirePit',
  StrokeRounded: IconFirePitStrokeRounded,
  DuotoneRounded: IconFirePitDuotoneRounded,
  TwotoneRounded: IconFirePitTwotoneRounded,
  SolidRounded: IconFirePitSolidRounded,
  BulkRounded: IconFirePitBulkRounded,
  StrokeSharp: IconFirePitStrokeSharp,
  SolidSharp: IconFirePitSolidSharp,
};