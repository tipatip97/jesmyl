import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z',
  d2: 'M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z',
  d3: 'M7.5 12.5V6.5',
  d4: 'M14.9263 2.91103L8.27352 6.10452C8.02311 6.22472 7.76432 6.30086 7.5 6.33267V12.6673C7.76432 12.6991 8.02312 12.7753 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z',
  d5: 'M9.91662 15.9019C10.3627 16.6099 10.9227 17.1218 11.6036 17.5679C12.8578 18.3894 13.2529 20.2617 11.935 21.3479L10.4437 22.577C10.1707 22.8019 9.77774 22.8056 9.50063 22.5859C7.76061 21.2058 6.87723 20.0919 6.50256 18.5769C6.32313 17.8514 6.26851 17.0668 6.25422 16.1774C6.24766 15.7691 6.24973 15.319 6.2538 14.8298L7.09389 14.663C7.2165 14.6355 7.30441 14.6471 7.40798 14.6968L9.91662 15.9019Z',
  d6: 'M18.307 1.38609C17.6954 1.18084 17.1267 1.22491 16.5338 1.40411C15.9896 1.56858 15.3725 1.86487 14.6511 2.2112L8.25 5.2839L8.25 13.7161L14.6511 16.7888C15.3725 17.1351 15.9896 17.4314 16.5338 17.5959C17.1267 17.7751 17.6954 17.8192 18.307 17.6139C19.4638 17.2257 19.8888 16.3311 20.4073 15.2397L20.4734 15.1007C21.3245 13.3152 21.75 11.4076 21.75 9.50002C21.75 7.5924 21.3245 5.68479 20.4734 3.89928L20.4073 3.76026C19.8888 2.66887 19.4638 1.77429 18.307 1.38609ZM6.75 13.4607L6.75 5.53925C6.46334 5.4751 6.22088 5.42218 6.0474 5.40237C4.90196 5.27157 3.92731 5.66445 3.25155 6.37999C2.59012 7.08036 2.25 8.04945 2.25 9.04429L2.25 9.95571C2.25 10.9505 2.59012 11.9196 3.25155 12.62C3.92731 13.3355 4.90196 13.7284 6.0474 13.5976C6.22088 13.5778 6.46334 13.5249 6.75 13.4607Z',
  d7: 'M18.307 1.38609C17.6954 1.18084 17.1267 1.22491 16.5338 1.40411C15.9896 1.56858 15.3725 1.86487 14.6511 2.2112L8.59035 5.12052C8.42489 5.19994 8.34217 5.23965 8.29608 5.31289C8.25 5.38613 8.25 5.4779 8.25 5.66143L8.25 13.3386C8.25 13.5221 8.25 13.6139 8.29608 13.6871C8.34217 13.7603 8.42489 13.8001 8.59035 13.8795L14.6511 16.7888C15.3725 17.1351 15.9896 17.4314 16.5338 17.5959C17.1267 17.7751 17.6954 17.8192 18.307 17.6139C19.4638 17.2257 19.8888 16.3311 20.4073 15.2397L20.4734 15.1007C21.3245 13.3152 21.75 11.4076 21.75 9.50002C21.75 7.5924 21.3245 5.68479 20.4734 3.89928L20.4073 3.76026C19.8888 2.66887 19.4638 1.77429 18.307 1.38609Z',
  d8: 'M6.27993 13.5622C6.50132 13.5203 6.61202 13.4993 6.68101 13.4161C6.75 13.3328 6.75 13.2157 6.75 12.9816L6.75 6.02126C6.75 5.78714 6.75 5.67008 6.68101 5.58682C6.61202 5.50355 6.50132 5.48261 6.27993 5.44072C6.19294 5.42426 6.11494 5.41153 6.0474 5.40382C4.90196 5.27301 3.92731 5.6659 3.25155 6.38143C2.59012 7.0818 2.25 8.0509 2.25 9.04573V9.95716C2.25 10.952 2.59012 11.9211 3.25155 12.6215C3.92731 13.337 4.90196 13.7299 6.0474 13.5991C6.11494 13.5914 6.19294 13.5786 6.27993 13.5622Z',
  d9: 'M7.95235 13.0401L9.94958 17.0178L12.9112 18.9396C12.9648 18.9744 12.9725 19.0497 12.9272 19.0947L10.0226 21.9758C9.98104 22.0171 9.91308 22.014 9.87543 21.9691L6.97482 18.512V13.0401M3 6.5242H7.50729L17.9051 2.01311C17.9426 1.99686 17.9864 2.00513 18.0153 2.03398C19.816 3.83091 20.7545 5.94749 21 9.00502C21 12.9044 19.9871 14.9721 17.9825 17.0233L7.50729 12.5037H3V6.5242Z',
  d10: 'M18.5133 1.45323C18.296 1.24921 17.9785 1.19324 17.7046 1.31066L8.25 5.36261V13.6374L17.7046 17.6894C17.9785 17.8068 18.296 17.7508 18.5133 17.5468C20.5019 15.6799 21.75 12.7512 21.75 9.50002C21.75 6.24884 20.5019 3.32012 18.5133 1.45323Z',
  d11: 'M6.75 13.25V5.75002H2.25V13.25H6.75Z',
  d12: 'M6.26143 14.75L6.25 18.7742L9.39517 22.485C9.53025 22.6443 9.72567 22.7401 9.93438 22.7493C10.1431 22.7585 10.3462 22.6802 10.4947 22.5333L13.528 19.5333C13.6888 19.3743 13.7692 19.1513 13.747 18.9263C13.7248 18.7013 13.6022 18.4983 13.4135 18.3739L10.5504 16.4861L10.4066 16.1936L7.03817 14.75H6.26143Z',
};

export const IconPromotionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-stroke-rounded IconPromotionStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPromotionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-duotone-rounded IconPromotionDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPromotionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-twotone-rounded IconPromotionTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPromotionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-solid-rounded IconPromotionSolidRounded"
    >
      <path 
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

export const IconPromotionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-bulk-rounded IconPromotionBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPromotionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-stroke-sharp IconPromotionStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPromotionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="promotion-solid-sharp IconPromotionSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPromotion: TheIconSelfPack = {
  name: 'Promotion',
  StrokeRounded: IconPromotionStrokeRounded,
  DuotoneRounded: IconPromotionDuotoneRounded,
  TwotoneRounded: IconPromotionTwotoneRounded,
  SolidRounded: IconPromotionSolidRounded,
  BulkRounded: IconPromotionBulkRounded,
  StrokeSharp: IconPromotionStrokeSharp,
  SolidSharp: IconPromotionSolidSharp,
};