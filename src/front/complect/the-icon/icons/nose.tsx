import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 17C9 17 9.5 21 12 21C14.5 21 15 17 17 17',
  d2: 'M8.5 3C8.5 5.27896 7.13238 10.0177 5.73581 12.1124C4.16269 14.4718 2.78009 18.3771 5.73797 19.8041C7.19815 20.5085 9 19.0868 9 19.0868',
  d3: 'M15.5 3C15.5 5.27809 16.8676 10.0177 18.2642 12.1124C19.8373 14.4718 21.2199 18.3771 18.262 19.8041C16.8018 20.5085 15 19.0868 15 19.0868',
  d4: 'M5.73581 12.1124C7.13238 10.0177 8.5 5.27896 8.5 3H15.5C15.5 5.27809 16.8676 10.0177 18.2642 12.1124C19.8373 14.4718 21.2199 18.3771 18.262 19.8041C16.8018 20.5085 15 19.0868 15 19.0868L14.7558 18.9005C14.0492 19.9325 13.2915 21 12 21C10.7085 21 9.95076 19.9325 9.24423 18.9005L9 19.0868C9 19.0868 7.19815 20.5085 5.73797 19.8041C2.78009 18.3771 4.16269 14.4718 5.73581 12.1124Z',
  d5: 'M7 17C9 17 9.5 21 12 21',
  d6: 'M6.30469 17.0085C5.89047 17.0085 5.55469 17.3445 5.55469 17.7589C5.55469 18.1734 5.89047 18.5094 6.30469 18.5094C6.30572 18.5094 6.30674 18.5096 6.30773 18.5099C6.31124 18.511 6.32093 18.5145 6.3363 18.5228C6.37953 18.5461 6.4649 18.6049 6.59873 18.7471C6.86031 19.0251 7.11417 19.4065 7.48022 19.9625L7.65152 20.2224C7.75798 20.3837 7.68371 20.6039 7.49602 20.6502C6.87485 20.8035 6.13139 20.8373 5.41206 20.4901C4.51871 20.0589 3.91731 19.4172 3.58043 18.6399C3.25045 17.8784 3.19637 17.0395 3.29299 16.2273C3.48463 14.6165 4.28913 12.9363 5.11177 11.7018C6.09436 10.2272 7.11581 7.21252 7.54625 4.85176C7.63295 4.37612 7.71463 3.92802 7.806 3.6093C7.89807 3.28811 8.04232 2.92091 8.35934 2.65634C8.66542 2.4009 9.02486 2.31876 9.34711 2.28348C9.65341 2.24995 10.0338 2.24997 10.4613 2.25H13.5386C13.9661 2.24997 14.3465 2.24995 14.6529 2.28348C14.9751 2.31876 15.3345 2.40089 15.6406 2.65632C15.9576 2.92089 16.1019 3.28808 16.194 3.60927C16.2853 3.928 16.367 4.37606 16.4538 4.85173C16.8842 7.21235 17.9057 10.2273 18.8882 11.7018C19.7108 12.9363 20.5153 14.6165 20.707 16.2273C20.8036 17.0396 20.7495 17.8784 20.4195 18.6399C20.0826 19.4172 19.4812 20.0589 18.5879 20.4901C17.8686 20.8373 17.1251 20.8035 16.504 20.6502C16.3163 20.6039 16.242 20.3837 16.3485 20.2224L16.52 19.9622C16.8861 19.4061 17.1397 19.0252 17.4013 18.7471C17.5351 18.6049 17.6205 18.5461 17.6637 18.5228C17.6791 18.5145 17.6888 18.511 17.6923 18.5099C17.6933 18.5096 17.6943 18.5094 17.6953 18.5094C18.1095 18.5094 18.4453 18.1734 18.4453 17.7589C18.4453 17.3445 18.1095 17.0085 17.6953 17.0085C17.1558 17.0085 16.7156 17.2864 16.3091 17.7183C15.9485 18.1016 15.6264 18.5911 15.2924 19.0985L15.1394 19.3308C14.3578 20.5137 13.4739 21.75 12 21.75C10.5262 21.75 9.64195 20.5134 8.86046 19.3305L8.70757 19.0985C8.37362 18.5911 8.05146 18.1016 7.69088 17.7183C7.28442 17.2864 6.84422 17.0085 6.30469 17.0085Z',
  d7: 'M7 19.25C7.21792 19.25 7.44296 19.3489 7.73755 19.6497C7.92813 19.8443 8.10867 20.0818 8.3041 20.3589C8.27265 20.3729 8.24074 20.3868 8.20837 20.4005C7.50901 20.6959 6.43607 20.9736 5.41206 20.4796C4.51871 20.0486 3.91731 19.4073 3.58043 18.6304C3.25045 17.8694 3.19637 17.031 3.29299 16.2193C3.48463 14.6094 4.28913 12.9302 5.11177 11.6963C5.74834 10.7416 6.4139 9.1172 6.92289 7.41091C7.43212 5.7038 7.74997 4.03126 7.74997 3C7.74997 2.58579 8.08576 2.25 8.49997 2.25H15.5C15.9142 2.25 16.25 2.58579 16.25 3C16.25 4.03082 16.5678 5.70335 17.0771 7.4106C17.5861 9.11702 18.2516 10.7416 18.8882 11.6963C19.7108 12.9302 20.5153 14.6094 20.707 16.2193C20.8036 17.031 20.7495 17.8694 20.4195 18.6304C20.0826 19.4073 19.4812 20.0486 18.5879 20.4796C17.5639 20.9736 16.4909 20.6959 15.7916 20.4005C15.7592 20.3868 15.7273 20.373 15.6959 20.359C15.8913 20.0818 16.0719 19.8444 16.2624 19.6497C16.557 19.3489 16.7821 19.25 17 19.25V17.75C16.2179 17.75 15.6305 18.1511 15.1907 18.6003C14.8147 18.9843 14.4792 19.4755 14.1825 19.9099C14.1442 19.966 14.1065 20.0212 14.0695 20.0751C13.3409 21.1348 12.8 21.75 12 21.75C11.2 21.75 10.6591 21.1348 9.93053 20.0751C9.89349 20.0212 9.8558 19.966 9.81747 19.9099C9.52082 19.4755 9.18531 18.9843 8.80932 18.6003C8.36954 18.1511 7.78208 17.75 7 17.75V19.25Z',
};

export const IconNoseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-stroke-rounded IconNoseStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-duotone-rounded IconNoseDuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-twotone-rounded IconNoseTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-solid-rounded IconNoseSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-bulk-rounded IconNoseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-stroke-sharp IconNoseStrokeSharp"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="nose-solid-sharp IconNoseSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNose: TheIconSelfPack = {
  name: 'Nose',
  StrokeRounded: IconNoseStrokeRounded,
  DuotoneRounded: IconNoseDuotoneRounded,
  TwotoneRounded: IconNoseTwotoneRounded,
  SolidRounded: IconNoseSolidRounded,
  BulkRounded: IconNoseBulkRounded,
  StrokeSharp: IconNoseStrokeSharp,
  SolidSharp: IconNoseSolidSharp,
};