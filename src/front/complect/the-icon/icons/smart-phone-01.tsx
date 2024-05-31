import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z',
  d2: 'M11 19H13',
  d3: 'M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2',
  d4: 'M6.02513 3.02532C5 4.05045 5 5.70036 5 9.00019V15.0002C5 18.3 5 19.9499 6.02513 20.9751C7.05025 22.0002 8.70017 22.0002 12 22.0002C15.2998 22.0002 16.9497 22.0002 17.9749 20.9751C19 19.9499 19 18.3 19 15.0002V9.00019C19 5.70036 19 4.05045 17.9749 3.02532C17.3221 2.37254 16.416 2.13544 14.9918 2.04932L14.911 2.53421C14.7181 3.69148 14.6217 4.27012 14.2248 4.62223C13.8108 4.98953 13.2239 5.00019 12 5.00019C10.7761 5.00019 10.1892 4.98953 9.77519 4.62223C9.37832 4.27012 9.28188 3.69149 9.089 2.53421L9.00819 2.04932C7.58403 2.13544 6.6779 2.37254 6.02513 3.02532Z',
  d5: 'M14.0416 1.26258C14.1218 1.26427 14.182 1.33623 14.1698 1.41553C14.0708 2.00969 14.0061 2.38967 13.9242 2.66868C13.8477 2.92952 13.7796 3.01384 13.7265 3.06094C13.6681 3.11277 13.5772 3.16922 13.3129 3.20574C13.0235 3.24574 12.6285 3.24992 11.9995 3.24992C11.3704 3.24992 10.9754 3.24574 10.686 3.20574C10.4218 3.16922 10.3308 3.11277 10.2724 3.06094C10.2193 3.01384 10.1513 2.92952 10.0747 2.66868C9.99296 2.39014 9.92832 2.01096 9.82957 1.41849C9.81781 1.33739 9.87948 1.26422 9.96141 1.2625C10.5588 1.24999 11.2181 1.24999 11.9437 1.25H11.9438H11.9438H12.0553H12.0554H12.0555C12.7827 1.24999 13.4432 1.24999 14.0416 1.26258ZM8.05962 1.38505C8.19637 1.36667 8.32081 1.46348 8.3406 1.60003L8.34665 1.64173L8.3491 1.65746L8.35612 1.69961C8.44652 2.24219 8.52515 2.71416 8.63584 3.09132C8.75495 3.49714 8.93355 3.8782 9.27733 4.18321C9.6329 4.49868 10.0424 4.63121 10.4811 4.69184C10.8947 4.749 11.4051 4.75015 11.9999 4.75015C12.5947 4.75015 13.1051 4.749 13.5187 4.69184C13.9573 4.63121 14.3669 4.49868 14.7225 4.18321C15.0662 3.8782 15.2448 3.49714 15.3639 3.09132C15.4746 2.71416 15.5533 2.24219 15.6437 1.69961L15.6507 1.65747L15.6599 1.59788C15.6806 1.46236 15.8045 1.36679 15.9404 1.38505C16.9767 1.52438 17.8301 1.81988 18.5052 2.49502C19.1803 3.17016 19.4759 4.02357 19.6152 5.05984C19.75 6.06293 19.75 7.34189 19.75 8.94448V15.056C19.75 16.6586 19.75 17.9375 19.6152 18.9406C19.4759 19.9769 19.1803 20.8303 18.5052 21.5054C17.8301 22.1806 16.9767 22.4761 15.9404 22.6154C14.9373 22.7503 13.6583 22.7502 12.0557 22.7502H11.9443C10.3417 22.7502 9.0627 22.7503 8.05962 22.6154C7.02335 22.4761 6.16994 22.1806 5.4948 21.5054C4.81966 20.8303 4.52415 19.9769 4.38483 18.9406C4.24997 17.9375 4.24998 16.6586 4.25 15.056V15.056V15.056V8.94446V8.94445V8.94444C4.24998 7.34187 4.24997 6.06291 4.38483 5.05984C4.52415 4.02357 4.81966 3.17016 5.4948 2.49502C6.16994 1.81988 7.02335 1.52438 8.05962 1.38505ZM10.25 20C10.25 19.5858 10.5858 19.25 11 19.25H13C13.4142 19.25 13.75 19.5858 13.75 20C13.75 20.4142 13.4142 20.75 13 20.75H11C10.5858 20.75 10.25 20.4142 10.25 20Z',
  d6: 'M8.05962 1.38505C8.19637 1.36667 8.32081 1.46348 8.3406 1.60003L8.34665 1.64173L8.3491 1.65746L8.35612 1.69961C8.44652 2.24219 8.52515 2.71416 8.63584 3.09132C8.75495 3.49714 8.93355 3.8782 9.27733 4.18321C9.6329 4.49868 10.0424 4.63121 10.4811 4.69184C10.8947 4.749 11.4051 4.75015 11.9999 4.75015C12.5947 4.75015 13.1051 4.749 13.5187 4.69184C13.9573 4.63121 14.3669 4.49868 14.7225 4.18321C15.0662 3.8782 15.2448 3.49714 15.3639 3.09132C15.4746 2.71416 15.5533 2.24219 15.6437 1.69961L15.6507 1.65747L15.6599 1.59788C15.6806 1.46236 15.8045 1.36678 15.9404 1.38505C16.9767 1.52438 17.8301 1.81988 18.5052 2.49502C19.1803 3.17016 19.4759 4.02357 19.6152 5.05984C19.75 6.06293 19.75 7.34189 19.75 8.94448V15.056C19.75 16.6586 19.75 17.9375 19.6152 18.9406C19.4759 19.9769 19.1803 20.8303 18.5052 21.5054C17.8301 22.1806 16.9767 22.4761 15.9404 22.6154C14.9373 22.7503 13.6583 22.7502 12.0557 22.7502H11.9443C10.3417 22.7502 9.0627 22.7503 8.05962 22.6154C7.02335 22.4761 6.16994 22.1806 5.4948 21.5054C4.81966 20.8303 4.52415 19.9769 4.38483 18.9406C4.24997 17.9375 4.24998 16.6586 4.25 15.056V15.056V8.94446V8.94445C4.24998 7.34188 4.24997 6.06292 4.38483 5.05984C4.52415 4.02357 4.81966 3.17016 5.4948 2.49502C6.16994 1.81988 7.02335 1.52438 8.05962 1.38505Z',
  d7: 'M14.0416 1.26258C14.1218 1.26427 14.182 1.33623 14.1698 1.41553C14.0708 2.00969 14.0061 2.38967 13.9242 2.66868C13.8477 2.92952 13.7796 3.01384 13.7265 3.06094C13.6681 3.11277 13.5772 3.16922 13.3129 3.20574C13.0235 3.24574 12.6285 3.24992 11.9995 3.24992C11.3704 3.24992 10.9754 3.24574 10.686 3.20574C10.4218 3.16922 10.3308 3.11277 10.2724 3.06094C10.2193 3.01384 10.1513 2.92952 10.0747 2.66868C9.99296 2.39014 9.92832 2.01096 9.82956 1.41849C9.81781 1.33739 9.87948 1.26422 9.96141 1.2625C10.5588 1.24999 11.2181 1.24999 11.9438 1.25H12.0553C12.7826 1.24999 13.4432 1.24999 14.0416 1.26258Z',
  d8: 'M11 19.25C10.5858 19.25 10.25 19.5858 10.25 20C10.25 20.4142 10.5858 20.75 11 20.75H13C13.4142 20.75 13.75 20.4142 13.75 20C13.75 19.5858 13.4142 19.25 13 19.25H11Z',
  d9: 'M19 2H5V22H19V2Z',
  d10: 'M10.5 19H13.5',
  d11: 'M9 2L10 5H14L15 2',
  d12: 'M5 1.25H8.43276L9.43276 4.74999H14.5642L15.5642 1.25H19C19.4142 1.25 19.75 1.58579 19.75 2V22C19.75 22.4142 19.4142 22.75 19 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V2C4.25 1.58579 4.58579 1.25 5 1.25ZM9.99279 1.25H14.0042L13.4328 3.24999H10.5642L9.99279 1.25ZM10.5 19.75H13.5V18.25H10.5V19.75Z',
} as const;

export const IconSmartPhone01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-stroke-rounded IconSmartPhone01StrokeRounded"
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

export const IconSmartPhone01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-duotone-rounded IconSmartPhone01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconSmartPhone01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-twotone-rounded IconSmartPhone01TwotoneRounded"
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

export const IconSmartPhone01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-solid-rounded IconSmartPhone01SolidRounded"
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

export const IconSmartPhone01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-bulk-rounded IconSmartPhone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconSmartPhone01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-stroke-sharp IconSmartPhone01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-01-solid-sharp IconSmartPhone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartPhone01: TheIconSelfPack = {
  name: 'SmartPhone01',
  StrokeRounded: IconSmartPhone01StrokeRounded,
  DuotoneRounded: IconSmartPhone01DuotoneRounded,
  TwotoneRounded: IconSmartPhone01TwotoneRounded,
  SolidRounded: IconSmartPhone01SolidRounded,
  BulkRounded: IconSmartPhone01BulkRounded,
  StrokeSharp: IconSmartPhone01StrokeSharp,
  SolidSharp: IconSmartPhone01SolidSharp,
};