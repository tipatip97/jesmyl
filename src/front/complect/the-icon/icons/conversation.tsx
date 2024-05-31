import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2H14C15.4142 2 16.1213 2 16.5607 2.43934C17 2.87868 17 3.58579 17 5V6C17 7.41421 17 8.12132 16.5607 8.56066C16.1213 9 15.4142 9 14 9H13L10 11V9C8.58579 9 7.87868 9 7.43934 8.56066C7 8.12132 7 7.41421 7 6Z',
  d2: 'M3.59003 18.7408C2.96125 19.162 1.31261 20.0221 2.31674 21.0983C2.80725 21.624 3.35355 22 4.04039 22H6H7.95961C8.64645 22 9.19275 21.624 9.68326 21.0983C10.6874 20.0221 9.03875 19.162 8.40997 18.7408C6.93547 17.7531 5.06453 17.7531 3.59003 18.7408Z',
  d3: 'M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3536 22 16.0404 22H18H19.9596C20.6464 22 21.1928 21.624 21.6833 21.0983C22.6874 20.0221 21.0388 19.162 20.41 18.7408C18.9355 17.7531 17.0645 17.7531 15.59 18.7408Z',
  d4: 'M8 13.5C8 14.6046 7.10457 15.5 6 15.5C4.89543 15.5 4 14.6046 4 13.5C4 12.3954 4.89543 11.5 6 11.5C7.10457 11.5 8 12.3954 8 13.5Z',
  d5: 'M20 13.5C20 14.6046 19.1046 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1046 11.5 20 12.3954 20 13.5Z',
  d6: 'M14.0494 1.25C14.7143 1.24996 15.2871 1.24993 15.7458 1.31161C16.2375 1.37771 16.7087 1.52677 17.091 1.90901C17.4732 2.29126 17.6223 2.76252 17.6884 3.25416C17.7501 3.7129 17.75 4.28576 17.75 4.95062V4.95063V6.04937V6.04938C17.75 6.71425 17.7501 7.2871 17.6884 7.74585C17.6223 8.23748 17.4732 8.70875 17.091 9.09099C16.7087 9.47324 16.2375 9.6223 15.7458 9.6884C15.2871 9.75007 14.7142 9.75004 14.0494 9.75001L13.2271 9.75L10.416 11.624C10.1859 11.7775 9.88998 11.7918 9.64611 11.6613C9.40224 11.5307 9.25 11.2766 9.25 11V9.7469C8.87656 9.74158 8.54277 9.7272 8.25416 9.6884C7.76252 9.6223 7.29126 9.47324 6.90901 9.09099C6.52677 8.70875 6.37771 8.23748 6.31161 7.74585C6.24993 7.28711 6.24996 6.71427 6.25 6.04943V6.04938V4.95063V4.95058C6.24996 4.28574 6.24993 3.71289 6.31161 3.25416C6.37771 2.76252 6.52677 2.29126 6.90901 1.90901C7.29126 1.52677 7.76252 1.37771 8.25416 1.31161C8.71289 1.24993 9.28574 1.24996 9.95058 1.25H9.95063H14.0494H14.0494Z',
  d7: 'M3.17272 18.1177C4.89978 16.9608 7.10042 16.9608 8.82747 18.1177C9.13753 18.3137 9.84353 18.7614 10.2143 19.1697C10.4496 19.4288 10.6977 19.7967 10.7429 20.2626C10.7915 20.7627 10.5935 21.2221 10.2317 21.6099C9.68462 22.1963 8.95301 22.75 7.95971 22.75H4.04048C3.04719 22.75 2.31558 22.1963 1.76846 21.6099C1.40665 21.2221 1.20867 20.7627 1.25726 20.2626C1.30253 19.7967 1.55059 19.4288 1.78592 19.1697C2.15667 18.7614 2.86266 18.3137 3.17272 18.1177Z',
  d8: 'M15.1727 18.1177C16.8998 16.9608 19.1004 16.9608 20.8275 18.1177C21.1375 18.3137 21.8435 18.7614 22.2143 19.1697C22.4496 19.4288 22.6977 19.7967 22.7429 20.2626C22.7915 20.7627 22.5935 21.2221 22.2317 21.6099C21.6846 22.1963 20.953 22.75 19.9597 22.75H16.0405C15.0472 22.75 14.3156 22.1963 13.7685 21.6099C13.4067 21.2221 13.2087 20.7627 13.2573 20.2626C13.3025 19.7967 13.5506 19.4288 13.7859 19.1697C14.1567 18.7614 14.8627 18.3137 15.1727 18.1177Z',
  d9: 'M3.25 13.5C3.25 11.9812 4.48122 10.75 6 10.75C7.51878 10.75 8.75 11.9812 8.75 13.5C8.75 15.0188 7.51878 16.25 6 16.25C4.48122 16.25 3.25 15.0188 3.25 13.5Z',
  d10: 'M15.25 13.5C15.25 11.9812 16.4812 10.75 18 10.75C19.5188 10.75 20.75 11.9812 20.75 13.5C20.75 15.0188 19.5188 16.25 18 16.25C16.4812 16.25 15.25 15.0188 15.25 13.5Z',
  d11: 'M7 9V2H17L17 9H13L10 11V9H7Z',
  d12: 'M10 22H2C2 19.7909 3.79086 18 6 18C8.20914 18 10 19.7909 10 22Z',
  d13: 'M22 22H14C14 19.7909 15.7909 18 18 18C20.2091 18 22 19.7909 22 22Z',
  d14: 'M6.25 2C6.25 1.58579 6.58579 1.25 7 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2L17.75 9C17.75 9.19891 17.671 9.38968 17.5303 9.53033C17.3897 9.67098 17.1989 9.75 17 9.75H13.2271L10.416 11.624C10.1859 11.7775 9.88997 11.7918 9.64611 11.6613C9.40224 11.5307 9.25 11.2766 9.25 11V9.75H7C6.58579 9.75 6.25 9.41421 6.25 9V2Z',
  d15: 'M1.25 22C1.25 19.3766 3.37665 17.25 6 17.25C8.62335 17.25 10.75 19.3766 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z',
  d16: 'M13.25 22C13.25 19.3766 15.3766 17.25 18 17.25C20.6234 17.25 22.75 19.3766 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22Z',
} as const;

export const IconConversationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-stroke-rounded IconConversationStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-duotone-rounded IconConversationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-twotone-rounded IconConversationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-solid-rounded IconConversationSolidRounded"
    >
      <path 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-bulk-rounded IconConversationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-stroke-sharp IconConversationStrokeSharp"
    >
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConversationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="conversation-solid-sharp IconConversationSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfConversation: TheIconSelfPack = {
  name: 'Conversation',
  StrokeRounded: IconConversationStrokeRounded,
  DuotoneRounded: IconConversationDuotoneRounded,
  TwotoneRounded: IconConversationTwotoneRounded,
  SolidRounded: IconConversationSolidRounded,
  BulkRounded: IconConversationBulkRounded,
  StrokeSharp: IconConversationStrokeSharp,
  SolidSharp: IconConversationSolidSharp,
};