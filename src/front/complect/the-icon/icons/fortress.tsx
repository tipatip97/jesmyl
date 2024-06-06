import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.02218 20.9844V3.99916C3.02218 3.52819 3.02218 3.29271 3.16836 3.14638C3.31454 3.00007 3.54981 3.00005 4.02034 3.00003L4.70683 3C5.00629 2.99999 5.02158 3.01194 5.09421 3.30273L5.44209 4.69552C5.51472 4.98629 5.53001 4.99825 5.82946 4.99825H7.20237C7.50181 4.99825 7.51711 4.98629 7.58974 4.69552L7.93761 3.3028C8.01024 3.01203 8.02553 3.00008 8.32498 3.00008H9.01143C9.48199 3.00008 9.71728 3.00008 9.86346 3.1464C10.0096 3.29272 10.0096 3.52821 10.0096 3.99921V7.99573C10.0096 8.46672 10.0096 8.70223 10.1558 8.84854C10.302 8.99486 10.5373 8.99486 11.0079 8.99486H13.0043C13.4748 8.99486 13.7101 8.99486 13.8563 8.84854C14.0025 8.70223 14.0025 8.46672 14.0025 7.99573V3.99921C14.0025 3.52821 14.0025 3.29272 14.1486 3.1464C14.2949 3.00008 14.5301 3.00008 15.0007 3.00008H15.6872C15.9866 3.00008 16.0019 3.01203 16.0745 3.3028L16.4224 4.69552C16.495 4.9863 16.5103 4.99825 16.8097 4.99825H18.1827C18.4821 4.99825 18.4974 4.98629 18.57 4.69552L18.9179 3.30273C18.9905 3.01194 19.0058 2.99999 19.3053 3L19.9917 3.00003C20.4623 3.00005 20.6976 3.00007 20.8438 3.14638C20.9899 3.29271 20.9899 3.52819 20.9899 3.99916V20.9844M7.01502 8.99478H6.01681M12.5052 11.9922H11.507M17.9953 8.99478H16.9971M2 21H9.03398V17.6948C9.03398 16.8635 9.82619 15.0052 12.0022 15.0052C14.1781 15.0052 14.966 16.8635 14.966 17.6948V21H22',
  d2: 'M3 4.00003V21.0001L9 21C9 18.5 8.5 15 12 15C15.5 15 15 18 15 21L21 21.0001V4.00003C21 3.52865 21 3.29296 20.8536 3.14651C20.7071 3.00007 20.4714 3.00005 20 3.00003L19.3123 3C19.0123 2.99999 18.997 3.01195 18.9242 3.30299L18.5757 4.697C18.503 4.98802 18.4877 4.99999 18.1877 4.99999H16.8123C16.5123 4.99999 16.497 4.98803 16.4243 4.697L16.0757 3.30306C16.003 3.01204 15.9877 3.00008 15.6877 3.00008L15 3.00008C14.5286 3.00008 14.2929 3.00008 14.1464 3.14653C14 3.29297 14 3.52867 14 4.00008V8.00008C14 8.47148 14 8.70719 13.8536 8.85363C13.7071 9.00008 13.4714 9.00008 13 9.00008H11C10.5286 9.00008 10.2929 9.00008 10.1464 8.85363C10 8.70719 10 8.47148 10 8.00008V4.00008C10 3.52867 10 3.29297 9.85355 3.14653C9.70711 3.00008 9.4714 3.00008 9 3.00008L8.31231 3.00008C8.01233 3.00008 7.99701 3.01204 7.92425 3.30306L7.57575 4.697C7.50299 4.98802 7.48767 4.99999 7.18769 4.99999H5.81231C5.51233 4.99999 5.49701 4.98802 5.42425 4.697L5.07575 3.30299C5.00299 3.01195 4.98767 2.99999 4.68767 3L3.99995 3.00003C3.52857 3.00005 3.29288 3.00007 3.14644 3.14651C3 3.29296 3 3.52865 3 4.00003Z',
  d3: 'M2 21H8C8.4714 21 8.70711 21 8.85355 20.8536C9 20.7071 9 20.4714 9 20V18C9 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18V20C15 20.4714 15 20.7071 15.1464 20.8536C15.2929 21 15.5286 21 16 21H22',
  d4: 'M3 21.0001V4.00003C3 3.52865 3 3.29296 3.14644 3.14651C3.29288 3.00007 3.52857 3.00005 3.99995 3.00003L4.68767 3C4.98767 2.99999 5.00299 3.01195 5.07575 3.30299L5.42425 4.697C5.49701 4.98802 5.51233 4.99999 5.81231 4.99999H7.18769C7.48767 4.99999 7.50299 4.98802 7.57575 4.697L7.92425 3.30306C7.99701 3.01204 8.01233 3.00008 8.31231 3.00008L9 3.00008C9.4714 3.00008 9.70711 3.00008 9.85355 3.14653C10 3.29297 10 3.52867 10 4.00008V8.00008C10 8.47148 10 8.70719 10.1464 8.85363C10.2929 9.00008 10.5286 9.00008 11 9.00008H13C13.4714 9.00008 13.7071 9.00008 13.8536 8.85363C14 8.70719 14 8.47148 14 8.00008V4.00008C14 3.52867 14 3.29297 14.1464 3.14653C14.2929 3.00008 14.5286 3.00008 15 3.00008L15.6877 3.00008C15.9877 3.00008 16.003 3.01204 16.0757 3.30306L16.4243 4.697C16.497 4.98803 16.5123 4.99999 16.8123 4.99999H18.1877C18.4877 4.99999 18.503 4.98802 18.5757 4.697L18.9242 3.30299C18.997 3.01195 19.0123 2.99999 19.3123 3L20 3.00003C20.4714 3.00005 20.7071 3.00007 20.8536 3.14651C21 3.29296 21 3.52865 21 4.00003V21.0001',
  d5: 'M7 9H6',
  d6: 'M12.5 12H11.5',
  d7: 'M18 9H17',
  d8: 'M12 16C10.8954 16 10 16.8954 10 18V20L10 20.0394V20.0394C10.0001 20.2393 10.0003 20.4772 9.97278 20.6819C9.93956 20.9289 9.85065 21.2707 9.56066 21.5607C9.27067 21.8507 8.92893 21.9396 8.68188 21.9728C8.47723 22.0003 8.23927 22.0001 8.0394 22L8.03938 22L8 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H2.25001L2.25021 3.96559C2.25013 3.76048 2.25004 3.5387 2.27521 3.35149C2.3047 3.13217 2.38053 2.85199 2.61631 2.61619C2.8521 2.3804 3.13228 2.30455 3.35159 2.27506C3.53879 2.24988 3.7606 2.24996 3.96569 2.25003L4.69229 2.25C4.75824 2.24999 4.86133 2.24998 4.95906 2.26235C5.06738 2.27606 5.25235 2.31351 5.42869 2.45119C5.60503 2.58886 5.68623 2.75922 5.72581 2.86098C5.76152 2.95279 5.78651 3.0528 5.8025 3.11678L6.0858 4.24999H6.91464L7.19794 3.11685C7.21393 3.05287 7.23892 2.95286 7.27463 2.86106C7.31421 2.7593 7.3954 2.58895 7.57173 2.45128C7.74806 2.31361 7.93302 2.27616 8.04133 2.26244C8.13906 2.25006 8.24214 2.25007 8.30809 2.25008L9.03469 2.25007C9.2398 2.24999 9.46158 2.2499 9.64879 2.27507C9.86811 2.30456 10.1483 2.3804 10.3841 2.6162C10.6199 2.852 10.6957 3.13218 10.7252 3.35151C10.7504 3.53872 10.7503 3.76052 10.7502 3.96563L10.7502 8.00008V8.0024C10.7502 8.12624 10.7502 8.18816 10.7812 8.21912C10.8121 8.25008 10.8741 8.25008 10.9979 8.25008H11.0002H13.0002H13.0025C13.1264 8.25008 13.1883 8.25008 13.2193 8.21912C13.2502 8.18816 13.2502 8.12624 13.2502 8.0024V8.00008L13.2502 3.96561C13.2501 3.7605 13.25 3.53872 13.2752 3.35151C13.3047 3.13218 13.3805 2.852 13.6163 2.6162C13.8521 2.3804 14.1323 2.30456 14.3516 2.27507C14.5389 2.2499 14.7607 2.24999 14.9658 2.25007L15.6923 2.25008C15.7583 2.25007 15.8614 2.25006 15.9591 2.26244C16.0674 2.27616 16.2524 2.31361 16.4287 2.45128C16.605 2.58895 16.6862 2.7593 16.7258 2.86106C16.7615 2.95281 16.7865 3.05287 16.8025 3.11686L17.0858 4.24999H17.9146L18.1979 3.11674C18.2139 3.05277 18.2389 2.95277 18.2746 2.86098C18.3142 2.75922 18.3954 2.58887 18.5717 2.45119C18.7481 2.31351 18.933 2.27607 19.0414 2.26235C19.1391 2.24998 19.2422 2.24999 19.3081 2.25L20.0348 2.25003C20.2399 2.24996 20.4616 2.24988 20.6488 2.27506C20.8682 2.30455 21.1483 2.3804 21.3841 2.61619C21.6199 2.85199 21.6957 3.13217 21.7252 3.35149C21.7504 3.5387 21.7503 3.76048 21.7502 3.96559L21.7502 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H16L15.9606 22L15.9606 22C15.7607 22.0001 15.5228 22.0003 15.3181 21.9728C15.0711 21.9396 14.7293 21.8507 14.4393 21.5607C14.1493 21.2707 14.0604 20.9289 14.0272 20.6819C13.9997 20.4772 13.9999 20.2393 14 20.0394V20.0394L14 20V18C14 16.8954 13.1046 16 12 16ZM10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12ZM5 9C5 8.44771 5.44772 8 6 8H7C7.55228 8 8 8.44771 8 9C8 9.55228 7.55228 10 7 10H6C5.44772 10 5 9.55228 5 9ZM17 8C16.4477 8 16 8.44771 16 9C16 9.55228 16.4477 10 17 10H18C18.5523 10 19 9.55228 19 9C19 8.44771 18.5523 8 18 8H17Z',
  d9: 'M13.2502 8.00008C13.2502 8.25086 13.251 8.25008 13.0002 8.25008H11.0002C10.7494 8.25008 10.7502 8.25086 10.7502 8.00008L10.7502 3.96563C10.7503 3.76052 10.7504 3.53873 10.7252 3.35151C10.6957 3.13218 10.6199 2.852 10.3841 2.6162C10.1483 2.3804 9.86811 2.30456 9.64879 2.27507C9.46158 2.24991 9.2398 2.24999 9.03469 2.25007L8.30809 2.25008C8.24214 2.25007 8.13906 2.25006 8.04133 2.26244C7.93302 2.27616 7.74806 2.31361 7.57173 2.45128C7.3954 2.58896 7.31421 2.7593 7.27463 2.86106C7.23892 2.95286 7.21393 3.05287 7.19794 3.11685L6.91464 4.24999H6.0858L5.8025 3.11678C5.78651 3.0528 5.76152 2.95279 5.72581 2.86098C5.68623 2.75922 5.60503 2.58886 5.42869 2.45119C5.25235 2.31351 5.06738 2.27606 4.95906 2.26235C4.86133 2.24998 4.75824 2.24999 4.69229 2.25L3.96569 2.25003C3.7606 2.24996 3.53879 2.24988 3.35159 2.27506C3.13228 2.30455 2.8521 2.3804 2.61631 2.61619C2.38053 2.85199 2.3047 3.13217 2.27521 3.35149C2.25004 3.5387 2.25013 3.76048 2.25021 3.96559L2.25 21.0001C2.25 21.199 2.32901 21.3898 2.46967 21.5304C2.61032 21.6711 2.80109 21.7501 3 21.7501L8.03466 21.7501C8.23978 21.7502 8.46157 21.7503 8.64879 21.7251C8.86811 21.6956 9.1483 21.6198 9.3841 21.384C9.6199 21.1482 9.69574 20.868 9.72522 20.6487C9.75039 20.4614 9.75031 20.2396 9.75023 20.0345L9.75022 18.0001C9.75022 16.7574 10.7576 15.7501 12.0002 15.7501C13.2429 15.7501 14.2502 16.7574 14.2502 18.0001L14.2502 20.0345C14.2501 20.2396 14.25 20.4614 14.2752 20.6487C14.3047 20.868 14.3805 21.1482 14.6163 21.384C14.8521 21.6198 15.1323 21.6956 15.3516 21.7251C15.5389 21.7503 15.7607 21.7502 15.9658 21.7501L21.0002 21.7501C21.4144 21.7501 21.7502 21.4143 21.7502 21.0001L21.7502 3.96559C21.7503 3.76049 21.7504 3.5387 21.7252 3.35149C21.6957 3.13217 21.6199 2.85199 21.3841 2.61619C21.1483 2.3804 20.8682 2.30455 20.6488 2.27506C20.4616 2.24988 20.2399 2.24996 20.0348 2.25003L19.3081 2.25C19.2422 2.24999 19.1391 2.24998 19.0414 2.26235C18.933 2.27607 18.7481 2.31351 18.5717 2.45119C18.3954 2.58887 18.3142 2.75922 18.2746 2.86098C18.2389 2.95277 18.2139 3.05277 18.1979 3.11674L17.9146 4.24999H17.0858L16.8025 3.11686C16.7865 3.05288 16.7615 2.95285 16.7258 2.86106C16.6862 2.7593 16.605 2.58895 16.4287 2.45128C16.2524 2.31361 16.0674 2.27616 15.9591 2.26244C15.8614 2.25006 15.7583 2.25007 15.6923 2.25008L14.9658 2.25007C14.7607 2.24999 14.5389 2.24991 14.3516 2.27507C14.1323 2.30456 13.8521 2.3804 13.6163 2.6162C13.3805 2.852 13.3047 3.13219 13.2752 3.35151C13.25 3.53872 13.2501 3.7605 13.2502 3.96561L13.2502 8.00008Z',
  d10: 'M12 16C10.8954 16 10 16.8954 10 18V20C10 20.2074 10.0021 20.4636 9.97278 20.6819C9.93956 20.9289 9.85065 21.2707 9.56066 21.5607C9.27067 21.8507 8.92893 21.9396 8.68188 21.9728C8.46361 22.0021 8.20743 22 8 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H7.6C7.78856 20 7.88284 20 7.94142 19.9414C8 19.8828 8 19.7886 8 19.6V18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18V19.6C16 19.7886 16 19.8828 16.0586 19.9414C16.1172 20 16.2114 20 16.4 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H16C15.7926 22 15.5364 22.0021 15.3181 21.9728C15.0711 21.9396 14.7293 21.8507 14.4393 21.5607C14.1493 21.2707 14.0604 20.9289 14.0272 20.6819C13.9979 20.4636 14 20.2074 14 20V18C14 16.8954 13.1046 16 12 16Z',
  d11: 'M5 9C5 8.44772 5.44772 8 6 8H7C7.55228 8 8 8.44772 8 9C8 9.55228 7.55228 10 7 10H6C5.44772 10 5 9.55228 5 9Z',
  d12: 'M10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12Z',
  d13: 'M16 9C16 8.44772 16.4477 8 17 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H17C16.4477 10 16 9.55228 16 9Z',
  d14: 'M1 20.9811H9V17.9842C9 16.329 10.3431 14.9873 12 14.9873C13.6569 14.9873 15 16.329 15 17.9842V20.9811H23',
  d15: 'M7.5 8.99316H5.5',
  d16: 'M13 11.9995H11',
  d17: 'M18.5 8.99951H16.5',
  d18: 'M3.01953 20.9928L3.01955 3.01145C3.01955 3.00594 3.02402 3.00146 3.02955 3.00146H5.00731L5.50124 4.99919H7.51309L8.00426 3.00146H9.99486C10.0004 3.00146 10.0049 3.00594 10.0049 3.01145V8.97262C10.0049 8.97813 10.0093 8.98261 10.0149 8.98261H14.0254C14.031 8.98261 14.0355 8.97808 14.0354 8.97253L13.9831 3.01154C13.9831 3.00599 13.9876 3.00146 13.9931 3.00146H16.0022L16.5004 4.98343H18.5012L18.9972 3.00657H20.9832C20.9887 3.00657 20.9932 3.01104 20.9932 3.01656V20.9985',
  d19: 'M21.75 3C21.75 2.58579 21.4142 2.25 21 2.25H19L18.5 4.24992H16.5L16 2.25002L14 2.25002C13.5858 2.25002 13.25 2.5858 13.25 3.00002V8.25002L10.75 8.25003V3.00004C10.75 2.58582 10.4142 2.25004 10 2.25004H8L7.5 4.24994H5.5L5 2.25002H3C2.58579 2.25002 2.25 2.58581 2.25 3.00002L2.25 20H1L1 21.7499H9.75V17.9999C9.75 16.7573 10.7574 15.7499 12 15.7499C13.2426 15.7499 14.25 16.7573 14.25 17.9999V21.7499L23 21.7499V20H21.75L21.75 3ZM7.5 8.25H5.5V9.75H7.5V8.25ZM13 11.25V12.75H11V11.25H13ZM18.5 8.25H16.5V9.75H18.5V8.25Z',
};

export const IconFortressStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-stroke-rounded IconFortressStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFortressDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-duotone-rounded IconFortressDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconFortressTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-twotone-rounded IconFortressTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFortressSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-solid-rounded IconFortressSolidRounded"
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

export const IconFortressBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-bulk-rounded IconFortressBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconFortressStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-stroke-sharp IconFortressStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFortressSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fortress-solid-sharp IconFortressSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFortress: TheIconSelfPack = {
  name: 'Fortress',
  StrokeRounded: IconFortressStrokeRounded,
  DuotoneRounded: IconFortressDuotoneRounded,
  TwotoneRounded: IconFortressTwotoneRounded,
  SolidRounded: IconFortressSolidRounded,
  BulkRounded: IconFortressBulkRounded,
  StrokeSharp: IconFortressStrokeSharp,
  SolidSharp: IconFortressSolidSharp,
};