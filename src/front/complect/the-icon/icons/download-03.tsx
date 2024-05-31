import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.25 9C20.3077 9.0736 22.0549 10.6169 21.9987 12.6844C21.9856 13.1654 21.7993 13.7599 21.4266 14.9489C20.5298 17.8104 19.0226 20.2944 15.6462 20.8904C15.0255 21 14.3271 21 12.9303 21H11.0697C9.6729 21 8.9745 21 8.35384 20.8904C4.97739 20.2944 3.47018 17.8104 2.57336 14.9489C2.20072 13.7599 2.01439 13.1654 2.00132 12.6844C1.94512 10.6169 3.6923 9.0736 5.75001 9',
  d2: 'M12 14L12 3M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5',
  d3: 'M11.0697 21H12.9303C14.3271 21 15.0255 21 15.6462 20.8904C19.0226 20.2944 20.5298 17.8104 21.4266 14.9489C21.7993 13.7599 21.9856 13.1654 21.9987 12.6844C22.0549 10.6169 20.3077 9.0736 18.25 9H5.75001C3.6923 9.0736 1.94512 10.6169 2.00132 12.6844C2.01439 13.1654 2.20072 13.7599 2.57336 14.9489C3.47018 17.8104 4.97739 20.2944 8.35384 20.8904C8.9745 21 9.6729 21 11.0697 21Z',
  d4: 'M6.74942 8.96427C6.76916 9.5162 6.33774 9.97963 5.78581 9.99937C4.16777 10.0572 2.96252 11.2414 3.001 12.6572C3.0093 12.9624 3.13216 13.3879 3.52765 14.6498C4.38358 17.3809 5.70497 19.4074 8.52772 19.9057C9.04115 19.9963 9.63393 20 11.0698 20H12.9303C14.3662 20 14.959 19.9963 15.4724 19.9057C18.2951 19.4074 19.6165 17.3809 20.4725 14.6498C20.8679 13.3879 20.9908 12.9624 20.9991 12.6572C21.0376 11.2414 19.8323 10.0572 18.2143 9.99937C17.6624 9.97963 17.2309 9.5162 17.2507 8.96427C17.2704 8.41234 17.7338 7.98091 18.2858 8.00065C20.7832 8.08998 23.0723 9.99244 22.9984 12.7115C22.9814 13.3348 22.7556 14.0541 22.4337 15.0796C22.4164 15.1348 22.3988 15.1909 22.3809 15.248C21.4432 18.2399 19.7502 21.1815 15.82 21.8752C15.1122 22.0002 14.3324 22.0001 13.0413 22C13.0047 22 12.9677 22 12.9303 22H11.0698C11.0324 22 10.9954 22 10.9588 22C9.66774 22.0001 8.8879 22.0002 8.18007 21.8752C4.24993 21.1815 2.55688 18.2399 1.61918 15.248C1.60131 15.1909 1.5837 15.1348 1.56636 15.0796C1.24446 14.0541 1.01868 13.3348 1.00174 12.7115C0.927832 9.99245 3.21694 8.08998 5.71431 8.00065C6.26625 7.98091 6.72968 8.41233 6.74942 8.96427Z',
  d5: 'M13.0059 3C13.0059 2.44772 12.5581 2 12.0059 2C11.4536 2 11.0059 2.44772 11.0059 3L11.0059 10.5L10.4116 10.5C10.236 10.4999 10.0203 10.4997 9.84387 10.5218L9.84053 10.5222C9.71408 10.538 9.13804 10.6098 8.86368 11.1754C8.58872 11.7423 8.89065 12.2424 8.95597 12.3506L8.95841 12.3546C9.05062 12.5076 9.18477 12.6785 9.29511 12.8191L9.31885 12.8493C9.61348 13.2252 9.99545 13.7094 10.3759 14.1004C10.5657 14.2955 10.783 14.4967 11.0139 14.6556C11.2191 14.7968 11.5693 15 12 15C12.4307 15 12.7809 14.7968 12.9861 14.6556C13.217 14.4967 13.4343 14.2955 13.6241 14.1004C14.0046 13.7094 14.3865 13.2252 14.6812 12.8493L14.7049 12.8191C14.8152 12.6785 14.9494 12.5077 15.0416 12.3546L15.044 12.3506C15.1093 12.2424 15.4113 11.7422 15.1363 11.1754C14.862 10.6098 14.2859 10.538 14.1595 10.5222L14.1561 10.5218C13.9797 10.4997 13.764 10.4999 13.5884 10.5L13.0059 10.5L13.0059 3Z',
  d6: 'M18.0006 9L21.9993 11L18.0006 21L6.00064 21L2.00195 11L6.00064 9',
  d7: 'M12 3L12 13.5337M9 10.9998L12 14L15 10.9998',
  d8: 'M20.7294 10.9827L17.5535 9.3942L18.4482 7.60547L22.4468 9.6055C22.9119 9.83811 23.1211 10.3883 22.928 10.8712L18.9293 20.8711C18.7775 21.2508 18.4098 21.4998 18.0008 21.4998L6.00082 21.4998C5.59188 21.4998 5.22414 21.2508 5.0723 20.8711L1.07362 10.8712C0.880554 10.3883 1.08974 9.83811 1.5548 9.6055L5.55348 7.60547L6.44816 9.3942L3.2722 10.9827L6.67794 19.4998L17.3237 19.4998L20.7294 10.9827Z',
  d9: 'M13.0001 2.5L13.0001 11.0857L14.293 9.7927L15.7072 11.2069L12.0001 14.9143L8.29297 11.2069L9.70723 9.7927L11.0001 11.0857L11.0001 2.5H13.0001Z',
} as const;

export const IconDownload03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-stroke-rounded IconDownload03StrokeRounded"
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

export const IconDownload03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-duotone-rounded IconDownload03DuotoneRounded"
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

export const IconDownload03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-twotone-rounded IconDownload03TwotoneRounded"
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

export const IconDownload03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-solid-rounded IconDownload03SolidRounded"
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

export const IconDownload03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-bulk-rounded IconDownload03BulkRounded"
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

export const IconDownload03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-stroke-sharp IconDownload03StrokeSharp"
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

export const IconDownload03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-03-solid-sharp IconDownload03SolidSharp"
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

export const iconPackOfDownload03: TheIconSelfPack = {
  name: 'Download03',
  StrokeRounded: IconDownload03StrokeRounded,
  DuotoneRounded: IconDownload03DuotoneRounded,
  TwotoneRounded: IconDownload03TwotoneRounded,
  SolidRounded: IconDownload03SolidRounded,
  BulkRounded: IconDownload03BulkRounded,
  StrokeSharp: IconDownload03StrokeSharp,
  SolidSharp: IconDownload03SolidSharp,
};