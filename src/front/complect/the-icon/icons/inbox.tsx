import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 12.5307 2.5 13.0299 2.50231 13.5H7.42566C8.26777 13.5 8.92942 14.2036 9.30054 14.9472C9.70373 15.7551 10.5111 16.5 12 16.5C13.4889 16.5 14.2963 15.7551 14.6995 14.9472C15.0706 14.2036 15.7322 13.5 16.5743 13.5L21.4977 13.5035C21.5 13.0324 21.5 12.532 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124Z',
  d4: 'M12.825 1.75C15.0007 1.74998 15.7354 1.74997 17.0955 1.93282C18.4999 2.12164 19.6537 2.52175 20.5661 3.43414C21.4784 4.34653 21.8786 5.50033 22.0674 6.90471C22.2313 8.12428 22.2483 10.047 22.25 12L22.2436 13.5037C22.235 15.2454 22.1957 16.6539 21.9906 17.7892C21.7817 18.9461 21.3902 19.8839 20.635 20.6391C19.7768 21.4973 18.6846 21.8843 17.3079 22.0694C15.9645 22.25 14.2438 22.25 12.0531 22.25H11.9387C9.74803 22.25 8.02736 22.25 6.68394 22.0694C5.30729 21.8843 4.21503 21.4973 3.35683 20.6391C2.60166 19.8839 2.21017 18.9461 2.00121 17.7892C1.79614 16.6539 1.75682 15.2454 1.74825 13.5037L1.75038 11.9999C1.75212 10.0469 1.76905 8.12426 1.93301 6.90471C2.12183 5.50033 2.52194 4.34653 3.43433 3.43414C4.34672 2.52175 5.50052 2.12164 6.9049 1.93282C8.26503 1.74996 9.99976 1.74998 12.1757 1.75H12.825ZM20.0852 7.17121C20.2409 8.32894 20.2497 10.2983 20.2502 12.4499C20.2502 12.6155 20.1159 12.75 19.9502 12.75L16.5703 12.75C15.2901 12.75 14.4348 13.7898 14.0243 14.6123C13.7341 15.1938 13.1705 15.75 11.9959 15.75C10.8213 15.75 10.2577 15.1938 9.96753 14.6123C9.55704 13.7898 8.70177 12.75 7.42158 12.75L4.05019 12.75C3.8845 12.75 3.75018 12.6155 3.75022 12.4499C3.75069 10.2983 3.75952 8.32894 3.91518 7.17121C4.07417 5.9886 4.36969 5.3272 4.84854 4.84835C5.32739 4.3695 5.98879 4.07399 7.1714 3.91499C8.38277 3.75212 10.4827 3.75 12.7502 3.75C15.0176 3.75 15.6176 3.75212 16.829 3.91499C18.0116 4.07399 18.673 4.3695 19.1518 4.84835C19.6307 5.3272 19.9262 5.9886 20.0852 7.17121Z',
  d5: 'M12.8277 1.75C15.0033 1.74998 15.7381 1.74997 17.0981 1.93282C18.5025 2.12164 19.6563 2.52175 20.5687 3.43414C21.4811 4.34653 21.8812 5.50033 22.07 6.90471C22.234 8.12428 22.2509 10.047 22.2526 12L22.2494 12.75H20.2528C20.2528 10.4826 20.2507 8.38258 20.0878 7.17121C19.9288 5.9886 19.6333 5.3272 19.1545 4.84835C18.6756 4.3695 18.0142 4.07399 16.8316 3.91499C15.6202 3.75212 15.0203 3.75 12.7528 3.75C10.4854 3.75 8.3854 3.75212 7.17403 3.91499C5.99143 4.07399 5.33003 4.3695 4.85118 4.84835C4.37232 5.3272 4.07681 5.9886 3.91782 7.17121C3.75495 8.38258 3.75283 10.4826 3.75283 12.75L1.75195 12.7518L1.75302 11.9999C1.75475 10.0469 1.77169 8.12426 1.93565 6.90471C2.12447 5.50033 2.52457 4.34653 3.43696 3.43414C4.34935 2.52175 5.50316 2.12164 6.90754 1.93282C8.26767 1.74996 10.0024 1.74998 12.1783 1.75H12.1784H12.8277H12.8277Z',
  d6: 'M22.2453 13.5037C22.2368 15.2454 22.1975 16.6539 21.9924 17.7892C21.7834 18.9461 21.3919 19.8839 20.6368 20.6391C19.7786 21.4973 18.6863 21.8843 17.3097 22.0694C15.9662 22.25 14.2455 22.25 12.0548 22.25H11.9405C9.74978 22.25 8.02911 22.25 6.6857 22.0694C5.30904 21.8843 4.21679 21.4973 3.35859 20.6391C2.60342 19.8839 2.21192 18.9461 2.00296 17.7892C1.79789 16.6539 1.75858 15.2454 1.75 13.5037L1.75107 12.7518L3.75194 12.75L7.42333 12.75C8.70352 12.75 9.55879 13.7898 9.96929 14.6123C10.2595 15.1938 10.8231 15.75 11.9977 15.75C13.1723 15.75 13.7358 15.1938 14.0261 14.6123C14.4366 13.7898 15.2918 12.75 16.572 12.75L20.2519 12.75H22.2486L22.2453 13.5037Z',
  d7: 'M3 3H21V21H3V3Z',
  d8: 'M21 14H15C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14H3',
  d9: 'M2.25 3.225C2.25 2.68652 2.68652 2.25 3.225 2.25H20.775C21.3135 2.25 21.75 2.68652 21.75 3.225V20.775C21.75 21.3135 21.3135 21.75 20.775 21.75H3.225C2.68652 21.75 2.25 21.3135 2.25 20.775V3.225ZM4.19922 4.20001V13H9.74922V13.75C9.74922 14.9927 10.7566 16 11.9992 16C13.2419 16 14.2492 14.9927 14.2492 13.75V13H19.7992V4.20001H4.19922Z',
} as const;

export const IconInboxStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-stroke-rounded IconInboxStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-duotone-rounded IconInboxDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-twotone-rounded IconInboxTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-solid-rounded IconInboxSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInboxBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-bulk-rounded IconInboxBulkRounded"
    >
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

export const IconInboxStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-stroke-sharp IconInboxStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconInboxSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="inbox-solid-sharp IconInboxSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInbox: TheIconSelfPack = {
  name: 'Inbox',
  StrokeRounded: IconInboxStrokeRounded,
  DuotoneRounded: IconInboxDuotoneRounded,
  TwotoneRounded: IconInboxTwotoneRounded,
  SolidRounded: IconInboxSolidRounded,
  BulkRounded: IconInboxBulkRounded,
  StrokeSharp: IconInboxStrokeSharp,
  SolidSharp: IconInboxSolidSharp,
};