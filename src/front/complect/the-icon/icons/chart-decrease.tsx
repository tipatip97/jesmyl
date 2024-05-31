import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M6.99707 5.99902C10.5286 5.999 17.9122 7.46328 17.6979 16.5654M15.4886 14.955L17.3721 16.8519C17.5656 17.0468 17.8798 17.0482 18.0751 16.8552L19.9971 14.955',
  d3: 'M7 6C10.5315 5.99997 17.9151 7.46425 17.7009 16.5663M15.4916 14.956L17.3751 16.8529C17.5685 17.0478 17.8827 17.0492 18.078 16.8562L20 14.956',
  d4: 'M6.5 5.5C6.5 4.94772 6.93662 4.5 7.47521 4.5C10.5479 4.5 13.4146 5.39411 15.5294 7.256C17.2484 8.76939 18.4118 10.8716 18.7999 13.5H19.7036C19.7092 13.5 19.7157 13.5 19.7228 13.5C19.7949 13.4997 19.9365 13.4993 20.0613 13.5176C20.1693 13.5334 20.6816 13.617 20.9123 14.162C21.143 14.7071 20.8526 15.1479 20.7902 15.2396C20.718 15.3456 20.621 15.4513 20.5715 15.5052C20.5667 15.5105 20.5623 15.5153 20.5584 15.5196L19.916 16.2241C19.904 16.2372 19.8921 16.2503 19.8802 16.2633C19.6201 16.5487 19.3621 16.8318 19.1192 17.0351C18.8457 17.2639 18.4679 17.5 17.9671 17.5C17.4663 17.5 17.0886 17.2639 16.8151 17.0351C16.5722 16.8318 16.3142 16.5487 16.0541 16.2633C16.0422 16.2503 16.0302 16.2372 16.0183 16.2241L15.3759 15.5196C15.372 15.5153 15.3676 15.5105 15.3628 15.5052C15.3133 15.4513 15.2163 15.3456 15.1441 15.2396C15.0816 15.1479 14.7913 14.7071 15.022 14.162C15.2527 13.617 15.765 13.5334 15.8729 13.5176C15.9978 13.4993 16.1394 13.4997 16.2115 13.5C16.2186 13.5 16.225 13.5 16.2307 13.5H16.8231C16.46 11.4573 15.5332 9.89541 14.2589 8.77344C12.5764 7.29218 10.1971 6.5 7.47521 6.5C6.93662 6.5 6.5 6.05228 6.5 5.5Z',
  d5: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d6: 'M20.9848 21H2.99854V3',
  d7: 'M7.00732 5.97363C9.16937 5.97363 17.7025 6.35742 18.0043 16.4455M14.4933 14.9637L18.0125 17.001L21.0016 13.458',
  d8: 'M14.6261 7.74624C16.4211 9.31117 17.6368 11.5459 18.0675 14.4988L19.4815 12.8492L21 14.1508L17.4621 18.2783L13.2446 15.8682L14.2369 14.1318L16.1451 15.2222C15.8307 12.4328 14.7652 10.5209 13.3118 9.25376C11.5438 7.71238 9.05856 7 6.24072 7V5C9.36471 5 12.3795 5.78762 14.6261 7.74624Z',
  d9: 'M4 20V3H2V21C2 21.5523 2.44772 22 3 22H21V20H4Z',
} as const;

export const IconChartDecreaseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-stroke-rounded IconChartDecreaseStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChartDecreaseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-duotone-rounded IconChartDecreaseDuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartDecreaseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-twotone-rounded IconChartDecreaseTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartDecreaseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-solid-rounded IconChartDecreaseSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartDecreaseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-bulk-rounded IconChartDecreaseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartDecreaseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-stroke-sharp IconChartDecreaseStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartDecreaseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-decrease-solid-sharp IconChartDecreaseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartDecrease: TheIconSelfPack = {
  name: 'ChartDecrease',
  StrokeRounded: IconChartDecreaseStrokeRounded,
  DuotoneRounded: IconChartDecreaseDuotoneRounded,
  TwotoneRounded: IconChartDecreaseTwotoneRounded,
  SolidRounded: IconChartDecreaseSolidRounded,
  BulkRounded: IconChartDecreaseBulkRounded,
  StrokeSharp: IconChartDecreaseStrokeSharp,
  SolidSharp: IconChartDecreaseSolidSharp,
};