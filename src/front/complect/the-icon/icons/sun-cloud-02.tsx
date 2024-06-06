import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 12.0001C17.485 12 17.4925 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H7C4.23858 21 2 18.7614 2 16C2 13.4003 3.98398 11.2641 6.52042 11.0227M17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227M17.4776 12.0001C17.3753 13.1345 16.9286 14.1696 16.2428 15M6.52042 11.0227C6.67826 11.0077 6.83823 11 7 11C8.12582 11 9.16474 11.3721 10.0005 12',
  d2: 'M2.95939 10.1937C2.21865 7.47179 3.85922 4.67397 6.6237 3.94463M2.95939 10.1937L2 10.4468M2.95939 10.1937C3.14359 10.8706 3.4577 11.479 3.86823 12M6.6237 3.94463L6.36663 3M6.6237 3.94463C8.66673 3.40563 10.7518 4.14719 12 5.66961M3.4765 6.32297L2.4644 5.74628M11.1407 3.45725L10.557 4.45494',
  d3: 'M17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227C3.98398 11.2641 2 13.4003 2 16C2 18.7614 4.23858 21 7 21H17.5C19.9853 21 22 18.9853 22 16.5C22 14.0147 19.9853 12 17.5 12L17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5Z',
  d4: 'M1.375 16.125C1.375 13.342 3.35164 11.0214 5.978 10.4895C6.51231 7.57956 9.06085 5.375 12.125 5.375C15.5108 5.375 18.2678 8.06724 18.3719 11.4277C20.9177 11.7903 22.875 13.9791 22.875 16.625C22.875 19.5245 20.5245 21.875 17.625 21.875H7.125C3.94936 21.875 1.375 19.3006 1.375 16.125Z',
  d5: 'M7.45678 2.86266C7.31176 2.32976 6.76219 2.01532 6.22929 2.16034C5.69638 2.30537 5.38194 2.85493 5.52697 3.38784L5.54068 3.43824C4.65648 3.83226 3.8993 4.41778 3.30852 5.1302L3.08472 5.00267C2.60486 4.72925 1.99421 4.8966 1.72079 5.37646C1.44737 5.85631 1.61472 6.46696 2.09458 6.74038L2.30013 6.85751C1.97547 7.71023 1.84135 8.64114 1.93583 9.58785L1.87015 9.60518C1.33614 9.74606 1.01744 10.2932 1.15833 10.8272C1.29922 11.3612 1.84633 11.6799 2.38034 11.539L2.45888 11.5183C2.57779 11.7779 2.71386 12.0265 2.86534 12.2628C3.31726 11.7648 3.85533 11.3464 4.45607 11.031C4.28246 10.7318 4.14462 10.4057 4.04955 10.0564C3.754 8.97035 3.93212 7.86407 4.46372 6.95517C4.99615 6.04484 5.88318 5.33251 7.00404 5.0368C8.12001 4.74237 9.25021 4.91983 10.1766 5.44291C10.184 5.44724 10.1922 5.4519 10.1996 5.45603C10.2815 5.50296 10.3618 5.55261 10.4404 5.60488C10.9763 5.45525 11.5413 5.37524 12.125 5.37524C12.4436 5.37524 12.7566 5.39908 13.0624 5.44507C13.0248 5.34457 12.9704 5.24844 12.8986 5.16085C12.6335 4.83747 12.3369 4.54372 12.0147 4.28289L12.1291 4.08745C12.4079 3.61074 12.2476 2.99823 11.7708 2.71935C11.2941 2.44048 10.6816 2.60085 10.4028 3.07756L10.2781 3.2906C9.40219 2.96263 8.44507 2.82839 7.47389 2.92553L7.45678 2.86266Z',
  d6: 'M17.9795 12.0001C17.987 12 17.9945 12 18.002 12C20.4872 12 22.502 14.0147 22.502 16.5C22.502 18.9853 20.4872 21 18.002 21H7.50195C4.74053 21 2.50195 18.7614 2.50195 16C2.50195 13.4003 4.48593 11.2641 7.02238 11.0227M17.9795 12.0001C17.9944 11.8354 18.002 11.6686 18.002 11.5C18.002 8.46243 15.5395 6 12.502 6C9.62519 6 7.26428 8.20862 7.02238 11.0227M17.9795 12.0001C17.8773 13.1345 17.4306 14.1696 16.7448 15M7.02238 11.0227C7.18021 11.0077 7.34018 11 7.50195 11C8.62778 11 9.6667 11.3721 10.5024 12',
  d7: 'M7.45538 5V3M7.45538 5C5.26267 5 3.48513 6.79086 3.48513 9M7.45538 5C8.67809 5 9.7717 5.55686 10.5 6.43258M1.5 9H3.48513M3.48513 9C3.48513 10.1947 4.00499 11.2671 4.82923 12M3.24459 4.75766L4.64829 6.17188',
  d8: 'M5.70538 3.85111C5.07484 3.98056 4.48827 4.23001 3.96989 4.57449L3.20433 3.8032L1.78485 5.21212L2.55911 5.99218C2.21331 6.51742 1.96355 7.11191 1.83467 7.75H0.75V9.75H1.83468C2.05366 10.8342 2.62153 11.7919 3.41473 12.4973L4.74374 11.0027C4.1249 10.4524 3.73513 9.64859 3.73513 8.75C3.73513 7.0861 5.07198 5.75 6.70538 5.75C7.61697 5.75 8.4337 6.16374 8.98114 6.822L10.5189 5.54315C9.81277 4.69414 8.82841 4.0823 7.70538 3.85134V2.75H5.70538V3.85111Z',
  d9: 'M1.75 15.5C1.75 12.717 3.72664 10.3964 6.353 9.86454C6.88731 6.95456 9.43585 4.75 12.5 4.75C15.8858 4.75 18.6428 7.44224 18.7469 10.8027C21.2927 11.1653 23.25 13.3541 23.25 16C23.25 18.8995 20.8995 21.25 18 21.25H7.5C4.32436 21.25 1.75 18.6756 1.75 15.5Z',
};

export const IconSunCloud02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-stroke-rounded IconSunCloud02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloud02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-duotone-rounded IconSunCloud02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloud02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-twotone-rounded IconSunCloud02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloud02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-solid-rounded IconSunCloud02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloud02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-bulk-rounded IconSunCloud02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloud02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-stroke-sharp IconSunCloud02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloud02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-02-solid-sharp IconSunCloud02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloud02: TheIconSelfPack = {
  name: 'SunCloud02',
  StrokeRounded: IconSunCloud02StrokeRounded,
  DuotoneRounded: IconSunCloud02DuotoneRounded,
  TwotoneRounded: IconSunCloud02TwotoneRounded,
  SolidRounded: IconSunCloud02SolidRounded,
  BulkRounded: IconSunCloud02BulkRounded,
  StrokeSharp: IconSunCloud02StrokeSharp,
  SolidSharp: IconSunCloud02SolidSharp,
};