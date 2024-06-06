import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 9.66676V14.3334M7.5 3.01509C7.99962 2.99793 8.49991 2.99705 9 2.99855M7.5 20.9849C7.99962 21.0021 8.49991 21.003 9 21.0015M4.74533 3.53709C3.78698 4.02122 3.00864 4.80249 2.52818 5.76305M2.5 18.1797C2.9779 19.1665 3.76801 19.9692 4.74533 20.4629',
  d2: 'M12 5.50502C12 3.54695 12.6378 3.00695 14.5 3.00695C17.0317 3.00695 19.9537 2.75702 21.3971 5.25521C22 6.29863 22 7.69948 22 10.5012V13.4988C22 16.3005 22 17.7014 21.3971 18.7448C19.9537 21.243 17.0317 20.9931 14.5 20.9931C12.6378 20.9931 12 20.453 12 18.495V5.50502Z',
  d3: 'M12 5.50306C12 3.545 12.6378 3.00499 14.5 3.00499C17.0317 3.00499 19.9537 2.75507 21.3971 5.25326C22 6.29668 22 7.69752 22 10.4992V13.4969C22 16.2986 22 17.6994 21.3971 18.7428C19.9537 21.241 17.0317 20.9911 14.5 20.9911C12.6378 20.9911 12 20.4511 12 18.493V5.50306Z',
  d4: 'M9.24701 4.2001C8.74835 4.19865 8.26396 4.1996 7.78431 4.21565C7.23235 4.23413 6.76954 3.81292 6.75059 3.27486C6.73164 2.73681 7.16373 2.28566 7.71569 2.26719C8.23528 2.2498 8.75146 2.24903 9.25299 2.2505C9.80528 2.25211 10.2516 2.68985 10.25 3.22822C10.2483 3.76659 9.79929 4.20172 9.24701 4.2001ZM5.8879 3.31074C6.13692 3.79127 5.93918 4.37762 5.44622 4.62037C4.67966 4.99785 4.05684 5.60728 3.67254 6.35624C3.42547 6.83774 2.82477 7.03283 2.33083 6.79199C1.83689 6.55115 1.63676 5.96557 1.88382 5.48408C2.46044 4.36032 3.3943 3.44656 4.54443 2.88019C5.03738 2.63744 5.63888 2.8302 5.8879 3.31074ZM2.25 8.75072C2.80228 8.75072 3.25 9.18715 3.25 9.72553V14.2746C3.25 14.813 2.80228 15.2494 2.25 15.2494C1.69772 15.2494 1.25 14.813 1.25 14.2746V9.72553C1.25 9.18715 1.69772 8.75072 2.25 8.75072ZM2.31412 17.1467C2.81118 16.912 3.40927 17.1146 3.65 17.5991C4.03224 18.3685 4.66448 18.9947 5.44623 19.3796C5.93918 19.6224 6.13692 20.2087 5.8879 20.6893C5.63887 21.1698 5.03738 21.3626 4.54443 21.1198C3.37155 20.5422 2.42355 19.6034 1.85 18.4489C1.60927 17.9644 1.81706 17.3814 2.31412 17.1467ZM6.75059 20.7251C6.76954 20.1871 7.23235 19.7659 7.78431 19.7843C8.26396 19.8004 8.74835 19.8013 9.247 19.7999C9.79929 19.7983 10.2483 20.2334 10.25 20.7718C10.2516 21.3102 9.80528 21.7479 9.25299 21.7495C8.75147 21.751 8.23528 21.7502 7.71569 21.7328C7.16373 21.7143 6.73164 21.2632 6.75059 20.7251Z',
  d5: 'M18.5062 2.45976C19.8775 2.73883 21.1875 3.39376 22.0465 4.88042C22.4249 5.53536 22.5915 6.2686 22.6716 7.15152C22.75 8.0163 22.75 9.09506 22.75 10.4644V13.5365C22.75 14.9058 22.75 15.9846 22.6716 16.8493C22.5915 17.7323 22.4249 18.4655 22.0465 19.1204C21.1875 20.6071 19.8775 21.262 18.5062 21.5411C17.3971 21.7668 16.1829 21.7563 15.1063 21.747H15.1063H15.1061C14.8984 21.7452 14.6958 21.7435 14.5 21.7435C13.5469 21.7435 12.6501 21.618 12.03 21.0175C11.4038 20.4113 11.25 19.5087 11.25 18.4954V5.50545C11.25 4.49218 11.4038 3.58959 12.03 2.98332C12.6501 2.38285 13.5469 2.25738 14.5 2.25738C14.6958 2.25738 14.8985 2.25563 15.1063 2.25383C16.1828 2.24452 17.3971 2.23402 18.5062 2.45976Z',
  d6: 'M6.99872 2.99854H8.99821M6.99872 21.0015H8.99821M4.99923 2.99854H2V6M2 18V21.0015L4.99923 20.9849M2 8V11M2 13V16',
  d7: 'M11.9961 2.99854H21.9004C21.9556 2.99854 22.0004 3.04331 22.0004 3.09854V20.9015C22.0004 20.9567 21.9556 21.0015 21.9004 21.0015H11.9961V2.99854Z',
  d8: 'M1.25 3.22486C1.25 2.68646 1.68754 2.25 2.22727 2.25H5.15909V4.19972H3.20455V6.15086H1.25V3.22486ZM9.06818 4.19972L7.11364 4.19972L7.11364 2.25L9.06818 2.25L9.06818 4.19972ZM1.25 11.0251V8.10057H3.20455V11.0251H1.25ZM1.25 15.8994V12.9749H3.20455V15.8994H1.25ZM1.25 20.7751V17.8492H3.20455V19.7949L5.1537 19.7842L5.16448 21.7339L2.23266 21.75C1.97254 21.7514 1.72258 21.6493 1.53814 21.4664C1.3537 21.2834 1.25 21.0346 1.25 20.7751ZM9.06818 21.75H7.11364V19.8003H9.06818V21.75Z',
  d9: 'M21.7734 2.25146C22.3132 2.25146 22.7507 2.68792 22.7507 3.22632V20.7668C22.7507 21.305 22.3136 21.7413 21.7741 21.7417L11.0234 21.7493V2.25146H21.7734Z',
};

export const IconFlipLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-stroke-rounded IconFlipLeftStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-duotone-rounded IconFlipLeftDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-twotone-rounded IconFlipLeftTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-solid-rounded IconFlipLeftSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-bulk-rounded IconFlipLeftBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-stroke-sharp IconFlipLeftStrokeSharp"
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

export const IconFlipLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-left-solid-sharp IconFlipLeftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlipLeft: TheIconSelfPack = {
  name: 'FlipLeft',
  StrokeRounded: IconFlipLeftStrokeRounded,
  DuotoneRounded: IconFlipLeftDuotoneRounded,
  TwotoneRounded: IconFlipLeftTwotoneRounded,
  SolidRounded: IconFlipLeftSolidRounded,
  BulkRounded: IconFlipLeftBulkRounded,
  StrokeSharp: IconFlipLeftStrokeSharp,
  SolidSharp: IconFlipLeftSolidSharp,
};