import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 7.98608C2.10954 5.77584 2.43723 4.39781 3.41752 3.41752C4.39781 2.43723 5.77584 2.10954 7.98607 2M22 7.98608C21.8905 5.77584 21.5628 4.39781 20.5825 3.41752C19.6022 2.43723 18.2242 2.10954 16.0139 2M16.0139 22C18.2242 21.8905 19.6022 21.5628 20.5825 20.5825C21.5628 19.6022 21.8905 18.2242 22 16.0139M7.98607 22C5.77584 21.8905 4.39781 21.5628 3.41752 20.5825C2.43723 19.6022 2.10954 18.2242 2 16.0139',
  d2: 'M16.5146 8.9424C16.8317 9.51789 17 10.1516 17 10.7991V13.6806C17 14.8151 16.4641 15.9327 15.5355 16.7349C14.6069 17.5371 13.3132 18 12 18M7 11.2783V13.6809C6.9995 14.9393 7.65372 16.1769 8.801 17.002M14.5 6.57868C13.3516 6.00592 11.9869 5.8507 10.706 6.14718C9.42517 6.44365 8.33309 7.16753 7.67003 8.15958M13.6665 11.4782V10.5912C13.6765 9.95465 13.1333 9.38163 12.3951 9.23077M10.3335 11.8567V13.3805C10.3281 13.6611 10.4265 13.9363 10.6156 14.1694C11.2056 14.897 12.5258 14.9802 13.24 14.3226',
  d3: 'M3.41752 3.41752C2.43723 4.39781 2.10954 5.77585 2 7.98608V16.0139C2.10954 18.2242 2.43723 19.6022 3.41752 20.5825C4.39781 21.5628 5.77584 21.8905 7.98607 22H16.0139C18.2242 21.8905 19.6022 21.5628 20.5825 20.5825C21.5628 19.6022 21.8905 18.2242 22 16.0139V7.98608C21.8905 5.77585 21.5628 4.39781 20.5825 3.41752C19.6022 2.43723 18.2242 2.10954 16.0139 2H7.98607C5.77584 2.10954 4.39781 2.43723 3.41752 3.41752Z',
  d4: 'M9.18552 2.45052C9.21286 3.00213 8.78786 3.47146 8.23625 3.4988C6.16428 3.60148 5.19939 3.90811 4.55373 4.55377C3.90807 5.19943 3.60144 6.16432 3.49875 8.23629C3.47142 8.7879 3.00209 9.21291 2.45048 9.18557C1.89887 9.15823 1.47387 8.6889 1.5012 8.1373C1.60664 6.00982 1.92262 4.35645 3.13951 3.13956C4.35641 1.92267 6.00978 1.60669 8.13725 1.50125C8.68886 1.47391 9.15819 1.89892 9.18552 2.45052ZM14.8144 2.45052C14.8418 1.89892 15.3111 1.47391 15.8627 1.50125C17.9902 1.60669 19.6436 1.92267 20.8604 3.13956C22.0773 4.35645 22.3933 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5285 8.7879 20.5012 8.23629C20.3985 6.16432 20.0919 5.19943 19.4462 4.55377C18.8006 3.90811 17.8357 3.60148 15.7637 3.4988C15.2121 3.47146 14.7871 3.00213 14.8144 2.45052ZM2.45048 14.8145C3.00209 14.7871 3.47142 15.2121 3.49875 15.7638C3.60144 17.8357 3.90807 18.8006 4.55373 19.4463C5.19939 20.0919 6.16428 20.3986 8.23624 20.5012C8.78785 20.5286 9.21285 20.9979 9.18552 21.5495C9.15818 22.1011 8.68885 22.5261 8.13724 22.4988C6.00978 22.3934 4.35641 22.0774 3.13951 20.8605C1.92262 19.6436 1.60664 17.9902 1.5012 15.8628C1.47387 15.3111 1.89887 14.8418 2.45048 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3933 17.9902 22.0773 19.6436 20.8604 20.8605C19.6436 22.0774 17.9902 22.3934 15.8627 22.4988C15.3111 22.5261 14.8418 22.1011 14.8144 21.5495C14.7871 20.9979 15.2121 20.5286 15.7637 20.5012C17.8357 20.3986 18.8006 20.0919 19.4462 19.4463C20.0919 18.8006 20.3985 17.8357 20.5012 15.7638C20.5285 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d5: 'M10.4805 5.17292C11.9817 4.82545 13.5846 5.00459 14.9464 5.68379C15.4406 5.93028 15.6414 6.53076 15.3949 7.02498C15.1484 7.51921 14.5479 7.72003 14.0537 7.47354C13.1187 7.00721 11.9921 6.87592 10.9315 7.1214C9.87108 7.36686 9.0082 7.95702 8.50142 8.71525C8.19453 9.17441 7.57351 9.29785 7.11435 8.99095C6.65518 8.68406 6.53174 8.06304 6.83864 7.60388C7.65798 6.378 8.97926 5.52041 10.4805 5.17292ZM16.0321 8.06653C16.5158 7.80001 17.124 7.97609 17.3905 8.45981C17.7857 9.17711 18 9.97609 18 10.7991C18 10.799 18 10.7991 18 10.7991V13.6806C18 15.1314 17.3174 16.517 16.1893 17.4916C15.0657 18.4622 13.535 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C13.0914 17 14.1482 16.6119 14.8818 15.9781C15.6108 15.3484 16 14.4987 16 13.6806V10.7991C16 10.3271 15.8777 9.85862 15.6388 9.42496C15.3723 8.94124 15.5483 8.33305 16.0321 8.06653ZM11.4154 9.03051C11.526 8.48941 12.0543 8.14042 12.5954 8.251C13.6657 8.46976 14.681 9.35812 14.6665 10.5978V11.4782C14.6665 12.0305 14.2188 12.4782 13.6665 12.4782C13.1142 12.4782 12.6665 12.0305 12.6665 11.4782V10.5911L12.6667 10.5755C12.667 10.5559 12.6599 10.496 12.5822 10.4132C12.5037 10.3295 12.3713 10.2466 12.1949 10.2105C11.6538 10.0999 11.3048 9.57161 11.4154 9.03051ZM7 10.2783C7.55228 10.2783 8 10.726 8 11.2783V13.6809C7.99964 14.5872 8.47343 15.5346 9.38486 16.1901C9.83323 16.5126 9.93531 17.1374 9.61286 17.5858C9.2904 18.0342 8.66552 18.1363 8.21714 17.8138C6.83412 16.8192 5.9995 15.2913 6 13.6809V11.2783C6 10.726 6.44772 10.2783 7 10.2783ZM10.3335 10.8567C10.8858 10.8567 11.3335 11.3044 11.3335 11.8567V13.3805L11.3334 13.3998C11.3328 13.4273 11.3407 13.476 11.3923 13.5395C11.4714 13.6371 11.6593 13.7503 11.941 13.7672C12.2201 13.784 12.4439 13.6962 12.5626 13.587C12.9689 13.2129 13.6016 13.239 13.9756 13.6453C14.3497 14.0516 14.3236 14.6842 13.9173 15.0583C13.3218 15.6066 12.5285 15.806 11.8214 15.7636C11.117 15.7214 10.3498 15.4293 9.83889 14.7993C9.51461 14.3995 9.32606 13.9018 9.33355 13.3723V11.8567C9.33355 11.3044 9.78126 10.8567 10.3335 10.8567Z',
  d6: 'M9.18552 2.45052C9.21286 3.00213 8.78785 3.47146 8.23625 3.4988C6.16428 3.60148 5.19939 3.90811 4.55373 4.55377C3.90807 5.19943 3.60144 6.16432 3.49875 8.23629C3.47141 8.7879 3.00209 9.21291 2.45048 9.18557C1.89887 9.15823 1.47386 8.6889 1.5012 8.1373C1.60664 6.00982 1.92262 4.35645 3.13951 3.13956C4.3564 1.92267 6.00978 1.60669 8.13725 1.50125C8.68886 1.47391 9.15818 1.89892 9.18552 2.45052ZM14.8144 2.45052C14.8418 1.89892 15.3111 1.47391 15.8627 1.50125C17.9902 1.60669 19.6435 1.92267 20.8604 3.13956C22.0773 4.35645 22.3933 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5285 8.7879 20.5012 8.23629C20.3985 6.16432 20.0919 5.19943 19.4462 4.55377C18.8006 3.90811 17.8357 3.60148 15.7637 3.4988C15.2121 3.47146 14.7871 3.00213 14.8144 2.45052ZM2.45048 14.8145C3.00209 14.7871 3.47141 15.2121 3.49875 15.7638C3.60144 17.8357 3.90807 18.8006 4.55373 19.4463C5.19938 20.0919 6.16428 20.3986 8.23624 20.5012C8.78785 20.5286 9.21285 20.9979 9.18551 21.5495C9.15818 22.1011 8.68885 22.5261 8.13724 22.4988C6.00977 22.3934 4.3564 22.0774 3.13951 20.8605C1.92262 19.6436 1.60664 17.9902 1.5012 15.8628C1.47386 15.3111 1.89887 14.8418 2.45048 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3933 17.9902 22.0773 19.6436 20.8604 20.8605C19.6435 22.0774 17.9902 22.3934 15.8627 22.4988C15.3111 22.5261 14.8418 22.1011 14.8144 21.5495C14.7871 20.9979 15.2121 20.5286 15.7637 20.5012C17.8357 20.3986 18.8006 20.0919 19.4462 19.4463C20.0919 18.8006 20.3985 17.8357 20.5012 15.7638C20.5285 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d7: 'M9.14426 2.5H2.5V9.14426M14.8557 2.5H21.5V9.14426M14.8557 21.5H21.5V14.8557M9.14426 21.5H2.5V14.8557',
  d8: 'M16.5146 8.9424C16.8317 9.51789 17 10.1516 17 10.7991V13.6806C17 14.8151 16.4641 15.9327 15.5355 16.7349C14.6069 17.5371 13.3132 18 12 18M7 11.2783V13.6809C6.9995 14.9393 7.65372 16.1769 8.801 17.002M14.5 6.57868C13.3516 6.00592 11.9869 5.8507 10.706 6.14718C9.42517 6.44365 8.33309 7.16753 7.67003 8.15958M13.6665 12.4782V10.5912C13.6765 9.95465 13.1333 9.38163 12.3951 9.23077M10.3335 9.8567V13.3805C10.3281 13.6611 10.4265 13.9363 10.6156 14.1694C11.2056 14.897 12.5258 14.9802 13.24 14.3226',
  d9: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d10: 'M10.5438 5.41674C11.9825 5.08168 13.5185 5.25443 14.8236 5.90937L13.9681 7.6352C13.0721 7.18552 11.9924 7.05893 10.9761 7.29564C9.95978 7.53233 9.13286 8.10142 8.6472 8.83256L7.05369 7.76089C7.8389 6.57879 9.10513 5.75182 10.5438 5.41674ZM12.558 10.4699C12.4827 10.3892 12.3558 10.3092 12.1868 10.2744L12.5705 8.3849C13.5963 8.59585 14.5693 9.4525 14.5554 10.6479V12.4611H12.6388V10.6415L12.6389 10.6264C12.6392 10.6074 12.6324 10.5497 12.558 10.4699ZM17.1659 8.58625C17.5446 9.27793 17.75 10.0484 17.75 10.842C17.75 10.8419 17.75 10.842 17.75 10.842V13.6206C17.75 15.0196 17.0959 16.3557 16.0147 17.2955C14.9379 18.2315 13.4711 18.75 12 18.75V16.8214C13.046 16.8214 14.0587 16.4472 14.7617 15.8361C15.4604 15.2288 15.8333 14.4094 15.8333 13.6206V10.842C15.8334 10.3868 15.7162 9.93511 15.4872 9.51693L17.1659 8.58625ZM11.3613 9.93324V13.3312L11.3611 13.3498C11.3606 13.3763 11.3682 13.4233 11.4176 13.4845C11.4934 13.5787 11.6735 13.6878 11.9435 13.7041C12.2109 13.7203 12.4254 13.6357 12.5392 13.5303L13.8374 14.9491C13.2667 15.4778 12.5064 15.6701 11.8288 15.6292C11.1538 15.5885 10.4185 15.3068 9.92893 14.6993C9.61817 14.3138 9.43748 13.8339 9.44465 13.3233V9.93324H11.3613ZM6.25 13.6205L6.25 11.3041H8.16667V13.6208C8.16632 14.4948 8.62037 15.4084 9.49382 16.0405L8.37476 17.6062C7.04937 16.6471 6.24952 15.1734 6.25 13.6205Z',
} as const;

export const IconFingerPrintScanStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-stroke-rounded IconFingerPrintScanStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintScanDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-duotone-rounded IconFingerPrintScanDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconFingerPrintScanTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-twotone-rounded IconFingerPrintScanTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFingerPrintScanSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-solid-rounded IconFingerPrintScanSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintScanBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-bulk-rounded IconFingerPrintScanBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintScanStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-stroke-sharp IconFingerPrintScanStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFingerPrintScanSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="finger-print-scan-solid-sharp IconFingerPrintScanSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFingerPrintScan: TheIconSelfPack = {
  name: 'FingerPrintScan',
  StrokeRounded: IconFingerPrintScanStrokeRounded,
  DuotoneRounded: IconFingerPrintScanDuotoneRounded,
  TwotoneRounded: IconFingerPrintScanTwotoneRounded,
  SolidRounded: IconFingerPrintScanSolidRounded,
  BulkRounded: IconFingerPrintScanBulkRounded,
  StrokeSharp: IconFingerPrintScanStrokeSharp,
  SolidSharp: IconFingerPrintScanSolidSharp,
};