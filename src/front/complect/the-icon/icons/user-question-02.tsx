import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.18007 15.2964C4.92249 16.0335 1.62521 17.5386 3.63348 19.422C4.6145 20.342 5.7071 21 7.08077 21H14.9192C16.2929 21 17.3855 20.342 18.3665 19.422C20.3748 17.5386 17.0775 16.0335 15.8199 15.2964C12.8709 13.5679 9.12906 13.5679 6.18007 15.2964Z',
  d2: 'M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z',
  d3: 'M18 5.53846C18 4.68879 18.6716 4 19.5 4C20.3284 4 21 4.68879 21 5.53846C21 5.84473 20.9127 6.1301 20.7623 6.36984C20.3141 7.08436 19.5 7.76572 19.5 8.61538V9',
  d4: 'M19.4998 11H19.5088',
  d5: 'M5.551 14.3993C8.73419 12.5336 12.7662 12.5336 15.9494 14.3993C16.0502 14.4584 16.1757 14.5281 16.3186 14.6074C16.9512 14.9586 17.9231 15.4981 18.5885 16.1392C19.004 16.5396 19.4135 17.0803 19.4883 17.7537C19.5684 18.4752 19.2461 19.1411 18.6298 19.7191C17.5797 20.7039 16.3118 21.5 14.6694 21.5H6.83096C5.18862 21.5 3.9207 20.7038 2.87062 19.7191C2.2543 19.1411 1.93195 18.4752 2.01207 17.7537C2.08684 17.0803 2.4964 16.5396 2.91189 16.1392C3.57728 15.4981 4.54919 14.9586 5.18183 14.6074C5.32465 14.5281 5.4502 14.4584 5.551 14.3993Z',
  d6: 'M6.00019 6.75C6.00019 4.12665 8.12684 2 10.7502 2C13.3735 2 15.5002 4.12665 15.5002 6.75C15.5002 9.37335 13.3735 11.5 10.7502 11.5C8.12684 11.5 6.00019 9.37335 6.00019 6.75Z',
  d7: 'M19.25 4.75C18.9976 4.75 18.75 4.96706 18.75 5.28846C18.75 5.84075 18.3023 6.28846 17.75 6.28846C17.1977 6.28846 16.75 5.84075 16.75 5.28846C16.75 3.91053 17.8456 2.75 19.25 2.75C20.6544 2.75 21.75 3.91053 21.75 5.28846C21.75 5.78685 21.6075 6.25582 21.3594 6.65129C21.2169 6.87853 21.053 7.09116 20.9128 7.2699C20.8858 7.30422 20.8598 7.33724 20.8346 7.36925C20.719 7.51602 20.6204 7.64128 20.5287 7.77054C20.2996 8.09347 20.25 8.26196 20.25 8.36538V8.75C20.25 9.30228 19.8023 9.75 19.25 9.75C18.6977 9.75 18.25 9.30228 18.25 8.75V8.36538C18.25 7.61914 18.6075 7.02212 18.8975 6.61333C19.0211 6.43905 19.1571 6.26654 19.2734 6.11905C19.2962 6.09016 19.3182 6.06222 19.3392 6.03542C19.4777 5.85889 19.5837 5.71841 19.6652 5.58839C19.718 5.50438 19.75 5.40261 19.75 5.28846C19.75 4.96706 19.5024 4.75 19.25 4.75Z',
  d8: 'M18.25 11.25C18.25 10.6977 18.6977 10.25 19.25 10.25H19.259C19.8113 10.25 20.259 10.6977 20.259 11.25C20.259 11.8023 19.8113 12.25 19.259 12.25H19.25C18.6977 12.25 18.25 11.8023 18.25 11.25Z',
  d9: 'M2.51367 20.9997H17.5029C17.5029 16.9063 14.1474 13.5879 10.0083 13.5879C5.86912 13.5879 2.51367 16.9063 2.51367 20.9997Z',
  d10: 'M13.7554 6.70588C13.7554 8.75258 12.0777 10.4118 10.008 10.4118C7.93847 10.4118 6.26074 8.75258 6.26074 6.70588C6.26074 4.65918 7.93847 3 10.008 3C12.0777 3 13.7554 4.65918 13.7554 6.70588Z',
  d11: 'M17.5195 8.83368C17.5195 7.34316 19.0542 6.66513 20.3729 7.1831C20.7348 7.32526 21.0474 7.58319 21.2498 7.9152C21.5982 8.48664 21.5902 9.08444 21.2651 9.70483C20.5896 10.994 19.4938 11.0569 19.4938 12.9904M19.4938 15.7659V14.2449',
  d12: 'M5.5 6.70588C5.5 4.23662 7.52311 2.25 10 2.25C12.4769 2.25 14.5 4.23662 14.5 6.70588C14.5 9.17514 12.4769 11.1618 10 11.1618C7.52311 11.1618 5.5 9.17514 5.5 6.70588Z',
  d13: 'M1.75 21C1.75 16.484 5.45204 12.8382 10 12.8382C14.548 12.8382 18.25 16.484 18.25 21V21.75H1.75V21Z',
  d14: 'M19.25 8C18.6208 8 18.25 8.45269 18.25 8.84615H16.25C16.25 7.20041 17.67 6 19.25 6C20.83 6 22.25 7.20041 22.25 8.84615C22.25 9.42962 22.0642 9.96985 21.7535 10.4157C21.5701 10.6787 21.3582 10.9264 21.1718 11.1403C21.1367 11.1806 21.1025 11.2196 21.0691 11.2577C20.9147 11.4341 20.7788 11.5895 20.6528 11.7494C20.3341 12.1536 20.25 12.384 20.25 12.5385V13H18.25V12.5385C18.25 11.6733 18.7086 10.9851 19.0821 10.5113C19.2431 10.307 19.4199 10.1052 19.575 9.92809C19.6056 9.89307 19.6355 9.85901 19.6642 9.8261C19.8493 9.61369 19.9973 9.4376 20.1128 9.27195C20.2031 9.14239 20.25 8.99774 20.25 8.84615C20.25 8.45269 19.8792 8 19.25 8ZM18.2402 14H20.2492V16H18.2402V14Z',
} as const;

export const IconUserQuestion02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-stroke-rounded IconUserQuestion02StrokeRounded"
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

export const IconUserQuestion02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-duotone-rounded IconUserQuestion02DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconUserQuestion02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-twotone-rounded IconUserQuestion02TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-solid-rounded IconUserQuestion02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-bulk-rounded IconUserQuestion02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-stroke-sharp IconUserQuestion02StrokeSharp"
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserQuestion02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-question-02-solid-sharp IconUserQuestion02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserQuestion02: TheIconSelfPack = {
  name: 'UserQuestion02',
  StrokeRounded: IconUserQuestion02StrokeRounded,
  DuotoneRounded: IconUserQuestion02DuotoneRounded,
  TwotoneRounded: IconUserQuestion02TwotoneRounded,
  SolidRounded: IconUserQuestion02SolidRounded,
  BulkRounded: IconUserQuestion02BulkRounded,
  StrokeSharp: IconUserQuestion02StrokeSharp,
  SolidSharp: IconUserQuestion02SolidSharp,
};