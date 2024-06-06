import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 3.72302C4.99202 4.63247 2 8.21683 2 12.5C2 13.0111 2.0426 13.5122 2.12444 14M9 3.72302L6 2.5M9 3.72302L8 6.5M19.0645 16.5C19.6633 15.295 20 13.9368 20 12.5C20 8.04051 16.7566 4.33855 12.5 3.62444M19.0645 16.5L22 14.5M19.0645 16.5L17.5 13.5M3.51555 17.5C5.13007 19.912 7.87958 21.5 11 21.5C13.3051 21.5 15.4077 20.6334 17 19.2083M3.51555 17.5H7M3.51555 17.5V21',
  d2: 'M20 12.5C20 17.4706 15.9706 21.5 11 21.5C6.02944 21.5 2 17.4706 2 12.5C2 7.52944 6.02944 3.5 11 3.5C15.9706 3.5 20 7.52944 20 12.5Z',
  d3: 'M9 3.72302C4.99202 4.63247 2 8.21683 2 12.5C2 13.0111 2.0426 13.5122 2.12444 14M9 3.72302L6 2.5M9 3.72302L8 6.5M3.51555 17.5C5.13007 19.912 7.87958 21.5 11 21.5C13.3051 21.5 15.4077 20.6334 17 19.2083M3.51555 17.5H7M3.51555 17.5V21',
  d4: 'M19.0645 16.5C19.6633 15.295 20 13.9368 20 12.5C20 8.04046 16.7566 4.33851 12.5 3.62439M19.0645 16.5L22 14.5M19.0645 16.5L17.5 13.5',
  d5: 'M5.23138 2.35768C5.43514 1.85844 6.00547 1.61872 6.50527 1.82224L9.43707 3.01613C9.92228 3.21371 10.1651 3.75837 9.98762 4.25081L9.01035 6.96164C8.82748 7.46888 8.26758 7.73201 7.75978 7.54935C7.25197 7.36669 6.98855 6.80741 7.17141 6.30017L7.44465 5.54223C4.9263 6.83936 3.20454 9.4636 3.20454 12.488C3.20454 12.9325 3.24162 13.3677 3.31268 13.7907C3.40198 14.3224 3.04286 14.8258 2.51057 14.915C1.97828 15.0042 1.47438 14.6455 1.38508 14.1138C1.29617 13.5844 1.25 13.0412 1.25 12.488C1.25 8.76734 3.33323 5.53423 6.39763 3.88677L5.76742 3.63014C5.26762 3.42661 5.02763 2.85691 5.23138 2.35768ZM11.5248 3.66233C11.6141 3.13063 12.118 2.77192 12.6503 2.86112C17.273 3.63581 20.7954 7.65005 20.7954 12.488C20.7954 13.0034 20.7553 13.5097 20.6781 14.004L21.2224 13.6336C21.6684 13.33 22.2764 13.4451 22.5803 13.8907C22.8842 14.3362 22.7689 14.9435 22.3229 15.2471L19.4541 17.1994C19.2234 17.3564 18.9366 17.4074 18.6658 17.3395C18.3951 17.2716 18.1664 17.0913 18.0373 16.8441L16.5084 13.9155C16.2588 13.4375 16.4445 12.8479 16.923 12.5986C17.4016 12.3493 17.9919 12.5347 18.2414 13.0128L18.7112 13.9126C18.7963 13.451 18.8408 12.9749 18.8408 12.488C18.8408 8.61938 16.0238 5.40609 12.3269 4.78657C11.7946 4.69737 11.4355 4.19403 11.5248 3.66233ZM2.7311 17.3689C2.7311 16.8297 3.16864 16.3927 3.70837 16.3927H7.11361C7.65334 16.3927 8.09088 16.8297 8.09088 17.3689C8.09088 17.908 7.65334 18.345 7.11361 18.345H5.85114C7.22998 19.5609 9.04032 20.2974 11.0227 20.2974C13.0257 20.2974 14.8507 19.5463 16.2345 18.3091C16.6367 17.9496 17.2545 17.9837 17.6145 18.3855C17.9744 18.7872 17.9402 19.4043 17.538 19.7639C15.8097 21.309 13.525 22.2498 11.0227 22.2498C8.60426 22.2498 6.39132 21.3718 4.68563 19.9193V20.7855C4.68563 21.3246 4.2481 21.7617 3.70837 21.7617C3.16864 21.7617 2.7311 21.3246 2.7311 20.7855V17.3689Z',
  d6: 'M5.23139 2.35768C5.43514 1.85844 6.00547 1.61872 6.50527 1.82224L9.43707 3.01613C9.92228 3.21371 10.1651 3.75837 9.98762 4.25081L9.01035 6.96164C8.82749 7.46888 8.26759 7.73201 7.75978 7.54935C7.25197 7.36669 6.98855 6.80741 7.17141 6.30017L7.44465 5.54223C4.9263 6.83936 3.20454 9.4636 3.20454 12.488C3.20454 12.9325 3.24163 13.3677 3.31268 13.7907C3.40198 14.3224 3.04286 14.8258 2.51057 14.915C1.97828 15.0042 1.47438 14.6455 1.38508 14.1138C1.29617 13.5844 1.25 13.0412 1.25 12.488C1.25 8.76734 3.33323 5.53423 6.39763 3.88677L5.76742 3.63014C5.26762 3.42661 5.02763 2.85691 5.23139 2.35768ZM2.7311 17.3689C2.7311 16.8297 3.16864 16.3927 3.70837 16.3927H7.11361C7.65334 16.3927 8.09088 16.8297 8.09088 17.3689C8.09088 17.908 7.65334 18.345 7.11361 18.345H5.85114C7.22998 19.5609 9.04032 20.2974 11.0227 20.2974C13.0257 20.2974 14.8507 19.5463 16.2345 18.3091C16.6367 17.9496 17.2545 17.9837 17.6145 18.3855C17.9744 18.7872 17.9402 19.4043 17.538 19.7639C15.8097 21.309 13.525 22.2498 11.0227 22.2498C8.60427 22.2498 6.39132 21.3718 4.68564 19.9193V20.7855C4.68564 21.3246 4.2481 21.7617 3.70837 21.7617C3.16864 21.7617 2.7311 21.3246 2.7311 20.7855V17.3689Z',
  d7: 'M11.5244 3.66223C11.6137 3.13053 12.1176 2.77182 12.6499 2.86102C17.2726 3.63571 20.7949 7.64995 20.7949 12.4879C20.7949 13.0033 20.7549 13.5096 20.6777 14.0039L21.222 13.6335C21.668 13.3299 22.276 13.445 22.5799 13.8906C22.8837 14.3361 22.7685 14.9434 22.3225 15.247L19.4537 17.1993C19.223 17.3563 18.9361 17.4073 18.6654 17.3394C18.3947 17.2715 18.166 17.0912 18.0369 16.844L16.508 13.9154C16.2584 13.4374 16.4441 12.8478 16.9226 12.5985C17.4012 12.3492 17.9915 12.5346 18.241 13.0127L18.7108 13.9125C18.7959 13.4509 18.8404 12.9748 18.8404 12.4879C18.8404 8.61928 16.0233 5.40599 12.3265 4.78647C11.7942 4.69727 11.4351 4.19393 11.5244 3.66223Z',
  d8: 'M6 2.5L9 3.72302L8 6.5M22 14.5L19.0645 16.5L17.5 13.5M7 17.5H3.51555V21M17 19.2083C15.4077 20.6334 13.3051 21.5 11 21.5C8.16863 21.5 5.64262 20.1925 3.99281 18.1484M12.5 3.62444C16.7566 4.33855 20 8.04051 20 12.5C20 13.6852 19.7709 14.8169 19.3546 15.8533M2.12444 14C2.0426 13.5122 2 13.0111 2 12.5C2 8.42173 4.7126 4.97702 8.43197 3.87169',
  d9: 'M5.52465 1.75L10.1478 3.63867L8.55004 8.08488L6.74308 7.43282L7.33692 5.7803C4.86237 7.05897 3.17055 9.64585 3.17055 12.6272C3.17055 13.0654 3.20699 13.4944 3.2768 13.9114L1.38273 14.2298C1.29537 13.708 1.25 13.1725 1.25 12.6272C1.25 8.95951 3.297 5.77241 6.30811 4.14841L4.79963 3.53216L5.52465 1.75ZM18.5349 12.6272C18.5349 8.81365 15.7668 5.6461 12.1343 5.03539L12.452 3.13736C16.9944 3.90101 20.4555 7.85811 20.4555 12.6272C20.4555 13.1352 20.4161 13.6344 20.3402 14.1216L21.6686 13.2147L22.75 14.8052L18.2448 17.881L15.799 13.1812L17.5019 12.2913L18.4076 14.0315C18.4912 13.5765 18.5349 13.1072 18.5349 12.6272ZM2.70534 16.4763H7.97191V18.4009H5.77112C7.12598 19.5994 8.90484 20.3254 10.8527 20.3254C12.8209 20.3254 14.6142 19.585 15.9739 18.3654L17.2548 19.7995C15.5565 21.3227 13.3115 22.25 10.8527 22.25C8.47637 22.25 6.3019 21.3846 4.62589 19.9527V21.7689H2.70534V16.4763Z',
};

export const IconRecycle03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-stroke-rounded IconRecycle03StrokeRounded"
    >
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

export const IconRecycle03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-duotone-rounded IconRecycle03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRecycle03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-twotone-rounded IconRecycle03TwotoneRounded"
    >
      <path 
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

export const IconRecycle03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-solid-rounded IconRecycle03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-bulk-rounded IconRecycle03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconRecycle03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-stroke-sharp IconRecycle03StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-03-solid-sharp IconRecycle03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRecycle03: TheIconSelfPack = {
  name: 'Recycle03',
  StrokeRounded: IconRecycle03StrokeRounded,
  DuotoneRounded: IconRecycle03DuotoneRounded,
  TwotoneRounded: IconRecycle03TwotoneRounded,
  SolidRounded: IconRecycle03SolidRounded,
  BulkRounded: IconRecycle03BulkRounded,
  StrokeSharp: IconRecycle03StrokeSharp,
  SolidSharp: IconRecycle03SolidSharp,
};