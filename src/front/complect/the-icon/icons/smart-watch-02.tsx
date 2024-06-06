import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 11C7 9.11438 7 8.17157 7.58579 7.58579C8.17157 7 9.11438 7 11 7H13C14.8856 7 15.8284 7 16.4142 7.58579C17 8.17157 17 9.11438 17 11V13C17 14.8856 17 15.8284 16.4142 16.4142C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 16.4142C7 15.8284 7 14.8856 7 13V11Z',
  d2: 'M8.5 7C8.5 7 9.18904 5.66076 9.34422 4.00093C9.42833 3.10125 9.47038 2.6514 9.72393 2.39673C9.97748 2.14207 10.283 2.11215 10.8942 2.05231C11.217 2.0207 11.5863 2 12 2C12.4137 2 12.783 2.0207 13.1058 2.05231C13.717 2.11215 14.0225 2.14207 14.2761 2.39673C14.5296 2.6514 14.5717 3.10125 14.6558 4.00093C14.811 5.66076 15.5 7 15.5 7',
  d3: 'M15.5 17C15.5 17 14.811 18.3392 14.6558 19.9991C14.5717 20.8988 14.5296 21.3486 14.2761 21.6033C14.0225 21.8579 13.717 21.8879 13.1058 21.9477C12.783 21.9793 12.4137 22 12 22C11.5863 22 11.217 21.9793 10.8942 21.9477C10.283 21.8879 9.97748 21.8579 9.72393 21.6033C9.47038 21.3486 9.42833 20.8988 9.34422 19.9991C9.18904 18.3392 8.5 17 8.5 17',
  d4: 'M10.0287 6.00375C9.51928 6.01052 9.06459 6.02942 8.67244 6.08215C8.38465 6.12084 8.1021 6.18085 7.83253 6.27913C8.10847 5.61361 8.34477 4.9052 8.34464 4.19654C8.34455 3.77216 8.34447 3.35983 8.39016 3.0198C8.44165 2.63658 8.56712 2.19911 8.93043 1.8358C9.29364 1.47258 9.73092 1.34706 10.1141 1.29554C10.454 1.24984 10.8662 1.24992 11.2902 1.25001H12.7106C13.1347 1.24992 13.5468 1.24984 13.8867 1.29554C14.2699 1.34706 14.7072 1.47258 15.0704 1.8358C15.4337 2.19911 15.5592 2.63658 15.6107 3.0198C15.6564 3.35983 15.6563 3.77216 15.6562 4.19654C15.6561 4.90527 15.8924 5.61373 16.1684 6.2793C15.8987 6.18092 15.616 6.12086 15.328 6.08215C14.936 6.02944 14.4814 6.01053 13.9721 6.00376C13.8375 5.51947 13.7175 4.95359 13.6606 4.34403C13.6606 4.28658 13.6634 4.2244 13.6664 4.15984C13.6788 3.89127 13.693 3.58147 13.511 3.39939C13.3661 3.25447 13.1997 3.25323 12.8668 3.25074C12.8012 3.25025 12.7312 3.25001 12.6562 3.25001H11.3446C11.2697 3.25001 11.1996 3.25025 11.134 3.25074C10.8012 3.25323 10.6348 3.25447 10.4899 3.39939C10.3078 3.58146 10.3221 3.89127 10.3345 4.15983V4.15984C10.3374 4.2244 10.3403 4.28658 10.3403 4.34403C10.2833 4.95359 10.1633 5.51946 10.0287 6.00375ZM13.9722 17.9962C14.4815 17.9895 14.936 17.9706 15.328 17.9179C15.6172 17.879 15.9011 17.8186 16.1718 17.7195C16.1372 17.8051 16.1048 17.8889 16.0794 17.9608C15.9091 18.4424 15.7272 19.0914 15.6562 19.7978L15.6564 19.9205V19.9206C15.6571 20.2741 15.6578 20.6302 15.6107 20.9806C15.5592 21.3639 15.4337 21.8013 15.0704 22.1646C14.7072 22.5279 14.2699 22.6534 13.8867 22.7049C13.5468 22.7506 13.1347 22.7505 12.7106 22.7504H11.2902C10.8662 22.7505 10.454 22.7506 10.1141 22.7049C9.73092 22.6534 9.29364 22.5279 8.93043 22.1646C8.56712 21.8013 8.44165 21.3639 8.39016 20.9806C8.34447 20.6406 8.34455 20.2283 8.34464 19.8039C8.34475 19.1972 8.12189 18.5278 7.9215 17.9608C7.8961 17.8889 7.86369 17.8053 7.8291 17.7196C8.0997 17.8186 8.38343 17.879 8.67244 17.9179C9.06455 17.9706 9.51921 17.9895 10.0286 17.9963C10.1633 18.4806 10.2833 19.0467 10.3403 19.6564C10.3403 19.7139 10.3374 19.7761 10.3345 19.8406C10.3221 20.1092 10.3078 20.419 10.4899 20.6011C10.6348 20.746 10.8012 20.7472 11.134 20.7497C11.1996 20.7502 11.2697 20.7504 11.3446 20.7504H12.6562C12.7312 20.7504 12.8012 20.7502 12.8668 20.7497C13.1997 20.7472 13.3661 20.746 13.511 20.6011C13.693 20.419 13.6788 20.1092 13.6664 19.8406C13.6634 19.7761 13.6606 19.7139 13.6606 19.6564C13.7176 19.0467 13.8376 18.4806 13.9722 17.9962Z',
  d5: 'M10.9342 6L11 6H13L13.0658 6C13.9523 5.99995 14.7161 5.99991 15.3278 6.08215C15.9833 6.17028 16.6117 6.36902 17.1213 6.87868C17.631 7.38835 17.8297 8.0167 17.9179 8.67221C18.0001 9.28387 18.0001 10.0477 18 10.9342V13.0658C18.0001 13.9523 18.0001 14.7161 17.9179 15.3278C17.8297 15.9833 17.631 16.6117 17.1213 17.1213C16.6117 17.631 15.9833 17.8297 15.3278 17.9179C14.7161 18.0001 13.9523 18.0001 13.0658 18H10.9342C10.0477 18.0001 9.28387 18.0001 8.67221 17.9179C8.0167 17.8297 7.38835 17.631 6.87868 17.1213C6.36902 16.6117 6.17028 15.9833 6.08215 15.3278C5.99991 14.7161 5.99995 13.9523 6 13.0658L6 13V11L6 10.9342C5.99995 10.0477 5.99991 9.28387 6.08215 8.67221C6.17028 8.0167 6.36902 7.38835 6.87868 6.87868C7.38835 6.36902 8.0167 6.17028 8.67221 6.08215C9.28387 5.99991 10.0477 5.99995 10.9342 6Z',
  d6: 'M17 7H7V17H17V7Z',
  d7: 'M8.5 7L9.5 2H14.5L15.5 7',
  d8: 'M8.5 17L9.5 22H14.5L15.5 17',
  d9: 'M6.46967 6.46967C6.61032 6.32902 6.80109 6.25 7 6.25H17C17.4142 6.25 17.75 6.58579 17.75 7V17C17.75 17.4142 17.4142 17.75 17 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17V7C6.25 6.80109 6.32902 6.61032 6.46967 6.46967Z',
  d10: 'M8.86476 1.25H15.1352L16.2315 6.92198C16.3338 7.45123 16.0021 7.96608 15.4906 8.07193C14.9792 8.17778 14.4816 7.83455 14.3793 7.3053L13.5868 3.20455H10.4132L9.62065 7.3053C9.51836 7.83455 9.02082 8.17778 8.50937 8.07193C7.99792 7.96608 7.66623 7.45123 7.76852 6.92198L8.86476 1.25ZM8.50937 15.9281C9.02082 15.8222 9.51836 16.1655 9.62065 16.6947L10.4132 20.7955H13.5868L14.3793 16.6947C14.4816 16.1655 14.9792 15.8222 15.4906 15.9281C16.0021 16.0339 16.3338 16.5488 16.2315 17.078L15.1352 22.75H8.86476L7.76852 17.078C7.66623 16.5488 7.99792 16.0339 8.50937 15.9281Z',
};

export const IconSmartWatch02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-stroke-rounded IconSmartWatch02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-duotone-rounded IconSmartWatch02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSmartWatch02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-twotone-rounded IconSmartWatch02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSmartWatch02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-solid-rounded IconSmartWatch02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-bulk-rounded IconSmartWatch02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-stroke-sharp IconSmartWatch02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-02-solid-sharp IconSmartWatch02SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartWatch02: TheIconSelfPack = {
  name: 'SmartWatch02',
  StrokeRounded: IconSmartWatch02StrokeRounded,
  DuotoneRounded: IconSmartWatch02DuotoneRounded,
  TwotoneRounded: IconSmartWatch02TwotoneRounded,
  SolidRounded: IconSmartWatch02SolidRounded,
  BulkRounded: IconSmartWatch02BulkRounded,
  StrokeSharp: IconSmartWatch02StrokeSharp,
  SolidSharp: IconSmartWatch02SolidSharp,
};