import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 18.7753C10.3443 16.7754 9 15.5355 9 13.5C9 11.4645 10.5033 10 12.0033 10C13.5033 10 15 11.4645 15 13.5C15 15.5355 13.6557 16.7754 12 18.7753ZM12 18.7753C10 21.3198 6.02071 21.4621 4.34969 20.302C2.67867 19.1419 2.65485 16.7398 3.75428 14.1954C4.85371 11.651 6.31925 8.5977 9.25143 4.52665C10.2123 3.45799 10.8973 3 11.9967 3M12 18.7753C14 21.3198 17.9793 21.4621 19.6503 20.302C21.3213 19.1419 21.3451 16.7398 20.2457 14.1954C19.1463 11.651 17.6807 8.5977 14.7486 4.52665C13.7877 3.45799 13.1027 3 12.0033 3',
  d2: 'M12.0033 3C10.9039 3 10.2123 3.45799 9.25143 4.52665C6.31925 8.5977 4.85371 11.651 3.75428 14.1954C2.65485 16.7398 2.67867 19.1419 4.34969 20.302C5.99575 21.4447 9.88165 21.3237 11.9091 18.8877C11.7051 18.6367 11.5062 18.3972 11.3143 18.1662C9.98853 16.57 9 15.3798 9 13.5896C9 11.502 10.5033 10 12.0033 10C13.5033 10 15 11.502 15 13.5896C15 15.3798 14.0115 16.57 12.6857 18.1662C12.4938 18.3972 12.2949 18.6367 12.0909 18.8877C14.1184 21.3237 18.0042 21.4447 19.6503 20.302C21.3213 19.1419 21.3451 16.7398 20.2457 14.1954C19.1463 11.651 17.6807 8.5977 14.7486 4.52665C13.7877 3.45799 13.1027 3 12.0033 3Z',
  d3: 'M12 18.7753C10.3443 16.7754 9 15.5355 9 13.5C9 11.4645 10.5033 10 12.0033 10C13.5033 10 15 11.4645 15 13.5C15 15.5355 13.6557 16.7754 12 18.7753ZM12 18.7753C10 21.3198 6.02071 21.4621 4.34969 20.302C2.67867 19.1419 2.65485 16.7398 3.75428 14.1954C4.85371 11.651 6.31925 8.5977 9.25143 4.52665C10.2123 3.45799 10.8973 3 11.9967 3C13.0961 3 13.7877 3.45799 14.7486 4.52665C17.6807 8.5977 19.1463 11.651 20.2457 14.1954C21.3451 16.7398 21.3213 19.1419 19.6503 20.302C17.9793 21.4621 14 21.3198 12 18.7753Z',
  d4: 'M12 18.7753C10.3443 16.7754 9 15.5355 9 13.5C9 11.4645 10.5033 10 12.0033 10C13.5033 10 15 11.4645 15 13.5C15 15.5355 13.6557 16.7754 12 18.7753ZM12 18.7753C10 21.3198 6.02071 21.4621 4.34969 20.302C2.67867 19.1419 2.65485 16.7398 3.75428 14.1954C4.85371 11.651 6.31925 8.5977 9.25143 4.52665C10.2123 3.45799 10.8973 3 11.9967 3',
  d5: 'M10.0713 2.49701C10.667 2.15239 11.2889 2 11.9967 2C11.9978 2 11.9989 2 12 2.00001C12.0011 2 12.0022 2 12.0033 2C12.7111 2 13.3331 2.15239 13.9287 2.49701C14.4951 2.8247 14.9905 3.30003 15.4922 3.85802C15.5163 3.88484 15.5389 3.91294 15.56 3.94221C18.5455 8.08728 20.0443 11.2082 21.1637 13.7988C21.7541 15.165 22.077 16.5667 21.9843 17.8404C21.8899 19.1383 21.3547 20.3361 20.2206 21.1234C19.1106 21.8941 17.4161 22.1487 15.8065 21.9177C14.4965 21.7297 13.1134 21.2031 12 20.2236C10.8866 21.2031 9.50354 21.7297 8.19354 21.9177C6.58396 22.1487 4.88943 21.8941 3.77942 21.1234C2.64535 20.3361 2.11017 19.1383 2.01572 17.8404C1.92302 16.5667 2.24596 15.165 2.83632 13.7988C3.95569 11.2082 5.45452 8.08728 8.44 3.94221C8.46108 3.91294 8.48372 3.88484 8.50784 3.85802C9.00957 3.30003 9.50496 2.8247 10.0713 2.49701ZM13.3396 18.7376C13.3623 18.7109 13.385 18.6843 13.4076 18.6578C13.9765 17.9899 14.5296 17.3406 14.9529 16.7058C15.5701 15.7802 16 14.7706 16 13.5C16 11.0083 14.1471 9 12.0033 9C9.86217 9 8.00001 11.0054 8.00001 13.5C8.00001 14.7706 8.42995 15.7802 9.0471 16.7058C9.47038 17.3406 10.0235 17.9899 10.5924 18.6578C10.6151 18.6843 10.6377 18.7109 10.6604 18.7376C9.89576 19.4022 8.91276 19.794 7.90943 19.938C6.61162 20.1242 5.48099 19.87 4.91998 19.4805C4.38303 19.1078 4.07079 18.5245 4.01044 17.6952C3.94833 16.8418 4.1632 15.7702 4.67226 14.5921C5.74774 12.1031 7.17336 9.13033 10.0308 5.15564C10.4713 4.66962 10.7894 4.39221 11.0729 4.22814C11.3348 4.0766 11.6051 4 11.9967 4C11.9978 4 11.9989 4 12 3.99999C12.0011 4 12.0022 4 12.0033 4C12.3949 4 12.6652 4.0766 12.9271 4.22814C13.2107 4.39221 13.5287 4.66962 13.9692 5.15563C16.8267 9.13033 18.2523 12.1031 19.3278 14.5921C19.8368 15.7702 20.0517 16.8418 19.9896 17.6952C19.9292 18.5245 19.617 19.1078 19.08 19.4805C18.519 19.87 17.3884 20.1242 16.0906 19.938C15.0873 19.794 14.1043 19.4022 13.3396 18.7376ZM12 17.2245C12.5171 16.6175 12.9428 16.1154 13.2889 15.5963C13.7578 14.893 14 14.2649 14 13.5C14 11.9206 12.8596 11 12.0033 11C11.1444 11 10 11.9235 10 13.5C10 14.2649 10.2422 14.893 10.7111 15.5963C11.0573 16.1154 11.4829 16.6175 12 17.2245Z',
  d6: 'M10.0713 2.49701C10.667 2.15239 11.2889 2 11.9967 2V4C11.6051 4 11.3348 4.0766 11.0729 4.22814C10.7894 4.39221 10.4713 4.66962 10.0308 5.15564C7.17336 9.13033 5.74774 12.1031 4.67226 14.5921C4.1632 15.7702 3.94833 16.8418 4.01044 17.6952C4.07079 18.5245 4.38303 19.1078 4.91998 19.4805C5.48099 19.87 6.61162 20.1242 7.90943 19.938C8.91276 19.794 9.89576 19.4022 10.6604 18.7376L10.5924 18.6578L10.5924 18.6577C10.0235 17.9899 9.47038 17.3406 9.0471 16.7058C8.42995 15.7802 8.00001 14.7706 8.00001 13.5C8.00001 11.0054 9.86217 9 12.0033 9V11C11.1444 11 10 11.9235 10 13.5C10 14.2649 10.2422 14.893 10.7111 15.5963C11.0573 16.1154 11.4829 16.6175 12 17.2245L12 20.2236C10.8866 21.2031 9.50354 21.7297 8.19354 21.9177C6.58396 22.1487 4.88943 21.8941 3.77942 21.1234C2.64535 20.3361 2.11017 19.1383 2.01572 17.8404C1.92302 16.5667 2.24596 15.165 2.83632 13.7988C3.95569 11.2082 5.45452 8.08728 8.44 3.94221C8.46108 3.91294 8.48372 3.88484 8.50784 3.85802C9.00957 3.30003 9.50496 2.8247 10.0713 2.49701Z',
  d7: 'M11.9967 2C11.2889 2 10.6669 2.15239 10.0713 2.49701C9.50493 2.8247 9.00954 3.30003 8.50781 3.85802C8.48369 3.88484 8.46105 3.91294 8.43997 3.94221C5.45449 8.08728 3.95566 11.2082 2.83629 13.7988C2.24593 15.165 1.92299 16.5667 2.01569 17.8404C2.11014 19.1383 2.64532 20.3361 3.77939 21.1234C4.8894 21.8941 6.58393 22.1487 8.19351 21.9177C9.50351 21.7297 10.8866 21.2031 12 20.2236C13.1134 21.2031 14.4965 21.7297 15.8064 21.9177C17.416 22.1487 19.1106 21.8941 20.2206 21.1234C21.3546 20.3361 21.8898 19.1383 21.9843 17.8404C22.077 16.5667 21.754 15.165 21.1637 13.7988C20.0443 11.2082 18.5455 8.08728 15.56 3.94221C15.5389 3.91294 15.5163 3.88484 15.4922 3.85802C14.9904 3.30003 14.495 2.8247 13.9287 2.49701C13.333 2.15239 12.7045 2 11.9967 2ZM11.0729 4.22814C11.3348 4.0766 11.6117 4 12.0033 4C12.3949 4 12.6651 4.0766 12.927 4.22814C13.2106 4.39221 13.5286 4.66962 13.9692 5.15563C16.8266 9.13033 18.2522 12.1031 19.3277 14.5921C19.8368 15.7702 20.0516 16.8418 19.9895 17.6952C19.9292 18.5245 19.6169 19.1078 19.08 19.4805C18.519 19.87 17.3884 20.1242 16.0905 19.938C15.0872 19.794 14.1042 19.4022 13.3396 18.7376L13.4076 18.6578C13.9765 17.9899 14.5296 17.3406 14.9529 16.7058C15.57 15.7802 16 14.7706 16 13.5C16 11.0083 14.147 9 12.0033 9C9.86212 9 7.99996 11.0054 7.99996 13.5C7.99996 14.7706 8.4299 15.7802 9.04705 16.7058C9.47033 17.3406 10.0234 17.9899 10.5924 18.6578L10.6604 18.7376C9.89571 19.4022 8.91271 19.794 7.90938 19.938C6.61156 20.1242 5.48093 19.87 4.91993 19.4805C4.38298 19.1078 4.07074 18.5245 4.01039 17.6952C3.94828 16.8418 4.16315 15.7702 4.67221 14.5921C5.74769 12.1031 7.17331 9.13033 10.0308 5.15564C10.4713 4.66962 10.7893 4.39221 11.0729 4.22814ZM13.2889 15.5963C12.9427 16.1154 12.517 16.6175 12 17.2245C11.4829 16.6175 11.0572 16.1154 10.7111 15.5963C10.2422 14.893 9.99996 14.2649 9.99996 13.5C9.99996 11.9235 11.1444 11 12.0033 11C12.8595 11 14 11.9206 14 13.5C14 14.2649 13.7578 14.893 13.2889 15.5963Z',
} as const;

export const IconAirbnbStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-stroke-rounded IconAirbnbStrokeRounded"
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

export const IconAirbnbDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-duotone-rounded IconAirbnbDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconAirbnbTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-twotone-rounded IconAirbnbTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirbnbSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-solid-rounded IconAirbnbSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirbnbBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-bulk-rounded IconAirbnbBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirbnbStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-stroke-sharp IconAirbnbStrokeSharp"
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

export const IconAirbnbSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="airbnb-solid-sharp IconAirbnbSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAirbnb: TheIconSelfPack = {
  name: 'Airbnb',
  StrokeRounded: IconAirbnbStrokeRounded,
  DuotoneRounded: IconAirbnbDuotoneRounded,
  TwotoneRounded: IconAirbnbTwotoneRounded,
  SolidRounded: IconAirbnbSolidRounded,
  BulkRounded: IconAirbnbBulkRounded,
  StrokeSharp: IconAirbnbStrokeSharp,
  SolidSharp: IconAirbnbSolidSharp,
};