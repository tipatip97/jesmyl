import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 4L2 4',
  d2: 'M3 4V4.65609C3 5.62272 3.228 6.57118 3.65961 7.40006L4.20846 8.45408C5.18551 10.3304 5.26288 12.6519 4.41361 14.609L3.29319 17.191C3.10038 17.6353 3 18.1253 3 18.6221V20M21 4V4.65609C21 5.62272 20.772 6.57118 20.3404 7.40006L19.7915 8.45408C18.8145 10.3304 18.7371 12.6519 19.5864 14.609L20.7068 17.191C20.8996 17.6353 21 18.1253 21 18.6221V20',
  d3: 'M5 12H19',
  d4: 'M4.5 15H19.5',
  d5: 'M14 7C13.7549 7.61287 13.2537 8 12.7056 8H11.2944C10.7463 8 10.2451 7.61287 10 7',
  d6: 'M4.99391 12C4.96325 12.894 4.7699 13.7839 4.41185 14.609L4.24219 15H4.49824H19.4982H19.7543L19.5846 14.609C19.2266 13.7839 19.0332 12.894 19.0026 12H4.99391Z',
  d7: 'M3.65961 7.40006L4.20846 8.45408C4.77358 9.53935 5.03772 10.7735 4.99567 12H19.0043C18.9623 10.7735 19.2264 9.53935 19.7915 8.45408L20.3404 7.40006C20.772 6.57118 21 5.62272 21 4.65609C21 4.29374 20.7063 4 20.3439 4H3.65609C3.29374 4 3 4.29374 3 4.65609C3 5.62272 3.228 6.57118 3.65961 7.40006Z',
  d8: 'M3 20V18.6221C3 18.1253 3.10038 17.6353 3.29319 17.191L4.41361 14.609C4.77166 13.7839 4.96501 12.894 4.99567 12M21 20V18.6221C21 18.1253 20.8996 17.6353 20.7068 17.191L19.5864 14.609C19.2283 13.7839 19.035 12.894 19.0043 12M4.99567 12C5.03772 10.7735 4.77358 9.53935 4.20846 8.45408L3.65961 7.40006C3.228 6.57118 3 5.62272 3 4.65609V4.65609C3 4.29374 3.29374 4 3.65609 4H20.3439C20.7063 4 21 4.29374 21 4.65609V4.65609C21 5.62272 20.772 6.57118 20.3404 7.40006L19.7915 8.45408C19.2264 9.53935 18.9623 10.7735 19.0043 12M4.99567 12H19.0043',
  d9: 'M3.5 15C3.5 14.4477 3.94772 14 4.5 14H19.5C20.0523 14 20.5 14.4477 20.5 15C20.5 15.5523 20.0523 16 19.5 16H4.5C3.94772 16 3.5 15.5523 3.5 15Z',
  d10: 'M1 4C1 3.44772 1.44772 3 2 3L22 3C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H21.9917C21.9434 6.0032 21.6838 6.98538 21.2273 7.86192L20.6785 8.91593C20.197 9.84054 19.9673 10.9026 20.0037 11.9657C20.0303 12.7395 20.1976 13.5055 20.5037 14.2109L21.6242 16.7929C21.8729 17.3662 22 17.992 22 18.6221V20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20V18.6221C20 18.2586 19.9263 17.9045 19.7895 17.5891L18.669 15.0071C18.3556 14.2848 18.1536 13.5222 18.0603 12.75L5.9397 12.75C5.84638 13.5222 5.64437 14.2848 5.33096 15.0071L4.21055 17.5891C4.07367 17.9045 4 18.2587 4 18.6221V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18.6221C2 17.992 2.1271 17.3662 2.37584 16.7929L3.49625 14.2109C3.80237 13.5055 3.96972 12.7395 3.99625 11.9657C4.03271 10.9026 3.80297 9.84054 3.32151 8.91593L2.77266 7.86192C2.31623 6.98539 2.05665 6.0032 2.00828 5H2C1.44772 5 1 4.55228 1 4ZM10.6966 6.72166C10.5427 6.33707 10.1062 6.15001 9.72166 6.30384C9.33707 6.45768 9.15001 6.89415 9.30384 7.27874C9.63352 8.10293 10.3677 8.7502 11.2946 8.7502H12.7058C13.6327 8.7502 14.3669 8.10293 14.6966 7.27874C14.8504 6.89415 14.6633 6.45768 14.2787 6.30384C13.8942 6.15001 13.4577 6.33707 13.3038 6.72166C13.1432 7.1232 12.8752 7.2502 12.7058 7.2502H11.2946C11.1252 7.2502 10.8572 7.1232 10.6966 6.72166Z',
  d11: 'M2 3C1.44772 3 1 3.44772 1 4C1 4.55228 1.44772 5 2 5H2.00828C2.05665 6.0032 2.31623 6.98539 2.77266 7.86192L3.32151 8.91593C3.80297 9.84054 4.03271 10.9026 3.99625 11.9657C3.98723 12.2287 3.96194 12.4909 3.92047 12.75H5.9397H18.0603H20.0795C20.0381 12.4909 20.0128 12.2287 20.0037 11.9657C19.9673 10.9026 20.197 9.84054 20.6785 8.91593L21.2273 7.86192C21.6838 6.98538 21.9434 6.0032 21.9917 5H22C22.5523 5 23 4.55228 23 4C23 3.44772 22.5523 3 22 3H2Z',
  d12: 'M3.49625 14.2109L2.37584 16.7929C2.1271 17.3662 2 17.992 2 18.6221V20C2 20.5523 2.44772 21 3 21C3.55228 21 4 20.5523 4 20V18.6221C4 18.2587 4.07367 17.9045 4.21055 17.5891L4.9001 16H19.0999L19.7895 17.5891C19.9263 17.9045 20 18.2586 20 18.6221V20C20 20.5523 20.4477 21 21 21C21.5523 21 22 20.5523 22 20V18.6221C22 17.992 21.8729 17.3662 21.6242 16.7929L20.5037 14.2109C20.3017 13.7453 20.1601 13.2532 20.0795 12.75H18.0603C18.1112 13.1712 18.1944 13.5895 18.3104 14L5.68957 14C5.80557 13.5895 5.8888 13.1712 5.9397 12.75H3.92047C3.83992 13.2532 3.69832 13.7453 3.49625 14.2109Z',
  d13: 'M9.72166 6.30384C10.1062 6.15001 10.5427 6.33707 10.6966 6.72166C10.8572 7.1232 11.1252 7.2502 11.2946 7.2502H12.7058C12.8752 7.2502 13.1432 7.1232 13.3038 6.72166C13.4577 6.33707 13.8942 6.15001 14.2787 6.30384C14.6633 6.45768 14.8504 6.89415 14.6966 7.27874C14.3669 8.10293 13.6327 8.7502 12.7058 8.7502H11.2946C10.3677 8.7502 9.63352 8.10293 9.30384 7.27874C9.15001 6.89415 9.33707 6.45768 9.72166 6.30384Z',
  d14: 'M4 4V4.65609C4 5.62272 4.228 6.57118 4.65961 7.40006L5.20846 8.45408C6.18551 10.3304 6.26288 12.6519 5.41361 14.609L4.29319 17.191C4.10038 17.6353 4 18.1253 4 18.6221V20M20 4V4.65609C20 5.62272 19.772 6.57118 19.3404 7.40006L18.7915 8.45408C17.8145 10.3304 17.7371 12.6519 18.5864 14.609L19.7068 17.191C19.8996 17.6353 20 18.1253 20 18.6221V20',
  d15: 'M6 12H18',
  d16: 'M5.5 15H18.5',
  d17: 'M14.5 7L13.5 8.5H10.5L9.5 7',
  d18: 'M18.5 16.9117H5.5V14.9117H18.5V16.9117Z',
  d19: 'M2 5.5H3.00828C3.05665 6.5032 3.31623 7.48539 3.77266 8.36192L4.32151 9.41593C5.15793 11.0222 5.2267 13.0276 4.49625 14.7109L3.37584 17.2929C3.1271 17.8662 3 18.492 3 19.1221V20.5H5V19.1221C5 18.7587 5.07367 18.4045 5.21055 18.0891L6.33096 15.5071C6.64343 14.787 6.84608 14.0246 6.93968 13.25L17.0603 13.25C17.1539 14.0246 17.3566 14.787 17.669 15.5071L18.7895 18.0891C18.9263 18.4045 19 18.7586 19 19.1221V20.5H21V19.1221C21 18.492 20.8729 17.8662 20.6242 17.2929L19.5037 14.7109C18.7733 13.0276 18.8421 11.0222 19.6785 9.41593L20.2273 8.36192C20.6838 7.48539 20.9434 6.5032 20.9917 5.5H22V3.5L2 3.5V5.5ZM8.875 7.91603L9.875 9.41603C10.0141 9.62468 10.2483 9.75001 10.499 9.75001H13.499C13.7498 9.75001 13.984 9.62468 14.1231 9.41603L15.1231 7.91603L13.875 7.08398L13.0976 8.25001H10.9004L10.1231 7.08398L8.875 7.91603Z',
};

export const IconTable03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-stroke-rounded IconTable03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTable03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-duotone-rounded IconTable03DuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        d={d.d8} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTable03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-twotone-rounded IconTable03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTable03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-solid-rounded IconTable03SolidRounded"
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

export const IconTable03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-bulk-rounded IconTable03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTable03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-stroke-sharp IconTable03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTable03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-03-solid-sharp IconTable03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTable03: TheIconSelfPack = {
  name: 'Table03',
  StrokeRounded: IconTable03StrokeRounded,
  DuotoneRounded: IconTable03DuotoneRounded,
  TwotoneRounded: IconTable03TwotoneRounded,
  SolidRounded: IconTable03SolidRounded,
  BulkRounded: IconTable03BulkRounded,
  StrokeSharp: IconTable03StrokeSharp,
  SolidSharp: IconTable03SolidSharp,
};