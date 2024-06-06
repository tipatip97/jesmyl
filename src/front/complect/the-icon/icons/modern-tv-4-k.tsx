import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 7V10M10.5 10V13M10.5 10H8.5C7.55719 10 7.08579 10 6.79289 9.70711C6.5 9.41421 6.5 8.94281 6.5 8V7M13.5 13V10M13.5 10V7M13.5 10L17.5 7M13.5 10L17.5 13',
  d2: 'M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10C22 13.7712 22 15.6569 20.8284 16.8284C19.6569 18 17.7712 18 14 18H10C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z',
  d3: 'M16 22C14.8233 21.364 13.4571 21 12 21C10.5429 21 9.17669 21.364 8 22',
  d4: 'M12.0002 21.75C10.7107 21.75 9.50772 22.0719 8.47568 22.6297C7.98982 22.8923 7.38307 22.7113 7.12047 22.2255C6.85787 21.7396 7.03885 21.1329 7.52471 20.8703C8.84605 20.1561 10.3754 19.75 12.0002 19.75C13.625 19.75 15.1543 20.1561 16.4757 20.8703C16.9615 21.1329 17.1425 21.7396 16.8799 22.2255C16.6173 22.7113 16.0106 22.8923 15.5247 22.6297C14.4927 22.0719 13.2897 21.75 12.0002 21.75Z',
  d5: 'M14.0564 1.25H14.0564C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65018 22.75 8.10585 22.75 9.94359V10.0565C22.75 11.8942 22.75 13.3498 22.5969 14.489C22.4392 15.6614 22.1071 16.6104 21.3588 17.3588C20.6104 18.1071 19.6614 18.4392 18.489 18.5969C17.3498 18.75 15.8942 18.75 14.0564 18.75H9.94354C8.1058 18.75 6.65018 18.75 5.51098 18.5969C4.33856 18.4392 3.38961 18.1071 2.64124 17.3588C1.89288 16.6104 1.56076 15.6614 1.40314 14.489C1.24997 13.3498 1.24998 11.8942 1.25 10.0564V10.0564V9.94357V9.94356C1.24998 8.10581 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94357 1.25H9.94358H14.0564ZM18.6 6.55004C18.8485 6.88141 18.7814 7.35152 18.45 7.60004L15.25 10L18.45 12.4C18.7814 12.6486 18.8485 13.1187 18.6 13.45C18.3515 13.7814 17.8814 13.8486 17.55 13.6L14.75 11.5V13C14.75 13.4143 14.4142 13.75 14 13.75C13.5858 13.75 13.25 13.4143 13.25 13V7.00004C13.25 6.58583 13.5858 6.25004 14 6.25004C14.4142 6.25004 14.75 6.58583 14.75 7.00004V8.50004L17.55 6.40004C17.8814 6.15152 18.3515 6.21867 18.6 6.55004ZM6.00001 6.25004C6.41422 6.25004 6.75001 6.58583 6.75001 7.00004V8.00004C6.75001 8.49265 6.7516 8.78666 6.77993 8.99738C6.79291 9.09394 6.80821 9.1423 6.81717 9.16408C6.81924 9.16912 6.82086 9.17244 6.82187 9.17437L6.82324 9.17681L6.82568 9.17818L6.82874 9.1797L6.83597 9.18289C6.85775 9.19185 6.90611 9.20714 7.00267 9.22012C7.21339 9.24845 7.5074 9.25004 8.00001 9.25004H9.25001V7.00004C9.25001 6.58583 9.58579 6.25004 10 6.25004C10.4142 6.25004 10.75 6.58583 10.75 7.00004V13C10.75 13.4143 10.4142 13.75 10 13.75C9.58579 13.75 9.25001 13.4143 9.25001 13V10.75L7.95526 10.75C7.52244 10.7501 7.12561 10.7501 6.8028 10.7067C6.44732 10.659 6.07159 10.5465 5.76257 10.2375C5.45355 9.92846 5.3411 9.55273 5.29331 9.19725C5.24991 8.87445 5.24995 8.47761 5.25 8.0448V8.04479L5.25001 7.00004C5.25001 6.58583 5.58579 6.25004 6.00001 6.25004Z',
  d6: 'M14.0564 1.25H14.0564H9.94358H9.94357C8.10582 1.24998 6.65019 1.24997 5.51098 1.40314C4.33856 1.56076 3.38961 1.89288 2.64124 2.64124C1.89288 3.38961 1.56076 4.33856 1.40314 5.51098C1.24997 6.65019 1.24998 8.10581 1.25 9.94356V9.94357V10.0564V10.0564C1.24998 11.8942 1.24997 13.3498 1.40314 14.489C1.56076 15.6614 1.89288 16.6104 2.64124 17.3588C3.38961 18.1071 4.33856 18.4392 5.51098 18.5969C6.65018 18.75 8.1058 18.75 9.94354 18.75H14.0564C15.8942 18.75 17.3498 18.75 18.489 18.5969C19.6614 18.4392 20.6104 18.1071 21.3588 17.3588C22.1071 16.6104 22.4392 15.6614 22.5969 14.489C22.75 13.3498 22.75 11.8942 22.75 10.0565V9.94359C22.75 8.10585 22.75 6.65018 22.5969 5.51098C22.4392 4.33856 22.1071 3.38961 21.3588 2.64124C20.6104 1.89288 19.6614 1.56076 18.489 1.40314C17.3498 1.24997 15.8942 1.24998 14.0564 1.25Z',
  d7: 'M18.45 7.60004C18.7814 7.35152 18.8485 6.88142 18.6 6.55004C18.3515 6.21867 17.8814 6.15152 17.55 6.40004L14.75 8.50004V7.00004C14.75 6.58583 14.4142 6.25004 14 6.25004C13.5858 6.25004 13.25 6.58583 13.25 7.00004V13C13.25 13.4143 13.5858 13.75 14 13.75C14.4142 13.75 14.75 13.4143 14.75 13V11.5L17.55 13.6C17.8814 13.8486 18.3515 13.7814 18.6 13.45C18.8485 13.1187 18.7814 12.6486 18.45 12.4L15.25 10L18.45 7.60004ZM6.75001 7.00004C6.75001 6.58583 6.41422 6.25004 6.00001 6.25004C5.58579 6.25004 5.25001 6.58583 5.25001 7.00004L5.25 8.04479C5.24995 8.4776 5.24991 8.87444 5.29331 9.19725C5.3411 9.55273 5.45355 9.92846 5.76257 10.2375C6.07159 10.5465 6.44732 10.659 6.8028 10.7067C7.12561 10.7501 7.52244 10.7501 7.95526 10.75L9.25001 10.75V13C9.25001 13.4143 9.58579 13.75 10 13.75C10.4142 13.75 10.75 13.4143 10.75 13V7.00004C10.75 6.58583 10.4142 6.25004 10 6.25004C9.58579 6.25004 9.25001 6.58583 9.25001 7.00004V9.25004H8.00001C7.5074 9.25004 7.21339 9.24845 7.00267 9.22012C6.90611 9.20714 6.85775 9.19185 6.83597 9.18289C6.83298 9.18165 6.83059 9.18058 6.82874 9.1797L6.82568 9.17818L6.82324 9.17681L6.82187 9.17437C6.82086 9.17244 6.81924 9.16912 6.81717 9.16408C6.80821 9.1423 6.79291 9.09394 6.77993 8.99738C6.7516 8.78666 6.75001 8.49265 6.75001 8.00004V7.00004Z',
  d8: 'M22 2.5H2V18.5H22V2.5Z',
  d9: 'M8 21.5C9.45715 21.5 15.9991 21.5 15.9991 21.5',
  d10: 'M6.51465 6.75195L6.51481 10.3941C6.51481 10.4493 6.55954 10.494 6.61474 10.494L10.5089 10.4969M10.5089 10.4969V6.75195M10.5089 10.4969V14.2417M17.4749 7.49188L13.4878 10.3194M17.4749 13.5185L13.4878 10.4178M13.4878 6.75195V14.2417',
  d11: 'M2 1.75C1.58579 1.75 1.25 2.08579 1.25 2.5V18.5C1.25 18.9142 1.58579 19.25 2 19.25H22C22.4142 19.25 22.75 18.9142 22.75 18.5V2.5C22.75 2.08579 22.4142 1.75 22 1.75H2ZM7.25 9.75V6.75H5.75V10.5C5.75 10.9142 6.08579 11.25 6.5 11.25H9.75V14.25H11.25V6.75H9.75V9.75H7.25ZM14.25 9V6.75H12.75V14.25H14.25V12L17.05 14.1L17.95 12.9L14.75 10.5L17.95 8.1L17.05 6.9L14.25 9Z',
  d12: 'M8 22.25V20.75H15.9984L15.999 22.25H8Z',
};

export const IconModernTv4KStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-stroke-rounded IconModernTv4KStrokeRounded"
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

export const IconModernTv4KDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-duotone-rounded IconModernTv4KDuotoneRounded"
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

export const IconModernTv4KTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-twotone-rounded IconModernTv4KTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconModernTv4KSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-solid-rounded IconModernTv4KSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTv4KBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-bulk-rounded IconModernTv4KBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconModernTv4KStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-stroke-sharp IconModernTv4KStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconModernTv4KSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="modern-tv-4-k-solid-sharp IconModernTv4KSolidSharp"
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

export const iconPackOfModernTv4K: TheIconSelfPack = {
  name: 'ModernTv4K',
  StrokeRounded: IconModernTv4KStrokeRounded,
  DuotoneRounded: IconModernTv4KDuotoneRounded,
  TwotoneRounded: IconModernTv4KTwotoneRounded,
  SolidRounded: IconModernTv4KSolidRounded,
  BulkRounded: IconModernTv4KBulkRounded,
  StrokeSharp: IconModernTv4KStrokeSharp,
  SolidSharp: IconModernTv4KSolidSharp,
};