import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 17L4 17',
  d2: 'M17 14C17 14 20 16.2095 20 17C20 17.7906 17 20 17 20',
  d3: 'M5 7L20 7',
  d4: 'M6.99998 4C6.99998 4 4.00001 6.20947 4 7.00002C3.99999 7.79058 7 10 7 10',
  d5: 'M20 16.9999H4M20 16.9999C20 16.2093 17 14 17 14M20 16.9999C20 17.7904 17 20 17 20',
  d6: 'M19.9999 7.75001C20.5522 7.75001 20.9999 7.30229 20.9999 6.75001C20.9999 6.19772 20.5522 5.75001 19.9999 5.75001L7.99999 5.75001L8 4.56829L8.00003 4.53443L8.00003 4.53442C8.00025 4.39798 8.00056 4.19919 7.9746 4.02998C7.94624 3.84511 7.83812 3.36011 7.32267 3.11374C6.81104 2.86919 6.36183 3.08093 6.19364 3.17545C6.04314 3.26004 5.88606 3.38325 5.77954 3.46679L5.75295 3.48764C5.3042 3.83845 4.67868 4.34774 4.15775 4.85106C3.89942 5.10066 3.64263 5.3718 3.44332 5.63789C3.34356 5.77107 3.24258 5.92353 3.16319 6.08808C3.08862 6.24265 3 6.47491 3 6.74999C3 7.02506 3.08862 7.25731 3.16319 7.41188C3.24258 7.57642 3.34356 7.72888 3.44332 7.86206C3.64263 8.12815 3.89941 8.3993 4.15774 8.6489C4.67866 9.15222 5.30417 9.66152 5.75291 10.0123L5.77951 10.0332L5.77952 10.0332C5.88603 10.1167 6.04311 10.24 6.19361 10.3245C6.36179 10.4191 6.811 10.6308 7.32264 10.3863C7.83809 10.1399 7.94621 9.65489 7.97458 9.47002C8.00054 9.30081 8.00023 9.10202 8.00002 8.96557L7.99998 8.93172L7.99998 7.75001L19.9999 7.75001Z',
  d7: 'M4.00006 18.25C3.44778 18.25 3.00006 17.8023 3.00006 17.25C3.00006 16.6977 3.44778 16.25 4.00006 16.25L16 16.25L16 15.0683L16 15.0344L16 15.0344C15.9998 14.898 15.9994 14.6992 16.0254 14.53C16.0538 14.3451 16.1619 13.8601 16.6773 13.6137C17.189 13.3692 17.6382 13.5809 17.8064 13.6755C17.9569 13.76 18.1139 13.8832 18.2205 13.9668L18.2471 13.9876C18.6958 14.3385 19.3213 14.8477 19.8422 15.3511C20.1006 15.6007 20.3574 15.8718 20.5567 16.1379C20.6564 16.2711 20.7574 16.4235 20.8368 16.5881C20.9114 16.7426 21 16.9749 21 17.25C21 17.5251 20.9114 17.7573 20.8368 17.9119C20.7574 18.0764 20.6564 18.2289 20.5567 18.3621C20.3574 18.6282 20.1006 18.8993 19.8423 19.1489C19.3213 19.6522 18.6958 20.1615 18.2471 20.5123L18.2205 20.5332L18.2205 20.5332C18.114 20.6167 17.9569 20.74 17.8064 20.8245C17.6382 20.9191 17.189 21.1308 16.6774 20.8863C16.1619 20.6399 16.0538 20.1549 16.0254 19.97C15.9995 19.8008 15.9998 19.602 16 19.4656L16 19.4317L16 18.25L4.00006 18.25Z',
  d8: 'M20 7.75C20.5522 7.75 21 7.30228 21 6.75C21 6.19771 20.5522 5.75 20 5.75L8.00001 5.75L8 7.75L20 7.75Z',
  d9: 'M3.16319 6.08808C3.08862 6.24265 3 6.47491 3 6.74999C3 7.02506 3.08862 7.25731 3.16319 7.41188C3.24258 7.57642 3.34356 7.72888 3.44332 7.86206C3.64263 8.12815 3.89941 8.3993 4.15774 8.6489C4.67866 9.15222 5.30417 9.66152 5.75291 10.0123L5.77951 10.0332L5.77952 10.0332C5.88603 10.1167 6.04311 10.24 6.19361 10.3245C6.36179 10.4191 6.811 10.6308 7.32264 10.3863C7.83809 10.1399 7.94621 9.65489 7.97458 9.47002C8.00054 9.30081 8.00023 9.10202 8.00002 8.96557L7.99998 8.93172L7.99998 7.75001L8 4.56829L8.00003 4.53443L8.00003 4.53442C8.00025 4.39798 8.00056 4.19919 7.9746 4.02998C7.94624 3.84511 7.83812 3.36011 7.32267 3.11374C6.81104 2.86919 6.36183 3.08093 6.19364 3.17545C6.04314 3.26004 5.88606 3.38325 5.77954 3.46679L5.75295 3.48764C5.3042 3.83845 4.67868 4.34774 4.15775 4.85106C3.89942 5.10066 3.64263 5.3718 3.44332 5.63789C3.34356 5.77107 3.24258 5.92353 3.16319 6.08808Z',
  d10: 'M4.00005 18.25C3.44776 18.25 3.00005 17.8023 3.00005 17.25C3.00005 16.6977 3.44776 16.25 4.00005 16.25L16 16.25L16 18.25L4.00005 18.25Z',
  d11: 'M20.8368 16.5881C20.9114 16.7426 21 16.9749 21 17.25C21 17.5251 20.9114 17.7573 20.8368 17.9119C20.7574 18.0764 20.6564 18.2289 20.5567 18.3621C20.3574 18.6282 20.1006 18.8993 19.8423 19.1489C19.3213 19.6522 18.6958 20.1615 18.2471 20.5123L18.2205 20.5332L18.2205 20.5332C18.114 20.6167 17.9569 20.74 17.8064 20.8245C17.6382 20.9191 17.189 21.1308 16.6774 20.8863C16.1619 20.6399 16.0538 20.1549 16.0254 19.97C15.9995 19.8008 15.9998 19.602 16 19.4656L16 19.4317L16 18.25L16 15.0683L16 15.0344L16 15.0344C15.9998 14.898 15.9994 14.6992 16.0254 14.53C16.0538 14.3451 16.1619 13.8601 16.6773 13.6137C17.189 13.3692 17.6382 13.5809 17.8064 13.6755C17.9569 13.76 18.1139 13.8832 18.2205 13.9668L18.2471 13.9876C18.6958 14.3385 19.3213 14.8477 19.8422 15.3511C20.1006 15.6007 20.3574 15.8718 20.5567 16.1379C20.6564 16.2711 20.7574 16.4235 20.8368 16.5881Z',
  d12: 'M4 17.0002L19.5572 17.0001M16 21.0002L20.0001 17.0001L16 13',
  d13: 'M19.9999 6.99983L4.42907 6.99977M7.99994 3L4 6.99977L8.00015 11',
  d14: 'M20 5.99978L6.82842 6L9.41421 3.41421L8 2L3 7L8 12.0002L9.41423 10.586L6.82838 8L20 7.99978V5.99978Z',
  d15: 'M21 17.0006L15.9999 12.0005L14.5857 13.4147L17.1716 16.0006L4.00001 16.0005L4 18.0005L17.1715 18.0006L14.5858 20.5862L15.9999 22.0004L21 17.0006Z',
};

export const IconArrowLeftRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-stroke-rounded IconArrowLeftRightStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeftRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-duotone-rounded IconArrowLeftRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconArrowLeftRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-twotone-rounded IconArrowLeftRightTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeftRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-solid-rounded IconArrowLeftRightSolidRounded"
    >
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

export const IconArrowLeftRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-bulk-rounded IconArrowLeftRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconArrowLeftRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-stroke-sharp IconArrowLeftRightStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeftRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-right-solid-sharp IconArrowLeftRightSolidSharp"
    >
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

export const iconPackOfArrowLeftRight: TheIconSelfPack = {
  name: 'ArrowLeftRight',
  StrokeRounded: IconArrowLeftRightStrokeRounded,
  DuotoneRounded: IconArrowLeftRightDuotoneRounded,
  TwotoneRounded: IconArrowLeftRightTwotoneRounded,
  SolidRounded: IconArrowLeftRightSolidRounded,
  BulkRounded: IconArrowLeftRightBulkRounded,
  StrokeSharp: IconArrowLeftRightStrokeSharp,
  SolidSharp: IconArrowLeftRightSolidSharp,
};