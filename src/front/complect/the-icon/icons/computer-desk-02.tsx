import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12H2',
  d2: 'M17 12V8C17 7.17267 17.1727 7 18 7H19C19.8273 7 20 7.17267 20 8V12',
  d3: 'M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12',
  d4: 'M4 12V22M20 12V22',
  d5: 'M3 6V5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2H10C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V6C13 7.41421 13 8.12132 12.5607 8.56066C12.1213 9 11.4142 9 10 9H6C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z',
  d6: 'M9.5 9L10 12M6.5 9L6 12',
  d7: 'M16 17H20V12H12V13C12 14.8856 12 15.8284 12.5858 16.4142C13.1716 17 14.1144 17 16 17Z',
  d8: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H11.25L11.25 12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d9: 'M17 12.625C16.5858 12.625 16.25 12.2892 16.25 11.875V7.875C16.25 7.65194 16.2607 7.42148 16.3074 7.2088C16.356 6.98761 16.4532 6.74064 16.6594 6.53442C16.8656 6.3282 17.1126 6.23096 17.3338 6.18237C17.5465 6.13565 17.7769 6.125 18 6.125H19C19.2231 6.125 19.4535 6.13565 19.6662 6.18237C19.8874 6.23096 20.1344 6.3282 20.3406 6.53442C20.5468 6.74064 20.644 6.98761 20.6926 7.2088C20.7393 7.42148 20.75 7.65194 20.75 7.875V11.875C20.75 12.2892 20.4142 12.625 20 12.625H17Z',
  d10: 'M5.95063 1.125L6 1.125L10.0494 1.125H10.0494C10.7143 1.12496 11.2871 1.12493 11.7458 1.18661C12.2375 1.25271 12.7087 1.40177 13.091 1.78401C13.4732 2.16626 13.6223 2.63752 13.6884 3.12916C13.7501 3.5879 13.75 4.16076 13.75 4.82562V4.82563V5.92437V5.92438C13.75 6.58925 13.7501 7.1621 13.6884 7.62085C13.6223 8.11248 13.4732 8.58375 13.091 8.96599C12.7087 9.34824 12.2375 9.4973 11.7458 9.5634C11.2871 9.62507 10.7142 9.62504 10.0494 9.62501H5.95064C5.28577 9.62504 4.71291 9.62507 4.25416 9.5634C3.76252 9.4973 3.29126 9.34824 2.90901 8.96599C2.52677 8.58375 2.37771 8.11248 2.31161 7.62085C2.24993 7.16211 2.24996 6.58927 2.25 5.92443V5.92438L2.25 5.875V4.875L2.25 4.82563V4.82558C2.24996 4.16074 2.24993 3.58789 2.31161 3.12916C2.37771 2.63752 2.52677 2.16626 2.90901 1.78401C3.29126 1.40177 3.76252 1.25271 4.25416 1.18661C4.71289 1.12493 5.28574 1.12496 5.95058 1.125H5.95063Z',
  d11: 'M6.66456 7.88852C7.20933 7.97931 7.57735 8.49454 7.48655 9.03931L6.98655 12.0393C6.89575 12.5841 6.38053 12.9521 5.83576 12.8613C5.29099 12.7705 4.92297 12.2553 5.01376 11.7105L5.51376 8.71051C5.60456 8.16574 6.11978 7.79772 6.66456 7.88852ZM9.33576 7.88852C9.88053 7.79772 10.3958 8.16574 10.4865 8.71051L10.9865 11.7105C11.0773 12.2553 10.7093 12.7705 10.1646 12.8613C9.61978 12.9521 9.10456 12.5841 9.01376 12.0393L8.51376 9.03931C8.42297 8.49454 8.79099 7.97931 9.33576 7.88852Z',
  d12: 'M11.25 12.875L11.25 12.927V12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V12.875H11.25Z',
  d13: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H19V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d14: 'M5.36169 9.62328C4.94286 9.61923 4.57125 9.60608 4.25416 9.56345C3.76252 9.49735 3.29126 9.34829 2.90902 8.96605C2.52677 8.5838 2.37771 8.11254 2.31161 7.6209C2.24994 7.16218 2.24997 6.58935 2.25 5.92453V5.92448V5.92443L2.25001 5.87506V4.87506L2.25 4.82568V4.82563V4.82559C2.24997 4.16076 2.24994 3.58794 2.31161 3.12921C2.37771 2.63758 2.52677 2.16631 2.90901 1.78407C3.29126 1.40182 3.76252 1.25276 4.25416 1.18666C4.71289 1.12499 5.28574 1.12502 5.95058 1.12505H5.95063L6.00001 1.12506L10.0494 1.12505H10.0494C10.7143 1.12502 11.2871 1.12499 11.7458 1.18666C12.2375 1.25276 12.7087 1.40182 13.091 1.78407C13.4732 2.16631 13.6223 2.63758 13.6884 3.12921C13.7501 3.58795 13.75 4.16081 13.75 4.82567V4.82568V4.82569L13.75 5.92443V5.92444V5.92445C13.75 6.58931 13.7501 7.16216 13.6884 7.6209C13.6223 8.11254 13.4732 8.5838 13.091 8.96605C12.7087 9.34829 12.2375 9.49735 11.7458 9.56345C11.4288 9.60607 11.0573 9.61923 10.6386 9.62327L10.9866 11.7108C11.0773 12.2556 10.7093 12.7708 10.1646 12.8616C9.61979 12.9524 9.10456 12.5844 9.01376 12.0396L8.61134 9.62506H7.38898L6.98655 12.0396C6.89576 12.5844 6.38053 12.9524 5.83576 12.8616C5.29099 12.7708 4.92297 12.2556 5.01376 11.7108L5.36169 9.62328Z',
  d15: 'M19.9657 11.9839H16.9663L16.9667 6.99219H19.9657V11.9839Z',
  d16: 'M12.9672 8.98841H2.96924L2.97052 2H12.9672V8.98841Z',
  d17: 'M9.46764 8.98828V11.9833M6.46826 8.98828V11.9833',
  d18: 'M3.99175 21.976V16.9957V12.0154M11.9528 12.0154V16.8758C11.9528 16.931 11.9976 16.9757 12.0528 16.9757L19.9602 17.0029M19.9602 22V12.0059M1.99854 12.0154H22.0015',
  d19: 'M16.2505 6.25L20.7501 6.25V12.75H16.25L16.2505 6.25ZM17.7504 7.75L17.7501 11.25H19.2501V7.75L17.7504 7.75Z',
  d20: 'M11.25 12.25H20V18H12C11.5858 18 11.25 17.6642 11.25 17.25V12.25Z',
  d21: 'M2 11.25H22V13.25H21V22.25H19V13.25H5V22.25H3V13.25H2V11.25Z',
  d22: 'M2.25128 2.49986C2.25136 2.0857 2.58712 1.75 3.00128 1.75H13C13.4142 1.75 13.75 2.08579 13.75 2.5V9.5C13.75 9.91421 13.4142 10.25 13 10.25H3C2.80106 10.25 2.61028 10.171 2.46962 10.0303C2.32897 9.8896 2.24996 9.6988 2.25 9.49986L2.25128 2.49986Z',
  d23: 'M9.5 12.25V9.25H6.5V12.25H9.5Z',
} as const;

export const IconComputerDesk02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-stroke-rounded IconComputerDesk02StrokeRounded"
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
      <path 
        d={d.d5} 
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

export const IconComputerDesk02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-duotone-rounded IconComputerDesk02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d5} 
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

export const IconComputerDesk02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-twotone-rounded IconComputerDesk02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-solid-rounded IconComputerDesk02SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-bulk-rounded IconComputerDesk02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconComputerDesk02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-stroke-sharp IconComputerDesk02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-02-solid-sharp IconComputerDesk02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerDesk02: TheIconSelfPack = {
  name: 'ComputerDesk02',
  StrokeRounded: IconComputerDesk02StrokeRounded,
  DuotoneRounded: IconComputerDesk02DuotoneRounded,
  TwotoneRounded: IconComputerDesk02TwotoneRounded,
  SolidRounded: IconComputerDesk02SolidRounded,
  BulkRounded: IconComputerDesk02BulkRounded,
  StrokeSharp: IconComputerDesk02StrokeSharp,
  SolidSharp: IconComputerDesk02SolidSharp,
};