import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 4.5L8.91302 8.42462C11.4387 9.85846 12.5613 9.85846 15.087 8.42462L22 4.5',
  d2: 'M21.9982 9.99608C21.9958 9.67139 21.9912 9.34649 21.9842 9.02095C21.9189 5.95692 21.8862 4.4249 20.7551 3.29003C19.6239 2.15515 18.0497 2.11562 14.9012 2.03655C12.9607 1.98782 11.0393 1.98782 9.09882 2.03654C5.95033 2.1156 4.37608 2.15513 3.24495 3.29002C2.11382 4.42489 2.08114 5.95691 2.01576 9.02093C1.99474 10.0062 1.99475 10.9855 2.01577 11.9707C2.08114 15.0348 2.11383 16.5668 3.24496 17.7017C4.37608 18.8365 5.95033 18.876 9.09883 18.9551C9.90159 18.9753 10.7011 18.9871 11.5 18.9906',
  d3: 'M14.4863 17.9689C15.098 19.0055 16.3263 19.9754 18.0017 19.9754C19.6771 19.9754 20.9102 19.0055 21.5218 17.9689M18.0117 20.1349L18.0117 22M17.9894 17.1191C16.9829 17.1191 16.167 16.3036 16.167 15.2976V13.8181C16.167 12.8121 16.9829 11.9966 17.9894 11.9966C18.9959 11.9966 19.8118 12.8121 19.8118 13.8181V15.2976C19.8118 16.3036 18.9959 17.1191 17.9894 17.1191Z',
  d4: 'M14.9022 19.223C12.9617 19.2701 11.0403 19.2701 9.09981 19.223C5.95131 19.1467 4.37706 19.1085 3.24594 18.0122C2.11481 16.9159 2.08212 15.436 2.01675 12.4762C1.99573 11.5245 1.99572 10.5784 2.01674 9.62667C2.06178 7.58771 2.0913 6.25105 2.47509 5.2583L12.001 10.0859L21.5269 5.2583C21.9107 6.25105 21.9402 7.58772 21.9852 9.62668C22.0063 10.5784 22.0063 11.5245 21.9852 12.4762C21.9199 15.436 21.8872 16.9159 20.756 18.0122C19.6249 19.1085 18.0507 19.1467 14.9022 19.223ZM18.0012 12.2227C16.99 12.2227 16.1702 13.0655 16.1702 14.1051V15.4874C16.1702 16.527 16.99 17.3698 18.0012 17.3698C19.0125 17.3698 19.8323 16.527 19.8323 15.4874V14.1051C19.8323 13.0655 19.0125 12.2227 18.0012 12.2227Z',
  d5: 'M21.9992 10.2227C21.9968 9.89781 21.9922 9.57275 21.9852 9.24705C21.9199 6.18152 21.8872 4.64875 20.7561 3.51332C19.6249 2.37789 18.0507 2.33834 14.9022 2.25923C12.9617 2.21047 11.0403 2.21047 9.0998 2.25922C5.95131 2.33832 4.37706 2.37787 3.24593 3.51331C2.1148 4.64874 2.08212 6.18151 2.01674 9.24704C1.99572 10.2328 1.99573 11.2126 2.01675 12.1983C2.08212 15.2639 2.11481 16.7966 3.24594 17.9321C4.37706 19.0675 5.95131 19.107 9.09981 19.1861C9.90257 19.2063 10.7021 19.2181 11.501 19.2216',
  d6: 'M14.4834 18.1935C15.0951 19.2301 16.3234 20.2 17.9988 20.2C19.6742 20.2 20.9073 19.2301 21.5189 18.1935M18.0088 20.3595V22.2246M17.9865 17.3437C16.98 17.3437 16.1641 16.5282 16.1641 15.5222V14.0427C16.1641 13.0367 16.98 12.2212 17.9865 12.2212C18.993 12.2212 19.8089 13.0367 19.8089 14.0427V15.5222C19.8089 16.5282 18.993 17.3437 17.9865 17.3437Z',
  d7: 'M2.00098 4.72266L8.914 8.64728C11.4397 10.0811 12.5623 10.0811 15.088 8.64728L22.001 4.72266',
  d8: 'M21.9982 10C21.9958 9.67515 21.9912 9.35009 21.9842 9.02439C21.9189 5.95886 21.8862 4.42609 20.7551 3.29066C19.6239 2.15523 18.0497 2.11568 14.9012 2.03657C12.9607 1.98781 11.0393 1.98781 9.09882 2.03656C5.95033 2.11566 4.37608 2.15521 3.24495 3.29065C2.11382 4.42608 2.08114 5.95885 2.01576 9.02438C1.99474 10.0101 1.99475 10.9899 2.01577 11.9756C2.08114 15.0412 2.11383 16.5739 3.24496 17.7094C4.37608 18.8448 5.95033 18.8843 9.09883 18.9634C9.90159 18.9836 10.7011 18.9954 11.5 18.9989',
  d9: 'M14.4863 17.9689C15.0949 19.0055 16.317 19.9754 17.984 19.9754C19.6509 19.9754 20.8778 19.0055 21.4863 17.9689M17.9939 20.1349L17.9939 22M17.9717 17.1191C16.9703 17.1191 16.1585 16.3036 16.1585 15.2976V13.8181C16.1585 12.8121 16.9703 11.9966 17.9717 11.9966C18.9731 11.9966 19.7849 12.8121 19.7849 13.8181V15.2976C19.7849 16.3036 18.9731 17.1191 17.9717 17.1191Z',
  d10: 'M9.3177 1.16182C11.2735 1.11273 12.7265 1.11272 14.6823 1.16182L14.7571 1.16369C16.2665 1.20154 17.5084 1.23268 18.5093 1.40684C18.8796 1.47126 19.2289 1.55696 19.5587 1.67327C19.6464 1.6939 19.7305 1.72621 19.809 1.76908C20.3249 1.98295 20.7913 2.28262 21.2146 2.70721C21.9641 3.4588 22.3229 4.33455 22.5047 5.38042C22.6753 6.36192 22.7012 7.57319 22.7324 9.03911L22.734 9.11451C22.7471 9.72786 22.7522 10.1645 22.7492 10.6415C22.7457 11.1935 22.2868 11.6314 21.7351 11.6197C21.1833 11.6079 20.7478 11.1509 20.7509 10.5989C20.7533 10.152 20.7484 9.73874 20.736 9.15708C20.72 8.40766 20.7058 7.77383 20.6798 7.2271C20.6604 6.82148 20.6507 6.61866 20.5039 6.53769C20.3571 6.45672 20.1765 6.55902 19.8155 6.76364L15.5798 9.16437C14.2801 9.90096 13.181 10.3777 11.9998 10.3777C10.8186 10.3777 9.71946 9.90096 8.41985 9.16437L4.18445 6.76385C3.82343 6.55924 3.64292 6.45693 3.49608 6.5379C3.34924 6.61887 3.33957 6.82169 3.32023 7.22733C3.29416 7.774 3.28003 8.40777 3.26403 9.15707C3.24333 10.1269 3.24334 10.6286 3.26405 11.5984C3.29736 13.1589 3.32261 14.2182 3.46432 15.0334C3.59776 15.8011 3.82038 16.2572 4.20122 16.6391C4.5781 17.0171 5.04027 17.2436 5.83355 17.3816C6.67174 17.5275 7.76497 17.5574 9.36791 17.5977C9.94927 17.6123 10.4846 17.6224 11.0018 17.6282C11.553 17.6344 11.9998 18.0808 11.9998 18.6322C11.9998 19.1835 11.553 19.631 11.0018 19.6249C10.4684 19.6191 9.91661 19.6087 9.31772 19.5937L9.24286 19.5918C7.7335 19.5539 6.49162 19.5228 5.49066 19.3486C4.42829 19.1638 3.53878 18.8038 2.78537 18.0483C2.03592 17.2967 1.67707 16.4209 1.49527 15.3751C1.32466 14.3935 1.29884 13.1823 1.2676 11.7164L1.26599 11.641C1.24468 10.6428 1.24467 10.1127 1.26597 9.1145L1.26758 9.03909C1.29883 7.57314 1.32465 6.36193 1.49526 5.38041C1.67705 4.33455 2.0359 3.4588 2.78536 2.7072C3.53876 1.95165 4.42828 1.59168 5.49064 1.40684C6.49161 1.23268 7.73349 1.20154 9.24285 1.1637L9.3177 1.16182Z',
  d11: 'M18.001 11.125C16.5561 11.125 15.4199 12.3232 15.4199 13.7574V15.1397C15.4199 16.5738 16.5561 17.7721 18.001 17.7721C19.4458 17.7721 20.582 16.5738 20.582 15.1397V13.7574C20.582 12.3232 19.4458 11.125 18.001 11.125Z',
  d12: 'M15.3555 17.3569C15.0694 16.8845 14.4545 16.7334 13.9821 17.0195C13.5097 17.3056 13.3587 17.9205 13.6448 18.3929C14.375 19.5987 15.5786 20.4873 17.0001 20.7751V21.8749C17.0001 22.4272 17.4479 22.8749 18.0001 22.8749C18.5524 22.8749 19.0001 22.4272 19.0001 21.8749V20.7751C20.4217 20.4873 21.6253 19.5987 22.3555 18.3929C22.6416 17.9205 22.4906 17.3056 22.0182 17.0195C21.5458 16.7334 20.9309 16.8845 20.6448 17.3569C20.0866 18.2786 19.1046 18.8749 18.0001 18.8749C16.8957 18.8749 15.9137 18.2786 15.3555 17.3569Z',
  d13: 'M22 11V2H2V19H12',
  d14: 'M2 5.5L12 10.5L22 5.5',
  d15: 'M14.4963 17.9972C15.1163 19.0391 16.4707 20.0067 17.9936 20.0012M17.9936 20.0012C19.222 19.9968 20.568 19.4293 21.4974 17.9984M17.9936 20.0012V21.9986M18 17.1357C16.9964 17.1357 16.1829 16.3222 16.1829 15.3186V13.8171C16.1829 12.8136 16.9964 12 18 12C19.0036 12 19.8172 12.8136 19.8172 13.8171V15.3186C19.8172 16.3222 19.0036 17.1357 18 17.1357Z',
  d16: 'M17.3955 11.75C15.9506 11.75 14.8145 12.9482 14.8145 14.3824V15.7647C14.8145 17.1988 15.9506 18.3971 17.3955 18.3971C18.8404 18.3971 19.9766 17.1988 19.9766 15.7647V14.3824C19.9766 12.9482 18.8404 11.75 17.3955 11.75Z',
  d17: 'M17.3944 19.7499C16.29 19.7499 15.308 19.1537 14.7498 18.2319L13.0391 19.268C13.7693 20.4737 14.9729 21.3624 16.3944 21.6502V22.7499H18.3944V21.6502C19.816 21.3624 21.0196 20.4737 21.7498 19.268L20.0391 18.2319C19.4809 19.1537 18.4989 19.7499 17.3944 19.7499Z',
  d18: 'M1.25 2.22368C1.25 1.68593 1.68754 1.25 2.22727 1.25H21.7727C22.3125 1.25 22.75 1.68593 22.75 2.22368V12H20.796V7.10217L12.0003 11.5L3.20508 7.1024V17.8026H11V19.75H2.22727C1.68754 19.75 1.25 19.3141 1.25 18.7763V2.22368Z',
};

export const IconMailVoice01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-stroke-rounded IconMailVoice01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMailVoice01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-duotone-rounded IconMailVoice01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailVoice01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-twotone-rounded IconMailVoice01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailVoice01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-solid-rounded IconMailVoice01SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailVoice01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-bulk-rounded IconMailVoice01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailVoice01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-stroke-sharp IconMailVoice01StrokeSharp"
    >
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailVoice01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-voice-01-solid-sharp IconMailVoice01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMailVoice01: TheIconSelfPack = {
  name: 'MailVoice01',
  StrokeRounded: IconMailVoice01StrokeRounded,
  DuotoneRounded: IconMailVoice01DuotoneRounded,
  TwotoneRounded: IconMailVoice01TwotoneRounded,
  SolidRounded: IconMailVoice01SolidRounded,
  BulkRounded: IconMailVoice01BulkRounded,
  StrokeSharp: IconMailVoice01StrokeSharp,
  SolidSharp: IconMailVoice01SolidSharp,
};