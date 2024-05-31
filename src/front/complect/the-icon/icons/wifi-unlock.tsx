import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 15.5C9.76795 14.2321 11.4378 13.7679 13 14.1077',
  d2: 'M5.5 12C8.67327 8.85033 12.1221 8.16715 15.5 10.0149',
  d3: 'M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989',
  d4: 'M16.5312 15.36V13.9523C16.5312 12.8741 17.4127 12 18.5 12C18.9887 12 19.4359 12.1766 19.7801 12.469M17.8437 21H19.1563C20.1777 21 20.6884 21 21.0749 20.7951C21.3802 20.6333 21.6302 20.3854 21.7934 20.0827C22 19.6993 22 19.1929 22 18.18C22 17.1671 22 16.6607 21.7934 16.2773C21.6302 15.9746 21.3802 15.7267 21.0749 15.5649C20.6884 15.36 20.1777 15.36 19.1563 15.36H17.8437C16.8223 15.36 16.3116 15.36 15.9251 15.5649C15.6198 15.7267 15.3698 15.9746 15.2066 16.2773C15 16.6607 15 17.1671 15 18.18C15 19.1929 15 19.6993 15.2066 20.0827C15.3698 20.3854 15.6198 20.6333 15.9251 20.7951C16.3116 21 16.8223 21 17.8437 21Z',
  d5: 'M15 18.18C15 17.1671 15 16.6607 15.2066 16.2773C15.3698 15.9746 15.6198 15.7267 15.9251 15.5649C16.3116 15.36 16.8223 15.36 17.8438 15.36H19.1562C20.1777 15.36 20.6884 15.36 21.0749 15.5649C21.3802 15.7267 21.6302 15.9746 21.7934 16.2773C22 16.6607 22 17.1671 22 18.18C22 19.1929 22 19.6993 21.7934 20.0827C21.6302 20.3854 21.3802 20.6333 21.0749 20.7951C20.6884 21 20.1777 21 19.1562 21H17.8438C16.8223 21 16.3116 21 15.9251 20.7951C15.6198 20.6333 15.3698 20.3854 15.2066 20.0827C15 19.6993 15 19.1929 15 18.18Z',
  d6: 'M22.6452 7.23585C19.3379 4.44312 15.695 2.99998 12 3C8.30506 3.00002 4.6621 4.44319 1.35484 7.23597C0.93288 7.59229 0.879668 8.22322 1.23599 8.64518C1.59231 9.06714 2.22324 9.12035 2.6452 8.76403C5.65374 6.2235 8.85288 5.00001 12 5C15.1472 4.99999 18.3463 6.22345 21.3548 8.76393C21.7768 9.12024 22.4077 9.06703 22.7641 8.64506C23.1204 8.22309 23.0672 7.59217 22.6452 7.23585Z',
  d7: 'M10.2287 8.15253C12.1653 7.76829 14.1093 8.11429 15.9799 9.13754C16.4645 9.40258 16.6424 10.0102 16.3773 10.4948C16.1123 10.9793 15.5047 11.1572 15.0201 10.8922C13.5129 10.0677 12.0435 9.83145 10.6179 10.1143C9.17817 10.3999 7.69128 11.234 6.20448 12.7097C5.81251 13.0988 5.17935 13.0964 4.79028 12.7045C4.40122 12.3125 4.40358 11.6793 4.79556 11.2903C6.48203 9.61633 8.30622 8.53396 10.2287 8.15253Z',
  d8: 'M7.79291 14.7929C9.29431 13.2915 11.308 12.7163 13.2125 13.1305C13.7522 13.2479 14.0945 13.7805 13.9772 14.3202C13.8598 14.8599 13.3272 15.2022 12.7875 15.0849C11.5676 14.8196 10.2416 15.1726 9.20713 16.2071C8.8166 16.5976 8.18344 16.5976 7.79291 16.2071C7.40239 15.8166 7.40239 15.1834 7.79291 14.7929Z',
  d9: 'M15.7965 13.9523C15.7965 12.454 17.0128 11.25 18.5 11.25C19.1688 11.25 19.7832 11.4937 20.2557 11.8973C20.5696 12.1655 20.6079 12.6388 20.3413 12.9545C20.0746 13.2702 19.604 13.3087 19.2901 13.0406C19.078 12.8595 18.8032 12.75 18.5 12.75C17.8248 12.75 17.2881 13.2942 17.2881 13.9523V14.6116C17.4531 14.61 17.6293 14.61 17.8168 14.61H19.1832C19.6649 14.61 20.0724 14.6099 20.4059 14.6382C20.7556 14.6679 21.0916 14.7326 21.4097 14.9022C21.8429 15.1331 22.1988 15.4875 22.4313 15.9214C22.6025 16.2408 22.6678 16.5783 22.6977 16.9285C22.7674 17.7463 22.7674 18.6138 22.6977 19.4315C22.6678 19.7816 22.6025 20.1191 22.4313 20.4385C22.1988 20.8724 21.8429 21.2268 21.4097 21.4578C21.0916 21.6273 20.7556 21.6921 20.4059 21.7217C20.0724 21.75 19.6649 21.75 19.1833 21.75H19.1832H17.8168H17.8167C17.3351 21.75 16.9276 21.75 16.5941 21.7217C16.2444 21.6921 15.9084 21.6273 15.5903 21.4578C15.1571 21.2268 14.8012 20.8724 14.5687 20.4385C14.3975 20.1191 14.3322 19.7816 14.3023 19.4315C14.2326 18.6137 14.2326 17.7461 14.3023 16.9285C14.3322 16.5783 14.3975 16.2408 14.5687 15.9214C14.8012 15.4875 15.1571 15.1331 15.5903 14.9022C15.6582 14.866 15.727 14.8346 15.7965 14.8072V13.9523Z',
  d10: 'M16.5 15.5V14C16.5 12.8954 17.3954 12 18.5 12C19.0973 12 19.6335 12.2619 20 12.6771M15 15.5H22V21H15V15.5Z',
  d11: 'M15.75 13.5C15.75 11.9812 16.9812 10.75 18.5 10.75C19.3215 10.75 20.0595 11.1111 20.5623 11.6808L19.4377 12.6734C19.2076 12.4126 18.8732 12.25 18.5 12.25C17.8096 12.25 17.25 12.8096 17.25 13.5V14.25H22.75V21.25H14.25V14.25H15.75V13.5Z',
  d12: 'M11.2499 2.75C14.7073 2.74998 18.1189 4.02591 21.25 6.5L19.8317 7.92531C17.0524 5.78419 14.1293 4.74999 11.2499 4.75C8.3706 4.75001 5.44753 5.78421 2.66835 7.92531L1.25 6.5C4.3811 4.02594 7.79264 2.75002 11.2499 2.75Z',
  d13: 'M12.75 13.5032C11.4313 13.0394 9.88565 13.2128 8.73647 14.0232L7.31492 12.5947C9.27268 11.0332 12.0848 10.8316 14.2631 11.9901L12.75 13.5032Z',
  d14: 'M4.46012 9.72588L5.87988 11.1526C8.91038 8.88107 12.5661 8.65335 15.5749 10.4168L17.0258 8.96585C13.1555 6.43824 8.29671 6.71279 4.46012 9.72588Z',
} as const;

export const IconWifiUnlockStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-stroke-rounded IconWifiUnlockStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiUnlockDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-duotone-rounded IconWifiUnlockDuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiUnlockTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-twotone-rounded IconWifiUnlockTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiUnlockSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-solid-rounded IconWifiUnlockSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconWifiUnlockBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-bulk-rounded IconWifiUnlockBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiUnlockStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-stroke-sharp IconWifiUnlockStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWifiUnlockSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-unlock-solid-sharp IconWifiUnlockSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfWifiUnlock: TheIconSelfPack = {
  name: 'WifiUnlock',
  StrokeRounded: IconWifiUnlockStrokeRounded,
  DuotoneRounded: IconWifiUnlockDuotoneRounded,
  TwotoneRounded: IconWifiUnlockTwotoneRounded,
  SolidRounded: IconWifiUnlockSolidRounded,
  BulkRounded: IconWifiUnlockBulkRounded,
  StrokeSharp: IconWifiUnlockStrokeSharp,
  SolidSharp: IconWifiUnlockSolidSharp,
};