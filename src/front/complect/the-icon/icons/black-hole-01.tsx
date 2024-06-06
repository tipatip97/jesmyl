import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.6018 12C17.6409 13.1652 15.048 14 12.0001 14C8.95228 14 6.35939 13.1652 5.39844 12',
  d2: 'M10.063 13.5C10.0219 13.3402 10 13.1726 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13C14 13.1726 13.9781 13.3402 13.937 13.5',
  d3: 'M6 4L9 13.5M7 20L9 18',
  d4: 'M17 6L15 13.5M17 20L15 18',
  d5: 'M12 2V11M12 22V18',
  d6: 'M12 18C17.5228 18 22 15.7614 22 13C22 10.2386 17.5228 8 12 8C6.47715 8 2 10.2386 2 13C2 15.7614 6.47715 18 12 18ZM10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13C14 13.2974 13.7291 13.5 13.4317 13.5H10.5683C10.2709 13.5 10 13.2974 10 13Z',
  d7: 'M6 4L9 13.5M17 6L15 13.5M12 2V11',
  d8: 'M9 18L7 20M15 18L17 20M12 18V22',
  d9: 'M5.1852 11.9673C5.50532 11.5173 6.12966 11.412 6.57971 11.7321C7.56738 12.4346 9.55883 13.0009 12.0002 13.0009C14.4416 13.0009 16.433 12.4346 17.4207 11.7321C17.8707 11.412 18.4951 11.5173 18.8152 11.9673C19.1353 12.4174 19.03 13.0417 18.5799 13.3618C17.1179 14.4018 14.6516 15.0009 12.0002 15.0009C9.34876 15.0009 6.88252 14.4018 5.42045 13.3618C4.9704 13.0417 4.86508 12.4174 5.1852 11.9673Z',
  d10: 'M10.25 14.2263C9.84881 14.3296 9.43993 14.0881 9.33668 13.6869C9.27996 13.4666 9.25 13.2362 9.25 13C9.25 11.4812 10.4812 10.25 12 10.25C13.5188 10.25 14.75 11.4812 14.75 13C14.75 13.2362 14.72 13.4666 14.6633 13.6869C14.5601 14.0881 14.1512 14.3296 13.75 14.2263H10.25Z',
  d11: 'M5.69914 3.04669C6.22579 2.88038 6.78754 3.17249 6.95385 3.69914L9.95385 13.1991C10.1202 13.7258 9.82805 14.2875 9.3014 14.4539C8.77475 14.6202 8.213 14.328 8.04669 13.8014L5.04669 4.3014C4.88038 3.77475 5.17249 3.213 5.69914 3.04669ZM9.70738 17.2932C10.0979 17.6837 10.0979 18.3169 9.70738 18.7074L7.70737 20.7074C7.31685 21.0979 6.68369 21.0979 6.29316 20.7074C5.90264 20.3169 5.90264 19.6837 6.29316 19.2932L8.29316 17.2932C8.68369 16.9026 9.31685 16.9026 9.70738 17.2932Z',
  d12: 'M17.2574 5.03401C16.7238 4.89171 16.1758 5.20895 16.0335 5.74258L14.0335 13.2426C13.8912 13.7762 14.2085 14.3242 14.7421 14.4665C15.2757 14.6088 15.8237 14.2915 15.966 13.7579L17.966 6.25791C18.1083 5.72427 17.7911 5.17632 17.2574 5.03401ZM14.2926 17.2931C13.9021 17.6837 13.9021 18.3168 14.2926 18.7074L16.2926 20.7074C16.6832 21.0979 17.3163 21.0979 17.7069 20.7074C18.0974 20.3168 18.0974 19.6837 17.7069 19.2931L15.7069 17.2931C15.3163 16.9026 14.6832 16.9026 14.2926 17.2931Z',
  d13: 'M12 1C12.5523 1 13 1.44772 13 2V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V2C11 1.44772 11.4477 1 12 1ZM12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z',
  d14: 'M3 13.0012C3 12.2781 3.55252 11.396 4.92377 10.6031C6.10449 9.9204 5.27914 8.10041 4 8.82823C2.31013 9.78976 1 11.2051 1 13.0012C1 14.9647 2.56577 16.4732 4.48172 17.4311C6.45748 18.419 9.11699 19.0012 12 19.0012C14.883 19.0012 17.5425 18.419 19.5183 17.4311C21.4342 16.4732 23 14.9647 23 13.0012C23 11.0974 21.5282 9.62151 19.6923 8.66028C18.5473 8.06078 17.656 9.84897 18.7877 10.4441C20.3705 11.2764 21 12.2294 21 13.0012C21 13.7991 20.3272 14.7906 18.6239 15.6423C16.9803 16.4641 14.6398 17.0012 12 17.0012C9.36016 17.0012 7.01967 16.4641 5.37615 15.6423C3.67281 14.7906 3 13.7991 3 13.0012Z',
  d15: 'M5.37615 10.3589C3.67281 11.2106 3 12.2021 3 13C3 13.7979 3.67281 14.7894 5.37615 15.6411C7.01967 16.4629 9.36016 17 12 17C14.6398 17 16.9803 16.4629 18.6239 15.6411C20.3272 14.7894 21 13.7979 21 13C21 12.2021 20.3272 11.2106 18.6239 10.3589C16.9803 9.53713 14.6398 9 12 9C9.36016 9 7.01967 9.53713 5.37615 10.3589ZM4.48172 8.57004C6.45748 7.58216 9.11699 7 12 7C14.883 7 17.5425 7.58216 19.5183 8.57004C21.4342 9.52801 23 11.0365 23 13C23 14.9635 21.4342 16.472 19.5183 17.43C17.5425 18.4178 14.883 19 12 19C9.11699 19 6.45748 18.4178 4.48172 17.43C2.56577 16.472 1 14.9635 1 13C1 11.0365 2.56577 9.52801 4.48172 8.57004Z',
  d16: 'M9.01563 12.6919C8.73305 12.6296 8.46428 12.5589 8.21132 12.4809C7.13969 12.1505 6.46926 11.7262 6.16992 11.3633L4.62695 12.6358C5.28857 13.438 6.39505 14.0138 7.62207 14.3921C8.87924 14.7797 10.3902 14.9995 12.0001 14.9995C13.61 14.9995 15.121 14.7797 16.3782 14.3921C17.6052 14.0138 18.7117 13.438 19.3733 12.6358L17.8303 11.3633C17.531 11.7262 16.8606 12.1505 15.7889 12.4809C15.5359 12.5589 15.267 12.6296 14.9844 12.692C14.8301 11.1798 13.5529 10 12 10C10.4472 10 9.16988 11.1798 9.01563 12.6919Z',
  d17: 'M8.04639 13.801L5.04639 4.30099L6.95355 3.69873L9.95355 13.1987L8.04639 13.801ZM6.29286 19.2928L8.29286 17.2928L9.70708 18.707L7.70708 20.707L6.29286 19.2928Z',
  d18: 'M15.9663 13.7575L17.9663 6.25751L16.0338 5.74219L14.0338 13.2422L15.9663 13.7575ZM17.7072 19.2927L15.7072 17.2927L14.293 18.707L16.293 20.707L17.7072 19.2927Z',
  d19: 'M11 11V2H13V11H11ZM11 22V18H13V22H11Z',
};

