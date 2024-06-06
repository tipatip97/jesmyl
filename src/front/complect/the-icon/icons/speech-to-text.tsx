import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 17H10',
  d2: 'M8 4V8M5 2V10M2 5L2 7M11 5V7',
  d3: 'M4.00006 13C4.00172 17.1517 4.04756 19.2749 5.31802 20.6124C6.63604 22 8.75736 22 13 22H13.45C17.2568 22 19.1601 22 20.4225 20.8649C20.6018 20.7038 20.7687 20.528 20.9218 20.3393C22 19.0103 22 17.0065 22 12.9989C22 8.99125 22 6.98744 20.9218 5.65845C20.7687 5.46974 20.6018 5.29398 20.4225 5.1328C19.3191 4.14066 17.7259 4.01573 14.8 4H14',
  d4: 'M5.27577 5.27577C4.3935 6.15803 4.09859 7.39826 4 9.38747V16.6125C4.09859 18.6017 4.39351 19.842 5.27577 20.7242C6.15803 21.6065 7.39826 21.9014 9.38746 22H16.6125C18.6017 21.9014 19.842 21.6065 20.7242 20.7242C21.6065 19.842 21.9014 18.6017 22 16.6125V9.38747C21.9014 7.39826 21.6065 6.15803 20.7242 5.27577C19.842 4.39351 18.6017 4.09859 16.6125 4H9.38747C7.39826 4.09859 6.15803 4.39351 5.27577 5.27577Z',
  d5: 'M17 17C17 16.4477 16.5523 16 16 16H10C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18H16C16.5523 18 17 17.5523 17 17Z',
  d6: 'M5.25 1.25C5.80228 1.25 6.25 1.69772 6.25 2.25V10.25C6.25 10.8023 5.80228 11.25 5.25 11.25C4.69772 11.25 4.25 10.8023 4.25 10.25V2.25C4.25 1.69772 4.69772 1.25 5.25 1.25ZM8.25 3.25C8.80228 3.25 9.25 3.69772 9.25 4.25V8.25C9.25 8.80228 8.80228 9.25 8.25 9.25C7.69772 9.25 7.25 8.80228 7.25 8.25V4.25C7.25 3.69772 7.69772 3.25 8.25 3.25ZM2.25 4.25C2.80228 4.25 3.25 4.69772 3.25 5.25V7.25C3.25 7.80228 2.80228 8.25 2.25 8.25C1.69772 8.25 1.25 7.80228 1.25 7.25L1.25 5.25C1.25 4.69772 1.69772 4.25 2.25 4.25ZM11.25 4.25C11.8023 4.25 12.25 4.69772 12.25 5.25V7.25C12.25 7.80228 11.8023 8.25 11.25 8.25C10.6977 8.25 10.25 7.80228 10.25 7.25V5.25C10.25 4.69772 10.6977 4.25 11.25 4.25Z',
  d7: 'M14.755 3.25C14.2165 3.25 13.78 3.68652 13.78 4.225C13.78 4.76348 14.2165 5.2 14.755 5.2H14.7524C16.184 5.20773 17.2074 5.24349 17.9949 5.38076C18.7574 5.51367 19.2244 5.7302 19.5851 6.0545C19.7216 6.17726 19.8492 6.31155 19.9666 6.45626C20.3265 6.89986 20.5538 7.50185 20.675 8.55283C20.7985 9.62275 20.8 11.0218 20.8 12.9989C20.8 14.976 20.7985 16.375 20.675 17.445C20.5538 18.4959 20.3265 19.0979 19.9666 19.5415C19.8492 19.6862 19.7216 19.8205 19.5851 19.9433C19.1743 20.3126 18.6232 20.5444 17.6445 20.6695C16.6389 20.7981 15.3204 20.8 13.4387 20.8H13C10.9027 20.8 9.43297 20.7977 8.32236 20.6405C7.24515 20.488 6.65056 20.2071 6.21699 19.7506C5.79237 19.3036 5.52074 18.6863 5.36923 17.6047C5.21438 16.4994 5.20087 15.5195 5.20006 13.4746C5.19985 12.9361 4.76315 12.4998 4.22467 12.5C3.68619 12.5002 3.24985 12.9369 3.25006 13.4754C3.25086 15.4785 3.2605 16.6076 3.43809 17.8753C3.619 19.1668 3.98907 20.2366 4.80315 21.0936C5.65464 21.99 6.73673 22.3855 8.04908 22.5713C9.31219 22.75 10.9203 22.75 12.9245 22.75H13.5062C15.3047 22.75 16.7482 22.75 17.8918 22.6038C19.0766 22.4523 20.0688 22.1307 20.8889 21.3933C21.1019 21.2018 21.2998 20.9934 21.4809 20.7701C22.1723 19.9179 22.4706 18.8952 22.6122 17.6685C22.75 16.4737 22.75 14.962 22.75 13.0609V12.9369C22.75 11.0358 22.75 9.52409 22.6122 8.32931C22.4706 7.10263 22.1723 6.07988 21.4809 5.22772C21.2998 5.00443 21.1019 4.79599 20.8889 4.60446C20.1737 3.96142 19.3261 3.63338 18.3298 3.45972C17.359 3.29051 16.18 3.25765 14.7602 3.25001L14.755 3.25Z',
  d8: 'M16 16.9912H10',
  d9: 'M8 3.99883V9.99532M5 2V11.9941M2 4.99824V8.9959M11 4.99824V8.9959',
  d10: 'M14.0039 7.00098H21.9C21.9552 7.00098 22 7.04572 22 7.10092V21.9001C22 21.9553 21.9552 22 21.9 22H4.1C4.04477 22 4 21.9553 4 21.9001V13.993',
  d11: 'M9.5 17H15.5V15H9.5V17Z',
  d12: 'M4.5 12V2H6.5V12H4.5ZM7.5 10V4H9.5V10H7.5ZM1.5 9V5H3.5V9H1.5ZM10.5 9V5H12.5V9H10.5Z',
  d13: 'M14.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6V21C22.5 21.5523 22.0523 22 21.5 22H3.5C2.94772 22 2.5 21.5523 2.5 21V14H4.5V20H20.5V7H14.5V5Z',
};

export const IconSpeechToTextStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-stroke-rounded IconSpeechToTextStrokeRounded"
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

export const IconSpeechToTextDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-duotone-rounded IconSpeechToTextDuotoneRounded"
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

export const IconSpeechToTextTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-twotone-rounded IconSpeechToTextTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSpeechToTextSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-solid-rounded IconSpeechToTextSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeechToTextBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-bulk-rounded IconSpeechToTextBulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeechToTextStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-stroke-sharp IconSpeechToTextStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeechToTextSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="speech-to-text-solid-sharp IconSpeechToTextSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpeechToText: TheIconSelfPack = {
  name: 'SpeechToText',
  StrokeRounded: IconSpeechToTextStrokeRounded,
  DuotoneRounded: IconSpeechToTextDuotoneRounded,
  TwotoneRounded: IconSpeechToTextTwotoneRounded,
  SolidRounded: IconSpeechToTextSolidRounded,
  BulkRounded: IconSpeechToTextBulkRounded,
  StrokeSharp: IconSpeechToTextStrokeSharp,
  SolidSharp: IconSpeechToTextSolidSharp,
};