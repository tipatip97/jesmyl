import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7C10.8889 5.66667 13.1111 5.66667 17 7',
  d2: 'M7 17C10.5 18.3333 13.5 18.3333 17 17',
  d3: 'M8.85703 17.625C8.85703 18.75 6.73605 21 6.19206 21C4.55894 21 3.10868 19.1246 2.38298 17.625C1.65728 15.7496 1.83899 11.0629 4.01495 4.6875C5.60121 3.54562 7.19433 3.18 8.85716 3L10 6',
  d4: 'M15.143 17.625C15.143 18.75 17.2639 21 17.8079 21C19.4411 21 20.8913 19.1246 21.617 17.625C22.3427 15.7496 22.161 11.0629 19.985 4.6875C18.3988 3.54562 16.8057 3.18 15.1428 3L14 6',
  d5: 'M7.51009 12H7.5M16.5 12H16.4899',
  d6: 'M6.19206 21C6.73605 21 8.85703 18.75 8.85703 17.625H15L18 21C23.6 17.8 21.6667 8.79167 20 4.6875L15.5 3L14 6H10L8.85716 3C7.19433 3.18 5.60121 3.54562 4.01495 4.6875C1.83899 11.0629 1.65728 15.7496 2.38298 17.625C3.10868 19.1246 4.55894 21 6.19206 21Z',
  d7: 'M8.7765 2.25438C9.11555 2.21768 9.43668 2.41434 9.55808 2.73304L10.0176 3.93921C10.0995 4.15416 10.1404 4.26163 10.2283 4.31506C10.3163 4.36849 10.4344 4.35487 10.6708 4.32761C11.117 4.27615 11.5575 4.25003 12.0001 4.25003C12.4426 4.25003 12.8831 4.27615 13.3293 4.32761C13.5657 4.35487 13.6838 4.36849 13.7718 4.31506C13.8597 4.26163 13.9007 4.15416 13.9825 3.93921L14.442 2.73304C14.5634 2.41434 14.8846 2.21768 15.2236 2.25438C16.9505 2.44132 18.689 2.83043 20.4233 4.07884C20.5497 4.16982 20.6446 4.29789 20.6949 4.44527C21.7982 7.67794 22.4019 10.4992 22.6353 12.767C22.8657 15.0061 22.7443 16.7903 22.3165 17.8957C22.3092 17.9147 22.3011 17.9334 22.2922 17.9517C21.9022 18.7576 21.3133 19.6763 20.5827 20.4057C19.8647 21.1224 18.9132 21.75 17.808 21.75C17.5299 21.75 17.2905 21.6249 17.1615 21.5502C17.0025 21.4581 16.8395 21.3378 16.6831 21.208C16.3681 20.9466 16.0215 20.598 15.7003 20.2204C15.3792 19.843 15.0662 19.4165 14.829 18.9943C14.7455 18.8456 14.7038 18.7713 14.7069 18.6869C14.7095 18.6164 14.7437 18.5374 14.7933 18.4872C14.8527 18.4271 14.9452 18.4042 15.1302 18.3585C15.8783 18.1735 16.8808 17.8995 17.267 17.7009C17.654 17.5534 17.8483 17.1201 17.7008 16.733C17.5534 16.346 17.12 16.1517 16.733 16.2992C13.4049 17.567 10.595 17.567 7.26696 16.2992C6.87988 16.1517 6.44655 16.346 6.29909 16.733C6.15163 17.1201 6.34588 17.5534 6.73296 17.7009C7.46099 17.9782 8.17008 18.2006 8.86774 18.368C9.04622 18.4108 9.13546 18.4322 9.19304 18.4855C9.25125 18.5395 9.28914 18.6262 9.28915 18.7056C9.28915 18.7841 9.2498 18.8541 9.17109 18.9943C8.93394 19.4165 8.62093 19.843 8.29981 20.2204C7.97856 20.598 7.63202 20.9466 7.31699 21.208C7.16059 21.3378 6.99762 21.4581 6.8386 21.5502C6.70958 21.6249 6.47022 21.75 6.19211 21.75C5.08686 21.75 4.13542 21.1224 3.41741 20.4057C2.6868 19.6763 2.09791 18.7576 1.70792 17.9517C1.69905 17.9334 1.69093 17.9147 1.68357 17.8957C1.25582 16.7903 1.13441 15.0061 1.36483 12.767C1.59821 10.4992 2.20187 7.67794 3.30521 4.44527C3.35551 4.29789 3.45045 4.16982 3.57683 4.07884C5.31108 2.83043 7.04964 2.44132 8.7765 2.25438ZM5.5 10.5C5.5 9.39781 6.38969 8.5 7.49247 8.5H7.50753C8.61031 8.5 9.5 9.39781 9.5 10.5C9.5 11.6022 8.61031 12.5 7.50753 12.5H7.49247C6.38969 12.5 5.5 11.6022 5.5 10.5ZM14.5 10.5C14.5 9.39781 15.3897 8.5 16.4925 8.5H16.5075C17.6103 8.5 18.5 9.39781 18.5 10.5C18.5 11.6022 17.6103 12.5 16.5075 12.5H16.4925C15.3897 12.5 14.5 11.6022 14.5 10.5Z',
  d8: 'M9.55808 2.73304C9.43668 2.41434 9.11555 2.21768 8.7765 2.25438C7.04964 2.44132 5.31108 2.83043 3.57683 4.07884C3.45045 4.16982 3.35551 4.29789 3.30521 4.44527C2.20187 7.67794 1.59821 10.4992 1.36483 12.767C1.13441 15.0061 1.25582 16.7903 1.68357 17.8957C1.69093 17.9147 1.69905 17.9334 1.70792 17.9517C2.09791 18.7576 2.6868 19.6763 3.41741 20.4057C4.13542 21.1224 5.08686 21.75 6.19211 21.75C6.47022 21.75 6.70958 21.6249 6.8386 21.5502C6.99762 21.4581 7.16059 21.3378 7.31699 21.208C7.63202 20.9466 7.97856 20.598 8.29981 20.2204C8.62093 19.843 8.93394 19.4165 9.17109 18.9943C9.2498 18.8541 9.28915 18.7841 9.28915 18.7056C9.28914 18.6262 9.25125 18.5395 9.19304 18.4855C9.13546 18.4322 9.04622 18.4108 8.86774 18.368C8.17008 18.2006 7.46099 17.9782 6.73296 17.7009C6.34588 17.5534 6.15163 17.1201 6.29909 16.733C6.44655 16.346 6.87988 16.1517 7.26696 16.2992C10.595 17.567 13.4049 17.567 16.733 16.2992C17.12 16.1517 17.5534 16.346 17.7008 16.733C17.8483 17.1201 17.654 17.5534 17.267 17.7009C16.8808 17.8995 15.8783 18.1735 15.1302 18.3585C14.9452 18.4042 14.8527 18.4271 14.7933 18.4872C14.7437 18.5374 14.7095 18.6164 14.7069 18.6869C14.7038 18.7713 14.7455 18.8456 14.829 18.9943C15.0662 19.4165 15.3792 19.843 15.7003 20.2204C16.0215 20.598 16.3681 20.9466 16.6831 21.208C16.8395 21.3378 17.0025 21.4581 17.1615 21.5502C17.2905 21.6249 17.5299 21.75 17.808 21.75C18.9132 21.75 19.8647 21.1224 20.5827 20.4057C21.3133 19.6763 21.9022 18.7576 22.2922 17.9517C22.3011 17.9334 22.3092 17.9147 22.3165 17.8957C22.7443 16.7903 22.8657 15.0061 22.6353 12.767C22.4019 10.4992 21.7982 7.67794 20.6949 4.44527C20.6446 4.29789 20.5497 4.16982 20.4233 4.07884C18.689 2.83043 16.9505 2.44132 15.2236 2.25438C14.8846 2.21768 14.5634 2.41434 14.442 2.73304L13.9825 3.93921C13.9007 4.15416 13.8597 4.26163 13.7718 4.31506C13.6838 4.36849 13.5657 4.35487 13.3293 4.32761C12.8831 4.27615 12.4426 4.25003 12.0001 4.25003C11.5575 4.25003 11.117 4.27615 10.6708 4.32761C10.4344 4.35487 10.3163 4.36849 10.2283 4.31506C10.1404 4.26163 10.0995 4.15416 10.0176 3.93921L9.55808 2.73304Z',
  d9: 'M7.49247 8.5C6.38969 8.5 5.5 9.39781 5.5 10.5C5.5 11.6022 6.38969 12.5 7.49247 12.5H7.50753C8.61031 12.5 9.5 11.6022 9.5 10.5C9.5 9.39781 8.61031 8.5 7.50753 8.5H7.49247Z',
  d10: 'M16.4925 8.5C15.3897 8.5 14.5 9.39781 14.5 10.5C14.5 11.6022 15.3897 12.5 16.4925 12.5H16.5075C17.6103 12.5 18.5 11.6022 18.5 10.5C18.5 9.39781 17.6103 8.5 16.5075 8.5H16.4925Z',
  d11: 'M6.98779 7.02115C10.8723 5.69087 13.092 5.69087 16.9766 7.02115',
  d12: 'M6.98779 17.002C10.4839 18.3322 13.4805 18.3322 16.9766 17.002',
  d13: 'M7.50325 12.0293H7.49316M16.4932 12.0293H16.4831',
  d14: 'M9.99865 6.06255L8.83269 3.0035C8.83076 2.99842 8.82511 2.99583 8.81999 2.99766L3.97647 4.73026C2.99956 7.73266 1.26703 13.6729 2.33737 17.4944C2.97055 19.1397 4.70977 21 6.17904 21L8.8511 17.6052',
  d15: 'M14.0004 6.06255L15.1663 3.0035C15.1683 2.99842 15.1739 2.99583 15.179 2.99766L20.0226 4.73026C20.9995 7.73266 22.732 13.6729 21.6617 17.4944C21.0285 19.1397 19.2893 21 17.82 21L15.1479 17.6052',
  d16: 'M8.61035 2.29196C8.9936 2.1584 9.41356 2.35393 9.55803 2.73319L10.5169 5.25018H13.4831L14.442 2.73319C14.5865 2.35393 15.0064 2.1584 15.3897 2.29196L20.5768 4.09968L20.6949 4.44542C21.7982 7.67809 22.4019 10.4994 22.6352 12.7672C22.8657 15.0063 22.7442 16.7904 22.3165 17.8958C22.3091 17.9148 22.301 17.9335 22.2921 17.9519C21.9022 18.7578 21.3133 19.6765 20.5826 20.4058C19.8646 21.1226 18.9132 21.7502 17.8079 21.7502H17.4445L14.8287 18.4375C15.624 18.2641 16.4327 18.0186 17.2664 17.701L16.7324 16.2993C13.4043 17.5671 10.5944 17.5671 7.26637 16.2993L6.73238 17.701C7.56637 18.0188 8.37551 18.2643 9.17108 18.4377L6.55548 21.7502H6.19207C5.08682 21.7502 4.13537 21.1226 3.41737 20.4058C2.68676 19.6765 2.09786 18.7578 1.70788 17.9519C1.699 17.9335 1.69088 17.9148 1.68353 17.8958C1.25577 16.7904 1.13436 15.0063 1.36479 12.7672C1.59816 10.4994 2.20183 7.67809 3.30516 4.44542L3.42317 4.09968L8.61035 2.29196ZM7.99242 9.5C7.16815 9.5 6.49995 10.1716 6.49995 11C6.49995 11.8284 7.16815 12.5 7.99242 12.5H8.00749C8.83175 12.5 9.49995 11.8284 9.49995 11C9.49995 10.1716 8.83175 9.5 8.00749 9.5H7.99242ZM15.9924 9.5C15.1682 9.5 14.5 10.1716 14.5 11C14.5 11.8284 15.1682 12.5 15.9924 12.5H16.0075C16.8318 12.5 17.5 11.8284 17.5 11C17.5 10.1716 16.8318 9.5 16.0075 9.5H15.9924Z',
} as const;

export const IconDiscordStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-stroke-rounded IconDiscordStrokeRounded"
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

export const IconDiscordDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-duotone-rounded IconDiscordDuotoneRounded"
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

export const IconDiscordTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-twotone-rounded IconDiscordTwotoneRounded"
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

export const IconDiscordSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-solid-rounded IconDiscordSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscordBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-bulk-rounded IconDiscordBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconDiscordStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-stroke-sharp IconDiscordStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconDiscordSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="discord-solid-sharp IconDiscordSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiscord: TheIconSelfPack = {
  name: 'Discord',
  StrokeRounded: IconDiscordStrokeRounded,
  DuotoneRounded: IconDiscordDuotoneRounded,
  TwotoneRounded: IconDiscordTwotoneRounded,
  SolidRounded: IconDiscordSolidRounded,
  BulkRounded: IconDiscordBulkRounded,
  StrokeSharp: IconDiscordStrokeSharp,
  SolidSharp: IconDiscordSolidSharp,
};