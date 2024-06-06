import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9902 8.98595V3.31543',
  d2: 'M11.9902 20.6705V15',
  d3: 'M20.6703 12.0001L15 11.9482',
  d4: 'M9.00036 12.0001L3.33008 11.9482',
  d5: 'M15 5.99998C15 5.99998 12.7905 3.00001 12 3C11.2094 2.99999 9 6 9 6',
  d6: 'M5.99998 15C5.99998 15 3.00001 12.7905 3 12C2.99999 11.2094 6 9 6 9',
  d7: 'M18 9C18 9 21 11.2095 21 12C21 12.7906 18 15 18 15',
  d8: 'M9 18C9 18 11.2095 21 12 21C12.7906 21 15 18 15 18',
  d9: 'M11.25 9C11.25 9.41421 11.5858 9.75 12 9.75C12.4142 9.75 12.75 9.41421 12.75 9H11.25ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3L12.75 3ZM12.75 9L12.75 3L11.25 3L11.25 9H12.75Z',
  d10: 'M11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15L12.75 15ZM12.75 21L12.75 15L11.25 15L11.25 21H12.75Z',
  d11: 'M9 12.7498C9.41421 12.7498 9.75 12.414 9.75 11.9998C9.75 11.5856 9.41421 11.2498 9 11.2498V12.7498ZM5.55519 15.6039C5.8887 15.8495 6.3582 15.7783 6.60385 15.4448C6.8495 15.1113 6.77828 14.6418 6.44477 14.3961L5.55519 15.6039ZM6.44473 9.60392C6.77826 9.3583 6.84953 8.88881 6.60392 8.55527C6.3583 8.22174 5.88881 8.15047 5.55527 8.39608L6.44473 9.60392ZM9 11.2498H3V12.7498H9V11.2498ZM2.25 11.9998C2.25 12.3075 2.38441 12.5734 2.48659 12.7429C2.60118 12.933 2.7507 13.1221 2.90669 13.2987C3.22019 13.6535 3.62389 14.0289 4.00826 14.3626C4.39635 14.6996 4.78225 15.0092 5.06978 15.2336C5.21394 15.3461 5.33429 15.438 5.41901 15.502C5.46139 15.534 5.4949 15.5591 5.51808 15.5763C5.52967 15.585 5.53868 15.5917 5.54492 15.5963C5.54804 15.5986 5.55048 15.6004 5.55219 15.6017C5.55305 15.6023 5.55373 15.6028 5.55423 15.6032C5.55448 15.6034 5.55469 15.6035 5.55485 15.6036C5.55493 15.6037 5.55501 15.6037 5.55505 15.6038C5.55512 15.6038 5.55519 15.6039 5.99998 15C6.44477 14.3961 6.44481 14.3962 6.44483 14.3962C6.44483 14.3962 6.44484 14.3962 6.44483 14.3962C6.44481 14.3962 6.44474 14.3961 6.44463 14.396C6.4444 14.3959 6.44399 14.3956 6.44341 14.3951C6.44225 14.3943 6.44037 14.3929 6.43782 14.391C6.43271 14.3872 6.42488 14.3814 6.41449 14.3737C6.39372 14.3582 6.36279 14.335 6.32313 14.3051C6.24379 14.2451 6.12977 14.1581 5.99268 14.0511C5.71772 13.8365 5.35362 13.5443 4.99172 13.23C4.6261 12.9126 4.2798 12.5873 4.0308 12.3055C3.90555 12.1637 3.8207 12.0505 3.77123 11.9685C3.70935 11.8658 3.75 11.8897 3.75 11.9998L2.25 11.9998ZM6 9C5.55527 8.39608 5.55521 8.39613 5.55514 8.39618C5.5551 8.39621 5.55501 8.39627 5.55493 8.39633C5.55477 8.39645 5.55457 8.3966 5.55432 8.39678C5.55382 8.39715 5.55314 8.39765 5.55228 8.39829C5.55056 8.39956 5.54813 8.40136 5.54501 8.40367C5.53876 8.40829 5.52975 8.41498 5.51816 8.42362C5.49499 8.44089 5.46147 8.46597 5.41909 8.49798C5.33438 8.56196 5.21402 8.65376 5.06986 8.76626C4.78232 8.99063 4.39642 9.30014 4.00832 9.63708C3.62394 9.97078 3.22023 10.3461 2.90673 10.7009C2.75073 10.8775 2.6012 11.0666 2.4866 11.2567C2.38441 11.4262 2.25 11.6921 2.25 11.9998L3.75 11.9998C3.75 12.1098 3.70934 12.1338 3.77121 12.0311C3.82067 11.9491 3.90551 11.8359 4.03077 11.6942C4.27976 11.4124 4.62605 11.0872 4.99168 10.7698C5.35358 10.4556 5.71767 10.1634 5.99264 9.94883C6.12973 9.84185 6.24375 9.75489 6.32309 9.69497C6.36275 9.66502 6.39368 9.64187 6.41445 9.62639C6.42484 9.61865 6.43267 9.61284 6.43778 9.60905C6.44033 9.60716 6.4422 9.60578 6.44337 9.60492C6.44395 9.60449 6.44436 9.60419 6.44459 9.60402C6.4447 9.60394 6.44477 9.60389 6.44479 9.60387C6.4448 9.60386 6.44479 9.60387 6.44479 9.60387C6.44477 9.60389 6.44473 9.60392 6 9Z',
  d12: 'M15 11.2499C14.5858 11.2499 14.25 11.5857 14.25 11.9999C14.25 12.4141 14.5858 12.7499 15 12.7499V11.2499ZM18.4449 8.3961C18.1113 8.15047 17.6418 8.22172 17.3962 8.55525C17.1506 8.88877 17.2218 9.35827 17.5554 9.6039L18.4449 8.3961ZM17.5553 14.3961C17.2218 14.6418 17.1506 15.1113 17.3962 15.4448C17.6419 15.7783 18.1114 15.8495 18.4449 15.6039L17.5553 14.3961ZM21 11.2499H15V12.7499H21V11.2499ZM21.75 11.9999C21.75 11.6922 21.6156 11.4263 21.5134 11.2568C21.3988 11.0667 21.2493 10.8776 21.0933 10.701C20.7798 10.3462 20.3761 9.97087 19.9918 9.63715C19.6037 9.3002 19.2178 8.99067 18.9303 8.76629C18.7861 8.6538 18.6657 8.56199 18.581 8.498C18.5387 8.46599 18.5051 8.44091 18.482 8.42364C18.4704 8.415 18.4614 8.40831 18.4551 8.40369C18.452 8.40138 18.4496 8.39958 18.4479 8.39831C18.447 8.39767 18.4463 8.39717 18.4458 8.3968C18.4456 8.39662 18.4454 8.39647 18.4452 8.39635C18.4451 8.39629 18.445 8.39623 18.445 8.3962C18.4449 8.39615 18.4449 8.3961 18.0001 9C17.5554 9.6039 17.5553 9.60387 17.5553 9.60385C17.5553 9.60385 17.5553 9.60384 17.5553 9.60385C17.5553 9.60387 17.5554 9.60392 17.5555 9.604C17.5557 9.60417 17.5561 9.60447 17.5567 9.6049C17.5579 9.60576 17.5597 9.60714 17.5623 9.60904C17.5674 9.61282 17.5752 9.61863 17.5856 9.62637C17.6064 9.64185 17.6373 9.665 17.677 9.69495C17.7563 9.75488 17.8703 9.84185 18.0074 9.94882C18.2824 10.1634 18.6465 10.4556 19.0083 10.7698C19.374 11.0872 19.7202 11.4124 19.9692 11.6942C20.0945 11.836 20.1793 11.9492 20.2288 12.0312C20.2907 12.1339 20.25 12.1099 20.25 11.9999L21.75 11.9999ZM18.0001 15C18.4449 15.6039 18.4449 15.6038 18.445 15.6038C18.445 15.6038 18.4451 15.6037 18.4452 15.6036C18.4454 15.6035 18.4456 15.6034 18.4458 15.6032C18.4463 15.6028 18.447 15.6023 18.4479 15.6017C18.4496 15.6004 18.452 15.5986 18.4551 15.5963C18.4614 15.5917 18.4704 15.585 18.482 15.5763C18.5051 15.5591 18.5387 15.534 18.581 15.502C18.6658 15.438 18.7861 15.3462 18.9303 15.2336C19.2178 15.0092 19.6037 14.6997 19.9918 14.3627C20.3761 14.029 20.7798 13.6536 21.0933 13.2988C21.2493 13.1222 21.3988 12.9331 21.5134 12.743C21.6156 12.5735 21.75 12.3076 21.75 11.9999L20.25 11.9999C20.25 11.8898 20.2907 11.8659 20.2288 11.9686C20.1793 12.0506 20.0945 12.1638 19.9692 12.3056C19.7202 12.5874 19.3739 12.9126 19.0083 13.2301C18.6464 13.5443 18.2823 13.8366 18.0074 14.0512C17.8703 14.1581 17.7563 14.2451 17.6769 14.3051C17.6373 14.335 17.6063 14.3582 17.5856 14.3736C17.5752 14.3814 17.5674 14.3872 17.5622 14.391C17.5597 14.3929 17.5578 14.3943 17.5567 14.3951C17.5561 14.3955 17.5557 14.3958 17.5554 14.396C17.5553 14.3961 17.5553 14.3962 17.5552 14.3962C17.5552 14.3962 17.5552 14.3962 17.5552 14.3962C17.5553 14.3961 17.5553 14.3961 18.0001 15Z',
  d13: 'M12.9999 8.99988C12.9999 9.55216 12.5522 9.99988 11.9999 9.99988C11.4476 9.99988 10.9999 9.55216 10.9999 8.99988L10.9999 6.99999L9.81829 7L9.78443 7.00003C9.64799 7.00025 9.44919 7.00056 9.27998 6.9746C9.09511 6.94624 8.61011 6.83812 8.36374 6.32267C8.11919 5.81104 8.33093 5.36183 8.42545 5.19364C8.51004 5.04314 8.63325 4.88606 8.7168 4.77954L8.73764 4.75295C9.08845 4.3042 9.59774 3.67868 10.1011 3.15775C10.3507 2.89942 10.6218 2.64263 10.8879 2.44332C11.0211 2.34356 11.1735 2.24258 11.3381 2.16319C11.4926 2.08862 11.7249 2 12 2C12.2751 2 12.5073 2.08862 12.6619 2.16319C12.8264 2.24258 12.9789 2.34356 13.1121 2.44332C13.3782 2.64263 13.6493 2.89941 13.8989 3.15774C14.4022 3.67866 14.9115 4.30417 15.2623 4.75291L15.2832 4.77951C15.3667 4.88602 15.49 5.04311 15.5745 5.19361C15.6691 5.36179 15.8808 5.811 15.6363 6.32264C15.3899 6.83809 14.9049 6.94621 14.72 6.97458C14.5508 7.00054 14.352 7.00023 14.2156 7.00002L14.1817 6.99998L12.9999 6.99998L12.9999 8.99988Z',
  d14: 'M12.9999 15.0001C12.9999 14.4478 12.5522 14.0001 11.9999 14.0001C11.4476 14.0001 10.9999 14.4478 10.9999 15.0001L10.9999 17L9.81829 17L9.78443 17C9.64799 16.9998 9.44919 16.9994 9.27998 17.0254C9.09511 17.0538 8.61011 17.1619 8.36374 17.6773C8.11919 18.189 8.33093 18.6382 8.42545 18.8064C8.51004 18.9569 8.63325 19.1139 8.7168 19.2205L8.73764 19.2471C9.08845 19.6958 9.59774 20.3213 10.1011 20.8422C10.3507 21.1006 10.6218 21.3574 10.8879 21.5567C11.0211 21.6564 11.1735 21.7574 11.3381 21.8368C11.4926 21.9114 11.7249 22 12 22C12.2751 22 12.5073 21.9114 12.6619 21.8368C12.8264 21.7574 12.9789 21.6564 13.1121 21.5567C13.3782 21.3574 13.6493 21.1006 13.8989 20.8423C14.4022 20.3213 14.9115 19.6958 15.2623 19.2471L15.2832 19.2205C15.3667 19.114 15.49 18.9569 15.5745 18.8064C15.6691 18.6382 15.8808 18.189 15.6363 17.6774C15.3899 17.1619 14.9049 17.0538 14.72 17.0254C14.5508 16.9995 14.352 16.9998 14.2156 17L14.1817 17L12.9999 17L12.9999 15.0001Z',
  d15: 'M15.0001 12.9999C14.4478 12.9999 14.0001 12.5522 14.0001 11.9999C14.0001 11.4476 14.4478 10.9999 15.0001 10.9999L17 10.9999L17 9.81829L17 9.78443C16.9998 9.64798 16.9994 9.44919 17.0254 9.27998C17.0538 9.09511 17.1619 8.61011 17.6773 8.36374C18.189 8.11919 18.6382 8.33093 18.8064 8.42545C18.9569 8.51004 19.1139 8.63325 19.2205 8.7168L19.2471 8.73764C19.6958 9.08845 20.3213 9.59774 20.8422 10.1011C21.1006 10.3507 21.3574 10.6218 21.5567 10.8879C21.6564 11.0211 21.7574 11.1735 21.8368 11.3381C21.9114 11.4926 22 11.7249 22 12C22 12.2751 21.9114 12.5073 21.8368 12.6619C21.7574 12.8264 21.6564 12.9789 21.5567 13.1121C21.3574 13.3782 21.1006 13.6493 20.8423 13.8989C20.3213 14.4022 19.6958 14.9115 19.2471 15.2623L19.2205 15.2832C19.114 15.3667 18.9569 15.49 18.8064 15.5745C18.6382 15.6691 18.189 15.8808 17.6774 15.6363C17.1619 15.3899 17.0538 14.9049 17.0254 14.72C16.9995 14.5508 16.9998 14.352 17 14.2156L17 14.1817L17 12.9999L15.0001 12.9999Z',
  d16: 'M8.99988 12.9999C9.55216 12.9999 9.99988 12.5522 9.99988 11.9999C9.99988 11.4476 9.55216 10.9999 8.99988 10.9999L6.99999 10.9999L7 9.81829L7.00003 9.78443C7.00025 9.64799 7.00056 9.44919 6.9746 9.27998C6.94624 9.09511 6.83812 8.61011 6.32267 8.36374C5.81104 8.11919 5.36183 8.33093 5.19364 8.42545C5.04314 8.51004 4.88606 8.63325 4.77954 8.7168L4.75295 8.73764C4.3042 9.08845 3.67868 9.59774 3.15775 10.1011C2.89942 10.3507 2.64263 10.6218 2.44332 10.8879C2.34356 11.0211 2.24258 11.1735 2.16319 11.3381C2.08862 11.4926 2 11.7249 2 12C2 12.2751 2.08862 12.5073 2.16319 12.6619C2.24258 12.8264 2.34356 12.9789 2.44332 13.1121C2.64263 13.3782 2.89941 13.6493 3.15774 13.8989C3.67866 14.4022 4.30417 14.9115 4.75291 15.2623L4.7795 15.2832C4.88602 15.3667 5.04311 15.49 5.19361 15.5745C5.36179 15.6691 5.811 15.8808 6.32264 15.6363C6.83809 15.3899 6.94621 14.9049 6.97458 14.72C7.00054 14.5508 7.00023 14.352 7.00002 14.2156L6.99998 14.1817L6.99998 12.9999L8.99988 12.9999Z',
  d17: 'M12.751 8.99951V3.99951H11.251V8.99951H12.751Z',
  d18: 'M15.001 6L12.001 3L9.00098 6',
  d19: 'M11.251 15V20H12.751V15H11.251Z',
  d20: 'M15.001 17.9995L12.001 20.9995L9.00098 17.9995',
  d21: 'M15 12.75L20 12.75V11.25L15 11.25L15 12.75Z',
  d22: 'M18 15L21 12L18 9',
  d23: 'M9.00098 11.25L4.00098 11.25L4.00098 12.75L9.00098 12.75V11.25Z',
  d24: 'M6 15L3 12L6 9',
  d25: 'M16.0011 6L12.0011 2L8.00098 6L9.41519 7.41421L11.0009 5.82855V9.99963H13.0009V5.82828L14.5868 7.41421L16.0011 6Z',
  d26: 'M16.0011 17.9996L12.0011 21.9996L8.00098 17.9996L9.41519 16.5854L11.0009 18.1711V14H13.0009V18.1714L14.5868 16.5854L16.0011 17.9996Z',
  d27: 'M17.9996 16.0001L21.9996 12.0001L17.9996 8L16.5854 9.41421L18.1711 10.9999L14 10.9999L14 12.9999H18.1714L16.5854 14.5859L17.9996 16.0001Z',
  d28: 'M6 16.0001L2 12.0001L6 8L7.41421 9.41421L5.82855 10.9999L9.99963 10.9999V12.9999H5.82828L7.41421 14.5859L6 16.0001Z',
};

export const IconArrowAllDirectionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-stroke-rounded IconArrowAllDirectionStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-duotone-rounded IconArrowAllDirectionDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-twotone-rounded IconArrowAllDirectionTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-solid-rounded IconArrowAllDirectionSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-bulk-rounded IconArrowAllDirectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-stroke-sharp IconArrowAllDirectionStrokeSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowAllDirectionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-all-direction-solid-sharp IconArrowAllDirectionSolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowAllDirection: TheIconSelfPack = {
  name: 'ArrowAllDirection',
  StrokeRounded: IconArrowAllDirectionStrokeRounded,
  DuotoneRounded: IconArrowAllDirectionDuotoneRounded,
  TwotoneRounded: IconArrowAllDirectionTwotoneRounded,
  SolidRounded: IconArrowAllDirectionSolidRounded,
  BulkRounded: IconArrowAllDirectionBulkRounded,
  StrokeSharp: IconArrowAllDirectionStrokeSharp,
  SolidSharp: IconArrowAllDirectionSolidSharp,
};