import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M18.0937 4.61331V3.51847C18.0937 2.67984 18.7233 2 19.5 2C20.0636 2 20.5498 2.35805 20.7741 2.875M19.0312 9H19.9688C20.6983 9 21.0631 9 21.3392 8.84062C21.5573 8.71478 21.7359 8.52195 21.8524 8.28652C22 7.98834 22 7.59445 22 6.80665C22 6.01886 22 5.62496 21.8524 5.32679C21.7359 5.09136 21.5573 4.89853 21.3392 4.77269C21.0631 4.61331 20.6983 4.61331 19.9688 4.61331H19.0312C18.3017 4.61331 17.9369 4.61331 17.6608 4.77269C17.4427 4.89853 17.2641 5.09136 17.1476 5.32679C17 5.62496 17 6.01886 17 6.80665C17 7.59445 17 7.98834 17.1476 8.28652C17.2641 8.52195 17.4427 8.71478 17.6608 8.84062C17.9369 9 18.3017 9 19.0312 9Z',
  d4: 'M17 6.80663C17 6.01883 17 5.62494 17.1476 5.32676C17.2641 5.09133 17.4427 4.8985 17.6608 4.77266C17.9369 4.61328 18.3017 4.61328 19.0312 4.61328H19.9688C20.6983 4.61328 21.0631 4.61328 21.3392 4.77266C21.5573 4.8985 21.7359 5.09133 21.8524 5.32676C22 5.62494 22 6.01883 22 6.80663C22 7.59442 22 7.98832 21.8524 8.28649C21.7359 8.52192 21.5573 8.71475 21.3392 8.8406C21.0631 8.99997 20.6983 8.99997 19.9688 8.99997H19.0312C18.3017 8.99997 17.9369 8.99997 17.6608 8.8406C17.4427 8.71475 17.2641 8.52192 17.1476 8.28649C17 7.98832 17 7.59442 17 6.80663Z',
  d5: 'M4.85471 15.0947C8.03791 13.2289 12.0699 13.2289 15.2531 15.0947C15.3539 15.1537 15.4794 15.2234 15.6223 15.3027C16.2549 15.6539 17.2268 16.1934 17.8922 16.8346C18.3077 17.2349 18.7172 17.7756 18.792 18.449C18.8721 19.1705 18.5498 19.8364 17.9335 20.4144C16.8834 21.3992 15.6155 22.1953 13.9731 22.1953H6.13467C4.49233 22.1953 3.22442 21.3992 2.17433 20.4144C1.55801 19.8364 1.23566 19.1705 1.31578 18.449C1.39056 17.7756 1.80011 17.2349 2.2156 16.8346C2.88099 16.1934 3.8529 15.6539 4.48554 15.3027C4.62836 15.2234 4.75391 15.1537 4.85471 15.0947Z',
  d6: 'M5.30396 7.44531C5.30396 4.82196 7.4306 2.69531 10.054 2.69531C12.6773 2.69531 14.804 4.82196 14.804 7.44531C14.804 10.0687 12.6773 12.1953 10.054 12.1953C7.4306 12.1953 5.30396 10.0687 5.30396 7.44531Z',
  d7: 'M17.5049 3.96601C17.5049 2.81971 18.3767 1.80469 19.554 1.80469C20.4041 1.80469 21.1043 2.34395 21.4178 3.06666C21.5592 3.39237 21.4097 3.77096 21.084 3.91228C20.7583 4.0536 20.3797 3.90413 20.2384 3.57843C20.1033 3.26724 19.8311 3.0904 19.554 3.0904C19.178 3.0904 18.7906 3.43506 18.7906 3.96601V4.41843C18.8765 4.41799 18.9657 4.41799 19.058 4.41799L19.0852 4.418L20.05 4.41799H20.05C20.3915 4.41798 20.6902 4.41797 20.9368 4.44061C21.1997 4.46475 21.4635 4.51856 21.7146 4.66345C22.0474 4.85556 22.3123 5.14526 22.4825 5.48914C22.6081 5.74288 22.655 6.00832 22.6764 6.28018C22.6969 6.53983 22.6969 6.85668 22.6968 7.22966V7.22966V7.27873V7.27874C22.6969 7.65172 22.6969 7.96857 22.6764 8.22822C22.655 8.50008 22.6081 8.76552 22.4825 9.01925C22.3123 9.36314 22.0474 9.65284 21.7146 9.84494C21.4635 9.98984 21.1997 10.0436 20.9368 10.0678C20.6903 10.0904 20.3915 10.0904 20.0501 10.0904H20.05H19.058H19.0579C18.7165 10.0904 18.4177 10.0904 18.1712 10.0678C17.9083 10.0436 17.6444 9.98984 17.3934 9.84494C17.0606 9.65284 16.7957 9.36314 16.6255 9.01925C16.4999 8.76552 16.453 8.50008 16.4316 8.22822C16.4111 7.96857 16.4111 7.65173 16.4111 7.27875V7.27873V7.22966V7.22964C16.4111 6.85667 16.4111 6.53983 16.4316 6.28018C16.453 6.00832 16.4999 5.74288 16.6255 5.48914C16.7957 5.14526 17.0606 4.85556 17.3934 4.66345C17.4303 4.64216 17.4675 4.62283 17.5049 4.60527V3.96601Z',
  d8: 'M2 20.9997H17C17 16.9063 13.6421 13.5879 9.5 13.5879C5.35786 13.5879 2 16.9063 2 20.9997Z',
  d9: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d10: 'M17.3022 7.9879V6.7786C17.3022 5.79674 18.0665 5.03328 18.9151 5.00269C19.155 4.99404 19.6363 5.00269 20.1007 5.41216M16 7.9879H22V12.9986H16V7.9879Z',
  d11: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d12: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d13: 'M16.5625 6.73539C16.5625 5.38267 17.6342 4.25 19 4.25C19.6106 4.25 20.168 4.47975 20.5929 4.85405L19.6015 5.97964C19.4363 5.8342 19.2272 5.75 19 5.75C18.5019 5.75 18.0625 6.17125 18.0625 6.73539V7.25H22.75V13.75H15.25V7.25H16.5625V6.73539Z',
} as const;

export const IconUserUnlock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-stroke-rounded IconUserUnlock02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserUnlock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-duotone-rounded IconUserUnlock02DuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-twotone-rounded IconUserUnlock02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserUnlock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-solid-rounded IconUserUnlock02SolidRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-bulk-rounded IconUserUnlock02BulkRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserUnlock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-stroke-sharp IconUserUnlock02StrokeSharp"
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

export const IconUserUnlock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-unlock-02-solid-sharp IconUserUnlock02SolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserUnlock02: TheIconSelfPack = {
  name: 'UserUnlock02',
  StrokeRounded: IconUserUnlock02StrokeRounded,
  DuotoneRounded: IconUserUnlock02DuotoneRounded,
  TwotoneRounded: IconUserUnlock02TwotoneRounded,
  SolidRounded: IconUserUnlock02SolidRounded,
  BulkRounded: IconUserUnlock02BulkRounded,
  StrokeSharp: IconUserUnlock02StrokeSharp,
  SolidSharp: IconUserUnlock02SolidSharp,
};