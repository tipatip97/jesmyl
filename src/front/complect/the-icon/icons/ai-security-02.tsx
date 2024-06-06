import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z',
  d2: 'M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5',
  d3: 'M11.999 1.25C10.3872 1.25 9.07996 1.82495 7.94894 2.44345C7.60405 2.63206 7.28503 2.81782 6.98112 2.99479C6.24233 3.42498 5.59274 3.80324 4.87748 4.04413C4.4553 4.18631 4.07633 4.31393 3.8082 4.42484C3.55436 4.52984 3.24898 4.67545 3.03361 4.92811C2.84336 5.15129 2.74717 5.3994 2.68359 5.63457C2.62535 5.84993 2.57562 6.14122 2.52737 6.42385C1.35948 13.2609 3.90414 19.7706 10.1947 22.3128C10.8081 22.5608 11.276 22.75 12.0021 22.75C12.7282 22.75 13.1962 22.5608 13.8095 22.3128C20.0999 19.7705 22.642 13.2606 21.4738 6.4238C21.4255 6.14112 21.3757 5.8498 21.3175 5.63441C21.2539 5.39922 21.1577 5.15108 20.9674 4.92789C20.752 4.67524 20.4466 4.52967 20.1927 4.4247C19.9246 4.31383 19.5457 4.18628 19.1235 4.04418C18.4078 3.80327 17.7577 3.42491 17.0183 2.99465C16.7143 2.81771 16.3952 2.63199 16.0502 2.44344C14.9186 1.82495 13.6109 1.25 11.999 1.25ZM10.0002 7.75C9.37879 7.75 8.82709 8.14764 8.63058 8.73717L6.78869 14.2628C6.65771 14.6558 6.87008 15.0805 7.26303 15.2115C7.65599 15.3425 8.08073 15.1301 8.21172 14.7372L8.70744 13.25H11.293L11.7887 14.7372C11.9197 15.1301 12.3444 15.3425 12.7374 15.2115C13.1303 15.0805 13.3427 14.6558 13.2117 14.2628L11.3698 8.73717C11.1733 8.14764 10.6216 7.75 10.0002 7.75ZM10.0002 9.37171L10.793 11.75H9.20744L10.0002 9.37171ZM16.2502 8.5C16.2502 8.08579 15.9144 7.75 15.5002 7.75C15.086 7.75 14.7502 8.08579 14.7502 8.5V14.5C14.7502 14.9142 15.086 15.25 15.5002 15.25C15.9144 15.25 16.2502 14.9142 16.2502 14.5V8.5Z',
  d4: 'M7.94894 2.44345C9.07996 1.82495 10.3872 1.25 11.999 1.25C13.6109 1.25 14.9186 1.82495 16.0502 2.44344C16.3952 2.63199 16.7143 2.81771 17.0183 2.99465C17.7577 3.42491 18.4078 3.80327 19.1235 4.04418C19.5457 4.18628 19.9246 4.31383 20.1927 4.4247C20.4466 4.52967 20.752 4.67524 20.9674 4.92789C21.1577 5.15108 21.2539 5.39922 21.3175 5.63441C21.3757 5.8498 21.4255 6.14112 21.4738 6.4238C22.642 13.2606 20.0999 19.7705 13.8095 22.3128C13.1962 22.5608 12.7282 22.75 12.0021 22.75C11.276 22.75 10.8081 22.5608 10.1947 22.3128C3.90414 19.7706 1.35948 13.2609 2.52737 6.42385C2.57562 6.14122 2.62535 5.84993 2.68359 5.63457C2.74717 5.3994 2.84336 5.15129 3.03361 4.92811C3.24898 4.67545 3.55436 4.52984 3.8082 4.42484C4.07633 4.31393 4.4553 4.18631 4.87748 4.04413C5.59274 3.80324 6.24233 3.42498 6.98112 2.99479C7.28503 2.81782 7.60405 2.63206 7.94894 2.44345Z',
  d5: 'M8.63058 8.73717C8.82709 8.14764 9.37879 7.75 10.0002 7.75C10.6216 7.75 11.1733 8.14764 11.3698 8.73717L10.6583 8.97434L11.3698 8.73717L13.2117 14.2628C13.3427 14.6558 13.1303 15.0805 12.7374 15.2115C12.3444 15.3425 11.9197 15.1301 11.7887 14.7372L11.293 13.25H8.70744L8.21172 14.7372C8.08073 15.1301 7.65599 15.3425 7.26303 15.2115C6.87008 15.0805 6.65771 14.6558 6.78869 14.2628L8.63058 8.73717ZM9.20744 11.75H10.793L10.0002 9.37171L9.20744 11.75ZM15.5002 7.75C15.9144 7.75 16.2502 8.08579 16.2502 8.5V14.5C16.2502 14.9142 15.9144 15.25 15.5002 15.25C15.086 15.25 14.7502 14.9142 14.7502 14.5V8.5C14.7502 8.08579 15.086 7.75 15.5002 7.75Z',
  d6: 'M3.48699 5V4.25H2.88555L2.7549 4.83708L3.48699 5ZM12 22.0001L11.8343 22.7316L12 22.7691L12.1656 22.7316L12 22.0001ZM20.513 5L21.2451 4.83708L21.1145 4.25H20.513V5ZM12 1.25C10.1138 1.25 8.64496 2.11253 7.36531 2.85024C6.04224 3.61298 4.9096 4.25 3.48699 4.25V5.75C5.36871 5.75 6.83561 4.88702 8.11448 4.14976C9.43677 3.38747 10.5723 2.75 12 2.75V1.25ZM12.1656 21.2687C6.06596 19.887 2.38803 13.3907 4.21908 5.16292L2.7549 4.83708C0.802712 13.6093 4.68978 21.1133 11.8343 22.7316L12.1656 21.2687ZM12 2.75C13.4346 2.75 14.5715 3.38786 15.8916 4.14961C17.1689 4.88661 18.6328 5.75 20.513 5.75V4.25C19.0926 4.25 17.9636 3.61339 16.6413 2.85039C15.3619 2.11214 13.8926 1.25 12 1.25V2.75ZM12.1656 22.7316C19.3101 21.1133 23.1973 13.6093 21.2451 4.83708L19.7809 5.16292C21.612 13.3907 17.934 19.887 11.8343 21.2687L12.1656 22.7316Z',
  d7: 'M10.3571 8.5L11.058 8.233L10.874 7.75H10.3571V8.5ZM11.942 14.767L12.209 15.4679L13.6107 14.9339L13.3437 14.233L11.942 14.767ZM16.25 8.5V7.75H14.75V8.5H16.25ZM14.75 14.5V15.25H16.25V14.5H14.75ZM9.78571 8.5V7.75H9.26885L9.08485 8.233L9.78571 8.5ZM6.79913 14.233L6.53214 14.9339L7.93387 15.4679L8.20087 14.767L6.79913 14.233ZM9.65628 8.767L11.942 14.767L13.3437 14.233L11.058 8.233L9.65628 8.767ZM14.75 8.5V14.5H16.25V8.5H14.75ZM9.08485 8.233L6.79913 14.233L8.20087 14.767L10.4866 8.767L9.08485 8.233ZM8.11538 13.45H12.0714V11.95H8.11538V13.45ZM10.3571 7.75H9.78571V9.25H10.3571V7.75Z',
  d8: 'M12 1.25C10.1398 1.25 8.68541 2.08773 7.41811 2.81769C6.09468 3.57975 4.90769 4.24733 3.4847 4.24733H2.88309L2.75241 4.83389C0.799699 13.5983 4.68782 21.0956 11.8342 22.7125L12 22.75L12.1657 22.7125C19.3121 21.0956 23.2003 13.5983 21.2476 4.83389L21.1169 4.24733H20.5153C19.0945 4.24733 17.9162 3.58301 16.5935 2.82069C15.3252 2.08955 13.8689 1.25 12 1.25ZM10.8712 7.75013H9.26601L6.5293 14.934L7.93103 15.468L8.69974 13.4501H11.4374L12.2061 15.468L13.6079 14.934L10.8712 7.75013ZM10.866 11.9501H9.27117L10.0686 9.8569L10.866 11.9501ZM16.2472 15.2501V7.75013H14.7472V15.2501H16.2472Z',
};

export const IconAiSecurity02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-stroke-rounded IconAiSecurity02StrokeRounded"
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

export const IconAiSecurity02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-duotone-rounded IconAiSecurity02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconAiSecurity02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-twotone-rounded IconAiSecurity02TwotoneRounded"
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

export const IconAiSecurity02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-solid-rounded IconAiSecurity02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSecurity02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-bulk-rounded IconAiSecurity02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAiSecurity02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-stroke-sharp IconAiSecurity02StrokeSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSecurity02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-security-02-solid-sharp IconAiSecurity02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiSecurity02: TheIconSelfPack = {
  name: 'AiSecurity02',
  StrokeRounded: IconAiSecurity02StrokeRounded,
  DuotoneRounded: IconAiSecurity02DuotoneRounded,
  TwotoneRounded: IconAiSecurity02TwotoneRounded,
  SolidRounded: IconAiSecurity02SolidRounded,
  BulkRounded: IconAiSecurity02BulkRounded,
  StrokeSharp: IconAiSecurity02StrokeSharp,
  SolidSharp: IconAiSecurity02SolidSharp,
};