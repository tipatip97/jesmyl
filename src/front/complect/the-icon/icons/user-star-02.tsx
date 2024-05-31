import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M19.5183 3.43325L20.0462 4.49786C20.1182 4.64606 20.3102 4.78821 20.4722 4.81543L21.4291 4.97573C22.041 5.07856 22.185 5.52618 21.744 5.96775L21.0001 6.71781C20.8741 6.84484 20.8051 7.08982 20.8441 7.26524L21.0571 8.19375C21.2251 8.92869 20.8381 9.21299 20.1932 8.82889L19.2963 8.29356C19.1343 8.19677 18.8674 8.19677 18.7024 8.29356L17.8055 8.82889C17.1636 9.21299 16.7736 8.92567 16.9416 8.19375L17.1546 7.26524C17.1935 7.08982 17.1246 6.84484 16.9986 6.71781L16.2547 5.96775C15.8167 5.52618 15.9577 5.07856 16.5696 4.97573L17.5265 4.81543C17.6855 4.78821 17.8775 4.64606 17.9495 4.49786L18.4774 3.43325C18.7654 2.85558 19.2333 2.85558 19.5183 3.43325Z',
  d4: 'M4.80002 14.6493C7.98322 12.7836 12.0152 12.7836 15.1984 14.6493C15.2992 14.7084 15.4248 14.7781 15.5676 14.8574C16.2002 15.2086 17.1721 15.7481 17.8375 16.3892C18.253 16.7896 18.6626 17.3303 18.7373 18.0037C18.8175 18.7252 18.4951 19.3911 17.8788 19.9691C16.8287 20.9539 15.5608 21.75 13.9184 21.75H6.07999C4.43765 21.75 3.16973 20.9538 2.11964 19.9691C1.50332 19.3911 1.18097 18.7252 1.2611 18.0037C1.33587 17.3303 1.74542 16.7896 2.16091 16.3892C2.8263 15.7481 3.79821 15.2086 4.43085 14.8574C4.57367 14.7781 4.69922 14.7084 4.80002 14.6493Z',
  d5: 'M5.24922 7C5.24922 4.37665 7.37586 2.25 9.99922 2.25C12.6226 2.25 14.7492 4.37665 14.7492 7C14.7492 9.62335 12.6226 11.75 9.99922 11.75C7.37586 11.75 5.24922 9.62335 5.24922 7Z',
  d6: 'M18.9985 2.25C19.6074 2.25 19.9946 2.70508 20.19 3.10053L20.1904 3.10145L20.6806 4.08998L21.5529 4.2361C21.9911 4.30974 22.5158 4.5534 22.6955 5.11691C22.8748 5.67933 22.5894 6.18163 22.2753 6.49671L22.2743 6.49771L21.5943 7.18326L21.7878 8.02664C21.8858 8.45557 21.9161 9.13658 21.3737 9.53527C20.8282 9.93626 20.1861 9.69787 19.8084 9.47289L18.9989 8.98974L18.1896 9.47274C17.8097 9.69998 17.1694 9.93454 16.6249 9.53395C16.084 9.13602 16.1111 8.45741 16.2101 8.02598L16.4034 7.18326L15.7217 6.49589C15.4094 6.18105 15.1252 5.67952 15.303 5.11826C15.4816 4.55415 16.0062 4.3098 16.4452 4.23603L17.3138 4.09053L17.805 3.10005L17.8057 3.09865C18.0024 2.7041 18.3905 2.25 18.9985 2.25Z',
  d7: 'M1.99609 20.9997H16.999C16.999 16.9063 13.6405 13.5879 9.49756 13.5879C5.35461 13.5879 1.99609 16.9063 1.99609 20.9997Z',
  d8: 'M13.2485 6.70588C13.2485 8.75258 11.5693 10.4118 9.4978 10.4118C7.42633 10.4118 5.74707 8.75258 5.74707 6.70588C5.74707 4.65918 7.42633 3 9.4978 3C11.5693 3 13.2485 4.65918 13.2485 6.70588Z',
  d9: 'M18.9786 7.03446C19.0084 6.98857 18.9888 6.9885 19.0187 7.03431L20.0588 8.83174L21.9208 9.2917C21.9697 9.30597 22.008 9.30836 21.9858 9.32844C21.9826 9.33136 21.9793 9.33416 21.9763 9.33732L20.6345 10.7585L21.1439 12.9681C21.1449 12.9722 21.1456 12.9765 21.1455 12.9807C21.144 13.0276 21.089 12.9767 21.0402 12.9577L19.007 12.1077L16.9557 12.9577C16.8503 12.9981 16.8434 13.0137 16.8455 12.9644C16.8457 12.9599 16.8463 12.9555 16.8473 12.9512L17.3525 10.7557L16.0419 9.35396C16.0383 9.35016 16.0344 9.34678 16.0304 9.34345C16.0155 9.33109 15.9828 9.29808 16.0366 9.28399L17.9401 8.81594L18.9786 7.03446Z',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M19 6.25C19.2668 6.25 19.5134 6.39168 19.6478 6.6221L20.539 8.14985L22.1834 8.56457C22.4402 8.62932 22.6437 8.82463 22.719 9.07846C22.7943 9.33229 22.7302 9.60702 22.5504 9.80131L21.468 10.9704L21.886 12.836C21.9473 13.1096 21.8508 13.3946 21.636 13.5747C21.4211 13.7549 21.1237 13.8001 20.865 13.692L19 12.9128L17.135 13.692C16.8763 13.8001 16.5789 13.7549 16.3641 13.5747C16.1492 13.3946 16.0528 13.1096 16.1141 12.836L16.532 10.9704L15.4497 9.80131C15.2698 9.60702 15.2057 9.33229 15.281 9.07846C15.3563 8.82463 15.5599 8.62932 15.8166 8.56457L17.461 8.14985L18.3522 6.6221C18.4866 6.39168 18.7333 6.25 19 6.25Z',
} as const;

export const IconUserStar02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-stroke-rounded IconUserStar02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStar02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-duotone-rounded IconUserStar02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconUserStar02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-twotone-rounded IconUserStar02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStar02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-solid-rounded IconUserStar02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUserStar02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-bulk-rounded IconUserStar02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStar02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-stroke-sharp IconUserStar02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserStar02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-star-02-solid-sharp IconUserStar02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfUserStar02: TheIconSelfPack = {
  name: 'UserStar02',
  StrokeRounded: IconUserStar02StrokeRounded,
  DuotoneRounded: IconUserStar02DuotoneRounded,
  TwotoneRounded: IconUserStar02TwotoneRounded,
  SolidRounded: IconUserStar02SolidRounded,
  BulkRounded: IconUserStar02BulkRounded,
  StrokeSharp: IconUserStar02StrokeSharp,
  SolidSharp: IconUserStar02SolidSharp,
};