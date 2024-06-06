import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d2: 'M11 19.5C11 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.5086 22 11',
  d3: 'M17.9992 13.5C16.7328 13.5 15.9117 14.3076 14.9405 14.602C14.5456 14.7217 14.3482 14.7815 14.2683 14.8659C14.1884 14.9502 14.165 15.0735 14.1182 15.3201C13.6174 17.9584 14.712 20.3976 17.3222 21.347C17.6027 21.449 17.7429 21.5 18.0006 21.5C18.2583 21.5 18.3986 21.449 18.679 21.347C21.2891 20.3976 22.3826 17.9584 21.8817 15.3201C21.8349 15.0735 21.8114 14.9502 21.7315 14.8658C21.6516 14.7814 21.4542 14.7216 21.0593 14.602C20.0878 14.3077 19.2657 13.5 17.9992 13.5Z',
  d4: 'M14.8467 19.466C12.9247 19.5118 11.0212 19.5113 9.09883 19.4647C5.95033 19.3883 4.37608 19.3501 3.24496 18.2539C2.11383 17.1576 2.08114 15.6777 2.01577 12.7178C1.99475 11.7661 1.99474 10.8201 2.01576 9.86836C2.0608 7.82941 2.09032 6.49275 2.47411 5.5L12 10.3276L21.5259 5.5C21.9097 6.49275 21.9392 7.82941 21.9842 9.86838C22.0053 10.8201 22.0053 11.7661 21.9842 12.7178C21.9615 13.7465 21.9427 14.5964 21.8804 15.3136C21.8344 15.0713 21.8107 14.9494 21.7315 14.8658C21.6516 14.7814 21.4542 14.7216 21.0593 14.602C20.7072 14.4953 20.3746 14.3211 20.0334 14.1425C19.4334 13.8282 18.8066 13.5 17.9992 13.5C17.1919 13.5 16.5655 13.8282 15.9658 14.1425C15.6248 14.3211 15.2925 14.4953 14.9405 14.602C14.5456 14.7217 14.3482 14.7815 14.2683 14.8659C14.1884 14.9502 14.165 15.0735 14.1182 15.3201C13.8271 16.8539 14.0751 18.3204 14.8467 19.466Z',
  d5: 'M15.58 9.787L19.8158 7.38697C20.1768 7.18242 20.3573 7.08014 20.5041 7.16109C20.651 7.24203 20.6607 7.4448 20.68 7.8503C20.7061 8.39687 20.7202 9.03051 20.7362 9.7797C20.7437 10.1321 20.7485 10.8275 20.7506 10.98C20.7581 11.5399 21.1966 12 21.7566 12C22.2999 12 22.7546 11.5659 22.7498 11.0226C22.7483 10.8559 22.7432 10.1538 22.7343 9.73715L22.7327 9.66177C22.7014 8.19628 22.6756 6.98537 22.505 6.00416C22.3232 4.9586 21.9643 4.08311 21.2149 3.33174C20.7915 2.90728 20.3251 2.6077 19.8093 2.39389C19.7308 2.35104 19.6466 2.31873 19.559 2.29811C19.2291 2.18184 18.8799 2.09616 18.5096 2.03176C17.5086 1.85765 16.2667 1.82652 14.7574 1.78868L14.6825 1.78681C12.7268 1.73773 11.2737 1.73774 9.31794 1.78681L9.2431 1.78869C7.73373 1.82652 6.49185 1.85765 5.49089 2.03175C4.42852 2.21654 3.53901 2.57641 2.7856 3.33174C2.03614 4.08311 1.6773 4.9586 1.4955 6.00416C1.32489 6.98538 1.29907 8.19623 1.26783 9.66175L1.26622 9.73714C1.24491 10.7351 1.24492 11.265 1.26623 12.2629L1.26784 12.3383C1.29909 13.8038 1.32491 15.0146 1.49552 15.9959C1.67731 17.0414 2.03616 17.9169 2.78562 18.6683C3.53902 19.4236 4.42853 19.7835 5.4909 19.9683C6.49187 20.1424 7.73374 20.1735 9.2431 20.2113L9.31796 20.2132C9.99953 20.2303 10.1059 20.2414 11.0023 20.2466C11.5535 20.2498 12 19.8032 12 19.252C12 18.7008 11.5534 18.2538 11.0022 18.2506C10.1202 18.2454 10.0342 18.2345 9.36816 18.2178C7.76521 18.1776 6.67198 18.1476 5.83379 18.0018C5.04051 17.8638 4.57834 17.6374 4.20146 17.2595C3.82063 16.8777 3.598 16.4218 3.46456 15.6543C3.32285 14.8393 3.2976 13.7803 3.26429 12.2203C3.24359 11.2508 3.24358 10.7492 3.26428 9.7797C3.28027 9.03061 3.29441 8.39704 3.32047 7.85053C3.33981 7.44501 3.34948 7.24225 3.49632 7.1613C3.64316 7.08035 3.82367 7.18263 4.18469 7.38719L8.4201 9.787C9.71971 10.5234 10.8188 11 12 11C13.1813 11 14.2804 10.5234 15.58 9.787Z',
  d6: 'M16.0292 13.2677C16.5547 13.0091 17.1987 12.75 18.0005 12.75C18.8023 12.75 19.4466 13.0091 19.9722 13.2676C20.1506 13.3554 20.305 13.4363 20.4454 13.5099C20.7556 13.6725 20.9972 13.7991 21.2781 13.8842C21.4579 13.9387 21.6455 13.9955 21.7764 14.0442C21.8887 14.086 22.1072 14.1705 22.2773 14.35C22.4273 14.5083 22.4981 14.6817 22.5386 14.8162C22.5719 14.9272 22.6 15.0758 22.6198 15.1802C23.1773 18.1167 21.9494 20.956 18.9366 22.0518C18.6635 22.1513 18.3924 22.25 18.0019 22.25C17.6114 22.25 17.3403 22.1513 17.0672 22.0518C14.0545 20.9561 12.8252 18.117 13.3826 15.1802C13.4024 15.0758 13.4305 14.9273 13.4638 14.8163C13.5043 14.6818 13.5751 14.5084 13.725 14.3501C13.8951 14.1706 14.1137 14.0861 14.2259 14.0443C14.3568 13.9956 14.5444 13.9387 14.7242 13.8842C15.0049 13.7991 15.2462 13.6726 15.5562 13.51C15.6965 13.4364 15.8508 13.3555 16.0292 13.2677Z',
  d7: 'M22 10.993V2.5H2V19.486H12',
  d8: 'M2 5.99707L12 10.993L22 5.99707',
  d9: 'M17.8981 13.4581C16.526 13.5381 15.4226 14.715 14.2096 14.6733C13.8863 15.8346 13.7086 18.605 15.6995 20.3789C16.2075 20.8316 17.2572 21.4275 17.9841 21.5031C18.7168 21.4351 19.9651 20.7558 20.3287 20.3684C20.9809 19.6733 22.5456 18.2711 21.8056 14.672C20.4657 14.7094 19.3779 13.3718 17.8981 13.4581Z',
  d10: 'M1.25 2.72368C1.25 2.18593 1.68754 1.75 2.22727 1.75H21.7727C22.3125 1.75 22.75 2.18593 22.75 2.72368V11.5H20.796V7.60217L12.0003 12L3.20508 7.6024V18.3026H12V20.25H2.22727C1.68754 20.25 1.25 19.8141 1.25 19.2763V2.72368Z',
  d11: 'M15.8021 13.3976C16.3588 13.1085 17.0786 12.7346 17.9999 12.7346C18.9251 12.7346 19.6456 13.1092 20.203 13.3989L20.2418 13.419C20.8366 13.7279 21.2583 13.9346 21.7835 13.9346H22.3706L22.5115 14.5046C22.9716 16.3652 22.7532 18.1166 21.9624 19.5056C21.1693 20.8989 19.8272 21.8775 18.1497 22.2195L17.9999 22.25L17.8501 22.2195C16.1725 21.8775 14.8305 20.8989 14.0374 19.5056C13.2467 18.1165 13.0282 16.3652 13.4883 14.5046L13.6292 13.9346H14.2163C14.7427 13.9346 15.1662 13.7276 15.7611 13.4189L15.8021 13.3976Z',
};

export const IconMailSecure01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-stroke-rounded IconMailSecure01StrokeRounded"
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

export const IconMailSecure01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-duotone-rounded IconMailSecure01DuotoneRounded"
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

export const IconMailSecure01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-twotone-rounded IconMailSecure01TwotoneRounded"
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

export const IconMailSecure01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-solid-rounded IconMailSecure01SolidRounded"
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

export const IconMailSecure01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-bulk-rounded IconMailSecure01BulkRounded"
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

export const IconMailSecure01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-stroke-sharp IconMailSecure01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailSecure01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-secure-01-solid-sharp IconMailSecure01SolidSharp"
    >
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

export const iconPackOfMailSecure01: TheIconSelfPack = {
  name: 'MailSecure01',
  StrokeRounded: IconMailSecure01StrokeRounded,
  DuotoneRounded: IconMailSecure01DuotoneRounded,
  TwotoneRounded: IconMailSecure01TwotoneRounded,
  SolidRounded: IconMailSecure01SolidRounded,
  BulkRounded: IconMailSecure01BulkRounded,
  StrokeSharp: IconMailSecure01StrokeSharp,
  SolidSharp: IconMailSecure01SolidSharp,
};