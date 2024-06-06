import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.20832 5.4051C8.97801 3.13503 10.3629 2 12 2C13.6371 2 15.022 3.13503 17.7917 5.4051L18.0484 5.61553C20.334 7.48877 21.4767 8.42539 21.8628 9.74129C22.2488 11.0572 21.7895 12.4503 20.8709 15.2364L20.6883 15.7901C19.7073 18.7654 19.2169 20.2531 18.0264 21.1054C16.3758 22.2872 13.9003 21.9578 12 21.9578C8.82548 21.9578 7.16404 21.9578 5.97359 21.1054C4.78315 20.2531 4.29266 18.7654 3.31167 15.7901L3.12909 15.2364C2.21048 12.4503 1.75117 11.0572 2.13722 9.74129C2.52326 8.42539 3.66603 7.48877 5.95157 5.61553L6.20832 5.4051Z',
  d2: 'M12 22C8.82548 22 7.16404 22 5.97359 21.1458C4.78315 20.2917 4.29266 18.8009 3.31167 15.8193L3.12909 15.2644C2.21048 12.4724 1.75117 11.0763 2.13722 9.75767C2.52326 8.43899 3.66603 7.50038 5.95157 5.62318L6.20832 5.4123C8.97801 3.13743 10.3629 2 12 2',
  d3: 'M9.1279 2.21866C10.0907 1.6088 10.9867 1.25 12 1.25C13.0134 1.25 13.9093 1.6088 14.8721 2.21866L21.2038 7.37027C21.8716 8.05306 22.3422 8.72055 22.5825 9.54043C22.8228 10.3609 22.7859 11.1747 22.59 12.1056L20.1164 19.5819C19.6914 20.5002 19.2013 21.2114 18.463 21.7406C17.4687 22.4535 16.2696 22.6812 15.1529 22.75L8.16012 22.6231C7.13365 22.5092 6.27783 22.2717 5.53698 21.7406C4.79867 21.2114 4.30858 20.5002 3.8836 19.5819L1.41002 12.1056C1.21415 11.1747 1.17716 10.3609 1.41755 9.54043C1.65778 8.72055 2.12844 8.05306 2.79621 7.37027L9.1279 2.21866Z',
  d4: 'M21.203 7.3699C21.8708 8.0527 22.3414 8.72019 22.5817 9.54006C22.8221 10.3605 22.7851 11.1743 22.5892 12.1052L20.1156 19.5816C19.6906 20.4998 19.2005 21.211 18.4622 21.7403C17.4679 22.4531 16.2688 22.6809 15.1521 22.7496L8.15934 22.6228C7.13287 22.5088 6.27704 22.2714 5.5362 21.7403C4.79789 21.211 4.3078 20.4998 3.88281 19.5816L18.3863 5.07812L21.203 7.3699Z',
  d5: 'M12.0003 2L21.9996 10L18.002 22H6.00195L2.00195 10L12.0003 2Z',
  d6: 'M11.5317 1.41439C11.8057 1.19521 12.1949 1.1952 12.4688 1.41436L22.4682 9.41436C22.7135 9.61063 22.8105 9.93899 22.7112 10.237L18.7135 22.237C18.6115 22.5434 18.3249 22.75 18.002 22.75H6.00199C5.67917 22.75 5.39257 22.5434 5.29048 22.2372L1.29048 10.2372C1.19112 9.9391 1.28809 9.61069 1.53342 9.41439L11.5317 1.41439Z',
};

export const IconPentagonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-stroke-rounded IconPentagonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-duotone-rounded IconPentagonDuotoneRounded"
    >
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-twotone-rounded IconPentagonTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-solid-rounded IconPentagonSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-bulk-rounded IconPentagonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-stroke-sharp IconPentagonStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPentagonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pentagon-solid-sharp IconPentagonSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPentagon: TheIconSelfPack = {
  name: 'Pentagon',
  StrokeRounded: IconPentagonStrokeRounded,
  DuotoneRounded: IconPentagonDuotoneRounded,
  TwotoneRounded: IconPentagonTwotoneRounded,
  SolidRounded: IconPentagonSolidRounded,
  BulkRounded: IconPentagonBulkRounded,
  StrokeSharp: IconPentagonStrokeSharp,
  SolidSharp: IconPentagonSolidSharp,
};