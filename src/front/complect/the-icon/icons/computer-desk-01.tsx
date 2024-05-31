import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12H2',
  d2: 'M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12',
  d3: 'M4 12V22M20 12V22',
  d4: 'M7 6V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2H14C15.4142 2 16.1213 2 16.5607 2.43934C17 2.87868 17 3.58579 17 5V6C17 7.41421 17 8.12132 16.5607 8.56066C16.1213 9 15.4142 9 14 9H10C8.58579 9 7.87868 9 7.43934 8.56066C7 8.12132 7 7.41421 7 6Z',
  d5: 'M13.5 9L14 12M10.5 9L10 12',
  d6: 'M16 17H20V12H12V13C12 14.8856 12 15.8284 12.5858 16.4142C13.1716 17 14.1144 17 16 17Z',
  d7: 'M14 12L13.5 9H10.5L10 12H14Z',
  d8: 'M10.6646 7.88864C11.2093 7.97944 11.5773 8.49466 11.4866 9.03943L10.9865 12.0394C10.8958 12.5842 10.3805 12.9522 9.83576 12.8614C9.29099 12.7706 8.92297 12.2554 9.01376 11.7106L9.51376 8.71064C9.60456 8.16586 10.1198 7.79785 10.6646 7.88864ZM13.3358 7.88864C13.8805 7.79785 14.3958 8.16586 14.4865 8.71064L14.9865 11.7106C15.0773 12.2554 14.7093 12.7706 14.1646 12.8614C13.6198 12.9522 13.1046 12.5842 13.0138 12.0394L12.5138 9.03943C12.423 8.49466 12.791 7.97944 13.3358 7.88864Z',
  d9: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H11.25L11.25 12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d10: 'M9.95063 1.125L10 1.125L14.0494 1.125H14.0494C14.7143 1.12496 15.2871 1.12493 15.7458 1.18661C16.2375 1.25271 16.7087 1.40177 17.091 1.78401C17.4732 2.16626 17.6223 2.63752 17.6884 3.12916C17.7501 3.5879 17.75 4.16076 17.75 4.82562V4.82563V5.92437V5.92438C17.75 6.58925 17.7501 7.1621 17.6884 7.62085C17.6223 8.11248 17.4732 8.58375 17.091 8.96599C16.7087 9.34824 16.2375 9.4973 15.7458 9.5634C15.2871 9.62507 14.7142 9.62504 14.0494 9.62501H9.95064C9.28577 9.62504 8.71291 9.62507 8.25416 9.5634C7.76252 9.4973 7.29126 9.34824 6.90901 8.96599C6.52677 8.58375 6.37771 8.11248 6.31161 7.62085C6.24993 7.16211 6.24996 6.58927 6.25 5.92443V5.92438L6.25 5.875V4.875L6.25 4.82563V4.82558C6.24996 4.16074 6.24993 3.58789 6.31161 3.12916C6.37771 2.63752 6.52677 2.16626 6.90901 1.78401C7.29126 1.40177 7.76252 1.25271 8.25416 1.18661C8.71289 1.12493 9.28574 1.12496 9.95058 1.125H9.95063Z',
  d11: 'M9.36169 9.62328C8.94286 9.61923 8.57125 9.60608 8.25416 9.56345C7.76252 9.49735 7.29126 9.34829 6.90902 8.96605C6.52677 8.5838 6.37771 8.11254 6.31161 7.6209C6.24994 7.16218 6.24997 6.58935 6.25 5.92453V5.92448V5.92443L6.25001 5.87506V4.87506L6.25 4.82568V4.82563V4.82559C6.24997 4.16076 6.24994 3.58794 6.31161 3.12921C6.37771 2.63758 6.52677 2.16631 6.90901 1.78407C7.29126 1.40182 7.76252 1.25276 8.25416 1.18666C8.71289 1.12499 9.28574 1.12502 9.95058 1.12505H9.95063L10 1.12506L14.0494 1.12505H14.0494C14.7143 1.12502 15.2871 1.12499 15.7458 1.18666C16.2375 1.25276 16.7087 1.40182 17.091 1.78407C17.4732 2.16631 17.6223 2.63758 17.6884 3.12921C17.7501 3.58795 17.75 4.16081 17.75 4.82567V4.82568V4.82569V5.92443V5.92444V5.92445C17.75 6.58931 17.7501 7.16216 17.6884 7.6209C17.6223 8.11254 17.4732 8.5838 17.091 8.96605C16.7087 9.34829 16.2375 9.49735 15.7458 9.56345C15.4288 9.60607 15.0573 9.61923 14.6386 9.62327L14.9866 11.7108C15.0773 12.2556 14.7093 12.7708 14.1646 12.8616C13.6198 12.9524 13.1046 12.5844 13.0138 12.0396L12.6113 9.62506H11.389L10.9866 12.0396C10.8958 12.5844 10.3805 12.9524 9.83576 12.8616C9.29099 12.7708 8.92297 12.2556 9.01376 11.7108L9.36169 9.62328Z',
  d12: 'M11.25 12.875L11.25 12.927V12.927C11.25 13.8255 11.2499 14.5747 11.3299 15.1695C11.4143 15.7973 11.6 16.3641 12.0555 16.8195C12.5109 17.275 13.0777 17.4607 13.7055 17.5451C14.3003 17.6251 15.0495 17.625 15.948 17.625L19 17.625V12.875H11.25Z',
  d13: 'M2 10.875C1.44772 10.875 1 11.3227 1 11.875C1 12.4273 1.44772 12.875 2 12.875H3V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875V12.875H19V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875H22C22.5523 12.875 23 12.4273 23 11.875C23 11.3227 22.5523 10.875 22 10.875H2Z',
  d14: 'M20 17H12V12',
  d15: 'M17 9H7L7.00128 2H17V9Z',
  d16: 'M13.5 9V12M10.5 9V12',
  d17: 'M11.25 12.25H20V18H12C11.5858 18 11.25 17.6642 11.25 17.25V12.25Z',
  d18: 'M2 11.25H22V13.25H21V22.25H19V13.25H5V22.25H3V13.25H2V11.25Z',
  d19: 'M6.25128 2.49986C6.25136 2.0857 6.58712 1.75 7.00128 1.75H17C17.4142 1.75 17.75 2.08579 17.75 2.5V9.5C17.75 9.91421 17.4142 10.25 17 10.25H7C6.80106 10.25 6.61028 10.171 6.46962 10.0303C6.32897 9.8896 6.24996 9.6988 6.25 9.49986L6.25128 2.49986Z',
  d20: 'M13.5 12.25V9.25H10.5V12.25H13.5Z',
} as const;

export const IconComputerDesk01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-stroke-rounded IconComputerDesk01StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-duotone-rounded IconComputerDesk01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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

export const IconComputerDesk01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-twotone-rounded IconComputerDesk01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconComputerDesk01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-solid-rounded IconComputerDesk01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconComputerDesk01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-bulk-rounded IconComputerDesk01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-stroke-sharp IconComputerDesk01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerDesk01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-desk-01-solid-sharp IconComputerDesk01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerDesk01: TheIconSelfPack = {
  name: 'ComputerDesk01',
  StrokeRounded: IconComputerDesk01StrokeRounded,
  DuotoneRounded: IconComputerDesk01DuotoneRounded,
  TwotoneRounded: IconComputerDesk01TwotoneRounded,
  SolidRounded: IconComputerDesk01SolidRounded,
  BulkRounded: IconComputerDesk01BulkRounded,
  StrokeSharp: IconComputerDesk01StrokeSharp,
  SolidSharp: IconComputerDesk01SolidSharp,
};