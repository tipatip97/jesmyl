import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 4.5C13 5.32843 12.3284 6 11.5 6C10.6716 6 10 5.32843 10 4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5Z',
  d2: 'M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329M18 8.34546L16.2639 9.34233C15.3862 9.84631 14.9473 10.0983 14.4623 10.1209C13.9774 10.1434 13.5172 9.93325 12.5969 9.5129L11.8137 9.15516M8.9329 14.9258H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516M8.9329 14.9258C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516',
  d3: 'M8.09216 8.57871C7.02913 9.76698 6.44708 11.5144 6.15728 12.9201C5.98421 13.7596 5.89768 14.1794 6.20005 14.5526C6.50242 14.9258 6.97669 14.9258 7.92524 14.9258H8.9329C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516L9.95232 8.30498C9.43598 8.06914 9.17781 7.95122 8.85504 8.01898C8.53228 8.08674 8.38558 8.25073 8.09216 8.57871Z',
  d4: 'M9 15C9.24141 13.6839 9.77474 10.958 11.5 9.5',
  d5: 'M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516L12.5969 9.5129C13.5172 9.93325 13.9774 10.1434 14.4623 10.1209C14.9473 10.0983 15.3862 9.84631 16.2639 9.34233L18 8.34546',
  d6: 'M9.24991 4.37476C9.24991 3.13212 10.2573 2.12476 11.4999 2.12476C12.7425 2.12476 13.7499 3.13212 13.7499 4.37476C13.7499 5.6174 12.7425 6.62476 11.4999 6.62476C10.2573 6.62476 9.24991 5.6174 9.24991 4.37476Z',
  d7: 'M12.9146 8.43159C13.3908 8.64911 13.7865 8.82932 14.0248 8.91316C14.2443 8.99035 14.3461 8.9987 14.416 8.99545C14.4858 8.9922 14.5866 8.97442 14.798 8.87714C15.0277 8.77152 15.3119 8.60942 15.766 8.34863L17.5021 7.35176C17.9811 7.07675 18.5923 7.24207 18.8673 7.72102C19.1423 8.19996 18.977 8.81116 18.498 9.08618L16.7275 10.1028C16.3181 10.3379 15.9553 10.5463 15.6338 10.6941C15.2852 10.8545 14.924 10.974 14.5089 10.9933C14.0938 11.0126 13.7231 10.9271 13.3611 10.7998C13.0273 10.6824 12.4522 10.4197 12.0229 10.2236C11.5197 10.795 11.0857 11.5534 10.7346 12.3645C10.5192 12.8622 10.3452 13.3559 10.2109 13.7993C10.7912 13.7992 11.3554 13.7991 11.7857 13.8626C12.2565 13.9319 12.8139 14.1058 13.1948 14.6369C13.5748 15.1667 13.5624 15.7499 13.4795 16.2181C13.4034 16.6474 13.2324 17.1628 13.0486 17.7165L11.8969 21.1884C11.723 21.7126 11.1571 21.9965 10.6329 21.8227C10.1087 21.6488 9.82472 21.0829 9.99861 20.5587L11.1295 17.1495C11.3413 16.5109 11.4669 16.112 11.5144 15.8443C11.2479 15.805 10.8374 15.7993 10.1671 15.7993L7.86315 15.7993C7.44349 15.7995 7.01297 15.7997 6.65311 15.7386C6.21799 15.6647 5.7716 15.4857 5.42312 15.0556C5.09212 14.647 4.99132 14.2021 5.00068 13.7634C5.00814 13.4134 5.08979 13.0183 5.16563 12.6514C5.46742 11.1875 6.1071 9.1714 7.34695 7.78548C7.60769 7.49186 7.99997 7.05023 8.64966 6.91383C9.30584 6.77607 9.8573 7.03209 10.27 7.22367L12.9146 8.43159Z',
  d8: 'M10.9477 21.0004L12.0786 17.5913C12.482 16.3752 12.6837 15.7671 12.3821 15.3467C12.0806 14.9263 11.4427 14.9263 10.167 14.9263H8.9329M18 8.3459L14.5 10.5004L11.6598 9.31695M8.9329 14.9263H7.92524C6.97669 14.9263 6.50242 14.9263 6.20005 14.553C5.89768 14.1798 5.98421 13.7601 6.15728 12.9206C6.44708 11.5148 7.43696 9.18852 8.5 8.00024L11.6598 9.31695M8.9329 14.9263C9.15804 13.6989 10.1303 10.8747 11.6598 9.31695',
  d9: 'M9.47919 4.75C9.47919 3.50736 10.4813 2.5 11.7175 2.5C12.9537 2.5 13.9558 3.50736 13.9558 4.75C13.9558 5.99264 12.9537 7 11.7175 7C10.4813 7 9.47919 5.99264 9.47919 4.75Z',
  d10: 'M8.17703 7.74998C8.38872 7.51211 8.72699 7.43497 9.02007 7.55773L14.6362 9.91019L17.7178 7.88182L18.5 9.15919L15.093 11.3889C14.8887 11.5153 14.6364 11.5353 14.4149 11.4425L12.0786 10.4639C11.5476 11.1162 11.0853 11.9519 10.7168 12.7965C10.4619 13.3806 10.2614 13.9467 10.1183 14.4261H10.3914L10.4451 14.426C11.0335 14.426 11.5558 14.4259 11.9654 14.4866C12.4054 14.5518 12.8796 14.7085 13.2013 15.1593C13.5223 15.6092 13.5193 16.1109 13.4417 16.5512C13.3693 16.9621 13.2043 17.462 13.018 18.0263L13.018 18.0263L11.8762 21.5L10.4599 21.0277L11.5849 17.6049C11.7931 16.974 11.9213 16.5795 11.9724 16.2896C11.9963 16.1534 11.9949 16.0816 11.9907 16.0482C11.9899 16.0416 11.989 16.0371 11.9883 16.0343C11.986 16.0329 11.9825 16.0309 11.9775 16.0285C11.9487 16.0144 11.8827 15.9906 11.7479 15.9706C11.4603 15.928 11.0502 15.9261 10.3914 15.9261H8.16132L8.10961 15.9261C7.6827 15.9262 7.27391 15.9262 6.93733 15.8688C6.54431 15.8018 6.16297 15.6442 5.86537 15.2749C5.58081 14.9219 5.49219 14.5386 5.50053 14.1454C5.50745 13.8191 5.58428 13.4451 5.66143 13.0695L5.67181 13.0189C5.83036 12.2458 6.17042 11.2576 6.60151 10.3153C7.03036 9.37789 7.57765 8.42346 8.17703 7.74998Z',
} as const;

export const IconWorkoutSquatsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-stroke-rounded IconWorkoutSquatsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkoutSquatsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-duotone-rounded IconWorkoutSquatsDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconWorkoutSquatsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-twotone-rounded IconWorkoutSquatsTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutSquatsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-solid-rounded IconWorkoutSquatsSolidRounded"
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

export const IconWorkoutSquatsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-bulk-rounded IconWorkoutSquatsBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutSquatsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-stroke-sharp IconWorkoutSquatsStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutSquatsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-squats-solid-sharp IconWorkoutSquatsSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkoutSquats: TheIconSelfPack = {
  name: 'WorkoutSquats',
  StrokeRounded: IconWorkoutSquatsStrokeRounded,
  DuotoneRounded: IconWorkoutSquatsDuotoneRounded,
  TwotoneRounded: IconWorkoutSquatsTwotoneRounded,
  SolidRounded: IconWorkoutSquatsSolidRounded,
  BulkRounded: IconWorkoutSquatsBulkRounded,
  StrokeSharp: IconWorkoutSquatsStrokeSharp,
  SolidSharp: IconWorkoutSquatsSolidSharp,
};