import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H21.5',
  d3: 'M6.99981 6H7.00879',
  d4: 'M10.9998 6H11.0088',
  d5: 'M3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088Z',
  d6: 'M2.52275 9C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9M2.52275 9C2.58963 6.43961 2.85312 4.92937 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.1469 4.92937 21.4104 6.43961 21.4773 9M2.52275 9H21.4773',
  d7: 'M22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8458 1.75 11.3787 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424Z',
  d8: 'M12.0559 1.75H11.9416H11.9416C9.75087 1.74999 8.03018 1.74998 6.68677 1.93059C5.31011 2.11568 4.21786 2.50272 3.35966 3.36091C2.50146 4.21911 2.11443 5.31137 1.92934 6.68802C1.88993 6.98118 1.85912 7.29229 1.83503 7.62234C1.8138 7.91313 1.80319 8.05853 1.89219 8.15427C1.9812 8.25 2.12969 8.25 2.42667 8.25H21.5708C21.8678 8.25 22.0163 8.25 22.1053 8.15427C22.1943 8.05853 22.1837 7.91314 22.1625 7.62237V7.62234C22.1384 7.29229 22.1076 6.98118 22.0682 6.68802C21.8831 5.31137 21.496 4.21911 20.6378 3.36091C19.7796 2.50272 18.6874 2.11568 17.3107 1.93059C15.9673 1.74998 14.2466 1.74999 12.0559 1.75H12.0559ZM5.99902 5C5.99902 4.44772 6.44674 4 6.99902 4H7.00801C7.56029 4 8.00801 4.44772 8.00801 5C8.00801 5.55228 7.56029 6 7.00801 6H6.99902C6.44674 6 5.99902 5.55228 5.99902 5ZM10.999 4C10.4467 4 9.99902 4.44772 9.99902 5C9.99902 5.55228 10.4467 6 10.999 6H11.008C11.5603 6 12.008 5.55228 12.008 5C12.008 4.44772 11.5603 4 11.008 4H10.999Z',
  d9: 'M20.5 3H2.5V21H20.5V3Z',
  d10: 'M2 9H21',
  d11: 'M6.49981 6H6.50879',
  d12: 'M10.4998 6H10.5088',
  d13: 'M1.75 3C1.75 2.58579 2.08579 2.25 2.5 2.25H20.5C20.9142 2.25 21.25 2.58579 21.25 3V8.25H1.75V3ZM1.75 21V9.75H21.25V21C21.25 21.4142 20.9142 21.75 20.5 21.75H2.5C2.08579 21.75 1.75 21.4142 1.75 21ZM7.5 4.25H5.5V6.25H7.5V4.25ZM11.5 4.25H9.5V6.25H11.5V4.25Z',
} as const;

export const IconBrowserStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-stroke-rounded IconBrowserStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconBrowserDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-duotone-rounded IconBrowserDuotoneRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconBrowserTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-twotone-rounded IconBrowserTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBrowserSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-solid-rounded IconBrowserSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBrowserBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-bulk-rounded IconBrowserBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBrowserStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-stroke-sharp IconBrowserStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBrowserSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="browser-solid-sharp IconBrowserSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBrowser: TheIconSelfPack = {
  name: 'Browser',
  StrokeRounded: IconBrowserStrokeRounded,
  DuotoneRounded: IconBrowserDuotoneRounded,
  TwotoneRounded: IconBrowserTwotoneRounded,
  SolidRounded: IconBrowserSolidRounded,
  BulkRounded: IconBrowserBulkRounded,
  StrokeSharp: IconBrowserStrokeSharp,
  SolidSharp: IconBrowserSolidSharp,
};