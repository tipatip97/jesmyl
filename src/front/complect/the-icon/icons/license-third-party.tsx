import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.4706 22C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14L2 10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2L11.5294 2C15.5225 2 17.519 2 18.7595 3.17157C20 4.34315 20 6.22876 20 10',
  d2: 'M7 7H15',
  d3: 'M7 12H13',
  d4: 'M14 22C15.8385 19.2518 20.1188 19.1018 22 22M20 14.9287C20 15.9939 19.1046 16.8574 18 16.8574C16.8954 16.8574 16 15.9939 16 14.9287C16 13.8635 16.8954 13 18 13C19.1046 13 20 13.8635 20 14.9287Z',
  d5: 'M18.7595 3.17157C17.519 2 15.5225 2 11.5294 2H10.4706C6.47752 2 4.48098 2 3.24049 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.24049 20.8284C4.48098 22 6.47751 22 10.4706 22H11.5294C15.5225 22 17.519 22 18.7595 20.8284C19.8865 19.764 19.9896 18.1103 19.9991 14.9887C19.9662 16.0261 19.0837 16.8574 18 16.8574C16.8954 16.8574 16 15.9939 16 14.9287C16 13.8635 16.8954 13 18 13C19.0873 13 19.9719 13.8367 19.9993 14.8788C20 14.5978 20 14.3051 20 14V10C20 6.22876 20 4.34315 18.7595 3.17157Z',
  d6: 'M14 22.0006C15.8385 19.2524 20.1188 19.1024 22 22.0006',
  d7: 'M20 14.9287C20 15.9939 19.1046 16.8574 18 16.8574C16.8954 16.8574 16 15.9939 16 14.9287C16 13.8635 16.8954 13 18 13C19.1046 13 20 13.8635 20 14.9287Z',
  d8: 'M11.5833 0.75C13.5342 0.749988 15.0706 0.749978 16.2712 0.902422C17.5001 1.05847 18.4904 1.38575 19.2745 2.12631C20.0647 2.87259 20.4194 3.82468 20.5875 5.00521C20.75 6.14729 20.75 7.60545 20.75 9.44072V9.44074V9.96542C20.75 10.4884 20.75 10.7499 20.6162 10.8389C20.4824 10.9279 20.2085 10.8133 19.6606 10.584C19.1448 10.368 18.5816 10.25 18 10.25C15.7349 10.25 13.75 12.0404 13.75 14.4287C13.75 15.3875 14.0699 16.2499 14.5994 16.9388L14.5994 16.9388C14.8923 17.32 15.0388 17.5105 15.0127 17.6436C14.9867 17.7766 14.7901 17.8914 14.397 18.1209C13.6076 18.5818 12.8992 19.2001 12.3286 19.9678C12.0001 20.4098 11.8558 20.9237 11.8106 21.6501C11.7925 21.9415 11.7835 22.0872 11.6969 22.1686C11.6103 22.25 11.4715 22.25 11.1941 22.25H11.1941L10.4167 22.25C8.46586 22.25 6.92941 22.25 5.72885 22.0976C4.49987 21.9415 3.50965 21.6142 2.72552 20.8737C1.93534 20.1274 1.5806 19.1753 1.41255 17.9948C1.24997 16.8527 1.24998 15.3946 1.25 13.5593V13.5593V9.44067V9.44066C1.24998 7.6054 1.24997 6.14729 1.41255 5.00521C1.5806 3.82468 1.93534 2.87259 2.72552 2.12631C3.50965 1.38575 4.49987 1.05847 5.72885 0.902421C6.9294 0.749978 8.46584 0.749988 10.4167 0.75H10.4167H11.5833ZM7 5.5C6.44772 5.5 6 5.94772 6 6.5C6 7.05228 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.05228 16 6.5C16 5.94772 15.5523 5.5 15 5.5H7ZM7 10.5C6.44772 10.5 6 10.9477 6 11.5C6 12.0523 6.44772 12.5 7 12.5H11C11.5523 12.5 12 12.0523 12 11.5C12 10.9477 11.5523 10.5 11 10.5H7Z',
  d9: 'M15.25 14.4287C15.25 12.9239 16.5071 11.75 18 11.75C19.4929 11.75 20.75 12.9239 20.75 14.4287C20.75 15.9335 19.4929 17.1074 18 17.1074C16.5071 17.1074 15.25 15.9335 15.25 14.4287Z',
  d10: 'M13.5325 20.8626C15.6777 17.9765 20.2703 17.7998 22.4798 20.8737C22.6685 21.1363 22.75 21.441 22.75 21.7289C22.75 22.569 22.069 23.25 21.2289 23.25H14.7666C13.929 23.25 13.25 22.571 13.25 21.7334C13.25 21.4399 13.3348 21.1285 13.5325 20.8626Z',
  d11: 'M16.2712 0.902422C15.0706 0.749978 13.5342 0.749988 11.5833 0.75H10.4167C8.46585 0.749988 6.92941 0.749977 5.72885 0.902421C4.49987 1.05847 3.50965 1.38575 2.72552 2.12631C1.93534 2.87259 1.5806 3.82468 1.41255 5.00521C1.24997 6.14729 1.24998 7.6054 1.25 9.44067V13.5593C1.24998 15.3946 1.24997 16.8527 1.41255 17.9948C1.5806 19.1753 1.93534 20.1274 2.72552 20.8737C3.50965 21.6142 4.49987 21.9415 5.72885 22.0976C6.92941 22.25 8.46586 22.25 10.4167 22.25L11.1941 22.25C11.4715 22.25 11.6103 22.25 11.6969 22.1686C11.7835 22.0872 11.7925 21.9415 11.8106 21.6501C11.8558 20.9237 12.0001 20.4098 12.3286 19.9678C12.8992 19.2001 13.6076 18.5818 14.397 18.1209C14.7901 17.8914 14.9867 17.7766 15.0127 17.6436C15.0388 17.5105 14.8923 17.32 14.5994 16.9388C14.0699 16.2499 13.75 15.3875 13.75 14.4287C13.75 12.0404 15.7349 10.25 18 10.25C18.5816 10.25 19.1448 10.368 19.6606 10.584C20.2085 10.8133 20.4824 10.9279 20.6162 10.8389C20.75 10.7499 20.75 10.4884 20.75 9.96542V9.44074C20.75 7.60546 20.75 6.1473 20.5875 5.00521C20.4194 3.82468 20.0647 2.87259 19.2745 2.12631C18.4904 1.38575 17.5001 1.05847 16.2712 0.902422Z',
  d12: 'M6 6.5C6 5.94772 6.44772 5.5 7 5.5H15C15.5523 5.5 16 5.94772 16 6.5C16 7.05228 15.5523 7.5 15 7.5H7C6.44772 7.5 6 7.05228 6 6.5ZM6 11.5C6 10.9477 6.44772 10.5 7 10.5H11C11.5523 10.5 12 10.9477 12 11.5C12 12.0523 11.5523 12.5 11 12.5H7C6.44772 12.5 6 12.0523 6 11.5Z',
  d13: 'M12 22H2L2.00017 2H20V10',
  d14: 'M22 22H15C15 20.067 16.567 18.5 18.5 18.5C20.433 18.5 22 20.067 22 22Z',
  d15: 'M20.25 14.75C20.25 15.7165 19.4665 16.5 18.5 16.5C17.5335 16.5 16.75 15.7165 16.75 14.75C16.75 13.7835 17.5335 13 18.5 13C19.4665 13 20.25 13.7835 20.25 14.75Z',
  d16: 'M1.25017 1.99999C1.25018 1.58578 1.58596 1.25 2.00017 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V11.4423C20.1089 11.0054 19.3343 10.75 18.5 10.75C16.2909 10.75 14.5 12.5409 14.5 14.75C14.5 15.9087 14.9926 16.9523 15.7799 17.6828C13.9762 18.6531 12.75 20.5584 12.75 22.75H2C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22L1.25017 1.99999ZM7 8H15V6H7V8ZM7 13H13V11H7V13Z',
  d17: 'M16 14.75C16 13.3693 17.1193 12.25 18.5 12.25C19.8807 12.25 21 13.3693 21 14.75C21 16.1307 19.8807 17.25 18.5 17.25C17.1193 17.25 16 16.1307 16 14.75Z',
  d18: 'M14.25 22.75C14.25 20.4028 16.1528 18.5 18.5 18.5C20.8472 18.5 22.75 20.4028 22.75 22.75H14.25Z',
} as const;

