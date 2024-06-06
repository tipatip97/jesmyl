import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.8989 2H7.71957C6.43755 2 5.79654 2 5.39827 2.4282C5 2.8564 5 3.54557 5 4.92392V16.7262C5 19.9619 5 21.5797 5.87654 21.938C6.75308 22.2963 7.75279 21.0872 9.75219 18.6688L11.7113 16.2992C11.9776 15.9771 12.1107 15.816 12.2879 15.7305C12.4651 15.645 12.6655 15.645 13.0664 15.645H13.1431C14.4596 15.645 15.1178 15.645 15.6025 15.2519C16.0872 14.8588 16.268 14.1784 16.6297 12.8174L18.5139 5.72719C18.9681 4.01783 19.1952 3.16315 18.7872 2.58158C18.3792 2 17.5524 2 15.8989 2Z',
  d2: 'M17.5 9L12 9',
  d3: 'M15.8989 2H7.71957C6.43755 2 5.79654 2 5.39827 2.4282C5 2.8564 5 3.54557 5 4.92392V16.7262C5 19.9619 5 21.5797 5.87654 21.938C6.75308 22.2963 7.75279 21.0872 9.75219 18.6688L11.7113 16.2992C11.9776 15.9771 12.1107 15.816 12.2879 15.7305C12.545 15.6064 12.8658 15.645 13.1431 15.645C14.4596 15.645 15.1178 15.645 15.6025 15.2519C16.0872 14.8588 16.268 14.1784 16.6297 12.8174L17.6441 9L18.5139 5.72719C18.9681 4.01783 19.1952 3.16315 18.7872 2.58158C18.3792 2 17.5524 2 15.8989 2Z',
  d4: 'M15.9584 1.25C16.7342 1.24995 17.4035 1.2499 17.9261 1.33173C18.4896 1.41994 19.0318 1.62433 19.4012 2.15083C19.7615 2.66446 19.7902 3.24809 19.7181 3.82458C19.6492 4.37549 19.4679 5.05753 19.2525 5.86791L19.081 6.51349C18.8911 7.22802 18.7961 7.58528 18.5266 7.79255C18.257 7.99983 17.8874 7.99983 17.148 7.99983L13 7.99983C12.4477 7.99983 12 8.44754 12 8.99982C12 9.55211 12.4477 9.99983 13 9.99983H16.854C17.4517 9.99983 17.7505 9.99983 17.9006 10.195C18.0507 10.3902 17.974 10.6791 17.8205 11.2567L17.3439 13.0499C17.1721 13.6964 17.0276 14.2405 16.8615 14.6688C16.6862 15.1207 16.4587 15.5232 16.0749 15.8344C15.6862 16.1496 15.2494 16.2806 14.7785 16.34C14.3416 16.395 13.8078 16.395 13.1878 16.395L13.0664 16.395C12.8532 16.395 12.7408 16.3956 12.6585 16.4028C12.6289 16.4054 12.6013 16.4183 12.5803 16.4393L12.5707 16.4491C12.5079 16.5136 12.43 16.6069 12.2893 16.7771L10.2885 19.1972C9.32414 20.3636 8.54822 21.3022 7.90067 21.897C7.28717 22.4606 6.48923 22.9987 5.59276 22.6323C4.72747 22.2786 4.47507 21.359 4.36568 20.5066C4.24997 19.6051 4.24999 18.3535 4.25001 16.7873L4.25 4.87744C4.24997 4.228 4.24995 3.67162 4.30559 3.2267C4.36459 2.75485 4.49734 2.29561 4.8491 1.91741C5.20804 1.5315 5.65638 1.37829 6.12022 1.31125C6.54454 1.24991 7.07133 1.24995 7.66855 1.25L15.9584 1.25Z',
  d5: 'M16.3167 1.25H7.26093C5.84156 1.25 5.13187 1.25 4.69093 1.71031C4.24998 2.17063 4.24998 2.91149 4.24998 4.39322V17.0807C4.24998 20.559 4.24998 22.2982 5.22044 22.6834C6.1909 23.0686 7.29771 21.7687 9.51134 19.169L11.6803 16.6217C11.9752 16.2754 12.1226 16.1023 12.3187 16.0103C12.5149 15.9184 12.7368 15.9184 13.1806 15.9184H13.2656C14.7231 15.9184 15.4518 15.9184 15.9885 15.4958C16.5251 15.0732 16.7253 14.3417 17.1257 12.8787L19.2118 5.25673C19.7147 3.41917 19.9662 2.50039 19.5144 1.87519C19.0627 1.25 18.1473 1.25 16.3167 1.25Z',
  d6: 'M17.9136 10L18.4609 8H13C12.4477 8 12 8.44771 12 9C12 9.55229 12.4477 10 13 10H17.9136Z',
  d7: 'M16.9866 9.01416H11.9866',
  d8: 'M5.01122 1.99854H18.9888C18.9952 1.99854 18.9999 2.00444 18.9985 2.01068L16.0169 15.6838H10.9973L5.01848 21.9983C5.01226 22.0049 5.00122 22.0005 5.00122 21.9914V2.00855C5.00122 2.00302 5.0057 1.99854 5.01122 1.99854Z',
  d9: 'M4.99985 2H19.0002L17.626 8.25L11.9998 8.25V9.75L17.2962 9.75L16.0002 15.645H11.0002L4.99985 22V2Z',
};

export const IconFoursquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-stroke-rounded IconFoursquareStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFoursquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-duotone-rounded IconFoursquareDuotoneRounded"
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

export const IconFoursquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-twotone-rounded IconFoursquareTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFoursquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-solid-rounded IconFoursquareSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFoursquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-bulk-rounded IconFoursquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFoursquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-stroke-sharp IconFoursquareStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFoursquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="foursquare-solid-sharp IconFoursquareSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFoursquare: TheIconSelfPack = {
  name: 'Foursquare',
  StrokeRounded: IconFoursquareStrokeRounded,
  DuotoneRounded: IconFoursquareDuotoneRounded,
  TwotoneRounded: IconFoursquareTwotoneRounded,
  SolidRounded: IconFoursquareSolidRounded,
  BulkRounded: IconFoursquareBulkRounded,
  StrokeSharp: IconFoursquareStrokeSharp,
  SolidSharp: IconFoursquareSolidSharp,
};