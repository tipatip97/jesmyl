import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.4782 20.7478 18.8813 19 19.5M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3753 12.1453 16.9286 13.182 16.2428 14.0136M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 17.0686 3.2341 18.7103 5 19.5M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C8.12582 10.0076 9.16474 10.3802 10.0005 11.0091',
  d2: 'M12 16V22M14.5 17.5L9.50013 20.5M9.5 17.5L14.4999 20.5',
  d3: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M12.1252 14.875C12.6774 14.875 13.1252 15.3227 13.1252 15.875V17.1088L14.1106 16.5175C14.5842 16.2334 15.1985 16.3869 15.4826 16.8605C15.7668 17.3341 15.6132 17.9483 15.1397 18.2325L14.0688 18.875L15.1395 19.5175C15.6131 19.8017 15.7667 20.4159 15.4825 20.8895C15.1984 21.3631 14.5841 21.5166 14.1105 21.2325L13.1252 20.6413V21.875C13.1252 22.4273 12.6774 22.875 12.1252 22.875C11.5729 22.875 11.1252 22.4273 11.1252 21.875V20.6413L10.1398 21.2325C9.66621 21.5166 9.05195 21.3631 8.7678 20.8895C8.48364 20.4159 8.6372 19.8017 9.11078 19.5175L10.1815 18.875L9.11065 18.2325C8.63707 17.9483 8.48351 17.3341 8.76766 16.8605C9.05182 16.3869 9.66608 16.2334 10.1397 16.5175L11.1252 17.1088V15.875C11.1252 15.3227 11.5729 14.875 12.1252 14.875Z',
  d6: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 18.0525 3.60559 20.4691 6.44209 20.8288C6.73611 20.8661 6.88312 20.8847 6.98234 20.8052C7.08156 20.7257 7.09972 20.5318 7.13605 20.1439C7.1649 19.8358 7.25059 19.5347 7.38899 19.2572C7.49251 19.0496 7.54427 18.9457 7.54427 18.8751C7.54427 18.8044 7.4925 18.7006 7.38895 18.493C7.02055 17.7543 7.02548 16.849 7.48166 16.0887C7.90848 15.3774 8.63322 14.9549 9.40059 14.885C9.6222 14.8648 9.73301 14.8547 9.79182 14.8194C9.85064 14.7841 9.91173 14.691 10.0339 14.5049C10.4806 13.8244 11.2505 13.375 12.1254 13.375C13.0002 13.375 13.7701 13.8244 14.2169 14.5049C14.339 14.691 14.4001 14.7841 14.4589 14.8194C14.5178 14.8547 14.6286 14.8648 14.8502 14.885C15.6175 14.9549 16.3423 15.3774 16.7691 16.0887C17.2253 16.849 17.2302 17.7543 16.8618 18.493C16.7583 18.7006 16.7065 18.8044 16.7065 18.8751C16.7065 18.9457 16.7582 19.0496 16.8618 19.2572C17.0277 19.59 17.1179 19.9568 17.1252 20.3288C17.1292 20.5357 17.1312 20.6392 17.1542 20.6929C17.1899 20.7765 17.2332 20.819 17.3174 20.8531C17.3716 20.875 17.4561 20.875 17.625 20.875C20.5245 20.875 22.875 18.5245 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d7: 'M6.22929 1.16034C6.76219 1.01532 7.31176 1.32976 7.45678 1.86266L7.47389 1.92553C8.44507 1.82839 9.40219 1.96263 10.2781 2.2906L10.4028 2.07756C10.6816 1.60085 11.2941 1.44048 11.7708 1.71935C12.2476 1.99823 12.4079 2.61074 12.1291 3.08745L12.0147 3.28289C12.3369 3.54372 12.6335 3.83747 12.8986 4.16085C13.2487 4.58794 13.1864 5.21803 12.7593 5.56818C12.3322 5.91834 11.7021 5.85596 11.3519 5.42887C11.0298 5.03591 10.6379 4.70712 10.1996 4.45603C10.1922 4.4519 10.1847 4.44768 10.1773 4.44335C10.1771 4.4432 10.1768 4.44305 10.1766 4.44291C9.25021 3.91983 8.12001 3.74237 7.00404 4.0368C5.88318 4.33251 4.99615 5.04484 4.46372 5.95517C3.93212 6.86407 3.754 7.97035 4.04955 9.05639C4.19767 9.60068 4.44963 10.0884 4.77892 10.5063C5.12075 10.9401 5.0462 11.5689 4.61241 11.9107C4.17862 12.2525 3.54986 12.178 3.20803 11.7442C2.91419 11.3713 2.6616 10.9609 2.45888 10.5183L2.38034 10.539C1.84633 10.6799 1.29922 10.3612 1.15833 9.82719C1.01744 9.29318 1.33614 8.74606 1.87015 8.60518L1.93583 8.58785C1.84135 7.64114 1.97547 6.71023 2.30013 5.85751L2.09458 5.74038C1.61472 5.46696 1.44737 4.85631 1.72079 4.37646C1.99421 3.8966 2.60486 3.72925 3.08472 4.00267L3.30852 4.1302C3.8993 3.41778 4.65648 2.83226 5.54068 2.43824L5.52697 2.38784C5.38194 1.85493 5.69638 1.30537 6.22929 1.16034Z',
  d8: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71385 11.0264 2.86534 11.2628C3.31725 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d9: 'M17.9795 11.0091C17.987 11.0091 17.9945 11.0091 18.002 11.0091C20.4872 11.0091 22.502 13.0269 22.502 15.5159C22.502 17.4782 21.2497 18.8813 19.502 19.5M17.9795 11.0091C17.9944 10.8442 18.002 10.6772 18.002 10.5083C18.002 7.46617 15.5395 5 12.502 5C9.62519 5 7.26428 7.21197 7.02238 10.0303M17.9795 11.0091C17.8773 12.1453 17.4306 13.182 16.7448 14.0136M7.02238 10.0303C4.48593 10.2721 2.50195 12.4116 2.50195 15.0152C2.50195 17.0686 3.73605 18.7103 5.50195 19.5M7.02238 10.0303C7.18021 10.0153 7.34018 10.0076 7.50195 10.0076C8.62778 10.0076 9.6667 10.3802 10.5024 11.0091',
  d10: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d11: 'M12.502 16V22M15.002 17.5L10.0021 20.5M10.002 17.5L15.0018 20.5',
  d12: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
  d13: 'M11.5 17.509V15.75H13.5V17.509L14.9961 16.6362L16.0039 18.3638L14.4846 19.25L16.0037 20.1362L14.9959 21.8638L13.5 20.9911V22.75H11.5V20.9911L10.004 21.8638L8.99625 20.1362L10.5154 19.25L8.99609 18.3638L10.0039 16.6362L11.5 17.509Z',
  d14: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 17.0789 4.16989 19.5926 7.21148 19.7429L6.94531 19.25L10.0007 14.25H15.0007L18.056 19.25L17.786 19.75H18C20.8995 19.75 23.25 17.3995 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
} as const;

export const IconSunCloudMidSnow02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-stroke-rounded IconSunCloudMidSnow02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-duotone-rounded IconSunCloudMidSnow02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-twotone-rounded IconSunCloudMidSnow02TwotoneRounded"
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

export const IconSunCloudMidSnow02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-solid-rounded IconSunCloudMidSnow02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-bulk-rounded IconSunCloudMidSnow02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidSnow02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-stroke-sharp IconSunCloudMidSnow02StrokeSharp"
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

export const IconSunCloudMidSnow02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-snow-02-solid-sharp IconSunCloudMidSnow02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudMidSnow02: TheIconSelfPack = {
  name: 'SunCloudMidSnow02',
  StrokeRounded: IconSunCloudMidSnow02StrokeRounded,
  DuotoneRounded: IconSunCloudMidSnow02DuotoneRounded,
  TwotoneRounded: IconSunCloudMidSnow02TwotoneRounded,
  SolidRounded: IconSunCloudMidSnow02SolidRounded,
  BulkRounded: IconSunCloudMidSnow02BulkRounded,
  StrokeSharp: IconSunCloudMidSnow02StrokeSharp,
  SolidSharp: IconSunCloudMidSnow02SolidSharp,
};