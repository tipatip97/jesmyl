import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 11H7.625C9.38057 11 10.2584 11 10.8889 10.5787C11.1619 10.3963 11.3963 10.1619 11.5787 9.88893C12 9.25837 12 8.38058 12 6.625C12 5.57165 12 5.04498 11.7472 4.66664C11.6378 4.50286 11.4971 4.36223 11.3334 4.2528C10.955 4 10.4283 4 9.375 4H7.71393C7.56953 4 7.49733 4 7.43101 3.99026C7.18274 3.95381 6.96074 3.81737 6.81761 3.61327C6.77937 3.55875 6.74734 3.49469 6.68328 3.36656C6.42089 2.84179 6.18111 2.31356 5.59963 2.0955C5.34495 2 5.05401 2 4.47214 2C3.5639 2 3.10978 2 2.76903 2.19016C2.52613 2.32571 2.32571 2.52613 2.19016 2.76903C2 3.10978 2 3.5639 2 4.47214V6C2 8.35702 2 9.53553 2.73223 10.2678C3.46447 11 4.64298 11 7 11Z',
  d2: 'M17 22H16.375C14.6194 22 13.7416 22 13.1111 21.5787C12.8381 21.3963 12.6037 21.1619 12.4213 20.8889C12 20.2584 12 19.3806 12 17.625C12 16.5717 12 16.045 12.2528 15.6666C12.3622 15.5029 12.5029 15.3622 12.6666 15.2528C13.045 15 13.5717 15 14.625 15H16.2861C16.4305 15 16.5027 15 16.569 14.9903C16.8173 14.9538 17.0393 14.8174 17.1824 14.6133C17.2206 14.5587 17.2527 14.4947 17.3167 14.3666C17.5791 13.8418 17.8189 13.3136 18.4004 13.0955C18.6551 13 18.946 13 19.5279 13C20.4361 13 20.8902 13 21.231 13.1902C21.4739 13.3257 21.6743 13.5261 21.8098 13.769C22 14.1098 22 14.5639 22 15.4721V17C22 19.357 22 20.5355 21.2678 21.2678C20.5355 22 19.357 22 17 22Z',
  d3: 'M19.3358 9H22C21.5 5 19 2.5 16 2',
  d4: 'M4.66416 15L2 15C2.5 19 5 21.5 8 22',
  d5: 'M19.5592 12.2499C19.0782 12.2493 18.5227 12.2486 18.137 12.3932C17.2937 12.7094 16.9252 13.4616 16.697 13.9274C16.6554 14.0349 16.5149 14.2499 16.2861 14.2499L14.5886 14.2499C14.093 14.2499 13.6657 14.2499 13.3168 14.2854C12.9469 14.323 12.5829 14.4067 12.25 14.6291C12.0043 14.7933 11.7933 15.0042 11.6292 15.2499C11.4067 15.5829 11.3231 15.9468 11.2854 16.3167C11.25 16.6656 11.25 17.169 11.25 17.6645C11.25 18.5087 11.25 19.1989 11.3065 19.7547C11.3652 20.3317 11.491 20.8465 11.7977 21.3055C12.0348 21.6604 12.3395 21.9651 12.6944 22.2022C13.1534 22.5089 13.6682 22.6347 14.2453 22.6934C14.8011 22.75 16.2095 22.75 17.0537 22.7499C18.1865 22.75 19.1123 22.75 19.8431 22.6517C20.6071 22.549 21.2694 22.3267 21.7981 21.798C22.3268 21.2693 22.5491 20.607 22.6518 19.8431C22.75 19.1122 22.75 18.1865 22.75 17.0537V17.0536V15.4408V15.4408C22.75 15.0134 22.75 14.6447 22.7233 14.3419C22.6951 14.0218 22.6327 13.7044 22.4648 13.4035C22.2614 13.0391 21.9608 12.7385 21.5965 12.5352C21.2955 12.3672 20.9782 12.3048 20.6581 12.2766C20.3552 12.2499 19.9866 12.2499 19.5592 12.2499Z',
  d6: 'M4.44084 1.24994C4.92177 1.24926 5.47726 1.24856 5.86297 1.3932C6.7063 1.70944 7.0748 2.46165 7.303 2.92745C7.34462 3.03495 7.48508 3.24994 7.71393 3.24994L9.41142 3.24994C9.90698 3.24992 10.3343 3.2499 10.6832 3.28539C11.0531 3.32303 11.4171 3.40667 11.75 3.62914C11.9957 3.79329 12.2067 4.00423 12.3708 4.24991C12.5933 4.58285 12.6769 4.9468 12.7146 5.31673C12.75 5.66561 12.75 6.16899 12.75 6.66455C12.75 7.50868 12.75 8.19888 12.6935 8.75469C12.6348 9.33171 12.509 9.84649 12.2023 10.3055C11.9652 10.6604 11.6605 10.9651 11.3056 11.2022C10.8466 11.5089 10.3318 11.6347 9.75475 11.6934C9.19892 11.75 7.79047 11.75 6.94631 11.7499C5.81348 11.75 4.88775 11.75 4.15689 11.6517C3.39294 11.549 2.7306 11.3267 2.2019 10.798C1.67321 10.2693 1.45093 9.60701 1.34822 8.84306C1.24996 8.1122 1.24998 7.18648 1.25 6.05366V6.05364V4.44078V4.44076C1.24998 4.01337 1.24997 3.64472 1.27667 3.34186C1.30488 3.02178 1.3673 2.70442 1.53524 2.40349C1.73857 2.03914 2.0392 1.73851 2.40355 1.53518C2.70448 1.36725 3.02184 1.30483 3.34192 1.27661C3.64478 1.24991 4.01345 1.24993 4.44084 1.24994Z',
  d7: 'M15.0136 1.83551C15.1044 1.29074 15.6196 0.922723 16.1644 1.01352C19.6569 1.59561 22.4448 4.49624 22.9923 8.87588C23.0279 9.16049 22.9395 9.44668 22.7497 9.66171C22.5599 9.87675 22.2868 9.99991 22 9.99991H19.3358C18.7836 9.99991 18.3358 9.5522 18.3358 8.99991C18.3358 8.91059 18.3476 8.82401 18.3695 8.74161C18.4144 8.5733 18.532 8.4375 18.6552 8.31432L20.3343 6.6352C19.3978 4.53496 17.6982 3.29674 15.8356 2.98631C15.2908 2.89551 14.9228 2.38028 15.0136 1.83551Z',
  d8: 'M1.25033 14.3381C1.44015 14.1231 1.71317 13.9999 2.00001 13.9999H4.66417C5.21646 13.9999 5.66417 14.4476 5.66417 14.9999C5.66417 15.1301 5.63928 15.2545 5.594 15.3686C5.544 15.4946 5.4517 15.5974 5.35586 15.6932L3.67149 17.3776C4.60921 19.47 6.30565 20.7037 8.1644 21.0135C8.70918 21.1043 9.07719 21.6195 8.9864 22.1643C8.8956 22.7091 8.38038 23.0771 7.83561 22.9863C4.34308 22.4042 1.55518 19.5036 1.00773 15.1239C0.972151 14.8393 1.0605 14.5531 1.25033 14.3381Z',
  d9: 'M15 2C19.9 2 22 4.8 22 9H19',
  d10: 'M9 22C4.1 22 2 19.2 2 15H5',
  d11: 'M5.48389 1.99609H2.1C2.04477 1.99609 2 2.04087 2 2.09609V10.8961C2 10.9513 2.04477 10.9961 2.1 10.9961H11.892C11.9473 10.9961 11.992 10.9513 11.992 10.8961V4.11172C11.992 4.05649 11.9473 4.01172 11.892 4.01172H6.99986L5.48389 1.99609Z',
  d12: 'M18.516 13H21.8999C21.9551 13 21.9999 13.0448 21.9999 13.1V21.9C21.9999 21.9552 21.9551 22 21.8999 22H12.1078C12.0526 22 12.0078 21.9552 12.0078 21.9V15.1156C12.0078 15.0604 12.0526 15.0156 12.1078 15.0156H17L18.516 13Z',
  d13: 'M7.375 3.24998H12C12.4142 3.24998 12.75 3.58577 12.75 3.99998V11C12.75 11.4142 12.4142 11.75 12 11.75L2 11.75C1.80109 11.75 1.61032 11.671 1.46967 11.5304C1.32902 11.3897 1.25 11.1989 1.25 11V2.00003C1.25 1.58582 1.58578 1.25003 1.99999 1.25003L5.875 1.25L7.375 3.24998Z',
  d14: 'M22 12.25C22.4142 12.25 22.75 12.5858 22.75 13V22C22.75 22.1989 22.671 22.3897 22.5303 22.5304C22.3897 22.671 22.1989 22.75 22 22.75L12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V15C11.25 14.5858 11.5858 14.25 12 14.25H16.625L18.125 12.25L22 12.25Z',
  d15: 'M20.7035 8.25C20.5621 6.79266 20.1005 5.65858 19.3547 4.85545C18.4587 3.89051 17.0094 3.25 14.75 3.25V1.25C17.3906 1.25 19.4413 2.00949 20.8203 3.49455C22.1868 4.96619 22.75 6.99671 22.75 9.25V10.25H18.75V8.25H20.7035Z',
  d16: 'M5.25 13.75H1.25V14.75C1.25 17.0033 1.81318 19.0338 3.17971 20.5055C4.55869 21.9905 6.6094 22.75 9.25 22.75V20.75C6.9906 20.75 5.54131 20.1095 4.64529 19.1445C3.89954 18.3414 3.43791 17.2073 3.29648 15.75H5.25V13.75Z',
};

export const IconFolderTransferStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-stroke-rounded IconFolderTransferStrokeRounded"
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

export const IconFolderTransferDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-duotone-rounded IconFolderTransferDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderTransferTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-twotone-rounded IconFolderTransferTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderTransferSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-solid-rounded IconFolderTransferSolidRounded"
    >
      <path 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderTransferBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-bulk-rounded IconFolderTransferBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderTransferStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-stroke-sharp IconFolderTransferStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderTransferSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-transfer-solid-sharp IconFolderTransferSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderTransfer: TheIconSelfPack = {
  name: 'FolderTransfer',
  StrokeRounded: IconFolderTransferStrokeRounded,
  DuotoneRounded: IconFolderTransferDuotoneRounded,
  TwotoneRounded: IconFolderTransferTwotoneRounded,
  SolidRounded: IconFolderTransferSolidRounded,
  BulkRounded: IconFolderTransferBulkRounded,
  StrokeSharp: IconFolderTransferStrokeSharp,
  SolidSharp: IconFolderTransferSolidSharp,
};