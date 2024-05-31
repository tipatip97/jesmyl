import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.9375 10C6.24657 10.0051 5.83081 10.0263 5.49965 10.114C3.99243 10.5131 2.96053 11.8639 3.00116 13.3847C3.01293 13.8252 3.18062 14.3696 3.516 15.4585C4.32314 18.079 5.67963 20.3539 8.71845 20.8997C9.27704 21 9.90561 21 11.1627 21L12.8373 21C14.0944 21 14.723 21 15.2816 20.8997C18.3204 20.3539 19.6769 18.079 20.484 15.4585C20.8194 14.3696 20.9871 13.8252 20.9988 13.3847C21.0395 11.8639 20.0076 10.5131 18.5004 10.114C18.1692 10.0263 17.7534 10.0051 17.0625 10',
  d2: 'M12 3L12 14M12 3C12.4684 3 12.8244 3.4381 13.5364 4.3143L14.5 5.5M12 3C11.5316 3 11.1756 3.4381 10.4636 4.3143L9.5 5.5',
  d3: 'M11.1627 21L12.8373 21C14.0944 21 14.723 21 15.2816 20.8997C18.3204 20.3539 19.6769 18.079 20.484 15.4585L20.484 15.4584C20.8194 14.3696 20.9871 13.8252 20.9988 13.3847C21.0395 11.8639 20.0076 10.5131 18.5004 10.114C18.1692 10.0263 17.7534 10.0051 17.0625 10L6.9375 10C6.24657 10.0051 5.83081 10.0263 5.49965 10.114C3.99243 10.5131 2.96053 11.8639 3.00116 13.3847C3.01293 13.8252 3.18062 14.3696 3.516 15.4585C4.32314 18.079 5.67963 20.3539 8.71845 20.8997C9.27704 21 9.9056 21 11.1627 21Z',
  d4: 'M6.74942 8.96427C6.76916 9.5162 6.33774 9.97963 5.78581 9.99937C4.16777 10.0572 2.96252 11.2414 3.001 12.6572C3.0093 12.9624 3.13216 13.3879 3.52765 14.6498C4.38358 17.3809 5.70497 19.4074 8.52772 19.9057C9.04115 19.9963 9.63393 20 11.0698 20H12.9303C14.3662 20 14.959 19.9963 15.4724 19.9057C18.2951 19.4074 19.6165 17.3809 20.4725 14.6498C20.8679 13.3879 20.9908 12.9624 20.9991 12.6572C21.0376 11.2414 19.8323 10.0572 18.2143 9.99937C17.6624 9.97963 17.2309 9.5162 17.2507 8.96427C17.2704 8.41234 17.7338 7.98091 18.2858 8.00065C20.7832 8.08998 23.0723 9.99244 22.9984 12.7115C22.9814 13.3348 22.7556 14.0541 22.4337 15.0796C22.4164 15.1348 22.3988 15.1909 22.3809 15.248C21.4432 18.2399 19.7502 21.1815 15.82 21.8752C15.1122 22.0002 14.3324 22.0001 13.0413 22C13.0047 22 12.9677 22 12.9303 22H11.0698C11.0324 22 10.9954 22 10.9588 22C9.66774 22.0001 8.8879 22.0002 8.18007 21.8752C4.24993 21.1815 2.55688 18.2399 1.61918 15.248C1.60131 15.1909 1.5837 15.1348 1.56636 15.0796C1.24446 14.0541 1.01868 13.3348 1.00174 12.7115C0.927832 9.99245 3.21694 8.08998 5.71431 8.00065C6.26625 7.98091 6.72968 8.41233 6.74942 8.96427Z',
  d5: 'M13.0059 14C13.0059 14.5523 12.5581 15 12.0059 15C11.4536 15 11.0059 14.5523 11.0059 14L11.0059 6.49996L10.4116 6.49998C10.236 6.50011 10.0203 6.50026 9.84387 6.47819L9.84053 6.47777C9.71408 6.46201 9.13804 6.39017 8.86368 5.82457C8.58872 5.25775 8.89065 4.75761 8.95597 4.6494L8.95841 4.64537C9.05062 4.49235 9.18477 4.32147 9.29511 4.18092L9.31885 4.15067C9.61348 3.77485 9.99545 3.29063 10.3759 2.89962C10.5657 2.70451 10.783 2.50328 11.0139 2.34443C11.2191 2.20323 11.5693 1.99996 12 1.99996C12.4307 1.99996 12.7809 2.20323 12.9861 2.34443C13.217 2.50328 13.4343 2.70451 13.6241 2.89962C14.0046 3.29063 14.3865 3.77485 14.6812 4.15067L14.7049 4.18091C14.8152 4.32147 14.9494 4.49235 15.0416 4.64537L15.044 4.64941C15.1093 4.75761 15.4113 5.25775 15.1363 5.82457C14.862 6.39017 14.2859 6.46201 14.1595 6.47777L14.1561 6.47819C13.9797 6.50026 13.764 6.50011 13.5884 6.49998L13.0059 6.49996L13.0059 14Z',
  d6: 'M17.9987 9L21.9974 11L17.9987 21L5.99868 21L2 11L5.99868 9',
  d7: 'M12 13L12 3.39746M9 6.00021L12 3L15 6.00021',
  d8: 'M20.7294 11.7327L17.5535 10.1442L18.4482 8.35547L22.4468 10.3555C22.9119 10.5881 23.1211 11.1383 22.928 11.6212L18.9293 21.6211C18.7775 22.0008 18.4098 22.2498 18.0008 22.2498L6.00082 22.2498C5.59188 22.2498 5.22414 22.0008 5.0723 21.6211L1.07362 11.6212C0.880554 11.1383 1.08974 10.5881 1.5548 10.3555L5.55348 8.35547L6.44816 10.1442L3.2722 11.7327L6.67794 20.2498L17.3237 20.2498L20.7294 11.7327Z',
  d9: 'M12.0021 1.75L15.7092 5.4574L14.2949 6.87156L13.0021 5.5786L13.0021 13.1643H11.0021L11.0021 5.5786L9.70919 6.87156L8.29492 5.4574L12.0021 1.75Z',
} as const;

export const IconUpload03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-stroke-rounded IconUpload03StrokeRounded"
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

export const IconUpload03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-duotone-rounded IconUpload03DuotoneRounded"
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

export const IconUpload03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-twotone-rounded IconUpload03TwotoneRounded"
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

export const IconUpload03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-solid-rounded IconUpload03SolidRounded"
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

export const IconUpload03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-bulk-rounded IconUpload03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUpload03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-stroke-sharp IconUpload03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUpload03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-03-solid-sharp IconUpload03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUpload03: TheIconSelfPack = {
  name: 'Upload03',
  StrokeRounded: IconUpload03StrokeRounded,
  DuotoneRounded: IconUpload03DuotoneRounded,
  TwotoneRounded: IconUpload03TwotoneRounded,
  SolidRounded: IconUpload03SolidRounded,
  BulkRounded: IconUpload03BulkRounded,
  StrokeSharp: IconUpload03StrokeSharp,
  SolidSharp: IconUpload03SolidSharp,
};