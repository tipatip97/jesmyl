import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.0784 15L7.30434 17.6838C7.06684 18.0431 6.94808 18.2227 7.02165 18.3614C7.09522 18.5 7.30931 18.5 7.73747 18.5H9.26253C9.69069 18.5 9.90478 18.5 9.97835 18.6386C10.0519 18.7773 9.93316 18.9569 9.69566 19.3162L7.9216 22',
  d2: 'M16 20L15 22',
  d3: 'M13 20L12 22',
  d4: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d5: 'M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 17.2532 20.7478 18.8925 19 19.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.4433 2.78555 17.8716 4 18.7687M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007',
  d6: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d7: 'M6.22929 1.16034C6.76219 1.01532 7.31176 1.32976 7.45678 1.86266L7.47389 1.92553C8.44507 1.82839 9.40219 1.96263 10.2781 2.2906L10.4028 2.07756C10.6816 1.60085 11.2941 1.44048 11.7708 1.71935C12.2476 1.99823 12.4079 2.61074 12.1291 3.08745L12.0147 3.28289C12.3369 3.54372 12.6335 3.83747 12.8986 4.16085C13.2487 4.58794 13.1864 5.21803 12.7593 5.56818C12.3322 5.91834 11.7021 5.85596 11.3519 5.42887C11.0298 5.03591 10.6379 4.70712 10.1996 4.45603C10.1922 4.4519 10.1847 4.44768 10.1773 4.44335C10.1771 4.4432 10.1768 4.44305 10.1766 4.44291C9.25021 3.91983 8.12001 3.74237 7.00404 4.0368C5.88318 4.33251 4.99615 5.04484 4.46372 5.95517C3.93212 6.86407 3.754 7.97035 4.04955 9.05639C4.19767 9.60068 4.44963 10.0884 4.77892 10.5063C5.12075 10.9401 5.0462 11.5689 4.61241 11.9107C4.17862 12.2525 3.54986 12.178 3.20803 11.7442C2.91419 11.3713 2.6616 10.9609 2.45888 10.5183L2.38034 10.539C1.84633 10.6799 1.29922 10.3612 1.15833 9.82719C1.01744 9.29318 1.33614 8.74606 1.87015 8.60518L1.93583 8.58785C1.84135 7.64114 1.97547 6.71023 2.30013 5.85751L2.09458 5.74038C1.61472 5.46696 1.44737 4.85631 1.72079 4.37646C1.99421 3.8966 2.60486 3.72925 3.08472 4.00267L3.30852 4.1302C3.8993 3.41778 4.65648 2.83226 5.54068 2.43824L5.52697 2.38784C5.38194 1.85493 5.69638 1.30537 6.22929 1.16034Z',
  d8: 'M9.75542 14.0409C10.2161 14.3454 10.3427 14.9658 10.0382 15.4266L8.75014 17.3751L9.42826 17.3751C9.60405 17.3749 9.83382 17.3747 10.0264 17.4034C10.2373 17.4348 10.7218 17.5447 10.9873 18.045C11.251 18.542 11.0743 19.0029 10.9849 19.1939C10.9023 19.3701 10.7755 19.5616 10.6776 19.7093L8.88139 22.4266C8.57684 22.8873 7.95646 23.0139 7.49574 22.7093C7.03501 22.4048 6.90841 21.7844 7.21296 21.3237L8.50102 19.3751L7.82289 19.3751C7.64711 19.3753 7.41734 19.3756 7.22471 19.3468C7.01382 19.3154 6.52941 19.2056 6.2639 18.7052C6.00017 18.2082 6.17687 17.7473 6.26631 17.5563C6.34881 17.3802 6.47568 17.1887 6.57354 17.0409L8.36977 14.3237C8.67432 13.8629 9.2947 13.7363 9.75542 14.0409Z',
  d9: 'M13.5728 18.9807C14.0668 19.2277 14.267 19.8283 14.02 20.3223L13.02 22.3223C12.773 22.8163 12.1723 23.0165 11.6784 22.7695C11.1844 22.5225 10.9842 21.9219 11.2312 21.4279L12.2312 19.4279C12.4781 18.9339 13.0788 18.7337 13.5728 18.9807Z',
  d10: 'M16.5728 18.9807C17.0668 19.2277 17.267 19.8283 17.02 20.3223L16.02 22.3223C15.773 22.8163 15.1723 23.0165 14.6784 22.7695C14.1844 22.5225 13.9842 21.9219 14.2312 21.4279L15.2312 19.4279C15.4781 18.9339 16.0788 18.7337 16.5728 18.9807Z',
  d11: 'M5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 17.3725 2.6645 19.3189 4.54403 20.2646C5.15223 20.5706 5.45634 20.7236 5.50744 20.6723C5.55855 20.621 5.3894 20.2885 5.05111 19.6234C5.01448 19.5514 4.97752 19.4794 4.93978 19.4083C4.3326 18.2641 4.76519 17.2267 4.90876 16.9201C5.03788 16.6444 5.30261 16.2446 5.30959 16.234L7.11933 13.4964C7.88071 12.3446 9.43165 12.0281 10.5835 12.7895C11.7353 13.5509 12.0518 15.1018 11.2904 16.2536C11.284 16.2632 11.2871 16.2761 11.2971 16.2819C11.6597 16.4921 12.0372 16.8219 12.3131 17.3418C12.3567 17.4239 12.4515 17.4661 12.5419 17.4443C13.0948 17.311 13.6959 17.3647 14.2445 17.639C14.4517 17.7425 14.5552 17.7943 14.626 17.7944C14.6968 17.7944 14.8005 17.7426 15.008 17.639C15.6875 17.2997 16.5128 17.2731 17.2445 17.639C18.088 18.0607 18.5889 18.895 18.6249 19.7751C18.6469 20.3124 18.6579 20.5811 18.7856 20.6657C18.9132 20.7504 19.0982 20.6811 19.468 20.5424C21.4584 19.7961 22.875 17.876 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419Z',
  d12: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71385 11.0264 2.86534 11.2628C3.31725 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d13: 'M9.57875 15L7.5 18.5001L10.5003 18.5L8.42195 22',
  d14: 'M16.5 20L15.5 22',
  d15: 'M13.5 20L12.5 22',
  d16: 'M17.9776 10.9008C17.985 10.9007 17.9925 10.9007 18 10.9007C20.4853 10.9007 22.5 12.8821 22.5 15.3263C22.5 17.2532 21.2478 18.8925 19.5 19.5M17.9776 10.9008C17.9924 10.7388 18 10.5748 18 10.409C18 7.42169 15.5376 5 12.5 5C9.62324 5 7.26233 7.17208 7.02042 9.9396M17.9776 10.9008C17.8753 12.0165 17.4286 13.0344 16.7428 13.8511M7.02042 9.9396C4.48398 10.177 2.5 12.2779 2.5 14.8345C2.5 16.4433 3.28555 17.8716 4.5 18.7687M7.02042 9.9396C7.17826 9.92483 7.33823 9.91727 7.5 9.91727C8.62582 9.91727 9.66474 10.2832 10.5005 10.9007',
  d17: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d18: 'M8.71815 14.7285L10.4377 15.7498L9.2562 17.7392H12.2559L9.281 22.7497L7.56128 21.7286L8.74249 19.7392H5.74219L8.71815 14.7285Z',
  d19: 'M14.6055 21.792L16.1055 18.792L17.8943 19.6864L16.3943 22.6864L14.6055 21.792Z',
  d20: 'M13.1055 18.792L11.6055 21.792L13.3943 22.6864L14.8943 19.6864L13.1055 18.792Z',
  d21: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 16.0735 2.84756 17.8907 4.49341 18.9023L8.19324 12.6729L12.4922 15.2261L11.8905 16.2392H14.8898L14.0801 17.6029L14.8334 17.9795L15.4334 16.7795L19.9056 19.0156L19.6748 19.4772C21.7531 18.7782 23.25 16.8139 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
  d22: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
} as const;

export const IconSunCloudAngledRainZap02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-stroke-rounded IconSunCloudAngledRainZap02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-duotone-rounded IconSunCloudAngledRainZap02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-twotone-rounded IconSunCloudAngledRainZap02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-solid-rounded IconSunCloudAngledRainZap02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-bulk-rounded IconSunCloudAngledRainZap02BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudAngledRainZap02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-stroke-sharp IconSunCloudAngledRainZap02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-02-solid-sharp IconSunCloudAngledRainZap02SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudAngledRainZap02: TheIconSelfPack = {
  name: 'SunCloudAngledRainZap02',
  StrokeRounded: IconSunCloudAngledRainZap02StrokeRounded,
  DuotoneRounded: IconSunCloudAngledRainZap02DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledRainZap02TwotoneRounded,
  SolidRounded: IconSunCloudAngledRainZap02SolidRounded,
  BulkRounded: IconSunCloudAngledRainZap02BulkRounded,
  StrokeSharp: IconSunCloudAngledRainZap02StrokeSharp,
  SolidSharp: IconSunCloudAngledRainZap02SolidSharp,
};