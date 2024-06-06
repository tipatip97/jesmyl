import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 6L15.7276 4.91043C15.3931 3.5724 15.2258 2.90339 14.7499 2.49004C14.6973 2.44433 14.6423 2.40141 14.5852 2.36145C14.0688 2 13.3792 2 12 2C10.6208 2 9.93119 2 9.41476 2.36145C9.35765 2.40141 9.30268 2.44433 9.25006 2.49004C8.77415 2.90339 8.6069 3.5724 8.27239 4.91043L8 6',
  d2: 'M8 18L8.27239 19.0896C8.6069 20.4276 8.77415 21.0966 9.25006 21.51C9.30268 21.5557 9.35765 21.5986 9.41476 21.6386C9.93119 22 10.6208 22 12 22C13.3792 22 14.0688 22 14.5852 21.6386C14.6423 21.5986 14.6973 21.5557 14.7499 21.51C15.2258 21.0966 15.3931 20.4276 15.7276 19.0896L16 18',
  d3: 'M12 10V12.005L13 13',
  d4: 'M13.726 1.30122C14.2261 1.35643 14.7117 1.47931 15.1588 1.79218C15.6731 2.15218 16.0129 2.67117 16.2296 3.25599C16.3919 3.6941 16.5287 4.24114 16.6852 4.86738L16.6979 4.9179L16.9703 6.00747C16.975 6.02629 16.9791 6.04511 16.9827 6.06393C16.2767 5.47069 15.4633 5.00108 14.576 4.68844C14.4949 4.38091 14.4261 4.14492 14.3542 3.95099C14.2109 3.56418 14.1258 3.50721 14.0376 3.44818L14.0376 3.44817C14.0291 3.44248 14.0206 3.43676 14.012 3.43073C13.9425 3.38215 13.8251 3.32431 13.5066 3.28915C13.1647 3.25142 12.712 3.25001 12.0001 3.25001C11.2882 3.25001 10.8355 3.25142 10.4937 3.28915C10.1751 3.32431 10.0577 3.38215 9.98826 3.43073C9.97964 3.43676 9.97111 3.44248 9.9626 3.44817C9.87442 3.50721 9.78933 3.56419 9.64599 3.95099C9.57413 4.14488 9.5053 4.38082 9.4243 4.68825C8.53697 5.00081 7.72364 5.47032 7.01763 6.06346C7.02119 6.0448 7.0253 6.02613 7.02997 6.00747L7.30236 4.9179L7.31474 4.86838C7.47137 4.24171 7.60818 3.69433 7.77063 3.25599C7.98736 2.67117 8.32709 2.15218 8.84146 1.79218C9.28849 1.47931 9.77408 1.35643 10.2742 1.30122C10.7389 1.24994 11.3031 1.24997 11.9491 1.25L12.0001 1.25001L12.0512 1.25C12.6971 1.24997 13.2613 1.24994 13.726 1.30122ZM7.01758 17.9365C7.02115 17.9553 7.02528 17.974 7.02997 17.9928L7.31474 19.1319C7.47137 19.7585 7.60818 20.3059 7.77063 20.7443C7.94549 21.2161 8.18248 21.6574 8.59443 22.0152C9.06844 22.4269 9.65433 22.6306 10.2742 22.699C10.7389 22.7503 11.3031 22.7503 11.9491 22.7502L12.0001 22.7502L12.0512 22.7502C12.6971 22.7503 13.2613 22.7503 13.726 22.699C14.3459 22.6306 14.9318 22.4269 15.4058 22.0152C15.8177 21.6574 16.0547 21.2161 16.2296 20.7443C16.392 20.3059 16.5288 19.7585 16.6855 19.1319L16.6855 19.1319L16.6855 19.1318L16.9703 17.9928C16.975 17.9739 16.9791 17.9549 16.9827 17.936C16.2767 18.5293 15.4634 18.9989 14.576 19.3115C14.495 19.6192 14.4261 19.8553 14.3542 20.0493C14.2109 20.4361 14.1258 20.493 14.0376 20.5521C14.0291 20.5578 14.0206 20.5635 14.012 20.5695C13.9425 20.6181 13.8251 20.6759 13.5066 20.7111C13.1647 20.7488 12.712 20.7502 12.0001 20.7502C11.2882 20.7502 10.8355 20.7488 10.4937 20.7111C10.1751 20.6759 10.0577 20.6181 9.98826 20.5695C9.97971 20.5635 9.97123 20.5579 9.96279 20.5522L9.9626 20.5521C9.87443 20.493 9.78934 20.4361 9.64599 20.0493C9.57411 19.8553 9.50526 19.6193 9.42423 19.3117C8.5369 18.9992 7.72357 18.5296 7.01758 17.9365Z',
  d5: 'M12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V12.005C11 12.2711 11.106 12.5262 11.2947 12.7139L12.2947 13.7089C12.6862 14.0984 13.3193 14.0968 13.7089 13.7053C14.0984 13.3138 14.0968 12.6807 13.7053 12.2911L13 11.5893V10Z',
  d6: 'M4.25 12C4.25 7.71979 7.71979 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71979 19.75 4.25 16.2802 4.25 12Z',
  d7: 'M12 9C12.5523 9 13 9.44772 13 10V11.5893L13.7053 12.2911C14.0968 12.6807 14.0984 13.3138 13.7089 13.7053C13.3193 14.0968 12.6862 14.0984 12.2947 13.7089L11.2947 12.7139C11.106 12.5262 11 12.2711 11 12.005V10C11 9.44772 11.4477 9 12 9Z',
  d8: 'M16 6L15 2L9 2L8 6',
  d9: 'M16 18L15 22L9 22L8 18',
  d10: 'M12 9V12.005L13.5 13.5',
  d11: 'M15.5847 1.25L16.7267 5.8181L15.2715 6.1819L14.4135 2.75L9.58467 2.75L8.7267 6.1819L7.27148 5.8181L8.41351 1.25L15.5847 1.25Z',
  d12: 'M15.5847 22.75L16.7267 18.1819L15.2715 17.8181L14.4135 21.25L9.58467 21.25L8.7267 17.8181L7.27148 18.1819L8.41351 22.75L15.5847 22.75Z',
  d13: 'M12 4.25C7.71979 4.25 4.25 7.71979 4.25 12C4.25 16.2802 7.71979 19.75 12 19.75C16.2802 19.75 19.75 16.2802 19.75 12C19.75 7.71979 16.2802 4.25 12 4.25ZM13 9V11.5898L14.2059 12.7917L12.7941 14.2083L11 12.4202V9H13Z',
};

export const IconWatch01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-stroke-rounded IconWatch01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-duotone-rounded IconWatch01DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="7" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-twotone-rounded IconWatch01TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWatch01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-solid-rounded IconWatch01SolidRounded"
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

export const IconWatch01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-bulk-rounded IconWatch01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWatch01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-stroke-sharp IconWatch01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWatch01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="watch-01-solid-sharp IconWatch01SolidSharp"
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

export const iconPackOfWatch01: TheIconSelfPack = {
  name: 'Watch01',
  StrokeRounded: IconWatch01StrokeRounded,
  DuotoneRounded: IconWatch01DuotoneRounded,
  TwotoneRounded: IconWatch01TwotoneRounded,
  SolidRounded: IconWatch01SolidRounded,
  BulkRounded: IconWatch01BulkRounded,
  StrokeSharp: IconWatch01StrokeSharp,
  SolidSharp: IconWatch01SolidSharp,
};