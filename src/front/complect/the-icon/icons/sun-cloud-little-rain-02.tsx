import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9972 14.5V16M8.99609 17.5V19M14.9961 17.5V19M6.49609 20.5V22M17.4961 20.5V22M11.9961 20.5V22',
  d2: 'M17.4776 11.045C17.485 11.045 17.4925 11.0449 17.5 11.0449C19.9853 11.0449 22 13.0747 22 15.5786C22 17.1505 21 18.5 20 19M17.4776 11.045C17.4924 10.8791 17.5 10.711 17.5 10.5412C17.5 7.48088 15.0376 5 12 5C9.12324 5 6.76233 7.22516 6.52042 10.0603M17.4776 11.045C17.3753 12.1879 16.9286 13.2308 16.2428 14.0674M6.52042 10.0603C3.98398 10.3035 2 12.4558 2 15.0749C2 16.723 2.78555 18.081 4 19M6.52042 10.0603C6.67826 10.0452 6.83823 10.0374 7 10.0374C8.12582 10.0374 9.16474 10.4123 10.0005 11.0449',
  d3: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M6.22929 1.16034C6.76219 1.01532 7.31176 1.32976 7.45678 1.86266L7.47389 1.92553C8.44507 1.82839 9.40219 1.96263 10.2781 2.2906L10.4028 2.07756C10.6816 1.60085 11.2941 1.44048 11.7708 1.71935C12.2476 1.99823 12.4079 2.61074 12.1291 3.08745L12.0147 3.28289C12.3369 3.54372 12.6335 3.83747 12.8986 4.16085C13.2487 4.58794 13.1864 5.21803 12.7593 5.56818C12.3322 5.91834 11.7021 5.85596 11.3519 5.42887C11.0298 5.03591 10.6379 4.70712 10.1996 4.45603C10.1922 4.4519 10.1847 4.44768 10.1773 4.44335C10.1771 4.4432 10.1768 4.44305 10.1766 4.44291C9.25021 3.91983 8.12001 3.74237 7.00404 4.0368C5.88318 4.33251 4.99615 5.04484 4.46372 5.95517C3.93212 6.86407 3.754 7.97035 4.04955 9.05639C4.19767 9.60068 4.44963 10.0884 4.77892 10.5063C5.12075 10.9401 5.0462 11.5689 4.61241 11.9107C4.17862 12.2525 3.54986 12.178 3.20803 11.7442C2.91419 11.3713 2.6616 10.9609 2.45888 10.5183L2.38034 10.539C1.84633 10.6799 1.29922 10.3612 1.15833 9.82719C1.01744 9.29318 1.33614 8.74606 1.87015 8.60518L1.93583 8.58785C1.84135 7.64114 1.97547 6.71023 2.30013 5.85751L2.09458 5.74038C1.61472 5.46696 1.44737 4.85631 1.72079 4.37646C1.99421 3.8966 2.60486 3.72925 3.08472 4.00267L3.30852 4.1302C3.8993 3.41778 4.65648 2.83226 5.54068 2.43824L5.52697 2.38784C5.38194 1.85493 5.69638 1.30537 6.22929 1.16034Z',
  d6: 'M12.1222 13.375C12.6745 13.375 13.1222 13.8227 13.1222 14.375V15.875C13.1222 16.4273 12.6745 16.875 12.1222 16.875C11.5699 16.875 11.1222 16.4273 11.1222 15.875V14.375C11.1222 13.8227 11.5699 13.375 12.1222 13.375ZM9.12109 16.375C9.67338 16.375 10.1211 16.8227 10.1211 17.375V18.875C10.1211 19.4273 9.67338 19.875 9.12109 19.875C8.56881 19.875 8.12109 19.4273 8.12109 18.875V17.375C8.12109 16.8227 8.56881 16.375 9.12109 16.375ZM15.1211 16.375C15.6734 16.375 16.1211 16.8227 16.1211 17.375V18.875C16.1211 19.4273 15.6734 19.875 15.1211 19.875C14.5688 19.875 14.1211 19.4273 14.1211 18.875V17.375C14.1211 16.8227 14.5688 16.375 15.1211 16.375ZM6.62109 19.375C7.17338 19.375 7.62109 19.8227 7.62109 20.375V21.875C7.62109 22.4273 7.17338 22.875 6.62109 22.875C6.06881 22.875 5.62109 22.4273 5.62109 21.875V20.375C5.62109 19.8227 6.06881 19.375 6.62109 19.375ZM12.1211 19.375C12.6734 19.375 13.1211 19.8227 13.1211 20.375V21.875C13.1211 22.4273 12.6734 22.875 12.1211 22.875C11.5688 22.875 11.1211 22.4273 11.1211 21.875V20.375C11.1211 19.8227 11.5688 19.375 12.1211 19.375ZM17.6211 19.375C18.1734 19.375 18.6211 19.8227 18.6211 20.375V21.875C18.6211 22.4273 18.1734 22.875 17.6211 22.875C17.0688 22.875 16.6211 22.4273 16.6211 21.875V20.375C16.6211 19.8227 17.0688 19.375 17.6211 19.375Z',
  d7: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 16.8792 2.16055 18.45 3.39906 19.5046C3.66956 19.735 3.80481 19.8502 3.94501 19.8244C4.08521 19.7986 4.19944 19.5905 4.42789 19.1741C4.77629 18.5392 5.39238 18.072 6.12424 17.9244C6.34063 17.8808 6.44883 17.8589 6.50414 17.8164C6.54586 17.7842 6.56702 17.7584 6.59027 17.7111C6.62109 17.6485 6.62109 17.5573 6.62109 17.375C6.62109 15.9943 7.74038 14.875 9.12109 14.875C9.28471 14.875 9.36652 14.875 9.40898 14.8622C9.51798 14.8292 9.57638 14.7708 9.60933 14.6618C9.62217 14.6194 9.62217 14.5532 9.62217 14.4208V14.375C9.62217 12.9943 10.7415 11.875 12.1222 11.875C13.5029 11.875 14.6222 12.9943 14.6222 14.375V14.4226C14.6222 14.5534 14.6222 14.6188 14.6347 14.6608C14.6675 14.7707 14.7265 14.8297 14.8364 14.8625C14.8784 14.875 14.9593 14.875 15.1211 14.875C16.5018 14.875 17.6211 15.9943 17.6211 17.375C17.6211 17.5573 17.6211 17.6485 17.6519 17.7111C17.6752 17.7584 17.6963 17.7842 17.7381 17.8164C17.7934 17.859 17.9015 17.8808 18.1179 17.9244C18.908 18.0837 19.5631 18.6155 19.8923 19.3287C20.0973 19.7729 20.1998 19.995 20.3422 20.0285C20.4846 20.062 20.626 19.9485 20.909 19.7213C22.1076 18.7591 22.875 17.2817 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d8: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71385 11.0264 2.86534 11.2628C3.31725 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d9: 'M12.4972 14.5V16M9.49609 17.5V19M15.4961 17.5V19M6.99609 20.5V22M17.9961 20.5V22M12.4961 20.5V22',
  d10: 'M17.9776 11.045C17.985 11.045 17.9925 11.0449 18 11.0449C20.4853 11.0449 22.5 13.0747 22.5 15.5786C22.5 17.1505 21.5 18.5 20.5 19M17.9776 11.045C17.9924 10.8791 18 10.711 18 10.5412C18 7.48088 15.5376 5 12.5 5C9.62324 5 7.26233 7.22516 7.02042 10.0603M17.9776 11.045C17.8753 12.1879 17.4286 13.2308 16.7428 14.0674M7.02042 10.0603C4.48398 10.3035 2.5 12.4558 2.5 15.0749C2.5 16.723 3.28555 18.081 4.5 19M7.02042 10.0603C7.17826 10.0452 7.33823 10.0374 7.5 10.0374C8.62582 10.0374 9.66474 10.4123 10.5005 11.0449',
  d11: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d12: 'M11.5011 16.75V14.25H13.5011V16.75H11.5011ZM8.5 19.75V17.25H10.5V19.75H8.5ZM14.5 19.75V17.25H16.5V19.75H14.5ZM6 22.75V20.25H8V22.75H6ZM11.5 22.75V20.25H13.5V22.75H11.5ZM17 22.75V20.25H19V22.75H17Z',
  d13: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 15.9733 2.74404 17.7145 4.25869 18.75H7V15.75H10.0011V12.75H15.0011V15.75H18V18.75H21.0828C22.3961 17.7958 23.25 16.2476 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
  d14: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
} as const;

export const IconSunCloudLittleRain02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-stroke-rounded IconSunCloudLittleRain02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-duotone-rounded IconSunCloudLittleRain02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-twotone-rounded IconSunCloudLittleRain02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-solid-rounded IconSunCloudLittleRain02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSunCloudLittleRain02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-bulk-rounded IconSunCloudLittleRain02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSunCloudLittleRain02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-stroke-sharp IconSunCloudLittleRain02StrokeSharp"
    >
      <path 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-02-solid-sharp IconSunCloudLittleRain02SolidSharp"
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

export const iconPackOfSunCloudLittleRain02: TheIconSelfPack = {
  name: 'SunCloudLittleRain02',
  StrokeRounded: IconSunCloudLittleRain02StrokeRounded,
  DuotoneRounded: IconSunCloudLittleRain02DuotoneRounded,
  TwotoneRounded: IconSunCloudLittleRain02TwotoneRounded,
  SolidRounded: IconSunCloudLittleRain02SolidRounded,
  BulkRounded: IconSunCloudLittleRain02BulkRounded,
  StrokeSharp: IconSunCloudLittleRain02StrokeSharp,
  SolidSharp: IconSunCloudLittleRain02SolidSharp,
};