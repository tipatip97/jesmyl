import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 6L20 18.0007',
  d2: 'M11.503 12.0113V12.3819C11.4624 15.353 11.5973 16.3852 12.8479 15.906L13.1559 15.7241L13.4046 15.5513L13.9398 15.1383L14.9402 14.269L15.963 13.4052L16.463 12.9521L16.6857 12.7255L16.9479 12.3465L17.0017 12.0102L16.9479 11.6762L16.6857 11.2971L16.463 11.0706L15.963 10.6175L14.9402 9.75372L13.9398 8.88439L13.4046 8.4714L13.1559 8.29862L12.8479 8.1167C11.5973 7.63748 11.4624 8.66971 11.503 11.6408V12.0113ZM11.503 12.0113H4',
  d3: 'M15.7037 13.6026L14.8178 14.3639C13.3825 15.5974 12.6648 16.2141 12.0824 15.9328C11.5 15.6515 11.5 14.6881 11.5 12.7613V11.2387C11.5 9.31191 11.5 8.34853 12.0824 8.06721C12.6648 7.7859 13.3825 8.40264 14.8178 9.63612L15.7037 10.3974C16.5679 11.1401 17 11.5115 17 12C17 12.4885 16.5679 12.8599 15.7037 13.6026Z',
  d4: 'M20 6V18',
  d5: 'M11.503 12.0111V12.3812C11.4624 15.3532 11.5974 16.3851 12.8479 15.9061L13.156 15.7241L13.4046 15.5511L13.9398 15.1381L14.9401 14.2692L15.9631 13.4051L16.4631 12.9521L16.6856 12.7251L16.9479 12.3462L17.0016 12.0102L16.9479 11.6761L16.6856 11.2971L16.4631 11.0702L15.9631 10.6171L14.9401 9.75313L13.9398 8.88415L13.4046 8.47115L13.156 8.29815L12.8479 8.11614C11.5974 7.63714 11.4624 8.66916 11.503 11.6402V12.0111ZM11.503 12.0111H4',
  d6: 'M19.25 18C19.25 18.4142 19.5858 18.75 20 18.75C20.4142 18.75 20.75 18.4142 20.75 18L19.25 18ZM20.75 6C20.75 5.58579 20.4142 5.25 20 5.25C19.5858 5.25 19.25 5.58579 19.25 6L20.75 6ZM20.75 18L20.75 6L19.25 6L19.25 18L20.75 18Z',
  d7: 'M14.8178 14.3639L14.329 13.7951L14.8178 14.3639ZM15.7037 13.6026L15.2149 13.0337L15.7037 13.6026ZM15.7037 10.3974L16.1925 9.82864V9.82864L15.7037 10.3974ZM14.8178 9.63612L14.329 10.2049L14.8178 9.63612ZM11.5 11.2387H10.75H11.5ZM11.5 12.7613H12.25H11.5ZM12.0824 8.06721L12.4086 8.74256L12.4086 8.74256L12.0824 8.06721ZM12.0824 15.9328L12.4086 15.2574L12.0824 15.9328ZM11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25V12.75ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L4 11.25ZM15.3066 14.9327L16.1925 14.1714L15.2149 13.0337L14.329 13.7951L15.3066 14.9327ZM16.1925 9.82864L15.3066 9.06731L14.329 10.2049L15.2149 10.9663L16.1925 9.82864ZM15.3066 9.06731C14.6086 8.46742 14.0208 7.95966 13.5314 7.6499C13.0547 7.3482 12.4199 7.07131 11.7562 7.39187L12.4086 8.74256C12.3274 8.7818 12.3425 8.67263 12.7291 8.91734C13.103 9.15399 13.5917 9.57134 14.329 10.2049L15.3066 9.06731ZM12.25 11.2387C12.25 10.2506 12.2518 9.59237 12.3155 9.14051C12.3818 8.66977 12.479 8.70856 12.4086 8.74256L11.7562 7.39187C11.1034 7.70719 10.9094 8.36832 10.8301 8.93129C10.7482 9.51315 10.75 10.3 10.75 11.2387H12.25ZM16.1925 14.1714C16.6072 13.815 16.9806 13.4964 17.2402 13.2C17.5145 12.8868 17.75 12.5016 17.75 12H16.25C16.25 12.0039 16.2508 12.0105 16.24 12.0335C16.2257 12.0639 16.1918 12.1204 16.1117 12.2119C15.9391 12.409 15.6644 12.6474 15.2149 13.0337L16.1925 14.1714ZM15.2149 10.9663C15.6644 11.3526 15.9391 11.591 16.1117 11.7881C16.1918 11.8796 16.2257 11.9361 16.24 11.9665C16.2508 11.9895 16.25 11.9961 16.25 12H17.75C17.75 11.4984 17.5145 11.1132 17.2402 10.8C16.9806 10.5036 16.6072 10.185 16.1925 9.82864L15.2149 10.9663ZM14.329 13.7951C13.5917 14.4287 13.103 14.846 12.7291 15.0827C12.3425 15.3274 12.3274 15.2182 12.4086 15.2574L11.7562 16.6081C12.4199 16.9287 13.0547 16.6518 13.5314 16.3501C14.0208 16.0403 14.6086 15.5326 15.3066 14.9327L14.329 13.7951ZM10.75 12.7613C10.75 13.7 10.7482 14.4868 10.8301 15.0687C10.9094 15.6317 11.1034 16.2928 11.7562 16.6081L12.4086 15.2574C12.479 15.2914 12.3818 15.3302 12.3155 14.8595C12.2518 14.4076 12.25 13.7494 12.25 12.7613H10.75ZM10.75 11.2387V12.7613H12.25V11.2387H10.75ZM11.5 11.25L4 11.25L4 12.75L11.5 12.75V11.25Z',
  d8: 'M20 5C19.4477 5 19 5.44772 19 6L19 18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18L21 6C21 5.44772 20.5523 5 20 5Z',
  d9: 'M3.99987 11.0004C3.44758 11.0004 2.99987 11.4481 2.99987 12.0004C2.99987 12.5527 3.44758 13.0004 3.99987 13.0004L11 13.0004L11 14.0873C10.9998 14.4666 10.9997 14.8599 11.0477 15.1717C11.099 15.505 11.2553 16.0844 11.864 16.37C12.4663 16.6526 13.005 16.412 13.2974 16.2367C13.5651 16.0763 13.8625 15.8276 14.1461 15.5904L14.1932 15.5511C14.7663 15.0722 15.414 14.4986 15.9263 13.9529C16.181 13.6817 16.4249 13.3935 16.6113 13.1093C16.7726 12.8635 17 12.4621 17 12C17 11.5379 16.7726 11.1366 16.6113 10.8908C16.4249 10.6066 16.181 10.3184 15.9263 10.0471C15.414 9.50146 14.7663 8.92787 14.1932 8.44896L14.1462 8.40965C13.8625 8.17242 13.5652 7.92375 13.2975 7.76333C13.005 7.58805 12.4663 7.34739 11.864 7.62998C11.2553 7.91554 11.099 8.49501 11.0477 8.82833C10.9997 9.14007 10.9999 9.53339 11 9.91274L11 11.0004L3.99987 11.0004Z',
  d10: 'M19.998 6L19.998 18',
  d11: 'M11.998 12L3.99805 12',
  d12: 'M16.998 12L11.9981 16L11.998 8L16.998 12Z',
  d13: 'M20.5 18L20.5 6L18.5 6L18.5 18H20.5Z',
  d14: 'M10.5494 11L3.5 11V13L10.5494 13L10.5495 17.5L16.5 11.9999L10.5494 6.5L10.5494 11Z',
};

export const IconArrowRight05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-stroke-rounded IconArrowRight05StrokeRounded"
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

export const IconArrowRight05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-duotone-rounded IconArrowRight05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconArrowRight05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-twotone-rounded IconArrowRight05TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowRight05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-solid-rounded IconArrowRight05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowRight05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-bulk-rounded IconArrowRight05BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowRight05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-stroke-sharp IconArrowRight05StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowRight05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-05-solid-sharp IconArrowRight05SolidSharp"
    >
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

export const iconPackOfArrowRight05: TheIconSelfPack = {
  name: 'ArrowRight05',
  StrokeRounded: IconArrowRight05StrokeRounded,
  DuotoneRounded: IconArrowRight05DuotoneRounded,
  TwotoneRounded: IconArrowRight05TwotoneRounded,
  SolidRounded: IconArrowRight05SolidRounded,
  BulkRounded: IconArrowRight05BulkRounded,
  StrokeSharp: IconArrowRight05StrokeSharp,
  SolidSharp: IconArrowRight05SolidSharp,
};