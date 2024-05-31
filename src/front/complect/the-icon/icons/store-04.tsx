import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 10.9866V15.4932C3 18.3257 3 19.742 3.87868 20.622C4.75736 21.502 6.17157 21.502 9 21.502H15C17.8284 21.502 19.2426 21.502 20.1213 20.622C21 19.742 21 18.3257 21 15.4932V10.9866',
  d2: 'M7 17.9741H11',
  d3: 'M17.7957 2.50049L6.14983 2.52954C4.41166 2.44011 3.966 3.77859 3.966 4.4329C3.966 5.01809 3.89055 5.8712 2.82524 7.47462C1.75993 9.07804 1.83998 9.55437 2.44071 10.6644C2.93928 11.5857 4.20741 11.9455 4.86862 12.0061C6.96883 12.0538 7.99065 10.2398 7.99065 8.96495C9.03251 12.1683 11.9955 12.1683 13.3158 11.802C14.6385 11.435 15.7717 10.1214 16.0391 8.96495C16.195 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.7599 11.5016 21.3848 10.9168C22.0096 10.332 22.4107 9.03364 21.2967 7.60666C20.5285 6.62257 20.2084 5.69548 20.1032 4.73462C20.0423 4.17787 19.9888 3.57961 19.5971 3.1989C19.0247 2.64253 18.2035 2.47372 17.7957 2.50049Z',
  d4: 'M7.75686 10.5078C7.23435 11.4039 6.25773 12.0068 5.13918 12.0068C4.39659 12.0068 3.71656 11.7411 3.19043 11.3003V15.5045C3.19043 18.331 3.19043 19.7442 4.06911 20.6223C4.94779 21.5004 6.362 21.5004 9.19043 21.5004H15.1904C18.0188 21.5004 19.433 21.5004 20.3117 20.6223C21.1904 19.7442 21.1904 18.331 21.1904 15.5045V11.3003C20.6643 11.7411 19.9842 12.0068 19.2417 12.0068C18.1231 12.0068 17.1465 11.4039 16.624 10.5078H15.4383C14.6758 11.4217 13.5042 12.0068 12.1904 12.0068C10.8766 12.0068 9.70501 11.4217 8.94256 10.5078H7.75686Z',
  d5: 'M3.19043 11.0071V15.5041C3.19043 18.3306 3.19043 19.7438 4.06911 20.6219C4.94779 21.5 6.362 21.5 9.19043 21.5H15.1904C18.0188 21.5 19.433 21.5 20.3117 20.6219C21.1904 19.7438 21.1904 18.3306 21.1904 15.5041V11.0071',
  d6: 'M17.9861 2.50269L6.34026 2.53175C4.60209 2.44227 4.15643 3.78148 4.15643 4.43613C4.15643 5.02165 4.08098 5.87523 3.01567 7.47951C1.95036 9.08379 2.03041 9.56037 2.63114 10.671C3.12971 11.5927 4.39784 11.9528 5.05905 12.0134C7.15926 12.0611 8.18108 10.2463 8.18108 8.97064C9.22294 12.1758 12.1859 12.1758 13.5062 11.8092C14.8289 11.4421 15.9621 10.1277 16.2295 8.97064C16.3854 10.4086 16.8586 11.2477 18.2567 11.8243C19.7049 12.4215 20.9503 11.5087 21.5752 10.9235C22.2 10.3384 22.6011 9.03937 21.4871 7.61162C20.7189 6.62699 20.3988 5.69941 20.2936 4.73802C20.2327 4.18097 20.1792 3.58239 19.7875 3.20147C19.2151 2.64481 18.3939 2.4759 17.9861 2.50269Z',
  d7: 'M7.19043 18.002H11.1904',
  d8: 'M3 11.0071V15.504C3 18.3304 3 19.7436 3.87868 20.6217C4.75736 21.4998 6.17157 21.4998 9 21.4998H15C17.8284 21.4998 19.2426 21.4998 20.1213 20.6217C21 19.7436 21 18.3304 21 15.504V11.0071',
  d9: 'M7 18.0022H11',
  d10: 'M17.7957 2.50294L6.14983 2.532C4.41166 2.44252 3.966 3.7817 3.966 4.43634C3.966 5.02184 3.89055 5.87539 2.82524 7.47964C1.75993 9.08389 1.83998 9.56047 2.44071 10.6711C2.93928 11.5928 4.20741 11.9529 4.86862 12.0134C6.96883 12.0612 7.99065 10.2463 7.99065 8.97074C9.03251 12.1758 11.9955 12.1758 13.3158 11.8093C14.6385 11.4421 15.7717 10.1278 16.0391 8.97074C16.195 10.4087 16.6682 11.2478 18.0663 11.8243C19.5145 12.4215 20.7599 11.5087 21.3848 10.9236C22.0096 10.3385 22.4107 9.03947 21.2967 7.61175C20.5285 6.62715 20.2084 5.69958 20.1032 4.73822C20.0423 4.18118 19.9888 3.58261 19.5971 3.20171C19.0247 2.64505 18.2035 2.47615 17.7957 2.50294Z',
  d11: 'M3 9.75C3.55229 9.75 4 10.1977 4 10.75V15.25C4 16.6925 4.00213 17.6737 4.10092 18.4086C4.19585 19.1146 4.36322 19.4416 4.58579 19.6642C4.80836 19.8868 5.13538 20.0542 5.84143 20.1491C6.57625 20.2479 7.55752 20.25 9 20.25H15C16.4425 20.25 17.4238 20.2479 18.1586 20.1491C18.8646 20.0542 19.1916 19.8868 19.4142 19.6642C19.6368 19.4416 19.8042 19.1146 19.8991 18.4086C19.9979 17.6737 20 16.6925 20 15.25V10.75C20 10.1977 20.4477 9.75 21 9.75C21.5523 9.75 22 10.1977 22 10.75V15.3205C22 16.6747 22.0001 17.7913 21.8813 18.6751C21.7565 19.6029 21.4845 20.4223 20.8284 21.0784C20.1723 21.7345 19.3529 22.0065 18.4251 22.1312C17.5413 22.2501 16.4247 22.25 15.0706 22.25H8.92943C7.57531 22.25 6.4587 22.2501 5.57494 22.1312C4.64711 22.0065 3.82768 21.7345 3.17158 21.0784C2.51547 20.4223 2.2435 19.6029 2.11875 18.6751C1.99994 17.7913 1.99997 16.6747 2 15.3206L2 10.75C2 10.1977 2.44772 9.75 3 9.75Z',
  d12: 'M3.19143 4.45934C3.19143 2.95786 4.41603 1.75 5.91512 1.75H18.0849C19.584 1.75 20.8086 2.95786 20.8086 4.45934C20.8086 5.00972 20.9532 5.55089 21.2287 6.02939L22.2149 7.74274C22.4737 8.19195 22.6839 8.55669 22.7347 9.16669C22.7553 9.41456 22.7576 9.62312 22.726 9.82441C22.6958 10.0172 22.6381 10.1717 22.5956 10.2854L22.5894 10.3023C22.0565 11.7329 20.6723 12.75 19.0513 12.75C17.695 12.75 16.5023 12.037 15.8374 10.9644C14.9338 12.0575 13.5446 12.75 12 12.75C10.4554 12.75 9.06617 12.0575 8.16259 10.9644C7.49773 12.037 6.30506 12.75 4.94875 12.75C3.32768 12.75 1.94355 11.7329 1.41065 10.3022L1.40436 10.2854C1.3619 10.1717 1.30421 10.0172 1.27397 9.82441C1.2424 9.62312 1.24469 9.41457 1.26533 9.16669C1.31613 8.55668 1.52628 8.19195 1.78509 7.74274L2.77133 6.02939C3.04677 5.55089 3.19143 5.00972 3.19143 4.45934Z',
  d13: 'M6 17.5C6 16.9477 6.44772 16.5 7 16.5H11C11.5523 16.5 12 16.9477 12 17.5C12 18.0523 11.5523 18.5 11 18.5H7C6.44772 18.5 6 18.0523 6 17.5Z',
  d14: 'M3 11L3 21.5H21V11',
  d15: 'M5 11.5C6.65685 11.5 8 10.1569 8 8.5C8 10.5 10.1362 11.5 12 11.5C13.8638 11.5 16 10.5 16 8.5C16 10.1569 17.3431 11.5 19 11.5C20.6569 11.5 22 10.1569 22 8.5L20 5V2.5H4V5L2 8.5C2 10.1569 3.34315 11.5 5 11.5Z',
  d16: 'M6 18H11',
  d17: 'M2.25 21.2751V10.0376H4.2V20.3001H19.8V10.0376H21.75V21.2751C21.75 21.8136 21.3135 22.2501 20.775 22.2501H3.225C2.68652 22.2501 2.25 21.8136 2.25 21.2751Z',
  d18: 'M22.75 8.30083V8.5C22.75 10.5711 21.0711 12.25 19 12.25C17.7352 12.25 16.6167 11.6238 15.9374 10.6646C15.6962 10.9412 15.4139 11.1792 15.1085 11.3783C14.1989 11.9713 13.0504 12.25 12 12.25C10.9496 12.25 9.80112 11.9713 8.89149 11.3783C8.58614 11.1792 8.30385 10.9412 8.06256 10.6646C7.38334 11.6238 6.26479 12.25 5 12.25C2.92893 12.25 1.25 10.5711 1.25 8.5V8.30083L3.25 4.80083V1.75H20.75V4.80083L22.75 8.30083Z',
  d19: 'M11 18H6V16H11V18Z',
} as const;

export const IconStore04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-stroke-rounded IconStore04StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStore04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-duotone-rounded IconStore04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconStore04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-twotone-rounded IconStore04TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStore04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-solid-rounded IconStore04SolidRounded"
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

export const IconStore04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-bulk-rounded IconStore04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStore04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-stroke-sharp IconStore04StrokeSharp"
    >
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
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStore04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-04-solid-sharp IconStore04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfStore04: TheIconSelfPack = {
  name: 'Store04',
  StrokeRounded: IconStore04StrokeRounded,
  DuotoneRounded: IconStore04DuotoneRounded,
  TwotoneRounded: IconStore04TwotoneRounded,
  SolidRounded: IconStore04SolidRounded,
  BulkRounded: IconStore04BulkRounded,
  StrokeSharp: IconStore04StrokeSharp,
  SolidSharp: IconStore04SolidSharp,
};