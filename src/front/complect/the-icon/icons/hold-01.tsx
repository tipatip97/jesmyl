import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 5.5C14 4.67157 14.6716 4 15.5 4C16.3284 4 17 4.67157 17 5.5V12M14 5.5V3.5C14 2.67157 13.3284 2 12.5 2C11.6716 2 11 2.67157 11 3.5L11.0002 5M14 5.5V11M11.0002 5C10.9999 4.17187 10.3284 3.50064 9.50021 3.50064C8.67178 3.50064 8.00021 4.17221 8.00021 5.00064L8 13.4624L6.3797 11.837C5.66877 11.1239 4.49772 11.1889 3.86965 11.9765C3.38907 12.5791 3.3758 13.4315 3.83738 14.0489L7.43707 18.6471C8.12579 19.5269 8.5 20.8829 8.5 22.0002M11.0002 5V10M18 22.0002V20.8356C18 20.3038 18.2148 19.7964 18.5652 19.3964C18.9703 18.9339 19.4769 18.2939 19.6689 17.792C20 16.9269 20 15.8402 20 13.6668L20.0004 12.1943L20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5',
  d2: 'M17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5V3.5C14 2.67157 13.3284 2 12.5 2C11.6716 2 11 2.67157 11 3.5L11.0002 5C10.9999 4.17187 10.3284 3.50064 9.50021 3.50064C8.67178 3.50064 8.00021 4.17221 8.00021 5.00064L8 13.4624L6.3797 11.837C5.66877 11.1239 4.49772 11.1889 3.86965 11.9765C3.38907 12.5791 3.3758 13.4315 3.83738 14.0489L7.43707 18.6471C8.12579 19.5269 8.5 20.8829 8.5 22.0002H18V20.8356C18 20.3038 18.2148 19.7964 18.5652 19.3964C18.9703 18.9339 19.4769 18.2939 19.6689 17.792C20 16.9269 20 15.8402 20 13.6668L20.0004 12.1943L20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5V5.5Z',
  d3: 'M14 5.5C14 4.67157 14.6716 4 15.5 4C16.3284 4 17 4.67157 17 5.5V12M14 5.5V3.5C14 2.67157 13.3284 2 12.5 2C11.6716 2 11 2.67157 11 3.5L11.0002 5V10M14 5.5V11M18 22.0002V20.8356C18 20.3038 18.2148 19.7964 18.5652 19.3964C18.9703 18.9339 19.4769 18.2939 19.6689 17.792C20 16.9269 20 15.8402 20 13.6668L20.0004 12.1943L20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5',
  d4: 'M11.1423 10.1848C11.379 10.1848 11.5708 9.99733 11.5708 9.76602V2.53581C11.5708 1.82568 12.1465 1.25 12.8566 1.25C13.5668 1.25 14.1425 1.82571 14.1424 2.53587L14.142 10.8829C14.142 11.1142 14.3339 11.3017 14.5706 11.3017C14.8073 11.3017 14.9992 11.1142 14.9992 10.8829V4.66345C14.9992 3.95337 15.5748 3.37773 16.2849 3.37773C16.995 3.37773 17.5706 3.95337 17.5706 4.66345V11.9998C17.5706 12.2311 17.7625 12.4186 17.9992 12.4186C18.2359 12.4186 18.4277 12.2311 18.4277 11.9998V6.55814C18.4277 5.84812 19.0033 5.27253 19.7133 5.27253C20.4234 5.27253 20.999 5.84812 20.999 6.55814V13.6924C20.999 14.7571 20.999 15.592 20.9561 16.2673C20.9124 16.9542 20.8223 17.5269 20.6184 18.0598C20.3721 18.7034 19.7764 19.4358 19.3783 19.8903C19.1322 20.1713 18.999 20.5076 18.999 20.8354C18.9991 20.9551 18.9992 21.1112 18.9844 21.2255C18.882 22.0131 18.2621 22.633 17.4745 22.7353C17.3602 22.7502 17.2358 22.7501 17.1161 22.75L10.7149 22.7499C10.3205 22.75 9.97236 22.75 9.69199 22.7233C9.40178 22.6956 9.07232 22.6318 8.78116 22.4238C8.46624 22.1987 8.28901 21.8417 8.16334 21.548C8.02894 21.2339 7.87537 20.7853 7.70244 20.2803C7.54618 19.8239 7.33793 19.4189 7.09546 19.1092L3.29675 14.0339C3.18246 13.8836 3.10118 13.7173 3.05275 13.5444C3.02188 13.3995 3.0043 13.2525 3 13.1051C3.0105 12.7959 3.12013 12.4895 3.32812 12.2347C3.88642 11.5505 4.9265 11.4942 5.55816 12.1134L7.40993 13.9288C7.53239 14.0489 7.71683 14.0849 7.87714 14.0202C8.03745 13.9554 8.14202 13.8026 8.14202 13.6331V4.03625C8.14202 3.32611 8.71771 2.75042 9.42786 2.75042C10.138 2.75042 10.7137 3.32611 10.7137 4.03625V9.76602C10.7137 9.99733 10.9056 10.1848 11.1423 10.1848Z',
  d5: 'M14.25 5.5C14.25 4.67157 14.9216 4 15.75 4C16.5784 4 17.25 4.67157 17.25 5.5V7.5M14.25 5.5V3.5C14.25 2.67157 13.5784 2 12.75 2C11.9216 2 11.25 2.67157 11.25 3.5L11.2502 5M14.25 5.5V11M11.2502 5C11.2499 4.17187 10.5784 3.50064 9.75021 3.50064C8.92178 3.50064 8.25021 4.17221 8.25021 5.00064L8.25 13.4624L6.6297 11.837C5.91877 11.1239 4.74772 11.1889 4.11965 11.9765C3.63907 12.5791 3.6258 13.4315 4.08738 14.0489L8.25 19.5V22M11.2502 5V10M18.25 22.0002V19.3964L19.321 18.1131C19.9212 17.3939 20.25 16.4869 20.25 15.5501V7.5C20.25 6.67157 19.5784 6 18.75 6C17.9216 6 17.25 6.67157 17.25 7.5M17.25 12V7.5',
  d6: 'M11.5443 2.53108L11.5445 4.20183V9.77195H10.7471V4.20221C10.7467 3.49502 10.1603 2.92168 9.43695 2.92168C8.71338 2.92168 8.12682 3.49524 8.12682 4.20276L8.12656 14.5724L5.59954 12.0936C4.95786 11.4642 3.90126 11.5214 3.33413 12.2168C2.90015 12.7489 2.88774 13.5018 3.30382 14.0474L3.30497 14.0489L8.12658 20.2229V22.7498L18.7215 22.75V20.098L20.0342 18.56C20.6582 17.8289 21 16.9069 21 15.9547V6.987C21 6.27948 20.4134 5.70592 19.6899 5.70592C18.9663 5.70592 18.3797 6.27948 18.3797 6.987V11.9999H17.5823V4.75904C17.5823 4.05152 16.9957 3.47796 16.2722 3.47796C15.5486 3.47796 14.962 4.05152 14.962 4.75904V10.8859H14.1646V2.53108C14.1646 1.82356 13.578 1.25 12.8544 1.25C12.1309 1.25 11.5443 1.82358 11.5443 2.53108Z',
} as const;

export const IconHold01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-stroke-rounded IconHold01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-duotone-rounded IconHold01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-twotone-rounded IconHold01TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-solid-rounded IconHold01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-bulk-rounded IconHold01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-stroke-sharp IconHold01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHold01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-01-solid-sharp IconHold01SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHold01: TheIconSelfPack = {
  name: 'Hold01',
  StrokeRounded: IconHold01StrokeRounded,
  DuotoneRounded: IconHold01DuotoneRounded,
  TwotoneRounded: IconHold01TwotoneRounded,
  SolidRounded: IconHold01SolidRounded,
  BulkRounded: IconHold01BulkRounded,
  StrokeSharp: IconHold01StrokeSharp,
  SolidSharp: IconHold01SolidSharp,
};