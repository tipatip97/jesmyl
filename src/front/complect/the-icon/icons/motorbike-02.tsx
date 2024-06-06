import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.2348 7.86957C21.5163 9.42897 21.9615 10.9117 21.9994 11.6957C21.3294 11.3893 20.5771 11.2174 19.7821 11.2174C17.3369 11.2174 15.1419 12.8433 14.6177 15.0092C14.4924 15.527 14.4298 15.7859 14.2937 15.8929C14.1577 16 13.9382 16 13.4994 16H10.6206C10.1784 16 9.95733 16 9.82074 15.8915C9.68414 15.7829 9.62431 15.5249 9.50465 15.0088C9.00893 12.8708 6.99671 11.0124 4.90197 11.1698C4.69089 11.1857 4.58535 11.1936 4.51294 11.1775C4.44054 11.1613 4.36764 11.1202 4.22185 11.0378C3.80097 10.8001 3.37061 10.5744 2.95793 10.3227C2.38299 9.97198 2.02315 9.35549 2.00053 8.68241C1.98766 8.29933 2.20797 7.91865 2.65301 8.02338L9.07369 9.53435C9.55601 9.64785 9.79717 9.70461 10.0044 9.66597C10.2116 9.62734 10.4656 9.4536 10.9737 9.10614C12.262 8.22518 14.3037 7.39305 16.339 8.12822C16.8961 8.32947 17.1747 8.4301 17.3334 8.43513C17.4921 8.44016 17.7247 8.37247 18.1899 8.23707C18.9431 8.01785 19.6521 7.90409 20.2348 7.86957ZM20.2348 7.86957C19.4316 6.89211 18.2997 5.88452 16.7336 5',
  d2: 'M9.50465 15.0088C9.00893 12.8708 6.99671 11.0124 4.90197 11.1698C4.69089 11.1857 4.58535 11.1936 4.51294 11.1775C4.44054 11.1613 4.36764 11.1202 4.22185 11.0378C3.80097 10.8001 3.37061 10.5744 2.95793 10.3227C2.38299 9.97198 2.02315 9.35549 2.00053 8.68241C1.98766 8.29933 2.20797 7.91865 2.65301 8.02338L9.07369 9.53435C9.55601 9.64785 9.79717 9.70461 10.0044 9.66597C10.2116 9.62734 10.4656 9.4536 10.9737 9.10614C12.262 8.22518 14.3037 7.39305 16.339 8.12822C16.8961 8.32947 17.1747 8.4301 17.3334 8.43513C17.4921 8.44016 17.7247 8.37247 18.1899 8.23707C18.9431 8.01785 19.6521 7.90409 20.2348 7.86957C21.5163 9.42897 21.9615 10.9117 21.9994 11.6957C21.3294 11.3893 20.5771 11.2174 19.7821 11.2174C17.3369 11.2174 15.1419 12.8433 14.6177 15.0092C14.4924 15.527 14.4298 15.7859 14.2937 15.8929C14.1577 16 13.9382 16 13.4994 16H10.6206C10.1784 16 9.95733 16 9.82074 15.8915C9.68414 15.7829 9.62431 15.5249 9.50465 15.0088Z',
  d3: 'M19.5 15C18.6716 15 18 15.6716 18 16.5C18 17.3284 18.6716 18 19.5 18C20.3284 18 21 17.3284 21 16.5C21 15.6716 20.3284 15 19.5 15ZM16 16.5C16 14.567 17.567 13 19.5 13C21.433 13 23 14.567 23 16.5C23 18.433 21.433 20 19.5 20C17.567 20 16 18.433 16 16.5Z',
  d4: 'M4.5 15C3.67157 15 3 15.6716 3 16.5C3 17.3284 3.67157 18 4.5 18C5.32843 18 6 17.3284 6 16.5C6 15.6716 5.32843 15 4.5 15ZM1 16.5C1 14.567 2.567 13 4.5 13C6.433 13 8 14.567 8 16.5C8 18.433 6.433 20 4.5 20C2.567 20 1 18.433 1 16.5Z',
  d5: 'M15.8629 4.5084C16.1345 4.02751 16.7445 3.85785 17.2254 4.12945C18.8968 5.07345 20.1244 6.16035 21.0074 7.23484C22.401 8.93067 22.9482 10.6133 22.9982 11.6475C23.0151 11.9961 22.849 12.3283 22.56 12.5239C22.271 12.7196 21.9009 12.7504 21.5835 12.6053C21.0427 12.3579 20.4321 12.2176 19.7821 12.2176C17.743 12.2176 15.9927 13.5792 15.5896 15.2446C15.5343 15.4735 15.4699 15.7399 15.407 15.9258C15.3474 16.1019 15.2219 16.4352 14.9121 16.679C14.6263 16.9038 14.3154 16.9601 14.1151 16.9813C13.9345 17.0003 13.7224 17.0003 13.5336 17.0002H13.5335H10.5861H10.5861C10.3958 17.0003 10.1822 17.0003 10.0003 16.981C9.79852 16.9595 9.48532 16.9024 9.19856 16.6745C8.88911 16.4286 8.76549 16.0949 8.70656 15.9161C8.64506 15.7295 8.58324 15.4626 8.53047 15.2348C8.33321 14.3841 7.82527 13.5677 7.15032 12.9864C6.47484 12.4046 5.70062 12.1128 4.97692 12.1672C4.6543 12.1915 4.45663 12.1897 4.29513 12.1537C4.06658 12.1027 3.85969 11.9834 3.75862 11.9251C3.46229 11.7616 2.73432 11.3578 2.43715 11.1766C1.57475 10.6505 1.035 9.72578 1.00107 8.71617C0.988737 8.34915 1.08091 7.89434 1.38912 7.52719C1.7478 7.09991 2.30262 6.91379 2.88206 7.05014L9.80089 8.67006C11.9335 7.39135 14.1288 6.26681 16.6787 7.18787C16.9649 7.29126 17.2314 7.38302 17.3687 7.42698C17.4566 7.4014 18.0858 7.2272 18.1727 7.20415C17.6311 6.74614 16.9925 6.29489 16.2418 5.8709C15.7609 5.5993 15.5913 4.98929 15.8629 4.5084Z',
  d6: 'M20.2353 7.86957C21.5168 9.42897 21.9619 10.9117 21.9998 11.6957C21.3298 11.3893 20.5775 11.2174 19.7825 11.2174C17.3374 11.2174 14.5004 13 14.5004 16H9.50044C9.50044 13.5 7.00044 11.5 4.50044 11.5L2.00098 10V8L10.0048 9.66597L10.9742 9.10614C12.2624 8.22518 14.3041 7.39305 16.3394 8.12822L17.501 8.5L20.2353 7.86957ZM20.2353 7.86957C19.432 6.89211 18.3002 5.88452 16.7341 5',
  d7: 'M19.5 15.1071C18.7307 15.1071 18.1071 15.7307 18.1071 16.5C18.1071 17.2693 18.7307 17.8929 19.5 17.8929C20.2693 17.8929 20.8929 17.2693 20.8929 16.5C20.8929 15.7307 20.2693 15.1071 19.5 15.1071ZM16.25 16.5C16.25 14.7051 17.7051 13.25 19.5 13.25C21.2949 13.25 22.75 14.7051 22.75 16.5C22.75 18.2949 21.2949 19.75 19.5 19.75C17.7051 19.75 16.25 18.2949 16.25 16.5Z',
  d8: 'M4.5 15.1071C3.73075 15.1071 3.10714 15.7307 3.10714 16.5C3.10714 17.2693 3.73075 17.8929 4.5 17.8929C5.26925 17.8929 5.89286 17.2693 5.89286 16.5C5.89286 15.7307 5.26925 15.1071 4.5 15.1071ZM1.25 16.5C1.25 14.7051 2.70507 13.25 4.5 13.25C6.29493 13.25 7.75 14.7051 7.75 16.5C7.75 18.2949 6.29493 19.75 4.5 19.75C2.70507 19.75 1.25 18.2949 1.25 16.5Z',
  d9: 'M17.1029 4.25C18.748 5.17913 19.9517 6.34288 20.8147 7.39311C22.1803 9.05483 22.702 10.6875 22.749 11.6592C22.7616 11.9206 22.637 12.1697 22.4203 12.3164C22.2035 12.4632 21.926 12.4863 21.6879 12.3774C21.1148 12.1153 20.4688 11.9671 19.7825 11.9671C18.729 11.9671 17.5755 12.3555 16.6961 13.0666C15.8295 13.7674 15.2504 14.7597 15.2504 15.9997C15.2504 16.1986 15.1714 16.3894 15.0308 16.5301C14.8901 16.6707 14.6994 16.7497 14.5004 16.7497H9.50044C9.30153 16.7497 9.11077 16.6707 8.97011 16.5301C8.82946 16.3894 8.75044 16.1986 8.75044 15.9997C8.75044 15.0103 8.25552 14.0799 7.44675 13.379C6.63584 12.6762 5.55749 12.2497 4.50044 12.2497C4.36449 12.2497 4.23109 12.2128 4.11451 12.1428L1.61504 10.6428C1.38917 10.5073 1.25098 10.2631 1.25098 9.99972V7.99972C1.25098 7.774 1.35264 7.56028 1.52776 7.41786C1.70288 7.27544 1.93283 7.21946 2.15381 7.26546L9.87751 8.87312L10.5749 8.47034C11.9462 7.53955 14.2312 6.57583 16.5807 7.4177L17.5333 7.72259L18.8011 7.43029C18.1568 6.81965 17.3558 6.11553 16.3652 5.55608L17.1029 4.25Z',
};

export const IconMotorbike02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-stroke-rounded IconMotorbike02StrokeRounded"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-duotone-rounded IconMotorbike02DuotoneRounded"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-twotone-rounded IconMotorbike02TwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-solid-rounded IconMotorbike02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-bulk-rounded IconMotorbike02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-stroke-sharp IconMotorbike02StrokeSharp"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-02-solid-sharp IconMotorbike02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfMotorbike02: TheIconSelfPack = {
  name: 'Motorbike02',
  StrokeRounded: IconMotorbike02StrokeRounded,
  DuotoneRounded: IconMotorbike02DuotoneRounded,
  TwotoneRounded: IconMotorbike02TwotoneRounded,
  SolidRounded: IconMotorbike02SolidRounded,
  BulkRounded: IconMotorbike02BulkRounded,
  StrokeSharp: IconMotorbike02StrokeSharp,
  SolidSharp: IconMotorbike02SolidSharp,
};