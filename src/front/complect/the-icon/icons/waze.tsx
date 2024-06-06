import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 9V9.01',
  d2: 'M10.5 9V9.01',
  d3: 'M10.5 13C10.5 13 11.5 15 14 15C16.5 15 17.5 13 17.5 13',
  d4: 'M11 20C11 21.1046 10.1046 22 9 22C7.89543 22 7 21.1046 7 20C7 18.8954 7.89543 18 9 18C10.1046 18 11 18.8954 11 20Z',
  d5: 'M10.9992 19.9446C11.6843 19.9866 12.3573 20 13 20C17.9706 20 22 15.9706 22 11C22 6.02944 17.9706 2 13 2C8.02944 2 4 6.02944 4 11C4 12.039 4 14 2 15C3.05768 17.3798 4.97354 18.6409 7.12557 19.3009',
  d6: 'M17 22.0003C18.1046 22.0003 19 21.1049 19 20.0003C19 19.3295 18.6698 18.7359 18.163 18.373C17.2278 19.0291 16.1621 19.5118 15.0126 19.7744C15.0043 19.8486 15 19.9239 15 20.0003C15 21.1049 15.8954 22.0003 17 22.0003Z',
  d7: 'M7.12557 19.3009C7.40906 18.5411 8.14134 18 9 18C10.0861 18 10.9699 18.8657 10.9992 19.9446C11.6843 19.9866 12.3573 20 13 20C17.9706 20 22 15.9706 22 11C22 6.02944 17.9706 2 13 2C8.02944 2 4 6.02944 4 11C4 12.039 4 14 2 15C3.05768 17.3798 4.97354 18.6409 7.12557 19.3009Z',
  d8: 'M17.5 8C18.0523 8 18.5 8.44772 18.5 9V9.01C18.5 9.56228 18.0523 10.01 17.5 10.01C16.9477 10.01 16.5 9.56228 16.5 9.01V9C16.5 8.44772 16.9477 8 17.5 8Z',
  d9: 'M10.5 8C11.0523 8 11.5 8.44772 11.5 9V9.01C11.5 9.56228 11.0523 10.01 10.5 10.01C9.94772 10.01 9.5 9.56228 9.5 9.01V9C9.5 8.44772 9.94772 8 10.5 8Z',
  d10: 'M10.1646 12.3293C10.5336 12.1449 10.9819 12.293 11.1685 12.6601C11.2753 12.8109 11.5803 13.2347 11.8108 13.4396C12.2655 13.8437 12.9696 14.2502 14 14.2502C15.0304 14.2502 15.7346 13.8437 16.1893 13.4396C16.4198 13.2347 16.6637 12.9902 16.8315 12.6601C17.0182 12.293 17.4665 12.1449 17.8355 12.3293C18.2059 12.5146 18.3561 12.9651 18.1709 13.3356C17.8889 13.8996 17.5178 14.2656 17.1858 14.5607C16.5155 15.1566 15.4696 15.7502 14 15.7502C12.5304 15.7502 11.4846 15.1566 10.8143 14.5607C10.4823 14.2656 10.1646 13.9297 9.82922 13.3356C9.64398 12.9651 9.79415 12.5146 10.1646 12.3293Z',
  d11: 'M6.25 20C6.25 18.4812 7.48122 17.25 9 17.25C10.5188 17.25 11.75 18.4812 11.75 20C11.75 21.5188 10.5188 22.75 9 22.75C7.48122 22.75 6.25 21.5188 6.25 20Z',
  d12: 'M13 2.75C8.44368 2.75 4.75003 6.44365 4.75003 11C4.75003 11.0135 4.75004 11.0272 4.75004 11.0411C4.75046 11.9693 4.75137 14.0062 2.97938 15.2832C3.96274 17.0391 5.53127 18.0275 7.34552 18.5839L6.90568 20.018C4.60918 19.3136 2.48416 17.936 1.31467 15.3046C1.15182 14.9382 1.30598 14.5085 1.66462 14.3292C3.21571 13.5536 3.25003 12.0728 3.25003 11C3.25003 5.61522 7.61525 1.25 13 1.25C18.3848 1.25 22.75 5.61522 22.75 11C22.75 16.3848 18.3848 20.75 13 20.75C12.3474 20.75 11.6582 20.7364 10.9534 20.6932L11.0452 19.196C11.7104 19.2368 12.3674 19.25 13 19.25C17.5564 19.25 21.25 15.5563 21.25 11C21.25 6.44365 17.5564 2.75 13 2.75Z',
  d13: 'M18.1673 17.4531L18.5995 17.7626C19.2945 18.2602 19.7499 19.0767 19.7499 19.9997C19.7499 21.5184 18.5187 22.7497 16.9999 22.7497C15.4811 22.7497 14.2499 21.5184 14.2499 19.9997C14.2499 19.8952 14.2557 19.7919 14.2672 19.69L14.3266 19.1611L14.8455 19.0426C15.8983 18.8021 16.8747 18.36 17.7321 17.7584L18.1673 17.4531Z',
  d14: 'M17.7909 17.7178C16.9048 18.3508 15.8881 18.8129 14.7892 19.0559L14.8457 19.043C15.8985 18.8025 16.875 18.3603 17.7324 17.7588L17.7909 17.7178Z',
  d15: 'M14.33 20.6604C14.6257 21.8603 15.709 22.75 17.0001 22.75C18.5189 22.75 19.7501 21.5188 19.7501 20C19.7501 19.4293 19.576 18.8992 19.2787 18.4601C17.9024 19.6197 16.2006 20.4054 14.33 20.6604Z',
  d16: 'M18.5 8.09082V10.0551H16.5V8.09082H18.5Z',
  d17: 'M11.5 8.09082V10.0551H9.5V8.09082H11.5Z',
  d18: 'M10.6478 14.684C10.2988 14.3809 10.0464 14.0776 9.87891 13.8466L11.511 12.7168C11.6091 12.8522 11.7629 13.0376 11.9765 13.2231C12.3952 13.5869 13.0424 13.9536 13.9996 13.9536C14.9568 13.9536 15.604 13.5869 16.0228 13.2231C16.2363 13.0376 16.3901 12.8522 16.4883 12.7168L18.1203 13.8466C17.9528 14.0776 17.7004 14.3809 17.3515 14.684C16.6452 15.2975 15.5424 15.9081 13.9996 15.9081C12.4568 15.9081 11.354 15.2975 10.6478 14.684Z',
  d19: 'M5.99988 19.8176C5.99988 18.1984 7.34302 16.8857 8.99988 16.8857C10.6567 16.8857 11.9999 18.1984 11.9999 19.8176C11.9999 21.4368 10.6567 22.7494 8.99988 22.7494C7.34302 22.7494 5.99988 21.4368 5.99988 19.8176Z',
  d20: 'M13.1096 3.20455C8.85016 3.20455 5.39722 6.70486 5.39722 11.0227L5.39725 11.0723C5.39789 11.9495 5.39936 13.9478 3.7649 15.2727C4.6801 16.807 6.08715 17.6902 7.72905 18.2007L7.16368 20.0693C4.90333 19.3665 2.78751 17.9822 1.62414 15.3287L1.25 14.4754L2.07396 14.0577C3.42503 13.3729 3.46914 12.0822 3.46914 11.0227C3.46914 5.6254 7.78531 1.25 13.1096 1.25C18.4338 1.25 22.75 5.6254 22.75 11.0227C22.75 16.4201 18.4338 20.7955 13.1096 20.7955C12.4772 20.7955 11.8076 20.7821 11.1218 20.7395L11.2398 18.7886C11.8747 18.8281 12.5029 18.8409 13.1096 18.8409C17.369 18.8409 20.8219 15.3406 20.8219 11.0227C20.8219 6.70486 17.369 3.20455 13.1096 3.20455Z',
  d21: 'M18.1688 17.0303L18.745 17.4335C19.5028 17.9637 19.9999 18.8343 19.9999 19.8184C19.9999 21.4376 18.6567 22.7502 16.9999 22.7502C15.343 22.7502 13.9999 21.4376 13.9999 19.8184C13.9999 19.7072 14.0063 19.5971 14.0188 19.4885L14.098 18.7993L14.7898 18.6449C15.8104 18.4171 16.7571 17.9982 17.5886 17.4281L18.1688 17.0303Z',
};

export const IconWazeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-stroke-rounded IconWazeStrokeRounded"
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
      />
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

export const IconWazeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-duotone-rounded IconWazeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
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

export const IconWazeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-twotone-rounded IconWazeTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
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
      />
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

export const IconWazeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-solid-rounded IconWazeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWazeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-bulk-rounded IconWazeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWazeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-stroke-sharp IconWazeStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconWazeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waze-solid-sharp IconWazeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWaze: TheIconSelfPack = {
  name: 'Waze',
  StrokeRounded: IconWazeStrokeRounded,
  DuotoneRounded: IconWazeDuotoneRounded,
  TwotoneRounded: IconWazeTwotoneRounded,
  SolidRounded: IconWazeSolidRounded,
  BulkRounded: IconWazeBulkRounded,
  StrokeSharp: IconWazeStrokeSharp,
  SolidSharp: IconWazeSolidSharp,
};