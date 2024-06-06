import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 9C8.89837 9 7.77572 11.6032 7.1393 14.2373C6.33194 17.5789 9.1763 19.0941 12 18.9955C14.8237 19.0941 17.6681 17.5789 16.8607 14.2373C16.2243 11.6032 15.1016 9 12 9Z',
  d2: 'M11.9998 14H12.0088',
  d3: 'M3.99981 21H4.00879',
  d4: 'M19.9998 21H20.0088',
  d5: 'M7 15L2 17M17 15L22 17',
  d6: 'M12 9L12 3',
  d7: 'M4 18L4 16.5',
  d8: 'M20 18L20 16.5',
  d9: 'M11.9997 8.25C10.1954 8.25 8.92614 9.02606 8.04869 10.1759C7.2025 11.2847 6.73383 12.7208 6.40999 14.0611C5.94204 15.998 6.53561 17.5122 7.73417 18.4881C8.87299 19.4153 10.4759 19.7942 11.9997 19.7459C13.5235 19.7942 15.1264 19.4153 16.2652 18.4881C17.4638 17.5122 18.0574 15.998 17.5894 14.0611C17.2656 12.7208 16.7969 11.2847 15.9507 10.1759C15.0733 9.02606 13.804 8.25 11.9997 8.25ZM11.9955 13C11.4457 13 11 13.4477 11 14C11 14.5523 11.4457 15 11.9955 15H12.0045C12.5543 15 13 14.5523 13 14C13 13.4477 12.5543 13 12.0045 13H11.9955Z',
  d10: 'M3 21C3 20.4477 3.44772 20 4 20H4.00898C4.56127 20 5.00898 20.4477 5.00898 21C5.00898 21.5523 4.56127 22 4.00898 22H4C3.44772 22 3 21.5523 3 21Z',
  d11: 'M19 21C19 20.4477 19.4477 20 20 20H20.009C20.5613 20 21.009 20.4477 21.009 21C21.009 21.5523 20.5613 22 20.009 22H20C19.4477 22 19 21.5523 19 21Z',
  d12: 'M12 2C12.5523 2 13 2.44772 13 3L13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9L11 3C11 2.44772 11.4477 2 12 2Z',
  d13: 'M7.92874 14.6289C8.13386 15.1417 7.88444 15.7236 7.37166 15.9287L5.00027 16.8773V18.0003C5.00027 18.5526 4.55255 19.0003 4.00027 19.0003C3.44798 19.0003 3.00027 18.5526 3.00027 18.0003V17.6773L2.37166 17.9287C1.85887 18.1339 1.2769 17.8844 1.07179 17.3717C0.866676 16.8589 1.11609 16.2769 1.62888 16.0718L6.62888 14.0718C7.14166 13.8667 7.72363 14.1161 7.92874 14.6289ZM16.0718 14.6289C16.2769 14.1161 16.8589 13.8667 17.3717 14.0718L22.3717 16.0718C22.8844 16.2769 23.1339 16.8589 22.9287 17.3717C22.7236 17.8844 22.1417 18.1339 21.6289 17.9287L21.0003 17.6773V18.0003C21.0003 18.5526 20.5525 19.0003 20.0003 19.0003C19.448 19.0003 19.0003 18.5526 19.0003 18.0003V16.8773L16.6289 15.9287C16.1161 15.7236 15.8667 15.1417 16.0718 14.6289Z',
  d14: 'M12 2C12.5523 2 13 2.44772 13 3V8.3364C12.6864 8.27981 12.3533 8.25 11.9997 8.25C11.6463 8.25 11.3134 8.27977 11 8.3363V3C11 2.44772 11.4477 2 12 2ZM6.38484 14.1694L1.62888 16.0718C1.11609 16.2769 0.866676 16.8589 1.07179 17.3717C1.2769 17.8844 1.85887 18.1339 2.37166 17.9287L3.00027 17.6773V18.0003C3.00027 18.5526 3.44798 19.0003 4.00027 19.0003C4.55255 19.0003 5.00027 18.5526 5.00027 18.0003V16.8773L6.36268 16.3323C6.21062 15.6899 6.20714 14.9662 6.38484 14.1694ZM17.6368 16.3319L19.0003 16.8773V18.0003C19.0003 18.5526 19.448 19.0003 20.0003 19.0003C20.5525 19.0003 21.0003 18.5526 21.0003 18.0003V17.6773L21.6289 17.9287C22.1417 18.1339 22.7236 17.8844 22.9287 17.3717C23.1339 16.8589 22.8844 16.2769 22.3717 16.0718L17.6145 14.1689C17.7922 14.9658 17.7888 15.6895 17.6368 16.3319Z',
  d15: 'M8.04869 10.1759C8.92614 9.02606 10.1954 8.25 11.9997 8.25C13.804 8.25 15.0733 9.02606 15.9507 10.1759C16.7969 11.2847 17.2656 12.7208 17.5894 14.0611C18.0574 15.998 17.4638 17.5122 16.2652 18.4881C15.1264 19.4153 13.5235 19.7942 11.9997 19.7459C10.4759 19.7942 8.87299 19.4153 7.73417 18.4881C6.53561 17.5122 5.94204 15.998 6.40999 14.0611C6.73383 12.7208 7.2025 11.2847 8.04869 10.1759Z',
  d16: 'M11 14C11 13.4477 11.4457 13 11.9955 13H12.0045C12.5543 13 13 13.4477 13 14C13 14.5523 12.5543 15 12.0045 15H11.9955C11.4457 15 11 14.5523 11 14Z',
  d17: 'M12 8.5C8.89837 8.5 7.77572 11.1032 7.1393 13.7373C6.33194 17.0789 9.1763 18.5941 12 18.4955C14.8237 18.5941 17.6681 17.0789 16.8607 13.7373C16.2243 11.1032 15.1016 8.5 12 8.5Z',
  d18: 'M11.9998 13.5H12.0088',
  d19: 'M3.99981 20.5H4.00879',
  d20: 'M19.9998 20.5H20.0088',
  d21: 'M7 14.5L2 16.5M17 14.5L22 16.5',
  d22: 'M12 8.5L12 2.5',
  d23: 'M4 18.5L4 16',
  d24: 'M20 18.5L20 16',
  d25: 'M11.9958 7.75C10.1915 7.75 8.92224 8.52606 8.04478 9.67587C7.19859 10.7847 6.72993 12.2208 6.40608 13.5611C5.93813 15.498 6.5317 17.0122 7.73027 17.9881C8.86909 18.9153 10.472 19.2942 11.9958 19.2459C13.5196 19.2942 15.1225 18.9153 16.2613 17.9881C17.4599 17.0122 18.0535 15.498 17.5855 13.5611C17.2617 12.2208 16.793 10.7847 15.9468 9.67587C15.0694 8.52606 13.8001 7.75 11.9958 7.75ZM11.9961 12.5C11.4438 12.5 10.9961 12.9477 10.9961 13.5C10.9961 14.0523 11.4438 14.5 11.9961 14.5H12.0051C12.5574 14.5 13.0051 14.0523 13.0051 13.5C13.0051 12.9477 12.5574 12.5 12.0051 12.5H11.9961Z',
  d26: 'M2.99609 20.5C2.99609 19.9477 3.44381 19.5 3.99609 19.5H4.00508C4.55736 19.5 5.00508 19.9477 5.00508 20.5C5.00508 21.0523 4.55736 21.5 4.00508 21.5H3.99609C3.44381 21.5 2.99609 21.0523 2.99609 20.5Z',
  d27: 'M18.9961 20.5C18.9961 19.9477 19.4438 19.5 19.9961 19.5H20.0051C20.5574 19.5 21.0051 19.9477 21.0051 20.5C21.0051 21.0523 20.5574 21.5 20.0051 21.5H19.9961C19.4438 21.5 18.9961 21.0523 18.9961 20.5Z',
  d28: 'M1.25 15.5713L6.99609 13L6.99278 15.4282L1.99278 17.4282L1.25 15.5713ZM22.0072 17.4282L17.0072 15.4282V13L22.75 15.5713L22.0072 17.4282Z',
  d29: 'M12.9961 2.5L12.9961 8.5L10.9961 8.5L10.9961 2.5L12.9961 2.5Z',
  d30: 'M4.99609 16L4.99609 18.5L2.99609 18.5L2.99609 16L4.99609 16Z',
  d31: 'M20.7461 16L20.7461 18.5L19.2461 18.5L19.2461 16L20.7461 16Z',
};

export const IconPlaneStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-stroke-rounded IconPlaneStrokeRounded"
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
      <path 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaneDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-duotone-rounded IconPlaneDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaneTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-twotone-rounded IconPlaneTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaneSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-solid-rounded IconPlaneSolidRounded"
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

export const IconPlaneBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-bulk-rounded IconPlaneBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaneStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-stroke-sharp IconPlaneStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaneSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plane-solid-sharp IconPlaneSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlane: TheIconSelfPack = {
  name: 'Plane',
  StrokeRounded: IconPlaneStrokeRounded,
  DuotoneRounded: IconPlaneDuotoneRounded,
  TwotoneRounded: IconPlaneTwotoneRounded,
  SolidRounded: IconPlaneSolidRounded,
  BulkRounded: IconPlaneBulkRounded,
  StrokeSharp: IconPlaneStrokeSharp,
  SolidSharp: IconPlaneSolidSharp,
};