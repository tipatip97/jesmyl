import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5269 15.0816C18.5281 12.0136 17.8948 8.61324 16.0422 7.51869C14.5897 6.66047 13.3219 7.00632 12.5603 7.55723C12.248 7.78311 12.0919 7.89605 12 7.89605C11.9081 7.89605 11.752 7.78311 11.4397 7.55723C10.6781 7.00632 9.41034 6.66047 7.95778 7.51869C6.11193 8.60928 5.64895 12.1138 9.61321 15.1813C10.37 15.7669 11.1711 16.2935 12 16.7713C13.7788 17.7965 16.4168 19 19 19M5 19C6.54872 19 8.11718 18.5674 9.50835 18',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.6206 7.29611C13.4642 6.7095 14.8685 6.34123 16.4775 7.25508C18.5892 8.4544 19.067 12.411 14.1963 15.7491C13.2686 16.3849 12.8047 16.7028 12 16.7028C11.1953 16.7028 10.7314 16.3849 9.80372 15.7491C4.93303 12.411 5.41084 8.4544 7.52246 7.25508C9.13145 6.34123 10.5358 6.7095 11.3794 7.29611C11.7253 7.53664 11.8982 7.6569 12 7.6569C12.1018 7.6569 12.2747 7.53664 12.6206 7.29611Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.1077 1.85659 16.0738 2.90472 17.7331C2.98588 17.8616 3.02647 17.9258 3.09408 17.9631C3.16168 18.0004 3.24056 18.0004 3.39831 18.0004H5.0014C6.12465 18.0004 7.29233 17.7417 8.41149 17.3483C8.93251 17.1651 9.50338 17.439 9.68656 17.96C9.86974 18.481 9.59587 19.0519 9.07485 19.2351C7.81787 19.677 6.41857 20.0004 5.0014 20.0004C4.93751 20.0004 4.90762 20.0788 4.95586 20.1207C6.84246 21.7586 9.30546 22.75 12 22.75C14.6956 22.75 17.1594 21.7579 19.0463 20.1189C19.0937 20.0776 19.0643 20.0004 19.0014 20.0004C16.1485 20.0004 13.3218 18.6869 11.502 17.638C10.6395 17.1409 9.79987 16.5895 9.00264 15.9726C6.86445 14.3181 5.79883 12.4483 5.61376 10.7152C5.42976 8.99202 6.13926 7.43282 7.4505 6.65809C9.07858 5.69617 10.5942 5.91798 11.6411 6.50152C11.8293 6.60643 11.9234 6.65889 12.0014 6.65889C12.0794 6.65889 12.1735 6.60643 12.3617 6.50152C13.4086 5.91798 14.9242 5.69617 16.5523 6.65809C17.7949 7.39226 18.57 8.83124 18.4878 10.4889C18.4051 12.1546 17.4744 13.9532 15.5093 15.5789C15.0837 15.931 14.4534 15.8714 14.1013 15.4458C13.7493 15.0203 13.8089 14.3899 14.2344 14.0379C15.8883 12.6697 16.4423 11.3546 16.4902 10.3897C16.5385 9.41669 16.09 8.70795 15.5349 8.38C14.4709 7.75136 13.6327 8.01706 13.1478 8.36783C13.0102 8.46736 12.8494 8.58371 12.7323 8.65757C12.6689 8.69753 12.5823 8.74887 12.4829 8.79214C12.3904 8.83239 12.2189 8.89641 12.0014 8.89641C11.7839 8.89641 11.6124 8.83239 11.5199 8.79214C11.4205 8.74887 11.3339 8.69753 11.2705 8.65757C11.1534 8.58371 10.9926 8.46737 10.855 8.36783C10.3701 8.01706 9.53186 7.75136 8.46786 8.38C7.93326 8.69586 7.48835 9.43423 7.60246 10.5028C7.7155 11.5615 8.40052 12.9778 10.2266 14.3908C10.9428 14.945 11.7056 15.4469 12.5008 15.9053C14.2385 16.9069 16.688 18.0004 19.0014 18.0004H20.6017C20.7594 18.0004 20.8383 18.0004 20.9059 17.9631C20.9735 17.9258 21.0141 17.8616 21.0953 17.7331C22.1434 16.0738 22.75 14.1077 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M4.81838 20.0004C4.15971 19.4087 3.57451 18.737 3.07812 18.0004H4.99966C6.12291 18.0004 7.29059 17.7417 8.40974 17.3483C8.93076 17.1651 9.50163 17.439 9.68482 17.96C9.868 18.481 9.59413 19.0519 9.07311 19.2351C7.81613 19.677 6.41683 20.0004 4.99966 20.0004H4.81838Z',
  d6: 'M20.9203 18.0004C20.424 18.737 19.8388 19.4087 19.1801 20.0004H18.9997C16.1468 20.0004 13.32 18.6869 11.5003 17.638C10.6377 17.1409 9.79812 16.5895 9.0009 15.9726C6.8627 14.3181 5.79709 12.4483 5.61202 10.7152C5.42801 8.99202 6.13751 7.43282 7.44876 6.65809C9.2747 5.57926 10.9592 5.98938 11.9997 6.72883C13.0401 5.98938 14.7246 5.57926 16.5506 6.65809C17.7932 7.39226 18.5683 8.83124 18.486 10.4889C18.4034 12.1546 17.4726 13.9532 15.5075 15.5789C15.082 15.931 14.4516 15.8714 14.0996 15.4458C13.7475 15.0203 13.8071 14.3899 14.2327 14.0379C15.8866 12.6697 16.4406 11.3546 16.4885 10.3897C16.5368 9.41669 16.0883 8.70795 15.5332 8.38C14.4692 7.75136 13.6309 8.01706 13.146 8.36783C13.0085 8.46735 12.8476 8.58372 12.7305 8.65757C12.6672 8.69753 12.5806 8.74887 12.4811 8.79214C12.3887 8.83239 12.2171 8.89641 11.9997 8.89641C11.7822 8.89641 11.6106 8.83239 11.5182 8.79214C11.4188 8.74887 11.3321 8.69753 11.2688 8.65757C11.1516 8.58371 10.9909 8.46737 10.8533 8.36783C10.3684 8.01706 9.53011 7.75136 8.46612 8.38C7.93152 8.69586 7.4866 9.43423 7.60071 10.5028C7.71376 11.5615 8.39878 12.9778 10.2248 14.3908C10.9411 14.945 11.7039 15.4469 12.499 15.9053C14.2368 16.9069 16.6862 18.0004 18.9997 18.0004H20.9203Z',
  d7: 'M14.5269 15.0816C18.5281 12.0136 17.8948 8.61324 16.0422 7.51869C14.5897 6.66047 13.3219 7.00632 12.5603 7.55723C12.248 7.78311 12 7.89605 12 7.89605C12 7.89605 11.752 7.78311 11.4397 7.55723C10.6781 7.00632 9.41034 6.66047 7.95778 7.51869C6.11193 8.60928 5.64895 12.1138 9.61321 15.1813C10.37 15.7669 11.1711 16.2935 12 16.7713C13.7788 17.7965 16.4168 19 19 19M5 19C6.54872 19 8.11718 18.5674 9.50835 18',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.222 1.92418 16.2866 3.07914 18.0004H5.00045C6.37319 18.0004 7.80762 17.6142 9.13114 17.0744L9.88647 18.9263C8.42764 19.5213 6.72516 20.0004 5.00045 20.0004H4.81955C6.72307 21.7099 9.24007 22.75 12 22.75C14.7599 22.75 17.2769 21.7099 19.1804 20.0004H19.0005C16.1476 20.0004 13.3208 18.6869 11.5011 17.638C10.6385 17.1409 9.79891 16.5895 9.00169 15.9726C6.86349 14.3181 5.79788 12.4483 5.61281 10.7152C5.42881 8.99202 6.13831 7.43282 7.44955 6.65809C9.27549 5.57926 10.96 5.98938 12.0005 6.72883C13.0409 5.98938 14.7254 5.57926 16.5514 6.65809C17.8327 7.41515 18.6154 8.91976 18.4769 10.6406C18.3379 12.3683 17.2931 14.2214 15.1358 15.8755L13.9189 14.2883C15.7628 12.8745 16.4019 11.4934 16.4834 10.4803C16.5654 9.46033 16.1052 8.7175 15.534 8.38C14.47 7.75136 13.6317 8.01706 13.1468 8.36783L12.0005 9.12237L10.8541 8.36783C10.3692 8.01706 9.5309 7.75136 8.46691 8.38C7.93231 8.69586 7.4874 9.43423 7.6015 10.5028C7.71455 11.5615 8.39957 12.9778 10.2256 14.3908C10.9419 14.945 11.7046 15.4469 12.4998 15.9053C14.2376 16.9069 16.687 18.0004 19.0005 18.0004H20.9209C22.0758 16.2866 22.75 14.222 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
};

export const IconCovidInfoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-stroke-rounded IconCovidInfoStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCovidInfoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-duotone-rounded IconCovidInfoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCovidInfoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-twotone-rounded IconCovidInfoTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCovidInfoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-solid-rounded IconCovidInfoSolidRounded"
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

export const IconCovidInfoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-bulk-rounded IconCovidInfoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCovidInfoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-stroke-sharp IconCovidInfoStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCovidInfoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="covid-info-solid-sharp IconCovidInfoSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCovidInfo: TheIconSelfPack = {
  name: 'CovidInfo',
  StrokeRounded: IconCovidInfoStrokeRounded,
  DuotoneRounded: IconCovidInfoDuotoneRounded,
  TwotoneRounded: IconCovidInfoTwotoneRounded,
  SolidRounded: IconCovidInfoSolidRounded,
  BulkRounded: IconCovidInfoBulkRounded,
  StrokeSharp: IconCovidInfoStrokeSharp,
  SolidSharp: IconCovidInfoSolidSharp,
};