import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 19C5.70017 19 4.05025 19 3.02513 17.9749C2 16.9497 2 15.2998 2 12C2 8.70017 2 7.05025 3.02513 6.02513C4.05025 5 5.70017 5 9 5L15 5C18.2998 5 19.9497 5 20.9749 6.02513C22 7.05025 22 8.70017 22 12C22 15.2998 22 16.9497 20.9749 17.9749C19.9497 19 18.2998 19 15 19L9 19Z',
  d2: 'M19 13L19 11',
  d3: 'M2 15L2.53402 14.911C3.74122 14.7098 4.31845 14.6028 4.66642 14.1724C5 13.7599 5 13.1732 5 12C5 10.7761 4.98934 10.1892 4.62204 9.77519C4.26993 9.37832 3.69129 9.28188 2.53402 9.089L2 9',
  d4: 'M3.02513 17.9749C4.05025 19 5.70017 19 9 19L15 19C18.2998 19 19.9497 19 20.9749 17.9749C22 16.9497 22 15.2998 22 12C22 8.70017 22 7.05025 20.9749 6.02513C19.9497 5 18.2998 5 15 5H9C5.70017 5 4.05025 5 3.02513 6.02513C2.37235 6.67791 2.13524 7.58403 2.04912 9.00819L2.53402 9.089C3.69129 9.28188 4.26993 9.37832 4.62204 9.77519C4.98934 10.1892 5 10.7761 5 12C5 13.1732 5 13.7599 4.66642 14.1724C4.31845 14.6028 3.74122 14.7098 2.53402 14.911L2.04912 14.9918C2.13524 16.416 2.37235 17.3221 3.02513 17.9749Z',
  d5: 'M2 12.0548L2 11.9452C2 11.9634 2 11.9817 2 12C2 12.0183 2 12.0366 2 12.0548Z',
  d6: 'M1.38505 15.9404C1.36667 15.8036 1.46348 15.6792 1.60003 15.6594L1.64173 15.6534L1.65746 15.6509L1.69961 15.6439C2.24219 15.5535 2.71416 15.4748 3.09132 15.3642C3.49714 15.2451 3.8782 15.0664 4.18321 14.7227C4.49868 14.3671 4.63121 13.9576 4.69184 13.5189C4.749 13.1053 4.75015 12.5949 4.75015 12.0001C4.75015 11.4053 4.749 10.8949 4.69184 10.4813C4.63121 10.0427 4.49868 9.63313 4.18321 9.27755C3.8782 8.93378 3.49714 8.75517 3.09132 8.63607C2.71416 8.52538 2.24219 8.44674 1.69961 8.35634L1.65747 8.34926L1.59788 8.34013C1.46236 8.31939 1.36678 8.19549 1.38505 8.05961C1.52438 7.02335 1.81988 6.16994 2.49502 5.4948C3.17016 4.81966 4.02357 4.52415 5.05984 4.38483C6.06293 4.24997 7.34189 4.24998 8.94448 4.25H15.056C16.6586 4.24998 17.9375 4.24997 18.9406 4.38483C19.9769 4.52415 20.8303 4.81966 21.5054 5.4948C22.1806 6.16993 22.4761 7.02335 22.6154 8.05961C22.7503 9.0627 22.7502 10.3417 22.7502 11.9443V12.0557C22.7502 13.6583 22.7503 14.9373 22.6154 15.9404C22.4761 16.9766 22.1806 17.8301 21.5054 18.5052C20.8303 19.1803 19.9769 19.4758 18.9406 19.6152C17.9375 19.75 16.6586 19.75 15.056 19.75H15.056L8.94446 19.75H8.94445H8.94443H8.94442C7.34186 19.75 6.06291 19.75 5.05984 19.6152C4.02357 19.4758 3.17016 19.1803 2.49502 18.5052C1.81988 17.8301 1.52438 16.9767 1.38505 15.9404ZM1.26258 9.95838C1.26427 9.87818 1.33623 9.81802 1.41553 9.83016C2.00969 9.92919 2.38967 9.99391 2.66868 10.0758C2.92952 10.1523 3.01384 10.2204 3.06094 10.2735C3.11277 10.3319 3.16922 10.4228 3.20574 10.6871C3.24574 10.9765 3.24992 11.3715 3.24992 12.0005C3.24992 12.6296 3.24574 13.0246 3.20574 13.314C3.16922 13.5782 3.11277 13.6692 3.06094 13.7276C3.01384 13.7807 2.92952 13.8487 2.66868 13.9253C2.39014 14.007 2.01096 14.0717 1.41849 14.1704C1.33739 14.1822 1.26422 14.1205 1.2625 14.0386C1.24999 13.4412 1.24999 12.7819 1.25 12.0563V12.0562V12.0562V11.9447V11.9446V11.9446C1.24999 11.2173 1.24999 10.5568 1.26258 9.95838ZM20 13.75C19.5858 13.75 19.25 13.4142 19.25 13V11C19.25 10.5858 19.5858 10.25 20 10.25C20.4142 10.25 20.75 10.5858 20.75 11V13C20.75 13.4142 20.4142 13.75 20 13.75Z',
  d7: 'M1.26258 9.95838C1.26427 9.87818 1.33623 9.81802 1.41553 9.83016C2.00969 9.92919 2.38967 9.99391 2.66868 10.0758C2.92952 10.1523 3.01384 10.2204 3.06094 10.2735C3.11277 10.3319 3.16922 10.4228 3.20574 10.6871C3.24573 10.9765 3.24992 11.3715 3.24992 12.0005C3.24992 12.6296 3.24573 13.0246 3.20574 13.314C3.16922 13.5782 3.11277 13.6692 3.06094 13.7276C3.01384 13.7807 2.92952 13.8487 2.66868 13.9253C2.39014 14.007 2.01096 14.0717 1.41849 14.1704C1.33739 14.1822 1.26422 14.1205 1.2625 14.0386C1.24999 13.4412 1.24999 12.7819 1.25 12.0562L1.25 11.9447C1.24999 11.2174 1.24999 10.5568 1.26258 9.95838Z',
  d8: 'M1.38505 15.9404C1.36667 15.8036 1.46347 15.6792 1.60003 15.6594L1.64173 15.6534L1.65746 15.6509L1.69961 15.6439C2.24219 15.5535 2.71416 15.4748 3.09132 15.3642C3.49714 15.2451 3.8782 15.0664 4.18321 14.7227C4.49868 14.3671 4.63121 13.9576 4.69184 13.5189C4.749 13.1053 4.75015 12.5949 4.75015 12.0001C4.75015 11.4053 4.749 10.8949 4.69184 10.4813C4.63121 10.0427 4.49868 9.63313 4.18321 9.27755C3.8782 8.93378 3.49714 8.75517 3.09132 8.63607C2.71416 8.52538 2.24219 8.44674 1.69961 8.35634L1.65747 8.34925L1.59788 8.34013C1.46236 8.31939 1.36678 8.19549 1.38505 8.05961C1.52438 7.02335 1.81988 6.16994 2.49502 5.4948C3.17016 4.81966 4.02357 4.52415 5.05984 4.38483C6.06292 4.24997 7.34189 4.24998 8.94448 4.25L15.056 4.25C16.6586 4.24998 17.9375 4.24997 18.9406 4.38483C19.9769 4.52415 20.8303 4.81965 21.5054 5.49479C22.1806 6.16993 22.4761 7.02335 22.6154 8.05961C22.7503 9.0627 22.7502 10.3417 22.7502 11.9443L22.7502 12.0557C22.7502 13.6583 22.7503 14.9373 22.6154 15.9404C22.4761 16.9766 22.1806 17.8301 21.5054 18.5052C20.8303 19.1803 19.9769 19.4758 18.9406 19.6152C17.9375 19.75 16.6586 19.75 15.056 19.75L15.056 19.75L8.94446 19.75L8.94445 19.75C7.34188 19.75 6.06292 19.75 5.05984 19.6152C4.02357 19.4758 3.17016 19.1803 2.49502 18.5052C1.81988 17.8301 1.52438 16.9766 1.38505 15.9404Z',
  d9: 'M19.25 13C19.25 13.4142 19.5858 13.75 20 13.75C20.4142 13.75 20.75 13.4142 20.75 13L20.75 11C20.75 10.5858 20.4142 10.25 20 10.25C19.5858 10.25 19.25 10.5858 19.25 11L19.25 13Z',
  d10: 'M2 5L2 19L22 19V5L2 5Z',
  d11: 'M2 15L5 14L5 10L2 9',
  d12: 'M19 13.5L19 10.5',
  d13: 'M1.25 19V15.5672L4.74999 14.5672L4.74999 9.43579L1.25 8.43579V5C1.25 4.58579 1.58579 4.25 2 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5V19C22.75 19.4142 22.4142 19.75 22 19.75L2 19.75C1.58579 19.75 1.25 19.4142 1.25 19ZM1.25 14.0072V9.99582L3.24999 10.5672L3.24999 13.4358L1.25 14.0072ZM19.75 13.5V10.5H18.25V13.5H19.75Z',
} as const;

export const IconSmartPhoneLandscapeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-stroke-rounded IconSmartPhoneLandscapeStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhoneLandscapeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-duotone-rounded IconSmartPhoneLandscapeDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhoneLandscapeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-twotone-rounded IconSmartPhoneLandscapeTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhoneLandscapeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-solid-rounded IconSmartPhoneLandscapeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhoneLandscapeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-bulk-rounded IconSmartPhoneLandscapeBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
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

export const IconSmartPhoneLandscapeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-stroke-sharp IconSmartPhoneLandscapeStrokeSharp"
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhoneLandscapeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-landscape-solid-sharp IconSmartPhoneLandscapeSolidSharp"
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

export const iconPackOfSmartPhoneLandscape: TheIconSelfPack = {
  name: 'SmartPhoneLandscape',
  StrokeRounded: IconSmartPhoneLandscapeStrokeRounded,
  DuotoneRounded: IconSmartPhoneLandscapeDuotoneRounded,
  TwotoneRounded: IconSmartPhoneLandscapeTwotoneRounded,
  SolidRounded: IconSmartPhoneLandscapeSolidRounded,
  BulkRounded: IconSmartPhoneLandscapeBulkRounded,
  StrokeSharp: IconSmartPhoneLandscapeStrokeSharp,
  SolidSharp: IconSmartPhoneLandscapeSolidSharp,
};