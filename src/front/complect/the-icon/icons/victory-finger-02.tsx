import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.33384 10.5L6.18585 11.8492C5.25059 12.9483 4.78295 13.4979 4.60625 14.1468C4.52985 14.4274 4.49431 14.7177 4.50074 15.0086C4.51561 15.6814 4.83662 16.3294 5.47865 17.6252C6.2779 19.2383 6.67752 20.0449 7.32318 20.5834C7.6028 20.8166 7.91282 21.0099 8.24455 21.158C9.01054 21.5 9.90412 21.5 11.6913 21.5H13.1498C14.3954 21.5 15.0182 21.5 15.5629 21.3393C16.434 21.0824 17.1913 20.5315 17.7083 19.7788C18.0316 19.3082 18.2285 18.7119 18.6224 17.5194L19.031 16.2824C19.2729 15.55 19.3939 15.1838 19.445 14.8763C19.7703 12.9193 18.6246 11.0174 16.7533 10.408C16.4593 10.3122 16.0814 10.252 15.3258 10.1316M14.9811 11.5L16.3803 4.62268C16.6033 3.52664 15.7736 2.5 14.6649 2.5C13.883 2.5 13.1959 3.02307 12.9811 3.78175L11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L7.89392 13.5',
  d2: 'M18.6224 17.5194L19.031 16.2824C19.2729 15.55 19.3939 15.1838 19.445 14.8763C19.7703 12.9193 18.6246 11.0174 16.7533 10.408C16.4593 10.3122 16.0185 10.2356 15.2629 10.1152L16.3803 4.62268C16.6033 3.52664 15.7736 2.5 14.6649 2.5C13.883 2.5 13.1959 3.02307 12.9811 3.78175L11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L7.35342 10.5L6.18585 11.8492L6.18584 11.8492C5.25058 12.9483 4.78295 13.4979 4.60625 14.1468C4.52985 14.4274 4.49431 14.7177 4.50074 15.0086C4.51561 15.6814 4.83662 16.3294 5.47865 17.6252L5.47866 17.6252C6.2779 19.2383 6.67752 20.0449 7.32318 20.5834C7.6028 20.8166 7.91282 21.0099 8.24455 21.158C9.01054 21.5 9.90412 21.5 11.6913 21.5H13.1498C14.3954 21.5 15.0182 21.5 15.5629 21.3393C16.434 21.0824 17.1913 20.5315 17.7083 19.7788C18.0316 19.3082 18.2285 18.7119 18.6224 17.5194Z',
  d3: 'M7.35342 10.5L6.18585 11.8492C5.25059 12.9483 4.78295 13.4979 4.60625 14.1468C4.52985 14.4274 4.49431 14.7177 4.50074 15.0086C4.51561 15.6814 4.83662 16.3294 5.47865 17.6252C6.2779 19.2383 6.67752 20.0449 7.32318 20.5834C7.6028 20.8166 7.91282 21.0099 8.24455 21.158C9.01054 21.5 9.90412 21.5 11.6913 21.5H13.1498C14.3954 21.5 15.0182 21.5 15.5629 21.3393C16.434 21.0824 17.1913 20.5315 17.7083 19.7788C18.0316 19.3082 18.2285 18.7119 18.6224 17.5194L19.031 16.2824C19.2729 15.55 19.3939 15.1838 19.445 14.8763C19.7703 12.9193 18.6246 11.0174 16.7533 10.408C16.4593 10.3122 16.0185 10.2356 15.2629 10.1152M14.9811 11.5L16.3803 4.62268C16.6033 3.52664 15.7736 2.5 14.6649 2.5C13.883 2.5 13.1959 3.02307 12.9811 3.78175L11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L7.89392 13.5',
  d4: 'M12.5 21.5H11.6913C9.90412 21.5 9.01054 21.5 8.24455 21.158C7.91282 21.0099 7.6028 20.8166 7.32318 20.5834C6.67752 20.0449 6.2779 19.2383 5.47865 17.6252C4.83662 16.3294 4.51561 15.6814 4.50074 15.0086C4.49431 14.7177 4.52985 14.4274 4.60625 14.1468C4.78295 13.4979 5.25059 12.9483 6.18585 11.8492L7.33384 10.5M11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L7.89392 13.5',
  d5: 'M5.09902 4.74621C4.81935 3.19396 6.00087 1.75 7.58476 1.75C8.71735 1.75 9.70614 2.50727 10.0143 3.5958L11.3621 7.74681L12.6203 3.57744C12.9254 2.49978 13.9043 1.75 15.0257 1.75C16.6172 1.75 17.7919 3.21971 17.4761 4.7722L16.1528 9.50277C16.4949 9.56425 16.7667 9.62356 16.9855 9.69482C19.2138 10.4205 20.5702 12.6808 20.1849 14.9993C20.1241 15.3648 19.9863 15.7818 19.7684 16.4413L19.7684 16.4414L19.2956 17.8726C18.9394 18.9518 18.7111 19.6436 18.3265 20.2035C17.7126 21.0972 16.8123 21.7527 15.7751 22.0587C15.1251 22.2504 14.4002 22.2503 13.2746 22.25L11.5149 22.2501H11.5149C9.89863 22.2506 8.85269 22.2509 7.9388 21.8429C7.544 21.6666 7.17524 21.4366 6.84282 21.1594C6.07407 20.5182 5.60785 19.5765 4.88499 18.1164C4.57553 17.4918 4.23136 16.7971 4.05765 16.3606C3.8769 15.9063 3.76105 15.4835 3.75092 15.0252C3.7429 14.6622 3.78724 14.3 3.8826 13.9498C4.00305 13.5074 4.21758 13.1255 4.50266 12.729C4.77655 12.3481 5.14399 11.9163 5.5947 11.3866L5.59471 11.3866L6.55175 10.2802L5.09902 4.74621Z',
  d6: 'M7.33384 10.5L6.18585 11.8492C5.25059 12.9483 4.78295 13.4979 4.60625 14.1468C4.52985 14.4274 4.49431 14.7177 4.50074 15.0086C4.51561 15.6814 4.83662 16.3294 5.47865 17.6252L7.5 21.5H17.7083C17.7083 21.5 19.3939 15.1838 19.445 14.8763C19.7703 12.9193 18.6246 11.0174 16.7533 10.408C16.4593 10.3122 16.0814 10.252 15.3258 10.1316M14.6649 12.5L16.3803 4.62268C16.6033 3.52664 15.7736 2.5 14.6649 2.5C13.883 2.5 13.1959 3.02307 12.9811 3.78175L11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L8 14',
  d7: 'M5.55471 4.74621C5.27504 3.19396 6.45656 1.75 8.04045 1.75C9.17304 1.75 10.1618 2.50727 10.47 3.5958L11.3621 7.74681L12.2594 3.57744C12.5645 2.49978 13.5435 1.75 14.6649 1.75C16.2564 1.75 17.4311 3.21971 17.1152 4.7722L17.1132 4.78228L16.0868 9.49504C16.4617 9.55858 16.7429 9.61581 16.9855 9.69482C19.2138 10.4205 20.5702 12.6808 20.1849 14.9993C20.1648 15.1198 20.0354 15.6242 19.8779 16.2297C19.7123 16.8666 19.4965 17.6862 19.2826 18.4952C19.0685 19.3045 18.8561 20.104 18.6973 20.7011L18.4333 21.6922L18.433 21.6933L18.2844 22.25H7.04533L4.81008 17.9651L4.79298 17.9306C4.48352 17.3061 4.23136 16.7971 4.05765 16.3606C3.8769 15.9063 3.76105 15.4835 3.75092 15.0252C3.7429 14.6622 3.78724 14.3 3.8826 13.9498C4.00305 13.5074 4.21758 13.1255 4.50266 12.729C4.77656 12.3481 5.144 11.9162 5.59472 11.3866L6.55676 10.2559L5.55471 4.74621Z',
} as const;

export const IconVictoryFinger02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-stroke-rounded IconVictoryFinger02StrokeRounded"
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

export const IconVictoryFinger02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-duotone-rounded IconVictoryFinger02DuotoneRounded"
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

export const IconVictoryFinger02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-twotone-rounded IconVictoryFinger02TwotoneRounded"
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

export const IconVictoryFinger02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-solid-rounded IconVictoryFinger02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-bulk-rounded IconVictoryFinger02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-stroke-sharp IconVictoryFinger02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-02-solid-sharp IconVictoryFinger02SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVictoryFinger02: TheIconSelfPack = {
  name: 'VictoryFinger02',
  StrokeRounded: IconVictoryFinger02StrokeRounded,
  DuotoneRounded: IconVictoryFinger02DuotoneRounded,
  TwotoneRounded: IconVictoryFinger02TwotoneRounded,
  SolidRounded: IconVictoryFinger02SolidRounded,
  BulkRounded: IconVictoryFinger02BulkRounded,
  StrokeSharp: IconVictoryFinger02StrokeSharp,
  SolidSharp: IconVictoryFinger02SolidSharp,
};