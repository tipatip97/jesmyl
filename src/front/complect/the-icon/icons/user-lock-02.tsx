import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M20.9062 4.61331V3.51847C20.9062 2.67984 20.2767 2 19.5 2C18.7233 2 18.0937 2.67984 18.0937 3.51847V4.61331M19.0312 9H19.9688C20.6983 9 21.0631 9 21.3392 8.84062C21.5573 8.71478 21.7359 8.52195 21.8524 8.28652C22 7.98834 22 7.59445 22 6.80665C22 6.01886 22 5.62496 21.8524 5.32679C21.7359 5.09136 21.5573 4.89853 21.3392 4.77269C21.0631 4.61331 20.6983 4.61331 19.9688 4.61331H19.0312C18.3017 4.61331 17.9369 4.61331 17.6608 4.77269C17.4427 4.89853 17.2641 5.09136 17.1476 5.32679C17 5.62496 17 6.01886 17 6.80665C17 7.59445 17 7.98834 17.1476 8.28652C17.2641 8.52195 17.4427 8.71478 17.6608 8.84062C17.9369 9 18.3017 9 19.0312 9Z',
  d4: 'M17 6.80663C17 6.01883 17 5.62494 17.1476 5.32676C17.2641 5.09133 17.4427 4.8985 17.6608 4.77266C17.9369 4.61328 18.3017 4.61328 19.0312 4.61328H19.9688C20.6983 4.61328 21.0631 4.61328 21.3392 4.77266C21.5573 4.8985 21.7359 5.09133 21.8524 5.32676C22 5.62494 22 6.01883 22 6.80663C22 7.59442 22 7.98832 21.8524 8.28649C21.7359 8.52192 21.5573 8.71475 21.3392 8.8406C21.0631 8.99997 20.6983 8.99997 19.9688 8.99997H19.0312C18.3017 8.99997 17.9369 8.99997 17.6608 8.8406C17.4427 8.71475 17.2641 8.52192 17.1476 8.28649C17 7.98832 17 7.59442 17 6.80663Z',
  d5: 'M4.85471 15.0986C8.03791 13.2328 12.0699 13.2328 15.2531 15.0986C15.3539 15.1577 15.4794 15.2273 15.6223 15.3066C16.2549 15.6578 17.2268 16.1973 17.8922 16.8385C18.3077 17.2388 18.7172 17.7796 18.792 18.4529C18.8721 19.1745 18.5498 19.8403 17.9335 20.4183C16.8834 21.4031 15.6155 22.1992 13.9731 22.1992H6.13467C4.49233 22.1992 3.22442 21.4031 2.17433 20.4183C1.55801 19.8403 1.23566 19.1745 1.31578 18.4529C1.39056 17.7796 1.80011 17.2388 2.2156 16.8385C2.88099 16.1973 3.8529 15.6578 4.48554 15.3066C4.62836 15.2273 4.75391 15.1576 4.85471 15.0986Z',
  d6: 'M5.3039 7.44922C5.3039 4.82587 7.43055 2.69922 10.0539 2.69922C12.6773 2.69922 14.8039 4.82587 14.8039 7.44922C14.8039 10.0726 12.6773 12.1992 10.0539 12.1992C7.43055 12.1992 5.3039 10.0726 5.3039 7.44922Z',
  d7: 'M19.554 1.80469C18.3767 1.80469 17.5049 2.81971 17.5049 3.96601V4.60524C17.4675 4.6228 17.4303 4.64213 17.3934 4.66343C17.0606 4.85553 16.7957 5.14523 16.6255 5.48912C16.4999 5.74286 16.453 6.0083 16.4316 6.28015C16.4111 6.5398 16.4111 6.85663 16.4111 7.2296V7.27871C16.4111 7.65168 16.4111 7.96855 16.4316 8.2282C16.453 8.50005 16.4999 8.76549 16.6255 9.01923C16.7957 9.36312 17.0606 9.65281 17.3934 9.84492C17.6444 9.98981 17.9083 10.0436 18.1712 10.0678C18.4177 10.0904 18.7165 10.0904 19.058 10.0904H20.05C20.3915 10.0904 20.6902 10.0904 20.9368 10.0678C21.1997 10.0436 21.4635 9.98981 21.7146 9.84492C22.0474 9.65281 22.3123 9.36312 22.4825 9.01923C22.6081 8.76549 22.655 8.50005 22.6764 8.22819C22.6969 7.96854 22.6969 7.6517 22.6968 7.27872V7.22964C22.6969 6.85666 22.6969 6.53981 22.6764 6.28015C22.655 6.0083 22.6081 5.74286 22.4825 5.48912C22.3123 5.14523 22.0474 4.85553 21.7146 4.66343C21.6777 4.64213 21.6405 4.6228 21.6031 4.60524V3.96601C21.6031 2.81971 20.7313 1.80469 19.554 1.80469ZM20.3174 4.4184V3.96601C20.3174 3.43506 19.93 3.0904 19.554 3.0904C19.178 3.0904 18.7906 3.43506 18.7906 3.96601V4.4184C18.8765 4.41796 18.9656 4.41796 19.0579 4.41797H20.05C20.1423 4.41796 20.2315 4.41796 20.3174 4.4184Z',
  d8: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d9: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d10: 'M17.5 8V6.5C17.5 5.67157 18.1716 5 19 5C19.8284 5 20.5 5.67157 20.5 6.5V8M16 8H22V13H16V8Z',
  d11: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d12: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d13: 'M21.25 7.25V6.5C21.25 5.25736 20.2426 4.25 19 4.25C17.7574 4.25 16.75 5.25736 16.75 6.5V7.25H15.25V13.75H22.75V7.25H21.25ZM18.25 6.5C18.25 6.08579 18.5858 5.75 19 5.75C19.4142 5.75 19.75 6.08579 19.75 6.5V7.25H18.25V6.5Z',
};

export const IconUserLock02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-stroke-rounded IconUserLock02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserLock02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-duotone-rounded IconUserLock02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconUserLock02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-twotone-rounded IconUserLock02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserLock02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-solid-rounded IconUserLock02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserLock02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-bulk-rounded IconUserLock02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserLock02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-stroke-sharp IconUserLock02StrokeSharp"
    >
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLock02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-02-solid-sharp IconUserLock02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserLock02: TheIconSelfPack = {
  name: 'UserLock02',
  StrokeRounded: IconUserLock02StrokeRounded,
  DuotoneRounded: IconUserLock02DuotoneRounded,
  TwotoneRounded: IconUserLock02TwotoneRounded,
  SolidRounded: IconUserLock02SolidRounded,
  BulkRounded: IconUserLock02BulkRounded,
  StrokeSharp: IconUserLock02StrokeSharp,
  SolidSharp: IconUserLock02SolidSharp,
};