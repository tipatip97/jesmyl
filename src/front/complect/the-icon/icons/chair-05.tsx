import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 17L7 22M16 17L17 22',
  d2: 'M12 13C10.4783 13 8.86931 13.2925 7.60803 13.6838C6.6583 13.9784 5.89434 15.322 6.01199 16.4128C6.05558 16.8169 6.36877 17 6.69807 17H17.3019C17.6312 17 17.9444 16.8169 17.988 16.4128C18.1057 15.322 17.3417 13.9784 16.392 13.6838C15.1307 13.2925 13.5217 13 12 13Z',
  d3: 'M15.7733 14C17.0124 12.4321 18 10.3677 18 8.3553C18 4.30537 15.3137 2 12 2C8.68629 2 6 4.30537 6 8.3553C6 10.3677 6.98759 12.4321 8.22668 14',
  d4: 'M13.6698 2C13.8785 3.13257 14 4.56789 14 6.2739C14 8.69303 13.6362 11.178 13.1937 13M10.3302 2C10.1215 3.13257 10 4.56789 10 6.2739C10 8.69303 10.3638 11.178 10.8063 13',
  d5: 'M12.001 13C10.4793 13 8.87029 13.2925 7.60901 13.6838C6.65928 13.9784 5.89532 15.322 6.01297 16.4128C6.05656 16.8169 6.36975 17 6.69905 17H17.3029C17.6322 17 17.9454 16.8169 17.989 16.4128C18.1067 15.322 17.3427 13.9784 16.393 13.6838C15.1317 13.2925 13.5227 13 12.001 13Z',
  d6: 'M8.00098 17L7.00098 22M16.001 17L17.001 22',
  d7: 'M15.7743 14C17.0134 12.4321 18.001 10.3677 18.001 8.3553C18.001 4.30537 15.3147 2 12.001 2C8.68727 2 6.00098 4.30537 6.00098 8.3553C6.00098 10.3677 6.98857 12.4321 8.22766 14',
  d8: 'M13.1947 13C13.6372 11.178 14.001 8.69303 14.001 6.2739C14.001 4.67586 13.8944 3.31533 13.7094 2.21866C13.1679 2.07396 12.5945 2 12.001 2C11.4075 2 10.8341 2.07396 10.2926 2.21866C10.1076 3.31533 10.001 4.67586 10.001 6.2739C10.001 8.69303 10.3648 11.178 10.8073 13L10.8287 13.0537C11.2203 13.019 11.6135 13 12.001 13C12.3885 13 12.7817 13.019 13.1733 13.0537L13.1947 13Z',
  d9: 'M8.19631 16.0196C8.73787 16.1279 9.08909 16.6547 8.98077 17.1963L7.98077 22.1963C7.87246 22.7379 7.34564 23.0891 6.80408 22.9808C6.26252 22.8725 5.9113 22.3456 6.01961 21.8041L7.01961 16.8041C7.12792 16.2625 7.65475 15.9113 8.19631 16.0196ZM15.8041 16.0196C16.3456 15.9113 16.8725 16.2625 16.9808 16.8041L17.9808 21.8041C18.0891 22.3456 17.7379 22.8725 17.1963 22.9808C16.6547 23.0891 16.1279 22.7379 16.0196 22.1963L15.0196 17.1963C14.9113 16.6547 15.2625 16.1279 15.8041 16.0196Z',
  d10: 'M12 12.25C13.6077 12.25 15.2919 12.5572 16.6142 12.9674C17.3288 13.1891 17.8867 13.7654 18.2392 14.3737C18.5962 14.9897 18.8132 15.7569 18.7337 16.4932C18.691 16.8892 18.5042 17.2252 18.2101 17.4519C17.9299 17.6679 17.5992 17.75 17.302 17.75H12H6.69811C6.40087 17.75 6.07014 17.6679 5.79002 17.4519C5.49593 17.2252 5.30907 16.8892 5.26636 16.4932C5.18694 15.7569 5.40392 14.9897 5.76087 14.3737C6.11338 13.7654 6.67129 13.1891 7.38584 12.9674C8.70822 12.5572 10.3924 12.25 12 12.25Z',
  d11: 'M8.46342 4.36708C7.59027 5.23765 7 6.5594 7 8.3553C7 9.91654 7.71223 11.6 8.72841 13.0058C9.05195 13.4534 8.95139 14.0785 8.50379 14.4021C8.0562 14.7256 7.43107 14.625 7.10753 14.1774C5.94281 12.5661 5 10.4782 5 8.3553C5 6.10127 5.75287 4.24537 7.0513 2.95078C7.87531 2.12919 8.88995 1.56288 10.0066 1.25991C10.0248 1.25447 10.0433 1.24954 10.0619 1.24514C10.6821 1.08217 11.3332 1 12 1C12.6668 1 13.3179 1.08217 13.9381 1.24514C13.9567 1.24954 13.9752 1.25447 13.9934 1.25991C15.1101 1.56288 16.1247 2.1292 16.9487 2.95078C18.2471 4.24537 19 6.10127 19 8.3553C19 10.4782 18.0572 12.5661 16.8925 14.1774C16.5689 14.625 15.9438 14.7256 15.4962 14.4021C15.0486 14.0785 14.948 13.4534 15.2716 13.0058C16.2878 11.6 17 9.91654 17 8.3553C17 6.5594 16.4097 5.23765 15.5366 4.36708C15.3445 4.17552 15.1352 4.00232 14.9105 3.84862C14.9691 4.59104 15 5.4011 15 6.2739C15 8.78195 14.6244 11.3464 14.1655 13.236C14.0351 13.7727 13.4944 14.1021 12.9577 13.9718C12.421 13.8414 12.0916 13.3007 12.222 12.764C12.6481 11.0095 13 8.60412 13 6.2739C13 5.03837 12.9344 3.96264 12.8206 3.05684C12.5553 3.01923 12.2813 3 12 3C11.7187 3 11.4447 3.01923 11.1794 3.05684C11.0656 3.96264 11 5.03837 11 6.2739C11 8.60412 11.3519 11.0095 11.778 12.764C11.9084 13.3007 11.579 13.8414 11.0423 13.9718C10.5056 14.1021 9.96487 13.7727 9.83453 13.236C9.3756 11.3464 9 8.78195 9 6.2739C9 5.4011 9.03094 4.59104 9.08951 3.84862C8.86484 4.00233 8.65554 4.17552 8.46342 4.36708Z',
  d12: 'M6 17H18V16C18 14.3431 16.8487 13 15.4286 13H8.57143C7.15127 13 6 14.3431 6 16V17Z',
  d13: 'M16.4833 13C17.3692 11.6052 18 9.96362 18 8.3553C18 4.30537 15.3137 2 12 2C8.68629 2 6 4.30537 6 8.3553C6 9.96362 6.63083 11.6052 7.51672 13',
  d14: 'M6.01904 22.3576L7.01904 17.3576L8.9802 17.7499L7.9802 22.7499L6.01904 22.3576ZM16.019 22.7499L15.019 17.7499L16.9802 17.3576L17.9802 22.3576L16.019 22.7499Z',
  d15: 'M5.25 16.2499C5.25 14.2914 6.63275 12.4999 8.57143 12.4999H15.4286C17.3672 12.4999 18.75 14.2914 18.75 16.2499V17.9999H5.25V16.2499Z',
  d16: 'M7 8.6053C7 6.8094 7.59027 5.48765 8.46342 4.61708C8.65554 4.42552 8.86484 4.25232 9.08951 4.09862C9.03092 4.8413 9 5.6514 9 6.52395C9 9.032 9.3756 11.5965 9.83453 13.4861L11.778 13.014C11.3519 11.2596 11 8.85417 11 6.52395C11 5.28777 11.0656 4.21211 11.1794 3.30684C11.4448 3.26923 11.7187 3.25 12 3.25C12.2813 3.25 12.5552 3.26923 12.8206 3.30684C12.9344 4.21211 13 5.28777 13 6.52395C13 8.85417 12.6481 11.2596 12.222 13.014L14.1655 13.4861C14.6244 11.5965 15 9.032 15 6.52395C15 5.6514 14.9691 4.8413 14.9105 4.09862C15.1352 4.25232 15.3445 4.42552 15.5366 4.61708C16.4097 5.48765 17 6.8094 17 8.6053C17 9.96463 16.4604 11.4208 15.6392 12.7139L17.3274 13.7861C18.2779 12.2896 19 10.4626 19 8.6053C19 6.35127 18.2471 4.49537 16.9487 3.20078C15.6548 1.91068 13.8909 1.25 12 1.25C10.1091 1.25 8.34521 1.91068 7.0513 3.20078C5.75287 4.49537 5 6.35127 5 8.6053C5 10.4626 5.72207 12.2896 6.67259 13.7861L8.36085 12.7139C7.5396 11.4208 7 9.96463 7 8.6053Z',
};

export const IconChair05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-stroke-rounded IconChair05StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-duotone-rounded IconChair05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-twotone-rounded IconChair05TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-solid-rounded IconChair05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-bulk-rounded IconChair05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-stroke-sharp IconChair05StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-05-solid-sharp IconChair05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChair05: TheIconSelfPack = {
  name: 'Chair05',
  StrokeRounded: IconChair05StrokeRounded,
  DuotoneRounded: IconChair05DuotoneRounded,
  TwotoneRounded: IconChair05TwotoneRounded,
  SolidRounded: IconChair05SolidRounded,
  BulkRounded: IconChair05BulkRounded,
  StrokeSharp: IconChair05StrokeSharp,
  SolidSharp: IconChair05SolidSharp,
};