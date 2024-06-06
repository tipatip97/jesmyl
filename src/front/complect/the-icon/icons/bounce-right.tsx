import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 10C12.8847 13.01 11.8945 17.1528 11.248 20.086C11.1165 20.6824 11.0508 20.9806 10.9128 20.9991C10.7748 21.0177 10.6338 20.7339 10.3518 20.1662C9.00614 17.4579 6.21729 15.062 4 17.1079',
  d2: 'M15.575 9.18192C16.0268 9.49947 16.1357 10.1232 15.8182 10.5751C13.8347 13.3974 12.8761 17.3453 12.2245 20.3013C12.2214 20.3155 12.2183 20.3298 12.2151 20.3441C12.1578 20.6044 12.0989 20.872 12.0322 21.0735C11.9977 21.1778 11.9367 21.3435 11.8271 21.5018C11.711 21.6695 11.4635 21.9341 11.0463 21.9903C10.6093 22.0491 10.2935 21.8384 10.1428 21.7047C9.99829 21.5764 9.89873 21.4287 9.83972 21.3348C9.72461 21.1517 9.59948 20.8998 9.47584 20.6508C9.46929 20.6376 9.46275 20.6244 9.45622 20.6113C8.83908 19.3691 7.91894 18.2671 6.99036 17.713C6.53544 17.4416 6.1259 17.329 5.7736 17.3413C5.44005 17.3529 5.07318 17.4784 4.67814 17.843C4.27225 18.2175 3.63959 18.192 3.26507 17.7862C2.89054 17.3803 2.91597 16.7476 3.32187 16.3731C4.03548 15.7146 4.8487 15.3724 5.70372 15.3425C6.53999 15.3133 7.32751 15.5852 8.01517 15.9956C9.00578 16.5867 9.88469 17.5194 10.5705 18.5505C11.2281 15.7503 12.2541 12.1681 14.1818 9.4251C14.4994 8.97324 15.1231 8.86436 15.575 9.18192Z',
  d3: 'M15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5Z',
  d4: 'M15 10C12.8847 13.01 11.5593 18.066 10.9128 20.9991C9.56719 18.2908 6.21729 15.062 4 17.1079',
  d5: 'M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5Z',
  d6: 'M15.4963 10.5748C13.5114 13.3992 12.2176 18.2648 11.5675 21.2142C11.4762 21.6283 11.1337 21.9398 10.7127 21.9915C10.2918 22.0431 9.8841 21.8237 9.6954 21.4439C9.08319 20.2117 8.01131 18.8691 6.8914 18.0921C6.33376 17.7052 5.83044 17.5045 5.41621 17.4678C5.04076 17.4346 4.69653 17.5287 4.35627 17.8427L3 16.3728C3.76839 15.6638 4.67439 15.3943 5.5927 15.4756C6.47225 15.5536 7.30624 15.9457 8.03145 16.4488C8.81093 16.9896 9.54103 17.7115 10.1634 18.4933C10.9178 15.5948 12.123 11.8963 13.86 9.4248L15.4963 10.5748Z',
};

export const IconBounceRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-stroke-rounded IconBounceRightStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-duotone-rounded IconBounceRightDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="5" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="18" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-twotone-rounded IconBounceRightTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBounceRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-solid-rounded IconBounceRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBounceRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-bulk-rounded IconBounceRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBounceRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-stroke-sharp IconBounceRightStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBounceRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bounce-right-solid-sharp IconBounceRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBounceRight: TheIconSelfPack = {
  name: 'BounceRight',
  StrokeRounded: IconBounceRightStrokeRounded,
  DuotoneRounded: IconBounceRightDuotoneRounded,
  TwotoneRounded: IconBounceRightTwotoneRounded,
  SolidRounded: IconBounceRightSolidRounded,
  BulkRounded: IconBounceRightBulkRounded,
  StrokeSharp: IconBounceRightStrokeSharp,
  SolidSharp: IconBounceRightSolidSharp,
};