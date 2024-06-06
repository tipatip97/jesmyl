import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 7.75736 2 5.63604 3.46447 4.31802C4.92893 3 7.28596 3 12 3C16.714 3 19.0711 3 20.5355 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.5355 19.682C19.0711 21 16.714 21 12 21C7.28596 21 4.92893 21 3.46447 19.682C2 18.364 2 16.2426 2 12Z',
  d2: 'M5.5 8.5L8 8.5M10.5 8.5L8 8.5M13 15.5V8.5L15.75 12.5L18.5 8.5V15.5M8 8.5V15.5',
  d3: 'M17.5765 2.42018C16.1699 2.24998 14.365 2.24999 12.0522 2.25C9.73933 2.24999 7.83014 2.24998 6.42355 2.42018C4.99222 2.59338 3.85936 2.95359 2.96274 3.76055C2.05481 4.57769 1.63907 5.62747 1.44129 6.95147C1.24997 8.23221 1.24998 9.99422 1.25 12.0625C1.24998 14.1308 1.24997 15.7678 1.44129 17.0485C1.63907 18.3725 2.05481 19.4223 2.96274 20.2395C3.85936 21.0464 4.99222 21.4066 6.42355 21.5798C7.83014 21.75 9.73935 21.75 12.0522 21.75C14.365 21.75 16.1699 21.75 17.5765 21.5798C19.0078 21.4066 20.1406 21.0464 21.0373 20.2395C21.9452 19.4223 22.3609 18.3725 22.5587 17.0485C22.75 15.7678 22.75 14.1308 22.75 12.0625C22.75 9.99426 22.75 8.23221 22.5587 6.95147C22.3609 5.62747 21.9452 4.57769 21.0373 3.76055C20.1406 2.95359 19.0078 2.59338 17.5765 2.42018ZM13.618 8.07516C13.4319 7.80444 13.0913 7.68636 12.7775 7.78381C12.4638 7.88125 12.25 8.17154 12.25 8.50006V15.5001C12.25 15.9143 12.5858 16.2501 13 16.2501C13.4142 16.2501 13.75 15.9143 13.75 15.5001V10.9148L15.132 12.925C15.2719 13.1285 15.503 13.2501 15.75 13.2501C15.997 13.2501 16.2281 13.1285 16.368 12.925L17.75 10.9148V15.5001C17.75 15.9143 18.0858 16.2501 18.5 16.2501C18.9142 16.2501 19.25 15.9143 19.25 15.5001V8.50006C19.25 8.17154 19.0362 7.88125 18.7225 7.78381C18.4087 7.68636 18.0681 7.80444 17.882 8.07516L15.75 11.1762L13.618 8.07516ZM5.5 7.75006C5.08579 7.75006 4.75 8.08584 4.75 8.50006C4.75 8.91427 5.08579 9.25006 5.5 9.25006H7.25V15.5001C7.25 15.9143 7.58579 16.2501 8 16.2501C8.41421 16.2501 8.75 15.9143 8.75 15.5001V9.25006H10.5C10.9142 9.25006 11.25 8.91427 11.25 8.50006C11.25 8.08584 10.9142 7.75006 10.5 7.75006H5.5Z',
  d4: 'M12.0522 2.25C14.365 2.24999 16.1699 2.24998 17.5765 2.42018C19.0078 2.59338 20.1406 2.95359 21.0373 3.76055C21.9452 4.57769 22.3609 5.62747 22.5587 6.95147C22.75 8.23221 22.75 9.99426 22.75 12.0625C22.75 14.1308 22.75 15.7678 22.5587 17.0485C22.3609 18.3725 21.9452 19.4223 21.0373 20.2395C20.1406 21.0464 19.0078 21.4066 17.5765 21.5798C16.1699 21.75 14.365 21.75 12.0522 21.75C9.73935 21.75 7.83014 21.75 6.42355 21.5798C4.99222 21.4066 3.85936 21.0464 2.96274 20.2395C2.05481 19.4223 1.63907 18.3725 1.44129 17.0485C1.24997 15.7678 1.24998 14.1308 1.25 12.0625C1.24998 9.99422 1.24997 8.23221 1.44129 6.95147C1.63907 5.62747 2.05481 4.57769 2.96274 3.76055C3.85936 2.95359 4.99222 2.59338 6.42355 2.42018C7.83014 2.24998 9.73933 2.24999 12.0522 2.25Z',
  d5: 'M12.7775 7.78381C13.0913 7.68636 13.4319 7.80444 13.618 8.07516L15.75 11.1762L17.882 8.07516C18.0681 7.80444 18.4087 7.68636 18.7225 7.78381C19.0362 7.88125 19.25 8.17153 19.25 8.50006V15.5001C19.25 15.9143 18.9142 16.2501 18.5 16.2501C18.0858 16.2501 17.75 15.9143 17.75 15.5001V10.9148L16.368 12.925C16.2281 13.1285 15.997 13.2501 15.75 13.2501C15.503 13.2501 15.2719 13.1285 15.132 12.925L13.75 10.9148V15.5001C13.75 15.9143 13.4142 16.2501 13 16.2501C12.5858 16.2501 12.25 15.9143 12.25 15.5001V8.50006C12.25 8.17153 12.4638 7.88125 12.7775 7.78381ZM4.75 8.50006C4.75 8.08584 5.08579 7.75006 5.5 7.75006H10.5C10.9142 7.75006 11.25 8.08584 11.25 8.50006C11.25 8.91427 10.9142 9.25006 10.5 9.25006H8.75V15.5001C8.75 15.9143 8.41421 16.2501 8 16.2501C7.58579 16.2501 7.25 15.9143 7.25 15.5001V9.25006H5.5C5.08579 9.25006 4.75 8.91427 4.75 8.50006Z',
  d6: 'M2 3H22V21H2V3Z',
  d7: 'M5 8.5L7.5 8.5M10 8.5L7.5 8.5M12.5 16V8.5H13L15.3503 12.5H15.7356L18 8.5H18.5V16M7.5 8.5V16',
  d8: 'M22 2.25C22.4142 2.25 22.75 2.58579 22.75 3V21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58578 21.75 1.25 21.4142 1.25 21V3C1.25 2.58579 1.58578 2.25 2 2.25H22ZM5 9.25H6.75V16H8.25V9.25H10V7.75H5V9.25ZM13.4292 7.75H11.75V16H13.25V10.406L14.9211 13.25H16.1728L17.75 10.464V16H19.25V7.75H17.5627L15.5344 11.3329L13.4292 7.75Z',
};

export const IconTrademarkStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-stroke-rounded IconTrademarkStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrademarkDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-duotone-rounded IconTrademarkDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconTrademarkTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-twotone-rounded IconTrademarkTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrademarkSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-solid-rounded IconTrademarkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrademarkBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-bulk-rounded IconTrademarkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTrademarkStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-stroke-sharp IconTrademarkStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconTrademarkSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trademark-solid-sharp IconTrademarkSolidSharp"
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

export const iconPackOfTrademark: TheIconSelfPack = {
  name: 'Trademark',
  StrokeRounded: IconTrademarkStrokeRounded,
  DuotoneRounded: IconTrademarkDuotoneRounded,
  TwotoneRounded: IconTrademarkTwotoneRounded,
  SolidRounded: IconTrademarkSolidRounded,
  BulkRounded: IconTrademarkBulkRounded,
  StrokeSharp: IconTrademarkStrokeSharp,
  SolidSharp: IconTrademarkSolidSharp,
};