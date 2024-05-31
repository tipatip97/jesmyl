import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3',
  d2: 'M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3',
  d3: 'M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3',
  d4: 'M18 3C19.2322 3 20.231 4.15127 20.231 5.57143C20.231 7.81916 20.1312 9.31354 21.6733 11.0909C21.8911 11.3419 22 11.671 22 12M6 3C4.76784 3 3.76897 4.15127 3.76897 5.57143C3.76897 7.83992 3.83496 9.35251 2.32673 11.0909C2.10891 11.3419 2 11.671 2 12',
  d5: 'M16.75 3C16.75 2.30964 17.3096 1.75 18 1.75C20.0833 1.75 21.481 3.63346 21.481 5.57143C21.481 5.70344 21.4808 5.83044 21.4806 5.95293C21.4788 6.93325 21.4775 7.62405 21.6016 8.27257C21.7273 8.92934 21.9883 9.54655 22.6174 10.2717C23.4609 11.2438 23.4609 12.7562 22.6174 13.7283C21.9883 14.4535 21.7273 15.0707 21.6016 15.7274C21.4775 16.376 21.4788 17.0667 21.4806 18.0471C21.4808 18.1696 21.481 18.2966 21.481 18.4286C21.481 20.3665 20.0833 22.25 18 22.25C17.3096 22.25 16.75 21.6904 16.75 21C16.75 20.3096 17.3096 19.75 18 19.75C18.3811 19.75 18.981 19.3309 18.981 18.4286C18.981 18.3021 18.9806 18.1751 18.9802 18.048C18.9769 17.1104 18.9736 16.1591 19.1462 15.2575C19.3561 14.1608 19.8162 13.1421 20.7291 12.09C20.729 12.09 20.7291 12.09 20.7292 12.0898C20.7311 12.0869 20.75 12.0583 20.75 12C20.75 11.9417 20.7311 11.9131 20.7292 11.9102C20.7291 11.91 20.729 11.91 20.7291 11.91C19.8162 10.8579 19.3561 9.83922 19.1462 8.74254C18.9736 7.84093 18.9769 6.88961 18.9802 5.95203C18.9806 5.82486 18.981 5.69794 18.981 5.57143C18.981 4.66908 18.3811 4.25 18 4.25C17.3096 4.25 16.75 3.69036 16.75 3Z',
  d6: 'M7.25 3C7.25 2.30964 6.69036 1.75 6 1.75C3.91673 1.75 2.51897 3.63346 2.51897 5.57143C2.51897 5.62193 2.51898 5.67182 2.51899 5.72112C2.51954 7.93877 2.5198 8.96094 1.38256 10.2717C0.539145 11.2438 0.539147 12.7562 1.38256 13.7283C2.01171 14.4535 2.27269 15.0707 2.3984 15.7274C2.52253 16.376 2.52125 17.0667 2.51943 18.0471C2.5192 18.1696 2.51897 18.2966 2.51897 18.4286C2.51897 20.3665 3.91673 22.25 6 22.25C6.69036 22.25 7.25 21.6904 7.25 21C7.25 20.3096 6.69036 19.75 6 19.75C5.61894 19.75 5.01897 19.3309 5.01897 18.4286C5.01897 18.3021 5.01941 18.1751 5.01985 18.048C5.0231 17.1104 5.0264 16.1591 4.85383 15.2575C4.64392 14.1608 4.18379 13.1421 3.27089 12.09C3.27096 12.09 3.27092 12.09 3.27078 12.0898C3.2689 12.0869 3.25 12.0583 3.25 12C3.25 11.9417 3.26889 11.9131 3.27078 11.9102C3.27092 11.91 3.27096 11.91 3.27089 11.91C5.02936 9.88328 5.02468 7.99144 5.01953 5.9119C5.01925 5.79898 5.01897 5.68551 5.01897 5.57143C5.01897 4.66908 5.61894 4.25 6 4.25C6.69036 4.25 7.25 3.69036 7.25 3Z',
  d7: 'M18.0273 3L20.0321 3C20.3083 3 20.5321 3.22386 20.5321 3.5L20.5321 9.98164L21.9599 11.88C22.0136 11.9513 22.0132 12.0494 21.959 12.1203L20.5321 13.9863L20.5321 20.501C20.5321 20.7771 20.3083 21.001 20.0321 21.001H18.0273',
  d8: 'M5.97258 3H3.9678C3.69165 3 3.4678 3.22386 3.4678 3.5L3.4678 9.98164L2.03998 11.88C1.98632 11.9513 1.98671 12.0494 2.04094 12.1203L3.4678 13.9863L3.4678 20.501C3.4678 20.7771 3.69165 21.001 3.9678 21.001H5.97258',
  d9: 'M18.75 4.25H17V1.75H20C20.6904 1.75 21.25 2.30964 21.25 3V9.58333L22.5 11.25C22.8333 11.6944 22.8333 12.3056 22.5 12.75L21.25 14.4167V21C21.25 21.6904 20.6904 22.25 20 22.25H17V19.75H18.75V13.5833L19.9375 12L18.75 10.4167V4.25Z',
  d10: 'M2.75 3C2.75 2.30964 3.30964 1.75 4 1.75H7V4.25H5.25V10.4167L4.0625 12L5.25 13.5833V19.75H7V22.25H4C3.30964 22.25 2.75 21.6904 2.75 21V14.4167L1.5 12.75C1.16667 12.3056 1.16667 11.6944 1.5 11.25L2.75 9.58333V3Z',
} as const;

export const Icon3rdBracketStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-stroke-rounded Icon3rdBracketStrokeRounded"
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

export const Icon3rdBracketDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-duotone-rounded Icon3rdBracketDuotoneRounded"
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

export const Icon3rdBracketTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-twotone-rounded Icon3rdBracketTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const Icon3rdBracketSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-solid-rounded Icon3rdBracketSolidRounded"
    >
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

export const Icon3rdBracketBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-bulk-rounded Icon3rdBracketBulkRounded"
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

export const Icon3rdBracketStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-stroke-sharp Icon3rdBracketStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3rdBracketSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-solid-sharp Icon3rdBracketSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf3rdBracket: TheIconSelfPack = {
  name: '3rdBracket',
  StrokeRounded: Icon3rdBracketStrokeRounded,
  DuotoneRounded: Icon3rdBracketDuotoneRounded,
  TwotoneRounded: Icon3rdBracketTwotoneRounded,
  SolidRounded: Icon3rdBracketSolidRounded,
  BulkRounded: Icon3rdBracketBulkRounded,
  StrokeSharp: Icon3rdBracketStrokeSharp,
  SolidSharp: Icon3rdBracketSolidSharp,
};