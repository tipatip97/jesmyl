import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 8C7 5.64298 7 4.46447 7.73223 3.73223C8.46447 3 9.64298 3 12 3C14.357 3 15.5355 3 16.2678 3.73223C17 4.46447 17 5.64298 17 8V16C17 18.357 17 19.5355 16.2678 20.2678C15.5355 21 14.357 21 12 21C9.64298 21 8.46447 21 7.73223 20.2678C7 19.5355 7 18.357 7 16V8Z',
  d2: 'M2 7C2.54697 7.10449 2.94952 7.28931 3.26777 7.61621C4 8.36835 4 9.5789 4 12C4 14.4211 4 15.6316 3.26777 16.3838C2.94952 16.7107 2.54697 16.8955 2 17',
  d3: 'M22 7C21.453 7.10449 21.0505 7.28931 20.7322 7.61621C20 8.36835 20 9.5789 20 12C20 14.4211 20 15.6316 20.7322 16.3838C21.0505 16.7107 21.453 16.8955 22 17',
  d4: 'M12.0514 2.25C13.1349 2.24998 14.0204 2.24996 14.7195 2.34822C15.4502 2.45093 16.0838 2.67321 16.5895 3.2019C17.0952 3.7306 17.3078 4.39293 17.4061 5.15689C17.5 5.88775 17.5 6.81348 17.5 7.94631V16.0537C17.5 17.1865 17.5 18.1123 17.4061 18.8431C17.3078 19.6071 17.0952 20.2694 16.5895 20.7981C16.0838 21.3268 15.4502 21.5491 14.7195 21.6518C14.0204 21.75 13.1349 21.75 12.0514 21.75H12.0514H11.9486H11.9486C10.8651 21.75 9.97958 21.75 9.2805 21.6518C8.54976 21.5491 7.91622 21.3268 7.41052 20.7981C6.90481 20.2694 6.69219 19.6071 6.59395 18.8431C6.49996 18.1123 6.49998 17.1865 6.5 16.0537V16.0537V7.94631V7.94629C6.49998 6.81346 6.49996 5.88774 6.59395 5.15689C6.69219 4.39293 6.90481 3.7306 7.41052 3.2019C7.91622 2.67321 8.54976 2.45093 9.2805 2.34822C9.97958 2.24996 10.8651 2.24998 11.9486 2.25H11.9486H12.0514H12.0514Z',
  d5: 'M1.26795 6.81229C1.37158 6.26982 1.89535 5.91407 2.43783 6.0177C3.11738 6.14752 3.7312 6.40163 4.23448 6.91859C4.81254 7.51237 5.04478 8.24703 5.1502 9.0524C5.25025 9.81685 5.25022 10.7794 5.25019 11.9325V12.0674C5.25022 13.2204 5.25025 14.183 5.1502 14.9475C5.04478 15.7529 4.81254 16.4875 4.23448 17.0813C3.7312 17.5982 3.11738 17.8524 2.43783 17.9822C1.89535 18.0858 1.37158 17.7301 1.26795 17.1876C1.16431 16.6451 1.52006 16.1213 2.06254 16.0177C2.47693 15.9385 2.66821 15.823 2.80143 15.6862C2.95559 15.5278 3.08947 15.2811 3.16711 14.6879C3.24817 14.0686 3.25018 13.238 3.25018 11.9999C3.25018 10.7618 3.24817 9.93125 3.16711 9.31197C3.08947 8.71876 2.95559 8.47207 2.80143 8.31371C2.66821 8.17688 2.47693 8.06134 2.06254 7.98218C1.52006 7.87854 1.16431 7.35477 1.26795 6.81229Z',
  d6: 'M22.7321 6.81254C22.6284 6.27006 22.1046 5.91431 21.5622 6.01795C20.8826 6.14777 20.2688 6.40187 19.7655 6.91883C19.1875 7.51262 18.9552 8.24727 18.8498 9.05265C18.7497 9.81709 18.7498 10.7797 18.7498 11.9328V12.0676C18.7498 13.2207 18.7497 14.1833 18.8498 14.9477C18.9552 15.7531 19.1875 16.4878 19.7655 17.0815C20.2688 17.5985 20.8826 17.8526 21.5622 17.9824C22.1046 18.0861 22.6284 17.7303 22.7321 17.1878C22.8357 16.6454 22.4799 16.1216 21.9375 16.0179C21.5231 15.9388 21.3318 15.8232 21.1986 15.6864C21.0444 15.5281 20.9105 15.2814 20.8329 14.6882C20.7518 14.0689 20.7498 13.2383 20.7498 12.0002C20.7498 10.7621 20.7518 9.9315 20.8329 9.31221C20.9105 8.719 21.0444 8.47231 21.1986 8.31396C21.3318 8.17712 21.5231 8.06158 21.9375 7.98242C22.4799 7.87879 22.8357 7.35501 22.7321 6.81254Z',
  d7: 'M7 21L7 3L17 3.01172L17 21H7Z',
  d8: 'M22 7L20 8V16L22 17',
  d9: 'M2 7L4 8V16L2 17',
  d10: 'M6.46998 2.46936C6.61082 2.32868 6.80181 2.24977 7.00088 2.25L17.0009 2.26172C17.4147 2.2622 17.75 2.59785 17.75 3.01172L17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H7C6.80109 21.75 6.61032 21.671 6.46967 21.5303C6.32902 21.3897 6.25 21.1989 6.25 21V3C6.25 2.80094 6.32914 2.61004 6.46998 2.46936Z',
  d11: 'M21.0455 8.61793L22.5 7.89432L21.6011 6.10547L19.0354 7.38186V16.6179L21.6011 17.8943L22.5 16.1055L21.0455 15.3819V8.61793Z',
  d12: 'M2.95453 8.61793L1.5 7.89432L2.39895 6.10547L4.96463 7.38186V16.6179L2.39895 17.8943L1.5 16.1055L2.95453 15.3819V8.61793Z',
};

export const IconCarouselHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-stroke-rounded IconCarouselHorizontalStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCarouselHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-duotone-rounded IconCarouselHorizontalDuotoneRounded"
    >
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

export const IconCarouselHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-twotone-rounded IconCarouselHorizontalTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-solid-rounded IconCarouselHorizontalSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-bulk-rounded IconCarouselHorizontalBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-stroke-sharp IconCarouselHorizontalStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCarouselHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-horizontal-solid-sharp IconCarouselHorizontalSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCarouselHorizontal: TheIconSelfPack = {
  name: 'CarouselHorizontal',
  StrokeRounded: IconCarouselHorizontalStrokeRounded,
  DuotoneRounded: IconCarouselHorizontalDuotoneRounded,
  TwotoneRounded: IconCarouselHorizontalTwotoneRounded,
  SolidRounded: IconCarouselHorizontalSolidRounded,
  BulkRounded: IconCarouselHorizontalBulkRounded,
  StrokeSharp: IconCarouselHorizontalStrokeSharp,
  SolidSharp: IconCarouselHorizontalSolidSharp,
};