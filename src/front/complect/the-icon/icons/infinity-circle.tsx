import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12C12 12 10.3569 14.5 8.7 14.5C7.04315 14.5 6 13.3807 6 12C6 10.6193 7.04315 9.5 8.7 9.5C10.3569 9.5 12 12 12 12ZM12 12C12 12 13.6431 14.5 15.3 14.5C16.9569 14.5 18 13.3807 18 12C18 10.6193 16.9569 9.5 15.3 9.5C13.6431 9.5 12 12 12 12Z',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7 12C7 11.203 7.56345 10.5 8.7 10.5C8.86652 10.5 9.09875 10.5656 9.39662 10.746C9.68924 10.9232 9.98532 11.175 10.2602 11.4531C10.4461 11.6411 10.6124 11.831 10.7509 12C10.6124 12.169 10.4461 12.3589 10.2602 12.5469C9.98532 12.825 9.68924 13.0768 9.39662 13.254C9.09875 13.4344 8.86652 13.5 8.7 13.5C7.56345 13.5 7 12.797 7 12ZM13.7398 12.5469C13.5539 12.3589 13.3876 12.169 13.2491 12C13.3876 11.831 13.5539 11.6411 13.7398 11.4531C14.0147 11.175 14.3108 10.9232 14.6034 10.746C14.9012 10.5656 15.1335 10.5 15.3 10.5C16.4366 10.5 17 11.203 17 12C17 12.797 16.4366 13.5 15.3 13.5C15.1335 13.5 14.9012 13.4344 14.6034 13.254C14.3108 13.0768 14.0147 12.825 13.7398 12.5469ZM11.6825 13.9531C11.7951 13.8391 11.9013 13.7255 12 13.6153C12.0987 13.7255 12.2049 13.8391 12.3175 13.9531C12.6606 14.3 13.0859 14.6732 13.5674 14.9648C14.0436 15.2531 14.6381 15.5 15.3 15.5C17.4772 15.5 19 13.9644 19 12C19 10.0356 17.4772 8.5 15.3 8.5C14.6381 8.5 14.0436 8.74686 13.5674 9.03524C13.0859 9.32679 12.6606 9.69997 12.3175 10.0469C12.2049 10.1609 12.0987 10.2745 12 10.3847C11.9013 10.2745 11.7951 10.1609 11.6825 10.0469C11.3394 9.69997 10.9141 9.32679 10.4326 9.03524C9.95639 8.74686 9.3619 8.5 8.7 8.5C6.52284 8.5 5 10.0356 5 12C5 13.9644 6.52284 15.5 8.7 15.5C9.3619 15.5 9.95639 15.2531 10.4326 14.9648C10.9141 14.6732 11.3394 14.3 11.6825 13.9531Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M8.7 10.5C7.56345 10.5 7 11.203 7 12C7 12.797 7.56345 13.5 8.7 13.5C8.86652 13.5 9.09875 13.4344 9.39662 13.254C9.68924 13.0768 9.98532 12.825 10.2602 12.5469C10.4461 12.3589 10.6124 12.169 10.7509 12C10.6124 11.831 10.4461 11.6411 10.2602 11.4531C9.98532 11.175 9.68924 10.9232 9.39662 10.746C9.09875 10.5656 8.86652 10.5 8.7 10.5ZM13.2491 12C13.3876 12.169 13.5539 12.3589 13.7398 12.5469C14.0147 12.825 14.3108 13.0768 14.6034 13.254C14.9012 13.4344 15.1335 13.5 15.3 13.5C16.4366 13.5 17 12.797 17 12C17 11.203 16.4366 10.5 15.3 10.5C15.1335 10.5 14.9012 10.5656 14.6034 10.746C14.3108 10.9232 14.0147 11.175 13.7398 11.4531C13.5539 11.6411 13.3876 11.831 13.2491 12ZM12 13.6153C11.9013 13.7255 11.7951 13.8391 11.6825 13.9531C11.3394 14.3 10.9141 14.6732 10.4326 14.9648C9.95639 15.2531 9.3619 15.5 8.7 15.5C6.52284 15.5 5 13.9644 5 12C5 10.0356 6.52284 8.5 8.7 8.5C9.3619 8.5 9.95639 8.74686 10.4326 9.03524C10.9141 9.32679 11.3394 9.69997 11.6825 10.0469C11.7951 10.1609 11.9013 10.2745 12 10.3847C12.0987 10.2745 12.2049 10.1609 12.3175 10.0469C12.6606 9.69997 13.0859 9.32679 13.5674 9.03524C14.0436 8.74686 14.6381 8.5 15.3 8.5C17.4772 8.5 19 10.0356 19 12C19 13.9644 17.4772 15.5 15.3 15.5C14.6381 15.5 14.0436 15.2531 13.5674 14.9648C13.0859 14.6732 12.6606 14.3 12.3175 13.9531C12.2049 13.8391 12.0987 13.7255 12 13.6153Z',
  d5: 'M7 12C7 11.203 7.56345 10.5 8.7 10.5C8.86652 10.5 9.09875 10.5656 9.39662 10.746C9.68924 10.9232 9.98532 11.175 10.2602 11.4531C10.4461 11.6411 10.6124 11.831 10.7509 12C10.6124 12.169 10.4461 12.3589 10.2602 12.5469C9.98532 12.825 9.68924 13.0768 9.39662 13.254C9.09875 13.4344 8.86652 13.5 8.7 13.5C7.56345 13.5 7 12.797 7 12Z',
  d6: 'M13.7398 12.5469C13.5539 12.3589 13.3876 12.169 13.2491 12C13.3876 11.831 13.5539 11.6411 13.7398 11.4531C14.0147 11.175 14.3108 10.9232 14.6034 10.746C14.9012 10.5656 15.1335 10.5 15.3 10.5C16.4366 10.5 17 11.203 17 12C17 12.797 16.4366 13.5 15.3 13.5C15.1335 13.5 14.9012 13.4344 14.6034 13.254C14.3108 13.0768 14.0147 12.825 13.7398 12.5469Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.6825 13.9531C11.7951 13.8391 11.9013 13.7255 12 13.6153C12.0987 13.7255 12.2049 13.8391 12.3175 13.9531C12.6606 14.3 13.0859 14.6732 13.5674 14.9648C14.0436 15.2531 14.6381 15.5 15.3 15.5C17.4772 15.5 19 13.9644 19 12C19 10.0356 17.4772 8.5 15.3 8.5C14.6381 8.5 14.0436 8.74686 13.5674 9.03524C13.0859 9.32679 12.6606 9.69997 12.3175 10.0469C12.2049 10.1609 12.0987 10.2745 12 10.3847C11.9013 10.2745 11.7951 10.1609 11.6825 10.0469C11.3394 9.69997 10.9141 9.32679 10.4326 9.03524C9.95639 8.74686 9.3619 8.5 8.7 8.5C6.52284 8.5 5 10.0356 5 12C5 13.9644 6.52284 15.5 8.7 15.5C9.3619 15.5 9.95639 15.2531 10.4326 14.9648C10.9141 14.6732 11.3394 14.3 11.6825 13.9531Z',
} as const;

export const IconInfinityCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-stroke-rounded IconInfinityCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconInfinityCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-duotone-rounded IconInfinityCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinityCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-twotone-rounded IconInfinityCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconInfinityCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-solid-rounded IconInfinityCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinityCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-bulk-rounded IconInfinityCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinityCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-stroke-sharp IconInfinityCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconInfinityCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-circle-solid-sharp IconInfinityCircleSolidSharp"
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

export const iconPackOfInfinityCircle: TheIconSelfPack = {
  name: 'InfinityCircle',
  StrokeRounded: IconInfinityCircleStrokeRounded,
  DuotoneRounded: IconInfinityCircleDuotoneRounded,
  TwotoneRounded: IconInfinityCircleTwotoneRounded,
  SolidRounded: IconInfinityCircleSolidRounded,
  BulkRounded: IconInfinityCircleBulkRounded,
  StrokeSharp: IconInfinityCircleStrokeSharp,
  SolidSharp: IconInfinityCircleSolidSharp,
};