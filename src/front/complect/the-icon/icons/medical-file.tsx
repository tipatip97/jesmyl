import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22',
  d2: 'M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M12.9857 2C13.0503 2 13.1157 2 13.1818 2C14.8751 2 15.7217 2 16.3979 2.2522C17.4849 2.65765 18.3424 3.5151 18.7478 4.60214C19 5.27832 19 6.12494 19 7.81818V17.5C19 17.9643 19 18.1965 18.9807 18.3921C18.7937 20.2912 17.2912 21.7937 15.3921 21.9807C15.1965 22 14.9643 22 14.5 22H10.2727C7.20336 22 5.66867 22 4.60289 21.2022C4.29752 20.9736 4.02643 20.7025 3.79784 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 12.1157 3 12.0503 3 11.9857C3.00006 11.9905 3.00008 11.9953 3.00008 12.0001C3.00008 10.1591 4.49247 8.66675 6.33342 8.66675H7.44453C7.96117 8.66675 8.21951 8.66675 8.43145 8.60996C9.0066 8.45585 9.45585 8.0066 9.60996 7.43145C9.66675 7.21951 9.66675 6.96118 9.66675 6.44453V5.33342C9.66675 3.49247 11.1591 2.00008 13.0001 2.00008C12.9953 2.00008 12.9905 2.00006 12.9857 2Z',
  d5: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667H7.44444C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444V5.33333C9.66667 3.49238 11.1591 2 13 2',
  d6: 'M6.31154 22.6472C7.29379 22.75 9.85661 22.75 11.3977 22.75C11.9375 22.75 12.375 22.3124 12.375 21.7727C12.375 21.233 11.9375 20.7954 11.3977 20.7954C9.78909 20.7954 7.38285 20.7941 6.5134 20.7032C5.65948 20.6138 5.17555 20.4471 4.81772 20.194C4.57627 20.0233 4.36389 19.8222 4.1861 19.5978C3.93053 19.2753 3.76109 18.8425 3.66886 18.0558C3.57393 17.246 3.57235 16.1887 3.57235 14.6652L3.57227 11.765C3.57225 11.498 3.57242 10.8595 3.85304 10.3873C4.02597 10.0963 4.24739 9.8532 4.47484 9.72938C4.84135 9.52986 5.26154 9.4165 5.70821 9.4165L6.74858 9.45299C7.12867 9.46088 7.57221 9.44887 8.00036 9.33415C8.83433 9.11069 9.48574 8.45928 9.7092 7.62531C9.82392 7.19716 9.83593 6.75362 9.82804 6.37353L9.79155 5.33316C9.79155 4.86547 9.91593 4.45834 10.1333 4.07993C10.26 3.85934 10.4807 3.65745 10.7855 3.48014C11.2476 3.21123 11.801 3.20874 12.1392 3.20722C12.4773 3.20569 12.8341 3.20452 13.1322 3.20452C14.9663 3.20452 15.6334 3.21847 16.1368 3.39582C17.0094 3.70328 17.6751 4.34492 17.9852 5.13029C18.0628 5.32693 18.1177 5.58535 18.1471 6.0333C18.1771 6.48997 18.1776 7.07292 18.1776 7.91318V9.02627C18.1776 9.56402 18.6136 9.99996 19.1513 9.99996C19.6891 9.99996 20.125 9.56402 20.125 9.02627V7.88C20.125 7.08084 20.125 6.43328 20.0903 5.9047C20.0545 5.36007 19.9789 4.8744 19.7956 4.41024C19.2668 3.07093 18.1584 2.03666 16.7818 1.55166C15.923 1.24907 14.4509 1.24946 12.8959 1.25C10.0563 1.24964 8.36965 1.24943 6.98721 1.73651C4.76721 2.51869 2.99348 4.18143 2.15009 6.31749C1.86897 7.02945 1.74444 7.79416 1.68419 8.711C1.625 9.61171 1.625 10.7243 1.625 12.1426V12.1426V14.7261C1.62498 16.1742 1.62496 17.3469 1.73485 18.2842C1.84896 19.2576 2.09221 20.0955 2.66204 20.8145C2.95722 21.187 3.30577 21.5158 3.69614 21.7919C4.4409 22.3185 5.30212 22.5416 6.31154 22.6472Z',
  d7: 'M16.907 11.0023C17.3179 10.9743 17.7039 11.2011 17.8795 11.5736L19.4715 14.9504C19.6279 15.2824 19.715 15.4644 19.7905 15.5902C19.8051 15.6145 19.8169 15.6326 19.8259 15.6456C19.8366 15.6473 19.8499 15.6491 19.8662 15.6509C19.9979 15.6653 20.1821 15.6667 20.5347 15.6667H21.375C21.9273 15.6667 22.375 16.1144 22.375 16.6667C22.375 17.219 21.9273 17.6667 21.375 17.6667H20.5347C20.5213 17.6667 20.5078 17.6667 20.4944 17.6667C20.1987 17.6667 19.9023 17.6668 19.6482 17.6389C19.3566 17.607 19.038 17.5318 18.7283 17.3288C18.4224 17.1282 18.2249 16.8681 18.0755 16.6191C17.9421 16.3968 17.8125 16.1218 17.679 15.8385C17.6735 15.8268 17.668 15.815 17.6624 15.8033L17.1617 14.7412L15.729 19.2998C15.6055 19.6927 15.2538 19.9697 14.843 19.9977C14.4321 20.0257 14.0461 19.7989 13.8705 19.4264L12.2785 16.0496C12.1221 15.7177 12.035 15.5357 11.9595 15.4098C11.9449 15.3855 11.9331 15.3675 11.9241 15.3544C11.9134 15.3527 11.9001 15.351 11.8838 15.3492C11.7521 15.3347 11.5679 15.3333 11.2153 15.3333H10.375C9.82272 15.3333 9.375 14.8856 9.375 14.3333C9.375 13.7811 9.82272 13.3333 10.375 13.3333H11.2153C11.2287 13.3333 11.2422 13.3333 11.2556 13.3333C11.5513 13.3333 11.8477 13.3332 12.1018 13.3611C12.3934 13.3931 12.712 13.4682 13.0217 13.6712C13.3276 13.8718 13.5251 14.1319 13.6745 14.3809C13.8079 14.6032 13.9375 14.8782 14.071 15.1615C14.0765 15.1732 14.082 15.185 14.0876 15.1968L14.5883 16.2588L16.021 11.7002C16.1445 11.3073 16.4962 11.0303 16.907 11.0023ZM11.9609 15.3618C11.9609 15.3618 11.9604 15.3617 11.9595 15.3614L11.9609 15.3618ZM11.9028 15.3262C11.9018 15.3252 11.9013 15.3246 11.9013 15.3246C11.9012 15.3245 11.9018 15.325 11.9028 15.3262ZM19.7891 15.6382C19.7891 15.6382 19.7896 15.6384 19.7905 15.6387L19.7891 15.6382ZM19.8472 15.6738C19.8482 15.6748 19.8487 15.6754 19.8487 15.6755C19.8488 15.6755 19.8483 15.675 19.8472 15.6738Z',
  d8: 'M9.99805 16.5H11.9975L14.3969 21L16.5963 14L18.9956 18.5H20.9951',
  d9: 'M11.0125 21.999H3.00414C2.99862 21.999 2.99414 21.9945 2.99414 21.989V9.00093L9.9968 2.00195H19.9906C19.9961 2.00195 20.0006 2.00643 20.0006 2.01195V11.9686M9.9968 2.58089V9.00093H3.42018',
  d10: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H11.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V11H20.75V2.22727Z',
  d11: 'M17.2574 13.0043C17.6585 12.967 18.0428 13.174 18.2324 13.5294L20.35 17.5H21.75V19.5H19.75C19.3807 19.5 19.0414 19.2965 18.8676 18.9706L17.5893 16.5738L16.104 21.2998C15.9832 21.6841 15.6437 21.9584 15.2426 21.9957C14.8415 22.033 14.4572 21.826 14.2676 21.4706L12.15 17.5H10.75V15.5H12.75C13.1193 15.5 13.4586 15.7036 13.6324 16.0294L14.9107 18.4263L16.396 13.7002C16.5168 13.3159 16.8563 13.0416 17.2574 13.0043Z',
} as const;

export const IconMedicalFileStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-stroke-rounded IconMedicalFileStrokeRounded"
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

export const IconMedicalFileDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-duotone-rounded IconMedicalFileDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicalFileTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-twotone-rounded IconMedicalFileTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicalFileSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-solid-rounded IconMedicalFileSolidRounded"
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

export const IconMedicalFileBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-bulk-rounded IconMedicalFileBulkRounded"
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

export const IconMedicalFileStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-stroke-sharp IconMedicalFileStrokeSharp"
    >
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

export const IconMedicalFileSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medical-file-solid-sharp IconMedicalFileSolidSharp"
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

export const iconPackOfMedicalFile: TheIconSelfPack = {
  name: 'MedicalFile',
  StrokeRounded: IconMedicalFileStrokeRounded,
  DuotoneRounded: IconMedicalFileDuotoneRounded,
  TwotoneRounded: IconMedicalFileTwotoneRounded,
  SolidRounded: IconMedicalFileSolidRounded,
  BulkRounded: IconMedicalFileBulkRounded,
  StrokeSharp: IconMedicalFileStrokeSharp,
  SolidSharp: IconMedicalFileSolidSharp,
};