export const IconLicenseThirdPartyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-stroke-rounded IconLicenseThirdPartyStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLicenseThirdPartyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-duotone-rounded IconLicenseThirdPartyDuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseThirdPartyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-twotone-rounded IconLicenseThirdPartyTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLicenseThirdPartySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-solid-rounded IconLicenseThirdPartySolidRounded"
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

export const IconLicenseThirdPartyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-bulk-rounded IconLicenseThirdPartyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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

export const IconLicenseThirdPartyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-stroke-sharp IconLicenseThirdPartyStrokeSharp"
    >
      <path 
        d={d.d13} 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseThirdPartySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-third-party-solid-sharp IconLicenseThirdPartySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLicenseThirdParty: TheIconSelfPack = {
  name: 'LicenseThirdParty',
  StrokeRounded: IconLicenseThirdPartyStrokeRounded,
  DuotoneRounded: IconLicenseThirdPartyDuotoneRounded,
  TwotoneRounded: IconLicenseThirdPartyTwotoneRounded,
  SolidRounded: IconLicenseThirdPartySolidRounded,
  BulkRounded: IconLicenseThirdPartyBulkRounded,
  StrokeSharp: IconLicenseThirdPartyStrokeSharp,
  SolidSharp: IconLicenseThirdPartySolidSharp,
};