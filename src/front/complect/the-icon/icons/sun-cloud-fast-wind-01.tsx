import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.00488 4.15468C8.3104 3.15451 7.15576 2.5 5.84876 2.5C3.72584 2.5 2.00488 4.22674 2.00488 6.35679C2.00488 7.65354 2.64271 8.80081 3.62076 9.5',
  d2: 'M14.1588 21.4146C14.3031 21.4699 14.4585 21.5 14.6203 21.5C15.385 21.5 16.0049 20.8284 16.0049 20C16.0049 19.1716 15.385 18.5 14.6203 18.5C14.3488 18.5 14.0956 18.5846 13.8819 18.7309C12.8207 19.5225 10.8549 20.5378 8.62023 20.801M5.85102 20.6936C5.2328 20.5635 4.61355 20.3541 4.00488 20.0478',
  d3: 'M19.0049 20.5C19.263 20.5 19.9606 20.5 21.0049 20.5',
  d4: 'M17.4782 8.40196C17.4856 8.40192 17.4931 8.40191 17.5006 8.40191C19.9849 8.40191 21.8964 10.36 21.9983 12.6502C22.0763 15.7 19.4254 17.308 17.5062 17.248M17.4782 8.40196C17.493 8.24557 17.5006 8.08719 17.5006 7.92713C17.5006 4.96 15.0368 2.5 12.0005 2.5C9.06174 2.5 6.74504 4.77718 6.50324 7.44927M17.4782 8.40196C17.376 9.47916 17.0384 10.42 16.2347 11.356M6.50324 7.44927C3.96786 7.67846 2.12265 9.76 2.0027 12.1754C1.92473 14.5 3.54406 16.12 5.52323 16.9C9.18169 18.28 12.6602 17.104 13.8237 15.124C14.3155 14.104 13.7398 12.64 12.3604 12.37C11.5207 12.16 10.0813 12.7 9.99735 14.302M6.50324 7.44927C6.66101 7.43501 6.82091 7.42771 6.98262 7.42771C8.10796 7.42771 9.12172 7.72 10.0093 8.404',
  d5: 'M17.751 8.25293C17.751 5.21536 15.2886 2.75293 12.251 2.75293C9.37422 2.75293 7.01331 4.96155 6.7714 7.77563C4.23496 8.017 2.25098 10.1532 2.25098 12.7529C2.25098 15.5143 4.48956 17.7529 7.25098 17.7529H17.751C20.2363 17.7529 22.251 15.7382 22.251 13.2529C22.251 10.7676 20.2363 8.75293 17.751 8.75293L17.7286 8.75298C17.7434 8.58829 17.751 8.42149 17.751 8.25293Z',
  d6: 'M9.25098 4.40761C8.5565 3.40744 7.40186 2.75293 6.09486 2.75293C3.97194 2.75293 2.25098 4.47967 2.25098 6.60972C2.25098 7.90647 2.88881 9.05374 3.86686 9.75293',
  d7: 'M14.4049 21.6675C14.5492 21.7228 14.7046 21.7529 14.8664 21.7529C15.6311 21.7529 16.251 21.0813 16.251 20.2529C16.251 19.4245 15.6311 18.7529 14.8664 18.7529C14.5949 18.7529 14.3417 18.8375 14.128 18.9838C13.0668 19.7754 11.101 20.7907 8.86633 21.0539M6.09712 20.9465C5.4789 20.8164 4.85965 20.607 4.25098 20.3007',
  d8: 'M19.251 20.7529C19.5091 20.7529 20.2067 20.7529 21.251 20.7529',
  d9: 'M17.7292 8.65587C17.7366 8.65583 17.7441 8.65582 17.7516 8.65582C20.2359 8.65582 22.1474 10.6139 22.2493 12.9041C22.3273 15.9539 19.6764 17.5619 17.7572 17.5019M17.7292 8.65587C17.744 8.49948 17.7516 8.3411 17.7516 8.18104C17.7516 5.21391 15.2878 2.75391 12.2515 2.75391C9.31272 2.75391 6.99602 5.03109 6.75422 7.70318M17.7292 8.65587C17.627 9.73307 17.2894 10.6739 16.4857 11.6099M6.75422 7.70318C4.21884 7.93237 2.37363 10.0139 2.25368 12.4293C2.17571 14.7539 3.79504 16.3739 5.77421 17.1539C9.43267 18.5339 12.9112 17.3579 14.0747 15.3779C14.5665 14.3579 13.9908 12.8939 12.6114 12.6239C11.7717 12.4139 10.3323 12.9539 10.2483 14.5559M6.75422 7.70318C6.91199 7.68892 7.07189 7.68162 7.2336 7.68162C8.35894 7.68162 9.3727 7.97391 10.2603 8.65791',
  d10: 'M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10',
  d11: 'M14.1539 21.9146C14.2982 21.9699 14.4536 22 14.6154 22C15.3801 22 16 21.3284 16 20.5C16 19.6716 15.3801 19 14.6154 19C14.3439 19 14.0907 19.0846 13.877 19.2309C12.8158 20.0225 10.85 21.0378 8.61535 21.301M5.84614 21.1936C5.22792 21.0635 4.60867 20.8541 4 20.5478',
  d12: 'M19 21C19.2581 21 19.9557 21 21 21',
  d13: 'M17.4782 8.90196C17.4856 8.90192 17.4931 8.90191 17.5006 8.90191C19.9849 8.90191 21.8964 10.86 21.9983 13.1502C22.0763 16.2 19.4254 17.808 17.5062 17.748M17.4782 8.90196C17.493 8.74557 17.5006 8.58719 17.5006 8.42713C17.5006 5.46 15.0368 3 12.0005 3C9.06174 3 6.74504 5.27718 6.50324 7.94927M17.4782 8.90196C17.376 9.97916 17.0384 10.92 16.2347 11.856M6.50324 7.94927C3.96786 8.17846 2.12265 10.26 2.0027 12.6754C1.92473 15 3.54406 16.62 5.52323 17.4C9.18169 18.78 12.6602 17.604 13.8237 15.624C14.3155 14.604 13.7398 13.14 12.3604 12.87C11.5207 12.66 10.0813 13.2 9.99735 14.802M6.50324 7.94927C6.66101 7.93501 6.82091 7.92771 6.98262 7.92771C8.10796 7.92771 9.12172 8.22 10.0093 8.904',
  d14: 'M14.5782 19.5488C14.6313 19.5151 14.6856 19.5 14.7406 19.5C14.8792 19.5 15.1252 19.647 15.1252 20C15.1252 20.353 14.8792 20.5 14.7406 20.5C14.7039 20.5 14.6696 20.4934 14.6367 20.4808C14.1209 20.2833 13.5427 20.5413 13.3452 21.0571C13.1477 21.5728 13.4057 22.151 13.9215 22.3485C14.1773 22.4465 14.4537 22.5 14.7406 22.5C16.1315 22.5 17.1252 21.3038 17.1252 20C17.1252 18.6962 16.1315 17.5 14.7406 17.5C14.2566 17.5 13.8083 17.6519 13.4376 17.9056L13.4207 17.9171L13.4043 17.9293C12.4556 18.637 10.652 19.569 8.62358 19.8079C8.07509 19.8725 7.68282 20.3695 7.74743 20.918C7.81204 21.4665 8.30906 21.8588 8.85755 21.7942C11.2834 21.5084 13.4 20.4215 14.5782 19.5488ZM3.23196 19.5983C3.48024 19.1049 4.08143 18.9063 4.57476 19.1546C5.10271 19.4203 5.63967 19.6019 6.17736 19.7151C6.7178 19.8288 7.06368 20.3592 6.94991 20.8996C6.83614 21.4401 6.30579 21.7859 5.76535 21.6722C5.0666 21.5251 4.36506 21.288 3.67567 20.9411C3.18234 20.6928 2.98368 20.0916 3.23196 19.5983Z',
  d15: 'M18.125 20.5C18.125 19.9477 18.5727 19.5 19.125 19.5H21.125C21.6773 19.5 22.125 19.9477 22.125 20.5C22.125 21.0523 21.6773 21.5 21.125 21.5H19.125C18.5727 21.5 18.125 21.0523 18.125 20.5Z',
  d16: 'M1.375 12.5C1.375 9.71699 3.35164 7.39643 5.978 6.86454C6.51231 3.95456 9.06085 1.75 12.125 1.75C15.5108 1.75 18.2678 4.44224 18.3719 7.80273C20.9177 8.16534 22.875 10.3541 22.875 13C22.875 15.701 20.8353 17.9256 18.2122 18.2175C17.6052 16.9607 16.3658 16 14.7407 16C14.6899 16 14.6394 16.001 14.5891 16.003C14.6345 15.9317 14.6777 15.8609 14.7189 15.791C15.9015 13.7806 14.3187 11.3338 12.1245 11.3338C10.4835 11.3338 9.12449 12.6464 9.12449 14.3006C9.12449 14.8529 9.57221 15.3006 10.1245 15.3006C10.6768 15.3006 11.1245 14.8529 11.1245 14.3006C11.1245 13.7824 11.5563 13.3338 12.1245 13.3338C12.8787 13.3338 13.3398 14.1909 12.995 14.777C12.1218 16.2614 9.45515 18.8267 4.92654 17.8148C2.84167 16.9514 1.375 14.897 1.375 12.5Z',
  d17: 'M3.125 6.35679C3.125 4.77586 4.40141 3.5 5.96888 3.5C6.49532 3.5 6.98878 3.64346 7.41237 3.89461C7.86769 3.37231 8.40841 2.92643 9.01278 2.57872C8.18181 1.90496 7.12282 1.5 5.96888 1.5C3.29052 1.5 1.125 3.67762 1.125 6.35679C1.125 7.53691 1.54535 8.61912 2.24308 9.46047C2.60548 8.87966 3.06867 8.36823 3.60818 7.95062C3.3028 7.49525 3.125 6.94707 3.125 6.35679Z',
  d18: 'M17.5 17.7508C19.9853 17.7508 22 15.7695 22 13.3255C22 10.8815 19.9853 8.9003 17.5 8.9003L17.4776 8.90035M17.4776 8.90035C17.4924 8.73839 17.5 8.57437 17.5 8.40861C17.5 5.42152 15.0376 3 12 3C9.12324 3 6.76233 5.17192 6.52042 7.93924M17.4776 8.90035C17.3753 10.0159 16.9286 11.0339 16.2428 11.8505M6.52042 7.93924C3.98398 8.1766 2 10.2774 2 12.8338C2 18.1493 10.8734 19.7606 13.7324 15.784C14.4961 14.4857 13.4742 12.8338 12 12.8338C10.8954 12.8338 10 13.7144 10 14.8006M6.52042 7.93924C6.67826 7.92447 6.83823 7.91692 7 7.91692C8.12583 7.91692 9.16474 8.28282 10.0005 8.9003',
  d19: 'M14.3117 19.8432C14.4051 19.7819 14.5084 19.75 14.6166 19.75C14.9117 19.75 15.2512 20.0281 15.2512 20.5C15.2512 20.9719 14.9117 21.25 14.6166 21.25C14.5486 21.25 14.4841 21.2375 14.4233 21.2142L13.8869 22.6151C14.1148 22.7023 14.361 22.75 14.6166 22.75C15.8509 22.75 16.7512 21.685 16.7512 20.5C16.7512 19.315 15.8509 18.25 14.6166 18.25C14.1858 18.25 13.7862 18.3851 13.4547 18.6119C13.4463 18.6176 13.438 18.6236 13.4298 18.6297C12.4529 19.3584 10.6088 20.3112 8.52883 20.5562L8.70431 22.0459C11.0834 21.7657 13.163 20.6959 14.3117 19.8432ZM4.33838 19.8779C4.88651 20.1537 5.44404 20.3423 6.00186 20.4597L5.69286 21.9275C5.01424 21.7847 4.33327 21.5546 3.66406 21.2178L4.33838 19.8779Z',
  d20: 'M19 21.75V20.25H21V21.75H19Z',
  d21: 'M2.68308 9.20164C1.80115 8.36245 1.25 7.17454 1.25 5.85826C1.25 3.31619 3.30471 1.25 5.84601 1.25C7.23857 1.25 8.48541 1.87157 9.32672 2.8489C10.1372 2.46484 11.0435 2.25 12 2.25C15.3858 2.25 18.1428 4.94224 18.2469 8.30273C20.7927 8.66534 22.75 10.8541 22.75 13.5C22.75 16.2922 20.5703 18.5753 17.8196 18.7404C17.2358 17.6038 16.0938 16.75 14.6152 16.75C14.3493 16.75 14.0906 16.7797 13.8422 16.8353C14.0208 16.6401 14.1876 16.4356 14.3412 16.222C14.3546 16.2034 14.3671 16.1841 14.3787 16.1644C15.4566 14.332 14.014 12.084 11.9998 12.084C10.4929 12.084 9.24981 13.2885 9.24981 14.8007H10.7498C10.7498 14.1405 11.2976 13.584 11.9998 13.584C12.9231 13.584 13.5211 14.615 13.1012 15.3767C11.8387 17.1048 9.32838 18.1842 6.86169 18.1494C4.81846 18.1205 2.95213 17.3372 1.90579 15.6693C1.48696 14.8716 1.25 13.9635 1.25 13C1.25 11.544 1.79103 10.2146 2.68308 9.20164ZM3.14766 5.85826C3.14766 4.35823 4.35875 3.14766 5.84601 3.14766C6.58272 3.14766 7.25136 3.44376 7.7396 3.92707C6.77854 4.82293 6.1002 6.01824 5.853 7.36454C5.25587 7.48547 4.69233 7.69886 4.17797 7.98912C3.54949 7.49188 3.14766 6.72264 3.14766 5.85826Z',
};

export const IconSunCloudFastWind01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-stroke-rounded IconSunCloudFastWind01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-duotone-rounded IconSunCloudFastWind01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-twotone-rounded IconSunCloudFastWind01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-solid-rounded IconSunCloudFastWind01SolidRounded"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-bulk-rounded IconSunCloudFastWind01BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudFastWind01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-stroke-sharp IconSunCloudFastWind01StrokeSharp"
    >
      <path 
        d={d.d18} 
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
        strokeLinejoin="round" 
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

export const IconSunCloudFastWind01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-fast-wind-01-solid-sharp IconSunCloudFastWind01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudFastWind01: TheIconSelfPack = {
  name: 'SunCloudFastWind01',
  StrokeRounded: IconSunCloudFastWind01StrokeRounded,
  DuotoneRounded: IconSunCloudFastWind01DuotoneRounded,
  TwotoneRounded: IconSunCloudFastWind01TwotoneRounded,
  SolidRounded: IconSunCloudFastWind01SolidRounded,
  BulkRounded: IconSunCloudFastWind01BulkRounded,
  StrokeSharp: IconSunCloudFastWind01StrokeSharp,
  SolidSharp: IconSunCloudFastWind01SolidSharp,
};