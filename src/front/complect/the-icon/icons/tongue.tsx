import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.651 12C20.8221 10.8862 21.575 9.47282 21.9097 8.75609C21.9772 8.61153 22 8.45289 22 8.29412M4.34904 12C3.17787 10.8862 2.42496 9.47282 2.09032 8.75609C2.02282 8.61153 2 8.45289 2 8.29412M22 8.29412L19 8.29412M22 8.29412C22 8.13586 21.9775 7.97737 21.9102 7.83323C21.3088 6.54493 19.3535 3 16.0442 3C15.0038 3 14.1347 3.53814 13.4722 4.17142C12.9083 4.71045 12.6262 4.98002 12.564 5.0238C12.0334 5.39734 11.9666 5.39734 11.436 5.0238C11.3738 4.98002 11.0917 4.71045 10.5278 4.17142C9.86525 3.53814 8.99617 3 7.9558 3C4.64648 3 2.69115 6.54493 2.08981 7.83323C2.02253 7.97737 2 8.13586 2 8.29412M2 8.29412H5',
  d2: 'M12 9L12.2702 8.72635C12.7293 8.26127 13.352 8 14.0014 8C15.1414 8 16.1306 8.79706 16.387 9.92227L17.3568 14.1793C18.1518 17.6686 15.5354 21 12 21C8.46456 21 5.84819 17.6686 6.64316 14.1793L7.61303 9.92227C7.86938 8.79706 8.85856 8 9.99863 8C10.648 8 11.2707 8.26127 11.7298 8.72635L12 9ZM12 9V12',
  d3: 'M17.3568 14.1793L16.387 9.92227C16.1306 8.79706 15.1414 8 14.0014 8C13.352 8 12.7293 8.26127 12.2702 8.72635L12 9L11.7298 8.72635C11.2707 8.26127 10.648 8 9.99863 8C8.85856 8 7.86938 8.79706 7.61303 9.92227L6.64316 14.1793C5.84819 17.6686 8.46456 21 12 21C15.5354 21 18.1518 17.6686 17.3568 14.1793Z',
  d4: 'M3.69675 7.30348L5.15909 7.30348C5.69882 7.30348 6.13636 7.73084 6.13636 8.25802C6.13636 8.7852 5.69882 9.21257 5.15909 9.21257H3.69678C4.05851 9.81182 4.56052 10.5131 5.19641 11.1038C5.58751 11.4671 5.60303 12.0713 5.23107 12.4533C4.85911 12.8353 4.24053 12.8504 3.84943 12.4871C2.57501 11.3033 1.77723 9.82915 1.43003 9.10282C1.28397 8.79727 1.25 8.49521 1.25 8.25804C1.25 8.02262 1.28329 7.72028 1.42949 7.41435C1.74355 6.75715 2.4196 5.50261 3.4746 4.39878C4.52815 3.29647 6.05462 2.25 8.04772 2.25C9.41663 2.25 10.496 2.94134 11.2365 3.63269C11.5133 3.89107 11.7169 4.08121 11.8592 4.21223C11.9194 4.26765 11.9656 4.30971 12 4.34044C12.0344 4.30971 12.0806 4.26765 12.1408 4.21223C12.2831 4.08121 12.4867 3.89107 12.7635 3.63269C13.504 2.94134 14.5834 2.25 15.9523 2.25C17.9454 2.25 19.4719 3.29647 20.5254 4.39878C21.5804 5.50261 22.2564 6.75715 22.5705 7.41435C22.7167 7.7203 22.75 8.02264 22.75 8.25804C22.75 8.49521 22.716 8.79728 22.57 9.10283C22.2228 9.82917 21.425 11.3033 20.1506 12.4871C19.7595 12.8504 19.1409 12.8353 18.7689 12.4533C18.397 12.0713 18.4125 11.4671 18.8036 11.1038C19.4395 10.5131 19.9415 9.81182 20.3032 9.21257L18.8409 9.21257C18.3012 9.21257 17.8636 8.7852 17.8636 8.25802C17.8636 7.73084 18.3012 7.30348 18.8409 7.30348L20.3032 7.30348C19.9996 6.80049 19.5963 6.22431 19.0967 5.70154C18.2393 4.80452 17.1933 4.15909 15.9523 4.15909C15.2878 4.15909 14.6685 4.49511 14.114 5.01275L14.1108 5.01571C13.838 5.27041 13.6294 5.46521 13.4815 5.6014L13.4675 5.61424C13.3564 5.7166 13.213 5.84864 13.1138 5.91689C12.9893 6.00248 12.8385 6.10481 12.6864 6.18256C12.5228 6.26623 12.2896 6.35832 12 6.35832C11.7104 6.35832 11.4772 6.26623 11.3136 6.18256C11.1615 6.10481 11.0107 6.00248 10.8862 5.91689C10.787 5.84864 10.6436 5.7166 10.5325 5.61424L10.5185 5.6014C10.3706 5.46519 10.1619 5.27034 9.88903 5.01558L9.886 5.01275C9.33154 4.49511 8.71225 4.15909 8.04772 4.15909C6.8067 4.15909 5.76068 4.80452 4.90333 5.70154C4.40369 6.22431 4.00037 6.80049 3.69675 7.30348Z',
  d5: 'M13.378 7.31193C12.986 7.3906 12.75 7.76662 12.75 8.1664V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V8.16639C11.25 7.76661 11.014 7.39058 10.622 7.31192C10.4183 7.27104 10.2096 7.25 9.99865 7.25C8.50236 7.25 7.21451 8.29526 6.88179 9.75567L5.91193 14.0127C5.01273 17.9595 7.97092 21.75 12 21.75C16.0291 21.75 18.9873 17.9595 18.0881 14.0127L17.1183 9.75567C16.7855 8.29526 15.4977 7.25 14.0014 7.25C13.7904 7.25 13.5817 7.27104 13.378 7.31193Z',
  d6: 'M19.7193 12C20.9011 10.7587 21.6613 9.18491 21.999 8.38617C21.3922 6.95049 19.4191 3 16.0798 3C15.03 3 14.1531 3.5997 13.4845 4.30544C12.9155 4.90614 11.999 5.78601 11.999 5.78601C11.999 5.78601 11.0825 4.90614 10.5134 4.30544C9.84489 3.5997 8.96793 3 7.91814 3C4.57882 3 2.60679 6.94928 2 8.38497C2.33768 9.1837 3.0969 10.7587 4.27868 12M18.998 8.38617H21.5392M4.99805 8.38497H2.50754',
  d7: 'M11.999 9L12.2692 8.72635C12.7283 8.26127 13.3511 8 14.0004 8C15.1405 8 16.1296 8.79706 16.386 9.92227L17.3559 14.1793C18.1508 17.6686 15.5345 21 11.999 21C8.46358 21 5.84721 17.6686 6.64219 14.1793L7.61205 9.92227C7.86841 8.79706 8.85759 8 9.99765 8C10.647 8 11.2697 8.26127 11.7289 8.72635L11.999 9ZM11.999 9V12',
  d8: 'M3.86141 9.30194C4.21012 9.90595 4.66266 10.5694 5.21498 11.1406L3.81027 12.4575C2.54392 11.1478 1.753 9.51864 1.40962 8.71887L1.25 8.34709L1.40958 7.97529C1.72031 7.25137 2.39067 5.86557 3.43811 4.64542C4.47752 3.43461 6.01095 2.25 8.04204 2.25C9.44582 2.25 10.5341 3.03722 11.2629 3.79476C11.4775 4.01784 11.7495 4.28722 11.9995 4.53086C12.2495 4.28722 12.5215 4.01784 12.7361 3.79476C13.4649 3.03722 14.5532 2.25 15.957 2.25C17.9881 2.25 19.5218 3.43498 20.5614 4.646C21.6091 5.86641 22.2797 7.25246 22.5904 7.97644L22.75 8.34824L22.5904 8.72003C22.2467 9.52055 21.4548 11.1481 20.1887 12.4575L18.784 11.1406C19.3362 10.5695 19.789 9.90658 20.1379 9.3031H18.304V7.39329H20.1386C19.8546 6.90147 19.5011 6.36925 19.0802 5.87889C18.2064 4.861 17.1642 4.15981 15.957 4.15981C15.3246 4.15981 14.712 4.51791 14.1442 5.10818C13.8558 5.40794 13.4854 5.77121 13.1926 6.05457C13.045 6.19734 12.0927 7.10011 11.9995 7.18902C11.9063 7.10011 10.954 6.19734 10.8064 6.05457C10.5136 5.77121 10.1432 5.40794 9.85486 5.10818C9.28698 4.51791 8.67438 4.15981 8.04204 4.15981C6.83479 4.15981 5.79284 4.86079 4.91935 5.87831C4.49858 6.36846 4.14528 6.90047 3.86138 7.39213H5.69702V9.30194H3.86141Z',
  d9: 'M9.9342 8.25C8.44661 8.25 7.16505 9.28313 6.82324 10.7302L5.85993 13.9652C5.85526 13.9809 5.85111 13.9967 5.84747 14.0127C4.94828 17.9595 7.90647 21.75 11.9356 21.75C15.9647 21.75 18.9229 17.9595 18.0237 14.0127C18.02 13.9967 18.0159 13.9809 18.0112 13.9652L17.0479 10.7302C16.7061 9.28313 15.4245 8.25 13.9369 8.25C13.5023 8.25 13.0772 8.33932 12.6855 8.50749V15H11.1855V8.50747C10.7939 8.33931 10.3688 8.25 9.9342 8.25Z',
};

export const IconTongueStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-stroke-rounded IconTongueStrokeRounded"
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

export const IconTongueDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-duotone-rounded IconTongueDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconTongueTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-twotone-rounded IconTongueTwotoneRounded"
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

export const IconTongueSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-solid-rounded IconTongueSolidRounded"
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

export const IconTongueBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-bulk-rounded IconTongueBulkRounded"
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

export const IconTongueStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-stroke-sharp IconTongueStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTongueSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tongue-solid-sharp IconTongueSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTongue: TheIconSelfPack = {
  name: 'Tongue',
  StrokeRounded: IconTongueStrokeRounded,
  DuotoneRounded: IconTongueDuotoneRounded,
  TwotoneRounded: IconTongueTwotoneRounded,
  SolidRounded: IconTongueSolidRounded,
  BulkRounded: IconTongueBulkRounded,
  StrokeSharp: IconTongueStrokeSharp,
  SolidSharp: IconTongueSolidSharp,
};