import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5312 16.36V14.9523C16.5312 13.8741 17.4127 13 18.5 13C18.9887 13 19.4359 13.1766 19.7801 13.469M17.8437 22H19.1563C20.1777 22 20.6884 22 21.0749 21.7951C21.3802 21.6333 21.6302 21.3854 21.7934 21.0827C22 20.6993 22 20.1929 22 19.18C22 18.1671 22 17.6607 21.7934 17.2773C21.6302 16.9746 21.3802 16.7267 21.0749 16.5649C20.6884 16.36 20.1777 16.36 19.1563 16.36H17.8437C16.8223 16.36 16.3116 16.36 15.9251 16.5649C15.6198 16.7267 15.3698 16.9746 15.2066 17.2773C15 17.6607 15 18.1671 15 19.18C15 20.1929 15 20.6993 15.2066 21.0827C15.3698 21.3854 15.6198 21.6333 15.9251 21.7951C16.3116 22 16.8223 22 17.8437 22Z',
  d2: 'M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952',
  d3: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d4: 'M5.09548 15.7585C5.27346 15.6578 5.43687 15.5654 5.57757 15.4816C8.89519 13.5061 13.1048 13.5061 16.4224 15.4816C16.5631 15.5654 16.7265 15.6578 16.9045 15.7585C17.2157 15.9346 17.5713 16.1359 17.9281 16.36H17.8438C16.8223 16.36 16.3116 16.36 15.9251 16.5649C15.6198 16.7267 15.3698 16.9746 15.2066 17.2773C15 17.6607 15 18.1671 15 19.18C15 20.1929 15 20.6993 15.2066 21.0827C15.3698 21.3854 15.6198 21.6333 15.9251 21.7951C16.0284 21.8499 16.1406 21.89 16.269 21.9194C15.9932 21.9721 15.7071 22 15.4091 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585Z',
  d5: 'M15.7813 14.9523C15.7813 13.454 17.0044 12.25 18.5 12.25C19.1725 12.25 19.7904 12.4937 20.2656 12.8973C20.5813 13.1655 20.6198 13.6388 20.3517 13.9545C20.0835 14.2702 19.6102 14.3087 19.2945 14.0406C19.0813 13.8595 18.8049 13.75 18.5 13.75C17.821 13.75 17.2813 14.2942 17.2813 14.9523V15.6116C17.4472 15.61 17.6244 15.61 17.8129 15.61H19.1871C19.6715 15.61 20.0813 15.6099 20.4167 15.6382C20.7683 15.6679 21.1063 15.7326 21.4262 15.9022C21.8618 16.1331 22.2197 16.4875 22.4536 16.9214C22.6257 17.2408 22.6914 17.5783 22.7214 17.9285C22.75 18.2619 22.75 18.6689 22.75 19.1488V19.2112C22.75 19.691 22.75 20.0981 22.7214 20.4315C22.6914 20.7816 22.6257 21.1191 22.4536 21.4385C22.2197 21.8724 21.8618 22.2268 21.4262 22.4578C21.1063 22.6273 20.7683 22.6921 20.4167 22.7217C20.0813 22.75 19.6715 22.75 19.1871 22.75H19.1871H17.8129H17.8129C17.3285 22.75 16.9187 22.75 16.5833 22.7217C16.2317 22.6921 15.8937 22.6273 15.5738 22.4578C15.1382 22.2268 14.7803 21.8724 14.5464 21.4385C14.3743 21.1191 14.3086 20.7816 14.2786 20.4315C14.25 20.0981 14.25 19.691 14.25 19.2112V19.2112V19.1488V19.1488C14.25 18.6689 14.25 18.2619 14.2786 17.9285C14.3086 17.5783 14.3743 17.2408 14.5464 16.9214C14.7803 16.4875 15.1382 16.1331 15.5738 15.9022C15.6421 15.866 15.7113 15.8346 15.7813 15.8072V14.9523Z',
  d6: 'M6.75035 6.5C6.75035 3.6005 9.10086 1.25 12.0004 1.25C14.8998 1.25 17.2504 3.6005 17.2504 6.5C17.2504 9.39949 14.8998 11.75 12.0004 11.75C9.10086 11.75 6.75035 9.39949 6.75035 6.5Z',
  d7: 'M13.8838 13.618C14.135 13.6833 14.2606 13.716 14.324 13.8113C14.3874 13.9066 14.3662 14.0553 14.3237 14.3526C14.2957 14.5483 14.2813 14.7485 14.2813 14.9523C14.2813 14.9569 14.2791 14.9612 14.2755 14.9641C13.8463 15.3008 13.4879 15.7239 13.226 16.2097C12.9163 16.7843 12.8225 17.3517 12.7841 17.8003C12.7499 18.1986 12.75 18.6608 12.75 19.1047V19.2552C12.75 19.6992 12.7499 20.1613 12.7841 20.5597C12.8225 21.0082 12.9163 21.5757 13.226 22.1502C13.2901 22.2691 13.3222 22.3286 13.33 22.3511C13.3979 22.5455 13.2974 22.7138 13.0941 22.7462C13.0706 22.75 13.0147 22.75 12.9028 22.75H6.59104C4.77274 22.75 3.36695 21.8556 2.1955 20.7396C1.51649 20.0927 1.17802 19.3646 1.26283 18.5888C1.34257 17.8592 1.78123 17.2637 2.2429 16.8118C2.98106 16.0893 4.05857 15.4814 4.77139 15.0793C4.93401 14.9875 5.07775 14.9064 5.19404 14.8372C6.49889 14.0602 7.93096 13.5691 9.39543 13.3625C10.4593 13.2125 11.5411 13.2125 12.6049 13.3625C13.0348 13.4232 13.4619 13.5083 13.8838 13.618Z',
  d8: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.39949 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.39949 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25Z',
  d9: 'M14.324 13.8113C14.2606 13.716 14.135 13.6833 13.8838 13.618C13.4619 13.5083 13.0348 13.4232 12.6049 13.3625C11.5411 13.2125 10.4593 13.2125 9.39543 13.3625C7.93096 13.5691 6.49889 14.0602 5.19404 14.8372C5.07778 14.9064 4.93408 14.9875 4.77151 15.0792C4.05869 15.4813 2.98106 16.0893 2.2429 16.8118C1.78123 17.2637 1.34257 17.8592 1.26283 18.5888C1.17802 19.3646 1.51649 20.0927 2.1955 20.7396C3.36695 21.8556 4.77274 22.75 6.59104 22.75H12.9028C13.0147 22.75 13.0706 22.75 13.0941 22.7462C13.2974 22.7138 13.3979 22.5455 13.33 22.3511C13.3222 22.3286 13.2901 22.2691 13.226 22.1502C12.9163 21.5757 12.8225 21.0082 12.7841 20.5597C12.7499 20.1613 12.75 19.6992 12.75 19.2552V19.1047C12.75 18.6608 12.7499 18.1986 12.7841 17.8003C12.8225 17.3517 12.9163 16.7843 13.226 16.2097C13.4879 15.7239 13.8463 15.3008 14.2755 14.9641C14.2791 14.9612 14.2813 14.9569 14.2813 14.9523C14.2813 14.7485 14.2957 14.5483 14.3237 14.3526C14.3662 14.0553 14.3874 13.9066 14.324 13.8113Z',
  d10: 'M16.5 16.5V15C16.5 13.8954 17.3954 13 18.5 13C19.0973 13 19.6335 13.2619 20 13.6771M15 16.5H22V22H15V16.5Z',
  d11: 'M12 20H2C2 16.134 5.58172 13 10 13C11.4571 13 12.8233 13.3409 14 13.9365M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d12: 'M15.75 15C15.75 13.4812 16.9812 12.25 18.5 12.25C19.3215 12.25 20.0595 12.6111 20.5623 13.1808L19.4377 14.1734C19.2076 13.9126 18.8732 13.75 18.5 13.75C17.8096 13.75 17.25 14.3096 17.25 15V15.75H22.75V22.75H14.25V15.75H15.75V15Z',
  d13: 'M10 1.25C7.37665 1.25 5.25 3.37665 5.25 6C5.25 8.62335 7.37665 10.75 10 10.75C12.6234 10.75 14.75 8.62335 14.75 6C14.75 3.37665 12.6234 1.25 10 1.25Z',
  d14: 'M10 12.25C5.26471 12.25 1.25 15.6289 1.25 20V20.75H12.75V14.25H14.316C14.3692 13.9511 14.4536 13.6631 14.5658 13.3893C13.2263 12.6639 11.6573 12.25 10 12.25Z',
};

export const IconUserUnlock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-stroke-rounded IconUserUnlock01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-duotone-rounded IconUserUnlock01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-twotone-rounded IconUserUnlock01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-solid-rounded IconUserUnlock01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserUnlock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-bulk-rounded IconUserUnlock01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserUnlock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-stroke-sharp IconUserUnlock01StrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconUserUnlock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-01-solid-sharp IconUserUnlock01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserUnlock01: TheIconSelfPack = {
  name: 'UserUnlock01',
  StrokeRounded: IconUserUnlock01StrokeRounded,
  DuotoneRounded: IconUserUnlock01DuotoneRounded,
  TwotoneRounded: IconUserUnlock01TwotoneRounded,
  SolidRounded: IconUserUnlock01SolidRounded,
  BulkRounded: IconUserUnlock01BulkRounded,
  StrokeSharp: IconUserUnlock01StrokeSharp,
  SolidSharp: IconUserUnlock01SolidSharp,
};