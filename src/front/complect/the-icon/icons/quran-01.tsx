import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.6475 5.43668L18.9895 4.39419C18.6252 3.81704 18.443 3.52846 18.2044 3.50178C17.9657 3.4751 17.6993 3.74896 17.1664 4.29667C15.4443 6.06689 13.7221 5.80537 12 8.98839C10.2779 5.80537 8.55571 6.06689 6.83356 4.29667C6.30071 3.74896 6.03429 3.4751 5.79565 3.50178C5.557 3.52846 5.37485 3.81704 5.01054 4.39419L4.35251 5.43668C4.09827 5.83945 3.97115 6.04084 4.00553 6.2528C4.03991 6.46476 4.22324 6.60998 4.58991 6.90042L10.7724 11.7977C11.3634 12.2659 11.659 12.5 12 12.5C12.341 12.5 12.6366 12.2659 13.2276 11.7977L19.4101 6.90042C19.7768 6.60998 19.9601 6.46476 19.9945 6.2528C20.0288 6.04084 19.9017 5.83945 19.6475 5.43668Z',
  d2: 'M22 8.5L6 20.5V15.8043M2 8.5L18 20.5V15.8043',
  d3: 'M7.33854 3.7452C7.09596 3.49606 6.87069 3.26468 6.67414 3.1038C6.49137 2.95419 6.15208 2.70668 5.70583 2.75652C5.28396 2.80364 5.016 3.0794 4.86265 3.26644C4.71169 3.45056 4.55351 3.701 4.3899 3.96003L3.69195 5.06461C3.58035 5.2411 3.46208 5.42814 3.3821 5.59963C3.14299 6.11226 3.23099 6.66179 3.62569 7.069C3.75705 7.20451 3.9295 7.34087 4.08971 7.46755L10.3345 12.4091C10.8208 12.794 11.3431 13.2501 12 13.2501C12.6569 13.2501 13.1792 12.794 13.6655 12.4091L19.9103 7.46755C20.0705 7.34087 20.243 7.20451 20.3743 7.06899C20.769 6.66179 20.857 6.11226 20.6179 5.59963C20.5379 5.42816 20.4197 5.24115 20.3081 5.06468L19.6101 3.96005C19.4465 3.70101 19.2883 3.45056 19.1374 3.26644C18.984 3.0794 18.716 2.80364 18.2942 2.75652C17.8479 2.70668 17.5086 2.95419 17.3259 3.1038C17.1293 3.26468 16.904 3.49606 16.6615 3.7452C15.9457 4.48029 15.0324 4.93425 14.1798 5.48202C13.5943 5.85814 12.9052 6.60618 12.3727 7.4122C12.1973 7.67779 12.1095 7.81059 12.0028 7.81146C11.8961 7.81233 11.8073 7.68257 11.6297 7.42305C11.0725 6.60891 10.4092 5.86039 9.82022 5.48202C8.96761 4.93425 8.05428 4.48029 7.33854 3.7452Z',
  d4: 'M1.20006 8.15006C1.53143 7.70823 2.15823 7.61869 2.60006 7.95006L12.0001 15.0001L21.4001 7.95006C21.8419 7.61869 22.4687 7.70823 22.8001 8.15006C23.1314 8.59189 23.0419 9.21869 22.6001 9.55006L13.6667 16.2501L17.0001 18.7501V16.0544C17.0001 15.5021 17.4478 15.0544 18.0001 15.0544C18.5523 15.0544 19.0001 15.5021 19.0001 16.0544V20.7501C19.0001 21.1288 18.7861 21.4751 18.4473 21.6445C18.1085 21.8139 17.7031 21.7773 17.4001 21.5501L12.0001 17.5001L6.60006 21.5501C6.29704 21.7773 5.89163 21.8139 5.55285 21.6445C5.21406 21.4751 5.00006 21.1288 5.00006 20.7501V16.0544C5.00006 15.5021 5.44777 15.0544 6.00006 15.0544C6.55234 15.0544 7.00006 15.5021 7.00006 16.0544V18.7501L10.3334 16.2501L1.40006 9.55006C0.958231 9.21869 0.868688 8.59189 1.20006 8.15006Z',
  d5: 'M12 12.5L20.501 6.5L18.001 3.5L12 8L5.50098 3.5L3.50098 6.5L12 12.5Z',
  d6: 'M11.9981 12L20.499 6L17.999 3L11.9981 7.5L5.49902 3L3.49902 6L11.9981 12Z',
  d7: 'M16.9528 18.0652V15.4282H18.934V20.0217C18.934 20.3923 18.722 20.731 18.3864 20.8967C18.0508 21.0624 17.6492 21.0267 17.3491 20.8043L12 16.8424L6.65094 20.8043C6.35078 21.0267 5.9492 21.0624 5.61361 20.8967C5.27802 20.731 5.06604 20.3923 5.06604 20.0217V15.4282H7.04717V18.0652L10.3491 15.6196L1.5 9.06522L2.68868 7.5L12 14.3967L21.3113 7.5L22.5 9.06522L13.6509 15.6196L16.9528 18.0652Z',
};

export const IconQuran01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-stroke-rounded IconQuran01StrokeRounded"
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

export const IconQuran01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-duotone-rounded IconQuran01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconQuran01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-twotone-rounded IconQuran01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconQuran01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-solid-rounded IconQuran01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-bulk-rounded IconQuran01BulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-stroke-sharp IconQuran01StrokeSharp"
    >
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconQuran01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-01-solid-sharp IconQuran01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfQuran01: TheIconSelfPack = {
  name: 'Quran01',
  StrokeRounded: IconQuran01StrokeRounded,
  DuotoneRounded: IconQuran01DuotoneRounded,
  TwotoneRounded: IconQuran01TwotoneRounded,
  SolidRounded: IconQuran01SolidRounded,
  BulkRounded: IconQuran01BulkRounded,
  StrokeSharp: IconQuran01StrokeSharp,
  SolidSharp: IconQuran01SolidSharp,
};