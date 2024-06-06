import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z',
  d2: 'M13.3333 12.6665L10.6667 15.3333M13.3333 12.6665C14.0697 13.4029 15.2636 13.4032 16 12.6668M13.3333 12.6665C12.597 11.9301 12.597 10.7364 13.3333 10M10.6667 15.3333C11.4031 16.0698 11.403 17.2636 10.6667 18M10.6667 15.3333C9.93031 14.5969 8.73638 14.5968 8 15.3332',
  d3: 'M9 3L12 6L16 2',
  d4: 'M14 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.6569 6 17.7712 6 14 6Z',
  d5: 'M15.2929 1.54289C15.6834 1.15237 16.3166 1.15237 16.7071 1.54289C17.0976 1.93342 17.0976 2.56658 16.7071 2.95711L12.7071 6.95711C12.3166 7.34763 11.6834 7.34763 11.2929 6.95711L8.29289 3.95711C7.90237 3.56658 7.90237 2.93342 8.29289 2.54289C8.68342 2.15237 9.31658 2.15237 9.70711 2.54289L12 4.83579L15.2929 1.54289Z',
  d6: 'M9.94358 5.75H14.0564H14.0564H14.0564C15.8942 5.74999 17.3498 5.74997 18.489 5.89876C19.6614 6.05189 20.6104 6.37451 21.3588 7.10149C22.1071 7.82848 22.4392 8.75031 22.5969 9.88924C22.75 10.9959 22.75 12.41 22.75 14.1952V14.3048C22.75 16.0901 22.75 17.5041 22.5969 18.6108C22.4392 19.7497 22.1071 20.6715 21.3588 21.3985C20.6104 22.1255 19.6614 22.4481 18.489 22.6012C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94354C8.1058 22.75 6.65018 22.75 5.51098 22.6012C4.33856 22.4481 3.38961 22.1255 2.64124 21.3985C1.89288 20.6715 1.56076 19.7497 1.40313 18.6108C1.24997 17.5041 1.24998 16.0901 1.25 14.3048V14.1952C1.24998 12.4099 1.24997 10.9959 1.40313 9.88924C1.56076 8.75031 1.89288 7.82848 2.64124 7.10149C3.38961 6.37451 4.33856 6.05189 5.51098 5.89876C6.65019 5.74997 8.10582 5.74999 9.94357 5.75H9.94357H9.94358ZM14.0404 9.54287C14.431 9.93339 14.431 10.5666 14.0405 10.9571C13.6946 11.303 13.6946 11.8635 14.0405 12.2094C14.3865 12.5555 14.9472 12.5554 15.2929 12.2097C15.6834 11.8192 16.3166 11.8192 16.7071 12.2097C17.0976 12.6002 17.0976 13.2334 16.7071 13.6239C15.8287 14.5024 14.5251 14.6958 13.4592 14.2049L11.955 15.7092C12.4459 16.7751 12.2521 18.0787 11.3738 18.9571C10.9833 19.3476 10.3501 19.3476 9.95957 18.9571C9.56903 18.5666 9.56902 17.9334 9.95953 17.5429C10.3054 17.197 10.3054 16.6363 9.95956 16.2904C9.61362 15.9445 9.05288 15.9445 8.70713 16.2903C8.31661 16.6808 7.68345 16.6808 7.29291 16.2903C6.90238 15.8998 6.90236 15.2666 7.29287 14.8761C8.17125 13.9977 9.47491 13.8041 10.5408 14.2949L12.045 12.7907C11.5542 11.7248 11.7479 10.4213 12.6262 9.54291C13.0167 9.15238 13.6499 9.15236 14.0404 9.54287Z',
  d7: 'M16.7071 1.54289C16.3166 1.15237 15.6834 1.15237 15.2929 1.54289L12 4.83579L9.70711 2.54289C9.31658 2.15237 8.68342 2.15237 8.29289 2.54289C7.90237 2.93342 7.90237 3.56658 8.29289 3.95711L10.0858 5.75H13.9142L16.7071 2.95711C17.0976 2.56658 17.0976 1.93342 16.7071 1.54289Z',
  d8: 'M14.0564 5.75H9.94358H9.94357C8.10583 5.74999 6.65019 5.74997 5.51098 5.89876C4.33856 6.05188 3.38961 6.37451 2.64124 7.10149C1.89288 7.82848 1.56076 8.75031 1.40313 9.88924C1.24997 10.9959 1.24998 12.4099 1.25 14.1952V14.3048C1.24998 16.0901 1.24997 17.5041 1.40313 18.6108C1.56076 19.7497 1.89288 20.6715 2.64124 21.3985C3.38961 22.1255 4.33856 22.4481 5.51098 22.6012C6.65018 22.75 8.1058 22.75 9.94354 22.75H14.0564C15.8942 22.75 17.3498 22.75 18.489 22.6012C19.6614 22.4481 20.6104 22.1255 21.3588 21.3985C22.1071 20.6715 22.4392 19.7497 22.5969 18.6108C22.75 17.5041 22.75 16.0901 22.75 14.3048V14.1952C22.75 12.41 22.75 10.9959 22.5969 9.88924C22.4392 8.75031 22.1071 7.82848 21.3588 7.10149C20.6104 6.37451 19.6614 6.05188 18.489 5.89876C17.3498 5.74997 15.8942 5.74999 14.0564 5.75H14.0564Z',
  d9: 'M14.0405 10.9571C14.431 10.5666 14.431 9.93339 14.0404 9.54287C13.6499 9.15236 13.0167 9.15238 12.6262 9.54291C11.7479 10.4213 11.5542 11.7248 12.045 12.7907L10.5408 14.2949C9.47491 13.8041 8.17125 13.9977 7.29287 14.8761C6.90236 15.2666 6.90238 15.8998 7.29291 16.2903C7.68345 16.6808 8.31661 16.6808 8.70713 16.2903C9.05288 15.9445 9.61362 15.9445 9.95956 16.2904C10.3054 16.6363 10.3054 17.197 9.95953 17.5429C9.56901 17.9334 9.56903 18.5666 9.95957 18.9571C10.3501 19.3476 10.9833 19.3476 11.3738 18.9571C12.2521 18.0787 12.4459 16.7751 11.955 15.7092L13.4592 14.2049C14.5251 14.6958 15.8287 14.5024 16.7071 13.6239C17.0976 13.2334 17.0976 12.6002 16.7071 12.2097C16.3166 11.8192 15.6834 11.8192 15.2929 12.2097C14.9472 12.5554 14.3865 12.5555 14.0405 12.2094C13.6946 11.8635 13.6946 11.303 14.0405 10.9571Z',
  d10: 'M22 6H2V22H22V6Z',
  d11: 'M16.7072 2.66421L12.7072 6.66421C12.3167 7.05474 11.6835 7.05474 11.293 6.66421L8.29297 3.66421L9.70718 2.25L12.0001 4.54289L15.293 1.25L16.7072 2.66421Z',
  d12: 'M2 5.25C1.58579 5.25 1.25 5.58579 1.25 6V22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V6C22.75 5.58579 22.4142 5.25 22 5.25H2ZM14.0406 11.9595C13.6947 11.6136 13.6947 11.053 14.0406 10.7071L12.6263 9.29297C11.748 10.1713 11.5543 11.4748 12.0451 12.5408L10.5409 14.045C9.47501 13.5542 8.17134 13.7477 7.29297 14.6262L8.70722 16.0403C9.05297 15.6946 9.61371 15.6945 9.95966 16.0405C10.3055 16.3864 10.3055 16.947 9.95962 17.293L11.3739 18.7071C12.2522 17.8288 12.4459 16.5252 11.9551 15.4592L13.4593 13.955C14.5251 14.4458 15.8288 14.2524 16.7072 13.374L15.293 11.9598C14.9473 12.3054 14.3866 12.3056 14.0406 11.9595Z',
};

export const IconTvFixStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-stroke-rounded IconTvFixStrokeRounded"
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

export const IconTvFixDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-duotone-rounded IconTvFixDuotoneRounded"
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

export const IconTvFixTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-twotone-rounded IconTvFixTwotoneRounded"
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

export const IconTvFixSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-solid-rounded IconTvFixSolidRounded"
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

export const IconTvFixBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-bulk-rounded IconTvFixBulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTvFixStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-stroke-sharp IconTvFixStrokeSharp"
    >
      <path 
        d={d.d10} 
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

export const IconTvFixSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-fix-solid-sharp IconTvFixSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfTvFix: TheIconSelfPack = {
  name: 'TvFix',
  StrokeRounded: IconTvFixStrokeRounded,
  DuotoneRounded: IconTvFixDuotoneRounded,
  TwotoneRounded: IconTvFixTwotoneRounded,
  SolidRounded: IconTvFixSolidRounded,
  BulkRounded: IconTvFixBulkRounded,
  StrokeSharp: IconTvFixStrokeSharp,
  SolidSharp: IconTvFixSolidSharp,
};