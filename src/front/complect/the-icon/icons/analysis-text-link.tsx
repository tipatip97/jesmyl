import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M7 4H8',
  d3: 'M7 7H11',
  d4: 'M5 20C6.07093 18.053 7.52279 13.0189 10.3063 13.0189C12.2301 13.0189 12.7283 15.4717 14.6136 15.4717C17.8572 15.4717 17.387 10 21 10',
  d5: 'M9 3C9 3.55228 8.55228 4 8 4H7C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2H8C8.55228 2 9 2.44772 9 3Z',
  d6: 'M12 7C12 7.55228 11.5523 8 11 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H11C11.5523 6 12 6.44772 12 7Z',
  d7: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.18163 18.1714 4.26041 18.7042 4.6078 19.0495C5.11558 19.5542 5.65243 19.7947 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99995 16.9539 1.99997 15.6607 2 14.072V3C2 2.44772 2.44772 2 3 2Z',
  d8: 'M6.18726 19.8651C6.3807 19.4565 6.56361 19.043 6.7465 18.6296C7.09983 17.8308 7.45308 17.0322 7.88206 16.2696C8.28242 15.5577 8.69797 14.9707 9.13128 14.5707C9.55588 14.1788 9.93769 14.0189 10.3058 14.0189C10.8784 14.0189 11.3159 14.4783 11.6952 14.8766C11.7412 14.925 11.7865 14.9725 11.8309 15.0182C12.3831 15.5847 13.2476 16.4717 14.6132 16.4717C15.7622 16.4717 16.5941 15.9651 17.2097 15.2911C17.7401 14.7105 18.1403 13.9674 18.4738 13.348C18.4988 13.3018 18.5233 13.2562 18.5475 13.2114C19.3296 11.7648 19.8601 11 20.9995 11C21.5518 11 21.9995 10.5523 21.9995 10C21.9995 9.44772 21.5518 9 20.9995 9C18.5501 9 17.5056 10.9328 16.8086 12.2224C16.7608 12.3109 16.7134 12.4003 16.6658 12.49C16.396 12.9986 16.1205 13.5181 15.733 13.9424C15.4115 14.2943 15.0859 14.4717 14.6132 14.4717C14.1538 14.4717 13.8415 14.2124 13.1883 13.5455C13.1695 13.5263 13.1503 13.5067 13.1308 13.4867C12.5705 12.9129 11.6975 12.0189 10.3058 12.0189C9.28219 12.0189 8.43871 12.4882 7.77477 13.1011C7.11953 13.7058 6.58328 14.499 6.13887 15.2891C5.67762 16.1092 5.29664 16.967 4.91553 17.8252C4.7625 18.1697 4.60945 18.5144 4.45117 18.8566C4.49622 18.9256 4.54789 18.9903 4.60747 19.0495C5.0872 19.5263 5.59287 19.7673 6.18726 19.8651Z',
  d9: 'M21 21H3V3',
  d10: 'M7 4H10',
  d11: 'M7 7H13',
  d12: 'M3.5 20.5L10 12L14 15L19 10',
  d13: 'M10.5 4.5H7.5V2.5H10.5V4.5Z',
  d14: 'M13.5 7.5H7.5V5.5H13.5V7.5Z',
  d15: 'M4.5 17.5855V2.5H2.5V20.5C2.5 21.0523 2.94772 21.5 3.5 21.5H21.5V19.5H5.54464L10.6861 12.8896L13.9 15.3C14.2981 15.5986 14.8552 15.559 15.2071 15.2071L20.2071 10.2071L18.7929 8.79289L14.4062 13.1796L11.1 10.7C10.6636 10.3727 10.0455 10.4555 9.71065 10.8861L4.5 17.5855Z',
} as const;

export const IconAnalysisTextLinkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-stroke-rounded IconAnalysisTextLinkStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-duotone-rounded IconAnalysisTextLinkDuotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-twotone-rounded IconAnalysisTextLinkTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-solid-rounded IconAnalysisTextLinkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-bulk-rounded IconAnalysisTextLinkBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-stroke-sharp IconAnalysisTextLinkStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalysisTextLinkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="analysis-text-link-solid-sharp IconAnalysisTextLinkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAnalysisTextLink: TheIconSelfPack = {
  name: 'AnalysisTextLink',
  StrokeRounded: IconAnalysisTextLinkStrokeRounded,
  DuotoneRounded: IconAnalysisTextLinkDuotoneRounded,
  TwotoneRounded: IconAnalysisTextLinkTwotoneRounded,
  SolidRounded: IconAnalysisTextLinkSolidRounded,
  BulkRounded: IconAnalysisTextLinkBulkRounded,
  StrokeSharp: IconAnalysisTextLinkStrokeSharp,
  SolidSharp: IconAnalysisTextLinkSolidSharp,
};