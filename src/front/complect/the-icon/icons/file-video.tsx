import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5 17.1463L18.563 17.1009C19.6208 16.3371 20.1498 15.9552 20.5749 16.1396C21 16.324 21 16.9353 21 18.1579V18.8421C21 20.0647 21 20.676 20.5749 20.8604C20.1498 21.0448 19.6208 20.6629 18.563 19.8991L18.5 19.8537M14.5 22H15C16.6499 22 17.4749 22 17.9874 21.5515C18.5 21.103 18.5 20.3812 18.5 18.9375V18.0625C18.5 16.6188 18.5 15.897 17.9874 15.4485C17.4749 15 16.6499 15 15 15H14.5C12.8501 15 12.0251 15 11.5126 15.4485C11 15.897 11 16.6188 11 18.0625V18.9375C11 20.3812 11 21.103 11.5126 21.5515C12.0251 22 12.8501 22 14.5 22Z',
  d2: 'M20 12.0142V7.82643C20 6.13079 20 5.28297 19.732 4.60583C19.3012 3.51725 18.3902 2.65858 17.2352 2.25256C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44198C5.81714 3.15252 4.22281 4.65518 3.46894 6.56021C3 7.7452 3 9.22888 3 12.1963V14.7453C3 17.819 3 19.3559 3.8477 20.4232C4.09058 20.729 4.37862 21.0005 4.70307 21.2294C5.46329 21.7658 6.44806 21.9421 8 22',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V16.1735C19.6526 16.3146 19.2054 16.6374 18.5635 17.1009L17.9874 15.4485C17.4749 15 16.6499 15 15 15H14.5C12.8501 15 12.0251 15 11.5126 15.4485C11 15.897 11 16.6188 11 18.0625V18.9375C11 20.3812 11 21.103 11.5126 21.5515C12.0251 22 12.8501 22 14.5 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M6.93654 22.6472C7.91879 22.75 6.48161 22.75 8.02271 22.75C8.56245 22.75 9 22.3124 9 21.7727C9 21.233 8.56245 20.7954 8.02271 20.7954C6.41409 20.7954 8.00785 20.7941 7.1384 20.7032C6.28448 20.6138 5.80055 20.4471 5.44272 20.194C5.20127 20.0233 4.98889 19.8222 4.8111 19.5978C4.55553 19.2753 4.38609 18.8425 4.29386 18.0558C4.19893 17.246 4.19735 16.1887 4.19735 14.6652L4.19727 11.765C4.19725 11.498 4.19742 10.8595 4.47804 10.3873C4.65097 10.0963 4.87239 9.8532 5.09984 9.72938C5.46635 9.52986 5.88654 9.4165 6.33321 9.4165L7.37358 9.45299C7.75367 9.46088 8.19721 9.44887 8.62536 9.33415C9.45933 9.11069 10.1107 8.45928 10.3342 7.62531C10.4489 7.19716 10.4609 6.75362 10.453 6.37353L10.4165 5.33316C10.4165 4.86547 10.5409 4.45834 10.7583 4.07993C10.885 3.85934 11.1057 3.65745 11.4105 3.48014C11.8726 3.21123 12.426 3.20874 12.7642 3.20722C13.1023 3.20569 13.4591 3.20452 13.7572 3.20452C15.5913 3.20452 16.2584 3.21847 16.7618 3.39582C17.6344 3.70328 18.3001 4.34492 18.6102 5.13029C18.6878 5.32693 18.7427 5.58535 18.7721 6.0333C18.8021 6.48997 18.8026 7.07292 18.8026 7.91318V12.0263C18.8026 12.564 19.2386 13 19.7763 13C20.3141 13 20.75 12.564 20.75 12.0263V7.88C20.75 7.08084 20.75 6.43328 20.7153 5.9047C20.6795 5.36007 20.6039 4.8744 20.4206 4.41024C19.8918 3.07093 18.7834 2.03666 17.4068 1.55166C16.548 1.24907 15.0759 1.24946 13.5209 1.25C10.6813 1.24964 8.99465 1.24943 7.61221 1.73651C5.39221 2.51869 3.61848 4.18143 2.77509 6.31749C2.49397 7.02945 2.36944 7.79416 2.30919 8.711C2.25 9.61171 2.25 10.7243 2.25 12.1426V12.1426V14.7261C2.24998 16.1742 2.24996 17.3469 2.35985 18.2842C2.47396 19.2576 2.71721 20.0955 3.28704 20.8145C3.58222 21.187 3.93077 21.5158 4.32114 21.7919C5.0659 22.3185 5.92712 22.5416 6.93654 22.6472Z',
  d6: 'M17.0079 14.3112C16.4873 14.25 15.8317 14.25 15.0457 14.25H14.4543C13.6683 14.25 13.0127 14.25 12.4922 14.3112C11.9491 14.3751 11.4394 14.5159 11.0187 14.8841C10.5836 15.2648 10.4027 15.7484 10.3228 16.2684C10.2499 16.7427 10.25 17.3329 10.25 18.0077V18.9923C10.25 19.6672 10.2499 20.2573 10.3228 20.7316C10.4027 21.2516 10.5836 21.7352 11.0187 22.1159C11.4394 22.4841 11.9491 22.6249 12.4922 22.6888C13.0127 22.75 13.6683 22.75 14.4543 22.75H15.0457C15.8317 22.75 16.4873 22.75 17.0079 22.6888C17.5509 22.6249 18.0606 22.4841 18.4813 22.1159C18.7899 21.846 18.9706 21.5243 19.0781 21.1746C19.211 21.2601 19.3369 21.3356 19.4557 21.3984C19.8266 21.5944 20.3357 21.7817 20.8733 21.5485C21.4417 21.3019 21.6202 20.775 21.6873 20.3603C21.7502 19.9711 21.7501 19.4615 21.75 18.9018V18.0982C21.7501 17.5385 21.7502 17.0289 21.6873 16.6397C21.6202 16.225 21.4417 15.6981 20.8733 15.4515C20.3357 15.2183 19.8266 15.4056 19.4557 15.6016C19.3369 15.6644 19.211 15.7399 19.0781 15.8254C18.9706 15.4757 18.7899 15.154 18.4813 14.8841C18.0606 14.5159 17.5509 14.3751 17.0079 14.3112ZM20.2099 20.0995C19.9912 19.9839 19.6585 19.7633 19.249 19.4692C19.2501 19.3156 19.25 19.1566 19.25 18.9925V18.0078C19.25 17.8438 19.2501 17.6847 19.249 17.5311C19.6585 17.2371 19.9912 17.0165 20.2099 16.9009C20.2478 17.1554 20.25 17.5364 20.25 18.1581V18.8423C20.25 19.4639 20.2478 19.8449 20.2099 20.0995Z',
  d7: 'M18 20L21 21V16L18 17M11 15H18V22H11V15Z',
  d8: 'M7.98248 21.99L3.01 22C3.00448 22 3 21.9955 3 21.99V9L10 2H19.99C19.9955 2 20 2.00448 20 2.01V12.042M10 2.53203V9H3.55108',
  d9: 'M18.75 15.75H11.75V22.75H18.75V15.75Z',
  d10: 'M21.75 16.75V21.75L19.8606 20.7428V17.7657L21.75 16.75Z',
  d11: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H9.01306V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V13H20.75V2.22727Z',
};

export const IconFileVideoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-stroke-rounded IconFileVideoStrokeRounded"
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

export const IconFileVideoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-duotone-rounded IconFileVideoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileVideoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-twotone-rounded IconFileVideoTwotoneRounded"
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

export const IconFileVideoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-solid-rounded IconFileVideoSolidRounded"
    >
      <path 
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

export const IconFileVideoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-bulk-rounded IconFileVideoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileVideoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-stroke-sharp IconFileVideoStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileVideoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-video-solid-sharp IconFileVideoSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileVideo: TheIconSelfPack = {
  name: 'FileVideo',
  StrokeRounded: IconFileVideoStrokeRounded,
  DuotoneRounded: IconFileVideoDuotoneRounded,
  TwotoneRounded: IconFileVideoTwotoneRounded,
  SolidRounded: IconFileVideoSolidRounded,
  BulkRounded: IconFileVideoBulkRounded,
  StrokeSharp: IconFileVideoStrokeSharp,
  SolidSharp: IconFileVideoSolidSharp,
};