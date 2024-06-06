import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.92683 20.5968C3.85533 19.1894 2.5 16.8511 2.5 14.2044V9.75383C2.5 8.56968 2.7713 7.44725 3.25666 6.4423M9.35367 21.914C10.255 22.0396 11.145 22.007 11.9952 21.8397M17.7224 6.4159C15.6293 2.12426 9.8958 0.664733 5.92683 3.36135M18.4919 10.3293V11.4954M10.4959 5.99807C12.7039 5.99807 14.4939 7.87756 14.4939 10.196M6.88271 8.39691C6.63601 8.9422 6.49797 9.55219 6.49797 10.196V13.7943C6.49797 16.1128 8.28793 17.9923 10.4959 17.9923C10.6652 17.9923 10.832 17.9813 10.9957 17.9598M10.4959 10.4959V13.4945',
  d2: 'M16.1702 18.447C16.4706 18.5912 16.8432 18.9639 17.0235 19.2643C17.0836 19.685 17.3841 18.0624 18.8505 17.1008M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d3: 'M2.75098 9.75855V14.2113C2.75098 16.8593 4.107 19.1987 6.17955 20.6068C6.69899 21.0331 8.11191 21.8934 9.60812 21.9246C11.5164 22.1905 13.374 21.7481 14.9109 20.8177C14.1939 20.0948 13.751 19.0996 13.751 18.001C13.751 15.7919 15.5419 14.001 17.751 14.001C18.0963 14.001 18.4314 14.0448 18.751 14.127V10.3343C18.751 8.39498 18.3965 7.49247 18.1294 6.81263C18.0751 6.67451 18.0245 6.54558 17.9811 6.41901C15.887 2.1253 10.1505 0.665065 6.17955 3.36299C5.42776 4.03862 3.84094 5.60098 3.50802 6.44542C3.02242 7.45086 2.75098 8.57383 2.75098 9.75855ZM6.75098 10.6555V13.3272C6.75098 14.916 7.42899 16.3196 8.46527 17.1645C8.72498 17.4203 9.43145 17.9364 10.1795 17.9552C12.543 18.3503 14.751 16.1381 14.751 13.3272V11.001C14.751 9.83738 14.5737 9.29588 14.4402 8.88797C14.4131 8.8051 14.3877 8.72774 14.3661 8.6518C13.319 6.07557 10.4508 5.19943 8.46527 6.81818C8.08937 7.22356 7.29596 8.16098 7.1295 8.66765C6.8867 9.27091 6.75098 9.94469 6.75098 10.6555Z',
  d4: 'M6.17955 20.6068C4.107 19.1987 2.75098 16.8593 2.75098 14.2113V9.75855C2.75098 8.57383 3.02242 7.45086 3.50802 6.44542M9.60812 21.9246C10.5099 22.0503 11.4004 22.0177 12.251 21.8503M17.9811 6.41901C15.887 2.1253 10.1505 0.665065 6.17955 3.36299M18.751 10.3343V11.501M10.751 6.00098C12.9601 6.00098 14.751 7.88138 14.751 10.201M7.13591 8.40098C6.88909 8.94653 6.75098 9.55682 6.75098 10.201V13.801C6.75098 16.1206 8.54184 18.001 10.751 18.001C10.9203 18.001 11.0872 17.99 11.251 17.9685M10.751 10.501V13.501',
  d5: 'M17.751 22.001C19.9601 22.001 21.751 20.2101 21.751 18.001C21.751 15.7918 19.9601 14.001 17.751 14.001C15.5418 14.001 13.751 15.7918 13.751 18.001C13.751 20.2101 15.5418 22.001 17.751 22.001Z',
  d6: 'M16.4189 18.4446C16.7189 18.5886 17.0909 18.9606 17.2709 19.2606C17.3309 19.6806 17.6309 18.0606 19.0949 17.1006',
  d7: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664088 5.92857 3.36201M18.5 10.3333V11.5',
  d8: 'M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675',
  d9: 'M10.5 10.5V13.5',
  d10: 'M5.50919 2.74956C9.84631 -0.212484 16.1007 1.37059 18.4031 6.11616C18.6385 6.60128 18.4381 7.18635 17.9555 7.42295C17.4729 7.65955 16.8908 7.45809 16.6555 6.97296C14.8861 3.32611 9.98615 2.05504 6.60192 4.3663C6.15779 4.66963 5.55313 4.5536 5.25138 4.10715C4.94963 3.6607 5.06506 3.05288 5.50919 2.74956ZM9.52778 6.13602C9.52778 5.59628 9.96306 5.15873 10.5 5.15873C13.2289 5.15873 15.3611 7.47946 15.3611 10.2407C15.3611 10.7804 14.9258 11.2179 14.3889 11.2179C13.8519 11.2179 13.4167 10.7804 13.4167 10.2407C13.4167 8.46799 12.0667 7.11332 10.5 7.11332C9.96306 7.11332 9.52778 6.67577 9.52778 6.13602ZM3.88107 5.69035C4.36457 5.92509 4.56722 6.50939 4.3337 6.99541C3.92361 7.84892 3.69444 8.80143 3.69444 9.80827V14.1599C3.69444 16.4035 4.83599 18.3958 6.60192 19.6018C7.04606 19.9052 7.16148 20.513 6.85973 20.9594C6.55798 21.4059 5.95333 21.5219 5.50919 21.2186C3.24516 19.6724 1.75 17.092 1.75 14.1599V9.80827C1.75 8.49947 2.04863 7.25704 2.58278 6.14534C2.8163 5.65931 3.39757 5.45561 3.88107 5.69035ZM7.3861 7.59112C7.87531 7.81361 8.09246 8.39261 7.87113 8.88437C7.68745 9.29248 7.58333 9.75172 7.58333 10.2407V13.7589C7.58333 15.5316 8.93332 16.8862 10.5 16.8862C10.6223 16.8862 10.7424 16.8782 10.8599 16.8628C11.3923 16.7927 11.8804 17.1697 11.9501 17.7049C12.0198 18.2401 11.6447 18.7307 11.1123 18.8008C10.9114 18.8273 10.707 18.8408 10.5 18.8408C7.77113 18.8408 5.63889 16.5201 5.63889 13.7589V10.2407C5.63889 9.47052 5.80332 8.7369 6.09957 8.07868C6.3209 7.58693 6.8969 7.36864 7.3861 7.59112ZM18.2778 9.39367C18.8147 9.39367 19.25 9.83121 19.25 10.371V11.5111C19.25 12.0509 18.8147 12.4884 18.2778 12.4884C17.7408 12.4884 17.3056 12.0509 17.3056 11.5111V10.371C17.3056 9.83121 17.7408 9.39367 18.2778 9.39367ZM10.5 9.55655C11.0369 9.55655 11.4722 9.9941 11.4722 10.5338V13.4657C11.4722 14.0055 11.0369 14.443 10.5 14.443C9.96306 14.443 9.52778 14.0055 9.52778 13.4657V10.5338C9.52778 9.9941 9.96306 9.55655 10.5 9.55655ZM12.9122 21.4367C13.016 21.9663 12.6729 22.4801 12.1461 22.5843C11.216 22.7684 10.2414 22.8042 9.25473 22.666C8.72292 22.5915 8.35187 22.0978 8.42597 21.5632C8.50006 21.0286 8.99124 20.6556 9.52305 20.7301C10.2898 20.8375 11.0467 20.8098 11.7706 20.6665C12.2974 20.5623 12.8085 20.9071 12.9122 21.4367Z',
  d11: 'M17.5 13.25C14.8766 13.25 12.75 15.3766 12.75 18C12.75 20.6234 14.8766 22.75 17.5 22.75C20.1234 22.75 22.25 20.6234 22.25 18C22.25 15.3766 20.1234 13.25 17.5 13.25ZM19.1903 17.7699C19.555 17.5736 19.6915 17.1187 19.4952 16.754C19.2989 16.3893 18.844 16.2528 18.4793 16.4491C17.8214 16.8033 17.2583 17.5496 16.9274 18.0505C16.8177 17.9627 16.6345 17.8343 16.4911 17.7659C16.1172 17.5876 15.6696 17.7461 15.4912 18.1199C15.3145 18.4903 15.4685 18.9332 15.8349 19.1148C15.8349 19.1148 15.9387 19.1799 15.9977 19.2277C16.1161 19.3235 16.2739 19.48 16.4109 19.7125C16.5515 19.9512 16.8123 20.0929 17.0892 20.0811C17.3658 20.0692 17.6137 19.9053 17.7335 19.6557C17.7547 19.6138 17.8162 19.4933 17.8581 19.4164C17.9423 19.2619 18.0636 19.0516 18.2112 18.8281C18.5289 18.3472 18.8869 17.9333 19.1903 17.7699Z',
  d12: 'M9.52756 6.13745C9.52756 5.59771 9.96284 5.16016 10.4998 5.16016C13.2287 5.16016 15.3609 7.48089 15.3609 10.2421C15.3609 10.7818 14.9256 11.2194 14.3887 11.2194C13.8517 11.2194 13.4164 10.7818 13.4164 10.2421C13.4164 8.46942 12.0665 7.11474 10.4998 7.11474C9.96284 7.11474 9.52756 6.67719 9.52756 6.13745ZM7.38589 7.59255C7.87509 7.81503 8.09225 8.39404 7.87092 8.88579C7.68723 9.29391 7.58312 9.75315 7.58312 10.2421V13.7603C7.58312 15.533 8.93311 16.8877 10.4998 16.8877C10.6221 16.8877 10.7421 16.8797 10.8597 16.8642C11.3921 16.7941 11.8802 17.1712 11.9499 17.7063C12.0196 18.2415 11.6445 18.7322 11.1121 18.8022C10.9112 18.8287 10.7068 18.8423 10.4998 18.8423C7.77091 18.8423 5.63867 16.5215 5.63867 13.7603V10.2421C5.63867 9.47195 5.8031 8.73832 6.09935 8.08011C6.32068 7.58835 6.89668 7.37006 7.38589 7.59255Z',
  d13: 'M5.50919 2.74956C9.84631 -0.212483 16.1007 1.37059 18.4031 6.11616C18.6385 6.60128 18.4381 7.18635 17.9555 7.42295C17.4729 7.65955 16.8908 7.45809 16.6555 6.97296C14.8861 3.32611 9.98615 2.05504 6.60192 4.3663C6.15779 4.66963 5.55313 4.5536 5.25138 4.10715C4.94963 3.6607 5.06506 3.05288 5.50919 2.74956ZM3.88107 5.69035C4.36457 5.92509 4.56722 6.50939 4.3337 6.99541C3.92361 7.84892 3.69444 8.80143 3.69444 9.80827V14.1599C3.69444 16.4035 4.83599 18.3958 6.60192 19.6018C7.04606 19.9052 7.16148 20.513 6.85973 20.9594C6.55798 21.4059 5.95333 21.5219 5.50919 21.2186C3.24516 19.6724 1.75 17.092 1.75 14.1599V9.80827C1.75 8.49947 2.04863 7.25704 2.58278 6.14534C2.8163 5.65931 3.39757 5.45561 3.88107 5.69035ZM18.2778 9.39366C18.8147 9.39366 19.25 9.83121 19.25 10.371V11.5111C19.25 12.0509 18.8147 12.4884 18.2778 12.4884C17.7408 12.4884 17.3056 12.0509 17.3056 11.5111V10.371C17.3056 9.83121 17.7408 9.39366 18.2778 9.39366ZM10.5 9.55655C11.0369 9.55655 11.4722 9.9941 11.4722 10.5338V13.4657C11.4722 14.0055 11.0369 14.443 10.5 14.443C9.96306 14.443 9.52778 14.0055 9.52778 13.4657V10.5338C9.52778 9.9941 9.96306 9.55655 10.5 9.55655ZM12.9122 21.4367C13.016 21.9663 12.6729 22.4801 12.1461 22.5843C11.216 22.7684 10.2414 22.8042 9.25473 22.666C8.72292 22.5915 8.35187 22.0978 8.42597 21.5632C8.50006 21.0286 8.99124 20.6556 9.52305 20.7301C10.2898 20.8375 11.0467 20.8098 11.7706 20.6665C12.2974 20.5623 12.8085 20.9071 12.9122 21.4367Z',
  d14: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664088 5.92857 3.36201M18.5 9.33333V11.5M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675M10.5 10.5V13.5',
  d15: 'M15.7376 17.7354L17.0166 19.0079L19.3356 16.6774M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d16: 'M5.50919 2.74958C9.84631 -0.212497 16.1007 1.37059 18.4031 6.1162L16.6555 6.97302C14.8861 3.32613 9.98615 2.05504 6.60192 4.36633L5.50919 2.74958Z',
  d17: 'M1.75 9.80834C1.75 8.49953 2.04863 7.25709 2.58278 6.14538L4.3337 6.99546C3.92361 7.84898 3.69444 8.8015 3.69444 9.80834V14.16C3.69444 16.4036 4.83599 18.3959 6.60192 19.602L5.50919 21.2188C3.24516 19.6725 1.75 17.0921 1.75 14.16V9.80834Z',
  d18: 'M17.3056 11.16V8.37104H19.25V11.16H17.3056Z',
  d19: 'M9.25473 22.6662L9.52305 20.7303C10.1859 20.8231 10.8405 20.8152 11.4718 20.7196L12.2475 22.5629C11.2853 22.7655 10.2759 22.8092 9.25473 22.6662Z',
  d20: 'M13.4164 10.2411C13.4164 8.46847 12.0665 7.11378 10.4998 7.11378V5.15918C13.2287 5.15918 15.3609 7.47994 15.3609 10.2411H13.4164Z',
  d21: 'M5.63867 10.2411C5.63867 9.47101 5.8031 8.73738 6.09935 8.07916L7.87092 8.88485C7.68723 9.29297 7.58312 9.75221 7.58312 10.2411V13.7594C7.58312 15.5321 8.93311 16.8868 10.4998 16.8868V18.8414C7.77091 18.8414 5.63867 16.5206 5.63867 13.7594V10.2411Z',
  d22: 'M9.52734 10.5342V13.4661H11.4718V10.5342H9.52734Z',
  d23: 'M17.5 13.25C14.8766 13.25 12.75 15.3766 12.75 18C12.75 20.6234 14.8766 22.75 17.5 22.75C20.1234 22.75 22.25 20.6234 22.25 18C22.25 15.3766 20.1234 13.25 17.5 13.25ZM17.001 20.0601L19.8559 17.2052L18.7952 16.1445L17.001 17.9388L16.2599 17.1977L15.1992 18.2584L17.001 20.0601Z',
} as const;

export const IconFingerPrintCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-stroke-rounded IconFingerPrintCheckStrokeRounded"
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

export const IconFingerPrintCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-duotone-rounded IconFingerPrintCheckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-twotone-rounded IconFingerPrintCheckTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconFingerPrintCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-solid-rounded IconFingerPrintCheckSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-bulk-rounded IconFingerPrintCheckBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-stroke-sharp IconFingerPrintCheckStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-check-solid-sharp IconFingerPrintCheckSolidSharp"
    >
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
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFingerPrintCheck: TheIconSelfPack = {
  name: 'FingerPrintCheck',
  StrokeRounded: IconFingerPrintCheckStrokeRounded,
  DuotoneRounded: IconFingerPrintCheckDuotoneRounded,
  TwotoneRounded: IconFingerPrintCheckTwotoneRounded,
  SolidRounded: IconFingerPrintCheckSolidRounded,
  BulkRounded: IconFingerPrintCheckBulkRounded,
  StrokeSharp: IconFingerPrintCheckStrokeSharp,
  SolidSharp: IconFingerPrintCheckSolidSharp,
};