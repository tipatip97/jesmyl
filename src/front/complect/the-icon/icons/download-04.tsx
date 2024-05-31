import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12',
  d2: 'M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5',
  d3: 'M17 19.5H7C4.518 19.5 4 18.982 4 16.5H20C20 18.982 19.482 19.5 17 19.5Z',
  d4: 'M13.0059 4.5C13.0059 3.94772 12.5581 3.5 12.0059 3.5C11.4536 3.5 11.0059 3.94772 11.0059 4.5L11.0059 11L10.4116 11C10.236 10.9999 10.0203 10.9997 9.84387 11.0218L9.84053 11.0222C9.71408 11.038 9.13804 11.1098 8.86368 11.6754C8.58872 12.2423 8.89065 12.7424 8.95597 12.8506L8.95841 12.8546C9.05062 13.0076 9.18477 13.1785 9.29511 13.3191L9.31885 13.3493C9.61348 13.7252 9.99545 14.2094 10.3759 14.6004C10.5657 14.7955 10.783 14.9967 11.0139 15.1556C11.2191 15.2968 11.5693 15.5 12 15.5C12.4307 15.5 12.7809 15.2968 12.9861 15.1556C13.217 14.9967 13.4343 14.7955 13.6241 14.6004C14.0046 14.2094 14.3865 13.7252 14.6812 13.3493L14.7049 13.3191C14.8152 13.1785 14.9494 13.0077 15.0416 12.8546L15.044 12.8506C15.1093 12.7424 15.4113 12.2422 15.1363 11.6754C14.862 11.1098 14.2859 11.038 14.1595 11.0222L14.1561 11.0218C13.9797 10.9997 13.764 10.9999 13.5884 11L13.0059 11L13.0059 4.5Z',
  d5: 'M4 15.5C4.55228 15.5 5 15.9477 5 16.5C5 17.0989 5.03256 17.5106 5.09643 17.8013C5.15781 18.0807 5.23372 18.181 5.27636 18.2236C5.31899 18.2663 5.41933 18.3422 5.69872 18.4036C5.98944 18.4674 6.40114 18.5 7 18.5H17C17.5989 18.5 18.0106 18.4674 18.3013 18.4036C18.5807 18.3422 18.681 18.2663 18.7236 18.2236C18.7663 18.181 18.8422 18.0807 18.9036 17.8013C18.9674 17.5106 19 17.0989 19 16.5C19 15.9477 19.4477 15.5 20 15.5C20.5523 15.5 21 15.9477 21 16.5C21 17.1421 20.9678 17.7259 20.857 18.2304C20.7437 18.7462 20.535 19.2407 20.1379 19.6379C19.7407 20.035 19.2462 20.2437 18.7304 20.357C18.2259 20.4678 17.6421 20.5 17 20.5H7C6.35786 20.5 5.77406 20.4678 5.26959 20.357C4.7538 20.2437 4.25926 20.035 3.86214 19.6379C3.46503 19.2407 3.25632 18.7462 3.14301 18.2304C3.03219 17.7259 3 17.1421 3 16.5C3 15.9477 3.44772 15.5 4 15.5Z',
  d6: 'M12 4.5L12 13.9643M9 11.4998L12 14.5L15 11.4998',
  d7: 'M20 16.5L19 19.5H5L4 16.5',
  d8: 'M13.0001 4L13.0001 11.5857L14.293 10.2927L15.7072 11.7069L12.0001 15.4143L8.29297 11.7069L9.70723 10.2927L11.0001 11.5857L11.0001 4H13.0001Z',
  d9: 'M5.66944 17.9998L4.89737 15.6836L3 16.316L4.22792 19.9998H19.7721L21 16.316L19.1026 15.6836L18.3306 17.9998H5.66944Z',
} as const;

export const IconDownload04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-stroke-rounded IconDownload04StrokeRounded"
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

export const IconDownload04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-duotone-rounded IconDownload04DuotoneRounded"
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

export const IconDownload04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-twotone-rounded IconDownload04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDownload04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-solid-rounded IconDownload04SolidRounded"
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

export const IconDownload04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-bulk-rounded IconDownload04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDownload04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-stroke-sharp IconDownload04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownload04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-04-solid-sharp IconDownload04SolidSharp"
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

export const iconPackOfDownload04: TheIconSelfPack = {
  name: 'Download04',
  StrokeRounded: IconDownload04StrokeRounded,
  DuotoneRounded: IconDownload04DuotoneRounded,
  TwotoneRounded: IconDownload04TwotoneRounded,
  SolidRounded: IconDownload04SolidRounded,
  BulkRounded: IconDownload04BulkRounded,
  StrokeSharp: IconDownload04StrokeSharp,
  SolidSharp: IconDownload04SolidSharp,
};