import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.0579 22C16.9725 22 21.0638 18.4937 21.9416 13.8586C22.1996 12.4967 21.5931 12.5686 20.3101 12.3438C19.3996 12.1844 18.5498 11.5667 18.2333 10.588C18.0178 9.9216 17.9376 9.89475 17.2352 9.86554C15.7861 9.80529 14.625 8.2689 15.2032 7.02602C15.419 6.56236 15.412 6.50892 15.0078 6.19448C14.3005 5.6443 13.9706 4.6166 14.0978 3.62604C14.2347 2.5591 14.3147 2.1747 13.1854 2.05455C7.45657 1.44501 2 6.0196 2 11.9948C2 17.5205 6.50308 22 12.0579 22Z',
  d2: 'M11.0078 12L10.9988 12',
  d3: 'M6.00781 10L5.99883 10',
  d4: 'M12.0078 18L11.9988 18',
  d5: 'M10 6L9 7',
  d6: 'M17 14L16 15',
  d7: 'M7 15L8 16',
  d8: 'M1.25 11.9948C1.25 5.5515 7.11552 0.654539 13.2648 1.3088C13.8307 1.36902 14.521 1.52056 14.8066 2.19161C14.9258 2.47191 14.9317 2.76118 14.9209 2.98365C14.9112 3.18446 14.8707 3.49734 14.8417 3.72158C14.7392 4.51981 15.0212 5.25479 15.4683 5.60253C15.5662 5.67876 15.6837 5.7718 15.7806 5.87294C15.8843 5.98108 16.0146 6.1486 16.0691 6.38711C16.1232 6.62356 16.0797 6.8293 16.0367 6.96751C15.9961 7.09792 15.9346 7.23215 15.8832 7.34244C15.7363 7.65819 15.7848 8.06348 16.0648 8.44723C16.3455 8.8319 16.7964 9.0967 17.2663 9.11624C17.4339 9.12321 17.6136 9.13132 17.7723 9.15598C17.9389 9.18185 18.1468 9.23436 18.3448 9.37199C18.548 9.51314 18.6715 9.69525 18.7548 9.86022C18.8324 10.014 18.8929 10.1903 18.9469 10.3573C19.1659 11.0345 19.7623 11.4865 20.4395 11.6051C20.6185 11.6339 21.1483 11.7205 21.2881 11.7481C21.5353 11.797 21.8434 11.8725 22.1101 12.0445C22.4204 12.2445 22.6273 12.5417 22.7091 12.9208C22.7812 13.2553 22.7496 13.6232 22.6785 13.9982C21.7343 18.9835 17.3368 22.75 12.0579 22.75C6.09259 22.75 1.25 17.9385 1.25 11.9948ZM12.0078 12C12.0078 12.5523 11.5601 13 11.0078 13H10.9988C10.4465 13 9.99883 12.5523 9.99883 12C9.99883 11.4477 10.4465 11 10.9988 11H11.0078C11.5601 11 12.0078 11.4477 12.0078 12ZM6.00781 11C6.5601 11 7.00781 10.5523 7.00781 10C7.00781 9.44772 6.5601 9 6.00781 9H5.99883C5.44655 9 4.99883 9.44771 4.99883 10C4.99883 10.5523 5.44655 11 5.99883 11H6.00781ZM13.0078 18C13.0078 18.5523 12.5601 19 12.0078 19H11.9988C11.4465 19 10.9988 18.5523 10.9988 18C10.9988 17.4477 11.4465 17 11.9988 17H12.0078C12.5601 17 13.0078 17.4477 13.0078 18ZM10.5303 6.53033C10.8232 6.23744 10.8232 5.76256 10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967L8.46967 6.46967C8.17678 6.76256 8.17678 7.23744 8.46967 7.53033C8.76256 7.82322 9.23744 7.82322 9.53033 7.53033L10.5303 6.53033ZM17.5303 13.4697C17.8232 13.7626 17.8232 14.2374 17.5303 14.5303L16.5303 15.5303C16.2374 15.8232 15.7626 15.8232 15.4697 15.5303C15.1768 15.2374 15.1768 14.7626 15.4697 14.4697L16.4697 13.4697C16.7626 13.1768 17.2374 13.1768 17.5303 13.4697ZM6.46967 15.5303C6.17678 15.2374 6.17678 14.7626 6.46967 14.4697C6.76256 14.1768 7.23744 14.1768 7.53033 14.4697L8.53033 15.4697C8.82322 15.7626 8.82322 16.2374 8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303L6.46967 15.5303Z',
  d9: 'M1.25 11.9948C1.25 5.5515 7.11552 0.654539 13.2648 1.3088C13.8307 1.36902 14.521 1.52056 14.8066 2.19161C14.9258 2.47191 14.9317 2.76118 14.9209 2.98365C14.9112 3.18446 14.8707 3.49734 14.8417 3.72158C14.7392 4.51981 15.0212 5.25479 15.4683 5.60253C15.5662 5.67876 15.6837 5.7718 15.7806 5.87294C15.8843 5.98108 16.0146 6.1486 16.0691 6.38711C16.1232 6.62356 16.0797 6.8293 16.0367 6.96751C15.9961 7.09792 15.9346 7.23215 15.8832 7.34244C15.7363 7.65819 15.7848 8.06348 16.0648 8.44723C16.3455 8.8319 16.7964 9.0967 17.2663 9.11624C17.4339 9.12321 17.6136 9.13132 17.7723 9.15598C17.9389 9.18185 18.1468 9.23436 18.3448 9.37199C18.548 9.51314 18.6715 9.69525 18.7548 9.86022C18.8324 10.014 18.8929 10.1903 18.9469 10.3573C19.1659 11.0345 19.7623 11.4865 20.4395 11.6051C20.6185 11.6339 21.1483 11.7205 21.2881 11.7481C21.5353 11.797 21.8434 11.8725 22.1101 12.0445C22.4204 12.2445 22.6273 12.5417 22.7091 12.9208C22.7812 13.2553 22.7496 13.6232 22.6785 13.9982C21.7343 18.9835 17.3368 22.75 12.0579 22.75C6.09259 22.75 1.25 17.9385 1.25 11.9948Z',
  d10: 'M12.0078 12C12.0078 12.5523 11.5601 13 11.0078 13L10.9988 13C10.4465 13 9.99883 12.5523 9.99883 12C9.99883 11.4477 10.4465 11 10.9988 11L11.0078 11C11.5601 11 12.0078 11.4477 12.0078 12Z',
  d11: 'M7.00781 10C7.00781 10.5523 6.5601 11 6.00781 11L5.99883 11C5.44655 11 4.99883 10.5523 4.99883 10C4.99883 9.44771 5.44655 9 5.99883 9L6.00781 9C6.5601 9 7.00781 9.44772 7.00781 10Z',
  d12: 'M13.0078 18C13.0078 18.5523 12.5601 19 12.0078 19L11.9988 19C11.4465 19 10.9988 18.5523 10.9988 18C10.9988 17.4477 11.4465 17 11.9988 17L12.0078 17C12.5601 17 13.0078 17.4477 13.0078 18Z',
  d13: 'M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L9.53033 7.53033C9.23744 7.82322 8.76256 7.82322 8.46967 7.53033C8.17678 7.23744 8.17678 6.76256 8.46967 6.46967L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z',
  d14: 'M17.5303 13.4697C17.8232 13.7626 17.8232 14.2374 17.5303 14.5303L16.5303 15.5303C16.2374 15.8232 15.7626 15.8232 15.4697 15.5303C15.1768 15.2374 15.1768 14.7626 15.4697 14.4697L16.4697 13.4697C16.7626 13.1768 17.2374 13.1768 17.5303 13.4697Z',
  d15: 'M6.46967 14.4697C6.17678 14.7626 6.17678 15.2374 6.46967 15.5303L7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303C8.82322 16.2374 8.82322 15.7626 8.53033 15.4697L7.53033 14.4697C7.23744 14.1768 6.76256 14.1768 6.46967 14.4697Z',
  d16: 'M2 12C2 17.5228 6.48759 22 12.0233 22C17.2307 22 21.5107 18.0382 22 12.9709C21.8512 12.9901 21.6995 13 21.5455 13C19.6848 13 18.1625 11.5548 18.0446 9.72818C17.7481 9.90098 17.4031 10 17.035 10C15.9278 10 15.0303 9.10457 15.0303 8C15.0303 7.39892 15.2961 6.85978 15.7168 6.49315C14.7043 5.87927 14.028 4.76843 14.028 3.5C14.028 3.05943 14.1096 2.63788 14.2585 2.24956C13.5398 2.08624 12.7916 2 12.0233 2C6.48759 2 2 6.47715 2 12Z',
  d17: 'M10.5 5.5L9 7',
  d18: 'M17 14L15 16',
  d19: 'M6.5 14.5L8.5 16.5',
  d20: 'M1.25 12C1.25 6.06129 6.05559 1.25 11.9799 1.25C12.8012 1.25 13.6018 1.34258 14.3716 1.5182L15.2122 1.70998L14.9035 2.51813C14.7874 2.82209 14.7235 3.1527 14.7235 3.5C14.7235 4.49492 15.2509 5.36792 16.0458 5.85182L16.9202 6.38409L16.1493 7.05858C15.8859 7.28905 15.7218 7.6251 15.7218 8C15.7218 8.68871 16.2796 9.25 16.9714 9.25C17.2025 9.25 17.4167 9.18795 17.6009 9.08019L18.6447 8.46944L18.7224 9.6799C18.8145 11.113 20.0055 12.25 21.4637 12.25C21.5851 12.25 21.7042 12.2422 21.8208 12.2271L22.75 12.1066L22.6599 13.043C22.1358 18.4924 17.5534 22.75 11.9799 22.75C6.05559 22.75 1.25 17.9387 1.25 12ZM11.9645 12C11.9645 12.5523 11.5186 13 10.9685 13H10.9596C10.4095 13 9.96359 12.5523 9.96359 12C9.96359 11.4477 10.4095 11 10.9596 11H10.9685C11.5186 11 11.9645 11.4477 11.9645 12ZM5.98865 11C6.53871 11 6.98462 10.5523 6.98462 10C6.98462 9.44771 6.53871 9 5.98865 9H5.9797C5.42964 9 4.98373 9.44771 4.98373 10C4.98373 10.5523 5.42964 11 5.9797 11H5.98865ZM12.9605 18C12.9605 18.5523 12.5145 19 11.9645 19H11.9555C11.4055 19 10.9596 18.5523 10.9596 18C10.9596 17.4477 11.4055 17 11.9555 17H11.9645C12.5145 17 12.9605 17.4477 12.9605 18ZM9.93363 4.96973L8.43967 6.46973L9.49606 7.53039L10.99 6.03039L9.93363 4.96973ZM14.4155 15.4697L16.4075 13.4697L17.4638 14.5304L15.4719 16.5304L14.4155 15.4697ZM7.00796 13.9697L8.99991 15.9697L7.94352 17.0304L5.95158 15.0304L7.00796 13.9697Z',
};

export const IconCookieStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-stroke-rounded IconCookieStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-duotone-rounded IconCookieDuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-twotone-rounded IconCookieTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-solid-rounded IconCookieSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-bulk-rounded IconCookieBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-stroke-sharp IconCookieStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCookieSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cookie-solid-sharp IconCookieSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCookie: TheIconSelfPack = {
  name: 'Cookie',
  StrokeRounded: IconCookieStrokeRounded,
  DuotoneRounded: IconCookieDuotoneRounded,
  TwotoneRounded: IconCookieTwotoneRounded,
  SolidRounded: IconCookieSolidRounded,
  BulkRounded: IconCookieBulkRounded,
  StrokeSharp: IconCookieStrokeSharp,
  SolidSharp: IconCookieSolidSharp,
};