import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.0072 14.5673L19.3588 14.1743C18.7986 13.8519 18.358 13.3576 18.1021 12.7646L15.6801 7.15217C15.5927 6.94981 15.4729 6.78104 15.3281 6.64213C14.6877 6.02805 13.5808 6.28813 13.0433 6.99342C12.0507 8.29564 13.384 9.52867 13.1023 10.6145L5.35914 6.26205C3.55805 5.29029 2.00246 7.8719 3.79283 9.06449L8.37613 11.6136C7.49346 12.7662 5.25518 18.3562 8.12347 20.061C8.28652 20.158 8.46726 20.2225 8.64858 20.2785C8.76523 20.3145 8.88192 20.3508 8.99767 20.3869C9.89796 20.6679 11.6004 21.0211 12.7668 20.9194C13.9812 20.8135 14.7422 21.4609 15.68 22.0007',
  d2: 'M9.3619 4.96465C9.75879 5.3603 11.4854 5.24616 12.1223 5.16671M9.3619 4.96465C8.96501 4.56901 8.95364 2.63697 9.03334 2.00208M9.3619 4.96465C10.383 3.19642 14.4425 0.375875 18.4709 3.19642C20.4176 4.55942 20.6923 5.41838 21.0001 5.99381',
  d3: 'M8.38004 11.6445L3.7787 9.00875C3.00527 8.56571 2.78323 7.51067 3.22439 6.75255C3.66555 5.99443 4.62232 5.78685 5.39575 6.22989L13.1981 10.6992L12.7203 8.16685C12.5531 7.28041 13.1595 6.43288 14.0581 6.29709C14.8057 6.18412 15.5316 6.60356 15.8014 7.30449L17.7067 11.9789C18.0386 12.7932 18.2046 13.2005 18.4825 13.5312C18.5072 13.5606 18.5324 13.5894 18.5583 13.6177C18.8499 13.9367 19.2332 14.1563 20 14.5955L15.6916 21.9995L14.3967 21.2578C13.656 20.8335 12.5361 20.9826 11.7145 20.9298C10.1958 20.832 7.42198 20.2998 6.97746 18.5686C6.22316 15.6308 7.47584 12.9135 8.38004 11.6445Z',
  d4: 'M20.0072 14.5668L19.3588 14.1738C18.7986 13.8514 18.358 13.3571 18.1021 12.7641L15.6801 7.15168C15.5927 6.94932 15.4729 6.78055 15.3281 6.64164C14.6877 6.02756 13.5808 6.28764 13.0433 6.99293C12.0507 8.29515 13.384 9.52818 13.1023 10.614L5.35914 6.26156C3.55805 5.2898 2.00246 7.87141 3.79283 9.064L8.37613 11.6131C7.49346 12.7657 5.25518 18.3557 8.12347 20.0605C8.28652 20.1575 8.46726 20.222 8.64858 20.278C8.76523 20.314 8.88192 20.3503 8.99767 20.3864C9.89796 20.6674 11.6004 21.0206 12.7668 20.9189C13.9812 20.813 14.7422 21.4604 15.68 22.0002',
  d5: 'M9.3619 4.96416C9.75879 5.35981 11.4854 5.24567 12.1223 5.16622M9.3619 4.96416C8.96501 4.56852 8.95364 2.63648 9.03334 2.00159M9.3619 4.96416C10.383 3.19593 14.4425 0.375389 18.4709 3.19593C20.4176 4.55893 20.6923 5.41789 21.0001 5.99332',
  d6: 'M21.6439 5.55538C21.8916 6.04901 21.6922 6.64996 21.1986 6.89763C20.7049 7.1453 20.104 6.9459 19.8563 6.45226C18.183 3.11714 14.3356 2.10258 11.62 3.85389L12.4308 4.68487C12.5122 4.78651 12.5683 4.91068 12.5877 5.04901C12.6453 5.45919 12.3595 5.83843 11.9493 5.89606C11.4878 5.96091 11.0282 5.98765 10.6962 5.99588C10.3688 6.004 9.99698 5.99672 9.65759 5.94696C9.36207 5.90363 8.91495 5.80662 8.60275 5.5047C8.42919 5.33686 8.3255 5.13323 8.26019 4.96713C8.192 4.7937 8.14513 4.60772 8.1114 4.42964C8.04402 4.07388 8.01582 3.67698 8.00531 3.3228C7.99465 2.96402 7.9975 2.43352 8.03322 1.96126C8.06428 1.54821 8.424 1.23855 8.83705 1.2696C9.03157 1.28423 9.20316 1.37193 9.32702 1.50378L10.1953 2.39373C13.9554 -0.37211 19.4241 1.13097 21.6439 5.55538Z',
  d7: 'M14.0227 22.525C13.8132 22.405 13.4977 22.3412 13.0494 22.3201C12.8397 22.3102 12.6255 22.3102 12.3975 22.3101C12.1694 22.31 11.8983 22.3097 11.665 22.2946C10.8624 22.243 9.70716 22.0767 8.67225 21.678C7.67111 21.2923 6.56567 20.602 6.24973 19.3715C5.54056 16.6096 6.44003 14.0581 7.324 12.5211L3.40461 10.276C2.23187 9.60419 1.94719 8.0704 2.57486 6.99177C3.24597 5.83848 4.67646 5.5707 5.76724 6.19553L12.1583 9.85646L11.982 8.92232C11.735 7.61286 12.6315 6.37039 13.9447 6.17194C15.0342 6.00731 16.0974 6.61602 16.4972 7.64398L18.3999 12.3123C18.7495 13.17 18.8708 13.4455 19.0554 13.6652C19.3401 13.9767 19.6452 14.3131 19.8151 14.5204C19.9713 14.711 20.1578 14.9569 20.2366 15.2378C20.323 15.4205 20.3611 15.9464 20.1099 16.4805L16.7787 22.2143C16.6788 22.3617 16.5567 22.5166 16.3858 22.6467C16.0201 22.9253 15.5593 23.0488 15.1033 22.9904C14.8902 22.9631 14.707 22.8901 14.5468 22.8123C14.3978 22.74 14.2083 22.6314 14.0227 22.525Z',
  d8: 'M15.6899 22.0018L14.0098 20.9354C11.8262 21.0151 8.75475 20.9513 7.37174 19.2936C6.83443 18.5884 6.65196 17.4705 6.79137 16.1762C6.9766 14.4567 7.24826 13.4546 8.409 11.6485L3.80797 9.00594C3.03723 8.56327 2.77053 7.57853 3.21224 6.8063C3.65423 6.03356 4.63805 5.76643 5.40906 6.20979L13.2678 10.729C13.1073 9.62591 12.8885 9.30632 12.7168 8.14178C12.6699 7.82341 12.7219 7.49858 12.8511 7.2039C13.1701 6.47601 13.9831 6.1034 14.7414 6.33761L14.7728 6.34729C15.2547 6.49614 15.6382 6.86405 15.8076 7.33991L17.9996 13.4987L19.9986 14.5889',
  d9: 'M21.0007 5.99943C20.0976 4.22163 18.761 3.05357 16.9297 2.36712C15.6549 1.88926 14.236 1.90453 12.9416 2.32609C11.9537 2.60606 10.6769 3.43724 9.8754 4.45254M9.50098 1.99854V5.00294H12.0095',
  d10: 'M15.1984 0.788947C13.4268 0.606395 11.617 1.06351 10.1055 2.20393V0.788947H8.10547V5.71943H12.6055V3.72288H11.4119C12.4992 2.94124 13.7638 2.64828 14.993 2.77494C16.8549 2.9668 18.6878 4.12981 19.7117 6.16704L21.4993 5.27171C20.1747 2.63629 17.7521 1.05209 15.1984 0.788947Z',
  d11: 'M14.0421 21.8898L14.0278 21.8902C13.8752 21.8944 13.6631 21.8994 13.4246 21.9028C12.9546 21.9094 12.3576 21.9099 11.915 21.8815C11.1124 21.8299 9.95716 21.6639 8.92225 21.2659C7.92111 20.8809 6.81567 20.1918 6.49973 18.9634C5.79056 16.2062 6.69003 13.6591 7.574 12.1248L3.65461 9.88358C2.48187 9.21297 2.19719 7.68183 2.82486 6.60506C3.49597 5.45376 4.92646 5.18645 6.01724 5.81019L12.4083 9.4648L12.232 8.53227C11.985 7.22508 12.8815 5.98476 14.1947 5.78665C15.2868 5.62191 16.3526 6.2329 16.7501 7.2636L16.7536 7.27285L18.8599 13.1975L21.284 14.5237L16.1971 23.2502L14.0421 21.8898Z',
};

export const IconRotateLeft01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-stroke-rounded IconRotateLeft01StrokeRounded"
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

export const IconRotateLeft01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-duotone-rounded IconRotateLeft01DuotoneRounded"
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

export const IconRotateLeft01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-twotone-rounded IconRotateLeft01TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-solid-rounded IconRotateLeft01SolidRounded"
    >
      <path 
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

export const IconRotateLeft01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-bulk-rounded IconRotateLeft01BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-stroke-sharp IconRotateLeft01StrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconRotateLeft01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-01-solid-sharp IconRotateLeft01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRotateLeft01: TheIconSelfPack = {
  name: 'RotateLeft01',
  StrokeRounded: IconRotateLeft01StrokeRounded,
  DuotoneRounded: IconRotateLeft01DuotoneRounded,
  TwotoneRounded: IconRotateLeft01TwotoneRounded,
  SolidRounded: IconRotateLeft01SolidRounded,
  BulkRounded: IconRotateLeft01BulkRounded,
  StrokeSharp: IconRotateLeft01StrokeSharp,
  SolidSharp: IconRotateLeft01SolidSharp,
};