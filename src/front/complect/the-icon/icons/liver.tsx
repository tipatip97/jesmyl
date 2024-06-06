import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 8.03446C15.1204 8.03446 13.127 5.01107 10 5.01107C5.58172 5.01107 2 8.62072 2 13.0735C2 14.5065 2.17145 16.2117 2.8675 17.6086C3.41433 18.7061 4.68138 19.1636 5.88098 18.9481C10.4299 18.1308 14 15.0032 15 13.0047M15 13.0047C13.2314 13.1113 11 12.5051 9 11.0579M15 13.0047C17.8307 12.8342 22 10.2093 22 7.02666C22 3.84398 17 5.01107 14 6.46669',
  d2: 'M10 5.01107C5.58172 5.01107 2 8.62072 2 13.0735C2 14.5065 2.17145 16.2117 2.8675 17.6086C3.41433 18.7061 4.68138 19.1636 5.88098 18.9481C10.4299 18.1308 14 15.0032 15 13.0047C17.8307 12.8342 22 10.2093 22 7.02666C22 3.84398 17 5.01107 14 6.46669C12.7801 5.72999 11.5248 5.01107 10 5.01107Z',
  d3: 'M9 11.0453C11 12.4896 13.2314 13.0944 15 12.9881C17.8307 12.818 22 10.1985 22 7.02246C22 3.84638 17 5.01105 14 6.46364',
  d4: 'M13.8927 5.52926C14.0924 5.68236 14.2668 5.83772 14.4226 5.99094C14.8333 6.39511 15.6798 7.51515 15.849 7.70996C16.3463 8.28259 16.9777 8.78449 18.0007 8.78449C18.4149 8.78449 18.7507 8.4487 18.7507 8.03449C18.7507 7.62027 18.4149 7.28449 18.0007 7.28449C17.5838 7.28449 17.33 7.12768 16.9815 6.72642C16.8551 6.56368 16.5124 6.13059 16.1834 5.72987C15.8989 5.38321 15.7566 5.20987 15.8049 5.05527C15.8532 4.90066 16.0584 4.84212 16.4688 4.72506C17.3559 4.47201 18.2606 4.29687 19.09 4.25814C19.9641 4.21731 20.8608 4.32228 21.5632 4.75199C22.3254 5.21819 22.75 5.99891 22.75 7.02667C22.75 8.95176 21.5012 10.5979 20.0192 11.7395C18.7831 12.6915 17.2736 13.3826 15.8868 13.6462C15.864 13.6505 15.8526 13.6527 15.8398 13.654C15.827 13.6553 15.8154 13.6555 15.7922 13.6558C15.5656 13.6594 15.3319 13.6524 15.0907 13.6311C13.6276 13.5017 11.7608 12.8355 9.5401 10.5368C9.2523 10.2389 8.7775 10.2307 8.47959 10.5185C8.18169 10.8063 8.1735 11.2811 8.46129 11.579C10.2324 13.4123 11.874 14.3672 13.3578 14.8153C13.8491 14.9637 14.0947 15.0379 14.1337 15.2075C14.1727 15.3771 14.0011 15.5356 13.6579 15.8525C13.2217 16.2553 12.7353 16.6522 12.2075 17.0295C10.547 18.2165 8.41536 19.2548 6.01361 19.6863C4.57336 19.9451 2.92772 19.4112 2.19622 17.9431C1.42237 16.3901 1.25 14.5452 1.25 13.0735C1.25 8.21202 5.16203 4.26107 10 4.26107C11.5224 4.26107 12.9953 4.75199 13.8927 5.52926Z',
  d5: 'M16.0578 5.70173C16.9369 6.19832 17.7524 6.52984 18.6486 6.52984V8.26971C16.8493 8.26971 15.19 7.21657 13.8888 6.39063C12.4808 5.49889 11.2519 4.76284 9.78378 4.76284C5.35292 4.76284 1.75 8.55385 1.75 13.2446C1.75 14.862 1.93897 16.6778 2.62406 18.117C3.02536 18.96 4.00987 19.4022 5.0725 19.2024C7.45176 18.7549 9.5881 17.6713 11.2633 16.4178C12.3422 15.6105 13.2025 14.7536 13.8069 13.9816C11.9945 13.7599 10.0011 12.9844 8.18846 11.6114L9.16289 10.2019C11.2407 11.7758 13.5265 12.4067 15.2744 12.2965C16.6469 12.21 18.4308 11.4806 19.8718 10.3188C21.3238 9.14823 22.25 7.68951 22.25 6.23082C22.25 5.57711 22.028 5.26754 21.7298 5.0766C21.3655 4.84333 20.7661 4.71686 19.934 4.75754C18.758 4.81502 17.3506 5.19348 16.0578 5.70173Z',
};

export const IconLiverStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-stroke-rounded IconLiverStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLiverDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-duotone-rounded IconLiverDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLiverTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-twotone-rounded IconLiverTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconLiverSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-solid-rounded IconLiverSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLiverBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-bulk-rounded IconLiverBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLiverStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-stroke-sharp IconLiverStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLiverSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="liver-solid-sharp IconLiverSolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLiver: TheIconSelfPack = {
  name: 'Liver',
  StrokeRounded: IconLiverStrokeRounded,
  DuotoneRounded: IconLiverDuotoneRounded,
  TwotoneRounded: IconLiverTwotoneRounded,
  SolidRounded: IconLiverSolidRounded,
  BulkRounded: IconLiverBulkRounded,
  StrokeSharp: IconLiverStrokeSharp,
  SolidSharp: IconLiverSolidSharp,
};