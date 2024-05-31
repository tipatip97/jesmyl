import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 2L22 22',
  d2: 'M11.5 7L16 7',
  d3: 'M16 12H15.5',
  d4: 'M8 12H12',
  d5: 'M8 17H12',
  d6: 'M3.78651 4C3 5.1805 3 6.99964 3 10.1885L3 14.1257C3 17.8377 3 19.6937 4.24049 20.8468C5.48098 22 7.47751 22 11.4706 22H12.5294C16.5225 22 18.519 22 19.7595 20.8468C19.8455 20.7669 19.9255 20.6836 20 20.5965',
  d7: 'M20.9804 16.5C21 15.7729 21 14.9458 21 14V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2L11.4706 2C9.28206 2 7.69327 2 6.5 2.19289',
  d8: 'M11.4706 22H12.5294C16.5225 22 18.519 22 19.7595 20.8468C19.8455 20.7669 19.9255 20.6836 20 20.5965L3.78651 4C3 5.1805 3 6.99964 3 10.1885V14.1257C3 17.8377 3 19.6937 4.24049 20.8468C5.48098 22 7.47751 22 11.4706 22Z',
  d9: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d10: 'M12.5833 1.25H12.5833H11.4167H11.4167C9.46585 1.24999 7.9294 1.24998 6.72885 1.40242C6.54417 1.42587 6.36489 1.45319 6.19089 1.48519C5.78759 1.55937 5.58594 1.59645 5.53206 1.76955C5.47819 1.94265 5.63196 2.09643 5.93952 2.40399L9.53553 6H16C16.5523 6 17 6.44772 17 7C17 7.55229 16.5523 8 16 8H11.5355L14.5355 11H16C16.5523 11 17 11.4477 17 12C17 12.3961 16.7698 12.7383 16.4358 12.9003L20.7473 17.2117C21.1319 17.5964 21.3243 17.7887 21.5071 17.717C21.69 17.6452 21.6999 17.3791 21.7197 16.8468C21.75 16.0331 21.75 15.1078 21.75 14.0593V9.94074V9.94072V9.94071V9.94069C21.75 8.10543 21.75 6.64729 21.5875 5.50521C21.4194 4.32468 21.0647 3.37259 20.2745 2.62631C19.4904 1.88575 18.5001 1.55847 17.2712 1.40242C16.0706 1.24998 14.5342 1.24999 12.5833 1.25ZM11 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H13L20.4287 20.4287C20.6024 20.6024 20.6893 20.6893 20.692 20.8097C20.6946 20.9302 20.6198 21.0118 20.4703 21.175C20.4082 21.2428 20.343 21.309 20.2745 21.3737C19.4904 22.1143 18.5001 22.4415 17.2712 22.5976C16.0706 22.75 14.5342 22.75 12.5833 22.75H11.4167C9.46586 22.75 7.92941 22.75 6.72885 22.5976C5.49987 22.4415 4.50965 22.1142 3.72552 21.3737C2.93534 20.6274 2.5806 19.6753 2.41255 18.4948C2.24997 17.3527 2.24998 15.8946 2.25 14.0593V14.0593V9.94066V9.94065C2.24998 8.10539 2.24997 6.64728 2.41255 5.50521C2.50027 4.88899 2.63886 4.33501 2.8637 3.84005C2.99094 3.55993 3.05457 3.41987 3.20916 3.39181C3.36376 3.36376 3.48378 3.48378 3.72381 3.72381L11 11ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H8Z',
  d11: 'M11 10.9989H8C7.44772 10.9989 7 11.4466 7 11.9989C7 12.5512 7.44772 12.9989 8 12.9989H13L20.4287 20.4276C20.6024 20.6014 20.6893 20.6883 20.692 20.8087C20.6946 20.9291 20.6198 21.0107 20.4703 21.1739C20.4082 21.2417 20.343 21.3079 20.2745 21.3726C19.4904 22.1132 18.5001 22.4404 17.2712 22.5965C16.0706 22.7489 14.5342 22.7489 12.5833 22.7489H11.4167C9.46586 22.7489 7.92941 22.7489 6.72885 22.5965C5.49987 22.4404 4.50965 22.1132 3.72552 21.3726C2.93534 20.6263 2.5806 19.6742 2.41255 18.4937C2.24997 17.3516 2.24998 15.8935 2.25 14.0582V9.93957C2.24998 8.10432 2.24997 6.6462 2.41255 5.50413C2.50027 4.8879 2.63886 4.33392 2.8637 3.83897C2.99095 3.55884 3.05457 3.41878 3.20916 3.39073C3.36376 3.36268 3.48378 3.48269 3.72381 3.72273L11 10.9989ZM8 15.9989C7.44772 15.9989 7 16.4466 7 16.9989C7 17.5512 7.44772 17.9989 8 17.9989H12C12.5523 17.9989 13 17.5512 13 16.9989C13 16.4466 12.5523 15.9989 12 15.9989H8Z',
  d12: 'M12.5814 1.25C14.5322 1.24999 16.0687 1.24998 17.2692 1.40242C18.4982 1.55847 19.4884 1.88575 20.2726 2.62631C21.0627 3.37259 21.4175 4.32468 21.5855 5.50521C21.7481 6.6473 21.7481 8.10546 21.7481 9.94074V14.0593C21.7481 15.1078 21.7481 16.0331 21.7178 16.8468C21.698 17.3791 21.6881 17.6452 21.5052 17.717C21.3223 17.7887 21.13 17.5964 20.7454 17.2117L5.93759 2.40399C5.63004 2.09643 5.47626 1.94265 5.53014 1.76955C5.58401 1.59645 5.78566 1.55937 6.18896 1.48519C6.36296 1.45319 6.54225 1.42587 6.72692 1.40242C7.92748 1.24998 9.46393 1.24999 11.4148 1.25H12.5814Z',
  d13: 'M11.5352 8L9.53516 6H15.9996C16.5519 6 16.9996 6.44772 16.9996 7C16.9996 7.55228 16.5519 8 15.9996 8H11.5352Z',
  d14: 'M16.4354 12.9003L14.5352 11H15.9996C16.5519 11 16.9996 11.4477 16.9996 12C16.9996 12.396 16.7694 12.7383 16.4354 12.9003Z',
  d15: 'M8 17L17 17',
  d16: 'M5.18393 2H21.002V17.818M3.00212 3.00337L3.00195 22H21.002V21',
  d17: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d18: 'M2.25098 22C2.25098 22.1989 2.32999 22.3897 2.47064 22.5303C2.6113 22.671 2.80206 22.75 3.00098 22.75H21.001C21.4152 22.75 21.751 22.4142 21.751 22V21.7515L16.999 16.9995V18H6.99902V16H15.9995L11.999 12V13H6.99902V11H10.9995L2.25114 2.25163L2.25098 22Z',
  d19: 'M21.751 2C21.751 1.58579 21.4152 1.25 21.001 1.25H4.78505L21.751 18.2159V2Z',
} as const;

export const IconLicenseNoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-stroke-rounded IconLicenseNoStrokeRounded"
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
      <path 
        d={d.d5} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseNoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-duotone-rounded IconLicenseNoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseNoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-twotone-rounded IconLicenseNoTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d5} 
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseNoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-solid-rounded IconLicenseNoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseNoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-bulk-rounded IconLicenseNoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseNoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-stroke-sharp IconLicenseNoStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLicenseNoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="license-no-solid-sharp IconLicenseNoSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLicenseNo: TheIconSelfPack = {
  name: 'LicenseNo',
  StrokeRounded: IconLicenseNoStrokeRounded,
  DuotoneRounded: IconLicenseNoDuotoneRounded,
  TwotoneRounded: IconLicenseNoTwotoneRounded,
  SolidRounded: IconLicenseNoSolidRounded,
  BulkRounded: IconLicenseNoBulkRounded,
  StrokeSharp: IconLicenseNoStrokeSharp,
  SolidSharp: IconLicenseNoSolidSharp,
};