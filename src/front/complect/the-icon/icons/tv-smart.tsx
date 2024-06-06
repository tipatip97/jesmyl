import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z',
  d2: 'M16.9 15.5C16.9 14.6163 17.6163 13.9 18.5 13.9M13.7 15.5C13.7 12.849 15.849 10.7 18.5 10.7M10.5 15.5C10.5 11.0817 14.0817 7.5 18.5 7.5',
  d3: 'M18 19L19 21',
  d4: 'M6 19L5 21',
  d5: 'M17.2365 19.7049C17.6911 19.6822 18.1078 19.6481 18.489 19.5968C18.7868 19.5568 19.0702 19.5055 19.3396 19.439L19.8946 20.5491C20.1416 21.043 19.9414 21.6437 19.4474 21.8907C18.9535 22.1377 18.3528 21.9375 18.1058 21.4435L17.2365 19.7049ZM4.66079 19.4391C4.93003 19.5055 5.2133 19.5568 5.51098 19.5968C5.89235 19.6481 6.30918 19.6822 6.76394 19.7049L5.89465 21.4435C5.64766 21.9375 5.04698 22.1377 4.55301 21.8907C4.05903 21.6437 3.8588 21.043 4.10579 20.5491L4.66079 19.4391Z',
  d6: 'M9.94358 2.25H14.0564H14.0564C15.8942 2.24998 17.3498 2.24997 18.489 2.40314C19.6614 2.56076 20.6104 2.89288 21.3588 3.64124C22.1071 4.38961 22.4392 5.33856 22.5969 6.51098C22.75 7.65018 22.75 9.10585 22.75 10.9436V11.0565C22.75 12.8942 22.75 14.3498 22.5969 15.489C22.4392 16.6614 22.1071 17.6104 21.3588 18.3588C20.6104 19.1071 19.6614 19.4392 18.489 19.5969C17.3498 19.75 15.8942 19.75 14.0564 19.75H9.94354C8.1058 19.75 6.65018 19.75 5.51098 19.5969C4.33856 19.4392 3.38961 19.1071 2.64124 18.3588C1.89288 17.6104 1.56076 16.6614 1.40314 15.489C1.24997 14.3498 1.24998 12.8942 1.25 11.0564V11.0564V10.9436V10.9436C1.24998 9.10581 1.24997 7.65019 1.40314 6.51098C1.56076 5.33856 1.89288 4.38961 2.64124 3.64124C3.38961 2.89288 4.33856 2.56076 5.51098 2.40314C6.65019 2.24997 8.10582 2.24998 9.94357 2.25H9.94358ZM11.25 15.5C11.25 11.4959 14.4959 8.25 18.5 8.25C18.9142 8.25 19.25 7.91421 19.25 7.5C19.25 7.08579 18.9142 6.75 18.5 6.75C13.6675 6.75 9.75 10.6675 9.75 15.5C9.75 15.9142 10.0858 16.25 10.5 16.25C10.9142 16.25 11.25 15.9142 11.25 15.5ZM14.45 15.5C14.45 13.2632 16.2632 11.45 18.5 11.45C18.9142 11.45 19.25 11.1142 19.25 10.7C19.25 10.2858 18.9142 9.95 18.5 9.95C15.4348 9.95 12.95 12.4348 12.95 15.5C12.95 15.9142 13.2858 16.25 13.7 16.25C14.1142 16.25 14.45 15.9142 14.45 15.5ZM17.65 15.5C17.65 15.0306 18.0306 14.65 18.5 14.65C18.9142 14.65 19.25 14.3142 19.25 13.9C19.25 13.4858 18.9142 13.15 18.5 13.15C17.2021 13.15 16.15 14.2021 16.15 15.5C16.15 15.9142 16.4858 16.25 16.9 16.25C17.3142 16.25 17.65 15.9142 17.65 15.5Z',
  d7: 'M14.0564 2.25H9.94358C8.10583 2.24998 6.65019 2.24997 5.51098 2.40314C4.33856 2.56076 3.38961 2.89288 2.64124 3.64124C1.89288 4.38961 1.56076 5.33856 1.40314 6.51098C1.24997 7.65019 1.24998 9.10582 1.25 10.9436V11.0564C1.24998 12.8942 1.24997 14.3498 1.40314 15.489C1.56076 16.6614 1.89288 17.6104 2.64124 18.3588C3.38961 19.1071 4.33856 19.4392 5.51098 19.5969C6.65018 19.75 8.1058 19.75 9.94354 19.75H14.0564C15.8942 19.75 17.3498 19.75 18.489 19.5969C19.6614 19.4392 20.6104 19.1071 21.3588 18.3588C22.1071 17.6104 22.4392 16.6614 22.5969 15.489C22.75 14.3498 22.75 12.8942 22.75 11.0565V10.9436C22.75 9.10585 22.75 7.65018 22.5969 6.51098C22.4392 5.33856 22.1071 4.38961 21.3588 3.64124C20.6104 2.89288 19.6614 2.56076 18.489 2.40314C17.3498 2.24997 15.8942 2.24998 14.0564 2.25Z',
  d8: 'M18.5 8.25C14.4959 8.25 11.25 11.4959 11.25 15.5C11.25 15.9142 10.9142 16.25 10.5 16.25C10.0858 16.25 9.75 15.9142 9.75 15.5C9.75 10.6675 13.6675 6.75 18.5 6.75C18.9142 6.75 19.25 7.08579 19.25 7.5C19.25 7.91421 18.9142 8.25 18.5 8.25ZM18.5 11.45C16.2632 11.45 14.45 13.2632 14.45 15.5C14.45 15.9142 14.1142 16.25 13.7 16.25C13.2858 16.25 12.95 15.9142 12.95 15.5C12.95 12.4348 15.4348 9.95 18.5 9.95C18.9142 9.95 19.25 10.2858 19.25 10.7C19.25 11.1142 18.9142 11.45 18.5 11.45ZM18.5 14.65C18.0306 14.65 17.65 15.0306 17.65 15.5C17.65 15.9142 17.3142 16.25 16.9 16.25C16.4858 16.25 16.15 15.9142 16.15 15.5C16.15 14.2021 17.2021 13.15 18.5 13.15C18.9142 13.15 19.25 13.4858 19.25 13.9C19.25 14.3142 18.9142 14.65 18.5 14.65Z',
  d9: 'M22 2.5H2V18.5H22V2.5Z',
  d10: 'M16.9 15C16.9 14.1163 17.6163 13.4 18.5 13.4M13.7 15C13.7 12.349 15.849 10.2 18.5 10.2M10.5 15C10.5 10.5817 14.0817 7 18.5 7',
  d11: 'M18 18.5L19 21.5M6 18.5L5 21.5',
  d12: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V18.5C22.75 18.9142 22.4142 19.25 22 19.25H19.159L19.9481 21.6174L18.0508 22.2499L17.0508 19.25H6.94811L5.94815 22.2499L4.05078 21.6174L4.83992 19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V2.5ZM11.25 15C11.25 10.9959 14.4959 7.75 18.5 7.75V6.25C13.6675 6.25 9.75 10.1675 9.75 15H11.25ZM14.45 15C14.45 12.7632 16.2632 10.95 18.5 10.95V9.45C15.4348 9.45 12.95 11.9348 12.95 15H14.45ZM17.65 15C17.65 14.5306 18.0306 14.15 18.5 14.15V12.65C17.2021 12.65 16.15 13.7021 16.15 15H17.65Z',
};

export const IconTvSmartStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-stroke-rounded IconTvSmartStrokeRounded"
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

export const IconTvSmartDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-duotone-rounded IconTvSmartDuotoneRounded"
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

export const IconTvSmartTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-twotone-rounded IconTvSmartTwotoneRounded"
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

export const IconTvSmartSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-solid-rounded IconTvSmartSolidRounded"
    >
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

export const IconTvSmartBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-bulk-rounded IconTvSmartBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTvSmartStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-stroke-sharp IconTvSmartStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTvSmartSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-smart-solid-sharp IconTvSmartSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTvSmart: TheIconSelfPack = {
  name: 'TvSmart',
  StrokeRounded: IconTvSmartStrokeRounded,
  DuotoneRounded: IconTvSmartDuotoneRounded,
  TwotoneRounded: IconTvSmartTwotoneRounded,
  SolidRounded: IconTvSmartSolidRounded,
  BulkRounded: IconTvSmartBulkRounded,
  StrokeSharp: IconTvSmartStrokeSharp,
  SolidSharp: IconTvSmartSolidSharp,
};