import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.7292 11.9C20.0103 9.95968 20.1398 8.96204 19.7823 8.07444C19.4131 7.15801 18.5941 6.53099 16.956 5.27696L15.7322 4.34C13.6945 2.78 12.6756 2 11.5 2C10.3244 2 9.30555 2.78 7.26784 4.34L6.04397 5.27696C4.40592 6.53099 3.5869 7.15801 3.21774 8.07444C2.84858 8.99087 2.99862 10.0246 3.29868 12.0921L3.55456 13.8552C3.97994 16.786 4.19263 18.2515 5.18535 19.1257C6.17807 20 7.62938 20 10.532 20H11',
  d2: 'M13 16.4778C14.1488 15.5431 15.5209 15 16.9946 15C18.4729 15 19.849 15.5466 21 16.4866M19.1743 19C18.5182 18.5909 17.7779 18.3607 16.9946 18.3607C16.2152 18.3607 15.4784 18.5886 14.8248 18.9938',
  d3: 'M17 22H17.0064',
  d4: 'M3.29868 12.0921C2.99862 10.0246 2.84858 8.99087 3.21774 8.07444C3.5869 7.15801 4.40592 6.53099 6.04397 5.27696L7.26784 4.34C9.30555 2.78 10.3244 2 11.5 2C12.6756 2 13.6945 2.78 15.7322 4.34L16.956 5.27696C18.5941 6.53099 19.4131 7.15801 19.7823 8.07444C20.1514 8.99087 20.0014 10.0246 19.7013 12.0921L19.4454 13.8551C19.0201 16.786 18.8074 18.2515 17.8146 19.1257C16.8219 20 15.3706 20 12.468 20H10.532C7.62938 20 6.17807 20 5.18535 19.1257C4.19263 18.2515 3.97994 16.786 3.55456 13.8552L3.29868 12.0921Z',
  d5: 'M11.5 1.25C10.7273 1.25 10.0441 1.51244 9.32411 1.94023C8.62969 2.35284 7.83639 2.96017 6.8491 3.71603L5.55725 4.70503C4.76436 5.31202 4.12488 5.80157 3.64151 6.25567C3.13923 6.72754 2.76128 7.20036 2.52207 7.7942C2.28315 8.38732 2.22634 8.99266 2.25804 9.68588C2.28861 10.3544 2.40559 11.1604 2.55099 12.1621L2.81957 14.0126C3.02611 15.4358 3.19112 16.5729 3.43381 17.4596C3.68453 18.3758 4.04078 19.1171 4.68967 19.6886C5.34028 20.2616 6.11598 20.5149 7.0468 20.6346C7.94443 20.75 9.07286 20.75 10.4801 20.75H12.5198C12.5905 20.75 12.6258 20.75 12.6366 20.7488C12.791 20.7321 12.8632 20.6003 12.7942 20.4611C12.7894 20.4514 12.7657 20.4143 12.7183 20.3401C12.7122 20.3305 12.7061 20.3209 12.7001 20.3113C12.4848 19.9639 12.3648 19.5844 12.3331 19.2033C12.3199 19.0441 12.3132 18.9645 12.2804 18.9193C12.2477 18.8742 12.1741 18.8431 12.0269 18.7811C11.6619 18.6272 11.3282 18.3842 11.0608 18.0554C10.1894 16.9844 10.3513 15.4098 11.4224 14.5385C12.9643 13.2841 14.8817 12.5 16.9946 12.5C17.9858 12.5 18.9338 12.6725 19.8203 12.9851C20.0497 13.066 20.1644 13.1065 20.2453 13.0576C20.3262 13.0087 20.343 12.8924 20.3768 12.6597L20.449 12.162C20.5944 11.1603 20.7114 10.3544 20.742 9.68588C20.7737 8.99266 20.7169 8.38732 20.4779 7.7942C20.2387 7.20036 19.8608 6.72754 19.3585 6.25567C18.8751 5.80157 18.2357 5.31202 17.4428 4.70503L16.1509 3.71601C15.1636 2.96017 14.3703 2.35283 13.6759 1.94023C12.9559 1.51244 12.2727 1.25 11.5 1.25Z',
  d6: 'M12.369 15.702C13.6751 14.6395 15.2653 14 16.9946 14C18.7294 14 20.3241 14.6435 21.6326 15.7121C22.0603 16.0614 22.1239 16.6914 21.7746 17.1192C21.4252 17.5469 20.7952 17.6105 20.3675 17.2611C19.3738 16.4496 18.2165 16 16.9946 16C15.7765 16 14.6227 16.4468 13.6311 17.2535C13.2027 17.602 12.5728 17.5373 12.2243 17.1088C11.8758 16.6804 11.9405 16.0506 12.369 15.702ZM14.2978 18.144C15.0971 17.6484 16.0147 17.3607 16.9946 17.3607C17.9795 17.3607 18.9013 17.6513 19.7034 18.1515C20.1721 18.4437 20.3151 19.0605 20.0228 19.5291C19.7306 19.9978 19.1138 20.1408 18.6452 19.8485C18.1351 19.5304 17.5764 19.3607 16.9946 19.3607C16.4157 19.3607 15.8598 19.5288 15.3518 19.8437C14.8824 20.1348 14.2659 19.9902 13.9749 19.5208C13.6839 19.0514 13.8285 18.435 14.2978 18.144ZM16 22C16 21.4477 16.4477 21 17 21H17.0064C17.5587 21 18.0064 21.4477 18.0064 22C18.0064 22.5523 17.5587 23 17.0064 23H17C16.4477 23 16 22.5523 16 22Z',
  d7: 'M10.9997 20H4.99969L2.99902 8.5L11.501 2L19.999 8.5L19.3901 12',
  d8: 'M17.1139 13.75C15.3846 13.75 13.7944 14.3895 12.4883 15.452L13.7504 17.0035C14.742 16.1968 15.8958 15.75 17.1139 15.75C18.3358 15.75 19.4931 16.1996 20.4868 17.0111L21.7519 15.4621C20.4435 14.3935 18.8487 13.75 17.1139 13.75Z',
  d9: 'M17.1139 17.1107C16.134 17.1107 15.2165 17.3984 14.4172 17.894L15.4711 19.5937C15.9791 19.2788 16.535 19.1107 17.1139 19.1107C17.6957 19.1107 18.2544 19.2804 18.7645 19.5985L19.8227 17.9015C19.0207 17.4013 18.0988 17.1107 17.1139 17.1107Z',
  d10: 'M17.1211 20.75C16.5688 20.75 16.1211 21.1977 16.1211 21.75C16.1211 22.3023 16.5688 22.75 17.1211 22.75H17.1274C17.6797 22.75 18.1274 22.3023 18.1274 21.75C18.1274 21.1977 17.6797 20.75 17.1274 20.75H17.1211Z',
  d11: 'M11.9526 1.40418C11.6837 1.19857 11.3103 1.19861 11.0414 1.40428L2.54339 7.90428C2.32141 8.07407 2.21224 8.35321 2.26014 8.62855L4.2608 20.1285C4.3233 20.4878 4.63509 20.75 4.99971 20.75H14.3781L10.3779 15.2351L11.5415 14.2885C13.0834 13.0341 15.0008 12.25 17.1138 12.25C18.1345 12.25 19.1095 12.433 20.0186 12.7635L20.7379 8.62855C20.7859 8.35315 20.6766 8.07396 20.4546 7.90418L11.9526 1.40418Z',
};

export const IconHomeWifiStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-stroke-rounded IconHomeWifiStrokeRounded"
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

export const IconHomeWifiDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-duotone-rounded IconHomeWifiDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconHomeWifiTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-twotone-rounded IconHomeWifiTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHomeWifiSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-solid-rounded IconHomeWifiSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHomeWifiBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-bulk-rounded IconHomeWifiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHomeWifiStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-stroke-sharp IconHomeWifiStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconHomeWifiSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="home-wifi-solid-sharp IconHomeWifiSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfHomeWifi: TheIconSelfPack = {
  name: 'HomeWifi',
  StrokeRounded: IconHomeWifiStrokeRounded,
  DuotoneRounded: IconHomeWifiDuotoneRounded,
  TwotoneRounded: IconHomeWifiTwotoneRounded,
  SolidRounded: IconHomeWifiSolidRounded,
  BulkRounded: IconHomeWifiBulkRounded,
  StrokeSharp: IconHomeWifiStrokeSharp,
  SolidSharp: IconHomeWifiSolidSharp,
};