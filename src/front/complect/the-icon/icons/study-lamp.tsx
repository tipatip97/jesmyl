import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5619 9.22239L17.0356 10.15C16.5405 11.0225 16.293 11.4588 15.7539 11.4969C15.2147 11.535 14.9862 11.2231 14.5291 10.5994C14.019 9.90316 13.6959 9.08502 13.5814 8.22954C13.4744 7.43025 13.4209 7.03061 13.2914 6.83438C13.0847 6.52117 12.6695 6.34887 12.3591 6.16651C11.5417 5.68624 11.1329 5.4461 11.0256 5.03847C10.9183 4.63085 11.1542 4.21492 11.6262 3.38306C12.0982 2.5512 12.3342 2.13527 12.7347 2.02604C13.1353 1.91682 13.5441 2.15696 14.3615 2.63723C14.6719 2.81959 15.0262 3.09935 15.3961 3.12486C15.6278 3.14085 15.9947 2.98817 16.7284 2.68281C17.5137 2.35598 18.3715 2.23165 19.2191 2.33314C19.9785 2.42406 20.3582 2.46953 20.5953 2.96369C20.8325 3.45785 20.585 3.89411 20.0899 4.76664L19.5643 5.69311M17.5619 9.22239L17.9961 9.47749C18.9538 10.0402 20.1784 9.70625 20.7314 8.73166C21.2843 7.75708 20.9562 6.51088 19.9985 5.94821L19.5643 5.69311M17.5619 9.22239L19.5643 5.69311',
  d2: 'M7 13C7 14.1046 6.10457 15 5 15C3.89543 15 3 14.1046 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13Z',
  d3: 'M6 12L13 7',
  d4: 'M7 22H14',
  d5: 'M6 15L11 22',
  d6: 'M17.0356 10.15L17.5619 9.22239L19.5643 5.69311L20.0899 4.76664C20.5849 3.89411 20.8325 3.45785 20.5953 2.96369C20.3582 2.46953 19.9785 2.42406 19.2191 2.33314C18.3715 2.23165 17.5137 2.35598 16.7284 2.68281C15.9947 2.98817 15.6278 3.14085 15.3961 3.12486C15.0262 3.09935 14.6719 2.81959 14.3615 2.63723C13.5441 2.15696 13.1353 1.91682 12.7347 2.02604C12.3342 2.13527 12.0982 2.5512 11.6262 3.38306C11.1542 4.21492 10.9183 4.63085 11.0256 5.03847C11.1329 5.4461 11.5417 5.68624 12.3591 6.16651C12.6695 6.34887 13.0847 6.52117 13.2914 6.83438C13.4209 7.03061 13.4744 7.43025 13.5814 8.22954C13.6959 9.08502 14.019 9.90316 14.5291 10.5994C14.9862 11.2231 15.2147 11.535 15.7539 11.4969C16.293 11.4588 16.5405 11.0225 17.0356 10.15Z',
  d7: 'M15.3221 2.28352C15.4353 2.34713 15.4996 2.36813 15.5309 2.37444C15.5482 2.37072 15.6049 2.35834 15.7223 2.31656C15.9062 2.25109 16.1534 2.14682 16.5228 1.99049C17.4094 1.61526 18.3806 1.47136 19.3431 1.58856L19.3986 1.59528C19.7226 1.63446 20.0856 1.67836 20.3896 1.79739C20.7848 1.95209 21.0774 2.22357 21.2736 2.63931C21.4917 3.10138 21.4681 3.54263 21.3293 3.96242C21.2137 4.31197 21.0003 4.6942 20.7812 5.08667L20.7532 5.13685L17.7497 10.5202L17.7214 10.5709C17.5028 10.963 17.2894 11.3457 17.0541 11.6247C16.7707 11.9607 16.4068 12.2087 15.8999 12.2451C15.4451 12.2778 15.0687 12.1479 14.7437 11.8729C14.4936 11.6613 14.2768 11.3599 14.0818 11.0888L14.0486 11.0428C13.472 10.2426 13.109 9.30552 12.9805 8.32915C12.9267 7.92036 12.8903 7.6456 12.8529 7.44688C12.8267 7.30789 12.8071 7.25021 12.8026 7.23626C12.7812 7.20942 12.7304 7.16041 12.6161 7.08791L12.098 6.79054C11.7289 6.57006 11.3904 6.36792 11.1366 6.16522C10.8564 5.94144 10.5947 5.65295 10.4851 5.22956C10.3758 4.80735 10.4628 4.42498 10.5962 4.08908C10.7176 3.78344 10.9124 3.43431 11.1259 3.05174L11.1475 3.01306L11.1692 2.97406C11.3825 2.59172 11.5773 2.24241 11.7727 1.98048C11.9868 1.69325 12.2672 1.41841 12.685 1.30257C13.104 1.18638 13.4826 1.27963 13.8097 1.41876C14.1066 1.54505 14.4451 1.74735 14.8139 1.96775L15.3221 2.28352Z',
  d8: 'M21.4822 9.48042C21.8544 8.8193 21.8243 8.03319 21.4697 7.42025C21.36 7.23051 21.3051 7.13563 21.1885 7.13673C21.0719 7.13782 21.0115 7.24684 20.8908 7.46487L19.4951 9.98589C19.3786 10.1963 19.3203 10.3015 19.378 10.3999C19.4356 10.4982 19.5408 10.4987 19.7512 10.4996C20.4408 10.5025 21.1127 10.1368 21.4822 9.48042Z',
  d9: 'M2.25 13C2.25 11.4812 3.48122 10.25 5 10.25C6.51878 10.25 7.75 11.4812 7.75 13C7.75 14.5188 6.51878 15.75 5 15.75C3.48122 15.75 2.25 14.5188 2.25 13Z',
  d10: 'M13.8138 6.16884C14.1348 6.61825 14.0307 7.2428 13.5813 7.56381L6.58132 12.5638L5.41884 10.9363L12.4188 5.93634C12.8683 5.61534 13.4928 5.71943 13.8138 6.16884ZM5.41884 13.9363C5.86825 13.6153 6.4928 13.7194 6.81381 14.1688L11.5147 20.7501H14.0001C14.5524 20.7501 15.0001 21.1978 15.0001 21.7501C15.0001 22.3024 14.5524 22.7501 14.0001 22.7501H11.0134C11.0051 22.7502 10.9968 22.7502 10.9884 22.7501H7.00008C6.44779 22.7501 6.00008 22.3024 6.00008 21.7501C6.00008 21.1978 6.44779 20.7501 7.00008 20.7501H9.05689L5.18634 15.3313C4.86534 14.8819 4.96943 14.2574 5.41884 13.9363Z',
  d11: 'M11.6256 6.50342C11.7739 6.59658 11.9332 6.69173 12.0987 6.79056L12.6167 7.08793C12.7311 7.16044 12.7819 7.20944 12.8033 7.23629L12.8039 7.23814C12.8093 7.25491 12.8284 7.31339 12.8535 7.4469C12.8807 7.59115 12.9073 7.77547 12.9405 8.02205L7.51928 11.8943C7.23781 11.2542 6.71946 10.7417 6.0752 10.468L11.6256 6.50342ZM5.45898 15.7121L9.05754 20.7501H7.00073C6.44844 20.7501 6.00073 21.1978 6.00073 21.7501C6.00073 22.3024 6.44844 22.7501 7.00073 22.7501H10.9891C10.9974 22.7502 11.0057 22.7502 11.0141 22.7501H14.0007C14.553 22.7501 15.0007 22.3024 15.0007 21.7501C15.0007 21.1978 14.553 20.7501 14.0007 20.7501H11.5153L7.17886 14.679C6.76454 15.2158 6.15625 15.5951 5.45898 15.7121Z',
  d12: 'M17.5617 9.22239L15.998 12L13.998 6.5L11.0254 5.03848L12.498 2L15.498 3.5L20.998 3L19.5641 5.69311M17.5617 9.22239L17.9959 9.47749C18.9536 10.0402 20.1782 9.70625 20.7312 8.73166C21.2841 7.75708 20.956 6.51088 19.9983 5.94821L19.5641 5.69311M17.5617 9.22239L19.5641 5.69311',
  d13: 'M6 12L14 6.5',
  d14: 'M6 22H15',
  d15: 'M6 20.75H15V22.75H6V20.75Z',
  d16: 'M12.8356 1.32918C12.6562 1.23951 12.4484 1.22538 12.2586 1.28996C12.0688 1.35455 11.9127 1.49245 11.8253 1.67289L10.3526 4.71137C10.1727 5.08262 10.3264 5.5295 10.6966 5.71153L13.3984 7.03991L15.2953 12.2563C15.3954 12.5317 15.6467 12.7235 15.9388 12.7475C16.2308 12.7715 16.51 12.6232 16.6537 12.3679L17.8485 10.2455C19.1321 10.8458 20.6725 10.3587 21.3856 9.10177C22.102 7.83912 21.7359 6.23596 20.5623 5.41815L21.6622 3.35249C21.7917 3.10931 21.7774 2.8147 21.625 2.58517C21.4726 2.35564 21.2066 2.22814 20.9323 2.25308L15.6447 2.73376L12.8356 1.32918ZM18.5898 8.93054L19.8277 6.74878C20.2632 7.14492 20.388 7.81723 20.0792 8.36157C19.7706 8.90543 19.1402 9.12558 18.5898 8.93054Z',
  d17: 'M14.5667 7.32387L6.56665 12.8239L5.43359 11.1758L13.4336 5.67578L14.5667 7.32387Z',
  d18: 'M10.1855 22.5814L5.18555 15.5814L6.81301 14.4189L11.813 21.4189L10.1855 22.5814Z',
};

export const IconStudyLampStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-stroke-rounded IconStudyLampStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconStudyLampDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-duotone-rounded IconStudyLampDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconStudyLampTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-twotone-rounded IconStudyLampTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconStudyLampSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-solid-rounded IconStudyLampSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyLampBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-bulk-rounded IconStudyLampBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconStudyLampStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-stroke-sharp IconStudyLampStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStudyLampSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="study-lamp-solid-sharp IconStudyLampSolidSharp"
    >
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStudyLamp: TheIconSelfPack = {
  name: 'StudyLamp',
  StrokeRounded: IconStudyLampStrokeRounded,
  DuotoneRounded: IconStudyLampDuotoneRounded,
  TwotoneRounded: IconStudyLampTwotoneRounded,
  SolidRounded: IconStudyLampSolidRounded,
  BulkRounded: IconStudyLampBulkRounded,
  StrokeSharp: IconStudyLampStrokeSharp,
  SolidSharp: IconStudyLampSolidSharp,
};