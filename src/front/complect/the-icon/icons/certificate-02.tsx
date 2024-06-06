import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 5.02649C7.42349 4.60306 4.65212 3.46017 3.16165 4.30124C1.61279 5.17525 1.61278 10.8248 3.16165 11.6988C4.65212 12.5398 7.42349 11.3969 9 10.9735',
  d2: 'M15 5.02649C16.5765 4.60306 19.3479 3.46017 20.8384 4.30124C22.3872 5.17525 22.3872 10.8248 20.8384 11.6988C19.3479 12.5398 16.5765 11.3969 15 10.9735',
  d3: 'M9.77244 11L8.34515 17.3753C8.01375 18.8555 7.84805 19.5957 8.18452 19.8368C9.33435 20.6607 10.7588 18.0976 12 18.0976C13.13 18.0976 14.817 20.5523 15.8155 19.8368C16.1519 19.5957 15.9862 18.8555 15.6548 17.3753L14.2276 11',
  d4: 'M8.34515 17.3753L9.77244 11L12 12L14.2276 11L15.6548 17.3753C15.9862 18.8555 16.1519 19.5957 15.8155 19.8368C14.817 20.5523 13.13 18.0976 12 18.0976C10.7588 18.0976 9.33435 20.6607 8.18452 19.8368C7.84805 19.5957 8.01375 18.8555 8.34515 17.3753Z',
  d5: 'M3.16165 4.30124C1.61279 5.17525 1.61278 10.8248 3.16165 11.6988C4.65212 12.5398 7.42348 11.3969 9 10.9735C7.01676 8.17586 8.14734 5.85483 8.97898 5.02083C7.39896 4.59298 4.64552 3.46389 3.16165 4.30124Z',
  d6: 'M20.8384 4.30124C22.3872 5.17525 22.3872 10.8248 20.8384 11.6988C19.3529 12.537 16.595 11.4045 15.0158 10.9777C16.9938 8.18755 15.8311 5.84881 15 5.02649C16.5765 4.60306 19.3479 3.46017 20.8384 4.30124Z',
  d7: 'M7.5 7.75C7.5 5.26472 9.51472 3.25 12 3.25C14.4853 3.25 16.5 5.26472 16.5 7.75C16.5 10.2353 14.4853 12.25 12 12.25C9.51472 12.25 7.5 10.2353 7.5 7.75Z',
  d8: 'M16.0802 11.8029C15.9859 11.8979 16.0228 12.0623 16.1509 12.1013C16.6604 12.2563 17.2249 12.4198 17.7938 12.5433C18.8757 12.778 20.1964 12.9231 21.2084 12.352C21.8659 11.981 22.2265 11.211 22.4312 10.5064C22.6493 9.75616 22.7514 8.86738 22.7514 8.00004C22.7514 7.1327 22.6493 6.24392 22.4312 5.49365C22.2265 4.78905 21.8659 4.01912 21.2084 3.64809C20.1964 3.07703 18.8757 3.22203 17.7938 3.45677C17.5818 3.50276 17.3705 3.55433 17.1623 3.60895C16.7655 3.71308 16.5671 3.76514 16.5118 3.90813C16.4564 4.05112 16.5803 4.24196 16.828 4.62363C17.4122 5.52358 17.7514 6.59717 17.7514 7.75C17.7514 9.33123 17.1132 10.7634 16.0802 11.8029Z',
  d9: 'M6.83911 3.60895C7.23592 3.71308 7.43432 3.76514 7.48966 3.90813C7.54499 4.05112 7.42113 4.24196 7.1734 4.62363C6.58926 5.52358 6.25 6.59717 6.25 7.75C6.25 9.33123 6.88826 10.7634 7.9212 11.8029C8.01556 11.8979 7.97862 12.0623 7.85053 12.1013C7.341 12.2563 6.77653 12.4198 6.2076 12.5433C5.12577 12.778 3.80506 12.9231 2.79306 12.352C2.13555 11.981 1.77497 11.211 1.57021 10.5064C1.35217 9.75616 1.25 8.86738 1.25 8.00004C1.25 7.1327 1.35217 6.24392 1.57021 5.49365C1.77497 4.78905 2.13555 4.01912 2.79306 3.64809C3.80506 3.07703 5.12575 3.22203 6.20759 3.45677C6.41959 3.50276 6.63096 3.55433 6.83911 3.60895Z',
  d10: 'M9.45339 12.9062C9.06848 12.7157 8.87603 12.6205 8.74442 12.6833C8.61282 12.7462 8.56967 12.9389 8.48339 13.3243L7.602 17.2612C7.44589 17.9584 7.31362 18.5491 7.26826 18.9941C7.24489 19.2233 7.23706 19.4744 7.28715 19.7125C7.34087 19.9678 7.47107 20.2476 7.74768 20.4458C8.29868 20.8406 8.88798 20.7989 9.36705 20.6095C9.80305 20.437 10.2086 20.1223 10.5339 19.8552C10.6386 19.7692 10.7365 19.687 10.8298 19.6086C11.0595 19.4156 11.2619 19.2455 11.471 19.0998C11.7705 18.8908 11.9311 18.847 12 18.847C12.0443 18.847 12.1999 18.8851 12.5201 19.0959C12.7388 19.2398 12.9576 19.4097 13.2026 19.6001C13.298 19.6741 13.3976 19.7515 13.5024 19.8314C13.8435 20.0914 14.2542 20.3889 14.6727 20.5603C15.1038 20.7369 15.7032 20.8393 16.2523 20.4458C16.5289 20.2476 16.6591 19.9678 16.7129 19.7125C16.763 19.4744 16.7551 19.2233 16.7318 18.9941C16.6864 18.5491 16.5541 17.9584 16.398 17.2613L15.5166 13.3243C15.4303 12.9389 15.3872 12.7462 15.2556 12.6833C15.124 12.6205 14.9315 12.7157 14.5466 12.9062C13.779 13.286 12.9144 13.4994 12 13.4994C11.0856 13.4994 10.221 13.286 9.45339 12.9062Z',
  d11: 'M15.5 5.99882L22 3.5V13.4953L15.5 10.9964',
  d12: 'M8.5 5.99882L2 3.5V13.4953L8.5 10.9964',
  d13: 'M12 12.4957C14.2091 12.4957 16 10.7057 16 8.49762C16 6.28952 14.2091 4.49951 12 4.49951C9.79086 4.49951 8 6.28952 8 8.49762C8 10.7057 9.79086 12.4957 12 12.4957Z',
  d14: 'M9.50608 11.4595L6.5103 20.4867C6.50755 20.495 6.51599 20.5026 6.52393 20.499L12.0143 18.0021L17.4993 20.4989C17.5072 20.5025 17.5157 20.4949 17.5129 20.4866L14.4767 11.4595',
  d15: 'M16 8.5C16 10.7091 14.2091 12.5 12 12.5C9.79086 12.5 8 10.7091 8 8.5C8 6.29086 9.79086 4.5 12 4.5C14.2091 4.5 16 6.29086 16 8.5Z',
  d16: 'M15.6595 12.606C14.6873 13.473 13.4052 14 12 14C10.595 14 9.31306 13.4732 8.34092 12.6063L5.78852 20.2628C5.69418 20.5458 5.77652 20.8578 5.99822 21.0574C6.21991 21.257 6.53881 21.3062 6.81038 21.1828L12 18.8239L17.1897 21.1828C17.4612 21.3062 17.7801 21.257 18.0018 21.0574C18.2235 20.8578 18.3059 20.5458 18.2115 20.2629L15.6595 12.606Z',
  d17: 'M2.26923 2.79999C2.03861 2.71129 1.77908 2.74188 1.5754 2.88177C1.37171 3.02166 1.25 3.25291 1.25 3.5V13.5C1.25 13.7471 1.37171 13.9783 1.5754 14.1182C1.77908 14.2581 2.03861 14.2887 2.26923 14.2L7.81381 12.0675C6.99456 11.1071 6.5 9.8613 6.5 8.5C6.5 7.13871 6.99456 5.89292 7.8138 4.93252L2.26923 2.79999Z',
  d18: 'M21.7301 2.79999C21.9607 2.71129 22.2203 2.74188 22.424 2.88177C22.6276 3.02166 22.7494 3.25291 22.7494 3.5V13.5C22.7494 13.7471 22.6276 13.9783 22.424 14.1182C22.2203 14.2581 21.9607 14.2887 21.7301 14.2L16.1855 12.0675C17.0048 11.1071 17.4994 9.8613 17.4994 8.5C17.4994 7.13871 17.0048 5.89292 16.1856 4.93252L21.7301 2.79999Z',
};

export const IconCertificate02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-stroke-rounded IconCertificate02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="8" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCertificate02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-duotone-rounded IconCertificate02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="8" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCertificate02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-twotone-rounded IconCertificate02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="8" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCertificate02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-solid-rounded IconCertificate02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCertificate02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-bulk-rounded IconCertificate02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCertificate02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-stroke-sharp IconCertificate02StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCertificate02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="certificate-02-solid-sharp IconCertificate02SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfCertificate02: TheIconSelfPack = {
  name: 'Certificate02',
  StrokeRounded: IconCertificate02StrokeRounded,
  DuotoneRounded: IconCertificate02DuotoneRounded,
  TwotoneRounded: IconCertificate02TwotoneRounded,
  SolidRounded: IconCertificate02SolidRounded,
  BulkRounded: IconCertificate02BulkRounded,
  StrokeSharp: IconCertificate02StrokeSharp,
  SolidSharp: IconCertificate02SolidSharp,
};