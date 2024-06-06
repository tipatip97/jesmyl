import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C11.1818 22 10.4002 21.6646 8.83693 20.9939C4.94564 19.3243 3 18.4895 3 17.0853L3 7.7475M12 22C12.8182 22 13.5998 21.6646 15.1631 20.9939C19.0544 19.3243 21 18.4895 21 17.0853V7.7475M12 22L12 12.1707M21 7.7475C21 8.35125 20.1984 8.7325 18.5953 9.495L15.6741 10.8844C13.8712 11.7419 12.9697 12.1707 12 12.1707M21 7.7475C21 7.14376 20.1984 6.7625 18.5953 6M3 7.7475C3 8.35125 3.80157 8.7325 5.40472 9.495L8.32592 10.8844C10.1288 11.7419 11.0303 12.1707 12 12.1707M3 7.7475C3 7.14376 3.80157 6.7625 5.40472 6M6.33203 13.311L8.32591 14.2594',
  d2: 'M12 2V4M16 3L14.5 5M8 3L9.5 5',
  d3: 'M21 17.4839C21 18.7742 19.0544 19.5413 15.1631 21.0755C13.5998 21.6918 12.8182 22 12 22C11.1818 22 10.4002 21.6918 8.83693 21.0755C4.94564 19.5413 3 18.7742 3 17.4839L3 8L12 12.0645L21 8V17.4839Z',
  d4: 'M12 22C11.1818 22 10.4002 21.6646 8.83693 20.9939C4.94564 19.3243 3 18.4895 3 17.0853L3 7.7475M12 22C12.8182 22 13.5998 21.6646 15.1631 20.9939C19.0544 19.3243 21 18.4895 21 17.0853V7.7475M12 22L12 12.1707M21 7.7475C21 8.35125 20.1984 8.7325 18.5953 9.495L15.6741 10.8844C13.8712 11.7419 12.9697 12.1707 12 12.1707M21 7.7475C21 7.14376 20.1984 6.7625 18.5953 6M3 7.7475C3 8.35125 3.80157 8.7325 5.40472 9.495L8.32592 10.8844C10.1288 11.7419 11.0303 12.1707 12 12.1707M3 7.7475C3 7.14376 3.80157 6.7625 5.40472 6',
  d5: 'M6.33203 13.3105L8.32591 14.2589',
  d6: 'M4.35044 7.774C4.32174 7.79095 4.1703 7.90406 3.98732 8.04258C4.33255 8.27179 4.90262 8.55067 5.72686 8.9427L8.64806 10.3321C10.5147 11.2199 11.239 11.5457 12 11.5457C12.761 11.5457 13.4853 11.2199 15.3519 10.3321L18.2731 8.94271C19.0974 8.55067 19.6674 8.27179 20.0127 8.04258C19.8297 7.90406 19.6783 7.79095 19.6496 7.774C19.331 7.58589 18.8226 7.36842 18.0116 7.02533C17.5253 6.81962 17.3186 6.30224 17.5499 5.86973C17.7812 5.43723 18.3629 5.25337 18.8492 5.45909L18.9153 5.48704C19.6401 5.79361 20.2788 6.06372 20.7281 6.32909C21.174 6.59237 21.75 7.03217 21.75 7.75763L21.75 17.2103C21.75 18.3359 20.9408 19.0901 19.9311 19.7055C18.9125 20.3263 17.2009 21.0608 15.308 21.8729C13.8908 22.4815 12.9743 22.875 12 22.875C11.0257 22.875 10.1092 22.4814 8.69202 21.8729C6.79913 21.0608 5.08751 20.3264 4.0689 19.7055C3.05921 19.0901 2.25 18.3359 2.25 17.2103L2.25 7.75763C2.25 7.03217 2.826 6.59237 3.27186 6.32909C3.72124 6.06372 4.35993 5.79359 5.08479 5.48701L5.15082 5.45909C5.63709 5.25338 6.21879 5.43723 6.45008 5.86974C6.68137 6.30224 6.47466 6.81962 5.98838 7.02533C5.17738 7.36842 4.66899 7.58589 4.35044 7.774ZM6.65435 12.7604C6.28029 12.5825 5.83283 12.7415 5.65491 13.1155C5.477 13.4896 5.63601 13.9371 6.01007 14.115L8.00395 15.0633C8.37801 15.2412 8.82547 15.0822 9.00338 14.7082C9.1813 14.3341 9.02229 13.8866 8.64823 13.7087L6.65435 12.7604Z',
  d7: 'M12.0001 1.125C12.5523 1.125 13.0001 1.57272 13.0001 2.125V4.125C13.0001 4.67728 12.5523 5.125 12.0001 5.125C11.4478 5.125 11.0001 4.67728 11.0001 4.125V2.125C11.0001 1.57272 11.4478 1.125 12.0001 1.125ZM7.40006 2.325C7.84189 1.99363 8.46869 2.08317 8.80006 2.525L10.3001 4.525C10.6314 4.96683 10.5419 5.59363 10.1001 5.925C9.65823 6.25637 9.03143 6.16683 8.70006 5.725L7.20006 3.725C6.86869 3.28317 6.95823 2.65637 7.40006 2.325ZM16.6001 2.325C17.0419 2.65637 17.1314 3.28317 16.8001 3.725L15.3001 5.725C14.9687 6.16683 14.3419 6.25637 13.9001 5.925C13.4582 5.59363 13.3687 4.96683 13.7001 4.525L15.2001 2.525C15.5314 2.08317 16.1582 1.99363 16.6001 2.325Z',
  d8: 'M3.98732 8.04252C4.1703 7.904 4.32174 7.79089 4.35044 7.77394C4.66899 7.58583 5.17738 7.36836 5.98838 7.02527C6.47466 6.81956 6.68137 6.30218 6.45008 5.86967C6.21879 5.43717 5.63709 5.25332 5.15082 5.45903L5.08479 5.48695L5.08478 5.48696C4.35993 5.79353 3.72124 6.06366 3.27186 6.32903C2.826 6.59231 2.25 7.03211 2.25 7.75757V17.2103C2.25 18.3359 3.05921 19.0901 4.0689 19.7055C5.08751 20.3263 6.79913 21.0607 8.69202 21.8728C10.1092 22.4814 11.0257 22.8749 12 22.8749C12.9743 22.8749 13.8908 22.4814 15.308 21.8728C17.2009 21.0607 18.9125 20.3263 19.9311 19.7055C20.9408 19.0901 21.75 18.3359 21.75 17.2103V7.75757C21.75 7.03211 21.174 6.59231 20.7281 6.32903C20.2788 6.06366 19.6401 5.79354 18.9153 5.48698L18.8492 5.45903C18.3629 5.25331 17.7812 5.43717 17.5499 5.86967C17.3186 6.30218 17.5253 6.81956 18.0116 7.02527C18.8226 7.36835 19.331 7.58583 19.6496 7.77394C19.6783 7.79089 19.8297 7.90399 20.0127 8.04252C19.6674 8.27173 19.0974 8.55061 18.2731 8.94264L15.3519 10.3321C13.4853 11.2199 12.761 11.5456 12 11.5456C11.239 11.5456 10.5147 11.2199 8.64806 10.3321L5.72686 8.94264C4.90262 8.55061 4.33255 8.27173 3.98732 8.04252Z',
  d9: 'M5.65491 13.1155C5.83283 12.7415 6.28029 12.5825 6.65435 12.7604L8.64823 13.7087C9.02229 13.8866 9.1813 14.3341 9.00338 14.7082C8.82547 15.0822 8.37801 15.2412 8.00395 15.0633L6.01007 14.115C5.63601 13.9371 5.477 13.4896 5.65491 13.1155Z',
  d10: 'M17.625 6.5L21 8L12 12L3 8L6.375 6.5',
  d11: 'M6 13.5L8 14.5',
  d12: 'M12 2V5M16 3L14.5 6M8 3L9.5 6',
  d13: 'M3 8.00098L3.074 17.9866L11.9713 21.9922C11.9974 22.0039 12.0272 22.0039 12.0533 21.9922L21 17.9744V8.01594M12.0123 12.0385V21.4904',
  d14: 'M2.25 8.00011V18.4874L11.6954 22.6854C11.8893 22.7715 12.1107 22.7715 12.3046 22.6854L21.75 18.4874V8C21.75 7.70361 21.5754 7.43483 21.3046 7.31445L16.8046 5.31445L16.1954 6.68517L19.1533 7.99981L12 11.1791L4.84666 7.99981L7.8046 6.68517L7.1954 5.31445L2.6954 7.31445C2.42455 7.43483 2.25 7.70372 2.25 8.00011ZM5.83594 14.0062L8.16512 15.1707V13.4937L5.83594 12.3291V14.0062Z',
  d15: 'M11.2489 4.25V1.25H12.7489V4.25H11.2489ZM8.82812 5.58541L7.32812 2.58541L8.66977 1.91459L10.1698 4.91459L8.82812 5.58541ZM13.8281 4.91459L15.3281 1.91459L16.6698 2.58541L15.1698 5.58541L13.8281 4.91459Z',
} as const;

export const IconPackageOpenStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-stroke-rounded IconPackageOpenStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPackageOpenDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-duotone-rounded IconPackageOpenDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPackageOpenTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-twotone-rounded IconPackageOpenTwotoneRounded"
    >
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageOpenSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-solid-rounded IconPackageOpenSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPackageOpenBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-bulk-rounded IconPackageOpenBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageOpenStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-stroke-sharp IconPackageOpenStrokeSharp"
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

export const IconPackageOpenSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-open-solid-sharp IconPackageOpenSolidSharp"
    >
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

export const iconPackOfPackageOpen: TheIconSelfPack = {
  name: 'PackageOpen',
  StrokeRounded: IconPackageOpenStrokeRounded,
  DuotoneRounded: IconPackageOpenDuotoneRounded,
  TwotoneRounded: IconPackageOpenTwotoneRounded,
  SolidRounded: IconPackageOpenSolidRounded,
  BulkRounded: IconPackageOpenBulkRounded,
  StrokeSharp: IconPackageOpenStrokeSharp,
  SolidSharp: IconPackageOpenSolidSharp,
};