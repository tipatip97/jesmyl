import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 7.0268C10.483 4.17323 12.9665 2 15.9575 2C19.2947 2 22 4.70532 22 8.0425C22 11.0335 19.8268 13.517 16.9732 14',
  d2: 'M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z',
  d3: 'M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429',
  d4: 'M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857',
  d5: 'M1.25 16C1.25 12.2721 4.27208 9.25 8 9.25C11.7279 9.25 14.75 12.2721 14.75 16C14.75 19.7279 11.7279 22.75 8 22.75C4.27208 22.75 1.25 19.7279 1.25 16Z',
  d6: 'M15.9999 1.25C19.7279 1.25 22.7499 4.27208 22.7499 8C22.7499 11.4976 20.0898 14.3738 16.6824 14.7159C16.447 14.7396 16.3292 14.7514 16.2368 14.6843C16.1443 14.6172 16.116 14.4879 16.0595 14.2294C15.3739 11.0943 12.9056 8.62605 9.77057 7.94046C9.51203 7.88392 9.38277 7.85565 9.31567 7.76318C9.24856 7.6707 9.26038 7.55298 9.28402 7.31753C9.62615 3.91012 12.5024 1.25 15.9999 1.25Z',
  d7: 'M5.77448 4.24219L6.5663 5.19395C6.72824 5.38861 6.97748 5.48841 7.22902 5.45932C7.48056 5.43023 7.70044 5.27618 7.81368 5.0497L8.67082 3.33541C8.78707 3.10292 8.77464 2.82681 8.63799 2.6057C8.50133 2.38459 8.25993 2.25 8 2.25C7.21245 2.25 6.45502 2.38478 5.75052 2.63328C3.12763 3.55843 1.25 6.05696 1.25 9C1.25 9.41421 1.58579 9.75 2 9.75C2.41421 9.75 2.75 9.41421 2.75 9C2.75 6.89355 3.98604 5.07881 5.77448 4.24219Z',
  d8: 'M18.2255 19.7578L17.4337 18.806C17.2718 18.6114 17.0225 18.5116 16.771 18.5407C16.5194 18.5698 16.2996 18.7238 16.1863 18.9503L15.3292 20.6646C15.2129 20.8971 15.2254 21.1732 15.362 21.3943C15.4987 21.6154 15.7401 21.75 16 21.75C16.7875 21.75 17.545 21.6152 18.2495 21.3667C20.8724 20.4416 22.75 17.943 22.75 15C22.75 14.5858 22.4142 14.25 22 14.25C21.5858 14.25 21.25 14.5858 21.25 15C21.25 17.1064 20.014 18.9212 18.2255 19.7578Z',
  d9: 'M2 8C2 5.23571 4.23571 3 7 3V5',
  d10: 'M22 16C22 18.7643 19.7643 21 17 21V19',
  d11: 'M6.25 3.81574C4.2586 4.16921 2.75 5.90589 2.75 8H1.25C1.25 4.8215 3.8215 2.25 7 2.25H7.75V5H6.25V3.81574Z',
  d12: 'M17.75 20.1843C19.7414 19.8308 21.25 18.0941 21.25 16H22.75C22.75 19.1785 20.1785 21.75 17 21.75H16.25V19H17.75V20.1843Z',
  d13: 'M16.1556 14.7482C15.6146 11.1941 12.8058 8.38534 9.25171 7.84435C9.33443 4.18832 12.324 1.25 15.9999 1.25C19.7279 1.25 22.7499 4.27208 22.7499 8C22.7499 11.6759 19.8116 14.6655 16.1556 14.7482Z',
};

export const IconCoinsSwapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-stroke-rounded IconCoinsSwapStrokeRounded"
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

export const IconCoinsSwapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-duotone-rounded IconCoinsSwapDuotoneRounded"
    >
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsSwapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-twotone-rounded IconCoinsSwapTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsSwapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-solid-rounded IconCoinsSwapSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCoinsSwapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-bulk-rounded IconCoinsSwapBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsSwapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-stroke-sharp IconCoinsSwapStrokeSharp"
    >
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

export const IconCoinsSwapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-swap-solid-sharp IconCoinsSwapSolidSharp"
    >
      <path 
        d={d.d5} 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoinsSwap: TheIconSelfPack = {
  name: 'CoinsSwap',
  StrokeRounded: IconCoinsSwapStrokeRounded,
  DuotoneRounded: IconCoinsSwapDuotoneRounded,
  TwotoneRounded: IconCoinsSwapTwotoneRounded,
  SolidRounded: IconCoinsSwapSolidRounded,
  BulkRounded: IconCoinsSwapBulkRounded,
  StrokeSharp: IconCoinsSwapStrokeSharp,
  SolidSharp: IconCoinsSwapSolidSharp,
};