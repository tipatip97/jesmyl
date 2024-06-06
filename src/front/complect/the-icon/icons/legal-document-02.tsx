import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z',
  d2: 'M8 18H16',
  d3: 'M7.04941 6.97681H16.9569M12.0148 6.97681V13.9829M12.0148 13.9829H11.4817M12.0148 13.9829H12.5414M8.01555 7.96486C7.29005 8.71059 6.08766 9.99655 6.61359 11.0679C7.08068 12.0193 7.74498 12.0361 8.01512 12.0361C8.28525 12.0361 8.98805 12.0193 9.45514 11.0679C9.98108 9.99655 8.74104 8.71059 8.01555 7.96486ZM15.9824 7.96486C15.2569 8.71059 14.0545 9.99655 14.5804 11.0679C15.0475 12.0193 15.7118 12.0361 15.9819 12.0361C16.2521 12.0361 16.9549 12.0193 17.422 11.0679C17.9479 9.99655 16.7079 8.71059 15.9824 7.96486Z',
  d4: 'M3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10ZM8 12C8.82843 12 9.5 11.2837 9.5 10.4C9.5 9.51634 8 8 8 8C8 8 6.5 9.51634 6.5 10.4C6.5 11.2837 7.17157 12 8 12ZM16 12C16.8284 12 17.5 11.2837 17.5 10.4C17.5 9.51634 16 8 16 8C16 8 14.5 9.51634 14.5 10.4C14.5 11.2837 15.1716 12 16 12Z',
  d5: 'M7.03281 6.99707H16.9403M11.9982 6.99707V14.0032M11.9982 14.0032H11.4651M11.9982 14.0032H12.5248M7.99895 7.98512C7.27345 8.73085 6.07106 10.0168 6.59699 11.0882C7.06408 12.0396 7.72838 12.0564 7.99852 12.0564C8.26865 12.0564 8.97145 12.0396 9.43854 11.0882C9.96448 10.0168 8.72444 8.73085 7.99895 7.98512ZM15.9658 7.98512C15.2403 8.73085 14.0379 10.0168 14.5638 11.0882C15.0309 12.0396 15.6952 12.0564 15.9653 12.0564C16.2355 12.0564 16.9383 12.0396 17.4054 11.0882C17.9313 10.0168 16.6913 8.73085 15.9658 7.98512Z',
  d6: 'M13.0564 1.25C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.1058 21.75 9.94354V9.94359V14.0564V14.0565C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0565 22.75H13.0564H10.9436H10.9435C9.1058 22.75 7.65018 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V14.0564V9.94358V9.94357C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25H10.9436H13.0564H13.0564ZM6.25 6.75C6.25 6.33579 6.58579 6 7 6H17C17.4142 6 17.75 6.33579 17.75 6.75C17.75 7.16421 17.4142 7.5 17 7.5H16.7927C16.9422 7.66582 17.1429 7.89818 17.3454 8.16255C17.5465 8.42503 17.7612 8.73441 17.9289 9.05211C18.087 9.3516 18.25 9.74388 18.25 10.15C18.25 11.4015 17.2875 12.5 16 12.5C14.7125 12.5 13.75 11.4015 13.75 10.15C13.75 9.74388 13.913 9.3516 14.0711 9.05211C14.2388 8.73441 14.4535 8.42503 14.6546 8.16255C14.8571 7.89818 15.0578 7.66582 15.2073 7.5H12.75V13.0427C13.0413 13.1456 13.25 13.4234 13.25 13.75C13.25 14.1642 12.9142 14.5 12.5 14.5H11.5C11.0858 14.5 10.75 14.1642 10.75 13.75C10.75 13.4234 10.9587 13.1456 11.25 13.0427V7.5H8.79274C8.94219 7.66582 9.14288 7.89818 9.34539 8.16255C9.54646 8.42503 9.76121 8.73441 9.9289 9.05211C10.087 9.3516 10.25 9.74388 10.25 10.15C10.25 11.4015 9.2875 12.5 8 12.5C6.7125 12.5 5.75 11.4015 5.75 10.15C5.75 9.74388 5.91302 9.3516 6.0711 9.05211C6.23879 8.73441 6.45354 8.42503 6.65461 8.16255C6.85712 7.89818 7.05781 7.66582 7.20726 7.5H7C6.58579 7.5 6.25 7.16421 6.25 6.75ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z',
  d7: 'M13.0564 1.25C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.1058 21.75 9.94354V9.94359V14.0564V14.0565C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0565 22.75H13.0564H10.9436H10.9435C9.1058 22.75 7.65018 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V14.0564V9.94358V9.94357C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25H10.9436H13.0564H13.0564Z',
  d8: 'M6.25 6.75C6.25 6.33579 6.58579 6 7 6H17C17.4142 6 17.75 6.33579 17.75 6.75C17.75 7.16421 17.4142 7.5 17 7.5H16.7927C16.9422 7.66582 17.1429 7.89818 17.3454 8.16255C17.5465 8.42503 17.7612 8.73441 17.9289 9.05211C18.087 9.3516 18.25 9.74388 18.25 10.15C18.25 11.4015 17.2875 12.5 16 12.5C14.7125 12.5 13.75 11.4015 13.75 10.15C13.75 9.74388 13.913 9.3516 14.0711 9.05211C14.2388 8.73441 14.4535 8.42503 14.6546 8.16255C14.8571 7.89818 15.0578 7.66582 15.2073 7.5H12.75V13.0427C13.0413 13.1456 13.25 13.4234 13.25 13.75C13.25 14.1642 12.9142 14.5 12.5 14.5H11.5C11.0858 14.5 10.75 14.1642 10.75 13.75C10.75 13.4234 10.9587 13.1456 11.25 13.0427V7.5H8.79274C8.94219 7.66582 9.14288 7.89818 9.34539 8.16255C9.54646 8.42503 9.76121 8.73441 9.9289 9.05211C10.087 9.3516 10.25 9.74388 10.25 10.15C10.25 11.4015 9.2875 12.5 8 12.5C6.7125 12.5 5.75 11.4015 5.75 10.15C5.75 9.74388 5.91302 9.3516 6.0711 9.05211C6.23879 8.73441 6.45354 8.42503 6.65461 8.16255C6.85712 7.89818 7.05781 7.66582 7.20726 7.5H7C6.58579 7.5 6.25 7.16421 6.25 6.75Z',
  d9: 'M7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z',
  d10: 'M3 2V22H21V2H3Z',
  d11: 'M8 17H16',
  d12: 'M5.99219 7.01173H11.9854M11.9854 7.01173H17.9985M11.9854 7.01173V13.999M11.9854 13.999H13.9915M11.9854 13.999H10.0057M15.9816 7.33215C15.4361 8.11289 14.4036 9.29122 14.5156 10.1692C14.5371 10.3377 14.5952 10.5011 14.6685 10.6543C14.8995 11.137 15.5163 11.7293 16.6315 11.3647C17.0099 11.1587 17.7062 10.512 17.464 9.57357C17.2555 8.76588 16.0749 7.76281 15.8574 7.01121C15.8288 6.91238 16.0406 7.24781 15.9816 7.33215ZM8.23247 7.01179C7.71824 7.74778 6.57808 9.07379 6.51076 9.99827C6.4902 10.2806 6.58953 10.5634 6.74008 10.8032C7.01894 11.2471 7.61862 11.6924 8.62089 11.3647C8.9993 11.1587 9.69558 10.512 9.4534 9.57357C9.24496 8.76588 8.44999 8.13957 8.23247 7.38797C8.20387 7.28913 8.2914 6.92744 8.23247 7.01179Z',
  d13: 'M2.46967 1.46967C2.61032 1.32902 2.80109 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V2C2.25 1.80109 2.32902 1.61032 2.46967 1.46967ZM6.78193 7.75H6V6.25H18V7.75H17.2181C17.2601 7.80255 17.3027 7.85684 17.3454 7.91255C17.5465 8.17503 17.7612 8.48441 17.9289 8.80211C18.087 9.1016 18.25 9.49388 18.25 9.9C18.25 11.1515 17.2875 12.25 16 12.25C14.7125 12.25 13.75 11.1515 13.75 9.9C13.75 9.49388 13.913 9.1016 14.0711 8.80211C14.2388 8.48441 14.4535 8.17503 14.6546 7.91255C14.6973 7.85684 14.7399 7.80255 14.7819 7.75H12.75V13.25H14V14.75H10V13.25H11.25V7.75H9.21807C9.26012 7.80255 9.30271 7.85684 9.34539 7.91255C9.54646 8.17503 9.76121 8.48441 9.9289 8.80211C10.087 9.1016 10.25 9.49388 10.25 9.9C10.25 11.1515 9.2875 12.25 8 12.25C6.7125 12.25 5.75 11.1515 5.75 9.9C5.75 9.49388 5.91302 9.1016 6.0711 8.80211C6.23879 8.48441 6.45354 8.17503 6.65461 7.91255C6.69729 7.85684 6.73988 7.80255 6.78193 7.75ZM8 17.75H16V16.25H8V17.75Z',
};

export const IconLegalDocument02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-stroke-rounded IconLegalDocument02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconLegalDocument02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-duotone-rounded IconLegalDocument02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-twotone-rounded IconLegalDocument02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-solid-rounded IconLegalDocument02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-bulk-rounded IconLegalDocument02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-stroke-sharp IconLegalDocument02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-02-solid-sharp IconLegalDocument02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLegalDocument02: TheIconSelfPack = {
  name: 'LegalDocument02',
  StrokeRounded: IconLegalDocument02StrokeRounded,
  DuotoneRounded: IconLegalDocument02DuotoneRounded,
  TwotoneRounded: IconLegalDocument02TwotoneRounded,
  SolidRounded: IconLegalDocument02SolidRounded,
  BulkRounded: IconLegalDocument02BulkRounded,
  StrokeSharp: IconLegalDocument02StrokeSharp,
  SolidSharp: IconLegalDocument02SolidSharp,
};