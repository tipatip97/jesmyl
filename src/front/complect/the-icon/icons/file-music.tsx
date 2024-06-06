import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.375 19.75C18.375 20.9926 17.3956 22 16.1875 22C14.9794 22 14 20.9926 14 19.75C14 18.5074 14.9794 17.5 16.1875 17.5C17.3956 17.5 18.375 18.5074 18.375 19.75ZM18.375 19.75V13C18.6667 13.45 18.9 15.34 21 15.7',
  d2: 'M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818L20 10.5',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.4206 22 15.746 22 16.0121 21.9929C14.886 21.901 14 20.9319 14 19.75C14 18.5074 14.9794 17.5 16.1875 17.5C17.3956 17.5 18.375 18.5074 18.375 19.75C18.375 20.8108 17.6613 21.7001 16.7009 21.9377C16.7278 21.9332 16.7543 21.9283 16.7804 21.9231C18.3671 21.6075 19.6075 20.3671 19.9231 18.7804C20 18.394 20 17.9293 20 17V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M17.9664 11.9161C18.3913 11.7905 18.8482 11.9594 19.0892 12.3312C19.1827 12.4755 19.2483 12.6333 19.2882 12.7323C19.3129 12.7938 19.391 12.9979 19.4199 13.0737C19.5085 13.3016 19.6041 13.5228 19.7332 13.7302C19.9707 14.1116 20.3288 14.4669 21.044 14.5895C21.5883 14.6828 21.9539 15.1997 21.8606 15.744C21.7673 16.2884 21.2504 16.654 20.706 16.5607C20.1254 16.4612 19.6461 16.268 19.25 16.0208V19.6251C19.25 21.3933 17.8493 22.8751 16.0625 22.8751C14.2757 22.8751 12.875 21.3933 12.875 19.6251C12.875 17.8569 14.2757 16.3751 16.0625 16.3751C16.4843 16.3751 16.8846 16.4577 17.25 16.6071V12.8751C17.25 12.432 17.5415 12.0418 17.9664 11.9161Z',
  d6: 'M6.81154 22.5222C7.79379 22.625 9.35661 22.625 10.8977 22.625C11.4375 22.625 11.875 22.1874 11.875 21.6477C11.875 21.108 11.4375 20.6704 10.8977 20.6704C9.28909 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V9.90127C18.6776 10.439 19.1136 10.875 19.6513 10.875C20.1891 10.875 20.625 10.439 20.625 9.90127V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d7: 'M2.99805 9.00195V21.992C2.99805 21.9975 3.00252 22.002 3.00805 22.002L10.9949 21.992M2.99805 9.00195H9.999V2.00195M2.99805 9.00195L9.999 2.00195M9.999 2.00195H19.9904C19.9959 2.00195 20.0004 2.00643 20.0004 2.01195V10.0128',
  d8: 'M18.3902 19.7515C18.3902 20.9954 17.4059 22.0038 16.1917 22.0038C14.9775 22.0038 13.9932 20.9954 13.9932 19.7515C13.9932 18.5075 14.9775 17.4991 16.1917 17.4991C17.4059 17.4991 18.3902 18.5075 18.3902 19.7515ZM18.3902 19.7515V13.0068H18.7985C19.0186 13.5032 19.6973 15.7068 20.9941 15.7068',
  d9: 'M20.1989 11.7531L20.4619 12.3457C20.5273 12.493 20.5884 12.6428 20.65 12.7939L20.65 12.7939C20.7958 13.1516 20.9446 13.5164 21.1604 13.8728C21.4794 14.3995 21.6849 14.4502 21.75 14.4502V16.4502C21.0591 16.4502 20.5257 16.1455 20.125 15.7669V19.5002C20.125 21.2684 18.7243 22.7502 16.9375 22.7502C15.1507 22.7502 13.75 21.2684 13.75 19.5002C13.75 17.732 15.1507 16.2502 16.9375 16.2502C17.3593 16.2502 17.7596 16.3328 18.125 16.4822V11.7476L20.1989 11.7531Z',
  d10: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H12.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
};

export const IconFileMusicStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-stroke-rounded IconFileMusicStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileMusicDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-duotone-rounded IconFileMusicDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileMusicTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-twotone-rounded IconFileMusicTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileMusicSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-solid-rounded IconFileMusicSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileMusicBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-bulk-rounded IconFileMusicBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileMusicStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-stroke-sharp IconFileMusicStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileMusicSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-music-solid-sharp IconFileMusicSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileMusic: TheIconSelfPack = {
  name: 'FileMusic',
  StrokeRounded: IconFileMusicStrokeRounded,
  DuotoneRounded: IconFileMusicDuotoneRounded,
  TwotoneRounded: IconFileMusicTwotoneRounded,
  SolidRounded: IconFileMusicSolidRounded,
  BulkRounded: IconFileMusicBulkRounded,
  StrokeSharp: IconFileMusicStrokeSharp,
  SolidSharp: IconFileMusicSolidSharp,
};