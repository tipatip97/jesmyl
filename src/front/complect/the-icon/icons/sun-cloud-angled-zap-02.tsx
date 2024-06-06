import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5784 15L10.8043 17.6838C10.5668 18.0431 10.4481 18.2227 10.5217 18.3614C10.5952 18.5 10.8093 18.5 11.2375 18.5H12.7625C13.1907 18.5 13.4048 18.5 13.4783 18.6386C13.5519 18.7773 13.4332 18.9569 13.1957 19.3162L11.4216 22',
  d2: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d3: 'M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8251 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.419 3.71776 19.512 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M6.22929 1.16034C6.76219 1.01532 7.31176 1.32976 7.45678 1.86266L7.47389 1.92553C8.44507 1.82839 9.40219 1.96263 10.2781 2.2906L10.4028 2.07756C10.6816 1.60085 11.2941 1.44048 11.7708 1.71935C12.2476 1.99823 12.4079 2.61074 12.1291 3.08745L12.0147 3.28289C12.3369 3.54372 12.6335 3.83747 12.8986 4.16085C13.2487 4.58794 13.1864 5.21803 12.7593 5.56818C12.3322 5.91834 11.7021 5.85596 11.3519 5.42887C11.0298 5.03591 10.6379 4.70712 10.1996 4.45603C10.1922 4.4519 10.1847 4.44768 10.1773 4.44335C10.1771 4.4432 10.1768 4.44305 10.1766 4.44291C9.25021 3.91983 8.12001 3.74237 7.00404 4.0368C5.88318 4.33251 4.99615 5.04484 4.46372 5.95517C3.93212 6.86407 3.754 7.97035 4.04955 9.05639C4.19767 9.60068 4.44963 10.0884 4.77892 10.5063C5.12075 10.9401 5.0462 11.5689 4.61241 11.9107C4.17862 12.2525 3.54986 12.178 3.20803 11.7442C2.91419 11.3713 2.6616 10.9609 2.45888 10.5183L2.38034 10.539C1.84633 10.6799 1.29922 10.3612 1.15833 9.82719C1.01744 9.29318 1.33614 8.74606 1.87015 8.60518L1.93583 8.58785C1.84135 7.64114 1.97547 6.71023 2.30013 5.85751L2.09458 5.74038C1.61472 5.46696 1.44737 4.85631 1.72079 4.37646C1.99421 3.8966 2.60486 3.72925 3.08472 4.00267L3.30852 4.1302C3.8993 3.41778 4.65648 2.83226 5.54068 2.43824L5.52697 2.38784C5.38194 1.85493 5.69638 1.30537 6.22929 1.16034Z',
  d6: 'M13.2554 14.0409C13.7161 14.3454 13.8427 14.9658 13.5382 15.4266L12.2501 17.3751L12.9283 17.3751C13.104 17.3749 13.3338 17.3747 13.5264 17.4034C13.7373 17.4348 14.2218 17.5447 14.4873 18.045C14.751 18.542 14.5743 19.0029 14.4849 19.1939C14.4023 19.3701 14.2755 19.5616 14.1776 19.7093L12.3814 22.4266C12.0768 22.8873 11.4565 23.0139 10.9957 22.7093C10.535 22.4048 10.4084 21.7844 10.713 21.3237L12.001 19.3751L11.3229 19.3751C11.1471 19.3753 10.9173 19.3756 10.7247 19.3468C10.5138 19.3154 10.0294 19.2056 9.7639 18.7052C9.50017 18.2082 9.67687 17.7473 9.76631 17.5563C9.84881 17.3802 9.97568 17.1887 10.0735 17.0409L11.8698 14.3237C12.1743 13.8629 12.7947 13.7363 13.2554 14.0409Z',
  d7: 'M6.01793 9.29041C5.99187 9.41018 5.89894 9.50478 5.77975 9.53336C3.2528 10.1393 1.375 12.4125 1.375 15.125C1.375 18.3006 3.94936 20.875 7.125 20.875H9.0865C9.19118 20.875 9.28756 20.818 9.33799 20.7263C9.41356 20.5888 9.36366 20.4175 9.23622 20.326C8.94546 20.1174 8.66018 19.8234 8.43978 19.408C7.8326 18.2638 8.26519 17.2264 8.40876 16.9199C8.53961 16.6405 8.71998 16.3688 8.80973 16.2336L10.6193 13.4962C11.3807 12.3444 12.9317 12.0279 14.0835 12.7893C15.2353 13.5506 15.5518 15.1016 14.7904 16.2534C14.784 16.263 14.7871 16.2759 14.7971 16.2817C15.1597 16.4918 15.5372 16.8217 15.8131 17.3416C16.4203 18.4857 15.9877 19.5231 15.8441 19.8297C15.7133 20.1091 15.533 20.3807 15.4432 20.5159C15.3415 20.6698 15.4518 20.875 15.6363 20.875H17.625C20.5245 20.875 22.875 18.5245 22.875 15.625C22.875 13.066 21.0441 10.9346 18.6208 10.4693C18.4776 10.4418 18.3694 10.321 18.3591 10.1755C18.1287 6.93355 15.4256 4.375 12.125 4.375C9.13114 4.375 6.62951 6.47958 6.01793 9.29041Z',
  d8: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71386 11.0265 2.86534 11.2628C3.31726 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d9: 'M13.0807 15L11.002 18.5H14.0023L11.9239 22',
  d10: 'M17.9795 11.0001C17.987 11 17.9945 11 18.002 11C20.4872 11 22.502 13.0147 22.502 15.5C22.502 17.8251 20.7643 19.7631 18.502 20M17.9795 11.0001C17.9944 10.8354 18.002 10.6686 18.002 10.5C18.002 7.46243 15.5395 5 12.502 5C9.62519 5 7.26428 7.20862 7.02238 10.0227M17.9795 11.0001C17.8773 12.1345 17.4306 13.1696 16.7448 14M7.02238 10.0227C4.48593 10.2641 2.50195 12.4003 2.50195 15C2.50195 17.419 4.21971 19.512 6.50195 19.9753M7.02238 10.0227C7.18021 10.0077 7.34018 10 7.50195 10C8.62778 10 9.6667 10.3721 10.5024 11',
  d11: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d12: 'M12.2182 14.7285L13.9377 15.7498L12.7562 17.7392H15.7564L12.781 22.7498L11.0613 21.7286L12.2427 19.7392H9.24219L12.2182 14.7285Z',
  d13: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 17.1723 4.31892 19.7446 7.48993 19.75L11.6932 12.6729L15.9922 15.2261L15.3905 16.2392H18.3905L16.3056 19.75H18C20.8995 19.75 23.25 17.3995 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
  d14: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
};

export const IconSunCloudAngledZap02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-stroke-rounded IconSunCloudAngledZap02StrokeRounded"
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

export const IconSunCloudAngledZap02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-duotone-rounded IconSunCloudAngledZap02DuotoneRounded"
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

export const IconSunCloudAngledZap02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-twotone-rounded IconSunCloudAngledZap02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledZap02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-solid-rounded IconSunCloudAngledZap02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSunCloudAngledZap02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-bulk-rounded IconSunCloudAngledZap02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudAngledZap02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-stroke-sharp IconSunCloudAngledZap02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledZap02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-zap-02-solid-sharp IconSunCloudAngledZap02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudAngledZap02: TheIconSelfPack = {
  name: 'SunCloudAngledZap02',
  StrokeRounded: IconSunCloudAngledZap02StrokeRounded,
  DuotoneRounded: IconSunCloudAngledZap02DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledZap02TwotoneRounded,
  SolidRounded: IconSunCloudAngledZap02SolidRounded,
  BulkRounded: IconSunCloudAngledZap02BulkRounded,
  StrokeSharp: IconSunCloudAngledZap02StrokeSharp,
  SolidSharp: IconSunCloudAngledZap02SolidSharp,
};