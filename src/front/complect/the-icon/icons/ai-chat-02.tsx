import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d2: 'M7.5 15L9.34189 9.47434C9.43631 9.19107 9.7014 9 10 9C10.2986 9 10.5637 9.19107 10.6581 9.47434L12.5 15M15.5 9V15M8.5 13H11.5',
  d3: 'M14.2204 1.82273C12.7601 1.72566 11.2369 1.72586 9.77965 1.82273C5.213 2.12629 1.58972 5.81258 1.2918 10.4224C1.23607 11.2848 1.23607 12.1768 1.2918 13.0392C1.40272 14.7556 2.15148 16.304 2.98381 17.5604C3.23314 18.0419 3.10323 18.7641 2.6369 19.6478C2.48022 19.9445 2.30536 20.2757 2.21688 20.5234C2.12313 20.7858 2.02623 21.2025 2.26791 21.6145C2.48996 21.9931 2.84475 22.1318 3.13152 22.1873C3.36961 22.2334 3.70728 22.2414 3.98117 22.248C5.40092 22.2825 6.40136 21.8726 7.1938 21.2883C7.35108 21.1723 7.45909 21.0929 7.54041 21.037C7.65868 21.0804 7.8203 21.1467 8.05839 21.2448C8.59978 21.4677 9.21472 21.6013 9.77965 21.6389C11.2369 21.7357 12.7601 21.7359 14.2204 21.6389C18.787 21.3353 22.4103 17.649 22.7082 13.0392C22.7639 12.1768 22.7639 11.2848 22.7082 10.4224C22.4103 5.81258 18.787 2.12629 14.2204 1.82273ZM10.0002 8.25C9.37879 8.25 8.82709 8.64764 8.63058 9.23717L6.78869 14.7628C6.65771 15.1558 6.87008 15.5805 7.26303 15.7115C7.65599 15.8425 8.08073 15.6301 8.21172 15.2372L8.70744 13.75H11.293L11.7887 15.2372C11.9197 15.6301 12.3444 15.8425 12.7374 15.7115C13.1303 15.5805 13.3427 15.1558 13.2117 14.7628L11.3698 9.23717C11.1733 8.64764 10.6216 8.25 10.0002 8.25ZM10.0002 9.87171L10.793 12.25H9.20744L10.0002 9.87171ZM16.2502 9C16.2502 8.58579 15.9144 8.25 15.5002 8.25C15.086 8.25 14.7502 8.58579 14.7502 9V15C14.7502 15.4142 15.086 15.75 15.5002 15.75C15.9144 15.75 16.2502 15.4142 16.2502 15V9Z',
  d4: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248C3.70728 22.2414 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.48022 19.9445 2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273Z',
  d5: 'M8.63058 9.23717C8.82709 8.64764 9.37879 8.25 10.0002 8.25C10.6216 8.25 11.1733 8.64764 11.3698 9.23717L13.2117 14.7628C13.3427 15.1558 13.1303 15.5805 12.7374 15.7115C12.3444 15.8425 11.9197 15.6301 11.7887 15.2372L11.293 13.75H8.70744L8.21172 15.2372C8.08073 15.6301 7.65599 15.8425 7.26303 15.7115C6.87008 15.5805 6.65771 15.1558 6.78869 14.7628L8.63058 9.23717ZM9.20744 12.25H10.793L10.0002 9.87171L9.20744 12.25ZM15.5002 8.25C15.9144 8.25 16.2502 8.58579 16.2502 9V15C16.2502 15.4142 15.9144 15.75 15.5002 15.75C15.086 15.75 14.7502 15.4142 14.7502 15V9C14.7502 8.58579 15.086 8.25 15.5002 8.25Z',
  d6: 'M9.95552 2.51378C3.32444 2.88475 -0.343341 10.8061 3.66715 17.4702L2.08344 21.459M9.95552 2.51378C10.119 2.50464 10.2843 2.5 10.4513 2.5M9.95552 2.51378L13.9216 2.5M13.4258 2.5C18.3834 2.5 20.8622 6.50378 21.3579 8.0052C23.3409 15.0118 20.3664 18.5151 17.3919 20.0165C15.0598 21.5905 8.18544 21.3836 6.54192 20.0165L2.08344 21.459M2.08344 21.459C2.05294 21.5372 2.00395 21.484 2.08344 21.459Z',
  d7: 'M8.25614 13.1874L10.0804 8.53202L11.9038 13.1874M8.25614 13.1874L7.30762 15.6633M8.25614 13.1874H11.9038M11.9038 13.1874L12.9177 15.6633M15.4748 8.2373V15.8121',
  d8: 'M14.1405 1.7722C13.8204 1.74999 13.4486 1.74999 12.7895 1.75H12.7895H11.2105H11.2105C10.5514 1.74999 10.1796 1.74999 9.85949 1.7722C5.25571 2.09176 1.59176 5.75571 1.2722 10.3595C1.24999 10.6796 1.24999 11.1304 1.25 11.7895V11.7895C1.24999 12.4486 1.24999 12.8204 1.2722 13.1405C1.38603 14.7804 1.92471 16.3022 2.77921 17.5954L1.32436 21.2207C1.21546 21.492 1.27419 21.8019 1.47482 22.0146C1.67546 22.2273 1.98141 22.304 2.25865 22.2112L6.43709 20.8113C7.48219 21.3226 8.63831 21.643 9.85949 21.7278C10.1796 21.75 10.5514 21.75 11.2105 21.75H12.7895C13.4486 21.75 13.8204 21.75 14.1405 21.7278C18.7443 21.4082 22.4082 17.7443 22.7278 13.1405C22.75 12.8204 22.75 12.4486 22.75 11.7895C22.75 11.1304 22.75 10.6796 22.7278 10.3595C22.4082 5.75571 18.7443 2.09176 14.1405 1.7722ZM10.8731 8.25H9.26796L6.53125 15.4339L7.93298 15.9679L8.70169 13.95H11.4394L12.2081 15.9679L13.6098 15.4339L10.8731 8.25ZM10.868 12.45H9.27312L10.0705 10.3568L10.868 12.45ZM16.2491 15.75V8.25H14.7491V15.75H16.2491Z',
} as const;

export const IconAiChat02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-stroke-rounded IconAiChat02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiChat02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-duotone-rounded IconAiChat02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiChat02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-twotone-rounded IconAiChat02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconAiChat02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-solid-rounded IconAiChat02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiChat02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-bulk-rounded IconAiChat02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAiChat02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-stroke-sharp IconAiChat02StrokeSharp"
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
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiChat02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-chat-02-solid-sharp IconAiChat02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiChat02: TheIconSelfPack = {
  name: 'AiChat02',
  StrokeRounded: IconAiChat02StrokeRounded,
  DuotoneRounded: IconAiChat02DuotoneRounded,
  TwotoneRounded: IconAiChat02TwotoneRounded,
  SolidRounded: IconAiChat02SolidRounded,
  BulkRounded: IconAiChat02BulkRounded,
  StrokeSharp: IconAiChat02StrokeSharp,
  SolidSharp: IconAiChat02SolidSharp,
};