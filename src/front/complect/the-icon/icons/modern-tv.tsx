import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10C22 13.7712 22 15.6569 20.8284 16.8284C19.6569 18 17.7712 18 14 18H10C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z',
  d2: 'M16 22C14.8233 21.364 13.4571 21 12 21C10.5429 21 9.17669 21.364 8 22',
  d3: 'M14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65018 22.75 8.1058 22.75 9.94354V9.94359V10.0564V10.0565C22.75 11.8942 22.75 13.3498 22.5969 14.489C22.4392 15.6614 22.1071 16.6104 21.3588 17.3588C20.6104 18.1071 19.6614 18.4392 18.489 18.5969C17.3498 18.75 15.8942 18.75 14.0565 18.75H14.0564H9.94359H9.94354C8.1058 18.75 6.65018 18.75 5.51098 18.5969C4.33856 18.4392 3.38961 18.1071 2.64124 17.3588C1.89288 16.6104 1.56076 15.6614 1.40314 14.489C1.24997 13.3498 1.24998 11.8942 1.25 10.0564V10.0564V9.94358V9.94357C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94357 1.25H9.94358H14.0564H14.0564Z',
  d4: 'M12.0002 21.75C10.7107 21.75 9.50772 22.0719 8.47568 22.6297C7.98982 22.8923 7.38307 22.7113 7.12047 22.2255C6.85787 21.7396 7.03885 21.1329 7.52471 20.8703C8.84605 20.1561 10.3754 19.75 12.0002 19.75C13.625 19.75 15.1543 20.1561 16.4757 20.8703C16.9615 21.1329 17.1425 21.7396 16.8799 22.2255C16.6173 22.7113 16.0106 22.8923 15.5247 22.6297C14.4927 22.0719 13.2897 21.75 12.0002 21.75Z',
  d5: 'M22 2.5H2V18.5H22V2.5Z',
  d6: 'M8 21.5H16.0007',
  d7: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V18.5C22.75 18.9142 22.4142 19.25 22 19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V2.5Z',
  d8: 'M16.0007 22.25H8V20.75H16.0007V22.25Z',
};

export const IconModernTvStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-stroke-rounded IconModernTvStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconModernTvDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-duotone-rounded IconModernTvDuotoneRounded"
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
        strokeLinecap="round" 
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

export const IconModernTvTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-twotone-rounded IconModernTvTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTvSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-solid-rounded IconModernTvSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTvBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-bulk-rounded IconModernTvBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTvStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-stroke-sharp IconModernTvStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTvSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-solid-sharp IconModernTvSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfModernTv: TheIconSelfPack = {
  name: 'ModernTv',
  StrokeRounded: IconModernTvStrokeRounded,
  DuotoneRounded: IconModernTvDuotoneRounded,
  TwotoneRounded: IconModernTvTwotoneRounded,
  SolidRounded: IconModernTvSolidRounded,
  BulkRounded: IconModernTvBulkRounded,
  StrokeSharp: IconModernTvStrokeSharp,
  SolidSharp: IconModernTvSolidSharp,
};