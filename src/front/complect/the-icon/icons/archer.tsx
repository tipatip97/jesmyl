import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 17.0294L20 21C19.4444 20.4444 18.4898 18.6435 19.1158 15.8842C19.8982 12.4351 21.3667 8.96668 15.9368 7.06317C14.0333 1.63335 10.5649 3.10176 7.11578 3.88422C4.35649 4.51018 2.55556 3.55556 2 3L6 12.0741',
  d2: 'M5 18H2L5 15H8V18L5 21V18Z',
  d3: 'M8 15L20 3',
  d4: 'M17 3H19C19.4714 3 19.7071 3 19.8536 3.14645C20 3.29289 20 3.5286 20 4V6',
  d5: 'M7.11578 3.88422C4.35649 4.51018 2.55556 3.55556 2 3L6 12.0741C6.51782 13.219 8.24277 15.813 11 17.0294L20 21C19.4444 20.4444 18.4898 18.6435 19.1158 15.8842C19.8982 12.4351 21.3666 8.96668 15.9368 7.06317C14.0333 1.63335 10.5649 3.10176 7.11578 3.88422Z',
  d6: 'M3 3C3.55556 3.55556 5.35649 4.51018 8.11578 3.88422C11.5649 3.10176 15.0333 1.63335 16.9368 7.06317C22.3667 8.96668 20.8982 12.4351 20.1158 15.8842C19.4898 18.6435 20.4444 20.4444 21 21',
  d7: 'M3 3L7 12.0741M21 21L12 17.0294',
  d8: 'M6 18H3L6 15H9V18L6 21V18Z',
  d9: 'M9 15L21 3',
  d10: 'M18 3H20C20.4714 3 20.7071 3 20.8536 3.14645C21 3.29289 21 3.5286 21 4V6',
  d11: 'M2.43521 2.17472C2.83237 1.90284 3.36687 1.95245 3.70721 2.29279C3.99739 2.58297 5.43805 3.46618 7.89465 2.90889C8.18307 2.84346 8.49367 2.76734 8.81318 2.68904C9.36885 2.55287 9.95148 2.41009 10.4912 2.30544C11.3727 2.13454 12.3152 2.02427 13.2439 2.15353C14.1976 2.28628 15.1162 2.66897 15.929 3.44021C16.6423 4.11709 17.2335 5.05439 17.715 6.28501C18.9456 6.76649 19.8829 7.3577 20.5598 8.07104C21.331 8.88382 21.7137 9.80241 21.8465 10.7561C21.9757 11.6848 21.8654 12.6273 21.6946 13.5087C21.5899 14.0485 21.4471 14.6311 21.311 15.1868C21.2327 15.5063 21.1565 15.8169 21.0911 16.1053C20.5338 18.5619 21.417 20.0026 21.7072 20.2928C22.0476 20.6332 22.0972 21.1677 21.8252 21.5649C21.5532 21.9621 21.0369 22.1091 20.5965 21.9148L11.5965 17.9442C11.0912 17.7213 10.8623 17.131 11.0852 16.6257C11.3081 16.1204 11.8984 15.8915 12.4037 16.1144L19.0389 19.0417C18.861 18.1001 18.8458 16.9627 19.1407 15.6629C19.2237 15.2966 19.3077 14.9556 19.3887 14.6263C19.5145 14.1153 19.6333 13.6326 19.7311 13.1281C19.8859 12.3296 19.9501 11.6393 19.8656 11.0318C19.7845 10.4494 19.5651 9.92838 19.109 9.44769C18.6382 8.9516 17.8676 8.44901 16.6061 8.00676C16.3193 7.90621 16.0938 7.6807 15.9932 7.39389C15.551 6.13235 15.0484 5.36175 14.5523 4.89102C14.0716 4.4349 13.5506 4.21551 12.9682 4.13444C12.3607 4.04988 11.6704 4.11406 10.8719 4.26887C10.3674 4.3667 9.88471 4.48549 9.37375 4.61125C9.04444 4.6923 8.70337 4.77624 8.33712 4.85933C7.03691 5.15429 5.89911 5.139 4.95739 4.9609L7.91514 11.6706C8.13791 12.176 7.90883 12.7662 7.40346 12.989C6.8981 13.2118 6.30783 12.9827 6.08506 12.4773L2.08506 3.40326C1.89092 2.96284 2.03805 2.44661 2.43521 2.17472Z',
  d12: 'M6 17.9999H3L6 14.9999H9V17.9999L6 20.9999V17.9999Z',
  d13: 'M18 1.99991C17.4477 1.99991 17 2.44763 17 2.99991C17 3.2971 17.1296 3.564 17.3354 3.74717L18.087 4.49871L8.33582 14.2499H6.00002C5.80111 14.2499 5.61034 14.3289 5.46969 14.4695L2.46969 17.4695C2.25519 17.684 2.19103 18.0066 2.30711 18.2869C2.4232 18.5671 2.69668 18.7499 3.00002 18.7499H5.25002V20.9999C5.25002 21.3032 5.43275 21.5767 5.71301 21.6928C5.99327 21.8089 6.31585 21.7447 6.53035 21.5302L9.53035 18.5302C9.671 18.3896 9.75002 18.1988 9.75002 17.9999V15.6641L19.5012 5.91292L20.3357 6.74739C20.5123 6.90449 20.745 6.99991 21 6.99991C21.5523 6.99991 22 6.5522 22 5.99991V3.99991L22 3.96053V3.96048V3.96046C22.0001 3.7606 22.0003 3.52266 21.9728 3.31803C21.9396 3.07098 21.8507 2.72924 21.5607 2.43925C21.2707 2.14926 20.9289 2.06035 20.6819 2.02713C20.4772 1.99962 20.2393 1.99977 20.0394 1.9999L20 1.99991H18Z',
  d14: 'M2.43509 2.17472C2.83225 1.90284 3.36675 1.95245 3.70708 2.29279C3.99726 2.58297 5.43793 3.46618 7.89453 2.90889C8.18295 2.84346 8.49355 2.76734 8.81306 2.68904C9.36873 2.55287 9.95135 2.41009 10.4911 2.30544C11.3725 2.13454 12.3151 2.02427 13.2437 2.15353C14.1975 2.28628 15.116 2.66897 15.9288 3.44021C16.6422 4.11709 17.2334 5.05439 17.7149 6.28501C18.9455 6.76649 19.8828 7.3577 20.5597 8.07104C21.3309 8.88382 21.7136 9.80241 21.8463 10.7561C21.9756 11.6848 21.8653 12.6273 21.6944 13.5087C21.5898 14.0485 21.447 14.6311 21.3108 15.1868C21.2325 15.5063 21.1564 15.8169 21.091 16.1053C20.5337 18.5619 21.4169 20.0026 21.7071 20.2928C22.0475 20.6332 22.097 21.1677 21.8251 21.5649C21.5531 21.9621 21.0367 22.1091 20.5963 21.9148L11.5963 17.9442C11.091 17.7213 10.8621 17.131 11.0851 16.6257C11.308 16.1204 11.8983 15.8915 12.4036 16.1144L19.0388 19.0417C18.8609 18.1001 18.8457 16.9627 19.1405 15.6629C19.2236 15.2966 19.3076 14.9556 19.3886 14.6263C19.5144 14.1153 19.6332 13.6326 19.731 13.1281C19.8858 12.3296 19.95 11.6393 19.8654 11.0318C19.7844 10.4494 19.565 9.92838 19.1089 9.44769C18.6381 8.9516 17.8675 8.44901 16.606 8.00676C16.3192 7.90621 16.0937 7.6807 15.9931 7.39389C15.5509 6.13235 15.0483 5.36175 14.5522 4.89102C14.0715 4.4349 13.5505 4.21551 12.968 4.13444C12.3605 4.04988 11.6703 4.11406 10.8718 4.26887C10.3673 4.3667 9.88459 4.48549 9.37363 4.61125C9.04432 4.6923 8.70325 4.77624 8.337 4.85933C7.03678 5.15429 5.89899 5.139 4.95727 4.9609L7.91502 11.6706C8.13779 12.176 7.9087 12.7662 7.40334 12.989C6.89798 13.2118 6.30771 12.9827 6.08494 12.4773L2.08494 3.40326C1.8908 2.96284 2.03793 2.44661 2.43509 2.17472Z',
  d15: 'M11 17.0264L20 20.9961C19.4444 20.4406 18.4898 18.6401 19.1158 15.8814C19.8982 12.4331 21.3667 8.96539 15.9368 7.06229C14.0333 1.63365 10.5649 3.10174 7.11578 3.88403C4.35649 4.50985 2.55556 3.55544 2 3L6 12.0721',
  d16: 'M5 17.9968H2L5 14.9974H8V17.9968L5 20.9961V17.9968Z',
  d17: 'M7.98828 15.0091L19.5435 3.44254M16.4139 2.99121L19.9941 2.99154V6.49761',
  d18: 'M3.17238 1.92145C3.55961 1.65637 4.08074 1.70474 4.41256 2.03656C4.69549 2.31948 6.10012 3.18061 8.4953 2.63726C8.77651 2.57346 9.07934 2.49925 9.39086 2.42291C9.93264 2.29014 10.5007 2.15093 11.027 2.0489C11.8863 1.88227 12.8053 1.77476 13.7108 1.90079C14.6406 2.03022 15.5362 2.40334 16.3287 3.15529C17.0242 3.81524 17.6006 4.72911 18.0701 5.92895C19.2699 6.3984 20.1838 6.97482 20.8437 7.67033C21.5957 8.46279 21.9688 9.3584 22.0982 10.2883C22.2243 11.1937 22.1167 12.1127 21.9501 12.9721C21.8481 13.4983 21.7089 14.0664 21.5761 14.6081C21.4998 14.9197 21.4256 15.2225 21.3618 15.5037C20.8184 17.8989 21.6795 19.3035 21.9625 19.5865C22.2943 19.9183 22.3427 20.4395 22.0775 20.8268C21.8123 21.214 21.3089 21.3574 20.8795 21.1679L12.1045 17.2966L12.8916 15.5125L19.3609 18.3666C19.1874 17.4486 19.1726 16.3396 19.4601 15.0723C19.5411 14.7152 19.6229 14.3827 19.702 14.0616C19.8246 13.5634 19.9404 13.0928 20.0358 12.6009C20.1867 11.8224 20.2493 11.1494 20.1669 10.5571C20.0878 9.98919 19.8739 9.48122 19.4292 9.01255C18.9702 8.52886 18.2189 8.03884 16.9889 7.60765C16.7093 7.50962 16.4894 7.28974 16.3914 7.01011C15.9602 5.78011 15.4702 5.02878 14.9865 4.56982C14.5178 4.12511 14.0098 3.9112 13.4419 3.83216C12.8496 3.74972 12.1766 3.81229 11.3981 3.96323C10.9062 4.05862 10.4356 4.17444 9.93742 4.29705C9.61634 4.37607 9.2838 4.45792 8.9267 4.53893C7.659 4.82651 6.54966 4.8116 5.63149 4.63795L8.51528 11.1799L6.73096 11.9664L2.83098 3.11926C2.64169 2.68986 2.78515 2.18653 3.17238 1.92145Z',
  d19: 'M17.7501 3.75098H18.8359L8.83586 13.751H6.1875L1.75 18.1885L5.74816 18.251L5.81066 22.2491L10.2482 17.8116V15.1671L20.2501 5.16519V6.25098H22.2501V1.75098H17.7501V3.75098Z',
};

export const IconArcherStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-stroke-rounded IconArcherStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArcherDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-duotone-rounded IconArcherDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArcherTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-twotone-rounded IconArcherTwotoneRounded"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArcherSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-solid-rounded IconArcherSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconArcherBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-bulk-rounded IconArcherBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconArcherStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-stroke-sharp IconArcherStrokeSharp"
    >
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
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArcherSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="archer-solid-sharp IconArcherSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArcher: TheIconSelfPack = {
  name: 'Archer',
  StrokeRounded: IconArcherStrokeRounded,
  DuotoneRounded: IconArcherDuotoneRounded,
  TwotoneRounded: IconArcherTwotoneRounded,
  SolidRounded: IconArcherSolidRounded,
  BulkRounded: IconArcherBulkRounded,
  StrokeSharp: IconArcherStrokeSharp,
  SolidSharp: IconArcherSolidSharp,
};