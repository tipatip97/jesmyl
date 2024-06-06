import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z',
  d2: 'M18.5 8L18.5 2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5',
  d3: 'M6.56349 19.4746L4.56826 16.9774C3.55904 15.491 3.05442 14.7477 3.00616 13.9354C2.991 13.6803 3.0091 13.4244 3.06001 13.1738C3.22215 12.3758 3.82652 11.7082 5.03527 10.3729L6.50097 8.99817V3.49817C6.50097 2.66974 7.17254 1.99817 8.00097 1.99817C8.8294 1.99817 9.50097 2.66974 9.50097 3.49817V7.99817H10.501C11.6056 7.99817 12.501 8.8936 12.501 9.99817V8.99817H13.501C14.6056 8.99817 15.501 9.8936 15.501 10.9982V9.99817L16.8298 10.2197C17.7935 10.3803 18.5001 11.2137 18.501 12.1905V13.8329C18.501 15.8488 18.501 16.8568 18.2093 17.6662C17.9832 18.2935 17.6352 18.8619 17.1926 19.3444C16.7591 19.817 16.4314 20.4018 16.4314 21.0431V21.9982H7.00097V20.723C7.00097 20.2693 6.8467 19.8291 6.56349 19.4746Z',
  d4: 'M18.501 7.99817V1.99817M18.501 7.99817C17.8008 7.99817 16.4925 6.00387 16.001 5.49817M18.501 7.99817C19.2012 7.99817 20.5095 6.00387 21.001 5.49817',
  d5: 'M6.51184 13.5149V3.48587C6.51184 2.66424 7.17868 1.99817 8.00127 1.99817C8.82386 1.99817 9.4907 2.66423 9.4907 3.48587V8.68796M9.4907 8.68796V11.0116M9.4907 8.68796C10.2956 7.56953 12.0982 7.94205 12.4819 9.68091C12.4882 9.70978 12.4934 9.73886 12.4976 9.7681M12.4976 9.7681C12.5088 9.84631 12.5127 9.92562 12.5127 10.0047V11.0076M12.4976 9.7681C12.9908 8.41774 15.5018 8.92645 15.5018 10.861M15.5018 10.861V12.007M15.5018 10.861C15.9058 9.37047 18.5576 10.4122 18.5002 12.1546V15.3331C18.4972 17.0591 18.2091 18.3107 17.183 19.3401C16.235 20.4719 16.458 21.1055 16.4344 22.0018M6.51184 8.99062C5.19291 10.1845 3.69593 11.816 3.5048 12.2024C2.61549 13.5545 2.93178 14.6154 4.1956 16.4176C5.13613 17.7588 6.39761 19.2535 6.46369 19.3283C7.13629 20.0897 7.00448 20.6959 7.00448 21.9908',
  d6: 'M7.25514 4.75C7.25514 3.36929 8.37442 2.25 9.75514 2.25C11.1358 2.25 12.2551 3.36929 12.2551 4.75V9.36036L14.6078 9.73641L14.6306 9.73982C15.5726 9.88112 16.3158 9.9926 16.9068 10.121C17.5075 10.2515 18.0095 10.4108 18.4506 10.6751C19.7281 11.4404 20.75 12.6633 20.75 14.4736C20.75 15.5606 20.4875 16.3446 19.9726 17.8824C19.6188 18.9448 19.2216 20.1359 18.8418 20.6888C18.218 21.5973 17.2978 22.2605 16.2388 22.565C15.5941 22.7504 14.8759 22.7503 13.7561 22.75L12.4266 22.75H12.4265C10.9341 22.7505 9.97018 22.7507 9.09879 22.3915C8.94285 22.3273 8.79043 22.2547 8.6422 22.1742C7.81393 21.7244 7.20629 20.9761 6.26549 19.8175L2.80732 15.5613C2.06869 14.6522 2.06376 13.3511 2.79549 12.4365C3.67497 11.3371 5.29041 11.1853 6.35934 12.1015L7.25514 12.8693V4.75Z',
  d7: 'M19.5059 2.24996C19.5059 1.69768 19.0581 1.24996 18.5059 1.24996C17.9536 1.24996 17.5059 1.69768 17.5059 2.24996L17.5059 4.75L16.9116 4.74998C16.736 4.74986 16.5203 4.7497 16.3439 4.77177L16.3405 4.77219C16.2141 4.78796 15.638 4.85979 15.3637 5.42539C15.0887 5.99221 15.3907 6.49235 15.456 6.60056L15.7951 7.06905C16.0897 7.44487 16.4954 7.95933 16.8759 8.35034C17.0657 8.54545 17.283 8.74669 17.5139 8.90553C17.7191 9.04674 18.0693 9.25 18.5 9.25C18.9307 9.25 19.2809 9.04674 19.4861 8.90553C19.717 8.74669 19.9343 8.54545 20.1241 8.35034C20.5046 7.95933 20.9102 7.44488 21.2049 7.06905L21.544 6.60056C21.6093 6.49235 21.9113 5.99221 21.6363 5.42539C21.362 4.85979 20.7859 4.78796 20.6595 4.77219L20.6561 4.77177C20.4797 4.7497 20.264 4.74986 20.0884 4.74998L19.5059 4.75L19.5059 2.24996Z',
  d8: 'M18.5037 2.00024V7.27794M16.0078 5.49818L18.5037 7.99671L20.9997 5.49818',
  d9: 'M5.90058 12.6642L8.08842 14.5334V4.61119C8.08842 3.68424 8.92035 2.98657 9.86882 2.98657C10.8168 2.98657 11.5115 3.73712 11.5123 4.6635V10.4965H16.1594C17.7396 10.4965 19.1415 12.0275 19.0243 13.6117V19.2038C19.0243 20.748 17.7433 21.9998 16.163 21.9998H8.07988L3.39423 15.0833C2.87304 14.4476 2.86956 13.538 3.38588 12.8984C4.00645 12.1298 5.14632 12.0235 5.90058 12.6642Z',
  d10: 'M7.25416 4.75C7.25416 3.36929 8.37345 2.25 9.75416 2.25C11.1349 2.25 12.2542 3.36929 12.2542 4.75V9.72757H15.999C18.0701 9.72757 19.749 11.4065 19.749 13.4776V19C19.749 21.0711 18.0701 22.75 15.999 22.75H7.99902C7.74833 22.75 7.51422 22.6247 7.3751 22.4162L2.78236 15.5313C2.06769 14.6238 2.07079 13.3411 2.79451 12.4365C3.674 11.3371 5.28943 11.1853 6.35836 12.1015L7.25416 12.8693V4.75Z',
  d11: 'M19.543 1.25L19.543 4.83579L20.3359 4.04289L21.7502 5.45711L18.543 8.66421L15.3359 5.45711L16.7502 4.04289L17.543 4.83579L17.543 1.25H19.543Z',
};

export const IconSwipeDown03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-stroke-rounded IconSwipeDown03StrokeRounded"
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

export const IconSwipeDown03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-duotone-rounded IconSwipeDown03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-twotone-rounded IconSwipeDown03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeDown03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-solid-rounded IconSwipeDown03SolidRounded"
    >
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

export const IconSwipeDown03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-bulk-rounded IconSwipeDown03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeDown03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-stroke-sharp IconSwipeDown03StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSwipeDown03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-03-solid-sharp IconSwipeDown03SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeDown03: TheIconSelfPack = {
  name: 'SwipeDown03',
  StrokeRounded: IconSwipeDown03StrokeRounded,
  DuotoneRounded: IconSwipeDown03DuotoneRounded,
  TwotoneRounded: IconSwipeDown03TwotoneRounded,
  SolidRounded: IconSwipeDown03SolidRounded,
  BulkRounded: IconSwipeDown03BulkRounded,
  StrokeSharp: IconSwipeDown03StrokeSharp,
  SolidSharp: IconSwipeDown03SolidSharp,
};