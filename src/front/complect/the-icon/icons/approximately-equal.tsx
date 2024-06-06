import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 7.927C6.66667 4.9281 9.33333 5.80578 12 8C14.6667 10.1942 17.3333 11.0719 20 8.073',
  d2: 'M4 15.927C6.66667 12.9281 9.33333 13.8058 12 16C14.6667 18.1942 17.3333 19.0719 20 16.073',
  d3: 'M7.91124 7.01226C6.96629 6.92804 5.92409 7.26822 4.7473 8.59162C4.38031 9.00434 3.74823 9.0414 3.33551 8.67441C2.92279 8.30742 2.88573 7.67534 3.25272 7.26262C4.7426 5.58713 6.36706 4.8667 8.08879 5.02015C9.72713 5.16618 11.2543 6.0915 12.6354 7.22793C13.9209 8.28572 15.0605 8.89635 16.0888 8.988C17.0337 9.07222 18.0759 8.73204 19.2527 7.40863C19.6197 6.99592 20.2518 6.95885 20.6645 7.32584C21.0772 7.69284 21.1143 8.32492 20.7473 8.73763C19.2574 10.4131 17.633 11.1336 15.9112 10.9801C14.2729 10.8341 12.7457 9.90875 11.3646 8.77232C10.0791 7.71453 8.93956 7.10391 7.91124 7.01226Z',
  d4: 'M7.91124 15.0123C6.96629 14.928 5.92409 15.2682 4.7473 16.5916C4.38031 17.0043 3.74823 17.0414 3.33551 16.6744C2.92279 16.3074 2.88573 15.6753 3.25272 15.2626C4.7426 13.5871 6.36706 12.8667 8.08879 13.0202C9.72713 13.1662 11.2543 14.0915 12.6354 15.2279C13.9209 16.2857 15.0605 16.8963 16.0888 16.988C17.0337 17.0722 18.0759 16.732 19.2527 15.4086C19.6197 14.9959 20.2518 14.9589 20.6645 15.3258C21.0772 15.6928 21.1143 16.3249 20.7473 16.7376C19.2574 18.4131 17.633 19.1336 15.9112 18.9801C14.2729 18.8341 12.7457 17.9088 11.3646 16.7723C10.0791 15.7145 8.93956 15.1039 7.91124 15.0123Z',
  d5: 'M7.88904 7.26131C7.0412 7.18574 6.07178 7.47839 4.93412 8.75778C4.47538 9.27368 3.68528 9.32001 3.16939 8.86127C2.65349 8.40253 2.60716 7.61243 3.0659 7.09653C4.59491 5.37703 6.29216 4.60907 8.11098 4.77118C9.82558 4.92399 11.4012 5.88866 12.7942 7.03492C14.0678 8.08288 15.1589 8.65416 16.111 8.73902C16.9588 8.81459 17.9282 8.52194 19.0659 7.24254C19.5246 6.72665 20.3147 6.68032 20.8306 7.13906C21.3465 7.5978 21.3929 8.3879 20.9341 8.90379C19.4051 10.6233 17.7079 11.3913 15.889 11.2291C14.1744 11.0763 12.5988 10.1117 11.2058 8.96541C9.93218 7.91745 8.84112 7.34616 7.88904 7.26131Z',
  d6: 'M7.88904 15.2613C7.0412 15.1857 6.07178 15.4784 4.93412 16.7578C4.47538 17.2737 3.68528 17.32 3.16939 16.8613C2.65349 16.4025 2.60716 15.6124 3.0659 15.0965C4.59491 13.377 6.29216 12.6091 8.11098 12.7712C9.82558 12.924 11.4012 13.8887 12.7942 15.0349C14.0678 16.0829 15.1589 16.6542 16.111 16.739C16.9588 16.8146 17.9282 16.5219 19.0659 15.2425C19.5246 14.7266 20.3147 14.6803 20.8306 15.1391C21.3465 15.5978 21.3929 16.3879 20.9341 16.9038C19.4051 18.6233 17.7079 19.3913 15.889 19.2291C14.1744 19.0763 12.5988 18.1117 11.2058 16.9654C9.93218 15.9174 8.84112 15.3462 7.88904 15.2613Z',
  d7: 'M7.91047 7.01226C6.96552 6.92804 5.92332 7.26822 4.74653 8.59162L3.5 6.99377C4.92154 5.51023 6.46137 4.87518 8.08802 5.02015C9.72636 5.16618 11.2535 6.0915 12.6346 7.22793C13.9202 8.28572 15.0597 8.89635 16.088 8.988C17.033 9.07222 18.0752 8.73204 19.252 7.40863L20.5 9V9.0049C19.078 10.4896 17.5377 11.1251 15.9105 10.9801C14.2721 10.8341 12.745 9.90875 11.3639 8.77232C10.0783 7.71453 8.93879 7.10391 7.91047 7.01226Z',
  d8: 'M7.91047 15.0123C6.96552 14.928 5.92332 15.2682 4.74653 16.5916L3.5 14.9938C4.92154 13.5102 6.46137 12.8752 8.08802 13.0202C9.72636 13.1662 11.2535 14.0915 12.6346 15.2279C13.9202 16.2857 15.0597 16.8963 16.088 16.988C17.033 17.0722 18.0752 16.732 19.252 15.4086L20.5 17V17.0049C19.078 18.4896 17.5377 19.1251 15.9105 18.9801C14.2721 18.8341 12.745 17.9088 11.3639 16.7723C10.0783 15.7145 8.93879 15.1039 7.91047 15.0123Z',
};

export const IconApproximatelyEqualStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-stroke-rounded IconApproximatelyEqualStrokeRounded"
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

export const IconApproximatelyEqualDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-duotone-rounded IconApproximatelyEqualDuotoneRounded"
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

export const IconApproximatelyEqualTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-twotone-rounded IconApproximatelyEqualTwotoneRounded"
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

export const IconApproximatelyEqualSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-solid-rounded IconApproximatelyEqualSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconApproximatelyEqualBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-bulk-rounded IconApproximatelyEqualBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconApproximatelyEqualStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-stroke-sharp IconApproximatelyEqualStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconApproximatelyEqualSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="approximately-equal-solid-sharp IconApproximatelyEqualSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfApproximatelyEqual: TheIconSelfPack = {
  name: 'ApproximatelyEqual',
  StrokeRounded: IconApproximatelyEqualStrokeRounded,
  DuotoneRounded: IconApproximatelyEqualDuotoneRounded,
  TwotoneRounded: IconApproximatelyEqualTwotoneRounded,
  SolidRounded: IconApproximatelyEqualSolidRounded,
  BulkRounded: IconApproximatelyEqualBulkRounded,
  StrokeSharp: IconApproximatelyEqualStrokeSharp,
  SolidSharp: IconApproximatelyEqualSolidSharp,
};