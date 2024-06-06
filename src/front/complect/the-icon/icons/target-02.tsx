import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7',
  d2: 'M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10',
  d3: 'M12.0303 11.9624L16.5832 7.40948M19.7404 4.3445L19.1872 2.35736C19.0853 2.02999 18.6914 1.89953 18.4259 2.1165C16.9898 3.29006 15.4254 4.87079 16.703 7.36407C19.2771 8.56442 20.7466 6.94572 21.8733 5.58518C22.0975 5.31448 21.9623 4.90755 21.6247 4.80993L19.7404 4.3445Z',
  d4: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.8611 2 15.6035 2.50841 17.0958 3.39393C16.3541 4.16933 16.038 5.22949 16.2785 6.15129L16.6035 7.39687L17.8491 7.72186C18.7709 7.96236 19.831 7.64632 20.6064 6.90473C21.4917 8.39692 22 10.1391 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z',
  d5: 'M16.6031 7.39687L12 12M16.6031 7.39687L16.2781 6.15129C16.0319 5.20771 16.369 4.11915 17.1487 3.33944L18.298 2.19006C18.6041 1.88401 19.0779 1.95969 19.1745 2.33007L19.6909 4.30912L21.6699 4.82548C22.0403 4.92211 22.116 5.39591 21.8099 5.70196L20.6606 6.85135C19.8809 7.63105 18.7923 7.96805 17.8487 7.72186L16.6031 7.39687Z',
  d6: 'M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z',
  d7: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.3823 20.9379 10.78 20.82 10.1989C20.7101 9.65769 21.0598 9.12985 21.601 9.01999C22.1423 8.91012 22.6701 9.25982 22.78 9.80107C22.9244 10.5124 23 11.2479 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C12.7521 1 13.4876 1.07563 14.1989 1.22002C14.7402 1.32989 15.0899 1.85772 14.98 2.39897C14.8701 2.94022 14.3423 3.28992 13.8011 3.18005C13.22 3.06209 12.6177 3 12 3Z',
  d8: 'M20.1421 2.07773C19.9845 1.47361 19.4963 1.10271 18.9726 1.01905C18.4678 0.938419 17.9564 1.11764 17.5909 1.48308L16.4415 2.63246C15.1721 3.90187 15.0659 5.46618 15.4909 7.09504L11.2929 11.293C10.9024 11.6835 10.9024 12.3167 11.2929 12.7072C11.6834 13.0978 12.3166 13.0978 12.7071 12.7072L16.9051 8.50926C18.5339 8.93425 20.0983 8.82798 21.3677 7.55858L22.517 6.40919C22.8825 6.04375 23.0617 5.53232 22.9811 5.02757C22.8974 4.50383 22.5265 4.01562 21.9224 3.858L20.5105 3.48962L20.1421 2.07773Z',
  d9: 'M16.9988 12C16.9988 14.7614 14.7602 17 11.9988 17C9.23736 17 6.99878 14.7614 6.99878 12C6.99878 9.23858 9.23736 7 11.9988 7',
  d10: 'M13.9988 2.20004C13.3526 2.06886 12.6837 2 11.9988 2C6.47593 2 1.99878 6.47715 1.99878 12C1.99878 17.5228 6.47593 22 11.9988 22C17.5216 22 21.9988 17.5228 21.9988 12C21.9988 11.3151 21.9299 10.6462 21.7988 10',
  d11: 'M16.003 7.98759V5.00474L18.9718 2.04531C18.9774 2.03969 18.987 2.04258 18.9886 2.05037L19.4871 4.47326C19.4879 4.47716 19.4909 4.48022 19.4948 4.48103L21.9832 5.0011C21.991 5.00273 21.9939 5.01239 21.9882 5.018L18.9878 7.9847C18.9859 7.98655 18.9834 7.98759 18.9808 7.98759H16.003ZM16.003 7.98759L11.9875 12.0015',
  d12: 'M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12H18C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6V8Z',
  d13: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.3823 20.9379 10.78 20.82 10.1989L22.78 9.80107C22.9244 10.5124 23 11.2479 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C12.7521 1 13.4876 1.07563 14.1989 1.22002L13.8011 3.18005C13.22 3.06209 12.6177 3 12 3Z',
  d14: 'M19.7354 1.85293C19.6812 1.58171 19.4821 1.36235 19.2173 1.2822C18.9526 1.20205 18.6653 1.27411 18.4697 1.46969L15.25 4.68936V7.33582L11.293 11.2929L12.7072 12.7071L16.6642 8.75002L19.3107 8.75002L22.5303 5.53035C22.7259 5.33477 22.798 5.04741 22.7178 4.78269C22.6377 4.51796 22.4183 4.31883 22.1471 4.26459L20.1374 3.86264L19.7354 1.85293Z',
};

export const IconTarget02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-stroke-rounded IconTarget02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTarget02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-duotone-rounded IconTarget02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconTarget02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-twotone-rounded IconTarget02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconTarget02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-solid-rounded IconTarget02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTarget02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-bulk-rounded IconTarget02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTarget02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-stroke-sharp IconTarget02StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTarget02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="target-02-solid-sharp IconTarget02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfTarget02: TheIconSelfPack = {
  name: 'Target02',
  StrokeRounded: IconTarget02StrokeRounded,
  DuotoneRounded: IconTarget02DuotoneRounded,
  TwotoneRounded: IconTarget02TwotoneRounded,
  SolidRounded: IconTarget02SolidRounded,
  BulkRounded: IconTarget02BulkRounded,
  StrokeSharp: IconTarget02StrokeSharp,
  SolidSharp: IconTarget02SolidSharp,
};