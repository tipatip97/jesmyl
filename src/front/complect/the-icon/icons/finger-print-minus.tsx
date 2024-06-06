import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201M18.5 10.3333V11.5M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675M10.5 10.5V13.5',
  d2: 'M18.8333 18H16.1667M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d3: 'M2.5 9.75757V14.2103C2.5 16.8583 3.85602 19.1977 5.92857 20.6058C6.44801 21.0321 7.86093 21.8924 9.35714 21.9236C11.2654 22.1895 13.123 21.7471 14.6599 20.8167C13.9429 20.0938 13.5 19.0986 13.5 18C13.5 15.7909 15.2909 14 17.5 14C17.8453 14 18.1804 14.0438 18.5 14.126V10.3333C18.5 8.394 18.1455 7.49149 17.8784 6.81165C17.8241 6.67353 17.7735 6.5446 17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201C5.17678 4.03764 3.58996 5.6 3.25704 6.44444C2.77144 7.44988 2.5 8.57285 2.5 9.75757ZM6.5 10.6545V13.3262C6.5 14.915 7.17801 16.3186 8.21429 17.1635C8.474 17.4193 9.18047 17.9354 9.92857 17.9542C12.292 18.3493 14.5 16.1371 14.5 13.3262V11C14.5 9.8364 14.3227 9.2949 14.1892 8.88699C14.1621 8.80412 14.1367 8.72676 14.1151 8.65082C13.068 6.07459 10.1998 5.19845 8.21429 6.8172C7.83839 7.22258 7.04498 8.16 6.87852 8.66667C6.63572 9.26993 6.5 9.94371 6.5 10.6545Z',
  d4: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201M18.5 10.3333V11.5',
  d5: 'M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675',
  d6: 'M10.5 10.5V13.5',
  d7: 'M17.5 13.25C14.8766 13.25 12.75 15.3766 12.75 18C12.75 20.6234 14.8766 22.75 17.5 22.75C20.1234 22.75 22.25 20.6234 22.25 18C22.25 15.3766 20.1234 13.25 17.5 13.25ZM16.168 17.25C15.7538 17.25 15.418 17.5858 15.418 18C15.418 18.4142 15.7538 18.75 16.168 18.75H18.8346C19.2488 18.75 19.5846 18.4142 19.5846 18C19.5846 17.5858 19.2488 17.25 18.8346 17.25H16.168Z',
  d8: 'M5.50919 2.74956C9.84631 -0.212484 16.1007 1.37059 18.4031 6.11616C18.6385 6.60128 18.4381 7.18635 17.9555 7.42295C17.4729 7.65955 16.8908 7.45809 16.6555 6.97296C14.8861 3.32611 9.98615 2.05504 6.60192 4.3663C6.15779 4.66963 5.55313 4.5536 5.25138 4.10715C4.94963 3.6607 5.06506 3.05288 5.50919 2.74956ZM9.52778 6.13602C9.52778 5.59628 9.96306 5.15873 10.5 5.15873C13.2289 5.15873 15.3611 7.47946 15.3611 10.2407C15.3611 10.7804 14.9258 11.2179 14.3889 11.2179C13.8519 11.2179 13.4167 10.7804 13.4167 10.2407C13.4167 8.46799 12.0667 7.11332 10.5 7.11332C9.96306 7.11332 9.52778 6.67577 9.52778 6.13602ZM3.88107 5.69035C4.36457 5.92509 4.56722 6.50939 4.3337 6.99541C3.92361 7.84892 3.69444 8.80143 3.69444 9.80827V14.1599C3.69444 16.4035 4.83599 18.3958 6.60192 19.6018C7.04606 19.9052 7.16148 20.513 6.85973 20.9594C6.55798 21.4059 5.95333 21.5219 5.50919 21.2186C3.24516 19.6724 1.75 17.092 1.75 14.1599V9.80827C1.75 8.49947 2.04863 7.25704 2.58278 6.14534C2.8163 5.65931 3.39757 5.45561 3.88107 5.69035ZM7.3861 7.59112C7.87531 7.81361 8.09246 8.39261 7.87113 8.88437C7.68745 9.29248 7.58333 9.75172 7.58333 10.2407V13.7589C7.58333 15.5316 8.93332 16.8862 10.5 16.8862C10.6223 16.8862 10.7424 16.8782 10.8599 16.8628C11.3923 16.7927 11.8804 17.1697 11.9501 17.7049C12.0198 18.2401 11.6447 18.7307 11.1123 18.8008C10.9114 18.8273 10.707 18.8408 10.5 18.8408C7.77113 18.8408 5.63889 16.5201 5.63889 13.7589V10.2407C5.63889 9.47052 5.80332 8.7369 6.09957 8.07868C6.3209 7.58693 6.8969 7.36864 7.3861 7.59112ZM18.2778 9.39367C18.8147 9.39367 19.25 9.83121 19.25 10.371V11.5111C19.25 12.0509 18.8147 12.4884 18.2778 12.4884C17.7408 12.4884 17.3056 12.0509 17.3056 11.5111V10.371C17.3056 9.83121 17.7408 9.39367 18.2778 9.39367ZM10.5 9.55655C11.0369 9.55655 11.4722 9.9941 11.4722 10.5338V13.4657C11.4722 14.0055 11.0369 14.443 10.5 14.443C9.96306 14.443 9.52778 14.0055 9.52778 13.4657V10.5338C9.52778 9.9941 9.96306 9.55655 10.5 9.55655ZM12.9122 21.4367C13.016 21.9663 12.6729 22.4801 12.1461 22.5843C11.216 22.7684 10.2414 22.8042 9.25473 22.666C8.72292 22.5915 8.35187 22.0978 8.42597 21.5632C8.50006 21.0286 8.99124 20.6556 9.52305 20.7301C10.2898 20.8375 11.0467 20.8098 11.7706 20.6665C12.2974 20.5623 12.8085 20.9071 12.9122 21.4367Z',
  d9: 'M9.52756 6.13745C9.52756 5.59771 9.96284 5.16016 10.4998 5.16016C13.2287 5.16016 15.3609 7.48089 15.3609 10.2421C15.3609 10.7818 14.9256 11.2194 14.3887 11.2194C13.8517 11.2194 13.4164 10.7818 13.4164 10.2421C13.4164 8.46942 12.0665 7.11474 10.4998 7.11474C9.96284 7.11474 9.52756 6.67719 9.52756 6.13745ZM7.38589 7.59255C7.87509 7.81503 8.09225 8.39404 7.87092 8.88579C7.68723 9.29391 7.58312 9.75315 7.58312 10.2421V13.7603C7.58312 15.533 8.93311 16.8877 10.4998 16.8877C10.6221 16.8877 10.7421 16.8797 10.8597 16.8642C11.3921 16.7941 11.8802 17.1712 11.9499 17.7063C12.0196 18.2415 11.6445 18.7322 11.1121 18.8022C10.9112 18.8287 10.7068 18.8423 10.4998 18.8423C7.77091 18.8423 5.63867 16.5215 5.63867 13.7603V10.2421C5.63867 9.47195 5.8031 8.73832 6.09935 8.08011C6.32068 7.58835 6.89668 7.37006 7.38589 7.59255Z',
  d10: 'M5.50919 2.74956C9.84631 -0.212483 16.1007 1.37059 18.4031 6.11616C18.6385 6.60128 18.4381 7.18635 17.9555 7.42295C17.4729 7.65955 16.8908 7.45809 16.6555 6.97296C14.8861 3.32611 9.98615 2.05504 6.60192 4.3663C6.15779 4.66963 5.55313 4.5536 5.25138 4.10715C4.94963 3.6607 5.06506 3.05288 5.50919 2.74956ZM3.88107 5.69035C4.36457 5.92509 4.56722 6.50939 4.3337 6.99541C3.92361 7.84892 3.69444 8.80143 3.69444 9.80827V14.1599C3.69444 16.4035 4.83599 18.3958 6.60192 19.6018C7.04606 19.9052 7.16148 20.513 6.85973 20.9594C6.55798 21.4059 5.95333 21.5219 5.50919 21.2186C3.24516 19.6724 1.75 17.092 1.75 14.1599V9.80827C1.75 8.49947 2.04863 7.25704 2.58278 6.14534C2.8163 5.65931 3.39757 5.45561 3.88107 5.69035ZM18.2778 9.39366C18.8147 9.39366 19.25 9.83121 19.25 10.371V11.5111C19.25 12.0509 18.8147 12.4884 18.2778 12.4884C17.7408 12.4884 17.3056 12.0509 17.3056 11.5111V10.371C17.3056 9.83121 17.7408 9.39366 18.2778 9.39366ZM10.5 9.55655C11.0369 9.55655 11.4722 9.9941 11.4722 10.5338V13.4657C11.4722 14.0055 11.0369 14.443 10.5 14.443C9.96306 14.443 9.52778 14.0055 9.52778 13.4657V10.5338C9.52778 9.9941 9.96306 9.55655 10.5 9.55655ZM12.9122 21.4367C13.016 21.9663 12.6729 22.4801 12.1461 22.5843C11.216 22.7684 10.2414 22.8042 9.25473 22.666C8.72292 22.5915 8.35187 22.0978 8.42597 21.5632C8.50006 21.0286 8.99124 20.6556 9.52305 20.7301C10.2898 20.8375 11.0467 20.8098 11.7706 20.6665C12.2974 20.5623 12.8085 20.9071 12.9122 21.4367Z',
  d11: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201M18.5 9.33333V11.5M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675M10.5 10.5V13.5',
  d12: 'M19 18H16M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d13: 'M5.50919 2.74958C9.84631 -0.212497 16.1007 1.37059 18.4031 6.1162L16.6555 6.97302C14.8861 3.32613 9.98615 2.05504 6.60192 4.36633L5.50919 2.74958Z',
  d14: 'M1.75 9.80834C1.75 8.49953 2.04863 7.25709 2.58278 6.14538L4.3337 6.99546C3.92361 7.84898 3.69444 8.8015 3.69444 9.80834V14.16C3.69444 16.4036 4.83599 18.3959 6.60192 19.602L5.50919 21.2188C3.24516 19.6725 1.75 17.0921 1.75 14.16V9.80834Z',
  d15: 'M17.3056 11.16V8.37104H19.25V11.16H17.3056Z',
  d16: 'M9.25473 22.6662L9.52305 20.7303C10.1859 20.8231 10.8405 20.8152 11.4718 20.7196L12.2475 22.5629C11.2853 22.7655 10.2759 22.8092 9.25473 22.6662Z',
  d17: 'M13.4164 10.2411C13.4164 8.46847 12.0665 7.11378 10.4998 7.11378V5.15918C13.2287 5.15918 15.3609 7.47994 15.3609 10.2411H13.4164Z',
  d18: 'M5.63867 10.2411C5.63867 9.47101 5.8031 8.73738 6.09935 8.07916L7.87092 8.88485C7.68723 9.29297 7.58312 9.75221 7.58312 10.2411V13.7594C7.58312 15.5321 8.93311 16.8868 10.4998 16.8868V18.8414C7.77091 18.8414 5.63867 16.5206 5.63867 13.7594V10.2411Z',
  d19: 'M9.52734 10.5342V13.4661H11.4718V10.5342H9.52734Z',
  d20: 'M17.5 13.25C14.8766 13.25 12.75 15.3766 12.75 18C12.75 20.6234 14.8766 22.75 17.5 22.75C20.1234 22.75 22.25 20.6234 22.25 18C22.25 15.3766 20.1234 13.25 17.5 13.25ZM19 17.25H16V18.75H19V17.25Z',
};

export const IconFingerPrintMinusStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-stroke-rounded IconFingerPrintMinusStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-duotone-rounded IconFingerPrintMinusDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-twotone-rounded IconFingerPrintMinusTwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-solid-rounded IconFingerPrintMinusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-bulk-rounded IconFingerPrintMinusBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-stroke-sharp IconFingerPrintMinusStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintMinusSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-minus-solid-sharp IconFingerPrintMinusSolidSharp"
    >
      <path 
        d={d.d13} 
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFingerPrintMinus: TheIconSelfPack = {
  name: 'FingerPrintMinus',
  StrokeRounded: IconFingerPrintMinusStrokeRounded,
  DuotoneRounded: IconFingerPrintMinusDuotoneRounded,
  TwotoneRounded: IconFingerPrintMinusTwotoneRounded,
  SolidRounded: IconFingerPrintMinusSolidRounded,
  BulkRounded: IconFingerPrintMinusBulkRounded,
  StrokeSharp: IconFingerPrintMinusStrokeSharp,
  SolidSharp: IconFingerPrintMinusSolidSharp,
};