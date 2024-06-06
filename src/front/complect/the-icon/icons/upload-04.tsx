import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 4.5L12 14.5M12 4.5C11.2998 4.5 9.99153 6.4943 9.5 7M12 4.5C12.7002 4.5 14.0085 6.4943 14.5 7',
  d2: 'M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5',
  d3: 'M17 19.5H7C4.518 19.5 4 18.982 4 16.5H20C20 18.982 19.482 19.5 17 19.5Z',
  d4: 'M13.0059 14.5C13.0059 15.0523 12.5581 15.5 12.0059 15.5C11.4536 15.5 11.0059 15.0523 11.0059 14.5L11.0059 7.99996L10.4116 7.99998C10.236 8.00011 10.0203 8.00026 9.84387 7.97819L9.84053 7.97777C9.71408 7.962 9.13804 7.89017 8.86368 7.32457C8.58872 6.75775 8.89065 6.25761 8.95597 6.1494L8.95841 6.14537C9.05062 5.99235 9.18477 5.82147 9.29511 5.68092L9.31885 5.65067C9.61348 5.27485 9.99545 4.79063 10.3759 4.39962C10.5657 4.20451 10.783 4.00328 11.0139 3.84443C11.2191 3.70323 11.5693 3.49996 12 3.49996C12.4307 3.49996 12.7809 3.70323 12.9861 3.84443C13.217 4.00328 13.4343 4.20451 13.6241 4.39962C14.0046 4.79063 14.3865 5.27485 14.6812 5.65067L14.7049 5.68091C14.8152 5.82147 14.9494 5.99235 15.0416 6.14537L15.044 6.14941C15.1093 6.25761 15.4113 6.75775 15.1363 7.32457C14.862 7.89017 14.2859 7.96201 14.1595 7.97777L14.1561 7.97819C13.9797 8.00026 13.764 8.00011 13.5884 7.99998L13.0059 7.99996L13.0059 14.5Z',
  d5: 'M4 15.5C4.55228 15.5 5 15.9477 5 16.5C5 17.0989 5.03256 17.5106 5.09643 17.8013C5.15781 18.0807 5.23372 18.181 5.27636 18.2236C5.31899 18.2663 5.41933 18.3422 5.69872 18.4036C5.98944 18.4674 6.40114 18.5 7 18.5H17C17.5989 18.5 18.0106 18.4674 18.3013 18.4036C18.5807 18.3422 18.681 18.2663 18.7236 18.2236C18.7663 18.181 18.8422 18.0807 18.9036 17.8013C18.9674 17.5106 19 17.0989 19 16.5C19 15.9477 19.4477 15.5 20 15.5C20.5523 15.5 21 15.9477 21 16.5C21 17.1421 20.9678 17.7259 20.857 18.2304C20.7437 18.7462 20.535 19.2407 20.1379 19.6379C19.7407 20.035 19.2462 20.2437 18.7304 20.357C18.2259 20.4678 17.6421 20.5 17 20.5H7C6.35786 20.5 5.77406 20.4678 5.26959 20.357C4.7538 20.2437 4.25926 20.035 3.86214 19.6379C3.46503 19.2407 3.25632 18.7462 3.14301 18.2304C3.03219 17.7259 3 17.1421 3 16.5C3 15.9477 3.44772 15.5 4 15.5Z',
  d6: 'M12 14.5002L12 4.84021M9 7.50043L12 4.50021L15 7.50043',
  d7: 'M20 16.5L19 19.5H5L4 16.5',
  d8: 'M12.0001 3.25L15.7072 6.9574L14.293 8.37156L13.0001 7.0786L13.0001 14.6643H11.0001L11.0001 7.0786L9.70723 8.37156L8.29297 6.9574L12.0001 3.25Z',
  d9: 'M5.66944 18.7498L4.89737 16.4336L3 17.066L4.22792 20.7498H19.7721L21 17.066L19.1026 16.4336L18.3306 18.7498H5.66944Z',
};

export const IconUpload04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-stroke-rounded IconUpload04StrokeRounded"
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

export const IconUpload04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-duotone-rounded IconUpload04DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUpload04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-twotone-rounded IconUpload04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconUpload04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-solid-rounded IconUpload04SolidRounded"
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

export const IconUpload04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-bulk-rounded IconUpload04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconUpload04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-stroke-sharp IconUpload04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUpload04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-04-solid-sharp IconUpload04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfUpload04: TheIconSelfPack = {
  name: 'Upload04',
  StrokeRounded: IconUpload04StrokeRounded,
  DuotoneRounded: IconUpload04DuotoneRounded,
  TwotoneRounded: IconUpload04TwotoneRounded,
  SolidRounded: IconUpload04SolidRounded,
  BulkRounded: IconUpload04BulkRounded,
  StrokeSharp: IconUpload04StrokeSharp,
  SolidSharp: IconUpload04SolidSharp,
};