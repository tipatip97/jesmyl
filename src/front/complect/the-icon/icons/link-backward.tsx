import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18C19.6309 17.0302 18.2632 15.997 16.6177 15.5476C14.5636 14.9865 12.2696 15.2542 10.1528 15.2542C10.1528 15.972 10.4675 18.0982 9.51139 18.4351C8.64251 18.7413 8.18956 17.9409 6.77353 16.5199L4.80823 14.5477C3.60275 13.338 3 12.7332 3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118Z',
  d2: 'M3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18',
  d3: 'M9.76067 4.84645C9.421 4.72674 9.07802 4.71822 8.73915 4.82225C8.42432 4.91889 8.15136 5.10113 7.91255 5.29546C7.46081 5.66307 6.90478 6.27477 6.24228 6.93959C5.57526 7.60895 4.90826 8.27833 4.24122 8.94766C3.66896 9.52188 3.18755 10.0049 2.85592 10.4393C2.50528 10.8986 2.25 11.3933 2.25 11.9945C2.25 12.5957 2.50528 13.0903 2.85592 13.5496C3.18755 13.984 3.66896 14.467 4.2412 15.0413L6.24228 17.0493C6.78381 17.5928 7.27666 18.1986 7.86156 18.6964C8.0969 18.8967 8.37409 19.0885 8.70722 19.1852C9.06288 19.2883 9.4151 19.2642 9.76064 19.1425C10.2728 18.962 10.5572 18.5542 10.7097 18.1796C10.8593 17.8117 10.9168 17.3984 10.9392 17.0336C10.9616 16.6697 10.9516 16.303 10.9373 15.9944C11.7656 15.9758 12.5847 15.9381 13.4066 15.9405C14.4753 15.9436 15.4862 16.016 16.42 16.2711C17.8058 16.6496 18.9832 17.4867 20.2746 18.4048C20.7908 18.7718 21.75 18.9112 21.75 18C21.75 15.7826 21.3607 13.5774 20.2815 11.7859C19.1846 9.96524 17.4103 8.6333 14.7886 8.14077C13.514 7.90131 12.1555 7.94934 10.9382 7.97463C10.952 7.67021 10.9611 7.31145 10.9392 6.95538C10.9168 6.59054 10.8593 6.1772 10.7097 5.80938C10.5572 5.43471 10.2728 5.02695 9.76067 4.84645Z',
  d4: 'M17.1701 16.0983C18.3137 16.4316 19.1395 17.036 19.9704 17.7232C20.6325 18.2708 20.9635 18.5447 21.2584 18.3925C21.5532 18.2403 21.5211 17.8232 21.4568 16.9892C21.133 12.787 19.6252 9.13626 14.988 8.20689C13.6892 7.94659 12.3336 7.99415 11 8.02375V15.7361C13.0575 15.6816 15.2121 15.5277 17.1701 16.0983Z',
  d5: 'M8.72125 5.06975C9.07224 4.96932 9.42748 4.97754 9.7793 5.09313C10.3098 5.26739 10.6043 5.6611 10.7622 6.02285C10.9173 6.37798 10.9767 6.77707 11 7.12933V16.86C10.9767 17.2122 10.9173 17.6113 10.7622 17.9665C10.6043 18.3282 10.3098 18.7219 9.77927 18.8962C9.42138 19.0137 9.05656 19.037 8.68817 18.9374C8.34312 18.8441 8.05602 18.6588 7.81227 18.4654C7.20645 17.9848 6.69597 17.3999 6.13507 16.8752L4.06242 14.9364C3.46971 14.382 2.97108 13.9156 2.62759 13.4961C2.26441 13.0527 2 12.5751 2 11.9946C2 11.4142 2.26441 10.9366 2.62759 10.4932C2.97108 10.0737 3.46971 9.60733 4.06243 9.05292L4.06244 9.05291L6.13507 7.11408C6.82126 6.47219 7.39718 5.88158 7.86508 5.52665C8.11243 5.33902 8.39516 5.16307 8.72125 5.06975Z',
  d6: 'M9.9895 5.51004V8.99847L14.3804 9.02413C17.0344 8.98544 18.9133 9.86713 20.1972 12.0417C21.1354 13.5297 20.9922 15.0292 20.9922 18.01C20.9924 18.0183 20.9831 18.0236 20.9764 18.0187C19.3715 16.8517 17.6375 15.0292 14.3048 15.0292C13.5132 15.0292 12.2211 15.0134 9.9895 15.0134V18.49C9.9895 18.4987 9.97909 18.5033 9.97269 18.4973L3.00319 12.0098C2.99894 12.0059 2.99894 11.9991 3.00319 11.9952L9.97269 5.5027C9.97909 5.49674 9.9895 5.50129 9.9895 5.51004Z',
  d7: 'M10.2999 4.8126C10.5733 4.93187 10.75 5.20177 10.75 5.50002V8.25002H12.0282C13.4022 8.25001 14.4717 8.25001 15.334 8.30885C16.2089 8.36854 16.9252 8.49131 17.5831 8.76383C19.2371 9.44891 20.5511 10.763 21.2362 12.4169C21.5087 13.0748 21.6315 13.7911 21.6912 14.666C21.75 15.5283 21.75 16.5978 21.75 17.9717V17.9719V18C21.75 18.2841 21.5895 18.5438 21.3354 18.6708C21.0813 18.7979 20.7773 18.7705 20.55 18.6C18.6673 17.188 17.8385 16.5749 16.9007 16.2198C16.7189 16.151 16.5343 16.0895 16.3476 16.0354C15.3842 15.7568 14.3534 15.75 12 15.75H10.75V18.5C10.75 18.7984 10.5732 19.0684 10.2996 19.1876C10.0261 19.3068 9.70798 19.2525 9.48943 19.0494L2.48943 12.5439C2.33666 12.4019 2.24991 12.2027 2.25 11.9942C2.25009 11.7856 2.33701 11.5865 2.4899 11.4447L9.48989 4.9502C9.70853 4.74736 10.0266 4.69333 10.2999 4.8126Z',
};

export const IconLinkBackwardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-stroke-rounded IconLinkBackwardStrokeRounded"
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

export const IconLinkBackwardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-duotone-rounded IconLinkBackwardDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLinkBackwardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-twotone-rounded IconLinkBackwardTwotoneRounded"
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

export const IconLinkBackwardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-solid-rounded IconLinkBackwardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkBackwardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-bulk-rounded IconLinkBackwardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLinkBackwardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-stroke-sharp IconLinkBackwardStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLinkBackwardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-backward-solid-sharp IconLinkBackwardSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLinkBackward: TheIconSelfPack = {
  name: 'LinkBackward',
  StrokeRounded: IconLinkBackwardStrokeRounded,
  DuotoneRounded: IconLinkBackwardDuotoneRounded,
  TwotoneRounded: IconLinkBackwardTwotoneRounded,
  SolidRounded: IconLinkBackwardSolidRounded,
  BulkRounded: IconLinkBackwardBulkRounded,
  StrokeSharp: IconLinkBackwardStrokeSharp,
  SolidSharp: IconLinkBackwardSolidSharp,
};