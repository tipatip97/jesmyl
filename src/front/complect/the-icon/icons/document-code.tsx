import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 16L19.8398 17.5858C20.6133 18.2525 21 18.5858 21 19C21 19.4142 20.6133 19.7475 19.8398 20.4142L18 22',
  d2: 'M14 16L12.1602 17.5858C11.3867 18.2525 11 18.5858 11 19C11 19.4142 11.3867 19.7475 12.1602 20.4142L14 22',
  d3: 'M20 13.0032L20 7.8199C20 6.12616 20 5.27929 19.732 4.60291C19.3013 3.51555 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848L3 14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22',
  d4: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d5: 'M3 11.9893C3.0055 10.1531 4.49577 8.6662 6.33332 8.6662C6.52066 8.6662 6.71743 8.67543 6.91792 8.68485C7.42993 8.70888 7.96617 8.73405 8.43135 8.60941C9.0065 8.45529 9.45575 8.00605 9.60986 7.43089C9.73451 6.96571 9.70933 6.42948 9.6853 5.91747C9.67589 5.71698 9.66665 5.52021 9.66665 5.33286C9.66665 3.51079 11.1286 2.03016 12.9435 2H13C16.2998 2 17.9498 2 18.9749 3.07908C20 4.15816 20 5.89491 20 9.3684L20 14.6316C20 18.1051 20 19.8418 18.9749 20.9209C17.9498 22 16.2998 22 13 22H10C6.70017 22 5.05025 22 4.02513 20.9209C3 19.8418 3 18.1051 3 14.6316V11.9893Z',
  d6: 'M17.1175 15.2221C16.757 15.6405 16.8038 16.2719 17.2221 16.6325L19.0619 18.2183C19.4282 18.5339 19.6488 18.7264 19.7899 18.875C19.6488 19.0236 19.4282 19.2161 19.0619 19.5318L17.2221 21.1176C16.8038 21.4781 16.757 22.1096 17.1175 22.5279C17.4781 22.9462 18.1095 22.9931 18.5279 22.6325L20.3677 21.0467C20.3823 21.0341 20.3968 21.0216 20.4113 21.0091C20.7602 20.7085 21.0948 20.4202 21.3337 20.1503C21.5959 19.8541 21.875 19.4374 21.875 18.875C21.875 18.3126 21.5959 17.8959 21.3337 17.5998C21.0948 17.3298 20.7602 17.0415 20.4113 16.7409C20.3968 16.7284 20.3823 16.7159 20.3677 16.7033L18.5279 15.1176C18.1095 14.757 17.4781 14.8038 17.1175 15.2221Z',
  d7: 'M14.6325 15.2221C14.993 15.6405 14.9462 16.2719 14.5279 16.6325L12.6881 18.2183C12.3218 18.5339 12.1012 18.7264 11.9601 18.875C12.1012 19.0236 12.3218 19.2161 12.6881 19.5318L14.5279 21.1176C14.9462 21.4781 14.993 22.1096 14.6325 22.5279C14.2719 22.9462 13.6405 22.9931 13.2221 22.6325L11.3823 21.0467C11.3677 21.0341 11.3532 21.0216 11.3387 21.0091C10.9898 20.7085 10.6552 20.4202 10.4163 20.1503C10.1541 19.8541 9.875 19.4374 9.875 18.875C9.875 18.3126 10.1541 17.8959 10.4163 17.5998C10.6552 17.3298 10.9898 17.0415 11.3387 16.7409C11.3532 16.7284 11.3677 16.7159 11.3823 16.7033L13.2221 15.1176C13.6405 14.757 14.2719 14.8038 14.6325 15.2221Z',
  d8: 'M6.81154 22.5222C7.79379 22.625 7.35661 22.625 8.89771 22.625C9.43745 22.625 9.875 22.1874 9.875 21.6477C9.875 21.108 9.43745 20.6704 8.89771 20.6704C7.28909 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V12.9013C18.6776 13.439 19.1136 13.875 19.6513 13.875C20.1891 13.875 20.625 13.439 20.625 12.9013V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d9: 'M17.9974 16.0029L21.0017 19.0007L17.9974 21.9985',
  d10: 'M14.9929 16.0029L11.9886 19.0007L14.9929 21.9985',
  d11: 'M20.0197 13.02V2.10188C20.0197 2.04669 19.9749 2.00195 19.9195 2.00195H9.95552L2.99841 9.00124V21.8907C2.99841 21.9459 3.04325 21.9907 3.09855 21.9907H9.97546M9.9599 2.47254L10.0207 9.00124H3.56482',
  d12: 'M20.2499 2.22727C20.2499 1.68754 19.8139 1.25 19.2762 1.25H9.13604L1.74988 8.66338V21.7727C1.74988 22.3125 2.18581 22.75 2.72356 22.75H9.51293V20.7955H3.69714V10.0455H10.5129L10.5129 3.20459H18.3024V13H20.2499V2.22727Z',
  d13: 'M19.4217 19.043L17.1288 16.7502L18.543 15.3359L22.2501 19.043L18.543 22.7502L17.1288 21.3359L19.4217 19.043Z',
  d14: 'M13.25 19.043L15.5428 16.7502L14.1286 15.3359L10.4215 19.043L14.1286 22.7502L15.5428 21.3359L13.25 19.043Z',
} as const;

export const IconDocumentCodeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-stroke-rounded IconDocumentCodeStrokeRounded"
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

export const IconDocumentCodeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-duotone-rounded IconDocumentCodeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconDocumentCodeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-twotone-rounded IconDocumentCodeTwotoneRounded"
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

export const IconDocumentCodeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-solid-rounded IconDocumentCodeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDocumentCodeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-bulk-rounded IconDocumentCodeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDocumentCodeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-stroke-sharp IconDocumentCodeStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentCodeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-code-solid-sharp IconDocumentCodeSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfDocumentCode: TheIconSelfPack = {
  name: 'DocumentCode',
  StrokeRounded: IconDocumentCodeStrokeRounded,
  DuotoneRounded: IconDocumentCodeDuotoneRounded,
  TwotoneRounded: IconDocumentCodeTwotoneRounded,
  SolidRounded: IconDocumentCodeSolidRounded,
  BulkRounded: IconDocumentCodeBulkRounded,
  StrokeSharp: IconDocumentCodeStrokeSharp,
  SolidSharp: IconDocumentCodeSolidSharp,
};