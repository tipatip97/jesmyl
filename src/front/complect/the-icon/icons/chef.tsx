import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.3979 4.40951C15.9703 4.02542 16.659 3.80138 17.4 3.80138C19.3882 3.80138 21 5.4144 21 7.40415C21 9.31828 19.5084 10.8838 17.625 11H17M15.3979 4.40951C14.9058 3.0062 13.5703 2 12 2C10.4297 2 9.09418 3.0062 8.60215 4.40951M15.3979 4.40951C15.5288 4.78297 15.6 5.18455 15.6 5.60277C15.6 5.91378 15.5606 6.21558 15.4866 6.50346M9.71838 5.60277C9.44207 5.12473 9.05914 4.71612 8.60215 4.40951M8.60215 4.40951C8.02968 4.02543 7.34099 3.80138 6.6 3.80138C4.61177 3.80138 3 5.4144 3 7.40415C3 9.31828 4.49159 10.8838 6.375 11H7',
  d2: 'M17 14V10M7 14V10',
  d3: 'M18 14.5C16.401 13.8776 14.3005 13.5 12 13.5C9.69952 13.5 7.59905 13.8776 6 14.5',
  d4: 'M17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17',
  d5: 'M21 7.40415C21 5.4144 19.3882 3.80138 17.4 3.80138C16.659 3.80138 15.9703 4.02542 15.3979 4.40951C14.9058 3.0062 13.5703 2 12 2C10.4297 2 9.09418 3.0062 8.60215 4.40951C8.02968 4.02542 7.34099 3.80138 6.6 3.80138C4.61177 3.80138 3 5.4144 3 7.40415C3 9.31828 4.49159 10.8838 6.375 11H7V14V14.162C8.43351 13.7436 10.1522 13.5 12 13.5C13.8478 13.5 15.5665 13.7436 17 14.162V14V11H17.625C19.5084 10.8838 21 9.31828 21 7.40415Z',
  d6: 'M6.36297 15.4321C5.8483 15.6324 5.26868 15.3776 5.06836 14.8629C4.86805 14.3482 5.12289 13.7686 5.63756 13.5683C5.74859 13.5251 5.86162 13.4831 5.97659 13.4422C6.11006 13.3947 6.1768 13.371 6.2134 13.3192C6.25 13.2673 6.25 13.198 6.25 13.0594V12.1123C6.25 11.9408 6.25 11.8551 6.20256 11.7991C6.15512 11.7432 6.06452 11.7281 5.88333 11.6981C3.82122 11.3558 2.25 9.56348 2.25 7.40415C2.25 5.00073 4.19702 3.05138 6.6 3.05138C7.18705 3.05138 7.74782 3.16809 8.25961 3.37961C9.01773 2.10513 10.4082 1.25 12 1.25C13.5918 1.25 14.9823 2.10513 15.7404 3.37961C16.2522 3.16809 16.813 3.05138 17.4 3.05138C19.803 3.05138 21.75 5.00073 21.75 7.40415C21.75 9.56348 20.1788 11.3558 18.1167 11.6981C17.9355 11.7281 17.8449 11.7432 17.7974 11.7991C17.75 11.8551 17.75 11.9408 17.75 12.1123V13.0592C17.75 13.1978 17.75 13.2671 17.7866 13.319C17.8232 13.3708 17.8899 13.3946 18.0234 13.442C18.1386 13.4829 18.2518 13.525 18.363 13.5683C18.8777 13.7686 19.1325 14.3482 18.9322 14.8629C18.7319 15.3776 18.1522 15.6324 17.6376 15.4321C16.1748 14.8628 14.201 14.5002 12.0003 14.5002C9.79957 14.5002 7.82573 14.8628 6.36297 15.4321Z',
  d7: 'M6.90127 16.5048C7.45086 16.4503 7.94062 16.8516 7.99518 17.4012C8.19516 19.4153 9.92014 21 11.9998 21C14.0796 21 15.805 19.4152 16.005 17.4012C16.0595 16.8516 16.5493 16.4503 17.0989 16.5048C17.6485 16.5594 18.0497 17.0492 17.9952 17.5988C17.6934 20.6381 15.1054 23 11.9998 23C8.89411 23 6.30671 20.6379 6.00497 17.5988C5.9504 17.0492 6.35169 16.5594 6.90127 16.5048Z',
  d8: 'M17 14V9M7 14V9',
  d9: 'M19 14H5',
  d10: 'M17 16V17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17V16',
  d11: 'M12 1.25C10.4082 1.25 9.01773 2.10513 8.25961 3.37961C7.74782 3.16809 7.18705 3.05138 6.6 3.05138C4.19702 3.05138 2.25 5.00073 2.25 7.40415C2.25 9.68978 4.0104 11.5642 6.25 11.743V12.75H5V14.75H19V12.75H17.75V11.743C19.9896 11.5642 21.75 9.68978 21.75 7.40415C21.75 5.00073 19.803 3.05138 17.4 3.05138C16.813 3.05138 16.2522 3.16809 15.7404 3.37961C14.9823 2.10513 13.5918 1.25 12 1.25Z',
  d12: 'M8.16667 16V16.9643C8.16667 19.0945 9.88291 20.8214 12 20.8214C14.1171 20.8214 15.8333 19.0945 15.8333 16.9643V16H17.75V16.9643C17.75 20.1596 15.1756 22.75 12 22.75C8.82436 22.75 6.25 20.1596 6.25 16.9643V16H8.16667Z',
};

export const IconChefStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-stroke-rounded IconChefStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChefDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-duotone-rounded IconChefDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconChefTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-twotone-rounded IconChefTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChefSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-solid-rounded IconChefSolidRounded"
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

export const IconChefBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-bulk-rounded IconChefBulkRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconChefStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-stroke-sharp IconChefStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChefSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chef-solid-sharp IconChefSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChef: TheIconSelfPack = {
  name: 'Chef',
  StrokeRounded: IconChefStrokeRounded,
  DuotoneRounded: IconChefDuotoneRounded,
  TwotoneRounded: IconChefTwotoneRounded,
  SolidRounded: IconChefSolidRounded,
  BulkRounded: IconChefBulkRounded,
  StrokeSharp: IconChefStrokeSharp,
  SolidSharp: IconChefSolidSharp,
};