import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 18.6458V8.05426C4 5.20025 4 3.77325 4.87868 2.88663C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.88663C20 3.77325 20 5.20025 20 8.05426V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4555 21.8374 10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458Z',
  d2: 'M16 6L8 6',
  d3: 'M10 10H8',
  d4: 'M14.5 9.875C13.6716 9.875 13 10.4626 13 11.1875C13 11.9124 13.6716 12.5 14.5 12.5C15.3284 12.5 16 13.0876 16 13.8125C16 14.5374 15.3284 15.125 14.5 15.125M14.5 9.875C15.1531 9.875 15.7087 10.2402 15.9146 10.75M14.5 9.875V9M14.5 15.125C13.8469 15.125 13.2913 14.7598 13.0854 14.25M14.5 15.125V16',
  d5: 'M9.9447 1.25H14.0553H14.0553C15.4225 1.24998 16.5252 1.24996 17.3926 1.36764C18.294 1.48992 19.0524 1.75161 19.654 2.35869C20.2547 2.96484 20.5128 3.72735 20.6336 4.63362C20.75 5.50754 20.75 6.61907 20.75 7.99978L20.75 18.7008C20.75 19.4095 20.7501 20.0198 20.6851 20.4869C20.6185 20.9658 20.4575 21.5107 19.9442 21.8414C19.1857 22.3299 18.345 21.9917 17.8729 21.7447C17.6026 21.6033 17.3485 21.4359 17.1378 21.2911C17.0415 21.2303 16.8882 21.1297 16.7285 21.0249C16.4654 20.8523 16.1851 20.6683 16.114 20.6327C16.0093 20.5753 15.933 20.6036 15.9079 20.6249C15.7948 20.678 15.6438 20.7696 15.371 20.9417L13.4333 22.1636L13.4332 22.1637L13.4331 22.1638C13.1986 22.3117 12.9764 22.4518 12.7761 22.5507C12.5524 22.6611 12.2993 22.75 12 22.75C11.7007 22.75 11.4476 22.6611 11.2239 22.5507C11.0235 22.4518 10.8013 22.3116 10.5667 22.1636L8.62906 20.9417C8.37416 20.7809 8.22825 20.6899 8.11404 20.6327C8.0012 20.5706 7.9296 20.6016 7.9079 20.6249C7.7948 20.678 7.64376 20.7696 7.37095 20.9417C7.16019 21.0865 6.39744 21.6033 6.12709 21.7447C5.655 21.9917 4.81435 22.3299 4.05584 21.8414C3.54247 21.5107 3.38152 20.9658 3.3149 20.4869C3.24992 20.0198 3.24996 19.4095 3.25 18.7008L3.25 7.99974V7.99973C3.24998 6.61904 3.24997 5.50753 3.36641 4.63362C3.48716 3.72735 3.74526 2.96484 4.34597 2.35869C4.94761 1.75161 5.70602 1.48992 6.60736 1.36764C7.47477 1.24996 8.57748 1.24998 9.94469 1.25H9.9447ZM16 6.75C16.4142 6.75 16.75 6.41421 16.75 6C16.75 5.58579 16.4142 5.25 16 5.25H8C7.58579 5.25 7.25 5.58579 7.25 6C7.25 6.41421 7.58579 6.75 8 6.75H16ZM10.75 10C10.75 10.4142 10.4142 10.75 10 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H10C10.4142 9.25 10.75 9.58579 10.75 10ZM15.25 9C15.25 8.58579 14.9142 8.25 14.5 8.25C14.0858 8.25 13.75 8.58579 13.75 9V9.24489C12.916 9.51697 12.25 10.2324 12.25 11.1875C12.25 12.4175 13.3546 13.25 14.5 13.25C15.0114 13.25 15.25 13.5928 15.25 13.8125C15.25 14.0322 15.0114 14.375 14.5 14.375C14.1136 14.375 13.8582 14.1608 13.7808 13.9691C13.6256 13.585 13.1885 13.3995 12.8044 13.5546C12.4204 13.7097 12.2348 14.1468 12.3899 14.5309C12.6304 15.1261 13.1404 15.5603 13.75 15.7573V16C13.75 16.4142 14.0858 16.75 14.5 16.75C14.9142 16.75 15.25 16.4142 15.25 16V15.7551C16.084 15.483 16.75 14.7676 16.75 13.8125C16.75 12.5825 15.6454 11.75 14.5 11.75C13.9886 11.75 13.75 11.4072 13.75 11.1875C13.75 10.9678 13.9886 10.625 14.5 10.625C14.8864 10.625 15.1418 10.8392 15.2192 11.0309C15.3744 11.415 15.8115 11.6005 16.1956 11.4454C16.5796 11.2903 16.7652 10.8532 16.6101 10.4691C16.3696 9.87386 15.8596 9.4397 15.25 9.24272V9Z',
  d6: 'M14.0553 1.25H9.9447H9.94469C8.57748 1.24998 7.47477 1.24996 6.60736 1.36764C5.70602 1.48992 4.94761 1.75161 4.34597 2.35869C3.74526 2.96484 3.48716 3.72735 3.36641 4.63362C3.24997 5.50753 3.24998 6.61904 3.25 7.99973V7.99974L3.25 18.7008C3.24996 19.4095 3.24992 20.0198 3.3149 20.4869C3.38152 20.9658 3.54247 21.5107 4.05584 21.8414C4.81435 22.3299 5.655 21.9917 6.12709 21.7447C6.39744 21.6033 7.16019 21.0865 7.37095 20.9417C7.64376 20.7696 7.7948 20.678 7.9079 20.6249C7.9296 20.6016 8.0012 20.5706 8.11404 20.6327C8.22825 20.6899 8.37416 20.7809 8.62906 20.9417L10.5667 22.1636C10.8013 22.3116 11.0235 22.4518 11.2239 22.5507C11.4476 22.6611 11.7007 22.75 12 22.75C12.2993 22.75 12.5524 22.6611 12.7761 22.5507C12.9765 22.4518 13.1986 22.3117 13.4332 22.1637L13.4333 22.1636L15.371 20.9417C15.6438 20.7696 15.7948 20.678 15.9079 20.6249C15.933 20.6036 16.0093 20.5753 16.114 20.6327C16.2283 20.6899 16.8829 21.1303 17.1378 21.2911C17.3485 21.4359 17.6026 21.6033 17.8729 21.7447C18.345 21.9917 19.1857 22.3299 19.9442 21.8414C20.4575 21.5107 20.6185 20.9658 20.6851 20.4869C20.7501 20.0198 20.75 19.4095 20.75 18.7008L20.75 7.99978C20.75 6.61907 20.75 5.50754 20.6336 4.63362C20.5128 3.72735 20.2547 2.96484 19.654 2.35869C19.0524 1.75161 18.294 1.48992 17.3926 1.36764C16.5252 1.24996 15.4225 1.24998 14.0553 1.25H14.0553Z',
  d7: 'M16.75 6C16.75 6.41421 16.4142 6.75 16 6.75L8 6.75C7.58579 6.75 7.25 6.41421 7.25 6C7.25 5.58579 7.58579 5.25 8 5.25L16 5.25C16.4142 5.25 16.75 5.58579 16.75 6Z',
  d8: 'M10.75 10C10.75 10.4142 10.4142 10.75 10 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H10C10.4142 9.25 10.75 9.58579 10.75 10Z',
  d9: 'M14.5 8.25C14.9142 8.25 15.25 8.58579 15.25 9V9.24272C15.8596 9.4397 16.3696 9.87386 16.6101 10.4691C16.7652 10.8532 16.5796 11.2903 16.1956 11.4454C15.8115 11.6005 15.3744 11.415 15.2192 11.0309C15.1418 10.8392 14.8864 10.625 14.5 10.625C13.9886 10.625 13.75 10.9678 13.75 11.1875C13.75 11.4072 13.9886 11.75 14.5 11.75C15.6454 11.75 16.75 12.5825 16.75 13.8125C16.75 14.7676 16.084 15.483 15.25 15.7551V16C15.25 16.4142 14.9142 16.75 14.5 16.75C14.0858 16.75 13.75 16.4142 13.75 16V15.7573C13.1404 15.5603 12.6304 15.1261 12.3899 14.5309C12.2348 14.1468 12.4204 13.7097 12.8044 13.5546C13.1885 13.3995 13.6256 13.585 13.7808 13.9691C13.8582 14.1608 14.1136 14.375 14.5 14.375C15.0114 14.375 15.25 14.0322 15.25 13.8125C15.25 13.5928 15.0114 13.25 14.5 13.25C13.3546 13.25 12.25 12.4175 12.25 11.1875C12.25 10.2324 12.916 9.51697 13.75 9.24489V9C13.75 8.58579 14.0858 8.25 14.5 8.25Z',
  d10: 'M16 6H8',
  d11: 'M11 10H8',
  d12: 'M14.5 9.875C13.6716 9.875 13 10.4626 13 11.1875C13 11.9124 13.6716 12.5 14.5 12.5C15.3284 12.5 16 13.0876 16 13.8125C16 14.5374 15.3284 15.125 14.5 15.125M14.5 9.875C15.1531 9.875 15.7087 10.2402 15.9146 10.75M14.5 9.875V8.5M14.5 15.125C13.8469 15.125 13.2913 14.7598 13.0854 14.25M14.5 15.125V16.5',
  d13: 'M20.5093 21.3688V2.04263C20.5093 1.98734 19.9557 2.00036 19.9004 2.00036H3.57002C3.51479 2.00036 3.50752 2.1343 3.50752 2.18959V21.466C3.50752 21.5409 3.49649 21.5279 3.56303 21.4938L7.49415 19.5133L11.9628 21.9864C11.9929 22.0032 12.0295 22.0032 12.0597 21.9866L16.489 19.5035L20.405 21.4931C20.4715 21.5269 20.5093 21.4435 20.5093 21.3688Z',
  d14: 'M3.5 1.25C3.30108 1.25 3.1103 1.32902 2.96965 1.46969C2.829 1.61035 2.74999 1.80113 2.75 2.00005L2.75139 21.5124C2.7514 21.7726 2.88636 22.0143 3.10794 22.1508C3.32952 22.2874 3.60605 22.2993 3.83854 22.1823L7.48267 20.3483L11.6358 22.6556C11.8623 22.7815 12.1377 22.7815 12.3642 22.6556L16.5174 20.3483L20.1629 22.1823C20.3954 22.2993 20.672 22.2873 20.8935 22.1508C21.1151 22.0142 21.25 21.7726 21.25 21.5123V2C21.25 1.58579 20.9142 1.25 20.5 1.25H3.5ZM16 5.25H8V6.75H16V5.25ZM8 9.25H11V10.75H8V9.25ZM12.25 11.1875C12.25 10.2324 12.916 9.51697 13.75 9.24489V8.5H15.25V9.24272C15.8596 9.4397 16.3696 9.87386 16.6101 10.4691L15.2192 11.0309C15.1418 10.8392 14.8864 10.625 14.5 10.625C13.9886 10.625 13.75 10.9678 13.75 11.1875C13.75 11.4072 13.9886 11.75 14.5 11.75C15.6454 11.75 16.75 12.5825 16.75 13.8125C16.75 14.7676 16.084 15.483 15.25 15.7551V16.5H13.75V15.7573C13.1404 15.5603 12.6304 15.1261 12.3899 14.5309L13.7808 13.9691C13.8582 14.1608 14.1136 14.375 14.5 14.375C15.0114 14.375 15.25 14.0322 15.25 13.8125C15.25 13.5928 15.0114 13.25 14.5 13.25C13.3546 13.25 12.25 12.4175 12.25 11.1875Z',
} as const;

export const IconInvoice02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-stroke-rounded IconInvoice02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconInvoice02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-duotone-rounded IconInvoice02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconInvoice02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-twotone-rounded IconInvoice02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-solid-rounded IconInvoice02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-bulk-rounded IconInvoice02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconInvoice02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-stroke-sharp IconInvoice02StrokeSharp"
    >
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInvoice02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="invoice-02-solid-sharp IconInvoice02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInvoice02: TheIconSelfPack = {
  name: 'Invoice02',
  StrokeRounded: IconInvoice02StrokeRounded,
  DuotoneRounded: IconInvoice02DuotoneRounded,
  TwotoneRounded: IconInvoice02TwotoneRounded,
  SolidRounded: IconInvoice02SolidRounded,
  BulkRounded: IconInvoice02BulkRounded,
  StrokeSharp: IconInvoice02StrokeSharp,
  SolidSharp: IconInvoice02SolidSharp,
};