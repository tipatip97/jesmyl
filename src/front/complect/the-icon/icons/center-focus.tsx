import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0846 4.80297 21.3959 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8M9.13432 21.5C6.46805 21.4392 4.9107 21.1854 3.84664 20.1251C2.91537 19.197 2.60406 17.8924 2.5 15.8',
  d2: 'M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z',
  d3: 'M3.50016 4.24665C2.5 5.60997 2.5 7.65199 2.5 11.736C2.5 15.8201 2.5 17.8621 3.50016 19.2254C3.66013 19.4435 3.83644 19.6451 4.02708 19.8281C5.21903 20.972 7.00435 20.972 10.575 20.972H13.425C16.9956 20.972 18.781 20.972 19.9729 19.8281C20.1636 19.6451 20.3399 19.4435 20.4998 19.2254C21.5 17.8621 21.5 15.8201 21.5 11.736C21.5 7.65199 21.5 5.60997 20.4998 4.24665C20.3399 4.02859 20.1636 3.82693 19.9729 3.64396C18.781 2.5 16.9956 2.5 13.425 2.5H10.575C7.00435 2.5 5.21903 2.5 4.02708 3.64396C3.83644 3.82693 3.66013 4.02859 3.50016 4.24665ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z',
  d4: 'M10.1341 2.47723C10.1467 3.02937 9.70927 3.48717 9.15713 3.49975C6.45365 3.56134 5.29954 3.83886 4.55254 4.58326C3.90786 5.22571 3.60144 6.18551 3.49879 8.24968C3.47136 8.80128 3.00195 9.2262 2.45035 9.19877C1.89875 9.17134 1.47382 8.70194 1.50126 8.15033C1.60672 6.02963 1.92292 4.38024 3.14079 3.1666C4.5219 1.79027 6.48249 1.56017 9.11157 1.50026C9.66371 1.48768 10.1215 1.92508 10.1341 2.47723ZM13.866 2.47723C13.8785 1.92508 14.3363 1.48768 14.8885 1.50026C17.5176 1.56017 19.4781 1.79027 20.8593 3.1666C22.0771 4.38024 22.3933 6.02963 22.4988 8.15033C22.5262 8.70194 22.1013 9.17134 21.5497 9.19877C20.9981 9.2262 20.5287 8.80128 20.5013 8.24968C20.3986 6.18551 20.0922 5.22571 19.4475 4.58326C18.7005 3.83886 17.5464 3.56134 14.8429 3.49975C14.2908 3.48717 13.8534 3.02937 13.866 2.47723ZM2.45035 14.8012C3.00195 14.7738 3.47136 15.1987 3.49879 15.7503C3.60144 17.8145 3.90786 18.7743 4.55254 19.4167C5.29954 20.1612 6.45365 20.4387 9.15713 20.5003C9.70927 20.5128 10.1467 20.9706 10.1341 21.5228C10.1215 22.0749 9.66371 22.5123 9.11157 22.4997C6.48249 22.4398 4.5219 22.2097 3.14079 20.8334C1.92292 19.6198 1.60673 17.9704 1.50126 15.8497C1.47382 15.2981 1.89875 14.8287 2.45035 14.8012ZM21.5497 14.8012C22.1013 14.8287 22.5262 15.2981 22.4988 15.8497C22.3933 17.9704 22.0771 19.6198 20.8593 20.8334C19.4781 22.2097 17.5176 22.4398 14.8885 22.4997C14.3363 22.5123 13.8785 22.0749 13.866 21.5228C13.8534 20.9706 14.2908 20.5128 14.8429 20.5003C17.5464 20.4387 18.7005 20.1612 19.4475 19.4167C20.0922 18.7743 20.3986 17.8145 20.5013 15.7503C20.5287 15.1987 20.9981 14.7738 21.5497 14.8012Z',
  d5: 'M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z',
  d6: 'M9 2.49976L2.5 2.49986L2.50009 7.99976M15.0001 2.49996L21.5001 2.49976V7.99976M15.0001 21.5H21.5001V15.9998M9 21.5L2.50153 21.4998V15.9998',
  d7: 'M22.2504 1.75012V8.09532H20.298V3.70254L14.929 3.70271L14.929 1.75036L22.2504 1.75012ZM9.07183 1.75015L9.07187 3.70251L3.70288 3.7026L3.70295 8.0953L1.7506 8.09533L1.75049 1.75028L9.07183 1.75015ZM1.752 15.9048H3.70436V20.2976L9.07188 20.2978L9.07182 22.2501L1.752 22.2499V15.9048ZM20.298 20.2978V15.9048H22.2504V22.2501H14.929V20.2978H20.298Z',
  d8: 'M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z',
};

export const IconCenterFocusStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-stroke-rounded IconCenterFocusStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCenterFocusDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-duotone-rounded IconCenterFocusDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCenterFocusTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-twotone-rounded IconCenterFocusTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCenterFocusSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-solid-rounded IconCenterFocusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCenterFocusBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-bulk-rounded IconCenterFocusBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCenterFocusStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-stroke-sharp IconCenterFocusStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCenterFocusSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="center-focus-solid-sharp IconCenterFocusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCenterFocus: TheIconSelfPack = {
  name: 'CenterFocus',
  StrokeRounded: IconCenterFocusStrokeRounded,
  DuotoneRounded: IconCenterFocusDuotoneRounded,
  TwotoneRounded: IconCenterFocusTwotoneRounded,
  SolidRounded: IconCenterFocusSolidRounded,
  BulkRounded: IconCenterFocusBulkRounded,
  StrokeSharp: IconCenterFocusStrokeSharp,
  SolidSharp: IconCenterFocusSolidSharp,
};