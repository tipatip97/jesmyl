import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5005 1.99805V7.99805M18.5005 1.99805C17.8003 1.99805 16.492 3.99235 16.0005 4.49805M18.5005 1.99805C19.2007 1.99805 20.509 3.99235 21.0005 4.49805',
  d2: 'M6.51233 13.5147V3.48575C6.51233 2.66411 7.17917 1.99805 8.00176 1.99805C8.82435 1.99805 9.49119 2.66411 9.49119 3.48575V8.68783M9.49119 8.68783V11.0115M9.49119 8.68783C10.2961 7.56941 12.0987 7.94193 12.4824 9.68079C12.4887 9.70965 12.4939 9.73874 12.4981 9.76798M12.5132 11.0075V10.0046C12.5132 9.9255 12.5093 9.84619 12.4981 9.76798M12.4981 9.76798C12.9913 8.41762 15.2558 8.93261 15.5024 10.8609M15.5024 10.8609V12.0069M15.5024 10.8609C15.9063 9.37034 18.5581 10.4121 18.5007 12.1544V15.3329C18.4977 17.059 18.2096 18.3105 17.1835 19.34C16.2355 20.4718 16.4585 21.1053 16.4349 22.0017M6.51233 8.9905C5.1934 10.1843 3.69642 11.8159 3.5053 12.2023C2.61598 13.5544 2.93227 14.6153 4.19609 16.4175C5.13663 17.7587 6.3981 19.2534 6.46418 19.3282C7.13679 20.0896 7.00497 20.6958 7.00497 21.9907',
  d3: 'M6.56252 19.4744L4.56729 16.9772C3.55807 15.4908 3.05345 14.7475 3.00519 13.9352C2.99003 13.6801 3.00813 13.4242 3.05904 13.1736C3.22118 12.3756 3.82555 11.708 5.0343 10.3727L6.5 8.99805V3.49805C6.5 2.66962 7.17157 1.99805 8 1.99805C8.82843 1.99805 9.5 2.66962 9.5 3.49805V7.99805H10.5C11.6046 7.99805 12.5 8.89348 12.5 9.99805V8.99805H13.5C14.6046 8.99805 15.5 9.89348 15.5 10.998V9.99805L16.8288 10.2195C17.7925 10.3801 18.4991 11.2135 18.5 12.1903V13.8327C18.5 15.8486 18.5 16.8566 18.2083 17.666C17.9822 18.2933 17.6342 18.8617 17.1916 19.3442C16.7581 19.8168 16.4304 20.4016 16.4304 21.0429V21.998H7V20.7228C7 20.2691 6.84573 19.8289 6.56252 19.4744Z',
  d4: 'M18.5 1.99805V7.99805M18.5 1.99805C17.7998 1.99805 16.4915 3.99235 16 4.49805M18.5 1.99805C19.2002 1.99805 20.5085 3.99235 21 4.49805',
  d5: 'M6.51282 13.5147V3.48575C6.51282 2.66411 7.17966 1.99805 8.00225 1.99805C8.82484 1.99805 9.49168 2.66411 9.49168 3.48575V8.68783M9.49168 8.68783V11.0115M9.49168 8.68783C10.2966 7.56941 12.0992 7.94193 12.4829 9.68079C12.4892 9.70965 12.4944 9.73874 12.4986 9.76798M12.4986 9.76798C12.5098 9.84619 12.5137 9.9255 12.5137 10.0046V11.0075M12.4986 9.76798C12.9918 8.41762 15.2563 8.93261 15.5029 10.8609M15.5029 10.8609V12.0069M15.5029 10.8609C15.9068 9.37034 18.5586 10.4121 18.5012 12.1544V15.3329C18.4982 17.059 18.2101 18.3105 17.184 19.34C16.236 20.4718 16.459 21.1053 16.4354 22.0017M6.51282 8.9905C5.19389 10.1843 3.69691 11.8159 3.50579 12.2023C2.61647 13.5544 2.93276 14.6153 4.19658 16.4175C5.13712 17.7587 6.39859 19.2534 6.46467 19.3282C7.13728 20.0896 7.00546 20.6958 7.00546 21.9907',
  d6: 'M6.51233 13.5147V3.48575C6.51233 2.66411 7.17917 1.99805 8.00176 1.99805C8.82435 1.99805 9.49119 2.66411 9.49119 3.48575V8.68783M9.49119 8.68783V11.0115M9.49119 8.68783C10.2961 7.56941 12.0987 7.94193 12.4824 9.68079C12.4887 9.70965 12.4939 9.73874 12.4981 9.76798M12.4981 9.76798C12.5093 9.84619 12.5132 9.9255 12.5132 10.0046V11.0075M12.4981 9.76798C12.9913 8.41762 15.2558 8.93261 15.5024 10.8609M15.5024 10.8609V12.0069M15.5024 10.8609C15.9063 9.37034 18.5581 10.4121 18.5007 12.1544V15.3329C18.4977 17.059 18.2096 18.3105 17.1835 19.34C16.2355 20.4718 16.4585 21.1053 16.4349 22.0017M6.51233 8.9905C5.1934 10.1843 3.69642 11.8159 3.5053 12.2023C2.61598 13.5544 2.93227 14.6153 4.19609 16.4175C5.13663 17.7587 6.3981 19.2534 6.46418 19.3282C7.13679 20.0896 7.00497 20.6958 7.00497 21.9907',
  d7: 'M19.5059 8.25C19.5059 8.80228 19.0581 9.25 18.5059 9.25C17.9536 9.25 17.5059 8.80228 17.5059 8.25L17.5059 5.74996L16.9116 5.74998C16.736 5.75011 16.5203 5.75026 16.3439 5.72819L16.3405 5.72777C16.2141 5.712 15.638 5.64017 15.3637 5.07457C15.0887 4.50775 15.3907 4.00761 15.456 3.8994L15.7951 3.43092C16.0897 3.05509 16.4954 2.54063 16.8759 2.14962C17.0657 1.95451 17.283 1.75328 17.5139 1.59443C17.7191 1.45323 18.0693 1.24996 18.5 1.24996C18.9307 1.24996 19.2809 1.45323 19.4861 1.59443C19.717 1.75328 19.9343 1.95451 20.1241 2.14962C20.5046 2.54063 20.9102 3.05508 21.2049 3.43091L21.544 3.89941C21.6093 4.00761 21.9113 4.50775 21.6363 5.07457C21.362 5.64017 20.7859 5.71201 20.6595 5.72777L20.6561 5.72819C20.4797 5.75026 20.264 5.75011 20.0884 5.74998L19.5059 5.74996L19.5059 8.25Z',
  d8: 'M9.30926 11.3021C9.54796 11.3021 9.74147 11.1146 9.74147 10.8833V7.76561C9.74147 7.58819 9.74147 7.49948 9.809 7.41669C9.87653 7.3339 9.94438 7.31999 10.0801 7.29215C10.2487 7.25756 10.4112 7.2486 10.5 7.25016C11.1087 7.25016 11.6712 7.44792 12.1268 7.7827C12.2223 7.85288 12.27 7.88797 12.3024 7.95185C12.3347 8.01573 12.3347 8.08368 12.3347 8.21958V10.8833C12.3347 11.1146 12.5282 11.3021 12.7669 11.3021C13.0056 11.3021 13.1991 11.1146 13.1991 10.8833V8.87593C13.1991 8.58587 13.1991 8.44084 13.3006 8.35127C13.4021 8.2617 13.534 8.27825 13.7979 8.31135C14.6863 8.4228 15.277 8.7914 15.6875 9.33276C15.7365 9.39741 15.761 9.42973 15.7767 9.47626C15.7923 9.52278 15.7923 9.56905 15.7923 9.6616V12.0001C15.7923 12.2314 15.9858 12.419 16.2245 12.419C16.4632 12.419 16.6567 12.2314 16.6567 12.0001V10.0818C16.6567 9.7904 16.6567 9.64469 16.7749 9.55464C16.893 9.46459 17.0119 9.49728 17.2496 9.56264C18.385 9.87492 19.2489 11.0426 19.25 12.1924L19.25 14.012C19.2503 15.858 19.2505 16.9882 18.9139 17.9224C18.6535 18.645 18.2529 19.2989 17.7442 19.8533C17.3791 20.2514 17.1804 20.6631 17.1804 21.0451C17.1804 21.9868 16.417 22.7502 15.4753 22.7502L8.22222 22.7502C8.02199 22.7505 7.81349 22.7509 7.62474 22.7094C6.95791 22.5631 6.4371 22.0422 6.29071 21.3754C6.24927 21.1867 6.24967 20.9252 6.25 20.725C6.25 20.4414 6.15358 20.1663 5.97657 19.9447L3.92578 17.3697C3.439 16.6528 3.04344 16.0702 2.76761 15.565C2.48104 15.0401 2.28969 14.5404 2.25651 13.9819C2.23749 13.6618 2.2602 13.3407 2.32406 13.0264C2.43545 12.4782 2.69502 12.0097 3.05239 11.5292C3.38461 11.0825 3.95731 10.45 4.51704 9.83179C4.85152 9.51322 5.01876 9.35393 5.16385 9.37566C5.21482 9.38329 5.26296 9.40392 5.30364 9.43556C5.41943 9.52564 5.41943 9.7566 5.41943 10.2185V13.6755C5.41943 13.9068 5.61294 14.0943 5.85164 14.0943C6.09034 14.0943 6.28384 13.9068 6.28384 13.6755V2.54661C6.28384 1.83051 6.86435 1.25 7.58045 1.25C8.29655 1.25 8.87706 1.83051 8.87706 2.54661V10.8833C8.87706 11.1146 9.07057 11.3021 9.30926 11.3021Z',
  d9: 'M9.70146 8.01166V11.0095M9.70146 8.01166H11.3891M9.70146 8.01166V4.83931C9.70146 4.5673 9.75868 3.43863 9.62221 2.99775C9.19721 1.99894 7.98704 1.69285 7.18591 2.33449C6.84593 2.60677 6.60435 3.13201 6.60435 3.51684V14.1269M11.3891 8.01166C12.1524 8.01166 12.6124 8.59588 12.8601 9.45156L14.4524 9.51057M11.3891 8.01166C12.1716 8.06819 12.7775 8.71987 12.7775 9.50484V12.0186M7.12667 22.002V19.9977C5.68912 18.2265 4.7947 17.3402 3.71728 15.6675C2.14615 13.4605 3.20128 11.6659 6.42224 9.17213M14.4524 9.51057C15.1415 9.48174 15.8908 10.3421 16.0033 10.9527L17.716 11.0241C18.7026 11.11 19.0584 12.1484 18.9935 12.9628L18.9463 16.0787C18.9935 18.1205 17.5781 19.0942 16.8527 19.9853V21.9858M14.4524 9.51057L14.6502 9.54655C15.3621 9.67608 15.8796 10.2965 15.8796 11.0206V12.9923',
  d10: 'M18.5005 8.00496V2.65461M16.0005 4.50093L18.5005 1.99805L21.0005 4.50093',
  d11: 'M7.75311 1.25C6.98402 1.25 6.38241 1.83514 6.38241 2.53109V13.671H5.58175V9.50164C5.17117 9.84794 4.23115 10.6477 3.85047 11.0219C3.08112 11.7781 2.48974 12.5604 2.31119 13.3896C2.25841 13.6347 2.23967 13.8849 2.25537 14.1342C2.27872 14.505 2.41179 14.8792 2.70125 15.3794C2.99283 15.8832 3.42309 16.4824 4.01853 17.3099L6.97275 20.771V22.75H17.3064V20.7566C17.5671 20.4885 18.1277 19.9082 18.5455 19.423C18.7544 19.1802 18.9515 18.9372 19.1109 18.7156C19.2742 18.4884 19.3822 18.3051 19.4307 18.1781C19.5835 17.7782 19.6658 17.3148 19.7077 16.6588C19.7498 15.9996 19.75 15.1716 19.75 14.0439V12.557C19.75 11.8495 19.1611 11.2759 18.4346 11.2759H17.0086V13.114H16.2079V10.886C16.2079 10.1785 15.619 9.60492 14.8926 9.60492H13.4665V12H12.6659V9.21503C12.6659 8.5075 12.077 7.93394 11.3505 7.93394H9.92447V10.886H9.12382V2.53109C9.12382 1.83514 8.52221 1.25 7.75311 1.25Z',
  d12: 'M18.543 1.25L21.7502 4.45711L20.3359 5.87132L19.543 5.07843L19.543 8.66421H17.543L17.543 5.07843L16.7502 5.87132L15.3359 4.45711L18.543 1.25Z',
};

export const IconSwipeUp06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-stroke-rounded IconSwipeUp06StrokeRounded"
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

export const IconSwipeUp06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-duotone-rounded IconSwipeUp06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-twotone-rounded IconSwipeUp06TwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-solid-rounded IconSwipeUp06SolidRounded"
    >
      <path 
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

export const IconSwipeUp06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-bulk-rounded IconSwipeUp06BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeUp06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-stroke-sharp IconSwipeUp06StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSwipeUp06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-06-solid-sharp IconSwipeUp06SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeUp06: TheIconSelfPack = {
  name: 'SwipeUp06',
  StrokeRounded: IconSwipeUp06StrokeRounded,
  DuotoneRounded: IconSwipeUp06DuotoneRounded,
  TwotoneRounded: IconSwipeUp06TwotoneRounded,
  SolidRounded: IconSwipeUp06SolidRounded,
  BulkRounded: IconSwipeUp06BulkRounded,
  StrokeSharp: IconSwipeUp06StrokeSharp,
  SolidSharp: IconSwipeUp06SolidSharp,
};