import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6',
  d2: 'M10.3182 8.92107V6.36376C10.3182 5.61064 9.70766 5.00012 8.95455 5.00012C8.20143 5.00012 7.59091 5.61064 7.59091 6.36376V14.2557L6.11791 12.8014C5.47161 12.1633 4.40702 12.2216 3.83605 12.9262C3.39916 13.4654 3.38709 14.2281 3.80671 14.7805L6.53761 18.3755C7.15737 19.1913 7.46726 19.5992 7.84017 19.9163C8.4091 20.4 9.09086 20.7366 9.82417 20.8957C10.3048 21 10.8213 21 11.8542 21C13.8238 21 14.8086 21 15.5926 20.7029C16.7915 20.2485 17.7388 19.3132 18.199 18.1296C18.5 17.3555 18.5 16.3832 18.5 14.4386V12.2265C18.5 11.3517 17.8574 10.6051 16.9807 10.4613L16.6694 10.4103C16.2 10.3333 15.7727 10.6895 15.7727 11.1579M10.3182 8.92107L10.8434 8.66262C11.0958 8.53839 11.3782 8.45819 11.6527 8.52295C12.4516 8.71145 13.0455 9.41906 13.0455 10.2632M10.3182 8.92107V11.1579M13.0455 10.2632V11.1579M13.0455 10.2632C13.0455 9.76903 13.4525 9.36844 13.9545 9.36844C14.9587 9.36844 15.7727 10.1696 15.7727 11.1579M15.7727 11.1579V12.0527',
  d3: 'M6.53761 18.3755L3.80671 14.7805C3.38709 14.2281 3.39916 13.4654 3.83605 12.9262C4.40702 12.2216 5.47161 12.1633 6.11791 12.8014L7.59091 14.2557V6.36376C7.59091 5.61064 8.20143 5.00012 8.95455 5.00012C9.70766 5.00012 10.3182 5.61064 10.3182 6.36376V8.92107L10.8434 8.66262C11.0958 8.53839 11.3782 8.45819 11.6527 8.52295C12.4516 8.71145 13.0455 9.41906 13.0455 10.2632C13.0455 9.76903 13.4525 9.36844 13.9545 9.36844C14.9587 9.36844 15.7727 10.1696 15.7727 11.1579C15.7727 10.6895 16.2 10.3333 16.6694 10.4103L16.9807 10.4613C17.8574 10.6051 18.5 11.3517 18.5 12.2265V14.4386C18.5 16.3832 18.5 17.3555 18.199 18.1296C17.7388 19.3132 16.7915 20.2485 15.5926 20.7029C14.8086 21 13.8238 21 11.8542 21C10.8213 21 10.3048 21 9.82417 20.8957C9.09086 20.7366 8.4091 20.4 7.84017 19.9163C7.46726 19.5992 7.15737 19.1913 6.53761 18.3755Z',
  d4: 'M8.48569 15.066V6.01974C8.48569 5.38752 8.99821 4.875 9.63043 4.875C10.2626 4.875 10.7752 5.38752 10.7752 6.01974V11.5111C10.7752 11.7488 10.9696 11.9414 11.2094 11.9414C11.4492 11.9414 11.6436 11.7488 11.6436 11.5111V8.97459C11.6436 8.77083 11.6436 8.66896 11.6968 8.59197C11.7018 8.58469 11.7072 8.57763 11.7128 8.57082C11.7726 8.49885 11.8707 8.47139 12.067 8.41649C12.2962 8.36733 12.5535 8.35417 12.8237 8.41791C13.1505 8.49503 13.4541 8.63433 13.7203 8.82289C13.8174 8.8917 13.866 8.92611 13.8995 8.99093C13.9331 9.05575 13.9331 9.12462 13.9331 9.26236V11.5111C13.9331 11.7488 14.1275 11.9414 14.3673 11.9414C14.6071 11.9414 14.8015 11.7488 14.8015 11.5111V9.85021C14.8015 9.56026 14.8015 9.41529 14.912 9.32525C15.0224 9.23522 15.1474 9.26096 15.3972 9.31245C16.0123 9.43923 16.6024 9.75312 16.9765 10.1939C17.0283 10.2549 17.0542 10.2855 17.0726 10.3355C17.091 10.3856 17.091 10.4339 17.091 10.5305V12.5378C17.091 12.7755 17.2854 12.9682 17.5252 12.9682C17.765 12.9682 17.9594 12.7755 17.9594 12.5378V10.9461C17.9594 10.6537 17.9594 10.5075 18.0802 10.4175C18.201 10.3276 18.3177 10.3625 18.5511 10.4323C19.5659 10.736 20.2488 11.795 20.2488 12.8514V15.0896C20.2488 16.0398 20.2488 16.7891 20.2096 17.3962C20.1696 18.0152 20.0868 18.5377 19.8968 19.0263C19.3588 20.4102 18.2527 21.5003 16.8572 22.0291C16.3655 22.2155 15.8393 22.297 15.2139 22.3363C14.5999 22.3749 13.8418 22.3749 12.8786 22.3749C11.9318 22.3751 11.224 22.3751 10.6639 22.2536C9.81064 22.0684 9.01651 21.6766 8.35314 21.1126C7.91739 20.7421 7.56126 20.2732 6.99386 19.5261L4.01553 15.4078C3.92138 15.285 3.85222 15.1502 3.80796 15.0098C3.77417 14.8655 3.75486 14.7186 3.75 14.5715C3.76148 14.3014 3.85872 14.0343 4.0411 13.8112C4.54026 13.2007 5.47461 13.1493 6.04083 13.7033L7.74641 15.3722C7.87103 15.4941 8.05735 15.53 8.21892 15.463C8.3805 15.3961 8.48569 15.2395 8.48569 15.066Z',
  d5: 'M9.63086 3.625C7.97401 3.625 6.63086 4.96815 6.63086 6.625C6.63086 7.17728 6.18314 7.625 5.63086 7.625C5.07857 7.625 4.63086 7.17728 4.63086 6.625C4.63086 3.86358 6.86944 1.625 9.63086 1.625C12.3923 1.625 14.6309 3.86358 14.6309 6.625C14.6309 7.17728 14.1831 7.625 13.6309 7.625C13.0786 7.625 12.6309 7.17728 12.6309 6.625C12.6309 4.96815 11.2877 3.625 9.63086 3.625Z',
  d6: 'M14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6',
  d7: 'M13.9091 13.8579V12.225C13.9091 12.076 13.8843 11.9329 13.8388 11.8M16.4545 14.3276V13.075C16.4545 12.926 16.4298 12.7829 16.3843 12.65M11.3636 10.95V13.0079M11.3636 10.95H12.6738C13.2117 10.95 13.6692 11.3048 13.8388 11.8M11.3636 10.95V6.34211C11.3636 5.60088 10.7938 5 10.0909 5C9.388 5 8.81818 5.60088 8.81818 6.34211V15.2557L7.44338 13.8014C6.84017 13.1633 5.84655 13.2215 5.31364 13.9262C4.90588 14.4654 4.89462 15.2281 5.28626 15.7805L8.81818 22H16.5294C17.8939 22 19 20.8583 19 19.45V13.925C19 13.2208 18.4469 12.65 17.7647 12.65H16.3843M13.8388 11.8H15.2193C15.7571 11.8 16.2147 12.1548 16.3843 12.65',
  d8: 'M6.39324 14.115C5.86559 13.5714 5.00374 13.6171 4.53296 14.2233C4.16528 14.6968 4.15467 15.3725 4.50846 15.8585L4.5203 15.8747L8.52931 22.75H17.2786C18.6315 22.75 19.75 21.644 19.75 20.253V13.9823C19.75 13.3906 19.276 12.9325 18.7183 12.9325H17.5993V14.4393H16.7835V13.0176C16.7835 12.8927 16.7622 12.7738 16.7236 12.6639C16.5784 12.2511 16.1922 11.9678 15.7518 11.9678H14.6328V13.9062H13.817V12.0529C13.817 11.928 13.7957 11.8091 13.7571 11.6992C13.6119 11.2864 13.2257 11.003 12.7853 11.003H11.6663V12.9414H10.8505V5.41046C10.8505 4.76949 10.3309 4.24988 9.68989 4.24988C9.04892 4.24988 8.52931 4.76949 8.52931 5.41046V16.4911L6.39324 14.115Z',
  d9: 'M9.68945 3.05C8.11544 3.05 6.83945 4.25883 6.83945 5.75H4.93945C4.93945 3.26472 7.0661 1.25 9.68945 1.25C12.3128 1.25 14.4395 3.26472 14.4395 5.75H12.5395C12.5395 4.25883 11.2635 3.05 9.68945 3.05Z',
} as const;

export const IconTap07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-stroke-rounded IconTap07StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTap07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-duotone-rounded IconTap07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconTap07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-twotone-rounded IconTap07TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTap07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-solid-rounded IconTap07SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-bulk-rounded IconTap07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-stroke-sharp IconTap07StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-07-solid-sharp IconTap07SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTap07: TheIconSelfPack = {
  name: 'Tap07',
  StrokeRounded: IconTap07StrokeRounded,
  DuotoneRounded: IconTap07DuotoneRounded,
  TwotoneRounded: IconTap07TwotoneRounded,
  SolidRounded: IconTap07SolidRounded,
  BulkRounded: IconTap07BulkRounded,
  StrokeSharp: IconTap07StrokeSharp,
  SolidSharp: IconTap07SolidSharp,
};