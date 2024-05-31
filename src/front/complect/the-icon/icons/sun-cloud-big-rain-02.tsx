import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8251 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.419 3.71776 19.512 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11',
  d2: 'M9.5 19.5034C9.5 18.2482 10.5532 17.0077 11.2924 16.2917C11.6939 15.9028 12.3061 15.9028 12.7076 16.2917C13.4468 17.0077 14.5 18.2482 14.5 19.5034C14.5 20.7341 13.5533 22 12 22C10.4467 22 9.5 20.7341 9.5 19.5034Z',
  d3: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d4: 'M12 5C15.0376 5 17.5 7.46243 17.5 10.5C17.5 10.6686 17.4924 10.8354 17.4776 11.0001L17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20H14.9985C14.9499 18.5656 13.7186 17.1591 12.8491 16.3403C12.3674 15.8866 11.6326 15.8866 11.1509 16.3403C10.2814 17.1591 9.0501 18.5656 9.00149 20H7C4.23858 20 2 17.7614 2 15C2 12.4003 3.98398 10.2641 6.52042 10.0227C6.76233 7.20862 9.12324 5 12 5Z',
  d5: 'M9 20.0873C9 18.6229 10.2638 17.1757 11.1509 16.3403C11.6326 15.8866 12.3674 15.8866 12.8491 16.3403C13.7362 17.1757 15 18.6229 15 20.0873C15 21.5231 13.864 23 12 23C10.136 23 9 21.5231 9 20.0873Z',
  d6: 'M9 19.0873C9 17.6229 10.2638 16.1757 11.1509 15.3403C11.6326 14.8866 12.3674 14.8866 12.8491 15.3403C13.7362 16.1757 15 17.6229 15 19.0873C15 20.5231 13.864 22 12 22C10.136 22 9 20.5231 9 19.0873Z',
  d7: 'M10.7617 15.4193C11.5323 14.6936 12.7177 14.6936 13.4883 15.4193C13.9552 15.859 14.5381 16.4747 15.0089 17.1909C15.4739 17.8983 15.875 18.7721 15.875 19.7123C15.875 21.5197 14.4446 23.375 12.125 23.375C9.80542 23.375 8.375 21.5197 8.375 19.7123C8.375 18.7721 8.77606 17.8983 9.24108 17.1909C9.71191 16.4747 10.2948 15.859 10.7617 15.4193Z',
  d8: 'M6.01793 8.79041C5.99187 8.91018 5.89894 9.00478 5.77975 9.03336C3.2528 9.63925 1.375 11.9125 1.375 14.625C1.375 17.6115 3.65192 20.0663 6.56455 20.348C6.74954 20.3659 6.89624 20.2031 6.8846 20.0177C6.87822 19.9159 6.875 19.814 6.875 19.7123C6.875 18.3561 7.44634 17.1904 7.98767 16.3669C8.54645 15.5169 9.21961 14.8111 9.73329 14.3273C11.0816 13.0576 13.1684 13.0576 14.5167 14.3273C15.0304 14.8111 15.7036 15.5169 16.2623 16.3669C16.8037 17.1904 17.375 18.3561 17.375 19.7123C17.375 19.8354 17.3703 19.9586 17.361 20.0817C17.3492 20.2373 17.4689 20.375 17.625 20.375C20.5245 20.375 22.875 18.0245 22.875 15.125C22.875 12.566 21.0441 10.4346 18.6208 9.96931C18.4776 9.94182 18.3694 9.821 18.3591 9.67555C18.1287 6.43355 15.4256 3.875 12.125 3.875C9.13114 3.875 6.62951 5.97958 6.01793 8.79041Z',
  d9: 'M7.45678 1.36266C7.31176 0.829759 6.76219 0.515319 6.22929 0.660342C5.69638 0.805365 5.38194 1.35493 5.52697 1.88784L5.54068 1.93824C4.65648 2.33226 3.8993 2.91778 3.30852 3.6302L3.08472 3.50267C2.60486 3.22925 1.99421 3.3966 1.72079 3.87646C1.44737 4.35631 1.61472 4.96696 2.09458 5.24038L2.30013 5.35751C1.97547 6.21023 1.84135 7.14114 1.93583 8.08785L1.87015 8.10518C1.33614 8.24606 1.01744 8.79318 1.15833 9.32719C1.29922 9.8612 1.84633 10.1799 2.38034 10.039L2.45888 10.0183C2.57778 10.2779 2.71385 10.5264 2.86534 10.7628C3.31725 10.2648 3.85533 9.84635 4.45606 9.531C4.28246 9.23177 4.14461 8.90572 4.04955 8.55639C3.754 7.47035 3.93212 6.36407 4.46372 5.45517C4.99615 4.54484 5.88318 3.83251 7.00404 3.5368C8.12001 3.24237 9.25021 3.41983 10.1766 3.94291C10.184 3.94724 10.1922 3.9519 10.1996 3.95603C10.2815 4.00296 10.3618 4.0526 10.4403 4.10487C10.9763 3.95523 11.5413 3.87523 12.125 3.87523C12.4436 3.87523 12.7566 3.89907 13.0624 3.94505C13.0248 3.84456 12.9704 3.74843 12.8986 3.66085C12.6335 3.33747 12.3369 3.04372 12.0147 2.78289L12.1291 2.58745C12.4079 2.11074 12.2476 1.49823 11.7708 1.21935C11.2941 0.94048 10.6816 1.10085 10.4028 1.57756L10.2781 1.7906C9.40219 1.46263 8.44507 1.32839 7.47389 1.42553L7.45678 1.36266Z',
  d10: 'M17.9776 11.0001C17.985 11 17.9925 11 18 11C20.4853 11 22.5 13.0147 22.5 15.5C22.5 17.8251 20.7624 19.7631 18.5 20M17.9776 11.0001C17.9924 10.8354 18 10.6686 18 10.5C18 7.46243 15.5376 5 12.5 5C9.62324 5 7.26233 7.20862 7.02042 10.0227M17.9776 11.0001C17.8753 12.1345 17.4286 13.1696 16.7428 14M7.02042 10.0227C4.48398 10.2641 2.5 12.4003 2.5 15C2.5 17.419 4.21776 19.512 6.5 19.9753M7.02042 10.0227C7.17826 10.0077 7.33823 10 7.5 10C8.62582 10 9.66474 10.3721 10.5005 11',
  d11: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d12: 'M12.5 16C12.5 16 10 17.5 10 19.5034C10 20.7342 10.9467 22 12.5 22C14.0533 22 15 20.7342 15 19.5034C15 17.5 12.5 16 12.5 16Z',
  d13: 'M5.70538 2.85111C5.07484 2.98056 4.48827 3.23001 3.96989 3.57449L3.20433 2.8032L1.78485 4.21212L2.55911 4.99218C2.21331 5.51742 1.96355 6.11191 1.83467 6.75H0.75V8.75H1.83468C2.05366 9.83422 2.62153 10.7919 3.41473 11.4973L4.74374 10.0027C4.1249 9.45242 3.73513 8.64859 3.73513 7.75C3.73513 6.0861 5.07198 4.75 6.70538 4.75C7.61697 4.75 8.4337 5.16374 8.98114 5.822L10.5189 4.54315C9.81277 3.69414 8.82841 3.0823 7.70538 2.85134V1.75H5.70538V2.85111Z',
  d14: 'M12.498 14.625C12.5758 14.6761 13.2035 15.0661 13.3323 15.1606C13.5885 15.3485 13.9322 15.6233 14.2786 15.9699C14.945 16.6368 15.748 17.6963 15.748 19.0031C15.748 20.5848 14.5261 22.2497 12.498 22.2497C10.47 22.2497 9.24805 20.5848 9.24805 19.0031C9.24805 17.6963 10.0511 16.6368 10.7175 15.9699C11.0639 15.6233 11.4076 15.3485 11.6638 15.1606C11.7926 15.0661 12.4202 14.6761 12.498 14.625Z',
  d15: 'M6.353 9.11356C3.72664 9.64545 1.75 11.966 1.75 14.749C1.75 17.9247 4.32436 20.499 7.5 20.499H7.99851C7.83474 20.0097 7.75 19.5017 7.75 19.0031C7.75 17.0859 8.90967 15.659 9.65846 14.9097C10.0727 14.4952 10.4787 14.1711 10.7785 13.9512L12.5 12.8301C12.5 12.8301 14.1481 13.8973 14.2215 13.9512C14.5213 14.1711 14.9273 14.4952 15.3415 14.9097C16.0903 15.659 17.25 17.0859 17.25 19.0031C17.25 19.5017 17.1653 20.0097 17.0015 20.499H18C20.8995 20.499 23.25 18.1485 23.25 15.249C23.25 12.6031 21.2927 10.4144 18.7469 10.0518C18.6428 6.69126 15.8858 3.99902 12.5 3.99902C9.43585 3.99902 6.88731 6.20359 6.353 9.11356Z',
} as const;

export const IconSunCloudBigRain02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-stroke-rounded IconSunCloudBigRain02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-duotone-rounded IconSunCloudBigRain02DuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-twotone-rounded IconSunCloudBigRain02TwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-solid-rounded IconSunCloudBigRain02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSunCloudBigRain02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-bulk-rounded IconSunCloudBigRain02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudBigRain02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-stroke-sharp IconSunCloudBigRain02StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-02-solid-sharp IconSunCloudBigRain02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudBigRain02: TheIconSelfPack = {
  name: 'SunCloudBigRain02',
  StrokeRounded: IconSunCloudBigRain02StrokeRounded,
  DuotoneRounded: IconSunCloudBigRain02DuotoneRounded,
  TwotoneRounded: IconSunCloudBigRain02TwotoneRounded,
  SolidRounded: IconSunCloudBigRain02SolidRounded,
  BulkRounded: IconSunCloudBigRain02BulkRounded,
  StrokeSharp: IconSunCloudBigRain02StrokeSharp,
  SolidSharp: IconSunCloudBigRain02SolidSharp,
};