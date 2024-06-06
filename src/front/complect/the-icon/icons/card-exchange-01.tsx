import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 16C2 18.2109 2 19.3164 2.70187 20.0544C2.81413 20.1725 2.93785 20.2817 3.07164 20.3807C3.90809 21 5.16095 21 7.66667 21H8.33333C10.8391 21 12.0919 21 12.9284 20.3807C13.0621 20.2817 13.1859 20.1725 13.2981 20.0544C14 19.3164 14 18.2109 14 16C14 13.7891 14 12.6836 13.2981 11.9456C13.1859 11.8275 13.0621 11.7183 12.9284 11.6193C12.0919 11 10.8391 11 8.33333 11H7.66667C5.16095 11 3.90809 11 3.07164 11.6193C2.93785 11.7183 2.81413 11.8275 2.70187 11.9456C2 12.6836 2 13.7891 2 16Z',
  d2: 'M10 8.00001C10 5.78908 10 4.68362 10.7019 3.94557C10.8141 3.82753 10.9379 3.71835 11.0716 3.6193C11.9081 3.00001 13.1609 3.00001 15.6667 3.00001H16.3333C18.8391 3.00001 20.0919 3.00001 20.9284 3.6193C21.0621 3.71835 21.1859 3.82753 21.2981 3.94557C22 4.68362 22 5.78908 22 8.00001C22 10.2109 22 11.3164 21.2981 12.0544C21.1859 12.1725 21.0621 12.2817 20.9284 12.3807C20.1696 12.9425 19.0683 12.9947 17 12.9995',
  d3: 'M2 15L14 15',
  d4: 'M10 7L22 7',
  d5: 'M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429',
  d6: 'M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857',
  d7: 'M8.33333 21H7.66667C5.16095 21 3.90809 21 3.07164 20.3807C2.93785 20.2817 2.81413 20.1725 2.70187 20.0544C2 19.3164 2 18.2109 2 16C2 15.6381 2 15.3059 2.00308 15H13.9969C14 15.3059 14 15.6381 14 16C14 18.2109 14 19.3164 13.2981 20.0544C13.1859 20.1725 13.0621 20.2817 12.9284 20.3807C12.0919 21 10.8391 21 8.33333 21Z',
  d8: 'M15.6667 13H16.3333C18.8391 13 20.0919 13 20.9284 12.3807C21.0621 12.2817 21.1859 12.1725 21.2981 12.0544C22 11.3164 22 10.2109 22 8C22 7.63813 22 7.30588 21.9969 7H10.0031C10 7.30588 10 7.63813 10 8C10 9.371 10 10.3169 10.1674 11.0137C11.5102 11.0489 12.3269 11.174 12.9284 11.6193C13.0621 11.7183 13.1859 11.8275 13.2981 11.9456C13.5648 12.2259 13.7301 12.5594 13.8326 12.9863C14.3574 13 14.9626 13 15.6667 13Z',
  d9: 'M10 8.0005C10 5.78957 10 4.68411 10.7019 3.94606C10.8141 3.82801 10.9379 3.71884 11.0716 3.61979C11.9081 3.0005 13.1609 3.0005 15.6667 3.0005H16.3333C18.8391 3.0005 20.0919 3.0005 20.9284 3.61979C21.0621 3.71884 21.1859 3.82801 21.2981 3.94606C22 4.68411 22 5.78957 22 8.0005C22 10.2114 22 11.3169 21.2981 12.0549C21.1859 12.173 21.0621 12.2822 20.9284 12.3812C20.1696 12.943 19.0683 12.9952 17 13',
  d10: 'M10 7.99952C10 5.78859 10 4.68313 10.7019 3.94508C10.8141 3.82704 10.9379 3.71787 11.0716 3.61881C11.9081 2.99952 13.1609 2.99952 15.6667 2.99952H16.3333C18.8391 2.99952 20.0919 2.99952 20.9284 3.61881C21.0621 3.71787 21.1859 3.82704 21.2981 3.94508C22 4.68313 22 5.78859 22 7.99952C22 10.2104 22 11.3159 21.2981 12.054C21.1859 12.172 21.0621 12.2812 20.9284 12.3802C20.1696 12.942 19.0683 12.9942 17 12.999',
  d11: 'M11.3363 21.6684C10.5657 21.75 9.59327 21.75 8.37721 21.75H7.62378C6.40773 21.75 5.43525 21.75 4.66469 21.6684C3.87426 21.5847 3.19852 21.4075 2.62585 20.9835C2.458 20.8592 2.30164 20.7214 2.15887 20.5713C1.65972 20.0464 1.44468 19.413 1.34507 18.6806C1.25044 17.985 1.25046 17.1134 1.25049 16.053V15.947C1.25049 15.827 1.25048 15.7093 1.25062 15.594C1.25094 15.315 1.25111 15.1755 1.33895 15.0877C1.4268 15 1.56703 15 1.84749 15H14.1535C14.434 15 14.5742 15 14.662 15.0877C14.7499 15.1755 14.75 15.315 14.7504 15.594C14.7505 15.7093 14.7505 15.8269 14.7505 15.947V16.053C14.7505 17.1134 14.7505 17.985 14.6559 18.6806C14.5563 19.413 14.3413 20.0464 13.8421 20.5713C13.6993 20.7214 13.543 20.8592 13.3751 20.9835C12.8025 21.4075 12.1267 21.5847 11.3363 21.6684Z',
  d12: 'M14.6622 13.3673C14.699 13.6533 14.7173 13.7963 14.6277 13.8982C14.5381 14 14.3865 14 14.0831 14H1.91785C1.61451 14 1.46284 14 1.37324 13.8982C1.28365 13.7963 1.30201 13.6533 1.33873 13.3673C1.3408 13.3512 1.34291 13.3352 1.34507 13.3194C1.44468 12.587 1.65972 11.9536 2.15887 11.4287C2.30164 11.2786 2.458 11.1408 2.62585 11.0165C3.19852 10.5925 3.87426 10.4153 4.66469 10.3316C5.43524 10.25 6.4077 10.25 7.62374 10.25H8.37721C9.59325 10.25 10.5657 10.25 11.3363 10.3316C12.1267 10.4153 12.8025 10.5925 13.3751 11.0165C13.543 11.1408 13.6993 11.2786 13.8421 11.4287C14.3413 11.9536 14.5563 12.587 14.6559 13.3194C14.6581 13.3352 14.6602 13.3512 14.6622 13.3673Z',
  d13: 'M14.9291 10.395C15.725 11.232 16.0189 12.2108 16.1422 13.1172C16.1624 13.2657 16.1789 13.4198 16.1922 13.5787C16.2004 13.6751 16.2804 13.75 16.3772 13.75C17.5932 13.75 18.5657 13.75 19.3363 13.6684C20.1267 13.5847 20.8025 13.4075 21.3751 12.9835C21.543 12.8592 21.6993 12.7214 21.8421 12.5713C22.3413 12.0464 22.5563 11.413 22.6559 10.6806C22.7505 9.98499 22.7505 9.11335 22.7505 8.05298V7.94702C22.7505 7.82695 22.7505 7.70929 22.7504 7.59404C22.75 7.315 22.7499 7.17549 22.662 7.08774C22.5742 7 22.434 7 22.1535 7H9.84749C9.56703 7 9.4268 7 9.33896 7.08774C9.25111 7.17549 9.25095 7.315 9.25062 7.59403C9.25048 7.70928 9.25049 7.82693 9.25049 7.94699V8.15694C9.25051 8.4357 9.25052 8.5751 9.33677 8.66267C9.42301 8.75024 9.56396 8.7524 9.84587 8.75672C10.4492 8.76598 11.0033 8.78793 11.4943 8.83992C12.4037 8.93623 13.3862 9.15832 14.2677 9.81098C14.5037 9.98568 14.7253 10.1808 14.9291 10.395Z',
  d14: 'M9.33874 5.36729C9.30201 5.65331 9.28365 5.79633 9.37324 5.89816C9.46284 6 9.61451 6 9.91785 6H22.0831C22.3865 6 22.5381 6 22.6277 5.89816C22.7173 5.79633 22.699 5.65331 22.6622 5.36729C22.6602 5.35122 22.6581 5.33525 22.6559 5.31937C22.5563 4.58704 22.3413 3.95361 21.8421 3.42872C21.6993 3.2786 21.543 3.14079 21.3751 3.01652C20.8025 2.59253 20.1267 2.41529 19.3363 2.33158C18.5657 2.24998 17.5933 2.24999 16.3772 2.25H15.6238C14.4077 2.24999 13.4352 2.24998 12.6647 2.33158C11.8743 2.41529 11.1985 2.59253 10.6258 3.01652C10.458 3.14079 10.3016 3.2786 10.1589 3.42872C9.65972 3.95361 9.44468 4.58704 9.34507 5.31937C9.34291 5.33525 9.3408 5.35122 9.33874 5.36729Z',
  d15: 'M5.77473 4.24219L6.56654 5.19395C6.72849 5.38861 6.97772 5.48841 7.22926 5.45932C7.4808 5.43023 7.70068 5.27618 7.81392 5.0497L8.67106 3.33541C8.78731 3.10292 8.77489 2.82681 8.63823 2.6057C8.50158 2.38459 8.26018 2.25 8.00024 2.25C7.2127 2.25 6.45527 2.38478 5.75077 2.63328C3.12788 3.55843 1.25024 6.05696 1.25024 9C1.25024 9.41421 1.58603 9.75 2.00024 9.75C2.41446 9.75 2.75024 9.41421 2.75024 9C2.75024 6.89355 3.98629 5.07881 5.77473 4.24219Z',
  d16: 'M18.2258 19.7578L17.4339 18.806C17.272 18.6114 17.0228 18.5116 16.7712 18.5407C16.5197 18.5698 16.2998 18.7238 16.1866 18.9503L15.3294 20.6646C15.2132 20.8971 15.2256 21.1732 15.3623 21.3943C15.4989 21.6154 15.7403 21.75 16.0002 21.75C16.7878 21.75 17.5452 21.6152 18.2497 21.3667C20.8726 20.4416 22.7502 17.943 22.7502 15C22.7502 14.5858 22.4145 14.25 22.0002 14.25C21.586 14.25 21.2502 14.5858 21.2502 15C21.2502 17.1064 20.0142 18.9212 18.2258 19.7578Z',
  d17: 'M14 21H2V11H14V21Z',
  d18: 'M16 12.9995H22V3H10V8.99976',
  d19: 'M2 8C2 5 3.5 3 7 3V5',
  d20: 'M22 16C22 19 20.5 21 17 21V19',
  d21: 'M16.25 8.75H9.25V6.75H22.75V12.9995C22.75 13.4137 22.4142 13.7495 22 13.7495H16.25V8.75Z',
  d22: 'M22.75 5.25H9.25V2.99951C9.25 2.5853 9.58579 2.24951 10 2.24951H22C22.4142 2.24951 22.75 2.5853 22.75 2.99951V5.25Z',
  d23: 'M2 21.75C1.58579 21.75 1.25 21.4142 1.25 21V14.75H14.75V21C14.75 21.4142 14.4142 21.75 14 21.75H2Z',
  d24: 'M14.75 13.25V11C14.75 10.5858 14.4142 10.25 14 10.25H2C1.58579 10.25 1.25 10.5858 1.25 11V13.25H14.75Z',
  d25: 'M3.7371 4.88534C3.09637 5.57535 2.75 6.61497 2.75 8H1.25C1.25 6.38503 1.65363 4.92465 2.6379 3.86466C3.63152 2.79462 5.10705 2.25 7 2.25H7.75V5H6.25V3.78628C5.06502 3.90668 4.26412 4.31778 3.7371 4.88534Z',
  d26: 'M20.2629 19.1147C20.9036 18.4246 21.25 17.385 21.25 16H22.75C22.75 17.615 22.3464 19.0754 21.3621 20.1353C20.3685 21.2054 18.8929 21.75 17 21.75H16.25V19H17.75V20.2137C18.935 20.0933 19.7359 19.6822 20.2629 19.1147Z',
};

export const IconCardExchange01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-stroke-rounded IconCardExchange01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconCardExchange01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-duotone-rounded IconCardExchange01DuotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconCardExchange01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-twotone-rounded IconCardExchange01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCardExchange01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-solid-rounded IconCardExchange01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCardExchange01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-bulk-rounded IconCardExchange01BulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-stroke-sharp IconCardExchange01StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardExchange01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="card-exchange-01-solid-sharp IconCardExchange01SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfCardExchange01: TheIconSelfPack = {
  name: 'CardExchange01',
  StrokeRounded: IconCardExchange01StrokeRounded,
  DuotoneRounded: IconCardExchange01DuotoneRounded,
  TwotoneRounded: IconCardExchange01TwotoneRounded,
  SolidRounded: IconCardExchange01SolidRounded,
  BulkRounded: IconCardExchange01BulkRounded,
  StrokeSharp: IconCardExchange01StrokeSharp,
  SolidSharp: IconCardExchange01SolidSharp,
};