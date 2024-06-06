import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d2: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M15.5312 16.36V14.9523C15.5312 13.8741 16.4127 13 17.5 13C17.9887 13 18.4359 13.1766 18.7801 13.469M16.8437 22H18.1563C19.1777 22 19.6884 22 20.0749 21.7951C20.3802 21.6333 20.6302 21.3854 20.7934 21.0827C21 20.6993 21 20.1929 21 19.18C21 18.1671 21 17.6607 20.7934 17.2773C20.6302 16.9746 20.3802 16.7267 20.0749 16.5649C19.6884 16.36 19.1777 16.36 18.1563 16.36H16.8437C15.8223 16.36 15.3116 16.36 14.9251 16.5649C14.6198 16.7267 14.3698 16.9746 14.2066 17.2773C14 17.6607 14 18.1671 14 19.18C14 20.1929 14 20.6993 14.2066 21.0827C14.3698 21.3854 14.6198 21.6333 14.9251 21.7951C15.3116 22 15.8223 22 16.8437 22Z',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.421 22 15.7466 22 16.0128 21.9929C15.5105 21.9788 15.1889 21.9343 14.9251 21.7945C14.6198 21.6327 14.3698 21.3848 14.2066 21.0821C14 20.6987 14 20.1923 14 19.1794C14 18.1665 14 17.6601 14.2066 17.2767C14.3698 16.974 14.6198 16.7261 14.9251 16.5643C15.3116 16.3594 15.8223 16.3594 16.8438 16.3594H18.1562C19.113 16.3594 19.6217 16.3594 20 16.5278V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M6.93654 22.6472C7.91879 22.75 9.48161 22.75 11.0227 22.75C11.5625 22.75 12 22.3124 12 21.7727C12 21.233 11.5625 20.7954 11.0227 20.7954C9.41409 20.7954 8.00785 20.7941 7.1384 20.7032C6.28448 20.6138 5.80055 20.4471 5.44272 20.194C5.20127 20.0233 4.98889 19.8222 4.8111 19.5978C4.55553 19.2753 4.38609 18.8425 4.29386 18.0558C4.19893 17.246 4.19735 16.1887 4.19735 14.6652L4.19727 11.765C4.19725 11.498 4.19742 10.8595 4.47804 10.3873C4.65097 10.0963 4.87239 9.8532 5.09984 9.72938C5.46635 9.52986 5.88654 9.4165 6.33321 9.4165L7.37358 9.45299C7.75367 9.46088 8.19721 9.44887 8.62536 9.33415C9.45933 9.11069 10.1107 8.45928 10.3342 7.62531C10.4489 7.19716 10.4609 6.75362 10.453 6.37353L10.4165 5.33316C10.4165 4.86547 10.5409 4.45834 10.7583 4.07993C10.885 3.85934 11.1057 3.65745 11.4105 3.48014C11.8726 3.21123 12.426 3.20874 12.7642 3.20722C13.1023 3.20569 13.4591 3.20452 13.7572 3.20452C15.5913 3.20452 16.2584 3.21847 16.7618 3.39582C17.6344 3.70328 18.3001 4.34492 18.6102 5.13029C18.6878 5.32693 18.7427 5.58535 18.7721 6.0333C18.8021 6.48997 18.8026 7.07292 18.8026 7.91318V10.0263C18.8026 10.564 19.2386 11 19.7763 11C20.3141 11 20.75 10.564 20.75 10.0263V7.88C20.75 7.08084 20.75 6.43328 20.7153 5.9047C20.6795 5.36007 20.6039 4.8744 20.4206 4.41024C19.8918 3.07093 18.7834 2.03666 17.4068 1.55166C16.548 1.24907 15.0759 1.24946 13.5209 1.25C10.6813 1.24964 8.99465 1.24943 7.61221 1.73651C5.39221 2.51869 3.61848 4.18143 2.77509 6.31749C2.49397 7.02945 2.36944 7.79416 2.30919 8.711C2.25 9.61171 2.25 10.7243 2.25 12.1426V12.1426V14.7261C2.24998 16.1742 2.24996 17.3469 2.35985 18.2842C2.47396 19.2576 2.71721 20.0955 3.28704 20.8145C3.58222 21.187 3.93077 21.5158 4.32114 21.7919C5.0659 22.3185 5.92712 22.5416 6.93654 22.6472Z',
  d6: 'M14.7813 14.9523C14.7813 13.454 16.0044 12.25 17.5 12.25C18.1725 12.25 18.7904 12.4937 19.2656 12.8973C19.5813 13.1655 19.6198 13.6388 19.3517 13.9545C19.0835 14.2702 18.6102 14.3087 18.2945 14.0406C18.0813 13.8595 17.8049 13.75 17.5 13.75C16.821 13.75 16.2813 14.2942 16.2813 14.9523V15.6116L18.1871 15.61C18.6715 15.61 19.0813 15.6099 19.4167 15.6382C19.7683 15.6679 20.1063 15.7326 20.4262 15.9022C20.8618 16.1331 21.2197 16.4875 21.4536 16.9214C21.6257 17.2408 21.6914 17.5783 21.7214 17.9285C21.75 18.2619 21.75 18.7314 21.75 19.2112C21.75 19.691 21.75 20.0981 21.7214 20.4315C21.6914 20.7816 21.6257 21.1191 21.4536 21.4385C21.2197 21.8724 20.8618 22.2268 20.4262 22.4578C20.1063 22.6273 19.7683 22.6921 19.4167 22.7217C19.0813 22.75 18.6715 22.75 18.1871 22.75H18.1871H16.8129H16.8129C16.3285 22.75 15.9187 22.75 15.5833 22.7217C15.2317 22.6921 14.8937 22.6273 14.5738 22.4578C14.1382 22.2268 13.7803 21.8724 13.5464 21.4385C13.3743 21.1191 13.3086 20.7816 13.2786 20.4315C13.25 20.0981 13.25 19.691 13.25 19.2112V19.2112C13.25 18.7313 13.25 18.2619 13.2786 17.9285C13.3086 17.5783 13.3743 17.2408 13.5464 16.9214C13.7803 16.4875 14.1382 16.1331 14.5738 15.9022C14.6421 15.866 14.7113 15.8346 14.7813 15.8072V14.9523Z',
  d7: 'M15.5 16.5V15C15.5 13.8954 16.3954 13 17.5 13C18.0973 13 18.6335 13.2619 19 13.6771M14 16.5H21V22H14V16.5Z',
  d8: 'M10.9916 21.999H3.01C3.00448 21.999 3 21.9945 3 21.989V9.00093L10 2.00195H19.99C19.9955 2.00195 20 2.00643 20 2.01195L19.99 10.0173M10 2.56438V9.00093H3.5774',
  d9: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H11.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
  d10: 'M14.75 15C14.75 13.4812 15.9812 12.25 17.5 12.25C18.3215 12.25 19.0595 12.6111 19.5623 13.1808L18.4377 14.1734C18.2076 13.9126 17.8732 13.75 17.5 13.75C16.8096 13.75 16.25 14.3096 16.25 15V15.75H21.75V22.75H13.25V15.75H14.75V15Z',
};

export const IconFileUnlockedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-stroke-rounded IconFileUnlockedStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileUnlockedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-duotone-rounded IconFileUnlockedDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFileUnlockedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-twotone-rounded IconFileUnlockedTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileUnlockedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-solid-rounded IconFileUnlockedSolidRounded"
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

export const IconFileUnlockedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-bulk-rounded IconFileUnlockedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileUnlockedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-stroke-sharp IconFileUnlockedStrokeSharp"
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

export const IconFileUnlockedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-unlocked-solid-sharp IconFileUnlockedSolidSharp"
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

export const iconPackOfFileUnlocked: TheIconSelfPack = {
  name: 'FileUnlocked',
  StrokeRounded: IconFileUnlockedStrokeRounded,
  DuotoneRounded: IconFileUnlockedDuotoneRounded,
  TwotoneRounded: IconFileUnlockedTwotoneRounded,
  SolidRounded: IconFileUnlockedSolidRounded,
  BulkRounded: IconFileUnlockedBulkRounded,
  StrokeSharp: IconFileUnlockedStrokeSharp,
  SolidSharp: IconFileUnlockedSolidSharp,
};