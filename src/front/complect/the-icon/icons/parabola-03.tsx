import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 2C21 10.2843 16.9706 17 12 17C7.02944 17 3 10.2843 3 2',
  d2: 'M2 20H22',
  d3: 'M9.5 4.5C11.1 2.68572 11.45 2 12 2M14.5 4.5C12.9 2.68572 12.55 2 12 2M12 2V22',
  d4: 'M12 17C16.9706 17 21 10.2843 21 2H3C3 10.2843 7.02944 17 12 17Z',
  d5: 'M9.5 4.5C11.1 2.68572 11.45 2 12 2M12 2C12.55 2 12.9 2.68572 14.5 4.5M12 2V22',
  d6: 'M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z',
  d7: 'M3 1C3.55228 1 4 1.44772 4 2C4 5.99205 4.97293 9.55777 6.49353 12.0921C8.02608 14.6464 10.004 16 12 16C13.996 16 15.9739 14.6464 17.5065 12.0921C19.0271 9.55777 20 5.99205 20 2C20 1.44772 20.4477 1 21 1C21.5523 1 22 1.44772 22 2C22 6.29222 20.9582 10.2265 19.2215 13.1211C17.4966 15.9958 14.9745 18 12 18C9.02546 18 6.50336 15.9958 4.77855 13.1211C3.04179 10.2265 2 6.29222 2 2C2 1.44772 2.44772 1 3 1Z',
  d8: 'M8.92956 3.76309C8.66065 4.07814 8.69805 4.55154 9.0131 4.82045C9.15445 4.9411 9.32767 5.00008 9.5 5H11L11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22L13 5H14.5C14.6723 5.00008 14.8456 4.94111 14.9869 4.82045C15.302 4.55154 15.3394 4.07814 15.0705 3.76309L13.7908 2.26385C13.5219 1.9487 13.2726 1.6566 13.0412 1.44971C12.7905 1.22569 12.4521 1 12 1C11.5479 1 11.2095 1.22569 10.9589 1.44971C10.7274 1.6566 10.4782 1.9487 10.2092 2.26384L8.92956 3.76309Z',
  d9: 'M11.9961 22.0029V2.68359M14.9996 4.99506L11.9961 2L9 5.00442',
  d10: 'M2 20.75H22V19.25H2V20.75Z',
  d11: 'M12.0001 1.5L15.7072 5.20711L14.293 6.62132L13.0001 5.32843V22.5005H11.0001V5.32843L9.70718 6.62132L8.29297 5.20711L12.0001 1.5Z',
  d12: 'M22 21.501H2V19.501H22V21.501Z',
  d13: 'M6.49353 12.5931C8.02608 15.1473 10.004 16.501 12 16.501C13.996 16.501 15.9739 15.1473 17.5065 12.5931C19.0271 10.0587 20 6.49303 20 2.50098H22C22 6.79319 20.9582 10.7275 19.2215 13.6221C17.4966 16.4968 14.9745 18.501 12 18.501C9.02546 18.501 6.50336 16.4968 4.77855 13.6221C3.04179 10.7275 2 6.79319 2 2.50098H4C4 6.49303 4.97293 10.0587 6.49353 12.5931Z',
} as const;

export const IconParabola03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-stroke-rounded IconParabola03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconParabola03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-duotone-rounded IconParabola03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconParabola03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-twotone-rounded IconParabola03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconParabola03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-solid-rounded IconParabola03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParabola03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-bulk-rounded IconParabola03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconParabola03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-stroke-sharp IconParabola03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParabola03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-03-solid-sharp IconParabola03SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParabola03: TheIconSelfPack = {
  name: 'Parabola03',
  StrokeRounded: IconParabola03StrokeRounded,
  DuotoneRounded: IconParabola03DuotoneRounded,
  TwotoneRounded: IconParabola03TwotoneRounded,
  SolidRounded: IconParabola03SolidRounded,
  BulkRounded: IconParabola03BulkRounded,
  StrokeSharp: IconParabola03StrokeSharp,
  SolidSharp: IconParabola03SolidSharp,
};