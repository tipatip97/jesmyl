import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 2.5C5.3579 2.68817 4.53406 3.03797 3.89124 3.6882C2.5 5.09548 2.5 7.36048 2.5 11.8905C2.5 16.4204 2.5 18.6854 3.89124 20.0927C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.0927C21.5 18.6854 21.5 16.4204 21.5 11.8905C21.5 7.36048 21.5 5.09548 20.1088 3.6882C19.4659 3.03797 18.6421 2.68817 17.5 2.5',
  d2: 'M9.5 5C9.99153 4.4943 11.2998 2.5 12 2.5M14.5 5C14.0085 4.4943 12.7002 2.5 12 2.5M12 2.5V10.5',
  d3: 'M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 12.5307 2.5 13.0299 2.50231 13.5H7.42566C8.26777 13.5 8.92942 14.2036 9.30054 14.9472C9.70373 15.7551 10.5111 16.5 12 16.5C13.4889 16.5 14.2963 15.7551 14.6995 14.9472C15.0706 14.2036 15.7322 13.5 16.5743 13.5L21.4977 13.5035C21.5 13.0324 21.5 12.532 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124Z',
  d5: 'M18.0804 1.89988C19.0502 2.13412 19.878 2.5311 20.5678 3.2209C21.4801 4.13329 21.8803 5.2871 22.0691 6.69148C22.233 7.91104 22.25 10.172 22.2517 12.125L22.2453 13.6287C22.2368 15.3704 22.1975 16.7789 21.9924 17.9142C21.7834 19.0711 21.3919 20.0089 20.6368 20.7641C19.7786 21.6223 18.6863 22.0093 17.3097 22.1944C15.9662 22.375 14.2455 22.375 12.0548 22.375H11.9405C9.74978 22.375 8.02911 22.375 6.6857 22.1944C5.30904 22.0093 4.21679 21.6223 3.35859 20.7641C2.60342 20.0089 2.21192 19.0711 2.00296 17.9142C1.79789 16.7789 1.75858 15.3704 1.75 13.6287L1.75214 12.1249C1.75387 10.1719 1.77075 7.91102 1.93471 6.69148C2.12353 5.2871 2.52364 4.13329 3.43603 3.2209C4.12583 2.5311 4.95362 2.13412 5.92335 1.89988C6.4602 1.7702 6.96626 2.16331 7.03985 2.71067C7.11344 3.25803 6.7243 3.74584 6.19286 3.89614C5.58864 4.06704 5.17695 4.3084 4.85024 4.63511C4.37139 5.11396 4.07588 5.77537 3.91688 6.95797C3.76123 8.1157 3.75245 10.4233 3.75197 12.5749C3.75193 12.7405 3.88626 12.875 4.05194 12.875L7.42333 12.875C8.70352 12.875 9.55879 13.9148 9.96929 14.7373C10.2595 15.3188 10.8231 15.875 11.9977 15.875C13.1723 15.875 13.7358 15.3188 14.0261 14.7373C14.4366 13.9148 15.2918 12.875 16.572 12.875L19.9519 12.875C20.1176 12.875 20.252 12.7405 20.2519 12.5749C20.2514 10.4233 20.2426 8.1157 20.0869 6.95797C19.9279 5.77537 19.6324 5.11396 19.1535 4.63511C18.8268 4.3084 18.4151 4.06704 17.8109 3.89614C17.2795 3.74584 16.8903 3.25803 16.9639 2.71067C17.0375 2.16331 17.5436 1.7702 18.0804 1.89988Z',
  d6: 'M13.0059 10.625C13.0059 11.1773 12.5581 11.625 12.0059 11.625C11.4536 11.625 11.0059 11.1773 11.0059 10.625L11.0059 6.12496L10.4116 6.12498C10.236 6.12511 10.0203 6.12526 9.84387 6.10319L9.84053 6.10277C9.71408 6.087 9.13804 6.01517 8.86368 5.44957C8.58872 4.88275 8.89065 4.38261 8.95597 4.2744L8.95841 4.27037C9.05062 4.11735 9.18477 3.94647 9.29511 3.80592L9.31885 3.77567C9.61348 3.39985 9.99545 2.91563 10.3759 2.52462C10.5657 2.32951 10.783 2.12828 11.0139 1.96943C11.2191 1.82823 11.5693 1.62496 12 1.62496C12.4307 1.62496 12.7809 1.82823 12.9861 1.96943C13.217 2.12828 13.4343 2.32951 13.6241 2.52462C14.0046 2.91563 14.3865 3.39985 14.6812 3.77567L14.7049 3.80591C14.8152 3.94647 14.9494 4.11735 15.0416 4.27037L15.044 4.27441C15.1093 4.38261 15.4113 4.88275 15.1363 5.44957C14.862 6.01517 14.2859 6.08701 14.1595 6.10277L14.1561 6.10319C13.9797 6.12526 13.764 6.12511 13.5884 6.12498L13.0059 6.12496L13.0059 10.625Z',
  d7: 'M17 3H21V21H3V3H7',
  d8: 'M21 14H15C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14H3',
  d9: 'M12 11L12 3.32231M9 6L12 3L15 6',
  d10: 'M2.25 3.225C2.25 2.68652 2.68652 2.25 3.225 2.25H7V4.20001H4.19922V13H9.74922V13.75C9.74922 14.9927 10.7566 16 11.9992 16C13.2419 16 14.2492 14.9927 14.2492 13.75V13H19.7992V4.20001H17V2.25H20.775C21.3135 2.25 21.75 2.68652 21.75 3.225V20.775C21.75 21.3135 21.3135 21.75 20.775 21.75H3.225C2.68652 21.75 2.25 21.3135 2.25 20.775V3.225Z',
  d11: 'M12.0001 2.25L15.7072 5.95711L14.293 7.37132L13.0001 6.07843V11.6642H11.0001V6.07843L9.70718 7.37132L8.29297 5.95711L12.0001 2.25Z',
} as const;

export const IconInboxUploadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-stroke-rounded IconInboxUploadStrokeRounded"
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

export const IconInboxUploadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-duotone-rounded IconInboxUploadDuotoneRounded"
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

export const IconInboxUploadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-twotone-rounded IconInboxUploadTwotoneRounded"
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

export const IconInboxUploadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-solid-rounded IconInboxUploadSolidRounded"
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

export const IconInboxUploadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-bulk-rounded IconInboxUploadBulkRounded"
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

export const IconInboxUploadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-stroke-sharp IconInboxUploadStrokeSharp"
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxUploadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-upload-solid-sharp IconInboxUploadSolidSharp"
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

export const iconPackOfInboxUpload: TheIconSelfPack = {
  name: 'InboxUpload',
  StrokeRounded: IconInboxUploadStrokeRounded,
  DuotoneRounded: IconInboxUploadDuotoneRounded,
  TwotoneRounded: IconInboxUploadTwotoneRounded,
  SolidRounded: IconInboxUploadSolidRounded,
  BulkRounded: IconInboxUploadBulkRounded,
  StrokeSharp: IconInboxUploadStrokeSharp,
  SolidSharp: IconInboxUploadSolidSharp,
};