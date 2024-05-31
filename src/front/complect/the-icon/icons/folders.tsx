import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 9.55556H16.275C18.171 9.55556 19.119 9.55556 19.8 10.005C20.0949 10.1995 20.348 10.4495 20.545 10.7407C21 11.4133 21 12.3496 21 14.2222C21 17.3432 21 18.9038 20.2416 20.0248C19.9133 20.51 19.4914 20.9267 19.0001 21.251C17.8651 22 16.285 22 13.125 22H12C7.75736 22 5.63604 22 4.31802 20.6983C3 19.3965 3 17.3014 3 13.1111V10.3949C3 8.78027 3 7.97294 3.34228 7.36717C3.58628 6.93535 3.94704 6.57904 4.38426 6.33806C4.99761 6 5.81502 6 7.44984 6C8.49722 6 9.02091 6 9.47933 6.16978C10.526 6.55744 10.9576 7.49651 11.4299 8.42945L12 9.55556',
  d2: 'M3 1.99998H8.5C9.47008 1.99998 10.4182 1.97166 11.2387 2.5552C12.29 3.30287 12.71 4.69708 13.7613 5.44475C14.5818 6.02829 15.5299 5.99998 16.5 5.99998H21',
  d3: 'M12 22H13.125C16.285 22 17.8651 22 19.0001 21.251C19.4914 20.9267 19.9133 20.51 20.2416 20.0248C21 18.9038 21 17.3433 21 14.2222C21 12.3496 21 11.4133 20.545 10.7407C20.348 10.4495 20.0949 10.1995 19.8 10.005C19.119 9.55556 18.171 9.55556 16.275 9.55556H12L11.4299 8.42945C10.9576 7.49651 10.526 6.55744 9.47933 6.16978C9.02091 6 8.49722 6 7.44984 6C5.81502 6 4.99761 6 4.38426 6.33806C3.94704 6.57904 3.58628 6.93535 3.34228 7.36717C3 7.97294 3 8.78027 3 10.3949V13.1111C3 17.3014 3 19.3965 4.31802 20.6983C5.63604 22 7.75736 22 12 22Z',
  d4: 'M10.4091 3.62132C9.89788 3.25772 9.3063 3.25117 8.25 3.25117H3.25C2.69772 3.25117 2.25 2.80345 2.25 2.25117C2.25 1.69888 2.69772 1.25117 3.25 1.25117L8.25 1.25117C8.3084 1.25117 8.36863 1.25089 8.43053 1.25061C9.3055 1.2466 10.5131 1.24107 11.5683 1.99147C12.2401 2.4693 12.6948 3.13193 13.0398 3.63476C13.0514 3.65168 13.0629 3.66842 13.0743 3.68496C13.4608 4.24767 13.7341 4.62726 14.0909 4.88102C14.6021 5.24461 15.1937 5.25117 16.25 5.25117H20.75C21.3023 5.25117 21.75 5.69888 21.75 6.25117C21.75 6.80345 21.3023 7.25117 20.75 7.25117H16.25C16.1916 7.25117 16.1314 7.25144 16.0695 7.25173C15.1945 7.25573 13.9869 7.26126 12.9317 6.51087C12.2599 6.03303 11.8052 5.37041 11.4602 4.86758C11.4486 4.85066 11.4371 4.83392 11.4257 4.81737C11.0392 4.25466 10.7659 3.87507 10.4091 3.62132Z',
  d5: 'M7.58222 5.25004C8.50075 5.24957 9.15301 5.24923 9.73981 5.46656C11.0246 5.94239 11.5891 7.07153 12.0127 7.91871C12.0127 7.91871 12.3378 8.5604 12.4098 8.6724C12.4227 8.70864 12.4795 8.78313 12.6029 8.79109C12.7354 8.80473 12.9147 8.80564 13.2292 8.80564L16.3145 8.80564C17.229 8.80563 17.9714 8.80562 18.5681 8.86558C19.1855 8.92761 19.7294 9.05985 20.2131 9.37908C20.5898 9.62762 20.9137 9.94739 21.1662 10.3205C21.4913 10.8011 21.6261 11.3421 21.6892 11.9547C21.75 12.5455 21.75 13.2799 21.75 14.182V14.182V14.2647V14.2648C21.75 15.7893 21.75 16.9916 21.6513 17.9504C21.5502 18.9312 21.3396 19.7403 20.8628 20.4451C20.479 21.0124 19.9863 21.4988 19.4132 21.877C18.7024 22.3461 17.8871 22.5532 16.8969 22.6527C15.9275 22.7501 14.7114 22.7501 13.1665 22.7501H11.9437H11.9436C9.87009 22.7501 8.23829 22.7501 6.96355 22.5808C5.65666 22.4073 4.61293 22.0437 3.79099 21.232C2.96777 20.4189 2.59791 19.3843 2.42161 18.0891C2.24997 16.8283 2.24999 15.2151 2.25 13.1687V13.1687V10.3603V10.3603C2.24999 9.58245 2.24998 8.94899 2.29576 8.43613C2.34312 7.90548 2.44398 7.43249 2.68931 6.9983C3.00219 6.44457 3.46406 5.98896 4.02223 5.68131C4.4587 5.44074 4.93396 5.34175 5.46895 5.29517C5.98698 5.25007 6.79365 5.25003 7.58222 5.25004Z',
  d6: 'M7.58222 5.25004C8.50075 5.24957 9.15301 5.24923 9.73981 5.46656C11.0246 5.94239 11.5891 7.07153 12.0127 7.91871C12.0127 7.91871 12.3378 8.5604 12.4098 8.6724C12.4227 8.70864 12.4795 8.78313 12.6029 8.79109C12.7354 8.80473 12.9147 8.80564 13.2292 8.80564L16.3145 8.80564C17.229 8.80563 17.9714 8.80562 18.5681 8.86558C19.1855 8.92761 19.7294 9.05985 20.2131 9.37908C20.5898 9.62762 20.9137 9.94739 21.1662 10.3205C21.4913 10.8011 21.6261 11.3421 21.6892 11.9547C21.75 12.5455 21.75 13.2799 21.75 14.182V14.182V14.2647V14.2648C21.75 15.7893 21.75 16.9916 21.6513 17.9504C21.5502 18.9312 21.3396 19.7403 20.8628 20.4451C20.479 21.0124 19.9863 21.4988 19.4132 21.877C18.7024 22.3461 17.8871 22.5532 16.8969 22.6527C15.9275 22.7501 14.7114 22.7501 13.1665 22.7501H11.9437H11.9436C9.87009 22.7501 8.23829 22.7501 6.96355 22.5808C5.65666 22.4073 4.61293 22.0437 3.79099 21.232C2.96777 20.4189 2.59791 19.3843 2.42161 18.0891C2.24997 16.8283 2.24999 15.2151 2.25 13.1687V13.1687V10.3603V10.3603C2.24999 9.75299 2.24999 9.23369 2.27177 8.79109C2.27789 8.6668 2.28572 8.54857 2.29576 8.43613C2.34312 7.90548 2.44398 7.43249 2.68931 6.9983C3.00219 6.44457 3.46406 5.98896 4.02223 5.68131C4.4587 5.44074 4.93396 5.34175 5.46895 5.29517C5.98698 5.25007 6.79365 5.25003 7.58222 5.25004Z',
  d7: 'M7.14453 9.50796H20.8587C20.9152 9.50796 20.961 9.55254 20.9612 9.60765L21.0004 21.8981C21.0006 21.9534 20.9547 21.9984 20.898 21.9984H2.6376C2.58103 21.9984 2.53517 21.9536 2.53517 21.8984L2.53516 6.09609C2.53516 6.04087 2.58102 5.99609 2.63759 5.99609H8.70893L11.7808 9.50796',
  d8: 'M1.77148 2H10.7682L13.7676 5.46468C13.787 5.48716 13.8157 5.50013 13.8458 5.50013H21.771',
  d9: 'M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H9.34495L12.345 8.75H21C21.4142 8.75 21.75 9.08579 21.75 9.5V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V6Z',
  d10: 'M2.25 1.25L11.4599 1.25L14.4599 4.75H21.75V6.75H14C13.7081 6.75 13.4307 6.62244 13.2407 6.40079L10.5401 3.25H2.25V1.25Z',
} as const;

export const IconFoldersStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-stroke-rounded IconFoldersStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFoldersDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-duotone-rounded IconFoldersDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFoldersTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-twotone-rounded IconFoldersTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFoldersSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-solid-rounded IconFoldersSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFoldersBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-bulk-rounded IconFoldersBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconFoldersStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-stroke-sharp IconFoldersStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconFoldersSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folders-solid-sharp IconFoldersSolidSharp"
    >
      <path 
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

export const iconPackOfFolders: TheIconSelfPack = {
  name: 'Folders',
  StrokeRounded: IconFoldersStrokeRounded,
  DuotoneRounded: IconFoldersDuotoneRounded,
  TwotoneRounded: IconFoldersTwotoneRounded,
  SolidRounded: IconFoldersSolidRounded,
  BulkRounded: IconFoldersBulkRounded,
  StrokeSharp: IconFoldersStrokeSharp,
  SolidSharp: IconFoldersSolidSharp,
};