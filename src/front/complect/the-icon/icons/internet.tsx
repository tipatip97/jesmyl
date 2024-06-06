import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12H22',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22Z',
  d3: 'M2 12H22M16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12Z',
  d4: 'M1.33789 9.89164C1.24347 10.3759 1.19626 10.6181 1.34722 10.8016C1.49818 10.9852 1.76037 10.9852 2.28475 10.9852H5.99473C6.4489 10.9852 6.67599 10.9852 6.82072 10.8508C6.96545 10.7164 6.98312 10.4831 7.01844 10.0166C7.17915 7.89382 7.5946 5.96801 8.20067 4.44646C8.58093 3.4918 9.08165 2.54041 9.82321 1.81486C10.14 1.50495 10.2983 1.34999 10.2621 1.28307C10.2258 1.21614 10.0244 1.2613 9.62167 1.35162C5.43808 2.28982 2.16472 5.65075 1.33789 9.89164Z',
  d5: 'M2.28479 13.015C1.76039 13.015 1.4982 13.015 1.34724 13.1986C1.19628 13.3821 1.2435 13.6243 1.33793 14.1086C2.1648 18.3494 5.43809 21.7102 9.62158 22.6484C10.0242 22.7387 10.2256 22.7838 10.2618 22.7169C10.2981 22.65 10.1398 22.4951 9.82312 22.1853C9.0816 21.4597 8.58091 20.5084 8.20067 19.5538C7.5946 18.0322 7.17915 16.1064 7.01844 13.9837C6.98312 13.5171 6.96545 13.2838 6.82072 13.1494C6.67599 13.015 6.4489 13.015 5.99473 13.015H2.28479Z',
  d6: 'M14.171 22.1865C13.8543 22.4961 13.6959 22.651 13.7322 22.7179C13.7684 22.7848 13.9697 22.7398 14.3723 22.6498C18.5587 21.7135 21.8348 18.3514 22.6621 14.1086C22.7565 13.6243 22.8037 13.3821 22.6528 13.1986C22.5018 13.015 22.2396 13.015 21.7152 13.015H18.0007C17.5465 13.015 17.3194 13.015 17.1747 13.1494C17.0299 13.2838 17.0123 13.5171 16.9769 13.9837C16.8162 16.1064 16.4008 18.0322 15.7947 19.5538C15.4143 20.5089 14.9132 21.4608 14.171 22.1865Z',
  d7: 'M21.7152 10.9852C22.2396 10.9852 22.5018 10.9852 22.6528 10.8016C22.8037 10.6181 22.7565 10.3759 22.6621 9.89164C21.8349 5.6487 18.5587 2.28656 14.3722 1.35026C13.9695 1.26019 13.7681 1.21516 13.7319 1.28209C13.6957 1.34903 13.8541 1.5039 14.1709 1.81363C14.9132 2.5393 15.4143 3.49129 15.7947 4.44646C16.4008 5.96801 16.8162 7.89382 16.9769 10.0166C17.0123 10.4831 17.0299 10.7164 17.1747 10.8508C17.3194 10.9852 17.5465 10.9852 18.0007 10.9852H21.7152Z',
  d8: 'M13.9365 5.30032C14.4362 6.52593 14.8079 8.13294 14.9692 9.95969C15.0113 10.437 15.0324 10.6757 14.8819 10.8378C14.7315 11 14.4815 11 13.9815 11H10.0185C9.51853 11 9.26852 11 9.11807 10.8378C8.96763 10.6757 8.9887 10.437 9.03085 9.95969C9.19214 8.13294 9.56382 6.52593 10.0635 5.30032C10.404 4.46523 10.7839 3.85653 11.1536 3.47296C11.5213 3.0915 11.8077 3 12 3C12.1923 3 12.4787 3.0915 12.8464 3.47296C13.2161 3.85653 13.596 4.46523 13.9365 5.30032Z',
  d9: 'M10.0635 18.6997C9.56382 17.4741 9.19214 15.8671 9.03085 14.0403C8.9887 13.563 8.96763 13.3243 9.11807 13.1622C9.26852 13 9.51853 13 10.0185 13H13.9815C14.4815 13 14.7315 13 14.8819 13.1622C15.0324 13.3243 15.0113 13.563 14.9692 14.0403C14.8079 15.8671 14.4362 17.4741 13.9365 18.6997C13.596 19.5348 13.2161 20.1435 12.8464 20.527C12.4787 20.9085 12.1923 21 12 21C11.8077 21 11.5213 20.9085 11.1536 20.527C10.7839 20.1435 10.404 19.5348 10.0635 18.6997Z',
  d10: 'M9.00779 10.9929H14.9922C14.8984 8.72021 14.492 6.71622 13.9081 5.25243C13.5726 4.41137 13.1983 3.79832 12.834 3.41201C12.4717 3.02782 12.1895 2.93567 12 2.93567C11.8105 2.93567 11.5283 3.02782 11.166 3.41201C10.8017 3.79832 10.4274 4.41137 10.0919 5.25243C9.50805 6.71622 9.10155 8.72021 9.00779 10.9929Z',
  d11: 'M14.9922 13.0071C14.8984 15.2798 14.492 17.2838 13.9081 18.7476C13.5726 19.5886 13.1983 20.2017 12.834 20.588C12.4717 20.9722 12.1895 21.0643 12 21.0643C11.8105 21.0643 11.5283 20.9722 11.166 20.588C10.8017 20.2017 10.4274 19.5886 10.0919 18.7476C9.50805 17.2838 9.10155 15.2798 9.00779 13.0071H14.9922Z',
  d12: 'M17.0024 13.0071H22.75C22.2828 18.086 18.3178 22.1486 13.2929 22.75C13.666 22.5537 14.0006 22.2824 14.2933 21.972C14.8902 21.3391 15.3815 20.4772 15.773 19.4957C16.4657 17.7591 16.9077 15.492 17.0024 13.0071Z',
  d13: 'M22.75 10.9929H17.0024C16.9077 8.50805 16.4657 6.24088 15.773 4.50434C15.3815 3.52283 14.8902 2.66095 14.2933 2.02797C14.0006 1.71759 13.666 1.44629 13.2929 1.25C18.3178 1.8514 22.2828 5.91402 22.75 10.9929Z',
  d14: 'M6.99764 10.9929H1.25C1.71716 5.91402 5.6822 1.8514 10.7071 1.25C10.334 1.44629 9.99936 1.71759 9.70667 2.02797C9.10976 2.66095 8.61848 3.52283 8.22699 4.50434C7.53435 6.24088 7.09225 8.50805 6.99764 10.9929Z',
  d15: 'M6.99764 13.0071H1.25C1.71716 18.086 5.6822 22.1486 10.7071 22.75C10.334 22.5537 9.99936 22.2824 9.70667 21.972C9.10976 21.3391 8.61848 20.4772 8.22699 19.4957C7.53435 17.7591 7.09225 15.492 6.99764 13.0071Z',
};

export const IconInternetStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-stroke-rounded IconInternetStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="12" 
        cy="12" 
        rx="4" 
        ry="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconInternetDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-duotone-rounded IconInternetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="12" 
        cy="12" 
        rx="4" 
        ry="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconInternetTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-twotone-rounded IconInternetTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconInternetSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-solid-rounded IconInternetSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconInternetBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-bulk-rounded IconInternetBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconInternetStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-stroke-sharp IconInternetStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <ellipse 
        cx="12" 
        cy="12" 
        rx="4" 
        ry="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconInternetSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-solid-sharp IconInternetSolidSharp"
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInternet: TheIconSelfPack = {
  name: 'Internet',
  StrokeRounded: IconInternetStrokeRounded,
  DuotoneRounded: IconInternetDuotoneRounded,
  TwotoneRounded: IconInternetTwotoneRounded,
  SolidRounded: IconInternetSolidRounded,
  BulkRounded: IconInternetBulkRounded,
  StrokeSharp: IconInternetStrokeSharp,
  SolidSharp: IconInternetSolidSharp,
};