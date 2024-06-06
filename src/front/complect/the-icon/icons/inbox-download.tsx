import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 2.5C5.59269 2.66536 4.62427 3.01488 3.89124 3.75363C2.5 5.15575 2.5 7.41242 2.5 11.9258C2.5 16.4391 2.5 18.6958 3.89124 20.0979C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.0979C21.5 18.6958 21.5 16.4391 21.5 11.9258C21.5 7.41242 21.5 5.15575 20.1088 3.75363C19.3757 3.01488 18.4073 2.66536 17 2.5',
  d2: 'M9.5 8C9.99153 8.5057 11.2998 10.5 12 10.5M14.5 8C14.0085 8.5057 12.7002 10.5 12 10.5M12 10.5V2.5',
  d3: 'M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 12.5307 2.5 13.0299 2.50231 13.5H7.42566C8.26777 13.5 8.92942 14.2036 9.30054 14.9472C9.70373 15.7551 10.5111 16.5 12 16.5C13.4889 16.5 14.2963 15.7551 14.6995 14.9472C15.0706 14.2036 15.7322 13.5 16.5743 13.5L21.4977 13.5035C21.5 13.0324 21.5 12.532 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124Z',
  d5: 'M18.0787 1.89988C19.0485 2.13412 19.8762 2.5311 20.566 3.2209C21.4784 4.13329 21.8785 5.2871 22.0674 6.69148C22.2313 7.91104 22.2483 10.172 22.25 12.125L22.2436 13.6287C22.2351 15.3704 22.1957 16.7789 21.9907 17.9142C21.7817 19.0711 21.3902 20.0089 20.6351 20.7641C19.7769 21.6223 18.6846 22.0093 17.3079 22.1944C15.9645 22.375 14.2438 22.375 12.0531 22.375H11.9388C9.74807 22.375 8.0274 22.375 6.68399 22.1944C5.30733 22.0093 4.21508 21.6223 3.35688 20.7641C2.60171 20.0089 2.21021 19.0711 2.00125 17.9142C1.79618 16.7789 1.75687 15.3704 1.74829 13.6287L1.75043 12.1249C1.75216 10.1719 1.76904 7.91102 1.93301 6.69148C2.12182 5.2871 2.52193 4.13329 3.43432 3.2209C4.12412 2.5311 4.95191 2.13412 5.92164 1.89988C6.45849 1.7702 6.96455 2.16331 7.03814 2.71067C7.11173 3.25803 6.72259 3.74584 6.19116 3.89614C5.58693 4.06704 5.17524 4.3084 4.84853 4.63511C4.36968 5.11396 4.07417 5.77537 3.91517 6.95797C3.75952 8.1157 3.75074 10.4233 3.75026 12.5749C3.75022 12.7405 3.88455 12.875 4.05024 12.875L7.42162 12.875C8.70181 12.875 9.55709 13.9148 9.96758 14.7373C10.2578 15.3188 10.8214 15.875 11.996 15.875C13.1706 15.875 13.7341 15.3188 14.0243 14.7373C14.4348 13.9148 15.2901 12.875 16.5703 12.875L19.9502 12.875C20.1159 12.875 20.2502 12.7405 20.2502 12.5749C20.2497 10.4233 20.2408 8.1157 20.0852 6.95797C19.9262 5.77537 19.6307 5.11396 19.1518 4.63511C18.8251 4.3084 18.4134 4.06704 17.8092 3.89614C17.2778 3.74584 16.8886 3.25803 16.9622 2.71067C17.0358 2.16331 17.5419 1.7702 18.0787 1.89988Z',
  d6: 'M13.0042 2.625C13.0042 2.07272 12.5564 1.625 12.0042 1.625C11.4519 1.625 11.0042 2.07272 11.0042 2.625L11.0042 7.12504L10.4099 7.12502C10.2343 7.12489 10.0186 7.12474 9.84216 7.14681L9.83882 7.14723C9.71237 7.163 9.13633 7.23483 8.86197 7.80043C8.58701 8.36725 8.88894 8.86739 8.95426 8.9756L8.9567 8.97963C9.04891 9.13265 9.18306 9.30353 9.2934 9.44408L9.31714 9.47433C9.61177 9.85015 9.99374 10.3344 10.3742 10.7254C10.564 10.9205 10.7813 11.1217 11.0122 11.2806C11.2174 11.4218 11.5676 11.625 11.9983 11.625C12.429 11.625 12.7792 11.4218 12.9844 11.2806C13.2153 11.1217 13.4326 10.9205 13.6224 10.7254C14.0028 10.3344 14.3848 9.85015 14.6794 9.47433L14.7032 9.44409C14.8135 9.30353 14.9477 9.13265 15.0399 8.97963L15.0423 8.97559C15.1076 8.86739 15.4096 8.36725 15.1346 7.80043C14.8603 7.23483 14.2842 7.16299 14.1578 7.14723L14.1544 7.14681C13.978 7.12474 13.7623 7.12489 13.5867 7.12502L13.0042 7.12504L13.0042 2.625Z',
  d7: 'M18.0804 1.89988C19.0502 2.13412 19.878 2.5311 20.5678 3.2209C21.4801 4.13329 21.8803 5.2871 22.0691 6.69148C22.233 7.91104 22.25 10.172 22.2517 12.125L22.2453 13.6287C22.2368 15.3704 22.1975 16.7789 21.9924 17.9142C21.7834 19.0711 21.3919 20.0089 20.6368 20.7641C19.7786 21.6223 18.6863 22.0093 17.3097 22.1944C15.9662 22.375 14.2455 22.375 12.0548 22.375H11.9405C9.74978 22.375 8.02911 22.375 6.6857 22.1944C5.30904 22.0093 4.21679 21.6223 3.35859 20.7641C2.60342 20.0089 2.21192 19.0711 2.00296 17.9142C1.79789 16.7789 1.75858 15.3704 1.75 13.6287L1.75214 12.1249C1.75387 10.1719 1.77075 7.91102 1.93471 6.69148C2.12353 5.2871 2.52364 4.13329 3.43603 3.2209C4.12583 2.5311 4.95362 2.13412 5.92335 1.89988C6.4602 1.7702 6.96626 2.16331 7.03985 2.71067C7.11344 3.25803 6.7243 3.74584 6.19286 3.89614C5.58864 4.06704 5.17695 4.3084 4.85024 4.63511C4.37139 5.11396 4.07588 5.77537 3.91688 6.95797C3.76123 8.1157 3.75245 10.4233 3.75197 12.5749C3.75193 12.7405 3.88626 12.875 4.05194 12.875L7.42333 12.875C8.70352 12.875 9.55879 13.9148 9.96929 14.7373C10.2595 15.3188 10.8231 15.875 11.9977 15.875C13.1723 15.875 13.7358 15.3188 14.0261 14.7373C14.4366 13.9148 15.2918 12.875 16.572 12.875L19.9519 12.875C20.1176 12.875 20.252 12.7405 20.2519 12.5749C20.2514 10.4233 20.2426 8.1157 20.0869 6.95797C19.9279 5.77537 19.6324 5.11396 19.1535 4.63511C18.8268 4.3084 18.4151 4.06704 17.8109 3.89614C17.2795 3.74584 16.8903 3.25803 16.9639 2.71067C17.0375 2.16331 17.5436 1.7702 18.0804 1.89988Z',
  d8: 'M13.0059 2.625C13.0059 2.07272 12.5581 1.625 12.0059 1.625C11.4536 1.625 11.0059 2.07272 11.0059 2.625L11.0059 7.12504L10.4116 7.12502C10.236 7.12489 10.0203 7.12474 9.84387 7.14681L9.84053 7.14723C9.71408 7.163 9.13804 7.23483 8.86368 7.80043C8.58872 8.36725 8.89065 8.86739 8.95597 8.9756L8.95841 8.97963C9.05062 9.13265 9.18477 9.30353 9.29511 9.44408L9.31885 9.47433C9.61348 9.85015 9.99545 10.3344 10.3759 10.7254C10.5657 10.9205 10.783 11.1217 11.0139 11.2806C11.2191 11.4218 11.5693 11.625 12 11.625C12.4307 11.625 12.7809 11.4218 12.9861 11.2806C13.217 11.1217 13.4343 10.9205 13.6241 10.7254C14.0046 10.3344 14.3865 9.85015 14.6812 9.47433L14.7049 9.44409C14.8152 9.30353 14.9494 9.13265 15.0416 8.97963L15.044 8.97559C15.1093 8.86739 15.4113 8.36725 15.1363 7.80043C14.862 7.23483 14.2859 7.16299 14.1595 7.14723L14.1561 7.14681C13.9797 7.12474 13.764 7.12489 13.5884 7.12502L13.0059 7.12504L13.0059 2.625Z',
  d9: 'M16 3H21V21H3V3H8',
  d10: 'M21 14H15C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14H3',
  d11: 'M9 8L12 11L15 8M12 3V10.5895',
  d12: 'M2.25 3.225C2.25 2.68652 2.68652 2.25 3.225 2.25H7V4.20001H4.19922V13H9.74922V13.75C9.74922 14.9927 10.7566 16 11.9992 16C13.2419 16 14.2492 14.9927 14.2492 13.75V13H19.7992V4.20001H17V2.25H20.775C21.3135 2.25 21.75 2.68652 21.75 3.225V20.775C21.75 21.3135 21.3135 21.75 20.775 21.75H3.225C2.68652 21.75 2.25 21.3135 2.25 20.775V3.225Z',
  d13: 'M12.0001 11.6641L15.7072 7.95696L14.293 6.54274L13.0001 7.83564V2.24985H11.0001L11.0001 7.83564L9.70718 6.54274L8.29297 7.95696L12.0001 11.6641Z',
};

export const IconInboxDownloadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-stroke-rounded IconInboxDownloadStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxDownloadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-duotone-rounded IconInboxDownloadDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxDownloadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-twotone-rounded IconInboxDownloadTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxDownloadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-solid-rounded IconInboxDownloadSolidRounded"
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

export const IconInboxDownloadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-bulk-rounded IconInboxDownloadBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxDownloadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-stroke-sharp IconInboxDownloadStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconInboxDownloadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-download-solid-sharp IconInboxDownloadSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInboxDownload: TheIconSelfPack = {
  name: 'InboxDownload',
  StrokeRounded: IconInboxDownloadStrokeRounded,
  DuotoneRounded: IconInboxDownloadDuotoneRounded,
  TwotoneRounded: IconInboxDownloadTwotoneRounded,
  SolidRounded: IconInboxDownloadSolidRounded,
  BulkRounded: IconInboxDownloadBulkRounded,
  StrokeSharp: IconInboxDownloadStrokeSharp,
  SolidSharp: IconInboxDownloadSolidSharp,
};