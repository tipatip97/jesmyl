import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89543 10.8955 8 12 8C13.1046 8 14 8.89543 14 10Z',
  d2: 'M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z',
  d3: 'M22 10.0332V13.9669C19.1434 13.9669 17.2874 17.0696 18.7336 19.5331L15.2695 21.4999C13.8046 19.0047 10.1969 19.0048 8.73205 21.5L5.26795 19.5332C6.71425 17.0697 4.85668 13.9669 2 13.9669V10.0332C4.85673 10.0332 6.71586 6.93035 5.26953 4.46681L8.73363 2.5C10.1978 4.99395 13.8038 4.99405 15.2679 2.5001L18.732 4.46691C17.2857 6.93041 19.1433 10.0332 22 10.0332ZM14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89543 10.8955 8 12 8C13.1046 8 14 8.89543 14 10ZM8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5H8.5Z',
  d4: 'M9.38041 2.1204C9.17284 1.76686 8.71985 1.64549 8.36333 1.84791L4.89923 3.81472C4.72461 3.91387 4.59704 4.07888 4.54508 4.27284C4.49312 4.4668 4.5211 4.67349 4.62276 4.84665C5.76109 6.78558 4.30575 9.28336 2 9.28336C1.58579 9.28336 1.25 9.61914 1.25 10.0334V13.967C1.25 14.3812 1.58579 14.717 2 14.717C4.30517 14.717 5.75974 17.2143 4.62118 19.1536C4.51952 19.3268 4.49154 19.5334 4.5435 19.7274C4.59546 19.9214 4.72303 20.0864 4.89765 20.1855L8.36175 22.1523C8.71827 22.3547 9.17126 22.2334 9.37882 21.8798C10.5539 19.8784 13.4477 19.8783 14.6228 21.8797C14.8303 22.2333 15.2833 22.3547 15.6398 22.1522L19.1039 20.1854C19.2786 20.0863 19.4061 19.9213 19.4581 19.7273C19.51 19.5333 19.4821 19.3267 19.3804 19.1535C18.2416 17.2138 19.6954 14.717 22 14.717C22.4142 14.717 22.75 14.3812 22.75 13.967V10.0334C22.75 9.61914 22.4142 9.28336 22 9.28336C19.6948 9.28336 18.2403 6.78608 19.3788 4.84674C19.4805 4.67358 19.5085 4.46689 19.4565 4.27294C19.4045 4.07898 19.277 3.91396 19.1024 3.81482L15.6383 1.84801C15.2817 1.64559 14.8287 1.76695 14.6212 2.1205C13.4469 4.12071 10.5548 4.12068 9.38041 2.1204ZM12.0002 7.25C10.4814 7.25 9.25015 8.48122 9.25015 10C9.25015 11.5188 10.4814 12.75 12.0002 12.75C13.5189 12.75 14.7502 11.5188 14.7502 10C14.7502 8.48122 13.5189 7.25 12.0002 7.25ZM9.14933 16.8755C9.71941 15.89 10.7831 15.2297 12.0001 15.2297C13.2171 15.2297 14.2808 15.89 14.8509 16.8755C15.0583 17.2341 15.5171 17.3566 15.8757 17.1492C16.2342 16.9418 16.3567 16.483 16.1493 16.1244C15.3222 14.6945 13.7743 13.7297 12.0001 13.7297C10.226 13.7297 8.6781 14.6945 7.85092 16.1244C7.64351 16.483 7.76603 16.9418 8.12458 17.1492C8.48313 17.3566 8.94192 17.2341 9.14933 16.8755Z',
  d5: 'M8.36333 1.84791C8.71985 1.64549 9.17284 1.76686 9.38041 2.1204C10.5548 4.12068 13.4469 4.12071 14.6212 2.1205C14.8287 1.76695 15.2817 1.64559 15.6383 1.84801L19.1024 3.81482C19.277 3.91396 19.4045 4.07898 19.4565 4.27294C19.5085 4.46689 19.4805 4.67358 19.3788 4.84674C18.2403 6.78608 19.6948 9.28336 22 9.28336C22.4142 9.28336 22.75 9.61914 22.75 10.0334V13.967C22.75 14.3812 22.4142 14.717 22 14.717C19.6954 14.717 18.2416 17.2138 19.3804 19.1535C19.4821 19.3267 19.51 19.5333 19.4581 19.7273C19.4061 19.9213 19.2786 20.0863 19.1039 20.1854L15.6398 22.1522C15.2833 22.3547 14.8303 22.2333 14.6228 21.8797C13.4477 19.8783 10.5539 19.8784 9.37882 21.8798C9.17126 22.2334 8.71827 22.3547 8.36175 22.1523L4.89765 20.1855C4.72303 20.0864 4.59546 19.9214 4.5435 19.7274C4.49154 19.5334 4.51952 19.3268 4.62118 19.1536C5.75974 17.2143 4.30517 14.717 2 14.717C1.58579 14.717 1.25 14.3812 1.25 13.967V10.0334C1.25 9.61914 1.58579 9.28336 2 9.28336C4.30575 9.28336 5.76109 6.78558 4.62276 4.84665C4.5211 4.67349 4.49312 4.4668 4.54508 4.27284C4.59704 4.07888 4.72461 3.91387 4.89923 3.81472L8.36333 1.84791Z',
  d6: 'M9.25015 10C9.25015 8.48122 10.4814 7.25 12.0002 7.25C13.5189 7.25 14.7502 8.48122 14.7502 10C14.7502 11.5188 13.5189 12.75 12.0002 12.75C10.4814 12.75 9.25015 11.5188 9.25015 10Z',
  d7: 'M12.0001 15.2297C10.7831 15.2297 9.71941 15.89 9.14933 16.8755C8.94192 17.2341 8.48313 17.3566 8.12458 17.1492C7.76603 16.9418 7.64351 16.483 7.85092 16.1244C8.6781 14.6945 10.226 13.7297 12.0001 13.7297C13.7742 13.7297 15.3222 14.6945 16.1493 16.1244C16.3567 16.483 16.2342 16.9418 15.8757 17.1492C15.5171 17.3566 15.0583 17.2341 14.8509 16.8755C14.2808 15.89 13.2172 15.2297 12.0001 15.2297Z',
  d8: 'M9.38041 2.1204C9.17284 1.76686 8.71985 1.64549 8.36333 1.84791L4.89923 3.81472C4.72461 3.91387 4.59704 4.07888 4.54508 4.27284C4.49312 4.4668 4.5211 4.67349 4.62276 4.84665C5.76109 6.78558 4.30575 9.28336 2 9.28336C1.58579 9.28336 1.25 9.61914 1.25 10.0334V13.967C1.25 14.3812 1.58579 14.717 2 14.717C4.30517 14.717 5.75974 17.2143 4.62118 19.1536C4.51952 19.3268 4.49154 19.5334 4.5435 19.7274C4.59546 19.9214 4.72303 20.0864 4.89765 20.1855L8.36175 22.1523C8.71827 22.3547 9.17126 22.2334 9.37882 21.8798C10.5539 19.8784 13.4477 19.8783 14.6228 21.8797C14.8303 22.2333 15.2833 22.3547 15.6398 22.1522L19.1039 20.1854C19.2786 20.0863 19.4061 19.9213 19.4581 19.7273C19.51 19.5333 19.4821 19.3267 19.3804 19.1535C18.2416 17.2138 19.6954 14.717 22 14.717C22.4142 14.717 22.75 14.3812 22.75 13.967V10.0334C22.75 9.61914 22.4142 9.28336 22 9.28336C19.6948 9.28336 18.2403 6.78608 19.3788 4.84674C19.4805 4.67358 19.5085 4.46689 19.4565 4.27294C19.4045 4.07898 19.277 3.91396 19.1024 3.81482L15.6383 1.84801C15.2817 1.64559 14.8287 1.76695 14.6212 2.1205C13.4469 4.12071 10.5548 4.12068 9.38041 2.1204ZM11.9998 7.25012C10.481 7.25012 9.24982 8.48134 9.24982 10.0001C9.24982 11.5189 10.481 12.7501 11.9998 12.7501C13.5186 12.7501 14.7498 11.5189 14.7498 10.0001C14.7498 8.48134 13.5186 7.25012 11.9998 7.25012ZM9.14899 16.8757C9.71908 15.8901 10.7828 15.2298 11.9998 15.2298C13.2168 15.2298 14.2805 15.8901 14.8506 16.8757L16.149 16.1246C15.3218 14.6946 13.7739 13.7298 11.9998 13.7298C10.2257 13.7298 8.67776 14.6946 7.85059 16.1246L9.14899 16.8757Z',
};

export const IconAccountSetting01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-stroke-rounded IconAccountSetting01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAccountSetting01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-duotone-rounded IconAccountSetting01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconAccountSetting01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-twotone-rounded IconAccountSetting01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAccountSetting01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-solid-rounded IconAccountSetting01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccountSetting01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-bulk-rounded IconAccountSetting01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccountSetting01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-stroke-sharp IconAccountSetting01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconAccountSetting01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="account-setting-01-solid-sharp IconAccountSetting01SolidSharp"
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

export const iconPackOfAccountSetting01: TheIconSelfPack = {
  name: 'AccountSetting01',
  StrokeRounded: IconAccountSetting01StrokeRounded,
  DuotoneRounded: IconAccountSetting01DuotoneRounded,
  TwotoneRounded: IconAccountSetting01TwotoneRounded,
  SolidRounded: IconAccountSetting01SolidRounded,
  BulkRounded: IconAccountSetting01BulkRounded,
  StrokeSharp: IconAccountSetting01StrokeSharp,
  SolidSharp: IconAccountSetting01SolidSharp,
};