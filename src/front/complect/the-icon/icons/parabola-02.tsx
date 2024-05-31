import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 2C21 10.2843 16.9706 17 12 17C7.02944 17 3 10.2843 3 2',
  d2: 'M3 20H4.05882M15.7059 20H16.7647M19.9412 20H21M7.23529 20H8.29412',
  d3: 'M9.5 4.5C11.1 2.68572 11.45 2 12 2M14.5 4.5C12.9 2.68572 12.55 2 12 2M12 2V22',
  d4: 'M12 17C16.9706 17 21 10.2843 21 2H3C3 10.2843 7.02944 17 12 17Z',
  d5: 'M9.5 4.5C11.1 2.68572 11.45 2 12 2M12 2C12.55 2 12.9 2.68572 14.5 4.5M12 2V22',
  d6: 'M3 1C3.55228 1 4 1.44772 4 2C4 5.99205 4.97293 9.55777 6.49353 12.0921C8.02608 14.6464 10.004 16 12 16C13.996 16 15.9739 14.6464 17.5065 12.0921C19.0271 9.55777 20 5.99205 20 2C20 1.44772 20.4477 1 21 1C21.5523 1 22 1.44772 22 2C22 6.29222 20.9582 10.2265 19.2215 13.1211C17.4966 15.9958 14.9745 18 12 18C9.02546 18 6.50336 15.9958 4.77855 13.1211C3.04179 10.2265 2 6.29222 2 2C2 1.44772 2.44772 1 3 1Z',
  d7: 'M2 20C2 19.4477 2.44772 19 3 19H4.05882C4.61111 19 5.05882 19.4477 5.05882 20C5.05882 20.5523 4.61111 21 4.05882 21H3C2.44772 21 2 20.5523 2 20ZM6.23529 20C6.23529 19.4477 6.68301 19 7.23529 19H8.29412C8.8464 19 9.29412 19.4477 9.29412 20C9.29412 20.5523 8.8464 21 8.29412 21H7.23529C6.68301 21 6.23529 20.5523 6.23529 20ZM14.7059 20C14.7059 19.4477 15.1536 19 15.7059 19H16.7647C17.317 19 17.7647 19.4477 17.7647 20C17.7647 20.5523 17.317 21 16.7647 21H15.7059C15.1536 21 14.7059 20.5523 14.7059 20ZM18.9412 20C18.9412 19.4477 19.3889 19 19.9412 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H19.9412C19.3889 21 18.9412 20.5523 18.9412 20Z',
  d8: 'M8.92956 3.76309C8.66065 4.07814 8.69805 4.55154 9.0131 4.82045C9.15445 4.9411 9.32767 5.00008 9.5 5H11L11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22L13 5H14.5C14.6723 5.00008 14.8456 4.94111 14.9869 4.82045C15.302 4.55154 15.3394 4.07814 15.0705 3.76309L13.7908 2.26385C13.5219 1.9487 13.2726 1.6566 13.0412 1.44971C12.7905 1.22569 12.4521 1 12 1C11.5479 1 11.2095 1.22569 10.9589 1.44971C10.7274 1.6566 10.4782 1.9487 10.2092 2.26384L8.92956 3.76309Z',
  d9: 'M21 2C21 10.2831 16.9706 16.9978 12 16.9978C7.02944 16.9978 3 10.2831 3 2',
  d10: 'M3 19.9971H5M15 19.9971H17M19 19.9971H21M7 19.9971H9',
  d11: 'M12 22.0029V2.6107M15.0035 4.99506L12 2L9.00391 5.00442',
  d12: 'M6.49353 12.5921C8.02608 15.1464 10.004 16.5 12 16.5C13.996 16.5 15.9739 15.1464 17.5065 12.5921C19.0271 10.0578 20 6.49206 20 2.5H22C22 6.79222 20.9582 10.7265 19.2215 13.6211C17.4966 16.4958 14.9745 18.5 12 18.5C9.02546 18.5 6.50336 16.4958 4.77855 13.6211C3.04179 10.7265 2 6.79222 2 2.5H4C4 6.49206 4.97293 10.0578 6.49353 12.5921Z',
  d13: 'M5 21.5H3V19.5H5V21.5ZM9 21.5H7V19.5H9V21.5ZM17 21.5H15V19.5H17V21.5ZM21 21.5H19V19.5H21V21.5Z',
  d14: 'M12.0001 1.5L15.7072 5.20711L14.293 6.62132L13.0001 5.32843V22.5005H11.0001V5.32843L9.70718 6.62132L8.29297 5.20711L12.0001 1.5Z',
} as const;

export const IconParabola02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-stroke-rounded IconParabola02StrokeRounded"
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

export const IconParabola02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-duotone-rounded IconParabola02DuotoneRounded"
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
        d={d.d2} 
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

export const IconParabola02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-twotone-rounded IconParabola02TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParabola02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-solid-rounded IconParabola02SolidRounded"
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

export const IconParabola02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-bulk-rounded IconParabola02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconParabola02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-stroke-sharp IconParabola02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconParabola02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parabola-02-solid-sharp IconParabola02SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParabola02: TheIconSelfPack = {
  name: 'Parabola02',
  StrokeRounded: IconParabola02StrokeRounded,
  DuotoneRounded: IconParabola02DuotoneRounded,
  TwotoneRounded: IconParabola02TwotoneRounded,
  SolidRounded: IconParabola02SolidRounded,
  BulkRounded: IconParabola02BulkRounded,
  StrokeSharp: IconParabola02StrokeSharp,
  SolidSharp: IconParabola02SolidSharp,
};