export const IconBlackHole01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-stroke-rounded IconBlackHole01StrokeRounded"
    >
      <ellipse 
        cx="12" 
        cy="13" 
        rx="10" 
        ry="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
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

export const IconBlackHole01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-duotone-rounded IconBlackHole01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="12" 
        cy="13" 
        rx="10" 
        ry="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
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

export const IconBlackHole01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-twotone-rounded IconBlackHole01TwotoneRounded"
    >
      <ellipse 
        cx="12" 
        cy="13" 
        rx="10" 
        ry="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
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

export const IconBlackHole01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-solid-rounded IconBlackHole01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHole01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-bulk-rounded IconBlackHole01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHole01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-stroke-sharp IconBlackHole01StrokeSharp"
    >
      <ellipse 
        cx="12" 
        cy="13" 
        rx="10" 
        ry="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlackHole01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="black-hole-01-solid-sharp IconBlackHole01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfBlackHole01: TheIconSelfPack = {
  name: 'BlackHole01',
  StrokeRounded: IconBlackHole01StrokeRounded,
  DuotoneRounded: IconBlackHole01DuotoneRounded,
  TwotoneRounded: IconBlackHole01TwotoneRounded,
  SolidRounded: IconBlackHole01SolidRounded,
  BulkRounded: IconBlackHole01BulkRounded,
  StrokeSharp: IconBlackHole01StrokeSharp,
  SolidSharp: IconBlackHole01SolidSharp,
};