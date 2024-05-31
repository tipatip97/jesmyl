import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 21.9997 9.39331 21.9997 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.86181 20.4329 7.07178 20.4969 11.3666 20.4999',
  d2: 'M19.9932 17.4924L20.7481 17.8924C21.2777 18.1729 21.5425 18.3132 21.7884 18.1516C22.0343 17.99 22.0154 17.7366 21.9775 17.2296C21.7598 14.3175 18.1536 12.3206 15.6597 14.2859M16.0052 17.4924L15.2502 17.0925C14.721 16.8122 14.4565 16.672 14.2102 16.8347C13.964 16.9973 13.9842 17.25 14.0244 17.7553C14.2545 20.643 17.8402 22.6674 20.2724 20.7457',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 13.7978 22 15.2484 21.8328 16.352C21.3395 14.7024 19.8102 13.5 18 13.5C15.7909 13.5 14 15.2909 14 17.5C14 18.6897 14.5194 19.7581 15.3438 20.4908C14.7232 20.5 14.0299 20.5 13.25 20.5Z',
  d4: 'M19.0999 14.6986C18.1477 14.2246 17.0475 14.2403 16.1521 14.946C15.7183 15.2878 15.0895 15.2133 14.7477 14.7795C14.4059 14.3457 14.4804 13.717 14.9142 13.3751C16.5126 12.1155 18.4625 12.1471 19.9913 12.9082C21.5017 13.6602 22.7094 15.1739 22.8481 17.0298C22.864 17.2362 22.8901 17.5779 22.8525 17.8381C22.7972 18.2203 22.6108 18.5993 22.211 18.862C21.7642 19.1556 21.3042 19.1255 20.9554 19.0187C20.6977 18.9398 20.4213 18.793 20.2005 18.6757L19.3985 18.2508C18.9104 17.9923 18.7244 17.3871 18.9829 16.899C19.2414 16.411 19.8466 16.2249 20.3347 16.4835L20.7787 16.7187C20.5605 15.8543 19.9269 15.1103 19.0999 14.6986Z',
  d5: 'M15.5446 16.0585L16.3467 16.4835C16.8347 16.742 17.0208 17.3472 16.7622 17.8352C16.5037 18.3233 15.8985 18.5093 15.4105 18.2508L14.9745 18.0199C15.1985 18.8755 15.8304 19.6198 16.6503 20.0379C17.5998 20.5221 18.6723 20.5101 19.5259 19.8357C19.9592 19.4933 20.5881 19.5671 20.9305 20.0004C21.2729 20.4338 21.1991 21.0626 20.7658 21.405C19.1871 22.6523 17.2507 22.5891 15.7417 21.8196C14.2501 21.0589 13.0476 19.5493 12.901 17.7094C12.8842 17.5038 12.8563 17.1621 12.8931 16.9014C12.9474 16.5173 13.1339 16.1383 13.5325 15.875C13.9786 15.5803 14.4389 15.6088 14.7893 15.7157C15.0475 15.7944 15.3241 15.9414 15.5446 16.0585Z',
  d6: 'M9.3376 1.8636C8.69873 1.62402 7.98705 1.62434 6.95764 1.62479C6.0789 1.62479 5.19705 1.62482 4.6247 1.67527C4.03496 1.72726 3.51888 1.83722 3.04758 2.10023C2.44033 2.43911 1.93928 2.94017 1.6004 3.54741C1.33738 4.01872 1.22742 4.53479 1.17544 5.12453C1.12498 5.69688 1.12499 6.4056 1.125 7.28434V10.4322C1.12499 12.7406 1.12498 14.5496 1.31475 15.9611C1.50899 17.4059 1.91433 18.5459 2.80914 19.4407C3.70395 20.3355 4.84397 20.7409 6.28871 20.9351C7.46139 21.0928 9.48929 21.1194 11.4657 21.1239C11.9699 21.1251 12.2221 21.1256 12.3104 20.984C12.3987 20.8424 12.2781 20.5977 12.0369 20.1083C11.6969 19.4186 11.4733 18.6534 11.4075 17.8305L11.4074 17.8288L11.4051 17.8018C11.3892 17.6126 11.3483 17.125 11.4095 16.6919C11.5325 15.821 12.072 15.1529 12.7506 14.6391C12.892 14.5321 12.9626 14.4786 12.9938 14.4189C13.025 14.3592 13.0288 14.2607 13.0366 14.0639C13.0643 13.3582 13.3892 12.6686 13.9874 12.1972C16.115 10.5206 18.7026 10.5905 20.6614 11.5657C20.985 11.7268 21.2993 11.9163 21.5991 12.1317C22.0432 12.4509 22.2652 12.6105 22.4024 12.5739C22.4473 12.5619 22.4792 12.5456 22.5152 12.5161C22.625 12.4261 22.625 12.1731 22.625 11.6671C22.625 10.6481 22.625 9.74364 22.558 9.08432C22.4887 8.40376 22.3419 7.81356 21.993 7.29145C21.7194 6.88198 21.3679 6.53042 20.9584 6.25682C20.4363 5.90796 19.8461 5.76112 19.1655 5.69188C18.5062 5.62481 17.6845 5.62482 16.6655 5.62484L13.1111 5.62484C12.795 5.62484 12.6146 5.62391 12.4814 5.61014C12.3794 5.60301 12.3098 5.52738 12.2878 5.49046C12.2159 5.37753 11.9588 4.86392 11.8175 4.58119C11.3454 3.62605 10.7331 2.38689 9.3376 1.8636Z',
  d7: 'M2 20.5H1.25C1.25 20.9142 1.58579 21.25 2 21.25V20.5ZM22 6.5H22.75C22.75 6.08579 22.4142 5.75 22 5.75V6.5ZM9 2.50001L9.6 2.05001L9.375 1.75001H9V2.50001ZM2 2.5V1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5H2ZM7 7.25H22V5.75H7V7.25ZM8.4 2.95001L11.4 6.95L12.6 6.05L9.6 2.05001L8.4 2.95001ZM2.75 20.5V2.5H1.25V20.5H2.75ZM9 1.75001L2 1.75V3.25L9 3.25001V1.75001ZM21.25 6.5V11H22.75V6.5H21.25ZM2 21.25H11V19.75H2V21.25Z',
  d8: 'M19.9247 17.5H22.0014C22.0014 15.2909 20.2097 13.5 17.9997 13.5C16.736 13.5 15.6091 14.0855 14.8757 15M15.9171 17.5H13.998C13.998 19.7091 15.7896 21.5 17.9997 21.5C19.2634 21.5 20.3903 20.9145 21.1237 20',
  d9: 'M10.9906 20.4987H2.10004C2.04479 20.4987 2 20.454 2 20.3987L2.00011 2.60139C2.00011 2.54616 2.0449 2.50139 2.10015 2.50139L8.97338 2.50098L12.014 6.48288M12.014 6.48288H6.98753M12.014 6.48288H21.9003C21.9555 6.48288 22.0003 6.52765 22.0003 6.58288V11.0406',
  d10: 'M2 2.25C1.80109 2.25 1.61032 2.32902 1.46967 2.46967C1.32902 2.61032 1.25 2.80109 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H13.9378C12.5987 20.6037 11.75 18.901 11.75 17C11.75 13.5482 14.5482 10.75 18 10.75C19.901 10.75 21.6037 11.5987 22.75 12.9378V7C22.75 6.58579 22.4142 6.25 22 6.25H12.375L9.375 2.25001L2 2.25Z',
  d11: 'M15.3122 17.9502C15.7034 19.0572 16.7591 19.8502 18 19.8502C18.8996 19.8502 19.7015 19.4345 20.2253 18.781L21.7078 19.9694C20.8388 21.0534 19.5005 21.7502 18 21.7502C15.3766 21.7502 13.25 19.6236 13.25 17.0002V16.0502H16.0224V17.9502H15.3122ZM19.828 17.9502H22.75V17.0002C22.75 14.3769 20.6234 12.2502 18 12.2502C16.4995 12.2502 15.1612 12.9471 14.2922 14.031L15.7747 15.2194C16.2985 14.5659 17.1004 14.1502 18 14.1502C19.2409 14.1502 20.2966 14.9433 20.6878 16.0502H19.828V17.9502Z',
} as const;

export const IconFolderSyncStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-stroke-rounded IconFolderSyncStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderSyncDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-duotone-rounded IconFolderSyncDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconFolderSyncTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-twotone-rounded IconFolderSyncTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderSyncSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-solid-rounded IconFolderSyncSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFolderSyncBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-bulk-rounded IconFolderSyncBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFolderSyncStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-stroke-sharp IconFolderSyncStrokeSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
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

export const IconFolderSyncSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-sync-solid-sharp IconFolderSyncSolidSharp"
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

export const iconPackOfFolderSync: TheIconSelfPack = {
  name: 'FolderSync',
  StrokeRounded: IconFolderSyncStrokeRounded,
  DuotoneRounded: IconFolderSyncDuotoneRounded,
  TwotoneRounded: IconFolderSyncTwotoneRounded,
  SolidRounded: IconFolderSyncSolidRounded,
  BulkRounded: IconFolderSyncBulkRounded,
  StrokeSharp: IconFolderSyncStrokeSharp,
  SolidSharp: IconFolderSyncSolidSharp,
};