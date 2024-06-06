import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.00781 12L5.99883 12',
  d2: 'M11 16.0418C11.4635 16.1947 11.9076 16.3708 12.3099 16.6525M12.3099 16.6525C13.3507 17.3811 14 18.5764 14 19.8845C14 19.9484 13.9465 20.0003 13.8819 20C10.9648 19.9871 9.65844 19.4932 9.1094 18.6782L8 16.8568C5.50848 16.3537 3.21828 14.7625 2 12.0833C5 5.48589 14.5 5.48589 17.5 12.0833M12.3099 16.6525C14.4801 15.9922 16.4151 14.4692 17.5 12.0833M12.3099 7.5142C13.3507 6.78564 14 5.59024 14 4.28218C14 3.4556 9.69172 4.62406 9.1094 5.48846L8 7.30982M17.5 12.0833C17.8333 11.4236 19.6 9.11447 22 9.11447C21.1667 9.93915 19.8 13.0729 21 15.0522C19.8 15.0522 18 12.7431 17.5 12.0833Z',
  d3: 'M13.8819 19.9976C10.9648 19.9847 9.65844 19.4908 9.1094 18.6758L8 16.8544C5.50848 16.3512 3.21828 14.76 2 12.0809C5 5.48346 14.5 5.48346 17.5 12.0809C16.4151 14.4667 14.4801 15.9898 12.3099 16.6501C13.3507 17.3786 14 18.574 14 19.8821C14 19.946 13.9465 19.9979 13.8819 19.9976Z',
  d4: 'M11 16.0413C11.4635 16.1942 11.9076 16.3704 12.3099 16.652M12.3099 16.652C13.3507 17.3806 14 18.576 14 19.884C14 19.948 13.9465 19.9998 13.8819 19.9995C10.9648 19.9866 9.65844 19.4928 9.1094 18.6778L8 16.8564C5.50848 16.3532 3.21828 14.762 2 12.0828C5 5.48541 14.5 5.48541 17.5 12.0828M12.3099 16.652C14.4801 15.9918 16.4151 14.4687 17.5 12.0828M17.5 12.0828C17.8333 11.4231 19.6 9.11399 22 9.11399C21.1667 9.93867 19.8 13.0725 21 15.0517C19.8 15.0517 18 12.7426 17.5 12.0828Z',
  d5: 'M12.3099 7.5C13.3507 6.77438 14 5.58382 14 4.28104C14 3.4578 9.69172 4.62153 9.1094 5.48244L8 7.29644',
  d6: 'M14.7522 4.28219C14.7522 4.05151 14.6713 3.83315 14.5209 3.65931C14.3827 3.49965 14.2159 3.41123 14.0837 3.3607C13.8303 3.2638 13.5452 3.24659 13.3076 3.25051C12.81 3.25871 12.1885 3.36996 11.5878 3.52502C10.9795 3.68205 10.3452 3.89638 9.81414 4.13492C9.549 4.254 9.29581 4.38524 9.07952 4.52616C8.87707 4.65806 8.64631 4.83678 8.48958 5.06944C8.48319 5.07892 8.47702 5.08855 8.47107 5.09832C8.44131 5.14717 8.48116 5.20896 8.53801 5.20263C10.3098 5.00544 12.1264 5.24388 13.7907 5.91731C14.0733 6.03165 14.2146 6.08882 14.3345 6.03065C14.4545 5.97247 14.4919 5.84362 14.5668 5.58591C14.6879 5.16946 14.7522 4.73154 14.7522 4.28219Z',
  d7: 'M13.6961 16.9247C15.2551 16.2097 16.6399 15.0461 17.6267 13.4385C17.8721 13.7272 18.1558 14.043 18.4583 14.3441C18.8078 14.6923 19.2013 15.04 19.6055 15.3055C19.9922 15.5595 20.4802 15.7997 21 15.7997C21.2708 15.7997 21.5206 15.6537 21.6535 15.4177C21.7864 15.1818 21.7817 14.8925 21.6413 14.6609C21.195 13.9248 21.1887 12.8894 21.4632 11.8373C21.7387 10.7812 22.2389 9.93079 22.5276 9.64513C22.7437 9.43126 22.8093 9.10806 22.6937 8.82684C22.578 8.54562 22.3041 8.36204 22 8.36204C20.5562 8.36204 19.3483 9.05406 18.4919 9.77541C18.1465 10.0663 17.8438 10.374 17.5916 10.6657C13.8169 4.60804 4.40672 4.9763 1.31727 11.7704C1.22758 11.9677 1.22758 12.1941 1.31727 12.3913C2.5896 15.1894 4.94386 16.9011 7.52591 17.5178L8.46887 19.066C8.47482 19.0757 8.48099 19.0854 8.48738 19.0948C8.88798 19.6895 9.52456 20.0967 10.393 20.3561C11.2515 20.6125 12.3886 20.741 13.8785 20.7476C14.3435 20.7496 14.75 20.3765 14.75 19.8821C14.75 18.7776 14.3616 17.7422 13.6961 16.9247ZM6.01229 13.25C6.70017 13.25 7.25781 12.6904 7.25781 12C7.25781 11.3096 6.70017 10.75 6.01229 10.75H6.00334C5.31545 10.75 4.75781 11.3096 4.75781 12C4.75781 12.6904 5.31545 13.25 6.00334 13.25H6.01229Z',
  d8: 'M17.6267 13.4385C16.6399 15.0461 15.2551 16.2097 13.6961 16.9247C14.3616 17.7422 14.75 18.7776 14.75 19.8821C14.75 20.3765 14.3435 20.7496 13.8785 20.7476C12.3886 20.741 11.2515 20.6125 10.393 20.3561C9.52456 20.0967 8.88798 19.6895 8.48738 19.0948C8.48099 19.0854 8.47482 19.0757 8.46887 19.066L7.52591 17.5178C4.94386 16.9011 2.5896 15.1894 1.31727 12.3913C1.22758 12.1941 1.22758 11.9677 1.31727 11.7704C4.40672 4.9763 13.8169 4.60804 17.5916 10.6657C17.8438 10.374 18.1465 10.0663 18.4919 9.77541C19.3483 9.05406 20.5562 8.36204 22 8.36204C22.3041 8.36204 22.578 8.54562 22.6937 8.82684C22.8093 9.10806 22.7437 9.43126 22.5276 9.64513C22.2389 9.93079 21.7387 10.7812 21.4632 11.8373C21.1887 12.8894 21.195 13.9248 21.6413 14.6609C21.7817 14.8925 21.7864 15.1818 21.6535 15.4177C21.5206 15.6537 21.2708 15.7997 21 15.7997C20.4802 15.7997 19.9922 15.5595 19.6055 15.3055C19.2013 15.04 18.8078 14.6923 18.4583 14.3441C18.1558 14.043 17.8721 13.7272 17.6267 13.4385Z',
  d9: 'M7.25781 12C7.25781 12.6904 6.70017 13.25 6.01229 13.25L6.00334 13.25C5.31545 13.25 4.75781 12.6904 4.75781 12C4.75781 11.3096 5.31545 10.75 6.00334 10.75L6.01229 10.75C6.70017 10.75 7.25781 11.3096 7.25781 12Z',
  d10: 'M11 16.0418C11.4635 16.1947 11.9076 16.3709 12.3099 16.6525M12.3099 16.6525C13.3507 17.3811 14 18.692 14 20C11.083 19.9871 9.65844 19.4933 9.1094 18.6783L8 16.8569C5.50848 16.3537 3.21828 14.7625 2 12.0834C5 5.48593 14.5 5.48593 17.5 12.0834M12.3099 16.6525C14.4801 15.9923 16.4151 14.4692 17.5 12.0834M12.3099 7.51425C13.3507 6.78568 14 5.30806 14 4C14 4 9.69172 4.6241 9.1094 5.4885L8 7.30986M17.5 12.0834C17.8333 11.4236 19.6 9.11452 22 9.11452C21.1667 9.9392 19.8 13.073 21 15.0522C19.8 15.0522 18 12.7431 17.5 12.0834Z',
  d11: 'M13.1749 16.9563C14.7291 16.2466 16.1099 15.0889 17.0931 13.4877C17.3369 13.7744 17.6188 14.088 17.9192 14.3872C18.2665 14.7329 18.6574 15.0783 19.0589 15.342C19.4432 15.5943 19.9279 15.8328 20.4443 15.8328H21.7674L21.0815 14.7017C20.6381 13.9707 20.6318 12.9423 20.9045 11.8973C21.1782 10.8485 21.6751 10.0038 21.9619 9.72011L23.25 8.44575H21.4378C20.0034 8.44575 18.8035 9.13306 17.9526 9.8495C17.6095 10.1384 17.3088 10.444 17.0582 10.7337C13.3082 4.71728 3.9595 5.08303 0.890247 11.831L0.75 12.1393L0.890247 12.4476C2.15426 15.2266 4.49313 16.9267 7.05831 17.5393L8.00397 19.0914L8.0135 19.1055C8.42039 19.7094 9.09545 20.1082 9.97271 20.3604C10.8504 20.6127 12.0057 20.7405 13.4868 20.747L14.2352 20.7503V20.0021C14.2352 18.91 13.8506 17.812 13.1749 16.9563ZM5.54926 13.0498C6.09794 13.0498 6.54273 12.6021 6.54273 12.0498C6.54273 11.4975 6.09794 11.0498 5.54926 11.0498H5.54034C4.99166 11.0498 4.54688 11.4975 4.54688 12.0498C4.54688 12.6021 4.99166 13.0498 5.54034 13.0498H5.54926Z',
  d12: 'M14.2356 4.11058V3.25L13.3835 3.3734L13.3801 3.37393C13.2553 3.39361 12.8924 3.4508 12.6847 3.48702C12.2663 3.55995 11.6994 3.66679 11.1113 3.80182C10.5274 3.93589 9.90252 4.10223 9.37608 4.29731C9.11337 4.39466 8.8568 4.50584 8.63525 4.6332C8.4281 4.7523 8.18099 4.92476 8.01387 5.17278L8.00435 5.18691L7.92773 5.31265C9.91105 5.06708 11.9574 5.37194 13.7858 6.2263C14.0795 5.54272 14.2356 4.80254 14.2356 4.11058Z',
};

export const IconFishFoodStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-stroke-rounded IconFishFoodStrokeRounded"
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

export const IconFishFoodDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-duotone-rounded IconFishFoodDuotoneRounded"
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

export const IconFishFoodTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-twotone-rounded IconFishFoodTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFishFoodSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-solid-rounded IconFishFoodSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFishFoodBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-bulk-rounded IconFishFoodBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconFishFoodStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-stroke-sharp IconFishFoodStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFishFoodSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="fish-food-solid-sharp IconFishFoodSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFishFood: TheIconSelfPack = {
  name: 'FishFood',
  StrokeRounded: IconFishFoodStrokeRounded,
  DuotoneRounded: IconFishFoodDuotoneRounded,
  TwotoneRounded: IconFishFoodTwotoneRounded,
  SolidRounded: IconFishFoodSolidRounded,
  BulkRounded: IconFishFoodBulkRounded,
  StrokeSharp: IconFishFoodStrokeSharp,
  SolidSharp: IconFishFoodSolidSharp,
};