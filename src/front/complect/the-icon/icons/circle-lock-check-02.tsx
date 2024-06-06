import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.9635 21.9824C10.7992 21.9941 10.6333 22 10.466 22C6.61877 22 3.5 18.866 3.5 15C3.5 11.134 6.61877 8 10.466 8C12.8331 8 15 9 16 11',
  d2: 'M15 9.5V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5',
  d3: 'M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996',
  d4: 'M11.2145 21.9834C11.0502 21.9951 10.8843 22.001 10.717 22.001C6.86975 22.001 3.75098 18.867 3.75098 15.001C3.75098 11.135 6.86975 8.00098 10.717 8.00098C13.0841 8.00098 15.251 9.00098 16.251 11.001',
  d5: 'M15.251 9.50098V6.50098C15.251 4.0157 13.2363 2.00098 10.751 2.00098C8.2657 2.00098 6.25098 4.0157 6.25098 6.50098V9.50098',
  d6: 'M10.751 8.00098C6.88499 8.00098 3.75098 11.135 3.75098 15.001C3.75098 18.867 6.88499 22.001 10.751 22.001C12.0084 22.001 13.1884 21.6695 14.2083 21.089C13.3184 20.3554 12.751 19.2444 12.751 18.001C12.751 15.7919 14.5419 14.001 16.751 14.001C17.0763 14.001 17.3925 14.0398 17.6952 14.1131C17.2589 10.6663 14.3162 8.00098 10.751 8.00098Z',
  d7: 'M16.751 22.001C18.9601 22.001 20.751 20.2101 20.751 18.001C20.751 15.7918 18.9601 14.001 16.751 14.001C14.5418 14.001 12.751 15.7918 12.751 18.001C12.751 20.2101 14.5418 22.001 16.751 22.001Z',
  d8: 'M15.4189 18.4446C15.7189 18.5886 16.0909 18.9606 16.2709 19.2606C16.3309 19.6806 16.6309 18.0606 18.0949 17.1006',
  d9: 'M15.168 18.4436C15.468 18.5876 15.84 18.9596 16.02 19.2596C16.08 19.6796 16.38 18.0596 17.844 17.0996M20.5 18C20.5 20.2091 18.7091 22 16.5 22C14.2909 22 12.5 20.2091 12.5 18C12.5 15.7909 14.2909 14 16.5 14C18.7091 14 20.5 15.7909 20.5 18Z',
  d10: 'M5 6.75C5 3.71243 7.46243 1.25 10.5 1.25C13.5376 1.25 16 3.71243 16 6.75V9.75C16 10.3023 15.5523 10.75 15 10.75C14.4477 10.75 14 10.3023 14 9.75V6.75C14 4.817 12.433 3.25 10.5 3.25C8.567 3.25 7 4.817 7 6.75V9.75C7 10.3023 6.55228 10.75 6 10.75C5.44772 10.75 5 10.3023 5 9.75V6.75Z',
  d11: 'M10.4998 7.25C6.21961 7.25 2.74982 10.7198 2.74982 15C2.74982 19.2802 6.21961 22.75 10.4998 22.75C10.7045 22.75 10.9073 22.7421 11.108 22.7265C11.5677 22.6908 11.7975 22.673 11.8709 22.5121C11.9443 22.3512 11.7874 22.1393 11.4737 21.7155C10.7046 20.6769 10.2498 19.3916 10.2498 18C10.2498 14.5482 13.048 11.75 16.4998 11.75C16.9866 11.75 17.23 11.75 17.3189 11.6155C17.3278 11.6021 17.3352 11.5886 17.3419 11.574C17.4085 11.4271 17.2954 11.2468 17.0691 10.8863C15.6985 8.70207 13.2687 7.25 10.4998 7.25Z',
  d12: 'M16.5 13.25C13.8766 13.25 11.75 15.3766 11.75 18C11.75 20.6234 13.8766 22.75 16.5 22.75C19.1234 22.75 21.25 20.6234 21.25 18C21.25 15.3766 19.1234 13.25 16.5 13.25ZM18.1903 17.7699C18.555 17.5736 18.6915 17.1187 18.4952 16.754C18.2989 16.3893 17.844 16.2528 17.4793 16.4491C16.8214 16.8033 16.2583 17.5496 15.9274 18.0505C15.8177 17.9627 15.6345 17.8343 15.4911 17.7659C15.1172 17.5876 14.6696 17.7461 14.4912 18.1199C14.3145 18.4903 14.4685 18.9332 14.8349 19.1148C14.8349 19.1148 14.9387 19.1799 14.9977 19.2277C15.1161 19.3235 15.2739 19.48 15.4109 19.7125C15.5515 19.9512 15.8123 20.0929 16.0892 20.0811C16.3658 20.0692 16.6137 19.9053 16.7335 19.6557C16.7547 19.6138 16.8162 19.4933 16.8581 19.4164C16.9423 19.2619 17.0636 19.0516 17.2112 18.8281C17.5289 18.3472 17.8869 17.9333 18.1903 17.7699Z',
  d13: 'M10.5 1.25C7.46243 1.25 5 3.71243 5 6.75V9.53992C5.58168 8.95401 6.25634 8.46054 7 8.08347V6.75C7 4.817 8.567 3.25 10.5 3.25C12.433 3.25 14 4.817 14 6.75V8.08347C14.7437 8.46054 15.4183 8.95401 16 9.53992V6.75C16 3.71243 13.5376 1.25 10.5 1.25Z',
  d14: 'M16.0556 19.3333L15.5675 19.9028L16.1351 20.3893L16.6234 19.8233L16.0556 19.3333ZM19.75 18C19.75 19.7949 18.2949 21.25 16.5 21.25V22.75C19.1234 22.75 21.25 20.6234 21.25 18H19.75ZM16.5 21.25C14.7051 21.25 13.25 19.7949 13.25 18H11.75C11.75 20.6234 13.8766 22.75 16.5 22.75V21.25ZM13.25 18C13.25 16.2051 14.7051 14.75 16.5 14.75V13.25C13.8766 13.25 11.75 15.3766 11.75 18H13.25ZM16.5 14.75C18.2949 14.75 19.75 16.2051 19.75 18H21.25C21.25 15.3766 19.1234 13.25 16.5 13.25V14.75ZM14.0119 18.5694L15.5675 19.9028L16.5436 18.7639L14.9881 17.4306L14.0119 18.5694ZM16.6234 19.8233L19.0679 16.9899L17.9321 16.0101L15.4877 18.8434L16.6234 19.8233Z',
  d15: 'M5 6.75C5 3.71243 7.46243 1.25 10.5 1.25C13.5376 1.25 16 3.71243 16 6.75V9.75H14V6.75C14 4.817 12.433 3.25 10.5 3.25C8.567 3.25 7 4.817 7 6.75V9.75H5V6.75Z',
  d16: 'M16.5 13.25C13.8766 13.25 11.75 15.3766 11.75 18C11.75 20.6234 13.8766 22.75 16.5 22.75C19.1234 22.75 21.25 20.6234 21.25 18C21.25 15.3766 19.1234 13.25 16.5 13.25ZM16.1349 20.389L19.0677 16.9896L17.9319 16.0098L15.9759 18.2771L14.9879 17.4302L14.0117 18.5691L16.1349 20.389Z',
  d17: 'M10.5 7.25C6.21979 7.25 2.75 10.7198 2.75 15C2.75 19.2802 6.21979 22.75 10.5 22.75C11.0923 22.75 11.6691 22.6836 12.2233 22.5577C11.0087 21.4175 10.25 19.7974 10.25 18C10.25 14.5482 13.0482 11.75 16.5 11.75C16.8683 11.75 17.2291 11.7819 17.5799 11.843C16.3712 9.13631 13.6559 7.25 10.5 7.25Z',
};

export const IconCircleLockCheck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-stroke-rounded IconCircleLockCheck02StrokeRounded"
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
      <circle 
        cx="16.5" 
        cy="18" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-duotone-rounded IconCircleLockCheck02DuotoneRounded"
    >
      <path 
        d={d.d4} 
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-twotone-rounded IconCircleLockCheck02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-solid-rounded IconCircleLockCheck02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const IconCircleLockCheck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-bulk-rounded IconCircleLockCheck02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
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

export const IconCircleLockCheck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-stroke-sharp IconCircleLockCheck02StrokeSharp"
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleLockCheck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-lock-check-02-solid-sharp IconCircleLockCheck02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleLockCheck02: TheIconSelfPack = {
  name: 'CircleLockCheck02',
  StrokeRounded: IconCircleLockCheck02StrokeRounded,
  DuotoneRounded: IconCircleLockCheck02DuotoneRounded,
  TwotoneRounded: IconCircleLockCheck02TwotoneRounded,
  SolidRounded: IconCircleLockCheck02SolidRounded,
  BulkRounded: IconCircleLockCheck02BulkRounded,
  StrokeSharp: IconCircleLockCheck02StrokeSharp,
  SolidSharp: IconCircleLockCheck02SolidSharp,
};