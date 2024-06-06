import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5C15 11.3165 15 12.7247 14.2364 13.6822C14.073 13.8871 13.8871 14.073 13.6822 14.2364C12.7247 15 11.3165 15 8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5Z',
  d2: 'M9 15.5C9 12.6835 9 11.2753 9.76359 10.3178C9.92699 10.1129 10.1129 9.92699 10.3178 9.76359C11.2753 9 12.6835 9 15.5 9C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5Z',
  d3: 'M2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.89831 15 9.26846 15 9.61315 14.9978C9.38502 14.9902 9.24363 14.959 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C14.959 9.24364 14.9902 9.38509 14.9978 9.61333C15 9.26859 15 8.89838 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779Z',
  d4: 'M9.00216 14.3868C9 14.7315 9 15.1016 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.1016 9 14.7315 9 14.3867 9.00216C14.6149 9.00983 14.7564 9.04099 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C9.04099 14.7564 9.00983 14.615 9.00216 14.3868Z',
  d5: 'M15.53 8.46967C15.6708 8.61052 15.7499 8.80161 15.7497 9.00081C15.7483 10.2326 15.7379 11.2306 15.6291 12.0367C15.5181 12.8588 15.2965 13.5554 14.8226 14.1497C14.6242 14.3985 14.3985 14.6242 14.1497 14.8226C13.5554 15.2965 12.8588 15.5181 12.0367 15.6291C11.2306 15.7379 10.2326 15.7483 9.00081 15.7497C8.80161 15.7499 8.61052 15.6708 8.46967 15.53C8.32882 15.3891 8.24979 15.198 8.25 14.9988C8.25132 13.7671 8.26175 12.7691 8.37058 11.963C8.48158 11.1409 8.70311 10.4443 9.17704 9.85C9.37546 9.60119 9.60119 9.37546 9.85 9.17704C10.4443 8.70311 11.1409 8.48158 11.963 8.37058C12.7691 8.26175 13.7671 8.25132 14.9988 8.25C15.198 8.24979 15.3891 8.32882 15.53 8.46967Z',
  d6: 'M8.54731 1.25C9.91541 1.24999 11.0075 1.24998 11.8745 1.35043C12.7675 1.45389 13.5167 1.67232 14.1498 2.17722C14.3986 2.37563 14.6244 2.60136 14.8228 2.85017C15.3277 3.48329 15.5461 4.23254 15.6496 5.12547C15.6846 5.42793 15.7074 5.75777 15.7223 6.11718C15.7337 6.39446 15.7395 6.5331 15.6872 6.6134C15.6627 6.65103 15.6465 6.668 15.6099 6.69407C15.5319 6.74967 15.3537 6.74986 14.9974 6.75025C13.7881 6.75155 12.6859 6.75963 11.7624 6.88432C10.7908 7.01549 9.79877 7.29966 8.91488 8.00454C8.57827 8.27298 8.27286 8.57839 8.00442 8.91501C7.29954 9.79889 7.01537 10.7909 6.88419 11.7625C6.75951 12.686 6.75142 13.7882 6.75012 14.9975C6.74974 15.3537 6.74955 15.5319 6.69397 15.6099C6.6679 15.6465 6.6509 15.6627 6.61324 15.6873C6.53295 15.7395 6.39435 15.7337 6.11714 15.7223C5.75775 15.7074 5.42792 15.6846 5.12547 15.6496C4.23254 15.5461 3.48329 15.3277 2.85017 14.8228C2.60136 14.6244 2.37563 14.3986 2.17722 14.1498C1.67232 13.5167 1.45389 12.7675 1.35043 11.8745C1.24998 11.0075 1.24999 9.91539 1.25 8.54729V8.45269C1.24999 7.08459 1.24998 5.99249 1.35043 5.12547C1.45389 4.23254 1.67232 3.48329 2.17722 2.85017C2.37563 2.60136 2.60136 2.37563 2.85017 2.17722C3.48329 1.67232 4.23254 1.45389 5.12547 1.35043C5.99249 1.24998 7.08461 1.24999 8.45271 1.25H8.54731Z',
  d7: 'M18.875 8.34997C19.768 8.45343 20.5172 8.67186 21.1503 9.17675C21.3991 9.37517 21.6249 9.6009 21.8233 9.84971C22.3282 10.4828 22.5466 11.2321 22.6501 12.125C22.7505 12.992 22.7505 14.0841 22.7505 15.4523V15.5468C22.7505 16.9149 22.7505 18.007 22.6501 18.8741C22.5466 19.767 22.3282 20.5162 21.8233 21.1494C21.6249 21.3982 21.3991 21.6239 21.1503 21.8223C20.5172 22.3272 19.768 22.5456 18.875 22.6491C18.008 22.7496 16.9159 22.7496 15.5478 22.7495H15.4532C14.0851 22.7496 12.993 22.7496 12.126 22.6491C11.2331 22.5456 10.4838 22.3272 9.85068 21.8223C9.60188 21.6239 9.37614 21.3982 9.17773 21.1494C8.67283 20.5162 8.4544 19.767 8.35094 18.8741C8.3159 18.5716 8.29309 18.2418 8.27823 17.8824C8.26677 17.6052 8.26104 17.4666 8.31327 17.3863C8.33777 17.3487 8.35405 17.3317 8.39063 17.3056C8.46863 17.25 8.64678 17.2498 9.00308 17.2494C10.2123 17.2481 11.3145 17.24 12.238 17.1154C13.2096 16.9842 14.2017 16.7 15.0856 15.9951C15.4222 15.7267 15.7276 15.4213 15.996 15.0847C16.7009 14.2008 16.9851 13.2087 17.1162 12.2371C17.2409 11.3136 17.249 10.2115 17.2503 9.0022C17.2507 8.64582 17.2509 8.46763 17.3065 8.38962C17.3326 8.35307 17.3495 8.3368 17.3872 8.31232C17.4674 8.26006 17.6061 8.26579 17.8834 8.27725C18.2428 8.29211 18.5726 8.31493 18.875 8.34997Z',
  d8: 'M15.0128 2.0459H2.12993C2.12446 2.0459 2.12001 2.05035 2.11997 2.05587L2.02344 15.006C2.0234 15.0115 2.02787 15.0161 2.0334 15.0161H15.0228V2.05594C15.0228 2.0504 15.0183 2.0459 15.0128 2.0459Z',
  d9: 'M22.0119 9.0752H9.11906L9.02246 22.0353C9.02242 22.0408 9.02689 22.0454 9.03243 22.0454H22.0119C22.0174 22.0454 22.0218 22.0409 22.0218 22.0353V9.08524C22.0218 9.07969 22.0174 9.0752 22.0119 9.0752Z',
  d10: 'M8.25 15.75V8.25H15.75V15.75H8.25Z',
  d11: 'M8.25 17.25V22C8.25 22.4142 8.58579 22.75 9 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V9C22.75 8.58579 22.4142 8.25 22 8.25H17.25V17.25H8.25Z',
  d12: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V6.75H6.75V15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V2Z',
};

export const IconPathfinderDivideStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-stroke-rounded IconPathfinderDivideStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderDivideDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-duotone-rounded IconPathfinderDivideDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderDivideTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-twotone-rounded IconPathfinderDivideTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderDivideSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-solid-rounded IconPathfinderDivideSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconPathfinderDivideBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-bulk-rounded IconPathfinderDivideBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderDivideStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-stroke-sharp IconPathfinderDivideStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderDivideSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-divide-solid-sharp IconPathfinderDivideSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfPathfinderDivide: TheIconSelfPack = {
  name: 'PathfinderDivide',
  StrokeRounded: IconPathfinderDivideStrokeRounded,
  DuotoneRounded: IconPathfinderDivideDuotoneRounded,
  TwotoneRounded: IconPathfinderDivideTwotoneRounded,
  SolidRounded: IconPathfinderDivideSolidRounded,
  BulkRounded: IconPathfinderDivideBulkRounded,
  StrokeSharp: IconPathfinderDivideStrokeSharp,
  SolidSharp: IconPathfinderDivideSolidSharp,
};