import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5039 16L11.5039 18M17.0039 16L16.0039 18M13.5039 20L12.5039 22M8.00391 16L7.00391 18M9.00391 20L8.00391 22',
  d2: 'M17.4776 10.9757C17.485 10.9756 17.4925 10.9756 17.5 10.9756C19.9853 10.9756 22 12.9821 22 15.4573C22 17.0195 21.2092 18.1905 20 19M17.4776 10.9757C17.4924 10.8116 17.5 10.6455 17.5 10.4777C17.5 7.45243 15.0376 5 12 5C9.12324 5 6.76233 7.19964 6.52042 10.0023M17.4776 10.9757C17.4131 11.6877 17.2119 12.3603 16.9003 12.9675M6.52042 10.0023C3.98398 10.2427 2 12.3703 2 14.9594C2 16.5885 2.78555 18.0693 4 19M6.52042 10.0023C6.67826 9.98733 6.83823 9.97968 7 9.97968C8.12582 9.97968 9.16474 10.3503 10.0005 10.9756',
  d3: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M8.57634 14.9808C9.07032 15.2278 9.27054 15.8285 9.02355 16.3224L8.02355 18.3224C7.77656 18.8164 7.17589 19.0166 6.68191 18.7696C6.18793 18.5227 5.98771 17.922 6.2347 17.428L7.2347 15.428C7.48169 14.934 8.08236 14.7338 8.57634 14.9808ZM13.0763 14.9808C13.5703 15.2278 13.7705 15.8285 13.5236 16.3224L12.5236 18.3224C12.2766 18.8164 11.6759 19.0166 11.1819 18.7696C10.6879 18.5227 10.4877 17.922 10.7347 17.428L11.7347 15.428C11.9817 14.934 12.5824 14.7338 13.0763 14.9808ZM17.5763 14.9808C18.0703 15.2278 18.2705 15.8285 18.0236 16.3224L17.0236 18.3224C16.7766 18.8164 16.1759 19.0166 15.6819 18.7696C15.1879 18.5227 14.9877 17.922 15.2347 17.428L16.2347 15.428C16.4817 14.934 17.0824 14.7338 17.5763 14.9808ZM9.57634 18.9808C10.0703 19.2278 10.2705 19.8285 10.0236 20.3224L9.02355 22.3224C8.77656 22.8164 8.17589 23.0166 7.68191 22.7696C7.18793 22.5227 6.98771 21.922 7.2347 21.428L8.2347 19.428C8.48169 18.934 9.08236 18.7338 9.57634 18.9808ZM14.0763 18.9808C14.5703 19.2278 14.7705 19.8285 14.5236 20.3224L13.5236 22.3224C13.2766 22.8164 12.6759 23.0166 12.1819 22.7696C11.6879 22.5227 11.4877 21.922 11.7347 21.428L12.7347 19.428C12.9817 18.934 13.5824 18.7338 14.0763 18.9808Z',
  d6: 'M5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 17.5019 2.81726 19.542 4.87439 20.4179C5.25479 20.5798 5.44498 20.6608 5.58841 20.5097C5.73183 20.3586 5.63578 20.1621 5.44366 19.7691C4.99018 18.8414 4.45978 17.624 4.89339 16.7568L5.89339 14.7568C6.51086 13.5218 8.01254 13.0213 9.24749 13.6387C9.7509 13.8905 10.1323 14.2891 10.3656 14.7567C10.3713 14.7681 10.3877 14.7682 10.3934 14.7568C11.0109 13.5218 12.5125 13.0213 13.7475 13.6387C14.2509 13.8905 14.6323 14.2891 14.8656 14.7567C14.8713 14.7681 14.8877 14.7682 14.8934 14.7568C15.5109 13.5218 17.0125 13.0213 18.2475 13.6387C19.4824 14.2562 19.983 15.7579 19.3655 16.9928L18.3655 18.9928C18.1959 19.3321 17.8013 19.6857 17.3775 19.9936C17.0327 20.2442 16.8603 20.3695 16.8285 20.4241C16.7316 20.5906 16.7905 20.7717 16.9667 20.8495C17.0245 20.875 17.2247 20.875 17.625 20.875C20.5245 20.875 22.875 18.5245 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419Z',
  d7: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71385 11.0264 2.86534 11.2628C3.31725 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d8: 'M13.0039 16L12.0039 18M17.5039 16L16.5039 18M14.0039 20L13.0039 22M8.50391 16L7.50391 18M9.50391 20L8.50391 22',
  d9: 'M17.9776 10.9757C17.985 10.9756 17.9925 10.9756 18 10.9756C20.4853 10.9756 22.5 12.9821 22.5 15.4573C22.5 17.0195 21.7092 18.1905 20.5 19M17.9776 10.9757C17.9924 10.8116 18 10.6455 18 10.4777C18 7.45243 15.5376 5 12.5 5C9.62324 5 7.26233 7.19964 7.02042 10.0023M17.9776 10.9757C17.9131 11.6877 17.7119 12.3603 17.4003 12.9675M7.02042 10.0023C4.48398 10.2427 2.5 12.3703 2.5 14.9594C2.5 16.5885 3.28555 18.0693 4.5 19M7.02042 10.0023C7.17826 9.98733 7.33823 9.97968 7.5 9.97968C8.62582 9.97968 9.66474 10.3503 10.5005 10.9756',
  d10: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d11: 'M6.60547 17.8555L7.60547 15.8555L9.39432 16.7499L8.39432 18.7499L6.60547 17.8555ZM11.1055 17.8555L12.1055 15.8555L13.8943 16.7499L12.8943 18.7499L11.1055 17.8555ZM15.6055 17.8555L16.6055 15.8555L18.3943 16.7499L17.3943 18.7499L15.6055 17.8555ZM7.60547 21.8555L8.60547 19.8555L10.3943 20.7499L9.39432 22.7499L7.60547 21.8555ZM12.1055 21.8555L13.1055 19.8555L14.8943 20.7499L13.8943 22.7499L12.1055 21.8555Z',
  d12: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 15.9175 2.68856 17.6157 4.13134 18.6604L6.93491 13.8428L10.5349 15.6428L11.4349 13.8428L15.0349 15.6428L15.9349 13.8428L20.407 16.0788L18.5877 19.7175C21.2106 19.4253 23.25 17.2008 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
  d13: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
} as const;

export const IconSunCloudAngledRain02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-stroke-rounded IconSunCloudAngledRain02StrokeRounded"
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

export const IconSunCloudAngledRain02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-duotone-rounded IconSunCloudAngledRain02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-twotone-rounded IconSunCloudAngledRain02TwotoneRounded"
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

export const IconSunCloudAngledRain02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-solid-rounded IconSunCloudAngledRain02SolidRounded"
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

export const IconSunCloudAngledRain02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-bulk-rounded IconSunCloudAngledRain02BulkRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-stroke-sharp IconSunCloudAngledRain02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRain02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-02-solid-sharp IconSunCloudAngledRain02SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudAngledRain02: TheIconSelfPack = {
  name: 'SunCloudAngledRain02',
  StrokeRounded: IconSunCloudAngledRain02StrokeRounded,
  DuotoneRounded: IconSunCloudAngledRain02DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledRain02TwotoneRounded,
  SolidRounded: IconSunCloudAngledRain02SolidRounded,
  BulkRounded: IconSunCloudAngledRain02BulkRounded,
  StrokeSharp: IconSunCloudAngledRain02StrokeSharp,
  SolidSharp: IconSunCloudAngledRain02SolidSharp,
};