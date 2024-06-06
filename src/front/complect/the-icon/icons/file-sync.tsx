import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 12.1818V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44135C5.81714 3.15089 4.22281 4.65142 3.46894 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.74797 21.9384 7.21706 21.9952 10 21.9996',
  d2: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d3: 'M12 17L13.0228 17.5944C13.5374 15.7277 15.5114 14.6199 17.4318 15.1201C18.4149 15.3761 19.1934 16.0039 19.6501 16.806M21 20L19.9774 19.4056C19.4628 21.2723 17.4888 22.3801 15.5684 21.8799C14.6081 21.6298 13.8431 21.0251 13.3824 20.2496',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.5199 22 15.8943 22 16.191 21.9865C14.4027 21.8301 13 20.3289 13 18.5C13 16.567 14.567 15 16.5 15C18.3289 15 19.8301 16.4027 19.9865 18.191C20 17.8943 20 17.5199 20 17V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d5: 'M20 12.1822V7.81855C20 6.12531 20 5.27869 19.732 4.60251C19.3012 3.51547 18.3902 2.65802 17.2352 2.25257C16.5168 2.00037 15.6173 2.00037 13.8182 2.00037C10.6698 2.00037 9.09563 2.00037 7.83836 2.44172C5.81714 3.15125 4.22281 4.65179 3.46894 6.55412C3 7.73743 3 9.21901 3 12.1822V14.7276C3 17.797 3 19.3317 3.8477 20.3975C4.09058 20.7028 4.37862 20.9739 4.70307 21.2025C5.74797 21.9387 7.21706 21.9956 10 22',
  d6: 'M6.81154 22.5222C7.79379 22.625 8.35661 22.625 9.89771 22.625C10.4375 22.625 10.875 22.1874 10.875 21.6477C10.875 21.108 10.4375 20.6704 9.89771 20.6704C8.28909 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V11.9013C18.6776 12.439 19.1136 12.875 19.6513 12.875C20.1891 12.875 20.625 12.439 20.625 11.9013V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d7: 'M12.4375 16.0452C13.4736 14.366 15.5518 13.5045 17.5587 14.0272C18.8077 14.3525 19.8063 15.1539 20.394 16.1861C20.6672 16.666 20.4997 17.2766 20.0198 17.5499C19.5398 17.8231 18.9292 17.6556 18.656 17.1756C18.3302 16.6035 17.7718 16.1494 17.0547 15.9626C15.6412 15.5945 14.2249 16.4171 13.8616 17.7349C13.7792 18.0339 13.5628 18.2777 13.2757 18.395C12.9885 18.5122 12.6633 18.4896 12.3952 18.3338L11.3724 17.7394C10.8949 17.4619 10.7327 16.8499 11.0102 16.3724C11.2877 15.8949 11.8998 15.7327 12.3773 16.0102L12.4375 16.0452ZM19.4743 18.3547C19.1871 18.4719 18.9707 18.7157 18.8882 19.0147C18.5249 20.3325 17.1087 21.1551 15.6952 20.787C14.9946 20.6045 14.4457 20.1671 14.117 19.6137C13.835 19.1388 13.2214 18.9826 12.7465 19.2646C12.2717 19.5467 12.1154 20.1602 12.3975 20.6351C12.9901 21.6328 13.9713 22.4047 15.1912 22.7224C17.198 23.2451 19.2762 22.3836 20.3123 20.7045L20.3723 20.7394C20.8498 21.0169 21.4619 20.8548 21.7394 20.3773C22.0169 19.8999 21.8548 19.2878 21.3774 19.0103L20.3548 18.4159C20.0867 18.26 19.7614 18.2374 19.4743 18.3547Z',
  d8: 'M10.0282 22.239L3.05197 22.249C3.04646 22.249 3.04199 22.2445 3.04199 22.239V9.25093L10.0282 2.25195H19.9985C20.004 2.25195 20.0084 2.25643 20.0084 2.26195V13.2321M10.0282 2.75664V9.25093H3.6407',
  d9: 'M19.1855 17.0671C18.5266 15.8815 17.3287 15.2773 15.9262 15.2773C14.1083 15.2773 12.9761 16.655 12.4494 18.2507L11.0439 15.6891M12.9048 20.4593C13.5637 21.6449 14.7616 22.249 16.1642 22.249C17.9821 22.249 19.1142 20.8713 19.6409 19.2757L21.0464 21.8373',
  d10: 'M20.25 2.22727C20.25 1.68754 19.8141 1.25 19.2763 1.25H9.13616L1.75 8.66338V21.7727C1.75 22.3125 2.18593 22.75 2.72368 22.75H9.51306V20.7955H3.69727V10.0455H10.5131L10.5131 3.20459H18.3025V12H20.25V2.22727Z',
  d11: 'M17.0525 15.8394C15.6102 15.4676 14.1772 16.3009 13.8116 17.6136L13.6078 18.3453H11.9764L10.4873 15.6755L12.234 14.7013L12.6834 15.5071C13.7968 14.1024 15.7079 13.4273 17.5518 13.9027C18.8082 14.2267 19.8158 15.0255 20.4099 16.0584L18.6762 17.0556C18.3475 16.4841 17.7822 16.0275 17.0525 15.8394ZM19.1141 18.1566H20.866L22.2504 20.8554L20.4709 21.7683L20.0601 20.9674C18.9499 22.3908 17.026 23.0777 15.1701 22.5992C13.9429 22.2828 12.9531 21.5133 12.3541 20.515L14.069 19.486C14.4007 20.0388 14.9565 20.4788 15.6694 20.6625C17.1117 21.0344 18.5448 20.201 18.9103 18.8884L19.1141 18.1566Z',
};

export const IconFileSyncStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-stroke-rounded IconFileSyncStrokeRounded"
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

export const IconFileSyncDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-duotone-rounded IconFileSyncDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileSyncTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-twotone-rounded IconFileSyncTwotoneRounded"
    >
      <path 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSyncSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-solid-rounded IconFileSyncSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSyncBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-bulk-rounded IconFileSyncBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSyncStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-stroke-sharp IconFileSyncStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSyncSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-sync-solid-sharp IconFileSyncSolidSharp"
    >
      <path 
        d={d.d10} 
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

export const iconPackOfFileSync: TheIconSelfPack = {
  name: 'FileSync',
  StrokeRounded: IconFileSyncStrokeRounded,
  DuotoneRounded: IconFileSyncDuotoneRounded,
  TwotoneRounded: IconFileSyncTwotoneRounded,
  SolidRounded: IconFileSyncSolidRounded,
  BulkRounded: IconFileSyncBulkRounded,
  StrokeSharp: IconFileSyncStrokeSharp,
  SolidSharp: IconFileSyncSolidSharp,
};