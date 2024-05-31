import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9873 2H13.2604C16.5273 2 18.1607 2 19.2951 2.79784C19.6201 3.02643 19.9086 3.29752 20.152 3.60289C21.0011 4.66867 21.0011 6.20336 21.0011 9.27273V11.8182C21.0011 14.7814 21.0011 16.2629 20.5314 17.4462C19.7762 19.3486 18.1791 20.8491 16.1543 21.5586C14.895 22 13.318 22 10.1642 22C8.36202 22 7.46093 22 6.74125 21.7478C5.58426 21.3424 4.67164 20.4849 4.2401 19.3979C3.97168 18.7217 3.97168 17.8751 3.97168 16.1818V12',
  d2: 'M21.001 12C21.001 13.8409 19.5086 15.3333 17.6677 15.3333C17.0019 15.3333 16.217 15.2167 15.5696 15.3901C14.9945 15.5442 14.5452 15.9935 14.3911 16.5686C14.2177 17.216 14.3343 18.0009 14.3343 18.6667C14.3343 20.5076 12.8419 22 11.001 22',
  d3: 'M10.9716 10.0214C10.9716 7.48221 11.1052 6.29268 9.45922 5.11461C8.65026 4.53561 5.96302 4.32606 3.76535 4.532M5.50256 2L3.14576 4.10989C2.95135 4.30413 2.9499 4.61955 3.1425 4.81559L5.50256 7.04736',
  d4: 'M20.9996 13.0104C20.6592 13.8464 19.091 15.5021 15.503 15.5021C15.2015 15.5021 14.4109 15.8053 14.4518 17.4483C14.4685 18.9333 13.9272 21.8711 11.6565 21.9978C11.2065 22 10.7174 22 10.1828 22C8.38373 22 7.48419 22 6.76576 21.7478C5.61077 21.3424 4.69973 20.4849 4.26894 19.3979C4.00098 18.7217 4.00098 17.8751 4.00098 16.1818V7C4.00098 6.07069 4.00098 5.60603 4.07784 5.21964C4.39347 3.63287 5.63386 2.39248 7.22062 2.07686C7.60702 2 8.07167 2 9.00098 2H13.2737C16.5349 2 18.1655 2 19.2979 2.79784C19.6224 3.02643 19.9104 3.29753 20.1533 3.60289C21.001 4.66867 21.001 6.20336 21.001 9.27273V11.8182C21.001 12.2452 21.001 12.6414 20.9996 13.0104Z',
  d5: 'M13.001 2H13.2737C16.5349 2 18.1655 2 19.2979 2.79784C19.6224 3.02643 19.9104 3.29752 20.1533 3.60289C21.001 4.66867 21.001 6.20336 21.001 9.27273V11.8182C21.001 14.7814 21.001 16.2629 20.5321 17.4462C19.7782 19.3486 18.1839 20.8491 16.1626 21.5586C14.9054 22 13.3312 22 10.1828 22C8.38373 22 7.4842 22 6.76576 21.7478C5.61077 21.3424 4.69973 20.4849 4.26894 19.3979C4.00098 18.7217 4.00098 17.8751 4.00098 16.1818V12',
  d6: 'M10.9726 10.0214C10.9726 7.48221 11.1062 6.29268 9.46022 5.11461C8.65126 4.53561 5.96402 4.32606 3.76635 4.532M5.50356 2L3.14676 4.10989C2.95235 4.30413 2.9509 4.61955 3.1435 4.81559L5.50356 7.04736',
  d7: 'M12.9949 2.01123H13.2678C16.531 2.01123 18.1626 2.01123 19.2958 2.8086C19.6205 3.03706 19.9086 3.30799 20.1517 3.61318C20.9999 4.67834 20.9999 6.21213 20.9999 9.2797V11.8237C20.9999 14.7851 20.9999 16.2658 20.5307 17.4484C19.7764 19.3497 18.1811 20.8493 16.1585 21.5584C14.9005 21.9995 13.3253 21.9995 10.1749 21.9995C8.37476 21.9995 7.47466 21.9995 6.75577 21.7475C5.60006 21.3423 4.68845 20.4853 4.25739 19.3989C3.98926 18.7231 3.98926 17.877 3.98926 16.1847V12.0054',
  d8: 'M20.9994 12.0054C20.9994 13.8452 19.5061 15.3367 17.664 15.3367C16.9978 15.3367 16.2124 15.2202 15.5646 15.3935C14.9892 15.5475 14.5396 15.9965 14.3854 16.5713C14.2119 17.2183 14.3286 18.0028 14.3286 18.6682C14.3286 20.508 12.8352 21.9995 10.9932 21.9995',
  d9: 'M10.999 9.95912C10.999 7.42145 11.2277 6.16731 9.12371 4.95668C8.31425 4.37801 5.20942 4.3545 3.01038 4.56032M5.5061 2.00049L3.14783 4.10914C2.9533 4.30326 2.95185 4.61851 3.14457 4.81443L5.5061 7.04489',
  d10: 'M17.1885 1.47775C16.2062 1.37499 14.9185 1.37499 13.3774 1.375C12.8377 1.375 12.4001 1.81256 12.4001 2.35231C12.4001 2.89205 12.8377 3.32959 13.3774 3.32959C14.986 3.32959 16.1172 3.33084 16.9866 3.42179C17.8405 3.51112 18.3244 3.67788 18.6823 3.93092C18.9237 4.10167 19.1361 4.30276 19.3139 4.52711C19.5695 4.84961 19.7389 5.2824 19.8311 6.06919C19.9261 6.87895 19.9276 7.93628 19.9276 9.45973L19.9277 12.3599C19.9277 12.6269 19.9276 13.2655 19.647 13.7377C19.474 14.0286 19.2526 14.2717 19.0252 14.3956C18.6586 14.5951 18.2385 14.7085 17.7918 14.7085L16.7514 14.672C16.3713 14.6641 15.9278 14.6761 15.4996 14.7908C14.6657 15.0143 14.0143 15.6657 13.7908 16.4996C13.6761 16.9278 13.6641 17.3713 13.672 17.7514L13.7085 18.7918C13.7085 19.2595 13.5841 19.6666 13.3667 20.045C13.24 20.2656 13.0193 20.4675 12.7145 20.6448C12.2524 20.9137 11.699 20.9162 11.3608 20.9177C11.0227 20.9193 10.6659 20.9204 10.3678 20.9204C8.53372 20.9204 7.86659 20.9065 7.36323 20.7291C6.4906 20.4217 5.8249 19.78 5.51481 18.9947C5.43717 18.798 5.38233 18.5396 5.35289 18.0917C5.32288 17.635 5.32239 17.052 5.32239 16.2118V12.0987C5.32239 11.5609 4.88645 11.125 4.34869 11.125C3.81094 11.125 3.375 11.5609 3.375 12.0987V16.245C3.37499 17.0441 3.37499 17.6917 3.40973 18.2202C3.44552 18.7649 3.52113 19.2505 3.7044 19.7147C4.23321 21.054 5.34164 22.0883 6.7182 22.5733C7.577 22.8759 9.04908 22.8755 10.6041 22.8749C13.4437 22.8753 15.1304 22.8755 16.5128 22.3884C18.7328 21.6063 20.5065 19.9435 21.3499 17.8075C21.631 17.0955 21.7556 16.3308 21.8158 15.4139C21.875 14.5132 21.875 13.4006 21.875 11.9823V9.39882C21.875 7.95073 21.875 6.77808 21.7652 5.84075C21.651 4.86735 21.4078 4.02947 20.838 3.3104C20.5428 2.93792 20.1942 2.60914 19.8039 2.33309C19.0591 1.80643 18.1979 1.58334 17.1885 1.47775Z',
  d11: 'M7.625 3.625C10.1103 3.625 12.125 5.63972 12.125 8.125V10.125C12.125 10.6773 11.6773 11.125 11.125 11.125C10.5727 11.125 10.125 10.6773 10.125 10.125V8.125C10.125 6.74429 9.00571 5.625 7.625 5.625H6.625V7.12403C6.62526 7.37555 6.53123 7.62739 6.34208 7.82199C5.95714 8.21802 5.32404 8.22702 4.92801 7.84208C4.92801 7.84208 3.81377 6.94912 3.53889 6.7162C3.24511 6.46727 2.93108 6.18135 2.68321 5.89031C2.55892 5.74438 2.43092 5.57374 2.32999 5.38514C2.23331 5.20446 2.125 4.94021 2.125 4.625C2.125 4.3098 2.23331 4.04554 2.32999 3.86487C2.43092 3.67626 2.55892 3.50562 2.68321 3.35969C2.93108 3.06866 3.24511 2.78273 3.53889 2.5338C3.53889 2.5338 4.84847 1.48523 4.92801 1.40792C5.32404 1.02298 5.95714 1.03198 6.34208 1.42801C6.53106 1.62244 6.6251 1.87402 6.625 2.12531V3.625H7.625Z',
  d12: 'M21 2H21.75C21.75 1.58579 21.4142 1.25 21 1.25V2ZM4 22H3.25C3.25 22.1989 3.32902 22.3897 3.46967 22.5303C3.61032 22.671 3.80109 22.75 4 22.75V22ZM14 22V22.75H14.3107L14.5303 22.5303L14 22ZM21 15L21.5303 15.5303L21.75 15.3107V15H21ZM14 15V14.25H13.25V15H14ZM4.75 22V11H3.25V22H4.75ZM4 22.75H14V21.25H4V22.75ZM21.75 15V2H20.25V15H21.75ZM14.5303 22.5303L21.5303 15.5303L20.4697 14.4697L13.4697 21.4697L14.5303 22.5303ZM14.75 22V15H13.25V22H14.75ZM14 15.75H21V14.25H14V15.75ZM13 2.75H21V1.25H13V2.75Z',
  d13: 'M12.9877 2L20.99 2.00032C20.9955 2.00032 21 2.0048 21 2.01032V15.0003L14 22.0003H4.01C4.00448 22.0003 4 21.9958 4 21.9903V11.0471M20.5346 15.0003H14V21.4618',
  d14: 'M10.998 9.99769V5.00609C10.998 5.00057 10.9936 4.99609 10.9881 4.99609H3.55964M5.99313 1.99609L2.99805 4.99609L5.99313 8.00009',
  d15: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H14.4869V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954H4.69747V11H2.75V21.7727Z',
  d16: 'M6.57843 5.95711L7.87132 7.25L6.45711 8.66421L2.75 4.95711L6.45711 1.25L7.87132 2.66421L6.57843 3.95711H12.1642C12.7165 3.95711 13.1642 4.40482 13.1642 4.95711V9.95711H11.1642V5.95711H6.57843Z',
} as const;

export const IconFilePasteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-stroke-rounded IconFilePasteStrokeRounded"
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

export const IconFilePasteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-duotone-rounded IconFilePasteDuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePasteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-twotone-rounded IconFilePasteTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePasteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-solid-rounded IconFilePasteSolidRounded"
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

export const IconFilePasteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-bulk-rounded IconFilePasteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFilePasteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-stroke-sharp IconFilePasteStrokeSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePasteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-paste-solid-sharp IconFilePasteSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilePaste: TheIconSelfPack = {
  name: 'FilePaste',
  StrokeRounded: IconFilePasteStrokeRounded,
  DuotoneRounded: IconFilePasteDuotoneRounded,
  TwotoneRounded: IconFilePasteTwotoneRounded,
  SolidRounded: IconFilePasteSolidRounded,
  BulkRounded: IconFilePasteBulkRounded,
  StrokeSharp: IconFilePasteStrokeSharp,
  SolidSharp: IconFilePasteSolidSharp,
};